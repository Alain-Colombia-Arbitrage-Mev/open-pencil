import { SceneGraph } from '../../../scene-graph'
import { copyEffects, copyFills, copyStrokes } from '../../../scene-graph/copy'
import { populateInstanceChildren } from '../../../scene-graph/instances'
import { parseSVGPath } from '../svg/parse-path'
import {
  applyCornerRadius,
  applyPadding,
  bindIfVar,
  buildVarContext,
  convertEffects,
  convertFill,
  convertStroke,
  isVarRef,
  type PenDocument,
  type PenNode,
  type VarContext
} from './convert'
import {
  mapAlignItems,
  mapConstraint,
  mapFontWeight,
  mapJustifyContent,
  mapLayoutMode,
  mapNodeType,
  mapTextAlign,
  mapTextAlignVertical,
  mapTextAutoResize,
  mapTextCase,
  mapTextDecoration,
  parseSize
} from './mappers'

import type { LayoutMode, LayoutSizing, SceneNode, VectorNetwork } from '../../../scene-graph'

function scaleVectorNetwork(vn: VectorNetwork, targetW: number, targetH: number): void {
  if (vn.vertices.length === 0) return
  let minX = Infinity
  let maxX = -Infinity
  let minY = Infinity
  let maxY = -Infinity
  for (const v of vn.vertices) {
    minX = Math.min(minX, v.x)
    maxX = Math.max(maxX, v.x)
    minY = Math.min(minY, v.y)
    maxY = Math.max(maxY, v.y)
  }
  const vnW = maxX - minX
  const vnH = maxY - minY
  if (vnW < 0.01 || vnH < 0.01) return
  const sx = targetW / vnW
  const sy = targetH / vnH
  if (Math.abs(sx - 1) < 0.01 && Math.abs(sy - 1) < 0.01) return
  for (const v of vn.vertices) {
    v.x = (v.x - minX) * sx
    v.y = (v.y - minY) * sy
  }
  for (const s of vn.segments) {
    s.tangentStart = { x: s.tangentStart.x * sx, y: s.tangentStart.y * sy }
    s.tangentEnd = { x: s.tangentEnd.x * sx, y: s.tangentEnd.y * sy }
  }
}

function resolveFontFamily(raw: string | undefined, ctx: VarContext): string {
  if (!raw) return 'Inter'
  if (isVarRef(raw)) return ctx.resolveString(raw)
  return raw
}

function buildBaseOverrides(pen: PenNode): Partial<SceneNode> {
  return {
    id: pen.id,
    name: pen.name ?? (pen.type === 'icon_font' ? (pen.iconFontName ?? 'Icon') : pen.type),
    x: pen.x ?? 0,
    y: pen.y ?? 0,
    visible: pen.enabled !== false,
    opacity: pen.opacity ?? 1,
    rotation: pen.rotation ?? 0,
    flipX: pen.flipX ?? false,
    flipY: pen.flipY ?? false,
    clipsContent: pen.clip ?? false,
    boundVariables: {},
    horizontalConstraint: mapConstraint(pen.horizontalConstraint),
    verticalConstraint: mapConstraint(pen.verticalConstraint)
  }
}

function applyAutoLayout(
  overrides: Partial<SceneNode>,
  layoutMode: LayoutMode,
  pen: PenNode,
  widthSizing: LayoutSizing,
  heightSizing: LayoutSizing,
  ctx?: VarContext
): void {
  overrides.layoutMode = layoutMode
  overrides.primaryAxisAlign = mapJustifyContent(pen.justifyContent)
  overrides.counterAxisAlign = mapAlignItems(pen.alignItems)
  overrides.itemSpacing =
    typeof pen.gap === 'string' && isVarRef(pen.gap) && ctx
      ? ctx.resolveNumber(pen.gap)
      : ((pen.gap ?? 0) as number)

  if (pen.rowGap !== undefined) {
    overrides.counterAxisSpacing =
      typeof pen.rowGap === 'string' && isVarRef(pen.rowGap) && ctx
        ? ctx.resolveNumber(pen.rowGap)
        : (pen.rowGap as number)
  }

  if (pen.wrap) {
    overrides.layoutWrap = 'WRAP'
  }

  if (layoutMode === 'VERTICAL') {
    overrides.primaryAxisSizing = heightSizing
    overrides.counterAxisSizing = widthSizing
  } else {
    overrides.primaryAxisSizing = widthSizing
    overrides.counterAxisSizing = heightSizing
  }
}

