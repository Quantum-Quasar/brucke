"use client";

// ponytail: informative, dismissible gender guide banner and compact legend

import React, { useState } from "react";
import { Info, X, HelpCircle } from "lucide-react";
import { useAppStore } from "@/lib/store";
import { GenderBadge } from "./GenderBadge";

interface GenderGuideBannerProps {
  compact?: boolean;
}

export const GenderGuideBanner: React.FC<GenderGuideBannerProps> = ({ compact = false }) => {
  const hasSeenGenderIntro = useAppStore((s) => s.hasSeenGenderIntro);
  const dismissGenderIntro = useAppStore((s) => s.dismissGenderIntro);
  const [isExpanded, setIsExpanded] = useState(!hasSeenGenderIntro);

  if (compact && !isExpanded) {
    return (
      <button
        type="button"
        onClick={() => setIsExpanded(true)}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 transition cursor-pointer"
        title="Click to view German Gender Article Color Guide"
      >
        <span className="text-blue-400 font-bold">der</span>
        <span className="text-rose-400 font-bold">die</span>
        <span className="text-emerald-400 font-bold">das</span>
        <HelpCircle className="w-3.5 h-3.5 text-slate-400 ml-0.5" />
      </button>
    );
  }

  if (hasSeenGenderIntro && !isExpanded) {
    return null;
  }

  return (
    <div className="p-4 rounded-2xl bg-[#161722] border border-cyan-500/30 shadow-lg space-y-3 animate-in fade-in duration-150">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
          <Info className="w-4 h-4" />
          <span>Grammatical Gender in German</span>
        </div>
        <button
          type="button"
          onClick={() => {
            dismissGenderIntro();
            setIsExpanded(false);
          }}
          className="text-slate-400 hover:text-white p-1 rounded hover:bg-white/5 transition cursor-pointer"
          title="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-xs text-slate-300 leading-relaxed">
        In German, <strong>every noun possesses an inherent grammatical gender</strong>. Brücke visualizes this
        with prominent, high-contrast badges so you absorb gender by sight:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
        <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 space-y-1">
          <div className="flex items-center justify-between">
            <GenderBadge gender="der" size="sm" />
            <span className="text-[11px] font-mono text-blue-300 font-bold">Masculine</span>
          </div>
          <p className="text-[11px] text-slate-300 pt-0.5">
            e.g. <strong className="text-blue-200">der Arm</strong> (the arm), <strong className="text-blue-200">der Bruder</strong> (the brother)
          </p>
        </div>

        <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 space-y-1">
          <div className="flex items-center justify-between">
            <GenderBadge gender="die" size="sm" />
            <span className="text-[11px] font-mono text-rose-300 font-bold">Feminine</span>
          </div>
          <p className="text-[11px] text-slate-300 pt-0.5">
            e.g. <strong className="text-rose-200">die Hand</strong> (the hand), <strong className="text-rose-200">die Nacht</strong> (the night)
          </p>
        </div>

        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-1">
          <div className="flex items-center justify-between">
            <GenderBadge gender="das" size="sm" />
            <span className="text-[11px] font-mono text-emerald-300 font-bold">Neuter</span>
          </div>
          <p className="text-[11px] text-slate-300 pt-0.5">
            e.g. <strong className="text-emerald-200">das Wasser</strong> (the water), <strong className="text-emerald-200">das Buch</strong> (the book)
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-1 border-t border-white/5 text-xs text-slate-400">
        <span>Never learn a German noun without its article.</span>
        <button
          type="button"
          onClick={() => {
            dismissGenderIntro();
            setIsExpanded(false);
          }}
          className="px-3.5 py-1 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold font-mono text-xs transition cursor-pointer"
        >
          Understood ✓
        </button>
      </div>
    </div>
  );
};
