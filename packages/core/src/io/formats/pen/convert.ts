import { parseColor } from '../../../color'
import { generateId } from '../../../scene-graph'

import {
  mapStrokeJoin,
  mapStrokeCap,
  parseSize
} from './mappers'

import type {
  Color,
  Effect,
  Fill,
  GradientStop,
  SceneGraph,
  SceneNode,
  Stroke,
  Variable,
  VariableCollection,
  VariableCollectionMode,
  VariableType,
  VariableValue
} from '../../../scene-graph'
import type { Vector } from '../../../types'

export interface PenDocument {
  version: string
  children: PenNode[]
  themes?: Record<string, string[]>
  variables?: Record<string, PenVariable>
}

export interface PenVariable {
  type: 'color' | 'string' | 'number'
  value: PenVariableValue[] | PenVariableValue | string | number
}

interface PenVariableValue {
  value: string | number
  theme?: Record<string, string>
}

interface PenStroke {
  align: 'inside' | 'center' | 'outside'
  thickness: number | { top?: number; right?: number; bottom?: number; left?: number }
  fill?: string
  join?: string
  cap?: string
  dashPattern?: number[]
}

interface PenEffect {
  type: string
  shadowType?: string
  color?: string
  offset?: Vector
  blur?: number
  spread?: number
}

interface PenFillObject {
  type: string
  color: string
  enabled?: boolean
  stops?: Array<{ color: string; position: number }>
  angle?: number
  imageHash?: string
  imageScaleMode?: string
}

type PenFill = string | PenFillObject | PenFillObject[]

export interface PenNode {
  type: string
  id: string
  name?: string
  x?: number
  y?: number
  width?: number | string
  height?: number | string
  fill?: PenFill
  opacity?: number
  enabled?: boolean
  clip?: boolean
  rotation?: number
  flipX?: boolean
  flipY?: boolean
  reusable?: boolean
  cornerRadius?: number | string | (number | string)[]
  stroke?: PenStroke
  effect?: PenEffect | PenEffect[]
  layout?: string
  wrap?: boolean
  gap?: number | string
  rowGap?: number | string
  padding?: number | string | (number | string)[]
  justifyContent?: string
  alignItems?: string
  children?: PenNode[]
  content?: string
  fontFamily?: string
  fontSize?: number
  fontWeight?: string | number
  lineHeight?: number
  letterSpacing?: number
  textAlign?: string
  textAlignVertical?: string
  textGrowth?: string
  textDecoration?: string
  textCase?: string
  ref?: string
  descendants?: Record<string, Partial<PenNode>>
  slot?: string[]
  geometry?: string
  iconFontName?: string
  iconFontFamily?: string
  weight?: number
  model?: string
  theme?: Record<string, string>
  horizontalConstraint?: string
  verticalConstraint?: string
  points?: number
  innerRadius?: number
}

export interface VarContext {
  byName: Map<string, { id: string; variable: Variable }>
  activeModeId: string
  collectionId: string
  modeByThemeName: Map<string, string>
  resolveColor(ref: string): Color
  resolveNumber(ref: string): number
  resolveString(ref: string): string
  setActiveTheme(themeName: string): void
}

function penVarTypeToSceneType(t: string): VariableType {
  if (t === 'color') return 'COLOR'
  if (t === 'number') return 'FLOAT'
  return 'STRING'
}

function penValueToSceneValue(raw: string | number, type: VariableType): VariableValue {
  if (type === 'COLOR' && typeof raw === 'string') return parseColor(raw)
  if (type === 'FLOAT' && typeof raw === 'number') return raw
  if (type === 'STRING') return String(raw)
  if (typeof raw === 'number') return raw
  return String(raw)
}

function defaultForType(type: VariableType): VariableValue {
  if (type === 'COLOR') return { r: 0, g: 0, b: 0, a: 1 }
  if (type === 'FLOAT') return 0
  if (type === 'BOOLEAN') return false
  return ''
}

