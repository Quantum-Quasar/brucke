import { compendium as data } from "@/data/compendium";
import { COMPOUND_IPA, FALSE_FRIEND_IPA } from "@/data/phonetics";
import { LESSONS } from "@/data/lessons";
import type { WordEntity } from "@/lib/types";

/**
 * Word id → the trail lesson that actually teaches it, derived from the
 * lesson data itself (the parser's lesson_index is a compendium-table
 * position bucket, not a lesson id).
 */
export const WORD_LESSON_MAP: Record<string, number> = (() => {
  const map: Record<string, number> = {};
  for (const lesson of LESSONS) {
    for (const wordId of lesson.word_ids) {
      if (!(wordId in map)) map[wordId] = lesson.id;
    }
  }
  return map;
})();

/**
 * One lookup for every entity that can appear in a lesson or review session.
 * Compound and false-friend cards use synthetic IDs, so they need the same
 * detail path as core vocabulary cards.
 */
export const WORD_ENTITY_MAP: Record<string, WordEntity> = (() => {
  const map: Record<string, WordEntity> = { ...data.words };

  data.compounds.forEach((compound) => {
    const id = `compound_${compound.id}`;
    const cleanWord = compound.compound.replace(/^(der|die|das)\s+/i, "");
    map[id] = {
      id,
      target_word: cleanWord,
      english_cognate: compound.literal_morphemes,
      english_meaning: `${compound.real_meaning} (lit. "${compound.literal_morphemes}")`,
      gender: compound.gender,
      ipa: COMPOUND_IPA[compound.id] || "/kɔmˈpoːzɪtʊm/",
      sound_shift_ids: [],
      shift_rule: "Compound Calque",
      context_phrase: compound.compound,
      context_translation: `${compound.english_counterpart} (${compound.literal_morphemes})`,
      etymology_derivation: compound.lore,
    };
  });

  data.falseFriends.forEach((falseFriend) => {
    const id = `trap_${falseFriend.id}`;
    map[id] = {
      id,
      target_word: falseFriend.german_word,
      english_cognate: `≠ ${falseFriend.looks_like}`,
      english_meaning: falseFriend.actual_meaning,
      gender: null,
      ipa: FALSE_FRIEND_IPA[falseFriend.id] || "/faɫʃɐ fʁɔʏ̯nt/",
      sound_shift_ids: [],
      shift_rule: "False Friend Trap",
      context_phrase: `${falseFriend.german_word} means "${falseFriend.actual_meaning}"`,
      context_translation: `NOT English "${falseFriend.looks_like}"!`,
      etymology_derivation: falseFriend.trap_note,
    };
  });

  return map;
})();

export function getWordEntity(id: string): WordEntity | undefined {
  const normalized = id.trim().toLowerCase();
  return (
    WORD_ENTITY_MAP[id] ||
    WORD_ENTITY_MAP[normalized] ||
    Object.values(WORD_ENTITY_MAP).find(
      (word) => word.target_word.toLowerCase() === normalized || word.id.toLowerCase() === normalized
    )
  );
}
