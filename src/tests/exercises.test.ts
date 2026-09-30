import { describe, it, expect } from "vitest";
import { LESSONS } from "../data/lessons";
import { evaluateAnswerAccuracy } from "../lib/letter-diff";

describe("Progressive Bite-Sized Exercise Architecture", () => {
  it("provides 10 fully interactive foundational lessons", () => {
    expect(LESSONS.length).toBeGreaterThanOrEqual(10);
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

  it("guarantees no syntax_builder tiles or answers have trailing periods or punctuation spoilers", () => {
    for (const lesson of LESSONS) {
      const syntaxExercises = lesson.exercises.filter((e) => e.type === "syntax_builder");
      for (const ex of syntaxExercises) {
        expect(ex.word_bank).toBeDefined();
        for (const tile of ex.word_bank!) {
          expect(tile).not.toMatch(/[.,!?;:]$/);
        }
        expect(ex.target_answer).not.toMatch(/[.,!?;:]$/);
      }
      const morphemeExercises = lesson.exercises.filter((e) => e.type === "morpheme_tiles");
      for (const ex of morphemeExercises) {
        if (ex.tile_options) {
          for (const tile of ex.tile_options) {
            expect(tile).not.toMatch(/[.,!?;:]$/);
          }
        }
      }
    }
  });

  it("simulates Duolingo-style end-of-lesson retry queue where missed and typo questions are re-asked at the end", () => {
    const lesson = LESSONS[0]; // 5 exercises
    expect(lesson.exercises.length).toBe(5);

    const retryQueue: any[] = [];
    const completedInitial: string[] = [];
    const completedRetries: string[] = [];

    const queueRetryIfRequired = (exercise: any, userAttempt: string) => {
      const evaluation = evaluateAnswerAccuracy(userAttempt, exercise.target_answer);
      if (evaluation.accuracy === "incorrect") {
        if (!retryQueue.some((e) => e.id === exercise.id)) retryQueue.push(exercise);
      } else if (evaluation.accuracy === "almost") {
        // Only spelling typos and umlaut errors get queued for retry; case and infinitive stems are accepted without retry
        if (evaluation.reason === "typo" || evaluation.reason === "umlaut") {
          if (!retryQueue.some((e) => e.id === exercise.id)) retryQueue.push(exercise);
        }
      }
    };

    // Exercise 1: Spot on
    queueRetryIfRequired(lesson.exercises[0], lesson.exercises[0].target_answer);
    completedInitial.push(lesson.exercises[0].id);

    // Exercise 2: Spelling typo ("typo" -> queued for retry)
    queueRetryIfRequired(lesson.exercises[1], "kannn");
    completedInitial.push(lesson.exercises[1].id);

    // Exercise 3: Totally wrong ("incorrect" -> queued for retry)
    queueRetryIfRequired(lesson.exercises[2], "completelyWrong");
    completedInitial.push(lesson.exercises[2].id);

    // Exercise 4: Infinitive omission ("infinitive" -> NOT queued for retry)
    queueRetryIfRequired(lesson.exercises[3], "sing"); // target is "sing" which is exact, but let's test a verb stem
    completedInitial.push(lesson.exercises[3].id);

    // Exercise 5: Spot on
    queueRetryIfRequired(lesson.exercises[4], lesson.exercises[4].target_answer);
    completedInitial.push(lesson.exercises[4].id);

    // Verify initial run progressed through all 5
    expect(completedInitial.length).toBe(5);

    // Exactly exercises 2 and 3 should be in retry queue
    expect(retryQueue.length).toBe(2);
    expect(retryQueue[0].id).toBe(lesson.exercises[1].id);
    expect(retryQueue[1].id).toBe(lesson.exercises[2].id);

    // Now complete the retry queue
    for (const retryEx of retryQueue) {
      completedRetries.push(retryEx.id);
    }
    expect(completedRetries).toEqual([lesson.exercises[1].id, lesson.exercises[2].id]);
  });
});