export function isVarRef(val: unknown): val is string {
  return typeof val === 'string' && val.startsWith('$--')
}

function varName(ref: string): string {
  return ref.replace(/^\$/, '')
}

export function bindIfVar(node: SceneNode, field: string, val: unknown, ctx: VarContext): void {
  if (!isVarRef(val)) return
  const entry = ctx.byName.get(varName(val))
  if (entry) node.boundVariables[field] = entry.id
}

export function buildVarContext(
  graph: SceneGraph,
  penVars: Record<string, PenVariable>,
  themes: Record<string, string[]>
): VarContext {
  const collectionId = generateId()
  const modes: VariableCollectionMode[] = []
  const themeKeys = Object.keys(themes)

  if (themeKeys.length > 0) {
    const themeKey = themeKeys[0]
    for (const modeName of themes[themeKey]) {
      modes.push({ modeId: generateId(), name: modeName })
    }
  }
  if (modes.length === 0) {
    modes.push({ modeId: generateId(), name: 'Default' })
  }

  const collection: VariableCollection = {
    id: collectionId,
    name: 'Variables',
    modes,
    defaultModeId: modes[0].modeId,
    variableIds: []
  }
  graph.addCollection(collection)

  const modeByThemeValue = new Map<string, string>()
  if (themeKeys.length > 0) {
    const themeKey = themeKeys[0]
    for (const mode of modes) {
      modeByThemeValue.set(`${themeKey}:${mode.name}`, mode.modeId)
    }
  }

  const byName = new Map<string, { id: string; variable: Variable }>()

  for (const [name, def] of Object.entries(penVars)) {
    const varId = generateId()
    const varType = penVarTypeToSceneType(def.type)
    const valuesByMode: Record<string, VariableValue> = {}

    if (Array.isArray(def.value)) {
      for (const entry of def.value) {
        if (entry.theme) {
          const [tKey, tVal] = Object.entries(entry.theme)[0]
          const modeId = modeByThemeValue.get(`${tKey}:${tVal}`)
          if (modeId) valuesByMode[modeId] = penValueToSceneValue(entry.value, varType)
        } else {
          valuesByMode[modes[0].modeId] = penValueToSceneValue(entry.value, varType)
        }
      }
    } else {
      valuesByMode[modes[0].modeId] = penValueToSceneValue(def.value as string | number, varType)
    }

    for (const mode of modes) {
      if (!(mode.modeId in valuesByMode)) {
        valuesByMode[mode.modeId] = valuesByMode[modes[0].modeId] ?? defaultForType(varType)
      }
    }

    const variable: Variable = {
      id: varId,
      name,
      type: varType,
      collectionId,
      valuesByMode,
      description: '',
      hiddenFromPublishing: false
    }
    graph.addVariable(variable)
    byName.set(name, { id: varId, variable })
  }

  let activeModeId = modes[0].modeId

  function resolveVal(ref: string): VariableValue | undefined {
    const entry = byName.get(ref.replace(/^\$/, ''))
    if (!entry) return undefined
    return (
      entry.variable.valuesByMode[activeModeId] ?? Object.values(entry.variable.valuesByMode)[0]
    )
  }

  return {
    byName,
    activeModeId,
    collectionId,
    modeByThemeName: modeByThemeValue,
    resolveColor(ref: string): Color {
      const val = resolveVal(ref)
      if (val === undefined) return parseColor(ref)
      if (typeof val === 'object' && 'r' in val) return val
      if (typeof val === 'string') return parseColor(val)
      return { r: 0, g: 0, b: 0, a: 1 }
    },
    resolveNumber(ref: string): number {
      const val = resolveVal(ref)
      return typeof val === 'number' ? val : 0
    },
    resolveString(ref: string): string {
      const val = resolveVal(ref)
      return typeof val === 'string' ? val : ''
    },
    setActiveTheme(themeName: string) {
      const modeId = modeByThemeValue.get(`theme:${themeName}`)
      if (modeId) {
        activeModeId = modeId
        graph.activeMode.set(collectionId, modeId)
      }
    }
  }
}

