// ponytail: lean rule-based English lemmatizer covering core Germanic and curriculum queries

const IRREGULAR_VERBS: Record<string, string> = {
  drank: "drink",
  drunk: "drink",
  thought: "think",
  broke: "break",
  broken: "break",
  sang: "sing",
  sung: "sing",
  gave: "give",
  given: "give",
  swam: "swim",
  swum: "swim",
  found: "find",
  slept: "sleep",
  spoke: "speak",
  spoken: "speak",
  ate: "eat",
  eaten: "eat",
  drove: "drive",
  driven: "drive",
  went: "go",
  gone: "go",
  came: "come",
  brought: "bring",
  sat: "sit",
  lay: "lie",
  laid: "lay",
  sought: "seek",
  knew: "know",
  known: "know",
  said: "say",
  held: "hold",
  lost: "lose",
  began: "begin",
  begun: "begin",
  shot: "shoot",
  fled: "flee",
  bound: "bind",
  froze: "freeze",
  frozen: "freeze",
};

export function lemmatizeEnglish(input: string): string {
  if (!input) return "";
  let query = input.trim().toLowerCase();

  // 1. Strip leading articles & infinitive particle
  query = query.replace(/^(to|the|a|an)\s+/i, "").trim();

  // 2. Direct irregular lookup
  if (IRREGULAR_VERBS[query]) {
    return IRREGULAR_VERBS[query];
  }

  // 3. Continuous participle (-ing)
  if (query.length > 4 && query.endsWith("ing")) {
    const base = query.slice(0, -3);
    // Double consonant rule: swimming -> swim, dropping -> drop
    if (base.length > 2 && base[base.length - 1] === base[base.length - 2]) {
      return base.slice(0, -1);
    }
    // Silent e restoration: hoping -> hope, making -> make
    const withE = base + "e";
    const commonSilentE = ["hope", "make", "drive", "give", "live", "love", "come", "shine", "bite", "ride", "write", "close"];
    if (commonSilentE.includes(withE)) {
      return withE;
    }
    return base;
  }

  // 4. Past tense (-ed)
  if (query.length > 4 && query.endsWith("ed")) {
    const base = query.slice(0, -2);
    // Double consonant: dropped -> drop
    if (base.length > 2 && base[base.length - 1] === base[base.length - 2]) {
      return base.slice(0, -1);
    }
    // Verbs ending in e: lived -> live, loved -> love, hoped -> hope
    if (query.endsWith("d") && !query.endsWith("eed")) {
      const baseWithE = query.slice(0, -1);
      const commonSilentE = ["hope", "make", "drive", "give", "live", "love", "close", "bathe"];
      if (commonSilentE.includes(baseWithE)) {
        return baseWithE;
      }
    }
    return base;
  }

  // 5. Adverbial (-ly)
  if (query.length > 4 && query.endsWith("ly")) {
    return query.slice(0, -2);
  }

  // 6. Plural (-s / -es)
  if (query.length > 3 && query.endsWith("es")) {
    if (/(?:[sxz]|ch|sh)es$/.test(query)) {
      return query.slice(0, -2);
    }
    return query.slice(0, -1);
  }
  if (query.length > 3 && query.endsWith("s") && !query.endsWith("ss")) {
    return query.slice(0, -1);
  }

  return query;
}
