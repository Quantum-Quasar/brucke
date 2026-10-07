"use client";

import React from "react";
import { ShiftPair } from "@/components/common/ShiftPair";
import { useAppStore } from "@/lib/store";
import { getLanguageContent, EMPTY_COMPENDIUM } from "@/data/language-content";
import { hashSeed, mulberry32 } from "@/lib/prng";
import type { ShiftFamily } from "@/lib/types";

interface ConstellationWebProps {
  family: ShiftFamily;
  onPracticeBranch: () => void;
}

interface WebNode {
  x: number;
  y: number;
}

interface WebEdge {
  a: number;
  b: number;
}

const WIDTH = 640;
const HEIGHT = 460;
const VISIBLE_CAP = 20;

/**
 * Seeded, irregular "actual web" layout: nodes are scattered on a jittered
 * grid (no single central hub), edges form a random spanning tree so every
 * node is reachable, plus extra cross-links that create chains, loops and
 * clusters — one node linking to two, two linking to three, etc.
 */
function buildWeb(
  familyId: string,
  words: { id: string }[],
): { nodes: WebNode[]; edges: WebEdge[] } {
  const ids = words.map((w) => w.id).slice(0, VISIBLE_CAP);
  const n = ids.length;
  if (n === 0) return { nodes: [], edges: [] };

  const rng = mulberry32(hashSeed(familyId + ":" + ids.join(",")));

  // Jittered-grid node positions (random web, but deterministic per family)
  const cols = Math.max(2, Math.ceil(Math.sqrt(n * (WIDTH / HEIGHT))));
  const rows = Math.max(2, Math.ceil(n / cols));
  const cellW = WIDTH / cols;
  const cellH = HEIGHT / rows;
  const nodes: WebNode[] = ids.map((id, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const jx = (rng() - 0.5) * cellW * 0.7;
    const jy = (rng() - 0.5) * cellH * 0.7;
    return {
      x: Math.min(WIDTH - 70, Math.max(70, (col + 0.5) * cellW + jx)),
      y: Math.min(HEIGHT - 40, Math.max(40, (row + 0.5) * cellH + jy)),
    };
  });

  // Shuffle index order for tree construction so links cross the canvas
  const order = nodes.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }

  const edges: WebEdge[] = [];
  const edgeSet = new Set<string>();
  const addEdge = (a: number, b: number) => {
    if (a === b) return;
    const key = a < b ? `${a}-${b}` : `${b}-${a}`;
    if (edgeSet.has(key)) return;
    edgeSet.add(key);
    edges.push({ a: Math.min(a, b), b: Math.max(a, b) });
  };

  // Random spanning tree: every node links to an earlier node in shuffled order
  for (let i = 1; i < n; i++) {
    addEdge(order[i], order[Math.floor(rng() * i)]);
  }
  // Extra links: some nodes get 2+ connections, most get 1 more — creates
  // chains, clusters and occasional loops rather than a hub-and-spoke star
  for (let i = 0; i < n; i++) {
    const links = rng() < 0.55 ? 1 : rng() < 0.7 ? 2 : 0;
    for (let k = 0; k < links; k++) {
      addEdge(i, Math.floor(rng() * n));
    }
  }
  // Close a couple of loops on purpose
  const loops = Math.min(3, Math.floor(n / 5));
  for (let l = 0; l < loops; l++) {
    const a = Math.floor(rng() * n);
    addEdge(a, Math.floor(rng() * n));
  }

  return { nodes, edges };
}

