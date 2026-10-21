"use client";

// ponytail: the grammar panorama — the second Atlas, for structure instead of sound.
// Automatically adapts to the learner's active language (German, French, or Spanish)
// while allowing one-click structural comparison across all three courses.

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Compass, Languages } from "lucide-react";
import { useAppStore } from "@/lib/store";

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

interface LanguagePanorama {
  id: "de" | "fr" | "es";
  name: string;
  intro: string;
  grids: Grid[];
  links: Array<{ href: string; label: string; desc: string }>;
}

const GERMAN_PANORAMA: LanguagePanorama = {
  id: "de",
  name: "German",
  intro:
    "The trail teaches German one thought at a time, horizontally — that is where learning happens. This page is the opposite view: everything stacked so you can see how the articles, the verb bracket, and the sound shifts fit together.",
  grids: [
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
      why: "Two verbs in one sentence make a sandwich: the conjugated one opens, the infinitive or participle closes the door, and everything else lands in the middle.",
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
          cells: [
            { label: "Ich habe gegessen" },
            { label: "Ich aß" },
            { label: "haben + participle" },
          ],
        },
        {
          head: "I went",
          cells: [
            { label: "Ich bin gegangen" },
            { label: "Ich ging" },
            { label: "sein + participle (motion)" },
          ],
        },
        {
          head: "I could",
          cells: [
            { label: "Ich konnte" },
            { label: "Ich könnte" },
            { label: "ablaut, then würden" },
          ],
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
  ],
  links: [
    {
      href: "/trail/10",
      label: "Topic 10 · Pronouns as Case Anchors",
      desc: "the Him-Case, and why the pronoun test decides the article.",
    },
    {
      href: "/trail/11",
      label: "Topic 11 · The Article Grid & the ein-Family",
      desc: "der/die/das read as D- plus er, sie, es.",
    },
    {
      href: "/trail/19",
      label: "Topic 19 · The Dative Case",
      desc: "the same pronoun test, one case later.",
    },
    {
      href: "/atlas",
      label: "The Sound Shift Atlas",
      desc: "the consonant panorama, with its own drills.",
    },
  ],
};

const FRENCH_PANORAMA: LanguagePanorama = {
  id: "fr",
  name: "French",
  intro:
    "French is Latin spoken rapidly in northern Gaul — and Norman French gave English nearly half its vocabulary. This panorama stacks the sound bridges, the pre-verbal clitic slot, the ne … pas bracket, and the two-auxiliary past.",
  grids: [
    {
      title: "The pre-verbal clitic magnet — French puts objects before the verb",
      why: "English trails object pronouns after the verb ('I see it, I give it to him'). French pulls them directly in front of the conjugated verb.",
      columnHead: ["direct object", "indirect receiver", "locative / partitive"],
      rowHead: "person",
      rows: [
        {
          head: "him / it (m)",
          cells: [
            { label: "le (l')", note: "Je le vois (I see it)" },
            { label: "lui", note: "Je lui parle (I speak to him)" },
            { label: "y / en", note: "J'y vais / J'en veux" },
          ],
        },
        {
          head: "her / it (f)",
          cells: [
            { label: "la (l')", note: "Je la prends (I take it)" },
            { label: "lui", note: "Elle lui donne (She gives to her)" },
            { label: "y / en", note: "there / of it" },
          ],
        },
        {
          head: "them (pl)",
          cells: [
            { label: "les", note: "Je les écoute" },
            { label: "leur", note: "Je leur écris (to them)" },
            { label: "y / en", note: "replaces à+noun / de+noun" },
          ],
        },
      ],
    },
    {
      title: "The ne … pas clamp & the Passé Composé split",
      why: "French wraps negation tightly around the first verb (conjugated or auxiliary), leaving the infinitive or past participle outside the clamp.",
      columnHead: ["affirmative", "negated (ne … pas)", "what sits inside the clamp"],
      rowHead: "frame",
      rows: [
        {
          head: "Present tense",
          cells: [
            { label: "Je parle français" },
            { label: "Je ne parle pas français" },
            { label: "parle", note: "conjugated verb" },
          ],
        },
        {
          head: "Modal + infinitive",
          cells: [
            { label: "Je veux partir demain" },
            { label: "Je ne veux pas partir" },
            { label: "veux", note: "partir stays outside" },
          ],
        },
        {
          head: "Passé composé (avoir)",
          cells: [
            { label: "J'ai préparé le café" },
            { label: "Je n'ai pas préparé le café" },
            { label: "ai", note: "auxiliary only" },
          ],
        },
        {
          head: "Passé composé (être)",
          cells: [
            { label: "Elle est arrivée tôt" },
            { label: "Elle n'est pas arrivée" },
            { label: "est", note: "motion/state verbs take être" },
          ],
        },
      ],
    },
    {
      title: "The Norman-French cognate bridges",
      why: "Because 1066 imported Old French into English, thousands of French words differ from English by a single predictable suffix or consonant shift.",
      columnHead: ["English kept", "French evolved", "proof pair"],
      rowHead: "bridge",
      rows: [
        {
          head: "s + t → ˆ (circumflex)",
          cells: [
            { label: "st / s" },
            { label: "ˆ (circumflex)" },
            { label: "forest → forêt, hospital → hôpital, feast → fête" },
          ],
        },
        {
          head: "-ty → -ité",
          cells: [
            { label: "-ty" },
            { label: "-ité" },
            { label: "university → université, liberty → liberté" },
          ],
        },
        {
          head: "-or → -eur",
          cells: [
            { label: "-or / -our" },
            { label: "-eur" },
            { label: "color → couleur, doctor → docteur, actor → acteur" },
          ],
        },
        {
          head: "w- → gu- / g-",
          cells: [
            { label: "w-" },
            { label: "gu- / g-" },
            { label: "war → guerre, ward → garder, warrant → garantir" },
          ],
        },
      ],
    },
  ],
  links: [
    {
      href: "/trail/12",
      label: "Topic 12 · The ne … pas Clamp",
      desc: "wrapping negation around the conjugated verb.",
    },
    {
      href: "/trail/18",
      label: "Topic 18 · Passé Composé: avoir vs être",
      desc: "how French builds the conversational past.",
    },
    {
      href: "/trail/20",
      label: "Topic 20 · Pre-Verbal Object Pronouns",
      desc: "le, la, les, lui, leur, y, and en in motion.",
    },
    {
      href: "/atlas",
      label: "The Sound Shift Atlas",
      desc: "all 9 French-English philological bridges.",
    },
  ],
};