function applyTextProps(node: SceneNode, pen: PenNode, ctx: VarContext): void {
  node.text = pen.type === 'icon_font' ? (pen.iconFontName ?? '') : (pen.content ?? '')
  node.fontFamily =
    pen.type === 'icon_font'
      ? (pen.iconFontFamily ?? 'Material Symbols Sharp')
      : resolveFontFamily(pen.fontFamily, ctx)
  node.fontSize = pen.fontSize ?? 14
  node.fontWeight = mapFontWeight(
    pen.fontWeight ?? (pen.type === 'icon_font' ? pen.weight : undefined)
  )
  node.textAlignHorizontal = mapTextAlign(pen.textAlign)
  node.textAlignVertical = mapTextAlignVertical(pen.textAlignVertical)
  node.textDecoration = mapTextDecoration(pen.textDecoration)
  node.textCase = mapTextCase(pen.textCase)
  if (pen.lineHeight !== undefined) {
    node.lineHeight = pen.lineHeight < 5 ? pen.lineHeight * node.fontSize : pen.lineHeight
  }
  if (pen.letterSpacing !== undefined) node.letterSpacing = pen.letterSpacing
  node.textAutoResize = mapTextAutoResize(pen.textGrowth)
  if (pen.fontFamily && isVarRef(pen.fontFamily)) {
    bindIfVar(node, 'fontFamily', pen.fontFamily, ctx)
  }
}

function resolveSizing(pen: PenNode, ctx: VarContext) {
  const isTextLike = pen.type === 'text' || pen.type === 'icon_font'
  const isGroupLike = pen.type === 'group'
  const defaultSize = isTextLike ? 20 : 100
  const defaultW = isTextLike && pen.width === undefined ? 10_000 : defaultSize
  const w = parseSize(pen.width, defaultW, ctx)
  const h = parseSize(pen.height, defaultSize, ctx)
  const layout = mapLayoutMode(pen)

  if (pen.width === undefined && (layout !== 'NONE' || isGroupLike)) w.sizing = 'HUG'
  if (pen.height === undefined && (layout !== 'NONE' || isGroupLike)) h.sizing = 'HUG'

  return { w, h, layout, isTextLike }
}

function inheritLayoutFromComp(node: SceneNode, pen: PenNode, comp: SceneNode): void {
  const wasRow = node.layoutMode === 'HORIZONTAL'
  node.layoutMode = comp.layoutMode
  node.primaryAxisAlign = comp.primaryAxisAlign
  node.counterAxisAlign = comp.counterAxisAlign
  const isRow = node.layoutMode === 'HORIZONTAL'
  if (wasRow !== isRow) {
    const oldP = node.primaryAxisSizing
    node.primaryAxisSizing = node.counterAxisSizing
    node.counterAxisSizing = oldP
  }
  const widthAxis = isRow ? 'primaryAxisSizing' : 'counterAxisSizing'
  const heightAxis = isRow ? 'counterAxisSizing' : 'primaryAxisSizing'
  if (pen.width === undefined) node[widthAxis] = comp[widthAxis]
  if (pen.height === undefined) node[heightAxis] = comp[heightAxis]
  if (pen.gap === undefined) node.itemSpacing = comp.itemSpacing
  if (pen.padding === undefined) {
    node.paddingTop = comp.paddingTop
    node.paddingRight = comp.paddingRight
    node.paddingBottom = comp.paddingBottom
    node.paddingLeft = comp.paddingLeft
  }
  if (pen.clip === undefined) node.clipsContent = comp.clipsContent
}

