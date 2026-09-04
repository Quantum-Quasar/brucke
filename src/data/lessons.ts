import type { Lesson } from "../lib/types";

export const LESSONS: Lesson[] = [
  {
    id: 1,
    slug: "germanic-core",
    title: "The Germanic Core",
    subtitle: "Hundreds of German words you already know without realizing it",
    phase: 1,
    shift_categories: [],
    word_ids: ["lernen", "finden", "kommen", "gehen", "singen", "schwimmen", "bringen", "arm", "hand", "finger"],
    table_word_ids: ["lernen", "finden", "kommen", "gehen", "singen", "schwimmen", "bringen"],
    hook: {
      title: "You Don't Start from Zero",
      content:
        "English and German are sibling languages born from the same ancestral tribe in northern Europe. Before Latin, French, and the Norman Conquest reshaped English, English and German were virtually identical. Over 60% of core spoken English vocabulary has an unbroken Germanic twin.",
      footnotes: [
        {
          marker: "1",
          title: "Proto-Germanic Roots",
          content: "Spoken roughly 500 BC to 500 AD across southern Scandinavia and northern Germany before expanding westward into the British Isles.",
        },
      ],
    },
    pattern: {
      title: "The Universal -en Infinitive",
      content:
        "In English, we mark dictionary verbs with the preposition 'to' (to learn, to find, to sing). German does something cleaner: it attaches the suffix '-en' directly onto the end of the root. Strip '-en' and you find the English word staring right back at you.",
      footnotes: [
        {
          marker: "2",
          title: "The Living English -en Suffix",
          content: "English still uses Germanic -en to turn words into verbs: bright → brighten, short → shorten, deep → deepen, wide → widen. German simply kept -en on all dictionary verbs!",
        },
      ],
      linguist_note:
        "Old English also possessed the infinitive suffix -an (e.g. singan, findan), which was gradually leveled to -en in Middle English and completely dropped during the Early Modern English period.",
    },
    exercises: [
      {
        id: "l1_e1",
        type: "morpheme_tiles",
        prompt: "Assemble the German infinitive for 'to learn' (learn + en):",
        tile_options: ["lern", "en", "komm", "st"],
        target_answer: "lernen",
        meaning: "to learn",
        explanation: "Stem 'lern-' + infinitive ending '-en' = lernen.",
      },
      {
        id: "l1_e2",
        type: "matching_pairs",
        prompt: "Match each English verb with its German -en twin:",
        matching_pairs: [
          { id: "p1", english: "come", german: "kommen" },
          { id: "p2", english: "find", german: "finden" },
          { id: "p3", english: "sing", german: "singen" },
          { id: "p4", english: "swim", german: "schwimmen" },
        ],
        target_answer: "kommen, finden, singen, schwimmen",
        meaning: "to come, to find, to sing, to swim",
        explanation: "German attaches the universal infinitive suffix -en to Germanic verb roots.",
      },
      {
        id: "l1_e3",
        type: "derive",
        prompt: "Apply the -en rule: English 'to bring' → German verb:",
        english_hint: "bring + en",
        target_answer: "bringen",
        meaning: "to bring",
        explanation: "Stem 'bring-' + infinitive ending '-en' = bringen.",
      },
      {
        id: "l1_e4",
        type: "reverse_cognate",
        prompt: "What native English verb shares the exact root of 'singen'?",
        target_answer: "sing",
        meaning: "to sing (twin of German singen)",
        explanation: "German 'singen' is the direct twin of English 'to sing'.",
      },
      {
        id: "l1_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'I learn German with Brücke'",
        target_answer: "Ich lerne Deutsch mit Brücke",
        meaning: "I learn German with Brücke",
        vocab_hints: [
          {
            word: "mit",
            translation: "with",
            note: "cognate with archaic English 'mid' in 'midwife' (literally: with-woman)",
          },
          {
            word: "Brücke",
            translation: "bridge",
            note: "English softened Germanic -ck- into -dge (Brücke ↔ bridge, Rücken ↔ ridge, Ecke ↔ edge)",
          },
          {
            word: "Deutsch",
            translation: "German",
            note: "same word as 'Dutch' in 'Pennsylvania Dutch' (German settlers in America who spoke Deutsch)",
          },
        ],
        word_bank: ["Ich", "lerne", "Deutsch", "mit", "Brücke"],
        explanation: "Verb in Position 2: 'Ich lerne...'. 'mit' means with (as in midwife), and 'Brücke' is bridge (cognate with ridge/Rücken).",
      },
    ],
    summary: {
      takeaway: "Whenever you see a German verb ending in -en, strip the ending to look for the English root.",
      curiosity_teaser: "Next up: How German builds sentences around power verbs like 'can', 'will', and 'must'.",
    },
  },
  {
    id: 2,
    slug: "modals-and-inversion",
    title: "Modal Auxiliaries & The Bracket",
    subtitle: "Unlocking fluent sentences with 'can', 'must', and 'want'",
    phase: 1,
    shift_categories: ["t_to_s_ss_z"],
    word_ids: ["können", "müssen", "wollen", "haben", "sein"],
    table_word_ids: ["können", "müssen", "wollen", "haben", "sein"],
    hook: {
      title: "The Lazy Speaker's Secret Weapon",
      content:
        "Conjugating dozens of German verbs can feel intimidating. Modal auxiliary verbs are your shortcut: conjugate just ONE modal verb in Position 2, and the rest of your thought travels to the end as an uninflected, easy infinitive!",
      footnotes: [
        {
          marker: "1",
          title: "Satzklammer Principle",
          content: "The sentence bracket (Satzklammer) frames your sentence between the conjugated auxiliary verb and the final bare infinitive.",
        },
      ],
    },
    pattern: {
      title: "The Modals: können, müssen, wollen",
      content:
        "German 'ich will' = I want (not future 'I will'!). In ancient English and German, 'will' always meant desire or intent. English still uses this original meaning in living phrases like 'free will', 'will to live', 'against my will', and 'willingly' (related to Latin voluntas → voluntary). When you say 'Ich will lernen', you assert your will: 'I desire to learn'! Likewise, 'ich kann' = I can (originally 'to know', living in cunning, uncanny, and beyond my ken), and 'ich muss' = I must. Notice how 'ich will lernen' requires no extra 'zu' (to)!",
      footnotes: [
        {
          marker: "2",
          title: "Free Will & Voluntary",
          content:
            "Old English 'willan' meant 'to desire/wish'. English shifted it into a future tense marker, but kept its true desire meaning in 'free will', 'will to live', 'last will and testament', and Latin-borrowed 'voluntary'.",
        },
      ],
      linguist_note:
        "Why do German modals drop the -t ending in 'er kann', 'er will', 'er muss'? English does the exact same thing! We say 'he can' (never 'he cans!'), 'he will' (never 'he wills!'), and 'he must' (never 'he musts!'). Both languages preserve this unique ancient pattern!",
    },
    exercises: [
      {
        id: "l2_e1",
        type: "shift_select",
        prompt: "Which modal verb translates to 'I want' (as in 'free will' and 'will to live')?",
        options: ["ich will", "ich kann", "ich muss", "ich soll"],
        target_answer: "ich will",
        meaning: "I want / I desire (not future 'will')",
        vocab_hints: [
          {
            word: "will",
            translation: "want / desire",
            note: "false friend: means 'want', as in 'free will', 'will to live', or 'voluntary'",
          },
          {
            word: "soll",
            translation: "shall / supposed to",
            note: "direct twin of English 'shall' (Shakespeare: 'thou shalt' ↔ German 'du sollst')",
          },
        ],
        explanation:
          "German 'ich will' means 'I want/desire'. English keeps this original meaning in 'free will', 'will to live', 'against my will', and 'voluntary'.",
      },
      {
        id: "l2_e2",
        type: "matching_pairs",
        prompt: "Match the modal phrases to their English meanings:",
        matching_pairs: [
          { id: "m1", english: "I can", german: "ich kann" },
          { id: "m2", english: "I must", german: "ich muss" },
          { id: "m3", english: "I want", german: "ich will" },
          { id: "m4", english: "to have", german: "haben" },
        ],
        target_answer: "ich kann, ich muss, ich will, haben",
        meaning: "I can, I must, I want, to have",
        explanation: "Modal auxiliaries anchor German sentence frames and simplify communication.",
      },
      {
        id: "l2_e3",
        type: "derive",
        prompt: "Complete with modal 'can': 'Ich _____ schwimmen' (I can swim / know how to swim):",
        english_hint: "cognate of 'can' (think: beyond my ken, cunning, uncanny)",
        target_answer: "kann",
        meaning: "Ich kann schwimmen = I can swim",
        explanation:
          "Stem 'können' → 'ich kann'. English 'can' and German 'kann' originally meant 'to know' (seen in 'uncanny' and 'beyond my ken').",
      },
      {
        id: "l2_e4",
        type: "syntax_builder",
        prompt: "Assemble: 'I want to learn German'",
        target_answer: "Ich will Deutsch lernen",
        meaning: "I want to learn German",
        vocab_hints: [
          {
            word: "will",
            translation: "want to",
            note: "asserting desire ('free will'). Sentence bracket puts 'lernen' at the end!",
          },
        ],
        word_bank: ["Ich", "will", "Deutsch", "lernen"],
        explanation: "Modal 'will' in position 2; infinitive 'lernen' kicked cleanly to the end!",
      },
      {
        id: "l2_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'I can come tomorrow'",
        target_answer: "Ich kann morgen kommen",
        meaning: "I can come tomorrow",
        vocab_hints: [
          {
            word: "morgen",
            translation: "tomorrow",
            note: "English 'tomorrow' literally means 'to the morrow' (to the morning!)",
          },
          {
            word: "kann",
            translation: "can / am able to",
            note: "related to 'can' and 'ken' (knowledge)",
          },
        ],
        word_bank: ["Ich", "kann", "morgen", "kommen"],
        explanation: "The Satzklammer wraps around 'morgen', placing bare infinitive 'kommen' at the caboose.",
      },
    ],
    summary: {
      takeaway: "Use modal + bare infinitive at the end to assemble complex thoughts immediately.",
      curiosity_teaser: "Next: The single consonant shift that turned English 'hope' into 'hoffen' and 'ship' into 'Schiff'.",
    },
  },
  {
    id: 3,
    slug: "p-to-f-shift",
    title: "The P → F / FF Shift",
    subtitle: "How English preserved what German transformed",
    phase: 1,
    shift_categories: ["p_to_pf_f"],
    word_ids: ["hoffen", "helfen", "schlafen", "Schiff", "Affe", "reifen", "Apfel", "Pfeffer", "Pfad"],
    table_word_ids: ["hoffen", "helfen", "schlafen", "Schiff", "Affe", "reifen"],
    hook: {
      title: "The Medieval Sound Wave",
      content:
        "Between 500 and 700 AD, a phonetic wave swept northward across the southern German highlands. English, safely isolated across the North Sea, preserved the ancient Germanic sounds. One of the cleanest rules: wherever English kept 'P', High German shifted it into 'F' or double 'FF'.",
      footnotes: [
        {
          marker: "1",
          title: "The Second Sound Shift",
          content: "Also known as the High German Consonant Shift (Zweite Lautverschiebung), separating Low German/English from High German.",
        },
      ],
    },
    pattern: {
      title: "Post-Vocalic P becomes F / FF",
      content:
        "After a vowel, English 'P' systematically becomes German 'F' or 'FF'. Hope becomes hoffen. Help becomes helfen. Sleep becomes schlafen. Ship becomes Schiff (a ship's captain is still called a skipper in English!). Ape becomes Affe. Ripe becomes reifen (fruit that has ripened is reif). At the start of words, drop the German 'F' in 'PF-' to reveal the English twin: Pfad ↔ path, Pfund ↔ pound, Pfeffer ↔ pepper, Apfel ↔ apple!",
      footnotes: [
        {
          marker: "2",
          title: "Gemination",
          content: "Short vowels triggered a double 'ff' (hoffen, Schiff), while long vowels and liquids took single 'f' (schlafen, helfen).",
        },
      ],
      linguist_note:
        "At the start of words, Germanic P shifted to PF (path → Pfad, pound → Pfund, pipe → Pfeife). After vowels, it shifted to F or FF (ship → Schiff, sleep → schlafen). English borrowed the Low German nautical word 'skipper' (literally 'Schiff-er', ship-master).",
    },
    exercises: [
      {
        id: "l3_e1",
        type: "morpheme_tiles",
        prompt: "Assemble the German verb for English 'hope' using the P → FF shift:",
        tile_options: ["hoff", "en", "helph", "st", "schlaf"],
        target_answer: "hoffen",
        meaning: "to hope",
        shift_hint: "P → FF",
        explanation: "Post-vocalic P shifted into double FF + infinitive -en = hoffen.",
      },
      {
        id: "l3_e2",
        type: "matching_pairs",
        prompt: "Match the English words with their P → F/FF German cognates:",
        matching_pairs: [
          { id: "pf1", english: "ship", german: "Schiff" },
          { id: "pf2", english: "help", german: "helfen" },
          { id: "pf3", english: "sleep", german: "schlafen" },
          { id: "pf4", english: "ape", german: "Affe" },
        ],
        target_answer: "Schiff, helfen, schlafen, Affe",
        meaning: "ship, to help, to sleep, ape",
        shift_hint: "P → F/FF",
        explanation: "English post-vocalic P regularly corresponds to German F or FF.",
      },
      {
        id: "l3_e3",
        type: "shift_select",
        prompt: "What consonant shift connects English 'ripe' and German 'reif'?",
        target_answer: "P → F/FF",
        meaning: "English ripe ↔ German reif (P → F)",
        options: ["P → F/FF", "TH → D", "T → S/SS", "K → CH"],
        shift_hint: "P → F",
        explanation: "Voiceless stop P shifted into fricative F after a long vowel: ripe ↔ reif. A ripe fruit in German has 'gereift' (ripened).",
      },
      {
        id: "l3_e4",
        type: "derive",
        prompt: "Apply the P → FF shift: English: 'sleep' → German verb:",
        english_hint: "slee·p· → schla·f·en",
        shift_hint: "P → F",
        target_answer: "schlafen",
        meaning: "to sleep",
        explanation: "English sl- becomes schl- and p shifts to f.",
      },
      {
        id: "l3_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'I hope you come'",
        target_answer: "Ich hoffe du kommst",
        meaning: "I hope you come",
        vocab_hints: [
          {
            word: "du",
            translation: "you (informal singular)",
            note: "identical to archaic English 'thou'—notice how 'du kommst' keeps the Shakespearean ending 'thou comest'!",
          },
        ],
        word_bank: ["Ich", "hoffe", "du", "kommst"],
        explanation: "1st person 'hoffe' + 2nd person 'kommst'.",
      },
    ],
    summary: {
      takeaway: "Every time you see German 'f' or 'ff' in a core word, test whether replacing it with 'p' creates an English word.",
      curiosity_teaser: "Did you know that English 'th' does not exist in German? Discover why 'think' is 'denken'.",
    },
  },
  {
    id: 4,
    slug: "th-to-d-shift",
    title: "The Dental Hardening (TH → D)",
    subtitle: "The shift that connects think, thank, and brother",
    phase: 1,
    shift_categories: ["th_to_d"],
    word_ids: ["denken", "danken", "drei", "Bruder", "Ding", "Bad", "dünn", "Donner", "du"],
    table_word_ids: ["denken", "danken", "drei", "Bruder", "Ding", "Bad"],
    hook: {
      title: "Why German Has No 'TH' Sound",
      content:
        "Notice how native German speakers learning English often struggle with the 'th' sound? That is because German completely abolished dental fricatives over 1,300 years ago. Every single original Germanic 'th' sound hardened directly into 'd'.",
      footnotes: [
        {
          marker: "1",
          title: "Dental Hardening",
          content: "The voiced dental fricative [ð] and voiceless [θ] hardened into the stop [d] across all High German dialects.",
        },
      ],
    },
    pattern: {
      title: "English TH = German D",
      content:
        "Every English 'TH' hardens to 'D' in German. Think becomes denken. Thank becomes danken (notice English has the exact same vowel pair: think and thank!). Three becomes drei. Brother becomes Bruder. Thing becomes Ding (Norse and Germanic assemblies were called 'Things', where matters were discussed). Bath becomes Bad (as in famous German spa towns like Baden-Baden). Roof/thatch becomes Dach. Thou/thee becomes du/dich.",
      footnotes: [
        {
          marker: "2",
          title: "Thou/Thee & Donner",
          content:
            "English 'thou' (thou goest) and German 'du' (du gehst) both take the ancient -st ending. Santa's reindeer 'Donner and Blitzen' literally means 'Thunder and Lightning' (Donnerstag = Thunder-day / Thursday)!",
        },
      ],
      linguist_note:
        "Unlike the P→F shift, which was geographically restricted to High German, the TH→D shift eventually reached even northern Low German and Dutch, leaving English and Icelandic as the lone survivors of Germanic 'th'.",
    },
    exercises: [
      {
        id: "l4_e1",
        type: "morpheme_tiles",
        prompt: "Assemble the German verb for 'to thank' using the TH → D rule:",
        tile_options: ["dank", "en", "thank", "st", "denk"],
        target_answer: "danken",
        meaning: "to thank",
        shift_hint: "TH → D",
        explanation: "Dental TH hardened to D + infinitive suffix -en = danken.",
      },
      {
        id: "l4_e2",
        type: "matching_pairs",
        prompt: "Match the English TH words to their German D counterparts:",
        matching_pairs: [
          { id: "th1", english: "brother", german: "Bruder" },
          { id: "th2", english: "think", german: "denken" },
          { id: "th3", english: "three", german: "drei" },
          { id: "th4", english: "bath", german: "Bad" },
        ],
        target_answer: "Bruder, denken, drei, Bad",
        meaning: "brother, to think, three, bath",
        shift_hint: "TH → D",
        explanation: "Every Germanic dental fricative TH hardened into D in German.",
      },
      {
        id: "l4_e3",
        type: "reverse_cognate",
        prompt: "What native English word shares the exact root of 'Bruder'?",
        target_answer: "brother",
        meaning: "brother (twin of German Bruder)",
        explanation: "Medial D in Bruder directly mirrors English TH in brother.",
      },
      {
        id: "l4_e4",
        type: "derive",
        prompt: "Apply the TH → D shift: English: 'think' → German verb:",
        english_hint: "th·ink → d·enk·en",
        shift_hint: "TH → D",
        target_answer: "denken",
        meaning: "to think",
        explanation: "TH shifts to D, plus regular -en infinitive.",
      },
      {
        id: "l4_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'I think of you'",
        target_answer: "Ich denke an dich",
        meaning: "I think of you",
        vocab_hints: [
          {
            word: "an",
            translation: "of / about (preposition)",
            note: "governs accusative case",
          },
          {
            word: "dich",
            translation: "thee / you (object form)",
            note: "direct twin of archaic English 'thee' (thou ↔ du, thee ↔ dich, thine ↔ dein)",
          },
        ],
        word_bank: ["Ich", "denke", "an", "dich"],
        explanation: "'denken an' takes the accusative (dich = thee). Notice TH → D: think ↔ denke, thee ↔ dich.",
      },
    ],
    summary: {
      takeaway: "Whenever you encounter a German 'd', swap it for 'th' in your head to unlock the English cognate.",
      curiosity_teaser: "Next: What happens when English 't' turns into 's' and 'water' becomes 'Wasser'?",
    },
  },
  {
    id: 5,
    slug: "t-to-s-shift",
    title: "The Sibilant Shift (T → S / SS / Z)",
    subtitle: "From water to Wasser, better to besser, and two to zwei",
    phase: 1,
    shift_categories: ["t_to_s_ss_z"],
    word_ids: ["Wasser", "essen", "besser", "hassen", "aus", "was", "zwei", "zu", "groß", "Straße"],
    table_word_ids: ["Wasser", "essen", "besser", "hassen", "aus", "was"],
    hook: {
      title: "The Sibilant Explosion",
      content:
        "When ancient Germanic 'T' shifted in High German, it became a hissing sibilant: 'ss' or 's' after vowels, and 'z' (/ts/) at the beginning of words. This single rule instantly unlocks dozens of the most frequent everyday words.",
      footnotes: [
        {
          marker: "1",
          title: "Spirantization",
          content: "Voiceless alveolar stop [t] relaxed into the alveolar fricative [s] or affricate [ts].",
        },
      ],
    },
    pattern: {
      title: "T after vowels becomes S / SS",
      content:
        "Water becomes Wasser. Eat becomes essen. Better becomes besser. Hate becomes hassen. Out becomes aus. What becomes was. Great becomes groß (think of 'gross income' or 'gross error' = large/total, not yuck!). At word beginnings, English 'TW-' maps to German 'ZW-': two becomes zwei, twig becomes Zweig (a two-fork split), twice becomes zweimal, and twenty becomes zwanzig.",
      footnotes: [
        {
          marker: "2",
          title: "Street ↔ Straße & Eszett (ß)",
          content:
            "Roman paved roads (via strata) gave English 'street' (keeping Latin 't') and German 'Straße' (shifting 't' to sharp 'ß'). The letter 'ß' represents a sharp [s] sound after long vowels (groß, Straße).",
        },
      ],
      linguist_note:
        "The German letter 'z' is always pronounced like the 'ts' in English 'cats' or 'tsunami', reflecting the original dental stop that broke into an affricate.",
    },
    exercises: [
      {
        id: "l5_e1",
        type: "morpheme_tiles",
        prompt: "Assemble the German word for 'water' (das + stem + ending):",
        tile_options: ["das", "Wass", "er", "der", "Wat"],
        target_answer: "das Wasser",
        meaning: "the water",
        vocab_hints: [
          {
            word: "das",
            translation: "the (neuter article)",
            note: "German uses das for neutral gender nouns",
          },
        ],
        shift_hint: "T → SS",
        explanation: "Water: T shifts to SS after short vowel = das Wasser.",
      },
      {
        id: "l5_e2",
        type: "matching_pairs",
        prompt: "Match the English T words to their German S/SS/Z shifts:",
        matching_pairs: [
          { id: "t1", english: "better", german: "besser" },
          { id: "t2", english: "eat", german: "essen" },
          { id: "t3", english: "two", german: "zwei" },
          { id: "t4", english: "hate", german: "hassen" },
        ],
        target_answer: "besser, essen, zwei, hassen",
        meaning: "better, to eat, two, to hate",
        shift_hint: "T → S/SS/Z",
        explanation: "T becomes ss after vowels, and z at the start of words.",
      },
      {
        id: "l5_e3",
        type: "shift_select",
        prompt: "What consonant shift connects English 'better' and German 'besser'?",
        target_answer: "T → S/SS",
        meaning: "English better ↔ German besser (T → SS)",
        options: ["T → S/SS", "P → F/FF", "TH → D", "K → CH"],
        explanation: "Medial tt shifted into geminate sibilant ss.",
      },
      {
        id: "l5_e4",
        type: "reverse_cognate",
        prompt: "What native English word shares the root of 'essen'?",
        target_answer: "eat",
        meaning: "to eat (twin of German essen)",
        explanation: "German 'essen' and English 'eat' are identical Germanic stems with T → SS shift.",
      },
      {
        id: "l5_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'A glass of water please'",
        target_answer: "Ein Glas Wasser bitte",
        meaning: "A glass of water please",
        vocab_hints: [
          {
            word: "bitte",
            translation: "please",
            note: "cognate with English 'bid' (as in 'I bid you welcome' / 'at his bidding')—literally: '[I] bid/request it'",
          },
          {
            word: "Glas",
            translation: "glass",
            note: "neuter noun: ein Glas",
          },
        ],
        word_bank: ["Ein", "Glas", "Wasser", "bitte"],
        explanation: "In German, 'a glass of water' drops the preposition: 'Ein Glas Wasser'. 'bitte' comes from bitten (to bid / request).",
      },
    ],
    summary: {
      takeaway: "English 't' regularly maps to German 'ss', 's', or 'z'.",
      curiosity_teaser: "Congratulations on mastering the first 5 core shifts! Explore the Atlas to branch anywhere.",
    },
  },
];

