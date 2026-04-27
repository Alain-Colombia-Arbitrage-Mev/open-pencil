<script setup lang="ts">
import { ScrollAreaRoot, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaViewport } from 'reka-ui'
import { computed, markRaw, nextTick, ref, watch } from 'vue'

import { getAcpDebugText, clearAcpDebugLog, hasAcpDebugEntries } from '@/ai/acp-transport'
import { copyChatLog } from '@/ai/chat-debug'
import { clearToolLogEntries, didHitStepLimit } from '@/ai/tools'
import { activeTab } from '@/stores/tabs'
import ACPPermissionDialog from '@/components/chat/ACPPermissionDialog.vue'
import ChatInput from '@/components/chat/ChatInput.vue'
import ChatMessage from '@/components/chat/ChatMessage.vue'
import ProviderSetup from '@/components/chat/ProviderSetup.vue'
import { useAIChat } from '@/composables/use-chat'
import { toast } from '@/utils/toast'
import { useI18n } from '@open-pencil/vue'

import type { Chat } from '@ai-sdk/vue'
import type { UIMessage } from 'ai'

const IS_DEV = import.meta.env.DEV

const {
  isConfigured,
  ensureChat,
  resetChat,
  persistCurrentMessages,
  startNewChat,
  loadChatSession,
  removeChatSession,
  getChatSessions,
  currentSessionId
} = useAIChat()
const { dialogs } = useI18n()

const chat = ref<Chat<UIMessage> | null>(null)
const historyOpen = ref(false)
const sessions = computed(() => getChatSessions())
const activeId = computed(() => currentSessionId())

ensureChat().then((c) => {
  if (c) chat.value = markRaw(c)
})
const messagesEnd = ref<HTMLDivElement>()
const debugCopied = ref(false)
const acpLogCopied = ref(false)
const queuedMessages = ref<string[]>([])

const messages = computed(() => chat.value?.messages ?? [])
const status = computed(() => chat.value?.status ?? 'ready')
const isThinking = computed(() => {
  const s = status.value
  if (s !== 'submitted' && s !== 'streaming') return false
  if (messages.value.length === 0) return true
  const last = messages.value[messages.value.length - 1]
  if (last.role !== 'assistant') return true
  const parts = last.parts
  if (parts.length === 0) return true
  const lastPart = parts[parts.length - 1] as Record<string, unknown>
  if (lastPart.type === 'step-start') return true
  if ('toolCallId' in lastPart && lastPart.state === 'output-available') return true
  if ('toolCallId' in lastPart && lastPart.state === 'output-error') return true
  return s === 'submitted'
})

const showContinue = computed(() => {
  if (status.value !== 'ready') return false
  if (messages.value.length === 0) return false
  const last = messages.value[messages.value.length - 1]
  return last.role === 'assistant' && didHitStepLimit()
})

function scrollToBottom() {
  nextTick(() => {
    messagesEnd.value?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  })
}

watch(messages, scrollToBottom, { deep: true })
watch(messages, () => persistCurrentMessages(), { deep: true })
watch(
  () => activeTab.value?.id,
  async () => {
    const nextChat = await ensureChat()
    chat.value = nextChat ? markRaw(nextChat) : null
  }
)

async function handleSubmit(text: string, files?: File[]) {
  if (status.value === 'streaming' || status.value === 'submitted') {
    // queue only if text (files can't be serialized cleanly; user resends if needed)
    if (text) queuedMessages.value.push(text)
    return
  }
  try {
    const c = await ensureChat()
    if (c) chat.value = markRaw(c)
  } catch (e) {
    console.error('Failed to initialize chat:', e)
    toast.error(e instanceof Error ? e.message : String(e))
    return
  }
  const payload: { text: string; files?: FileList } = { text }
  if (files && files.length > 0) {
    const dt = new DataTransfer()
    for (const f of files) dt.items.add(f)
    payload.files = dt.files
  }
  chat.value?.sendMessage(payload).catch((e: unknown) => {
    console.error('Chat error:', e)
    toast.error(e instanceof Error ? e.message : String(e))
  })
}

function handleStop() {
  chat.value?.stop()
}

function removeQueuedMessage(index: number) {
  queuedMessages.value.splice(index, 1)
}

watch(status, (s) => {
  if (s !== 'ready') return
  if (queuedMessages.value.length === 0) return
  const next = queuedMessages.value.shift()
  if (!next) return
  chat.value?.sendMessage({ text: next }).catch((e: unknown) => {
    console.error('Chat error:', e)
    toast.error(e instanceof Error ? e.message : String(e))
  })
})

async function handleCopyDebug() {
  await copyChatLog(messages.value)
  debugCopied.value = true
  setTimeout(() => {
    debugCopied.value = false
  }, 1500)
}

async function handleCopyAcpLog() {
  const text = getAcpDebugText()
  if (!text) return
  await navigator.clipboard.writeText(text)
  acpLogCopied.value = true
  setTimeout(() => {
    acpLogCopied.value = false
  }, 1500)
}

