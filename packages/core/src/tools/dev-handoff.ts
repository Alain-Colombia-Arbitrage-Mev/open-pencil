import { defineTool } from './schema'

import type { FigmaAPI, FigmaNodeProxy } from '../figma-api'

interface NodeInfo {
  id: string
  dev_id: string
  name: string
  type: string
  x: number
  y: number
  w: number
  h: number
  fills?: string[]
  strokes?: string[]
  stroke_width?: number
  radius?: number
  text?: string
  font_family?: string
  font_size?: number
  font_weight?: number | string
  color?: string
  auto_layout?: {
    direction?: string
    gap?: number
    padding?: { top: number; right: number; bottom: number; left: number }
    justify?: string
    items?: string
  }
  flutter_hint: string
  interaction_hint?: string
  children?: NodeInfo[]
}

function rgbaToHex(color: { r: number; g: number; b: number; a?: number } | undefined): string | null {
  if (!color) return null
  const toHex = (v: number): string =>
    Math.round(v * 255).toString(16).padStart(2, '0').toUpperCase()
  const hex = `#${toHex(color.r)}${toHex(color.g)}${toHex(color.b)}`
  const a = color.a ?? 1
  if (a < 1) return `${hex}${toHex(a)}`
  return hex
}

function collectColors(paints: Array<Record<string, unknown>> | undefined): string[] {
  if (!Array.isArray(paints)) return []
  const out: string[] = []
  for (const p of paints) {
    if (p.visible === false) continue
    const hex = rgbaToHex(p.color as { r: number; g: number; b: number; a?: number } | undefined)
    if (hex) out.push(hex)
    if (typeof p.type === 'string' && p.type === 'IMAGE') out.push('image-fill')
  }
  return out
}

function isInputLike(name: string, type: string): boolean {
  const n = name.toLowerCase()
  return (
    n.includes('input') ||
    n.includes('field') ||
    n.includes('textbox') ||
    n.includes('search') ||
    (type === 'FRAME' && (n.includes('email') || n.includes('password') || n.includes('username')))
  )
}

function isButtonLike(name: string, type: string): boolean {
  const n = name.toLowerCase()
  return (
    (type === 'FRAME' || type === 'COMPONENT') &&
    (n.includes('button') ||
      n.includes('cta') ||
      n.includes('btn') ||
      n.includes('submit') ||
      n.includes('click'))
  )
}

function isImageLike(name: string, type: string): boolean {
  const n = name.toLowerCase()
  return (
    (type === 'RECTANGLE' || type === 'FRAME') &&
    (n.includes('image') || n.includes('img') || n.includes('photo') || n.includes('avatar'))
  )
}

function interactionHint(name: string, type: string): string | undefined {
  if (isButtonLike(name, type)) return 'button (onPressed)'
  if (isInputLike(name, type)) return 'text input (TextField / controller)'
  const n = name.toLowerCase()
  if (n.includes('nav') || n.includes('tab')) return 'navigation (Navigator.push)'
  if (n.includes('link')) return 'link (url_launcher)'
  if (n.includes('toggle') || n.includes('switch')) return 'toggle (Switch value state)'
  if (n.includes('checkbox')) return 'checkbox (Checkbox value state)'
  if (n.includes('dropdown') || n.includes('select')) return 'dropdown (DropdownButton)'
  return undefined
}

// eslint-disable-next-line complexity -- pattern-matches many node shapes to widget suggestions
function flutterHint(type: string, name: string, props: Record<string, unknown>): string {
  const layout = props.layoutMode as string | undefined
  const autoresize = props.textAutoResize as string | undefined
  if (type === 'TEXT') return 'Text'
  if (type === 'ELLIPSE') {
    const w = props.width as number | undefined
    const h = props.height as number | undefined
    if (w && h && Math.abs(w - h) < 2) {
      const nameLower = name.toLowerCase()
      if (nameLower.includes('avatar') || nameLower.includes('profile')) return 'CircleAvatar'
      return 'Container (CircleBorder / shape: BoxShape.circle)'
    }
    return 'Container (ShapeDecoration)'
  }
  if (type === 'RECTANGLE') {
    if (isImageLike(name, type)) return 'Image.network or Image.asset'
    return 'Container (BoxDecoration)'
  }
  if (type === 'LINE') return 'Divider or Container(height/width: 1)'
  if (isButtonLike(name, type)) return 'ElevatedButton / TextButton / OutlinedButton'
  if (isInputLike(name, type)) return 'TextField (InputDecoration)'
  if (type === 'FRAME' || type === 'COMPONENT' || type === 'INSTANCE') {
    if (layout === 'HORIZONTAL') return 'Row'
    if (layout === 'VERTICAL') return 'Column'
    return 'Stack or Container'
  }
  if (type === 'GROUP') return 'Stack'
  if (type === 'SECTION') return 'Widget / Section'
  if (type === 'STAR') return 'CustomPaint (star shape)'
  if (type === 'POLYGON') return 'CustomPaint (polygon)'
  if (type === 'VECTOR') return 'CustomPaint or SvgPicture'
  void autoresize
  return 'Container'
}

