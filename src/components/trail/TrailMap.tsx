"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { BookOpen, Check, GitBranch, Lock, Star } from "lucide-react";
import { useAppStore } from "@/lib/store";
import { TRAIL_EDGE_PAIRS } from "@/lib/trail-map";
import {
  buildTrailLayout,
  getTrailState,
  type TrailNode,
  type NodeStatus,
  type GateView,
} from "@/lib/trail-map";
import { LessonNodeDrawer, GateDrawer } from "./LessonNodeDrawer";

const GOLD_STAR = "#eab308";
const PURPLE_STAR = "#a78bfa";

interface NodeGroup {
  topicId: number;
  anchor: { x: number; y: number; title: string } | null;
  nodes: TrailNode[];
  top: number;
  height: number;
}

/** Bundle nodes into one absolutely-positioned section per topic so
 *  `content-visibility` can skip off-screen clusters (cheap windowing). */
const groupNodesByTopic = (
  nodes: TrailNode[],
  anchors: Array<{ topicId: number; x: number; y: number; title: string }>
): NodeGroup[] => {
  const byTopic = new Map<number, TrailNode[]>();
  for (const node of nodes) {
    if (!byTopic.has(node.topicId)) byTopic.set(node.topicId, []);
    byTopic.get(node.topicId)!.push(node);
  }
  const anchorById = new Map(anchors.map((a) => [a.topicId, a]));
  const topicIds = new Set<number>([...byTopic.keys(), ...anchorById.keys()]);
  return [...topicIds].map((topicId) => {
    const groupNodes = byTopic.get(topicId) ?? [];
    const top = Math.min(...groupNodes.map((n) => n.y), anchorById.get(topicId)?.y ?? Infinity) - 46;
    const bottom = Math.max(...groupNodes.map((n) => n.y + n.h), 0) + 12;
    return {
      topicId,
      anchor: anchorById.get(topicId) ?? null,
      nodes: groupNodes,
      top,
      height: bottom - top,
    };
  });
};

