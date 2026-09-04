"use client";

// ponytail: native svg 4-tier donut chart without external chart library

import React from "react";

interface DonutChartProps {
  mastered: number;
  encountered: number;
  explored: number;
  unexplored: number;
  size?: number;
  strokeWidth?: number;
}

export const DonutChart: React.FC<DonutChartProps> = ({
  mastered,
  encountered,
  explored,
  unexplored,
  size = 44,
  strokeWidth = 5,
}) => {
  const total = mastered + encountered + explored + unexplored;
  if (total === 0) {
    return (
      <div
        style={{ width: size, height: size }}
        className="rounded-full border border-white/10 flex items-center justify-center text-[10px] text-slate-500 font-mono"
      >
        0
      </div>
    );
  }

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const segments = [
    { count: mastered, color: "#10b981" }, // Emerald / Sage (Mastered)
    { count: encountered, color: "#f59e0b" }, // Amber (Encountered)
    { count: explored, color: "#06b6d4" }, // Cyan (Explored)
    { count: unexplored, color: "#334155" }, // Slate (Unexplored)
  ];

  let accumulatedOffset = 0;

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="rotate-[-90deg]">
        {/* Background track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#1e293b"
          strokeWidth={strokeWidth}
        />
        {segments.map((seg, i) => {
          if (seg.count === 0) return null;
          const strokeDasharray = `${(seg.count / total) * circumference} ${circumference}`;
          const strokeDashoffset = -accumulatedOffset;
          accumulatedOffset += (seg.count / total) * circumference;

          return (
            <circle
              key={i}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={seg.color}
              strokeWidth={strokeWidth}
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-300"
            />
          );
        })}
      </svg>
      <span className="absolute text-[10px] font-mono font-bold text-slate-300">
        {mastered + encountered}
      </span>
    </div>
  );
};