// eslint-disable-next-line complexity -- maps dozens of DSL fields to dev-friendly names
function buildNodeInfo(proxy: FigmaNodeProxy, devId: string): NodeInfo {
  const j = proxy.toJSON(0) as unknown as Record<string, unknown>
  const type = typeof j.type === 'string' ? j.type : 'NODE'
  const name = typeof j.name === 'string' ? j.name : ''
  const x = typeof j.x === 'number' ? j.x : 0
  const y = typeof j.y === 'number' ? j.y : 0
  const w = typeof j.width === 'number' ? j.width : 0
  const h = typeof j.height === 'number' ? j.height : 0

  const info: NodeInfo = {
    id: proxy.id,
    dev_id: devId,
    name,
    type,
    x: Math.round(x),
    y: Math.round(y),
    w: Math.round(w),
    h: Math.round(h),
    flutter_hint: flutterHint(type, name, j)
  }

  const fills = collectColors(j.fills as Array<Record<string, unknown>> | undefined)
  if (fills.length) info.fills = fills
  const strokes = collectColors(j.strokes as Array<Record<string, unknown>> | undefined)
  if (strokes.length) info.strokes = strokes
  if (typeof j.strokeWeight === 'number') info.stroke_width = j.strokeWeight
  if (typeof j.cornerRadius === 'number' && j.cornerRadius > 0) info.radius = j.cornerRadius

  if (type === 'TEXT') {
    info.text = j.characters as string | undefined
    const fontName = j.fontName as { family?: string; style?: string } | undefined
    if (fontName?.family) info.font_family = fontName.family
    if (typeof j.fontSize === 'number') info.font_size = j.fontSize
    if (typeof j.fontWeight === 'number') info.font_weight = j.fontWeight
    const fillsArr = j.fills as Array<Record<string, unknown>> | undefined
    const textFill = Array.isArray(fillsArr) ? fillsArr[0] : undefined
    if (textFill) {
      const hex = rgbaToHex(textFill.color as { r: number; g: number; b: number; a?: number } | undefined)
      if (hex) info.color = hex
    }
  }

  if (j.layoutMode && j.layoutMode !== 'NONE') {
    info.auto_layout = {
      direction: j.layoutMode === 'HORIZONTAL' ? 'row' : 'column',
      gap: (j.itemSpacing as number | undefined) ?? 0,
      padding: {
        top: (j.paddingTop as number | undefined) ?? 0,
        right: (j.paddingRight as number | undefined) ?? 0,
        bottom: (j.paddingBottom as number | undefined) ?? 0,
        left: (j.paddingLeft as number | undefined) ?? 0
      },
      justify: j.primaryAxisAlignItems as string | undefined,
      items: j.counterAxisAlignItems as string | undefined
    }
  }

  const hint = interactionHint(name, type)
  if (hint) info.interaction_hint = hint

  return info
}

function walkTree(
  figma: FigmaAPI,
  rootProxy: FigmaNodeProxy,
  devPrefix: string,
  depth: number,
  maxDepth: number
): NodeInfo {
  const info = buildNodeInfo(rootProxy, devPrefix)
  if (depth >= maxDepth) return info

  const json = rootProxy.toJSON(0) as unknown as Record<string, unknown>
  const childList = (json.children as Array<{ id: string }> | undefined) ?? []
  if (childList.length === 0) return info

  const children: NodeInfo[] = []
  let idx = 1
  for (const { id } of childList) {
    const child = figma.getNodeById(id)
    if (!child) continue
    const childDevId = `${devPrefix}.${String(idx).padStart(2, '0')}`
    children.push(walkTree(figma, child, childDevId, depth + 1, maxDepth))
    idx++
  }
  info.children = children
  return info
}

