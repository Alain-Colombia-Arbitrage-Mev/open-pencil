import { populateInstanceChildren } from '../../../scene-graph/instances'

import {
  applyCornerRadius,
  applyPadding,
  convertEffects,
  convertFill,
  convertStroke,
  isVarRef,
  type PenNode,
  type VarContext
} from './convert'
import {
  mapFontWeight,
  mapLayoutMode,
  mapTextCase,
  mapTextDecoration,
  parseSize
} from './mappers'

import type { SceneGraph, SceneNode } from '../../../scene-graph'

function resolveFontFamily(raw: string | undefined, ctx: VarContext): string {
  if (!raw) return 'Inter'
  if (isVarRef(raw)) return ctx.resolveString(raw)
  return raw
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

export function findCloneByComponentId(
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

export function findCloneByNameFallback(
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

function applyOverrideVisuals(
  target: SceneNode,
  overrideData: Partial<PenNode>,
  ctx: VarContext
): void {
  if (overrideData.fill !== undefined) target.fills = convertFill(overrideData.fill, ctx, target)
  if (overrideData.stroke !== undefined)
    target.strokes = convertStroke(overrideData.stroke, ctx, target)
  if (overrideData.effect !== undefined) target.effects = convertEffects(overrideData.effect)
  if (overrideData.cornerRadius !== undefined)
    applyCornerRadius(target, overrideData.cornerRadius, ctx)
}

function applyOverrideText(
  target: SceneNode,
  overrideData: Partial<PenNode>,
  ctx: VarContext
): void {
  if (overrideData.content !== undefined) target.text = overrideData.content
  if (overrideData.fontFamily !== undefined)
    target.fontFamily = resolveFontFamily(overrideData.fontFamily, ctx)
  if (overrideData.fontSize !== undefined) target.fontSize = overrideData.fontSize
  if (overrideData.fontWeight !== undefined)
    target.fontWeight = mapFontWeight(overrideData.fontWeight)
  if (overrideData.letterSpacing !== undefined) target.letterSpacing = overrideData.letterSpacing
  if (overrideData.lineHeight !== undefined) target.lineHeight = overrideData.lineHeight
  if (overrideData.textDecoration !== undefined)
    target.textDecoration = mapTextDecoration(overrideData.textDecoration)
  if (overrideData.textCase !== undefined) target.textCase = mapTextCase(overrideData.textCase)
}

function applyOverrideTransform(
  target: SceneNode,
  overrideData: Partial<PenNode>,
  ctx: VarContext
): void {
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

function applyOverrideLayout(
  target: SceneNode,
  overrideData: Partial<PenNode>,
  ctx: VarContext
): void {
  if (overrideData.layout === undefined) return
  const mode = mapLayoutMode(overrideData as PenNode)
  if (mode === 'NONE') return
  target.layoutMode = mode
  if (overrideData.gap !== undefined) {
    target.itemSpacing = typeof overrideData.gap === 'number' ? overrideData.gap : 0
  }
  if (overrideData.padding !== undefined) applyPadding(target, overrideData.padding, ctx)
}

export function applyOverrideProps(
  target: SceneNode,
  overrideData: Partial<PenNode>,
  ctx: VarContext
): void {
  applyOverrideVisuals(target, overrideData, ctx)
  applyOverrideText(target, overrideData, ctx)
  applyOverrideTransform(target, overrideData, ctx)
  applyOverrideLayout(target, overrideData, ctx)
}

export function populateInstances(graph: SceneGraph): void {
  for (const node of graph.getAllNodes()) {
    if (node.type === 'INSTANCE' && node.componentId && node.childIds.length === 0) {
      const component = graph.getNode(node.componentId)
      if (component) populateInstanceChildren(graph, node.id, node.componentId)
    }
  }
}
