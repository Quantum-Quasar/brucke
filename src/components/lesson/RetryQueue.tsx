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
      <div className="p-8 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--main-color)]/30 text-center space-y-4 font-mono">
        <div className="w-12 h-12 rounded bg-[var(--main-color)]/10 text-[var(--main-color)] flex items-center justify-center mx-auto border border-[var(--main-color)]/20">
          <CheckCircle className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-[var(--text-color)]">all retries cleared</h3>
        <p className="text-xs text-[var(--sub-color)]">you have successfully resolved every flagged practice problem.</p>
        <button
          onClick={onCompleteQueue}
          className="px-6 py-2.5 rounded-lg bg-[var(--main-color)] hover:opacity-90 text-[var(--bg-color)] font-bold text-xs transition cursor-pointer flex items-center gap-2 mx-auto"
        >
          <span>finish lesson</span>
          <span className="keycap text-[10px]">enter</span>
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
        <div className="flex items-center gap-2 font-mono">
          <span className="w-2 h-2 rounded-full bg-[var(--main-color)]" />
          <span className="text-xs uppercase tracking-wider text-[var(--main-color)] font-semibold">
            retry queue ({currentIndex + 1} / {queue.length})
          </span>
        </div>
      </div>

      {/* Tolerance Prompt Modal / Banner */}
      {showToleranceModal === "umlaut" && (
        <div className="p-4 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-in fade-in font-mono">
          <div className="flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-[var(--main-color)] shrink-0 mt-0.5" />
            <p className="text-xs text-[var(--sub-color)]">
              umlaut error detected again. enable <span className="text-[var(--text-color)] font-bold">umlaut tolerance</span>?
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => {
                setUmlautTolerance(true);
                setShowToleranceModal(null);
              }}
              className="px-3 py-1 rounded bg-[var(--main-color)] hover:opacity-90 text-[var(--bg-color)] font-bold text-xs cursor-pointer"
            >
              enable
            </button>
            <button
              onClick={() => {
                dismissUmlautPrompt();
                setShowToleranceModal(null);
              }}
              className="px-3 py-1 rounded bg-[var(--bg-color)] border border-[var(--sub-color)]/20 text-[var(--sub-color)] hover:text-[var(--text-color)] text-xs cursor-pointer"
            >
              keep strict
            </button>
          </div>
        </div>
      )}

      {showToleranceModal === "capitalization" && (
        <div className="p-4 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-in fade-in font-mono">
          <div className="flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-[var(--main-color)] shrink-0 mt-0.5" />
            <p className="text-xs text-[var(--sub-color)]">
              capitalization error detected again. enable <span className="text-[var(--text-color)] font-bold">capitalization tolerance</span>?
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => {
                setCapitalizationTolerance(true);
                setShowToleranceModal(null);
              }}
              className="px-3 py-1 rounded bg-[var(--main-color)] hover:opacity-90 text-[var(--bg-color)] font-bold text-xs cursor-pointer"
            >
              enable
            </button>
            <button
              onClick={() => {
                dismissCapitalizationPrompt();
                setShowToleranceModal(null);
              }}
              className="px-3 py-1 rounded bg-[var(--bg-color)] border border-[var(--sub-color)]/20 text-[var(--sub-color)] hover:text-[var(--text-color)] text-xs cursor-pointer"
            >
              keep strict
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
