import type { CompendiumData } from "@/lib/types";
import { hashSeed, mulberry32 } from "@/lib/prng";

type MasterNodeKind = "word" | "phrase" | "compound" | "falsefriend" | "insight";

export interface MasterNode {
  id: string;
  kind: MasterNodeKind;
  label: string;
  sub: string;
  /** compendium word id when this node maps to one */
  wordId?: string;
  x: number;
  y: number;
}

export interface MasterEdge {
  a: number;
  b: number;
}

const WIDTH = 2600;
const HEIGHT = 2000;

function tokensOf(s: string): string[] {
  return s
    .toLowerCase()
    .replace(/[^a-zäöüß\s-]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length >= 2);
}

/** Cheap fuzzy whole-word match: exact, prefix, or ~1 edit (catches "tut"/"tun", "Türen"/"Tür"). */
function tokenMatches(token: string, word: string): boolean {
  if (token === word) return true;
  if (Math.min(token.length, word.length) >= 3 && (token.startsWith(word) || word.startsWith(token))) return true;
  if (Math.abs(token.length - word.length) > 1) return false;
  let diff = 0;
  for (let i = 0; i < Math.min(token.length, word.length); i++) {
    if (token[i] !== word[i]) {
      diff++;
      if (diff > 1) return false;
    }
  }
  diff += Math.abs(token.length - word.length);
  return diff <= 1 && Math.min(token.length, word.length) >= 3;
}

