"use client";

// ponytail: interactive decoder hero with query pre-population, instant search, and graceful bridges

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, Sparkles, AlertCircle, ExternalLink, ArrowRight, X } from "lucide-react";
import { decodeWord, type DecoderResult } from "@/lib/decoder-engine";
import { ShiftPair } from "@/components/common/ShiftPair";
import { GenderBadge } from "@/components/common/GenderBadge";
import { GenderGuideBanner } from "@/components/common/GenderGuideBanner";
import { useAppStore } from "@/lib/store";

function DecoderContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQuery);
  const [result, setResult] = useState<DecoderResult | null>(null);
  const [isMorphing, setIsMorphing] = useState(false);

  const openWordDrawer = useAppStore((s) => s.openWordDrawer);

  useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery);
    }
  }, [initialQuery]);

  useEffect(() => {
    if (!query.trim()) {
      setResult(null);
      return;
    }

    setIsMorphing(true);
    const timer = setTimeout(() => {
      const res = decodeWord(query);
      setResult(res);
      setIsMorphing(false);
    }, 120);

    return () => clearTimeout(timer);
  }, [query]);

  const sampleWords = ["hope", "water", "think", "brother", "apple", "sleep", "make", "beautiful", "refrigerator", "gift"];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">
      {/* Hero Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>The Real-Time Cognate Engine</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
          The Decoder
        </h1>
        <p className="text-slate-400 text-base max-w-xl mx-auto">
          Type any English word. See the historical consonant shift transform it into its authentic German twin in real time.
        </p>
      </div>

      {/* Gender Guide Banner */}
      <GenderGuideBanner />

      {/* Main Interactive Input Box */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#1C1D2B] border-2 border-white/10 shadow-2xl space-y-6">
        <div className="relative">
          <label htmlFor="decoder-input" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
            Type any English word (or lemma):
          </label>
          <div className="relative flex items-center">
            <Search className="w-6 h-6 text-slate-500 absolute left-4" />
            <input
              id="decoder-input"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. hope, water, think, brother, apple..."
              className="w-full pl-13 pr-10 py-4 rounded-2xl bg-[#161722] border border-white/15 text-slate-100 text-xl font-semibold placeholder-slate-500 outline-none focus:border-cyan-400/80 transition shadow-inner"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 p-1.5 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Morph / Derivation Stage */}
        <div className="min-h-[160px] flex items-center justify-center p-6 rounded-2xl bg-[#141522] border border-white/5 text-center">
          {isMorphing ? (
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm animate-pulse">
              <span>Decoding linguistic shift...</span>
            </div>
          ) : result && result.type === "match" ? (
            <div className="space-y-4 animate-in fade-in duration-200">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                Shift: {result.word.shift_rule}
              </span>

              <div className="flex items-center justify-center">
                <ShiftPair
                  english={result.word.english_cognate}
                  german={result.word.target_word}
                  gender={result.word.gender}
                  rule={result.word.shift_rule}
                  wordId={result.word.id}
                  className="text-xl sm:text-2xl py-3 px-5"
                />
              </div>

              <div className="space-y-1 max-w-lg mx-auto">
                <p className="text-xs text-slate-400 font-mono">{result.word.ipa}</p>
                <p className="text-xs text-slate-300">{result.word.etymology_derivation}</p>
              </div>

              <div className="pt-2 flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => openWordDrawer(result.word.id)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 text-xs font-semibold transition"
                >
                  <span>Open Full Word Entity Card</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : result && result.type === "bridge" ? (
            <div className="space-y-3 max-w-lg text-left animate-in fade-in duration-200">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400">
                <AlertCircle className="w-4 h-4" />
                <span>Latinate Origin Bridge</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                &quot;{result.englishQuery}&quot; comes from <span className="font-semibold text-amber-300">{result.latinOrigin}</span>, so it does not possess a direct Germanic sound shift cognate.
              </p>
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <div className="text-[11px] font-mono text-slate-400">German word:</div>
                <div className="text-xl font-bold text-amber-400 flex items-center gap-2">
                  <GenderBadge gender={result.gender} size="md" />
                  <span>{result.germanTranslation}</span>
                </div>
                <p className="text-xs text-cyan-300 pt-1">{result.etymologicalBridge}</p>
              </div>
            </div>
          ) : result && result.type === "no_match" ? (
            <div className="space-y-1 text-slate-400 text-sm">
              <p className="font-medium text-slate-300">No shift cognate found for &quot;{result.query}&quot;.</p>
              <p className="text-xs text-slate-500">
                Try testing one of the classic Germanic vocabulary items below.
              </p>
            </div>
          ) : (
            <div className="space-y-1 text-slate-500 text-xs font-mono">
              <p>Type a word above to see the consonant shift in motion.</p>
              <p>Try &quot;hope&quot;, &quot;water&quot;, &quot;think&quot;, or &quot;beautiful&quot;.</p>
            </div>
          )}
        </div>

        {/* Quick Example Pills */}
        <div className="space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
            ── Try these examples ──
          </span>
          <div className="flex flex-wrap gap-2">
            {sampleWords.map((word) => (
              <button
                key={word}
                type="button"
                onClick={() => setQuery(word)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition active:scale-95 border ${
                  query.toLowerCase() === word
                    ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/40"
                    : "bg-white/5 hover:bg-white/10 text-slate-300 border-white/5"
                }`}
              >
                {word}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DecoderPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-3xl mx-auto px-4 py-16 text-center text-slate-500 font-mono text-sm">
          Loading Decoder...
        </div>
      }
    >
      <DecoderContent />
    </Suspense>
  );
}
