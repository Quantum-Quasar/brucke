import { describe, it, expect } from "vitest";
import { getLevenshteinDistance, evaluateAnswerAccuracy } from "../lib/letter-diff";
import { alignShiftPair, getAlignCacheSize } from "../lib/shift-annotator";

describe("Levenshtein & Diff Memory & CPU Protection", () => {
  it("guards against huge pasted inputs with a deterministic length cutoff", () => {
    // inputs at or above the 200-char cutoff are rejected outright, no diff work
    expect(evaluateAnswerAccuracy("a".repeat(50000), "Wasser").accuracy).toBe("incorrect");
    expect(evaluateAnswerAccuracy("a".repeat(201), "Wasser").accuracy).toBe("incorrect");
    // inputs within the cutoff are still evaluated normally
    expect(evaluateAnswerAccuracy("a".repeat(199), "a".repeat(199))).toEqual({ accuracy: "exact" });
  });

  it("clamps Levenshtein matrix calculation when length difference exceeds threshold", () => {
    const distance = getLevenshteinDistance("a", "b".repeat(500));
    expect(distance).toBeGreaterThan(20);
  });

  it("caps alignment cache size in shift-annotator to prevent memory bloat", () => {
    for (let i = 0; i < 700; i++) {
      alignShiftPair(`cognate_${i}`, `kognat_${i}`);
    }
    expect(getAlignCacheSize()).toBeLessThanOrEqual(500);
  });
});
