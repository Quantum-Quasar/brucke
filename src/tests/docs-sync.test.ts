import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";
import { LESSONS } from "../data/lessons";
import { compendium } from "../data/compendium";
import { THEMES } from "../data/themes";
import { FONT_LIST } from "../data/fonts";

// Docs-drift guard: README.md, AUDIT_MANIFEST.md, docs/README.md and pitch/*.md
// quote data counts (words, lessons, tests, themes, fonts) in prose. Those counts
// used to rot silently (the docs said "218 words / 109 lessons / 119 tests" long
// after the data grew — and the pitch package then repeated the pattern with
// "455 taught words" and "223 tests"). The compendium, the lesson list, the
// theme/font tables, and the test directory are the single authoritative
// sources — this test fails while any doc still quotes the stale numbers.

const ROOT = path.resolve(__dirname, "../..");

function readRootDoc(name: string): string {
  return fs.readFileSync(path.join(ROOT, name), "utf-8");
}

function readPitchDoc(name: string): string {
  return fs.readFileSync(path.join(ROOT, "pitch", name), "utf-8");
}

// Derived where the data allows it. TEST_COUNT is the one number maintained by
// hand: it must match what `bun run test` prints. TAUGHT_WORDS must match
// `bun scripts/audit-vocab-balance.ts` ("unique taught words").
const TEST_FILE_COUNT = fs
  .readdirSync(path.join(ROOT, "src", "tests"))
  .filter((f) => f.endsWith(".test.ts")).length;
const TEST_COUNT = 234; // update when adding tests
const THEME_COUNT = Object.keys(THEMES).length;
const FONT_COUNT = FONT_LIST.length;
const TAUGHT_WORDS = 656; // update after running scripts/audit-vocab-balance.ts

describe("Documentation stays in sync with the data", () => {
  const wordCount = Object.keys(compendium.words).length;
  const lessonCount = LESSONS.length;

  it("README.md quotes the current word and lesson counts", () => {
    const readme = readRootDoc("README.md");
    expect(readme, "README.md must quote the current core-word count").toContain(`${wordCount} core words`);
    expect(readme, "README.md must quote the current lesson count").toContain(`${lessonCount} lessons`);
  });

  it("AUDIT_MANIFEST.md quotes the current word and lesson counts", () => {
    const manifest = readRootDoc("AUDIT_MANIFEST.md");
    expect(manifest, "AUDIT_MANIFEST.md must quote the current word count").toContain(`${wordCount} words`);
    expect(manifest, "AUDIT_MANIFEST.md must quote the current lesson count").toContain(`${lessonCount} lessons`);
  });

  it("docs/README.md quotes the current lesson count", () => {
    const docsReadme = readRootDoc(path.join("docs", "README.md"));
    expect(docsReadme, "docs/README.md must quote the current lesson count").toContain(
      `= ${lessonCount} lessons`
    );
  });

  it("root docs no longer carry the superseded audit numbers", () => {
    for (const doc of ["README.md", "AUDIT_MANIFEST.md"]) {
      const text = readRootDoc(doc);
      // \b so "128 pages" doesn't false-match the "28 pages" claim
      expect(text, `${doc} still claims the stale 218-word count`).not.toMatch(/\b218 (core )?words/);
      expect(text, `${doc} still claims 109 lessons`).not.toMatch(/\b109 lessons/);
      expect(text, `${doc} still claims 119 tests`).not.toMatch(/\b119 tests/);
      expect(text, `${doc} still claims 28 pages`).not.toMatch(/\b28 (static )?pages/);
      expect(text, `${doc} still claims only the first 10 lessons are interactive`).not.toMatch(
        /first 10 foundational/
      );
    }
  });

  it("root docs quote the current test-suite counts", () => {
    for (const doc of ["README.md", "AUDIT_MANIFEST.md"]) {
      const text = readRootDoc(doc);
      expect(text, `${doc} must quote the current test-file count`).toContain(
        `${TEST_FILE_COUNT} test files`
      );
      expect(text, `${doc} must quote the current test count`).toContain(`${TEST_COUNT}`);
      expect(text, `${doc} still claims the stale 29-test-file count`).not.toContain(
        "29 test files"
      );
      expect(text, `${doc} still claims the stale ~215-test count`).not.toContain("~215");
    }
  });

  it("pitch/ quotes the current taught-word count", () => {
    for (const doc of [
      "01-market-research.md",
      "02-executive-summary.md",
      "03-pitch-deck.md",
      "04-funding-roadmap.md",
    ]) {
      const text = readPitchDoc(doc);
      expect(text, `pitch/${doc} must quote the current taught-word count`).toMatch(
        new RegExp(`\\b${TAUGHT_WORDS}\\b`)
      );
      expect(text, `pitch/${doc} still quotes the stale 455 taught words`).not.toContain(
        "455 unique taught words"
      );
    }
  });

  it("pitch/ quotes the current test-suite count", () => {
    for (const doc of ["02-executive-summary.md", "03-pitch-deck.md"]) {
      const text = readPitchDoc(doc);
      expect(text, `pitch/${doc} must quote the current test count`).toContain(
        `${TEST_COUNT} automated tests`
      );
      expect(text, `pitch/${doc} still quotes the stale 223-test count`).not.toContain(
        "223 automated tests"
      );
    }
  });

  it("pitch/ quotes the current theme and font counts", () => {
    for (const doc of [
      "01-market-research.md",
      "02-executive-summary.md",
      "03-pitch-deck.md",
    ]) {
      const text = readPitchDoc(doc);
      expect(text, `pitch/${doc} must quote the current theme count`).toMatch(
        new RegExp(`\\b${THEME_COUNT}\\b`)
      );
      expect(text, `pitch/${doc} must quote the current font count`).toMatch(
        new RegExp(`\\b${FONT_COUNT}\\b`)
      );
    }
  });
});
