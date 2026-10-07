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

export type MasterEdgeKind = "family" | "phrase" | "compound" | "falsefriend" | "insight";

export interface MasterEdge {
  a: number;
  b: number;
  kind: MasterEdgeKind;
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
    const ka = nodes[a].kind;
    const kb = nodes[b].kind;
    const kind: MasterEdgeKind =
      ka === "word" && kb === "word" ? "family" : ka === "word" ? (kb as MasterEdgeKind) : (ka as MasterEdgeKind);
    edges.push({ a: Math.min(a, b), b: Math.max(a, b), kind });
  };

  const words = data.wordList;

  // Prefix index: target prefixes (len >= 3) -> word ids, plus exact map and
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

  // Only "important" phrases earn a node: ones that genuinely wire words
  // together (matching >= 2 other words), capped to the strongest 60.
  const keptPhrases: { owner: (typeof words)[number]; hits: string[] }[] = [];
  for (const w of words) {
    if (!w.context_phrase || w.context_phrase.trim().length < 4) continue;
    const hits = matchedWords(w.context_phrase, 6).filter((id) => id !== w.id);
    if (hits.length >= 2) keptPhrases.push({ owner: w, hits });
  }
  keptPhrases.sort((a, b) => b.hits.length - a.hits.length);
  const topPhrases = keptPhrases.slice(0, 60);

  // Words that matter: everything in a shift family, every word touched by a
  // kept phrase/compound/false-friend/insight. Plain unused vocabulary is
  // left out so the web stays legible.
  const keptWords = new Set<string>();
  for (const family of Object.values(data.shifts)) {
    for (const id of family.word_ids) keptWords.add(id);
  }
  for (const p of topPhrases) {
    keptWords.add(p.owner.id);
    for (const h of p.hits) keptWords.add(h);
  }
  for (const c of data.compounds) for (const h of matchedWords(`${c.compound} ${c.literal_morphemes}`, 6)) keptWords.add(h);
  for (const f of data.falseFriends) for (const h of matchedWords(f.german_word, 4)) keptWords.add(h);
  for (const ins of data.dailyInsights) for (const h of matchedWords(ins.german_expression, 6)) keptWords.add(h);

  const keptList = words.filter((w) => keptWords.has(w.id));
  keptList.forEach((w) => {
    addNode(
      { id: `w:${w.id}`, kind: "word", label: w.target_word, sub: w.english_cognate, wordId: w.id },
      WIDTH / 2 + (rng() - 0.5) * 1400,
      HEIGHT / 2 + (rng() - 0.5) * 1000,
    );
  });

  const near = (anchorWordId: string | undefined, spread = 60): { x: number; y: number } => {
    const anchorNodeId = anchorWordId ? `w:${anchorWordId}` : undefined;
    const anchorIdx = anchorNodeId ? nodeIndex.get(anchorNodeId) : undefined;
    const p = anchorIdx !== undefined ? nodes[anchorIdx] : { x: WIDTH / 2, y: HEIGHT / 2 };
    const ang = rng() * Math.PI * 2;
    const r = 30 + rng() * spread;
    return {
      x: p.x + Math.cos(ang) * r,
      y: p.y + Math.sin(ang) * r,
    };
  };

  // --- context phrases (the kept, connector phrases only) -----------------
  for (const { owner, hits } of topPhrases) {
    const p = near(owner.id);
    addNode(
      { id: `p:${owner.id}`, kind: "phrase", label: owner.context_phrase, sub: owner.context_translation },
      p.x,
      p.y,
    );
    addEdge(`p:${owner.id}`, `w:${owner.id}`);
    for (const other of hits.slice(0, 4)) {
      if (keptWords.has(other)) addEdge(`p:${owner.id}`, `w:${other}`);
    }
  }

  // --- compounds -----------------------------------------------------------
  for (const c of data.compounds) {
    const hits = matchedWords(`${c.compound} ${c.literal_morphemes}`, 4);
    const anchor = hits[0];
    const p = near(anchor ?? keptList[Math.floor(rng() * keptList.length)].id, 90);
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
    const p = near(anchor ?? keptList[Math.floor(rng() * keptList.length)].id, 90);
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
    const p = near(anchor ?? keptList[Math.floor(rng() * keptList.length)].id, 90);
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

  // --- force-directed layout -------------------------------------------------
  // Springs along edges (short for phrase→word, longer for family chains),
  // collision repulsion sized by each node's label, and weak centering gravity.
  // Connected clusters bunch together without collapsing into one blob.
  const ITERATIONS = 260;
  const cx = WIDTH / 2;
  const cy = HEIGHT / 2;
  const radii = nodes.map((n) =>
    n.kind === "word" ? 9 : Math.min(110, Math.max(14, n.label.length * 2.6 + 16)),
  );
  const targetLen = (kind: MasterEdgeKind): number =>
    kind === "family" ? 135 : kind === "phrase" ? 85 : 105;
  const vx = new Float64Array(nodes.length);
  const vy = new Float64Array(nodes.length);
  const cellSize = 100;
  for (let it = 0; it < ITERATIONS; it++) {
    const alpha = 1 - it / ITERATIONS;

    // collision / short-range repulsion via spatial grid
    const grid = new Map<string, number[]>();
    for (let i = 0; i < nodes.length; i++) {
      const key = `${Math.floor(nodes[i].x / cellSize)},${Math.floor(nodes[i].y / cellSize)}`;
      const bucket = grid.get(key);
      if (bucket) bucket.push(i);
      else grid.set(key, [i]);
    }
    for (let i = 0; i < nodes.length; i++) {
      const gx = Math.floor(nodes[i].x / cellSize);
      const gy = Math.floor(nodes[i].y / cellSize);
      for (let ox = -1; ox <= 1; ox++) {
        for (let oy = -1; oy <= 1; oy++) {
          const bucket = grid.get(`${gx + ox},${gy + oy}`);
          if (!bucket) continue;
          for (const j of bucket) {
            if (j <= i) continue;
            const a = nodes[i];
            const b = nodes[j];
            let dx = b.x - a.x;
            let dy = b.y - a.y;
            let dist = Math.hypot(dx, dy);
            const minDist = radii[i] + radii[j] + 10;
            if (dist >= minDist) continue;
            if (dist < 0.01) {
              dx = (i - j) * 0.5;
              dy = (i % 7) - 3;
              dist = Math.hypot(dx, dy) || 1;
            }
            const push = ((minDist - dist) / dist) * 0.5 * (0.4 + alpha);
            vx[i] -= dx * push;
            vy[i] -= dy * push;
            vx[j] += dx * push;
            vy[j] += dy * push;
          }
        }
      }
    }

    // springs
    for (const e of edges) {
      const a = nodes[e.a];
      const b = nodes[e.b];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const dist = Math.hypot(dx, dy) || 1;
      const pull = ((dist - targetLen(e.kind)) / dist) * 0.045 * (0.4 + alpha);
      vx[e.a] += dx * pull;
      vy[e.a] += dy * pull;
      vx[e.b] -= dx * pull;
      vy[e.b] -= dy * pull;
    }

    // gentle gravity + damping + clamp
    for (let i = 0; i < nodes.length; i++) {
      vx[i] += (cx - nodes[i].x) * 0.0012 * alpha;
      vy[i] += (cy - nodes[i].y) * 0.0012 * alpha;
      nodes[i].x = Math.min(WIDTH - 40, Math.max(40, nodes[i].x + vx[i]));
      nodes[i].y = Math.min(HEIGHT - 40, Math.max(40, nodes[i].y + vy[i]));
      vx[i] *= 0.6;
      vy[i] *= 0.6;
    }
  }

  return { nodes, edges };
}
