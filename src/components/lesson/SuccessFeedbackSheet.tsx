"use client";

import React, { useEffect } from "react";
import { CheckCircle2, ArrowRight, Sparkles, BookOpen, AlertCircle } from "lucide-react";
import type { VocabHint } from "@/lib/types";
import { useDialogFocus } from "@/lib/use-dialog-focus";

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
  const dialogRef = React.useRef<HTMLDivElement>(null);
  const isAlmost = variant === "almost";

  useDialogFocus({
    open: true,
    containerRef: dialogRef,
    initialFocusRef: continueBtnRef,
    onEscape: onContinue,
  });

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
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 animate-in fade-in duration-150">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="success-feedback-title"
        className={`w-full sm:max-w-md bg-[var(--bg-color)] border-t sm:border sm:rounded-lg rounded-t-lg shadow-2xl p-6 space-y-5 animate-in slide-in-from-bottom duration-200 font-mono ${
          isAlmost
            ? "border-[var(--sub-color)]/40"
            : "border-[var(--main-color)]/40"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div
            className={`flex items-center gap-2 ${
              isAlmost ? "text-[var(--sub-color)]" : "text-[var(--main-color)]"
            }`}
          >
            {isAlmost ? (
              <Sparkles className="w-5 h-5 shrink-0 text-[var(--sub-color)]" />
            ) : (
              <CheckCircle2 className="w-5 h-5 shrink-0 text-[var(--main-color)]" />
            )}
            <h4 id="success-feedback-title" className="text-sm font-bold font-mono text-[var(--text-color)]">
              {isAlmost ? "almost right — accepted" : "correct"}
            </h4>
          </div>
          {shiftRule && (
            <span className="text-[11px] font-mono px-2 py-0.5 rounded font-bold border border-[var(--sub-color)]/20 bg-[var(--sub-alt-color)] text-[var(--main-color)]">
              {shiftRule}
            </span>
          )}
        </div>

        {/* Almost Right Comparison Callout */}
        {isAlmost && userAttempt && (
          <div className="p-3.5 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/25 space-y-2">
            <div className="flex items-center gap-1.5 text-[var(--sub-color)] font-mono uppercase tracking-wider text-[11px]">
              <AlertCircle className="w-3.5 h-3.5" /> note difference
            </div>
            <div className="flex items-center justify-between text-xs font-mono bg-[var(--bg-color)] p-2.5 rounded border border-[var(--sub-color)]/20">
              <div>
                <span className="text-[var(--sub-color)] block text-[10px] uppercase">your input</span>
                <span className="text-[var(--text-color)] line-through decoration-[var(--sub-color)]">{userAttempt}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-[var(--sub-color)]" />
              <div className="text-right">
                <span className="text-[var(--sub-color)] block text-[10px] uppercase">standard</span>
                <span className="text-[var(--main-color)] font-bold">{targetAnswer}</span>
              </div>
            </div>
            {warningNote && <p className="text-xs text-[var(--sub-color)] leading-relaxed">{warningNote}</p>}
          </div>
        )}

        {/* Answer and Meaning Card */}
        <div className="p-4 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 space-y-2.5">
          <div>
            <span className="text-[11px] font-mono text-[var(--sub-color)] uppercase tracking-wider block">
              german:
            </span>
            <div className="text-xl font-bold text-[var(--main-color)] font-mono">
              {targetAnswer}
            </div>
          </div>

          {meaning && (
            <div className="pt-2 border-t border-[var(--sub-color)]/15">
              <span className="text-[11px] font-mono text-[var(--sub-color)] uppercase tracking-wider block">
                meaning:
              </span>
              <div className="text-sm text-[var(--text-color)] font-medium">
                &ldquo;{meaning}&rdquo;
              </div>
            </div>
          )}
        </div>

        {/* Vocabulary Clue / Reinforcement if present */}
        {vocabHints && vocabHints.length > 0 && (
          <div className="p-3 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 space-y-1.5 text-xs font-mono">
            <div className="flex items-center gap-1.5 text-[var(--sub-color)] uppercase tracking-wider text-[11px]">
              <Sparkles className="w-3.5 h-3.5" /> vocabulary reinforcement
            </div>
            <div className="space-y-1 text-[var(--text-color)]">
              {vocabHints.map((hint) => (
                <div key={hint.word}>
                  <strong className="text-[var(--main-color)] font-mono">{hint.word}</strong> = {hint.translation}
                  {hint.note && <span className="text-[var(--sub-color)] ml-1">({hint.note})</span>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Instructive Explanation */}
        {explanation && (
          <div className="text-xs text-[var(--sub-color)] leading-relaxed bg-[var(--sub-alt-color)] p-3 rounded-lg border border-[var(--sub-color)]/20 flex items-start gap-2 font-mono">
            <BookOpen className="w-4 h-4 text-[var(--main-color)] shrink-0 mt-0.5" />
            <div>{explanation}</div>
          </div>
        )}

        {/* Continue Button */}
        <button
          ref={continueBtnRef}
          type="button"
          onClick={onContinue}
          className="w-full py-3 rounded-lg bg-[var(--main-color)] hover:opacity-90 text-[var(--bg-color)] font-mono font-bold text-xs transition flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>continue</span>
          <span className="keycap text-[10px]">enter</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
