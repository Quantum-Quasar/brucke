"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, Info } from "lucide-react";
import { RadialConstellation } from "@/components/atlas/RadialConstellation";
import { BranchDrillModal } from "@/components/atlas/BranchDrillModal";
import { ShiftPair } from "@/components/common/ShiftPair";
import compendium from "@/data/compendium.json";
import type { CompendiumData, ShiftFamily } from "@/lib/types";

const data = compendium as unknown as CompendiumData;

export function ConstellationDetailClient({ familyId }: { familyId: string }) {
  const [isDrillOpen, setIsDrillOpen] = useState(false);

  const family: ShiftFamily | undefined = data.shifts[familyId || ""];

  if (!family) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-100">Constellation Not Found</h2>
        <Link href="/atlas" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Atlas Map
        </Link>
      </div>
    );
  }

  const words = family.word_ids.map((id) => data.words[id]).filter(Boolean);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Header & Back Link */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Link href="/atlas" className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Atlas Grid
          </Link>
          <span className="text-xs font-mono text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/20">
            {family.symbol}
          </span>
        </div>

        <div>
          <h1 className="text-3xl font-extrabold text-slate-100 tracking-tight">{family.name}</h1>
          <p className="text-slate-400 text-sm mt-1">{family.phonetic_rule}</p>
        </div>
      </div>

      {/* Radial Spatial Spoke Visualization (Desktop) & Tree (Mobile) */}
      <RadialConstellation family={family} onPracticeBranch={() => setIsDrillOpen(true)} />

      {/* Philological & Historical Linguistics Deep-Dive */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-5 rounded-2xl bg-[#1C1D2B] border border-white/10 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
            <Info className="w-4 h-4" /> Historical Philology
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">{family.historical_linguistics}</p>
          <p className="text-xs text-slate-400 leading-relaxed pt-1">{family.philological_note}</p>
        </div>

        <div className="p-5 rounded-2xl bg-[#1C1D2B] border border-white/10 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400">
            <BookOpen className="w-4 h-4" /> Literature Reference
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">{family.literature_source}</p>
          <div className="pt-3">
            <span className="text-[11px] font-mono text-slate-500">
              Total {words.length} vocabulary roots participating in this shift constellation.
            </span>
          </div>
        </div>
      </div>

      {/* Full Word Roster with Static Shift Annotations */}
      <div className="space-y-4 pt-4 border-t border-white/10">
        <h2 className="text-xl font-bold text-slate-100 flex items-center justify-between">
          <span>All Constellation Members</span>
          <span className="text-xs font-mono text-slate-500 font-normal">{words.length} Words</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {words.map((w) => (
            <div key={w.id} className="p-3 rounded-xl bg-[#1C1D2B] border border-white/10">
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