function collectInputs(info: NodeInfo, out: NodeInfo[]): void {
  if (isInputLike(info.name, info.type) || isButtonLike(info.name, info.type)) {
    out.push(info)
  }
  if (info.children) for (const c of info.children) collectInputs(c, out)
}

function collectScreens(info: NodeInfo): NodeInfo[] {
  if (!info.children) return [info]
  return info.children.filter((c) => c.type === 'FRAME' || c.type === 'COMPONENT')
}

export const describeForDev = defineTool({
  name: 'describe_for_dev',
  description:
    'Rich developer-handoff description of a design subtree. Returns every frame/input/button with consecutive dev_id (01, 01.01, 01.02...), Flutter widget hints, interaction intent, colors/fonts/layout mapped to dev-friendly names. Use when preparing design for a coding agent (Flutter/React Native/native) to implement.',
  params: {
    id: {
      type: 'string',
      description: 'Root node id. Defaults to current page.',
      required: false
    },
    max_depth: {
      type: 'number',
      description: 'Max tree depth to walk (default 8).',
      required: false
    },
    include_inputs_summary: {
      type: 'boolean',
      description: 'Include a flat list of inputs/buttons at the end (default true).',
      required: false
    }
  },
  execute: (figma, args) => {
    const rootId = args.id ?? figma.currentPage.id
    const maxDepth = args.max_depth ?? 8
    const root = figma.getNodeById(rootId)
    if (!root) return { error: `Node "${rootId}" not found` }

    const tree = walkTree(figma, root, '01', 0, maxDepth)
    const result: Record<string, unknown> = {
      dev_id: tree.dev_id,
      name: tree.name,
      id: tree.id,
      type: tree.type,
      canvas: `${tree.w}x${tree.h}`,
      tree
    }

    if (tree.type === 'PAGE' || tree.type === 'CANVAS') {
      result.screens = collectScreens(tree).map((s) => ({
        dev_id: s.dev_id,
        id: s.id,
        name: s.name,
        dimensions: `${s.w}x${s.h}`
      }))
    }

    if (args.include_inputs_summary !== false) {
      const inputs: NodeInfo[] = []
      collectInputs(tree, inputs)
      result.inputs_and_buttons = inputs.map((i) => ({
        dev_id: i.dev_id,
        id: i.id,
        name: i.name,
        type: i.type,
        flutter_hint: i.flutter_hint,
        interaction_hint: i.interaction_hint,
        text: i.text
      }))
    }

    return result
  }
})

function indent(level: number): string {
  return '  '.repeat(level)
}

function colorToDart(hex: string | undefined): string {
  if (!hex) return 'null'
  const clean = hex.replace('#', '').toUpperCase()
  if (clean.length === 6) return `Color(0xFF${clean})`
  if (clean.length === 8) {
    const alpha = clean.slice(6, 8)
    const rgb = clean.slice(0, 6)
    return `Color(0x${alpha}${rgb})`
  }
  return 'null'
}

function emitAlignment(justify?: string): string {
  switch (justify) {
    case 'MIN':
      return 'MainAxisAlignment.start'
    case 'MAX':
      return 'MainAxisAlignment.end'
    case 'CENTER':
      return 'MainAxisAlignment.center'
    case 'SPACE_BETWEEN':
      return 'MainAxisAlignment.spaceBetween'
    default:
      return 'MainAxisAlignment.start'
  }
}

function emitCrossAlignment(items?: string): string {
  switch (items) {
    case 'MIN':
      return 'CrossAxisAlignment.start'
    case 'MAX':
      return 'CrossAxisAlignment.end'
    case 'CENTER':
      return 'CrossAxisAlignment.center'
    case 'BASELINE':
      return 'CrossAxisAlignment.baseline'
    default:
      return 'CrossAxisAlignment.stretch'
  }
}

