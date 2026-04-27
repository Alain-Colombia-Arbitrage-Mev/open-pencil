import * as React from './mini-react'
import { buildComponent } from './render'
import { resolveToTree, type TreeNode } from './tree'

const VALID_BASE_PROPS = new Set([
  'name',
  'key',
  'flex',
  'flow',
  'dir',
  'gap',
  'wrap',
  'rowGap',
  'justify',
  'items',
  'grow',
  'w',
  'h',
  'minW',
  'maxW',
  'minH',
  'maxH',
  'x',
  'y',
  'p',
  'px',
  'py',
  'pt',
  'pr',
  'pb',
  'pl',
  'bg',
  'fill',
  'stroke',
  'strokeWidth',
  'strokeAlign',
  'rounded',
  'roundedTL',
  'roundedTR',
  'roundedBL',
  'roundedBR',
  'cornerSmoothing',
  'opacity',
  'blendMode',
  'rotate',
  'overflow',
  'shadow',
  'blur',
  'grid',
  'columns',
  'rows',
  'columnGap',
  'colStart',
  'rowStart',
  'colSpan',
  'rowSpan'
])

const VALID_TEXT_PROPS = new Set([
  ...VALID_BASE_PROPS,
  'size',
  'fontSize',
  'font',
  'fontFamily',
  'weight',
  'fontWeight',
  'color',
  'textAlign',
  'lineHeight',
  'letterSpacing',
  'textDecoration',
  'textCase',
  'maxLines',
  'truncate',
  'textAutoResize'
])

const VALID_ICON_PROPS = new Set([...VALID_BASE_PROPS, 'size', 'color'])

const VALID_SHAPE_PROPS = new Set([...VALID_BASE_PROPS, 'points', 'innerRadius', 'pointCount'])

const ELEMENT_PROPS: Partial<Record<string, Set<string>>> = {
  frame: VALID_BASE_PROPS,
  rectangle: VALID_BASE_PROPS,
  ellipse: VALID_BASE_PROPS,
  line: VALID_BASE_PROPS,
  group: VALID_BASE_PROPS,
  section: VALID_BASE_PROPS,
  vector: VALID_BASE_PROPS,
  component: VALID_BASE_PROPS,
  instance: VALID_BASE_PROPS,
  page: VALID_BASE_PROPS,
  text: VALID_TEXT_PROPS,
  icon: VALID_ICON_PROPS,
  star: VALID_SHAPE_PROPS,
  polygon: VALID_SHAPE_PROPS
}

const PROP_CORRECTIONS: Partial<Record<string, string>> = {
  margin: 'No margin — wrap in parent Frame with padding (p/px/py/pt/pr/pb/pl)',
  m: 'No margin — wrap in parent Frame with padding',
  mt: 'No margin — use parent gap or wrapper Frame with pt',
  mb: 'No margin — use parent gap or wrapper Frame with pb',
  ml: 'No margin — use parent gap or justify',
  mr: 'No margin — use parent gap or justify',
  mx: 'No margin-x — use parent px',
  my: 'No margin-y — use parent py',
  italic: 'Use font="Playfair Display Italic" or the italic variant of the family',
  className: 'Not supported — use direct props (bg, color, size, etc.)',
  class: 'Not supported — use direct props',
  style: 'Not supported — use direct props',
  css: 'Not supported — use direct props',
  fontStyle: 'Not supported — use a font family with the desired variant',
  src: 'For images use set_image_fill after render (not a JSX prop)',
  onClick: 'Interactions not supported in JSX — static design only'
}

const COLOR_PROPS = new Set(['bg', 'fill', 'stroke', 'color'])

export type IssueSeverity = 'error' | 'warning' | 'info'

export interface ValidationIssue {
  path: string
  severity: IssueSeverity
  code: string
  message: string
  fix?: string
}

export interface ValidationResult {
  valid: boolean
  errors: ValidationIssue[]
  warnings: ValidationIssue[]
  info: ValidationIssue[]
  summary: string
  rootType?: string
  nodeCount: number
}

function isValidHex(value: string): boolean {
  return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(value)
}