export function buildMasterGraph(data: CompendiumData): { nodes: MasterNode[]; edges: MasterEdge[] } {
  const rng = mulberry32(hashSeed("master-graph-v1"));
  const nodes: MasterNode[] = [];
  const edges: MasterEdge[] = [];
  const edgeSet = new Set<string>();
  const nodeIndex = new Map<string, number>();

  if (!data.wordList.length) return { nodes, edges };

  const addNode = (n: Omit<MasterNode, "x" | "y">, x: number, y: number) => {
    nodeIndex.set(n.id, nodes.length);
    nodes.push({ ...n, x, y });
  };
  const addEdge = (aId: string, bId: string) => {
    const a = nodeIndex.get(aId);
    const b = nodeIndex.get(bId);
    if (a === undefined || b === undefined || a === b) return;
    const key = a < b ? `${a}-${b}` : `${b}-${a}`;
    if (edgeSet.has(key)) return;
    edgeSet.add(key);
    edges.push({ a: Math.min(a, b), b: Math.max(a, b) });
  };

  // --- words on a jittered grid -------------------------------------------
  const words = data.wordList;
  const cols = Math.max(4, Math.ceil(Math.sqrt(words.length * (WIDTH / HEIGHT))));
  const rows = Math.ceil(words.length / cols);
  const cellW = WIDTH / cols;
  const cellH = HEIGHT / rows;
  const wordPos = new Map<string, { x: number; y: number }>();
  words.forEach((w, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = Math.min(WIDTH - 40, Math.max(40, (col + 0.5) * cellW + (rng() - 0.5) * cellW * 0.7));
    const y = Math.min(HEIGHT - 40, Math.max(40, (row + 0.5) * cellH + (rng() - 0.5) * cellH * 0.7));
    wordPos.set(w.id, { x, y });
    addNode(
      { id: `w:${w.id}`, kind: "word", label: w.target_word, sub: w.english_cognate, wordId: w.id },
      x,
      y,
    );
  });

  // Inverted index: target prefixes (len >= 3) -> word ids, plus exact map and
  // words grouped by target length for the edit-distance fallback. This avoids
  // an O(phrases × words) fuzzy scan over the whole dictionary.
  const prefixIndex = new Map<string, Set<string>>();
  const exactIndex = new Map<string, string>();
  const byLength = new Map<number, { id: string; target: string }[]>();
  for (const w of words) {
    const t = w.target_word.toLowerCase();
    exactIndex.set(t, w.id);
    for (let len = 3; len <= t.length; len++) {
      const p = t.slice(0, len);
      let set = prefixIndex.get(p);
      if (!set) prefixIndex.set(p, (set = new Set()));
      set.add(w.id);
    }
    const bucket = byLength.get(t.length) ?? [];
    bucket.push({ id: w.id, target: t });
    byLength.set(t.length, bucket);
  }

  const matchedWords = (text: string, cap: number): string[] => {
    const out: string[] = [];
    const seen = new Set<string>();
    const push = (id: string) => {
      if (!seen.has(id)) {
        seen.add(id);
        out.push(id);
      }
    };
    for (const tok of tokensOf(text)) {
      const exact = exactIndex.get(tok);
      if (exact) push(exact);
      if (tok.length >= 3) {
        // target starts with the token ("Türen" matches "Tür")
        for (const id of prefixIndex.get(tok) ?? []) push(id);
        // token continues past the target ("Häusern" matches "Haus")
        for (let len = 3; len < tok.length; len++) {
          const id = exactIndex.get(tok.slice(0, len));
          if (id) push(id);
        }
      }
      // edit-distance-1 fallback (catches inflections like "tut"/"tun")
      for (let len = Math.max(3, tok.length - 1); len <= tok.length + 1; len++) {
        for (const w of byLength.get(len) ?? []) {
          if (!seen.has(w.id) && tokenMatches(tok, w.target)) push(w.id);
        }
      }
      if (out.length >= cap) return out.slice(0, cap);
    }
    return out.slice(0, cap);
  };

  const near = (anchorId: string, spread = 60): { x: number; y: number } => {
    const p = wordPos.get(anchorId) ?? { x: WIDTH / 2, y: HEIGHT / 2 };
    const ang = rng() * Math.PI * 2;
    const r = 30 + rng() * spread;
    return {
      x: Math.min(WIDTH - 30, Math.max(30, p.x + Math.cos(ang) * r)),
      y: Math.min(HEIGHT - 30, Math.max(30, p.y + Math.sin(ang) * r)),
    };
  };

  // --- context phrases (one per word), clustered around their owner -------
  for (const w of words) {
    if (!w.context_phrase || w.context_phrase.trim().length < 4) continue;
    const p = near(w.id);
    addNode(
      { id: `p:${w.id}`, kind: "phrase", label: w.context_phrase, sub: w.context_translation },
      p.x,
      p.y,
    );
    addEdge(`p:${w.id}`, `w:${w.id}`);
    for (const other of matchedWords(w.context_phrase, 4)) {
      if (other !== w.id) addEdge(`p:${w.id}`, `w:${other}`);
    }
  }

  // --- compounds -----------------------------------------------------------
  for (const c of data.compounds) {
    const hits = matchedWords(`${c.compound} ${c.literal_morphemes}`, 4);
    const anchor = hits[0];
    const p = near(anchor ?? words[Math.floor(rng() * words.length)].id, 90);
    addNode(
      { id: `c:${c.id}`, kind: "compound", label: c.compound, sub: c.real_meaning },
      p.x,
      p.y,
    );
    for (const h of hits) addEdge(`c:${c.id}`, `w:${h}`);
  }

  // --- false friends -------------------------------------------------------
  for (const f of data.falseFriends) {
    const hits = matchedWords(f.german_word, 3);
    const anchor = hits[0];
    const p = near(anchor ?? words[Math.floor(rng() * words.length)].id, 90);
    addNode(
      { id: `f:${f.id}`, kind: "falsefriend", label: f.german_word, sub: `looks like "${f.looks_like}"` },
      p.x,
      p.y,
    );
    for (const h of hits) addEdge(`f:${f.id}`, `w:${h}`);
  }

  // --- daily insight expressions -------------------------------------------
  for (const ins of data.dailyInsights) {
    const hits = matchedWords(ins.german_expression, 4);
    const anchor = hits[0];
    const p = near(anchor ?? words[Math.floor(rng() * words.length)].id, 90);
    addNode(
      { id: `i:${ins.day}`, kind: "insight", label: ins.german_expression, sub: ins.english_meaning },
      p.x,
      p.y,
    );
    for (const h of hits) addEdge(`i:${ins.day}`, `w:${h}`);
  }

  // --- word↔word edges within each shift family ----------------------------
  for (const family of Object.values(data.shifts)) {
    const ids = family.word_ids.filter((id) => nodeIndex.has(`w:${id}`));
    for (let i = 1; i < ids.length; i++) addEdge(`w:${ids[i - 1]}`, `w:${ids[i]}`);
    // a few cross-links so families form small loops, not just chains
    const extras = Math.min(4, Math.floor(ids.length / 6));
    for (let i = 0; i < extras; i++) {
      const a = ids[Math.floor(rng() * ids.length)];
      const b = ids[Math.floor(rng() * ids.length)];
      if (a && b) addEdge(`w:${a}`, `w:${b}`);
    }
  }

  return { nodes, edges };
}
