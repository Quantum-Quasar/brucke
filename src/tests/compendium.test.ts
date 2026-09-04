import { describe, it, expect } from "vitest";
import compendium from "../data/compendium.json";
import type { CompendiumData } from "../lib/types";

const data = compendium as unknown as CompendiumData;

describe("Brücke Compendium Data Integrity", () => {
  it("contains all 218 core words", () => {
    expect(data.wordList.length).toBe(218);
    expect(Object.keys(data.words).length).toBe(218);
  });

  it("contains all 9 sound shift families", () => {
    const shiftIds = Object.keys(data.shifts);
    expect(shiftIds.length).toBe(9);
    expect(shiftIds).toContain("th_to_d");
    expect(shiftIds).toContain("d_to_t");
    expect(shiftIds).toContain("p_to_pf_f");
    expect(shiftIds).toContain("t_to_s_ss_z");
    expect(shiftIds).toContain("k_to_ch");
    expect(shiftIds).toContain("v_to_b");
    expect(shiftIds).toContain("y_gh_to_g_ch");
    expect(shiftIds).toContain("latin_ieren");
    expect(shiftIds).toContain("strong_verbs_ablaut");
  });

  it("contains all 32 compound calques", () => {
    expect(data.compounds.length).toBe(32);
    const names = data.compounds.map((c) => c.compound);
    expect(names.some((n) => n.includes("Kühlschrank"))).toBe(true);
    expect(names.some((n) => n.includes("Kummerspeck"))).toBe(true);
    expect(names.some((n) => n.includes("Handschuh"))).toBe(true);
    expect(names.some((n) => n.includes("Fernseher"))).toBe(true);
  });

  it("contains all 16 false friend traps", () => {
    expect(data.falseFriends.length).toBe(16);
    const words = data.falseFriends.map((f) => f.german_word);
    expect(words.some((w) => w.includes("das Gift"))).toBe(true);
    expect(words.some((w) => w.includes("bekommen"))).toBe(true);
    expect(words.some((w) => w.includes("der Chef"))).toBe(true);
  });

  it("contains all 28 daily cultural insights", () => {
    expect(data.dailyInsights.length).toBe(28);
    expect(data.dailyInsights[0].german_expression).toBe("der Kindergarten");
    expect(data.dailyInsights[1].german_expression).toBe("denken");
  });

  it("validates that all words have valid IPA, English cognates, and context phrases", () => {
    for (const word of data.wordList) {
      expect(word.target_word).toBeTruthy();
      expect(word.english_cognate).toBeTruthy();
      expect(word.ipa).toMatch(/^\/.*\/$/);
      expect(word.context_phrase).toBeTruthy();
      expect(word.etymology_derivation).toBeTruthy();
    }
  });

  it("validates that every sound shift family references existing words", () => {
    for (const [id, shift] of Object.entries(data.shifts)) {
      expect(shift.word_ids.length).toBeGreaterThan(0);
      for (const wid of shift.word_ids) {
        expect(data.words[wid]).toBeDefined();
      }
    }
  });
});