export const TrailMap: React.FC = () => {
  const router = useRouter();
  const completedLessons = useAppStore((s) => s.completedLessons);
  const lessonStars = useAppStore((s) => s.lessonStars);
  const lessonProgress = useAppStore((s) => s.lessonProgress);

  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(640);
  const [selectedNodeId, setSelectedNodeId] = useState<number | null>(null);
  const [selectedGateId, setSelectedGateId] = useState<number | null>(null);
  const autoScrolled = useRef(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width;
      if (w && Math.abs(w - width) > 2) setWidth(w);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [width]);

  const layout = useMemo(() => buildTrailLayout(width), [width]);
  const state = useMemo(
    () => getTrailState(completedLessons, lessonStars, layout.nodes),
    [completedLessons, lessonStars, layout]
  );
  const nodeById = useMemo(() => new Map(layout.nodes.map((n) => [n.id, n])), [layout]);
  const groups = useMemo(() => groupNodesByTopic(layout.nodes, layout.topicAnchors), [layout]);

  // on first load, bring the recommended node into view (skip if already visible)
  useEffect(() => {
    if (autoScrolled.current || !state.recommendedId) return;
    const target = nodeById.get(state.recommendedId);
    if (!target || !wrapRef.current) return;
    autoScrolled.current = true;
    const rect = wrapRef.current.getBoundingClientRect();
    const absTop = rect.top + window.scrollY + target.y;
    const viewTop = window.scrollY;
    const viewBottom = viewTop + window.innerHeight;
    if (absTop < viewTop + 80 || absTop > viewBottom - 160) {
      window.scrollTo({ top: Math.max(0, absTop - window.innerHeight * 0.55) });
    }
  }, [state.recommendedId, nodeById]);

  const recommended = state.recommendedId ? nodeById.get(state.recommendedId) : null;
  const selected = selectedNodeId !== null ? nodeById.get(selectedNodeId) ?? null : null;
  const selectedGate = selectedGateId !== null ? layout.gates.find((g) => g.id === selectedGateId) ?? null : null;

  const lockHint = useMemo(() => {
    if (!selected) return null;
    const neighborIds = TRAIL_EDGE_PAIRS.filter((e) => e.a === selected.id || e.b === selected.id).map((e) =>
      e.a === selected.id ? e.b : e.a
    );
    if (neighborIds.length === 0) return null;
    const parts = neighborIds
      .map((id) => nodeById.get(id))
      .filter((n): n is TrailNode => Boolean(n))
      .map((n) => (n.kind === "core" ? `topic ${n.topicId}` : `“${n.title}”`));
    return `Unlocks when you complete any adjacent lesson: ${parts.join(", ")}.`;
  }, [selected, nodeById]);

  const edgeCenter = useCallback(
    (id: number) => {
      const n = nodeById.get(id);
      return n ? { x: n.x + n.w / 2, y: n.y + n.h / 2 } : { x: 0, y: 0 };
    },
    [nodeById]
  );

  return (
    <div ref={wrapRef} className="relative w-full">
      <div className="relative mx-auto" style={{ width: layout.width, height: layout.height, maxWidth: "100%" }}>
        {/* faint germanic watermark decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden>
          {layout.decorations.map((d, i) => (
            <span
              key={i}
              className="absolute font-bold text-[var(--sub-color)]"
              style={{ left: d.x, top: d.y, fontSize: d.size, opacity: 0.05, transform: `rotate(${d.rotate}deg)` }}
            >
              {d.char}
            </span>
          ))}
        </div>

        {/* dashed connectors (decoration only — the buttons carry semantics) */}
        <svg className="absolute inset-0 pointer-events-none" width={layout.width} height={layout.height} aria-hidden>
          {layout.edges.map(({ a, b }) => {
            const ca = edgeCenter(a);
            const cb = edgeCenter(b);
            const lit = state.litEdges.has(`${Math.min(a, b)}-${Math.max(a, b)}`);
            const na = nodeById.get(a);
            const nb = nodeById.get(b);
            const isSide = na?.kind !== "core" || nb?.kind !== "core";

            if (isSide) {
              // Side sprig/branch: a curved connector bowed off to the side so it
              // clearly reads as a branch hanging off the main spine.
              const mx = (ca.x + cb.x) / 2;
              const my = (ca.y + cb.y) / 2;
              const dx = cb.x - ca.x;
              const dy = cb.y - ca.y;
              const len = Math.hypot(dx, dy) || 1;
              // bow perpendicular to the segment — the branch visibly swings
              // out to the side instead of following a straight diagonal
              const bow = Math.min(70, Math.max(30, len * 0.35));
              const nx = -dy / len;
              const ny = dx / len;
              const cpx = mx + nx * bow;
              const cpy = my + ny * bow;
              return (
                <path
                  key={`${a}-${b}`}
                  d={`M ${ca.x} ${ca.y} Q ${cpx} ${cpy} ${cb.x} ${cb.y}`}
                  fill="none"
                  stroke="var(--sub-color)"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeDasharray="1 8"
                  opacity={lit ? 0.55 : 0.16}
                  style={{ transition: "opacity 400ms" }}
                />
              );
            }

            return (
              <line
                key={`${a}-${b}`}
                x1={ca.x}
                y1={ca.y}
                x2={cb.x}
                y2={cb.y}
                stroke="var(--sub-color)"
                strokeWidth={3.25}
                strokeLinecap="round"
                strokeDasharray="1 9"
                opacity={lit ? 0.85 : 0.3}
                style={{ transition: "opacity 400ms" }}
              />
            );
          })}
        </svg>

        {/* topic signposts + nodes, one section per topic for content-visibility windowing */}
        {groups.map((group) => (
          <section
            key={group.topicId}
            className="trail-section absolute left-0 w-full"
            style={{ top: group.top, height: group.height }}
          >
            {group.anchor && (
              <div
                className="absolute text-center"
                style={{
                  left: Math.max(4, group.anchor.x - 135),
                  width: Math.min(270, layout.width - 8),
                  top: group.anchor.y - group.top,
                }}
              >
                <span className="font-mono text-[11px] leading-tight text-[var(--sub-color)]">
                  <span className="text-[var(--main-color)] font-bold">topic {group.topicId}</span>
                  {" — "}
                  {group.anchor.title}
                </span>
              </div>
            )}
            {group.nodes.map((node) => (
              <MapNode
                key={node.id}
                node={node}
                sectionTop={group.top}
                view={state.nodes.get(node.id)!}
                isRecommended={state.recommendedId === node.id}
                hasProgress={Boolean(lessonProgress[node.id])}
                onClick={() => setSelectedNodeId(node.id)}
              />
            ))}
          </section>
        ))}

        {/* star-gate checkpoint pills on the spine */}
        {layout.gates.map((gate) => {
          const gv: GateView | undefined = state.gates.get(gate.id);
          const open = gv?.open ?? false;
          const stars = gv?.stars ?? 0;
          const shortName = gate.title.replace(/^The /, "");
          return (
            <button
              key={gate.id}
              type="button"
              onClick={() => setSelectedGateId(gate.id)}
              aria-label={`${gate.title} star gate: ${stars} of ${gate.requiredStars} stars in topics ${gv?.fromTopic}–${gv?.toTopic} — ${open ? "open" : "closed"}`}
              title={`${gate.title} — ${stars}/${gate.requiredStars}★`}
              className={`absolute z-10 flex items-center justify-center gap-1.5 rounded-full font-mono text-[10px] transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--main-color)] ${
                open
                  ? "bg-[var(--main-color)] border-2 border-[var(--main-color)] text-[var(--bg-color)] shadow-sm"
                  : "bg-[var(--sub-alt-color)] border border-dashed border-[var(--sub-color)]/50 text-[var(--sub-color)] hover:border-[var(--main-color)]/60"
              }`}
              style={{ left: gate.x, top: gate.y, width: 168, height: 40 }}
            >
              {open ? <Check className="w-3 h-3 shrink-0" /> : <Lock className="w-3 h-3 shrink-0" />}
              <span className="truncate max-w-[86px]">{shortName}</span>
              <span className={open ? "font-bold" : "font-bold text-[var(--text-color)]"}>
                ★ {stars}/{gate.requiredStars}
              </span>
            </button>
          );
        })}

        {/* the selector ring on the recommended node */}
        {recommended && (
          <div
            className="trail-selector absolute pointer-events-none z-10 rounded-2xl border-[2.5px] border-[var(--main-color)]"
            style={{
              width: recommended.w + 16,
              height: recommended.h + 16,
              left: recommended.x - 8,
              top: recommended.y - 8,
              transition: "top 500ms ease, left 500ms ease",
            }}
            aria-hidden
          />
        )}
      </div>

      {selected && (
        <LessonNodeDrawer
          node={selected}
          view={state.nodes.get(selected.id)!}
          hasProgress={Boolean(lessonProgress[selected.id])}
          unlockHint={lockHint}
          onClose={() => setSelectedNodeId(null)}
          onStart={(id) => {
            setSelectedNodeId(null);
            router.push(`/trail/${id}`);
          }}
        />
      )}

      {selectedGate && (
        <GateDrawer
          gate={selectedGate}
          view={state.gates.get(selectedGate.id)!}
          onClose={() => setSelectedGateId(null)}
        />
      )}
    </div>
  );
};

