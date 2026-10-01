// TM-3 slip diagnosis: message table keyed by shift-family id (or detected slip id).
// German rows live here; other languages define their own tables in their
// language-content module and pass them to diagnoseAttempt. Every cue states a real
// law from §1 of word_connections.md or the trail's taught patterns — no invented
// connections (P7).

export interface DiagnosisRow {
  slip: string;
  cue: string;
}

export const GERMAN_DIAGNOSIS: Record<string, DiagnosisRow> = {
  t_to_s_ss_z: {
    slip: "the English T survived",
    cue: "High German hisses T into SS/S/Z — Wasser, besser, zwei.",
  },
  th_to_d: {
    slip: "the English TH survived",
    cue: "German abolished 'th' 1,300 years ago — harden it to D: denken, Dank, Bruder.",
  },
  d_to_t: {
    slip: "the English D survived",
    cue: "Voiced D hardened to T in High German: Tag, Tür, trinken.",
  },
  p_to_pf_f: {
    slip: "the English P survived",
    cue: "Word-initial P explodes to PF (Pfad); after vowels it breathes to F/FF (hoffen, Schiff).",
  },
  k_to_ch: {
    slip: "the English K survived",
    cue: "K melts into ch after vowels — machen, Buch, suchen.",
  },
  v_to_b: {
    slip: "the English V survived",
    cue: "English v/f between vowels is German b: geben, leben, lieben.",
  },
  y_gh_to_g_ch: {
    slip: "the ghost letter stayed silent",
    cue: "English gh/y carries the old sound German still pronounces: Nacht, sagen, acht.",
  },
  strong_verbs_ablaut: {
    slip: "the vowel melody was flattened",
    cue: "Strong verbs change the root vowel — sing/sang ↔ singen/sang.",
  },
  latin_ieren: {
    slip: "the -ieren stamp was dropped",
    cue: "Romance loan verbs end in -ieren and never take ge-.",
  },
  // sh ↔ sch spelling: English sh (ship, fish) is German sch (Schiff, Fisch).
  sch_spelling: {
    slip: "the sh-sound kept its bare English S",
    cue: "English sh (ship, fish) is German sch — Schiff, Fisch, schlafen. Same sound, German spelling.",
  },
  // Word-order slides, fired from transcribe order errors (keyed separately).
  word_order: {
    slip: "the elements are in English order",
    cue: "Find the verb's seat first — position 2, or the basement after dass/weil — then pour the rest around it.",
  },
  // A word_bank distractor slipped into a transcribe attempt.
  wrong_word: {
    slip: "wrong word, right idea",
    cue: "The thought was right — a bank word the sentence doesn't need slipped in. Say it to yourself and keep only the words the thought calls for.",
  },
};
