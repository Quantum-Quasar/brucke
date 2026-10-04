import { describe, it, expect } from "vitest";
import { LESSONS } from "../data/lessons";
import { compendium } from "../data/compendium";
import { TOPICS } from "../data/curriculum";
import { findUnresolvedWordRefs } from "../lib/word-refs-audit";

// Whole-curriculum integrity: every authored lesson (not just the first few)
// must have resolvable word references, a title matching its curriculum shell,
// playable exercises, and an id that generates a valid static route.

describe("Whole-Curriculum Word Reference Integrity (all lessons)", () => {
  it("resolves every word_ids / table_word_ids / exercise / twist German token", () => {
    expect(LESSONS.length).toBeGreaterThanOrEqual(100);
    const misses = findUnresolvedWordRefs();
    expect(
      misses,
      `Unresolved word references:\n${misses.map((m) => `  lesson ${m.lesson} · ${m.where} · "${m.token}"`).join("\n")}`
    ).toEqual([]);
  });
});

describe("Whole-Curriculum Lesson Integrity (all lessons)", () => {
  it("every lesson has a unique positive-integer id that generates a valid route param", () => {
    const seen = new Set<number>();
    for (const lesson of LESSONS) {
      expect(Number.isInteger(lesson.id), `Lesson id ${lesson.id} must be an integer`).toBe(true);
      expect(lesson.id, `Lesson id ${lesson.id} must be positive`).toBeGreaterThan(0);
      expect(seen.has(lesson.id), `Duplicate lesson id ${lesson.id}`).toBe(false);
      seen.add(lesson.id);
      // /trail/[id]/page.tsx generateStaticParams emits id.toString()
      expect(lesson.id.toString()).toMatch(/^\d+$/);
    }
  });

  it("every lesson has a curriculum title, phase, shift categories, exercises, and word references", () => {
    // curriculum shells (cores + sprigs) — the trail map renders these titles
    const shellTitles = new Map<number, string>();
    for (const t of TOPICS) {
      shellTitles.set(t.core.id, t.core.title);
      for (const s of t.sprigs) shellTitles.set(s.id, s.title);
    }

    for (const lesson of LESSONS) {
      const ctx = `lesson ${lesson.id} (${lesson.title})`;
      expect(lesson.title.trim().length, `${ctx} needs a title`).toBeGreaterThan(0);
      expect(lesson.phase, `${ctx} needs a phase`).toBeGreaterThanOrEqual(1);
      expect(lesson.exercises.length, `${ctx} needs playable exercises`).toBeGreaterThanOrEqual(3);

      for (const shiftId of lesson.shift_categories ?? []) {
        expect(
          compendium.shifts[shiftId],
          `${ctx} references unknown shift family "${shiftId}"`
        ).toBeDefined();
      }

      // title drift vs the curriculum shell the trail map renders
      const shellTitle = shellTitles.get(lesson.id);
      if (shellTitle !== undefined) {
        expect(lesson.title, `${ctx} drifted from its curriculum shell title`).toBe(shellTitle);
      }
    }
  });
});
