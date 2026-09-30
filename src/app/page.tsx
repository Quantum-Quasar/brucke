"use client";

import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { DailyInsightCard } from "@/components/common/DailyInsightCard";
import { TrailMap } from "@/components/trail/TrailMap";
import { useAppStore } from "@/lib/store";
import dailyInsights from "@/data/insights.json";
import type { DailyInsight } from "@/lib/types";

const PURPLE_STAR = "#a78bfa";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [insightIndex, setInsightIndex] = useState(0);
  const completedLessons = useAppStore((s) => s.completedLessons);
  const lessonStars = useAppStore((s) => s.lessonStars);
  const logDailyActivity = useAppStore((s) => s.logDailyActivity);

  useEffect(() => {
    setMounted(true);
    setInsightIndex(new Date().getDate() % (dailyInsights.length || 1));
    logDailyActivity();
  }, [logDailyActivity]);

  const completed = mounted ? completedLessons.length : 0;
  const purpleCount = mounted ? Object.values(lessonStars).filter((s) => s === "purple").length : 0;
  const todayInsight = (dailyInsights as DailyInsight[])[insightIndex] ?? (dailyInsights as DailyInsight[])[0];

  return (
    <div className="max-w-5xl mx-auto px-4 pt-3 pb-6 font-sans">
      {/* compact header row — everything else lives in the bottom dock */}
      <div className="flex items-center justify-between gap-3 py-2">
        <div className="min-w-0">
          <span className="text-[10px] font-mono text-[var(--main-color)] font-semibold uppercase tracking-wider">
            the trail
          </span>
          <h1 className="text-lg sm:text-xl font-bold text-[var(--text-color)] tracking-tight leading-tight">
            30 topics, one bridge
          </h1>
        </div>
        <div className="flex items-center gap-2 shrink-0 font-mono text-[11px]">
          <span
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/25 text-[var(--sub-color)]"
            title={`${completed} lessons completed — every lesson is one star`}
          >
            <Star className="w-3 h-3" style={{ color: "#eab308", fill: "#eab308" }} strokeWidth={0} />
            <span className="text-[var(--text-color)] font-bold">{completed}</span>
            <span className="hidden sm:inline">stars</span>
          </span>
          <span
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/25 text-[var(--sub-color)]"
            title={`${purpleCount} flawless first-try lessons (purple stars)`}
          >
            <Star
              className="w-3 h-3"
              style={{ color: PURPLE_STAR, fill: PURPLE_STAR, opacity: purpleCount > 0 ? 1 : 0.35 }}
              strokeWidth={0}
            />
            <span className={purpleCount > 0 ? "text-[var(--text-color)] font-bold" : ""}>{purpleCount}</span>
          </span>
        </div>
      </div>

      <DailyInsightCard insight={todayInsight} />

      <TrailMap />
    </div>
  );
}
