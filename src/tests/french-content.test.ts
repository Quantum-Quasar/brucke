import { describe, it, expect } from "vitest";
import { getLanguageContent } from "../data/language-content";
import { frenchCompendium } from "../data/french/compendium-fr";
import { FR_LESSONS } from "../data/french/lessons-fr";
import { FR_TOPICS, FR_TRAIL_BRANCHES, FR_TRAIL_GATES } from "../data/french/curriculum-fr";
import { FRENCH_INSIGHTS } from "../data/french/insights-fr";
import { getWordEntityMap } from "../lib/word-entities";
import { displayArticle } from "../lib/gender";
import type { Lesson } from "../lib/types";

// The French course is authored as typed TS modules under src/data/french/
// (not parsed from word_connections.md), so its correctness guarantees live
// here: bundle wiring, id integrity, referential word ids, French-only
// content hygiene, and the le/la → l' elision rule.

const frContent = getLanguageContent("fr");

/** Deep-walk any authored structure collecting strings long enough to be prose. */
function collectLongStrings(node: unknown, out: string[] = []): string[] {
  if (typeof node === "string") {
    if (node.trim().length > 60) out.push(node);
  } else if (Array.isArray(node)) {
    node.forEach((n) => collectLongStrings(n, out));
  } else if (node && typeof node === "object") {
    Object.values(node).forEach((v) => collectLongStrings(v, out));
  }
  return out;
}

// German function words that have no business appearing in French/English
// prose. "die/der/das" are deliberately excluded — "die" is an English verb
// and gender values are checked separately.
const GERMAN_FUNCTION_WORDS = /\b(nicht|ich|wir|aber|auch|noch|schon|haben|werden|ist)\b/i;
const GERMAN_ONLY_CHARS = /[äöüßÄÖÜ]/;

describe("french course content", () => {
  it("wires the french bundle completely", () => {
    expect(frContent.totalTopics).toBe(30);
    expect(frContent.topics).toHaveLength(30);
    expect(frContent.lessons.length).toBeGreaterThanOrEqual(19);
    expect(frContent.insights).toHaveLength(28);
    expect(frContent.compendium).toBe(frenchCompendium);
  });

  it("authors shift families, compounds and false friends", () => {
    expect(Object.keys(frenchCompendium.shifts)).toHaveLength(9);
    expect(frenchCompendium.compounds.length).toBeGreaterThanOrEqual(10);
    expect(frenchCompendium.falseFriends.length).toBeGreaterThanOrEqual(12);
  });

  it("keeps every id space unique", () => {
    const lessonIds = FR_LESSONS.map((l) => l.id);
    expect(new Set(lessonIds).size).toBe(lessonIds.length);

    const topicIds = FR_TOPICS.map((t) => t.id);
    expect(new Set(topicIds).size).toBe(topicIds.length);

    const shellIds = FR_TOPICS.flatMap((t) => [t.core, ...t.sprigs])
      .map((s) => s.id)
      .concat(FR_TRAIL_BRANCHES.flatMap((b) => [b.id, ...b.lessons.map((l) => l.id)]));
    expect(new Set(shellIds).size).toBe(shellIds.length);

    const gateIds = FR_TRAIL_GATES.map((g) => g.id);
    expect(new Set(gateIds).size).toBe(gateIds.length);

    const days = FRENCH_INSIGHTS.map((i) => i.day);
    expect(new Set(days).size).toBe(days.length);

    const entityIds = Object.keys(getWordEntityMap("fr"));
    expect(new Set(entityIds).size).toBe(entityIds.length);
  });

  it("resolves every lesson word id in the french entity map", () => {
    const entities = getWordEntityMap("fr");
    const missing: string[] = [];
    for (const lesson of FR_LESSONS) {
      const withTable = lesson as Lesson & { table_word_ids?: string[] };
      const ids = [...lesson.word_ids, ...(withTable.table_word_ids ?? [])];
      for (const id of ids) {
        if (!entities[id]) missing.push(`lesson ${lesson.id}: ${id}`);
      }
    }
    expect(missing).toEqual([]);
  });

  it("agrees between authored curriculum shells and authored lessons", () => {
    const authoredShells = FR_TOPICS.flatMap((t) => [t.core, ...t.sprigs])
      .concat(FR_TRAIL_BRANCHES.flatMap((b) => b.lessons))
      .filter((s) => s.authored)
      .map((s) => s.id)
      .sort((a, b) => a - b);
    const lessonIds = FR_LESSONS.map((l) => l.id).sort((a, b) => a - b);
    expect(authoredShells).toEqual(lessonIds);
  });

  it("keeps german out of the french course", () => {
    const blobs = [
      ...FR_LESSONS.map((l) => JSON.stringify(l)),
      JSON.stringify(frenchCompendium),
      JSON.stringify(FRENCH_INSIGHTS),
    ];
    for (const blob of blobs) {
      const head = blob.slice(0, 120);
      expect(GERMAN_FUNCTION_WORDS.test(blob), `function words leaked: ${head}`).toBe(false);
      expect(GERMAN_ONLY_CHARS.test(blob), `umlauts leaked: ${head}`).toBe(false);
    }
  });

  it("uses only french genders", () => {
    for (const word of Object.values(frenchCompendium.words)) {
      expect(["le", "la", null]).toContain(word.gender);
    }
  });

  it("keeps gates and branches on the trail", () => {
    for (const gate of FR_TRAIL_GATES) {
      expect(gate.afterTopic).toBeGreaterThanOrEqual(1);
      expect(gate.afterTopic).toBeLessThanOrEqual(29);
    }
    for (const branch of FR_TRAIL_BRANCHES) {
      expect(branch.attach).toBeGreaterThanOrEqual(1);
      expect(branch.attach).toBeLessThanOrEqual(30);
    }
  });

  it("elides le/la before vowels", () => {
    expect(displayArticle("le", "ami", "fr")).toBe("l'");
    expect(displayArticle("la", "école", "fr")).toBe("l'");
    expect(displayArticle("le", "gâteau", "fr")).toBe("le");
    expect(displayArticle("la", "université", "fr")).toBe("l'");
    expect(displayArticle("der", "Wort", "de")).toBe("der");
  });

  it("does not copy long prose between lessons", () => {
    const seen = new Map<string, number>();
    for (const lesson of FR_LESSONS) {
      for (const text of new Set(collectLongStrings(lesson))) {
        seen.set(text, (seen.get(text) ?? 0) + 1);
      }
    }
    const duplicated = [...seen.entries()].filter(([, n]) => n > 1);
    expect(duplicated.map(([t]) => t.slice(0, 80))).toEqual([]);
  });
});