function handleClearChat() {
  const hasMessages = messages.value.length > 0
  if (hasMessages && !confirm('Delete this chat? This cannot be undone.')) return
  chat.value = null
  resetChat()
  clearToolLogEntries()
  clearAcpDebugLog()
  queuedMessages.value = []
}

async function handleNewChat() {
  startNewChat()
  clearToolLogEntries()
  clearAcpDebugLog()
  queuedMessages.value = []
  const c = await ensureChat()
  chat.value = c ? markRaw(c) : null
}

async function handleLoadSession(id: string) {
  loadChatSession(id)
  historyOpen.value = false
  const c = await ensureChat()
  chat.value = c ? markRaw(c) : null
}

function handleDeleteSession(e: Event, id: string) {
  e.stopPropagation()
  if (!confirm('Delete this conversation?')) return
  removeChatSession(id)
  if (id === activeId.value) {
    chat.value = null
  }
}

function formatRelativeTime(ts: number): string {
  const diff = Date.now() - ts
  const mins = Math.floor(diff / 60000)
  if (mins < 1) return 'now'
  if (mins < 60) return `${mins}m`
  const hours = Math.floor(mins / 60)
  if (hours < 24) return `${hours}h`
  const days = Math.floor(hours / 24)
  if (days < 7) return `${days}d`
  return new Date(ts).toLocaleDateString()
}
</script>

