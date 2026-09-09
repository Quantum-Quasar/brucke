"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Compass, Search, ChevronRight } from "lucide-react";
import { DonutChart } from "@/components/common/DonutChart";
import { useAppStore } from "@/lib/store";
import compendium from "@/data/compendium.json";
import type { CompendiumData, ShiftFamily } from "@/lib/types";

const data = compendium as unknown as CompendiumData;

export default function AtlasPage() {
  const [mounted, setMounted] = useState(false);
  const [filterQuery, setFilterQuery] = useState("");
  const wordMastery = useAppStore((s) => s.wordMastery);

  useEffect(() => {
    setMounted(true);
  }, []);

  const shiftList = Object.values(data.shifts);

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
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5" /> 100% Open Constellation Map
          </span>
          <h1 className="text-3xl font-extrabold text-slate-100 tracking-tight mt-1">The Atlas</h1>
          <p className="text-slate-400 text-sm mt-1">
            Follow any rabbit hole. Explore all 9 historical consonant shifts and word trees freely from Day 1.
          </p>
        </div>

        {/* Search / Filter input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="Filter constellations..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#1C1D2B] border border-white/10 text-xs text-slate-200 placeholder-slate-500 outline-none focus:border-cyan-500/50 transition font-mono"
          />
        </div>
      </div>

      {/* Global Mastery Banner */}
      <div className="p-4 rounded-xl bg-[#161722] border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
        <div className="flex items-center gap-6">
          <span className="text-emerald-400 font-semibold">{totalMastered} Mastered ✓</span>
          <span className="text-amber-400 font-semibold">{totalEncountered} In Course ●</span>
          <span className="text-cyan-400 font-semibold">{totalExplored} Explored ○</span>
          <span className="text-slate-500 font-semibold">{totalUnseen} Unseen ·</span>
        </div>
        <span className="text-slate-400">{totalWords} Total Words Indexed</span>
      </div>

      {/* Constellation Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
              className="p-5 rounded-2xl bg-[#1C1D2B] border border-white/10 hover:border-cyan-500/50 transition group flex flex-col justify-between space-y-4 hover:shadow-xl hover:shadow-cyan-500/5"
            >
              <div className="space-y-3">
                {/* Card Top: Symbol & Mini Donut Chart */}
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/20">
                      {family.symbol}
                    </span>
                    <h3 className="text-lg font-bold text-slate-100 mt-2 group-hover:text-amber-300 transition">
                      {family.name}
                    </h3>
                  </div>

                  <DonutChart
                    mastered={mastered}
                    encountered={encountered}
                    explored={explored}
                    unexplored={unexplored}
                    size={46}
                  />
                </div>

                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {family.phonetic_rule}
                </p>

                {/* 3-4 Preview Word Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {previewWords.map((w) => (
                    <span
                      key={w.id}
                      className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[11px] font-mono text-slate-300"
                    >
                      {w.english_cognate} → <span className="text-amber-400 font-semibold">{w.target_word}</span>
                    </span>
                  ))}
                  {words.length > 3 && (
                    <span className="text-[10px] font-mono text-slate-500 self-center">
                      +{words.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>{mastered + encountered}/{words.length} known</span>
                <span className="flex items-center gap-1 text-cyan-400 group-hover:translate-x-0.5 transition">
                  Explore Constellation <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
