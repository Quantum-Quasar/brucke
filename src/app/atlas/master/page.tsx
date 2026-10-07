import Link from "next/link";
import { ArrowLeft, Share2 } from "lucide-react";
import { MasterConstellation } from "@/components/atlas/MasterConstellation";

export const metadata = { title: "Master Web — Atlas" };

export default function MasterAtlasPage() {
  return (
    <div className="relative h-[calc(100dvh-110px)] font-sans overflow-hidden">
      {/* The web fills the whole screen */}
      <MasterConstellation />

      {/* Title + stats live in a small hover chip instead of a header block */}
      <div className="absolute top-3 left-3 z-10 group">
        <div className="rounded-lg bg-[var(--sub-alt-color)]/80 backdrop-blur border border-[var(--sub-color)]/20 px-3 py-2 transition opacity-70 group-hover:opacity-100">
          <div className="flex items-center gap-2">
            <Share2 className="w-4 h-4 text-[var(--main-color)]" />
            <span className="text-sm font-bold text-[var(--text-color)]">Master Web</span>
          </div>
          <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-[max-height] duration-200">
            <p className="text-[11px] text-[var(--sub-color)] max-w-64 pt-1.5 leading-relaxed">
              Every shift family, every word, and every phrase — linked into one graph. Phrases like
              <span className="font-mono text-[var(--text-color)]"> „Es tut mir leid." </span>
              connect to the words inside them.
            </p>
            <Link
              href="/atlas"
              className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[var(--sub-color)] hover:text-[var(--text-color)] transition pt-1"
            >
              <ArrowLeft className="w-3 h-3" /> back to atlas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
