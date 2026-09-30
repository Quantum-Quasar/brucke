"use client";

import React from "react";
import type { LessonSegment } from "@/lib/types";

export type { LessonSegment } from "@/lib/types";

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
              disabled={!isDone}
              onClick={() => onSelectSegment?.(seg.id)}
              className={`h-1 rounded transition-all duration-200 ${
                isCurrent
                  ? "bg-[var(--main-color)]"
                  : isDone
                  ? "bg-[var(--main-color)]/60 hover:bg-[var(--main-color)]"
                  : "bg-[var(--sub-color)]/20"
              } ${!isDone ? "cursor-not-allowed" : "cursor-pointer"}`}
              title={isDone ? `${seg.label} (completed)` : `${seg.label} (locked until reached)`}
              aria-label={`${seg.label}${isCurrent ? ", current step" : isDone ? ", completed" : ", locked"}`}
              aria-current={isCurrent ? "step" : undefined}
            />
          );
        })}
      </div>

      {/* Labels */}
      <div className="flex items-center justify-between text-[11px] font-mono text-[var(--sub-color)]">
        <span>Part {SEGMENTS.findIndex((s) => s.id === currentSegment) + 1} of 5</span>
        <span className="text-[var(--main-color)] capitalize font-medium">
          {SEGMENTS.find((s) => s.id === currentSegment)?.label}
        </span>
      </div>
    </div>
  );
};
