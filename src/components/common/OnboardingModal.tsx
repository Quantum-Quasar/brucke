"use client";

// ponytail: polished, multi-step onboarding wizard — step 1 picks the learning
// language, the remaining steps play that language's own introduction (copy,
// demos, gender section) from the language registry.

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
  Check,
  Clock,
} from "lucide-react";
import { useAppStore } from "@/lib/store";
import { LANGUAGES, getLanguageDefinition, isValidLanguageId } from "@/data/languages";
import { ShiftPair } from "@/components/common/ShiftPair";
import { GenderBadge } from "@/components/common/GenderBadge";
import { useDialogFocus } from "@/lib/use-dialog-focus";

export const OnboardingModal: React.FC = () => {
  const isOpen = useAppStore((s) => s.isOnboardingOpen);
  const hasCompletedOnboarding = useAppStore((s) => s.hasCompletedOnboarding);
  const completeOnboarding = useAppStore((s) => s.completeOnboarding);
  const closeOnboarding = useAppStore((s) => s.closeOnboarding);
  const setActiveLanguage = useAppStore((s) => s.setActiveLanguage);
  const onboardingIntroLanguage = useAppStore((s) => s.onboardingIntroLanguage);
  const router = useRouter();

  // TM-4a: the posture primer is appended as the final step — a one-time, 4-card flow
  const TOTAL_STEPS = 6;
  const PRIMER_STEP = 5;
  const [step, setStep] = useState(0);
  // the language being introduced in this run of the wizard
  const [introLanguageId, setIntroLanguageId] = useState<string | null>(null);
  const [activeShiftDemo, setActiveShiftDemo] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);

  // fall back to the user's current language so the guide button always works
  const storeLanguageId = useAppStore((s) => s.activeLanguageId);
  const effectiveLanguageId = introLanguageId || storeLanguageId;
  const language = getLanguageDefinition(effectiveLanguageId);
  const intro = language.onboarding;

  // only languages with real content are offered — stubs stay in the registry
  // (and get reintroduced in the picker as their content lands)
  const availableLanguages = LANGUAGES.filter((l) => l.status === "available");
  const singleLanguage = availableLanguages.length === 1;
  const firstStep = singleLanguage ? 1 : 0;

  useDialogFocus({
    open: isOpen,
    containerRef: dialogRef,
    onEscape: closeOnboarding,
  });

  // every fresh opening starts a clean run — either the intro queued by a
  // language switch (settings) or the language picker
  const wasOpen = useRef(false);
  useEffect(() => {
    if (isOpen && !wasOpen.current) {
      if (onboardingIntroLanguage && isValidLanguageId(onboardingIntroLanguage)) {
        setIntroLanguageId(onboardingIntroLanguage);
        setStep(1);
      } else if (singleLanguage) {
        setIntroLanguageId(availableLanguages[0].id);
        setStep(1);
      } else {
        setIntroLanguageId(null);
        setStep(0);
      }
      setActiveShiftDemo(0);
    }
    wasOpen.current = isOpen;
  }, [isOpen, onboardingIntroLanguage]);

  const selectLanguage = (id: string) => {
    setIntroLanguageId(id);
    setActiveShiftDemo(0);
    setActiveLanguage(id);
    setStep(1);
  };

  const finishOnboarding = () => {
    const shouldStartLesson = !hasCompletedOnboarding && language.status === "available";
    completeOnboarding();
    if (shouldStartLesson) {
      router.push("/trail/1");
    }
  };

  // Global hotkeys for onboarding modal:
  // - Escape: skips onboarding cleanly (handled by useDialogFocus)
  // - ArrowRight / Enter: next step (or finish)
  // - ArrowLeft: previous step
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || (e.key === "Enter" && !e.shiftKey)) {
        // let focused buttons/links keep their native Enter activation
        const target = e.target as HTMLElement | null;
        if (e.key === "Enter" && target?.closest("button, a, input, select, textarea")) return;
        e.preventDefault();
        if (step < TOTAL_STEPS - 1) {
          setStep((s) => s + 1);
        } else {
          finishOnboarding();
        }
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        if (step > firstStep) {
          setStep((s) => s - 1);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, step, closeOnboarding, language.id, hasCompletedOnboarding, router]);

  if (!isOpen) return null;

  const isAvailable = language.status === "available";

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
              brücke • step {step + 1} / {TOTAL_STEPS}
              {step > 0 && <span className="text-[var(--sub-color)]"> • {language.flag} {language.nativeName}</span>}
            </span>
          </div>

          <button
            type="button"
            onClick={closeOnboarding}
            className="text-xs font-mono text-[var(--sub-color)] hover:text-[var(--text-color)] transition flex items-center gap-1.5 cursor-pointer"
            title="Skip onboarding tour (Esc)"
          >
            <span>skip</span>
            <span className="keycap text-[10px]">esc</span>
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="px-6 sm:px-8 py-6 overflow-y-auto space-y-6 flex-1">
          {/* STEP 1: CHOOSE YOUR LANGUAGE */}
          {step === 0 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-2">
                <span className="text-xs font-mono text-[var(--main-color)] uppercase tracking-wider font-semibold">
                  welcome to brücke
                </span>
                <h2 className="text-2xl font-bold font-mono text-[var(--text-color)] tracking-tight">
                  which language do you want to learn?
                </h2>
                <p className="text-xs font-mono text-[var(--sub-color)] leading-relaxed">
                  every language gets its own trail, its own cognate engine, and its own
                  introduction. you can switch anytime — each language keeps its own progress.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {availableLanguages.map((lang) => (
                  <button
                    key={lang.id}
                    type="button"
                    onClick={() => selectLanguage(lang.id)}
                    className={`p-4 rounded-lg border text-left space-y-2 transition cursor-pointer group ${
                      effectiveLanguageId === lang.id
                        ? "bg-[var(--main-color)]/10 border-[var(--main-color)]/60"
                        : "bg-[var(--sub-alt-color)] border-[var(--sub-color)]/20 hover:border-[var(--main-color)]/40"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-2xl" aria-hidden>{lang.flag}</span>
                      {lang.status === "available" ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono px-1.5 py-0.5 rounded bg-[var(--main-color)]/15 text-[var(--main-color)] font-bold uppercase tracking-wider">
                          <Check className="w-3 h-3" /> available
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono px-1.5 py-0.5 rounded bg-[var(--sub-color)]/15 text-[var(--sub-color)] font-bold uppercase tracking-wider">
                          <Clock className="w-3 h-3" /> soon
                        </span>
                      )}
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-sm font-bold font-mono text-[var(--text-color)] group-hover:text-[var(--main-color)] transition">
                        {lang.name}
                      </div>
                      <div className="text-[10px] font-mono text-[var(--sub-color)] uppercase tracking-wider">
                        {lang.nativeName}
                      </div>
                    </div>
                    <p className="text-[11px] font-mono text-[var(--sub-color)] leading-relaxed">
                      {lang.blurb}
                    </p>
                  </button>
                ))}
              </div>

              {effectiveLanguageId && (
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-[var(--main-color)] hover:opacity-90 text-[var(--bg-color)] font-bold text-xs font-mono transition cursor-pointer"
                >
                  <span>continue with {language.flag} {language.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          )}

          {/* STEP 2: PHILOSOPHY (per language) */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-2">
                <span className="text-xs font-mono text-[var(--main-color)] uppercase tracking-wider font-semibold">
                  {language.flag} {language.name} • core principle
                </span>
                <h2 className="text-2xl font-bold font-mono text-[var(--text-color)] tracking-tight">
                  {intro.philosophy.heading}
                </h2>
                <p className="text-xs font-mono text-[var(--sub-color)] leading-relaxed">
                  {intro.philosophy.body}
                </p>
              </div>

              {/* Interactive demo pairs */}
              <div className="p-4 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 space-y-3">
                <div className="text-xs font-mono text-[var(--sub-color)] uppercase tracking-wider">
                  {intro.philosophy.demoTitle}
                </div>

                {/* Demo Selector Pills */}
                <div className="flex flex-wrap gap-2">
                  {intro.philosophy.demos.map((demo, idx) => (
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
                      {demo.english} → {demo.target}
                    </button>
                  ))}
                </div>

                {/* Active Demo Card */}
                <div className="p-4 rounded-lg bg-[var(--bg-color)] border border-[var(--sub-color)]/20 text-center space-y-2">
                  <ShiftPair
                    english={intro.philosophy.demos[activeShiftDemo].english}
                    german={intro.philosophy.demos[activeShiftDemo].target}
                    gender={intro.philosophy.demos[activeShiftDemo].gender}
                    rule={intro.philosophy.demos[activeShiftDemo].rule}
                    wordId={intro.philosophy.demos[activeShiftDemo].wordId}
                    showDetailsOnClick={Boolean(intro.philosophy.demos[activeShiftDemo].wordId)}
                    className="text-lg px-3 py-1.5"
                  />
                  <p className="text-xs font-mono text-[var(--sub-color)] max-w-md mx-auto italic">
                    &quot;{intro.philosophy.demos[activeShiftDemo].note}&quot;
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: NOTATION & SCAFFOLDING */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-2">
                <span className="text-xs font-mono text-[var(--main-color)] uppercase tracking-wider font-semibold">
                  methodology
                </span>
                <h2 className="text-2xl font-bold font-mono text-[var(--text-color)] tracking-tight">
                  linguistic notation & anchors
                </h2>
                <p className="text-xs font-mono text-[var(--sub-color)] leading-relaxed">
                  {intro.notation.body}
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
                    {intro.notation.anchorsBody}
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

              {/* Principle 4: Grammatical Gender (only for gendered languages) */}
              {intro.notation.showGenders && language.genderSystem ? (
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
              ) : (
                <div className="p-4 sm:p-5 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 space-y-2">
                  <div className="text-[var(--main-color)] font-mono text-xs font-bold uppercase tracking-wider">
                    04 • grammatical gender
                  </div>
                  <p className="text-xs font-mono text-[var(--sub-color)] leading-relaxed">
                    {intro.notation.noGenderNote}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* STEP 4: THE THREE PILLARS */}
          {step === 3 && (
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
                        {isAvailable ? "30 lessons" : "coming soon"}
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
                        {isAvailable ? "constellations" : "coming soon"}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--sub-color)] leading-relaxed">
                      {isAvailable
                        ? "explore 9 consonant shift families and 32 compound calques with 4-tier mastery donut charts."
                        : "explore sound-shift families and compound calques with 4-tier mastery donut charts."}
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

          {/* STEP 5: READY TO BEGIN */}
          {step === 4 && (
            <div className="space-y-6 text-center py-4 animate-in fade-in duration-200">
              <div className="space-y-2 max-w-md mx-auto font-mono">
                <div className="text-3xl" aria-hidden>{language.flag}</div>
                <h2 className="text-2xl font-bold text-[var(--text-color)] tracking-tight">
                  ready to begin {language.flag} {language.name}
                </h2>
                <p className="text-xs text-[var(--sub-color)] leading-relaxed">
                  {intro.ready.body}
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
                <div className="pl-6 text-[var(--text-color)]">• <strong>settings</strong>: theme, fonts, sound, and behavior — progress is stored locally</div>
              </div>
            </div>
          )}
          {/* STEP 6: THE POSTURE PRIMER (TM-4a — how to take the course; taught once, properly) */}
          {step === PRIMER_STEP && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="space-y-2">
                <span className="text-xs font-mono text-[var(--main-color)] uppercase tracking-wider font-semibold">
                  how to take this course
                </span>
                <h2 className="text-2xl font-bold font-mono text-[var(--text-color)] tracking-tight">
                  the posture
                </h2>
                <p className="text-xs font-mono text-[var(--sub-color)] leading-relaxed">
                  four things to know before your first lesson — they matter more than any single answer.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 space-y-1.5">
                  <div className="text-[var(--main-color)] font-mono text-xs font-bold uppercase tracking-wider">
                    01 • pause and say it
                  </div>
                  <p className="text-xs font-mono text-[var(--sub-color)] leading-relaxed">
                    Every exercise has a pause built in. Use it: think the answer through, say it out
                    loud, then type. Thinking slowly here is what makes German fast later.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 space-y-1.5">
                  <div className="text-[var(--main-color)] font-mono text-xs font-bold uppercase tracking-wider">
                    02 • this is a gym, not a test
                  </div>
                  <p className="text-xs font-mono text-[var(--sub-color)] leading-relaxed">
                    Wrong answers are reps. The queue at the end of a lesson isn&apos;t punishment;
                    it&apos;s the second half of the workout. Nothing here is graded against you.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 space-y-1.5">
                  <div className="text-[var(--main-color)] font-mono text-xs font-bold uppercase tracking-wider">
                    03 • words are receipts, thoughts are the goods
                  </div>
                  <p className="text-xs font-mono text-[var(--sub-color)] leading-relaxed">
                    Don&apos;t memorize German words — learn the laws that turn English thoughts into
                    German. When you forget a word, the law will usually rebuild it.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 space-y-1.5">
                  <div className="text-[var(--main-color)] font-mono text-xs font-bold uppercase tracking-wider">
                    04 • let it go
                  </div>
                  <p className="text-xs font-mono text-[var(--sub-color)] leading-relaxed">
                    You will forget things. That&apos;s the design: Review brings them back at the right
                    moment. Never rewind a lesson to chase a word — keep walking.
                  </p>
                </div>
              </div>

              <p className="text-xs font-mono text-[var(--sub-color)] leading-relaxed text-center pt-1">
                Purple means you built every answer by thinking it through, first try.
              </p>
            </div>
          )}
        </div>
        <div className="px-6 py-4 bg-[var(--sub-alt-color)] border-t border-[var(--sub-color)]/20 flex items-center justify-between gap-4 font-mono">
          {/* Step indicators */}
          <div className="flex items-center gap-1.5">
            {Array.from({ length: TOTAL_STEPS }, (_, i) => i).map((i) => (
              <button
                key={i}
                type="button"
                onClick={() => setStep(i)}
                disabled={i < firstStep}
                className={`h-1.5 rounded transition-all ${i < firstStep ? "opacity-30 cursor-default" : "cursor-pointer"} ${
                  step === i ? "w-5 bg-[var(--main-color)]" : "w-1.5 bg-[var(--sub-color)]/30 hover:bg-[var(--sub-color)]/60"
                }`}
                title={`Go to step ${i + 1}`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-2.5">
            {step > firstStep && (
              <button
                type="button"
                onClick={() => setStep((s) => s - 1)}
                className="px-3 py-1.5 rounded bg-[var(--bg-color)] hover:border-[var(--sub-color)] border border-[var(--sub-color)]/20 text-xs font-mono text-[var(--sub-color)] hover:text-[var(--text-color)] transition flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-3 h-3" />
                <span>back</span>
              </button>
            )}

            {step < TOTAL_STEPS - 1 ? (
              <button
                type="button"
                onClick={() => setStep((s) => s + 1)}
                disabled={step === 0 && !effectiveLanguageId}
                className="px-4 py-1.5 rounded bg-[var(--main-color)] hover:opacity-90 disabled:opacity-40 text-[var(--bg-color)] font-bold text-xs font-mono transition flex items-center gap-1.5 cursor-pointer"
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
                <span>
                  {hasCompletedOnboarding
                    ? "close guide"
                    : isAvailable
                    ? "start lesson 1"
                    : "explore the app"}
                </span>
                <ArrowRight className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
