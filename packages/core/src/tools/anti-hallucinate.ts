import { getSchemaDocument, validateJSX } from '../design-jsx'
import { defineTool } from './schema'

export const validateJsxTool = defineTool({
  name: 'validate_jsx',
  description:
    'Dry-run validation of a JSX string against the OpenPencil DSL schema BEFORE calling render. Returns structured errors (invalid props, unknown elements, bad color formats) and warnings (missing color on Text, Frame without flex, invisible shapes). Call this whenever you are about to render JSX from an unfamiliar source (user input, recipe modification). Prevents wasted render cycles and reduces hallucinated props.',
  params: {
    jsx: {
      type: 'string',
      description: 'The JSX string to validate. Must have exactly one root element.',
      required: true
    }
  },
  execute: (_figma, args) => {
    const result = validateJSX(args.jsx)
    return {
      valid: result.valid,
      summary: result.summary,
      rootType: result.rootType,
      nodeCount: result.nodeCount,
      errors: result.errors.map((e) => ({
        path: e.path,
        code: e.code,
        message: e.message,
        fix: e.fix
      })),
      warnings: result.warnings.map((w) => ({
        path: w.path,
        code: w.code,
        message: w.message,
        fix: w.fix
      }))
    }
  }
})

export const getDesignSchema = defineTool({
  name: 'get_design_schema',
  description:
    "Returns the canonical OpenPencil JSX DSL schema: every element type, every valid prop, value rules, and forbidden patterns. Call this at the START of any session to learn the exact DSL — prevents hallucinating props like 'margin' or 'className'. Cache the result mentally; schema is stable across sessions.",
  params: {},
  execute: () => getSchemaDocument()
})

export const getDesignContract = defineTool({
  name: 'get_design_contract',
  description:
    'Returns the rules of engagement for editing an OpenPencil document: when to read before write, how to preserve brand elements, when to validate, how to use recipes. Call this ONCE at session start if you are an external AI connecting via MCP.',
  params: {},
  execute: () => ({
    contract_version: '1.0',
    read_before_write: {
      rule: 'Before calling any update_*/set_*/delete_node tool on an existing node id, you must have inspected that id via describe, get_node, or find_nodes in the current session.',
      why: 'Prevents blind overwrites of user work.',
      exception:
        'Newly rendered node ids (from render output) may be edited without prior describe.'
    },
    validate_before_render: {
      rule: 'Call validate_jsx before render whenever JSX comes from a modified recipe, external reference, or your own synthesis if confidence is low.',
      why: 'Fails fast on invalid props — cheaper than a failed render.'
    },
    use_recipes: {
      rule: 'For any common section (hero, pricing, nav, footer, auth, mobile screens), call list_recipes + get_recipe before generating from scratch.',
      why: 'Recipes are proven professional patterns. Unaided generation is lower quality.'
    },
    preserve_brand: {
      rule: 'Do not change the following without explicit user request: brand colors (detect by analyzing current palette), logo shapes, legal/footer text, existing layer names.',
      why: 'Unasked brand changes break product consistency.'
    },
    palette_discipline: {
      rule: 'Use only hex values from the current document palette when modifying existing content. Call analyze_colors or get_design_tokens to see what is already in use.',
      why: 'Introducing off-palette colors creates visual inconsistency.'
    },
    typography_discipline: {
      rule: 'Stick to 1-2 font families per document. Call list_fonts to see what is loaded. Introduce new fonts only when the brand justifies it.',
      why: 'Font explosion is a common hallucination.'
    },
    phase_0_classification: {
      rule: 'For a new design or major addition, write one classification line first: Platform · Category · Mood · Canvas · Palette · Font.',
      why: 'Forces context awareness before generation.'
    },
    self_critique: {
      rule: 'Before claiming a task complete, mentally run the self-critique rubric: hierarchy, alignment to 4/8 grid, spacing rhythm, color count <=10, weight variety <=3, touch targets, contrast, brand fit, edge cases. Declare which pass in your final summary.',
      why: 'Fortune 500 output requires explicit quality gate.'
    },
    error_recovery: {
      rule: 'If a fix does not work after 2 attempts, delete the node and re-render with corrections. Do not compound debug attempts with eval.',
      why: 'Compounding fixes produces garbage state.'
    }
  })
})

interface ColorUse {
  hex: string
  count: number
}

interface FontUse {
  family: string
  count: number
}