const SPANISH_PANORAMA: LanguagePanorama = {
  id: "es",
  name: "Spanish",
  intro:
    "Spanish is spoken Vulgar Latin with crisp five-vowel acoustics and transparent Latin suffixes. This panorama stacks the ser vs. estar split, pre-verbal & enclitic object pronouns, and the Castilian sound shifts.",
  grids: [
    {
      title: "Two ways 'to be' — ser (essence) vs. estar (state & location)",
      why: "Latin esse (identity/essence) and stare (to stand in a state or place) both survived in Spanish. Picking between them changes whether you are naming what something IS or how/where it STANDS.",
      columnHead: ["ser (essence / identity)", "estar (state / location)", "why they split"],
      rowHead: "context",
      rows: [
        {
          head: "Origin vs. Location",
          cells: [
            { label: "Soy de Madrid", note: "permanent origin" },
            { label: "Estoy en Madrid", note: "where I am standing now" },
            { label: "estar always handles physical location" },
          ],
        },
        {
          head: "Character vs. Condition",
          cells: [
            { label: "El café es bueno", note: "good quality coffee" },
            { label: "El café está frío", note: "cold right now" },
            { label: "trait vs. current temperature/state" },
          ],
        },
        {
          head: "Meaning-shifting adjectives",
          cells: [
            { label: "es listo", note: "he is clever" },
            { label: "está listo", note: "he is ready" },
            { label: "essence vs. readiness" },
          ],
        },
      ],
    },
    {
      title: "Object pronouns — before the conjugated verb, or welded to the infinitive",
      why: "Spanish places object pronouns before a conjugated verb (Lo compro), or welds them onto the tail of an infinitive (Quiero comprarlo). When le meets lo/la, it shifts to se lo.",
      columnHead: ["direct object", "indirect receiver", "double pronoun (se lo)"],
      rowHead: "person",
      rows: [
        {
          head: "him / it (m)",
          cells: [
            { label: "lo", note: "Lo veo / Quiero verlo" },
            { label: "le", note: "Le hablo (I speak to him)" },
            { label: "se lo", note: "Se lo doy (never *le lo)" },
          ],
        },
        {
          head: "her / it (f)",
          cells: [
            { label: "la", note: "La tengo / Voy a verla" },
            { label: "le", note: "Le doy la llave" },
            { label: "se la", note: "Se la doy (I give it to her)" },
          ],
        },
        {
          head: "them (pl)",
          cells: [
            { label: "los / las", note: "Los compro hoy" },
            { label: "les", note: "Les escribo" },
            { label: "se los / se las", note: "les → se before lo/la" },
          ],
        },
      ],
    },
    {
      title: "The Castilian sound bridges",
      why: "Once you know how Castilian melted Latin consonant clusters and stressed short vowels, thousands of English Latinate words turn into Spanish on sight.",
      columnHead: ["Latin / English", "Spanish shifted", "proof pair"],
      rowHead: "bridge",
      rows: [
        {
          head: "f- → silent h-",
          cells: [
            { label: "f-" },
            { label: "h- (silent)" },
            { label: "fact/make → hacer, filial → hijo, furnace → horno" },
          ],
        },
        {
          head: "-ct- → -ch-",
          cells: [
            { label: "-ct-" },
            { label: "-ch-" },
            { label: "nocturnal → noche, lacteal → leche, octo → ocho" },
          ],
        },
        {
          head: "pl- / cl- / fl- → ll-",
          cells: [
            { label: "pl- / cl- / fl-" },
            { label: "ll-" },
            { label: "clavicle/clef → llave, pleno → lleno, flamma → llama" },
          ],
        },
        {
          head: "stressed e / o → ie / ue",
          cells: [
            { label: "e / o" },
            { label: "ie / ue" },
            { label: "tempo → tiempo, porta → puerta, dormire → duermo" },
          ],
        },
      ],
    },
  ],
  links: [
    {
      href: "/trail/9",
      label: "Topic 9 · Ser vs. Estar",
      desc: "essence versus state and physical location.",
    },
    {
      href: "/trail/19",
      label: "Topic 19 · Haber + -ado / -ido",
      desc: "the unbreakable compound past.",
    },
    {
      href: "/trail/20",
      label: "Topic 20 · Direct, Indirect & Se Lo Pronouns",
      desc: "folding nouns into pre-verbal and enclitic pronouns.",
    },
    {
      href: "/atlas",
      label: "The Sound Shift Atlas",
      desc: "all 9 Castilian-English philological bridges.",
    },
  ],
};

