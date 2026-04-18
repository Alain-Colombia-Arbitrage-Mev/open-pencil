import type { Fill, Stroke } from './scene-graph'
import type { Color } from './types'

export const IS_BROWSER = typeof window !== 'undefined'
export const IS_TAURI = IS_BROWSER && '__TAURI_INTERNALS__' in window

export const BLACK: Color = { r: 0, g: 0, b: 0, a: 1 }
export const TRANSPARENT: Color = { r: 0, g: 0, b: 0, a: 0 }
export const DEFAULT_SHADOW_COLOR: Color = { r: 0, g: 0, b: 0, a: 0.25 }
export const SELECTION_COLOR = { r: 0.23, g: 0.51, b: 0.96, a: 1 } satisfies Color
export const COMPONENT_COLOR = { r: 0.592, g: 0.278, b: 1, a: 1 } satisfies Color
export const SNAP_COLOR = { r: 1.0, g: 0.0, b: 0.56, a: 1 } satisfies Color
export const CANVAS_BG_COLOR = { r: 0.96, g: 0.96, b: 0.96, a: 1 } satisfies Color

export const SNAP_THRESHOLD = 5

export const RULER_SIZE = 20
export const RULER_BG_COLOR = { r: 0.14, g: 0.14, b: 0.14, a: 1 } satisfies Color
export const RULER_TICK_COLOR = { r: 0.4, g: 0.4, b: 0.4, a: 1 } satisfies Color
export const RULER_TEXT_COLOR = { r: 0.55, g: 0.55, b: 0.55, a: 1 } satisfies Color
export const RULER_BADGE_HEIGHT = 14
export const RULER_BADGE_PADDING = 3
export const RULER_BADGE_RADIUS = 2
export const RULER_BADGE_EXCLUSION = 30
export const RULER_TEXT_BASELINE = 0.65
export const RULER_MAJOR_TICK = 0.5
export const RULER_MINOR_TICK = 0.25
export const RULER_HIGHLIGHT_ALPHA = 0.3

export const PEN_HANDLE_RADIUS = 2.5
export const PEN_VERTEX_RADIUS = 3
export const PEN_CLOSE_RADIUS_BOOST = 2
export const PEN_PATH_STROKE_WIDTH = 2
export const PARENT_OUTLINE_ALPHA = 0.5
export const PARENT_OUTLINE_DASH = 4
export const DEFAULT_FONT_FAMILY = 'Inter'
export const DEFAULT_FONT_SIZE = 14
export const DEFAULT_STROKE_MITER_LIMIT = 4
export const LABEL_FONT_SIZE = 11
export const SIZE_FONT_SIZE = 10

export const HANDLE_HALF_SIZE = 3

export const LABEL_OFFSET_Y = 8
export const SIZE_PILL_PADDING_X = 6
export const SIZE_PILL_PADDING_Y = 6
export const SIZE_PILL_HEIGHT = 18
export const SIZE_PILL_RADIUS = 4
export const SIZE_PILL_TEXT_OFFSET_Y = 13

export const MARQUEE_FILL_ALPHA = 0.08
export const SELECTION_DASH_ALPHA = 0.6
export const DROP_HIGHLIGHT_ALPHA = 0.8
export const DROP_HIGHLIGHT_STROKE = 2

export const LAYOUT_INDICATOR_STROKE = 2

export const SECTION_CORNER_RADIUS = 5
export const SECTION_TITLE_HEIGHT = 24
export const SECTION_TITLE_PADDING_X = 8
export const SECTION_TITLE_RADIUS = 5
export const SECTION_TITLE_FONT_SIZE = 12
export const SECTION_TITLE_GAP = 6

export const COMPONENT_SET_DASH = 6
export const COMPONENT_SET_DASH_GAP = 4
export const COMPONENT_SET_BORDER_WIDTH = 1.5
export const COMPONENT_LABEL_FONT_SIZE = 11
export const COMPONENT_LABEL_GAP = 6
export const COMPONENT_LABEL_ICON_SIZE = 10
export const COMPONENT_LABEL_ICON_GAP = 4

