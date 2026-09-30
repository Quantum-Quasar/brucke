"use client";

import React from "react";
import { ShiftPair } from "@/components/common/ShiftPair";
import { useAppStore } from "@/lib/store";
import { compendium as data } from "@/data/compendium";
import type { ShiftFamily } from "@/lib/types";

interface RadialConstellationProps {
  family: ShiftFamily;
  onPracticeBranch: () => void;
}

export const RadialConstellation: React.FC<RadialConstellationProps> = ({
  family,
  onPracticeBranch,
}) => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  const persistedMastery = useAppStore((s) => s.wordMastery);
  const openWordDrawer = useAppStore((s) => s.openWordDrawer);
  // keep mastery-derived classes/counts at defaults on the hydrating render so SSG
  // output and the first client render agree (avoids hydration mismatch)
  const wordMastery = mounted ? persistedMastery : {};

  const words = family.word_ids
    .map((id) => data.words[id])
    .filter(Boolean);

  // Stats calculation
  const masteredCount = words.filter((w) => wordMastery[w.id] === "mastered").length;
  const encounteredCount = words.filter((w) => wordMastery[w.id] === "encountered").length;
  const exploredCount = words.filter((w) => wordMastery[w.id] === "explored").length;
  const unexploredCount = words.length - (masteredCount + encounteredCount + exploredCount);

  // Deterministic radial layout geometry
  const width = 640;
  const height = 440;
  const centerX = width / 2;
  const centerY = height / 2;
  const radiusX = 220;
  const radiusY = 150;

  return (
    <div className="space-y-4 font-sans">
      {/* Desktop Radial Canvas */}
      <div className="hidden md:block relative w-full h-[440px] bg-[var(--sub-alt-color)] rounded-lg border border-[var(--sub-color)]/20 overflow-hidden">
        {/* SVG connecting spoke lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox={`0 0 ${width} ${height}`}>
          {words.slice(0, 10).map((w, i) => {
            const angle = (i / Math.min(words.length, 10)) * 2 * Math.PI - Math.PI / 2;
            const x = centerX + radiusX * Math.cos(angle);
            const y = centerY + radiusY * Math.sin(angle);
            return (
              <line
                key={w.id}
                x1={centerX}
                y1={centerY}
                x2={x}
                y2={y}
                stroke="var(--sub-color)"
                strokeOpacity="0.25"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
            );
          })}
        </svg>

        {/* Central Hub */}
        <div
          style={{ left: centerX - 60, top: centerY - 40 }}
          className="absolute z-10 w-[120px] h-[80px] rounded bg-[var(--bg-color)] border border-[var(--main-color)] flex flex-col items-center justify-center p-2 text-center shadow-sm"
        >
          <span className="text-[10px] font-mono text-[var(--sub-color)] uppercase tracking-wider">Sound Shift</span>
          <span className="text-base font-bold text-[var(--main-color)] font-mono tracking-tight">{family.symbol}</span>
          <span className="text-[10px] text-[var(--sub-color)] font-mono leading-none mt-0.5">{words.length} roots</span>
          {words.length > 10 && (
            <span className="text-[9px] text-[var(--main-color)] font-mono mt-0.5">
              +{words.length - 10} more below
            </span>
          )}
        </div>

        {/* Radiated Word Nodes */}
        {words.slice(0, 10).map((w, i) => {
          const angle = (i / Math.min(words.length, 10)) * 2 * Math.PI - Math.PI / 2;
          const x = centerX + radiusX * Math.cos(angle) - 55;
          const y = centerY + radiusY * Math.sin(angle) - 16;

          const m = wordMastery[w.id] || "unexplored";
          let badgeBorder = "border-[var(--sub-color)]/30 bg-[var(--bg-color)] text-[var(--text-color)]";
          if (m === "mastered") badgeBorder = "border-[var(--main-color)] bg-[var(--bg-color)] text-[var(--main-color)] font-bold";
          else if (m === "encountered") badgeBorder = "border-[var(--text-color)]/60 bg-[var(--bg-color)] text-[var(--text-color)]";

          return (
            <button
              key={w.id}
              type="button"
              onClick={() => openWordDrawer(w.id)}
              style={{ left: x, top: y }}
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
          {words.map((w) => (
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
