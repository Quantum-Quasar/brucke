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
          { id: "p5", english: "arm", german: "Arm" },
          { id: "p6", english: "finger", german: "Finger" },
        ],
        target_answer: "kommen, finden, singen, schwimmen, Arm, Finger",
        meaning: "to come, to find, to sing, to swim, arm, finger",
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
      outcome: "Recognize familiar German infinitives and use one in a simple sentence.",
      use_example: { german: "Ich lerne Deutsch mit Brücke.", english: "I learn German with Brücke." },
      takeaway: "Whenever you see a German verb ending in -en, strip the ending to look for the English root.",
      curiosity_teaser: "Next up: the Hidden Twins — Arm, Hand, Finger, Haus, Brot: the zero-shift words you already own, waiting to be recognized.",
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
        type: "literal_gloss",
        prompt: "Which English is built the German way?",
        german: "Wir wollen heute singen.",
        natural: "We want to sing today.",
        options: ["We want to sing today.", "We want today to sing.", "We today want to sing."],
        target_answer: "We want today to sing.",
        meaning: "We want to sing today.",
        explanation: "The modal holds position 2 and the bare infinitive closes the bracket, so 'today' lands between them in the middle of the English verb pair. English used to tolerate this order ('I know not where'); German never left it.",
      },
      {
        id: "l2_e5",
        type: "transcribe",
        prompt: "Tell me:",
        idea: "you're telling me your plans for visiting: you can come tomorrow",
        cues: [
          "Who can? → ich kann (can = know-how, as in 'beyond my ken')",
          "When? → morgen, riding inside the bracket",
          "The bare infinitive closes the bracket: kommen goes last",
        ],
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
        word_bank: ["Ich", "kann", "morgen", "kommen", "kannst"],
        explanation: "The Satzklammer wraps around 'morgen', placing bare infinitive 'kommen' at the caboose.",
        diagnosis: {
          slip: "the modal's ending jumped onto the infinitive",
          cue: "Only the modal conjugates — ich kann stays whole, and kommen stays bare. When two verbs share a sentence, the bracket decides who bends.",
        },
      },
    ],
    summary: {
      outcome: "Say what you want or can do by placing a bare infinitive at the end.",
      use_example: { german: "Ich kann morgen kommen.", english: "I can come tomorrow." },
      takeaway: "Use modal + bare infinitive at the end to assemble complex thoughts immediately.",
      curiosity_teaser: "Next: the will ≠ will drills — separating ich will (free will) from the future, with sollen ↔ shall.",
    },
    twist: {
      prompt: "Same thought, but tomorrow comes first: I want to learn German tomorrow. (Something still has to hold position 2.)",
      target_answer: "Morgen will ich Deutsch lernen",
      word_bank: ["Morgen", "will", "ich", "Deutsch", "lernen", "lerne"],
      explanation: "Fronting fills position 1, so the verb keeps position 2 and the subject slips in behind it — the bracket never breaks, it just re-grips.",
    },
  },
  {
    id: 3,
    slug: "p-to-f-shift",
    title: "The P → F / FF Shift",
    subtitle: "How English preserved what German transformed",
    phase: 1,
    shift_categories: ["p_to_pf_f"],
    word_ids: ["hoffen", "helfen", "schlafen", "schiff", "affe", "reif", "apfel", "pfeffer", "pfad", "lust", "teuer", "fernsehen", "einsteigen", "aussteigen"],
    table_word_ids: ["hoffen", "helfen", "schlafen", "schiff", "affe", "reif"],
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
        affirmation: "You breathed the p into ff and pulled the ending on — the shift is becoming a reflex.",
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
          { id: "pf5", english: "apple", german: "Apfel" },
          { id: "pf6", english: "to board / get on", german: "einsteigen" },
          { id: "pf7", english: "to get off", german: "aussteigen" },
        ],
        target_answer: "Schiff, helfen, schlafen, Affe, Apfel, einsteigen, aussteigen",
        meaning: "ship, to help, to sleep, ape, apple, to board, to get off",
        shift_hint: "P → F/FF",
        affirmation: "Four p-words read straight through the shift — and the last two ride the modal bracket you built last topic.",
        explanation: "English post-vocalic P regularly corresponds to German F or FF — and PF- opens the word in Apfel. einsteigen and aussteigen are the bracket infinitives from the last topic, back for another ride.",
      },
      {
        id: "l3_e3",
        type: "shift_select",
        prompt: "At the market stall: 'Der Apfel ist reif — aber zu teuer.' What consonant shift connects English 'ripe' and German 'reif'?",
        target_answer: "P → F/FF",
        meaning: "English ripe ↔ German reif (P → F)",
        options: ["P → F/FF", "TH → D", "T → S/SS", "K → CH"],
        shift_hint: "P → F",
        affirmation: "You read reif backwards to ripe — every German f whispers its English p origin.",
        explanation: "Voiceless stop P shifted into fricative F after a long vowel: ripe ↔ reif, on a fruit that is reif but, alas, zu teuer.",
      },
      {
        id: "l3_e4",
        type: "derive",
        prompt: "Apply the P → FF shift: English: 'sleep' → German verb:",
        english_hint: "slee·p· → schla·f·en",
        shift_hint: "P → F",
        affirmation: "You heard schl- where English says sl-, and the p breathed into f — sleep became schlafen.",
        target_answer: "schlafen",
        meaning: "to sleep",
        explanation: "English sl- becomes schl- and p shifts to f.",
      },
      {
        id: "l3_e5",
        type: "transcribe",
        prompt: "You want to say:",
        idea: "you hope your friend feels like coming along: I hope you have the craving (the Lust)",
        cues: [
          "Who hopes? → ich hoffe — hope is a regular verb here: hoff- + -e",
          "Who has the Lust? → du hast Lust — hast is haben's du-form (have ↔ haben: the same ancient verb)",
          "Run it straight through: no 'that', no comma between the two clauses",
        ],
        target_answer: "Ich hoffe du hast Lust",
        meaning: "I hope you feel like it (have the craving)",
        vocab_hints: [
          {
            word: "hast",
            translation: "have (du form)",
            note: "haben = to have — ich habe, du hast. English 'have' and German 'haben' are the same ancient verb; Lust = desire, the noun English kept as 'lust'",
          },
        ],
        word_bank: ["Ich", "hoffe", "du", "hast", "Lust", "kommst"],
        explanation: "German lets 'I hope' run straight into 'you have the Lust' — no 'that', no comma. And hoffen is your P → F hope wearing a working ending.",
      },
    ],
    summary: {
      outcome: "Use a familiar English p-word to help recognize related German f/ff words.",
      use_example: { german: "Ich hoffe, du hast Lust.", english: "I hope you feel like it." },
      takeaway: "Every time you see German 'f' or 'ff' in a core word, test whether replacing it with 'p' creates an English word.",
      curiosity_teaser: "Next: the PF- openers — path becomes Pfad, pound becomes Pfund: the word-initial explosion of the shift.",
    },
    twist: {
      prompt: "Same hope, new target: you don't hope she visits — you hope the show comes on: I hope we watch TV. Put it in German.",
      target_answer: "Ich hoffe wir fernsehen",
      word_bank: ["Ich", "hoffe", "wir", "fernsehen", "kommt"],
      explanation: "A person swap: du → wir pulls the ending -st → -en (thou comest → we come), and fernsehen rides bare at the end — no 'that', no comma.",
    },
  },
  {
    id: 4,
    slug: "th-to-d-shift",
    title: "The Dental Hardening (TH → D)",
    subtitle: "The shift that connects think, thank, and brother",
    phase: 1,
    shift_categories: ["th_to_d"],
    word_ids: ["denken", "danken", "drei", "bruder", "ding", "bad", "dünn", "donner", "du"],
    table_word_ids: ["denken", "danken", "drei", "bruder", "ding", "bad"],
    hook: {
      title: "Why German Has No 'TH' Sound",
      content:
        "Notice how native German speakers learning English often struggle with the 'th' sound? That is because German completely abolished dental fricatives over 1,300 years ago. Every single original Germanic 'th' sound hardened directly into 'd'. You already own proof from the wild: danke — the one German word everyone picks up — is thank with its th hardened to d.",
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
          interest: true,
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
        affirmation: "You hardened the th into d and hung on the -en — thank is danken now, all the way down.",
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
        affirmation: "Four th-words hardened to d on sight — a 1,300-year-old rule, live in your hands.",
        explanation: "Every Germanic dental fricative TH hardened into D in German.",
      },
      {
        id: "l4_e3",
        type: "reverse_cognate",
        prompt: "What native English word shares the exact root of 'Bruder'?",
        target_answer: "brother",
        meaning: "brother (twin of German Bruder)",
        affirmation: "You ran the d → th swap and brother stepped out — that medial d is hardened th.",
        explanation: "Medial D in Bruder directly mirrors English TH in brother.",
      },
      {
        id: "l4_e4",
        type: "derive",
        prompt: "Apply the TH → D shift: English: 'think' → German verb:",
        english_hint: "th·ink → d·enk·en",
        shift_hint: "TH → D",
        affirmation: "You hardened th to d and let the -en settle — think became denken.",
        target_answer: "denken",
        meaning: "to think",
        explanation: "TH shifts to D, plus regular -en infinitive.",
      },
      {
        id: "l4_e5",
        type: "transcribe",
        prompt: "Put into German:",
        idea: "you're letting someone far away know they're on your mind: I think of you",
        cues: [
          "Who thinks? → ich denke (TH → D: think → denk-)",
          "'of you' → an dich — denken needs its an, and thee → dich",
          "Line them up: thinker, an, then the thee-word",
        ],
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
        word_bank: ["Ich", "denke", "an", "dich", "dank", "dir"],
        explanation: "'denken an' takes the accusative (dich = thee). Notice TH → D: think ↔ denke, thee ↔ dich.",
      },
    ],
    summary: {
      outcome: "Recognize several English th and German d cognates in familiar words and phrases.",
      use_example: { german: "Ich denke an dich.", english: "I am thinking of you." },
      takeaway: "Whenever you encounter a German 'd', swap it for 'th' in your head to unlock the English cognate.",
      curiosity_teaser: "Next: Donner, Bad & Du — culture words through the D-lens: thunder-day, spa towns, and the thou you already speak.",
    },
    twist: {
      prompt: "Same thought, but the whole family says it: I think of you becomes we think of you.",
      target_answer: "Wir denken an dich",
      word_bank: ["Wir", "denken", "denke", "an", "dich"],
      explanation: "ich denke → wir denken: the ending carries the person (-e → -en), and 'an dich' doesn't budge. The shift words stay; the endings do the work.",
    },
  },
  {
    id: 5,
    slug: "t-to-s-shift",
    title: "The Sibilant Shift (T → S / SS / Z)",
    subtitle: "From water to Wasser, better to besser, and two to zwei",
    phase: 1,
    shift_categories: ["t_to_s_ss_z"],
    word_ids: ["wasser", "essen", "besser", "hassen", "aus", "was", "zwei", "zu", "groß", "straße"],
    table_word_ids: ["wasser", "essen", "besser", "hassen", "aus", "was"],
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
        affirmation: "You hissed the t into ss and kept the das — the receipt reads water → Wasser.",
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
        affirmation: "Four t-words hissed into German — ss after vowels, z at the front door. You're starting to hear it everywhere.",
        explanation: "T becomes ss after vowels, and z at the start of words.",
      },
      {
        id: "l5_e3",
        type: "shift_select",
        prompt: "What consonant shift connects English 'better' and German 'besser'?",
        target_answer: "T → S/SS",
        meaning: "English better ↔ German besser (T → SS)",
        options: ["T → S/SS", "P → F/FF", "TH → D", "K → CH"],
        affirmation: "You read besser backwards to better — the doubled ss whispers its tt origin.",
        explanation: "Medial tt shifted into geminate sibilant ss.",
      },
      {
        id: "l5_e4",
        type: "reverse_cognate",
        prompt: "What native English word shares the root of 'essen'?",
        target_answer: "eat",
        meaning: "to eat (twin of German essen)",
        affirmation: "You swapped the ss for a t and eat stepped out — one sibilant, one ancient stem.",
        explanation: "German 'essen' and English 'eat' are identical Germanic stems with T → SS shift.",
      },
      {
        id: "l5_e5",
        type: "transcribe",
        prompt: "Tell me:",
        idea: "you're at a café counter asking for a drink: a glass of water, please",
        cues: [
          "English t hisses into ss after a vowel: water → Wasser",
          "Measure phrase, no 'of': ein Glas Wasser",
          "Seal it with bitte — the cognate of English 'bid'",
        ],
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
        word_bank: ["Ein", "Glas", "Wasser", "bitte", "Besser", "und"],
        explanation: "Measure phrase without 'of', the T → SS receipt on Wasser, and bitte to close — your first café order, built from a thought.",
      },
    ],
    summary: {
      outcome: "Recognize common t and s/ss/z word connections and order a simple request.",
      use_example: { german: "Ein Glas Wasser, bitte.", english: "A glass of water, please." },
      takeaway: "English 't' regularly maps to German 'ss', 's', or 'z'.",
      curiosity_teaser: "Next: the tw → zw openers — zwei, Zwilling, Zwerg: the /ts/ costume party of the z-letter.",
    },
    twist: {
      prompt: "Same order, but you're thirsty times two: a glass of water becomes two glasses of water. (German measure words don't take a plural ending.)",
      target_answer: "Zwei Glas Wasser bitte",
      word_bank: ["Zwei", "Glas", "Gläser", "Wasser", "bitte"],
      explanation: "After a number the measure word stays bare: zwei Glas Wasser — Gläser, the true plural, waits for other jobs. Friction on purpose: this exact slip is common and harmless.",
    },
  },
  {
    id: 6,
    slug: "k-to-ch-shift",
    title: "The Velar Shift (K → CH)",
    subtitle: "From make to machen, cook to kochen, and book to Buch",
    phase: 1,
    shift_categories: ["k_to_ch"],
    word_ids: ["machen", "kochen", "brechen", "sprechen", "suchen", "buch", "milch", "woche", "küche"],
    table_word_ids: ["machen", "kochen", "brechen", "sprechen", "suchen", "buch", "milch", "woche"],
    hook: {
      title: "The Ghost in the Throat",
      content:
        "During the High German Consonant Shift, ancient Germanic voiceless stop 'k' softened into a breathy fricative written as 'ch'. While English kept the hard stop across the North Sea, German speakers moved the sound into the throat, turning make into machen and cook into kochen.",
      footnotes: [
        {
          marker: "1",
          title: "Velar Spirantization",
          content: "Post-vocalic voiceless velar stop [k] relaxed into voiceless velar/palatal fricatives [x] and [ç].",
        },
      ],
    },
    pattern: {
      title: "Ach-Laut vs. Ich-Laut: The Vowel Compass",
      content:
        "German 'ch' produces two distinct sounds dictated entirely by the preceding vowel. After back vowels (a, o, u), the tongue pulls back into the throat to produce the rough 'Ach-Laut' [x] (as in Scottish loch: machen, kochen, Buch). After front vowels (e, i, ä, ö, ü) or consonants (l, r), the tongue arches forward to whisper the soft 'Ich-Laut' [ç] (identical to the first sound in English 'huge' or 'human': sprechen, brechen, Milch, Küche). English even kept this soft shift in noun-verb pairs: seek vs. beseech, and speak vs. speech!",
      footnotes: [
        {
          marker: "2",
          title: "Palatal vs. Velar",
          content: "Ach-Laut [x] follows back vowels; Ich-Laut [ç] follows front vowels and liquid consonants.",
        },
        {
          marker: "3",
          title: "Say What You Read",
          content:
            "German spells the way it sounds: each vowel letter holds one sound — the I of finden is always the /ee/ of seen — and the letter laws own the consonants, so every word you read tells you how to say it. When a cluster like the schl- of schlafen tangles on your tongue, slow down; the sounds sit together fine at half speed. And don't let regional accents shake you: you might hear a harder /ick/ in Berlin or an /ish/-tinged ich in the south — variants to recognize, never to learn.",
        },
      ],
    },
    exercises: [
      {
        id: "l6_e1",
        type: "morpheme_tiles",
        prompt: "Assemble the German verb for 'to cook' using the K → CH shift (cook + en):",
        tile_options: ["koch", "en", "cook", "st", "mach"],
        target_answer: "kochen",
        meaning: "to cook",
        shift_hint: "K → CH",
        affirmation: "You melted the k into ch and hung the -en — cook is kochen, audible in your throat now.",
        explanation: "Stem 'koch-' (medial K shifted to CH after back vowel 'o') + infinitive suffix '-en' = kochen.",
      },
      {
        id: "l6_e2",
        type: "matching_pairs",
        prompt: "Match the English K words to their German CH cognates:",
        matching_pairs: [
          { id: "k1", english: "seek / beseech", german: "suchen" },
          { id: "k2", english: "speak / speech", german: "sprechen" },
          { id: "k3", english: "book", german: "Buch" },
          { id: "k4", english: "milk", german: "Milch" },
        ],
        target_answer: "suchen, sprechen, Buch, Milch",
        meaning: "to seek, to speak, book, milk",
        shift_hint: "K → CH",
        affirmation: "Four k-words melted on sight — the throat-sound is becoming a reflex.",
        explanation: "Medial and final English K regularly shifts to German CH ([x] after back vowels, [ç] after front vowels and consonants).",
      },
      {
        id: "l6_e3",
        type: "shift_select",
        prompt: "Why does 'Buch' use the Ach-Laut ([x]), while 'Küche' uses the Ich-Laut ([ç])?",
        options: [
          "Ach-Laut follows back vowels (u); Ich-Laut follows front vowels (ü)",
          "Buch is neuter and Küche is feminine",
          "Küche begins with a K",
          "The sounds are completely interchangeable in German",
        ],
        target_answer: "Ach-Laut follows back vowels (u); Ich-Laut follows front vowels (ü)",
        meaning: "Phonetic distribution of Ach-Laut [x] vs Ich-Laut [ç]",
        affirmation: "You split the two ch-sounds by vowel depth — that is native-level hearing.",
        explanation: "German CH is conditioned by tongue position: back vowels (a, o, u) trigger the velar Ach-Laut [x], while front vowels (e, i, ä, ö, ü) trigger the palatal Ich-Laut [ç].",
      },
      {
        id: "l6_e4",
        type: "derive",
        prompt: "Apply the K → CH shift: English 'to make' → German verb:",
        english_hint: "ma·k·e → ma·ch·en",
        shift_hint: "K → CH",
        affirmation: "You heard make soften to machen — the ghost in the throat, found again.",
        target_answer: "machen",
        meaning: "to make / to do",
        explanation: "Voiceless stop K shifted to velar fricative CH + infinitive suffix -en.",
      },
      {
        id: "l6_e5",
        type: "transcribe",
        prompt: "How would you say:",
        idea: "you walk in on a friend cooking and ask what they're doing in the kitchen",
        cues: [
          "Ask with was: W-word first, verb in position 2 — was machst du",
          "make → mach- (K → CH) + the thou-ending: machst",
          "The kitchen carries the same shift: in der Küche",
        ],
        target_answer: "Was machst du in der Küche",
        meaning: "What are you doing in the kitchen?",
        vocab_hints: [
          { word: "Was", translation: "what", note: "T → S shift: what ↔ was" },
          { word: "machst", translation: "do / make (2nd person)", note: "K → CH shift: make ↔ mach + Shakespearean -st" },
          { word: "Küche", translation: "kitchen", note: "K → CH shift: kitchen ↔ Küche" },
        ],
        word_bank: ["Was", "machst", "du", "in", "der", "Küche", "kochst"],
        explanation: "Question order: W-word, verb in position 2, subject, then the place — the frame you just built, from a thought.",
      },
    ],
    summary: {
      outcome: "Recognize common k and ch cognates and ask a simple question about an activity.",
      use_example: { german: "Was machst du in der Küche?", english: "What are you doing in the kitchen?" },
      takeaway: "English 'k' after vowels systematically softens to German 'ch' ([x] after a/o/u, [ç] after e/i/ä/ö/ü).",
      curiosity_teaser: "Next: the kitchen & book set — Küche, Buch, Milch, suchen: and the seek/beseech proof that English ran this shift too.",
    },
    twist: {
      prompt: "Same question, sharper nose: what are you COOKING in the kitchen? (Same shift, different root.)",
      target_answer: "Was kochst du in der Küche",
      word_bank: ["Was", "kochst", "machst", "du", "in", "der", "Küche"],
      explanation: "machen → kochen, the same K → CH receipt: machst → kochst. The question frame doesn't move — only the root changes.",
    },
  },
  {
    id: 7,
    slug: "d-to-t-shift",
    title: "The Stop Shift (D → T)",
    subtitle: "From day to Tag, door to Tür, drink to trinken, and dream to Traum",
    phase: 1,
    shift_categories: ["d_to_t"],
    word_ids: ["tag", "tür", "trinken", "garten", "tochter", "kalt", "gut", "wort", "traum", "tisch", "tief"],
    table_word_ids: ["tag", "tür", "trinken", "garten", "tochter", "kalt", "gut", "wort"],
    hook: {
      title: "The Consonant Domino",
      content:
        "Linguistic shifts happen in chains. When ancient Germanic 'th' hardened into 'd' (think ↔ denken), the existing Germanic 'd' had to move forward to prevent words from colliding. It hardened from a voiced stop into a crisp voiceless stop: 't'. This explains why English 'd' consistently mirrors German 't'.",
      footnotes: [
        {
          marker: "1",
          title: "Devoicing of Alveolar Stops",
          content: "Voiced alveolar stop [d] hardened into voiceless alveolar stop [t] during the Second Germanic Sound Shift.",
        },
      ],
    },
    pattern: {
      title: "Initial, Medial, and Final D becomes T",
      content:
        "Day becomes Tag. Door becomes Tür. Drink becomes trinken. Dream becomes Traum. Table becomes Tisch (via Latin discus ↔ dish ↔ Tisch: a table was historically the 'dish-board'!). In the middle and end of words, the rule holds firm: yard/garden becomes Garten, cold becomes kalt, good becomes gut, and word becomes Wort. Daughter becomes Tochter—a double shift pairing initial D → T with guttural GH → CH!",
      footnotes: [
        {
          marker: "2",
          title: "Dish ↔ Tisch",
          content: "Both languages borrowed Latin discus. English softened the end into 'dish' and kept initial d; German hardened initial d to t and palatalized the sibilant into Tisch.",
        },
      ],
    },
    exercises: [
      {
        id: "l7_e1",
        type: "morpheme_tiles",
        prompt: "Assemble the German verb for 'to drink' using the D → T shift (drink + en):",
        tile_options: ["trink", "en", "drink", "st", "Gart"],
        target_answer: "trinken",
        meaning: "to drink",
        shift_hint: "D → T",
        affirmation: "You hardened the d into t and hung the -en — drink is trinken now.",
        explanation: "Initial D hardens to T: stem 'trink-' + infinitive ending '-en' = trinken.",
      },
      {
        id: "l7_e2",
        type: "matching_pairs",
        prompt: "Match each English D word with its hardened German T twin:",
        matching_pairs: [
          { id: "dt1", english: "day", german: "Tag" },
          { id: "dt2", english: "door", german: "Tür" },
          { id: "dt3", english: "daughter", german: "Tochter" },
          { id: "dt4", english: "dream", german: "Traum" },
        ],
        target_answer: "Tag, Tür, Tochter, Traum",
        meaning: "day, door, daughter, dream",
        shift_hint: "D → T",
        affirmation: "Four d-words hardened on sight — Tag, Tür, Tochter, Traum: the domino, live.",
        explanation: "Where English preserved Germanic D, High German hardened it into T.",
      },
      {
        id: "l7_e3",
        type: "shift_select",
        prompt: "Which two sound shifts connect English 'deep' to German 'tief'?",
        options: [
          "D → T and P → F",
          "TH → D and K → CH",
          "T → S and V → B",
          "P → PF and Y → G",
        ],
        target_answer: "D → T and P → F",
        meaning: "Double shift: deep ↔ tief",
        affirmation: "You ran two shifts in one word — d to t, then p to f: deep became tief.",
        explanation: "Initial D hardened to T (deep → teep), and post-vocalic P shifted to F (teep → tief).",
      },
      {
        id: "l7_e4",
        type: "derive",
        prompt: "Apply the D → T shift: English 'cold' → German adjective:",
        english_hint: "col·d → kal·t",
        shift_hint: "D → T",
        affirmation: "You hardened the final d to t — cold ends crisp, the way German likes it.",
        target_answer: "kalt",
        meaning: "cold",
        explanation: "Final D hardens to T, with vowel alignment: cold ↔ kalt.",
      },
      {
        id: "l7_e5",
        type: "transcribe",
        prompt: "You want to say:",
        idea: "you walk into a café at noon: you greet with good day, then say what you'll drink — cold water",
        cues: [
          "Greet first: Guten Tag — both words run D → T",
          "Who drinks? → ich trinke (drink → trink-)",
          "What? → kaltes Wasser: cold → kalt with the das-Wasser ending",
        ],
        target_answer: "Guten Tag ich trinke kaltes Wasser",
        meaning: "Good day! I drink cold water",
        vocab_hints: [
          { word: "Guten Tag", translation: "good day", note: "D → T shift in both words: good ↔ gut, day ↔ Tag" },
          { word: "trinke", translation: "drink (1st person)", note: "D → T shift: drink ↔ trink" },
          { word: "Wasser", translation: "water", note: "T → SS shift: water ↔ Wasser" },
        ],
        word_bank: ["Guten", "Tag", "ich", "trinke", "trinkst", "kaltes", "Wasser"],
        explanation: "Greeting formula, then subject + verb in position 2 + object — a whole little scene, built from a thought.",
      },
    ],
    summary: {
      outcome: "Use a few d/t cognates in a greeting and a simple present-tense sentence.",
      use_example: { german: "Guten Tag! Ich trinke kaltes Wasser.", english: "Good day! I drink cold water." },
      takeaway: "English 'd' systematically corresponds to German 't' at the beginning, middle, and end of words.",
      curiosity_teaser: "Next: the double-shift detectives — deep becomes tief and daughter becomes Tochter: two rules at once.",
    },
    twist: {
      prompt: "Same water, shared: I drink cold water becomes we drink cold water. (The verb ending goes back to the stem.)",
      target_answer: "Wir trinken kaltes Wasser",
      word_bank: ["Wir", "Trinken", "trinken", "trinke", "kaltes", "Wasser"],
      explanation: "ich trinke → wir trinken: the ending returns to the bare stem's -en, the one the dictionary form wears. And kaltes Wasser doesn't budge.",
    },
  },
  {
    id: 8,
    slug: "latin-ieren-bridge",
    title: "The Latin Bridge (-ieren)",
    subtitle: "Unlock 500+ German verbs instantly with the Romance loan suffix",
    phase: 1,
    shift_categories: ["latin_ieren"],
    word_ids: ["studieren", "organisieren", "reparieren", "funktionieren", "kapieren", "akzeptieren", "informieren", "reservieren", "existieren"],
    table_word_ids: ["studieren", "organisieren", "reparieren", "funktionieren", "kapieren", "akzeptieren"],
    hook: {
      title: "The Medieval Aristocratic Cheat Code",
      content:
        "During the High Middle Ages, French courtly culture swept across European nobility. German knights and scholars borrowed hundreds of French verbs ending in '-ier'. To assimilate them into German grammar, they welded the native Germanic infinitive ending '-en' onto the French suffix, creating '-ieren' (-ier + -en). Because English borrowed the exact same Latin roots after the Norman Conquest, you instantly understand hundreds of advanced German verbs!",
      footnotes: [
        {
          marker: "1",
          title: "Old French -ier + Germanic -en",
          content: "Originating in 12th-century Middle High German courtly poetry, this hybrid suffix became the universal German receptor for international loan verbs.",
        },
      ],
    },
    pattern: {
      title: "The -ieren Formula & The No-'ge-' Secret",
      content:
        "Any English intellectual, technical, or Latinate verb ending in -ate, -ize, -ify, or -ish maps directly to German -ieren: study ↔ studieren, repair ↔ reparieren, organize ↔ organisieren, function ↔ funktionieren, grasp ↔ kapieren (from Latin capere), accept ↔ akzeptieren, and reserve ↔ reservieren. Unlike Germanic verbs, verbs in -ieren always stress the suffix (stu-DIE-ren). Because German phonotactics rejects the prefix 'ge-' on verbs without initial root stress, -ieren verbs NEVER take 'ge-' in the past participle: studiert, repariert, funktioniert!",
      footnotes: [
        {
          marker: "2",
          title: "Stress and Participle Rules",
          content: "Suffix stress (/iːʁən/) prohibits unaccented 'ge-' in the Perfekt participle (studiert, NOT gestudiert).",
        },
      ],
    },
    exercises: [
      {
        id: "l8_e1",
        type: "morpheme_tiles",
        prompt: "Assemble the German verb for 'to organize' (Latin root + romance infinitive):",
        tile_options: ["organis", "ieren", "en", "stud", "reparier"],
        target_answer: "organisieren",
        meaning: "to organize",
        shift_hint: "Romance Bridge (-ieren)",
        explanation: "Stem 'organis-' + loan verb suffix '-ieren' = organisieren.",
      },
      {
        id: "l8_e2",
        type: "matching_pairs",
        prompt: "Match the English Latinate verbs with their German -ieren counterparts:",
        matching_pairs: [
          { id: "ir1", english: "to study", german: "studieren" },
          { id: "ir2", english: "to repair", german: "reparieren" },
          { id: "ir3", english: "to function / work", german: "funktionieren" },
          { id: "ir4", english: "to grasp / understand", german: "kapieren" },
          { id: "ir5", english: "to accept", german: "akzeptieren" },
          { id: "ir6", english: "to inform", german: "informieren" },
          { id: "ir7", english: "to exist", german: "existieren" },
        ],
        target_answer: "studieren, reparieren, funktionieren, kapieren, akzeptieren, informieren, existieren",
        meaning: "to study, to repair, to function, to grasp, to accept, to inform, to exist",
        shift_hint: "-ate / -ize / -ish → -ieren",
        explanation: "French/Latin verbs entered English directly and entered German through the -ieren suffix — accept, inform and exist included.",
      },
      {
        id: "l8_e3",
        type: "shift_select",
        prompt: "Why do verbs ending in '-ieren' never take the prefix 'ge-' in the past participle (e.g. studiert, NOT gestudiert)?",
        options: [
          "The stress is on the suffix (-IE-ren), and German only adds 'ge-' to verbs with root stress",
          "Because they are borrowed from English",
          "Because they are irregular strong verbs",
          "Only transitive verbs take 'ge-'",
        ],
        target_answer: "The stress is on the suffix (-IE-ren), and German only adds 'ge-' to verbs with root stress",
        meaning: "Stress rule for -ieren past participles",
        explanation: "German past participle prefix ge- attaches only to verbs with initial syllable stress. Since -ieren shifts stress to the suffix, ge- is phonetically rejected.",
      },
      {
        id: "l8_e4",
        type: "derive",
        prompt: "Apply the -ieren rule: English 'to repair' → German verb:",
        english_hint: "repair → repar·ieren",
        shift_hint: "Latinate Bridge",
        target_answer: "reparieren",
        meaning: "to repair",
        explanation: "Latin reparare + German -ieren suffix = reparieren.",
      },
      {
        id: "l8_e5",
        type: "transcribe",
        prompt: "Put into German:",
        idea: "you're annoyed at the café: the computer doesn't work",
        cues: [
          "Der Computer is the subject; the -ieren verb takes position 2, conjugated: funktioniert (-ier stem + the er/sie/es -t)",
          "Negation lands at the end: nicht — the no-thing word (not ↔ nicht: gh became ch)",
        ],
        target_answer: "Der Computer funktioniert nicht",
        meaning: "The computer does not work",
        vocab_hints: [
          { word: "Computer", translation: "computer", note: "masculine noun: der Computer" },
          { word: "funktioniert", translation: "functions / works", note: "Latinate verb stem funktion- + 3rd person -t" },
          { word: "nicht", translation: "not", note: "gh → ch shift: nought/not ↔ nicht" },
        ],
        word_bank: ["Der", "Computer", "funktioniert", "nicht", "funktionieren"],
        explanation: "Subject, conjugated -ieren verb in position 2, nicht at the end — the Romance stamp never changes, only the personal ending does.",
        diagnosis: {
          slip: "the -ieren verb stayed in dictionary clothes",
          cue: "Position 2 needs the conjugated form: funktioniert (-ier + the er/sie/es -t). The stamp -ieren is for the dictionary, not the sentence.",
        },
      },
    ],
    summary: {
      outcome: "Recognize common German verbs ending in -ieren and use one in a simple statement.",
      use_example: { german: "Der Computer funktioniert nicht.", english: "The computer does not work." },
      takeaway: "Romance loan verbs systematically end in '-ieren', carry suffix stress, and drop 'ge-' in the past participle.",
      curiosity_teaser: "Next: the -ieren verb builder — copy becomes kopieren, produce becomes produzieren: one stamp, five hundred verbs.",
    },
    twist: {
      prompt: "Turn the -ieren verb on yourself: he studies → I study. What happens to the ending? (Careful — ich keeps an -e.)",
      target_answer: "Ich studiere Deutsch",
      word_bank: ["Ich", "studiere", "studiert", "Deutsch"],
      explanation: "funktioniert was the er-form (-t); for ich it's studiere (-e). The Romance stamp -ieren never moves — only the personal ending does. And studieren takes its object bare: Ich studiere Deutsch.",
    },
  },
  {
    id: 9,
    slug: "conjugation-roots-and-thou",
    title: "Conjugation Roots & The Living Endings",
    subtitle: "Why Shakespeare's 'thou -st' and archaic '-th' unlock German verb conjugations",
    phase: 2,
    shift_categories: [],
    word_ids: ["lernen", "kommen", "trinken", "machen", "denken", "finden", "singen", "bringen", "du", "stehen", "zeigen", "küssen", "fotografieren", "anprobieren", "spazieren"],
    table_word_ids: ["lernen", "kommen", "trinken", "machen", "denken", "du"],
    hook: {
      title: "Shakespeare's Hidden Conjugation Table",
      content:
        "English speakers often view verb conjugation tables as an unnatural obstacle. But German verb endings are not foreign: they are the exact personal suffixes English used until the 17th century! Early Modern English preserved 'thou -st' (thou learnst, thou drinkst) and 3rd person '-th' (he learneth, he cometh). German simply kept these living endings intact.",
      footnotes: [
        {
          marker: "1",
          title: "Proto-Germanic Personal Inflections",
          content: "Ancient Germanic marked the grammatical subject directly on the verb root via distinct personal suffixes.",
        },
      ],
    },
    pattern: {
      title: "Stem + Suffix: The Universal Formula",
      content:
        "Strip the dictionary infinitive '-en' to find the bare verb stem (lern-, trink-, mach-). Then attach the personal tile: 'ich -e' (Old English ic binde), 'du -st' (Early Modern English thou learnst / thou drinkst), 'er/sie/es -t' (archaic he learneth / he drinketh), 'wir -en' (Middle English we drinken), 'ihr -t' (plural y'all), and 'sie -en' (they). Once you recognize Shakespeare in 'du trinkst' and 'er trinkt', you never have to memorize a regular verb table again!",
      footnotes: [
        {
          marker: "2",
          title: "Thou -st ↔ Du -st",
          content: "2nd person singular '-st' is an identical historical cognate across both languages.",
        },
      ],
    },
    exercises: [
      {
        id: "l9_e1",
        type: "morpheme_tiles",
        prompt: "Assemble the verb form for 'thou makest / you make' (Stem + Shakespearean ending):",
        tile_options: ["mach", "st", "en", "t", "e"],
        target_answer: "machst",
        meaning: "you make / thou makest",
        shift_hint: "du -st (thou -st)",
        explanation: "Stem 'mach-' + 2nd person singular suffix '-st' (twin of Early Modern English 'thou -st') = machst.",
      },
      {
        id: "l9_e2",
        type: "matching_pairs",
        prompt: "Match each thought with its German form — the ending carries the person:",
        matching_pairs: [
          { id: "cj1", english: "thou standest", german: "du stehst" },
          { id: "cj2", english: "he shows", german: "er zeigt" },
          { id: "cj3", english: "thou kissest", german: "du küssst" },
          { id: "cj4", english: "we kiss", german: "wir küssen" },
          { id: "cj5", english: "we stand", german: "wir stehen" },
          { id: "cj6", english: "thou makest", german: "du machst" },
        ],
        target_answer: "du stehst, er zeigt, du küssst, wir küssen, wir stehen, du machst",
        meaning: "you stand, he shows, you kiss, we kiss, we stand, you make",
        explanation: "The person lives in the ending: du takes the Shakespearean -st, er the archaic -t, wir the full dictionary -en — stehen, zeigen and küssen just wear them.",
      },
      {
        id: "l9_e3",
        type: "shift_select",
        prompt: "In 'Wir spazieren und wir fotografieren', why do both verbs end in -en?",
        options: [
          "Because wir takes the dictionary -en — the full ending returns for we",
          "Because both verbs are questions",
          "Because -en marks the past tense",
          "Because they are Latin loans and keep their own rules",
        ],
        target_answer: "Because wir takes the dictionary -en — the full ending returns for we",
        meaning: "the wir-form is the dictionary form at work",
        explanation: "Strip nothing: with wir the verb IS its dictionary self — spazieren, fotografieren, lernen, kommen. The ending you add for ich is the only one that ever shrinks.",
      },
      {
        id: "l9_e4",
        type: "derive",
        prompt: "The shop mirror: 'Wir wollen es _____' (to try on — complete the bracket infinitive):",
        english_hint: "an + probieren — inside the bracket the separable verb stays whole",
        target_answer: "anprobieren",
        meaning: "Wir wollen es anprobieren = we want to try it on",
        explanation: "The modal bracket from topic 2 keeps the separable verb whole: anprobieren closes it, prefix and all — and anprobieren is 'probe' wearing its Latin papers.",
      },
      {
        id: "l9_e5",
        type: "transcribe",
        prompt: "Tell me:",
        idea: "you're describing your household's morning split: you make the coffee and we drink the tea",
        cues: [
          "Endings do the work: du machst (thou makest), wir trinken (we drinken)",
          "und joins two full clauses — each verb holds its own position 2",
        ],
        target_answer: "Du machst Kaffee und wir trinken Tee",
        meaning: "You make coffee and we drink tea",
        vocab_hints: [
          { word: "machst", translation: "make (du form)", note: "mach + st (thou makest)" },
          { word: "trinken", translation: "drink (wir form)", note: "trink + en (we drinken)" },
        ],
        word_bank: ["Du", "machst", "Kaffee", "und", "wir", "trinken", "Tee", "trinkst"],
        explanation: "Subject + conjugated verb, twice over: the endings carry the persons across both clauses.",
        diagnosis: {
          slip: "the thou-ending dropped off",
          cue: "du keeps the Shakespearean -st: du machst (thou makest), du trinkst (thou drinkest). English only dropped it in the 1600s — German never did.",
        },
      },
    ],
    summary: {
      outcome: "Conjugate a regular present-tense verb for ich, du, er/sie/es, and wir.",
      use_example: { german: "Du machst Kaffee und wir trinken Tee.", english: "You make coffee and we drink tea." },
      takeaway: "German present tense endings directly preserve the ancestral English system: ich -e, du -st, er -t, wir -en.",
      curiosity_teaser: "Next: the stem hunters — strip -en at speed and rebuild every person of a verb from its stem.",
    },
    twist: {
      prompt: "The camera changes hands: ich fotografiere → we photograph. Put it in German.",
      target_answer: "Wir fotografieren",
      word_bank: ["Wir", "fotografieren", "fotografiere", "du"],
      explanation: "ich -e → wir -en: the -ieren stamp never moves, only the personal ending does — fotografieren is a Latin loan taking German endings like any native verb.",
    },
  },
  {
    id: 10,
    slug: "pronouns-as-case-anchors",
    title: "Pronouns as Case Anchors (The Him-Case)",
    subtitle: "Why only masculine articles change in the accusative (der → den, er → ihn)",
    phase: 2,
    shift_categories: [],
    word_ids: ["der", "die", "das", "tisch", "kaffee", "tee", "traum", "tag"],
    table_word_ids: ["der", "die", "das", "tisch", "kaffee", "tee"],
    hook: {
      title: "The 'Him-Case' Secret",
      content:
        "Every beginner wonders: Why does German change 'der' to 'den', 'ein' to 'einen', and 'er' to 'ihn' for direct objects, while feminine ('die/eine') and neuter ('das/ein') stay completely unchanged? The answer lies in your own native tongue. English does this exact thing: we say 'He saw the dog', but 'The dog bit HIM' (never 'bit he'). We say 'who' for the subject, but 'WHOM' for the object. That nasal ending is the ancient Indo-European direct object marker!",
      footnotes: [
        {
          marker: "1",
          title: "The Accusative Nasal Marker",
          content: "Proto-Indo-European marked masculine accusative with *-m. In High German, unstressed final -m shifted to -n (him ↔ ihn, whom ↔ wen).",
        },
      ],
    },
    pattern: {
      title: "The Masculine Accusative -N Rhyme",
      content:
        "In Proto-Germanic, neuter and feminine nouns never marked accusative differently from nominative. Masculine singular is the lone survivor that raises a flag with the letter '-N' whenever it receives an action: der ➔ den, ein ➔ einen, kein ➔ keinen, mein ➔ meinen, and er ➔ ihn (the twin of English 'him'). Feminine and neuter nouns remain steadfastly identical (die bleibt die, das bleibt das). Once you recognize the 'Him-Case', you never mistake accusative articles again.",
      footnotes: [
        {
          marker: "2",
          title: "M → N Nasal Alignment",
          content: "English preserved the ancient accusative nasal in him/them/whom; German shifted final unstressed m to n in ihn/den/wen.",
        },
      ],
    },
    exercises: [
      {
        id: "l10_e1",
        type: "morpheme_tiles",
        prompt: "Assemble the masculine direct object article for 'a coffee' (ein + accusative -en):",
        tile_options: ["ein", "en", "em", "den", "der"],
        target_answer: "einen",
        meaning: "a (masculine accusative)",
        shift_hint: "Masculine Accusative -n",
        explanation: "Indefinite root 'ein' + masculine accusative marker '-en' = einen.",
      },
      {
        id: "l10_e2",
        type: "matching_pairs",
        prompt: "Match the English objective pronouns with their German accusative twins:",
        matching_pairs: [
          { id: "ac1", english: "him", german: "ihn" },
          { id: "ac2", english: "me", german: "mich" },
          { id: "ac3", english: "thee / you", german: "dich" },
          { id: "ac4", english: "us", german: "uns" },
        ],
        target_answer: "ihn, mich, dich, uns",
        meaning: "him, me, thee/you, us",
        shift_hint: "The 'Him-Case'",
        explanation: "English preserved the ancient accusative/dative in him/me/thee/us; German preserves ihn/mich/dich/uns.",
      },
      {
        id: "l10_e3",
        type: "shift_select",
        prompt: "Why does 'der Kaffee' change to 'den Kaffee' in 'Ich trinke den Kaffee', but 'das Wasser' stays 'das Wasser'?",
        options: [
          "In Germanic, only masculine singular marks the direct object with the nasal -n (cognate with English 'him' and 'whom')",
          "Because coffee is a hot beverage",
          "Because trinken only changes masculine verbs",
          "Neuter nouns are completely immune to verbs",
        ],
        target_answer: "In Germanic, only masculine singular marks the direct object with the nasal -n (cognate with English 'him' and 'whom')",
        meaning: "Masculine exclusivity of the accusative shift",
        explanation: "Neuter and feminine nouns collapsed nominative and accusative in ancient Indo-European. Only masculine retains the distinct nasal accusative ending (-n in German, -m in English him/whom).",
      },
      {
        id: "l10_e4",
        type: "derive",
        prompt: "Complete with the masculine accusative: 'Ich habe _____ Traum' (ein + masculine direct object ending):",
        english_hint: "ein + en",
        shift_hint: "der Traum → einen Traum",
        target_answer: "einen",
        meaning: "Ich habe einen Traum = I have a dream",
        explanation: "'Traum' is masculine (der Traum). As the direct object of haben, it takes the accusative 'einen'.",
      },
      {
        id: "l10_e5",
        type: "transcribe",
        prompt: "How would you say:",
        idea: "you're at a café table, people-watching: you're drinking a coffee and looking for him",
        cues: [
          "Coffee is masculine and acted-on: ein → einen — the Him-Case on the article",
          "The pronoun follows the same law: er → ihn (suchen needs no preposition — the 'for' is baked in)",
        ],
        target_answer: "Ich trinke einen Kaffee und suche ihn",
        meaning: "I am drinking a coffee and looking for him",
        vocab_hints: [
          { word: "einen", translation: "a (masculine direct object)", note: "Kaffee is masculine: ein → einen" },
          { word: "ihn", translation: "him (direct object)", note: "direct cognate of English 'him' (er → ihn)" },
        ],
        word_bank: ["Ich", "trinke", "einen", "Kaffee", "und", "suche", "ihn", "er"],
        explanation: "Two clauses, one subject — and the masculine accusative shows twice: einen Kaffee, ihn. Him-case everywhere.",
      },
    ],
    summary: {
      outcome: "Use den or einen for a masculine direct object and ihn for 'him' as an object.",
      use_example: { german: "Ich trinke einen Kaffee und suche ihn.", english: "I drink a coffee and look for it." },
      takeaway: "Only masculine singular changes in the accusative: der → den, ein → einen, and er → ihn (the 'Him-Case').",
      curiosity_teaser: "Next: the den / einen / ihn case gym — the him-case drilled with real objects: trinke einen Kaffee, suche ihn.",
    },
    twist: {
      prompt: "Same mouth, different order: I drink a coffee becomes I drink THE tea. (Careful — still masculine, still acted-on.)",
      target_answer: "Ich trinke den Tee",
      word_bank: ["Ich", "trinke", "den", "Tee", "einen", "das"],
      explanation: "Tee is masculine too, so the Him-Case holds: der → den. Only the masculine article bends — feminine and neuter objects would have refused to change.",
    },
  },
  {
    id: 101,
    slug: "hidden-twins-body-and-world",
    title: "Hidden Twins: Body & World",
    subtitle: "Arm, Hand, Finger, Haus, Glas, Brot — words that crossed the sea untouched",
    phase: 1,
    shift_categories: [],
    word_ids: ["arm", "hand", "finger", "ring", "haus", "glas", "brot", "gold", "sand", "butter"],
    table_word_ids: ["hand", "finger", "haus", "glas", "brot", "ring"],
    hook: {
      title: "The Zero-Shift Zone",
      content:
        "Point at your hand. The word you just thought of is German. Hand is Hand, Arm is Arm, Finger is Finger — spelled identically, letter for letter, after 1,500 years on opposite shores of the North Sea. Around every such zero-shift twin, a small world of identical words gathers: Haus, Glas, Brot, Gold, Sand, Butter, Ring. You did not learn German words today. You noticed the ones you always owned.",
      footnotes: [
        {
          marker: "1",
          title: "Why Untouched?",
          content:
            "These words are identical precisely because they contain none of the consonants the High German Shift touched in the positions it touched them — no initial p, t, k, or th. Arm, Hand, Finger, Ring, Haus, Glas, Brot, Gold, Sand, Butter: every consonant sat in a safe seat when the sound wave rolled through.",
        },
      ],
    },
    pattern: {
      title: "Recognize the Twin, Then Flag the Gender",
      content:
        "There is no transformation to learn here — only recognition plus one new habit: German flags every noun with a gender. Arm (der), Finger (der), Ring (der), and Sand (der) are masculine; Hand (die) and Butter (die) are feminine; Haus, Glas, Brot, and Gold (das) are neuter. The flag is not logic, it is ancestry — so collect it together with the word, the way you collect pronunciation with a word in any language.",
      footnotes: [
        {
          marker: "2",
          title: "Brot Is 'the Brewed Thing'",
          interest: true,
          content:
            "Brot traces to Proto-Germanic *braudą — originally 'the fermented, risen thing', kin to the verb brew (German brauen). Bread and brew are branches of the same ancient root; bread was named after its foam.",
        },
        {
          marker: "3",
          title: "You Eat the Cognate Weekly",
          content:
            "A Hamburger is simply 'of Hamburg' — the city's name plus the German adjectival -er, exactly as in Berliner or Wiener. English kept the German grammar inside the sandwich.",
        },
      ],
    },
    exercises: [
      {
        id: "l101_e1",
        type: "matching_pairs",
        prompt: "Match each English word with its identical German twin:",
        matching_pairs: [
          { id: "ht1", english: "house", german: "Haus" },
          { id: "ht2", english: "bread", german: "Brot" },
          { id: "ht3", english: "glass", german: "Glas" },
          { id: "ht4", english: "butter", german: "Butter" },
        ],
        target_answer: "Haus, Brot, Glas, Butter",
        meaning: "house, bread, glass, butter",
        explanation: "Zero-shift twins: no consonant of these words sat in a shifted position, so the spellings survived side by side.",
      },
      {
        id: "l101_e2",
        type: "reverse_cognate",
        prompt: "What everyday English word is the exact twin of German 'Brot'?",
        target_answer: "bread",
        meaning: "bread (twin of German Brot)",
        explanation: "Brot and bread are the same Proto-Germanic word — and Brot is kin to the verb brew: bread is 'the brewed thing'.",
      },
      {
        id: "l101_e3",
        type: "shift_select",
        prompt: "Which gender flag does 'Ring' carry?",
        options: ["der", "die", "das"],
        target_answer: "der",
        meaning: "der Ring — the ring (masculine)",
        explanation: "Ring is masculine: der Ring — the exact English word, kept for the circle on a finger. Gender is ancestry, not logic — collect it with the word.",
      },
      {
        id: "l101_e4",
        type: "derive",
        prompt: "Give the German twin of English 'hand' (exact spelling, capitalized):",
        english_hint: "no shift at all — just the German capital",
        target_answer: "Hand",
        meaning: "die Hand — the hand",
        explanation: "Hand is spelled identically in both languages; German simply capitalizes all nouns.",
      },
      {
        id: "l101_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'I find the gold in the sand'",
        target_answer: "Ich finde das Gold im Sand",
        meaning: "I find the gold in the sand",
        vocab_hints: [
          {
            word: "das",
            translation: "the (neuter)",
            note: "Gold is neuter: das Gold (Sand is masculine — der Sand)",
          },
          {
            word: "im",
            translation: "in the",
            note: "im = in + dem, the all-purpose 'in the' for masculine and neuter places",
          },
        ],
        word_bank: ["Ich", "finde", "das", "Gold", "im", "Sand"],
        explanation: "Verb in position 2: 'Ich finde...'. 'im' is the contraction of in + dem — one tile instead of two.",
      },
    ],
    summary: {
      outcome: "Recognize ten zero-shift cognate nouns and attach their gender flags.",
      use_example: { german: "Das Brot und das Gold im Haus.", english: "The bread and the gold in the house." },
      takeaway: "Words without shiftable consonants crossed unchanged — and each noun carries a gender flag you collect with the word.",
      curiosity_teaser: "Next: You own fifteen words — that is enough for real sentences. Time to build your first six.",
    },
  },
  {
    id: 102,
    slug: "first-sentences-gym",
    title: "First Sentences Gym",
    subtitle: "Fifteen words you already own are enough for six real German sentences",
    phase: 1,
    shift_categories: [],
    word_ids: ["lernen", "kommen", "gehen", "singen", "schwimmen", "finden", "bringen", "haus", "glas", "brot", "deutsch", "bier", "kuchen", "wurst"],
    table_word_ids: ["lernen", "kommen", "singen", "schwimmen", "finden", "bringen"],
    hook: {
      title: "You Already Have Enough Words",
      content:
        "Vocabulary lists lie to beginners. They imply you need five hundred words before a sentence is legal. You already know lernen, kommen, gehen, singen, schwimmen, finden, bringen — plus Haus, Glas, Brot, and friends. German sentences need only three parts: a doer, an action in position 2, and everything else. Six sentences from today, and every one is built from words English handed you.",
      footnotes: [
        {
          marker: "1",
          title: "Old English Did It Too",
          content:
            "Old English main clauses also tended to set the verb second ('Hwæt! We Gar-Dena...' — the verb 'we have' comes right after the first phrase). Verb-second is not a German quirk; it is the ancestral English habit that modern English lost.",
        },
      ],
    },
    pattern: {
      title: "Subject — Verb — Everything Else",
      content:
        "The rule: the conjugated verb is glued to position 2, no matter what. Ich lerne Deutsch. Wir lernen Deutsch. Notice the verb barely changes: ich lernt? No — ich lernt is wrong; ich lernt sounds like a parrot, ich lernt... ich lerne ends in -e for 'I', and wir lernt? wir lernen — the full -en returns for 'we'. So: ich lerne, wir lernen; ich schwimme, wir schwimmen; ich finde, wir finden. Two people, two endings, one stem. German has not even asked you to memorize anything yet.",
      footnotes: [
        {
          marker: "2",
          title: "ich ↔ I",
          content:
            "Even the word 'ich' is your old possession: English 'I' and German 'ich' descend from the same Proto-Germanic *ek. The vowel wandered for a thousand years — the word never changed owner.",
        },
      ],
    },
    exercises: [
      {
        id: "l102_e1",
        type: "morpheme_tiles",
        prompt: "Assemble 'I learn' (stem + the ich-ending):",
        tile_options: ["ich", "lern", "e", "en", "st"],
        target_answer: "ich lerne",
        meaning: "I learn",
        explanation: "Stem 'lern-' takes -e for ich: ich lerne. The -st is the du-ending — not this person.",
      },
      {
        id: "l102_e2",
        type: "matching_pairs",
        prompt: "Match each German sentence with its English meaning:",
        matching_pairs: [
          { id: "fs1", english: "We swim", german: "Wir schwimmen" },
          { id: "fs2", english: "I find the glass", german: "Ich finde das Glas" },
          { id: "fs3", english: "We sing", german: "Wir singen" },
          { id: "fs4", english: "I come", german: "Ich komme" },
          { id: "fs5", english: "I learn German", german: "Ich lerne Deutsch" },
          { id: "fs6", english: "I find the sausage", german: "Ich finde die Wurst" },
        ],
        target_answer: "Wir schwimmen, Ich finde das Glas, Wir singen, Ich komme, Ich lerne Deutsch, Ich finde die Wurst",
        meaning: "we swim, I find the glass, we sing, I come, I learn German, I find the sausage",
        explanation: "Subject + verb in position 2: with wir the verb keeps its full dictionary -en. Deutsch, Wurst — zero-shift words slot straight in.",
      },
      {
        id: "l102_e3",
        type: "derive",
        prompt: "Conjugate for 'we': 'Wir _____ den Kuchen' (to find):",
        english_hint: "find + en",
        target_answer: "finden",
        meaning: "Wir finden den Kuchen = We find the cake",
        explanation: "Stem 'find-' + the full -en for wir = finden. Der Kuchen is the cake — collect the masculine flag with the word.",
      },
      {
        id: "l102_e4",
        type: "shift_select",
        prompt: "Which of these is a correctly built German statement?",
        options: ["Ich lerne Deutsch", "Ich Deutsch lerne", "Deutsch ich lerne", "Lerne Deutsch ich"],
        target_answer: "Ich lerne Deutsch",
        meaning: "I learn German — verb glued to position 2",
        explanation: "The conjugated verb stays in position 2: subject first, then verb, then everything else.",
      },
      {
        id: "l102_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'We bring bread and beer'",
        target_answer: "Wir bringen Brot und Bier",
        meaning: "We bring bread and beer",
        vocab_hints: [
          {
            word: "und",
            translation: "and",
            note: "ancient twin of English 'and' — both from the same Proto-Germanic word",
          },
        ],
        word_bank: ["Wir", "bringen", "Brot", "und", "Bier"],
        explanation: "Two nouns joined by 'und'; bringen holds position 2 of its half — das Bier needs no translation, only a capital letter.",
      },
    ],
    summary: {
      outcome: "Build simple subject-verb sentences with ich and wir forms of seven cognate verbs.",
      use_example: { german: "Wir lernen Deutsch und wir singen.", english: "We learn German and we sing." },
      takeaway: "Verb in position 2, ich takes -e, wir takes -en — the sentence writes itself from words you already own.",
      curiosity_teaser: "Next: brighten, shorten, deepen — English has its own living -en verbs, and they unlock a whole shelf of German ones.",
    },
  },
  {
    id: 103,
    slug: "living-en-suffix",
    title: "The Living -en Suffix",
    subtitle: "brighten, shorten, deepen — English's own -en verbs are the bridge into German",
    phase: 1,
    shift_categories: [],
    word_ids: ["folgen", "wandern", "warnen", "hungern", "lernen", "singen", "schwimmen"],
    table_word_ids: ["folgen", "wandern", "warnen", "hungern"],
    hook: {
      title: "You Use German -en Every Week",
      content:
        "When English wants to turn an adjective into a verb, it reaches for the Germanic suffix -en: bright → brighten, short → shorten, deep → deepen, wide → widen, hard → harden, dark → darken. You say these without a second thought — and they are, morphologically, German verbs wearing English clothes. German simply never stopped doing what English still does occasionally: every dictionary verb ends in -en. That means the -en shelf of German is not new vocabulary. It is your own suffix, used at full power.",
      footnotes: [
        {
          marker: "1",
          title: "The Worn-Down Twins",
          content:
            "Three verbs wore their endings down in English but kept them in German: follow lost its g entirely (folgen kept it), wander dropped the -n (wandern kept it), and warn let the -en shrink to nothing (warnen kept it). The German forms are the older shapes of your own words.",
        },
      ],
    },
    pattern: {
      title: "One Suffix, Three Strategies",
      content:
        "Strategy one — the adjective verb: English brighten works exactly like German's adjective verbs; the suffix means 'make into'. Strategy two — the noun verb: German takes a noun and bolts -en on: Hunger → hungern (to hunger, to be starving). English used to do this too — old texts still say 'they hungered'. Strategy three — the hidden suffix: follow ↔ folgen, wander ↔ wandern, warn ↔ warnen. English chewed the ending off; German serves it whole. Whenever you meet a German verb ending in -ern or -en that begins like an English verb, you already know it.",
      footnotes: [
        {
          marker: "2",
          title: "The g Inside follow",
          content:
            "folgen and follow descend from the same Proto-Germanic *fulgāną. Old English was folgian — with the g. Middle English wore it into 'folwen', and the modern w is all that remains of the ancient g. German wrote the g down and never let go.",
        },
      ],
      linguist_note:
        "German also runs a variant -ern (wandern, ändern), from the same West Germanic derivational family. English 'wander' descends from the same root as wandern — the -n tail dropped in the crossing.",
    },
    exercises: [
      {
        id: "l103_e1",
        type: "morpheme_tiles",
        prompt: "English 'wander' + the tail German kept = the German verb:",
        tile_options: ["wander", "n", "en", "st", "t"],
        target_answer: "wandern",
        meaning: "to wander / to hike",
        explanation: "wander + -n = wandern. English dropped the final -n; German never did.",
      },
      {
        id: "l103_e2",
        type: "matching_pairs",
        prompt: "Match the worn-down English verbs with their full German forms:",
        matching_pairs: [
          { id: "le1", english: "follow", german: "folgen" },
          { id: "le2", english: "wander", german: "wandern" },
          { id: "le3", english: "warn", german: "warnen" },
          { id: "le4", english: "hunger (starve)", german: "hungern" },
        ],
        target_answer: "folgen, wandern, warnen, hungern",
        meaning: "to follow, to wander, to warn, to hunger",
        explanation: "English chewed the suffix down; German serves each verb with its full Germanic ending.",
      },
      {
        id: "l103_e3",
        type: "reverse_cognate",
        prompt: "What English verb shares the exact root of 'folgen'?",
        target_answer: "follow",
        meaning: "to follow (twin of German folgen)",
        explanation: "Both descend from Proto-Germanic *fulgāną — the g in folgen survives as the w of follow.",
      },
      {
        id: "l103_e4",
        type: "derive",
        prompt: "Apply the suffix rule: English 'to warn' → German verb:",
        english_hint: "warn + en",
        target_answer: "warnen",
        meaning: "to warn",
        explanation: "Stem 'warn-' + infinitive '-en' = warnen — the ending English once had and let go.",
      },
      {
        id: "l103_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'We sing and we wander'",
        target_answer: "Wir singen und wir wandern",
        meaning: "We sing and we wander",
        vocab_hints: [
          {
            word: "und",
            translation: "and",
            note: "ancient twin of English 'and'",
          },
        ],
        word_bank: ["Wir", "singen", "und", "wir", "wandern"],
        explanation: "Same pattern as the First Sentences Gym — the new verb slots straight into the old frame.",
      },
    ],
    summary: {
      outcome: "Derive German -en/-ern verbs from their English twins and use them in wir-sentences.",
      use_example: { german: "Wir singen und wir wandern.", english: "We sing and we wander." },
      takeaway: "English still coins verbs with Germanic -en (brighten, shorten); German uses that same suffix on every verb — including follow, wander, warn and hunger.",
      curiosity_teaser: "Next: the modal auxiliaries & the bracket — ich will means I want, not the future, and the frame they build.",
    },
  },
  {
    id: 201,
    slug: "will-not-will",
    title: "will ≠ will",
    subtitle: "English turned 'will' into a future machine — German kept its ancient job: wanting",
    phase: 1,
    shift_categories: [],
    word_ids: ["wollen", "sollen", "können", "müssen", "mögen", "lust", "teuer", "deutsch", "bier", "kuchen", "wurst"],
    table_word_ids: ["wollen", "sollen", "können", "müssen", "mögen"],
    hook: {
      title: "The Word English Broke",
      content:
        "In ancient Germanic, 'will' meant one thing: desire. English eventually bent it into a future-tense machine — 'it will rain' desires nothing. German never bent it. Ich will ein Bier is a confession of thirst, not a weather forecast. The proof lives inside English itself: free will, will to live, against my will, last will and testament. Every time you use those phrases, you are using German's will. And the twin of soll is shall — thou shalt not kill is, word for word, du sollst nicht töten.",
      footnotes: [
        {
          marker: "1",
          title: "The World as Will",
          interest: true,
          content:
            "Schopenhauer titled his masterwork Die Welt als Wille und Vorstellung (1818) — 'The World as Will and Representation'. German philosophers could pick 'Wille' precisely because the word still meant raw wanting, the meaning English buried under its future tense.",
        },
        {
          marker: "2",
          title: "Thou Shalt ↔ Du Sollst",
          content:
            "Luther's Ten Commandments say Du sollst nicht töten; the King James Bible says Thou shalt not kill. Same verb, same ending, same commandment — preserved in two languages that otherwise let 'shall' and 'soll' drift apart.",
        },
      ],
    },
    pattern: {
      title: "The Desire Modals: wollen, sollen, mögen",
      content:
        "ich will = I want (du willst, er will). ich soll = I am supposed to / shall (du sollst). ich mag = I like — the twin of English may/might, which also once meant 'to have the power to'. And ich möchte is its polite sibling: 'I would like'. Watch the endings: du willst keeps the Shakespearean -st (thou willest), and none of these ever takes zu before the infinitive — the desire travels bare: Ich will schwimmen. Meanwhile möchten softens desire into politeness: Ich möchte einen Kaffee — I would like a coffee.",
      footnotes: [],
      linguist_note:
        "All five modals drop the -t in the 3rd person exactly as English does: he can, he will, he must — never he cans. German: er kann, er will, er muss. A shared fossil of Proto-Germanic.",
    },
    exercises: [
      {
        id: "l201_e1",
        type: "shift_select",
        prompt: "A friend says: 'Ich will ein Bier.' What did she tell you?",
        options: [
          "She wants a beer — right now",
          "She will bring a beer someday",
          "She must drink a beer",
          "She can drink a beer",
        ],
        target_answer: "She wants a beer — right now",
        meaning: "ich will = I want (desire, not future)",
        explanation: "German kept 'will' in its ancient desire sense — the meaning English preserves only in 'free will' and 'will to live'.",
      },
      {
        id: "l201_e2",
        type: "matching_pairs",
        prompt: "Match the desire modals with their English twins:",
        matching_pairs: [
          { id: "wm1", english: "I want", german: "ich will" },
          { id: "wm2", english: "you shall", german: "du sollst" },
          { id: "wm3", english: "I like", german: "ich mag" },
          { id: "wm4", english: "we must", german: "wir müssen" },
          { id: "wm5", english: "I feel like cake", german: "ich habe Lust auf Kuchen" },
          { id: "wm6", english: "I want the sausage", german: "ich will die Wurst" },
        ],
        target_answer: "ich will, du sollst, ich mag, wir müssen, ich habe Lust auf Kuchen, ich will die Wurst",
        meaning: "I want, you shall, I like, we must, I feel like cake, I want the sausage",
        explanation: "wollen ↔ will, sollen ↔ shall, mögen ↔ may — and die Lust is the desire noun hiding inside English 'lust'.",
      },
      {
        id: "l201_e3",
        type: "shift_select",
        prompt: "The beer costs twenty euro. Your verdict: 'zu teuer.' What does 'zu teuer' mean?",
        options: ["too expensive", "too early", "on sale", "well earned"],
        target_answer: "too expensive",
        meaning: "zu teuer = too expensive",
        explanation: "teuer is the true twin of English 'dear' — English d hardened to German t, then 'dear' drifted toward 'beloved' while teuer stayed with price. zu = too.",
      },
      {
        id: "l201_e4",
        type: "derive",
        prompt: "Express desire: 'Ich _____ schwimmen' (I want to swim):",
        english_hint: "the modal of free will",
        target_answer: "will",
        meaning: "Ich will schwimmen = I want to swim",
        explanation: "ich will + bare infinitive — no zu, no future reading, just wanting.",
      },
      {
        id: "l201_e5",
        type: "transcribe",
        prompt: "How would you say:",
        idea: "you and your friend are declaring a shared goal: you both want to learn German",
        cues: [
          "Who wants? → wir, so the modal takes -en: wir wollen",
          "What? → Deutsch",
          "The bare infinitive closes the bracket: lernen goes last",
        ],
        target_answer: "Wir wollen Deutsch lernen",
        meaning: "We want to learn German",
        word_bank: ["Wir", "wollen", "willst", "Deutsch", "lernen", "lernt"],
        explanation: "wollen agrees with wir (-en) and the bare infinitive closes the bracket — desire travels bare, no zu.",
      },
    ],
    summary: {
      outcome: "Use ich will / ich möchte for desire and never misread a German 'will' as the future.",
      use_example: { german: "Ich möchte einen Kaffee, und du willst ein Bier.", english: "I would like a coffee, and you want a beer." },
      takeaway: "German will = want (free will), soll = shall, mag = may — the desire modals English bent or buried.",
      curiosity_teaser: "Next: the modal bracket out in the wild — how 'Ich kann morgen kommen' packs three facts into one frame.",
    },
  },
  {
    id: 202,
    slug: "bracket-sentences-in-the-wild",
    title: "Bracket Sentences in the Wild",
    subtitle: "Ich kann morgen kommen — one frame, three facts, zero effort",
    phase: 1,
    shift_categories: [],
    word_ids: ["morgen", "können", "wollen", "müssen", "kommen", "wandern", "lernen", "folgen", "fernsehen", "einsteigen", "aussteigen", "deutsch", "bier", "kuchen", "wurst", "lust", "teuer"],
    table_word_ids: ["morgen", "kommen", "wandern", "lernen", "folgen"],
    hook: {
      title: "The Sentence Sandwich",
      content:
        "German grammar hands you a machine: the conjugated modal opens the sentence, the bare infinitive closes it, and everything you want to say lives in between. Ich kann morgen kommen says WHO (ich), WHAT (kommen), WHEN (morgen) and CAN — four facts in one breath. English needs three verbs for that. German needs one. The closing infinitive is called the Satzklammer — the sentence bracket — because it clamps around your message like a staple.",
      footnotes: [
        {
          marker: "1",
          title: "A Frame You Will Meet Again",
          content:
            "The same bracket architecture returns when Germans talk about the past (Ich habe... gegessen) — the tense verb opens, the participle closes. Master it now with modals and the past tense will feel like a rerun.",
        },
      ],
    },
    pattern: {
      title: "Build the Bracket",
      content:
        "Slot 1 is the subject, slot 2 the conjugated modal, then the contents, then the bare infinitive slams shut at the end: Ich kann morgen wandern. Wir wollen heute singen. Ich muss lernen. Du kannst folgen. Nothing else in the sentence may leave the bracket — time words like morgen (twin of 'morrow', the word inside to-morrow) and heute (today) ride inside it, usually right after the verb. The frame never breaks: no matter how full the middle gets, the infinitive waits at the caboose.\n\nOne Denglisch ladder, read it the German way first: Ich kann morgen kommen → I can tomorrow come → I can come tomorrow. The odd middle line is exact German — modal in position 2, contents inside, bare infinitive at the caboose — and Old English allowed every word of it.",
      footnotes: [],
      linguist_note:
        "English did this too — archaic 'I can go' survives, but Middle English also allowed 'I can the road go' patterns; modern English lost the bracket by fusing modals with a to-infinitive. German kept the original Germanic frame intact.",
    },
    exercises: [
      {
        id: "l202_e1",
        type: "shift_select",
        prompt: "In 'Ich will Deutsch lernen', why does 'lernen' sit at the very end?",
        options: [
          "The bare infinitive always closes the modal bracket",
          "lernen is a question word",
          "Old words go last in German",
          "Deutsch pushed it out of position 2",
        ],
        target_answer: "The bare infinitive always closes the modal bracket",
        meaning: "The Satzklammer: modal in position 2, bare infinitive last",
        explanation: "The conjugated modal opens the frame; the bare infinitive clamps it shut. Everything else lives inside.",
      },
      {
        id: "l202_e2",
        type: "matching_pairs",
        prompt: "Match each bracket sentence with its English meaning:",
        matching_pairs: [
          { id: "bw1", english: "I can hike tomorrow", german: "Ich kann morgen wandern" },
          { id: "bw2", english: "We want to sing today", german: "Wir wollen heute singen" },
          { id: "bw3", english: "I have to learn", german: "Ich muss lernen" },
          { id: "bw4", english: "You can follow", german: "Du kannst folgen" },
          { id: "bw5", english: "You must get off", german: "Du musst aussteigen" },
          { id: "bw6", english: "We want to watch TV", german: "Wir wollen fernsehen" },
          { id: "bw7", english: "I feel like sausage", german: "ich habe Lust auf Wurst" },
          { id: "bw8", english: "I want a beer", german: "Ich will ein Bier" },
        ],
        target_answer: "Ich kann morgen wandern, Wir wollen heute singen, Ich muss lernen, Du kannst folgen, Du musst aussteigen, Wir wollen fernsehen, ich habe Lust auf Wurst, Ich will ein Bier",
        meaning: "I can hike tomorrow, we want to sing today, I have to learn, you can follow, you must get off, we want to watch TV, I feel like sausage, I want a beer",
        explanation: "Modal in position 2, contents inside, bare infinitive at the end — the same frame every time, even for new verbs like aussteigen and fernsehen.",
      },
      {
        id: "l202_e3",
        type: "derive",
        prompt: "Close the bracket: 'Wir können morgen _____' (to board / get on):",
        english_hint: "the bare infinitive rides at the end",
        target_answer: "einsteigen",
        meaning: "Wir können morgen einsteigen = We can board tomorrow",
        explanation: "The bare infinitive 'einsteigen' closes the bracket — ein + steigen, 'climb on', kept as one word. No zu, no ending.",
      },
      {
        id: "l202_e4",
        type: "reverse_cognate",
        prompt: "The German time word 'morgen' hides inside an English adverb — which word is its twin?",
        target_answer: "morrow",
        meaning: "morrow — as in to-morrow (twin of German morgen)",
        explanation: "English 'tomorrow' is literally 'to the morrow'; German morgen never needed the 'to'.",
      },
      {
        id: "l202_e5",
        type: "transcribe",
        prompt: "Tell me:",
        idea: "you're eyeing the cake at the bakery, but the price stops you: the cake is too expensive",
        cues: [
          "The thing → der Kuchen (der is the masculine flag)",
          "zu = too; the verb ist holds position 2",
        ],
        target_answer: "Der Kuchen ist zu teuer",
        meaning: "The cake is too expensive",
        vocab_hints: [
          {
            word: "zu",
            translation: "too (as in too expensive)",
            note: "same little word as the 'to' in 'to the station' — German keeps both jobs apart: zu = too, nach = to (places)",
          },
        ],
        word_bank: ["Der", "Kuchen", "ist", "zu", "teuer", "sind"],
        explanation: "ist holds position 2, zu scales teuer — and teuer is 'dear' with its d hardened to t.",
      },
    ],
    summary: {
      outcome: "Build full modal brackets with time words: who, what, when, and can/want/must in one frame.",
      use_example: { german: "Ich will morgen Deutsch lernen.", english: "I want to learn German tomorrow." },
      takeaway: "Conjugated modal in position 2, bare infinitive last — the bracket carries your whole message.",
      curiosity_teaser: "Next: the first great sound shift — how English 'hope' breathed into 'hoffen' and 'ship' into 'Schiff'.",
    },
  },
  {
    id: 301,
    slug: "pf-openers",
    title: "PF- Openers",
    subtitle: "path → Pfad, pound → Pfund, pepper → Pfeffer — the word-initial explosion",
    phase: 1,
    shift_categories: ["p_to_pf_f"],
    word_ids: ["pfad", "pfund", "pfeffer", "pfeife", "pflug", "pferd", "pfanne", "apfel", "pfirsich", "einsteigen", "aussteigen", "fernsehen"],
    table_word_ids: ["pfad", "pfund", "pfeffer", "pfeife", "pflug", "pferd"],
    hook: {
      title: "The Word-Initial Explosion",
      content:
        "You already know what the shift did after vowels: hope → hoffen, ship → Schiff. But at the front door of a word, Germanic P did not merely soften — it exploded. It burst into the double consonant PF, a sound like popping a bubble: path → Pfad, pound → Pfund, pepper → Pfeffer. Both letters are right there on the page: the English P you know, plus the F it became. Every PF- word in German is an English p-word with a receipt stapled to its face.",
      footnotes: [
        {
          marker: "1",
          title: "The Horse Receipt",
          content:
            "Pferd (horse) and English palfrey are the same medieval loan: Late Latin paraverēdus, a post-road saddle horse. German stapled the PF on (paraverēdus → Pferd), while English carried it through French and wore it down to palfrey — a knight's riding horse.",
        },
      ],
    },
    pattern: {
      title: "The PF- Family at the Front Door",
      content:
        "English p + everything = German Pf- at the start of a native word: path → Pfad, pound → Pfund, pepper → Pfeffer, pipe → Pfeife, plow → Pflug, pan → Pfanne, plant → Pflanze. Watch for double duty inside a word: Pfeffer shifts twice (initial pp... initial p → pf AND medial pp → ff), and Pfeife does the same trick (p → pf, then p → f). Even horse got the treatment: Pferd. Read any German PF- word aloud and the English twin falls out of your mouth.",
      footnotes: [
        {
          marker: "2",
          title: "The North Fades the P",
          content:
            "Colloquially in northern Germany, PF- often de-affricates to plain F — Pflug (plow) and Flug (flight) can sound identical there. In careful speech the P stays: /pf/.",
        },
      ],
      linguist_note:
        "The shift only swallowed native Germanic words. Latin borrowings kept their bare p: Post, Papier, Park. So not every German p-word expects a pf — only the ones Germanic enough to have been standing there in 500 AD.",
    },
    exercises: [
      {
        id: "l301_e1",
        type: "morpheme_tiles",
        prompt: "Assemble the German twin of 'horse' (the PF- receipt included):",
        tile_options: ["das", "Pferd", "der", "Pfard"],
        target_answer: "das Pferd",
        meaning: "the horse",
        vocab_hints: [
          {
            word: "das",
            translation: "the (neuter)",
            note: "das Pferd — gender is ancestry, collect it with the word",
          },
        ],
        shift_hint: "P → PF",
        explanation: "paraverēdus → Pferd: the Latin p affricated to pf at the start. English palfrey kept the p.",
      },
      {
        id: "l301_e2",
        type: "matching_pairs",
        prompt: "Match the English p-words with their PF- receipts:",
        matching_pairs: [
          { id: "pf1", english: "path", german: "Pfad" },
          { id: "pf2", english: "pound", german: "Pfund" },
          { id: "pf3", english: "pepper", german: "Pfeffer" },
          { id: "pf4", english: "plow", german: "Pflug" },
          { id: "pf5", english: "peach", german: "Pfirsich" },
          { id: "pf6", english: "to board / get on", german: "einsteigen" },
          { id: "pf7", english: "to get off", german: "aussteigen" },
        ],
        target_answer: "Pfad, Pfund, Pfeffer, Pflug, Pfirsich, einsteigen, aussteigen",
        meaning: "path, pound, pepper, plow, peach, to board, to get off",
        shift_hint: "P → PF",
        explanation: "Word-initial p exploded into the affricate pf in native German words — and the last two are the bracket infinitives from the modal topic, back for another ride.",
      },
      {
        id: "l301_e3",
        type: "shift_select",
        prompt: "Which shift turns English 'pipe' into German 'Pfeife'?",
        options: [
          "P → PF at the start and P → F in the middle — the word shifts twice",
          "TH → D",
          "T → Z",
          "No shift — they are identical",
        ],
        target_answer: "P → PF at the start and P → F in the middle — the word shifts twice",
        meaning: "pipe ↔ Pfeife (double p-shift)",
        explanation: "Initial p → pf, medial p → f. Both letters of the English word report their shift on the German page.",
      },
      {
        id: "l301_e4",
        type: "derive",
        prompt: "Apply the shift: English 'pan' → German:",
        english_hint: "pan → Pf + rest",
        shift_hint: "P → PF",
        target_answer: "Pfanne",
        meaning: "die Pfanne — the pan",
        explanation: "Initial p → pf: pan → Pfanne (the doubled n is a German spelling habit).",
      },
      {
        id: "l301_e5",
        type: "transcribe",
        prompt: "Tell me:",
        idea: "the market shopping is done and the evening calls: you want to watch TV",
        cues: [
          "Want → ich will (desire, never the future)",
          "The bare infinitive closes the bracket: fernsehen goes last",
          "fern + sehen — 'far-see', the exact logic inside English television",
        ],
        target_answer: "Ich will fernsehen",
        meaning: "I want to watch TV",
        vocab_hints: [
          {
            word: "fernsehen",
            translation: "to watch TV",
            note: "fern = far (as in English 'far'), sehen = see — television is literally 'far-seeing' too",
          },
        ],
        word_bank: ["Ich", "will", "fernsehen", "Pfirsich", "wollen"],
        explanation: "The modal bracket from topic 2, now carrying your PF- shopping home: will opens, fernsehen closes — far-seeing, like the television English named from Greek.",
      },
    ],
    summary: {
      outcome: "Read PF- words as English p-words and want things out loud in the modal bracket.",
      use_example: { german: "Ein Pfund Pfeffer, bitte.", english: "A pound of pepper, please." },
      takeaway: "Word-initial English p exploded into German pf in native words — Pf- is English p- with the shift receipt attached.",
      curiosity_teaser: "Next: discrimination drills — can you tell which f-words are true p-shifts and which are f impostors like Flug?",
    },
  },
  {
    id: 302,
    slug: "p-to-f-discrimination-drills",
    title: "P→F Discrimination Drills",
    subtitle: "Which f-words are true p-shifts — and which are ancient f impostors?",
    phase: 1,
    shift_categories: ["p_to_pf_f"],
    word_ids: ["hoffen", "helfen", "schlafen", "schiff", "affe", "reif", "scharf", "greifen", "treffen", "stumpf", "pflug", "pflanze", "pfirsich"],
    table_word_ids: ["hoffen", "helfen", "schlafen", "reif", "scharf", "greifen"],
    hook: {
      title: "The F Police",
      content:
        "Not every German f descends from an English p. Most do — hoffen, helfen, Schiff, Affe, reif — but German also has honest, ancient f-words that were never anything else: Flug (flight) and fressen. The skill you build today is the customs check: when you meet a German f-word, ask whether trading its f for a p produces an English word. hoffen → hope? Stamp it through. Flug → 'plug'? No — Flug is native Germanic f, kin to fly and flight, which also start with f.",
      footnotes: [
        {
          marker: "1",
          title: "Two F's, Two Ages",
          content:
            "Proto-Germanic already owned an f (from an even older PIE p — Grimm's Law, thousands of years before the High German Shift). fly/flight/Flug carry that ancient f. The High German Shift (500–700 AD) is a second, younger wave that turned remaining p's into f's and pf's.",
        },
      ],
    },
    pattern: {
      title: "The Customs Check: Swap f for p",
      content:
        "Run the swap test: hoffen → hoppen? hope! helfen → help! schlafen — the schl- cluster hides 'sleep' with p → f: sleep → schlafen. Schiff → skipper's Schiff: ship (and a ship-master is still a skipper in English). Affe → ape. reif → ripe. scharf → sharp. greifen → grip. Now the impostors: Flug (fly/flight), frei (free), Fisch (fish), Feuer (fire) — no p hides inside these; their f is the ancient Germanic one English shares. Impostors are cognates too — just not students of this shift.",
      footnotes: [],
      linguist_note:
        "The swap test has a third outcome: stumpf (stump/blunt) shows final p → pf, and treffen pairs the P→F shift with D → T (English dræpan, 'to strike' — the same root as drape). Mixed-shift words are the exception, not the rule.",
    },
    exercises: [
      {
        id: "l302_e1",
        type: "matching_pairs",
        prompt: "Pass the customs check — match each German f-word to its English p-twin:",
        matching_pairs: [
          { id: "pd1", english: "hope", german: "hoffen" },
          { id: "pd2", english: "help", german: "helfen" },
          { id: "pd3", english: "sharp", german: "scharf" },
          { id: "pd4", english: "grip", german: "greifen" },
          { id: "pd5", english: "plant", german: "Pflanze" },
          { id: "pd6", english: "peach", german: "Pfirsich" },
        ],
        target_answer: "hoffen, helfen, scharf, greifen, Pflanze, Pfirsich",
        meaning: "to hope, to help, sharp, to grip, plant, peach",
        shift_hint: "P → F/FF",
        explanation: "Swapping f for p exposes the English twin hiding in each German word — and Pflanze does the double shift: p → pf up front, t → z at the back.",
      },
      {
        id: "l302_e2",
        type: "shift_select",
        prompt: "German 'Flug' (flight) — is its f a product of the P → F shift?",
        options: [
          "No — Flug is an ancient f-word, kin to English fly and flight",
          "Yes — Flug is 'plug' with the p shifted",
          "Yes — but only in northern Germany",
          "Flug has no English cognate at all",
        ],
        target_answer: "No — Flug is an ancient f-word, kin to English fly and flight",
        meaning: "Not every f is a shifted p — some f's are ancestral",
        explanation: "Flug and flight share the older Germanic f. The p → f shift is a younger wave; it only hit words that still had a p.",
      },
      {
        id: "l302_e3",
        type: "shift_select",
        prompt: "Which German word is the true p-shift twin of English 'sleep'?",
        options: ["schlafen", "schneiden", "schreiben", "schlagen"],
        target_answer: "schlafen",
        meaning: "to sleep (p → f)",
        shift_hint: "P → F",
        explanation: "sleep → schlafen: the sl- cluster became schl- and p became f. The other three verbs have no p inside.",
      },
      {
        id: "l302_e4",
        type: "reverse_cognate",
        prompt: "Swap the f back: what English verb is the twin of 'treffen' (to meet/strike)?",
        english_hint: "d + r + the p-word",
        target_answer: "drape",
        meaning: "to drape / strike (root of treffen)",
        explanation: "treffen is a double-shift word: English dræpan 'to strike' → d → t and p → ff. Modern English kept the root in drape.",
      },
      {
        id: "l302_e5",
        type: "transcribe",
        prompt: "How would you say:",
        idea: "it's late and your friend is still up, so you tell her: I hope you sleep",
        cues: [
          "Who hopes? → ich hoffe (your P → FF verb, working ending and all)",
          "Who sleeps? → du schläfst — schlaf- + the thou-ending -st",
          "Sleep is the p-shift word: English sleep → schlafen, here in its du form",
        ],
        target_answer: "Ich hoffe du schläfst",
        meaning: "I hope you sleep",
        vocab_hints: [
          {
            word: "schläfst",
            translation: "sleep (du form)",
            note: "stem schlaf- + the Shakespearean -st (thou sleepest); the ä is the du-vowel change",
          },
        ],
        word_bank: ["Ich", "hoffe", "du", "schläfst", "schlafen", "hoffst"],
        explanation: "'Ich hoffe' + 'du schläfst' — the p-shift verb takes the ancient thou-ending: thou sleepest → du schläfst.",
      },
    ],
    summary: {
      outcome: "Sort German f-words into true p-shifts and ancestral f cognates on sight.",
      use_example: { german: "Ich hoffe, du schläfst gut.", english: "I hope you sleep well." },
      takeaway: "Swap f for p: if an English word appears, it is the P→F shift at work; if not, the f is an honest ancient one.",
      curiosity_teaser: "Next: the dental hardening up close — thunder-day, bath towns, and why du is really thou.",
    },
  },
  {
    id: 401,
    slug: "donner-bad-and-du",
    title: "Donner, Bad & Du",
    subtitle: "thunder-day, bath towns, and the thou you already speak",
    phase: 1,
    shift_categories: ["th_to_d"],
    word_ids: ["donner", "bad", "du", "danken", "denken", "bruder", "drei", "mund", "kleid", "monat", "darm", "pfirsich", "pflanze"],
    table_word_ids: ["donner", "bad", "du", "danken", "denken", "mund", "kleid", "monat"],
    hook: {
      title: "Thor Kept His Day, Lost His Name",
      content:
        "English named Thursday after the thunder god Thor — Thor's day. German named the same day after the god's weapon: Donner (thunder) + Tag (day) = Donnerstag. Two languages, one god, one shift: his English name kept the TH his German audience hardened into D. And the D's keep coming: Bad (bath) gave Germany its spa towns — Baden-Baden literally says 'bath-bath'. Du is thou — same word, same ancient -st verb ending (thou hast ↔ du hast).",
      footnotes: [
        {
          marker: "1",
          title: "The Reindeer Spell It Out",
          interest: true,
          content:
            "Santa's reindeer 'Donner and Blitzen' are simply Thunder and Lightning — the German words, kept alive in English pop culture since the 1823 poem. Donnerstag means Thunder-day; Blitzen means lightning.",
        },
      ],
    },
    pattern: {
      title: "Culture Words Through the D-Lens",
      content:
        "The TH → D shift is not just body parts and function words — it runs through culture. Thunder → Donner, bath → Bad (the verb is baden, 'to bathe'; final -d is pronounced [t]: Bad sounds like 'baht'), thou → du with thee → dich/dir. And the think/thank pair shines again: danken (to thank) is just 'a good thought' spoken aloud — ich danke dir, I thank thee. Three, drei, counts itself.",
      footnotes: [],
      linguist_note:
        "German weekday names are a cultural fossil map: Donnerstag (Thunder's day) kept Thor's element where English kept Thor's name. Mittwoch replaced Woden with 'mid-week' — the one weekday that broke the god-name pattern entirely.",
    },
    exercises: [
      {
        id: "l401_e1",
        type: "matching_pairs",
        prompt: "Match the words through the TH → D lens — the culture set, plus three everyday arrivals:",
        matching_pairs: [
          { id: "db1", english: "thunder", german: "Donner" },
          { id: "db2", english: "bath", german: "Bad" },
          { id: "db3", english: "thou", german: "du" },
          { id: "db4", english: "to thank", german: "danken" },
          { id: "db5", english: "mouth", german: "Mund" },
          { id: "db6", english: "month", german: "Monat" },
          { id: "db7", english: "gut (archaic: tharm)", german: "Darm" },
        ],
        target_answer: "Donner, Bad, du, danken, Mund, Monat, Darm",
        meaning: "thunder, bath, thou, to thank, mouth, month, gut",
        shift_hint: "TH → D",
        explanation: "Every German d here answers to an English th — including the god of thunder himself. Darm is the old tharm: English moved to 'gut', German kept the hardened th.",
      },
      {
        id: "l401_e2",
        type: "reverse_cognate",
        prompt: "Donnerstag hides two shifted words — which English weekday is its twin?",
        target_answer: "Thursday",
        meaning: "Thursday (Thor's day ↔ Thunder-day)",
        explanation: "English kept the god (Thor), German kept his weapon (Donner). Same day, same god, one shift.",
      },
      {
        id: "l401_e3",
        type: "shift_select",
        prompt: "German 'Bad' is written with a final -d but sounds like 'baht'. Why?",
        options: [
          "German devoices final consonants: written -d is pronounced [t]",
          "The d is silent",
          "It is a spelling mistake in German",
          "The word is French",
        ],
        target_answer: "German devoices final consonants: written -d is pronounced [t]",
        meaning: "Final devoicing: Bad = [baːt]",
        explanation: "Final d hardens to [t] in speech — the same habit that keeps gut and kalt crisp at the end, just as PF- keeps Pfirsich and Pflanze crisp at the start.",
      },
      {
        id: "l401_e4",
        type: "derive",
        prompt: "Complete with the thou-form of haben: 'Du _____ ein Bruder' (thou hast):",
        english_hint: "haben → du + the ancient -st",
        target_answer: "hast",
        meaning: "Du hast = you have (thou hast)",
        explanation: "du hast keeps the same -st ending Early Modern English wrote as -est in 'thou hast'.",
      },
      {
        id: "l401_e5",
        type: "transcribe",
        prompt: "You want to say:",
        idea: "you're at a friend's closet admiring her new dress: I like the dress",
        cues: [
          "Like → ich mag — mögen, the modal that English bent into 'may'",
          "The dress → das Kleid (neuter — the old word behind English 'cloth')",
          "Mag holds position 2; the thing you like rides behind it",
        ],
        target_answer: "Ich mag das Kleid",
        meaning: "I like the dress",
        vocab_hints: [
          {
            word: "das",
            translation: "the (neuter)",
            note: "das Kleid — English 'cloth' is the same word with its th intact; German hardened it to d",
          },
        ],
        word_bank: ["Ich", "mag", "das", "Kleid", "Magst", "Mund"],
        explanation: "ich mag das Kleid — desire again, cloth with a hardened th. Compliment delivered.",
      },
    ],
    summary: {
      outcome: "Use the cultural TH→D words: thunder-day, bath, thou — and say what you like in German.",
      use_example: { german: "Ich mag das Kleid.", english: "I like the dress." },
      takeaway: "German culture words carry the shift: Donner = thunder, Bad = bath, du = thou — and final -d sounds like [t].",
      curiosity_teaser: "Next: cross-shift drills — separate the true TH→D words from the D→T impostors.",
    },
  },
  {
    id: 402,
    slug: "th-to-d-discrimination-drills",
    title: "TH→D Discrimination Drills",
    subtitle: "Which d-words hardened from th — and which are D→T doubles running in reverse?",
    phase: 1,
    shift_categories: ["th_to_d", "d_to_t"],
    word_ids: ["dünn", "dick", "dorn", "daumen", "durst", "ding", "erde", "tür", "tag", "drei", "bad"],
    table_word_ids: ["dünn", "dick", "dorn", "daumen", "durst", "erde"],
    hook: {
      title: "Two D's, Two Directions",
      content:
        "German d comes from two different ancestors. One kind was always English th: thin → dünn, thorn → Dorn, thumb → Daumen, thirst → Durst, thing → Ding. The other kind was English d that German pushed forward to t: door → Tür, day → Tag. So when you meet a German d-word, run both checks: does swapping d for th reveal an English word (Durst → thirst)? Or is the d the original, with the real story hiding in a t somewhere? Direction is the whole game.",
      footnotes: [
        {
          marker: "1",
          title: "The Chain Explains the Crowding",
          content:
            "TH moved onto D's old street (think → denken), so D had to move to T's street (door → Tür). That chain is why both languages can't use the same sounds for the same words — everyone moved house at once.",
        },
      ],
    },
    pattern: {
      title: "Run Both Checks",
      content:
        "Check one — the th-swap: dünn (thin), dick (thick), Dorn (thorn), Daumen (thumb), Durst (thirst), Ding (thing), Erde (earth), drei (three). Check two — the reverse: if the d looks original, look for a t: Tür pairs with door through D → T (the German word kept the ancient vowel but the shift went the other way), Tag with day. Beware the lookalikes: dick does not mean its English sound-alike — it means thick; das Ding means thing, and English kept the Germanic sense in 'the whole thing' and even the old assemblies called 'Things'.",
      footnotes: [],
      linguist_note:
        "Earth → Erde runs the same dental hardening as three → drei; English's th here is the ancient fricative þ, which High German hardened to d while English kept it spelled th into modern times.",
    },
    exercises: [
      {
        id: "l402_e1",
        type: "matching_pairs",
        prompt: "Separate the true TH→D words — match each to its English twin:",
        matching_pairs: [
          { id: "td1", english: "thin", german: "dünn" },
          { id: "td2", english: "thorn", german: "Dorn" },
          { id: "td3", english: "thumb", german: "Daumen" },
          { id: "td4", english: "thirst", german: "Durst" },
        ],
        target_answer: "dünn, Dorn, Daumen, Durst",
        meaning: "thin, thorn, thumb, thirst",
        shift_hint: "TH → D",
        explanation: "Swap the d for th and the English word appears — these are hardened dental fricatives.",
      },
      {
        id: "l402_e2",
        type: "shift_select",
        prompt: "Which shift connects English 'door' and German 'Tür'?",
        options: ["TH → D", "D → T", "T → S", "K → CH"],
        target_answer: "D → T",
        meaning: "door ↔ Tür runs D → T, not TH → D",
        explanation: "Tür's t is the hardened English d — the chain move. The th-swap check fails here; the t tells the real story.",
      },
      {
        id: "l402_e3",
        type: "reverse_cognate",
        prompt: "What English word is the twin of 'Dorn'?",
        target_answer: "thorn",
        meaning: "thorn (twin of German Dorn)",
        explanation: "Dorn hardened the th; the rose's spike is the same Germanic word on both shores.",
      },
      {
        id: "l402_e4",
        type: "derive",
        prompt: "Apply TH → D: English 'earth' → German:",
        english_hint: "er + the hardened th",
        target_answer: "Erde",
        meaning: "die Erde — the earth",
        explanation: "earth → Erde: the ancient þ hardened to d, exactly as in three → drei.",
      },
      {
        id: "l402_e5",
        type: "transcribe",
        prompt: "Put into German:",
        idea: "you're describing a skinny thing to a friend: the thing is thin",
        cues: [
          "Both words carry the shift: thing → Ding, thin → dünn (TH → D, twice in one sentence)",
          "The thing is neuter: das Ding",
          "After ist the adjective stays bare and goes last: das Ding ist dünn",
        ],
        target_answer: "Das Ding ist dünn",
        meaning: "The thing is thin",
        vocab_hints: [
          {
            word: "das",
            translation: "the (neuter)",
            note: "das Ding — neuter, like English 'the thing'",
          },
        ],
        word_bank: ["Das", "Ding", "ist", "dünn", "dick", "Dorn"],
        explanation: "Two TH→D words in one sentence, built from your own thought: das Ding and dünn.",
      },
    ],
    summary: {
      outcome: "Distinguish TH→D words (dünn, Dorn, Durst) from D→T reverses (Tür, Tag) and use both in sentences.",
      use_example: { german: "Das Ding ist dünn.", english: "The thing is thin." },
      takeaway: "German d has two ancestors: swap d for th to find one kind, look for the t to catch the other.",
      curiosity_teaser: "Next: the sibilant shift from the other side — t becomes s, ss and z: water becomes Wasser, two becomes zwei.",
    },
  },
  {
    id: 501,
    slug: "tw-to-zw-openers",
    title: "tw → zw Openers",
    subtitle: "two → zwei, twin → Zwilling, dwarf → Zwerg — the /ts/ costume party",
    phase: 1,
    shift_categories: ["t_to_s_ss_z"],
    word_ids: ["zwei", "zwilling", "zwerg", "zweimal", "zwanzig", "zu", "wasser", "zunge", "mund", "kleid", "monat", "darm", "pflanze"],
    table_word_ids: ["zwei", "zwilling", "zwerg", "zweimal", "zwanzig"],
    hook: {
      title: "The Twins You Already Speak",
      content:
        "English has been dressing words in tw- for thousands of years: two, twin, twelve, twenty, twine, between. German took the same cluster and put it in a /ts/ costume: zw-. Two is zwei, twin is Zwilling (the -ling is the suffix of duckling and sapling), dwarf is Zwerg — yes, dwarf and Zwerg are the same ancient word, and neither language was willing to give it up. The German letter z is not an English z: it is always /ts/, the sharp double-sound at the end of 'cats'.",
      footnotes: [
        {
          marker: "1",
          title: "Dwarf's Long Journey",
          content:
            "Zwerg descends from Proto-Germanic *dwergaz — the very cluster English kept as dw- in dwarf. High German hardened dw- into tw- and then zw-. So the fairy-tale Zwerg and Tolkien's dwarves are one people with one word, spelled two ways.",
        },
      ],
    },
    pattern: {
      title: "The zw- Family and the /ts/ Sound",
      content:
        "zwei (two), zweimal (twice — literally 'two times', where Mal is the same word as English meal, the one hiding in piecemeal), zwanzig (twenty — the -zig is English's -ty, as in six-ty), Zwilling (twin), Zwerg (dwarf). The pronunciation rule is absolute: German z is /ts/, a t and an s said together. Two examples from the last lesson: zu (to) and zwei (two) both begin with the 'cats' sound. English twice keeps the t where German zweimal keeps both.",
      footnotes: [],
      linguist_note:
        "The affricate z [ts] is the word-initial outcome of the sibilant shift: ancient t broke into a t+s pair at the front of words, while after vowels it smoothed into s, ss, or ß (Wasser, groß, heiß).",
    },
    exercises: [
      {
        id: "l501_e1",
        type: "morpheme_tiles",
        prompt: "Assemble the German word for 'twice' (two + times):",
        tile_options: ["zwei", "mal", "zig", "zwei", "st"],
        target_answer: "zweimal",
        meaning: "twice",
        shift_hint: "TW → ZW",
        explanation: "zwei (two) + Mal (time — the word in piecemeal) = zweimal.",
      },
      {
        id: "l501_e2",
        type: "matching_pairs",
        prompt: "Match each English word with its German twin — the zw- family, plus four guests from your TH → D and PF- shelves:",
        matching_pairs: [
          { id: "zt1", english: "two", german: "zwei" },
          { id: "zt2", english: "twin", german: "Zwilling" },
          { id: "zt3", english: "dwarf", german: "Zwerg" },
          { id: "zt4", english: "twenty", german: "zwanzig" },
          { id: "zt5", english: "tongue", german: "Zunge" },
          { id: "zt6", english: "dress", german: "Kleid" },
          { id: "zt7", english: "month", german: "Monat" },
          { id: "zt8", english: "gut", german: "Darm" },
          { id: "zt9", english: "plant", german: "Pflanze" },
        ],
        target_answer: "zwei, Zwilling, Zwerg, zwanzig, Zunge, Kleid, Monat, Darm, Pflanze",
        meaning: "two, twin, dwarf, twenty, tongue, dress, month, gut, plant",
        shift_hint: "TW → ZW",
        explanation: "Every English tw- maps onto German zw- in the native word stock — even dwarf/Zwerg. And tongue joins them: t → z turned tongue into Zunge, while Kleid, Monat and Darm carry their TH → D badges from the last topic.",
      },
      {
        id: "l501_e3",
        type: "shift_select",
        prompt: "How is German 'z' always pronounced?",
        options: ["/ts/ — like the end of 'cats'", "/z/ — like 'zoo'", "/k/ — like 'kind'", "It is silent"],
        target_answer: "/ts/ — like the end of 'cats'",
        meaning: "German z = the affricate [ts]",
        explanation: "The sibilant shift broke initial t into t+s. Zwei, zu, zwanzig — all begin with the 'cats' sound.",
      },
      {
        id: "l501_e4",
        type: "reverse_cognate",
        prompt: "What English fairy-tale word is the twin of 'Zwerg'?",
        target_answer: "dwarf",
        meaning: "dwarf (twin of German Zwerg)",
        explanation: "Both descend from *dwergaz — German hardened dw- to zw-, English kept the cluster.",
      },
      {
        id: "l501_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'Two tongues and one mouth'",
        target_answer: "Zwei Zungen und ein Mund",
        meaning: "Two tongues and one mouth",
        vocab_hints: [
          {
            word: "ein",
            translation: "one / a",
            note: "ein Mund — the same little word as English 'an', both from the ancient 'one'",
          },
        ],
        word_bank: ["Zwei", "Zungen", "und", "ein", "Mund", "Monat", "Zunge"],
        explanation: "Zunge pluralizes to Zungen, und joins the two — and German measure nouns stay singular after numbers: zwei Glas Wasser, no plural -s on Glas.",
      },
    ],
    summary: {
      outcome: "Read German zw- as English tw- and pronounce z as /ts/ in counting and ordering.",
      use_example: { german: "Zwei Glas Wasser, bitte.", english: "Two glasses of water, please." },
      takeaway: "English tw- wears the /ts/ costume in German: zwei, Zwilling, Zwerg, zweimal, zwanzig.",
      curiosity_teaser: "Next: the sharp S — when German writes ß instead of ss, and the letter English deleted.",
    },
  },
  {
    id: 502,
    slug: "eszett-and-the-sharp-s",
    title: "Eszett & the Sharp S",
    subtitle: "groß, Straße, muss — the T→SS story you can now read letter by letter",
    phase: 1,
    shift_categories: ["t_to_s_ss_z"],
    word_ids: ["groß", "straße", "heiß", "fuß", "müssen", "besser", "wasser", "salz", "süß", "zunge", "mund", "kleid", "monat", "darm"],
    table_word_ids: ["groß", "straße", "heiß", "fuß", "müssen"],
    hook: {
      title: "The Letter English Deleted",
      content:
        "That letter that looks like a strange B — ß — is not a B at all. Germans call it Eszett: 'S-z'. It is a sharp S, and it exists because of the shift you already know. When an ancient t hissed into s after a long vowel, German wrote the hiss as ß: groß (great), heiß (hot), Fuß (foot), Straße (street). After a short vowel, the same hiss is written double-s: Wasser, besser, muss. English deleted its sharp s centuries ago and let the plain s do both jobs — German kept the specialist.",
      footnotes: [
        {
          marker: "1",
          title: "The Country That Abolished It",
          content:
            "Switzerland stopped using ß in the 1930s and writes ss everywhere. So 'ss' and 'ß' are pure spelling tradition — the sound is the same sharp [s]. Austria and Germany kept the long/short distinction.",
        },
      ],
    },
    pattern: {
      title: "The Sharp-S Spelling Compass",
      content:
        "Long vowel or diphthong → ß: groß, heiß, Fuß, Straße, weiß (white — the same word as wise: ich weiß, I know, is 'I am wise'). Short vowel → ss: Wasser, besser, muss, muss's du-form musst. The shift underneath never changes: water → Wasser (t → ss), better → besser (tt → ss), foot → Fuß (t → ß). Ordering drinks now needs no new words: ein Glas Wasser, and when it is too hot, zu heiß. Salt, Salz, is the t → z twin of English salt — one more member of the same sibilant family.",
      footnotes: [],
      linguist_note:
        "Straße carries the full Roman history: Latin via strata ('paved road') gave English street (keeping Latin t) and German Straße (shifting t to ß). The same road produced both words on two sides of the Rhine.",
    },
    exercises: [
      {
        id: "l502_e1",
        type: "matching_pairs",
        prompt: "Match the English t-words with their sharp-s German twins:",
        matching_pairs: [
          { id: "es1", english: "great", german: "groß" },
          { id: "es2", english: "hot", german: "heiß" },
          { id: "es3", english: "foot", german: "Fuß" },
          { id: "es4", english: "street", german: "Straße" },
          { id: "es5", english: "sweet", german: "süß" },
          { id: "es6", english: "tongue", german: "Zunge" },
        ],
        target_answer: "groß, heiß, Fuß, Straße, süß, Zunge",
        meaning: "great/big, hot, foot, street, sweet, tongue",
        shift_hint: "T → ß",
        explanation: "Each ß marks where an ancient t hissed into a sharp s after a long vowel — and Zunge shows the sibling outcome: t → z, the /ts/ costume.",
      },
      {
        id: "l502_e2",
        type: "shift_select",
        prompt: "When does German write ß instead of ss?",
        options: [
          "After long vowels and diphthongs",
          "At the start of words",
          "After the letter z",
          "Only in Switzerland",
        ],
        target_answer: "After long vowels and diphthongs",
        meaning: "Long vowel → ß; short vowel → ss",
        explanation: "groß, heiß, Fuß (long) versus Wasser, muss (short). The sound is the same; the spelling tracks the vowel. Run your shelf while you're here — der Mund and der Darm from topic 4, der Monat too: none of them needs a new sound, only the flags you already collected.",
      },
      {
        id: "l502_e3",
        type: "reverse_cognate",
        prompt: "Which English adjective (as in 'a gross error') is the twin of 'groß'?",
        target_answer: "gross",
        meaning: "gross — large/total (twin of German groß)",
        explanation: "English gross kept the old sense 'big, total' in gross income and a gross error — no yuck factor involved.",
      },
      {
        id: "l502_e4",
        type: "derive",
        prompt: "Conjugate: 'Ich muss, du _____' (the sharp double-s du-form):",
        english_hint: "muss + st",
        target_answer: "musst",
        meaning: "du musst = you must",
        explanation: "Short vowel, so the spelling doubles the s: musst. The sound never changed.",
      },
      {
        id: "l502_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'The dress is too big'",
        target_answer: "Das Kleid ist zu groß",
        meaning: "The dress is too big",
        vocab_hints: [
          {
            word: "das",
            translation: "the (neuter)",
            note: "das Kleid — the dress you met through its hardened th",
          },
        ],
        word_bank: ["Das", "Kleid", "ist", "zu", "groß", "Mund"],
        explanation: "zu does double duty — 'to' and 'too' — and groß wears the sharp S of its ancient t, the word English kept as gross.",
      },
    ],
    summary: {
      outcome: "Read ß as a shifted t, spell musst correctly, and complain about clothes and drinks.",
      use_example: { german: "Das Kleid ist zu groß.", english: "The dress is too big." },
      takeaway: "ß is the written receipt of T→SS after long vowels; after short vowels German writes ss.",
      curiosity_teaser: "Next: the Velar Shift — how English make melted into machen and book into Buch.",
    },
    twist: {
      prompt: "Same dress, different verdict: it isn't too big after all. Negate it.",
      target_answer: "Das Kleid ist nicht zu groß",
      word_bank: ["Das", "Kleid", "ist", "nicht", "zu", "groß", "heiß"],
      explanation: "nicht slides in before the phrase it cancels — here the whole zu groß. ist holds position 2 either way.",
    },
  },
  {
    id: 601,
    slug: "kitchen-and-book-set",
    title: "Kitchen & Book Set",
    subtitle: "Küche, Buch, Milch, suchen, sprechen — and the seek/beseech proof",
    phase: 1,
    shift_categories: ["k_to_ch"],
    word_ids: ["küche", "buch", "milch", "suchen", "sprechen", "kochen", "woche", "machen", "knochen", "riechen", "koch", "weich", "zunge", "süß"],
    table_word_ids: ["küche", "buch", "milch", "suchen", "sprechen", "kochen"],
    hook: {
      title: "English Did It Too — Twice",
      content:
        "English will swear it never softened a k into a ch. Then you catch it in the act — inside its own noun-verb pairs. Seek became beseech (and German says suchen). Speak became speech (and German says sprechen). English performed the velar shift exactly once per pair, keeping the k-version as the everyday verb and the ch-version as the fancy one. German performed it everywhere: Küche (kitchen), Buch (book), Milch (milk), Koch (cook). Your kitchen is a museum of both outcomes.",
      footnotes: [
        {
          marker: "1",
          title: "Kirk and Kirche",
          content:
            "Both English kirk (still the word for 'church' in Scotland) and German Kirche descend from Greek kyriakon ('the Lord's house'). Scottish English kept the k; German melted it to ch — the same word on two sides of one shift.",
        },
      ],
    },
    pattern: {
      title: "The Household CH Set",
      content:
        "cook → kochen, kitchen → Küche, book → Buch, milk → Milch, week → Woche, seek → suchen, speak → sprechen, break → brechen. The vowel compass still steers the sound: after back vowels the throat growls (kochen, Buch, Woche — Ach-Laut), after front vowels and l it whispers (Küche, Milch, sprechen — Ich-Laut). English even kept the whisper: the ch of speech and beseech is the same soft sound German writes in sprechen and suchen.",
      footnotes: [],
      linguist_note:
        "Buch and book both lengthened their vowel and lost the k in German only: book's k stayed because English never ran the shift; Buch's k became the Ach-Laut [x] after the back vowel u.",
    },
    exercises: [
      {
        id: "l601_e1",
        type: "matching_pairs",
        prompt: "Match the household words through the K → CH lens:",
        matching_pairs: [
          { id: "kb1", english: "milk", german: "Milch" },
          { id: "kb2", english: "book", german: "Buch" },
          { id: "kb3", english: "to seek", german: "suchen" },
          { id: "kb4", english: "to speak", german: "sprechen" },
          { id: "kb5", english: "bone (twin: knuckle)", german: "Knochen" },
          { id: "kb6", english: "to smell", german: "riechen" },
          { id: "kb7", english: "cook (the person)", german: "Koch" },
        ],
        target_answer: "Milch, Buch, suchen, sprechen, Knochen, riechen, Koch",
        meaning: "milk, book, to seek, to speak, bone, to smell, cook",
        shift_hint: "K → CH",
        explanation: "English softened the k in beseech and speech; German softened it in every one of these words — the cook's own title, Koch, wears the shift on its face.",
      },
      {
        id: "l601_e2",
        type: "shift_select",
        prompt: "Why does 'Buch' growl (Ach-Laut) but 'Milch' whispers (Ich-Laut)?",
        options: [
          "The vowel decides: back vowel u → Ach-Laut, front vowel i → Ich-Laut",
          "Buch is older than Milch",
          "Milch is a French loanword",
          "The two sounds are interchangeable",
        ],
        target_answer: "The vowel decides: back vowel u → Ach-Laut, front vowel i → Ich-Laut",
        meaning: "The vowel compass of the German ch",
        explanation: "a, o, u pull the tongue back (Buch, kochen, Woche); e, i, ä, ö, ü and l/r whisper forward (Milch, sprechen, Küche) — weich whispers too: k went soft, and the word for soft went with it.",
      },
      {
        id: "l601_e3",
        type: "derive",
        prompt: "Apply the shift: English 'week' → German:",
        english_hint: "week → w + ech",
        shift_hint: "K → CH",
        target_answer: "Woche",
        meaning: "die Woche — the week",
        explanation: "week → Woche: k softened to ch after the back vowel o (with the usual vowel alignment).",
      },
      {
        id: "l601_e4",
        type: "reverse_cognate",
        prompt: "What English verb pair proves English also ran k → ch — seek became...?",
        target_answer: "beseech",
        meaning: "beseech (the ch-form of seek)",
        explanation: "seek/beseech is English's own k→ch pair — and beseech's vowel matches suchen exactly.",
      },
      {
        id: "l601_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'The tongue finds the cake sweet'",
        target_answer: "Die Zunge findet den Kuchen süß",
        meaning: "The tongue finds the cake sweet",
        vocab_hints: [
          {
            word: "den",
            translation: "the (masculine object)",
            note: "der Kuchen becomes den Kuchen when it is what's found — the him-case you will meet properly soon",
          },
        ],
        word_bank: ["Die", "Zunge", "findet", "den", "Kuchen", "süß", "Küche"],
        explanation: "finden takes the object straight on: die Zunge findet den Kuchen süß — the tongue renders its verdict, and every ch in the kitchen whispers.",
      },
    ],
    summary: {
      outcome: "Use the household CH set in a real sentence and steer Ach- vs Ich-Laut by vowel.",
      use_example: { german: "Die Zunge findet den Kuchen süß.", english: "The tongue finds the cake sweet." },
      takeaway: "Küche, Buch, Milch, suchen, sprechen — the kitchen set proves the velar shift, and English's seek/beseech proves English ran it too.",
      curiosity_teaser: "Next: K→CH discrimination — predict the ch-sound of unseen words and catch the k-impostors.",
    },
  },
  {
    id: 602,
    slug: "k-to-ch-discrimination-drills",
    title: "K→CH Discrimination Drills",
    subtitle: "Predict the ch-sound, derive unseen forms, and catch the k-impostors",
    phase: 1,
    shift_categories: ["k_to_ch"],
    word_ids: ["machen", "kochen", "brechen", "sprechen", "suchen", "buch", "milch", "woche", "kirche", "rauch", "acht", "recht", "kauen", "knochen", "riechen", "koch", "weich", "süß"],
    table_word_ids: ["kirche", "rauch", "acht", "recht", "brechen", "machen"],
    hook: {
      title: "The Compass, Then the Impostors",
      content:
        "Two skills today. First, prediction: given any German ch-word, place its sound on the vowel compass — back vowel growls, front vowel whispers — before you ever hear it. Second, suspicion: not every German k is waiting to become a ch. Kirche (church), Rauch (smoke), acht (eight), Recht (right) already finished their journey — their ch hides English gh-words (kirk's cousin, reek, eight, right). And Latin loans like Kaffee and Kamera kept their hard k forever. The compass points at sounds; the impostor check points at history.",
      footnotes: [
        {
          marker: "1",
          title: "The gh-Sisterhood",
          content:
            "acht/Recht/Nacht/Licht carry English eight/right/night/light — words where English spelled the gh and then stopped pronouncing it. German never stopped. When English speakers 'lost' the gh, they were only finishing a shift German had already made audible.",
        },
      ],
    },
    pattern: {
      title: "Derive, Then Verify",
      content:
        "Derivation drill: make → machen (Ach), cook → kochen (Ach), break → brechen (Ich — front vowel e), book → Buch (Ach), milk → Milch (Ich via l). Impostor check: Kaffee, Kamera, Kind — hard k stays (Latin loans, or k in a safe position). And the finished-shift words: Kirche (church/kirk), Rauch (reek/smoke), acht (eight), recht (right) — their ch is the ghost of an English gh. One root, three costumes: k, ch, and silent gh.",
      footnotes: [],
      linguist_note:
        "The compass has one refinement: ch after consonants l and r takes the Ich-Laut even after back vowels (Milch, Kirche) — the consonant pulls the tongue forward with it.",
    },
    exercises: [
      {
        id: "l602_e1",
        type: "shift_select",
        prompt: "Predict the sound: how does the 'ch' of 'brechen' sound?",
        options: [
          "Ich-Laut [ç] — a soft whisper after the front vowel e",
          "Ach-Laut [x] — a throaty growl after a back vowel",
          "Like k",
          "Silent, like English gh",
        ],
        target_answer: "Ich-Laut [ç] — a soft whisper after the front vowel e",
        meaning: "brechen uses the Ich-Laut",
        explanation: "Front vowel e pulls the tongue forward: brechen, sprechen, Milch, riechen all whisper — and weich too, its k gone soft with the word for soft.",
      },
      {
        id: "l602_e2",
        type: "matching_pairs",
        prompt: "Match the ch-words with their English twins — the silent-gh set, plus two K → CH cousins:",
        matching_pairs: [
          { id: "kd1", english: "eight", german: "acht" },
          { id: "kd2", english: "right", german: "Recht" },
          { id: "kd3", english: "reek / smoke", german: "Rauch" },
          { id: "kd4", english: "kirk / church", german: "Kirche" },
          { id: "kd5", english: "to chew", german: "kauen" },
          { id: "kd6", english: "bone", german: "Knochen" },
        ],
        target_answer: "acht, Recht, Rauch, Kirche, kauen, Knochen",
        meaning: "eight, right, smoke, church, to chew, bone",
        shift_hint: "K → CH / gh → ch",
        explanation: "English spelled the guttural gh and silenced it; German spells it ch and still sounds it. kauen is the mirror image: English chew shifted k to ch, German kept the k — the reverse of kirk/Kirche.",
      },
      {
        id: "l602_e3",
        type: "shift_select",
        prompt: "Which of these German k-words will NEVER become a ch — and why?",
        options: [
          "Kaffee — Latin loans kept their hard k",
          "Koch — the shift skips cook-words",
          "Küche — ch words reject k",
          "Kind — children's words are protected",
        ],
        target_answer: "Kaffee — Latin loans kept their hard k",
        meaning: "Loanwords escape the shift",
        explanation: "The shift only hit native Germanic words standing in Germany around 500 AD. Kaffee arrived centuries later, k intact.",
      },
      {
        id: "l602_e4",
        type: "derive",
        prompt: "Derive unseen: English 'break' → German verb (mind the front vowel):",
        english_hint: "bre + the whispering ch + en",
        shift_hint: "K → CH (Ich-Laut)",
        target_answer: "brechen",
        meaning: "to break",
        explanation: "break → brechen: k → Ich-Laut [ç] after front vowel e (the vowel also widened to ei in the English twin).",
      },
      {
        id: "l602_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'The cook finds the cake sweet'",
        target_answer: "Der Koch findet den Kuchen süß",
        meaning: "The cook finds the cake sweet",
        vocab_hints: [
          {
            word: "den",
            translation: "the (masculine object)",
            note: "der Kuchen becomes den Kuchen as the thing found — the him-case arrives properly soon",
          },
        ],
        word_bank: ["Der", "Koch", "findet", "den", "Kuchen", "süß", "Küche"],
        explanation: "The cook renders his verdict: der Koch findet den Kuchen süß — k softened to ch in his title, and süß keeps its ß from the sibilant shift.",
      },
    ],
    summary: {
      outcome: "Predict Ach- vs Ich-Laut for any ch-word and identify k-impostors and finished gh-shifts.",
      use_example: { german: "Der Koch findet den Kuchen süß.", english: "The cook finds the cake sweet." },
      takeaway: "The vowel steers the ch-sound; loanwords keep k; and Kirche, Rauch, acht, Recht are English gh-words still sounding their ghost.",
      curiosity_teaser: "Next: the stop shift (D → T) — the consonant domino: day becomes Tag, drink becomes trinken.",
    },
  },
  {
    id: 701,
    slug: "double-shift-detectives",
    title: "Double-Shift Detectives",
    subtitle: "deep → tief, daughter → Tochter — words that needed two rules at once",
    phase: 1,
    shift_categories: ["d_to_t", "p_to_pf_f", "y_gh_to_g_ch"],
    word_ids: ["tief", "tochter", "tropfen", "dampf", "dach", "tot", "tod", "tausend", "teufel", "kauen"],
    table_word_ids: ["tief", "tochter", "tropfen", "dampf", "dach", "tausend"],
    hook: {
      title: "When Two Rules Share One Word",
      content:
        "Some words could not decide which shift to attend, so they went to both. Deep carried a d AND a p: High German hardened the d to t and breathed the p into f — deep → tief. Daughter carried d and a guttural gh: d → t, gh → ch — daughter → Tochter. Drop became Tropfen, damp became Dampf, and thatch became Dach. These double-shift words look the most foreign and are actually the most rule-abiding: every letter changed according to a law you already know.",
      footnotes: [
        {
          marker: "1",
          title: "Dead → tot: The Same Rule Twice",
          content:
            "English 'dead' has two d's, and German shifted both: tot. The noun Tod (death) pairs d → t with th → d — death's th arrived by a different route but landed on the same street. One word, two autopsies.",
        },
      ],
    },
    pattern: {
      title: "Stack the Rules, Read the Word",
      content:
        "Read a double-shift word rule by rule. tief: t (from d) + ie (long vowel) + f (from p) = deep. Tochter: T (d) + och (gh) + ter = daughter. Tropfen: T + ropp... p → pf = drop. Dampf: D → T, p → pf = damp. Dach: th → d, t → ch = thatch (a roof's thatch and a Dach are the same word wearing two spelling systems). Tausend: th → t AND d → t — thousand. The devil is in there too: Teufel shifted its d the same way as devil's cousins.",
      footnotes: [],
      linguist_note:
        "Double shifts are your proof that the shift laws are systematic, not coincidences. Wherever two shiftable consonants co-occur, both shift — tief, Tochter, Tropfen, Dampf, Dach, tausend all obey two laws simultaneously.",
    },
    exercises: [
      {
        id: "l701_e1",
        type: "matching_pairs",
        prompt: "Match the double-shift words with their English twins:",
        matching_pairs: [
          { id: "ds1", english: "deep", german: "tief" },
          { id: "ds2", english: "daughter", german: "Tochter" },
          { id: "ds3", english: "drop", german: "Tropfen" },
          { id: "ds4", english: "damp", german: "Dampf" },
          { id: "ds5", english: "roof / thatch", german: "Dach" },
          { id: "ds6", english: "devil", german: "Teufel" },
          { id: "ds7", english: "thousand", german: "Tausend" },
        ],
        target_answer: "tief, Tochter, Tropfen, Dampf, Dach, Teufel, Tausend",
        meaning: "deep, daughter, drop, damp, roof, devil, thousand",
        shift_hint: "D → T + P → F / GH → CH",
        explanation: "Each German word obeyed two shift laws at once — read it rule by rule, devil and thousand included.",
      },
      {
        id: "l701_e2",
        type: "shift_select",
        prompt: "Which two shifts turn English 'deep' into German 'tief'?",
        options: [
          "D → T and P → F",
          "TH → D and K → CH",
          "T → S and V → B",
          "P → PF and Y → G",
        ],
        target_answer: "D → T and P → F",
        meaning: "deep ↔ tief (double shift)",
        explanation: "Initial d hardened to t, and post-vocalic p breathed into f: d-eep → t-ie-f.",
      },
      {
        id: "l701_e3",
        type: "derive",
        prompt: "Derive the mirror: English 'chew' → German (German kept the k English shifted!):",
        english_hint: "ch ↔ k — English ran the velar shift here, German never did",
        target_answer: "kauen",
        meaning: "to chew",
        explanation: "chew → kauen: English hardened its k into ch (as in speech/beseech), German kept the ancient k. The mirror image of kirk ↔ Kirche — direction is the whole game.",
      },
      {
        id: "l701_e4",
        type: "reverse_cognate",
        prompt: "What English word is the twin of 'tot' (and of its noun Tod)?",
        target_answer: "dead",
        meaning: "dead (twin of German tot)",
        explanation: "dead → tot: both d's hardened to t. Death/Tod run the same story with th → d added.",
      },
      {
        id: "l701_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'My daughter drinks cold water'",
        target_answer: "Meine Tochter trinkt kaltes Wasser",
        meaning: "My daughter drinks cold water",
        vocab_hints: [
          {
            word: "Meine",
            translation: "my",
            note: "mein ↔ mine (KJV: 'mine eyes'); -e appears because Tochter is feminine",
          },
          {
            word: "kaltes",
            translation: "cold",
            note: "kalt gains -es before the neuter das Wasser",
          },
        ],
        word_bank: ["Meine", "Tochter", "trinkt", "kaltes", "Wasser"],
        explanation: "Tochter is a double-shift word, trinken a D→T word, kalt a final-d word — one sentence, three shift histories.",
      },
    ],
    summary: {
      outcome: "Decode double-shift words rule by rule and use them in full sentences.",
      use_example: { german: "Meine Tochter trinkt kaltes Wasser.", english: "My daughter drinks cold water." },
      takeaway: "When two shiftable consonants share a word, both shift: tief, Tochter, Tropfen, Dampf, Dach, tausend.",
      curiosity_teaser: "Next: the full discrimination gauntlet — all five shifts, both directions, mixed at speed.",
    },
  },
  {
    id: 702,
    slug: "d-to-t-discrimination-drills",
    title: "D→T Discrimination Drills",
    subtitle: "The five-shift gauntlet: which rule, which direction, at full speed",
    phase: 1,
    shift_categories: ["d_to_t"],
    word_ids: ["tag", "tür", "trinken", "garten", "kalt", "gut", "wort", "traum", "tisch", "tief", "tochter", "knochen", "riechen", "koch", "weich", "kauen"],
    table_word_ids: ["tag", "tür", "wort", "traum", "tisch", "garten"],
    hook: {
      title: "The Gauntlet",
      content:
        "You now own all five great shifts — P→F, TH→D, T→S, K→CH, D→T — plus the double-shift rule. Today is the gauntlet: mixed words, both directions, no labels. German Tag meets English day through TWO shifts at once (d → t and y → g). German Tisch meets English dish through a Latin detour. The words are all old friends; the game is naming the machinery instantly, the way a musician names a chord without counting the notes.",
      footnotes: [
        {
          marker: "1",
          title: "Tag's Double Life",
          content:
            "Tag hides two shifts: the d of day hardened to t, and the ancient g that English wore down to y (day, way, say) still growls at the end of Tag. English vocalized the g; German kept it audible.",
        },
      ],
    },
    pattern: {
      title: "Name That Shift",
      content:
        "Mixed deck, rapid fire: day → Tag (D→T + Y→G), door → Tür (D→T), drink → trinken (D→T), garden/yard → Garten (medial D→T), cold → kalt (final D→T), good → gut (final D→T), word → Wort (final D→T), dream → Traum (D→T), dish/board → Tisch (the Latin discus detour: English dish kept d, German hardened to t). Now reverse it: every German t-word you meet, test d first — Tod/dead, tief/deep, Tochter/daughter, Traum/dream, trinken/drink.",
      footnotes: [],
      linguist_note:
        "Direction matters: German d usually answers to English th (TH→D), while English d answers to German t (D→T). When both languages show the same consonant (Hand, Arm, Wasser-era words aside), the word simply sat in a safe seat.",
    },
    exercises: [
      {
        id: "l702_e1",
        type: "matching_pairs",
        prompt: "The gauntlet, round one — match at speed (the last one runs a different shift — spot it):",
        matching_pairs: [
          { id: "gd1", english: "word", german: "Wort" },
          { id: "gd2", english: "dream", german: "Traum" },
          { id: "gd3", english: "yard / garden", german: "Garten" },
          { id: "gd4", english: "dish / table", german: "Tisch" },
          { id: "gd5", english: "bone", german: "Knochen" },
        ],
        target_answer: "Wort, Traum, Garten, Tisch, Knochen",
        meaning: "word, dream, garden, table/dish",
        shift_hint: "D → T (mixed)",
        explanation: "Final, initial, and medial d all hardened to t — and Tisch took the Latin discus detour.",
      },
      {
        id: "l702_e2",
        type: "shift_select",
        prompt: "English 'day' and German 'Tag' — how many shifts separate them?",
        options: [
          "Two: D → T and Y → G",
          "One: D → T",
          "None — they are identical",
          "Three: D → T, T → S, K → CH",
        ],
        target_answer: "Two: D → T and Y → G",
        meaning: "day ↔ Tag (double shift)",
        explanation: "The d hardened to t, and the ancient g that English vocalized to y still sounds at the end of Tag.",
      },
      {
        id: "l702_e3",
        type: "shift_select",
        prompt: "You meet the German word 'riechen'. Which test finds its English twin fastest?",
        options: [
          "Swap ch back to k: the k → CH shelf — riechen is 'reek' (to smell)",
          "Swap t for d: driechen → dream",
          "Drop the -en: riech → rich",
          "Look for a French loan",
        ],
        target_answer: "Swap ch back to k: the k → CH shelf — riechen is 'reek' (to smell)",
        meaning: "Direction check: riechen runs K → CH, not D → T",
        explanation: "The swap test runs in both directions: Wort wants t → d, but riechen wants ch → k — reek's smoke ran the kitchen shift, and Koch, weich and kauen rode the same shelf.",
      },
      {
        id: "l702_e4",
        type: "reverse_cognate",
        prompt: "What English word is the twin of 'Wort'?",
        target_answer: "word",
        meaning: "word (final d → t)",
        explanation: "word → Wort: the final d hardened to t. English kept the soft d; German closed it.",
      },
      {
        id: "l702_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'The dream is deep'",
        target_answer: "Der Traum ist tief",
        meaning: "The dream is deep",
        vocab_hints: [
          {
            word: "der",
            translation: "the (masculine)",
            note: "der Traum — masculine, like English 'the dream'",
          },
        ],
        word_bank: ["Der", "Traum", "ist", "tief"],
        explanation: "Two t-words, two stories: Traum is a D→T word, tief a D→T + P→F double — both answering to English d and p.",
      },
    ],
    summary: {
      outcome: "Run all five shifts in both directions at speed, including double shifts.",
      use_example: { german: "Der Traum ist tief.", english: "The dream is deep." },
      takeaway: "German t? Test English d. German d? Test English th. Every letter is a receipt of one specific law.",
      curiosity_teaser: "Next: the Latin Bridge — how French courtly culture handed you 500 German verbs ending in -ieren.",
    },
  },
  {
    id: 801,
    slug: "ieren-verb-builder",
    title: "-ieren Verb Builder",
    subtitle: "-ate, -ize, -ify → -ieren: the factory that turns English verbs into German",
    phase: 1,
    shift_categories: ["latin_ieren"],
    word_ids: ["studieren", "organisieren", "reparieren", "funktionieren", "kapieren", "akzeptieren", "informieren", "reservieren", "kopieren", "produzieren", "korrigieren", "reduzieren", "aktivieren", "argumentieren", "existieren", "fotografieren"],
    table_word_ids: ["kopieren", "produzieren", "korrigieren", "reduzieren", "aktivieren", "informieren"],
    hook: {
      title: "The Verb Factory",
      content:
        "English borrowed its intellectual verbs from Latin and French — analyze, organize, copy, produce. German borrowed the exact same loans, then stamped one native suffix on them: -ieren. Because both languages took the same Latin parts, every English -ate/-ize verb you own already exists in German with a German ending. This lesson is the assembly manual: copy → kopieren, produce → produzieren, correct → korrigieren, reduce → reduzieren, activate → aktivieren. You are not learning 500 verbs. You are learning one stamp.",
      footnotes: [
        {
          marker: "1",
          title: "The z You Can Hear",
          content:
            "Watch -ize verbs: the z of English -ize becomes German s before -ieren (organize → organisieren, realize → realisieren). And -ify verbs grow a full -ifizieren: identify → identifizieren, verify → verifizieren. The Latin soft c [ts] lives inside both.",
        },
      ],
    },
    pattern: {
      title: "Three Formulas, Five Hundred Verbs",
      content:
        "Formula one — -ate → -ieren: reserve → reservieren, activate → aktivieren, inform → informieren (and argue → argumentieren — the -ate vanished into the stamp). Formula two — -ize → -isieren: organize → organisieren. But watch the -ce words: produce keeps its z — produzieren, reduce → reduzieren. Formula three — -ify → -ifizieren: identify → identifizieren. The one iron rule: stress lands on the -IE- (stu-DIE-ren, ko-PIE-ren) and never moves, no matter how long the verb gets.",
      footnotes: [],
      linguist_note:
        "The stress rule is why -ieren verbs reject ge- (next lesson) and why you can always hear a -ieren verb in fast speech: the long German [iː] of -IE- rings out like a bell in every sentence.",
    },
    exercises: [
      {
        id: "l801_e1",
        type: "morpheme_tiles",
        prompt: "Assemble the German verb for 'to organize' (Latin stem + the stamp):",
        tile_options: ["organis", "ieren", "ge", "en", "stud"],
        target_answer: "organisieren",
        meaning: "to organize",
        shift_hint: "-ize → -isieren",
        explanation: "The -ize becomes -is-: organis- + -ieren = organisieren. No ge- belongs on a -ieren verb.",
      },
      {
        id: "l801_e2",
        type: "matching_pairs",
        prompt: "Run the stamp over the Latin loans:",
        matching_pairs: [
          { id: "vb1", english: "to copy", german: "kopieren" },
          { id: "vb2", english: "to produce", german: "produzieren" },
          { id: "vb3", english: "to correct", german: "korrigieren" },
          { id: "vb4", english: "to reduce", german: "reduzieren" },
          { id: "vb5", english: "to photograph", german: "fotografieren" },
          { id: "vb6", english: "to argue", german: "argumentieren" },
        ],
        target_answer: "kopieren, produzieren, korrigieren, reduzieren, fotografieren, argumentieren",
        meaning: "to copy, to produce, to correct, to reduce, to photograph, to argue",
        shift_hint: "Latin Bridge",
        explanation: "Same Latin roots, same English words, one German suffix: -ieren — the camera verb included (Foto is German's word for photo).",
      },
      {
        id: "l801_e3",
        type: "shift_select",
        prompt: "Where does the stress land in 'studieren'?",
        options: [
          "On the -IE-: stu-DIE-ren",
          "On the first syllable: STU-dieren",
          "On the last syllable: studie-REN",
          "German -ieren verbs have no fixed stress",
        ],
        target_answer: "On the -IE-: stu-DIE-ren",
        meaning: "Suffix stress is the password of -ieren verbs",
        explanation: "The stress always lands on -IE- — and that fixed stress is exactly what blocks ge- in the participle.",
      },
      {
        id: "l801_e4",
        type: "derive",
        prompt: "Run the stamp: English 'to activate' → German:",
        english_hint: "activ + the -ieren ending",
        shift_hint: "-ate → -ieren",
        target_answer: "aktivieren",
        meaning: "to activate",
        explanation: "activate → aktiv- + -ieren = aktivieren. The Latin c turned k on German pages.",
      },
      {
        id: "l801_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'We reserve a table'",
        target_answer: "Wir reservieren einen Tisch",
        meaning: "We reserve a table",
        vocab_hints: [
          {
            word: "einen",
            translation: "a (masculine direct object)",
            note: "Tisch is masculine — the Him-Case adds -en: ein → einen",
          },
        ],
        word_bank: ["Wir", "reservieren", "einen", "Tisch"],
        explanation: "Verb in position 2 with wir, direct object with the masculine accusative: 'Wir reservieren einen Tisch'.",
      },
    ],
    summary: {
      outcome: "Derive German -ieren verbs from English -ate/-ize/-ify verbs and stress them correctly.",
      use_example: { german: "Wir reservieren einen Tisch.", english: "We reserve a table." },
      takeaway: "English -ate/-ize/-ify and German -ieren/-isieren/-ifizieren are one Latin loan wearing two flags — stress stays on -IE-.",
      curiosity_teaser: "Next: the No-ge- Club — why 'gestudiert' is impossible and 'studiert' is the law.",
    },
  },
  {
    id: 802,
    slug: "the-no-ge-club",
    title: "The No-ge- Club",
    subtitle: "studiert, never gestudiert — how stress polices the participle",
    phase: 1,
    shift_categories: ["latin_ieren"],
    word_ids: ["studieren", "reparieren", "funktionieren", "organisieren", "kopieren", "haben", "sein", "anprobieren", "spazieren", "fotografieren"],
    table_word_ids: ["studieren", "reparieren", "funktionieren", "organisieren", "kopieren"],
    hook: {
      title: "The Stress Police",
      content:
        "German stamps ge- onto almost every past participle: gemacht, gesagt, gekommen. Almost. The -ieren verbs are the club that never pays: studiert, repariert, kopiert — no ge-, ever. The reason is acoustic, not arbitrary: German refuses to put its weak little prefix ge- in front of a syllable that outranks it. Since -ieren verbs stress the suffix (-IE-), the participle simply skips the prefix. You met this club in the -ieren lesson; today you learn its law and spend its earnings.",
      footnotes: [
        {
          marker: "1",
          title: "The Other Exempt Members",
          content:
            "Verbs starting with an unstressed prefix skip ge- for the same reason: verstanden (understood — ver- is unstressed), besucht (visited). One law everywhere: no unstressed ge- in front of a stronger syllable.",
        },
      ],
    },
    pattern: {
      title: "The Perfekt Preview: Bracket + Participle",
      content:
        "Put haben in position 2 and the participle closes the bracket — the same frame you mastered with modals: Ich habe Deutsch studiert. Wir haben den Computer repariert. Du hast ein Buch kopiert. In the present it just works: Das System funktioniert. In the past, the bracket returns: Das System hat funktioniert. Every sentence is your modal bracket wearing a past-tense coat: auxiliary opens, participle closes.",
      footnotes: [],
      linguist_note:
        "This is the first sighting of the Perfekt bracket, the most common spoken past tense in German. The full ge- participle system arrives later — but -ieren verbs are already ready today: studiert, repariert, kopiert, organisiert, funktioniert.",
    },
    exercises: [
      {
        id: "l802_e1",
        type: "shift_select",
        prompt: "Which past participle is correct?",
        options: ["studiert", "gestudiert", "gestudieren", "ge studiert"],
        target_answer: "studiert",
        meaning: "studied (no ge-)",
        explanation: "Suffix stress (-IE-) blocks the unstressed ge-: studiert, never gestudiert.",
      },
      {
        id: "l802_e2",
        type: "matching_pairs",
        prompt: "Match each -ieren verb with its ge--free participle — the club's newest members included:",
        matching_pairs: [
          { id: "ng1", english: "repaired", german: "repariert" },
          { id: "ng2", english: "organized", german: "organisiert" },
          { id: "ng3", english: "copied", german: "kopiert" },
          { id: "ng4", english: "functioned / worked", german: "funktioniert" },
          { id: "ng5", english: "tried on", german: "anprobiert" },
          { id: "ng6", english: "photographed", german: "fotografiert" },
          { id: "ng7", english: "gone for a walk", german: "spaziert" },
        ],
        target_answer: "repariert, organisiert, kopiert, funktioniert, anprobiert, fotografiert, spaziert",
        meaning: "repaired, organized, copied, worked, tried on, photographed, gone for a walk",
        explanation: "Drop -en from the infinitive, add -t — no ge- anywhere in the club, even when a separable prefix rides along: anprobiert keeps its an up front.",
      },
      {
        id: "l802_e3",
        type: "morpheme_tiles",
        prompt: "Build the participle of 'reparieren' (the No-ge- way):",
        tile_options: ["repar", "iert", "ge", "en", "st"],
        target_answer: "repariert",
        meaning: "repaired",
        explanation: "Stem 'repar-' + '-iert': repariert. The ge- tile stays in the box.",
      },
      {
        id: "l802_e4",
        type: "derive",
        prompt: "Complete the bracket: 'Ich habe Deutsch _____' (to study, past participle):",
        english_hint: "the participle closes the bracket",
        target_answer: "studiert",
        meaning: "Ich habe Deutsch studiert = I have studied German",
        explanation: "haben opens in position 2, the ge--free participle closes at the end.",
      },
      {
        id: "l802_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'I have repaired the computer'",
        target_answer: "Ich habe den Computer repariert",
        meaning: "I have repaired the computer",
        vocab_hints: [
          {
            word: "den",
            translation: "the (masculine direct object)",
            note: "der Computer takes den in the accusative — the Him-Case again",
          },
        ],
        word_bank: ["Ich", "habe", "den", "Computer", "repariert"],
        explanation: "The Perfekt bracket: 'habe' opens, 'repariert' closes — and the computer stays masculine accusative in between.",
      },
    ],
    summary: {
      outcome: "Form ge--free participles of -ieren verbs and build your first Perfekt brackets.",
      use_example: { german: "Ich habe Deutsch studiert.", english: "I have studied German." },
      takeaway: "Suffix stress exempts -ieren verbs from ge-: studiert, repariert, kopiert — and haben + participle gives you the spoken past for free.",
      curiosity_teaser: "Next: conjugation roots & the living endings — Shakespeare's thou -st and he -th unlock every German ending.",
    },
  },
  {
    id: 901,
    slug: "stem-hunters",
    title: "Stem Hunters",
    subtitle: "Strip -en at speed — the stem is the verb's DNA",
    phase: 2,
    shift_categories: [],
    word_ids: ["lernen", "kommen", "trinken", "machen", "denken", "finden", "singen", "bringen", "wandern", "setzen", "sitzen", "halten", "stehen", "zeigen", "küssen", "anprobieren", "spazieren"],
    table_word_ids: ["lernen", "kommen", "trinken", "machen", "denken", "finden"],
    hook: {
      title: "One Stem, Six People",
      content:
        "Stop reading German verbs as whole words. Read them as stem + ending. Strip the dictionary -en and what remains — lern-, komm-, trink-, mach-, denk- — is the verb's DNA: it never changes, and every single person is built from it. You learned the endings in the Conjugation Roots lesson; today you drill the dissection until stripping -en becomes instant. Hunters who own the stem never memorize conjugation tables — they assemble them on sight.",
      footnotes: [
        {
          marker: "1",
          title: "Old English Did the Same",
          content:
            "Old English verbs worked identically: lǣran 'to teach' had the stem lǣr- and wore ic lǣre, þū lǣrest, hē lǣrþ. German never stopped building verbs this way — English just stopped showing the seams.",
        },
      ],
    },
    pattern: {
      title: "Dissect, Then Rebuild",
      content:
        "Step one — dissect: lernen → lern-, kommen → komm-, trinken → trink-, machen → mach-, denken → denk- (note the nk: the k of think survives intact!). Step two — rebuild the whole row from the stem: ich lerne, du lernst, er lernt, wir lernen, ihr lernt, sie lernen. One stem, six tiles: -e, -st, -t, -en, -t, -en. The wir and sie forms wear the full dictionary -en; du wears the Shakespearean -st; er keeps the archaic -th as -t. Nothing else ever happens to a regular verb.",
      footnotes: [],
      linguist_note:
        "denken hides a historical wrinkle: du denkst preserves the stem, but the past tense will later surprise you (dachte, not denkte). Regular verbs keep the stem untouched forever; denken is already practicing its escape.",
    },
    exercises: [
      {
        id: "l901_e1",
        type: "morpheme_tiles",
        prompt: "Rebuild 'we come' from the stem (stem + the full ending):",
        tile_options: ["komm", "en", "st", "t", "e"],
        target_answer: "wir kommen",
        meaning: "we come",
        explanation: "Stem 'komm-' + wir's full '-en' = kommen — the dictionary form does double duty as the wir-form.",
      },
      {
        id: "l901_e2",
        type: "derive",
        prompt: "Strip the infinitive: lernen → stem:",
        english_hint: "remove the -en tail",
        target_answer: "lern",
        meaning: "stem of lernen",
        explanation: "lern- + the six personal tiles builds every form: lerne, lernst, lernt, lernen...",
      },
      {
        id: "l901_e3",
        type: "matching_pairs",
        prompt: "The hunter's ledger — match each infinitive with its stripped stem:",
        matching_pairs: [
          { id: "sh1", english: "setzen (to set)", german: "setz-" },
          { id: "sh2", english: "sitzen (to sit)", german: "sitz-" },
          { id: "sh3", english: "halten (to hold)", german: "halt-" },
          { id: "sh4", english: "küssen (to kiss)", german: "küss-" },
          { id: "sh5", english: "zeigen (to show)", german: "zeig-" },
          { id: "sh6", english: "stehen (to stand)", german: "steh-" },
        ],
        target_answer: "setz-, sitz-, halt-, küss-, zeig-, steh-",
        meaning: "stems of setzen, sitzen, halten, küssen, zeigen, stehen",
        explanation: "Six new verbs, one old move: strip the -en and the stem stands naked — setz-, sitz-, halt-, küss-, zeig-, steh- — ready for any of the six endings.",
      },
      {
        id: "l901_e4",
        type: "shift_select",
        prompt: "Which form is WRONG?",
        options: ["du lernst", "er lernt", "ich lerne", "ich lernt"],
        target_answer: "ich lernt",
        meaning: "ich always takes -e on regular verbs",
        explanation: "ich wears -e (lerne); lernt belongs to er and ihr. English never says 'I learns' either.",
      },
      {
        id: "l901_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'We want to try things on and go for a stroll'",
        target_answer: "Wir wollen anprobieren und spazieren",
        meaning: "We want to try things on and go for a stroll",
        vocab_hints: [
          {
            word: "und",
            translation: "and",
            note: "ancient twin of English 'and'",
          },
        ],
        word_bank: ["Wir", "wollen", "anprobieren", "und", "spazieren", "küssen"],
        explanation: "Two bare infinitives share one modal: wollen opens, anprobieren and spazieren ride inside — each keeps its full dictionary form in the bracket.",
      },
    ],
    summary: {
      outcome: "Dissect any regular infinitive into its stem and rebuild all six persons.",
      use_example: { german: "Wir wollen anprobieren und spazieren.", english: "We want to try things on and go for a stroll." },
      takeaway: "Stem + six tiles (-e, -st, -t, -en, -t, -en) is the entire regular verb system — no tables needed.",
      curiosity_teaser: "Next: the Thou -st Circuit — drill the Shakespearean ending across five verbs until it is muscle memory.",
    },
  },
  {
    id: 902,
    slug: "thou-st-drill-circuit",
    title: "Thou -st Drill Circuit",
    subtitle: "du -st across five verbs — Shakespeare as muscle memory",
    phase: 2,
    shift_categories: [],
    word_ids: ["lernen", "kommen", "trinken", "machen", "denken", "du", "sein"],
    table_word_ids: ["lernen", "kommen", "trinken", "machen", "denken"],
    hook: {
      title: "The Circuit",
      content:
        "One ending, five verbs, no mercy: du lernst, du kommst, du trinkst, du machst, du denkst. The -st you attach is not German's invention — it is the exact ending of Early Modern English: thou learn'st, thou comest, thou drinkest. Shakespeare conjugated German before Germany standardized it. Run the circuit until adding -st feels as automatic as it felt to a 1600s English speaker — because historically, it is the same gesture.",
      footnotes: [
        {
          marker: "1",
          title: "The Second/Third Pairing",
          content:
            "du -st and er -t ride together: lernst/lernt, kommst/kommt, denkst/denkt. In old English: thou learnest, he learneth. The consonants of the endings are identical; only the vowel spelling drifted apart.",
        },
      ],
    },
    pattern: {
      title: "Run the Circuit",
      content:
        "lernen: du lernst, er lernt. kommen: du kommst, er kommt. trinken: du trinkst, er trinkt. machen: du machst, er macht. denken: du denkst, er denkt — and sein refuses the pattern, as always: du bist (thou art!), er ist. Notice the circuit never asks the stem to change: komm-, trink-, mach-, denk- stay solid while only the tail rotates. In sentences, du-verbs sit in position 2 like anyone else — and in questions the verb even leads: Kommst du morgen?",
      footnotes: [],
      linguist_note:
        "Kommst du? is verb-first inversion — the question form English rebuilt with do-support ('Do you come?'). German kept the older Germanic way: swap subject and verb, add nothing. Archaic English agrees: 'Knowest thou?'",
    },
    exercises: [
      {
        id: "l902_e1",
        type: "morpheme_tiles",
        prompt: "Assemble the thou-form of denken (mind the nk):",
        tile_options: ["denk", "st", "t", "en", "e"],
        target_answer: "du denkst",
        meaning: "you think / thou thinkest",
        explanation: "Stem 'denk-' + the Shakespearean '-st' = denkst. The nk is think's k, surviving intact.",
      },
      {
        id: "l902_e2",
        type: "matching_pairs",
        prompt: "Run the circuit — match each du-form with its er-twin:",
        matching_pairs: [
          { id: "tc1", english: "du lernst", german: "er lernt" },
          { id: "tc2", english: "du kommst", german: "er kommt" },
          { id: "tc3", english: "du machst", german: "er macht" },
          { id: "tc4", english: "du denkst", german: "er denkt" },
        ],
        target_answer: "er lernt, er kommt, er macht, er denkt",
        meaning: "he learns, he comes, he makes, he thinks",
        explanation: "du -st and er -t are the same consonant in two old costumes: thou learnest, he learneth.",
      },
      {
        id: "l902_e3",
        type: "shift_select",
        prompt: "Which verb refuses the circuit entirely?",
        options: ["sein (du bist — thou art)", "lernen (du lernst)", "kommen (du kommst)", "machen (du machst)"],
        target_answer: "sein (du bist — thou art)",
        meaning: "sein is the eternal irregular",
        explanation: "du bist is the exact twin of 'thou art' — sein kept one of the oldest forms in either language.",
      },
      {
        id: "l902_e4",
        type: "derive",
        prompt: "Complete: 'Er _____ Wasser' (to drink, 3rd person):",
        english_hint: "trink + the archaic -th as -t",
        target_answer: "trinkt",
        meaning: "Er trinkt = he drinks (he drinketh)",
        explanation: "Stem 'trink-' + 3rd-person '-t' = trinkt — 'he drinketh' in modern spelling.",
      },
      {
        id: "l902_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'You think of me'",
        target_answer: "Du denkst an mich",
        meaning: "You think of me",
        vocab_hints: [
          {
            word: "an",
            translation: "of / about (preposition)",
            note: "denken an — the same pairing you met with 'Ich denke an dich'",
          },
          {
            word: "mich",
            translation: "me (direct object)",
            note: "mich ↔ me — the accusative twin",
          },
        ],
        word_bank: ["Du", "denkst", "an", "mich"],
        explanation: "du + denkst in position 2, and the accusative mich closes the thought — 'thou thinkest of me'.",
      },
    ],
    summary: {
      outcome: "Conjugate five verbs in du and er forms on sight, including the sein exception.",
      use_example: { german: "Du denkst an mich.", english: "You think of me (thou thinkest of me)." },
      takeaway: "du -st / er -t across every regular verb — the Shakespearean circuit — with du bist as the lone rebel.",
      curiosity_teaser: "Next: pronouns as case anchors — the him-case: why der becomes den and English him proves it.",
    },
  },
  {
    id: 1001,
    slug: "den-einen-ihn-case-gym",
    title: "den / einen / ihn Case Gym",
    subtitle: "Eighteen accusative-object drills with the table words you own",
    phase: 2,
    shift_categories: [],
    word_ids: ["der", "die", "das", "kaffee", "tee", "tisch", "traum", "tag", "haus", "glas", "stuhl", "fenster", "löffel", "stehen", "zeigen", "küssen", "setzen", "sitzen", "halten"],
    table_word_ids: ["kaffee", "tee", "tisch", "traum", "tag", "haus"],
    hook: {
      title: "The Gym Is Open",
      content:
        "You know the secret: only the masculine raises its hand for direct objects — der → den, ein → einen, er → ihn — while feminine and neuter stand still. What you need now is repetition until the reflex is instant. The gym equipment is your own vocabulary: Kaffee, Tee, Tisch, Traum, Tag, Haus, Glas — plus three new props: der Stuhl, das Fenster, der Löffel. Reps, five machines, and every sentence is one you could furnish a room with.",
      footnotes: [
        {
          marker: "1",
          title: "Why Drill This Case First",
          content:
            "The accusative is the case of DOING things to things — drinking, finding, bringing, seeking. It is the case you meet in every café sentence you will ever say. Master the masculine flag and 80% of everyday object sentences write themselves.",
        },
      ],
    },
    pattern: {
      title: "The Drill Circuit",
      content:
        "Circuit one — articles: der Kaffee becomes den Kaffee when you drink it; der Traum becomes einen Traum when you have it. Circuit two — pronouns: ich sehe ihn (I see him), ich finde ihn (I find it). Circuit three — the untouched twins: die Zeit stays die Zeit, das Wasser stays das Wasser, no matter what you do to them. Circuit four — the full sentence: Ich trinke den Kaffee und esse den Apfel... every masculine object pays the -n toll; every feminine and neuter object rides free.",
      footnotes: [],
      linguist_note:
        "Notice der Tra(um) → einen Traum: the article carries the case flag, not the noun. German marks the object on the determiner — the same job English 'him' and 'whom' still do for pronouns.",
    },
    exercises: [
      {
        id: "l1001_e1",
        type: "matching_pairs",
        prompt: "Match the German with its English — articles pay the -n toll, and the last two are wir-forms for free:",
        matching_pairs: [
          { id: "cg1", english: "der Kaffee (subject)", german: "den Kaffee (object)" },
          { id: "cg2", english: "ein Traum (subject)", german: "einen Traum (object)" },
          { id: "cg3", english: "der Tag (subject)", german: "den Tag (object)" },
          { id: "cg4", english: "ein Tisch (subject)", german: "einen Tisch (object)" },
          { id: "cg5", english: "der Stuhl (subject)", german: "den Stuhl (object)" },
          { id: "cg6", english: "der Löffel (subject)", german: "den Löffel (object)" },
          { id: "cg7", english: "we kiss", german: "wir küssen" },
          { id: "cg8", english: "we stand", german: "wir stehen" },
        ],
        target_answer: "den Kaffee, einen Traum, den Tag, einen Tisch, den Stuhl, den Löffel, wir küssen, wir stehen",
        meaning: "the coffee, a dream, the day, a table, the chair, the spoon (as objects), we kiss, we stand",
        explanation: "Masculine objects pay the -n toll: der → den, ein → einen. The two wir-forms ride free — no object, no toll.",
      },
      {
        id: "l1001_e2",
        type: "shift_select",
        prompt: "Complete: 'Wir halten _____ Löffel' (we hold the spoon):",
        options: ["den", "der", "dem", "des"],
        target_answer: "den",
        meaning: "Wir halten den Löffel",
        explanation: "Löffel is masculine and here it is the direct object: der → den.",
      },
      {
        id: "l1001_e3",
        type: "shift_select",
        prompt: "Which sentence has NO accusative change — and why?",
        options: [
          "Ich habe das Fenster — neuter objects stay unchanged",
          "Ich habe den Fenster — the -n toll applies to all",
          "Ich habe dem Fenster — dative for windows",
          "Ich habe des Fensters — genitive in rooms",
        ],
        target_answer: "Ich habe das Fenster — neuter objects stay unchanged",
        meaning: "Neuter and feminine ride free in the accusative",
        explanation: "Only masculine singular marks the direct object. das Fenster, das Wasser, die Zeit — no flag change, ever.",
      },
      {
        id: "l1001_e4",
        type: "derive",
        prompt: "Complete: 'Ich suche _____ Kaffee' (ein + the Him-Case):",
        english_hint: "ein + en",
        target_answer: "einen",
        meaning: "Ich suche einen Kaffee = I am looking for a coffee",
        explanation: "der Kaffee is masculine, sought and found: ein → einen.",
      },
      {
        id: "l1001_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'We put down the chair and show the spoon'",
        target_answer: "Wir setzen den Stuhl und zeigen den Löffel",
        meaning: "We put down the chair and show the spoon",
        word_bank: ["Wir", "setzen", "den", "Stuhl", "und", "zeigen", "den", "Löffel"],
        explanation: "Two masculine objects, two -n tolls — and one wir carries both verbs: setzen and zeigen keep their dictionary forms in the shared frame.",
      },
    ],
    summary: {
      outcome: "Use den, einen, and ihn correctly with masculine direct objects across everyday sentences.",
      use_example: { german: "Ich habe einen Traum.", english: "I have a dream." },
      takeaway: "Masculine objects pay the -n toll (der → den, ein → einen); feminine and neuter stay unchanged.",
      curiosity_teaser: "Next: Him & Whom — the proof texts where English still wears the ancient accusative on its sleeve.",
    },
  },
  {
    id: 1002,
    slug: "him-and-whom-proof-texts",
    title: "Him & Whom Proof Texts",
    subtitle: "Spot the ancient nasal in English — then mirror it in mich, dich, ihn, wen",
    phase: 2,
    shift_categories: [],
    word_ids: ["du", "der", "die", "das", "haben", "finden"],
    table_word_ids: ["du", "der", "die", "das", "haben"],
    hook: {
      title: "The Evidence Was In Your Mouth All Along",
      content:
        "You have been declining the accusative your whole life — in English. He saw me: me, not I. I saw him: him, not he. To whom: whom, not who. That final m is the ancient Indo-European object marker, and English pronouns still wear it. German wears the same marker, softened from m to n: mich (me), dich (thee), ihn (him), wen (whom). Every time you say 'whom', you are speaking German grammar with an m. Today: the proof texts.",
      footnotes: [
        {
          marker: "1",
          title: "The m → n Softening",
          content:
            "Proto-Indo-European marked masculine accusatives with *-m. English kept the m (him, whom); High German softened unstressed final -m into -n (ihn, wen). Same marker, two pronunciations — one ancient law.",
        },
      ],
    },
    pattern: {
      title: "The Pronoun Proof Grid",
      content:
        "Read the grid as evidence, not vocabulary: I ↔ ich, me ↔ mich; thou ↔ du, thee ↔ dich; he ↔ er, him ↔ ihn; who ↔ wer, whom ↔ wen. The English forms are not translations — they are the same words with the same job. And the feminine/neuter pair stays flat on both sides of the North Sea: she/her collapsed early, and German sie/sie, das/das never bothered. Witness statements: 'I see him' = Ich sehe ihn. 'Whom do you seek?' = Wen suchst du? — verb first, like Knowest thou?",
      footnotes: [],
      linguist_note:
        "wen ↔ whom is the cleanest pair: both carry the full nasal marker, one as -m, one as -n. wen suchst du? is the register of courtroom English 'whom do you seek?' — German never dropped whom.",
    },
    exercises: [
      {
        id: "l1002_e1",
        type: "matching_pairs",
        prompt: "Match each English objective pronoun with its German twin:",
        matching_pairs: [
          { id: "pw1", english: "me", german: "mich" },
          { id: "pw2", english: "him", german: "ihn" },
          { id: "pw3", english: "whom", german: "wen" },
          { id: "pw4", english: "thee / you", german: "dich" },
        ],
        target_answer: "mich, ihn, wen, dich",
        meaning: "me, him, whom, thee",
        explanation: "The same ancient nasal marker: English -m, German -n. One marker, two spellings.",
      },
      {
        id: "l1002_e2",
        type: "shift_select",
        prompt: "Why does German 'wen' end in -n while English 'whom' ends in -m?",
        options: [
          "High German softened the ancient final -m into -n",
          "English invented the m later",
          "German pronouns have no case marker",
          "wen and whom are unrelated words",
        ],
        target_answer: "High German softened the ancient final -m into -n",
        meaning: "The m → n nasal softening",
        explanation: "Same Indo-European marker *-m: English kept it crisp (him, whom), German blurred it to -n (ihn, wen).",
      },
      {
        id: "l1002_e3",
        type: "reverse_cognate",
        prompt: "What English pronoun is the direct twin of 'ihn'?",
        target_answer: "him",
        meaning: "him (twin of German ihn)",
        explanation: "er → ihn is he → him: the same pronoun, with the nasal softened to n on the German side.",
      },
      {
        id: "l1002_e4",
        type: "derive",
        prompt: "Complete: 'Ich sehe _____' (him):",
        english_hint: "er → the him-form",
        target_answer: "ihn",
        meaning: "Ich sehe ihn = I see him",
        explanation: "Direct object of sehen: er steps aside for ihn, German's him.",
      },
      {
        id: "l1002_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'I see him and he sees me'",
        target_answer: "Ich sehe ihn und er sieht mich",
        meaning: "I see him and he sees me",
        vocab_hints: [
          {
            word: "sieht",
            translation: "sees (er form)",
            note: "sehen → er sieht — the vowel wanders, as in see/saw",
          },
        ],
        word_bank: ["Ich", "sehe", "ihn", "und", "er", "sieht", "mich"],
        explanation: "Two clauses mirror each other: ich sehe ihn / er sieht mich — both direct objects wearing the nasal.",
      },
    ],
    summary: {
      outcome: "Use mich, dich, ihn, wen as objects — and hear English whom as German grammar with an m.",
      use_example: { german: "Ich sehe ihn und er sieht mich.", english: "I see him and he sees me." },
      takeaway: "The accusative nasal survives in English him/me/thee/whom and German ihn/mich/dich/wen — one marker, two spellings.",
      curiosity_teaser: "Next: the Article Grid — der/die/das are the demonstrative twins of the/that/this, and mein is mine.",
    },
  },
  {
    id: 11,
    slug: "article-grid-and-ein-family",
    title: "The Article Grid & the ein-Family",
    subtitle: "der/the, das/that, dieser/this, mein/mine — one ancient demonstrative system",
    phase: 2,
    shift_categories: [],
    word_ids: ["der", "die", "das", "dieser", "mein", "kein", "haus", "zeit", "bett", "teller", "stuhl", "fenster", "löffel", "setzen", "sitzen", "halten"],
    table_word_ids: ["der", "das", "dieser", "mein", "kein", "haus"],
    hook: {
      title: "The Is a Demonstrative in Disguise",
      content:
        "English speakers feel that German articles are arbitrary. They are not: der, die, das are the same ancient demonstrative word that gave English the — and its cousins that and this. Das ist mein Haus says 'That is mine house', and every word is a twin: das ↔ that, ist ↔ is, mein ↔ mine (the King James Bible still says 'mine eyes'). The ein-family — ein, kein, mein, dein — is one grid with one behavior, and kein is literally 'not one', the same construction as English none.",
      footnotes: [
        {
          marker: "1",
          title: "The That/Das Doublet",
          content:
            "Both English that and German das descend from Proto-Germanic *þat — the neuter of the ancient demonstrative. Old English had sē/sēo/þæt ('the/that'); the article and the demonstrative were one word doing two jobs, and German simply never split them apart.",
        },
      ],
    },
    pattern: {
      title: "The Grid and the Family",
      content:
        "The demonstrative grid: der ↔ the/he (masculine), die ↔ the/she (feminine), das ↔ that (neuter) — plus dieser ↔ this for pointing closer. The ein-family declines as one word: ein → einen (topic 10's Him-Case), and kein and mein copy it exactly. Before das Haus: das ist mein Haus, ich habe kein Haus. Before der Kaffee as an object: ich trinke keinen Kaffee — the full Him-Case, -en and all. Before die Zeit: ich habe keine Zeit. Every family member marches in step: ein, kein, mein, dein — same endings, same grid.",
      footnotes: [],
      linguist_note:
        "mein ↔ mine is exact: Proto-Germanic *mīnaz. English later reduced unstressed mine to my before nouns ('my house') while German kept the full form — the KJV's 'mine eyes have seen' is the older system both languages once shared.",
    },
    exercises: [
      {
        id: "l11_e1",
        type: "matching_pairs",
        prompt: "Match the demonstrative and possessive twins:",
        matching_pairs: [
          { id: "ag1", english: "this", german: "dieser" },
          { id: "ag2", english: "that (neuter)", german: "das" },
          { id: "ag3", english: "mine / my", german: "mein" },
          { id: "ag4", english: "no / not any", german: "kein" },
          { id: "ag5", english: "my bed", german: "mein Bett" },
          { id: "ag6", english: "the chair", german: "der Stuhl" },
          { id: "ag7", english: "the spoon", german: "der Löffel" },
        ],
        target_answer: "dieser, das, mein, kein, mein Bett, der Stuhl, der Löffel",
        meaning: "this, that, my/mine, no, my bed, the chair, the spoon",
        explanation: "One ancient demonstrative system split across two languages — and the room words slot into it: das ist mein Bett, der Stuhl ist neu.",
      },
      {
        id: "l11_e2",
        type: "shift_select",
        prompt: "Complete: 'Ich habe _____ Teller' (with the possessive, accusative):",
        options: ["meinen", "mein", "meine", "meiner"],
        target_answer: "meinen",
        meaning: "Ich habe meinen Teller = I have my plate",
        explanation: "mein copies ein exactly: masculine accusative adds -en (the Him-Case): der Teller → meinen Teller. And the wir-forms of your verbs keep their dictionaries while objects pay the toll: wir sitzen, wir halten, wir setzen — every one a dictionary form.",
      },
      {
        id: "l11_e3",
        type: "derive",
        prompt: "Negate the possession: 'Ich habe _____ Zeit' (kein + feminine die Zeit):",
        english_hint: "kein takes -e for feminine nouns",
        target_answer: "keine",
        meaning: "Ich habe keine Zeit = I have no time",
        explanation: "kein declines like ein: before die Zeit it takes -e. English none is the same 'not one' construction.",
      },
      {
        id: "l11_e4",
        type: "reverse_cognate",
        prompt: "What older English possessive is the exact twin of 'mein'?",
        target_answer: "mine",
        meaning: "mine (twin of German mein)",
        explanation: "Both descend from Proto-Germanic *mīnaz. 'Mine eyes' in the KJV is mein's living English relative.",
      },
      {
        id: "l11_e5",
        type: "transcribe",
        prompt: "Put into German:",
        idea: "you're showing someone around your new room: point at the window and say that is my window",
        cues: [
          "Every word is a twin: das ↔ that, ist ↔ is, mein ↔ mine",
          "Pointing word first, verb second, then what's yours: Das ist mein Fenster",
        ],
        target_answer: "Das ist mein Fenster",
        meaning: "That is my window",
        word_bank: ["Das", "ist", "mein", "Fenster", "meine"],
        explanation: "One sentence, four cognates — the demonstrative system you already spoke in King James English, now pointing at a window.",
      },
    ],
    summary: {
      outcome: "Use dieser, mein, and kein with correct endings across the ein-family grid.",
      use_example: { german: "Das ist mein Fenster.", english: "That is my window." },
      takeaway: "der/die/das and the/that/this are one demonstrative system; ein, kein, mein, dein decline as one family.",
      curiosity_teaser: "Next: the article gym — twenty nouns, three colors: rapid der/die/das reps with every table noun.",
    },
    twist: {
      prompt: "Same grid, new job — negate the noun: I have no time. (kein declines exactly like ein.)",
      target_answer: "Ich habe keine Zeit",
      word_bank: ["Ich", "habe", "keine", "kein", "Zeit", "nicht"],
      explanation: "Zeit is feminine, so kein wears its feminine dress: keine. nicht is for verbs — nouns get the 'not one' word. You just negated without a not.",
    },
  },
  {
    id: 12,
    slug: "nicht-and-kein",
    title: "Nicht & Kein",
    subtitle: "not and nicht are the same 'no-thing' — and each has its own job",
    phase: 2,
    shift_categories: [],
    word_ids: ["nicht", "kein", "wissen", "haben", "können", "zeit", "haus", "kurz", "laut", "leise", "billig", "insel", "nebel", "baum", "getränk", "tasse"],
    table_word_ids: ["nicht", "kein", "wissen", "haben", "können"],
    hook: {
      title: "No-Thing, Twice",
      content:
        "English built not from nāwiht — 'no thing'. German built nicht from ni wiht — 'never a creature'. Same recipe, same ancient word for 'being' (English kept it in the archaic wight), and German even pronounces the old gh: nicht's ch is the gh of naught, still sounding after a thousand years of English silence. But German splits the job: nouns are negated with kein (not one), verbs and adjectives with nicht. English has one not for everything; German has a not for things and a not for actions.",
      footnotes: [
        {
          marker: "1",
          title: "The gh You Can Finally Hear",
          content:
            "not ← nāwiht and nicht ← ni wiht both contained the guttural gh. English silenced it; German kept it as ch. When you say nicht, you are pronouncing the h that English spelling still writes in 'nought' but never sounds.",
        },
      ],
    },
    pattern: {
      title: "kein for Nouns, nicht for Verbs",
      content:
        "Negating a noun? Use kein, declined exactly like ein: Ich habe kein Haus (I have no house), keine Zeit (no time), keinen Kaffee (not a coffee — the Him-Case again!). Negating a verb or adjective? Use nicht: Ich kann nicht kommen (I cannot come), Das ist nicht gut (that is not good). Placement: nicht usually lands at the end of simple clauses, right where the action dies. Ich weiß es nicht — I know it not: three words, one of them the twin of wise (weiß), one the twin of it (es).\n\nOne Denglisch ladder, read it the German way first: Ich will nicht gehen → I want not to go → I don't want to go. The odd middle line is the lesson: nicht sits right before the bare infinitive, exactly where English 'not' sat before want and will merged and English shipped its 'not' forward.",
      footnotes: [],
      linguist_note:
        "kein ← nekein ← ni + ein ('not one') is the exact parallel of English none ← 'not one'. The languages negated possession with the same arithmetic — and German never let the word shrink.",
    },
    exercises: [
      {
        id: "l12_e1",
        type: "shift_select",
        prompt: "Negate the noun: 'Ich habe Zeit' →",
        options: ["Ich habe keine Zeit", "Ich habe nicht Zeit", "Ich nicht habe Zeit", "Ich habe Zeit nicht"],
        target_answer: "Ich habe keine Zeit",
        meaning: "I have no time",
        explanation: "Nouns take kein (declined like ein): keine Zeit. nicht is for verbs and adjectives.",
      },
      {
        id: "l12_e2",
        type: "matching_pairs",
        prompt: "Match each negated sentence with its English meaning:",
        matching_pairs: [
          { id: "nk1", english: "I cannot come", german: "Ich kann nicht kommen" },
          { id: "nk2", english: "I have no house", german: "Ich habe kein Haus" },
          { id: "nk3", english: "That is not good", german: "Das ist nicht gut" },
          { id: "nk4", english: "We have no time", german: "Wir haben keine Zeit" },
          { id: "nk5", english: "not loud — quiet", german: "nicht laut — leise" },
          { id: "nk6", english: "The drink is not cheap", german: "Das Getränk ist nicht billig" },
          { id: "nk7", english: "No island", german: "keine Insel" },
          { id: "nk8", english: "No fog today", german: "kein Nebel heute" },
        ],
        target_answer: "Ich kann nicht kommen, Ich habe kein Haus, Das ist nicht gut, Wir haben keine Zeit, nicht laut — leise, Das Getränk ist nicht billig, keine Insel, kein Nebel heute",
        meaning: "I cannot come, I have no house, that is not good, we have no time, not loud — quiet, the drink is not cheap, no island, no fog today",
        explanation: "Verbs and adjectives take nicht; noun phrases take kein, declined like ein: die Insel → keine Insel, der Nebel → kein Nebel. Two negations, two jobs.",
      },
      {
        id: "l12_e3",
        type: "literal_gloss",
        prompt: "Which English is built the German way?",
        german: "Ich will keine Tasse.",
        natural: "I don't want a cup.",
        options: ["I don't want a cup.", "I want no cup.", "Not I want a cup."],
        target_answer: "I want no cup.",
        meaning: "I don't want a cup.",
        explanation: "kein negates the noun — the German says, word for word, 'I want no cup.' English rebuilt the sentence with don't; German kept the no-thing word sitting right where the cup is.",
      },
      {
        id: "l12_e4",
        type: "derive",
        prompt: "Negate the adjective: 'Der Baum ist _____ kurz' (not):",
        english_hint: "the no-thing word",
        target_answer: "nicht",
        meaning: "Der Baum ist nicht kurz = The tree is not short",
        explanation: "Adjectives take nicht — the direct twin of English not. The tree refuses to be short.",
      },
      {
        id: "l12_e5",
        type: "transcribe",
        prompt: "You want to say:",
        idea: "the question was about it — the thing, the plan, whatever it was — and your honest answer: you do not know it",
        cues: [
          "Know is wissen → ich weiß (the wise twin, sharp ß and all)",
          "nicht kills the verb and lands where the action dies: at the very end",
        ],
        target_answer: "Ich weiß es nicht",
        meaning: "I do not know it",
        vocab_hints: [
          {
            word: "es",
            translation: "it",
            note: "es ↔ it — the same ancient pronoun. In speech you might hear it cling to the verb: hat's (hat es), ist's (ist es) — recognize them, no pressure to use them.",
          },
          {
            word: "weiß",
            translation: "know (ich form)",
            note: "from wissen — the same root as wise; the ß is the sharp S of the T→SS shift",
          },
        ],
        word_bank: ["Ich", "weiß", "es", "nicht", "kein", "weise"],
        explanation: "nicht lands at the end where the action dies: 'Ich weiß es nicht' — I know it not.",
        diagnosis: {
          slip: "nicht drifted to the English seat",
          cue: "English merged want/will and shipped its 'not' forward; German kept the ancient seat — nicht goes where the action dies, at the end: Ich weiß es nicht.",
        },
      },
    ],
    summary: {
      outcome: "Choose between kein and nicht correctly and place nicht at the clause end.",
      use_example: { german: "Ich weiß es nicht.", english: "I do not know it." },
      takeaway: "Nouns take kein ('not one'), verbs and adjectives take nicht ('no-thing') — the two negations English merged into one not.",
      curiosity_teaser: "Next: the kein vs nicht choice gym — twenty prompts naming which no-thing kills the noun and which kills the verb.",
    },
    twist: {
      prompt: "Now kill the verb: I can come tomorrow becomes I cannot come tomorrow. (nicht's seat: right before the bare infinitive.)",
      target_answer: "Ich kann morgen nicht kommen",
      word_bank: ["Ich", "kann", "morgen", "nicht", "kommen", "kein"],
      explanation: "nicht negates what follows it, so it sits right before the bare infinitive — inside the bracket, after morgen. Word for word: 'I can tomorrow not come.'",
    },
  },
  {
    id: 13,
    slug: "asking-questions",
    title: "Asking Questions",
    subtitle: "was, wo, wer, wann — pure cognates, verb-first questions, zero do-support",
    phase: 2,
    shift_categories: [],
    word_ids: ["was", "wo", "wer", "wann", "wie", "warum", "wohin", "kommen", "wissen"],
    table_word_ids: ["was", "wo", "wer", "wann", "wie", "warum"],
    hook: {
      title: "The W-Word Family Reunion",
      content:
        "German question words are not vocabulary to memorize — they are your own W-words with the h shaved off. was ↔ what, wo ↔ where, wer ↔ who, wann ↔ when, wohin ↔ whither. English spelled the old hw- as wh; German spelled it w and let the h go. One trap is built into the family: WER asks who and WO asks where — they swapped expectations exactly where English learners least expect. And German asks questions the way Early Modern English did: Kommst du? — 'Knowest thou?' Verb first, no do-support, no machinery.",
      footnotes: [
        {
          marker: "1",
          title: "Romeo Spoke German",
          interest: true,
          content:
            "warum is the structural twin of wherefore — wo (where) + um (for), 'for-what', exactly as wherefore is 'for-what'. Juliet's 'Wherefore art thou Romeo?' asks WHY, not where — and warum asks the same question the same way.",
        },
      ],
    },
    pattern: {
      title: "The W-Grid and the Verb-First Flip",
      content:
        "The grid: was ↔ what, wo ↔ where, wer ↔ who, wann ↔ when, wie ↔ how (its root is why's — English split one ancient word into how and why; German's wie covers the how-job, warum the why-job), wohin ↔ whither (wo + hin, 'to where'). Questions build two ways: W-questions start with the W-word and keep the verb second — Wo ist der Kaffee? Wann kommst du? Yes/no questions flip the verb in front of the subject — Kommst du? Weißt du das? ist er da? No do, no auxiliary, just the ancient flip.\n\nOne Denglisch ladder, read it the German way first: Weißt du das? → Know you that? → Do you know that? The middle line is word-for-word German — verb flipped, no helper — and it was ordinary English not so long ago.",
      footnotes: [],
      linguist_note:
        "English used to flip verbs too: 'Knowest thou?', 'Sawest thou him?' The do-support ('Do you know?') only spread in Early Modern English. German questions are the older machinery, still running.",
    },
    exercises: [
      {
        id: "l13_e1",
        type: "matching_pairs",
        prompt: "Match the W-words with their English twins:",
        matching_pairs: [
          { id: "qw1", english: "what", german: "was" },
          { id: "qw2", english: "where", german: "wo" },
          { id: "qw3", english: "who", german: "wer" },
          { id: "qw4", english: "when", german: "wann" },
        ],
        target_answer: "was, wo, wer, wann",
        meaning: "what, where, who, when",
        explanation: "One family: English kept the h of the ancient hw-, German let it go.",
      },
      {
        id: "l13_e2",
        type: "shift_select",
        prompt: "The classic trap: which German word asks WHO?",
        options: ["wer", "wo", "wann", "wie"],
        target_answer: "wer",
        meaning: "wer = who (wo = where)",
        explanation: "wer ↔ who and wo ↔ where — the words swapped sound-shapes, not meanings. Trust the twins, not the looks.",
      },
      {
        id: "l13_e3",
        type: "transcribe",
        prompt: "How would you say:",
        idea: "your friend said they might visit — ask it straight out: are you coming tomorrow?",
        cues: [
          "Yes/no questions flip the verb in front: kommst, then du",
          "Add the time word at the end: morgen",
        ],
        target_answer: "Kommst du morgen",
        meaning: "Are you coming tomorrow?",
        vocab_hints: [
          {
            word: "morgen",
            translation: "tomorrow",
            note: "twin of 'morrow' — the word hiding inside to-morrow",
          },
        ],
        word_bank: ["Kommst", "du", "morgen", "kommen", "Du"],
        explanation: "The verb takes position 1 and the subject falls in behind — no do, no helper: 'Comest thou tomorrow?' in modern dress.",
      },
      {
        id: "l13_e4",
        type: "reverse_cognate",
        prompt: "Which archaic English adverb (in 'Wherefore art thou Romeo?') is the structural twin of 'warum'?",
        target_answer: "wherefore",
        meaning: "wherefore (twin of German warum)",
        explanation: "Both are 'for-what': wo + um ↔ where + for. Juliet was asking why, and German still asks it her way.",
      },
      {
        id: "l13_e5",
        type: "literal_gloss",
        prompt: "Which English is built the German way?",
        german: "Wann kommst du?",
        natural: "When are you coming?",
        options: ["When are you coming?", "When come you?", "When you come?"],
        target_answer: "When come you?",
        meaning: "When are you coming?",
        explanation: "'When come you?' is the German way: the verb flips in front of du, no helper needed. Modern English inserted do instead; German kept the ancient flip — 'Knowest thou?' was still good English in Shakespeare's day.",
      },
    ],
    summary: {
      outcome: "Ask W-questions and verb-first yes/no questions with zero do-support.",
      use_example: { german: "Wo ist der Kaffee?", english: "Where is the coffee?" },
      takeaway: "The W-words are your W-words with the h shaved off — and German questions flip the verb like 'Knowest thou?'",
      curiosity_teaser: "Next: the w-word cognate set — all eight w-words matched to their English twins, wer≠where trap included.",
    },
    twist: {
      prompt: "Same words, but now ask it: 'You know it.' Put the question into German — no do, just the flip.",
      target_answer: "Weißt du es",
      word_bank: ["Weißt", "du", "es", "wissen"],
      explanation: "The verb takes position 1 and du falls in behind it — the ancient flip ('Knowest thou?'). The -st ending holds: weißt, like thou knowest.",
    },
  },
  {
    id: 14,
    slug: "word-order-subordinate-clauses",
    title: "Word Order & Subordinate Clauses",
    subtitle: "Verb-second everywhere — until weil and dass slam the verb to the end",
    phase: 2,
    shift_categories: [],
    word_ids: ["weil", "dass", "wissen", "können", "müssen", "morgen", "kommen", "dunkel", "sorge", "gleich", "meinung", "nie", "nichts", "niemand", "katze", "hund", "kennen", "tier"],
    table_word_ids: ["weil", "dass", "wissen", "müssen", "kommen"],
    hook: {
      title: "The Verb Has Two Homes",
      content:
        "German main clauses obey one law: the verb lives in position 2. Statement, fronted adverb, whatever — Ich lerne Deutsch. Morgen lerne ich Deutsch. The verb never moves. But walk through a door marked weil or dass and everything changes: the verb is thrown to the very end of the clause — Ich weiß, dass du kommst. Strange? Old English did the same: subordinate clauses parked their verbs late, and German never stopped. weil and dass are not foreign gadgets — dass is literally your that, and weil is your while wearing a new job title.",
      footnotes: [
        {
          marker: "1",
          title: "weil Is while",
          content:
            "weil looks like a scholarly loan, but it is a plain descendant of the same Germanic word as English while — Proto-Germanic *hwīlō. It drifted from 'while' to 'because' ('for the while that...' → 'since/as' → 'because') while English kept the time sense.",
        },
      ],
    },
    pattern: {
      title: "Position 2, Then the Basement",
      content:
        "Main clause law: verb in position 2, no matter what fronts it — Morgen komme ich (Tomorrow, I come). Subordinate law: after weil, dass, wenn, the verb goes to the basement, the very last slot — Ich weiß, dass du Deutsch lernst. Ich lerne, weil ich will. Combine with your modal bracket and nothing new appears: Ich kann nicht kommen, weil ich arbeiten muss — a bracket inside a basement; the trapped verb muss waits at the very end.\n\nOne Denglisch ladder, read it the German way first: Ich kann nicht kommen, weil ich arbeiten muss → I can not come, because I must work → I can't come because I have to. Odd in English, exact in German — and Old English agreed with German about where the trapped verb waits.",
      footnotes: [],
      linguist_note:
        "dass ↔ that is a doublet of das: Proto-Germanic *þat. The spelling difference (das/dass) is a purely German orthographic convention — the two were one word in Old High German (daȥ) as in Old English (þæt).",
    },
    exercises: [
      {
        id: "l14_e1",
        type: "matching_pairs",
        prompt: "Match each German clause structure with its English meaning:",
        matching_pairs: [
          { id: "wo1", english: "I know that you are coming", german: "Ich weiß, dass du kommst" },
          { id: "wo2", english: "I learn because I want to", german: "Ich lerne, weil ich will" },
          { id: "wo3", english: "I know that the dog is big", german: "Ich weiß, dass der Hund groß ist" },
          { id: "wo4", english: "I know that you have worry", german: "Ich weiß, dass du Sorge hast" },
          { id: "wo5", english: "I know nobody", german: "Ich kenne niemand" },
          { id: "wo6", english: "I know nothing", german: "Ich weiß nichts" },
          { id: "wo7", english: "I know your opinion", german: "Ich kenne deine Meinung" },
          { id: "wo8", english: "I'm coming right away", german: "Gleich komme ich" },
          { id: "wo9", english: "I never come", german: "Ich komme nie" },
        ],
        target_answer: "Ich weiß, dass du kommst, Ich lerne, weil ich will, Ich weiß, dass der Hund groß ist, Ich weiß, dass du Sorge hast, Ich kenne niemand, Ich weiß nichts, Ich kenne deine Meinung, Gleich komme ich, Ich komme nie",
        meaning: "I know that you are coming, I learn because I want to, I know that the dog is big, I know that you have worry, I know nobody, I know nothing, I know your opinion, I'm coming right away, I never come",
        explanation: "Main clauses keep the verb in position 2; dass and weil throw it to the end of their clause. kennen is 'to know a person or thing' — it takes your new nouns along for free.",
      },
      {
        id: "l14_e2",
        type: "literal_gloss",
        prompt: "Which English is built the German way?",
        german: "Ich weiß, dass es dunkel ist.",
        natural: "I know that it is dark.",
        options: ["I know that it is dark.", "I know that it dark is.", "I know that is it dark."],
        target_answer: "I know that it dark is.",
        meaning: "I know that it is dark.",
        explanation: "Read it the German way first: 'I know that it dark is.' dass slams the conjugated verb to the end of its clause — Old English's own habit, which German never gave up. The third option over-flips: only the subclause verb waits, never the main one.",
      },
      {
        id: "l14_e3",
        type: "shift_select",
        prompt: "Fronting 'Gleich' (right away) in a statement: 'Gleich _____ ich.'",
        options: ["komme", "ich komme", "kommen", "kommst"],
        target_answer: "komme",
        meaning: "Gleich komme ich — the verb holds position 2",
        explanation: "When an adverb takes position 1, the verb stays glued to position 2 and the subject slides to third.",
      },
      {
        id: "l14_e4",
        type: "reverse_cognate",
        prompt: "'weil' looks like a Romance loan but is the twin of which English time word?",
        target_answer: "while",
        meaning: "while (twin of German weil)",
        explanation: "Both descend from Proto-Germanic *hwīlō — weil drifted into 'because', while stayed temporal.",
      },
      {
        id: "l14_e5",
        type: "transcribe",
        prompt: "Put into German:",
        idea: "you're reporting on the neighborhood's most punctual animal — you know one thing for sure: the cat is coming. Say it with that.",
        cues: [
          "Main clause first: Ich weiß — verb in position 2",
          "dass opens the basement: die Katze (the cat, feminine), and kommt waits at the very end",
        ],
        target_answer: "Ich weiß dass die Katze kommt",
        meaning: "I know that the cat is coming",
        vocab_hints: [
          {
            word: "dass",
            translation: "that (conjunction)",
            note: "the exact twin of English that — and it sends the verb to the end",
          },
          {
            word: "die",
            translation: "the (feminine)",
            note: "die Katze — feminine flag, unchanged in the accusative",
          },
        ],
        word_bank: ["Ich", "weiß", "dass", "die", "Katze", "kommt", "kommen", "lernt"],
        explanation: "Main clause verb (weiß) in position 2; after dass, the subclause verb (kommt) waits in the basement — Old English's own habit.",
        diagnosis: {
          slip: "the subclause verb stayed upstairs",
          cue: "dass slams the conjugated verb to the end of its clause — die Katze kommt, with kommt last. The basement is the law.",
        },
      },
    ],
    summary: {
      outcome: "Build verb-second main clauses and verb-final weil/dass subclauses.",
      use_example: { german: "Ich weiß, dass die Katze kommt.", english: "I know that the cat is coming." },
      takeaway: "Verb in position 2 in main clauses; after weil and dass it waits in the basement — Old English's own habit.",
      curiosity_teaser: "Next: the verb-second bootcamp — front adverbs and objects while the verb stays glued to position 2.",
    },
    twist: {
      prompt: "Basement check: she knows one thing about you — you like the animal. Fold it under dass: she knows that I like the animal.",
      target_answer: "Sie weiß dass ich das Tier mag",
      word_bank: ["Sie", "weiß", "dass", "ich", "das", "Tier", "mag", "kommst"],
      explanation: "Two clauses, two laws: weiß holds position 2 in the main clause; after dass, mag sinks to the basement's last slot. The person changed — the architecture didn't.",
    },
  },
  {
    id: 15,
    slug: "separable-verbs-spatial-prefixes",
    title: "Separable Verbs & Spatial Prefixes",
    subtitle: "German prefixes ARE English phrasal verbs: aufwachen = wake up, zurückkommen = come back",
    phase: 2,
    shift_categories: [],
    word_ids: ["aufmachen", "zumachen", "anmachen", "abmachen", "mitnehmen", "einschlafen", "aussuchen", "aussehen", "aufstehen", "aufwachen", "zurückkommen", "machen", "kommen"],
    table_word_ids: ["aufmachen", "zumachen", "mitnehmen", "einschlafen", "aufstehen", "zurückkommen"],
    hook: {
      title: "Phrasal Verbs Spelled Straight",
      content:
        "English phrasal verbs puzzle the world: give up, wake up, come back, take along. Why? Because English put the little direction-word AFTER the verb. German kept the older arrangement: glue the direction-word ON as a prefix — and when the sentence runs, let it fly off the back end. aufwachen is wake up, zurückkommen is come back, mitnehmen is take along, einschlafen is fall asleep. Every German separable verb is a phrasal verb you already own, written as one word and then split apart by the sentence like a bracket.",
      footnotes: [
        {
          marker: "1",
          title: "The Stress Tells You It Will Fly",
          content:
            "Separable verbs stress the PREFIX (AUFwachen, MITnehmen) — that's how German speakers hear the split coming. Inseparable verbs (ver-, be-, er-) stress the root instead, and never split. Stress is the whole secret.",
        },
      ],
    },
    pattern: {
      title: "The Prefix Flight Path",
      content:
        "Dictionary form: aufwachen, zurückkommen, mitnehmen, aufstehen. In a sentence the conjugated root takes position 2 and the prefix flies to the very end: Ich wache früh auf (I wake up early). Wir kommen um acht zurück (We come back at eight). Ich nehme das Essen mit (I take the food along). In a modal bracket the verb stays whole: Ich will früh aufstehen — the trapped infinitive keeps its prefix, and the bracket swallows both parts. Du siehst gut aus — you look good (literally 'out': you look well-out!).\n\nOne Denglisch ladder, read it the German way first: Ich mache das Fenster auf → I open the window on → I'm opening the window. The middle line is word-for-word German — the particle lands last, exactly where English phrasal verbs say it out loud.",
      footnotes: [],
      linguist_note:
        "English used to allow this too: 'up' could follow or lead (he rose up / up he rose). The German pattern is the same spatial logic — direction first in the dictionary, direction last in the sentence.",
    },
    exercises: [
      {
        id: "l15_e1",
        type: "matching_pairs",
        prompt: "Match each separable verb with its phrasal twin:",
        matching_pairs: [
          { id: "sv1", english: "wake up", german: "aufwachen" },
          { id: "sv2", english: "come back", german: "zurückkommen" },
          { id: "sv3", english: "take along", german: "mitnehmen" },
          { id: "sv4", english: "fall asleep", german: "einschlafen" },
        ],
        target_answer: "aufwachen, zurückkommen, mitnehmen, einschlafen",
        meaning: "wake up, come back, take along, fall asleep",
        explanation: "German prefixes are English phrasal particles: auf = up, zurück = back, mit = along, ein = in(to).",
      },
      {
        id: "l15_e2",
        type: "literal_gloss",
        prompt: "Which English is built the German way?",
        german: "Ich mache das Fenster auf.",
        natural: "I'm opening the window.",
        options: ["I'm opening the window.", "I open the window on.", "On I open the window."],
        target_answer: "I open the window on.",
        meaning: "I'm opening the window.",
        explanation: "Read it the German way: 'I open the window on.' The prefix auf flies to the sentence end — the exact seat where English phrasal verbs park their particles ('wake up', 'give up'), except German does it in writing, every time.",
      },
      {
        id: "l15_e3",
        type: "derive",
        prompt: "Send the prefix home: 'Wir kommen morgen _____' (come back):",
        english_hint: "the prefix rides at the end",
        target_answer: "zurück",
        meaning: "Wir kommen morgen zurück = We are coming back tomorrow",
        explanation: "zurückkommen splits: kommen in position 2, zurück at the caboose — 'come back' with the back-word last.",
      },
      {
        id: "l15_e4",
        type: "reverse_cognate",
        prompt: "Which English verb (plus its 'up') is the twin of 'aufwachen'?",
        target_answer: "wake",
        meaning: "wake up (twin of German aufwachen)",
        explanation: "wachen and wake are one ancient verb — 'to be awake, to watch'. German adds auf (up); English adds up too!",
      },
      {
        id: "l15_e5",
        type: "transcribe",
        prompt: "Tell me:",
        idea: "you're telling your household your plan for tomorrow: you want to get up early",
        cues: [
          "Modal opens position 2: ich will",
          "Inside the bracket the separable verb stays whole: früh aufstehen — prefix included",
        ],
        target_answer: "Ich will früh aufstehen",
        meaning: "I want to get up early",
        vocab_hints: [
          {
            word: "früh",
            translation: "early",
            note: "no English twin — just learn it with the phrase 'früh aufstehen'",
          },
        ],
        word_bank: ["Ich", "will", "früh", "aufstehen", "stehe", "auf"],
        explanation: "Inside the modal bracket the separable verb stays whole: will opens, aufstehen closes — prefix included.",
        diagnosis: {
          slip: "the prefix got left behind",
          cue: "Inside the modal bracket the separable verb stays whole: aufstehen closes it, prefix included. The prefix only flies when the verb runs the sentence alone.",
        },
      },
    ],
    summary: {
      outcome: "Use separable verbs with the prefix flying to the sentence end — and whole inside modal brackets.",
      use_example: { german: "Ich will früh aufstehen.", english: "I want to get up early." },
      takeaway: "Separable prefixes are your phrasal particles: auf = up, zurück = back, mit = along — stressed up front, flown to the end.",
      curiosity_teaser: "Next: the phrasal verb mirrors — fifteen separable verbs matched to the phrasal verbs you already own.",
    },
    twist: {
      prompt: "Same plan, but it's happening now: I want to get up early → I get up early. (Watch the prefix fly.)",
      target_answer: "Ich stehe früh auf",
      word_bank: ["Ich", "stehe", "steht", "früh", "auf", "aufstehen"],
      explanation: "Without the modal the bracket splits: stehe holds position 2 and the prefix auf flies to the caboose — the flight path this topic named. Inside a modal bracket it would have stayed whole.",
    },
  },
  {
    id: 16,
    slug: "inseparable-prefixes-ver-be-er",
    title: "Inseparable Prefixes (ver-, be-, er-)",
    subtitle: "ver- is English for-: vergessen = forget, verlieren = lose, verboten = forbidden",
    phase: 2,
    shift_categories: [],
    word_ids: ["vergessen", "verlieren", "bekommen", "erinnern", "erklären", "verstehen", "versuchen", "verkaufen"],
    table_word_ids: ["vergessen", "verlieren", "verstehen", "verkaufen", "bekommen", "erklären"],
    hook: {
      title: "The Bound Prefixes",
      content:
        "Some prefixes never fly. ver-, be-, and er- are welded to their verbs: they take the stress together, never split, and never leave for the sentence end. And the oldest of them, ver-, has been hiding in English all along: it is for-. vergessen is forget — the same for- plus the same get. verlieren is lose — and English's forlorn is literally 'for-lost', the identical construction. verboten is forbidden, vernehmt? no — vernehmen is 'hear forth'... just remember: when a German verb starts with ver-, an English for- is usually dead ahead.",
      footnotes: [
        {
          marker: "1",
          title: "The No-ge- Law, Second Verse",
          content:
            "Inseparable verbs skip ge- in the participle for the same acoustic reason as -ieren verbs: verstanden (not 'geverstanden'), besucht, erklärt. The prefix and the stress rule you learned in the No-ge- Club now cover a second whole verb family.",
        },
      ],
    },
    pattern: {
      title: "The ver- for- Ledger, and the be-/er- Workshop",
      content:
        "The ver- ledger: vergessen ↔ forget, verlieren ↔ lose (forlorn), verstehen ↔ understand (stehen/stand!), verkaufen ↔ sell (kaufen is the twin of cheap — both from the Latin for 'innkeeper/tradesman'), versuchen ↔ to try. The be- workshop: bekommen means GET, not become — 'come by' something; be- converts meaning the way it does in English bespeak. The er- workshop: erklären is 'make clear' (klar ↔ clear — both borrowed from Latin clarus), erinnern is to remember ('inner-ize' a thing). Stress law: the prefix never takes the stress — verGESsen, beKOMmen, erKLÄren. That unstressed prefix is exactly why inseparables reject ge-, just like -ieren verbs.",
      footnotes: [],
      linguist_note:
        "bekommen vs become is the most famous false friend in the app's deck: both are be + come, but English drifted the compound toward 'turn into' while German kept 'come by/receive'. The Review Hub's false-friend deck covers it in full.",
    },
    exercises: [
      {
        id: "l16_e1",
        type: "matching_pairs",
        prompt: "Match the ver- verbs with their for-/English twins:",
        matching_pairs: [
          { id: "iv1", english: "to forget", german: "vergessen" },
          { id: "iv2", english: "to lose", german: "verlieren" },
          { id: "iv3", english: "to understand", german: "verstehen" },
          { id: "iv4", english: "to sell", german: "verkaufen" },
        ],
        target_answer: "vergessen, verlieren, verstehen, verkaufen",
        meaning: "to forget, to lose, to understand, to sell",
        explanation: "ver- is English for-: for-get, for-lorn (lost), for-bidden — and verstehen stands under it all, like understand.",
      },
      {
        id: "l16_e2",
        type: "shift_select",
        prompt: "Which participle is correct?",
        options: ["verstanden", "geverstanden", "vergestanden", "stand ver"],
        target_answer: "verstanden",
        meaning: "understood (no ge-)",
        explanation: "Inseparable prefixes block ge- — same law as -ieren verbs. verstanden, besucht, erklärt.",
      },
      {
        id: "l16_e3",
        type: "derive",
        prompt: "Run the be- workshop: 'Ich _____ einen Kaffee' (to get/receive):",
        english_hint: "be + come — but it means GET",
        target_answer: "bekomme",
        meaning: "Ich bekomme einen Kaffee = I am getting a coffee",
        explanation: "bekommen = 'come by' → receive. Never 'become' — that is the trap the false-friend deck drills.",
      },
      {
        id: "l16_e4",
        type: "reverse_cognate",
        prompt: "What English adjective (in 'a forlorn hope') preserves the root of 'verlieren'?",
        target_answer: "forlorn",
        meaning: "forlorn — 'utterly lost' (for- + lost)",
        explanation: "forlorn is for- + the same lose-root as verlieren: the identical prefix, the identical verb, fossilized in English.",
      },
      {
        id: "l16_e5",
        type: "transcribe",
        prompt: "How would you say:",
        idea: "someone asked you to bring the thing, and you have to confess: you have forgotten it",
        cues: [
          "haben opens the Perfekt bracket: ich habe",
          "Inseparable verbs never take ge-: vergessen closes the bracket, prefix welded on",
        ],
        target_answer: "Ich habe es vergessen",
        meaning: "I have forgotten it",
        word_bank: ["Ich", "habe", "es", "vergessen", "gegessen"],
        explanation: "Perfekt bracket with an inseparable verb: 'habe' opens, 'vergessen' closes — no ge- anywhere.",
        diagnosis: {
          slip: "ge- crashed the inseparable party",
          cue: "ver- is welded on — vergessen, never 'gevergessen'. The no-ge- law: inseparables and -ieren verbs skip the prefix.",
        },
      },
    ],
    summary: {
      outcome: "Decode ver-, be-, er- verbs via their English for-/be- twins and form ge--free participles.",
      use_example: { german: "Ich habe es vergessen.", english: "I have forgotten it." },
      takeaway: "ver- = for- (vergessen/forget, verlieren/forlorn), be- and er- reshape meaning — and inseparables never take ge-.",
      curiosity_teaser: "Next: the ver ↔ for- cognate set — vergessen is forget, verboten is forbidden: twelve words, one prefix.",
    },
    twist: {
      prompt: "Wait — you remember after all: negate it. I have forgotten it becomes I have NOT forgotten it.",
      target_answer: "Ich habe es nicht vergessen",
      word_bank: ["Ich", "habe", "es", "nicht", "vergessen", "kein"],
      explanation: "nicht lands before the participle — inside the Perfekt bracket, where the action dies. And vergessen keeps its ge-free, inseparable dignity.",
    },
  },
  {
    id: 1101,
    slug: "article-gym-20-nouns-3-colors",
    title: "Article Gym: 20 Nouns, 3 Colors",
    subtitle: "Rapid der/die/das assignment with every table noun you have met",
    phase: 2,
    shift_categories: [],
    word_ids: ["der", "die", "das", "haus", "glas", "brot", "gold", "sand", "butter", "kaffee", "tee", "tisch", "traum", "tag", "zeit", "wasser", "buch", "milch", "straße", "tochter"],
    table_word_ids: ["haus", "glas", "brot", "kaffee", "zeit", "wasser"],
    hook: {
      title: "The Color Reflex",
      content:
        "Twenty nouns you already own. One job: attach the right flag — der (blue), die (rose), das (green) — without hesitating. This gym is not about logic; it is about reps. Every noun below has already met you in a lesson, carrying its flag. Today you prove the flags stuck. Speed round, three colors, twenty nouns — and every miss feeds the retry queue until the reflex is permanent.",
      footnotes: [
        {
          marker: "1",
          title: "Why the App Uses Colors",
          content:
            "der = blue, die = rose, das = green across every table, drawer, and card in Brücke. Gender is ancestry, not logic — so it is learned like pronunciation: by exposure and repetition, one color at a time.",
        },
      ],
    },
    pattern: {
      title: "The Noun Lineup",
      content:
        "das Haus, das Glas, das Brot, das Gold — the neuter home-and-matter set. der Kaffee, der Tee, der Tisch, der Traum, der Tag, der Sand — the masculine café-and-time set. die Butter, die Zeit, die Milch, die Straße, die Tochter — the feminine flow set. das Wasser, das Buch — two exceptions to enjoy. Spot the soft patterns when they appear (many -e nouns are die; German drinks are der) but trust the colors first — heuristics get their own lesson later.",
      footnotes: [],
      linguist_note:
        "A quiet head start: agent nouns ending in -er are always der (der Fernseher, der Staubsauger), and -chen/-lein are always das — two laws you will formalize in the Gender Heuristics lesson.",
    },
    exercises: [
      {
        id: "l1101_e1",
        type: "shift_select",
        prompt: "Flag check: _____ Haus",
        options: ["der", "die", "das"],
        target_answer: "das",
        meaning: "das Haus — the house",
        explanation: "das Haus — the neuter flag, green in the app's colors.",
      },
      {
        id: "l1101_e2",
        type: "shift_select",
        prompt: "Flag check: _____ Zeit",
        options: ["der", "die", "das"],
        target_answer: "die",
        meaning: "die Zeit — the time",
        explanation: "die Zeit — and most -e nouns share the rose flag, though the proof is always the word itself.",
      },
      {
        id: "l1101_e3",
        type: "matching_pairs",
        prompt: "Match each noun with its article:",
        matching_pairs: [
          { id: "ag1", english: "coffee", german: "der Kaffee" },
          { id: "ag2", english: "butter", german: "die Butter" },
          { id: "ag3", english: "glass", german: "das Glas" },
          { id: "ag4", english: "street", german: "die Straße" },
        ],
        target_answer: "der Kaffee, die Butter, das Glas, die Straße",
        meaning: "the coffee, the butter, the glass, the street",
        explanation: "Café drinks lean masculine; das Glas keeps its neuter flag from the Hidden Twins lesson.",
      },
      {
        id: "l1101_e4",
        type: "shift_select",
        prompt: "Which lineup is ALL correct?",
        options: [
          "der Kaffee, die Zeit, das Wasser",
          "das Kaffee, der Zeit, die Wasser",
          "die Kaffee, das Zeit, der Wasser",
          "der Kaffee, das Zeit, die Wasser",
        ],
        target_answer: "der Kaffee, die Zeit, das Wasser",
        meaning: "Three flags, three nouns — all correct",
        explanation: "der Kaffee, die Zeit, das Wasser — the flags you have been collecting since the Hidden Twins.",
      },
      {
        id: "l1101_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'The time is short' (with the article)",
        target_answer: "Die Zeit ist kurz",
        meaning: "Die Zeit ist kurz = The time is short",
        vocab_hints: [
          {
            word: "kurz",
            translation: "short",
            note: "no English twin needed — it survives in the name Kurt",
          },
        ],
        word_bank: ["Die", "Zeit", "ist", "kurz"],
        explanation: "die Zeit with its rose flag, capitalized mid-sentence like every German noun.",
      },
    ],
    summary: {
      outcome: "Assign der/die/das to twenty high-frequency nouns without hesitation.",
      use_example: { german: "Die Zeit ist kurz.", english: "The time is short." },
      takeaway: "Gender is collected with the word, flagged in color — reps build the reflex before rules explain it.",
      curiosity_teaser: "Next: jener ↔ yon — the far demonstrative, and the full map of this/that/yon in one grid.",
    },
  },
  {
    id: 1102,
    slug: "jener-and-the-demonstrative-map",
    title: "jener ↔ yon & the Demonstrative Map",
    subtitle: "dieser/jener ↔ this/yon — and der/die/das with demonstrative force",
    phase: 2,
    shift_categories: [],
    word_ids: ["jener", "dieser", "der", "die", "das", "haus", "tag", "insel", "nebel", "baum", "bett", "teller", "stuhl", "fenster", "löffel"],
    table_word_ids: ["jener", "dieser", "der", "das", "die"],
    hook: {
      title: "This, That, and the Word English Lost",
      content:
        "English once had three distances: this (near me), that (near you), yon (far from both of us). Yonder's parent word — yon — is now poetic at best. German kept the full map: dieser ↔ this, das ↔ that, jener ↔ yon. That makes jener the oldest word in the set — the twin of a word English pushed out to the frontier ('yonder man'). And stressed der/die/das still carry demonstrative force: 'DER Mann da' is 'THAT man there', with the article doing the pointing.",
      footnotes: [
        {
          marker: "1",
          title: "Yon Is Yonder's Root",
          content:
            "yon, yonder, and jener all descend from the same Proto-Germanic *jēnaz. English kept it only in the far-distance compound yonder; German's jener is the bare survivor — the demonstrative of the horizon.",
        },
      ],
    },
    pattern: {
      title: "The Three-Distance Map",
      content:
        "Near: dieser Tag (this day) — declension alert: dieser is the ein-family's twin, so masculine accusative gives diesen Tag. Far: jener Mann (yon man) — same endings as dieser, pointing past your conversation partner. The default: der/die/das, which double as 'the' — but under stress they point: DER Mann da (THAT man there). Compare with topic 12's negation grid and you see the system: ein-family (kein, mein) and pointer-family (dieser, jener) decline identically; only der/die/das march to their own ancient beat.",
      footnotes: [],
      linguist_note:
        "That's why dieser and jener take the same endings as ein and kein (dieser → diesen) while der → den: German demonstratives come in two ancient lineages, and English 'this/that' descends from both (þis from the same base as German dies-).",
    },
    exercises: [
      {
        id: "l1102_e1",
        type: "matching_pairs",
        prompt: "Match the three distances with their German pointers:",
        matching_pairs: [
          { id: "jm1", english: "this (near)", german: "dieser" },
          { id: "jm2", english: "yon (far)", german: "jener" },
          { id: "jm3", english: "that (neuter)", german: "das" },
          { id: "jm4", english: "the / he (masculine)", german: "der" },
          { id: "jm5", english: "yon tree", german: "jener Baum" },
          { id: "jm6", english: "this fog", german: "dieser Nebel" },
          { id: "jm7", english: "yon island", german: "jene Insel" },
          { id: "jm8", english: "this plate", german: "dieser Teller" },
        ],
        target_answer: "dieser, jener, das, der, jener Baum, dieser Nebel, jene Insel, dieser Teller",
        meaning: "this, yon, that, the/he, yon tree, this fog, yon island, this plate",
        explanation: "One map, three distances: dieser (near), das (mid), jener (far) — with der/die/das as the default articles. The new nouns ride the map like everything else.",
      },
      {
        id: "l1102_e2",
        type: "shift_select",
        prompt: "Which English word is the bare twin of 'jener'?",
        options: ["yon", "that", "the", "those"],
        target_answer: "yon",
        meaning: "yon ↔ jener — the far demonstrative",
        explanation: "yon/yonder and jener share Proto-Germanic *jēnaz. English keeps yon only in 'yonder'; German kept the bare form. Your room words line up on the map too: dieses Bett (this bed — das Bett, neuter), dieses Fenster (this window) — the ein-family endings decide.",
      },
      {
        id: "l1102_e3",
        type: "derive",
        prompt: "Accusative alert: 'Ich nehme _____ Löffel' (dieser + masculine object):",
        english_hint: "dieser declines like ein: dies + en",
        target_answer: "diesen",
        meaning: "Ich nehme diesen Löffel = I take this spoon",
        explanation: "dieser copies the ein-family: masculine accusative -en (diesen), exactly like einen and keinen — der Löffel pays the same toll.",
      },
      {
        id: "l1102_e4",
        type: "shift_select",
        prompt: "'DER Mann da!' — what does the stressed article do here?",
        options: [
          "It points — the article carries demonstrative force: THAT man there",
          "It marks a question",
          "It is a spelling mistake",
          "It becomes possessive",
        ],
        target_answer: "It points — the article carries demonstrative force: THAT man there",
        meaning: "Stressed der/die/das point like this/that",
        explanation: "Under stress, the plain article resumes its ancient demonstrative job — the/that were one word originally.",
      },
      {
        id: "l1102_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'This chair is good'",
        target_answer: "Dieser Stuhl ist gut",
        meaning: "This chair is good",
        word_bank: ["Dieser", "Stuhl", "ist", "gut", "Teller"],
        explanation: "dieser + masculine der Stuhl — near-distance pointing, verb in position 2. The chair passes inspection.",
      },
    ],
    summary: {
      outcome: "Use dieser and jener across the three-distance map and decline dieser like the ein-family.",
      use_example: { german: "Dieser Stuhl ist gut.", english: "This chair is good." },
      takeaway: "dieser ↔ this, das ↔ that, jener ↔ yon — and stressed der/die/das point again whenever German needs them to.",
      curiosity_teaser: "Next: Possessive Ladders — mein, dein, sein, ihr across the grid, with the KJV 'mine/thine' rule.",
    },
  },
  {
    id: 1201,
    slug: "kein-vs-nicht-choice-gym",
    title: "kein vs nicht Choice Gym",
    subtitle: "Twenty prompts: noun phrases take kein, verbs take nicht",
    phase: 2,
    shift_categories: [],
    word_ids: ["kein", "nicht", "haben", "können", "wissen", "zeit", "haus", "kaffee", "gut"],
    table_word_ids: ["kein", "nicht", "haben", "können", "wissen"],
    hook: {
      title: "The Choice Machine",
      content:
        "Every German negation is a fork: is the sentence killing a THING or an ACTION? Kill the thing — kein: Ich habe kein Haus, keine Zeit, keinen Kaffee. Kill the action — nicht: Ich kann nicht kommen, das ist nicht gut. English uses one not for both; German forces you to name the victim. Twenty prompts today, each a fork. Choose wrong and the explanation shows you what kind of thing you were trying to kill.",
      footnotes: [
        {
          marker: "1",
          title: "The Arithmetic of kein",
          content:
            "kein is 'not one': ni + ein, exactly like English none. So it never appears with actions — you cannot 'not-one' a verb. If there is an ein (or a bare plural noun) in the sentence you are negating, the answer is some form of kein.",
        },
      ],
    },
    pattern: {
      title: "The Fork, Then the Form",
      content:
        "Step one — the fork: negating a noun phrase? kein. Negating a verb, adjective, or adverb? nicht. Step two — the form: kein declines exactly like ein (kein Haus, keine Zeit, keinen Kaffee — Him-Case included). Step three — the place: nicht usually lands right where the action dies, at the end of a simple clause (Ich weiß es nicht), or directly before the word it targets (Das ist nicht gut, nicht heute — 'not today').",
      footnotes: [],
      linguist_note:
        "Full-sentence denials take nicht: 'Nein' negates the whole world of a yes/no answer, nicht negates the verb inside the sentence, and kein negates a noun. Three tools, three targets — English merged them all into one not.",
    },
    exercises: [
      {
        id: "l1201_e1",
        type: "shift_select",
        prompt: "'Ich trinke _____ Kaffee.' (I am not drinking coffee — kill the coffee)",
        options: ["keinen", "nicht", "kein", "keine"],
        target_answer: "keinen",
        meaning: "Ich trinke keinen Kaffee = I am not drinking coffee",
        explanation: "Noun phrase → kein, and der Kaffee is a masculine object: the Him-Case makes it keinen.",
      },
      {
        id: "l1201_e2",
        type: "shift_select",
        prompt: "'Ich kann _____ kommen.' (I cannot come — kill the coming)",
        options: ["nicht", "kein", "keine", "keinen"],
        target_answer: "nicht",
        meaning: "Ich kann nicht kommen = I cannot come",
        explanation: "Verbs take nicht — you cannot 'not-one' an action.",
      },
      {
        id: "l1201_e3",
        type: "shift_select",
        prompt: "'Wir haben _____ Zeit.' (We have no time)",
        options: ["keine", "kein", "nicht", "keinen"],
        target_answer: "keine",
        meaning: "Wir haben keine Zeit = We have no time",
        explanation: "die Zeit is feminine: kein takes -e, exactly like ein → eine.",
      },
      {
        id: "l1201_e4",
        type: "matching_pairs",
        prompt: "Match each negated sentence with its English meaning:",
        matching_pairs: [
          { id: "kc1", english: "I have no house", german: "Ich habe kein Haus" },
          { id: "kc2", english: "I do not know it", german: "Ich weiß es nicht" },
          { id: "kc3", english: "That is not good", german: "Das ist nicht gut" },
          { id: "kc4", english: "I am not getting a coffee", german: "Ich bekomme keinen Kaffee" },
        ],
        target_answer: "Ich habe kein Haus, Ich weiß es nicht, Das ist nicht gut, Ich bekomme keinen Kaffee",
        meaning: "I have no house, I do not know it, that is not good, I am not getting a coffee",
        explanation: "Same fork every time: nouns take kein (declined), verbs and adjectives take nicht.",
      },
      {
        id: "l1201_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'I do not have time'",
        target_answer: "Ich habe keine Zeit",
        meaning: "I have no time / I do not have time",
        word_bank: ["Ich", "habe", "keine", "Zeit"],
        explanation: "English negates the verb ('do not have'); German negates the noun ('no time') — keine Zeit, the honest fork.",
      },
    ],
    summary: {
      outcome: "Choose kein vs nicht instantly and decline kein through all three genders.",
      use_example: { german: "Ich habe keine Zeit.", english: "I have no time." },
      takeaway: "Noun phrases take kein ('not one'), verbs and adjectives take nicht ('no-thing') — name the victim, then pick the weapon.",
      curiosity_teaser: "Next: the nicht position map — where exactly the no-thing lands in the sentence.",
    },
  },
  {
    id: 1301,
    slug: "w-word-cognate-set",
    title: "W-Word Cognate Set",
    subtitle: "All eight W-words matched to their English twins — and the wer≠where trap",
    phase: 2,
    shift_categories: [],
    word_ids: ["was", "wo", "wer", "wann", "wie", "warum", "wohin", "kommen", "gehen", "katze", "hund", "kennen", "tier", "kurz", "laut", "leise", "billig", "nie", "nichts", "niemand"],
    table_word_ids: ["was", "wo", "wer", "wann", "wie", "warum"],
    hook: {
      title: "Eight Words, One Ancient Family",
      content:
        "Here is the full set, laid out on one table: was (what), wo (where), wer (who), wann (when), wie (how/why), warum (wherefore), wohin (whither), and — for the return trip — woher (whence, 'where-from'). English whittled this family down to a handful of survivors; German kept every branch. Both languages spelled the ancient hw- their own way: English wh-, German w-. Which means every German W-word is your own question word, one letter and one dropped h away.",
      footnotes: [
        {
          marker: "1",
          title: "The Missing Eighth Twin",
          content:
            "woher (from where?) is the twin of whence — 'where-from'. WOHER kommst du? asks where you are coming FROM, and WOHIN gehst du? asks where you are going TO. whence/whither, woher/wohin — both languages once kept the full four-way compass.",
        },
      ],
    },
    pattern: {
      title: "The Trap Is Built In",
      content:
        "The trap: WER looks like WHERE but asks WHO. WO looks like WHO (or 'woe') but asks WHERE. The twins are honest — wer ↔ who (one dropped h, an a→e vowel drift), wo ↔ where — but the shapes swapped. Then the drift words: wie covers 'how' (though its root is why's — English split one word into how and why), warum is the wherefore twin, wann is when with the hw- intact as w-. Drill the set until the trap disarms itself: wer=who, wo=where, never crossed.",
      footnotes: [],
      linguist_note:
        "All eight descend from the Proto-Indo-European interrogative *kʷi/*kʷo — the same stem that gave Latin qu- words (quid, quo, quando). English who/what/when/where/why/whether/which and German wer/was/wann/wo/welch are one family tree, split across two alphabets.",
    },
    exercises: [
      {
        id: "l1301_e1",
        type: "matching_pairs",
        prompt: "The full set — match each W-word with its twin:",
        matching_pairs: [
          { id: "ws1", english: "what", german: "was" },
          { id: "ws2", english: "when", german: "wann" },
          { id: "ws3", english: "why / wherefore", german: "warum" },
          { id: "ws4", english: "whither (where to)", german: "wohin" },
          { id: "ws5", english: "where is the dog", german: "wo ist der Hund" },
          { id: "ws6", english: "who knows the animal", german: "wer kennt das Tier" },
          { id: "ws7", english: "how short", german: "wie kurz" },
          { id: "ws8", english: "who never comes", german: "wer kommt nie" },
        ],
        target_answer: "was, wann, warum, wohin, wo ist der Hund, wer kennt das Tier, wie kurz, wer kommt nie",
        meaning: "what, when, why, whither, where is the dog, who knows the animal, how short, who never comes",
        explanation: "One ancient family: English wh-, German w-, one dropped h between them — and the W-words take any verb or noun you own along: kennen (to know a thing or person) included.",
      },
      {
        id: "l1301_e2",
        type: "shift_select",
        prompt: "Trap drill: 'Wer kommt?' — what is being asked?",
        options: ["WHO is coming?", "WHERE is (he) coming?", "WHEN is (he) coming?", "WHY is (he) coming?"],
        target_answer: "WHO is coming?",
        meaning: "wer = WHO, never where",
        explanation: "wer ↔ who: the a→e drift moved the vowel, never the meaning. wo is where; wer is who. And the answer can be nothing at all: Was weißt du? — Nichts.",
      },
      {
        id: "l1301_e3",
        type: "shift_select",
        prompt: "Trap drill, remixed: 'Warum ist das Getränk nicht billig?' — what is being asked?",
        options: ["WHY is the drink not cheap?", "WHERE is the drink not cheap?", "WHO is the drink not cheap?", "WHEN is the drink not cheap?"],
        target_answer: "WHY is the drink not cheap?",
        meaning: "warum = WHY, the wherefore twin",
        explanation: "warum ↔ wherefore — 'for what'. The lookalike trap works in both directions: wo looks like who, warum sounds like warm — the meaning lives in the -um.",
      },
      {
        id: "l1301_e4",
        type: "reverse_cognate",
        prompt: "What archaic English adverb (meaning 'to where') is the twin of 'wohin'?",
        target_answer: "whither",
        meaning: "whither (twin of German wohin)",
        explanation: "whither ↔ wohin — both are 'to where'. English retired the word; German kept it for every departure.",
      },
      {
        id: "l1301_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'How loud is the cat?'",
        target_answer: "Wie laut ist die Katze",
        meaning: "How loud is the cat?",
        word_bank: ["Wie", "laut", "ist", "die", "Katze", "Niemand", "leise"],
        explanation: "W-question, verb second, then the subject — and whatever adjectives you own (laut, leise, kurz, billig) can ride in the wie-slot.",
      },
    ],
    summary: {
      outcome: "Recall all eight W-words with their twins and defeat the wer/wo trap.",
      use_example: { german: "Wie laut ist die Katze?", english: "How loud is the cat?" },
      takeaway: "The W-words are one family — English wh-, German w- — and the trap is structural: wer=who, wo=where.",
      curiosity_teaser: "Next: No-do-support Drills — transform statements into questions with the verb flip alone.",
    },
  },
  {
    id: 1302,
    slug: "no-do-support-drills",
    title: "No-do-support Drills",
    subtitle: "Fifteen questions built with one verb flip — no do, no auxiliary",
    phase: 2,
    shift_categories: [],
    word_ids: ["wissen", "können", "kommen", "haben", "sein", "wann", "wo", "was"],
    table_word_ids: ["wissen", "können", "kommen", "haben", "sein"],
    hook: {
      title: "The Flip English Forgot",
      content:
        "English needs a whole extra verb to ask 'Do you know?'. German needs none: Weißt du? — one flip, subject and verb swap places, question complete. This is not German being fancy; it is the older machinery. Early Modern English still flipped freely — 'Knowest thou?', 'Sawest thou him?' — and only later bolted on do-support. Every German yes/no question is a statement run through a machine English used to own: verb to the front, everything else stays.",
      footnotes: [
        {
          marker: "1",
          title: "The Rise of Do",
          content:
            "Do-support spread through English questions and negations between 1400 and 1700. 'I know it not' became 'I do not know it'; 'Knowest thou?' became 'Do you know?'. German never ran this upgrade — which is why its questions look archaic and are actually just ancient.",
        },
      ],
    },
    pattern: {
      title: "Flip Mechanics",
      content:
        "Statement: Du weißt es. Question: Weißt du es? Statement: Du kannst kommen. Question: Kannst du kommen? Statement: Er ist da. Question: Ist er da? The rule has one clause: the CONJUGATED verb goes to position 1; everything else holds still. W-questions are the same machine with a W-word taking position 1 and the verb demoted to position 2: Wo ist der Kaffee? Wann kommst du? And with modals, the bracket never opens: Kannst du morgen kommen? — flip the modal, keep the bracket.",
      footnotes: [],
      linguist_note:
        "Intonation-only questions exist in German too — 'Du kommst morgen?' with rising pitch, exactly like English. The verb-first form is the neutral, unmarked way; the rising statement is the surprised way.",
    },
    exercises: [
      {
        id: "l1302_e1",
        type: "shift_select",
        prompt: "Flip it: 'Du weißt es' as a yes/no question:",
        options: ["Weißt du es?", "Du weißt es?", "Es weißt du?", "Tust du wissen es?"],
        target_answer: "Weißt du es?",
        meaning: "Do you know it? (Knowest thou it?)",
        explanation: "Verb to position 1, subject second: Weißt du es? The 'tust du' option is the do-support German never grew.",
      },
      {
        id: "l1302_e2",
        type: "matching_pairs",
        prompt: "Match each statement with its flipped question:",
        matching_pairs: [
          { id: "nd1", english: "Kannst du kommen?", german: "Du kannst kommen" },
          { id: "nd2", english: "Ist er da?", german: "Er ist da" },
          { id: "nd3", english: "Hast du Zeit?", german: "Du hast Zeit" },
          { id: "nd4", english: "Kommst du morgen?", german: "Du kommst morgen" },
        ],
        target_answer: "Du kannst kommen, Er ist da, Du hast Zeit, Du kommst morgen",
        meaning: "can you come, is he here, do you have time, are you coming tomorrow",
        explanation: "One flip each: the conjugated verb steps in front of the subject, nothing else moves.",
      },
      {
        id: "l1302_e3",
        type: "derive",
        prompt: "Flip: 'du weißt' → question form:",
        english_hint: "verb first (Knowest thou?)",
        target_answer: "Weißt du",
        meaning: "Weißt du? = Do you know?",
        explanation: "The -st riding in front: Weißt du? — German's Knowest thou?, alive and daily.",
      },
      {
        id: "l1302_e4",
        type: "shift_select",
        prompt: "Which question adds an unnecessary auxiliary German does not have?",
        options: [
          "Tust du morgen kommen? — do-support is not German",
          "Kommst du morgen?",
          "Wann kommst du?",
          "Warum kommst du nicht?",
        ],
        target_answer: "Tust du morgen kommen? — do-support is not German",
        meaning: "German asks with a flip, not with 'do'",
        explanation: "English bolted on do-support; German still flips the bare verb: Kommst du morgen?",
      },
      {
        id: "l1302_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'Do you know where the coffee is?'",
        target_answer: "Weißt du wo der Kaffee ist",
        meaning: "Do you know where the coffee is?",
        vocab_hints: [
          {
            word: "wo",
            translation: "where",
            note: "the embedded question keeps verb-final inside it — der Kaffee ist",
          },
        ],
        word_bank: ["Weißt", "du", "wo", "der", "Kaffee", "ist"],
        explanation: "Flip for the main question (Weißt du) — and the embedded wo-clause quietly parks its verb (ist) at the end.",
      },
    ],
    summary: {
      outcome: "Build yes/no and W-questions with a single verb flip — zero do-support.",
      use_example: { german: "Weißt du, wo der Kaffee ist?", english: "Do you know where the coffee is?" },
      takeaway: "Verb to position 1 for yes/no questions, position 2 after W-words — the flip English retired and German kept.",
      curiosity_teaser: "Next: word order & the subordinate clauses — why weil and dass throw the verb to the very end, like Old English did.",
    },
  },
  {
    id: 1401,
    slug: "verb-second-bootcamp",
    title: "Verb-Second Bootcamp",
    subtitle: "Front adverbs and objects — the verb never leaves position 2",
    phase: 2,
    shift_categories: [],
    word_ids: ["morgen", "wollen", "müssen", "lernen", "kommen", "trinken", "buch", "haus"],
    table_word_ids: ["morgen", "wollen", "müssen", "lernen", "kommen"],
    hook: {
      title: "The Glued Verb",
      content:
        "German main clauses have one load-bearing wall: the conjugated verb sits in position 2. You may front anything — Morgen lerne ich Deutsch. Das Buch lese ich. Heute wandern wir. — but the verb does not budge. Front the adverb and the subject slides right; front the object and it slides again. The wall never moves. English speakers feel this as 'weird word order'; feel it instead as what it is — the same V2 habit Old English verse used ('Hwæt! We Gar-Dena...'), still standing in German.",
      footnotes: [
        {
          marker: "1",
          title: "V2 Is the Germanic Default",
          content:
            "All the old Germanic languages ran verb-second in main clauses. English lost it; German, Dutch, and the Scandinavian languages kept it. Yoda's 'Much to learn, you still have' accidentally speaks better Old English than modern English does.",
        },
      ],
    },
    pattern: {
      title: "Front Anything, Move Nothing Else",
      content:
        "Neutral: Ich lerne morgen Deutsch. Fronted time: Morgen lerne ich Deutsch — verb glued at 2, subject slides to 3. Fronted object: Das Buch lese ich heute — same glue. Fronted place: Im Hause? no — Im Haus lerne ich — same glue. The subject must still appear somewhere: if it is not in position 1, it lands immediately after the verb. One warning pair: Ich will... (modal in 2, infinitive at the end) versus Willst du...? (flipped question) — both keep the verb in the wall.",
      footnotes: [],
      linguist_note:
        "Adverb order inside the sentence follows the famous TeKaMoLo guideline — Time, Cause, Manner, Place — but at your level one adverb at a time is plenty: Morgen lerne ich. Heute trinken wir.",
    },
    exercises: [
      {
        id: "l1401_e1",
        type: "shift_select",
        prompt: "Front the time: which is correct German?",
        options: [
          "Morgen lerne ich Deutsch",
          "Morgen ich lerne Deutsch",
          "Morgen Deutsch ich lerne",
          "Ich morgen lerne Deutsch",
        ],
        target_answer: "Morgen lerne ich Deutsch",
        meaning: "Tomorrow I am learning German",
        explanation: "Position 1 = Morgen, so the verb holds position 2 and the subject slides to third.",
      },
      {
        id: "l1401_e2",
        type: "matching_pairs",
        prompt: "Match each fronted sentence with its English meaning:",
        matching_pairs: [
          { id: "vb1", english: "Today we drink tea", german: "Heute trinken wir Tee" },
          { id: "vb2", english: "Tomorrow I am coming", german: "Morgen komme ich" },
          { id: "vb3", english: "The book I am reading", german: "Das Buch lese ich" },
          { id: "vb4", english: "Now we must go? — no: now we walk", german: "Jetzt wandern wir" },
        ],
        target_answer: "Heute trinken wir Tee, Morgen komme ich, Das Buch lese ich, Jetzt wandern wir",
        meaning: "today we drink tea, tomorrow I am coming, the book I am reading, now we hike",
        explanation: "Anything can take position 1 — the verb answers from position 2 every time.",
      },
      {
        id: "l1401_e3",
        type: "derive",
        prompt: "Reorder into neutral order: 'Morgen komme ich' with the subject first:",
        english_hint: "ich + komme + morgen",
        target_answer: "Ich komme morgen",
        meaning: "I am coming tomorrow",
        explanation: "Neutral order: subject first, verb second, time word third. Fronting Morgen just reshuffles around the glued verb.",
      },
      {
        id: "l1401_e4",
        type: "shift_select",
        prompt: "With a modal and a fronted time word: 'Morgen _____ ich schwimmen.'",
        options: ["will", "ich will", "wollen", "willst"],
        target_answer: "will",
        meaning: "Morgen will ich schwimmen — Tomorrow I want to swim",
        explanation: "Morgen takes 1, the conjugated modal holds 2 (ich slides to 3), and schwimmen still closes the bracket.",
      },
      {
        id: "l1401_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'Tomorrow we want to learn German'",
        target_answer: "Morgen wollen wir Deutsch lernen",
        meaning: "Tomorrow we want to learn German",
        word_bank: ["Morgen", "wollen", "wir", "Deutsch", "lernen"],
        explanation: "Morgen (1), wollen (2), wir (3), contents inside, lernen closes — V2 and the bracket in one sentence.",
      },
    ],
    summary: {
      outcome: "Front adverbs and objects while keeping the conjugated verb in position 2.",
      use_example: { german: "Morgen wollen wir Deutsch lernen.", english: "Tomorrow we want to learn German." },
      takeaway: "Front anything you like — the verb stays glued to position 2 and the subject slides in right behind it.",
      curiosity_teaser: "Next: weil & dass — the subclause doors where the verb finally leaves position 2 and waits in the basement.",
    },
  },
  {
    id: 1402,
    slug: "weil-and-dass-the-verb-waits",
    title: "weil & dass: the Verb Waits",
    subtitle: "Twelve subclauses built on the two doors — verb-final, every time",
    phase: 2,
    shift_categories: [],
    word_ids: ["weil", "dass", "wissen", "können", "müssen", "kommen", "lernen", "wandern", "weiß", "traurig", "angst", "hoffnung", "dunkel", "sorge", "gleich", "meinung", "katze", "hund", "kennen", "tier"],
    table_word_ids: ["weil", "dass", "wissen", "müssen", "kommen"],
    hook: {
      title: "Two Doors, One Basement",
      content:
        "Open a subclause with weil (because) or dass (that) and the conjugated verb walks to the very end of the clause and waits there. Ich lerne Deutsch, weil ich will — 'because I want-to'. Ich weiß, dass du kommst — 'that you coming-are'. This is the same verb-final habit Old English subordinate clauses loved, and German never abandoned it. weil is your while (same ancient word, new job), dass is your that — so the two doors are made of English wood; only the basement rule is new.",
      footnotes: [
        {
          marker: "1",
          title: "Spoken German's weil Rule",
          content:
            "Colloquially, many Germans say weil with main-clause order — '...weil ich bin müde'. You will hear it everywhere; the written standard still wants the verb in the basement. Learn the standard, recognize the street version.",
        },
      ],
    },
    pattern: {
      title: "Build the Basement",
      content:
        "Main clause first, verb in position 2: Ich weiß. Ich lerne. Then the door + subclause, verb last: ...dass du kommst. ...weil ich wandern will — watch that one: the modal will takes the very end and its infinitive wandern waits just before it, so the basement stacks: ...weil ich wandern will. Contrast the two architectures side by side: Ich kann nicht kommen (bracket) versus ..., weil ich nicht kommen kann (basement, kann at the end). Same words, different floor plan.",
      footnotes: [],
      linguist_note:
        "dass is the doublet of das — Old High German daȥ, Old English þæt, one word. The spelling split is purely orthographic convention, a fact the German Duden itself states.",
    },
    exercises: [
      {
        id: "l1402_e1",
        type: "matching_pairs",
        prompt: "Match each subclause sentence with its English meaning:",
        matching_pairs: [
          { id: "wd1", english: "I know that you are coming", german: "Ich weiß, dass du kommst" },
          { id: "wd2", english: "I am learning because I want to", german: "Ich lerne, weil ich will" },
          { id: "wd3", english: "I know that the dog is dark", german: "Ich weiß, dass der Hund dunkel ist" },
          { id: "wd4", english: "I am learning because I am sad", german: "Ich lerne, weil ich traurig bin" },
          { id: "wd5", english: "She knows that I know the cat", german: "Sie weiß, dass ich die Katze kenne" },
          { id: "wd6", english: "I am learning, because I have hope", german: "Ich lerne, weil ich Hoffnung habe" },
          { id: "wd7", english: "I know that he is coming right away", german: "Ich weiß, dass er gleich kommt" },
          { id: "wd8", english: "I know your opinion, because I know you", german: "Ich kenne deine Meinung, weil ich dich kenne" },
        ],
        target_answer: "Ich weiß, dass du kommst, Ich lerne, weil ich will, Ich weiß, dass der Hund dunkel ist, Ich lerne, weil ich traurig bin, Sie weiß, dass ich die Katze kenne, Ich lerne, weil ich Hoffnung habe, Ich weiß, dass er gleich kommt, Ich kenne deine Meinung, weil ich dich kenne",
        meaning: "I know that you are coming, I am learning because I want to, I know that the dog is dark, I am learning because I am sad, she knows that I know the cat, I am learning because I have hope, I know that he is coming right away, I know your opinion because I know you",
        explanation: "After weil and dass the conjugated verb waits at the very end of its clause — the basement rule. kennen knows people and things; wissen knows facts — both work the doors.",
      },
      {
        id: "l1402_e2",
        type: "shift_select",
        prompt: "Complete the basement: 'Ich weiß, dass du Deutsch _____.' (lernen, du-form)",
        options: ["lernst", "du lernst", "lerne", "zu lernen"],
        target_answer: "lernst",
        meaning: "Ich weiß, dass du Deutsch lernst",
        explanation: "The subclause already has its subject (du), so only the verb lands at the end: lernst. Sorge has a seat too: Ich weiß, dass du Sorge hast — hast waits at the basement door.",
      },
      {
        id: "l1402_e3",
        type: "shift_select",
        prompt: "Which sentence keeps MAIN-clause order after weil — the colloquial street version?",
        options: [
          "..., weil ich bin müde (spoken style)",
          "..., weil ich müde bin (standard)",
          "Both are identical",
          "Neither is real German",
        ],
        target_answer: "..., weil ich bin müde (spoken style)",
        meaning: "Colloquial weil often keeps verb-second",
        explanation: "The standard wants müde bin (basement); street German often says bin müde. Understand both, write the standard.",
      },
      {
        id: "l1402_e4",
        type: "derive",
        prompt: "Stack the basement: '..., weil ich wandern _____' (want, ich-form, very last word):",
        english_hint: "the modal takes the last slot, infinitive just before it",
        target_answer: "will",
        meaning: "..., weil ich wandern will = ...because I want to hike",
        explanation: "The basement stacks: infinitive wandern, then the modal will at the very end — two verbs, one exit.",
      },
      {
        id: "l1402_e5",
        type: "literal_gloss",
        prompt: "Which English is built the German way?",
        german: "Ich weiß, dass er Angst hat.",
        natural: "I know that he is afraid.",
        options: ["I know that he is afraid.", "I know that he fear has.", "I know that fear he has."],
        target_answer: "I know that he fear has.",
        meaning: "I know that he is afraid.",
        explanation: "Read it the German way: 'I know that he fear has.' The verb hat waits in the basement of the dass-clause — and Angst is English's own loanword: fear with a German passport.",
      },
    ],
    summary: {
      outcome: "Build weil and dass subclauses with verb-final order, including stacked modals.",
      use_example: { german: "Ich weiß, dass du morgen kommst.", english: "I know that you are coming tomorrow." },
      takeaway: "weil and dass open the basement: the conjugated verb waits at the very end — Old English's habit, German's law.",
      curiosity_teaser: "Next: zu + infinitive ladders — Ich habe vor, Deutsch zu lernen: the bracket with a zu-glue.",
    },
  },
  {
    id: 17,
    slug: "numbers-time-and-gestern",
    title: "Numbers, Time & gestern",
    subtitle: "Counting is a shift spiral: drei↔three, zwanzig↔twenty, dreißig↔thirty",
    phase: 3,
    shift_categories: ["t_to_s_ss_z"],
    word_ids: ["drei", "zwei", "zwanzig", "elf", "zwölf", "dreißig", "morgen", "heute", "gestern", "uhr", "donner", "woche"],
    table_word_ids: ["drei", "zwei", "zwanzig", "elf", "zwölf", "dreißig"],
    hook: {
      title: "The Counting Spiral",
      content:
        "Numbers look like the least poetic words in any language — and German numbers are secretly the whole curriculum in miniature. drei is three (TH→D). zwanzig is twenty (TW→ZW). dreißig is thirty (TH→D and T→ß in one word — a double-shift number). elf is eleven — both from 'one left over' after ten. And the time words keep spiraling: gestern ↔ yesterday (the y- and g- are one letter in two fonts), heute is 'on this day' (the heu- is the he- of here), morgen the morrow of to-morrow. You have been counting German since childhood — today you just get the credit.",
      footnotes: [
        {
          marker: "1",
          title: "The 'Left Over' Numbers",
          content:
            "Eleven and twelve are the most honest numbers in Germanic: *ainalif 'one-left' and *twalif 'two-left' — what remains when you have counted up to ten on both hands. German elf and zwölf keep the arithmetic visible; English eleven and twelve wore it smooth.",
        },
      ],
    },
    pattern: {
      title: "Count, Tell Time, Name the Day",
      content:
        "Counting: drei, vier, fünf, sechs, sieben (seven, v→b), acht (eight, the gh→ch word), neun, zehn — the middle ones (vier, fünf, sechs, neun, zehn) arrive as vocab hints today and formal cognates later. Bigger: zwanzig (twenty), dreißig (thirty — note the ß: thirty is the one number that spelled its shift), elf (eleven), zwölf (twelve). Compound numbers put the ones first, like archaic English 'five-and-twenty': dreiundzwanzig. Time: Es ist drei Uhr — Uhr is the loan-twin of hour. Days wear the shift: Donnerstag (thunder-day), Mittwoch (mid-week), and the calendar trio gestern — heute — morgen runs yesterday–today–tomorrow with every pair a cognate.",
      footnotes: [],
      linguist_note:
        "gestern and yesterday are the same y→g word: English yester- survives only in yesterday and yesteryear, while German gestern stayed in daily use. The g of gestern is exactly the g of sagen (say) — English vocalized it, German kept it.",
    },
    exercises: [
      {
        id: "l17_e1",
        type: "matching_pairs",
        prompt: "Match the shifted numbers with their English twins:",
        matching_pairs: [
          { id: "nt1", english: "three", german: "drei" },
          { id: "nt2", english: "twelve", german: "zwölf" },
          { id: "nt3", english: "twenty", german: "zwanzig" },
          { id: "nt4", english: "thirty", german: "dreißig" },
        ],
        target_answer: "drei, zwölf, zwanzig, dreißig",
        meaning: "three, twelve, twenty, thirty",
        explanation: "TH→D in drei, TW→ZW in zwölf and zwanzig, and a double shift in dreißig — counting runs the whole shift ledger. Even moving day runs on numbers: um acht Uhr wollen wir ausziehen — the separable verb from the routine lessons rides the clock.",
      },
      {
        id: "l17_e2",
        type: "shift_select",
        prompt: "German 'elf' means eleven. What did the word originally describe?",
        options: [
          "One left over (after counting all ten fingers)",
          "The magical forest creature",
          "A dozen minus one",
          "The number of Thor's goats",
        ],
        target_answer: "One left over (after counting all ten fingers)",
        meaning: "elf = 'one-left' (eleven)",
        explanation: "*ainalif, 'one left' — and zwölf is *twalif, 'two left'. The numbers are honest arithmetic from ten fingers.",
      },
      {
        id: "l17_e3",
        type: "shift_select",
        prompt: "How do Germans say 23?",
        options: ["dreiundzwanzig (three-and-twenty)", "zwanzigdrei (twenty-three)", "drei zwanzig separate", "drei-und-zwanzig with hyphens"],
        target_answer: "dreiundzwanzig (three-and-twenty)",
        meaning: "23 = dreiundzwanzig — ones first",
        explanation: "German compounds ones before tens, the way archaic English said 'five-and-twenty' — one word, no hyphens.",
      },
      {
        id: "l17_e4",
        type: "reverse_cognate",
        prompt: "What English time word is the twin of 'gestern'?",
        target_answer: "yesterday",
        meaning: "yesterday (yester- ↔ gestern)",
        explanation: "gestern ↔ yester-: the same word with y→g. English retired it into 'yesterday'; German kept it standalone.",
      },
      {
        id: "l17_e5",
        type: "transcribe",
        prompt: "You want to say:",
        idea: "someone stops you on the street and asks the time: it is three o'clock",
        cues: [
          "The clock formula is a twin sandwich: es ↔ it, ist ↔ is, drei ↔ three, Uhr ↔ hour — Es ist drei Uhr",
        ],
        target_answer: "Es ist drei Uhr",
        meaning: "It is three o'clock",
        affirmation: "You built the clock sentence from four twins — es, ist, drei, Uhr: English with a German accent.",
        vocab_hints: [
          {
            word: "Uhr",
            translation: "clock / o'clock",
            note: "loan-twin of hour; o'clock is literally 'of the clock'",
          },
        ],
        word_bank: ["Es", "ist", "drei", "Uhr", "zwölf", "heute"],
        explanation: "Es ist drei Uhr — the es ↔ it twin opening the clock formula, built from a thought.",
      },
    ],
    summary: {
      outcome: "Count to 30+, tell clock time, and use the gestern–heute–morgen calendar trio.",
      use_example: { german: "Es ist drei Uhr.", english: "It is three o'clock." },
      takeaway: "Numbers carry the whole shift ledger — drei, zwölf, zwanzig, dreißig — and the time words are pure cognates.",
      curiosity_teaser: "Next: the counting cognates gym — phone numbers, prices, ages, and the elf≠elf trap.",
    },
    twist: {
      prompt: "Same clock, lunchtime: it is three o'clock becomes it is TWELVE o'clock. (The number carries the shift ledger.)",
      target_answer: "Es ist zwölf Uhr",
      word_bank: ["Es", "ist", "zwölf", "drei", "Uhr"],
      explanation: "Only the number changes: zwölf is your twelve in shift clothes (the tw → zw opener from the early trail). The clock formula never moves.",
    },
  },
  {
    id: 18,
    slug: "conversational-past-perfekt",
    title: "The Conversational Past (Perfekt)",
    subtitle: "ge- is the old y- (yclept): spoken past with haben/sein + participle at the end",
    phase: 3,
    shift_categories: [],
    word_ids: ["haben", "sein", "genug", "machen", "sagen", "kommen", "gehen", "essen", "ankommen", "buchen", "hundert", "minute", "zählen", "wochenende", "sommer", "winter"],
    table_word_ids: ["machen", "sagen", "kommen", "gehen", "haben", "sein"],
    hook: {
      title: "The y- You Still Say",
      content:
        "Chaucer's English stamped its past participles with y-: yclept ('called'), ybounden, ywis ('certainly'). That y- is German ge- — the same ancient prefix, one sound-shift apart. English threw the prefix away almost everywhere... except one word you said this week: enough. Genug is literally ge- + the root of enough — the everyday word where England's ancient participle prefix still lives. Today you build the spoken past with it: haben or sein in position 2, participle closing the bracket — Ich habe es gemacht, Ich bin gekommen.",
      footnotes: [
        {
          marker: "1",
          title: "yclept, ywis, genug",
          content:
            "Old English ge- weakened to y-/i- in Middle English (yclept = y- + cleopod, 'called'). The prefix then died — but 'enough' (OE ġenōg, ge- + the root) kept its unstressed y- as a plain e-. Genug and enough are the same word, prefix and all.",
        },
      ],
    },
    pattern: {
      title: "The Bracket Goes to the Past",
      content:
        "Weak verbs (the regulars) build the participle ge- + stem + -t: gemacht, gesagt, gespielt, gelernt. Strong verbs (your ablaut family) build ge- + stem + -en with the vowel changed: gekommen, gegangen, getrunken, gegessen. Choose the auxiliary by meaning: have something DONE → haben (Ich habe gegessen); GO somewhere yourself → sein (Ich bin gekommen, Wir sind gegangen). The -ieren verbs from topic 8 keep their no-ge- privilege: studiert, never gestudiert — and so do ver- verbs: verstanden. Everything lands in the bracket you already own: Ich habe gestern Deutsch gelernt.",
      footnotes: [],
      linguist_note:
        "The spoken Perfekt has almost fully replaced the simple past in southern German and colloquial speech — Germans say ich habe gesagt where they once said ich sagte. English did the reverse with 'have said' → 'said'. Two siblings, opposite drifts.",
    },
    exercises: [
      {
        id: "l18_e1",
        type: "matching_pairs",
        prompt: "Match each participle with its English twin:",
        matching_pairs: [
          { id: "pf1", english: "made", german: "gemacht" },
          { id: "pf2", english: "said", german: "gesagt" },
          { id: "pf3", english: "come", german: "gekommen" },
          { id: "pf4", english: "gone", german: "gegangen" },
          { id: "pf5", english: "arrived", german: "angekommen" },
          { id: "pf6", english: "booked", german: "gebucht" },
        ],
        target_answer: "gemacht, gesagt, gekommen, gegangen, angekommen, gebucht",
        meaning: "made, said, come, gone, arrived, booked",
        explanation: "Weak participles wear ge- + -t; strong ones change the vowel and wear ge- + -en — the same split English shows in made vs come. Separable verbs stack the prefix back on top: an + gekommen.",
      },
      {
        id: "l18_e2",
        type: "shift_select",
        prompt: "What did the ancient prefix ge- sound like in Middle English?",
        options: ["y- (as in yclept and ywis)", "g- (as in go)", "It never existed in English", "ch- (as in church)"],
        target_answer: "y- (as in yclept and ywis)",
        meaning: "ge- ↔ y- — the participle prefix connection",
        explanation: "OE ge- weakened to y- in Middle English (yclept = 'called'). German ge- is the unweakened survivor — and genug/enough keeps the fossil in both. The calendar loves the bracket too: im Sommer, im Winter, am Wochenende — every calendar word opens a Perfekt story.",
      },
      {
        id: "l18_e3",
        type: "morpheme_tiles",
        prompt: "Build the participle of 'zählen' (tale's twin — count your Minuten by the Minute):",
        tile_options: ["ge", "zählt", "st", "en", "zähl"],
        target_answer: "gezählt",
        meaning: "counted",
        explanation: "ge- + zähl + t = gezählt: the weak participle formula on the counting verb — zählen is the twin of tale, and tell a tale once meant count a tale.",
      },
      {
        id: "l18_e4",
        type: "derive",
        prompt: "Build the participle of 'ankommen' (mind the separable prefix):",
        english_hint: "an + ge + komm + en",
        target_answer: "angekommen",
        meaning: "angekommen = arrived (sein!)",
        explanation: "Separable verbs stack: prefix an + ge- + stem + en — the prefix flies back for the participle. And ankommen moves the body: Ich bin angekommen.",
      },
      {
        id: "l18_e5",
        type: "transcribe",
        prompt: "Put into German:",
        idea: "you're telling a friend about last night's study session: you learned German yesterday",
        cues: [
          "haben opens, the participle closes: ich habe ... gelernt — ge- + lern + t",
        ],
        target_answer: "Ich habe gestern Deutsch gelernt",
        meaning: "I learned German yesterday",
        word_bank: ["Ich", "habe", "gestern", "Deutsch", "gelernt", "bin"],
        explanation: "haben opens the bracket, the participle gelernt closes it — the spoken past is your modal frame wearing ge-.",
        diagnosis: {
          slip: "the helper was chosen by translation, not by motion",
          cue: "haben for things you do (gelernt), sein for movement and change (gekommen). Ask: did the body move?",
        },
      },
    ],
    summary: {
      outcome: "Form weak and strong participles and tell yesterday's story in the Perfekt bracket.",
      use_example: { german: "Ich habe gestern Deutsch gelernt.", english: "I learned German yesterday." },
      takeaway: "ge- is the y- of yclept (genug = enough!), haben/sein opens the bracket, the participle closes it.",
      curiosity_teaser: "Next: Strong Verbs & Ancient Ablaut — sing/sang/sung ↔ singen/sang/gesungen: the vowel melody both languages kept.",
    },
    twist: {
      prompt: "Different verb, different helper: I learned German yesterday becomes I CAME yesterday. (Movement picks sein.)",
      target_answer: "Ich bin gestern gekommen",
      word_bank: ["Ich", "bin", "habe", "gestern", "gekommen", "gelernt"],
      explanation: "kommen moves the body, so sein opens the bracket and gekommen closes it — the same y-/ge- prefix, a different helper. You just told yesterday's story twice.",
    },
  },
  {
    id: 1701,
    slug: "counting-cognates-gym",
    title: "Counting Cognates Gym",
    subtitle: "Phone numbers, prices, ages — and the elf ≠ elf trap",
    phase: 3,
    shift_categories: ["t_to_s_ss_z"],
    word_ids: ["zwei", "drei", "zwanzig", "elf", "zwölf", "dreißig", "uhr", "sieben", "acht", "hundert", "minute", "zählen"],
    table_word_ids: ["zwei", "drei", "zwanzig", "elf", "zwölf", "dreißig"],
    hook: {
      title: "Numbers in the Wild",
      content:
        "You own the shift-ledger numbers — now spend them. Prices: Das kostet zwölf Euro. Ages: Ich bin dreißig. Time: Es ist acht Uhr. Phone numbers, read digit by digit: zwei–null–eins... And the trap that snags every learner at once: elf means eleven — but there is also die Elfe, the fairy, a modern borrowing from English elf. Same letters, different words, different genders. In the wild, context decides; in this gym, reps decide.",
      footnotes: [
        {
          marker: "1",
          title: "Zwo — the Anti-Mishear",
          content:
            "On the phone and in radio traffic, Germans often say zwo for zwei — because zwei and drei differ by one sound and mix-ups cost lives on the autobahn. Pilots and the Bundeswehr say zwo too. two got a stunt double.",
        },
      ],
    },
    pattern: {
      title: "Spend the Numbers",
      content:
        "Prices: Das kostet zwanzig Euro — Euro is the same word in both languages. Ages: Ich bin dreißig Jahre alt (Jahre — year, the distant cousin of Uhr via the same PIE root). Clock: Es ist sieben Uhr — sieben is the v→b twin of seven, acht the gh→ch twin of eight. Compound numbers: einundzwanzig (21, where 'one' becomes ein-), zweiundzwanzig, dreiundzwanzig — the ones ALWAYS lead, reading like 'three-and-twenty'.",
      footnotes: [],
      linguist_note:
        "The ein- of einundzwanzig shows the ein-family doing number duty — the same ein as 'one/a'. English 'one' and German ein are twins; the article was always a number that got tired of counting.",
    },
    exercises: [
      {
        id: "l1701_e1",
        type: "matching_pairs",
        prompt: "Match the number words with their English twins:",
        matching_pairs: [
          { id: "cc1", english: "seven", german: "sieben" },
          { id: "cc2", english: "eight", german: "acht" },
          { id: "cc3", english: "eleven", german: "elf" },
          { id: "cc4", english: "thirty", german: "dreißig" },
          { id: "cc5", english: "hundred", german: "hundert" },
        ],
        target_answer: "sieben, acht, elf, dreißig, hundert",
        meaning: "seven, eight, eleven, thirty, hundred",
        explanation: "seven's v hardened to b, eight's gh became ch, elf kept its 'one-left', dreißig double-shifted — and the counting verb counts itself in: zählen, tale's twin, zählt die Zeit und bis hundert.",
      },
      {
        id: "l1701_e2",
        type: "shift_select",
        prompt: "Trap check: 'Die Elfe tanzt im Garten.' What is dancing?",
        options: ["A fairy (die Elfe — the borrowed creature-word)", "The number eleven", "An eleven-person dance", "A clock"],
        target_answer: "A fairy (die Elfe — the borrowed creature-word)",
        meaning: "elf (number) ≠ die Elfe (fairy)",
        explanation: "The number elf has no article; the fairy die Elfe was borrowed from English 'elf' in the 18th century. Context and article decide.",
      },
      {
        id: "l1701_e3",
        type: "morpheme_tiles",
        prompt: "Build 23 the German way (ones first):",
        tile_options: ["drei", "und", "zwanzig", "dreißig", "zwei"],
        target_answer: "dreiundzwanzig",
        meaning: "twenty-three",
        explanation: "drei + und + zwanzig — 'three-and-twenty', the archaic English order, written as one word. Minutes follow the same arithmetic: eine Minute, zwanzig Minuten — one always leads the line.",
      },
      {
        id: "l1701_e4",
        type: "derive",
        prompt: "Say your age: 'Ich bin _____.' (30):",
        english_hint: "the double-shift number with the ß",
        target_answer: "dreißig",
        meaning: "Ich bin dreißig = I am thirty",
        explanation: "dreißig — drei's th→d plus thirty's t→ß. The only number that spelled its shift. Moving day runs on the clock too: um acht Uhr wollen wir ausziehen.",
      },
      {
        id: "l1701_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'The bus costs twenty euros'",
        target_answer: "Der Bus kostet zwanzig Euro",
        meaning: "The bus costs twenty euros",
        vocab_hints: [
          {
            word: "kostet",
            translation: "costs (er/es form)",
            note: "die Kosten — the costs; the -et is the er-form ending on a stem that ends in -t",
          },
        ],
        word_bank: ["Der", "Bus", "kostet", "zwanzig", "Euro"],
        explanation: "Verb in position 2, price at the end: 'Der Bus kostet zwanzig Euro' — der Bus and Euro are your free cognates.",
      },
    ],
    summary: {
      outcome: "Use numbers for prices, ages, clock time — and survive the elf/Elfe trap.",
      use_example: { german: "Der Bus kostet zwanzig Euro.", english: "The bus costs twenty euros." },
      takeaway: "Numbers are shift-ledger words — and German says 23 as 'three-and-twenty', ones first, always.",
      curiosity_teaser: "Next: Days of Thunder — the weekday etymologies of Donner, Mitte and Sonne in one calendar.",
    },
  },
  {
    id: 19,
    slug: "strong-verbs-ancient-ablaut",
    title: "Strong Verbs & Ancient Ablaut",
    subtitle: "sing/sang/sung ↔ singen/sang/gesungen — the vowel melody, not endings",
    phase: 3,
    shift_categories: ["strong_verbs_ablaut"],
    word_ids: ["singen", "trinken", "finden", "geben", "nehmen", "fahren", "schreiben", "kommen", "sprechen", "schlafen", "blasen", "frieren", "tragen", "fliegen"],
    table_word_ids: ["singen", "trinken", "finden", "geben", "fahren", "sprechen"],
    hook: {
      title: "The Vowel Melody",
      content:
        "English never announces its irregular verbs with endings — it changes the VOWEL: sing, sang, sung. drink, drank, drunk. So does German, with the exact same vowels: singen, sang, gesungen. trinken, trank, getrunken. This is ablaut — the ancient Indo-European system of grading the root vowel — and it is the strongest proof of siblinghood in the entire language: nobody learns sing/sang/sung from a rule; both languages inherited the melody whole. The lesson is not memorization. It is hearing that you already know the tune.",
      footnotes: [
        {
          marker: "1",
          title: "Strong Does Not Mean Difficult",
          content:
            "'Strong' verbs (starke Verben) are the old Germanic verbs that form the past by vowel change; 'weak' verbs are the newer ones that added a -t/-te ending (English's -ed). The strong ones are a closed club — no new members — and you already belong: sing, drink, find, give, speak, come, take are all ancient members, and each has its German twin inside.",
        },
      ],
    },
    pattern: {
      title: "Hear the Family, Then the Class",
      content:
        "The e→i / a / o families: geben, gab, gegeben ↔ give, gave, given. sprechen, sprach, gesprochen ↔ speak, spoke, spoken. nehmen, nahm, genommen — its melody matches come/came (nehmen's true English twin is archaic nim, the word inside nimble). The a-families: finden, fand, gefunden ↔ find, found — the same class again. trinken, trank, getrunken ↔ drink, drank, drunk, vowel for vowel. The long families: fahren, fuhr, gefahren ↔ fare, fared — and schreiben, schrieb, geschrieben, the scribe family with its own strong melody. Every strong verb you own in English has a German twin singing the same three notes.",
      footnotes: [],
      linguist_note:
        "The classes go back to seven Proto-Germanic Ablaut classes (Wright's grammar catalogs them all). You do not need the numbering — you need the reflex: strong past = change the vowel, and ge- + -en for the participle (getrunken, geschrieben, gefahren).",
    },
    exercises: [
      {
        id: "l19_e1",
        type: "matching_pairs",
        prompt: "Match each English ablaut melody with its German twin:",
        matching_pairs: [
          { id: "ab1", english: "sing / sang / sung", german: "singen / sang / gesungen" },
          { id: "ab2", english: "drink / drank / drunk", german: "trinken / trank / getrunken" },
          { id: "ab3", english: "find / found", german: "finden / fand" },
          { id: "ab4", english: "give / gave / given", german: "geben / gab / gegeben" },
          { id: "ab5", english: "blow / blew / blown", german: "blasen / blies / geblasen" },
          { id: "ab6", english: "freeze / froze / frozen", german: "frieren / fror / gefroren" },
        ],
        target_answer: "singen / sang / gesungen, trinken / trank / getrunken, finden / fand, geben / gab / gegeben, blasen / blies / geblasen, frieren / fror / gefroren",
        meaning: "the sing, drink, find, give, blow, and freeze melodies",
        explanation: "The same three-note melody in both languages — ablaut is shared inheritance, not coincidence.",
      },
      {
        id: "l19_e2",
        type: "shift_select",
        prompt: "What changes when a strong verb goes into the past?",
        options: [
          "The root vowel — the ending stays out of it",
          "A -te ending is added, like weak verbs",
          "The final consonant shifts",
          "The whole stem is replaced with a new word",
        ],
        target_answer: "The root vowel — the ending stays out of it",
        meaning: "Strong past = vowel change (ablaut)",
        explanation: "singen → sang, trinken → trank: the vowel sings the tune. Endings belong to the weak (regular) system only. tragen and fliegen hum along: trug (wore), flog (flew) — the vowel IS the past tense.",
      },
      {
        id: "l19_e3",
        type: "morpheme_tiles",
        prompt: "Build the participle of 'finden' (the found-family):",
        tile_options: ["ge", "fund", "en", "t", "fand"],
        target_answer: "gefunden",
        meaning: "found",
        explanation: "Strong participle: ge- + changed vowel + -en. fand's vowel u-pops into gefunden — exactly like found's ou.",
      },
      {
        id: "l19_e4",
        type: "derive",
        prompt: "Sing the melody: 'geben' in the ich-past →",
        english_hint: "give / gave — the same note",
        target_answer: "gab",
        meaning: "ich gab = I gave",
        explanation: "geben, gab, gegeben — the give/gave/given melody, vowel for vowel.",
      },
      {
        id: "l19_e5",
        type: "transcribe",
        prompt: "Tell me:",
        idea: "you've been looking everywhere for the book — and you can finally announce: you have found the book",
        cues: [
          "Strong verb, three notes: finden, fand, gefunden — the melody's third note closes the bracket",
        ],
        target_answer: "Ich habe das Buch gefunden",
        meaning: "I have found the book",
        affirmation: "You kept the melody's third note — gefunden closes the bracket the way sung closes 'have sung'.",
        word_bank: ["Ich", "habe", "das", "Buch", "gefunden", "fand"],
        explanation: "Strong participle gefunden closes the Perfekt bracket: 'habe' opens, the melody's third note lands last.",
      },
    ],
    summary: {
      outcome: "Recognize the shared ablaut melodies and form strong pasts and participles.",
      use_example: { german: "Ich habe das Buch gefunden.", english: "I have found the book." },
      takeaway: "Strong verbs change the root vowel — sing/sang ↔ singen/sang — and wear ge- + -en as participles.",
      curiosity_teaser: "Next: sing/sang/sung Mirrors — map fourteen English irregulars onto their German ablauf pairs.",
    },
    twist: {
      prompt: "Now ask it: you have found the book → HAVE you found the book? (The helper flips to position 1.)",
      target_answer: "Hast du das Buch gefunden",
      word_bank: ["Hast", "habe", "du", "das", "Buch", "gefunden"],
      explanation: "In a question the helper haben takes position 1 and the subject follows — the participle still closes the bracket. Hast is the thou-form: 'Hast thou...?' was English once.",
    },
  },
  {
    id: 20,
    slug: "the-dative-case",
    title: "The Dative Case",
    subtitle: "The giving case: mir↔me, dir↔thee, ihm↔him — and the methinks fossils",
    phase: 3,
    shift_categories: [],
    word_ids: ["mir", "dir", "ihm", "mit", "bei", "helfen", "danken", "gefallen", "geben"],
    table_word_ids: ["mir", "dir", "ihm", "helfen", "danken", "mit"],
    hook: {
      title: "The Case of the Receiver",
      content:
        "The accusative marks what gets acted on. The dative marks who gets the result — the receiver. Ich gebe ihm das Buch: I give the book TO HIM. English once wore this case openly: 'Give it ME' (the archaic British phrasing), 'methinks' ('it thinks TO ME'), 'I give it THEE'. German never stopped: mir (to me), dir (to thee), ihm (to him) — each one a twin of an English fossil. And a whole club of German verbs demands the dative: helfen, danken, gefallen. You do not 'help someone' in German — you help TO someone.",
      footnotes: [
        {
          marker: "1",
          title: "Methinks, the Dative Fossil",
          content:
            "Methinks is not 'me thinking' — it is 'it seems TO ME' (OE mē þyncþ), the dative experiencer. German still says the same thing the same way: Mir ist kalt is 'it is cold TO ME'. English buried the dative; German made it a lifestyle.",
        },
      ],
    },
    pattern: {
      title: "The Receiver's Toolbox",
      content:
        "The pronouns first: mir ↔ me (to me), dir ↔ thee (to thee), ihm ↔ him (to him) — the same words with the same ancient jobs. The prepositions that always drag the dative along: aus (out of), bei (by — the exact twin of by), mit (with — the twin of mid, as in midwife), nach (after), seit (since), von (from), zu (to). The dative verbs: helfen (Ich helfe dir), danken (Ich danke dir — you already said it!), gefallen (Es gefällt mir — it falls well to me), geben (Gib mir das Buch). When both objects appear, English word order does the dative's job ('give HIM the book'); German marks it on the words: gib ihm das Buch — ihm = to-him (dative), das Buch = accusative.\n\nOne Denglisch ladder, read it the German way first: Gib ihm das Buch → Give to-him the book → Give him the book. The middle line shows the case on the page: the 'to' lives inside ihm.",
      footnotes: [],
      linguist_note:
        "The dative articles: dem (masculine/neuter), der (feminine), den (+ -n) in the plural. Notice dem keeps the ancient m, while the accusative softened it to n (ihn, wen) — one nasal, two case stories.",
    },
    exercises: [
      {
        id: "l20_e1",
        type: "matching_pairs",
        prompt: "Match the dative pronouns with their English twins:",
        matching_pairs: [
          { id: "dt1", english: "to me / me", german: "mir" },
          { id: "dt2", english: "to thee / thee", german: "dir" },
          { id: "dt3", english: "to him / him", german: "ihm" },
          { id: "dt4", english: "with", german: "mit" },
        ],
        target_answer: "mir, dir, ihm, mit",
        meaning: "to me, to thee, to him, with",
        explanation: "The dative pronouns are English fossils alive in German: 'give it me', 'I give it thee', 'give it him' — plus mit/mid.",
      },
      {
        id: "l20_e2",
        type: "shift_select",
        prompt: "Complete: 'Ich danke _____.' (I thank THEE):",
        options: ["dir", "dich", "du", "dein"],
        target_answer: "dir",
        meaning: "Ich danke dir = I thank thee",
        explanation: "danken demands the dative — thanking goes TO someone. dich would be the accusative; danken refuses it.",
      },
      {
        id: "l20_e3",
        type: "literal_gloss",
        prompt: "Which English is built the German way?",
        german: "Gib ihm das Buch.",
        natural: "Give him the book.",
        options: ["Give him the book.", "Give to him the book.", "Give the book to he."],
        target_answer: "Give to him the book.",
        meaning: "Give him the book.",
        explanation: "German keeps the 'to' audible inside the dative pronoun — ihm IS 'to him'. English used to say 'give it me'; German never stopped.",
      },
      {
        id: "l20_e4",
        type: "derive",
        prompt: "Give it to me: 'Gib _____ das Buch!' (to me):",
        english_hint: "the archaic 'give it me' — dative of ich",
        target_answer: "mir",
        meaning: "Gib mir das Buch = Give me the book",
        explanation: "The receiver takes the dative: mir — the same case English fossilized in 'give it me'.",
      },
      {
        id: "l20_e5",
        type: "transcribe",
        prompt: "How would you say:",
        idea: "a friend is carrying something heavy: you offer the ancient verb — I help thee",
        cues: [
          "helfen is a dative verb: the help goes TO someone — ich helfe dir",
        ],
        target_answer: "Ich helfe dir",
        meaning: "I help you (to-thee)",
        word_bank: ["Ich", "helfe", "dir", "dich", "hilft"],
        explanation: "helfen + dative: 'Ich helfe dir' — help goes TO the person, as English once said 'I help thee' with a to.",
        diagnosis: {
          slip: "the dative verb was fed an accusative",
          cue: "helfen refuses the Him-Case: ich helfe dir (to-thee), never 'ich helfe dich'. Helping goes TO someone.",
        },
      },
    ],
    summary: {
      outcome: "Use mir, dir, ihm and the dative verbs helfen, danken, gefallen correctly.",
      use_example: { german: "Ich helfe dir.", english: "I help you (help to-thee)." },
      takeaway: "The dative marks the receiver: mir/dir/ihm ↔ 'give it me/thee/him' — and helfen, danken, gefallen demand it.",
      curiosity_teaser: "Next: methinks & Dative Survivors — the English dative fossils mirrored in German, dem/den/dem grid row.",
    },
    twist: {
      prompt: "Same verb, different receiver: I help thee becomes I help HIM. (The dative pronoun has three faces.)",
      target_answer: "Ich helfe ihm",
      word_bank: ["Ich", "helfe", "ihm", "ihn", "dir"],
      explanation: "dir → ihm: both dative, both English fossils ('give it thee' → 'give it him'). ihn would be the accusative — helfen refuses it.",
    },
  },
  {
    id: 1801,
    slug: "ge-y-ancient-participle",
    title: "ge- ↔ y-: the Ancient Participle",
    subtitle: "Participle formation drills — and the yclept/genug etymology box",
    phase: 3,
    shift_categories: [],
    word_ids: ["genug", "machen", "sagen", "lernen", "wandern", "kaufen", "tragen", "ankommen", "buchen", "wochenende", "sommer", "winter"],
    table_word_ids: ["machen", "sagen", "lernen", "wandern", "kaufen"],
    hook: {
      title: "The Prefix That Survived in One Word",
      content:
        "Weak-verb participles are pure assembly: ge- + stem + -t. gesagt. gelernt. gemacht. The formula is so regular it is boring — which is why the etymology is worth the whole lesson: that ge- is the prefix English wore down to y- and then dropped. Yclept ('called'), ywis ('surely'), ybounden — Chaucer's participles are German participles with a y. And one ge- word escaped the purge entirely — enough, whose initial e- IS the old ge-, standing today inside genug's twin. Say genug and you are pronouncing Chaucer's grammar.",
      footnotes: [
        {
          marker: "1",
          title: "The One-Word Museum",
          content:
            "genug ← OE ġenōg ← Proto-Germanic *ganōgaz: ge- + *nōgaz 'to reach, attain'. 'Enough' reached the same word through the same route. It is the only everyday English word where the ancient participial prefix survives in place — a one-word museum of the entire system.",
        },
      ],
    },
    pattern: {
      title: "The Weak-Participle Assembly Line",
      content:
        "Feed a regular verb into the line: stem + ge- in front + -t at the back. lernen → gelernt, sagen → gesagt, machen → gemacht, kaufen → gekauft. Vowel? Untouched — that is what makes it weak (regular). Motion verbs ride sein instead of haben and keep the same participle: wandern → (ist) gewandert. The -ieren and ver- verbs keep skipping ge-: studiert, verstanden. And genug is your mnemonic anchor: every ge- you stamp from now on is the same ancient prefix that enough smuggled into English.",
      footnotes: [],
      linguist_note:
        "The ge- zone: only verbs with FIRST-syllable stress take it. Words whose stress moved (ver-, be-, er- verbs; -ieren verbs) reject ge- — the acoustic law from the No-ge- Club now explains the whole map.",
    },
    exercises: [
      {
        id: "l1801_e1",
        type: "morpheme_tiles",
        prompt: "Assembly line: build the participle of 'lernen':",
        tile_options: ["ge", "lern", "t", "en", "st"],
        target_answer: "gelernt",
        meaning: "learned / studied (participle)",
        explanation: "ge- + stem + -t: gelernt. Weak participles never touch the vowel.",
      },
      {
        id: "l1801_e2",
        type: "shift_select",
        prompt: "Which everyday English word still carries the ancient ge- prefix?",
        options: ["enough (the e- is the old y-/ge-)", "between", "against", "earlier"],
        target_answer: "enough (the e- is the old y-/ge-)",
        meaning: "enough ↔ genug — the ge- survivor",
        explanation: "OE ġenōg → enough: the unstressed y- reduced to e-. Genug is the same word, prefix intact. The weekend file uses the same bracket: Am Wochenende habe ich alles gebucht — buchen (book) took its beech-wood name before it took your reservation.",
      },
      {
        id: "l1801_e3",
        type: "matching_pairs",
        prompt: "Match each infinitive with its participle (the last one changes its vowel — a preview):",
        matching_pairs: [
          { id: "gy1", english: "sagen → ?", german: "gesagt" },
          { id: "gy2", english: "kaufen → ?", german: "gekauft" },
          { id: "gy3", english: "machen → ?", german: "gemacht" },
          { id: "gy4", english: "wandern → ?", german: "gewandert" },
          { id: "gy5", english: "tragen → ?", german: "getragen" },
        ],
        target_answer: "gesagt, gekauft, gemacht, gewandert, getragen",
        meaning: "said, bought, made, hiked, carried/worn",
        explanation: "ge- + stem + -t every time — even the motion verb gewandert, which just switches its auxiliary to sein. getragen sneaks in a vowel change: the strong verbs are coming (next lesson).",
      },
      {
        id: "l1801_e4",
        type: "shift_select",
        prompt: "Which auxiliary does 'wandern' take in the Perfekt?",
        options: ["sein — motion verbs ride sein: Wir sind gewandert", "haben", "werden", "either, freely"],
        target_answer: "sein — motion verbs ride sein: Wir sind gewandert",
        meaning: "Motion verbs take sein",
        explanation: "Going somewhere under your own power → sein. Wandern is the textbook case: Wir sind gestern gewandert. Ankommen rides sein too — arrival is motion's finish line.",
      },
      {
        id: "l1801_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'We hiked yesterday' (sein + participle)",
        target_answer: "Wir sind gestern gewandert",
        meaning: "We hiked yesterday",
        word_bank: ["Wir", "sind", "gestern", "gewandert", "Sommer", "Winter"],
        explanation: "sein opens the bracket for motion, gewandert closes it: 'Wir sind gestern gewandert'.",
      },
    ],
    summary: {
      outcome: "Assemble weak participles at speed and pick haben vs sein by motion.",
      use_example: { german: "Wir sind gestern gewandert.", english: "We hiked yesterday." },
      takeaway: "ge- + stem + -t builds the weak participle — the same ge- that English kept only inside enough.",
      curiosity_teaser: "Next: haben or sein? — the choice gym where motion decides the auxiliary.",
    },
  },
  {
    id: 1802,
    slug: "haben-or-sein-choice-gym",
    title: "haben or sein? Choice Gym",
    subtitle: "Twenty past-sentence prompts — motion vs transitive logic decides",
    phase: 3,
    shift_categories: [],
    word_ids: ["haben", "sein", "kommen", "gehen", "essen", "machen", "fahren", "trinken", "einschlafen", "fliegen", "ankommen", "buchen", "tragen"],
    table_word_ids: ["haben", "sein", "kommen", "gehen", "fahren", "essen"],
    hook: {
      title: "Two Auxiliaries, One Question",
      content:
        "Every German Perfekt sentence asks one question before anything else: did you DO something to something, or did you GO somewhere? Do → haben. Go → sein. Ich habe gegessen (I ate something) versus Ich bin gegangen (I went). Ich habe das Buch gefunden versus Ich bin nach Berlin gefahren. English solved this problem by abandoning sein-pasts entirely; German kept the ancient perfect-of-motion, and so did English once — 'he is come' is authentic Early Modern English, straight out of the King James Bible.",
      footnotes: [
        {
          marker: "1",
          title: "He Is Come",
          content:
            "'He is risen', 'The hour is come', 'Joy cometh in the morning' — the KJV uses be-perfects exactly like German sein-perfects. English narrowed them to phrases of arrival and change; German still runs the whole system: sein with gehen, kommen, fahren, aufstehen, einschlafen, bleiben.",
        },
      ],
    },
    pattern: {
      title: "The Decision Tree",
      content:
        "Branch one: is there a direct object (something acted on)? → haben, always: Ich habe den Kaffee getrunken. Branch two: motion or change of state with no object? → sein: Ich bin gekommen, Wir sind gegangen, sie ist eingeschlafen (she fell asleep — a change of state). Branch three: the sneaky verbs — bleiben (stay) and sein itself take sein despite zero motion: Wir sind zu Hause geblieben. When in doubt: 'could I do it TO something?' haben. 'did I move or change?' sein.",
      footnotes: [],
      linguist_note:
        "Some verbs flip meaning with the auxiliary: Ich habe das Auto gefahren (I drove the car — transitive) versus Ich bin gefahren (I traveled — motion). The auxiliary is doing grammar work, not decoration.",
    },
    exercises: [
      {
        id: "l1802_e1",
        type: "shift_select",
        prompt: "'Ich ___ gegangen.' (I went)",
        options: ["bin", "habe", "war", "werde"],
        target_answer: "bin",
        meaning: "Ich bin gegangen = I went",
        explanation: "gehen is pure motion, no object: sein. English's own KJV said 'he is gone' the same way. ankommen and fliegen ride sein too — arrivals and flights are motion.",
      },
      {
        id: "l1802_e2",
        type: "shift_select",
        prompt: "'Ich ___ das Buch gelesen.' (I read the book — lesen hinted: to read)",
        options: ["habe", "bin", "war", "wurde"],
        target_answer: "habe",
        meaning: "Ich habe das Buch gelesen = I read the book",
        explanation: "Direct object (das Buch) → haben, no debate. Doing something to something is haben territory — buchen takes its object the same way: Ich habe alles gebucht.",
      },
      {
        id: "l1802_e3",
        type: "matching_pairs",
        prompt: "Match each Perfekt sentence with its auxiliary logic:",
        matching_pairs: [
          { id: "hs1", english: "I came (motion)", german: "Ich bin gekommen" },
          { id: "hs2", english: "I ate something (object)", german: "Ich habe gegessen" },
          { id: "hs3", english: "We stayed home (the sneaky verb)", german: "Wir sind geblieben" },
          { id: "hs4", english: "I flew (motion)", german: "Ich bin geflogen" },
          { id: "hs5", english: "I carried it (object)", german: "Ich habe es getragen" },
          { id: "hs4", english: "I drove the car (transitive)", german: "Ich habe das Auto gefahren" },
        ],
        target_answer: "Ich bin gekommen, Ich habe gegessen, Wir sind geblieben, Ich habe das Auto gefahren",
        meaning: "I came, I ate, we stayed, I drove the car",
        explanation: "Motion → sein; object → haben; bleiben always sein; gefahren flips by whether something was driven. The verb decides: fliegen flies (sein), tragen carries (haben).",
      },
      {
        id: "l1802_e4",
        type: "derive",
        prompt: "Complete with the auxiliary: 'Sie ___ eingeschlafen.' (she fell asleep — change of state)",
        english_hint: "change of state rides sein",
        target_answer: "ist",
        meaning: "Sie ist eingeschlafen = She fell asleep",
        explanation: "einschlafen is a change of state (awake → asleep) — sein territory, like 'he is fallen' in old English.",
      },
      {
        id: "l1802_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'I drove to Berlin yesterday'",
        target_answer: "Ich bin gestern nach Berlin gefahren",
        meaning: "I drove (traveled) to Berlin yesterday",
        vocab_hints: [
          {
            word: "nach",
            translation: "to (for cities and countries)",
            note: "nach Berlin — the 'to' of destination; cities and countries take nach",
          },
        ],
        word_bank: ["Ich", "bin", "gestern", "nach", "Berlin", "gefahren"],
        explanation: "No object driven — just travel: sein. 'Ich bin gefahren' is 'I am come' with wheels.",
      },
    ],
    summary: {
      outcome: "Choose haben or sein correctly across transitive, motion, and sneaky-verb cases.",
      use_example: { german: "Ich bin gestern nach Berlin gefahren.", english: "I went (am-driven) to Berlin yesterday." },
      takeaway: "Object → haben; motion or change → sein; bleiben always sein — the KJV's 'he is come' logic, still living.",
      curiosity_teaser: "Next: Gestern habe ich… Story Drills — narrate a whole weekend in Perfekt sentences from taught words.",
    },
  },
  {
    id: 1702,
    slug: "days-of-thunder",
    title: "Days of Thunder",
    subtitle: "The weekday etymologies — Donner, Mitte, Sonne — in one calendar",
    phase: 3,
    shift_categories: ["th_to_d"],
    word_ids: ["donner", "montag", "dienstag", "freitag", "sonntag", "tag", "woche"],
    table_word_ids: ["montag", "dienstag", "freitag", "sonntag", "donner"],
    hook: {
      title: "One Pantheon, Two Calendars",
      content:
        "English and German named the days after the SAME gods — they just split the credit differently. Monday/Montag: the moon's day, both languages. Tuesday/Dienstag: the sky-god's day — English kept his Norse name Tiw, German kept his function as lord of the thing (the assembly), and hardened his th to d on the way. Wednesday broke the pattern: English kept Woden, German gave up and said 'mid-week' (Mittwoch). Thursday/Donnerstag you know: Thor's name against his hammer-storm. Friday/Freitag: the love goddess, Frigg or Freia, spelled two ways. Sunday/Sonntag: the sun, t → z. Seven days, one Germanic calendar.",
      footnotes: [
        {
          marker: "1",
          title: "Samstag, the Sabbath Spy",
          content:
            "The seventh day is the odd one: German south says Samstag — a borrowed word from Greek sambaton (Sabbath) — while the north says Sonnabend ('Sunday-eve'). The sun's day slot ended up with two names, neither of them calqued.",
        },
      ],
    },
    pattern: {
      title: "The Calendar Grid",
      content:
        "Montag (moon-day) — der, like every weekday. Dienstag (the thing-god's day; th → d). Mittwoch (mid-week — Mitte + Woche, the only one without -tag). Donnerstag (thunder-day — Thor's element where English kept Thor's name). Freitag (the goddess's day). Samstag/Sonnabend (the borrowed day). Sonntag (sun-day, t → z). All weekdays are der, all capitalize, and the calendar formula you already own slots them in: Am Montag lerne ich Deutsch — 'am' is an + dem, 'on the', the dative of time wearing a contraction.",
      footnotes: [],
      linguist_note:
        "The Germanic weekday names are calques of the Latin planetary week (dies Lunae, dies Martis...), which is why both languages match god-for-god. Mittwoch replaced Woden deliberately: the church preferred 'mid-week' to a pagan god's name — and English is the only Germanic language that kept Woden.",
    },
    exercises: [
      {
        id: "l1702_e1",
        type: "matching_pairs",
        prompt: "Match the weekdays with their godly twins:",
        matching_pairs: [
          { id: "dy1", english: "Monday (moon-day)", german: "Montag" },
          { id: "dy2", english: "Friday (goddess-day)", german: "Freitag" },
          { id: "dy3", english: "Sunday (sun-day)", german: "Sonntag" },
          { id: "dy4", english: "Thursday (thunder-day)", german: "Donnerstag" },
        ],
        target_answer: "Montag, Freitag, Sonntag, Donnerstag",
        meaning: "Monday, Friday, Sunday, Thursday",
        explanation: "Same gods, same order, one shift: the languages split the naming but kept the calendar.",
      },
      {
        id: "l1702_e2",
        type: "shift_select",
        prompt: "Which German weekday refused the god-name entirely?",
        options: ["Mittwoch (mid-week) — the church replaced Woden", "Montag", "Freitag", "Sonntag"],
        target_answer: "Mittwoch (mid-week) — the church replaced Woden",
        meaning: "Mittwoch = Mitte + Woche",
        explanation: "English kept Woden's name; German swapped it for geography. It is also the only weekday not ending in -tag.",
      },
      {
        id: "l1702_e3",
        type: "shift_select",
        prompt: "Why do English 'Tuesday' and German 'Dienstag' both start with a T/D sound?",
        options: [
          "Both honor the same god (Tīwaz/Thingsus) — and th hardened to d in German",
          "Pure coincidence",
          "Both come from Latin dies (day)",
          "Tuesday is a French loan",
        ],
        target_answer: "Both honor the same god (Tīwaz/Thingsus) — and th hardened to d in German",
        meaning: "Tuesday ↔ Dienstag: one god, two names, one shift",
        explanation: "The same sky-god under two titles, plus the TH→D hardening — a mythological and phonological double twin.",
      },
      {
        id: "l1702_e4",
        type: "reverse_cognate",
        prompt: "What English weekday is the twin of 'Sonntag'?",
        target_answer: "Sunday",
        meaning: "Sunday ↔ Sonntag (sun-day)",
        explanation: "The identical calque: the sun's day — with Sonntag shifting the sun's t to z.",
      },
      {
        id: "l1702_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'On Thursday we drink beer'",
        target_answer: "Am Donnerstag trinken wir Bier",
        meaning: "On Thursday we drink beer",
        vocab_hints: [
          {
            word: "am",
            translation: "on the / in the (time)",
            note: "am = an + dem — 'on the Thursday', dative of time, all in one syllable",
          },
        ],
        word_bank: ["Am", "Donnerstag", "trinken", "wir", "Bier"],
        explanation: "Time phrase first (am Donnerstag), verb glued to position 2: 'Am Donnerstag trinken wir Bier'.",
      },
    ],
    summary: {
      outcome: "Name the weekdays and tell the god-story behind each pair.",
      use_example: { german: "Am Donnerstag trinken wir Bier.", english: "On Thursday we drink beer." },
      takeaway: "One Germanic pantheon runs both calendars — moon, thing-god, Woden/mid-week, thunder, goddess, sun.",
      curiosity_teaser: "Next: Clock & Calendar Gym — telling time both the colloquial and the formal way.",
    },
  },
  {
    id: 1703,
    slug: "clock-and-calendar-gym",
    title: "Clock & Calendar Gym",
    subtitle: "Wie viel Uhr ist es? — telling time, halb past and all",
    phase: 3,
    shift_categories: [],
    word_ids: ["uhr", "halb", "morgen", "heute", "gestern", "zwölf", "drei", "sein", "wochenende", "sommer", "winter", "hundert", "minute", "zählen"],
    table_word_ids: ["uhr", "halb", "zwölf", "drei", "morgen"],
    hook: {
      title: "Half Past Seven Is Half TO Eight",
      content:
        "One clock, two mentalities. Formal German reads it straight: Es ist drei Uhr — it is three o'clock, exactly like English. But the half hour betrays the older mind: halb acht is NOT half past seven — it is 'half of the way TO eight', seven-thirty. English 'half past seven' counts from the hour that just passed; German halb acht counts toward the hour that is coming. Once you catch the logic, the whole colloquial clock opens: Viertel nach sieben (quarter after seven), Viertel vor acht (quarter to eight).",
      footnotes: [
        {
          marker: "1",
          title: "halb's Hidden Twin",
          content:
            "halb ↔ half — the f/v→b shift in action, one of the quiet family words. Es ist halb acht: the same 'half', counting in the opposite direction.",
        },
      ],
    },
    pattern: {
      title: "Two Clocks, One Answer",
      content:
        "Formal (always safe): Es ist sieben Uhr dreißig — seven thirty, digits read aloud. Colloquial, moving forward: Viertel nach sieben (7:15), halb acht (7:30!), fünf nach halb acht (7:35). Colloquial, approaching: Viertel vor acht (7:45), zehn vor acht (7:50). Questions: Wie viel Uhr ist es? (literally 'how much clock is it?') or the idiom Wie spät ist es? ('how late is it?'). Calendar glue: gestern, heute, morgen slot before the time: Morgen um acht Uhr — tomorrow at eight. At? = um. Um acht Uhr trinken wir Kaffee.",
      footnotes: [],
      linguist_note:
        "halb acht's 'half toward' logic once existed in English too — archaic texts say 'half seven' the same way. English standardized on 'half past'; German kept the older directional count.",
    },
    exercises: [
      {
        id: "l1703_e1",
        type: "shift_select",
        prompt: "Trap drill: 'Es ist halb acht.' What time is it?",
        options: ["7:30 — halfway to eight", "8:30 — half past eight", "7:00", "8:15"],
        target_answer: "7:30 — halfway to eight",
        meaning: "halb acht = half (of the way) TO eight = 7:30",
        explanation: "German counts the half toward the coming hour; English 'half past' counts from the finished one. One habit flip.",
      },
      {
        id: "l1703_e2",
        type: "matching_pairs",
        prompt: "Match each time phrase with its English meaning — the clock and the calendar:",
        matching_pairs: [
          { id: "ck1", english: "It is three o'clock", german: "Es ist drei Uhr" },
          { id: "ck2", english: "quarter past twelve", german: "Viertel nach zwölf" },
          { id: "ck3", english: "quarter to eight", german: "Viertel vor acht" },
          { id: "ck4", english: "tomorrow at eight", german: "Morgen um acht" },
          { id: "ck5", english: "on the weekend", german: "am Wochenende" },
          { id: "ck6", english: "in the summer", german: "im Sommer" },
          { id: "ck7", english: "in the winter", german: "im Winter" },
        ],
        target_answer: "Es ist drei Uhr, Viertel nach zwölf, Viertel vor acht, Morgen um acht, am Wochenende, im Sommer, im Winter",
        meaning: "it is three o'clock, quarter past twelve, quarter to eight, tomorrow at eight, on the weekend, in the summer, in the winter",
        explanation: "The clock phrases carry the shift twins; the calendar phrases borrow the clock's own little words: am = an dem, im = in dem — contractions, not new words. nach = after (moving forward), vor = before (approaching), um = at. The colloquial clock is prepositions.",
      },
      {
        id: "l1703_e3",
        type: "derive",
        prompt: "Ask the question: '_____ viel Uhr ist es?' (How much clock is it?):",
        english_hint: "the how-word",
        target_answer: "Wie",
        meaning: "Wie viel Uhr ist es? = What time is it?",
        explanation: "wie — the how-word whose root is why's — drives the clock question: 'How much clock is it?' Count along: zählen is tale's twin, and die Minute is the clock's smallest tale — hundert of them to the hour.",
      },
      {
        id: "l1703_e4",
        type: "shift_select",
        prompt: "'Gestern ___ ich früh aufgestanden.' (Yesterday I got up early — auxiliary needed)",
        options: ["bin", "habe", "war", "hatte"],
        target_answer: "bin",
        meaning: "Gestern bin ich früh aufgestanden",
        explanation: "aufstehen is motion (up!) — sein opens the bracket, and with a fronted gestern the verb still holds position 2.",
      },
      {
        id: "l1703_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'Tomorrow at eight we drink coffee'",
        target_answer: "Morgen um acht trinken wir Kaffee",
        meaning: "Tomorrow at eight we drink coffee",
        word_bank: ["Morgen", "um", "acht", "trinken", "wir", "Kaffee", "hundert"],
        explanation: "Time stack (Morgen um acht) in position 1, verb glued to 2, subject to 3 — V2 with a full calendar.",
      },
    ],
    summary: {
      outcome: "Tell time formally and colloquially — and never mistrust halb again.",
      use_example: { german: "Morgen um acht trinken wir Kaffee.", english: "Tomorrow at eight we drink coffee." },
      takeaway: "halb acht is half-toward-eight; nach pushes forward, vor pulls up to, um pins the hour.",
      curiosity_teaser: "Next: Gestern habe ich… Story Drills — narrate a whole weekend in Perfekt sentences from taught words.",
    },
  },
  {
    id: 1803,
    slug: "gestern-habe-ich-story-drills",
    title: "Gestern habe ich… Story Drills",
    subtitle: "Narrate a weekend in Perfekt sentences using only taught vocabulary",
    phase: 3,
    shift_categories: [],
    word_ids: ["haben", "sein", "essen", "trinken", "kommen", "gehen", "machen", "wandern", "brot"],
    table_word_ids: ["haben", "sein", "essen", "trinken", "kommen", "gehen"],
    hook: {
      title: "The Weekend Machine",
      content:
        "Grammar becomes biography the moment you chain it. Yesterday I drank coffee. I read. We hiked. Then we came home and ate bread. Every sentence is a Perfekt bracket you can already build — today you link them into a story. The secret is boring and beautiful: nothing new is needed. Gestern habe ich... opens the door, the participle closes it, and sein steps in whenever you moved somewhere. Ten sentences, one weekend, zero new grammar.",
      footnotes: [
        {
          marker: "1",
          title: "Why Stories Beat Drills",
          content:
            "The Perfekt is the tense of storytelling in spoken German — nobody narrates yesterday in the simple past at a café. Every rep today is a sentence a real German speaker would actually say.",
        },
      ],
    },
    pattern: {
      title: "The Story Skeleton",
      content:
        "Skeleton one — doing: Gestern habe ich Kaffee getrunken. Skeleton two — moving: Wir sind gewandert. Skeleton three — the chain: Gestern bin ich früh aufgestanden, habe Kaffee getrunken und Brot gegessen — chain two brackets behind one gestern; only the first auxiliary carries the time word. Skeleton four — the turn: Danach (after that) sind wir nach Hause gekommen. Danach, dann (then), am Abend (in the evening) — three glue words and your weekend writes itself.",
      footnotes: [],
      linguist_note:
        "When chaining, German drops the repeated subject and auxiliary: 'habe Kaffee getrunken und Brot gegessen' — one habe, two participles, exactly as English chains 'have eaten and drunk'.",
    },
    exercises: [
      {
        id: "l1803_e1",
        type: "matching_pairs",
        prompt: "Match each weekend sentence with its English meaning:",
        matching_pairs: [
          { id: "sd1", english: "Yesterday I drank coffee", german: "Gestern habe ich Kaffee getrunken" },
          { id: "sd2", english: "We hiked", german: "Wir sind gewandert" },
          { id: "sd3", english: "Then we ate bread", german: "Dann haben wir Brot gegessen" },
          { id: "sd4", english: "We came home (motion)", german: "Wir sind nach Hause gekommen" },
        ],
        target_answer: "Gestern habe ich Kaffee getrunken, Wir sind gewandert, Dann haben wir Brot gegessen, Wir sind nach Hause gekommen",
        meaning: "yesterday I drank coffee, we hiked, then we ate bread, we came home",
        explanation: "haben for doing, sein for moving — the weekend machine never needs another part.",
      },
      {
        id: "l1803_e2",
        type: "shift_select",
        prompt: "Chain it: 'Ich bin früh aufgestanden und ___ Kaffee getrunken.'",
        options: ["habe", "bin", "war", "hatte"],
        target_answer: "habe",
        meaning: "...und habe Kaffee getrunken — and drank coffee",
        explanation: "New action, new auxiliary: drinking is haben territory even inside a chained sentence that started with bin.",
      },
      {
        id: "l1803_e3",
        type: "derive",
        prompt: "Glue word: '_____ sind wir nach Hause gekommen.' (after that):",
        english_hint: "da + nach, 'there-after'",
        target_answer: "Danach",
        meaning: "Danach sind wir nach Hause gekommen = After that we came home",
        explanation: "danach — 'there-after' — is the story hinge. Its fronted position pushes the verb to position 2 as always.",
      },
      {
        id: "l1803_e4",
        type: "shift_select",
        prompt: "Which sentence is built correctly?",
        options: [
          "Gestern habe ich Brot gegessen",
          "Gestern ich habe Brot gegessen",
          "Gestern gegessen habe ich Brot",
          "Ich gestern Brot gegessen habe",
        ],
        target_answer: "Gestern habe ich Brot gegessen",
        meaning: "Yesterday I ate bread",
        explanation: "Fronted gestern (1), habe (2), ich (3), contents, participle last — V2 and the bracket in one motion.",
      },
      {
        id: "l1803_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'Yesterday we ate bread and drank beer'",
        target_answer: "Gestern haben wir Brot gegessen und Bier getrunken",
        meaning: "Yesterday we ate bread and drank beer",
        vocab_hints: [
          {
            word: "Bier",
            translation: "beer",
            note: "das Bier — the Hidden Twins cognate, back for the party",
          },
        ],
        word_bank: ["Gestern", "haben", "wir", "Brot", "gegessen", "und", "Bier", "getrunken"],
        explanation: "One auxiliary (haben), two participles (gegessen, getrunken) — the chain trick from the pattern section.",
      },
    ],
    summary: {
      outcome: "Narrate a multi-sentence weekend in the Perfekt with chained brackets.",
      use_example: { german: "Gestern haben wir Brot gegessen und Bier getrunken.", english: "Yesterday we ate bread and drank beer." },
      takeaway: "gestern habe ich… + participle is the door; danach/dann glue the rooms; sein handles every move.",
      curiosity_teaser: "Next: sing/sang/sung Mirrors — fourteen English irregular verbs mapped onto their German melodies.",
    },
  },
  {
    id: 1901,
    slug: "sing-sang-sung-mirrors",
    title: "sing/sang/sung Mirrors",
    subtitle: "Map fourteen English irregulars onto their German ablauf pairs",
    phase: 3,
    shift_categories: ["strong_verbs_ablaut"],
    word_ids: ["singen", "trinken", "finden", "geben", "nehmen", "fahren", "sprechen", "kommen", "schreiben", "schlafen"],
    table_word_ids: ["singen", "trinken", "geben", "sprechen", "fahren", "schreiben"],
    hook: {
      title: "Fourteen Mirrors on the Wall",
      content:
        "You have heard the melody in pairs. Today is the gallery: fourteen English irregular verbs hung beside their German twins, class by class. sing ↔ singen. drink ↔ trinken. find ↔ finden. give ↔ geben. speak ↔ sprechen. come ↔ kommen. write? no — schreiben's true English family is the scribe family (scribe, describe, script). drive ↔ treiben. fare ↔ fahren. sleep ↔ schlafen (sleep/slept ↔ schlafen/schlief — the vowels drift but the CLASS is identical). Stand in front of each pair and the recognition does the memorizing: the melody is not similar. It is the same.",
      footnotes: [
        {
          marker: "1",
          title: "The Class Map",
          content:
            "Proto-Germanic sorted strong verbs into seven classes by their vowel melody. English forgot the numbering; German grammars keep it. You only need the echoes: i-a-u (sing), ei-ie-ie (schreiben), a-u (fahren). When an English verb and a German verb share a class, they share a history.",
        },
      ],
    },
    pattern: {
      title: "The Gallery Walk",
      content:
        "Walk it: singen, sang, gesungen ↔ sing, sang, sung. trinken, trank, getrunken ↔ drink, drank, drunk. finden, fand, gefunden ↔ find, found. geben, gab, gegeben ↔ give, gave, given. sprechen, sprach, gesprochen ↔ speak, spoke, spoken. kommen, kam, gekommen ↔ come, came (the vowel wandered, the class held). schreiben, schrieb, geschrieben ↔ describe, described (scribe family). fahren, fuhr, gefahren ↔ fare, fared. schlafen, schlief, geschlafen ↔ sleep, slept. Fourteen frames, one artist.",
      footnotes: [],
      linguist_note:
        "schlafen/schlief ↔ sleep/slept is the cleanest proof that classes are inherited, not coincidence: the consonants match, the vowels follow the same class drift, and neither language arranged this on purpose.",
    },
    exercises: [
      {
        id: "l1901_e1",
        type: "matching_pairs",
        prompt: "Gallery wall one — match the melodies:",
        matching_pairs: [
          { id: "sg1", english: "speak / spoke / spoken", german: "sprechen / sprach / gesprochen" },
          { id: "sg2", english: "come / came / come", german: "kommen / kam / gekommen" },
          { id: "sg3", english: "describe (scribe family)", german: "schreiben / schrieb / geschrieben" },
          { id: "sg4", english: "sleep / slept", german: "schlafen / schlief" },
        ],
        target_answer: "sprechen / sprach / gesprochen, kommen / kam / gekommen, schreiben / schrieb / geschrieben, schlafen / schlief",
        meaning: "the speak, come, scribe, sleep melodies",
        explanation: "Same classes, same vowels, same history — the gallery wall of shared inheritance.",
      },
      {
        id: "l1901_e2",
        type: "shift_select",
        prompt: "Which English verb sings the SAME class as 'schreiben / schrieb / geschrieben'?",
        options: ["describe / described (scribe family)", "write / wrote", "ride / rode", "drive / drove"],
        target_answer: "describe / described (scribe family)",
        meaning: "schreiben belongs to the scribe family, not write's class",
        explanation: "schreiben is Latin scribere Germanicized — its English relatives are scribe, describe, script. Write/wrote is a different class entirely.",
      },
      {
        id: "l1901_e3",
        type: "derive",
        prompt: "Sing it: 'kommen' in the er-past →",
        english_hint: "come / came — the same wander",
        target_answer: "kam",
        meaning: "er kam = he came",
        explanation: "kommen, kam, gekommen ↔ come, came, come — the vowel moved in both languages, the class never moved.",
      },
      {
        id: "l1901_e4",
        type: "reverse_cognate",
        prompt: "What English verb is the twin of 'schlafen'?",
        target_answer: "sleep",
        meaning: "sleep ↔ schlafen (p → f, same class)",
        explanation: "sleep/slept and schlafen/schlief drift through the same class — the p → f shift is the only consonant difference.",
      },
      {
        id: "l1901_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'We spoke German yesterday'",
        target_answer: "Wir haben gestern Deutsch gesprochen",
        meaning: "We spoke German yesterday",
        word_bank: ["Wir", "haben", "gestern", "Deutsch", "gesprochen"],
        explanation: "Strong participle gesprochen closes the bracket — sprechen, sprach, gesprochen ↔ speak, spoke, spoken.",
      },
    ],
    summary: {
      outcome: "Map fourteen English irregulars to their German ablauf twins by class.",
      use_example: { german: "Wir haben gestern Deutsch gesprochen.", english: "We spoke German yesterday." },
      takeaway: "The irregular verbs are not lists — they are fourteen mirrors of one Germanic melody system.",
      curiosity_teaser: "Next: Ablaut Families I — the e→i and a→o classes drilled with geben, sprechen and fahren.",
    },
  },
  {
    id: 1902,
    slug: "ablauf-families-e-to-i-a-to-o",
    title: "Ablaut Families I: e→i, a→o",
    subtitle: "geben/gab, sprechen/sprach, fahren/fuhr — the class drills with participles",
    phase: 3,
    shift_categories: ["strong_verbs_ablaut"],
    word_ids: ["geben", "sprechen", "fahren", "nehmen", "schlafen", "kommen", "fallen", "springen", "treten", "blasen", "frieren", "fliegen"],
    table_word_ids: ["geben", "sprechen", "fahren", "nehmen", "schlafen"],
    hook: {
      title: "The Family Albums",
      content:
        "Strong verbs come in families, and the families are recognizable by their melody. Family one: short e in the infinitive becomes a in the past — geben, gab, gegeben. sprechen, sprach, gesprochen. nehmen, nahm, genommen. Family two: long a becomes long u — fahren, fuhr, gefahren. Family three: ä in the du/er present then a in the past, ie in the past of the sleep class — schlafen, schlief, geschlafen. Each family has its English twins standing right beside it: give/gave, speak/spoke, fare/fared, sleep/slept. You are not learning fourteen verbs. You are learning three melodies that cover them.",
      footnotes: [
        {
          marker: "1",
          title: "The du/er Vowel Warning",
          content:
            "Some strong verbs change their vowel in the SECOND and THIRD person of the PRESENT too: du gibst, er gibt (from geben); du nimmst, er nimmt (from nehmen). English whispers this once — 'he gives' — German does it visibly. The past-tense melody is unaffected.",
        },
      ],
    },
    pattern: {
      title: "Three Melodies, Full Paradigms",
      content:
        "Family e→i/a: geben, gibst?, gibt, gab, gegeben ↔ give, gave, given. sprechen, sprichst, spricht, sprach, gesprochen ↔ speak, spoke, spoken. nehmen, nimmst, nimmt, nahm, genommen. Family a→u: fahren, fährst?, fährt, fuhr, gefahren ↔ fare, fared. laden? skip — two exemplars per family is plenty. The sleep class: schlafen, schläfst, schläft, schlief, geschlafen ↔ sleep, slept. And kommen sits in its own honest corner: kommen, kam, gekommen ↔ come, came, come — the melody you already drilled.",
      footnotes: [],
      linguist_note:
        "The du/er present-tense vowel change (gibt, nimmt, fährt, schläft) is i-mutation — the same umlaut that will build plurals and comparatives later. The strong verbs are where it has been hiding all along.",
    },
    exercises: [
      {
        id: "l1902_e1",
        type: "matching_pairs",
        prompt: "Family album one (e→a) — match the paradigms:",
        matching_pairs: [
          { id: "af1", english: "give / gave / given", german: "geben / gab / gegeben" },
          { id: "af2", english: "speak / spoke / spoken", german: "sprechen / sprach / gesprochen" },
          { id: "af3", english: "take (nim) / took", german: "nehmen / nahm / genommen" },
          { id: "af4", english: "fare / fared", german: "fahren / fuhr / gefahren" },
          { id: "af5", english: "fall / fell / fallen", german: "fallen / fiel / gefallen" },
          { id: "af6", english: "spring / sprang / sprung", german: "springen / sprang / gesprungen" },
        ],
        target_answer: "geben / gab / gegeben, sprechen / sprach / gesprochen, nehmen / nahm / genommen, fahren / fuhr / gefahren, fallen / fiel / gefallen, springen / sprang / gesprungen",
        meaning: "the give, speak, take, fare, fall, and spring melodies",
        explanation: "e→a in the first family, a→u in the second — the melodies cross the North Sea intact, and fall/spring join the album note for note.",
      },
      {
        id: "l1902_e2",
        type: "shift_select",
        prompt: "'er _____ ein Bier.' (geben, 3rd person present — mind the vowel!)",
        options: ["gibt", "gab", "gibst", "geben"],
        target_answer: "gibt",
        meaning: "er gibt ein Bier = he gives a beer",
        explanation: "geben's du/er present mutates to i: du gibst, er gibt. The past gab is a different note. The melodies keep singing across the album: blasen blies, frieren fror, fliegen flog — the vowel IS the tense.",
      },
      {
        id: "l1902_e3",
        type: "derive",
        prompt: "Family e→a: 'treten' in the er-past →",
        english_hint: "the e opens to a",
        target_answer: "trat",
        meaning: "er trat = he stepped",
        explanation: "treten, trat, getreten — tread/trod/trodden, note for note. The e→a melody again.",
      },
      {
        id: "l1902_e4",
        type: "morpheme_tiles",
        prompt: "Build the participle of 'sprechen':",
        tile_options: ["ge", "sproch", "en", "t", "sprich"],
        target_answer: "gesprochen",
        meaning: "spoken",
        explanation: "ge- + the past vowel o + -en: gesprochen — speak/spoke/spoken, note for note.",
      },
      {
        id: "l1902_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'He gave me the book'",
        target_answer: "Er hat mir das Buch gegeben",
        meaning: "He gave me the book",
        vocab_hints: [
          {
            word: "mir",
            translation: "to me (dative)",
            note: "the receiver takes the dative — mir, the 'give it me' fossil",
          },
        ],
        word_bank: ["Er", "hat", "mir", "das", "Buch", "gegeben"],
        explanation: "geben, gab, gegeben in a full Perfekt bracket — with the dative mir riding inside: give gave given, to-me.",
      },
    ],
    summary: {
      outcome: "Conjugate the e→a and a→u strong families through past and participle.",
      use_example: { german: "Er hat mir das Buch gegeben.", english: "He gave me the book." },
      takeaway: "Three melodies cover a dozen verbs: e→a (geben), a→u (fahren), and the sleep class (schlafen/schlief).",
      curiosity_teaser: "Next: dachte & the Suppletive Irregulars — think/thought ↔ denken/dachte, where both languages swap in a new past.",
    },
  },
  {
    id: 1903,
    slug: "dachte-and-the-suppletive-irregulars",
    title: "dachte & the Suppletive Irregulars",
    subtitle: "think/thought ↔ denken/dachte, bring/brought ↔ bringen/brachte, go/went ↔ gehen/ging",
    phase: 3,
    shift_categories: ["strong_verbs_ablaut", "th_to_d"],
    word_ids: ["denken", "bringen", "gehen", "danken", "ding", "schlagen", "stehlen", "blasen", "frieren", "fallen", "springen", "treten"],
    table_word_ids: ["denken", "bringen", "gehen", "danken"],
    hook: {
      title: "The Verbs That Changed Their Past",
      content:
        "Some verbs refused the vowel melody and hired a whole new past. English: think, thought. bring, brought. go, went (went is actually a stolen piece of the verb 'wend'!). German did the same, with the same verbs: denken, dachte. bringen, brachte. gehen, ging. And the twist that proves the siblinghood: the borrowed pasts are also cognates — thought and dachte are one word (th→d and the gh→ch you know from Nacht), brought and brachte are one word. Even the irregulars are twins.",
      footnotes: [
        {
          marker: "1",
          title: "Went Is a Word Thief",
          content:
            "Old English had ēode for the past of 'go'. Middle English replaced it with wente — the past of wend ('to wend one's way'). German ging kept a melody of its own instead. Suppletion — borrowing a past from a neighbor verb — happened independently, but bringen/brachte ↔ bring/brought shows both languages drew from the same ancestral deck.",
        },
      ],
    },
    pattern: {
      title: "The Mixed Verbs",
      content:
        "denken, dachte, gedacht ↔ think, thought: the vowel changes AND a t arrives — a hybrid of strong and weak. bringen, brachte, gebracht ↔ bring, brought: the same hybrid, the same English twin. danken (to thank) follows its cousin denken: dankte, gedankt. gehen, ging, gegangen ↔ go, went: here German stayed melodic while English went shopping. The pattern to internalize: a handful of high-frequency verbs are 'mixed' — vowel change plus a dental -t- — and English has the identical handful: think, bring, buy, catch, teach.",
      footnotes: [],
      linguist_note:
        "thought ↔ dachte is a triple-shift showpiece: th → d, the vowel drift, and gh → ch (the same gh that lives in Nacht and Licht). Every consonant and vowel in the pair obeys a law already in your ledger.",
    },
    exercises: [
      {
        id: "l1903_e1",
        type: "matching_pairs",
        prompt: "Match the mixed verbs with their English twins:",
        matching_pairs: [
          { id: "sv1", english: "think / thought", german: "denken / dachte" },
          { id: "sv2", english: "bring / brought", german: "bringen / brachte" },
          { id: "sv3", english: "go / went", german: "gehen / ging" },
          { id: "sv4", english: "thank / thanked", german: "danken / dankte" },
          { id: "sv5", english: "slay / slew / slain", german: "schlagen / schlug / geschlagen" },
        ],
        target_answer: "denken / dachte, bringen / brachte, gehen / ging, danken / dankte",
        meaning: "the think, bring, go, thank pasts",
        explanation: "The mixed verbs — vowel change plus a dental -t- — exist identically in both languages.",
      },
      {
        id: "l1903_e2",
        type: "shift_select",
        prompt: "Which shifts connect English 'thought' and German 'dachte'?",
        options: [
          "TH → D and GH → CH — plus the vowel drift",
          "Only the vowel changed",
          "D → T and P → F",
          "They are unrelated words",
        ],
        target_answer: "TH → D and GH → CH — plus the vowel drift",
        meaning: "thought ↔ dachte: a double-shift pair",
        explanation: "The same machinery as brother/Bruder and Nacht/night, applied to an irregular past. Even the exceptions obey the laws. The ablaut shelf holds the rest: fallen fiel, springen sprang, blasen blies, frieren fror — five verbs, five vowels, one system.",
      },
      {
        id: "l1903_e3",
        type: "derive",
        prompt: "Ich-form past of 'denken': 'Ich _____ an dich.' (I thought of you):",
        english_hint: "think / thought — the hybrid",
        target_answer: "dachte",
        meaning: "Ich dachte an dich = I thought of you",
        explanation: "denken, dachte, gedacht — vowel + dental, exactly like think, thought. treten kept it simpler: trat — tread/trod.",
      },
      {
        id: "l1903_e4",
        type: "reverse_cognate",
        prompt: "What English verb is the twin of 'stehlen'?",
        target_answer: "steal",
        meaning: "to steal (twin of German stehlen)",
        explanation: "stehlen/steal — the same ancient theft, with the same strong past: stahl ↔ stole. Both languages kept the loot.",
      },
      {
        id: "l1903_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'I brought bread and thought of you'",
        target_answer: "Ich brachte Brot und dachte an dich",
        meaning: "I brought bread and thought of you",
        vocab_hints: [
          {
            word: "an",
            translation: "of / about (with denken)",
            note: "denken an — the pairing you have used since the TH→D lesson",
          },
        ],
        word_bank: ["Ich", "brachte", "Brot", "und", "dachte", "an", "dich"],
        explanation: "Two mixed pasts in one sentence: brachte and dachte — brought and thought, twins at work.",
      },
    ],
    summary: {
      outcome: "Use dachte, brachte, ging — and hear thought and dachte as one double-shift word.",
      use_example: { german: "Ich brachte Brot und dachte an dich.", english: "I brought bread and thought of you." },
      takeaway: "The mixed verbs change vowel AND add -t: denken/dachte ↔ think/thought — irregulars, but still twins.",
      curiosity_teaser: "Next: hatte & war — the fortress pasts of haben and sein, the storyteller's tense.",
    },
  },
  {
    id: 2001,
    slug: "methinks-and-dative-survivors",
    title: "methinks & Dative Survivors",
    subtitle: "English dative fossils mirrored in German — and the dem/den/dem grid row",
    phase: 3,
    shift_categories: [],
    word_ids: ["mir", "ihm", "helfen", "danken", "geben", "gefallen", "glück", "mut", "wunsch", "wünschen", "jung", "stark", "schwach", "gesund"],
    table_word_ids: ["mir", "ihm", "helfen", "danken", "geben"],
    hook: {
      title: "The Case English Buries and German Lives In",
      content:
        "English keeps dative fossils the way amber keeps insects. Methinks — 'it seems TO ME'. 'Give it me' — the British phrasing where me is the receiver. 'Give it him' — Chaucer's still-living dative. Methinks' partner 'me seems' survives as 'seems to me'. German never buried the case: it is a load-bearing wall. Mir ist kalt (it is cold TO ME), Es gefällt mir (it falls well TO ME), Ich helfe dir (I help TO thee). Today you collect the fossils and set them beside their living German relatives.",
      footnotes: [
        {
          marker: "1",
          title: "The dem/den/dem Row",
          content:
            "The dative article row: dem (masculine), der (feminine), dem (neuter), den (+ -n) plural. Masculine and neuter SHARE dem — and dem keeps the ancient m that the accusative softened to n (ihn, wen). English him, whom, and 'em all still wear that m.",
        },
      ],
    },
    pattern: {
      title: "Fossil ↔ Living Word",
      content:
        "Fossil one: methinks = mich dünkt's? no — mir dünkt's: 'it thinks ITSELF to me' — the experiencer dative, alive in German as Mir ist kalt, Mir ist schlecht. Fossil two: 'give it me' ↔ Gib es mir — the receiver marked by case, not by preposition. Fossil three: 'me seems' / 'seems to me' ↔ Es scheint mir. Fossil four: wham — 'give it him' ↔ Gib es ihm. The pattern: wherever English once let the pronoun alone mark the receiver, German still does — mir, dir, ihm are the entire living system, three words doing the work of English prepositions.",
      footnotes: [],
      linguist_note:
        "The dative experiencer is German's favorite feeling-grammar: Mir ist kalt/langweilig/schlecht — cold, bored, and bad all happen TO you. English needs 'I am' phrases; German keeps the ancient 'it is X to-me' frame.",
    },
    exercises: [
      {
        id: "l2001_e1",
        type: "matching_pairs",
        prompt: "Match each English fossil with its living German form:",
        matching_pairs: [
          { id: "md1", english: "methinks (it seems to me)", german: "Mir ist kalt (it is cold TO ME)" },
          { id: "md2", english: "give it me", german: "Gib es mir" },
          { id: "md3", english: "give it him", german: "Gib es ihm" },
          { id: "md4", english: "I give it thee", german: "Ich gebe es dir" },
          { id: "md5", english: "luck", german: "das Glück" },
          { id: "md6", english: "courage (mood's twin)", german: "der Mut" },
        ],
        target_answer: "Mir ist kalt, Gib es mir, Gib es ihm, Ich gebe es dir, das Glück, der Mut",
        meaning: "it is cold to me, give it me, give it him, I give it thee, luck, courage",
        explanation: "Every English dative fossil has a working German relative — the case never died on the continent. And the feeling-nouns ride the dative: Glück and Mut happen TO you.",
      },
      {
        id: "l2001_e2",
        type: "shift_select",
        prompt: "Which article completes the dative row: 'mit _____ Mann' (with the man — masculine)?",
        options: ["dem", "den", "der", "des"],
        target_answer: "dem",
        meaning: "mit dem Mann — with the man (dative)",
        explanation: "Masculine dative = dem — the same m you hear in him, whom, and 'em. Wünschen (wish — the twin) hands its gift TO someone: Ich wünsche dir Glück — the wish travels dative.",
      },
      {
        id: "l2001_e3",
        type: "shift_select",
        prompt: "'Ich helfe _____ Frau.' (I help the woman — dative):",
        options: ["der", "die", "den", "dem"],
        target_answer: "der",
        meaning: "Ich helfe der Frau = I help the woman",
        explanation: "Feminine dative = der — the article that does double duty as 'to the' and 'the' (feminine). The fortress adjectives wait outside the case: jung, stark, schwach, gesund — they never decline.",
      },
      {
        id: "l2001_e4",
        type: "reverse_cognate",
        prompt: "What archaic English verb-phrase (Shakespeare's favorite) means the same as 'Mir ist kalt'?",
        target_answer: "methinks",
        meaning: "methinks ↔ the dative experiencer",
        explanation: "Both are 'it happens TO me' — the dative experiencer that German kept as its daily feeling-grammar.",
      },
      {
        id: "l2001_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'I give it to him' (the German way — no 'to')",
        target_answer: "Ich gebe es ihm",
        meaning: "I give it him / to him",
        word_bank: ["Ich", "gebe", "es", "ihm", "Mut", "Wunsch"],
        explanation: "The dative ihm does the job of English 'to him' — the case IS the preposition.",
      },
    ],
    summary: {
      outcome: "Read English dative fossils and build German dative sentences with dem/der articles.",
      use_example: { german: "Ich gebe es ihm.", english: "I give it him (to him)." },
      takeaway: "methinks, 'give it me', 'give it him' — the dative never died in English, it just went fossil; German keeps it employed.",
      curiosity_teaser: "Next: mir / dir / ihm Pronoun Gym — twenty give/tell/thank drills with the receiver pronouns.",
    },
  },
  {
    id: 2002,
    slug: "mir-dir-ihm-pronoun-gym",
    title: "mir / dir / ihm Pronoun Gym",
    subtitle: "Twenty give/tell/thank drills with the receiver pronouns",
    phase: 3,
    shift_categories: [],
    word_ids: ["mir", "dir", "ihm", "geben", "danken", "helfen", "gefallen", "sagen"],
    table_word_ids: ["mir", "dir", "ihm", "geben", "danken"],
    hook: {
      title: "The Receiver Circuit",
      content:
        "Three pronouns, four verbs, real sentences. Gib mir das Buch. Ich danke dir. Ich helfe ihm. Es gefällt mir. That is the entire gym — and every rep is a sentence Germans say daily. The skill is reflex-speed: receiver in the sentence? → mir/dir/ihm, not mich/dich/ihn. The trap is that English uses the SAME pronoun forms for both jobs (I thank you / you thank me), so your instinct reaches for the accusative. The circuit retrains it.",
      footnotes: [
        {
          marker: "1",
          title: "The One-Syllable Rule of Thumb",
          content:
            "After geben, danken, helfen, gefallen, sagen (to!), and the prepositions mit, bei, zu, von, aus, nach, seit — the receiver answers in dative: mir, dir, ihm, ihr, uns, euch, ihnen. Notice mir/dir both end in -r: the dative's signature, the r of 'for'.",
        },
      ],
    },
    pattern: {
      title: "The Circuit",
      content:
        "Round one — giving: Gib mir das Salz. Er gibt ihr das Buch (ihr — to her, the feminine dative). Round two — thanking: Ich danke dir und du dankst mir. Round three — helping: Wir helfen ihm. Round four — pleasing: Das gefällt mir (that falls well to me — 'I like that'). Round five — commanding: Sag mir! — tell me! Five rounds, three pronouns, permanent reflex.",
      footnotes: [],
      linguist_note:
        "The full dative pronoun set: mir, dir, ihm, ihr (to her), uns, euch, ihnen. English mirrors it scattered: me, thee, him, her, us, you, 'em — the same case, half-buried.",
    },
    exercises: [
      {
        id: "l2002_e1",
        type: "matching_pairs",
        prompt: "Circuit round one — match the receiver sentences:",
        matching_pairs: [
          { id: "pg1", english: "Give me the book", german: "Gib mir das Buch" },
          { id: "pg2", english: "I thank you (thee)", german: "Ich danke dir" },
          { id: "pg3", english: "We help him", german: "Wir helfen ihm" },
          { id: "pg4", english: "I like that (it pleases me)", german: "Das gefällt mir" },
        ],
        target_answer: "Gib mir das Buch, Ich danke dir, Wir helfen ihm, Das gefällt mir",
        meaning: "give me the book, I thank you, we help him, I like that",
        explanation: "Every receiver takes the dative: mir, dir, ihm — the giving case in action.",
      },
      {
        id: "l2002_e2",
        type: "shift_select",
        prompt: "Trap check: 'Ich sehe ___.' (I see HIM — direct object!):",
        options: ["ihn", "ihm", "ihnen", "ihres"],
        target_answer: "ihn",
        meaning: "Ich sehe ihn — accusative (him)",
        explanation: "sehen acts directly on its object — accusative ihn. helpen-style receiver verbs take ihm; seeing takes ihn.",
      },
      {
        id: "l2002_e3",
        type: "shift_select",
        prompt: "'Ich helfe ___.' (I help HER — die Frau):",
        options: ["ihr", "ihm", "ihnen", "sie"],
        target_answer: "ihr",
        meaning: "Ich helfe ihr = I help her (to-her)",
        explanation: "ihr is the feminine dative — 'to her'. helfen demands it; sie would be the accusative.",
      },
      {
        id: "l2002_e4",
        type: "derive",
        prompt: "Say thanks: 'Ich danke ___!' (to YOU, plural — Ihnen):",
        english_hint: "the polite dative of Sie",
        target_answer: "Ihnen",
        meaning: "Ich danke Ihnen = I thank you (formal)",
        explanation: "Ihnen — the formal dative, capital I. Your thank-you has a formal register: Ich danke Ihnen.",
      },
      {
        id: "l2002_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'Give me the salt please'",
        target_answer: "Gib mir das Salz bitte",
        meaning: "Give me the salt please",
        vocab_hints: [
          {
            word: "Gib",
            translation: "give! (du command form)",
            note: "geben → gib! — the command chops the -en; with e-_added: Gib mir!",
          },
        ],
        word_bank: ["Gib", "mir", "das", "Salz", "bitte"],
        explanation: "Command + dative receiver + accusative thing + bitte — the four-part table sentence of every German kitchen.",
      },
    ],
    summary: {
      outcome: "Use mir/dir/ihm/ihr/Ihnen at reflex speed with geben, danken, helfen, gefallen.",
      use_example: { german: "Gib mir das Salz bitte.", english: "Give me the salt please." },
      takeaway: "Receiver in the sentence → dative pronoun. Sehen takes ihn; helfen takes ihm — the verb decides, the case obeys.",
      curiosity_teaser: "Next: Dative Verbs — helfen, danken, gefallen — the club that refuses the accusative.",
    },
  },
  {
    id: 21,
    slug: "compound-noun-engineering",
    title: "Compound Noun Engineering",
    subtitle: "Handschuh = hand-shoe. German builds words like Lego — and English does too.",
    phase: 3,
    shift_categories: [],
    word_ids: ["haus", "wasser", "buch", "wort", "zeit", "mann", "frau", "kind", "zahnarzt", "hauptstadt", "glück", "mut", "wunsch", "schmecken"],
    table_word_ids: ["haus", "wasser", "buch", "mann", "frau", "kind"],
    hook: {
      title: "The Lego Grammar",
      content:
        "German has a reputation for impossible long words. It has actually just refused to forget how English words used to be built. Handschuh is hand-shoe (a glove). Zahnarzt is tooth-doctor (a dentist). Krankenhaus is sick-people-house (a hospital). English once built exactly the same way — and still does, half asleep: cup-board became cupboard, break-fast became breakfast. The difference: German writes its Lego without dropping pieces. When you meet a German monster word, you do not translate it. You take it apart.",
      footnotes: [
        {
          marker: "1",
          title: "The Head Word Wears the Pants",
          content:
            "The LAST piece of a compound runs the show — its gender, its plural, its meaning core. das Haus → das Krankenhaus (neuter). der Zug → der Aufzug (masculine). Learn the last piece and you own the whole word.",
        },
      ],
    },
    pattern: {
      title: "Split, Read, Predict",
      content:
        "Splitting: Handschuh = Hand + Schuh. Feuerzeug = Feuer + Zeug ('fire-stuff' — a lighter). Fernseher = fern + Seher ('far-seer' — a television). Staubsauger = Staub + Sauger ('dust-sucker' — a vacuum cleaner). Reading rule: split at the last plausible noun, then ask what a 'X-Y' would literally be. Gender rule: der Apfel + der Kuchen = der Apfelkuchen — the head (Kuchen) donates the article. Your own vocabulary compounds for free: Haus + Tür? Tür is taught — Haustür, the front door, literally house-door.",
      footnotes: [],
      linguist_note:
        "English and German both inherited compounding from Proto-Germanic; English then wore its compounds smooth (lord ← hlāf-weard, 'loaf-ward' — the bread-keeper!). German's transparent writing system is the conservative option, not the strange one.",
    },
    exercises: [
      {
        id: "l21_e1",
        type: "shift_select",
        prompt: "Compound gender rule: der Apfel + der Kuchen = ?",
        options: ["der Apfelkuchen — the last noun donates the gender", "das Apfelkuchen — compounds are neuter", "die Apfelkuchen — food is feminine", "no article — compounds reject articles"],
        target_answer: "der Apfelkuchen — the last noun donates the gender",
        meaning: "The head word rules",
        explanation: "The final piece is the grammatical head: its article, its plural, its meaning core. das Haus → das Krankenhaus.",
      },
      {
        id: "l21_e2",
        type: "reverse_cognate",
        prompt: "Split it: 'Handschuh' is literally 'hand-shoe' — what is the real word in English?",
        target_answer: "glove",
        meaning: "Handschuh = glove (hand-shoe)",
        explanation: "German describes the function; English kept a Norse word. Both languages agree a glove is footwear for your hand. And when the compound cake schmeckt — taste ↔ schmecken, smack's cousin — the compound rule still holds: der Kuchen donates the gender.",
      },
      {
        id: "l21_e3",
        type: "matching_pairs",
        prompt: "Match each transparent compound with its literal reading:",
        matching_pairs: [
          { id: "cn1", english: "tooth-doctor", german: "der Zahnarzt" },
          { id: "cn2", english: "fire-stuff", german: "das Feuerzeug" },
          { id: "cn3", english: "dust-sucker", german: "der Staubsauger" },
          { id: "cn4", english: "far-seer", german: "der Fernseher" },
          { id: "cn5", english: "head-city", german: "die Hauptstadt" },
        ],
        target_answer: "der Zahnarzt, das Feuerzeug, der Staubsauger, der Fernseher, die Hauptstadt",
        meaning: "dentist, lighter, vacuum cleaner, television, capital (city)",
        explanation: "German calqued the Greek/Latin science words from native parts — read the parts and the meaning is free. The head word donates the gender: Arzt → der, Stadt → die.",
      },
      {
        id: "l21_e4",
        type: "morpheme_tiles",
        prompt: "Build the dentist from Lego parts (tooth + doctor):",
        tile_options: ["Zahn", "arzt", "haus", "zeug", "schuh"],
        target_answer: "Zahnarzt",
        meaning: "dentist (tooth-doctor)",
        explanation: "Zahn + Arzt = Zahnarzt. Same factory: Augenarzt (eye-doctor), Tierarzt (animal-doctor). And the compound feelings ride the same shelf: der Mut (mood's twin), der Wunsch, das Glück — luck, the one English borrowed back.",
      },
      {
        id: "l21_e5",
        type: "transcribe",
        prompt: "Put into German:",
        idea: "you're introducing your neighbors to a friend: the man and the woman have a child",
        cues: [
          "Flags first: der Mann, die Frau — then the plural verb joins them: haben ein Kind",
        ],
        target_answer: "Der Mann und die Frau haben ein Kind",
        meaning: "The man and the woman have a child",
        word_bank: ["Der", "Mann", "und", "die", "Frau", "haben", "ein", "Kind", "hat"],
        explanation: "Two subjects, plural verb, ein Kind — the family trio with their flags: der, die, das.",
      },
    ],
    summary: {
      outcome: "Split compounds, read them literally, and predict gender from the head noun.",
      use_example: { german: "Der Mann und die Frau haben ein Kind.", english: "The man and the woman have a child." },
      takeaway: "Compounds are Lego: split at the last noun, read literally, and let the head word donate the gender.",
      curiosity_teaser: "Next: the 32 Calques Deep-Dive — the curated compound gallery from Kühlschrank to Backpfeife.",
    },
    twist: {
      prompt: "Hearing check — negate the noun: they have a child becomes they have NO child. (kein, declined like ein.)",
      target_answer: "Sie haben kein Kind",
      word_bank: ["Sie", "haben", "kein", "Kind", "nicht"],
      explanation: "Kind is neuter, so kein stays bare: kein Kind. nicht is for verbs — the noun loses its 'one' instead. And the plural verb tells you Sie is 'they', not the formal 'you'.",
    },
  },
  {
    id: 22,
    slug: "gender-heuristics-suffix-clues",
    title: "Gender Heuristics & Suffix Clues",
    subtitle: "Decode gender instead of memorizing: -ung is feminine, -chen is neuter, -er is masculine",
    phase: 3,
    shift_categories: [],
    word_ids: ["wahrnehmung", "begriff", "zeit", "woche", "straße", "tochter", "butter", "warnen", "zeitung", "berg", "geburtstag", "feiern", "flugzeug", "briefmarke"],
    table_word_ids: ["wahrnehmung", "straße", "woche", "butter", "tochter", "zeit"],
    hook: {
      title: "The Suffix Tells You",
      content:
        "You were told gender is arbitrary. Mostly false: German gender is written on the word's tail. Endings in -ung, -heit, -keit, -schaft, -ion are feminine — die Wahrnehmung (perception), die Zeitung (newspaper, 'a timing'). -chen and -lein are neuter, no exceptions — das Mädchen ('the little girl', the famous paradox). Nouns built from verbs with -er are masculine — der Staubsauger, the dust-sucker. Most plain -e nouns are feminine — die Straße, die Butter, die Zeit. Learn a dozen suffix laws and you can guess the gender of thousands of words you have never seen.",
      footnotes: [
        {
          marker: "1",
          title: "Das Mädchen, the Famous Paradox",
          content:
            "Mädchen ('little maid') ends in the diminutive -chen, and -chen words are ALWAYS neuter — so the girl is grammatically an 'it'. The suffix outranks the sex: die Magd + chen → das Mädchen. The same law makes das Fräulein neuter.",
        },
      ],
    },
    pattern: {
      title: "The Suffix Court",
      content:
        "Feminine squad: -ung (die Zeitung, die Wahrnehmung — built from verbs!), -heit, -keit (die Gesundheit — health), -schaft (die Wissenschaft — knowledge-ship, science), -ion (die Nation), and most -e (die Straße, die Zeit, die Woche). Masculine squad: -er from verbs (der Sauger, der Fernseher), -ling (der Zwilling!), -ismus (der Tourismus). Neuter squad: -chen, -lein (das Mädchen, das Fräulein), and all -zeug words (das Feuerzeug — the -zeug law you know from the compounds). Collect the suffixes and every new word arrives pre-gendered.",
      footnotes: [],
      linguist_note:
        "These suffixes are the app's compendium in miniature: Wahrnehmung is the calque of Latin perceptio (truth-taking), Begriff the calque of conceptus (by-grip) — the abstract suffixes rode in with the Latin calques and kept their gender accordingly.",
    },
    exercises: [
      {
        id: "l22_e1",
        type: "shift_select",
        prompt: "Suffix law check: 'die Warnung' — what gender does -ung demand?",
        options: ["feminine — all -ung nouns are die", "masculine", "neuter", "depends on the verb"],
        target_answer: "feminine — all -ung nouns are die",
        meaning: "-ung → die, no exceptions",
        explanation: "die Warnung, die Zeitung, die Wahrnehmung — the -ung factory stamps feminine. Not every noun obeys a suffix: der Berg wears der with no suffix at all — sometimes the gender is pure ancestry.",
      },
      {
        id: "l22_e2",
        type: "derive",
        prompt: "Run the factory: build the -ung noun from 'warnen' (the act of warning):",
        english_hint: "warn + ung",
        target_answer: "Warnung",
        meaning: "die Warnung — the warning",
        explanation: "warnen → Warnung: chop the verb's -en, glue -ung, collect the feminine article for free.",
      },
      {
        id: "l22_e3",
        type: "shift_select",
        prompt: "The famous paradox: why is 'das Mädchen' (the girl) neuter?",
        options: [
          "The suffix -chen is ALWAYS neuter — it outranks the meaning",
          "Girls were grammatically minor historically",
          "It is a spelling mistake that stuck",
          "Mädchen is a foreign loanword",
        ],
        target_answer: "The suffix -chen is ALWAYS neuter — it outranks the meaning",
        meaning: "The -chen law beats the sex of the referent",
        explanation: "die Magd + -chen → das Mädchen. Suffix laws are the one place German gender is perfectly predictable — das Flugzeug obeys -zeug, and der Geburtstag carries Tag's masculine law into the compound.",
      },
      {
        id: "l22_e4",
        type: "matching_pairs",
        prompt: "Match each suffix with its gender law:",
        matching_pairs: [
          { id: "gh1", english: "-ung", german: "feminine — die Zeitung" },
          { id: "gh2", english: "-chen", german: "neuter — das Mädchen" },
          { id: "gh3", english: "-er agent nouns", german: "masculine — der Staubsauger" },
          { id: "gh4", english: "plain -e (mostly)", german: "feminine — die Straße, die Briefmarke" },
        ],
        target_answer: "feminine — die Zeitung, neuter — das Mädchen, masculine — der Staubsauger, feminine — die Straße, die Zeit",
        meaning: "the four most useful suffix laws",
        explanation: "Four laws cover thousands of nouns — guess first, verify later.",
      },
      {
        id: "l22_e5",
        type: "transcribe",
        prompt: "Tell me:",
        idea: "you're describing your morning scene: the woman reads the newspaper",
        cues: [
          "Two feminine flags on show: die Frau (plain -e law) and die Zeitung (-ung factory) — and lesen mutates: sie liest",
        ],
        target_answer: "Die Frau liest die Zeitung",
        meaning: "The woman reads the newspaper",
        vocab_hints: [
          {
            word: "liest",
            translation: "reads (er/sie form)",
            note: "lesen → er liest — the vowel mutates like geben → gibt",
          },
          {
            word: "die Zeitung",
            translation: "the newspaper",
            note: "Zeit + ung — 'a timing' — built by the feminine -ung factory",
          },
        ],
        word_bank: ["Die", "die", "Frau", "liest", "Zeitung", "lesen", "feiern"],
        explanation: "Two feminine flags in one sentence: die Frau (plain -e law) and die Zeitung (-ung law).",
      },
    ],
    summary: {
      outcome: "Predict gender from suffixes: -ung/-heit/-e feminine, -chen neuter, -er/-ling masculine.",
      use_example: { german: "Die Frau liest die Zeitung.", english: "The woman reads the newspaper." },
      takeaway: "Gender is written on the tail: learn the suffix court and new nouns arrive pre-gendered.",
      curiosity_teaser: "Next: the feminine squad — -ung, -heit, -keit drills: derive abstract nouns and their genders.",
    },
    twist: {
      prompt: "She quit the news: negate the noun — the woman reads the newspaper becomes the woman reads NO newspaper. (The -ung law still holds.)",
      target_answer: "Die Frau liest keine Zeitung",
      word_bank: ["Die", "Frau", "liest", "keine", "kein", "Zeitung"],
      explanation: "Zeitung is feminine (-ung law), so kein takes its feminine dress: keine. The suffix decided the gender — and the negation followed it.",
    },
  },
  {
    id: 2101,
    slug: "32-calques-deep-dive",
    title: "32 Calques Deep-Dive",
    subtitle: "The curated compound gallery — Kühlschrank to Kummerspeck — with literal glosses",
    phase: 3,
    shift_categories: [],
    word_ids: ["haus", "wasser", "kind", "garten", "zeit", "fußball", "regenbogen", "heimweh", "zahnarzt", "hauptstadt", "schmecken"],
    table_word_ids: ["haus", "wasser", "kind", "garten"],
    hook: {
      title: "The Gallery",
      content:
        "The compendium keeps thirty-two curated compounds, each one a two-word philosophy lesson. Kühlschrank: cool-cabinet (the fridge). Kummerspeck: grief-bacon (comfort-eating weight). Glühbirne: glowing-pear (a light bulb). Backpfeife: cheek-whistle (a slap so hard the cheek rings). Wissenschaft: knowledge-ship (science). German translated the Latin science words into native Lego — perceptio became Wahrnehmung ('truth-taking'), conceptus became Begriff ('by-grip'). This lesson walks the gallery and teaches you to read every frame.",
      footnotes: [
        {
          marker: "1",
          title: "Why Calques Matter",
          content:
            "A calque is a loan-translation: borrow the MEANING, build it from your OWN parts. Fernseher calques tele-vision (far-seeing) from Greek and Latin roots — the same idea, Germanic wood. English borrowed the Greek boards instead; that is why 'television' sounds smart and 'Fernseher' sounds like furniture.",
        },
      ],
    },
    pattern: {
      title: "Read the Frames",
      content:
        "The household row: Krankenhaus (sick-house), Krankenschwester (sick-sister, a nurse), Staubsauger (dust-sucker), Flugzeug (flight-stuff), Feuerzeug (fire-stuff), Fahrzeug (drive-stuff), Spielzeug (play-stuff), Werkzeug (work-stuff) — the -zeug family alone is a toolbox. The body row: Zahnarzt (tooth-doctor), Fingerhut (finger-hat, a thimble), Glühbirne (glowing-pear). The city row: Spätkauf (late-buy, the Berlin corner store), Autobahn (car-track), Eisenbahn (iron-track). The time row: Donnerstag (thunder-day), übermorgen (over-morrow), vorgestern (before-yesterday). Each one is an app in two words.",
      footnotes: [],
      linguist_note:
        "The -zeug family (das) and the -er agent family (der) are gender laws doing double duty as compound factories — the suffix court from the Gender lesson runs the gallery's grammar.",
    },
    exercises: [
      {
        id: "l2101_e1",
        type: "matching_pairs",
        prompt: "Gallery wall one — match the compound with its literal gloss:",
        matching_pairs: [
          { id: "cd1", english: "cool-cabinet", german: "der Kühlschrank" },
          { id: "cd2", english: "sick-people-house", german: "das Krankenhaus" },
          { id: "cd3", english: "glowing-pear", german: "die Glühbirne" },
          { id: "cd4", english: "children-garden", german: "der Kindergarten" },
          { id: "cd5", english: "foot-ball (the game)", german: "der Fußball" },
          { id: "cd6", english: "rain-bow", german: "der Regenbogen" },
          { id: "cd7", english: "home-woe", german: "das Heimweh" },
        ],
        target_answer: "der Kühlschrank, das Krankenhaus, die Glühbirne, der Kindergarten, der Fußball, der Regenbogen, das Heimweh",
        meaning: "refrigerator, hospital, lightbulb, kindergarten, football, rainbow, homesickness",
        explanation: "Read the parts, get the meaning free — and note the head word donating each gender. Fußball, Regenbogen and Heimweh are English's own compounds seen in the German mirror.",
      },
      {
        id: "l2101_e2",
        type: "shift_select",
        prompt: "The -zeug family: why is the lighter 'das Feuerzeug'?",
        options: [
          "All -zeug compounds are neuter — das is the suffix law",
          "Fire is neuter in German culture",
          "It is a French loanword",
          "Zeug forces masculine",
        ],
        target_answer: "All -zeug compounds are neuter — das is the suffix law",
        meaning: "das Feuerzeug, das Flugzeug, das Spielzeug",
        explanation: "One suffix, one gender, a whole toolbox of machines: flight-stuff, fire-stuff, play-stuff. And the picnic verdict rides the same reading habit: der Kuchen schmeckt — taste's cousin smack at work.",
      },
      {
        id: "l2101_e3",
        type: "reverse_cognate",
        prompt: "'Fernseher' is the calque of which English word (built from Greek tele + Latin vision)?",
        target_answer: "television",
        meaning: "Fernseher ↔ television (far-seer)",
        explanation: "Same Greek-Latin idea, Germanic wood: fern (far) + Seher (seer). A loan-translation — a calque.",
      },
      {
        id: "l2101_e4",
        type: "shift_select",
        prompt: "'Kummerspeck' — grief-bacon — means what in real usage?",
        options: [
          "Weight gained from comfort eating during emotional stress",
          "Bacon served at funerals",
          "A pig that grieves",
          "A sad rasher",
        ],
        target_answer: "Weight gained from comfort eating during emotional stress",
        meaning: "Kummerspeck — the compound as philosophy",
        explanation: "German welds two concrete nouns into an entire human situation — the compounding system as emotional vocabulary.",
      },
      {
        id: "l2101_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'The children play in the kindergarten'",
        target_answer: "Die Kinder spielen im Kindergarten",
        meaning: "The children play in the kindergarten",
        vocab_hints: [
          {
            word: "spielen",
            translation: "to play",
            note: "das Spiel (the game) + -en — Spielzeug is play-stuff",
          },
          {
            word: "im",
            translation: "in the",
            note: "in + dem — the same contraction from the Hidden Twins lesson",
          },
        ],
        word_bank: ["Die", "Kinder", "spielen", "im", "Kindergarten"],
        explanation: "The compound explains itself in context: Kinder + Garten — and English borrowed the whole word intact in 1840.",
      },
    ],
    summary: {
      outcome: "Read and gloss the 32 curated calques, including the -zeug family.",
      use_example: { german: "Die Kinder spielen im Kindergarten.", english: "The children play in the kindergarten." },
      takeaway: "Every calque is a loan-translation — tele-vision became far-seer; read the Germanic wood instead of the Greek boards.",
      curiosity_teaser: "Next: Compound Builder Workshop — assemble compounds from taught nouns and predict the gender.",
    },
  },
  {
    id: 2102,
    slug: "compound-builder-workshop",
    title: "Compound Builder Workshop",
    subtitle: "Assemble compounds from taught nouns — and predict gender from the head",
    phase: 3,
    shift_categories: [],
    word_ids: ["zahn", "donner", "tag", "buch", "haus", "apfel", "kind", "garten", "wasser", "glas", "geburtstag", "feiern", "zahnarzt", "hauptstadt", "fußball", "regenbogen", "heimweh"],
    table_word_ids: ["zahn", "donner", "tag", "apfel", "kind", "garten"],
    hook: {
      title: "You Are the Factory Now",
      content:
        "You have split compounds; today you build them. The parts are all on your bench: Zahn, Donner, Tag, Apfel, Buch, Haus, Kind, Garten. The rules are two: glue the nouns in meaning order (the modifier first, the head last), and let the head word donate the gender. Zahn + Arzt = der Zahnarzt. Donner + Tag = der Donnerstag. Apfel + Kuchen (a hint-word) = der Apfelkuchen. Build wrong and German speakers will still understand you — compounding is productive grammar, not fixed vocabulary — but the head-word law keeps your articles honest.",
      footnotes: [
        {
          marker: "1",
          title: "German Lets You Coin",
          content:
            "Compound building is live grammar: a German can invent an absurdly long machine name and be understood. English does this too ('toothbrush holder') — German just never stopped showing the seams in writing.",
        },
      ],
    },
    pattern: {
      title: "Build, Then Predict",
      content:
        "Build: Kind + Garten = der Kindergarten (the head Garten donates der — and English borrowed it whole). Donner + Tag = der Donnerstag. Zahn + Arzt = der Zahnarzt. Haus + Tür = die Haustür (die Tür is the head — the door, not the house). Wasser + Glas = das Wasserglas (a glass of water as an object). Reverse-engineer: die Eisenbahn splits Eisen (iron) + Bahn (track) — der/die/das is your split hint. Then the workshop trick: if you know the head, you know the article before you know the compound.",
      footnotes: [],
      linguist_note:
        "Sometimes a linking -s- or -e- sneaks in between the parts. The glue is historical spelling, not grammar — learn compounds whole once they are coined.",
    },
    exercises: [
      {
        id: "l2102_e1",
        type: "morpheme_tiles",
        prompt: "Build the birthday (birth + day):",
        tile_options: ["Geburts", "tag", "haus", "zeit", "donner"],
        target_answer: "Geburtstag",
        meaning: "der Geburtstag — the birthday",
        vocab_hints: [
          {
            word: "Geburt",
            translation: "birth",
            note: "birth-day takes der Tag's article — the day is the head",
          },
        ],
        explanation: "Geburt + Tag = der Geburtstag — the head word Tag donates the masculine article. Then feiern carries the party: Wir feiern den Geburtstag. Zahnarzt built the same way last lesson.",
      },
      {
        id: "l2102_e2",
        type: "shift_select",
        prompt: "You coin 'Buchhaus' (a house of books). Which article?",
        options: ["das — Haus is the head word", "der — books are masculine", "die — plural head", "no article"],
        target_answer: "das — Haus is the head word",
        meaning: "das Buchhaus — the head donates the gender",
        explanation: "Modifier first, head last: Haus runs the grammar, so das Buchhaus. Hauptstadt works the same way (die Stadt is the head), and Heimweh weaves a feeling: Heim + Weh, home-woe.",
      },
      {
        id: "l2102_e3",
        type: "matching_pairs",
        prompt: "Match the built compound with its English meaning:",
        matching_pairs: [
          { id: "cw1", english: "thunder-day", german: "der Donnerstag" },
          { id: "cw2", english: "tooth-doctor", german: "der Zahnarzt" },
          { id: "cw3", english: "apple-cake", german: "der Apfelkuchen" },
          { id: "cw4", english: "children-garden", german: "der Kindergarten" },
          { id: "cw5", english: "foot-ball (the game)", german: "der Fußball" },
          { id: "cw6", english: "rain-bow", german: "der Regenbogen" },
        ],
        target_answer: "der Donnerstag, der Zahnarzt, der Apfelkuchen, der Kindergarten, der Fußball, der Regenbogen",
        meaning: "Thursday, dentist, apple cake, kindergarten, football, rainbow",
        explanation: "All six end in masculine heads — Tag, Arzt, Kuchen, Garten, Ball, Bogen — so all six wear der.",
      },
      {
        id: "l2102_e4",
        type: "shift_select",
        prompt: "Split it: 'die Haustür' — what is the head word?",
        options: ["die Tür (the door) — so it is die Haustür", "das Haus — houses dominate", "Both equally", "Neither — it is a loan"],
        target_answer: "die Tür (the door) — so it is die Haustür",
        meaning: "die Haustür = the front door (house-door)",
        explanation: "The door is the thing being named; the house only says which one. Head word = die Tür → die Haustür.",
      },
      {
        id: "l2102_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'The birthday is on Friday'",
        target_answer: "Der Geburtstag ist am Freitag",
        meaning: "The birthday is on Friday",
        vocab_hints: [
          {
            word: "am",
            translation: "on the (time)",
            note: "am = an + dem — the dative of time",
          },
        ],
        word_bank: ["Der", "Geburtstag", "ist", "am", "Freitag"],
        explanation: "Compound subject (der Geburtstag — Tag's article), dative of time (am Freitag), verb glued at 2.",
      },
    ],
    summary: {
      outcome: "Coin compounds from taught nouns and predict their articles via the head word.",
      use_example: { german: "Der Geburtstag ist am Freitag.", english: "The birthday is on Friday." },
      takeaway: "Modifier first, head last — and the head word donates gender, plural, and meaning core.",
      curiosity_teaser: "Next: reading compounds in the wild — six-word monsters, split into meaning.",
    },
  },
  {
    id: 23,
    slug: "plurals-and-i-mutation",
    title: "Plurals & i-Mutation",
    subtitle: "Mann→Männer is man→men: umlaut is English's fossil and German's living tool",
    phase: 3,
    shift_categories: [],
    word_ids: ["mann", "frau", "kind", "haus", "buch", "tochter", "fuß", "wasser", "glas", "blatt", "auge", "ei", "knie", "zeitung", "berg", "rechnung", "blume", "lampe", "bluse"],
    table_word_ids: ["mann", "fuß", "tochter", "haus", "buch", "kind"],
    hook: {
      title: "The Fossil You Speak Daily",
      content:
        "Say man and men. Foot and feet. Mouse and mice. Goose and geese. You are performing i-mutation — the ancient sound law that pulled a vowel toward i when a vanished -i suffix once followed it. German kept the suffix AND the vowel change, written as the two dots called umlaut: Mann → Männer, Fuß → Füße, Maus → Mäuse, Tochter → Töchter. English kept the vowel change and lost the dots. Your plurals are not a foreign system — they are your own fossil, still living on the continent.",
      footnotes: [
        {
          marker: "1",
          title: "The Vanished Suffix",
          content:
            "Proto-Germanic plurals once ended in -iz for some nouns. The i pulled the root vowel forward (a→ä, u→ü, ou→eu), then the suffix itself wore away. German writes the pulled vowel with ä/ö/ü; English just kept the pulled vowel — man/men, foot/feet — with no spelling to explain it.",
        },
      ],
    },
    pattern: {
      title: "Five Plural Patterns, One Mutation Star",
      content:
        "Pattern one, -er with umlaut: Mann → Männer, das Kind → die Kinder (no umlaut — the vowel never had an i to fear), das Buch → die Bücher (umlaut!). Pattern two, umlaut alone or with -e: der Apfel → die Äpfel, der Garten → die Gärten. Pattern three, -n/-en for the feminine squad: die Frau → die Frauen, die Zeit → die Zeiten, die Tochter → die Töchter (umlaut + n). Pattern four, -s for foreign and snappy words: das Auto → die Autos. Pattern five, no change at all: der Fernseher → die Fernseher — the -er agent nouns just stay. The dots are your friends: wherever German writes ä/ö/ü in a plural, English almost always changed the vowel too — Fuß/Füße ↔ foot/feet, Maus/Mäuse ↔ mouse/mice.",
      footnotes: [],
      linguist_note:
        "Umlaut is a sound law, not a decoration: it applies whenever a historical i/j followed the root vowel — plurals (Mann/Männer), comparatives (kalt/kälter, next lesson), and verb mutations (geben/gibt — the same law you met in the strong verbs).",
    },
    exercises: [
      {
        id: "l23_e1",
        type: "matching_pairs",
        prompt: "Match each singular with its umlaut plural — and its English fossil:",
        matching_pairs: [
          { id: "pl1", english: "Mann → ? (man/men)", german: "Männer" },
          { id: "pl2", english: "Fuß → ? (foot/feet)", german: "Füße" },
          { id: "pl3", english: "Tochter → ? (daughter/daughters)", german: "Töchter" },
          { id: "pl4", english: "das Buch → ?", german: "Bücher" },
          { id: "pl5", english: "Blatt → ? (leaf/leaves — the blade twin)", german: "Blätter" },
          { id: "pl6", english: "Berg → ? (mountain, no dots needed)", german: "Berge" },
        ],
        target_answer: "Männer, Füße, Töchter, Bücher, Blätter, Berge",
        meaning: "men, feet, daughters, books, leaves, mountains",
        explanation: "The two dots mark the same vowel-pull English performed silently in men, feet, and geese — Blätter pulls them too; Berge takes the plain -e.",
      },
      {
        id: "l23_e2",
        type: "shift_select",
        prompt: "Which English plural pair is the SAME i-mutation as 'Mann → Männer'?",
        options: ["man → men", "book → books", "child → children", "house → houses"],
        target_answer: "man → men",
        meaning: "The a→e pull is the identical umlaut",
        explanation: "man/men and Mann/Männer are one sound law on two shores — English just never wrote the dots. The other patterns wait their turn: Auge → Augen (plain -n), Ei → Eier (-er, no dots), Knie → Knie (no change at all).",
      },
      {
        id: "l23_e3",
        type: "shift_select",
        prompt: "Which plural takes the -s pattern (foreign and snappy words)?",
        options: ["das Auto → die Autos", "die Frau → die Fraus", "der Mann → die Manns", "das Buch → die Buchs"],
        target_answer: "das Auto → die Autos",
        meaning: "-s plurals for loanwords and abbreviations",
        explanation: "Native nouns take -er/-e/-n or umlaut; the -s is the modern import lane — Autos, Fotos, Restaurants. The feminine -n squad sweeps your shelf: die Zeitung, die Rechnung, die Blume, die Lampe, die Bluse — every one takes -n in the plural.",
      },
      {
        id: "l23_e4",
        type: "derive",
        prompt: "Build the plural: 'die Frau →' (the feminine -n squad):",
        english_hint: "Frau + en",
        target_answer: "Frauen",
        meaning: "die Frauen — the women",
        explanation: "Feminine nouns overwhelmingly take -n/-en: Frauen, Zeiten, Töchter (with umlaut).",
      },
      {
        id: "l23_e5",
        type: "transcribe",
        prompt: "How would you say:",
        idea: "you're sketching the beer garden for a friend: the men drink beer and the women drink tea",
        cues: [
          "Two umlaut plurals carry it: Mann → die Männer (man → men), Frau → die Frauen — then the plural verb trinken for both",
        ],
        target_answer: "Die Männer trinken Bier und die Frauen trinken Tee",
        meaning: "The men drink beer and the women drink tea",
        vocab_hints: [
          {
            word: "Bier",
            translation: "beer",
            note: "das Bier — a mass noun here, no plural marker",
          },
        ],
        word_bank: ["Die", "die", "Männer", "trinken", "Bier", "und", "Frauen", "Tee", "das", "Mann"],
        explanation: "Two umlaut plurals (Männer, Frauen) in one sentence — the fossil pair in the wild, built from a thought.",
      },
    ],
    summary: {
      outcome: "Build umlaut plurals and sort nouns into the five plural patterns.",
      use_example: { german: "Die Männer trinken Bier und die Frauen trinken Tee.", english: "The men drink beer and the women drink tea." },
      takeaway: "Umlaut is English's own fossil — Mann/Männer ↔ man/men — and five patterns cover the plural system.",
      curiosity_teaser: "Next: the fossil umlauts — man/men and foot/feet prove i-mutation is your own buried treasure.",
    },
    twist: {
      prompt: "Shrink the party: the men drink beer becomes THE MAN drinks beer. (Umlaut off, ending changes.)",
      target_answer: "Der Mann trinkt Bier",
      word_bank: ["Der", "Die", "Mann", "Männer", "trinkt", "trinken", "Bier"],
      explanation: "die Männer → der Mann: the umlaut plural dissolves back to singular, and the verb returns to the er/sie -t form. The umlaut is the plural's signature — remove it and the ending steps in.",
    },
  },
  {
    id: 24,
    slug: "comparatives-and-suppletion",
    title: "Comparatives & Suppletion",
    subtitle: "gut→besser is good→better — the twin suppletion; kalt→kälter fires the umlaut",
    phase: 3,
    shift_categories: [],
    word_ids: ["gut", "besser", "kalt", "alt", "hoch", "mehr", "groß", "wasser", "spät", "maus", "vogel", "kuh", "spiel", "stunde"],
    table_word_ids: ["gut", "besser", "kalt", "alt", "hoch", "groß"],
    hook: {
      title: "The Twin Irregulars",
      content:
        "English says good, better. German says gut, besser. These are not similar forms — they are the same SUPPLETION: both languages replaced the missing comparative of 'good' with a word from the same ancient root (*bazizon, 'better'). And the regular comparatives are just as musical: alt → älter, kalt → kälter, hoch → höher — the umlaut you just learned as plural-maker fires again in comparison. English once did this too: old → elder, and 'elder' is still in your dictionary. German never stopped.",
      footnotes: [
        {
          marker: "1",
          title: "Elder and Älter Are One",
          content:
            "English 'elder/elders' and German 'älter' are the same umlaut comparative of old/alt. The church kept 'elders' alive in English; daily speech swapped in 'older'. German never swapped — alt/älter is daily bread.",
        },
      ],
    },
    pattern: {
      title: "-er / -ste, With Umlaut On Request",
      content:
        "The regular system mirrors English -er/-est exactly: schnell → schneller → am schnellsten. The umlaut squad: alt → älter, kalt → kälter, groß → größer, hoch → höher, jung → jünger — short adjectives love the dots. The suppletive twins: gut → besser ↔ good → better; viel → mehr ↔ much → more. Comparisons use als (than): Ich bin älter als du. Equality uses wie: so groß wie (as big as). Superlatives take am + -sten: am besten (best — and best/besten are twins too).",
      footnotes: [],
      linguist_note:
        "besser ← *bazizon and better ← *batizon are parallel descendants of one Proto-Germanic comparative; the b and the ss report the shift laws (V→B, T→SS) doing paperwork on an irregular word.",
    },
    exercises: [
      {
        id: "l24_e1",
        type: "matching_pairs",
        prompt: "Match the twin comparisons:",
        matching_pairs: [
          { id: "cs1", english: "good → better", german: "gut → besser" },
          { id: "cs2", english: "old → elder", german: "alt → älter" },
          { id: "cs3", english: "cold → colder", german: "kalt → kälter" },
          { id: "cs4", english: "high → higher", german: "hoch → höher" },
        ],
        target_answer: "gut → besser, alt → älter, kalt → kälter, hoch → höher",
        meaning: "the twin comparatives",
        explanation: "Suppletion (gut/besser) and umlaut (älter, kälter, höher) — both systems shared, one fossilized in English.",
      },
      {
        id: "l24_e2",
        type: "shift_select",
        prompt: "Complete the twin suppletion: 'Das Wasser ist _____.' (better):",
        options: ["besser", "guter", "am besten", "mehrer"],
        target_answer: "besser",
        meaning: "Das Wasser ist besser = The water is better",
        explanation: "gut → besser is good → better: the same inherited comparative, shifted per the laws. The shelf supplies the bases: die Maus, der Vogel, die Kuh — klein oder groß, every noun can enter a comparison.",
      },
      {
        id: "l24_e3",
        type: "derive",
        prompt: "Umlaut it: 'spät' as a comparative (later):",
        english_hint: "sp + ä + ter",
        target_answer: "später",
        meaning: "später — later",
        explanation: "spät → später: the umlaut moves the vowel forward, the -er does the comparing — kälter, älter, größer, später, one family.",
      },
      {
        id: "l24_e4",
        type: "shift_select",
        prompt: "Comparison word check: 'Ich bin älter _____ du.' (than you):",
        options: ["als", "wie", "denn", "mehr"],
        target_answer: "als",
        meaning: "Ich bin älter als du = I am older than you",
        explanation: "Inequality takes als; equality takes wie (so groß wie). English 'than' and 'as' split one job German keeps in two words — das Spiel dauert eine Stunde: nouns to compare, als to compare them with.",
      },
      {
        id: "l24_e5",
        type: "transcribe",
        prompt: "Put into German:",
        idea: "you're at the café counter making your preference known: the coffee is better than the tea",
        cues: [
          "The twin suppletion does the work: gut → besser (good → better) — then als introduces the loser",
        ],
        target_answer: "Der Kaffee ist besser als der Tee",
        meaning: "The coffee is better than the tea",
        word_bank: ["Der", "Kaffee", "ist", "besser", "als", "der", "Tee", "gut"],
        explanation: "Suppletive comparative + als — the twin irregular in a real argument at the café.",
      },
    ],
    summary: {
      outcome: "Build -er/-ste comparatives with umlaut and use the gut/besser twin suppletion.",
      use_example: { german: "Der Kaffee ist besser als der Tee.", english: "The coffee is better than the tea." },
      takeaway: "gut→besser ↔ good→better: one inherited suppletion — and the umlaut squad (älter, kälter, höher) mirrors English elder.",
      curiosity_teaser: "Next: the twin suppletions — gut→besser is good→better: the shared irregular story.",
    },
    twist: {
      prompt: "Diplomacy check: soften the verdict — the coffee is better than the tea becomes the coffee is NOT better than the tea.",
      target_answer: "Der Kaffee ist nicht besser als der Tee",
      word_bank: ["Der", "Kaffee", "ist", "nicht", "besser", "als", "der", "Tee"],
      explanation: "nicht slides in before the adjective it negates — after ist, before besser. The comparison stands; only the verdict flips.",
    },
  },
  {
    id: 2201,
    slug: "the-feminine-squad",
    title: "The Feminine Squad",
    subtitle: "-ung, -heit, -keit drills: derive abstract nouns and their genders",
    phase: 3,
    shift_categories: [],
    word_ids: ["warnen", "wahrnehmung", "zeit", "lernen", "rechnung", "blume", "lampe", "bluse", "zeitung", "berg", "flugzeug", "briefmarke"],
    table_word_ids: ["warnen", "wahrnehmung", "zeit"],
    hook: {
      title: "The Noun Factory With One Gender",
      content:
        "German builds abstract nouns on an assembly line, and the line stamps one gender: feminine. Verb + -ung: warnen → die Warnung, wandern → die Wanderung. Adjective + -heit: gesund → die Gesundheit (health). Adjective + -keit: möglich → die Möglichkeit (possibility). Noun + -schaft: wissen → die Wissenschaft (knowledge-ship, science). English used to run the same factory with -ness and -ship — 'friendship' is -schaft's sister suffix — but German never closed the line.",
      footnotes: [
        {
          marker: "1",
          title: "The -ung Rule Has No Exceptions",
          content:
            "Every single -ung noun in German is feminine. No committee, no exceptions, no history of drift. It is the most reliable gender law in the language — and it works on verbs you have never seen: meet a new verb, add -ung, collect die.",
        },
      ],
    },
    pattern: {
      title: "Four Stamps, Fifteen Nouns",
      content:
        "Stamp one, verb + -ung: warnen → die Warnung, wandern → die Wanderung (the hike), bilden → die Bildung (education). Stamp two, adjective + -heit: gesund → die Gesundheit, schön → die Schönheit (beauty), wahr → die Wahrheit (truth — the same wahr as in Wahrnehmung, 'truth-taking'!). Stamp three, adjective + -keit: möglich → die Möglichkeit, freundlich → die Freundlichkeit (friendliness). Stamp four, noun + -schaft: wissen → die Wissenschaft, Freund → die Freundschaft (friendship — English's own suffix, fossilized). Derivation recipe: chop the verb's -en or the adjective's bare form, glue the stamp, collect die.",
      footnotes: [],
      linguist_note:
        "-heit/-keit/-ung nouns are almost all Latin-era calque technology — Wahrnehmung, Wissenschaft and Gesundheit were built or rebuilt when German scholars translated Latin scholarship. The feminine gender rode in with the suffixes.",
    },
    exercises: [
      {
        id: "l2201_e1",
        type: "shift_select",
        prompt: "Factory check: what gender does -schaft stamp?",
        options: ["feminine — die Wissenschaft, die Freundschaft", "masculine", "neuter", "no article"],
        target_answer: "feminine — die Wissenschaft, die Freundschaft",
        meaning: "-schaft → die",
        explanation: "knowledge-ship and friend-ship are both die — and English's own '-ship' is the sister suffix. die Zeitung already wears the -ung twin of this law.",
      },
      {
        id: "l2201_e2",
        type: "derive",
        prompt: "Run stamp one: 'wandern' → the -ung noun (the hike):",
        english_hint: "wandern → Wander + ung",
        target_answer: "Wanderung",
        meaning: "die Wanderung — the hike",
        explanation: "Chop -en, glue -ung: die Wanderung. Your hiking verb now has a noun form — feminine, by law.",
      },
      {
        id: "l2201_e3",
        type: "shift_select",
        prompt: "Which noun does the -heit stamp produce from 'gesund' (healthy)?",
        options: ["die Gesundheit (health)", "das Gesundheit", "der Gesundheit", "die Gesunder"],
        target_answer: "die Gesundheit (health)",
        meaning: "gesund + heit = die Gesundheit",
        explanation: "Adjective + -heit → feminine abstract noun. Gesundheit — the word you say when someone sneezes.",
      },
      {
        id: "l2201_e4",
        type: "matching_pairs",
        prompt: "Match each stamped noun with its English meaning:",
        matching_pairs: [
          { id: "fs1", english: "the warning", german: "die Warnung" },
          { id: "fs2", english: "the truth", german: "die Wahrheit" },
          { id: "fs3", english: "the possibility", german: "die Möglichkeit" },
          { id: "fs4", english: "the science / knowledge-ship", german: "die Wissenschaft" },
          { id: "fs5", english: "the bill (the reckoning)", german: "die Rechnung" },
          { id: "fs6", english: "the flower", german: "die Blume" },
          { id: "fs7", english: "the lamp", german: "die Lampe" },
          { id: "fs8", english: "the blouse", german: "die Bluse" },
        ],
        target_answer: "die Warnung, die Wahrheit, die Möglichkeit, die Wissenschaft, die Rechnung, die Blume, die Lampe, die Bluse",
        meaning: "the warning, the truth, the possibility, the science, the bill, the flower, the lamp, the blouse",
        explanation: "Four stamps, one gender — the entire feminine abstract factory in four words, and four plain-die nouns (Rechnung, Blume, Lampe, Bluse) marching in step.",
      },
      {
        id: "l2201_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'The truth is good' (die Wahrheit)",
        target_answer: "Die Wahrheit ist gut",
        meaning: "Die Wahrheit ist gut = The truth is good",
        word_bank: ["Die", "Wahrheit", "ist", "gut"],
        explanation: "wahr (true) + -heit → die Wahrheit — the feminine squad carrying a philosophical sentence. (der Berg and das Flugzeug stay outside — no feminine suffix, no membership.)",
      },
    ],
    summary: {
      outcome: "Derive -ung/-heit/-keit/-schaft nouns and stamp die on them automatically.",
      use_example: { german: "Die Wahrheit ist gut.", english: "The truth is good." },
      takeaway: "Four suffix stamps — -ung, -heit, -keit, -schaft — build abstract nouns, and every one arrives feminine.",
      curiosity_teaser: "Next: the Guess-the-Gender Game — unseen words, suffix laws, explanation feedback.",
    },
  },
  {
    id: 2202,
    slug: "guess-the-gender-game",
    title: "Guess-the-Gender Game",
    subtitle: "Unseen words, suffix laws, explanation feedback — the exam of the suffix court",
    phase: 3,
    shift_categories: [],
    word_ids: ["wahrnehmung", "zeit", "straße", "butter", "zwilling", "frau", "mann", "kind"],
    table_word_ids: ["wahrnehmung", "zeit", "straße", "butter", "zwilling"],
    hook: {
      title: "Unseen Words, Known Laws",
      content:
        "Today's words were deliberately never taught. That is the point. You will meet Zeitung, Gesundheit, Lehrer, Zwilling, Mädchen — words from the wild — and guess their gender from the suffix alone. der? die? das? The laws you own: -ung/-heit/-keit/-schaft → die, -chen/-lein → das, verb+-er → der, plain -e → usually die, -zeug → das. Guess, then read the explanation: every answer teaches the law behind the word. This is the exam where guessing IS the method.",
      footnotes: [
        {
          marker: "1",
          title: "Why Guessing Works",
          content:
            "German gender is roughly half suffix-predictable, and the suffixes cover exactly the high-frequency vocabulary. Guessing from suffixes beats memorizing articles one by one — and every wrong guess still installs the law.",
        },
      ],
    },
    pattern: {
      title: "The Exam Walkthrough",
      content:
        "die Zeitung — Zeit + ung: the -ung factory. die Gesundheit — gesund + heit. der Lehrer — lehren (to teach) + er: the agent law. der Zwilling — the -ling law (your twin word!). das Mädchen — the -chen law, the famous paradox. die Butter — plain -e, usually feminine. das Feuerzeug — the -zeug law. der Montag? weekdays end in Tag — der by the head-word law. Each guess activates a law; each law covers thousands of words. Score yourself, then re-read the suffix court from the Gender Heuristics lesson.",
      footnotes: [],
      linguist_note:
        "The suffix laws are historical regularities, not dictionary conventions: -ung nouns are feminine because the suffix itself was feminine in Proto-Germanic. The laws predate the dictionary — which is why they still hold.",
    },
    exercises: [
      {
        id: "l2202_e1",
        type: "shift_select",
        prompt: "Unseen word: 'die Zeitung' (newspaper). Which law made it feminine?",
        options: ["-ung: Zeit + ung — the abstract-noun factory", "Because time is feminine", "It is an exception", "-ung is masculine"],
        target_answer: "-ung: Zeit + ung — the abstract-noun factory",
        meaning: "die Zeitung — the -ung law at work",
        explanation: "Zeitung is literally 'a timing' — your taught word Zeit with the feminine -ung stamp.",
      },
      {
        id: "l2202_e2",
        type: "shift_select",
        prompt: "Unseen word: 'der Lehrer' (teacher). Which law?",
        options: ["verb + -er: the agent law, always der", "plain -e law", "the -chen law", "no law — memorize it"],
        target_answer: "verb + -er: the agent law, always der",
        meaning: "der Lehrer — the agent law",
        explanation: "lehren (to teach) + -er → der. Same factory as der Sauger (dust-sucker) and der Fernseher (far-seer).",
      },
      {
        id: "l2202_e3",
        type: "shift_select",
        prompt: "Unseen word: 'das Mädchen' (girl). Which law outranks the meaning?",
        options: ["-chen: ALWAYS neuter", "-e: usually feminine", "-ling: masculine", "No law applies"],
        target_answer: "-chen: ALWAYS neuter",
        meaning: "das Mädchen — the -chen law",
        explanation: "The diminutive -chen is the most exceptionless gender law in German — even 'the girl' becomes das.",
      },
      {
        id: "l2202_e4",
        type: "shift_select",
        prompt: "Unseen word: 'der Zwilling' (twin). Which law?",
        options: ["-ling: masculine", "-ung: feminine", "-chen: neuter", "plain -e: feminine"],
        target_answer: "-ling: masculine",
        meaning: "der Zwilling — the -ling law",
        explanation: "Your own twin word! The -ling suffix (duckling's German sister) stamps masculine: der Zwilling, der Lehrling (apprentice).",
      },
      {
        id: "l2202_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'The newspaper is good' (die Zeitung)",
        target_answer: "Die Zeitung ist gut",
        meaning: "Die Zeitung ist gut = The newspaper is good",
        word_bank: ["Die", "Zeitung", "ist", "gut"],
        explanation: "One unseen word, one law, one correct article — the guess-the-gender method paying out.",
      },
    ],
    summary: {
      outcome: "Guess the gender of unseen nouns from suffix laws and explain every choice.",
      use_example: { german: "Die Zeitung ist gut.", english: "The newspaper is good." },
      takeaway: "-ung/-heit/-keit/-schaft → die, -chen/-zeug → das, -er/-ling → der — the laws cover the wild.",
      curiosity_teaser: "Next: plurals & i-mutation — Mann becomes Männer the way man becomes men: umlaut is English's own fossil.",
    },
  },
  {
    id: 25,
    slug: "hidden-shifts-v-to-b",
    title: "Hidden Shifts I: V → B",
    subtitle: "The quiet family: geben↔give, über↔over, sieben↔seven, Biber↔beaver",
    phase: 3,
    shift_categories: ["v_to_b"],
    word_ids: ["geben", "leben", "lieben", "glauben", "sieben", "über", "halb", "silber", "gelb", "kalb"],
    table_word_ids: ["geben", "leben", "lieben", "sieben", "über", "halb"],
    hook: {
      title: "The Quiet Family",
      content:
        "Some shifts make noise — PF explodes, ch growls. The V→B family whispers. Where English kept an ancient v or f between vowels, German closed it into a b: give → geben, live → leben, love → lieben, over → über, seven → sieben, half → halb. The consonant simply shut its mouth. English spells the difference with v, German with b — one letter, one gesture, a whole family of the most intimate words in either language: giving, living, loving. German hid the family so well you never noticed it was the same word.",
      footnotes: [
        {
          marker: "1",
          title: "The Beaver Test",
          content:
            "The animal names prove it is a law, not a coincidence: beaver ↔ Biber, liver ↔ Leber, calf ↔ Kalb, silver ↔ Silber. Four unrelated creatures and materials, one systematic consonant correspondence.",
        },
      ],
    },
    pattern: {
      title: "Swap v for b, Hear the Verb",
      content:
        "The verbs: give → geben, live → leben, love → lieben (and believe → glauben — the be- and the lieve both shifted!), drive → treiben (you drilled this one in the ablaut gallery). The numbers and measures: seven → sieben, half → halb. The colors and materials: yellow → gelb (double shift — the y too!), silver → Silber, leaf → Laub (foliage). The preposition you already own: over → über. Every one of these obeys the same quiet law: English v/f between vowels, German b.",
      footnotes: [],
      linguist_note:
        "The direction is counterintuitive: German looks like it 'added' a b, but actually Proto-Germanic had a bilabial fricative *β where English wrote v/f and High German closed it to the stop b. Neither language changed its word — they pronounced the same sound differently, then spelled their habits.",
    },
    exercises: [
      {
        id: "l25_e1",
        type: "matching_pairs",
        prompt: "Match the quiet family — swap v for b:",
        matching_pairs: [
          { id: "vb1", english: "give", german: "geben" },
          { id: "vb2", english: "live", german: "leben" },
          { id: "vb3", english: "love", german: "lieben" },
          { id: "vb4", english: "seven", german: "sieben" },
        ],
        target_answer: "geben, leben, lieben, sieben",
        meaning: "to give, to live, to love, seven",
        explanation: "The most intimate verbs in both languages are one word each — with the consonant shut quietly into b.",
      },
      {
        id: "l25_e2",
        type: "shift_select",
        prompt: "Which shift connects English 'over' and German 'über'?",
        options: ["V/F → B (with vowel fronting)", "T → Z", "K → CH", "They are unrelated"],
        target_answer: "V/F → B (with vowel fronting)",
        meaning: "over ↔ über — the quiet shift with an umlaut",
        explanation: "The v closed to b and the o fronted to ü — a quiet shift wearing a visible vowel change.",
      },
      {
        id: "l25_e3",
        type: "shift_select",
        prompt: "English 'believe' and German 'glauben' — why are they twins?",
        options: [
          "be- ↔ ge- and the lieve/laube root — both elements correspond",
          "Both are Latin loans",
          "Pure coincidence",
          "glauben comes from English",
        ],
        target_answer: "be- ↔ ge- and the lieve/laube root — both elements correspond",
        meaning: "believe ↔ glauben, element by element",
        explanation: "The prefix pair and the v→b root both line up: two languages building the same word from the same parts.",
      },
      {
        id: "l25_e4",
        type: "reverse_cognate",
        prompt: "What English metal is the twin of 'Silber'?",
        target_answer: "silver",
        meaning: "silver ↔ Silber (v → b)",
        explanation: "The v closed to b — the same law that made give/geben. Silver, Silber: one metal, one word.",
      },
      {
        id: "l25_e5",
        type: "transcribe",
        prompt: "How would you say:",
        idea: "you're explaining why you stay: you live in Germany and you love it",
        cues: [
          "Two quiet-family verbs: leben (live) and lieben (love) — English v between vowels became b, and wir takes -en on both",
        ],
        target_answer: "Wir leben in Deutschland und wir lieben es",
        meaning: "We live in Germany and we love it",
        affirmation: "You heard the English v hiding inside both b's — leben and lieben in one breath, the quiet family.",
        vocab_hints: [
          {
            word: "es",
            translation: "it",
            note: "es ↔ it — the twin pronoun from the negation lesson",
          },
        ],
        word_bank: ["Wir", "leben", "in", "Deutschland", "und", "wir", "lieben", "es", "liebe"],
        explanation: "Two quiet-family verbs in one sentence: leben and lieben — living and loving, both shifted v's.",
      },
    ],
    summary: {
      outcome: "Recognize the V→B family across verbs, numbers, and materials.",
      use_example: { german: "Wir leben in Deutschland und wir lieben es.", english: "We live in Germany and we love it." },
      takeaway: "English v/f between vowels is German b: give/geben, love/lieben, over/über, seven/sieben — the quiet family.",
      curiosity_teaser: "Next: geben's full dynasty — Gabe, vergeben, and the Perfekt forms gab and gegeben.",
    },
    twist: {
      prompt: "Rainy week — walk it back: we live in Germany and we love it becomes ...and we do NOT love it.",
      target_answer: "Wir leben in Deutschland und wir lieben es nicht",
      word_bank: ["Wir", "leben", "in", "Deutschland", "und", "wir", "lieben", "es", "nicht"],
      explanation: "nicht closes the clause where the action dies — after the object it negates. Word for word: '...and we love it not.'",
    },
  },
  {
    id: 26,
    slug: "hidden-shifts-gh-ch-y-g",
    title: "Hidden Shifts II: GH→CH & Y→G",
    subtitle: "The inversion lessons: Nacht↔night, Licht↔light, sagen↔say, gestern↔yesterday",
    phase: 3,
    shift_categories: ["y_gh_to_g_ch"],
    word_ids: ["nacht", "licht", "lachen", "tochter", "sagen", "gestern", "acht", "recht", "macht"],
    table_word_ids: ["nacht", "licht", "sagen", "gestern", "acht", "recht"],
    hook: {
      title: "The Ghost Letters",
      content:
        "English words walk around with dead letters: night, light, eight, right, daughter. The gh was once a real sound — a throaty ch, exactly like German's. English spelled it, then stopped saying it. German never stopped: Nacht, Licht, acht, Recht, Tochter. The same inversion runs on the y-side: English softened the ancient g into y (say, day, yesterday), German kept it: sagen, Tag, gestern. You have collected these pairs all trail long — today is the payoff: the complete ghost-letter map, every silent gh in English answered by a sounding ch in German.",
      footnotes: [
        {
          marker: "1",
          title: "English Did Both Directions",
          content:
            "English vocalized g→y (say, day, way) and silenced gh (night, daughter). German did neither: it kept sagen's g and Nacht's ch. So German is, in both cases, the conservative sibling — the archive where the old sounds still play.",
        },
      ],
    },
    pattern: {
      title: "The Complete Ghost Map",
      content:
        "gh → ch: night ↔ Nacht, light ↔ Licht, laugh ↔ lachen, daughter ↔ Tochter, eight ↔ acht, right ↔ Recht, might ↔ Macht, knight ↔ Knecht (the word that got noble in English and stayed farmhand in German!), freight ↔ Fracht. y → g: say ↔ sagen, way ↔ Weg, yesterday ↔ gestern, eye ↔ Auge? — eye is eǒage's descendant, the g hides mid-word. rain ↔ Regen, nail ↔ Nagel. Double-shift royalty: Tochter carries D→T AND gh→ch; dachte/thought closes the loop you opened in the suppletion lesson. This completes all nine Atlas families — the full decode engine.",
      footnotes: [],
      linguist_note:
        "English 'laugh' still spells the gh but pronounces an f — a last derangement. German lachen kept the original [x]. When you say 'ich lache', you are pronouncing what 'I laugh' looked like in 700 AD.",
    },
    exercises: [
      {
        id: "l26_e1",
        type: "matching_pairs",
        prompt: "The ghost map — match each silent-gh word with its sounding ch twin:",
        matching_pairs: [
          { id: "gc1", english: "night", german: "Nacht" },
          { id: "gc2", english: "light", german: "Licht" },
          { id: "gc3", english: "eight", german: "acht" },
          { id: "gc4", english: "daughter", german: "Tochter" },
        ],
        target_answer: "Nacht, Licht, acht, Tochter",
        meaning: "night, light, eight, daughter",
        explanation: "English silenced the gh; German still sounds it as ch. The ghost letters were always German ch.",
      },
      {
        id: "l26_e2",
        type: "shift_select",
        prompt: "Why does English 'say' and German 'sagen' start differently?",
        options: [
          "English vocalized the ancient g into y; German kept the g",
          "sagen is a French loan",
          "say is a Norse import",
          "The words are unrelated",
        ],
        target_answer: "English vocalized the ancient g into y; German kept the g",
        meaning: "say ↔ sagen: the y→g inversion",
        explanation: "Same word, two pronunciations: English wore the g down to y (say, day, way); German kept it audible.",
      },
      {
        id: "l26_e3",
        type: "shift_select",
        prompt: "Which TWO shifts connect 'daughter' and 'Tochter'?",
        options: ["D → T and gh → ch", "TH → D and K → CH", "D → T and P → F", "Y → G and gh → ch"],
        target_answer: "D → T and gh → ch",
        meaning: "Tochter: the double-shift royalty",
        explanation: "The d hardened to t AND the guttural survived as ch — daughter is the flagship of the double-shift fleet.",
      },
      {
        id: "l26_e4",
        type: "reverse_cognate",
        prompt: "What English time word is the twin of 'gestern'?",
        target_answer: "yesterday",
        meaning: "yesterday ↔ gestern (y → g)",
        explanation: "yester- and gestern are one word split by the y/g inversion — the same root as say/sagen.",
      },
      {
        id: "l26_e5",
        type: "transcribe",
        prompt: "Tell me:",
        idea: "you're saying goodnight at a friend's place: good night — the light is out",
        cues: [
          "Both ghost-map words sound again in German: Nacht (night) and Licht (light) — gh → ch — then ist aus closes it",
        ],
        target_answer: "Gute Nacht das Licht ist aus",
        meaning: "Good night! The light is out",
        affirmation: "You made the silent letters sound — Nacht and Licht built straight from night and light.",
        vocab_hints: [
          {
            word: "aus",
            translation: "out / off",
            note: "aus ↔ out — the T→S twin, here doing 'off' duty",
          },
        ],
        word_bank: ["Gute", "Nacht", "das", "Licht", "ist", "aus", "gut"],
        explanation: "Two ghost-map words in one goodnight: Nacht and Licht — gh → ch, both still sounding.",
      },
    ],
    summary: {
      outcome: "Read every silent gh as German ch and every English y as German g — all nine Atlas families complete.",
      use_example: { german: "Gute Nacht — das Licht ist aus.", english: "Good night — the light is out." },
      takeaway: "gh→ch (Nacht, Licht, acht) and y→g (sagen, gestern): the ghost letters are German sounds English stopped pronouncing.",
      curiosity_teaser: "Next: Nacht & Licht — the gh→ch inversion: the silent letters of night and light, still sounding in German.",
    },
    twist: {
      prompt: "Check before bed: the light is out → IS the light out? (The verb flips to the front.)",
      target_answer: "Ist das Licht aus",
      word_bank: ["Ist", "das", "Licht", "aus", "ist"],
      explanation: "The verb takes position 1 — the ancient flip from topic 13, still free of do. Word for word: 'Is the light out?'",
    },
  },
  {
    id: 2301,
    slug: "englishs-fossil-umlauts",
    title: "English's Fossil Umlauts",
    subtitle: "man/men, foot/feet, goose/geese, mouse/mice — mapped onto German pairs",
    phase: 3,
    shift_categories: [],
    word_ids: ["mann", "fuß", "tochter", "kind", "buch", "haus", "maus", "vogel", "kuh", "blatt", "auge", "ei", "knie", "rechnung", "blume", "lampe", "bluse"],
    table_word_ids: ["mann", "fuß", "tochter", "buch", "kind", "haus"],
    hook: {
      title: "Your Fossil Collection",
      content:
        "English keeps exactly seven or so living umlaut plurals, and they are the oldest words in the language: man/men, foot/feet, goose/geese, mouse/mice, tooth/teeth, woman/women, louse/lice. German keeps the same system productive: Mann/Männer, Fuß/Füße, Maus/Mäuse, Zahn/Zähne, Stadt/Städte. Pair them up and the correspondence is total: the same vowel-pull, one shore writing dots, the other just changing the letter. This lesson is a museum tour of your own fossils, displayed beside their living German relatives.",
      footnotes: [
        {
          marker: "1",
          title: "The Museum's Oldest Piece",
          content:
            "foot/feet and Fuß/Füße are the showpiece: the u was pulled to ü/ee by the same ancient -iz plural, and both languages kept the pulled vowel. The plural of foot has been irregular for 2,000 years in two languages — consistency across the North Sea.",
        },
      ],
    },
    pattern: {
      title: "The Display Cases",
      content:
        "Case one: man/men ↔ Mann/Männer — the a pulled forward. Case two: foot/feet ↔ Fuß/Füße. Case three: mouse/mice ↔ Maus/Mäuse. Case four: tooth/teeth ↔ Zahn/Zähne (hinted: the t→z twin you own from the sibilant family). Case five: goose/geese ↔ Gans/Gänse (hint: the gans family). Case six, the broken pair: child/children ↔ Kind/Kinder — English went even MORE irregular (the old plural -r survives in children!), German stayed regular. Case seven: house/houses ↔ Haus/Häuser — English took the regular exit; German kept the umlaut. Every case is one law: the vanished i pulled, the languages kept different evidence.",
      footnotes: [],
      linguist_note:
        "The -r plural in 'children' (kinder-ch-...) is the same -r suffix German uses in Kinder, Bücher, Männer — English's children is a double plural, -r plus -en, the only place the Germanic -r plural survives in English spelling.",
    },
    exercises: [
      {
        id: "l2301_e1",
        type: "matching_pairs",
        prompt: "The display cases — match each English fossil with its living German pair:",
        matching_pairs: [
          { id: "fu1", english: "man / men", german: "Mann / Männer" },
          { id: "fu2", english: "foot / feet", german: "Fuß / Füße" },
          { id: "fu3", english: "mouse / mice", german: "Maus / Mäuse" },
          { id: "fu4", english: "daughter / daughters", german: "Tochter / Töchter" },
          { id: "fu5", english: "fowl (and its archaic kin)", german: "Vogel / Vögel" },
          { id: "fu6", english: "cow / kine (archaic!)", german: "Kuh / Kühe" },
        ],
        target_answer: "Mann / Männer, Fuß / Füße, Maus / Mäuse, Tochter / Töchter, Vogel / Vögel, Kuh / Kühe",
        meaning: "the six oldest plural fossils",
        explanation: "Same vowel-pull, same words — the dots in German are the only visible difference. Kine, English's own umlaut plural of cow, survived into the 1800s.",
      },
      {
        id: "l2301_e2",
        type: "shift_select",
        prompt: "Why does 'children' end in -en while German says 'Kinder'?",
        options: [
          "children is a DOUBLE plural — the Germanic -r plus -en; Kinder keeps the -r alone",
          "German dropped an -en that was always there",
          "children is a French loan",
          "The two plurals are unrelated",
        ],
        target_answer: "children is a DOUBLE plural — the Germanic -r plus -en; Kinder keeps the -r alone",
        meaning: "children ↔ Kinder: the same -r plural fossil",
        explanation: "child + -er + -en: the only place English still shows the Germanic -r plural that German uses productively. The feminine -n drawer is full too: Rechnung → Rechnungen, Blume → Blumen, Lampe → Lampen, Bluse → Blusen — no umlaut, just the -n.",
      },
      {
        id: "l2301_e3",
        type: "shift_select",
        prompt: "Which pair shows English TAKING the regular exit where German kept umlaut?",
        options: ["house/houses ↔ Haus/Häuser", "foot/feet ↔ Fuß/Füße", "mouse/mice ↔ Maus/Mäuse", "man/men ↔ Mann/Männer"],
        target_answer: "house/houses ↔ Haus/Häuser",
        meaning: "Haus/Häuser kept the dots; house/houses regularized",
        explanation: "English regularized most nouns with -s; only the oldest words kept their umlaut. Haus never surrendered. The new nouns sort themselves: Blatt → Blätter (umlaut -er), Auge → Augen (-n), Ei → Eier (-er), Knie → Knie (zero) — four nouns, four drawers.",
      },
      {
        id: "l2301_e4",
        type: "reverse_cognate",
        prompt: "What English pair is the fossil twin of 'Fuß/Füße'?",
        target_answer: "foot / feet",
        meaning: "foot/feet ↔ Fuß/Füße",
        explanation: "The u-pull happened once, in Proto-Germanic, before the languages split — both kept the result forever.",
      },
      {
        id: "l2301_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'The men have big feet' (die Füße)",
        target_answer: "Die Männer haben große Füße",
        meaning: "The men have big feet",
        vocab_hints: [
          {
            word: "große",
            translation: "big (plural form)",
            note: "groß gains -e before plural nouns — the adjective waves the umlaut flag too",
          },
        ],
        word_bank: ["Die", "Männer", "haben", "große", "Füße"],
        explanation: "Two umlaut plurals plus an adjective ending — the fossil museum in one sentence.",
      },
    ],
    summary: {
      outcome: "Map every English fossil umlaut onto its German pair and use the plurals in sentences.",
      use_example: { german: "Die Männer haben große Füße.", english: "The men have big feet." },
      takeaway: "man/men, foot/feet, mouse/mice — the same i-mutation as Mann/Männer, Fuß/Füße, Maus/Mäuse. One law, two spellings.",
      curiosity_teaser: "Next: the five plural patterns — sort twenty-five nouns into their plural classes.",
    },
  },
  {
    id: 2501,
    slug: "geben-and-give-family-tour",
    title: "geben & give Family Tour",
    subtitle: "geben/Gabe/vergeben radiation — with the Perfekt forms gab and gegeben",
    phase: 3,
    shift_categories: ["v_to_b", "strong_verbs_ablaut"],
    word_ids: ["geben", "vergessen", "haben", "gefallen", "mir", "kind"],
    table_word_ids: ["geben", "gefallen", "vergessen", "haben", "mir"],
    hook: {
      title: "One Root, a Dynasty",
      content:
        "geben is not one word — it is a dynasty. The verb geben (give) radiates: die Gabe (the gift — the verb frozen into a noun), vergeben (to forgive — literally to give completely away, the exact construction of for-give!), das Geschenk (the gift — a different root, the false-friend Gift is 'poison'!), es gibt (there is — literally 'it gives', the same impersonal trick as French il y a). And the ablaut forms you own: gab, gegeben. English runs the same dynasty from give: gift, forgive, given. Walk the family tree and every branch is a twin.",
      footnotes: [
        {
          marker: "1",
          title: "Forgive and vergeben: the Same Coinage",
          content:
            "Both 'forgive' and 'vergeben' are 'give completely away' — for-/ver- intensifying the giving into release. Two languages coined the same metaphor independently... because they inherited the parts from the same toolbox. Even 'die Gabe' and 'gift' are the same ancient noun, which is exactly why German's Gift (poison) is the false-friend deck's star trap.",
        },
      ],
    },
    pattern: {
      title: "The Dynasty Walk",
      content:
        "The verb: geben, gab, gegeben ↔ give, gave, given. The impersonal: es gibt ↔ there is ('it gives') — Es gibt ein Problem. The noun: die Gabe (the gift/talent — 'a giving'), with English gift as the twin. The prefix verb: vergeben, vergab, vergeben ↔ forgive, forgave, forgiven — ver-/for- + geben/give, the complete dynasty in one word. The feeling form: gefallen (it falls to me = it pleases me) — a different root but the same dative grammar: Es gefällt mir. Sentence plan: Ich habe dir? — Ich habe ihm das Buch gegeben — geben, dative receiver, accusative thing, participle closing the bracket.",
      footnotes: [],
      linguist_note:
        "'Es gibt' is the Germanic version of existence-as-giving: God gives, therefore there is. English kept the construction only in fossil phrases ('there's' was once 'there is' the same way). The Perfekt: es hat gegeben — though Germans prefer es gab for the past.",
    },
    exercises: [
      {
        id: "l2501_e1",
        type: "matching_pairs",
        prompt: "The dynasty — match each family member with its English twin:",
        matching_pairs: [
          { id: "gv1", english: "to give", german: "geben" },
          { id: "gv2", english: "to forgive", german: "vergeben" },
          { id: "gv3", english: "the gift (talent)", german: "die Gabe" },
          { id: "gv4", english: "there is", german: "es gibt" },
        ],
        target_answer: "geben, vergeben, die Gabe, es gibt",
        meaning: "to give, to forgive, the gift, there is",
        explanation: "One root radiates through both languages: give, forgive, gift, 'it gives'.",
      },
      {
        id: "l2501_e2",
        type: "shift_select",
        prompt: "'Es gibt ein Problem' — what does 'gibt' literally mean here?",
        options: ["gives — existence expressed as giving", "exists (a different verb)", "was given", "takes"],
        target_answer: "gives — existence expressed as giving",
        meaning: "es gibt = 'it gives' = there is",
        explanation: "German says 'it gives a problem' where English says 'there is' — the impersonal-give construction.",
      },
      {
        id: "l2501_e3",
        type: "shift_select",
        prompt: "Trap alert: which German word means a wrapped PRESENT, and which means POISON?",
        options: [
          "das Geschenk = present; das Gift = poison",
          "das Gift = present; das Geschenk = poison",
          "Both mean present",
          "Both mean poison",
        ],
        target_answer: "das Geschenk = present; das Gift = poison",
        meaning: "The gift/poison false friend",
        explanation: "Both descend from 'a giving': English kept the friendly branch (gift), German kept the dose branch (poison). Say das Geschenk for presents.",
      },
      {
        id: "l2501_e4",
        type: "derive",
        prompt: "Sing the dynasty's melody: 'vergeben' in the ich-past → (forgave):",
        english_hint: "ver- + gab",
        target_answer: "vergab",
        meaning: "ich vergab = I forgave",
        explanation: "ver- + geben's past: vergeben, vergab, vergeben ↔ forgive, forgave, forgiven. The dynasty sings one melody.",
      },
      {
        id: "l2501_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'I have given him the book'",
        target_answer: "Ich habe ihm das Buch gegeben",
        meaning: "I have given him the book",
        word_bank: ["Ich", "habe", "ihm", "das", "Buch", "gegeben"],
        explanation: "The full dynasty in one bracket: geben's participle, the dative receiver ihm, the accusative thing — give gave given, to-him.",
      },
    ],
    summary: {
      outcome: "Radiate geben into its noun, prefix-verbs, and Perfekt forms — and dodge the Gift trap.",
      use_example: { german: "Ich habe ihm das Buch gegeben.", english: "I have given him the book." },
      takeaway: "geben is a dynasty: Gabe, vergeben/forgive, es gibt — and das Gift is poison, say Geschenk for presents.",
      curiosity_teaser: "Next: the v→b word hunt — the whole quiet family, hunted through the Atlas bridge.",
    },
  },
  {
    id: 2601,
    slug: "nacht-and-licht-the-gh-ch-inversion",
    title: "Nacht & Licht: the gh→ch Inversion",
    subtitle: "The English gh words that German kept sounding — and thought↔dachte's payoff",
    phase: 3,
    shift_categories: ["y_gh_to_g_ch", "th_to_d"],
    word_ids: ["nacht", "licht", "lachen", "acht", "recht", "macht", "knecht", "fracht", "denken", "hell", "mond", "stern", "voll", "nass", "selbst"],
    table_word_ids: ["nacht", "licht", "lachen", "acht", "recht", "macht"],
    hook: {
      title: "The Night the Letters Died",
      content:
        "English 'night' is a crime scene. The gh-letters are the victim: they were once a real, throaty [x] — and German still pronounces them every single night: Nacht. The full lineup of the deceased: light/Licht, eight/acht, right/Recht, might/Macht, laugh/lachen, daughter/Tochter. English spelled the funeral and kept the corpse in writing; German never got the memo and still sounds every one. And the crossover star: thought ↔ dachte — th→d, gh→ch, the whole ghost alphabet in one word pair.",
      footnotes: [
        {
          marker: "1",
          title: "laugh's Strange Afterlife",
          content:
            "Most gh words went silent (night, daughter); 'laugh' did something stranger — it turned gh into an F sound. German lachen kept the original [x]. So English 'laugh' is a mispronunciation of lachen that got a spelling pension.",
        },
      ],
    },
    pattern: {
      title: "Sound the Ghosts",
      content:
        "The night row: night ↔ Nacht, light ↔ Licht, fright ↔ Freude's family? no — fright is frucht's cousin, just take: fight ↔ fechten (hint). The number row: eight ↔ acht, right ↔ Recht (Du hast recht — you are right). The might row: might ↔ Macht (Wissen ist Macht — knowledge is power). The servile row: knight ↔ Knecht — in English the servant became a nobleman; in German the Knecht stayed a farmhand. The freight row: freight ↔ Fracht (cargo). And the crown: think/thought ↔ denken/dachte — the double shift you can now fully decode: th→d, gh→ch, vowel included.",
      footnotes: [],
      linguist_note:
        "The gh→ch correspondence is your ninth and final Atlas family. With it, the decode engine is complete: PF-, TH-, T-, K-, D-, V-, GH-, Y-, and the ablaut melodies — every Germanic consonant correspondence accounted for.",
    },
    exercises: [
      {
        id: "l2601_e1",
        type: "matching_pairs",
        prompt: "Sound the ghosts — match the silent-gh words with their ch twins:",
        matching_pairs: [
          { id: "nl1", english: "laugh", german: "lachen" },
          { id: "nl2", english: "right", german: "Recht" },
          { id: "nl3", english: "might (power)", german: "Macht" },
          { id: "nl4", english: "knight (once: servant)", german: "Knecht" },
        ],
        target_answer: "lachen, Recht, Macht, Knecht",
        meaning: "to laugh, right, might, farmhand",
        explanation: "Every silent gh in English is a sounding ch in German — the ghost letters were never empty.",
      },
      {
        id: "l2601_e2",
        type: "shift_select",
        prompt: "The crown jewel: which shifts decode 'thought' into 'dachte'?",
        options: [
          "TH → D and gh → ch (plus the vowel drift)",
          "D → T and P → F",
          "Y → G only",
          "None — pure coincidence",
        ],
        target_answer: "TH → D and gh → ch (plus the vowel drift)",
        meaning: "thought ↔ dachte: the double-shift crown",
        explanation: "The dental hardening and the guttural survival — two laws, one irregular past, fully decoded.",
      },
      {
        id: "l2601_e3",
        type: "shift_select",
        prompt: "'Knight' and 'Knecht' — why did the meanings drift apart?",
        options: [
          "In English the servant rose to nobility; in German the Knecht stayed a farmhand",
          "They are different words entirely",
          "German borrowed Knecht from English",
          "Knight means farmhand in modern English too",
        ],
        target_answer: "In English the servant rose to nobility; in German the Knecht stayed a farmhand",
        meaning: "knight ↔ Knecht: one word, two social fates",
        explanation: "Same word, same gh→ch, opposite class journeys — the word history of two feudal systems. The night sky keeps the theme: der Mond (moon), der Stern (star) — Mond is moon's own twin, Stern is star with the -en tail.",
      },
      {
        id: "l2601_e4",
        type: "reverse_cognate",
        prompt: "What English word is the twin of 'Macht'?",
        target_answer: "might",
        meaning: "might ↔ Macht (gh → ch)",
        explanation: "'Might is right' and 'Wissen ist Macht' — the same word about power, both still sounding their guttural. Predicates rest bare meanwhile: der Kühlschrank ist voll, die Straße ist nass — and selbst stays bare too: ich selbst, I myself.",
      },
      {
        id: "l2601_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'Good night! I think of you'",
        target_answer: "Gute Nacht ich denke an dich",
        meaning: "Good night! I think of you",
        word_bank: ["Gute", "Nacht", "ich", "denke", "an", "dich"],
        explanation: "Nacht (gh→ch) and denke (th→d) — the two ghost-laws in one bedtime sentence. Und das Licht ist hell — bright — the gh→ch word for the light itself.",
      },
    ],
    summary: {
      outcome: "Sound every English gh as German ch and decode thought/dachte completely.",
      use_example: { german: "Gute Nacht — ich denke an dich.", english: "Good night — I think of you." },
      takeaway: "Nacht, Licht, acht, Recht, Macht — the gh never died in German. thought ↔ dachte crowns the map.",
      curiosity_teaser: "Next: Tochter's double-shift showdown and the sagen/gestern y→g twins — the last Atlas lessons.",
    },
  },
  {
    id: 27,
    slug: "prepositions-as-physical-metaphors",
    title: "Prepositions as Physical Metaphors",
    subtitle: "über↔over, unter↔under, durch↔through — and the case each one drags along",
    phase: 3,
    shift_categories: [],
    word_ids: ["über", "unter", "vor", "durch", "aus", "bei", "mit", "zu", "haus", "tisch", "ecke", "mitte", "strand", "mitternacht", "nichte", "legen"],
    table_word_ids: ["über", "unter", "vor", "durch", "aus", "bei"],
    hook: {
      title: "Space Is Grammar",
      content:
        "The prepositions are the most physical words in German — and almost all of them are your own. über ↔ over. unter ↔ under. vor ↔ fore (before). durch ↔ through. aus ↔ out. bei ↔ by. mit ↔ mid (midwife). zu ↔ to. German describes space the way English does — it just refuses to abbreviate the case grammar: motion across a boundary drags the accusative, position drags the dative. über das Haus (over the house — flying across it) versus über dem Haus (above the house — hovering). One preposition, two cases, two physical realities.",
      footnotes: [
        {
          marker: "1",
          title: "The Two-Way Prepositions",
          content:
            "an, auf, hinter, in, neben, über, unter, vor, zwischen are the Wechselpräpositionen — 'changeable prepositions'. Motion (wohin? where-to?) → accusative; location (wo? where-at?) → dative. The case answers the question you ask about the scene.",
        },
      ],
    },
    pattern: {
      title: "The Spatial Set and Its Two Cases",
      content:
        "The static set (always dative): aus (out of — Ich komme aus Berlin), bei (by/at — bei Berlin), mit (with), nach (after/to), seit (since), von (from), zu (to). The dynamic pair-set (dative location, accusative motion): in dem Haus → im Haus (in the house) vs in das Haus → ins Haus (into the house); über dem Haus (above it) vs über das Haus (over it); unter dem Tisch (under it, lying there) vs unter den Tisch (under it, going there). vor and durch complete the picture: vor dem Haus (in front of it — dative), durch den Park (through it — accusative always, motion by definition).\n\nOne Denglisch ladder, read it the German way first: Das Auto steht vor dem Haus → The car stands before to-the house → The car stands in front of the house. The middle line puts both lessons on the page: vor is before/fore, and dem is the dative 'the' the parked scene demands.",
      footnotes: [],
      linguist_note:
        "The contractions are the case system showing its seams: im = in + dem (dative), ins = in + das (accusative), am = an + dem, zum = zu + dem, zur = zu + der. Each contraction tells you the case before the sentence finishes.",
    },
    exercises: [
      {
        id: "l27_e1",
        type: "matching_pairs",
        prompt: "The spatial twins — match each preposition with its English cognate:",
        matching_pairs: [
          { id: "pm1", english: "over", german: "über" },
          { id: "pm2", english: "under", german: "unter" },
          { id: "pm3", english: "through", german: "durch" },
          { id: "pm4", english: "by / at", german: "bei" },
          { id: "pm5", english: "corner (edge's cousin)", german: "die Ecke" },
          { id: "pm6", english: "middle (mid)", german: "die Mitte" },
        ],
        target_answer: "über, unter, durch, bei, die Ecke, die Mitte",
        meaning: "over, under, through, by/at, the corner, the middle",
        explanation: "The spatial prepositions are almost all twins — the V→B shift (über), the gh→ch pair (durch/through), the exact match (bei/by) — and die Ecke, die Mitte are the nouns that name the spots: an der Ecke, in der Mitte. They build time too: um Mitternacht — at midnight, the gh→ch compound on the clock.",
      },
      {
        id: "l27_e2",
        type: "shift_select",
        prompt: "'Die Katze ist _____ dem Tisch.' (The cat is lying under the table — no motion):",
        options: ["unter (dative — location)", "unter (accusative)", "durch", "ohne"],
        target_answer: "unter (dative — location)",
        meaning: "Die Katze ist unter dem Tisch",
        explanation: "wo? (where-at?) → dative: dem. The cat is AT REST under the table — am Strand too (the beach; strand is the shore-word English kept): location, dative. legen lays things somewhere and takes the destination: Ich lege das Buch auf den Tisch — lay's y→g twin, accusative on arrival.",
      },
      {
        id: "l27_e3",
        type: "transcribe",
        prompt: "You want to say:",
        idea: "you're giving directions to a friend: you walk to the house",
        cues: [
          "zu + dem shrinks to zum — the contraction shows its case: Ich gehe zum Haus",
        ],
        target_answer: "Ich gehe zum Haus",
        meaning: "I walk to the house",
        vocab_hints: [
          { word: "zum", translation: "to the (zu + dem)", note: "zu always takes the dative — the contraction wears it openly" },
        ],
        word_bank: ["Ich", "gehe", "zum", "zu", "dem", "Haus", "zur"],
        explanation: "The contraction is the case system showing its seams: zum = zu + dem (dative). zu never accuses — it always dates. für accuses instead: ein Buch für die Nichte — something for the niece, accusative gift.",
      },
      {
        id: "l27_e4",
        type: "reverse_cognate",
        prompt: "What archaic English word (as in 'midwife') is the twin of 'mit'?",
        target_answer: "mid",
        meaning: "mit ↔ mid ('with')",
        explanation: "English retired 'mid' but kept it in midwife — 'with-woman'. German uses mit daily.",
      },
      {
        id: "l27_e5",
        type: "literal_gloss",
        prompt: "Which English is built the German way?",
        german: "Das Auto steht vor dem Haus.",
        natural: "The car stands in front of the house.",
        options: ["The car stands in front of the house.", "The car stands before to-the house.", "The car stands in front to-the house."],
        target_answer: "The car stands before to-the house.",
        meaning: "The car stands in front of the house.",
        explanation: "Read it the German way: 'before to-the house.' vor is before/fore, and dem is the dative 'the' that a motion-less scene demands — the case is on the page, where English hides it in word order.",
      },
    ],
    summary: {
      outcome: "Use the cognate prepositions and pick accusative vs dative by motion.",
      use_example: { german: "Das Auto steht vor dem Haus.", english: "The car stands in front of the house." },
      takeaway: "The prepositions are your own spatial words — and the case answers the question: wohin? accusative, wo? dative.",
      curiosity_teaser: "Next: the über, unter, durch metaphor set — spatial drills with the cognate prepositions.",
    },
    twist: {
      prompt: "Same walk, but today comes first: I walk to the house becomes TODAY I walk to the house. (Something still holds position 2.)",
      target_answer: "Heute gehe ich zum Haus",
      word_bank: ["Heute", "gehe", "ich", "zum", "Haus", "geht"],
      explanation: "Fronting fills position 1, so gehe keeps position 2 and ich slips in behind — the verb-second law that survived thirty topics.",
    },
  },
  {
    id: 28,
    slug: "verb-families-root-radiations",
    title: "Verb Families & Root Radiations",
    subtitle: "One root, many words: fahren/Fahrt, ziehen/Zug — like stand/understand/withstand",
    phase: 3,
    shift_categories: ["strong_verbs_ablaut"],
    word_ids: ["fahren", "fahrt", "zug", "ziehen", "nehmen", "verstehen", "aufstehen", "gewinnen", "schauen", "platz", "fluss", "markt", "wand"],
    table_word_ids: ["fahren", "fahrt", "zug", "ziehen", "nehmen", "verstehen"],
    hook: {
      title: "The Root Is the Vocabulary",
      content:
        "English never gave you a list of 'stand-words': you own stand, understand, withstand, standstill, standout, 'I can't stand it' — one root, radiating. German does the same, visibly. fahren (to drive) radiates into die Fahrt (the journey), der Fahrer (the driver), das Fahrzeug (drive-stuff, a vehicle), abfahren (depart), ausfahren (drive out). ziehen (to pull) radiates into der Zug (the pull → the train!), der Aufzug (up-pull → elevator), der Umzug (move — the around-pull!), umziehen (to move house). Learn the root and the vocabulary grows itself.",
      footnotes: [
        {
          marker: "1",
          title: "Zug, the Word That Pulls Everything",
          content:
            "der Zug means pull, draught, train, feature, and move — all from ziehen. A train is 'the puller'; a chess move is ein Zug; der Zeitgeist is the 'time-spirit'. One three-letter root pulls a whole semantic freight train — the way English 'draw' gives you drawer, withdraw, drawback, drawn-out.",
        },
      ],
    },
    pattern: {
      title: "Two Dynasties and a Method",
      content:
        "The fahren dynasty: fahren, fuhr, gefahren ↔ fare, fared. Die Fahrt (the ride), der Fahrer (driver — the -er agent law!), das Fahrzeug (vehicle — the -zeug law), abfahren (depart — separable, prefix flies!), die Abfahrt (departure). The ziehen dynasty: ziehen, zog, gezogen ↔ tug, tugged? no — its English cousins are tow and tug. Der Zug (the train), der Aufzug (elevator), der Umzug (the move), umziehen (to move house), aufziehen (to raise). The method: when you meet a new German word, strip it to the root, check your Atlas family, then let the prefix and suffix laws name it for you.",
      footnotes: [],
      linguist_note:
        "ziehen's z is the T→Z shift of the ancient *teuhaną — the same root as English tow and tug. So der Zug, tow, and tug are one word: the train is named for pulling, exactly as a tugboat is.",
    },
    exercises: [
      {
        id: "l28_e1",
        type: "matching_pairs",
        prompt: "The fahren dynasty — match each member with its meaning:",
        matching_pairs: [
          { id: "vf1", english: "the journey / ride", german: "die Fahrt" },
          { id: "vf2", english: "the vehicle (drive-stuff)", german: "das Fahrzeug" },
          { id: "vf3", english: "to depart", german: "abfahren" },
          { id: "vf4", english: "the driver", german: "der Fahrer" },
          { id: "vf5", english: "to win", german: "gewinnen" },
        ],
        target_answer: "die Fahrt, das Fahrzeug, abfahren, der Fahrer, gewinnen",
        meaning: "the journey, the vehicle, to depart, the driver, to win",
        explanation: "One root, four derivatives — every suffix law you own (-t, -zeug, separable, -er agent) is on display. gewinnen is ge- + winnen: the win-verb wearing its ancient prefix.",
      },
      {
        id: "l28_e2",
        type: "shift_select",
        prompt: "'Der Zug fährt um acht.' — what is der Zug, literally?",
        options: ["The pull — the train is named for pulling", "The car", "The track", "The fare"],
        target_answer: "The pull — the train is named for pulling",
        meaning: "der Zug = the pull(er) = the train",
        explanation: "ziehen → der Zug: the thing that pulls. An elevator is the up-pull (Aufzug), moving house the around-pull (Umzug). The city map radiates too: der Platz (the square), der Fluss (the river, flow's cousin), der Markt, die Wand (the wall — English's own wand, magic included) — nouns named by what they are.",
      },
      {
        id: "l28_e3",
        type: "derive",
        prompt: "The ziehen dynasty: 'Ich ___ nach Berlin um.' (I am moving — to Berlin; separable, verb-first):",
        english_hint: "ziehen's root + the prefix at the end",
        target_answer: "ziehe",
        meaning: "Ich ziehe nach Berlin um = I am moving to Berlin",
        explanation: "umziehen splits: ziehe in position 2, um at the end — and ziehen's z is the shifted t of tow/tug.",
      },
      {
        id: "l28_e4",
        type: "shift_select",
        prompt: "English runs the same radiation — which set matches the stehen family (verstehen, aufstehen)?",
        options: ["stand, understand, stand up", "give, forgive, gift", "go, went, gone", "see, saw, seen"],
        target_answer: "stand, understand, stand up",
        meaning: "stehen ↔ stand: the radiation is identical",
        explanation: "verstehen = understand (for-stand!), aufstehen = stand up. English and German built the same family from the same root. schauen (to look) runs its own show — die Schau, English show and scout — root radiations on both shores.",
      },
      {
        id: "l28_e5",
        type: "transcribe",
        prompt: "Put into German:",
        idea: "you're planning a day trip: the journey takes an hour",
        cues: [
          "fahren's noun leads the sentence: die Fahrt — then dauert (the er/sie -t), and eine Stunde closes it",
        ],
        target_answer: "Die Fahrt dauert eine Stunde",
        meaning: "The journey takes an hour",
        vocab_hints: [
          {
            word: "dauert",
            translation: "lasts / takes (time)",
            note: "dauern — related to 'endure'; the -t stays in the er-form",
          },
          {
            word: "eine Stunde",
            translation: "an hour",
            note: "die Stunde — a distant cousin of 'stand' (the standing-time!)",
          },
        ],
        word_bank: ["Die", "Fahrt", "dauert", "eine", "Stunde", "der"],
        explanation: "die Fahrt — fahren's noun — as the subject, with a time expression in the accusative.",
      },
    ],
    summary: {
      outcome: "Radiate fahren and ziehen into their noun families and read new words via roots.",
      use_example: { german: "Die Fahrt dauert eine Stunde.", english: "The journey takes an hour." },
      takeaway: "Roots radiate: fahren → Fahrt/Fahrzeug/Fahrer; ziehen → Zug/Aufzug/Umzug — learn roots, not lists.",
      curiosity_teaser: "Next: the fahren dynasty — one root radiating into Fahrt, Zug, and a whole transit system.",
    },
    twist: {
      prompt: "Longer trip: the journey takes an hour becomes the journey takes A DAY. (Tag is masculine — mind the case.)",
      target_answer: "Die Fahrt dauert einen Tag",
      word_bank: ["Die", "Fahrt", "dauert", "einen", "eine", "Tag", "Stunde"],
      explanation: "eine Stunde → einen Tag: the time expression is accusative, and Tag is masculine — the Him-Case stamps the article. dauert and die Fahrt don't move.",
    },
  },
  {
    id: 29,
    slug: "sein-motion-idiomatic-mindset",
    title: "sein, Motion & the Idiomatic Mindset",
    subtitle: "ist↔is, war↔was — and Wie geht's = 'How goes it?'",
    phase: 3,
    shift_categories: [],
    word_ids: ["sein", "was", "haben", "morgen", "gestern", "kalt", "gut", "hunger", "krank", "satt", "glücklich", "urlaub", "meer", "holen", "wieder"],
    table_word_ids: ["sein", "was", "haben", "kalt", "gut"],
    hook: {
      title: "The Oldest Words Are the Closest",
      content:
        "ich bin ↔ I am? No — bin ↔ be/am both descend from the ancient *bʰu- 'to grow/be'; ich bin is 'I be' in the oldest sense. ist ↔ is: identical. war ↔ was: identical, one letter apart. The verb 'to be' is the most conservative word in any language — and German kept all three ancient roots: the *es- (ist), the *bʰu- (bin), the *wes- (war/gewesen). English kept the same trio: is, be, was. Then the idioms: Wie geht's? is literally 'How goes it?' — English used to say exactly that. Mir ist kalt is 'it is cold TO ME' — the dative feeling-grammar. German's idioms are frozen Early Modern English.",
      footnotes: [
        {
          marker: "1",
          title: "Three Roots, One Verb",
          content:
            "Infinitive sein is a fourth root (*es- via 'sind'); the paradigm mixes *es- (ist, sind), *bʰu- (bin, bist), and *wes- (war, gewesen) — and English's is, are, be, was, was, been is the same mixed deck. Suppletion at the very core of both languages.",
        },
      ],
    },
    pattern: {
      title: "Being Cognates and the Idiom Fridge",
      content:
        "The paradigm, with twins: ich bin ↔ I am/I be, du bist ↔ thou art, er ist ↔ he is, wir sind ↔ we are? (sind and are are different branches — but both ancient), er war ↔ he was (identical!), gewesen ↔ been. The idioms, unfrozen: Wie geht's? = 'How goes it?' (Es geht mir gut — 'it goes to-me well'). Es tut mir leid = 'it does me sorrow' (tun ↔ do!). Mir ist kalt = 'it is cold to-me'. Auf Wiedersehen = 'until re-seeing'. Each idiom is an English sentence your language used to say, wearing modern German clothes. Say them as whole gestures — that is how Germans store them too.",
      footnotes: [],
      linguist_note:
        "Es tut mir leid hides the do-tun twin: tun ↔ do is one of the oldest identical pairs in the language (Proto-Germanic *dōną). English built its do-support out of the same verb German uses for 'to do' — the auxiliary you learned NOT to use in questions is, historically, tun.",
    },
    exercises: [
      {
        id: "l29_e1",
        type: "matching_pairs",
        prompt: "The being twins — match each form with its English cognate:",
        matching_pairs: [
          { id: "sm1", english: "is", german: "ist" },
          { id: "sm2", english: "was", german: "war" },
          { id: "sm3", english: "been", german: "gewesen" },
          { id: "sm4", english: "am / be", german: "bin" },
          { id: "sm5", english: "I am sick", german: "ich bin krank" },
          { id: "sm6", english: "I am full", german: "ich bin satt" },
          { id: "sm7", english: "I am happy", german: "ich bin glücklich" },
          { id: "sm8", english: "I am hungry", german: "ich habe Hunger" },
        ],
        target_answer: "ist, war, gewesen, bin, ich bin krank, ich bin satt, ich bin glücklich, ich habe Hunger",
        meaning: "is, was, been, am, I am sick, I am full, I am happy, I am hungry",
        explanation: "Three ancient roots (*es-, *wes-, *bʰu-) shared by both languages — the paradigm is a fossil bed, and the feelings ride it: krank, satt, glücklich, Hunger.",
      },
      {
        id: "l29_e2",
        type: "shift_select",
        prompt: "Unfreeze the idiom: 'Wie geht's?' literally asks what?",
        options: ["How goes it?", "How do you do (formally)?", "What is new?", "Where are you going?"],
        target_answer: "How goes it?",
        meaning: "Wie geht's = 'How goes it (to you)?'",
        explanation: "gehen + the dative: geht ES DIR? — 'does it go TO YOU?' English said 'How goes it?' until recently — and im Urlaub (on vacation), am Meer (at the sea), it still opens every conversation. holen fits too: sich Luft holen — to fetch fresh air — und holt sie wieder, fetches it again.",
      },
      {
        id: "l29_e3",
        type: "shift_select",
        prompt: "'Mir ist kalt.' — what is happening grammatically?",
        options: [
          "The dative experiencer: it is cold TO ME",
          "Mir is a typo for mich",
          "kalt is a verb here",
          "It means 'I am cold-blooded'",
        ],
        target_answer: "The dative experiencer: it is cold TO ME",
        meaning: "Mir ist kalt — the methinks construction",
        explanation: "Feelings happen TO you in German: mir ist kalt/langweilig/schlecht — the dative of experience.",
      },
      {
        id: "l29_e4",
        type: "reverse_cognate",
        prompt: "'Es tut mir leid' hides which common English verb in 'tut'?",
        target_answer: "do",
        meaning: "tun ↔ do (it does me sorrow = I am sorry)",
        explanation: "tun and do are the same ancient verb — Es tut mir leid is 'it does me sorrow'. The polite apology is an English sentence in disguise.",
      },
      {
        id: "l29_e5",
        type: "transcribe",
        prompt: "How would you say:",
        idea: "you're summing up the weekend: yesterday was good and today you're cold — the German way, it is cold to me",
        cues: [
          "war ↔ was opens the first clause; the second is the dative experiencer: heute ist mir kalt — 'it is cold TO ME'",
        ],
        target_answer: "Gestern war gut und heute ist mir kalt",
        meaning: "Yesterday was good and today I am cold (it is cold to me)",
        word_bank: ["Gestern", "war", "gut", "und", "heute", "ist", "mir", "kalt", "mich"],
        explanation: "war ↔ was in the first clause, the dative experiencer (mir ist kalt) in the second — the being verbs and the idiom fridge in one sentence.",
      },
    ],
    summary: {
      outcome: "Conjugate sein via its English twins and use the frozen-English idioms.",
      use_example: { german: "Gestern war gut, aber heute ist mir kalt.", english: "Yesterday was good, but today I am cold." },
      takeaway: "ist↔is, war↔was, bin↔be — and the idioms are unfrozen English: How goes it? It does me sorrow. It is cold to me.",
      curiosity_teaser: "Next: ist, war & bin — the being cognates: the sein paradigm through its English twins.",
    },
    twist: {
      prompt: "Your friend caught the chill: today I am cold (it is cold to ME) becomes it is cold to HIM.",
      target_answer: "Heute ist ihm kalt",
      word_bank: ["Heute", "ist", "ihm", "ihn", "mir", "kalt"],
      explanation: "mir → ihm: the dative experiencer has three faces, all English fossils — 'give it me', 'give it thee', 'give it him'. The idiom needs the TO-case: ihm, never ihn.",
    },
  },

  {
    id: 30,
    slug: "capstone-the-bridge-reading",
    title: "Capstone: The Bridge Reading",
    subtitle: "Ein Tag in Berlin — one connected story built from everything you own",
    phase: 3,
    shift_categories: [],
    word_ids: ["mann", "frau", "kind", "zug", "fahrt", "kaufen", "brot", "wasser", "buch", "haus", "morgen", "gestern", "nacht", "licht", "gabe", "schlecht", "fertig", "lustig", "übel", "fluss", "markt", "wand", "gewinnen", "schauen", "ausziehen"],
    table_word_ids: ["zug", "fahrt", "brot", "nacht", "licht", "gabe"],
    hook: {
      title: "The Bridge",
      content:
        "Ninety lessons ago you learned that Brücke means bridge. Today you cross it. Below is a connected story — 'Ein Tag in Berlin' — built almost entirely from words you have met, annotated with the shifts that explain them, and seeded with the false friends lying in wait. Every sentence is a sentence you can now decode, and most of them you can build. Read it twice: once for the story, once for the machinery. Then the exercises hand you the pen.",
      footnotes: [
        {
          marker: "1",
          title: "The Reading Passage",
          content:
            "Der Mann und die Frau wohnen in Berlin. Gestern hatten? — gestern machten sie? keep it Perfekt: Gestern haben sie eine Fahrt mit dem Zug gemacht. Der Zug war schnell. In der Stadt haben sie Brot und Wasser gekauft. Am Abend hat der Mann ein Buch gelesen, und die Frau hat? — die Kinder? die Frau hat das Licht angemacht? — fine: und die Frau hat gelacht. Um elf Uhr? — Um elf war die Nacht still, und das Haus war dunkel. Heute trinken sie Kaffee. Es gibt keinen besseren Morgen — there is no better morning.",
        },
      ],
    },
    pattern: {
      title: "Decode, Then Predict",
      content:
        "Decode pass: every capital word carries a shift receipt (Zug pulls, Fahrt fares, Nacht keeps its ch). Grammar pass: the Perfekt brackets (haben...gekauft), the dative receivers, the V2 walls, the subclause basements. Prediction pass: cover the German and rebuild it from the English — then reverse. The false friends are hiding: Rat is advice, fast is almost, bald is soon. When you can read this passage and rebuild its sentences, the trail is behind you and German is ahead.",
      footnotes: [],
      linguist_note:
        "The passage is deliberately short — about sixty words — because density, not length, is the test: nearly every word in it has appeared in a lesson table, and every construction has been drilled.",
    },
    exercises: [
      {
        id: "l30_e1",
        type: "matching_pairs",
        prompt: "Reading check — match each story sentence with its English meaning:",
        matching_pairs: [
          { id: "cp1", english: "Yesterday they took a trip by train", german: "Gestern haben sie eine Fahrt mit dem Zug gemacht" },
          { id: "cp2", english: "The train was fast", german: "Der Zug war schnell" },
          { id: "cp3", english: "In the city they bought bread and water", german: "In der Stadt haben sie Brot und Wasser gekauft" },
          { id: "cp4", english: "At eleven the night was still", german: "Um elf war die Nacht still" },
          { id: "cp5", english: "To him it went badly", german: "Es ging ihm übel" },
          { id: "cp6", english: "The children get undressed", german: "Die Kinder ziehen sich aus" },
          { id: "cp7", english: "The market is at the river", german: "Der Markt ist am Fluss" },
          { id: "cp8", english: "The picture hangs on the wall", german: "Das Bild hängt an der Wand" },
          { id: "cp9", english: "She wanted to win", german: "Sie wollte gewinnen" },
          { id: "cp10", english: "They look out of the window", german: "Sie schauen aus dem Fenster" },
        ],
        target_answer: "Gestern haben sie eine Fahrt mit dem Zug gemacht, Der Zug war schnell, In der Stadt haben sie Brot und Wasser gekauft, Um elf war die Nacht still, Es ging ihm übel, Die Kinder ziehen sich aus, Der Markt ist am Fluss, Das Bild hängt an der Wand, Sie wollte gewinnen, Sie schauen aus dem Fenster",
        meaning: "the story beats of the passage",
        explanation: "Perfekt brackets, sein-pasts, and dative time — every construction from the trail, in one story.",
      },
      {
        id: "l30_e2",
        type: "shift_select",
        prompt: "Trap watch: in the story's world, someone asks for 'Rat'. What do they get?",
        options: ["Advice — der Rat means counsel", "A rodent", "A wheel", "A gift"],
        target_answer: "Advice — der Rat means counsel",
        meaning: "der Rat = advice (not rat)",
        explanation: "The false-friend deck strikes: der Rat is advice. The rodent is die Ratte. The bait 'a gift' is die Gabe — the giving that es gibt names.",
      },
      {
        id: "l30_e3",
        type: "shift_select",
        prompt: "'Das Haus war dunkel' — which decode runs through 'dunkel'?",
        options: ["TH → D — dark/dusk ↔ dunkel", "P → F", "V → B", "No shift — pure guesswork"],
        target_answer: "TH → D — dark/dusk ↔ dunkel",
        meaning: "dunkel ↔ dark/dusk — the dental hardening",
        explanation: "One of the trail's first shifts closes the capstone: the d-words answer to English th.",
      },
      {
        id: "l30_e4",
        type: "reverse_cognate",
        prompt: "The story's morning line hides a shift family: 'Morgen' is the twin of which English word?",
        target_answer: "morrow",
        meaning: "morrow (to-morrow) ↔ morgen",
        explanation: "The very first sprig taught you this pair — the bridge begins and ends with twins.",
      },
      {
        id: "l30_e5",
        type: "transcribe",
        prompt: "Put into German:",
        idea: "you're closing your Berlin story at dawn: there is no better morning",
        cues: [
          "es gibt (existence by giving) + keinen (no, Him-Case) + besseren (better with its ending) — four lessons in five words",
        ],
        target_answer: "Es gibt keinen besseren Morgen",
        meaning: "There is no better morning",
        word_bank: ["Es", "gibt", "keinen", "besseren", "Morgen", "kein", "gute"],
        explanation: "es gibt (existence by giving) + keinen (negated accusative) + besseren (the comparative with its ending) — four lessons in five words. The story's own adjectives close the loop: das Essen war fertig, die Leute waren lustig, und das Wetter war schlecht.",
      },
    ],
    summary: {
      outcome: "Read and rebuild a connected German story using the entire trail.",
      use_example: { german: "Es gibt keinen besseren Morgen.", english: "There is no better morning." },
      takeaway: "You crossed the bridge: sixty words, every one decoded by a law you own — the trail ends, the language begins.",
      curiosity_teaser: "Next: A Day in Berlin, the full reading — with tap-to-inspect words and shift annotations.",
    },
    twist: {
      prompt: "Doubt the ending: there is no better morning → IS there no better morning? (The verb flips, es follows.)",
      target_answer: "Gibt es keinen besseren Morgen",
      word_bank: ["Gibt", "es", "keinen", "besseren", "Morgen"],
      explanation: "In the question, gibt takes position 1 and es falls in behind — the ancient flip, one last time. The capstone closes where the trail began: the verb knows its seat.",
    },
  },
  {
    id: 2701,
    slug: "uber-unter-durch-metaphor-set",
    title: "über, unter, durch: Metaphor Set",
    subtitle: "Spatial drills with the cognate prepositions — picture-based placement",
    phase: 3,
    shift_categories: [],
    word_ids: ["über", "unter", "durch", "vor", "aus", "zu", "haus", "tisch", "hafen", "wald", "brücke", "ecke", "mitte", "strand", "legen"],
    table_word_ids: ["über", "unter", "durch", "vor", "aus", "zu"],
    hook: {
      title: "The Camera in Your Head",
      content:
        "German prepositions are a camera language: each one places the scene. über: above, crossing, about (we speak ABOUT the book — über das Buch). unter: under, beneath, among (unter Freunden — among friends). durch: through — always moving, always accusative. vor: in front of, before (in space and in time: vor dem Haus, vor acht Uhr). aus: out of, origins (Ich komme aus Berlin). zu: toward, at (Zum Thema? keep it spatial: zur Schule? school untaught — zu dem Haus). Run the camera: place the object, choose the case, say the sentence.",
      footnotes: [
        {
          marker: "1",
          title: "über Is Doing Overtime",
          content:
            "über is the hardest-working preposition: over (spatial), above, across, about (Wir sprechen über das Buch — you drilled this in the V→B lesson), and über- as a prefix (übermorgen — over-morrow). One word, a whole coordinate system.",
        },
      ],
    },
    pattern: {
      title: "Place the Scene",
      content:
        "Static scenes (wo?): Das Buch ist auf? no — auf is next lesson's star; the dative set: über dem Tisch (above it), unter dem Tisch (under it), vor dem Haus (before it). Dynamic scenes (wohin?): Ich gehe unter die? — unter den Tisch (under it, going), über die Straße (across the street — Straße taught!), durch den Park (through it). Origins and targets: aus dem Haus (out of the house), zu dem Haus → zum Haus (to the house — the contraction!). Every sentence is a camera move: where is the camera, where is the thing, did it move?",
      footnotes: [],
      linguist_note:
        "durch is accusative-only because its meaning is inherently directional — you cannot 'be through' a park, only go through it. Meaning determines case here, not memorization.",
    },
    exercises: [
      {
        id: "l2701_e1",
        type: "shift_select",
        prompt: "Camera check: 'Der Vogel ist über _____ Haus.' (above, hovering — no motion)",
        options: ["dem (dative — location)", "das (accusative)", "der", "den"],
        target_answer: "dem (dative — location)",
        meaning: "Der Vogel ist über dem Haus",
        explanation: "wo? → dative. The bird hovers; nothing crosses a boundary. an der Ecke (at the corner), in der Mitte (in the middle), am Strand (on the beach) — three dative addresses; legen still accuses: Ich lege es auf den Tisch.",
      },
      {
        id: "l2701_e2",
        type: "matching_pairs",
        prompt: "Match each camera move with its preposition:",
        matching_pairs: [
          { id: "um1", english: "through (the park)", german: "durch den Park" },
          { id: "um2", english: "out of (the house)", german: "aus dem Haus" },
          { id: "um3", english: "in front of (the house)", german: "vor dem Haus" },
          { id: "um4", english: "to (the house)", german: "zum Haus" },
          { id: "um5", english: "under the bridge", german: "unter der Brücke" },
          { id: "um6", english: "into the harbor", german: "in den Hafen" },
          { id: "um7", english: "through the forest", german: "durch den Wald" },
        ],
        target_answer: "durch den Park, aus dem Haus, vor dem Haus, zum Haus, unter der Brücke, in den Hafen, durch den Wald",
        meaning: "through the park, out of the house, in front of the house, to the house, under the bridge, into the harbor, through the forest",
        explanation: "Each preposition is a camera move — and the case (or contraction) reports whether anything moved: der Brücke hovers, den Hafen crosses.",
      },
      {
        id: "l2701_e3",
        type: "shift_select",
        prompt: "Wir sprechen _____ das Buch. (We speak ABOUT the book):",
        options: ["über", "unter", "aus", "durch"],
        target_answer: "über",
        meaning: "Wir sprechen über das Buch",
        explanation: "über's 'about' meaning — the same preposition that is 'over' in space runs the topic-of-conversation job.",
      },
      {
        id: "l2701_e4",
        type: "reverse_cognate",
        prompt: "What English word is the twin of 'durch'?",
        target_answer: "through",
        meaning: "through ↔ durch (th → d, gh → ch)",
        explanation: "A double-shift preposition: the th hardened to d and the guttural survives as ch — through and durch are one word.",
      },
      {
        id: "l2701_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'We walk through the park'",
        target_answer: "Wir gehen durch den Park",
        meaning: "We walk through the park",
        vocab_hints: [
          {
            word: "den",
            translation: "the (masculine accusative)",
            note: "durch is always accusative — der Park becomes den Park",
          },
        ],
        word_bank: ["Wir", "gehen", "durch", "den", "Park"],
        explanation: "durch demands the accusative — even though Park is masculine and 'walking' feels calm. The preposition rules.",
      },
    ],
    summary: {
      outcome: "Place scenes with über/unter/durch/vor/aus/zu and match case to camera.",
      use_example: { german: "Wir gehen durch den Park.", english: "We walk through the park." },
      takeaway: "Prepositions are camera moves — and durch always films motion, so it always takes the accusative.",
      curiosity_teaser: "Next: the Case Trigger Gym — twenty prompts deciding accusative or dative after two-way prepositions.",
    },
  },
  {
    id: 2702,
    slug: "case-trigger-gym",
    title: "Case Trigger Gym",
    subtitle: "Twenty prompts: motion → accusative, location → dative",
    phase: 3,
    shift_categories: [],
    word_ids: ["in", "auf", "über", "unter", "vor", "tisch", "haus", "stadt", "straße", "platz", "ecke", "mitte", "strand", "hafen", "wald", "brücke"],
    table_word_ids: ["über", "unter", "vor", "tisch", "haus", "stadt"],
    hook: {
      title: "The Two-Question Machine",
      content:
        "Every two-way preposition (an, auf, hinter, in, neben, über, unter, vor, zwischen) asks you one question before you answer: wohin or wo? Where-TO (motion into the space) → accusative. Where-AT (position inside the space) → dative. Ich gehe INS Haus (into the house — motion, accusative) versus Ich bin IM Haus (in the house — location, dative). The contractions are your cheat sheet: ins = in das (accusative), im = in dem (dative). Twenty reps today until the question asks itself.",
      footnotes: [
        {
          marker: "1",
          title: "The Full Two-Way Set",
          content:
            "an (at/on — vertical edge), auf (on — horizontal surface), hinter (behind), in (in), neben (next to), über (over), unter (under), vor (in front of), zwischen (between). All nine switch cases by motion — the most drilled topic in every German classroom, now just one question deep.",
        },
      ],
    },
    pattern: {
      title: "Ask, Then Decline",
      content:
        "Round one — wo?: Das Buch ist auf DEM Tisch (dative). Round two — wohin?: Ich lege das Buch auf DEN Tisch (accusative). Round three — the verbs decide: gehen/fahren/kommen/legen/stellen (put-standing) are motion verbs → accusative; sein/liegen/stehen (be/lying/standing) are location verbs → dative. Round four — contractions: ins Kino? untaught — ins Haus, im Haus, an den? keep: am Montag (dative of time, from topic 17!). The logic is physical: if the scene has a trajectory, accusative; if it has an address, dative.",
      footnotes: [],
      linguist_note:
        "legen/liegen and stellen/stehen are the motion/location verb twins: legen = lay (motion → accusative), liegen = lie (location → dative). English once made the same distinction — 'lay' takes an object, 'lie' does not — and still half-remembers it.",
    },
    exercises: [
      {
        id: "l2702_e1",
        type: "shift_select",
        prompt: "'Ich lege das Buch auf _____ Tisch.' (I lay the book ON the table — motion!):",
        options: ["den (accusative — motion)", "dem (dative — location)", "der", "des"],
        target_answer: "den (accusative — motion)",
        meaning: "Ich lege das Buch auf den Tisch",
        explanation: "legen is a motion verb: the book travels to the surface. wohin? → accusative: den. am Strand, im Wald — rest words; in den Wald — motion words: the forest walk crosses its boundary.",
      },
      {
        id: "l2702_e2",
        type: "shift_select",
        prompt: "'Das Buch liegt auf _____ Tisch.' (The book IS LYING on the table — no motion):",
        options: ["dem (dative — location)", "den (accusative)", "das", "eine"],
        target_answer: "dem (dative — location)",
        meaning: "Das Buch liegt auf dem Tisch",
        explanation: "liegen is a location verb: the book is AT REST. wo? → dative: dem. One verb flip, one case flip.",
      },
      {
        id: "l2702_e3",
        type: "matching_pairs",
        prompt: "Match each scene with its correct case logic:",
        matching_pairs: [
          { id: "ct1", english: "into the house (motion)", german: "ins Haus (in + das)" },
          { id: "ct2", english: "in the house (location)", german: "im Haus (in + dem)" },
          { id: "ct3", english: "under the table, going", german: "unter den Tisch" },
          { id: "ct4", english: "under the table, resting", german: "unter dem Tisch" },
          { id: "ct5", english: "at the corner (location)", german: "an der Ecke" },
          { id: "ct6", english: "in the middle (location)", german: "in der Mitte" },
          { id: "ct7", english: "under the bridge (location)", german: "unter der Brücke" },
          { id: "ct8", english: "into the harbor (motion)", german: "in den Hafen" },
        ],
        target_answer: "ins Haus, im Haus, unter den Tisch, unter dem Tisch, an der Ecke, in der Mitte, unter der Brücke, in den Hafen",
        meaning: "the case logic in eight scenes",
        explanation: "The contraction or article ending IS the case report — motion gets accusative, location gets dative. der Brücke rests, den Hafen crosses.",
      },
      {
        id: "l2702_e4",
        type: "derive",
        prompt: "Contract it: 'Wir gehen zu _____ Haus.' (zu + dem, to the house):",
        english_hint: "zu + dem = one syllable",
        target_answer: "zum",
        meaning: "Wir gehen zum Haus = We go to the house",
        explanation: "zum = zu + dem — the dative contraction, because gehen TOWARD is location-grammar's cousin: destination as state. Auf dem Platz (on the square — the open space) — location, dative.",
      },
      {
        id: "l2702_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'The cat goes under the table' (motion!)",
        target_answer: "Die Katze geht unter den Tisch",
        meaning: "The cat goes under the table",
        word_bank: ["Die", "Katze", "geht", "unter", "den", "Tisch"],
        explanation: "gehen = motion → wohin? → accusative: unter den Tisch. Yesterday's resting cat took dem; today it moves.",
      },
    ],
    summary: {
      outcome: "Choose accusative or dative after two-way prepositions on reflex.",
      use_example: { german: "Die Katze geht unter den Tisch.", english: "The cat goes under the table." },
      takeaway: "wohin? → accusative (motion); wo? → dative (location) — and the contractions im/ins report the case for free.",
      curiosity_teaser: "Next: Preposition Sentence Ladders — chain prepositional phrases onto taught verbs.",
    },
  },
  {
    id: 2801,
    slug: "fahren-and-its-dynasty",
    title: "fahren & its Dynasty",
    subtitle: "The family tree reading — with the ablauf forms fuhr and gefahren",
    phase: 3,
    shift_categories: ["strong_verbs_ablaut"],
    word_ids: ["fahren", "fahrt", "zug", "aus", "morgen", "gestern"],
    table_word_ids: ["fahren", "fahrt", "zug", "gestern"],
    hook: {
      title: "The Tree, Read Aloud",
      content:
        "Yesterday I traveled to Berlin: Ich bin gestern nach Berlin gefahren. The journey took an hour: Die Fahrt hat eine Stunde gedauert? — keep it Perfekt-light: Die Fahrt war kurz. I drove? no car — I rode the train: Ich bin mit dem Zug gefahren. The train departed at eight: Der Zug ist um acht abgefahren. Notice the dynasty working: fahren (the verb), gefahren (its participle), die Fahrt (the journey-noun), abgefahren (departed — the separable prefix rides ON the participle!). One root carries the whole travel story.",
      footnotes: [
        {
          marker: "1",
          title: "Prefixes Ride on Participles",
          content:
            "Separable verbs form their participle with the prefix glued back on: abfahren → abgefahren (NOT ge-abfahrt). The ge- goes between prefix and stem: an+ge+kommen, auf+ge+standen. The prefix always wins first position.",
        },
      ],
    },
    pattern: {
      title: "The Travel Story Machine",
      content:
        "The forms: fahren, fuhr, gefahren ↔ fare, fared. The Perfekt with sein: Ich bin gefahren (motion — no object), Ich habe das Auto gefahren (object — haben). The noun: die Fahrt (the journey), die Abfahrt (the departure), die Autofahrt? coin it yourself — the compound law from topic 21 still works. The separable: abfahren, ist abgefahren; ausfahren? skip — two is plenty. Reading plan: any German travel sentence is fahren + a preposition (nach + city, mit + vehicle) + a time word. You can now build all three parts.",
      footnotes: [],
      linguist_note:
        "Ich bin mit dem Zug gefahren — three systems in seven words: sein for motion, mit + dative (the mid-preposition!), and fahren's ablaut in the participle. The dynasty is the curriculum in miniature.",
    },
    exercises: [
      {
        id: "l2801_e1",
        type: "matching_pairs",
        prompt: "The dynasty in Perfekt — match each form with its meaning:",
        matching_pairs: [
          { id: "fd1", english: "I traveled (to Berlin)", german: "Ich bin nach Berlin gefahren" },
          { id: "fd2", english: "The train departed", german: "Der Zug ist abgefahren" },
          { id: "fd3", english: "The journey was short", german: "Die Fahrt war kurz" },
          { id: "fd4", english: "I drove the car", german: "Ich habe das Auto gefahren" },
        ],
        target_answer: "Ich bin nach Berlin gefahren, Der Zug ist abgefahren, Die Fahrt war kurz, Ich habe das Auto gefahren",
        meaning: "the fahren dynasty in action",
        explanation: "Motion → sein; object → haben; the prefix rides the participle: ab-ge-fahren.",
      },
      {
        id: "l2801_e2",
        type: "shift_select",
        prompt: "Why 'Ich BIN gefahren' but 'Ich HABE das Auto gefahren'?",
        options: [
          "Motion alone takes sein; a driven object brings haben back",
          "fahren takes both randomly",
          "Bin is for trains only",
          "Habe is more polite",
        ],
        target_answer: "Motion alone takes sein; a driven object brings haben back",
        meaning: "The auxiliary flips with transitivity",
        explanation: "No object → sein (you moved). Object (das Auto) → haben (you did something to it). The choice gym's rule, alive in one verb.",
      },
      {
        id: "l2801_e3",
        type: "derive",
        prompt: "Participle check: 'Der Zug ist um acht _____. ' (departed — abfahren):",
        english_hint: "prefix + ge + stem + t? no — prefix + ge + fahren",
        target_answer: "abgefahren",
        meaning: "departed (abgefahren)",
        explanation: "ab + ge + fahren: the prefix takes first position, ge- slots inside, the ablaut stays.",
      },
      {
        id: "l2801_e4",
        type: "reverse_cognate",
        prompt: "What English word is the twin of 'Fahrt'?",
        target_answer: "fare",
        meaning: "fare ↔ Fahrt (fahren's noun)",
        explanation: "Both from *faraną: English kept 'fare' for payment and 'farewell'; German kept Fahrt for the journey itself.",
      },
      {
        id: "l2801_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'Yesterday I traveled to Berlin by train'",
        target_answer: "Gestern bin ich mit dem Zug nach Berlin gefahren",
        meaning: "Yesterday I traveled to Berlin by train",
        word_bank: ["Gestern", "bin", "ich", "mit", "dem", "Zug", "nach", "Berlin", "gefahren"],
        explanation: "Time (1), verb (2), subject (3), mit + dative, nach + city, participle last — the whole travel machine in one sentence.",
      },
    ],
    summary: {
      outcome: "Narrate travel with fahren's dynasty: bin gefahren, ist abgefahren, die Fahrt.",
      use_example: { german: "Gestern bin ich mit dem Zug nach Berlin gefahren.", english: "Yesterday I traveled to Berlin by train." },
      takeaway: "One root runs the railway: fahren/fuhr/gefahren, die Fahrt, abgefahren — motion takes sein, objects bring haben.",
      curiosity_teaser: "Next: ziehen & nehmen Dynasties — the tow/tug root and the nim root radiate too.",
    },
  },
  {
    id: 2901,
    slug: "ist-war-bin-being-cognates",
    title: "ist, war & bin: Being Cognates",
    subtitle: "The sein paradigm via cognates — and war/was drills closing the Perfekt loop",
    phase: 3,
    shift_categories: [],
    word_ids: ["sein", "was", "haben", "gut", "kalt", "morgen", "gestern", "leute", "himmel", "mensch", "hunger", "krank", "satt", "glücklich", "holen", "wieder"],
    table_word_ids: ["sein", "was", "haben", "gut", "kalt"],
    hook: {
      title: "The Fossil Bed",
      content:
        "The sein paradigm is three ancient verbs in a trench coat: *es- gives ist and sind; *bʰu- gives bin and bist; *wes- gives war and gewesen. English wears the same coat: is/are from *es-, be/am from *bʰu-, was/been from *wes-. ist ↔ is is letter-for-letter. war ↔ was is one letter apart. gewesen ↔ been — both the participle of the *wes- root. Today: drill the paradigm through its twins, and close the Perfekt loop — sein is not just the motion auxiliary from topic 18, it is the word war you need for storytelling.",
      footnotes: [
        {
          marker: "1",
          title: "The Simple Past Returns",
          content:
            "Perfekt replaced the spoken simple past for most verbs — but sein and haben keep their simple pasts in daily speech: ich war, ich hatte. Nobody says 'ich bin gewesen' for 'I was'. The two most common verbs are the fortress where the old past tense survives.",
        },
      ],
    },
    pattern: {
      title: "The Paradigm, Twin by Twin",
      content:
        "ich bin ↔ I am / I be. du bist ↔ thou art. er ist ↔ he is (letter for letter). wir sind ↔ we are (different branch, same verb). sie sind ↔ they are. And the past: ich war ↔ I was, du warst ↔ thou wast, er war ↔ he was. The Perfekt loop closes: Ich bin gewesen ↔ I have been; Ich bin gestern nach Berlin gefahren — sein doing motion duty. Sentence pattern for storytelling: Gestern war gut. Als Kind? untaught — keep it: Das Haus war alt. Der Kaffee war gut. war is the storyteller's tense for the copula — drill it until war/was feels like one word, because it is.",
      footnotes: [],
      linguist_note:
        "bist ↔ art is the oldest 2nd-person singular in either language — thou art and du bist are the same construction, with the -st ending you have drilled since the Shakespeare lesson and the b-root of 'be'.",
    },
    exercises: [
      {
        id: "l2901_e1",
        type: "matching_pairs",
        prompt: "The paradigm wall — match each sein-form with its twin:",
        matching_pairs: [
          { id: "bw1", english: "is", german: "ist" },
          { id: "bw2", english: "was", german: "war" },
          { id: "bw3", english: "thou art", german: "du bist" },
          { id: "bw4", english: "been", german: "gewesen" },
          { id: "bw5", english: "I am human (a person)", german: "ich bin ein Mensch" },
        ],
        target_answer: "ist, war, du bist, gewesen, ich bin ein Mensch",
        meaning: "is, was, thou art, been, I am a person",
        explanation: "Three roots, one verb, identical across the sea — the most conservative words in Germanic. der Mensch (human — the mannish kin) is sein's most frequent subject.",
      },
      {
        id: "l2901_e2",
        type: "shift_select",
        prompt: "Storytelling check: 'Gestern _____ alles gut.' (Yesterday everything WAS good):",
        options: ["war", "ist", "war's", "gewesen"],
        target_answer: "war",
        meaning: "Gestern war alles gut = Yesterday everything was good",
        explanation: "sein keeps its simple past in speech: war. The storyteller's tense — and war ↔ was, one letter apart. Die Leute (the people) tell it: Der Himmel war blau — every story opens with war.",
      },
      {
        id: "l2901_e3",
        type: "derive",
        prompt: "Thou-form: 'Du _____ dost? no — art.' Complete: 'Du _____ alt.' (you are old):",
        english_hint: "b + the Shakespearean -st",
        target_answer: "bist",
        meaning: "Du bist alt = you are old (thou art old)",
        explanation: "du bist ↔ thou art — the *bʰu- root wearing the -st you drilled in the Thou -st Circuit. The being-idioms: ich bin krank, satt, glücklich — ich habe Hunger — sein carries the feelings, haben carries the hunger.",
      },
      {
        id: "l2901_e4",
        type: "shift_select",
        prompt: "Close the Perfekt loop: which sentence uses sein for MOTION?",
        options: [
          "Ich bin nach Berlin gefahren",
          "Ich bin das Auto gefahren? — no: Ich habe das Auto gefahren",
          "Ich bin Kaffee getrunken",
          "Ich bin das Buch gelesen",
        ],
        target_answer: "Ich bin nach Berlin gefahren",
        meaning: "sein for motion, haben for objects — the loop closes",
        explanation: "The topic-18 choice gym, now with the sein paradigm fully in hand: motion → bin/ist/ist gefahren. holen is haben's — Wir haben wieder Brot geholt — fetch again, haben again.",
      },
      {
        id: "l2901_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'Yesterday was cold but today is good'",
        target_answer: "Gestern war kalt aber heute ist gut",
        meaning: "Yesterday was cold but today is good",
        vocab_hints: [
          {
            word: "aber",
            translation: "but",
            note: "no English twin — just the oldest coordinating word in the German toolbox",
          },
        ],
        word_bank: ["Gestern", "war", "kalt", "aber", "heute", "ist", "gut"],
        explanation: "war and ist in one sentence — the *wes- past and the *es- present, both twins, both daily.",
      },
    ],
    summary: {
      outcome: "Conjugate sein through its cognate twins and tell yesterday's story with war.",
      use_example: { german: "Gestern war kalt, aber heute ist gut.", english: "Yesterday was cold, but today is good." },
      takeaway: "ist↔is, war↔was, bist↔art — three roots shared across the sea, and war is the storyteller's tense.",
      curiosity_teaser: "Next: Wie geht's? — the greetings and small-talk idioms as archaic English survivals.",
    },
  },

  {
    id: 2802,
    slug: "ziehen-and-nehmen-dynasties",
    title: "ziehen & nehmen Dynasties",
    subtitle: "Zug/umziehen/ausziehen; nehmen/nimmt/genommen — radiate each root into its family",
    phase: 3,
    shift_categories: ["strong_verbs_ablaut", "t_to_s_ss_z"],
    word_ids: ["ziehen", "zug", "nehmen", "mitnehmen", "verstehen", "aufstehen", "holen", "wieder", "gewinnen", "schauen"],
    table_word_ids: ["ziehen", "zug", "nehmen", "mitnehmen"],
    hook: {
      title: "Two More Dynasties",
      content:
        "ziehen's family: der Zug (the pull — the train), der Aufzug (the up-pull — the elevator), der Umzug (the around-pull — moving house), umziehen (to move house), ausziehen (to move out), aufziehen (to raise). ziehen's English cousins are tow and tug — the train is named for pulling, just like the tugboat. nehmen's family: nehmen (take), nehmen's du/er forms nehmen? — du nimmst, er nimmt (the vowel mutates!), nehmen's past nahm, participle genommen, and the separable mitnehmen (take along — you have drilled it since topic 15). Two roots, a dozen words, and every suffix law you own on display.",
      footnotes: [
        {
          marker: "1",
          title: "nim in the Wild",
          content:
            "nehmen's true English twin is archaic nim 'to take' — which survives in nimble, 'quick to grasp'. English replaced nim with the Norse loan take; German never did. So nehmen/nimmst/genommen is the older English verb, still employed.",
        },
      ],
    },
    pattern: {
      title: "Radiate, Then Read",
      content:
        "The ziehen radiation: ziehen, zog, gezogen (the a→o→o melody with an -en participle). Der Zug (train/pull/draught/move — a chess move is ein Zug!). Umziehen: Ich ziehe nach Berlin um — separable, prefix last. Der Umzug ist teuer? untaught — keep it: Der Umzug ist morgen (the move is tomorrow). The nehmen radiation: nehmen, nimmst/nimmt, nahm, genommen. Mitnehmen: Ich nehme das Essen mit (takeaway food!). And the stand-family cross-check: verstehen/verstehen? — verstehen = understand, aufstehen = stand up — the same radiation English built with stand.",
      footnotes: [],
      linguist_note:
        "ziehen's -ogen participle (gezogen) marks it as a class-2 strong verb with an ancient -ug- suffix — the same class as English's lost 'towen'. The vowel melody a-o-o matches English's own old forms.",
    },
    exercises: [
      {
        id: "l2802_e1",
        type: "matching_pairs",
        prompt: "The ziehen dynasty — match each member with its meaning:",
        matching_pairs: [
          { id: "zd1", english: "the train (the pull)", german: "der Zug" },
          { id: "zd2", english: "the elevator (up-pull)", german: "der Aufzug" },
          { id: "zd3", english: "moving house (the around-pull)", german: "der Umzug" },
          { id: "zd4", english: "to move (house)", german: "umziehen" },
          { id: "zd5", english: "to fetch", german: "holen" },
        ],
        target_answer: "der Zug, der Aufzug, der Umzug, umziehen, holen",
        meaning: "the train, the elevator, moving house, to move, to fetch",
        explanation: "One pulling root runs the entire transport-and-moving vocabulary — the way English 'draw' runs drawer, withdraw, drawback. holen joins the household: fetch-and-carry, no twin needed.",
      },
      {
        id: "l2802_e2",
        type: "shift_select",
        prompt: "The mutation check: 'er _____' (nehmen, 3rd person present):",
        options: ["nimmt", "nehmt", "nimmt?", "nahm"],
        target_answer: "nimmt",
        meaning: "er nimmt = he takes",
        explanation: "nehmen mutates in du/er: nimmst/nimmt — the i-mutation law you met in geben → gibt. The past nahm is a different note. The journey verbs ride their own rails: aufstehen, mitnehmen, schauen — one trip in three words, und jeder gewinnt: everyone wins.",
      },
      {
        id: "l2802_e3",
        type: "derive",
        prompt: "Build the participle of 'nehmen' (the taken-family):",
        english_hint: "ge + nomm + en — the past vowel changes again",
        target_answer: "genommen",
        meaning: "taken",
        explanation: "nehmen, nahm, genommen — the vowel moves twice across the paradigm, exactly like come/came/come's family history.",
      },
      {
        id: "l2802_e4",
        type: "shift_select",
        prompt: "Which English words are ziehen's true cousins?",
        options: ["tow and tug — the pulling family", "two and twin", "take and taken", "ten and tug"],
        target_answer: "tow and tug — the pulling family",
        meaning: "ziehen ↔ tow/tug (the T→Z shift)",
        explanation: "*teuhaną gave English tow/tug and German ziehen/der Zug. The train, the tugboat, and the tow-truck are one family.",
      },
      {
        id: "l2802_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'He takes the food along' (mitnehmen!)",
        target_answer: "Er nimmt das Essen mit",
        meaning: "He takes the food along (to-go)",
        word_bank: ["Er", "nimmt", "das", "Essen", "mit"],
        explanation: "nehmen mutates (nimmt) AND the separable prefix flies to the end — two laws in four words. Das Essen mitnehmen is literally 'to-go'. Wieder (again — wider's twin) fits any dynasty: holen — to fetch — stacks with it, das Essen wieder holen.",
      },
    ],
    summary: {
      outcome: "Radiate ziehen and nehmen into their families with correct mutations and participles.",
      use_example: { german: "Er nimmt das Essen mit.", english: "He takes the food to-go (along)." },
      takeaway: "ziehen → Zug/Aufzug/Umzug (the tow/tug family); nehmen → nimmt/nahm/genommen (nim's living brother).",
      curiosity_teaser: "Next: sein, motion & the idiomatic mindset — ist↔is, war↔was, and Wie geht's = 'How goes it?'",
    },
  },
  {
    id: 2902,
    slug: "wie-gehts-how-goes-it",
    title: "Wie geht's? — How goes it?",
    subtitle: "Greetings and small-talk idioms as archaic English survivals",
    phase: 3,
    shift_categories: [],
    word_ids: ["sein", "gehen", "gut", "haben", "morgen", "danken", "schlecht", "fertig", "lustig", "hunger", "krank", "satt", "glücklich", "leute", "himmel", "mensch", "urlaub", "meer"],
    table_word_ids: ["gehen", "sein", "gut", "danken"],
    hook: {
      title: "The Frozen Sentences",
      content:
        "Germans greet each other in sentences English used to say. Wie geht's? = 'How goes it?' — the question your great-great-grandparents asked. Es geht mir gut = 'It goes to-me well' — the dative experiencer answering. Auf Wiedersehen = 'until re-seeing' — a farewell that refuses to be final (on the phone: Auf Wiederhören, 'until re-hearing'!). Guten Morgen = 'good morning' — word for word. And the small talk runs the same way: Was machst du? = 'What make you?' — no do-support, the archaic flip. German small talk is a museum of Early Modern English where all the exhibits still work.",
      footnotes: [
        {
          marker: "1",
          title: "Tschüss, the Sailor's Farewell",
          content:
            "The informal Tschüss has a wild history: Hanseatic sailors bent French adieu ('to God') into Low German adjüs, which wore down to Tschüss. The casual goodbye carries a thousand years of sea trade and a French blessing inside it.",
        },
      ],
    },
    pattern: {
      title: "The Small-Talk Shelf",
      content:
        "Greeting: Guten Morgen / Guten Tag / Guten Abend — the good-morning formula, word for word. Asking: Wie geht's? / Wie geht es dir? (how goes it TO YOU — the dative dir from topic 20). Answering: Es geht mir gut / schlecht (it goes to-me well/badly) or Danke, gut! Returning: Und dir? (and to-thee?). The dative feeling set joins in: Mir ist kalt (I am cold — to-me), Mir ist langweilig (I am bored — to-me it is boring). The farewell: Tschüss! (casual), Auf Wiedersehen (formal — until re-seeing). Every line is archaic English with German endings.",
      footnotes: [],
      linguist_note:
        "The 's in Wie geht's is a contraction of es: Wie geht es? → Wie geht's? English once made the identical contraction — 'how goes't?' appears in Shakespeare. The apostrophe is the same grammatical event.",
    },
    exercises: [
      {
        id: "l2902_e1",
        type: "matching_pairs",
        prompt: "The small-talk shelf — match each greeting with its literal reading:",
        matching_pairs: [
          { id: "wg1", english: "How goes it?", german: "Wie geht's?" },
          { id: "wg2", english: "It goes to-me well", german: "Es geht mir gut" },
          { id: "wg3", english: "Until re-seeing", german: "Auf Wiedersehen" },
          { id: "wg4", english: "Good day", german: "Guten Tag" },
          { id: "wg5", english: "It goes to-me badly", german: "Es geht mir schlecht" },
          { id: "wg6", english: "The people are funny", german: "Die Leute sind lustig" },
        ],
        target_answer: "Wie geht's?, Es geht mir gut, Auf Wiedersehen, Guten Tag, Es geht mir schlecht, Die Leute sind lustig",
        meaning: "how are you, I'm fine, goodbye, hello",
        explanation: "Every greeting is an English sentence your language retired — German still runs them daily.",
      },
      {
        id: "l2902_e2",
        type: "shift_select",
        prompt: "Why 'Es geht MIR gut' and not 'Es geht mich gut'?",
        options: [
          "The experiencer takes the dative — it goes well TO ME",
          "mich is a spelling error here",
          "gehen always takes accusative",
          "No reason — memorize it",
        ],
        target_answer: "The experiencer takes the dative — it goes well TO ME",
        meaning: "The dative of experience from topic 20",
        explanation: "Going-well happens TO you: mir. The same case as methinks and mir ist kalt. Bist du fertig? — fertig (ready, journey-fared) asks it with sein.",
      },
      {
        id: "l2902_e3",
        type: "shift_select",
        prompt: "On the phone, Germans say 'Auf Wiederhören'. Why hören?",
        options: [
          "Until re-HEARING — you hear, not see, on the phone",
          "It is a typo",
          "Hören means 'to call'",
          "It is Swiss dialect",
        ],
        target_answer: "Until re-HEARING — you hear, not see, on the phone",
        meaning: "Auf Wiederhören — the phone variant",
        explanation: "The farewell describes the exact sense in play: seeing in person, hearing on the phone. German calques reality.",
      },
      {
        id: "l2902_e4",
        type: "reverse_cognate",
        prompt: "Which Shakespearean phrase answers 'Wie geht es dir?' word for word?",
        target_answer: "how goes it",
        meaning: "How goes it? ↔ Wie geht es dir?",
        explanation: "Same question, same verb-first form — plus the dative dir (to-thee) English dropped. The answers fill the feeling fridge: glücklich, krank, satt, Hunger. Und der Himmel? — the small-talk weather report: der Himmel ist grau, aber der Mensch ist glücklich.",
      },
      {
        id: "l2902_e5",
        type: "syntax_builder",
        prompt: "Assemble a full small-talk exchange: 'How are you? — Thanks, good! And you?'",
        target_answer: "Wie geht's Danke gut und dir",
        meaning: "How goes it? — Thanks, well! And thee?",
        vocab_hints: [
          {
            word: "im Urlaub",
            translation: "on holiday / vacation",
            note: "im Urlaub — the question small talk always reaches for: Wie war der Urlaub am Meer? How was the holiday at the sea? The Urlaub is the reason you two are talking at all.",
          },
        ],
        word_bank: ["Wie", "geht's", "Danke", "gut", "und", "dir"],
        explanation: "The whole dance in six words: the dative question, the dative thanks, the dative return — Und dir? (and to-thee?). Then the follow-up every German small talk turns to: Wie war der Urlaub? — how was the holiday?",
      },
    ],
    summary: {
      outcome: "Run a full German small-talk exchange and hear the archaic English inside it.",
      use_example: { german: "Wie geht's? — Danke, gut! Und dir?", english: "How goes it? — Thanks, well! And thee?" },
      takeaway: "The greetings are frozen English sentences: How goes it, until re-seeing, good day — with the dative doing the pointing.",
      curiosity_teaser: "Next: Mir ist kalt — the dative feelings: cold, boredom, and sorrow all happen TO you.",
    },
  },
  {
    id: 2903,
    slug: "mir-ist-kalt-dative-feelings",
    title: "Mir ist kalt: Dative Feelings",
    subtitle: "Dative-experiencer expressions — twelve drills for cold, bored, and sorry",
    phase: 3,
    shift_categories: [],
    word_ids: ["mir", "dir", "ihm", "sein", "kalt", "gut", "tun", "übel", "schlecht", "fertig", "lustig", "leute", "himmel", "mensch", "meer", "urlaub"],
    table_word_ids: ["mir", "dir", "ihm", "kalt", "sein"],
    hook: {
      title: "Feelings Happen To You",
      content:
        "English says I AM cold. German says it is cold TO ME: Mir ist kalt. I am bored? — Mir ist langweilig (to-me it is boring). I am sorry? — Es tut mir leid (it does me sorrow). The pattern is ancient: the experiencer is a receiver, not an actor — feelings arrive, they are not performed. English used to agree: methinks, 'me seems', 'it grieves me'. German kept the whole grammar of being-affected: mir, dir, ihm — and twelve expressions you will use every week.",
      footnotes: [
        {
          marker: "1",
          title: "The Weather Is Also Dative",
          content:
            "Notice what is really cold: ES ist kalt — 'it', the impersonal subject. The German sentence has no 'I' as subject at all: Es (the situation) ist (is) mir (to-me) kalt (cold). You are not the cold thing; you are the one the cold happens to. Exactly like methinks: it thinks itself to me.",
        },
      ],
    },
    pattern: {
      title: "The Feeling Fridge",
      content:
        "Temperature: Mir ist kalt / warm / heiß (to-me it is cold/warm/hot). States: Mir ist langweilig (bored), Mir ist schlecht (I feel sick), Mir ist schwindlig (dizzy — hint), Mir ist es? — plain: Mir ist gut? rare — 'es geht mir gut' covers well-being. Sorrow: Es tut mir leid (it does me sorrow — I am sorry), Es tut mir nicht leid? negate later. Recipient: Das tut mir weh (that does me pain — that hurts). Grammar recipe: [Es] + ist/tut + [dative pronoun] + [the feeling]. Swap mir for dir/ihm and you can diagnose anyone: Ist dir kalt? (are YOU cold — to-thee?).",
      footnotes: [],
      linguist_note:
        "These are the same dative-experiencer constructions English kept only in fossils ('me seems', 'it grieves me to say'). German's everyday emotional vocabulary is grammatically archaic English — and fully alive.",
    },
    exercises: [
      {
        id: "l2903_e1",
        type: "matching_pairs",
        prompt: "The feeling fridge — match each expression with its literal reading:",
        matching_pairs: [
          { id: "mk1", english: "It is cold to me (I'm cold)", german: "Mir ist kalt" },
          { id: "mk2", english: "It is boring to me (I'm bored)", german: "Mir ist langweilig" },
          { id: "mk3", english: "It does me sorrow (I'm sorry)", german: "Es tut mir leid" },
          { id: "mk4", english: "It does me pain (that hurts)", german: "Das tut mir weh" },
          { id: "mk5", english: "It is unwell to me (I feel sick)", german: "Mir ist übel" },
        ],
        target_answer: "Mir ist kalt, Mir ist langweilig, Es tut mir leid, Das tut mir weh, Mir ist übel",
        meaning: "it is cold to me, it is boring to me, it does me sorrow, it does me pain, I feel sick",
        explanation: "Feelings arrive at the dative — you are the receiver, never the performer. übel is the oldest of the lot: evil, unwell.",
      },
      {
        id: "l2903_e2",
        type: "shift_select",
        prompt: "Diagnose a friend: 'Ist _____ kalt?' (Are YOU cold — to-thee?):",
        options: ["dir", "dich", "du", "dein"],
        target_answer: "dir",
        meaning: "Ist dir kalt? = Are you cold (is it cold to-thee)?",
        explanation: "The experiencer dative swaps with the person: mir → dir → ihm. dich would make you the object — nobody 'coldens' you. The dative judges state: mir ist schlecht, mir ist lustig — Bist du fertig? stays sein's.",
      },
      {
        id: "l2903_e3",
        type: "shift_select",
        prompt: "'Es tut mir leid' — which ancient verb hides in 'tut'?",
        options: ["do (tun ↔ do — 'it does me sorrow')", "good", "guilt", "dare"],
        target_answer: "do (tun ↔ do — 'it does me sorrow')",
        meaning: "tun ↔ do: the oldest verb twin",
        explanation: "The apology is an English sentence: 'it does me sorrow'. The do-support English invented — this is the same verb.",
      },
      {
        id: "l2903_e4",
        type: "derive",
        prompt: "Swap the experiencer: 'Mir ist kalt' for him (TO HIM it is cold):",
        english_hint: "the dative of er",
        target_answer: "ihm",
        meaning: "Ihm ist kalt = He is cold (to-him it is cold)",
        explanation: "Ihm — the dative of er, the twin of English 'give it him'. Feelings transfer person to person with one word. Der Mensch is the experiencer, die Leute the crowd, der Himmel the ceiling — the whole dative cast.",
      },
      {
        id: "l2903_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'I am sorry, but it is boring'",
        target_answer: "Es tut mir leid aber es ist langweilig",
        meaning: "I am sorry, but it is boring",
        vocab_hints: [
          {
            word: "am Meer",
            translation: "at the sea",
            note: "am Meer — the place the wind comes from, and the place the Urlaub goes: Am Meer ist mir kalt, im Urlaub ist mir gut.",
          },
        ],
        word_bank: ["Es", "tut", "mir", "leid", "aber", "es", "ist", "langweilig"],
        explanation: "Two experiencer frames in one sentence — tut mir leid (it does me sorrow) and ist langweilig (it is boring to-me, mir implied). Add the place and the same frame covers the coast: Am Meer ist mir kalt — at the sea it is cold to me; im Urlaub ist mir gut — on holiday it goes well for me.",
      },
    ],
    summary: {
      outcome: "Use the dative-experiencer expressions for cold, bored, sorry, and hurt.",
      use_example: { german: "Es tut mir leid, aber mir ist kalt.", english: "I'm sorry, but I'm cold." },
      takeaway: "Feelings happen TO you: mir ist kalt/langweilig, es tut mir leid — the methinks grammar, alive and daily.",
      curiosity_teaser: "Next: the Capstone sprigs — the full Berlin reading with tap-to-inspect words and the whole-trail review game.",
    },
  },

  {
    id: 3001,
    slug: "a-day-in-berlin-reading",
    title: "A Day in Berlin: Reading",
    subtitle: "The full capstone passage — every word tap-to-inspectable, every shift annotated",
    phase: 3,
    shift_categories: [],
    word_ids: ["mann", "frau", "kind", "zug", "fahrt", "brot", "wasser", "buch", "haus", "nacht", "morgen", "gestern", "heute", "kaufen", "gut", "kalt"],
    table_word_ids: ["zug", "fahrt", "brot", "nacht", "morgen", "gut"],
    hook: {
      title: "The Whole Passage",
      content:
        "Ein Tag in Berlin. Gestern waren der Mann und die Frau in der Stadt. Sie sind mit dem Zug gefahren — die Fahrt war kurz. In der Stadt haben sie Brot und Wasser gekauft, und das Brot war gut. Der Mann hat ein Buch gefunden — ein Buch über Berlin! Am Abend haben sie das Buch gelesen. Das Licht war warm, die Nacht war still. Heute trinken sie Kaffee im Haus. Mir ist kalt, sagt die Frau, aber es geht mir gut. Es gibt keinen besseren Morgen.",
      footnotes: [
        {
          marker: "1",
          title: "The Annotated Word Count",
          content:
            "Roughly seventy words — and every single one has appeared in a lesson table or hint. The construction inventory: Perfekt brackets (haben gekauft/gelesen/gefunden), sein-perfects (sind gefahren), the simple past of sein (waren), dative receivers (mir), two-way prepositions (im Haus), a compound (impossible here — but Morgen/Brot carry their shifts), and a subordinate-free V2 spine throughout.",
        },
      ],
    },
    pattern: {
      title: "Read It Three Ways",
      content:
        "Pass one — story: who did what, in order. Pass two — machinery: mark every verb position (V2 walls, bracket closures), every case flag (dem, der, mir), every umlaut. Pass three — production: cover the German, rebuild each sentence aloud from the English, then check. The passage is deliberately small: density is the test, not length. If you can rebuild 'Sie sind mit dem Zug gefahren' — sein for motion, mit + dative, nach-less city, participle last — you can build thousands of sentences no lesson ever taught you.",
      footnotes: [],
      linguist_note:
        "Notice the passage never uses the simple past except with war — because that is how spoken German actually works. The Perfekt brackets are the tense of real life; war is the fossil that survived.",
    },
    exercises: [
      {
        id: "l3001_e1",
        type: "matching_pairs",
        prompt: "Story order — match each beat with its line:",
        matching_pairs: [
          { id: "br1", english: "They traveled by train", german: "Sie sind mit dem Zug gefahren" },
          { id: "br2", english: "They bought bread and water", german: "Sie haben Brot und Wasser gekauft" },
          { id: "br3", english: "The man found a book about Berlin", german: "Der Mann hat ein Buch über Berlin gefunden" },
          { id: "br4", english: "They read the book in the evening", german: "Am Abend haben sie das Buch gelesen" },
        ],
        target_answer: "Sie sind mit dem Zug gefahren, Sie haben Brot und Wasser gekauft, Der Mann hat ein Buch über Berlin gefunden, Am Abend haben sie das Buch gelesen",
        meaning: "the four story beats",
        explanation: "Motion in sein-perfect, purchases in haben-perfect — the auxiliary logic running a real narrative.",
      },
      {
        id: "l3001_e2",
        type: "shift_select",
        prompt: "Decode pass: which shift explains 'Nacht' in 'die Nacht war still'?",
        options: ["gh → ch — night's ghost letters still sounding", "TH → D", "V → B", "T → Z"],
        target_answer: "gh → ch — night's ghost letters still sounding",
        meaning: "Nacht ↔ night — the Atlas ghost map",
        explanation: "The silent gh of night has been sounding in German for 1,300 years — and you can now hear it.",
      },
      {
        id: "l3001_e3",
        type: "shift_select",
        prompt: "Grammar pass: 'Mir ist kalt, aber es geht mir gut' — how many dative experiencers?",
        options: ["Two: mir ist kalt and es geht mir gut", "One", "None — mir is accusative", "Three"],
        target_answer: "Two: mir ist kalt and es geht mir gut",
        meaning: "The dative experiencer twice in one breath",
        explanation: "Cold happens TO her and the day goes TO her — the methinks grammar framing the story's feeling.",
      },
      {
        id: "l3001_e4",
        type: "reverse_cognate",
        prompt: "Production pass: which English word is 'kauf...' (in gekauft) hiding as a cousin?",
        target_answer: "cheap",
        meaning: "kaufen ↔ cheap (the Latin tradesman loan)",
        explanation: "Both from the Latin innkeeper/tradesman: English priced things cheap, German kept the verb kaufen.",
      },
      {
        id: "l3001_e5",
        type: "syntax_builder",
        prompt: "Rebuild the opening line: 'Yesterday the man and the woman were in the city'",
        target_answer: "Gestern waren der Mann und die Frau in der Stadt",
        meaning: "Yesterday the man and the woman were in the city",
        vocab_hints: [
          {
            word: "waren",
            translation: "were (war, plural)",
            note: "war ↔ was — the *wes- root, pluralized",
          },
          {
            word: "der Stadt",
            translation: "in the city (dative)",
            note: "in + dative for location: die Stadt → in der Stadt",
          },
        ],
        word_bank: ["Gestern", "waren", "der", "Mann", "und", "die", "Frau", "in", "der", "Stadt"],
        explanation: "Fronted time, plural waren, location dative (in der Stadt) — the opening sentence, rebuilt from parts you own.",
      },
    ],
    summary: {
      outcome: "Read, decode, and rebuild the full capstone passage.",
      use_example: { german: "Es gibt keinen besseren Morgen.", english: "There is no better morning." },
      takeaway: "Seventy words, every construction from the trail — the reading is the diploma.",
      curiosity_teaser: "Next: Trap Watch — the sixteen false friends, embedded in context sentences where they bite.",
    },
  },
  {
    id: 3002,
    slug: "trap-watch-false-friends",
    title: "Trap Watch: False Friends in the Wild",
    subtitle: "The sixteen curated traps, embedded in context sentences",
    phase: 3,
    shift_categories: [],
    word_ids: ["gift", "bekommen", "chef", "handy", "aktuell", "rat", "brav", "fast", "bald", "übel"],
    table_word_ids: ["gift", "bekommen", "chef", "rat", "fast", "bald"],
    hook: {
      title: "The Minefield, Mapped",
      content:
        "The compendium keeps sixteen false friends — words that look like English and mean something else. Now that you can read German, they are the last real danger, because your guard is down. das Gift is poison (the present is das Geschenk). bekommen is GET (become is werden). der Chef is the BOSS (the cook is der Koch). fast means ALMOST (quick is schnell). bald means SOON (hairless is kahl). der Rat is ADVICE (the rodent is die Ratte). Sixteen traps, sixteen context sentences, zero excuses after today.",
      footnotes: [
        {
          marker: "1",
          title: "Why False Friends Happen",
          content:
            "Sibling languages drift: Gift and gift both descend from 'a giving' — English kept the friendly branch, German the deadly dose (a 'gift' was once a dose of anything, including poison). False friends are true cognates with divergent stories — the drift is the history.",
        },
      ],
    },
    pattern: {
      title: "The Trap Walk",
      content:
        " das Handy is the MOBILE PHONE (a German 1990s coinage — 'the handy thing in your hand'). aktuell means CURRENT (actual is tatsächlich). brav means WELL-BEHAVED (brave is mutig). die Fabrik is the FACTORY (fabric is der Stoff). das Gymnasium is the ACADEMIC HIGH SCHOOL (the gym is die Turnhalle). die Rente is the PENSION (apartment rent is die Miete). der Dom is the CATHEDRAL (a dome is die Kuppel). die Art is KIND/TYPE (art is die Kunst). eventuell means POSSIBLY (eventually is schließlich). die Kaution is the SECURITY DEPOSIT (caution is die Vorsicht). Read each in a sentence, feel the bite, remember the antidote.",
      footnotes: [],
      linguist_note:
        "bekommen vs become is the deepest trap: both are be + come, but English drifted the compound to 'turn into' while German kept 'come by, receive'. The word histories are identical — only the journeys differ.",
    },
    exercises: [
      {
        id: "l3002_e1",
        type: "shift_select",
        prompt: "Trap one: 'Ich bekomme ein Paket.' What happens?",
        options: ["I GET a package", "I become a package", "I buy a package", "I return a package"],
        target_answer: "I GET a package",
        meaning: "bekommen = to get/receive",
        explanation: "The most famous trap in German: bekommen means receive. Becoming something is werden. And if the package were poison, you would say Mir ist übel — it goes badly with me.",
      },
      {
        id: "l3002_e2",
        type: "shift_select",
        prompt: "Trap two: 'Das Kind ist heute brav.' What did the child do?",
        options: ["Was well-behaved", "Was brave and fearless", "Ran fast", "Got a gift"],
        target_answer: "Was well-behaved",
        meaning: "brav = well-behaved, not brave",
        explanation: "brav means obedient/good — the fearless child is mutig. A braves Kind is every parent's dream, no courage required.",
      },
      {
        id: "l3002_e3",
        type: "shift_select",
        prompt: "Trap three: 'Ich bin fast fertig.' How far along are you?",
        options: ["ALMOST done — fast means nearly", "Completely done", "Quickly done", "Not done at all"],
        target_answer: "ALMOST done — fast means nearly",
        meaning: "fast = almost (quick is schnell)",
        explanation: "fast da = almost there. Speed is schnell — another shift-family word you already own.",
      },
      {
        id: "l3002_e4",
        type: "shift_select",
        prompt: "Trap four: 'Bis bald!' What are you promising?",
        options: ["See you SOON — bald means soon", "See you hairless", "See you eventually (maybe)", "See you at the cathedral"],
        target_answer: "See you SOON — bald means soon",
        meaning: "bald = soon",
        explanation: "Bis bald = until soon. The hairless word is kahl. And eventuell means 'possibly' — eventually is schließlich.",
      },
      {
        id: "l3002_e5",
        type: "syntax_builder",
        prompt: "Assemble the safe sentence: 'I am getting a gift for the child' (das Geschenk, not das Gift!)",
        target_answer: "Ich bekomme ein Geschenk für das Kind",
        meaning: "I am getting a present for the child",
        vocab_hints: [
          {
            word: "für",
            translation: "for",
            note: "governs the accusative — für das Kind (kind = das Kind here, the child)",
          },
          {
            word: "das Geschenk",
            translation: "the present",
            note: "the SAFE gift — das Gift is poison!",
          },
        ],
        word_bank: ["Ich", "bekomme", "ein", "Geschenk", "für", "das", "Kind"],
        explanation: "Two traps dodged in one sentence: bekomme (get, not become) and Geschenk (present, not poison).",
      },
    ],
    summary: {
      outcome: "Identify all sixteen false friends in context and reach for the antidotes.",
      use_example: { german: "Ich bekomme ein Geschenk.", english: "I am getting a present (not becoming one — and not a poison!)." },
      takeaway: "False friends are true cognates with divergent stories — Gift/Gift, bekommen/become: know the drift, dodge the trap.",
      curiosity_teaser: "Next: the Whole-Trail Review Game — thirty topics, mixed modes, one last sprint.",
    },
  },
  {
    id: 3003,
    slug: "whole-trail-review-game",
    title: "The Whole-Trail Review Game",
    subtitle: "Thirty topics, mixed modes, one final synthesis sprint",
    phase: 3,
    shift_categories: [],
    word_ids: ["sein", "haben", "können", "wollen", "müssen", "geben", "nehmen", "kommen", "gehen", "sagen", "nacht", "morgen", "zug", "buch", "haus", "kind"],
    table_word_ids: ["sein", "haben", "geben", "nehmen", "sagen", "nacht"],
    hook: {
      title: "The Full Court",
      content:
        "Everything you own, on the table at once: the shifts (PF-, TH-, T-, K-, D-, V-, GH-, Y-), the brackets, the cases, the ablaut melodies, the compounds, the idioms. This game mixes every exercise type across every topic — no labels, no warm-up, the real test of reflex. A flawless run earns the purple star; a missed question feeds the retry queue until the reflex is permanent. After this, the hollow shells you have not visited are pure bonus — the spine is yours.",
      footnotes: [
        {
          marker: "1",
          title: "How to Keep It",
          content:
            "The Review Hub decks (words, compounds, false friends, insights) run spaced repetition on everything you have met. The trail taught the system; the Review Hub keeps it — thirty minutes a week keeps the whole engine warm.",
        },
      ],
    },
    pattern: {
      title: "Mixed Rapid Fire",
      content:
        "Round one — shifts: tief? tief/deep (D→T+P→F), Nacht/night (gh→ch), sagen/say (y→g), geben/give (v→b). Round two — grammar: den/einen/ihn, mir/dir/ihm, weil/dass basements, V2 walls. Round three — verbs: singen/sang, denken/dachte, tun/tat? (hint — tat is tun's past), war/was. Round four — words: Zug/Zwilling/Zwerg, groß/ß-words, compounds. Round five — production: build sentences from prompts, no word bank. You have seen every item at least twice. This is the lap of honor, run at speed.",
      footnotes: [],
      linguist_note:
        "If you want one sentence to test the whole system: 'Gestern haben wir dem Kind ein großes Geschenk gegeben' — V2, Perfekt bracket, dative receiver, accusative gift, adjective ending, compound, and the geben dynasty in seven words.",
    },
    exercises: [
      {
        id: "l3003_e1",
        type: "matching_pairs",
        prompt: "Mixed round — match at full speed:",
        matching_pairs: [
          { id: "rg1", english: "deep (double shift)", german: "tief" },
          { id: "rg2", english: "said (y→g past)", german: "sagte" },
          { id: "rg3", english: "seven (v→b)", german: "sieben" },
          { id: "rg4", english: "took (nim's past)", german: "nahm" },
        ],
        target_answer: "tief, sagte, sieben, nahm",
        meaning: "deep, said, seven, took",
        explanation: "Four shift families in one round — the decode engine at full speed.",
      },
      {
        id: "l3003_e2",
        type: "shift_select",
        prompt: "Grammar gauntlet: 'Ich weiß, dass er mir das Buch _____.' (geben — participle? No — present, du/er form!):",
        options: ["gibt", "gab", "gegeben hat", "geben"],
        target_answer: "gibt",
        meaning: "...dass er mir das Buch gibt",
        explanation: "The dass-basement with a mutating verb: er gibt lands at the end, vowel mutated, dative mir inside.",
      },
      {
        id: "l3003_e3",
        type: "shift_select",
        prompt: "Culture round: 'Donnerstag, Mittwoch, Sonntag' — what system are these from?",
        options: [
          "The Germanic god-calendar, calqued from the Latin planetary week",
          "The French revolutionary calendar",
          "Random German names",
          "The Greek Olympics",
        ],
        target_answer: "The Germanic god-calendar, calqued from the Latin planetary week",
        meaning: "Thunder-day, mid-week, sun-day",
        explanation: "One pantheon, two calendars — and you know the story of every single day.",
      },
      {
        id: "l3003_e4",
        type: "reverse_cognate",
        prompt: "Final reverse: 'gestern' — which English word, one last time?",
        target_answer: "yesterday",
        meaning: "yesterday ↔ gestern (y→g)",
        explanation: "The trail's first lesson taught free will; this one ends with the y→g twins — the whole bridge in one word pair.",
      },
      {
        id: "l3003_e5",
        type: "syntax_builder",
        prompt: "The graduation sentence: 'Yesterday we gave the child a big present'",
        target_answer: "Gestern haben wir dem Kind ein großes Geschenk gegeben",
        meaning: "Yesterday we gave the child a big present",
        vocab_hints: [
          {
            word: "dem",
            translation: "the (dative — the receiver)",
            note: "das Kind → dem Kind: the receiver takes dative",
          },
          {
            word: "großes",
            translation: "big (neuter accusative adjective)",
            note: "ein großes Geschenk — the adjective waves the neuter flag",
          },
        ],
        word_bank: ["Gestern", "haben", "wir", "dem", "Kind", "ein", "großes", "Geschenk", "gegeben"],
        explanation: "V2, Perfekt bracket, dative receiver, accusative gift, adjective ending, the geben dynasty — the whole trail in one sentence. Willkommen auf der anderen Seite der Brücke.",
      },
    ],
    summary: {
      outcome: "Pass the whole-trail synthesis: shifts, grammar, verbs, words, production.",
      use_example: { german: "Gestern haben wir dem Kind ein großes Geschenk gegeben.", english: "Yesterday we gave the child a big present." },
      takeaway: "The trail is behind you: every shift, every case, every bracket — and the Review Hub keeps it warm.",
      curiosity_teaser: "You crossed the bridge. The Atlas, the Review Hub, and every hollow shell you skipped are waiting — but nothing here is locked anymore.",
    },
  },

  {
    id: 5011,
    slug: "du-sie-and-the-t-v-line",
    title: "du, Sie & the T–V Line",
    subtitle: "du ↔ thou, Sie ↔ they — the surviving T–V distinction English retired",
    phase: 1,
    shift_categories: ["th_to_d"],
    word_ids: ["du", "dir", "sollen", "haben", "sein", "herr"],
    table_word_ids: ["du", "dir", "sollen", "haben"],
    hook: {
      title: "English Used to Have This Choice",
      content:
        "English once had two words for 'you': thou (close, informal) and you (distant, respectful). Linguists call it the T–V distinction — from Latin tu and vos. German still runs the full system: du (informal, one person) and Sie (formal, always capitalized). And here is the twist: Sie IS they — formal address borrows the third-person plural, exactly as the royal 'we' borrows the first. Sie sind (you-are-formal) agrees like they are, not like you are. English threw away thou; German kept both words alive — and the choice still matters socially every single day.",
      footnotes: [
        {
          marker: "1",
          title: "The Quaker Fossil",
          content:
            "English's thou survived longest in Quaker speech — 'thee' and 'thou' as everyday address into the 20th century. German du survived everywhere, and even modern marketing calls its customers du (Du bist Deutschland). The informal pronoun never died on the continent.",
        },
      ],
    },
    pattern: {
      title: "The Social Switchboard",
      content:
        "du: friends, family, children, pets, God, classmates, colleagues after the offer — one person, informal, verb takes the -st you have drilled (du hast, du bist, du sollst — thou hast, thou art, thou shalt!). Sie: strangers, officials, elders, customers, everyone until offered otherwise — grammatically third-person PLURAL: Sie sind, Sie haben, Sie kommen ('they are/have/come', but meaning you-formal). The switch ritual: the senior or host offers — Wir können du sagen? — and the informal door opens. Dative twins: dir (to-thee, informal) vs Ihnen (to-you-formal, always capital-I).",
      footnotes: [],
      linguist_note:
        "The formal Sie is capitalized even in mid-sentence to distinguish it from sie ('she/they'). Dir ↔ thee and Ihnen ↔ ye/you-formal preserve the exact medieval etiquette ladder both languages once ran.",
    },
    exercises: [
      {
        id: "l5011_e1",
        type: "matching_pairs",
        prompt: "Match the T–V forms with their English twins:",
        matching_pairs: [
          { id: "tv1", english: "thou (informal)", german: "du" },
          { id: "tv2", english: "thee, to-thee (informal dative)", german: "dir" },
          { id: "tv3", english: "you-formal (grammatically 'they')", german: "Sie" },
          { id: "tv4", english: "to-you-formal", german: "Ihnen" },
        ],
        target_answer: "du, dir, Sie, Ihnen",
        meaning: "thou, to-thee, you-formal, to-you-formal",
        explanation: "The T–V ladder: du/dir for the close circle, Sie/Ihnen for the respectful distance — English retired it, German lives in it.",
      },
      {
        id: "l5011_e2",
        type: "shift_select",
        prompt: "Formal agreement check: 'Sie _____ Lehrer.' (You are a teacher — formal):",
        options: ["sind", "bist", "ist", "seid"],
        target_answer: "sind",
        meaning: "Sie sind Lehrer — formal 'you' agrees like 'they'",
        explanation: "Sie borrows the third-person PLURAL: Sie sind, never Sie bist. The respect is grammatical distance.",
      },
      {
        id: "l5011_e3",
        type: "shift_select",
        prompt: "Which sentence addresses a friend informally?",
        options: ["Du bist lustig", "Sie sind lustig", "Ihnen geht es gut", "Sie kommen morgen"],
        target_answer: "Du bist lustig",
        meaning: "Du bist lustig = you (thou) are funny",
        explanation: "du + bist: the informal address — thou art funny, with the -st ending doing its Shakespearean work.",
      },
      {
        id: "l5011_e4",
        type: "reverse_cognate",
        prompt: "What archaic English pronoun is the exact twin of 'du'?",
        target_answer: "thou",
        meaning: "thou ↔ du (the dental twin)",
        explanation: "TH → D: thou hardened into du. Same word, same ancient informality.",
      },
      {
        id: "l5011_e5",
        type: "syntax_builder",
        prompt: "Assemble the formal thank-you: 'I thank you (formal)'",
        target_answer: "Ich danke Ihnen",
        meaning: "I thank you (formal — to-you-formal)",
        word_bank: ["Ich", "danke", "Ihnen"],
        explanation: "Ihnen — capital I, formal dative. To a friend you would say Ich danke dir; to a stranger, Herr. The T–V line runs straight through the dative.",
      },
    ],
    summary: {
      outcome: "Choose du or Sie correctly and conjugate each with the right agreement.",
      use_example: { german: "Ich danke Ihnen. — Ich danke dir.", english: "Formal thanks — informal thanks." },
      takeaway: "du ↔ thou (informal), Sie ↔ they-as-formal (plural agreement), dir ↔ thee, Ihnen ↔ formal: the T–V line English retired.",
      curiosity_teaser: "Next: Greetings & Goodbyes Gym — the formulas in real dialogue switches.",
    },
  },
  {
    id: 5012,
    slug: "greetings-and-goodbyes-gym",
    title: "Greetings & Goodbyes Gym",
    subtitle: "Guten Tag, Hallo, Tschüss, Auf Wiedersehen — dialogue drills with the du/Sie switch",
    phase: 1,
    shift_categories: [],
    word_ids: ["tag", "morgen", "abend", "sehen", "gut"],
    table_word_ids: ["tag", "morgen", "sehen", "gut"],
    hook: {
      title: "The Social Scripts",
      content:
        "Greetings are whole sentences wearing costumes. Guten Tag = 'good day'. Auf Wiedersehen = 'until re-seeing' — a farewell that promises a next time. Tschüss = the sailor's Tschüss, bent from French adieu. Hallo is your own hello, borrowed back. And the dialogue runs on the dative you already own: Wie geht's? — Danke, gut! — Und Ihnen? (formal) / Und dir? (informal). Today you drill the scripts until the switch between formal and informal is automatic — because that switch is the first social test every German conversation gives you.",
      footnotes: [
        {
          marker: "1",
          title: "Moin, the North's Universal",
          content:
            "Northern Germany answers with Moin — morning, day, evening, it works around the clock. Etymologically unrelated to Morgen: it may come from Low German mooi ('nice'). One syllable, zero conjugation, total coverage.",
        },
      ],
    },
    pattern: {
      title: "The Scripts, Formal and Informal",
      content:
        "Formal script: Guten Tag! — Guten Tag! Wie geht es Ihnen? — Danke, gut, und Ihnen? — Auf Wiedersehen! Informal script: Hallo! / Morgen! — Wie geht's? — Danke, gut! Und dir? — Tschüss! / Bis bald! The pieces: Guten Morgen (before noon), Guten Abend (evening), Gute Nacht (bedtime — the ghost-map word!). The verbs: sehen (see — Wiedersehen), gehen (geht in wie geht's). Notice the case: Guten Tag is masculine ACCUSATIVE — 'I wish [you a] good day', the wish-object — and Gute Nacht is feminine: the article reports the gender of the noun.",
      footnotes: [],
      linguist_note:
        "Auf Wiedersehen parses as auf (until/on) + wieder (again) + sehen (see) — and wieder itself hides the Germanic *wiþrō, the same root as English 'with' in its original 'against/return' sense. The goodbye is a small etymology sandwich.",
    },
    exercises: [
      {
        id: "l5012_e1",
        type: "matching_pairs",
        prompt: "Match each greeting with its literal reading:",
        matching_pairs: [
          { id: "gg1", english: "good day", german: "Guten Tag" },
          { id: "gg2", english: "until re-seeing", german: "Auf Wiedersehen" },
          { id: "gg3", english: "good evening", german: "Guten Abend" },
          { id: "gg4", english: "good night (bedtime)", german: "Gute Nacht" },
        ],
        target_answer: "Guten Tag, Auf Wiedersehen, Guten Abend, Gute Nacht",
        meaning: "hello, formal goodbye, good evening, good night",
        explanation: "Guten Tag wishes a good day (masculine accusative); Gute Nacht is feminine — the article reports the noun's gender.",
      },
      {
        id: "l5012_e2",
        type: "shift_select",
        prompt: "You are leaving a shop. Which farewell is appropriate (formal)?",
        options: ["Auf Wiedersehen!", "Tschüss!", "Bis bald, Alter!", "Moin, du!"],
        target_answer: "Auf Wiedersehen!",
        meaning: "The formal farewell",
        explanation: "Shops and strangers run the Sie-line: Auf Wiedersehen. Tschüss is for the du-circle.",
      },
      {
        id: "l5012_e3",
        type: "shift_select",
        prompt: "Complete the informal exchange: 'Wie geht's? — Danke, gut! _____?'",
        options: ["Und dir?", "Und Sie?", "Und Ihnen?", "Und Sie sind?"],
        target_answer: "Und dir?",
        meaning: "And thee? — the informal return",
        explanation: "The dative return question mirrors the ask: dir after du-address, Ihnen after Sie.",
      },
      {
        id: "l5012_e4",
        type: "reverse_cognate",
        prompt: "Which part of 'Auf Wiedersehen' means SEE?",
        target_answer: "sehen",
        meaning: "sehen = to see (the Wieder-seen core)",
        explanation: "Wieder-sehen = re-see: the farewell literally says 'until [we] see [each other] again' — the same logic as French au revoir.",
      },
      {
        id: "l5012_e5",
        type: "syntax_builder",
        prompt: "Assemble the formal greeting exchange: 'Good day! How are you (formal)?'",
        target_answer: "Guten Tag wie geht es Ihnen",
        meaning: "Good day! How goes it to-you-formal?",
        word_bank: ["Guten", "Tag", "wie", "geht", "es", "Ihnen"],
        explanation: "The full formal opener: Guten Tag + the dative question — es geht ES Ihnen (to-you-formal), capital I.",
      },
    ],
    summary: {
      outcome: "Run both greeting scripts and switch register without hesitation.",
      use_example: { german: "Guten Tag! Wie geht es Ihnen? — Danke, gut!", english: "Good day! How are you? — Thanks, well!" },
      takeaway: "Greetings are sentences in costume: good-day, until-re-seeing — and the du/Sie switch decides dir vs Ihnen.",
      curiosity_teaser: "Next: Gift, Rat & Co. — the six highest-value false friends, in the wild.",
    },
  },
  {
    id: 5021,
    slug: "gift-rat-and-co",
    title: "Gift, Rat & Co.",
    subtitle: "The six highest-value false friends — contrastive recall drills",
    phase: 1,
    shift_categories: [],
    word_ids: ["gift", "bekommen", "chef", "rat", "fast", "bald", "herr", "fabrik", "gymnasium", "rente", "dom", "art", "kaution", "eventuell"],
    table_word_ids: ["gift", "bekommen", "chef", "rat", "fast", "bald"],
    hook: {
      title: "The Six Most Dangerous Words",
      content:
        "The full trap deck waits in the Review Hub, but six traps deserve early warning. das Gift = POISON (present: das Geschenk — and Gift really is gift's twin: both meant 'a giving', German kept the dose). bekommen = GET (become = werden). der Chef = BOSS (cook = der Koch). der Rat = ADVICE (rodent = die Ratte). fast = ALMOST (quick = schnell). bald = SOON (hairless = kahl). Each one is a true cognate that drifted — which is why the traps feel so natural. Drill the antidotes until the trap fires the correction automatically.",
      footnotes: [
        {
          marker: "1",
          title: "Rat and Read Are Twins",
          content:
            "der Rat (advice) and English 'read' are the same ancient verb — *rēdanō, 'to advise, to interpret'. A counselor was a reader of situations. So der Rat is not just a trap: it is a hidden cognate pair (Rat/read) wearing a false-friend costume (Rat/rat).",
        },
      ],
    },
    pattern: {
      title: "The Antidote Table",
      content:
        "Poison → das Gift; present → das Geschenk. Get → bekommen; become → werden. Boss → der Chef; cook → der Koch. Advice → der Rat; rodent → die Ratte. Almost → fast; quick → schnell. Soon → bald; hairless → kahl. The memory trick is the drift story: Gift once meant any administered dose (a gift can kill); bekommen is 'come by' (packages come by); bald was 'boldly soon' (*balþaz, kin to bold). Know the story and the trap disarms itself.",
      footnotes: [],
      linguist_note:
        "False friends cluster in high-frequency function words precisely because those words had time to drift. The rare words stayed put. Guard the small words hardest.",
    },
    exercises: [
      {
        id: "l5021_e1",
        type: "shift_select",
        prompt: "'Vorsicht, das ist Gift!' — what is the warning about?",
        options: ["Poison", "A present", "A rat", "A boss"],
        target_answer: "Poison",
        meaning: "das Gift = poison",
        explanation: "Vorsicht (caution!) + Gift = the poison warning. The present is das Geschenk.",
      },
      {
        id: "l5021_e2",
        type: "shift_select",
        prompt: "'Der Chef sagt: bald!' — what did the boss communicate?",
        options: ["Soon! (get it done soon)", "A rat is coming", "Almost!", "I am becoming the boss"],
        target_answer: "Soon! (get it done soon)",
        meaning: "der Chef (boss) + bald (soon)",
        explanation: "Two traps in one sentence: the boss (not cook) wants it soon (not hairless).",
      },
      {
        id: "l5021_e3",
        type: "matching_pairs",
        prompt: "Match each trap with its true meaning — and its antidote:",
        matching_pairs: [
          { id: "gr1", english: "to get (NOT to become)", german: "bekommen" },
          { id: "gr2", english: "advice (NOT the rodent)", german: "der Rat" },
          { id: "gr3", english: "almost (NOT quick)", german: "fast" },
          { id: "gr4", english: "boss (NOT the cook)", german: "der Chef" },
          { id: "gr5", english: "factory (NOT cloth)", german: "die Fabrik" },
          { id: "gr6", english: "grammar-school (NOT the gym)", german: "das Gymnasium" },
          { id: "gr7", english: "pension (NOT rent)", german: "die Rente" },
          { id: "gr8", english: "cathedral (NOT a dome)", german: "der Dom" },
        ],
        target_answer: "bekommen, der Rat, fast, der Chef, die Fabrik, das Gymnasium, die Rente, der Dom",
        meaning: "get, advice, almost, boss, factory, grammar-school, pension, cathedral",
        explanation: "Eight traps now — the antidotes: werden, die Ratte, schnell, der Koch, der Stoff, die Turnhalle, die Miete, die Kuppel.",
      },
      {
        id: "l5021_e4",
        type: "reverse_cognate",
        prompt: "Which everyday English verb is the HIDDEN twin of 'der Rat' (via *rēdanō, to advise)?",
        target_answer: "read",
        meaning: "read ↔ Rat (to advise/interpret)",
        explanation: "The counselor read the situation: Rat and read are one verb. The trap is a cognate in disguise. And eventuell means possibly, not eventually — that one is schließlich.",
      },
      {
        id: "l5021_e5",
        type: "syntax_builder",
        prompt: "Assemble the safe sentence: 'I am getting advice from the boss'",
        target_answer: "Ich bekomme Rat vom Chef",
        meaning: "I am getting advice from the boss",
        vocab_hints: [
          {
            word: "vom",
            translation: "from the (von + dem)",
            note: "vom = von + dem — the dative contraction",
          },
          {
            word: "Herr",
            translation: "Mister",
            note: "the honorific that fronts a surname — Herr Chef, or Herr Braun when no job title fits",
          },
          {
            word: "die Art",
            translation: "the kind / type",
            note: "die Art = KIND, not art — art is die Kunst",
          },
        ],
        word_bank: ["Ich", "bekomme", "Rat", "vom", "Chef"],
        explanation: "All three traps used CORRECTLY: bekomme (get), Rat (advice), Chef (boss) — the minefield, disarmed. Two more ride along in the bank notes: die Art is the kind, not the fine art, and die Kaution is the deposit you pay, while the caution shouted across a yard belongs to Herr.",
      },
    ],
    summary: {
      outcome: "Recall the six highest-value traps and their antidotes on sight.",
      use_example: { german: "Ich bekomme Rat vom Chef.", english: "I am getting advice from the boss." },
      takeaway: "Gift=poison (Geschenk=present), bekommen=get, Chef=boss, Rat=advice, fast=almost, bald=soon — drill the antidotes.",
      curiosity_teaser: "Next: ü, ö, ä — the three mouth positions English never taught you.",
    },
  },
  {
    id: 5031,
    slug: "umlaut-mouth-positions",
    title: "ü, ö, ä — Mouth Positions",
    subtitle: "Pronunciation clinic with minimal pairs — schon/schön, Bruder/Brüder",
    phase: 2,
    shift_categories: [],
    word_ids: ["bruder", "morgen", "zwölf", "schön", "öl", "tüte", "herr", "fabrik", "gymnasium", "rente", "dom", "art", "kaution", "eventuell"],
    table_word_ids: ["bruder", "morgen", "zwölf"],
    hook: {
      title: "Three Vowels English Skipped",
      content:
        "German has three front-rounded vowels English never kept: ü, ö, ä. The trick is mechanical, not magical: say the English vowel (e, o, a) and ROUND YOUR LIPS at the same time — say 'ee' with 'oo'-lips and you have ü. The minimal pairs prove the difference is meaning-level: schon (already) vs schön (beautiful) differ by one mouth position. Bruder (brother) vs Brüder (brothers) differ by umlaut — the plural dots you know from the i-mutation lesson are also a SOUND change. English once had these sounds (it kept them in French loanwords like 'curve' and 'rare'); German kept them native.",
      footnotes: [
        {
          marker: "1",
          title: "The Three Positions",
          content:
            "ü = say 'ee' with rounded lips (über — the V→B preposition!). ö = say 'ay' with rounded lips (schön, zwölf). ä = say 'eh' with slightly laxer tongue (Männer, Mädchen). ä is the easiest — many dialects merge it with plain e; ü and ö are the real work.",
        },
      ],
    },
    pattern: {
      title: "Minimal Pair Drills",
      content:
        "Pair one: schon (already — Schon gut! 'already fine') vs schön (beautiful — Schön! 'nice!'). Pair two: Bruder (brother) vs Brüder (brothers) — the umlaut you learned as spelling is this sound. Pair three: morgen (morning) vs Mörder (murderer — grim but unforgettable). Pair four: zwölf (twelve) — the ö inside the number you already count. Pair five: über (over) vs unter? — unter has none, but öl (oil) does. Drill the pairs aloud: the vowels are mouth POSITIONS, and your mouth can learn a position in an afternoon.",
      footnotes: [],
      linguist_note:
        "Front-rounded vowels are the Germanic umlaut made audible: historical i pulled the vowel forward AND English/German rounded what remained differently. English kept the roundness only in French loans (curve, urgent, purse) — the sounds exist in your mouth already, just unassigned.",
    },
    exercises: [
      {
        id: "l5031_e1",
        type: "shift_select",
        prompt: "Minimal pair: 'Das ist schön!' — what does the ö change from 'schon'?",
        options: ["schön = beautiful (schon = already)", "schön = already (schon = beautiful)", "They sound identical", "schön = soon"],
        target_answer: "schön = beautiful (schon = already)",
        meaning: "The ü/ö minimal pair with real meaning stakes",
        explanation: "One mouth position separates 'already' from 'beautiful' — say 'ay' with rounded lips for the ö.",
      },
      {
        id: "l5031_e2",
        type: "shift_select",
        prompt: "How do you make the ü sound?",
        options: [
          "Say 'ee' while rounding your lips like for 'oo'",
          "Say 'oo' normally",
          "Say 'ay' wide",
          "There is no ü in German",
        ],
        target_answer: "Say 'ee' while rounding your lips like for 'oo'",
        meaning: "The ü recipe",
        explanation: "Front tongue + rounded lips = ü. über, Tür, dünn — the vowel you have been reading all trail. Say the pair you meet in every shop: die Tüte, das Öl — the first held long, the second rounded long.",
      },
      {
        id: "l5031_e3",
        type: "matching_pairs",
        prompt: "Match each word with its umlaut story:",
        matching_pairs: [
          { id: "um3", english: "Brüder (with ü)", german: "the PLURAL of Bruder — umlaut as sound" },
          { id: "um4", english: "zwölf (with ö)", german: "twelve — the tw→zw number" },
          { id: "um5", english: "Männer (with ä)", german: "the PLURAL of Mann — the men-fossil" },
          { id: "um6", english: "schön (with ö)", german: "beautiful — the minimal-pair star" },
        ],
        target_answer: "the PLURAL of Bruder — umlaut as sound, twelve — the tw→zw number, the PLURAL of Mann — the men-fossil, beautiful — the minimal-pair star",
        meaning: "the four umlaut showcases",
        explanation: "The dots are not decoration — they are the vowel-pull you learned in the plurals lesson, made audible.",
      },
      {
        id: "l5031_e4",
        type: "shift_select",
        prompt: "Which word does NOT contain an umlaut vowel?",
        options: ["unter", "über", "zwölf", "Mädchen"],
        target_answer: "unter",
        meaning: "unter keeps its plain u",
        explanation: "über (ü), zwölf (ö), Mädchen (ä) — but unter is the plain twin of under, no dots. Same for Herr, and for the trap-deck nouns riding along on this page: die Fabrik, das Gymnasium, die Rente, der Dom, die Art, die Kaution, eventuell.",
      },
      {
        id: "l5031_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'My brother is twelve' (with the ü-recipe in my...)",
        target_answer: "Mein Bruder ist zwölf",
        meaning: "Mein Bruder ist zwölf = My brother is twelve",
        vocab_hints: [
          {
            word: "Mein",
            translation: "my",
            note: "mein ↔ mine — the possessive twin from the Article Grid",
          },
        ],
        word_bank: ["Mein", "Bruder", "ist", "zwölf"],
        explanation: "Three old friends, one sentence — and zwölf wears the ö you just learned to round.",
      },
    ],
    summary: {
      outcome: "Produce ü, ö, ä and distinguish the minimal pairs schon/schön, Bruder/Brüder.",
      use_example: { german: "Mein Bruder ist zwölf.", english: "My brother is twelve." },
      takeaway: "ü = 'ee' with round lips, ö = 'ay' with round lips, ä = lax 'eh' — the umlaut dots are sounds, not decorations.",
      curiosity_teaser: "Next: the Ablaut Hall of Fame — a guided tour of all seven strong verb classes.",
    },
  },

  {
    id: 5041,
    slug: "tour-of-the-7-strong-verb-classes",
    title: "Tour of the 7 Strong Verb Classes",
    subtitle: "Walk every ablaut class with two exemplar verbs — recognize class by vowel melody",
    phase: 3,
    shift_categories: ["strong_verbs_ablaut"],
    word_ids: ["singen", "trinken", "finden", "geben", "fahren", "schlafen", "ziehen", "sprechen", "kommen", "schreiben"],
    table_word_ids: ["singen", "trinken", "finden", "geben", "fahren", "schlafen"],
    hook: {
      title: "The Hall of Fame",
      content:
        "Proto-Germanic sorted its strong verbs into seven classes by vowel melody — and the numbering is still on the wall in every German grammar. You have met members of every class already; this tour hangs them in order. Class I: ei–ei–ie? German'sreiben-family — schreiben, schrieb. Class II: ziehen, zog. Class III: singen, sang, gesungen and finden, fand. Class IV: sprechen, sprach — the -n- verbs. Class V: geben, gab. Class VI: fahren, fuhr. Class VII: schlafen, schlief — the old reduplicating class that survives as a simple vowel change. Two exemplars each, and the hall is yours.",
      footnotes: [
        {
          marker: "1",
          title: "Class VII's Secret",
          content:
            "The seventh class was once the REDUPLICATING class — ancients said *lelōb 'they let'. German smoothed it to a vowel change (schlafen, schlief; fallen, fiel) with no consonant doubling. Gothic, the fossil language, still shows the reduplication: fai-falh 'hid'. The hall's oldest room.",
        },
      ],
    },
    pattern: {
      title: "The Seven Rooms",
      content:
        "Room I (ei–ei–ie): schreiben, schrieb, geschrieben ↔ describe, described — the scribe family. Room II (ie–o–o): ziehen, zog, gezogen — the tow family. Room III (i–a–u): singen, sang, gesungen; trinken, trank; finden, fand, gefunden — the biggest room, with English sing/drink/find beside them. Room IV (e–a–o): sprechen, sprach, gesprochen; kommen? no — kommen is its own oddity (kam, gekommen); stehlen (steal — stahl!). Room V (e–a–e): geben, gab, gegeben; nehmen, nahm, genommen — the give/take room. Room VI (a–u–a): fahren, fuhr, gefahren — the fare family. Room VII (ä/au–ie): schlafen, schlief; fallen, fiel — the reduplicating relics. Walk it twice and the melodies stick.",
      footnotes: [],
      linguist_note:
        "The classes are defined by the PIE root syllable's structure (e/o ablaut + following consonant), which is why verbs that look unrelated share melodies: Germanic inherited the room assignments wholesale, and both languages redecorated independently.",
    },
    exercises: [
      {
        id: "l5041_e1",
        type: "matching_pairs",
        prompt: "Match each verb to its class melody:",
        matching_pairs: [
          { id: "sc1", english: "schreiben (Room I)", german: "schrieb / geschrieben" },
          { id: "sc2", english: "ziehen (Room II)", german: "zog / gezogen" },
          { id: "sc3", english: "sprechen (Room IV)", german: "sprach / gesprochen" },
          { id: "sc4", english: "schlafen (Room VII)", german: "schlief / geschlafen" },
        ],
        target_answer: "schrieb / geschrieben, zog / gezogen, sprach / gesprochen, schlief / geschlafen",
        meaning: "the four distinctive melodies",
        explanation: "ei–ie, ie–o–o, e–a–o, and the reduplicating relic — four of the seven rooms on one wall.",
      },
      {
        id: "l5041_e2",
        type: "shift_select",
        prompt: "A NEW verb: 'werfen' (to throw) goes 'warf, geworfen'. Which room does it live in?",
        options: [
          "Room III — the i–a–u room, with singen and trinken? no: e–a–o with sprechen",
          "Room III/IV melody: e–a–o like sprechen, sprach, gesprochen",
          "Room VI with fahren (u-past)",
          "No room — it is a weak verb",
        ],
        target_answer: "Room III/IV melody: e–a–o like sprechen, sprach, gesprochen",
        meaning: "werfen follows the e–a–o melody",
        explanation: "werfen, warf, geworfen — hear the melody and you know the room, even for verbs you have never studied. That is the hall's power.",
      },
      {
        id: "l5041_e3",
        type: "shift_select",
        prompt: "Which room holds the REDUPLICATING relic (once *le-lōb-style forms)?",
        options: ["Room VII — schlafen, schlief; fallen, fiel", "Room I — schreiben", "Room V — geben", "Room II — ziehen"],
        target_answer: "Room VII — schlafen, schlief; fallen, fiel",
        meaning: "The oldest room in the hall",
        explanation: "Class VII reduplicated its past in the ancient language; German smoothed it to a vowel change, Gothic kept the doubling.",
      },
      {
        id: "l5041_e4",
        type: "reverse_cognate",
        prompt: "Which English verb shares Room VI's melody with 'fahren, fuhr'?",
        target_answer: "fare",
        meaning: "fare/fared ↔ fahren/fuhr",
        explanation: "Same class, same root, same a–u slide — English and German filed it in the same room 2,000 years ago.",
      },
      {
        id: "l5041_e5",
        type: "syntax_builder",
        prompt: "Assemble with a Room III participle: 'We drank water and sang'",
        target_answer: "Wir haben Wasser getrunken und gesungen",
        meaning: "We drank water and sang",
        vocab_hints: [
          {
            word: "getrunken",
            translation: "drunk (participle)",
            note: "Room III: i–a–u — trinken, trank, getrunken",
          },
        ],
        word_bank: ["Wir", "haben", "Wasser", "getrunken", "und", "gesungen"],
        explanation: "Two Room III participles (getrunken, gesungen) chained behind one haben — the hall of fame, live.",
      },
    ],
    summary: {
      outcome: "Place any strong verb in its class by vowel melody and predict its forms.",
      use_example: { german: "Wir haben Wasser getrunken und gesungen.", english: "We drank water and sang." },
      takeaway: "Seven rooms, two exemplars each — hear the melody, know the class, predict the paradigm.",
      curiosity_teaser: "Next: Motion → Accusative, Location → Dative — the two-way preposition drill isle.",
    },
  },
  {
    id: 5051,
    slug: "motion-accusative-location-dative",
    title: "Motion → Accusative, Location → Dative",
    subtitle: "wohin?/wo? pair drills across an/auf/in/hinter/neben/über/unter/vor/zwischen",
    phase: 3,
    shift_categories: [],
    word_ids: ["in", "auf", "über", "unter", "vor", "hinter", "neben", "zwischen", "haus", "tisch"],
    table_word_ids: ["in", "auf", "über", "unter", "vor"],
    hook: {
      title: "The Isle",
      content:
        "Isolated for drilling: the nine two-way prepositions, one question, two cases. The set: an (at/on-edge), auf (on-surface), hinter (behind), in (in), neben (beside), über (over), unter (under), vor (in front of), zwischen (between). Ask wo? (where-at — location) → dative. Ask wohin? (where-to — motion) → accusative. Das Bild ist an der Wand (the picture hangs at the wall — dative). Ich hänge das Bild an die Wand (I hang it onto the wall — accusative). The picture never changed — only the question did.",
      footnotes: [
        {
          marker: "1",
          title: "an vs auf: the German Haunted Pair",
          content:
            "an = vertical attachment (an der Wand — on the wall's face), auf = horizontal surface (auf dem Tisch — on the table top). English 'on' covers both; German splits them. Book on table → auf; painting on wall → an. Memorize the pair as surface vs edge.",
        },
      ],
    },
    pattern: {
      title: "The Pair Drill",
      content:
        "Drill the pairs side by side: In die Stadt (into the city — motion) / in der Stadt (in the city — location). Auf den Tisch / auf dem Tisch. Unter den Tisch / unter dem Tisch. Vor das Haus / vor dem Haus. Hinter das Haus / hinter dem Haus. Neben den? — neben den Tisch / neben dem Tisch. Zwischen die? — zwischen die Bücher / zwischen den Büchern (zw-! your sibilant family). The motion verbs that trigger accusative: gehen, fahren, kommen, legen, stellen, hängen (hang-onto). The location verbs: sein, liegen, stehen, hängen (be-hanging).",
      footnotes: [],
      linguist_note:
        "The motion/location split is the last surviving trace of the Proto-Indo-European accusative of extent-of-motion — Greek and Latin showed it too. German kept the law fully armed; English kept only its verbs (lay/lie).",
    },
    exercises: [
      {
        id: "l5051_e1",
        type: "matching_pairs",
        prompt: "Match each scene with its case-logic:",
        matching_pairs: [
          { id: "tw1", english: "into the city (motion)", german: "in die Stadt" },
          { id: "tw2", english: "in the city (location)", german: "in der Stadt" },
          { id: "tw3", english: "onto the table (motion)", german: "auf den Tisch" },
          { id: "tw4", english: "on the table (location)", german: "auf dem Tisch" },
        ],
        target_answer: "in die Stadt, in der Stadt, auf den Tisch, auf dem Tisch",
        meaning: "the four-way pair drill",
        explanation: "Same preposition, same nouns — the question (wohin? or wo?) alone decides the case.",
      },
      {
        id: "l5051_e2",
        type: "shift_select",
        prompt: "'Ich hänge das Bild an _____ Wand.' (I hang the picture onto the wall — motion):",
        options: ["die (accusative — motion)", "der (dative — location)", "dem", "den"],
        target_answer: "die (accusative — motion)",
        meaning: "Ich hänge das Bild an die Wand",
        explanation: "hängen-onto is motion: wohin? → accusative (die Wand). The hanging picture AT REST would be an der Wand.",
      },
      {
        id: "l5051_e3",
        type: "shift_select",
        prompt: "Which verb is a LOCATION verb (dative trigger)?",
        options: ["stehen (to stand)", "stellen (to put-standing)", "legen (to lay)", "gehen (to go)"],
        target_answer: "stehen (to stand)",
        meaning: "The location verbs: sein, liegen, stehen, hängen-rest",
        explanation: "stellen/legen put things somewhere (motion → accusative); stehen/liegen describe what IS somewhere (dative).",
      },
      {
        id: "l5051_e4",
        type: "reverse_cognate",
        prompt: "What English preposition is the twin of 'zwischen' (between)?",
        target_answer: "between",
        meaning: "between ↔ zwischen (tw→zw + the -en pair)",
        explanation: "Both are 'two-one': between = by-twain, zwischen = zwi-schen. The tw→zw twins from topic 5, still counting two.",
      },
      {
        id: "l5051_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'The picture hangs on the wall' (at rest!)",
        target_answer: "Das Bild hängt an der Wand",
        meaning: "Das Bild hängt an der Wand = The picture hangs at the wall",
        vocab_hints: [
          {
            word: "hängt",
            translation: "hangs (at rest)",
            note: "hängen at rest = location → dative: an der Wand. 'Hanging onto' (motion) would take die.",
          },
        ],
        word_bank: ["Das", "Bild", "hängt", "an", "der", "Wand"],
        explanation: "hängt (rest) + an + der (dative) — the picture is AT the wall, not going to it. One verb, one case, one calm scene.",
      },
    ],
    summary: {
      outcome: "Run wo?/wohin? across all nine two-way prepositions and decline correctly.",
      use_example: { german: "Das Bild hängt an der Wand.", english: "The picture hangs on the wall." },
      takeaway: "Nine prepositions, one question: wohin? → accusative, wo? → dative — and an/auf split surface from edge.",
      curiosity_teaser: "Next: the Wechselpräpositionen Sentence Gym — twenty picture-prompt sentences switching cases.",
    },
  },
  {
    id: 5052,
    slug: "wechselpraepositionen-sentence-gym",
    title: "Wechselpräpositionen Sentence Gym",
    subtitle: "Twenty picture-prompt sentences switching cases by motion vs location",
    phase: 3,
    shift_categories: [],
    word_ids: ["in", "auf", "über", "unter", "vor", "hinter", "neben", "tisch", "haus", "glas", "wasser"],
    table_word_ids: ["in", "auf", "über", "unter", "glas"],
    hook: {
      title: "The Gym at Full Weight",
      content:
        "No more pairs — full sentences at speed. Each prompt is a scene: is anything moving across a boundary? Accusative. Is everything at rest? Dative. Ich stelle das Glas auf den Tisch (I put the glass onto the table — motion). Das Glas steht auf dem Tisch (the glass stands on the table — rest). Same glass, same table, two cases — and the verb is the tell: stellen (put) moves, stehen (stand) rests. Twenty reps, and the wechsel (switch) becomes reflex.",
      footnotes: [
        {
          marker: "1",
          title: "The Verb Is the Tell",
          content:
            "When unsure, check the verb: motion verbs (gehen, fahren, kommen, stellen, legen, hängen-onto, setzen) demand accusative after two-way prepositions. Rest verbs (sein, stehen, liegen, sitzen, hängen-rest) demand dative. The preposition only borrows the verb's case.",
        },
      ],
    },
    pattern: {
      title: "The Twenty Reps, Compressed",
      content:
        "Ich gehe in die Stadt / Ich bin in der Stadt. Wir fahren in die Berge? hint — Berge (mountains). Das Glas steht auf dem Tisch / Ich stelle das Glas auf den Tisch. Die Katze springt auf den Tisch / Die Katze schläft auf dem Sofa? hint — sofa. Vor das Haus (driving up to it) / vor dem Haus (parked). Hinter den Baum? hint — Baum (tree) / hinter dem Baum. Neben den Tisch / neben dem Tisch. Über die Straße (crossing) / über dem Haus (hovering). Setz dich? hint — setzen (sit-put) neben mich / Ich sitze neben dir — sitzen takes the DATIVE OF PERSON: sitz NEXT TO ME = setz dich neben mich, accusative mich for the moved body, dative dir for the location-frame. The gym is complete.",
      footnotes: [],
      linguist_note:
        "sich setzen (sit down) vs sitzen (be seated) is the motion/rest pair hidden inside reflexives — setzen moves the body (accusative: sich), sitzen describes the body at rest (location → dative frame). English 'sit/set' made the same distinction once.",
    },
    exercises: [
      {
        id: "l5052_e1",
        type: "shift_select",
        prompt: "'Ich stelle das Glas auf _____ Tisch.' (I PUT the glass — motion):",
        options: ["den (accusative)", "dem (dative)", "das", "der"],
        target_answer: "den (accusative)",
        meaning: "Ich stelle das Glas auf den Tisch",
        explanation: "stellen is a motion verb: the glass travels. wohin? → accusative.",
      },
      {
        id: "l5052_e2",
        type: "shift_select",
        prompt: "'Das Glas steht auf _____ Tisch.' (The glass STANDS — at rest):",
        options: ["dem (dative)", "den (accusative)", "die", "das"],
        target_answer: "dem (dative)",
        meaning: "Das Glas steht auf dem Tisch",
        explanation: "stehen is a rest verb: nothing moves. wo? → dative.",
      },
      {
        id: "l5052_e3",
        type: "matching_pairs",
        prompt: "Match each full sentence with its case logic:",
        matching_pairs: [
          { id: "wp1", english: "We drive through? no — INTO the city (motion)", german: "Wir fahren in die Stadt" },
          { id: "wp2", english: "We are in the city (rest)", german: "Wir sind in der Stadt" },
          { id: "wp3", english: "The cat jumps onto the table", german: "Die Katze springt auf den Tisch" },
          { id: "wp4", english: "The cat sleeps on the sofa", german: "Die Katze schläft auf dem Sofa" },
        ],
        target_answer: "Wir fahren in die Stadt, Wir sind in der Stadt, Die Katze springt auf den Tisch, Die Katze schläft auf dem Sofa",
        meaning: "motion vs rest, four scenes",
        explanation: "fahren/springt move (accusative); sind/schläft rest (dative) — the verb tells, the case obeys.",
      },
      {
        id: "l5052_e4",
        type: "derive",
        prompt: "Cross it: 'Wir gehen über _____ Straße.' (across the street — motion):",
        english_hint: "die Straße → accusative",
        target_answer: "die",
        meaning: "Wir gehen über die Straße",
        explanation: "gehen + über = crossing motion → accusative (die Straße). The hovering bird's über dem Haus was dative.",
      },
      {
        id: "l5052_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'I put the glass under the table' (motion!)",
        target_answer: "Ich stelle das Glas unter den Tisch",
        meaning: "I put the glass under the table",
        word_bank: ["Ich", "stelle", "das", "Glas", "unter", "den", "Tisch"],
        explanation: "stellen (motion) + unter + den (accusative) — the glass travels to its hiding place. Rest would be unter dem Tisch.",
      },
    ],
    summary: {
      outcome: "Switch cases by motion vs location in full sentences at speed.",
      use_example: { german: "Ich stelle das Glas unter den Tisch.", english: "I put the glass under the table." },
      takeaway: "The verb is the tell: motion verbs drag accusative, rest verbs sit in dative — twenty reps make it reflex.",
      curiosity_teaser: "The drill isle ends here — next branch: first introductions, the first words Germans actually speak.",
    },
  },

  {
    id: 1103,
    slug: "possessive-ladders",
    title: "Possessive Ladders",
    subtitle: "mein, dein, sein, ihr across the cases — with the KJV mine/thine rule",
    phase: 2,
    shift_categories: [],
    word_ids: ["mein", "dein", "haus", "zeit", "kind", "buch", "getränk", "tasse", "bett", "teller", "insel", "nebel", "baum"],
    table_word_ids: ["mein", "dein", "haus", "zeit", "kind"],
    hook: {
      title: "Mine, Thine, and the Ladder",
      content:
        "English ran a rule German still keeps: mine before vowels, my before consonants — 'mine eyes' but 'my house'. German never simplified: mein Haus, but meine Zeit, meinen Kaffee — the possessive declines like ein, every time. And the ladder climbs: mein (my), dein (thy — the exact thine-twin with th→d), sein (his), ihr (her), and the formal Ihr (your, capital — the Sie-companion). Each rung declines identically, so learn one ladder and you own them all.",
      footnotes: [
        {
          marker: "1",
          title: "The KJV Rule Is the German Rule",
          content:
            "'Mine eyes have seen' is not archaic decoration — it is the older Germanic system: full form before vowels, reduced before consonants. English kept the full form only before vowels (mine, thine) and then only poetically; German keeps the full declining form everywhere.",
        },
      ],
    },
    pattern: {
      title: "Climb the Ladder",
      content:
        "Rung one — neuter/masculine subjects: mein Haus, dein Haus, sein Haus, ihr Haus (no ending — the ein-family bare form). Rung two — feminine: meine Zeit, deine Zeit, seine Zeit, ihre Zeit (-e, like eine). Rung three — masculine accusative (the Him-Case!): meinen Kaffee, deinen Kaffee, seinen Kaffee, ihren Kaffee (-en, like einen). Rung four — formal: Ihr Haus, Ihre Zeit (capital I, same endings, Sie's twin). The endings never change across the ladder — only the rung does. Und du? Dein Kaffee ist fertig — your coffee is ready, thine, mit thine-umlaut alive.",
      footnotes: [],
      linguist_note:
        "dein ↔ thine is a perfect double: Proto-Germanic *þīnaz gave English thine (kept th) and German dein (hardened th → d). The possessive ladder is the T–V distinction with endings.",
    },
    exercises: [
      {
        id: "l1103_e1",
        type: "matching_pairs",
        prompt: "Match the ladder rungs with their English twins:",
        matching_pairs: [
          { id: "pl1", english: "my / mine", german: "mein" },
          { id: "pl2", english: "thy / thine", german: "dein" },
          { id: "pl3", english: "his", german: "sein" },
          { id: "pl4", english: "her", german: "ihr" },
          { id: "pl5", english: "my bed", german: "mein Bett" },
          { id: "pl6", english: "my plate", german: "mein Teller" },
        ],
        target_answer: "mein, dein, sein, ihr, mein Bett, mein Teller",
        meaning: "my, thy, his, her, my bed, my plate",
        explanation: "One ladder, four rungs — and dein is literally thine with the dental hardening. The bare rung (no ending) takes the room words with it: mein Bett, mein Teller.",
      },
      {
        id: "l1103_e2",
        type: "shift_select",
        prompt: "Feminine rung: 'Ich habe _____ Tasse.' (my — die Tasse):",
        options: ["meine", "mein", "meinen", "meiner"],
        target_answer: "meine",
        meaning: "Ich habe meine Tasse = I have my cup",
        explanation: "Feminine objects take -e, exactly like eine: meine Tasse, meine Insel — while der Baum and der Nebel would wait for the Him-Case (deinen Baum).",
      },
      {
        id: "l1103_e3",
        type: "shift_select",
        prompt: "Him-Case rung: 'Ich trinke _____ Kaffee.' (thy — masculine object):",
        options: ["deinen", "dein", "deine", "deiner"],
        target_answer: "deinen",
        meaning: "Ich trinke deinen Kaffee = I drink thy coffee",
        explanation: "dein copies ein all the way: masculine accusative -en — the Him-Case on the ladder.",
      },
      {
        id: "l1103_e4",
        type: "reverse_cognate",
        prompt: "What archaic English possessive is the twin of 'dein'?",
        target_answer: "thine",
        meaning: "thine ↔ dein (th → d)",
        explanation: "*þīnaz split into thine (English, th kept) and dein (German, th hardened). The KJV's thine is German's daily bread.",
      },
      {
        id: "l1103_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'That is thy drink' (the German way)",
        target_answer: "Das ist dein Getränk",
        meaning: "Das ist dein Getränk = That is thy drink",
        word_bank: ["Das", "ist", "dein", "Getränk", "Tasse"],
        explanation: "Getränk is neuter, so dein wears the bare form — no ending. das/that, ist/is, dein/thine — and the drink-word is built on trinken (drink ↔ trinken, d → t).",
      },
    ],
    summary: {
      outcome: "Decline mein, dein, sein, ihr through all rungs of the ein-family ladder.",
      use_example: { german: "Das ist dein Getränk.", english: "That is thy drink." },
      takeaway: "The possessives climb one ladder with ein-endings: -∅, -e, -en — and dein is thine, th hardened to d.",
      curiosity_teaser: "Next: the nicht Position Map — where exactly the no-thing lands in the sentence.",
    },
  },
  {
    id: 1202,
    slug: "the-nicht-position-map",
    title: "The nicht Position Map",
    subtitle: "Where nicht lands in bracket sentences, with modals, and in subclauses",
    phase: 2,
    shift_categories: [],
    word_ids: ["nicht", "können", "müssen", "wollen", "haben", "sein", "gut", "kommen", "nie", "nichts", "niemand", "kurz", "laut", "leise", "billig", "getränk", "tasse"],
    table_word_ids: ["nicht", "können", "wollen", "haben", "sein"],
    hook: {
      title: "The No-Thing Has a Seat",
      content:
        "nicht is a word with a floor plan. Default seat: the END of a simple clause, where the action dies — Ich weiß es nicht. Second seat: directly BEFORE whatever you negate — Das ist nicht gut (not good), nicht heute (not today), nicht der Mann (not THE man — someone else). With modal brackets: nicht rides inside, right after the content — Ich kann nicht kommen. In subclauses: nicht sits before the verb that waits at the end — ..., weil ich nicht kommen kann. English just drops a 'not' anywhere; German gives nicht a map. Today you learn the map.",
      footnotes: [
        {
          marker: "1",
          title: "Sondern, the Correction Word",
          content:
            "When you negate and CORRECT, German uses sondern: Das ist nicht gut, sondern besser — 'not good, but better'. English 'but' does both jobs; German splits them (aber for plain contrast, sondern after a nicht). The no-thing has a partner.",
        },
      ],
    },
    pattern: {
      title: "The Floor Plan",
      content:
        "Zone one — clause end: Ich weiß es nicht. Ich komme morgen nicht. Zone two — before the target: nicht gut (not good), nicht morgen (not tomorrow — some OTHER day), nicht mein Haus (not MY house). Zone three — modal brackets: Ich kann nicht kommen (nicht between content and the closing infinitive... actually right after the modal's content — before the final verb). Zone four — subclauses: ..., dass ich nicht kommen kann — nicht before the basement verbs. Zone five — fixed pairs: nicht mehr (no longer), nicht nur... sondern auch (not only... but also). The rule of thumb: nicht negates what FOLLOWS it; if nothing follows, it negates the verb.",
      footnotes: [],
      linguist_note:
        "The placement is information structure, not grammar: 'Ich komme nicht morgen, sondern heute' negates the TIME; 'Nicht ich komme morgen' negates the SUBJECT. Move nicht, change the denial.",
    },
    exercises: [
      {
        id: "l1202_e1",
        type: "shift_select",
        prompt: "Default seat: 'Ich weiß es _____.' (I do not know it):",
        options: ["nicht", "kein", "nichts", "nichte"],
        target_answer: "nicht",
        meaning: "Ich weiß es nicht — the clause-end default",
        explanation: "Nothing follows to negate, so nicht negates the verb — the default seat at the end. (nichts — 'nothing' — is the noun-shaped cousin: Ich weiß nichts.)",
      },
      {
        id: "l1202_e2",
        type: "shift_select",
        prompt: "Target seat: 'Das ist nicht gut, sondern besser.' (not good, but better):",
        options: ["nicht", "kein", "nichts", "ohne"],
        target_answer: "nicht",
        meaning: "Das ist nicht gut — nicht directly before the adjective",
        explanation: "Adjectives take nicht right before them: nicht kurz, nicht laut, nicht leise, nicht billig. And sondern introduces the correction — besser is better's twin, waiting from the sibilant shift.",
      },
      {
        id: "l1202_e3",
        type: "shift_select",
        prompt: "Bracket zone: 'Ich kann _____ kommen.' (I cannot come):",
        options: ["nicht", "kein", "nichts", "keine"],
        target_answer: "nicht",
        meaning: "Ich kann nicht kommen",
        explanation: "Inside the modal bracket, nicht rides before the closing infinitive — negating the coming, not the can. Time has its own negator: nie (never) is the whole-clause no — Ich komme nie.",
      },
      {
        id: "l1202_e4",
        type: "derive",
        prompt: "Subclause zone: '..., weil ich nicht _____ kann.' (because I cannot COME):",
        english_hint: "kommen waits at the basement door",
        target_answer: "kommen",
        meaning: "..., weil ich nicht kommen kann = because I cannot come",
        explanation: "In the basement, nicht sits before the stacked verbs: nicht kommen kann — two verbs, one exit, nicht first.",
      },
      {
        id: "l1202_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'Nobody comes tomorrow'",
        target_answer: "Niemand kommt morgen",
        meaning: "Nobody comes tomorrow",
        word_bank: ["Niemand", "kommt", "morgen", "Tasse", "Getränk"],
        explanation: "Niemand is a subject like any other — it holds position 1, the verb keeps position 2, and the whole sentence negates itself without a single nicht.",
      },
    ],
    summary: {
      outcome: "Place nicht correctly across simple clauses, brackets, targets, and subclauses.",
      use_example: { german: "Ich kann heute nicht kommen.", english: "I cannot come today." },
      takeaway: "nicht negates what follows it — end of clause by default, before the target when there is one.",
      curiosity_teaser: "Next: asking questions — was, wo, wer, wann: the w-words are pure cognates, and German asks with zero do-support.",
    },
  },
  {
    id: 1403,
    slug: "zu-infinitive-ladders",
    title: "zu + Infinitive Ladders",
    subtitle: "Ich habe vor, Deutsch zu lernen — chaining zu-clauses onto main clauses",
    phase: 2,
    shift_categories: [],
    word_ids: ["zu", "vor", "haben", "wollen", "versuchen", "lernen", "wandern", "kommen"],
    table_word_ids: ["zu", "vor", "versuchen", "wollen", "lernen"],
    hook: {
      title: "The zu-Bracket",
      content:
        "Modal brackets take bare infinitives (Ich will lernen). But verbs like versuchen (try), vorhaben (plan — literally 'have before'), and vor haben constructions take the OTHER kind: zu + infinitive, slammed together at the end — Ich versuche, Deutsch zu lernen. Notice the rhyme: English 'to learn', German 'zu lernen' — to/zu are the twins from the sibilant shift! The zu-bracket is English's to-infinitive with German endings: glue zu onto the verb, park the whole thing at the sentence end, and the ladder builds itself.",
      footnotes: [
        {
          marker: "1",
          title: "Separable Verbs Wear zu Inside",
          content:
            "With separable verbs, zu slots between prefix and stem: aufzuhören (to stop — auf + zu + hören), umzuziehen (to move — um + zu + ziehen). The prefix wins first position even against zu — the flight path from topic 15 still rules.",
        },
      ],
    },
    pattern: {
      title: "Build the Ladder",
      content:
        "Step one — the trigger verbs: versuchen (Ich versuche, ...), vorhaben (Ich habe vor, ... — 'I have it before me, that...'), vergessen? no — vergessen takes bare: Ich vergesse zu kommen (I forget TO come — zu!). Step two — the comma: German writes it — Ich habe vor, Deutsch zu lernen. Step three — the tail: [zu + infinitive] closes the sentence, exactly where the participle and bare infinitive land: one sentence end, three possible cargoes (gelernt, lernen, zu lernen). Step four — chained ladders: Ich versuche, früh aufzustehen, Deutsch zu lernen und mehr zu lesen? — every rung wears its own zu.",
      footnotes: [],
      linguist_note:
        "zu and to are the same Proto-Germanic preposition (*tō) — English split it into to (infinitive) and too/to (preposition's descendants); German split it into zu (preposition + infinitive glue) and the sibilant-shifted zu you met in topic 5. The to-infinitive is a zu-infinitive wearing English clothes.",
    },
    exercises: [
      {
        id: "l1403_e1",
        type: "shift_select",
        prompt: "Which sentence uses the zu-bracket correctly?",
        options: [
          "Ich versuche, Deutsch zu lernen",
          "Ich versuche, Deutsch lernen",
          "Ich versuche zu Deutsch lernen",
          "Ich versuche Deutsch lernen zu",
        ],
        target_answer: "Ich versuche, Deutsch zu lernen",
        meaning: "I am trying to learn German",
        explanation: "Trigger verb + comma + contents + zu + infinitive at the end: the zu-glue closes the ladder.",
      },
      {
        id: "l1403_e2",
        type: "shift_select",
        prompt: "Why 'to learn' and 'zu lernen' feel like twins:",
        options: [
          "to and zu are the same ancient preposition (the sibilant shift split them)",
          "German borrowed 'to' from English",
          "Pure coincidence",
          "zu is the past of to",
        ],
        target_answer: "to and zu are the same ancient preposition (the sibilant shift split them)",
        meaning: "to ↔ zu: one preposition, two jobs",
        explanation: "Proto-Germanic *tō: English wore it as to, German hardened it to zu (T→Z). The to-infinitive is ancient shared kit.",
      },
      {
        id: "l1403_e3",
        type: "derive",
        prompt: "Glue it: 'Ich habe vor, morgen früh _____.' (zu + aufstehen — separable!):",
        english_hint: "prefix + zu + stem",
        target_answer: "aufzustehen",
        meaning: "Ich habe vor, morgen früh aufzustehen = I plan to get up early tomorrow",
        explanation: "Separable verbs wear zu INSIDE: auf + zu + stehen = aufzustehen. The prefix outranks the glue.",
      },
      {
        id: "l1403_e4",
        type: "shift_select",
        prompt: "Which verb takes a BARE infinitive (no zu) like a modal?",
        options: ["Ich will lernen", "Ich versuche zu lernen", "Ich habe vor zu lernen", "Ich vergesse zu lernen"],
        target_answer: "Ich will lernen",
        meaning: "Modals take bare infinitives; the zu-verbs take the glue",
        explanation: "wollen, können, müssen — bare. versuchen, vorhaben, vergessen, beginnen — zu. Two clubs, no overlap.",
      },
      {
        id: "l1403_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'I plan to come tomorrow'",
        target_answer: "Ich habe vor morgen zu kommen",
        meaning: "I plan (have-before) to come tomorrow",
        vocab_hints: [
          {
            word: "vor",
            translation: "before (fore-)",
            note: "vorhaben = 'have before/planned' — vor is the fore- twin",
          },
        ],
        word_bank: ["Ich", "habe", "vor", "morgen", "zu", "kommen"],
        explanation: "Ich habe vor (the split trigger verb!) + contents + zu kommen at the end — the ladder with a two-word opener.",
      },
    ],
    summary: {
      outcome: "Build zu-infinitive ladders, including separable verbs with internal zu.",
      use_example: { german: "Ich habe vor, morgen zu kommen.", english: "I plan to come tomorrow." },
      takeaway: "Trigger verb + comma + zu + infinitive at the end — the English to-infinitive with the zu-twin as glue.",
      curiosity_teaser: "Next: Phrasal Verb Mirrors — fifteen separable verbs matched to the phrasal verbs you own.",
    },
  },
  {
    id: 1501,
    slug: "phrasal-verb-mirrors",
    title: "Phrasal Verb Mirrors",
    subtitle: "Fifteen separable verbs matched to their phrasal twins",
    phase: 2,
    shift_categories: [],
    word_ids: ["aufwachen", "zurückkommen", "mitnehmen", "einschlafen", "aufstehen", "aufmachen", "zumachen", "anmachen", "aussuchen", "aussehen", "abmachen"],
    table_word_ids: ["aufwachen", "zurückkommen", "aufstehen", "einschlafen", "aussuchen", "aussehen"],
    hook: {
      title: "The Mirror Wall",
      content:
        "Fifteen frames on the mirror wall — every separable verb you own beside its phrasal twin. aufwachen / wake up. zurückkommen / come back. mitnehmen / take along. einschlafen / fall asleep. aufstehen / get up. aufmachen / open (up!). zumachen / shut (to-close!). anmachen / turn on. aussuchen / pick out. aussehen / look (outward!). abmachen / agree on (work it off!). English phrasal verbs are not random — they are the same spatial particles German glues on as prefixes. Learn the mirror, not the list.",
      footnotes: [
        {
          marker: "1",
          title: "The Particle Glossary",
          content:
            "auf = up (wake up, get up, open up). zurück = back (come back, give back). mit = along (take along, bring along). ein = in/into (fall asleep = fall INTO sleep!). aus = out (pick out, look out=appear). an = on (turn on). zu = to/shut (shut-to, like the old 'slam the door to'). ab = off (work off, take off). Eight particles, hundreds of verbs — both languages built from the same eight.",
        },
      ],
    },
    pattern: {
      title: "Walk the Wall",
      content:
        "The up-row: aufwachen/wake up, aufstehen/get up, aufmachen/open up. The back-row: zurückkommen/come back. The along-row: mitnehmen/take along. The in-row: einschlafen/fall asleep (literally fall INTO sleep). The out-row: aussuchen/pick out, aussehen/look (Du siehst gut aus — you look good OUT). The on-row: anmachen/turn on. The shut-row: zumachen/shut. The off-row: abmachen/agree (work it off — Das ist abgemacht! 'that is off-made' = deal!). Notice anmachen/aufmachen/zumachen all share machen — make — with the particle doing the meaning: German kept make and let the particle steer; English kept make and lost the system.",
      footnotes: [],
      linguist_note:
        "English phrasal verbs exploded after 1066 as the native alternative to French/Latin verbs — 'give up' instead of 'surrender'. German never needed the replacement, so its prefixed system stayed intact. The phrasal verbs are English re-Germanizing itself.",
    },
    exercises: [
      {
        id: "l1501_e1",
        type: "matching_pairs",
        prompt: "Mirror wall round one — match the pairs:",
        matching_pairs: [
          { id: "pv1", english: "turn on (the light)", german: "anmachen" },
          { id: "pv2", english: "shut (the door)", german: "zumachen" },
          { id: "pv3", english: "pick out (a book)", german: "aussuchen" },
          { id: "pv4", english: "agree on (a deal)", german: "abmachen" },
        ],
        target_answer: "anmachen, zumachen, aussuchen, abmachen",
        meaning: "turn on, shut, pick out, agree on",
        explanation: "an=on, zu=to/shut, aus=out, ab=off — the same particles as the English phrasal twins.",
      },
      {
        id: "l1501_e2",
        type: "shift_select",
        prompt: "Which particle means UP in German separable verbs?",
        options: ["auf", "zu", "ab", "mit"],
        target_answer: "auf",
        meaning: "auf = up (aufwachen, aufstehen, aufmachen)",
        explanation: "auf is up: wake up, get up, open up — the busiest particle in the mirror wall.",
      },
      {
        id: "l1501_e3",
        type: "shift_select",
        prompt: "'Du siehst gut aus' — what does 'aus' contribute?",
        options: [
          "The 'look' sense — you look good OUT (outward-facing appearance)",
          "It means 'off' — you look bad",
          "It is decorative",
          "It means 'also'",
        ],
        target_answer: "The 'look' sense — you look good OUT (outward-facing appearance)",
        meaning: "aussehen = to look (appear)",
        explanation: "aussehen = look-out: how you look OUTWARD. English 'outlook' kept the same architecture.",
      },
      {
        id: "l1501_e4",
        type: "reverse_cognate",
        prompt: "What English phrasal verb is the twin of 'einschlafen'?",
        target_answer: "fall asleep",
        meaning: "fall asleep ↔ einschlafen (fall INTO sleep)",
        explanation: "ein = into: einschlafen is 'fall-into-sleep'. English kept the image; German kept the prefix.",
      },
      {
        id: "l1501_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'The deal is agreed!' (abmachen, participle-style)",
        target_answer: "Das ist abgemacht",
        meaning: "Das ist abgemacht! = That is a deal (off-made)!",
        word_bank: ["Das", "ist", "abgemacht"],
        explanation: "abmachen's participle: ab + gemacht — the prefix rides the participle. 'It is off-made' — the deal is settled.",
      },
    ],
    summary: {
      outcome: "Match fifteen separable verbs to their phrasal twins by particle.",
      use_example: { german: "Das ist abgemacht!", english: "That's a deal!" },
      takeaway: "Eight particles (auf, zurück, mit, ein, aus, an, zu, ab) run both languages — learn the mirror, not the list.",
      curiosity_teaser: "Next: the Prefix Flight Path — spot the prefix at the sentence end and rebuild with modals.",
    },
  },
  {
    id: 1502,
    slug: "prefix-flight-path",
    title: "Prefix Flight Path",
    subtitle: "Spot the prefix at the sentence end across bracket sentences — and rebuild with modals",
    phase: 2,
    shift_categories: [],
    word_ids: ["aufmachen", "mitnehmen", "anrufen", "aufwachen", "einschlafen", "können", "wollen", "müssen", "einkaufen", "abfahren", "dunkel", "sorge", "gleich", "meinung", "weiß", "traurig", "angst", "hoffnung"],
    table_word_ids: ["aufmachen", "mitnehmen", "aufwachen", "einschlafen"],
    hook: {
      title: "Watching Things Fly",
      content:
        "Every separable verb in a real sentence sends its prefix on a flight: the root lands in position 2, the prefix touches down at the very end. Ich mache das Fenster auf. Ich nehme das Essen mit. Ich wache früh auf. Your job: spot the landing. Then the advanced drill — rebuild each sentence inside a modal bracket, where the prefix is grounded again: Ich will das Fenster aufmachen (the whole verb, prefix included, closes the bracket). Flight and grounding, same verb, two architectures.",
      footnotes: [
        {
          marker: "1",
          title: "The Landing Strip Is Also the Perfekt Spot",
          content:
            "The prefix lands exactly where participles and bare infinitives land — the sentence's final slot is German's cargo bay. When a separable verb goes Perfekt, the prefix flies BACK to the front of the participle: aufgemacht. One slot, three cargoes, one system.",
        },
      ],
    },
    pattern: {
      title: "Flight Plans",
      content:
        "Flight mode (root in 2, prefix last): Ich rufe ihn an (I call him up — anrufen, the phone verb!). Ich wache früh auf. Wir kaufen? no — Wir sehen die? — keep: Ich schlafe? — Ich schlafe nicht ein? — Ich schlafe ein (I fall asleep). Grounded mode (modal bracket): Ich will ihn anrufen. Du musst früh aufwachen. Wir können nicht einschlafen. Perfekt mode (prefix + ge): Ich habe ihn angerufen. Er ist eingeschlafen. Three modes, one verb — read the mode from the sentence architecture before you translate a word.",
      footnotes: [],
      linguist_note:
        "anrufen (call up) proves the particles are spatial even in abstract uses: the phone call goes UP and OUT. English 'call up' kept the spatial image — the particle, not the verb, carries the metaphor in both languages.",
    },
    exercises: [
      {
        id: "l1502_e1",
        type: "shift_select",
        prompt: "Spot the landing: 'Morgen fahre ich früh _____.' (depart — abfahren):",
        options: ["ab", "auf", "mit", "an"],
        target_answer: "ab",
        meaning: "Morgen fahre ich früh ab = I'm departing early tomorrow",
        explanation: "abfahren: the root fahre holds position 2, the prefix ab lands at the end — DE-part. Gleich fahre ich ab works too: the flight path even fronted gleich (right away) without grounding anything.",
      },
      {
        id: "l1502_e2",
        type: "shift_select",
        prompt: "Ground it: 'Ich will früh _____.' (aufwachen, inside the modal bracket):",
        options: ["aufwachen", "wache auf", "auf wachen", "aufwache"],
        target_answer: "aufwachen",
        meaning: "Ich will früh aufwachen = I want to wake up early",
        explanation: "Inside the modal bracket the verb stays WHOLE — prefix included: will opens, aufwachen closes. Feelings ride the cargo hold as whole nouns too: Angst haben, Hoffnung haben — and deine Meinung (your opinion) keeps its ein-family endings: Ich kenne deine Meinung.",
      },
      {
        id: "l1502_e3",
        type: "matching_pairs",
        prompt: "Three modes of one verb — match:",
        matching_pairs: [
          { id: "fp1", english: "flight mode", german: "Ich einkaufe morgen" },
          { id: "fp2", english: "grounded mode (modal)", german: "Ich will morgen einkaufen" },
          { id: "fp3", english: "Perfekt mode (prefix + ge)", german: "Ich habe eingekauft" },
          { id: "fp4", english: "dictionary form", german: "einkaufen" },
        ],
        target_answer: "Ich einkaufe morgen, Ich will morgen einkaufen, Ich habe eingekauft, einkaufen",
        meaning: "the same verb (to shop) in four architectures",
        explanation: "Flight (prefix last), grounding (whole in the bracket), Perfekt (prefix + ge + stem + t) — read the mode first. einkaufen = ein + kaufen: shop 'in', buy in.",
      },
      {
        id: "l1502_e4",
        type: "reverse_cognate",
        prompt: "What English phrasal verb is the twin of 'anrufen'?",
        target_answer: "call up",
        meaning: "call up ↔ anrufen (an = up/on)",
        explanation: "Both languages kept the spatial metaphor of the phone call going up — an = on/up, and the call goes out. Und wenn es dunkel ist, rufe ich an: the flight path works after dark too.",
      },
      {
        id: "l1502_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'We cannot fall asleep' (grounded mode)",
        target_answer: "Wir können nicht einschlafen",
        meaning: "We cannot fall asleep",
        word_bank: ["Wir", "können", "nicht", "einschlafen"],
        explanation: "können opens, nicht rides inside, einschlafen closes WHOLE — grounded flight, negated cargo. The basement knows feelings too: Ich weiß, dass du Sorge hast — und weil ich traurig bin, gehen wir nicht einkaufen.",
      },
    ],
    summary: {
      outcome: "Track separable prefixes across flight, grounded, and Perfekt modes.",
      use_example: { german: "Ich will früh aufwachen.", english: "I want to wake up early." },
      takeaway: "Prefix lands at the sentence end in flight, stays whole in modal brackets, rides the participle in Perfekt — read the mode, then the verb.",
      curiosity_teaser: "Next: ver ↔ for- — the inseparable cognate set: vergessen = forget, and the payoff of every preview.",
    },
  },

  {
    id: 1601,
    slug: "ver-for-cognate-set",
    title: "ver ↔ for- Cognate Set",
    subtitle: "Twelve ver- words mapped to English for- words — the payoff arc",
    phase: 2,
    shift_categories: [],
    word_ids: ["vergessen", "verlieren", "verstehen", "verkaufen", "versuchen", "verboten", "verdienen", "weiß", "traurig", "angst", "hoffnung", "einkaufen", "abfahren"],
    table_word_ids: ["vergessen", "verlieren", "verstehen", "verkaufen", "versuchen"],
    hook: {
      title: "The Payoff Arc",
      content:
        "You have been collecting ver- previews since topic 2: vergessen teased the arch from lesson one's neighborhood, verboten hid in plain sight, verkaufen waited in the modal lessons. Now the arc completes: ver- is English for-, systematically. vergessen/forget, verlieren/forlorn-lose, verboten/forbidden, verfahren? — the drive-astray verb (sich verfahren — get lost driving!). Twelve words, one prefix, one Germanic story: the for- that English kept in forget, forgive, forbid, forlorn, forgo, forsake — German kept as ver- and used on everything.",
      footnotes: [
        {
          marker: "1",
          title: "The Full for- Ledger",
          content:
            "English for- words: forget, forgive, forbid, forlorn, forgo, forsake, forswear, forbeat? — the survivors are few because English lost the PREFIX as a living tool. German ver- is still productive: veralten (grow old), sich verfahren (drive astray), sich verschreiben (mis-prescribe). One dead prefix, one living one. (grow old), sich verfahren (drive astray), sich verschreiben (mis-prescribe). One dead prefix, one living one.",
        },
      ],
    },
    pattern: {
      title: "The Twelve, Mapped",
      content:
        "vergessen ↔ forget (get + for). verlieren ↔ lose (forlorn = for-lost). verboten ↔ forbidden. verstehen ↔ understand (for-stand? no — but stehen/stand rhyme!). verkaufen ↔ sell (the cheap-loan with ver-). versuchen ↔ to try (the seek-out verb — suchen inside!). sich verfahren ↔ get lost driving (fahren inside!). verzeihen ↔ forgive? hint — zeihen (accuse) — ver-zeihen is 'un-accuse', forgive's true twin. vermeiden ↔ avoid (meiden = meet? no — 'shun'; mid in English 'methinks' family? hint only). verbinden ↔ bind (connect — verbinden/binden!). verbringen ↔ spend time (bringen inside!). The system: ver- + a root you own = an English for- word or a meaning-shifter.",
      footnotes: [],
      linguist_note:
        "ver- does three jobs: loss (verlieren), error (sich verfahren), and transformation (verkaufen — sell IS a transformation of goods). English for- kept the loss/error jobs (forget, forsake) and lost the rest. The prefix jobs are the drift story.",
    },
    exercises: [
      {
        id: "l1601_e1",
        type: "matching_pairs",
        prompt: "The ledger — match each ver- verb with its English for-twin:",
        matching_pairs: [
          { id: "vf1", english: "forget", german: "vergessen" },
          { id: "vf2", english: "forbidden", german: "verboten" },
          { id: "vf3", english: "to try (seek-out)", german: "versuchen" },
          { id: "vf4", english: "forlorn / lost", german: "verlieren" },
          { id: "vf5", english: "to earn / deserve", german: "verdienen" },
        ],
        target_answer: "vergessen, verboten, versuchen, verlieren, verdienen",
        meaning: "forget, forbidden, to try, to lose, to earn/deserve",
        explanation: "One prefix, one story: ver- is for-, and the jobs split between loss, error, and transformation — verdienen is the transformation job (earn/deserve), where English's for- never survived to make 'for-earn'.",
      },
      {
        id: "l1601_e2",
        type: "shift_select",
        prompt: "'Ich habe mich verfahren.' — what happened?",
        options: [
          "I got lost driving — the error-job of ver-",
          "I sold my car",
          "I understood the way",
          "I forgot to drive",
        ],
        target_answer: "I got lost driving — the error-job of ver-",
        meaning: "sich verfahren = to get lost (driving)",
        explanation: "ver- + fahren: the driving went WRONG. The error-job — same family as English 'for-' in forgo. Abfahren and einkaufen are fahren and kaufen's separable cousins: their prefixes fly, ver- never moves.",
      },
      {
        id: "l1601_e3",
        type: "shift_select",
        prompt: "Which root hides inside 'verbinden' (to connect)?",
        options: ["binden (to bind)", "finden (to find)", "bidden (to ask)", "Brücke (bridge)"],
        target_answer: "binden (to bind)",
        meaning: "verbinden = ver- + binden",
        explanation: "ver- + binden = bind together = connect. The noun die Verbindung (connection) keeps the root visible — and the feeling-nouns keep theirs: die Angst, die Hoffnung, nouns German and English share.",
      },
      {
        id: "l1601_e4",
        type: "reverse_cognate",
        prompt: "What English past-participle adjective is the twin of 'verboten'?",
        target_answer: "forbidden",
        meaning: "forbidden ↔ verboten",
        explanation: "verbieten, verbot, verboten ↔ forbid, forbad(e), forbidden — the whole paradigm, twin for twin. Traurig runs no ver- at all: traurig ↔ dreary, the d → t shift doing the work alone.",
      },
      {
        id: "l1601_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'I try to understand German' (versuchen + zu + verstehen)",
        target_answer: "Ich versuche Deutsch zu verstehen",
        meaning: "I try to understand German",
        word_bank: ["Ich", "versuche", "Deutsch", "zu", "verstehen", "weiß"],
        explanation: "Two ver- verbs in one zu-ladder: versuchen (try) opens, zu verstehen (to understand — for-stand!) closes.",
      },
    ],
    summary: {
      outcome: "Map twelve ver- verbs to their English for- twins and decode new ver- words by root.",
      use_example: { german: "Ich versuche, Deutsch zu verstehen.", english: "I try to understand German." },
      takeaway: "ver- = for- (vergessen/forget, verboten/forbidden) — and its three jobs (loss, error, transformation) decode every new ver- word.",
      curiosity_teaser: "Next: be- & er- — the verb factory: bekommen, erinnern, erklären, and stress as the separable/inseparable test.",
    },
  },
  {
    id: 1602,
    slug: "be-er-verb-factory",
    title: "be- & er- Verb Factory",
    subtitle: "bekommen, erinnern, erklären — meaning-shapers, and stress as the test",
    phase: 2,
    shift_categories: [],
    word_ids: ["bekommen", "erinnern", "erklären", "verstehen", "versuchen", "verkaufen", "beginnen", "bezahlen", "einkaufen", "abfahren", "verdienen"],
    table_word_ids: ["bekommen", "erinnern", "erklären", "verstehen"],
    hook: {
      title: "The Meaning-Shapers",
      content:
        "ver- is the cognate star, but be- and er- are the factory workers. be- converts: bekommen (come by → GET), besuchen (seek → VISIT), bestellen (order — place-at!). er- achieves: erinnern (inner-ize → REMEMBER), erklären (clear-out → EXPLAIN), erkennen (know-out → RECOGNIZE), erledigen? hint — (done-out → finish). English once ran the same factory — be-think (bethought), be-come, and the archaic 'I would bethink me' — but retired it. The stress test tells you which factory a verb comes from: inseparable prefixes never take the stress, separable prefixes always do. Stress is the separable-detector.",
      footnotes: [
        {
          marker: "1",
          title: "The Stress Detector",
          content:
            "Say them: AUFwachen (separable — stress on the prefix) vs verSTEHen (inseparable — stress on the root). beKOMmen, erKLÄren — unstressed prefix. The rule: if the prefix is stressed, it will fly to the sentence end; if not, it stays welded. Hear the stress, know the grammar.",
        },
      ],
    },
    pattern: {
      title: "The Factory Floor",
      content:
        "The be- floor: bekommen (GET — the trap!), besuchen (visit), bestellen (order), bezahlen (pay — the 'by-tally'! zahlen = pay/count), beginnen (begin — the same word as begin!). The er- floor: erinnern (remember), erklären (explain), erkennen (recognize), erledigen (finish off — hint), erreichen (reach — erreichen/er- + reichen, to reach!). Both factories take ge--free participles: bekommen, besucht, erinnert, erklärt. And the productive test: meet a new verb with be-/er-/ver- and you know — inseparable, ge--free, root-stressed, and the prefix is doing meaning-work.",
      footnotes: [],
      linguist_note:
        "beginnen and English begin are twins (both *biginnan, 'to open/undertake') — be- in both! The factory is older than the languages' split: be- and er- (Germanic *uz-, cognate with Latin ex-) were prefix-verbs in Proto-Germanic itself.",
    },
    exercises: [
      {
        id: "l1602_e1",
        type: "matching_pairs",
        prompt: "The factory floor — match each verb with its product:",
        matching_pairs: [
          { id: "bf1", english: "to visit", german: "besuchen" },
          { id: "bf2", english: "to recognize", german: "erkennen" },
          { id: "bf3", english: "to remember", german: "erinnern" },
          { id: "bf4", english: "to explain (make clear)", german: "erklären" },
          { id: "bf5", english: "to pay", german: "bezahlen" },
        ],
        target_answer: "besuchen, erkennen, erinnern, erklären, bezahlen",
        meaning: "to visit, to recognize, to remember, to explain, to pay",
        explanation: "be- converts, er- achieves — and each product is ge--free in the participle: besucht, erkannt, erinnert, erklärt, bezahlt.",
      },
      {
        id: "l1602_e2",
        type: "shift_select",
        prompt: "The stress test: which verb is SEPARABLE (stressed prefix)?",
        options: ["AUFwachen (wake up)", "verSTEHen (understand)", "beKOMmen (get)", "erKLÄren (explain)"],
        target_answer: "AUFwachen (wake up)",
        meaning: "Stressed prefix = separable = it will fly",
        explanation: "auf- takes the stress and the flight; ver-/be-/er- stay unstressed and welded. Hear the stress, predict the grammar. The separable shelf — einkaufen, abfahren — flies its prefixes; verdienen welds ver- like the rest of the factory.",
      },
      {
        id: "l1602_e3",
        type: "shift_select",
        prompt: "Which participle is correct for 'erklären'?",
        options: ["erklärt", "geerklärt", "erklärt ge", "klärt"],
        target_answer: "erklärt",
        meaning: "explained (no ge-)",
        explanation: "Inseparable prefix blocks ge-: erklärt, bekommen, verstanden — the No-ge- Club's third wing.",
      },
      {
        id: "l1602_e4",
        type: "reverse_cognate",
        prompt: "What English verb is the true twin of 'beginnen'?",
        target_answer: "begin",
        meaning: "begin ↔ beginnen (be- in both!)",
        explanation: "Both *biginnan: the be- prefix is Germanic heritage, not a German invention — English's begin kept it too.",
      },
      {
        id: "l1602_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'He explains the word and I remember it'",
        target_answer: "Er erklärt das Wort und ich erinnere mich",
        meaning: "He explains the word and I remember it",
        vocab_hints: [
          {
            word: "mich",
            translation: "myself (reflexive)",
            note: "sich erinnern — remember is reflexive in German: 'inner-ize MYSELF'",
          },
        ],
        word_bank: ["Er", "erklärt", "das", "Wort", "und", "ich", "erinnere", "mich"],
        explanation: "Two er- factory verbs in one sentence — and erinnern demands its reflexive mich: the inner-izing needs a target.",
      },
    ],
    summary: {
      outcome: "Use be-/er- verbs with ge--free participles and apply the stress test to new verbs.",
      use_example: { german: "Er erklärt das Wort und ich erinnere mich.", english: "He explains the word and I remember it." },
      takeaway: "be- converts, er- achieves — both factories are unstressed, ge--free, and detectable by stress alone.",
      curiosity_teaser: "Next: sich & the lost reflexives — hie thee hence: the pronouns English dropped, the daily verbs that kept them.",
    },
  },
  {
    id: 2103,
    slug: "reading-compounds-in-the-wild",
    title: "Reading Compounds in the Wild",
    subtitle: "Split six-word monsters into meaning — Donaudampfschifffahrt territory",
    phase: 3,
    shift_categories: [],
    word_ids: ["zug", "fahrt", "dampf", "haus", "zeit", "wort", "kind", "flugzeug", "briefmarke", "fußball", "regenbogen", "heimweh", "geburtstag", "feiern"],
    table_word_ids: ["zug", "fahrt", "dampf", "haus", "zeit", "wort"],
    hook: {
      title: "The Monster Reading Method",
      content:
        "German compound monsters are famous: Donaudampfschifffahrtsgesellschaft ('Danube steam-shipping company'). They terrify because learners read them as units. Read them as RUSSIANS? no — as stacks: split from the RIGHT, one head at a time. Gesellschaft (company) ← Schifffahrt (shipping) ← Dampf (steam) ← Donau (Danube). Each split gives a smaller compound; the RIGHTMOST word is always the head. Six splits and the monster is a sentence fragment: 'the Danube steam-shipping company'. You own every skill: head-word grammar from topic 21, compound reading, and the vocab pieces.",
      footnotes: [
        {
          marker: "1",
          title: "Right-Headed, Always",
          content:
            "German compounds are right-headed: the LAST word is the grammatical head (gender, plural) and the semantic core. English compounds too ('school bus driver' — a driver, not a bus!). The right-split rule works because the head is always at the door.",
        },
      ],
    },
    pattern: {
      title: "Split, Head, Translate",
      content:
        "Monster one: Donaudampfschifffahrt → Donau + Dampf + Schifffahrt = 'Danube-steam-shipping' — steam-boats on the Danube. Monster two: Unabhängigkeitserklärung → Unabhängigkeit (independence) + Erklärung (explanation/declaration) = 'declaration of independence' — and Erklärung is YOUR er- factory verb as a noun! Monster three: Zeitverschiebung → Zeit + Verschiebung (shift) = 'time-shift' — jetlag, via the -ung factory. Monster four: Krankenhaus? small now — Krankenhausfiliale? no — try: Handschuhfabrik → glove-factory. The method: right-split, read the head, stack the modifiers, translate bottom-up.",
      footnotes: [],
      linguist_note:
        "The famous longest words are legal texts: Rindfleischetikettierungsüberwachungsaufgabenübertragungsgesetz (the beef-labeling law of Mecklenburg, retired 2013). Every link was real grammar — Germans laugh at these too.",
    },
    exercises: [
      {
        id: "l2103_e1",
        type: "shift_select",
        prompt: "Split 'Zeitverschiebung' (jetlag): what is the HEAD word?",
        options: ["die Verschiebung (the shift) — rightmost = head", "die Zeit", "Both equally", "Neither"],
        target_answer: "die Verschiebung (the shift) — rightmost = head",
        meaning: "Zeit + Verschiebung = time-shift",
        explanation: "Right-split: the last word carries gender and meaning-core. die Verschiebung — the -ung factory again! Flugzeug splits the same way: Flug (flight) + Zeug (stuff) — the fly-stuff, neuter by the -zeug law.",
      },
      {
        id: "l2103_e2",
        type: "shift_select",
        prompt: "Monster check: 'Donaudampfschifffahrt' — split from the right: what comes FIRST (leftmost)?",
        options: ["Donau (the Danube river)", "Dampf (steam)", "Fahrt (journey)", "Schiff (ship)"],
        target_answer: "Donau (the Danube river)",
        meaning: "Donau | Dampf | Schifffahrt",
        explanation: "Modifiers stack leftward: Danube → steam → shipping. The leftmost piece is the outermost modifier.",
      },
      {
        id: "l2103_e3",
        type: "shift_select",
        prompt: "Which monster contains YOUR er- factory noun?",
        options: ["Unabhängigkeitserklärung (declaration of independence)", "Donaudampfschifffahrt", "Handschuhfabrik", "Zeitverschiebung"],
        target_answer: "Unabhängigkeitserklärung (declaration of independence)",
        meaning: "Erklärung — erklären as a noun",
        explanation: "die Erklärung is erklären's -ung... no, its own nominalization — 'the explanation'. The factory you drilled, fossilized into a monster.",
      },
      {
        id: "l2103_e4",
        type: "reverse_cognate",
        prompt: "'Donaudampfschifffahrt' — which piece is a shift-family word you drilled (steam)?",
        target_answer: "dampf",
        meaning: "Dampf ↔ damp (d → t, p → pf)",
        explanation: "Dampf/damp: the double-shift word from the Double-Shift Detectives — steaming inside the monster. The gallery walls hold more: Fußball, Regenbogen, Heimweh — and die Briefmarke, the stamp: Brief (letter) + Marke (mark), the little mark for the letter.",
      },
      {
        id: "l2103_e5",
        type: "syntax_builder",
        prompt: "Assemble a mini-monster: 'The journey with the train is good'",
        target_answer: "Die Fahrt mit dem Zug ist gut",
        meaning: "Die Fahrt mit dem Zug ist gut",
        word_bank: ["Die", "Fahrt", "mit", "dem", "Zug", "ist", "gut"],
        explanation: "Two fahren-family nouns + mit + dative — the simple sentence that monsters are built from. And when the day comes: wir feiern den Geburtstag — the party verb takes the accusative present.",
      },
    ],
    summary: {
      outcome: "Split wild compound monsters by right-heads and translate bottom-up.",
      use_example: { german: "Die Fahrt mit dem Zug ist gut.", english: "The journey by train is good." },
      takeaway: "Right-split every monster: the last word is the head, modifiers stack leftward — monsters are just long sentences.",
      curiosity_teaser: "Next: gender heuristics & suffix clues — decode der/die/das from the word's tail: -ung is feminine, -chen is neuter.",
    },
  },
  {
    id: 2302,
    slug: "the-five-plural-patterns",
    title: "The Five Plural Patterns",
    subtitle: "Sort twenty-five taught nouns into -e, -er, -n, -s, and zero — then produce plurals in sentences",
    phase: 3,
    shift_categories: [],
    word_ids: ["mann", "frau", "kind", "buch", "haus", "glas", "tochter", "zeit", "auto", "spiel", "stunde", "blatt", "auge", "ei", "knie", "maus", "vogel", "kuh"],
    table_word_ids: ["mann", "buch", "frau", "kind", "tochter", "zeit"],
    hook: {
      title: "Five Drawers",
      content:
        "German plurals have no single rule — they have five drawers, and every noun lives in one. Drawer -er (with umlaut): das Buch → die Bücher, der Mann → die Männer. Drawer -n/-en: die Frau → die Frauen, die Zeit → die Zeiten. Drawer -e: der Tisch → die Tische. Drawer -s: das Auto → die Autos (loans and snappy words). Drawer zero: der Lehrer → die Lehrer (no change). The good news: the drawers correlate with gender and shape — feminines overwhelmingly take -n, -er nouns take zero, monosyllabic masculines/neuters take -e or umlaut+e. Sort twenty-five nouns today and the drawers close themselves.",
      footnotes: [
        {
          marker: "1",
          title: "The Plural Article Is Always die",
          content:
            "Whatever the drawer, the plural article is die — der Mann → die Männer, das Kind → die Kinder. The plural erases gender: all nouns become die-words in the plural. The dative plural adds -n back (den Männern) — the only case that remembers the drawer.",
        },
      ],
    },
    pattern: {
      title: "The Sorting Tray",
      content:
        "Tray -er (umlaut): Bücher, Männer, Häuser, Töchter, Kinder (no umlaut — the vowel never had an i). Tray -n/-en: Frauen, Zeiten, Zeitung-en? — die Zeitungen! -ung nouns take -en. Tray -e: Tische, Apfel? — die Äpfel (umlaut + e!), Gärten (umlaut). Tray -s: Autos, Fotos, Kaffees? rare — Handys (your trap-word takes -s!). Tray zero: Lehrer, Fernseher, Meter? hint. The umlaut sub-rule: only nouns with a, o, u can umlaut — Zeit can't (no a/o/u), Mann can. Twenty-five nouns, five trays, one sort.",
      footnotes: [],
      linguist_note:
        "The -s drawer is the modern loan lane (Autos, Handys, Babys), and it is growing. German plurals are historically six or seven systems worn down to five — the -en feminine drawer and the zero -er drawer are the deepest fossils.",
    },
    exercises: [
      {
        id: "l2302_e1",
        type: "matching_pairs",
        prompt: "Sort the nouns — match each singular with its drawer:",
        matching_pairs: [
          { id: "fp1", english: "das Buch → (-er, umlaut)", german: "die Bücher" },
          { id: "fp2", english: "die Frau → (-n)", german: "die Frauen" },
          { id: "fp3", english: "das Auto → (-s)", german: "die Autos" },
          { id: "fp4", english: "der Lehrer → (zero)", german: "die Lehrer" },
          { id: "fp5", english: "das Spiel → (-e)", german: "die Spiele" },
          { id: "fp6", english: "die Stunde → (-n)", german: "die Stunden" },
        ],
        target_answer: "die Bücher, die Frauen, die Autos, die Lehrer, die Spiele, die Stunden",
        meaning: "the books, the women, the cars, the teachers, the games, the hours",
        explanation: "-er umlaut, -n, -s, and zero — four of the five drawers, each with a family resemblance. Spiel and Stunde pick their drawers by sound.",
      },
      {
        id: "l2302_e2",
        type: "shift_select",
        prompt: "Which noun CANNOT take an umlaut plural for phonological reasons?",
        options: ["die Zeit (no a, o, or u to umlaut)", "der Mann", "das Buch", "der Garten"],
        target_answer: "die Zeit (no a, o, or u to umlaut)",
        meaning: "Umlaut needs a, o, or u",
        explanation: "Umlaut pulls a/o/u forward. Zeit's i is already front — nothing to pull. Zeit → Zeiten, no dots. Sort the shelf: Blatt → Blätter (dots), Maus → Mäuse (dots), Vogel → Vögel (dots), Kuh → Kühe (dots), Auge → Augen, Ei → Eier, Knie → Knie — the vowels decide.",
      },
      {
        id: "l2302_e3",
        type: "shift_select",
        prompt: "What is ALWAYS the plural article?",
        options: ["die", "der", "das", "It depends on the drawer"],
        target_answer: "die",
        meaning: "Plural = die, always",
        explanation: "der Mann → die Männer, das Kind → die Kinder, die Frau → die Frauen — the plural erases gender.",
      },
      {
        id: "l2302_e4",
        type: "derive",
        prompt: "Drawer check: 'die Zeitung →' (the -ung nouns take which plural?):",
        english_hint: "-ung nouns take -en",
        target_answer: "Zeitungen",
        meaning: "die Zeitungen — the newspapers",
        explanation: "-ung nouns are feminine, feminines take -n/-en: die Zeitungen. Two laws, one drawer.",
      },
      {
        id: "l2302_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'The men find the books in the houses'",
        target_answer: "Die Männer finden die Bücher in den Häusern",
        meaning: "The men find the books in the houses",
        vocab_hints: [
          {
            word: "den Häusern",
            translation: "in the houses (dative plural)",
            note: "dative plural adds -n: die Häuser → den Häusern — the case that remembers the drawer",
          },
        ],
        word_bank: ["Die", "Männer", "finden", "die", "Bücher", "in", "den", "Häusern"],
        explanation: "Three umlaut plurals (Männer, Bücher, Häusern) — and the dative -n on Häusern is the drawer's receipt.",
      },
    ],
    summary: {
      outcome: "Sort nouns into the five plural drawers and produce dative-plural -n correctly.",
      use_example: { german: "Die Männer finden die Bücher in den Häusern.", english: "The men find the books in the houses." },
      takeaway: "Five drawers (-er/-e/-n/-s/zero), plural always die, dative plural adds -n — sort once, plural forever.",
      curiosity_teaser: "Next: Twin Suppletions — gut/besser and good/better, the shared irregular story.",
    },
  },

  {
    id: 2401,
    slug: "twin-suppletions",
    title: "Twin Suppletions",
    subtitle: "gut/besser/hoch/höher vs good/better/high/higher — the shared irregular story",
    phase: 3,
    shift_categories: [],
    word_ids: ["gut", "besser", "hoch", "mehr", "alt", "kalt"],
    table_word_ids: ["gut", "besser", "hoch", "mehr", "alt", "kalt"],
    hook: {
      title: "Irregular Together",
      content:
        "Suppletion — replacing a missing form with a borrowed word — is the rarest grammar event, and English and German did the SAME rare events on the SAME verbs. good/better ↔ gut/besser: both replaced their comparative with a form of *bazizon. much/more ↔ viel/mehr: both borrowed *maizô. high/higher stayed native in both — hoch/höher with pure umlaut. The odds of coincidence are zero: these pairs were irregular together before the languages split, and both kept the irregulars because irregulars are frequency armor — the most-used words resist regularization longest.",
      footnotes: [
        {
          marker: "1",
          title: "Why Irregulars Survive",
          content:
            "Regular verbs and adjectives regularize when they are rare — nobody says 'goed' for the verb they use hourly. Irregularity is protection by usage: the top-100 words keep their ancient forms because everyone hears them a thousand times a day. That is why the suppletive twins survived on BOTH shores.",
        },
      ],
    },
    pattern: {
      title: "The Twin Pairs, Filed",
      content:
        "Pair one: gut → besser ↔ good → better — the *bazizon loan, shifted per the laws (b stays, ss/tz reports T→SS/Z). Pair two: viel → mehr ↔ much → more — *maizô, with mehr's r intact. Pair three: hoch → höher ↔ high → higher — the gh→ch word with pure umlaut, no borrowing needed. Pair four — the failed pair: gut → best ↔ good → best (identical superlative!), and am besten ↔ the best. Also file: viel → am meisten ↔ the most (meist/most — another twin hiding in the superlative). Two borrowings, one umlaut, four twin pairs — the irregular hall is shared property.",
      footnotes: [],
      linguist_note:
        "besser's ss and better's tt both encode the same dental: T→SS/Z on the German side, and English's own old tt. The comparative was borrowed BEFORE the High German shift — so the shift applied to it like a native. Borrowed-then-shifted: the signature of ancient loans.",
    },
    exercises: [
      {
        id: "l2401_e1",
        type: "matching_pairs",
        prompt: "The twin pairs — match the irregulars:",
        matching_pairs: [
          { id: "ts1", english: "better", german: "besser" },
          { id: "ts2", english: "more", german: "mehr" },
          { id: "ts3", english: "higher", german: "höher" },
          { id: "ts4", english: "best", german: "am besten" },
        ],
        target_answer: "besser, mehr, höher, am besten",
        meaning: "better, more, higher, best",
        explanation: "Two borrowed comparatives and one umlaut native — all shared across the sea.",
      },
      {
        id: "l2401_e2",
        type: "shift_select",
        prompt: "Why are gut/besser and good/better BOTH irregular?",
        options: [
          "Both replaced their comparative with the same ancient word (*bazizon) before they split",
          "German copied English",
          "English copied German",
          "Pure chance",
        ],
        target_answer: "Both replaced their comparative with the same ancient word (*bazizon) before they split",
        meaning: "Shared suppletion, inherited together",
        explanation: "The borrowing happened in Proto-Germanic — both languages inherited the irregularity, then shifted it independently.",
      },
      {
        id: "l2401_e3",
        type: "shift_select",
        prompt: "Which superlative twin hides in 'am meisten' (the most)?",
        options: ["most ↔ meist", "more ↔ meist", "must ↔ meist", "moist ↔ meist"],
        target_answer: "most ↔ meist",
        meaning: "viel → am meisten ↔ much → the most",
        explanation: "meist and most are the same superlative — the mehr/more twin continues one rung up the ladder.",
      },
      {
        id: "l2401_e4",
        type: "reverse_cognate",
        prompt: "What English word is the twin of 'hoch'?",
        target_answer: "high",
        meaning: "high ↔ hoch (gh → ch)",
        explanation: "The gh that survives as ch: hoch/höher and high/higher — pure umlaut, no borrowing, pure twin.",
      },
      {
        id: "l2401_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'The book is better, but the film is the best' (am besten)",
        target_answer: "Das Buch ist besser aber der Film ist am besten",
        meaning: "The book is better, but the film is the best",
        vocab_hints: [
          {
            word: "der Film",
            translation: "the film / movie",
            note: "der Film — a direct loan, identical word",
          },
        ],
        word_bank: ["Das", "Buch", "ist", "besser", "aber", "der", "Film", "ist", "am", "besten"],
        explanation: "besser (the *bazizon twin) and am besten (the best twin) in one verdict — the suppletion ladder complete.",
      },
    ],
    summary: {
      outcome: "Use besser, mehr, höher, am besten — and explain each as shared inheritance.",
      use_example: { german: "Das Buch ist besser, aber der Film ist am besten.", english: "The book is better, but the film is the best." },
      takeaway: "Suppletion is shared: gut/besser ↔ good/better, viel/mehr ↔ much/more — irregular together, irregular forever.",
      curiosity_teaser: "Next: the -er/-ste Sentence Gym — twenty comparison sentences with als and wie.",
    },
  },
  {
    id: 2402,
    slug: "er-ste-sentence-gym",
    title: "-er/-ste Sentence Gym",
    subtitle: "Twenty comparison sentences with als and wie using taught adjectives",
    phase: 3,
    shift_categories: [],
    word_ids: ["gut", "besser", "kalt", "alt", "hoch", "groß", "klein", "als", "wie", "schnell", "schwer", "spät", "spiel", "stunde"],
    table_word_ids: ["gut", "besser", "kalt", "alt", "hoch", "groß"],
    hook: {
      title: "The Comparison Gym",
      content:
        "Two words run all comparisons: als (than) and wie (as). Older than → älter als. As old as → so alt wie. The adjectives are your old kit: groß/klein (big/small — klein hinted), kalt/warm, gut/besser, alt/jung, hoch/niedrig? — keep hoch. Twenty reps: comparative + als, equality with so...wie, superlative with am -sten. The gym's secret: German comparisons are WORD-FOR-WORD English minus the -th/-er spelling habits — 'bigger than' = größer als, with the umlaut doing English's silent vowel change.",
      footnotes: [
        {
          marker: "1",
          title: "als vs wie: One Ancestor",
          content:
            "als and wie both descend from comparative particles Germanic used interchangeably ('all as' → als, 'how/like' → wie). English split the jobs into than/as/like; German kept two: als for inequality, wie for equality. Medieval German texts mix them freely — the modern split is a tidy-up.",
        },
      ],
    },
    pattern: {
      title: "The Reps",
      content:
        "Inequality: Der Kaffee ist besser als der Tee. Ich bin älter als du. Die Straße ist länger als der Garten? — länger (lang → long, hint!). Winter ist kälter als Sommer? — Sommer hint. Equality: Er ist so groß wie sein Haus? — playfully: so groß wie ein Haus. Der Zug ist so schnell wie das Auto. Superlatives: Der Mont Blanc ist am höchsten. Das Wasser ist am kältesten. Der Rhein? hint — am schönsten. Also the predicate pattern: Die beste Zeit ist heute (the best time is today — bester/beste/bestes decline like ein!).",
      footnotes: [],
      linguist_note:
        "Comparative adjectives before nouns decline like ein-words: ein besserer Kaffee, die beste Zeit, ein höheres Haus. The ending is the article's job-share — the adjective steps in when there is no article to carry the flag.",
    },
    exercises: [
      {
        id: "l2402_e1",
        type: "shift_select",
        prompt: "Inequality: 'Der Winter ist kälter _____ der Sommer.'",
        options: ["als", "wie", "denn", "so"],
        target_answer: "als",
        meaning: "Der Winter ist kälter als der Sommer",
        explanation: "Inequality takes als. wie is equality's word (so kalt wie). spät is the night-owl: später als — later than everything.",
      },
      {
        id: "l2402_e2",
        type: "shift_select",
        prompt: "Equality: 'Der Zug ist _____ schnell wie das Auto.'",
        options: ["so", "als", "mehr", "am"],
        target_answer: "so",
        meaning: "Der Zug ist so schnell wie das Auto",
        explanation: "so...wie frames equality — 'as fast as'. als would declare the train faster. Compare times the same way: die Stunde is the yardstick.",
      },
      {
        id: "l2402_e3",
        type: "matching_pairs",
        prompt: "Match the comparison sentences with their English meanings:",
        matching_pairs: [
          { id: "sg1", english: "I am older than you", german: "Ich bin älter als du" },
          { id: "sg2", english: "The water is too cold", german: "Das Wasser ist zu kalt" },
          { id: "sg3", english: "Coffee is better than tea", german: "Kaffee ist besser als Tee" },
          { id: "sg4", english: "The house is as big as a castle? — as big as it gets", german: "Das Haus ist so groß wie ein Schloss" },
          { id: "sg5", english: "The test is harder than the game", german: "Der Test ist schwerer als das Spiel" },
        ],
        target_answer: "Ich bin älter als du, Das Wasser ist zu kalt, Kaffee ist besser als Tee, Das Haus ist so groß wie ein Schloss, Der Test ist schwerer als das Spiel",
        meaning: "four comparison patterns and a heavyweight",
        explanation: "als compares down the ladder, wie holds it level, zu cranks it — three tools, one gym. schwer (heavy, difficult) weighs in: schwerer als — heavier than.",
      },
      {
        id: "l2402_e4",
        type: "derive",
        prompt: "Superlative it: 'hoch' → 'Der Mont Blanc ist am _____.' (the highest):",
        english_hint: "am + the umlaut + -sten",
        target_answer: "höchsten",
        meaning: "am höchsten = the highest",
        explanation: "hoch → höher → am höchsten — the gh→ch word with pure umlaut all the way up.",
      },
      {
        id: "l2402_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'Today is the best day' (die beste Zeit pattern)",
        target_answer: "Heute ist der beste Tag",
        meaning: "Heute ist der beste Tag = Today is the best day",
        word_bank: ["Heute", "ist", "der", "beste", "Tag"],
        explanation: "am besten is the adverb superlative; before a noun it declines: der beste Tag — the ein-family endings again.",
      },
    ],
    summary: {
      outcome: "Build als/wie comparisons and am -sten superlatives with declining adjectives.",
      use_example: { german: "Heute ist der beste Tag.", english: "Today is the best day." },
      takeaway: "als = than, so...wie = as...as, am -sten = superlative — and before nouns the adjective declines like ein.",
      curiosity_teaser: "Next: adjective endings — the article's echo: der kalte Tag vs ein kalter Tag.",
    },
  },
  {
    id: 2502,
    slug: "v-to-b-word-hunt",
    title: "V→B Word Hunt",
    subtitle: "Atlas-bridged derivation drills across the whole quiet family",
    phase: 3,
    shift_categories: ["v_to_b"],
    word_ids: ["geben", "leben", "lieben", "glauben", "sieben", "über", "halb", "silber", "gelb", "kalb", "leber", "laub", "rabe", "selbst", "lecker", "neu", "voll", "nass"],
    table_word_ids: ["geben", "leben", "lieben", "glauben", "über", "halb"],
    hook: {
      title: "The Hunt",
      content:
        "The Atlas bridge card for this family lists every v→b word in the compendium — today you hunt them all. The verbs: geben, leben, lieben, glauben. The numbers and measures: sieben, halb. The preposition: über. The materials and creatures: Silber/silver, gelb/yellow, Kalb/calf, Leber/liver, Laub/leaf, Rabe/raven. Thirteen words, one law: English v/f between vowels, German b. The hunt's trick is direction — you can run it German→English (Silber → silver?) or English→German (heaven → Himmel? no — different family! Only true v→b words answer).",
      footnotes: [
        {
          marker: "1",
          title: "The Raven's Test",
          content:
            "Rabe ↔ raven is the cleanest proof of the law: an ordinary bird, an ordinary word, and the v/b correspondence perfectly preserved. When a law works on ravens, rivers, and livers, it is a law.",
        },
      ],
    },
    pattern: {
      title: "The Hunt Grid",
      content:
        "Grid one — verbs: give/geben, live/leben, love/lieben, believe/glauben (be↔ge + lieve/laube). Grid two — quantity: seven/sieben, half/halb. Grid three — position: over/über. Grid four — materials: silver/Silber, yellow/gelb (double shift — y→g too!). Grid five — bodies and beasts: calf/Kalb, liver/Leber, leaf/Laub, raven/Rabe, beaver/Biber. Each grid is a derivation drill: cover the German, produce it from the English by shifting the consonant, then check. This family is the Atlas's quietest constellation — and one of its most reliable.",
      footnotes: [],
      linguist_note:
        "gelb/yellow is the family's showcase: TWO shifts at once (y→g and v/f→b) on one color word. Proto-Germanic *gelwaz carried both — English vocalized the g, softened the w; German kept the g, closed the w. One word, two evolutionary reports.",
    },
    exercises: [
      {
        id: "l2502_e1",
        type: "matching_pairs",
        prompt: "Hunt grid — match the bodies and beasts:",
        matching_pairs: [
          { id: "vh1", english: "calf", german: "das Kalb" },
          { id: "vh2", english: "liver", german: "die Leber" },
          { id: "vh3", english: "leaf / foliage", german: "das Laub" },
          { id: "vh4", english: "raven", german: "der Rabe" },
          { id: "vh5", english: "self (the reflexive core)", german: "selbst" },
        ],
        target_answer: "das Kalb, die Leber, das Laub, der Rabe, selbst",
        meaning: "calf, liver, leaf, raven, self",
        explanation: "Unrelated meanings, one law: the English v/f closes to German b between vowels — and selbst is the law living in your own pronouns.",
      },
      {
        id: "l2502_e2",
        type: "shift_select",
        prompt: "The showcase: 'gelb' (yellow) carries TWO shifts. Which?",
        options: ["y → g and v/f → b", "TH → D and K → CH", "T → Z and P → F", "Only v → b"],
        target_answer: "y → g and v/f → b",
        meaning: "yellow ↔ gelb: a double-shift color",
        explanation: "The g of gelb is the y English vocalized; the b is the w English softened. One color, two reports. And while you hunt: predicate adjectives stay bare — der Kuchen ist lecker, alles ist neu, der Kühlschrank ist voll, die Straße ist nass — endings belong to attributives, not predicates.",
      },
      {
        id: "l2502_e3",
        type: "shift_select",
        prompt: "Derivation drill: English 'believe' → German (both elements!):",
        options: ["glauben", "gelieben", "beliben", "glaufen"],
        target_answer: "glauben",
        meaning: "believe ↔ glauben",
        explanation: "be- ↔ ge- and lieve → laube (v→b): both elements correspond. The prefix pairs ride together.",
      },
      {
        id: "l2502_e4",
        type: "reverse_cognate",
        prompt: "What English metal is the twin of 'Silber'?",
        target_answer: "silver",
        meaning: "silver ↔ Silber",
        explanation: "The v closed to b — and silver/gelb shows the family covers materials as happily as verbs.",
      },
      {
        id: "l2502_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'We believe, we live, we love' (the verbs' anthem)",
        target_answer: "Wir glauben wir leben wir lieben",
        meaning: "We believe, we live, we love",
        word_bank: ["Wir", "glauben", "wir", "leben", "wir", "lieben"],
        explanation: "Three quiet-family verbs in one rhythm — the V→B family is where German keeps its heart-words.",
      },
    ],
    summary: {
      outcome: "Derive the whole V→B family in both directions across five word grids.",
      use_example: { german: "Wir glauben, wir leben, wir lieben.", english: "We believe, we live, we love." },
      takeaway: "English v/f between vowels → German b: thirteen words from verbs to ravens, one law end to end.",
      curiosity_teaser: "Next: Hidden Shifts II — gh→ch and y→g: the ghost-letter map, from Nacht/night to sagen/say.",
    },
  },
  {
    id: 2602,
    slug: "tochter-double-shift-showdown",
    title: "Tochter: Double Shift Showdown",
    subtitle: "Words carrying both D→T and GH→CH — discrimination drills",
    phase: 3,
    shift_categories: ["d_to_t", "y_gh_to_g_ch"],
    word_ids: ["tochter", "nacht", "licht", "recht", "acht", "knecht", "denken", "mitternacht", "nichte", "selbst", "hell", "mond", "stern"],
    table_word_ids: ["tochter", "nacht", "recht", "acht", "knecht", "denken"],
    hook: {
      title: "The Showdown",
      content:
        "The double-shift words meet the ghost-map words in one arena. Tochter carries D→T AND gh→ch. dachte (thought) carries TH→D AND gh→ch. Nacht, Licht, acht, Recht, Knecht carry gh→ch alone. The showdown skill: when you see a German t-ch word (Tochter, dachte, Nacht), check BOTH laws — is the t a hardened d (daughter, thought) or was there never a d? Tochter/daughter has both shifts;acht/eight has only the gh. One letter difference in the English twin tells you which laws fired.",
      footnotes: [
        {
          marker: "1",
          title: "The Three-Way Test",
          content:
            "English night/Nacht: gh→ch only (no d). English daughter/Tochter: d→t AND gh→ch. English thought/dachte: th→d AND gh→ch. Same ch ending, three different English consonant stories. The German ch is constant; the English front tells the tale.",
        },
      ],
    },
    pattern: {
      title: "The Showdown Bracket",
      content:
        "Match one: Tochter ↔ daughter (D→T + gh→ch) versus Nacht ↔ night (gh→ch only). Match two: dachte ↔ thought (TH→D + gh→ch) versus Licht ↔ light (gh→ch only). Match three: Knecht ↔ knight (gh→ch only — and the social drift!). Match four: acht ↔ eight (gh→ch only). Match five: Recht ↔ right (gh→ch only). The pattern: when the English twin begins with d or th, the German t is doing double duty; when the English twin begins with n, l, e, r, k — the ch is flying solo. Bracket complete.",
      footnotes: [],
      linguist_note:
        "The ch of Tochter, Nacht, Licht,acht, Recht, Knecht is phonologically identical — the Ach-Laut after back vowels. The GRAPHIC history differs (t+ch from d+gh, ch from gh), but the sound never changed in German. English silenced one sound; German kept one sound. Simplicity on one shore, complexity on the other.",
    },
    exercises: [
      {
        id: "l2602_e1",
        type: "matching_pairs",
        prompt: "The showdown — match each word with its shift story:",
        matching_pairs: [
          { id: "ss1", english: "daughter (D→T + gh→ch)", german: "Tochter" },
          { id: "ss2", english: "thought (TH→D + gh→ch)", german: "dachte" },
          { id: "ss3", english: "night (gh→ch only)", german: "Nacht" },
          { id: "ss4", english: "eight (gh→ch only)", german: "acht" },
        ],
        target_answer: "Tochter, dachte, Nacht, acht",
        meaning: "the four showdown entries",
        explanation: "Same ch ending — the English front (d, th, or nothing) tells you which laws fired.",
      },
      {
        id: "l2602_e2",
        type: "shift_select",
        prompt: "'Knecht' — how many shifts from 'knight'?",
        options: ["One: gh → ch (the d never existed here)", "Two: D→T and gh→ch", "Three", "None"],
        target_answer: "One: gh → ch (the d never existed here)",
        meaning: "knight ↔ Knecht: single shift",
        explanation: "Both start with k — no dental involved. Only the guttural changed (or rather, only English silenced it). The night sky again: der Mond, der Stern — and hell (bright) is what the moon makes of the dark.",
      },
      {
        id: "l2602_e3",
        type: "shift_select",
        prompt: "Which pair runs THREE laws including th→d and gh→ch?",
        options: ["thought ↔ dachte", "night ↔ Nacht", "eight ↔ acht", "right ↔ Recht"],
        target_answer: "thought ↔ dachte",
        meaning: "The triple-law champion",
        explanation: "th→d, the vowel drift, gh→ch — thought/dachte is the most heavily shifted common pair in the language. (selbst stays bare — ich selbst — the v→b law from the hunt.)",
      },
      {
        id: "l2602_e4",
        type: "reverse_cognate",
        prompt: "What English word is the twin of 'Tochter'?",
        target_answer: "daughter",
        meaning: "daughter ↔ Tochter (D→T + gh→ch)",
        explanation: "The double-shift flagship — d hardened AND the guttural survived, in one family word.",
      },
      {
        id: "l2602_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'The daughter thought at night' (mixed past!)",
        target_answer: "Die Tochter dachte in der Nacht",
        meaning: "Die Tochter dachte in der Nacht = The daughter thought at night",
        vocab_hints: [
          {
            word: "in der Nacht",
            translation: "at/in the night",
            note: "in + dative (location in time) — der Nacht is the feminine dative",
          },
        ],
        word_bank: ["Die", "Tochter", "dachte", "in", "der", "Nacht"],
        explanation: "Three gh→ch/t-ch words in one sentence — Tochter (double), dachte (triple), Nacht (single). The showdown, staged. Die Nichte (the niece) belongs to the Tochter family set — kin words for the double-shift daughter.",
      },
    ],
    summary: {
      outcome: "Discriminate single-shift ghost words from double-shift twins at speed.",
      use_example: { german: "Die Tochter dachte in der Nacht.", english: "The daughter thought at night." },
      takeaway: "The ch ending is constant — the English front (d, th, or nothing) reports how many laws fired.",
      curiosity_teaser: "Next: sagen & gestern — the Y→G twins close the Atlas families for good.",
    },
  },
  {
    id: 2603,
    slug: "sagen-and-gestern-the-y-g-twins",
    title: "sagen & gestern: the Y→G Twins",
    subtitle: "say/sagen, yesterday/gestern — and the remaining family words",
    phase: 3,
    shift_categories: ["y_gh_to_g_ch"],
    word_ids: ["sagen", "gestern", "weg", "regen", "tag", "morgen", "legen", "hell", "mond", "stern", "mitternacht", "nichte"],
    table_word_ids: ["sagen", "gestern", "weg", "tag", "regen"],
    hook: {
      title: "The Y→G Cabinet",
      content:
        "The last Atlas cabinet holds the y→g twins: English wore the ancient g down to y; German kept it. say ↔ sagen. yesterday ↔ gestern. way ↔ Weg. day ↔ Tag (the double: y→g AND d→t!). rain ↔ Regen. eye ↔ Auge (the g hides mid-word). And the extended family: derive? no — the y-words English still owns: yonder ↔ jener (the far demonstrative from topic 11!). Every English word with a y where a g should be — say, way, day, yesterday, yonder — has its German twin still saying the g.",
      footnotes: [
        {
          marker: "1",
          title: "Why English Vocalized",
          content:
            "After the Viking and Norman layers, English's palatal g softened to y before front vowels (geaf → yave → gave's old rival, gefeoht? — the clean examples: gear ↔ Jahr's family, yard ↔ Garten!). yard/Garten is the crown pair: the SAME g→y and d→t shifts you know, on a garden word.",
        },
      ],
    },
    pattern: {
      title: "The Cabinet Display",
      content:
        "Display one: say ↔ sagen — the y→g headliner (ich habe gesagt — you drilled the participle!). Display two: yesterday ↔ gestern — the calendar twin. Display three: way ↔ Weg — der Weg, the path (Ich folge dem Weg — folgen takes dative!). Display four: day ↔ Tag — the double-shift royalty (y→g + d→t). Display five: rain ↔ Regen — y→g with the g mid-word. Display six: yard ↔ Garten (hinted — the d→t + y→g garden pair). Display seven: eye ↔ Auge — the g worn smooth mid-word (die Augen — you own it from the body lessons!). The cabinet closes the Atlas: all nine families, fully displayed.",
      footnotes: [],
      linguist_note:
        "The y→g pair is mirror-image to the g→y pair: English day (from dæġ, g vocalized) and German Tag (g kept); but English GET (from *getan) and German bekommen-family? no — get/gotten kept the g! The vocalization only happened before front vowels — which is why 'good' never became 'yood'.",
    },
    exercises: [
      {
        id: "l2603_e1",
        type: "matching_pairs",
        prompt: "The cabinet — match the y→g twins:",
        matching_pairs: [
          { id: "yg1", english: "say / said", german: "sagen / sagte" },
          { id: "yg2", english: "yesterday", german: "gestern" },
          { id: "yg3", english: "way / path", german: "der Weg" },
          { id: "yg4", english: "rain", german: "der Regen" },
          { id: "yg5", english: "lay / laid", german: "legen / legte" },
        ],
        target_answer: "sagen / sagte, gestern, der Weg, der Regen, legen / legte",
        meaning: "say, yesterday, way, rain, lay",
        explanation: "English vocalized the g to y; German kept it sounding — the last Atlas cabinet, full. The night exhibits too: der Mond, der Stern, hell (bright), um Mitternacht — and die Nichte, the niece whose n- never shifted at all.",
      },
      {
        id: "l2603_e2",
        type: "shift_select",
        prompt: "The double-shift royalty: 'day ↔ Tag' runs which laws?",
        options: ["Y → G and D → T", "Only y → g", "TH → D and gh → ch", "V → B"],
        target_answer: "Y → G and D → T",
        meaning: "day ↔ Tag: two laws, one word",
        explanation: "The d hardened to t AND the ancient g still sounds at the end — day is the double-shift king of the y-cabinet.",
      },
      {
        id: "l2603_e3",
        type: "shift_select",
        prompt: "'Ich folge dem Weg.' — what grammar does folgen demand?",
        options: ["The dative — folgen takes TO someone/something", "The accusative", "A zu-infinitive", "The genitive"],
        target_answer: "The dative — folgen takes TO someone/something",
        meaning: "folgen + dative: dem Weg",
        explanation: "Following goes TO the followed — the dative receiver law, with folgen joining helfen and danken's club.",
      },
      {
        id: "l2603_e4",
        type: "reverse_cognate",
        prompt: "Which far-distance word (topic 11!) is the y→g twin of 'yonder'?",
        target_answer: "jener",
        meaning: "yonder ↔ jener (y → g)",
        explanation: "The far demonstrative: *jēnaz gave yon/yonder and jener — the demonstrative map and the y→g cabinet share an exhibit.",
      },
      {
        id: "l2603_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'I said the way yesterday' (a little poem)",
        target_answer: "Ich sagte den Weg gestern",
        meaning: "Ich sagte den Weg gestern = Yesterday I said the way",
        vocab_hints: [
          {
            word: "den",
            translation: "the (masculine accusative)",
            note: "sagen + accusative thing: den Weg",
          },
        ],
        word_bank: ["Ich", "sagte", "den", "Weg", "gestern"],
        explanation: "Three y→g words in one line: sagte, Weg, gestern — the cabinet, read aloud as a sentence.",
      },
    ],
    summary: {
      outcome: "Read every English y as a German g — sagen, gestern, Weg, Tag, Regen, Auge.",
      use_example: { german: "Ich sagte den Weg gestern.", english: "I said the way yesterday." },
      takeaway: "y→g closes the Atlas: every English y-word has a g-word twin — day/Tag carrying both y→g and d→t.",
      curiosity_teaser: "Next: prepositions as physical metaphors — über↔over, unter↔under, durch↔through, and the cases they drag along.",
    },
  },
  {
    id: 2703,
    slug: "preposition-sentence-ladders",
    title: "Preposition Sentence Ladders",
    subtitle: "Full sentences chaining prepositional phrases onto taught verbs",
    phase: 3,
    shift_categories: [],
    word_ids: ["in", "auf", "über", "unter", "vor", "durch", "mit", "aus", "bei", "zu", "haus", "tisch", "stadt", "zug", "fahrt", "fluss", "markt", "wand", "hafen", "wald", "brücke", "platz"],
    table_word_ids: ["in", "auf", "über", "mit", "durch", "aus"],
    hook: {
      title: "The Ladder Climb",
      content:
        "One verb, one or two prepositional phrases, a full sentence: Ich fahre mit dem Zug nach Berlin (I travel by train to Berlin). Ich komme aus dem Haus (I come out of the house). Wir gehen durch die Stadt (we walk through the city). The ladder skill: stack phrases in TeKaMoLo order — Time, Cause, Manner, Place — Ich fahre morgen mit dem Zug nach Berlin (tomorrow, by train, to Berlin). Each phrase obeys its own case law: mit + dative, nach + dative, durch + accusative. The climb is the last grammar drill of the trail — after this, sentences build themselves.",
      footnotes: [
        {
          marker: "1",
          title: "TeKaMoLo, Gently",
          content:
            "Temporal (wann?) → Kausal (why?) → Modal (how?) → Lokal (where?): Ich fahre morgen (T) wegen des Wetters? skip the cause — mit dem Zug (M) nach Berlin (L). Three of the four slots fill a typical travel sentence; the order is a strong tendency, not a law.",
        },
      ],
    },
    pattern: {
      title: "The Climb",
      content:
        "Ladder one — travel: Ich fahre (morgen) (mit dem Zug) (nach Berlin). Ladder two — household: Ich stelle das Glas (jetzt) (auf den Tisch) (in der Küche). Ladder three — origins: Sie? — Er kommt (heute) (aus der Stadt). Ladder four — paths: Wir wandern (am Morgen) (durch den Park). Ladder five — position: Das Buch liegt (noch) (auf dem Tisch) (im Haus). Each ladder: verb first in neutral order, phrases in TeKaMoLo, cases decided by each preposition's own law. Chain two ladders with und and you are writing paragraphs.",
      footnotes: [],
      linguist_note:
        "The dative contractions carry the ladders: im Haus, zum Bahnhof? hint — (bahnhof untaught), zur Stadt? — zur Schule untaught; keep im/zum/vom: vom = von + dem. Three contractions, three ladders, no declension tables needed.",
    },
    exercises: [
      {
        id: "l2703_e1",
        type: "shift_select",
        prompt: "TeKaMoLo order: 'Ich fahre _____ nach Berlin.' (tomorrow + by train — which order?):",
        options: ["morgen mit dem Zug (Time before Manner)", "mit dem Zug morgen", "mit morgen dem Zug", "dem Zug mit morgen"],
        target_answer: "morgen mit dem Zug (Time before Manner)",
        meaning: "Ich fahre morgen mit dem Zug nach Berlin",
        explanation: "TeKaMoLo: Time (morgen) before Manner (mit dem Zug) before Location (nach Berlin). The locations stack the same way: am Fluss, auf dem Markt, an der Wand — place, then place, then place.",
      },
      {
        id: "l2703_e2",
        type: "matching_pairs",
        prompt: "Match each ladder with its case logic:",
        matching_pairs: [
          { id: "sl1", english: "by train (manner — dative)", german: "mit dem Zug" },
          { id: "sl2", english: "out of the house (origin — dative)", german: "aus dem Haus" },
          { id: "sl3", english: "through the city (path — accusative)", german: "durch die Stadt" },
          { id: "sl4", english: "onto the table (motion — accusative)", german: "auf den Tisch" },
          { id: "sl5", english: "to the harbor (destination — dative)", german: "zum Hafen" },
          { id: "sl6", english: "through the forest (path — accusative)", german: "durch den Wald" },
          { id: "sl7", english: "on the square (location — dative)", german: "auf dem Platz" },
        ],
        target_answer: "mit dem Zug, aus dem Haus, durch die Stadt, auf den Tisch, zum Hafen, durch den Wald, auf dem Platz",
        meaning: "seven case laws in seven phrases",
        explanation: "Each preposition carries its own case law — the ladder is independent laws stacked. der Hafen and dem Wald report the same verb differently.",
      },
      {
        id: "l2703_e3",
        type: "shift_select",
        prompt: "Contract it: 'Ich komme aus _____ Haus.' (aus + dem):",
        options: ["vom", "dem", "zum", "im"],
        target_answer: "dem",
        meaning: "Ich komme aus dem Haus",
        explanation: "aus does not contract — dem stays full. Only zu, von, in, an contract (zum, vom, im, ins...). Know your contractions! unter der Brücke — no contraction either; the bridge keeps its full dative.",
      },
      {
        id: "l2703_e4",
        type: "reverse_cognate",
        prompt: "What contraction hides in 'im Haus'?",
        target_answer: "in dem",
        meaning: "im = in + dem (dative location)",
        explanation: "im is the dative contraction — 'in the house' at rest. The contraction reports the case before you finish the phrase.",
      },
      {
        id: "l2703_e5",
        type: "syntax_builder",
        prompt: "Assemble the full ladder: 'Tomorrow I travel by train to Berlin'",
        target_answer: "Morgen fahre ich mit dem Zug nach Berlin",
        meaning: "Tomorrow I travel by train to Berlin",
        word_bank: ["Morgen", "fahre", "ich", "mit", "dem", "Zug", "nach", "Berlin"],
        explanation: "Fronted Time (1), verb (2), subject (3), Manner (mit dem Zug), Location (nach Berlin) — the complete TeKaMoLo ladder with V2.",
      },
    ],
    summary: {
      outcome: "Chain prepositional phrases in TeKaMoLo order with correct case laws.",
      use_example: { german: "Morgen fahre ich mit dem Zug nach Berlin.", english: "Tomorrow I travel by train to Berlin." },
      takeaway: "Time, Manner, Place — each phrase with its own case law, stacked on a V2 spine. The last drill; the sentences build themselves now.",
      curiosity_teaser: "Next: verb families & root radiations — one root, many words: fahren/Fahrt, ziehen/Zug, like stand/understand.",
    },
  },

  {
    id: 2003,
    slug: "dative-verbs-helfen-danken-gefallen",
    title: "Dative Verbs: helfen, danken, gefallen",
    subtitle: "The club that refuses the accusative — contrasted with topic 10's Him-Case verbs",
    phase: 3,
    shift_categories: [],
    word_ids: ["helfen", "danken", "gefallen", "geben", "sehen", "finden", "mir", "dir", "schmecken", "wünschen", "glück", "mut", "wunsch"],
    table_word_ids: ["helfen", "danken", "gefallen", "geben", "sehen", "finden"],
    hook: {
      title: "The Two Clubs",
      content:
        "German verbs sort into two clubs, and the membership is non-negotiable. The accusative club — helfen? no: sehen, finden, nehmen — acts directly ON things: Ich sehe ihn, Ich finde das Buch. The dative club — helfen, danken, gefallen, geben — works TOWARD someone: Ich helfe dir, Ich danke dir, Es gefällt mir. English grammar pretends the distinction does not exist ('help him', 'thank him' — both objects). German grammar knows better: helping is done TO someone, thanking goes TO someone, pleasing falls TO someone. Learn the club rosters and the dative stops being a case and becomes common sense.",
      footnotes: [
        {
          marker: "1",
          title: "The Full Dative Roster",
          content:
            "helfen (help), danken (thank), gefallen (please), gehören (belong to), folgen (follow), passen (suit), schmecken (taste-good-to), fehlen (be-missing-to), antworten (answer-to), glauben (believe someone!). Notice the pattern: all involve a receiver, a responder, or an experiencer — the dative is the case of being-affected.",
        },
      ],
    },
    pattern: {
      title: "The Contrast Pairs",
      content:
        "Pair one: Ich sehe IHN (sehen acts on him — accusative) versus Ich helfe IHM (helping goes to him — dative). Pair two: Ich finde DAS BUCH (direct find) versus Das Buch gefällt MIR (the book pleases TO me). Pair three: geben plays BOTH sides — Ich gebe IHN? no: Ich gebe ES ihm: the thing given is accusative (es), the receiver is dative (ihm) — the double-object verb. The memory aid: ask 'does the verb transfer, respond, or affect?' Transfer (geben, schicken) and respond (danken, antworten, folgen) and affect-from-outside (helfen, gefallen, schmecken, passen) → dative receiver.",
      footnotes: [],
      linguist_note:
        "English once agreed: 'help' was dative in Old English (ic helpe þē — I help TO-thee), and 'me seems', 'it pleases me (to)' are the fossils. The dative verbs are simply the oldest verbs, preserving the oldest case.",
    },
    exercises: [
      {
        id: "l2003_e1",
        type: "matching_pairs",
        prompt: "The contrast — match each verb with its case demand:",
        matching_pairs: [
          { id: "dv1", english: "helfen + DATIVE (help to)", german: "Ich helfe dir" },
          { id: "dv2", english: "sehen + ACCUSATIVE (see him)", german: "Ich sehe ihn" },
          { id: "dv3", english: "danken + DATIVE (thank to)", german: "Ich danke dir" },
          { id: "dv4", english: "gefallen + DATIVE (please to)", german: "Es gefällt mir" },
          { id: "dv5", english: "schmecken + DATIVE (taste to me)", german: "Es schmeckt mir" },
        ],
        target_answer: "Ich helfe dir, Ich sehe ihn, Ich danke dir, Es gefällt mir, Es schmeckt mir",
        meaning: "I help you, I see him, I thank you, it pleases me, it tastes good to me",
        explanation: "Two clubs: acting-on takes accusative (ihn), acting-toward takes dative (dir/mir) — and schmecken is the tasting club's newest member.",
      },
      {
        id: "l2003_e2",
        type: "shift_select",
        prompt: "Club check: 'Ich folge _____ Mann.' (I follow the man — folgen!):",
        options: ["dem (dative — folgen demands it)", "den (accusative)", "der", "das"],
        target_answer: "dem (dative — folgen demands it)",
        meaning: "Ich folge dem Mann = I follow the man (to-the-man)",
        explanation: "folgen joined the dative club — following goes TO the followed. dem Mann, never den Mann. wünschen joined too: Ich wünsche dir Glück — the wish aims at its receiver.",
      },
      {
        id: "l2003_e3",
        type: "shift_select",
        prompt: "The double-object verb: 'Gib _____ das Buch!' (give HIM the book — receiver):",
        options: ["ihm (dative receiver)", "ihn (accusative — wrong club)", "ihren", "seine"],
        target_answer: "ihm (dative receiver)",
        meaning: "Gib ihm das Buch = Give him the book",
        explanation: "geben plays both sides: the thing given is accusative, the receiver is dative — ihm, the 'give it him' fossil.",
      },
      {
        id: "l2003_e4",
        type: "reverse_cognate",
        prompt: "Which dative-club verb is the twin of English 'follow'?",
        target_answer: "folgen",
        meaning: "follow ↔ folgen (follows = ge-folgt)",
        explanation: "Same verb, same dative demand — English 'follow' once took a dative too ('follow me' was 'follow TO-me' in feel).",
      },
      {
        id: "l2003_e5",
        type: "literal_gloss",
        prompt: "Which English is built the German way?",
        german: "Ich sehe ihn, und ich helfe ihm.",
        natural: "I see him, and I help him.",
        options: ["I see him, and I help him.", "I see to-him, and I help to-him.", "I see him, and I help to-him."],
        target_answer: "I see him, and I help to-him.",
        meaning: "I see him, and I help him.",
        explanation: "One letter apart, two clubs: sehen acts ON him (ihn, accusative), helfen acts TO him (ihm, dative). Read it the German way — 'help to-him' — and the case stops being invisible.",
      },
    ],
    summary: {
      outcome: "Roster the dative verbs and contrast them with accusative verbs in pairs.",
      use_example: { german: "Ich sehe ihn, und ich helfe ihm.", english: "I see him (acc), and I help him (dat)." },
      takeaway: "helfen, danken, gefallen, folgen, gehören — the dative club acts TOWARD; sehen, finden, nehmen act ON.",
      curiosity_teaser: "Next: compound noun engineering — Handschuh is hand-shoe: German builds words like Lego, and so did English.",
    },
  },

  {
    id: 5061,
    slug: "speak-hands-for-me",
    title: "Speak, Hands, for Me!",
    subtitle: "The du-command is the bare stem: Komm! Lern! Iss! — the imperative you already own",
    phase: 2,
    shift_categories: [],
    word_ids: ["kommen", "gehen", "essen", "sprechen", "helfen", "lernen", "trinken", "machen"],
    table_word_ids: ["kommen", "gehen", "essen", "sprechen", "helfen"],
    hook: {
      title: "The Command You Already Give",
      content:
        "Here is a secret: you have been commanding in German your whole life. When you say Speak! or Come here! or Help! — no do-support, no subject, just the bare verb — you are using the ancient Germanic imperative, word for word. German never changed the deal: Komm! Geh! Lern! The du-command is simply the stem with nothing attached — the same weapon Shakespeare's Casca grabs when he shouts 'Speak, hands, for me!' seconds before Caesar falls. English trimmed its endings away; German kept the kit, including a fossil you will recognize: Komm! can wear an optional -e (Komme!), the same final -e that once ended every English command.",
      footnotes: [
        {
          marker: "1",
          title: "Speak, Hands, for Me!",
          content:
            "Julius Caesar, Act 3, Scene 1: as the conspirators close in, Casca cries 'Speak, hands, for me!' — a bare-stem imperative with no auxiliary. The line is a working demonstration that English's command form is the same construction as Komm! and Sprich!.",
        },
      ],
    },
    pattern: {
      title: "The Bare Stem — and the Vowel That Stays",
      content:
        "The rule is one step: strip -en, and what is left IS the command — lernen → Lern! kommen → Komm! gehen → Geh! trinken → Trink! machen → Mach! No ending, no pronoun. Now the twist you already know from the Thou -st Circuit: verbs whose du-form changes its vowel keep the changed vowel in the command — essen: du isst → Iss! sprechen: du sprichst → Sprich! helfen: du hilfst → Hilf! The command simply borrows whatever stem the du-form uses. (geben will join this club with gib in topic 19.) One warning, honestly: verbs that only UMLAUT in the du-form (du fährst) drop the dots for the command — the command is plain Fahr! The umlaut rides with the -st, not with the stem.",
      footnotes: [
        {
          marker: "2",
          title: "The Optional -e",
          content:
            "Komm! and Komme! are both correct — the -e is an older, more formal flavor that survives in songs, poetry and Luther's Bible. English once had the same choice: 'Hear me!' and 'Hear ye!' — and Old English commands ended in the very same -e.",
        },
      ],
    },
    exercises: [
      {
        id: "l5061_e1",
        type: "matching_pairs",
        prompt: "Match each English command with its German twin:",
        matching_pairs: [
          { id: "im1", english: "come!", german: "Komm!" },
          { id: "im2", english: "go!", german: "Geh!" },
          { id: "im3", english: "eat!", german: "Iss!" },
          { id: "im4", english: "speak!", german: "Sprich!" },
        ],
        target_answer: "Komm, Geh, Iss, Sprich",
        meaning: "come, go, eat, speak — as commands",
        explanation: "The command is the bare stem: komm-, geh- — and the e→i stem-changers (Iss!, Sprich!) keep their changed vowel, exactly like their du-forms.",
      },
      {
        id: "l5061_e2",
        type: "shift_select",
        prompt: "Command one friend to eat. Du isst — so you say:",
        options: ["Iss!", "Isst!", "Esst!", "Essen Sie!"],
        target_answer: "Iss!",
        meaning: "Iss! = eat! (to one friend)",
        explanation: "essen's du-form is du isst (e→i) — the command keeps that vowel: Iss! The other forms belong to ihr (Esst!) and Sie (Essen Sie!).",
      },
      {
        id: "l5061_e3",
        type: "morpheme_tiles",
        prompt: "Assemble the command with its object: 'Sprich Deutsch'",
        tile_options: ["Sprich", "Deutsch", "st", "en", "t"],
        target_answer: "Sprich Deutsch",
        meaning: "speak! (German) — speak German!",
        explanation: "sprechen keeps its e→i vowel in the command: Sprich! — the same stem you drilled in du sprichst.",
      },
      {
        id: "l5061_e4",
        type: "derive",
        prompt: "helfen takes dative even in a command. Command form of helfen (help!):",
        english_hint: "du hilfst, minus the -st",
        target_answer: "Hilf",
        meaning: "Hilf mir! = help me!",
        explanation: "du hilfst → Hilf! — the e→i vowel stays. helfen still demands its dative: Hilf mir!",
      },
      {
        id: "l5061_e5",
        type: "syntax_builder",
        prompt: "Assemble the command chain: 'Come and drink tea'",
        target_answer: "Komm und trink Tee",
        meaning: "Komm und trink Tee = come and drink tea",
        vocab_hints: [
          { word: "trink", translation: "drink! (command form)", note: "bare stem of trinken — no ending, no pronoun" },
        ],
        word_bank: ["Komm", "und", "trink", "Tee"],
        explanation: "Two bare-stem commands chained with und — the way real German dialogue strings orders: Komm! Trink!",
      },
    ],
    summary: {
      outcome: "Form du-commands as bare stems, keeping the e→i vowel of stem-changers.",
      use_example: { german: "Komm und trink Tee!", english: "Come and drink tea!" },
      takeaway: "The du-command is the stem: Lern! Komm! — and stem-changers keep their vowel: Iss! Sprich! Hilf!",
      curiosity_teaser: "Next: Kommen Sie! Kommt! — the formal and the plural imperatives, plus the one irregular command, Sei!.",
    },
  },

  {
    id: 5062,
    slug: "kommen-sie-kommt",
    title: "Kommen Sie! Kommt!",
    subtitle: "The formal Sie-command (verb first, Sie after) and the plural ihr-command",
    phase: 2,
    shift_categories: [],
    word_ids: ["kommen", "machen", "trinken", "sprechen", "sein", "essen"],
    table_word_ids: ["kommen", "machen", "trinken", "sein", "essen"],
    hook: {
      title: "Three Ways to Order Somebody",
      content:
        "English commands everybody with one word: come! German refuses. One friend gets Komm!; two friends get Kommt!; a stranger gets Kommen Sie! — and that last one is the strangest, because it is really a statement about 'they': the polite Sie is the old third-person plural, so the command says, in effect, 'let the honored they come.' Verb first, Sie second — it looks like a question with the question mark politely removed, and that is almost exactly its history. English once ran the same split: 'go thou' to one, 'go ye' to many — the King James Bible is full of the plural form. German still lives in that world.",
      footnotes: [
        {
          marker: "1",
          title: "The Question With the Mark Removed",
          content:
            "Wollen Sie kommen? ('do you want to come?') drops wollen and its question mark: Kommen Sie! The polite command is built on the scaffolding of the polite question — which is why it sounds so courtly.",
        },
      ],
    },
    pattern: {
      title: "The Full Command Table",
      content:
        "ihr-commands: take the ihr ending -t and nothing else — Kommt! Macht! Trinkt! Esst! (essen keeps its vowel: du isst, ihr esst, command Esst!). The Sie-command: the 3rd-person-plural form, verb FIRST, Sie after — Kommen Sie! Machen Sie! Trinken Sie! Sprechen Sie! The irregular one: sein. Its commands are pure history: Sei! (du), Seid! (ihr), Seien Sie! (formal) — the old *bʰu- root wearing command clothes. And the stem-changers hold their line in all three columns: Iss! Esst! Essen Sie! — Hilf! Helft! Helfen Sie!",
      footnotes: [],
      linguist_note:
        "Sei ↔ be: the German command of sein comes from the same Proto-Germanic *bʰu- root as English be (OE bēo!). 'Be good!' and 'Sei gut!' are one command, split by two thousand years of drift.",
    },
    exercises: [
      {
        id: "l5062_e1",
        type: "matching_pairs",
        prompt: "Match each command to the audience it addresses:",
        matching_pairs: [
          { id: "fc1", english: "come! (one friend)", german: "Komm!" },
          { id: "fc2", english: "come! (two friends)", german: "Kommt!" },
          { id: "fc3", english: "come! (formal)", german: "Kommen Sie!" },
          { id: "fc4", english: "be! (one friend)", german: "Sei!" },
        ],
        target_answer: "Komm, Kommt, Kommen Sie, Sei",
        meaning: "du, ihr, Sie, and the irregular sein command",
        explanation: "Bare stem for du, -t for ihr, verb-first + Sie for formal — and sein refuses all three patterns: Sei! Seid! Seien Sie!",
      },
      {
        id: "l5062_e2",
        type: "shift_select",
        prompt: "A waiter invites a customer to drink: '_____ Sie ein Glas Wein!'",
        options: ["Trinken", "Trink", "Trinkt", "Getrunken"],
        target_answer: "Trinken",
        meaning: "Trinken Sie! = drink! (formal)",
        explanation: "The Sie-command uses the 3rd-person-plural form, verb first: Trinken Sie! — never Trink Sie.",
      },
      {
        id: "l5062_e3",
        type: "shift_select",
        prompt: "Command two friends to eat:",
        options: ["Esst!", "Iss!", "Essen Sie!", "Ess!"],
        target_answer: "Esst!",
        meaning: "Esst! = eat! (ihr)",
        explanation: "essen's vowel keeps its e→i shift through the table: du isst, ihr esst — command Esst! The -t ending rides on the shifted stem.",
      },
      {
        id: "l5062_e4",
        type: "morpheme_tiles",
        prompt: "Assemble the ihr-command with its object: 'Macht das'",
        tile_options: ["Macht", "das", "st", "en", "t"],
        target_answer: "Macht das",
        meaning: "do! (ihr) — do that!",
        explanation: "machen → ihr-command Macht! — the same -t you drilled as the ihr ending, now giving orders.",
      },
      {
        id: "l5062_e5",
        type: "syntax_builder",
        prompt: "Assemble the formal command: 'Sprechen Sie Deutsch'",
        target_answer: "Sprechen Sie Deutsch",
        meaning: "Sprechen Sie Deutsch = speak German (formal)",
        vocab_hints: [
          { word: "Sie", translation: "you (formal)", note: "the polite 'they' — verb first, Sie second" },
        ],
        word_bank: ["Sprechen", "Sie", "Deutsch"],
        explanation: "Verb first, Sie second: Kommen Sie, Machen Sie, Sprechen Sie — the courtly scaffolding of the polite question, minus the question.",
      },
    ],
    summary: {
      outcome: "Command all three audiences: bare stem (du), -t (ihr), verb-first + Sie (formal) — plus Sei!.",
      use_example: { german: "Kommen Sie herein und trinken Sie Tee!", english: "Come in and drink tea! (formal)" },
      takeaway: "Komm! / Kommt! / Kommen Sie! — three audiences, three forms; sein answers only Sei! Seid! Seien Sie!.",
      curiosity_teaser: "Next: commands in the wild — recipes, dialogues and the register switch, where German drops even the verb's subject.",
    },
  },

  {
    id: 5063,
    slug: "commands-in-the-wild",
    title: "Commands in the Wild",
    subtitle: "Recipes, dialogues and the register switch — where German commands go native",
    phase: 2,
    shift_categories: [],
    word_ids: ["kochen", "essen", "trinken", "machen", "kommen", "suchen", "brot", "tee"],
    table_word_ids: ["kochen", "essen", "trinken", "machen", "tee"],
    hook: {
      title: "The Recipe's Dirty Secret",
      content:
        "Open a German cookbook and the commands get lazier — and more ancient. Real recipes skip the pronoun and often the finiteness too: Wasser kochen, Tee machen, Brot essen — 'water to-boil, tea to-make, bread to-eat.' That bare infinitive parade is a command with the stem exposed, the same stripped form you drilled as Komm! — just wearing its infinitive coat. English recipes do the mirror move: 'boil water, add salt, stir.' The command is the oldest sentence shape humans own, and in the wild — recipes, signs, dialogues — German simply lets it run.",
      footnotes: [
        {
          marker: "1",
          title: "bitte — the Softener",
          content:
            "Bitte (please — literally 'ask/bid', the twin hiding in English bid) converts any command from order to request: Komm! vs Komm, bitte! English once did the same with pray: 'pray come in' → 'prithee' → modern please. Both languages ask politely by mentioning the asking.",
        },
      ],
    },
    pattern: {
      title: "Two Registers, One Stem",
      content:
        "Friend register: Komm! Trink Tee! Iss Brot! — bare-stem commands, chained with und: Komm und iss! Recipe register: Wasser kochen, Tee machen, Kaffee trinken — infinitive-style commands with no pronoun at all, the register of cookbooks and instruction manuals. Formal register: Essen Sie! Trinken Sie! — the verb-first Sie-command. The same stems serve all three: kochen, essen, trinken, machen, kommen, suchen — switch audience, keep the stem. One honest gap: negative commands need nicht, which arrives with topic 12 — komm nicht! waits one topic down the trail.",
      footnotes: [],
      linguist_note:
        "The recipe infinitive is a survival of the old Gerundium: medieval German recipes were written as noun-verb pairs ('zu machene' — to make). English once did it too — 'to make a pie: take flour' — before the imperative took over the kitchen.",
    },
    exercises: [
      {
        id: "l5063_e1",
        type: "matching_pairs",
        prompt: "The recipe list — match each step with its reading:",
        matching_pairs: [
          { id: "rc1", english: "boil water (recipe style)", german: "Wasser kochen" },
          { id: "rc2", english: "make tea (recipe style)", german: "Tee machen" },
          { id: "rc3", english: "drink coffee (recipe style)", german: "Kaffee trinken" },
          { id: "rc4", english: "eat bread (recipe style)", german: "Brot essen" },
        ],
        target_answer: "Wasser kochen, Tee machen, Kaffee trinken, Brot essen",
        meaning: "boil water, make tea, drink coffee, eat bread",
        explanation: "Recipe style: noun then bare infinitive, no pronoun — a command with the stem exposed.",
      },
      {
        id: "l5063_e2",
        type: "shift_select",
        prompt: "Which line sounds like it came from a German cookbook?",
        options: ["Wasser kochen und Tee machen", "Du kochst Wasser", "Ich koche Wasser", "Kochst du Wasser?"],
        target_answer: "Wasser kochen und Tee machen",
        meaning: "Recipe register: noun + bare infinitive",
        explanation: "Recipes drop the subject entirely: Wasser kochen, Tee machen — the stem parade.",
      },
      {
        id: "l5063_e3",
        type: "morpheme_tiles",
        prompt: "Assemble the friend-command: 'Trink Tee'",
        tile_options: ["Trink", "Tee", "st", "en", "t"],
        target_answer: "Trink Tee",
        meaning: "drink! tea — drink tea! (to a friend)",
        explanation: "Bare stem + object: Trink Tee! — the du-command with nothing attached.",
      },
      {
        id: "l5063_e4",
        type: "derive",
        prompt: "Formal register: essen → _____ Sie (serve a guest):",
        english_hint: "the 3rd-person-plural form, verb first",
        target_answer: "Essen",
        meaning: "Essen Sie! = eat! (formal)",
        explanation: "The Sie-command borrows the they-form: Essen Sie! — essen keeps its e→i vowel only in du (isst) and ihr (esst).",
      },
      {
        id: "l5063_e5",
        type: "syntax_builder",
        prompt: "Assemble the dialogue line: 'Come and eat bread'",
        target_answer: "Komm und iss Brot",
        meaning: "Komm und iss Brot = come and eat bread",
        vocab_hints: [
          { word: "iss", translation: "eat! (command form)", note: "essen's du-form isst — the command keeps the i" },
        ],
        word_bank: ["Komm", "und", "iss", "Brot"],
        explanation: "Two commands chained with und — and iss keeps its shifted vowel, the stem-changer in action.",
      },
    ],
    summary: {
      outcome: "Deploy commands in three registers: friend (Komm!), recipe (Wasser kochen), formal (Essen Sie!).",
      use_example: { german: "Komm, bitte, und iss Brot!", english: "Come, please, and eat bread!" },
      takeaway: "One stem, three registers: Komm! / Wasser kochen / Kommen Sie! — the command is German's oldest sentence shape.",
      curiosity_teaser: "Next: the accusative Him-Case — why only der changes to den, and how English him and whom prove it.",
    },
  },

  {
    id: 1904,
    slug: "hatte-war-fortress-pasts",
    title: "hatte & war: The Fortress Pasts",
    subtitle: "haben and sein keep their simple pasts: hatte ↔ had, war ↔ was — the -te is your -ed",
    phase: 3,
    shift_categories: [],
    word_ids: ["haben", "sein", "gestern", "kind", "haus", "kaffee", "jung", "stark", "schwach", "gesund", "fallen", "springen", "treten", "schlagen", "stehlen"],
    table_word_ids: ["haben", "sein", "gestern", "kind"],
    hook: {
      title: "The Two Verbs That Never Surrendered",
      content:
        "Topic 18 handed you the Perfekt — ge- participles closing brackets everywhere. But two verbs refused the surrender. Nobody says 'ich habe gehabt' for 'I had', and nobody says 'ich bin gewesen' for 'I was'. Speech keeps the old simple pasts: ich hatte, ich war. These are the fortress verbs — the last place the ancient past tense lives in daily German. And the ending on the fortress wall spells its own history: hatte ↔ had. That -te is the same dental suffix as your -ed (Old English hæfde — 'I had' — ends in -de). German never stopped conjugating with the ending English still wears.",
      footnotes: [
        {
          marker: "1",
          title: "The Dental Suffix",
          content:
            "The weak-past ending -te (machte, sagte, hatte) and the English -ed are one and the same Proto-Germanic dental suffix *-dē. English wore it as -ed/-d, German as -te — machte ↔ made is not a coincidence but a shared inheritance doing paperwork.",
        },
      ],
    },
    pattern: {
      title: "The Fortress Wall, Person by Person",
      content:
        "haben: ich hatte ↔ I had, du hattest ↔ thou hadst, er hatte ↔ he had, wir hatten ↔ we had. sein: ich war ↔ I was, du warst ↔ thou wast, er war ↔ he was, wir waren ↔ we were. The storytelling frames: Gestern hatte ich keine Zeit (yesterday I had no time). Das Haus war alt (the house was old). Wir waren in Berlin (we were in Berlin). One honest note: the Perfekt forms exist — gehabt, gewesen — and appear in formal writing; but in speech the fortress holds. habe gehabt is a construction you will hear only in drills and apologies.",
      footnotes: [],
      linguist_note:
        "war ↔ was is the *wes- root from the sein lesson's three-verb trench coat — and hattest ↔ hadst is the same -st you have drilled since the Shakespeare lesson, riding on the dental suffix. Two histories, one ending.",
    },
    exercises: [
      {
        id: "l1904_e1",
        type: "matching_pairs",
        prompt: "The fortress wall — match each English past with its German twin:",
        matching_pairs: [
          { id: "fp1", english: "I had", german: "ich hatte" },
          { id: "fp2", english: "I was", german: "ich war" },
          { id: "fp3", english: "thou hadst", german: "du hattest" },
          { id: "fp4", english: "we were", german: "wir waren" },
          { id: "fp5", english: "I was young", german: "ich war jung" },
          { id: "fp6", english: "we were healthy", german: "wir waren gesund" },
        ],
        target_answer: "ich hatte, ich war, du hattest, wir waren, ich war jung, wir waren gesund",
        meaning: "I had, I was, thou hadst, we were, I was young, we were healthy",
        explanation: "hatte ↔ had (one dental suffix, -te ↔ -ed) and war ↔ was — the fortress pasts of haben and sein, carrying the storyteller's adjectives: jung, gesund, stark, schwach.",
      },
      {
        id: "l1904_e2",
        type: "shift_select",
        prompt: "Storytelling check: 'Gestern _____ ich keine Zeit.' (yesterday I HAD no time):",
        options: ["hatte", "habe", "war", "hat"],
        target_answer: "hatte",
        meaning: "Gestern hatte ich keine Zeit",
        explanation: "Speech keeps the simple past: hatte, never habe gehabt. The fortress verb does its own storytelling.",
      },
      {
        id: "l1904_e3",
        type: "derive",
        prompt: "Say where you were yesterday: 'Du _____ gestern in Berlin.' (you were):",
        english_hint: "war + the Shakespearean -st",
        target_answer: "warst",
        meaning: "Du warst gestern in Berlin = you were in Berlin yesterday",
        explanation: "du warst ↔ thou wast — the *wes- root with the -st ending, both words ancient in both languages. And the strong pasts pair with war in every story: fallen fiel, springen sprang, treten trat, schlagen schlug, stehlen stahl.",
      },
      {
        id: "l1904_e4",
        type: "reverse_cognate",
        prompt: "Which English word is the true twin of 'hatte'?",
        target_answer: "had",
        meaning: "hatte ↔ had (the shared dental suffix -te ↔ -ed)",
        explanation: "Old English hæfde — 'had' — wears the same dental past suffix as hatte. The fortress pasts are one fortress.",
      },
      {
        id: "l1904_e5",
        type: "syntax_builder",
        prompt: "Assemble the storyteller's line: 'Yesterday I had no time'",
        target_answer: "Gestern hatte ich keine Zeit",
        meaning: "Gestern hatte ich keine Zeit = yesterday I had no time",
        vocab_hints: [
          { word: "hatte", translation: "had", note: "haben's simple past — the fortress form" },
          { word: "keine", translation: "no / not any", note: "kein before a noun — the none-word" },
        ],
        word_bank: ["Gestern", "hatte", "ich", "keine", "Zeit"],
        explanation: "Gestern fronts the adverb, hatte holds position 2 — the fortress past running a verb-second main clause.",
      },
    ],
    summary: {
      outcome: "Tell yesterday's story with hatte and war, and explain why habe gehabt never shows up in speech.",
      use_example: { german: "Gestern hatte ich keine Zeit, aber der Kaffee war gut.", english: "Yesterday I had no time, but the coffee was good." },
      takeaway: "hatte ↔ had and war ↔ was: the -te/-ed dental suffix shared, the fortress pasts of haben und sein.",
      curiosity_teaser: "Next: konnte & musste — the frozen pasts of the modals, English's own could/should/would.",
    },
  },

  {
    id: 1905,
    slug: "konnte-musste-frozen-pasts",
    title: "konnte, musste & the Frozen Pasts",
    subtitle: "The preterite-present modals: konnte↔could, musste↔must — English froze their pasts into presents",
    phase: 3,
    shift_categories: [],
    word_ids: ["können", "müssen", "dürfen", "sollen", "wollen", "wissen", "wünschen", "schlagen", "stehlen", "jung", "stark", "schwach", "gesund"],
    table_word_ids: ["können", "müssen", "dürfen", "sollen"],
    hook: {
      title: "Pasts Wearing Present Clothes",
      content:
        "The six modal verbs are linguistic fossils with a scientific name: preterite-presents. Thousands of years ago their -te forms WERE past tenses — 'I could' meant 'I have been able'. Speakers re-read those pasts as presents, and the modals have lived in the present ever since. English did the exact same freeze and never thawed it: can and could are the same ancient word in two tenses, so are shall/should and will/would. And must? Must IS the old past tense of 'to matter' — grammatically a past that never left. German kept the whole system running: the modals' past tense is rebuilt with the ordinary dental -te — konnte, musste, durfte, sollte, wollte, wusste — one stem for every person, no vowel games at all.",
      footnotes: [
        {
          marker: "1",
          title: "wist: the KJV Fossil",
          content:
            "English kept one frozen past as late as 1611: the King James Bible's 'they knew not nor wist' — wist is the old past of wit 'to know', the exact twin of German wusste. German wisst (you all know) and wissen still wear the same s that English buried.",
        },
      ],
    },
    pattern: {
      title: "One Weak Past, Six Ways",
      content:
        "können → konnte ↔ could; müssen → musste ↔ must/had to; dürfen → durfte ↔ was allowed (archaic English durst!); sollen → sollte ↔ should; wollen → wollte ↔ wanted to; wissen → wusste ↔ knew (wist). Conjugation is boring on purpose: ich/er konnte, du konntest, wir konnten — one past stem for everybody, the dental -te doing all the work. And the bracket rule rides along: the bare infinitive stays at the end — Ich konnte nicht kommen, Ich musste gestern arbeiten, Wir wollten nach Berlin. Watch the trap: wollte (wanted) has one L in the past but wollen has two in the present — du wolltest, never du wolltest with double-t.",
      footnotes: [],
      linguist_note:
        "Preterite-presents go back to Proto-Indo-European perfect forms — old stative 'has-been-able' constructions re-anchored to the present. That is why the modals have no -en infinitive stress and no ge- participle in older speech: they were never ordinary verbs.",
    },
    exercises: [
      {
        id: "l1905_e1",
        type: "matching_pairs",
        prompt: "The frozen pasts — match each German modal past with its English twin:",
        matching_pairs: [
          { id: "fp1", english: "I could / was able", german: "ich konnte" },
          { id: "fp2", english: "I had to", german: "ich musste" },
          { id: "fp3", english: "I wanted to", german: "ich wollte" },
          { id: "fp4", english: "I knew", german: "ich wusste" },
          { id: "fp5", english: "I was allowed", german: "ich durfte" },
        ],
        target_answer: "ich konnte, ich musste, ich wollte, ich wusste, ich durfte",
        meaning: "I could, I had to, I wanted to, I knew, I was allowed",
        explanation: "can/could, shall/should, will/would — English froze the same preterite-presents; musste is must's own frozen past, and durfte wears the weak dental -te like wollte.",
      },
      {
        id: "l1905_e2",
        type: "shift_select",
        prompt: "Bracket check: 'Ich _____ nicht kommen.' (I couldn't come):",
        options: ["konnte", "kann", "können", "konnten"],
        target_answer: "konnte",
        meaning: "Ich konnte nicht kommen = I couldn't come",
        explanation: "ich/er konnte — one past stem for every person, with the bare infinitive stehen at the bracket's end.",
      },
      {
        id: "l1905_e3",
        type: "shift_select",
        prompt: "'Ich _____ gestern arbeiten.' (I had to work yesterday):",
        options: ["musste", "muss", "müssen", "musst"],
        target_answer: "musste",
        meaning: "Ich musste gestern arbeiten = I had to work yesterday",
        explanation: "must has no living past of its own — but German musste is that past, still working. The adjectives waited outside the bracket: jung, stark, schwach, gesund — they stay present-tense while the verbs freeze.",
      },
      {
        id: "l1905_e4",
        type: "reverse_cognate",
        prompt: "Which archaic English past of 'wit' (to know) is the twin of 'wusste'? (KJV: 'they knew not nor ___')",
        target_answer: "wist",
        meaning: "wusste ↔ wist (the frozen know-past)",
        explanation: "wissen/wusste ↔ wit/wist: the same s-bearing know-verb, and English kept wist alive into the King James Bible. schlagen and stehlen freeze differently — schlug, stahl — the ablaut melodies again.",
      },
      {
        id: "l1905_e5",
        type: "syntax_builder",
        prompt: "Assemble the bracket: 'I couldn't come yesterday'",
        target_answer: "Ich konnte gestern nicht kommen",
        meaning: "Ich konnte gestern nicht kommen = I couldn't come yesterday",
        vocab_hints: [
          { word: "konnte", translation: "could / was able", note: "können's simple past — one stem, all persons" },
        ],
        word_bank: ["Ich", "konnte", "gestern", "nicht", "kommen"],
        explanation: "Modal past in position 2, bare infinitive at the end — the bracket survives the trip into the past intact.",
      },
    ],
    summary: {
      outcome: "Use konnte, musste, durfte, sollte, wollte and wusste, and explain the preterite-present freeze behind English could/should/would.",
      use_example: { german: "Ich wollte kommen, aber ich musste arbeiten.", english: "I wanted to come, but I had to work." },
      takeaway: "The modals are frozen pasts: konnte↔could, musste↔must, sollte↔should, wollte↔would, wusste↔wist — one weak -te past, one stem.",
      curiosity_teaser: "Next: the dative case — methinks, mir and the giving case.",
    },
  },

  {
    id: 2403,
    slug: "adjective-endings-articles-echo",
    title: "Adjective Endings: the Article's Echo",
    subtitle: "der kalte Tag vs ein kalter Tag — the adjective only speaks when the article is silent",
    phase: 3,
    shift_categories: [],
    word_ids: ["kalt", "gut", "alt", "schön", "klein", "groß", "lang", "lecker", "neu", "spät", "schnell", "schwer"],
    table_word_ids: ["kalt", "gut", "alt", "schön"],
    hook: {
      title: "One Flag Per Phrase",
      content:
        "German grammar allows exactly ONE flag-carrier per noun phrase — one ending that shouts the case and gender. When der/die/das stands in front, the article carries the flag and the adjective falls silent-ish: der kalt**e** Tag. But ein is a quiet article — it has no ending in the masculine nominative — so the adjective must pick the flag up: ein kalt**er** Tag. That is the whole system: the adjective is the article's echo, speaking only when the article cannot. English ran this same show once — 'the olden days', 'mine host' — and then let the endings go. German never did.",
      footnotes: [
        {
          marker: "1",
          title: "Predicative = No Flag At All",
          content:
            "Der Tag ist kalt — no ending, because the adjective is not INSIDE a noun phrase, it stands alone after ist. The echo only sounds before a noun: der kalte Tag, but der Tag ist kalt. English does exactly the same: 'the cold day' vs 'the day is cold'.",
        },
      ],
    },
    pattern: {
      title: "The 80/20 Echo Rule",
      content:
        "After der/die/das (the loud articles): adjective takes -e in the nominative singular and -en almost everywhere else — der kalte Tag, den kalten Tag, die kalte Nacht, das kalte Wasser. After ein/kein/mein (the quiet articles): the adjective copies the article's missing ending — ein kalt**er** Tag (masc. nom.), ein kalt**es** Wasser (neut. nom./acc.), but ein kalt**en** Tee (masc. acc.), eine kalt**e** Nacht (fem.). The 80/20: when in doubt before ANY noun in real sentences, -en is the safe echo — den kalten Tee, mit einem kalten Getränk, die kalten Hände. Pattern: der gute Wein, ein guter Wein, der alte Kaffee, ein alter Kaffee, die kleine Nacht, eine kleine Nacht.",
      footnotes: [],
      linguist_note:
        "The two declensions are the living remains of the older demonstrative system: der/die/das and dieser/jener carry their own case endings (they ARE the old demonstratives), so the adjective never needs to double up. Ein is historically 'one' — a bare numeral with no flag — so the adjective is drafted to carry it.",
    },
    exercises: [
      {
        id: "l2403_e1",
        type: "matching_pairs",
        prompt: "Match each noun phrase with who carries the case flag:",
        matching_pairs: [
          { id: "ae1", english: "the cold day (article's flag)", german: "der kalte Tag" },
          { id: "ae2", english: "a cold day (adjective's flag)", german: "ein kalter Tag" },
          { id: "ae3", english: "the cold water (article's flag)", german: "das kalte Wasser" },
          { id: "ae4", english: "a cold water (adjective's flag)", german: "ein kaltes Wasser" },
        ],
        target_answer: "der kalte Tag, ein kalter Tag, das kalte Wasser, ein kaltes Wasser",
        meaning: "the cold day, a cold day, the cold water, a cold water",
        explanation: "After der/die/das the adjective rests (-e); after ein it echoes the article's missing -er/-es. lecker (delicious — lick's cousin) rests to -e after der: der leckere Kuchen; neu goes strong after ein: ein neues Auto.",
      },
      {
        id: "l2403_e2",
        type: "shift_select",
        prompt: "'Ich nehme ein _____ Bier.' (a cold beer — ein is quiet, so who speaks?):",
        options: ["kaltes", "kalte", "kalter", "kalten"],
        target_answer: "kaltes",
        meaning: "ein kaltes Bier = a cold beer (neuter: the adjective echoes -es)",
        explanation: "das Bier is neuter; ein shows no ending, so the adjective carries the neuter flag: kaltes. The speed set: ein schneller Zug, ein später Zug — ein goes quiet, the adjective speaks.",
      },
      {
        id: "l2403_e3",
        type: "shift_select",
        prompt: "'Ich trinke den kalt___ Tee.' (the cold tea — masculine accusative):",
        options: ["en", "er", "es", "e"],
        target_answer: "en",
        meaning: "den kalten Tee = the cold tea",
        explanation: "den already flags the accusative loudly, and the adjective echoes it with -en — the 80/20 ending that covers most real sentences. schwer joins the echo: den schweren Kuchen — the dense cake.",
      },
      {
        id: "l2403_e4",
        type: "shift_select",
        prompt: "Which noun phrase correctly echoes after the quiet article?",
        options: ["ein alter Kaffee", "ein alte Kaffee", "ein altes Kaffee", "ein alten Kaffee"],
        target_answer: "ein alter Kaffee",
        meaning: "ein alter Kaffee = an old coffee (masculine nominative)",
        explanation: "der Kaffee is masculine; ein is endingless in the nominative, so alt picks up the masculine -er exactly as der would wear it.",
      },
      {
        id: "l2403_e5",
        type: "syntax_builder",
        prompt: "Assemble the phrase pair: 'The old wine is good'",
        target_answer: "Der alte Wein ist gut",
        meaning: "Der alte Wein ist gut = the old wine is good",
        vocab_hints: [
          { word: "alte", translation: "old (before a noun)", note: "alt + -e: the echo after the loud article der" },
        ],
        word_bank: ["Der", "alte", "Wein", "ist", "gut"],
        explanation: "der carries the flag, alte echoes with -e — and predicative gut stays bare, because outside the noun phrase nobody echoes.",
      },
    ],
    summary: {
      outcome: "Choose adjective endings after der/die/das vs ein/kein/mein, using the one-flag principle and the 80/20 -en rule.",
      use_example: { german: "Der kalte Kaffee ist gut, aber ein kalter Tee ist besser.", english: "The cold coffee is good, but a cold tea is better." },
      takeaway: "One flag per phrase: loud articles speak, quiet ein/kein/mein force the adjective to echo (-er/-es), and -en is the 80% default.",
      curiosity_teaser: "Next: no article? the adjective goes strong — kaltes Wasser, heißer Tee: the ending does the article's job alone.",
    },
  },

  {
    id: 5071,
    slug: "first-introductions",
    title: "First Introductions",
    subtitle: "ich heiße ↔ hight, ich komme aus, ich wohne — the first sentences Germans actually speak",
    phase: 1,
    shift_categories: [],
    word_ids: ["heißen", "kommen", "wohnen", "alt", "jahr", "herr", "öl", "tüte", "fabrik", "gymnasium", "rente", "dom", "art", "kaution", "eventuell"],
    table_word_ids: ["heißen", "kommen", "wohnen", "jahr"],
    hook: {
      title: "Hight: the Verb You Already Owned",
      content:
        "Every German course opens with ich heiße — and the verb is an heirloom. Heißen descends from Proto-Germanic *haitaną, 'to call, to be called', and English wore the same verb until Shakespeare's day: archaic hight meant 'is called' — 'a city hight Rome'. Sir Gawain is hight so; your name is heißt so. The rest of the introduction kit is equally old: ich komme aus England (come, already yours), ich wohne in Berlin (the live/reside verb — no English twin, an honest memorize), ich bin zwanzig Jahre alt (and Jahr is the exact twin of year). Four formulas, all cognate-tested, and you can introduce yourself for a full minute.",
      footnotes: [
        {
          marker: "1",
          title: "behest: the Command Sibling",
          content:
            "Heißen's family survives in English 'behest' — a bidding or command, literally a 'be-called'. The king's behest is what he calls you to do. Same *haitaną root as heißen, hight, and German Heißt du...?",
        },
      ],
    },
    pattern: {
      title: "The Four Formulas",
      content:
        "1. Ich heiße Anna. — 'I am called Anna'; question form: Wie heißt du? (informal) / Wie heißen Sie? (formal). 2. Ich komme aus England. — come from; the country takes aus with no article: aus Deutschland, aus der Schweiz (feminine keeps hers). 3. Ich wohne in Berlin. — reside; city = bare in, country = in + dative: in Deutschland, in der Schweiz. 4. Ich bin zwanzig Jahre alt. — literally 'I am twenty years old', word for word English. Stack them and the self-introduction builds itself: Ich heiße Anna. Ich komme aus England, und ich wohne jetzt in Berlin.",
      footnotes: [],
      linguist_note:
        "Heißen and hight share the s of *haitaną's present stem — heißt keeps it, hight wore it down. The question 'Wie heißen Sie?' literally asks 'How are you called?', the same logic as archaic 'How are you hight?' — both languages asking for a name by way of a calling.",
    },
    exercises: [
      {
        id: "l5071_e1",
        type: "matching_pairs",
        prompt: "Match each introduction formula with its literal reading:",
        matching_pairs: [
          { id: "fi1", english: "I am called (= my name is)", german: "Ich heiße" },
          { id: "fi2", english: "I come from", german: "Ich komme aus" },
          { id: "fi3", english: "I live / reside in", german: "Ich wohne in" },
          { id: "fi4", english: "I am twenty years old", german: "Ich bin zwanzig Jahre alt" },
          { id: "fi5", english: "The oil is in the bag", german: "Das Öl ist in der Tüte" },
          { id: "fi6", english: "Mister Braun lives here", german: "Herr Braun wohnt hier" },
        ],
        target_answer: "Ich heiße, Ich komme aus, Ich wohne in, Ich bin zwanzig Jahre alt, Das Öl ist in der Tüte, Herr Braun wohnt hier",
        meaning: "my name is, I come from, I live in, I am twenty years old, the oil is in the bag, Mister Braun lives here",
        explanation: "heißen = to be called (hight's twin); wohnen = to reside, with wo as its first syllable; jahr = the year you count yourself in. The age formula is word-for-word English — years old = Jahre alt. The nouns arrive next: Herr in front of the surname, die Fabrik where you work, das Gymnasium where you studied, die Rente, der Dom, die Art, die Kaution and eventuell already in your pocket.",
      },
      {
        id: "l5071_e2",
        type: "shift_select",
        prompt: "'Ich komme _____ Deutschland.' (I come from Germany):",
        options: ["aus", "von", "in", "bei"],
        target_answer: "aus",
        meaning: "Ich komme aus Deutschland = I come from Germany",
        explanation: "aus = out of — origins run through the out-of preposition, and countries stand bare: aus Deutschland.",
      },
      {
        id: "l5071_e3",
        type: "shift_select",
        prompt: "Which archaic English word is the twin of 'heiße'?",
        options: ["hight", "hot", "hallowed", "hest"],
        target_answer: "hight",
        meaning: "heißen ↔ hight = to be called",
        explanation: "'A city hight Rome' = 'a city is called Rome' — same *haitaną, same meaning, one s worn away.",
      },
      {
        id: "l5071_e4",
        type: "reverse_cognate",
        prompt: "'Jahr' is the exact twin of which English word?",
        target_answer: "year",
        meaning: "Jahr ↔ year (Proto-West Germanic *jār)",
        explanation: "Ich bin zwanzig Jahre alt — 'I am twenty years old' — with Jahr/year the twin it has been for two thousand years.",
      },
      {
        id: "l5071_e5",
        type: "syntax_builder",
        prompt: "Assemble the full introduction: 'My name is Anna and I come from Berlin'",
        target_answer: "Ich heiße Anna und ich komme aus Berlin",
        meaning: "Ich heiße Anna und ich komme aus Berlin",
        vocab_hints: [
          { word: "heiße", translation: "am called", note: "ich heiße = my name is — the hight twin" },
          { word: "aus", translation: "from / out of", note: "kommen aus = come from (origin)" },
        ],
        word_bank: ["Ich", "heiße", "Anna", "und", "ich", "komme", "aus", "Berlin"],
        explanation: "Two verb-second clauses joined by und — each clause holds its own verb in position 2, the rule from topic 14 already at work.",
      },
    ],
    summary: {
      outcome: "Introduce yourself with heiße, komme aus, wohne in and the age formula — and explain the heißen/hight twin.",
      use_example: { german: "Ich heiße Anna. Ich komme aus England, und ich wohne in Berlin.", english: "My name is Anna. I come from England, and I live in Berlin." },
      takeaway: "heißen ↔ hight ('to be called'), kommen aus (origins), wohnen in (residence), Jahre alt (age, word for word) — the whole first minute is cognate-built.",
      curiosity_teaser: "Next: the alphabet — W is 'veh', V is 'fow', Z is 'tsett', and buchstabieren spells your name out loud.",
    },
  },

  {
    id: 5072,
    slug: "the-alphabet-and-buchstabieren",
    title: "The Alphabet & buchstabieren",
    subtitle: "W = 'veh', V = 'fow', J = 'yot', Z = 'tsett', ß = 'Eszett' — spell it like a native",
    phase: 1,
    shift_categories: ["latin_ieren"],
    word_ids: ["buchstabieren", "buch", "sprechen", "schreiben", "wort", "buchstabe", "öl", "tüte", "ausziehen"],
    table_word_ids: ["buchstabieren", "buch", "wort"],
    hook: {
      title: "The Letter Names the Shifts Explain",
      content:
        "German letter names are tiny history lessons. W is 'veh' and V is 'fow' — because German V is pronounced [f], the very fact the V→B family is built on. J is 'yot' — the y-sound English split away in the y→g family. Z is 'tsett' — the /ts/ affricate of the T→Z shift, said aloud as a letter name. And ß is 'Eszett' — literally 's-z', the sharp s of Straße. Now the verb for using them: buchstabieren, 'to spell', built on Buchstabe 'letter' — literally a book-staff, the beech-wood stick once used to mark reading passages — plus the -ieren suffix you already own from the Latin Bridge. A native root wearing a Latin suit.",
      footnotes: [
        {
          marker: "1",
          title: "Buchstabe's Wooden Secret",
          content:
            "Buchstabe comes from Old High German buohstabe: buoh (book) + stab (staff, stick — the same word as English stave). Before printing, runes and reading pointers were carved beechwood sticks — Buche is beech — so a 'letter' was literally a book-stave. English kept the wooden cousin in 'stave' and 'staff'.",
        },
      ],
    },
    pattern: {
      title: "Spelling Aloud, the German Way",
      content:
        "The trap letters: W = veh (English V's sound), V = fow (English F's sound), J = yot (English Y's sound), Z = tsett (English TS), ß = Eszett (sharp S). The s you reach for at the start of English words is often German's Sch- or St- in speech: sprechen, schreiben. On the phone, Germans spell with the formula: 'Wie schreibt man das? — Buchstabieren Sie bitte: B wie Berta, E wie Emil...' The verb is regular except for the stress: buchstabieren, ich buchstabiere, past participle buchstabiert — and remember the Latin Bridge rule: no ge- on -ieren verbs.",
      footnotes: [],
      linguist_note:
        "Letter names fossilize pronunciation history: German kept the continental Romance values (V = [f] before it shifted, J = [j]) while English drifted to its own. When you say 'fow' for V, you are pronouncing the medieval consonant system out loud — the same one that makes Vater a [f]-word.",
    },
    exercises: [
      {
        id: "l5072_e1",
        type: "matching_pairs",
        prompt: "Match each German letter with its name:",
        matching_pairs: [
          { id: "ab1", english: "veh", german: "W" },
          { id: "ab2", english: "fow", german: "V" },
          { id: "ab3", english: "yot", german: "J" },
          { id: "ab4", english: "tsett", german: "Z" },
          { id: "ab5", english: "Eszett", german: "ß" },
        ],
        target_answer: "W, V, J, Z, ß",
        meaning: "veh, fow, yot, tsett, Eszett",
        explanation: "V = fow because German V sounds like [f] — the letter name is the V→B family's origin story said out loud.",
      },
      {
        id: "l5072_e2",
        type: "shift_select",
        prompt: "How is the letter V pronounced in German words like 'Vater'?",
        options: ["like English F", "like English V", "like English W", "like English P"],
        target_answer: "like English F",
        meaning: "German V = [f] — hence Vater's [f] and the letter name 'fow'",
        explanation: "German V is the [f] of Vater/Vogel/Vier — which is exactly why Vater is a Verner's-law twin of father, not a V→B word.",
      },
      {
        id: "l5072_e3",
        type: "shift_select",
        prompt: "buchstabieren is built from:",
        options: ["Buchstabe (letter) + -ieren", "Buchstab + einen", "Buch (book) + stabieren", "Buch + Stab + rennen"],
        target_answer: "Buchstabe (letter) + -ieren",
        meaning: "to spell = letter + the Latin-style -ieren suffix",
        explanation: "A Germanic root in a Latin suit: Buchstabe is native (book-staff), -ieren is the productive loan-suffix from the Latin Bridge.",
      },
      {
        id: "l5072_e4",
        type: "reverse_cognate",
        prompt: "Which English verb translates 'buchstabieren'?",
        target_answer: "spell",
        meaning: "buchstabieren = to spell (name the letters)",
        explanation: "No English cognate here — 'spell' is a different word. Buchstabieren must be memorized, but its Buchstabe core makes it transparent.",
      },
      {
        id: "l5072_e5",
        type: "syntax_builder",
        prompt: "Assemble the polite request: 'Can you spell that please?'",
        target_answer: "Kannst du das bitte buchstabieren",
        meaning: "Kannst du das bitte buchstabieren = can you spell that please",
        vocab_hints: [
          { word: "buchstabieren", translation: "to spell", note: "Buchstabe (letter) + -ieren" },
          { word: "Öl", translation: "oil", note: "spelled on the phone as Ö wie Öl — Germans use a familiar word when a letter is hard to name" },
          { word: "Tüte", translation: "bag", note: "T wie Theodor, Ü wie Übermut, T wie Theodor, E wie Emil — the chain that spells the bag you are holding" },
          { word: "ausziehen", translation: "to take off (clothes)", note: "sich ausziehen — reflexive, with the aus- 'out' prefix from topic 15 — and it hides a Z, the tsett-letter from exercise one" },
        ],
        word_bank: ["Kannst", "du", "das", "bitte", "buchstabieren"],
        explanation: "Modal kann in position 2, the -ieren infinitive at the bracket's end — and no ge- ever touches its participle.",
      },
    ],
    summary: {
      outcome: "Recite the trap letter names (veh, fow, yot, tsett, Eszett) and spell your name with buchstabieren.",
      use_example: { german: "Wie schreibt man das? Kannst du das bitte buchstabieren?", english: "How do you write that? Can you spell it please?" },
      takeaway: "The letter names are the shifts made audible: W=veh, V=fow, J=yot, Z=tsett, ß=Eszett — and buchstabieren is Buchstabe + -ieren.",
      curiosity_teaser: "Next: your family tree speaks German — Blood & Kin, where Vater, Mutter and Sohn line up as cognates.",
    },
  },

  {
    id: 5091,
    slug: "blood-and-kin",
    title: "Blood & Kin",
    subtitle: "Vater ↔ father (Verner's law, not V→B), Mutter, Sohn, Tochter — the family as cognate wall",
    phase: 2,
    shift_categories: ["th_to_d", "d_to_t", "y_gh_to_g_ch"],
    word_ids: ["vater", "mutter", "sohn", "schwester", "tochter", "bruder", "eltern", "familie", "buchstabe"],
    table_word_ids: ["vater", "mutter", "sohn", "tochter", "schwester"],
    hook: {
      title: "The Family Reunion Is a Cognate Wall",
      content:
        "The core kin words are almost all exact twins: Mutter/mother (essentially unchanged), Sohn/son (the h was once heard), Bruder/brother (th→d), Schwester/sister (sw→schw), Tochter/daughter (a double-shift showpiece: d→t AND gh→ch). One word wears a warning label: Vater/father is NOT the V→B family — the v in Vater is pronounced [f], and English f ↔ German v=[f] here is Verner's law, the ancient voicing rule that made 'father' and 'Vater' both keep their old f-sound while brothers like geben/give drifted to b. And the parents themselves are a grammar riddle: Eltern is literally 'the elder ones' — a frozen comparative of alt that became the whole word for parents.",
      footnotes: [
        {
          marker: "1",
          title: "Verner's Law in One Breath",
          content:
            "Before the Germanic sound shifts, the f/th/h family voiced between vowels under Verner's law — which is why father/Vater both have their ancient fricative while brother/Bruder hardened to b. If V→B applied to Vater, German would say *Bater. It does not: the v IS the [f]. Trust the IPA, not the spelling.",
        },
      ],
    },
    pattern: {
      title: "Possession Runs on mein/meine",
      content:
        "Mein Vater, meine Mutter, mein Sohn, meine Tochter — the possessor echoes the noun's gender (possessive ladders, sprig 1103, at work). Sentences: Mein Bruder lernt Deutsch. Meine Schwester ist Lehrerin. Meine Eltern wohnen in Hamburg (Eltern is plural-only — 'the elders', so meine, not mein). And the diminutive you will hear all day: die Mädchen (girl, neuter because -chen is always neuter) — das Mädchen, not die. Kin vocabulary is where German grammar and cognate memory meet: every family sentence rehearses both.",
      footnotes: [],
      linguist_note:
        "Tochter and daughter are the trail's double-shift trophy: Proto-Germanic *duhtēr → German hardened d→t and gh→ch; English kept both ancient sounds and spelled them daughter. Say both words aloud — you are hearing the same word twice, 1,500 years apart in drift.",
    },
    exercises: [
      {
        id: "l5091_e1",
        type: "matching_pairs",
        prompt: "Match the kin cognates:",
        matching_pairs: [
          { id: "bk1", english: "father (Verner's law, NOT V→B)", german: "der Vater" },
          { id: "bk2", english: "mother (essentially unchanged)", german: "die Mutter" },
          { id: "bk3", english: "son (the h was once heard)", german: "der Sohn" },
          { id: "bk4", english: "daughter (double shift: d→t + gh→ch)", german: "die Tochter" },
          { id: "bk5", english: "sister (sw→schw)", german: "die Schwester" },
          { id: "bk6", english: "the whole family (every generation under one roof)", german: "die Familie" },
        ],
        target_answer: "der Vater, die Mutter, der Sohn, die Tochter, die Schwester, die Familie",
        meaning: "father, mother, son, daughter, sister",
        explanation: "Five twins and one warning label: Vater's v is [f] — Verner's law, not the V→B shift that turned give into geben.",
      },
      {
        id: "l5091_e2",
        type: "shift_select",
        prompt: "Tochter ↔ daughter carries TWO shifts: d→t and:",
        options: ["gh→ch", "p→f", "k→ch as in make", "v→b"],
        target_answer: "gh→ch",
        meaning: "daughter ↔ Tochter = d→t + gh→ch",
        explanation: "The silent gh in daughter was once sounded — German Nacht-style ch keeps it: Tochter. Same double shift as Nacht/night.",
      },
      {
        id: "l5091_e3",
        type: "shift_select",
        prompt: "Eltern literally means:",
        options: ["the elder ones", "the parents", "the old ones' house", "the family tree"],
        target_answer: "the elder ones",
        meaning: "Eltern = parents, literally 'the elder ones'",
        explanation: "A frozen comparative of alt (old): elter- is elder. German says 'the elders' where English coined 'parents'.",
      },
      {
        id: "l5091_e4",
        type: "reverse_cognate",
        prompt: "Which English word is the twin of 'Sohn'?",
        target_answer: "son",
        meaning: "Sohn ↔ son (Proto-Germanic *sunuz)",
        explanation: "The h in Sohn was once pronounced — *sunuh- — but the twinship is total: son and Sohn are one word.",
      },
      {
        id: "l5091_e5",
        type: "syntax_builder",
        prompt: "Assemble the sentence: 'My parents live in Hamburg'",
        target_answer: "Meine Eltern wohnen in Hamburg",
        meaning: "Meine Eltern wohnen in Hamburg = my parents live in Hamburg",
        vocab_hints: [
          { word: "Eltern", translation: "parents", note: "plural-only: 'the elder ones'" },
          { word: "wohnen", translation: "to live / reside", note: "ich wohne in... — the residence verb" },
        ],
        word_bank: ["Meine", "Eltern", "wohnen", "in", "Hamburg"],
        explanation: "Eltern is plural, so it takes meine and the -en verb form — the elders, treated as the plural they are. And the moment you meet the rest of die Familie, you ask their names: Wie schreibt man das? — one Buchstabe at a time.",
      },
    ],
    summary: {
      outcome: "Name the core family with correct possessives, and explain the Verner's-law trap in Vater.",
      use_example: { german: "Mein Vater ist alt, aber meine Mutter ist Lehrerin.", english: "My father is old, but my mother is a teacher." },
      takeaway: "Mutter, Sohn, Bruder, Schwester, Tochter — all twins; Vater wears Verner's law; Eltern is 'the elder ones' frozen into a noun.",
      curiosity_teaser: "Next: the extended clan — grandparents, in-laws and the compound principle that builds Großvater from parts you own.",
    },
  },

  {
    id: 5092,
    slug: "the-extended-clan",
    title: "The Extended Clan",
    subtitle: "Großvater, Oma, Onkel, Enkel — compounds, nursery words and the ankle surprise",
    phase: 2,
    shift_categories: [],
    word_ids: ["großvater", "großmutter", "oma", "opa", "onkel", "tante", "geschwister", "enkel", "familie"],
    table_word_ids: ["großvater", "großmutter", "onkel", "tante", "enkel"],
    hook: {
      title: "Compounds, Loans and One Ankle",
      content:
        "The extended family shows all three ways German builds kin vocabulary. Compounds from parts you own: Großvater (big-father), Großmutter (big-mother), Großeltern (the big-elders). Shared Romance loans: Onkel and Tante came from French oncle/tante — the same loans English took, and Cousin/Cousine likewise. Nursery words: Oma and Opa are German inventions with no English relatives — honest memorize words. And one fossil: Enkel, grandchild, is the same ancient word as ANKLE — both mean 'bender', the ankle's joint becoming the family's 'little bender', the one a generation below. Even Geschwister, siblings, is built: ge- + Schwester, 'sister-hood' for brothers and sisters alike.",
      footnotes: [
        {
          marker: "1",
          title: "Schwieger-: the Quiet In-Law Prefix",
          content:
            "Schwiegermutter (mother-in-law) hides Schwieger, an old word for 'affinity by marriage' with no English cousin — but its second half is Mutter, the unchanged twin. German in-law words are compounds wearing one unknown bead on a familiar string.",
        },
      ],
    },
    pattern: {
      title: "The Clan in Sentences",
      content:
        "Mein Großvater liest die Zeitung. Meine Großmutter backt einen Kuchen (the baker verb at work). Meine Tante schenkt mir ein Buch. Ich habe zwei Geschwister — plural counting like English siblings. Der Enkel besucht seinen Großvater. Note the pattern: kin nouns for men take der/mein, for women die/meine, and the compounds follow their HEAD noun — Großmutter is die because Mutter is. Family gatherings are grammar drills: Meine Familie ist groß. — with Geschwister, Eltern, Cousin und Cousine all pulling their genders behind them.",
      footnotes: [],
      linguist_note:
        "Enkel and ankle both descend from Proto-Germanic *ankulaz, 'that which bends'. English kept the body-part sense; German's word bent socially — the grandchild as the family's small joint, linking the generations like an ankle links foot and leg.",
    },
    exercises: [
      {
        id: "l5092_e1",
        type: "matching_pairs",
        prompt: "Match the extended clan:",
        matching_pairs: [
          { id: "ec1", english: "grandfather (big-father)", german: "der Großvater" },
          { id: "ec2", english: "grandmother (big-mother)", german: "die Großmutter" },
          { id: "ec3", english: "uncle (French loan like English uncle)", german: "der Onkel" },
          { id: "ec4", english: "aunt (French loan like English aunt)", german: "die Tante" },
          { id: "ec5", english: "grandchild (twin: ankle)", german: "der Enkel" },
        ],
        target_answer: "der Großvater, die Großmutter, der Onkel, die Tante, der Enkel",
        meaning: "grandfather, grandmother, uncle, aunt, grandchild",
        explanation: "Compounds (Groß+vater), shared French loans (Onkel, Tante) and one fossil (Enkel ↔ ankle) — the clan in five words.",
      },
      {
        id: "l5092_e2",
        type: "shift_select",
        prompt: "Geschwister (siblings) is built on:",
        options: ["Schwester (sister)", "schwer (heavy)", "Schwager (brother-in-law)", "schön (beautiful)"],
        target_answer: "Schwester (sister)",
        meaning: "Geschwister = ge- + Schwester — 'sister-hood' meaning siblings",
        explanation: "ge- collects a group around one noun: one Schwester, but Geschwister for the whole set of brothers and sisters.",
      },
      {
        id: "l5092_e3",
        type: "shift_select",
        prompt: "Enkel shares its ancient root with which English body word?",
        options: ["ankle", "uncle", "angle", "aunt"],
        target_answer: "ankle",
        meaning: "Enkel ↔ ankle — both from *ankulaz 'bender'",
        explanation: "Both words mean 'the bender': English kept the joint, German bent the word toward the youngest generation.",
      },
      {
        id: "l5092_e4",
        type: "reverse_cognate",
        prompt: "Which nursery word is German for grandma (no English twin — honest memorize)?",
        target_answer: "Oma",
        meaning: "Oma = grandma (a nursery coinage, cognate only with Dutch)",
        explanation: "Oma and Opa are German nursery inventions — the honest no-cognate words of the family tree.",
      },
      {
        id: "l5092_e5",
        type: "syntax_builder",
        prompt: "Assemble the sentence: 'My grandma is very old'",
        target_answer: "Meine Oma ist sehr alt",
        meaning: "Meine Oma ist sehr alt = my grandma is very old",
        vocab_hints: [
          { word: "sehr", translation: "very", note: "the intensifier from earlier trail lessons" },
        ],
        word_bank: ["Meine", "Oma", "ist", "sehr", "alt"],
        explanation: "die Oma → meine Oma: the feminine possessor — and alt closes the loop with Eltern, 'the elder ones', from lesson 5091.",
      },
    ],
    summary: {
      outcome: "Talk about the extended family using compounds, loans and nursery words with correct genders.",
      use_example: { german: "Meine Großeltern wohnen bei uns, und meine Cousine kommt oft.", english: "My grandparents live with us, and my (female) cousin visits often." },
      takeaway: "Großvater = compound, Onkel/Tante = shared French loans, Oma/Opa = honest memorize, Enkel ↔ ankle, Geschwister = ge- + Schwester.",
      curiosity_teaser: "The clan branch ends here — the map's remaining sprigs and the capstone reading still wait.",
    },
  },

  {
    id: 2404,
    slug: "no-article-adjective-goes-strong",
    title: "No Article? The Adjective Goes Strong",
    subtitle: "kaltes Wasser, heißer Tee, guter Wein — the adjective does the article's job alone",
    phase: 3,
    shift_categories: [],
    word_ids: ["wasser", "wein", "kaffee", "besser", "gut", "heiß", "kalt", "brot", "warm", "voll", "nass", "schnell", "schwer", "lecker", "neu"],
    table_word_ids: ["wasser", "wein", "kaffee", "heiß", "kalt"],
    hook: {
      title: "The Adjective Promoted to Flag-Carrier",
      content:
        "Last lesson's law: one flag-carrier per noun phrase. der shows the case, the adjective whispers -e — der kalte Tag. But German nouns often roam FREE — no article at all: Kaltes Wasser ist gut. Heißer Tee, bitte. The moment the article steps out, the adjective is promoted: it must do the article's job alone, wearing the full strong ending — -er for masculine, -es for neuter, -e for feminine. This is the oldest layer of the system, and English once wore it too: Old English said gōd mann (strong, no article) but se gōda mann (weak, after the). English dropped both sets of endings; German kept them both, working.",
      footnotes: [
        {
          marker: "1",
          title: "Strong and Weak, the Old English Way",
          content:
            "Linguists call the no-article endings the STRONG declension and the der/die/das endings the WEAK declension — the same terms used for Old English grammar (strong gōd mann vs weak se gōda mann). The names describe which word carries the case-flag: alone (strong) or propped up by a flagged article (weak).",
        },
      ],
    },
    pattern: {
      title: "The Strong Endings Are the Demonstrative Endings",
      content:
        "Watch the pattern: the strong adjective borrows the endings of der/die/das itself — guter Wein (masculine -er, like der), kaltes Wasser (neuter -es, like das), gute Butter (feminine -e, like die). The article-less noun phrase is its own little demonstrative. Mixed recap: ein hides its flag in the masculine nominative (ein guter Wein) and neuter (ein kaltes Wasser) — the adjective covers for it — but einen, eine, einer carry their own flags, so the adjective falls back to weak: einen besseren Kaffee (the very form the capstone whispered). And in the no-article plural the adjective takes -e: alte Bücher, gute Freunde? — Freunde arrives with its own lesson; for now: alte Wörter.",
      footnotes: [],
      linguist_note:
        "The strong endings are the old demonstrative pronoun endings (*sa, *sō, *þat) — German spread them onto the adjective so that even a bare noun phrase still announces case and gender. English kept the pronouns (he, she, that) but let the adjective go naked.",
    },
    exercises: [
      {
        id: "l2404_e1",
        type: "matching_pairs",
        prompt: "Bare-noun phrases (no article!) — match each with its reading:",
        matching_pairs: [
          { id: "sg1", english: "cold water (no article)", german: "kaltes Wasser" },
          { id: "sg2", english: "hot tea (no article)", german: "heißer Tee" },
          { id: "sg3", english: "good wine (no article)", german: "guter Wein" },
          { id: "sg4", english: "old bread (no article)", german: "altes Brot" },
        ],
        target_answer: "kaltes Wasser, heißer Tee, guter Wein, altes Brot",
        meaning: "cold water, hot tea, good wine, old bread",
        explanation: "No article → the adjective goes strong: -es after neuter nouns, -er after masculine, mirroring der/das themselves. But predicates rest bare: der Zug ist schnell, der Kuchen ist lecker und schwer, alles ist neu, der Kühlschrank ist voll, die Straße ist nass — no endings when nothing follows the adjective.",
      },
      {
        id: "l2404_e2",
        type: "shift_select",
        prompt: "No article, neuter noun: '_____ Wasser ist kalt.' (cold):",
        options: ["Kaltes", "Kalt", "Kalter", "Kalte"],
        target_answer: "Kaltes",
        meaning: "Kaltes Wasser ist kalt = cold water is cold",
        explanation: "Neuter strong ending -es — the adjective copies das: kaltes Wasser. It is doing the article's job alone.",
      },
      {
        id: "l2404_e3",
        type: "morpheme_tiles",
        prompt: "Assemble the bare-noun phrase: 'heißer Tee'",
        tile_options: ["heißer", "Tee", "es", "en", "e"],
        target_answer: "heißer Tee",
        meaning: "hot tea (no article — masculine strong)",
        explanation: "heißer — the strong masculine -er, borrowed straight from der. Heißer Tee, bitte.",
      },
      {
        id: "l2404_e4",
        type: "shift_select",
        prompt: "The capstone's whisper, decoded: 'Ich trinke einen _____ Kaffee.' (better):",
        options: ["besseren", "besserer", "besseres", "besser"],
        target_answer: "besseren",
        meaning: "einen besseren Kaffee = a better coffee",
        explanation: "einen already carries the accusative flag, so the adjective goes weak: besseren. The flag passes from article to adjective only when the article goes quiet.",
      },
      {
        id: "l2404_e5",
        type: "syntax_builder",
        prompt: "Assemble the strong-declension showcase: 'Cold water is better than warm coffee'",
        target_answer: "Kaltes Wasser ist besser als warmer Kaffee",
        meaning: "Kaltes Wasser ist besser als warmer Kaffee = cold water is better than warm coffee",
        vocab_hints: [
          { word: "warmer", translation: "warm (no article, masculine)", note: "strong ending -er after a bare masculine noun" },
        ],
        word_bank: ["Kaltes", "Wasser", "ist", "besser", "als", "warmer", "Kaffee"],
        explanation: "Two strong adjectives in one sentence — kaltes (neuter) and warmer (masculine) — plus the als-comparison from the Sentence Gym.",
      },
    ],
    summary: {
      outcome: "Decline adjectives before bare nouns (strong) and after ein-family flags (mixed), including einen besseren Kaffee.",
      use_example: { german: "Kaltes Wasser ist besser als warmer Kaffee.", english: "Cold water is better than warm coffee." },
      takeaway: "No article → the adjective goes strong (-er/-es/-e, the demonstrative endings); a flagged article → the adjective falls back to weak.",
      curiosity_teaser: "Next: hidden shifts I — the quiet V→B family: geben↔give, über↔over, sieben↔seven.",
    },
  },

  {
    id: 1603,
    slug: "sich-and-the-lost-reflexives",
    title: "sich & the Lost Reflexives",
    subtitle: "hie thee hence, help yourself — the pronouns English dropped, German kept working",
    phase: 2,
    shift_categories: [],
    word_ids: ["waschen", "erinnern", "freuen", "fühlen", "treffen", "uns", "verdienen", "beginnen", "bezahlen"],
    table_word_ids: ["waschen", "erinnern", "freuen", "fühlen"],
    hook: {
      title: "Hie Thee Hence",
      content:
        "Shakespeare's English bounces actions back at the doer constantly: Get thee to a nunnery. Hie thee hence. Sit thee down. That thee is the reflexive pronoun doing its ancient job — and modern English keeps the fossils if you know where to look: help yourself, behave yourself, enjoy yourself. German never retired the system; it just standardized the pronoun: sich. ich wasche MICH, du wäschst DICH, er wäscht SICH, wir waschen UNS. The secret that makes it easy: the reflexive pronoun is just the ordinary pronoun from the Him-Case — except in the third person, where German deploys one all-purpose shape, sich, for he, she, it, they, and the formal Sie.",
      footnotes: [
        {
          marker: "1",
          title: "The Feeling Verbs Are Reflexive by Birth",
          content:
            "sich freuen (rejoice — froh, the frolic family) and sich fühlen (feel) have no object: the feeling lands on the feeler. German makes that visible with sich; English hides it inside the verb. Ich freue mich = I glad myself = I am glad.",
        },
      ],
    },
    pattern: {
      title: "The Mirror Table",
      content:
        "ich → mich (I wash myself: ich wasche mich). du → dich (thou thee! du wäschst dich). er/sie/es → sich. wir → uns. ihr → euch. sie (plural) → sich. Sie (formal) → sich. So only two new shapes exist: sich (third person + formal) and euch (ihr). Everything else you already drilled in the accusative gym. The stem-changer warning: waschen shifts a→ä in du and er — du wäschst dich, er wäscht sich. And reciprocal sich: Wir treffen uns — we meet (each other); Sie treffen sich — you (plural/formal) meet. Same pronoun, mutual action.",
      footnotes: [],
      linguist_note:
        "sich is the old dative/accusative reflexive *sik, shared with Old English (selfne / sīc in the Northumbrian glosses). English replaced it with self-phrases; Dutch and German kept the bare form. 'Himself' is literally the fossil: him + self, pronoun plus self glued together.",
    },
    exercises: [
      {
        id: "l1603_e1",
        type: "matching_pairs",
        prompt: "The mirror table — match each reflexive sentence with its reading:",
        matching_pairs: [
          { id: "rf1", english: "I wash myself", german: "ich wasche mich" },
          { id: "rf2", english: "you wash yourself", german: "du wäschst dich" },
          { id: "rf3", english: "he washes himself", german: "er wäscht sich" },
          { id: "rf4", english: "we feel good", german: "wir fühlen uns gut" },
          { id: "rf5", english: "to rejoice / be glad", german: "sich freuen" },
        ],
        target_answer: "ich wasche mich, du wäschst dich, er wäscht sich, wir fühlen uns gut, sich freuen",
        meaning: "I wash myself, you wash yourself, he washes himself, we feel good, to rejoice",
        explanation: "The reflexive is the ordinary accusative pronoun — except third person, where everyone shares sich. The factory verbs next door (verdienen, bezahlen, beginnen) carry no mirror: they act on the world, not the self.",
      },
      {
        id: "l1603_e2",
        type: "shift_select",
        prompt: "Third person shares one shape: 'Er freut _____.' (He is glad):",
        options: ["sich", "mich", "dich", "uns"],
        target_answer: "sich",
        meaning: "Er freut sich = he is glad (he rejoices himself)",
        explanation: "er, sie, es, sie (plural) and Sie all take sich — the one reflexive pronoun German never splits.",
      },
      {
        id: "l1603_e3",
        type: "morpheme_tiles",
        prompt: "Assemble the reflexive wash: 'Ich wasche mich'",
        tile_options: ["Ich", "wasche", "mich", "dich", "sich"],
        target_answer: "Ich wasche mich",
        meaning: "I wash myself",
        explanation: "ich acts on ich — the accusative mich bounces the action back, exactly like 'help yourself'.",
      },
      {
        id: "l1603_e4",
        type: "derive",
        prompt: "Stem-change alert: waschen in the er-form (he washes):",
        english_hint: "a goes ä, plus the 3rd-person -t",
        target_answer: "wäscht",
        meaning: "er wäscht sich = he washes himself",
        explanation: "du wäschst, er wäscht — the a→ä umlaut you know from the plural lesson (Mann → Männer), riding into the reflexive routine.",
      },
      {
        id: "l1603_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'I feel good'",
        target_answer: "Ich fühle mich gut",
        meaning: "Ich fühle mich gut = I feel good",
        vocab_hints: [
          { word: "fühle", translation: "feel", note: "fühlen — the twin of English feel; reflexive: sich fühlen" },
          { word: "mich", translation: "myself", note: "the accusative of ich, bounced back" },
        ],
        word_bank: ["Ich", "fühle", "mich", "gut"],
        explanation: "sich fühlen needs its target: the feeling lands on the feeler — mich. English hides the same logic inside 'I feel good'.",
      },
    ],
    summary: {
      outcome: "Use the reflexive pronouns mich/dich/sich/uns/euch with waschen, freuen, fühlen and treffen.",
      use_example: { german: "Ich fühle mich gut und freue mich.", english: "I feel good and I am glad." },
      takeaway: "The reflexive is your accusative pronoun bounced back — mich, dich, uns — with sich covering he/she/it/they/Sie.",
      curiosity_teaser: "Next: reflexive daily routines — anziehen, aufwachen, einschlafen: the morning round, all about yourself.",
    },
  },

  {
    id: 1604,
    slug: "reflexive-daily-routines",
    title: "Reflexive Daily Routines",
    subtitle: "sich anziehen, aufwachen, einschlafen — the morning round where prefixes and reflexives meet",
    phase: 2,
    shift_categories: [],
    word_ids: ["anziehen", "aufstehen", "aufwachen", "einschlafen", "aussehen", "freuen", "ausziehen", "beginnen", "bezahlen"],
    table_word_ids: ["anziehen", "aufstehen", "aufwachen", "einschlafen"],
    hook: {
      title: "The Morning Is Reflexive",
      content:
        "Run the tape of your morning in German and watch two systems you already own click together. Ich wache auf (prefix flies). Ich stehe auf (prefix flies). Then the mirror moment: Ich ziehe mich an — I pull myself on. Get dressed takes a REFLEXIVE object in German: you are the thing being dressed. English hides this (I get dressed — dressed by whom?), but the old English would not have: 'I dress me', said without blinking. Add Ich wasche mich and Ich fühle mich gut and the whole morning runs on actions that turn back on their doer.",
      footnotes: [
        {
          marker: "1",
          title: "zieht ... an: the Prefix Waits, the Pronoun Doesn't",
          content:
            "anziehen is separable (topic 15): the prefix an flies to the end and the reflexive pronoun sits right after the verb — Ich ziehe MICH an. Not mich anziehe, not anziehe mich. Verb, object, prefix: the bracket closes around the pronoun.",
        },
      ],
    },
    pattern: {
      title: "The Routine Chain",
      content:
        "The full chain, verbs you can already conjugate: Ich wache auf (I wake up). Ich stehe auf (I get up). Ich wasche mich (I wash myself). Ich ziehe mich an (I get dressed). Ich fühle mich gut (I feel good). Ich sehe gut aus (I look good — aussehen, no reflexive needed: the looking goes outward!). Ich freue mich (I am glad). Und abends: Ich schlafe ein (I fall asleep — ein- into sleep). Two honest exceptions inside the routine: aussehen and aufwachen are NOT reflexive in German — the prefix does the work, no pronoun. Wir treffen uns um acht (we meet at eight) — reciprocal sich: each meets the other.",
      footnotes: [],
      linguist_note:
        "anziehen: an (on) + ziehen (pull — the tow/tug family). 'To pull on' clothes is the same image English uses, and German makes the puller and the pulled one person: sich anziehen. English 'dress' once meant the same — 'arise and dress yourself' — before the reflexive faded.",
    },
    exercises: [
      {
        id: "l1604_e1",
        type: "matching_pairs",
        prompt: "The routine chain — match each verb phrase with its reading (the last one in dictionary dress):",
        matching_pairs: [
          { id: "dr1", english: "get dressed", german: "Ich ziehe mich an" },
          { id: "dr2", english: "wake up", german: "Ich wache auf" },
          { id: "dr3", english: "get up", german: "Ich stehe auf" },
          { id: "dr4", english: "fall asleep", german: "Ich schlafe ein" },
          { id: "dr5", english: "get undressed (dictionary form)", german: "sich ausziehen" },
        ],
        target_answer: "Ich ziehe mich an, Ich wache auf, Ich stehe auf, Ich schlafe ein, sich ausziehen",
        meaning: "I get dressed, I wake up, I get up, I fall asleep, to get undressed",
        explanation: "The chain runs an → auf → ein — and ausziehen closes the day, an's twin in reverse. The schedule around it: die Kurse beginnen um neun, wir bezahlen den Kaffee — factory verbs, no mirror. Three separable prefixes and one reflexive — the morning round mixes both systems you own.",
      },
      {
        id: "l1604_e2",
        type: "shift_select",
        prompt: "Word order with the bracket: which sentence is correct for 'I am getting dressed'?",
        options: ["Ich ziehe mich an", "Ich mich ziehe an", "Ich anziehe mich", "Mich ziehe ich an"],
        target_answer: "Ich ziehe mich an",
        meaning: "Ich ziehe mich an = I get dressed",
        explanation: "Verb in position 2, reflexive pronoun right after it, prefix an closes the bracket: ziehe ... mich ... an.",
      },
      {
        id: "l1604_e3",
        type: "shift_select",
        prompt: "Reciprocal sich: 'Wir treffen _____ um acht.' (We meet at eight):",
        options: ["uns", "mich", "sich", "dich"],
        target_answer: "uns",
        meaning: "Wir treffen uns = we meet (each other)",
        explanation: "wir → uns: the same reflexive pronoun does reciprocal duty — I meet you, you meet me, one pronoun reports it.",
      },
      {
        id: "l1604_e4",
        type: "reverse_cognate",
        prompt: "Which fossil English phrase still uses the reflexive 'yourself' the way German's sich system does?",
        target_answer: "help yourself",
        meaning: "help yourself — the reflexive imperative English kept",
        explanation: "Hilf dir! / Help yourself — both languages once reflexive everywhere; English kept the fossil only in set phrases.",
      },
      {
        id: "l1604_e5",
        type: "syntax_builder",
        prompt: "Assemble the morning, in order: 'I wake up and get dressed'",
        target_answer: "Ich wache auf und ziehe mich an",
        meaning: "Ich wache auf und ziehe mich an = I wake up and get dressed",
        vocab_hints: [
          { word: "ziehe", translation: "pull / put on", note: "anziehen — separable: ziehe ... an" },
          { word: "auf", translation: "up", note: "the prefix of aufwachen and aufstehen, flying to the end" },
        ],
        word_bank: ["Ich", "wache", "auf", "und", "ziehe", "mich", "an"],
        explanation: "Two clauses, two flying prefixes — and the second clause tucks its reflexive mich inside the bracket: ziehe mich an.",
      },
    ],
    summary: {
      outcome: "Narrate a daily routine mixing separable prefixes and reflexive pronouns, and spot the two non-reflexive exceptions.",
      use_example: { german: "Ich wache auf, wasche mich, ziehe mich an und fühle mich gut.", english: "I wake up, wash myself, get dressed and feel good." },
      takeaway: "Routine verbs lean reflexive (sich anziehen, sich fühlen) — but aussehen and aufwachen let the prefix work alone.",
      curiosity_teaser: "Next: numbers, time & gestern — counting is a shift spiral: drei↔three, zwanzig↔twenty, gestern↔yesterday.",
    },
  },

  {
    id: 5081,
    slug: "haette-waere-subjunctive-twins",
    title: "hätte & wäre: The Subjunctive Twins",
    subtitle: "hätte is had's subjunctive, wäre is were — the would-world of wishes and kind speech",
    phase: 3,
    shift_categories: [],
    word_ids: ["haben", "sein", "zeit", "geld", "reich", "froh", "müde", "buchstabe", "familie"],
    table_word_ids: ["haben", "sein", "zeit", "geld", "reich"],
    hook: {
      title: "The Room English Locked",
      content:
        "English keeps exactly one fossil of its old subjunctive room: If I WERE you. That were — not was — is the sound of a world that isn't real: wishes, hypotheses, polite dreaming. German kept the whole room furnished. wäre is were's twin, same root (the *wes- of war/was), same would-world job. And hätte is had doing a second shift: the past form of haben, re-lit as 'would have' — Wenn ich Zeit hätte (if I had time), Ich hätte Lust (I would like). German builds its gentlest, most polite sentences out of past-tense shapes: the past is where hypotheticals live.",
      footnotes: [
        {
          marker: "1",
          title: "The -e Is the Signal",
          content:
            "Compare the pairs: hatte (I had — real past) vs hätte (I would have — the would-world). war (I was) vs wäre (I would be). One letter, one whole reality: the umlauted -e marks the sentence as a hypothesis, a wish, or a politeness. Old English had the same pair — hæfde did duty for both — and German kept the distinction crisp.",
        },
      ],
    },
    pattern: {
      title: "The Would-World Conjugations",
      content:
        "hätte: ich hätte, du hättest, er hätte, wir hätten ↔ I had, thou hadst (in its 'would' shift). wäre: ich wäre, du wärst, er wäre, wir wären ↔ I were, thou wert (the true English subjunctive!). The two great frames: WISHES — Wenn ich Geld hätte! (if only I had money), Wenn ich reich wäre! (if I were rich). SOFT STATEMENTS — Das wäre gut (that would be good), Ich wäre froh (I would be glad), Das wäre alles (that would be all — the politest way to finish an order). Notice wäre ↔ wert: English's thou wert WAS a subjunctive — the fossil in your own mouth.",
      footnotes: [],
      linguist_note:
        "Konjunktiv II from the preterite: Germanic built its hypothetical mood out of past forms (past = far from reality, mentally as well as temporally). That is why hätte looks exactly like hatte with dots — it IS the past form, repurposed by distance.",
    },
    exercises: [
      {
        id: "l5081_e1",
        type: "matching_pairs",
        prompt: "The would-world — match each soft form with its reading:",
        matching_pairs: [
          { id: "kw1", english: "if I had time", german: "Wenn ich Zeit hätte" },
          { id: "kw2", english: "if I were rich", german: "Wenn ich reich wäre" },
          { id: "kw3", english: "that would be good", german: "Das wäre gut" },
          { id: "kw4", english: "that would be all", german: "Das wäre alles" },
          { id: "kw5", english: "if I had money", german: "Wenn ich Geld hätte" },
          { id: "kw6", english: "I would be tired", german: "Ich wäre müde" },
        ],
        target_answer: "Wenn ich Zeit hätte, Wenn ich reich wäre, Das wäre gut, Das wäre alles, Wenn ich Geld hätte, Ich wäre müde",
        meaning: "the two great hätte/wäre frames",
        explanation: "Wishes take Wenn + hätte/wäre; soft statements use wäre alone. The -e marks the world as hypothetical. And the would-world is where families and names live: die Familie wünscht sich Zeit, and every new name arrives spelled out, one Buchstabe at a time.",
      },
      {
        id: "l5081_e2",
        type: "shift_select",
        prompt: "Wish or memory? 'Wenn ich Zeit _____!' (if only I HAD time — a wish):",
        options: ["hätte", "hatte", "habe", "hätten"],
        target_answer: "hätte",
        meaning: "Wenn ich Zeit hätte = if I had time (would-world)",
        explanation: "hatte is the plain past (I had — real); hätte is the would-world (I would have — hypothetical). One letter, one reality.",
      },
      {
        id: "l5081_e3",
        type: "shift_select",
        prompt: "'Wenn ich reich _____!' (if I were rich):",
        options: ["wäre", "war", "wären", "ist"],
        target_answer: "wäre",
        meaning: "Wenn ich reich wäre = if I were rich",
        explanation: "wäre ↔ were — the exact twin of English's one surviving subjunctive: if I WERE you.",
      },
      {
        id: "l5081_e4",
        type: "reverse_cognate",
        prompt: "Which English fossil verb-form is the true twin of 'wäre'?",
        target_answer: "were",
        meaning: "wäre ↔ were (if I were you)",
        explanation: "Both are the *wes- root in its subjunctive shift. English kept one phrase; German kept the whole conjugation.",
      },
      {
        id: "l5081_e5",
        type: "syntax_builder",
        prompt: "Assemble the wish, both verbs: 'If I had time, I would be glad'",
        target_answer: "Wenn ich Zeit hätte wäre ich froh",
        meaning: "Wenn ich Zeit hätte, wäre ich froh = if I had time, I would be glad",
        vocab_hints: [
          { word: "hätte", translation: "would have / had (wish)", note: "the would-world form of hatte" },
          { word: "wäre", translation: "would be", note: "the would-world form of war" },
          { word: "froh", translation: "glad", note: "the frolic family" },
        ],
        word_bank: ["Wenn", "ich", "Zeit", "hätte", "wäre", "ich", "froh"],
        explanation: "Two would-world verbs in one breath: hätte closes the Wenn-clause (verb-final!), wäre carries the main clause.",
      },
    ],
    summary: {
      outcome: "Use hätte and wäre for wishes and soft statements, and distinguish them from hatte and war.",
      use_example: { german: "Wenn ich Zeit hätte, wäre ich froh.", english: "If I had time, I would be glad." },
      takeaway: "hätte ↔ had, wäre ↔ were: the would-world wears past-tense clothes — and the -e is the signal.",
      curiosity_teaser: "Next: könnte, würde & the politeness escalator — could's old job, would's machine, and four ways to order a coffee.",
    },
  },

  {
    id: 5082,
    slug: "koennte-wuerde-politeness-escalator",
    title: "könnte, würde & the Politeness Escalator",
    subtitle: "could's old job (polite asking), would's machine, and the wurde/würde umlaut trap",
    phase: 3,
    shift_categories: [],
    word_ids: ["können", "werden", "mögen", "helfen", "mir", "kaffee", "trinken", "freundlich", "familie"],
    table_word_ids: ["können", "werden", "mögen", "mir", "kaffee"],
    hook: {
      title: "Distance Is Politeness",
      content:
        "Here is the politeness escalator, four steps, one coffee. Step one: Ein Kaffee, bitte! — bare and friendly. Step two: Ich möchte einen Kaffee — möchte, the softened want you met back in topic 2. Step three: Könnten Sie mir helfen? — could, doing the job English's could still remembers: could was once just the past of can, and polite asking was its first career. Step four: Ich würde einen Kaffee nehmen — I would take a coffee, the conditional machine. Every step adds would-world distance, and distance is politeness. English climbed the identical staircase — give me → I'd like → could you → I would take — because both languages discovered the same trick: the unreal is the respectful.",
      footnotes: [
        {
          marker: "1",
          title: "wurde vs würde — One Umlaut, Different Worlds",
          content:
            "werden's plain past is wurde (it became / it got: Es wurde kalt). Its subjunctive is würde (it would: Es würde kalt). The umlaut is the would-world signal, same as hatte/hätte. Hear the dots or mishear the reality.",
        },
      ],
    },
    pattern: {
      title: "The Toolkit and the Machine",
      content:
        "The polite toolkit: Könnten Sie...? (could you — the formal ask), Würden Sie...? (would you), Ich möchte... (I would like), Ich hätte gern... (I would like — with hätte!). The conditional machine: würde + bare infinitive, bracket closed — Ich würde kommen (I would come), Ich würde Tee trinken (I would drink tea). It is the modal bracket with a would-world verb driving: ich würde in position 2, the bare infinitive parked at the end, exactly like kann and muss from topic 2. Politeness rule of thumb: questions beat statements, könnte/würde beat möchte, and everything beats the bare imperative — unless friends are doing the asking.",
      footnotes: [],
      linguist_note:
        "können's subjunctive könnte and English could are the same verb in the same shift: Old English cūðe, the past of cunnan (to know how). 'Could you help me?' literally asks 'would you know-how to help me?' — knowledge offered politely. Könnten Sie mir helfen? is the same question, unchanged.",
    },
    exercises: [
      {
        id: "l5082_e1",
        type: "matching_pairs",
        prompt: "The polite toolkit — match each form with its job:",
        matching_pairs: [
          { id: "pk1", english: "could you...? (polite ask)", german: "Könnten Sie" },
          { id: "pk2", english: "I would come", german: "Ich würde kommen" },
          { id: "pk3", english: "I would like", german: "Ich möchte" },
          { id: "pk4", english: "it got cold (plain past!)", german: "Es wurde kalt" },
          { id: "pk5", english: "that would be kind", german: "Das wäre freundlich" },
        ],
        target_answer: "Könnten Sie, Ich würde kommen, Ich möchte, Es wurde kalt, Das wäre freundlich",
        meaning: "the polite toolkit plus the umlaut trap",
        explanation: "könnte asks politely, würde runs the conditional, möchte softens wanting — and wurde (no umlaut) is just the real past.",
      },
      {
        id: "l5082_e2",
        type: "shift_select",
        prompt: "Reality or hypothesis? 'Es _____ kalt.' (it GOT cold — plain fact):",
        options: ["wurde", "würde", "wird", "wäre"],
        target_answer: "wurde",
        meaning: "Es wurde kalt = it got cold (real past)",
        explanation: "wurde is werden's plain past; würde with the umlaut would be the would-world. The dots decide the reality.",
      },
      {
        id: "l5082_e3",
        type: "shift_select",
        prompt: "Politeness escalator: which request climbs highest?",
        options: [
          "Ein Bier!",
          "Ich möchte ein Bier",
          "Könnten Sie mir ein Bier geben?",
          "Gib mir ein Bier!",
        ],
        target_answer: "Könnten Sie mir ein Bier geben?",
        meaning: "The könnte-question is the most polite step",
        explanation: "Distance is politeness: a könnte-question offers the most would-world distance — the asker pretends not to presume. Mit der Familie rutscht man zwei Stufen hinunter: dort genügt Ich möchte.",
      },
      {
        id: "l5082_e4",
        type: "morpheme_tiles",
        prompt: "Assemble the conditional machine: 'Ich würde kommen'",
        tile_options: ["Ich", "würde", "kommen", "wurde", "wäre"],
        target_answer: "Ich würde kommen",
        meaning: "I would come",
        explanation: "würde drives, the bare infinitive closes the bracket — the modal bracket from topic 2, now in the would-world.",
      },
      {
        id: "l5082_e5",
        type: "syntax_builder",
        prompt: "Assemble the formal ask: 'Could you help me?'",
        target_answer: "Könnten Sie mir helfen",
        meaning: "Könnten Sie mir helfen = could you help me (formal)",
        vocab_hints: [
          { word: "Könnten", translation: "could (polite)", note: "können's would-world form — the polite ask" },
          { word: "mir", translation: "to me", note: "helfen demands the dative — help goes TO someone" },
        ],
        word_bank: ["Könnten", "Sie", "mir", "helfen"],
        explanation: "Question scaffolding (verb first, Sie second), könnte's politeness, and helfen's dative mir — three systems, one sentence.",
      },
    ],
    summary: {
      outcome: "Deploy könnte/würde/möchte across the politeness escalator and build würde + infinitive conditionals.",
      use_example: { german: "Könnten Sie mir helfen? Ich würde Tee trinken.", english: "Could you help me? I would drink tea." },
      takeaway: "Distance is politeness: könnte asks, würde conditions, möchte softens — and wurde without dots is just the past.",
      curiosity_teaser: "This would-branch ends here — more side paths wait on the map, and the whole compendium waits in review.",
    },
  },

  {
    id: 5101,
    slug: "the-man-that-knows-double-duty",
    title: "The Man That Knows: der/die/das Double Duty",
    subtitle: "the relative pronoun is the demonstrative re-employed — and the verb drops to the basement",
    phase: 3,
    shift_categories: [],
    word_ids: ["der", "die", "das", "mann", "frau", "kind", "lesen", "buch", "trinken", "kaffee", "lehrer", "person", "freundlich"],
    table_word_ids: ["der", "die", "das", "mann", "frau", "lesen"],
    hook: {
      title: "One Set of Pronouns, Three Jobs",
      content:
        "der, die, das already work two jobs: the article (der Mann) and the demonstrative (das ist mein Haus? — that is my house, with das = that). Here comes the third: the relative pronoun. Der Mann, der Kaffee trinkt — the man WHO drinks coffee. English splits the job three ways — who for people, which for things, that for both — and Old English used þe and that. German refuses the split: the relative pronoun is just der/die/das, agreeing with whatever it points back to. And you already know the twist: inside the relative clause the verb drops to the basement — der Deutsch lernt — the same rule weil and dass enforce. Nothing new. Two systems you own, one new job description.",
      footnotes: [
        {
          marker: "1",
          title: "þe, That, and the Missing who",
          content:
            "Old English's relative pronoun was þe (and that) — the same þ- that hardened into German d-. who/which/that as relative pronouns is a later English development; the KJV still says 'the man that taught me'. German's der/die/das relatives are the old demonstratives doing day work, exactly as that once did.",
        },
      ],
    },
    pattern: {
      title: "The Relative Clause Blueprint",
      content:
        "Point back, take the gender, send the verb to the basement: Der Mann, der Kaffee trinkt (the man who drinks coffee — masculine, subject). Die Frau, die Deutsch lernt (the woman who learns German — feminine). Das Kind, das spielt (the child that plays — neuter). Die Bücher, die alt sind? — plurals borrow die too. With a direct object inside: Das Buch, das ich lese (the book that I read — the relative pronoun is the OBJECT of lese, but it still shows the gender of Buch: das). The basement rule fires every time: ..., der Kaffee trinkt, ..., die Deutsch lernt, ..., das ich lese. Comma before the relative clause — German demands it, and here the comma is grammar, not style.",
      footnotes: [],
      linguist_note:
        "English 'that' as a relative pronoun is the same word as German das — the demonstrative recruited into clause-linking. 'The book that I read' and 'das Buch, das ich lese' are one construction with one history.",
    },
    exercises: [
      {
        id: "l5101_e1",
        type: "matching_pairs",
        prompt: "The third job — match each relative clause with its reading:",
        matching_pairs: [
          { id: "rr1", english: "the man who drinks coffee", german: "der Mann, der Kaffee trinkt" },
          { id: "rr2", english: "the woman who learns German", german: "die Frau, die Deutsch lernt" },
          { id: "rr3", english: "the book that I read", german: "das Buch, das ich lese" },
          { id: "rr4", english: "the child that plays", german: "das Kind, das spielt" },
          { id: "rr5", english: "the teacher who reads every day", german: "der Lehrer, der jeden Tag liest" },
          { id: "rr6", english: "the person who comes first", german: "die Person, die zuerst kommt" },
        ],
        target_answer: "der Mann, der Kaffee trinkt, die Frau, die Deutsch lernt, das Buch, das ich lese, das Kind, das spielt, der Lehrer, der jeden Tag liest, die Person, die zuerst kommt",
        meaning: "subject and object relatives across all three genders",
        explanation: "The relative pronoun copies the noun's gender (der/die/das) — and the clause verb waits in the basement.",
      },
      {
        id: "l5101_e2",
        type: "shift_select",
        prompt: "Copy the gender: 'Die Frau, _____ Deutsch lernt.' (who):",
        options: ["die", "der", "das", "den"],
        target_answer: "die",
        meaning: "Die Frau, die Deutsch lernt",
        explanation: "The relative pronoun agrees with Frau (feminine): die. It does not care about the main clause — only about its own noun.",
      },
      {
        id: "l5101_e3",
        type: "shift_select",
        prompt: "Subject check: 'Der Mann, _____ Kaffee trinkt.' (who drinks):",
        options: ["der", "den", "dem", "die"],
        target_answer: "der",
        meaning: "Der Mann, der Kaffee trinkt",
        explanation: "The relative pronoun is the SUBJECT of trinkt — subject job, nominative: der. (The object job gets its own lesson.) Whether it is der Lehrer or die Person doing the asking, the gender copy never wavers — asking freundlich changes the tone, not the pronoun.",
      },
      {
        id: "l5101_e4",
        type: "morpheme_tiles",
        prompt: "Assemble the object relative: 'Das Buch, das ich lese'",
        tile_options: ["Das", "Buch", "das", "ich", "lese", "der", "den"],
        target_answer: "Das Buch, das ich lese",
        meaning: "the book that I read",
        explanation: "das points back to das Buch AND serves as the object of lese — one word, two jobs — while lese waits in the basement.",
        vocab_hints: [
          { word: "lesen", translation: "to read", note: "ich lese — the basement verb of das Buch, das ich lese" },
        ],
      },
      {
        id: "l5101_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'The man who learns German drinks coffee'",
        target_answer: "Der Mann der Deutsch lernt trinkt Kaffee",
        meaning: "Der Mann, der Deutsch lernt, trinkt Kaffee",
        vocab_hints: [
          { word: "lernt", translation: "learns", note: "the relative clause's verb — parked at the clause end" },
        ],
        word_bank: ["Der", "Mann", "der", "Deutsch", "lernt", "trinkt", "Kaffee"],
        explanation: "Two verbs, two floors: lernt closes the relative basement; trinkt holds position 2 of the main clause.",
      },
    ],
    summary: {
      outcome: "Build subject and object relative clauses with der/die/das and verb-final order.",
      use_example: { german: "Das Buch, das ich lese, ist alt.", english: "The book that I am reading is old." },
      takeaway: "The relative pronoun is der/die/das re-employed: copy the noun's gender, do the clause's job, park the verb at the end.",
      curiosity_teaser: "Next: relatives in all cases — den and dem, the object and giving jobs, and English's own fossil whom.",
    },
  },

  {
    id: 5102,
    slug: "relatives-in-all-cases",
    title: "Relatives in All Cases",
    subtitle: "den and dem: the case comes from the relative clause's own verb — whom proves it",
    phase: 3,
    shift_categories: [],
    word_ids: ["film", "mann", "frau", "kind", "sehen", "helfen", "geben", "buch", "freund", "freundlich", "lehrer", "person"],
    table_word_ids: ["film", "mann", "frau", "sehen", "helfen"],
    hook: {
      title: "Whom Still Works Here",
      content:
        "The man whom I see. The friend whom I gave it to. English's whom is dying at the street level — but it is exactly the case machine German's relative pronouns still run. The case of the relative pronoun comes from ITS OWN clause: the film that I see — the film is the thing SEEN, so German says den (accusative): der Film, den ich sehe. The man I help — helping goes TO someone (the dative club from topic 20), so dem: der Mann, dem ich helfe. The relative pronoun doesn't take orders from the noun it points at; it takes orders from the verb of its own clause.",
      footnotes: [
        {
          marker: "1",
          title: "The Case Interview",
          content:
            "To find the relative pronoun's case, ask: what job does it do INSIDE the relative clause? Subject of sehe? nominative (der/die/das). Direct object? accusative (den/die/das). Receiver? dative (dem/der/dem). The noun outside decides gender and number; the clause inside decides case. Two interviews, one pronoun.",
        },
      ],
    },
    pattern: {
      title: "The Case Roster",
      content:
        "Nominative (subject): Der Film, der gefällt? — keep it simple: der Mann, der kommt. Accusative (direct object): der Film, den ich sehe; die Frau, die ich sehe (die serves both nominative and accusative — feminine didn't split); das Kind, das ich sehe. Dative (receiver): der Mann, dem ich helfe; die Frau, der ich helfe (feminine dative is der!); dem Kind, dem ich das Buch gebe — the double-object verb from topic 20, giving the thing (das Buch, accusative) to the receiver (dem, dative). The basement rule holds through every case: the clause verb waits at the end.",
      footnotes: [],
      linguist_note:
        "whom ↔ wen/wem: English's wh-family (who/whom/whose) is the same interrogative-relative system as German wer/wen/wem. whom kept the accusative -m; German's dem/ihm wear the same ancient dative -m ending. The case is older than both languages' differences.",
    },
    exercises: [
      {
        id: "l5102_e1",
        type: "matching_pairs",
        prompt: "The case roster — match each relative clause with its reading:",
        matching_pairs: [
          { id: "cr1", english: "the film (that) I see", german: "der Film, den ich sehe" },
          { id: "cr2", english: "the man I help", german: "der Mann, dem ich helfe" },
          { id: "cr3", english: "the woman (that) I see", german: "die Frau, die ich sehe" },
          { id: "cr4", english: "the child I give the book to", german: "das Kind, dem ich das Buch gebe" },
          { id: "cr5", english: "the friend (whom) I see", german: "der Freund, den ich sehe" },
          { id: "cr6", english: "the person who is friendly", german: "die Person, die freundlich ist" },
          { id: "cr7", english: "the teacher I help", german: "der Lehrer, dem ich helfe" },
        ],
        target_answer: "der Film, den ich sehe, der Mann, dem ich helfe, die Frau, die ich sehe, das Kind, dem ich das Buch gebe, der Freund, den ich sehe, die Person, die freundlich ist, der Lehrer, dem ich helfe",
        meaning: "accusative and dative relatives in action",
        explanation: "sehen acts ON (den, accusative); helfen and geben give TO (dem, dative). The clause's verb sets the case.",
      },
      {
        id: "l5102_e2",
        type: "shift_select",
        prompt: "Why is it 'der Film, DEN ich sehe'?",
        options: [
          "The film is the OBJECT of see — accusative job",
          "The film is the subject of the clause",
          "Film is feminine",
          "sehen demands the dative",
        ],
        target_answer: "The film is the OBJECT of see — accusative job",
        meaning: "den = accusative relative pronoun",
        explanation: "The relative pronoun plays the object role inside its clause: der Film, den ich sehe — 'which I see', with whom's case logic.",
      },
      {
        id: "l5102_e3",
        type: "shift_select",
        prompt: "The dative club strikes again: 'Der Mann, _____ ich helfe.' (I help):",
        options: ["dem", "den", "der", "das"],
        target_answer: "dem",
        meaning: "Der Mann, dem ich helfe = the man I help",
        explanation: "helfen is a dative verb — helping goes TO someone — so the relative pronoun takes dative: dem.",
      },
      {
        id: "l5102_e4",
        type: "reverse_cognate",
        prompt: "Which English pronoun still wears the accusative case-marking that 'den' carries?",
        target_answer: "whom",
        meaning: "whom ↔ den/wen — the fossil accusative",
        explanation: "whom, wen, wem, ihm, dem all share the ancient -m case ending. English retired whom; German still clocks in daily.",
      },
      {
        id: "l5102_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'The film that I see is good'",
        target_answer: "Der Film den ich sehe ist gut",
        meaning: "Der Film, den ich sehe, ist gut",
        vocab_hints: [
          { word: "den", translation: "whom/which (accusative)", note: "the film is being seen — object job inside the clause" },
        ],
        word_bank: ["Der", "Film", "den", "ich", "sehe", "ist", "gut"],
        explanation: "sehe closes the relative basement; ist holds position 2 of the main clause — two verbs, two floors, one case interview passed.",
      },
    ],
    summary: {
      outcome: "Build accusative and dative relative clauses, deriving the case from the clause's own verb.",
      use_example: { german: "Der Mann, dem ich helfe, liest das Buch, das ich sehe.", english: "The man I help is reading the book that I see." },
      takeaway: "Gender from the noun outside, case from the verb inside: den for objects, dem for receivers — whom's living twin.",
      curiosity_teaser: "This relative branch ends here — more side paths wait on the map, and the whole compendium waits in review.",
    },
  },

  {
    id: 5111,
    slug: "the-three-whens-wann-als-wenn",
    title: "The Three Whens: wann, als, wenn",
    subtitle: "English 'when' does three jobs — German hires three words, all verb-final",
    phase: 3,
    shift_categories: [],
    word_ids: ["wann", "als", "wenn", "kommen", "kind", "gestern", "regnen", "lesen", "zeit", "lehrer", "person", "freund"],
    table_word_ids: ["wann", "als", "wenn", "regnen", "lesen"],
    hook: {
      title: "The When-Split",
      content:
        "English when is one word doing shift work: the question (When do you come?), the once-only past (when I was a child), the repeater (when it rains). German refuses the overtime and hires three. wann asks the question — the twin of when, same ancient root. wenn takes the repeater AND the condition (if) — wann's etymological doublet, the same word split into two jobs. And als marks the once-only past — but here is the twist: als is NOT in the when-family at all. It is the twin of English also (all-so → 'as' → 'than'), the same als you drilled as 'than' in the comparison gym. English collapsed three words into one and one into three; German keeps the divisions sharp.",
      footnotes: [
        {
          marker: "1",
          title: "The Doublet Test",
          content:
            "wann and wenn were one word in Old High German (hwanne) — exactly like English when, which comes from the same *hwan. wann kept the question job, wenn took the clause job. So when you hesitate between them, you are really choosing between 'asking' and 'linking' — the same choice English hides inside one spelling.",
        },
      ],
    },
    pattern: {
      title: "Three Jobs, Three Words, One Basement",
      content:
        "wann — the question: Wann kommst du? And the indirect question: Ich weiß nicht, wann er kommt (verb-final — the basement rule fires). als — the once-only past: Als Kind war ich... (as/when I was a child — the war from the fortress pasts), Als ich gestern kam... — plus its old job, 'than': älter als du. wenn — the repeater and the condition: Wenn es regnet, lese ich (when(ever) it rains, I read — and if it rains, the same sentence). Every one of the three drops the verb to the clause end: wann er kommt, als ich kam, wenn ich Zeit habe. If you can already build weil-clauses, you can build all three.",
      footnotes: [],
      linguist_note:
        "als ← OHG alsō, al ('all') + sō ('so') — the exact formation of English also. 'Than' and 'as' both grew out of 'entirely so' by the same worn-road semantic route German still shows transparently.",
    },
    exercises: [
      {
        id: "l5111_e1",
        type: "matching_pairs",
        prompt: "The when-split — match each sentence with its reading:",
        matching_pairs: [
          { id: "tw1", english: "When do you come? (question)", german: "Wann kommst du?" },
          { id: "tw2", english: "when I was a child (once-only)", german: "als ich ein Kind war" },
          { id: "tw3", english: "when(ever) it rains, I read", german: "wenn es regnet, lese ich" },
          { id: "tw4", english: "older than you (the old job)", german: "älter als du" },
          { id: "tw5", english: "when my friend arrived", german: "als mein Freund kam" },
          { id: "tw6", english: "when(ever) the teacher comes", german: "wenn der Lehrer kommt" },
          { id: "tw7", english: "when the person leaves", german: "wenn die Person geht" },
        ],
        target_answer: "Wann kommst du, als ich ein Kind war, wenn es regnet lese ich, älter als du, als mein Freund kam, wenn der Lehrer kommt, wenn die Person geht",
        meaning: "question, once-only past, repeater/condition, comparison",
        explanation: "wann asks, als marks the unique past moment (and 'than'), wenn repeats and conditions.",
      },
      {
        id: "l5111_e2",
        type: "shift_select",
        prompt: "'_____ kommst du?' (question — at what time?):",
        options: ["Wann", "Wenn", "Als", "Wo"],
        target_answer: "Wann",
        meaning: "Wann kommst du? = when are you coming?",
        explanation: "Questions take wann — the exact twin of English when, keeping the question job.",
      },
      {
        id: "l5111_e3",
        type: "shift_select",
        prompt: "'_____ ich gestern kam, war es spät.' (a one-time past moment):",
        options: ["Als", "Wenn", "Wann", "Dann"],
        target_answer: "Als",
        meaning: "Als ich gestern kam, war es spät = when I arrived yesterday, it was late",
        explanation: "One specific past event → als. Repeating or future conditions → wenn. English 'when' covers both; German splits them.",
      },
      {
        id: "l5111_e4",
        type: "reverse_cognate",
        prompt: "wann and wenn are doublets of one ancient word. Which English word is their twin?",
        target_answer: "when",
        meaning: "wann/wenn ↔ when (Proto-Germanic *hwan)",
        explanation: "All three descend from *hwan: English kept one spelling, German split asking (wann) from linking (wenn).",
      },
      {
        id: "l5111_e5",
        type: "syntax_builder",
        prompt: "Assemble the repeater: 'When it rains, I read'",
        target_answer: "Wenn es regnet lese ich",
        meaning: "Wenn es regnet, lese ich = when(ever) it rains, I read",
        vocab_hints: [
          { word: "regnet", translation: "rains", note: "regnen — the rain-verb; es regnet = it rains" },
        ],
        word_bank: ["Wenn", "es", "regnet", "lese", "ich"],
        explanation: "wenn builds the clause and the verb goes to the basement: regnet waits, lese waits — weil's rule, one more employee.",
      },
    ],
    summary: {
      outcome: "Choose between wann, als and wenn correctly and build all three with verb-final order.",
      use_example: { german: "Wann kommst du? — Wenn es regnet, lese ich.", english: "When are you coming? — When it rains, I read." },
      takeaway: "wann asks, als marks the once-only past (and 'than'), wenn repeats and conditions — and all three park the verb.",
      curiosity_teaser: "Next: ob — whether or not — the indirect yes/no word and English if's true twin.",
    },
  },

  {
    id: 5112,
    slug: "ob-whether-or-not",
    title: "ob: Whether or Not",
    subtitle: "the indirect yes/no word — and the true twin of English if",
    phase: 3,
    shift_categories: [],
    word_ids: ["ob", "wenn", "wissen", "kommen", "haben", "mögen", "zeit", "freund"],
    table_word_ids: ["ob", "wenn", "wissen", "haben"],
    hook: {
      title: "Two Ifs, One Ancient Word",
      content:
        "German has two ifs and refuses to share. wenn runs the conditions (if it rains...). ob handles the open question folded inside a statement: Ich weiß nicht, ob er kommt — I don't know IF he is coming. And here is the family secret: ob is the true twin of English if. Both descend from Proto-Germanic *jabai — English wore it down to if, German to ob, same ancient word, same job of opening a yes/no question inside a bigger sentence. English meanwhile drafted whether for the job German gives ob — and whether literally means 'which of the two', which is exactly what ob asks: yes, or no?",
      footnotes: [
        {
          marker: "1",
          title: "The 'Or Not' Test",
          content:
            "Not sure whether to use ob or wenn? Try adding 'or not'. I don't know if he's coming... or not → works → German wants ob. IF it rains... or not → breaks the sentence → German wants wenn. Ob reports an unanswered yes/no; wenn builds a condition on it.",
        },
      ],
    },
    pattern: {
      title: "ob in the Basement",
      content:
        "The frames: Ich weiß nicht, ob er kommt (I don't know whether he is coming). Ich weiß nicht, ob er Zeit hat (whether he has time — hat, haben's fortress form). Wir sehen, ob es regnet (we'll see whether it's raining). Ich möchte wissen, ob du kommst (I would like to know whether you are coming — möchte back from the escalator). Contrast pair: Ich weiß nicht, ob er kommt (whether — open question) versus Wenn er kommt, lese ich (if — condition). Both are basement clauses — the verb waits at the end for ob exactly as for wenn, weil and dass.",
      footnotes: [],
      linguist_note:
        "Proto-Germanic *jabai ('when, if') forked into English if and German ob — one of the rare pairs where the English twin looks NOTHING like its German sibling until the pedigree is on the table. The b and the f are the same ancient labial consonant, voiced differently down the centuries.",
    },
    exercises: [
      {
        id: "l5112_e1",
        type: "matching_pairs",
        prompt: "The two ifs — match each sentence with its reading:",
        matching_pairs: [
          { id: "ob1", english: "I don't know whether he is coming", german: "Ich weiß nicht, ob er kommt" },
          { id: "ob2", english: "if it rains, I read", german: "Wenn es regnet, lese ich" },
          { id: "ob3", english: "whether she has time", german: "ob sie Zeit hat" },
          { id: "ob4", english: "if I had time (would-world)", german: "Wenn ich Zeit hätte" },
          { id: "ob5", english: "I don't know whether my friend is coming", german: "Ich weiß nicht, ob mein Freund kommt" },
        ],
        target_answer: "Ich weiß nicht, ob er kommt, Wenn es regnet lese ich, ob sie Zeit hat, Wenn ich Zeit hätte, Ich weiß nicht, ob mein Freund kommt",
        meaning: "ob for open questions, wenn for conditions",
        explanation: "ob reports an open yes/no; wenn builds a condition. English splits the same jobs between whether/if and if.",
      },
      {
        id: "l5112_e2",
        type: "shift_select",
        prompt: "'Ich weiß nicht, _____ er kommt.' (I don't know IF/WHETHER...):",
        options: ["ob", "wenn", "als", "wann"],
        target_answer: "ob",
        meaning: "Ich weiß nicht, ob er kommt",
        explanation: "The 'or not' test: 'whether he is coming or not' works → ob. An indirect yes/no question folds ob into the sentence.",
      },
      {
        id: "l5112_e3",
        type: "shift_select",
        prompt: "The condition gets wenn: '_____ du kommst, lese ich.' (if you come, I read):",
        options: ["Wenn", "Ob", "Wann", "Als"],
        target_answer: "Wenn",
        meaning: "Wenn du kommst, lese ich = if you come, I read",
        explanation: "A condition built on the other clause's action → wenn. ob cannot build conditions — it only reports open questions.",
      },
      {
        id: "l5112_e4",
        type: "reverse_cognate",
        prompt: "ob looks nothing like it — but which everyday English word is its true twin (Proto-Germanic *jabai)?",
        target_answer: "if",
        meaning: "ob ↔ if (the same ancient word)",
        explanation: "English if and German ob both descend from *jabai. The family resemblance hid for a thousand years; the pedigree exposes it.",
      },
      {
        id: "l5112_e5",
        type: "syntax_builder",
        prompt: "Assemble the open question: 'I don't know whether he has time'",
        target_answer: "Ich weiß nicht ob er Zeit hat",
        meaning: "Ich weiß nicht, ob er Zeit hat",
        vocab_hints: [
          { word: "ob", translation: "whether / if", note: "the indirect yes/no word — verb goes to the basement" },
        ],
        word_bank: ["Ich", "weiß", "nicht", "ob", "er", "Zeit", "hat"],
        explanation: "weiß holds position 2 of the main clause; hat waits at the basement end — ob's clause runs on weil's rules.",
      },
    ],
    summary: {
      outcome: "Use ob for indirect yes/no questions, contrast it with wenn, and name English if as its twin.",
      use_example: { german: "Ich weiß nicht, ob er kommt — wenn er kommt, lese ich.", english: "I don't know whether he's coming — if he comes, I'll read." },
      takeaway: "ob asks the open yes/no ('or not' test), wenn builds the condition — and ob is English if, disguised.",
      curiosity_teaser: "This whether-branch ends here — more side paths wait on the map, and the whole compendium waits in review.",
    },
  },
  {
    id: 5121,
    slug: "zaehlen-i-eins-vier-fuenf-sechs-zehn",
    title: "Zählen I: eins, vier, fünf, sechs, zehn",
    subtitle: "the everyday count — and the T→S shift hiding inside zehn",
    phase: 3,
    shift_categories: ["t_to_s_ss_z"],
    word_ids: ["eins", "vier", "fünf", "sechs", "zehn", "zählen", "hundert", "zwölf", "minute", "uhr"],
    table_word_ids: ["eins", "vier", "fünf", "sechs", "zehn"],
    hook: {
      title: "Five Numbers, Three Shift Families",
      content:
        "You already own drei, zwei and hundert. These five fill the gaps you actually use — and they arrive wearing three different shift badges. zehn is the T→S family: German zehn and English ten are the same sound with the T hardened to a Z-sound, exactly like zwei/two and Tag/day. drei is the opposite badge, TH→D, which is why German three keeps its D and English three lost the H. eins has no badge at all: German eins and English one both fall back to Proto-Germanic *ainaz, the very first number any Indo-European language ever had. fünf and sechs are the plain ones — sound twins with no shift, which is precisely why they are easy. The number system is not a chore. It is the shift atlas with the volume turned up.",
      footnotes: [
        {
          marker: "1",
          title: "Why the Clock Is a Number Lesson",
          content:
            "Es ist fünf Uhr — 'it is five o'clock' — is the sentence Germans say more often than any other time sentence. The number, the noun Uhr and sein: three items, all drilled today. Say it wrong and you are understood; say it right and you are understood faster.",
        },
      ],
    },
    pattern: {
      title: "Where the Number Stands",
      content:
        "Three frames, one rule. 1. With sein: Es ist fünf Uhr (it is five o'clock) — the number simply stands in for the subject. 2. Counting: Ich zähle bis zehn (I count to ten) — zählen takes an endpoint, bis marks the ceiling. 3. With a noun: Ich habe vier Bücher (I have four books) — the number sits in front and the plural noun follows it bare, with NO article: nicht vier Bücher but vier Bücher. The clock: Es ist zwölf Uhr / Es ist sechs Uhr morgens. And the promise: Ich warte zehn Minuten (I wait ten minutes) — accusative time, no preposition.",
      footnotes: [],
      linguist_note:
        "The bare plural after a numeral is old: Latin, Greek and English all once said 'four oxen'. English kept the bare noun only after a few dozen ('four hundred men'); German never raised the threshold, so *vier Bücher* still sounds as natural as *four books*.",
    },
    exercises: [
      {
        id: "l5121_e1",
        type: "matching_pairs",
        prompt: "The everyday count — match each sentence with its reading:",
        matching_pairs: [
          { id: "zz1", english: "I count to ten", german: "Ich zähle bis zehn" },
          { id: "zz2", english: "It is five o'clock", german: "Es ist fünf Uhr" },
          { id: "zz3", english: "It is twelve o'clock", german: "Es ist zwölf Uhr" },
          { id: "zz4", english: "I have only one of those", german: "Ich habe nur eins davon" },
          { id: "zz5", english: "I have four books", german: "Ich habe vier Bücher" },
          { id: "zz6", english: "I wait ten minutes", german: "Ich warte zehn Minuten" },
        ],
        target_answer: "Ich zähle bis zehn, Es ist fünf Uhr, Es ist zwölf Uhr, Ich habe nur eins davon, Ich habe vier Bücher, Ich warte zehn Minuten",
        meaning: "counting, telling the time, counting things, waiting",
        explanation:
          "Five numbers in six frames. The bare plural after the numeral (vier Bücher, no article) is the German reflex of an older English 'four books'; the accusative Minute takes no preposition at all.",
      },
      {
        id: "l5121_e2",
        type: "shift_select",
        prompt: "Which of these five numbers wears the T→S shift badge (Tag→day, zwei→two)?",
        options: ["zehn", "vier", "eins", "sechs"],
        target_answer: "zehn",
        meaning: "zehn ↔ ten: the T→S/SS shift family",
        explanation:
          "zehn is the T→S family: the ancient T hardened to a Z-sound, and English kept the soft T in ten. vier and sechs shifted in neither direction (pure sound twins); eins has no shift — it is Proto-Germanic *ainaz, the first number.",
      },
      {
        id: "l5121_e3",
        type: "reverse_cognate",
        prompt: "'drei' keeps its D where English three lost its H — which shift is that?",
        options: ["TH→D (drei ↔ three)", "P→F", "K→CH", "V→B"],
        target_answer: "TH→D (drei ↔ three)",
        meaning: "drei ↔ three: the TH→D family runs the other way from T→S",
        explanation:
          "Both languages start from Proto-Germanic *þrīz. German hardened the þ to d; English kept the breathy th and later dropped it. Same ancient numeral, two sound laws pulling in opposite directions.",
      },
      {
        id: "l5121_e4",
        type: "morpheme_tiles",
        prompt: "Assemble the time sentence: 'It is five o'clock'",
        tile_options: ["Es", "ist", "fünf", "Uhr", "vier", "zehn"],
        target_answer: "Es ist fünf Uhr",
        meaning: "It is five o'clock",
        explanation: "es + ist + the number + die Uhr. The impersonal es does the work no German sentence ever asks a person to do.",
      },
      {
        id: "l5121_e5",
        type: "syntax_builder",
        prompt: "Assemble the counting sentence: 'I count to ten'",
        target_answer: "Ich zähle bis zehn",
        meaning: "I count to ten",
        vocab_hints: [
          {
            word: "bis",
            translation: "up to / until",
            note: "bis marks the ceiling of a count — Ich zähle bis zehn, not bis elf. English 'to' here is not 'until'.",
          },
        ],
        word_bank: ["Ich", "zähle", "bis", "zehn", "hundert"],
        explanation: "zählen takes an endpoint; bis tells you where the counting stops. hundert sits in the bank to prove the frame scales: Ich zähle bis hundert.",
      },
    ],
    summary: {
      outcome: "Count, tell the time, and put a bare plural after a number without thinking about it.",
      use_example: { german: "Es ist fünf Uhr — ich zähle bis zehn.", english: "It is five o'clock — I count to ten." },
      takeaway:
        "zehn wears the T→S badge, drei wears TH→D, eins is the untouched original — and vier Bücher takes no article.",
      curiosity_teaser: "Next: null and the nouns that count for you — die Zahl, die Nummer, die Hälfte, die Million.",
    },
  },

  {
    id: 5122,
    slug: "zaehlen-ii-null-zahl-nummer-haelfte-million",
    title: "Zählen II: null, die Zahl, die Nummer, die Hälfte, die Million",
    subtitle: "zero, and the four nouns that count for you",
    phase: 3,
    shift_categories: ["t_to_s_ss_z"],
    word_ids: ["null", "zahl", "nummer", "hälfte", "million", "zehn", "hundert", "zählen", "kuchen", "minute"],
    table_word_ids: ["null", "zahl", "nummer", "hälfte", "million"],
    hook: {
      title: "Zero Is a Latecomer",
      content:
        "null is a Roman import: Latin nullus ('not one') walked into German through the universities and stayed. English took the same Latin word through a different door — null. Between them, German and English share one number and one nothing. The four nouns are older friends wearing Latin clothes: die Zahl counts things, die Nummer is the number you look up (a phone number, a house number — Latin numerus, and English number is the same word), die Hälfte is 'half', doubled from halb the way zweimal doubles zwei, and die Million is Latin milio, the great Latin counting unit that English kept whole. Every one of them is die feminine — and every one of them is the same Z-sound as zehn, null's silent companion.",
      footnotes: [
        {
          marker: "1",
          title: "Zahl vs Nummer",
          content:
            "Die Zahl is the count itself — die Zahl sieben, a count of seven, a number in the mathematical sense. Die Nummer is the label: meine Telefonnummer, die Hausnummer, die Zimmernummer. If you can point at it on a card, it is a Nummer. If it is an abstract quantity, it is a Zahl.",
        },
      ],
    },
    pattern: {
      title: "Counting Nouns in Sentences",
      content:
        "Zero: Die Temperatur ist null Grad (the temperature is zero degrees) — null is an adjective here, uninflected in the commonest readings and declined like one when it stands alone. Nouns: eine Zahl / eine Nummer / eine Million take ihre normal die-forms. Doubling: die Hälfte des Kuchens (half of the cake) — des is genitive, and halb is hiding inside. Scale: eine Million Menschen, zwei Millionen. Time: null Uhr is midnight, and the frame you already own still holds — Es ist null Uhr.",
      footnotes: [],
      linguist_note:
        "English dropped the num- root from 'number' and kept it in 'numeric', 'numerous'. German kept the noun and gave English the adjective. Both kept die Million intact because both borrowed Latin milio at roughly the same moment, through the same scholarly channel.",
    },
    exercises: [
      {
        id: "l5122_e1",
        type: "matching_pairs",
        prompt: "Zero and the counting nouns — match each phrase with its reading:",
        matching_pairs: [
          { id: "nz1", english: "the number seven (the count)", german: "die Zahl sieben" },
          { id: "nz2", english: "my phone number", german: "meine Telefonnummer" },
          { id: "nz3", english: "half of the cake", german: "die Hälfte des Kuchens" },
          { id: "nz4", english: "one million people", german: "eine Million Menschen" },
          { id: "nz5", english: "the temperature is zero degrees", german: "Die Temperatur ist null Grad" },
        ],
        target_answer: "die Zahl sieben, meine Telefonnummer, die Hälfte des Kuchens, eine Million Menschen, Die Temperatur ist null Grad",
        meaning: "count, lookup number, half, million, zero",
        explanation:
          "Zahl counts, Nummer labels. Hälfte doubles halb and takes genitive des. Million is singular with its Million Menschen.",
      },
      {
        id: "l5122_e2",
        type: "shift_select",
        prompt: "'Wie ist deine Telefonnummer?' — which noun is the label you can look up?",
        options: ["die Nummer", "die Zahl", "die Hälfte", "null"],
        target_answer: "die Nummer",
        meaning: "die Nummer = the number you look up",
        explanation:
          "Point at it on a card and it is a Nummer — phone, house, room. Keep it abstract and it is a Zahl. Both descend from Latin numerus; English kept the root only in 'number'.",
      },
      {
        id: "l5122_e3",
        type: "derive",
        prompt: "Build the German for 'half' — the doubled relative of 'halb':",
        english_hint: "halb + the -te that turns an adjective into a counted share",
        target_answer: "die Hälfte",
        meaning: "die Hälfte = half",
        explanation:
          "halb is 'half'; die Hälfte is 'the half' — the same doubling that gives zweimal from zwei and einmal from ein.",
      },
      {
        id: "l5122_e4",
        type: "morpheme_tiles",
        prompt: "Assemble the midnight sentence: 'It is zero o'clock'",
        tile_options: ["Es", "ist", "null", "Uhr", "zehn", "Hälfte"],
        target_answer: "Es ist null Uhr",
        meaning: "It is zero o'clock — midnight",
        explanation: "Same frame as five o'clock, same impersonal es. null is Latin nullus; the frame never notices.",
      },
      {
        id: "l5122_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'The city has one million people'",
        target_answer: "Die Stadt hat eine Million Menschen",
        meaning: "The city has one million people",
        vocab_hints: [
          {
            word: "die Million",
            translation: "the million",
            note: "eine Million Menschen — singular noun, plural people, and no article on Menschen because it follows the numeral bare.",
          },
        ],
        word_bank: ["Die", "Stadt", "hat", "eine", "Million", "Menschen", "Zahl"],
        explanation:
          "Million is Latin milio, borrowed whole. After a numeral the noun stands bare: eine Million Menschen, nicht eine Million die Menschen.",
      },
    ],
    summary: {
      outcome: "Say zero, and reach for the right counting noun: Zahl, Nummer, Hälfte or Million.",
      use_example: { german: "Die Zahl ist null — meine Nummer bleibt geheim.", english: "The count is zero — my number stays secret." },
      takeaway:
        "null is Latin nullus, die Zahl counts, die Nummer labels, die Hälfte doubles halb — and all four are die.",
      curiosity_teaser: "Next: how often, in one word — immer, oft, manchmal, selten, einmal.",
    },
  },

  {
    id: 5131,
    slug: "wie-oft-immer-oft-manchmal-selten-einmal",
    title: "Wie oft? immer, oft, manchmal, selten, einmal",
    subtitle: "frequency without a helping verb — five single words doing English's -ly work",
    phase: 3,
    shift_categories: ["d_to_t"],
    word_ids: ["immer", "oft", "manchmal", "selten", "einmal", "morgen", "heute", "zeit", "kaffee", "trinken"],
    table_word_ids: ["immer", "oft", "manchmal", "selten", "einmal"],
    hook: {
      title: "English Needs a Helper, German Doesn't",
      content:
        "To say how often in English you reach for a helper: I always drink coffee, I often drink coffee, I sometimes drink coffee. German needs none of that — immer, oft, manchmal are single words that drop straight into the sentence and stay put. There is no do-support, no -ly, no position rule to memorise. Two of the five hide a shift you already own: selten wears the D→T badge backwards (compare English seldom, where the T hardened while German kept the D), and einmal is ein + Mal — one + time — the same doubling that built zweimal in topic 5. English kept the -mal half of that family and lost the German word for it.",
      footnotes: [
        {
          marker: "1",
          title: "The Mal Family",
          content:
            "Jedes Mal, ein Mal, zwei Mal — English and German split this word in half. English kept Mal as the noun 'time' and dropped Mal from the adverbs; German kept das Mal as noun AND built einmal, zweimal, dreimal on it. Both languages still say it: once and once.",
        },
      ],
    },
    pattern: {
      title: "Where the Frequency Word Lands",
      content:
        "Default slot: right after the verb, before the object. Ich trinke immer Kaffee (I always drink coffee). Freestyle fronting for emphasis: Immer trinke ich Kaffee — the adverb takes position 1 and pushes the conjugated verb to position 2, the same swap you do with heute and morgen. With negation: Ich tringe nicht oft Kaffee; nie is the absolute ('never') and sits exactly where nicht would. And the one-off: einmal means 'once', and its opposite einmalig is not needed — Einmal im Jahr fahre ich ans Meer does the job with an ordinary time phrase.",
      footnotes: [],
      linguist_note:
        "German's frequency adverbs are uninflected single words, which is why they never drift away from the verb. English bolted them on with -ly and let them wander to the front of the sentence; German's wandered and settled back into the same slot every time.",
    },
    exercises: [
      {
        id: "l5131_e1",
        type: "matching_pairs",
        prompt: "Frequency — match each sentence with its reading:",
        matching_pairs: [
          { id: "hf1", english: "I always drink coffee in the morning", german: "Ich trinke immer Kaffee am Morgen" },
          { id: "hf2", english: "We often have time today", german: "Wir haben oft heute Zeit" },
          { id: "hf3", english: "Sometimes I read a book", german: "Manchmal lese ich ein Buch" },
          { id: "hf4", english: "I seldom drink coffee", german: "Ich trinke selten Kaffee" },
          { id: "hf5", english: "Once a year I go to the sea", german: "Einmal im Jahr fahre ich ans Meer" },
        ],
        target_answer: "Ich trinke immer Kaffee am Morgen, Wir haben oft heute Zeit, Manchmal lese ich ein Buch, Ich trinke selten Kaffee, Einmal im Jahr fahre ich ans Meer",
        meaning: "always, often, sometimes, seldom, once a year",
        explanation:
          "No helper verb anywhere: always/never/often/sometimes/once are all single German words sitting after the conjugated verb.",
      },
      {
        id: "l5131_e2",
        type: "shift_select",
        prompt: "'Ich trinke _____ Kaffee.' (I seldom drink coffee) — which word wears the D→T badge?",
        options: ["selten", "immer", "manchmal", "oft"],
        target_answer: "selten",
        meaning: "selten ↔ seldom: German kept the D, English hardened it to T",
        explanation:
          "selten is the D→T family's mirror image: English turned the d into a t (seldom), German left the d alone. Same word, same meaning, opposite outcome.",
      },
      {
        id: "l5131_e3",
        type: "shift_select",
        prompt: "Fronted for emphasis: '_____ trinke ich Kaffee.' (Always I drink coffee):",
        options: ["Immer", "Nicht", "Sehr", "Schon"],
        target_answer: "Immer",
        meaning: "Immer trinke ich Kaffee = always I drink coffee",
        explanation:
          "Fronting a frequency adverb swaps positions 1 and 2: the adverb takes position 1, and the conjugated verb (trinke) moves up behind it. Same rule as heute and morgen.",
      },
      {
        id: "l5131_e4",
        type: "reverse_cognate",
        prompt: "'einmal' = one + Mal — and English kept the noun 'time'. What is the English word that survives?",
        options: ["time", "often", "again", "never"],
        target_answer: "time",
        meaning: "das Mal ↔ time: German kept the noun and built einmal on it",
        explanation:
          "German kept das Mal as 'time' AND the adverbs (einmal, zweimal). English kept only the noun — once, twice, and the noun time are two halves of the same German family.",
      },
      {
        id: "l5131_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'I always drink coffee in the morning'",
        target_answer: "Ich trinke immer Kaffee am Morgen",
        meaning: "I always drink coffee in the morning",
        vocab_hints: [
          {
            word: "immer",
            translation: "always",
            note: "immer goes straight after the conjugated verb — no helping word, no -ly. Ich trinke immer Kaffee.",
          },
        ],
        word_bank: ["Ich", "trinke", "immer", "Kaffee", "am", "Morgen"],
        explanation:
          "Verb in slot 2, immer in the slot behind it, then the object. am Morgen is the accusative time phrase with the article already inside the preposition.",
      },
    ],
    summary: {
      outcome: "Answer 'how often?' with one word, and slot it after the verb without a helper.",
      use_example: { german: "Manchmal trinke ich immer Kaffee.", english: "Sometimes I always drink coffee." },
      takeaway:
        "immer, oft, manchmal, selten, einmal — five helperless adverbs, and selten is English seldom's D→T twin.",
      curiosity_teaser: "Next: point-in-time adverbs — jetzt, sofort, später, früh, endlich.",
    },
  },

  {
    id: 5132,
    slug: "wann-genau-jetzt-sofort-spaeter-frueh-endlich",
    title: "Wann genau? jetzt, sofort, später, früh, endlich",
    subtitle: "point-in-time adverbs — German's five answers to 'when exactly?'",
    phase: 3,
    shift_categories: [],
    word_ids: ["jetzt", "sofort", "später", "früh", "endlich", "zeit", "morgen", "fahren", "kommen", "garten"],
    table_word_ids: ["jetzt", "sofort", "später", "früh", "endlich"],
    hook: {
      title: "When Exactly — Without a Preposition",
      content:
        "English answers 'when' with a noun: at noon, in the morning, at once. German has five adverbs that answer it with nothing but a word. jetzt (now), sofort (at once — never 'soon', a trap for anyone who pattern-matches on soon), später (later), früh (early — one f, and it never means 'too early'), endlich (finally / at last). All five drop into the same slot behind the conjugated verb that immer and oft just used, which means the frequency lesson and the time lesson are the same lesson wearing different vocabulary. Two of them travel: Bis später! is one of the three most common farewells in the language, and Endlich ist der Sommer da is the sentence you say when a wait finally ends.",
      footnotes: [
        {
          marker: "1",
          title: "sofort Is Not soon",
          content:
            "Komm bitte sofort! means 'come right now', urgently — the adverb sits closer to at once than to soon. If you want 'soon', German reaches for bald (from topic 8) or a gar bald: Bald bin ich da.",
        },
      ],
    },
    pattern: {
      title: "Same Slot, Five Words",
      content:
        "The frame never changes: verb in slot 2, time adverb behind it, everything else follows. Jetzt lerne ich Deutsch (now I am learning German). Der Zug fährt sehr früh (the train leaves very early). Endlich ist der Sommer da (at last summer is here). With a separable verb the adverb can also be pushed to the very front — Endlich kommt er (at last he is coming) — because an adverb in position 1 does exactly what a negated verb or a conjunction does. And the farewell: Bis später! takes the accusative of time you already own.",
      footnotes: [],
      linguist_note:
        "English made temporal 'when' a preposition word (at, in, on) and then fed it nouns. German kept the adverb slot empty and let single words fill it — which is why German sentences carry time as a flat adverb where English carries a small prepositional phrase.",
    },
    exercises: [
      {
        id: "l5132_e1",
        type: "matching_pairs",
        prompt: "Point in time — match each sentence with its reading:",
        matching_pairs: [
          { id: "zg1", english: "Now I am learning German", german: "Jetzt lerne ich Deutsch" },
          { id: "zg2", english: "The train leaves very early", german: "Der Zug fährt sehr früh" },
          { id: "zg3", english: "At last summer is here", german: "Endlich ist der Sommer da" },
          { id: "zg4", english: "Come along right away, please", german: "Komm bitte sofort mit" },
          { id: "zg5", english: "See you later", german: "Bis später" },
        ],
        target_answer: "Jetzt lerne ich Deutsch, Der Zug fährt sehr früh, Endlich ist der Sommer da, Komm bitte sofort mit, Bis später",
        meaning: "now, early, finally, at once, later",
        explanation:
          "No preposition anywhere. The adverb goes behind the conjugated verb — or takes position 1 and pushes the verb to slot 2 (Jetzt lerne ich).",
      },
      {
        id: "l5132_e2",
        type: "shift_select",
        prompt: "'Komm bitte _____!' (Come here AT ONCE, please) — which word means 'at once', not 'soon'?",
        options: ["sofort", "bald", "später", "früh"],
        target_answer: "sofort",
        meaning: "Komm bitte sofort! = come here right now",
        explanation:
          "sofort sits on the at-once end of the line. bald is the 'soon' of topic 8, später is later, früh is early. English soon has no single German twin.",
      },
      {
        id: "l5132_e3",
        type: "shift_select",
        prompt: "Adverb to position 1: '_____ kommt er.' (At last he is coming):",
        options: ["Endlich", "Nie", "Sehr", "Fast"],
        target_answer: "Endlich",
        meaning: "Endlich kommt er = at last he is coming",
        explanation:
          "An adverb in position 1 does what a negated verb does: kommt slides to slot 2. Same swap as Jetzt lerne ich Deutsch.",
      },
      {
        id: "l5132_e4",
        type: "reverse_cognate",
        prompt: "'früh' has one f and a long ü — which English word is its true twin?",
        options: ["early", "first", "fast", "soon"],
        target_answer: "early",
        meaning: "früh ↔ early: the same root, the same vowel",
        explanation:
          "Both come from Proto-Germanic *frēz, 'earlier than'. German kept the long ü where English drifted to ea — the cognate is audible the moment you say the pair aloud.",
      },
      {
        id: "l5132_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'The train leaves very early'",
        target_answer: "Der Zug fährt sehr früh",
        meaning: "The train leaves very early",
        vocab_hints: [
          {
            word: "früh",
            translation: "early",
            note: "one f, long ü. Der Zug fährt früh — the adverb rides behind the conjugated verb fährt, exactly like immer and oft did.",
          },
        ],
        word_bank: ["Der", "Zug", "fährt", "sehr", "früh", "spät"],
        explanation:
          "fahren in slot 2 (Der takes slot 1), then the adverb. Note the contrast pair waiting in the bank: spät is 'late', früh is 'early' — the same train, two hours apart.",
      },
    ],
    summary: {
      outcome: "Answer 'when exactly?' with one adverb, in the slot behind the verb.",
      use_example: { german: "Jetzt lerne ich Deutsch — bis später!", english: "Now I am learning German — see you later!" },
      takeaway:
        "jetzt, sofort, später, früh, endlich — five time adverbs, no preposition, same slot as immer and oft. sofort is at once, not soon.",
      curiosity_teaser: "Next: the calendar itself — Januar bis Mai, the Latin months with German mouths.",
    },
  },

  {
    id: 5141,
    slug: "kalender-i-januar-bis-mai",
    title: "Kalender I: Januar bis Mai",
    subtitle: "five Latin month names, five German pronunciations",
    phase: 3,
    shift_categories: [],
    word_ids: ["januar", "februar", "märz", "april", "mai", "monat", "jahr", "woche", "oft", "vier", "garten"],
    table_word_ids: ["januar", "februar", "märz", "april", "mai"],
    hook: {
      title: "Latin Names, German Mouths",
      content:
        "Every month in this lesson is a Latin month that never left. Januar, Februar, März, April, Mai — and the giveaway is German's pronunciation rule: all five keep the stress on the FIRST syllable, ja-NU-ar, fe-BRU-ar, MÄRZ, a-PRIL. English often pulls the stress to the second syllable, and when you learn German's months by ear you will be tempted to follow. Don't. And the grammar behind them is a one-off worth learning once: month names are masculine even though they end in -r, they take der (der Januar, not die Januare), and in dates they stand bare after the day — am 5. Mai, with no article in front of the name. One Monat has vier Wochen; a Jahr has zwölf Monate. The calendar is the one place where German and Latin never stopped talking.",
      footnotes: [
        {
          marker: "1",
          title: "The March Surprise",
          content:
            "Der März is the month where German and English diverge least — but watch the stress: German MÄRZ, English March. The z is the same sharp sound you drilled in zehn and zwei. And April is nearly identical on both sides, which is a gift rather than a coincidence.",
        },
      ],
    },
    pattern: {
      title: "Saying the Date",
      content:
        "Three frames, all of them old. 1. With a preposition: im Januar, im Februar, im März, im April, im Mai — 'im' is in + dem, and dem is the masculine, so the month name follows it bare. 2. As a subject: Der Januar ist kalt (January is cold). 3. In a date: am 5. Mai, am 1. April — the ordinal number, a dot, then the name with no article. And the arithmetic you already own: ein Monat hat vier Wochen; ein Jahr hat zwölf Monate.",
      footnotes: [],
      linguist_note:
        "The masculine gender of the months is a Latin leftover: Latin Ianuarius was a masculine proper name, and proper names kept their gender when they turned into common nouns. English lost the gender along with the names; German kept it, so you get der Januar and das Jahr — one masculine, one neuter, both Latin.",
    },
    exercises: [
      {
        id: "l5141_e1",
        type: "matching_pairs",
        prompt: "The first five months — match each sentence with its reading:",
        matching_pairs: [
          { id: "jm1", english: "January is cold", german: "Der Januar ist kalt" },
          { id: "jm2", english: "In February the children play in the garden", german: "Im Februar spielen die Kinder im Garten" },
          { id: "jm3", english: "In March it rains", german: "Im März regnet es" },
          { id: "jm4", english: "In April it often rains", german: "Im April regnet es oft" },
          { id: "jm5", english: "In May it is warm", german: "Im Mai ist es warm" },
        ],
        target_answer: "Der Januar ist kalt, Im Februar spielen die Kinder im Garten, Im März regnet es, Im April regnet es oft, Im Mai ist es warm",
        meaning: "the five months in sentences",
        explanation:
          "im = in + dem, so the masculine month name follows it bare. Every one of these five sentences is something a German will actually say about the weather.",
      },
      {
        id: "l5141_e2",
        type: "shift_select",
        prompt: "'___ April regnet es oft.' (In April it often rains) — which preposition-plus-article contracts to im?",
        options: ["im", "am", "vom", "zum"],
        target_answer: "im",
        meaning: "im April = in dem April",
        explanation:
          "Month names are masculine, so in + dem = im. Compare am Montag (an dem) and im Garten (in dem) — same contraction law, different genders.",
      },
      {
        id: "l5141_e3",
        type: "shift_select",
        prompt: "One month has how many weeks?",
        options: ["vier", "zehn", "fünf", "sechs"],
        target_answer: "vier",
        meaning: "Ein Monat hat vier Wochen",
        explanation:
          "vier — the same word you counted with two lessons ago. Ein Monat hat vier Wochen; ein Jahr hat zwölf Monate; and die Woche is a K→CH word, the ch of Milch and Buch.",
      },
      {
        id: "l5141_e4",
        type: "reverse_cognate",
        prompt: "Which of the five month names is nearly IDENTICAL in English and German — letter for letter?",
        options: ["April", "Januar", "Februar", "März"],
        target_answer: "April",
        meaning: "April ↔ April: the same Latin name both languages kept whole",
        explanation:
          "April survives untouched on both sides. Januar became January with an added J, and Februar and März kept their consonants while English rewrote their vowels.",
      },
      {
        id: "l5141_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'A month has four weeks'",
        target_answer: "Ein Monat hat vier Wochen",
        meaning: "A month has four weeks",
        vocab_hints: [
          {
            word: "die Woche",
            translation: "the week",
            note: "K→CH: die Woche carries the same ch as Milch and Buch. And the plural after a numeral is bare — vier Wochen, nicht vier die Wochen.",
          },
        ],
        word_bank: ["Ein", "Monat", "hat", "vier", "Wochen", "Jahr"],
        explanation:
          "hat in slot 2, then the bare numeral and its bare plural. Swap Monat for Jahr and the same frame gives you the year.",
      },
    ],
    summary: {
      outcome: "Name the first five months, use im + the bare name, and state the month-to-week arithmetic.",
      use_example: { german: "Im April regnet es oft — ein Monat hat vier Wochen.", english: "In April it often rains — a month has four weeks." },
      takeaway:
        "Der Januar, der Februar, der März, der April, der Mai — masculine, bare after im, and always stressed on the first syllable.",
      curiosity_teaser: "Next: Juni bis Oktober, the second half of the year's Latin wardrobe.",
    },
  },

  {
    id: 5142,
    slug: "kalender-ii-juni-bis-oktober",
    title: "Kalender II: Juni bis Oktober",
    subtitle: "the second half of the Latin year — and the Roman numbers hiding inside it",
    phase: 3,
    shift_categories: [],
    word_ids: ["juni", "juli", "august", "september", "oktober", "monat", "jahr", "warm", "regnen", "vier", "zehn", "oft"],
    table_word_ids: ["juni", "juli", "august", "september", "oktober"],
    hook: {
      title: "A Calendar Forgetting Its Own Numbers",
      content:
        "Last lesson: five Latin names that never left. These five tell a second story — a calendar slowly forgetting how to count. September is Latin septem, 'seven', and Oktober is octo, 'eight': in the old Roman year that began in March, they really were months seven and eight. Juli and August once counted too — Quintilis, 'fifth', and Sextilis, 'sixth' — until the big names moved in: Julius Caesar took the fifth month (Juli), Augustus took the sixth (August, 'the venerable one'), and Juni belongs to Juno, queen of the gods. English kept every one of these names whole — June, July, August — so this is not vocabulary, it is pronunciation: German hammers the stress onto the FIRST syllable (JU-ni, AU-gust, SEP-tem-ber) where English lets it drift (ju-LY, au-GUST, sep-TEM-ber). And the law from Kalender I still holds: months are masculine and stand bare after im — im Juni, im Oktober.",
      footnotes: [
        {
          marker: "1",
          title: "The J That Isn't a J",
          content:
            "Latin's I was a Y-sound, and German still says it that way: Juni sounds like 'YOO-nee' and Juli like 'YOO-lee'. English hardened the sound into J (June, July). Same Latin name, two consonants — but the vowel never moved, which is why the months feel so familiar when you say them the German way.",
        },
      ],
    },
    pattern: {
      title: "Dates in the Second Half",
      content:
        "Same three frames as Kalender I, new names. 1. With a preposition: im Juni, im Juli, im August, im September, im Oktober — 'im' is in + dem, and dem is the masculine, so the bare name follows. 2. As a subject: Der August ist heiß. 3. Weather small talk: Im Oktober regnet es oft. The arithmetic scales up: von Januar bis Oktober sind es zehn Monate. And the date frame from last lesson still works: am 5. Mai, am 1. September — ordinal, dot, bare name.",
      footnotes: [],
      linguist_note:
        "English pulled the stress rightward over the centuries (ju-LY, au-GUST, sep-TEM-ber, oc-TO-ber); German's first-syllable law never moved (JU-li, AU-gust, SEP-tem-ber, OK-to-ber). Two thousand years of Latin company, and German still gives every borrowed name the same German beat.",
    },
    exercises: [
      {
        id: "l5142_e1",
        type: "matching_pairs",
        prompt: "The second half of the year — match each sentence with its reading:",
        matching_pairs: [
          { id: "jo1", english: "June is warm", german: "Der Juni ist warm" },
          { id: "jo2", english: "In July we often swim", german: "Im Juli schwimmen wir oft" },
          { id: "jo3", english: "August is hot", german: "Der August ist heiß" },
          { id: "jo4", english: "In September it rains on four days", german: "Im September regnet es an vier Tagen" },
          { id: "jo5", english: "In October the leaves fall", german: "Im Oktober fallen die Blätter" },
          { id: "jo6", english: "From January to October there are ten months", german: "Von Januar bis Oktober sind es zehn Monate" },
        ],
        target_answer:
          "Der Juni ist warm, Im Juli schwimmen wir oft, Der August ist heiß, Im September regnet es an vier Tagen, Im Oktober fallen die Blätter, Von Januar bis Oktober sind es zehn Monate",
        meaning: "the five months in sentences, plus the count",
        explanation:
          "im + the bare masculine name, exactly as in Kalender I. And the count still runs underneath: from Januar to Oktober there are zehn Monate — the Roman count you will close out next lesson.",
      },
      {
        id: "l5142_e2",
        type: "shift_select",
        prompt: "Which month is Latin septem — 'seven' — even though it is the ninth month of our year?",
        options: ["September", "Juni", "Juli", "August"],
        target_answer: "September",
        meaning: "September hides the Roman number seven",
        explanation:
          "The old Roman year began in March, so September really was the seventh month (septem) and Oktober the eighth (octo). When January moved to the front, the names kept their old numbers — a fossil count you now own in two languages.",
      },
      {
        id: "l5142_e3",
        type: "reverse_cognate",
        prompt:
          "'Der August' still carries a Roman emperor's title, augustus — 'the venerable one'. Which English month is the same name?",
        options: ["August", "October", "June", "July"],
        target_answer: "August",
        meaning: "August ↔ August: one emperor, one name, two languages",
        explanation:
          "Augustus renamed the sixth month (Sextilis) after himself, and both German and English kept it letter for letter — only the stress moved: German AU-gust, English au-GUST. Juni keeps a goddess (Juno) and Juli an emperor (Julius Caesar) the same way.",
      },
      {
        id: "l5142_e4",
        type: "morpheme_tiles",
        prompt: "Assemble the October sentence: 'In October the leaves fall'",
        tile_options: ["Im", "Oktober", "fallen", "die", "Blätter", "September", "warm"],
        target_answer: "Im Oktober fallen die Blätter",
        meaning: "In October the leaves fall",
        explanation:
          "Time phrase first, verb second, subject last — the German order you have been assembling all along. Fallen is the same strong verb as English fall; die Blätter is the umlauted plural of das Blatt.",
      },
      {
        id: "l5142_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'In June I have vacation'",
        target_answer: "Im Juni habe ich Urlaub",
        meaning: "In June I have vacation",
        word_bank: ["Im", "Juni", "habe", "ich", "Urlaub", "Juli", "heiß"],
        explanation:
          "habe in slot 2, the time phrase up front. Swap the month and the sentence still works: Im Juli habe ich Urlaub. The frame is yours; the calendar just fills the gap.",
      },
    ],
    summary: {
      outcome:
        "Name Juni through Oktober, keep the first-syllable stress, and read the Roman count hiding in September and Oktober.",
      use_example: { german: "Im August ist es heiß — im Oktober fallen die Blätter.", english: "In August it is hot — in October the leaves fall." },
      takeaway:
        "Der Juni, der Juli, der August, der September, der Oktober — masculine, bare after im, stressed on the first syllable, with septem and octo still counting inside.",
      curiosity_teaser: "Next: November and Dezember — the count finally closes, and the holiday words walk in with it.",
    },
  },

  {
    id: 5143,
    slug: "kalender-iii-november-dezember-feiertag-ostern-wochentag",
    title: "Kalender III: November, Dezember, Feiertag, Ostern, Wochentag",
    subtitle: "the count closes at ten — and the holiday words walk in with it",
    phase: 3,
    shift_categories: ["t_to_s_ss_z"],
    word_ids: ["november", "dezember", "feiertag", "ostern", "wochentag", "feiern", "tag", "januar", "februar", "märz", "april", "mai", "oft", "einmal"],
    table_word_ids: ["november", "dezember", "feiertag", "ostern", "wochentag"],
    hook: {
      title: "The Count Closes, the Parties Begin",
      content:
        "The last two months finish the count the Romans started. November is Latin novem, 'nine', and Dezember is decem, 'ten' — and decem is your old friend wearing Latin clothes: it is the same ancient word as German zehn and English ten, the T hardened to a Z-sound exactly as in zwei/two and zu/to. The Roman count still sits inside the name. Then the calendar stops counting and starts celebrating. Der Feiertag is feiern + Tag — a day for celebrating — and Tag is the same ancient word as English day. Der Wochentag is Woche + Tag, the build that runs the whole week: Montag, Dienstag, Freitag — each one is a Wochentag. And then Ostern, the one holiday whose name English also kept: Ostern and Easter are the same Germanic name, built on *aust-, 'dawn, east' — the season when the light comes back. One name, two languages, and neither ever let it go.",
      footnotes: [
        {
          marker: "1",
          title: "Bede's Honest Doubt",
          content:
            "Everything we know about the goddess behind the name comes from one English monk, Bede, writing in 725: the English, he says, named the spring month after a goddess called Ēostre. Scholars still argue whether she was a real goddess or Bede's own guess from the month's name. What is certain: German Ostern and English Easter are the same name from the same root — *aust-, 'dawn, east' — and the fact that both languages kept it is the aha.",
        },
      ],
    },
    pattern: {
      title: "Holidays, Weekdays, the Last Two Months",
      content:
        "1. The months: im November, im Dezember — same masculine frame. 2. The holiday: Heute ist ein Feiertag. 3. The weekday: Der Montag ist ein Wochentag — and am Wochenende ist die Familie zu Hause. 4. The celebrations: Wir feiern Ostern im März oder im April — Ostern ist einmal im Jahr. 5. Your dates keep working: Mein Geburtstag ist im Mai. And the weather runs on: Im November regnet es oft, der Dezember ist dunkel.",
      footnotes: [],
      linguist_note:
        "German builds its calendar out of Tag exactly the way English builds out of day: Feiertag, Wochentag, Geburtstag, Freitag. The factory is shared; only the parts are German. English even kept one finished product — Easter — straight from the same Germanic shelf as Ostern.",
    },
    exercises: [
      {
        id: "l5143_e1",
        type: "matching_pairs",
        prompt: "The year's end and its holidays — match each sentence with its reading:",
        matching_pairs: [
          { id: "nd1", english: "In November it often rains", german: "Im November regnet es oft" },
          { id: "nd2", english: "December is dark", german: "Der Dezember ist dunkel" },
          { id: "nd3", english: "Today is a public holiday", german: "Heute ist ein Feiertag" },
          { id: "nd4", english: "The third of October is a holiday", german: "Der 3. Oktober ist ein Feiertag" },
          { id: "nd5", english: "Easter is in March or in April", german: "Ostern ist im März oder im April" },
          { id: "nd6", english: "Easter is once a year", german: "Ostern ist einmal im Jahr" },
          { id: "nd7", english: "My birthday is in May", german: "Mein Geburtstag ist im Mai" },
        ],
        target_answer:
          "Im November regnet es oft, Der Dezember ist dunkel, Heute ist ein Feiertag, Der 3. Oktober ist ein Feiertag, Ostern ist im März oder im April, Ostern ist einmal im Jahr, Mein Geburtstag ist im Mai",
        meaning: "the last months, the holiday words, and your dates",
        explanation:
          "Everything rides on frames you already own: im + the bare month, ist + ein Feiertag, einmal im Jahr from the frequency lesson. And it is all true — Germany's national holiday really is the 3. Oktober, and Easter really does fall only in März or April.",
      },
      {
        id: "l5143_e2",
        type: "reverse_cognate",
        prompt:
          "Ostern is the one holiday name English kept. Which English word is its twin — the festival, not the direction?",
        options: ["Easter", "East", "Evening", "October"],
        target_answer: "Easter",
        meaning: "Ostern ↔ Easter: one Germanic name, two languages",
        explanation:
          "Ostern and Easter are the same name built on *aust-, 'dawn, east' — the spring festival of the returning light. East is the root's cousin, not the festival: the holiday word is Easter, and German and English both kept it whole.",
      },
      {
        id: "l5143_e3",
        type: "shift_select",
        prompt:
          "Dezember is Latin decem. Which German number is hiding inside it — the same ancient word as English ten?",
        options: ["zehn", "zwei", "zwölf", "drei"],
        target_answer: "zehn",
        meaning: "decem ↔ zehn: the T→Z hardening inside Dezember",
        explanation:
          "Latin decem and German zehn both descend from the same Proto-Indo-European 'ten' — German hardened the T to a Z-sound, exactly zwei/two and zu/to. Dezember was the tenth month of the old Roman count, and the number never left the name.",
      },
      {
        id: "l5143_e4",
        type: "morpheme_tiles",
        prompt: "Assemble the weekday sentence: 'Monday is a weekday'",
        tile_options: ["Der", "Montag", "ist", "ein", "Wochentag", "Wochenende", "Sonntag"],
        target_answer: "Der Montag ist ein Wochentag",
        meaning: "Monday is a weekday",
        explanation:
          "See the compound build itself: Woche + Tag = Wochentag, the same Tag as in Feiertag and Geburtstag. Sonntag and Wochenende wait in the bank — the parts of the week you already own, ready to swap in.",
      },
      {
        id: "l5143_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'In January and in February it is cold'",
        target_answer: "Im Januar und im Februar ist es kalt",
        meaning: "In January and in February it is cold",
        word_bank: ["Im", "Januar", "und", "im", "Februar", "ist", "es", "kalt", "heiß", "März"],
        explanation:
          "Two time phrases joined by und, then the verb, then es. Swap the pair for any months you own — Im Juli und im August ist es heiß — and the same frame carries the whole year.",
      },
    ],
    summary: {
      outcome:
        "Close the calendar: November and Dezember with their Roman numbers, the Feiertag/Wochentag compounds, and Ostern as the holiday English kept.",
      use_example: {
        german: "Im Dezember feiern wir — Ostern kommt im März oder im April.",
        english: "In December we celebrate — Easter comes in March or in April.",
      },
      takeaway:
        "November is novem, Dezember hides zehn (decem), Feiertag and Wochentag are Tag-compounds — and Ostern/Easter is one Germanic name, *aust-, 'dawn, east', kept on both sides of the North Sea.",
      curiosity_teaser:
        "Next: Dauer und Termin — how long things last, and the Latin hiding inside the most German verb in the room.",
    },
  },

  {
    id: 5151,
    slug: "dauer-termin-moment-dauern-termin-sekunde-datum",
    title: "Dauer & Termin: der Moment, dauern, der Termin, die Sekunde, das Datum",
    subtitle: "how long things last — and the Latin hiding inside the most German verb in the room",
    phase: 3,
    shift_categories: [],
    word_ids: ["moment", "dauern", "termin", "sekunde", "datum", "minute", "stunde", "null", "zahl", "million", "jetzt", "später", "früh"],
    table_word_ids: ["moment", "dauern", "termin", "sekunde", "datum"],
    hook: {
      title: "Even the Waiting Is Roman",
      content:
        "You already say when (jetzt, sofort, später) and how often (oft, einmal). Today: how LONG. Der Moment is Latin momentum, 'movement' — a moment is one beat of the moving world, and English momentum in physics class is the same word in a lab coat. Der Termin is Latin terminus, the boundary stone a Roman planted where his land ended — a Termin is an end-point planted in your day, and English terminus and terminal are the same stone. Die Sekunde is Latin secundus, 'the following' — the minute's follower, sixty of them deep; English second is the same follower. Das Datum is Latin datum, 'the given' — the date is what the calendar hands you, and English data is literally the same word in the plural. And the sleeper: dauern looks like the most German verb alive, but it walked in from Latin durare, 'to last, to hold out' — dauern and English during, duration, durable are one verb in two coats.",
      footnotes: [
        {
          marker: "1",
          title: "The Politeness Pair",
          content:
            "Einen Moment, bitte and Eine Sekunde, bitte are the two standard 'one moment, please's — accusative, because the moment is the thing you are being handed. Moment buys you patience; Sekunde buys you urgency. Same frame, different clock.",
        },
      ],
    },
    pattern: {
      title: "Dauern Eats the Accusative",
      content:
        "One frame carries the lesson: Der Termin dauert zwanzig Minuten — the duration stands in the accusative with NO preposition, exactly like Ich warte zehn Minuten. The question is just the frame tilted: Wie lange dauert der Termin? The politeness pair rides the same accusative: Einen Moment, bitte! Eine Sekunde, bitte! The scale climbs — die Sekunde, die Minute, die Stunde — and the case never changes. And the date: Wie ist das Datum heute? — Heute ist der 3. Oktober. Zero fits the same clock: Es ist null Uhr — Mitternacht.",
      footnotes: [],
      linguist_note:
        "The accusative of duration is inherited, not invented: Latin measured time the same bare way (multos annos, 'for many years' — accusative, no preposition). German's dauern kept the old measurement; English needs a 'for' and moves on.",
    },
    exercises: [
      {
        id: "l5151_e1",
        type: "matching_pairs",
        prompt: "Moments, seconds, appointments — match each sentence with its reading:",
        matching_pairs: [
          { id: "mt1", english: "One moment, please", german: "Einen Moment, bitte" },
          { id: "mt2", english: "One second, please", german: "Eine Sekunde, bitte" },
          { id: "mt3", english: "The appointment lasts twenty minutes", german: "Der Termin dauert zwanzig Minuten" },
          { id: "mt4", english: "Zero is a number", german: "Null ist eine Zahl" },
          { id: "mt5", english: "A million has six zeros", german: "Eine Million hat sechs Nullen" },
          { id: "mt6", english: "The appointment is early in the morning", german: "Der Termin ist früh am Morgen" },
          { id: "mt7", english: "See you later", german: "Bis später" },
        ],
        target_answer:
          "Einen Moment, bitte, Eine Sekunde, bitte, Der Termin dauert zwanzig Minuten, Null ist eine Zahl, Eine Million hat sechs Nullen, Der Termin ist früh am Morgen, Bis später",
        meaning: "the politeness pair, the duration frame, and the numbers on the clock",
        explanation:
          "The accusative is everywhere: einen Moment (der Moment), eine Sekunde (die Sekunde), zwanzig Minuten — duration and objects, no preposition in sight. And the numbers you drilled are already inside: null, eine Million, sechs Nullen.",
      },
      {
        id: "l5151_e2",
        type: "shift_select",
        prompt:
          "'Der Termin dauert zwanzig Minuten.' What case is 'zwanzig Minuten' — and what does that tell you about dauern?",
        options: ["accusative of duration", "nominative subject", "dative", "genitive"],
        target_answer: "accusative of duration",
        meaning: "dauern takes a bare accusative of duration",
        explanation:
          "dauern measures its span with a bare accusative — zwanzig Minuten, keine Präposition. It is the same measurement as Ich warte zehn Minuten, and the same construction Latin used: the duration simply stands there, unmarked.",
      },
      {
        id: "l5151_e3",
        type: "morpheme_tiles",
        prompt: "Assemble the duration question: 'How long does the appointment last'",
        tile_options: ["Wie", "lange", "dauert", "der", "Termin", "Moment", "Zahl"],
        target_answer: "Wie lange dauert der Termin",
        meaning: "How long does the appointment last?",
        vocab_hints: [
          {
            word: "lange",
            translation: "long / (for) how long",
            note: "Wie lange asks about DURATION — how long it lasts, from start to finish.",
          },
        ],
        explanation:
          "Wie lange dauert ...? is the all-purpose duration question — swap the subject and it still works: Wie lange dauert der Kaffee, die Stunde, der Winter? The verb dauert sits in slot 2, as always.",
      },
      {
        id: "l5151_e4",
        type: "reverse_cognate",
        prompt:
          "'Das Datum' is Latin datum, 'the given'. Which English word is the same Latin word — the one you type every day?",
        options: ["data", "date", "dozen", "detail"],
        target_answer: "data",
        meaning: "Datum ↔ data: one Latin participle, two languages",
        explanation:
          "Datum is the neuter past participle of Latin dare, 'to give' — 'the given'. English data is literally that same word in the plural, and English date came through the same medieval Latin channel. The calendar hands you data every time you write a Datum.",
      },
      {
        id: "l5151_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'Now I have an appointment'",
        target_answer: "Jetzt habe ich einen Termin",
        meaning: "Now I have an appointment",
        word_bank: ["Jetzt", "habe", "ich", "einen", "Termin", "Moment", "früh", "der"],
        explanation:
          "Jetzt takes position 1, habe slides to slot 2 — the V2 swap from the time-adverb lesson. einen Termin is masculine accusative, the same case as einen Moment, bitte.",
      },
    ],
    summary: {
      outcome:
        "Say how long something lasts with dauern + bare accusative, book a Termin, ask the date, and buy patience with Einen Moment, bitte.",
      use_example: { german: "Wie lange dauert der Termin? — Zwanzig Minuten.", english: "How long does the appointment last? — Twenty minutes." },
      takeaway:
        "Moment, Termin, Sekunde, Datum are Latin loans — and so, in disguise, is dauern (durare ↔ during). Duration takes a bare accusative: Der Termin dauert zwanzig Minuten.",
      curiosity_teaser: "Next: Ort I — hier, dort, drüben, gegenüber, der Umweg — the words that tell you where.",
    },
  },

  {
    id: 5161,
    slug: "ort-i-hier-dort-drueben-gegenueber-umweg",
    title: "Ort I: hier, dort, drüben, gegenüber, der Umweg",
    subtitle: "the words that point — and the sound shift hiding inside dort",
    phase: 3,
    shift_categories: ["th_to_d", "v_to_b"],
    word_ids: ["hier", "dort", "drüben", "gegenüber", "umweg", "wohnen", "haus", "kirche", "brücke", "nummer", "eins", "immer", "sofort", "nehmen"],
    table_word_ids: ["hier", "dort", "drüben", "gegenüber", "umweg"],
    hook: {
      title: "English Points Twice, German Points Four Times",
      content:
        "English points with here and there and then gives up. German points four times. hier and here are the purest twins you will ever meet — both come from the same Proto-Germanic *hiar, untouched, with no shift to explain. dort is there's twin with a badge: the same ancient adverb *þar, with German hardening the breathy th to d — the same law that made drei out of three and das out of that. drüben is über wearing its adverb coat — 'on the over side' — and über ↔ over is the V→B twin you know from geben/give. gegenüber stacks gegen ('against') on über ('over') — over-against — a relation English writes as a whole phrase. Der Umweg is um + Weg, a way-around, and Weg ↔ way is a twin as old as the road. So the honest score: English kept here and there, but lost drüben and gegenüber as single words and spells the detour with borrowed letters; German still runs three rungs of distance — hier, dort, drüben.",
      footnotes: [
        {
          marker: "1",
          title: "The TH→D Family Reunion",
          content:
            "Once you hear TH→D you hear it everywhere: three/drei, that/das, thou/du, there/dort. One sound law, one family, thousands of years old — and German never stopped inviting the th to harden. Say dort and there back to back and feel the d and the th be the same consonant wearing two dialects.",
        },
      ],
    },
    pattern: {
      title: "Four Words, Three Distances",
      content:
        "1. Here: Ich wohne hier — where you stand. 2. There: Die Brücke ist drüben — across the gap, visible but far. 3. Plain there: Das Auto ist dort. 4. Opposite: Gegenüber ist die Kirche — or with a noun, postposed: das Haus gegenüber. 5. The detour: Wir nehmen einen Umweg — 'a way around'. 6. Right away: Ich komme sofort. And the numbers still point: das Haus gegenüber hat die Nummer eins.",
      footnotes: [],
      linguist_note:
        "Three degrees of distance is the old Germanic system: hier, dort, drüben. English once had the third rung too — yonder, still alive in dialects — but standard English collapsed to two words and a phrase ('over there'). German never had to collapse; the system is intact.",
    },
    exercises: [
      {
        id: "l5161_e1",
        type: "matching_pairs",
        prompt: "The pointing words in place — match each sentence with its reading:",
        matching_pairs: [
          { id: "hd1", english: "I live here", german: "Ich wohne hier" },
          { id: "hd2", english: "The bridge is over there", german: "Die Brücke ist drüben" },
          { id: "hd3", english: "Opposite is the church", german: "Gegenüber ist die Kirche" },
          { id: "hd4", english: "The house opposite has number one", german: "Das Haus gegenüber hat die Nummer eins" },
          { id: "hd5", english: "We take a detour", german: "Wir nehmen einen Umweg" },
          { id: "hd6", english: "I am coming right away", german: "Ich komme sofort" },
        ],
        target_answer:
          "Ich wohne hier, Die Brücke ist drüben, Gegenüber ist die Kirche, Das Haus gegenüber hat die Nummer eins, Wir nehmen einen Umweg, Ich komme sofort",
        meaning: "here, over there, opposite, detour, right away",
        explanation:
          "Notice the two faces of gegenüber: alone in position 1 (Gegenüber ist die Kirche) or trailing its noun (das Haus gegenüber). One word, two seats — and der Umweg is literally a 'way-around'.",
      },
      {
        id: "l5161_e2",
        type: "shift_select",
        prompt: "dort ↔ there — which shift badge does the pair wear?",
        options: ["TH→D (dort ↔ there)", "T→S/Z (zehn ↔ ten)", "K→CH (Woche ↔ week)", "V→B (über ↔ over)"],
        target_answer: "TH→D (dort ↔ there)",
        meaning: "dort is there's twin: the ancient *þar with th hardened to d",
        explanation:
          "Both point back to Proto-Germanic *þar. English kept the breathy th; German hardened it to d — the same law as drei/three and das/that. And you can see the V→B badge on the word drüben: über ↔ over, with b where English has v.",
      },
      {
        id: "l5161_e3",
        type: "reverse_cognate",
        prompt:
          "The purest twin in the lesson: hier. Spell its English twin — the one word that never shifted at all:",
        options: ["here", "hear", "hair", "hare"],
        target_answer: "here",
        meaning: "hier ↔ here: the same *hiar, untouched",
        explanation:
          "hier and here are the same Proto-Germanic word *hiar with no shift to explain — h stayed h, the vowel stayed itself. The twins never moved apart; the spelling just drifted one letter.",
      },
      {
        id: "l5161_e4",
        type: "morpheme_tiles",
        prompt: "Assemble the detour sentence: 'We take a detour'",
        tile_options: ["Wir", "nehmen", "einen", "Umweg", "sofort", "die", "Kirche"],
        target_answer: "Wir nehmen einen Umweg",
        meaning: "We take a detour",
        explanation:
          "nehmen + einen Umweg — masculine accusative, the same case as einen Moment, bitte. The compound says exactly what it does: um + Weg, a way-around. Distractors wait in the bank, but the detour is the destination.",
      },
      {
        id: "l5161_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'We always live here'",
        target_answer: "Wir wohnen immer hier",
        meaning: "We always live here",
        word_bank: ["Wir", "wohnen", "immer", "hier", "dort", "die", "Kirche"],
        explanation:
          "wohnen in slot 2, immer right behind it, hier at the end — the frequency adverb from the Wie-oft lesson doing its job in a new house. Swap hier for dort and the sentence moves across town.",
      },
    ],
    summary: {
      outcome:
        "Point four ways — hier, dort, drüben, gegenüber — take an Umweg, and hear the TH→D shift inside dort.",
      use_example: { german: "Ich wohne hier — die Brücke ist drüben.", english: "I live here — the bridge is over there." },
      takeaway:
        "hier/here never shifted, dort/there wears TH→D, drüben hides über/over, gegenüber is gegen+über stacked, and der Umweg is a 'way-around' — Weg and way are the same word.",
      curiosity_teaser: "Next: Richtung I — links, rechts, geradeaus, oben, unten — the words that tell you which way.",
    },
  },

  {
    id: 5162,
    slug: "richtung-i-links-rechts-geradeaus-oben-unten",
    title: "Richtung I: links, rechts, geradeaus, oben, unten",
    subtitle: "left, right, and the words that point the way — one twin, one loner, three builders",
    phase: 3,
    shift_categories: ["y_gh_to_g_ch"],
    word_ids: ["links", "rechts", "geradeaus", "oben", "unten", "familie", "wohnen", "auto", "kirche", "garten", "fünf", "sechs", "manchmal", "endlich"],
    table_word_ids: ["links", "rechts", "geradeaus", "oben", "unten"],
    hook: {
      title: "Left Is the Loner",
      content:
        "Two of today's five are twins; three are builders. rechts is right — the same ancient word *rehtaz, 'straight, correct', which is why direction and correctness are one idea in both languages (du hast recht / you are right — you already own the adjective). English kept the -ight family — right, light, night, eight — and German answers with -echt and -acht: recht, Licht, Nacht, acht. One photo album, two spellings. links is the honest loner: no English twin survives. English's own left grew from a different old word meaning 'weak', and the two never were related — some twins simply die, and pretending otherwise is how etymology gets a bad name. geradeaus is two small words welded: gerade ('straight') + aus ('out') — straight-out, the whole direction in one breath. And oben and unten are the adverbs of prepositions you already trust: oben is built on über's root (über ↔ over), unten on unter's (unter ↔ under). Up is over's adverb; down is under's.",
      footnotes: [
        {
          marker: "1",
          title: "The Adverbial -s",
          content:
            "rechts, links — and morgens, abends — all wear an old genitive -s: 'of the right', 'of the morning'. English once marked adverbs the same way and keeps the fossil in 'besides' and the old phrase 'needs must'. The -s is not a plural and not a verb ending; it is grammar's dust.",
        },
      ],
    },
    pattern: {
      title: "Which Way? One Word Each",
      content:
        "1. Sideways: nach links, nach rechts — Die Kirche ist links, das Auto steht rechts. 2. Ahead: Gehen Sie geradeaus — and the street's own answer, Immer geradeaus! 3. Vertical: Der Himmel ist oben, der Garten ist unten. 4. Living there: Oben wohnen sechs Familien. 5. With a walk: Gehen Sie fünf Minuten geradeaus. 6. Home at last: Endlich bin ich zu Hause. The words never inflect — no endings, no agreement; they sit where adverbs sit and point where you face.",
      footnotes: [],
      linguist_note:
        "Unlike the months, the direction words are pure Germanic — no Latin ever planted a flag on the body's own map. Left and right are anchored to your facing hand, up and down to your height, which is why every language inherits the same body-relative frame and fills it with its own sounds.",
    },
    exercises: [
      {
        id: "l5162_e1",
        type: "matching_pairs",
        prompt: "Directions in place — match each sentence with its reading:",
        matching_pairs: [
          { id: "lr1", english: "The church is on the left", german: "Die Kirche ist links" },
          { id: "lr2", english: "The car is on the right", german: "Das Auto steht rechts" },
          { id: "lr3", english: "Go straight ahead", german: "Gehen Sie geradeaus" },
          { id: "lr4", english: "The sky is above", german: "Der Himmel ist oben" },
          { id: "lr5", english: "The garden is below", german: "Der Garten ist unten" },
          { id: "lr6", english: "Six families live upstairs", german: "Oben wohnen sechs Familien" },
          { id: "lr7", english: "Finally I am home", german: "Endlich bin ich zu Hause" },
        ],
        target_answer:
          "Die Kirche ist links, Das Auto steht rechts, Gehen Sie geradeaus, Der Himmel ist oben, Der Garten ist unten, Oben wohnen sechs Familien, Endlich bin ich zu Hause",
        meaning: "left, right, straight ahead, up, down",
        explanation:
          "One word per direction, no prepositions, no endings. And the vertical pair stays busy: oben wohnen sechs Familien — upstairs, where the families are — while der Garten waits unten.",
      },
      {
        id: "l5162_e2",
        type: "reverse_cognate",
        prompt: "links has no English twin — but its partner does. Give the English twin of rechts:",
        options: ["right", "left", "straight", "up"],
        target_answer: "right",
        meaning: "rechts ↔ right — the true pair; links is the honest loner",
        explanation:
          "rechts and right are the same word *rehtaz — the -ight/-echt family with light/Licht and night/Nacht. links never had an English twin: English's left grew from an old word meaning 'weak'. Honest limitation, not a missed connection.",
      },
      {
        id: "l5162_e3",
        type: "shift_select",
        prompt: "You already know 'du hast recht' (you are right). Which word is the DIRECTION twin of that recht?",
        options: ["rechts", "links", "oben", "geradeaus"],
        target_answer: "rechts",
        meaning: "rechts is the adverb of recht — direction and correctness are one root",
        explanation:
          "English did the same thing with one word: right (correct) and right (not left). German split the jobs — recht keeps the meaning, rechts takes the direction — but both grow from *rehtaz, 'straight'. The straight path and the correct answer are the same idea.",
      },
      {
        id: "l5162_e4",
        type: "morpheme_tiles",
        prompt: "Assemble the walking direction: 'Go five minutes straight ahead'",
        tile_options: ["Gehen", "Sie", "fünf", "Minuten", "geradeaus", "sechs", "links"],
        target_answer: "Gehen Sie fünf Minuten geradeaus",
        meaning: "Go five minutes straight ahead",
        explanation:
          "The verb leads, Sie follows, the measure of time sits in the middle, and geradeaus closes the sentence — the same slot the duration accusative took with dauern. Swap fünf for sechs and the walk gets longer.",
      },
      {
        id: "l5162_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'Sometimes I go left and sometimes right'",
        target_answer: "Manchmal gehe ich nach links und manchmal nach rechts",
        meaning: "Sometimes I go left and sometimes right",
        word_bank: ["Manchmal", "gehe", "ich", "nach", "links", "und", "manchmal", "rechts", "oben", "geradeaus"],
        explanation:
          "manchmal opens the sentence and pushes gehe to slot 2 — the V2 swap again. nach is the pointing preposition: nach links, nach rechts, nach Hause. The repetition is the rhythm of real street directions.",
      },
    ],
    summary: {
      outcome:
        "Point all five ways — links, rechts, geradeaus, oben, unten — and know which twin lives, which died, and which are compounds.",
      use_example: {
        german: "Gehen Sie geradeaus — die Kirche ist links, wir wohnen oben.",
        english: "Go straight ahead — the church is on the left, we live upstairs.",
      },
      takeaway:
        "rechts/right is one word (*rehtaz, with recht, Licht, Nacht, acht), links has no English twin, geradeaus is gerade+aus, and oben/unten are the adverbs of über/over and unter/under.",
      curiosity_teaser: "Next: hinten and the compass — Norden, Osten, Westen, Süden — the map the sun drew.",
    },
  },

  {
    id: 5171,
    slug: "richtung-ii-hinten-norden-osten-westen-sueden",
    title: "Richtung II: hinten, Norden, Osten, Westen, Süden",
    subtitle: "behind, and the four compass points — dawn, evening, sun-side and the left hand",
    phase: 3,
    shift_categories: ["d_to_t", "th_to_d"],
    word_ids: [
      "hinten",
      "norden",
      "osten",
      "westen",
      "süden",
      "garten",
      "auto",
      "zug",
      "stadt",
      "kirche",
      "brücke",
      "links",
      "rechts",
      "geradeaus",
      "eins",
      "vier",
      "zehn",
    ],
    table_word_ids: ["hinten", "norden", "osten", "westen", "süden"],
    hook: {
      title: "One Body Word, Four Sky Words",
      content:
        "Five direction words — one for your body, four for the sky. hinten is the body word: German built it on the same ancient behind-root that gave English behind (be-hind, 'by the hind part') — German hardened the D to T, the d_to_t family at work, the same law that turned day into Tag. English keeps the hin family only in the archaic-sounding hence and hither; German still says hin every day — hin und her, back and forth. The four compass points are pure twins, because German and English read the same sky. der Norden ↔ north. der Osten ↔ east — from the dawn-word *austrōn, 'toward the sunrise', the same dawn-root Latin turned into aurora. der Süden ↔ south — from *sunþrą, literally 'the sun side', the warm side of the sky. der Westen ↔ west — from the evening-root Latin keeps in vesper. Four sky twins, one body twin, and a lesson you can navigate by.",
      footnotes: [
        {
          marker: "1",
          title: "North Is a Left-Handed Word",
          content:
            "Norden is the odd one out: it is not a sun word. The old root *ner- meant 'left' — face the rising sun and north is your left hand. East is where you look at dawn, west where the evening glow goes (Latin vesper and English west are the same evening-word), and south is the sun side. One compass, four etymologies.",
        },
      ],
    },
    pattern: {
      title: "The Compass Takes der, hinten Takes Nothing",
      content:
        "Compass points are masculine and take im: im Norden, im Osten, im Süden, im Westen — 'in the north'. Motion adds the accusative: in den Süden, or plain nach Süden ('southward'). hinten is an adverb — no article, no case: hinten links (at the back on the left), von hinten (from behind), hinten im Garten (at the back of the garden). The fronting frame from Richtung I still holds: put a place in position 1 and the verb holds slot 2 — Im Süden ist es warm. And the compass scales into real sentences: Der Zug kommt aus dem Osten — the train comes from the east.",
      footnotes: [],
      linguist_note:
        "English behind is literally 'by the hind part' — the same hind that survives in hind legs and hindquarters. German kept the whole family alive: hinten, hinter, hintereinander. English kept the adjective and the preposition; German kept the everyday adverb.",
    },
    exercises: [
      {
        id: "l5171_e1",
        type: "matching_pairs",
        prompt: "The compass and the space behind you — match each sentence with its reading:",
        matching_pairs: [
          { id: "rw1", english: "The garden is at the back on the left", german: "Der Garten ist hinten links" },
          { id: "rw2", english: "The car comes from behind", german: "Das Auto kommt von hinten" },
          { id: "rw3", english: "The train comes from the east", german: "Der Zug kommt aus dem Osten" },
          { id: "rw4", english: "The bridge is in the south", german: "Die Brücke ist im Süden" },
          { id: "rw5", english: "There are four streets in the north", german: "Es gibt vier Straßen im Norden" },
          { id: "rw6", english: "The church is in the west", german: "Die Kirche ist im Westen" },
          { id: "rw7", english: "Go straight ahead to the right", german: "Gehen Sie geradeaus nach rechts" },
        ],
        target_answer:
          "Der Garten ist hinten links, Das Auto kommt von hinten, Der Zug kommt aus dem Osten, Die Brücke ist im Süden, Es gibt vier Straßen im Norden, Die Kirche ist im Westen, Gehen Sie geradeaus nach rechts",
        meaning: "behind, east, south, north, west",
        explanation:
          "hinten needs no article; the compass points take im or aus dem. The frame is always the same: place phrase, verb, rest — Der Zug kommt aus dem Osten.",
      },
      {
        id: "l5171_e2",
        type: "shift_select",
        prompt: "One of these words describes the space BEHIND you, not a point of the compass — which?",
        options: ["hinten", "Norden", "Osten", "Westen"],
        target_answer: "hinten",
        meaning: "hinten = at the back, behind you — not a sky direction",
        explanation:
          "hinten is where YOUR body is: hinten links, von hinten. Norden, Osten and Westen are world-fixed — they point the same way no matter how you turn. Body-relative versus sky-fixed: one word each.",
      },
      {
        id: "l5171_e3",
        type: "reverse_cognate",
        prompt: "Osten and east are twins from the dawn-word *austrōn. Which Latin word shares the same dawn-root?",
        options: ["aurora", "terra", "audire", "augustus"],
        target_answer: "aurora",
        meaning: "Osten ↔ east ↔ aurora: one dawn-root across three languages",
        explanation:
          "Proto-Germanic *austrōn ('toward the sunrise') and Latin aurora ('dawn') both grow from the same ancient dawn-root. East is the dawn-land; the goddess of dawn is its name in Latin. terra, audire and augustus are unrelated.",
      },
      {
        id: "l5171_e4",
        type: "morpheme_tiles",
        prompt: "Assemble the weather-on-the-compass sentence: 'It is warm in the south'",
        tile_options: ["Im", "Süden", "ist", "es", "warm", "Norden", "kalt"],
        target_answer: "Im Süden ist es warm",
        meaning: "It is warm in the south",
        explanation:
          "Place first, verb second: Im Süden ist es warm. The impersonal es does the work, and the two distractor tiles show the frame scales to every compass point — Im Norden ist es kalt.",
      },
      {
        id: "l5171_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'The train comes from the south at ten o'clock'",
        target_answer: "Der Zug kommt um zehn Uhr aus dem Süden",
        meaning: "The train comes from the south at ten o'clock",
        word_bank: ["Der", "Zug", "kommt", "um", "zehn", "Uhr", "aus", "dem", "Süden", "eins", "vier", "Osten"],
        explanation:
          "Time before place: um zehn Uhr, then aus dem Süden. The bank holds eins and vier to prove the frame takes any clock number — um eins, um vier, um zehn.",
      },
    ],
    summary: {
      outcome:
        "Use hinten for the space behind you and the four compass points for the world's directions — im Norden, aus dem Osten, in den Süden.",
      use_example: { german: "Der Zug kommt um zehn Uhr aus dem Süden.", english: "The train comes from the south at ten o'clock." },
      takeaway:
        "hinten is behind's D→T twin; Norden, Osten, Westen and Süden are pure sky twins — dawn, evening, sun-side and the left hand.",
      curiosity_teaser: "Next: the distance axis — die Nähe, weit, fern, quer, entlang.",
    },
  },

  {
    id: 5172,
    slug: "entfernung-naehe-weit-fern-quer-entlang",
    title: "Entfernung: die Nähe, weit, fern, quer, entlang",
    subtitle: "near and far on one axis — and the two words that walk a path instead of pointing at a place",
    phase: 3,
    shift_categories: [],
    word_ids: ["nähe", "weit", "fern", "quer", "entlang", "weg", "straße", "fluss", "strand", "umweg", "geradeaus", "eins", "vier", "zehn", "hälfte"],
    table_word_ids: ["nähe", "weit", "fern", "quer", "entlang"],
    hook: {
      title: "One Axis: Nah to Fern",
      content:
        "Distance in German is one line with two ends. die Nähe holds the near end: German nah and English nigh are the same ancient word, *nēhwaz — and English even kept the comparison: near was originally nigh's comparative, 'nigher', frozen into its own word. weit ↔ wide is a pure twin, *wīdaz, the same sound in both languages: when German asks Wie weit ist es? it is literally asking how WIDE the gap is. fern ↔ far share the ancient beyond-root; English drifted to far, German kept fern — and built das Fernsehen, the far-seer, on it. Then the two path words: entlang is ent + lang, and lang ↔ long is a pure twin — German names the path first and hangs entlang behind it: den Fluss entlang. quer is the cross-word; English queer may even be its borrowing [UNVERIFIED — check]. Nah, die Nähe, weit, fern — and two words for the shape of the road between.",
      footnotes: [
        {
          marker: "1",
          title: "wie weit, never wie fern",
          content:
            "German asks distance with wie weit — 'how wide' — and never with fern. fern states a fact from where you stand (der Strand ist nicht fern), while weit measures the stretch between two points. The question is wide; the answer is far.",
        },
      ],
    },
    pattern: {
      title: "Asking, Answering, Crossing, Walking",
      content:
        "Ask the stretch: Wie weit ist es? Answer with time, not numbers: Zehn Minuten zu Fuß. State remoteness: Der Weg ist nicht fern. Locate with die Nähe: in der Nähe — In der Nähe gibt es einen Markt. Cross the space: quer durch die Stadt — durch does the case work. Walk the path: Wir gehen den Fluss entlang — the path takes accusative (den Fluss) and entlang stands AFTER it, the opposite of English word order.",
      footnotes: [],
      linguist_note:
        "English split the old near-family three ways: nigh retreated into poetry, near took the daily slot, and nearly drifted into 'almost'. German kept one adjective, nah, and one noun, die Nähe — the family never had to split.",
    },
    exercises: [
      {
        id: "l5172_e1",
        type: "matching_pairs",
        prompt: "The near-far axis and the two path words — match each sentence with its reading:",
        matching_pairs: [
          { id: "df1", english: "How far is the beach?", german: "Wie weit ist der Strand?" },
          { id: "df2", english: "The way is not far", german: "Der Weg ist nicht fern" },
          { id: "df3", english: "There is a market nearby", german: "In der Nähe gibt es einen Markt" },
          { id: "df4", english: "I drive across the city", german: "Ich fahre quer durch die Stadt" },
          { id: "df5", english: "Ten minutes on foot", german: "Zehn Minuten zu Fuß" },
          { id: "df6", english: "Half of the street is new", german: "Die Hälfte der Straße ist neu" },
          { id: "df7", english: "We take a detour — the way is far", german: "Wir nehmen einen Umweg, der Weg ist weit" },
          { id: "df8", english: "Go straight ahead to the corner", german: "Gehen Sie geradeaus bis zur Ecke" },
        ],
        target_answer:
          "Wie weit ist der Strand?, Der Weg ist nicht fern, In der Nähe gibt es einen Markt, Ich fahre quer durch die Stadt, Zehn Minuten zu Fuß, Die Hälfte der Straße ist neu, Wir nehmen einen Umweg, der Weg ist weit, Gehen Sie geradeaus bis zur Ecke",
        meaning: "how far, not far, nearby, across, on foot, half",
        explanation:
          "wie weit asks the stretch, fern states the remoteness, die Nähe names the neighborhood, and quer durch crosses the space. Time answers where numbers fail: Zehn Minuten zu Fuß.",
      },
      {
        id: "l5172_e2",
        type: "shift_select",
        prompt: "'Wie _____ ist der Weg?' — which word does German use to ask HOW FAR?",
        options: ["weit", "fern", "eins", "vier"],
        target_answer: "weit",
        meaning: "wie weit = how far — the wide-word asks the distance",
        explanation:
          "The fixed question is wie weit — literally 'how wide', the twin of wide at work. fern answers, it never asks: der Weg ist nicht fern. And eins and vier count things, not kilometers.",
      },
      {
        id: "l5172_e3",
        type: "reverse_cognate",
        prompt: "'weit' is a pure twin — the same ancient *wīdaz. Which English word is it?",
        options: ["wide", "white", "with", "wit"],
        target_answer: "wide",
        meaning: "weit ↔ wide: same sound, same root, same width",
        explanation:
          "weit and wide are one word in two mouths: *wīdaz. white is the twin of a different German word (weiß), and with and wit come from other roots entirely — the width belongs to weit.",
      },
      {
        id: "l5172_e4",
        type: "morpheme_tiles",
        prompt: "Assemble the time-answer frame: 'I wait four minutes'",
        tile_options: ["Ich", "warte", "vier", "Minuten", "zehn", "weit"],
        target_answer: "Ich warte vier Minuten",
        meaning: "I wait four minutes",
        explanation:
          "German answers distance in time: not four streets but four minutes. warte takes the time phrase with no preposition — the same accusative frame as Ich warte zehn Minuten from the numbers lesson.",
      },
      {
        id: "l5172_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'We walk along the river'",
        target_answer: "Wir gehen den Fluss entlang",
        meaning: "We walk along the river",
        word_bank: ["Wir", "gehen", "den", "Fluss", "entlang", "quer", "weit", "die", "dem"],
        explanation:
          "entlang rides BEHIND the path: den Fluss entlang, never entlang den Fluss. The path takes accusative — den, not dem — which is why dem sits in the bank as the trap tile.",
      },
    ],
    summary: {
      outcome: "Ask wie weit, answer with fern or a time, and shape the path with quer and entlang.",
      use_example: { german: "Wie weit ist der Strand? — Zehn Minuten zu Fuß.", english: "How far is the beach? — Ten minutes on foot." },
      takeaway:
        "die Nähe ↔ nigh, weit ↔ wide, fern ↔ far, entlang = ent + lang — one axis, two path words, and entlang always last.",
      curiosity_teaser: "Next: the words English handed over — Sofa, Radio, Klavier, Computer, Kino.",
    },
  },

  {
    id: 5181,
    slug: "lehnwoerter-i-sofa-radio-klavier-computer-kino",
    title: "Lehnwörter I: Sofa, Radio, Klavier, Computer, Kino",
    subtitle: "five words English handed over — and the German mouth that received them",
    phase: 3,
    shift_categories: [],
    word_ids: ["sofa", "radio", "klavier", "computer", "kino", "auto", "hund", "sitzen", "film", "haus", "neu", "schwer", "stadt"],
    table_word_ids: ["sofa", "radio", "klavier", "computer", "kino"],
    hook: {
      title: "German Borrows Back",
      content:
        "For most of its history German lent English words; this lesson is the border crossing in the other direction — and every word that crosses, German says with its own mouth. der Computer is Latin computare, 'to reckon up' — English kept the Latin, and German kept the very same Latin. das Klavier came through French clavier, from Latin clavis, 'key' — the piano is literally a key-board, and English kept the same key-root in clavichord (and in clavicle, the shoulder's 'little key'). das Kino is a German shortening of Kinematograph — Greek kinēma, 'movement' — and cinema is the same Greek word English uses. das Radio hides Latin radius, 'ray' — the ray that carries the signal. das Sofa walked the longest road: Arabic ṣuffa, a cushioned bench, that both languages borrowed whole. German writes them almost as English does — then pronounces them as if it had invented them: KEE-no, kla-VEER.",
      footnotes: [
        {
          marker: "1",
          title: "Why So Much das?",
          content:
            "Four of the five arrive as das — das Sofa, das Radio, das Kino, das Klavier; only der Computer is der. Borrowed things tend to start neuter in German and earn their article over time. The gender is German's decision, not the donor's.",
        },
      ],
    },
    pattern: {
      title: "Same Letters, German Mouth",
      content:
        "The frames are everyday German: Das Auto hat ein Radio. Ich sitze auf dem Sofa. Der Computer ist neu. Im Kino sehen wir einen Film — in + dem, German's where-frame, doing for Kino what at does for cinema. What German did not change: the spellings are nearly the English ones. What it did change: the mouth — final -o stays long (Kino, Radio), the W in Klavier is the V-sound, and the stress lands where German wants it: KEE-no, kla-VEER.",
      footnotes: [],
      linguist_note:
        "A loanword's stress tells you when it arrived. Kino, Sofa and Radio took German's comfortable first-syllable beat; Klavier kept its French final stress — kla-VIER — a little Paris still audible inside German.",
    },
    exercises: [
      {
        id: "l5181_e1",
        type: "matching_pairs",
        prompt: "The borrowed objects in their natural frames — match each sentence with its reading:",
        matching_pairs: [
          { id: "lw1", english: "The dog sits on the sofa", german: "Der Hund sitzt auf dem Sofa" },
          { id: "lw2", english: "The car has a radio", german: "Das Auto hat ein Radio" },
          { id: "lw3", english: "The computer is new", german: "Der Computer ist neu" },
          { id: "lw4", english: "The piano is big and heavy", german: "Das Klavier ist groß und schwer" },
          { id: "lw5", english: "At the cinema we watch a film", german: "Im Kino sehen wir einen Film" },
        ],
        target_answer:
          "Der Hund sitzt auf dem Sofa, Das Auto hat ein Radio, Der Computer ist neu, Das Klavier ist groß und schwer, Im Kino sehen wir einen Film",
        meaning: "sofa, radio, computer, piano, cinema",
        explanation:
          "Five loanwords in five German frames: auf dem Sofa, im Kino, hat ein Radio. The words are international; the grammar around them is pure German.",
      },
      {
        id: "l5181_e2",
        type: "reverse_cognate",
        prompt:
          "Klavier came through French clavier — Latin clavis, 'key'. Which English instrument still hides the same Latin word?",
        options: ["clavichord", "harpsichord", "piano", "organ"],
        target_answer: "clavichord",
        meaning: "Klavier ↔ clavichord: one Latin key-word, clavis",
        explanation:
          "Latin clavis, 'key', became French clavier and German Klavier — and English names the clavichord with the same Latin key. The harpsichord is harp-and-chord, the piano is Italian for 'soft', the organ is Greek — none of them carries the key.",
      },
      {
        id: "l5181_e3",
        type: "shift_select",
        prompt: "Der, die oder das — which article does German give Sofa, Radio, Kino and Klavier?",
        options: ["das", "der", "die"],
        target_answer: "das",
        meaning: "das Sofa, das Radio, das Kino, das Klavier — the neuter default",
        explanation:
          "Borrowed things tend to start neuter: das Sofa, das Radio, das Kino, das Klavier. Only der Computer breaks the pattern. German assigns the gender; the donor language has no vote.",
      },
      {
        id: "l5181_e4",
        type: "morpheme_tiles",
        prompt: "Assemble the where-frame: 'The cinema is in the city'",
        tile_options: ["Das", "Kino", "ist", "in", "der", "die", "dem", "Stadt"],
        target_answer: "Das Kino ist in der Stadt",
        meaning: "The cinema is in the city",
        explanation:
          "Where-frames take in + dative: in der Stadt, im Haus, im Auto. das Kino stays das even as the subject — the frame around it is what changes.",
      },
      {
        id: "l5181_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'The house has a computer and a radio'",
        target_answer: "Das Haus hat einen Computer und ein Radio",
        meaning: "The house has a computer and a radio",
        word_bank: ["Das", "Haus", "hat", "einen", "Computer", "und", "ein", "Radio", "Kino", "ist", "der"],
        explanation:
          "Two accusatives, two endings: der Computer becomes einen Computer in the accusative, das Radio stays ein Radio. The loanwords inflect exactly like the native nouns — borrowing changes the vocabulary, never the grammar.",
      },
    ],
    summary: {
      outcome:
        "Recognize the five loans, use them in German frames — im Kino, auf dem Sofa — and say them German-style: KEE-no, kla-VEER.",
      use_example: {
        german: "Das Klavier ist groß und schwer — im Kino sehen wir einen Film.",
        english: "The piano is big and heavy — at the cinema we watch a film.",
      },
      takeaway:
        "Sofa, Radio, Klavier, Computer, Kino — Arabic, Latin and Greek roots that German writes like English and says like German; four of the five are das.",
      curiosity_teaser: "Next: Hotel, Taxi, Bus, Theater, Hobby — the travel-and-leisure layer.",
    },
  },

  {
    id: 5182,
    slug: "lehnwoerter-ii-hotel-taxi-bus-theater-hobby",
    title: "Lehnwörter II: Hotel, Taxi, Bus, Theater, das Hobby",
    subtitle: "the travel-and-leisure layer — short Bus, long Theater, and the stress German imposes",
    phase: 3,
    shift_categories: [],
    word_ids: ["hotel", "taxi", "bus", "theater", "hobby", "nehmen", "fahren", "gehen", "teuer", "schwimmen", "stadt", "fünf", "sechs"],
    table_word_ids: ["hotel", "taxi", "bus", "theater", "hobby"],
    hook: {
      title: "The Travel Layer",
      content:
        "The travel-and-leisure words are German's most cosmopolitan shelf — Latin, Greek, French and English itself, all pronounced with German rules. das Hotel is one word wearing three English masks: Latin hospitale became French hôtel, and English borrowed the family three times as hostel, hotel and hospital. das Taxi is a shortening: the meter on the roof that charged you was the Taxameter — Latin taxa, 'charge', the same root as English tax — and the cab took the meter's name. der Bus is Latin omnibus, 'for all' — a French omnibus car shortened until only the Latin ending survived. das Theater is Greek théatron, 'the viewing place' — and English theory is the same Greek viewing-root: a theory is a way of seeing. das Hobby is the newest arrival, borrowed straight from English and pluralized German-style: die Hobbys. And watch the stress German imposes: Bus is short and blunt, but Theater carries the beat in the middle — te-A-ter — where English says THI-ater.",
      footnotes: [
        {
          marker: "1",
          title: "For All",
          content:
            "Omnibus is Latin 'for all' — the dative plural of omnis. The Paris passenger car of the 1820s was the voiture omnibus, the car-for-all, and the nickname outlived the joke: both languages kept the short form, bus, and forgot the Latin.",
        },
      ],
    },
    pattern: {
      title: "Taking the Bus, Taking a Taxi",
      content:
        "Transport takes mit + dem: Wir fahren mit dem Bus in die Stadt. Destination takes zu or in + das: zum Hotel, ins Theater. The vehicle frame: Wir nehmen ein Taxi zum Hotel — nehmen does the taking. Der Bus kommt um sechs Uhr. Duration: Es dauert fünf Minuten mit dem Taxi. And the leisure frame: Mein Hobby ist Schwimmen — the verb dressed as a noun. The articles: das Hotel, das Taxi, das Theater, das Hobby — only der Bus is der, the one short blunt exception.",
      footnotes: [],
      linguist_note:
        "German stress is the arrival stamp. Bus kept its single blunt syllable; Theater moved the beat to the middle — te-A-ter — a Greek-French rhythm English never adopted; Hobby folded into German plurals (die Hobbys) while staying English in spelling.",
    },
    exercises: [
      {
        id: "l5182_e1",
        type: "matching_pairs",
        prompt: "The travel-and-leisure shelf in its frames — match each sentence with its reading:",
        matching_pairs: [
          { id: "tv1", english: "The bus comes at six o'clock", german: "Der Bus kommt um sechs Uhr" },
          { id: "tv2", english: "We take a taxi to the hotel", german: "Wir nehmen ein Taxi zum Hotel" },
          { id: "tv3", english: "We are going to the theater today", german: "Wir gehen heute ins Theater" },
          { id: "tv4", english: "The hotel is very expensive", german: "Das Hotel ist sehr teuer" },
          { id: "tv5", english: "My hobby is swimming", german: "Mein Hobby ist Schwimmen" },
        ],
        target_answer:
          "Der Bus kommt um sechs Uhr, Wir nehmen ein Taxi zum Hotel, Wir gehen heute ins Theater, Das Hotel ist sehr teuer, Mein Hobby ist Schwimmen",
        meaning: "bus, taxi, hotel, theater, hobby",
        explanation:
          "nehmen takes the taxi, mit + dem takes the bus, ins Theater is the destination frame, and das Hobby dresses a verb as a noun. Five loans, one grammar.",
      },
      {
        id: "l5182_e2",
        type: "shift_select",
        prompt: "'Der Bus kommt um sechs Uhr' — which article does the short, blunt Bus take?",
        options: ["der", "das", "die"],
        target_answer: "der",
        meaning: "der Bus — the one masculine on the travel shelf",
        explanation:
          "Bus is the exception: das Hotel, das Taxi, das Theater, das Hobby — but der Bus. The shortest, bluntest word on the shelf is also the only one that refused the neuter default.",
      },
      {
        id: "l5182_e3",
        type: "reverse_cognate",
        prompt:
          "Theater is Greek théatron, 'the viewing place'. Which everyday English word is the same Greek viewing-root?",
        options: ["theory", "theme", "thermal", "throne"],
        target_answer: "theory",
        meaning: "Theater ↔ theory: one Greek root — a viewing",
        explanation:
          "Greek théatron ('viewing place') and theōria ('a viewing, a speculation') share the root thea, 'a look'. A theory is, etymologically, a way of seeing — theme, thermal and throne are different Greek roots.",
      },
      {
        id: "l5182_e4",
        type: "morpheme_tiles",
        prompt: "Assemble the transport frame: 'We go by bus into the city'",
        tile_options: ["Wir", "fahren", "mit", "dem", "Bus", "in", "die", "Stadt", "zum", "der"],
        target_answer: "Wir fahren mit dem Bus in die Stadt",
        meaning: "We go by bus into the city",
        explanation:
          "Vehicle takes mit + dem; motion into a place takes in + accusative (in die Stadt), while standing in a place takes dative (in der Stadt, im Haus). zum in the bank belongs to destinations like zum Hotel, not to vehicles.",
      },
      {
        id: "l5182_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'That's five minutes by taxi'",
        target_answer: "Das sind fünf Minuten mit dem Taxi",
        meaning: "That's five minutes by taxi",
        word_bank: ["Das", "sind", "fünf", "Minuten", "mit", "dem", "Taxi", "zehn", "Bus", "zu"],
        explanation:
          "Distance answers in time: das sind fünf Minuten mit dem Taxi. mit + dem names the vehicle, and the bank's zehn proves the frame scales — zehn Minuten mit dem Bus.",
      },
    ],
    summary: {
      outcome:
        "Handle the travel words — der Bus, das Taxi, zum Hotel, ins Theater — and read the stress German imposes on its loans.",
      use_example: {
        german: "Wir nehmen ein Taxi zum Hotel — der Bus kommt um sechs Uhr.",
        english: "We take a taxi to the hotel — the bus comes at six o'clock.",
      },
      takeaway:
        "Hotel, Taxi, Bus, Theater, Hobby — hospitale, taxa, omnibus, théatron and English itself; Bus is short and blunt, Theater is te-A-ter, and das rules the shelf except der Bus.",
      curiosity_teaser: "Next: what you wear — der Schuh, die Hose, das Hemd, der Mantel, die Jacke.",
    },
  },

  {
    id: 5191,
    slug: "kleidung-i-schuh-hose-hemd-mantel-jacke",
    title: "Kleidung I: der Schuh, die Hose, das Hemd, der Mantel, die Jacke",
    subtitle: "what you wear — and the accusative that tragen demands",
    phase: 3,
    shift_categories: [],
    word_ids: ["schuh", "hose", "hemd", "mantel", "jacke", "tragen", "kaufen", "klein", "warm", "weiß", "neu", "schön", "später", "selten", "moment", "sekunde"],
    table_word_ids: ["schuh", "hose", "hemd", "mantel", "jacke"],
    hook: {
      title: "The Wardrobe Reunion",
      content:
        "The wardrobe is where English kept its Germanic closet. der Schuh ↔ shoe is a pure twin — same word, same sound, same ancient *skōhaz. die Hose ↔ hose is the same word too: English wore hose for centuries before trousers took over, and hosiery still keeps the old name. der Mantel ↔ mantle is Latin mantellum twice over — it walked into German directly (Old High German mantal) and into English through French (mantel): one Latin word, two roads. die Jacke came from French jaque, a short jacket named for the name Jacques — a jacket is, etymologically, a Jack. das Hemd is the honest loss: its Old English cousin hama — a garment, a covering skin — died out a thousand years ago, and English dressed itself in a different Germanic word, shirt (the shirt/skirt doublet). Four twins and one loss — the wardrobe keeps the family tree better than the family does.",
      footnotes: [
        {
          marker: "1",
          title: "From Jacques to Jacket",
          content:
            "French jaque was the name of the short work-jacket, from the popular name Jacques — French for James, from Late Latin Iacobus. English took the diminutive jaquet and made jacket; German took jaque whole and made Jacke. Two languages, one name tag.",
        },
      ],
    },
    pattern: {
      title: "Tragen Wears the Accusative",
      content:
        "Tragen takes clothes the way sein takes states: Ich trage einen Mantel. The article does the case work: einen Mantel (masculine accusative), eine Hose (feminine), ein Hemd (neuter). Front a time or frequency word and the verb holds slot 2: Selten trage ich einen Mantel. Später kaufe ich eine Jacke. The two -e nouns are die (die Hose, die Jacke); Schuh and Mantel are der; Hemd is das. And the everyday facts hold for all five: Der Schuh ist zu klein, der Mantel ist warm, das Hemd ist weiß.",
      footnotes: [],
      linguist_note:
        "hose is the survivor word. English wore hose when Chaucer wrote; then the word retreated — to hosiery, then to the tube in the garden. German never retreated: die Hose is still the everyday word for trousers.",
    },
    exercises: [
      {
        id: "l5191_e1",
        type: "matching_pairs",
        prompt: "The wardrobe and its frames — match each sentence with its reading:",
        matching_pairs: [
          { id: "wd1", english: "The shoe is too small", german: "Der Schuh ist zu klein" },
          { id: "wd2", english: "The trousers are new", german: "Die Hose ist neu" },
          { id: "wd3", english: "The shirt is white", german: "Das Hemd ist weiß" },
          { id: "wd4", english: "The coat is warm", german: "Der Mantel ist warm" },
          { id: "wd5", english: "The jacket is beautiful", german: "Die Jacke ist schön" },
          { id: "wd6", english: "Later I buy a coat", german: "Später kaufe ich einen Mantel" },
          { id: "wd7", english: "One moment, please — the coat is beautiful", german: "Einen Moment, bitte, der Mantel ist schön" },
          { id: "wd8", english: "One second, please", german: "Eine Sekunde, bitte" },
        ],
        target_answer:
          "Der Schuh ist zu klein, Die Hose ist neu, Das Hemd ist weiß, Der Mantel ist warm, Die Jacke ist schön, Später kaufe ich einen Mantel, Einen Moment, bitte, der Mantel ist schön, Eine Sekunde, bitte",
        meaning: "shoe, trousers, shirt, coat, jacket — and later I buy",
        explanation:
          "Five garments, three genders: der Schuh and der Mantel, die Hose and die Jacke, das Hemd. Note die Hose takes a SINGULAR verb — Die Hose ist neu, never sind.",
      },
      {
        id: "l5191_e2",
        type: "shift_select",
        prompt:
          "'_____ trage ich einen Mantel.' — I seldom wear a coat. Which word takes position 1 and pushes trage to slot 2?",
        options: ["Selten", "Später", "Heute", "Immer"],
        target_answer: "Selten",
        meaning: "Selten trage ich einen Mantel — fronted frequency, verb in slot 2",
        explanation:
          "Fronting an adverb swaps positions 1 and 2 — the same move as Heute kaufe ich ein. Selten is English seldom's twin (German kept the D, English hardened it to T); Immer would say the opposite, Später only shifts the hour.",
      },
      {
        id: "l5191_e3",
        type: "reverse_cognate",
        prompt: "Which English word was once the everyday name for legwear — the TRUE twin German still uses?",
        options: ["hose", "stockings", "trousers", "leggings"],
        target_answer: "hose",
        meaning: "Hose ↔ hose: same word, one retreated, one stayed",
        explanation:
          "English wore hose for centuries; the word survives in hosiery before it went to the garden tube. German kept die Hose in daily use — the twin that never left home.",
      },
      {
        id: "l5191_e4",
        type: "morpheme_tiles",
        prompt: "Assemble: 'I wear a coat' — watch the accusative",
        tile_options: ["Ich", "trage", "einen", "Mantel", "eine", "ein", "das"],
        target_answer: "Ich trage einen Mantel",
        meaning: "I wear a coat",
        explanation:
          "tragen takes the garment as its object, so der Mantel turns accusative: einen Mantel. eine and ein in the bank are the feminine and neuter forms — right for die Hose and das Hemd, wrong for the coat.",
      },
      {
        id: "l5191_e5",
        type: "syntax_builder",
        prompt: "Assemble: 'Later I buy trousers and a jacket'",
        target_answer: "Später kaufe ich eine Hose und eine Jacke",
        meaning: "Later I buy trousers and a jacket",
        word_bank: ["Später", "kaufe", "ich", "eine", "Hose", "und", "eine", "Jacke", "einen", "Mantel", "Schuh"],
        explanation:
          "Two -e feminines in a row: eine Hose und eine Jacke — no ending to change. The bank's einen Mantel is the masculine trap: it would be right for the coat, wrong here.",
      },
    ],
    summary: {
      outcome:
        "Talk about what you wear with tragen + accusative — einen Mantel, eine Hose, ein Hemd — and front Selten or Später like a native.",
      use_example: {
        german: "Selten trage ich einen Mantel — später kaufe ich eine Jacke.",
        english: "I seldom wear a coat — later I'll buy a jacket.",
      },
      takeaway:
        "Schuh ↔ shoe, Hose ↔ hose, Mantel ↔ mantle, Jacke ↔ jacket — and Hemd, the word English lost; tragen wears einen, eine or ein.",
      curiosity_teaser: "Next: the small gear — die Socke, die Tasche, die Mütze, der Schal, der Hut.",
    },
  },
];
