import Link from "next/link";
import { ArrowLeft, Share2 } from "lucide-react";
import { MasterConstellation } from "@/components/atlas/MasterConstellation";

export const metadata = { title: "Master Web — Atlas" };

export default function MasterAtlasPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-5 font-sans">
      <div className="space-y-2">
        <Link
          href="/atlas"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--sub-color)] hover:text-[var(--text-color)] transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> back to atlas
        </Link>
        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-color)] tracking-tight flex items-center gap-2">
          <Share2 className="w-6 h-6 text-[var(--main-color)]" /> Master Web
        </h1>
        <p className="text-xs sm:text-sm text-[var(--sub-color)]">
          Every shift family, every word, and every phrase — linked into one graph. Phrases like
          <span className="font-mono text-[var(--text-color)]"> „Es tut mir leid." </span>
          connect to the words inside them.
        </p>
      </div>
      <MasterConstellation />
    </div>
  );
}