function pathOf(node: TreeNode, parent: string): string {
  const n = typeof node.props.name === 'string' ? node.props.name : undefined
  const base = `${parent} > ${node.type}`
  return n ? `${base}("${n}")` : base
}

// eslint-disable-next-line complexity -- walks DSL tree with multiple per-type checks
function walk(
  node: TreeNode,
  parent: string,
  errors: ValidationIssue[],
  warnings: ValidationIssue[],
  info: ValidationIssue[],
  counter: { count: number }
): void {
  counter.count++
  const type = node.type.toLowerCase()
  const validProps = ELEMENT_PROPS[type]
  const here = pathOf(node, parent)

  if (!validProps) {
    errors.push({
      path: here,
      severity: 'error',
      code: 'unknown-element',
      message: `Unknown element type "<${node.type}>"`,
      fix: 'Use: Frame, Text, Rectangle, Ellipse, Line, Star, Polygon, Vector, Group, Section, Component, Icon'
    })
    return
  }

  for (const [prop, value] of Object.entries(node.props)) {
    if (prop === 'children') continue
    if (validProps.has(prop)) {
      if (COLOR_PROPS.has(prop) && typeof value === 'string' && !isValidHex(value)) {
        errors.push({
          path: here,
          severity: 'error',
          code: 'invalid-color',
          message: `Color prop "${prop}" has non-hex value "${value}"`,
          fix: 'Use hex only: #RRGGBB or #RRGGBBAA (e.g., #0070F3 or #0070F340)'
        })
      }
      continue
    }

    const correction = PROP_CORRECTIONS[prop]
    errors.push({
      path: here,
      severity: 'error',
      code: 'invalid-prop',
      message: `Invalid prop "${prop}" on <${node.type}>`,
      fix: correction ?? `Remove or replace. See get_design_schema for valid props.`
    })
  }

  if (type === 'text' && node.props.color === undefined) {
    warnings.push({
      path: here,
      severity: 'warning',
      code: 'text-no-color',
      message: 'Text without color prop renders invisible (default black)',
      fix: 'Add color="#hex" matching your palette'
    })
  }

  if (type === 'frame' || type === 'section') {
    const elementChildren = node.children.filter((c): c is TreeNode => typeof c !== 'string')
    if (elementChildren.length >= 2 && !node.props.flex && !node.props.grid) {
      warnings.push({
        path: here,
        severity: 'warning',
        code: 'frame-no-flex',
        message: `<${node.type}> with ${elementChildren.length} children should have flex="row" or flex="col"`,
        fix: 'Without flex, children stack at (0,0)'
      })
    }
  }

  if ((type === 'star' || type === 'polygon') && !node.props.bg && !node.props.stroke) {
    warnings.push({
      path: here,
      severity: 'warning',
      code: 'shape-invisible',
      message: `<${node.type}> needs bg or stroke to be visible`,
      fix: 'Add bg="#hex" or stroke="#hex"'
    })
  }

  for (const child of node.children) {
    if (typeof child !== 'string') {
      walk(child, here, errors, warnings, info, counter)
    }
  }
}

export function validateJSX(jsx: string): ValidationResult {
  const errors: ValidationIssue[] = []
  const warnings: ValidationIssue[] = []
  const infoArr: ValidationIssue[] = []
  const counter = { count: 0 }

  let tree: TreeNode | null
  try {
    const Component = buildComponent(jsx)
    const element = React.createElement(Component, null)
    tree = resolveToTree(element)
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e)
    errors.push({
      path: 'root',
      severity: 'error',
      code: 'parse-error',
      message: `JSX could not be parsed: ${msg}`,
      fix: 'Check balanced braces, valid JSX syntax, and that the root is a single element'
    })
    return {
      valid: false,
      errors,
      warnings,
      info: infoArr,
      summary: `Parse failed: ${msg}`,
      nodeCount: 0
    }
  }

  if (!tree) {
    errors.push({
      path: 'root',
      severity: 'error',
      code: 'no-root',
      message: 'JSX must return exactly one root element',
      fix: 'Wrap everything in a single <Frame> or remove siblings at the root level'
    })
    return {
      valid: false,
      errors,
      warnings,
      info: infoArr,
      summary: 'No root element',
      nodeCount: 0
    }
  }

  walk(tree, 'root', errors, warnings, infoArr, counter)

  const summary =
    errors.length === 0
      ? `Valid (${counter.count} nodes). ${warnings.length} warning${warnings.length === 1 ? '' : 's'}.`
      : `Invalid. ${errors.length} error${errors.length === 1 ? '' : 's'}, ${warnings.length} warning${warnings.length === 1 ? '' : 's'}.`

  return {
    valid: errors.length === 0,
    errors,
    warnings,
    info: infoArr,
    summary,
    rootType: tree.type,
    nodeCount: counter.count
  }
}