function applyRefVisuals(
  node: SceneNode,
  pen: PenNode,
  compPen: PenNode | undefined,
  ctx: VarContext
): void {
  if (!compPen) return
  if (pen.fill === undefined && compPen.fill !== undefined)
    node.fills = convertFill(compPen.fill, ctx, node)
  if (pen.stroke === undefined && compPen.stroke)
    node.strokes = convertStroke(compPen.stroke, ctx, node)
  if (pen.effect === undefined && compPen.effect) node.effects = convertEffects(compPen.effect)
  if (pen.cornerRadius === undefined) applyCornerRadius(node, compPen.cornerRadius, ctx)
}

function applyRefProps(
  node: SceneNode,
  pen: PenNode,
  graph: SceneGraph,
  componentIds: Map<string, string>,
  penSources: Map<string, PenNode>,
  ctx: VarContext
): void {
  if (!pen.ref) return
  const componentId = componentIds.get(pen.ref) ?? pen.ref
  node.componentId = componentId
  const comp = graph.getNode(componentId)
  if (!comp) return
  if (pen.width === undefined) node.width = comp.width
  if (pen.height === undefined) node.height = comp.height
  if (pen.layout === undefined) inheritLayoutFromComp(node, pen, comp)
  applyRefVisuals(node, pen, penSources.get(pen.ref), ctx)
}

function applyAllRefProps(
  penNodes: PenNode[],
  graph: SceneGraph,
  componentIds: Map<string, string>,
  penSources: Map<string, PenNode>,
  ctx: VarContext
): void {
  for (const pen of penNodes) {
    if (pen.type === 'ref') {
      const node = graph.getNode(pen.id)
      if (node) applyRefProps(node, pen, graph, componentIds, penSources, ctx)
    }
    if (pen.children) applyAllRefProps(pen.children, graph, componentIds, penSources, ctx)
  }
}

function applyTheme(theme: Record<string, string>, ctx: VarContext): void {
  const themeName = Object.values(theme)[0]
  if (themeName) ctx.setActiveTheme(themeName)
}

function applyStarProps(node: SceneNode, pen: PenNode): void {
  if (pen.type === 'star') {
    node.pointCount = pen.points ?? 5
    node.starInnerRadius = pen.innerRadius ?? 0.4
  }
  if (pen.type === 'polygon') {
    node.pointCount = pen.points ?? 6
  }
}

// eslint-disable-next-line complexity -- .pen node mapping touches many format-specific fields
function createSceneNode(
  pen: PenNode,
  parentId: string,
  graph: SceneGraph,
  ctx: VarContext,
  componentIds: Map<string, string>,
  penSources: Map<string, PenNode>
): string | null {
  if (pen.type === 'prompt') return null
  if (pen.theme) applyTheme(pen.theme, ctx)

  const { w, h, layout, isTextLike } = resolveSizing(pen, ctx)
  const overrides = buildBaseOverrides(pen)
  overrides.width = w.value
  overrides.height = h.value

  const parentLayout = graph.getNode(parentId)?.layoutMode ?? 'NONE'
  if (layout !== 'NONE') {
    const widthSizing =
      parentLayout === 'NONE' && w.sizing === 'FILL' ? ('FIXED' as LayoutSizing) : w.sizing
    const heightSizing =
      parentLayout === 'NONE' && h.sizing === 'FILL' ? ('FIXED' as LayoutSizing) : h.sizing
    applyAutoLayout(overrides, layout, pen, widthSizing, heightSizing, ctx)
  }

  const nodeType = mapNodeType(pen)
  const node = graph.createNode(nodeType, parentId, overrides)

  if (pen.fill !== undefined) node.fills = convertFill(pen.fill, ctx, node)
  if (pen.stroke) node.strokes = convertStroke(pen.stroke, ctx, node)
  node.effects = convertEffects(pen.effect)
  applyCornerRadius(node, pen.cornerRadius, ctx)
  applyPadding(node, pen.padding, ctx)
  applyStarProps(node, pen)

  if (isTextLike) {
    applyTextProps(node, pen, ctx)
    if (parentLayout === 'NONE' && pen.width === undefined && !pen.textGrowth) {
      node.textAutoResize = 'NONE'
      node.width = node.text.length * node.fontSize * 0.65
      node.height = node.fontSize * (node.lineHeight ? node.lineHeight / node.fontSize : 1.2)
    }
  }

  if (pen.type === 'path' && pen.geometry) {
    const vectorNetwork = parseSVGPath(pen.geometry)
    node.vectorNetwork = vectorNetwork
    scaleVectorNetwork(vectorNetwork, node.width, node.height)
  }

  if (nodeType === 'LINE') {
    node.height = Math.max((pen.stroke?.thickness as number | undefined) ?? 1, 1)
  }

  if (parentLayout !== 'NONE') {
    const parentVertical = parentLayout === 'VERTICAL'
    if (w.sizing === 'FILL') {
      if (parentVertical) node.layoutAlignSelf = 'STRETCH'
      else node.layoutGrow = 1
    }
    if (h.sizing === 'FILL') {
      if (parentVertical) node.layoutGrow = 1
      else node.layoutAlignSelf = 'STRETCH'
    }
  }

  if (pen.reusable) {
    componentIds.set(pen.id, node.id)
    penSources.set(pen.id, pen)
  }

  if (pen.children) {
    for (const child of pen.children) {
      createSceneNode(child, node.id, graph, ctx, componentIds, penSources)
    }
  }

  return node.id
}

