"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Compass, Search, ChevronRight } from "lucide-react";
import { DonutChart } from "@/components/common/DonutChart";
import { useAppStore } from "@/lib/store";
import { getLanguageDefinition } from "@/data/languages";
import { getLanguageContent, EMPTY_COMPENDIUM } from "@/data/language-content";
import { getAtlasFamilies } from "@/lib/atlas-families";

export default function AtlasPage() {
  const [mounted, setMounted] = useState(false);
  const [filterQuery, setFilterQuery] = useState("");
  const wordMastery = useAppStore((s) => s.wordMastery);
  const activeLanguageId = useAppStore((s) => s.activeLanguageId);
  const language = getLanguageDefinition(activeLanguageId);
  const data = getLanguageContent(activeLanguageId).compendium ?? EMPTY_COMPENDIUM;

  useEffect(() => {
    setMounted(true);
  }, []);

  const shiftList = getAtlasFamilies(data);

  // Filter shifts by query
  const filteredShifts = shiftList.filter((s) => {
    if (!filterQuery.trim()) return true;
    const q = filterQuery.toLowerCase();
    return (
      s.name.toLowerCase().includes(q) ||
      s.symbol.toLowerCase().includes(q) ||
      s.phonetic_rule.toLowerCase().includes(q) ||
      s.word_ids.some((wid) => wid.toLowerCase().includes(q))
    );
  });

  // Calculate global stats
  let totalMastered = 0;
  let totalEncountered = 0;
  let totalExplored = 0;
  let totalWords = data.wordList.length;

  if (mounted) {
    for (const w of data.wordList) {
      const m = wordMastery[w.id];
      if (m === "mastered") totalMastered++;
      else if (m === "encountered") totalEncountered++;
      else if (m === "explored") totalExplored++;
    }
  }
  const totalUnseen = totalWords - (totalMastered + totalEncountered + totalExplored);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono text-[var(--main-color)] font-semibold uppercase tracking-wider flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5" /> phonological atlas
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-color)] tracking-tight mt-0.5">
            Sound Shift Families
          </h1>
          <p className="text-xs sm:text-sm text-[var(--sub-color)] mt-0.5">
            The 9 historical sound shift families linking English cognates to High German vocabulary — plus every dictionary word that sits outside them.
          </p>
        </div>

        {/* Search / Filter input */}
        {language.status === "available" && (
        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 text-[var(--sub-color)] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="Filter sound shifts..."
            className="w-full pl-8 pr-3 py-1.5 rounded bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/25 text-xs text-[var(--text-color)] placeholder-[var(--sub-color)] outline-none focus:border-[var(--main-color)] transition font-mono"
          />
        </div>
        )}
      </div>

      {language.status !== "available" && (
        <div className="p-8 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 text-center space-y-3">
          <Compass className="w-8 h-8 text-[var(--main-color)] mx-auto" />
          <h2 className="text-base font-bold font-mono text-[var(--text-color)]">
            the {language.name.toLowerCase()} atlas is under construction
          </h2>
          <p className="text-xs font-mono text-[var(--sub-color)] max-w-md mx-auto leading-relaxed">
            sound-shift constellations arrive with the {language.name} trail. switch languages from
            settings — each language keeps its own atlas exploration.
          </p>
        </div>
      )}

      {/* Global Mastery Banner */}
      {language.status === "available" && (
      <>
      <div className="p-3.5 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <span className="text-[var(--main-color)] font-semibold">{totalMastered} mastered</span>
          <span className="text-[var(--text-color)] font-semibold">{totalEncountered} in course</span>
          <span className="text-[var(--sub-color)] font-semibold">{totalExplored} explored</span>
          <span className="text-[var(--sub-color)]/60 font-semibold">{totalUnseen} unseen</span>
        </div>
        <span className="text-[var(--sub-color)]">{totalWords} total indexed</span>
      </div>

      <Link
        href="/atlas/master"
        className="block p-4 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--main-color)]/40 hover:border-[var(--main-color)] transition group flex items-center justify-between gap-3"
      >
        <div>
          <h3 className="text-sm sm:text-base font-bold text-[var(--text-color)] group-hover:text-[var(--main-color)] transition">
            Master Web — every word, phrase &amp; shift, linked
          </h3>
          <p className="text-xs text-[var(--sub-color)] mt-0.5">
            One graph joining all shift families, compounds, false friends and expressions like „Es tut mir leid." to the words within them.
          </p>
        </div>
        <ChevronRight className="w-5 h-5 text-[var(--main-color)] shrink-0 group-hover:translate-x-0.5 transition" />
      </Link>

      {/* Shift Families Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredShifts.map((family) => {
          const words = family.word_ids.map((id) => data.words[id]).filter(Boolean);
          const mastered = mounted ? words.filter((w) => wordMastery[w.id] === "mastered").length : 0;
          const encountered = mounted ? words.filter((w) => wordMastery[w.id] === "encountered").length : 0;
          const explored = mounted ? words.filter((w) => wordMastery[w.id] === "explored").length : 0;
          const unexplored = words.length - (mastered + encountered + explored);

          const previewWords = words.slice(0, 3);

          return (
            <Link
              key={family.id}
              href={`/atlas/${family.id}`}
              className="p-4 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 hover:border-[var(--main-color)] transition group flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2.5">
                {/* Card Top: Symbol & Mini Donut Chart */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono font-bold text-[var(--main-color)] px-2 py-0.5 rounded bg-[var(--bg-color)] border border-[var(--sub-color)]/25">
                      {family.symbol}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-[var(--text-color)] mt-2 group-hover:text-[var(--main-color)] transition">
                      {family.name}
                    </h3>
                  </div>

                  <DonutChart
                    mastered={mastered}
                    encountered={encountered}
                    explored={explored}
                    unexplored={unexplored}
                    size={42}
                  />
                </div>

                <p className="text-xs text-[var(--sub-color)] line-clamp-2 leading-relaxed">
                  {family.phonetic_rule}
                </p>

                {/* 3 Preview Word Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {previewWords.map((w) => (
                    <span
                      key={w.id}
                      className="px-2 py-0.5 rounded bg-[var(--bg-color)] border border-[var(--sub-color)]/15 text-[11px] font-mono text-[var(--text-color)]"
                    >
                      {w.english_cognate} → <span className="text-[var(--main-color)] font-semibold">{w.target_word}</span>
                    </span>
                  ))}
                  {words.length > 3 && (
                    <span className="text-[10px] font-mono text-[var(--sub-color)] self-center">
                      +{words.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-2.5 border-t border-[var(--sub-color)]/15 flex items-center justify-between text-xs font-mono text-[var(--sub-color)]">
                <span>{mastered + encountered}/{words.length} known</span>
                <span className="flex items-center gap-1 text-[var(--main-color)] group-hover:translate-x-0.5 transition">
                  explore <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
      </>
      )}
    </div>
  );
}
