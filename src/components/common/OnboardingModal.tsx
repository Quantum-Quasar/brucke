"use client";

// ponytail: polished, multi-step onboarding wizard introducing Brücke philosophy, notation, and menu tour

import React, { useState, useEffect } from "react";
import {
  Compass,
  BookOpen,
  RotateCcw,
  Search,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Layers,
  CheckCircle2,
  X,
} from "lucide-react";
import { useAppStore } from "@/lib/store";
import { ShiftPair } from "@/components/common/ShiftPair";

export const OnboardingModal: React.FC = () => {
  const isOpen = useAppStore((s) => s.isOnboardingOpen);
  const completeOnboarding = useAppStore((s) => s.completeOnboarding);
  const closeOnboarding = useAppStore((s) => s.closeOnboarding);

  const [step, setStep] = useState(0);
  const [activeShiftDemo, setActiveShiftDemo] = useState(0);

  const shiftDemos = [
    {
      english: "water",
      german: "Wasser",
      gender: "das" as const,
      rule: "t → ss / s",
      wordId: "wasser",
      insight: "English 't' between vowels consistently shifted to German 'ss'. You already know water, better (besser), and bite (beißen).",
    },
    {
      english: "hope",
      german: "hoffen",
      gender: null,
      rule: "p → ff / f",
      wordId: "hoffen",
      insight: "English 'p' shifted to German 'ff' or 'pf'. Consider open (offen), ship (Schiff), and help (helfen).",
    },
    {
      english: "make",
      german: "machen",
      gender: null,
      rule: "k → ch",
      wordId: "machen",
      insight: "English 'k' softened into German 'ch'. Think of book (Buch), cook (kochen), and awake (wachen).",
    },
    {
      english: "brother",
      german: "Bruder",
      gender: "der" as const,
      rule: "th → d",
      wordId: "bruder",
      insight: "German never developed the 'th' sound; English kept it. Every English 'th' becomes a German 'd': that (das), think (denken).",
    },
  ];

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
        e.preventDefault();
        if (step < 3) {
          setStep((s) => s + 1);
        } else {
          completeOnboarding();
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
  }, [isOpen, step, completeOnboarding]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-2xl rounded-3xl bg-[#1C1D2B] border border-cyan-500/30 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Top Bar: Step Progress & Semi-hidden Skip Button */}
        <div className="px-6 sm:px-8 pt-6 pb-4 flex items-center justify-between border-b border-white/5 bg-[#161722]/50">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 font-mono text-xs font-bold">
              Bü
            </div>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest font-semibold">
              Welcome to Brücke • Step {step + 1} of 4
            </span>
          </div>

          {/* Semi-hidden, low-contrast skip button */}
          <button
            type="button"
            onClick={completeOnboarding}
            className="text-[11px] font-mono text-slate-500/70 hover:text-slate-300 transition px-2.5 py-1 rounded bg-white/[0.02] hover:bg-white/5 border border-white/[0.04] cursor-pointer"
            title="Skip onboarding tour (Esc)"
          >
            Skip intro [Esc]
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="px-6 sm:px-8 py-6 overflow-y-auto space-y-6 flex-1">
          {/* STEP 1: PHILOSOPHY */}
          {step === 0 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-2">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  The Core Philosophy
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
                  You Don&apos;t Start From Zero.
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  English and German are sibling languages born from the same ancestral tribe in northern Europe.
                  Over <strong className="text-amber-300 font-semibold">60% of core spoken English vocabulary</strong> has
                  an unbroken Germanic twin. You aren&apos;t memorizing random sounds — you are unlocking patterns you already know.
                </p>
              </div>

              {/* Interactive Sound Shift Demo */}
              <div className="p-4 rounded-2xl bg-[#161722] border border-white/10 space-y-3">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Interactive Preview: The High German Consonant Shift
                </div>

                {/* Shift Selector Pills */}
                <div className="flex flex-wrap gap-2">
                  {shiftDemos.map((demo, idx) => (
                    <button
                      key={demo.english}
                      type="button"
                      onClick={() => setActiveShiftDemo(idx)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition cursor-pointer ${
                        activeShiftDemo === idx
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold"
                          : "bg-white/5 text-slate-400 hover:text-slate-200 border border-white/5"
                      }`}
                    >
                      {demo.english} → {demo.german} ({demo.rule})
                    </button>
                  ))}
                </div>

                {/* Active Demo Card */}
                <div className="p-4 rounded-xl bg-black/30 border border-white/5 text-center space-y-2">
                  <ShiftPair
                    english={shiftDemos[activeShiftDemo].english}
                    german={shiftDemos[activeShiftDemo].german}
                    gender={shiftDemos[activeShiftDemo].gender}
                    rule={shiftDemos[activeShiftDemo].rule}
                    wordId={shiftDemos[activeShiftDemo].wordId}
                    className="text-lg px-3 py-1.5"
                  />
                  <p className="text-xs text-slate-300 max-w-md mx-auto italic">
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
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  How Brücke Teaches
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
                  Linguistic Notation & Living Anchors
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  We designed Brücke to make language learning transparent, intuitive, and grounded in living English words.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Principle 1 */}
                <div className="p-4 rounded-2xl bg-[#161722] border border-white/10 space-y-2">
                  <div className="text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
                    01 • Shift Glow
                  </div>
                  <h3 className="text-sm font-bold text-slate-100">Static Shift Notation</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Shifted letters glow in <span className="text-cyan-400 font-bold">Electric Cyan</span> while the Germanic
                    root remains in <span className="text-amber-300 font-bold">Amber</span>. Your eyes instantly parse the historical shift.
                  </p>
                </div>

                {/* Principle 2 */}
                <div className="p-4 rounded-2xl bg-[#161722] border border-white/10 space-y-2">
                  <div className="text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
                    02 • Living Anchors
                  </div>
                  <h3 className="text-sm font-bold text-slate-100">Living English Words</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    No dead academic roots. We connect German words to everyday English: <strong className="text-slate-200">mit</strong> to <em className="text-amber-200">midwife</em> (&ldquo;with-woman&rdquo;)
                    and <strong className="text-slate-200">will</strong> to <em className="text-amber-200">voluntary</em>.
                  </p>
                </div>

                {/* Principle 3 */}
                <div className="p-4 rounded-2xl bg-[#161722] border border-white/10 space-y-2">
                  <div className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
                    03 • Low Friction
                  </div>
                  <h3 className="text-sm font-bold text-slate-100">Scaffolded Discovery</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Beginner exercises use tactile morpheme tiles and cognate matching. You discover through deduction before ever cold typing.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: THE FOUR PILLARS */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-2">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" />
                  Navigation Tour
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
                  Explore the Four Pillars
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Everything in Brücke connects across four specialized tabs accessible via the navigation bar:
                </p>
              </div>

              <div className="space-y-2.5">
                {/* Pillar 1: Trail */}
                <div className="p-3.5 rounded-xl bg-[#161722] border border-white/10 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-slate-100">The Trail</h4>
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/5 text-slate-400 border border-white/10">
                        30 Lessons
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Structured learning journey with conversational mentor notes, bite-sized Duolingo-style step wizards, and mistake retry queues.
                    </p>
                  </div>
                </div>

                {/* Pillar 2: Atlas */}
                <div className="p-3.5 rounded-xl bg-[#161722] border border-white/10 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-slate-100">The Atlas</h4>
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/5 text-slate-400 border border-white/10">
                        Constellation Map
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Explore 9 consonant shift families and 32 compound calques (e.g. <em>Flugzeug = fly + tool</em>) with 4-tier mastery donut charts.
                    </p>
                  </div>
                </div>

                {/* Pillar 3: Review */}
                <div className="p-3.5 rounded-xl bg-[#161722] border border-white/10 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20 shrink-0">
                    <RotateCcw className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-slate-100">Review Hub</h4>
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/5 text-slate-400 border border-white/10">
                        Multi-Modal SM-2
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Etymological spaced repetition with 4 review styles: <strong>Quick Flip</strong> flashcards, <strong>MCQ</strong> quizzes, <strong>Tile Builder</strong>, and <strong>Typing</strong>.
                    </p>
                  </div>
                </div>

                {/* Pillar 4: Decoder */}
                <div className="p-3.5 rounded-xl bg-[#161722] border border-white/10 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
                    <Search className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-slate-100">Cognate Decoder</h4>
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/5 text-slate-400 border border-white/10">
                        Hotkey ⌘K
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Search any English or German word to reveal direct cognate rules, inflection lemmas, false friends, or Latinate bridge connections.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: READY TO BEGIN */}
          {step === 3 && (
            <div className="space-y-6 text-center py-4 animate-in fade-in duration-200">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500/20 to-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-3xl mx-auto shadow-lg shadow-cyan-500/10">
                ✨
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
                  You Are Ready To Begin.
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Start with Lesson 1 on <strong>The Trail</strong> to meet your first ten German cognates.
                  Progress is saved automatically to your device.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#161722] border border-white/10 max-w-md mx-auto text-xs font-mono text-slate-400 space-y-1 text-left">
                <div className="flex items-center gap-2 text-cyan-400 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Your Brücke Toolkit:</span>
                </div>
                <div className="pl-6 text-slate-300">• <strong>The Trail</strong>: Structured lesson sequence</div>
                <div className="pl-6 text-slate-300">• <strong>⌘K</strong>: Instant cognate search from anywhere</div>
                <div className="pl-6 text-slate-300">• <strong>Tour Button</strong>: Revisit this guide anytime in the header</div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 sm:px-8 py-4 bg-[#161722] border-t border-white/10 flex items-center justify-between gap-4">
          {/* Step indicators */}
          <div className="flex items-center gap-1.5">
            {[0, 1, 2, 3].map((i) => (
              <button
                key={i}
                type="button"
                onClick={() => setStep(i)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  step === i ? "w-6 bg-cyan-400" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                title={`Go to step ${i + 1}`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-3">
            {step > 0 && (
              <button
                type="button"
                onClick={() => setStep((s) => s - 1)}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 transition flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep((s) => s + 1)}
                className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono transition flex items-center gap-1.5 cursor-pointer active:scale-95 shadow-md shadow-cyan-500/20"
              >
                <span>Next Step</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={completeOnboarding}
                className="px-6 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs font-mono transition flex items-center gap-1.5 cursor-pointer active:scale-95 shadow-lg shadow-amber-500/20"
              >
                <span>Start Exploring Brücke</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
