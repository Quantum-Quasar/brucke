"use client";

import React, { useEffect, useState } from "react";
import { Star, Clock } from "lucide-react";
import { DailyInsightCard } from "@/components/common/DailyInsightCard";
import { TrailMap } from "@/components/trail/TrailMap";
import { useAppStore } from "@/lib/store";
import { getLanguageDefinition } from "@/data/languages";
import { getLanguageContent } from "@/data/language-content";
import type { DailyInsight } from "@/lib/types";

const PURPLE_STAR = "#a78bfa";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [insightIndex, setInsightIndex] = useState(0);
  const completedLessons = useAppStore((s) => s.completedLessons);
  const lessonStars = useAppStore((s) => s.lessonStars);
  const logDailyActivity = useAppStore((s) => s.logDailyActivity);
  const activeLanguageId = useAppStore((s) => s.activeLanguageId);

  const language = getLanguageDefinition(activeLanguageId);
  const content = getLanguageContent(activeLanguageId);
  const dailyInsights = content.insights as DailyInsight[];

  useEffect(() => {
    setMounted(true);
    setInsightIndex(new Date().getDate() % (dailyInsights.length || 1));
    logDailyActivity();
  }, [logDailyActivity]);

  const completed = mounted ? completedLessons.length : 0;
  const purpleCount = mounted ? Object.values(lessonStars).filter((s) => s === "purple").length : 0;
  const todayInsight = dailyInsights[insightIndex] ?? dailyInsights[0];

  return (
    <div className="max-w-5xl mx-auto px-4 pt-3 pb-6 font-sans">
      {/* compact header row — everything else lives in the bottom dock */}
      <div className="flex items-center justify-between gap-3 py-2">
        <div className="min-w-0">
          <span className="text-[10px] font-mono text-[var(--main-color)] font-semibold uppercase tracking-wider">
            the trail
          </span>
          <h1 className="text-lg sm:text-xl font-bold text-[var(--text-color)] tracking-tight leading-tight">
            {language.status === "available" ? "30 topics, one bridge" : `${language.flag} ${language.name} is on the way`}
          </h1>
        </div>
        {language.status === "available" && (
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
        )}
      </div>

      {language.status === "available" ? (
        <>
          <DailyInsightCard insight={todayInsight} />
          <TrailMap />
        </>
      ) : (
        <div className="mt-6 p-8 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 text-center space-y-3">
          <Clock className="w-8 h-8 text-[var(--main-color)] mx-auto" />
          <h2 className="text-base font-bold font-mono text-[var(--text-color)]">
            the {language.name.toLowerCase()} trail is under construction
          </h2>
          <p className="text-xs font-mono text-[var(--sub-color)] max-w-md mx-auto leading-relaxed">
            the cognate engine for {language.name} is being authored right now. your progress here is
            safe and separate — switch to another language from settings and your work waits for you.
          </p>
        </div>
      )}
    </div>
  );
}