export const RULER_TARGET_PIXEL_SPACING = 100
export const RULER_MAJOR_TOLERANCE = 0.01

export const FLASH_COLOR = SELECTION_COLOR
export const FLASH_ATTACK_MS = 200
export const FLASH_HOLD_MS = 400
export const FLASH_RELEASE_MS = 300
export const FLASH_STROKE_WIDTH = 2
export const FLASH_PADDING = 5
export const FLASH_OVERSHOOT = 30
export const FLASH_RADIUS = 4

export const AI_ACTIVE_COLOR = { r: 0.26, g: 0.52, b: 0.96 }
export const AI_DONE_COLOR = { r: 0.16, g: 0.73, b: 0.36 }
export const AI_PULSE_PERIOD_MS = 1500
export const AI_DONE_DURATION_MS = 800

export const TEXT_SELECTION_COLOR = { r: 0.26, g: 0.52, b: 0.96, a: 0.3 }
export const TEXT_CARET_COLOR = BLACK
export const TEXT_CARET_WIDTH = 1

export type ACPAgentID = 'claude-code' | 'codex' | 'gemini-cli'

export interface ACPAgentDef {
  id: ACPAgentID
  name: string
  command: string
  args: string[]
  installCommand?: string
}

export const ACP_AGENTS: ACPAgentDef[] = [
  {
    id: 'claude-code',
    name: 'Claude Code',
    command: 'claude-agent-acp',
    args: [],
    installCommand: 'npm i -g @agentclientprotocol/claude-agent-acp'
  },
  {
    id: 'codex',
    name: 'Codex',
    command: 'codex-acp',
    args: [],
    installCommand: 'npm i -g @zed-industries/codex-acp'
  },
  {
    id: 'gemini-cli',
    name: 'Gemini CLI',
    command: 'gemini',
    args: ['--acp'],
    installCommand: 'npm i -g @google/gemini-cli'
  }
]

export interface StylePreset {
  id: string
  name: string
  description: string
  promptSuffix: string
}