/* -------------------------------------------------------------------------- */

interface MapNodeProps {
  node: TrailNode;
  sectionTop: number;
  view: { status: NodeStatus; star?: "gold" | "purple"; gate?: { id: number; title: string } };
  isRecommended: boolean;
  hasProgress: boolean;
  onClick: () => void;
}

const MapNode: React.FC<MapNodeProps> = ({ node, sectionTop, view, hasProgress, onClick }) => {
  const { status, star } = view;
  const completed = status === "completed";
  const locked = status === "locked";
  const unwritten = locked && !node.authored;

  const label =
    `${node.kind === "core" ? `Topic ${node.topicId}` : node.kind === "sprig" ? "Extra lesson" : "Support branch"}: ${node.title} — ` +
    (completed
      ? `completed${star === "purple" ? " with a purple star" : ""}`
      : locked
      ? unwritten
        ? "locked, content being written"
        : "locked"
      : "available to play");

  const statusStyle = completed
    ? "bg-[var(--main-color)] border-[var(--main-color)] text-[var(--bg-color)] shadow-sm"
    : locked
    ? unwritten
      ? "bg-[var(--bg-color)] border border-dashed border-[var(--sub-color)]/40 text-[var(--sub-color)] cursor-not-allowed"
      : "bg-[var(--bg-color)] border border-dashed border-[var(--sub-color)]/50 text-[var(--sub-color)]"
    : "bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/40 text-[var(--text-color)] hover:border-[var(--main-color)] hover:-translate-y-0.5";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={node.title}
      className={`absolute flex items-center justify-center text-left transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--main-color)] ${statusStyle} ${
        locked ? "cursor-default" : "cursor-pointer"
      }`}
      style={{
        left: node.x,
        top: node.y - sectionTop,
        width: node.w,
        height: node.h,
        borderRadius: node.kind === "core" ? 14 : 12,
        borderWidth: completed ? 2 : 1,
        animation: status === "available" && !hasProgress ? "trail-node-pop 400ms ease both" : undefined,
      }}
    >
      {node.kind === "core" && (
        <span className="flex items-center gap-2 px-2.5 w-full">
          <span
            className={`w-6 h-6 rounded-md flex items-center justify-center font-mono text-[11px] font-bold shrink-0 ${
              completed
                ? "bg-[var(--bg-color)]/25 text-[var(--bg-color)]"
                : "bg-[var(--bg-color)] text-[var(--text-color)] border border-[var(--sub-color)]/30"
            }`}
          >
            {completed ? "✓" : node.topicId}
          </span>
          <span className="text-[11px] font-semibold leading-tight line-clamp-2">{node.title}</span>
        </span>
      )}

      {node.kind === "sprig" && (
        <span className="flex flex-col items-center gap-0.5">
          <BookOpen className="w-3.5 h-3.5" />
          <span className="font-mono text-[10px] font-bold">{node.id % 100}</span>
        </span>
      )}

      {node.kind === "branch" && (
        <span className="flex items-center gap-1.5 px-2 w-full min-w-0">
          <GitBranch className="w-3 h-3 shrink-0 opacity-70" />
          <span className="text-[10px] font-semibold leading-tight line-clamp-2">{node.title}</span>
        </span>
      )}

      {completed && (
        <span
          className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center border-2"
          style={{ background: star === "purple" ? PURPLE_STAR : GOLD_STAR, borderColor: "var(--bg-color)" }}
          aria-hidden
        >
          <Star className="w-2.5 h-2.5 text-[var(--bg-color)]" fill="var(--bg-color)" strokeWidth={0} />
        </span>
      )}

      {locked && (
        <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[var(--bg-color)] border border-[var(--sub-color)]/40 flex items-center justify-center">
          <Lock className="w-2.5 h-2.5 text-[var(--sub-color)]" />
        </span>
      )}
    </button>
  );
};
