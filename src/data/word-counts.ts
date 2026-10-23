// Lightweight word counts for chrome that renders on every route (TopNav).
// Importing `@/data/language-content` here would pull all three languages'
// lessons and compendia (~3.2 MB) into the shared root chunk. These numbers are
// pinned to the compendia by `src/tests/languages.test.ts`; update them together.
export const WORD_COUNTS: Readonly<Record<string, number>> = {
  de: 1226,
  fr: 306,
  es: 293,
};

export function getWordCount(languageId: string): number {
  return WORD_COUNTS[languageId] ?? 0;
}