interface SpacingUse {
  value: number
  count: number
}

function addCount<K>(map: Map<K, number>, key: K): void {
  map.set(key, (map.get(key) ?? 0) + 1)
}

function normalizeHex(value: string): string | null {
  if (typeof value !== 'string') return null
  const m = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.exec(value)
  if (!m) return null
  return value.toUpperCase()
}

export const getDesignTokens = defineTool({
  name: 'get_design_tokens',
  description:
    'Returns actual tokens in use across the current document: unique colors (with usage count), fonts, font sizes, spacing values, border radii. Use this BEFORE adding new values to keep designs consistent with existing brand.',
  params: {
    page_id: {
      type: 'string',
      description: 'Page id to scan. Defaults to current page.',
      required: false
    }
  },
  execute: (figma, args) => {
    const colors = new Map<string, number>()
    const fonts = new Map<string, number>()
    const fontSizes = new Map<number, number>()
    const spacings = new Map<number, number>()
    const radii = new Map<number, number>()

    const pageId = args.page_id === 'current' ? figma.currentPage.id : (args.page_id ?? figma.currentPage.id)
    const page = figma.getNodeById(pageId)
    if (!page) {
      return {
        error: `Page "${pageId}" not found`,
        colors: [],
        fonts: [],
        fontSizes: [],
        spacings: [],
        radii: []
      }
    }

    // eslint-disable-next-line complexity -- token scanner walks many json fields
    function visit(nodeId: string): void {
      const node = figma.getNodeById(nodeId)
      if (!node) return
      const json: Record<string, unknown> = node.toJSON()

      const fills = json.fills as Array<Record<string, unknown>> | undefined
      if (Array.isArray(fills)) {
        for (const fill of fills) {
          const color = fill.color as Record<string, number> | undefined
          if (color && typeof color.r === 'number') {
            const hex = rgbToHex(color.r, color.g, color.b, color.a as number | undefined)
            if (hex) addCount(colors, hex)
          }
        }
      }

      const strokes = json.strokes as Array<Record<string, unknown>> | undefined
      if (Array.isArray(strokes)) {
        for (const stroke of strokes) {
          const color = stroke.color as Record<string, number> | undefined
          if (color && typeof color.r === 'number') {
            const hex = rgbToHex(color.r, color.g, color.b, color.a as number | undefined)
            if (hex) addCount(colors, hex)
          }
        }
      }

      if (typeof json.fontSize === 'number') addCount(fontSizes, json.fontSize)
      const fontName = json.fontName as { family?: string } | undefined
      if (fontName?.family) addCount(fonts, fontName.family)

      if (typeof json.itemSpacing === 'number') addCount(spacings, json.itemSpacing)
      if (typeof json.paddingLeft === 'number' && json.paddingLeft > 0)
        addCount(spacings, json.paddingLeft)
      if (typeof json.paddingTop === 'number' && json.paddingTop > 0)
        addCount(spacings, json.paddingTop)
      if (typeof json.cornerRadius === 'number' && json.cornerRadius > 0)
        addCount(radii, json.cornerRadius)

      const childIds = (json.children as Array<{ id: string }> | undefined) ?? []
      for (const child of childIds) {
        visit(child.id)
      }
    }

    visit(pageId)

    const toArray = <K extends string | number>(
      m: Map<K, number>,
      key: 'hex' | 'family' | 'value'
    ): unknown[] =>
      [...m.entries()].sort((a, b) => b[1] - a[1]).map(([k, count]) => ({ [key]: k, count }))

    return {
      page: pageId,
      colors: toArray(colors, 'hex') as ColorUse[],
      fonts: toArray(fonts, 'family') as FontUse[],
      fontSizes: toArray(fontSizes, 'value') as SpacingUse[],
      spacings: toArray(spacings, 'value') as SpacingUse[],
      radii: toArray(radii, 'value') as SpacingUse[]
    }
  }
})

function rgbToHex(r: number, g: number, b: number, a?: number): string | null {
  if (r < 0 || r > 1 || g < 0 || g > 1 || b < 0 || b > 1) return null
  const toHex = (v: number): string =>
    Math.round(v * 255)
      .toString(16)
      .padStart(2, '0')
      .toUpperCase()
  const base = `#${toHex(r)}${toHex(g)}${toHex(b)}`
  if (a !== undefined && a < 1) return `${base}${toHex(a)}`
  return base
}

void normalizeHex
