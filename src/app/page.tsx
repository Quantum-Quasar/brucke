"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, RotateCcw, BookOpen, Compass, Sparkles, ChevronRight } from "lucide-react";
import { DailyInsightCard } from "@/components/common/DailyInsightCard";
import { useAppStore } from "@/lib/store";
import { getDueCards } from "@/lib/srs";
import { LESSONS } from "@/data/lessons";
import compendium from "@/data/compendium.json";
import type { CompendiumData } from "@/lib/types";

const data = compendium as unknown as CompendiumData;

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const currentLessonId = useAppStore((s) => s.currentLessonId);
  const completedLessons = useAppStore((s) => s.completedLessons);
  const wordMastery = useAppStore((s) => s.wordMastery);
  const srsCards = useAppStore((s) => s.srsCards);
  const weeklyActivity = useAppStore((s) => s.weeklyActivity);
  const logDailyActivity = useAppStore((s) => s.logDailyActivity);

  useEffect(() => {
    setMounted(true);
    logDailyActivity();
  }, [logDailyActivity]);

  const dueCards = getDueCards(srsCards);
  const effectiveDueCards = mounted ? dueCards : [];
  const currentLesson = LESSONS.find((l) => l.id === currentLessonId) || LESSONS[0];

  const masteredCount = mounted ? Object.values(wordMastery).filter((m) => m === "mastered").length : 0;
  const encounteredCount = mounted ? Object.values(wordMastery).filter((m) => m === "encountered").length : 0;
  const totalWords = data.wordList.length;

  const daysLabels = ["M", "T", "W", "T", "F", "S", "S"];
  const displayWeekly = mounted ? weeklyActivity : [false, false, false, false, false, false, false];
  const activeDaysCount = displayWeekly.filter(Boolean).length;
  const progressPercent = Math.min(100, Math.round(((mounted ? completedLessons.length : 0) / 30) * 100));

  // Rotate daily insight based on calendar day
  const insightIndex = new Date().getDate() % (data.dailyInsights?.length || 1);
  const todayInsight = data.dailyInsights?.[insightIndex] || data.dailyInsights?.[0];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Header Profile & Weekly Consistency Dots */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl bg-[#1C1D2B] border border-white/10">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Your Linguistic Canopy</span>
          <h1 className="text-2xl font-bold text-slate-100 mt-0.5">Stammbaum</h1>
          <p className="text-sm text-slate-400 mt-1 font-mono">
            <span className="text-emerald-400 font-bold">{masteredCount} Mastered</span> ·{" "}
            <span className="text-amber-400 font-bold">{encounteredCount} Encountered</span> ·{" "}
            <span className="text-slate-500">{totalWords} Total Words</span>
          </p>
        </div>

        {/* Weekly Consistency Dots */}
        <div className="space-y-1.5 self-stretch sm:self-auto sm:text-right">
          <div className="flex items-center gap-2 justify-start sm:justify-end">
            {displayWeekly.map((active, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] transition ${
                    active
                      ? "bg-amber-400 text-slate-950 font-bold"
                      : "border border-white/15 bg-white/5 text-slate-500"
                  }`}
                >
                  {active ? "●" : "○"}
                </div>
                <span className="text-[10px] font-mono text-slate-500">{daysLabels[i]}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 font-mono">
            {activeDaysCount >= 3 ? (
              <span className="text-emerald-400">Weekly goal met ({activeDaysCount}/3 days) — nice!</span>
            ) : (
              <span>{activeDaysCount} of 3 active days this week</span>
            )}
          </p>
        </div>
      </div>

      {/* SMART PRIORITY REORDERING */}
      {/* Priority slot: Review Card if cards are due, otherwise Current Lesson leads */}
      <div className="space-y-4">
        {effectiveDueCards.length > 0 ? (
          /* Priority 1: Due Reviews Card */
          <div className="p-6 rounded-2xl bg-gradient-to-r from-[#1C1D2B] to-[#25233A] border-2 border-cyan-500/40 shadow-lg shadow-cyan-500/5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-cyan-400 animate-spin-slow" />
                <span>Reviews Due Now</span>
              </span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-400/15 text-cyan-300 font-bold border border-cyan-400/30">
                {effectiveDueCards.length} Words Due ⚡
              </span>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-100">Pattern Spaced Repetition</h2>
              <p className="text-sm text-slate-300 mt-1">
                Words scheduled for retrieval today across your active sound shift families.
              </p>
            </div>

            <Link
              href="/review"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm transition"
            >
              <span>Start Review ({effectiveDueCards.length})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : null}

        {/* Current Lesson Slot */}
        <div className="p-6 rounded-2xl bg-[#1C1D2B] border border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Current Course Lesson
            </span>
            <span className="text-xs font-mono text-slate-400">
              Lesson {currentLesson.id} of 30
            </span>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-100 tracking-tight">{currentLesson.title}</h2>
            <p className="text-sm text-slate-400 mt-1">{currentLesson.subtitle}</p>
          </div>

          {/* Progress bar */}
          <div className="space-y-1.5">
            <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
              <div
                className="h-full bg-amber-400 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="flex justify-between text-[11px] font-mono text-slate-500">
              <span>{mounted ? completedLessons.length : 0} lessons completed</span>
              <span>{progressPercent}% Course Progress</span>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href={`/trail/${currentLesson.id}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition"
            >
              <span>{mounted && completedLessons.includes(currentLesson.id) ? "Revisit Lesson" : "Resume Lesson"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Daily Cultural Insight */}
      <DailyInsightCard insight={todayInsight} />

      {/* Quick Launchpad to Atlas and Decoder */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Atlas preview card */}
        <Link
          href="/atlas"
          className="p-5 rounded-2xl bg-[#1C1D2B] border border-white/10 hover:border-cyan-500/40 transition group space-y-3"
        >
          <div className="flex items-center justify-between">
            <Compass className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition" />
            <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-100">The Atlas Map</h3>
            <p className="text-xs text-slate-400 mt-1">
              Explore all 9 sound shift constellations, word trees, and unpenalized branch practice.
            </p>
          </div>
        </Link>

        {/* Decoder preview card */}
        <Link
          href="/decoder"
          className="p-5 rounded-2xl bg-[#1C1D2B] border border-white/10 hover:border-amber-500/40 transition group space-y-3"
        >
          <div className="flex items-center justify-between">
            <Sparkles className="w-5 h-5 text-amber-400 group-hover:scale-110 transition" />
            <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-100">The Real-Time Decoder</h3>
            <p className="text-xs text-slate-400 mt-1">
              Instant shift search for 500+ English words with lemmatization and Latinate bridges.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
