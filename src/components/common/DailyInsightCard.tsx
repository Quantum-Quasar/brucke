"use client";

import React, { useState } from "react";
import { Sparkles, Share2, Check, ExternalLink } from "lucide-react";
import type { DailyInsight } from "@/lib/types";

interface DailyInsightCardProps {
  insight: DailyInsight;
  className?: string;
}

export const DailyInsightCard: React.FC<DailyInsightCardProps> = ({ insight, className = "" }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const textToShare = `💡 Daily German Etymology Insight:
"${insight.german_expression}" (${insight.english_meaning})
${insight.cultural_etymology}
Takeaway: ${insight.takeaway_principle}
— Learn German with Brücke`;

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: `Brücke Insight: ${insight.german_expression}`,
          text: textToShare,
        });
        return;
      } catch {}
    }

    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(textToShare);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={`p-5 rounded-2xl bg-[#1C1D2B] border border-white/10 space-y-3 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Daily Cultural Insight · Day {insight.day}</span>
        </div>
        <button
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-slate-300 transition"
          title="Share this etymology insight"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-mono text-[11px]">Copied!</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-mono text-[11px]">Share [↗]</span>
            </>
          )}
        </button>
      </div>

      {/* Expression & Meaning */}
      <div>
        <h4 className="text-xl font-bold text-slate-100 tracking-tight">{insight.german_expression}</h4>
        <p className="text-sm font-mono text-cyan-300 italic">{insight.english_meaning}</p>
      </div>

      {/* Cultural Etymology Text */}
      <p className="text-sm text-slate-300 leading-relaxed">{insight.cultural_etymology}</p>

      {/* Takeaway Principle */}
      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
        <span className="italic">{insight.takeaway_principle}</span>
      </div>
    </div>
  );
};