export const ConstellationWeb: React.FC<ConstellationWebProps> = ({
  family,
  onPracticeBranch,
}) => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  const activeLanguageId = useAppStore((s) => s.activeLanguageId);
  const data = getLanguageContent(activeLanguageId).compendium ?? EMPTY_COMPENDIUM;
  const persistedMastery = useAppStore((s) => s.wordMastery);
  const openWordDrawer = useAppStore((s) => s.openWordDrawer);
  // keep mastery-derived classes/counts at defaults on the hydrating render so SSG
  // output and the first client render agree (avoids hydration mismatch)
  const wordMastery = mounted ? persistedMastery : {};

  const words = React.useMemo(
    () => family.word_ids.map((id) => data.words[id]).filter(Boolean),
    [data, family],
  );

  // Stats calculation
  const masteredCount = words.filter((w) => wordMastery[w.id] === "mastered").length;
  const encounteredCount = words.filter((w) => wordMastery[w.id] === "encountered").length;
  const exploredCount = words.filter((w) => wordMastery[w.id] === "explored").length;
  const unexploredCount = words.length - (masteredCount + encounteredCount + exploredCount);

  const web = React.useMemo(() => buildWeb(family.id, words), [family.id, words]);
  const visibleWords = words.slice(0, VISIBLE_CAP);

  return (
    <div className="space-y-4 font-sans">
      {/* Desktop Web Canvas */}
      <div className="hidden md:block relative w-full h-[460px] bg-[var(--sub-alt-color)] rounded-lg border border-[var(--sub-color)]/20 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox={`0 0 ${WIDTH} ${HEIGHT}`}>
          {web.edges.map((e, i) => (
            <line
              key={i}
              x1={web.nodes[e.a].x}
              y1={web.nodes[e.a].y}
              x2={web.nodes[e.b].x}
              y2={web.nodes[e.b].y}
              stroke="var(--sub-color)"
              strokeOpacity="0.3"
              strokeWidth="1.25"
            />
          ))}
        </svg>

        {/* Family chip in the corner instead of a central hub */}
        <div className="absolute top-2.5 left-2.5 z-10 px-2 py-1 rounded bg-[var(--bg-color)] border border-[var(--main-color)] flex items-center gap-2 shadow-sm">
          <span className="text-xs font-bold text-[var(--main-color)] font-mono">{family.symbol}</span>
          <span className="text-[10px] text-[var(--sub-color)] font-mono">{words.length} roots</span>
          {words.length > VISIBLE_CAP && (
            <span className="text-[9px] text-[var(--main-color)] font-mono">
              showing {VISIBLE_CAP} · +{words.length - VISIBLE_CAP} in the roster below
            </span>
          )}
        </div>

        {/* Word nodes, centered exactly where their edges meet them */}
        {web.nodes.map((node, i) => {
          const w = visibleWords[i];
          if (!w) return null;
          const m = wordMastery[w.id] || "unexplored";
          let badgeBorder = "border-[var(--sub-color)]/30 bg-[var(--bg-color)] text-[var(--text-color)]";
          if (m === "mastered") badgeBorder = "border-[var(--main-color)] bg-[var(--bg-color)] text-[var(--main-color)] font-bold";
          else if (m === "encountered") badgeBorder = "border-[var(--text-color)]/60 bg-[var(--bg-color)] text-[var(--text-color)]";

          return (
            <button
              key={w.id}
              type="button"
              onClick={() => openWordDrawer(w.id)}
              style={{ left: node.x, top: node.y, transform: "translate(-50%, -50%)" }}
              className={`absolute z-20 px-2.5 py-1 rounded border text-xs font-mono transition cursor-pointer hover:border-[var(--main-color)] ${badgeBorder}`}
            >
              <span className="text-[var(--sub-color)]">{w.english_cognate}</span>
              <span className="mx-1 text-[var(--sub-color)]">→</span>
              <span className="text-[var(--text-color)] font-medium">{w.target_word}</span>
            </button>
          );
        })}
      </div>

      {/* Mobile Expandable Vertical Tree */}
      <div className="md:hidden space-y-2.5">
        <div className="p-3.5 rounded bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 text-center space-y-0.5">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--sub-color)]">Shift Family</span>
          <h2 className="text-base font-bold text-[var(--main-color)] font-mono">{family.name}</h2>
          <p className="text-xs text-[var(--sub-color)]">{family.phonetic_rule}</p>
        </div>

        <div className="space-y-1.5">
          {words.slice(0, 40).map((w) => (
            <div key={w.id} className="p-2.5 rounded bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 flex items-center justify-between">
              <ShiftPair
                english={w.english_cognate}
                german={w.target_word}
                gender={w.gender}
                rule={w.shift_rule}
                wordId={w.id}
              />
            </div>
          ))}
          {words.length > 40 && (
            <p className="text-[11px] font-mono text-[var(--sub-color)]">
              +{words.length - 40} more in the roster below.
            </p>
          )}
        </div>
      </div>

      {/* Status Bar & Sandbox Practice Trigger */}
      <div className="p-3.5 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
        {/* Status Counters */}
        <div className="flex flex-wrap items-center gap-3 text-[var(--sub-color)]">
          <span className="text-[var(--main-color)] font-bold">{masteredCount} mastered</span>
          <span>·</span>
          <span>{encounteredCount} in course</span>
          <span>·</span>
          <span>{exploredCount} explored</span>
          <span>·</span>
          <span>{unexploredCount} unseen</span>
        </div>

        {/* Practice Branch Button */}
        <button
          type="button"
          onClick={onPracticeBranch}
          className="w-full sm:w-auto px-4 py-1.5 rounded bg-[var(--main-color)] text-[var(--bg-color)] font-bold text-xs font-mono transition cursor-pointer hover:opacity-90"
        >
          practice this branch (5 questions) →
        </button>
      </div>
    </div>
  );
};
