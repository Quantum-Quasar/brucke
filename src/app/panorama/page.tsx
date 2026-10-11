// ponytail: the grammar panorama — the second Atlas, for structure instead of sound
//
// The guidebook is emphatic that a *learner* must never be taught vertically
// (§1.6): you do not learn a language by running down a table. But it is equally
// emphatic that the writer must have those tables, and that the learner's trust
// depends on a promise — "we will revisit everything you are uncertain of" — being
// keepable. This page is the keepable version: a consultable, opt-in reference
// layer. No levels, no progress, no gating, nothing that unlocks. Five diagrams
// of the same German the trail teaches horizontally.
//
// Static, SSG, no client state.

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Compass, Languages } from "lucide-react";

export const metadata: Metadata = {
  title: "Grammar Panorama — Brücke",
  description:
    "The whole German structure on one page: the articles as pronouns, the case grid, the verb bracket, the tense map. A reference, never a lesson.",
};

interface Cell {
  label: string;
  note?: string;
}

interface Grid {
  title: string;
  why: string;
  columnHead: string[];
  rowHead: string;
  rows: Array<{ head: string; cells: Cell[] }>;
}

const GRIDS: Grid[] = [
  {
    title: "The words for 'the' are pronouns in disguise",
    why: "German built its articles out of the very pronouns you already speak. Once you can see the pronoun inside the article, the case tables stop being a table and become one sentence repeated.",
    columnHead: ["the", "he / him", "she / her", "it"],
    rowHead: "case",
    rows: [
      {
        head: "who does it (nominative)",
        cells: [
          { label: "der", note: "the" },
          { label: "er / ihn", note: "he / him" },
          { label: "sie", note: "she / her" },
          { label: "es", note: "it" },
        ],
      },
      {
        head: "who receives it (accusative)",
        cells: [
          { label: "den", note: "the" },
          { label: "ihn", note: "him" },
          { label: "sie", note: "her" },
          { label: "es", note: "it" },
        ],
      },
      {
        head: "who gets the result (dative)",
        cells: [
          { label: "dem", note: "the" },
          { label: "ihm", note: "him" },
          { label: "ihr", note: "her" },
          { label: "ihm", note: "it" },
        ],
      },
      {
        head: "whose it is (genitive)",
        cells: [
          { label: "des", note: "the" },
          { label: "seiner", note: "his" },
          { label: "ihrer", note: "her" },
          { label: "seiner", note: "its" },
        ],
      },
    ],
  },
  {
    title: "The verb bracket — German hates being interrupted",
    why: "Two verbs in one sentence make a sandwich: the conjugated one opens, the infinitive or participle closes the door, and everything else lands in the middle. The final verb is the key information, so German saves it for last.",
    columnHead: ["shape", "what sits at the front", "what closes it"],
    rowHead: "sentence",
    rows: [
      {
        head: "Ich will morgen Deutsch lernen",
        cells: [
          { label: "modal + infinitive" },
          { label: "will", note: "position 2" },
          { label: "lernen", note: "the end" },
        ],
      },
      {
        head: "Ich habe das Buch gelesen",
        cells: [
          { label: "Perfekt" },
          { label: "habe", note: "position 2" },
          { label: "gelesen", note: "the end" },
        ],
      },
      {
        head: "Ich weiß, dass sie morgen kommt",
        cells: [
          { label: "dass-clause" },
          { label: "weiß", note: "position 2" },
          { label: "kommt", note: "the very end" },
        ],
      },
      {
        head: "Ich mache das Fenster auf",
        cells: [
          { label: "separable verb" },
          { label: "mache", note: "position 2" },
          { label: "auf", note: "the end — and it is still a verb" },
        ],
      },
    ],
  },
  {
    title: "The adjective carries the feeling of 'the'",
    why: "With a real article the adjective only waves a small flag; with no article it has to carry the whole definite feeling itself — and the endings it chooses mirror the articles it is standing in for.",
    columnHead: ["with 'the'", "with 'a'", "with no article at all"],
    rowHead: "noun",
    rows: [
      {
        head: "der Baum (m)",
        cells: [
          { label: "der groß-e Baum", note: "just -e" },
          { label: "ein groß-er Baum", note: "-er mirrors der" },
          { label: "groß-er Baum", note: "the adjective does it alone" },
        ],
      },
      {
        head: "das Haus (n)",
        cells: [
          { label: "das groß-e Haus", note: "just -e" },
          { label: "ein groß-es Haus", note: "-es mirrors das" },
          { label: "groß-es Haus", note: "the adjective does it alone" },
        ],
      },
      {
        head: "die Frau (f)",
        cells: [
          { label: "die groß-e Frau", note: "just -e" },
          { label: "eine groß-e Frau", note: "-e, as always" },
          { label: "groß-e Frau", note: "the adjective does it alone" },
        ],
      },
    ],
  },
  {
    title: "Time, and how German marks it",
    why: "German does most of its storytelling out loud in two tenses. The written past exists, but the Perfekt is where a learner lives.",
    columnHead: ["spoken everyday", "written / narrative", "built with"],
    rowHead: "meaning",
    rows: [
      {
        head: "I ate",
        cells: [{ label: "Ich habe gegessen" }, { label: "Ich aß" }, { label: "haben + participle" }],
      },
      {
        head: "I went",
        cells: [{ label: "Ich bin gegangen" }, { label: "Ich ging" }, { label: "sein + participle (motion)" }],
      },
      {
        head: "I could",
        cells: [{ label: "Ich konnte" }, { label: "Ich könnte" }, { label: "ablaut, then würden" }],
      },
    ],
  },
  {
    title: "The consonant bridges",
    why: "The same handful of correspondences that give you the vocabulary also give you the grammar — because the articles are pronouns and the pronouns took the same shifts as everything else.",
    columnHead: ["English kept", "German shifted", "proof pair"],
    rowHead: "shift",
    rows: [
      {
        head: "th → d",
        cells: [{ label: "th" }, { label: "d" }, { label: "think → denken, the → der" }],
      },
      {
        head: "p → f / pf",
        cells: [{ label: "p" }, { label: "f / pf" }, { label: "hope → hoffen, path → Pfad" }],
      },
      {
        head: "t → s / ss / z",
        cells: [{ label: "t" }, { label: "s / ss / z" }, { label: "water → Wasser, two → zwei" }],
      },
      {
        head: "k → ch",
        cells: [{ label: "k" }, { label: "ch" }, { label: "make → machen, book → Buch" }],
      },
      {
        head: "d → t",
        cells: [{ label: "d" }, { label: "t" }, { label: "day → Tag, door → Tür" }],
      },
    ],
  },
];

