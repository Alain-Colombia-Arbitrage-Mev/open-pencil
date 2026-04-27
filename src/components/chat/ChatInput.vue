<script setup lang="ts">
import { TooltipProvider } from 'reka-ui'
import { computed, ref } from 'vue'

import ProviderModelSelect from '@/components/chat/ProviderModelSelect.vue'
import ProviderSettings from '@/components/chat/ProviderSettings.vue'
import Tip from '@/components/ui/Tip.vue'
import { useButtonUI } from '@/components/ui/button'
import { useInputUI } from '@/components/ui/input'
import { useAIChat } from '@/composables/use-chat'
import { useI18n } from '@open-pencil/vue'

import { ACP_AGENTS, STYLE_PRESETS } from '@open-pencil/core'

const { providerID, providerDef, modelID, customModelID, stylePresetID } = useAIChat()

const activeStylePreset = computed(
  () => STYLE_PRESETS.find((p) => p.id === stylePresetID.value) ?? STYLE_PRESETS[0]
)
const { dialogs } = useI18n()

const { status } = defineProps<{
  status: 'ready' | 'submitted' | 'streaming' | 'error'
}>()

const emit = defineEmits<{
  submit: [text: string, files?: File[]]
  stop: []
}>()

const input = ref('')
const attachedFiles = ref<File[]>([])
const fileInputRef = ref<HTMLInputElement>()

function openFilePicker() {
  fileInputRef.value?.click()
}

function handleFileSelect(e: Event) {
  const target = e.target as HTMLInputElement
  const files = target.files
  if (!files) return
  for (const file of Array.from(files)) {
    if (file.type.startsWith('image/')) attachedFiles.value.push(file)
  }
  target.value = ''
}

function removeFile(index: number) {
  attachedFiles.value.splice(index, 1)
}

function filePreviewUrl(file: File): string {
  return URL.createObjectURL(file)
}

function handlePaste(e: ClipboardEvent) {
  const items = e.clipboardData?.items
  if (!items) return
  for (const item of Array.from(items)) {
    if (item.kind !== 'file' || !item.type.startsWith('image/')) continue
    const file = item.getAsFile()
    if (!file) continue
    attachedFiles.value.push(file)
    e.preventDefault()
  }
}

function handleDrop(e: DragEvent) {
  const files = e.dataTransfer?.files
  if (!files) return
  for (const file of Array.from(files)) {
    if (file.type.startsWith('image/')) attachedFiles.value.push(file)
  }
}

const isStreaming = computed(() => status === 'streaming' || status === 'submitted')
const isACPProvider = computed(() => providerID.value.startsWith('acp:'))
const acpAgentName = computed(() => {
  const agentId = providerID.value.replace('acp:', '')
  return ACP_AGENTS.find((a) => a.id === agentId)?.name ?? agentId
})
const isCustomProvider = computed(
  () => providerID.value === 'openai-compatible' || providerID.value === 'anthropic-compatible'
)

const selectedModelName = computed(() => {
  if (isCustomProvider.value) return customModelID.value || 'No model'
  return providerDef.value.models.find((m) => m.id === modelID.value)?.name ?? modelID.value
})

function handleSubmit(e: Event) {
  e.preventDefault()
  const text = input.value.trim()
  const files = attachedFiles.value
  if (!text && files.length === 0) return
  emit('submit', text, files.length > 0 ? [...files] : undefined)
  input.value = ''
  attachedFiles.value = []
}
</script>

