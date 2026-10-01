import { compendium as germanCompendium } from "@/data/compendium";
import { COMPOUND_IPA, FALSE_FRIEND_IPA } from "@/data/phonetics";
import { LESSONS as GERMAN_LESSONS } from "@/data/lessons";
import { getLanguageContent } from "@/data/language-content";
import type { WordEntity } from "@/lib/types";

interface WordEntityMaps {
  wordLesson: Record<string, number>;
  entities: Record<string, WordEntity>;
}

function buildWordEntityMaps(
  data: typeof germanCompendium,
  lessons: typeof GERMAN_LESSONS,
  ipa: { compound: Record<string, string>; falseFriend: Record<string, string> }
): WordEntityMaps {
  const wordLesson: Record<string, number> = {};
  for (const lesson of lessons) {
    for (const wordId of lesson.word_ids) {
      if (!(wordId in wordLesson)) wordLesson[wordId] = lesson.id;
    }
  }

  const entities: Record<string, WordEntity> = { ...data.words };

  data.compounds.forEach((compound) => {
    const id = `compound_${compound.id}`;
    const cleanWord = compound.compound.replace(/^(der|die|das)\s+/i, "");
    entities[id] = {
      id,
      target_word: cleanWord,
      english_cognate: compound.literal_morphemes,
      english_meaning: `${compound.real_meaning} (lit. "${compound.literal_morphemes}")`,
      gender: compound.gender,
      ipa: ipa.compound[compound.id] || "/kɔmˈpoːzɪtʊm/",
      sound_shift_ids: [],
      shift_rule: "Compound Calque",
      context_phrase: compound.compound,
      context_translation: `${compound.english_counterpart} (${compound.literal_morphemes})`,
      etymology_derivation: compound.lore,
    };
  });

  data.falseFriends.forEach((falseFriend) => {
    const id = `trap_${falseFriend.id}`;
    entities[id] = {
      id,
      target_word: falseFriend.german_word,
      english_cognate: `≠ ${falseFriend.looks_like}`,
      english_meaning: falseFriend.actual_meaning,
      gender: null,
      ipa: ipa.falseFriend[falseFriend.id] || "/faɫʃɐ fʁɔʏ̯nt/",
      sound_shift_ids: [],
      shift_rule: "False Friend Trap",
      context_phrase: `${falseFriend.german_word} means "${falseFriend.actual_meaning}"`,
      context_translation: `NOT English "${falseFriend.looks_like}"!`,
      etymology_derivation: falseFriend.trap_note,
    };
  });

  return { wordLesson, entities };
}

const GERMAN_IPA = { compound: COMPOUND_IPA, falseFriend: FALSE_FRIEND_IPA };

const germanMaps = buildWordEntityMaps(germanCompendium, GERMAN_LESSONS, GERMAN_IPA);

const mapsByLanguage: Record<string, WordEntityMaps> = { de: germanMaps };

/**
 * Word id → the trail lesson that actually teaches it, derived from the
 * lesson data itself (the parser's lesson_index is a compendium-table
 * position bucket, not a lesson id). Language-scoped; falls back to an
 * empty map for languages without content.
 */
export function getWordLessonMap(languageId: string): Record<string, number> {
  return getMaps(languageId).wordLesson;
}

/** Legacy German-only export — prefer getWordLessonMap(activeLanguageId). */
export const WORD_LESSON_MAP: Record<string, number> = germanMaps.wordLesson;

/**
 * One lookup for every entity that can appear in a lesson or review session.
 * Compound and false-friend cards use synthetic IDs, so they need the same
 * detail path as core vocabulary cards. Language-scoped.
 */
export function getWordEntityMap(languageId: string): Record<string, WordEntity> {
  return getMaps(languageId).entities;
}

function getMaps(languageId: string): WordEntityMaps {
  const cached = mapsByLanguage[languageId];
  if (cached) return cached;
  const content = getLanguageContent(languageId);
  const maps = content.compendium
    ? buildWordEntityMaps(content.compendium, content.lessons, { compound: {}, falseFriend: {} })
    : { wordLesson: {}, entities: {} };
  mapsByLanguage[languageId] = maps;
  return maps;
}

/** Legacy German-only lookup — prefer getWordEntity(id, activeLanguageId). */
export const WORD_ENTITY_MAP: Record<string, WordEntity> = germanMaps.entities;

export function getWordEntity(id: string, languageId = "de"): WordEntity | undefined {
  const map = getMaps(languageId).entities;
  const normalized = id.trim().toLowerCase();
  return (
    map[id] ||
    map[normalized] ||
    Object.values(map).find(
      (word) => word.target_word.toLowerCase() === normalized || word.id.toLowerCase() === normalized
    )
  );
}
