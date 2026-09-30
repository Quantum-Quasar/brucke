import fs from "fs";
import path from "path";
import type { CompendiumData, WordEntity, ShiftFamily, CompoundCalque, FalseFriend, DailyInsight, Gender } from "../src/lib/types";

const mdPath = path.resolve(__dirname, "../word_connections.md");
const outputPath = path.resolve(__dirname, "../src/data/compendium.json");

const content = fs.readFileSync(mdPath, "utf-8");

// 1. Parse Shifts
const shifts: Record<string, ShiftFamily> = {
  th_to_d: {
    id: "th_to_d",
    name: "The Dental Shift (TH → D)",
    symbol: "TH → D",
    phonetic_rule: 'English "th" (/θ/ or /ð/) ➔ German "d" ([d])',
    historical_linguistics: 'Every single original Germanic "th" sound systematically shifted to "d" in High German, while English kept the ancient "th".',
    philological_note: "Around 500–700 AD in the High German Consonant Shift, dental fricatives hardened into voiced dental stops.",
    literature_source: "Joseph Wright's Historical German Grammar",
    word_ids: [],
  },
  d_to_t: {
    id: "d_to_t",
    name: "The Stop Shift (D → T)",
    symbol: "D → T",
    phonetic_rule: 'English "d" ➔ German "t"',
    historical_linguistics: 'Where English kept Germanic "d", High German hardened it into "t".',
    philological_note: "Voiced stops became voiceless. Explains pairs like day ↔ Tag, door ↔ Tür, and drink ↔ trinken.",
    literature_source: "Complementary to the TH → D shift: as TH took over D, original D shifted to T in High German.",
    word_ids: [],
  },
  p_to_pf_f: {
    id: "p_to_pf_f",
    name: "The Labial Shift (P → PF / F)",
    symbol: "P → PF / F",
    phonetic_rule: 'English "p" ➔ German "pf" (initial) or "f/ff" (medial/final)',
    historical_linguistics: 'Proto-Germanic /p/ shifted to the affricate "pf" at the beginning of words, and to "f" or "ff" after vowels.',
    philological_note: "Explains apple ↔ Apfel, pepper ↔ Pfeffer, hope ↔ hoffen, and sleep ↔ schlafen.",
    literature_source: "Skeat's Principles of English Etymology",
    word_ids: [],
  },
  t_to_s_ss_z: {
    id: "t_to_s_ss_z",
    name: "The Sibilant Shift (T → S / SS / Z)",
    symbol: "T → S / SS / Z",
    phonetic_rule: 'English "t" ➔ German "s/ss/ß" or "z" (/ts/)',
    historical_linguistics: 'Proto-Germanic /t/ shifted to sibilant "s/ss/ß" after vowels, and to "z" (/ts/) at the beginning of words.',
    philological_note: "Reveals water ↔ Wasser, eat ↔ essen, better ↔ besser, two ↔ zwei, and to ↔ zu.",
    literature_source: "Walter Skeat - Primary dental affrication and spirantization",
    word_ids: [],
  },
  k_to_ch: {
    id: "k_to_ch",
    name: "The Velar Shift (K → CH)",
    symbol: "K → CH",
    phonetic_rule: 'English "k" or "c" ➔ German "ch" ([x] or [ç])',
    historical_linguistics: 'Proto-Germanic /k/ softened to the fricative "ch" in medial and final positions.',
    philological_note: "The Ach-Laut [x] occurs after a, o, u; the Ich-Laut [ç] occurs after e, i, ä, ö, ü.",
    literature_source: "Ach-Laut and Ich-Laut phonological rules",
    word_ids: [],
  },
  v_to_b: {
    id: "v_to_b",
    name: "The Bilabial Shift (V / F → B)",
    symbol: "V / F → B",
    phonetic_rule: 'English "v" or "f" ➔ German "b"',
    historical_linguistics: "Intervocalic /v/ and /f/ in English regularly correspond to voiced /b/ in German.",
    philological_note: "Explains give ↔ geben, live ↔ leben, love ↔ lieben, over ↔ über, and seven ↔ sieben.",
    literature_source: "Proto-Germanic bilabial spirant closing to stop in High German",
    word_ids: [],
  },
  y_gh_to_g_ch: {
    id: "y_gh_to_g_ch",
    name: "The Palatal & Guttural Link (Y → G & GH → CH)",
    symbol: "Y/GH → G/CH",
    phonetic_rule: 'English "y" (initial/medial) or "gh" ➔ German "g" or "ch"',
    historical_linguistics: 'English vocalized palatal "g" into "y" (say, day, yesterday) and silenced "gh" (night, laugh, light). German preserved them as "g" or "ch".',
    philological_note: "Explains why English spelling has silent 'gh' letters — they were original German-like gutturals!",
    literature_source: "Skeat & Wright historical consonant preservation",
    word_ids: [],
  },
  latin_ieren: {
    id: "latin_ieren",
    name: "The Latin / Romance Layer (-ate / -ize → -ieren)",
    symbol: "-ate/-ize → -ieren",
    phonetic_rule: "English verbs ending in -ate, -ize, -ify, -ish ➔ German verbs ending in -ieren",
    historical_linguistics: "English verbs derived from Latin or French directly map to German verbs ending in -ieren.",
    philological_note: 'Past participles of -ieren verbs never take the "ge-" prefix (studieren → studiert).',
    literature_source: "Middle High German productive loan suffix from Old French -ier",
    word_ids: [],
  },
  strong_verbs_ablaut: {
    id: "strong_verbs_ablaut",
    name: "The 7 Strong Verb Classes (Ablaut)",
    symbol: "Ablaut Vowels",
    phonetic_rule: "English irregular strong verbs with internal vowel changes ➔ German strong verbs following the exact same Ablautreihe",
    historical_linguistics: "Shared 7 Proto-Germanic verb classes where tenses are formed by shifting root vowels.",
    philological_note: "sing/sang/sung ↔ singen/sang/gesungen, drink/drank/drunk ↔ trinken/trank/getrunken.",
    literature_source: "Proto-Indo-European vowel gradation (Ablaut)",
    word_ids: [],
  },
};

