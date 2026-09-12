"use client";

import React, { useEffect } from "react";
import { CheckCircle2, ArrowRight, Sparkles, BookOpen, AlertCircle } from "lucide-react";
import type { VocabHint } from "@/lib/types";

interface SuccessFeedbackSheetProps {
  targetAnswer: string;
  meaning?: string;
  explanation?: string;
  vocabHints?: VocabHint[];
  shiftRule?: string;
  variant?: "exact" | "almost";
  userAttempt?: string;
  warningNote?: string;
  onContinue: () => void;
}

export const SuccessFeedbackSheet: React.FC<SuccessFeedbackSheetProps> = ({
  targetAnswer,
  meaning,
  explanation,
  vocabHints,
  shiftRule,
  variant = "exact",
  userAttempt,
  warningNote,
  onContinue,
}) => {
  const continueBtnRef = React.useRef<HTMLButtonElement>(null);
  const isAlmost = variant === "almost";

  // Auto-focus continue button so Enter / Space works immediately without requiring mouse
  useEffect(() => {
    const timer = setTimeout(() => {
      continueBtnRef.current?.focus();
    }, 40);
    return () => clearTimeout(timer);
  }, []);

  // Listen for Enter or Space key to advance immediately
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " " || e.code === "Space") {
        e.preventDefault();
        onContinue();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onContinue]);

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className={`w-full sm:max-w-md bg-[#181C26] border-t sm:border sm:rounded-2xl rounded-t-2xl shadow-2xl p-6 space-y-5 animate-in slide-in-from-bottom duration-200 ${
          isAlmost
            ? "border-amber-500/50 shadow-amber-500/10"
            : "border-emerald-500/40 shadow-emerald-500/10"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div
            className={`flex items-center gap-2 ${
              isAlmost ? "text-amber-400" : "text-emerald-400"
            }`}
          >
            {isAlmost ? (
              <Sparkles className="w-5 h-5 shrink-0 text-amber-400" />
            ) : (
              <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
            )}
            <h4
              className={`text-base font-bold font-mono ${
                isAlmost ? "text-amber-300" : "text-slate-100"
              }`}
            >
              {isAlmost ? "Almost Right — Accepted!" : "Spot On!"}
            </h4>
          </div>
          {shiftRule && (
            <span
              className={`text-[11px] font-mono px-2 py-0.5 rounded font-bold border ${
                isAlmost
                  ? "bg-amber-500/15 text-amber-300 border-amber-500/30"
                  : "bg-emerald-500/10 text-emerald-300 border-emerald-500/20"
              }`}
            >
              {shiftRule}
            </span>
          )}
        </div>

        {/* Almost Right Comparison Callout (Yellow) */}
        {isAlmost && userAttempt && (
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/25 space-y-2">
            <div className="flex items-center gap-1.5 text-amber-400 font-mono font-bold uppercase tracking-wider text-[11px]">
              <AlertCircle className="w-3.5 h-3.5" /> Note the difference
            </div>
            <div className="flex items-center justify-between text-xs font-mono bg-black/30 p-2.5 rounded-lg border border-amber-500/20">
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">Your Input</span>
                <span className="text-slate-300 line-through decoration-amber-400/80">{userAttempt}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-amber-400" />
              <div className="text-right">
                <span className="text-slate-500 block text-[10px] uppercase">Standard Form</span>
                <span className="text-amber-300 font-bold">{targetAnswer}</span>
              </div>
            </div>
            {warningNote && <p className="text-xs text-amber-200/90 leading-relaxed">{warningNote}</p>}
          </div>
        )}

        {/* Answer and Meaning Card */}
        <div className="p-4 rounded-xl bg-[#12141F] border border-white/5 space-y-2.5">
          <div>
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
              German:
            </span>
            <div className="text-xl font-bold text-amber-300 font-mono">
              {targetAnswer}
            </div>
          </div>

          {meaning && (
            <div className="pt-2 border-t border-white/5">
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                Meaning:
              </span>
              <div className="text-base text-slate-200 font-medium">
                &ldquo;{meaning}&rdquo;
              </div>
            </div>
          )}
        </div>

        {/* Vocabulary Clue / Reinforcement if present */}
        {vocabHints && vocabHints.length > 0 && (
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-1.5 text-xs">
            <div className="flex items-center gap-1.5 text-amber-400 font-mono font-bold uppercase tracking-wider text-[11px]">
              <Sparkles className="w-3.5 h-3.5" /> Vocabulary Reinforcement
            </div>
            <div className="space-y-1 text-slate-300">
              {vocabHints.map((hint) => (
                <div key={hint.word}>
                  <strong className="text-amber-300 font-mono">{hint.word}</strong> = {hint.translation}
                  {hint.note && <span className="text-slate-400 ml-1">({hint.note})</span>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Instructive Explanation */}
        {explanation && (
          <div className="text-xs text-slate-400 leading-relaxed bg-white/5 p-3 rounded-xl border border-white/5 flex items-start gap-2">
            <BookOpen className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div>{explanation}</div>
          </div>
        )}

        {/* Continue Button */}
        <button
          ref={continueBtnRef}
          type="button"
          onClick={onContinue}
          className={`w-full py-3.5 rounded-xl font-bold text-sm transition flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-98 focus:outline-none focus:ring-2 ${
            isAlmost
              ? "bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/20 focus:ring-amber-300"
              : "bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/20 focus:ring-emerald-300"
          }`}
        >
          <span>Continue [Enter]</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
