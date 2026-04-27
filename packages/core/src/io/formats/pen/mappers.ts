import type {
  ConstraintType,
  LayoutAlign,
  LayoutCounterAlign,
  LayoutMode,
  LayoutSizing,
  NodeType,
  SceneNode,
  StrokeCap,
  StrokeJoin,
  TextAlignVertical,
  TextAutoResize,
  TextCase,
  TextDecoration
} from '../../../scene-graph'
import type { VarContext, PenNode } from './convert'

export function mapLayoutMode(pen: PenNode): LayoutMode {
  if (pen.layout === 'row' || pen.layout === 'horizontal') return 'HORIZONTAL'
  if (pen.layout === 'column' || pen.layout === 'vertical') return 'VERTICAL'
  if (pen.layout === 'none') return 'NONE'
  // Implicit auto-layout: if no explicit layout but has gap/justifyContent/alignItems,
  // default to horizontal (most common in .pen files)
  if (
    pen.layout === undefined &&
    (pen.gap !== undefined || pen.justifyContent !== undefined || pen.alignItems !== undefined)
  ) {
    return 'HORIZONTAL'
  }
  return 'NONE'
}

export function mapJustifyContent(value: string | undefined): LayoutAlign {
  if (value === 'center') return 'CENTER'
  if (value === 'end') return 'MAX'
  if (value === 'space-between' || value === 'space_between') return 'SPACE_BETWEEN'
  if (value === 'space-around' || value === 'space_around') return 'SPACE_BETWEEN'
  if (value === 'space-evenly' || value === 'space_evenly') return 'SPACE_BETWEEN'
  return 'MIN'
}

export function mapAlignItems(value: string | undefined): LayoutCounterAlign {
  if (value === 'center') return 'CENTER'
  if (value === 'end') return 'MAX'
  if (value === 'stretch') return 'STRETCH'
  return 'MIN'
}

export function mapTextAlign(value: string | undefined): SceneNode['textAlignHorizontal'] {
  if (value === 'center') return 'CENTER'
  if (value === 'right' || value === 'end') return 'RIGHT'
  if (value === 'justified') return 'JUSTIFIED'
  return 'LEFT'
}

export function mapTextAlignVertical(value: string | undefined): TextAlignVertical {
  if (value === 'center') return 'CENTER'
  if (value === 'bottom' || value === 'end') return 'BOTTOM'
  return 'TOP'
}

export function mapFontWeight(value: string | number | undefined): number {
  if (typeof value === 'number') return value
  if (value === 'thin') return 100
  if (value === 'extralight') return 200
  if (value === 'light') return 300
  if (value === 'medium') return 500
  if (value === 'semibold') return 600
  if (value === 'bold') return 700
  if (value === 'extrabold') return 800
  if (value === 'black') return 900
  return 400
}

export function mapTextDecoration(value: string | undefined): TextDecoration {
  if (value === 'underline') return 'UNDERLINE'
  if (value === 'strikethrough' || value === 'line-through') return 'STRIKETHROUGH'
  return 'NONE'
}

export function mapTextCase(value: string | undefined): TextCase {
  if (value === 'upper' || value === 'uppercase') return 'UPPER'
  if (value === 'lower' || value === 'lowercase') return 'LOWER'
  if (value === 'title' || value === 'capitalize') return 'TITLE'
  return 'ORIGINAL'
}

export function mapTextAutoResize(value: string | undefined): TextAutoResize {
  if (value === 'fixed-width') return 'HEIGHT'
  if (value === 'fixed') return 'NONE'
  if (value === 'truncate') return 'TRUNCATE'
  return 'WIDTH_AND_HEIGHT'
}

export function mapConstraint(value: string | undefined): ConstraintType {
  if (value === 'center') return 'CENTER'
  if (value === 'max' || value === 'right' || value === 'bottom') return 'MAX'
  if (value === 'stretch' || value === 'fill') return 'STRETCH'
  if (value === 'scale') return 'SCALE'
  return 'MIN'
}

export function mapNodeType(pen: PenNode): NodeType {
  if (pen.type === 'frame') return pen.reusable ? 'COMPONENT' : 'FRAME'
  if (pen.type === 'rectangle') return 'RECTANGLE'
  if (pen.type === 'ellipse') return 'ELLIPSE'
  if (pen.type === 'text' || pen.type === 'icon_font') return 'TEXT'
  if (pen.type === 'path') return 'VECTOR'
  if (pen.type === 'ref') return 'INSTANCE'
  if (pen.type === 'line') return 'LINE'
  if (pen.type === 'star') return 'STAR'
  if (pen.type === 'polygon') return 'POLYGON'
  if (pen.type === 'group') return 'GROUP'
  if (pen.type === 'section') return 'SECTION'
  if (pen.type === 'image') return 'RECTANGLE'
  return 'FRAME'
}

export function mapStrokeJoin(join: string | undefined): StrokeJoin {
  if (join === 'round') return 'ROUND'
  if (join === 'bevel') return 'BEVEL'
  return 'MITER'
}

export function mapStrokeCap(cap: string | undefined): StrokeCap {
  if (cap === 'round') return 'ROUND'
  if (cap === 'square') return 'SQUARE'
  return 'NONE'
}

export function parseSize(value: number | string | undefined, fallback: number, ctx?: VarContext) {
  if (value === undefined) return { value: fallback, sizing: 'FIXED' as LayoutSizing }
  if (typeof value === 'number') return { value, sizing: 'FIXED' as LayoutSizing }
  if (value === 'fill_container') return { value: fallback, sizing: 'FILL' as LayoutSizing }
  if (value === 'hug_content') return { value: fallback, sizing: 'HUG' as LayoutSizing }
  if (typeof value === 'string' && value.startsWith('$--') && ctx)
    return { value: ctx.resolveNumber(value), sizing: 'FIXED' as LayoutSizing }
  const parsed = Number(value)
  return { value: Number.isFinite(parsed) ? parsed : fallback, sizing: 'FIXED' as LayoutSizing }
}