export const STYLE_PRESETS: StylePreset[] = [
  {
    id: 'auto',
    name: 'Auto (AI decides)',
    description: 'Let the model pick a palette and style based on the brief.',
    promptSuffix: ''
  },
  {
    id: 'stripe',
    name: 'Stripe',
    description: 'Navy + violet, gradient skies, serif-adjacent sans. Fintech premium.',
    promptSuffix: `STYLE PRESET: Stripe.
- Palette: bg #0A2540 or #FFFFFF, text #0A2540, muted #425466, border #E3E8EE, primary accent #635BFF, secondary accent #00D4FF.
- Font: Inter for all. Display size 56-96, tight letterSpacing -1 to -2.
- Heroes use a gradient sky (blur 120+ overlapping radial glows #635BFF + #00D4FF at 35-50% opacity on dark navy).
- Buttons: rounded 24 (pill), 48h, px 24. Primary bg #635BFF, text #FFFFFF.
- Cards: white bg, 1px #E3E8EE border, rounded 16, p 32.
- ALWAYS prefer recipes with style "stripe" — list_recipes({ style: "stripe" }).`
  },
  {
    id: 'linear',
    name: 'Linear',
    description: 'Near-black bg, #5E6AD2 accent, huge displays, tight tracking. Dev tools.',
    promptSuffix: `STYLE PRESET: Linear.
- Palette: bg #08090A, surface #101114 / #1F2024, text #F4F5F8, muted #8A8F98, border #FFFFFF0D, accent #5E6AD2, secondary #00C7B7.
- Font: Inter. Display 72-96, letterSpacing -2 to -4, lineHeight tight (same as size).
- Minimal — no gradients, no decorative shapes. Dark-mode native.
- Buttons: rounded 8, 44h, px 20. Primary is WHITE (#F4F5F8) with dark text.
- Borders: 1px #FFFFFF0D (barely visible), used on nav bottom + cards + inputs.
- Badges: pill (rounded 999), small dot + label, bg #1F2024.
- ALWAYS prefer recipes with style "linear".`
  },
  {
    id: 'vercel',
    name: 'Vercel',
    description: 'Pure black/white minimalism, geometric sans, #0070F3 blue accent.',
    promptSuffix: `STYLE PRESET: Vercel.
- Palette: bg #FAFAFA or #0A0A0A, surface #FFFFFF / #171717, text #0A0A0A / #FFFFFF, muted #71717A / #A1A1AA, border #F4F4F5 / #27272A, accent #0070F3, secondary #7928CA.
- Font: Geist (fallback Inter). Display 48-64.
- Bento grids with VARYING cell sizes, rounded 16, 1px borders.
- Icons are Lucide, 24-28 size, bg badge 48×48 rounded 12 with 14% alpha bg.
- CTA gradient cards use radial glows #0070F3 + #7928CA on pure black bg 24 rounded.
- ALWAYS prefer recipes with style "vercel".`
  },
  {
    id: 'notion',
    name: 'Notion',
    description: 'Warm beige, dark charcoal text, playful serif display. Docs & tools.',
    promptSuffix: `STYLE PRESET: Notion.
- Palette: bg #F7F6F3, surface #FFFFFF, text #191918, muted #787672, border #E3E2DF, accent #2F80ED, warning #E03E3E, highlight #FFF4B8.
- Font: Inter for body, "Lora" or "Source Serif" for display/quotes.
- Feel: warm, inviting. Use emoji-ish icons (but still Lucide).
- Inline callouts with tinted backgrounds (10-14% alpha).
- Cards: white bg, 1px #E3E2DF, rounded 8, p 24.
- Hover states subtle (10% darker bg).`
  },
  {
    id: 'apple',
    name: 'Apple HIG',
    description: 'Pristine whites, #1D1D1F near-black, #0071E3 signature blue. iOS / mac.',
    promptSuffix: `STYLE PRESET: Apple Human Interface.
- Palette: bg #FFFFFF / #000000, surface #F5F5F7 / #1D1D1F, text #1D1D1F / #F5F5F7, muted #86868B, separator #D2D2D7, accent #0071E3.
- Font: SF Pro (fallback "Inter"). Display 34-64 bold tight tracking.
- Generous whitespace. 20-32px margins on mobile (390w), 48-96 on desktop.
- iOS buttons: rounded 14, 52h, px 24. CTA primary blue, secondary text-only.
- Tabs and toolbars use translucent bg (#FFFFFFF5) with 0.5px #E5E5EA hairline.
- Images/heroes fill edge-to-edge with 24 rounded.
- ALWAYS prefer recipes with style "apple" for mobile.`
  },
  {
    id: 'editorial',
    name: 'Editorial',
    description: 'Cream/ivory bg, serif displays, amber accent. News, luxury, lifestyle.',
    promptSuffix: `STYLE PRESET: Editorial / Magazine.
- Palette: bg #F7F3EE, surface #FFFFFF, text #0F1923, muted #5C5044, border #E0D4C8, accent #C4A57B, secondary #D4382C.
- Font: "Playfair Display" / "Fraunces" / "Instrument Serif" for H1-H3 (display 48-80, letterSpacing -0.5 to -1). "Georgia" / "Source Serif" for body (size 16-18, lineHeight 28-32).
- Thin rules instead of cards: 1-2px horizontal rules in #C4A57B separate content.
- Categories as uppercase tiny labels with letterSpacing 2+ in muted gold.
- Oversized hero images, split 60/40 with text.
- ALWAYS prefer recipes with style "editorial".`
  },
  {
    id: 'fintech',
    name: 'Fintech premium',
    description: 'Deep navy/emerald + gold accent, serif display. Banking, trading.',
    promptSuffix: `STYLE PRESET: Fintech premium.
- Palette: bg #0A1628 or #0F1F1A, surface #13233E / #1A2F2A, text #F5F3EE / #F0EDE5, muted #8B94A6 / #7E8F87, border #1F2E47 / #243631, accent #D4B87A (gold) or #3D8B6E (emerald), success #4ADE80, warning #E8C547.
- Font: "Instrument Serif" or "Fraunces" for display (48-80, letterSpacing -0.5), "Inter" for body.
- Balance cards use dark bg + subtle gold radial glow (opacity 25%, blur 80).
- Numbers are large and precise. Use tabular-nums feel (letterSpacing -0.5 on large numerals).
- Icons in circular bg 36-44 with tinted surface (#13233E).
- ALWAYS prefer recipes with style "fintech".`
  },
  {
    id: 'playful',
    name: 'Playful',
    description: 'Saturated primaries, chunky rounded sans, generous rounding. Kids, consumer.',
    promptSuffix: `STYLE PRESET: Playful.
- Palette: bg #FFFBF0, surface #FFFFFF, text #1A1A2E, muted #5D5F7A, border #FFE5C4, accents rotate: #FF6B6B (coral) #4ECDC4 (turquoise) #FCD34D (yellow) #A78BFA (violet).
- Font: "Fredoka" / "Sora" / "Plus Jakarta Sans". Display 48-72 bold but rounded.
- Cards rounded 24-32, buttons rounded 999 (pills), 56h tall.
- Illustrations via simple geometric shapes with bold fills.
- Strokes are absent or thick (3-4px).`
  },
  {
    id: 'brutalist',
    name: 'Brutalist',
    description: 'High contrast, heavy borders, monospace, no rounding. Counterculture.',
    promptSuffix: `STYLE PRESET: Brutalist.
- Palette: bg #FFFFFF or #FAFAFA, surface #FFFFFF, text #000000, muted #525252, border #000000 (thick!), accent rotates: #FF0000 / #FFFF00 / #00FF00.
- Font: "JetBrains Mono" / "IBM Plex Mono" monospace for display, "Space Grotesk" for body.
- Hard edges — rounded 0 on everything. 2-4px black borders.
- Oversized type, left-aligned, no letterSpacing tweaks.
- No shadows, no gradients, no blur. Solid color blocks only.`
  }
]