function collectByNameType(
  graph: SceneGraph,
  parentId: string,
  name: string,
  type: string,
  out: SceneNode[],
  depth: number
): void {
  if (depth > 2) return
  const parent = graph.getNode(parentId)
  if (!parent) return
  for (const childId of parent.childIds) {
    const child = graph.getNode(childId)
    if (!child) continue
    if (child.name === name && child.type === type) out.push(child)
    collectByNameType(graph, childId, name, type, out, depth + 1)
  }
}

function findCloneByComponentId(
  graph: SceneGraph,
  parentId: string,
  origId: string
): SceneNode | undefined {
  const parent = graph.getNode(parentId)
  if (!parent) return undefined
  for (const childId of parent.childIds) {
    const child = graph.getNode(childId)
    if (!child) continue
    if (child.componentId === origId) return child
    const deep = findCloneByComponentId(graph, childId, origId)
    if (deep) return deep
  }
  return undefined
}

function findCloneByNameFallback(
  graph: SceneGraph,
  parentId: string,
  origId: string
): SceneNode | undefined {
  const orig = graph.getNode(origId)
  if (!orig) return undefined
  const matches: SceneNode[] = []
  collectByNameType(graph, parentId, orig.name, orig.type, matches, 0)
  return matches.length === 1 ? matches[0] : undefined
}

function applyOverrideVisuals(target: SceneNode, overrideData: Partial<PenNode>, ctx: VarContext): void {
  if (overrideData.fill !== undefined) target.fills = convertFill(overrideData.fill, ctx, target)
  if (overrideData.stroke !== undefined) target.strokes = convertStroke(overrideData.stroke, ctx, target)
  if (overrideData.effect !== undefined) target.effects = convertEffects(overrideData.effect)
  if (overrideData.cornerRadius !== undefined) applyCornerRadius(target, overrideData.cornerRadius, ctx)
}

function applyOverrideText(target: SceneNode, overrideData: Partial<PenNode>, ctx: VarContext): void {
  if (overrideData.content !== undefined) target.text = overrideData.content
  if (overrideData.fontFamily !== undefined) target.fontFamily = resolveFontFamily(overrideData.fontFamily, ctx)
  if (overrideData.fontSize !== undefined) target.fontSize = overrideData.fontSize
  if (overrideData.fontWeight !== undefined) target.fontWeight = mapFontWeight(overrideData.fontWeight)
  if (overrideData.letterSpacing !== undefined) target.letterSpacing = overrideData.letterSpacing
  if (overrideData.lineHeight !== undefined) target.lineHeight = overrideData.lineHeight
  if (overrideData.textDecoration !== undefined) target.textDecoration = mapTextDecoration(overrideData.textDecoration)
  if (overrideData.textCase !== undefined) target.textCase = mapTextCase(overrideData.textCase)
}

