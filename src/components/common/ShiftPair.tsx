"use client";

import React from "react";
import { Volume2 } from "lucide-react";
import { alignShiftPair } from "@/lib/shift-annotator";
import { useAppStore } from "@/lib/store";
import { GenderBadge } from "@/components/common/GenderBadge";
import { playGermanAudio } from "@/lib/audio";
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
        className={`group inline-flex items-center gap-2 font-semibold text-sm transition-transform active:scale-95 ${
          showDetailsOnClick ? "cursor-pointer hover:underline decoration-amber-400/50 underline-offset-4" : ""
        }`}
      >
        <GenderBadge gender={gender} size="sm" />

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

      {/* Audio Pronunciation Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          const spoken = gender ? `${gender} ${german}` : german;
          playGermanAudio(spoken);
        }}
        className="p-1 rounded text-slate-500 hover:text-cyan-300 hover:bg-white/5 transition cursor-pointer"
        title={`Listen to German pronunciation for "${german}"`}
      >
        <Volume2 className="w-3.5 h-3.5" />
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
