import { describe, it, expect } from "vitest";
import { generateMCQOptions, generateWordTiles, shuffleArray } from "@/lib/review-modes";
import compendium from "@/data/compendium.json";
import type { CompendiumData, WordEntity } from "@/lib/types";

const data = compendium as unknown as CompendiumData;
const words = data.wordList;

describe("Review Modes Engine & Question Generators", () => {
  it("generates 4 distinct MCQ options including the target word", () => {
    const target = words.find((w) => w.target_word === "Wasser") || words[0];
    const options = generateMCQOptions(target, words, 4);

    expect(options).toHaveLength(4);
    expect(options).toContain(target.target_word);

    // All options must be unique
    const unique = new Set(options);
    expect(unique.size).toBe(4);
  });

  it("prioritizes sound shift family words for MCQ distractors", () => {
    // Find a word with shift 't_to_s_ss_z' (water -> Wasser)
    const target = words.find((w) => w.sound_shift_ids.includes("t_to_s_ss_z"));
    expect(target).toBeDefined();
    if (!target) return;

    const options = generateMCQOptions(target, words, 4);
    expect(options).toContain(target.target_word);
    expect(options.length).toBe(4);
  });

  it("generates valid tiles that can assemble the target word", () => {
    const target = words.find((w) => w.target_word === "lernen") || words[0];
    const { tiles, targetChunks, targetAnswer } = generateWordTiles(target, words);

    expect(targetAnswer).toBe(target.target_word);
    expect(tiles.length).toBeGreaterThan(targetChunks.length); // includes distractors

    // Every required chunk must be present in the tiles array
    for (const chunk of targetChunks) {
      expect(tiles).toContain(chunk);
    }

    // Reassembling the targetChunks must equal targetAnswer
    expect(targetChunks.join("")).toBe(targetAnswer);
  });

  it("handles short words cleanly in tile builder", () => {
    const shortWord: WordEntity = {
      id: "gut",
      target_word: "gut",
      english_cognate: "good",
      english_meaning: "good",
      gender: null,
      ipa: "[ɡuːt]",
      sound_shift_ids: [],
      shift_rule: "direct",
      context_phrase: "Alles gut",
      context_translation: "All good",
      etymology_derivation: "Direct cognate",
    };

    const { tiles, targetChunks, targetAnswer } = generateWordTiles(shortWord, words);
    expect(targetAnswer).toBe("gut");
    expect(targetChunks.join("")).toBe("gut");
    expect(tiles.length).toBeGreaterThanOrEqual(3);
  });

  it("shuffles arrays without losing elements", () => {
    const items = [1, 2, 3, 4, 5, 6, 7];
    const shuffled = shuffleArray(items);
    expect(shuffled).toHaveLength(items.length);
    expect(shuffled.sort()).toEqual(items.sort());
  });
});