<template>
  <div data-test-id="chat-panel" class="flex min-w-0 flex-1 flex-col overflow-hidden select-text">
    <ProviderSetup v-if="!isConfigured" />

    <template v-else>
      <!-- Chat header with new chat + history -->
      <div class="relative flex shrink-0 items-center gap-1 border-b border-border px-3 py-1.5">
        <button
          type="button"
          data-test-id="chat-new-button"
          class="flex items-center gap-1 rounded px-1.5 py-1 text-[11px] font-medium text-muted hover:bg-hover hover:text-surface"
          @click="handleNewChat"
        >
          <icon-lucide-plus class="size-3" />
          New chat
        </button>
        <button
          type="button"
          data-test-id="chat-history-button"
          class="flex items-center gap-1 rounded px-1.5 py-1 text-[11px] font-medium text-muted hover:bg-hover hover:text-surface"
          :class="{ 'bg-hover text-surface': historyOpen }"
          @click="historyOpen = !historyOpen"
        >
          <icon-lucide-history class="size-3" />
          History
          <span v-if="sessions.length > 0" class="text-muted/60">({{ sessions.length }})</span>
        </button>

        <!-- History dropdown -->
        <div
          v-if="historyOpen"
          data-test-id="chat-history-panel"
          class="absolute inset-x-0 top-full z-20 mx-2 mt-1 max-h-96 overflow-hidden rounded-lg border border-border bg-surface shadow-lg"
        >
          <div
            class="flex items-center justify-between px-3 py-2 text-[10px] font-medium uppercase tracking-wide text-muted"
          >
            <span>Conversations</span>
            <button
              type="button"
              class="rounded p-0.5 hover:bg-hover"
              aria-label="Close history"
              @click="historyOpen = false"
            >
              <icon-lucide-x class="size-3" />
            </button>
          </div>
          <div v-if="sessions.length === 0" class="px-3 pb-3 text-xs text-muted">
            No past conversations yet.
          </div>
          <ScrollAreaRoot v-else class="max-h-80">
            <ScrollAreaViewport class="max-h-80">
              <ul class="flex flex-col pb-1">
                <li
                  v-for="session in sessions"
                  :key="session.id"
                  class="group flex cursor-pointer items-center gap-2 border-t border-border/50 px-3 py-2 text-xs hover:bg-hover"
                  :class="{ 'bg-hover/60': session.id === activeId }"
                  @click="handleLoadSession(session.id)"
                >
                  <icon-lucide-message-square
                    class="size-3 shrink-0"
                    :class="session.id === activeId ? 'text-accent' : 'text-muted'"
                  />
                  <div class="min-w-0 flex-1">
                    <div class="truncate font-medium">{{ session.title }}</div>
                    <div class="text-[10px] text-muted">
                      {{ session.messages.length }} messages ·
                      {{ formatRelativeTime(session.updatedAt) }}
                    </div>
                  </div>
                  <button
                    type="button"
                    class="shrink-0 rounded p-1 text-muted opacity-0 transition-opacity hover:bg-muted/20 hover:text-red-400 group-hover:opacity-100"
                    :aria-label="`Delete ${session.title}`"
                    @click="handleDeleteSession($event, session.id)"
                  >
                    <icon-lucide-trash-2 class="size-3" />
                  </button>
                </li>
              </ul>
            </ScrollAreaViewport>
            <ScrollAreaScrollbar
              orientation="vertical"
              class="flex w-1.5 touch-none p-px select-none"
            >
              <ScrollAreaThumb class="relative flex-1 rounded-full bg-muted/30" />
            </ScrollAreaScrollbar>
          </ScrollAreaRoot>
        </div>
      </div>

      <ScrollAreaRoot class="min-h-0 flex-1">
        <ScrollAreaViewport class="h-full px-3 py-3 [&>div]:h-full">
          <!-- Empty state -->
          <div
            v-if="messages.length === 0"
            data-test-id="chat-empty-state"
            class="flex h-full flex-col items-center justify-center gap-3 text-muted"
          >
            <icon-lucide-message-circle class="size-8 opacity-50" />
            <p class="text-center text-xs">{{ dialogs.describeCreateOrChange }}</p>
          </div>

          <!-- Messages -->
          <div v-else data-test-id="chat-messages" class="flex flex-col gap-3">
            <ChatMessage v-for="msg in messages" :key="msg.id" :message="msg" />

            <!-- Thinking indicator: shown when AI is working but no visible activity -->
            <div v-if="isThinking" data-test-id="chat-typing-indicator" class="flex gap-2">
              <div
                class="flex size-6 shrink-0 items-center justify-center rounded-full bg-muted/20 text-[10px] font-bold text-muted"
              >
                AI
              </div>
              <div class="flex items-center gap-1 py-2">
                <span
                  class="size-1.5 animate-bounce rounded-full bg-muted"
                  style="animation-delay: 0ms"
                />
                <span
                  class="size-1.5 animate-bounce rounded-full bg-muted"
                  style="animation-delay: 150ms"
                />
                <span
                  class="size-1.5 animate-bounce rounded-full bg-muted"
                  style="animation-delay: 300ms"
                />
              </div>
            </div>

            <!-- Continue button when step limit reached -->
            <div v-if="showContinue" class="flex justify-center py-2">
              <button
                class="flex items-center gap-1.5 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent transition-colors hover:bg-accent/20"
                @click="handleSubmit('Continue where you left off')"
              >
                <icon-lucide-play class="size-3" />
                Continue
              </button>
            </div>

            <div ref="messagesEnd" />
          </div>
        </ScrollAreaViewport>
        <ScrollAreaScrollbar orientation="vertical" class="flex w-1.5 touch-none p-px select-none">
          <ScrollAreaThumb class="relative flex-1 rounded-full bg-muted/30" />
        </ScrollAreaScrollbar>
      </ScrollAreaRoot>

      <!-- Chat toolbar -->
      <div
        v-if="messages.length > 0"
        class="flex shrink-0 items-center gap-1 border-t border-border px-3 py-1"
      >
        <button
          v-if="IS_DEV"
          class="flex items-center gap-1 rounded px-1.5 py-0.5 text-[10px] text-muted hover:bg-hover hover:text-surface"
          @click="handleCopyDebug"
        >
          <icon-lucide-clipboard-copy v-if="!debugCopied" class="size-3" />
          <icon-lucide-check v-else class="size-3 text-green-400" />
          {{ debugCopied ? 'Copied' : 'Copy log' }}
        </button>
        <button
          v-if="IS_DEV && hasAcpDebugEntries()"
          class="flex items-center gap-1 rounded px-1.5 py-0.5 text-[10px] text-muted hover:bg-hover hover:text-surface"
          @click="handleCopyAcpLog"
        >
          <icon-lucide-bug v-if="!acpLogCopied" class="size-3" />
          <icon-lucide-check v-else class="size-3 text-green-400" />
          {{ acpLogCopied ? 'Copied' : 'ACP log' }}
        </button>
        <button
          data-test-id="chat-delete-current-button"
          class="ml-auto flex items-center gap-1 rounded px-1.5 py-0.5 text-[10px] text-muted hover:bg-hover hover:text-red-400"
          @click="handleClearChat"
        >
          <icon-lucide-trash-2 class="size-3" />
          Delete chat
        </button>
      </div>

      <!-- Queued messages preview -->
      <div
        v-if="queuedMessages.length > 0"
        data-test-id="chat-queued-messages"
        class="shrink-0 border-t border-border bg-surface/40 px-3 py-1.5"
      >
        <div class="mb-1 flex items-center gap-1 text-[10px] font-medium text-muted">
          <icon-lucide-list-todo class="size-3" />
          Queued ({{ queuedMessages.length }})
        </div>
        <ul class="flex flex-col gap-1">
          <li
            v-for="(text, i) in queuedMessages"
            :key="i"
            class="group flex items-center gap-1.5 rounded bg-muted/10 px-2 py-1 text-xs"
          >
            <icon-lucide-clock class="size-3 shrink-0 text-muted" />
            <span class="min-w-0 flex-1 truncate">{{ text }}</span>
            <button
              type="button"
              class="shrink-0 rounded p-0.5 text-muted opacity-0 transition-opacity hover:bg-hover hover:text-surface group-hover:opacity-100"
              :aria-label="`Remove queued message ${i + 1}`"
              @click="removeQueuedMessage(i)"
            >
              <icon-lucide-x class="size-3" />
            </button>
          </li>
        </ul>
      </div>

      <ChatInput :status="status" @submit="handleSubmit" @stop="handleStop" />

      <ACPPermissionDialog />
    </template>
  </div>
</template>