const PANORAMA_BY_LANG: Record<string, LanguagePanorama> = {
  de: GERMAN_PANORAMA,
  fr: FRENCH_PANORAMA,
  es: SPANISH_PANORAMA,
};

export default function PanoramaPage() {
  const storeLangId = useAppStore((s) => s.activeLanguageId);
  const [selectedLang, setSelectedLang] = useState<string>("de");

  useEffect(() => {
    if (storeLangId && PANORAMA_BY_LANG[storeLangId]) {
      setSelectedLang(storeLangId);
    }
  }, [storeLangId]);

  const current = PANORAMA_BY_LANG[selectedLang] ?? GERMAN_PANORAMA;

  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-10 font-mono text-[var(--text-color)]">
      <header className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs text-[var(--sub-color)] hover:text-[var(--main-color)] transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> back to the trail
          </Link>

          <div className="flex items-center gap-1.5 bg-[var(--sub-alt-color)] p-1 rounded-lg border border-[var(--sub-color)]/20">
            {(["de", "fr", "es"] as const).map((lid) => {
              const p = PANORAMA_BY_LANG[lid];
              const active = current.id === lid;
              return (
                <button
                  key={lid}
                  type="button"
                  onClick={() => setSelectedLang(lid)}
                  className={`px-3 py-1 rounded text-xs font-mono transition cursor-pointer ${
                    active
                      ? "bg-[var(--main-color)] text-[var(--bg-color)] font-bold"
                      : "text-[var(--sub-color)] hover:text-[var(--text-color)]"
                  }`}
                >
                  {p.name.toLowerCase()}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--main-color)] font-semibold">
          <Compass className="w-4 h-4" /> {current.name.toLowerCase()} grammar panorama
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight">
          The whole {current.name} structure, on one page
        </h1>
        <p className="text-sm sm:text-base text-[var(--sub-color)] leading-relaxed max-w-2xl">
          {current.intro}
        </p>
      </header>

      <div className="space-y-12">
        {current.grids.map((grid) => (
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
          {current.links.map((item) => (
            <li key={item.href + item.label}>
              <Link href={item.href} className="text-[var(--main-color)] hover:underline">
                {item.label}
              </Link>{" "}
              — {item.desc}
            </li>
          ))}
        </ul>
      </footer>
    </main>
  );
}