function parseFillColor(fill: string | PenFillObject, ctx: VarContext): Color {
  const raw = typeof fill === 'string' ? fill : fill.color
  return isVarRef(raw) ? ctx.resolveColor(raw) : parseColor(raw)
}

function parseGradientStops(
  stops: Array<{ color: string; position: number }> | undefined,
  ctx: VarContext
): GradientStop[] {
  if (!stops || stops.length === 0) return []
  return stops.map((s) => ({
    color: isVarRef(s.color) ? ctx.resolveColor(s.color) : parseColor(s.color),
    position: s.position
  }))
}

function resolveGradientFill(
  item: PenFillObject,
  color: Color,
  ctx: VarContext,
  index: number,
  visible: boolean,
  node?: SceneNode
): Fill | null {
  if (item.type !== 'gradient-linear' && item.type !== 'gradient-radial') return null
  const stops = parseGradientStops(item.stops, ctx)
  const type = item.type === 'gradient-linear' ? 'GRADIENT_LINEAR' : 'GRADIENT_RADIAL'
  const rawRef = item.color
  const result: Fill = {
    type,
    visible,
    opacity: 1,
    color: stops[0]?.color ?? color,
    gradientStops: stops.length > 0 ? stops : [{ color, position: 0 }, { color, position: 1 }]
  }
  if (node) bindIfVar(node, `fills[${index}]`, rawRef, ctx)
  return result
}

function resolveImageFill(
  item: PenFillObject,
  ctx: VarContext,
  index: number,
  visible: boolean,
  node?: SceneNode
): Fill | null {
  if (item.type !== 'image' || !item.imageHash) return null
  const result: Fill = {
    type: 'IMAGE',
    visible,
    opacity: 1,
    color: { r: 0, g: 0, b: 0, a: 0 },
    imageHash: item.imageHash,
    imageScaleMode: (item.imageScaleMode as Fill['imageScaleMode']) ?? 'FILL'
  }
  if (node) bindIfVar(node, `fills[${index}]`, item.color, ctx)
  return result
}

export function convertFill(fill: PenFill | undefined, ctx: VarContext, node?: SceneNode): Fill[] {
  if (fill === undefined) return []
  const fills = Array.isArray(fill) ? fill : [fill]
  return fills.map((item, index) => {
    const visible = typeof item === 'string' ? true : item.enabled !== false
    const color = parseFillColor(item, ctx)
    const rawRef = typeof item === 'string' ? item : item.color

    if (typeof item !== 'string') {
      const gradient = resolveGradientFill(item, color, ctx, index, visible, node)
      if (gradient) return gradient
      const image = resolveImageFill(item, ctx, index, visible, node)
      if (image) return image
    }

    const result: Fill = { type: 'SOLID', visible, opacity: color.a, color }
    if (node) bindIfVar(node, `fills[${index}]`, rawRef, ctx)
    return result
  })
}

function strokeWeight(stroke: PenStroke): number {
  if (typeof stroke.thickness === 'number') return stroke.thickness
  const values = Object.values(stroke.thickness).filter((v): v is number => typeof v === 'number')
  return values.length > 0 ? Math.max(...values) : 0
}

export function convertStroke(
  stroke: PenStroke | undefined,
  ctx: VarContext,
  node?: SceneNode
): Stroke[] {
  if (!stroke) return []

  let align: Stroke['align'] = 'CENTER'
  if (stroke.align === 'inside') align = 'INSIDE'
  else if (stroke.align === 'outside') align = 'OUTSIDE'

  const hasFill = !!stroke.fill
  const color = hasFill
    ? (isVarRef(stroke.fill) ? ctx.resolveColor(stroke.fill) : parseColor(stroke.fill!))
    : { r: 0, g: 0, b: 0, a: 1 }

  const result: Stroke = {
    visible: true,
    color,
    opacity: color.a,
    weight: strokeWeight(stroke),
    align,
    dashPattern: stroke.dashPattern ?? []
  }
  if (node) {
    if (hasFill) bindIfVar(node, 'strokes[0]', stroke.fill, ctx)
    if (typeof stroke.thickness === 'object') {
      node.independentStrokeWeights = true
      node.borderTopWeight = stroke.thickness.top ?? 0
      node.borderRightWeight = stroke.thickness.right ?? 0
      node.borderBottomWeight = stroke.thickness.bottom ?? 0
      node.borderLeftWeight = stroke.thickness.left ?? 0
    }
    node.strokeJoin = mapStrokeJoin(stroke.join)
    node.strokeCap = mapStrokeCap(stroke.cap)
  }
  return [result]
}

