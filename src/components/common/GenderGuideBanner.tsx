"use client";

// ponytail: informative, dismissible gender guide banner and compact legend

import React, { useState, useEffect } from "react";
import { Info, X, HelpCircle } from "lucide-react";
import { useAppStore } from "@/lib/store";
import { GenderBadge } from "./GenderBadge";

interface GenderGuideBannerProps {
  compact?: boolean;
}

export const GenderGuideBanner: React.FC<GenderGuideBannerProps> = ({ compact = false }) => {
  const [mounted, setMounted] = useState(false);
  const hasSeenGenderIntro = useAppStore((s) => s.hasSeenGenderIntro);
  const dismissGenderIntro = useAppStore((s) => s.dismissGenderIntro);
  const openGenderIntro = useAppStore((s) => s.openGenderIntro);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    if (compact) {
      return (
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 text-xs font-mono text-[var(--sub-color)] opacity-0 pointer-events-none"
          aria-hidden="true"
        >
          <span>der</span>
          <span>die</span>
          <span>das</span>
        </div>
      );
    }
    return null;
  }

  // In compact mode: always render the legend trigger button
  if (compact) {
    return (
      <button
        type="button"
        onClick={() => openGenderIntro()}
        className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[var(--sub-alt-color)] hover:border-[var(--main-color)] border border-[var(--sub-color)]/20 text-xs font-mono text-[var(--sub-color)] transition cursor-pointer"
        title="Click to view German Gender Article Color Guide"
        aria-label="View German Gender Article Color Guide"
      >
        <span className="text-blue-700 dark:text-blue-400 font-bold">der</span>
        <span className="text-rose-700 dark:text-rose-400 font-bold">die</span>
        <span className="text-emerald-700 dark:text-emerald-400 font-bold">das</span>
        <HelpCircle className="w-3.5 h-3.5 text-[var(--sub-color)] ml-0.5" />
      </button>
    );
  }

  // Full banner: only show if user hasn't dismissed it
  if (hasSeenGenderIntro) {
    return null;
  }

  return (
    <div className="p-4 rounded bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 space-y-3 animate-in fade-in duration-150">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--main-color)] font-bold">
          <Info className="w-4 h-4" />
          <span>Grammatical Gender in German</span>
        </div>
        <button
          type="button"
          onClick={() => dismissGenderIntro()}
          className="text-[var(--sub-color)] hover:text-[var(--text-color)] p-1 rounded hover:bg-[var(--bg-color)] transition cursor-pointer"
          title="Dismiss"
          aria-label="Dismiss grammatical gender banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-xs text-[var(--sub-color)] leading-relaxed">
        In German, <strong className="text-[var(--text-color)]">every noun possesses an inherent grammatical gender</strong>. Brücke visualizes this
        with prominent, high-contrast badges so you absorb gender by sight:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
        <div className="p-3 rounded-lg bg-[var(--bg-color)] border border-blue-500/30 space-y-1">
          <div className="flex items-center justify-between">
            <GenderBadge gender="der" size="sm" />
            <span className="text-[11px] font-mono text-blue-700 dark:text-blue-400 font-bold">Masculine</span>
          </div>
          <p className="text-[11px] text-[var(--sub-color)] pt-0.5">
            e.g. <strong className="text-[var(--text-color)]">der Arm</strong> (the arm), <strong className="text-[var(--text-color)]">der Bruder</strong> (the brother)
          </p>
        </div>

        <div className="p-3 rounded-lg bg-[var(--bg-color)] border border-rose-500/30 space-y-1">
          <div className="flex items-center justify-between">
            <GenderBadge gender="die" size="sm" />
            <span className="text-[11px] font-mono text-rose-700 dark:text-rose-400 font-bold">Feminine</span>
          </div>
          <p className="text-[11px] text-[var(--sub-color)] pt-0.5">
            e.g. <strong className="text-[var(--text-color)]">die Hand</strong> (the hand), <strong className="text-[var(--text-color)]">die Nacht</strong> (the night)
          </p>
        </div>

        <div className="p-3 rounded-lg bg-[var(--bg-color)] border border-emerald-500/30 space-y-1">
          <div className="flex items-center justify-between">
            <GenderBadge gender="das" size="sm" />
            <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 font-bold">Neuter</span>
          </div>
          <p className="text-[11px] text-[var(--sub-color)] pt-0.5">
            e.g. <strong className="text-[var(--text-color)]">das Wasser</strong> (the water), <strong className="text-[var(--text-color)]">das Buch</strong> (the book)
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-1 border-t border-[var(--sub-color)]/10 text-xs text-[var(--sub-color)]">
        <span>Never learn a German noun without its article.</span>
        <button
          type="button"
          onClick={() => dismissGenderIntro()}
          className="px-3.5 py-1 rounded-lg bg-[var(--main-color)] hover:opacity-90 text-[var(--bg-color)] font-bold font-mono text-xs transition cursor-pointer"
        >
          Understood ✓
        </button>
      </div>
    </div>
  );
};
