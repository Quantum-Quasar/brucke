import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";
import { LESSONS } from "../data/lessons";
import { compendium } from "../data/compendium";

// Docs-drift guard: README.md, AUDIT_MANIFEST.md and docs/README.md quote
// data counts (words, lessons) in prose. Those counts used to rot silently
// (the docs said "218 words / 109 lessons / 119 tests" long after the data
// grew). The compendium and the lesson list are the single authoritative
// source — this test fails while any doc still quotes the stale numbers.

const ROOT = path.resolve(__dirname, "../..");

function readRootDoc(name: string): string {
  return fs.readFileSync(path.join(ROOT, name), "utf-8");
}

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
});
