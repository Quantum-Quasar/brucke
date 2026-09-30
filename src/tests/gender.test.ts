import { describe, it, expect } from "vitest";
import { getGenderInfo } from "@/lib/gender";
import { compendium as data } from "@/data/compendium";

describe("Grammatical Gender Engine & Color Coding", () => {
  it("maps der to masculine azure blue metadata", () => {
    const info = getGenderInfo("der");
    expect(info).toBeDefined();
    expect(info?.gender).toBe("der");
    expect(info?.label).toBe("Masculine");
    expect(info?.colorName).toBe("Azure Blue");
    expect(info?.badgeClass).toContain("blue");
  });

  it("maps die to feminine vivid rose metadata", () => {
    const info = getGenderInfo("die");
    expect(info).toBeDefined();
    expect(info?.gender).toBe("die");
    expect(info?.label).toBe("Feminine");
    expect(info?.colorName).toBe("Vivid Rose");
    expect(info?.badgeClass).toContain("rose");
  });

  it("maps das to neuter emerald green metadata", () => {
    const info = getGenderInfo("das");
    expect(info).toBeDefined();
    expect(info?.gender).toBe("das");
    expect(info?.label).toBe("Neuter");
    expect(info?.colorName).toBe("Emerald Green");
    expect(info?.badgeClass).toContain("emerald");
  });

  it("returns null for null, undefined, or invalid gender", () => {
    expect(getGenderInfo(null)).toBeNull();
    expect(getGenderInfo(undefined)).toBeNull();
    expect(getGenderInfo("")).toBeNull();
    expect(getGenderInfo("invalid")).toBeNull();
  });

  it("verifies Hand in compendium has feminine gender die", () => {
    const hand = data.words["hand"] || data.wordList.find((w) => w.target_word === "Hand");
    expect(hand).toBeDefined();
    expect(hand?.gender).toBe("die");

    const info = getGenderInfo(hand?.gender);
    expect(info?.label).toBe("Feminine");
    expect(info?.badgeClass).toContain("rose");
  });

  it("verifies Wasser in compendium has neuter gender das", () => {
    const wasser = data.words["wasser"] || data.wordList.find((w) => w.target_word === "Wasser");
    expect(wasser).toBeDefined();
    expect(wasser?.gender).toBe("das");

    const info = getGenderInfo(wasser?.gender);
    expect(info?.label).toBe("Neuter");
    expect(info?.badgeClass).toContain("emerald");
  });

  it("verifies Bruder in compendium has masculine gender der", () => {
    const bruder = data.words["bruder"] || data.wordList.find((w) => w.target_word === "Bruder");
    expect(bruder).toBeDefined();
    expect(bruder?.gender).toBe("der");

    const info = getGenderInfo(bruder?.gender);
    expect(info?.label).toBe("Masculine");
    expect(info?.badgeClass).toContain("blue");
  });
});
