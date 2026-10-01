"use client";

import React from "react";
import Link from "next/link";
import { HelpCircle } from "lucide-react";
import { ThemeDropdown } from "@/components/common/ThemeDropdown";
import { useAppStore } from "@/lib/store";
import { getLanguageDefinition } from "@/data/languages";
import { getTotalWordCount } from "@/data/language-content";

// Slim identity + customization bar. All destinations live in the bottom dock (BottomNav).
export const TopNav: React.FC = () => {
  const [mounted, setMounted] = React.useState(false);
  const masteredCount = useAppStore((s) => Object.values(s.wordMastery).filter((m) => m === "mastered").length);
  const openOnboarding = useAppStore((s) => s.openOnboarding);
  const showMasteryCounter = useAppStore((s) => s.settings.showMasteryCounter);
  const activeLanguageId = useAppStore((s) => s.activeLanguageId);
  const language = getLanguageDefinition(activeLanguageId);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const totalWords = mounted ? getTotalWordCount(activeLanguageId) : 0;
  const displayMastered = mounted ? masteredCount : 0;

  return (
    <header className="sticky top-0 z-40 w-full bg-[var(--bg-color)] border-b border-[var(--sub-color)]/20 transition-colors">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo & Identity */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-bold text-lg text-[var(--main-color)] font-mono tracking-tighter">bü</span>
          <div className="flex items-baseline gap-1.5">
            <span className="font-bold text-[var(--text-color)] text-base tracking-tight group-hover:text-[var(--main-color)] transition">
              brücke
            </span>
            <span className="text-[10px] font-mono text-[var(--sub-color)] hidden sm:inline">
              {language.name.toLowerCase()} cognates
            </span>
          </div>
        </Link>

        {/* Right side: customization & guide (navigation lives in the bottom dock) */}
        <div className="flex items-center gap-2 sm:gap-3 font-mono text-xs">
          {mounted && showMasteryCounter && (
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded bg-[var(--sub-alt-color)] text-[var(--sub-color)] text-[11px]">
              <span className="text-[var(--main-color)] font-bold">{displayMastered}</span>
              <span>/</span>
              <span>{totalWords} mastered</span>
            </div>
          )}

          <ThemeDropdown />

          <button
            type="button"
            onClick={openOnboarding}
            className="flex items-center gap-1 px-2.5 py-1 rounded text-[var(--sub-color)] hover:text-[var(--text-color)] hover:bg-[var(--sub-alt-color)] transition cursor-pointer"
            title="Interactive Walkthrough Guide"
            aria-label="Open Interactive Guide"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[11px]">guide</span>
          </button>
        </div>
      </div>
    </header>
  );
};
