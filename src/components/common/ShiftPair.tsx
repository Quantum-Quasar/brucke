"use client";

import React from "react";
import { alignShiftPair } from "@/lib/shift-annotator";
import { useAppStore } from "@/lib/store";
import type { Gender } from "@/lib/types";

interface ShiftPairProps {
  english: string;
  german: string;
  gender?: Gender | null;
  rule?: string;
  wordId?: string;
  className?: string;
  showDetailsOnClick?: boolean;
}

export const ShiftPair: React.FC<ShiftPairProps> = ({
  english,
  german,
  gender,
  rule,
  wordId,
  className = "",
  showDetailsOnClick = true,
}) => {
  const openWordDrawer = useAppStore((s) => s.openWordDrawer);
  const mastery = useAppStore((s) => (wordId ? s.wordMastery[wordId] || "unexplored" : "unexplored"));

  const targetId = wordId || german.toLowerCase();
  const annotation = alignShiftPair(english, german, rule);

  // Border & badge styling based on mastery state
  const getMasteryIndicator = () => {
    switch (mastery) {
      case "mastered":
        return { badge: "✓", border: "border-emerald-500/60 bg-emerald-500/10 text-emerald-400" };
      case "encountered":
        return { badge: "●", border: "border-amber-500/60 bg-amber-500/10 text-amber-400" };
      case "explored":
        return { badge: "○", border: "border-cyan-400/60 bg-cyan-400/10 text-cyan-400" };
      default:
        return { badge: "·", border: "border-white/10 bg-transparent text-slate-500" };
    }
  };

  const indicator = getMasteryIndicator();

  const getGenderColor = (g?: Gender | null) => {
    if (g === "der") return "text-blue-400 bg-blue-500/10 border-blue-500/30";
    if (g === "die") return "text-rose-400 bg-rose-500/10 border-rose-500/30";
    if (g === "das") return "text-emerald-400 bg-emerald-500/10 border-emerald-500/30";
    return "";
  };

  return (
    <div
      className={`inline-flex flex-wrap items-center gap-2.5 px-3 py-1.5 rounded-lg border transition-all duration-200 ${indicator.border} ${className}`}
    >
      {/* English Cognate */}
      <span className="text-slate-400 font-normal tracking-wide text-sm">
        {annotation.englishSegments.map((seg, i) => (
          <span
            key={i}
            className={seg.isChanged ? "text-slate-500 underline decoration-slate-600/80 decoration-1 underline-offset-4" : "text-slate-300"}
          >
            {seg.text}
          </span>
        ))}
      </span>

      {/* Shift Rule Indicator */}
      <div className="flex items-center gap-1 text-[11px] font-mono font-medium text-cyan-400/90 bg-cyan-950/40 px-1.5 py-0.5 rounded border border-cyan-500/20">
        <span>→</span>
        <span>{annotation.shiftRule}</span>
      </div>

      {/* German Word + Gender */}
      <button
        type="button"
        onClick={() => showDetailsOnClick && openWordDrawer(targetId)}
        className={`group inline-flex items-center gap-1.5 font-semibold text-sm transition-transform active:scale-95 ${
          showDetailsOnClick ? "cursor-pointer hover:underline decoration-amber-400/50 underline-offset-4" : ""
        }`}
      >
        {gender && (
          <span className={`text-[10px] font-mono px-1 py-0.2 rounded border uppercase tracking-wider font-semibold ${getGenderColor(gender)}`}>
            {gender}
          </span>
        )}

        <span className="text-amber-400 group-hover:text-amber-300">
          {annotation.germanSegments.map((seg, i) => (
            <span
              key={i}
              className={seg.isChanged ? "text-cyan-300 font-bold bg-cyan-400/15 px-0.5 rounded" : "text-amber-400"}
            >
              {seg.text}
            </span>
          ))}
        </span>
      </button>

      {/* Mastery Badge */}
      <span
        title={`Mastery state: ${mastery}`}
        className="w-4 h-4 rounded-full flex items-center justify-center text-[11px] font-mono opacity-80"
      >
        {indicator.badge}
      </span>
    </div>
  );
};