export type AIProviderID =
  | 'openrouter'
  | 'anthropic'
  | 'openai'
  | 'google'
  | 'openai-compatible'
  | 'zai'
  | 'minimax'
  | 'anthropic-compatible'
  | `acp:${ACPAgentID}`

export interface ModelOption {
  id: string
  name: string
  tag?: string
}

export interface AIProviderDef {
  id: AIProviderID
  name: string
  keyPlaceholder: string
  keyURL: string
  models: ModelOption[]
  defaultModel: string
  supportsCustomBaseURL?: boolean
  supportsCustomModel?: boolean
}

export const AI_PROVIDERS: AIProviderDef[] = [
  {
    id: 'openrouter',
    name: 'OpenRouter',
    keyPlaceholder: 'sk-or-…',
    keyURL: 'https://openrouter.ai/keys',
    defaultModel: 'anthropic/claude-sonnet-4.6',
    models: [
      { id: 'anthropic/claude-sonnet-4.6', name: 'Claude Sonnet 4.6', tag: 'Best for design' },
      { id: 'anthropic/claude-opus-4.6', name: 'Claude Opus 4.6', tag: 'Smartest' },
      { id: 'anthropic/claude-3.5-sonnet', name: 'Claude 3.5 Sonnet', tag: 'Reliable' },
      { id: 'anthropic/claude-3.5-haiku', name: 'Claude 3.5 Haiku', tag: 'Fast' },
      { id: 'anthropic/claude-3.7-sonnet', name: 'Claude 3.7 Sonnet', tag: 'Latest' },
      { id: 'anthropic/claude-3.7-sonnet-thinking', name: 'Claude 3.7 + Thinking', tag: 'Reasoning' },
      { id: 'openai/gpt-5.3-codex', name: 'GPT-5.3 Codex', tag: 'Code + Design' },
      { id: 'openai/gpt-4.5', name: 'GPT-4.5', tag: 'Multimodal' },
      { id: 'openai/gpt-4.1', name: 'GPT-4.1', tag: 'Balanced' },
      { id: 'openai/o3', name: 'o3', tag: 'Reasoning' },
      { id: 'openai/o4-mini', name: 'o4-mini', tag: 'Fast reasoning' },
      { id: 'google/gemini-2.5-pro-preview', name: 'Gemini 2.5 Pro', tag: 'Best value' },
      { id: 'google/gemini-2.5-flash-preview', name: 'Gemini 2.5 Flash', tag: 'Fast + Vision' },
      { id: 'google/gemini-3.1-pro-preview', name: 'Gemini 3.1 Pro', tag: '1M context' },
      { id: 'google/gemini-3-flash-preview', name: 'Gemini 3 Flash', tag: 'Fast' },
      { id: 'deepseek/deepseek-v3.2', name: 'DeepSeek V3.2', tag: 'Cheap' },
      { id: 'qwen/qwen3.5-flash-02-23', name: 'Qwen 3.5 Flash', tag: 'Cheap' },
      { id: 'qwen/qwen3-coder:free', name: 'Qwen3 Coder', tag: 'Free' },
      { id: 'qwen/qwen3-32b', name: 'Qwen3 32B', tag: 'Open' },
      { id: 'x-ai/grok-4.20', name: 'Grok 4.20', tag: 'Latest' },
      { id: 'x-ai/grok-2-vision', name: 'Grok 2 Vision', tag: 'Vision' },
      { id: 'x-ai/grok-2', name: 'Grok 2', tag: 'Fast' },
      { id: 'moonshotai/kimi-k2.5', name: 'Kimi K2.5', tag: 'Vision + code' },
      { id: 'moonshotai/kimi-k2', name: 'Kimi K2', tag: 'Strong vision' },
      { id: 'mistralai/mistral-large', name: 'Mistral Large', tag: 'Europe' },
      { id: 'meta-llama/llama-3.3-70b-instruct', name: 'Llama 3.3 70B', tag: 'Open' },
      { id: 'meta-llama/llama-3.1-405b-instruct', name: 'Llama 3.1 405B', tag: 'Open flagship' },
      { id: 'openai/gpt-oss-120b:free', name: 'GPT-OSS 120B', tag: 'Free' },
      { id: 'perplexity/perplexity-llama-3.1-sonar-large', name: 'Sonar Large', tag: 'Research' },
      { id: 'cohere/cohere-command-a', name: 'Command A', tag: 'Enterprise' },
      { id: 'ai21/jamba-large', name: 'Jamba Large', tag: 'Long context' },
      { id: 'x-ai/grok-beta', name: 'Grok Beta', tag: 'Creative' },
      { id: 'z-ai/glm-5.1', name: 'GLM-5.1 (OpenRouter)', tag: 'Best' },
      { id: 'google/gemma-4-26b-a4b-it', name: 'Gemma 4 26B A4B Instruct', tag: 'Open' },
      { id: 'nvidia/nemotron-3-super-120b-a12b', name: 'Nemotron 3 Super 120B A12B', tag: 'Open flagship' },
      { id: 'minimax/minimax-m2.7', name: 'MiniMax M2.7 (OpenRouter)', tag: 'Long context' }
    ]
  },
  {
    id: 'anthropic',
    name: 'Anthropic (Direct)',
    keyPlaceholder: 'sk-ant-…',
    keyURL: 'https://console.anthropic.com/settings/keys',
    defaultModel: 'claude-sonnet-4-6-20260301',
    models: [
      { id: 'claude-sonnet-4-6-20260301', name: 'Claude Sonnet 4.6', tag: 'Best for design' },
      { id: 'claude-opus-4-6-20260301', name: 'Claude Opus 4.6', tag: 'Smartest' },
      { id: 'claude-3-5-sonnet-20241022', name: 'Claude 3.5 Sonnet', tag: 'Reliable' },
      { id: 'claude-3-5-haiku-20241022', name: 'Claude 3.5 Haiku', tag: 'Fast' },
      { id: 'claude-3-7-sonnet-20250114', name: 'Claude 3.7 Sonnet', tag: 'Latest' },
      { id: 'claude-3-7-sonnet-20250114-thinking', name: 'Claude 3.7 + Thinking', tag: 'Reasoning' },
      { id: 'claude-sonnet-4-5-20250501', name: 'Claude Sonnet 4.5', tag: 'Updated' },
      { id: 'claude-haiku-4-5-20250501', name: 'Claude Haiku 4.5', tag: 'Fast + Updated' }
    ]
  },
  {
    id: 'openai',
    name: 'OpenAI',
    keyPlaceholder: 'sk-…',
    keyURL: 'https://platform.openai.com/api-keys',
    defaultModel: 'gpt-5.3-codex',
    models: [
      { id: 'gpt-5.3-codex', name: 'GPT-5.3 Codex', tag: 'Code + Design' },
      { id: 'gpt-4.5', name: 'GPT-4.5', tag: 'Multimodal' },
      { id: 'gpt-4.1', name: 'GPT-4.1', tag: 'Balanced' },
      { id: 'gpt-4.1-mini', name: 'GPT-4.1 Mini', tag: 'Fast' },
      { id: 'o3', name: 'o3', tag: 'Reasoning' },
      { id: 'o3-mini', name: 'o3-mini', tag: 'Fast reasoning' },
      { id: 'o4-mini', name: 'o4-mini', tag: 'Small reasoning' }
    ]
  },
  {
    id: 'google',
    name: 'Google AI',
    keyPlaceholder: 'AIza…',
    keyURL: 'https://aistudio.google.com/apikey',
    defaultModel: 'gemini-2.5-pro-preview-06-05',
    models: [
      { id: 'gemini-2.5-pro-preview-06-05', name: 'Gemini 2.5 Pro', tag: 'Best value' },
      { id: 'gemini-2.5-flash-preview-06-05', name: 'Gemini 2.5 Flash', tag: 'Fast + Vision' },
      { id: 'gemini-2.0-pro-preview-05-20', name: 'Gemini 2.0 Pro', tag: 'Strong' },
      { id: 'gemini-2.0-flash-exp', name: 'Gemini 2.0 Flash', tag: 'Fastest' },
      { id: 'gemini-3.1-pro-preview', name: 'Gemini 3.1 Pro', tag: '1M context' },
      { id: 'gemini-3-flash-preview', name: 'Gemini 3 Flash', tag: 'Fast' }
    ]
  },
  {
    id: 'zai',
    name: 'Z.ai',
    keyPlaceholder: 'API key',
    keyURL: 'https://docs.z.ai/devpack/quick-start',
    defaultModel: 'glm-5.1',
    models: [
      { id: 'glm-5.1', name: 'GLM-5.1', tag: 'Best' },
      { id: 'glm-5', name: 'GLM-5' },
      { id: 'glm-5-code', name: 'GLM-5-Code' },
      { id: 'glm-4.7', name: 'GLM-4.7' },
      { id: 'glm-4.7-flashx', name: 'GLM-4.7-FlashX' },
      { id: 'glm-4.6', name: 'GLM-4.6' },
      { id: 'glm-4.5', name: 'GLM-4.5' },
      { id: 'glm-4.5-x', name: 'GLM-4.5-X' },
      { id: 'glm-4.5-air', name: 'GLM-4.5-Air' },
      { id: 'glm-4.5-airx', name: 'GLM-4.5-AirX' },
      { id: 'glm-4-32b-0414-128k', name: 'GLM-4-32B-0414-128K' },
      { id: 'glm-4.7-flash', name: 'GLM-4.7-Flash', tag: 'Free' },
      { id: 'glm-4.5-flash', name: 'GLM-4.5-Flash', tag: 'Free' }
    ]
  },
  {
    id: 'minimax',
    name: 'MiniMax',
    keyPlaceholder: 'API key',
    keyURL: 'https://platform.minimax.io/user-center/basic-information/interface-key',
    defaultModel: 'MiniMax-M2.7',
    models: [
      { id: 'MiniMax-M2.7', name: 'MiniMax-M2.7', tag: 'Best' },
      { id: 'MiniMax-M2.7-highspeed', name: 'MiniMax-M2.7-highspeed', tag: 'Fast' },
      { id: 'MiniMax-M2.5', name: 'MiniMax-M2.5' },
      { id: 'MiniMax-M2.5-highspeed', name: 'MiniMax-M2.5 Highspeed', tag: 'Fast' },
      { id: 'MiniMax-M2.1', name: 'MiniMax-M2.1' },
      { id: 'MiniMax-M2.1-highspeed', name: 'MiniMax-M2.1 Highspeed', tag: 'Fast' },
      { id: 'MiniMax-M2', name: 'MiniMax-M2' }
    ]
  },
  {
    id: 'openai-compatible',
    name: 'OpenAI-compatible',
    keyPlaceholder: 'API key',
    keyURL: '',
    defaultModel: '',
    models: [],
    supportsCustomBaseURL: true,
    supportsCustomModel: true
  },
  {
    id: 'anthropic-compatible',
    name: 'Anthropic-compatible',
    keyPlaceholder: 'API key',
    keyURL: '',
    defaultModel: '',
    models: [],
    supportsCustomBaseURL: true,
    supportsCustomModel: true
  }
]