// 2. Parse 218 Core Words
const words: Record<string, WordEntity> = {};
const wordList: WordEntity[] = [];

// Split by section 2 (header counts are kept in sync by hand; the regex accepts any count)
const sec2Match = content.match(/## 2\. Exhaustive Core Vocabulary Dictionary \(All \d+ Words\)([\s\S]*?)## 3\./);
if (sec2Match) {
  const tableContent = sec2Match[1];
  const lines = tableContent.split("\n");
  for (const line of lines) {
    if (!line.startsWith("|") || line.includes("---") || line.includes("German Word")) continue;
    const cols = line.split("|").map((c) => c.trim()).filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);
    if (cols.length < 8) continue;

    const num = parseInt(cols[0], 10);
    const rawGerman = cols[1].replace(/\*\*/g, "").trim();
    const rawEnglish = cols[2].replace(/\*\*/g, "").trim();
    const rawGender = cols[3].trim();
    const ipa = cols[4].trim();
    const shiftPatternRaw = cols[5].replace(/`/g, "").trim();
    const contextRaw = cols[6].trim();
    const etymology = cols[7].trim();

    let gender: Gender | null = null;
    if (rawGender.startsWith("der")) gender = "der";
    else if (rawGender.startsWith("die")) gender = "die";
    else if (rawGender.startsWith("das")) gender = "das";

    let context_phrase = contextRaw;
    let context_translation = "";
    const phraseMatch = contextRaw.match(/^(.*?)\s*\*\("?(.*?)"?\)\*$/);
    if (phraseMatch) {
      context_phrase = phraseMatch[1].trim();
      context_translation = phraseMatch[2].trim();
    }

    const sound_shift_ids: string[] = [];
    shiftPatternRaw.split(",").map((s) => s.trim()).forEach((pattern) => {
      const p = pattern.toLowerCase();
      if (p.includes("th_to_d")) sound_shift_ids.push("th_to_d");
      else if (p.includes("d_to_t")) sound_shift_ids.push("d_to_t");
      else if (p.includes("p_to_pf_f")) sound_shift_ids.push("p_to_pf_f");
      else if (p.includes("t_to_s_ss_z")) sound_shift_ids.push("t_to_s_ss_z");
      else if (p.includes("k_to_ch")) sound_shift_ids.push("k_to_ch");
      else if (p.includes("v_to_b")) sound_shift_ids.push("v_to_b");
      else if (p.includes("y_gh_to_g_ch")) sound_shift_ids.push("y_gh_to_g_ch");
      else if (p.includes("latin_ieren")) sound_shift_ids.push("latin_ieren");
      else if (p.includes("strong_verbs_ablaut")) sound_shift_ids.push("strong_verbs_ablaut");
    });

    const ablautVerbs = ["singen", "trinken", "finden", "treiben", "greifen", "brechen", "sprechen", "geben", "liegen", "helfen", "schlafen", "kommen", "gehen", "schwimmen", "bringen", "essen", "sitzen", "ziehen"];
    if (ablautVerbs.includes(rawGerman.toLowerCase()) && !sound_shift_ids.includes("strong_verbs_ablaut")) {
      sound_shift_ids.push("strong_verbs_ablaut");
    }

    const shift_rule = sound_shift_ids.map((id) => shifts[id]?.symbol || id).join(" + ") || "Direct Cognate";

    const id = rawGerman.toLowerCase();
    const wordEntity: WordEntity = {
      id,
      target_word: rawGerman,
      english_cognate: rawEnglish,
      english_meaning: rawEnglish,
      gender,
      ipa,
      sound_shift_ids,
      shift_rule,
      context_phrase,
      context_translation,
      etymology_derivation: etymology,
    };

    words[id] = wordEntity;
    wordList.push(wordEntity);

    // Register word in shift families
    for (const sid of sound_shift_ids) {
      if (shifts[sid]) {
        shifts[sid].word_ids.push(id);
      }
    }
  }
}

// 3. Parse Compounds
const compounds: CompoundCalque[] = [];
const sec3Match = content.match(/## 3\. Complete Morphological Compound Calques \(All \d+ Compounds\)([\s\S]*?)## 4\./);
if (sec3Match) {
  const lines = sec3Match[1].split("\n");
  for (const line of lines) {
    if (!line.startsWith("|") || line.includes("---") || line.includes("Literal Morphemes")) continue;
    const cols = line.split("|").map((c) => c.trim()).filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);
    if (cols.length < 6) continue;

    const rawCompound = cols[1].replace(/\*\*/g, "").trim();
    const literal = cols[2].replace(/\*|"/g, "").trim();
    const realMeaning = cols[3].replace(/\*\*/g, "").trim();
    const englishCounterpart = cols[4].trim();
    const lore = cols[5].replace(/<br>/g, " ").trim();

    let gender: Gender | null = null;
    let cleanWord = rawCompound;
    if (rawCompound.startsWith("der ")) {
      gender = "der";
      cleanWord = rawCompound.substring(4);
    } else if (rawCompound.startsWith("die ")) {
      gender = "die";
      cleanWord = rawCompound.substring(4);
    } else if (rawCompound.startsWith("das ")) {
      gender = "das";
      cleanWord = rawCompound.substring(4);
    }

    compounds.push({
      id: cleanWord.toLowerCase(),
      compound: rawCompound,
      gender,
      literal_morphemes: literal,
      real_meaning: realMeaning,
      english_counterpart: englishCounterpart,
      lore,
    });
  }
}

// 4. Parse False Friends
const falseFriends: FalseFriend[] = [];
const sec4Match = content.match(/## 4\. Complete False Friend Traps \(All \d+ Falsche Freunde\)([\s\S]*?)## 5\./);
if (sec4Match) {
  const lines = sec4Match[1].split("\n");
  for (const line of lines) {
    if (!line.startsWith("|") || line.includes("---") || line.includes("German Word")) continue;
    const cols = line.split("|").map((c) => c.trim()).filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);
    if (cols.length < 5) continue;

    const germanWord = cols[1].replace(/\*\*/g, "").trim();
    const looksLike = cols[2].replace(/\*|"/g, "").trim();
    const actualMeaning = cols[3].replace(/\*\*/g, "").trim();
    const trapNote = cols[4].trim();

    falseFriends.push({
      id: germanWord.replace(/^(der|die|das)\s+/, "").toLowerCase(),
      german_word: germanWord,
      looks_like: looksLike,
      actual_meaning: actualMeaning,
      trap_note: trapNote,
    });
  }
}

// 5. Parse Daily Insights
const dailyInsights: DailyInsight[] = [];
const sec5Match = content.match(/## 5\. Complete Daily Cultural Etymologies \(All \d+ Days\)([\s\S]*)$/);
if (sec5Match) {
  const lines = sec5Match[1].split("\n");
  for (const line of lines) {
    if (!line.startsWith("|") || line.includes("---") || line.includes("German Expression")) continue;
    const cols = line.split("|").map((c) => c.trim()).filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);
    if (cols.length < 5) continue;

    const dayNum = parseInt(cols[0].replace(/Day\s+/i, ""), 10);
    const expression = cols[1].replace(/\*\*/g, "").trim();
    const meaning = cols[2].trim();
    const etymology = cols[3].trim();
    const takeaway = cols[4].replace(/\*/g, "").trim();

    dailyInsights.push({
      day: isNaN(dayNum) ? dailyInsights.length + 1 : dayNum,
      german_expression: expression,
      english_meaning: meaning,
      cultural_etymology: etymology,
      takeaway_principle: takeaway,
    });
  }
}

// Ensure directory exists
fs.mkdirSync(path.dirname(outputPath), { recursive: true });

const compendium = {
  words,
  shifts,
  compounds,
  falseFriends,
  dailyInsights,
};

fs.writeFileSync(outputPath, JSON.stringify(compendium, null, 2), "utf-8");
fs.writeFileSync(path.resolve(__dirname, "../src/data/insights.json"), JSON.stringify(dailyInsights, null, 2), "utf-8");
console.log(`[Brücke Compendium Parser] Compiled:
 - ${wordList.length} Core Words
 - ${Object.keys(shifts).length} Shift Families
 - ${compounds.length} Compound Calques
 - ${falseFriends.length} False Friends
 - ${dailyInsights.length} Daily Cultural Insights
Saved to: ${outputPath}`);