function applyOverrideTransform(target: SceneNode, overrideData: Partial<PenNode>, ctx: VarContext): void {
  if (overrideData.x !== undefined) target.x = overrideData.x
  if (overrideData.y !== undefined) target.y = overrideData.y
  if (overrideData.enabled !== undefined) target.visible = overrideData.enabled
  if (overrideData.opacity !== undefined) target.opacity = overrideData.opacity
  if (overrideData.flipX !== undefined) target.flipX = overrideData.flipX
  if (overrideData.flipY !== undefined) target.flipY = overrideData.flipY
  if (overrideData.rotation !== undefined) target.rotation = overrideData.rotation
  if (overrideData.name !== undefined) target.name = overrideData.name
  if (overrideData.width !== undefined)
    target.width = parseSize(overrideData.width, target.width, ctx).value
  if (overrideData.height !== undefined)
    target.height = parseSize(overrideData.height, target.height, ctx).value
}

function applyOverrideLayout(target: SceneNode, overrideData: Partial<PenNode>, ctx: VarContext): void {
  if (overrideData.layout === undefined) return
  const mode = mapLayoutMode(overrideData as PenNode)
  if (mode === 'NONE') return
  target.layoutMode = mode
  if (overrideData.gap !== undefined) {
    target.itemSpacing = typeof overrideData.gap === 'number' ? overrideData.gap : 0
  }
  if (overrideData.padding !== undefined) applyPadding(target, overrideData.padding, ctx)
}

function applyOverrideProps(
  target: SceneNode,
  overrideData: Partial<PenNode>,
  ctx: VarContext
): void {
  applyOverrideVisuals(target, overrideData, ctx)
  applyOverrideText(target, overrideData, ctx)
  applyOverrideTransform(target, overrideData, ctx)
  applyOverrideLayout(target, overrideData, ctx)
}

function populateInstances(graph: SceneGraph): void {
  for (const node of graph.getAllNodes()) {
    if (node.type === 'INSTANCE' && node.componentId && node.childIds.length === 0) {
      const component = graph.getNode(node.componentId)
      if (component) populateInstanceChildren(graph, node.id, node.componentId)
    }
  }
}

function applyDescendantOverrides(
  graph: SceneGraph,
  pen: PenNode,
  ctx: VarContext,
  componentIds: Map<string, string>,
  penSources: Map<string, PenNode>
): void {
  if (pen.type !== 'ref' || !pen.descendants) return
  const instanceNode = graph.getNode(pen.id)
  if (!instanceNode) return

  for (const [origId, overrideData] of Object.entries(pen.descendants)) {
    const clone =
      findCloneByComponentId(graph, instanceNode.id, origId) ??
      findCloneByNameFallback(graph, instanceNode.id, origId)

    if (clone) {
      if (overrideData.children) {
        const toDelete = clone.childIds.slice()
        for (const childId of toDelete) graph.deleteNode(childId)
        for (const child of overrideData.children) {
          createSceneNode(child, clone.id, graph, ctx, componentIds, penSources)
        }
      }
      applyOverrideProps(clone, overrideData, ctx)
      continue
    }

    if (overrideData.type && overrideData.id) {
      createSceneNode(
        overrideData as PenNode,
        instanceNode.id,
        graph,
        ctx,
        componentIds,
        penSources
      )
    }
  }
}

function walkAndApplyOverrides(
  nodes: PenNode[],
  graph: SceneGraph,
  ctx: VarContext,
  componentIds: Map<string, string>,
  penSources: Map<string, PenNode>
): void {
  for (const pen of nodes) {
    applyDescendantOverrides(graph, pen, ctx, componentIds, penSources)
    if (pen.children) walkAndApplyOverrides(pen.children, graph, ctx, componentIds, penSources)
  }
}

