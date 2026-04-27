import type { UIMessage } from 'ai'

const STORAGE_KEY = 'open-pencil:chat:sessions'
const ACTIVE_KEY = 'open-pencil:chat:active'
const MAX_SESSIONS = 50
const TITLE_MAX = 48

export interface ChatSession {
  id: string
  title: string
  createdAt: number
  updatedAt: number
  messages: UIMessage[]
}

function uid(): string {
  const buf = new Uint8Array(6)
  crypto.getRandomValues(buf)
  let rand = ''
  for (const byte of buf) rand += byte.toString(36).padStart(2, '0')
  return `s_${Date.now().toString(36)}_${rand.slice(0, 8)}`
}

function safeParse(raw: string | null): ChatSession[] {
  if (!raw) return []
  try {
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter(
      (s): s is ChatSession =>
        !!s &&
        typeof s.id === 'string' &&
        typeof s.title === 'string' &&
        typeof s.createdAt === 'number' &&
        typeof s.updatedAt === 'number' &&
        Array.isArray(s.messages)
    )
  } catch {
    return []
  }
}

function writeSessions(sessions: ChatSession[]): void {
  try {
    const sorted = [...sessions].sort((a, b) => b.updatedAt - a.updatedAt).slice(0, MAX_SESSIONS)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sorted))
  } catch (e) {
    console.warn('[chat-history] persist failed:', e instanceof Error ? e.message : e)
  }
}

export function listSessions(): ChatSession[] {
  return safeParse(localStorage.getItem(STORAGE_KEY)).sort((a, b) => b.updatedAt - a.updatedAt)
}

export function getSession(id: string): ChatSession | null {
  return listSessions().find((s) => s.id === id) ?? null
}

export function createSession(): ChatSession {
  const now = Date.now()
  const session: ChatSession = {
    id: uid(),
    title: 'New chat',
    createdAt: now,
    updatedAt: now,
    messages: []
  }
  const sessions = listSessions()
  sessions.unshift(session)
  writeSessions(sessions)
  return session
}

export function updateSession(id: string, messages: UIMessage[]): void {
  const sessions = listSessions()
  const idx = sessions.findIndex((s) => s.id === id)
  if (idx === -1) return
  const current = sessions[idx]
  sessions[idx] = {
    ...current,
    messages,
    updatedAt: Date.now(),
    title: current.title && current.title !== 'New chat' ? current.title : deriveTitle(messages)
  }
  writeSessions(sessions)
}

export function renameSession(id: string, title: string): void {
  const sessions = listSessions()
  const idx = sessions.findIndex((s) => s.id === id)
  if (idx === -1) return
  sessions[idx] = { ...sessions[idx], title: title.trim() || 'Untitled', updatedAt: Date.now() }
  writeSessions(sessions)
}

export function deleteSession(id: string): void {
  const sessions = listSessions().filter((s) => s.id !== id)
  writeSessions(sessions)
  if (getActiveSessionId() === id) setActiveSessionId(null)
}

export function clearAllSessions(): void {
  try {
    localStorage.removeItem(STORAGE_KEY)
    localStorage.removeItem(ACTIVE_KEY)
  } catch (e) {
    console.warn('[chat-history] clear failed:', e instanceof Error ? e.message : e)
  }
}

export function getActiveSessionId(): string | null {
  return localStorage.getItem(ACTIVE_KEY)
}

export function setActiveSessionId(id: string | null): void {
  if (id) localStorage.setItem(ACTIVE_KEY, id)
  else localStorage.removeItem(ACTIVE_KEY)
}

export function deriveTitle(messages: UIMessage[]): string {
  for (const msg of messages) {
    if (msg.role !== 'user') continue
    const text = msg.parts
      .filter((p) => p.type === 'text')
      .map((p) => (p as { text: string }).text)
      .join(' ')
      .trim()
    if (!text) continue
    const single = text.replace(/\s+/g, ' ').trim()
    return single.length > TITLE_MAX ? `${single.slice(0, TITLE_MAX).trim()}…` : single
  }
  return 'New chat'
}