export default function PanoramaPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-10 font-mono text-[var(--text-color)]">
      <header className="space-y-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs text-[var(--sub-color)] hover:text-[var(--main-color)] transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> back to the trail
        </Link>
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--main-color)] font-semibold">
          <Compass className="w-4 h-4" /> grammar panorama
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight">
          The whole structure, on one page
        </h1>
        <p className="text-sm sm:text-base text-[var(--sub-color)] leading-relaxed max-w-2xl">
          The trail teaches German one thought at a time, horizontally — that is where learning
          happens. This page is the opposite view: everything stacked so you can see how it fits.
          Nothing here is a lesson, nothing unlocks, nothing is graded. Come when you want the
          whole picture at once, and leave when you have what you came for.
        </p>
      </header>

      <div className="space-y-12">
        {GRIDS.map((grid) => (
          <section key={grid.title} className="space-y-4">
            <div className="space-y-1.5">
              <h2 className="text-lg sm:text-xl font-bold font-sans text-[var(--text-color)]">
                {grid.title}
              </h2>
              <p className="text-xs text-[var(--sub-color)] leading-relaxed max-w-3xl">
                {grid.why}
              </p>
            </div>

            <div className="overflow-x-auto rounded-lg border border-[var(--sub-color)]/20 bg-[var(--sub-alt-color)]">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[var(--sub-color)]/20">
                    <th className="px-3 py-2.5 text-[var(--sub-color)] uppercase tracking-wider text-[10px] font-semibold">
                      {grid.rowHead}
                    </th>
                    {grid.columnHead.map((h) => (
                      <th
                        key={h}
                        className="px-3 py-2.5 text-[var(--main-color)] uppercase tracking-wider text-[10px] font-semibold"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {grid.rows.map((row) => (
                    <tr key={row.head} className="border-b border-[var(--sub-color)]/10 last:border-0">
                      <th className="px-3 py-3 font-medium text-[var(--text-color)] align-top whitespace-nowrap">
                        {row.head}
                      </th>
                      {row.cells.map((cell, i) => (
                        <td key={i} className="px-3 py-3 align-top">
                          <div className="text-[var(--main-color)] font-bold">{cell.label}</div>
                          {cell.note && (
                            <div className="text-[10px] text-[var(--sub-color)] mt-0.5 leading-tight">
                              {cell.note}
                            </div>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </div>

      <footer className="pt-6 border-t border-[var(--sub-color)]/15 space-y-3">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--main-color)] font-semibold">
          <Languages className="w-4 h-4" /> where this is taught
        </div>
        <ul className="text-xs text-[var(--sub-color)] space-y-1.5 leading-relaxed">
          <li>
            <Link href="/trail/10" className="text-[var(--main-color)] hover:underline">
              Topic 10 · Pronouns as Case Anchors
            </Link>{" "}
            — the Him-Case, and why the pronoun test decides the article.
          </li>
          <li>
            <Link href="/trail/11" className="text-[var(--main-color)] hover:underline">
              Topic 11 · The Article Grid &amp; the ein-Family
            </Link>{" "}
            — der/die/das read as D- plus er, sie, es.
          </li>
          <li>
            <Link href="/trail/19" className="text-[var(--main-color)] hover:underline">
              Topic 19 · The Dative Case
            </Link>{" "}
            — the same pronoun test, one case later.
          </li>
          <li>
            <Link href="/atlas" className="text-[var(--main-color)] hover:underline">
              The Sound Shift Atlas
            </Link>{" "}
            — the consonant panorama, with its own drills.
          </li>
        </ul>
      </footer>
    </main>
  );
}
