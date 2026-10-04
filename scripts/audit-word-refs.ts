// CLI wrapper around the shared word-reference integrity check.
// The checking logic lives in src/lib/word-refs-audit.ts so the Vitest suite
// (src/tests/word-refs.test.ts) enforces the exact same rules on every
// `bun run test` run; this script just prints failures verbosely.
// Run: bun scripts/audit-word-refs.ts

import { findUnresolvedWordRefs } from "../src/lib/word-refs-audit";

const misses = findUnresolvedWordRefs();

if (misses.length === 0) {
  console.log("✓ all word references resolve (word_ids, table_word_ids, transcribe, twist, literal_gloss)");
} else {
  console.log(`✗ ${misses.length} unresolved word references:`);
  for (const m of misses) console.log(`  lesson ${m.lesson} · ${m.where} · "${m.token}"`);
  process.exit(1);
}
