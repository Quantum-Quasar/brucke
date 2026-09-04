"use client";

// ponytail: native css slide-over drawer and mobile bottom sheet with zero heavy drawer libs

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { X, ExternalLink, Compass, BookOpen, Search, CheckCircle2, Circle, Disc, Minus, Volume2 } from "lucide-react";
import { useAppStore } from "@/lib/store";
import { GenderBadge } from "@/components/common/GenderBadge";
import { playGermanAudio } from "@/lib/audio";
import compendium from "@/data/compendium.json";
import type { CompendiumData, WordEntity } from "@/lib/types";

const data = compendium as unknown as CompendiumData;

export const WordCardDrawer: React.FC = () => {
  const router = useRouter();
  const activeWordId = useAppStore((s) => s.activeWordDrawerId);
  const closeDrawer = useAppStore((s) => s.closeWordDrawer);
  const mastery = useAppStore((s) => (activeWordId ? s.wordMastery[activeWordId] || "unexplored" : "unexplored"));

  if (!activeWordId) return null;

  const word: WordEntity | undefined =
    data.words[activeWordId.toLowerCase()] ||
    data.wordList.find((w) => w.target_word.toLowerCase() === activeWordId.toLowerCase() || w.id === activeWordId.toLowerCase());

  if (!word) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
        <div className="bg-[#1C1D2B] border border-white/10 p-6 rounded-xl max-w-sm w-full text-center">
          <p className="text-slate-300">Word details not found for &quot;{activeWordId}&quot;</p>
          <button
            onClick={closeDrawer}
            className="mt-4 px-4 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded text-sm"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  const shiftFamily = word.sound_shift_ids[0] ? data.shifts[word.sound_shift_ids[0]] : null;
  const relatedCompounds = data.compounds.filter(
    (c) => c.compound.toLowerCase().includes(word.target_word.toLowerCase()) || c.literal_morphemes.toLowerCase().includes(word.target_word.toLowerCase())
  );

  const getMasteryBadge = () => {
    switch (mastery) {
      case "mastered":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border border-emerald-500/40 bg-emerald-500/10 text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" /> Mastered
          </span>
        );
      case "encountered":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border border-amber-500/40 bg-amber-500/10 text-amber-400">
            <Disc className="w-3.5 h-3.5" /> Encountered in Course
          </span>
        );
      case "explored":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border border-cyan-400/40 bg-cyan-400/10 text-cyan-400">
            <Circle className="w-3.5 h-3.5" /> Explored in Atlas
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border border-white/10 bg-white/5 text-slate-400">
            <Minus className="w-3.5 h-3.5" /> Unexplored
          </span>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200">
      {/* Backdrop click to dismiss */}
      <div className="absolute inset-0" onClick={closeDrawer} />

      {/* Drawer Panel: Slide-over on desktop, bottom-sheet on mobile */}
      <div className="relative z-10 flex flex-col w-full sm:max-w-md h-full sm:h-auto sm:min-h-full bg-[#1C1D2B] border-l border-white/10 shadow-2xl overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#1C1D2B]/90 backdrop-blur border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Word Entity</span>
            {getMasteryBadge()}
          </div>
          <button
            onClick={closeDrawer}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition"
            aria-label="Close word drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Word Content */}
        <div className="p-6 space-y-6">
          {/* Main Word + Pronunciation */}
          <div>
            <div className="flex items-center gap-3">
              <GenderBadge gender={word.gender} size="lg" showLabel />
              <h2 className="text-3xl font-bold text-amber-400 tracking-tight">{word.target_word}</h2>
              <button
                type="button"
                onClick={() => playGermanAudio(word.target_word)}
                className="p-1.5 rounded-lg bg-amber-400/10 hover:bg-amber-400/20 text-amber-400 border border-amber-400/20 transition"
                title={`Listen to "${word.target_word}"`}
                aria-label={`Listen to German pronunciation of ${word.target_word}`}
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center gap-3 mt-2 text-sm text-slate-400 font-mono">
              <span>{word.ipa}</span>
              <span>·</span>
              <span className="italic text-slate-300">&quot;{word.english_meaning}&quot;</span>
            </div>
          </div>

          {/* Sound Shift Card */}
          <div className="p-4 rounded-xl bg-[#242638] border border-white/5 space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400">Shift Mechanism</div>
            <div className="flex items-center justify-between">
              <div className="text-base font-medium text-slate-200">
                <span className="text-slate-400">{word.english_cognate}</span>
                <span className="mx-2 text-cyan-400 font-mono">→</span>
                <span className="text-amber-400 font-bold">{word.target_word}</span>
              </div>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                {word.shift_rule}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed pt-1">{word.etymology_derivation}</p>
          </div>

          {/* Cross-Layer Links */}
          <div className="space-y-2.5">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400">Connections</div>
            <div className="grid grid-cols-1 gap-2">
              {word.lesson_index && (
                <Link
                  href={`/trail/${word.lesson_index}`}
                  onClick={closeDrawer}
                  className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-sm text-slate-200 transition group"
                >
                  <div className="flex items-center gap-2.5">
                    <BookOpen className="w-4 h-4 text-amber-400" />
                    <span>Appears in Lesson {word.lesson_index}</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-400 transition" />
                </Link>
              )}

              {shiftFamily && (
                <Link
                  href={`/atlas/${shiftFamily.id}`}
                  onClick={closeDrawer}
                  className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-sm text-slate-200 transition group"
                >
                  <div className="flex items-center gap-2.5">
                    <Compass className="w-4 h-4 text-cyan-400" />
                    <span>Atlas: {shiftFamily.symbol} Constellation</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400 transition" />
                </Link>
              )}

              <button
                onClick={() => {
                  closeDrawer();
                  router.push(`/decoder?q=${encodeURIComponent(word.english_cognate)}`);
                }}
                className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-sm text-slate-200 transition group text-left w-full cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Search className="w-4 h-4 text-slate-400" />
                  <span>Try in Decoder ({word.english_cognate})</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition" />
              </button>
            </div>
          </div>

          {/* Context Phrase / Example */}
          <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/20 space-y-1.5">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400">Context Example</div>
            <p className="text-base text-amber-200 font-medium">{word.context_phrase}</p>
            <p className="text-sm text-slate-400 italic">{word.context_translation}</p>
          </div>

          {/* Related Compounds (if any) */}
          {relatedCompounds.length > 0 && (
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">Related Word Families</div>
              <div className="space-y-1.5">
                {relatedCompounds.map((comp) => (
                  <div key={comp.id} className="p-3 rounded-lg bg-white/5 border border-white/5 text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-amber-300">{comp.compound}</span>
                      <span className="text-slate-400 italic">{comp.real_meaning}</span>
                    </div>
                    <p className="text-slate-400">{comp.lore}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
