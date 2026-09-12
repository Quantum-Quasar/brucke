"use client";

import React, { useState } from "react";
import { CheckCircle, AlertTriangle, ShieldCheck } from "lucide-react";
import { ExerciseWidget } from "./ExerciseWidgets";
import { useAppStore } from "@/lib/store";
import type { ExerciseItem } from "@/lib/types";

interface RetryQueueProps {
  queue: ExerciseItem[];
  onCompleteQueue: () => void;
}

export const RetryQueue: React.FC<RetryQueueProps> = ({ queue, onCompleteQueue }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [errorTypesOnCurrent, setErrorTypesOnCurrent] = useState<string[]>([]);
  const [showToleranceModal, setShowToleranceModal] = useState<"umlaut" | "capitalization" | null>(null);

  const tolerance = useAppStore((s) => s.tolerance);
  const setUmlautTolerance = useAppStore((s) => s.setUmlautTolerance);
  const setCapitalizationTolerance = useAppStore((s) => s.setCapitalizationTolerance);
  const dismissUmlautPrompt = useAppStore((s) => s.dismissUmlautPrompt);
  const dismissCapitalizationPrompt = useAppStore((s) => s.dismissCapitalizationPrompt);

  const currentExercise = queue[currentIndex];

  // Auto-listen for Enter / Space when all retries are cleared
  React.useEffect(() => {
    if (!currentExercise) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " " || e.code === "Space") {
          e.preventDefault();
          onCompleteQueue();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [currentExercise, onCompleteQueue]);

  if (!currentExercise) {
    return (
      <div className="p-8 rounded-2xl bg-[#1C1D2B] border border-emerald-500/30 text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
          <CheckCircle className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-slate-100">All Retries Cleared!</h3>
        <p className="text-sm text-slate-400">You have successfully mastered every practice problem from this lesson.</p>
        <button
          onClick={onCompleteQueue}
          className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition cursor-pointer"
        >
          Finish Lesson → [Enter]
        </button>
      </div>
    );
  }

  const handleSuccess = () => {
    setErrorTypesOnCurrent([]);
    if (currentIndex + 1 < queue.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      onCompleteQueue();
    }
  };

  const handleError = (type: "spelling" | "umlaut" | "capitalization") => {
    const updated = [...errorTypesOnCurrent, type];
    setErrorTypesOnCurrent(updated);

    // If repeat error on umlauts and dismissals < 2
    if (type === "umlaut" && tolerance.umlautDismissals < 2 && !tolerance.umlautTolerance) {
      setShowToleranceModal("umlaut");
    } else if (type === "capitalization" && tolerance.capitalizationDismissals < 2 && !tolerance.capitalizationTolerance) {
      setShowToleranceModal("capitalization");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
            End-of-Lesson Retry Queue ({currentIndex + 1} of {queue.length})
          </span>
        </div>
      </div>

      {/* Tolerance Prompt Modal / Banner */}
      {showToleranceModal === "umlaut" && (
        <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-in fade-in">
          <div className="flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-200">
              Umlaut error detected again. Would you like to enable <span className="font-bold">Umlaut Tolerance</span>? (Allows typing without blocking retries).
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => {
                setUmlautTolerance(true);
                setShowToleranceModal(null);
              }}
              className="px-3 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs"
            >
              Enable
            </button>
            <button
              onClick={() => {
                dismissUmlautPrompt();
                setShowToleranceModal(null);
              }}
              className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 text-xs"
            >
              Keep Practicing
            </button>
          </div>
        </div>
      )}

      {showToleranceModal === "capitalization" && (
        <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-in fade-in">
          <div className="flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-200">
              Capitalization error detected again. Would you like to enable <span className="font-bold">Noun Capitalization Tolerance</span>?
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => {
                setCapitalizationTolerance(true);
                setShowToleranceModal(null);
              }}
              className="px-3 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs"
            >
              Enable
            </button>
            <button
              onClick={() => {
                dismissCapitalizationPrompt();
                setShowToleranceModal(null);
              }}
              className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 text-xs"
            >
              Keep Practicing
            </button>
          </div>
        </div>
      )}

      <ExerciseWidget
        key={currentExercise.id}
        exercise={currentExercise}
        isRetry={true}
        onSuccess={handleSuccess}
        onError={handleError}
      />
    </div>
  );
};
