import type { CompendiumData, ShiftFamily } from "@/lib/types";

/** Route id of the virtual family containing dictionary words outside the atlas. */
export const UNSHIFTED_FAMILY_ID = "unshifted";

/** Ids of compendium words that belong to no sound-shift family. */
function getUnshiftedWordIds(data: CompendiumData): string[] {
  const inAnyShift = new Set<string>();
  for (const family of Object.values(data.shifts)) {
    for (const id of family.word_ids) inAnyShift.add(id);
  }
  return data.wordList.map((w) => w.id).filter((id) => !inAnyShift.has(id));
}

/** Virtual shift family wrapping every dictionary word missing from the atlas. */
let cachedUnshifted: { data: CompendiumData; family: ShiftFamily } | null = null;
function getUnshiftedFamily(data: CompendiumData): ShiftFamily {
  if (cachedUnshifted && cachedUnshifted.data === data) return cachedUnshifted.family;
  const family: ShiftFamily = {
    id: UNSHIFTED_FAMILY_ID,
    name: "Direct Cognates & Unshifted Words",
    symbol: "direct cognate",
    phonetic_rule: "Words carried into German without a regular historical sound shift — direct cognates, transparent borrowings and everyday vocabulary.",
    historical_linguistics:
      "Not every German word descends from a shifted Indo-European root. Many entered Modern German through borrowing, learned coinage, or preserve the older form the sound shifts later modified elsewhere.",
    philological_note:
      "Grouped here so the atlas covers the whole dictionary instead of only shift-bearing roots.",
    literature_source: "—",
    word_ids: getUnshiftedWordIds(data),
  };
  cachedUnshifted = { data, family };
  return family;
}

/** All atlas families: the 9 authored shift families plus the unshifted layer. */
let cachedFamilies: { data: CompendiumData; families: ShiftFamily[] } | null = null;
export function getAtlasFamilies(data: CompendiumData): ShiftFamily[] {
  if (cachedFamilies && cachedFamilies.data === data) return cachedFamilies.families;
  assertNoReservedShiftIds(data);
  const families = [...Object.values(data.shifts), getUnshiftedFamily(data)];
  cachedFamilies = { data, families };
  return families;
}

// Reserved route ids that a stray shift family key must never shadow
const RESERVED_FAMILY_IDS = new Set([UNSHIFTED_FAMILY_ID, "master"]);
function assertNoReservedShiftIds(data: CompendiumData) {
  if (process.env.NODE_ENV === "production") return;
  for (const key of Object.keys(data.shifts)) {
    if (RESERVED_FAMILY_IDS.has(key)) {
      throw new Error(`Shift family id "${key}" is reserved by the atlas.`);
    }
  }
}

export function getAtlasFamily(data: CompendiumData, id: string): ShiftFamily | undefined {
  if (id === UNSHIFTED_FAMILY_ID) return getUnshiftedFamily(data);
  return data.shifts[id];
}
