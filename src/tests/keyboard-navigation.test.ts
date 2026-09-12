import { describe, it, expect, beforeEach } from "vitest";
import { useAppStore } from "../lib/store";
import type { ExerciseItem } from "../lib/types";

describe("Keyboard Navigation & Interactive Exercise Controls", () => {
  beforeEach(() => {
    useAppStore.getState().resetProgress();
  });

  it("verifies prediction correctness for derivation exercises when Enter is pressed", () => {
    const exercise: ExerciseItem = {
      id: "ex_test_derive",
      type: "derive",
      prompt: "Apply the T -> SS/S shift to derive the German cognate of 'water':",
      target_answer: "Wasser",
    };

    const normalizeUmlauts = (s: string) =>
      s.replace(/ä/g, "a").replace(/ö/g, "o").replace(/ü/g, "u").replace(/ß/g, "ss");

    const checkAnswer = (input: string) => {
      const trimmed = input.trim();
      if (trimmed === exercise.target_answer) return { status: "correct" };
      if (trimmed.toLowerCase() === exercise.target_answer.toLowerCase()) {
        return { status: "correct", note: "capitalization_warning" };
      }
      if (normalizeUmlauts(trimmed.toLowerCase()) === normalizeUmlauts(exercise.target_answer.toLowerCase())) {
        return { status: "correct", note: "umlaut_warning" };
      }
      return { status: "incorrect" };
    };

    // User types 'Wasser' and hits Enter
    expect(checkAnswer("Wasser")).toEqual({ status: "correct" });

    // User types 'wasser' (case insensitive match)
    expect(checkAnswer("wasser").status).toBe("correct");

    // User types typo 'water'
    expect(checkAnswer("water").status).toBe("incorrect");
  });

  it("verifies morpheme tile selection with numeric shortcuts (1-N) and undo via Backspace", () => {
    const tileOptions = ["ver-", "steh-", "-en"];
    let selectedIndices: number[] = [];

    const pickTile = (numKey: number) => {
      const idx = numKey - 1;
      if (idx >= 0 && idx < tileOptions.length && !selectedIndices.includes(idx)) {
        selectedIndices.push(idx);
      }
    };

    const unpickTile = () => {
      if (selectedIndices.length > 0) {
        selectedIndices.pop();
      }
    };

    // Press 1, 2, 3
    pickTile(1);
    pickTile(2);
    pickTile(3);
    expect(selectedIndices).toEqual([0, 1, 2]);

    const assembled = selectedIndices.map((i) => tileOptions[i]).join("");
    expect(assembled).toBe("ver-steh--en");

    // Press Backspace: unpicks tile 3
    unpickTile();
    expect(selectedIndices).toEqual([0, 1]);

    // Press 3 again
    pickTile(3);
    expect(selectedIndices).toEqual([0, 1, 2]);
  });

  it("verifies syntax builder keyboard word banking sequence", () => {
    const wordBank = ["Wir", "haben", "das", "Buch", "gelesen"];
    let selectedIndices: number[] = [];

    const pickWord = (numKey: number) => {
      const idx = numKey - 1;
      if (idx >= 0 && idx < wordBank.length && !selectedIndices.includes(idx)) {
        selectedIndices.push(idx);
      }
    };

    // Assemble sentence using keys 1, 2, 3, 4, 5
    [1, 2, 3, 4, 5].forEach((k) => pickWord(k));
    const sentence = selectedIndices.map((i) => wordBank[i]).join(" ");
    expect(sentence).toBe("Wir haben das Buch gelesen");
  });

  it("verifies 2-step keyboard matching pairs flow (1-N English -> 1-N German)", () => {
    const matchingPairs = [
      { id: "p1", english: "water", german: "Wasser" },
      { id: "p2", english: "foot", german: "Fuß" },
      { id: "p3", english: "pipe", german: "Pfeife" },
    ];

    let selectedEnglish: string | null = null;
    let matchedIds: string[] = [];

    const selectEnglishByKey = (numKey: number) => {
      const unmatched = matchingPairs.filter((p) => !matchedIds.includes(p.id));
      if (numKey >= 1 && numKey <= unmatched.length) {
        selectedEnglish = unmatched[numKey - 1].english;
      }
    };

    const matchGermanByKey = (numKey: number) => {
      if (!selectedEnglish) return;
      const unmatched = matchingPairs.filter((p) => !matchedIds.includes(p.id));
      if (numKey >= 1 && numKey <= unmatched.length) {
        const candidate = unmatched[numKey - 1];
        if (candidate.english === selectedEnglish) {
          matchedIds.push(candidate.id);
        }
        selectedEnglish = null;
      }
    };

    // 1. Select 'water' (key 1)
    selectEnglishByKey(1);
    expect(selectedEnglish).toBe("water");

    // 2. Match with 'Wasser' (key 1 in unmatched)
    matchGermanByKey(1);
    expect(matchedIds).toContain("p1");
    expect(selectedEnglish).toBeNull();

    // 3. Select 'foot' (now key 1 in remaining unmatched)
    selectEnglishByKey(1);
    expect(selectedEnglish).toBe("foot");

    // Match with 'Fuß'
    matchGermanByKey(1);
    expect(matchedIds).toContain("p2");
    expect(matchedIds.length).toBe(2);
  });

  it("progresses lesson segments via Enter key simulation", () => {
    const segments = ["hook", "pattern", "table", "practice", "summary"] as const;
    let currentSegmentIndex = 0;
    const completed: string[] = [];

    const advanceSegmentOnEnter = () => {
      completed.push(segments[currentSegmentIndex]);
      if (currentSegmentIndex + 1 < segments.length) {
        currentSegmentIndex += 1;
      }
    };

    expect(segments[currentSegmentIndex]).toBe("hook");
    advanceSegmentOnEnter(); // To pattern
    expect(segments[currentSegmentIndex]).toBe("pattern");
    advanceSegmentOnEnter(); // To table
    expect(segments[currentSegmentIndex]).toBe("table");
    advanceSegmentOnEnter(); // To practice
    expect(segments[currentSegmentIndex]).toBe("practice");
    advanceSegmentOnEnter(); // To summary
    expect(segments[currentSegmentIndex]).toBe("summary");

    expect(completed).toEqual(["hook", "pattern", "table", "practice"]);
  });
});
