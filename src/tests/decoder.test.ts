import { describe, it, expect } from "vitest";
import { decodeWord } from "../lib/decoder-engine";

describe("Decoder Cognate Engine", () => {
  it("resolves direct English cognates", () => {
    const res = decodeWord("hope");
    expect(res.type).toBe("match");
    if (res.type === "match") {
      expect(res.word.target_word).toBe("hoffen");
      expect(res.word.sound_shift_ids).toContain("p_to_pf_f");
    }
  });

  it("resolves words via lemmatization (inflected forms)", () => {
    const res = decodeWord("hoping");
    expect(res.type).toBe("match");
    if (res.type === "match") {
      expect(res.word.target_word).toBe("hoffen");
    }

    const drankRes = decodeWord("drank");
    expect(drankRes.type).toBe("match");
    if (drankRes.type === "match") {
      expect(drankRes.word.target_word).toBe("trinken");
    }
  });

  it("resolves direct German words", () => {
    const res = decodeWord("Wasser");
    expect(res.type).toBe("match");
    if (res.type === "match") {
      expect(res.word.english_cognate).toBe("water");
    }
  });

  it("resolves compound words like refrigerator or glove", () => {
    const fridge = decodeWord("refrigerator");
    expect(fridge.type).toBe("match");
    if (fridge.type === "match") {
      expect(fridge.word.target_word).toContain("Kühlschrank");
    }

    const glove = decodeWord("glove");
    expect(glove.type).toBe("match");
    if (glove.type === "match") {
      expect(glove.word.target_word).toContain("Handschuh");
    }
  });

  it("surfaces false friend alerts (e.g. gift)", () => {
    const gift = decodeWord("gift");
    expect(gift.type).toBe("match");
    if (gift.type === "match") {
      expect(gift.falseFriend).toBeDefined();
      expect(gift.falseFriend?.actual_meaning).toBe("poison / toxin");
    }
  });

  it("delivers graceful Latinate bridge responses teaching historical connections", () => {
    const res = decodeWord("beautiful");
    expect(res.type).toBe("bridge");
    if (res.type === "bridge") {
      expect(res.germanTranslation).toBe("schön");
      expect(res.etymologicalBridge).toContain("sheen");
      expect(res.suggestedGermanicWords.length).toBeGreaterThan(0);
    }

    const conv = decodeWord("conversation");
    expect(conv.type).toBe("bridge");
    if (conv.type === "bridge") {
      expect(conv.germanTranslation).toContain("Gespräch");
    }
  });

  it("handles empty strings, whitespace, and case insensitivity cleanly", () => {
    expect(decodeWord("").type).toBe("no_match");
    expect(decodeWord("   ").type).toBe("no_match");

    // Case insensitivity
    const upperHope = decodeWord("HOPE");
    expect(upperHope.type).toBe("match");
    if (upperHope.type === "match") {
      expect(upperHope.word.target_word).toBe("hoffen");
    }

    const mixedWasser = decodeWord("wAsSeR");
    expect(mixedWasser.type).toBe("match");
    if (mixedWasser.type === "match") {
      expect(mixedWasser.word.english_cognate).toBe("water");
    }
  });

  it("returns clean no_match result for arbitrary non-matching queries", () => {
    const res = decodeWord("xyz123randomword");
    expect(res.type).toBe("no_match");
    if (res.type === "no_match") {
      expect(res.query).toBe("xyz123randomword");
    }
  });
});