// eslint-disable-next-line complexity -- emits Dart for many DSL shapes
function emitFlutter(info: NodeInfo, level: number): string {
  const pad = indent(level)
  const nextPad = indent(level + 1)

  if (info.type === 'TEXT') {
    const textLit = JSON.stringify(info.text ?? '')
    const size = info.font_size ?? 14
    const weight = typeof info.font_weight === 'number' && info.font_weight >= 600 ? 'FontWeight.bold' : 'FontWeight.normal'
    const color = colorToDart(info.color)
    const family = info.font_family ? `, fontFamily: ${JSON.stringify(info.font_family)}` : ''
    return `${pad}Text(\n${nextPad}${textLit},\n${nextPad}style: TextStyle(fontSize: ${size}, fontWeight: ${weight}, color: ${color}${family}),\n${pad})`
  }

  if (info.type === 'ELLIPSE') {
    const fill = colorToDart(info.fills?.[0])
    return `${pad}Container(\n${nextPad}width: ${info.w},\n${nextPad}height: ${info.h},\n${nextPad}decoration: BoxDecoration(shape: BoxShape.circle, color: ${fill}),\n${pad})`
  }

  if (info.type === 'RECTANGLE') {
    const fill = colorToDart(info.fills?.[0])
    const radius = info.radius ?? 0
    if (isImageLike(info.name, info.type)) {
      return `${pad}Container(\n${nextPad}width: ${info.w},\n${nextPad}height: ${info.h},\n${nextPad}decoration: BoxDecoration(borderRadius: BorderRadius.circular(${radius}), color: ${fill}),\n${nextPad}child: const Icon(Icons.image, size: 48, color: Colors.white54),\n${pad})`
    }
    return `${pad}Container(\n${nextPad}width: ${info.w},\n${nextPad}height: ${info.h},\n${nextPad}decoration: BoxDecoration(borderRadius: BorderRadius.circular(${radius}), color: ${fill}),\n${pad})`
  }

  if (info.type === 'FRAME' || info.type === 'COMPONENT' || info.type === 'INSTANCE') {
    const layout = info.auto_layout
    const children = info.children ?? []
    const bg = colorToDart(info.fills?.[0])
    const radius = info.radius ?? 0
    const padL = layout?.padding?.left ?? 0
    const padT = layout?.padding?.top ?? 0
    const padR = layout?.padding?.right ?? 0
    const padB = layout?.padding?.bottom ?? 0

    if (!layout) {
      const innerBlocks = children.map((c) => emitFlutter(c, level + 2)).join(',\n')
      return `${pad}Container(\n${nextPad}width: ${info.w},\n${nextPad}height: ${info.h},\n${nextPad}decoration: BoxDecoration(borderRadius: BorderRadius.circular(${radius}), color: ${bg}),\n${nextPad}child: Stack(\n${indent(level + 2)}children: [\n${innerBlocks}\n${indent(level + 2)}],\n${nextPad}),\n${pad})`
    }

    const widget = layout.direction === 'row' ? 'Row' : 'Column'
    const gap = layout.gap ?? 0
    const renderedChildren: string[] = []
    children.forEach((c, i) => {
      if (i > 0 && gap > 0) {
        const spacerAxis = layout.direction === 'row' ? 'width' : 'height'
        renderedChildren.push(`${indent(level + 3)}SizedBox(${spacerAxis}: ${gap})`)
      }
      renderedChildren.push(emitFlutter(c, level + 3))
    })
    const childrenStr = renderedChildren.join(',\n')
    const justify = emitAlignment(layout.justify)
    const cross = emitCrossAlignment(layout.items)

    return `${pad}Container(\n${nextPad}padding: const EdgeInsets.only(left: ${padL}, top: ${padT}, right: ${padR}, bottom: ${padB}),\n${nextPad}decoration: BoxDecoration(borderRadius: BorderRadius.circular(${radius}), color: ${bg}),\n${nextPad}child: ${widget}(\n${indent(level + 2)}mainAxisAlignment: ${justify},\n${indent(level + 2)}crossAxisAlignment: ${cross},\n${indent(level + 2)}children: [\n${childrenStr}\n${indent(level + 2)}],\n${nextPad}),\n${pad})`
  }

  return `${pad}const SizedBox()`
}

