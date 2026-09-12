"use client";

import React, { useState } from "react";
import { X, Zap, CheckCircle2 } from "lucide-react";
import { ExerciseWidget } from "@/components/lesson/ExerciseWidgets";
import compendium from "@/data/compendium.json";
import type { CompendiumData, ShiftFamily, ExerciseItem } from "@/lib/types";

const data = compendium as unknown as CompendiumData;

interface BranchDrillModalProps {
  family: ShiftFamily;
  isOpen: boolean;
  onClose: () => void;
}

export const BranchDrillModal: React.FC<BranchDrillModalProps> = ({ family, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [currentQuestionFailed, setCurrentQuestionFailed] = useState(false);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (isFinished) {
        if (e.key === "Enter" || e.key === " " || e.code === "Space") {
          e.preventDefault();
          onClose();
        } else if (e.key === "r" || e.key === "R") {
          e.preventDefault();
          handleRestart();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isFinished, onClose]);

  if (!isOpen) return null;

  const words = family.word_ids
    .map((id) => data.words[id])
    .filter(Boolean)
    .slice(0, 5);

  const exercises: ExerciseItem[] = words.map((w, idx) => ({
    id: `drill_${w.id}_${idx}`,
    type: "derive",
    prompt: `Apply the ${family.symbol} shift to derive the German word for "${w.english_cognate}":`,
    english_hint: `${w.english_cognate} (${family.symbol})`,
    shift_hint: family.symbol,
    target_answer: w.target_word,
    explanation: w.etymology_derivation,
  }));

  const currentExercise = exercises[currentIndex];

  const handleSuccess = () => {
    if (!currentQuestionFailed) {
      setScore((s) => s + 1);
    }
    setCurrentQuestionFailed(false);
    if (currentIndex + 1 < exercises.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setCurrentQuestionFailed(false);
    setIsFinished(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#1C1D2B] border border-cyan-500/30 rounded-2xl shadow-2xl p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-cyan-400" />
            <h3 className="text-base font-bold text-slate-100 font-mono">
              Branch Sandbox Drill: {family.symbol}
            </h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drill Content */}
        {!isFinished && currentExercise ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Question {currentIndex + 1} of {exercises.length}</span>
              <span className="text-cyan-400 font-bold">Unpenalized Sandbox</span>
            </div>

            <ExerciseWidget
              key={currentExercise.id}
              exercise={currentExercise}
              onSuccess={handleSuccess}
              onError={() => setCurrentQuestionFailed(true)}
            />
          </div>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-slate-100">Sandbox Complete!</h4>
            <p className="text-sm text-slate-400">
              You scored <span className="text-amber-400 font-bold">{score}</span> out of {exercises.length} on the {family.symbol} shift family.
            </p>
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={handleRestart}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 text-sm font-semibold transition"
              >
                Retry Drill [R]
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition"
              >
                Back to Atlas [Enter]
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