export const COURSE_ROADMAP = [
  { id: 1, title: "The Germanic Core", phase: 1, unlocked: true },
  { id: 2, title: "Modal Auxiliaries & The Bracket", phase: 1, unlocked: true },
  { id: 3, title: "The P → F/FF Shift", phase: 1, unlocked: true },
  { id: 4, title: "The Dental Hardening (TH → D)", phase: 1, unlocked: true },
  { id: 5, title: "The Sibilant Shift (T → S/SS/Z)", phase: 1, unlocked: true },
  { id: 6, title: "The Velar Shift (K → CH)", phase: 1, unlocked: false },
  { id: 7, title: "The Stop Shift (D → T)", phase: 1, unlocked: false },
  { id: 8, title: "The Latin Bridge (-ieren)", phase: 1, unlocked: false },
  { id: 9, title: "Conjugation Roots & Thou", phase: 2, unlocked: false },
  { id: 10, title: "Pronouns as Case Anchors", phase: 2, unlocked: false },
  { id: 11, title: "Article Systems Built from Pronouns", phase: 2, unlocked: false },
  { id: 12, title: "The Sentence Bracket (Satzklammer)", phase: 2, unlocked: false },
  { id: 13, title: "Separable Verbs & Spatial Prefixes", phase: 2, unlocked: false },
  { id: 14, title: "Inseparable Prefixes (ver-, be-, er-)", phase: 2, unlocked: false },
  { id: 15, title: "The Conversational Past (Perfekt)", phase: 2, unlocked: false },
  { id: 16, title: "Strong Verbs & Ancient Ablaut", phase: 2, unlocked: false },
  { id: 17, title: "The Dative Case & Indirect Recipients", phase: 2, unlocked: false },
  { id: 18, title: "The 'ein' Family Matrix", phase: 2, unlocked: false },
  { id: 19, title: "Compound Noun Engineering", phase: 3, unlocked: false },
  { id: 20, title: "Gender Heuristics & Suffix Clues", phase: 3, unlocked: false },
  { id: 21, title: "The Plural Systems & i-Mutation", phase: 3, unlocked: false },
  { id: 22, title: "Comparatives & Umlauts", phase: 3, unlocked: false },
  { id: 23, title: "Further Shifts (V↔B, Y↔G, GH↔CH)", phase: 3, unlocked: false },
  { id: 24, title: "Prepositions as Physical Metaphors", phase: 3, unlocked: false },
  { id: 25, title: "Verb Families & Root Radiations", phase: 3, unlocked: false },
  { id: 26, title: "Dative Mastery & Pronoun Hierarchy", phase: 3, unlocked: false },
  { id: 27, title: "Idiomatic Mindset (Es tut mir leid)", phase: 3, unlocked: false },
  { id: 28, title: "Vowel Mutations in Real Time", phase: 3, unlocked: false },
  { id: 29, title: "The Copula 'sein' & Motion Auxiliaries", phase: 3, unlocked: false },
  { id: 30, title: "Capstone Synthesis & Authentic Reading", phase: 3, unlocked: false },
];
