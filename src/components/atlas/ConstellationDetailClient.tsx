"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, Info } from "lucide-react";
import { RadialConstellation } from "@/components/atlas/RadialConstellation";
import { BranchDrillModal } from "@/components/atlas/BranchDrillModal";
import { ShiftPair } from "@/components/common/ShiftPair";
import { useAppStore } from "@/lib/store";
import { getLanguageDefinition } from "@/data/languages";
import { getLanguageContent, EMPTY_COMPENDIUM } from "@/data/language-content";
import type { ShiftFamily } from "@/lib/types";

export function ConstellationDetailClient({ familyId }: { familyId: string }) {
  const [isDrillOpen, setIsDrillOpen] = useState(false);
  const activeLanguageId = useAppStore((s) => s.activeLanguageId);
  const language = getLanguageDefinition(activeLanguageId);
  const data = getLanguageContent(activeLanguageId).compendium ?? EMPTY_COMPENDIUM;

  const family: ShiftFamily | undefined = data.shifts[familyId || ""];

  if (!family) {
    // German-only shift families are German-only routes: another language's
    // atlas is empty until its content is authored, so say that instead of
    // silently rendering German words
    const comingSoon = language.status !== "available";
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-4 font-sans">
        <h2 className="text-xl font-bold text-[var(--text-color)]">
          {comingSoon ? `Atlas comes with the ${language.name.toLowerCase()} trail` : "Family Not Found"}
        </h2>
        {!comingSoon && (
          <p className="text-xs font-mono text-[var(--sub-color)]">No shift family exists at this route.</p>
        )}
        <Link
          href="/atlas"
          className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[var(--main-color)] text-[var(--bg-color)] font-bold text-xs font-mono"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Atlas
        </Link>
      </div>
    );
  }

  const words = family.word_ids.map((id) => data.words[id]).filter(Boolean);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6 font-sans">
      {/* Header & Back Link */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Link
            href="/atlas"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--sub-color)] hover:text-[var(--text-color)] transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> back to atlas
          </Link>
          <span className="text-xs font-mono text-[var(--main-color)] font-bold px-2 py-0.5 rounded bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/25">
            {family.symbol}
          </span>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-color)] tracking-tight">
            {family.name}
          </h1>
          <p className="text-xs sm:text-sm text-[var(--sub-color)] mt-0.5 font-mono">{family.phonetic_rule}</p>
        </div>
      </div>

      {/* Radial Spatial Spoke Visualization (Desktop) & Tree (Mobile) */}
      <RadialConstellation family={family} onPracticeBranch={() => setIsDrillOpen(true)} />

      {/* Philological & Historical Linguistics Deep-Dive */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--main-color)] font-semibold">
            <Info className="w-3.5 h-3.5" /> historical linguistics
          </div>
          <p className="text-xs text-[var(--text-color)]/80 leading-relaxed">{family.historical_linguistics}</p>
          <p className="text-xs text-[var(--sub-color)] leading-relaxed pt-1">{family.philological_note}</p>
        </div>

        <div className="p-4 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--main-color)] font-semibold">
            <BookOpen className="w-3.5 h-3.5" /> literature reference
          </div>
          <p className="text-xs text-[var(--text-color)]/80 leading-relaxed">{family.literature_source}</p>
          <div className="pt-2 border-t border-[var(--sub-color)]/15">
            <span className="text-[11px] font-mono text-[var(--sub-color)]">
              {words.length} vocabulary roots participating in this sound shift.
            </span>
          </div>
        </div>
      </div>

      {/* Full Word Roster */}
      <div className="space-y-3 pt-2">
        <h2 className="text-base font-bold text-[var(--text-color)] flex items-center justify-between font-mono">
          <span>Participating Vocabulary</span>
          <span className="text-xs text-[var(--sub-color)] font-normal">{words.length} words</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
          {words.map((w) => (
            <div
              key={w.id}
              className="p-2.5 rounded bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20"
            >
              <ShiftPair
                english={w.english_cognate}
                german={w.target_word}
                gender={w.gender}
                rule={w.shift_rule}
                wordId={w.id}
                className="w-full justify-between"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 5-Question Branch Practice Drill Modal */}
      <BranchDrillModal
        family={family}
        isOpen={isDrillOpen}
        onClose={() => setIsDrillOpen(false)}
      />
    </div>
  );
}
