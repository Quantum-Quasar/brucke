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
import { getNextPlayableLessonId } from "@/data/curriculum";
import { compendium as data } from "@/data/compendium";
import type { Lesson, ExerciseItem } from "@/lib/types";

interface LessonReaderProps {
  lesson: Lesson;
}

export const LessonReader: React.FC<LessonReaderProps> = ({ lesson }) => {
  const router = useRouter();
  const savedProgress = useAppStore((s) => s.lessonProgress[lesson.id]);
  const [currentSegment, setCurrentSegment] = useState<LessonSegment>(savedProgress?.segment || "hook");
  const [practiceIndex, setPracticeIndex] = useState(savedProgress?.practiceIndex || 0);
  const [retryIndex, setRetryIndex] = useState(0);
  const [inRetryPhase, setInRetryPhase] = useState(false);
  const [completedSegments, setCompletedSegments] = useState<LessonSegment[]>(savedProgress?.completedSegments || []);
  const [retryQueue, setRetryQueue] = useState<ExerciseItem[]>([]);
  const [isLessonFinished, setIsLessonFinished] = useState(false);
  // purple star ledger: stays false only when the retry queue was never touched all lesson
  const [everQueued, setEverQueued] = useState(savedProgress?.everQueued ?? false);

  const primaryShiftId = lesson.shift_categories && lesson.shift_categories[0];
  const primaryShift = primaryShiftId ? data.shifts[primaryShiftId] : null;

  const completeLesson = useAppStore((s) => s.completeLesson);
  const markWordsEncountered = useAppStore((s) => s.markWordsEncountered);
  const setLessonProgress = useAppStore((s) => s.setLessonProgress);

  useEffect(() => {
    setLessonProgress(lesson.id, {
      segment: currentSegment,
      practiceIndex,
      completedSegments,
      everQueued,
    });
  }, [lesson.id, currentSegment, practiceIndex, completedSegments, everQueued, setLessonProgress]);

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
          setEverQueued(false);
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
            const nextId = getNextPlayableLessonId(lesson.id);
            router.push(nextId ? `/trail/${nextId}` : "/");
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
    setEverQueued(true);
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
    completeLesson(lesson.id, { perfect: !everQueued });
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
            className="inline-flex items-center gap-2 text-xs font-mono text-[var(--sub-color)] hover:text-[var(--main-color)] transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Trail
          </Link>
          <span className="text-xs font-mono text-[var(--main-color)] font-medium px-2 py-0.5 rounded bg-[var(--main-color)]/10 border border-[var(--main-color)]/20">
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
          <span className="text-xs font-mono text-[var(--main-color)] uppercase tracking-wider font-semibold">
            Phase {lesson.phase} · Core Shift
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold font-sans text-[var(--text-color)] tracking-tight mt-1">
            {lesson.title}
          </h1>
          <p className="text-base sm:text-lg text-[var(--sub-color)] mt-2 font-normal leading-relaxed">
            {lesson.subtitle}
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Step Card Column */}
        <div className="lg:col-span-8 space-y-6 text-[var(--text-color)] text-base leading-relaxed font-mono">
          {/* STEP 1: The Hook Card */}
          {currentSegment === "hook" && (
            <div className="p-6 sm:p-8 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 space-y-6 shadow-md animate-in fade-in duration-200">
              <div className="flex items-center gap-2 pb-2 border-b border-[var(--sub-color)]/15">
                <span className="text-[var(--main-color)] font-mono text-xs font-bold px-2 py-0.5 rounded bg-[var(--main-color)]/10 border border-[var(--main-color)]/25">
                  01 / intro
                </span>
                <h2 className="text-xl font-bold font-mono text-[var(--text-color)]">{lesson.hook.title}</h2>
              </div>

              <p className="text-[var(--sub-color)] text-sm leading-relaxed">{lesson.hook.content}</p>

              {lesson.hook.footnotes && lesson.hook.footnotes.length > 0 && (
                <div className="p-4 rounded-lg bg-[var(--bg-color)] border border-[var(--sub-color)]/20 space-y-2 lg:hidden font-mono">
                  <span className="text-xs uppercase tracking-wider text-[var(--sub-color)] block">historical notes</span>
                  {lesson.hook.footnotes.map((fn) => (
                    <div key={fn.marker} className="text-xs text-[var(--sub-color)]">
                      <span className="text-[var(--main-color)] font-bold">[{fn.marker}] {fn.title}:</span> {fn.content}
                    </div>
                  ))}
                </div>
              )}

              <div className="pt-4 border-t border-[var(--sub-color)]/15 flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => markSegmentDone("hook", "pattern")}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--main-color)] hover:opacity-90 text-[var(--bg-color)] font-mono font-bold text-xs transition cursor-pointer"
                >
                  <span>next: pattern</span>
                  <span className="keycap text-[10px]">enter</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: The Pattern Card */}
          {currentSegment === "pattern" && (
            <div className="p-6 sm:p-8 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 space-y-6 shadow-md animate-in fade-in duration-200">
              <div className="flex items-center gap-2 pb-2 border-b border-[var(--sub-color)]/15">
                <span className="text-[var(--main-color)] font-mono text-xs font-bold px-2 py-0.5 rounded bg-[var(--main-color)]/10 border border-[var(--main-color)]/25">
                  02 / pattern
                </span>
                <h2 className="text-xl font-bold font-mono text-[var(--text-color)]">{lesson.pattern.title}</h2>
              </div>

              <p className="text-[var(--sub-color)] text-sm leading-relaxed">{lesson.pattern.content}</p>

              {lesson.pattern.linguist_note && (
                <div className="p-4 rounded-lg bg-[var(--bg-color)] border border-[var(--sub-color)]/20 space-y-1.5 text-xs font-mono">
                  <div className="flex items-center gap-1.5 uppercase tracking-wider text-[var(--main-color)] font-semibold">
                    <Info className="w-3.5 h-3.5" /> sound shift rule
                  </div>
                  <p className="text-[var(--sub-color)] leading-relaxed">{lesson.pattern.linguist_note}</p>
                </div>
              )}

              <div className="pt-4 border-t border-[var(--sub-color)]/15 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentSegment("hook")}
                  className="text-xs font-mono text-[var(--sub-color)] hover:text-[var(--text-color)] transition cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3 h-3" />
                  <span>back</span>
                </button>
                <button
                  type="button"
                  onClick={() => markSegmentDone("pattern", "table")}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--main-color)] hover:opacity-90 text-[var(--bg-color)] font-mono font-bold text-xs transition cursor-pointer"
                >
                  <span>next: transformation table</span>
                  <span className="keycap text-[10px]">enter</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Transformation Table Card */}
          {currentSegment === "table" && (
            <div className="p-6 sm:p-8 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 space-y-6 shadow-md animate-in fade-in duration-200">
              <div className="flex items-center justify-between pb-2 border-b border-[var(--sub-color)]/15">
                <div className="flex items-center gap-2">
                  <span className="text-[var(--main-color)] font-mono text-xs font-bold px-2 py-0.5 rounded bg-[var(--main-color)]/10 border border-[var(--main-color)]/25">
                    03 / table
                  </span>
                  <h2 className="text-xl font-bold font-mono text-[var(--text-color)]">transformation table</h2>
                </div>
                <span className="text-xs font-mono text-[var(--sub-color)]">tap word to inspect</span>
              </div>

              <p className="text-xs font-mono text-[var(--sub-color)]">
                shifted consonants highlight historical transformations against english cognates:
              </p>

              <div className="p-4 rounded-lg bg-[var(--bg-color)] border border-[var(--sub-color)]/20">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {lesson.table_word_ids.map((wid) => {
                    const w = data.words[wid.toLowerCase()];
                    if (!w) return null;
                    return (
                      <ShiftPair
                        key={wid}
                        english={w.english_cognate}
                        german={w.target_word}
                        gender={w.gender}
                        rule={w.shift_rule}
                        wordId={w.id}
                        className="w-full justify-between py-2 px-3 bg-[var(--sub-alt-color)] hover:border-[var(--main-color)]/40 border-[var(--sub-color)]/20"
                      />
                    );
                  })}
                </div>
              </div>

              {/* Atlas Constellation Bridge */}
              {primaryShift && (
                <div className="p-4 rounded bg-[var(--bg-color)] border border-[var(--sub-color)]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2 text-xs text-[var(--main-color)] font-semibold">
                      <Compass className="w-3.5 h-3.5" />
                      <span>atlas • {primaryShift.symbol}</span>
                    </div>
                    <p className="text-xs text-[var(--sub-color)]">
                      view all {primaryShift.word_ids.length} cognates in the sound shift atlas.
                    </p>
                  </div>
                  <Link
                    href={`/atlas/${primaryShift.id}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[var(--sub-alt-color)] hover:border-[var(--main-color)] border border-[var(--sub-color)]/20 text-xs text-[var(--text-color)] hover:text-[var(--main-color)] transition whitespace-nowrap"
                  >
                    <span>open atlas</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              )}

              <div className="pt-4 border-t border-[var(--sub-color)]/15 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentSegment("pattern")}
                  className="text-xs font-mono text-[var(--sub-color)] hover:text-[var(--main-color)] transition cursor-pointer"
                >
                  ← Back to Pattern <span className="keycap ml-1">Backspace</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setPracticeIndex(0);
                    setRetryIndex(0);
                    setInRetryPhase(false);
                    setRetryQueue([]);
                    setEverQueued(false);
                    markSegmentDone("table", "practice");
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[var(--main-color)] hover:opacity-90 text-[var(--bg-color)] font-mono font-medium text-sm transition cursor-pointer active:scale-95"
                >
                  <span>Start Exercises ({lesson.exercises.length} problems)</span>
                  <span className="keycap bg-[var(--bg-color)]/20 text-inherit border-none text-[10px]">Enter</span>
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
                      <span className="w-2 h-2 rounded-full bg-[var(--main-color)] animate-pulse" />
                      <span className="text-xs font-mono uppercase tracking-wider text-[var(--main-color)] font-medium">
                        reinforcement · problem {retryIndex + 1} of {retryQueue.length}
                      </span>
                    </>
                  ) : (
                    <span className="text-xs font-mono uppercase tracking-wider text-[var(--main-color)] font-medium">
                      problem {practiceIndex + 1} of {lesson.exercises.length}
                    </span>
                  )}
                </div>

                {/* Duolingo-style mini step dots */}
                <div className="flex items-center gap-1.5">
                  {inRetryPhase
                    ? retryQueue.map((ex, idx) => (
                        <span
                          key={`retry-dot-${ex.id}-${idx}`}
                          className={`h-1 rounded transition-all duration-200 ${
                            idx === retryIndex
                              ? "w-6 bg-[var(--main-color)]"
                              : idx < retryIndex
                              ? "w-3 bg-[var(--main-color)]/50"
                              : "w-3 bg-[var(--sub-color)]/20"
                          }`}
                        />
                      ))
                    : lesson.exercises.map((ex, idx) => (
                        <span
                          key={ex.id}
                          className={`h-1 rounded transition-all duration-200 ${
                            idx === practiceIndex
                              ? "w-6 bg-[var(--main-color)]"
                              : idx < practiceIndex
                              ? "w-3 bg-[var(--main-color)]/50"
                              : "w-3 bg-[var(--sub-color)]/20"
                          }`}
                        />
                      ))}
                </div>
              </div>

              {/* Informative Reinforcement Banner when in Retry Phase */}
              {inRetryPhase && (
                <div className="p-3 rounded bg-[var(--sub-alt-color)] border border-[var(--main-color)]/30 flex items-center justify-between text-xs text-[var(--main-color)] font-mono">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 shrink-0" />
                    <span>
                      reinforcing {retryQueue.length} exercise{retryQueue.length > 1 ? "s" : ""}
                    </span>
                  </div>
                  <span className="hidden sm:inline">
                    step {retryIndex + 1}/{retryQueue.length}
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
                  className="text-xs font-mono text-[var(--sub-color)] hover:text-[var(--main-color)] transition cursor-pointer"
                >
                  ← Review Transformation Table
                </button>
                {!inRetryPhase && practiceIndex > 0 && (
                  <button
                    type="button"
                    onClick={() => setPracticeIndex((prev) => Math.max(0, prev - 1))}
                    className="text-xs font-mono text-[var(--sub-color)] hover:text-[var(--main-color)] transition cursor-pointer"
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
                  <div className="p-3 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 text-xs text-[var(--main-color)] font-mono flex items-center justify-between">
                    <span>reinforcement queue</span>
                    <span className="text-[var(--sub-color)]">{retryQueue.length} items to clear</span>
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
                <div className="p-6 sm:p-8 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 space-y-5 shadow-lg font-mono">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--main-color)] font-semibold">
                    <span>lesson complete</span>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs uppercase tracking-wider text-[var(--main-color)]">after this lesson, you can</div>
                    <p className="text-sm font-semibold text-[var(--text-color)]">{lesson.summary.outcome}</p>
                  </div>

                  <div className="p-4 rounded-lg bg-[var(--bg-color)] border border-[var(--sub-color)]/20 space-y-1">
                    <div className="text-xs uppercase tracking-wider text-[var(--main-color)]">put it to use</div>
                    <p className="text-sm text-[var(--text-color)]">{lesson.summary.use_example.german}</p>
                    <p className="text-xs text-[var(--sub-color)]">{lesson.summary.use_example.english}</p>
                  </div>

                  <h3 className="text-xl font-bold text-[var(--text-color)]">key takeaway</h3>
                  <p className="text-[var(--sub-color)] text-xs leading-relaxed">{lesson.summary.takeaway}</p>

                  <div className="p-4 rounded-lg bg-[var(--bg-color)] border border-[var(--sub-color)]/20 space-y-1">
                    <div className="text-xs uppercase tracking-wider text-[var(--main-color)]">curiosity teaser</div>
                    <p className="text-xs text-[var(--sub-color)] italic">{lesson.summary.curiosity_teaser}</p>
                  </div>

                  {/* Atlas Deep-Dive Trail Bridge */}
                  <div className="p-4 rounded-lg bg-[var(--bg-color)] border border-[var(--sub-color)]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="space-y-0.5">
                      <div className="text-xs uppercase tracking-wider flex items-center gap-1.5 font-semibold text-[var(--main-color)]">
                        <Compass className="w-3.5 h-3.5" /> sound shift atlas bridge
                      </div>
                      <p className="text-xs text-[var(--sub-color)]">
                        {primaryShift
                          ? `explore all ${primaryShift.word_ids.length} cognates governed by ${primaryShift.symbol} across high german history.`
                          : "explore all 9 historical shift families connecting english and german."}
                      </p>
                    </div>
                    <Link
                      href={primaryShift ? `/atlas/${primaryShift.id}` : "/atlas"}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[var(--sub-alt-color)] hover:border-[var(--main-color)] border border-[var(--sub-color)]/20 text-xs text-[var(--text-color)] hover:text-[var(--main-color)] transition whitespace-nowrap"
                    >
                      <span>open atlas</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={handleCompleteAll}
                      className="w-full sm:w-auto px-5 py-2 rounded-lg bg-[var(--bg-color)] hover:border-[var(--main-color)] border border-[var(--sub-color)]/20 text-[var(--text-color)] font-bold text-xs transition cursor-pointer"
                    >
                      {isLessonFinished ? "lesson mastered ✓" : "mark lesson finished ✓"}
                    </button>

                    <Link
                      href={(() => {
                        const nextId = getNextPlayableLessonId(lesson.id);
                        return nextId ? `/trail/${nextId}` : "/";
                      })()}
                      onClick={(event) => {
                        event.preventDefault();
                        handleCompleteAll();
                        const nextId = getNextPlayableLessonId(lesson.id);
                        router.push(nextId ? `/trail/${nextId}` : "/");
                      }}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--main-color)] hover:opacity-90 text-[var(--bg-color)] font-bold text-xs transition cursor-pointer"
                    >
                      <span>
                        {(() => {
                          const nextId = getNextPlayableLessonId(lesson.id);
                          return nextId ? `next lesson (${nextId})` : "back to the trail";
                        })()}
                      </span>
                      <span className="keycap text-[10px]">enter</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Margin Column: Desktop Side Notes */}
        <aside className="hidden lg:block lg:col-span-4 sticky top-24 space-y-4 font-mono">
          <div className="p-5 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[var(--main-color)] flex items-center gap-1.5 font-semibold">
              <BookOpen className="w-3.5 h-3.5" /> margin notes
            </span>
            <div className="space-y-2.5 text-xs text-[var(--sub-color)] leading-relaxed">
              {lesson.hook.footnotes?.map((fn) => (
                <div key={fn.marker} className="p-3 rounded-lg bg-[var(--bg-color)] border border-[var(--sub-color)]/20 space-y-1">
                  <span className="text-[var(--main-color)] font-bold">[{fn.marker}] {fn.title}</span>
                  <p>{fn.content}</p>
                </div>
              ))}
              {lesson.pattern.footnotes?.map((fn) => (
                <div key={fn.marker} className="p-3 rounded-lg bg-[var(--bg-color)] border border-[var(--sub-color)]/20 space-y-1">
                  <span className="text-[var(--main-color)] font-bold">[{fn.marker}] {fn.title}</span>
                  <p>{fn.content}</p>
                </div>
              ))}
              <div className="p-3 rounded-lg bg-[var(--bg-color)] border border-[var(--sub-color)]/20 space-y-1">
                <span className="text-[var(--main-color)] font-bold">cognate clue</span>
                <p>high german shifted consonants 1,300 years ago, leaving english as a living time capsule of ancestral germanic roots.</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
};
