import React from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, Compass, RotateCcw, Sliders, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Brücke — German Cognate Learning",
  description:
    "Learn how Brücke uses the Second High German Consonant Shift to unlock hundreds of German words you already know.",
};

const SHIFT_SAMPLES = [
  { shift: "th → d", english: "brother / water", german: "Bruder / Wasser", note: "The dental fricative flattened into a hard plosive" },
  { shift: "p → f / ff", english: "ship / hope / open", german: "Schiff / hoffen / offen", note: "Voiceless bilabial plosive softened to fricatives" },
  { shift: "t → ss / s / z", english: "water / street / foot", german: "Wasser / Straße / Fuß", note: "Voiceless alveolar shifted post-vocalically" },
  { shift: "k → ch", english: "make / book / speak", german: "machen / Buch / sprechen", note: "Velar stop shifted to velar fricative" },
  { shift: "d → t", english: "day / daughter / dream", german: "Tag / Tochter / Traum", note: "Voiced alveolar plosive hardened to voiceless" },
  { shift: "v / b → b", english: "give / live / love", german: "geben / leben / lieben", note: "Germanic fricative preserved as voiced plosive" },
];

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10 space-y-8 font-sans">
      {/* Header & Back Link */}
      <div className="space-y-3">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--sub-color)] hover:text-[var(--text-color)] transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>return home</span>
        </Link>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-color)]">
          About Brücke
        </h1>
        <p className="text-sm text-[var(--sub-color)] font-mono leading-relaxed">
          The Second High German Consonant Shift as a language acquisition engine.
        </p>
      </div>

      {/* Philosophy Section */}
      <section className="p-6 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 space-y-4">
        <h2 className="text-base font-bold text-[var(--main-color)] font-mono uppercase tracking-wider">
          The Philosophy
        </h2>
        <div className="text-sm leading-relaxed text-[var(--text-color)] space-y-3">
          <p>
            English and German are sister West Germanic languages. For centuries they shared nearly identical
            vocabularies until a massive phonetic shift swept across southern Germany between 500 and 700 AD:
            the <strong>Second High German Consonant Shift</strong> (<em>Zweite Lautverschiebung</em>).
          </p>
          <p>
            English, protected across the North Sea, preserved the ancient Germanic sounds. High German pushed them
            forward. When you learn German traditionally, you are forced to memorize hundreds of words from scratch as if
            they were alien. In reality, you already know them:
          </p>
          <ul className="list-disc pl-5 space-y-1 font-mono text-xs text-[var(--text-color)]">
            <li><span className="text-[var(--main-color)]">Water</span> is <span className="text-[var(--main-color)]">Wasser</span> (T → SS)</li>
            <li><span className="text-[var(--main-color)]">Ship</span> is <span className="text-[var(--main-color)]">Schiff</span> (P → FF)</li>
            <li><span className="text-[var(--main-color)]">Brother</span> is <span className="text-[var(--main-color)]">Bruder</span> (TH → D)</li>
            <li><span className="text-[var(--main-color)]">Make</span> is <span className="text-[var(--main-color)]">machen</span> (K → CH)</li>
          </ul>
          <p>
            <strong>Brücke</strong> (German for &ldquo;bridge&rdquo;) reverses this historical divergence. By training your pattern
            recognition instead of raw rote memorization, you bridge thousands of cognates in days rather than months.
          </p>
        </div>
      </section>

      {/* Shift Overview Table */}
      <section className="p-6 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 space-y-4">
        <h2 className="text-base font-bold text-[var(--main-color)] font-mono uppercase tracking-wider">
          Core Consonant Shifts
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono border-collapse">
            <thead>
              <tr className="border-b border-[var(--sub-color)]/20 text-[var(--sub-color)]">
                <th className="py-2 pr-4">Shift</th>
                <th className="py-2 pr-4">English</th>
                <th className="py-2 pr-4">German</th>
                <th className="py-2">Phonetic Note</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--sub-color)]/10 text-[var(--text-color)]">
              {SHIFT_SAMPLES.map((row) => (
                <tr key={row.shift} className="hover:bg-[var(--bg-color)]/50 transition">
                  <td className="py-2.5 pr-4 font-bold text-[var(--main-color)]">{row.shift}</td>
                  <td className="py-2.5 pr-4">{row.english}</td>
                  <td className="py-2.5 pr-4 font-bold">{row.german}</td>
                  <td className="py-2.5 text-[var(--sub-color)] text-[11px]">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Curriculum & Spaced Repetition */}
      <section className="p-6 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 space-y-4">
        <h2 className="text-base font-bold text-[var(--main-color)] font-mono uppercase tracking-wider">
          Learning Engine & SRS
        </h2>
        <div className="text-sm leading-relaxed text-[var(--text-color)] space-y-3">
          <p>
            Brücke combines structural curriculum with an active SuperMemo-2 (SM-2) spaced repetition algorithm:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 rounded bg-[var(--bg-color)] border border-[var(--sub-color)]/20 space-y-1">
              <div className="font-mono text-xs font-bold text-[var(--main-color)]">The Trail</div>
              <p className="text-xs text-[var(--sub-color)]">
                10 progressive lessons scaffolding from direct cognates to modal verbs, compound calques, and complex syntax.
              </p>
            </div>
            <div className="p-3.5 rounded bg-[var(--bg-color)] border border-[var(--sub-color)]/20 space-y-1">
              <div className="font-mono text-xs font-bold text-[var(--main-color)]">The Atlas</div>
              <p className="text-xs text-[var(--sub-color)]">
                Deep exploration into 9 phonetic shift families with morphological comparisons and literature citations.
              </p>
            </div>
            <div className="p-3.5 rounded bg-[var(--bg-color)] border border-[var(--sub-color)]/20 space-y-1">
              <div className="font-mono text-xs font-bold text-[var(--main-color)]">SM-2 Spaced Review</div>
              <p className="text-xs text-[var(--sub-color)]">
                4 review styles (flashcards, MCQ, morpheme tiles, typing) with adaptive intervals to prevent memory decay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
        <Link
          href="/"
          className="p-3.5 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 hover:border-[var(--main-color)]/50 transition flex flex-col items-center text-center gap-1 group"
        >
          <BookOpen className="w-5 h-5 text-[var(--sub-color)] group-hover:text-[var(--main-color)] transition" />
          <span className="text-xs font-mono font-bold text-[var(--text-color)] mt-1">Trail</span>
          <span className="text-[11px] text-[var(--sub-color)]">10 Lessons</span>
        </Link>
        <Link
          href="/atlas"
          className="p-3.5 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 hover:border-[var(--main-color)]/50 transition flex flex-col items-center text-center gap-1 group"
        >
          <Compass className="w-5 h-5 text-[var(--sub-color)] group-hover:text-[var(--main-color)] transition" />
          <span className="text-xs font-mono font-bold text-[var(--text-color)] mt-1">Atlas</span>
          <span className="text-[11px] text-[var(--sub-color)]">9 Families</span>
        </Link>
        <Link
          href="/review"
          className="p-3.5 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 hover:border-[var(--main-color)]/50 transition flex flex-col items-center text-center gap-1 group"
        >
          <RotateCcw className="w-5 h-5 text-[var(--sub-color)] group-hover:text-[var(--main-color)] transition" />
          <span className="text-xs font-mono font-bold text-[var(--text-color)] mt-1">Review</span>
          <span className="text-[11px] text-[var(--sub-color)]">SM-2 Spaced Hub</span>
        </Link>
        <Link
          href="/settings"
          className="p-3.5 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 hover:border-[var(--main-color)]/50 transition flex flex-col items-center text-center gap-1 group"
        >
          <Sliders className="w-5 h-5 text-[var(--sub-color)] group-hover:text-[var(--main-color)] transition" />
          <span className="text-xs font-mono font-bold text-[var(--text-color)] mt-1">Settings</span>
          <span className="text-[11px] text-[var(--sub-color)]">Themes & Audio</span>
        </Link>
      </section>
    </main>
  );
}
