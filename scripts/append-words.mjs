// Batch-append verified vocabulary records to §2 of word_connections.md.
// Usage: bun scripts/append-words.mjs /tmp/etym/family.json /tmp/etym/food.json ...
// Each JSON file = array of records {german, english, gender, ipa, shifts,
// context_phrase, context_translation, derivation}. Domain comes from the file
// name. Rows are inserted at the end of §2, numbered after the current max.
import fs from "fs";
import path from "path";

const mdPath = path.resolve(process.cwd(), "word_connections.md");
let content = fs.readFileSync(mdPath, "utf-8");

// existing ids (§2 German words lowercased) for dedupe
const sec2Match = content.match(/## 2\. Exhaustive Core Vocabulary Dictionary \(All \d+ Words\)([\s\S]*?)## 3\./);
if (!sec2Match) throw new Error("§2 not found");
const existingIds = new Set();
let maxRow = 0;
for (const line of sec2Match[1].split("\n")) {
  const m = line.match(/^\|\s*(\d+)\s*\|\s*\*\*(.+?)\*\*/);
  if (m) {
    maxRow = Math.max(maxRow, parseInt(m[1], 10));
    existingIds.add(m[2].toLowerCase());
  }
}

let nextRow = maxRow + 1;
const newRows = [];
const skipped = [];
const unverified = [];

for (const filePath of process.argv.slice(2)) {
  const domain = path.basename(filePath, ".json");
  const records = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  for (const r of records) {
    const id = r.german.toLowerCase();
    if (existingIds.has(id)) {
      skipped.push(`${r.german} (${domain}) — duplicate id`);
      continue;
    }
    existingIds.add(id);
    if (r.verdict === "UNVERIFIED") unverified.push(`${r.german} (${domain})`);
    if (r.derivation && !r.derivation.includes("[wiktionary]")) {
      unverified.push(`${r.german} (${domain}) — missing [wiktionary] tag`);
    }
    const shiftCell = Array.isArray(r.shifts)
      ? r.shifts.map((s) => `\`${s}\``).join(", ")
      : `\`${r.shifts}\``;
    const genderCell = r.gender === "-" ? "-" : r.gender;
    const row =
      `| ${nextRow} | **${r.german}** | ${r.english} | ${genderCell} | ${r.ipa} | ${shiftCell} | ` +
      `${r.context_phrase} *("${r.context_translation}")* | ${r.derivation} | ${domain} |`;
    newRows.push(row);
    nextRow++;
  }
}

if (newRows.length === 0) {
  console.log("No rows to append.");
  if (skipped.length) console.log("Skipped:\n - " + skipped.join("\n - "));
  process.exit(0);
}

// insert before the section terminator ("---" + "## 3.")
const insertAnchor = content.indexOf("## 3.");
if (insertAnchor === -1) throw new Error("§3 anchor not found");
// find the start of the "---" line right before "## 3."
const before = content.slice(0, insertAnchor);
const sepStart = before.lastIndexOf("---");
if (sepStart === -1) throw new Error("§2 terminator not found");
const block = newRows.join("\n") + "\n\n";
content = content.slice(0, sepStart) + block + content.slice(sepStart);

fs.writeFileSync(mdPath, content, "utf-8");
console.log(`Appended ${newRows.length} rows (${maxRow + 1}–${nextRow - 1}).`);
if (skipped.length) console.log("Skipped duplicates:\n - " + skipped.join("\n - "));
if (unverified.length) console.log("UNVERIFIED flags:\n - " + unverified.join("\n - "));
