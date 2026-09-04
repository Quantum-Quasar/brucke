"use client";

// ponytail: deterministic radial spoke layout with svg lines and responsive tree fallback

import React from "react";
import { ShiftPair } from "@/components/common/ShiftPair";
import { useAppStore } from "@/lib/store";
import compendium from "@/data/compendium.json";
import type { CompendiumData, ShiftFamily } from "@/lib/types";

const data = compendium as unknown as CompendiumData;

interface RadialConstellationProps {
  family: ShiftFamily;
  onPracticeBranch: () => void;
}

export const RadialConstellation: React.FC<RadialConstellationProps> = ({
  family,
  onPracticeBranch,
}) => {
  const wordMastery = useAppStore((s) => s.wordMastery);
  const openWordDrawer = useAppStore((s) => s.openWordDrawer);

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
  const height = 480;
  const centerX = width / 2;
  const centerY = height / 2;
  const radiusX = 220;
  const radiusY = 160;

  return (
    <div className="space-y-6">
      {/* Desktop Radial Canvas */}
      <div className="hidden md:block relative w-full h-[480px] bg-[#161722] rounded-2xl border border-white/10 overflow-hidden bg-notebook-grid shadow-inner">
        {/* SVG connecting spoke lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox={`0 0 ${width} ${height}`}>
          <defs>
            <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3de0d2" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#3de0d2" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Central ambient glow */}
          <circle cx={centerX} cy={centerY} r={80} fill="url(#hubGlow)" />

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
                stroke="#2e3046"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            );
          })}
        </svg>

        {/* Central Hub */}
        <div
          style={{ left: centerX - 65, top: centerY - 45 }}
          className="absolute z-10 w-[130px] h-[90px] rounded-2xl bg-[#1C1D2B] border-2 border-cyan-400/80 shadow-lg shadow-cyan-500/10 flex flex-col items-center justify-center p-2 text-center"
        >
          <span className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-wider">Shift Hub</span>
          <span className="text-lg font-black text-amber-400 font-mono tracking-tight">{family.symbol}</span>
          <span className="text-[10px] text-slate-400 font-mono leading-none mt-1">{words.length} Cognates</span>
        </div>

        {/* Radiated Word Nodes */}
        {words.slice(0, 10).map((w, i) => {
          const angle = (i / Math.min(words.length, 10)) * 2 * Math.PI - Math.PI / 2;
          const x = centerX + radiusX * Math.cos(angle) - 60;
          const y = centerY + radiusY * Math.sin(angle) - 18;

          const m = wordMastery[w.id] || "unexplored";
          let badgeBorder = "border-white/10 bg-[#1C1D2B]/90 text-slate-300";
          if (m === "mastered") badgeBorder = "border-emerald-500/80 bg-emerald-950/40 text-emerald-300";
          else if (m === "encountered") badgeBorder = "border-amber-500/80 bg-amber-950/40 text-amber-300";
          else if (m === "explored") badgeBorder = "border-cyan-400/80 bg-cyan-950/40 text-cyan-300";

          return (
            <button
              key={w.id}
              onClick={() => openWordDrawer(w.id)}
              style={{ left: x, top: y }}
              className={`absolute z-20 px-2.5 py-1 rounded-lg border text-xs font-mono font-medium hover:scale-105 active:scale-95 transition shadow-sm cursor-pointer ${badgeBorder}`}
            >
              <span className="text-slate-400">{w.english_cognate}</span>
              <span className="mx-1 text-cyan-400">→</span>
              <span className="text-amber-400 font-bold">{w.target_word}</span>
            </button>
          );
        })}
      </div>

      {/* Mobile Expandable Vertical Tree */}
      <div className="md:hidden space-y-3">
        <div className="p-4 rounded-xl bg-[#161722] border border-cyan-400/40 text-center space-y-1">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Central Hub</span>
          <h3 className="text-xl font-bold text-amber-400">{family.name}</h3>
          <p className="text-xs text-slate-400">{family.phonetic_rule}</p>
        </div>

        <div className="space-y-2">
          {words.map((w) => (
            <div key={w.id} className="p-2.5 rounded-lg bg-[#1C1D2B] border border-white/10 flex items-center justify-between">
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
      <div className="p-4 rounded-xl bg-[#1C1D2B] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Status Counters */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <span className="text-emerald-400 font-bold">{masteredCount} Mastered ✓</span>
          <span className="text-amber-400 font-bold">{encounteredCount} In Course ●</span>
          <span className="text-cyan-400 font-bold">{exploredCount} Explored ○</span>
          <span className="text-slate-500 font-bold">{unexploredCount} Unseen ·</span>
        </div>

        {/* Practice Branch Button */}
        <button
          type="button"
          onClick={onPracticeBranch}
          className="w-full sm:w-auto px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition active:scale-95 cursor-pointer shadow-lg shadow-cyan-500/20"
        >
          ⚡ Practice This Branch (5 Qs)
        </button>
      </div>
    </div>
  );
};