export const DEFAULT_AI_PROVIDER: AIProviderID = 'openrouter'
export const DEFAULT_AI_MODEL = AI_PROVIDERS[0].defaultModel

export const AUTOMATION_HTTP_PORT = 7600
export const AUTOMATION_WS_PORT = 7601

export const GOOGLE_FONTS_API_KEY = 'AIzaSyD1tYDR_dUEiV-Tw1vksEhZbUytgKW5pc8'

export const CJK_FALLBACK_FAMILIES_MACOS = [
  'PingFang SC',
  'Hiragino Sans',
  'Apple SD Gothic Neo',
  'Heiti SC'
]

export const CJK_FALLBACK_FAMILIES_WINDOWS = [
  'Microsoft YaHei',
  'Microsoft JhengHei',
  'Yu Gothic',
  'Malgun Gothic',
  'SimHei'
]

export const CJK_FALLBACK_FAMILIES_LINUX = [
  'Noto Sans CJK SC',
  'Noto Sans CJK JP',
  'Noto Sans CJK KR',
  'WenQuanYi Micro Hei',
  'Droid Sans Fallback'
]

export const CJK_GOOGLE_FONTS = ['Noto Sans SC', 'Noto Sans JP', 'Noto Sans KR']

export const DEFAULT_SHAPE_FILL: Fill = {
  type: 'SOLID',
  color: { r: 0.83, g: 0.83, b: 0.83, a: 1 },
  opacity: 1,
  visible: true
}

export const DEFAULT_FRAME_FILL: Fill = {
  type: 'SOLID',
  color: { r: 1, g: 1, b: 1, a: 1 },
  opacity: 1,
  visible: true
}

export const SECTION_DEFAULT_FILL: Fill = {
  type: 'SOLID',
  color: { r: 0.37, g: 0.37, b: 0.37, a: 1 },
  opacity: 1,
  visible: true
}

export const SECTION_DEFAULT_STROKE: Stroke = {
  color: { r: 0.55, g: 0.55, b: 0.55, a: 1 },
  weight: 1,
  opacity: 1,
  visible: true,
  align: 'INSIDE'
}

export const ZOOM_DIVISOR = 50
export const ZOOM_SCALE_MIN = 0.75
export const ZOOM_SCALE_MAX = 1.25

export const PEN_CLOSE_THRESHOLD = 8
export const ROTATION_SNAP_DEGREES = 15
export const CORNER_ROTATE_ZONE = 16
export const HANDLE_HIT_RADIUS = 6
export const DEFAULT_TEXT_WIDTH = 200
export const DEFAULT_TEXT_HEIGHT = 24
export const AUTO_LAYOUT_BREAK_THRESHOLD = 8
