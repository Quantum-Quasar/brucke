"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, Lock } from "lucide-react";
import { useAppStore } from "@/lib/store";
import { COURSE_ROADMAP } from "@/data/lessons";

export default function TrailIndexPage() {
  const [mounted, setMounted] = useState(false);
  const completedLessons = useAppStore((s) => s.completedLessons);
  const currentLessonId = useAppStore((s) => s.currentLessonId);

  useEffect(() => {
    setMounted(true);
  }, []);

  const phases = [
    {
      phase: 1,
      title: "Phase 1: Foundational Shifts & Verb Architecture",
      range: "Lessons 1–8",
      description: "Master the Germanic Core, modal sentence brackets, and the primary consonant shifts (P→F, TH→D, T→S, K→CH, D→T).",
    },
    {
      phase: 2,
      title: "Phase 2: Structural Logic & Grammatical Symmetry",
      range: "Lessons 9–18",
      description: "Understand German cases, pronouns, prefixes, and conversational past as natural historical evolutions.",
    },
    {
      phase: 3,
      title: "Phase 3: Fluency, Word Formation & Deep Calques",
      range: "Lessons 19–30",
      description: "Compound noun engineering, gender heuristics, vowel mutations, and capstone reading synthesis.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-10">
      {/* Header */}
      <div className="space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
          Structured Curriculum
        </span>
        <h1 className="text-3xl font-extrabold text-slate-100 tracking-tight">The Trail</h1>
        <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
          A 30-lesson systematic journey revealing the Germanic blueprint. Each lesson pairs an intuitive sound shift rule with real vocabulary derivation exercises.
        </p>
      </div>

      {/* Curriculum Phases */}
      <div className="space-y-10">
        {phases.map((ph) => {
          const phaseLessons = COURSE_ROADMAP.filter((l) => l.phase === ph.phase);

          return (
            <div key={ph.phase} className="space-y-4">
              <div className="border-b border-white/10 pb-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-slate-100">{ph.title}</h2>
                  <span className="text-xs font-mono text-cyan-400">{ph.range}</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">{ph.description}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {phaseLessons.map((item) => {
                  const isCompleted = mounted && completedLessons.includes(item.id);
                  const isCurrent = mounted && item.id === currentLessonId;
                  const isAvailable = item.id <= 10 || item.unlocked;

                  const cardContent = (
                    <>
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                            isCompleted
                              ? "bg-emerald-500/20 text-emerald-400"
                              : isCurrent
                              ? "bg-amber-400 text-slate-950"
                              : "bg-white/5 text-slate-400"
                          }`}
                        >
                          {isCompleted ? "✓" : item.id}
                        </span>
                        <div>
                          <h3 className="text-sm font-semibold text-slate-200">{item.title}</h3>
                          <span className="text-[11px] font-mono text-slate-500">
                            {isCompleted
                              ? "Completed"
                              : isCurrent
                              ? "Active Lesson"
                              : isAvailable
                              ? "Ready to Start"
                              : "Phase Outline"}
                          </span>
                        </div>
                      </div>

                      <div>
                        {isAvailable ? (
                          <ChevronRight className="w-4 h-4 text-slate-500" />
                        ) : (
                          <Lock className="w-3.5 h-3.5 text-slate-600" />
                        )}
                      </div>
                    </>
                  );

                  const cardStyle = `p-4 rounded-xl border transition flex items-center justify-between ${
                    isCompleted
                      ? "bg-emerald-950/20 border-emerald-500/30 hover:border-emerald-500/50"
                      : isCurrent
                      ? "bg-amber-500/10 border-amber-500/50 hover:border-amber-400 shadow-md shadow-amber-500/5"
                      : isAvailable
                      ? "bg-[#1C1D2B] border-white/10 hover:border-white/25"
                      : "bg-white/5 border-white/5 opacity-50 cursor-not-allowed"
                  }`;

                  return isAvailable ? (
                    <Link key={item.id} href={`/trail/${item.id}`} className={cardStyle}>
                      {cardContent}
                    </Link>
                  ) : (
                    <div key={item.id} className={cardStyle} title="Coming in future curriculum update">
                      {cardContent}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