function collectComponentIds(nodes: PenNode[], map: Map<string, string>): void {
  for (const node of nodes) {
    if (node.reusable) map.set(node.id, node.id)
    if (node.children) collectComponentIds(node.children, map)
  }
}

function resolveNodeVars(node: SceneNode, graph: SceneGraph, ctx: VarContext): void {
  for (const [key, varId] of Object.entries(node.boundVariables)) {
    const variable = graph.variables.get(varId)
    if (!variable) continue
    const modeVal =
      variable.valuesByMode[ctx.activeModeId] ?? Object.values(variable.valuesByMode)[0]
    if (key.startsWith('fills[') && typeof modeVal === 'object' && 'r' in modeVal) {
      const idx = Number.parseInt(key.match(/\d+/)?.[0] ?? '0', 10)
      if (node.fills[idx]) node.fills[idx].color = modeVal
    } else if (key.startsWith('strokes[') && typeof modeVal === 'object' && 'r' in modeVal) {
      const idx = Number.parseInt(key.match(/\d+/)?.[0] ?? '0', 10)
      if (node.strokes[idx]) node.strokes[idx].color = modeVal
    }
  }
  for (const childId of node.childIds) {
    const child = graph.getNode(childId)
    if (child) resolveNodeVars(child, graph, ctx)
  }
}

function resolveThemeVariables(penNodes: PenNode[], graph: SceneGraph, ctx: VarContext): void {
  for (const pen of penNodes) {
    if (pen.theme) applyTheme(pen.theme, ctx)
    const node = graph.getNode(pen.id)
    if (node) resolveNodeVars(node, graph, ctx)
    if (pen.children) resolveThemeVariables(pen.children, graph, ctx)
  }
}

function fixInstanceWidths(graph: SceneGraph): void {
  for (const node of graph.getAllNodes()) {
    if (node.type !== 'INSTANCE' || !node.componentId) continue
    const comp = graph.getNode(node.componentId)
    if (!comp) continue
    if (node.width <= 100 && comp.width > 100) node.width = comp.width
    if (node.height <= 100 && comp.height > 100) node.height = comp.height
    if (comp.layoutGrow > 0) node.layoutGrow = comp.layoutGrow
    if (comp.layoutAlignSelf !== 'AUTO') node.layoutAlignSelf = comp.layoutAlignSelf
    node.fills = copyFills(node.fills)
    node.strokes = copyStrokes(node.strokes)
    node.effects = copyEffects(node.effects)
  }
}

function fixTextWidths(graph: SceneGraph): void {
  for (const node of graph.getAllNodes()) {
    if (node.type !== 'TEXT' || !node.text || node.text.length <= 1) continue
    if (node.width >= node.fontSize * 2) continue
    node.width = node.text.length * node.fontSize * 0.65
  }
}

export function parsePenFile(json: string): SceneGraph {
  const doc: PenDocument = JSON.parse(json)
  const graph = new SceneGraph()

  for (const page of graph.getPages(true)) {
    graph.deleteNode(page.id)
  }

  const ctx = buildVarContext(graph, doc.variables ?? {}, doc.themes ?? {})
  const componentIds = new Map<string, string>()
  const penSources = new Map<string, PenNode>()

  collectComponentIds(doc.children, componentIds)

  const page = graph.addPage(doc.children[0]?.name ?? 'Page 1')
  for (const child of doc.children) {
    createSceneNode(child, page.id, graph, ctx, componentIds, penSources)
  }

  applyAllRefProps(doc.children, graph, componentIds, penSources, ctx)
  populateInstances(graph)
  walkAndApplyOverrides(doc.children, graph, ctx, componentIds, penSources)
  populateInstances(graph)
  resolveThemeVariables(doc.children, graph, ctx)
  fixInstanceWidths(graph)
  fixTextWidths(graph)

  if (graph.getPages(true).length === 0) {
    graph.addPage('Page 1')
  }

  return graph
}

export async function readPenFile(file: File): Promise<SceneGraph> {
  return parsePenFile(await file.text())
}
