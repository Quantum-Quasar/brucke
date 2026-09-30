"use client";

// ponytail: polished, multi-step onboarding wizard introducing Brücke philosophy, notation, and menu tour

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Compass,
  BookOpen,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Layers,
  CheckCircle2,
  X,
} from "lucide-react";
import { useAppStore } from "@/lib/store";
import { ShiftPair } from "@/components/common/ShiftPair";
import { GenderBadge } from "@/components/common/GenderBadge";
import { useDialogFocus } from "@/lib/use-dialog-focus";

export const OnboardingModal: React.FC = () => {
  const isOpen = useAppStore((s) => s.isOnboardingOpen);
  const hasCompletedOnboarding = useAppStore((s) => s.hasCompletedOnboarding);
  const completeOnboarding = useAppStore((s) => s.completeOnboarding);
  const router = useRouter();

  const [step, setStep] = useState(0);
  const [activeShiftDemo, setActiveShiftDemo] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);

  useDialogFocus({
    open: isOpen,
    containerRef: dialogRef,
    onEscape: completeOnboarding,
  });

  const shiftDemos = [
    {
      english: "hand",
      german: "Hand",
      gender: "die" as const,
      rule: "direct twin",
      wordId: "hand",
      insight: "English 'hand' is identical to German 'Hand', prominently paired with the vivid rose/feminine article 'die'.",
    },
    {
      english: "water",
      german: "Wasser",
      gender: "das" as const,
      rule: "t → ss / s",
      wordId: "wasser",
      insight: "English 't' between vowels consistently shifted to German 'ss'. Neuter nouns are marked with emerald green 'das'.",
    },
    {
      english: "brother",
      german: "Bruder",
      gender: "der" as const,
      rule: "th → d",
      wordId: "bruder",
      insight: "German never developed 'th'; every English 'th' shifted to 'd'. Masculine nouns take azure blue 'der'.",
    },
    {
      english: "hope",
      german: "hoffen",
      gender: null,
      rule: "p → ff / f",
      wordId: "hoffen",
      insight: "English 'p' shifted to German 'ff' or 'pf'. Verbs do not have grammatical gender and take the universal -en ending.",
    },
  ];

  const finishOnboarding = () => {
    const shouldStartLesson = !hasCompletedOnboarding;
    completeOnboarding();
    if (shouldStartLesson) {
      router.push("/trail/1");
    }
  };

  // Global hotkeys for onboarding modal:
  // - Escape: skips onboarding cleanly
  // - ArrowRight / Enter: next step (or finish)
  // - ArrowLeft: previous step
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        completeOnboarding();
      } else if (e.key === "ArrowRight" || (e.key === "Enter" && !e.shiftKey)) {
        // let focused buttons/links keep their native Enter activation
        const target = e.target as HTMLElement | null;
        if (e.key === "Enter" && target?.closest("button, a, input, select, textarea")) return;
        e.preventDefault();
        if (step < 3) {
          setStep((s) => s + 1);
        } else {
          finishOnboarding();
        }
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        if (step > 0) {
          setStep((s) => s - 1);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, step, completeOnboarding, finishOnboarding, router]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 animate-in fade-in duration-200">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Brücke onboarding"
        className="w-full max-w-2xl rounded-lg bg-[var(--bg-color)] border border-[var(--sub-color)]/30 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
      >
        {/* Modal Top Bar: Step Progress & Skip Button */}
        <div className="px-6 py-4 flex items-center justify-between border-b border-[var(--sub-color)]/20 bg-[var(--sub-alt-color)]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--main-color)] font-semibold">
              brücke • step {step + 1} / 4
            </span>
          </div>

          <button
            type="button"
            onClick={completeOnboarding}
            className="text-xs font-mono text-[var(--sub-color)] hover:text-[var(--text-color)] transition flex items-center gap-1.5 cursor-pointer"
            title="Skip onboarding tour (Esc)"
          >
            <span>skip</span>
            <span className="keycap text-[10px]">esc</span>
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="px-6 sm:px-8 py-6 overflow-y-auto space-y-6 flex-1">
          {/* STEP 1: PHILOSOPHY */}
          {step === 0 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-2">
                <span className="text-xs font-mono text-[var(--main-color)] uppercase tracking-wider font-semibold">
                  core principle
                </span>
                <h2 className="text-2xl font-bold font-mono text-[var(--text-color)] tracking-tight">
                  you don&apos;t start from zero
                </h2>
                <p className="text-xs font-mono text-[var(--sub-color)] leading-relaxed">
                  english and german are sibling languages born from the same ancestral branch.
                  over <strong className="text-[var(--text-color)] font-semibold">60% of core spoken english vocabulary</strong> has
                  an unbroken germanic twin. you aren&apos;t memorizing random sounds — you are unlocking sound shifts you already know.
                </p>
              </div>

              {/* Interactive Sound Shift Demo */}
              <div className="p-4 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 space-y-3">
                <div className="text-xs font-mono text-[var(--sub-color)] uppercase tracking-wider">
                  high german consonant shift demo:
                </div>

                {/* Shift Selector Pills */}
                <div className="flex flex-wrap gap-2">
                  {shiftDemos.map((demo, idx) => (
                    <button
                      key={demo.english}
                      type="button"
                      onClick={() => setActiveShiftDemo(idx)}
                      className={`px-3 py-1.5 rounded text-xs font-mono transition cursor-pointer ${
                        activeShiftDemo === idx
                          ? "bg-[var(--main-color)] text-[var(--bg-color)] font-bold"
                          : "bg-[var(--bg-color)] text-[var(--sub-color)] hover:text-[var(--text-color)] border border-[var(--sub-color)]/20"
                      }`}
                    >
                      {demo.english} → {demo.german}
                    </button>
                  ))}
                </div>

                {/* Active Demo Card */}
                <div className="p-4 rounded-lg bg-[var(--bg-color)] border border-[var(--sub-color)]/20 text-center space-y-2">
                  <ShiftPair
                    english={shiftDemos[activeShiftDemo].english}
                    german={shiftDemos[activeShiftDemo].german}
                    gender={shiftDemos[activeShiftDemo].gender}
                    rule={shiftDemos[activeShiftDemo].rule}
                    wordId={shiftDemos[activeShiftDemo].wordId}
                    className="text-lg px-3 py-1.5"
                  />
                  <p className="text-xs font-mono text-[var(--sub-color)] max-w-md mx-auto italic">
                    &quot;{shiftDemos[activeShiftDemo].insight}&quot;
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: NOTATION & SCAFFOLDING */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-2">
                <span className="text-xs font-mono text-[var(--main-color)] uppercase tracking-wider font-semibold">
                  methodology
                </span>
                <h2 className="text-2xl font-bold font-mono text-[var(--text-color)] tracking-tight">
                  linguistic notation & anchors
                </h2>
                <p className="text-xs font-mono text-[var(--sub-color)] leading-relaxed">
                  brücke makes language learning transparent, intuitive, and grounded in living english cognates.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Principle 1 */}
                <div className="p-4 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 space-y-2">
                  <div className="text-[var(--main-color)] font-mono text-xs font-bold uppercase tracking-wider">
                    01 • sound shift
                  </div>
                  <h3 className="text-xs font-bold font-mono text-[var(--text-color)]">systematic rules</h3>
                  <p className="text-xs font-mono text-[var(--sub-color)] leading-relaxed">
                    shifted consonants are highlighted so your eyes immediately parse historical sound transformations.
                  </p>
                </div>

                {/* Principle 2 */}
                <div className="p-4 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 space-y-2">
                  <div className="text-[var(--main-color)] font-mono text-xs font-bold uppercase tracking-wider">
                    02 • living anchors
                  </div>
                  <h3 className="text-xs font-bold font-mono text-[var(--text-color)]">everyday english</h3>
                  <p className="text-xs font-mono text-[var(--sub-color)] leading-relaxed">
                    we connect german words to everyday english: <strong className="text-[var(--text-color)]">mit</strong> to <em className="text-[var(--main-color)]">midwife</em> and <strong className="text-[var(--text-color)]">will</strong> to <em className="text-[var(--main-color)]">voluntary</em>.
                  </p>
                </div>

                {/* Principle 3 */}
                <div className="p-4 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 space-y-2">
                  <div className="text-[var(--main-color)] font-mono text-xs font-bold uppercase tracking-wider">
                    03 • deduction
                  </div>
                  <h3 className="text-xs font-bold font-mono text-[var(--text-color)]">scaffolded discovery</h3>
                  <p className="text-xs font-mono text-[var(--sub-color)] leading-relaxed">
                    exercises use morpheme tiles and cognate matching so you deduce through logic before cold typing.
                  </p>
                </div>
              </div>

              {/* Principle 4: Grammatical Gender Colors */}
              <div className="p-4 sm:p-5 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-[var(--main-color)] font-mono text-xs font-bold uppercase tracking-wider">
                    04 • the 3 genders
                  </div>
                  <span className="text-xs font-mono text-[var(--sub-color)]">der · die · das</span>
                </div>
                <p className="text-xs font-mono text-[var(--sub-color)] leading-relaxed">
                  in german, <strong className="text-[var(--text-color)]">every noun has an inherent grammatical gender</strong>.
                  brücke pairs high-contrast badges with nouns so visual memory encodes gender:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                  <div className="p-3 rounded-lg bg-[var(--bg-color)] border border-blue-500/30 flex flex-col justify-between gap-1.5">
                    <div className="flex items-center justify-between">
                      <GenderBadge gender="der" size="sm" showLabel />
                      <span className="text-[11px] font-mono font-bold text-blue-400">masculine</span>
                    </div>
                    <p className="text-xs font-mono text-[var(--text-color)]">
                      der Bruder <span className="text-[var(--sub-color)] font-sans text-[11px]">(brother)</span>
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-[var(--bg-color)] border border-rose-500/30 flex flex-col justify-between gap-1.5">
                    <div className="flex items-center justify-between">
                      <GenderBadge gender="die" size="sm" showLabel />
                      <span className="text-[11px] font-mono font-bold text-rose-400">feminine</span>
                    </div>
                    <p className="text-xs font-mono text-[var(--text-color)]">
                      die Hand <span className="text-[var(--sub-color)] font-sans text-[11px]">(hand)</span>
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-[var(--bg-color)] border border-emerald-500/30 flex flex-col justify-between gap-1.5">
                    <div className="flex items-center justify-between">
                      <GenderBadge gender="das" size="sm" showLabel />
                      <span className="text-[11px] font-mono font-bold text-emerald-400">neuter</span>
                    </div>
                    <p className="text-xs font-mono text-[var(--text-color)]">
                      das Wasser <span className="text-[var(--sub-color)] font-sans text-[11px]">(water)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: THE THREE PILLARS */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-2">
                <span className="text-xs font-mono text-[var(--main-color)] uppercase tracking-wider font-semibold">
                  system overview
                </span>
                <h2 className="text-2xl font-bold font-mono text-[var(--text-color)] tracking-tight">
                  three pillars
                </h2>
                <p className="text-xs font-mono text-[var(--sub-color)] leading-relaxed">
                  navigation is organized into three primary workspaces:
                </p>
              </div>

              <div className="space-y-2.5">
                {/* Pillar 1: Trail */}
                <div className="p-3.5 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 flex items-start gap-3 font-mono">
                  <div className="p-2 rounded bg-[var(--bg-color)] text-[var(--main-color)] border border-[var(--sub-color)]/20 shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-[var(--text-color)]">trail</h4>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--bg-color)] text-[var(--sub-color)] border border-[var(--sub-color)]/20">
                        30 lessons
                      </span>
                    </div>
                    <p className="text-xs text-[var(--sub-color)] leading-relaxed">
                      structured step-by-step curriculum with transformation exercises and mistake retry queues.
                    </p>
                  </div>
                </div>

                {/* Pillar 2: Atlas */}
                <div className="p-3.5 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 flex items-start gap-3 font-mono">
                  <div className="p-2 rounded bg-[var(--bg-color)] text-[var(--main-color)] border border-[var(--sub-color)]/20 shrink-0">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-[var(--text-color)]">atlas</h4>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--bg-color)] text-[var(--sub-color)] border border-[var(--sub-color)]/20">
                        constellations
                      </span>
                    </div>
                    <p className="text-xs text-[var(--sub-color)] leading-relaxed">
                      explore 9 consonant shift families and 32 compound calques with 4-tier mastery donut charts.
                    </p>
                  </div>
                </div>

                {/* Pillar 3: Review */}
                <div className="p-3.5 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 flex items-start gap-3 font-mono">
                  <div className="p-2 rounded bg-[var(--bg-color)] text-[var(--main-color)] border border-[var(--sub-color)]/20 shrink-0">
                    <RotateCcw className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-[var(--text-color)]">review</h4>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--bg-color)] text-[var(--sub-color)] border border-[var(--sub-color)]/20">
                        sm-2
                      </span>
                    </div>
                    <p className="text-xs text-[var(--sub-color)] leading-relaxed">
                      spaced repetition with 4 review styles: quick flip, mcq, tile builder, and derivation typing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: READY TO BEGIN */}
          {step === 3 && (
            <div className="space-y-6 text-center py-4 animate-in fade-in duration-200">
              <div className="space-y-2 max-w-md mx-auto font-mono">
                <h2 className="text-2xl font-bold text-[var(--text-color)] tracking-tight">
                  ready to begin
                </h2>
                <p className="text-xs text-[var(--sub-color)] leading-relaxed">
                  start with lesson 1 on the trail to encounter your first ten german cognates.
                  all progress is stored locally in your browser.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 max-w-md mx-auto text-xs font-mono text-[var(--sub-color)] space-y-1.5 text-left">
                <div className="flex items-center gap-2 text-[var(--main-color)] font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>quick guide:</span>
                </div>
                <div className="pl-6 text-[var(--text-color)]">• <strong>trail</strong>: structured lesson sequence</div>
                <div className="pl-6 text-[var(--text-color)]">• <strong>palette</strong>: switch between 187 monkeytype themes</div>
                <div className="pl-6 text-[var(--text-color)]">• <strong>esc / space / 1-4</strong>: full keyboard navigation</div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-4 bg-[var(--sub-alt-color)] border-t border-[var(--sub-color)]/20 flex items-center justify-between gap-4 font-mono">
          {/* Step indicators */}
          <div className="flex items-center gap-1.5">
            {[0, 1, 2, 3].map((i) => (
              <button
                key={i}
                type="button"
                onClick={() => setStep(i)}
                className={`h-1.5 rounded transition-all cursor-pointer ${
                  step === i ? "w-5 bg-[var(--main-color)]" : "w-1.5 bg-[var(--sub-color)]/30 hover:bg-[var(--sub-color)]/60"
                }`}
                title={`Go to step ${i + 1}`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-2.5">
            {step > 0 && (
              <button
                type="button"
                onClick={() => setStep((s) => s - 1)}
                className="px-3 py-1.5 rounded bg-[var(--bg-color)] hover:border-[var(--sub-color)] border border-[var(--sub-color)]/20 text-xs font-mono text-[var(--sub-color)] hover:text-[var(--text-color)] transition flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-3 h-3" />
                <span>back</span>
              </button>
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep((s) => s + 1)}
                className="px-4 py-1.5 rounded bg-[var(--main-color)] hover:opacity-90 text-[var(--bg-color)] font-bold text-xs font-mono transition flex items-center gap-1.5 cursor-pointer"
              >
                <span>next</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            ) : (
              <button
                type="button"
                onClick={finishOnboarding}
                className="px-5 py-1.5 rounded bg-[var(--main-color)] hover:opacity-90 text-[var(--bg-color)] font-bold text-xs font-mono transition flex items-center gap-1.5 cursor-pointer"
              >
                <span>{hasCompletedOnboarding ? "close guide" : "start lesson 1"}</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
