"use client";

import React from "react";

export type LessonSegment = "hook" | "pattern" | "table" | "practice" | "summary";

interface ProgressBar5Props {
  currentSegment: LessonSegment;
  completedSegments: LessonSegment[];
  onSelectSegment?: (seg: LessonSegment) => void;
}

const SEGMENTS: Array<{ id: LessonSegment; label: string }> = [
  { id: "hook", label: "Hook" },
  { id: "pattern", label: "Pattern" },
  { id: "table", label: "Table" },
  { id: "practice", label: "Practice" },
  { id: "summary", label: "Summary" },
];

export const ProgressBar5: React.FC<ProgressBar5Props> = ({
  currentSegment,
  completedSegments,
  onSelectSegment,
}) => {
  return (
    <div className="w-full space-y-1.5">
      {/* 5-segment bar */}
      <div className="grid grid-cols-5 gap-1.5">
        {SEGMENTS.map((seg) => {
          const isCurrent = seg.id === currentSegment;
          const isDone = completedSegments.includes(seg.id);

          return (
            <button
              key={seg.id}
              type="button"
              onClick={() => onSelectSegment?.(seg.id)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                isCurrent
                  ? "bg-amber-400 ring-2 ring-amber-400/30"
                  : isDone
                  ? "bg-emerald-500/80"
                  : "bg-white/10 hover:bg-white/20"
              }`}
              title={seg.label}
            />
          );
        })}
      </div>

      {/* Labels */}
      <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
        <span>Part {SEGMENTS.findIndex((s) => s.id === currentSegment) + 1} of 5</span>
        <span className="text-amber-400/90 capitalize font-medium">
          {SEGMENTS.find((s) => s.id === currentSegment)?.label}
        </span>
      </div>
    </div>
  );
};