export function getSchemaDocument(): Record<string, unknown> {
  return {
    description:
      'OpenPencil design DSL. Each JSX expression produces design nodes. Exactly one root element per render call.',
    elements: {
      Frame: {
        purpose: 'Layout container. Use with flex="row"|"col" for auto-layout.',
        requires: ['When 2+ children: flex or grid']
      },
      Text: {
        purpose: 'Text node. Always set color.',
        requires: ['color prop to be visible']
      },
      Rectangle: { purpose: 'Solid/stroked rectangle or image placeholder.' },
      Ellipse: { purpose: 'Circle/oval. Set w=h for perfect circle.' },
      Line: { purpose: 'Straight line. Needs stroke.' },
      Star: { purpose: 'Star shape. Needs bg or stroke. Optional points, innerRadius.' },
      Polygon: { purpose: 'Polygon. Needs bg or stroke. Optional pointCount.' },
      Vector: { purpose: 'Vector path.' },
      Group: { purpose: 'Pure visual grouping (no layout). Only for artistic composites.' },
      Section: { purpose: 'Top-level page region. Like Frame with semantic role.' },
      Component: { purpose: 'Reusable component instance. Same props as Frame.' },
      Icon: { purpose: 'Vector icon. <Icon name="lucide:heart" size={20} color="#FFF" />' }
    },
    propsCommon: {
      layout: ['flex', 'flow', 'dir', 'gap', 'wrap', 'rowGap', 'justify', 'items', 'grow'],
      sizing: ['w', 'h', 'minW', 'maxW', 'minH', 'maxH'],
      position: ['x', 'y'],
      padding: ['p', 'px', 'py', 'pt', 'pr', 'pb', 'pl'],
      appearance: [
        'bg',
        'fill',
        'stroke',
        'strokeWidth',
        'strokeAlign',
        'rounded',
        'roundedTL',
        'roundedTR',
        'roundedBL',
        'roundedBR',
        'cornerSmoothing',
        'opacity',
        'blendMode',
        'rotate',
        'overflow',
        'shadow',
        'blur'
      ],
      identity: ['name', 'key'],
      grid: ['grid', 'columns', 'rows', 'columnGap', 'colStart', 'rowStart', 'colSpan', 'rowSpan']
    },
    propsText: [
      'size',
      'font',
      'weight',
      'color',
      'textAlign',
      'lineHeight',
      'letterSpacing',
      'textDecoration',
      'textCase',
      'maxLines',
      'truncate'
    ],
    propsIcon: ['name', 'size', 'color'],
    valueRules: {
      colors: 'Hex only: #RRGGBB or #RRGGBBAA. Named colors, rgb(), hsl() NOT supported.',
      sizing: 'Numbers (px), or "fill" | "hug" | grow={N}',
      flex: 'flex enables auto-layout. Without flex, children stack at 0,0.',
      rotation: 'rotate={deg} — degrees, not radians.',
      shadow: '"offX offY blur #color" as a single string'
    },
    forbidden: {
      margin: 'No margin props (m, mt, mb, ml, mr, mx, my). Wrap in Frame with padding.',
      italic: 'Use font variant (e.g., "Playfair Display Italic"), not italic={true}',
      className: 'Not supported.',
      style: 'Not supported — use direct props.',
      css: 'Not supported.'
    }
  }
}
