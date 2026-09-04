"use client";

// ponytail: focused bottom modal sheet presenting letter-by-letter diff and mechanical shift explanation

import React from "react";
import { AlertCircle, ArrowRight, Check } from "lucide-react";
import { computeLetterDiff } from "@/lib/letter-diff";
import { ShiftPair } from "@/components/common/ShiftPair";

interface ErrorFeedbackSheetProps {
  userInput: string;
  expectedAnswer: string;
  englishPrompt?: string;
  shiftRule?: string;
  explanation?: string;
  onContinue: () => void;
}

export const ErrorFeedbackSheet: React.FC<ErrorFeedbackSheetProps> = ({
  userInput,
  expectedAnswer,
  englishPrompt,
  shiftRule,
  explanation,
  onContinue,
}) => {
  const diff = computeLetterDiff(userInput, expectedAnswer);

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full sm:max-w-md bg-[#1C1D2B] border-t sm:border border-rose-500/30 sm:rounded-2xl rounded-t-2xl shadow-2xl p-6 space-y-5 animate-in slide-in-from-bottom duration-200">
        {/* Header */}
        <div className="flex items-center gap-2 text-rose-400">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <h4 className="text-base font-bold text-slate-100 font-mono">Consonant Shift Breakdown</h4>
        </div>

        {/* Letter Comparison */}
        <div className="space-y-3 p-4 rounded-xl bg-[#141522] border border-white/5">
          {/* User Input with character-level diff */}
          <div>
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-1">
              Your Input:
            </span>
            <div className="text-lg font-mono tracking-wide flex flex-wrap gap-0.5">
              {diff.userChars.length > 0 ? (
                diff.userChars.map((c, i) => (
                  <span
                    key={i}
                    className={
                      c.status === "correct"
                        ? "text-slate-200 font-medium"
                        : "text-rose-400 font-bold underline decoration-rose-500 decoration-2 bg-rose-500/15 px-0.5 rounded"
                    }
                  >
                    {c.char}
                  </span>
                ))
              ) : (
                <span className="text-slate-500 italic text-sm">(no input)</span>
              )}
            </div>
          </div>

          {/* Correct Target Form */}
          <div className="pt-2 border-t border-white/5">
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-1">
              Correct Form:
            </span>
            <div className="text-lg font-mono font-bold text-amber-400">
              {expectedAnswer}
            </div>
          </div>

          {englishPrompt && (
            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-mono">Shift Rule:</span>
              <span className="text-cyan-400 font-mono font-bold">{shiftRule || "Consonant Shift"}</span>
            </div>
          )}
        </div>

        {/* Instructive Explanation */}
        {explanation && (
          <div className="text-xs text-slate-300 leading-relaxed bg-white/5 p-3 rounded-xl border border-white/5">
            <span className="text-cyan-300 font-semibold block mb-0.5">Why this shift occurs:</span>
            {explanation}
          </div>
        )}

        {/* Continue Button */}
        <button
          type="button"
          onClick={onContinue}
          className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 active:scale-98 text-slate-950 font-bold text-sm transition flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20"
        >
          <span>Got It — Continue</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