export function convertEffects(effect: PenEffect | PenEffect[] | undefined): Effect[] {
  if (!effect) return []
  const effects = Array.isArray(effect) ? effect : [effect]
  return effects.flatMap((item) => {
    if (item.type === 'shadow') {
      const color = item.color ? parseColor(item.color) : { r: 0, g: 0, b: 0, a: 0.25 }
      return [
        {
          type: item.shadowType === 'inner' ? 'INNER_SHADOW' : 'DROP_SHADOW',
          visible: true,
          blendMode: 'NORMAL',
          color,
          offset: item.offset ?? { x: 0, y: 0 },
          radius: item.blur ?? 0,
          spread: item.spread ?? 0
        } satisfies Effect
      ]
    }
    if (item.type === 'blur') {
      return [
        {
          type: 'LAYER_BLUR' as Effect['type'],
          visible: true,
          blendMode: 'NORMAL',
          color: { r: 0, g: 0, b: 0, a: 0 },
          offset: { x: 0, y: 0 },
          radius: item.blur ?? 0,
          spread: 0
        } satisfies Effect
      ]
    }
    return []
  })
}

export function applyCornerRadius(
  node: SceneNode,
  radius: PenNode['cornerRadius'],
  ctx: VarContext
): void {
  if (radius === undefined) return
  if (Array.isArray(radius)) {
    const values = radius.map((value) => parseSize(value, 0, ctx).value)
    node.independentCorners = true
    node.topLeftRadius = values[0] ?? 0
    node.topRightRadius = values[1] ?? 0
    node.bottomRightRadius = values[2] ?? 0
    node.bottomLeftRadius = values[3] ?? 0
    return
  }
  node.cornerRadius = parseSize(radius, 0, ctx).value
}

export function applyPadding(node: SceneNode, padding: PenNode['padding'], ctx?: VarContext): void {
  if (padding === undefined) return
  const resolve = (v: number | string): number =>
    typeof v === 'string' ? (isVarRef(v) && ctx ? ctx.resolveNumber(v) : Number(v) || 0) : v
  if (Array.isArray(padding)) {
    if (padding.length === 1) {
      const v = resolve(padding[0] ?? 0)
      node.paddingTop = v
      node.paddingRight = v
      node.paddingBottom = v
      node.paddingLeft = v
    } else if (padding.length === 2) {
      const v = resolve(padding[0] ?? 0)
      const h = resolve(padding[1] ?? 0)
      node.paddingTop = v
      node.paddingRight = h
      node.paddingBottom = v
      node.paddingLeft = h
    } else if (padding.length === 3) {
      const t = resolve(padding[0] ?? 0)
      const h = resolve(padding[1] ?? 0)
      const b = resolve(padding[2] ?? 0)
      node.paddingTop = t
      node.paddingRight = h
      node.paddingBottom = b
      node.paddingLeft = h
    } else {
      node.paddingTop = resolve(padding[0] ?? 0)
      node.paddingRight = resolve(padding[1] ?? 0)
      node.paddingBottom = resolve(padding[2] ?? 0)
      node.paddingLeft = resolve(padding[3] ?? 0)
    }
    return
  }
  const resolved = resolve(padding)
  node.paddingTop = resolved
  node.paddingRight = resolved
  node.paddingBottom = resolved
  node.paddingLeft = resolved
}
