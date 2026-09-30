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
        className="rounded-full border border-[var(--sub-color)]/30 flex items-center justify-center text-[10px] text-[var(--sub-color)] font-mono"
      >
        0
      </div>
    );
  }

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const segments = [
    { count: mastered, color: "var(--main-color)" }, // Mastered (primary accent)
    { count: encountered, color: "var(--text-color)" }, // Encountered (primary text)
    { count: explored, color: "var(--sub-color)" }, // Explored (muted sub)
    { count: unexplored, color: "color-mix(in srgb, var(--sub-color) 35%, transparent)" }, // Unexplored (subtle)
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
          stroke="var(--sub-alt-color)"
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
      <span className="absolute text-[10px] font-mono font-bold text-[var(--text-color)]">
        {mastered + encountered}
      </span>
    </div>
  );
};
