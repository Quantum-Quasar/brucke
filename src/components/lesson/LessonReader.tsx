"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, BookOpen, Sparkles, Info, Compass } from "lucide-react";
import { ProgressBar5, type LessonSegment } from "./ProgressBar5";
import { ShiftPair } from "@/components/common/ShiftPair";
import { ExerciseWidget } from "./ExerciseWidgets";
import { RetryQueue } from "./RetryQueue";
import { useAppStore } from "@/lib/store";
import compendium from "@/data/compendium.json";
import type { CompendiumData, Lesson, ExerciseItem } from "@/lib/types";

const data = compendium as unknown as CompendiumData;

interface LessonReaderProps {
  lesson: Lesson;
}

export const LessonReader: React.FC<LessonReaderProps> = ({ lesson }) => {
  const router = useRouter();
  const [currentSegment, setCurrentSegment] = useState<LessonSegment>("hook");
  const [practiceIndex, setPracticeIndex] = useState(0);
  const [retryIndex, setRetryIndex] = useState(0);
  const [inRetryPhase, setInRetryPhase] = useState(false);
  const [completedSegments, setCompletedSegments] = useState<LessonSegment[]>([]);
  const [retryQueue, setRetryQueue] = useState<ExerciseItem[]>([]);
  const [isLessonFinished, setIsLessonFinished] = useState(false);

  const primaryShiftId = lesson.shift_categories && lesson.shift_categories[0];
  const primaryShift = primaryShiftId ? data.shifts[primaryShiftId] : null;

  const completeLesson = useAppStore((s) => s.completeLesson);
  const markWordsEncountered = useAppStore((s) => s.markWordsEncountered);

  // Global keyboard navigation across lesson reading segments (Hook, Pattern, Table, Summary)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const active = document.activeElement;
      const isInput =
        active instanceof HTMLInputElement ||
        active instanceof HTMLTextAreaElement ||
        (active as HTMLElement)?.isContentEditable;

      if (isInput) return;

      if (currentSegment === "hook") {
        if (e.key === "Enter" || e.key === " " || e.code === "Space") {
          e.preventDefault();
          markSegmentDone("hook", "pattern");
        }
      } else if (currentSegment === "pattern") {
        if (e.key === "Enter" || e.key === " " || e.code === "Space") {
          e.preventDefault();
          markSegmentDone("pattern", "table");
        } else if (e.key === "Backspace" || e.key === "ArrowLeft") {
          e.preventDefault();
          setCurrentSegment("hook");
        }
      } else if (currentSegment === "table") {
        if (e.key === "Enter" || e.key === " " || e.code === "Space") {
          e.preventDefault();
          setPracticeIndex(0);
          setRetryIndex(0);
          setInRetryPhase(false);
          setRetryQueue([]);
          markSegmentDone("table", "practice");
        } else if (e.key === "Backspace" || e.key === "ArrowLeft") {
          e.preventDefault();
          setCurrentSegment("pattern");
        }
      } else if (currentSegment === "summary") {
        if (retryQueue.length === 0 || isLessonFinished) {
          if (e.key === "Enter" || e.key === " " || e.code === "Space") {
            e.preventDefault();
            handleCompleteAll();
            const nextUrl = lesson.id < 5 ? `/trail/${lesson.id + 1}` : "/trail";
            router.push(nextUrl);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSegment, retryQueue.length, isLessonFinished, lesson.id, router]);

  // Register all lesson words as encountered when viewing
  React.useEffect(() => {
    markWordsEncountered(lesson.word_ids);
  }, [lesson.word_ids, markWordsEncountered]);

  const handleExerciseError = (exercise: ExerciseItem) => {
    setRetryQueue((prev) => {
      if (prev.some((e) => e.id === exercise.id)) return prev;
      return [...prev, exercise];
    });
  };

  const handlePracticeSuccess = () => {
    if (!inRetryPhase) {
      if (practiceIndex + 1 < lesson.exercises.length) {
        setPracticeIndex((prev) => prev + 1);
      } else {
        // Initial run complete. If any items in retry queue, enter reinforcement phase!
        if (retryQueue.length > 0) {
          setInRetryPhase(true);
          setRetryIndex(0);
        } else {
          markSegmentDone("practice", "summary");
        }
      }
    } else {
      // In retry phase
      if (retryIndex + 1 < retryQueue.length) {
        setRetryIndex((prev) => prev + 1);
      } else {
        // All retries cleared!
        setRetryQueue([]);
        setInRetryPhase(false);
        markSegmentDone("practice", "summary");
      }
    }
  };

  const handleCompleteAll = () => {
    completeLesson(lesson.id);
    setIsLessonFinished(true);
    setCompletedSegments(["hook", "pattern", "table", "practice", "summary"]);
  };

  const markSegmentDone = (seg: LessonSegment, nextSeg: LessonSegment) => {
    setCompletedSegments((prev) => Array.from(new Set([...prev, seg])));
    setCurrentSegment(nextSeg);
  };

  const currentExercise = inRetryPhase
    ? retryQueue[retryIndex]
    : lesson.exercises[practiceIndex];

  return (
    <article className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Top Header & Navigation */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Link
            href="/trail"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Trail
          </Link>
          <span className="text-xs font-mono text-amber-400 font-semibold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
            Lesson {lesson.id} of 30
          </span>
        </div>

        {/* 5-segment Progress bar */}
        <ProgressBar5
          currentSegment={currentSegment}
          completedSegments={completedSegments}
          onSelectSegment={(seg) => setCurrentSegment(seg)}
        />

        {/* Lesson Title */}
        <div className="pt-2">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">
            Phase {lesson.phase} · Core Shift
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight mt-1">
            {lesson.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-400 mt-2 font-normal leading-relaxed">
            {lesson.subtitle}
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Step Card Column */}
        <div className="lg:col-span-8 space-y-6 text-slate-200 text-base leading-relaxed">
          {/* STEP 1: The Hook Card */}
          {currentSegment === "hook" && (
            <div className="p-7 rounded-2xl bg-[#1C1D2B] border border-white/10 space-y-6 shadow-xl animate-in fade-in duration-200">
              <div className="flex items-center gap-2 pb-2 border-b border-white/5">
                <span className="text-amber-400 font-mono text-xs font-bold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                  PART 01
                </span>
                <h2 className="text-xl font-bold text-slate-100">{lesson.hook.title}</h2>
              </div>

              <p className="text-slate-300 text-base leading-relaxed">{lesson.hook.content}</p>

              {lesson.hook.footnotes && lesson.hook.footnotes.length > 0 && (
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2 lg:hidden">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Historical Footnotes</span>
                  {lesson.hook.footnotes.map((fn) => (
                    <div key={fn.marker} className="text-xs text-slate-400">
                      <span className="text-amber-400 font-mono font-bold">[{fn.marker}] {fn.title}:</span> {fn.content}
                    </div>
                  ))}
                </div>
              )}

              <div className="pt-4 border-t border-white/5 flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => markSegmentDone("hook", "pattern")}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition cursor-pointer active:scale-95 shadow-lg shadow-cyan-500/20"
                >
                  <span>Next: The Pattern [Enter]</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: The Pattern Card */}
          {currentSegment === "pattern" && (
            <div className="p-7 rounded-2xl bg-[#1C1D2B] border border-white/10 space-y-6 shadow-xl animate-in fade-in duration-200">
              <div className="flex items-center gap-2 pb-2 border-b border-white/5">
                <span className="text-cyan-400 font-mono text-xs font-bold px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                  PART 02
                </span>
                <h2 className="text-xl font-bold text-slate-100">{lesson.pattern.title}</h2>
              </div>

              <p className="text-slate-300 text-base leading-relaxed">{lesson.pattern.content}</p>

              {lesson.pattern.linguist_note && (
                <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 space-y-1.5 text-xs">
                  <div className="flex items-center gap-1.5 font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                    <Info className="w-3.5 h-3.5" /> Linguist&apos;s Historical Note
                  </div>
                  <p className="text-slate-300 leading-relaxed">{lesson.pattern.linguist_note}</p>
                </div>
              )}

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentSegment("hook")}
                  className="text-xs font-mono text-slate-400 hover:text-white transition cursor-pointer"
                >
                  ← Back to Hook [Backspace]
                </button>
                <button
                  type="button"
                  onClick={() => markSegmentDone("pattern", "table")}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition cursor-pointer active:scale-95 shadow-lg shadow-amber-500/20"
                >
                  <span>Next: Transformation Table [Enter]</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Transformation Table Card */}
          {currentSegment === "table" && (
            <div className="p-7 rounded-2xl bg-[#1C1D2B] border border-white/10 space-y-6 shadow-xl animate-in fade-in duration-200">
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-mono text-xs font-bold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                    PART 03
                  </span>
                  <h2 className="text-xl font-bold text-slate-100">Transformation Table</h2>
                </div>
                <span className="text-xs font-mono text-slate-500">Tap word to inspect</span>
              </div>

              <p className="text-sm text-slate-400">
                Notice how the shifted letters are highlighted in <span className="text-cyan-400 font-semibold">cyan</span>, while the full German word shines in <span className="text-amber-400 font-semibold">amber</span>:
              </p>

              <div className="p-4 rounded-xl bg-[#161722] border border-white/10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {lesson.table_word_ids.map((wid) => {
                    const w = data.words[wid];
                    if (!w) return null;
                    return (
                      <ShiftPair
                        key={wid}
                        english={w.english_cognate}
                        german={w.target_word}
                        gender={w.gender}
                        rule={w.shift_rule}
                        wordId={w.id}
                        className="w-full justify-between py-2 px-3 bg-white/5 hover:bg-white/10 border-white/5"
                      />
                    );
                  })}
                </div>
              </div>

              {/* Atlas Constellation Bridge */}
              {primaryShift ? (
                <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold">
                      <Compass className="w-3.5 h-3.5" />
                      <span>Atlas Constellation · {primaryShift.symbol}</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      View all {primaryShift.word_ids.length} cognates in the historical Sound Shift Atlas.
                    </p>
                  </div>
                  <Link
                    href={`/atlas/${primaryShift.id}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-xs font-mono text-cyan-300 transition whitespace-nowrap"
                  >
                    <span>Open Atlas</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold">
                      <Compass className="w-3.5 h-3.5" />
                      <span>Sound Shift Atlas</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Explore all 9 historical sound shift families connecting English and German.
                    </p>
                  </div>
                  <Link
                    href="/atlas"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-xs font-mono text-cyan-300 transition whitespace-nowrap"
                  >
                    <span>Explore Atlas</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              )}

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentSegment("pattern")}
                  className="text-xs font-mono text-slate-400 hover:text-white transition cursor-pointer"
                >
                  ← Back to Pattern [Backspace]
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setPracticeIndex(0);
                    setRetryIndex(0);
                    setInRetryPhase(false);
                    setRetryQueue([]);
                    markSegmentDone("table", "practice");
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition cursor-pointer active:scale-95 shadow-lg shadow-emerald-500/20"
                >
                  <span>Start Exercises ({lesson.exercises.length} problems) [Enter]</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Interactive Practice Card (ONE AT A TIME + SEAMLESS RETRY QUEUE) */}
          {currentSegment === "practice" && currentExercise && (
            <div className="space-y-4 animate-in fade-in duration-200">
              {/* Exercise Step Tracker */}
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  {inRetryPhase ? (
                    <>
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                      <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
                        🔁 Reinforcement · Problem {retryIndex + 1} of {retryQueue.length}
                      </span>
                    </>
                  ) : (
                    <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                      Problem {practiceIndex + 1} of {lesson.exercises.length}
                    </span>
                  )}
                </div>

                {/* Duolingo-style mini step dots */}
                <div className="flex items-center gap-1.5">
                  {inRetryPhase
                    ? retryQueue.map((ex, idx) => (
                        <span
                          key={`retry-dot-${ex.id}-${idx}`}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            idx === retryIndex
                              ? "w-6 bg-amber-400"
                              : idx < retryIndex
                              ? "w-3 bg-amber-600"
                              : "w-3 bg-white/15"
                          }`}
                        />
                      ))
                    : lesson.exercises.map((ex, idx) => (
                        <span
                          key={ex.id}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            idx === practiceIndex
                              ? "w-6 bg-emerald-400"
                              : idx < practiceIndex
                              ? "w-3 bg-emerald-600"
                              : "w-3 bg-white/15"
                          }`}
                        />
                      ))}
                </div>
              </div>

              {/* Informative Reinforcement Banner when in Retry Phase */}
              {inRetryPhase && (
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-between text-xs text-amber-200">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>
                      Let&apos;s nail the {retryQueue.length} exercise{retryQueue.length > 1 ? "s" : ""} you missed or had spelling slips on!
                    </span>
                  </div>
                  <span className="font-mono text-amber-400 font-bold hidden sm:inline">
                    Step {retryIndex + 1}/{retryQueue.length}
                  </span>
                </div>
              )}

              {/* The Single Bite-Sized Exercise */}
              <ExerciseWidget
                key={inRetryPhase ? `retry_${currentExercise.id}_${retryIndex}` : `init_${currentExercise.id}_${practiceIndex}`}
                exercise={currentExercise}
                isRetry={inRetryPhase}
                onSuccess={handlePracticeSuccess}
                onError={() => handleExerciseError(currentExercise)}
                onQueueRetry={() => handleExerciseError(currentExercise)}
              />

              <div className="flex items-center justify-between px-1 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setInRetryPhase(false);
                    setRetryIndex(0);
                    setCurrentSegment("table");
                  }}
                  className="text-xs font-mono text-slate-500 hover:text-slate-300 transition cursor-pointer"
                >
                  ← Review Transformation Table
                </button>
                {!inRetryPhase && practiceIndex > 0 && (
                  <button
                    type="button"
                    onClick={() => setPracticeIndex((prev) => Math.max(0, prev - 1))}
                    className="text-xs font-mono text-slate-500 hover:text-slate-300 transition cursor-pointer"
                  >
                    Previous Problem
                  </button>
                )}
              </div>
            </div>
          )}

          {/* STEP 5: Summary & Retries */}
          {currentSegment === "summary" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* End-of-Lesson Retry Queue (if any exercises failed) */}
              {retryQueue.length > 0 && !isLessonFinished ? (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 font-mono flex items-center justify-between">
                    <span>🔁 End-of-Lesson Reinforcement</span>
                    <span>{retryQueue.length} items to clear</span>
                  </div>
                  <RetryQueue
                    queue={retryQueue}
                    onCompleteQueue={() => {
                      setRetryQueue([]);
                      handleCompleteAll();
                    }}
                  />
                </div>
              ) : (
                <div className="p-7 rounded-2xl bg-gradient-to-br from-[#1C1D2B] to-[#242638] border border-amber-500/30 space-y-5 shadow-2xl">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400">
                    <Sparkles className="w-4 h-4" /> Lesson Complete
                  </div>

                  <h3 className="text-2xl font-bold text-slate-100">Key Takeaway</h3>
                  <p className="text-slate-300 text-base leading-relaxed">{lesson.summary.takeaway}</p>

                  <div className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-1">
                    <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Curiosity Teaser</div>
                    <p className="text-sm text-cyan-200 italic">{lesson.summary.curiosity_teaser}</p>
                  </div>

                  {/* Atlas Deep-Dive Trail Bridge */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="space-y-0.5">
                      <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                        <Compass className="w-3.5 h-3.5" /> Sound Shift Atlas Bridge
                      </div>
                      <p className="text-xs text-slate-300">
                        {primaryShift
                          ? `Explore all ${primaryShift.word_ids.length} cognates governed by ${primaryShift.symbol} across High German history.`
                          : "Explore all 9 historical shift families connecting English and German."}
                      </p>
                    </div>
                    <Link
                      href={primaryShift ? `/atlas/${primaryShift.id}` : "/atlas"}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-bold transition whitespace-nowrap"
                    >
                      <span>{primaryShift ? `Open ${primaryShift.symbol} Atlas` : "Open Sound Shift Atlas"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={handleCompleteAll}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition cursor-pointer"
                    >
                      {isLessonFinished ? "Lesson Mastered ✓" : "Mark Lesson Finished ✓"}
                    </button>

                    <Link
                      href={lesson.id < 5 ? `/trail/${lesson.id + 1}` : "/trail"}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition cursor-pointer shadow-lg shadow-amber-500/20"
                    >
                      <span>{lesson.id < 5 ? `Next Lesson (${lesson.id + 1}) → [Enter]` : "Back to Trail → [Enter]"}</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Margin Column: Desktop Side Notes */}
        <aside className="hidden lg:block lg:col-span-4 sticky top-24 space-y-4">
          <div className="p-5 rounded-2xl bg-[#161722] border border-white/10 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" /> Margin Notes
            </span>
            <div className="space-y-3 text-xs text-slate-400 leading-relaxed">
              {lesson.hook.footnotes?.map((fn) => (
                <div key={fn.marker} className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <span className="font-mono text-amber-400 font-bold">[{fn.marker}] {fn.title}</span>
                  <p>{fn.content}</p>
                </div>
              ))}
              {lesson.pattern.footnotes?.map((fn) => (
                <div key={fn.marker} className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <span className="font-mono text-cyan-400 font-bold">[{fn.marker}] {fn.title}</span>
                  <p>{fn.content}</p>
                </div>
              ))}
              <div className="p-3 rounded-xl bg-cyan-950/20 border border-cyan-500/10 space-y-1">
                <span className="font-mono text-cyan-400 font-bold">Cognate Clue</span>
                <p>High German shifted sounds 1,300 years ago, leaving English as a living time capsule of ancestral Germanic forms.</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
};
