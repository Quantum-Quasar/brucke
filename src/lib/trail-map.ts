import { TOPICS, TRAIL_BRANCHES, TRAIL_GATES, TOTAL_TOPICS } from "@/data/curriculum";
import type { LessonStar, TrailGate } from "./types";

// ---------------------------------------------------------------------------
// Baba-style trail map engine — pure, deterministic, testable.
//
// Graph rules:
//   · a node is unlocked when ANY adjacent node is completed (Baba OR-join),
//     except the first node, which is always unlocked
//   · the spine core(n)—core(n+1) is the only required sequence; sprigs and
//     branches hang off cores, so every side lesson can be skipped
//
// Layout rules (bottom → top, like the Baba maps):
//   · nodes are authored top-down, then the whole map is flipped so topic 1
//     sits at the bottom and later topics climb upward
//   · a gentle serpentine swings the spine sideways on wide canvases
//   · sprigs fan out beside their core (left, right, then second row)
//   · branches chain horizontally on the freer side, falling back to below
// ---------------------------------------------------------------------------

export type NodeKind = "core" | "sprig" | "branch";
export type NodeStatus = "completed" | "available" | "locked";

export interface TrailNode {
  id: number;
  kind: NodeKind;
  topicId: number;
  title: string;
  blurb?: string;
  plan: string;
  authored: boolean;
  /** top-left corner in final (flipped) map space */
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface TrailEdge {
  a: number;
  b: number;
}

export interface Decoration {
  x: number;
  y: number;
  char: string;
  size: number;
  rotate: number;
}

export interface TopicAnchor {
  topicId: number;
  x: number;
  y: number;
  title: string;
  blurb: string;
}

/** A star gate rendered as a checkpoint pill on the spine between two topic clusters. */
export interface GateMarker extends TrailGate {
  x: number;
  y: number;
}

export interface TrailLayout {
  width: number;
  height: number;
  nodes: TrailNode[];
  edges: TrailEdge[];
  decorations: Decoration[];
  topicAnchors: TopicAnchor[];
  gates: GateMarker[];
}

export const FIRST_NODE_ID = 1;

const CORE_W = 152;
const CORE_H = 58;
const SPRIG_W = 56;
const SPRIG_H = 46;
const BRANCH_W = 150;
const BRANCH_H = 44;
const GATE_W = 168;
const GATE_H = 40;
const LABEL_H = 40;
const TOPIC_GAP = 78;
const SIDE_GAP = 16;
const EDGE_PAD = 10;
const TOP_PAD = 90;
const BOTTOM_PAD = 110;

export const nodeSize = (kind: NodeKind) =>
  kind === "core" ? { w: CORE_W, h: CORE_H } : kind === "sprig" ? { w: SPRIG_W, h: SPRIG_H } : { w: BRANCH_W, h: BRANCH_H };

const clampX = (x: number, w: number, width: number) => Math.min(Math.max(x, EDGE_PAD), width - EDGE_PAD - w);

/** Unique undirected edge pairs of the trail graph (id-space only, layout-free). */
export function buildTrailEdgePairs(): TrailEdge[] {
  const edges: TrailEdge[] = [];
  for (let t = 1; t < TOTAL_TOPICS; t++) edges.push({ a: t, b: t + 1 });
  for (const topic of TOPICS) {
    for (const sprig of topic.sprigs) edges.push({ a: topic.core.id, b: sprig.id });
  }
  for (const branch of TRAIL_BRANCHES) {
    let prev = branch.attach;
    for (const lesson of branch.lessons) {
      edges.push({ a: prev, b: lesson.id });
      prev = lesson.id;
    }
  }
  return edges;
}

export const TRAIL_EDGE_PAIRS = buildTrailEdgePairs();

const adjacency = () => {
  const map = new Map<number, number[]>();
  for (const { a, b } of TRAIL_EDGE_PAIRS) {
    if (!map.has(a)) map.set(a, []);
    if (!map.has(b)) map.set(b, []);
    map.get(a)!.push(b);
    map.get(b)!.push(a);
  }
  return map;
};

const ADJACENCY = adjacency();

/**
 * Full layout for a given canvas width. Deterministic — same width, same map.
 */
export function buildTrailLayout(width: number): TrailLayout {
  const w = Math.min(Math.max(Math.round(width), 320), 980);
  const centerX = w / 2;
  const swing = Math.min(150, Math.max(0, (w - 380) / 2));
  const nodes: TrailNode[] = [];
  const anchors: TopicAnchor[] = [];

  let cursor = TOP_PAD;

  for (const topic of TOPICS) {
    const clusterTop = cursor;
    const coreX = clampX(centerX + swing * Math.sin(topic.id * 1.7), CORE_W, w);
    const coreY = clusterTop + LABEL_H;

    // ideal positions relative to the core, then the whole cluster is group-clamped
    // into the canvas so the serpentine can never push a sprig off-screen or on top
    // of its core (offsets are edge-to-edge, not center-to-center)
    const cluster: TrailNode[] = [];
    cluster.push({
      id: topic.core.id,
      kind: "core",
      topicId: topic.id,
      title: topic.title,
      blurb: topic.blurb,
      plan: topic.core.plan,
      authored: Boolean(topic.core.authored),
      x: coreX,
      y: coreY,
      w: CORE_W,
      h: CORE_H,
    });

    topic.sprigs.forEach((sprig, j) => {
      const side = j % 2 === 0 ? -1 : 1;
      const row = Math.floor(j / 2);
      // sprigs sit symmetrically around the core center: 16px gaps on both flanks,
      // extra rows stacked directly below their row-0 sibling
      cluster.push({
        id: sprig.id,
        kind: "sprig",
        topicId: topic.id,
        title: sprig.title,
        plan: sprig.plan,
        authored: Boolean(sprig.authored),
        x: coreX + (side === 1 ? CORE_W + SIDE_GAP : -(SPRIG_W + SIDE_GAP)),
        y: coreY + (CORE_H - SPRIG_H) / 2 + row * (SPRIG_H + 12),
        w: SPRIG_W,
        h: SPRIG_H,
      });
    });

    // single-pass group clamp: push the cluster fully into the canvas when it fits
    // (span 296 ≤ usable width for every supported canvas), pinning left otherwise
    let left = Math.min(...cluster.map((n) => n.x));
    let right = Math.max(...cluster.map((n) => n.x + n.w));
    const span = right - left;
    const usable = w - 2 * EDGE_PAD;
    let shift = 0;
    if (right > w - EDGE_PAD) shift = w - EDGE_PAD - right;
    if (left + shift < EDGE_PAD) shift = EDGE_PAD - left;
    if (shift !== 0) for (const n of cluster) n.x += shift;

    nodes.push(...cluster);
    const shiftedCore = cluster[0];
    anchors.push({
      topicId: topic.id,
      x: shiftedCore.x,
      y: clusterTop + 4,
      title: topic.title,
      blurb: topic.blurb,
    });

    let clusterBottom = Math.max(...cluster.map((n) => n.y + n.h));

    for (const branch of TRAIL_BRANCHES) {
      if (branch.attach !== topic.core.id) continue;
      // branches tuck into a side pocket below the cluster (sprigs own the flanks)
      const sprigSides = topic.sprigs.map((_, j) => (j % 2 === 0 ? -1 : 1));
      const side = sprigSides.filter((s) => s === 1).length <= sprigSides.filter((s) => s === -1).length ? 1 : -1;
      let bx = clampX(shiftedCore.x + side * 12, BRANCH_W, w);
      let by = clusterBottom + 20;
      branch.lessons.forEach((lesson, i) => {
        if (i > 0) {
          const nextX = bx + side * (BRANCH_W + 24);
          if (nextX < EDGE_PAD || nextX + BRANCH_W > w - EDGE_PAD) {
            bx = clampX(shiftedCore.x + side * 12, BRANCH_W, w);
            by += BRANCH_H + 14;
          } else {
            bx = nextX;
          }
        }
        nodes.push({
          id: lesson.id,
          kind: "branch",
          topicId: topic.id,
          title: lesson.title,
          plan: lesson.plan,
          authored: Boolean(lesson.authored),
          x: bx,
          y: by,
          w: BRANCH_W,
          h: BRANCH_H,
        });
        clusterBottom = Math.max(clusterBottom, by + BRANCH_H);
      });
    }

    cursor = clusterBottom + TOPIC_GAP;
  }

  const height = cursor - TOPIC_GAP + BOTTOM_PAD;

  // flip: topic 1 ends up at the bottom, the trail climbs upward
  for (const node of nodes) node.y = height - node.y - node.h;
  for (const anchor of anchors) anchor.y = height - anchor.y - 34;

  const decorations = buildDecorations(w, height);

  // gate checkpoint pills sit on the spine line between the gated pair of cores
  const nodeById = new Map(nodes.map((n) => [n.id, n]));
  const gates: GateMarker[] = [];
  for (const gate of TRAIL_GATES) {
    const a = nodeById.get(gate.afterTopic);
    const b = nodeById.get(gate.afterTopic + 1);
    if (!a || !b) continue;
    const midX = (a.x + a.w / 2 + b.x + b.w / 2) / 2 - GATE_W / 2;
    const midY = (a.y + a.h / 2 + b.y + b.h / 2) / 2 - GATE_H / 2;
    gates.push({ ...gate, x: clampX(midX, GATE_W, w), y: Math.min(Math.max(midY, EDGE_PAD), height - EDGE_PAD - GATE_H) });
  }

  return { width: w, height, nodes, edges: TRAIL_EDGE_PAIRS, decorations, topicAnchors: anchors, gates };
}

const DECO_CHARS = ["ß", "ü", "ö", "ä", "ß", "§"];

function buildDecorations(width: number, height: number): Decoration[] {
  const count = Math.floor(height / 150);
  const out: Decoration[] = [];
  let seed = 42;
  const rand = () => {
    seed = (seed * 1103515245 + 12345) % 2147483648;
    return seed / 2147483648;
  };
  for (let i = 0; i < count; i++) {
    out.push({
      x: 24 + rand() * (width - 48),
      y: rand() * height,
      char: DECO_CHARS[i % DECO_CHARS.length],
      size: 34 + Math.floor(rand() * 80),
      rotate: Math.round(rand() * 50 - 25),
    });
  }
  return out;
}

// ---------------------------------------------------------------------------
// State computation
// ---------------------------------------------------------------------------

/** Gate info attached to nodes sitting beyond a closed gate (the gate is closed by definition). */
export interface NodeGateInfo {
  id: number;
  title: string;
  why: string;
  requiredStars: number;
  stars: number;
  fromTopic: number;
  toTopic: number;
}

export interface NodeView {
  status: NodeStatus;
  star?: LessonStar;
  /** set when the node sits beyond a closed star gate */
  gate?: NodeGateInfo;
}

export interface GateView {
  open: boolean;
  stars: number;
  fromTopic: number;
  toTopic: number;
}

export interface TrailState {
  nodes: Map<number, NodeView>;
  /** edge is lit when it touches completed territory or opens available ground */
  litEdges: Set<string>;
  recommendedId: number | null;
  gates: Map<number, GateView>;
}

const edgeKey = (a: number, b: number) => `${Math.min(a, b)}-${Math.max(a, b)}`;

/** topic range each gate closes: (previous gate's afterTopic, gate.afterTopic] */
const gateRegion = (index: number): { fromTopic: number; toTopic: number } => ({
  fromTopic: index === 0 ? 1 : TRAIL_GATES[index - 1].afterTopic + 1,
  toTopic: TRAIL_GATES[index].afterTopic,
});

export function getTrailState(
  completed: number[],
  stars: Record<number, LessonStar>,
  nodes?: Array<Pick<TrailNode, "id" | "kind" | "topicId">>
): TrailState {
  const completedSet = new Set(completed);
  const view = new Map<number, NodeView>();
  const fallback: Array<Pick<TrailNode, "id" | "kind" | "topicId">> = [
    ...TOPICS.flatMap((t) => [
      { id: t.core.id, kind: "core" as const, topicId: t.id },
      ...t.sprigs.map((s) => ({ id: s.id, kind: "sprig" as const, topicId: t.id })),
    ]),
    ...TRAIL_BRANCHES.flatMap((b) => b.lessons.map((l) => ({ id: l.id, kind: "branch" as const, topicId: b.attach }))),
  ];
  const allNodes = nodes ?? fallback;

  // star gates: stars earned inside each gate's stretch decide whether it is open
  const topicById = new Map(allNodes.map((n) => [n.id, n.topicId]));
  const gateViews = new Map<number, GateView>();
  TRAIL_GATES.forEach((gate, i) => {
    const { fromTopic, toTopic } = gateRegion(i);
    const regionStars = completed.filter((id) => {
      const t = topicById.get(id);
      return t !== undefined && t >= fromTopic && t <= toTopic;
    }).length;
    gateViews.set(gate.id, { open: regionStars >= gate.requiredStars, stars: regionStars, fromTopic, toTopic });
  });
  // the first closed gate at or before a node's topic blocks it (the spine is strict,
  // so a closed gate locks everything beyond it)
  const closedGateBefore = (topicId: number) => {
    for (let i = TRAIL_GATES.length - 1; i >= 0; i--) {
      if (TRAIL_GATES[i].afterTopic < topicId && !gateViews.get(TRAIL_GATES[i].id)!.open) {
        const { fromTopic, toTopic } = gateRegion(i);
        return { gate: TRAIL_GATES[i], stars: gateViews.get(TRAIL_GATES[i].id)!.stars, fromTopic, toTopic };
      }
    }
    return null;
  };

  for (const node of allNodes) {
    const blocked = closedGateBefore(node.topicId);
    const status: NodeStatus = completedSet.has(node.id)
      ? "completed"
      : blocked
      ? "locked"
      : node.id === FIRST_NODE_ID || (ADJACENCY.get(node.id) ?? []).some((n) => completedSet.has(n))
      ? "available"
      : "locked";
    view.set(node.id, {
      status,
      star: stars[node.id],
      gate: blocked
        ? {
            id: blocked.gate.id,
            title: blocked.gate.title,
            why: blocked.gate.why,
            requiredStars: blocked.gate.requiredStars,
            stars: blocked.stars,
            fromTopic: blocked.fromTopic,
            toTopic: blocked.toTopic,
          }
        : undefined,
    });
  }

  const litEdges = new Set<string>();
  for (const { a, b } of TRAIL_EDGE_PAIRS) {
    const sa = view.get(a)?.status ?? "locked";
    const sb = view.get(b)?.status ?? "locked";
    const crossesClosedGate = TRAIL_GATES.some(
      (g) => !gateViews.get(g.id)!.open && ((a === g.afterTopic && b === g.afterTopic + 1) || (b === g.afterTopic && a === g.afterTopic + 1))
    );
    if (crossesClosedGate) continue;
    if (sa === "completed" || sb === "completed" || (sa === "available" && sb === "available")) {
      litEdges.add(edgeKey(a, b));
    }
  }

  // recommendation: the next authored spine core keeps the learner on the main line;
  // once the authored spine is done, point at the hollow frontier (nearest the top),
  // then mop up leftover sprigs/branches nearest the progress front
  const isAvailable = (id: number) => view.get(id)?.status === "available";
  let recommendedId: number | null = null;
  for (const topic of TOPICS) {
    if (topic.core.authored && isAvailable(topic.core.id)) {
      recommendedId = topic.core.id;
      break;
    }
  }
  if (recommendedId === null) {
    outer: for (const topic of [...TOPICS].reverse()) {
      if (isAvailable(topic.core.id)) {
        recommendedId = topic.core.id;
        break;
      }
      for (const sprig of [...topic.sprigs].reverse()) {
        if (isAvailable(sprig.id)) {
          recommendedId = sprig.id;
          break outer;
        }
      }
    }
  }
  if (recommendedId === null) {
    for (const branch of [...TRAIL_BRANCHES].reverse()) {
      for (const lesson of [...branch.lessons].reverse()) {
        if (isAvailable(lesson.id)) {
          recommendedId = lesson.id;
          break;
        }
      }
      if (recommendedId !== null) break;
    }
  }

  return { nodes: view, litEdges, recommendedId, gates: gateViews };
}

/** Order used for the recommendation fallback and list views: topic cores, sprigs, then branches. */
export const trailNodeOrder = (): number[] => [
  ...TOPICS.flatMap((t) => [t.core.id, ...t.sprigs.map((s) => s.id)]),
  ...TRAIL_BRANCHES.flatMap((b) => b.lessons.map((l) => l.id)),
];
