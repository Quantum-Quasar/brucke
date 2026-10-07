"use client";

import React from "react";
import { useAppStore } from "@/lib/store";
import { getLanguageContent, EMPTY_COMPENDIUM } from "@/data/language-content";
import { buildMasterGraph } from "@/lib/master-graph";

const STROKE: Record<string, string> = {
  word: "var(--main-color)",
  phrase: "#b48ead",
  compound: "#d08770",
  falsefriend: "#bf616a",
  insight: "#88c0d0",
};

export const MasterConstellation: React.FC = () => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  const activeLanguageId = useAppStore((s) => s.activeLanguageId);
  const data = getLanguageContent(activeLanguageId).compendium ?? EMPTY_COMPENDIUM;
  const wordMastery = useAppStore((s) => s.wordMastery);
  const openWordDrawer = useAppStore((s) => s.openWordDrawer);

  const graph = React.useMemo(() => buildMasterGraph(data), [activeLanguageId, data]);
  const mastery = mounted ? wordMastery : {};

  if (!data.wordList.length) {
    return (
      <p className="text-xs font-mono text-[var(--sub-color)] p-8 text-center">
        The master web arrives with the {activeLanguageId} trail.
      </p>
    );
  }

  const counts = { word: 0, phrase: 0, compound: 0, falsefriend: 0, insight: 0 };
  for (const n of graph.nodes) counts[n.kind]++;

  return (
    <div className="space-y-3 font-sans">
      <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-[var(--sub-color)]">
        <span className="text-[var(--main-color)] font-bold">{counts.word} words</span>·
        <span style={{ color: STROKE.phrase }}>{counts.phrase} phrases</span>·
        <span style={{ color: STROKE.compound }}>{counts.compound} compounds</span>·
        <span style={{ color: STROKE.falsefriend }}>{counts.falsefriend} false friends</span>·
        <span style={{ color: STROKE.insight }}>{counts.insight} expressions</span>·
        <span>{graph.edges.length} links</span>
        <span className="ml-auto">scroll to explore · click a word to open it</span>
      </div>

      <div className="w-full h-[70vh] overflow-auto rounded-lg border border-[var(--sub-color)]/20 bg-[var(--sub-alt-color)]">
        <svg width={2600} height={2000} className="block">
          {graph.edges.map((e, i) => (
            <line
              key={i}
              x1={graph.nodes[e.a].x}
              y1={graph.nodes[e.a].y}
              x2={graph.nodes[e.b].x}
              y2={graph.nodes[e.b].y}
              stroke="var(--sub-color)"
              strokeOpacity={0.18}
              strokeWidth={1}
            />
          ))}
          {graph.nodes.map((n) => {
            if (n.kind === "word") {
              const m = mastery[n.wordId ?? ""];
              return (
                <circle
                  key={n.id}
                  cx={n.x}
                  cy={n.y}
                  r={m === "mastered" ? 6 : m ? 5 : 4}
                  fill={m === "mastered" ? "var(--main-color)" : m === "encountered" ? "var(--text-color)" : "var(--bg-color)"}
                  stroke="var(--main-color)"
                  strokeOpacity={0.6}
                  strokeWidth={1.25}
                  className="cursor-pointer hover:stroke-[var(--text-color)]"
                  onClick={() => n.wordId && openWordDrawer(n.wordId)}
                >
                  <title>{n.label} — {n.sub}</title>
                </circle>
              );
            }
            const color = STROKE[n.kind];
            return (
              <g key={n.id} className="cursor-default">
                <rect
                  x={n.x - 6}
                  y={n.y - 6}
                  width={12}
                  height={12}
                  rx={3}
                  fill={color}
                  fillOpacity={0.25}
                  stroke={color}
                  strokeWidth={1.25}
                />
                <text x={n.x + 10} y={n.y + 4} fontSize={10} fill={color} fontFamily="monospace">
                  {n.label}
                </text>
                <title>{n.label} — {n.sub}</title>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};
