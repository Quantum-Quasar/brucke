import rawCompendium from "./compendium.json";
import type { CompendiumData, WordEntity } from "@/lib/types";

// ponytail: derive wordList from words map at runtime instead of duplicating 218 objects in JSON
export const compendium: CompendiumData = {
  ...rawCompendium,
  wordList: Object.values(rawCompendium.words) as WordEntity[],
} as unknown as CompendiumData;

export default compendium;