<template>
  <TooltipProvider>
    <div class="shrink-0 border-t border-border px-3 py-2">
      <!-- Model selector & settings -->
      <div class="mb-1.5 flex items-center gap-1">
        <template v-if="isACPProvider">
          <div class="flex items-center gap-1 px-1.5 py-0.5 text-[10px] text-muted">
            <icon-lucide-bot class="size-3" />
            {{ acpAgentName }}
          </div>
        </template>
        <template v-else-if="isCustomProvider">
          <div
            class="flex items-center gap-1 px-1.5 py-0.5 text-[10px] text-muted"
            data-test-id="chat-custom-model-label"
          >
            <icon-lucide-bot class="size-3" />
            {{ selectedModelName }}
          </div>
        </template>
        <ProviderModelSelect v-else>
          <template #value>{{ selectedModelName }}</template>
        </ProviderModelSelect>

        <div class="ml-auto flex items-center gap-1">
          <select
            v-model="stylePresetID"
            data-test-id="chat-style-preset"
            class="h-6 cursor-pointer rounded bg-hover px-1.5 text-[10px] font-medium text-surface outline-none hover:bg-hover/80"
            :title="activeStylePreset.description"
          >
            <option v-for="preset in STYLE_PRESETS" :key="preset.id" :value="preset.id">
              {{ preset.name }}
            </option>
          </select>
          <ProviderSettings />
        </div>
      </div>

      <!-- Attached images preview -->
      <div
        v-if="attachedFiles.length > 0"
        data-test-id="chat-attached-files"
        class="mb-1.5 flex flex-wrap gap-1.5"
      >
        <div
          v-for="(file, i) in attachedFiles"
          :key="`${file.name}-${i}`"
          class="group relative size-14 shrink-0 overflow-hidden rounded-md border border-border bg-hover"
        >
          <img :src="filePreviewUrl(file)" :alt="file.name" class="size-full object-cover" />
          <button
            type="button"
            class="absolute right-0.5 top-0.5 flex size-4 items-center justify-center rounded-full bg-black/60 opacity-0 transition-opacity group-hover:opacity-100"
            :aria-label="`Remove ${file.name}`"
            @click="removeFile(i)"
          >
            <icon-lucide-x class="size-2.5 text-white" />
          </button>
        </div>
      </div>

      <input
        ref="fileInputRef"
        type="file"
        accept="image/*"
        multiple
        class="hidden"
        @change="handleFileSelect"
      />

      <!-- Input form -->
      <form
        class="flex gap-1.5"
        @submit="handleSubmit"
        @drop.prevent="handleDrop"
        @dragover.prevent
      >
        <Tip :label="'Attach reference image'">
          <button
            type="button"
            data-test-id="chat-attach-button"
            :class="
              useButtonUI({
                tone: 'ghost',
                shape: 'rounded',
                size: 'sm',
                ui: { base: 'shrink-0 border border-border px-2 py-1.5' }
              }).base
            "
            @click="openFilePicker"
          >
            <icon-lucide-paperclip class="size-3" />
          </button>
        </Tip>
        <input
          v-model="input"
          type="text"
          data-test-id="chat-input"
          :placeholder="
            isStreaming ? (dialogs.queueMessage ?? 'Queue a message…') : dialogs.describeChange
          "
          :class="useInputUI({ ui: { base: 'min-w-0 flex-1 placeholder:text-muted' } }).base"
          @paste.stop="handlePaste"
          @copy.stop
          @cut.stop
        />
        <Tip v-if="isStreaming" :label="dialogs.stopGenerating">
          <button
            type="button"
            data-test-id="chat-stop-button"
            :class="
              useButtonUI({
                tone: 'ghost',
                shape: 'rounded',
                size: 'sm',
                ui: { base: 'shrink-0 border border-border px-2 py-1.5' }
              }).base
            "
            @click="emit('stop')"
          >
            <icon-lucide-square class="size-3" />
          </button>
        </Tip>
        <Tip :label="isStreaming ? (dialogs.queueMessage ?? 'Queue message') : dialogs.sendMessage">
          <button
            type="submit"
            data-test-id="chat-send-button"
            :class="
              useButtonUI({
                tone: 'accent',
                shape: 'rounded',
                size: 'sm',
                ui: { base: 'shrink-0 px-2.5 py-1.5 font-medium' }
              }).base
            "
            :disabled="!input.trim()"
          >
            <icon-lucide-list-plus v-if="isStreaming" class="size-3" />
            <icon-lucide-send v-else class="size-3" />
          </button>
        </Tip>
      </form>
    </div>
  </TooltipProvider>
</template>