export const exportFlutter = defineTool({
  name: 'export_flutter',
  description:
    'Export a design subtree as Flutter widget code (Dart). Returns a StatelessWidget skeleton using Row/Column/Container/Text/etc. Not production-polished, but a correct structural starting point for a Flutter developer.',
  params: {
    id: { type: 'string', description: 'Root node id. Defaults to current page.', required: false },
    widget_name: {
      type: 'string',
      description: 'Name of the generated widget class (PascalCase).',
      required: false
    },
    max_depth: { type: 'number', description: 'Max tree depth (default 10).', required: false }
  },
  execute: (figma, args) => {
    const rootId = args.id ?? figma.currentPage.id
    const root = figma.getNodeById(rootId)
    if (!root) return { error: `Node "${rootId}" not found` }
    const tree = walkTree(figma, root, '01', 0, args.max_depth ?? 10)
    const widgetName = args.widget_name ?? pascalCase(tree.name || 'GeneratedScreen')
    const body = emitFlutter(tree, 3)
    const dart = `import 'package:flutter/material.dart';\n\nclass ${widgetName} extends StatelessWidget {\n  const ${widgetName}({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      body: SafeArea(\n        child: ${body.trimStart()}\n      ),\n    );\n  }\n}\n`
    return {
      widget_name: widgetName,
      root: { id: tree.id, name: tree.name, dev_id: tree.dev_id },
      file_name: `${kebabCase(widgetName)}.dart`,
      dart_code: dart,
      note:
        'Structural starting point — review widths, paddings, and Expanded/Flexible usage before shipping. Replace image placeholders with real assets/network URLs.'
    }
  }
})

function pascalCase(s: string): string {
  return s
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .trim()
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join('')
}

function kebabCase(s: string): string {
  return s
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .toLowerCase()
    .replace(/^-+|-+$/g, '')
}

export const exportFlowDiagram = defineTool({
  name: 'export_flow_diagram',
  description:
    'Generate a Mermaid flow diagram of the screens in the current page. Detects screens as direct children of the page, and attempts to infer navigation edges from button names mentioning other screen names. Use for design-to-dev handoff and architecture docs.',
  params: {
    page_id: { type: 'string', description: 'Page id. Defaults to current page.', required: false }
  },
  execute: (figma, args) => {
    const pageId = args.page_id ?? figma.currentPage.id
    const page = figma.getNodeById(pageId)
    if (!page) return { error: `Page "${pageId}" not found` }

    const tree = walkTree(figma, page, '01', 0, 4)
    const screens = collectScreens(tree)

    const screenNamesNormalized = screens.map((s) => ({
      devId: s.dev_id,
      name: s.name,
      normalized: s.name.toLowerCase().replace(/[^a-z0-9]+/g, ''),
      id: s.id
    }))

    const edges: Array<{ from: string; to: string; label: string }> = []
    for (const screen of screens) {
      const buttons: NodeInfo[] = []
      collectInputs(screen, buttons)
      for (const btn of buttons) {
        if (!isButtonLike(btn.name, btn.type)) continue
        const btnNorm = `${btn.name}${btn.text ?? ''}`.toLowerCase().replace(/[^a-z0-9]+/g, '')
        for (const target of screenNamesNormalized) {
          if (target.id === screen.id) continue
          if (target.normalized.length < 3) continue
          if (btnNorm.includes(target.normalized)) {
            edges.push({ from: screen.dev_id, to: target.devId, label: btn.text ?? btn.name })
            break
          }
        }
      }
    }

    const nodesDecl = screens.map((s) => `  ${s.dev_id.replace('.', '_')}["${s.dev_id} · ${s.name}"]`).join('\n')
    const edgesDecl = edges.length
      ? edges
          .map(
            (e) =>
              `  ${e.from.replace('.', '_')} -->|${JSON.stringify(e.label).slice(1, -1)}| ${e.to.replace('.', '_')}`
          )
          .join('\n')
      : '  %% No automatic edges inferred — annotate buttons with target screen name to auto-link'

    const mermaid = `flowchart LR\n${nodesDecl}\n${edgesDecl}\n`

    return {
      screen_count: screens.length,
      edge_count: edges.length,
      screens: screens.map((s) => ({ dev_id: s.dev_id, name: s.name, id: s.id })),
      mermaid
    }
  }
})
