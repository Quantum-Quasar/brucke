import type { Lesson } from "@/lib/types";

// ---------------------------------------------------------------------------
// Le Pont — complete French coursework (30 Spine Cores, 73 Cluster Sprigs,
// and 21 Support Branch lessons = 124 lessons).
// Aligned with Language Transfer Thinking Method principles.
// ---------------------------------------------------------------------------

export const FR_LESSONS: Lesson[] = [
  {
    "id": 1,
    "slug": "french-inside-english",
    "title": "The French Inside Your English",
    "subtitle": "The register ladder, the word for 'it', and your first sentences",
    "phase": 1,
    "shift_categories": [
      "doublet"
    ],
    "word_ids": [
      "gâteau",
      "café",
      "vouloir",
      "tu",
      "je",
      "le",
      "la",
      "un_peu"
    ],
    "table_word_ids": [
      "gâteau",
      "café",
      "vouloir",
      "le",
      "la"
    ],
    "hook": {
      "title": "You Already Speak Half of This",
      "content": "After 1066, English absorbed over 10,000 French words — nearly a third of everything you say. Notice how English gives you two words for one idea: ask/enquire, want/desire, freedom/liberty. The plain word is Germanic; the fancy one is French. This course lives in your fancy register: every formal word you own is a French word wearing English clothes.",
      "footnotes": [
        {
          "marker": "1",
          "title": "The Norman Conquest",
          "content": "In 1066, French-speaking Normans took over England. For 300 years, the ruling class spoke French — which is why English 'beef' is the French bœuf (cow on the farm, beef on the plate) and 'pork' is porc.",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "le — and the Word for 'It' Is the Same Word",
      "content": "The cake is le gâteau. The coffee is le café. And here is the trick this course will never let you forget: when you want to say it, French uses the same word again. 'I want it' — where it means the cake — is je le veux. Literally: I it want. The pronoun walks one step left, in front of the verb. You will ask for a feminine it later, and it will be la — the same journey, one word at a time.",
      "footnotes": [
        {
          "marker": "2",
          "title": "je and le share a vowel",
          "content": "je /ʒə/ and le /lə/ end in the same little /ə/ sound. Say them together — je le — and your mouth barely moves. That laziness is the engine of the whole language.",
          "interest": true
        }
      ],
      "linguist_note": "le and la come from Latin ille/illa, 'that one' — the same worn-down pointer that became English 'the'. 'The' and 'it' being one word is not a quirk; it is the pointer doing both jobs.",
      "trap_note": "Your mind will want to say je veux le for 'I want it', copying the English order. In French the pronoun walks left: je le veux. I it want."
    },
    "exercises": [
      {
        "id": "fr1_e1",
        "type": "matching_pairs",
        "prompt": "Match each English word with its French twin:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "cake",
            "german": "le gâteau"
          },
          {
            "id": "p2",
            "english": "coffee",
            "german": "le café"
          },
          {
            "id": "p3",
            "english": "I",
            "german": "je"
          },
          {
            "id": "p4",
            "english": "you (informal)",
            "german": "tu"
          },
          {
            "id": "p5",
            "english": "a little",
            "german": "un peu"
          },
          {
            "id": "p6",
            "english": "the (feminine)",
            "german": "la"
          }
        ],
        "target_answer": "le gâteau, le café, je, tu, un peu, la",
        "meaning": "cake, coffee, I, you, a little, the",
        "explanation": "gâteau and café arrived in English whole; je and tu are the Latin pronouns; un peu is the paucity-word."
      },
      {
        "id": "fr1_e2",
        "type": "reverse_cognate",
        "prompt": "veux (I want) hides inside a common English word about wanting to help. Which one?",
        "target_answer": "volunteer",
        "meaning": "a volunteer is the one who wants to do",
        "explanation": "Latin volo 'I want' gives vouloir in French and voluntary, benevolent, volunteer in English. The want-root never left."
      },
      {
        "id": "fr1_e4",
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "you're asking a friend whether they want it — and the it is the cake",
        "cues": [
          "Who? → tu, the informal you",
          "The pronoun walks left: I it want → tu le veux",
          "The question is just intonation — no word moves"
        ],
        "target_answer": "Tu le veux",
        "meaning": "Do you want it?",
        "vocab_hints": [
          {
            "word": "le",
            "translation": "it (masculine)",
            "note": "it is the same word as 'the' — the cake's article, one step left of the verb"
          }
        ],
        "idea_parts": [
          "who wants? → tu",
          "it (the cake) → le, placed before veux",
          "question? → rising voice only: Tu le veux ?"
        ],
        "word_bank": [
          "Tu",
          "le",
          "veux",
          "la",
          "est"
        ],
        "explanation": "Tu le veux ? — the it borrows the cake's article (le, not la), then walks in front of veux.",
        "diagnosis": {
          "slip": "the it stayed after the verb, English-style",
          "cue": "French says I it want: the pronoun takes one step left. Tu le veux — never tu veux le."
        }
      },
      {
        "id": "fr1_e5",
        "type": "literal_gloss",
        "prompt": "Which English sentence is built the French way?",
        "german": "Je le veux",
        "natural": "I want it",
        "options": [
          "I want it",
          "I it want",
          "I want to it"
        ],
        "target_answer": "I it want",
        "meaning": "I want it (the odd English is the lesson — never a model to produce)",
        "explanation": "Je le veux is word-for-word 'I it want'. The French order is the old English order — KJV English still says it."
      },
      {
        "id": "fr1_e6",
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Je veux le café",
        "replays": 2,
        "target_answer": "Je veux le café",
        "meaning": "I want the coffee",
        "cues": [
          "Start with the want: je veux",
          "The it-borrowing article: le",
          "Finish with the noun: café"
        ],
        "explanation": "Every element has been met: the want-verb, the article that doubles as 'it', the borrowed noun.",
        "affirmation": "You heard the want, the article, and the noun — three pieces you already own."
      }
    ],
    "twist": {
      "prompt": "One more, no safety net — 'I want the coffee, a little'?",
      "target_answer": "Je veux le café, un peu",
      "word_bank": [
        "Je",
        "veux",
        "le",
        "café",
        "un",
        "peu",
        "la",
        "est"
      ],
      "explanation": "un peu rides at the end, exactly where English puts it. You just said your first sentence with a tag on it."
    },
    "foreshadow": {
      "line": "One thing sits unfinished: la, the feminine 'the', has no job yet. Its moment is coming — and it will carry thousands of words on its back.",
      "resolvedIn": 2
    },
    "summary": {
      "outcome": "Convert gâteau and café from English, use je veux / tu veux, and place le or la as the word for 'it' — before the verb.",
      "use_example": {
        "german": "Je le veux, un peu.",
        "english": "I want it, a little."
      },
      "takeaway": "The formal register of English is a French warehouse — and the word for 'it' is the word for 'the', walking one step left.",
      "curiosity_teaser": "Up next on Le Pont ([101] Hidden Twins: Places & Colors): see how The French Inside Your English leads directly into Hidden Twins: Places & Colors."
    }
  },
  {
    "id": 101,
    "slug": "hidden-twins-places-colors",
    "title": "Hidden Twins: Places & Colors",
    "subtitle": "Recognition gym: words that crossed the Channel and stayed themselves",
    "phase": 1,
    "shift_categories": [],
    "word_ids": [
      "maison",
      "hôtel",
      "cœur",
      "table",
      "restaurant",
      "bleu",
      "rouge",
      "bon",
      "grand",
      "petit"
    ],
    "table_word_ids": [
      "maison",
      "hôtel",
      "bleu",
      "rouge",
      "bon",
      "grand"
    ],
    "hook": {
      "title": "Zero-Shift Words",
      "content": "Some words need no conversion rule at all — they crossed the Channel and barely changed. The house: la maison, the word English kept as mansion. The hotel: l'hôtel, hospital's sibling with its H dropped. Blue is bleu, red is rouge — a Germanic word and a Latin one, both still recognizable.",
      "footnotes": [
        {
          "marker": "1",
          "title": "maison / mansion",
          "content": "Latin mansiō 'a staying, a dwelling' became maison in French and mansion in English — the same word, one modest, one grand.",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "See the Word, Then Say It with a French Mouth",
      "content": "Recognition is step one. Step two is pronunciation: bleu has the tight French /ø/ vowel, rouge ends in a /ʒ/ English spelling never uses, and the final letters of grand and petit go quiet. You already own the vocabulary; the course is teaching your mouth to collect it.",
      "footnotes": [
        {
          "marker": "2",
          "title": "The heart and the courage",
          "content": "cœur /kœʁ/ is Latin cor — the root of core, courage, accord. English kept the root inside other words; French kept the word itself.",
          "interest": true
        }
      ],
      "trap_note": "Don't read French with English letter-sounds: blanc is /blɑ̃/ with a silent c, and the n is thought, not said. The nasal clinic branch will train this properly."
    },
    "exercises": [
      {
        "id": "fr101_e1",
        "type": "matching_pairs",
        "prompt": "Match each English word with its French twin:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "house",
            "german": "la maison"
          },
          {
            "id": "p2",
            "english": "hotel",
            "german": "l'hôtel"
          },
          {
            "id": "p3",
            "english": "heart",
            "german": "le cœur"
          },
          {
            "id": "p4",
            "english": "blue",
            "german": "bleu"
          },
          {
            "id": "p5",
            "english": "red",
            "german": "rouge"
          },
          {
            "id": "p6",
            "english": "white",
            "german": "blanc"
          }
        ],
        "target_answer": "la maison, l'hôtel, le cœur, bleu, rouge, blanc",
        "meaning": "house, hotel, heart, blue, red, white",
        "explanation": "maison/mansion, hôtel/hospital: doublets. bleu is Germanic (like blue), rouge Latin (like ruby)."
      },
      {
        "id": "fr101_e2",
        "type": "reverse_cognate",
        "prompt": "maison is wearing fancy English clothes in one word. Which?",
        "target_answer": "mansion",
        "meaning": "maison and mansion are the same Latin dwelling",
        "explanation": "English borrowed mansiō twice, effectively: maison stayed the everyday word in French; mansion became the grand one in English."
      },
      {
        "id": "fr101_e3",
        "type": "shift_select",
        "prompt": "Pick the correct French rendering of 'the hotel':",
        "options": [
          "le hôtel",
          "l'hôtel",
          "la hôtel"
        ],
        "target_answer": "l'hôtel",
        "meaning": "the hotel",
        "explanation": "Before a vowel, le loses its vowel too: l'hôtel. The elision rule doesn't care which article — the collision is what matters."
      },
      {
        "id": "fr101_e4",
        "type": "syntax_builder",
        "prompt": "Assemble: 'The heart is red'",
        "target_answer": "Le cœur est rouge",
        "meaning": "The heart is red",
        "word_bank": [
          "Le",
          "cœur",
          "est",
          "rouge",
          "bleu",
          "la"
        ],
        "explanation": "Le cœur est rouge — adjective after the noun, the default French position. (est arrives for real in lesson 5; borrow it here.)"
      },
      {
        "id": "fr101_e5",
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "La maison est grande",
        "replays": 2,
        "target_answer": "La maison est grande",
        "meaning": "The house is big",
        "cues": [
          "The house: la maison (mansion's twin)",
          "is: est",
          "big — and feminine: grande"
        ],
        "explanation": "Adding feminine -e awakens the silent 'd' in grand: grande /ɡʁɑ̃d/. est is 'is' — the same word English owns.",
        "affirmation": "You heard the awakened 'd' — feminine -e made the silent ending speak."
      }
    ],
    "summary": {
      "outcome": "Recognize the zero-shift twins (maison, hôtel, bleu, rouge) and apply the first elision: l'hôtel.",
      "use_example": {
        "german": "La maison est grande et l'hôtel est petit.",
        "english": "The house is big and the hotel is small."
      },
      "takeaway": "When a word needs no rule, recognition is the whole skill — your eye first, then your mouth.",
      "curiosity_teaser": "Up next on Le Pont ([102] First Sentences Gym): see how Hidden Twins: Places & Colors leads directly into First Sentences Gym."
    }
  },
  {
    "id": 102,
    "slug": "first-sentences-gym",
    "title": "First Sentences Gym",
    "subtitle": "Je veux… pattern drills with everything from lesson 1",
    "phase": 1,
    "shift_categories": [],
    "word_ids": [
      "vouloir",
      "gâteau",
      "café",
      "un_peu",
      "le",
      "la"
    ],
    "table_word_ids": [
      "vouloir",
      "gâteau",
      "café",
      "un_peu"
    ],
    "hook": {
      "title": "One Verb, Many Sentences",
      "content": "You know je veux and tu veux. You know le, la, and a shelf of nouns. That is already a sentence machine — this gym runs it until the walking pronoun (I it want) stops feeling strange."
    },
    "pattern": {
      "title": "Build, Don't Recall",
      "content": "Every exercise here is built from parts you've met. Don't memorize the sentence — walk the parts: who wants? what do they want? does the pronoun need to step left? The order of questions is the order of French.",
      "trap_note": "Watch for it = la: 'you want it, and the it is the collection' is tu la veux — the feminine it, walking left like le did."
    },
    "exercises": [
      {
        "id": "fr102_e1",
        "type": "shift_select",
        "prompt": "When 'it' refers to 'le café', where does the pronoun 'le' stand in 'I want it'?",
        "options": [
          "Je le veux",
          "Je veux le",
          "Le je veux"
        ],
        "target_answer": "Je le veux",
        "meaning": "I want it (literally: I it want)",
        "explanation": "In French, object pronouns walk one step left in front of the verb: Je le veux."
      },
      {
        "id": "fr102_e2",
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "you want it, and the it is the coffee",
        "cues": [
          "The it borrows the coffee's article: le",
          "The pronoun walks left: I it want",
          "je wants: je le veux"
        ],
        "target_answer": "Je le veux",
        "meaning": "I want it",
        "word_bank": [
          "Je",
          "le",
          "veux",
          "la",
          "est"
        ],
        "idea_parts": [
          "who wants? → je",
          "it (the coffee) → le",
          "position → before veux"
        ],
        "explanation": "Same move as the cake, new noun: je le veux."
      },
      {
        "id": "fr102_e3",
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "you're asking a friend if they want it — the it is feminine: the collection",
        "cues": [
          "Feminine it → la",
          "Walk it left: you it want",
          "Rising voice for the question"
        ],
        "target_answer": "Tu la veux",
        "meaning": "Do you want it? (the collection)",
        "word_bank": [
          "Tu",
          "la",
          "veux",
          "le",
          "est"
        ],
        "idea_parts": [
          "who? → tu",
          "it (la collection) → la",
          "question → intonation only"
        ],
        "explanation": "tu la veux ? — the pronoun checks the noun's article first, then walks. That check is a lifelong habit starting now.",
        "diagnosis": {
          "slip": "the it stayed masculine",
          "cue": "The it wears the noun's article: la collection → tu la veux. Check the word for 'the' first."
        }
      },
      {
        "id": "fr102_e4",
        "type": "literal_gloss",
        "prompt": "Which English phrase shows the word-for-word French structure of 'Tu la veux'?",
        "german": "Tu la veux",
        "natural": "Do you want it?",
        "options": [
          "You want it",
          "You it want",
          "Want you it"
        ],
        "target_answer": "You it want",
        "meaning": "Do you want it? (feminine object pronoun before the verb)",
        "explanation": "Tu (you) + la (it, feminine) + veux (want) is word-for-word 'You it want'."
      },
      {
        "id": "fr102_e5",
        "type": "derive",
        "prompt": "Convert the sentence to the negative (the sandwich comes in lesson 4 — here, just slot ne…pas around veux): 'I don't want it'",
        "english_hint": "Je … veux pas, with le placed before veux",
        "target_answer": "Je ne le veux pas",
        "meaning": "I don't want it",
        "explanation": "ne and pas wrap the verb — and le walks left inside the sandwich: je ne le veux pas. Preview of lesson 4."
      }
    ],
    "summary": {
      "outcome": "Build want-sentences with masculine and feminine pronouns, questions by intonation, and un peu as a rider.",
      "use_example": {
        "german": "Tu la veux ? — Oui, un peu.",
        "english": "Do you want it? — Yes, a little."
      },
      "takeaway": "Check the noun's article, then let the pronoun walk: the check-then-move habit is the whole pronoun system in embryo.",
      "curiosity_teaser": "Up next on Le Pont ([103] The Register Ladder): see how First Sentences Gym leads directly into The Register Ladder."
    }
  },
  {
    "id": 103,
    "slug": "the-register-ladder",
    "title": "The Register Ladder",
    "subtitle": "Climb from everyday Germanic English to formal Latinate English and find French waiting",
    "phase": 1,
    "shift_categories": [
      "doublet"
    ],
    "word_ids": [
      "désirer",
      "demander",
      "entrer",
      "arriver",
      "préférer",
      "continuer",
      "vouloir"
    ],
    "table_word_ids": [
      "désirer",
      "demander",
      "entrer",
      "arriver",
      "préférer"
    ],
    "hook": {
      "title": "Two Shelves in Your Own Head",
      "content": "English has two words for almost every action because Norman French sat on top of Anglo-Saxon for three centuries. At home you say 'want', 'go in', 'keep on', 'like better'. On a form you write 'desire', 'enter', 'continue', 'prefer'. Step onto that upper English shelf and the French verb is already in your mouth: désirer, entrer, continuer, préférer.",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why English sounds fancy when it speaks French",
          "content": "After 1066, law courts, palaces, and universities operated in French while farms and workshops spoke Old English. What feels high-register in English is simply everyday street vocabulary in Paris.",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Step Up the Register Ladder Before You Translate",
      "content": "Whenever you feel stuck trying to say a phrasal verb like 'go in' or 'keep going', pause and trade it for its one-word Latinate synonym in English: go in → enter → entrer; keep on → continue → continuer; get there → arrive → arriver. Then chain it directly after je veux with no extra word for 'to'.",
      "linguist_note": "English phrasal verbs (go in, come back, keep on) are Germanic; Romance languages pack the direction into the Latin verb stem itself (entrer, revenir, continuer).",
      "trap_note": "Your mind will try to translate English particles word-for-word ('go in' → aller dans). Instead, trade the two-word English phrase for one formal Latinate verb: enter → entrer."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Climb the register ladder from plain English to its French verb twin:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "go in → enter",
            "german": "entrer"
          },
          {
            "id": "p2",
            "english": "keep on → continue",
            "german": "continuer"
          },
          {
            "id": "p3",
            "english": "get there → arrive",
            "german": "arriver"
          },
          {
            "id": "p4",
            "english": "like better → prefer",
            "german": "préférer"
          },
          {
            "id": "p5",
            "english": "wish for → desire",
            "german": "désirer"
          }
        ],
        "target_answer": "entrer, continuer, arriver, préférer, désirer",
        "meaning": "go in → enter, keep on → continue, get there → arrive, like better → prefer, wish for → desire",
        "explanation": "Trading an English phrasal verb for its formal Latinate synonym reveals the everyday French infinitive.",
        "id": "fr103_e1"
      },
      {
        "type": "reverse_cognate",
        "prompt": "Which formal English verb meaning 'to wish for' reveals the French verb désirer?",
        "target_answer": "desire",
        "meaning": "desire ↔ désirer",
        "explanation": "Latin dēsīderāre ('to long for, await from the stars') gave French désirer and English desire.",
        "id": "fr103_e2"
      },
      {
        "type": "derive",
        "prompt": "Climb the ladder: 'keep going' → formal English 'continue' → French infinitive:",
        "english_hint": "replace -e with -er",
        "target_answer": "continuer",
        "meaning": "to continue / keep going",
        "explanation": "continue → continuer (/kɔ̃tinɥe/), an everyday -er verb.",
        "id": "fr103_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "you want to enter here",
        "cues": [
          "I want → je veux",
          "go in → enter → entrer",
          "here → ici"
        ],
        "idea_parts": [
          "who wants? → je veux",
          "action → entrer",
          "place → ici"
        ],
        "target_answer": "Je veux entrer ici",
        "meaning": "I want to go in here",
        "word_bank": [
          "Je",
          "veux",
          "entrer",
          "ici",
          "aller",
          "la"
        ],
        "explanation": "Je veux entrer ici replaces the two-word English 'go in' with one clean French verb.",
        "diagnosis": {
          "slip": "translated 'go in' separately",
          "cue": "Trade 'go in' for 'enter' → entrer."
        },
        "id": "fr103_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Je veux continuer un peu",
        "replays": 2,
        "target_answer": "Je veux continuer un peu",
        "meaning": "I want to keep going a little",
        "cues": [
          "je veux + continuer",
          "tag at the end: un peu"
        ],
        "explanation": "continuer is everyday French for 'keep on / keep going'.",
        "affirmation": "You heard continuer and un peu — the register ladder worked cleanly.",
        "id": "fr103_e5"
      }
    ],
    "summary": {
      "outcome": "Use the English register ladder (go in → enter → entrer, keep on → continue → continuer) to unlock everyday French verbs.",
      "use_example": {
        "german": "Je veux entrer et continuer.",
        "english": "I want to go in and keep going."
      },
      "takeaway": "When a two-word English verb blocks you, step up to its one-word formal synonym — that word is already French.",
      "curiosity_teaser": "Up next on Le Pont ([2] The -ION Bridge): see how The Register Ladder leads directly into The -ION Bridge."
    }
  },
  {
    "id": 2,
    "slug": "the-ion-bridge",
    "title": "The -ION Bridge",
    "subtitle": "Thousands of nouns convert whole — and every one is feminine",
    "phase": 1,
    "shift_categories": [
      "ion"
    ],
    "word_ids": [
      "collection",
      "tradition",
      "confirmation",
      "organisation",
      "opinion",
      "réservation",
      "complication",
      "passion",
      "invitation",
      "la"
    ],
    "table_word_ids": [
      "collection",
      "tradition",
      "confirmation",
      "opinion",
      "invitation"
    ],
    "hook": {
      "title": "One Ending, a Whole Warehouse",
      "content": "Whenever an English word ends in -ion — invitation, opinion, tradition, participation — you can identify it as Latin-dressed. And most Latin English came through French. So the word is probably the same in French: invitation, opinion, tradition. No conversion needed; the ending IS the bridge.",
      "footnotes": [
        {
          "marker": "1",
          "title": "How many?",
          "content": "Thousands: nation, situation, opération, réaction, mission, question… If you can read this sentence, you can already read hundreds of French nouns.",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "la — the -ION Nouns Are All Feminine",
      "content": "The cake took le. The -ION nouns take la: la collection, la tradition, la confirmation. And that is a decode rule, not memory: -ION is on the feminine squad, along with -té and -ance (coming in lesson 6). When you refer back to one of them — it — French says la again: je la veux. The article you chose for 'the' is the pronoun you use for 'it'.",
      "footnotes": [
        {
          "marker": "2",
          "title": "The half-said N",
          "content": "In collection, the final N is thought, not said: /kɔlɛksjɔ̃/. Move toward the N, then stop — that 'not arriving' nasalizes the whole vowel. You'll meet this sound everywhere; for now, just don't land on the N.",
          "interest": true
        }
      ],
      "linguist_note": "Latin -tiō → French -tion with the N nasalized. English borrowed the spelling and kept the N audible; French kept the spelling and silenced it — the most polite disagreement in the two languages.",
      "trap_note": "The tempting wrong move: le, because most things you've met so far took le. The -ION squad is feminine — la collection, l'opinion. The ending tells you."
    },
    "exercises": [
      {
        "id": "fr2_e1",
        "type": "morpheme_tiles",
        "prompt": "Assemble the French noun for 'opinion' (opin + ion):",
        "tile_options": [
          "opin",
          "ion",
          "ation",
          "ment"
        ],
        "target_answer": "opinion",
        "meaning": "opinion",
        "explanation": "opin + ion = opinion. The spelling converts whole; only the sounds move (nasal O, half-said N)."
      },
      {
        "id": "fr2_e2",
        "type": "shift_select",
        "prompt": "'The opinion' — pick the correct rendering:",
        "options": [
          "la opinion",
          "l'opinion",
          "le opinion"
        ],
        "target_answer": "l'opinion",
        "meaning": "the opinion",
        "explanation": "opinion starts with a vowel, so la loses its a: l'opinion. The apostrophe marks the sacrifice."
      },
      {
        "id": "fr2_e3",
        "type": "matching_pairs",
        "prompt": "Convert each English -ION noun to French — all with their article:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "the tradition",
            "german": "la tradition"
          },
          {
            "id": "p2",
            "english": "the confirmation",
            "german": "la confirmation"
          },
          {
            "id": "p3",
            "english": "the reservation",
            "german": "la réservation"
          },
          {
            "id": "p4",
            "english": "the organization",
            "german": "l'organisation"
          },
          {
            "id": "p5",
            "english": "the passion",
            "german": "la passion"
          },
          {
            "id": "p6",
            "english": "the complication",
            "german": "la complication"
          }
        ],
        "target_answer": "la tradition, la confirmation, la réservation, l'organisation, la passion, la complication",
        "meaning": "the -ION conversions with articles",
        "explanation": "Every -ION noun takes la — elided to l' before a vowel. One squad, one article, thousands of words."
      },
      {
        "id": "fr2_e5",
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "I want it — and the it is the confirmation",
        "cues": [
          "The it borrows la confirmation's article → la",
          "Walk it left: I it want",
          "je la veux"
        ],
        "target_answer": "Je la veux",
        "meaning": "I want it (the confirmation)",
        "word_bank": [
          "Je",
          "la",
          "veux",
          "le",
          "pas"
        ],
        "idea_parts": [
          "who? → je",
          "it (la confirmation) → la",
          "position → before veux"
        ],
        "explanation": "je la veux — the same left-walk, now with a feminine it. The article you chose for 'the' is the pronoun for 'it'.",
        "diagnosis": {
          "slip": "the it stayed le",
          "cue": "It wears the noun's article: la confirmation → je la veux. The -ION squad is feminine."
        }
      },
      {
        "id": "fr2_e6",
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "La tradition est importante",
        "replays": 2,
        "target_answer": "La tradition est importante",
        "meaning": "The tradition is important",
        "cues": [
          "The tradition: la tradition",
          "is: est",
          "important — feminine squad agrees: importante"
        ],
        "explanation": "Two -AN nasals in one sentence: tradition, importante. Think the N, don't say it.",
        "affirmation": "Both nasals landed — you thought the N twice and said it zero times."
      }
    ],
    "twist": {
      "prompt": "Ungraded, just to feel it — 'Do you want the invitation?'",
      "target_answer": "Tu veux l'invitation",
      "word_bank": [
        "Tu",
        "veux",
        "l'invitation",
        "la",
        "le"
      ],
      "explanation": "l'invitation — the elision fires again. Notice how the question needed no new machinery: just the voice."
    },
    "payoff": {
      "ofLesson": 1,
      "text": "Remember la, the feminine 'the' left waiting in lesson 1? Here is her payoff: the -ION engine made her the most loaded article in French — thousands of nouns, every one hers."
    },
    "summary": {
      "outcome": "Convert any -ION noun, mark it feminine with la (elided to l'), and refer to it with la after the left-walk.",
      "use_example": {
        "german": "Je veux la confirmation. — Je la veux.",
        "english": "I want the confirmation. — I want it."
      },
      "takeaway": "-ION is a gender decoder: the ending is feminine, the article is la, and 'it' is that same la, walking.",
      "curiosity_teaser": "Up next on Le Pont ([201] L'Elision Gym): see how The -ION Bridge leads directly into L'Elision Gym."
    },
    "foreshadow": {
      "line": "Now that thousands of -ION nouns are in your pocket, what happens when you slice off -ation and bolt on -er?",
      "resolvedIn": 3
    }
  },
  {
    "id": 201,
    "slug": "elision-gym",
    "title": "L'Elision Gym",
    "subtitle": "The apostrophe marks a vowel sacrificed — la → l', le → l'",
    "phase": 1,
    "shift_categories": [
      "ion"
    ],
    "word_ids": [
      "opinion",
      "organisation",
      "hôtel",
      "eau",
      "la",
      "le"
    ],
    "table_word_ids": [
      "opinion",
      "organisation",
      "hôtel",
      "eau"
    ],
    "hook": {
      "title": "French Hates a Vowel Collision",
      "content": "Say la opinion fast. Your mouth refuses — two vowels can't share one doorstep. So French cuts the article's vowel and welds the rest: l'opinion. The same happens to le: l'hôtel. The apostrophe isn't decoration; it is a scar where a vowel used to be.",
      "footnotes": [
        {
          "marker": "1",
          "title": "Not just articles",
          "content": "je → j'ai (I have), ne → n'aime pas, ce → c'est, de → d'eau. Elision is a general law — wherever a little word meets a vowel, the little word loses its tail.",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "The Vowel Test",
      "content": "Look at the next word. Does it start with a vowel (or a mute h)? Then the article drops its vowel: l'opinion, l'hôtel, l'eau. Does it start with a consonant? Keep the article whole: la collection, le gâteau. The test is one glance long — and it works for every eliding word in the language.",
      "trap_note": "The tempting wrong move after l'-words: assuming the gender is lost. l'opinion is still la opinion underneath — the it is still la: je la veux."
    },
    "exercises": [
      {
        "id": "fr201_e1",
        "type": "shift_select",
        "prompt": "'The organization' — correct rendering?",
        "options": [
          "la organisation",
          "l'organisation",
          "le organisation"
        ],
        "target_answer": "l'organisation",
        "meaning": "the organization",
        "explanation": "organisation opens with a vowel — la loses its a. One S in French, never a Z."
      },
      {
        "id": "fr201_e2",
        "type": "shift_select",
        "prompt": "'The water' — correct rendering?",
        "options": [
          "la eau",
          "l'eau",
          "le eau"
        ],
        "target_answer": "l'eau",
        "meaning": "the water",
        "explanation": "eau (Latin aqua, all vowels historical scar tissue) is feminine and vowel-initial: l'eau."
      },
      {
        "id": "fr201_e3",
        "type": "derive",
        "prompt": "Add the article: 'the hotel' (hôtel starts with a mute h — same rule as a vowel)",
        "target_answer": "l'hôtel",
        "meaning": "the hotel",
        "explanation": "The h is written and never said — for elision purposes, l'hôtel behaves exactly like a vowel-initial word."
      },
      {
        "id": "fr201_e4",
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "I want it — and the it is the opinion",
        "cues": [
          "The opinion → l'opinion, but the it stays la",
          "Walk it left: I it want",
          "je la veux"
        ],
        "target_answer": "Je la veux",
        "meaning": "I want it (the opinion)",
        "word_bank": [
          "Je",
          "la",
          "veux",
          "l'",
          "le"
        ],
        "idea_parts": [
          "who? → je",
          "it (l'opinion) → la",
          "position → before veux"
        ],
        "explanation": "The article elides (l'opinion), but the pronoun doesn't: je la veux. Elision is about collisions — the pronoun stands alone.",
        "diagnosis": {
          "slip": "the pronoun got elided too",
          "cue": "je l'veux isn't written French. The article elides only when welded to its noun; the walking pronoun keeps its form: je la veux."
        }
      },
      {
        "id": "fr201_e5",
        "type": "syntax_builder",
        "prompt": "Assemble: 'I want the water' (use the partitive-looking piece: de l'eau)",
        "target_answer": "Je veux de l'eau",
        "meaning": "I want some water",
        "vocab_hints": [
          {
            "word": "de",
            "translation": "of / some",
            "note": "de + l'eau: French counts water like sugar — some water, some sugar"
          }
        ],
        "word_bank": [
          "Je",
          "veux",
          "de",
          "l'eau",
          "la",
          "le"
        ],
        "explanation": "de l'eau — 'of the water' is how French says 'some water'. A small preview of the partitive, revisited in topic 13."
      }
    ],
    "summary": {
      "outcome": "Run the vowel test on sight: vowel-initial noun → l', consonant-initial → la/le — and keep pronouns un-elided.",
      "use_example": {
        "german": "L'opinion est intéressante.",
        "english": "The opinion is interesting."
      },
      "takeaway": "The apostrophe is a vowel's tombstone: la opinion → l'opinion, but the walking pronoun never elides.",
      "curiosity_teaser": "Up next on Le Pont ([202] -ION Discrimination Drills): see how L'Elision Gym leads directly into -ION Discrimination Drills."
    }
  },
  {
    "id": 202,
    "slug": "ion-discrimination-drills",
    "title": "-ION Discrimination Drills",
    "subtitle": "la or l' — decide at speed, then build the pronoun",
    "phase": 1,
    "shift_categories": [
      "ion"
    ],
    "word_ids": [
      "collection",
      "invitation",
      "réservation",
      "complication",
      "passion",
      "tradition"
    ],
    "table_word_ids": [
      "collection",
      "invitation",
      "réservation",
      "complication"
    ],
    "hook": {
      "title": "Mixed Set, One Rule",
      "content": "No new words here — just speed. Every item is an -ION noun you've met; your job is the glance: vowel or consonant after the article? This is also your first learning-consciousness moment: don't hunt for a rule about which nouns are feminine. The ending already told you."
    },
    "pattern": {
      "title": "The Two-Move Check",
      "content": "Move one: is the noun -ION? Then it's feminine — la. Move two: does it start with a vowel? Then l'. Everything else in the sentence (je veux, the left-walking pronoun) is machinery you already own. Two glances, one conversion, thousands of words.",
      "trap_note": "After several l' answers in a row, the mind starts auto-piloting l' everywhere. La passion, la complication — the consonant restarts the article."
    },
    "exercises": [
      {
        "id": "fr202_e1",
        "type": "shift_select",
        "prompt": "'The passion':",
        "options": [
          "l'passion",
          "la passion",
          "le passion"
        ],
        "target_answer": "la passion",
        "meaning": "the passion",
        "explanation": "p is a consonant — the full article returns. Watch for the auto-pilot l'."
      },
      {
        "id": "fr202_e2",
        "type": "shift_select",
        "prompt": "'The invitation':",
        "options": [
          "la invitation",
          "l'invitation",
          "le invitation"
        ],
        "target_answer": "l'invitation",
        "meaning": "the invitation",
        "explanation": "i-nvitation opens with a vowel: l'. Merci pour l'invitation."
      },
      {
        "id": "fr202_e3",
        "type": "derive",
        "prompt": "Convert with article: 'the complication'",
        "target_answer": "la complication",
        "meaning": "the complication",
        "explanation": "Two nasal Ns, both thought not said — and a consonant c, so la stays whole."
      },
      {
        "id": "fr202_e4",
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "I want it — the it is the reservation",
        "cues": [
          "la réservation — the é tells you where the stress lands",
          "it → la, walking left",
          "je la veux"
        ],
        "target_answer": "Je la veux",
        "meaning": "I want it (the reservation)",
        "word_bank": [
          "Je",
          "la",
          "veux",
          "l'",
          "le"
        ],
        "explanation": "Third it today — and the move is identical every time: check the article, walk it left.",
        "idea_parts": [
          "who wants? → je",
          "it (la réservation) → la, placed before veux",
          "result → Je la veux"
        ]
      },
      {
        "id": "fr202_e5",
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Tu veux la complication",
        "replays": 2,
        "target_answer": "Tu veux la complication",
        "meaning": "Do you want the complication?",
        "cues": [
          "tu veux — the want question",
          "la — consonant restart, no elision",
          "the two nasals: -tion, compli-"
        ],
        "explanation": "A nonsense question — the sentences are scaffolding, the moves are the lesson.",
        "affirmation": "You wrote la, not l' — the auto-pilot didn't get you."
      }
    ],
    "summary": {
      "outcome": "Decide la vs l' at speed across a mixed -ION set, and keep the pronoun's la intact after the left-walk.",
      "use_example": {
        "german": "Merci pour l'invitation — j'accepte la complication.",
        "english": "Thanks for the invitation — I accept the complication."
      },
      "takeaway": "Two glances per noun: -ION → feminine; vowel → elide. The rule is in the word, not in a list.",
      "curiosity_teaser": "Up next on Le Pont ([3] The -ation Engine): see how -ION Discrimination Drills leads directly into The -ation Engine."
    }
  },
  {
    "id": 3,
    "slug": "the-ation-engine",
    "title": "The -ation Engine",
    "subtitle": "Noun → verb: confirmation → confirmer. Thousands of infinitives, almost free",
    "phase": 1,
    "shift_categories": [
      "ation"
    ],
    "word_ids": [
      "confirmer",
      "organiser",
      "célébrer",
      "participer",
      "visiter",
      "inviter",
      "réserver",
      "vouloir"
    ],
    "table_word_ids": [
      "confirmer",
      "organiser",
      "célébrer",
      "participer",
      "visiter"
    ],
    "hook": {
      "title": "The Verbs Were Hiding in the Nouns",
      "content": "Every -ation noun carries its verb inside it. The confirmation? To confirm. The organisation? To organise. French does this mechanically: strip -ation, bolt on -er (pronounced /e/), and the noun becomes the infinitive: confirmation → confirmer, organisation → organiser. One rule, thousands of verbs — this is the single most valuable conversion in the language.",
      "footnotes": [
        {
          "marker": "1",
          "title": "The test",
          "content": "Ask: is there an -ation word in English for this idea? Reservation → yes → réserver. That question is your verb-finder for life.",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "je veux + Infinitive — and the Célébrer Trap",
      "content": "French needs no 'to': the verb itself is the dictionary form. je veux confirmer — I want to confirm. je veux visiter Paris. One idea (to visit), one word (visiter). But watch the trap: célébration → célébrer, never célébrater. The whole -ation goes before -er arrives — strip, don't trim.",
      "footnotes": [
        {
          "marker": "2",
          "title": "Register travels in reverse",
          "content": "'I want to participate' sounds formal in English; je veux participer is perfectly everyday. Don't decide too quickly that you can't say something — look for the -ation word first.",
          "interest": true
        }
      ],
      "linguist_note": "French -er descends from Latin -āre. The -ation nouns and the -er verbs are two leaves of the same Latin branch — which is why the conversion loses almost nothing.",
      "trap_note": "The shortcut your mind will offer: jump straight from the English verb to a French one — celebrate → célébrater. Wrong. Convert the noun, then strip it whole: célébration → célébrer."
    },
    "exercises": [
      {
        "id": "fr3_e1",
        "type": "morpheme_tiles",
        "prompt": "Strip -ation from 'confirmation' and attach the French infinitive ending:",
        "tile_options": [
          "confirm",
          "er",
          "ation",
          "ir"
        ],
        "target_answer": "confirmer",
        "meaning": "to confirm",
        "explanation": "confirm + er = confirmer (/kɔ̃fiʁme/). Strip the whole -ation suffix and add -er."
      },
      {
        "id": "fr3_e3",
        "type": "derive",
        "prompt": "Apply the engine — carefully: célébration → French verb:",
        "target_answer": "célébrer",
        "meaning": "to celebrate",
        "explanation": "The trap in action: the whole -ation goes. célébration → célébrer, not célébrater."
      },
      {
        "id": "fr3_e4",
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "you want to celebrate — the exam results just came in",
        "cues": [
          "Find the -ation noun: célébration",
          "Strip whole, add -er: célébrer",
          "je veux + infinitive: je veux célébrer"
        ],
        "target_answer": "Je veux célébrer",
        "meaning": "I want to celebrate",
        "word_bank": [
          "Je",
          "veux",
          "célébrer",
          "confirmer",
          "célébrater"
        ],
        "idea_parts": [
          "the want → je veux",
          "the verb → célébrer (célébration minus -ation)",
          "no 'to' needed"
        ],
        "explanation": "je veux célébrer — two words in French where English needs three.",
        "diagnosis": {
          "slip": "the -ation only got trimmed",
          "cue": "Strip, don't trim: célébration loses ALL of -ation before -er lands. célébrer, never célébrater."
        }
      },
      {
        "id": "fr3_e5",
        "type": "literal_gloss",
        "prompt": "Which English sentence is built the French way?",
        "german": "Je veux visiter Paris",
        "natural": "I want to visit Paris",
        "options": [
          "I want to visit Paris",
          "I want visit Paris",
          "I want Paris to visit"
        ],
        "target_answer": "I want visit Paris",
        "meaning": "The odd English is the lesson: French joins want + visit directly with no 'to'.",
        "explanation": "Je veux visiter Paris is word-for-word 'I want visit Paris'. French chains the infinitive directly — no 'to' needed."
      },
      {
        "id": "fr3_e6",
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Tu veux participer",
        "replays": 2,
        "target_answer": "Tu veux participer",
        "meaning": "Do you want to get involved?",
        "cues": [
          "tu veux — the want question",
          "participation minus -ation, plus -er",
          "the -er sounds like /e/: participé? — no: participer with a tiny final r"
        ],
        "explanation": "participer — 'to get involved' sounds formal in English and everyday in French.",
        "affirmation": "You heard the /e/ ending and kept the final r light — that's the infinitive's sound."
      }
    ],
    "summary": {
      "outcome": "Convert any -ation noun into an -er verb, chain it after je veux, and dodge the célébrer trap.",
      "use_example": {
        "german": "Je veux réserver une table.",
        "english": "I want to reserve a table."
      },
      "takeaway": "Find the -ation noun, strip it whole, add -er — and let je veux pull it into a sentence.",
      "curiosity_teaser": "Up next on Le Pont ([301] The Célébrer Trap): see how The -ation Engine leads directly into The Célébrer Trap."
    },
    "payoff": {
      "ofLesson": 2,
      "text": "The -ION warehouse from Lesson 2 was secretly a verb factory: stripping -ation and adding -er turns your noun shelf into active verbs."
    },
    "foreshadow": {
      "line": "You can say everything you want to do — next we wrap the verb in two small words to refuse it.",
      "resolvedIn": 4
    },
    "twist": {
      "prompt": "Ungraded — how would you say 'I want to reserve the table'?",
      "target_answer": "Je veux réserver la table",
      "word_bank": [
        "Je",
        "veux",
        "réserver",
        "la",
        "table",
        "le",
        "réservation"
      ],
      "explanation": "réservation → réserver, chained directly after je veux with no extra word for 'to'."
    }
  },
  {
    "id": 301,
    "slug": "celebrer-trap",
    "title": "The Célébrer Trap",
    "subtitle": "Strip, don't trim — discrimination drills for the -ation engine",
    "phase": 1,
    "shift_categories": [
      "ation"
    ],
    "word_ids": [
      "célébrer",
      "confirmer",
      "organiser",
      "réserver",
      "inviter",
      "visiter",
      "table"
    ],
    "table_word_ids": [
      "célébrer",
      "confirmer",
      "réserver"
    ],
    "hook": {
      "title": "Where the Mind Cuts Corners",
      "content": "The engine's one failure mode: cutting only part of -ation. Célébrater. Organisater. The mind sees -ate in the English verb and keeps it. This gym exists to catch that corner-cutting in a safe room — strip the noun whole, every time."
    },
    "pattern": {
      "title": "Convert the Noun, Not the Verb",
      "content": "The reliable path: find the English -ation noun first, convert IT to French, then strip it. Celebrate? Ask: celebration? Yes → célébration → célébrer. The noun is the test — if there's no -ation noun, don't trust the jump. (Reserve → reservation → réserver. Invite → invitation → inviter.)",
      "trap_note": "Participer, not participater. Visiter, not visitater. The English -ate is Latin -āre's ghost — French kept the ghost only in the noun."
    },
    "exercises": [
      {
        "id": "fr301_e1",
        "type": "shift_select",
        "prompt": "célébration → the correct French verb:",
        "options": [
          "célébrater",
          "célébrer",
          "célébrationner"
        ],
        "target_answer": "célébrer",
        "meaning": "to celebrate",
        "explanation": "Strip -ation whole: célébration → célébrer. The -ate in English is a false friend of the engine."
      },
      {
        "id": "fr301_e2",
        "type": "shift_select",
        "prompt": "participation → the correct French verb:",
        "options": [
          "participater",
          "participer",
          "particionner"
        ],
        "target_answer": "participer",
        "meaning": "to participate",
        "explanation": "participation → participer. The same strip-whole law."
      },
      {
        "id": "fr301_e3",
        "type": "derive",
        "prompt": "reservation → French verb:",
        "target_answer": "réserver",
        "meaning": "to reserve, to book",
        "explanation": "reservation → réserver — the é rides along, marking the stress."
      },
      {
        "id": "fr301_e4",
        "type": "derive",
        "prompt": "invitation → French verb:",
        "target_answer": "inviter",
        "meaning": "to invite",
        "explanation": "invitation → inviter — short, whole, clean."
      },
      {
        "id": "fr301_e5",
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "you want to reserve a table — for tonight",
        "cues": [
          "The -ation noun: reservation",
          "Strip whole: réserver",
          "je veux + infinitive + noun"
        ],
        "target_answer": "Je veux réserver une table",
        "meaning": "I want to reserve a table",
        "vocab_hints": [
          {
            "word": "une",
            "translation": "a (feminine)",
            "note": "la table is feminine — a table is une table"
          }
        ],
        "word_bank": [
          "Je",
          "veux",
          "réserver",
          "une",
          "table",
          "réserverater",
          "la"
        ],
        "idea_parts": [
          "the want → je veux",
          "the verb → réserver",
          "the thing → une table (feminine article)"
        ],
        "explanation": "je veux réserver une table — and une is la's indefinite sibling: same gender, one glance."
      }
    ],
    "summary": {
      "outcome": "Convert through the noun, not the verb — and never trust an -ate jump.",
      "use_example": {
        "german": "Je veux réserver, pas célébrater.",
        "english": "I want to reserve — not to 'celebrater'."
      },
      "takeaway": "The -ation noun is the test and the vehicle: convert it, then strip it whole.",
      "curiosity_teaser": "Up next on Le Pont ([302] Je veux + Infinitive Gym): see how The Célébrer Trap leads directly into Je veux + Infinitive Gym."
    }
  },
  {
    "id": 302,
    "slug": "je-veux-infinitive-gym",
    "title": "Je veux + Infinitive Gym",
    "subtitle": "Chain the converted verbs into real sentences",
    "phase": 1,
    "shift_categories": [
      "ation"
    ],
    "word_ids": [
      "vouloir",
      "visiter",
      "participer",
      "organiser",
      "confirmer",
      "un_peu"
    ],
    "table_word_ids": [
      "vouloir",
      "visiter",
      "participer",
      "organiser"
    ],
    "hook": {
      "title": "The Want-Verb Is a Train Engine",
      "content": "je veux pulls infinitives the way an engine pulls cars: je veux visiter Paris, je veux organiser une invitation, je veux participer un peu. The second verb never conjugates — it stays in its dictionary form, parked behind the want. This is the same insight as German's modal bracket, wearing French clothes."
    },
    "pattern": {
      "title": "Two Verbs, One Sentence, Zero Stress",
      "content": "The rule: only veux bends. The infinitive stays whole, wherever je veux leaves it. That stability is why the -ation engine matters — every converted verb is another car on the train, usable the moment it's built.",
      "trap_note": "The mind wants the second verb to agree with tu: tu veux participes. No — the infinitive never conjugates: tu veux participer."
    },
    "exercises": [
      {
        "id": "fr302_e1",
        "type": "syntax_builder",
        "prompt": "Assemble: 'You want to visit Paris'",
        "target_answer": "Tu veux visiter Paris",
        "meaning": "You want to visit Paris",
        "word_bank": [
          "Tu",
          "veux",
          "visiter",
          "Paris",
          "visites",
          "la"
        ],
        "explanation": "veux bends, visiter doesn't — the infinitive stays in the dictionary."
      },
      {
        "id": "fr302_e2",
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "I want to get involved a little",
        "cues": [
          "The everyday register: participer (not the formal-sounding English)",
          "the tag rides at the end: un peu",
          "je veux participer un peu"
        ],
        "target_answer": "Je veux participer un peu",
        "meaning": "I want to get involved a little",
        "word_bank": [
          "Je",
          "veux",
          "participer",
          "un",
          "peu",
          "participes",
          "la"
        ],
        "idea_parts": [
          "the want → je veux",
          "the verb → participer",
          "the tag → un peu, last"
        ],
        "explanation": "Formal English, everyday French — register travels in reverse across the Channel."
      },
      {
        "id": "fr302_e3",
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "you want to organize the invitation",
        "cues": [
          "Noun → verb: organisation → organiser",
          "tu veux + infinitive",
          "l'invitation — the elision fires again"
        ],
        "target_answer": "Tu veux organiser l'invitation",
        "meaning": "You want to organize the invitation",
        "word_bank": [
          "Tu",
          "veux",
          "organiser",
          "l'invitation",
          "la",
          "le"
        ],
        "idea_parts": [
          "the want → tu veux",
          "the verb → organiser",
          "the thing → l'invitation"
        ],
        "explanation": "Two conversions in one sentence: the engine (-ation) and the elision (l').",
        "diagnosis": {
          "slip": "the infinitive picked up an ending",
          "cue": "Only veux conjugates. organiser stays whole after tu veux — the second verb is parked, not driven."
        }
      },
      {
        "id": "fr302_e4",
        "type": "variant_english",
        "prompt": "Which English sentences express the natural thought of 'Je veux participer un peu'?",
        "german": "Je veux participer un peu",
        "meaning": "I want to get involved / participate a little",
        "renderings": [
          "I want to get involved a little",
          "I want to take part a bit"
        ],
        "traps": [
          "I am participating right now",
          "I don't want to participate at all"
        ],
        "target_answer": "I want to get involved a little",
        "explanation": "participer is everyday French for 'getting involved' or 'taking part' — register travels in reverse across the Channel."
      },
      {
        "id": "fr302_e5",
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Je veux confirmer la réservation",
        "replays": 2,
        "target_answer": "Je veux confirmer la réservation",
        "meaning": "I want to confirm the reservation",
        "cues": [
          "Engine car 1: confirmer (confirmation minus -ation)",
          "Engine car 2: la réservation — with its é",
          "je veux pulls them both"
        ],
        "explanation": "Noun and verb from the same Latin root, one sentence apart.",
        "affirmation": "You kept confirmer bare and gave réservation its é — both conversions held."
      }
    ],
    "summary": {
      "outcome": "Chain converted infinitives after je veux / tu veux with the second verb parked and un-conjugated.",
      "use_example": {
        "german": "Tu veux organiser l'invitation ?",
        "english": "Do you want to organize the invitation?"
      },
      "takeaway": "Only the want-verb bends. The infinitive is parked freight — and every -ation noun is a new car.",
      "curiosity_teaser": "Up next on Le Pont ([303] The -ir & -re Verb Bridges): see how Je veux + Infinitive Gym leads directly into The -ir & -re Verb Bridges."
    }
  },
  {
    "id": 303,
    "slug": "ir-and-re-verb-bridges",
    "title": "The -ir & -re Verb Bridges",
    "subtitle": "finir (finish), choisir (choose), vendre (vendor), répondre (respond) — French's other two verb families",
    "phase": 1,
    "shift_categories": [
      "ation"
    ],
    "word_ids": [
      "finir",
      "choisir",
      "vendre",
      "répondre",
      "attendre",
      "vouloir",
      "café",
      "maison"
    ],
    "table_word_ids": [
      "finir",
      "choisir",
      "vendre",
      "répondre",
      "attendre"
    ],
    "hook": {
      "title": "Where English -ish Came From",
      "content": "Over 80% of French verbs end in -er, which you unlock via -ation. The remaining verbs live in two smaller houses: -ir verbs (like finir 'to finish' and choisir 'to choose') and -re verbs (like vendre 'to sell', répondre 'to respond', and attendre 'to wait for'). Why does English say 'finish', 'punish', and 'abolish' with -ish? Because French -ir verbs insert -iss- in the plural (nous finissons), and Norman English borrowed that exact stem!",
      "footnotes": [
        {
          "marker": "1",
          "title": "The Norman -iss- that became English -ish",
          "content": "Latin had an 'inchoative' infix -isc- meaning 'to begin to'. French generalized it across -ir plurals (finissons, choisissons), and Middle English adopted that stem as -ish: finir → finish, punir → punish.",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Same Infinitive Slot After je veux",
      "content": "Whether a verb ends in -er (confirmer), -ir (finir, choisir), or -re (vendre, répondre, attendre), it parks unchanged right after je veux or tu veux: Je veux finir le café. Tu veux choisir le gâteau. Ils veulent vendre la maison. You already know the meanings from English finish, choose, vendor, and respond.",
      "linguist_note": "French's three conjugation classes (-er, -ir, -re) descend from Latin's four (-āre, -ēre/-īre, -ere). In infinitive chains after vouloir, all three behave identically.",
      "trap_note": "Your mind will try to add 'for' after attendre ('wait for') or 'to' after répondre in English order. Remember: attendre already means 'to wait for' inside one word!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each -ir or -re infinitive with its English cognate and meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "to finish (English finish)",
            "german": "finir"
          },
          {
            "id": "p2",
            "english": "to choose (English choose)",
            "german": "choisir"
          },
          {
            "id": "p3",
            "english": "to sell (English vendor)",
            "german": "vendre"
          },
          {
            "id": "p4",
            "english": "to answer (English respond)",
            "german": "répondre"
          },
          {
            "id": "p5",
            "english": "to wait for (false friend: attend)",
            "german": "attendre"
          }
        ],
        "target_answer": "finir, choisir, vendre, répondre, attendre",
        "meaning": "to finish (English finish), to choose (English choose), to sell (English vendor), to answer (English respond), to wait for (false friend: attend)",
        "explanation": "English -ish verbs map to French -ir; Latinate -nd verbs map to French -re.",
        "id": "fr303_e1"
      },
      {
        "type": "morpheme_tiles",
        "prompt": "Assemble 'I want to finish the coffee':",
        "tile_options": [
          "Je",
          "veux",
          "finir",
          "le",
          "café",
          "finisser"
        ],
        "target_answer": "Jeveuxfinirlecafé",
        "meaning": "Je veux finir le café",
        "explanation": "finir parks in its dictionary form right after je veux.",
        "id": "fr303_e2"
      },
      {
        "type": "reverse_cognate",
        "prompt": "Which English noun for a person or machine that sells things shares the root of French vendre?",
        "target_answer": "vendor",
        "meaning": "vendor / vending ↔ vendre ('to sell')",
        "explanation": "Latin vendere gave French vendre and English vendor / vending machine.",
        "id": "fr303_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "you are asking a friend if they want to choose the cake",
        "cues": [
          "Do you want → Tu veux",
          "to choose → choisir",
          "the cake → le gâteau"
        ],
        "idea_parts": [
          "question opener → Tu veux",
          "infinitive → choisir",
          "object → le gâteau"
        ],
        "target_answer": "Tu veux choisir le gâteau",
        "meaning": "Do you want to choose the cake?",
        "word_bank": [
          "Tu",
          "veux",
          "choisir",
          "le",
          "gâteau",
          "la",
          "un"
        ],
        "explanation": "Tu veux choisir le gâteau chains the -ir infinitive directly after veux.",
        "diagnosis": {
          "slip": "conjugated choisir after veux",
          "cue": "Keep choisir in its bare -ir infinitive form after tu veux."
        },
        "id": "fr303_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Je veux répondre maintenant",
        "replays": 2,
        "target_answer": "Je veux répondre maintenant",
        "meaning": "I want to answer now",
        "cues": [
          "je veux + répondre (respond)",
          "maintenant (now)"
        ],
        "explanation": "répondre drops the Latin s before p and marks the spot with an acute accent é.",
        "affirmation": "You caught répondre with its é and final -re.",
        "id": "fr303_e5"
      }
    ],
    "summary": {
      "outcome": "Decode -ir verbs from English -ish cognates (finish → finir) and -re verbs from Latinate stems (vendor → vendre, respond → répondre).",
      "use_example": {
        "german": "Je veux finir mon café et choisir un gâteau.",
        "english": "I want to finish my coffee and choose a cake."
      },
      "takeaway": "English -ish verbs are French -ir verbs in disguise, and they chain after je veux just like -er verbs.",
      "curiosity_teaser": "Up next on Le Pont ([4] Ne...Pas: The Sandwich): see how The -ir & -re Verb Bridges leads directly into Ne...Pas: The Sandwich."
    }
  },
  {
    "id": 4,
    "slug": "ne-pas-sandwich",
    "title": "Ne...Pas: The Sandwich",
    "subtitle": "Negation wraps the verb — and pas is literally a footstep",
    "phase": 1,
    "shift_categories": [],
    "word_ids": [
      "pas",
      "ne",
      "vouloir",
      "gâteau",
      "café"
    ],
    "table_word_ids": [
      "pas",
      "ne",
      "vouloir"
    ],
    "hook": {
      "title": "Two Halves, One Hug",
      "content": "French negates by wrapping the verb in two halves: ne before it, pas after it. Je ne veux pas — I don't want. The verb sits inside a sandwich, and everything else stays where it was. No auxiliaries, no word-order gymnastics: the sentence you can already build, plus two small words around its engine.",
      "footnotes": [
        {
          "marker": "1",
          "title": "pas is a step",
          "content": "pas is the same word as 'pace' (Latin passus, a footstep). Negation began as je ne vais pas un pas — 'I don't go a single step'. The refusal got generic; the footstep stayed in the word.",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "ne [verb] pas — and Spoken French Drops One Slice",
      "content": "The written law: ne + verb + pas. The spoken truth: French conversation drops the ne — je veux pas — exactly as English conversation drops 'I am' to 'I'm'. Learn the full sandwich first; your ear will meet the dropped slice in the wild and understand it as laziness, not a different rule.",
      "footnotes": [
        {
          "marker": "2",
          "title": "ne is 'not's' cousin",
          "content": "ne comes from Latin nōn, the very word English 'not' descends from. English kept nōn and added do-support; French kept nōn's stub and wrapped the verb. Two solutions, one problem.",
          "interest": true
        }
      ],
      "linguist_note": "pas un pas — the etymology is a 12th-century emphasis that grammaticalized: 'not a step' → 'not'. Other French negatives kept their nouns: rien (a thing), jamais (ever), personne (a person).",
      "trap_note": "The tempting wrong move: putting ne...pas around the whole sentence, English-style ('ne je veux pas'). The sandwich is tight — it hugs only the verb: je ne veux pas."
    },
    "exercises": [
      {
        "id": "fr4_e1",
        "type": "morpheme_tiles",
        "prompt": "Wrap 'veux' inside the two slices of the French negation sandwich ('I do not want'):",
        "tile_options": [
          "Je",
          "ne",
          "veux",
          "pas",
          "non"
        ],
        "target_answer": "Jeneveuxpas",
        "meaning": "Je ne veux pas (I don't want)",
        "explanation": "ne goes before the conjugated verb and pas ('a step') goes right after it."
      },
      {
        "id": "fr4_e2",
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "you don't want it — and the it is the coffee",
        "cues": [
          "The it walks left as always: le before the verb",
          "The sandwich hugs the verb: ne … veux … pas",
          "the pronoun stands INSIDE the sandwich: je ne le veux pas"
        ],
        "target_answer": "Je ne le veux pas",
        "meaning": "I don't want it",
        "word_bank": [
          "Je",
          "ne",
          "le",
          "veux",
          "pas",
          "la",
          "un"
        ],
        "idea_parts": [
          "who? → je",
          "it → le, before veux",
          "negation → ne before the pronoun+verb, pas after"
        ],
        "explanation": "je ne le veux pas — the pronoun walked left INTO the sandwich. One structure, every pronoun.",
        "diagnosis": {
          "slip": "the pronoun walked outside the sandwich",
          "cue": "The sandwich hugs the verb AND its pronouns: je ne le veux pas. The left-walking pronoun lives inside."
        }
      },
      {
        "id": "fr4_e3",
        "type": "literal_gloss",
        "prompt": "Which English sentence is built the French way?",
        "german": "Tu ne veux pas le café",
        "natural": "You don't want the coffee",
        "options": [
          "You do not want the coffee",
          "You not want the coffee",
          "Not you want the coffee"
        ],
        "target_answer": "You not want the coffee",
        "meaning": "The odd English is the lesson: French negates the verb itself, no do-support.",
        "explanation": "French has no do-support: ne...pas grips veux directly. English needed 'do' to do the same job."
      },
      {
        "id": "fr4_e4",
        "type": "reverse_cognate",
        "prompt": "pas ('not') is a worn-down English word about walking. Which one?",
        "target_answer": "pace",
        "meaning": "Latin passus 'step' → pace, and the pas of negation",
        "explanation": "je ne vais pas un pas: 'I won't go a step' became plain negation. The footstep is still inside the word."
      },
      {
        "id": "fr4_e5",
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Je ne veux pas participer",
        "replays": 2,
        "target_answer": "Je ne veux pas participer",
        "meaning": "I don't want to participate",
        "cues": [
          "Sandwich around veux: ne … pas",
          "The infinitive stays parked after pas",
          "participer — participation minus -ation"
        ],
        "explanation": "The sandwich grips veux; participer stays parked outside the hug, untouched.",
        "affirmation": "You kept the infinitive outside the sandwich — the hug is for the verb only."
      }
    ],
    "twist": {
      "prompt": "One more, ungraded — 'Do you want the invitation?' as a NEGATIVE question.",
      "target_answer": "Tu ne veux pas l'invitation",
      "word_bank": [
        "Tu",
        "ne",
        "veux",
        "pas",
        "l'invitation",
        "la",
        "le"
      ],
      "explanation": "Everything you own in one sentence: the sandwich, the elision, the -ION noun, the intonation question."
    },
    "summary": {
      "outcome": "Wrap any verb in ne...pas, keep pronouns inside the sandwich, and hear the dropped ne in spoken French without flinching.",
      "use_example": {
        "german": "Je ne le veux pas, merci.",
        "english": "I don't want it, thanks."
      },
      "takeaway": "ne [verb] pas hugs the verb — pas is a refused footstep, and the pronoun lives inside the hug.",
      "curiosity_teaser": "Up next on Le Pont ([401] Pas Un Pas): see how Ne...Pas: The Sandwich leads directly into Pas Un Pas."
    },
    "payoff": {
      "ofLesson": 3,
      "text": "Every je veux + infinitive chain from Lesson 3 can now be flipped negative simply by hugging veux with ne...pas."
    },
    "foreshadow": {
      "line": "Next we meet être ('to be'), whose first-person form je suis hides the Latin verb 'I follow'.",
      "resolvedIn": 5
    }
  },
  {
    "id": 401,
    "slug": "pas-un-pas",
    "title": "Pas Un Pas",
    "subtitle": "The footstep etymology gym: negation as refusing to move",
    "phase": 1,
    "shift_categories": [],
    "word_ids": [
      "pas",
      "ne",
      "aller",
      "un_peu"
    ],
    "table_word_ids": [
      "pas",
      "ne",
      "aller"
    ],
    "hook": {
      "title": "A Negation You Can Picture",
      "content": "Picture a stubborn 12th-century Frenchman: je n'y vais pas un pas — 'I'm not going there, not one step'. The emphasis hardened into grammar, and now every je ne sais pas carries a ghost footstep inside it. Words with pictures inside them stick. That's the whole lesson.",
      "footnotes": [
        {
          "marker": "1",
          "title": "The other negative nouns",
          "content": "rien ('nothing') was rem 'a thing'; personne ('nobody') was 'a person'; jamais ('never') was 'ever'. French negation is a museum of refused nouns.",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "ne...pas + The Bare Infinitive",
      "content": "The sandwich also wraps allé-goers: je ne veux pas partir (I don't want to leave), il ne faut pas parler. The grip lands on the conjugated verb; parked infinitives stay outside. And in the street, you'll hear je sais pas — the ne dropped, the sandwich half-built. Understand it as the same sandwich, lazily served.",
      "trap_note": "Don't re-add ne when quoting speech: 'je sais pas' in a dialogue is not a typo — it's how French is spoken. Written French keeps both slices."
    },
    "exercises": [
      {
        "id": "fr401_e1",
        "type": "matching_pairs",
        "prompt": "Match each negative phrase with its ghost picture:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "not (a refused step)",
            "german": "pas"
          },
          {
            "id": "p2",
            "english": "not (Latin non's stub)",
            "german": "ne"
          },
          {
            "id": "p3",
            "english": "nothing (a refused thing)",
            "german": "rien"
          },
          {
            "id": "p4",
            "english": "nobody (a refused person)",
            "german": "personne"
          }
        ],
        "target_answer": "pas, ne, rien, personne",
        "meaning": "the negative museum",
        "explanation": "Every French negative was once a noun being refused. Pas is the only one the course needs for now."
      },
      {
        "id": "fr401_e2",
        "type": "derive",
        "prompt": "Negate with the sandwich: 'je veux venir' (I want to come) →",
        "target_answer": "Je ne veux pas venir",
        "meaning": "I don't want to come",
        "explanation": "ne before veux, pas after — venir stays parked."
      },
      {
        "id": "fr401_e3",
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "you're refusing firmly: you don't want to celebrate",
        "cues": [
          "Sandwich: ne … veux … pas",
          "célébration → célébrer (strip whole)",
          "je ne veux pas célébrer"
        ],
        "target_answer": "Je ne veux pas célébrer",
        "meaning": "I don't want to celebrate",
        "word_bank": [
          "Je",
          "ne",
          "veux",
          "pas",
          "célébrer",
          "célébrater",
          "un"
        ],
        "idea_parts": [
          "the refusal → je ne veux pas",
          "the verb → célébrer (célébration minus -ation)"
        ],
        "explanation": "je ne veux pas célébrer — the negation sandwich wraps around the want, and the verb stays whole."
      },
      {
        "id": "fr401_e3b",
        "type": "literal_gloss",
        "prompt": "What is the literal word-for-word structure of 'Je ne veux pas venir'?",
        "german": "Je ne veux pas venir",
        "natural": "I don't want to come",
        "options": [
          "I do not want to come",
          "I not want step come",
          "Not I want come"
        ],
        "target_answer": "I not want step come",
        "meaning": "I don't want to come (ne = not, pas = step, venir = come)",
        "explanation": "Literally 'I not want step come': the sandwich hugs veux while venir waits outside."
      },
      {
        "id": "fr401_e4",
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Il ne veut pas venir",
        "replays": 2,
        "target_answer": "Il ne veut pas venir",
        "meaning": "He doesn't want to come",
        "cues": [
          "New subject: il (he) — veut conjugates with it",
          "Sandwich: ne … veut … pas",
          "venir stays parked"
        ],
        "explanation": "il veut — the same want-verb, one new subject. veut is veux's sibling; hear the t.",
        "affirmation": "You caught veut with its t — the verb agrees with il."
      }
    ],
    "summary": {
      "outcome": "Feel the footstep inside pas, negate infinitive-chains correctly, and read the dropped-ne of speech.",
      "use_example": {
        "german": "Je n'y vais pas un pas.",
        "english": "I'm not going, not one step."
      },
      "takeaway": "Negation is a refused noun with a history — and the sandwich always grips the conjugated verb, never the parked one.",
      "curiosity_teaser": "Up next on Le Pont ([402] Negation in the Wild): see how Pas Un Pas leads directly into Negation in the Wild."
    }
  },
  {
    "id": 402,
    "slug": "negation-in-the-wild",
    "title": "Negation in the Wild",
    "subtitle": "Flip drills: statement → negative without moving anything else",
    "phase": 1,
    "shift_categories": [],
    "word_ids": [
      "pas",
      "ne",
      "vouloir",
      "être",
      "cest",
      "avoir",
      "jai"
    ],
    "table_word_ids": [
      "pas",
      "ne",
      "vouloir",
      "cest"
    ],
    "hook": {
      "title": "One Move, Repeated",
      "content": "Nothing new here — just the flip, until it's boring. Every sentence you can build, you can now refuse. That symmetry (every statement has a negative twin, same words, same order) is what makes French negation feel small once you see it."
    },
    "pattern": {
      "title": "The Flip Is Two Words",
      "content": "Statement → negative: add ne before the conjugated verb, pas after it. Nothing else moves. This reliability is the payoff of the sandwich design — compare English, where negation drags 'do' in and changes the verb back to bare.",
      "trap_note": "c'est → ce n'est pas: even the fused c'est un-fuses to take the sandwich. The n' is ne eliding before est — the apostrophe law again."
    },
    "exercises": [
      {
        "id": "fr402_e1",
        "type": "shift_select",
        "prompt": "When 'C'est bon' flips to the negative, how does the negation sandwich wrap 'est'?",
        "options": [
          "Ce n'est pas bon",
          "C'est ne pas bon",
          "Ne c'est pas bon"
        ],
        "target_answer": "Ce n'est pas bon",
        "meaning": "It is not good",
        "explanation": "c'est un-fuses into ce + est so ne can step in and elide before the vowel: Ce n'est pas bon."
      },
      {
        "id": "fr402_e2",
        "type": "derive",
        "prompt": "Flip to negative: 'J'ai le temps' (I have the time) →",
        "english_hint": "ne … pas around ai",
        "target_answer": "Je n'ai pas le temps",
        "meaning": "I don't have time",
        "explanation": "je + n'ai: ne elides before ai. The sandwich survives the apostrophe."
      },
      {
        "id": "fr402_e3",
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "you don't want the complication — you came for the tradition",
        "cues": [
          "Sandwich around veux",
          "la complication — consonant restart",
          "je ne veux pas la complication"
        ],
        "target_answer": "Je ne veux pas la complication",
        "meaning": "I don't want the complication",
        "word_bank": [
          "Je",
          "ne",
          "veux",
          "pas",
          "la",
          "complication",
          "le",
          "un"
        ],
        "idea_parts": [
          "the refusal → je ne veux pas",
          "the thing → la complication",
          "nothing else moves"
        ],
        "explanation": "Statement machinery, negation machinery — one sentence, zero new pieces."
      },
      {
        "id": "fr402_e4",
        "type": "shift_select",
        "prompt": "In casual everyday speech, how is 'I don't want' typically shortened?",
        "options": [
          "Je veux pas",
          "Je ne veux",
          "Pas je veux"
        ],
        "target_answer": "Je veux pas",
        "meaning": "Spoken French drops the ne",
        "explanation": "In casual conversation, the first slice falls: je veux pas. Understand it as the sandwich, lazily served — and keep both slices in writing."
      },
      {
        "id": "fr402_e5",
        "type": "dictation",
        "prompt": "Listen and write the whole sentence (formal register).",
        "spoken": "Ce n'est pas possible",
        "replays": 2,
        "target_answer": "Ce n'est pas possible",
        "meaning": "It's not possible",
        "cues": [
          "ce + n' — the elision",
          "est inside the sandwich",
          "possible — the -able family's cousin, same in both languages"
        ],
        "explanation": "Ce n'est pas possible — three conversions in four words: the fusion, the elision, the -ible twin.",
        "affirmation": "You wrote the n' — the sandwich kept its first slice through the apostrophe."
      }
    ],
    "summary": {
      "outcome": "Flip any sentence negative with two words, handle the elided n', and recognize the dropped ne of speech.",
      "use_example": {
        "german": "Ce n'est pas possible — mais ce n'est pas grave.",
        "english": "It's not possible — but it's not serious."
      },
      "takeaway": "The flip is two words around the verb. Even c'est un-fuses to be hugged.",
      "curiosity_teaser": "Up next on Le Pont ([5] être & Its Secrets): see how Negation in the Wild leads directly into être & Its Secrets."
    }
  },
  {
    "id": 5,
    "slug": "etre-secrets",
    "title": "être & Its Secrets",
    "subtitle": "c'est, je suis ('I follow'), tu es — the being-verbs as evidence",
    "phase": 1,
    "shift_categories": [],
    "word_ids": [
      "être",
      "cest",
      "suis",
      "es",
      "est",
      "très",
      "vous"
    ],
    "table_word_ids": [
      "être",
      "cest",
      "suis",
      "es",
      "est",
      "très"
    ],
    "hook": {
      "title": "The Oldest Cognate on the Trail",
      "content": "est and is are the same Proto-Indo-European word — a 6,000-year-old cognate pair, older than farming. French être comes from Latin esse (the root of English essence), and its forms hide stories: je suis is literally 'I follow' (Latin sequor — sequence, sequel). Being, in French, is following the moments as they come.",
      "footnotes": [
        {
          "marker": "1",
          "title": "The follow behind suis",
          "content": "Latin sequor 'I follow' → Old French 'I follow (behind)' → je suis. English kept sequor in sequence, sequel, consequence. Spanish soy and Italian sono lost the connection; French kept the fossil.",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "suis, es, est — and c'est for Everything Else",
      "content": "je suis (I am), tu es (you are — thou art's exact twin), il/elle est. But the workhorse is c'est: that is, it is, this is — ce + est fused. C'est bon. C'est la vie. C'est pas possible (spoken). When in doubt about a subject, c'est is the door.",
      "footnotes": [
        {
          "marker": "2",
          "title": "tu es = thou art",
          "content": "Latin es survived into English only in KJV 'thou art'. When you say tu es, you are speaking Shakespeare's English with a French accent.",
          "interest": true
        }
      ],
      "linguist_note": "English 'is' and French 'est' from *h₁ésti; the paradigm is the most stable piece of either language. Even où est…? questions ride on it.",
      "trap_note": "The tempting wrong move: using c'est with names — c'est Marie is right for 'that's Marie', but 'she is tall' needs elle est grande. C'est points; elle/il describes."
    },
    "exercises": [
      {
        "id": "fr5_e1",
        "type": "matching_pairs",
        "prompt": "Match each English form with its French twin:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I am",
            "german": "je suis"
          },
          {
            "id": "p2",
            "english": "you are (thou art)",
            "german": "tu es"
          },
          {
            "id": "p3",
            "english": "he/she is",
            "german": "il/elle est"
          },
          {
            "id": "p4",
            "english": "it is / that is",
            "german": "c'est"
          },
          {
            "id": "p5",
            "english": "very",
            "german": "très"
          }
        ],
        "target_answer": "je suis, tu es, il/elle est, c'est, très",
        "meaning": "the être family",
        "explanation": "es = art; est = is (the 6,000-year-old pair); suis = 'I follow'."
      },
      {
        "id": "fr5_e2",
        "type": "reverse_cognate",
        "prompt": "suis ('I am') hides an English word-family about things coming one after another. Which family?",
        "target_answer": "sequence",
        "meaning": "sequence, sequel, consequence — Latin sequor",
        "explanation": "je suis is 'I follow'. Being is following — the etymology makes the form stick."
      },
      {
        "id": "fr5_e3",
        "type": "syntax_builder",
        "prompt": "Assemble: 'It's very good'",
        "target_answer": "C'est très bon",
        "meaning": "It's very good",
        "word_bank": [
          "C'est",
          "très",
          "bon",
          "est",
          "bien"
        ],
        "explanation": "c'est + très + bon — three conversions deep (fusion, trans-root, bonus)."
      },
      {
        "id": "fr5_e4",
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "you're pointing someone out: that's Marie, the sister",
        "cues": [
          "Pointing → c'est",
          "the family word: la sœur",
          "C'est ma sœur, Marie"
        ],
        "target_answer": "C'est ma sœur, Marie",
        "meaning": "That's my sister, Marie",
        "vocab_hints": [
          {
            "word": "ma",
            "translation": "my (feminine thing)",
            "note": "sœur is feminine, so ma — the possessive follows the thing, preview of topic 14"
          }
        ],
        "word_bank": [
          "C'est",
          "ma",
          "sœur",
          "Marie",
          "est",
          "la"
        ],
        "idea_parts": [
          "the pointer → c'est",
          "the person → ma sœur",
          "the name → Marie, as a tag"
        ],
        "explanation": "c'est points; the name rides as a tag. This is how French introduces everyone."
      },
      {
        "id": "fr5_e5",
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Tu es très gentille",
        "replays": 2,
        "target_answer": "Tu es très gentille",
        "meaning": "You are very kind (to a woman)",
        "cues": [
          "tu es — thou art",
          "très — the trans-root",
          "gentille — feminine -e (and -lle) at work"
        ],
        "explanation": "gentille doubles the l before the feminine e — just like bon doubles its n to bonne.",
        "affirmation": "You caught the double-l — gentille, the feminine that spells its doubling."
      }
    ],
    "twist": {
      "prompt": "Ungraded — 'It's not very good, but that's life.'",
      "target_answer": "Ce n'est pas très bon, mais c'est la vie",
      "word_bank": [
        "Ce",
        "n'est",
        "pas",
        "très",
        "bon",
        "mais",
        "c'est",
        "la",
        "vie",
        "il",
        "le"
      ],
      "explanation": "The sandwich un-fuses c'est, mais re-fuses it two words later. You are now assembling philosophy."
    },
    "summary": {
      "outcome": "Conjugate être's first forms, use c'est as the universal pointer, and hear the follow inside suis.",
      "use_example": {
        "german": "C'est très bon — je suis content.",
        "english": "It's very good — I'm happy."
      },
      "takeaway": "est/is is the oldest cognate you own; suis means 'I follow'; c'est is the door when in doubt.",
      "curiosity_teaser": "Up next on Le Pont ([501] je suis: I Follow): see how être & Its Secrets leads directly into je suis: I Follow."
    },
    "payoff": {
      "ofLesson": 4,
      "text": "Notice how Ce n'est pas bon in our twist uses Lesson 4's sandwich around est — un-fusing c'est so n'est pas can hug the verb."
    },
    "foreshadow": {
      "line": "With être in place, we can describe any noun — and Topic 6 hands us two more feminine noun bridges (-ité and -ance).",
      "resolvedIn": 6
    }
  },
  {
    "id": 501,
    "slug": "je-suis-i-follow",
    "title": "je suis: I Follow",
    "subtitle": "The sequence etymology, drilled into description sentences",
    "phase": 1,
    "shift_categories": [],
    "word_ids": [
      "suis",
      "es",
      "est",
      "être",
      "elle",
      "content",
      "grand",
      "petit",
      "très",
      "ici",
      "là"
    ],
    "table_word_ids": [
      "suis",
      "es",
      "est",
      "grand",
      "petit"
    ],
    "hook": {
      "title": "Being as Following",
      "content": "Latin sequor — 'I follow' — is why je suis means both 'I am' and 'I follow'. The idea isn't as strange as it sounds: to be somewhere is to have followed yourself there. English kept the root in sequence, sequel, consequence. French kept the verb."
    },
    "pattern": {
      "title": "Descriptions with suis and es",
      "content": "je suis grand (I am tall), tu es petit (you are small), je suis très content (I am very happy). Adjectives after être agree with the describer — grand for a male speaker, grande for a female one. The adjective follows the person it paints.",
      "trap_note": "The mind wants je suis grand to mean 'I am big' in every context — but for a woman it's je suis grande. The feminine -e follows the speaker, not the listener."
    },
    "exercises": [
      {
        "id": "fr501_e1",
        "type": "matching_pairs",
        "prompt": "Match each être form with its English meaning and etymological twin:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I am (lit. I follow)",
            "german": "je suis"
          },
          {
            "id": "p2",
            "english": "you are (thou art)",
            "german": "tu es"
          },
          {
            "id": "p3",
            "english": "he is",
            "german": "il est"
          },
          {
            "id": "p4",
            "english": "she is",
            "german": "elle est"
          }
        ],
        "target_answer": "je suis, tu es, il est, elle est",
        "meaning": "the singular forms of être",
        "explanation": "je suis (sequor), tu es (art), il/elle est (is)."
      },
      {
        "id": "fr501_e2",
        "type": "syntax_builder",
        "prompt": "Assemble: 'I am very tall' (male speaker)",
        "target_answer": "Je suis très grand",
        "meaning": "I am very tall",
        "word_bank": [
          "Je",
          "suis",
          "très",
          "grand",
          "grande",
          "la"
        ],
        "explanation": "Male speaker → grand stays masculine. très slides in before the adjective."
      },
      {
        "id": "fr501_e3",
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "a woman introducing her situation: she is very happy (contente, feminine)",
        "cues": [
          "elle est — the description form",
          "feminine adjective: contente (with the e)",
          "Elle est très contente"
        ],
        "target_answer": "Elle est très contente",
        "meaning": "She is very happy",
        "word_bank": [
          "Elle",
          "est",
          "très",
          "contente",
          "content",
          "la"
        ],
        "idea_parts": [
          "who? → elle",
          "the verb → est",
          "the adjective → contente, feminine"
        ],
        "explanation": "c'est would point; elle est describes. The feminine e follows her, as it followed the house (grande).",
        "diagnosis": {
          "slip": "the adjective stayed masculine",
          "cue": "The adjective follows the person it paints: elle est contente. The -e is hers, not the sentence's."
        }
      },
      {
        "id": "fr501_e4",
        "type": "variant_english",
        "prompt": "Which English sentences capture the meaning of 'Je suis ici, tu es là'?",
        "german": "Je suis ici, tu es là",
        "meaning": "I am here, you are there",
        "renderings": [
          "I'm here, you're there",
          "I am here and you are over there"
        ],
        "traps": [
          "I was there, you were here",
          "You are here, I am there"
        ],
        "target_answer": "I'm here, you're there",
        "explanation": "ici is 'here' and là is 'there'; je suis and tu es anchor each person in space."
      },
      {
        "id": "fr501_e5",
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Je suis très contente",
        "replays": 2,
        "target_answer": "Je suis très contente",
        "meaning": "I am very happy (female speaker)",
        "cues": [
          "je suis — the follow",
          "très before the adjective",
          "the feminine e: contente"
        ],
        "explanation": "The speaker's own gender paints the adjective — contente for her, content for him.",
        "affirmation": "The e is on the page — the speaker and the adjective agree."
      }
    ],
    "summary": {
      "outcome": "Use suis/es/est in description sentences with gender-agreeing adjectives.",
      "use_example": {
        "german": "Je suis grand, tu es petit.",
        "english": "I am tall, you are small."
      },
      "takeaway": "je suis = I follow — and every description after être agrees with the person it paints.",
      "curiosity_teaser": "Up next on Le Pont ([502] C'est Gym): see how je suis: I Follow leads directly into C'est Gym."
    }
  },
  {
    "id": 502,
    "slug": "cest-gym",
    "title": "C'est Gym",
    "subtitle": "The pointer verb: identification, questions, and la vie",
    "phase": 1,
    "shift_categories": [],
    "word_ids": [
      "cest",
      "est",
      "est_ce_que",
      "très",
      "bon",
      "être"
    ],
    "table_word_ids": [
      "cest",
      "est_ce_que",
      "bon",
      "très"
    ],
    "hook": {
      "title": "The Most Useful Two Letters in French",
      "content": "C'est does the work of four English phrases: it is, this is, that is, he's/she's (when pointing). C'est bon. C'est Marie. C'est la vie. And it questions beautifully: est-ce que c'est bon? — literally 'is it that it's good?' — a question built by putting a tiny question-machine in front of a statement."
    },
    "pattern": {
      "title": "est-ce que — the Question Machine",
      "content": "Take any statement. Put est-ce que in front. Done: tu veux → est-ce que tu veux ? No word order changes, nothing conjugates. It's the lazy man's inversion, and French made it respectable. The three ladders of asking (voice, est-ce que, inversion) get their full lesson in topic 7.",
      "footnotes": [
        {
          "marker": "1",
          "title": "que, everywhere",
          "content": "que is 'that' — c'est que, je sais que, est-ce que. French's most frequent word is also its quietest: it just connects.",
          "interest": true
        }
      ],
      "trap_note": "Don't stack question machines: 'est-ce que c'est…?' is fine, but est-ce que already asks — no rising voice required, though it's welcome."
    },
    "exercises": [
      {
        "id": "fr502_e1",
        "type": "morpheme_tiles",
        "prompt": "Assemble the question machine from its parts (is + it + that):",
        "tile_options": [
          "est",
          "ce",
          "que",
          "pas",
          "ne"
        ],
        "target_answer": "estceque",
        "meaning": "est-ce que (the question opener)",
        "explanation": "est 'is' + ce 'it' + que 'that' — a question scaffolded out of a statement. (Tiles join as est-ce que in writing.)"
      },
      {
        "id": "fr502_e2",
        "type": "syntax_builder",
        "prompt": "Assemble the question: 'Is it that you want the cake?' (natural English: Do you want the cake?)",
        "target_answer": "Est-ce que tu veux le gâteau",
        "meaning": "Do you want the cake?",
        "word_bank": [
          "Est-ce",
          "que",
          "tu",
          "veux",
          "le",
          "gâteau",
          "la",
          "un"
        ],
        "explanation": "Statement in, question out — the words inside never move."
      },
      {
        "id": "fr502_e3",
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "you're confirming a plan: is it that it's good? (is it good?)",
        "cues": [
          "the pointer: c'est bon",
          "the machine in front: est-ce que",
          "Est-ce que c'est bon ?"
        ],
        "target_answer": "Est-ce que c'est bon",
        "meaning": "Is it good?",
        "word_bank": [
          "Est-ce",
          "que",
          "c'est",
          "bon",
          "très",
          "la"
        ],
        "idea_parts": [
          "the machine → est-ce que",
          "the statement → c'est bon",
          "nothing else moves"
        ],
        "explanation": "est-ce que c'est bon ? — two c'est-family words cooperating. The question barely touched the sentence."
      },
      {
        "id": "fr502_e4",
        "type": "shift_select",
        "prompt": "'That's life' — the French:",
        "options": [
          "C'est la vie",
          "Il est la vie",
          "Elle est la vie"
        ],
        "target_answer": "C'est la vie",
        "meaning": "That's life",
        "explanation": "c'est points at the whole idea. Il/elle est would describe a specific he/she — the pointer beats the describer here."
      },
      {
        "id": "fr502_e5",
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Est-ce que c'est très important",
        "replays": 2,
        "target_answer": "Est-ce que c'est très important",
        "meaning": "Is it very important?",
        "cues": [
          "machine: est-ce que",
          "pointer: c'est",
          "the -ance twin: important"
        ],
        "explanation": "The -ance bridge in a question — importance's adjective, already English's own word.",
        "affirmation": "Machine, pointer, bridge — three systems, one sentence, all yours."
      }
    ],
    "summary": {
      "outcome": "Identify with c'est, ask with est-ce que, and feel que as the connective tissue it is.",
      "use_example": {
        "german": "Est-ce que c'est la vie ? — Oui, c'est la vie.",
        "english": "Is that life? — Yes, that's life."
      },
      "takeaway": "c'est points, est-ce que asks — and neither disturbs the sentence underneath.",
      "curiosity_teaser": "Up next on Le Pont ([6] The -ité & -ance Bridges): see how C'est Gym leads directly into The -ité & -ance Bridges."
    }
  },
  {
    "id": 6,
    "slug": "ite-and-ance-bridges",
    "title": "The -ité & -ance Bridges",
    "subtitle": "English -ity becomes -ité, -ance/-ence stays whole — and every single one takes la",
    "phase": 1,
    "shift_categories": [
      "ite",
      "ance"
    ],
    "word_ids": [
      "université",
      "possibilité",
      "liberté",
      "réalité",
      "qualité",
      "différence",
      "importance",
      "expérience",
      "patience",
      "chance"
    ],
    "table_word_ids": [
      "université",
      "possibilité",
      "liberté",
      "réalité",
      "qualité"
    ],
    "hook": {
      "title": "Two More Floors of the Feminine Warehouse",
      "content": "In Topic 2 you unlocked thousands of feminine nouns ending in -ion. Today you add two more massive floors to that same building: English words ending in -ity (university, possibility, liberty, reality, quality) swap -ity for -ité (l'université, la possibilité, la liberté, la réalité, la qualité), and English words ending in -ance or -ence (difference, importance, experience, patience, chance) cross into French with the exact same spelling and a nasal vowel!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why -ité always wears an acute accent",
          "content": "Latin abstract nouns in -itātem lost their final syllable in French, leaving a crisp stressed /e/ at the end: université, liberté. That acute accent é is the scar of Latin -tātem.",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "The Feminine Gender Decoder: -ion, -ité, -ance, -ence",
      "content": "Never memorize gender word by word when the suffix already announces it. Whenever a noun ends in -ion, -ité, -ance, or -ence, it belongs to the feminine squad: la liberté, la différence, l'université, l'importance. And when you replace any of them with 'it', the pronoun is la, walking left before the verb.",
      "linguist_note": "Latin -itās, -antia, and -entia were all feminine abstract suffixes in Rome; French and English inherited the whole set intact.",
      "trap_note": "The shortcut your mind will offer: treating -ance/-ence words like English pronunciation (/əns/). In French, both -ance and -ence share the exact same open nasal vowel /ɑ̃s/: la différence and l'importance rhyme!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Convert each English noun to its French feminine twin:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "the university",
            "german": "l'université"
          },
          {
            "id": "p2",
            "english": "the possibility",
            "german": "la possibilité"
          },
          {
            "id": "p3",
            "english": "the freedom / liberty",
            "german": "la liberté"
          },
          {
            "id": "p4",
            "english": "the difference",
            "german": "la différence"
          },
          {
            "id": "p5",
            "english": "the importance",
            "german": "l'importance"
          }
        ],
        "target_answer": "l'université, la possibilité, la liberté, la différence, l'importance",
        "meaning": "the university, the possibility, the freedom / liberty, the difference, the importance",
        "explanation": "-ity converts to -ité and -ance/-ence keeps its spelling; vowel-initial nouns elide la to l'.",
        "id": "fr6_e1"
      },
      {
        "type": "morpheme_tiles",
        "prompt": "Convert 'reality' to French by swapping -ity for -ité:",
        "tile_options": [
          "réal",
          "ité",
          "ity",
          "ance"
        ],
        "target_answer": "réalité",
        "meaning": "la réalité (reality)",
        "explanation": "réal + ité = réalité, 100% feminine.",
        "id": "fr6_e2"
      },
      {
        "type": "derive",
        "prompt": "Convert with its feminine article: 'the quality' →",
        "english_hint": "quality → -ité",
        "target_answer": "la qualité",
        "meaning": "the quality",
        "explanation": "quality → la qualité (/la kalite/).",
        "id": "fr6_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "the liberty is very important",
        "cues": [
          "The liberty → La liberté (-ité is feminine)",
          "is → est",
          "very important → très importante (adds feminine -e)"
        ],
        "idea_parts": [
          "subject → La liberté",
          "verb → est",
          "description → très importante"
        ],
        "target_answer": "La liberté est très importante",
        "meaning": "Freedom is very important",
        "word_bank": [
          "La",
          "liberté",
          "est",
          "très",
          "importante",
          "Le",
          "important"
        ],
        "explanation": "La liberté triggers feminine agreement on importante.",
        "diagnosis": {
          "slip": "left important without -e",
          "cue": "Because la liberté is feminine, important adds -e: importante."
        },
        "id": "fr6_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "C'est une bonne possibilité",
        "replays": 2,
        "target_answer": "C'est une bonne possibilité",
        "meaning": "It's a good possibility",
        "cues": [
          "pointer: C'est",
          "feminine article + adjective: une bonne",
          "-ité noun: possibilité"
        ],
        "explanation": "bonne doubles its n in the feminine before possibilité.",
        "affirmation": "You caught both the feminine une bonne and the -ité ending.",
        "id": "fr6_e5"
      }
    ],
    "summary": {
      "outcome": "Convert English -ity nouns to -ité and -ance/-ence nouns directly, assigning feminine la/une automatically.",
      "use_example": {
        "german": "L'université et la liberté sont très importantes.",
        "english": "The university and freedom are very important."
      },
      "takeaway": "Four endings (-ion, -ité, -ance, -ence) hand you thousands of feminine nouns without a single flashcard.",
      "curiosity_teaser": "Up next on Le Pont ([601] The Feminine Squad): see how The -ité & -ance Bridges leads directly into The Feminine Squad."
    },
    "twist": {
      "prompt": "Ungraded — 'It is a big difference'?",
      "target_answer": "C'est une grande différence",
      "word_bank": [
        "C'est",
        "une",
        "grande",
        "différence",
        "un",
        "grand"
      ],
      "explanation": "la différence is feminine, so both une and grande wear their feminine -e."
    },
    "foreshadow": {
      "line": "Having mastered The -ité & -ance Bridges, look ahead to Topic 7 (Questions à la Française), where this machinery expands into the next dimension of French thought.",
      "resolvedIn": 7
    },
    "payoff": {
      "ofLesson": 5,
      "text": "The foundation from Topic 5 (être & Its Secrets) now pays off directly inside The -ité & -ance Bridges: every sentence here builds on that earlier step."
    }
  },
  {
    "id": 601,
    "slug": "sprig-601",
    "title": "The Feminine Squad",
    "subtitle": "-ion, -ité, -ance: convert 12 nouns and read their gender straight off the ending.",
    "phase": 1,
    "shift_categories": [
      "ion",
      "ite",
      "ance"
    ],
    "word_ids": [
      "université",
      "possibilité",
      "liberté",
      "différence",
      "importance",
      "expérience",
      "patience",
      "chance"
    ],
    "table_word_ids": [
      "université",
      "possibilité",
      "liberté",
      "différence",
      "importance"
    ],
    "hook": {
      "title": "Reading Gender Off the Tail of the Word",
      "content": "Every single noun ending in -ion, -ité, -ance, or -ence belongs to the Feminine Squad: la tradition, la liberté, la patience, l'expérience. Even when l' hides the vowel of la before a vowel-initial noun (l'université, l'importance), any adjective describing it still wears its feminine -e!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Over 4,000 feminine nouns from four suffixes",
          "content": "Between -ion, -ité, and -ance/-ence, these four endings alone guarantee feminine gender for over 4,000 common French words.",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "The Four-Suffix Feminine Reflex",
      "content": "Glance at the right edge of the noun before choosing the article or adjective: -ion, -ité, -ance, -ence = 100% feminine (la / une + feminine adjective).",
      "linguist_note": "Suffix-driven gender assignment is deterministic across Latinate abstract nouns in French.",
      "trap_note": "Don't let elided l' hide the feminine gender of l'université or l'expérience — adjectives after them still take feminine -e!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English abstract noun to its French Feminine Squad twin:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "the possibility (-ité)",
            "german": "la possibilité"
          },
          {
            "id": "p2",
            "english": "the experience (-ence)",
            "german": "l'expérience"
          },
          {
            "id": "p3",
            "english": "the patience (-ence)",
            "german": "la patience"
          },
          {
            "id": "p4",
            "english": "the luck / chance (-ance)",
            "german": "la chance"
          },
          {
            "id": "p5",
            "english": "the reality (-ité)",
            "german": "la réalité"
          }
        ],
        "target_answer": "la possibilité, l'expérience, la patience, la chance, la réalité",
        "meaning": "the possibility (-ité), the experience (-ence), the patience (-ence), the luck / chance (-ance), the reality (-ité)",
        "explanation": "All five belong to the Feminine Squad.",
        "id": "fr601_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Which adjective form correctly completes 'L'université est ___' ('The university is big')?",
        "options": [
          "grande",
          "grand",
          "grands"
        ],
        "target_answer": "grande",
        "meaning": "L'université est grande",
        "explanation": "université ends in -ité (feminine), so grand becomes grande!",
        "id": "fr601_e2"
      },
      {
        "type": "derive",
        "prompt": "Convert with feminine article: 'the patience' →",
        "english_hint": "-ence stays whole",
        "target_answer": "la patience",
        "meaning": "the patience",
        "explanation": "la patience (/la pasjɑ̃s/).",
        "id": "fr601_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "it is a good experience",
        "cues": [
          "It is → C'est",
          "a good (feminine) → une bonne",
          "experience → expérience"
        ],
        "idea_parts": [
          "pointer → C'est",
          "feminine article + adj → une bonne",
          "noun → expérience"
        ],
        "target_answer": "C'est une bonne expérience",
        "meaning": "It is a good experience",
        "word_bank": [
          "C'est",
          "une",
          "bonne",
          "expérience",
          "un",
          "bon"
        ],
        "explanation": "expérience ends in -ence (feminine), triggering une bonne.",
        "diagnosis": {
          "slip": "used un bon",
          "cue": "-ence nouns are feminine: une bonne expérience."
        },
        "id": "fr601_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "La patience est une grande qualité",
        "replays": 2,
        "target_answer": "La patience est une grande qualité",
        "meaning": "Patience is a great quality",
        "cues": [
          "La patience est",
          "une grande qualité"
        ],
        "explanation": "Both patience (-ence) and qualité (-ité) are feminine.",
        "affirmation": "You paired both feminine nouns with la and une grande.",
        "id": "fr601_e5"
      }
    ],
    "summary": {
      "outcome": "Instantly assign feminine gender and adjective agreement across -ion, -ité, -ance, and -ence nouns.",
      "use_example": {
        "german": "La patience est une grande qualité.",
        "english": "Patience is a great quality."
      },
      "takeaway": "Glance at the suffix first: -ion, -ité, -ance, -ence = 100% feminine.",
      "curiosity_teaser": "Up next on Le Pont ([602] Liberté & Society Sentences): see how The Feminine Squad leads directly into Liberté & Society Sentences."
    }
  },
  {
    "id": 602,
    "slug": "sprig-602",
    "title": "Liberté & Society Sentences",
    "subtitle": "La liberté est… — build sentences converting -ité and -ance nouns into the wild.",
    "phase": 1,
    "shift_categories": [
      "ite",
      "ance"
    ],
    "word_ids": [
      "liberté",
      "société",
      "ville",
      "réalité",
      "qualité",
      "différence",
      "être",
      "très"
    ],
    "table_word_ids": [
      "liberté",
      "société",
      "ville",
      "réalité",
      "qualité"
    ],
    "hook": {
      "title": "Abstract Ideas in Everyday Conversation",
      "content": "Where English says bare 'Freedom is important' or 'Society changes', French always gives the abstract concept its definite article: La liberté est importante, La société est grande, La réalité est différente. Alongside them sits la ville ('the city', cousin of villa and village).",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why French uses 'the' before abstract nouns",
          "content": "When talking about a concept as a whole category (freedom, patience, reality, society, music), French never leaves the subject noun naked!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Always Keep La Before General Abstract Concepts",
      "content": "Start general statements with La liberté, La société, La réalité, La qualité + est + feminine adjective.",
      "linguist_note": "Generic definite articles are mandatory in Romance for mass and abstract nouns used as subjects.",
      "trap_note": "Never drop La at the start of 'Freedom is precious' (*Liberté est précieuse) — always say La liberté!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each general statement with its French rendering (keeping the article!):",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "Freedom is important",
            "german": "La liberté est importante"
          },
          {
            "id": "p2",
            "english": "Society is big",
            "german": "La société est grande"
          },
          {
            "id": "p3",
            "english": "The city is beautiful",
            "german": "La ville est belle"
          },
          {
            "id": "p4",
            "english": "Reality is different",
            "german": "La réalité est différente"
          }
        ],
        "target_answer": "La liberté est importante, La société est grande, La ville est belle, La réalité est différente",
        "meaning": "Freedom is important, Society is big, The city is beautiful, Reality is different",
        "explanation": "French keeps La before abstract nouns when talking about them in general.",
        "id": "fr602_e1"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the word-for-word structure of 'La liberté est importante'?",
        "german": "La liberté est importante",
        "natural": "Freedom is important",
        "options": [
          "Freedom is important",
          "The liberty is important",
          "Liberty be important"
        ],
        "target_answer": "The liberty is important",
        "meaning": "Literal structure: The liberty is important",
        "explanation": "French requires the definite article La before abstract subject nouns.",
        "id": "fr602_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'The city is very big'",
        "target_answer": "La ville est très grande",
        "meaning": "The city is very big",
        "word_bank": [
          "La",
          "ville",
          "est",
          "très",
          "grande",
          "Le",
          "grand"
        ],
        "explanation": "la ville is feminine, so grande takes -e.",
        "id": "fr602_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "reality is very different here",
        "cues": [
          "The reality → La réalité",
          "is very different → est très différente",
          "here → ici"
        ],
        "idea_parts": [
          "subject → La réalité",
          "verb + adverb + adj → est très différente",
          "place → ici"
        ],
        "target_answer": "La réalité est très différente ici",
        "meaning": "Reality is very different here",
        "word_bank": [
          "La",
          "réalité",
          "est",
          "très",
          "différente",
          "ici",
          "différent",
          "la"
        ],
        "explanation": "La réalité requires the article La and feminine différente.",
        "diagnosis": {
          "slip": "omitted La or feminine -e",
          "cue": "Start with La réalité and end différente with -e."
        },
        "id": "fr602_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "La société et la ville sont grandes",
        "replays": 2,
        "target_answer": "La société et la ville sont grandes",
        "meaning": "The society and the city are big",
        "cues": [
          "La société et la ville",
          "sont grandes"
        ],
        "explanation": "Two feminine nouns joined by et take plural sont grandes.",
        "affirmation": "You wrote sont grandes with the feminine plural -es.",
        "id": "fr602_e5"
      }
    ],
    "summary": {
      "outcome": "Construct general statements about society, freedom, quality, and the city using mandatory definite articles.",
      "use_example": {
        "german": "La qualité est très importante dans cette ville.",
        "english": "Quality is very important in this city."
      },
      "takeaway": "Never leave an abstract noun bare in French: 'Freedom' is always La liberté.",
      "curiosity_teaser": "Up next on Le Pont ([603] The -ment & -able Twin Bridges): see how Liberté & Society Sentences leads directly into The -ment & -able Twin Bridges."
    }
  },
  {
    "id": 603,
    "slug": "sprig-603",
    "title": "The -ment & -able Twin Bridges",
    "subtitle": "Adverbs in -ment (exactement, naturellement) and adjectives in -able/-ible (possible, capable).",
    "phase": 1,
    "shift_categories": [
      "ment",
      "able"
    ],
    "word_ids": [
      "exactement",
      "naturellement",
      "rapidement",
      "vraiment",
      "heureusement",
      "finalement",
      "possible",
      "impossible",
      "capable",
      "adorable",
      "visible",
      "terrible"
    ],
    "table_word_ids": [
      "exactement",
      "naturellement",
      "rapidement",
      "vraiment",
      "heureusement"
    ],
    "hook": {
      "title": "Why Adverbs Are Built From a Feminine 'Mind'",
      "content": "How do you say 'rapidly, naturally, exactly, fortunately, finally' in French? Where English glues '-ly' onto an adjective, French glues -ment (/mɑ̃/) onto the FEMININE form of the adjective (exacte → exactement, naturelle → naturellement, heureuse → heureusement) because in Latin, mente meant 'with a [...] mind'!",
      "footnotes": [
        {
          "marker": "1",
          "title": "The -able and -ible free pass",
          "content": "Adjectives ending in -able or -ible (possible, impossible, capable, adorable, visible, terrible) keep the exact same spelling as English and already end in -e for both genders!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Feminine Adjective + -ment = Adverb",
      "content": "Take the feminine adjective (exacte, naturelle, finale, heureuse, rapide) and attach -ment: exactement, naturellement, finalement, heureusement, rapidement.",
      "linguist_note": "Latin ablative singular mente grammaticalized into the pan-Romance adverbial suffix -ment.",
      "trap_note": "Remember: 'actually/really' is vraiment (never actuellement), and 'eventually/finally' is finalement (never éventuellement)!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each -able/-ible or -ment word with its meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "vraiment (vrai + ment)",
            "german": "really / truly"
          },
          {
            "id": "p2",
            "english": "finalement (true word for 'eventually')",
            "german": "finally / eventually"
          },
          {
            "id": "p3",
            "english": "capable (invariable for gender)",
            "german": "capable / able"
          },
          {
            "id": "p4",
            "english": "visible (invariable for gender)",
            "german": "visible"
          }
        ],
        "target_answer": "really / truly, finally / eventually, capable / able, visible",
        "meaning": "vraiment (vrai + ment), finalement (true word for 'eventually'), capable (invariable for gender), visible (invariable for gender)",
        "explanation": "-able/-ible adjectives never change spelling between masculine and feminine singular.",
        "id": "fr603_e1"
      },
      {
        "type": "family_matrix",
        "prompt": "Complete the Adjective → Feminine → -ment Adverb matrix for 'heureusement' ('fortunately/happily'):",
        "rows": [
          "exact (exact)",
          "naturel (natural)",
          "heureux (happy/fortunate)"
        ],
        "columns": [
          "Feminine Adjective",
          "-ment Adverb"
        ],
        "cells": [
          [
            {
              "german": "exacte",
              "english": "exact (f.)"
            },
            {
              "german": "exactement",
              "english": "exactly"
            }
          ],
          [
            {
              "german": "naturelle",
              "english": "natural (f.)"
            },
            {
              "german": "naturellement",
              "english": "naturally"
            }
          ],
          [
            {
              "german": "heureuse",
              "english": "happy/fortunate (f.)"
            },
            {
              "german": "heureusement",
              "english": "fortunately / happily"
            }
          ]
        ],
        "seed": [
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            1,
            0
          ],
          [
            1,
            1
          ],
          [
            2,
            0
          ]
        ],
        "task": {
          "row": 2,
          "column": 1
        },
        "target_answer": "heureusement",
        "meaning": "fortunately / happily",
        "row_law": "Each row takes an adjective through its feminine stem into its -ment adverb.",
        "column_law": "Column 1 is the feminine adjective (with -e); Column 2 attaches -ment ('with a ... mind').",
        "explanation": "heureux → feminine heureuse → heureusement ('fortunately / happily').",
        "id": "fr603_e2"
      },
      {
        "type": "derive",
        "prompt": "Build the French adverb from feminine 'naturelle' ('natural'):",
        "english_hint": "naturelle + ment",
        "target_answer": "naturellement",
        "meaning": "naturally",
        "explanation": "naturelle + ment = naturellement.",
        "id": "fr603_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "it is really possible today",
        "cues": [
          "It is → C'est",
          "really → vraiment",
          "possible today → possible aujourd'hui"
        ],
        "idea_parts": [
          "pointer → C'est",
          "adverb + adjective → vraiment possible",
          "time → aujourd'hui"
        ],
        "target_answer": "C'est vraiment possible aujourd'hui",
        "meaning": "It is really possible today",
        "word_bank": [
          "C'est",
          "vraiment",
          "possible",
          "aujourd'hui",
          "vrai",
          "la"
        ],
        "explanation": "vraiment modifies possible right after C'est.",
        "diagnosis": {
          "slip": "used vrai instead of vraiment",
          "cue": "Use the adverb vraiment ('really') before possible."
        },
        "id": "fr603_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Heureusement, la tour est visible",
        "replays": 2,
        "target_answer": "Heureusement, la tour est visible",
        "meaning": "Fortunately, the tower is visible",
        "cues": [
          "Adverb: Heureusement",
          "clause: la tour est visible"
        ],
        "explanation": "visible already ends in -e for both genders.",
        "affirmation": "You spelled Heureusement and visible accurately.",
        "id": "fr603_e5"
      }
    ],
    "summary": {
      "outcome": "Build French adverbs by adding -ment to the feminine adjective, and use invariable -able/-ible cognates.",
      "use_example": {
        "german": "Finalement, c'est vraiment possible.",
        "english": "In the end, it's really possible."
      },
      "takeaway": "English -ly is French feminine + -ment, and -able/-ible words cross unchanged.",
      "curiosity_teaser": "Up next on Le Pont ([7] Questions à la Française): see how The -ment & -able Twin Bridges leads directly into Questions à la Française."
    }
  },
  {
    "id": 7,
    "slug": "questions-a-la-francaise",
    "title": "Questions à la Française",
    "subtitle": "Three ladders of asking: rising voice, est-ce que, and inversion — plus cognate question words",
    "phase": 1,
    "shift_categories": [],
    "word_ids": [
      "est_ce_que",
      "où",
      "pourquoi",
      "quand",
      "comment",
      "combien",
      "quel",
      "parce_que"
    ],
    "table_word_ids": [
      "est_ce_que",
      "où",
      "pourquoi",
      "quand",
      "comment"
    ],
    "hook": {
      "title": "Three Ways to Ask the Exact Same Question",
      "content": "English forces you to haul in 'do/does/did' and scramble word order just to ask a question. French gives you a three-rung register ladder instead: Rung 1 is pure rising voice (Tu veux le café ?). Rung 2 snaps the question-opener est-ce que ('is it that') onto the front without moving a single word (Est-ce que tu veux le café ?). Rung 3 flips verb and pronoun for formal polish (Veux-tu le café ?).",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why pourquoi is English 'wherefore'",
          "content": "When Juliet asks 'Wherefore art thou Romeo?', she is not asking where he is — she is asking WHY ('for what') he bears that name. French pourquoi is built the exact same way: pour ('for') + quoi ('what')!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Question Word + est-ce que + Statement",
      "content": "When you add a question word — où ('where', cousin of ubiquitous), quand ('when'), comment ('how'), combien ('how much'), or pourquoi ('why') — you can slot it right in front of est-ce que and keep normal statement word order: Où est-ce que tu vas ? Pourquoi est-ce que tu veux partir ? Quand est-ce que le train arrive ? And to answer pourquoi ('for what'), use parce que ('by that which' = because).",
      "linguist_note": "est-ce que grammaticalized from 'is it [the case] that...', allowing French to preserve strict Subject-Verb-Object order even inside wh-questions.",
      "trap_note": "The shortcut your mind will offer: confusing pourquoi ('why?') with parce que ('because'). Remember: quoi at the end of pourquoi is 'what?' — it always asks the question!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each French question word with its meaning and etymological clue:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "where (Latin ubi → ubiquitous)",
            "german": "où"
          },
          {
            "id": "p2",
            "english": "why (for-what)",
            "german": "pourquoi"
          },
          {
            "id": "p3",
            "english": "because (by-that-which)",
            "german": "parce que"
          },
          {
            "id": "p4",
            "english": "when (Latin quando)",
            "german": "quand"
          },
          {
            "id": "p5",
            "english": "how much / how many",
            "german": "combien"
          }
        ],
        "target_answer": "où, pourquoi, parce que, quand, combien",
        "meaning": "where (Latin ubi → ubiquitous), why (for-what), because (by-that-which), when (Latin quando), how much / how many",
        "explanation": "où wears a grave accent to distinguish it from ou ('or'); pourquoi asks and parce que answers.",
        "id": "fr7_e1"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the literal word-for-word structure of 'Où est-ce que tu es'?",
        "german": "Où est-ce que tu es",
        "natural": "Where are you?",
        "options": [
          "Where are you?",
          "Where is-it that you are",
          "Where do you be"
        ],
        "target_answer": "Where is-it that you are",
        "meaning": "Literal structure: Where is-it that you are",
        "explanation": "est-ce que is literally 'is-it that', letting tu es stay in statement order.",
        "id": "fr7_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How do you answer 'Pourquoi tu veux partir ?' ('Why do you want to leave?') with 'Because it is late'?",
        "options": [
          "Parce que c'est tard",
          "Pourquoi c'est tard",
          "Est-ce que c'est tard"
        ],
        "target_answer": "Parce que c'est tard",
        "meaning": "Because it is late",
        "explanation": "Pourquoi asks 'why?'; parce que answers 'because'.",
        "id": "fr7_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "you are asking a friend where the café is",
        "cues": [
          "Where → Où (with the grave accent ù)",
          "is → est",
          "the café → le café"
        ],
        "idea_parts": [
          "question word → Où",
          "verb → est",
          "subject → le café"
        ],
        "target_answer": "Où est le café",
        "meaning": "Where is the café?",
        "word_bank": [
          "Où",
          "est",
          "le",
          "café",
          "Pourquoi",
          "la"
        ],
        "explanation": "Short questions with être simply invert: Où est le café ?",
        "diagnosis": {
          "slip": "forgot the accent or word order",
          "cue": "Start with Où + est + le café."
        },
        "id": "fr7_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Pourquoi est-ce que tu veux partir",
        "replays": 2,
        "target_answer": "Pourquoi est-ce que tu veux partir",
        "meaning": "Why do you want to leave?",
        "cues": [
          "Why: Pourquoi",
          "question machine: est-ce que",
          "statement: tu veux partir"
        ],
        "explanation": "Pourquoi + est-ce que lets tu veux partir stay untouched.",
        "affirmation": "You chained Pourquoi and est-ce que without scrambling the verb.",
        "id": "fr7_e5"
      }
    ],
    "summary": {
      "outcome": "Ask questions across all three French registers and pair où, pourquoi, quand, comment, combien with est-ce que.",
      "use_example": {
        "german": "Pourquoi est-ce que tu es ici ? — Parce que je veux te voir.",
        "english": "Why are you here? — Because I want to see you."
      },
      "takeaway": "est-ce que is your universal question adapter: snap it after any question word and keep normal sentence order.",
      "curiosity_teaser": "Up next on Le Pont ([701] Est-ce que Drills): see how Questions à la Française leads directly into Est-ce que Drills."
    },
    "twist": {
      "prompt": "Ungraded — ask 'When do you want to confirm?' using est-ce que:",
      "target_answer": "Quand est-ce que tu veux confirmer",
      "word_bank": [
        "Quand",
        "est-ce",
        "que",
        "tu",
        "veux",
        "confirmer",
        "Où",
        "la"
      ],
      "explanation": "Quand + est-ce que + tu veux confirmer — zero word-order inversion needed."
    },
    "foreshadow": {
      "line": "Having mastered Questions à la Française, look ahead to Topic 8 (The -eur Bridge), where this machinery expands into the next dimension of French thought.",
      "resolvedIn": 8
    },
    "payoff": {
      "ofLesson": 6,
      "text": "The foundation from Topic 6 (The -ité & -ance Bridges) now pays off directly inside Questions à la Française: every sentence here builds on that earlier step."
    }
  },
  {
    "id": 701,
    "slug": "sprig-701",
    "title": "Est-ce que Drills",
    "subtitle": "'Is it that': turn statements into questions without moving a single word.",
    "phase": 1,
    "shift_categories": [],
    "word_ids": [
      "est_ce_que",
      "vouloir",
      "avoir",
      "aller",
      "parler",
      "français"
    ],
    "table_word_ids": [
      "est_ce_que",
      "vouloir",
      "avoir",
      "aller",
      "parler"
    ],
    "hook": {
      "title": "The Zero-Inversion Question Opener",
      "content": "est-ce que ('is it that') absorbs the question inversion inside itself, leaving your statement untouched after que! And before a vowel-initial pronoun (il, elle, on), que elides to qu': Est-ce qu'il est là ? Est-ce qu'elle parle français ? Est-ce qu'on y va ?",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why Est-ce que is the learner's best friend",
          "content": "With Est-ce que in front, you never have to invert verb and pronoun or worry about word order!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Est-ce que + Consonant Subject; Est-ce qu' + Vowel Subject (il, elle, on)",
      "content": "Snap Est-ce que or Est-ce qu' onto the front of any statement to turn it into a clean question.",
      "linguist_note": "Est-ce que is pronounced /ɛs kə/ before consonants and /ɛs.k‿/ before vowels.",
      "trap_note": "Don't invert the verb when you already used est-ce que (*Est-ce que veux-tu) — keep normal statement order!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each statement with its est-ce que question:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "Tu parles français",
            "german": "Est-ce que tu parles français"
          },
          {
            "id": "p2",
            "english": "Vous avez l'heure",
            "german": "Est-ce que vous avez l'heure"
          },
          {
            "id": "p3",
            "english": "Il est ici (vowel subject!)",
            "german": "Est-ce qu'il est ici"
          },
          {
            "id": "p4",
            "english": "Elle vient ce soir (vowel subject!)",
            "german": "Est-ce qu'elle vient ce soir"
          }
        ],
        "target_answer": "Est-ce que tu parles français, Est-ce que vous avez l'heure, Est-ce qu'il est ici, Est-ce qu'elle vient ce soir",
        "meaning": "Tu parles français, Vous avez l'heure, Il est ici (vowel subject!), Elle vient ce soir (vowel subject!)",
        "explanation": "que elides to qu' before il, elle, and on.",
        "id": "fr701_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you turn 'Il a compris' ('He understood') into an est-ce que question?",
        "options": [
          "Est-ce qu'il a compris",
          "Est-ce que il a compris",
          "Est-ce qu'a-t-il compris"
        ],
        "target_answer": "Est-ce qu'il a compris",
        "meaning": "Did he understand?",
        "explanation": "que elides before vowel-initial il: Est-ce qu'il a compris.",
        "id": "fr701_e2"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the literal structure of 'Est-ce que tu parles français'?",
        "german": "Est-ce que tu parles français",
        "natural": "Do you speak French?",
        "options": [
          "Do you speak French?",
          "Is-it that you speak French",
          "Speak you the French"
        ],
        "target_answer": "Is-it that you speak French",
        "meaning": "Literal structure: Is-it that you speak French",
        "explanation": "Est-ce que literally means 'Is-it that', replacing English 'Do'.",
        "id": "fr701_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "do you have a reservation (polite vous, using Est-ce que)",
        "cues": [
          "Question opener → Est-ce que",
          "you have (polite) → vous avez",
          "a reservation → une réservation"
        ],
        "idea_parts": [
          "opener → Est-ce que",
          "subject + verb → vous avez",
          "object → une réservation"
        ],
        "target_answer": "Est-ce que vous avez une réservation",
        "meaning": "Do you have a reservation?",
        "word_bank": [
          "Est-ce",
          "que",
          "vous",
          "avez",
          "une",
          "réservation",
          "as",
          "la"
        ],
        "explanation": "Est-ce que + vous avez une réservation keeps normal word order.",
        "diagnosis": {
          "slip": "used as instead of avez",
          "cue": "Pair vous with avez after Est-ce que."
        },
        "id": "fr701_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Est-ce que tu veux un café",
        "replays": 2,
        "target_answer": "Est-ce que tu veux un café",
        "meaning": "Do you want a coffee?",
        "cues": [
          "opener: Est-ce que",
          "statement: tu veux un café"
        ],
        "explanation": "Zero word-order change after Est-ce que.",
        "affirmation": "You built the Est-ce que question cleanly.",
        "id": "fr701_e5"
      }
    ],
    "summary": {
      "outcome": "Turn any statement into a question with Est-ce que and elide it to Est-ce qu' before il, elle, on.",
      "use_example": {
        "german": "Est-ce qu'on va au café maintenant ?",
        "english": "Are we going to the café now?"
      },
      "takeaway": "Est-ce que absorbs the inversion so your sentence never has to move.",
      "curiosity_teaser": "Up next on Le Pont ([702] Question-Word Twins): see how Est-ce que Drills leads directly into Question-Word Twins."
    }
  },
  {
    "id": 702,
    "slug": "sprig-702",
    "title": "Question-Word Twins",
    "subtitle": "où ↔ ubiquitous, pourquoi ↔ wherefore, quand, comment, combien — the cognate question words.",
    "phase": 1,
    "shift_categories": [],
    "word_ids": [
      "où",
      "pourquoi",
      "quand",
      "comment",
      "combien",
      "quel",
      "parce_que",
      "heure"
    ],
    "table_word_ids": [
      "où",
      "pourquoi",
      "quand",
      "comment",
      "combien"
    ],
    "hook": {
      "title": "Every Question Word Has an English Cousin",
      "content": "French's six question words all map to Latinate roots in English: où ('where' ↔ ubiquitous), quand ('when' ↔ quando), comment ('how' ↔ manner -ment), combien ('how much/many'), pourquoi ('why' ↔ wherefore), and quel/quelle ('which/what' ↔ quality)!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why quel, quelle, quels, quelles all sound like /kɛl/",
          "content": "Even though quel agrees in writing with its noun (Quel train ? Quelle heure ?), all four forms sound 100% identical (/kɛl/)!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Question Word + est-ce que, or Short Inversion (Quelle heure est-il ?)",
      "content": "Pair question words with est-ce que or short être inversions.",
      "linguist_note": "Interrogative determiner quel agrees in gender and number with its head noun.",
      "trap_note": "Don't forget the grave accent on où ('where') — without the accent, ou means 'or'!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each French question word with its English cognate clue:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "où (where)",
            "german": "ubiquitous (Latin ubi)"
          },
          {
            "id": "p2",
            "english": "quel / quelle (which / what)",
            "german": "quality (Latin qualis)"
          },
          {
            "id": "p3",
            "english": "comment (how)",
            "german": "manner (-ment adverb)"
          },
          {
            "id": "p4",
            "english": "pourquoi (why)",
            "german": "wherefore (for-what)"
          },
          {
            "id": "p5",
            "english": "combien (how much / many)",
            "german": "how-well (com + bien)"
          }
        ],
        "target_answer": "ubiquitous (Latin ubi), quality (Latin qualis), manner (-ment adverb), wherefore (for-what), how-well (com + bien)",
        "meaning": "où (where), quel / quelle (which / what), comment (how), pourquoi (why), combien (how much / many)",
        "explanation": "Every French question word links back to a Latin root you already know.",
        "id": "fr702_e1"
      },
      {
        "type": "reverse_cognate",
        "prompt": "French où ('where', from Latin ubi) shares its root with which English adjective meaning 'present everywhere at once'?",
        "target_answer": "ubiquitous",
        "meaning": "ubiquitous ↔ où ('where')",
        "explanation": "Latin ubīque ('everywhere') gave English ubiquitous; Latin ubi gave French où.",
        "id": "fr702_e2"
      },
      {
        "type": "shift_select",
        "prompt": "Because 'l'heure' ('the hour/time') is feminine, how do you write 'What time is it?'",
        "options": [
          "Quelle heure est-il",
          "Quel heure est-il",
          "Quoi heure est-il"
        ],
        "target_answer": "Quelle heure est-il",
        "meaning": "What time is it? (lit. Which hour is it?)",
        "explanation": "heure is feminine, so quel becomes Quelle heure.",
        "id": "fr702_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "when are you going to arrive (informal tu, using est-ce que)",
        "cues": [
          "When → Quand",
          "question machine → est-ce que",
          "you are going to arrive → tu vas arriver"
        ],
        "idea_parts": [
          "question word → Quand",
          "machine → est-ce que",
          "near future → tu vas arriver"
        ],
        "target_answer": "Quand est-ce que tu vas arriver",
        "meaning": "When are you going to arrive?",
        "word_bank": [
          "Quand",
          "est-ce",
          "que",
          "tu",
          "vas",
          "arriver",
          "Où",
          "la"
        ],
        "explanation": "Quand + est-ce que + tu vas arriver.",
        "diagnosis": {
          "slip": "used Où instead of Quand",
          "cue": "Use Quand for 'when'."
        },
        "id": "fr702_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Comment est-ce que tu vas à la gare",
        "replays": 2,
        "target_answer": "Comment est-ce que tu vas à la gare",
        "meaning": "How are you going to the station?",
        "cues": [
          "How: Comment est-ce que",
          "you go to the station: tu vas à la gare"
        ],
        "explanation": "Comment asks 'how / by what means'.",
        "affirmation": "You paired Comment with est-ce que cleanly.",
        "id": "fr702_e5"
      }
    ],
    "summary": {
      "outcome": "Deploy où, quand, comment, combien, pourquoi, and quel/quelle across real questions.",
      "use_example": {
        "german": "Quelle heure est-il et quand est-ce qu'on part ?",
        "english": "What time is it and when are we leaving?"
      },
      "takeaway": "où = ubiquitous, quel = quality, pourquoi = wherefore.",
      "curiosity_teaser": "Up next on Le Pont ([8] The -eur Bridge): see how Question-Word Twins leads directly into The -eur Bridge."
    }
  },
  {
    "id": 8,
    "slug": "the-eur-bridge",
    "title": "The -eur Bridge",
    "subtitle": "doctor → docteur, actor → acteur — and why la couleur and l'erreur rebel against masculine gender",
    "phase": 1,
    "shift_categories": [
      "eur"
    ],
    "word_ids": [
      "docteur",
      "acteur",
      "directeur",
      "professeur",
      "honneur",
      "couleur",
      "erreur",
      "peur",
      "chaleur",
      "bonheur"
    ],
    "table_word_ids": [
      "docteur",
      "acteur",
      "directeur",
      "professeur",
      "honneur"
    ],
    "hook": {
      "title": "Where English -or and -er Re-Merge",
      "content": "English splits Latin -or words across three spellings: doctor, actor, director, professor, error, color, honour. French merges every single one of them into -eur (/œʁ/): le docteur, l'acteur, le directeur, le professeur, l'erreur, la couleur, l'honneur. Round your lips as if to say 'oo' while pronouncing 'eh' — that warm front-rounded vowel is /œʁ/.",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why people in -eur are masculine but feelings/qualities in -eur are feminine",
          "content": "Latin had two different -or groups: human agents (doctor, actor, director) which are naturally masculine (le docteur), and abstract sensations/qualities (color, error, calor 'heat', pavor 'fear') which became feminine in Gallo-Romance (la couleur, l'erreur, la chaleur, la peur)!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "The Agent vs. Quality Split in -eur",
      "content": "Here is the rule that beats rote memorization: if an -eur word names a person doing a job (le docteur, l'acteur, le directeur, le professeur), it takes masculine le. If it names an abstract quality, sensation, or state (la couleur, l'erreur, la peur, la chaleur), it takes feminine la! (Only two common non-person words stay masculine: l'honneur and le bonheur 'happiness'.)",
      "linguist_note": "Latin stressed free vowel ō/ŏ before r diphthongized in Old French to -ou- and then fronted to -eu- /œ/, while British English spelling 'colour/honour' still preserves the Old French -our stage!",
      "trap_note": "The shortcut your mind will offer: treating all -eur nouns as masculine because le docteur and l'acteur come first. Always check whether the noun is an abstract quality: la couleur and l'erreur are feminine!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each -eur noun with its article using the Person (le) vs. Quality (la) law:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "the doctor (person)",
            "german": "le docteur"
          },
          {
            "id": "p2",
            "english": "the director (person)",
            "german": "le directeur"
          },
          {
            "id": "p3",
            "english": "the color (quality)",
            "german": "la couleur"
          },
          {
            "id": "p4",
            "english": "the error / mistake (quality)",
            "german": "l'erreur"
          },
          {
            "id": "p5",
            "english": "the heat / warmth (quality)",
            "german": "la chaleur"
          }
        ],
        "target_answer": "le docteur, le directeur, la couleur, l'erreur, la chaleur",
        "meaning": "the doctor (person), the director (person), the color (quality), the error / mistake (quality), the heat / warmth (quality)",
        "explanation": "Human agents in -eur take le; abstract qualities and sensations take la.",
        "id": "fr8_e1"
      },
      {
        "type": "reverse_cognate",
        "prompt": "la chaleur ('heat, warmth') shares its Latin root calor with which English nutrition unit?",
        "target_answer": "calorie",
        "meaning": "calorie ↔ chaleur (Latin calor 'heat')",
        "explanation": "A calorie is literally a unit of heat (Latin calor → French chaleur).",
        "id": "fr8_e2"
      },
      {
        "type": "shift_select",
        "prompt": "Which article belongs with 'couleur' ('color') in 'I like the color'?",
        "options": [
          "la couleur",
          "le couleur",
          "l'couleur"
        ],
        "target_answer": "la couleur",
        "meaning": "the color (feminine quality noun)",
        "explanation": "couleur is the famous feminine -eur quality noun: la couleur.",
        "id": "fr8_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "the doctor is here and the director is there",
        "cues": [
          "The doctor is here → Le docteur est ici",
          "and the director is there → et le directeur est là"
        ],
        "idea_parts": [
          "first clause → Le docteur est ici",
          "connector + second clause → et le directeur est là"
        ],
        "target_answer": "Le docteur est ici et le directeur est là",
        "meaning": "The doctor is here and the director is there",
        "word_bank": [
          "Le",
          "docteur",
          "est",
          "ici",
          "et",
          "le",
          "directeur",
          "est",
          "là",
          "La",
          "la"
        ],
        "explanation": "Both docteur and directeur are human agent nouns in -eur, so both take le.",
        "diagnosis": {
          "slip": "used la for an agent noun",
          "cue": "Human agents in -eur take masculine le."
        },
        "id": "fr8_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "C'est une grande erreur",
        "replays": 2,
        "target_answer": "C'est une grande erreur",
        "meaning": "It is a big mistake",
        "cues": [
          "pointer: C'est",
          "feminine article + adjective: une grande",
          "-eur rebel: erreur"
        ],
        "explanation": "erreur is feminine, so grande pronounces its final d!",
        "affirmation": "You heard grande in the feminine before erreur.",
        "id": "fr8_e5"
      }
    ],
    "summary": {
      "outcome": "Convert English -or/-our nouns into French -eur and separate masculine human agents (le docteur) from feminine qualities (la couleur, l'erreur).",
      "use_example": {
        "german": "Le professeur explique l'erreur.",
        "english": "The teacher explains the mistake."
      },
      "takeaway": "British spelling 'colour' is a fossil of Old French — modern French moved on to -eur.",
      "curiosity_teaser": "Up next on Le Pont ([801] Couleur: The Famous Rebel): see how The -eur Bridge leads directly into Couleur: The Famous Rebel."
    },
    "twist": {
      "prompt": "Ungraded — 'Happiness is simple' (use le bonheur):",
      "target_answer": "Le bonheur est simple",
      "word_bank": [
        "Le",
        "bonheur",
        "est",
        "simple",
        "La",
        "bon"
      ],
      "explanation": "bonheur (bon 'good' + heur 'fortune/augury') is masculine: Le bonheur est simple."
    },
    "foreshadow": {
      "line": "Having mastered The -eur Bridge, look ahead to Topic 9 (vous & tu), where this machinery expands into the next dimension of French thought.",
      "resolvedIn": 9
    },
    "payoff": {
      "ofLesson": 7,
      "text": "The foundation from Topic 7 (Questions à la Française) now pays off directly inside The -eur Bridge: every sentence here builds on that earlier step."
    }
  },
  {
    "id": 801,
    "slug": "sprig-801",
    "title": "Couleur: The Famous Rebel",
    "subtitle": "la couleur, l'erreur, la peur, la chaleur: why abstract Latin -or nouns stayed feminine in French.",
    "phase": 1,
    "shift_categories": [
      "eur"
    ],
    "word_ids": [
      "couleur",
      "erreur",
      "peur",
      "chaleur",
      "fleur",
      "heure",
      "bon"
    ],
    "table_word_ids": [
      "couleur",
      "erreur",
      "peur",
      "chaleur",
      "fleur"
    ],
    "hook": {
      "title": "Why Abstract Qualities in -eur Are Feminine",
      "content": "Human professions in -eur are masculine (le docteur, l'acteur), while abstract sensations and natural phenomena in -eur are feminine: la couleur ('color'), l'erreur ('error'), la peur ('fear'), la chaleur ('heat'), and la fleur ('flower')!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Two exceptions that stayed masculine: le bonheur and l'honneur",
          "content": "le bonheur ('happiness', built on Latin neuter augurium 'omen') and l'honneur ('honour') are the two non-person -eur words that stayed masculine.",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Quality in -eur → Feminine la / une",
      "content": "Pair la couleur, l'erreur, la peur, la chaleur, and la fleur with feminine articles and adjectives (une belle couleur, une grande erreur).",
      "linguist_note": "Gallo-Romance reassigned Latin abstract nouns in -ōrem to the feminine gender.",
      "trap_note": "Don't write *un erreur or *le couleur — both are feminine quality nouns (une erreur, la couleur)!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each feminine -eur noun with its meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "la couleur",
            "german": "the color"
          },
          {
            "id": "p2",
            "english": "l'erreur (une erreur)",
            "german": "the error / mistake"
          },
          {
            "id": "p3",
            "english": "la peur",
            "german": "the fear"
          },
          {
            "id": "p4",
            "english": "la chaleur",
            "german": "the heat / warmth"
          },
          {
            "id": "p5",
            "english": "la fleur",
            "german": "the flower"
          }
        ],
        "target_answer": "the color, the error / mistake, the fear, the heat / warmth, the flower",
        "meaning": "la couleur, l'erreur (une erreur), la peur, la chaleur, la fleur",
        "explanation": "All five take feminine la / une.",
        "id": "fr801_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'a beautiful color' in French?",
        "options": [
          "une belle couleur",
          "un beau couleur",
          "une beau couleur"
        ],
        "target_answer": "une belle couleur",
        "meaning": "a beautiful color",
        "explanation": "couleur is feminine, so both une and belle are feminine!",
        "id": "fr801_e2"
      },
      {
        "type": "derive",
        "prompt": "Translate with the indefinite article ('a'): 'a mistake / an error' →",
        "english_hint": "feminine une + erreur",
        "target_answer": "une erreur",
        "meaning": "a mistake / an error",
        "explanation": "erreur is feminine: une erreur.",
        "id": "fr801_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "this color is very beautiful (use Cette couleur)",
        "cues": [
          "This color → Cette couleur",
          "is very beautiful → est très belle"
        ],
        "idea_parts": [
          "subject → Cette couleur",
          "predicate → est très belle"
        ],
        "target_answer": "Cette couleur est très belle",
        "meaning": "This color is very beautiful",
        "word_bank": [
          "Cette",
          "couleur",
          "est",
          "très",
          "belle",
          "Ce",
          "beau"
        ],
        "explanation": "couleur is feminine, triggering Cette and belle.",
        "diagnosis": {
          "slip": "used Ce or beau",
          "cue": "couleur is feminine: Cette couleur est très belle."
        },
        "id": "fr801_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "C'est une jolie fleur rouge",
        "replays": 2,
        "target_answer": "C'est une jolie fleur rouge",
        "meaning": "It is a pretty red flower",
        "cues": [
          "pointer: C'est",
          "BAGS adj before noun: une jolie fleur",
          "color after noun: rouge"
        ],
        "explanation": "jolie stands before fleur; rouge stands after.",
        "affirmation": "You flanked fleur with jolie and rouge accurately.",
        "id": "fr801_e5"
      }
    ],
    "summary": {
      "outcome": "Use feminine articles and adjectives with la couleur, l'erreur, la peur, la chaleur, and la fleur.",
      "use_example": {
        "german": "Quelle belle couleur sur cette fleur !",
        "english": "What a beautiful color on this flower!"
      },
      "takeaway": "People in -eur are le; qualities and sensations in -eur are la.",
      "curiosity_teaser": "Up next on Le Pont ([802] -eur Discrimination Drills): see how Couleur: The Famous Rebel leads directly into -eur Discrimination Drills."
    }
  },
  {
    "id": 802,
    "slug": "sprig-802",
    "title": "-eur Discrimination Drills",
    "subtitle": "Convert -or/-er nouns to -eur and decide le vs la using the agent vs quality rule.",
    "phase": 1,
    "shift_categories": [
      "eur"
    ],
    "word_ids": [
      "docteur",
      "acteur",
      "directeur",
      "professeur",
      "honneur",
      "bonheur",
      "couleur",
      "erreur"
    ],
    "table_word_ids": [
      "docteur",
      "acteur",
      "directeur",
      "professeur",
      "honneur"
    ],
    "hook": {
      "title": "Fast Sorting: Masculine Agents vs. Feminine Qualities",
      "content": "Run the -eur bridge at full speed, separating masculine human agents (un docteur, un acteur, un directeur, un professeur) and masculine bonheur/honneur from feminine quality nouns (une couleur, une erreur).",
      "footnotes": [
        {
          "marker": "1",
          "title": "How un/une reveals the gender when l' hides it",
          "content": "On vowel-initial l'acteur, l'honneur, and l'erreur, the definite article elides to l' — so testing with un/une (un acteur, un honneur, une erreur) makes the gender visible!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Convert -or → -eur, Then Check Agent (un) vs. Quality (une)",
      "content": "Use the Agent vs. Quality rule across mixed drills.",
      "linguist_note": "Agentive -eur (< -ātōrem) vs. abstract -eur (< -ōrem) converged phonetically while diverging in gender.",
      "trap_note": "Watch out for l'erreur vs. l'acteur: l'acteur is a person (un bon acteur), while l'erreur is a quality (une grande erreur)!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Sort these -eur nouns into un (masculine) vs. une (feminine):",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "a doctor (person)",
            "german": "un docteur"
          },
          {
            "id": "p2",
            "english": "an actor (person)",
            "german": "un acteur"
          },
          {
            "id": "p3",
            "english": "an honour (masculine exception)",
            "german": "un honneur"
          },
          {
            "id": "p4",
            "english": "a color (quality)",
            "german": "une couleur"
          },
          {
            "id": "p5",
            "english": "an error (quality)",
            "german": "une erreur"
          }
        ],
        "target_answer": "un docteur, un acteur, un honneur, une couleur, une erreur",
        "meaning": "a doctor (person), an actor (person), an honour (masculine exception), a color (quality), an error (quality)",
        "explanation": "un/une reveals the gender even when l' hides it.",
        "id": "fr802_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Which sentence has the correct gender agreement?",
        "options": [
          "C'est un bon acteur et une grande erreur",
          "C'est une bonne acteur et un grand erreur",
          "C'est un bon acteur et un grand erreur"
        ],
        "target_answer": "C'est un bon acteur et une grande erreur",
        "meaning": "He is a good actor (m.) and it's a big mistake (f.)",
        "explanation": "acteur is masculine (un bon acteur); erreur is feminine (une grande erreur).",
        "id": "fr802_e2"
      },
      {
        "type": "derive",
        "prompt": "Convert English 'the professor / teacher' to French (with article):",
        "english_hint": "-or → -eur",
        "target_answer": "le professeur",
        "meaning": "the teacher / professor",
        "explanation": "professor → le professeur.",
        "id": "fr802_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "the director and the professor are here",
        "cues": [
          "The director → Le directeur",
          "and the professor are here → et le professeur sont ici"
        ],
        "idea_parts": [
          "subjects → Le directeur et le professeur",
          "verb + place → sont ici"
        ],
        "target_answer": "Le directeur et le professeur sont ici",
        "meaning": "The director and the professor are here",
        "word_bank": [
          "Le",
          "directeur",
          "et",
          "le",
          "professeur",
          "sont",
          "ici",
          "La",
          "est"
        ],
        "explanation": "Both human agent nouns take le, and together they take plural sont.",
        "diagnosis": {
          "slip": "used est instead of sont",
          "cue": "Two singular subjects joined by et take plural sont."
        },
        "id": "fr802_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "C'est un grand honneur pour moi",
        "replays": 2,
        "target_answer": "C'est un grand honneur pour moi",
        "meaning": "It is a great honour for me",
        "cues": [
          "C'est un grand honneur",
          "pour moi"
        ],
        "explanation": "honneur is masculine (un grand honneur) and starts with a mute H.",
        "affirmation": "You paired un grand with honneur and pour moi.",
        "id": "fr802_e5"
      }
    ],
    "summary": {
      "outcome": "Discriminate masculine and feminine -eur nouns at speed and pair them with accurate articles and adjectives.",
      "use_example": {
        "german": "C'est un grand honneur de voir le directeur.",
        "english": "It is a great honour to see the director."
      },
      "takeaway": "Check un/une when l' hides the article: un acteur, un honneur, une erreur.",
      "curiosity_teaser": "Up next on Le Pont ([9] vous & tu): see how -eur Discrimination Drills leads directly into vous & tu."
    }
  },
  {
    "id": 9,
    "slug": "vous-and-tu",
    "title": "vous & tu",
    "subtitle": "The T–V politeness line: tu vs vous, the universal -ez ending, and social register",
    "phase": 1,
    "shift_categories": [],
    "word_ids": [
      "vous",
      "tu",
      "voulez",
      "êtes",
      "avez",
      "allez",
      "bonjour",
      "merci",
      "sil_vous_plait"
    ],
    "table_word_ids": [
      "vous",
      "tu",
      "voulez",
      "êtes",
      "avez"
    ],
    "hook": {
      "title": "Why One Person Is Called 'You All'",
      "content": "In the 4th century AD, when the Roman Empire split between two emperors, addressing one emperor meant addressing both — so courtiers spoke to a single ruler using the plural vōs ('you all') instead of singular tū ('thou'). That habit spread across Europe: French kept tu for family, close friends, and children, and uses plural vous as the respectful shield for strangers, shopkeepers, and groups.",
      "footnotes": [
        {
          "marker": "1",
          "title": "English did the exact same thing — then lost 'thou'",
          "content": "English once contrasted intimate 'thou/thee' with plural/polite 'ye/you'. English eventually promoted polite 'you' to everyone and retired 'thou'; French kept both rungs of the ladder alive.",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "The Universal -ez Sound of vous",
      "content": "Here is the best gift in French verb conjugation: with vous, virtually every verb in the language ends in the exact same sound — -ez (/e/), identical to the -er infinitive sound! Tu veux becomes vous voulez. Tu parles becomes vous parlez. Tu as becomes vous avez. Tu vas becomes vous allez. Only vous êtes ('you are') keeps its ancient Latin -tes ending.",
      "linguist_note": "Latin 2nd-person plural -ātis softened to Old French -ez (/ets/ → /e/), giving modern French a nearly universal polite/plural verb marker.",
      "trap_note": "The shortcut your mind will offer: pronouncing the -z of voulez or parlez. That final -z is completely silent — its only job is to make the e sound like /e/ (as in café)!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each informal tu form with its polite/plural vous counterpart:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "tu veux (you want)",
            "german": "vous voulez"
          },
          {
            "id": "p2",
            "english": "tu es (you are)",
            "german": "vous êtes"
          },
          {
            "id": "p3",
            "english": "tu as (you have)",
            "german": "vous avez"
          },
          {
            "id": "p4",
            "english": "tu vas (you go)",
            "german": "vous allez"
          },
          {
            "id": "p5",
            "english": "please (to a stranger)",
            "german": "s'il vous plaît"
          }
        ],
        "target_answer": "vous voulez, vous êtes, vous avez, vous allez, s'il vous plaît",
        "meaning": "tu veux (you want), tu es (you are), tu as (you have), tu vas (you go), please (to a stranger)",
        "explanation": "Notice how voulez, avez, and allez all end in -ez (/e/), while êtes wears a circumflex hat.",
        "id": "fr9_e1"
      },
      {
        "type": "shift_select",
        "prompt": "You walk into a Paris bakery for the first time. How do you ask the baker 'Do you have bread?'",
        "options": [
          "Vous avez du pain",
          "Tu as du pain",
          "Vous as du pain"
        ],
        "target_answer": "Vous avez du pain",
        "meaning": "Do you have bread? (polite)",
        "explanation": "With a shopkeeper or stranger, vous is mandatory — and takes avez.",
        "id": "fr9_e2"
      },
      {
        "type": "derive",
        "prompt": "Shift from informal 'Tu veux le café' to polite vous:",
        "english_hint": "tu → vous, veux → voulez",
        "target_answer": "Vous voulez le café",
        "meaning": "Do you want the coffee? (polite)",
        "explanation": "voulez ends in -ez (/e/).",
        "id": "fr9_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "you are politely asking a stranger if they are ready (prêt)",
        "cues": [
          "You are (polite) → Vous êtes",
          "ready → prêt"
        ],
        "idea_parts": [
          "polite subject + verb → Vous êtes",
          "adjective → prêt"
        ],
        "target_answer": "Vous êtes prêt",
        "meaning": "Are you ready? (polite)",
        "word_bank": [
          "Vous",
          "êtes",
          "prêt",
          "Tu",
          "es"
        ],
        "explanation": "Vous êtes links with a /z/ sound in speech (/vu.z‿ɛt/).",
        "diagnosis": {
          "slip": "used tu es instead of vous êtes",
          "cue": "Use Vous êtes for polite address."
        },
        "id": "fr9_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Vous voulez réserver une table",
        "replays": 2,
        "target_answer": "Vous voulez réserver une table",
        "meaning": "Would you like to reserve a table?",
        "cues": [
          "polite opener: Vous voulez",
          "infinitive + object: réserver une table"
        ],
        "explanation": "voulez (/vule/) and réserver (/ʁezɛʁve/) end in the exact same /e/ vowel!",
        "affirmation": "You distinguished conjugated voulez (-ez) from parked infinitive réserver (-er)!",
        "id": "fr9_e5"
      }
    ],
    "summary": {
      "outcome": "Navigate the tu/vous register line and conjugate polite verbs with the -ez ending.",
      "use_example": {
        "german": "Bonjour, vous voulez un café, s'il vous plaît ?",
        "english": "Hello, would you like a coffee, please?"
      },
      "takeaway": "With vous, -ez (/e/) is your master key — and it sounds identical to the -er infinitive.",
      "curiosity_teaser": "Up next on Le Pont ([901] Merci & Bonjour Gym): see how vous & tu leads directly into Merci & Bonjour Gym."
    },
    "twist": {
      "prompt": "Ungraded — politely tell a stranger 'You are very kind' (use gentil):",
      "target_answer": "Vous êtes très gentil",
      "word_bank": [
        "Vous",
        "êtes",
        "très",
        "gentil",
        "Tu",
        "es"
      ],
      "explanation": "When vous addresses one person, the adjective stays singular (gentil) even though the verb êtes is plural!"
    },
    "foreshadow": {
      "line": "Having mastered vous & tu, look ahead to Topic 10 (avoir & the H It Lost), where this machinery expands into the next dimension of French thought.",
      "resolvedIn": 10
    },
    "payoff": {
      "ofLesson": 8,
      "text": "The foundation from Topic 8 (The -eur Bridge) now pays off directly inside vous & tu: every sentence here builds on that earlier step."
    }
  },
  {
    "id": 901,
    "slug": "sprig-901",
    "title": "Merci & Bonjour Gym",
    "subtitle": "Greetings, thanks, s'il vous plaît — the politeness set in dialogue drills.",
    "phase": 1,
    "shift_categories": [],
    "word_ids": [
      "bonjour",
      "merci",
      "oui",
      "sil_vous_plait",
      "vous",
      "tu",
      "voudrais",
      "café"
    ],
    "table_word_ids": [
      "bonjour",
      "merci",
      "oui",
      "sil_vous_plait",
      "vous"
    ],
    "hook": {
      "title": "Politeness as a Complete French Circuit",
      "content": "Every interaction in a shop, bakery, or café opens with Bonjour ! Add s'il vous plaît ('if it pleases you') and merci beaucoup ('thank you very much') to complete the politeness circuit.",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why s'il vous plaît adapts to s'il te plaît with a friend",
          "content": "When speaking to one friend (tu), the indirect pronoun inside s'il vous plaît simply switches from vous to te: s'il te plaît!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Bonjour → Request + S'il vous plaît → Merci",
      "content": "Chain the three politeness beats in order.",
      "linguist_note": "Politeness formulas in French preserve fossilized conditional syntax (s'il vous plaît = 'if it pleases to-you').",
      "trap_note": "Never forget the circumflex î on plaît!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each part of a polite café exchange:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "Good day / Hello (opening key)",
            "german": "Bonjour"
          },
          {
            "id": "p2",
            "english": "Please (formal, lit. if it pleases you)",
            "german": "s'il vous plaît"
          },
          {
            "id": "p3",
            "english": "Please (informal, to a friend)",
            "german": "s'il te plaît"
          },
          {
            "id": "p4",
            "english": "Thank you very much",
            "german": "merci beaucoup"
          }
        ],
        "target_answer": "Bonjour, s'il vous plaît, s'il te plaît, merci beaucoup",
        "meaning": "Good day / Hello (opening key), Please (formal, lit. if it pleases you), Please (informal, to a friend), Thank you very much",
        "explanation": "Every polite exchange starts with Bonjour.",
        "id": "fr901_e1"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the literal word-for-word meaning of 's'il vous plaît'?",
        "german": "s'il vous plaît",
        "natural": "please",
        "options": [
          "please",
          "if it to-you pleases",
          "if you please it"
        ],
        "target_answer": "if it to-you pleases",
        "meaning": "Literal structure: if it to-you pleases",
        "explanation": "si ('if') + il ('it') + vous ('to-you') + plaît ('pleases').",
        "id": "fr901_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'Hello, a coffee, please'",
        "target_answer": "Bonjour, un café, s'il vous plaît",
        "meaning": "Hello, a coffee, please",
        "word_bank": [
          "Bonjour",
          "un",
          "café",
          "s'il",
          "vous",
          "plaît",
          "tu",
          "la"
        ],
        "explanation": "Open with Bonjour, name the item, close with s'il vous plaît.",
        "id": "fr901_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "yes thank you it is very good",
        "cues": [
          "Yes, thank you → Oui, merci",
          "it is very good → c'est très bon"
        ],
        "idea_parts": [
          "acknowledgment → Oui, merci",
          "evaluation → c'est très bon"
        ],
        "target_answer": "Oui, merci, c'est très bon",
        "meaning": "Yes, thank you, it is very good",
        "word_bank": [
          "Oui",
          "merci",
          "c'est",
          "très",
          "bon",
          "est",
          "la"
        ],
        "explanation": "Oui, merci, c'est très bon is a natural response at the table.",
        "diagnosis": {
          "slip": "omitted c'est",
          "cue": "Use c'est très bon for 'it is very good'."
        },
        "id": "fr901_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Bonjour, vous avez une table, s'il vous plaît",
        "replays": 2,
        "target_answer": "Bonjour, vous avez une table, s'il vous plaît",
        "meaning": "Hello, do you have a table, please?",
        "cues": [
          "Bonjour",
          "vous avez une table",
          "s'il vous plaît"
        ],
        "explanation": "Rising voice turns vous avez une table into a polite question.",
        "affirmation": "You chained Bonjour, vous avez une table, and s'il vous plaît.",
        "id": "fr901_e5"
      }
    ],
    "summary": {
      "outcome": "Conduct complete polite exchanges using Bonjour, s'il vous/te plaît, and merci.",
      "use_example": {
        "german": "Bonjour ! Un thé, s'il vous plaît. — Merci !",
        "english": "Hello! A tea, please. — Thank you!"
      },
      "takeaway": "Always open with Bonjour before asking a question in France.",
      "curiosity_teaser": "Up next on Le Pont ([902] The vous Register): see how Merci & Bonjour Gym leads directly into The vous Register."
    }
  },
  {
    "id": 902,
    "slug": "sprig-902",
    "title": "The vous Register",
    "subtitle": "When vous is required; vous voulez vs tu veux and the universal -ez ending.",
    "phase": 1,
    "shift_categories": [],
    "word_ids": [
      "vous",
      "tu",
      "voulez",
      "êtes",
      "avez",
      "allez",
      "parler",
      "français"
    ],
    "table_word_ids": [
      "vous",
      "tu",
      "voulez",
      "êtes",
      "avez"
    ],
    "hook": {
      "title": "Switching Gears Between tu and vous in the Same Room",
      "content": "Flip between informal tu (-es/-s/-x) for a friend and polite/plural vous (-ez / êtes) for a stranger or any group of two or more people!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why vous is also the plural of tu",
          "content": "Addressing two or more friends at once always uses plural vous (tu + tu = vous)!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "The Instant Switch: tu (-s/-x) ↔ vous (-ez)",
      "content": "Flip sentences between tu parles ↔ vous parlez, tu veux ↔ vous voulez, tu as ↔ vous avez, tu vas ↔ vous allez, tu es ↔ vous êtes.",
      "linguist_note": "Second-person plural -ez (/e/) is the most regular inflectional suffix in the French verbal system.",
      "trap_note": "Don't mix tu with -ez (*tu parlez) or vous with -s (*vous parles)!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each informal tu question with its polite/plural vous twin:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "Tu parles français ?",
            "german": "Vous parlez français ?"
          },
          {
            "id": "p2",
            "english": "Tu veux partir ?",
            "german": "Vous voulez partir ?"
          },
          {
            "id": "p3",
            "english": "Tu as le billet ?",
            "german": "Vous avez le billet ?"
          },
          {
            "id": "p4",
            "english": "Tu vas à Paris ?",
            "german": "Vous allez à Paris ?"
          },
          {
            "id": "p5",
            "english": "Tu es ici ?",
            "german": "Vous êtes ici ?"
          }
        ],
        "target_answer": "Vous parlez français ?, Vous voulez partir ?, Vous avez le billet ?, Vous allez à Paris ?, Vous êtes ici ?",
        "meaning": "Tu parles français ?, Tu veux partir ?, Tu as le billet ?, Tu vas à Paris ?, Tu es ici ?",
        "explanation": "Four out of five simply end in -ez (/e/) with vous; only être uses êtes.",
        "id": "fr902_e1"
      },
      {
        "type": "shift_select",
        "prompt": "You are talking to two close friends at once. Which pronoun and verb do you use for 'Are you two going to the cinema?'",
        "options": [
          "Vous allez au cinéma",
          "Tu vas au cinéma",
          "Vous vas au cinéma"
        ],
        "target_answer": "Vous allez au cinéma",
        "meaning": "Are you (plural) going to the cinema?",
        "explanation": "Addressing two or more people always uses plural vous!",
        "id": "fr902_e2"
      },
      {
        "type": "derive",
        "prompt": "Convert from informal 'Tu parles anglais' to polite/plural vous:",
        "english_hint": "tu → vous, parles → parlez",
        "target_answer": "Vous parlez anglais",
        "meaning": "You speak English (polite/plural)",
        "explanation": "parles (/paʁl/) adds the /e/ sound in vous parlez (/vu paʁle/).",
        "id": "fr902_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "do you speak French or English (polite vous)",
        "cues": [
          "You speak French → Vous parlez français",
          "or English → ou anglais"
        ],
        "idea_parts": [
          "polite subject + verb → Vous parlez",
          "languages → français ou anglais"
        ],
        "target_answer": "Vous parlez français ou anglais",
        "meaning": "Do you speak French or English?",
        "word_bank": [
          "Vous",
          "parlez",
          "français",
          "ou",
          "anglais",
          "où",
          "parles"
        ],
        "explanation": "ou ('or') has no accent, whereas où ('where') has a grave accent!",
        "diagnosis": {
          "slip": "used où with an accent for 'or'",
          "cue": "ou without an accent means 'or'."
        },
        "id": "fr902_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Vous voulez aller au restaurant avec nous",
        "replays": 2,
        "target_answer": "Vous voulez aller au restaurant avec nous",
        "meaning": "Do you want to go to the restaurant with us?",
        "cues": [
          "Vous voulez aller",
          "au restaurant avec nous"
        ],
        "explanation": "voulez (-ez) pulls the bare infinitive aller (-er).",
        "affirmation": "You paired Vous voulez with aller and avec nous.",
        "id": "fr902_e5"
      }
    ],
    "summary": {
      "outcome": "Switch effortlessly between informal tu and polite/plural vous across regular and core verbs.",
      "use_example": {
        "german": "Tu viens ? — Oui ! Et vous, vous venez avec nous ?",
        "english": "Are you coming? — Yes! And you all, are you coming with us?"
      },
      "takeaway": "One friend is tu; one stranger is vous; two of anybody is vous.",
      "curiosity_teaser": "Up next on Le Pont ([10] avoir & the H It Lost): see how The vous Register leads directly into avoir & the H It Lost."
    }
  },
  {
    "id": 10,
    "slug": "avoir-and-the-lost-h",
    "title": "avoir & the H It Lost",
    "subtitle": "j'ai, tu as, il a, vous avez — plus the silent H doublets (hôtel/hospital, homme/human)",
    "phase": 1,
    "shift_categories": [
      "doublet"
    ],
    "word_ids": [
      "avoir",
      "jai",
      "as",
      "a",
      "avons",
      "avez",
      "hôtel",
      "hôpital",
      "homme",
      "hiver",
      "histoire",
      "pain",
      "eau",
      "ami"
    ],
    "table_word_ids": [
      "avoir",
      "jai",
      "as",
      "a",
      "avons"
    ],
    "hook": {
      "title": "The Letter French Writes Only for Memory",
      "content": "Latin habēre ('to have') lost its initial H and softened its b into v, becoming French avoir. In fact, French stopped pronouncing EVERY Latin H two thousand years ago — scribes only put the letter H back into spelling during the Middle Ages to remind readers of the Latin roots! Once you know that French H is silent, a whole row of words unlocks: l'homme (human), l'hôtel and l'hôpital (hospital), l'hiver (hibernate), l'histoire (history/story), l'heure (hour).",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why hôtel and hôpital wear a circumflex hat (ô)",
          "content": "Compare English 'hostel/hospital' with French hôtel/hôpital. Whenever Old French silenced an S before a T, scribes drew a tiny circumflex hat (ˆ) over the vowel to mark the vanished S!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "j'ai, tu as, il a, nous avons, vous avez",
      "content": "Because ai ('have') starts with a vowel, je drops its e: j'ai (/ʒe/, 'I have'). Then come tu as (/ty a/) and il/elle a (/il a/) — both pronounced /a/ because final -s is silent! In the plural, the v of avoir returns: nous avons ('we have') and vous avez ('you have'). And because French H is silent, words like hôtel, homme, and histoire trigger elision just like pure vowels: l'homme, l'hôtel, l'histoire.",
      "linguist_note": "Vulgar Latin *aio ('I have') contracted to ai; in liaison before a vowel, the dormant -s of nous avons and vous avez wakes up as /z/.",
      "trap_note": "The shortcut your mind will offer: saying 'je ai' as two words or breathing an English H into l'hôtel. Elide je + ai into one syllable j'ai (/ʒe/), and treat mute H exactly like a vowel!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each silent-H French word with its English cognate and meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "l'homme (man)",
            "german": "human / homage"
          },
          {
            "id": "p2",
            "english": "l'hôtel / l'hôpital",
            "german": "hostel / hospital"
          },
          {
            "id": "p3",
            "english": "l'hiver (winter)",
            "german": "hibernate"
          },
          {
            "id": "p4",
            "english": "l'histoire (story / history)",
            "german": "history"
          },
          {
            "id": "p5",
            "english": "l'heure (hour / time)",
            "german": "hour"
          }
        ],
        "target_answer": "human / homage, hostel / hospital, hibernate, history, hour",
        "meaning": "l'homme (man), l'hôtel / l'hôpital, l'hiver (winter), l'histoire (story / history), l'heure (hour / time)",
        "explanation": "Every Latin H is silent in French, so le/la elides to l' before all five.",
        "id": "fr10_e1"
      },
      {
        "type": "morpheme_tiles",
        "prompt": "Fuse 'je' + 'ai' ('I have') using the elision rule:",
        "tile_options": [
          "j'",
          "ai",
          "je",
          "as"
        ],
        "target_answer": "j'ai",
        "meaning": "I have",
        "explanation": "je drops its vowel before ai → j'ai (/ʒe/).",
        "id": "fr10_e2"
      },
      {
        "type": "reverse_cognate",
        "prompt": "French hiver ('winter') shares its Latin root hībernum with which English verb for animals sleeping through winter?",
        "target_answer": "hibernate",
        "meaning": "hibernate ↔ l'hiver ('winter')",
        "explanation": "To hibernate is literally 'to winter' (Latin hībernāre).",
        "id": "fr10_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "I have a good friend here",
        "cues": [
          "I have → J'ai (elided)",
          "a good friend → un bon ami",
          "here → ici"
        ],
        "idea_parts": [
          "possession → J'ai",
          "object → un bon ami",
          "location → ici"
        ],
        "target_answer": "J'ai un bon ami ici",
        "meaning": "I have a good friend here",
        "word_bank": [
          "J'ai",
          "un",
          "bon",
          "ami",
          "ici",
          "Je",
          "ai"
        ],
        "explanation": "J'ai un bon ami ici — in speech, the n of bon links smoothly onto ami.",
        "diagnosis": {
          "slip": "wrote Je ai without elision",
          "cue": "Always elide je + ai to J'ai."
        },
        "id": "fr10_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Vous avez une bonne histoire",
        "replays": 2,
        "target_answer": "Vous avez une bonne histoire",
        "meaning": "You have a good story",
        "cues": [
          "polite have: Vous avez",
          "feminine article + adj: une bonne",
          "silent-H noun: histoire"
        ],
        "explanation": "histoire means both 'history' and 'story'.",
        "affirmation": "You heard the /z/ liaison in Vous‿avez and the silent H of histoire.",
        "id": "fr10_e5"
      }
    ],
    "summary": {
      "outcome": "Conjugate avoir (j'ai, tu as, il a, nous avons, vous avez), negate it (je n'ai pas), and decode silent-H doublets.",
      "use_example": {
        "german": "J'ai rendez-vous à l'hôtel dans une heure.",
        "english": "I have an appointment at the hotel in an hour."
      },
      "takeaway": "French H is a silent ghost of Latin, and circumflex ˆ is the tombstone of a vanished S.",
      "curiosity_teaser": "Up next on Le Pont ([1001] The H-Drop Doublets): see how avoir & the H It Lost leads directly into The H-Drop Doublets."
    },
    "twist": {
      "prompt": "Ungraded — 'I don't have the confirmation' (wrap n'...pas around ai):",
      "target_answer": "Je n'ai pas la confirmation",
      "word_bank": [
        "Je",
        "n'ai",
        "pas",
        "la",
        "confirmation",
        "J'ai",
        "ne"
      ],
      "explanation": "When ne steps in before ai, je gets its vowel back and ne elides instead: Je n'ai pas!"
    },
    "foreshadow": {
      "line": "Having mastered avoir & the H It Lost, look ahead to Topic 11 (Adjectives & the Silent -s), where this machinery expands into the next dimension of French thought.",
      "resolvedIn": 11
    },
    "payoff": {
      "ofLesson": 9,
      "text": "The foundation from Topic 9 (vous & tu) now pays off directly inside avoir & the H It Lost: every sentence here builds on that earlier step."
    }
  },
  {
    "id": 1001,
    "slug": "sprig-1001",
    "title": "The H-Drop Doublets",
    "subtitle": "hôtel/hospital, homme/human, hiver/hibernate — French's silent H as an etymological fingerprint.",
    "phase": 1,
    "shift_categories": [
      "doublet"
    ],
    "word_ids": [
      "hôtel",
      "hôpital",
      "homme",
      "hiver",
      "histoire",
      "heure",
      "habiter",
      "avoir"
    ],
    "table_word_ids": [
      "hôtel",
      "hôpital",
      "homme",
      "hiver",
      "histoire"
    ],
    "hook": {
      "title": "Why French H Never Makes a Sound",
      "content": "Latin-origin H words in French (l'homme, l'hôtel, l'hôpital, l'hiver, l'histoire, l'heure, j'habite) have a completely silent H (h muet), so le, la, and je elide right across the H as if it weren't there!",
      "footnotes": [
        {
          "marker": "1",
          "title": "How English kept the S and H that French dropped",
          "content": "Compare hospital / hostel with hôpital / hôtel: the circumflex hat (ô) marks the medieval S that vanished before T!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Mute H = Pure Vowel for Elision and Liaison",
      "content": "Treat Latin-origin H words as vowel-initial: l'homme, l'heure, l'histoire, l'hôtel, l'hôpital, j'habite.",
      "linguist_note": "French h muet (Latin origin) triggers mandatory vowel elision and prevocalic liaison.",
      "trap_note": "Never write *je habite or *la heure — elision to j'habite and l'heure is mandatory!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each elided silent-H word with its English cognate:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "l'hôpital (circumflex ô = lost s)",
            "german": "the hospital"
          },
          {
            "id": "p2",
            "english": "l'homme (Latin homo)",
            "german": "the man (human)"
          },
          {
            "id": "p3",
            "english": "l'histoire (both story & history)",
            "german": "the story / history"
          },
          {
            "id": "p4",
            "english": "l'heure (silent H)",
            "german": "the hour / time"
          },
          {
            "id": "p5",
            "english": "j'habite (je + habite)",
            "german": "I live / dwell (habitat)"
          }
        ],
        "target_answer": "the hospital, the man (human), the story / history, the hour / time, I live / dwell (habitat)",
        "meaning": "l'hôpital (circumflex ô = lost s), l'homme (Latin homo), l'histoire (both story & history), l'heure (silent H), j'habite (je + habite)",
        "explanation": "All five start with h muet and elide the preceding vowel.",
        "id": "fr1001_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you write 'I live in Paris' using 'habiter'?",
        "options": [
          "J'habite à Paris",
          "Je habite à Paris",
          "J'habites à Paris"
        ],
        "target_answer": "J'habite à Paris",
        "meaning": "I live in Paris",
        "explanation": "je elides before mute-H habite: J'habite à Paris.",
        "id": "fr1001_e2"
      },
      {
        "type": "derive",
        "prompt": "Elide the article before 'histoire' ('the story / history'):",
        "english_hint": "la + histoire → l'...",
        "target_answer": "l'histoire",
        "meaning": "the story / history",
        "explanation": "la drops its vowel before mute-H histoire: l'histoire.",
        "id": "fr1001_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "the man lives near the hospital (use habite près de l'hôpital)",
        "cues": [
          "The man lives → L'homme habite",
          "near the hospital → près de l'hôpital"
        ],
        "idea_parts": [
          "subject + verb → L'homme habite",
          "location → près de l'hôpital"
        ],
        "target_answer": "L'homme habite près de l'hôpital",
        "meaning": "The man lives near the hospital",
        "word_bank": [
          "L'homme",
          "habite",
          "près",
          "de",
          "l'hôpital",
          "Le",
          "homme"
        ],
        "explanation": "Both l'homme and l'hôpital elide because of mute H.",
        "diagnosis": {
          "slip": "wrote Le homme",
          "cue": "Elide both: L'homme and de l'hôpital."
        },
        "id": "fr1001_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "J'habite dans un grand hôtel",
        "replays": 2,
        "target_answer": "J'habite dans un grand hôtel",
        "meaning": "I live in a big hotel",
        "cues": [
          "J'habite",
          "dans un grand hôtel"
        ],
        "explanation": "In un grand‿hôtel, the silent d of grand wakes up as /t/ before mute-H hôtel!",
        "affirmation": "You wrote J'habite and un grand hôtel cleanly.",
        "id": "fr1001_e5"
      }
    ],
    "summary": {
      "outcome": "Apply mandatory elision and liaison across all Latin-origin mute-H words.",
      "use_example": {
        "german": "L'homme raconte une bonne histoire à l'hôtel.",
        "english": "The man tells a good story at the hotel."
      },
      "takeaway": "To a French ear, Latin H is invisible — elide and link right through it.",
      "curiosity_teaser": "Up next on Le Pont ([1002] J'ai Gym): see how The H-Drop Doublets leads directly into J'ai Gym."
    }
  },
  {
    "id": 1002,
    "slug": "sprig-1002",
    "title": "J'ai Gym",
    "subtitle": "J'ai un gâteau, j'ai trente ans — have-sentences including age as possession.",
    "phase": 1,
    "shift_categories": [],
    "word_ids": [
      "avoir",
      "jai",
      "as",
      "a",
      "avons",
      "avez",
      "pain",
      "eau",
      "ans",
      "peur",
      "faim"
    ],
    "table_word_ids": [
      "avoir",
      "jai",
      "as",
      "a",
      "avons"
    ],
    "hook": {
      "title": "Running avoir Across Possessions, Ages, and Feelings",
      "content": "avoir (j'ai, tu as, il/elle a, nous avons, vous avez) expresses possessions (j'ai un billet), ages (j'ai trente ans), and physical sensations (j'ai faim, j'ai peur). In the negative, j'ai un-elides so n' can hug ai, and un/une collapses to bare de: Je n'ai pas de billet!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why tu as and il a sound identical (/a/)",
          "content": "Because the final -s of tu as is silent, tu as (/ty a/) and il a (/il a/) have the exact same verb sound!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Positive J'ai un… vs. Negative Je n'ai pas de…",
      "content": "Practice positive and negative sentences with avoir.",
      "linguist_note": "Negative determiner reduction (un/une/du/de la/des → de) applies systematically after je n'ai pas.",
      "trap_note": "When negating j'ai, don't write *J'ai ne pas — un-elide je so n' can hug ai: Je n'ai pas!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each avoir phrase with its natural English translation:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "J'ai un billet",
            "german": "I have a ticket"
          },
          {
            "id": "p2",
            "english": "Tu as trente ans",
            "german": "You are thirty years old"
          },
          {
            "id": "p3",
            "english": "Il a une grande maison",
            "german": "He has a big house"
          },
          {
            "id": "p4",
            "english": "Nous avons le temps",
            "german": "We have time"
          },
          {
            "id": "p5",
            "english": "Je n'ai pas de réservation",
            "german": "I don't have a reservation"
          }
        ],
        "target_answer": "I have a ticket, You are thirty years old, He has a big house, We have time, I don't have a reservation",
        "meaning": "J'ai un billet, Tu as trente ans, Il a une grande maison, Nous avons le temps, Je n'ai pas de réservation",
        "explanation": "avoir handles possessions, ages, and time.",
        "id": "fr1002_e1"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the literal word-for-word breakdown of 'Elle a vingt ans'?",
        "german": "Elle a vingt ans",
        "natural": "She is twenty years old",
        "options": [
          "She is twenty years old",
          "She has twenty years",
          "She is twenty of years"
        ],
        "target_answer": "She has twenty years",
        "meaning": "Literal structure: She has twenty years",
        "explanation": "French expresses age with avoir ('She has twenty years').",
        "id": "fr1002_e2"
      },
      {
        "type": "shift_select",
        "prompt": "Flip 'J'ai une table' ('I have a table') into the negative ('I don't have a table'):",
        "options": [
          "Je n'ai pas de table",
          "J'ai ne pas une table",
          "Je n'ai pas une table"
        ],
        "target_answer": "Je n'ai pas de table",
        "meaning": "I don't have a table",
        "explanation": "je returns before n'ai pas, and une collapses to bare de!",
        "id": "fr1002_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "we have a reservation for tonight",
        "cues": [
          "We have → Nous avons",
          "a reservation for tonight → une réservation pour ce soir"
        ],
        "idea_parts": [
          "subject + verb → Nous avons",
          "object → une réservation",
          "time → pour ce soir"
        ],
        "target_answer": "Nous avons une réservation pour ce soir",
        "meaning": "We have a reservation for tonight",
        "word_bank": [
          "Nous",
          "avons",
          "une",
          "réservation",
          "pour",
          "ce",
          "soir",
          "avez",
          "la"
        ],
        "explanation": "Nous avons + une réservation + pour ce soir.",
        "diagnosis": {
          "slip": "used avez instead of avons",
          "cue": "Nous takes avons."
        },
        "id": "fr1002_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Tu as l'heure, s'il te plaît",
        "replays": 2,
        "target_answer": "Tu as l'heure, s'il te plaît",
        "meaning": "Do you have the time, please? (informal)",
        "cues": [
          "Tu as l'heure",
          "s'il te plaît"
        ],
        "explanation": "With tu, s'il vous plaît adapts to s'il te plaît!",
        "affirmation": "You caught Tu as l'heure and s'il te plaît.",
        "id": "fr1002_e5"
      }
    ],
    "summary": {
      "outcome": "Build positive, negative, and question sentences with avoir across objects, time, and ages.",
      "use_example": {
        "german": "J'ai trente ans et j'ai deux frères.",
        "english": "I am thirty years old and I have two brothers."
      },
      "takeaway": "J'ai flips to Je n'ai pas de in the negative.",
      "curiosity_teaser": "Up next on Le Pont ([1003] Liaison & Silent Consonants: CaReFuL): see how J'ai Gym leads directly into Liaison & Silent Consonants: CaReFuL."
    }
  },
  {
    "id": 1003,
    "slug": "sprig-1003",
    "title": "Liaison & Silent Consonants: CaReFuL",
    "subtitle": "Why final consonants go silent except C, R, F, L — and wake up before a vowel in liaison (vous avez, les amis).",
    "phase": 1,
    "shift_categories": [],
    "word_ids": [
      "vous",
      "avez",
      "êtes",
      "nous",
      "avons",
      "sont",
      "ami",
      "hôtel",
      "ans",
      "bon"
    ],
    "table_word_ids": [
      "vous",
      "avez",
      "êtes",
      "nous",
      "avons"
    ],
    "hook": {
      "title": "The Sleeping Consonant at the End of the Word",
      "content": "Use the English word CaReFuL! If a French word ends in C, R, F, or L (avec, hiver, neuf, hôtel), you usually pronounce that final consonant. If it ends in S, T, D, X, Z, P, N (vous, est, grand, deux, voulez), that final letter sleeps — until the very next word starts with a vowel and wakes it up in liaison!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Three Liaison Sounds: S/X → /z/, T/D → /t/, N → /n/",
          "content": "When a consonant wakes up before a vowel: S and X buzz like /z/ (vous‿avez, deux‿ans), T and D tap like /t/ (c'est‿un ami, grand‿hôtel), and N links as /n/ (un‿ami, mon‿ami)!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "CaReFuL Finals Stay Awake; S/X, T/D, N Wake Before Vowels",
      "content": "Listen for the consonant bridge jumping across the space onto the next vowel-initial word.",
      "linguist_note": "Word-final consonants survived before vowel-initial words within the same phonological phrase (liaison).",
      "trap_note": "Never pronounce S or X as /s/ in liaison — it ALWAYS buzzes as voiced /z/ (vous‿avez /vu.za.ve/)!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each linked phrase with its liaison sound:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "vous‿avez / les‿amis (S before vowel)",
            "german": "/z/ buzz"
          },
          {
            "id": "p2",
            "english": "deux‿ans / six‿heures (X before vowel)",
            "german": "/z/ buzz"
          },
          {
            "id": "p3",
            "english": "c'est‿important (T before vowel)",
            "german": "/t/ tap"
          },
          {
            "id": "p4",
            "english": "un‿ami / mon‿hôtel (N before vowel)",
            "german": "/n/ link"
          }
        ],
        "target_answer": "/z/ buzz, /z/ buzz, /t/ tap, /n/ link",
        "meaning": "vous‿avez / les‿amis (S before vowel), deux‿ans / six‿heures (X before vowel), c'est‿important (T before vowel), un‿ami / mon‿hôtel (N before vowel)",
        "explanation": "S/X → /z/, T/D → /t/, N → /n/.",
        "id": "fr1003_e1"
      },
      {
        "type": "shift_select",
        "prompt": "In 'deux ans' ('two years'), how is the final -x of 'deux' pronounced before 'ans'?",
        "options": [
          "Like /z/ (/dø.z‿ɑ̃/)",
          "Completely silent (/dø ɑ̃/)",
          "Like /ks/ (/døks ɑ̃/)"
        ],
        "target_answer": "Like /z/ (/dø.z‿ɑ̃/)",
        "meaning": "X wakes up as /z/ before a vowel in liaison",
        "explanation": "Both S and X turn into voiced /z/ before a vowel.",
        "id": "fr1003_e2"
      },
      {
        "type": "shift_select",
        "prompt": "Which word below pronounces its final consonant even when standing alone (the CaReFuL rule)?",
        "options": [
          "neuf (ends in F)",
          "grand (ends in D)",
          "vous (ends in S)"
        ],
        "target_answer": "neuf (ends in F)",
        "meaning": "F is in CaReFuL, so neuf (/nœf/) pronounces its final f",
        "explanation": "C, R, F, L are usually pronounced at the end of a word.",
        "id": "fr1003_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "you have two friends here (polite vous)",
        "cues": [
          "You have → Vous avez",
          "two friends here → deux amis ici"
        ],
        "idea_parts": [
          "polite subject + verb → Vous avez",
          "number + noun + place → deux amis ici"
        ],
        "target_answer": "Vous avez deux amis ici",
        "meaning": "You have two friends here",
        "word_bank": [
          "Vous",
          "avez",
          "deux",
          "amis",
          "ici",
          "Tu",
          "as"
        ],
        "explanation": "Both Vous‿avez and deux‿amis link with a /z/ buzz.",
        "diagnosis": {
          "slip": "used Tu as instead of Vous avez",
          "cue": "Use Vous avez deux amis ici."
        },
        "id": "fr1003_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "C'est un bon hôtel",
        "replays": 2,
        "target_answer": "C'est un bon hôtel",
        "meaning": "It is a good hotel",
        "cues": [
          "C'est un (/sɛ.t‿œ̃/)",
          "bon hôtel (/bɔ.n‿o.tɛl/)"
        ],
        "explanation": "Double liaison: c'est‿un and bon‿hôtel.",
        "affirmation": "You heard the linked words and wrote C'est un bon hôtel cleanly.",
        "id": "fr1003_e5"
      }
    ],
    "summary": {
      "outcome": "Apply the CaReFuL rule for final consonants and produce /z/, /t/, and /n/ liaisons before vowels.",
      "use_example": {
        "german": "Vous avez un bon ami à l'hôtel.",
        "english": "You have a good friend at the hotel."
      },
      "takeaway": "Final consonants sleep unless they are CaReFuL — or unless the next word's vowel wakes them up.",
      "curiosity_teaser": "Up next on Le Pont ([11] Adjectives & the Silent -s): see how Liaison & Silent Consonants: CaReFuL leads directly into Adjectives & the Silent -s."
    }
  },
  {
    "id": 11,
    "slug": "adjectives-and-silent-s",
    "title": "Adjectives & the Silent -s",
    "subtitle": "Feminine -e wakes the sleeping final consonant (grand → grande), plural -s stays silent, and colors follow the noun",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "grand",
      "petit",
      "bon",
      "vert",
      "blanc",
      "bleu",
      "rouge",
      "noir",
      "jaune",
      "jardin"
    ],
    "table_word_ids": [
      "grand",
      "petit",
      "bon",
      "vert",
      "blanc"
    ],
    "hook": {
      "title": "Why the Masculine Form Sounds Shorter Than the Feminine",
      "content": "Listen to grand ('big/tall'): in the masculine, the final d is completely silent (/ɡʁɑ̃/). Now add the feminine -e for a feminine noun like la maison: grande (/ɡʁɑ̃d/). That silent -e acts like a shield that protects the d from disappearing, waking the consonant back up! The exact same thing happens across French adjectives: petit (/pəti/) → petite (/pətit/), vert (/vɛʁ/) → verte (/vɛʁt/), content (/kɔ̃tɑ̃/) → contente (/kɔ̃tɑ̃t/).",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why English borrowed 'petite' with the T pronounced",
          "content": "English borrowed the feminine form petite for clothing sizes, which is why English speakers pronounce the final T — whereas French masculine petit drops the T completely!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Paint the Object First, Then Color It",
      "content": "In English you say 'the green garden' or 'a black coffee' — adjective before noun. In French, descriptive adjectives (especially colors, shapes, and nationalities) come AFTER the noun: le jardin vert ('the garden green'), un café noir ('a coffee black'), la maison blanche ('the house white'). First you name what the thing is; then you paint it. And in the plural, French writes an -s on both noun and adjective (les jardins verts), but that plural -s is completely silent!",
      "linguist_note": "Post-nominal adjective placement is the Romance default; only a small high-frequency set of short evaluative adjectives (BAGS, Sprig 1103) precedes the noun.",
      "trap_note": "The shortcut your mind will offer: putting color adjectives before the noun English-style (*le vert jardin). Name the noun first, then paint it: le jardin vert!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each masculine adjective (silent final consonant) with its feminine form (awakened consonant):",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "grand /ɡʁɑ̃/ (big, m.)",
            "german": "grande /ɡʁɑ̃d/ (f.)"
          },
          {
            "id": "p2",
            "english": "petit /pəti/ (small, m.)",
            "german": "petite /pətit/ (f.)"
          },
          {
            "id": "p3",
            "english": "vert /vɛʁ/ (green, m.)",
            "german": "verte /vɛʁt/ (f.)"
          },
          {
            "id": "p4",
            "english": "blanc /blɑ̃/ (white, m.)",
            "german": "blanche /blɑ̃ʃ/ (f.)"
          },
          {
            "id": "p5",
            "english": "bon /bɔ̃/ (good, m.)",
            "german": "bonne /bɔn/ (f.)"
          }
        ],
        "target_answer": "grande /ɡʁɑ̃d/ (f.), petite /pətit/ (f.), verte /vɛʁt/ (f.), blanche /blɑ̃ʃ/ (f.), bonne /bɔn/ (f.)",
        "meaning": "grand /ɡʁɑ̃/ (big, m.), petit /pəti/ (small, m.), vert /vɛʁ/ (green, m.), blanc /blɑ̃/ (white, m.), bon /bɔ̃/ (good, m.)",
        "explanation": "Adding feminine -e wakes up the final d, t, or n (and turns blanc into blanche).",
        "id": "fr11_e1"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the word-for-word French order of 'Le jardin vert'?",
        "german": "Le jardin vert",
        "natural": "The green garden",
        "options": [
          "The green garden",
          "The garden green",
          "Green the garden"
        ],
        "target_answer": "The garden green",
        "meaning": "Literal structure: The garden green",
        "explanation": "French names the object first (le jardin) and paints its color second (vert).",
        "id": "fr11_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'The white house is big'",
        "target_answer": "La maison blanche est grande",
        "meaning": "The white house is big",
        "word_bank": [
          "La",
          "maison",
          "blanche",
          "est",
          "grande",
          "blanc",
          "grand"
        ],
        "explanation": "la maison takes feminine blanche right after the noun, and feminine grande after est.",
        "id": "fr11_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "I want a black coffee please",
        "cues": [
          "I want a coffee black → Je veux un café noir",
          "please (polite) → s'il vous plaît"
        ],
        "idea_parts": [
          "want + noun + color → Je veux un café noir",
          "politeness tag → s'il vous plaît"
        ],
        "target_answer": "Je veux un café noir, s'il vous plaît",
        "meaning": "I want a black coffee, please",
        "word_bank": [
          "Je",
          "veux",
          "un",
          "café",
          "noir",
          "s'il",
          "vous",
          "plaît",
          "noire",
          "la"
        ],
        "explanation": "noir follows café because color adjectives sit after the noun.",
        "diagnosis": {
          "slip": "put noir before café",
          "cue": "Place color adjectives after the noun: un café noir."
        },
        "id": "fr11_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Le jardin est vert et la maison est blanche",
        "replays": 2,
        "target_answer": "Le jardin est vert et la maison est blanche",
        "meaning": "The garden is green and the house is white",
        "cues": [
          "masculine clause: Le jardin est vert",
          "feminine clause: et la maison est blanche"
        ],
        "explanation": "vert has a silent t; blanche wakes up as /ʃ/.",
        "affirmation": "You contrasted masculine vert and feminine blanche cleanly.",
        "id": "fr11_e5"
      }
    ],
    "summary": {
      "outcome": "Agree adjectives in gender and number, hear the consonant awakened by feminine -e, and place colors after the noun.",
      "use_example": {
        "german": "Un café noir à la table rouge.",
        "english": "A black coffee at the red table."
      },
      "takeaway": "Feminine -e wakes the sleeping final consonant, and colors always paint the noun from behind.",
      "curiosity_teaser": "Up next on Le Pont ([1101] The e and the s): see how Adjectives & the Silent -s leads directly into The e and the s."
    },
    "twist": {
      "prompt": "Ungraded — 'The red table is small':",
      "target_answer": "La table rouge est petite",
      "word_bank": [
        "La",
        "table",
        "rouge",
        "est",
        "petite",
        "petit",
        "Le"
      ],
      "explanation": "rouge already ends in -e in both genders; petite adds -e to agree with la table."
    },
    "foreshadow": {
      "line": "Having mastered Adjectives & the Silent -s, look ahead to Topic 12 (The Near Future), where this machinery expands into the next dimension of French thought.",
      "resolvedIn": 12
    },
    "payoff": {
      "ofLesson": 10,
      "text": "The foundation from Topic 10 (avoir & the H It Lost) now pays off directly inside Adjectives & the Silent -s: every sentence here builds on that earlier step."
    }
  },
  {
    "id": 1101,
    "slug": "sprig-1101",
    "title": "The e and the s",
    "subtitle": "Feminine -e wakes the sleeping final consonant (grand → grande); plural -s stays silent.",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "grand",
      "petit",
      "vert",
      "blanc",
      "content",
      "bon",
      "maison",
      "jardin"
    ],
    "table_word_ids": [
      "grand",
      "petit",
      "vert",
      "blanc",
      "content"
    ],
    "hook": {
      "title": "The Consonant That Sleeps in the Masculine and Wakes in the Feminine",
      "content": "Adding feminine -e wakes up the sleeping final consonant of the masculine adjective: grand (/ɡʁɑ̃/) → grande (/ɡʁɑ̃d/), petit (/pəti/) → petite (/pətit/), vert (/vɛʁ/) → verte (/vɛʁt/), content (/kɔ̃tɑ̃/) → contente (/kɔ̃tɑ̃t/), blanc (/blɑ̃/) → blanche (/blɑ̃ʃ/). Meanwhile, plural -s stays 100% silent!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Four Written Forms, Only Two Spoken Sounds",
          "content": "Across grand, grands, grande, grandes, singular and plural sound identical in each gender (/ɡʁɑ̃/ for masculine, /ɡʁɑ̃d/ for feminine)!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Feminine -e Wakes the Consonant; Plural -s Stays Silent",
      "content": "Match adjective endings to the noun's gender and number.",
      "linguist_note": "Plural -s in French nouns and adjectives is purely orthographic except in prevocalic liaison.",
      "trap_note": "Don't pronounce the final -s on plural adjectives like grands or petites!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each masculine adjective with its feminine twin:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "Il est grand (/ɡʁɑ̃/)",
            "german": "Elle est grande (/ɡʁɑ̃d/)"
          },
          {
            "id": "p2",
            "english": "Il est petit (/pəti/)",
            "german": "Elle est petite (/pətit/)"
          },
          {
            "id": "p3",
            "english": "Il est content (/kɔ̃tɑ̃/)",
            "german": "Elle est contente (/kɔ̃tɑ̃t/)"
          },
          {
            "id": "p4",
            "english": "Le jardin est vert (/vɛʁ/)",
            "german": "La table est verte (/vɛʁt/)"
          },
          {
            "id": "p5",
            "english": "Le mur est blanc (/blɑ̃/)",
            "german": "La maison est blanche (/blɑ̃ʃ/)"
          }
        ],
        "target_answer": "Elle est grande (/ɡʁɑ̃d/), Elle est petite (/pətit/), Elle est contente (/kɔ̃tɑ̃t/), La table est verte (/vɛʁt/), La maison est blanche (/blɑ̃ʃ/)",
        "meaning": "Il est grand (/ɡʁɑ̃/), Il est petit (/pəti/), Il est content (/kɔ̃tɑ̃/), Le jardin est vert (/vɛʁ/), Le mur est blanc (/blɑ̃/)",
        "explanation": "Feminine -e wakes the d, t, or turns -c into -che.",
        "id": "fr1101_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How many different pronunciations exist across the four written forms 'petit, petits, petite, petites'?",
        "options": [
          "Two (/pəti/ for m.sg/pl, and /pətit/ for f.sg/pl)",
          "Four (every form sounds different)",
          "One (all four sound identical)"
        ],
        "target_answer": "Two (/pəti/ for m.sg/pl, and /pətit/ for f.sg/pl)",
        "meaning": "Plural -s is silent, so singular and plural sound identical in each gender!",
        "explanation": "Only the feminine -e changes the pronunciation.",
        "id": "fr1101_e2"
      },
      {
        "type": "derive",
        "prompt": "Write the feminine singular of 'blanc' ('white') to describe 'la maison':",
        "english_hint": "blanc → blan...",
        "target_answer": "blanche",
        "meaning": "white (feminine)",
        "explanation": "La maison blanche (/blɑ̃ʃ/).",
        "id": "fr1101_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "she is very happy and he is very tall",
        "cues": [
          "She is very happy → Elle est très contente",
          "and he is very tall → et il est très grand"
        ],
        "idea_parts": [
          "feminine clause → Elle est très contente",
          "masculine clause → et il est très grand"
        ],
        "target_answer": "Elle est très contente et il est très grand",
        "meaning": "She is very happy and he is very tall",
        "word_bank": [
          "Elle",
          "est",
          "très",
          "contente",
          "et",
          "il",
          "est",
          "très",
          "grand",
          "content",
          "grande"
        ],
        "explanation": "Elle takes feminine contente; il takes masculine grand.",
        "diagnosis": {
          "slip": "swapped gender endings",
          "cue": "Match contente to Elle and grand to il."
        },
        "id": "fr1101_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Les maisons blanches sont très grandes",
        "replays": 2,
        "target_answer": "Les maisons blanches sont très grandes",
        "meaning": "The white houses are very big",
        "cues": [
          "Les maisons blanches",
          "sont très grandes"
        ],
        "explanation": "Both blanches and grandes carry feminine -e plus plural -s.",
        "affirmation": "You wrote both feminine plural endings (-es) on blanches and grandes!",
        "id": "fr1101_e5"
      }
    ],
    "summary": {
      "outcome": "Produce masculine, feminine, and plural adjective forms while keeping plural -s silent.",
      "use_example": {
        "german": "Les jardins sont verts et les maisons sont blanches.",
        "english": "The gardens are green and the houses are white."
      },
      "takeaway": "Four written forms (grand, grands, grande, grandes), only two spoken sounds (/ɡʁɑ̃/ and /ɡʁɑ̃d/).",
      "curiosity_teaser": "Up next on Le Pont ([1102] Color & Size Gym): see how The e and the s leads directly into Color & Size Gym."
    }
  },
  {
    "id": 1102,
    "slug": "sprig-1102",
    "title": "Color & Size Gym",
    "subtitle": "Le jardin vert, la maison blanche — adjective placement after the noun.",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "vert",
      "blanc",
      "bleu",
      "rouge",
      "noir",
      "jaune",
      "grand",
      "petit",
      "jardin",
      "maison",
      "table"
    ],
    "table_word_ids": [
      "vert",
      "blanc",
      "bleu",
      "rouge",
      "noir"
    ],
    "hook": {
      "title": "Painting Nouns From Behind: Colors After the Noun",
      "content": "Color adjectives sit AFTER the noun they paint (un jardin vert, un café noir), while size adjectives (grand, petit) step IN FRONT of the noun — flanking it like bookends: un petit café noir ('a small black coffee'), un grand jardin vert ('a big green garden')!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why rouge and jaune are gender-free in the singular",
          "content": "Because rouge and jaune already end in -e, they never change spelling between masculine and feminine singular!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Size in Front (BAGS) + Color in Back",
      "content": "Flank the noun when combining size and color.",
      "linguist_note": "French splits modifiers into pre-nominal evaluative/size adjectives and post-nominal color adjectives.",
      "trap_note": "Never stack both size and color before the noun (*un petit noir café) — split them around the noun: un petit café noir!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English noun phrase with its French bookend order:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "a small black coffee",
            "german": "un petit café noir"
          },
          {
            "id": "p2",
            "english": "a big green garden",
            "german": "un grand jardin vert"
          },
          {
            "id": "p3",
            "english": "a small red table",
            "german": "une petite table rouge"
          },
          {
            "id": "p4",
            "english": "a big white house",
            "german": "une grande maison blanche"
          },
          {
            "id": "p5",
            "english": "the yellow flower",
            "german": "la fleur jaune"
          }
        ],
        "target_answer": "un petit café noir, un grand jardin vert, une petite table rouge, une grande maison blanche, la fleur jaune",
        "meaning": "a small black coffee, a big green garden, a small red table, a big white house, the yellow flower",
        "explanation": "Size precedes the noun; color follows the noun.",
        "id": "fr1102_e1"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the word-for-word French order of 'Un petit café noir'?",
        "german": "Un petit café noir",
        "natural": "A small black coffee",
        "options": [
          "A small black coffee",
          "A small coffee black",
          "A coffee small black"
        ],
        "target_answer": "A small coffee black",
        "meaning": "Literal structure: A small coffee black",
        "explanation": "petit (Size) goes before café; noir (Color) goes after café.",
        "id": "fr1102_e2"
      },
      {
        "type": "shift_select",
        "prompt": "Which color adjective below does NOT change spelling between masculine and feminine?",
        "options": [
          "rouge (and jaune)",
          "blanc",
          "vert"
        ],
        "target_answer": "rouge (and jaune)",
        "meaning": "Already ends in -e in the masculine!",
        "explanation": "un manteau rouge / une robe rouge — identical!",
        "id": "fr1102_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "I want a small black coffee",
        "cues": [
          "I want → Je veux",
          "a small coffee black → un petit café noir"
        ],
        "idea_parts": [
          "verb → Je veux",
          "size + noun + color → un petit café noir"
        ],
        "target_answer": "Je veux un petit café noir",
        "meaning": "I want a small black coffee",
        "word_bank": [
          "Je",
          "veux",
          "un",
          "petit",
          "café",
          "noir",
          "noire",
          "la"
        ],
        "explanation": "petit stands before café and noir stands after it.",
        "diagnosis": {
          "slip": "put noir before café",
          "cue": "Flank café with petit in front and noir in back: un petit café noir."
        },
        "id": "fr1102_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "C'est un grand jardin vert",
        "replays": 2,
        "target_answer": "C'est un grand jardin vert",
        "meaning": "It is a big green garden",
        "cues": [
          "C'est",
          "un grand jardin vert"
        ],
        "explanation": "grand precedes jardin; vert follows jardin.",
        "affirmation": "You flanked jardin with grand and vert cleanly.",
        "id": "fr1102_e5"
      }
    ],
    "summary": {
      "outcome": "Position color adjectives after the noun and flank nouns with BAGS size adjectives in front and colors in back.",
      "use_example": {
        "german": "Elle habite dans une petite maison jaune.",
        "english": "She lives in a small yellow house."
      },
      "takeaway": "Size in front, color in back: un petit café noir.",
      "curiosity_teaser": "Up next on Le Pont ([1103] BAGS: Adjectives Before the Noun): see how Color & Size Gym leads directly into BAGS: Adjectives Before the Noun."
    }
  },
  {
    "id": 1103,
    "slug": "sprig-1103",
    "title": "BAGS: Adjectives Before the Noun",
    "subtitle": "Beauty, Age, Goodness, Size (beau, jeune, bon, petit, grand, nouveau) — the high-frequency rebels that step in front.",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "beau",
      "joli",
      "jeune",
      "vieux",
      "bon",
      "petit",
      "grand",
      "nouveau",
      "ville",
      "hôtel",
      "restaurant"
    ],
    "table_word_ids": [
      "beau",
      "joli",
      "jeune",
      "vieux",
      "bon"
    ],
    "hook": {
      "title": "Why Short Everyday Adjectives Step in Front: BAGS",
      "content": "Colors and specific descriptions follow the noun (un café noir). Only one small club of short, everyday adjectives steps IN FRONT of the noun — remembered by BAGS: Beauty (beau, joli), Age (jeune, vieux, nouveau), Goodness (bon, mauvais), and Size (grand, petit)!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why beau, nouveau, and vieux wear an -l coat before masculine vowels",
          "content": "Before a masculine noun starting with a vowel or mute H (ami, homme, hôtel), beau, nouveau, and vieux use bel, nouvel, vieil so the final /l/ links smoothly: un bel hôtel, un nouvel ami, un vieil homme!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "BAGS in Front, Colors in Back",
      "content": "Put BAGS between the article and the noun (une belle ville, un bon restaurant), and flank the noun when combining BAGS + color (une petite maison blanche).",
      "linguist_note": "Pre-nominal placement is restricted to a closed class of short evaluative adjectives.",
      "trap_note": "Never write *un beau hôtel — before a masculine vowel or mute H, use bel, nouvel, vieil (un bel hôtel)!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each BAGS adjective with its feminine form and prevocalic masculine form:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "beau → belle (bel before m. vowel)",
            "german": "Beauty: beautiful / handsome"
          },
          {
            "id": "p2",
            "english": "nouveau → nouvelle (nouvel before m. vowel)",
            "german": "Age: new"
          },
          {
            "id": "p3",
            "english": "vieux → vieille (vieil before m. vowel)",
            "german": "Age: old"
          },
          {
            "id": "p4",
            "english": "joli → jolie",
            "german": "Beauty: pretty"
          },
          {
            "id": "p5",
            "english": "jeune → jeune (invariable)",
            "german": "Age: young"
          }
        ],
        "target_answer": "Beauty: beautiful / handsome, Age: new, Age: old, Beauty: pretty, Age: young",
        "meaning": "beau → belle (bel before m. vowel), nouveau → nouvelle (nouvel before m. vowel), vieux → vieille (vieil before m. vowel), joli → jolie, jeune → jeune (invariable)",
        "explanation": "bel/belle, nouvel/nouvelle, and vieil/vieille sound identical in the mouth!",
        "id": "fr1103_e1"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the word-for-word French order of 'Une petite maison blanche'?",
        "german": "Une petite maison blanche",
        "natural": "A small white house",
        "options": [
          "A small white house",
          "A small house white",
          "A house small white"
        ],
        "target_answer": "A small house white",
        "meaning": "Literal structure: A small house white",
        "explanation": "Size (petite, BAGS) steps in front of maison, while color (blanche) stays behind it!",
        "id": "fr1103_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'a beautiful hotel' (l'hôtel is masculine and starts with a mute H)?",
        "options": [
          "un bel hôtel",
          "un beau hôtel",
          "un hôtel beau"
        ],
        "target_answer": "un bel hôtel",
        "meaning": "a beautiful hotel",
        "explanation": "Before a masculine vowel/mute-H noun, beau becomes bel: un bel hôtel!",
        "id": "fr1103_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "it is a beautiful city and a good restaurant",
        "cues": [
          "It is a beautiful city → C'est une belle ville",
          "and a good restaurant → et un bon restaurant"
        ],
        "idea_parts": [
          "first noun phrase → C'est une belle ville",
          "second noun phrase → et un bon restaurant"
        ],
        "target_answer": "C'est une belle ville et un bon restaurant",
        "meaning": "It is a beautiful city and a good restaurant",
        "word_bank": [
          "C'est",
          "une",
          "belle",
          "ville",
          "et",
          "un",
          "bon",
          "restaurant",
          "beau",
          "la"
        ],
        "explanation": "Both belle and bon belong to BAGS and precede their nouns.",
        "diagnosis": {
          "slip": "placed belle or bon after the noun",
          "cue": "BAGS adjectives precede the noun: une belle ville, un bon restaurant."
        },
        "id": "fr1103_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "C'est un nouveau restaurant dans une jolie ville",
        "replays": 2,
        "target_answer": "C'est un nouveau restaurant dans une jolie ville",
        "meaning": "It's a new restaurant in a pretty town",
        "cues": [
          "un nouveau restaurant",
          "dans une jolie ville"
        ],
        "explanation": "Both nouveau (Age) and jolie (Beauty) step in front of their nouns.",
        "affirmation": "You placed both nouveau and jolie before their nouns.",
        "id": "fr1103_e5"
      }
    ],
    "summary": {
      "outcome": "Place BAGS adjectives before the noun and use bel/nouvel/vieil before masculine vowels.",
      "use_example": {
        "german": "Un petit café noir dans un bel hôtel.",
        "english": "A small black coffee in a beautiful hotel."
      },
      "takeaway": "BAGS steps in front, colors stay in back — and beau/nouveau/vieux wear -l before a masculine vowel.",
      "curiosity_teaser": "Up next on Le Pont ([12] The Near Future): see how BAGS: Adjectives Before the Noun leads directly into The Near Future."
    }
  },
  {
    "id": 12,
    "slug": "the-near-future",
    "title": "The Near Future",
    "subtitle": "aller + infinitive: je vais visiter, tu vas voir, on va partir — and aller is English 'amble'",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "aller",
      "je_vais",
      "vas",
      "va",
      "allons",
      "allez",
      "on",
      "demain",
      "ce_soir",
      "voir",
      "faire"
    ],
    "table_word_ids": [
      "aller",
      "je_vais",
      "vas",
      "va",
      "allons"
    ],
    "hook": {
      "title": "How 'I Am Going to...' Gives You the Whole Future Tense",
      "content": "Think about how you talk about tonight or tomorrow in English: nine times out of ten, you don't say 'I shall visit' — you say 'I'm going to visit'. French does the exact same thing! Take the present tense of aller ('to go', cousin of English amble and ambulance) and drop ANY infinitive right behind it: je vais visiter ('I'm going to visit'), tu vas voir ('you're going to see'), on va célébrer ce soir ('we're going to celebrate tonight').",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why aller changes stems from vais to allons",
          "content": "aller is a team-up of three Latin verbs: je vais / tu vas / il va come from Latin vādere ('to wade/advance'), while aller / nous allons / vous allez come from Latin ambulāre ('to walk/amble')!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "vais, vas, va, allons, allez + Parked Infinitive",
      "content": "Just like je veux + infinitive in Topic 3, the near future (le futur proche) conjugates only the first verb (je vais, tu vas, il/elle/on va, nous allons, vous allez) and leaves the second verb parked in its dictionary form. And when you negate the near future, the ne...pas sandwich hugs ONLY the going-verb: Je ne vais pas partir ('I am not going to leave').",
      "linguist_note": "Romance periphrastic future with 'go' + bare infinitive parallels English 'going to' grammaticalization, without needing a preposition like 'to' between the verbs.",
      "trap_note": "The shortcut your mind will offer: inserting à ('to') between je vais and the infinitive (*je vais à visiter) by copying English 'going TO visit'. French chains them bare: je vais visiter!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each form of aller with its meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I am going",
            "german": "je vais"
          },
          {
            "id": "p2",
            "english": "you are going (informal)",
            "german": "tu vas"
          },
          {
            "id": "p3",
            "english": "he / she / we (informal) are going",
            "german": "il / elle / on va"
          },
          {
            "id": "p4",
            "english": "we are going / let's go!",
            "german": "nous allons"
          },
          {
            "id": "p5",
            "english": "you are going (polite/plural)",
            "german": "vous allez"
          }
        ],
        "target_answer": "je vais, tu vas, il / elle / on va, nous allons, vous allez",
        "meaning": "I am going, you are going (informal), he / she / we (informal) are going, we are going / let's go!, you are going (polite/plural)",
        "explanation": "vais, vas, va come from Latin vādere; allons, allez come from ambulāre.",
        "id": "fr12_e1"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the literal word-for-word structure of 'On va célébrer ce soir'?",
        "german": "On va célébrer ce soir",
        "natural": "We're going to celebrate tonight",
        "options": [
          "We're going to celebrate tonight",
          "One goes celebrate this evening",
          "We go to celebrating tonight"
        ],
        "target_answer": "One goes celebrate this evening",
        "meaning": "Literal structure: One goes celebrate this evening",
        "explanation": "on is literally 'one' (used as everyday 'we'), and va célébrer joins with no 'to'.",
        "id": "fr12_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'I am not going to leave' in French?",
        "options": [
          "Je ne vais pas partir",
          "Je vais ne pas partir",
          "Je ne vais partir pas"
        ],
        "target_answer": "Je ne vais pas partir",
        "meaning": "I am not going to leave",
        "explanation": "The ne...pas sandwich wraps the conjugated auxiliary vais; the infinitive partir waits outside.",
        "id": "fr12_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "tomorrow I am going to visit Paris",
        "cues": [
          "Tomorrow → Demain",
          "I am going to visit Paris → je vais visiter Paris (no preposition before visiter)"
        ],
        "idea_parts": [
          "time opener → Demain",
          "near-future chain → je vais visiter Paris"
        ],
        "target_answer": "Demain, je vais visiter Paris",
        "meaning": "Tomorrow, I am going to visit Paris",
        "word_bank": [
          "Demain",
          "je",
          "vais",
          "visiter",
          "Paris",
          "à",
          "vas"
        ],
        "explanation": "Demain, je vais visiter Paris chains vais directly to visiter.",
        "diagnosis": {
          "slip": "inserted à before visiter",
          "cue": "aller + infinitive needs no preposition between them."
        },
        "id": "fr12_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Qu'est-ce que tu vas faire ce soir",
        "replays": 2,
        "target_answer": "Qu'est-ce que tu vas faire ce soir",
        "meaning": "What are you going to do tonight?",
        "cues": [
          "What: Qu'est-ce que",
          "near future: tu vas faire (do/make)",
          "tonight: ce soir"
        ],
        "explanation": "Qu'est-ce que ('what is it that') + tu vas faire ce soir.",
        "affirmation": "You heard Qu'est-ce que and tu vas faire ce soir clearly.",
        "id": "fr12_e5"
      }
    ],
    "summary": {
      "outcome": "Express any future plan using aller (vais, vas, va, allons, allez) + bare infinitive, and negate it by wrapping the auxiliary.",
      "use_example": {
        "german": "On va voir un film ce soir.",
        "english": "We're going to see a film tonight."
      },
      "takeaway": "aller + bare infinitive gives you the entire future tense today — with zero new endings to memorize.",
      "curiosity_teaser": "Up next on Le Pont ([1201] Amble & Go): see how The Near Future leads directly into Amble & Go."
    },
    "twist": {
      "prompt": "Ungraded — 'You are going to see my friend tomorrow' (informal tu):",
      "target_answer": "Tu vas voir mon ami demain",
      "word_bank": [
        "Tu",
        "vas",
        "voir",
        "mon",
        "ami",
        "demain",
        "vais",
        "la"
      ],
      "explanation": "tu vas + voir ('to see') + mon ami + demain."
    },
    "foreshadow": {
      "line": "Having mastered The Near Future, look ahead to Topic 13 (à, de, chez), where this machinery expands into the next dimension of French thought.",
      "resolvedIn": 13
    },
    "payoff": {
      "ofLesson": 11,
      "text": "The foundation from Topic 11 (Adjectives & the Silent -s) now pays off directly inside The Near Future: every sentence here builds on that earlier step."
    }
  },
  {
    "id": 1201,
    "slug": "sprig-1201",
    "title": "Amble & Go",
    "subtitle": "The ambulāre etymology; vais, vas, va, allons, allez in motion drills.",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "aller",
      "je_vais",
      "vas",
      "va",
      "allons",
      "allez",
      "on",
      "où",
      "gare",
      "train"
    ],
    "table_word_ids": [
      "aller",
      "je_vais",
      "vas",
      "va",
      "allons"
    ],
    "hook": {
      "title": "Why aller Has Two Ancient Families Inside One Verb",
      "content": "Singular je vais (/vɛ/), tu vas (/va/), il/elle/on va (/va/) come from Latin vādere ('to advance'), while aller, nous allons (/alɔ̃/), and vous allez (/ale/) come from Latin ambulāre ('to walk/amble', root of English amble and ambulance)!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why 'ambulance' is a cousin of aller",
          "content": "A field hospital that walked along with the French army was called a 'walking hospital' (hôpital ambulant, from ambulāre)!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Going Somewhere: aller + au / à la / à l' / chez",
      "content": "Use vais, vas, va, allons, allez with destinations.",
      "linguist_note": "Suppletion in Romance 'go' (vādere + ambulāre) is shared across French and Italian.",
      "trap_note": "Don't say *je va or *tu vais: je takes vais (-ai-), while tu vas and il/on va both sound like /va/!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each subject with its present-tense form of aller:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "je (I go)",
            "german": "vais (/vɛ/)"
          },
          {
            "id": "p2",
            "english": "tu (you go, informal)",
            "german": "vas (/va/)"
          },
          {
            "id": "p3",
            "english": "il / elle / on (goes / we go)",
            "german": "va (/va/)"
          },
          {
            "id": "p4",
            "english": "nous (we go — ambulāre)",
            "german": "allons (/alɔ̃/)"
          },
          {
            "id": "p5",
            "english": "vous (you go — ambulāre)",
            "german": "allez (/ale/)"
          }
        ],
        "target_answer": "vais (/vɛ/), vas (/va/), va (/va/), allons (/alɔ̃/), allez (/ale/)",
        "meaning": "je (I go), tu (you go, informal), il / elle / on (goes / we go), nous (we go — ambulāre), vous (you go — ambulāre)",
        "explanation": "Singular uses the v- stem; plural uses the regular all- stem.",
        "id": "fr1201_e1"
      },
      {
        "type": "reverse_cognate",
        "prompt": "The all- stem of French aller / allons (from Latin ambulāre 'to walk') hides inside which English word for a leisurely walk?",
        "target_answer": "amble",
        "meaning": "amble / ambulance ↔ aller",
        "explanation": "Latin ambulāre gave English amble/ambulance and French aller.",
        "id": "fr1201_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How do you ask a friend 'Where are you going?'",
        "options": [
          "Où est-ce que tu vas",
          "Où est-ce que tu vais",
          "Où est-ce que tu aller"
        ],
        "target_answer": "Où est-ce que tu vas",
        "meaning": "Where are you going?",
        "explanation": "tu pairs with vas (/va/).",
        "id": "fr1201_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "we are going to the train station (use Nous allons)",
        "cues": [
          "We are going → Nous allons",
          "to the train station → à la gare"
        ],
        "idea_parts": [
          "subject + verb → Nous allons",
          "destination → à la gare"
        ],
        "target_answer": "Nous allons à la gare",
        "meaning": "We are going to the train station",
        "word_bank": [
          "Nous",
          "allons",
          "à",
          "la",
          "gare",
          "au",
          "allez"
        ],
        "explanation": "la gare is feminine, so à la gare does not fuse.",
        "diagnosis": {
          "slip": "used au gare or allez",
          "cue": "Use Nous allons à la gare."
        },
        "id": "fr1201_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Je vais au cinéma avec mon ami",
        "replays": 2,
        "target_answer": "Je vais au cinéma avec mon ami",
        "meaning": "I am going to the cinema with my friend",
        "cues": [
          "Je vais au cinéma",
          "avec mon ami"
        ],
        "explanation": "à + le cinéma fuses into au cinéma.",
        "affirmation": "You wrote Je vais au cinéma avec mon ami cleanly.",
        "id": "fr1201_e5"
      }
    ],
    "summary": {
      "outcome": "Conjugate aller across all persons (vais, vas, va, allons, allez) and pair it with destinations.",
      "use_example": {
        "german": "Où est-ce que vous allez ? — Nous allons à la gare.",
        "english": "Where are you going? — We are going to the station."
      },
      "takeaway": "je vais (/vɛ/), tu vas (/va/), il/on va (/va/), nous allons, vous allez.",
      "curiosity_teaser": "Up next on Le Pont ([1202] Future Gym): see how Amble & Go leads directly into Future Gym."
    }
  },
  {
    "id": 1202,
    "slug": "sprig-1202",
    "title": "Future Gym",
    "subtitle": "Near-future sentences chaining je vais / tu vas / on va with converted verbs.",
    "phase": 2,
    "shift_categories": [
      "ation"
    ],
    "word_ids": [
      "aller",
      "je_vais",
      "vas",
      "va",
      "allons",
      "allez",
      "confirmer",
      "organiser",
      "visiter",
      "préparer",
      "demain",
      "ce_soir"
    ],
    "table_word_ids": [
      "aller",
      "je_vais",
      "vas",
      "va",
      "allons"
    ],
    "hook": {
      "title": "Chaining Near-Future Plans With Your -ation Verbs",
      "content": "Combine Topic 12's near future (aller) with Topic 3's -ation verb engine (confirmer, organiser, visiter, préparer, réserver, célébrer): only aller conjugates; the second verb stays parked in its bare -er infinitive form!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Negating the near future: wrap aller, leave the infinitive outside",
          "content": "In On ne va pas attendre ('We are not going to wait'), ne...pas wraps only the conjugated auxiliary va!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "aller (Conjugated) + Infinitive (Parked)",
      "content": "Run the near-future formula across positive, negative, and question sentences.",
      "linguist_note": "Periphrastic future with aller + infinitive is the default spoken future for planned events.",
      "trap_note": "Never put pas after the infinitive (*Je ne vais partir pas) — pas hugs the form of aller (Je ne vais pas partir)!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each near-future plan with its French sentence:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I am going to prepare the coffee",
            "german": "Je vais préparer le café"
          },
          {
            "id": "p2",
            "english": "Are you going to confirm?",
            "german": "Tu vas confirmer ?"
          },
          {
            "id": "p3",
            "english": "We (on) are going to organize the dinner",
            "german": "On va organiser le dîner"
          },
          {
            "id": "p4",
            "english": "We (nous) are going to visit the city",
            "german": "Nous allons visiter la ville"
          },
          {
            "id": "p5",
            "english": "Are you (polite) going to reserve?",
            "german": "Vous allez réserver ?"
          }
        ],
        "target_answer": "Je vais préparer le café, Tu vas confirmer ?, On va organiser le dîner, Nous allons visiter la ville, Vous allez réserver ?",
        "meaning": "I am going to prepare the coffee, Are you going to confirm?, We (on) are going to organize the dinner, We (nous) are going to visit the city, Are you (polite) going to reserve?",
        "explanation": "Every person of aller chains directly to the bare infinitive.",
        "id": "fr1202_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Negate 'On va attendre' ('We are going to wait'):",
        "options": [
          "On ne va pas attendre",
          "On va ne pas attendre",
          "On ne va attendre pas"
        ],
        "target_answer": "On ne va pas attendre",
        "meaning": "We are not going to wait",
        "explanation": "ne...pas wraps the conjugated auxiliary va; attendre waits outside.",
        "id": "fr1202_e2"
      },
      {
        "type": "derive",
        "prompt": "Build the near future: 'She is going to celebrate' (Elle + va + celebrate):",
        "english_hint": "célébration → célébrer",
        "target_answer": "Elle va célébrer",
        "meaning": "She is going to celebrate",
        "explanation": "Elle va + bare infinitive célébrer.",
        "id": "fr1202_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "I am going to prepare the reservation tomorrow",
        "cues": [
          "I am going to prepare → Je vais préparer",
          "the reservation tomorrow → la réservation demain"
        ],
        "idea_parts": [
          "near future → Je vais préparer",
          "object + time → la réservation demain"
        ],
        "target_answer": "Je vais préparer la réservation demain",
        "meaning": "I am going to prepare the reservation tomorrow",
        "word_bank": [
          "Je",
          "vais",
          "préparer",
          "la",
          "réservation",
          "demain",
          "vas",
          "le"
        ],
        "explanation": "préparer stays in its infinitive form after Je vais.",
        "diagnosis": {
          "slip": "conjugated préparer",
          "cue": "Keep préparer in the infinitive after Je vais."
        },
        "id": "fr1202_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Vous allez visiter l'université demain",
        "replays": 2,
        "target_answer": "Vous allez visiter l'université demain",
        "meaning": "You are going to visit the university tomorrow",
        "cues": [
          "Vous allez visiter",
          "l'université demain"
        ],
        "explanation": "allez (/ale/) and visiter (/vizite/) both end in /e/.",
        "affirmation": "You distinguished conjugated allez (-ez) from infinitive visiter (-er)!",
        "id": "fr1202_e5"
      }
    ],
    "summary": {
      "outcome": "Chain aller across all persons with converted -er/-ir/-re infinitives in positive, negative, and question sentences.",
      "use_example": {
        "german": "Ce soir, on va préparer un bon dîner et célébrer.",
        "english": "Tonight, we're going to prepare a good dinner and celebrate."
      },
      "takeaway": "Conjugate aller, park the infinitive, and hug aller with ne...pas when negating.",
      "curiosity_teaser": "Up next on Le Pont ([13] à, de, chez): see how Future Gym leads directly into à, de, chez."
    }
  },
  {
    "id": 13,
    "slug": "a-de-chez",
    "title": "à, de, chez",
    "subtitle": "The two master prepositions (à and de), their mandatory fusions (au, du, des), and chez ('at the home/place of')",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "à",
      "de",
      "au",
      "du",
      "des",
      "chez",
      "avec",
      "dans",
      "pour",
      "sans",
      "vin",
      "fromage",
      "soupe"
    ],
    "table_word_ids": [
      "à",
      "de",
      "au",
      "du",
      "des"
    ],
    "hook": {
      "title": "Two Little Words That Run Half of French Grammar",
      "content": "Almost every connection between nouns in French is handled by two tiny prepositions: à ('to, at, in') and de ('of, from, about'). Whenever either of them bumps into masculine le or plural les, French refuses to say them separately — they fuse on impact! à + le becomes au (/o/, 'to the / at the'). de + le becomes du (/dy/, 'of the / from the / some'). And de + les becomes des (/de/, 'of the / some').",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why chez has no single-word English translation",
          "content": "Latin casa ('cottage, house') wore down into the French preposition chez when unstressed before a person's name: chez Marie ('at/to Marie's place'), chez moi ('at my home'), chez le docteur ('at the doctor's office').",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Mandatory Fusions: au, du, des — Never *à le or *de le",
      "content": "With feminine la or vowel-initial l', nothing fuses: je vais à la gare, je viens de l'hôtel. But with masculine le, fusion is mandatory law: je vais au café (never *à le café) and je viens du restaurant (never *de le restaurant). And when you visit a person rather than a building, French uses chez: je vais chez mon ami ('I'm going to my friend's place').",
      "linguist_note": "Old French vocalized preconsonantal L into U: a + le → al → au; de + le → del → du; de + les → dels → des.",
      "trap_note": "The shortcut your mind will offer: saying *à le café or *de le train word-for-word. Masculine le ALWAYS fuses with à and de into au and du!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each preposition fusion or phrase with its meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "à + le (to the / at the, m.)",
            "german": "au"
          },
          {
            "id": "p2",
            "english": "de + le (of the / from the / some, m.)",
            "german": "du"
          },
          {
            "id": "p3",
            "english": "de + les (of the / some, pl.)",
            "german": "des"
          },
          {
            "id": "p4",
            "english": "at / to the home or office of",
            "german": "chez"
          },
          {
            "id": "p5",
            "english": "without (as in sans-serif)",
            "german": "sans"
          }
        ],
        "target_answer": "au, du, des, chez, sans",
        "meaning": "à + le (to the / at the, m.), de + le (of the / from the / some, m.), de + les (of the / some, pl.), at / to the home or office of, without (as in sans-serif)",
        "explanation": "au, du, and des are mandatory contractions; chez is used before people and pronouns.",
        "id": "fr13_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'I am going to the restaurant' (le restaurant is masculine)?",
        "options": [
          "Je vais au restaurant",
          "Je vais à le restaurant",
          "Je vais chez le restaurant"
        ],
        "target_answer": "Je vais au restaurant",
        "meaning": "I am going to the restaurant",
        "explanation": "à + le restaurant fuses mandatorily into au restaurant.",
        "id": "fr13_e2"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the literal structure of 'Je suis chez le docteur'?",
        "german": "Je suis chez le docteur",
        "natural": "I am at the doctor's office",
        "options": [
          "I am at the doctor's office",
          "I am at-the-house-of the doctor",
          "I am to the doctor"
        ],
        "target_answer": "I am at-the-house-of the doctor",
        "meaning": "Literal structure: I am at-the-house-of the doctor",
        "explanation": "chez (from Latin casa) means 'at the home/practice of' a person.",
        "id": "fr13_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "I am going to my friend's place tonight",
        "cues": [
          "I am going → Je vais",
          "to my friend's place → chez mon ami (person takes chez) + tonight → ce soir"
        ],
        "idea_parts": [
          "motion → Je vais",
          "person-destination → chez mon ami",
          "time → ce soir"
        ],
        "target_answer": "Je vais chez mon ami ce soir",
        "meaning": "I'm going to my friend's place tonight",
        "word_bank": [
          "Je",
          "vais",
          "chez",
          "mon",
          "ami",
          "ce",
          "soir",
          "au",
          "la"
        ],
        "explanation": "With a person (mon ami), French uses chez rather than à/au.",
        "diagnosis": {
          "slip": "used au instead of chez before a person",
          "cue": "Use chez before a person or pronoun: chez mon ami."
        },
        "id": "fr13_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Un café sans sucre, s'il vous plaît",
        "replays": 2,
        "target_answer": "Un café sans sucre, s'il vous plaît",
        "meaning": "A coffee without sugar, please",
        "cues": [
          "Un café",
          "without sugar: sans sucre",
          "polite tag: s'il vous plaît"
        ],
        "explanation": "sans ('without') is the exact word English borrowed in 'sans-serif'.",
        "affirmation": "You caught sans and s'il vous plaît cleanly.",
        "id": "fr13_e5"
      }
    ],
    "summary": {
      "outcome": "Fuse à/de + le/les into au/du/des, use chez with people, and build prepositional phrases with avec, dans, pour, sans.",
      "use_example": {
        "german": "On va chez Marie ou au restaurant ?",
        "english": "Are we going to Marie's place or to the restaurant?"
      },
      "takeaway": "Buildings take au / à la; people take chez — and *à le / *de le never exist.",
      "curiosity_teaser": "Up next on Le Pont ([1301] au & du Fusions): see how à, de, chez leads directly into au & du Fusions."
    },
    "twist": {
      "prompt": "Ungraded — 'I am coming with you to the cinema' (use Je viens):",
      "target_answer": "Je viens avec toi au cinéma",
      "word_bank": [
        "Je",
        "viens",
        "avec",
        "toi",
        "au",
        "cinéma",
        "à",
        "le"
      ],
      "explanation": "avec toi ('with you', stressed pronoun) + au cinéma (à + le cinéma)."
    },
    "foreshadow": {
      "line": "Having mastered à, de, chez, look ahead to Topic 14 (Possessives Agree with the Thing), where this machinery expands into the next dimension of French thought.",
      "resolvedIn": 14
    },
    "payoff": {
      "ofLesson": 12,
      "text": "The foundation from Topic 12 (The Near Future) now pays off directly inside à, de, chez: every sentence here builds on that earlier step."
    }
  },
  {
    "id": 1301,
    "slug": "sprig-1301",
    "title": "au & du Fusions",
    "subtitle": "à + le = au, de + le = du, de + les = des: mandatory contractions as word-glue.",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "à",
      "de",
      "au",
      "du",
      "des",
      "café",
      "restaurant",
      "gare",
      "hôtel",
      "cinéma"
    ],
    "table_word_ids": [
      "à",
      "de",
      "au",
      "du",
      "des"
    ],
    "hook": {
      "title": "Why à + le and de + le Fuse on Impact",
      "content": "Masculine consonant nouns fuse mandatorily with à and de: à + le = au (/o/), de + le = du (/dy/), and plural à + les = aux, de + les = des. Meanwhile, feminine consonant nouns stay separate (à la gare, de la gare) and vowel/mute-H nouns elide (à l'hôtel, de l'hôtel)!",
      "footnotes": [
        {
          "marker": "1",
          "title": "The 3-way check: Vowel (à l'/de l'), Feminine (à la/de la), Masculine (au/du)",
          "content": "Check the first letter and gender of the noun before choosing the preposition form.",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Mandatory Fusions: au / du vs. à la / de la vs. à l' / de l'",
      "content": "Apply the 3-way check across places in town.",
      "linguist_note": "Enclitic fusion of preposition + masculine/plural definite article is mandatory in French.",
      "trap_note": "Never write *à le cinéma or *de le restaurant — always fuse into au cinéma and du restaurant!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each destination or origin with its correct French preposition + article:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "to the cinema (le cinéma, m.)",
            "german": "au cinéma"
          },
          {
            "id": "p2",
            "english": "from the train (le train, m.)",
            "german": "du train"
          },
          {
            "id": "p3",
            "english": "to the station (la gare, f.)",
            "german": "à la gare"
          },
          {
            "id": "p4",
            "english": "from the house (la maison, f.)",
            "german": "de la maison"
          },
          {
            "id": "p5",
            "english": "to the hotel (l'hôtel, mute H)",
            "german": "à l'hôtel"
          }
        ],
        "target_answer": "au cinéma, du train, à la gare, de la maison, à l'hôtel",
        "meaning": "to the cinema (le cinéma, m.), from the train (le train, m.), to the station (la gare, f.), from the house (la maison, f.), to the hotel (l'hôtel, mute H)",
        "explanation": "Masculine consonant fuses (au/du); feminine stays separate (à la/de la); vowel/mute-H elides (à l'/de l').",
        "id": "fr1301_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Complete the sentence: 'I am coming from the restaurant and going to the station' (le restaurant, la gare):",
        "options": [
          "Je viens du restaurant et je vais à la gare",
          "Je viens de le restaurant et je vais à la gare",
          "Je viens du restaurant et je vais au gare"
        ],
        "target_answer": "Je viens du restaurant et je vais à la gare",
        "meaning": "from the restaurant (du) and to the station (à la)",
        "explanation": "de + le restaurant fuses into du restaurant; feminine la gare takes à la gare.",
        "id": "fr1301_e2"
      },
      {
        "type": "derive",
        "prompt": "Fuse the preposition and article: 'to the restaurant' (à + le restaurant) →",
        "english_hint": "à + le = au",
        "target_answer": "au restaurant",
        "meaning": "to / at the restaurant",
        "explanation": "à + le restaurant → au restaurant.",
        "id": "fr1301_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "the train arrives from Paris and goes to the airport (use à l'aéroport)",
        "cues": [
          "The train arrives from Paris → Le train arrive de Paris",
          "and goes to the airport → et va à l'aéroport"
        ],
        "idea_parts": [
          "first clause → Le train arrive de Paris",
          "second clause → et va à l'aéroport"
        ],
        "target_answer": "Le train arrive de Paris et va à l'aéroport",
        "meaning": "The train arrives from Paris and goes to the airport",
        "word_bank": [
          "Le",
          "train",
          "arrive",
          "de",
          "Paris",
          "et",
          "va",
          "à",
          "l'aéroport",
          "au",
          "la"
        ],
        "explanation": "Cities take bare à/de (de Paris), and vowel-initial aéroport takes à l'.",
        "diagnosis": {
          "slip": "used au before l'aéroport",
          "cue": "Vowel-initial nouns take à l': à l'aéroport."
        },
        "id": "fr1301_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Nous allons au restaurant à côté de la gare",
        "replays": 2,
        "target_answer": "Nous allons au restaurant à côté de la gare",
        "meaning": "We are going to the restaurant next to the station",
        "cues": [
          "Nous allons au restaurant",
          "à côté de la gare"
        ],
        "explanation": "au restaurant (m. fusion) + de la gare (f. non-fusion).",
        "affirmation": "You contrasted au restaurant and de la gare accurately.",
        "id": "fr1301_e5"
      }
    ],
    "summary": {
      "outcome": "Apply the 3-way check (au/du vs. à la/de la vs. à l'/de l') across masculine, feminine, and vowel-initial nouns.",
      "use_example": {
        "german": "Je sors de l'hôtel et je vais au café en face de la gare.",
        "english": "I leave the hotel and go to the café across from the station."
      },
      "takeaway": "Vowel → à l' / de l'; Feminine → à la / de la; Masculine → au / du.",
      "curiosity_teaser": "Up next on Le Pont ([1302] Chez, the House Word): see how au & du Fusions leads directly into Chez, the House Word."
    }
  },
  {
    "id": 1302,
    "slug": "sprig-1302",
    "title": "Chez, the House Word",
    "subtitle": "chez Marie, chez le docteur, chez moi — the Latin casa preposition with no English twin.",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "chez",
      "moi",
      "toi",
      "lui",
      "elle",
      "nous",
      "vous",
      "docteur",
      "ami",
      "rester"
    ],
    "table_word_ids": [
      "chez",
      "moi",
      "toi",
      "lui",
      "elle"
    ],
    "hook": {
      "title": "Why People Take chez Where Buildings Take à",
      "content": "Before a person's name, profession, or stressed pronoun, French uses chez (from Latin casa 'house') to mean 'at/to someone's home or office': chez Marie, chez le docteur, chez moi, chez toi, chez nous!",
      "footnotes": [
        {
          "marker": "1",
          "title": "How chez covers both 'at' and 'to'",
          "content": "Je suis chez moi ('I am at home') and Je vais chez moi ('I am going home') both use bare chez!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Building → au / à la; Person or Pronoun → chez",
      "content": "Pair chez with people, professions, and stressed pronouns.",
      "linguist_note": "Unstressed proclitic use of Latin casa reduced phonetically to Old French chies → modern chez /ʃe/.",
      "trap_note": "Never say *Je vais à Marie or *à chez moi — chez already means 'at/to the home of' all by itself!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each chez phrase with its English meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "chez moi",
            "german": "at / to my home"
          },
          {
            "id": "p2",
            "english": "chez toi",
            "german": "at / to your place (informal)"
          },
          {
            "id": "p3",
            "english": "chez lui / chez elle",
            "german": "at / to his / her place"
          },
          {
            "id": "p4",
            "english": "chez nous",
            "german": "at our home / in our country"
          },
          {
            "id": "p5",
            "english": "chez le docteur",
            "german": "at / to the doctor's office"
          }
        ],
        "target_answer": "at / to my home, at / to your place (informal), at / to his / her place, at our home / in our country, at / to the doctor's office",
        "meaning": "chez moi, chez toi, chez lui / chez elle, chez nous, chez le docteur",
        "explanation": "chez pairs with stressed pronouns or people/professions.",
        "id": "fr1302_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'I am staying at home tonight'?",
        "options": [
          "Je reste chez moi ce soir",
          "Je reste à moi ce soir",
          "Je reste chez je ce soir"
        ],
        "target_answer": "Je reste chez moi ce soir",
        "meaning": "I am staying at home tonight",
        "explanation": "chez + stressed pronoun moi = 'at my home'.",
        "id": "fr1302_e2"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the literal historical meaning of 'On dîne chez Marie'?",
        "german": "On dîne chez Marie",
        "natural": "We're having dinner at Marie's",
        "options": [
          "We're having dinner at Marie's",
          "One dines at-the-house-of Marie",
          "We dine to Marie"
        ],
        "target_answer": "One dines at-the-house-of Marie",
        "meaning": "Literal structure: One dines at-the-house-of Marie",
        "explanation": "chez (from Latin casa) means 'at the house/place of'.",
        "id": "fr1302_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "are you going to the doctor's office today",
        "cues": [
          "Are you going → Tu vas",
          "to the doctor's office today → chez le docteur aujourd'hui"
        ],
        "idea_parts": [
          "subject + verb → Tu vas",
          "person-destination + time → chez le docteur aujourd'hui"
        ],
        "target_answer": "Tu vas chez le docteur aujourd'hui",
        "meaning": "Are you going to the doctor's office today?",
        "word_bank": [
          "Tu",
          "vas",
          "chez",
          "le",
          "docteur",
          "aujourd'hui",
          "au",
          "la"
        ],
        "explanation": "Because le docteur is a person, French uses chez le docteur rather than au.",
        "diagnosis": {
          "slip": "used au docteur",
          "cue": "People and professions take chez: chez le docteur."
        },
        "id": "fr1302_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Je suis chez mon ami ce soir",
        "replays": 2,
        "target_answer": "Je suis chez mon ami ce soir",
        "meaning": "I am at my friend's place tonight",
        "cues": [
          "Je suis",
          "chez mon ami ce soir"
        ],
        "explanation": "chez mon ami = 'at my friend's home'.",
        "affirmation": "You used chez mon ami cleanly.",
        "id": "fr1302_e5"
      }
    ],
    "summary": {
      "outcome": "Use chez with names, professions, and stressed pronouns for 'at/to someone's place'.",
      "use_example": {
        "german": "Tu viens chez moi ou on va chez toi ?",
        "english": "Are you coming to my place or are we going to yours?"
      },
      "takeaway": "Places take au / à la; people take chez.",
      "curiosity_teaser": "Up next on Le Pont ([1303] The Partitive: du, de la & Negative de): see how Chez, the House Word leads directly into The Partitive: du, de la & Negative de."
    }
  },
  {
    "id": 1303,
    "slug": "sprig-1303",
    "title": "The Partitive: du, de la & Negative de",
    "subtitle": "Why French says 'some bread' (du pain, de la soupe) and collapses it to bare de after negation (pas de pain).",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "du",
      "de",
      "des",
      "pain",
      "vin",
      "fromage",
      "soupe",
      "eau",
      "pas",
      "vouloir"
    ],
    "table_word_ids": [
      "du",
      "de",
      "des",
      "pain",
      "vin"
    ],
    "hook": {
      "title": "Why French Never Leaves Mass Nouns Naked: du, de la, de l', des",
      "content": "Where English says bare 'I want bread, soup, and water', French requires the Partitive Article (de + definite article = 'some'): du pain (de + le), de la soupe, de l'eau, des livres (de + les)! And when you negate the verb ('I don't want any bread'), the quantity drops to zero and all four collapse to bare de / d': Je ne veux pas de pain, Je n'ai pas d'eau!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why zero quantity collapses du / de la / des to bare de",
          "content": "After ne...pas, ne...plus, ne...jamais, or quantity words (beaucoup de, un peu de, combien de), the definite article inside du/de la/des vanishes, leaving bare de!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Positive: du / de la / de l' / des → Negative: pas de / pas d'",
      "content": "Use du (m.), de la (f.), de l' (vowel), des (pl.) in positive sentences, and collapse them to de / d' after negation.",
      "linguist_note": "French is strictly determiner-obligatory; bare nouns cannot occupy argument positions.",
      "trap_note": "Never keep du/de la/des after pas (*Je ne veux pas du pain) — collapse to pas de pain!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each positive partitive phrase with its negative 'pas de' counterpart:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "Je veux du pain (some bread, m.)",
            "german": "Je ne veux pas de pain"
          },
          {
            "id": "p2",
            "english": "Je prends de la soupe (some soup, f.)",
            "german": "Je ne prends pas de soupe"
          },
          {
            "id": "p3",
            "english": "J'ai de l'eau (some water, vowel)",
            "german": "Je n'ai pas d'eau"
          },
          {
            "id": "p4",
            "english": "J'ai des amis (some friends, pl.)",
            "german": "Je n'ai pas d'amis"
          }
        ],
        "target_answer": "Je ne veux pas de pain, Je ne prends pas de soupe, Je n'ai pas d'eau, Je n'ai pas d'amis",
        "meaning": "Je veux du pain (some bread, m.), Je prends de la soupe (some soup, f.), J'ai de l'eau (some water, vowel), J'ai des amis (some friends, pl.)",
        "explanation": "du, de la, de l', and des all collapse to bare de (or d') after negation.",
        "id": "fr1303_e1"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the literal word-for-word structure of 'Je veux du pain et de l'eau'?",
        "german": "Je veux du pain et de l'eau",
        "natural": "I want bread and water",
        "options": [
          "I want bread and water",
          "I want of-the bread and of the water",
          "I want the bread and the water"
        ],
        "target_answer": "I want of-the bread and of the water",
        "meaning": "Literal structure: I want of-the bread and of the water",
        "explanation": "du (de + le) and de l' literally mean 'of-the' ('some portion of the').",
        "id": "fr1303_e2"
      },
      {
        "type": "shift_select",
        "prompt": "Flip 'Je veux du fromage' ('I want some cheese') into the negative ('I don't want any cheese'):",
        "options": [
          "Je ne veux pas de fromage",
          "Je ne veux pas du fromage",
          "Je ne veux pas fromage"
        ],
        "target_answer": "Je ne veux pas de fromage",
        "meaning": "I don't want any cheese",
        "explanation": "After ne...pas, partitive du collapses to bare de: pas de fromage!",
        "id": "fr1303_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "I want some bread and some cheese please",
        "cues": [
          "I want some bread → Je veux du pain",
          "and some cheese, please → et du fromage, s'il vous plaît"
        ],
        "idea_parts": [
          "first partitive → Je veux du pain",
          "second partitive + polite tag → et du fromage, s'il vous plaît"
        ],
        "target_answer": "Je veux du pain et du fromage, s'il vous plaît",
        "meaning": "I want some bread and cheese, please",
        "word_bank": [
          "Je",
          "veux",
          "du",
          "pain",
          "et",
          "du",
          "fromage",
          "s'il",
          "vous",
          "plaît",
          "le",
          "la"
        ],
        "explanation": "Both pain and fromage take masculine partitive du.",
        "diagnosis": {
          "slip": "omitted du",
          "cue": "Use du pain et du fromage."
        },
        "id": "fr1303_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Je ne veux pas de vin ce soir",
        "replays": 2,
        "target_answer": "Je ne veux pas de vin ce soir",
        "meaning": "I don't want any wine tonight",
        "cues": [
          "negation: Je ne veux pas",
          "collapsed partitive: de vin",
          "time: ce soir"
        ],
        "explanation": "du vin collapses to de vin after ne...pas.",
        "affirmation": "You collapsed du to bare de after pas!",
        "id": "fr1303_e5"
      }
    ],
    "summary": {
      "outcome": "Use partitive articles (du, de la, de l', des) for unspecified quantities and collapse them to bare de/d' after negation.",
      "use_example": {
        "german": "Je prends du pain et de la soupe, mais je ne prends pas de vin.",
        "english": "I'm having bread and soup, but I'm not having wine."
      },
      "takeaway": "Use du / de la / de l' / des for 'some', and collapse to bare de after pas.",
      "curiosity_teaser": "Up next on Le Pont ([14] Possessives Agree with the Thing): see how The Partitive: du, de la & Negative de leads directly into Possessives Agree with the Thing."
    }
  },
  {
    "id": 14,
    "slug": "possessives-agree-with-the-thing",
    "title": "Possessives Agree with the Thing",
    "subtitle": "mon/ma/mes, ton/ta/tes, son/sa/ses — why 'son frère' means both 'his brother' and 'her brother'",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "mon",
      "ma",
      "mes",
      "ton",
      "son",
      "sa",
      "notre",
      "votre",
      "père",
      "mère",
      "frère",
      "sœur",
      "famille"
    ],
    "table_word_ids": [
      "mon",
      "ma",
      "mes",
      "ton",
      "son"
    ],
    "hook": {
      "title": "The Owner's Gender Is a Red Herring",
      "content": "In English, choosing between 'his' and 'her' depends on the owner: if Marie owns a book, it is 'her book'; if Paul owns a house, it is 'his house'. French flips the switch 180 degrees: the possessive adjective agrees with the THING OWNED, never with the owner! Because le frère ('brother') is masculine, 'his brother' is son frère AND 'her brother' is ALSO son frère! Because la maison ('house') is feminine, 'her house' is sa maison AND 'his house' is ALSO sa maison!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why French says mon opinion even though opinion is feminine",
          "content": "Try saying *ma opinion out loud: two vowels collide! Rather than eliding ma to m' (which would sound identical to reflexives), French recruits masculine mon, ton, son before ANY feminine word starting with a vowel: mon opinion, ton idée, son histoire!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "The Three-Column Possessive Grid: Masculine / Feminine / Plural",
      "content": "Every singular owner has three cards matching the thing owned: my = mon (m. or before vowel), ma (f.), mes (pl.); your (informal) = ton, ta, tes; his/her/its = son, sa, ses. Look at the noun on the right, never the person on the left!",
      "linguist_note": "Latin suus/sua/suum always agreed in gender, number, and case with the possessed noun; English 'his/her' is the historical outlier.",
      "trap_note": "The shortcut your mind will offer: saying *sa frère when talking about a woman's brother. Stop and check the noun: frère is masculine, so it is ALWAYS son frère!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each family member with its Latinate English cognate and 'my' form:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "mon père (my father)",
            "german": "paternal"
          },
          {
            "id": "p2",
            "english": "ma mère (my mother)",
            "german": "maternal"
          },
          {
            "id": "p3",
            "english": "mon frère (my brother)",
            "german": "fraternal"
          },
          {
            "id": "p4",
            "english": "ma sœur (my sister)",
            "german": "sorority"
          },
          {
            "id": "p5",
            "english": "ma famille (my family)",
            "german": "familiar / family"
          }
        ],
        "target_answer": "paternal, maternal, fraternal, sorority, familiar / family",
        "meaning": "mon père (my father), ma mère (my mother), mon frère (my brother), ma sœur (my sister), ma famille (my family)",
        "explanation": "mon pairs with masculine père/frère; ma pairs with feminine mère/sœur/famille.",
        "id": "fr14_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Marie is talking about her brother (le frère) and Paul is talking about his house (la maison). Which pair is correct?",
        "options": [
          "son frère / sa maison",
          "sa frère / son maison",
          "sa frère / sa maison"
        ],
        "target_answer": "son frère / sa maison",
        "meaning": "her brother (son frère) / his house (sa maison)",
        "explanation": "son/sa agrees with frère (m.) and maison (f.), completely ignoring Marie and Paul's gender!",
        "id": "fr14_e2"
      },
      {
        "type": "shift_select",
        "prompt": "Because 'opinion' is feminine but starts with a vowel, how does French say 'my opinion'?",
        "options": [
          "mon opinion",
          "ma opinion",
          "m'opinion"
        ],
        "target_answer": "mon opinion",
        "meaning": "my opinion",
        "explanation": "Before any vowel-initial feminine noun, ma/ta/sa switch to mon/ton/son so the final /n/ can link smoothly!",
        "id": "fr14_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "my father and my mother are here",
        "cues": [
          "My father → Mon père (masculine)",
          "and my mother are here → et ma mère sont ici"
        ],
        "idea_parts": [
          "masculine subject → Mon père",
          "feminine subject → et ma mère",
          "plural verb → sont ici"
        ],
        "target_answer": "Mon père et ma mère sont ici",
        "meaning": "My father and my mother are here",
        "word_bank": [
          "Mon",
          "père",
          "et",
          "ma",
          "mère",
          "sont",
          "ici",
          "Ma",
          "est"
        ],
        "explanation": "Mon père (m.) + ma mère (f.) = plural 'they', taking sont.",
        "diagnosis": {
          "slip": "used ma with père or est instead of sont",
          "cue": "père takes mon, mère takes ma, and the two together take plural sont."
        },
        "id": "fr14_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Ma sœur habite avec son frère",
        "replays": 2,
        "target_answer": "Ma sœur habite avec son frère",
        "meaning": "My sister lives with her brother",
        "cues": [
          "My sister: Ma sœur",
          "lives with: habite avec",
          "her brother: son frère (masculine!)"
        ],
        "explanation": "Even though the owner is ma sœur, 'her brother' is son frère!",
        "affirmation": "You wrote son frère — the owner's gender didn't trick you.",
        "id": "fr14_e5"
      }
    ],
    "summary": {
      "outcome": "Select mon/ma/mes, ton/ta/tes, son/sa/ses by the gender and number of the possessed noun, and use mon/ton/son before vowel-initial feminine nouns.",
      "use_example": {
        "german": "Paul cherche sa sœur et Marie cherche son frère.",
        "english": "Paul is looking for his sister and Marie is looking for her brother."
      },
      "takeaway": "Possessives look right (at the noun owned), never left (at the owner).",
      "curiosity_teaser": "Up next on Le Pont ([1401] The Trap Named): see how Possessives Agree with the Thing leads directly into The Trap Named."
    },
    "twist": {
      "prompt": "Ungraded — 'Our family is very big' (use Notre):",
      "target_answer": "Notre famille est très grande",
      "word_bank": [
        "Notre",
        "famille",
        "est",
        "très",
        "grande",
        "Nos",
        "grand"
      ],
      "explanation": "notre ('our', as in Notre-Dame) serves both masculine and feminine singular nouns."
    },
    "foreshadow": {
      "line": "Having mastered Possessives Agree with the Thing, look ahead to Topic 15 (Numbers & the Four-Twenties), where this machinery expands into the next dimension of French thought.",
      "resolvedIn": 15
    },
    "payoff": {
      "ofLesson": 13,
      "text": "The foundation from Topic 13 (à, de, chez) now pays off directly inside Possessives Agree with the Thing: every sentence here builds on that earlier step."
    }
  },
  {
    "id": 1401,
    "slug": "sprig-1401",
    "title": "The Trap Named",
    "subtitle": "mon frère / ma sœur, son frère ('his OR her brother'), and mon before feminine vowels (mon opinion).",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "mon",
      "ma",
      "mes",
      "ton",
      "son",
      "sa",
      "père",
      "mère",
      "frère",
      "sœur",
      "opinion",
      "histoire",
      "ami"
    ],
    "table_word_ids": [
      "mon",
      "ma",
      "mes",
      "ton",
      "son"
    ],
    "hook": {
      "title": "Why 'Her Brother' Is son frère and 'My Opinion' Is mon opinion",
      "content": "Trap 1: son/sa/ses agrees with the thing owned, never the owner — so 'her brother' is son frère (masculine!) and 'his sister' is sa sœur (feminine!). Trap 2: Before ANY feminine noun starting with a vowel or mute H (opinion, histoire, université, amie), ma/ta/sa switch to mon/ton/son to prevent a vowel crash: mon opinion, ton histoire, son amie!",
      "footnotes": [
        {
          "marker": "1",
          "title": "How liaison makes mon opinion sound smooth",
          "content": "In mon‿opinion (/mɔ̃.nɔ.pi.njɔ̃/), the final /n/ of mon jumps onto opinion as a clean consonant bridge!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Ignore the Owner's Gender, and Use mon/ton/son Before ANY Vowel",
      "content": "Check the word right after the possessive for vowel/mute-H first, then gender.",
      "linguist_note": "Prevocalic feminine mon/ton/son avoids hiatus before vowel-initial feminine nouns.",
      "trap_note": "Never write *ma amie, *ma opinion, or *sa histoire — vowel-initial feminine nouns ALWAYS take mon, ton, son!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English phrase with its correct French possessive:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "her brother (frère is masculine!)",
            "german": "son frère"
          },
          {
            "id": "p2",
            "english": "his sister (sœur is feminine!)",
            "german": "sa sœur"
          },
          {
            "id": "p3",
            "english": "my opinion (feminine, starts with vowel!)",
            "german": "mon opinion"
          },
          {
            "id": "p4",
            "english": "your story (feminine, mute H!)",
            "german": "ton histoire"
          },
          {
            "id": "p5",
            "english": "his / her house (maison is feminine)",
            "german": "sa maison"
          }
        ],
        "target_answer": "son frère, sa sœur, mon opinion, ton histoire, sa maison",
        "meaning": "her brother (frère is masculine!), his sister (sœur is feminine!), my opinion (feminine, starts with vowel!), your story (feminine, mute H!), his / her house (maison is feminine)",
        "explanation": "Look only at the noun owned — and use mon/ton/son before any vowel or mute H.",
        "id": "fr1401_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'my female friend' (amie, feminine starting with a vowel)?",
        "options": [
          "mon amie",
          "ma amie",
          "m'amie"
        ],
        "target_answer": "mon amie",
        "meaning": "my (female) friend",
        "explanation": "Before a vowel, ma switches to mon: mon amie!",
        "id": "fr1401_e2"
      },
      {
        "type": "shift_select",
        "prompt": "Paul is talking about his mother (la mère), and Marie is talking about her father (le père). Which pair is right?",
        "options": [
          "sa mère / son père",
          "son mère / sa père",
          "sa mère / sa père"
        ],
        "target_answer": "sa mère / son père",
        "meaning": "his mother (sa mère) / her father (son père)",
        "explanation": "mère is feminine (sa mère); père is masculine (son père).",
        "id": "fr1401_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "it is my opinion and it is her story",
        "cues": [
          "It is my opinion → C'est mon opinion",
          "and it is her story → et c'est son histoire"
        ],
        "idea_parts": [
          "first clause → C'est mon opinion",
          "second clause → et c'est son histoire"
        ],
        "target_answer": "C'est mon opinion et c'est son histoire",
        "meaning": "It is my opinion and it is her story",
        "word_bank": [
          "C'est",
          "mon",
          "opinion",
          "et",
          "c'est",
          "son",
          "histoire",
          "ma",
          "sa"
        ],
        "explanation": "Both opinion and histoire take mon/son because they start with a vowel/mute H!",
        "diagnosis": {
          "slip": "used ma or sa",
          "cue": "Use mon opinion and son histoire."
        },
        "id": "fr1401_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Elle cherche son frère et son père",
        "replays": 2,
        "target_answer": "Elle cherche son frère et son père",
        "meaning": "She is looking for her brother and her father",
        "cues": [
          "Elle cherche",
          "son frère et son père"
        ],
        "explanation": "Both frère and père are masculine, so 'her' is son for both.",
        "affirmation": "You kept son before both masculine nouns!",
        "id": "fr1401_e5"
      }
    ],
    "summary": {
      "outcome": "Master son/sa agreement with the possessed noun and mon/ton/son before vowel-initial feminine nouns.",
      "use_example": {
        "german": "C'est mon idée, mon opinion et mon histoire.",
        "english": "It is my idea, my opinion, and my story."
      },
      "takeaway": "Ignore the owner's gender, and use mon/ton/son before every vowel.",
      "curiosity_teaser": "Up next on Le Pont ([1402] Famille Gym): see how The Trap Named leads directly into Famille Gym."
    }
  },
  {
    "id": 1402,
    "slug": "sprig-1402",
    "title": "Famille Gym",
    "subtitle": "Drills across père, mère, frère, sœur, famille with mon/ma/mes, ton/ta/tes, son/sa/ses.",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "mon",
      "ma",
      "mes",
      "ton",
      "son",
      "sa",
      "notre",
      "votre",
      "leur",
      "père",
      "mère",
      "frère",
      "sœur",
      "famille"
    ],
    "table_word_ids": [
      "mon",
      "ma",
      "mes",
      "ton",
      "son"
    ],
    "hook": {
      "title": "The Complete Possessive Matrix Across the Family Tree",
      "content": "Singular owners (mon/ma/mes, ton/ta/tes, son/sa/ses) have three forms (masculine, feminine, plural), while plural owners (notre/nos 'our', votre/vos 'your', leur/leurs 'their') only have TWO forms — one for any singular noun (notre père, notre mère, leur frère, leur sœur) and one with -s for any plural noun (nos amis, vos billets, leurs parents)!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why leur means both 'to them' (before a verb) and 'their' (before a noun)",
          "content": "Before a noun, leur/leurs means 'their' (leur maison, leurs amis). Before a verb (Topic 23), leur means 'to them' (je leur parle)!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Singular Owners Have 3 Cards (m/f/pl); Plural Owners Have 2 Cards (sg/pl)",
      "content": "Walk the matrix across the family nouns: mon père, ma mère, mes parents; notre père, notre mère, nos parents; leur frère, leur sœur, leurs amis.",
      "linguist_note": "French possessive determiners distinguish gender only when the possessor is singular.",
      "trap_note": "Don't invent a feminine form for notre, votre, or leur — they already end in -e in both genders!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each plural-owner possessive phrase with its meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "notre famille (singular)",
            "german": "our family"
          },
          {
            "id": "p2",
            "english": "nos amis (plural)",
            "german": "our friends"
          },
          {
            "id": "p3",
            "english": "votre réservation (singular)",
            "german": "your reservation"
          },
          {
            "id": "p4",
            "english": "leur maison (singular)",
            "german": "their house"
          },
          {
            "id": "p5",
            "english": "leurs frères (plural)",
            "german": "their brothers"
          }
        ],
        "target_answer": "our family, our friends, your reservation, their house, their brothers",
        "meaning": "notre famille (singular), nos amis (plural), votre réservation (singular), leur maison (singular), leurs frères (plural)",
        "explanation": "notre/nos, votre/vos, leur/leurs only change between singular and plural.",
        "id": "fr1402_e1"
      },
      {
        "type": "family_matrix",
        "prompt": "Complete the Possessive × Noun Matrix for 'their sister' (leur + sœur):",
        "rows": [
          "my (1st sg.)",
          "his / her (3rd sg.)",
          "their (3rd pl.)"
        ],
        "columns": [
          "Masculine (frère)",
          "Feminine (sœur)",
          "Plural (amis)"
        ],
        "cells": [
          [
            {
              "german": "mon frère",
              "english": "my brother"
            },
            {
              "german": "ma sœur",
              "english": "my sister"
            },
            {
              "german": "mes amis",
              "english": "my friends"
            }
          ],
          [
            {
              "german": "son frère",
              "english": "his/her brother"
            },
            {
              "german": "sa sœur",
              "english": "his/her sister"
            },
            {
              "german": "ses amis",
              "english": "his/her friends"
            }
          ],
          [
            {
              "german": "leur frère",
              "english": "their brother"
            },
            {
              "german": "leur sœur",
              "english": "their sister"
            },
            {
              "german": "leurs amis",
              "english": "their friends"
            }
          ]
        ],
        "seed": [
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            0,
            2
          ],
          [
            1,
            0
          ],
          [
            1,
            1
          ],
          [
            1,
            2
          ],
          [
            2,
            0
          ],
          [
            2,
            2
          ]
        ],
        "task": {
          "row": 2,
          "column": 1
        },
        "target_answer": "leur sœur",
        "meaning": "their sister",
        "row_law": "Rows 1–2 split masculine/feminine; Row 3 (their) uses 'leur' for both singular genders and 'leurs' for plural.",
        "column_law": "Columns 1–2 are singular possessions; Column 3 is plural possessions.",
        "explanation": "Plural owners (notre, votre, leur) use the exact same form for masculine and feminine singular: leur frère, leur sœur.",
        "id": "fr1402_e2"
      },
      {
        "type": "derive",
        "prompt": "Translate 'our mother and our father' using 'notre':",
        "english_hint": "notre is invariable in singular",
        "target_answer": "notre mère et notre père",
        "meaning": "our mother and our father",
        "explanation": "notre serves both feminine mère and masculine père.",
        "id": "fr1402_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "my parents are with their friends (use Mes parents sont avec leurs amis)",
        "cues": [
          "My parents are → Mes parents sont",
          "with their friends → avec leurs amis"
        ],
        "idea_parts": [
          "subject + verb → Mes parents sont",
          "preposition + plural possessive → avec leurs amis"
        ],
        "target_answer": "Mes parents sont avec leurs amis",
        "meaning": "My parents are with their friends",
        "word_bank": [
          "Mes",
          "parents",
          "sont",
          "avec",
          "leurs",
          "amis",
          "Mon",
          "leur"
        ],
        "explanation": "Plural parents takes Mes, and plural amis takes leurs.",
        "diagnosis": {
          "slip": "used singular leur before plural amis",
          "cue": "Before plural amis, leur adds -s: leurs amis."
        },
        "id": "fr1402_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Voici votre table et vos cafés",
        "replays": 2,
        "target_answer": "Voici votre table et vos cafés",
        "meaning": "Here is your table and your coffees",
        "cues": [
          "Voici votre table",
          "et vos cafés"
        ],
        "explanation": "votre (singular) vs. vos (plural).",
        "affirmation": "You contrasted singular votre and plural vos cleanly.",
        "id": "fr1402_e5"
      }
    ],
    "summary": {
      "outcome": "Deploy the complete possessive system across family and everyday nouns.",
      "use_example": {
        "german": "Notre famille aime beaucoup vos amis.",
        "english": "Our family likes your friends a lot."
      },
      "takeaway": "mon/ton/son split m/f/pl; notre/votre/leur only split singular vs. plural.",
      "curiosity_teaser": "Up next on Le Pont ([1403] Demonstratives & Stressed Pronouns): see how Famille Gym leads directly into Demonstratives & Stressed Pronouns."
    }
  },
  {
    "id": 1403,
    "slug": "sprig-1403",
    "title": "Demonstratives & Stressed Pronouns",
    "subtitle": "Pointing with ce/cet/cette/ces and standing alone after prepositions with moi, toi, lui, elle, nous, vous.",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "ce",
      "moi",
      "toi",
      "lui",
      "elle",
      "nous",
      "vous",
      "avec",
      "pour",
      "chez",
      "hôtel",
      "ville",
      "livre"
    ],
    "table_word_ids": [
      "ce",
      "moi",
      "toi",
      "lui",
      "elle"
    ],
    "hook": {
      "title": "Pointers (ce/cet/cette/ces) and Stressed Pronouns (moi, toi, lui, elle)",
      "content": "One French pointer family covers both 'this' and 'that': ce (masculine consonant: ce livre), cet (masculine vowel/mute H: cet hôtel, cet ami), cette (feminine: cette ville), and ces (plural: ces livres)! And after any preposition (avec, pour, sans, chez) or C'est, pronouns wear their stressed coats: moi, toi, lui, elle, nous, vous!",
      "footnotes": [
        {
          "marker": "1",
          "title": "How cet and cette sound 100% identical (/sɛt/)",
          "content": "Masculine prevocalic cet (/sɛt/) and feminine cette (/sɛt/) sound completely identical in speech!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "ce / cet / cette / ces before Nouns; moi / toi / lui / elle after Prepositions",
      "content": "Use cet before masculine vowels/mute H, and use moi/toi/lui/elle after avec, pour, chez.",
      "linguist_note": "French stressed (disjunctive) pronouns moi, toi, lui descend from Latin tonic oblique forms mē, tē, illūi.",
      "trap_note": "Never write *ce hôtel or *avec je — use cet hôtel and avec moi!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each pointer or stressed pronoun phrase with its meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "ce livre (masculine consonant)",
            "german": "this / that book"
          },
          {
            "id": "p2",
            "english": "cet hôtel / cet ami (masculine vowel/H)",
            "german": "this / that hotel, friend"
          },
          {
            "id": "p3",
            "english": "cette ville (feminine)",
            "german": "this / that city"
          },
          {
            "id": "p4",
            "english": "avec moi / pour toi",
            "german": "with me / for you"
          },
          {
            "id": "p5",
            "english": "chez lui / chez elle",
            "german": "at his place / at her place"
          }
        ],
        "target_answer": "this / that book, this / that hotel, friend, this / that city, with me / for you, at his place / at her place",
        "meaning": "ce livre (masculine consonant), cet hôtel / cet ami (masculine vowel/H), cette ville (feminine), avec moi / pour toi, chez lui / chez elle",
        "explanation": "cet prevents a vowel collision in the masculine; moi/toi/lui/elle follow prepositions.",
        "id": "fr1403_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Which demonstrative correctly completes '___ homme et ___ femme' ('this man and this woman')?",
        "options": [
          "cet homme et cette femme",
          "ce homme et cette femme",
          "cette homme et cette femme"
        ],
        "target_answer": "cet homme et cette femme",
        "meaning": "this man (cet before mute H) and this woman (cette, f.)",
        "explanation": "homme is masculine and starts with a mute H, so ce becomes cet: cet homme.",
        "id": "fr1403_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'This coffee is for me, and that cake is for you (informal)'?",
        "options": [
          "Ce café est pour moi et ce gâteau est pour toi",
          "Ce café est pour me et ce gâteau est pour te",
          "Cette café est pour moi et cette gâteau est pour toi"
        ],
        "target_answer": "Ce café est pour moi et ce gâteau est pour toi",
        "meaning": "This coffee is for me and that cake is for you",
        "explanation": "After a preposition like pour, me/te become stressed moi/toi!",
        "id": "fr1403_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "I am coming with you to this hotel",
        "cues": [
          "I am coming with you → Je viens avec toi",
          "to this hotel → à cet hôtel"
        ],
        "idea_parts": [
          "verb + companion → Je viens avec toi",
          "destination → à cet hôtel"
        ],
        "target_answer": "Je viens avec toi à cet hôtel",
        "meaning": "I am coming with you to this hotel",
        "word_bank": [
          "Je",
          "viens",
          "avec",
          "toi",
          "à",
          "cet",
          "hôtel",
          "te",
          "ce"
        ],
        "explanation": "avec takes stressed toi, and masculine mute-H hôtel takes cet.",
        "diagnosis": {
          "slip": "used te or ce hôtel",
          "cue": "Use avec toi and à cet hôtel."
        },
        "id": "fr1403_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "C'est pour moi ou c'est pour lui",
        "replays": 2,
        "target_answer": "C'est pour moi ou c'est pour lui",
        "meaning": "Is it for me or is it for him?",
        "cues": [
          "for me: C'est pour moi",
          "or for him: ou c'est pour lui"
        ],
        "explanation": "After pour, use stressed moi and lui.",
        "affirmation": "You used both stressed pronouns moi and lui after pour.",
        "id": "fr1403_e5"
      }
    ],
    "summary": {
      "outcome": "Point at nouns with ce, cet, cette, ces and use stressed pronouns (moi, toi, lui, elle, nous, vous) after prepositions.",
      "use_example": {
        "german": "Cet hôtel est très beau — tu viens avec moi ?",
        "english": "This hotel is very beautiful — are you coming with me?"
      },
      "takeaway": "ce becomes cet before a masculine vowel, and prepositions always take moi, toi, lui, elle.",
      "curiosity_teaser": "Up next on Le Pont ([15] Numbers & the Four-Twenties): see how Demonstratives & Stressed Pronouns leads directly into Numbers & the Four-Twenties."
    }
  },
  {
    "id": 15,
    "slug": "numbers-and-four-twenties",
    "title": "Numbers & the Four-Twenties",
    "subtitle": "Counting 1–100, vigesimal quatre-vingts ('four score'), and expressing age as possession with avoir",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "un",
      "deux",
      "trois",
      "quatre",
      "cinq",
      "six",
      "sept",
      "huit",
      "neuf",
      "dix",
      "vingt",
      "trente",
      "soixante",
      "quatre_vingts",
      "cent",
      "ans"
    ],
    "table_word_ids": [
      "un",
      "deux",
      "trois",
      "quatre",
      "cinq"
    ],
    "hook": {
      "title": "Why French Counts Like the Gettysburg Address",
      "content": "When Abraham Lincoln opened the Gettysburg Address with 'Four score and seven years ago', a 'score' meant twenty — so four score and seven was 4 × 20 + 7 = 87. Standard French still counts its 70s, 80s, and 90s using that ancient Celtic/Norman twenty-based (vigesimal) system! Up to sixty (soixante) everything is decimal. Then at 70, instead of inventing a new ten-word, French says soixante-dix ('sixty-ten'). At 80 it says quatre-vingts ('four-twenties'). And at 90 it says quatre-vingt-dix ('four-twenty-ten')!",
      "footnotes": [
        {
          "marker": "1",
          "title": "How every number from 1 to 10 hides inside English",
          "content": "un (unit), deux (duet/deuce), trois (trio/three), quatre (quartet), cinq (quintet), six (six), sept (September), huit (octopus/October), neuf (November), dix (decimal), vingt (vigesimal), cent (century/percent).",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "You Don't 'Be' Your Age in French — You 'Have' Your Years",
      "content": "In English you say 'I am thirty years old', treating age as an identity. In French, years are something you collect and carry in your pocket with avoir: J'ai trente ans (literally 'I have thirty years'). And you never drop the word ans ('years'): English can say 'I am thirty', but French always names the years: J'ai vingt ans, il a quarante ans.",
      "linguist_note": "Gaulish substratum counting by twenties (vigesimal) survived in Parisian French for 70–99, while Swiss and Belgian French regularized them to septante, huitante/octante, and nonante.",
      "trap_note": "The shortcut your mind will offer: saying *Je suis trente ans for 'I am thirty years old'. Age is possession in Romance: ALWAYS use avoir (J'ai trente ans)!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each French number with its English cognate clue and value:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "cinq (quintet)",
            "german": "5"
          },
          {
            "id": "p2",
            "english": "huit (octagon)",
            "german": "8"
          },
          {
            "id": "p3",
            "english": "vingt (vigesimal)",
            "german": "20"
          },
          {
            "id": "p4",
            "english": "soixante-dix (sixty-ten)",
            "german": "70"
          },
          {
            "id": "p5",
            "english": "quatre-vingts (four-twenties)",
            "german": "80"
          }
        ],
        "target_answer": "5, 8, 20, 70, 80",
        "meaning": "cinq (quintet), huit (octagon), vingt (vigesimal), soixante-dix (sixty-ten), quatre-vingts (four-twenties)",
        "explanation": "70 adds dix onto soixante; 80 multiplies quatre × vingt.",
        "id": "fr15_e1"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the literal word-for-word structure of 'J'ai trente ans'?",
        "german": "J'ai trente ans",
        "natural": "I am thirty years old",
        "options": [
          "I am thirty years old",
          "I have thirty years",
          "I am thirty of years"
        ],
        "target_answer": "I have thirty years",
        "meaning": "Literal structure: I have thirty years",
        "explanation": "French expresses age as possession with avoir: J'ai trente ans ('I have thirty years').",
        "id": "fr15_e2"
      },
      {
        "type": "reverse_cognate",
        "prompt": "French cent ('100') and ans ('years') combine inside which English word for a 100-year period?",
        "target_answer": "century",
        "meaning": "century / centennial ↔ cent (100)",
        "explanation": "Latin centum ('hundred') gave French cent and English century / percent.",
        "id": "fr15_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "my brother is twenty years old",
        "cues": [
          "My brother → Mon frère",
          "has twenty years → a vingt ans (use avoir, not est!)"
        ],
        "idea_parts": [
          "subject → Mon frère",
          "verb of age → a (has)",
          "number + years → vingt ans"
        ],
        "target_answer": "Mon frère a vingt ans",
        "meaning": "My brother is twenty years old",
        "word_bank": [
          "Mon",
          "frère",
          "a",
          "vingt",
          "ans",
          "est",
          "trente"
        ],
        "explanation": "Mon frère a vingt ans uses il a ('has') + vingt ans.",
        "diagnosis": {
          "slip": "used est instead of a for age",
          "cue": "Age uses avoir: Mon frère a vingt ans."
        },
        "id": "fr15_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "J'ai trente ans aujourd'hui",
        "replays": 2,
        "target_answer": "J'ai trente ans aujourd'hui",
        "meaning": "I am thirty years old today",
        "cues": [
          "I have: J'ai",
          "thirty years: trente ans",
          "today: aujourd'hui"
        ],
        "explanation": "trente ans links with a /t/ liaison (/tʁɑ̃.t‿ɑ̃/).",
        "affirmation": "You used J'ai + ans and spelled aujourd'hui with its apostrophe.",
        "id": "fr15_e5"
      }
    ],
    "summary": {
      "outcome": "Count from 1 to 100 including vigesimal 70–99, and state ages using avoir + ans.",
      "use_example": {
        "german": "Mon père a soixante ans et j'ai trente ans.",
        "english": "My father is sixty and I am thirty."
      },
      "takeaway": "80 is four-twenties (quatre-vingts), and you always 'have' your years (j'ai X ans).",
      "curiosity_teaser": "Up next on Le Pont ([1501] Counting Cognates Gym): see how Numbers & the Four-Twenties leads directly into Counting Cognates Gym."
    },
    "twist": {
      "prompt": "Ungraded — ask a friend 'How old are you?' (literally 'Which age have you?' using Quel âge):",
      "target_answer": "Tu as quel âge",
      "word_bank": [
        "Tu",
        "as",
        "quel",
        "âge",
        "es",
        "quelle"
      ],
      "explanation": "Because you 'have' your age, 'How old are you?' is Tu as quel âge ? (or Quel âge as-tu ?)."
    },
    "foreshadow": {
      "line": "Having mastered Numbers & the Four-Twenties, look ahead to Topic 16 (Days, Months & Dates), where this machinery expands into the next dimension of French thought.",
      "resolvedIn": 16
    },
    "payoff": {
      "ofLesson": 14,
      "text": "The foundation from Topic 14 (Possessives Agree with the Thing) now pays off directly inside Numbers & the Four-Twenties: every sentence here builds on that earlier step."
    }
  },
  {
    "id": 1501,
    "slug": "lesson-1501",
    "title": "Counting Cognates Gym",
    "subtitle": "un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix, vingt — Latin roots in everyday counting.",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "un",
      "deux",
      "trois",
      "quatre",
      "cinq",
      "six",
      "sept",
      "huit",
      "neuf",
      "dix",
      "vingt"
    ],
    "table_word_ids": [
      "un",
      "deux",
      "trois",
      "quatre",
      "cinq"
    ],
    "hook": {
      "title": "Every French Number Has an English Twin",
      "content": "Every number 1 to 20 shares its Latin root with an English word you already know: un (unit), deux (duo/deuce), trois (trio), quatre (quartet), cinq (quintet), six (six), sept (September), huit (octopus/October), neuf (November), dix (decimal), vingt (vigesimal).",
      "footnotes": [
        {
          "marker": "1",
          "title": "How six, huit, and dix change their final sound by context",
          "content": "Standing alone, six (/sis/) and dix (/dis/) end in /s/, and huit (/ɥit/) ends in /t/. Before a consonant (six jours, huit livres, dix minutes), their final consonant goes silent! Before a vowel (six‿ans, huit‿heures, dix‿euros), S/X buzzes as /z/ and T taps as /t/!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Count With Cognates and Watch Liaison Before Vowels",
      "content": "Practice pairing numbers with minutes, hours, euros, and days: cinq minutes, sept jours, huit heures, dix euros, vingt ans.",
      "linguist_note": "Sandhi alternation on six, huit, dix preserves three distinct historical environments.",
      "trap_note": "Don't pronounce the p of sept (/sɛt/) or the gt of vingt (/vɛ̃/) when standing alone!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each French number phrase with its meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "deux cafés (duo)",
            "german": "two coffees"
          },
          {
            "id": "p2",
            "english": "quatre personnes (quartet)",
            "german": "four people"
          },
          {
            "id": "p3",
            "english": "cinq minutes (quintet)",
            "german": "five minutes"
          },
          {
            "id": "p4",
            "english": "sept jours (September)",
            "german": "seven days"
          },
          {
            "id": "p5",
            "english": "dix euros (decimal)",
            "german": "ten euros"
          }
        ],
        "target_answer": "two coffees, four people, five minutes, seven days, ten euros",
        "meaning": "deux cafés (duo), quatre personnes (quartet), cinq minutes (quintet), sept jours (September), dix euros (decimal)",
        "explanation": "Every number 1–10 connects to an English Latinate cognate.",
        "id": "fr1501_e1"
      },
      {
        "type": "reverse_cognate",
        "prompt": "French cinq ('five') shares its Latin root quinque with which English word for a five-musician group?",
        "target_answer": "quintet",
        "meaning": "quintet ↔ cinq ('five')",
        "explanation": "Latin quinque gave English quintet/quintessential and French cinq.",
        "id": "fr1501_e2"
      },
      {
        "type": "shift_select",
        "prompt": "In 'sept jours' ('seven days'), which letter in 'sept' is completely silent?",
        "options": [
          "The p (/sɛt/, never /sɛpt/)",
          "The t (/sɛp/)",
          "The s (/ɛpt/)"
        ],
        "target_answer": "The p (/sɛt/, never /sɛpt/)",
        "meaning": "The p of sept is always silent; the t is always pronounced (/sɛt/)!",
        "explanation": "Just like English 'receipt', the p in sept is an etymological ghost.",
        "id": "fr1501_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "I have five minutes and ten euros",
        "cues": [
          "I have five minutes → J'ai cinq minutes",
          "and ten euros → et dix euros"
        ],
        "idea_parts": [
          "first object → J'ai cinq minutes",
          "second object → et dix euros"
        ],
        "target_answer": "J'ai cinq minutes et dix euros",
        "meaning": "I have five minutes and ten euros",
        "word_bank": [
          "J'ai",
          "cinq",
          "minutes",
          "et",
          "dix",
          "euros",
          "sept",
          "la"
        ],
        "explanation": "dix‿euros links with a /z/ buzz.",
        "diagnosis": {
          "slip": "confused cinq and sept",
          "cue": "Use cinq (5) and dix (10)."
        },
        "id": "fr1501_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Nous avons sept jours à Paris",
        "replays": 2,
        "target_answer": "Nous avons sept jours à Paris",
        "meaning": "We have seven days in Paris",
        "cues": [
          "Nous avons",
          "sept jours à Paris"
        ],
        "explanation": "sept jours = one week (une semaine).",
        "affirmation": "You wrote Nous avons sept jours à Paris cleanly.",
        "id": "fr1501_e5"
      }
    ],
    "summary": {
      "outcome": "Count with 1–20 in real contexts and apply liaison on six, huit, dix, and vingt.",
      "use_example": {
        "german": "J'attends depuis cinq minutes.",
        "english": "I've been waiting for five minutes."
      },
      "takeaway": "Numbers 1–20 are Latin cognates you already own in English.",
      "curiosity_teaser": "Up next on Le Pont ([1502] Four Score & Seven): see how Counting Cognates Gym leads directly into Four Score & Seven."
    }
  },
  {
    "id": 1502,
    "slug": "lesson-1502",
    "title": "Four Score & Seven",
    "subtitle": "soixante-dix (60+10), quatre-vingts (4×20), and expressing age with avoir (j'ai trente ans).",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "vingt",
      "trente",
      "soixante",
      "quatre_vingts",
      "cent",
      "ans",
      "avoir",
      "jai"
    ],
    "table_word_ids": [
      "vingt",
      "trente",
      "soixante",
      "quatre_vingts",
      "cent"
    ],
    "hook": {
      "title": "Counting by Twenties and Carrying Your Years",
      "content": "Past sixty (soixante), French switches into its Celtic twenty-based gear: 70 is soixante-dix (60 + 10), 80 is quatre-vingts (4 × 20), 90 is quatre-vingt-dix (4 × 20 + 10), and 100 is cent! Combine these with J'ai… ans to state any age.",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why quatre-vingts drops its -s when another number follows",
          "content": "On 80 alone, quatre-vingts keeps the plural -s on vingts ('four twenties'). When another number follows (quatre-vingt-dix), vingt drops its -s!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "60+10 = 70, 4×20 = 80, 4×20+10 = 90",
      "content": "Hear the arithmetic inside the number, and always pair ages with avoir + ans: Il a quatre-vingts ans ('He is eighty years old').",
      "linguist_note": "Vigesimal numeral composition (quatre-vingts) is an areal feature of Gallo-Romance.",
      "trap_note": "Never say *un cent for 'one hundred' — French says bare cent!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each higher French number with its arithmetic breakdown:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "trente (30)",
            "german": "thirty"
          },
          {
            "id": "p2",
            "english": "soixante (60)",
            "german": "sixty"
          },
          {
            "id": "p3",
            "english": "soixante-dix (60 + 10)",
            "german": "seventy (70)"
          },
          {
            "id": "p4",
            "english": "quatre-vingts (4 × 20)",
            "german": "eighty (80)"
          },
          {
            "id": "p5",
            "english": "cent (bare, no 'un'!)",
            "german": "one hundred (100)"
          }
        ],
        "target_answer": "thirty, sixty, seventy (70), eighty (80), one hundred (100)",
        "meaning": "trente (30), soixante (60), soixante-dix (60 + 10), quatre-vingts (4 × 20), cent (bare, no 'un'!)",
        "explanation": "70 builds on 60; 80 and 90 build on four-twenties.",
        "id": "fr1502_e1"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the word-for-word breakdown of 'quatre-vingts ans'?",
        "german": "quatre-vingts ans",
        "natural": "eighty years",
        "options": [
          "eighty years",
          "four-twenties years",
          "four-twenty of years"
        ],
        "target_answer": "four-twenties years",
        "meaning": "Literal structure: four-twenties years",
        "explanation": "quatre (four) + vingts (twenties) + ans (years).",
        "id": "fr1502_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'one hundred euros' in French?",
        "options": [
          "cent euros",
          "un cent euros",
          "cents euros"
        ],
        "target_answer": "cent euros",
        "meaning": "one hundred euros",
        "explanation": "French never puts un before cent: bare cent euros!",
        "id": "fr1502_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "my father is sixty years old",
        "cues": [
          "My father has sixty years → Mon père a soixante ans"
        ],
        "idea_parts": [
          "subject → Mon père",
          "verb + age → a soixante ans"
        ],
        "target_answer": "Mon père a soixante ans",
        "meaning": "My father is sixty years old",
        "word_bank": [
          "Mon",
          "père",
          "a",
          "soixante",
          "ans",
          "est",
          "trente"
        ],
        "explanation": "Use avoir (a) + soixante ans.",
        "diagnosis": {
          "slip": "used est instead of a",
          "cue": "Age always uses avoir: Mon père a soixante ans."
        },
        "id": "fr1502_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "C'est quatre-vingts euros, s'il vous plaît",
        "replays": 2,
        "target_answer": "C'est quatre-vingts euros, s'il vous plaît",
        "meaning": "That is eighty euros, please",
        "cues": [
          "C'est quatre-vingts euros",
          "s'il vous plaît"
        ],
        "explanation": "quatre-vingts keeps its -s when no smaller number follows.",
        "affirmation": "You spelled quatre-vingts with its hyphen and plural -s.",
        "id": "fr1502_e5"
      }
    ],
    "summary": {
      "outcome": "Use trente, soixante, quatre-vingts, and cent in prices and ages with avoir.",
      "use_example": {
        "german": "Ma grand-mère a quatre-vingts ans.",
        "english": "My grandmother is eighty years old."
      },
      "takeaway": "70 is sixty-ten, 80 is four-twenties, and 100 is bare cent.",
      "curiosity_teaser": "Up next on Le Pont ([16] Days, Months & Dates): see how Four Score & Seven leads directly into Days, Months & Dates."
    }
  },
  {
    "id": 16,
    "slug": "days-months-and-dates",
    "title": "Days, Months & Dates",
    "subtitle": "The planetary weekdays (lundi to dimanche), months with en, dates with le, and aujourd'hui",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "lundi",
      "mardi",
      "mercredi",
      "jeudi",
      "vendredi",
      "samedi",
      "dimanche",
      "janvier",
      "juillet",
      "aujourdhui",
      "demain",
      "hier",
      "semaine"
    ],
    "table_word_ids": [
      "lundi",
      "mardi",
      "mercredi",
      "jeudi",
      "vendredi"
    ],
    "hook": {
      "title": "Five Roman Gods, the Sabbath, and the Lord's Day",
      "content": "English swapped the Roman gods of the week for Norse ones (Mars → Tiw's Tuesday, Mercury → Woden's Wednesday, Jupiter → Thor's Thursday, Venus → Freya's Friday). French kept the Roman sky calendar intact with Latin diēs ('day') fused onto the tail as -di: lundi (Moon-day), mardi (Mars-day), mercredi (Mercury-day), jeudi (Jove/Jupiter-day), vendredi (Venus-day), plus samedi (Sabbath-day) and dimanche (Dominica, the Lord's day).",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why aujourd'hui means 'on the day of today's day'",
          "content": "Latin hodiē ('today') wore down to Old French hui. That felt too short, so speakers padded it into au jour d'hui ('on the day of today') — making aujourd'hui a double 'today'!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Bare Weekdays vs. Habitual le, and Months with en",
      "content": "In French, you never say 'on Monday' — the weekday stands bare: J'arrive lundi ('I arrive on Monday'). But if you put le in front of a weekday (le lundi), it means 'EVERY Monday'! For months, French uses en ('in'): en janvier, en juillet. And for exact dates, French uses le + cardinal number: le quatorze juillet ('the 14th of July'), using premier ('first') only on the 1st of the month (le premier janvier).",
      "linguist_note": "French weekdays and months are never capitalized inside a sentence because they are treated as common temporal nouns rather than proper names.",
      "trap_note": "The shortcut your mind will offer: putting a preposition before a weekday (*sur lundi) or using dans for months (*dans janvier). Weekdays stand bare (lundi), and months take en (en janvier)!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each French day of the week with its planetary or historical origin:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "lundi (Monday)",
            "german": "Moon-day (lunar)"
          },
          {
            "id": "p2",
            "english": "mardi (Tuesday)",
            "german": "Mars-day (martial)"
          },
          {
            "id": "p3",
            "english": "mercredi (Wednesday)",
            "german": "Mercury-day"
          },
          {
            "id": "p4",
            "english": "jeudi (Thursday)",
            "german": "Jove / Jupiter-day"
          },
          {
            "id": "p5",
            "english": "vendredi (Friday)",
            "german": "Venus-day"
          }
        ],
        "target_answer": "Moon-day (lunar), Mars-day (martial), Mercury-day, Jove / Jupiter-day, Venus-day",
        "meaning": "lundi (Monday), mardi (Tuesday), mercredi (Wednesday), jeudi (Thursday), vendredi (Friday)",
        "explanation": "The ending -di is Latin diēs ('day').",
        "id": "fr16_e1"
      },
      {
        "type": "shift_select",
        "prompt": "What is the difference between 'Je travaille samedi' and 'Je travaille le samedi'?",
        "options": [
          "'on Saturday' (this once) vs. 'on Saturdays' (every Saturday)",
          "'last Saturday' vs. 'next Saturday'",
          "They mean the exact same thing"
        ],
        "target_answer": "'on Saturday' (this once) vs. 'on Saturdays' (every Saturday)",
        "meaning": "le + weekday expresses a recurring habit",
        "explanation": "A bare weekday means that single day; le + weekday means 'every [weekday]'.",
        "id": "fr16_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'in July' in French?",
        "options": [
          "en juillet",
          "dans juillet",
          "à juillet"
        ],
        "target_answer": "en juillet",
        "meaning": "in July",
        "explanation": "All twelve months take en: en janvier, en juillet.",
        "id": "fr16_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "today is Monday and tomorrow is Tuesday",
        "cues": [
          "Today it is Monday → Aujourd'hui, c'est lundi",
          "and tomorrow it is Tuesday → et demain, c'est mardi"
        ],
        "idea_parts": [
          "first clause → Aujourd'hui, c'est lundi",
          "second clause → et demain, c'est mardi"
        ],
        "target_answer": "Aujourd'hui, c'est lundi et demain, c'est mardi",
        "meaning": "Today is Monday and tomorrow is Tuesday",
        "word_bank": [
          "Aujourd'hui",
          "c'est",
          "lundi",
          "et",
          "demain",
          "c'est",
          "mardi",
          "hier",
          "la"
        ],
        "explanation": "French uses c'est + weekday to state what day it is.",
        "diagnosis": {
          "slip": "capitalized lundi/mardi or omitted c'est",
          "cue": "Use c'est lundi and c'est mardi."
        },
        "id": "fr16_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Je vais partir vendredi en juillet",
        "replays": 2,
        "target_answer": "Je vais partir vendredi en juillet",
        "meaning": "I am going to leave on Friday in July",
        "cues": [
          "near future: Je vais partir",
          "bare weekday: vendredi",
          "in July: en juillet"
        ],
        "explanation": "vendredi stands bare with no 'on'; juillet takes en.",
        "affirmation": "You kept vendredi bare and paired juillet with en.",
        "id": "fr16_e5"
      }
    ],
    "summary": {
      "outcome": "Name all seven weekdays and key months, contrast bare lundi ('on Monday') with le lundi ('every Monday'), and use en with months.",
      "use_example": {
        "german": "Le dimanche, je reste chez moi.",
        "english": "On Sundays, I stay at home."
      },
      "takeaway": "Weekdays take no 'on' (lundi = on Monday, le lundi = every Monday), and months take en.",
      "curiosity_teaser": "Up next on Le Pont ([1601] The Sky Calendar): see how Days, Months & Dates leads directly into The Sky Calendar."
    },
    "twist": {
      "prompt": "Ungraded — 'A week has seven days' (use jours):",
      "target_answer": "Une semaine a sept jours",
      "word_bank": [
        "Une",
        "semaine",
        "a",
        "sept",
        "jours",
        "Un",
        "est"
      ],
      "explanation": "la semaine (from Latin septimāna, 'group of seven') + a ('has') + sept jours."
    },
    "foreshadow": {
      "line": "Having mastered Days, Months & Dates, look ahead to Topic 17 (The -é Past), where this machinery expands into the next dimension of French thought.",
      "resolvedIn": 17
    },
    "payoff": {
      "ofLesson": 15,
      "text": "The foundation from Topic 15 (Numbers & the Four-Twenties) now pays off directly inside Days, Months & Dates: every sentence here builds on that earlier step."
    }
  },
  {
    "id": 1601,
    "slug": "lesson-1601",
    "title": "The Sky Calendar",
    "subtitle": "lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche — the Roman planetary week.",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "lundi",
      "mardi",
      "mercredi",
      "jeudi",
      "vendredi",
      "samedi",
      "dimanche",
      "semaine"
    ],
    "table_word_ids": [
      "lundi",
      "mardi",
      "mercredi",
      "jeudi",
      "vendredi"
    ],
    "hook": {
      "title": "Walking the Planetary Week From Moon to Sun",
      "content": "The first five weekdays end in -di (Latin diēs 'day') after the Moon (lundi), Mars (mardi), Mercury (mercredi), Jupiter/Jove (jeudi), and Venus (vendredi). Then samedi puts -di at the end of Sabbath, and dimanche opens with di- (Dominica, the Lord's Day)!",
      "footnotes": [
        {
          "marker": "1",
          "title": "How to remember jeudi (Thursday) vs. mardi (Tuesday) and mercredi (Wednesday)",
          "content": "Mercredi has three syllables like Wed-nes-day (both sit in the middle of the week); jeudi starts with J like Jupiter/Jove (the Roman Thor)!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "lundi (On Monday) vs. le lundi (Every Monday)",
      "content": "Use the bare weekday for a single day (On se voit jeudi), and place le in front for a weekly routine (le lundi = 'every Monday').",
      "linguist_note": "Latin planetary week calqued Hellenistic astrological day names.",
      "trap_note": "Remember: never capitalize French weekdays in the middle of a sentence!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match all seven French weekdays in calendar order:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "lundi & mardi",
            "german": "Monday & Tuesday"
          },
          {
            "id": "p2",
            "english": "mercredi",
            "german": "Wednesday"
          },
          {
            "id": "p3",
            "english": "jeudi",
            "german": "Thursday"
          },
          {
            "id": "p4",
            "english": "vendredi",
            "german": "Friday"
          },
          {
            "id": "p5",
            "english": "samedi & dimanche",
            "german": "Saturday & Sunday"
          }
        ],
        "target_answer": "Monday & Tuesday, Wednesday, Thursday, Friday, Saturday & Sunday",
        "meaning": "lundi & mardi, mercredi, jeudi, vendredi, samedi & dimanche",
        "explanation": "lundi through samedi end in -di; dimanche starts with di-.",
        "id": "fr1601_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'I arrive on Friday' vs. 'I work on Fridays (every Friday)'?",
        "options": [
          "J'arrive vendredi / Je travaille le vendredi",
          "J'arrive le vendredi / Je travaille vendredi",
          "J'arrive sur vendredi / Je travaille chaque le vendredi"
        ],
        "target_answer": "J'arrive vendredi / Je travaille le vendredi",
        "meaning": "Bare weekday = this Friday; le + weekday = every Friday",
        "explanation": "le before a weekday turns a single day into a weekly habit.",
        "id": "fr1601_e2"
      },
      {
        "type": "derive",
        "prompt": "Write the French weekday named after Jupiter/Jove ('Thursday'):",
        "english_hint": "Jove + di",
        "target_answer": "jeudi",
        "meaning": "Thursday",
        "explanation": "Latin Iovis diēs → jeudi.",
        "id": "fr1601_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "we are going to the cinema on Saturday (use On va)",
        "cues": [
          "We go to the cinema → On va au cinéma + Saturday → samedi"
        ],
        "idea_parts": [
          "clause → On va au cinéma",
          "bare weekday → samedi"
        ],
        "target_answer": "On va au cinéma samedi",
        "meaning": "We're going to the cinema on Saturday",
        "word_bank": [
          "On",
          "va",
          "au",
          "cinéma",
          "samedi",
          "sur",
          "dimanche"
        ],
        "explanation": "samedi stands bare at the end with no preposition.",
        "diagnosis": {
          "slip": "added a preposition before samedi",
          "cue": "Keep samedi bare for 'on Saturday'."
        },
        "id": "fr1601_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Le dimanche, le restaurant est fermé",
        "replays": 2,
        "target_answer": "Le dimanche, le restaurant est fermé",
        "meaning": "On Sundays, the restaurant is closed",
        "cues": [
          "Le dimanche",
          "le restaurant est fermé"
        ],
        "explanation": "Le dimanche = 'on Sundays / every Sunday'.",
        "affirmation": "You used Le dimanche for the weekly schedule.",
        "id": "fr1601_e5"
      }
    ],
    "summary": {
      "outcome": "Use all seven weekdays in single-event and habitual (le + weekday) schedules.",
      "use_example": {
        "german": "On se voit mercredi ou jeudi ?",
        "english": "Shall we see each other Wednesday or Thursday?"
      },
      "takeaway": "Five Roman gods + Sabbath + Lord's Day = the French week.",
      "curiosity_teaser": "Up next on Le Pont ([1602] En janvier Gym): see how The Sky Calendar leads directly into En janvier Gym."
    }
  },
  {
    "id": 1602,
    "slug": "lesson-1602",
    "title": "En janvier Gym",
    "subtitle": "Months with en (en janvier, en juillet), dates with le, and aujourd'hui / demain / hier.",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "janvier",
      "juillet",
      "aujourdhui",
      "demain",
      "hier",
      "semaine",
      "en_pron"
    ],
    "table_word_ids": [
      "janvier",
      "juillet",
      "aujourdhui",
      "demain",
      "hier"
    ],
    "hook": {
      "title": "Months with en, Dates with le, and the Time Anchors",
      "content": "To say 'in [Month]', always use en: en janvier, en juillet. To state a date, use le + cardinal number + month: le quatorze juillet ('July 14th').",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why only the 1st of the month uses an ordinal (le premier)",
          "content": "French uses le premier ('the first') ONLY on the 1st (le premier janvier), and switches to plain cardinal numbers for the 2nd through the 31st (le deux janvier, le quatorze juillet)!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "en + Month; le + Number + Month",
      "content": "Pair months with en and dates with le, anchored by hier ('yesterday'), aujourd'hui ('today'), and demain ('tomorrow').",
      "linguist_note": "Cardinal numerals for dates (except premier) replaced Old French ordinals from the 16th century onward.",
      "trap_note": "Never say *dans janvier for 'in January' — use en janvier and le quatorze juillet!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each calendar expression with its French structure:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "in January",
            "german": "en janvier"
          },
          {
            "id": "p2",
            "english": "in July",
            "german": "en juillet"
          },
          {
            "id": "p3",
            "english": "on July 14th (cardinal number!)",
            "german": "le quatorze juillet"
          },
          {
            "id": "p4",
            "english": "yesterday / today / tomorrow",
            "german": "hier / aujourd'hui / demain"
          }
        ],
        "target_answer": "en janvier, en juillet, le quatorze juillet, hier / aujourd'hui / demain",
        "meaning": "in January, in July, on July 14th (cardinal number!), yesterday / today / tomorrow",
        "explanation": "Months take en; specific dates take le + cardinal number.",
        "id": "fr1602_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'in January' vs. 'on January 10th'?",
        "options": [
          "en janvier / le dix janvier",
          "dans janvier / le dix de janvier",
          "en janvier / le dixième janvier"
        ],
        "target_answer": "en janvier / le dix janvier",
        "meaning": "en + month; le + number + month (with no 'de'!)",
        "explanation": "French puts no 'of' (de) between the number and the month: le dix janvier!",
        "id": "fr1602_e2"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the literal historical breakdown of 'aujourd'hui'?",
        "german": "aujourd'hui",
        "natural": "today",
        "options": [
          "today",
          "on-the-day of-today",
          "at the hour of now"
        ],
        "target_answer": "on-the-day of-today",
        "meaning": "Literal structure: on-the-day of-today",
        "explanation": "au ('on-the') + jour ('day') + d'hui ('of today', Latin hodiē).",
        "id": "fr1602_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "I am going to visit Paris in July",
        "cues": [
          "I am going to visit Paris → Je vais visiter Paris",
          "in July → en juillet"
        ],
        "idea_parts": [
          "near future → Je vais visiter Paris",
          "month → en juillet"
        ],
        "target_answer": "Je vais visiter Paris en juillet",
        "meaning": "I am going to visit Paris in July",
        "word_bank": [
          "Je",
          "vais",
          "visiter",
          "Paris",
          "en",
          "juillet",
          "dans",
          "la"
        ],
        "explanation": "Months always take en: en juillet.",
        "diagnosis": {
          "slip": "used dans instead of en",
          "cue": "Use en before a month: en juillet."
        },
        "id": "fr1602_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Aujourd'hui, nous sommes en janvier",
        "replays": 2,
        "target_answer": "Aujourd'hui, nous sommes en janvier",
        "meaning": "Today, we are in January",
        "cues": [
          "Aujourd'hui",
          "nous sommes en janvier"
        ],
        "explanation": "en janvier = 'in January'.",
        "affirmation": "You spelled Aujourd'hui and en janvier accurately.",
        "id": "fr1602_e5"
      }
    ],
    "summary": {
      "outcome": "Express months with en, dates with le + number + month, and anchor timelines with hier, aujourd'hui, demain.",
      "use_example": {
        "german": "Mon frère est né en juillet.",
        "english": "My brother was born in July."
      },
      "takeaway": "en + month ('en juillet'); le + number + month ('le quatorze juillet').",
      "curiosity_teaser": "Up next on Le Pont ([17] The -é Past): see how En janvier Gym leads directly into The -é Past."
    }
  },
  {
    "id": 17,
    "slug": "the-e-past",
    "title": "The -é Past",
    "subtitle": "The passé composé with avoir: j'ai mangé, tu as parlé — where -é is English -ed",
    "phase": 3,
    "shift_categories": [
      "e"
    ],
    "word_ids": [
      "mangé",
      "décidé",
      "parlé",
      "trouvé",
      "donné",
      "aimé",
      "fini",
      "compris",
      "pris",
      "fait",
      "vu",
      "déjà",
      "hier"
    ],
    "table_word_ids": [
      "mangé",
      "décidé",
      "parlé",
      "trouvé",
      "donné"
    ],
    "hook": {
      "title": "One Tense for Both 'I Ate' and 'I Have Eaten'",
      "content": "English agonizes over the difference between 'I ate' and 'I have eaten'. Spoken French sweeps that distinction off the table: one single two-word past tense — le passé composé — covers BOTH! You already own the first piece: the present tense of avoir (j'ai, tu as, il a, nous avons, vous avez). For the second piece, every -er verb simply swaps -er for -é (pronounced /e/, the exact same sound as the infinitive!): parler → parlé ('spoken'), manger → mangé ('eaten'), décider → décidé ('decided').",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why -é and -er sound 100% identical",
          "content": "Both -er (/e/) and -é (/e/) lost their final Latin consonants (parlāre → parler, parlātum → parlé). Your ear tells them apart purely by what sits in front of them: je veux parler (after a verb) vs j'ai parlé (after avoir)!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "avoir + Participle (-é, -i, -u)",
      "content": "Three quick rules give you the participles: (1) Every -er verb turns into -é (mangé, parlé, trouvé, donné, aimé, confirmé, réservé). (2) Regular -ir verbs drop the r to end in -i (finir → fini, choisir → choisi). (3) Common irregulars end in -u or -is/-it: voir → vu (as in déjà vu 'already seen'!), prendre/comprendre → pris/compris, faire → fait. And where do ne...pas and déjà go? Right around the auxiliary avoir: Je n'ai pas compris. J'ai déjà mangé!",
      "linguist_note": "Latin habēre + perfect passive participle grammaticalized across Western Romance into the primary conversational past.",
      "trap_note": "The shortcut your mind will offer: dropping avoir and saying *Je mangé to translate English 'I ate'. Spoken French ALWAYS builds the past with two words: J'ai mangé!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each past participle with its English meaning and pattern:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "mangé (-er → -é)",
            "german": "eaten / ate"
          },
          {
            "id": "p2",
            "english": "fini (-ir → -i)",
            "german": "finished"
          },
          {
            "id": "p3",
            "english": "vu (as in déjà vu)",
            "german": "seen / saw"
          },
          {
            "id": "p4",
            "english": "compris (prendre family)",
            "german": "understood"
          },
          {
            "id": "p5",
            "english": "fait (Latin factum)",
            "german": "done / made"
          }
        ],
        "target_answer": "eaten / ate, finished, seen / saw, understood, done / made",
        "meaning": "mangé (-er → -é), fini (-ir → -i), vu (as in déjà vu), compris (prendre family), fait (Latin factum)",
        "explanation": "Every -er verb takes -é; -ir takes -i; voir gives vu; comprendre gives compris; faire gives fait.",
        "id": "fr17_e1"
      },
      {
        "type": "morpheme_tiles",
        "prompt": "Build 'I spoke / I have spoken' using avoir + the -é participle of parler:",
        "tile_options": [
          "J'",
          "ai",
          "parlé",
          "parler",
          "suis"
        ],
        "target_answer": "J'aiparlé",
        "meaning": "J'ai parlé (I spoke / I have spoken)",
        "explanation": "J'ai + parlé covers both 'I spoke' and 'I have spoken'.",
        "id": "fr17_e2"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the word-for-word structure of 'J'ai déjà vu ce film'?",
        "german": "J'ai déjà vu ce film",
        "natural": "I already saw this movie",
        "options": [
          "I already saw this movie",
          "I have already seen this film",
          "I already saw that film"
        ],
        "target_answer": "I have already seen this film",
        "meaning": "Literal structure: I have already seen this film",
        "explanation": "Even when English uses simple past 'I already saw', French uses 'I have already seen' (J'ai déjà vu).",
        "id": "fr17_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "yesterday I ate the cake",
        "cues": [
          "Yesterday, I have eaten the cake → Hier, j'ai mangé le gâteau"
        ],
        "idea_parts": [
          "time marker → Hier",
          "auxiliary + participle → j'ai mangé",
          "object → le gâteau"
        ],
        "target_answer": "Hier, j'ai mangé le gâteau",
        "meaning": "Yesterday, I ate the cake",
        "word_bank": [
          "Hier",
          "j'ai",
          "mangé",
          "le",
          "gâteau",
          "je",
          "manger"
        ],
        "explanation": "Hier, j'ai mangé le gâteau uses two words (j'ai mangé) for English 'I ate'.",
        "diagnosis": {
          "slip": "omitted j'ai or used infinitive manger",
          "cue": "Always pair j'ai with the -é participle: j'ai mangé."
        },
        "id": "fr17_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Tu as compris la question",
        "replays": 2,
        "target_answer": "Tu as compris la question",
        "meaning": "Did you understand the question?",
        "cues": [
          "auxiliary: Tu as",
          "participle: compris",
          "object: la question"
        ],
        "explanation": "Tu as compris translates both 'Did you understand?' and 'Have you understood?'.",
        "affirmation": "You heard Tu as compris and la question cleanly.",
        "id": "fr17_e5"
      }
    ],
    "summary": {
      "outcome": "Form the passé composé with avoir + participle (-é, -i, vu, compris, fait) to narrate completed past actions.",
      "use_example": {
        "german": "Hier, j'ai parlé avec mon ami et j'ai compris.",
        "english": "Yesterday, I spoke with my friend and I understood."
      },
      "takeaway": "One two-word tense (avoir + participle) does the job of both 'I did' and 'I have done'.",
      "curiosity_teaser": "Up next on Le Pont ([1701] Participle Twins): see how The -é Past leads directly into Participle Twins."
    },
    "twist": {
      "prompt": "Ungraded — 'I made a reservation' (use J'ai fait):",
      "target_answer": "J'ai fait une réservation",
      "word_bank": [
        "J'ai",
        "fait",
        "une",
        "réservation",
        "faire",
        "un"
      ],
      "explanation": "faire → fait ('done/made'): J'ai fait une réservation."
    },
    "foreshadow": {
      "line": "Having mastered The -é Past, look ahead to Topic 18 (Motion Takes être), where this machinery expands into the next dimension of French thought.",
      "resolvedIn": 18
    },
    "payoff": {
      "ofLesson": 16,
      "text": "The foundation from Topic 16 (Days, Months & Dates) now pays off directly inside The -é Past: every sentence here builds on that earlier step."
    }
  },
  {
    "id": 1701,
    "slug": "lesson-1701",
    "title": "Participle Twins",
    "subtitle": "mangé, décidé, parlé, trouvé, donné, aimé, fini, compris, pris, vu — the -é/-i/-u participle system.",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "mangé",
      "décidé",
      "parlé",
      "trouvé",
      "donné",
      "aimé",
      "fini",
      "compris",
      "pris",
      "fait",
      "vu"
    ],
    "table_word_ids": [
      "mangé",
      "décidé",
      "parlé",
      "trouvé",
      "donné"
    ],
    "hook": {
      "title": "The Three Participle Families: -é, -i, and the Short Irregulars",
      "content": "Over 85% of verbs end in -er and swap -er for -é (mangé, décidé, parlé, trouvé, donné, aimé). Regular -ir verbs swap -ir for -i (finir → fini). And the four ultra-common irregulars give you short participles inside English cognates: fait ('done/made' ↔ fact), pris / compris ('taken/understood' ↔ prize/comprised), and vu ('seen' ↔ déjà vu)!",
      "footnotes": [
        {
          "marker": "1",
          "title": "How English 'déjà vu' teaches you voir's participle for free",
          "content": "'déjà vu' is literally French for 'already seen' (déjà + vu, the past participle of voir 'to see')!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "J'ai + Participle (-é / -i / fait / pris / compris / vu)",
      "content": "Drill the high-frequency participles with j'ai, tu as, il a, nous avons, vous avez.",
      "linguist_note": "Weak participles (-é, -i, -u) contrast with Latin sigmatic/dental survivors (pris, fait).",
      "trap_note": "Never use the bare participle without avoir (*Je compris, *Je vu) — always include the auxiliary: J'ai compris, J'ai vu!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each infinitive with its past participle and English cognate clue:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "parler / trouver (-er → -é)",
            "german": "parlé / trouvé (trove)"
          },
          {
            "id": "p2",
            "english": "finir / choisir (-ir → -i)",
            "german": "fini / choisi"
          },
          {
            "id": "p3",
            "english": "faire (to do/make)",
            "german": "fait (fact / feat)"
          },
          {
            "id": "p4",
            "english": "prendre / comprendre",
            "german": "pris / compris (prize / comprised)"
          },
          {
            "id": "p5",
            "english": "voir (to see)",
            "german": "vu (déjà vu)"
          }
        ],
        "target_answer": "parlé / trouvé (trove), fini / choisi, fait (fact / feat), pris / compris (prize / comprised), vu (déjà vu)",
        "meaning": "parler / trouver (-er → -é), finir / choisir (-ir → -i), faire (to do/make), prendre / comprendre, voir (to see)",
        "explanation": "Once you know -é, -i, fait, pris/compris, and vu, you can form 95% of spoken past sentences.",
        "id": "fr1701_e1"
      },
      {
        "type": "reverse_cognate",
        "prompt": "French trouvé ('found', participle of trouver) gave English which word for a 'treasure found'?",
        "target_answer": "trove",
        "meaning": "treasure trove ↔ trouvé ('found')",
        "explanation": "A 'treasure trove' is literally Old French trésor trové ('treasure found')!",
        "id": "fr1701_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'I have already seen this film / I already saw this film'?",
        "options": [
          "J'ai déjà vu ce film",
          "Je déjà vu ce film",
          "J'ai vu déjà ce film"
        ],
        "target_answer": "J'ai déjà vu ce film",
        "meaning": "I have already seen this film",
        "explanation": "Short adverbs like déjà sit right between the auxiliary (ai) and the participle (vu)!",
        "id": "fr1701_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "I found the house and I took a coffee",
        "cues": [
          "I found the house → J'ai trouvé la maison",
          "and I took/had a coffee → et j'ai pris un café"
        ],
        "idea_parts": [
          "first past action → J'ai trouvé la maison",
          "second past action → et j'ai pris un café"
        ],
        "target_answer": "J'ai trouvé la maison et j'ai pris un café",
        "meaning": "I found the house and had a coffee",
        "word_bank": [
          "J'ai",
          "trouvé",
          "la",
          "maison",
          "et",
          "j'ai",
          "pris",
          "un",
          "café",
          "prendre",
          "le"
        ],
        "explanation": "Both verbs repeat their auxiliary (J'ai trouvé... et j'ai pris).",
        "diagnosis": {
          "slip": "omitted the second j'ai",
          "cue": "Use J'ai trouvé and j'ai pris."
        },
        "id": "fr1701_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Nous avons déjà fini le travail",
        "replays": 2,
        "target_answer": "Nous avons déjà fini le travail",
        "meaning": "We have already finished the work",
        "cues": [
          "Nous avons déjà fini",
          "le travail"
        ],
        "explanation": "déjà slots between avons and fini.",
        "affirmation": "You placed déjà right inside the verb bracket!",
        "id": "fr1701_e5"
      }
    ],
    "summary": {
      "outcome": "Produce -é, -i, fait, pris, compris, and vu participles with avoir and slot déjà between auxiliary and participle.",
      "use_example": {
        "german": "J'ai déjà pris mon billet et j'ai fait ma valise.",
        "english": "I already got my ticket and packed my suitcase."
      },
      "takeaway": "Short adverbs like déjà sit between avoir and the participle: J'ai déjà vu.",
      "curiosity_teaser": "Up next on Le Pont ([1702] Hier j'ai… Story Drills): see how Participle Twins leads directly into Hier j'ai… Story Drills."
    }
  },
  {
    "id": 1702,
    "slug": "lesson-1702",
    "title": "Hier j'ai… Story Drills",
    "subtitle": "Narrate a past day in passé composé sentences with avoir.",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "mangé",
      "parlé",
      "visiter",
      "trouvé",
      "aimé",
      "pris",
      "fait",
      "vu",
      "hier",
      "avec"
    ],
    "table_word_ids": [
      "mangé",
      "parlé",
      "visiter",
      "trouvé",
      "aimé"
    ],
    "hook": {
      "title": "Narrating a Full Day in the Passé Composé",
      "content": "Every converted verb from Topic 3's -ation engine (visiter, confirmer, organiser, réserver, célébrer, préparer) forms its past participle in -é (visité, confirmé, organisé, réservé, célébré, préparé) — and sounds 100% identical to its infinitive!",
      "footnotes": [
        {
          "marker": "1",
          "title": "How context distinguishes j'ai visité (/vizite/) from je vais visiter (/vizite/)",
          "content": "Because visité and visiter are both pronounced /vizite/, the auxiliary in front of it does 100% of the time-travel work: je vais visiter (future) vs. j'ai visité (past)!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "The Auxiliary Is the Time Machine: je vais /vizite/ vs. j'ai /vizite/",
      "content": "In writing, after je veux / je vais write -er (visiter); after avoir (j'ai / tu as) write -é (visité)!",
      "linguist_note": "Homophony of -er (/e/), -é (/e/), and -ez (/e/) makes pre-verbal auxiliaries the primary carriers of tense.",
      "trap_note": "Remember: after a conjugated verb (je veux / je vais), write -er; after avoir (j'ai / nous avons), write -é!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Contrast the written endings of /vizite/ and /paʁle/ by what precedes them:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "After je veux / je vais (infinitive)",
            "german": "visiter / parler (-er)"
          },
          {
            "id": "p2",
            "english": "After j'ai / tu as / nous avons (participle)",
            "german": "visité / parlé (-é)"
          },
          {
            "id": "p3",
            "english": "After vous in the present (2nd pl.)",
            "german": "visitez / parlez (-ez)"
          }
        ],
        "target_answer": "visiter / parler (-er), visité / parlé (-é), visitez / parlez (-ez)",
        "meaning": "After je veux / je vais (infinitive), After j'ai / tu as / nous avons (participle), After vous in the present (2nd pl.)",
        "explanation": "All three endings (-er, -é, -ez) sound like /e/!",
        "id": "fr1702_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Choose the correct written pair for 'I am going to reserve' vs. 'I reserved':",
        "options": [
          "Je vais réserver / J'ai réservé",
          "Je vais réservé / J'ai réserver",
          "Je vais réserver / J'ai réserver"
        ],
        "target_answer": "Je vais réserver / J'ai réservé",
        "meaning": "After vais → -er infinitive; after ai → -é participle",
        "explanation": "Both sound like /ʁezɛʁve/, but vais takes -er and ai takes -é!",
        "id": "fr1702_e2"
      },
      {
        "type": "derive",
        "prompt": "Write the past sentence: 'Yesterday, I visited Paris' (Hier, j'ai + visit + Paris):",
        "english_hint": "after j'ai, write -é",
        "target_answer": "Hier, j'ai visité Paris",
        "meaning": "Yesterday, I visited Paris",
        "explanation": "After j'ai, visiter wears its -é participle ending: visité.",
        "id": "fr1702_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "yesterday I spoke with my friend and we ate at the restaurant",
        "cues": [
          "Yesterday I spoke with my friend → Hier, j'ai parlé avec mon ami",
          "and we ate at the restaurant → et nous avons mangé au restaurant"
        ],
        "idea_parts": [
          "first event → Hier, j'ai parlé avec mon ami",
          "second event → et nous avons mangé au restaurant"
        ],
        "target_answer": "Hier, j'ai parlé avec mon ami et nous avons mangé au restaurant",
        "meaning": "Yesterday, I spoke with my friend and we ate at the restaurant",
        "word_bank": [
          "Hier",
          "j'ai",
          "parlé",
          "avec",
          "mon",
          "ami",
          "et",
          "nous",
          "avons",
          "mangé",
          "au",
          "restaurant",
          "parler",
          "la"
        ],
        "explanation": "Both parlé and mangé take -é after avoir.",
        "diagnosis": {
          "slip": "wrote -er instead of -é",
          "cue": "After j'ai and nous avons, write parlé and mangé with -é."
        },
        "id": "fr1702_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "J'ai préparé le dîner et j'ai invité mes amis",
        "replays": 2,
        "target_answer": "J'ai préparé le dîner et j'ai invité mes amis",
        "meaning": "I prepared dinner and invited my friends",
        "cues": [
          "J'ai préparé le dîner",
          "et j'ai invité mes amis"
        ],
        "explanation": "Two -ation engine verbs in the past: préparé and invité.",
        "affirmation": "You wrote -é on both préparé and invité after j'ai!",
        "id": "fr1702_e5"
      }
    ],
    "summary": {
      "outcome": "Narrate sequences of past events with avoir and distinguish homophonous -er, -é, and -ez in writing.",
      "use_example": {
        "german": "Hier, j'ai réservé une table et nous avons célébré.",
        "english": "Yesterday, I reserved a table and we celebrated."
      },
      "takeaway": "In speech, je vais /vizite/ and j'ai /vizite/ differ only by vais vs. ai; in writing, vais takes -er and ai takes -é.",
      "curiosity_teaser": "Up next on Le Pont ([18] Motion Takes être): see how Hier j'ai… Story Drills leads directly into Motion Takes être."
    }
  },
  {
    "id": 18,
    "slug": "motion-takes-etre",
    "title": "Motion Takes être",
    "subtitle": "je suis allé(e), elle est venue, il est parti — the motion verbs that take être in the past and agree like adjectives",
    "phase": 3,
    "shift_categories": [
      "e"
    ],
    "word_ids": [
      "allé",
      "arrivé",
      "venu",
      "parti",
      "sorti",
      "monté",
      "descendu",
      "resté",
      "tombé",
      "né",
      "être",
      "suis"
    ],
    "table_word_ids": [
      "allé",
      "arrivé",
      "venu",
      "parti",
      "sorti"
    ],
    "hook": {
      "title": "Why 'I Went' Is Literally 'I Am Gone'",
      "content": "Think of old English sentences like 'He is risen', 'The summer is gone', or 'Babylon is fallen'. Why did English use 'is' instead of 'has' there? Because those verbs don't act on an outside object — they change the state or location of the speaker! French kept that exact rule for a cozy house of whole-body motion and doorway verbs: aller (allé 'gone'), venir (venu 'come'), arriver (arrivé 'arrived'), partir (parti 'left'), sortir (sorti 'gone out'), monter (monté 'gone up'), descendre (descendu 'gone down'), rester (resté 'stayed'), tomber (tombé 'fallen'), and naître (né 'born').",
      "footnotes": [
        {
          "marker": "1",
          "title": "Picture a house with a front door and stairs",
          "content": "Instead of memorizing an acronym like DR & MRS VANDERTRAMP, picture one house: you approach it (aller/venir), cross the threshold (arriver/partir, entrer/sortir), take the stairs (monter/descendre, tomber), stay inside (rester), and live your life cycle (naître/mourir)!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Inside the être House, the Participle Wears Gender and Number",
      "content": "Because je suis allé literally means 'I am gone', the participle behaves just like an adjective after être! If the speaker is a woman, she writes an extra silent -e: Je suis allée, elle est venue, elle est partie. If the subject is plural, add a silent -s: Nous sommes arrivés (or -es for a group of women: Elles sont arrivées). In sound, allé, allée, allés, allées are 100% identical (/ale/) — only your pen adds the badge!",
      "linguist_note": "Intransitive unaccusative verbs in Latin (nātus sum, reversus sum) formed their perfect with esse and agreed with the subject; French and Italian preserved this split auxiliary system.",
      "trap_note": "The shortcut your mind will offer: saying *J'ai allé for 'I went'. Motion-and-doorway verbs ALWAYS take être: Je suis allé(e)!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each être-house past participle with its opposite partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "allé (gone)",
            "german": "venu (come)"
          },
          {
            "id": "p2",
            "english": "arrivé (arrived)",
            "german": "parti (left / departed)"
          },
          {
            "id": "p3",
            "english": "monté (gone up)",
            "german": "descendu (gone down)"
          },
          {
            "id": "p4",
            "english": "sorti (gone out)",
            "german": "resté (stayed)"
          },
          {
            "id": "p5",
            "english": "né (born)",
            "german": "tombé (fallen)"
          }
        ],
        "target_answer": "venu (come), parti (left / departed), descendu (gone down), resté (stayed), tombé (fallen)",
        "meaning": "allé (gone), arrivé (arrived), monté (gone up), sorti (gone out), né (born)",
        "explanation": "Notice how the être house is organized in natural spatial pairs!",
        "id": "fr18_e1"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the literal word-for-word structure of 'Elle est arrivée hier'?",
        "german": "Elle est arrivée hier",
        "natural": "She arrived yesterday",
        "options": [
          "She arrived yesterday",
          "She is arrived yesterday",
          "She has arrived yesterday"
        ],
        "target_answer": "She is arrived yesterday",
        "meaning": "Literal structure: She is arrived yesterday",
        "explanation": "Because arriver is an être-house motion verb, French says 'She is arrived' with feminine -e on arrivée.",
        "id": "fr18_e2"
      },
      {
        "type": "shift_select",
        "prompt": "Marie is speaking: how does she write 'I went to the café'?",
        "options": [
          "Je suis allée au café",
          "J'ai allé au café",
          "Je suis allé au café"
        ],
        "target_answer": "Je suis allée au café",
        "meaning": "I went to the café (female speaker)",
        "explanation": "aller takes être (je suis), and a female speaker adds feminine -e: allée.",
        "id": "fr18_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "she came with her brother",
        "cues": [
          "She came (is come, feminine) → Elle est venue + with her brother → avec son frère"
        ],
        "idea_parts": [
          "subject + être auxiliary → Elle est",
          "feminine participle → venue",
          "companion → avec son frère"
        ],
        "target_answer": "Elle est venue avec son frère",
        "meaning": "She came with her brother",
        "word_bank": [
          "Elle",
          "est",
          "venue",
          "avec",
          "son",
          "frère",
          "a",
          "venu"
        ],
        "explanation": "venir takes être, and elle adds feminine -e to venu → venue.",
        "diagnosis": {
          "slip": "used a instead of est or forgot -e on venue",
          "cue": "venir takes être and agrees with Elle: Elle est venue."
        },
        "id": "fr18_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Il est parti ce matin",
        "replays": 2,
        "target_answer": "Il est parti ce matin",
        "meaning": "He left this morning",
        "cues": [
          "He is left: Il est parti",
          "this morning: ce matin"
        ],
        "explanation": "partir takes être: Il est parti.",
        "affirmation": "You used est parti and ce matin cleanly.",
        "id": "fr18_e5"
      }
    ],
    "summary": {
      "outcome": "Form the passé composé of motion and doorway verbs using être and agree the participle with the subject in writing.",
      "use_example": {
        "german": "Je suis allé à la gare et elle est venue avec moi.",
        "english": "I went to the station and she came with me."
      },
      "takeaway": "Whole-body motion and doorway verbs take être ('I am gone'), and their participle agrees with the traveller.",
      "curiosity_teaser": "Up next on Le Pont ([1801] The être House): see how Motion Takes être leads directly into The être House."
    },
    "twist": {
      "prompt": "Ungraded — 'We stayed here' (masculine plural: Nous sommes restés):",
      "target_answer": "Nous sommes restés ici",
      "word_bank": [
        "Nous",
        "sommes",
        "restés",
        "ici",
        "avons",
        "resté"
      ],
      "explanation": "rester ('to stay') lives in the être house, and plural nous adds -s to restés."
    },
    "foreshadow": {
      "line": "Having mastered Motion Takes être, look ahead to Topic 19 (The Storytelling Past), where this machinery expands into the next dimension of French thought.",
      "resolvedIn": 19
    },
    "payoff": {
      "ofLesson": 17,
      "text": "The foundation from Topic 17 (The -é Past) now pays off directly inside Motion Takes être: every sentence here builds on that earlier step."
    }
  },
  {
    "id": 1801,
    "slug": "lesson-1801",
    "title": "The être House",
    "subtitle": "allé, arrivé, venu, parti, sorti, monté, descendu, resté, tombé, né — the doorway-and-motion verb house.",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "allé",
      "arrivé",
      "venu",
      "parti",
      "sorti",
      "monté",
      "descendu",
      "resté",
      "tombé",
      "né",
      "être"
    ],
    "table_word_ids": [
      "allé",
      "arrivé",
      "venu",
      "parti",
      "sorti"
    ],
    "hook": {
      "title": "Touring the être House: Opposite Pairs of Motion",
      "content": "The verbs that take être in the past live together in natural opposite pairs inside one house: aller ↔ venir (allé / venu), arriver ↔ partir (arrivé / parti), entrer ↔ sortir (entré / sorti), monter ↔ descendre (monté / descendu), plus rester (resté), tomber (tombé), and naître (né)!",
      "footnotes": [
        {
          "marker": "1",
          "title": "How prefixed cousins of venir also live in the être house",
          "content": "revenir ('to come back') and devenir ('to become') are built on venir, so they take être too: je suis revenu, il est devenu!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "avoir for Outside Action; être for Whole-Body Motion & Doorways",
      "content": "Use être (je suis, tu es, il est, nous sommes, vous êtes, ils sont) for whole-body motion and doorway verbs.",
      "linguist_note": "Unaccusative motion/change-of-state verbs select être across all compound tenses in French.",
      "trap_note": "Remember: aller, venir, arriver, partir, entrer, sortir, rester, tomber, naître all take être in the past!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each être-house verb pair in the passé composé:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "je suis allé (I went)",
            "german": "je suis venu (I came)"
          },
          {
            "id": "p2",
            "english": "il est arrivé (he arrived)",
            "german": "il est parti (he left)"
          },
          {
            "id": "p3",
            "english": "il est entré (he went in)",
            "german": "il est sorti (he went out)"
          },
          {
            "id": "p4",
            "english": "il est monté (he went up)",
            "german": "il est descendu (he went down)"
          },
          {
            "id": "p5",
            "english": "il est resté (he stayed)",
            "german": "il est tombé (he fell)"
          }
        ],
        "target_answer": "je suis venu (I came), il est parti (he left), il est sorti (he went out), il est descendu (he went down), il est tombé (he fell)",
        "meaning": "je suis allé (I went), il est arrivé (he arrived), il est entré (he went in), il est monté (he went up), il est resté (he stayed)",
        "explanation": "Every verb in these opposite pairs takes être in the past.",
        "id": "fr1801_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'I came back yesterday' using 'revenir' (built on venir)?",
        "options": [
          "Je suis revenu hier",
          "J'ai revenu hier",
          "Je suis revenir hier"
        ],
        "target_answer": "Je suis revenu hier",
        "meaning": "I came back yesterday",
        "explanation": "revenir belongs to the venir family, so it takes être: Je suis revenu!",
        "id": "fr1801_e2"
      },
      {
        "type": "derive",
        "prompt": "Write 'He was born in Paris' using être + né + à Paris:",
        "english_hint": "Il est + né + à Paris",
        "target_answer": "Il est né à Paris",
        "meaning": "He was born in Paris",
        "explanation": "naître ('to be born') takes present-tense est + né: Il est né à Paris.",
        "id": "fr1801_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "we arrived this morning and we stayed here (masculine plural)",
        "cues": [
          "We arrived this morning → Nous sommes arrivés ce matin",
          "and we stayed here → et nous sommes restés ici"
        ],
        "idea_parts": [
          "first motion → Nous sommes arrivés ce matin",
          "second state → et nous sommes restés ici"
        ],
        "target_answer": "Nous sommes arrivés ce matin et nous sommes restés ici",
        "meaning": "We arrived this morning and stayed here",
        "word_bank": [
          "Nous",
          "sommes",
          "arrivés",
          "ce",
          "matin",
          "et",
          "nous",
          "sommes",
          "restés",
          "ici",
          "avons",
          "la"
        ],
        "explanation": "Both arriver and rester take être (Nous sommes), with plural -s.",
        "diagnosis": {
          "slip": "used avons instead of sommes",
          "cue": "Both arriver and rester take être."
        },
        "id": "fr1801_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Je suis sorti de l'hôtel et je suis allé à la gare",
        "replays": 2,
        "target_answer": "Je suis sorti de l'hôtel et je suis allé à la gare",
        "meaning": "I left the hotel and went to the station",
        "cues": [
          "Je suis sorti de l'hôtel",
          "et je suis allé à la gare"
        ],
        "explanation": "sortir and aller both take je suis in the past.",
        "affirmation": "You paired both motion verbs with je suis!",
        "id": "fr1801_e5"
      }
    ],
    "summary": {
      "outcome": "Recall the être-house verbs in opposite pairs and form their past with être.",
      "use_example": {
        "german": "Il est entré, il est resté cinq minutes, et il est reparti.",
        "english": "He came in, stayed five minutes, and left again."
      },
      "takeaway": "Remember the être house in opposite pairs: go/come, arrive/leave, enter/exit, up/down.",
      "curiosity_teaser": "Up next on Le Pont ([1802] Agreement Drills): see how The être House leads directly into Agreement Drills."
    }
  },
  {
    "id": 1802,
    "slug": "lesson-1802",
    "title": "Agreement Drills",
    "subtitle": "allée, allés, allées: why participles wear gender and plural agreements only inside the être house.",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "allé",
      "arrivé",
      "venu",
      "parti",
      "sorti",
      "resté",
      "être",
      "suis",
      "elle",
      "nous",
      "vous"
    ],
    "table_word_ids": [
      "allé",
      "arrivé",
      "venu",
      "parti",
      "sorti"
    ],
    "hook": {
      "title": "Participle Agreement Inside the être House",
      "content": "Inside the être house, the past participle agrees with the subject in gender (-e) and number (-s): il est allé, elle est allée (+e), ils sont allés (+s), elles sont allées (+es)!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why allé, allée, allés, allées sound 100% identical (/ale/)",
          "content": "Adding -e or -s to allé, arrivé, parti, venu changes NOTHING in pronunciation — only your pen adds the agreement badge!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Same Sound in the Mouth, Gender/Number Badge on the Page",
      "content": "Add -e for a female subject and -s for a plural subject on être-house participles, while keeping avoir participles un-agreed with the subject.",
      "linguist_note": "Subject-participle agreement with être reflects the copular origin of the construction.",
      "trap_note": "Never add subject agreement to an avoir participle (*Elle a mangée is wrong!) — subject agreement belongs ONLY to the être house!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each subject with the correctly agreed written form of 'went' (allé):",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "Il est... (one man)",
            "german": "allé"
          },
          {
            "id": "p2",
            "english": "Elle est... (one woman)",
            "german": "allée (+e)"
          },
          {
            "id": "p3",
            "english": "Nous sommes... (men or mixed group)",
            "german": "allés (+s)"
          },
          {
            "id": "p4",
            "english": "Elles sont... (group of women)",
            "german": "allées (+es)"
          },
          {
            "id": "p5",
            "english": "Elle a... (with avoir: 'she ate')",
            "german": "mangé (NO agreement with subject!)"
          }
        ],
        "target_answer": "allé, allée (+e), allés (+s), allées (+es), mangé (NO agreement with subject!)",
        "meaning": "Il est... (one man), Elle est... (one woman), Nous sommes... (men or mixed group), Elles sont... (group of women), Elle a... (with avoir: 'she ate')",
        "explanation": "Only être-house participles agree with the subject!",
        "id": "fr1802_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Compare 'She went to the café' (être) vs. 'She ate at the café' (avoir). Which written pair is right?",
        "options": [
          "Elle est allée au café / Elle a mangé au café",
          "Elle est allée au café / Elle a mangée au café",
          "Elle est allé au café / Elle a mangé au café"
        ],
        "target_answer": "Elle est allée au café / Elle a mangé au café",
        "meaning": "être agrees with Elle (allée); avoir does NOT agree with Elle (mangé)!",
        "explanation": "Subject agreement happens inside the être house (allée), never on avoir participles (mangé).",
        "id": "fr1802_e2"
      },
      {
        "type": "derive",
        "prompt": "Write 'She left this morning' (Elle + est + parti with feminine agreement + ce matin):",
        "english_hint": "add -e to parti for Elle",
        "target_answer": "Elle est partie ce matin",
        "meaning": "She left this morning",
        "explanation": "parti adds feminine -e to agree with Elle: Elle est partie.",
        "id": "fr1802_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "Marie arrived yesterday and she stayed at my place",
        "cues": [
          "Marie arrived yesterday → Marie est arrivée hier",
          "and she stayed at my place → et elle est restée chez moi"
        ],
        "idea_parts": [
          "first clause → Marie est arrivée hier",
          "second clause → et elle est restée chez moi"
        ],
        "target_answer": "Marie est arrivée hier et elle est restée chez moi",
        "meaning": "Marie arrived yesterday and stayed at my place",
        "word_bank": [
          "Marie",
          "est",
          "arrivée",
          "hier",
          "et",
          "elle",
          "est",
          "restée",
          "chez",
          "moi",
          "arrivé",
          "resté"
        ],
        "explanation": "Both arrivée and restée add -e to agree with Marie / elle.",
        "diagnosis": {
          "slip": "left off feminine -e",
          "cue": "Add feminine -e to both être participles for Marie: arrivée, restée."
        },
        "id": "fr1802_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Elles sont venues avec nous hier soir",
        "replays": 2,
        "target_answer": "Elles sont venues avec nous hier soir",
        "meaning": "They (f.) came with us last night",
        "cues": [
          "Elles sont venues",
          "avec nous hier soir"
        ],
        "explanation": "venues carries both feminine -e and plural -s for Elles.",
        "affirmation": "You wrote venues with -es for Elles!",
        "id": "fr1802_e5"
      }
    ],
    "summary": {
      "outcome": "Write accurate gender and number agreements (-e, -s, -es) on être-house participles.",
      "use_example": {
        "german": "Elle est sortie, mais elle a oublié son parapluie.",
        "english": "She went out, but she forgot her umbrella."
      },
      "takeaway": "être participles agree with the subject (Elle est allée); avoir participles do not (Elle a mangé).",
      "curiosity_teaser": "Up next on Le Pont ([19] The Storytelling Past): see how Agreement Drills leads directly into The Storytelling Past."
    }
  },
  {
    "id": 19,
    "slug": "the-storytelling-past",
    "title": "The Storytelling Past",
    "subtitle": "The imparfait camera lens: c'était, j'avais, j'habitais, je voulais — ongoing background vs. completed event",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "était",
      "avais",
      "habitais",
      "voulais",
      "habiter",
      "utiliser",
      "cest",
      "avoir",
      "vouloir"
    ],
    "table_word_ids": [
      "était",
      "avais",
      "habitais",
      "voulais",
      "habiter"
    ],
    "hook": {
      "title": "The Movie Camera vs. the Snapshot",
      "content": "When you tell a story about the past, your mind uses two different cameras. One camera takes a sharp snapshot of a single completed action ('Yesterday I bought a ticket, I took the train') — that is the passé composé (j'ai pris). The second camera pans across the ongoing background scene, how things used to be, or what was happening ('It was raining, I lived in Lyon, I had a small apartment, I wanted to travel') — that is l'imparfait ('the imperfect / unfinished past')!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why every single verb in the imparfait uses the exact same endings",
          "content": "Take the nous form of ANY verb in the present (nous avons → av-, nous habitons → habit-, nous voulons → voul-) and add -ais, -ais, -ait (/ɛ/)! Only être has a special stem (ét- → c'était 'it was').",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "The Universal /ɛ/ Sound of -ais and -ait",
      "content": "Listen to how simple the singular imparfait is: j'avais ('I had'), tu avais ('you had'), il/elle avait ('he/she had') ALL end in the exact same open /ɛ/ sound! Likewise: j'habitais ('I lived / used to live'), je voulais ('I wanted'), and the superstar pointer c'était ('it was'). Whenever you combine both pasts in one sentence, the imparfait sets the ongoing stage (Quand j'habitais à Paris...) and the passé composé drops the sudden event (...j'ai rencontré Marie)!",
      "linguist_note": "Latin imperfect -ēbam/-ēbat evolved regularly into Old French -eie/-eit and modern French -ais/-ait /ɛ/.",
      "trap_note": "The shortcut your mind will offer: using C'est été or Il a été for 'It was good'. When describing how something was in the past, ALWAYS reach for C'était: C'était très bon!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each imparfait form with its ongoing past meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "c'était (from c'est)",
            "german": "it was / that was"
          },
          {
            "id": "p2",
            "english": "j'avais (from j'ai)",
            "german": "I had / used to have"
          },
          {
            "id": "p3",
            "english": "j'habitais (from j'habite)",
            "german": "I lived / was living"
          },
          {
            "id": "p4",
            "english": "je voulais (from je veux)",
            "german": "I wanted / was wanting"
          },
          {
            "id": "p5",
            "english": "il était (from il est)",
            "german": "he / it was"
          }
        ],
        "target_answer": "it was / that was, I had / used to have, I lived / was living, I wanted / was wanting, he / it was",
        "meaning": "c'était (from c'est), j'avais (from j'ai), j'habitais (from j'habite), je voulais (from je veux), il était (from il est)",
        "explanation": "Notice how -ais and -ait are pronounced identically (/ɛ/).",
        "id": "fr19_e1"
      },
      {
        "type": "shift_select",
        "prompt": "You want to say 'The coffee was very good' (describing its state/quality in the past). Which tense fits?",
        "options": [
          "Le café était très bon",
          "Le café a été très bon",
          "Le café est très bon"
        ],
        "target_answer": "Le café était très bon",
        "meaning": "The coffee was very good",
        "explanation": "Background descriptions and states in the past always take the imparfait (était).",
        "id": "fr19_e2"
      },
      {
        "type": "variant_english",
        "prompt": "Which English sentences accurately express 'J'habitais à Lyon'?",
        "german": "J'habitais à Lyon",
        "meaning": "I lived / used to live / was living in Lyon",
        "renderings": [
          "I used to live in Lyon",
          "I was living in Lyon"
        ],
        "traps": [
          "I have just moved to Lyon today",
          "I am going to live in Lyon"
        ],
        "target_answer": "I used to live in Lyon",
        "explanation": "The French imparfait covers English 'used to [verb]', 'was [verb]-ing', and ongoing past 'lived'.",
        "id": "fr19_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "it was very good and I wanted to stay",
        "cues": [
          "It was very good → C'était très bon + and I wanted to stay → et je voulais rester"
        ],
        "idea_parts": [
          "description → C'était très bon",
          "ongoing desire → et je voulais rester"
        ],
        "target_answer": "C'était très bon et je voulais rester",
        "meaning": "It was very good and I wanted to stay",
        "word_bank": [
          "C'était",
          "très",
          "bon",
          "et",
          "je",
          "voulais",
          "rester",
          "C'est",
          "la"
        ],
        "explanation": "Both c'était and je voulais paint ongoing past states, so both use the imparfait.",
        "diagnosis": {
          "slip": "used C'est instead of C'était",
          "cue": "Use C'était ('it was') and je voulais ('I wanted')."
        },
        "id": "fr19_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Quand j'habitais à Paris, j'avais un vélo",
        "replays": 2,
        "target_answer": "Quand j'habitais à Paris, j'avais un vélo",
        "meaning": "When I lived in Paris, I had a bike",
        "cues": [
          "When I lived in Paris: Quand j'habitais à Paris",
          "I had a bike: j'avais un vélo"
        ],
        "explanation": "Two ongoing past states side by side: habitais and avais.",
        "affirmation": "You caught both -ais endings on habitais and avais.",
        "id": "fr19_e5"
      }
    ],
    "summary": {
      "outcome": "Use the imparfait (-ais/-ait) for past descriptions, habits, and background scenes, and contrast it with the passé composé.",
      "use_example": {
        "german": "C'était magnifique quand nous habitions là.",
        "english": "It was wonderful when we used to live there."
      },
      "takeaway": "Passé composé is the event dot; imparfait (-ais/-ait) is the background canvas — and c'était is its king.",
      "curiosity_teaser": "Up next on Le Pont ([1901] Was & Was-Ing): see how The Storytelling Past leads directly into Was & Was-Ing."
    },
    "twist": {
      "prompt": "Ungraded — combine both pasts: 'I wanted to come, but I did not have the time' (use mais je n'avais pas le temps):",
      "target_answer": "Je voulais venir, mais je n'avais pas le temps",
      "word_bank": [
        "Je",
        "voulais",
        "venir",
        "mais",
        "je",
        "n'avais",
        "pas",
        "le",
        "temps",
        "la",
        "un"
      ],
      "explanation": "Ongoing past desire (je voulais) + ongoing past lack of time (je n'avais pas le temps)."
    },
    "foreshadow": {
      "line": "Having mastered The Storytelling Past, look ahead to Topic 20 (depuis & the Perfect Split), where this machinery expands into the next dimension of French thought.",
      "resolvedIn": 20
    },
    "payoff": {
      "ofLesson": 18,
      "text": "The foundation from Topic 18 (Motion Takes être) now pays off directly inside The Storytelling Past: every sentence here builds on that earlier step."
    }
  },
  {
    "id": 1901,
    "slug": "lesson-1901",
    "title": "Was & Was-Ing",
    "subtitle": "The -ais/-ait imparfait camera lens: c'était, il y avait, j'avais, je voulais.",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "était",
      "avais",
      "habitais",
      "voulais",
      "cest",
      "il_y_a",
      "très",
      "bon"
    ],
    "table_word_ids": [
      "était",
      "avais",
      "habitais",
      "voulais",
      "cest"
    ],
    "hook": {
      "title": "Painting the Past Background with c'était and il y avait",
      "content": "Two phrases do half the work of storytelling in French: c'était ('it was', the imparfait of c'est) and il y avait ('there was / there were', the imparfait of il y a)!",
      "footnotes": [
        {
          "marker": "1",
          "title": "How c'est → c'était and il y a → il y avait follow the exact same -ait rule",
          "content": "c'est ('it is') becomes c'était ('it was'), and il y a ('there is/are') replaces a with avait: il y avait ('there was/were')!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Present Pointer → Imparfait Pointer: c'est → c'était, il y a → il y avait",
      "content": "Use c'était for past evaluations and il y avait for what was on the scene.",
      "linguist_note": "Imperfective aspect on copular and existential constructions marks unbounded background states.",
      "trap_note": "Never use *il a eu for 'there was' — simply turn the a of il y a into avait: il y avait!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each present-tense expression with its imparfait ('was/were') counterpart:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "c'est bon (it is good)",
            "german": "c'était bon (it was good)"
          },
          {
            "id": "p2",
            "english": "il y a un café (there is a café)",
            "german": "il y avait un café (there was a café)"
          },
          {
            "id": "p3",
            "english": "j'ai le temps (I have time)",
            "german": "j'avais le temps (I had time)"
          },
          {
            "id": "p4",
            "english": "je veux partir (I want to leave)",
            "german": "je voulais partir (I wanted to leave)"
          },
          {
            "id": "p5",
            "english": "j'habite ici (I live here)",
            "german": "j'habitais ici (I used to live here)"
          }
        ],
        "target_answer": "c'était bon (it was good), il y avait un café (there was a café), j'avais le temps (I had time), je voulais partir (I wanted to leave), j'habitais ici (I used to live here)",
        "meaning": "c'est bon (it is good), il y a un café (there is a café), j'ai le temps (I have time), je veux partir (I want to leave), j'habite ici (I live here)",
        "explanation": "Every singular imparfait form ends in -ais or -ait (/ɛ/).",
        "id": "fr1901_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'There was a small restaurant here'?",
        "options": [
          "Il y avait un petit restaurant ici",
          "Il y a eu un petit restaurant ici",
          "C'était un petit restaurant ici"
        ],
        "target_answer": "Il y avait un petit restaurant ici",
        "meaning": "There was a small restaurant here",
        "explanation": "il y a becomes il y avait in the imparfait.",
        "id": "fr1901_e2"
      },
      {
        "type": "derive",
        "prompt": "Shift 'Ce n'est pas possible' ('It is not possible') into the imparfait ('It was not possible'):",
        "english_hint": "n'est pas → n'était pas",
        "target_answer": "Ce n'était pas possible",
        "meaning": "It was not possible",
        "explanation": "Ce n'était pas possible.",
        "id": "fr1901_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "it was very good and there was music (de la musique)",
        "cues": [
          "It was very good → C'était très bon",
          "and there was some music → et il y avait de la musique"
        ],
        "idea_parts": [
          "evaluation → C'était très bon",
          "scene existence → et il y avait de la musique"
        ],
        "target_answer": "C'était très bon et il y avait de la musique",
        "meaning": "It was very good and there was music",
        "word_bank": [
          "C'était",
          "très",
          "bon",
          "et",
          "il",
          "y",
          "avait",
          "de",
          "la",
          "musique",
          "a",
          "le"
        ],
        "explanation": "c'était and il y avait paint the past scene together.",
        "diagnosis": {
          "slip": "used il y a",
          "cue": "Use il y avait for 'there was'."
        },
        "id": "fr1901_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Quand j'étais jeune, j'habitais dans cette ville",
        "replays": 2,
        "target_answer": "Quand j'étais jeune, j'habitais dans cette ville",
        "meaning": "When I was young, I lived in this town",
        "cues": [
          "Quand j'étais jeune",
          "j'habitais dans cette ville"
        ],
        "explanation": "étais and habitais both carry the -ais background ending.",
        "affirmation": "You paired j'étais and j'habitais cleanly.",
        "id": "fr1901_e5"
      }
    ],
    "summary": {
      "outcome": "Set past scenes and descriptions using c'était, il y avait, j'étais, j'avais, and j'habitais.",
      "use_example": {
        "german": "C'était une belle soirée et il y avait un bon concert.",
        "english": "It was a lovely evening and there was a good concert."
      },
      "takeaway": "c'est → c'était ('it was'); il y a → il y avait ('there was/were').",
      "curiosity_teaser": "Up next on Le Pont ([1902] Imparfait vs Composé): see how Was & Was-Ing leads directly into Imparfait vs Composé."
    }
  },
  {
    "id": 1902,
    "slug": "lesson-1902",
    "title": "Imparfait vs Composé",
    "subtitle": "Background canvas (imparfait) interrupted by the event dot (passé composé).",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "était",
      "avais",
      "habitais",
      "voulais",
      "arrivé",
      "vu",
      "pris",
      "fait",
      "hier"
    ],
    "table_word_ids": [
      "était",
      "avais",
      "habitais",
      "voulais",
      "arrivé"
    ],
    "hook": {
      "title": "Weaving Background Canvas (Imparfait) and Event Dot (Passé Composé)",
      "content": "The imparfait (-ais/-ait) paints the ongoing background ('I was waiting for the train, I lived in Lyon'), and the passé composé (j'ai vu, il est arrivé) drops the specific event that happened against that background!",
      "footnotes": [
        {
          "marker": "1",
          "title": "The 'Was -ing When -ed' Formula",
          "content": "Whenever English says 'I was doing X when Y happened', X is ALWAYS the imparfait (-ais/-ait) and Y is ALWAYS the passé composé!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Ongoing Frame (-ais/-ait) + Sudden Event (avoir/être + Participle)",
      "content": "Combine an ongoing imparfait clause with a completed passé composé clause.",
      "linguist_note": "Aspectual contrast between imperfective background and perfective foreground structures Romance narrative.",
      "trap_note": "Don't put both verbs in the same tense when one action was already in progress and the other interrupted it!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each half of a past story with its French tense and role:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "Quand j'habitais à Paris... (imparfait)",
            "german": "Background frame: When I was living in Paris..."
          },
          {
            "id": "p2",
            "english": "...j'ai trouvé ce café (passé composé)",
            "german": "Completed event: ...I found this café"
          },
          {
            "id": "p3",
            "english": "Je voulais sortir... (imparfait)",
            "german": "Ongoing state: I wanted to go out..."
          },
          {
            "id": "p4",
            "english": "...mais il est arrivé (passé composé)",
            "german": "Sudden event: ...but he arrived"
          }
        ],
        "target_answer": "Background frame: When I was living in Paris..., Completed event: ...I found this café, Ongoing state: I wanted to go out..., Sudden event: ...but he arrived",
        "meaning": "Quand j'habitais à Paris... (imparfait), ...j'ai trouvé ce café (passé composé), Je voulais sortir... (imparfait), ...mais il est arrivé (passé composé)",
        "explanation": "Imparfait sets the ongoing stage; Passé composé delivers the event.",
        "id": "fr1902_e1"
      },
      {
        "type": "shift_select",
        "prompt": "In 'I was waiting for the bus when he arrived', which tense pair is right?",
        "options": [
          "J'attendais le bus quand il est arrivé",
          "J'ai attendu le bus quand il arrivait",
          "J'attendais le bus quand il arrivait"
        ],
        "target_answer": "J'attendais le bus quand il est arrivé",
        "meaning": "'was waiting' = ongoing imparfait (J'attendais); 'arrived' = completed event (il est arrivé)",
        "explanation": "Ongoing background takes imparfait; interrupting event takes passé composé.",
        "id": "fr1902_e2"
      },
      {
        "type": "variant_english",
        "prompt": "Which English sentences match 'Je voulais t'appeler, mais j'ai oublié'?",
        "german": "Je voulais t'appeler, mais j'ai oublié",
        "meaning": "I wanted to call you, but I forgot",
        "renderings": [
          "I wanted to call you, but I forgot",
          "I was meaning to call you, but I forgot"
        ],
        "traps": [
          "I called you because I wanted to forget",
          "I will call you if I don't forget"
        ],
        "target_answer": "I wanted to call you, but I forgot",
        "explanation": "je voulais expresses the ongoing past intention, and j'ai oublié expresses the completed slip.",
        "id": "fr1902_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "when I lived in Lyon I saw this film",
        "cues": [
          "When I lived in Lyon → Quand j'habitais à Lyon",
          "I saw this film → j'ai vu ce film"
        ],
        "idea_parts": [
          "background frame → Quand j'habitais à Lyon",
          "completed event → j'ai vu ce film"
        ],
        "target_answer": "Quand j'habitais à Lyon, j'ai vu ce film",
        "meaning": "When I lived in Lyon, I saw this film",
        "word_bank": [
          "Quand",
          "j'habitais",
          "à",
          "Lyon",
          "j'ai",
          "vu",
          "ce",
          "film",
          "habité",
          "la"
        ],
        "explanation": "Quand j'habitais (imparfait) + j'ai vu (passé composé).",
        "diagnosis": {
          "slip": "used j'ai habité",
          "cue": "Use Quand j'habitais à Lyon."
        },
        "id": "fr1902_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "J'avais très faim, donc j'ai pris un gâteau",
        "replays": 2,
        "target_answer": "J'avais très faim, donc j'ai pris un gâteau",
        "meaning": "I was very hungry, so I had a cake",
        "cues": [
          "J'avais très faim",
          "donc j'ai pris un gâteau"
        ],
        "explanation": "Being hungry was the ongoing state (J'avais faim); taking the cake was the action (j'ai pris).",
        "affirmation": "You contrasted J'avais faim and j'ai pris un gâteau cleanly!",
        "id": "fr1902_e5"
      }
    ],
    "summary": {
      "outcome": "Combine the imparfait (background state) and passé composé (completed event) in two-clause narratives.",
      "use_example": {
        "german": "Il faisait beau quand nous sommes sortis.",
        "english": "The weather was nice when we went out."
      },
      "takeaway": "Background state = Imparfait (-ais/-ait); Foreground action = Passé composé.",
      "curiosity_teaser": "Up next on Le Pont ([20] depuis & the Perfect Split): see how Imparfait vs Composé leads directly into depuis & the Perfect Split."
    }
  },
  {
    "id": 20,
    "slug": "depuis-and-the-perfect-split",
    "title": "depuis & the Perfect Split",
    "subtitle": "J'habite ici depuis trois ans — why French uses the present tense where English says 'I have lived here for three years'",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "depuis",
      "habiter",
      "ans",
      "semaine",
      "heure",
      "quand",
      "ici",
      "attendre"
    ],
    "table_word_ids": [
      "depuis",
      "habiter",
      "ans",
      "semaine",
      "heure"
    ],
    "hook": {
      "title": "If It Is Still True Right Now, Keep It in the Present!",
      "content": "Ask yourself: if you moved to Paris three years ago and you STILL live in Paris right now, is your living in Paris over, or is it happening at this very second? It is happening right now! English illogically drags in a past-looking tense ('I have lived here for three years'), but French tells the literal truth: J'habite ici depuis trois ans — 'I live here since three years'!",
      "footnotes": [
        {
          "marker": "1",
          "title": "How depuis means both 'since' and 'for'",
          "content": "de ('from') + puis ('then/after', Latin postius) = 'from then onward'. Whether English says 'since Monday' (depuis lundi) or 'for three years' (depuis trois ans), French uses the single word depuis!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Present Tense + depuis + Duration or Starting Point",
      "content": "The formula is ironclad: whenever an action started in the past and is STILL continuing right now, use the PRESENT tense + depuis: J'attends le train depuis vingt minutes ('I have been waiting for the train for twenty minutes'). Tu habites ici depuis quand ? ('How long have you lived here?' / literally 'You live here since when?').",
      "linguist_note": "Romance languages treat ongoing-from-the-past states as unbounded present intervals, reserving the perfect (passé composé) for completed or negatively bounded intervals.",
      "trap_note": "The single biggest English-transfer trap in French: saying *J'ai habité ici depuis trois ans. If you still live there today, you MUST use the present tense: J'habite ici depuis trois ans!"
    },
    "exercises": [
      {
        "type": "shift_select",
        "prompt": "You started waiting for the bus ten minutes ago and you are STILL waiting. How do you say 'I have been waiting for ten minutes'?",
        "options": [
          "J'attends depuis dix minutes",
          "J'ai attendu depuis dix minutes",
          "Je vais attendre depuis dix minutes"
        ],
        "target_answer": "J'attends depuis dix minutes",
        "meaning": "I've been waiting for ten minutes",
        "explanation": "Because you are still waiting right now, French uses the present tense J'attends + depuis.",
        "id": "fr20_e1"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the literal word-for-word structure of 'J'habite ici depuis trois ans'?",
        "german": "J'habite ici depuis trois ans",
        "natural": "I have been living here for three years",
        "options": [
          "I have been living here for three years",
          "I live here since three years",
          "I have lived here during three years"
        ],
        "target_answer": "I live here since three years",
        "meaning": "Literal structure: I live here since three years",
        "explanation": "French keeps the verb in the present (J'habite) and uses depuis ('since') before the time span.",
        "id": "fr20_e2"
      },
      {
        "type": "variant_english",
        "prompt": "Which English sentences accurately translate 'J'apprends le français depuis un an'?",
        "german": "J'apprends le français depuis un an",
        "meaning": "I have been learning French for a year",
        "renderings": [
          "I've been learning French for a year",
          "I have studied French for one year (and still do)"
        ],
        "traps": [
          "I learned French a year ago and stopped",
          "I am going to learn French for a year"
        ],
        "target_answer": "I've been learning French for a year",
        "explanation": "Present tense + depuis always signals that the action began in the past and continues in the present.",
        "id": "fr20_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "I have lived in Paris for two years (and still do)",
        "cues": [
          "Use present tense J'habite à Paris + depuis deux ans"
        ],
        "idea_parts": [
          "present action → J'habite à Paris",
          "duration → depuis deux ans"
        ],
        "target_answer": "J'habite à Paris depuis deux ans",
        "meaning": "I have lived in Paris for two years",
        "word_bank": [
          "J'habite",
          "à",
          "Paris",
          "depuis",
          "deux",
          "ans",
          "J'ai",
          "habité"
        ],
        "explanation": "J'habite stays in the present tense because you still live in Paris.",
        "diagnosis": {
          "slip": "used passé composé J'ai habité",
          "cue": "Ongoing duration with depuis always takes the present tense: J'habite."
        },
        "id": "fr20_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Tu attends ici depuis quand",
        "replays": 2,
        "target_answer": "Tu attends ici depuis quand",
        "meaning": "How long have you been waiting here?",
        "cues": [
          "present tense: Tu attends ici",
          "since when: depuis quand"
        ],
        "explanation": "depuis quand at the end asks 'since when / how long'.",
        "affirmation": "You kept attends in the present tense with depuis quand.",
        "id": "fr20_e5"
      }
    ],
    "summary": {
      "outcome": "Express ongoing duration ('have been doing for / since') using the present tense + depuis.",
      "use_example": {
        "german": "Je suis ici depuis une heure.",
        "english": "I've been here for an hour."
      },
      "takeaway": "If it is still happening right now, French refuses the past tense: Present + depuis.",
      "curiosity_teaser": "Up next on Le Pont ([2001] The Trap Lesson): see how depuis & the Perfect Split leads directly into The Trap Lesson."
    },
    "twist": {
      "prompt": "Ungraded — 'We have been here since Monday' (use Nous sommes):",
      "target_answer": "Nous sommes ici depuis lundi",
      "word_bank": [
        "Nous",
        "sommes",
        "ici",
        "depuis",
        "lundi",
        "avons",
        "été"
      ],
      "explanation": "Because we are still here now, French says 'We are here since Monday': Nous sommes ici depuis lundi."
    },
    "foreshadow": {
      "line": "Having mastered depuis & the Perfect Split, look ahead to Topic 21 (Plus, Moins, aussi), where this machinery expands into the next dimension of French thought.",
      "resolvedIn": 21
    },
    "payoff": {
      "ofLesson": 19,
      "text": "The foundation from Topic 19 (The Storytelling Past) now pays off directly inside depuis & the Perfect Split: every sentence here builds on that earlier step."
    }
  },
  {
    "id": 2001,
    "slug": "lesson-2001",
    "title": "The Trap Lesson",
    "subtitle": "depuis + present tense: why ongoing actions stay in the present in French.",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "depuis",
      "habiter",
      "apprendre",
      "attendre",
      "ans",
      "semaine",
      "heure",
      "ici"
    ],
    "table_word_ids": [
      "depuis",
      "habiter",
      "apprendre",
      "attendre",
      "ans"
    ],
    "hook": {
      "title": "Defusing the #1 English Transfer Trap: Present + depuis",
      "content": "Whenever an English sentence says 'I have lived here for...', 'I have been learning French for...', or 'She has been waiting since...', ask: Is it still going on right now? Yes! So French keeps the verb in the PRESENT tense + depuis!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why 'for three years' in an ongoing sentence is depuis trois ans",
          "content": "Whether English says 'since Monday' (depuis lundi) or 'for three years' (depuis trois ans), French uses depuis with the present tense!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Still Happening Now = Present Tense + depuis",
      "content": "Convert English 'have been [verb]-ing for/since X' directly into French Present Tense + depuis X.",
      "linguist_note": "French depuis marks the left boundary of a state extending through utterance time.",
      "trap_note": "Never translate 'for three years' with *pour trois ans in an ongoing duration sentence — use depuis trois ans!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English ongoing-duration sentence with its French Present + depuis equivalent:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I have been living here for five years",
            "german": "J'habite ici depuis cinq ans"
          },
          {
            "id": "p2",
            "english": "I have been learning French for a year",
            "german": "J'apprends le français depuis un an"
          },
          {
            "id": "p3",
            "english": "We have been waiting for twenty minutes",
            "german": "Nous attendons depuis vingt minutes"
          },
          {
            "id": "p4",
            "english": "She has been here since Monday",
            "german": "Elle est ici depuis lundi"
          }
        ],
        "target_answer": "J'habite ici depuis cinq ans, J'apprends le français depuis un an, Nous attendons depuis vingt minutes, Elle est ici depuis lundi",
        "meaning": "I have been living here for five years, I have been learning French for a year, We have been waiting for twenty minutes, She has been here since Monday",
        "explanation": "Every ongoing action uses the French present tense + depuis.",
        "id": "fr2001_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Translate 'I have known your brother for ten years' (and still know him!):",
        "options": [
          "Je connais ton frère depuis dix ans",
          "J'ai connu ton frère depuis dix ans",
          "Je connais ton frère pour dix ans"
        ],
        "target_answer": "Je connais ton frère depuis dix ans",
        "meaning": "Present tense Je connais + depuis dix ans",
        "explanation": "Because you still know him today, use present tense Je connais + depuis!",
        "id": "fr2001_e2"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the literal structure of 'Elle attend le bus depuis dix minutes'?",
        "german": "Elle attend le bus depuis dix minutes",
        "natural": "She has been waiting for the bus for ten minutes",
        "options": [
          "She has been waiting for the bus for ten minutes",
          "She waits-for the bus since ten minutes",
          "She waited the bus during ten minutes"
        ],
        "target_answer": "She waits-for the bus since ten minutes",
        "meaning": "Literal structure: She waits-for the bus since ten minutes",
        "explanation": "Present tense attend + depuis ('since').",
        "id": "fr2001_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "I have been learning French for six months (depuis six mois)",
        "cues": [
          "I learn the French → J'apprends le français",
          "for six months → depuis six mois"
        ],
        "idea_parts": [
          "present verb + object → J'apprends le français",
          "duration → depuis six mois"
        ],
        "target_answer": "J'apprends le français depuis six mois",
        "meaning": "I have been learning French for six months",
        "word_bank": [
          "J'apprends",
          "le",
          "français",
          "depuis",
          "six",
          "mois",
          "J'ai",
          "appris"
        ],
        "explanation": "Present tense J'apprends + depuis six mois.",
        "diagnosis": {
          "slip": "used past tense J'ai appris",
          "cue": "Keep the verb in the present with depuis: J'apprends."
        },
        "id": "fr2001_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Mon frère travaille ici depuis janvier",
        "replays": 2,
        "target_answer": "Mon frère travaille ici depuis janvier",
        "meaning": "My brother has been working here since January",
        "cues": [
          "Mon frère travaille ici",
          "depuis janvier"
        ],
        "explanation": "depuis covers both 'for [a span]' and 'since [a starting point]'.",
        "affirmation": "You kept travaille in the present tense with depuis janvier.",
        "id": "fr2001_e5"
      }
    ],
    "summary": {
      "outcome": "Translate English 'have been doing for/since' into French Present Tense + depuis.",
      "use_example": {
        "german": "Nous sommes amis depuis vingt ans.",
        "english": "We have been friends for twenty years."
      },
      "takeaway": "Ongoing action = Present tense + depuis (for both 'for' and 'since').",
      "curiosity_teaser": "Up next on Le Pont ([2002] Since & For Gym): see how The Trap Lesson leads directly into Since & For Gym."
    }
  },
  {
    "id": 2002,
    "slug": "lesson-2002",
    "title": "Since & For Gym",
    "subtitle": "depuis quand ? — building duration sentences across work, study, and residence.",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "depuis",
      "quand",
      "combien",
      "habiter",
      "attendre",
      "parler",
      "ans",
      "minute"
    ],
    "table_word_ids": [
      "depuis",
      "quand",
      "combien",
      "habiter",
      "attendre"
    ],
    "hook": {
      "title": "Asking How Long: Depuis quand ? and Depuis combien de temps ?",
      "content": "To ask 'How long have you lived here?' or 'Since when have you been waiting?', put the verb in the present tense and add Depuis quand ? ('Since when?') or Depuis combien de temps ? ('For how long?')!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why combien always takes bare de before a noun",
          "content": "Just like un peu de and beaucoup de, combien ('how much/many') always links to its noun with bare de: combien de temps!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Present Tense + depuis quand ? / depuis combien de temps ?",
      "content": "Ask and answer duration questions in pairs.",
      "linguist_note": "Interrogative extraction of temporal duration preserves present-tense marking on the main verb.",
      "trap_note": "Don't ask *Combien longtemps — 'how long' for time duration is always Depuis quand ? or Depuis combien de temps ?!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each duration question or answer with its meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "Depuis quand est-ce que tu es ici ?",
            "german": "Since when / How long have you been here?"
          },
          {
            "id": "p2",
            "english": "Depuis combien de temps tu attends ?",
            "german": "How long have you been waiting?"
          },
          {
            "id": "p3",
            "english": "Depuis une heure",
            "german": "For an hour (and still ongoing)"
          },
          {
            "id": "p4",
            "english": "Depuis mardi",
            "german": "Since Tuesday"
          }
        ],
        "target_answer": "Since when / How long have you been here?, How long have you been waiting?, For an hour (and still ongoing), Since Tuesday",
        "meaning": "Depuis quand est-ce que tu es ici ?, Depuis combien de temps tu attends ?, Depuis une heure, Depuis mardi",
        "explanation": "Both Depuis quand and Depuis combien de temps take the present tense.",
        "id": "fr2002_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you ask a friend 'How long have you been living in Paris?'",
        "options": [
          "Tu habites à Paris depuis quand",
          "Tu as habité à Paris depuis quand",
          "Combien longtemps tu habites à Paris"
        ],
        "target_answer": "Tu habites à Paris depuis quand",
        "meaning": "You live in Paris since when?",
        "explanation": "Present tense Tu habites + depuis quand.",
        "id": "fr2002_e2"
      },
      {
        "type": "derive",
        "prompt": "Answer 'Tu attends depuis quand ?' with 'For five minutes' (using Depuis...):",
        "english_hint": "Depuis + cinq minutes",
        "target_answer": "Depuis cinq minutes",
        "meaning": "For five minutes",
        "explanation": "Depuis cinq minutes.",
        "id": "fr2002_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "you have been here since when (using Tu es ici depuis quand)",
        "cues": [
          "You are here → Tu es ici + since when → depuis quand"
        ],
        "idea_parts": [
          "present state → Tu es ici",
          "question tag → depuis quand"
        ],
        "target_answer": "Tu es ici depuis quand",
        "meaning": "How long have you been here?",
        "word_bank": [
          "Tu",
          "es",
          "ici",
          "depuis",
          "quand",
          "as",
          "été"
        ],
        "explanation": "Tu es ici depuis quand uses simple present es.",
        "diagnosis": {
          "slip": "used as été",
          "cue": "Use present tense Tu es ici depuis quand."
        },
        "id": "fr2002_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Vous habitez dans cette ville depuis combien de temps",
        "replays": 2,
        "target_answer": "Vous habitez dans cette ville depuis combien de temps",
        "meaning": "How long have you lived in this city?",
        "cues": [
          "Vous habitez dans cette ville",
          "depuis combien de temps"
        ],
        "explanation": "depuis combien de temps = 'for how long'.",
        "affirmation": "You wrote Vous habitez and depuis combien de temps cleanly.",
        "id": "fr2002_e5"
      }
    ],
    "summary": {
      "outcome": "Ask and answer 'How long / Since when?' questions using Present Tense + depuis quand / depuis combien de temps.",
      "use_example": {
        "german": "Tu apprends le français depuis quand ? — Depuis ce matin !",
        "english": "How long have you been learning French? — Since this morning!"
      },
      "takeaway": "'How long have you...?' is Present Tense + depuis quand ?",
      "curiosity_teaser": "Up next on Le Pont ([21] Plus, Moins, aussi): see how Since & For Gym leads directly into Plus, Moins, aussi."
    }
  },
  {
    "id": 21,
    "slug": "plus-moins-aussi",
    "title": "Plus, Moins, aussi",
    "subtitle": "Comparing with plus… que, moins… que, aussi… que — and the twin suppletions bon → meilleur and mauvais → pire",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "plus",
      "moins",
      "aussi",
      "que",
      "meilleur",
      "pire",
      "cher",
      "grand",
      "petit",
      "bon"
    ],
    "table_word_ids": [
      "plus",
      "moins",
      "aussi",
      "que",
      "meilleur"
    ],
    "hook": {
      "title": "Why French Never Adds '-er' to an Adjective",
      "content": "English has two competing ways to compare: short Germanic adjectives add '-er' (bigger, smaller, cheaper), while long Latinate adjectives put 'more' in front (more important, more interesting). French uses the 'more / less / as' formula for EVERY adjective, short or long! 'Bigger than' is simply plus grand que ('more big than'). 'Less expensive than' is moins cher que. And 'as tall as' is aussi grand que.",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why bon → meilleur is the exact twin of good → better",
          "content": "Neither English (*gooder) nor French (*plus bon) allows 'good' to take a regular comparative! Both languages reach for a separate ancient root (suppletion): Latin bonus jumped to melior (English 'ameliorate'), giving French meilleur ('better')!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "plus / moins / aussi + Adjective + que",
      "content": "Notice that French uses que ('than') as the second hinge across all three comparisons: plus grand que ('more big than'), moins cher que ('less expensive than'), and aussi important que ('as important as'). And when you pronounce plus before an adjective starting with a consonant (plus grand, plus cher), the final -s of plus stays silent (/ply/)!",
      "linguist_note": "Latin comparative melior ('better') and peior ('worse', English pejorative) survived directly as synthetic comparatives meilleur and pire.",
      "trap_note": "The shortcut your mind will offer: saying *plus bon for 'better'. Just as English forbids 'gooder', French forbids *plus bon — always say meilleur!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each comparative pattern with its English meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "plus grand que",
            "german": "bigger / taller than"
          },
          {
            "id": "p2",
            "english": "moins cher que",
            "german": "less expensive / cheaper than"
          },
          {
            "id": "p3",
            "english": "aussi important que",
            "german": "as important as"
          },
          {
            "id": "p4",
            "english": "meilleur que (never *plus bon)",
            "german": "better than (ameliorate)"
          },
          {
            "id": "p5",
            "english": "pire que (pejorative)",
            "german": "worse than"
          }
        ],
        "target_answer": "bigger / taller than, less expensive / cheaper than, as important as, better than (ameliorate), worse than",
        "meaning": "plus grand que, moins cher que, aussi important que, meilleur que (never *plus bon), pire que (pejorative)",
        "explanation": "plus, moins, and aussi all close their comparison with que ('than / as').",
        "id": "fr21_e1"
      },
      {
        "type": "reverse_cognate",
        "prompt": "French meilleur ('better') shares its Latin root melior with which formal English verb meaning 'to make better'?",
        "target_answer": "ameliorate",
        "meaning": "ameliorate ↔ meilleur ('better')",
        "explanation": "To ameliorate a situation is literally to make it 'better' (Latin melior → French meilleur).",
        "id": "fr21_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'The wine is better than the coffee'?",
        "options": [
          "Le vin est meilleur que le café",
          "Le vin est plus bon que le café",
          "Le vin est meilleur comme le café"
        ],
        "target_answer": "Le vin est meilleur que le café",
        "meaning": "The wine is better than the coffee",
        "explanation": "bon becomes meilleur in comparisons, and 'than' is always que.",
        "id": "fr21_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "this hotel is less expensive than the restaurant",
        "cues": [
          "This hotel is less expensive than the restaurant → Cet hôtel est moins cher que le restaurant"
        ],
        "idea_parts": [
          "subject → Cet hôtel",
          "comparative → est moins cher",
          "hinge + target → que le restaurant"
        ],
        "target_answer": "Cet hôtel est moins cher que le restaurant",
        "meaning": "This hotel is less expensive than the restaurant",
        "word_bank": [
          "Cet",
          "hôtel",
          "est",
          "moins",
          "cher",
          "que",
          "le",
          "restaurant",
          "plus",
          "la"
        ],
        "explanation": "moins cher que = 'less expensive than'.",
        "diagnosis": {
          "slip": "used comme instead of que",
          "cue": "Comparisons always close with que ('than')."
        },
        "id": "fr21_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "La maison est aussi grande que l'hôtel",
        "replays": 2,
        "target_answer": "La maison est aussi grande que l'hôtel",
        "meaning": "The house is as big as the hotel",
        "cues": [
          "The house is: La maison est",
          "as big as: aussi grande que",
          "the hotel: l'hôtel"
        ],
        "explanation": "aussi... que means 'as... as', and grande agrees with la maison.",
        "affirmation": "You paired aussi and que with feminine grande.",
        "id": "fr21_e5"
      }
    ],
    "summary": {
      "outcome": "Build comparisons of superiority (plus… que), inferiority (moins… que), and equality (aussi… que), plus irregular meilleur and pire.",
      "use_example": {
        "german": "Le train est plus rapide et moins cher que la voiture.",
        "english": "The train is faster and cheaper than the car."
      },
      "takeaway": "Every comparison closes with que — and 'better' is always meilleur.",
      "curiosity_teaser": "Up next on Le Pont ([2101] The Twin Suppletions): see how Plus, Moins, aussi leads directly into The Twin Suppletions."
    },
    "twist": {
      "prompt": "Ungraded — 'The cake is better today':",
      "target_answer": "Le gâteau est meilleur aujourd'hui",
      "word_bank": [
        "Le",
        "gâteau",
        "est",
        "meilleur",
        "aujourd'hui",
        "plus",
        "bon"
      ],
      "explanation": "meilleur replaces plus bon everywhere."
    },
    "foreshadow": {
      "line": "Having mastered Plus, Moins, aussi, look ahead to Topic 22 (en & y), where this machinery expands into the next dimension of French thought.",
      "resolvedIn": 22
    },
    "payoff": {
      "ofLesson": 20,
      "text": "The foundation from Topic 20 (depuis & the Perfect Split) now pays off directly inside Plus, Moins, aussi: every sentence here builds on that earlier step."
    }
  },
  {
    "id": 2101,
    "slug": "lesson-2101",
    "title": "The Twin Suppletions",
    "subtitle": "bon → meilleur (ameliorate) and mauvais → pire (pejorative): frozen Latin comparatives.",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "meilleur",
      "pire",
      "bon",
      "plus",
      "moins",
      "que",
      "vin",
      "café",
      "gâteau"
    ],
    "table_word_ids": [
      "meilleur",
      "pire",
      "bon",
      "plus",
      "moins"
    ],
    "hook": {
      "title": "Why 'Good → Better' and 'Bon → Meilleur' Are Historical Twins",
      "content": "bon ('good') jumps to meilleur ('better', cousin of 'ameliorate'), and mauvais ('bad') jumps to pire ('worse', cousin of 'pejorative')! And putting le, la, or les in front of any comparative turns it into the superlative: le meilleur ('the best'), le plus grand ('the biggest')!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Putting le / la / les in front makes the Superlative ('the best / the biggest')!",
          "content": "plus grand que = 'bigger than'; le plus grand = 'the biggest'. meilleur que = 'better than'; le meilleur / la meilleure = 'the best'!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Comparative + le/la/les in Front = Superlative ('the -est')",
      "content": "Use meilleur/pire for better/worse and prefix le/la/les for the best/worst.",
      "linguist_note": "Romance analytic superlatives are formed by prefixing the definite article to the comparative degree.",
      "trap_note": "Never say *le plus bon for 'the best' — 'better' is meilleur, and 'the best' is le meilleur / la meilleure!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each comparative or superlative form with its English meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "meilleur que (never *plus bon)",
            "german": "better than"
          },
          {
            "id": "p2",
            "english": "le meilleur / la meilleure",
            "german": "the best"
          },
          {
            "id": "p3",
            "english": "pire que (pejorative)",
            "german": "worse than"
          },
          {
            "id": "p4",
            "english": "plus grand que",
            "german": "bigger than"
          },
          {
            "id": "p5",
            "english": "le plus grand / la plus grande",
            "german": "the biggest"
          }
        ],
        "target_answer": "better than, the best, worse than, bigger than, the biggest",
        "meaning": "meilleur que (never *plus bon), le meilleur / la meilleure, pire que (pejorative), plus grand que, le plus grand / la plus grande",
        "explanation": "Putting le/la/les in front of any comparative turns '-er' into 'the -est'!",
        "id": "fr2101_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'It is the best restaurant in the city'?",
        "options": [
          "C'est le meilleur restaurant de la ville",
          "C'est le plus bon restaurant dans la ville",
          "C'est meilleur restaurant de la ville"
        ],
        "target_answer": "C'est le meilleur restaurant de la ville",
        "meaning": "It is the best restaurant in the city",
        "explanation": "le meilleur = 'the best', and after a superlative French uses de ('of the city')!",
        "id": "fr2101_e2"
      },
      {
        "type": "derive",
        "prompt": "Turn 'meilleure' ('better', f.) into the feminine superlative 'the best':",
        "english_hint": "add la in front",
        "target_answer": "la meilleure",
        "meaning": "the best (feminine)",
        "explanation": "la + meilleure = la meilleure.",
        "id": "fr2101_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "this bakery has the best bread (use Cette boulangerie a le meilleur pain)",
        "cues": [
          "This bakery has → Cette boulangerie a",
          "the best bread → le meilleur pain"
        ],
        "idea_parts": [
          "subject + verb → Cette boulangerie a",
          "superlative object → le meilleur pain"
        ],
        "target_answer": "Cette boulangerie a le meilleur pain",
        "meaning": "This bakery has the best bread",
        "word_bank": [
          "Cette",
          "boulangerie",
          "a",
          "le",
          "meilleur",
          "pain",
          "plus",
          "bon"
        ],
        "explanation": "le meilleur pain = 'the best bread'.",
        "diagnosis": {
          "slip": "used plus bon",
          "cue": "Use le meilleur pain for 'the best bread'."
        },
        "id": "fr2101_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Ce café est meilleur que l'autre",
        "replays": 2,
        "target_answer": "Ce café est meilleur que l'autre",
        "meaning": "This coffee is better than the other one",
        "cues": [
          "Ce café est meilleur",
          "que l'autre"
        ],
        "explanation": "meilleur que = 'better than'.",
        "affirmation": "You paired meilleur with que l'autre cleanly.",
        "id": "fr2101_e5"
      }
    ],
    "summary": {
      "outcome": "Use irregular comparatives meilleur ('better') and pire ('worse'), and form superlatives by adding le/la/les.",
      "use_example": {
        "german": "C'est la meilleure idée de la journée.",
        "english": "It's the best idea of the day."
      },
      "takeaway": "Add le/la/les to any comparative to make the superlative: meilleur → le meilleur ('the best').",
      "curiosity_teaser": "Up next on Le Pont ([2102] Comparison Gym): see how The Twin Suppletions leads directly into Comparison Gym."
    }
  },
  {
    "id": 2102,
    "slug": "lesson-2102",
    "title": "Comparison Gym",
    "subtitle": "plus… que, moins… que, aussi… que across cities, food, and ideas.",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "plus",
      "moins",
      "aussi",
      "que",
      "grand",
      "petit",
      "cher",
      "possible",
      "ville",
      "hôtel"
    ],
    "table_word_ids": [
      "plus",
      "moins",
      "aussi",
      "que",
      "grand"
    ],
    "hook": {
      "title": "Running Comparisons at Speed: plus… que, moins… que, aussi… que",
      "content": "Run the three comparison frames across adjectives you own: plus [adj] que ('more [adj] than'), moins [adj] que ('less [adj] than'), and aussi [adj] que ('as [adj] as'). The adjective still agrees in gender and number with the subject being described!",
      "footnotes": [
        {
          "marker": "1",
          "title": "When the final -s of plus wakes up",
          "content": "Before a consonant (plus grand, plus cher), the -s of plus is silent (/ply/). Before a vowel (plus‿important), the -s wakes up in liaison as /z/!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Subject + être + plus/moins/aussi + Agreed Adjective + que + Target",
      "content": "Keep the adjective agreed with the first noun, and close every comparison with que.",
      "linguist_note": "Comparative degree markers precede the adjective while the standard of comparison is introduced by que.",
      "trap_note": "Don't use *comme after aussi in a comparison (*aussi grand comme) — even for 'as... as', the second word is que (aussi grand que)!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each comparative sentence with its meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "La maison est plus grande que l'hôtel",
            "german": "The house is bigger than the hotel"
          },
          {
            "id": "p2",
            "english": "Le train est moins cher que l'avion",
            "german": "The train is cheaper than the plane"
          },
          {
            "id": "p3",
            "english": "Lyon est aussi beau que Paris",
            "german": "Lyon is as beautiful as Paris"
          },
          {
            "id": "p4",
            "english": "Cette table est plus petite que l'autre",
            "german": "This table is smaller than the other"
          }
        ],
        "target_answer": "The house is bigger than the hotel, The train is cheaper than the plane, Lyon is as beautiful as Paris, This table is smaller than the other",
        "meaning": "La maison est plus grande que l'hôtel, Le train est moins cher que l'avion, Lyon est aussi beau que Paris, Cette table est plus petite que l'autre",
        "explanation": "All three frames (plus, moins, aussi) close with que.",
        "id": "fr2102_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'She is as tall as her brother'?",
        "options": [
          "Elle est aussi grande que son frère",
          "Elle est aussi grande comme son frère",
          "Elle est aussi grand que son frère"
        ],
        "target_answer": "Elle est aussi grande que son frère",
        "meaning": "She is as tall as her brother",
        "explanation": "grande agrees with Elle (-e), and 'as... as' uses aussi... que!",
        "id": "fr2102_e2"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the word-for-word structure of 'Le train est moins cher que le taxi'?",
        "german": "Le train est moins cher que le taxi",
        "natural": "The train is cheaper than the taxi",
        "options": [
          "The train is cheaper than the taxi",
          "The train is less dear than the taxi",
          "The train is fewer expensive as the taxi"
        ],
        "target_answer": "The train is less dear than the taxi",
        "meaning": "Literal structure: The train is less dear than the taxi",
        "explanation": "moins ('less') + cher ('dear/expensive') + que ('than').",
        "id": "fr2102_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "this city is bigger than my city",
        "cues": [
          "This city is bigger → Cette ville est plus grande",
          "than my city → que ma ville"
        ],
        "idea_parts": [
          "subject + comparative → Cette ville est plus grande",
          "hinge + target → que ma ville"
        ],
        "target_answer": "Cette ville est plus grande que ma ville",
        "meaning": "This city is bigger than my city",
        "word_bank": [
          "Cette",
          "ville",
          "est",
          "plus",
          "grande",
          "que",
          "ma",
          "ville",
          "grand",
          "la"
        ],
        "explanation": "la ville is feminine, so grande takes -e.",
        "diagnosis": {
          "slip": "forgot -e on grande",
          "cue": "ville is feminine: plus grande que ma ville."
        },
        "id": "fr2102_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "C'est moins compliqué que je pensais",
        "replays": 2,
        "target_answer": "C'est moins compliqué que je pensais",
        "meaning": "It is less complicated than I thought",
        "cues": [
          "C'est moins compliqué",
          "que je pensais"
        ],
        "explanation": "moins... que works with clauses too!",
        "affirmation": "You wrote moins compliqué que je pensais cleanly.",
        "id": "fr2102_e5"
      }
    ],
    "summary": {
      "outcome": "Compare people, places, and things using plus… que, moins… que, and aussi… que with full adjective agreement.",
      "use_example": {
        "german": "Ce bistro est moins cher et aussi bon que le restaurant.",
        "english": "This bistro is cheaper and just as good as the restaurant."
      },
      "takeaway": "'as... as' is aussi... que (never comme), and the adjective agrees with the first noun.",
      "curiosity_teaser": "Up next on Le Pont ([22] en & y): see how Comparison Gym leads directly into en & y."
    }
  },
  {
    "id": 22,
    "slug": "en-and-y",
    "title": "en & y",
    "subtitle": "j'en veux ('I want some / of it') and j'y vais ('I'm going there') — the two adverbial pronouns that walk left",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "en_pron",
      "y",
      "vouloir",
      "aller",
      "avoir",
      "pain",
      "café",
      "deux"
    ],
    "table_word_ids": [
      "en_pron",
      "y",
      "vouloir",
      "aller",
      "avoir"
    ],
    "hook": {
      "title": "Two Tiny Words That Save You From Repeating Whole Phrases",
      "content": "Suppose someone asks 'Are you going to Paris?' In English you say 'Yes, I'm going THERE.' In French, 'there' is the single letter y (/i/, from Latin ibi), and like every French pronoun it walks left in front of the verb: J'y vais ('I there go')! Now suppose someone asks 'Do you want some coffee (du café)?' In English you say 'Yes, I want SOME' or 'I have TWO (of them).' In French, 'of it / of them / some' is en (/ɑ̃/, from Latin inde), and it walks left too: J'en veux ('I of-it want'), J'en ai deux ('I of-them have two')!",
      "footnotes": [
        {
          "marker": "1",
          "title": "How y and en are already inside phrases you know",
          "content": "You have heard 'Allons-y !' ('Let's go [there]!') and 'Il y a' ('It there has' = there is). That y is this exact place pronoun!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "de-Phrase → en, à-Place → y",
      "content": "Here is the clean mechanical trigger: (1) If the phrase you are replacing starts with de, du, de la, des, or a number/quantity (du pain, de l'eau, trois cafés), replace the noun with en before the verb: Tu veux du pain ? → Oui, j'en veux. Tu as des frères ? → Oui, j'en ai deux. (2) If the phrase you are replacing is a PLACE introduced by à, au, en, dans, or chez (à Paris, au café, chez moi), replace the whole place phrase with y before the verb: Tu vas au café ? → Oui, j'y vais!",
      "linguist_note": "Latin pronominal adverbs inde ('thence / from there') and ibi ('there') grammaticalized into clitic pronouns en and y across Gallo-Romance and Italian (ne / ci).",
      "trap_note": "The shortcut your mind will offer: leaving off en when stating a bare number in an answer (*J'ai deux for 'I have two [of them]'). In French, you MUST include en ('of them'): J'en ai deux!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each question with its natural French pronoun response using y or en:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "Tu vas à Paris ? (place with à)",
            "german": "Oui, j'y vais (I'm going there)"
          },
          {
            "id": "p2",
            "english": "Tu veux du café ? (quantity with du)",
            "german": "Oui, j'en veux (I want some)"
          },
          {
            "id": "p3",
            "english": "Tu es chez toi ? (place with chez)",
            "german": "Oui, j'y suis (I am there)"
          },
          {
            "id": "p4",
            "english": "Tu as des billets ? (plural with des)",
            "german": "Oui, j'en ai deux (I have two of them)"
          }
        ],
        "target_answer": "Oui, j'y vais (I'm going there), Oui, j'en veux (I want some), Oui, j'y suis (I am there), Oui, j'en ai deux (I have two of them)",
        "meaning": "Tu vas à Paris ? (place with à), Tu veux du café ? (quantity with du), Tu es chez toi ? (place with chez), Tu as des billets ? (plural with des)",
        "explanation": "Places take y ('there'); de-phrases and quantities take en ('of it / of them').",
        "id": "fr22_e1"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the literal word-for-word structure of 'J'en ai deux'?",
        "german": "J'en ai deux",
        "natural": "I have two of them",
        "options": [
          "I have two of them",
          "I of-them have two",
          "I there have two"
        ],
        "target_answer": "I of-them have two",
        "meaning": "Literal structure: I of-them have two",
        "explanation": "en means 'of it / of them' and stands between j' and ai.",
        "id": "fr22_e2"
      },
      {
        "type": "shift_select",
        "prompt": "Someone asks 'Tu vas au restaurant ce soir ?' How do you answer 'Yes, I am going there'?",
        "options": [
          "Oui, j'y vais",
          "Oui, j'en vais",
          "Oui, je le vais"
        ],
        "target_answer": "Oui, j'y vais",
        "meaning": "Yes, I am going there",
        "explanation": "au restaurant is a place phrase (à + le), so y replaces it and je elides to j': J'y vais.",
        "id": "fr22_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "I want some (speaking of bread: du pain)",
        "cues": [
          "I of-it want → J'en veux (je elides before en)"
        ],
        "idea_parts": [
          "subject → J'",
          "partitive pronoun → en",
          "verb → veux"
        ],
        "target_answer": "J'en veux",
        "meaning": "I want some (of it)",
        "word_bank": [
          "J'en",
          "veux",
          "J'y",
          "Je",
          "le"
        ],
        "explanation": "Because du pain starts with de, en replaces it and je elides to J'en veux.",
        "diagnosis": {
          "slip": "used le or y instead of en",
          "cue": "Partitive du pain is replaced by en: J'en veux."
        },
        "id": "fr22_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "On y va maintenant",
        "replays": 2,
        "target_answer": "On y va maintenant",
        "meaning": "Let's go there now / We're going there now",
        "cues": [
          "Subject + there + go: On y va",
          "now: maintenant"
        ],
        "explanation": "On y va (/ɔ̃.n‿i va/) is the everyday French way to say 'Let's go!'.",
        "affirmation": "You heard On y va and maintenant clearly.",
        "id": "fr22_e5"
      }
    ],
    "summary": {
      "outcome": "Replace de/partitive/quantity phrases with en and place phrases with y, positioning both right before the verb.",
      "use_example": {
        "german": "Tu vas à la boulangerie ? — Oui, j'y vais et j'en prends deux.",
        "english": "Are you going to the bakery? — Yes, I'm going there and getting two of them."
      },
      "takeaway": "à + place becomes y ('there'); de + thing/quantity becomes en ('of it').",
      "curiosity_teaser": "Up next on Le Pont ([2201] en: Of It): see how en & y leads directly into en: Of It."
    },
    "twist": {
      "prompt": "Ungraded — 'I don't want any (of it)' (wrap n'...pas around en veux):",
      "target_answer": "Je n'en veux pas",
      "word_bank": [
        "Je",
        "n'en",
        "veux",
        "pas",
        "J'en",
        "ne"
      ],
      "explanation": "Inside the negation sandwich, ne elides before en: Je n'en veux pas!"
    },
    "foreshadow": {
      "line": "Having mastered en & y, look ahead to Topic 23 (Pronouns Walk Left), where this machinery expands into the next dimension of French thought.",
      "resolvedIn": 23
    },
    "payoff": {
      "ofLesson": 21,
      "text": "The foundation from Topic 21 (Plus, Moins, aussi) now pays off directly inside en & y: every sentence here builds on that earlier step."
    }
  },
  {
    "id": 2201,
    "slug": "lesson-2201",
    "title": "en: Of It",
    "subtitle": "en replaces de + noun and partitives: Tu veux du café ? — Oui, j'en veux.",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "en_pron",
      "vouloir",
      "avoir",
      "prendre",
      "pain",
      "café",
      "eau",
      "deux",
      "un_peu"
    ],
    "table_word_ids": [
      "en_pron",
      "vouloir",
      "avoir",
      "prendre",
      "pain"
    ],
    "hook": {
      "title": "en: The Pronoun for 'Some', 'Any', and 'Of Them'",
      "content": "Whenever you replace a partitive quantity (du pain, de la soupe, de l'eau, des amis) or a noun after a number/amount (un, deux, un peu de), put en (/ɑ̃/) right before the verb: J'en veux ('I want some'), J'en ai deux ('I have two of them')!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why 'J'en ai un' keeps 'un' at the back while 'en' walks to the front",
          "content": "When you drop the noun after a number ('I have one [coffee]'), the 'of it' (en) walks left of the verb while the number 'one' (un) stays at the end: J'en ai un!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Replace de/du/de la/des + Noun with en Before the Verb",
      "content": "Keep any number or quantity word at the end and place en before the verb.",
      "linguist_note": "Partitive clitic en (< Latin inde) is obligatory whenever a quantified noun phrase is pronominalized.",
      "trap_note": "Never say *J'ai deux when answering 'Do you have brothers?' — always include en: J'en ai deux!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each question with its natural en response:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "Tu veux du fromage ? (some cheese)",
            "german": "Oui, j'en veux (Yes, I want some)"
          },
          {
            "id": "p2",
            "english": "Tu prends du café ? (a little)",
            "german": "Oui, j'en prends un peu (I'll have a little of it)"
          },
          {
            "id": "p3",
            "english": "Tu as des sœurs ? (two of them)",
            "german": "Oui, j'en ai deux (Yes, I have two of them)"
          },
          {
            "id": "p4",
            "english": "Tu as un billet ? (one of them)",
            "german": "Oui, j'en ai un (Yes, I have one)"
          },
          {
            "id": "p5",
            "english": "Tu veux du vin ? (none)",
            "german": "Non, je n'en veux pas (No, I don't want any)"
          }
        ],
        "target_answer": "Oui, j'en veux (Yes, I want some), Oui, j'en prends un peu (I'll have a little of it), Oui, j'en ai deux (Yes, I have two of them), Oui, j'en ai un (Yes, I have one), Non, je n'en veux pas (No, I don't want any)",
        "meaning": "Tu veux du fromage ? (some cheese), Tu prends du café ? (a little), Tu as des sœurs ? (two of them), Tu as un billet ? (one of them), Tu veux du vin ? (none)",
        "explanation": "en replaces the noun while numbers and un peu stay after the verb.",
        "id": "fr2201_e1"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the literal word-for-word structure of 'J'en veux un peu'?",
        "german": "J'en veux un peu",
        "natural": "I want a little of it",
        "options": [
          "I want a little of it",
          "I of-it want a little",
          "I want some a little"
        ],
        "target_answer": "I of-it want a little",
        "meaning": "Literal structure: I of-it want a little",
        "explanation": "en ('of-it') walks before veux, leaving un peu at the end.",
        "id": "fr2201_e2"
      },
      {
        "type": "shift_select",
        "prompt": "Someone asks 'Vous avez des frères ?' ('Do you have brothers?'). How do you answer 'Yes, I have three'?",
        "options": [
          "Oui, j'en ai trois",
          "Oui, j'ai trois",
          "Oui, je les ai trois"
        ],
        "target_answer": "Oui, j'en ai trois",
        "meaning": "Yes, I have three (of them)",
        "explanation": "When a number stands without its noun, en is mandatory before the verb: J'en ai trois!",
        "id": "fr2201_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "yes I want two of them (using Oui, j'en veux deux)",
        "cues": [
          "Yes, I of-them want two → Oui, j'en veux deux"
        ],
        "idea_parts": [
          "affirmative → Oui",
          "subject + en + verb + number → j'en veux deux"
        ],
        "target_answer": "Oui, j'en veux deux",
        "meaning": "Yes, I want two of them",
        "word_bank": [
          "Oui",
          "j'en",
          "veux",
          "deux",
          "je",
          "les"
        ],
        "explanation": "en walks before veux while deux stays after.",
        "diagnosis": {
          "slip": "omitted en",
          "cue": "Include en before veux: Oui, j'en veux deux."
        },
        "id": "fr2201_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Je n'en ai pas besoin aujourd'hui",
        "replays": 2,
        "target_answer": "Je n'en ai pas besoin aujourd'hui",
        "meaning": "I don't need it today",
        "cues": [
          "Je n'en ai pas",
          "besoin aujourd'hui"
        ],
        "explanation": "avoir besoin DE quelque chose takes en ('of it'): Je n'en ai pas besoin!",
        "affirmation": "You spotted that avoir besoin de uses en!",
        "id": "fr2201_e5"
      }
    ],
    "summary": {
      "outcome": "Use en before the verb to replace partitives, de-phrases, and nouns after numbers/quantities.",
      "use_example": {
        "german": "Tu as du pain ? — Oui, j'en ai beaucoup.",
        "english": "Do you have bread? — Yes, I have a lot of it."
      },
      "takeaway": "Whenever a number or quantity stands without its noun, en must stand before the verb (J'en ai deux).",
      "curiosity_teaser": "Up next on Le Pont ([2202] y: There): see how en: Of It leads directly into y: There."
    }
  },
  {
    "id": 2202,
    "slug": "lesson-2202",
    "title": "y: There",
    "subtitle": "y replaces à/dans/chez + place: Tu vas à Paris ? — Oui, j'y vais.",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "y",
      "aller",
      "être",
      "habiter",
      "rester",
      "ville",
      "gare",
      "hôtel",
      "on"
    ],
    "table_word_ids": [
      "y",
      "aller",
      "être",
      "habiter",
      "rester"
    ],
    "hook": {
      "title": "y: The Pronoun for 'There' and 'To It'",
      "content": "Whenever a place has already been mentioned (à Paris, au restaurant, dans la maison, chez le docteur), French replaces the entire prepositional place phrase with y (/i/) right before the verb: J'y vais ('I'm going there'), J'y suis ('I am there'), Je veux y aller ('I want to go there')!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Where y stands in an infinitive chain: right before the infinitive!",
          "content": "In Je veux aller à Paris, y belongs to aller, so it stands right before aller: Je veux y aller!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Place Phrase (à / au / dans / en / chez + Place) → y Before the Verb",
      "content": "Position y before a single conjugated verb (J'y vais) or right before the infinitive in a chain (Je vais y rester).",
      "linguist_note": "Locative clitic y (< Latin ibi) climbs to the pre-infinitival slot in modern French.",
      "trap_note": "In an infinitive chain ('I want to go there'), don't put y before veux (*J'y veux aller) — put y right before aller: Je veux y aller!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each y sentence with its English meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "J'y vais maintenant",
            "german": "I'm going there now"
          },
          {
            "id": "p2",
            "english": "Elle y habite depuis trois ans",
            "german": "She has lived there for three years"
          },
          {
            "id": "p3",
            "english": "Nous y sommes",
            "german": "We are there / Here we are!"
          },
          {
            "id": "p4",
            "english": "Je veux y aller demain",
            "german": "I want to go there tomorrow"
          },
          {
            "id": "p5",
            "english": "Je n'y vais pas",
            "german": "I am not going there"
          }
        ],
        "target_answer": "I'm going there now, She has lived there for three years, We are there / Here we are!, I want to go there tomorrow, I am not going there",
        "meaning": "J'y vais maintenant, Elle y habite depuis trois ans, Nous y sommes, Je veux y aller demain, Je n'y vais pas",
        "explanation": "y stands directly before the verb (or infinitive) whose place it replaces.",
        "id": "fr2202_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Where does 'y' go in 'I am going to stay there' (using je vais + rester)?",
        "options": [
          "Je vais y rester",
          "J'y vais rester",
          "Je vais rester y"
        ],
        "target_answer": "Je vais y rester",
        "meaning": "I am going to stay there",
        "explanation": "In an infinitive chain, y stands right before the infinitive it modifies: Je vais y rester!",
        "id": "fr2202_e2"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the literal structure of 'Nous y sommes déjà'?",
        "german": "Nous y sommes déjà",
        "natural": "We are already there",
        "options": [
          "We are already there",
          "We there are already",
          "We are there already"
        ],
        "target_answer": "We there are already",
        "meaning": "Literal structure: We there are already",
        "explanation": "y ('there') stands between Nous and sommes.",
        "id": "fr2202_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "I want to go there with you (use Je veux y aller avec toi)",
        "cues": [
          "I want to-there-go → Je veux y aller + with you → avec toi"
        ],
        "idea_parts": [
          "want + y + infinitive → Je veux y aller",
          "companion → avec toi"
        ],
        "target_answer": "Je veux y aller avec toi",
        "meaning": "I want to go there with you",
        "word_bank": [
          "Je",
          "veux",
          "y",
          "aller",
          "avec",
          "toi",
          "J'y",
          "la"
        ],
        "explanation": "y stands right before the infinitive aller.",
        "diagnosis": {
          "slip": "placed y before veux",
          "cue": "Place y right before the infinitive: Je veux y aller."
        },
        "id": "fr2202_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Tu vas à la gare ? Oui, j'y vais",
        "replays": 2,
        "target_answer": "Tu vas à la gare ? Oui, j'y vais",
        "meaning": "Are you going to the station? Yes, I'm going there",
        "cues": [
          "Tu vas à la gare",
          "Oui, j'y vais"
        ],
        "explanation": "à la gare is replaced by y in J'y vais.",
        "affirmation": "You replaced à la gare with j'y vais cleanly.",
        "id": "fr2202_e5"
      }
    ],
    "summary": {
      "outcome": "Replace any place phrase (à, au, dans, chez + place) with y before the verb or infinitive.",
      "use_example": {
        "german": "C'est une belle ville — je voudrais y habiter.",
        "english": "It's a beautiful city — I would like to live there."
      },
      "takeaway": "Single verb: J'y vais; Infinitive chain: Je veux y aller.",
      "curiosity_teaser": "Up next on Le Pont ([23] Pronouns Walk Left): see how y: There leads directly into Pronouns Walk Left."
    }
  },
  {
    "id": 23,
    "slug": "pronouns-walk-left",
    "title": "Pronouns Walk Left",
    "subtitle": "me, te, le, la, nous, vous, lui, leur — direct and indirect object pronouns walking left of the verb",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "me",
      "te",
      "le",
      "la",
      "nous",
      "vous",
      "lui",
      "leur",
      "voir",
      "parler",
      "comprendre",
      "donné"
    ],
    "table_word_ids": [
      "me",
      "te",
      "le",
      "la",
      "nous"
    ],
    "hook": {
      "title": "Completing the Left-Walk You Started in Lesson 1",
      "content": "In Lesson 1 you discovered that French puts 'it' before the verb: Je le veux ('I it want'). Now you can drop every human pronoun into that exact same slot! For 'me, you, us, you all', one set of pronouns does BOTH jobs (direct 'me' and indirect 'to me'): me ('me / to me'), te ('you / to you'), nous ('us / to us'), vous ('you / to you'). Je te vois ('I see you'). Tu me parles ('You speak to me'). Il nous comprend ('He understands us').",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why lui means BOTH 'to him' and 'to her'",
          "content": "In the 3rd person, French separates direct objects (le 'him/it', la 'her/it', les 'them') from indirect 'to' objects: lui means BOTH 'to him' AND 'to her', and leur means 'to them'! Je lui parle can mean 'I speak to him' or 'I speak to her'!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Direct (le/la/les) vs. Indirect 'To' (lui/leur)",
      "content": "Ask one question about the verb: does it act directly on the person (voir 'to see someone', écouter 'to listen to someone'), or does it send words/things TO the person (parler à 'to speak to', donner à 'to give to', répondre à 'to answer to')? Direct takes le (him), la (her), les (them): Je le vois, je la vois. Indirect 'to' takes gender-neutral lui (to him / to her) and leur (to them, never with an -s!): Je lui parle, je leur donne le livre.",
      "linguist_note": "Latin dative singular illī ('to that one', identical for masculine and feminine in Latin!) became French lui, which is why lui is completely gender-neutral.",
      "trap_note": "The shortcut your mind will offer: adding an -s to leur when it means 'to them' before a verb (*Je leurs parle). Before a verb, leur NEVER takes an -s!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each pre-verbal object pronoun with its meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "me (or m' before vowel)",
            "german": "me / to me"
          },
          {
            "id": "p2",
            "english": "te (or t' before vowel)",
            "german": "you / to you (informal)"
          },
          {
            "id": "p3",
            "english": "le / la / les",
            "german": "him, her, it, them (direct)"
          },
          {
            "id": "p4",
            "english": "lui (gender-neutral!)",
            "german": "to him / to her"
          },
          {
            "id": "p5",
            "english": "leur (no -s before a verb)",
            "german": "to them"
          }
        ],
        "target_answer": "me / to me, you / to you (informal), him, her, it, them (direct), to him / to her, to them",
        "meaning": "me (or m' before vowel), te (or t' before vowel), le / la / les, lui (gender-neutral!), leur (no -s before a verb)",
        "explanation": "me/te/nous/vous cover both direct and indirect; 3rd person splits le/la/les from lui/leur.",
        "id": "fr23_e1"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the literal word-for-word structure of 'Je te comprends très bien'?",
        "german": "Je te comprends très bien",
        "natural": "I understand you very well",
        "options": [
          "I understand you very well",
          "I you understand very well",
          "I to-you understand very well"
        ],
        "target_answer": "I you understand very well",
        "meaning": "Literal structure: I you understand very well",
        "explanation": "te ('you') steps left of comprends: 'I you understand very well'.",
        "id": "fr23_e2"
      },
      {
        "type": "shift_select",
        "prompt": "You want to say 'I am speaking to her' (parler à quelqu'un). Which pronoun goes before parle?",
        "options": [
          "Je lui parle",
          "Je la parle",
          "Je elle parle"
        ],
        "target_answer": "Je lui parle",
        "meaning": "I speak to her (or to him)",
        "explanation": "Because parler takes à ('speak TO someone'), it uses the indirect pronoun lui — which covers both 'to him' and 'to her'!",
        "id": "fr23_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "do you understand me",
        "cues": [
          "You me understand → Tu me comprends"
        ],
        "idea_parts": [
          "subject → Tu",
          "object pronoun before verb → me",
          "verb → comprends"
        ],
        "target_answer": "Tu me comprends",
        "meaning": "Do you understand me?",
        "word_bank": [
          "Tu",
          "me",
          "comprends",
          "moi",
          "comprendre"
        ],
        "explanation": "me walks left in front of comprends: Tu me comprends ?",
        "diagnosis": {
          "slip": "put moi after comprends",
          "cue": "Unstressed object pronouns walk before the verb: Tu me comprends."
        },
        "id": "fr23_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Je lui ai donné le livre",
        "replays": 2,
        "target_answer": "Je lui ai donné le livre",
        "meaning": "I gave him/her the book",
        "cues": [
          "Subject + to-him/her + have: Je lui ai",
          "given the book: donné le livre"
        ],
        "explanation": "In the passé composé, the pronoun walks in front of the auxiliary avoir: Je lui ai donné.",
        "affirmation": "You placed lui right before ai donné!",
        "id": "fr23_e5"
      }
    ],
    "summary": {
      "outcome": "Place direct (me, te, le, la, nous, vous) and indirect (lui, leur) pronouns before the verb or auxiliary.",
      "use_example": {
        "german": "Je le vois et je lui parle.",
        "english": "I see him and I speak to him/her."
      },
      "takeaway": "le/la is direct ('him/her'); lui is indirect ('to him / to her') — and both walk left of the verb.",
      "curiosity_teaser": "Up next on Le Pont ([2301] The Full Left-Walk): see how Pronouns Walk Left leads directly into The Full Left-Walk."
    },
    "twist": {
      "prompt": "Ungraded — 'He does not see us' (wrap ne...pas around nous voit):",
      "target_answer": "Il ne nous voit pas",
      "word_bank": [
        "Il",
        "ne",
        "nous",
        "voit",
        "pas",
        "voir",
        "on"
      ],
      "explanation": "The negation sandwich hugs both the object pronoun and the verb: Il ne nous voit pas."
    },
    "foreshadow": {
      "line": "Having mastered Pronouns Walk Left, look ahead to Topic 24 (Reflexives & la Routine), where this machinery expands into the next dimension of French thought.",
      "resolvedIn": 24
    },
    "payoff": {
      "ofLesson": 22,
      "text": "The foundation from Topic 22 (en & y) now pays off directly inside Pronouns Walk Left: every sentence here builds on that earlier step."
    }
  },
  {
    "id": 2301,
    "slug": "lesson-2301",
    "title": "The Full Left-Walk",
    "subtitle": "je te vois, tu me comprends, il nous écoute — direct object pronouns walking before the verb.",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "me",
      "te",
      "le",
      "la",
      "nous",
      "vous",
      "voir",
      "comprendre",
      "inviter",
      "attendre"
    ],
    "table_word_ids": [
      "me",
      "te",
      "le",
      "la",
      "nous"
    ],
    "hook": {
      "title": "The Full Left-Walk: Direct Objects Across Every Person",
      "content": "Direct object pronouns walk left of the verb across all persons: me/m' ('me'), te/t' ('you'), le/l' ('him/it'), la/l' ('her/it'), nous ('us'), vous ('you'), les ('them'). And in an infinitive chain (Je veux te voir, Je vais l'inviter), the pronoun stands right in front of the infinitive!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why 'I am waiting for you' is simply Je t'attends",
          "content": "Because attendre already has 'for' built inside its meaning, 'you' is a direct object: te elides before attends → Je t'attends!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Single Verb: Pronoun Before Verb; Infinitive Chain: Pronoun Before Infinitive",
      "content": "Place direct object pronouns before the conjugated verb or before the infinitive.",
      "linguist_note": "Modern French places object clitics immediately before the lexical infinitive in modal/aspectual constructions.",
      "trap_note": "Don't add pour in 'I am waiting for you' (*J'attends pour toi) — use a direct left-walking pronoun: Je t'attends!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each French sentence with its English meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "Je te vois",
            "german": "I see you"
          },
          {
            "id": "p2",
            "english": "Je t'attends (no 'for' needed!)",
            "german": "I am waiting for you"
          },
          {
            "id": "p3",
            "english": "Tu m'écoutes ? (no 'to' needed!)",
            "german": "Are you listening to me?"
          },
          {
            "id": "p4",
            "english": "Il nous comprend",
            "german": "He understands us"
          },
          {
            "id": "p5",
            "english": "Je vais t'inviter (before infinitive!)",
            "german": "I am going to invite you"
          }
        ],
        "target_answer": "I see you, I am waiting for you, Are you listening to me?, He understands us, I am going to invite you",
        "meaning": "Je te vois, Je t'attends (no 'for' needed!), Tu m'écoutes ? (no 'to' needed!), Il nous comprend, Je vais t'inviter (before infinitive!)",
        "explanation": "me, te, le, la elide to m', t', l' before a vowel; in infinitive chains, the pronoun hugs the infinitive.",
        "id": "fr2301_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Where does 'you' (te) go in 'I want to see you tonight'?",
        "options": [
          "Je veux te voir ce soir",
          "Je te veux voir ce soir",
          "Je veux voir te ce soir"
        ],
        "target_answer": "Je veux te voir ce soir",
        "meaning": "I want to see you tonight",
        "explanation": "te is the object of voir, so it stands right in front of voir: Je veux te voir!",
        "id": "fr2301_e2"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the word-for-word structure of 'Je vais l'inviter'?",
        "german": "Je vais l'inviter",
        "natural": "I am going to invite him/her",
        "options": [
          "I am going to invite him/her",
          "I go him/her-to-invite",
          "I him/her go to invite"
        ],
        "target_answer": "I go him/her-to-invite",
        "meaning": "Literal structure: I go him/her-to-invite",
        "explanation": "l' stands right in front of the infinitive inviter.",
        "id": "fr2301_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "I am waiting for you at the station",
        "cues": [
          "I you wait-for → Je t'attends",
          "at the station → à la gare"
        ],
        "idea_parts": [
          "subject + object + verb → Je t'attends",
          "location → à la gare"
        ],
        "target_answer": "Je t'attends à la gare",
        "meaning": "I am waiting for you at the station",
        "word_bank": [
          "Je",
          "t'attends",
          "à",
          "la",
          "gare",
          "te",
          "pour"
        ],
        "explanation": "te elides before attends: Je t'attends.",
        "diagnosis": {
          "slip": "used pour or un-elided te",
          "cue": "attendre needs no 'for', and te elides to t': Je t'attends."
        },
        "id": "fr2301_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Est-ce que vous me comprenez bien",
        "replays": 2,
        "target_answer": "Est-ce que vous me comprenez bien",
        "meaning": "Do you understand me well?",
        "cues": [
          "Est-ce que",
          "vous me comprenez bien"
        ],
        "explanation": "me walks left of comprenez.",
        "affirmation": "You placed me right before comprenez!",
        "id": "fr2301_e5"
      }
    ],
    "summary": {
      "outcome": "Place direct object pronouns before conjugated verbs and before infinitives.",
      "use_example": {
        "german": "Je t'attends ici et je vais t'aider.",
        "english": "I'm waiting for you here and I'm going to help you."
      },
      "takeaway": "Single verb: Je te vois; Infinitive chain: Je veux te voir.",
      "curiosity_teaser": "Up next on Le Pont ([2302] lui & leur): see how The Full Left-Walk leads directly into lui & leur."
    }
  },
  {
    "id": 2302,
    "slug": "lesson-2302",
    "title": "lui & leur",
    "subtitle": "je lui parle ('I speak to him OR to her'), je leur donne — gender-neutral indirect objects.",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "lui",
      "leur",
      "parler",
      "répondre",
      "donné",
      "demander",
      "ami",
      "sœur"
    ],
    "table_word_ids": [
      "lui",
      "leur",
      "parler",
      "répondre",
      "donné"
    ],
    "hook": {
      "title": "lui & leur: One Pronoun for Both 'To Him' and 'To Her'",
      "content": "Whenever a French verb takes à before a person — parler à ('speak to'), répondre à ('answer/reply to'), demander à ('ask [someone]'), donner à ('give to') — the 3rd-person pronoun is indirect: lui means BOTH 'to him' AND 'to her', and leur means 'to them'!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why English 'I ask him / I answer her' uses indirect lui in French",
          "content": "Because French says demander À Marie and répondre À Paul, both verbs ALWAYS take lui ('to him / to her') and leur ('to them'): Je lui demande, Je lui réponds!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "parler à / répondre à / demander à / donner à → lui (sg.) & leur (pl.)",
      "content": "Use lui for both 'to him' and 'to her', and leur (never with an -s before a verb!) for 'to them'.",
      "linguist_note": "French dative verbs require dative clitics lui/leur rather than accusative le/la/les.",
      "trap_note": "Never say *Je la réponds or *Je le demande — responder and demander take à, so you MUST use lui: Je lui réponds, Je lui demande!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each French sentence with its English meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "Je lui parle (to my brother OR my sister)",
            "german": "I speak to him / to her"
          },
          {
            "id": "p2",
            "english": "Je lui réponds (répondre à!)",
            "german": "I answer him / her"
          },
          {
            "id": "p3",
            "english": "Tu lui demandes l'heure (demander à!)",
            "german": "You ask him / her for the time"
          },
          {
            "id": "p4",
            "english": "Nous leur donnons les billets",
            "german": "We give them the tickets"
          },
          {
            "id": "p5",
            "english": "Je vais lui parler demain",
            "german": "I am going to speak to him / her tomorrow"
          }
        ],
        "target_answer": "I speak to him / to her, I answer him / her, You ask him / her for the time, We give them the tickets, I am going to speak to him / her tomorrow",
        "meaning": "Je lui parle (to my brother OR my sister), Je lui réponds (répondre à!), Tu lui demandes l'heure (demander à!), Nous leur donnons les billets, Je vais lui parler demain",
        "explanation": "lui covers both 'to him' and 'to her'; leur covers 'to them' without an -s.",
        "id": "fr2302_e1"
      },
      {
        "type": "shift_select",
        "prompt": "You want to say 'I am answering my sister' (répondre à sa sœur). Which pronoun replaces 'à ma sœur'?",
        "options": [
          "Je lui réponds",
          "Je la réponds",
          "Je elle réponds"
        ],
        "target_answer": "Je lui réponds",
        "meaning": "I answer her (lit. I reply to her)",
        "explanation": "Because répondre takes à, it takes indirect lui — for both men and women!",
        "id": "fr2302_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'I am going to speak to them'?",
        "options": [
          "Je vais leur parler",
          "Je vais leurs parler",
          "Je vais les parler"
        ],
        "target_answer": "Je vais leur parler",
        "meaning": "I am going to speak to them",
        "explanation": "leur stands right before the infinitive parler and NEVER takes an -s before a verb!",
        "id": "fr2302_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "I am going to speak to her tonight (using Je vais lui parler ce soir)",
        "cues": [
          "I am going to-her-speak → Je vais lui parler",
          "tonight → ce soir"
        ],
        "idea_parts": [
          "near future + dative pronoun → Je vais lui parler",
          "time → ce soir"
        ],
        "target_answer": "Je vais lui parler ce soir",
        "meaning": "I am going to speak to her tonight",
        "word_bank": [
          "Je",
          "vais",
          "lui",
          "parler",
          "ce",
          "soir",
          "la",
          "le"
        ],
        "explanation": "lui replaces both 'to him' and 'to her' and sits before parler.",
        "diagnosis": {
          "slip": "used la instead of lui",
          "cue": "parler à takes indirect lui: Je vais lui parler."
        },
        "id": "fr2302_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Il ne m'a pas répondu, mais je lui ai parlé",
        "replays": 2,
        "target_answer": "Il ne m'a pas répondu, mais je lui ai parlé",
        "meaning": "He didn't answer me, but I spoke to him",
        "cues": [
          "Il ne m'a pas répondu",
          "mais je lui ai parlé"
        ],
        "explanation": "Both m' and lui stand before the auxiliary avoir in the past.",
        "affirmation": "You placed both m' and lui before the auxiliary!",
        "id": "fr2302_e5"
      }
    ],
    "summary": {
      "outcome": "Use gender-neutral lui ('to him / to her') and invariable leur ('to them') with parler, répondre, demander, and donner.",
      "use_example": {
        "german": "Ma mère m'appelle — je vais lui répondre.",
        "english": "My mother is calling me — I'm going to answer her."
      },
      "takeaway": "parler, répondre, demander, donner all take à → use lui (him/her) and leur (them).",
      "curiosity_teaser": "Up next on Le Pont ([2303] The Double-Pronoun Highway): see how lui & leur leads directly into The Double-Pronoun Highway."
    }
  },
  {
    "id": 2303,
    "slug": "sprig-2303",
    "title": "The Double-Pronoun Highway",
    "subtitle": "Stacking two pronouns before the verb in strict order: me le, le lui, and y/en last.",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "me",
      "te",
      "le",
      "la",
      "lui",
      "leur",
      "y",
      "en_pron",
      "donné",
      "parler",
      "voir"
    ],
    "table_word_ids": [
      "me",
      "te",
      "le",
      "la",
      "lui"
    ],
    "hook": {
      "title": "What Happens When TWO Pronouns Walk Left at the Same Time?",
      "content": "When two pronouns walk left of the verb, they line up on a strict highway: Lane 1 (me, te, se, nous, vous) → Lane 2 (le, la, les) → Lane 3 (lui, leur) → Lane 4 (y) → Lane 5 (en)! So 'He gives it to me' is Il me le donne ('He to-me it gives'), and 'I give it to him/her' is Je le lui donne ('I it to-him/her give')!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why me le is 'to-me it' but le lui is 'it to-him'",
          "content": "1st/2nd-person me, te, nous, vous ALWAYS stand first (tu me le donnes), whereas 3rd-person le/la/les stands before 3rd-person lui/leur (je le lui donne)!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "The Pronoun Highway: (1) me/te/se/nous/vous → (2) le/la/les → (3) lui/leur → (4) y → (5) en",
      "content": "Read the highway from left to right before the verb or auxiliary.",
      "linguist_note": "Modern French clitic ordering places 1st/2nd person before accusative 3rd person, which in turn precedes dative 3rd person.",
      "trap_note": "Never say *Il le me donne — me/te/nous/vous always take Lane 1 (Il me le donne), while le/la precedes lui/leur (Je le lui donne)!"
    },
    "exercises": [
      {
        "type": "shift_select",
        "prompt": "How do you say 'There is some (of it)' by combining 'il y a' with 'en'?",
        "options": [
          "Il y en a",
          "Il en y a",
          "Il a y en"
        ],
        "target_answer": "Il y en a",
        "meaning": "There is some / There are some",
        "explanation": "On the pronoun highway, y always stands right before en: Il y en a.",
        "id": "fr2303_e1"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the literal word-for-word order of 'Tu me le donnes'?",
        "german": "Tu me le donnes",
        "natural": "You give it to me",
        "options": [
          "You give it to me",
          "You to-me it give",
          "You it to-me give"
        ],
        "target_answer": "You to-me it give",
        "meaning": "Literal structure: You to-me it give",
        "explanation": "me (Lane 1) precedes le (Lane 2) right before the verb donnes.",
        "id": "fr2303_e2"
      },
      {
        "type": "family_matrix",
        "prompt": "Complete the Double-Pronoun Matrix before 'donne' ('gives') for 'to him/her (lui)' + 'it (le)':",
        "rows": [
          "to me (me)",
          "to you (te)",
          "to him / her (lui)"
        ],
        "columns": [
          "it (masculine le)",
          "it (feminine la)"
        ],
        "cells": [
          [
            {
              "german": "me le donne",
              "english": "gives it (m.) to me"
            },
            {
              "german": "me la donne",
              "english": "gives it (f.) to me"
            }
          ],
          [
            {
              "german": "te le donne",
              "english": "gives it (m.) to you"
            },
            {
              "german": "te la donne",
              "english": "gives it (f.) to you"
            }
          ],
          [
            {
              "german": "le lui donne",
              "english": "gives it (m.) to him/her"
            },
            {
              "german": "la lui donne",
              "english": "gives it (f.) to him/her"
            }
          ]
        ],
        "seed": [
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            1,
            0
          ],
          [
            1,
            1
          ],
          [
            2,
            1
          ]
        ],
        "task": {
          "row": 2,
          "column": 0
        },
        "target_answer": "le lui donne",
        "meaning": "gives it (m.) to him/her",
        "row_law": "Rows 1–2 put 1st/2nd-person me/te FIRST; Row 3 puts 3rd-person le/la BEFORE lui.",
        "column_law": "Column 1 pairs with masculine le; Column 2 pairs with feminine la.",
        "explanation": "With 3rd-person lui, le/la stands first: Je le lui donne ('I give it to him/her').",
        "id": "fr2303_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "you give it (masculine) to me",
        "cues": [
          "You to-me it give → Tu me le donnes"
        ],
        "idea_parts": [
          "subject → Tu",
          "double pronoun → me le",
          "verb → donnes"
        ],
        "target_answer": "Tu me le donnes",
        "meaning": "You give it to me",
        "word_bank": [
          "Tu",
          "me",
          "le",
          "donnes",
          "lui",
          "la"
        ],
        "explanation": "me takes Lane 1 and le takes Lane 2 before donnes.",
        "diagnosis": {
          "slip": "put le before me",
          "cue": "me always precedes le: Tu me le donnes."
        },
        "id": "fr2303_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Je le lui ai déjà dit",
        "replays": 2,
        "target_answer": "Je le lui ai déjà dit",
        "meaning": "I already told it to him/her",
        "cues": [
          "Je le lui ai",
          "déjà dit"
        ],
        "explanation": "le lui stands before the auxiliary ai in the passé composé.",
        "affirmation": "You ordered le lui ai déjà dit accurately!",
        "id": "fr2303_e5"
      }
    ],
    "summary": {
      "outcome": "Stack two object pronouns before the verb using the 5-lane highway (me le, te la, le lui, y en).",
      "use_example": {
        "german": "Tu veux le livre ? — Oui, tu me le donnes ?",
        "english": "Do you want the book? — Yes, will you give it to me?"
      },
      "takeaway": "me/te/nous/vous go before le/la/les; le/la/les go before lui/leur; and y/en ride at the back.",
      "curiosity_teaser": "Up next on Le Pont ([24] Reflexives & la Routine): see how The Double-Pronoun Highway leads directly into Reflexives & la Routine."
    }
  },
  {
    "id": 24,
    "slug": "reflexives-and-la-routine",
    "title": "Reflexives & la Routine",
    "subtitle": "se lever, se laver, s'habiller, se coucher — when the subject and the left-walking pronoun are the same person",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "lever",
      "laver",
      "habiller",
      "coucher",
      "appeler",
      "me",
      "te",
      "nous",
      "vous",
      "heure"
    ],
    "table_word_ids": [
      "lever",
      "laver",
      "habiller",
      "coucher",
      "appeler"
    ],
    "hook": {
      "title": "Why You 'Lift Yourself' Out of Bed in French",
      "content": "In English, many verbs hide the object when you do the action to yourself: you 'get up', 'wash', 'dress', 'go to bed'. French is physically explicit: lever means 'to lift/raise' (cousin of lever and levitate), so getting out of bed is se lever — 'to raise oneself'! Couch comes from French coucher ('to lay down'), so going to bed is se coucher — 'to lay oneself down'! You already know how object pronouns walk left of the verb; a reflexive verb is simply a verb whose object pronoun points back at the speaker.",
      "footnotes": [
        {
          "marker": "1",
          "title": "How English 'couch' is literally the French verb coucher",
          "content": "Latin collocāre ('to place together') became Old French couchier ('to lay down'). A couch is literally the place where you lay yourself down (se coucher)!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "je me, tu te, il/elle/on se, nous nous, vous vous",
      "content": "Match the reflexive pronoun to the subject: je me lève ('I get [myself] up'), tu te lèves ('you get up'), il/elle/on se lève ('he/she/we get up'), nous nous levons, vous vous levez. Before a vowel or mute H, me, te, se elide to m', t', s': je m'appelle ('I call myself'), je m'habille ('I dress myself'). And in an infinitive chain after je vais or je veux, the reflexive pronoun still matches the speaker: Je vais me lever ('I am going to get myself up')!",
      "linguist_note": "Latin 3rd-person reflexive sē survived as French se, while 1st and 2nd persons reuse the regular object pronouns me, te, nous, vous.",
      "trap_note": "The shortcut your mind will offer: leaving se unchanged when chaining after je vais (*Je vais se lever). Even before an infinitive, the reflexive pronoun must match 'I': Je vais me lever!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each reflexive daily-routine verb with its English meaning and cognate root:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "se lever (lever / elevate)",
            "german": "to get up (lit. raise oneself)"
          },
          {
            "id": "p2",
            "english": "se laver (lavatory / lava)",
            "german": "to wash oneself"
          },
          {
            "id": "p3",
            "english": "s'habiller (habiliment, mute H)",
            "german": "to get dressed"
          },
          {
            "id": "p4",
            "english": "se coucher (couch)",
            "german": "to go to bed (lit. lay oneself down)"
          },
          {
            "id": "p5",
            "english": "s'appeler (appeal / appellation)",
            "german": "to be named (lit. call oneself)"
          }
        ],
        "target_answer": "to get up (lit. raise oneself), to wash oneself, to get dressed, to go to bed (lit. lay oneself down), to be named (lit. call oneself)",
        "meaning": "se lever (lever / elevate), se laver (lavatory / lava), s'habiller (habiliment, mute H), se coucher (couch), s'appeler (appeal / appellation)",
        "explanation": "Every reflexive verb puts me/te/se/nous/vous directly before the verb.",
        "id": "fr24_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'I am going to get up' (near future of se lever)?",
        "options": [
          "Je vais me lever",
          "Je vais se lever",
          "Je me vais lever"
        ],
        "target_answer": "Je vais me lever",
        "meaning": "I am going to get up",
        "explanation": "The reflexive pronoun sits right in front of the infinitive it belongs to, and changes to me to match Je!",
        "id": "fr24_e2"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the literal word-for-word structure of 'Je me couche tôt'?",
        "german": "Je me couche tôt",
        "natural": "I go to bed early",
        "options": [
          "I go to bed early",
          "I myself lay-down early",
          "I go to couch early"
        ],
        "target_answer": "I myself lay-down early",
        "meaning": "Literal structure: I myself lay-down early",
        "explanation": "Je (I) + me (myself) + couche (lay-down) + tôt (early).",
        "id": "fr24_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "I get dressed quickly in the morning (le matin)",
        "cues": [
          "I myself dress quickly the morning → Je m'habille rapidement le matin"
        ],
        "idea_parts": [
          "subject + elided reflexive → Je m'habille",
          "adverb → rapidement",
          "time → le matin"
        ],
        "target_answer": "Je m'habille rapidement le matin",
        "meaning": "I get dressed quickly in the morning",
        "word_bank": [
          "Je",
          "m'habille",
          "rapidement",
          "le",
          "matin",
          "me",
          "s'habille"
        ],
        "explanation": "me elides before mute-H habiller: Je m'habille.",
        "diagnosis": {
          "slip": "used me without elision or s'habille",
          "cue": "Elide me before habiller: Je m'habille."
        },
        "id": "fr24_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Je me lève à sept heures",
        "replays": 2,
        "target_answer": "Je me lève à sept heures",
        "meaning": "I get up at seven o'clock",
        "cues": [
          "reflexive: Je me lève",
          "time: à sept heures"
        ],
        "explanation": "lève takes a grave accent è when the syllable is stressed.",
        "affirmation": "You caught Je me lève and à sept heures.",
        "id": "fr24_e5"
      }
    ],
    "summary": {
      "outcome": "Conjugate reflexive verbs across the daily routine and adapt the reflexive pronoun inside infinitive chains (je vais me lever).",
      "use_example": {
        "german": "Je me lève à sept heures et je m'habille.",
        "english": "I get up at seven o'clock and get dressed."
      },
      "takeaway": "Reflexives are just left-walking pronouns pointing back at the subject — and they adapt to the speaker even before an infinitive.",
      "curiosity_teaser": "Up next on Le Pont ([2401] I Call Myself): see how Reflexives & la Routine leads directly into I Call Myself."
    },
    "twist": {
      "prompt": "Ungraded — 'We see each other tomorrow' (use On se voit):",
      "target_answer": "On se voit demain",
      "word_bank": [
        "On",
        "se",
        "voit",
        "demain",
        "nous",
        "voir"
      ],
      "explanation": "Reflexive se also expresses reciprocal 'each other': On se voit demain ('We'll see each other tomorrow')!"
    },
    "foreshadow": {
      "line": "Having mastered Reflexives & la Routine, look ahead to Topic 25 (il y a), where this machinery expands into the next dimension of French thought.",
      "resolvedIn": 25
    },
    "payoff": {
      "ofLesson": 23,
      "text": "The foundation from Topic 23 (Pronouns Walk Left) now pays off directly inside Reflexives & la Routine: every sentence here builds on that earlier step."
    }
  },
  {
    "id": 2401,
    "slug": "lesson-2401",
    "title": "I Call Myself",
    "subtitle": "je m'appelle, tu t'appelles, on se voit — reflexive pronouns in everyday interaction.",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "appeler",
      "lever",
      "me",
      "te",
      "nous",
      "vous",
      "on",
      "voir",
      "parler",
      "ami"
    ],
    "table_word_ids": [
      "appeler",
      "lever",
      "me",
      "te",
      "nous"
    ],
    "hook": {
      "title": "Reflexives for Self-Action and Reciprocal 'Each Other'",
      "content": "When a reflexive verb is plural (nous, vous, ils/elles, or everyday on), the exact same reflexive pronoun se / nous / vous ALSO means 'EACH OTHER': On se voit demain ('We see each other tomorrow'), On s'appelle ce soir ('We'll call each other tonight')!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why 'See you tomorrow!' is On se voit demain",
          "content": "French uses reciprocal On se voit demain ('We see each other tomorrow') as an everyday goodbye!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Singular Reflexive ('Myself/Yourself') → Plural Reciprocal ('Each Other')",
      "content": "Use je me / tu te / il se for actions directed at oneself, and on se / nous nous / vous vous for actions done to each other.",
      "linguist_note": "Romance reflexive clitics encode both reflexive and reciprocal meaning in plural/collective subjects.",
      "trap_note": "When using everyday on for 'we', remember that its reflexive pronoun is se (s' before a vowel): On se voit, On s'appelle!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each reflexive or reciprocal expression with its meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "Je m'appelle Marie",
            "german": "My name is Marie (I call myself)"
          },
          {
            "id": "p2",
            "english": "Comment tu t'appelles ?",
            "german": "What is your name? (How do you call yourself?)"
          },
          {
            "id": "p3",
            "english": "On se voit demain !",
            "german": "We'll see each other tomorrow!"
          },
          {
            "id": "p4",
            "english": "On s'appelle ce soir",
            "german": "We'll call each other tonight"
          },
          {
            "id": "p5",
            "english": "Nous nous comprenons",
            "german": "We understand each other"
          }
        ],
        "target_answer": "My name is Marie (I call myself), What is your name? (How do you call yourself?), We'll see each other tomorrow!, We'll call each other tonight, We understand each other",
        "meaning": "Je m'appelle Marie, Comment tu t'appelles ?, On se voit demain !, On s'appelle ce soir, Nous nous comprenons",
        "explanation": "With on, nous, vous, and ils/elles, the reflexive pronoun also means 'each other'.",
        "id": "fr2401_e1"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the literal word-for-word breakdown of 'On se voit ce soir'?",
        "german": "On se voit ce soir",
        "natural": "We'll see each other tonight",
        "options": [
          "We'll see each other tonight",
          "One oneself/each-other sees this evening",
          "We see us tonight"
        ],
        "target_answer": "One oneself/each-other sees this evening",
        "meaning": "Literal structure: One oneself/each-other sees this evening",
        "explanation": "on ('one/we') + se ('each other') + voit ('sees').",
        "id": "fr2401_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How do two friends say 'We'll call each other tomorrow' using everyday 'on'?",
        "options": [
          "On s'appelle demain",
          "On nous appelle demain",
          "On appelle demain"
        ],
        "target_answer": "On s'appelle demain",
        "meaning": "We'll call each other tomorrow",
        "explanation": "on always pairs with 3rd-person reflexive se (elided to s' before appelle): On s'appelle demain!",
        "id": "fr2401_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "we see each other at the café tonight (using On se voit)",
        "cues": [
          "We see each other → On se voit",
          "at the café tonight → au café ce soir"
        ],
        "idea_parts": [
          "reciprocal verb → On se voit",
          "place + time → au café ce soir"
        ],
        "target_answer": "On se voit au café ce soir",
        "meaning": "We'll see each other at the café tonight",
        "word_bank": [
          "On",
          "se",
          "voit",
          "au",
          "café",
          "ce",
          "soir",
          "nous",
          "la"
        ],
        "explanation": "On se voit is the natural everyday way to say 'We'll see each other'.",
        "diagnosis": {
          "slip": "used nous with On",
          "cue": "Pair On with se: On se voit."
        },
        "id": "fr2401_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Nous nous voyons tous les lundis",
        "replays": 2,
        "target_answer": "Nous nous voyons tous les lundis",
        "meaning": "We see each other every Monday",
        "cues": [
          "Nous nous voyons",
          "tous les lundis"
        ],
        "explanation": "First Nous is 'we'; second nous is 'each other'.",
        "affirmation": "You wrote the double Nous nous cleanly!",
        "id": "fr2401_e5"
      }
    ],
    "summary": {
      "outcome": "Use reflexive verbs both for self-directed actions (je m'appelle) and reciprocal 'each other' actions (on se voit, on s'appelle).",
      "use_example": {
        "german": "On s'appelle demain et on se voit samedi !",
        "english": "We'll call each other tomorrow and see each other Saturday!"
      },
      "takeaway": "With on/nous/vous, reflexive pronouns also mean 'each other' (On se voit !).",
      "curiosity_teaser": "Up next on Le Pont ([2402] The Morning Round): see how I Call Myself leads directly into The Morning Round."
    }
  },
  {
    "id": 2402,
    "slug": "lesson-2402",
    "title": "The Morning Round",
    "subtitle": "se lever, se laver, s'habiller, se coucher — chaining daily routine verbs.",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "lever",
      "laver",
      "habiller",
      "coucher",
      "me",
      "te",
      "main",
      "tête",
      "heure"
    ],
    "table_word_ids": [
      "lever",
      "laver",
      "habiller",
      "coucher",
      "me"
    ],
    "hook": {
      "title": "Chaining the Morning and Evening Routine — and Body Parts",
      "content": "Walk through your day with se lever ('get up'), se laver ('wash'), s'habiller ('get dressed'), and se coucher ('go to bed'). When you wash your hands, the reflexive pronoun me already tells whose hands they are, so French uses the definite article les instead of 'my': Je me lave les mains! And in the past tense, ALL reflexive verbs live inside the être house: Je me suis levé(e)!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why reflexives live inside the être house in the past tense!",
          "content": "Every reflexive verb forms its passé composé with être: Je me suis levé ('I got up'), Elle s'est habillée ('She got dressed')!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Present: Je me lève; Past: Je me suis levé(e); Body Parts: Je me lave les mains",
      "content": "Chain routine verbs across present and past.",
      "linguist_note": "Inalienable possession of body parts in French uses a reflexive dative clitic + definite article.",
      "trap_note": "Don't say *Je me lave mes mains or *J'ai me levé — use les mains, and use être in the past (Je me suis levé)!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each routine sentence with its English meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "Je me lève à sept heures",
            "german": "I get up at seven o'clock"
          },
          {
            "id": "p2",
            "english": "Je me lave les mains (definite les!)",
            "german": "I wash my hands"
          },
          {
            "id": "p3",
            "english": "Je m'habille vite",
            "german": "I get dressed quickly"
          },
          {
            "id": "p4",
            "english": "Je me couche tard",
            "german": "I go to bed late"
          },
          {
            "id": "p5",
            "english": "Je me suis levé tôt (être in past!)",
            "german": "I got up early"
          }
        ],
        "target_answer": "I get up at seven o'clock, I wash my hands, I get dressed quickly, I go to bed late, I got up early",
        "meaning": "Je me lève à sept heures, Je me lave les mains (definite les!), Je m'habille vite, Je me couche tard, Je me suis levé tôt (être in past!)",
        "explanation": "Reflexives use definite articles with body parts and take être in the passé composé.",
        "id": "fr2402_e1"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the literal word-for-word structure of 'Je me lave les mains'?",
        "german": "Je me lave les mains",
        "natural": "I wash my hands",
        "options": [
          "I wash my hands",
          "I to-myself wash the hands",
          "I wash me my hands"
        ],
        "target_answer": "I to-myself wash the hands",
        "meaning": "Literal structure: I to-myself wash the hands",
        "explanation": "me ('to-myself') already marks the owner, so French uses les mains ('the hands').",
        "id": "fr2402_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'I got up at eight o'clock' in the passé composé?",
        "options": [
          "Je me suis levé à huit heures",
          "J'ai me levé à huit heures",
          "Je m'ai levé à huit heures"
        ],
        "target_answer": "Je me suis levé à huit heures",
        "meaning": "I got up at eight o'clock",
        "explanation": "All reflexive verbs take être in the passé composé: Je me suis levé(e)!",
        "id": "fr2402_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "I get up and I get dressed quickly",
        "cues": [
          "I get up → Je me lève",
          "and I get dressed quickly → et je m'habille rapidement"
        ],
        "idea_parts": [
          "first reflexive → Je me lève",
          "second reflexive + adverb → et je m'habille rapidement"
        ],
        "target_answer": "Je me lève et je m'habille rapidement",
        "meaning": "I get up and get dressed quickly",
        "word_bank": [
          "Je",
          "me",
          "lève",
          "et",
          "je",
          "m'habille",
          "rapidement",
          "s'habille",
          "la"
        ],
        "explanation": "Repeat je + reflexive pronoun on each verb: Je me lève et je m'habille.",
        "diagnosis": {
          "slip": "used s'habille",
          "cue": "Match m'habille to je."
        },
        "id": "fr2402_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Elle s'est levée tôt ce matin",
        "replays": 2,
        "target_answer": "Elle s'est levée tôt ce matin",
        "meaning": "She got up early this morning",
        "cues": [
          "Elle s'est levée",
          "tôt ce matin"
        ],
        "explanation": "se + est elides to s'est, and levée agrees with Elle.",
        "affirmation": "You wrote Elle s'est levée with the feminine -e!",
        "id": "fr2402_e5"
      }
    ],
    "summary": {
      "outcome": "Chain reflexive daily-routine verbs across present and passé composé (with être), and use definite articles with body parts.",
      "use_example": {
        "german": "Ce matin, je me suis levé tôt et je me suis habillé.",
        "english": "This morning, I got up early and got dressed."
      },
      "takeaway": "All reflexives take être in the past (Je me suis levé), and body parts take le/la/les (Je me lave les mains).",
      "curiosity_teaser": "Up next on Le Pont ([25] il y a): see how The Morning Round leads directly into il y a."
    }
  },
  {
    "id": 25,
    "slug": "il-y-a",
    "title": "il y a",
    "subtitle": "'It has there' = there is / there are — and with a time span, 'ago' (il y a trois ans)",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "il_y_a",
      "y",
      "avoir",
      "a",
      "ans",
      "semaine",
      "minute",
      "café",
      "complication"
    ],
    "table_word_ids": [
      "il_y_a",
      "y",
      "avoir",
      "a",
      "ans"
    ],
    "hook": {
      "title": "Three Tiny Words You Already Own",
      "content": "Take il ('it'), y ('there', from Topic 22), and a ('has', from Topic 10) and snap them together: il y a (/il j‿a/). Word for word, it says 'It has there'. In French, that three-word machine does TWO massive jobs: (1) Before a thing or person, it means both 'there is' AND 'there are' (Il y a un café 'There is a café', Il y a deux trains 'There are two trains'). (2) Before a length of time inside a past sentence, it means 'AGO': J'ai visité Paris il y a trois ans ('I visited Paris three years ago')!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why il y a never becomes plural *il y ont",
          "content": "Because il is an impersonal dummy subject ('it') and the nouns after a are direct objects ('it has two trains there'), a stays singular even before a hundred things!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Existence ('There Is/Are') vs. Elapsed Time ('Ago')",
      "content": "Notice the contrast between Topic 20's depuis and Topic 25's il y a with time: J'habite ici depuis trois ans (Present + depuis = 'I have lived here FOR three years', still ongoing) vs. Je suis arrivé il y a trois ans (Passé composé + il y a = 'I arrived three years AGO', completed point in the past)! And to say 'There is not / There are no', wrap n'...pas around y a and collapse the article to de: Il n'y a pas de complication ('There is no complication').",
      "linguist_note": "Spanish hay (ha + y) is the exact historical twin of French il y a, fused into a single word.",
      "trap_note": "The shortcut your mind will offer: confusing depuis trois ans ('for three years', ongoing) with il y a trois ans ('three years ago', completed). Completed past + il y a = AGO!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each il y a expression with its meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "Il y a un bon restaurant ici",
            "german": "There is a good restaurant here"
          },
          {
            "id": "p2",
            "english": "Il y a trois trains",
            "german": "There are three trains"
          },
          {
            "id": "p3",
            "english": "Il n'y a pas de problème",
            "german": "There is no problem"
          },
          {
            "id": "p4",
            "english": "il y a dix minutes (with past tense)",
            "german": "ten minutes ago"
          },
          {
            "id": "p5",
            "english": "il y a deux ans (with past tense)",
            "german": "two years ago"
          }
        ],
        "target_answer": "There is a good restaurant here, There are three trains, There is no problem, ten minutes ago, two years ago",
        "meaning": "Il y a un bon restaurant ici, Il y a trois trains, Il n'y a pas de problème, il y a dix minutes (with past tense), il y a deux ans (with past tense)",
        "explanation": "il y a means 'there is/are' before objects, and 'ago' before a time span.",
        "id": "fr25_e1"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the literal word-for-word breakdown of 'Il y a un café ici'?",
        "german": "Il y a un café ici",
        "natural": "There is a café here",
        "options": [
          "There is a café here",
          "It there has a café here",
          "He there is a café here"
        ],
        "target_answer": "It there has a café here",
        "meaning": "Literal structure: It there has a café here",
        "explanation": "il (it) + y (there) + a (has) = 'It there has'.",
        "id": "fr25_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'She arrived ten minutes ago'?",
        "options": [
          "Elle est arrivée il y a dix minutes",
          "Elle est arrivée depuis dix minutes",
          "Elle arrive il y a dix minutes"
        ],
        "target_answer": "Elle est arrivée il y a dix minutes",
        "meaning": "She arrived ten minutes ago",
        "explanation": "A completed past event (est arrivée) + il y a + time span means 'ten minutes ago'.",
        "id": "fr25_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "there is a good bistro here (use un bon restaurant)",
        "cues": [
          "There is → Il y a + a good restaurant here → un bon restaurant ici"
        ],
        "idea_parts": [
          "existence opener → Il y a",
          "noun phrase → un bon restaurant",
          "place → ici"
        ],
        "target_answer": "Il y a un bon restaurant ici",
        "meaning": "There is a good restaurant here",
        "word_bank": [
          "Il",
          "y",
          "a",
          "un",
          "bon",
          "restaurant",
          "ici",
          "est",
          "la"
        ],
        "explanation": "Il y a opens any existence statement.",
        "diagnosis": {
          "slip": "used Il est instead of Il y a",
          "cue": "Use Il y a ('it has there') for 'there is / there are'."
        },
        "id": "fr25_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Il n'y a pas de complication",
        "replays": 2,
        "target_answer": "Il n'y a pas de complication",
        "meaning": "There is no complication",
        "cues": [
          "negative existence: Il n'y a pas",
          "partitive collapse: de complication"
        ],
        "explanation": "n' wraps around y a (Il n'y a pas), and une collapses to bare de after negation.",
        "affirmation": "You wrote Il n'y a pas de complication with the negative de.",
        "id": "fr25_e5"
      }
    ],
    "summary": {
      "outcome": "Use il y a for both 'there is / there are' and 'ago' (with time spans), and negate it with il n'y a pas de.",
      "use_example": {
        "german": "Il y a deux ans, il y avait un petit café ici.",
        "english": "Two years ago, there was a small café here."
      },
      "takeaway": "il + y + a ('it there has') means 'there is/are' in space and 'ago' in time.",
      "curiosity_teaser": "Up next on Le Pont ([2501] It Has There): see how il y a leads directly into It Has There."
    },
    "twist": {
      "prompt": "Ungraded — 'I saw this film two years ago' (use J'ai vu ce film):",
      "target_answer": "J'ai vu ce film il y a deux ans",
      "word_bank": [
        "J'ai",
        "vu",
        "ce",
        "film",
        "il",
        "y",
        "a",
        "deux",
        "ans",
        "depuis",
        "la"
      ],
      "explanation": "J'ai vu ce film (completed past) + il y a deux ans ('two years ago')."
    },
    "foreshadow": {
      "line": "Having mastered il y a, look ahead to Topic 26 (The Would-World), where this machinery expands into the next dimension of French thought.",
      "resolvedIn": 26
    },
    "payoff": {
      "ofLesson": 24,
      "text": "The foundation from Topic 24 (Reflexives & la Routine) now pays off directly inside il y a: every sentence here builds on that earlier step."
    }
  },
  {
    "id": 2501,
    "slug": "lesson-2501",
    "title": "It Has There",
    "subtitle": "il y a un café ('there is a café') vs il y a trois ans ('three years ago').",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "il_y_a",
      "y",
      "avoir",
      "ans",
      "semaine",
      "minute",
      "heure",
      "café",
      "gare"
    ],
    "table_word_ids": [
      "il_y_a",
      "y",
      "avoir",
      "ans",
      "semaine"
    ],
    "hook": {
      "title": "Space ('There Is') and Time ('Ago') in One Three-Word Formula",
      "content": "Compare the two jobs of il y a: (1) Il y a un train dans dix minutes ('There is a train in ten minutes' — existence in space). (2) Le train est parti il y a dix minutes ('The train left ten minutes ago' — elapsed time in the past)!",
      "footnotes": [
        {
          "marker": "1",
          "title": "How to tell 'there is' apart from 'ago' in one glance",
          "content": "Before a person or object, il y a means 'there is / there are'. Before a time span alongside a past-tense verb, il y a means 'AGO'!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Il y a + Object = 'There is/are'; Past Verb + il y a + Time = 'Ago'",
      "content": "Contrast Present + depuis ('for X time', ongoing) with Past + il y a ('X time ago', completed).",
      "linguist_note": "Temporal il y a ('ago') grammaticalized from existential 'there is [X time elapsed since]...'.",
      "trap_note": "Don't translate 'ten minutes ago' as *dix minutes avant — put il y a right in front of the time span: il y a dix minutes!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Sort these il y a phrases into Space ('there is/are') vs. Time ('ago'):",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "Il y a un bon café ici",
            "german": "Space: There is a good café here"
          },
          {
            "id": "p2",
            "english": "Il y a deux gares dans la ville",
            "german": "Space: There are two stations in the city"
          },
          {
            "id": "p3",
            "english": "Je suis arrivé il y a une heure",
            "german": "Time: I arrived an hour ago"
          },
          {
            "id": "p4",
            "english": "Il est parti il y a cinq minutes",
            "german": "Time: He left five minutes ago"
          },
          {
            "id": "p5",
            "english": "J'ai visité Lyon il y a trois ans",
            "german": "Time: I visited Lyon three years ago"
          }
        ],
        "target_answer": "Space: There is a good café here, Space: There are two stations in the city, Time: I arrived an hour ago, Time: He left five minutes ago, Time: I visited Lyon three years ago",
        "meaning": "Il y a un bon café ici, Il y a deux gares dans la ville, Je suis arrivé il y a une heure, Il est parti il y a cinq minutes, J'ai visité Lyon il y a trois ans",
        "explanation": "Before a time span in a past sentence, il y a always means 'ago'.",
        "id": "fr2501_e1"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the word-for-word order of 'il y a trois ans' ('three years ago')?",
        "german": "il y a trois ans",
        "natural": "three years ago",
        "options": [
          "three years ago",
          "it there has three years",
          "three years before there"
        ],
        "target_answer": "it there has three years",
        "meaning": "Literal structure: it there has three years",
        "explanation": "French puts il y a BEFORE the time span, whereas English puts 'ago' AFTER it!",
        "id": "fr2501_e2"
      },
      {
        "type": "shift_select",
        "prompt": "Contrast Topic 20 and Topic 25: 'I have lived here FOR two years' vs. 'I arrived here two years AGO':",
        "options": [
          "J'habite ici depuis deux ans / Je suis arrivé ici il y a deux ans",
          "J'habite ici il y a deux ans / Je suis arrivé ici depuis deux ans",
          "J'ai habité ici depuis deux ans / J'arrive ici il y a deux ans"
        ],
        "target_answer": "J'habite ici depuis deux ans / Je suis arrivé ici il y a deux ans",
        "meaning": "Present + depuis = 'for X time (still ongoing)'; Past + il y a = 'X time ago (completed)'!",
        "explanation": "This pair is one of the most clarifying contrasts in French grammar.",
        "id": "fr2501_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "he left five minutes ago",
        "cues": [
          "He left → Il est parti",
          "five minutes ago → il y a cinq minutes"
        ],
        "idea_parts": [
          "completed past → Il est parti",
          "ago + time → il y a cinq minutes"
        ],
        "target_answer": "Il est parti il y a cinq minutes",
        "meaning": "He left five minutes ago",
        "word_bank": [
          "Il",
          "est",
          "parti",
          "il",
          "y",
          "a",
          "cinq",
          "minutes",
          "depuis",
          "la"
        ],
        "explanation": "Il est parti + il y a cinq minutes ('five minutes ago').",
        "diagnosis": {
          "slip": "used depuis",
          "cue": "For 'ago' with a completed past event, use il y a: il y a cinq minutes."
        },
        "id": "fr2501_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Il y a un train qui est parti il y a dix minutes",
        "replays": 2,
        "target_answer": "Il y a un train qui est parti il y a dix minutes",
        "meaning": "There is a train that left ten minutes ago",
        "cues": [
          "Il y a un train",
          "qui est parti il y a dix minutes"
        ],
        "explanation": "Both jobs of il y a in a single sentence!",
        "affirmation": "You nailed both uses of il y a in one sentence!",
        "id": "fr2501_e5"
      }
    ],
    "summary": {
      "outcome": "Deploy il y a both for spatial existence ('there is/are') and elapsed past time ('ago'), contrasting it with depuis.",
      "use_example": {
        "german": "Il y a dix ans, j'habitais à Lyon.",
        "english": "Ten years ago, I used to live in Lyon."
      },
      "takeaway": "Before a time span in the past, il y a means 'ago'.",
      "curiosity_teaser": "Up next on Le Pont ([2502] il y a Gym): see how It Has There leads directly into il y a Gym."
    }
  },
  {
    "id": 2502,
    "slug": "lesson-2502",
    "title": "il y a Gym",
    "subtitle": "Negating and questioning existence: il n'y a pas de…, est-ce qu'il y a…?",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "il_y_a",
      "y",
      "en_pron",
      "pas",
      "de",
      "est_ce_que",
      "complication",
      "table",
      "pain"
    ],
    "table_word_ids": [
      "il_y_a",
      "y",
      "en_pron",
      "pas",
      "de"
    ],
    "hook": {
      "title": "Questioning and Negating il y a — Plus Il y en a",
      "content": "Negate il y a by wrapping n'...pas around y a and collapsing the article to bare de: Il n'y a pas de pain ('There is no bread'). Question it with Est-ce qu'il y a…? And combine it with en ('some') as Il y en a ('There is some / There are some')!",
      "footnotes": [
        {
          "marker": "1",
          "title": "How n' hugs BOTH y and a inside Il n'y a pas",
          "content": "Because y is a left-walking pronoun attached to a, the negation sandwich wraps around the pair together: Il n'y a pas!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Il y a → Il n'y a pas de… / Est-ce qu'il y a… / Il y en a",
      "content": "Run these three patterns across everyday situations.",
      "linguist_note": "Existential negation triggers partitive de-reduction (Il n'y a pas de + bare noun).",
      "trap_note": "Never forget to collapse un/une/du/de la/des to bare de (or d' before a vowel) after Il n'y a pas!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each variation of il y a with its meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "Est-ce qu'il y a une table ?",
            "german": "Is there a table?"
          },
          {
            "id": "p2",
            "english": "Il n'y a pas de problème",
            "german": "There is no problem"
          },
          {
            "id": "p3",
            "english": "Il n'y a pas d'eau (elided de)",
            "german": "There is no water"
          },
          {
            "id": "p4",
            "english": "Il y en a (with en = some)",
            "german": "There is some / There are some"
          },
          {
            "id": "p5",
            "english": "Il n'y en a pas",
            "german": "There isn't any / There are none"
          }
        ],
        "target_answer": "Is there a table?, There is no problem, There is no water, There is some / There are some, There isn't any / There are none",
        "meaning": "Est-ce qu'il y a une table ?, Il n'y a pas de problème, Il n'y a pas d'eau (elided de), Il y en a (with en = some), Il n'y en a pas",
        "explanation": "y a stays together inside Est-ce qu'il y a and Il n'y a pas.",
        "id": "fr2502_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'There is no bread'?",
        "options": [
          "Il n'y a pas de pain",
          "Il n'y a pas du pain",
          "Il y n'a pas de pain"
        ],
        "target_answer": "Il n'y a pas de pain",
        "meaning": "There is no bread",
        "explanation": "n' goes before y a, and du pain collapses to bare de pain after pas!",
        "id": "fr2502_e2"
      },
      {
        "type": "derive",
        "prompt": "Ask 'Is there a train tonight?' by placing Est-ce qu' in front of il y a un train ce soir:",
        "english_hint": "Est-ce qu' + il y a...",
        "target_answer": "Est-ce qu'il y a un train ce soir",
        "meaning": "Is there a train tonight?",
        "explanation": "que elides before il: Est-ce qu'il y a un train ce soir.",
        "id": "fr2502_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "there is no reservation for tonight",
        "cues": [
          "There is not → Il n'y a pas",
          "of reservation → de réservation",
          "for tonight → pour ce soir"
        ],
        "idea_parts": [
          "negative existence → Il n'y a pas",
          "collapsed noun → de réservation",
          "time → pour ce soir"
        ],
        "target_answer": "Il n'y a pas de réservation pour ce soir",
        "meaning": "There is no reservation for tonight",
        "word_bank": [
          "Il",
          "n'y",
          "a",
          "pas",
          "de",
          "réservation",
          "pour",
          "ce",
          "soir",
          "une",
          "la"
        ],
        "explanation": "une réservation collapses to de réservation after Il n'y a pas.",
        "diagnosis": {
          "slip": "kept une",
          "cue": "Collapse une to de after Il n'y a pas: pas de réservation."
        },
        "id": "fr2502_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Est-ce qu'il y a du café ? Oui, il y en a",
        "replays": 2,
        "target_answer": "Est-ce qu'il y a du café ? Oui, il y en a",
        "meaning": "Is there any coffee? Yes, there is some",
        "cues": [
          "Est-ce qu'il y a du café",
          "Oui, il y en a"
        ],
        "explanation": "du café in the question becomes en in the answer: Oui, il y en a!",
        "affirmation": "You paired Est-ce qu'il y a with Oui, il y en a!",
        "id": "fr2502_e5"
      }
    ],
    "summary": {
      "outcome": "Question and negate il y a (Est-ce qu'il y a, Il n'y a pas de) and combine it with en (Il y en a).",
      "use_example": {
        "german": "Il n'y a pas de problème, il y en a beaucoup.",
        "english": "There's no problem, there's plenty of it."
      },
      "takeaway": "Il y a → Il n'y a pas de (none) → Il y en a (there is some).",
      "curiosity_teaser": "Up next on Le Pont ([26] The Would-World): see how il y a Gym leads directly into The Would-World."
    }
  },
  {
    "id": 26,
    "slug": "the-would-world",
    "title": "The Would-World",
    "subtitle": "je voudrais, tu pourrais, je ferais — the conditional politeness escalator and the -ai future tense",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "voudrais",
      "pourrais",
      "ferais",
      "vouloir",
      "faire",
      "aller",
      "avoir",
      "vin",
      "café"
    ],
    "table_word_ids": [
      "voudrais",
      "pourrais",
      "ferais",
      "vouloir",
      "faire"
    ],
    "hook": {
      "title": "How Future Stem + Imparfait Ending Creates 'Would'",
      "content": "What is 'would' historically? In English, 'would' is literally the past tense of 'will' ('I wished that I would...'). French builds its Would-World (le conditionnel) using the exact same recipe! It takes the future stem (always ending in the sound /ʁ/) and welds on the -ais/-ait endings from the imparfait (Topic 19): vouloir → je voudrais ('I would like'), pouvoir → tu pourrais ('you could'), faire → je ferais ('I would do/make'), parler → je parlerais ('I would speak').",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why the French future tense is literally Infinitive + J'ai",
          "content": "Vulgar Latin formed the future by gluing habēre ('to have') onto the back of the infinitive: parler + ai ('I have to speak') → je parlerai ('I will speak'), parler + as → tu parleras, parler + a → il parlera!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "The Politeness Escalator: je veux → je voudrais",
      "content": "In Topic 1 you learned je veux ('I want'). In a Paris bistro or shop, saying Je veux un café sounds blunt — like banging on the counter. Step onto the conditional escalator and say Je voudrais un café, s'il vous plaît ('I would like a coffee, please') or Tu pourrais m'aider ? ('Could you help me?'). And just like je veux, je voudrais chains directly with any bare infinitive: Je voudrais réserver une table ('I would like to reserve a table').",
      "linguist_note": "Both the synthetic future (-ai, -as, -a) and conditional (-ais, -ais, -ait) are Medieval Romance fusions of the infinitive + present/imperfect of habēre.",
      "trap_note": "The shortcut your mind will offer: using blunt Je veux when ordering in a restaurant or shop. Step up to the conditional Je voudrais for polite requests!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each conditional or future form with its English meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "je voudrais (from vouloir)",
            "german": "I would like"
          },
          {
            "id": "p2",
            "english": "tu pourrais (from pouvoir)",
            "german": "you could (polite request)"
          },
          {
            "id": "p3",
            "english": "je ferais (from faire)",
            "german": "I would do / make"
          },
          {
            "id": "p4",
            "english": "je parlerai (infinitive + ai)",
            "german": "I will speak"
          },
          {
            "id": "p5",
            "english": "je parlerais (infinitive + ais)",
            "german": "I would speak"
          }
        ],
        "target_answer": "I would like, you could (polite request), I would do / make, I will speak, I would speak",
        "meaning": "je voudrais (from vouloir), tu pourrais (from pouvoir), je ferais (from faire), je parlerai (infinitive + ai), je parlerais (infinitive + ais)",
        "explanation": "Future ends in -ai (from j'ai); Conditional ends in -ais (from j'avais).",
        "id": "fr26_e1"
      },
      {
        "type": "morpheme_tiles",
        "prompt": "Build the conditional 'I would speak' by attaching the imparfait ending -ais to the infinitive parler:",
        "tile_options": [
          "parler",
          "ais",
          "ai",
          "é"
        ],
        "target_answer": "parlerais",
        "meaning": "je parlerais (I would speak)",
        "explanation": "Infinitive parler + -ais = parlerais ('would speak').",
        "id": "fr26_e2"
      },
      {
        "type": "shift_select",
        "prompt": "You are ordering red wine at a restaurant. Which is the polite French phrasing?",
        "options": [
          "Je voudrais du vin rouge, s'il vous plaît",
          "Je veux le vin rouge",
          "J'ai voulu du vin rouge"
        ],
        "target_answer": "Je voudrais du vin rouge, s'il vous plaît",
        "meaning": "I would like some red wine, please",
        "explanation": "Je voudrais softens 'I want' into polite 'I would like'.",
        "id": "fr26_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "I would like to reserve a table for tonight",
        "cues": [
          "I would like to reserve a table → Je voudrais réserver une table + for tonight → pour ce soir"
        ],
        "idea_parts": [
          "polite conditional + infinitive → Je voudrais réserver",
          "object → une table",
          "time → pour ce soir"
        ],
        "target_answer": "Je voudrais réserver une table pour ce soir",
        "meaning": "I would like to reserve a table for tonight",
        "word_bank": [
          "Je",
          "voudrais",
          "réserver",
          "une",
          "table",
          "pour",
          "ce",
          "soir",
          "veux",
          "la"
        ],
        "explanation": "Je voudrais pulls the bare infinitive réserver just like je veux.",
        "diagnosis": {
          "slip": "conjugated réserver or used veux",
          "cue": "Use Je voudrais + bare infinitive réserver."
        },
        "id": "fr26_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Tu pourrais parler plus lentement",
        "replays": 2,
        "target_answer": "Tu pourrais parler plus lentement",
        "meaning": "Could you speak more slowly?",
        "cues": [
          "Could you: Tu pourrais",
          "speak more slowly: parler plus lentement"
        ],
        "explanation": "Tu pourrais + infinitive turns a command into a gentle request.",
        "affirmation": "You heard Tu pourrais parler and the -ment adverb lentement.",
        "id": "fr26_e5"
      }
    ],
    "summary": {
      "outcome": "Deploy je voudrais, tu pourrais, and je ferais for polite requests and hypotheticals, and recognize the -ai future tense.",
      "use_example": {
        "german": "Je voudrais vous demander une information.",
        "english": "I would like to ask you for a piece of information."
      },
      "takeaway": "Future stem (/ʁ/) + -ai is 'will'; Future stem (/ʁ/) + -ais is 'would'.",
      "curiosity_teaser": "Up next on Le Pont ([2601] Je voudrais): see how The Would-World leads directly into Je voudrais."
    },
    "twist": {
      "prompt": "Ungraded — 'What would you do?' (use Qu'est-ce que tu ferais):",
      "target_answer": "Qu'est-ce que tu ferais",
      "word_bank": [
        "Qu'est-ce",
        "que",
        "tu",
        "ferais",
        "fais",
        "faire"
      ],
      "explanation": "fer- (future stem of faire) + -ais = tu ferais ('you would do')."
    },
    "foreshadow": {
      "line": "Having mastered The Would-World, look ahead to Topic 27 (il faut), where this machinery expands into the next dimension of French thought.",
      "resolvedIn": 27
    },
    "payoff": {
      "ofLesson": 25,
      "text": "The foundation from Topic 25 (il y a) now pays off directly inside The Would-World: every sentence here builds on that earlier step."
    }
  },
  {
    "id": 2601,
    "slug": "lesson-2601",
    "title": "Je voudrais",
    "subtitle": "vouloir, pouvoir, faire in the conditional (je voudrais, tu pourrais, je ferais).",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "voudrais",
      "pourrais",
      "ferais",
      "vouloir",
      "sil_vous_plait",
      "table",
      "café",
      "vin",
      "addition"
    ],
    "table_word_ids": [
      "voudrais",
      "pourrais",
      "ferais",
      "vouloir",
      "sil_vous_plait"
    ],
    "hook": {
      "title": "Climbing the Politeness Escalator with je voudrais and tu pourrais",
      "content": "Replace blunt Je veux ('I want') with conditional Je voudrais ('I would like') and Tu pourrais ('Could you') whenever ordering or asking a favor!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why je voudrais and tu voudrais sound identical (/vudʁɛ/)",
          "content": "Because the conditional uses the -ais, -ais, -ait endings of the imparfait, je voudrais, tu voudrais, and il/elle/on voudrait all sound like /vudʁɛ/!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Je voudrais + Noun OR Bare Infinitive",
      "content": "Use Je voudrais before a noun (Je voudrais l'addition) or before a bare infinitive (Je voudrais réserver une table).",
      "linguist_note": "Conditional mood attenuates directive speech acts by framing desires politely.",
      "trap_note": "Never insert à or de after je voudrais before an infinitive — chain the infinitive bare: Je voudrais partir!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each conditional request with its English meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "Je voudrais un café, s'il vous plaît",
            "german": "I would like a coffee, please"
          },
          {
            "id": "p2",
            "english": "Je voudrais l'addition",
            "german": "I would like the bill / check"
          },
          {
            "id": "p3",
            "english": "Je voudrais vous demander quelque chose",
            "german": "I would like to ask you something"
          },
          {
            "id": "p4",
            "english": "Tu pourrais m'aider ?",
            "german": "Could you help me?"
          },
          {
            "id": "p5",
            "english": "On voudrait deux billets",
            "german": "We would like two tickets"
          }
        ],
        "target_answer": "I would like a coffee, please, I would like the bill / check, I would like to ask you something, Could you help me?, We would like two tickets",
        "meaning": "Je voudrais un café, s'il vous plaît, Je voudrais l'addition, Je voudrais vous demander quelque chose, Tu pourrais m'aider ?, On voudrait deux billets",
        "explanation": "voudrais / voudrait and pourrais turn blunt demands into warm courtesy.",
        "id": "fr2601_e1"
      },
      {
        "type": "shift_select",
        "prompt": "You want to ask the waiter for the bill (l'addition). Which phrasing is most polite and natural?",
        "options": [
          "Je voudrais l'addition, s'il vous plaît",
          "Je veux l'addition maintenant",
          "Donnez-moi l'addition"
        ],
        "target_answer": "Je voudrais l'addition, s'il vous plaît",
        "meaning": "I would like the bill, please",
        "explanation": "Je voudrais is the universal polite standard in restaurants and shops.",
        "id": "fr2601_e2"
      },
      {
        "type": "derive",
        "prompt": "Soften 'Je veux voir le directeur' ('I want to see the director') using the conditional of vouloir:",
        "english_hint": "veux → voudrais",
        "target_answer": "Je voudrais voir le directeur",
        "meaning": "I would like to see the director",
        "explanation": "Je voudrais + bare infinitive voir.",
        "id": "fr2601_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "could you come with me today (informal tu)",
        "cues": [
          "You could come → Tu pourrais venir",
          "with me today → avec moi aujourd'hui"
        ],
        "idea_parts": [
          "conditional request → Tu pourrais venir",
          "companion + time → avec moi aujourd'hui"
        ],
        "target_answer": "Tu pourrais venir avec moi aujourd'hui",
        "meaning": "Could you come with me today?",
        "word_bank": [
          "Tu",
          "pourrais",
          "venir",
          "avec",
          "moi",
          "aujourd'hui",
          "peux",
          "la"
        ],
        "explanation": "Tu pourrais + bare infinitive venir.",
        "diagnosis": {
          "slip": "used peux",
          "cue": "Use conditional pourrais for 'could you'."
        },
        "id": "fr2601_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Nous voudrions réserver une table pour quatre personnes",
        "replays": 2,
        "target_answer": "Nous voudrions réserver une table pour quatre personnes",
        "meaning": "We would like to reserve a table for four people",
        "cues": [
          "Nous voudrions réserver",
          "une table pour quatre personnes"
        ],
        "explanation": "Nous voudrions + réserver.",
        "affirmation": "You wrote Nous voudrions réserver and quatre personnes cleanly.",
        "id": "fr2601_e5"
      }
    ],
    "summary": {
      "outcome": "Use je voudrais, on voudrait, and tu pourrais to order and make polite requests.",
      "use_example": {
        "german": "Bonjour, je voudrais deux billets pour Lyon, s'il vous plaît.",
        "english": "Hello, I would like two tickets to Lyon, please."
      },
      "takeaway": "Swap je veux for je voudrais whenever you order or ask a favor.",
      "curiosity_teaser": "Up next on Le Pont ([2602] The -ai Future): see how Je voudrais leads directly into The -ai Future."
    }
  },
  {
    "id": 2602,
    "slug": "lesson-2602",
    "title": "The -ai Future",
    "subtitle": "Infinitive + avoir's present endings: je parlerai, tu visiteras, on ira.",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "aller",
      "avoir",
      "être",
      "faire",
      "voir",
      "venir",
      "parler",
      "visiter",
      "demain"
    ],
    "table_word_ids": [
      "aller",
      "avoir",
      "être",
      "faire",
      "voir"
    ],
    "hook": {
      "title": "The -ai Future: Why Every Future Stem Ends in /ʁ/",
      "content": "To form the one-word future tense (le futur simple), take the whole infinitive (parler, visiter, finir) or a core /ʁ/ stem (être → ser-, avoir → aur-, aller → ir-, faire → fer-, venir → viendr-, voir → verr-) and attach the present endings of avoir (-ai, -as, -a, -ons, -ez, -ont)!",
      "footnotes": [
        {
          "marker": "1",
          "title": "One Stem Serves BOTH the Future (-ai) and the Conditional (-ais)!",
          "content": "Every irregular future stem (ser-, aur-, ir-, fer-, viendr-, verr-) is ALSO the exact stem of the Conditional Would-World! Put -ai/-a on it for 'will' (ce sera 'it will be'); put -ais/-ait on it for 'would' (ce serait 'it would be')!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Future Stem (Ending in -r-) + avoir Endings (-ai, -as, -a, -ons, -ez, -ont)",
      "content": "Spot the /ʁ/ stem and read -ai/-as/-a as 'will' and -ais/-ait as 'would'!",
      "linguist_note": "Synthetic Romance future (< infinitive + habēre) and conditional (< infinitive + habēbam) share 100% of their stems.",
      "trap_note": "Don't confuse je parlerai (-ai = 'I will speak') with je parlerais (-ais = 'I would speak') on the page!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each future form with its English meaning and stem:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "je parlerai / je visiterai (infinitive + ai)",
            "german": "I will speak / I will visit"
          },
          {
            "id": "p2",
            "english": "ce sera (ser- from être)",
            "german": "it will be (que sera, sera!)"
          },
          {
            "id": "p3",
            "english": "j'irai (ir- from aller)",
            "german": "I will go"
          },
          {
            "id": "p4",
            "english": "tu verras (verr- from voir)",
            "german": "you will see"
          },
          {
            "id": "p5",
            "english": "je viendrai (viendr- from venir)",
            "german": "I will come"
          }
        ],
        "target_answer": "I will speak / I will visit, it will be (que sera, sera!), I will go, you will see, I will come",
        "meaning": "je parlerai / je visiterai (infinitive + ai), ce sera (ser- from être), j'irai (ir- from aller), tu verras (verr- from voir), je viendrai (viendr- from venir)",
        "explanation": "Every future stem in the entire French language ends in the letter R!",
        "id": "fr2602_e1"
      },
      {
        "type": "reverse_cognate",
        "prompt": "You already know the French future of être ('ce sera' = 'it will be') from which famous song phrase meaning 'Whatever will be, will be'?",
        "target_answer": "sera",
        "meaning": "Que sera, sera ↔ ce sera ('it will be')",
        "explanation": "ser- is the future/conditional stem of être: ce sera ('it will be'), ce serait ('it would be').",
        "id": "fr2602_e2"
      },
      {
        "type": "shift_select",
        "prompt": "Compare 'I will do it' (future) vs. 'I would do it' (conditional) using the stem 'fer-' of faire:",
        "options": [
          "Je le ferai / Je le ferais",
          "Je le ferais / Je le ferai",
          "Je le faireai / Je le faireais"
        ],
        "target_answer": "Je le ferai / Je le ferais",
        "meaning": "-ai (from j'ai) = Future 'will'; -ais (from j'avais) = Conditional 'would'!",
        "explanation": "The stem fer- is identical for both; -ai is future and -ais is conditional.",
        "id": "fr2602_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "you will see tomorrow it will be very good",
        "cues": [
          "You will see tomorrow → Tu verras demain",
          "it will be very good → ce sera très bon"
        ],
        "idea_parts": [
          "first future → Tu verras demain",
          "second future → ce sera très bon"
        ],
        "target_answer": "Tu verras demain, ce sera très bon",
        "meaning": "You will see tomorrow, it will be very good",
        "word_bank": [
          "Tu",
          "verras",
          "demain",
          "ce",
          "sera",
          "très",
          "bon",
          "est",
          "la"
        ],
        "explanation": "Tu verras (from voir) and ce sera (from être) are top-frequency future phrases.",
        "diagnosis": {
          "slip": "used est instead of sera",
          "cue": "Use ce sera ('it will be') for the future of c'est."
        },
        "id": "fr2602_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Je vous appellerai quand j'arriverai à Paris",
        "replays": 2,
        "target_answer": "Je vous appellerai quand j'arriverai à Paris",
        "meaning": "I will call you when I arrive in Paris",
        "cues": [
          "Je vous appellerai",
          "quand j'arriverai à Paris"
        ],
        "explanation": "After quand ('when') referring to the future, French uses the future tense (quand j'arriverai)!",
        "affirmation": "You wrote both -ai future forms cleanly!",
        "id": "fr2602_e5"
      }
    ],
    "summary": {
      "outcome": "Recognize and form the -ai future tense on regular verbs and core stems (sera, aura, ira, fera, viendra, verra).",
      "use_example": {
        "german": "Tu verras, ce sera une belle aventure !",
        "english": "You'll see, it will be a great adventure!"
      },
      "takeaway": "Every future stem ends in -r-; add -ai/-as/-a for 'will' and -ais/-ait for 'would'.",
      "curiosity_teaser": "Up next on Le Pont ([27] il faut): see how The -ai Future leads directly into il faut."
    }
  },
  {
    "id": 27,
    "slug": "il-faut",
    "title": "il faut",
    "subtitle": "'It is needed' — subjectless necessity (il faut partir) and the subjunctive bridge (il faut que tu sois là)",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "faut",
      "soit",
      "que",
      "savoir",
      "connaître",
      "aller",
      "faire",
      "venir"
    ],
    "table_word_ids": [
      "faut",
      "soit",
      "que",
      "savoir",
      "connaître"
    ],
    "hook": {
      "title": "How French Says 'Must' Without Saying Who",
      "content": "When English expresses necessity, it usually points a finger at a person: 'You have to leave', 'We must reserve a table'. French prefers a smoother, subjectless verb: il faut (/il fo/, 'it is necessary / it is needed', from Latin fallere 'to be lacking' — cousin of fault and fail). Drop any infinitive right behind il faut and it covers 'I must, you must, we have to, one needs to' all at once: Il faut partir ('We/you have to leave'). Il faut réserver ('One needs to book').",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why il faut comes from the root of 'fail' and 'fault'",
          "content": "Latin fallere meant 'to slip, be lacking'. What is lacking (il me faut du pain = 'bread is lacking to me') is what you NEED!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Two Doors After il faut: Bare Infinitive vs. que + Subjunctive",
      "content": "Door 1 (general or shared obligation): il faut + bare infinitive: Il faut voir ce film ('You/we have to see this movie'). Door 2 (when you need a SPECIFIC person to do something): il faut que + subject + subjunctive verb! Because il faut expresses a wish/necessity rather than a flat fact, the verb after que steps into the subjunctive mood: Il faut que j'y aille ('I have to go there'), Il faut que ce soit prêt ('It has to be ready' — soit is the subjunctive of être, preserved in English 'Honi soit qui mal y pense'!).",
      "linguist_note": "Impersonal falloir replaced Old French estovoir as the primary modal of necessity; when a subordinate subject is specified, que triggers the present subjunctive.",
      "trap_note": "The shortcut your mind will offer: trying to conjugate faut with je or tu (*je faux). falloir is 100% impersonal — its subject is ALWAYS dummy il (Il faut)!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each il faut construction with its meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "Il faut partir",
            "german": "We / you / one must leave"
          },
          {
            "id": "p2",
            "english": "Il ne faut pas attendre",
            "german": "We / you must not wait"
          },
          {
            "id": "p3",
            "english": "Il me faut un billet",
            "german": "I need a ticket (lit. a ticket is needed to me)"
          },
          {
            "id": "p4",
            "english": "Il faut que ce soit bon",
            "german": "It has to be good (subjunctive soit)"
          },
          {
            "id": "p5",
            "english": "Il faut savoir",
            "german": "One must know"
          }
        ],
        "target_answer": "We / you / one must leave, We / you must not wait, I need a ticket (lit. a ticket is needed to me), It has to be good (subjunctive soit), One must know",
        "meaning": "Il faut partir, Il ne faut pas attendre, Il me faut un billet, Il faut que ce soit bon, Il faut savoir",
        "explanation": "il faut takes an infinitive, a noun (with me/te/lui), or que + subjunctive.",
        "id": "fr27_e1"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the literal word-for-word structure of 'Il me faut du temps'?",
        "german": "Il me faut du temps",
        "natural": "I need some time",
        "options": [
          "I need some time",
          "It to-me is-needed of-the time",
          "He me needs the time"
        ],
        "target_answer": "It to-me is-needed of-the time",
        "meaning": "Literal structure: It to-me is-needed of-the time",
        "explanation": "il (it) + me (to-me) + faut (is-needed) + du temps (some time).",
        "id": "fr27_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'We have to reserve a table' using the everyday impersonal structure?",
        "options": [
          "Il faut réserver une table",
          "Nous faut réserver une table",
          "Il faut à réserver une table"
        ],
        "target_answer": "Il faut réserver une table",
        "meaning": "We/one must reserve a table",
        "explanation": "Il faut chains directly with the bare infinitive réserver.",
        "id": "fr27_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "it is necessary that it be ready (use prêt)",
        "cues": [
          "It is necessary that it be ready → Il faut que ce soit prêt"
        ],
        "idea_parts": [
          "necessity trigger → Il faut que",
          "subjunctive of c'est → ce soit",
          "adjective → prêt"
        ],
        "target_answer": "Il faut que ce soit prêt",
        "meaning": "It has to be ready",
        "word_bank": [
          "Il",
          "faut",
          "que",
          "ce",
          "soit",
          "prêt",
          "c'est",
          "est"
        ],
        "explanation": "After Il faut que, c'est turns into subjunctive ce soit.",
        "diagnosis": {
          "slip": "used c'est instead of ce soit after il faut que",
          "cue": "Il faut que triggers the subjunctive: ce soit."
        },
        "id": "fr27_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Il faut venir avec nous ce soir",
        "replays": 2,
        "target_answer": "Il faut venir avec nous ce soir",
        "meaning": "You/we have to come with us tonight",
        "cues": [
          "Necessity + infinitive: Il faut venir",
          "with us tonight: avec nous ce soir"
        ],
        "explanation": "Il faut venir covers 'you must come' or 'we must come' without pointing a finger.",
        "affirmation": "You heard Il faut venir and avec nous ce soir.",
        "id": "fr27_e5"
      }
    ],
    "summary": {
      "outcome": "Express obligation and need with il faut + infinitive, il me faut + noun, and il faut que + subjunctive.",
      "use_example": {
        "german": "Il faut partir maintenant — il me faut mon manteau.",
        "english": "We have to leave now — I need my coat."
      },
      "takeaway": "il faut never changes its subject; pair it with an infinitive for general necessity or que + subjunctive for a specific person.",
      "curiosity_teaser": "Up next on Le Pont ([2701] It Is Needed): see how il faut leads directly into It Is Needed."
    },
    "twist": {
      "prompt": "Ungraded — 'You must not wait here' (wrap ne...pas around faut):",
      "target_answer": "Il ne faut pas attendre ici",
      "word_bank": [
        "Il",
        "ne",
        "faut",
        "pas",
        "attendre",
        "ici",
        "non",
        "la"
      ],
      "explanation": "Il ne faut pas + infinitive means 'must not' (prohibition)."
    },
    "foreshadow": {
      "line": "Having mastered il faut, look ahead to Topic 28 (qui & que), where this machinery expands into the next dimension of French thought.",
      "resolvedIn": 28
    },
    "payoff": {
      "ofLesson": 26,
      "text": "The foundation from Topic 26 (The Would-World) now pays off directly inside il faut: every sentence here builds on that earlier step."
    }
  },
  {
    "id": 2701,
    "slug": "lesson-2701",
    "title": "It Is Needed",
    "subtitle": "il faut + infinitive (il faut partir, il faut voir) and il me faut + noun.",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "faut",
      "me",
      "te",
      "nous",
      "vous",
      "aller",
      "venir",
      "confirmer",
      "billet",
      "pain"
    ],
    "table_word_ids": [
      "faut",
      "me",
      "te",
      "nous",
      "vous"
    ],
    "hook": {
      "title": "il faut: Obligation and Need Without Pointing a Finger",
      "content": "Followed by an infinitive, il faut expresses obligation (Il faut confirmer 'We/you need to confirm'). Followed by a noun and paired with me, te, nous, vous, il me faut means 'I need [something]': Il me faut un billet ('I need a ticket'), Qu'est-ce qu'il vous faut ? ('What do you need?')!",
      "footnotes": [
        {
          "marker": "1",
          "title": "How 'Il me faut du temps' and 'J'ai besoin de temps' are sister ways to say 'I need time'",
          "content": "French gives you two everyday ways to say 'I need X': J'ai besoin de X and Il me faut X!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Il faut + Infinitive ('Must do'); Il me/te/vous faut + Noun ('Need [a thing]')",
      "content": "Practice both patterns and negate them with Il ne faut pas.",
      "linguist_note": "Dative experiencer + impersonal falloir (Il me faut un livre) parallels dative-need constructions across Romance.",
      "trap_note": "Remember: Il ne faut pas partir means 'You/we MUST NOT leave' (prohibition)!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each il faut expression with its natural English translation:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "Il faut réserver",
            "german": "We / you must reserve"
          },
          {
            "id": "p2",
            "english": "Il ne faut pas oublier",
            "german": "We / you must not forget"
          },
          {
            "id": "p3",
            "english": "Il me faut un café",
            "german": "I need a coffee"
          },
          {
            "id": "p4",
            "english": "Il nous faut deux billets",
            "german": "We need two tickets"
          },
          {
            "id": "p5",
            "english": "Qu'est-ce qu'il vous faut ?",
            "german": "What do you need?"
          }
        ],
        "target_answer": "We / you must reserve, We / you must not forget, I need a coffee, We need two tickets, What do you need?",
        "meaning": "Il faut réserver, Il ne faut pas oublier, Il me faut un café, Il nous faut deux billets, Qu'est-ce qu'il vous faut ?",
        "explanation": "me, te, nous, vous before faut tell who needs the item.",
        "id": "fr2701_e1"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the literal word-for-word structure of 'Il nous faut deux tables'?",
        "german": "Il nous faut deux tables",
        "natural": "We need two tables",
        "options": [
          "We need two tables",
          "It to-us is-needed two tables",
          "We must have two tables"
        ],
        "target_answer": "It to-us is-needed two tables",
        "meaning": "Literal structure: It to-us is-needed two tables",
        "explanation": "il ('it') + nous ('to-us') + faut ('is-needed') + deux tables.",
        "id": "fr2701_e2"
      },
      {
        "type": "shift_select",
        "prompt": "A baker asks you 'Qu'est-ce qu'il vous faut ?' How do you answer 'I need some bread' using 'faut'?",
        "options": [
          "Il me faut du pain",
          "Je me faut du pain",
          "Il faut moi du pain"
        ],
        "target_answer": "Il me faut du pain",
        "meaning": "I need some bread",
        "explanation": "Keep impersonal Il at the start and place me before faut: Il me faut du pain.",
        "id": "fr2701_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "we need to confirm the reservation today (using Il faut)",
        "cues": [
          "It is needed to confirm → Il faut confirmer",
          "the reservation today → la réservation aujourd'hui"
        ],
        "idea_parts": [
          "necessity + infinitive → Il faut confirmer",
          "object + time → la réservation aujourd'hui"
        ],
        "target_answer": "Il faut confirmer la réservation aujourd'hui",
        "meaning": "We/you need to confirm the reservation today",
        "word_bank": [
          "Il",
          "faut",
          "confirmer",
          "la",
          "réservation",
          "aujourd'hui",
          "Nous",
          "le"
        ],
        "explanation": "Il faut + bare infinitive confirmer.",
        "diagnosis": {
          "slip": "used Nous with faut",
          "cue": "faut only ever takes impersonal Il: Il faut confirmer."
        },
        "id": "fr2701_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Il me faut dix minutes pour finir",
        "replays": 2,
        "target_answer": "Il me faut dix minutes pour finir",
        "meaning": "I need ten minutes to finish",
        "cues": [
          "Il me faut dix minutes",
          "pour finir"
        ],
        "explanation": "Il me faut dix minutes + pour finir ('in order to finish').",
        "affirmation": "You paired Il me faut with pour finir cleanly.",
        "id": "fr2701_e5"
      }
    ],
    "summary": {
      "outcome": "Use il faut + infinitive for obligations and il me/te/nous/vous faut + noun for 'needing things'.",
      "use_example": {
        "german": "Qu'est-ce qu'il te faut ? — Il me faut mon billet.",
        "english": "What do you need? — I need my ticket."
      },
      "takeaway": "Il faut + verb = 'must [verb]'; Il me faut + noun = 'I need [noun]'.",
      "curiosity_teaser": "Up next on Le Pont ([2702] The Subjunctive Door): see how It Is Needed leads directly into The Subjunctive Door."
    }
  },
  {
    "id": 2702,
    "slug": "lesson-2702",
    "title": "The Subjunctive Door",
    "subtitle": "il faut que tu sois là, je veux que tu viennes — when necessity or desire crosses between two subjects.",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "faut",
      "soit",
      "que",
      "vouloir",
      "aller",
      "faire",
      "venir",
      "avoir"
    ],
    "table_word_ids": [
      "faut",
      "soit",
      "que",
      "vouloir",
      "aller"
    ],
    "hook": {
      "title": "Stepping Through the Subjunctive Door: Il faut que & Je veux que",
      "content": "When a wish (je veux que) or necessity (il faut que) crosses a que-bridge from one subject to a second subject, the verb after que steps into the Subjunctive Mood: Il faut que j'y aille ('I have to get going'), Il faut que ce soit prêt ('It has to be ready'), Je veux que tu viennes ('I want you to come')!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Good news: for ALL regular -er verbs, singular subjunctive sounds 100% identical to the present tense!",
          "content": "You only notice a special subjunctive form on a handful of core irregulars: être → soit, aller → aille, venir → vienne, faire → fasse!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Same Subject → Bare Infinitive; Two Different Subjects → que + Subjunctive",
      "content": "Use que + subjunctive whenever two different subjects are linked by vouloir or il faut.",
      "linguist_note": "French requires a finite que-clause in the subjunctive when the matrix and embedded subjects differ under volitional/necessity predicates.",
      "trap_note": "Never say *Je veux toi venir by copying English 'I want you to come' — always build a que-bridge: Je veux que tu viennes!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each subjunctive bridge phrase with its English meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "Il faut que j'y aille (aller → aille)",
            "german": "I have to get going (lit. It's needed that I go there)"
          },
          {
            "id": "p2",
            "english": "Il faut que ce soit bon (être → soit)",
            "german": "It has to be good"
          },
          {
            "id": "p3",
            "english": "Je veux que tu viennes (venir → vienne)",
            "german": "I want you to come (lit. that you come)"
          },
          {
            "id": "p4",
            "english": "Il faut que tu fasses attention (faire → fasse)",
            "german": "You must pay attention"
          },
          {
            "id": "p5",
            "english": "Je voudrais qu'il parle (regular -er = identical!)",
            "german": "I would like him to speak"
          }
        ],
        "target_answer": "I have to get going (lit. It's needed that I go there), It has to be good, I want you to come (lit. that you come), You must pay attention, I would like him to speak",
        "meaning": "Il faut que j'y aille (aller → aille), Il faut que ce soit bon (être → soit), Je veux que tu viennes (venir → vienne), Il faut que tu fasses attention (faire → fasse), Je voudrais qu'il parle (regular -er = identical!)",
        "explanation": "Il faut que j'y aille ('I've got to go!') is one of the most common sentences in spoken French.",
        "id": "fr2702_e1"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the literal word-for-word structure of 'Je veux que tu viennes avec moi'?",
        "german": "Je veux que tu viennes avec moi",
        "natural": "I want you to come with me",
        "options": [
          "I want you to come with me",
          "I want that you come with me",
          "I want you coming with me"
        ],
        "target_answer": "I want that you come with me",
        "meaning": "Literal structure: I want that you come with me",
        "explanation": "Because 'I' and 'you' are two different people, French bridges them with que + subjunctive viennes!",
        "id": "fr2702_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How does a French speaker say 'I have to go / I've got to get going' using 'Il faut que'?",
        "options": [
          "Il faut que j'y aille",
          "Il faut moi aller",
          "Il faut que je vais"
        ],
        "target_answer": "Il faut que j'y aille",
        "meaning": "I have to go (lit. It is necessary that I go there)",
        "explanation": "After Il faut que, je vais becomes subjunctive j'aille: Il faut que j'y aille!",
        "id": "fr2702_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "I want you to come tonight (using Je veux que tu viennes ce soir)",
        "cues": [
          "I want that → Je veux que",
          "you come tonight (subjunctive) → tu viennes ce soir"
        ],
        "idea_parts": [
          "trigger → Je veux que",
          "subjunctive clause → tu viennes ce soir"
        ],
        "target_answer": "Je veux que tu viennes ce soir",
        "meaning": "I want you to come tonight",
        "word_bank": [
          "Je",
          "veux",
          "que",
          "tu",
          "viennes",
          "ce",
          "soir",
          "viens",
          "la"
        ],
        "explanation": "After Je veux que, tu viens steps into subjunctive tu viennes.",
        "diagnosis": {
          "slip": "used indicative viens",
          "cue": "After Je veux que, use subjunctive tu viennes."
        },
        "id": "fr2702_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Il faut que j'y aille maintenant",
        "replays": 2,
        "target_answer": "Il faut que j'y aille maintenant",
        "meaning": "I have to get going now",
        "cues": [
          "Il faut que",
          "j'y aille maintenant"
        ],
        "explanation": "Il faut que j'y aille is heard at the end of almost every French visit!",
        "affirmation": "You wrote Il faut que j'y aille maintenant cleanly.",
        "id": "fr2702_e5"
      }
    ],
    "summary": {
      "outcome": "Use que + subjunctive (soit, aille, vienne, fasse, and regular -er verbs) after Il faut que and Je veux que.",
      "use_example": {
        "german": "Il est tard, il faut que j'y aille !",
        "english": "It's late, I've got to get going!"
      },
      "takeaway": "English 'I want you to [verb]' is ALWAYS French 'Je veux que tu [subjunctive]'.",
      "curiosity_teaser": "Up next on Le Pont ([2703] Savoir vs Connaître): see how The Subjunctive Door leads directly into Savoir vs Connaître."
    }
  },
  {
    "id": 2703,
    "slug": "sprig-2703",
    "title": "Savoir vs Connaître",
    "subtitle": "Knowing facts and skills (je sais nager) vs being familiar with people and places (je connais Paris).",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "savoir",
      "connaître",
      "ville",
      "docteur",
      "parler",
      "où",
      "pourquoi",
      "ami"
    ],
    "table_word_ids": [
      "savoir",
      "connaître",
      "ville",
      "docteur",
      "parler"
    ],
    "hook": {
      "title": "Why French Has Two Verbs for 'To Know': savoir vs. connaître",
      "content": "savoir (je sais, cousin of savant/savvy) is for FACTS, CLAUSES, and SKILLS (Je sais où il est, Je sais parler français — with NO word for 'how'!). connaître (je connais, cousin of reconnaissance) is for PEOPLE, PLACES, and NOUNS you are acquainted with (Je connais Marie, Je connais Paris)!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why French never translates 'how' in 'I know how to speak'",
          "content": "savoir chains directly to the bare infinitive with NO 'comment': Je sais nager ('I know [how] to swim')!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Clause or Bare Infinitive → savoir (je sais); Person or Place Noun → connaître (je connais)",
      "content": "Check what follows 'know': a noun takes connaître; a clause, bare infinitive, or nothing at all (Je ne sais pas) takes savoir!",
      "linguist_note": "Latin sapere ('be wise') vs. cognōscere ('be acquainted with') divides propositional knowledge from entity familiarity.",
      "trap_note": "Never say *Je connais où il est or *Je sais Marie — nouns take connais, clauses and infinitives take sais!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each 'know' sentence with savoir (je sais) or connaître (je connais):",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I know Paris very well (place noun)",
            "german": "Je connais très bien Paris"
          },
          {
            "id": "p2",
            "english": "I know your brother (person noun)",
            "german": "Je connais ton frère"
          },
          {
            "id": "p3",
            "english": "I know where he is (clause with où)",
            "german": "Je sais où il est"
          },
          {
            "id": "p4",
            "english": "I know how to speak French (bare infinitive)",
            "german": "Je sais parler français"
          },
          {
            "id": "p5",
            "english": "I don't know (standing alone)",
            "german": "Je ne sais pas"
          }
        ],
        "target_answer": "Je connais très bien Paris, Je connais ton frère, Je sais où il est, Je sais parler français, Je ne sais pas",
        "meaning": "I know Paris very well (place noun), I know your brother (person noun), I know where he is (clause with où), I know how to speak French (bare infinitive), I don't know (standing alone)",
        "explanation": "connaître always takes a direct noun object; savoir takes clauses, infinitives, or stands alone.",
        "id": "fr2703_e1"
      },
      {
        "type": "reverse_cognate",
        "prompt": "French connaître ('to be familiar with') shares its Latin root cognōscere with which English word for a military scouting mission?",
        "target_answer": "reconnaissance",
        "meaning": "reconnaissance / cognizant ↔ connaître",
        "explanation": "Reconnaissance is literally 'getting to know (reconnaître) the terrain'.",
        "id": "fr2703_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'Do you know this restaurant?' vs. 'Do you know where the restaurant is?'",
        "options": [
          "Tu connais ce restaurant ? / Tu sais où est le restaurant ?",
          "Tu sais ce restaurant ? / Tu connais où est le restaurant ?",
          "Tu connais ce restaurant ? / Tu connais où est le restaurant ?"
        ],
        "target_answer": "Tu connais ce restaurant ? / Tu sais où est le restaurant ?",
        "meaning": "Noun object takes connais; où-clause takes sais",
        "explanation": "ce restaurant is a noun (connais); où est le restaurant is a clause (sais).",
        "id": "fr2703_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "I know your friend and I know where he lives",
        "cues": [
          "I know your friend → Je connais ton ami",
          "and I know where he lives → et je sais où il habite"
        ],
        "idea_parts": [
          "person acquaintance → Je connais ton ami",
          "fact clause → et je sais où il habite"
        ],
        "target_answer": "Je connais ton ami et je sais où il habite",
        "meaning": "I know your friend and I know where he lives",
        "word_bank": [
          "Je",
          "connais",
          "ton",
          "ami",
          "et",
          "je",
          "sais",
          "où",
          "il",
          "habite",
          "la",
          "le"
        ],
        "explanation": "ton ami (noun) takes connais; où il habite (clause) takes sais.",
        "diagnosis": {
          "slip": "swapped connais and sais",
          "cue": "Use connais before ton ami and sais before où il habite."
        },
        "id": "fr2703_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Je ne sais pas pourquoi il est parti",
        "replays": 2,
        "target_answer": "Je ne sais pas pourquoi il est parti",
        "meaning": "I don't know why he left",
        "cues": [
          "Je ne sais pas",
          "pourquoi il est parti"
        ],
        "explanation": "savoir is used before pourquoi and in Je ne sais pas.",
        "affirmation": "You used Je ne sais pas before pourquoi il est parti.",
        "id": "fr2703_e5"
      }
    ],
    "summary": {
      "outcome": "Distinguish savoir (facts, clauses, bare infinitives for skills) from connaître (people, places, and noun objects).",
      "use_example": {
        "german": "Je connais bien cette ville, donc je sais où aller.",
        "english": "I know this city well, so I know where to go."
      },
      "takeaway": "connaître + Noun (people/places); savoir + Clause or Bare Infinitive (facts/skills).",
      "curiosity_teaser": "Up next on Le Pont ([28] qui & que): see how Savoir vs Connaître leads directly into qui & que."
    }
  },
  {
    "id": 28,
    "slug": "qui-and-que",
    "title": "qui & que",
    "subtitle": "Relative pronouns qui (subject), que (object), and dont ('of which') — welding two sentences into one",
    "phase": 5,
    "shift_categories": [],
    "word_ids": [
      "qui",
      "que",
      "dont",
      "où",
      "homme",
      "parler",
      "vouloir",
      "voir",
      "venir",
      "tenir",
      "prendre"
    ],
    "table_word_ids": [
      "qui",
      "que",
      "dont",
      "où",
      "homme"
    ],
    "hook": {
      "title": "How French Welds Sentences Without Looking at Human vs. Thing",
      "content": "In English, choosing between 'who' and 'which' depends on whether you are talking about a person or a thing ('the man WHO speaks' vs. 'the train WHICH leaves'). French doesn't care at all whether the noun is a person or a train! Instead, French looks purely at the GRAMMATICAL JOB right after the weld: if the next word is the VERB (missing its subject), use qui ('the man who speaks' = l'homme qui parle; 'the train which arrives' = le train qui arrive). If the next word is a SUBJECT PRONOUN or NOUN (missing its object), use que ('the coffee that I want' = le café que je veux)!",
      "footnotes": [
        {
          "marker": "1",
          "title": "The golden shortcut: qui + verb vs. que (qu') + subject",
          "content": "Look one word to the right of the gap: is there a subject (je, tu, il, Marie) right after it? If yes, use que (elided to qu' before a vowel: le film qu'il aime)! Is the verb standing right there with no subject? Use qui (which NEVER elides, even before a vowel: l'homme qui arrive)!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Never Drop 'That' in French — and Meet dont ('of which')",
      "content": "In English you can drop 'that' whenever you feel like it ('the coffee [that] I want'). In French, you can NEVER drop que: le café que je veux is mandatory! And what if the verb normally uses de (like parler de 'to talk about' or avoir besoin de 'to have need of')? Then de + relative fuses into the single sleek word dont: C'est le livre dont je parle ('That's the book I'm talking about / of which I speak').",
      "linguist_note": "Latin nominative quī (subject) and accusative quem/quid (object) preserved their case distinction in French qui vs. que across both animate and inanimate antecedents.",
      "trap_note": "The shortcut your mind will offer: dropping que like English drops 'that' (*le café je veux) or eliding qui before a vowel (*l'homme qu'arrive). Never drop que, and never elide qui!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each relative pronoun with the grammatical slot that follows it:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "qui (never elides!)",
            "german": "Followed directly by the verb (subject of clause)"
          },
          {
            "id": "p2",
            "english": "que / qu' (never omitted!)",
            "german": "Followed by a subject + verb (object of clause)"
          },
          {
            "id": "p3",
            "english": "dont (replaces de + relative)",
            "german": "Used when the verb or noun takes de (parler de)"
          },
          {
            "id": "p4",
            "english": "où (place or time relative)",
            "german": "Where / when (la ville où j'habite)"
          }
        ],
        "target_answer": "Followed directly by the verb (subject of clause), Followed by a subject + verb (object of clause), Used when the verb or noun takes de (parler de), Where / when (la ville où j'habite)",
        "meaning": "qui (never elides!), que / qu' (never omitted!), dont (replaces de + relative), où (place or time relative)",
        "explanation": "French chooses qui vs. que by grammatical role (subject vs. object), not human vs. thing.",
        "id": "fr28_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Fill the two blanks: 'Le train ___ arrive est rapide' ('The train that is arriving is fast').",
        "options": [
          "Le train qui arrive est rapide",
          "Le train qu'arrive est rapide",
          "Le train que arrive est rapide"
        ],
        "target_answer": "Le train qui arrive est rapide",
        "meaning": "The train that arrives is fast",
        "explanation": "Because the verb arrive comes immediately after the gap (it needs a subject), use qui — and qui NEVER elides before a vowel!",
        "id": "fr28_e2"
      },
      {
        "type": "shift_select",
        "prompt": "Fill the weld: 'La table ___ j'ai réservée' ('The table [that] I reserved').",
        "options": [
          "La table que j'ai réservée",
          "La table qui j'ai réservée",
          "La table j'ai réservée"
        ],
        "target_answer": "La table que j'ai réservée",
        "meaning": "The table that I reserved",
        "explanation": "A subject (j') follows the gap, so the missing piece is the object → que (never omitted in French!).",
        "id": "fr28_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "the man who is speaking is my father",
        "cues": [
          "The man who speaks → L'homme qui parle + is my father → est mon père"
        ],
        "idea_parts": [
          "head noun + subject relative → L'homme qui parle",
          "main verb + complement → est mon père"
        ],
        "target_answer": "L'homme qui parle est mon père",
        "meaning": "The man who is speaking is my father",
        "word_bank": [
          "L'homme",
          "qui",
          "parle",
          "est",
          "mon",
          "père",
          "que",
          "la"
        ],
        "explanation": "parle has no other subject, so qui bridges L'homme to parle.",
        "diagnosis": {
          "slip": "used que instead of qui before the verb",
          "cue": "Before a verb lacking a subject, always use qui."
        },
        "id": "fr28_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "C'est le livre dont je parle",
        "replays": 2,
        "target_answer": "C'est le livre dont je parle",
        "meaning": "That is the book I am talking about",
        "cues": [
          "Pointer + noun: C'est le livre",
          "of-which I speak: dont je parle"
        ],
        "explanation": "Because French says parler DE quelque chose, 'the book that I speak OF' uses dont.",
        "affirmation": "You caught dont before je parle.",
        "id": "fr28_e5"
      }
    ],
    "summary": {
      "outcome": "Link clauses using qui (before a verb), que/qu' (before a subject), and dont (for de-constructions).",
      "use_example": {
        "german": "La ville où j'habite et le café que j'aime.",
        "english": "The city where I live and the café that I love."
      },
      "takeaway": "qui + verb, que + subject, dont for de — and never leave 'that' out.",
      "curiosity_teaser": "Up next on Le Pont ([2801] The Man That Knows): see how qui & que leads directly into The Man That Knows."
    },
    "twist": {
      "prompt": "Ungraded — 'The coffee that I want is here':",
      "target_answer": "Le café que je veux est ici",
      "word_bank": [
        "Le",
        "café",
        "que",
        "je",
        "veux",
        "est",
        "ici",
        "qui",
        "la"
      ],
      "explanation": "que connects le café (the object wanted) to je veux."
    },
    "foreshadow": {
      "line": "Having mastered qui & que, look ahead to Topic 29 (The French Mind), where this machinery expands into the next dimension of French thought.",
      "resolvedIn": 29
    },
    "payoff": {
      "ofLesson": 27,
      "text": "The foundation from Topic 27 (il faut) now pays off directly inside qui & que: every sentence here builds on that earlier step."
    }
  },
  {
    "id": 2801,
    "slug": "lesson-2801",
    "title": "The Man That Knows",
    "subtitle": "qui for the subject after the gap (l'homme qui parle), que for the object (le café que je veux).",
    "phase": 5,
    "shift_categories": [],
    "word_ids": [
      "qui",
      "que",
      "homme",
      "ville",
      "train",
      "café",
      "parler",
      "vouloir",
      "aimé"
    ],
    "table_word_ids": [
      "qui",
      "que",
      "homme",
      "ville",
      "train"
    ],
    "hook": {
      "title": "qui vs. que: The One-Second Look-Ahead Test",
      "content": "Look at the very first word AFTER the gap: (1) Is it a VERB (parle, arrive, est)? Drop in qui (and NEVER elide qui, even before a vowel!). (2) Is it a SUBJECT PRONOUN or NOUN (je, tu, il, Marie)? Drop in que (or qu' before a vowel)!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why qui never drops its -i before a vowel, whereas que always drops its -e",
          "content": "To keep subject (qui) and object (qu') distinct, qui NEVER elides (l'homme qui arrive), while que ALWAYS elides before a vowel (le train qu'il prend)!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Gap + Verb → qui; Gap + Subject → que / qu'",
      "content": "Run the one-second look-ahead test across people and things alike.",
      "linguist_note": "Case-marked relativizers qui (nominative) and que (accusative) preserve syntactic role transparency.",
      "trap_note": "Never elide qui (*l'ami qu'arrive) and never omit que (*le livre je lis)!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Apply the look-ahead test to match each sentence with qui or que/qu':",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "La femme ___ parle (+ verb parle)",
            "german": "qui (La femme qui parle)"
          },
          {
            "id": "p2",
            "english": "Le train ___ arrive (+ vowel verb arrive)",
            "german": "qui (Le train qui arrive — never elides!)"
          },
          {
            "id": "p3",
            "english": "Le café ___ je prends (+ subject je)",
            "german": "que (Le café que je prends)"
          },
          {
            "id": "p4",
            "english": "L'ami ___ il invite (+ vowel subject il)",
            "german": "qu' (L'ami qu'il invite — que elides!)"
          }
        ],
        "target_answer": "qui (La femme qui parle), qui (Le train qui arrive — never elides!), que (Le café que je prends), qu' (L'ami qu'il invite — que elides!)",
        "meaning": "La femme ___ parle (+ verb parle), Le train ___ arrive (+ vowel verb arrive), Le café ___ je prends (+ subject je), L'ami ___ il invite (+ vowel subject il)",
        "explanation": "Look one word to the right: Verb → qui; Subject → que / qu'.",
        "id": "fr2801_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Fill the two blanks: 'C'est un ami ___ habite à Paris et ___ j'aime beaucoup':",
        "options": [
          "qui habite / que j'aime",
          "qu'habite / que j'aime",
          "qui habite / qui j'aime"
        ],
        "target_answer": "qui habite / que j'aime",
        "meaning": "Before verb habite → qui; before subject j' → que",
        "explanation": "habite is a verb (qui); j'aime has subject j' (que).",
        "id": "fr2801_e2"
      },
      {
        "type": "derive",
        "prompt": "Combine 'Voici le gâteau' + 'Je veux le gâteau' into 'Voici le gâteau ___ je veux':",
        "english_hint": "before subject je, use que",
        "target_answer": "Voici le gâteau que je veux",
        "meaning": "Here is the cake that I want",
        "explanation": "Because subject je follows the gap, use que: Voici le gâteau que je veux.",
        "id": "fr2801_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "the restaurant that is here is very good",
        "cues": [
          "The restaurant that is here (+ verb est!) → Le restaurant qui est ici",
          "is very good → est très bon"
        ],
        "idea_parts": [
          "head noun + subject relative → Le restaurant qui est ici",
          "main predicate → est très bon"
        ],
        "target_answer": "Le restaurant qui est ici est très bon",
        "meaning": "The restaurant that is here is very good",
        "word_bank": [
          "Le",
          "restaurant",
          "qui",
          "est",
          "ici",
          "est",
          "très",
          "bon",
          "que",
          "la"
        ],
        "explanation": "Because the verb est follows the gap, use qui.",
        "diagnosis": {
          "slip": "used que instead of qui",
          "cue": "Things take qui whenever they are the subject of the following verb!"
        },
        "id": "fr2801_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "C'est le film qu'elle a vu hier",
        "replays": 2,
        "target_answer": "C'est le film qu'elle a vu hier",
        "meaning": "That is the movie she saw yesterday",
        "cues": [
          "C'est le film",
          "qu'elle a vu hier"
        ],
        "explanation": "que elides before vowel-initial subject elle: qu'elle a vu.",
        "affirmation": "You wrote qu'elle with the elided object relative!",
        "id": "fr2801_e5"
      }
    ],
    "summary": {
      "outcome": "Select qui vs. que/qu' instantaneously by checking whether a verb or a subject follows the gap.",
      "use_example": {
        "german": "Le train qui part maintenant est le train que je voulais prendre.",
        "english": "The train that is leaving now is the train that I wanted to take."
      },
      "takeaway": "Verb after the gap → qui (never elides); Subject after the gap → que / qu' (never omitted).",
      "curiosity_teaser": "Up next on Le Pont ([2802] Que Everywhere): see how The Man That Knows leads directly into Que Everywhere."
    }
  },
  {
    "id": 2802,
    "slug": "lesson-2802",
    "title": "Que Everywhere",
    "subtitle": "je pense que, je sais que, c'est… que — que as the master clause connector.",
    "phase": 5,
    "shift_categories": [],
    "word_ids": [
      "que",
      "cest",
      "savoir",
      "comprendre",
      "vouloir",
      "faut",
      "vraiment",
      "possible"
    ],
    "table_word_ids": [
      "que",
      "cest",
      "savoir",
      "comprendre",
      "vouloir"
    ],
    "hook": {
      "title": "que Everywhere: The Master Glue of French Thought",
      "content": "Where English drops 'that' ('I think [that] it's good'), French makes que ('that') MANDATORY glue whenever one verb introduces a second clause: Je pense que..., Je sais que..., Je vois que... And C'est... qui / C'est... que acts like a vocal spotlight!",
      "footnotes": [
        {
          "marker": "1",
          "title": "How C'est… qui and C'est… que act like a spotlight",
          "content": "C'est moi qui paie ('I'm the one paying!') and C'est demain qu'on part ('It's tomorrow that we're leaving!') spotlight any word in the sentence!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Never Drop que After je pense, je sais, je vois, je crois",
      "content": "Always pronounce and write que (or qu' before il/elle/on) when bridging two clauses.",
      "linguist_note": "Subordinating complementizer que is obligatorily realized in finite embedded clauses.",
      "trap_note": "Never drop que in 'I know he is here' (*Je sais il est ici) — always build the bridge: Je sais qu'il est ici!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each bridged clause with its English meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "Je sais qu'il est là (never drop qu'!)",
            "german": "I know (that) he is there"
          },
          {
            "id": "p2",
            "english": "Je pense que c'est possible",
            "german": "I think (that) it's possible"
          },
          {
            "id": "p3",
            "english": "Je vois que tu comprends",
            "german": "I see (that) you understand"
          },
          {
            "id": "p4",
            "english": "C'est toi qui as raison (spotlight!)",
            "german": "You're the one who is right!"
          },
          {
            "id": "p5",
            "english": "C'est demain qu'on part (spotlight!)",
            "german": "It's tomorrow that we're leaving!"
          }
        ],
        "target_answer": "I know (that) he is there, I think (that) it's possible, I see (that) you understand, You're the one who is right!, It's tomorrow that we're leaving!",
        "meaning": "Je sais qu'il est là (never drop qu'!), Je pense que c'est possible, Je vois que tu comprends, C'est toi qui as raison (spotlight!), C'est demain qu'on part (spotlight!)",
        "explanation": "que bridges every embedded clause and spotlights objects/adverbs after C'est.",
        "id": "fr2802_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'I think she is ready' in French?",
        "options": [
          "Je pense qu'elle est prête",
          "Je pense elle est prête",
          "Je pense qui elle est prête"
        ],
        "target_answer": "Je pense qu'elle est prête",
        "meaning": "I think (that) she is ready",
        "explanation": "que is mandatory after Je pense, and elides before elle: Je pense qu'elle est prête!",
        "id": "fr2802_e2"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the literal structure of 'C'est demain que je pars'?",
        "german": "C'est demain que je pars",
        "natural": "I'm leaving TOMORROW (emphasis)",
        "options": [
          "I'm leaving TOMORROW (emphasis)",
          "It-is tomorrow that I leave",
          "Tomorrow is when I leave"
        ],
        "target_answer": "It-is tomorrow that I leave",
        "meaning": "Literal structure: It-is tomorrow that I leave",
        "explanation": "French uses the cleft frame C'est [X] que... to put a vocal spotlight on X.",
        "id": "fr2802_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "I know that it is very important",
        "cues": [
          "I know that → Je sais que",
          "it is very important → c'est très important"
        ],
        "idea_parts": [
          "main verb + connector → Je sais que",
          "embedded clause → c'est très important"
        ],
        "target_answer": "Je sais que c'est très important",
        "meaning": "I know (that) it is very important",
        "word_bank": [
          "Je",
          "sais",
          "que",
          "c'est",
          "très",
          "important",
          "qui",
          "la"
        ],
        "explanation": "que is mandatory between Je sais and c'est.",
        "diagnosis": {
          "slip": "omitted que",
          "cue": "Always include que after Je sais: Je sais que c'est..."
        },
        "id": "fr2802_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Je pense qu'on va arriver à l'heure",
        "replays": 2,
        "target_answer": "Je pense qu'on va arriver à l'heure",
        "meaning": "I think we're going to arrive on time",
        "cues": [
          "Je pense qu'",
          "on va arriver à l'heure"
        ],
        "explanation": "que elides before on: Je pense qu'on va arriver.",
        "affirmation": "You wrote qu'on with the mandatory elided que!",
        "id": "fr2802_e5"
      }
    ],
    "summary": {
      "outcome": "Bridge clauses with mandatory que/qu' after verbs of knowing, thinking, and seeing, and use C'est… qui/que for emphasis.",
      "use_example": {
        "german": "Je sais qu'il est tard, mais je pense que c'est possible.",
        "english": "I know it's late, but I think it's possible."
      },
      "takeaway": "English drops 'that'; French NEVER drops que.",
      "curiosity_teaser": "Up next on Le Pont ([2803] Verb Dynasties: venir, tenir & prendre Matrices): see how Que Everywhere leads directly into Verb Dynasties: venir, tenir & prendre Matrices."
    }
  },
  {
    "id": 2803,
    "slug": "sprig-2803",
    "title": "Verb Dynasties: venir, tenir & prendre Matrices",
    "subtitle": "Prefix × root matrices: re-/de-/ob-/main-/com-/ap- across venir, tenir, and prendre.",
    "phase": 5,
    "shift_categories": [],
    "word_ids": [
      "venir",
      "revenir",
      "devenir",
      "tenir",
      "obtenir",
      "maintenir",
      "prendre",
      "comprendre",
      "apprendre",
      "compris",
      "pris"
    ],
    "table_word_ids": [
      "venir",
      "revenir",
      "devenir",
      "tenir",
      "obtenir"
    ],
    "hook": {
      "title": "Three Roots, Two Dozen Verbs — The Prefix × Root Matrix",
      "content": "Once you know venir ('to come'), tenir ('to hold', which conjugates identically to venir!), and prendre ('to take'), directional prefixes unlock revenir ('come back'), devenir ('become'), obtenir ('obtain/get'), maintenir ('maintain = hold in the hand!'), comprendre ('understand = grasp together'), and apprendre ('learn')!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why maintenir is literally 'hand-hold'",
          "content": "main ('hand') + tenir ('hold') = maintenir ('to maintain')! And every prefixed compound conjugates 100% identically to its root!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Every Compound Conjugates Exactly Like Its Root (-venir, -tenir, -prendre)",
      "content": "venir → je viens / venu; tenir → je tiens / tenu; prendre → je prends / pris.",
      "linguist_note": "Derivational prefixation on Latin venīre, tenēre, and prehendere is shared across French and English.",
      "trap_note": "See the root (-venir, -tenir, -prendre) inside the compound and conjugate it like the base verb!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each prefixed verb with its literal building blocks and meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "revenir (re- + venir)",
            "german": "to come back / return"
          },
          {
            "id": "p2",
            "english": "devenir (de- + venir)",
            "german": "to become (come into a state)"
          },
          {
            "id": "p3",
            "english": "obtenir (ob- + tenir)",
            "german": "to obtain / get"
          },
          {
            "id": "p4",
            "english": "maintenir (main + tenir)",
            "german": "to maintain (hold in the hand)"
          },
          {
            "id": "p5",
            "english": "apprendre (ap- + prendre)",
            "german": "to learn (grasp toward oneself)"
          }
        ],
        "target_answer": "to come back / return, to become (come into a state), to obtain / get, to maintain (hold in the hand), to learn (grasp toward oneself)",
        "meaning": "revenir (re- + venir), devenir (de- + venir), obtenir (ob- + tenir), maintenir (main + tenir), apprendre (ap- + prendre)",
        "explanation": "Three roots (venir, tenir, prendre) generate all of these verbs.",
        "id": "fr2803_e1"
      },
      {
        "type": "family_matrix",
        "prompt": "Complete the Verb Root × Form Matrix for 'comprendre' ('to understand') in the passé composé participle:",
        "rows": [
          "venir / revenir (come / come back)",
          "tenir / obtenir (hold / obtain)",
          "prendre / comprendre (take / understand)"
        ],
        "columns": [
          "Present (je)",
          "Past Participle"
        ],
        "cells": [
          [
            {
              "german": "je reviens",
              "english": "I come back"
            },
            {
              "german": "revenu",
              "english": "come back (participle)"
            }
          ],
          [
            {
              "german": "j'obtiens",
              "english": "I obtain / get"
            },
            {
              "german": "obtenu",
              "english": "obtained (participle)"
            }
          ],
          [
            {
              "german": "je comprends",
              "english": "I understand"
            },
            {
              "german": "compris",
              "english": "understood (participle)"
            }
          ]
        ],
        "seed": [
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            1,
            0
          ],
          [
            1,
            1
          ],
          [
            2,
            0
          ]
        ],
        "task": {
          "row": 2,
          "column": 1
        },
        "target_answer": "compris",
        "meaning": "understood (participle)",
        "row_law": "Each row follows its root family (-venir, -tenir, -prendre).",
        "column_law": "Column 1 is the 1st-person present; Column 2 is the past participle (-u for venir/tenir, -is for prendre).",
        "explanation": "prendre → pris, so comprendre → compris and apprendre → appris!",
        "id": "fr2803_e2"
      },
      {
        "type": "reverse_cognate",
        "prompt": "French apprendre ('to learn') gave English which noun for a beginner learning a trade under a master?",
        "target_answer": "apprentice",
        "meaning": "apprentice ↔ apprendre ('to learn')",
        "explanation": "An apprentice is literally 'someone who is learning' (from Old French aprentiz, built on apprendre).",
        "id": "fr2803_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "I am learning French and I understand now",
        "cues": [
          "I learn the French → J'apprends le français + and I understand now → et je comprends maintenant"
        ],
        "idea_parts": [
          "first verb + object → J'apprends le français",
          "second verb + adverb → et je comprends maintenant"
        ],
        "target_answer": "J'apprends le français et je comprends maintenant",
        "meaning": "I am learning French and I understand now",
        "word_bank": [
          "J'apprends",
          "le",
          "français",
          "et",
          "je",
          "comprends",
          "maintenant",
          "apprendre",
          "la"
        ],
        "explanation": "Both j'apprends and je comprends follow je prends.",
        "diagnosis": {
          "slip": "used infinitive apprendre",
          "cue": "Conjugate j'apprends and je comprends like je prends."
        },
        "id": "fr2803_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Je vais revenir demain matin",
        "replays": 2,
        "target_answer": "Je vais revenir demain matin",
        "meaning": "I am going to come back tomorrow morning",
        "cues": [
          "Je vais revenir",
          "demain matin"
        ],
        "explanation": "revenir = re- ('back') + venir ('come').",
        "affirmation": "You heard revenir and demain matin cleanly.",
        "id": "fr2803_e5"
      }
    ],
    "summary": {
      "outcome": "Decode and conjugate the -venir (revenir, devenir), -tenir (obtenir, maintenir), and -prendre (comprendre, apprendre) verb dynasties.",
      "use_example": {
        "german": "J'apprends vite et je vais revenir demain.",
        "english": "I learn quickly and I'm going to come back tomorrow."
      },
      "takeaway": "Learn three roots (venir, tenir, prendre) and six prefixes, and two dozen verbs conjugate themselves.",
      "curiosity_teaser": "Up next on Le Pont ([29] The French Mind): see how Verb Dynasties: venir, tenir & prendre Matrices leads directly into The French Mind."
    }
  },
  {
    "id": 29,
    "slug": "the-french-mind",
    "title": "The French Mind",
    "subtitle": "avoir faim, avoir soif, avoir raison, avoir besoin de — feelings as possessions and idioms as thought",
    "phase": 5,
    "shift_categories": [
      "doublet"
    ],
    "word_ids": [
      "faim",
      "soif",
      "peur",
      "raison",
      "besoin",
      "avoir",
      "jai",
      "as",
      "très",
      "cœur"
    ],
    "table_word_ids": [
      "faim",
      "soif",
      "peur",
      "raison",
      "besoin"
    ],
    "hook": {
      "title": "Why You 'Have Hunger' and 'Have Reason' in French",
      "content": "In Topic 15 you saw that French doesn't 'be' thirty years old — it 'has' thirty years (J'ai trente ans). That same mental theatre runs across physical sensations and states of mind! You are not 'hungry' — hunger is a visitor you temporarily hold with avoir: J'ai faim ('I have hunger', cousin of famine). You are not 'thirsty' — J'ai soif ('I have thirst'). You are not 'afraid' — J'ai peur ('I have fear'). You are not 'right' — Tu as raison ('You have reason')! And 'I need' is J'ai besoin de ('I have need of').",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why 'very hungry' is J'ai très faim",
          "content": "Even though faim, soif, and peur are nouns, avoir faim acts so much like a single feeling-unit that spoken and written French puts très ('very') right before the noun: J'ai très faim, j'ai très soif!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "avoir + Bare State Noun (No Article!)",
      "content": "Notice that in j'ai faim, tu as soif, il a peur, tu as raison, and j'ai besoin de, there is NO article (un/une/le/la) between avoir and the noun! The verb and noun fuse into a single idiom. If you say *Je suis faim, a French ear hears 'I am starvation itself'! Always possess your temporary bodily states with avoir.",
      "linguist_note": "Having a sensation (habēre famem / sitim) vs. being an identity reflects the Indo-European split between alienable temporary states and permanent attributes.",
      "trap_note": "The shortcut your mind will offer: translating 'I am hungry / You are right' with être (*Je suis faim / *Tu es raison). Temporary states of hunger, thirst, fear, and rightness ALWAYS use avoir!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each avoir expression with its natural English meaning and literal gloss:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "avoir faim (famine)",
            "german": "to be hungry (lit. have hunger)"
          },
          {
            "id": "p2",
            "english": "avoir soif",
            "german": "to be thirsty (lit. have thirst)"
          },
          {
            "id": "p3",
            "english": "avoir peur",
            "german": "to be afraid (lit. have fear)"
          },
          {
            "id": "p4",
            "english": "avoir raison (reason)",
            "german": "to be right (lit. have reason)"
          },
          {
            "id": "p5",
            "english": "avoir besoin de",
            "german": "to need (lit. have need of)"
          }
        ],
        "target_answer": "to be hungry (lit. have hunger), to be thirsty (lit. have thirst), to be afraid (lit. have fear), to be right (lit. have reason), to need (lit. have need of)",
        "meaning": "avoir faim (famine), avoir soif, avoir peur, avoir raison (reason), avoir besoin de",
        "explanation": "All five use avoir with a bare noun — never être!",
        "id": "fr29_e1"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the literal word-for-word structure of 'Tu as raison'?",
        "german": "Tu as raison",
        "natural": "You are right",
        "options": [
          "You are right",
          "You have reason",
          "You are reasonable"
        ],
        "target_answer": "You have reason",
        "meaning": "Literal structure: You have reason",
        "explanation": "In French, being right is literally 'having reason': Tu as raison.",
        "id": "fr29_e2"
      },
      {
        "type": "variant_english",
        "prompt": "Which English sentences accurately translate 'J'ai besoin d'un café'?",
        "german": "J'ai besoin d'un café",
        "meaning": "I need a coffee",
        "renderings": [
          "I need a coffee",
          "I am in need of a coffee"
        ],
        "traps": [
          "I have a coffee shop",
          "I want to make a coffee"
        ],
        "target_answer": "I need a coffee",
        "explanation": "avoir besoin de + noun/infinitive is the standard French way to say 'to need'.",
        "id": "fr29_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "I am very hungry and you are right",
        "cues": [
          "I have very hunger → J'ai très faim + and you have reason → et tu as raison"
        ],
        "idea_parts": [
          "first clause → J'ai très faim",
          "second clause → et tu as raison"
        ],
        "target_answer": "J'ai très faim et tu as raison",
        "meaning": "I am very hungry and you are right",
        "word_bank": [
          "J'ai",
          "très",
          "faim",
          "et",
          "tu",
          "as",
          "raison",
          "suis",
          "es"
        ],
        "explanation": "Both 'hungry' and 'right' are possessed with avoir in French.",
        "diagnosis": {
          "slip": "used suis or es instead of ai and as",
          "cue": "Use J'ai très faim and tu as raison."
        },
        "id": "fr29_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Est-ce que tu as soif maintenant",
        "replays": 2,
        "target_answer": "Est-ce que tu as soif maintenant",
        "meaning": "Are you thirsty now?",
        "cues": [
          "question machine: Est-ce que",
          "you have thirst: tu as soif",
          "now: maintenant"
        ],
        "explanation": "tu as soif = 'are you thirsty?'.",
        "affirmation": "You used tu as soif with Est-ce que cleanly.",
        "id": "fr29_e5"
      }
    ],
    "summary": {
      "outcome": "Express hunger, thirst, fear, being right, and needing with avoir + bare noun.",
      "use_example": {
        "german": "Tu as raison, j'ai besoin de manger parce que j'ai faim.",
        "english": "You're right, I need to eat because I'm hungry."
      },
      "takeaway": "In French, you don't 'be' hungry, thirsty, afraid, or right — you 'have' hunger, thirst, fear, and reason.",
      "curiosity_teaser": "Up next on Le Pont ([2901] Have-Hunger & Co): see how The French Mind leads directly into Have-Hunger & Co."
    },
    "twist": {
      "prompt": "Ungraded — 'I am not afraid' (wrap n'...pas around ai before peur):",
      "target_answer": "Je n'ai pas peur",
      "word_bank": [
        "Je",
        "n'ai",
        "pas",
        "peur",
        "de",
        "suis"
      ],
      "explanation": "Because avoir peur has no article to begin with, the negation is simply Je n'ai pas peur!"
    },
    "foreshadow": {
      "line": "Having mastered The French Mind, look ahead to Topic 30 (Capstone: Le Pont Reading), where this machinery expands into the next dimension of French thought.",
      "resolvedIn": 30
    },
    "payoff": {
      "ofLesson": 28,
      "text": "The foundation from Topic 28 (qui & que) now pays off directly inside The French Mind: every sentence here builds on that earlier step."
    }
  },
  {
    "id": 2901,
    "slug": "lesson-2901",
    "title": "Have-Hunger & Co",
    "subtitle": "Feelings as possessions with avoir: avoir faim, soif, peur, raison, besoin de.",
    "phase": 5,
    "shift_categories": [],
    "word_ids": [
      "faim",
      "soif",
      "peur",
      "raison",
      "besoin",
      "chaleur",
      "avoir",
      "jai",
      "as",
      "très"
    ],
    "table_word_ids": [
      "faim",
      "soif",
      "peur",
      "raison",
      "besoin"
    ],
    "hook": {
      "title": "Possessing Your Sensations: The Complete avoir Idiom Set",
      "content": "Alongside avoir faim ('be hungry'), avoir soif ('be thirsty'), avoir peur ('be afraid'), avoir raison ('be right'), and avoir besoin de ('need'), French also says J'ai froid ('I feel cold') and J'ai chaud ('I feel hot')!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why 'Je suis chaud / froid' is a dangerous trap in French!",
          "content": "If a person wants to say 'I feel cold / hot', they MUST say J'ai froid / J'ai chaud ('I have cold / heat')!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Person Feels State → J'ai faim / soif / froid / chaud / peur / raison",
      "content": "Keep every personal sensation and need in the avoir column, with no article before the state noun.",
      "linguist_note": "Experiencer-possessor idioms with avoir + bare noun form a cohesive semantic class in Gallo-Romance.",
      "trap_note": "Never say *Je suis froid when you are shivering — say J'ai froid ('I have cold')!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each avoir sensation with its English meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "J'ai faim / J'ai soif",
            "german": "I'm hungry / I'm thirsty"
          },
          {
            "id": "p2",
            "english": "J'ai froid / J'ai chaud",
            "german": "I feel cold / I feel hot"
          },
          {
            "id": "p3",
            "english": "Tu as raison / Tu as tort",
            "german": "You are right / You are wrong"
          },
          {
            "id": "p4",
            "english": "J'ai peur de ça",
            "german": "I'm afraid of that"
          },
          {
            "id": "p5",
            "english": "J'ai besoin de partir",
            "german": "I need to leave"
          }
        ],
        "target_answer": "I'm hungry / I'm thirsty, I feel cold / I feel hot, You are right / You are wrong, I'm afraid of that, I need to leave",
        "meaning": "J'ai faim / J'ai soif, J'ai froid / J'ai chaud, Tu as raison / Tu as tort, J'ai peur de ça, J'ai besoin de partir",
        "explanation": "Every one of these states is possessed with avoir in French.",
        "id": "fr2901_e1"
      },
      {
        "type": "shift_select",
        "prompt": "You are sitting outside in winter and shivering. How do you say 'I am cold'?",
        "options": [
          "J'ai froid",
          "Je suis froid",
          "Je fais froid"
        ],
        "target_answer": "J'ai froid",
        "meaning": "I am cold (lit. I have cold)",
        "explanation": "A person feeling cold or hot always uses avoir: J'ai froid / J'ai chaud.",
        "id": "fr2901_e2"
      },
      {
        "type": "variant_english",
        "prompt": "Which English sentences match 'J'ai besoin de comprendre'?",
        "german": "J'ai besoin de comprendre",
        "meaning": "I need to understand",
        "renderings": [
          "I need to understand",
          "I have a need to understand"
        ],
        "traps": [
          "I already understand everything",
          "I am afraid to understand"
        ],
        "target_answer": "I need to understand",
        "explanation": "avoir besoin de + bare infinitive means 'to need to [do something]'.",
        "id": "fr2901_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "are you hungry or are you thirsty",
        "cues": [
          "Have you hunger → Tu as faim",
          "or have you thirst → ou tu as soif"
        ],
        "idea_parts": [
          "first question → Tu as faim",
          "second question → ou tu as soif"
        ],
        "target_answer": "Tu as faim ou tu as soif",
        "meaning": "Are you hungry or are you thirsty?",
        "word_bank": [
          "Tu",
          "as",
          "faim",
          "ou",
          "tu",
          "as",
          "soif",
          "es",
          "où"
        ],
        "explanation": "Both faim and soif take tu as, linked by ou ('or', no accent).",
        "diagnosis": {
          "slip": "used es or accented où",
          "cue": "Use Tu as faim ou tu as soif."
        },
        "id": "fr2901_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Elle a raison, nous avons besoin de repos",
        "replays": 2,
        "target_answer": "Elle a raison, nous avons besoin de repos",
        "meaning": "She is right, we need rest",
        "cues": [
          "Elle a raison",
          "nous avons besoin de repos"
        ],
        "explanation": "Elle a raison + nous avons besoin de...",
        "affirmation": "You used both avoir idioms accurately!",
        "id": "fr2901_e5"
      }
    ],
    "summary": {
      "outcome": "Express hunger, thirst, heat, cold, fear, rightness, and need with avoir + bare noun.",
      "use_example": {
        "german": "J'ai froid et j'ai faim — allons au bistro !",
        "english": "I'm cold and I'm hungry — let's go to the bistro!"
      },
      "takeaway": "People 'have' hunger, thirst, cold, heat, fear, and reason with avoir.",
      "curiosity_teaser": "Up next on Le Pont ([2902] The Register Ladder Recap): see how Have-Hunger & Co leads directly into The Register Ladder Recap."
    }
  },
  {
    "id": 2902,
    "slug": "lesson-2902",
    "title": "The Register Ladder Recap",
    "subtitle": "Walking the 9 conversion bridges from English formal register into everyday French.",
    "phase": 5,
    "shift_categories": [],
    "word_ids": [
      "confirmation",
      "confirmer",
      "université",
      "différence",
      "exactement",
      "docteur",
      "possible",
      "hôtel",
      "mangé"
    ],
    "table_word_ids": [
      "confirmation",
      "confirmer",
      "université",
      "différence",
      "exactement"
    ],
    "hook": {
      "title": "Walking All Nine Conversion Bridges in One Circuit",
      "content": "Review all 9 conversion bridges that connect your formal English vocabulary directly to French: -ion, -ation→-er, -ité, -ance/-ence, -ed↔-é, -ly→-ment, -or→-eur, -able/-ible, and Norman Doublets!",
      "footnotes": [
        {
          "marker": "1",
          "title": "How one Latin root rides across four bridges at once",
          "content": "Take 'possible / différ-': la possibilité (-ité), possible (-ible), la différence (-ence), différemment (-ment) — one root, four bridges!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "See the English Suffix, Fire the French Bridge",
      "content": "Run a rapid synthesis across all nine conversion families.",
      "linguist_note": "Shared Latin-Norman derivational suffixes account for over 65% of shared English-French lexical density.",
      "trap_note": "Remember the gender locks: -ion, -ité, -ance, -ence are 100% feminine (la/une)!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each conversion bridge with its rule and gender lock:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "-ion & -ité (la tradition, la liberté)",
            "german": "100% Feminine nouns"
          },
          {
            "id": "p2",
            "english": "-ance & -ence (l'importance, la patience)",
            "german": "100% Feminine nouns"
          },
          {
            "id": "p3",
            "english": "-ation → -er (organiser, célébrer)",
            "german": "Active infinitive verbs"
          },
          {
            "id": "p4",
            "english": "-ly → feminine + -ment (naturellement)",
            "german": "Manner adverbs"
          },
          {
            "id": "p5",
            "english": "-able / -ible (capable, visible)",
            "german": "Gender-invariable adjectives"
          }
        ],
        "target_answer": "100% Feminine nouns, 100% Feminine nouns, Active infinitive verbs, Manner adverbs, Gender-invariable adjectives",
        "meaning": "-ion & -ité (la tradition, la liberté), -ance & -ence (l'importance, la patience), -ation → -er (organiser, célébrer), -ly → feminine + -ment (naturellement), -able / -ible (capable, visible)",
        "explanation": "Nine bridges unlock thousands of French words from English you already know.",
        "id": "fr2902_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Which sentence below uses four conversion bridges at once without a single error?",
        "options": [
          "Naturellement, c'est une décision possible à l'université",
          "Naturellement, c'est un décision possible à le université",
          "Naturelment, c'est une décision possible à l'université"
        ],
        "target_answer": "Naturellement, c'est une décision possible à l'université",
        "meaning": "Naturally (-ment), it is a possible (-ible) decision (-ion, f.) at the university (-ité, elided)",
        "explanation": "naturelle + ment, feminine une décision, invariable possible, and elided l'université.",
        "id": "fr2902_e2"
      },
      {
        "type": "derive",
        "prompt": "Convert the English phrase 'really impossible' using the -ment and -ible bridges:",
        "english_hint": "vrai+ment + impossible",
        "target_answer": "vraiment impossible",
        "meaning": "really impossible",
        "explanation": "vraiment + impossible.",
        "id": "fr2902_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "fortunately it is possible to confirm the reservation",
        "cues": [
          "Fortunately → Heureusement",
          "it is possible to confirm → c'est possible de confirmer",
          "the reservation → la réservation"
        ],
        "idea_parts": [
          "adverb → Heureusement",
          "pointer + adjective + verb → c'est possible de confirmer",
          "object → la réservation"
        ],
        "target_answer": "Heureusement, c'est possible de confirmer la réservation",
        "meaning": "Fortunately, it is possible to confirm the reservation",
        "word_bank": [
          "Heureusement",
          "c'est",
          "possible",
          "de",
          "confirmer",
          "la",
          "réservation",
          "le",
          "un"
        ],
        "explanation": "Combines -ment, -ible, -ation→-er, and -ion!",
        "diagnosis": {
          "slip": "used le réservation",
          "cue": "la réservation is feminine."
        },
        "id": "fr2902_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Le directeur a confirmé la décision immédiatement",
        "replays": 2,
        "target_answer": "Le directeur a confirmé la décision immédiatement",
        "meaning": "The director confirmed the decision immediately",
        "cues": [
          "Le directeur",
          "a confirmé la décision",
          "immédiatement"
        ],
        "explanation": "Four bridges in one natural sentence!",
        "affirmation": "You combined -eur, -é, -ion, and -ment effortlessly.",
        "id": "fr2902_e5"
      }
    ],
    "summary": {
      "outcome": "Synthesize all 9 conversion bridges across nouns, verbs, adjectives, and adverbs.",
      "use_example": {
        "german": "Finalement, l'organisation a confirmé la possibilité.",
        "english": "Finally, the organization confirmed the possibility."
      },
      "takeaway": "Nine suffix bridges turn your English vocabulary into a live French lexicon.",
      "curiosity_teaser": "Up next on Le Pont ([2903] Spoken French Shortcuts): see how The Register Ladder Recap leads directly into Spoken French Shortcuts."
    }
  },
  {
    "id": 2903,
    "slug": "sprig-2903",
    "title": "Spoken French Shortcuts",
    "subtitle": "on = nous, dropped ne, t'as / y'a — decoding fast street French without losing the structure.",
    "phase": 5,
    "shift_categories": [],
    "word_ids": [
      "on",
      "nous",
      "pas",
      "tu",
      "as",
      "il_y_a",
      "cest",
      "vouloir",
      "aller",
      "savoir"
    ],
    "table_word_ids": [
      "on",
      "nous",
      "pas",
      "tu",
      "as"
    ],
    "hook": {
      "title": "Why Street French Sounds Faster Than Textbook French",
      "content": "In everyday spoken French: (1) Speakers say on (conjugated like il/elle!) instead of nous for 'we' (On va au café). (2) Speakers drop the ne of negation because pas carries the 'not' (Je sais pas, C'est pas grave). (3) In fast speech, tu as glides into t'as and il y a glides into y'a!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why on = 'we' is the best bargain in spoken French",
          "content": "Because on uses the 3rd-person singular verb (on va, on a, on est, on veut), using on for 'we' means you rarely have to conjugate -ons in casual speech!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Understand Spoken Shortcuts, Produce Clean Standard French",
      "content": "Keep both slices of ne...pas in writing, and recognize On y va ('Let's go'), Je veux pas, and C'est pas possible in speech.",
      "linguist_note": "Jespersen's Cycle explains why French ne evolved from lone negator to paired bracket (ne...pas) to spoken post-verbal pas.",
      "trap_note": "Even when on means 'we', its verb is ALWAYS 3rd-person singular (On est ici, never *On sommes)!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each casual spoken French phrase with its formal written equivalent:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "On va au cinéma (spoken 'we')",
            "german": "Nous allons au cinéma"
          },
          {
            "id": "p2",
            "english": "Je sais pas (dropped ne)",
            "german": "Je ne sais pas"
          },
          {
            "id": "p3",
            "english": "C'est pas possible (dropped ne)",
            "german": "Ce n'est pas possible"
          },
          {
            "id": "p4",
            "english": "On a très faim (spoken 'we')",
            "german": "Nous avons très faim"
          }
        ],
        "target_answer": "Nous allons au cinéma, Je ne sais pas, Ce n'est pas possible, Nous avons très faim",
        "meaning": "On va au cinéma (spoken 'we'), Je sais pas (dropped ne), C'est pas possible (dropped ne), On a très faim (spoken 'we')",
        "explanation": "on takes the il/elle verb form; spoken negation drops ne while keeping pas.",
        "id": "fr2903_e1"
      },
      {
        "type": "shift_select",
        "prompt": "In everyday conversation, how do friends say 'We are here' using 'on'?",
        "options": [
          "On est ici",
          "On sommes ici",
          "On êtes ici"
        ],
        "target_answer": "On est ici",
        "meaning": "We are here (lit. One is here)",
        "explanation": "Even when on means 'we', it always takes the 3rd-person singular verb: On est ici!",
        "id": "fr2903_e2"
      },
      {
        "type": "variant_english",
        "prompt": "Which English sentences match the meaning of 'On va célébrer ce soir'?",
        "german": "On va célébrer ce soir",
        "meaning": "We are going to celebrate tonight",
        "renderings": [
          "We're going to celebrate tonight",
          "We are going to celebrate this evening"
        ],
        "traps": [
          "He is going to celebrate alone tonight",
          "They celebrated yesterday evening"
        ],
        "target_answer": "We're going to celebrate tonight",
        "explanation": "In everyday French, on is the standard spoken pronoun for 'we'.",
        "id": "fr2903_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "we are going to the restaurant tonight (using everyday On va)",
        "cues": [
          "We go to the restaurant tonight → On va au restaurant ce soir"
        ],
        "idea_parts": [
          "subject + verb → On va",
          "destination + time → au restaurant ce soir"
        ],
        "target_answer": "On va au restaurant ce soir",
        "meaning": "We are going to the restaurant tonight",
        "word_bank": [
          "On",
          "va",
          "au",
          "restaurant",
          "ce",
          "soir",
          "allons",
          "la"
        ],
        "explanation": "On va replaces Nous allons in everyday spoken French.",
        "diagnosis": {
          "slip": "paired On with allons",
          "cue": "Pair On with singular va: On va."
        },
        "id": "fr2903_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "On est déjà à la gare",
        "replays": 2,
        "target_answer": "On est déjà à la gare",
        "meaning": "We are already at the train station",
        "cues": [
          "On est",
          "déjà à la gare"
        ],
        "explanation": "On est links with an /n/ liaison (/ɔ̃.n‿ɛ/).",
        "affirmation": "You heard On est and à la gare cleanly.",
        "id": "fr2903_e5"
      }
    ],
    "summary": {
      "outcome": "Use on + 3rd-person singular verb for everyday 'we' and decode spoken French negation and contractions.",
      "use_example": {
        "german": "On va au bistro ? — Oui, on y va !",
        "english": "Shall we go to the bistro? — Yes, let's go!"
      },
      "takeaway": "In spoken French, 'we' is on (with the il/elle verb), and ne disappears while pas does the work.",
      "curiosity_teaser": "Up next on Le Pont ([30] Capstone: Le Pont Reading): see how Spoken French Shortcuts leads directly into Capstone: Le Pont Reading."
    }
  },
  {
    "id": 30,
    "slug": "capstone-le-pont-reading",
    "title": "Capstone: Le Pont Reading",
    "subtitle": "Walking across Le Pont in Paris — every conversion bridge, tense frame, and left-walking pronoun in one living story",
    "phase": 5,
    "shift_categories": [
      "ion",
      "ation",
      "ite",
      "ance",
      "e",
      "ment",
      "eur",
      "able",
      "doublet"
    ],
    "word_ids": [
      "ville",
      "université",
      "liberté",
      "différence",
      "exactement",
      "possible",
      "docteur",
      "hôtel",
      "comprendre",
      "voudrais",
      "faut",
      "depuis"
    ],
    "table_word_ids": [
      "ville",
      "université",
      "liberté",
      "différence",
      "exactement"
    ],
    "hook": {
      "title": "Look How Much French Was Already Inside Your Head",
      "content": "Read this Paris paragraph out loud and watch every topic from the trail light up at once: 'J'habite à Paris depuis deux ans. Hier, quand je suis sorti de l'hôtel, j'ai vu mon ami qui est professeur à l'université. Il m'a dit : « Il faut célébrer ce soir ! J'ai réservé une table au restaurant dont tu parles. » Naturellement, j'ai répondu : « Tu as raison, j'ai très faim — on y va ! »' Every single clause is built from the 9 conversion bridges and the mental-theatre rules you now own.",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why you never needed a phrasebook",
          "content": "A phrasebook hands you frozen sentences you cannot alter. A conversion engine hands you the blueprint so you can build sentences you have never heard before.",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "The Nine Bridges and Five Engines in One Glance",
      "content": "You now hold the complete architecture of Le Pont: (1) The 9 Vocabulary Bridges (-ion, -ation→-er, -ité, -ance, -é↔-ed, -ment, -eur, -able, and Norman doublets like hôtel/hospital). (2) The Left-Walking Pronouns (le, la, lui, leur, me, te, se, y, en). (3) The Ne...Pas Sandwich. (4) The Four Time Frames (Present + depuis, Near Future je vais + inf, Passé Composé avoir/être + participle, Imparfait -ais/-ait). (5) The Polite & Necessary Moods (je voudrais, il faut que).",
      "linguist_note": "English is the most Latinized Germanic language in the world; French is the most Germanicized Romance language — which makes the Channel the richest cognate bridge on earth.",
      "trap_note": "Never revert to translating English word-for-word when under pressure: pause, picture the thought (who acts? does a pronoun walk left? is the state possessed with avoir?), and let the French engine assemble it."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each conversion bridge from the course with its flagship example:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "-ION & -ITÉ (100% feminine)",
            "german": "la réservation / l'université"
          },
          {
            "id": "p2",
            "english": "-ATION → -ER verb engine",
            "german": "confirmation → confirmer"
          },
          {
            "id": "p3",
            "english": "-LY → -MENT adverb bridge",
            "german": "exactement / naturellement"
          },
          {
            "id": "p4",
            "english": "Passé composé + Imparfait",
            "german": "j'ai vu / c'était"
          },
          {
            "id": "p5",
            "english": "Left-walking pronouns (y / en / lui)",
            "german": "j'y vais / j'en veux / je lui parle"
          }
        ],
        "target_answer": "la réservation / l'université, confirmation → confirmer, exactement / naturellement, j'ai vu / c'était, j'y vais / j'en veux / je lui parle",
        "meaning": "-ION & -ITÉ (100% feminine), -ATION → -ER verb engine, -LY → -MENT adverb bridge, Passé composé + Imparfait, Left-walking pronouns (y / en / lui)",
        "explanation": "All nine bridges and five syntactic engines work together in real French.",
        "id": "fr30_e1"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the literal word-for-word structure of 'Il m'a dit qu'il faut partir'?",
        "german": "Il m'a dit qu'il faut partir",
        "natural": "He told me that we have to leave",
        "options": [
          "He told me that we have to leave",
          "He to-me has said that it is-needed to-leave",
          "He me told that one must leaving"
        ],
        "target_answer": "He to-me has said that it is-needed to-leave",
        "meaning": "Literal structure: He to-me has said that it is-needed to-leave",
        "explanation": "m' ('to me') walks before a dit ('has said'), and qu'il faut partir expresses necessity.",
        "id": "fr30_e2"
      },
      {
        "type": "variant_english",
        "prompt": "Which English sentences capture the full meaning of 'J'habite ici depuis trois ans et j'adore la ville'?",
        "german": "J'habite ici depuis trois ans et j'adore la ville",
        "meaning": "I have been living here for three years and I love the city",
        "renderings": [
          "I've lived here for three years and I love the city",
          "I have been living here for three years and I adore the town"
        ],
        "traps": [
          "I lived here three years ago and left the city",
          "I am going to live here for three years"
        ],
        "target_answer": "I've lived here for three years and I love the city",
        "explanation": "Present tense + depuis shows the three-year stay is still ongoing today.",
        "id": "fr30_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "I would like to reserve a table because we are going to celebrate tonight",
        "cues": [
          "Je voudrais réserver une table parce que nous allons célébrer ce soir"
        ],
        "idea_parts": [
          "polite request → Je voudrais réserver une table",
          "reason → parce que nous allons célébrer ce soir"
        ],
        "target_answer": "Je voudrais réserver une table parce que nous allons célébrer ce soir",
        "meaning": "I would like to reserve a table because we are going to celebrate tonight",
        "word_bank": [
          "Je",
          "voudrais",
          "réserver",
          "une",
          "table",
          "parce",
          "que",
          "nous",
          "allons",
          "célébrer",
          "ce",
          "soir",
          "veux",
          "la"
        ],
        "explanation": "Combines conditional je voudrais + -ation verb réserver + parce que + near future nous allons célébrer.",
        "diagnosis": {
          "slip": "used veux or forgot que after parce",
          "cue": "Chain Je voudrais réserver une table + parce que nous allons célébrer ce soir."
        },
        "id": "fr30_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Tu as raison, c'était une excellente décision",
        "replays": 2,
        "target_answer": "Tu as raison, c'était une excellente décision",
        "meaning": "You are right, it was an excellent decision",
        "cues": [
          "You have reason: Tu as raison",
          "it was an excellent decision: c'était une excellente décision"
        ],
        "explanation": "Synthesizes avoir raison, imparfait c'était, feminine agreement, and the -ion bridge.",
        "affirmation": "You completed the spine dictation across all five phases!",
        "id": "fr30_e5"
      }
    ],
    "summary": {
      "outcome": "Read, hear, and assemble multi-clause French sentences combining all 9 conversion bridges, tenses, and pronouns.",
      "use_example": {
        "german": "Je comprends maintenant le français que j'avais déjà dans la tête.",
        "english": "I now understand the French that I already had inside my head."
      },
      "takeaway": "You didn't memorize a foreign language from scratch — you unlocked the French half of your own English.",
      "curiosity_teaser": "Up next on Le Pont ([3001] A Day in Paris: Reading): see how Capstone: Le Pont Reading leads directly into A Day in Paris: Reading."
    },
    "twist": {
      "prompt": "Final spine twist — 'I understand the French that you speak':",
      "target_answer": "Je comprends le français que tu parles",
      "word_bank": [
        "Je",
        "comprends",
        "le",
        "français",
        "que",
        "tu",
        "parles",
        "qui",
        "la"
      ],
      "explanation": "Je comprends + le français + object relative que + tu parles — congratulations on crossing Le Pont!"
    },
    "payoff": {
      "ofLesson": 29,
      "text": "The foundation from Topic 29 (The French Mind) now pays off directly inside Capstone: Le Pont Reading: every sentence here builds on that earlier step."
    }
  },
  {
    "id": 3001,
    "slug": "lesson-3001",
    "title": "A Day in Paris: Reading",
    "subtitle": "The capstone narrative in Paris synthesizing all 9 conversion bridges and tense frames.",
    "phase": 5,
    "shift_categories": [],
    "word_ids": [
      "ville",
      "hôtel",
      "gare",
      "train",
      "restaurant",
      "café",
      "ami",
      "depuis",
      "était",
      "arrivé"
    ],
    "table_word_ids": [
      "ville",
      "hôtel",
      "gare",
      "train",
      "restaurant"
    ],
    "hook": {
      "title": "A Day in Paris: Reading & Building Connected Narrative",
      "content": "Follow a full day in Paris from morning arrival at la gare (Je suis arrivé à la gare) to walking through the city (la ville était belle) and meeting a friend who lives there (qui habite ici depuis cinq ans).",
      "footnotes": [
        {
          "marker": "1",
          "title": "Notice how every clause links with que, qui, où, or parce que",
          "content": "Connected French is simple clauses welded together with quand, parce que, qui, que, and où.",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Scene (Imparfait) + Action (Passé Composé) + Ongoing Truth (Present + depuis)",
      "content": "Read and assemble connected multi-clause sentences set in Paris.",
      "linguist_note": "Narrative cohesion in French relies on tense-aspect switching and relative subordination.",
      "trap_note": "Keep each clause's tense true to its job: ongoing residence = Present + depuis; background scene = Imparfait; completed steps = Passé composé!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each clause from the Paris story with its tense and job:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "Je suis arrivé à la gare ce matin",
            "german": "Passé composé (être): completed arrival"
          },
          {
            "id": "p2",
            "english": "La ville était très belle",
            "german": "Imparfait: background description"
          },
          {
            "id": "p3",
            "english": "J'ai vu mon ami qui habite à Paris depuis trois ans",
            "german": "Passé composé + Present with depuis"
          },
          {
            "id": "p4",
            "english": "On va dîner au restaurant ce soir",
            "german": "Near future: evening plan"
          }
        ],
        "target_answer": "Passé composé (être): completed arrival, Imparfait: background description, Passé composé + Present with depuis, Near future: evening plan",
        "meaning": "Je suis arrivé à la gare ce matin, La ville était très belle, J'ai vu mon ami qui habite à Paris depuis trois ans, On va dîner au restaurant ce soir",
        "explanation": "Four tenses cooperate seamlessly inside one story.",
        "id": "fr3001_e1"
      },
      {
        "type": "variant_english",
        "prompt": "Which English sentences capture the meaning of 'Je suis allé au café où mon ami m'attendait'?",
        "german": "Je suis allé au café où mon ami m'attendait",
        "meaning": "I went to the café where my friend was waiting for me",
        "renderings": [
          "I went to the café where my friend was waiting for me",
          "I walked to the café where my friend was waiting"
        ],
        "traps": [
          "I am going to the café where my friend waits",
          "My friend went to the café where I was waiting"
        ],
        "target_answer": "I went to the café where my friend was waiting for me",
        "explanation": "Je suis allé is the completed motion; m'attendait (-ait) is the ongoing background action.",
        "id": "fr3001_e2"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the literal structure of 'L'ami que j'ai vu habite ici depuis deux ans'?",
        "german": "L'ami que j'ai vu habite ici depuis deux ans",
        "natural": "The friend whom I saw has lived here for two years",
        "options": [
          "The friend whom I saw has lived here for two years",
          "The-friend that I have seen lives here since two years",
          "The friend who saw me lived here two years ago"
        ],
        "target_answer": "The-friend that I have seen lives here since two years",
        "meaning": "Literal structure: The-friend that I have seen lives here since two years",
        "explanation": "que j'ai vu modifies L'ami, and habite ici depuis deux ans uses the present tense.",
        "id": "fr3001_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "I arrived in Paris this morning and the city is very beautiful",
        "cues": [
          "I arrived in Paris this morning → Je suis arrivé à Paris ce matin",
          "and the city is very beautiful → et la ville est très belle"
        ],
        "idea_parts": [
          "past arrival → Je suis arrivé à Paris ce matin",
          "description → et la ville est très belle"
        ],
        "target_answer": "Je suis arrivé à Paris ce matin et la ville est très belle",
        "meaning": "I arrived in Paris this morning and the city is very beautiful",
        "word_bank": [
          "Je",
          "suis",
          "arrivé",
          "à",
          "Paris",
          "ce",
          "matin",
          "et",
          "la",
          "ville",
          "est",
          "très",
          "belle",
          "ai",
          "le"
        ],
        "explanation": "arriver takes être (Je suis arrivé) and cities take à (à Paris).",
        "diagnosis": {
          "slip": "used ai instead of suis",
          "cue": "arriver takes être: Je suis arrivé."
        },
        "id": "fr3001_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Nous avons trouvé un petit bistro près de la gare",
        "replays": 2,
        "target_answer": "Nous avons trouvé un petit bistro près de la gare",
        "meaning": "We found a small bistro near the station",
        "cues": [
          "Nous avons trouvé",
          "un petit bistro près de la gare"
        ],
        "explanation": "trouvé (-é) with avons + BAGS adjective petit before bistro.",
        "affirmation": "You wrote the Paris narrative sentence cleanly.",
        "id": "fr3001_e5"
      }
    ],
    "summary": {
      "outcome": "Read and construct multi-clause French narratives combining past events, background descriptions, and ongoing states.",
      "use_example": {
        "german": "Quand je suis sorti de la gare, j'ai vu que la ville était magnifique.",
        "english": "When I walked out of the station, I saw that the city was magnificent."
      },
      "takeaway": "Real stories weave Passé composé (events), Imparfait (scene), and Present + depuis (ongoing truths).",
      "curiosity_teaser": "Up next on Le Pont ([3002] Trap Watch: False Friends in the Wild): see how A Day in Paris: Reading leads directly into Trap Watch: False Friends in the Wild."
    }
  },
  {
    "id": 3002,
    "slug": "lesson-3002",
    "title": "Trap Watch: False Friends in the Wild",
    "subtitle": "High-frequency false friends (actuellement, librairie, attendre, raisin, journée, location) in context.",
    "phase": 5,
    "shift_categories": [],
    "word_ids": [
      "trap_actuellement",
      "trap_librairie",
      "trap_attendre",
      "trap_demander",
      "trap_raisin",
      "trap_journée",
      "trap_location",
      "trap_formidable"
    ],
    "table_word_ids": [
      "trap_actuellement",
      "trap_librairie",
      "trap_attendre",
      "trap_demander",
      "trap_raisin"
    ],
    "hook": {
      "title": "Trap Watch: Outsmarting the Full False-Friends Deck in Context",
      "content": "Alongside actuellement ('currently'), la librairie ('bookshop'), attendre ('to wait for'), and demander ('to ask'), watch out for four more classic traps: le raisin ('fresh grape' — a dried raisin is un raisin sec!), la journée ('the day' — Bonne journée ! is 'Have a good day!'), la location ('rental/lease'), and formidable ('wonderful/tremendous')!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why 'Bonne journée !' means 'Have a good day!' and not 'Have a good trip!'",
          "content": "jour ('day') + -née ('the span of') = la journée ('the whole day long'). A travel journey is un voyage!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Read the French Meaning, Ignore the English Lookalike",
      "content": "Test yourself across the false friends in live context.",
      "linguist_note": "Semantic divergence creates false cognates between sibling lexicons.",
      "trap_note": "Never wish someone *Bonne journée when you mean 'Have a safe trip' (that's Bon voyage !)!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each French false friend with its TRUE French meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "le raisin (vs. un raisin sec)",
            "german": "fresh grape (not dried raisin)"
          },
          {
            "id": "p2",
            "english": "la journée (Bonne journée !)",
            "german": "the day's span (not travel journey)"
          },
          {
            "id": "p3",
            "english": "la location (voiture de location)",
            "german": "rental / lease (not geographic location)"
          },
          {
            "id": "p4",
            "english": "formidable (C'est formidable !)",
            "german": "wonderful / terrific (not fearsome)"
          },
          {
            "id": "p5",
            "english": "la librairie (vs. la bibliothèque)",
            "german": "bookshop (not lending library)"
          },
          {
            "id": "p6",
            "english": "actuellement (vs. vraiment / en fait)",
            "german": "currently (not actually)"
          }
        ],
        "target_answer": "fresh grape (not dried raisin), the day's span (not travel journey), rental / lease (not geographic location), wonderful / terrific (not fearsome), bookshop (not lending library), currently (not actually)",
        "meaning": "le raisin (vs. un raisin sec), la journée (Bonne journée !), la location (voiture de location), formidable (C'est formidable !), la librairie (vs. la bibliothèque), actuellement (vs. vraiment / en fait)",
        "explanation": "Every one of these words kept its spelling while shifting meaning on one side of the Channel.",
        "id": "fr3002_e1"
      },
      {
        "type": "shift_select",
        "prompt": "What does 'C'est une voiture de location' mean?",
        "options": [
          "It is a rental car",
          "It is a car in this location",
          "It is a local car"
        ],
        "target_answer": "It is a rental car",
        "meaning": "la location = rental / lease (from louer 'to rent')",
        "explanation": "Geographic location is le lieu or l'endroit; la location is a rental!",
        "id": "fr3002_e2"
      },
      {
        "type": "variant_english",
        "prompt": "Which English sentences accurately translate 'Ton idée est formidable, bonne journée'?",
        "german": "Ton idée est formidable, bonne journée",
        "meaning": "Your idea is wonderful, have a great day!",
        "renderings": [
          "Your idea is wonderful, have a good day!",
          "Your idea is terrific, have a nice day!"
        ],
        "traps": [
          "Your idea is terrifying, have a safe trip!",
          "Your idea is formidable, good journey!"
        ],
        "target_answer": "Your idea is wonderful, have a good day!",
        "explanation": "formidable means 'wonderful/terrific', and bonne journée means 'have a good day'.",
        "id": "fr3002_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "I am waiting for my friend in front of the bookshop (use devant la librairie)",
        "cues": [
          "I wait-for my friend → J'attends mon ami",
          "in front of the bookshop → devant la librairie"
        ],
        "idea_parts": [
          "verb + direct object → J'attends mon ami",
          "place → devant la librairie"
        ],
        "target_answer": "J'attends mon ami devant la librairie",
        "meaning": "I am waiting for my friend in front of the bookshop",
        "word_bank": [
          "J'attends",
          "mon",
          "ami",
          "devant",
          "la",
          "librairie",
          "bibliothèque",
          "le"
        ],
        "explanation": "Combines attendre ('wait for') and la librairie ('bookshop').",
        "diagnosis": {
          "slip": "used bibliothèque",
          "cue": "Bookshop is la librairie."
        },
        "id": "fr3002_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "J'habite actuellement ici et c'est formidable",
        "replays": 2,
        "target_answer": "J'habite actuellement ici et c'est formidable",
        "meaning": "I currently live here and it is wonderful",
        "cues": [
          "J'habite actuellement ici",
          "et c'est formidable"
        ],
        "explanation": "actuellement = 'currently'; formidable = 'wonderful'.",
        "affirmation": "You decoded both false friends in one sentence!",
        "id": "fr3002_e5"
      }
    ],
    "summary": {
      "outcome": "Spot and accurately use French false friends in context.",
      "use_example": {
        "german": "Merci beaucoup et bonne journée !",
        "english": "Thank you very much and have a great day!"
      },
      "takeaway": "la journée = the day; le raisin = fresh grape; la location = rental; formidable = wonderful.",
      "curiosity_teaser": "Up next on Le Pont ([3003] The Whole-Trail Review Game): see how Trap Watch: False Friends in the Wild leads directly into The Whole-Trail Review Game."
    }
  },
  {
    "id": 3003,
    "slug": "lesson-3003",
    "title": "The Whole-Trail Review Game",
    "subtitle": "Mixed-mode synthesis across all 30 topics of Le Pont.",
    "phase": 5,
    "shift_categories": [],
    "word_ids": [
      "vouloir",
      "aller",
      "avoir",
      "être",
      "faut",
      "voudrais",
      "depuis",
      "en_pron",
      "y",
      "qui",
      "que"
    ],
    "table_word_ids": [
      "vouloir",
      "aller",
      "avoir",
      "être",
      "faut"
    ],
    "hook": {
      "title": "The Whole-Trail Synthesis Game: All 30 Topics in Action",
      "content": "Mix every major tool from the entire 30-topic trail in one synthesis circuit: left-walking pronouns (le, la, lui, y, en), the ne...pas sandwich, partitive collapse (pas de), Present + depuis, Passé composé vs. Imparfait, Conditional politeness (je voudrais), impersonal necessity (il faut que), and relative clauses (qui / que / dont).",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why your French brain now builds instead of memorizing",
          "content": "Every complex sentence is just 2 or 3 small rules snapping together in sequence!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Think the Pieces, Assemble the Chain",
      "content": "Complete the final mixed-mode synthesis challenges across all five phases of Le Pont.",
      "linguist_note": "Compositional mastery of clitic placement, TMA auxiliaries, and relativization covers the core grammar of French.",
      "trap_note": "Check: (1) Where does the pronoun stand? (2) Which tense fits the time frame? (3) Does que bridge the clause?"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each core French structure with its flagship example:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "Ongoing duration (Present + depuis)",
            "german": "J'habite ici depuis trois ans"
          },
          {
            "id": "p2",
            "english": "Completed past + ago (Passé composé + il y a)",
            "german": "Je suis arrivé il y a trois ans"
          },
          {
            "id": "p3",
            "english": "Polite conditional + partitive",
            "german": "Je voudrais du pain, s'il vous plaît"
          },
          {
            "id": "p4",
            "english": "Subjunctive after necessity (Il faut que)",
            "german": "Il faut que j'y aille"
          },
          {
            "id": "p5",
            "english": "Subject vs. object relative (qui vs. que)",
            "german": "L'ami qui parle / Le livre que j'aime"
          }
        ],
        "target_answer": "J'habite ici depuis trois ans, Je suis arrivé il y a trois ans, Je voudrais du pain, s'il vous plaît, Il faut que j'y aille, L'ami qui parle / Le livre que j'aime",
        "meaning": "Ongoing duration (Present + depuis), Completed past + ago (Passé composé + il y a), Polite conditional + partitive, Subjunctive after necessity (Il faut que), Subject vs. object relative (qui vs. que)",
        "explanation": "Five master contrasts that define fluent French.",
        "id": "fr3003_e1"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the literal word-for-word structure of 'Je ne lui en ai pas parlé'?",
        "german": "Je ne lui en ai pas parlé",
        "natural": "I didn't speak to him/her about it",
        "options": [
          "I didn't speak to him/her about it",
          "I not to-him/her of-it have step spoken",
          "I did not speak of it to him"
        ],
        "target_answer": "I not to-him/her of-it have step spoken",
        "meaning": "Literal structure: I not to-him/her of-it have step spoken",
        "explanation": "ne + lui (to-him/her) + en (of-it) + ai + pas + parlé!",
        "id": "fr3003_e2"
      },
      {
        "type": "shift_select",
        "prompt": "Choose the sentence that is 100% grammatical in French:",
        "options": [
          "Voici le restaurant dont je t'ai parlé hier",
          "Voici le restaurant que je t'ai parlé hier",
          "Voici le restaurant dont j'ai te parlé hier"
        ],
        "target_answer": "Voici le restaurant dont je t'ai parlé hier",
        "meaning": "parler de triggers dont, and t' stands before ai parlé",
        "explanation": "dont replaces de + restaurant, and te elides before the auxiliary ai!",
        "id": "fr3003_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "I would like to go there tomorrow because it is very beautiful",
        "cues": [
          "I would like to-there-go tomorrow → Je voudrais y aller demain",
          "because it is very beautiful → parce que c'est très beau"
        ],
        "idea_parts": [
          "conditional + y + infinitive → Je voudrais y aller demain",
          "reason clause → parce que c'est très beau"
        ],
        "target_answer": "Je voudrais y aller demain parce que c'est très beau",
        "meaning": "I would like to go there tomorrow because it is very beautiful",
        "word_bank": [
          "Je",
          "voudrais",
          "y",
          "aller",
          "demain",
          "parce",
          "que",
          "c'est",
          "très",
          "beau",
          "pourquoi",
          "la"
        ],
        "explanation": "y stands right before the infinitive aller, and parce que bridges the reason.",
        "diagnosis": {
          "slip": "placed y before voudrais",
          "cue": "Put y before aller and use parce que for 'because'."
        },
        "id": "fr3003_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Il faut que je parte parce qu'on m'attend",
        "replays": 2,
        "target_answer": "Il faut que je parte parce qu'on m'attend",
        "meaning": "I have to leave because they are waiting for me",
        "cues": [
          "Il faut que je parte",
          "parce qu'on m'attend"
        ],
        "explanation": "Subjunctive parte after Il faut que + everyday on m'attend.",
        "affirmation": "Congratulations — you completed the entire 30-topic French trail!",
        "id": "fr3003_e5"
      }
    ],
    "summary": {
      "outcome": "Synthesize all grammatical engines and conversion bridges of Le Pont with accuracy and confidence.",
      "use_example": {
        "german": "Je sais maintenant que je peux parler français.",
        "english": "I know now that I can speak French."
      },
      "takeaway": "Every complex French sentence is built from simple, transparent pieces you now own.",
      "curiosity_teaser": "Up next on Le Pont ([5011] Bonjour & Merci): see how The Whole-Trail Review Game leads directly into Bonjour & Merci."
    }
  },
  {
    "id": 5011,
    "slug": "bonjour-merci",
    "title": "Bonjour & Merci",
    "subtitle": "Greetings, thanks, and ça va — the politeness set in dialogue",
    "phase": 1,
    "shift_categories": [],
    "word_ids": [
      "bonjour",
      "merci",
      "oui",
      "sil_vous_plait",
      "vous",
      "tu"
    ],
    "table_word_ids": [
      "bonjour",
      "merci",
      "sil_vous_plait",
      "vous"
    ],
    "hook": {
      "title": "Words You Must Never Convert",
      "content": "Bonjour is not 'good journey' and merci is not 'merchant's fee' in this context — some words you simply take as whole items. Bonjour (good day), merci (thanks — mercy's coin), oui (yes), s'il vous plaît (if it pleases you). These are the handshake of the language: small, fixed, and everywhere.",
      "footnotes": [
        {
          "marker": "1",
          "title": "merci and mercy",
          "content": "Latin mercēs 'wages, reward' gave French merci and English mercy. Thanking someone is acknowledging what you owe — the coin is the same in both languages.",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "ça va — the Conversation That Answers Itself",
      "content": "Ça va ? — 'it goes?' — is the everyday how-are-you. The answer is the same two words: ça va. Greeting culture also has the bise (cheek kisses, count varies by region) and the tu/vous decision — vous for strangers and formality, tu for friends. When in doubt: vous. Nobody was ever fired for vous.",
      "footnotes": [
        {
          "marker": "2",
          "title": "The T–V line",
          "content": "tu/vous is the same politeness ladder as German du/Sie and English's lost thou/ye. French kept the ladder standing; English knocked its own down.",
          "interest": true
        }
      ],
      "trap_note": "Don't over-convert: bonjour is one word, not 'bon jour' to be rebuilt. Idioms are items, not formulas."
    },
    "exercises": [
      {
        "id": "fr5011_e1",
        "type": "matching_pairs",
        "prompt": "Match each politeness formula with its use:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "hello / good day",
            "german": "Bonjour"
          },
          {
            "id": "p2",
            "english": "thank you",
            "german": "Merci"
          },
          {
            "id": "p3",
            "english": "please (formal)",
            "german": "S'il vous plaît"
          },
          {
            "id": "p4",
            "english": "yes",
            "german": "Oui"
          },
          {
            "id": "p5",
            "english": "how's it going?",
            "german": "Ça va ?"
          }
        ],
        "target_answer": "Bonjour, Merci, S'il vous plaît, Oui, Ça va ?",
        "meaning": "the handshake set",
        "explanation": "Five fixed items — taken whole, used whole."
      },
      {
        "id": "fr5011_e2",
        "type": "shift_select",
        "prompt": "A stranger at the bakery — which pronoun do you reach for?",
        "options": [
          "tu",
          "vous",
          "on"
        ],
        "target_answer": "vous",
        "meaning": "vous — the safe formal default",
        "explanation": "Strangers, elders, officials: vous. Friends, children, dogs: tu. When in doubt, vous."
      },
      {
        "id": "fr5011_e3",
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "you're ordering politely: a coffee, please (formal)",
        "cues": [
          "the item: un café",
          "the politeness tag: s'il vous plaît",
          "Un café, s'il vous plaît"
        ],
        "target_answer": "Un café, s'il vous plaît",
        "meaning": "A coffee, please",
        "word_bank": [
          "Un",
          "café",
          "s'il",
          "vous",
          "plaît",
          "tu",
          "la"
        ],
        "idea_parts": [
          "the thing → un café",
          "the tag → s'il vous plaît",
          "register → formal (vous)"
        ],
        "explanation": "The politeness escalator starts here — topic 26 will upgrade it to je voudrais."
      },
      {
        "id": "fr5011_e4",
        "type": "literal_gloss",
        "prompt": "Which English sentence is built the French way?",
        "german": "Ça va ? — Ça va, merci",
        "natural": "How's it going? — Fine, thanks",
        "options": [
          "It goes? — It goes, thanks",
          "How are you? — I am fine, thanks",
          "It goes? — I go, thanks"
        ],
        "target_answer": "It goes? — It goes, thanks",
        "meaning": "The odd English is the lesson: aller (to go) carries the greeting.",
        "explanation": "ça va is literally 'it goes'. The question and the answer are the same sentence, tilted."
      },
      {
        "id": "fr5011_e5",
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Bonjour, merci beaucoup",
        "replays": 2,
        "target_answer": "Bonjour, merci beaucoup",
        "meaning": "Hello, thanks a lot",
        "cues": [
          "bon — the bonus word",
          "jour — the day",
          "beaucoup: 'many coups' — the beau-family amplifier"
        ],
        "explanation": "beaucoup (from beau 'beautiful' + coup 'stroke') — thanks, amplified.",
        "affirmation": "You spelled beaucoup as one word — the amplifier stays welded."
      }
    ],
    "summary": {
      "outcome": "Deploy the handshake set, choose vous under pressure, and answer ça va with itself.",
      "use_example": {
        "german": "Bonjour ! Ça va ? — Ça va, merci.",
        "english": "Hello! How's it going? — Fine, thanks."
      },
      "takeaway": "Idioms are items, not formulas — and vous is the pronoun you can't be fired for.",
      "curiosity_teaser": "Up next on Le Pont ([5012] The Alphabet & Je m'appelle): see how Bonjour & Merci leads directly into The Alphabet & Je m'appelle."
    }
  },
  {
    "id": 5012,
    "slug": "alphabet-je-mappelle",
    "title": "The Alphabet & Je m'appelle",
    "subtitle": "Spelling your name: w is double-v, y is i-grec",
    "phase": 1,
    "shift_categories": [],
    "word_ids": [
      "appeler",
      "cest",
      "vous"
    ],
    "table_word_ids": [
      "appeler",
      "cest"
    ],
    "hook": {
      "title": "Twenty-Six Letters, Some Wearing Disguises",
      "content": "The French alphabet is the English alphabet with a French voice — but a few letters have new names: w is double-v (double vé), y is i-grec (Greek i), z is zède, g is gé and j is ji. When a reservation requires spelling, French spells: B comme Béatrice.",
      "footnotes": [
        {
          "marker": "1",
          "title": "comme-spelling",
          "content": "French spells names by analogy: 'M comme Marie, A comme Anita…' — the word comme ('like') does the pointing. Keep a small stock of proper nouns ready.",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "je m'appelle — I Call Myself",
      "content": "Introductions are reflexive: je m'appelle Marie — 'I call myself Marie'. The se of appeler walks left like every pronoun you've met: je me appelle → je m'appelle (elision again). Comment tu t'appelles ? — how do you call yourself? The whole intro formula is machinery you already own.",
      "footnotes": [
        {
          "marker": "2",
          "title": "The double-l story",
          "content": "me + appelle elides to m'appelle. The l is not doubled for fun: je me appelle → je m'appelle — the vowel sacrificed, as always.",
          "interest": true
        }
      ],
      "trap_note": "Don't say je suis Marie for 'my name is Marie' — that's 'I am Marie' (costume-party French). The French introduce by the calling verb: je m'appelle."
    },
    "exercises": [
      {
        "id": "fr5012_e1",
        "type": "matching_pairs",
        "prompt": "Match each letter with its French name:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "w",
            "german": "double vé"
          },
          {
            "id": "p2",
            "english": "y",
            "german": "i grec"
          },
          {
            "id": "p3",
            "english": "g",
            "german": "gé"
          },
          {
            "id": "p4",
            "english": "z",
            "german": "zède"
          }
        ],
        "target_answer": "double vé, i grec, gé, zède",
        "meaning": "the disguised letters",
        "explanation": "double-v is honest: the letter IS two vees. English renamed it double-u and didn't update the shape."
      },
      {
        "id": "fr5012_e2",
        "type": "shift_select",
        "prompt": "'My name is Marie' — the French:",
        "options": [
          "Je suis Marie",
          "Je m'appelle Marie",
          "Mon appelle Marie"
        ],
        "target_answer": "Je m'appelle Marie",
        "meaning": "I call myself Marie",
        "explanation": "The reflexive formula: je m'appelle. je suis Marie would be a costume declaration."
      },
      {
        "id": "fr5012_e3",
        "type": "derive",
        "prompt": "Elide it: 'je me appelle' → the written form:",
        "target_answer": "je m'appelle",
        "meaning": "the elided reflexive",
        "explanation": "me loses its vowel before a — the apostrophe law, third sighting."
      },
      {
        "id": "fr5012_e4",
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "you're asking a new acquaintance their name (informal)",
        "cues": [
          "the question word: comment (how)",
          "tu + the reflexive pronoun te → t'",
          "Comment tu t'appelles ?"
        ],
        "target_answer": "Comment tu t'appelles",
        "meaning": "What's your name?",
        "vocab_hints": [
          {
            "word": "comment",
            "translation": "how",
            "note": "from Latin quam modum? — 'by what measure'"
          }
        ],
        "word_bank": [
          "Comment",
          "tu",
          "t'appelles",
          "m'appelle",
          "la"
        ],
        "idea_parts": [
          "the question word → comment",
          "the subject → tu",
          "the reflexive → t'appelles (te + appelles, elided)"
        ],
        "explanation": "te walks left and elides, exactly like me did. The machinery is identical — only the person changes."
      },
      {
        "id": "fr5012_e5",
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Je m'appelle Alex, et vous",
        "replays": 2,
        "target_answer": "Je m'appelle Alex, et vous",
        "meaning": "My name is Alex, and you? (formal)",
        "cues": [
          "the reflexive intro: je m'appelle",
          "et — the connector",
          "et vous ? — the polite return question"
        ],
        "explanation": "et vous ? — the formal return. With a friend: et toi ?",
        "affirmation": "You kept the apostrophe in m'appelle — the vowel's tombstone stands."
      }
    ],
    "summary": {
      "outcome": "Spell with French letter names, introduce yourself with je m'appelle, and ask it back with the elided reflexive.",
      "use_example": {
        "german": "Je m'appelle Alex. Et vous ?",
        "english": "My name is Alex. And you?"
      },
      "takeaway": "Introductions are reflexive and elided — the same pronoun machinery, pointed at yourself.",
      "curiosity_teaser": "Up next on Le Pont ([5021] Think the N): see how The Alphabet & Je m'appelle leads directly into Think the N."
    }
  },
  {
    "id": 5021,
    "slug": "nasal-clinic",
    "title": "Think the N",
    "subtitle": "The four nasal vowels: on, en, an, in — the sound of not arriving",
    "phase": 1,
    "shift_categories": [],
    "word_ids": [
      "pain",
      "vingt",
      "bon",
      "on",
      "ne"
    ],
    "table_word_ids": [
      "pain",
      "vingt",
      "bon",
      "on"
    ],
    "hook": {
      "title": "The Sound of Not Saying",
      "content": "French's most foreign sound is an absence. In pain (bread), vingt (twenty), bon (good), on (we), the N is written and never pronounced — but you must still think it. The vowel leans toward the N and stops: that lean IS the nasal vowel. We don't 'drop' the N; we don't arrive at it.",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why French did this",
          "content": "Latin vowels before N/M swallowed the consonant into the vowel itself: panem → pain, bonum → bon. The consonant became breath. English did it too — once: think of the 'nasal' in 'sing', where the G is written and not said.",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Four Colors of Not-Arriving",
      "content": "on /ɔ̃/ as in bon, mon — the mouth rounds and hums. an/en /ɑ̃/ as in pain's cousin enfant, très bien's bien — the mouth opens low. in/ain /ɛ̃/ as in pain, vin, main — the mouth spreads. (The fourth, un /œ̃/, is merging with in for most speakers.) Same technique for all: shape the vowel, start toward the N, stop.",
      "footnotes": [
        {
          "marker": "2",
          "title": "The test word",
          "content": "Say 'singing' in English — the final -ing where the G never lands. That unfinished feeling is the nasal vowel. French just does it in four colors.",
          "interest": true
        }
      ],
      "trap_note": "Don't actually say the N: pain said with a hard N becomes 'pen' and nobody hears bread. The N is a direction, not a destination."
    },
    "exercises": [
      {
        "id": "fr5021_e1",
        "type": "matching_pairs",
        "prompt": "Match each nasal word with its meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "bread",
            "german": "le pain"
          },
          {
            "id": "p2",
            "english": "twenty",
            "german": "vingt"
          },
          {
            "id": "p3",
            "english": "good",
            "german": "bon"
          },
          {
            "id": "p4",
            "english": "we (informal)",
            "german": "on"
          }
        ],
        "target_answer": "le pain, vingt, bon, on",
        "meaning": "the nasal shelf",
        "explanation": "All four wear a silent N — and all four lean into it."
      },
      {
        "id": "fr5021_e2",
        "type": "shift_select",
        "prompt": "Which word does NOT have a nasal vowel?",
        "options": [
          "pain",
          "bonjour",
          "rouge",
          "vin"
        ],
        "target_answer": "rouge",
        "meaning": "rouge — no N, no nasal",
        "explanation": "rouge's /ʒ/ is a full consonant. pain, bonjour (bon+jour), vin all lean toward a silent N."
      },
      {
        "id": "fr5021_e3",
        "type": "derive",
        "prompt": "Pronunciation map: which syllable contains the nasal vowel in 'bonjour'?",
        "english_hint": "the first syllable",
        "target_answer": "bon",
        "meaning": "the nasal vowel is inside bon- — and the N never lands",
        "explanation": "bon /bɔ̃/ + jour /ʒuʁ/. The first syllable hums; the second is clean."
      },
      {
        "id": "fr5021_e3b",
        "type": "syntax_builder",
        "prompt": "Assemble the two-nasal sentence: 'The bread is good'",
        "target_answer": "Le pain est bon",
        "meaning": "The bread is good",
        "word_bank": [
          "Le",
          "pain",
          "est",
          "bon",
          "la",
          "bonne"
        ],
        "explanation": "pain (/pɛ̃/) and bon (/bɔ̃/) both lean toward a silent N without landing on it."
      },
      {
        "id": "fr5021_e4",
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Le pain est bon",
        "replays": 2,
        "target_answer": "Le pain est bon",
        "meaning": "The bread is good",
        "cues": [
          "pain — the ɛ̃ nasal: spread the mouth, don't land on the N",
          "est — clean, no nasal",
          "bon — the ɔ̃ nasal: round and hum"
        ],
        "explanation": "Two nasals guarding one clean est between them.",
        "affirmation": "Both Ns were directions, not destinations — that's the whole clinic."
      }
    ],
    "summary": {
      "outcome": "Produce the four nasal vowels by leaning toward the N without arriving — in pain, vingt, bon, on.",
      "use_example": {
        "german": "Le pain est bon, on y va.",
        "english": "The bread is good — shall we?"
      },
      "takeaway": "The N is a direction, not a destination. Unfinished is correct.",
      "curiosity_teaser": "Up next on Le Pont ([5031] Actuellement, Librairie & Co.): see how Think the N leads directly into Actuellement, Librairie & Co.."
    }
  },
  {
    "id": 5031,
    "slug": "false-friends-preview",
    "title": "Actuellement, Librairie & Co.",
    "subtitle": "The trap deck in the wild: same word, different soul",
    "phase": 1,
    "shift_categories": [],
    "word_ids": [
      "trap_actuellement",
      "trap_librairie",
      "trap_attendre",
      "trap_demander",
      "trap_blesser",
      "trap_éventuellement",
      "venir",
      "habiter"
    ],
    "table_word_ids": [
      "trap_actuellement",
      "trap_librairie",
      "trap_attendre"
    ],
    "hook": {
      "title": "The Words That Lie to Your Face",
      "content": "The conversion bridge makes French feel safe — and then actuellement wounds you. It means 'currently', not 'actually'. Librairie is a bookshop, not a library. Attendre is to wait, not to attend. These are the bridge's tollbooths: words that look converted but drifted in meaning while the spelling stayed loyal.",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why the drift",
          "content": "The two languages borrowed the same Latin words and then each lived its own life. Actuellement went with 'the present moment' (actuel); actually went with 'in act, in fact'. Same cradle, different careers.",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Trust the Meaning, Not the Spelling",
      "content": "The rule of thumb: spelling converts reliably, meaning converts mostly. For the high-frequency liars, the fix is exposure — see each one in a real French sentence until the French meaning is the reflex. The full deck lives in the Review Hub, always playable.",
      "trap_note": "The worst offender for English speakers: demander. It's the everyday 'to ask' — je vais demander mon chemin. Nobody is demanding anything."
    },
    "exercises": [
      {
        "id": "fr5031_e1",
        "type": "matching_pairs",
        "prompt": "Match each French word with its REAL meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "currently, at present",
            "german": "actuellement"
          },
          {
            "id": "p2",
            "english": "bookshop",
            "german": "la librairie"
          },
          {
            "id": "p3",
            "english": "to wait for",
            "german": "attendre"
          },
          {
            "id": "p4",
            "english": "to ask",
            "german": "demander"
          },
          {
            "id": "p5",
            "english": "to wound, injure",
            "german": "blesser"
          },
          {
            "id": "p6",
            "english": "possibly",
            "german": "éventuellement"
          }
        ],
        "target_answer": "actuellement, la librairie, attendre, demander, blesser, éventuellement",
        "meaning": "the real meanings, not the English mirrors",
        "explanation": "Six tollbooths on the bridge — each one is a word that kept its spelling and changed its soul."
      },
      {
        "id": "fr5031_e2",
        "type": "shift_select",
        "prompt": "'I work in a bookshop' — the correct word:",
        "options": [
          "la bibliothèque",
          "la librairie",
          "la library"
        ],
        "target_answer": "la librairie",
        "meaning": "bookshop — you work there, books are sold",
        "explanation": "librairie sells; bibliothèque lends. The English 'library' is bibliothèque's job."
      },
      {
        "id": "fr5031_e3",
        "type": "variant_english",
        "prompt": "Which English sentences express the true meaning of 'J'attends le train'?",
        "german": "J'attends le train",
        "meaning": "I am waiting for the train",
        "renderings": [
          "I'm waiting for the train",
          "I wait for the train"
        ],
        "traps": [
          "I am attending the train",
          "I am assisting the train"
        ],
        "target_answer": "I'm waiting for the train",
        "explanation": "attendre means 'to wait for' (with the 'for' built right into the verb). It never means 'to attend'!"
      },
      {
        "id": "fr5031_e4",
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "you might possibly come, no promises (use éventuellement)",
        "cues": [
          "éventuellement = possibly, not eventually",
          "the simple future rides in one word: je viendrai — but for now: je viens éventuellement",
          "keep it simple: Je viens éventuellement"
        ],
        "target_answer": "Je viens éventuellement",
        "meaning": "I might possibly come",
        "word_bank": [
          "Je",
          "viens",
          "éventuellement",
          "finalement",
          "la"
        ],
        "idea_parts": [
          "who? → je",
          "the verb → viens (come)",
          "the hedge → éventuellement"
        ],
        "explanation": "The hedge word is the lesson: éventuellement opens a possibility; finalement closes a story.",
        "diagnosis": {
          "slip": "the hedge became a timeline",
          "cue": "éventuellement = possibly. 'Eventually' (at last, in the end) is finalement. Same looks, opposite jobs."
        }
      },
      {
        "id": "fr5031_e5",
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "J'habite actuellement à Paris",
        "replays": 2,
        "target_answer": "J'habite actuellement à Paris",
        "meaning": "I currently live in Paris",
        "cues": [
          "j'habite — the habitat verb (to dwell)",
          "actuellement — time, not truth",
          "à Paris — the ad-preposition"
        ],
        "explanation": "Three traps in a row survived: habiter's h, actuellement's soul, à's accent.",
        "affirmation": "You read actuellement as time — the tollbooth didn't collect."
      }
    ],
    "summary": {
      "outcome": "Defuse six high-frequency false friends: actuellement, librairie, attendre, demander, blesser, éventuellement.",
      "use_example": {
        "german": "Je demande mon chemin à la librairie.",
        "english": "I ask for directions at the bookshop."
      },
      "takeaway": "Spelling converts reliably; meaning converts mostly. The Review Hub keeps the liars in rotation.",
      "curiosity_teaser": "Up next on Le Pont ([5041] Tutoyer & Vouvoyer): see how Actuellement, Librairie & Co. leads directly into Tutoyer & Vouvoyer."
    }
  },
  {
    "id": 5041,
    "slug": "lesson-5041",
    "title": "Tutoyer & Vouvoyer",
    "subtitle": "Choosing tu vs vous as social verbs, and how on ('one/the man') became spoken French's everyday 'we'.",
    "phase": 1,
    "shift_categories": [],
    "word_ids": [
      "tu",
      "vous",
      "on",
      "nous",
      "homme",
      "parler",
      "aller",
      "ami"
    ],
    "table_word_ids": [
      "tu",
      "vous",
      "on",
      "nous",
      "homme"
    ],
    "hook": {
      "title": "Why French Turned 'tu' and 'vous' Into Action Verbs: tutoyer & vouvoyer",
      "content": "French has two verbs just to name the social register choice: tutoyer ('to say tu to someone') and vouvoyer ('to say vous to someone')! When two colleagues become friends, one asks: On peut se tutoyer ? ('Can we use tu with each other?'). And notice that 'we' is expressed by on — the worn-down form of Latin homō ('man/one')!",
      "footnotes": [
        {
          "marker": "1",
          "title": "How Latin homō ('man') split into two French words: l'homme and on",
          "content": "Stressed as a noun, Latin homō became l'homme ('the man'). Unstressed in front of a verb, it wore down to on (/ɔ̃/)!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "On se tutoie ? ('Shall we use tu?') and On = Spoken 'We'",
      "content": "Use vous with strangers until invited to switch (On se tutoie ?), and use on + 3rd-person singular verb as your everyday spoken 'we'.",
      "linguist_note": "Grammaticalization of Latin nominative homō into the subject clitic on is unique to Gallo-Romance.",
      "trap_note": "Remember: even when on means 'we', its reflexive pronoun is se (On se tutoie) and its verb is singular (On va, On est)!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each social pronoun or verb with its meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "tutoyer quelqu'un",
            "german": "to address someone as 'tu'"
          },
          {
            "id": "p2",
            "english": "vouvoyer quelqu'un",
            "german": "to address someone as 'vous'"
          },
          {
            "id": "p3",
            "english": "On peut se tutoyer ?",
            "german": "Can we use 'tu' with each other?"
          },
          {
            "id": "p4",
            "english": "on (from Latin homo 'man')",
            "german": "we (everyday speech) / one / people"
          }
        ],
        "target_answer": "to address someone as 'tu', to address someone as 'vous', Can we use 'tu' with each other?, we (everyday speech) / one / people",
        "meaning": "tutoyer quelqu'un, vouvoyer quelqu'un, On peut se tutoyer ?, on (from Latin homo 'man')",
        "explanation": "tutoyer and vouvoyer name the social register choice directly.",
        "id": "fr5041_e1"
      },
      {
        "type": "reverse_cognate",
        "prompt": "The pronoun 'on' ('one / we') is the unstressed twin of which French noun meaning 'man' (from Latin homō)?",
        "target_answer": "homme",
        "meaning": "l'homme ↔ on (both from Latin homō)",
        "explanation": "Latin nominative homō became unstressed on; accusative hominem became homme!",
        "id": "fr5041_e2"
      },
      {
        "type": "shift_select",
        "prompt": "A new colleague smiles and asks 'On se tutoie ?' What are they inviting you to do?",
        "options": [
          "Switch from polite 'vous' to informal 'tu'",
          "Speak English instead of French",
          "Go get a coffee together"
        ],
        "target_answer": "Switch from polite 'vous' to informal 'tu'",
        "meaning": "se tutoyer = to address each other as 'tu'",
        "explanation": "On se tutoie ? is the classic French milestone of friendship.",
        "id": "fr5041_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "we are going to the café together (using everyday On va)",
        "cues": [
          "We go to the café → On va au café + together → ensemble"
        ],
        "idea_parts": [
          "subject + verb → On va",
          "destination + adverb → au café ensemble"
        ],
        "target_answer": "On va au café ensemble",
        "meaning": "We are going to the café together",
        "word_bank": [
          "On",
          "va",
          "au",
          "café",
          "ensemble",
          "allons",
          "à"
        ],
        "explanation": "On va replaces Nous allons in everyday conversation.",
        "diagnosis": {
          "slip": "used allons with On",
          "cue": "Pair On with singular va."
        },
        "id": "fr5041_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Ici, tout le monde se tutoie",
        "replays": 2,
        "target_answer": "Ici, tout le monde se tutoie",
        "meaning": "Here, everyone uses 'tu' with each other",
        "cues": [
          "Ici, tout le monde",
          "se tutoie"
        ],
        "explanation": "tout le monde ('everyone') is singular in French!",
        "affirmation": "You wrote tout le monde se tutoie cleanly.",
        "id": "fr5041_e5"
      }
    ],
    "summary": {
      "outcome": "Understand tutoyer/vouvoyer and use on (the worn-down twin of homme) for everyday 'we'.",
      "use_example": {
        "german": "Au travail, on se tutoie tous.",
        "english": "At work, we all use 'tu' with each other."
      },
      "takeaway": "Wait for 'On se tutoie ?' to switch from vous to tu — and use on for everyday 'we'.",
      "curiosity_teaser": "Up next on Le Pont ([5051] Lieu & Direction: ici, là, tout droit): see how Tutoyer & Vouvoyer leads directly into Lieu & Direction: ici, là, tout droit."
    }
  },
  {
    "id": 5051,
    "slug": "lesson-5051",
    "title": "Lieu & Direction: ici, là, tout droit",
    "subtitle": "Navigating streets: tout droit, à gauche, à droite, où est la gare ?",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "ici",
      "là",
      "tout_droit",
      "gauche",
      "droite",
      "gare",
      "hôtel",
      "où",
      "aller"
    ],
    "table_word_ids": [
      "ici",
      "là",
      "tout_droit",
      "gauche",
      "droite"
    ],
    "hook": {
      "title": "Street Navigation: ici, là, tout droit, à gauche, à droite",
      "content": "When you ask for directions (Excusez-moi, où est la gare ?), three phrases guide you: tout droit ('straight ahead'), à gauche ('on/to the left'), and à droite ('on/to the right')!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why English borrowed 'gauche' (left) and 'adroit' (right)",
          "content": "English borrowed French gauche ('left') for 'awkward' and French à droit ('to the right') as 'adroit' ('skillful')!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Allez tout droit, puis à gauche / à droite",
      "content": "Combine Où est…? with tout droit, à gauche, à droite, ici, and là.",
      "linguist_note": "Deictic adverbs ici/là and directional prepositional phrases (à gauche, à droite) anchor spatial navigation.",
      "trap_note": "Don't say *sur la gauche for basic 'on/to the left' — French uses à: à gauche, à droite!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each street-direction phrase with its English meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "tout droit (all direct)",
            "german": "straight ahead"
          },
          {
            "id": "p2",
            "english": "à gauche (English 'gauche')",
            "german": "to / on the left"
          },
          {
            "id": "p3",
            "english": "à droite (English 'adroit')",
            "german": "to / on the right"
          },
          {
            "id": "p4",
            "english": "ici / là",
            "german": "here / there"
          },
          {
            "id": "p5",
            "english": "Où est la gare ?",
            "german": "Where is the train station?"
          }
        ],
        "target_answer": "straight ahead, to / on the left, to / on the right, here / there, Where is the train station?",
        "meaning": "tout droit (all direct), à gauche (English 'gauche'), à droite (English 'adroit'), ici / là, Où est la gare ?",
        "explanation": "tout droit, à gauche, and à droite handle 90% of street directions.",
        "id": "fr5051_e1"
      },
      {
        "type": "reverse_cognate",
        "prompt": "French droite ('right') and droit ('straight/direct') gave English which adjective meaning 'clever or skillful with one's hands'?",
        "target_answer": "adroit",
        "meaning": "adroit ↔ à droit ('to the right')",
        "explanation": "Just as 'gauche' (left) came to mean awkward in English, 'adroit' (to the right) came to mean skillful!",
        "id": "fr5051_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How do you tell someone 'Go straight ahead, then to the left' (polite vous)?",
        "options": [
          "Allez tout droit, puis à gauche",
          "Allez tout droite, puis sur gauche",
          "Aller tout droit, puis à la gauche"
        ],
        "target_answer": "Allez tout droit, puis à gauche",
        "meaning": "Go straight ahead, then to the left",
        "explanation": "tout droit uses masculine invariable droit; 'to the left' is à gauche.",
        "id": "fr5051_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "the train station is on the right and the hotel is on the left",
        "cues": [
          "The station is on the right → La gare est à droite",
          "and the hotel is on the left → et l'hôtel est à gauche"
        ],
        "idea_parts": [
          "first location → La gare est à droite",
          "second location → et l'hôtel est à gauche"
        ],
        "target_answer": "La gare est à droite et l'hôtel est à gauche",
        "meaning": "The station is on the right and the hotel is on the left",
        "word_bank": [
          "La",
          "gare",
          "est",
          "à",
          "droite",
          "et",
          "l'hôtel",
          "est",
          "à",
          "gauche",
          "droit",
          "la"
        ],
        "explanation": "à droite ('on the right') and à gauche ('on the left').",
        "diagnosis": {
          "slip": "used droit instead of droite",
          "cue": "The noun phrase 'on the right' is feminine: à droite."
        },
        "id": "fr5051_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Vous allez tout droit et c'est là",
        "replays": 2,
        "target_answer": "Vous allez tout droit et c'est là",
        "meaning": "You go straight ahead and it is right there",
        "cues": [
          "Vous allez tout droit",
          "et c'est là"
        ],
        "explanation": "tout droit = straight ahead.",
        "affirmation": "You wrote Vous allez tout droit et c'est là cleanly.",
        "id": "fr5051_e5"
      }
    ],
    "summary": {
      "outcome": "Ask for and give street directions using Où est…?, tout droit, à gauche, à droite, ici, and là.",
      "use_example": {
        "german": "Pardon, la gare ? — C'est tout droit, puis à gauche.",
        "english": "Excuse me, the station? — It's straight ahead, then on the left."
      },
      "takeaway": "Straight ahead = tout droit; left = à gauche; right = à droite.",
      "curiosity_teaser": "Up next on Le Pont ([5061] C'est combien ?): see how Lieu & Direction: ici, là, tout droit leads directly into C'est combien ?."
    }
  },
  {
    "id": 5061,
    "slug": "lesson-5061",
    "title": "C'est combien ?",
    "subtitle": "Asking prices, ordering with numbers 1–100, and l'addition at the bistro.",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "combien",
      "un",
      "deux",
      "cinq",
      "dix",
      "vingt",
      "trente",
      "soixante",
      "quatre_vingts",
      "cent",
      "addition"
    ],
    "table_word_ids": [
      "combien",
      "un",
      "deux",
      "cinq",
      "dix"
    ],
    "hook": {
      "title": "Market & Bistro Prices: C'est combien ? and Ça fait… euros",
      "content": "Two phrases handle every price transaction: C'est combien ? ('How much is it?') and Ça fait dix euros ('That comes to ten euros')! And when you are ready to pay at a restaurant, ask: L'addition, s'il vous plaît ('The bill/check, please').",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why French says 'Ça fait...' ('That makes...') for a total price",
          "content": "faire in the 3rd person (ça fait, 'that makes') is used whenever items add up to a total: Ça fait combien ? — Ça fait vingt euros!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "C'est combien ? / Ça fait combien ? → C'est X euros / Ça fait X euros",
      "content": "Practice asking prices and stating totals with numbers 1–100 and l'addition.",
      "linguist_note": "Colloquial price inquiry favors C'est combien ? or Ça fait combien ?.",
      "trap_note": "A restaurant bill is always l'addition!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each shopping or bistro phrase with its meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "C'est combien ?",
            "german": "How much is it?"
          },
          {
            "id": "p2",
            "english": "Ça fait combien ?",
            "german": "How much does that come to?"
          },
          {
            "id": "p3",
            "english": "Ça fait vingt euros",
            "german": "That comes to twenty euros"
          },
          {
            "id": "p4",
            "english": "L'addition, s'il vous plaît",
            "german": "The bill / check, please"
          },
          {
            "id": "p5",
            "english": "C'est moins cher",
            "german": "It is cheaper / less expensive"
          }
        ],
        "target_answer": "How much is it?, How much does that come to?, That comes to twenty euros, The bill / check, please, It is cheaper / less expensive",
        "meaning": "C'est combien ?, Ça fait combien ?, Ça fait vingt euros, L'addition, s'il vous plaît, C'est moins cher",
        "explanation": "C'est combien and Ça fait handle every price check.",
        "id": "fr5061_e1"
      },
      {
        "type": "shift_select",
        "prompt": "At the end of a restaurant meal, what do you ask the waiter for?",
        "options": [
          "L'addition, s'il vous plaît",
          "La monnaie, s'il vous plaît",
          "La location, s'il vous plaît"
        ],
        "target_answer": "L'addition, s'il vous plaît",
        "meaning": "The bill, please (lit. the addition of the items)",
        "explanation": "la monnaie is loose change; la location is a rental; the restaurant bill is l'addition!",
        "id": "fr5061_e2"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the literal structure of 'Ça fait trente euros'?",
        "german": "Ça fait trente euros",
        "natural": "That comes to thirty euros",
        "options": [
          "That comes to thirty euros",
          "That makes thirty euros",
          "It does thirty euros"
        ],
        "target_answer": "That makes thirty euros",
        "meaning": "Literal structure: That makes thirty euros",
        "explanation": "Ça ('that') + fait ('makes') + trente euros.",
        "id": "fr5061_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "how much is it for two coffees (using C'est combien pour deux cafés)",
        "cues": [
          "It is how much → C'est combien",
          "for two coffees → pour deux cafés"
        ],
        "idea_parts": [
          "price question → C'est combien",
          "items → pour deux cafés"
        ],
        "target_answer": "C'est combien pour deux cafés",
        "meaning": "How much is it for two coffees?",
        "word_bank": [
          "C'est",
          "combien",
          "pour",
          "deux",
          "cafés",
          "comment",
          "la"
        ],
        "explanation": "C'est combien + pour deux cafés.",
        "diagnosis": {
          "slip": "used comment",
          "cue": "Use combien for 'how much'."
        },
        "id": "fr5061_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "L'addition, s'il vous plaît, ça fait combien",
        "replays": 2,
        "target_answer": "L'addition, s'il vous plaît, ça fait combien",
        "meaning": "The bill, please — how much does that come to?",
        "cues": [
          "L'addition, s'il vous plaît",
          "ça fait combien"
        ],
        "explanation": "Combines the bill request with the total question.",
        "affirmation": "You wrote L'addition and ça fait combien cleanly.",
        "id": "fr5061_e5"
      }
    ],
    "summary": {
      "outcome": "Ask prices with C'est combien ? / Ça fait combien ?, state totals in euros, and ask for l'addition.",
      "use_example": {
        "german": "Bonjour, c'est combien pour ce livre ? — Ça fait dix euros.",
        "english": "Hello, how much is it for this book? — That comes to ten euros."
      },
      "takeaway": "How much = C'est combien ?; Total = Ça fait X euros; Restaurant check = L'addition.",
      "curiosity_teaser": "Up next on Le Pont ([5071] Je n'ai pas mangé): see how C'est combien ? leads directly into Je n'ai pas mangé."
    }
  },
  {
    "id": 5071,
    "slug": "lesson-5071",
    "title": "Je n'ai pas mangé",
    "subtitle": "The sandwich wraps the auxiliary (je n'ai pas compris, tu n'as pas vu) and déjà slots inside.",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "mangé",
      "compris",
      "vu",
      "pris",
      "fait",
      "déjà",
      "pas",
      "ne",
      "rien",
      "jamais",
      "avoir"
    ],
    "table_word_ids": [
      "mangé",
      "compris",
      "vu",
      "pris",
      "fait"
    ],
    "hook": {
      "title": "Where the Negation Sandwich Sits in the Passé Composé",
      "content": "When a verb has two parts — the auxiliary (j'ai, tu as, je suis) and the past participle (mangé, compris, vu, allé) — the sandwich ALWAYS hugs the conjugated auxiliary, leaving the participle outside at the end: Je n'ai pas mangé, Je n'ai pas compris, Je n'ai jamais vu ce film, Je n'ai rien fait!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Notice how English 'I have never seen / I have already eaten' uses the EXACT same slot!",
          "content": "French puts pas, jamais, rien, and déjà in the exact same middle slot where English puts 'not / never / already' between 'have' and 'seen'!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Subject + ne + Auxiliary + pas/jamais/rien/déjà + Participle",
      "content": "Wrap the auxiliary, never the participle!",
      "linguist_note": "French negative and aspectual adverbs occupy the post-auxiliary position above the past participle.",
      "trap_note": "Never put pas, jamais, rien, or déjà after the participle (*Je n'ai compris pas) — slot them between the auxiliary and the participle!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each past negative or adverbial sentence with its meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "Je n'ai pas compris",
            "german": "I didn't understand / haven't understood"
          },
          {
            "id": "p2",
            "english": "Tu n'as pas mangé ?",
            "german": "Haven't you eaten? / Didn't you eat?"
          },
          {
            "id": "p3",
            "english": "Je n'ai jamais vu ça",
            "german": "I have never seen that"
          },
          {
            "id": "p4",
            "english": "Il n'a rien dit / rien fait",
            "german": "He said nothing / did nothing"
          },
          {
            "id": "p5",
            "english": "Nous avons déjà réservé",
            "german": "We have already reserved"
          }
        ],
        "target_answer": "I didn't understand / haven't understood, Haven't you eaten? / Didn't you eat?, I have never seen that, He said nothing / did nothing, We have already reserved",
        "meaning": "Je n'ai pas compris, Tu n'as pas mangé ?, Je n'ai jamais vu ça, Il n'a rien dit / rien fait, Nous avons déjà réservé",
        "explanation": "pas, jamais, rien, and déjà all stand between the auxiliary and the participle!",
        "id": "fr5071_e1"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the literal word-for-word order of 'Je n'ai rien fait'?",
        "german": "Je n'ai rien fait",
        "natural": "I didn't do anything",
        "options": [
          "I didn't do anything",
          "I not-have nothing done",
          "I did nothing not"
        ],
        "target_answer": "I not-have nothing done",
        "meaning": "Literal structure: I not-have nothing done",
        "explanation": "rien ('nothing') stands right between n'ai and the participle fait!",
        "id": "fr5071_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'I have never visited Lyon'?",
        "options": [
          "Je n'ai jamais visité Lyon",
          "Je n'ai visité jamais Lyon",
          "Je jamais n'ai visité Lyon"
        ],
        "target_answer": "Je n'ai jamais visité Lyon",
        "meaning": "I have never visited Lyon",
        "explanation": "ne...jamais wraps the auxiliary ai, right before visité.",
        "id": "fr5071_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "I did not understand the question",
        "cues": [
          "I not-have step → Je n'ai pas",
          "understood the question → compris la question"
        ],
        "idea_parts": [
          "negated auxiliary → Je n'ai pas",
          "participle + object → compris la question"
        ],
        "target_answer": "Je n'ai pas compris la question",
        "meaning": "I did not understand the question",
        "word_bank": [
          "Je",
          "n'ai",
          "pas",
          "compris",
          "la",
          "question",
          "comprendre",
          "le"
        ],
        "explanation": "n'ai pas hugs the auxiliary ai; compris follows after pas.",
        "diagnosis": {
          "slip": "put pas after compris",
          "cue": "Put pas between n'ai and compris: Je n'ai pas compris."
        },
        "id": "fr5071_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Elle n'est pas venue hier soir",
        "replays": 2,
        "target_answer": "Elle n'est pas venue hier soir",
        "meaning": "She didn't come last night",
        "cues": [
          "Elle n'est pas",
          "venue hier soir"
        ],
        "explanation": "In the être house too, n'...pas wraps the auxiliary est: Elle n'est pas venue.",
        "affirmation": "You wrapped n'est pas around the auxiliary before venue!",
        "id": "fr5071_e5"
      }
    ],
    "summary": {
      "outcome": "Position ne…pas, ne…jamais, ne…rien, and déjà around the auxiliary in the passé composé.",
      "use_example": {
        "german": "Je n'ai jamais vu ce film, mais j'ai déjà lu le livre.",
        "english": "I've never seen this movie, but I've already read the book."
      },
      "takeaway": "In the past tense, pas, jamais, rien, and déjà always sit between the auxiliary and the participle.",
      "curiosity_teaser": "Up next on Le Pont ([5081] De matin à soir): see how Je n'ai pas mangé leads directly into De matin à soir."
    }
  },
  {
    "id": 5081,
    "slug": "lesson-5081",
    "title": "De matin à soir",
    "subtitle": "Chaining reflexives (se lever, se laver, s'habiller, se coucher) across a full day.",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "lever",
      "laver",
      "habiller",
      "coucher",
      "depuis",
      "heure",
      "ce_soir",
      "me",
      "on"
    ],
    "table_word_ids": [
      "lever",
      "laver",
      "habiller",
      "coucher",
      "depuis"
    ],
    "hook": {
      "title": "From Morning Alarm to Midnight: Full Reflexive Chains",
      "content": "Link a full French day from morning to night: Le matin, je me lève à sept heures, je me lave et je m'habille. Le soir, je me couche. In the negative, ne steps in BEFORE the reflexive pronoun and pas stands after the verb: Je ne me lève pas tôt!",
      "footnotes": [
        {
          "marker": "1",
          "title": "How to negate a reflexive verb: ne hugs BOTH the pronoun and the verb",
          "content": "Because the reflexive pronoun and verb act as one unit, ne...pas wraps the pair together: Je ne me lève pas tôt!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Positive: Je me lève; Negative: Je ne me lève pas; Past: Je me suis levé(e)",
      "content": "Chain daily actions across morning, afternoon, and evening.",
      "linguist_note": "Reflexive clitics form an inseparable phonological unit with the finite verb, so ne precedes the clitic.",
      "trap_note": "Never separate the reflexive pronoun from its verb with ne (*Je me ne lève pas) — write Je ne me lève pas!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each daily-routine clause with its English meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "Je me lève à sept heures",
            "german": "I get up at seven o'clock"
          },
          {
            "id": "p2",
            "english": "Je ne me lève pas tôt le dimanche",
            "german": "I don't get up early on Sundays"
          },
          {
            "id": "p3",
            "english": "Je m'habille avant le café",
            "german": "I get dressed before coffee"
          },
          {
            "id": "p4",
            "english": "On se retrouve ce soir",
            "german": "We meet up tonight"
          },
          {
            "id": "p5",
            "english": "Je me couche à minuit",
            "german": "I go to bed at midnight"
          }
        ],
        "target_answer": "I get up at seven o'clock, I don't get up early on Sundays, I get dressed before coffee, We meet up tonight, I go to bed at midnight",
        "meaning": "Je me lève à sept heures, Je ne me lève pas tôt le dimanche, Je m'habille avant le café, On se retrouve ce soir, Je me couche à minuit",
        "explanation": "ne...pas wraps the entire reflexive pronoun + verb unit.",
        "id": "fr5081_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you negate 'Je me couche tard' ('I go to bed late')?",
        "options": [
          "Je ne me couche pas tard",
          "Je me ne couche pas tard",
          "Je ne couche pas me tard"
        ],
        "target_answer": "Je ne me couche pas tard",
        "meaning": "I don't go to bed late",
        "explanation": "ne goes before me couche, and pas goes after it: Je ne me couche pas.",
        "id": "fr5081_e2"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the word-for-word structure of 'Je ne me lève pas tôt'?",
        "german": "Je ne me lève pas tôt",
        "natural": "I don't get up early",
        "options": [
          "I don't get up early",
          "I not myself raise step early",
          "I myself not get up early"
        ],
        "target_answer": "I not myself raise step early",
        "meaning": "Literal structure: I not myself raise step early",
        "explanation": "ne precedes the pronoun-verb unit me lève.",
        "id": "fr5081_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "on Sundays I do not get up early (use Le dimanche, je ne me lève pas tôt)",
        "cues": [
          "On Sundays → Le dimanche",
          "I do not get up early → je ne me lève pas tôt"
        ],
        "idea_parts": [
          "habitual day → Le dimanche",
          "negated reflexive → je ne me lève pas tôt"
        ],
        "target_answer": "Le dimanche, je ne me lève pas tôt",
        "meaning": "On Sundays, I don't get up early",
        "word_bank": [
          "Le",
          "dimanche",
          "je",
          "ne",
          "me",
          "lève",
          "pas",
          "tôt",
          "la",
          "le"
        ],
        "explanation": "Le dimanche ('on Sundays') + je ne me lève pas tôt.",
        "diagnosis": {
          "slip": "put ne between me and lève",
          "cue": "Place ne before me: je ne me lève pas."
        },
        "id": "fr5081_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Je me lave, je m'habille et je prends un café",
        "replays": 2,
        "target_answer": "Je me lave, je m'habille et je prends un café",
        "meaning": "I wash up, get dressed, and have a coffee",
        "cues": [
          "Je me lave",
          "je m'habille",
          "et je prends un café"
        ],
        "explanation": "Three morning actions in sequence.",
        "affirmation": "You chained the morning routine cleanly!",
        "id": "fr5081_e5"
      }
    ],
    "summary": {
      "outcome": "Chain positive and negative reflexive verbs across a full daily schedule.",
      "use_example": {
        "german": "La semaine, je me lève tôt, mais le dimanche je me repose.",
        "english": "During the week I get up early, but on Sundays I rest."
      },
      "takeaway": "ne...pas hugs the reflexive pronoun and verb together: Je ne me lève pas.",
      "curiosity_teaser": "Up next on Le Pont ([5091] Dont & Où): see how De matin à soir leads directly into Dont & Où."
    }
  },
  {
    "id": 5091,
    "slug": "lesson-5091",
    "title": "Dont & Où",
    "subtitle": "dont ('of which / whose') for de-verbs and où as relative 'where/when'.",
    "phase": 5,
    "shift_categories": [],
    "word_ids": [
      "dont",
      "où",
      "qui",
      "que",
      "besoin",
      "parler",
      "ville",
      "moment",
      "livre"
    ],
    "table_word_ids": [
      "dont",
      "où",
      "qui",
      "que",
      "besoin"
    ],
    "hook": {
      "title": "Completing the Relative Quartet: qui, que, dont, où",
      "content": "Alongside qui (subject) and que (direct object), dont ('of which / whose / about which') steps in whenever the verb or phrase uses de (parler de → le film dont je parle; avoir besoin de → la chose dont j'ai besoin), and où ('where / when') steps in for BOTH places (la ville où j'habite) AND time nouns (le jour où il est arrivé)!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why French says 'le jour où' ('the day where') instead of '*le jour quand'",
          "content": "After a time noun like le jour ('the day') or le moment ('the moment'), French treats time as a space and uses où ('where'): le jour où je t'ai vu!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "de-Verb → dont; Place or Time Noun → où",
      "content": "Choose dont for de-constructions and où for places and time moments.",
      "linguist_note": "Relative adverb où (< Latin ubi) relativizes both spatial and temporal adjuncts, while dont (< dē unde) relativizes de-complements.",
      "trap_note": "Never say *le jour quand for 'the day when' — French always says le jour où!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each relative pronoun from the 4-word quartet with its trigger:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "qui (L'ami qui arrive)",
            "german": "Subject of the following verb"
          },
          {
            "id": "p2",
            "english": "que / qu' (Le livre que je lis)",
            "german": "Direct object of the following clause"
          },
          {
            "id": "p3",
            "english": "dont (Le livre dont j'ai besoin)",
            "german": "Replaces a de-phrase (parler de, avoir besoin de)"
          },
          {
            "id": "p4",
            "english": "où (La ville où j'habite / Le jour où...)",
            "german": "Place ('where') OR Time ('when' after le jour/moment)"
          }
        ],
        "target_answer": "Subject of the following verb, Direct object of the following clause, Replaces a de-phrase (parler de, avoir besoin de), Place ('where') OR Time ('when' after le jour/moment)",
        "meaning": "qui (L'ami qui arrive), que / qu' (Le livre que je lis), dont (Le livre dont j'ai besoin), où (La ville où j'habite / Le jour où...)",
        "explanation": "qui, que, dont, où form the complete 4-piece relative toolkit of French.",
        "id": "fr5091_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'That is the thing that I need' (remembering that 'to need' is 'avoir besoin DE')?",
        "options": [
          "C'est la chose dont j'ai besoin",
          "C'est la chose que j'ai besoin",
          "C'est la chose dont j'en ai besoin"
        ],
        "target_answer": "C'est la chose dont j'ai besoin",
        "meaning": "That is the thing (of which) I have need",
        "explanation": "Because avoir besoin DE takes de, the relative pronoun is dont.",
        "id": "fr5091_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'the day when we arrived'?",
        "options": [
          "le jour où nous sommes arrivés",
          "le jour quand nous sommes arrivés",
          "le jour que nous sommes arrivés"
        ],
        "target_answer": "le jour où nous sommes arrivés",
        "meaning": "the day when (lit. where) we arrived",
        "explanation": "After time nouns like le jour or le moment, French uses où for 'when'!",
        "id": "fr5091_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "this is the city where I lived (use C'est la ville où j'habitais)",
        "cues": [
          "This is the city → C'est la ville",
          "where I lived → où j'habitais"
        ],
        "idea_parts": [
          "pointer + head noun → C'est la ville",
          "locative relative → où j'habitais"
        ],
        "target_answer": "C'est la ville où j'habitais",
        "meaning": "This is the city where I used to live",
        "word_bank": [
          "C'est",
          "la",
          "ville",
          "où",
          "j'habitais",
          "que",
          "ou"
        ],
        "explanation": "où (with grave accent) links la ville to j'habitais.",
        "diagnosis": {
          "slip": "forgot accent on où",
          "cue": "Use accented où ('where') after la ville."
        },
        "id": "fr5091_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Voici le restaurant dont je t'ai parlé",
        "replays": 2,
        "target_answer": "Voici le restaurant dont je t'ai parlé",
        "meaning": "Here is the restaurant I told you about",
        "cues": [
          "Voici le restaurant",
          "dont je t'ai parlé"
        ],
        "explanation": "parler de triggers dont.",
        "affirmation": "You used dont with je t'ai parlé cleanly!",
        "id": "fr5091_e5"
      }
    ],
    "summary": {
      "outcome": "Deploy the complete relative pronoun system (qui, que, dont, où) across subjects, objects, de-verbs, places, and time nouns.",
      "use_example": {
        "german": "Le jour où je suis arrivé dans la ville dont tu parles.",
        "english": "The day when I arrived in the city you're talking about."
      },
      "takeaway": "de-verb → dont; place or 'the day when' → où.",
      "curiosity_teaser": "Up next on Le Pont ([5101] Tout le conditionnel): see how Dont & Où leads directly into Tout le conditionnel."
    }
  },
  {
    "id": 5101,
    "slug": "lesson-5101",
    "title": "Tout le conditionnel",
    "subtitle": "Building any conditional from the future stem + imparfait ending (-ais, -ait).",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "voudrais",
      "pourrais",
      "ferais",
      "aller",
      "avoir",
      "être",
      "parler",
      "visiter",
      "aimé"
    ],
    "table_word_ids": [
      "voudrais",
      "pourrais",
      "ferais",
      "aller",
      "avoir"
    ],
    "hook": {
      "title": "The Full Would-World: Building Any Conditional in Two Seconds",
      "content": "Take the infinitive (parler, visiter) or a core r-stem (ser-, aur-, ir-, fer-, voudr-, pourr-) and attach the imparfait endings (-ais, -ais, -ait)! And to build a hypothetical 'If I had..., I would...' sentence: after si ('if'), use the IMPARFAIT (Si j'avais le temps), and in the result clause use the CONDITIONAL (j'irais à Paris)!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Notice how English does the EXACT same thing in 'If I HAD time, I WOULD go'!",
          "content": "Si j'avais (imparfait) le temps, j'irais (conditional) à Paris matches English 'If I had time, I would go' 1-for-1!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Si + Imparfait (-ais/-ait) → Conditional (-rais/-rait)",
      "content": "Use the imparfait after si and the conditional in the main clause.",
      "linguist_note": "Counterfactual conditional sentences in French pair an imperfect indicative protasis with a conditional apodosis.",
      "trap_note": "Never put -rais right after si ('Les si n'aiment pas les -rais') — use the imparfait after si!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each conditional form or si-clause with its meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "j'aimerais (aimer + ais)",
            "german": "I would love / I would like"
          },
          {
            "id": "p2",
            "english": "j'irais (ir- + ais)",
            "german": "I would go"
          },
          {
            "id": "p3",
            "english": "ce serait (ser- + ait)",
            "german": "it would be"
          },
          {
            "id": "p4",
            "english": "Si j'avais le temps... (si + imparfait)",
            "german": "If I had the time..."
          },
          {
            "id": "p5",
            "english": "...je visiterais Paris (conditional)",
            "german": "...I would visit Paris"
          }
        ],
        "target_answer": "I would love / I would like, I would go, it would be, If I had the time..., ...I would visit Paris",
        "meaning": "j'aimerais (aimer + ais), j'irais (ir- + ais), ce serait (ser- + ait), Si j'avais le temps... (si + imparfait), ...je visiterais Paris (conditional)",
        "explanation": "Imparfait after si; Conditional (-r- + -ais/-ait) in the result clause!",
        "id": "fr5101_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Complete the hypothetical sentence: 'If I had time, I would go to the cinema':",
        "options": [
          "Si j'avais le temps, j'irais au cinéma",
          "Si j'aurais le temps, j'irais au cinéma",
          "Si j'ai le temps, j'irais au cinéma"
        ],
        "target_answer": "Si j'avais le temps, j'irais au cinéma",
        "meaning": "Si + imparfait (j'avais) → conditional (j'irais)",
        "explanation": "After si, use imparfait j'avais; in the result clause, use conditional j'irais!",
        "id": "fr5101_e2"
      },
      {
        "type": "derive",
        "prompt": "Build the conditional 'it would be' from the future stem 'ser-' of être + '-ait':",
        "english_hint": "ce + ser + ait",
        "target_answer": "ce serait",
        "meaning": "it would be",
        "explanation": "ce serait (/sə səʁɛ/) = 'it would be'.",
        "id": "fr5101_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "it would be very good to visit Lyon (use Ce serait très bon de visiter Lyon)",
        "cues": [
          "It would be very good → Ce serait très bon",
          "to visit Lyon → de visiter Lyon"
        ],
        "idea_parts": [
          "conditional pointer → Ce serait très bon",
          "infinitive complement → de visiter Lyon"
        ],
        "target_answer": "Ce serait très bon de visiter Lyon",
        "meaning": "It would be very good to visit Lyon",
        "word_bank": [
          "Ce",
          "serait",
          "très",
          "bon",
          "de",
          "visiter",
          "Lyon",
          "sera",
          "la"
        ],
        "explanation": "Ce serait ('it would be') vs. Ce sera ('it will be').",
        "diagnosis": {
          "slip": "used future sera",
          "cue": "Use conditional Ce serait ('it would be')."
        },
        "id": "fr5101_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "J'aimerais beaucoup visiter cette ville avec toi",
        "replays": 2,
        "target_answer": "J'aimerais beaucoup visiter cette ville avec toi",
        "meaning": "I would love to visit this city with you",
        "cues": [
          "J'aimerais beaucoup",
          "visiter cette ville avec toi"
        ],
        "explanation": "J'aimerais beaucoup + bare infinitive is a warm alternative to Je voudrais.",
        "affirmation": "You wrote J'aimerais beaucoup visiter cleanly.",
        "id": "fr5101_e5"
      }
    ],
    "summary": {
      "outcome": "Form the conditional across regular and irregular verbs and build 'Si + imparfait → conditional' hypothetical sentences.",
      "use_example": {
        "german": "Si j'habitais à Paris, j'irais au musée tous les dimanches.",
        "english": "If I lived in Paris, I would go to the museum every Sunday."
      },
      "takeaway": "After si ('if') use the imparfait (Si j'avais); in the result use the conditional (j'irais).",
      "curiosity_teaser": "Up next on Le Pont ([5111] Dormant Consonants Wake Up): see how Tout le conditionnel leads directly into Dormant Consonants Wake Up."
    }
  },
  {
    "id": 5111,
    "slug": "lesson-5111",
    "title": "Dormant Consonants Wake Up",
    "subtitle": "S→/z/ (vous avez, les amis), T→/t/ (c'est un), N→/n/ (un ami) — reading connected French speech.",
    "phase": 1,
    "shift_categories": [],
    "word_ids": [
      "vous",
      "avez",
      "êtes",
      "nous",
      "avons",
      "cest",
      "un",
      "ami",
      "ans",
      "on"
    ],
    "table_word_ids": [
      "vous",
      "avez",
      "êtes",
      "nous",
      "avons"
    ],
    "hook": {
      "title": "How Dormant Consonants Wake Up Across Word Boundaries",
      "content": "When a determiner, pronoun, or short verb is followed by a vowel inside the same phrase, its sleeping final consonant wakes up in liaison: S/X → /z/ (les‿amis, vous‿êtes), T/D → /t/ (c'est‿un ami, quand‿il arrive), and N → /n/ (un‿ami, on‿arrive)!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why 'et' ('and') NEVER makes a liaison",
          "content": "The word et ('and') NEVER links its final -t onto the next word — keeping et un (/e œ̃/) 100% distinct from est un (/ɛ.t‿œ̃/)!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Hear the Resyllabification Across the Space",
      "content": "When a consonant links in liaison, it jumps across the space to start the next word: vous‿avez is pronounced 'vou-zavez' (/vu.za.ve/)!",
      "linguist_note": "Enchaînement and liaison resyllabify latent word-final consonants into the onset of a following vowel-initial syllable.",
      "trap_note": "Never pronounce the -t of et ('and') in liaison — et keeps its -t 100% silent everywhere!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each linked phrase with its spoken liaison sound:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "les‿amis / vous‿êtes (S before vowel)",
            "german": "/z/ sound: 'lé-zami / vou-zêt'"
          },
          {
            "id": "p2",
            "english": "c'est‿ici / quand‿il (T or D before vowel)",
            "german": "/t/ sound: 'cè-tici / kan-til'"
          },
          {
            "id": "p3",
            "english": "un‿ami / on‿arrive (N before vowel)",
            "german": "/n/ sound: 'un-nami / on-nariv'"
          },
          {
            "id": "p4",
            "english": "et il arrive (the word 'et')",
            "german": "NO liaison! (-t of et is always silent)"
          }
        ],
        "target_answer": "/z/ sound: 'lé-zami / vou-zêt', /t/ sound: 'cè-tici / kan-til', /n/ sound: 'un-nami / on-nariv', NO liaison! (-t of et is always silent)",
        "meaning": "les‿amis / vous‿êtes (S before vowel), c'est‿ici / quand‿il (T or D before vowel), un‿ami / on‿arrive (N before vowel), et il arrive (the word 'et')",
        "explanation": "S/X → /z/, T/D → /t/, N → /n/, and 'et' never links.",
        "id": "fr5111_e1"
      },
      {
        "type": "shift_select",
        "prompt": "In 'quand il arrive' ('when he arrives'), what sound does the final -d of 'quand' make in liaison before 'il'?",
        "options": [
          "A crisp /t/ sound (/kɑ̃.t‿il/)",
          "A /d/ sound (/kɑ̃.d‿il/)",
          "A /z/ sound (/kɑ̃.z‿il/)"
        ],
        "target_answer": "A crisp /t/ sound (/kɑ̃.t‿il/)",
        "meaning": "Final D devoices to /t/ when waking up in liaison!",
        "explanation": "In liaison, both T and D wake up as /t/: quand‿il (/kɑ̃.t‿il/).",
        "id": "fr5111_e2"
      },
      {
        "type": "shift_select",
        "prompt": "Why does French forbid liaison after the word 'et' ('and')?",
        "options": [
          "Because the -t of 'et' is permanently silent, keeping 'et' distinct from 'est'",
          "Because 'et' ends in a vowel",
          "Because 'et' only appears at the end of a sentence"
        ],
        "target_answer": "Because the -t of 'et' is permanently silent, keeping 'et' distinct from 'est'",
        "meaning": "et (/e/) never links its t, whereas est (/ɛ/) links as /ɛ.t‿/ before a vowel.",
        "explanation": "et (/e/) never links its t, whereas est (/ɛ/) links as /ɛ.t‿/ before a vowel.",
        "id": "fr5111_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "we are arriving with a friend (using On arrive avec un ami)",
        "cues": [
          "We arrive → On arrive",
          "with a friend → avec un ami"
        ],
        "idea_parts": [
          "linked subject + verb → On arrive",
          "preposition + linked article + noun → avec un ami"
        ],
        "target_answer": "On arrive avec un ami",
        "meaning": "We are arriving with a friend",
        "word_bank": [
          "On",
          "arrive",
          "avec",
          "un",
          "ami",
          "une",
          "la"
        ],
        "explanation": "Both On‿arrive and un‿ami link with an /n/ sound.",
        "diagnosis": {
          "slip": "used une",
          "cue": "Use masculine un ami."
        },
        "id": "fr5111_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "C'est un ami et il est très sympa",
        "replays": 2,
        "target_answer": "C'est un ami et il est très sympa",
        "meaning": "He is a friend and he is very nice",
        "cues": [
          "C'est un ami",
          "et il est très sympa"
        ],
        "explanation": "Hear the /t/ liaison in C'est‿un and the clean break after et.",
        "affirmation": "You heard the difference between linked C'est un and unlinked et il!",
        "id": "fr5111_e5"
      }
    ],
    "summary": {
      "outcome": "Hear and produce /z/, /t/, and /n/ liaisons across pronouns, articles, and verbs while keeping 'et' unlinked.",
      "use_example": {
        "german": "On arrive à huit heures avec nos amis.",
        "english": "We arrive at eight o'clock with our friends."
      },
      "takeaway": "S/X → /z/, T/D → /t/, N → /n/, and 'et' never links.",
      "curiosity_teaser": "Up next on Le Pont ([5112] H muet vs H aspiré): see how Dormant Consonants Wake Up leads directly into H muet vs H aspiré."
    }
  },
  {
    "id": 5112,
    "slug": "lesson-5112",
    "title": "H muet vs H aspiré",
    "subtitle": "Why l'hôtel and l'homme elide and link, while le héros refuses elision.",
    "phase": 1,
    "shift_categories": [],
    "word_ids": [
      "hôtel",
      "hôpital",
      "homme",
      "histoire",
      "heure",
      "hiver",
      "habiter",
      "huit"
    ],
    "table_word_ids": [
      "hôtel",
      "hôpital",
      "homme",
      "histoire",
      "heure"
    ],
    "hook": {
      "title": "Why l'hôtel Elides While le héros Blocks Elision: H muet vs. H aspiré",
      "content": "Over 90% of French H-words come from Latin or Greek (l'hôtel, l'hôpital, l'homme, l'histoire, l'heure, l'hiver, j'habite) — their H is H muet ('mute H') and allows elision and liaison. A small group of Germanic/loan H-words (like le héros 'the hero' and le huit 'the eight') have H aspiré, which acts like an invisible wall blocking elision and liaison!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why 'the hero' is le héros so he doesn't turn into 'zero'!",
          "content": "If les héros ('the heroes') made a /z/ liaison like les‿hommes, it would sound like /le.ze.ʁo/ — identical to les zéros ('the zeros')!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Latin H (hôtel, homme, heure, histoire, hiver, habiter) = Elide & Link!",
      "content": "Elide and link across all Latin H muet words, while keeping le whole before le héros and le huit.",
      "linguist_note": "Germanic loanwords retained initial /h/ until the 16th century, blocking elision and liaison even after /h/ was lost phonetically.",
      "trap_note": "Never write *le hôtel or *le homme — Latin H muet always elides to l'hôtel and l'homme!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each H-word with its elision/liaison behavior:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "l'hôtel / les‿hôtels (Latin H muet)",
            "german": "Elides to l' and links with /z/"
          },
          {
            "id": "p2",
            "english": "l'homme / les‿hommes (Latin H muet)",
            "german": "Elides to l' and links with /z/"
          },
          {
            "id": "p3",
            "english": "l'heure / l'histoire (Latin H muet)",
            "german": "Elides to l'"
          },
          {
            "id": "p4",
            "english": "j'habite (Latin H muet)",
            "german": "je elides to j'"
          },
          {
            "id": "p5",
            "english": "le héros / le huit (H aspiré)",
            "german": "Blocks elision and liaison (no /z/!)"
          }
        ],
        "target_answer": "Elides to l' and links with /z/, Elides to l' and links with /z/, Elides to l', je elides to j', Blocks elision and liaison (no /z/!)",
        "meaning": "l'hôtel / les‿hôtels (Latin H muet), l'homme / les‿hommes (Latin H muet), l'heure / l'histoire (Latin H muet), j'habite (Latin H muet), le héros / le huit (H aspiré)",
        "explanation": "Both H's are silent in the mouth; H muet allows elision/liaison while H aspiré blocks it.",
        "id": "fr5112_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Why does French say 'les héros' WITHOUT a /z/ liaison (/le e.ʁo/), unlike 'les‿hommes' (/le.z‿ɔm/)?",
        "options": [
          "Because a /z/ liaison on 'les héros' would sound identical to 'les zéros' ('the zeros')!",
          "Because the H of héros is pronounced like an English H",
          "Because héros is feminine"
        ],
        "target_answer": "Because a /z/ liaison on 'les héros' would sound identical to 'les zéros' ('the zeros')!",
        "meaning": "H aspiré blocks liaison so les héros never sounds like les zéros!",
        "explanation": "H aspiré blocks liaison so les héros never sounds like les zéros!",
        "id": "fr5112_e2"
      },
      {
        "type": "shift_select",
        "prompt": "Which sentence correctly applies H muet elision across all three words?",
        "options": [
          "L'homme habite à l'hôtel depuis une heure",
          "Le homme habite à le hôtel depuis une heure",
          "L'homme habite à le hôtel depuis l'heure"
        ],
        "target_answer": "L'homme habite à l'hôtel depuis une heure",
        "meaning": "Both homme and hôtel have Latin H muet and must elide to l'!",
        "explanation": "Latin H muet always triggers elision: L'homme, à l'hôtel.",
        "id": "fr5112_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "in winter the man lives at the hotel",
        "cues": [
          "In winter → En hiver",
          "the man lives at the hotel → l'homme habite à l'hôtel"
        ],
        "idea_parts": [
          "season → En hiver",
          "subject + verb + place → l'homme habite à l'hôtel"
        ],
        "target_answer": "En hiver, l'homme habite à l'hôtel",
        "meaning": "In winter, the man lives at the hotel",
        "word_bank": [
          "En",
          "hiver",
          "l'homme",
          "habite",
          "à",
          "l'hôtel",
          "Le",
          "la"
        ],
        "explanation": "hiver, l'homme, habite, and l'hôtel are all Latin H muet words.",
        "diagnosis": {
          "slip": "wrote Le homme",
          "cue": "Elide le before homme and hôtel: l'homme, à l'hôtel."
        },
        "id": "fr5112_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "L'histoire de cet hôtel est très intéressante",
        "replays": 2,
        "target_answer": "L'histoire de cet hôtel est très intéressante",
        "meaning": "The history of this hotel is very interesting",
        "cues": [
          "L'histoire",
          "de cet hôtel",
          "est très intéressante"
        ],
        "explanation": "histoire takes l' and hôtel takes prevocalic cet!",
        "affirmation": "You handled both l'histoire and cet hôtel cleanly.",
        "id": "fr5112_e5"
      }
    ],
    "summary": {
      "outcome": "Distinguish Latin H muet (l'hôtel, l'homme, l'heure, l'histoire, l'hiver, j'habite) from elision-blocking H aspiré (le héros, le huit).",
      "use_example": {
        "german": "C'est le héros de l'histoire.",
        "english": "He is the hero of the story."
      },
      "takeaway": "Both H's are silent; Latin H muet elides (l'histoire), while H aspiré stands apart (le héros).",
      "curiosity_teaser": "Up next on Le Pont ([5121] Le Pain, Le Fromage, Le Vin & L'Eau): see how H muet vs H aspiré leads directly into Le Pain, Le Fromage, Le Vin & L'Eau."
    }
  },
  {
    "id": 5121,
    "slug": "lesson-5121",
    "title": "Le Pain, Le Fromage, Le Vin & L'Eau",
    "subtitle": "The French table staples with definite vs partitive articles (le pain vs du pain).",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "pain",
      "fromage",
      "vin",
      "eau",
      "soupe",
      "café",
      "du",
      "de",
      "le",
      "la"
    ],
    "table_word_ids": [
      "pain",
      "fromage",
      "vin",
      "eau",
      "soupe"
    ],
    "hook": {
      "title": "The French Table: Definite Love (le pain) vs. Partitive Plate (du pain)",
      "content": "When you say you love or prefer a food in general (aimer, adorer, préférer), use the DEFINITE article (J'aime le fromage et le vin). When you eat, drink, buy, or want some on your plate (vouloir, prendre, manger), use the PARTITIVE article (Je prends du fromage, du pain et de l'eau)!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why 'fromage' comes from the word for 'form / mold'",
          "content": "Late Latin caseus formāticus ('cheese made in a mold') gave French le fromage!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "General Love (aimer/préférer + le/la/l') vs. On Your Plate (prendre/vouloir + du/de la/de l')",
      "content": "Contrast J'aime le vin rouge ('I like red wine' in general) with Je voudrais du vin rouge ('I would like some red wine' in my glass).",
      "linguist_note": "Verbs of affect take generic definite NPs, whereas verbs of consumption take partitive NPs.",
      "trap_note": "Never use du/de la after aimer or préférer (*J'aime du fromage) — always say J'aime le fromage!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Contrast general liking (le/la/l') with having some on your plate (du/de la/de l'):",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I love cheese (in general)",
            "german": "J'aime le fromage"
          },
          {
            "id": "p2",
            "english": "I am having some cheese (on my plate)",
            "german": "Je prends du fromage"
          },
          {
            "id": "p3",
            "english": "I prefer red wine (in general)",
            "german": "Je préfère le vin rouge"
          },
          {
            "id": "p4",
            "english": "I would like some red wine (in my glass)",
            "german": "Je voudrais du vin rouge"
          },
          {
            "id": "p5",
            "english": "I want some water (in my glass)",
            "german": "Je veux de l'eau"
          }
        ],
        "target_answer": "J'aime le fromage, Je prends du fromage, Je préfère le vin rouge, Je voudrais du vin rouge, Je veux de l'eau",
        "meaning": "I love cheese (in general), I am having some cheese (on my plate), I prefer red wine (in general), I would like some red wine (in my glass), I want some water (in my glass)",
        "explanation": "aimer/préférer take definite le/la/l'; prendre/vouloir/manger take partitive du/de la/de l'.",
        "id": "fr5121_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Fill the two blanks: 'I love bread, so I am buying some bread' ('J'aime ___ pain, donc j'achète ___ pain'):",
        "options": [
          "le pain / du pain",
          "du pain / du pain",
          "le pain / le pain"
        ],
        "target_answer": "le pain / du pain",
        "meaning": "General love takes le pain; buying a portion takes partitive du pain!",
        "explanation": "J'aime le pain (general category) vs. j'achète du pain (unspecified quantity).",
        "id": "fr5121_e2"
      },
      {
        "type": "reverse_cognate",
        "prompt": "French pain ('bread', from Latin pānis) hides inside which English word for the small room where bread and food provisions are stored?",
        "target_answer": "pantry",
        "meaning": "pantry / companion ↔ le pain ('bread')",
        "explanation": "A pantry was originally the bread-room (paneterie)!",
        "id": "fr5121_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "I prefer wine, but today I am having some water (use je prends de l'eau)",
        "cues": [
          "I prefer wine → Je préfère le vin",
          "but today I take some water → mais aujourd'hui je prends de l'eau"
        ],
        "idea_parts": [
          "general preference → Je préfère le vin",
          "specific consumption → mais aujourd'hui je prends de l'eau"
        ],
        "target_answer": "Je préfère le vin, mais aujourd'hui je prends de l'eau",
        "meaning": "I prefer wine, but today I'm having some water",
        "word_bank": [
          "Je",
          "préfère",
          "le",
          "vin",
          "mais",
          "aujourd'hui",
          "je",
          "prends",
          "de",
          "l'eau",
          "du",
          "la"
        ],
        "explanation": "préférer takes definite le vin; prendre takes partitive de l'eau.",
        "diagnosis": {
          "slip": "used du vin after préfère",
          "cue": "After préférer, use the definite article: Je préfère le vin."
        },
        "id": "fr5121_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Nous prenons du pain, du fromage et de la soupe",
        "replays": 2,
        "target_answer": "Nous prenons du pain, du fromage et de la soupe",
        "meaning": "We are having bread, cheese, and soup",
        "cues": [
          "Nous prenons du pain",
          "du fromage et de la soupe"
        ],
        "explanation": "Masculine du pain, du fromage + feminine de la soupe.",
        "affirmation": "You matched all three partitive articles accurately!",
        "id": "fr5121_e5"
      }
    ],
    "summary": {
      "outcome": "Distinguish definite articles after verbs of liking (J'aime le pain) from partitive articles after verbs of eating/ordering (Je prends du pain).",
      "use_example": {
        "german": "J'adore le fromage français — j'en prends toujours avec du pain.",
        "english": "I love French cheese — I always have some with bread."
      },
      "takeaway": "Liking in general = le / la / l'; Eating or ordering some = du / de la / de l'.",
      "curiosity_teaser": "Up next on Le Pont ([5122] Commander au Bistro): see how Le Pain, Le Fromage, Le Vin & L'Eau leads directly into Commander au Bistro."
    }
  },
  {
    "id": 5122,
    "slug": "lesson-5122",
    "title": "Commander au Bistro",
    "subtitle": "Taking a table, ordering with je prends / je voudrais, and asking for l'addition.",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "prendre",
      "voudrais",
      "addition",
      "table",
      "restaurant",
      "café",
      "vin",
      "eau",
      "sil_vous_plait"
    ],
    "table_word_ids": [
      "prendre",
      "voudrais",
      "addition",
      "table",
      "restaurant"
    ],
    "hook": {
      "title": "Ordering at a Paris Bistro: Je prends…, Je voudrais…, and L'addition",
      "content": "While English says 'I'll have a coffee / We'll have the soup', French NEVER uses avoir to order food! Instead, French uses prendre ('to take': Je prends un café, Vous prenez le menu ?) alongside polite Je voudrais ('I would like')!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why 'J'ai un café' means 'I already have a coffee sitting in front of me'",
          "content": "To say 'I'll have a coffee', always use Je prends un café or Je voudrais un café!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Order with Je prends / Je voudrais; Close with L'addition, s'il vous plaît",
      "content": "Walk through a complete bistro meal from ordering to paying the check.",
      "linguist_note": "French culinary ordering selects lexical verb prendre ('take') rather than possessive avoir.",
      "trap_note": "Never translate English 'I'll have the soup' with avoir — use Je prends de la soupe / Je voudrais!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each bistro ordering phrase with its natural English meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "Je prends un café (never *J'ai for ordering!)",
            "german": "I'll have a coffee"
          },
          {
            "id": "p2",
            "english": "Qu'est-ce que vous prenez ?",
            "german": "What will you have? (waiter asking)"
          },
          {
            "id": "p3",
            "english": "Pour moi, de la soupe, s'il vous plaît",
            "german": "For me, some soup, please"
          },
          {
            "id": "p4",
            "english": "Une carafe d'eau, s'il vous plaît",
            "german": "A pitcher of tap water, please"
          },
          {
            "id": "p5",
            "english": "L'addition, s'il vous plaît",
            "german": "The check / bill, please"
          }
        ],
        "target_answer": "I'll have a coffee, What will you have? (waiter asking), For me, some soup, please, A pitcher of tap water, please, The check / bill, please",
        "meaning": "Je prends un café (never *J'ai for ordering!), Qu'est-ce que vous prenez ?, Pour moi, de la soupe, s'il vous plaît, Une carafe d'eau, s'il vous plaît, L'addition, s'il vous plaît",
        "explanation": "prendre is the workhorse verb for ordering food and drink.",
        "id": "fr5122_e1"
      },
      {
        "type": "shift_select",
        "prompt": "The waiter asks 'Qu'est-ce que vous prenez ?' How do you say 'I'll have a black coffee, please'?",
        "options": [
          "Je prends un café noir, s'il vous plaît",
          "J'ai un café noir, s'il vous plaît",
          "Je fais un café noir, s'il vous plaît"
        ],
        "target_answer": "Je prends un café noir, s'il vous plaît",
        "meaning": "I'll have (lit. I take) a black coffee, please",
        "explanation": "French uses Je prends ('I take') for 'I'll have' when ordering.",
        "id": "fr5122_e2"
      },
      {
        "type": "variant_english",
        "prompt": "Which English sentences match the waiter's question 'Vous avez choisi ?'?",
        "german": "Vous avez choisi ?",
        "meaning": "Have you chosen / Are you ready to order?",
        "renderings": [
          "Are you ready to order?",
          "Have you decided what you'd like?"
        ],
        "traps": [
          "Did you pay the bill already?",
          "Do you want to leave the restaurant?"
        ],
        "target_answer": "Are you ready to order?",
        "explanation": "choisi is the past participle of choisir ('to choose') — 'Have you chosen?' means 'Are you ready to order?'!",
        "id": "fr5122_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "I'll have some soup and some bread, please (using Je prends)",
        "cues": [
          "I take some soup → Je prends de la soupe",
          "and some bread, please → et du pain, s'il vous plaît"
        ],
        "idea_parts": [
          "verb + fem partitive → Je prends de la soupe",
          "masc partitive + polite tag → et du pain, s'il vous plaît"
        ],
        "target_answer": "Je prends de la soupe et du pain, s'il vous plaît",
        "meaning": "I'll have some soup and some bread, please",
        "word_bank": [
          "Je",
          "prends",
          "de",
          "la",
          "soupe",
          "et",
          "du",
          "pain",
          "s'il",
          "vous",
          "plaît",
          "ai",
          "le"
        ],
        "explanation": "Je prends + de la soupe (f.) + et du pain (m.).",
        "diagnosis": {
          "slip": "used ai instead of prends",
          "cue": "Use Je prends when ordering food and drink."
        },
        "id": "fr5122_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "C'était délicieux, nous voudrions l'addition",
        "replays": 2,
        "target_answer": "C'était délicieux, nous voudrions l'addition",
        "meaning": "It was delicious, we would like the bill",
        "cues": [
          "C'était délicieux",
          "nous voudrions l'addition"
        ],
        "explanation": "C'était praises the meal just finished, and nous voudrions l'addition asks for the check.",
        "affirmation": "You combined C'était and nous voudrions l'addition cleanly.",
        "id": "fr5122_e5"
      }
    ],
    "summary": {
      "outcome": "Order meals and drinks naturally using prendre (Je prends / Vous prenez) and Je voudrais, and ask for l'addition.",
      "use_example": {
        "german": "Qu'est-ce que tu prends ? — Je prends un café et un croissant.",
        "english": "What are you having? — I'll have a coffee and a croissant."
      },
      "takeaway": "To order food or drink, English 'I'll have' is always French Je prends ('I take').",
      "curiosity_teaser": "Up next on Le Pont ([5131] Le Train, Le Billet & La Gare): see how Commander au Bistro leads directly into Le Train, Le Billet & La Gare."
    }
  },
  {
    "id": 5131,
    "slug": "lesson-5131",
    "title": "Le Train, Le Billet & La Gare",
    "subtitle": "Navigating the SNCF: le train, le billet, la gare, réservations, and platforms.",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "train",
      "billet",
      "gare",
      "réservation",
      "prendre",
      "attendre",
      "heure",
      "quand"
    ],
    "table_word_ids": [
      "train",
      "billet",
      "gare",
      "réservation",
      "prendre"
    ],
    "hook": {
      "title": "At the Train Station: Le Train, Le Billet & La Gare",
      "content": "Just as you 'take' a coffee with prendre (Je prends un café), you ALSO 'take' the train, bus, or metro with prendre: Je prends le train à la gare ('I take the train at the station')! And your ticket is le billet (/bijɛ/).",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why French has both 'le billet' (train/plane ticket) and 'le ticket' (metro/bus slip)",
          "content": "For a reserved journey on a train or plane (or a €20 banknote!), French says un billet.",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "prendre le train + avoir son billet + attendre à la gare",
      "content": "Combine station vocabulary with your verb engines.",
      "linguist_note": "Transport expressions in French use transitive prendre ('take') + definite article (prendre le train).",
      "trap_note": "Remember: j'attends le train ('I am waiting for the train') needs NO preposition 'for'!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each station word or phrase with its meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "la gare",
            "german": "the train station"
          },
          {
            "id": "p2",
            "english": "le train",
            "german": "the train"
          },
          {
            "id": "p3",
            "english": "le billet (de train)",
            "german": "the (train) ticket"
          },
          {
            "id": "p4",
            "english": "prendre le train",
            "german": "to take the train"
          },
          {
            "id": "p5",
            "english": "attendre le train",
            "german": "to wait for the train"
          }
        ],
        "target_answer": "the train station, the train, the (train) ticket, to take the train, to wait for the train",
        "meaning": "la gare, le train, le billet (de train), prendre le train, attendre le train",
        "explanation": "prendre le train and attendre le train both take direct objects.",
        "id": "fr5131_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'I am taking the train at eight o'clock'?",
        "options": [
          "Je prends le train à huit heures",
          "Je prends du train à huit heures",
          "J'ai le train à huit heures"
        ],
        "target_answer": "Je prends le train à huit heures",
        "meaning": "I take the train at eight o'clock",
        "explanation": "Modes of transport with prendre use the definite article: Je prends le train.",
        "id": "fr5131_e2"
      },
      {
        "type": "derive",
        "prompt": "Write 'my train ticket' using 'mon billet' + 'de train':",
        "english_hint": "no article after de for type of ticket",
        "target_answer": "mon billet de train",
        "meaning": "my train ticket",
        "explanation": "un billet de train = 'a train ticket'.",
        "id": "fr5131_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "I have my ticket and I am waiting for the train at the station",
        "cues": [
          "I have my ticket → J'ai mon billet",
          "and I wait-for the train at the station → et j'attends le train à la gare"
        ],
        "idea_parts": [
          "possession → J'ai mon billet",
          "waiting + location → et j'attends le train à la gare"
        ],
        "target_answer": "J'ai mon billet et j'attends le train à la gare",
        "meaning": "I have my ticket and I'm waiting for the train at the station",
        "word_bank": [
          "J'ai",
          "mon",
          "billet",
          "et",
          "j'attends",
          "le",
          "train",
          "à",
          "la",
          "gare",
          "pour",
          "un"
        ],
        "explanation": "j'attends le train needs no 'pour'.",
        "diagnosis": {
          "slip": "added pour after j'attends",
          "cue": "attendre already means 'to wait for': j'attends le train."
        },
        "id": "fr5131_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "À quelle heure est-ce que tu prends le train",
        "replays": 2,
        "target_answer": "À quelle heure est-ce que tu prends le train",
        "meaning": "At what time are you taking the train?",
        "cues": [
          "À quelle heure",
          "est-ce que tu prends le train"
        ],
        "explanation": "À quelle heure = 'At what time'.",
        "affirmation": "You wrote À quelle heure and tu prends le train cleanly.",
        "id": "fr5131_e5"
      }
    ],
    "summary": {
      "outcome": "Navigate train stations using la gare, le train, le billet, prendre le train, and attendre le train.",
      "use_example": {
        "german": "Je vais à la gare parce que je prends le train de midi.",
        "english": "I'm going to the station because I'm taking the noon train."
      },
      "takeaway": "You 'take' both coffee and trains with prendre: Je prends un café, je prends le train.",
      "curiosity_teaser": "Up next on Le Pont ([5132] Départ, Arrivée & Aller-Retour): see how Le Train, Le Billet & La Gare leads directly into Départ, Arrivée & Aller-Retour."
    }
  },
  {
    "id": 5132,
    "slug": "lesson-5132",
    "title": "Départ, Arrivée & Aller-Retour",
    "subtitle": "Combining aller, partir, arriver, and prendre for real travel scenarios.",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "aller",
      "arriver",
      "parti",
      "revenir",
      "train",
      "gare",
      "billet",
      "demain"
    ],
    "table_word_ids": [
      "aller",
      "arriver",
      "parti",
      "revenir",
      "train"
    ],
    "hook": {
      "title": "Departures, Arrivals & Round-Trip Tickets: Aller simple vs. Aller-retour",
      "content": "At the ticket counter, aller ('going', used as a noun) + simple ('single') = 'a one-way ticket' (un aller simple), and aller + retour ('going-return') = 'a round-trip / return ticket' (un aller-retour)! And ticket destinations take pour ('for'): un aller-retour pour Lyon!",
      "footnotes": [
        {
          "marker": "1",
          "title": "How French turns the infinitive 'aller' into a masculine noun ('un aller')",
          "content": "French uses the infinitive aller as a masculine noun meaning 'the outbound journey': un aller simple, un aller-retour!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "un aller simple (One-Way) vs. un aller-retour (Round-Trip)",
      "content": "Combine ticket buying with departure and arrival times.",
      "linguist_note": "Nominalized infinitives (l'aller, le dîner, le déjeuner) are always masculine in French.",
      "trap_note": "When buying a ticket 'to Lyon', French uses pour ('for Lyon'): un billet pour Lyon!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each travel expression with its English meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "un aller simple",
            "german": "a one-way / single ticket"
          },
          {
            "id": "p2",
            "english": "un aller-retour",
            "german": "a round-trip / return ticket"
          },
          {
            "id": "p3",
            "english": "un billet pour Lyon (pour = 'to' on tickets!)",
            "german": "a ticket to Lyon"
          },
          {
            "id": "p4",
            "english": "le départ / l'arrivée",
            "german": "the departure / the arrival"
          },
          {
            "id": "p5",
            "english": "Je reviens demain (revenir)",
            "german": "I am coming back tomorrow"
          }
        ],
        "target_answer": "a one-way / single ticket, a round-trip / return ticket, a ticket to Lyon, the departure / the arrival, I am coming back tomorrow",
        "meaning": "un aller simple, un aller-retour, un billet pour Lyon (pour = 'to' on tickets!), le départ / l'arrivée, Je reviens demain (revenir)",
        "explanation": "Ticket destinations take pour: un aller-retour pour Paris.",
        "id": "fr5132_e1"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the literal word-for-word meaning of 'un aller-retour pour Paris'?",
        "german": "un aller-retour pour Paris",
        "natural": "a round-trip ticket to Paris",
        "options": [
          "a round-trip ticket to Paris",
          "a go-return for Paris",
          "an all-return to Paris"
        ],
        "target_answer": "a go-return for Paris",
        "meaning": "Literal structure: a go-return for Paris",
        "explanation": "aller ('go') + retour ('return') + pour ('for') Paris.",
        "id": "fr5132_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How do you ask the ticket agent for 'a round-trip ticket to Lyon, please'?",
        "options": [
          "Je voudrais un aller-retour pour Lyon, s'il vous plaît",
          "Je voudrais un aller simple à Lyon, s'il vous plaît",
          "Je veux aller retourner Lyon"
        ],
        "target_answer": "Je voudrais un aller-retour pour Lyon, s'il vous plaît",
        "meaning": "I would like a round-trip ticket to Lyon, please",
        "explanation": "un aller-retour + pour + city.",
        "id": "fr5132_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "the train leaves this morning and I am coming back tomorrow (use Le train part ce matin)",
        "cues": [
          "The train leaves this morning → Le train part ce matin",
          "and I come back tomorrow → et je reviens demain"
        ],
        "idea_parts": [
          "departure → Le train part ce matin",
          "return → et je reviens demain"
        ],
        "target_answer": "Le train part ce matin et je reviens demain",
        "meaning": "The train leaves this morning and I'm coming back tomorrow",
        "word_bank": [
          "Le",
          "train",
          "part",
          "ce",
          "matin",
          "et",
          "je",
          "reviens",
          "demain",
          "partir",
          "la"
        ],
        "explanation": "part is the 3rd-person singular of partir; je reviens is from revenir.",
        "diagnosis": {
          "slip": "used infinitive partir",
          "cue": "Conjugate Le train part and je reviens."
        },
        "id": "fr5132_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "J'ai pris un aller-retour pour Marseille",
        "replays": 2,
        "target_answer": "J'ai pris un aller-retour pour Marseille",
        "meaning": "I got a round-trip ticket to Marseille",
        "cues": [
          "J'ai pris",
          "un aller-retour pour Marseille"
        ],
        "explanation": "J'ai pris + un aller-retour pour...",
        "affirmation": "You wrote un aller-retour with its hyphen cleanly.",
        "id": "fr5132_e5"
      }
    ],
    "summary": {
      "outcome": "Buy one-way (aller simple) and round-trip (aller-retour) tickets with pour + city, and state departure and return plans.",
      "use_example": {
        "german": "Un aller-retour pour Bordeaux, s'il vous plaît.",
        "english": "A round-trip ticket to Bordeaux, please."
      },
      "takeaway": "One-way = un aller simple; Round-trip = un aller-retour; Ticket destination = pour [City].",
      "curiosity_teaser": "Up next on Le Pont ([5141] Docteur, Professeur & Acteur): see how Départ, Arrivée & Aller-Retour leads directly into Docteur, Professeur & Acteur."
    }
  },
  {
    "id": 5141,
    "slug": "lesson-5141",
    "title": "Docteur, Professeur & Acteur",
    "subtitle": "Why French drops 'a/an' before professions after être: Je suis professeur, il est docteur.",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "docteur",
      "professeur",
      "acteur",
      "directeur",
      "être",
      "suis",
      "cest",
      "bon"
    ],
    "table_word_ids": [
      "docteur",
      "professeur",
      "acteur",
      "directeur",
      "être"
    ],
    "hook": {
      "title": "Why French Drops 'a/an' Before Professions After être",
      "content": "After je suis / tu es / il est / elle est, French treats an unmodified profession like an adjective and drops 'a/an' (un/une): Je suis professeur ('I am a teacher'), Il est docteur ('He is a doctor'), Il est acteur ('He is an actor'). You only bring un/une back when pointing with C'est or adding an adjective: C'est un bon professeur!",
      "footnotes": [
        {
          "marker": "1",
          "title": "The clean contrast: Il est professeur (bare!) vs. C'est un bon professeur (with un!)",
          "content": "Unmodified profession after être = no article; modified profession with C'est = un/une!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Je suis / Il est + Bare Profession; C'est un(e) + (Adjective) + Profession",
      "content": "State professions without an article after je suis / il est, and bring un/une back after c'est.",
      "linguist_note": "Bare predicate nominals after copular être denote institutional role/status.",
      "trap_note": "Never say *Je suis un professeur — drop un/une after je suis / il est before a bare profession!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Contrast bare professions after je suis / il est with un/une after c'est:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I am a teacher (bare after je suis!)",
            "german": "Je suis professeur"
          },
          {
            "id": "p2",
            "english": "He is a doctor (bare after il est!)",
            "german": "Il est docteur"
          },
          {
            "id": "p3",
            "english": "He is an actor (bare after il est!)",
            "german": "Il est acteur"
          },
          {
            "id": "p4",
            "english": "He is a good actor (adjective + c'est!)",
            "german": "C'est un bon acteur"
          },
          {
            "id": "p5",
            "english": "She is the director",
            "german": "Elle est directrice / C'est la directrice"
          }
        ],
        "target_answer": "Je suis professeur, Il est docteur, Il est acteur, C'est un bon acteur, Elle est directrice / C'est la directrice",
        "meaning": "I am a teacher (bare after je suis!), He is a doctor (bare after il est!), He is an actor (bare after il est!), He is a good actor (adjective + c'est!), She is the director",
        "explanation": "Bare profession after je suis / tu es / il est; keep un/une after C'est!",
        "id": "fr5141_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'My brother is a teacher' vs. 'He is a very good teacher'?",
        "options": [
          "Mon frère est professeur / C'est un très bon professeur",
          "Mon frère est un professeur / Il est un très bon professeur",
          "Mon frère est professeur / Il est très bon professeur"
        ],
        "target_answer": "Mon frère est professeur / C'est un très bon professeur",
        "meaning": "Bare after est; C'est un when modified by an adjective!",
        "explanation": "Unmodified profession after est takes no article; modified profession takes C'est un très bon professeur.",
        "id": "fr5141_e2"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the word-for-word structure of 'Ma mère est docteur'?",
        "german": "Ma mère est docteur",
        "natural": "My mother is a doctor",
        "options": [
          "My mother is a doctor",
          "My mother is doctor",
          "My mother has doctor"
        ],
        "target_answer": "My mother is doctor",
        "meaning": "Literal structure: My mother is doctor",
        "explanation": "French treats the unmodified profession after être like an adjective, with no 'a/an'.",
        "id": "fr5141_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "I am a teacher at the university (use Je suis professeur)",
        "cues": [
          "I am teacher (no un!) → Je suis professeur",
          "at the university → à l'université"
        ],
        "idea_parts": [
          "subject + copula + bare profession → Je suis professeur",
          "place → à l'université"
        ],
        "target_answer": "Je suis professeur à l'université",
        "meaning": "I am a professor at the university",
        "word_bank": [
          "Je",
          "suis",
          "professeur",
          "à",
          "l'université",
          "un",
          "au"
        ],
        "explanation": "No 'un' between suis and professeur!",
        "diagnosis": {
          "slip": "inserted un",
          "cue": "Drop 'un' after Je suis before a bare profession: Je suis professeur."
        },
        "id": "fr5141_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Il est acteur, c'est un très bon acteur",
        "replays": 2,
        "target_answer": "Il est acteur, c'est un très bon acteur",
        "meaning": "He is an actor — he's a very good actor",
        "cues": [
          "Il est acteur",
          "c'est un très bon acteur"
        ],
        "explanation": "Hear the switch from bare Il est acteur to C'est un très bon acteur!",
        "affirmation": "You contrasted bare Il est acteur with C'est un très bon acteur!",
        "id": "fr5141_e5"
      }
    ],
    "summary": {
      "outcome": "State professions without an article after je suis / il est / elle est, and use C'est un(e) when adding an adjective.",
      "use_example": {
        "german": "Mon père est directeur et ma sœur est professeure.",
        "english": "My father is a director and my sister is a teacher."
      },
      "takeaway": "After je suis / il est, drop 'a/an' before a bare profession (Je suis professeur); with an adjective, use C'est un bon professeur.",
      "curiosity_teaser": "Up next on Le Pont ([5142] La Musique, Le Cinéma & Le Livre): see how Docteur, Professeur & Acteur leads directly into La Musique, Le Cinéma & Le Livre."
    }
  },
  {
    "id": 5142,
    "slug": "lesson-5142",
    "title": "La Musique, Le Cinéma & Le Livre",
    "subtitle": "Talking about arts, cinema, books, and passions with aimer and préférer.",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "musique",
      "cinéma",
      "livre",
      "histoire",
      "aimé",
      "préférer",
      "aller",
      "voir"
    ],
    "table_word_ids": [
      "musique",
      "cinéma",
      "livre",
      "histoire",
      "aimé"
    ],
    "hook": {
      "title": "Cultural Passions: La Musique, Le Cinéma & Les Livres",
      "content": "Because aimer ('to like/love'), adorer ('to adore'), and préférer ('to prefer') talk about a passion as a whole category, they ALWAYS take the definite article le, la, l', les: J'aime la musique ('I love music'), J'adore le cinéma ('I love cinema'), Je préfère les livres ('I prefer books')!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why 'le livre' is a book, 'la librairie' is a bookshop, and 'la bibliothèque' is a library",
          "content": "Latin liber ('book') gave French le livre and la librairie ('bookshop'), while Greek bibliothēkē gave French la bibliothèque ('lending library')!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "aimer / adorer / préférer + le / la / l' / les",
      "content": "Always include the definite article when talking about your cultural passions.",
      "linguist_note": "Generic objects of verbs of appreciation require definite determiners in French.",
      "trap_note": "Never drop la or le in 'I love music and cinema' (*J'aime musique et cinéma) — always say J'aime la musique et le cinéma!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each cultural passion phrase with its French equivalent:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I love music (definite la!)",
            "german": "J'aime la musique"
          },
          {
            "id": "p2",
            "english": "I prefer the movies / cinema (definite le!)",
            "german": "Je préfère le cinéma"
          },
          {
            "id": "p3",
            "english": "a good book (masculine le livre)",
            "german": "un bon livre"
          },
          {
            "id": "p4",
            "english": "at the cinema (à + le)",
            "german": "au cinéma"
          },
          {
            "id": "p5",
            "english": "at the bookshop (false friend!)",
            "german": "à la librairie"
          }
        ],
        "target_answer": "J'aime la musique, Je préfère le cinéma, un bon livre, au cinéma, à la librairie",
        "meaning": "I love music (definite la!), I prefer the movies / cinema (definite le!), a good book (masculine le livre), at the cinema (à + le), at the bookshop (false friend!)",
        "explanation": "Passions always wear their definite article after aimer and préférer.",
        "id": "fr5142_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'I like music and French cinema'?",
        "options": [
          "J'aime la musique et le cinéma français",
          "J'aime musique et cinéma français",
          "J'aime de la musique et du cinéma français"
        ],
        "target_answer": "J'aime la musique et le cinéma français",
        "meaning": "aimer always takes definite la musique and le cinéma",
        "explanation": "Never leave nouns bare or use partitives after aimer.",
        "id": "fr5142_e2"
      },
      {
        "type": "derive",
        "prompt": "Translate 'I prefer the book' using 'Je préfère' + 'the book':",
        "english_hint": "le livre is masculine",
        "target_answer": "Je préfère le livre",
        "meaning": "I prefer the book",
        "explanation": "Je préfère le livre.",
        "id": "fr5142_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "we are going to the cinema tonight because I love this movie (use ce film)",
        "cues": [
          "We go to the cinema tonight → On va au cinéma ce soir",
          "because I love this movie → parce que j'aime ce film"
        ],
        "idea_parts": [
          "plan → On va au cinéma ce soir",
          "reason → parce que j'aime ce film"
        ],
        "target_answer": "On va au cinéma ce soir parce que j'aime ce film",
        "meaning": "We're going to the cinema tonight because I love this movie",
        "word_bank": [
          "On",
          "va",
          "au",
          "cinéma",
          "ce",
          "soir",
          "parce",
          "que",
          "j'aime",
          "ce",
          "film",
          "à",
          "la"
        ],
        "explanation": "au cinéma (à + le) + parce que j'aime ce film.",
        "diagnosis": {
          "slip": "used à cinéma",
          "cue": "Fuse à + le into au cinéma."
        },
        "id": "fr5142_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "J'ai acheté un bon livre à la librairie",
        "replays": 2,
        "target_answer": "J'ai acheté un bon livre à la librairie",
        "meaning": "I bought a good book at the bookshop",
        "cues": [
          "J'ai acheté un bon livre",
          "à la librairie"
        ],
        "explanation": "un bon livre (masculine) + à la librairie (bookshop).",
        "affirmation": "You paired un bon livre and à la librairie cleanly.",
        "id": "fr5142_e5"
      }
    ],
    "summary": {
      "outcome": "Discuss music, cinema, books, and passions using mandatory definite articles after aimer, adorer, and préférer.",
      "use_example": {
        "german": "J'adore la musique, mais ce soir je préfère lire un bon livre.",
        "english": "I love music, but tonight I prefer to read a good book."
      },
      "takeaway": "After aimer/adorer/préférer, always keep le, la, l', les (J'aime la musique).",
      "curiosity_teaser": "Up next on Le Pont ([5151] La Tête, La Main & Le Cœur): see how La Musique, Le Cinéma & Le Livre leads directly into La Tête, La Main & Le Cœur."
    }
  },
  {
    "id": 5151,
    "slug": "lesson-5151",
    "title": "La Tête, La Main & Le Cœur",
    "subtitle": "Expressing aches with avoir mal à la tête and definite articles with body parts.",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "tête",
      "main",
      "cœur",
      "avoir",
      "jai",
      "à",
      "au",
      "la",
      "le"
    ],
    "table_word_ids": [
      "tête",
      "main",
      "cœur",
      "avoir",
      "jai"
    ],
    "hook": {
      "title": "The Body & Aches: La Tête, La Main, Le Cœur & Avoir mal à",
      "content": "Meet three core body nouns with English cognates: la tête ('head', ê = lost s of Old French teste, preserved in 'testy'), la main ('hand' ↔ manual/manuscript), and le cœur ('heart' ↔ core/courage). To say something hurts, French uses avoir mal à + definite article: J'ai mal à la tête ('I have a headache')!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why 'tête' wears a circumflex hat (ê)",
          "content": "Old French spelled it teste (from Latin testa); when the s before t fell silent, French crowned the e with a circumflex: la tête!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "avoir mal + à la (f.) / au (m.) / aux (pl.) + Body Part",
      "content": "Use J'ai mal à + definite article + body part.",
      "linguist_note": "Inalienable body-part location in French pain idioms uses avoir mal + à + definite article.",
      "trap_note": "Never say *J'ai mal à ma tête — always use the definite article: J'ai mal à la tête!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each body word or expression with its English meaning and cognate:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "la tête (circumflex ê = lost s)",
            "german": "the head (testy / tête-à-tête)"
          },
          {
            "id": "p2",
            "english": "la main (Latin manus)",
            "german": "the hand (manual / manuscript)"
          },
          {
            "id": "p3",
            "english": "le cœur (Latin cor)",
            "german": "the heart (core / courage)"
          },
          {
            "id": "p4",
            "english": "J'ai mal à la tête",
            "german": "I have a headache (lit. I have pain at the head)"
          },
          {
            "id": "p5",
            "english": "J'ai mal à la main",
            "german": "My hand hurts"
          }
        ],
        "target_answer": "the head (testy / tête-à-tête), the hand (manual / manuscript), the heart (core / courage), I have a headache (lit. I have pain at the head), My hand hurts",
        "meaning": "la tête (circumflex ê = lost s), la main (Latin manus), le cœur (Latin cor), J'ai mal à la tête, J'ai mal à la main",
        "explanation": "avoir mal à always uses the definite article (à la, au, aux) before the body part.",
        "id": "fr5151_e1"
      },
      {
        "type": "reverse_cognate",
        "prompt": "French la main ('the hand', from Latin manus) shares its root with which English adjective meaning 'done by hand (rather than automatically)'?",
        "target_answer": "manual",
        "meaning": "manual / manuscript / manufacture ↔ la main ('the hand')",
        "explanation": "Manual is 'by hand', manuscript is 'written by hand', and manufacture is 'made by hand'!",
        "id": "fr5151_e2"
      },
      {
        "type": "literal_gloss",
        "prompt": "What is the literal word-for-word structure of 'J'ai mal à la tête'?",
        "german": "J'ai mal à la tête",
        "natural": "I have a headache",
        "options": [
          "I have a headache",
          "I have pain at the head",
          "I am bad in my head"
        ],
        "target_answer": "I have pain at the head",
        "meaning": "Literal structure: I have pain at the head",
        "explanation": "J'ai ('I have') + mal ('pain/ache') + à la tête ('at the head').",
        "id": "fr5151_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "I have a headache today (using J'ai mal à la tête aujourd'hui)",
        "cues": [
          "I have pain at the head → J'ai mal à la tête",
          "today → aujourd'hui"
        ],
        "idea_parts": [
          "ache idiom → J'ai mal à la tête",
          "time → aujourd'hui"
        ],
        "target_answer": "J'ai mal à la tête aujourd'hui",
        "meaning": "I have a headache today",
        "word_bank": [
          "J'ai",
          "mal",
          "à",
          "la",
          "tête",
          "aujourd'hui",
          "ma",
          "le"
        ],
        "explanation": "Use à la tête (never *à ma tête).",
        "diagnosis": {
          "slip": "used ma instead of la",
          "cue": "Body parts with avoir mal à take the definite article: à la tête."
        },
        "id": "fr5151_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Elle a bon cœur et elle me donne la main",
        "replays": 2,
        "target_answer": "Elle a bon cœur et elle me donne la main",
        "meaning": "She has a good heart and she gives me her hand",
        "cues": [
          "Elle a bon cœur",
          "et elle me donne la main"
        ],
        "explanation": "elle me donne la main uses the definite article la.",
        "affirmation": "You wrote bon cœur and la main cleanly.",
        "id": "fr5151_e5"
      }
    ],
    "summary": {
      "outcome": "Name key body parts (la tête, la main, le cœur) and express aches using avoir mal à + definite article.",
      "use_example": {
        "german": "Je ne peux pas venir parce que j'ai mal à la tête.",
        "english": "I can't come because I have a headache."
      },
      "takeaway": "Headache = J'ai mal à la tête (never *ma tête).",
      "curiosity_teaser": "Up next on Le Pont ([5152] Le Manteau & La Robe): see how La Tête, La Main & Le Cœur leads directly into Le Manteau & La Robe."
    }
  },
  {
    "id": 5152,
    "slug": "lesson-5152",
    "title": "Le Manteau & La Robe",
    "subtitle": "Clothing doublets (manteau/mantle, robe/wardrobe) and adjective placement with colors.",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "manteau",
      "robe",
      "bleu",
      "rouge",
      "noir",
      "blanc",
      "vert",
      "beau",
      "nouveau",
      "cher"
    ],
    "table_word_ids": [
      "manteau",
      "robe",
      "bleu",
      "rouge",
      "noir"
    ],
    "hook": {
      "title": "Wardrobe Doublets & Wearing Clothes: Le Manteau & La Robe",
      "content": "Old French mantel ('cloak/coat') gave English 'mantle' and softened into modern French le manteau (just like castel → château and gastel → gâteau!). Frankish *rauba gave French la robe ('dress') and English 'wardrobe'. And to say 'I am wearing', French uses porter ('to carry/wear'): Je porte un manteau noir!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Look at the -el → -eau sound law: castle/château, gateau, mantle/manteau!",
          "content": "Old French -el vocalized into modern French -eau (/o/): castel → château, mantel → manteau, bel → beau, nouvel → nouveau!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "porter ('to wear / carry') + Noun + Color in Back (and BAGS in Front)",
      "content": "Combine clothing nouns with BAGS adjectives in front and color adjectives in back.",
      "linguist_note": "Old French dark /ɫ/ vocalization to -eau (/o/) explains English -el/-le vs. French -eau doublets.",
      "trap_note": "Remember: color adjectives agree with the clothing noun and stand AFTER it: un manteau blanc (m.) vs. une robe blanche (f.)!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each French -eau word with its English -el/-le doublet and meaning:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "le manteau (Old French mantel)",
            "german": "the coat / overcoat (mantle)"
          },
          {
            "id": "p2",
            "english": "le château (Old French castel)",
            "german": "the castle"
          },
          {
            "id": "p3",
            "english": "le gâteau (Old French gastel)",
            "german": "the cake"
          },
          {
            "id": "p4",
            "english": "beau / bel (Old French bel)",
            "german": "beautiful / handsome"
          },
          {
            "id": "p5",
            "english": "nouveau / nouvel (Old French nouvel)",
            "german": "new (novel)"
          }
        ],
        "target_answer": "the coat / overcoat (mantle), the castle, the cake, beautiful / handsome, new (novel)",
        "meaning": "le manteau (Old French mantel), le château (Old French castel), le gâteau (Old French gastel), beau / bel (Old French bel), nouveau / nouvel (Old French nouvel)",
        "explanation": "Old French -el turned into modern French -eau (/o/) across nouns and adjectives alike!",
        "id": "fr5152_e1"
      },
      {
        "type": "reverse_cognate",
        "prompt": "French le manteau ('the coat') is the -el → -eau twin of which English word for a cloak (or the shelf above a fireplace)?",
        "target_answer": "mantle",
        "meaning": "mantle ↔ le manteau ('coat')",
        "explanation": "Old French mantel became English mantle and modern French manteau.",
        "id": "fr5152_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'a beautiful white dress' (la robe is feminine)?",
        "options": [
          "une belle robe blanche",
          "une robe belle blanche",
          "un beau robe blanc"
        ],
        "target_answer": "une belle robe blanche",
        "meaning": "a beautiful white dress",
        "explanation": "belle (BAGS) steps in front of robe, and blanche (Color, feminine of blanc) stands after robe!",
        "id": "fr5152_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "I am wearing a black coat today (use Je porte un manteau noir)",
        "cues": [
          "I wear/carry → Je porte",
          "a black coat today → un manteau noir aujourd'hui"
        ],
        "idea_parts": [
          "verb → Je porte",
          "object + color + time → un manteau noir aujourd'hui"
        ],
        "target_answer": "Je porte un manteau noir aujourd'hui",
        "meaning": "I am wearing a black coat today",
        "word_bank": [
          "Je",
          "porte",
          "un",
          "manteau",
          "noir",
          "aujourd'hui",
          "noire",
          "la"
        ],
        "explanation": "manteau is masculine, so noir stays masculine after it.",
        "diagnosis": {
          "slip": "put noir before manteau",
          "cue": "Place masculine noir after manteau: un manteau noir."
        },
        "id": "fr5152_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Elle a acheté une jolie robe rouge",
        "replays": 2,
        "target_answer": "Elle a acheté une jolie robe rouge",
        "meaning": "She bought a pretty red dress",
        "cues": [
          "Elle a acheté",
          "une jolie robe rouge"
        ],
        "explanation": "jolie (BAGS) in front of robe, rouge (color) in back.",
        "affirmation": "You flanked robe with jolie and rouge cleanly!",
        "id": "fr5152_e5"
      }
    ],
    "summary": {
      "outcome": "Decode the -el → -eau doublet law (manteau/mantle, château/castle, beau/bel) and describe clothing with porter, BAGS, and colors.",
      "use_example": {
        "german": "Il fait froid, donc je porte mon grand manteau bleu.",
        "english": "It's cold, so I'm wearing my big blue coat."
      },
      "takeaway": "Old French -el became modern French -eau (mantle → manteau, castle → château).",
      "curiosity_teaser": "You have completed every core, sprig, and support branch on Le Pont — félicitations !"
    }
  }
];
