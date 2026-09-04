import { describe, it, expect } from "vitest";
import { LESSONS } from "../data/lessons";

describe("Progressive Bite-Sized Exercise Architecture", () => {
  it("provides 5 fully interactive foundational lessons", () => {
    expect(LESSONS.length).toBeGreaterThanOrEqual(5);
  });

  it("scaffolds exercises so initial problems are never cold typing", () => {
    for (const lesson of LESSONS) {
      const firstExercise = lesson.exercises[0];
      expect(firstExercise).toBeDefined();
      // First exercise must be playful tile assembly, matching cards, or multiple choice
      expect(["morpheme_tiles", "matching_pairs", "shift_select"]).toContain(firstExercise.type);
    }
  });

  it("validates that morpheme_tiles exercises have necessary tiles to form the answer", () => {
    for (const lesson of LESSONS) {
      const tileExercises = lesson.exercises.filter((e) => e.type === "morpheme_tiles");
      for (const ex of tileExercises) {
        expect(ex.tile_options).toBeDefined();
        expect(ex.tile_options!.length).toBeGreaterThanOrEqual(3);

        // Check that pieces of target_answer exist in tile_options
        const target = ex.target_answer;
        const matchingTiles = ex.tile_options!.filter((t) => target.includes(t.replace(/^-/, "")));
        expect(matchingTiles.length).toBeGreaterThanOrEqual(2);
      }
    }
  });

  it("validates that matching_pairs exercises have valid pairs and targets", () => {
    for (const lesson of LESSONS) {
      const matchExercises = lesson.exercises.filter((e) => e.type === "matching_pairs");
      for (const ex of matchExercises) {
        expect(ex.matching_pairs).toBeDefined();
        expect(ex.matching_pairs!.length).toBeGreaterThanOrEqual(3);
        for (const pair of ex.matching_pairs!) {
          expect(pair.id).toBeTruthy();
          expect(pair.english).toBeTruthy();
          expect(pair.german).toBeTruthy();
        }
      }
    }
  });

  it("validates that shift_select options always include the target answer", () => {
    for (const lesson of LESSONS) {
      const selectExercises = lesson.exercises.filter((e) => e.type === "shift_select");
      for (const ex of selectExercises) {
        expect(ex.options).toBeDefined();
        expect(ex.options).toContain(ex.target_answer);
      }
    }
  });

  it("validates that syntax_builder word banks contain all required words", () => {
    for (const lesson of LESSONS) {
      const syntaxExercises = lesson.exercises.filter((e) => e.type === "syntax_builder");
      for (const ex of syntaxExercises) {
        expect(ex.word_bank).toBeDefined();
        const wordsInTarget = ex.target_answer.split(" ");
        for (const word of wordsInTarget) {
          expect(ex.word_bank).toContain(word);
        }
      }
    }
  });

  it("validates that exercises include translation meanings for confirmation", () => {
    for (const lesson of LESSONS) {
      for (const ex of lesson.exercises) {
        expect(ex.meaning).toBeDefined();
        expect(ex.meaning!.length).toBeGreaterThan(0);
      }
    }
  });

  it("validates that helper words like 'mit' contain explicit vocab_hints", () => {
    const l1Syntax = LESSONS[0].exercises.find((e) => e.id === "l1_e5");
    expect(l1Syntax).toBeDefined();
    expect(l1Syntax?.vocab_hints).toBeDefined();
    const mitHint = l1Syntax?.vocab_hints?.find((h) => h.word === "mit");
    expect(mitHint).toBeDefined();
    expect(mitHint?.translation).toBe("with");
  });
});
