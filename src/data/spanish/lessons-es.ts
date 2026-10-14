import type { Lesson } from "@/lib/types";

// ---------------------------------------------------------------------------
// El Puente — complete Spanish coursework (30 Spine Cores, 72 Cluster Sprigs,
// and 21 Support Branch lessons = 123 lessons).
// Aligned with Language Transfer Thinking Method principles.
// ---------------------------------------------------------------------------

export const ES_LESSONS: Lesson[] = [
  {
    "id": 1,
    "slug": "spanish-inside-english",
    "title": "The Spanish Inside Your English",
    "subtitle": "The Latinate inheritance, el/la, quiero, and lo as 'it' walking left",
    "phase": 1,
    "shift_categories": [
      "ar_engine"
    ],
    "word_ids": [
      "pastel",
      "café",
      "querer",
      "tú",
      "yo",
      "el",
      "la",
      "lo",
      "un_poco"
    ],
    "table_word_ids": [
      "pastel",
      "café",
      "querer",
      "tú",
      "yo",
      "el"
    ],
    "hook": {
      "title": "You Already Speak a Vast Latin Language",
      "content": "English absorbed thousands of Latin stems directly and through Norman French. Whenever you reach for formal English words like inquire, desire, or pastry, Spanish is standing right behind them. The pastry is el pastel. The coffee is el café. And 'I want' is quiero — born from the same Latin root as English 'inquire'. You already own thousands of Spanish roots without memorizing a single vocabulary list.",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why 'yo' Is Optional in Spanish",
          "content": "In English, 'want' could be I, you, we, or they — so you must say 'I want'. In Spanish, the -o ending of quiero belongs exclusively to 'I', so speakers drop yo unless they mean 'I (and nobody else) want'!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "el, la — and the Pronoun Walks Left",
      "content": "The coffee is el café. The pastry is el pastel. And here is the core habit this course will anchor from your very first sentence: when you want to say 'it', Spanish places the object pronoun right before the conjugated verb. 'I want it' — where 'it' refers to the coffee — is lo quiero. Word for word: 'it I want'. And because the ending of quiero (-o) already announces 'I', you only add yo when you want extra emphasis!",
      "linguist_note": "el, la, and lo all derive from Latin demonstratives ille, illa, illum ('that one'). Spanish pointers became both articles and object pronouns.",
      "trap_note": "Your mind will want to say *quiero lo for 'I want it', copying English order. In Spanish, the pronoun walks left: lo quiero."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "cake, pastry",
            "german": "el pastel"
          },
          {
            "id": "p2",
            "english": "coffee",
            "german": "el café"
          },
          {
            "id": "p3",
            "english": "I want",
            "german": "quiero"
          },
          {
            "id": "p4",
            "english": "you (informal)",
            "german": "tú"
          },
          {
            "id": "p5",
            "english": "a little",
            "german": "un poco"
          },
          {
            "id": "p6",
            "english": "it (masculine)",
            "german": "lo"
          }
        ],
        "target_answer": "el pastel, el café, quiero, tú, un poco, lo",
        "meaning": "cake, pastry, coffee, I want, you (informal), a little, it (masculine)",
        "explanation": "pastel and café are direct cognates; quiero comes from querer (inquire); lo is the masculine/neuter 'it'.",
        "id": "es1_e1"
      },
      {
        "type": "reverse_cognate",
        "prompt": "quiero ('I want') shares its Latin root (quaerere 'to seek/ask') with an English word for asking questions. Which one?",
        "target_answer": "inquire",
        "meaning": "to inquire is to ask for what you seek or want",
        "explanation": "Latin quaerere ('to seek, ask') gave Spanish querer ('to want, love') and English query, inquire, require.",
        "id": "es1_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I want the cake'",
        "target_answer": "Quiero el pastel",
        "meaning": "I want the cake",
        "word_bank": [
          "Quiero",
          "el",
          "pastel",
          "la",
          "café",
          "lo"
        ],
        "explanation": "Quiero (I want) + el pastel (the cake). Because -o on quiero already means 'I', yo is optional.",
        "vocab_hints": [
          {
            "word": "el",
            "translation": "the (masculine)",
            "note": "Azure article for masculine nouns"
          }
        ],
        "id": "es1_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "you are telling a friend you want it — and 'it' refers to the coffee",
        "cues": [
          "it referring to masculine coffee is lo",
          "the pronoun walks left: it I want",
          "I want is quiero"
        ],
        "idea_parts": [
          "it (the coffee) → lo",
          "I want → quiero",
          "order: it I want → Lo quiero"
        ],
        "target_answer": "Lo quiero",
        "meaning": "I want it",
        "word_bank": [
          "Lo",
          "quiero",
          "la",
          "el",
          "un",
          "café"
        ],
        "explanation": "Lo quiero — the object pronoun sits directly before the conjugated verb: it I want.",
        "diagnosis": {
          "slip": "the pronoun stayed after the verb, English-style",
          "cue": "Spanish says it I want: the pronoun takes one step left. Lo quiero — never *quiero lo."
        },
        "id": "es1_e4"
      },
      {
        "type": "literal_gloss",
        "prompt": "Which English word-for-word blueprint mirrors Spanish 'Lo quiero'?",
        "german": "Lo quiero",
        "natural": "I want it",
        "options": [
          "I want it",
          "It I want",
          "I want to it",
          "The I want"
        ],
        "target_answer": "It I want",
        "meaning": "I want it (literal Spanish blueprint: It I want)",
        "explanation": "Lo quiero is word-for-word 'It I want'. In Spanish, object pronouns walk one step left of conjugated verbs.",
        "id": "es1_e5"
      }
    ],
    "summary": {
      "outcome": "Convert pastel and café from English, use quiero without needing yo, and place lo as 'it' before the verb.",
      "use_example": {
        "german": "Lo quiero, un poco.",
        "english": "I want it, a little."
      },
      "takeaway": "English Latin roots are a Spanish treasury — and Spanish object pronouns walk one step left: it I want.",
      "curiosity_teaser": "Up next on El Puente ([101] Hidden Twins: Places & Colors): see how zero-shift cognates give you places and colors immediately."
    },
    "twist": {
      "prompt": "One more, no safety net — 'I want it, a little'?",
      "target_answer": "Lo quiero, un poco",
      "word_bank": [
        "Lo",
        "quiero",
        "un",
        "poco",
        "la",
        "el",
        "café"
      ],
      "explanation": "un poco sits at the end, just like English 'a little'."
    },
    "foreshadow": {
      "line": "One vital piece sits waiting: la, the feminine article, has no partner yet. Its moment arrives in Topic 2 — and it will carry thousands of words on its shoulders.",
      "resolvedIn": 2
    }
  },
  {
    "id": 101,
    "slug": "zero-shift-places-cognates",
    "title": "Hidden Twins: Places & Colors",
    "subtitle": "Direct cognates gym: la casa, el hotel, azul, rojo, grande, pequeño",
    "phase": 1,
    "shift_categories": [],
    "word_ids": [
      "casa",
      "hotel",
      "mesa",
      "restaurante",
      "azul",
      "rojo",
      "grande",
      "pequeño",
      "es"
    ],
    "table_word_ids": [
      "casa",
      "hotel",
      "mesa",
      "restaurante",
      "azul",
      "rojo"
    ],
    "hook": {
      "title": "Direct Cognates in Everyday Space",
      "content": "Many foundational Spanish words require no sound shift at all. The house: la casa (cousin of Italian casino, literally 'little house'). The hotel: el hotel, identical spelling with a silent initial H. The table is la mesa — which English borrowed in the American Southwest for a flat-topped 'table' mountain! Blue is azul (English azure), and red is rojo (ruby/russet).",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why a Flat-Topped Mountain Is Called a 'Mesa'",
          "content": "Spanish explorers in the American Southwest saw flat-topped plateaus and named them mesas ('tables', from Latin mēnsa). Every time you say 'mesa' in English geography, you are speaking Spanish!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Noun First, Color Second — and Invariable grande",
      "content": "In Spanish, you paint the object first and color it second: la casa azul ('the house blue'), el hotel grande ('the hotel big'). And notice how grande ends in -e, making it gender-invariable in the singular: el hotel grande and la casa grande use the exact same form!",
      "trap_note": "Never pronounce the H in hotel or hola. In Spanish, H is a silent historical ornament."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "the house",
            "german": "la casa"
          },
          {
            "id": "p2",
            "english": "the hotel",
            "german": "el hotel"
          },
          {
            "id": "p3",
            "english": "the table",
            "german": "la mesa"
          },
          {
            "id": "p4",
            "english": "blue",
            "german": "azul"
          },
          {
            "id": "p5",
            "english": "red",
            "german": "rojo"
          },
          {
            "id": "p6",
            "english": "big / grand",
            "german": "grande"
          }
        ],
        "target_answer": "la casa, el hotel, la mesa, azul, rojo, grande",
        "meaning": "the house, the hotel, the table, blue, red, big / grand",
        "explanation": "All are living cognates: casa in casino, hotel in hospital, mesa in Southwest geography, azul in azure, grande in grand.",
        "id": "es101_e1"
      },
      {
        "type": "reverse_cognate",
        "prompt": "Spanish azul ('blue', from Arabic lāzaward 'lapis lazuli') entered English as which sky-blue color word?",
        "target_answer": "azure",
        "meaning": "azure and azul are the exact same Arabic-Persian stone name",
        "explanation": "Medieval merchants traded lapis lazuli across the Mediterranean, giving Spanish azul and English azure.",
        "id": "es101_e2"
      },
      {
        "type": "shift_select",
        "prompt": "Which phrase properly places the adjective after the noun for 'the big restaurant'?",
        "options": [
          "el restaurante grande",
          "el grande restaurante",
          "la restaurante grande"
        ],
        "target_answer": "el restaurante grande",
        "meaning": "the big restaurant",
        "explanation": "el restaurante is masculine, and descriptive adjectives follow the noun: el restaurante grande.",
        "id": "es101_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'The house is big'",
        "target_answer": "La casa es grande",
        "meaning": "The house is big",
        "word_bank": [
          "La",
          "casa",
          "es",
          "grande",
          "El",
          "hotel",
          "azul",
          "pequeño"
        ],
        "explanation": "La casa (the house) + es (is) + grande (big). grande stays identical for masculine and feminine nouns.",
        "id": "es101_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "El hotel es grande",
        "replays": 2,
        "target_answer": "El hotel es grande",
        "meaning": "The hotel is big",
        "cues": [
          "The hotel: el hotel (silent H)",
          "is: es",
          "big: grande"
        ],
        "explanation": "El hotel es grande — direct cognate noun with invariable adjective.",
        "affirmation": "You heard the silent-H cognate and the invariable adjective in one clean sweep.",
        "id": "es101_e5"
      }
    ],
    "summary": {
      "outcome": "Recognize direct place cognates, silence Spanish H, and place descriptive adjectives after the noun.",
      "use_example": {
        "german": "La casa es grande y el hotel es azul.",
        "english": "The house is big and the hotel is blue."
      },
      "takeaway": "Spanish paints the noun first and colors it second — and adjectives in -e like grande never change for gender.",
      "curiosity_teaser": "Up next ([102] First Sentences Gym): assemble questions and answers using quiero and quieres."
    },
    "twist": {
      "prompt": "Assemble: 'The house is blue'",
      "target_answer": "La casa es azul",
      "word_bank": [
        "La",
        "casa",
        "es",
        "azul",
        "El",
        "hotel",
        "rojo"
      ],
      "explanation": "La casa es azul — es links the subject and color."
    }
  },
  {
    "id": 102,
    "slug": "first-sentences-gym",
    "title": "First Sentences Gym",
    "subtitle": "Quiero el… pattern drills: assemble simple sentences and intonation questions",
    "phase": 1,
    "shift_categories": [],
    "word_ids": [
      "pastel",
      "café",
      "mesa",
      "restaurante",
      "minuto",
      "momento",
      "querer",
      "tú",
      "lo",
      "un_poco"
    ],
    "table_word_ids": [
      "pastel",
      "café",
      "mesa",
      "restaurante",
      "minuto",
      "momento"
    ],
    "hook": {
      "title": "Turning Words into Living Speech",
      "content": "Individual words are inert; syntax brings them to life. With quiero ('I want') and quieres ('you want'), you can already build statements, questions, and pronoun replies at a Spanish café table."
    },
    "pattern": {
      "title": "Questions by Vocal Melody Alone",
      "content": "In English, asking a question requires dragging in the helper verb 'do': 'Do you want the coffee?'. Spanish needs no helper verb at all! Keep the exact same words — ¿Quieres el café? — and simply raise your voice at the end. In writing, Spanish kindly warns you at the start of the sentence with an inverted question mark ¿ so you know to lift your pitch from syllable one!",
      "trap_note": "Never try to translate English 'do' at the start of a question. Start directly with the verb or pronoun: ¿Quieres...?"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I want",
            "german": "quiero"
          },
          {
            "id": "p2",
            "english": "you want (informal)",
            "german": "quieres"
          },
          {
            "id": "p3",
            "english": "one minute",
            "german": "un minuto"
          },
          {
            "id": "p4",
            "english": "one moment",
            "german": "un momento"
          },
          {
            "id": "p5",
            "english": "the table",
            "german": "la mesa"
          },
          {
            "id": "p6",
            "english": "it (masculine)",
            "german": "lo"
          }
        ],
        "target_answer": "quiero, quieres, un minuto, un momento, la mesa, lo",
        "meaning": "I want, you want (informal), one minute, one moment, the table, it (masculine)",
        "explanation": "quiero (-o = I) and quieres (-es = you) let you ask and answer immediately.",
        "id": "es102_e1"
      },
      {
        "type": "morpheme_tiles",
        "prompt": "Build the informal 'you want' form of querer by pairing stem and ending:",
        "tile_options": [
          "quier",
          "es",
          "o",
          "an"
        ],
        "target_answer": "quieres",
        "meaning": "quieres (you want)",
        "explanation": "quier- + -es gives tú quieres ('you want').",
        "id": "es102_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'Do you want the coffee?'",
        "target_answer": "Quieres el café",
        "meaning": "Do you want the coffee?",
        "word_bank": [
          "Quieres",
          "el",
          "café",
          "Quiero",
          "la",
          "pastel",
          "mesa"
        ],
        "explanation": "¿Quieres el café? — no 'do' helper exists in Spanish; vocal melody asks the question.",
        "id": "es102_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "ask a friend whether they want it (referring to the masculine cake)",
        "cues": [
          "it (masculine) walks left: lo",
          "you want: quieres",
          "rising voice makes it a question"
        ],
        "idea_parts": [
          "it → lo",
          "you want → quieres",
          "question → ¿Lo quieres?"
        ],
        "target_answer": "Lo quieres",
        "meaning": "Do you want it?",
        "word_bank": [
          "Lo",
          "quieres",
          "La",
          "quiero",
          "el",
          "café"
        ],
        "explanation": "¿Lo quieres? — the pronoun walks before the verb, and intonation turns it into a question.",
        "diagnosis": {
          "slip": "put lo after quieres",
          "cue": "Even in a question, the object pronoun stays right in front of the verb: ¿Lo quieres?"
        },
        "id": "es102_e4"
      },
      {
        "type": "literal_gloss",
        "prompt": "Which English word-for-word blueprint mirrors Spanish '¿Quieres el pastel?'?",
        "german": "¿Quieres el pastel?",
        "natural": "Do you want the cake?",
        "options": [
          "Do you want the cake?",
          "Want-you the cake?",
          "Do want the cake?",
          "You wants the cake?"
        ],
        "target_answer": "Want-you the cake?",
        "meaning": "Do you want the cake? (literal Spanish blueprint: Want-you the cake?)",
        "explanation": "Spanish packs 'do you want' into a single inflected word: quieres ('want-you').",
        "id": "es102_e5"
      }
    ],
    "summary": {
      "outcome": "Ask questions by intonation alone and pair quiero/quieres with everyday café nouns.",
      "use_example": {
        "german": "¿Quieres el café? — Sí, lo quiero.",
        "english": "Do you want the coffee? — Yes, I want it."
      },
      "takeaway": "Spanish has no auxiliary 'do' — your voice melody turns any statement into a question.",
      "curiosity_teaser": "Up next ([103] The Register Ladder): climb from everyday English into Latinate English to unlock Spanish verbs."
    },
    "twist": {
      "prompt": "Assemble: 'I want the cake, a little'",
      "target_answer": "Quiero el pastel, un poco",
      "word_bank": [
        "Quiero",
        "el",
        "pastel",
        "un",
        "poco",
        "la",
        "Quieres",
        "mesa"
      ],
      "explanation": "Quiero el pastel, un poco combines verb, object, and qualifier."
    }
  },
  {
    "id": 103,
    "slug": "the-register-ladder",
    "title": "The Register Ladder",
    "subtitle": "want→desire (desear), go in→enter (entrar), finish→terminate (terminar): formal English revealing everyday Spanish",
    "phase": 1,
    "shift_categories": [
      "ar_engine"
    ],
    "word_ids": [
      "desear",
      "entrar",
      "terminar",
      "preferir",
      "continuar",
      "importante",
      "diferente",
      "posible",
      "imposible"
    ],
    "table_word_ids": [
      "desear",
      "entrar",
      "terminar",
      "preferir",
      "continuar",
      "importante"
    ],
    "hook": {
      "title": "Your Fancy English Is Everyday Spanish",
      "content": "Language Transfer's signature insight is the Register Ladder. In English, you have two ways to say almost everything: a casual Germanic phrase ('go in', 'keep on', 'finish', 'want') and a formal Latinate word ('enter', 'continue', 'terminate', 'desire'). What sounds stiff or formal in English is completely natural, everyday street Spanish: entrar ('to go in'), continuar ('to keep going'), terminar ('to finish'), desear ('to wish/want')!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why 'Terminate' Is Cozy in Spanish",
          "content": "In English, Latin words arrived through royal courts, law, and science, so 'terminate' feels cold and technical. In Spain, Latin was the language of the kitchen and the playground — so terminar is simply 'to finish'!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Stepping Up in English to Step Across into Spanish",
      "content": "Whenever you get stuck looking for a Spanish word, don't reach for a dictionary — step one rung up the English register ladder! Trade 'finish' for 'terminate' and you have terminar. Trade 'go in' for 'enter' and you have entrar. And adjectives ending in -ante, -ente, or -ble (importante, diferente, posible, imposible) cross over with one s and no gender change!",
      "trap_note": "In Spanish, subject 'it' is invisible! For 'It is important' or 'It is possible', say Es importante / Es posible — never *Lo es importante."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "to go in (enter)",
            "german": "entrar"
          },
          {
            "id": "p2",
            "english": "to finish (terminate)",
            "german": "terminar"
          },
          {
            "id": "p3",
            "english": "to wish / desire",
            "german": "desear"
          },
          {
            "id": "p4",
            "english": "to keep going (continue)",
            "german": "continuar"
          },
          {
            "id": "p5",
            "english": "important",
            "german": "importante"
          },
          {
            "id": "p6",
            "english": "possible",
            "german": "posible"
          }
        ],
        "target_answer": "entrar, terminar, desear, continuar, importante, posible",
        "meaning": "to go in (enter), to finish (terminate), to wish / desire, to keep going (continue), important, possible",
        "explanation": "Climbing from phrasal English to Latinate English hands you the everyday Spanish word.",
        "id": "es103_e1"
      },
      {
        "type": "variant_english",
        "prompt": "Select every English sentence that expresses the same thought as 'Quiero terminar y entrar aquí':",
        "german": "Quiero terminar y entrar aquí",
        "meaning": "I want to finish and go in here",
        "renderings": [
          "I want to finish and go in here",
          "I want to complete it and enter here"
        ],
        "traps": [
          "I finished and went out from here",
          "You want to start and wait there"
        ],
        "target_answer": "I want to finish and go in here",
        "explanation": "terminar covers both casual 'finish' and formal 'complete/terminate'; entrar covers both 'go in' and 'enter'!",
        "id": "es103_e2"
      },
      {
        "type": "derive",
        "prompt": "Climb the register ladder from 'finish' to 'terminate' to write the Spanish infinitive:",
        "english_hint": "terminate → -ar verb",
        "target_answer": "terminar",
        "meaning": "to finish",
        "explanation": "terminate → terminar.",
        "id": "es103_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I want to finish'",
        "target_answer": "Quiero terminar",
        "meaning": "I want to finish",
        "word_bank": [
          "Quiero",
          "terminar",
          "entrar",
          "el",
          "la",
          "imposible"
        ],
        "explanation": "Quiero + terminar — no 'to' needed between quiero and the infinitive.",
        "id": "es103_e4"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that it is very important",
        "cues": [
          "it is (characteristic) → es",
          "very → muy",
          "important → importante"
        ],
        "idea_parts": [
          "is → Es",
          "very → muy",
          "important → importante"
        ],
        "target_answer": "Es muy importante",
        "meaning": "It is very important",
        "word_bank": [
          "Es",
          "muy",
          "importante",
          "Está",
          "imposible",
          "diferente"
        ],
        "explanation": "Es muy importante — Spanish drops subject 'it' because es already carries it.",
        "diagnosis": {
          "slip": "added lo before es",
          "cue": "Never use lo as a subject 'it' before es! Es alone means 'It is'."
        },
        "id": "es103_e5"
      }
    ],
    "summary": {
      "outcome": "Use the English register ladder to unlock entrar, terminar, desear, continuar, importante, and posible.",
      "use_example": {
        "german": "Quiero terminar porque es muy importante.",
        "english": "I want to finish because it is very important."
      },
      "takeaway": "When a casual English word hides the Spanish root, trade it for its formal Latinate synonym.",
      "curiosity_teaser": "Up next ([2] The -CIÓN Bridge): unlock over a thousand feminine Spanish nouns with a single suffix."
    },
    "twist": {
      "prompt": "Assemble: 'I want to continue'",
      "target_answer": "Quiero continuar",
      "word_bank": [
        "Quiero",
        "continuar",
        "terminar",
        "el",
        "la"
      ],
      "explanation": "Quiero continuar stacks want + infinitive directly."
    }
  },
  {
    "id": 2,
    "slug": "the-cion-bridge",
    "title": "The -CIÓN Bridge",
    "subtitle": "Hundreds of nouns convert whole: tradición, confirmación — and every one takes la",
    "phase": 1,
    "shift_categories": [
      "cion"
    ],
    "word_ids": [
      "colección",
      "tradición",
      "confirmación",
      "organización",
      "opinión",
      "reservación",
      "la",
      "querer",
      "lo"
    ],
    "table_word_ids": [
      "colección",
      "tradición",
      "confirmación",
      "organización",
      "opinión",
      "reservación"
    ],
    "hook": {
      "title": "The Most Generous Bridge in Spanish",
      "content": "Every English noun ending in -tion converts directly into Spanish -ción. Collection becomes colección. Tradition becomes tradición. Confirmation becomes confirmación. And best of all: you never have to guess grammatical gender. Every single -ción and -sión noun is 100% feminine and takes la."
    },
    "pattern": {
      "title": "-CIÓN Guarantees Feminine Gender — and 'La' Means 'It'",
      "content": "Because Latin abstract nouns in -tiō were feminine, every single descendant in Spanish takes la. The acute accent on ó tells your voice to stress the final syllable: tra-di-CIÓN, con-fir-ma-CIÓN. And when you refer back to one of these feminine words as 'it', the walking pronoun is la: La quiero ('I want it').",
      "linguist_note": "Latin -tiōnem evolved to Spanish -ción with palatalization of the dental stop. Stress is always oxytone (aguda).",
      "trap_note": "Learners sometimes wonder if any -ción noun takes el. The answer is zero: every -ción noun in Spanish takes la."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "the collection",
            "german": "la colección"
          },
          {
            "id": "p2",
            "english": "the tradition",
            "german": "la tradición"
          },
          {
            "id": "p3",
            "english": "the confirmation",
            "german": "la confirmación"
          },
          {
            "id": "p4",
            "english": "the organization",
            "german": "la organización"
          },
          {
            "id": "p5",
            "english": "the opinion",
            "german": "la opinión"
          },
          {
            "id": "p6",
            "english": "the reservation",
            "german": "la reservación"
          }
        ],
        "target_answer": "la colección, la tradición, la confirmación, la organización, la opinión, la reservación",
        "meaning": "the collection, the tradition, the confirmation, the organization, the opinion, the reservation",
        "explanation": "All take la; all stress the final -ón syllable.",
        "id": "es2_e1"
      },
      {
        "type": "morpheme_tiles",
        "prompt": "Convert English 'confirmation' into Spanish by snapping stem and suffix together:",
        "tile_options": [
          "confirm",
          "ación",
          "ation",
          "ición"
        ],
        "target_answer": "confirmación",
        "meaning": "la confirmación (the confirmation)",
        "explanation": "confirm + ación = confirmación, always feminine and accented on ó.",
        "id": "es2_e2"
      },
      {
        "type": "derive",
        "prompt": "Convert with its feminine article: 'the tradition' →",
        "english_hint": "tradition → -ción",
        "target_answer": "la tradición",
        "meaning": "the tradition",
        "explanation": "tradition → la tradición.",
        "id": "es2_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say you want it — where 'it' refers to the feminine confirmation",
        "cues": [
          "since confirmación is feminine, 'it' is la",
          "the pronoun walks left: it I want",
          "I want is quiero"
        ],
        "idea_parts": [
          "feminine it → La",
          "I want → quiero"
        ],
        "target_answer": "La quiero",
        "meaning": "I want it (feminine)",
        "word_bank": [
          "La",
          "quiero",
          "Lo",
          "el",
          "confirmación"
        ],
        "explanation": "La quiero — because la confirmación is feminine, 'it' is la, placed before quiero.",
        "diagnosis": {
          "slip": "used lo instead of la",
          "cue": "Since la confirmación is feminine, its pronoun twin is la: La quiero."
        },
        "id": "es2_e4"
      },
      {
        "type": "literal_gloss",
        "prompt": "Which English word-for-word blueprint mirrors Spanish 'La quiero'?",
        "german": "La quiero",
        "natural": "I want it (the confirmation)",
        "options": [
          "I want it (the confirmation)",
          "It (feminine) I want",
          "The I want",
          "I want her to"
        ],
        "target_answer": "It (feminine) I want",
        "meaning": "I want it (the confirmation) (literal Spanish blueprint: It (feminine) I want)",
        "explanation": "La quiero places the feminine direct object pronoun right before the verb: 'It (fem.) I want'.",
        "id": "es2_e5"
      }
    ],
    "summary": {
      "outcome": "Convert English -tion nouns to Spanish -ción, assign feminine la, and use la as feminine 'it'.",
      "use_example": {
        "german": "Quiero la confirmación — la quiero hoy.",
        "english": "I want the confirmation — I want it today."
      },
      "takeaway": "-ción guarantees feminine gender for over a thousand nouns without memorization.",
      "curiosity_teaser": "Up next ([201] -CIÓN Is Always Feminine): test the 100% feminine rule across six more abstract nouns."
    },
    "twist": {
      "prompt": "Assemble: 'Do you want the tradition?'",
      "target_answer": "Quieres la tradición",
      "word_bank": [
        "Quieres",
        "la",
        "tradición",
        "el",
        "lo",
        "Quiero"
      ],
      "explanation": "¿Quieres la tradición? asks the question with rising vocal melody."
    },
    "foreshadow": {
      "line": "Every one of these -ción nouns hides an active verb waiting to be released. In Topic 3, we unlock the engine that turns nouns into action.",
      "resolvedIn": 3
    },
    "payoff": {
      "ofLesson": 1,
      "text": "In Topic 1, la was waiting for its true partner. Here it is: every single -ción noun is feminine and takes la."
    }
  },
  {
    "id": 201,
    "slug": "cion-always-feminine",
    "title": "-CIÓN Is Always Feminine",
    "subtitle": "la complicación, la pasión, la invitación — decoding grammatical gender straight from the suffix",
    "phase": 1,
    "shift_categories": [
      "cion"
    ],
    "word_ids": [
      "complicación",
      "pasión",
      "invitación",
      "situación",
      "atención",
      "decisión",
      "estación",
      "la",
      "no"
    ],
    "table_word_ids": [
      "complicación",
      "pasión",
      "invitación",
      "situación",
      "atención",
      "decisión"
    ],
    "hook": {
      "title": "Zero Gender Anxiety",
      "content": "Learners often dread memorizing whether each noun is masculine or feminine. With -ción and -sión, that anxiety vanishes: whether a word ends in -ción (la invitación, la situación, la atención, la estación) or -sión (la pasión, la decisión), it belongs to the feminine family."
    },
    "pattern": {
      "title": "Converting -tion and -sion in Real Sentences",
      "content": "Notice that Spanish simplifies double consonants like -ss- in 'passion' to a single s in la pasión, while keeping -cc- in la colección and la acción because each c makes a different sound (/k/ then /θ/ or /s/)!",
      "trap_note": "Never write double 'ss' in Spanish (*passión, *possible). Spanish always uses a single 's': pasión, posible."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "the complication",
            "german": "la complicación"
          },
          {
            "id": "p2",
            "english": "the passion",
            "german": "la pasión"
          },
          {
            "id": "p3",
            "english": "the invitation",
            "german": "la invitación"
          },
          {
            "id": "p4",
            "english": "the situation",
            "german": "la situación"
          },
          {
            "id": "p5",
            "english": "the attention",
            "german": "la atención"
          },
          {
            "id": "p6",
            "english": "the decision",
            "german": "la decisión"
          }
        ],
        "target_answer": "la complicación, la pasión, la invitación, la situación, la atención, la decisión",
        "meaning": "the complication, the passion, the invitation, the situation, the attention, the decision",
        "explanation": "Every -ción and -sión noun takes la.",
        "id": "es201_e1"
      },
      {
        "type": "derive",
        "prompt": "Convert with its feminine article: 'the invitation' →",
        "english_hint": "invitation → -ción",
        "target_answer": "la invitación",
        "meaning": "the invitation",
        "explanation": "invitation → la invitación.",
        "id": "es201_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How does Spanish spell 'the passion' (remembering single s)?",
        "options": [
          "la pasión",
          "la passión",
          "el pasión"
        ],
        "target_answer": "la pasión",
        "meaning": "the passion",
        "explanation": "Spanish never doubles s: la pasión.",
        "id": "es201_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I don't want the complication'",
        "target_answer": "No quiero la complicación",
        "meaning": "I don't want the complication",
        "word_bank": [
          "No",
          "quiero",
          "la",
          "complicación",
          "el",
          "lo",
          "pasión"
        ],
        "explanation": "No + quiero + la complicación.",
        "id": "es201_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Quiero la decisión",
        "replays": 2,
        "target_answer": "Quiero la decisión",
        "meaning": "I want the decision",
        "cues": [
          "I want: Quiero",
          "the (feminine): la",
          "decision: decisión"
        ],
        "explanation": "Quiero la decisión — -sión nouns follow the exact same feminine rule as -ción.",
        "affirmation": "Clean feminine article + -sión noun!",
        "id": "es201_e5"
      }
    ],
    "summary": {
      "outcome": "Decode grammatical gender for -ción and -sión nouns on sight and spell single-s cognates cleanly.",
      "use_example": {
        "german": "La situación es importante y quiero la decisión.",
        "english": "The situation is important and I want the decision."
      },
      "takeaway": "Both -ción and -sión are 100% feminine — and Spanish never doubles the letter s.",
      "curiosity_teaser": "Up next ([202] The Article Switch Gym): toggle rapidly between masculine el and feminine la."
    },
    "twist": {
      "prompt": "Assemble: 'I want the invitation'",
      "target_answer": "Quiero la invitación",
      "word_bank": [
        "Quiero",
        "la",
        "invitación",
        "el",
        "lo",
        "No"
      ],
      "explanation": "Quiero la invitación pairs quiero with the feminine -ción noun."
    }
  },
  {
    "id": 202,
    "slug": "article-switch-gym",
    "title": "The Article Switch Gym",
    "subtitle": "Mixed conversion drills: switch between masculine el and feminine la with confidence",
    "phase": 1,
    "shift_categories": [
      "cion"
    ],
    "word_ids": [
      "pastel",
      "café",
      "colección",
      "tradición",
      "hotel",
      "casa",
      "restaurante",
      "mesa"
    ],
    "table_word_ids": [
      "pastel",
      "café",
      "colección",
      "tradición",
      "hotel",
      "casa"
    ],
    "hook": {
      "title": "Mental Muscle Memory",
      "content": "True fluency is toggling between masculine el (and its pronoun lo) and feminine la (and its pronoun la) without pausing to calculate. Here we alternate across foods, places, and -ción concepts."
    },
    "pattern": {
      "title": "Welding the Article to the Noun",
      "content": "Think of el café, el pastel, el hotel, el restaurante and la casa, la mesa, la colección, la tradición as single acoustic units."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "the cake",
            "german": "el pastel"
          },
          {
            "id": "p2",
            "english": "the coffee",
            "german": "el café"
          },
          {
            "id": "p3",
            "english": "the collection",
            "german": "la colección"
          },
          {
            "id": "p4",
            "english": "the tradition",
            "german": "la tradición"
          },
          {
            "id": "p5",
            "english": "the hotel",
            "german": "el hotel"
          },
          {
            "id": "p6",
            "english": "the house",
            "german": "la casa"
          }
        ],
        "target_answer": "el pastel, el café, la colección, la tradición, el hotel, la casa",
        "meaning": "the cake, the coffee, the collection, the tradition, the hotel, the house",
        "explanation": "Masculine el for pastel, café, hotel; feminine la for colección, tradición, casa.",
        "id": "es202_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Choose the correct gender pair for 'the tradition' and 'the hotel':",
        "options": [
          "la tradición, el hotel",
          "el tradición, la hotel",
          "la tradición, la hotel"
        ],
        "target_answer": "la tradición, el hotel",
        "meaning": "the tradition, the hotel",
        "explanation": "la tradición is feminine (-ción); el hotel is masculine.",
        "id": "es202_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I want the coffee and the collection'",
        "target_answer": "Quiero el café y la colección",
        "meaning": "I want the coffee and the collection",
        "word_bank": [
          "Quiero",
          "el",
          "café",
          "y",
          "la",
          "colección",
          "lo",
          "hotel"
        ],
        "explanation": "Quiero el café y la colección switches cleanly from masculine el to feminine la.",
        "id": "es202_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say you want the house and the hotel",
        "cues": [
          "I want → Quiero",
          "the house → la casa",
          "and the hotel → y el hotel"
        ],
        "idea_parts": [
          "I want → Quiero",
          "the house → la casa",
          "and the hotel → y el hotel"
        ],
        "target_answer": "Quiero la casa y el hotel",
        "meaning": "I want the house and the hotel",
        "word_bank": [
          "Quiero",
          "la",
          "casa",
          "y",
          "el",
          "hotel",
          "lo",
          "colección",
          "pastel"
        ],
        "explanation": "Quiero la casa y el hotel — toggling feminine la and masculine el in one breath.",
        "id": "es202_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Quiero el pastel",
        "replays": 2,
        "target_answer": "Quiero el pastel",
        "meaning": "I want the cake",
        "cues": [
          "I want: Quiero",
          "the (masculine): el",
          "cake: pastel"
        ],
        "explanation": "Quiero el pastel — masculine article paired with pastel.",
        "affirmation": "Clean masculine article pairing!",
        "id": "es202_e5"
      }
    ],
    "summary": {
      "outcome": "Toggle between masculine el and feminine la with instinctive confidence.",
      "use_example": {
        "german": "Quiero el café y la colección.",
        "english": "I want the coffee and the collection."
      },
      "takeaway": "Articles in Spanish weld to their nouns — learn them as one sound unit.",
      "curiosity_teaser": "Up next ([3] The -ar Engine: Verbs from Nouns): turn your -ción nouns into active verbs."
    },
    "twist": {
      "prompt": "Assemble: 'Do you want the hotel?'",
      "target_answer": "Quieres el hotel",
      "word_bank": [
        "Quieres",
        "el",
        "hotel",
        "la",
        "casa",
        "Quiero"
      ],
      "explanation": "¿Quieres el hotel? asks the question with rising intonation."
    }
  },
  {
    "id": 3,
    "slug": "the-ar-verb-engine",
    "title": "The -ar Engine: Verbs from Nouns",
    "subtitle": "Noun → verb: confirmación → confirmar. Hundreds of infinitives, ready to use",
    "phase": 1,
    "shift_categories": [
      "ar_engine"
    ],
    "word_ids": [
      "confirmar",
      "organizar",
      "celebrar",
      "participar",
      "visitar",
      "invitar",
      "querer",
      "lo"
    ],
    "table_word_ids": [
      "confirmar",
      "organizar",
      "celebrar",
      "participar",
      "visitar",
      "invitar"
    ],
    "hook": {
      "title": "Converting Nouns into Pure Action",
      "content": "Every time English has a Latinate noun in -ation, Spanish has an active verb in -ar waiting for you. Confirmation becomes confirmar. Organization becomes organizar. Celebration becomes celebrar. Visitation becomes visitar. One rule hands you hundreds of first-conjugation infinitives for free!"
    },
    "pattern": {
      "title": "Stacking Infinitives & Hooking Pronouns to the Tail",
      "content": "Spanish infinitives end in -ar and stress the final syllable: confirMAR, celeBRAR. With quiero, no extra word like English 'to' is needed: quiero confirmar ('I want to confirm'). Even better: when an infinitive is present, object pronouns can hook directly onto the tail of the infinitive as one word: quiero invitarlo ('I want to invite him/it')!",
      "linguist_note": "Latin first-conjugation -āre verbs survived robustly in Spanish. Enclitic pronouns attach to infinitives, gerunds, and affirmative commands.",
      "trap_note": "Remember to strip the whole -ación before attaching -ar: celebración → celebrar (never *celebratar!)."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "to confirm",
            "german": "confirmar"
          },
          {
            "id": "p2",
            "english": "to organize",
            "german": "organizar"
          },
          {
            "id": "p3",
            "english": "to celebrate",
            "german": "celebrar"
          },
          {
            "id": "p4",
            "english": "to participate",
            "german": "participar"
          },
          {
            "id": "p5",
            "english": "to visit",
            "german": "visitar"
          },
          {
            "id": "p6",
            "english": "to invite",
            "german": "invitar"
          }
        ],
        "target_answer": "confirmar, organizar, celebrar, participar, visitar, invitar",
        "meaning": "to confirm, to organize, to celebrate, to participate, to visit, to invite",
        "explanation": "Strip -ación from the noun and attach -ar to release the verb.",
        "id": "es3_e1"
      },
      {
        "type": "morpheme_tiles",
        "prompt": "Convert 'confirmación' into its infinitive verb by swapping -ación for -ar:",
        "tile_options": [
          "confirm",
          "ar",
          "ación",
          "atar"
        ],
        "target_answer": "confirmar",
        "meaning": "confirmar (to confirm)",
        "explanation": "confirm + ar = confirmar.",
        "id": "es3_e2"
      },
      {
        "type": "derive",
        "prompt": "Turn the noun 'organización' into its Spanish infinitive verb:",
        "english_hint": "organización → strip -ación, add -ar",
        "target_answer": "organizar",
        "meaning": "to organize",
        "explanation": "organización → organizar.",
        "id": "es3_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say you want to invite him (hooking the pronoun onto the infinitive)",
        "cues": [
          "I want is quiero (no 'to' needed!)",
          "hook lo onto the tail of invitar: invitarlo"
        ],
        "idea_parts": [
          "I want → Quiero",
          "to invite him/it → invitarlo"
        ],
        "target_answer": "Quiero invitarlo",
        "meaning": "I want to invite him / it",
        "word_bank": [
          "Quiero",
          "invitarlo",
          "invitar",
          "el",
          "la",
          "celebrar"
        ],
        "explanation": "Quiero invitarlo — with an infinitive, the object pronoun hooks cleanly onto the tail.",
        "diagnosis": {
          "slip": "wrote invitar lo as two words",
          "cue": "When a pronoun follows an infinitive, it welds onto the end as a single word: invitarlo."
        },
        "id": "es3_e4"
      },
      {
        "type": "literal_gloss",
        "prompt": "Which English word-for-word blueprint mirrors Spanish 'Quiero invitarlo'?",
        "german": "Quiero invitarlo",
        "natural": "I want to invite him",
        "options": [
          "I want to invite him",
          "I-want to-invite-him",
          "I want him to invite",
          "Him I want invite"
        ],
        "target_answer": "I-want to-invite-him",
        "meaning": "I want to invite him (literal Spanish blueprint: I-want to-invite-him)",
        "explanation": "Quiero ('I-want') + invitarlo ('to-invite-him'): two Spanish words do the work of five English words!",
        "id": "es3_e5"
      }
    ],
    "summary": {
      "outcome": "Convert -ation nouns to -ar verbs, stack them after quiero without 'to', and hook pronouns onto infinitives.",
      "use_example": {
        "german": "Quiero confirmar la reservación y quiero invitarlo.",
        "english": "I want to confirm the reservation and I want to invite him."
      },
      "takeaway": "Spanish verbs stack without English 'to' — and pronouns can hook right onto the infinitive's tail.",
      "curiosity_teaser": "Up next ([301] The Celebrar Trap): make sure you never fall into the English '-ate' ghost-syllable trap."
    },
    "twist": {
      "prompt": "Assemble: 'Do you want to participate, a little?'",
      "target_answer": "Quieres participar, un poco",
      "word_bank": [
        "Quieres",
        "participar",
        "un",
        "poco",
        "celebrar",
        "la",
        "Quiero"
      ],
      "explanation": "¿Quieres participar, un poco? stacks question verb, infinitive, and qualifier."
    },
    "foreshadow": {
      "line": "We know how to want things and how to act; in Topic 4, we learn how to cleanly refuse them with a single word.",
      "resolvedIn": 4
    },
    "payoff": {
      "ofLesson": 2,
      "text": "Those -ción nouns you mastered in Topic 2 now become verbs: strip -ación and attach -ar."
    }
  },
  {
    "id": 301,
    "slug": "strip-dont-trim-celebrar-trap",
    "title": "The Celebrar Trap",
    "subtitle": "Strip the whole -ación before -ar arrives: celebración → celebrar, not *celebratar",
    "phase": 1,
    "shift_categories": [
      "ar_engine"
    ],
    "word_ids": [
      "celebrar",
      "invitar",
      "organizar",
      "reservar",
      "imaginar",
      "explicar",
      "querer"
    ],
    "table_word_ids": [
      "celebrar",
      "invitar",
      "organizar",
      "reservar",
      "imaginar",
      "explicar"
    ],
    "hook": {
      "title": "The English '-ate' Ghost Syllable Trap",
      "content": "When English speakers convert words like 'celebrate', 'participate', or 'explicate', their brain often tries to keep the English '-at-' syllable, inventing non-words like *celebratar or *participatar. That '-at-' is just a fossil from Latin past participles that English turned into verbs!"
    },
    "pattern": {
      "title": "Always Derive from the -CIÓN Noun",
      "content": "To avoid the ghost syllable 100% of the time, derive from the -ción noun by stripping the ENTIRE -ación chunk before adding -ar: celebr-ación → celebrar, invit-ación → invitar, imagin-ación → imaginar, explic-ación → explicar.",
      "trap_note": "Never add -ar onto the end of an English '-ate' verb (*celebratar, *participatar, *terminatar). Strip the whole -ación first!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "to celebrate",
            "german": "celebrar"
          },
          {
            "id": "p2",
            "english": "to invite",
            "german": "invitar"
          },
          {
            "id": "p3",
            "english": "to organize",
            "german": "organizar"
          },
          {
            "id": "p4",
            "english": "to reserve",
            "german": "reservar"
          },
          {
            "id": "p5",
            "english": "to imagine",
            "german": "imaginar"
          },
          {
            "id": "p6",
            "english": "to explain",
            "german": "explicar"
          }
        ],
        "target_answer": "celebrar, invitar, organizar, reservar, imaginar, explicar",
        "meaning": "to celebrate, to invite, to organize, to reserve, to imagine, to explain",
        "explanation": "Notice there is zero '-at-' syllable in celebrar, imaginar, or explicar.",
        "id": "es301_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Which form is the real Spanish infinitive for 'to celebrate'?",
        "options": [
          "celebrar",
          "celebratar",
          "celebrate"
        ],
        "target_answer": "celebrar",
        "meaning": "to celebrate",
        "explanation": "Strip -ación completely and add -ar: celebrar.",
        "id": "es301_e2"
      },
      {
        "type": "derive",
        "prompt": "Strip -ación from 'imaginación' to form 'to imagine':",
        "english_hint": "imaginación → -ar",
        "target_answer": "imaginar",
        "meaning": "to imagine",
        "explanation": "imaginación → imaginar (never *imaginatar).",
        "id": "es301_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I want to explain'",
        "target_answer": "Quiero explicar",
        "meaning": "I want to explain",
        "word_bank": [
          "Quiero",
          "explicar",
          "celebrar",
          "reservar",
          "la"
        ],
        "explanation": "Quiero + explicar (from explicación).",
        "id": "es301_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Quiero celebrar",
        "replays": 2,
        "target_answer": "Quiero celebrar",
        "meaning": "I want to celebrate",
        "cues": [
          "I want: Quiero",
          "to celebrate (three syllables, no -at-): celebrar"
        ],
        "explanation": "Quiero celebrar — sleek three-syllable infinitive.",
        "affirmation": "Zero ghost syllables — you nailed celebrar!",
        "id": "es301_e5"
      }
    ],
    "summary": {
      "outcome": "Avoid English '-ate' ghost syllables by stripping the entire -ación suffix before adding -ar.",
      "use_example": {
        "german": "Quiero celebrar y quiero explicar.",
        "english": "I want to celebrate and I want to explain."
      },
      "takeaway": "Strip, don't trim: remove the whole -ación before adding -ar.",
      "curiosity_teaser": "Up next ([302] Quiero + Infinitive Gym): chain your converted verbs with nouns and places."
    },
    "twist": {
      "prompt": "Assemble: 'Do you want to reserve, a little?'",
      "target_answer": "Quieres reservar, un poco",
      "word_bank": [
        "Quieres",
        "reservar",
        "un",
        "poco",
        "celebrar",
        "Quiero",
        "el"
      ],
      "explanation": "¿Quieres reservar, un poco? combines question verb, infinitive, and tag."
    }
  },
  {
    "id": 302,
    "slug": "quiero-plus-infinitive-gym",
    "title": "Quiero + Infinitive Gym",
    "subtitle": "quiero visitar, quiero participar — stack verbs smoothly without English 'to'",
    "phase": 1,
    "shift_categories": [
      "ar_engine"
    ],
    "word_ids": [
      "preparar",
      "considerar",
      "visitar",
      "participar",
      "terminar",
      "café",
      "querer"
    ],
    "table_word_ids": [
      "preparar",
      "considerar",
      "visitar",
      "participar",
      "terminar",
      "café"
    ],
    "hook": {
      "title": "Flowing Two-Verb Chains",
      "content": "Once you feel that Spanish infinitives already contain the idea of 'to' inside their -ar ending (preparar = 'to prepare', visitar = 'to visit'), chaining verbs becomes effortless."
    },
    "pattern": {
      "title": "Direct Verb-to-Verb Connection",
      "content": "English says 'I want TO prepare the coffee' (six words). Spanish says Quiero preparar el café (four words). Never insert a preposition like *a or *de after quiero!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "to prepare",
            "german": "preparar"
          },
          {
            "id": "p2",
            "english": "to consider",
            "german": "considerar"
          },
          {
            "id": "p3",
            "english": "to visit",
            "german": "visitar"
          },
          {
            "id": "p4",
            "english": "to participate",
            "german": "participar"
          },
          {
            "id": "p5",
            "english": "to finish",
            "german": "terminar"
          },
          {
            "id": "p6",
            "english": "the coffee",
            "german": "el café"
          }
        ],
        "target_answer": "preparar, considerar, visitar, participar, terminar, el café",
        "meaning": "to prepare, to consider, to visit, to participate, to finish, the coffee",
        "explanation": "preparación → preparar, consideración → considerar.",
        "id": "es302_e1"
      },
      {
        "type": "derive",
        "prompt": "Convert 'preparación' into its Spanish infinitive verb:",
        "english_hint": "preparación → -ar",
        "target_answer": "preparar",
        "meaning": "to prepare",
        "explanation": "preparación → preparar.",
        "id": "es302_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I want to prepare the coffee'",
        "target_answer": "Quiero preparar el café",
        "meaning": "I want to prepare the coffee",
        "word_bank": [
          "Quiero",
          "preparar",
          "el",
          "café",
          "la",
          "visitar",
          "considerar"
        ],
        "explanation": "Quiero + preparar + el café — direct verb-to-verb stacking.",
        "id": "es302_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say you want to consider the option",
        "cues": [
          "I want → Quiero",
          "to consider → considerar"
        ],
        "idea_parts": [
          "I want → Quiero",
          "to consider → considerar"
        ],
        "target_answer": "Quiero considerar",
        "meaning": "I want to consider",
        "word_bank": [
          "Quiero",
          "considerar",
          "preparar",
          "el",
          "café"
        ],
        "explanation": "Quiero considerar — two Spanish words for four English words.",
        "id": "es302_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Quiero visitar Madrid",
        "replays": 2,
        "target_answer": "Quiero visitar Madrid",
        "meaning": "I want to visit Madrid",
        "cues": [
          "I want: Quiero",
          "to visit: visitar",
          "city: Madrid"
        ],
        "explanation": "Quiero visitar Madrid — city names follow visitar directly.",
        "affirmation": "Smooth verb + destination chain!",
        "id": "es302_e5"
      }
    ],
    "summary": {
      "outcome": "Stack quiero/quieres + infinitive + direct object smoothly without inserting 'to'.",
      "use_example": {
        "german": "Quiero preparar el café y visitar Madrid.",
        "english": "I want to prepare the coffee and visit Madrid."
      },
      "takeaway": "The -ar ending already means 'to [verb]' — never add an extra word between quiero and the infinitive.",
      "curiosity_teaser": "Up next ([303] The -er & -ir Verb Bridges): unlock Spanish's other two infinitive families (comer, beber, comprender, vivir, decidir)."
    },
    "twist": {
      "prompt": "Assemble: 'Do you want to prepare the coffee?'",
      "target_answer": "Quieres preparar el café",
      "word_bank": [
        "Quieres",
        "preparar",
        "el",
        "café",
        "la",
        "lo",
        "Quiero"
      ],
      "explanation": "¿Quieres preparar el café? asks the question by intonation."
    }
  },
  {
    "id": 303,
    "slug": "er-and-ir-verb-bridges",
    "title": "The -er & -ir Verb Bridges",
    "subtitle": "comer (edible), beber (beverage), comprender (comprehend), vivir (vivid), decidir — Spanish's other two verb classes",
    "phase": 1,
    "shift_categories": [],
    "word_ids": [
      "comer",
      "beber",
      "comprender",
      "vender",
      "vivir",
      "decidir",
      "abrir",
      "querer"
    ],
    "table_word_ids": [
      "comer",
      "beber",
      "comprender",
      "vender",
      "vivir",
      "decidir"
    ],
    "hook": {
      "title": "Beyond -ar: The -er and -ir Families",
      "content": "While roughly 80% of Spanish verbs end in -ar, every Spanish verb belongs to one of three infinitive families: -ar, -er, or -ir. And your English Latinate vocabulary unlocks the -er and -ir families too! Look at comprender ('to understand' = comprehend), vender ('to sell' = vendor), decidir ('to decide', from decisión), vivir ('to live' = vivid, survive), beber ('to drink' = beverage, imbibe), comer ('to eat' = edible), and abrir ('to open' = aperture)!",
      "footnotes": [
        {
          "marker": "1",
          "title": "How 'Aperture' Unlocks 'Abrir'",
          "content": "A camera's aperture is the opening that lets light in (from Latin aperīre 'to open'). Rapid spoken Latin shortened aperīre to abrir ('to open')!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "How Present-Tense Endings Echo the Infinitive Vowel",
      "content": "In the 'I' (yo) form, all three regular families end in -o: hablo, como ('I eat'), vivo ('I live'), comprendo ('I understand'), decido ('I decide'). In the 'you' (tú) form, -ar verbs use -as (hablas), while BOTH -er and -ir verbs use -es (comes 'you eat', comprendes 'you understand', vives 'you live', decides 'you decide')!",
      "trap_note": "Don't say *decidar or *comprendar — remember that decidir (-ir) and comprender (-er) belong to the second and third verb families."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "to eat",
            "german": "comer"
          },
          {
            "id": "p2",
            "english": "to drink",
            "german": "beber"
          },
          {
            "id": "p3",
            "english": "to understand (comprehend)",
            "german": "comprender"
          },
          {
            "id": "p4",
            "english": "to sell (vend)",
            "german": "vender"
          },
          {
            "id": "p5",
            "english": "to live (vivid/survive)",
            "german": "vivir"
          },
          {
            "id": "p6",
            "english": "to decide",
            "german": "decidir"
          }
        ],
        "target_answer": "comer, beber, comprender, vender, vivir, decidir",
        "meaning": "to eat, to drink, to understand (comprehend), to sell (vend), to live (vivid/survive), to decide",
        "explanation": "-er and -ir complete the three Spanish infinitive endings (-ar, -er, -ir).",
        "id": "es303_e1"
      },
      {
        "type": "reverse_cognate",
        "prompt": "Spanish beber ('to drink', from Latin bibere) shares its root with which formal English noun for any drink?",
        "target_answer": "beverage",
        "meaning": "a beverage is literally 'that which is drunk'",
        "explanation": "Latin bibere gave Spanish beber, French boire, and English beverage and imbibe.",
        "id": "es303_e2"
      },
      {
        "type": "morpheme_tiles",
        "prompt": "Convert the noun 'decisión' into its -ir verb ('to decide'):",
        "tile_options": [
          "decid",
          "ir",
          "ar",
          "sión"
        ],
        "target_answer": "decidir",
        "meaning": "decidir (to decide)",
        "explanation": "decisión → decidir (and yo decido, tú decides).",
        "id": "es303_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I want to eat and drink'",
        "target_answer": "Quiero comer y beber",
        "meaning": "I want to eat and drink",
        "word_bank": [
          "Quiero",
          "comer",
          "y",
          "beber",
          "vivir",
          "el",
          "la"
        ],
        "explanation": "Quiero comer y beber — -er infinitives stack after quiero just like -ar verbs.",
        "id": "es303_e4"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that you understand (1st person singular of comprender)",
        "cues": [
          "strip -er from comprender",
          "add the universal yo ending -o: Comprendo"
        ],
        "idea_parts": [
          "I understand → Comprendo"
        ],
        "target_answer": "Comprendo",
        "meaning": "I understand",
        "word_bank": [
          "Comprendo",
          "Comprender",
          "Quiero",
          "Vivo",
          "el"
        ],
        "explanation": "Comprendo — one word for 'I understand'!",
        "diagnosis": {
          "slip": "left the infinitive comprender",
          "cue": "Drop -er and add -o for 'I': Comprendo."
        },
        "id": "es303_e5"
      }
    ],
    "summary": {
      "outcome": "Decode -er and -ir verbs through English cognates and conjugate yo (-o) and tú (-es) forms.",
      "use_example": {
        "german": "Comprendo el español y quiero vivir en Madrid.",
        "english": "I understand Spanish and I want to live in Madrid."
      },
      "takeaway": "All three verb classes (-ar, -er, -ir) take -o for 'I', while -er and -ir share -es for 'tú'.",
      "curiosity_teaser": "Up next ([4] Negation: The Clean 'No'): refuse any verb or pronoun in Spanish with a single word."
    },
    "twist": {
      "prompt": "Assemble: 'I want to decide'",
      "target_answer": "Quiero decidir",
      "word_bank": [
        "Quiero",
        "decidir",
        "comprender",
        "el",
        "la"
      ],
      "explanation": "Quiero decidir stacks want + -ir infinitive."
    }
  },
  {
    "id": 4,
    "slug": "negation-the-clean-no",
    "title": "Negation: The Clean 'No'",
    "subtitle": "Spanish negation is one direct word: no quiero, no lo quiero",
    "phase": 1,
    "shift_categories": [],
    "word_ids": [
      "no",
      "nada",
      "nunca",
      "nadie",
      "querer",
      "lo",
      "pastel",
      "comprender"
    ],
    "table_word_ids": [
      "no",
      "nada",
      "nunca",
      "nadie",
      "querer",
      "lo"
    ],
    "hook": {
      "title": "The Simplicity of Spanish Negation",
      "content": "English requires auxiliary helpers ('I do not want'); French wraps verbs in a two-part sandwich (ne...pas). Spanish is disarmingly direct: place no right in front of the verb cluster. No quiero ('I don't want'). No comprendo ('I don't understand'). That is all!"
    },
    "pattern": {
      "title": "Negative Shielding and Double Negation",
      "content": "When an object pronoun is present, no stands guard in front of the pronoun too: No lo quiero ('Not it I-want'). And when expressing 'nothing' (nada), 'never' (nunca), or 'nobody' (nadie) after the verb, Spanish uses negative concord (double negation): No quiero nada ('I don't want anything', lit. 'I not want nothing'). The second negative reinforces the refusal rather than canceling it!",
      "linguist_note": "Latin nōn became Spanish no. Negative concord is standard across all Romance languages.",
      "trap_note": "Never split the pronoun from the verb (*lo no quiero). The pronoun is glued to the verb, so no goes first: No lo quiero."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "no / not",
            "german": "no"
          },
          {
            "id": "p2",
            "english": "nothing / anything (after no)",
            "german": "nada"
          },
          {
            "id": "p3",
            "english": "never",
            "german": "nunca"
          },
          {
            "id": "p4",
            "english": "nobody",
            "german": "nadie"
          },
          {
            "id": "p5",
            "english": "I don't want",
            "german": "no quiero"
          },
          {
            "id": "p6",
            "english": "I don't want it",
            "german": "no lo quiero"
          }
        ],
        "target_answer": "no, nada, nunca, nadie, no quiero, no lo quiero",
        "meaning": "no / not, nothing / anything (after no), never, nobody, I don't want, I don't want it",
        "explanation": "no stands at the front of the verb cluster; nada, nunca, and nadie reinforce the negation.",
        "id": "es4_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Where does 'no' go when an object pronoun like 'lo' is present?",
        "options": [
          "Before the pronoun: No lo quiero",
          "Between pronoun and verb: *Lo no quiero",
          "After the verb: *Lo quiero no"
        ],
        "target_answer": "Before the pronoun: No lo quiero",
        "meaning": "I don't want it",
        "explanation": "lo quiero is a welded unit; no stands in front of both: No lo quiero.",
        "id": "es4_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I don't want the cake'",
        "target_answer": "No quiero el pastel",
        "meaning": "I don't want the cake",
        "word_bank": [
          "No",
          "quiero",
          "el",
          "pastel",
          "la",
          "nada",
          "lo"
        ],
        "explanation": "No + quiero + el pastel.",
        "id": "es4_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "refuse completely: say you don't want anything",
        "cues": [
          "start with No quiero",
          "reinforce at the end with nada: No quiero nada"
        ],
        "idea_parts": [
          "I don't want → No quiero",
          "anything/nothing → nada"
        ],
        "target_answer": "No quiero nada",
        "meaning": "I don't want anything",
        "word_bank": [
          "No",
          "quiero",
          "nada",
          "lo",
          "nunca",
          "pastel"
        ],
        "explanation": "No quiero nada — double negation is standard and mandatory in Spanish when nada follows the verb.",
        "diagnosis": {
          "slip": "omitted no before quiero",
          "cue": "When nada follows the verb, no must still stand before the verb: No quiero nada."
        },
        "id": "es4_e4"
      },
      {
        "type": "literal_gloss",
        "prompt": "Which English word-for-word blueprint mirrors Spanish 'No lo quiero'?",
        "german": "No lo quiero",
        "natural": "I don't want it",
        "options": [
          "I don't want it",
          "Not it I-want",
          "I not want it",
          "It not I want"
        ],
        "target_answer": "Not it I-want",
        "meaning": "I don't want it (literal Spanish blueprint: Not it I-want)",
        "explanation": "No ('Not') + lo ('it') + quiero ('I-want'): the negative marker leads the pronoun-verb block.",
        "id": "es4_e5"
      }
    ],
    "summary": {
      "outcome": "Negate Spanish verbs and pronoun-verb clusters with 'no' and reinforce refusals with nada and nunca.",
      "use_example": {
        "german": "No lo quiero — no quiero nada, gracias.",
        "english": "I don't want it — I don't want anything, thank you."
      },
      "takeaway": "Spanish negation needs zero helper verbs — place no before the entire pronoun-verb cluster.",
      "curiosity_teaser": "Up next ([401] Refusal Gym: no quiero nada): drill double negation with nada and nunca across converted verbs."
    },
    "twist": {
      "prompt": "Assemble: 'I don't understand'",
      "target_answer": "No comprendo",
      "word_bank": [
        "No",
        "comprendo",
        "quiero",
        "lo",
        "nada"
      ],
      "explanation": "No comprendo negates comprendo with one clean word."
    },
    "foreshadow": {
      "line": "Actions are one thing; being is another. In Topic 5, Spanish reveals why it has two completely different verbs for 'to be'.",
      "resolvedIn": 5
    },
    "payoff": {
      "ofLesson": 3,
      "text": "Negating any of the -ar, -er, or -ir verbs you unlocked in Topic 3 requires just one word in front: no."
    }
  },
  {
    "id": 401,
    "slug": "refusal-gym-no-quiero-nada",
    "title": "Refusal Gym: no quiero nada",
    "subtitle": "Double negation in Spanish: no quiero nada and no voy nunca reinforce the refusal",
    "phase": 1,
    "shift_categories": [
      "ar_engine"
    ],
    "word_ids": [
      "no",
      "nada",
      "nunca",
      "nadie",
      "celebrar",
      "participar",
      "invitar",
      "comer",
      "querer"
    ],
    "table_word_ids": [
      "no",
      "nada",
      "nunca",
      "nadie",
      "celebrar",
      "participar"
    ],
    "hook": {
      "title": "Double Negation Is Good Grammar in Spanish",
      "content": "In English schoolrooms, 'I don't want nothing' is scolded as a double negative. In Spanish, when nada ('nothing'), nunca ('never'), or nadie ('nobody') comes after the verb, you MUST put no before the verb: No quiero nada, No como nada!"
    },
    "pattern": {
      "title": "Negating Stacked Verb Chains",
      "content": "When two verbs are stacked (quiero participar), no stands at the very front of the train: No quiero participar ('I don't want to participate')."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I don't want anything",
            "german": "no quiero nada"
          },
          {
            "id": "p2",
            "english": "I don't eat anything",
            "german": "no como nada"
          },
          {
            "id": "p3",
            "english": "never",
            "german": "nunca"
          },
          {
            "id": "p4",
            "english": "nobody",
            "german": "nadie"
          },
          {
            "id": "p5",
            "english": "to celebrate",
            "german": "celebrar"
          },
          {
            "id": "p6",
            "english": "to participate",
            "german": "participar"
          }
        ],
        "target_answer": "no quiero nada, no como nada, nunca, nadie, celebrar, participar",
        "meaning": "I don't want anything, I don't eat anything, never, nobody, to celebrate, to participate",
        "explanation": "Double negation (no + verb + nada/nunca/nadie) is the standard Spanish pattern.",
        "id": "es401_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'I don't eat anything' in natural Spanish?",
        "options": [
          "No como nada",
          "Como nada",
          "No como algo"
        ],
        "target_answer": "No como nada",
        "meaning": "I don't eat anything",
        "explanation": "Spanish echoes the negation at both ends of the verb: No como nada.",
        "id": "es401_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I don't want to participate'",
        "target_answer": "No quiero participar",
        "meaning": "I don't want to participate",
        "word_bank": [
          "No",
          "quiero",
          "participar",
          "celebrar",
          "nada",
          "lo"
        ],
        "explanation": "No + quiero + participar.",
        "id": "es401_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say you don't want to celebrate",
        "cues": [
          "no goes before quiero",
          "to celebrate is celebrar"
        ],
        "idea_parts": [
          "I don't want → No quiero",
          "to celebrate → celebrar"
        ],
        "target_answer": "No quiero celebrar",
        "meaning": "I don't want to celebrate",
        "word_bank": [
          "No",
          "quiero",
          "celebrar",
          "participar",
          "nada",
          "el"
        ],
        "explanation": "No quiero celebrar — clean refusal of a stacked infinitive.",
        "id": "es401_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "No quiero nada",
        "replays": 2,
        "target_answer": "No quiero nada",
        "meaning": "I don't want anything",
        "cues": [
          "negation: No",
          "I want: quiero",
          "nothing/anything: nada"
        ],
        "explanation": "No quiero nada — the classic polite or firm refusal.",
        "affirmation": "Double negation mastered!",
        "id": "es401_e5"
      }
    ],
    "summary": {
      "outcome": "Build double-negative sentences with nada/nunca and negate stacked infinitives.",
      "use_example": {
        "german": "No quiero participar y no quiero comer nada.",
        "english": "I don't want to participate and I don't want to eat anything."
      },
      "takeaway": "In Spanish, two negatives after the verb don't cancel out — they harmonize.",
      "curiosity_teaser": "Up next ([402] Negating the Pronoun): practice placing no before walking pronouns and hooked infinitives."
    },
    "twist": {
      "prompt": "Assemble: 'You don't want to participate'",
      "target_answer": "No quieres participar",
      "word_bank": [
        "No",
        "quieres",
        "participar",
        "quiero",
        "nada",
        "celebrar"
      ],
      "explanation": "No quieres participar switches the verb to informal tú."
    }
  },
  {
    "id": 402,
    "slug": "negating-the-pronoun",
    "title": "Negating the Pronoun",
    "subtitle": "Placing no right before the walking pronoun: no lo quiero, no la quiero",
    "phase": 1,
    "shift_categories": [
      "ar_engine"
    ],
    "word_ids": [
      "no",
      "lo",
      "la",
      "confirmar",
      "organizar",
      "comprender",
      "ver",
      "comprar",
      "querer"
    ],
    "table_word_ids": [
      "no",
      "lo",
      "la",
      "confirmar",
      "organizar",
      "comprender"
    ],
    "hook": {
      "title": "The Shield in Front of the Pronoun",
      "content": "When an object pronoun walks in front of the verb (lo quiero, la comprendo), where does no go? It steps in front of the whole pronoun+verb unit: No lo quiero ('I don't want it'), No lo comprendo ('I don't understand it')."
    },
    "pattern": {
      "title": "Two Ways to Negate with an Infinitive",
      "content": "When an infinitive is present, the pronoun can either hook onto the tail of the infinitive (No quiero confirmarlo) OR walk to the front before quiero (No lo quiero confirmar) — and in both cases, no stands at the very front!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I don't want it (masculine)",
            "german": "no lo quiero"
          },
          {
            "id": "p2",
            "english": "I don't want it (feminine)",
            "german": "no la quiero"
          },
          {
            "id": "p3",
            "english": "I don't understand it",
            "german": "no lo comprendo"
          },
          {
            "id": "p4",
            "english": "to buy",
            "german": "comprar"
          },
          {
            "id": "p5",
            "english": "to see",
            "german": "ver"
          }
        ],
        "target_answer": "no lo quiero, no la quiero, no lo comprendo, comprar, ver",
        "meaning": "I don't want it (masculine), I don't want it (feminine), I don't understand it, to buy, to see",
        "explanation": "no always leads the entire pronoun + verb block.",
        "id": "es402_e1"
      },
      {
        "type": "morpheme_tiles",
        "prompt": "Hook 'lo' ('it') onto the tail of 'comprar' ('to buy') to form 'to buy it':",
        "tile_options": [
          "comprar",
          "lo",
          "el",
          "no"
        ],
        "target_answer": "comprarlo",
        "meaning": "comprarlo (to buy it)",
        "explanation": "comprar + lo welds into one word: comprarlo.",
        "id": "es402_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I don't want it (feminine)'",
        "target_answer": "No la quiero",
        "meaning": "I don't want it (feminine)",
        "word_bank": [
          "No",
          "la",
          "quiero",
          "lo",
          "confirmar",
          "el"
        ],
        "explanation": "No + la + quiero.",
        "id": "es402_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say you don't want it (referring to the masculine coffee)",
        "cues": [
          "no goes first: No",
          "masculine 'it' walks before quiero: lo quiero"
        ],
        "idea_parts": [
          "not → No",
          "it → lo",
          "I want → quiero"
        ],
        "target_answer": "No lo quiero",
        "meaning": "I don't want it",
        "word_bank": [
          "No",
          "lo",
          "quiero",
          "la",
          "comprender",
          "el"
        ],
        "explanation": "No lo quiero — no shields the front of the lo quiero block.",
        "id": "es402_e4"
      },
      {
        "type": "literal_gloss",
        "prompt": "Which English word-for-word blueprint mirrors Spanish 'No la quiero'?",
        "german": "No la quiero",
        "natural": "I don't want it (feminine)",
        "options": [
          "I don't want it (feminine)",
          "Not it (feminine) I-want",
          "It not I want",
          "I don't want her to"
        ],
        "target_answer": "Not it (feminine) I-want",
        "meaning": "I don't want it (feminine) (literal Spanish blueprint: Not it (feminine) I-want)",
        "explanation": "No stands before la, which stands before quiero.",
        "id": "es402_e5"
      }
    ],
    "summary": {
      "outcome": "Position 'no' before walking object pronouns and negated infinitives.",
      "use_example": {
        "german": "No la quiero — no quiero comprarla hoy.",
        "english": "I don't want it — I don't want to buy it today."
      },
      "takeaway": "Pronoun and conjugated verb form an inseparable block — no stands guard in front of both.",
      "curiosity_teaser": "Up next ([5] Ser & Estar: The Two Beings): discover why Spanish sees 'to be' through two different lenses."
    },
    "twist": {
      "prompt": "Assemble: 'I don't want to confirm it'",
      "target_answer": "No quiero confirmarlo",
      "word_bank": [
        "No",
        "quiero",
        "confirmarlo",
        "la",
        "lo",
        "comprar"
      ],
      "explanation": "With the infinitive, lo hooks onto the tail: No quiero confirmarlo."
    }
  },
  {
    "id": 5,
    "slug": "ser-estar-two-beings",
    "title": "Ser & Estar: The Two Beings",
    "subtitle": "es (characteristic) vs está (state/location) — the two ways Spanish sees existence",
    "phase": 1,
    "shift_categories": [],
    "word_ids": [
      "ser",
      "estar",
      "soy",
      "eres",
      "es",
      "estoy",
      "estás",
      "está",
      "muy",
      "bueno",
      "contento",
      "caliente"
    ],
    "table_word_ids": [
      "ser",
      "estar",
      "soy",
      "eres",
      "es",
      "estoy"
    ],
    "hook": {
      "title": "Two Ways of Looking at Existence",
      "content": "English collapses two very different thoughts into one word: 'is'. 'Coffee is a plant' (its essential nature) and 'The coffee is hot' (its current state) use the exact same verb. Spanish makes a crystal-clear distinction: ser (soy, eres, es) for what something IS by nature or identity, and estar (estoy, estás, está) for how or where something STANDS right now!"
    },
    "pattern": {
      "title": "Forget 'Permanent vs Temporary' — Think Essence vs State",
      "content": "Language Transfer warns against the old textbook rule 'permanent vs temporary'. Why? Because a person who has died is permanently dead, yet Spanish says está muerto ('is dead' — a state resulting from change), and a stadium is permanently in Madrid, yet Spanish says está en Madrid ('stands in Madrid' — a location)! Instead, ask: Is it an identity/characteristic (ser → es), or is it a state/location (estar, from Latin stāre 'to stand' → está)?",
      "linguist_note": "Latin esse fused with sedēre to form ser; Latin stāre ('to stand') formed estar.",
      "trap_note": "Never use ser for physical location of people or objects! Even if a house never moves, its location takes estar: La casa está aquí."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "to be (identity / characteristic)",
            "german": "ser"
          },
          {
            "id": "p2",
            "english": "to be (state / location)",
            "german": "estar"
          },
          {
            "id": "p3",
            "english": "I am (identity: ser)",
            "german": "soy"
          },
          {
            "id": "p4",
            "english": "I am (state/location: estar)",
            "german": "estoy"
          },
          {
            "id": "p5",
            "english": "is (characteristic: ser)",
            "german": "es"
          },
          {
            "id": "p6",
            "english": "is (state/location: estar)",
            "german": "está"
          }
        ],
        "target_answer": "ser, estar, soy, estoy, es, está",
        "meaning": "to be (identity / characteristic), to be (state / location), I am (identity: ser), I am (state/location: estar), is (characteristic: ser), is (state/location: estar)",
        "explanation": "ser (soy, eres, es) names identity and inherent traits; estar (estoy, estás, está) names state and location.",
        "id": "es5_e1"
      },
      {
        "type": "reverse_cognate",
        "prompt": "Spanish estar ('to be in a state or location') comes from Latin stāre ('to stand'). Which common English noun meaning 'condition' comes from the exact same Latin root?",
        "target_answer": "state",
        "meaning": "estar literally tells you what 'state' or 'station' something is in!",
        "explanation": "Latin stāre ('to stand') gave English state, status, station, and Spanish estar.",
        "id": "es5_e2"
      },
      {
        "type": "shift_select",
        "prompt": "The coffee is hot right now (a thermal state). How do you say 'The coffee is hot'?",
        "options": [
          "El café está caliente",
          "El café es caliente",
          "El café está bueno"
        ],
        "target_answer": "El café está caliente",
        "meaning": "The coffee is hot",
        "explanation": "Hotness of a cup of coffee is its current state, so Spanish uses está: El café está caliente.",
        "id": "es5_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that you are very happy (emotional state, masculine speaker)",
        "cues": [
          "happiness is a state, so use estoy ('I am')",
          "very is muy",
          "happy/content is contento"
        ],
        "idea_parts": [
          "I am (state) → Estoy",
          "very → muy",
          "happy → contento"
        ],
        "target_answer": "Estoy muy contento",
        "meaning": "I am very happy",
        "word_bank": [
          "Estoy",
          "muy",
          "contento",
          "Soy",
          "es",
          "bueno",
          "caliente"
        ],
        "explanation": "Estoy muy contento — emotions and moods are states, so they take estar.",
        "diagnosis": {
          "slip": "used Soy instead of Estoy",
          "cue": "Being happy/content is how you feel (your state), so use Estoy muy contento."
        },
        "id": "es5_e4"
      },
      {
        "type": "literal_gloss",
        "prompt": "Which English word-for-word blueprint mirrors Spanish 'El café está caliente'?",
        "german": "El café está caliente",
        "natural": "The coffee is hot",
        "options": [
          "The coffee is hot",
          "The coffee stands hot",
          "The coffee is essence hot",
          "Hot is the coffee"
        ],
        "target_answer": "The coffee stands hot",
        "meaning": "The coffee is hot (literal Spanish blueprint: The coffee stands hot)",
        "explanation": "Because estar comes from Latin stāre ('to stand'), El café está caliente literally pictures the coffee standing in a hot state.",
        "id": "es5_e5"
      }
    ],
    "summary": {
      "outcome": "Distinguish identity/characteristic (ser: soy, eres, es) from state/location (estar: estoy, estás, está).",
      "use_example": {
        "german": "El café es bueno y está caliente.",
        "english": "The coffee is good (quality) and it is hot (state)."
      },
      "takeaway": "ser = what something is (essence); estar = how or where something stands (state and location).",
      "curiosity_teaser": "Up next ([501] Es vs Está Gym): contrast es and está across locations and traits."
    },
    "twist": {
      "prompt": "Assemble: 'It is not good (characteristic)'",
      "target_answer": "No es bueno",
      "word_bank": [
        "No",
        "es",
        "bueno",
        "está",
        "muy",
        "caliente"
      ],
      "explanation": "No es bueno negates characteristic es."
    },
    "payoff": {
      "ofLesson": 4,
      "text": "Negating ser and estar follows the exact same clean rule from Topic 4: simply put no first — no es, no está."
    }
  },
  {
    "id": 501,
    "slug": "es-vs-esta-gym",
    "title": "Es vs Está Gym",
    "subtitle": "Characteristic vs state discrimination: es bueno vs está caliente, está aquí vs es grande",
    "phase": 1,
    "shift_categories": [],
    "word_ids": [
      "es",
      "está",
      "eres",
      "estás",
      "soy",
      "estoy",
      "aquí",
      "allí",
      "bueno",
      "contento",
      "frío"
    ],
    "table_word_ids": [
      "es",
      "está",
      "eres",
      "estás",
      "soy",
      "estoy"
    ],
    "hook": {
      "title": "Side-by-Side Discrimination",
      "content": "The fastest way to make ser vs estar instinctive is direct contrast: ¿Cómo estás? ('How are you doing right now?') vs ¿Cómo eres? ('What are you like as a person?')."
    },
    "pattern": {
      "title": "Location Always Takes Estar",
      "content": "Where is it standing? Estoy aquí ('I am here'), Está allí ('It is there'). Notice how both aquí and allí carry an acute accent on the final -í!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "you are (characteristic)",
            "german": "eres"
          },
          {
            "id": "p2",
            "english": "you are (state/location)",
            "german": "estás"
          },
          {
            "id": "p3",
            "english": "I am (characteristic)",
            "german": "soy"
          },
          {
            "id": "p4",
            "english": "I am (state/location)",
            "german": "estoy"
          },
          {
            "id": "p5",
            "english": "here",
            "german": "aquí"
          },
          {
            "id": "p6",
            "english": "there",
            "german": "allí"
          }
        ],
        "target_answer": "eres, estás, soy, estoy, aquí, allí",
        "meaning": "you are (characteristic), you are (state/location), I am (characteristic), I am (state/location), here, there",
        "explanation": "eres/soy for who you are; estás/estoy for how or where you are.",
        "id": "es501_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you ask a friend 'How are you?' (asking about their current state)?",
        "options": [
          "¿Cómo estás?",
          "¿Cómo eres?",
          "¿Dónde eres?"
        ],
        "target_answer": "¿Cómo estás?",
        "meaning": "How are you?",
        "explanation": "¿Cómo estás? asks how someone stands today; ¿Cómo eres? asks what kind of person they are.",
        "id": "es501_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I am here'",
        "target_answer": "Estoy aquí",
        "meaning": "I am here",
        "word_bank": [
          "Estoy",
          "aquí",
          "Soy",
          "es",
          "allí"
        ],
        "explanation": "Estoy + aquí — location always uses estar.",
        "id": "es501_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that the hotel is there",
        "cues": [
          "the hotel → El hotel",
          "is (location) → está",
          "there → allí"
        ],
        "idea_parts": [
          "subject → El hotel",
          "is (location) → está",
          "there → allí"
        ],
        "target_answer": "El hotel está allí",
        "meaning": "The hotel is there",
        "word_bank": [
          "El",
          "hotel",
          "está",
          "allí",
          "es",
          "aquí",
          "grande"
        ],
        "explanation": "El hotel está allí — even a massive building uses está for its location!",
        "diagnosis": {
          "slip": "used es for location",
          "cue": "Physical location always uses estar: El hotel está allí."
        },
        "id": "es501_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Estoy aquí hoy",
        "replays": 2,
        "target_answer": "Estoy aquí hoy",
        "meaning": "I am here today",
        "cues": [
          "I am (location): Estoy",
          "here: aquí",
          "today: hoy"
        ],
        "explanation": "Estoy aquí hoy — estar with place and time.",
        "affirmation": "Clean location sentence with Estoy!",
        "id": "es501_e5"
      }
    ],
    "summary": {
      "outcome": "Contrast soy/eres/es with estoy/estás/está across states and locations.",
      "use_example": {
        "german": "Estoy aquí en Madrid y el hotel está allí.",
        "english": "I am here in Madrid and the hotel is there."
      },
      "takeaway": "Whenever you state where a person, object, or building is located, reach for estar.",
      "curiosity_teaser": "Up next ([502] Description Agreement Gym): match adjective endings (-o/-a) to noun gender."
    },
    "twist": {
      "prompt": "Assemble: 'You are very good (character)'",
      "target_answer": "Eres muy bueno",
      "word_bank": [
        "Eres",
        "muy",
        "bueno",
        "Estás",
        "aquí",
        "contento"
      ],
      "explanation": "Eres muy bueno describes someone's inherent character."
    }
  },
  {
    "id": 502,
    "slug": "description-agreement-gym",
    "title": "Description Agreement Gym",
    "subtitle": "Matching adjective endings to gender: el pastel es bueno, la tradición es buena",
    "phase": 1,
    "shift_categories": [],
    "word_ids": [
      "bueno",
      "buena",
      "contento",
      "contenta",
      "grande",
      "pequeño",
      "caliente",
      "frío"
    ],
    "table_word_ids": [
      "bueno",
      "buena",
      "contento",
      "contenta",
      "grande",
      "pequeño"
    ],
    "hook": {
      "title": "Harmony Between Noun and Adjective",
      "content": "Spanish adjectives echo the gender of the noun they describe. A masculine noun calls for -o (el pastel es bueno, el café está frío); a feminine noun calls for -a (la tradición es buena, la casa es pequeña, el agua está fría)."
    },
    "pattern": {
      "title": "Two Endings (-o/-a) vs One Ending (-e)",
      "content": "Adjectives ending in -o in the dictionary flip to -a for feminine nouns. Adjectives ending in -e (grande, importante, diferente, caliente, posible) stay identical for both masculine and feminine!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "good (masculine)",
            "german": "bueno"
          },
          {
            "id": "p2",
            "english": "good (feminine)",
            "german": "buena"
          },
          {
            "id": "p3",
            "english": "happy (masculine)",
            "german": "contento"
          },
          {
            "id": "p4",
            "english": "happy (feminine)",
            "german": "contenta"
          },
          {
            "id": "p5",
            "english": "big (invariable in -e)",
            "german": "grande"
          },
          {
            "id": "p6",
            "english": "hot (invariable in -e)",
            "german": "caliente"
          }
        ],
        "target_answer": "bueno, buena, contento, contenta, grande, caliente",
        "meaning": "good (masculine), good (feminine), happy (masculine), happy (feminine), big (invariable in -e), hot (invariable in -e)",
        "explanation": "-o/-a adjectives change for gender; -e adjectives stay invariable.",
        "id": "es502_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Complete with the matching adjective form: 'La confirmación es ___.'",
        "options": [
          "buena",
          "bueno",
          "buenos"
        ],
        "target_answer": "buena",
        "meaning": "The confirmation is good",
        "explanation": "la confirmación is feminine (-ción), so bueno becomes buena.",
        "id": "es502_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'The tradition is good'",
        "target_answer": "La tradición es buena",
        "meaning": "The tradition is good",
        "word_bank": [
          "La",
          "tradición",
          "es",
          "buena",
          "bueno",
          "El",
          "está"
        ],
        "explanation": "La tradición es buena — full feminine concord.",
        "id": "es502_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that she is very happy (emotional state, feminine)",
        "cues": [
          "is (state) → Está",
          "very → muy",
          "happy (feminine) → contenta"
        ],
        "idea_parts": [
          "is (state) → Está",
          "very → muy",
          "happy (fem.) → contenta"
        ],
        "target_answer": "Está muy contenta",
        "meaning": "She is very happy",
        "word_bank": [
          "Está",
          "muy",
          "contenta",
          "contento",
          "Es",
          "buena"
        ],
        "explanation": "Está muy contenta — estar for emotional state + -a for a female subject.",
        "id": "es502_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "La casa es pequeña",
        "replays": 2,
        "target_answer": "La casa es pequeña",
        "meaning": "The house is small",
        "cues": [
          "The house: La casa",
          "is (characteristic): es",
          "small (feminine): pequeña"
        ],
        "explanation": "La casa es pequeña — pequeño changes -o to -a to match la casa.",
        "affirmation": "You caught the feminine -a agreement!",
        "id": "es502_e5"
      }
    ],
    "summary": {
      "outcome": "Match -o/-a adjectives to masculine and feminine nouns while keeping -e adjectives invariable.",
      "use_example": {
        "german": "El pastel es bueno y la tradición es buena.",
        "english": "The cake is good and the tradition is good."
      },
      "takeaway": "Adjectives in -o switch to -a for feminine nouns; adjectives in -e already fit both.",
      "curiosity_teaser": "Up next ([503] Chameleon Adjectives: listo, aburrido & rico): see how switching between ser and estar flips the meaning of the same adjective!"
    },
    "twist": {
      "prompt": "Assemble: 'The soup is hot'",
      "target_answer": "La sopa está caliente",
      "word_bank": [
        "La",
        "sopa",
        "está",
        "caliente",
        "es",
        "bueno",
        "El"
      ],
      "explanation": "La sopa está caliente — state takes está, and caliente ends in -e."
    }
  },
  {
    "id": 503,
    "slug": "chameleon-adjectives-ser-estar",
    "title": "Chameleon Adjectives: listo, aburrido & rico",
    "subtitle": "How ser vs estar flips adjective meaning: es listo (clever) vs está listo (ready), es aburrido (boring) vs está aburrido (bored), es rico (rich) vs está rico (delicious)",
    "phase": 1,
    "shift_categories": [],
    "word_ids": [
      "listo",
      "aburrido",
      "rico",
      "seguro",
      "bueno",
      "ser",
      "estar",
      "es",
      "está",
      "estoy"
    ],
    "table_word_ids": [
      "listo",
      "aburrido",
      "rico",
      "seguro",
      "bueno",
      "ser"
    ],
    "hook": {
      "title": "When the Verb Flips the Adjective's Meaning",
      "content": "Here is where the philosophy of ser (characteristic/essence) vs estar (current state) shines brightest. Take a single Spanish adjective like listo, aburrido, rico, or seguro. Pair it with ser and it names a trait; pair it with estar and it names a state — creating two completely different English words!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why English Needs '-ing' and '-ed' Where Spanish Uses Ser/Estar",
          "content": "In English, 'boring' (what causes the quality) and 'bored' (how you feel right now) require two different participle endings. In Spanish, one word (aburrido) does both jobs simply by switching from es to está!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Four Famous Chameleons",
      "content": "1) listo: es listo = 'he is clever/sharp' (trait) vs está listo = 'he is ready' (state).\n2) aburrido: es aburrido = 'he is boring' (trait — what he is like) vs está aburrido = 'he is bored' (state — how he feels).\n3) rico: es rico = 'he is rich/wealthy' vs ¡está rico! = 'it tastes delicious!'\n4) seguro: es seguro = 'it is safe' vs estoy seguro = 'I am sure/certain'!",
      "trap_note": "If you want to say 'I am bored', never say *Soy aburrido — that announces to the room 'I am a boring person'! Always say Estoy aburrido/a."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "he is clever / smart (trait)",
            "german": "es listo"
          },
          {
            "id": "p2",
            "english": "he is ready (state)",
            "german": "está listo"
          },
          {
            "id": "p3",
            "english": "it is boring (trait)",
            "german": "es aburrido"
          },
          {
            "id": "p4",
            "english": "he is bored (state)",
            "german": "está aburrido"
          },
          {
            "id": "p5",
            "english": "he is wealthy (trait)",
            "german": "es rico"
          },
          {
            "id": "p6",
            "english": "it tastes delicious! (state)",
            "german": "está rico"
          }
        ],
        "target_answer": "es listo, está listo, es aburrido, está aburrido, es rico, está rico",
        "meaning": "he is clever / smart (trait), he is ready (state), it is boring (trait), he is bored (state), he is wealthy (trait), it tastes delicious! (state)",
        "explanation": "ser vs estar does the work that English does with completely different words (clever/ready, boring/bored, rich/delicious).",
        "id": "es503_e1"
      },
      {
        "type": "shift_select",
        "prompt": "You are at the door with your coat on. How do you say 'I am ready' (male speaker)?",
        "options": [
          "Estoy listo",
          "Soy listo",
          "Estoy rico"
        ],
        "target_answer": "Estoy listo",
        "meaning": "I am ready",
        "explanation": "Being ready is a current state (Estoy listo); saying Soy listo claims 'I am clever/smart'!",
        "id": "es503_e2"
      },
      {
        "type": "shift_select",
        "prompt": "You take a bite of cake and want to say 'The cake is delicious!'. Which verb makes rico mean 'delicious'?",
        "options": [
          "El pastel está muy rico",
          "El pastel es muy rico",
          "El pastel soy rico"
        ],
        "target_answer": "El pastel está muy rico",
        "meaning": "The cake is delicious",
        "explanation": "With food, está rico / está bueno means 'it tastes delicious'; es rico means 'wealthy'.",
        "id": "es503_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I am sure (male speaker)'",
        "target_answer": "Estoy seguro",
        "meaning": "I am sure / certain",
        "word_bank": [
          "Estoy",
          "seguro",
          "Soy",
          "listo",
          "aburrido"
        ],
        "explanation": "Estoy seguro = 'I am sure/certain' (state of mind); Es seguro = 'It is safe'.",
        "id": "es503_e4"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that you are ready (female speaker: lista)",
        "cues": [
          "ready takes estar → Estoy",
          "feminine of listo → lista"
        ],
        "idea_parts": [
          "I am (state) → Estoy",
          "ready (fem.) → lista"
        ],
        "target_answer": "Estoy lista",
        "meaning": "I am ready (female speaker)",
        "word_bank": [
          "Estoy",
          "lista",
          "Soy",
          "listo",
          "rica",
          "segura"
        ],
        "explanation": "Estoy lista — estar makes lista mean 'ready' rather than 'clever'.",
        "diagnosis": {
          "slip": "used Soy lista",
          "cue": "Soy lista means 'I am clever'; for 'I am ready', use Estoy lista."
        },
        "id": "es503_e5"
      }
    ],
    "summary": {
      "outcome": "Flip adjective meaning between trait and state by pairing listo, aburrido, rico, and seguro with ser vs estar.",
      "use_example": {
        "german": "Estoy listo y el pastel está muy rico.",
        "english": "I am ready and the cake is delicious."
      },
      "takeaway": "Where English uses -ing vs -ed ('boring' vs 'bored'), Spanish uses es aburrido vs está aburrido!",
      "curiosity_teaser": "Up next ([6] The -dad & -mente Bridges): convert -ty nouns to -dad and -ly adverbs to -mente."
    },
    "twist": {
      "prompt": "Assemble: 'He is bored'",
      "target_answer": "Está aburrido",
      "word_bank": [
        "Está",
        "aburrido",
        "Es",
        "listo",
        "rico"
      ],
      "explanation": "Está aburrido = 'He is bored' (current feeling); Es aburrido = 'He is boring'."
    }
  },
  {
    "id": 6,
    "slug": "dad-and-mente-bridges",
    "title": "The -dad & -mente Bridges",
    "subtitle": "Quality nouns in -dad and adverbs in -mente: universidad, exactamente",
    "phase": 1,
    "shift_categories": [
      "dad",
      "mente"
    ],
    "word_ids": [
      "universidad",
      "posibilidad",
      "ciudad",
      "realidad",
      "verdad",
      "libertad",
      "exactamente",
      "naturalmente",
      "perfectamente"
    ],
    "table_word_ids": [
      "universidad",
      "posibilidad",
      "ciudad",
      "realidad",
      "verdad",
      "libertad"
    ],
    "hook": {
      "title": "Two More Floors of the Conversion Warehouse",
      "content": "In Topic 2 you unlocked over a thousand feminine nouns ending in -ción. Today you open two more massive conversion bridges: English abstract nouns ending in -ty (university, possibility, city, reality, verity/truth, liberty) turn into Spanish -dad or -tad (la universidad, la posibilidad, la ciudad, la realidad, la verdad, la libertad) — and every single one is 100% feminine! Meanwhile, English adverbs ending in -ly (exactly, naturally, perfectly) become Spanish adverbs in -mente!"
    },
    "pattern": {
      "title": "Why -mente Uses the Feminine Adjective",
      "content": "Why is 'exact' exacto, yet 'exactly' is exactamente (with an -a-)? Because in Rome, speakers formed adverbs by saying 'with an exact mind' — exactā mente — and the Latin word for 'mind' (mens, mentis) was feminine! Over centuries, exactā mente fused into one word: exactamente. When the adjective already ends in -e or a consonant (natural, fácil), -mente glues straight on: naturalmente, fácilmente!",
      "linguist_note": "Latin -tātem lenited to -dad in Spanish; Latin ablative [adj.] mente grammaticalized into the Romance adverbial suffix.",
      "trap_note": "Never say *exactomente or *perfectomente! Always flip -o to feminine -a before attaching -mente: exactamente, perfectamente."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "the university",
            "german": "la universidad"
          },
          {
            "id": "p2",
            "english": "the possibility",
            "german": "la posibilidad"
          },
          {
            "id": "p3",
            "english": "the city",
            "german": "la ciudad"
          },
          {
            "id": "p4",
            "english": "the truth",
            "german": "la verdad"
          },
          {
            "id": "p5",
            "english": "exactly",
            "german": "exactamente"
          },
          {
            "id": "p6",
            "english": "naturally",
            "german": "naturalmente"
          }
        ],
        "target_answer": "la universidad, la posibilidad, la ciudad, la verdad, exactamente, naturalmente",
        "meaning": "the university, the possibility, the city, the truth, exactly, naturally",
        "explanation": "-ty converts to feminine -dad/-tad; -ly converts to feminine adjective + -mente.",
        "id": "es6_e1"
      },
      {
        "type": "morpheme_tiles",
        "prompt": "Build 'perfectly' in Spanish by combining the feminine adjective stem and -mente:",
        "tile_options": [
          "perfecta",
          "mente",
          "perfecto",
          "dad"
        ],
        "target_answer": "perfectamente",
        "meaning": "perfectamente (perfectly)",
        "explanation": "perfecta ('with a perfect mind') + mente = perfectamente.",
        "id": "es6_e2"
      },
      {
        "type": "derive",
        "prompt": "Convert with its feminine article: 'the reality' →",
        "english_hint": "reality → -dad",
        "target_answer": "la realidad",
        "meaning": "the reality",
        "explanation": "reality → la realidad (100% feminine).",
        "id": "es6_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that you understand perfectly",
        "cues": [
          "I understand → Comprendo",
          "perfectly → perfectamente"
        ],
        "idea_parts": [
          "I understand → Comprendo",
          "perfectly → perfectamente"
        ],
        "target_answer": "Comprendo perfectamente",
        "meaning": "I understand perfectly",
        "word_bank": [
          "Comprendo",
          "perfectamente",
          "exactamente",
          "naturalmente",
          "verdad"
        ],
        "explanation": "Comprendo perfectamente — two Latinate cognates working together.",
        "diagnosis": {
          "slip": "wrote perfectomente",
          "cue": "Remember that Latin mente ('mind') was feminine, so exacto/perfecto switch to -a- before -mente: perfectamente."
        },
        "id": "es6_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Es la verdad",
        "replays": 2,
        "target_answer": "Es la verdad",
        "meaning": "It is the truth",
        "cues": [
          "It is (characteristic): Es",
          "the (feminine): la",
          "truth (verity): verdad"
        ],
        "explanation": "Es la verdad — verdad shares its root with English 'verity' and 'verdict'.",
        "affirmation": "You caught the -dad noun and its feminine article!",
        "id": "es6_e5"
      }
    ],
    "summary": {
      "outcome": "Convert English -ty nouns to feminine -dad/-tad and form -mente adverbs from feminine adjectives.",
      "use_example": {
        "german": "La universidad es grande y comprendo perfectamente.",
        "english": "The university is big and I understand perfectly."
      },
      "takeaway": "Every -dad/-tad noun takes la — and -mente always attaches to the feminine adjective form.",
      "curiosity_teaser": "Up next ([601] The -dad Feminine Squad): master ciudad, verdad, libertad, and realidad in context."
    },
    "twist": {
      "prompt": "Assemble: 'The city is big'",
      "target_answer": "La ciudad es grande",
      "word_bank": [
        "La",
        "ciudad",
        "es",
        "grande",
        "El",
        "está",
        "universidad"
      ],
      "explanation": "La ciudad es grande — ciudad is feminine (-dad)."
    },
    "foreshadow": {
      "line": "With nouns, verbs, adjectives, and adverbs in place, Topic 7 opens the question words (¿dónde?, ¿qué?, ¿por qué?) that drive real conversation.",
      "resolvedIn": 7
    },
    "payoff": {
      "ofLesson": 5,
      "text": "In Topic 5 you saw adjectives change -o to -a for feminine nouns (buena, contenta); now that same feminine -a powers every -mente adverb!"
    }
  },
  {
    "id": 601,
    "slug": "dad-feminine-squad",
    "title": "The -dad Feminine Squad",
    "subtitle": "-ty → -dad: ciudad, realidad, verdad — 100% feminine nouns decoded instantly",
    "phase": 1,
    "shift_categories": [
      "dad"
    ],
    "word_ids": [
      "universidad",
      "posibilidad",
      "ciudad",
      "realidad",
      "verdad",
      "libertad",
      "hermoso",
      "importante"
    ],
    "table_word_ids": [
      "universidad",
      "posibilidad",
      "ciudad",
      "realidad",
      "verdad",
      "libertad"
    ],
    "hook": {
      "title": "Another Airtight Gender Rule",
      "content": "Just like -ción in Topic 2, the -dad and -tad family has zero masculine rebels: la universidad, la posibilidad, la ciudad, la realidad, la verdad, la libertad are all feminine."
    },
    "pattern": {
      "title": "Verdict, Civic, and Liberty",
      "content": "Notice how 'truth' in Spanish (la verdad) is the sibling of English 'verity' and 'verdict' ('speaking the truth'), while la ciudad ('the city') comes from Latin cīvitātem (English 'civic' and 'citizen')!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "the city",
            "german": "la ciudad"
          },
          {
            "id": "p2",
            "english": "the reality",
            "german": "la realidad"
          },
          {
            "id": "p3",
            "english": "the truth",
            "german": "la verdad"
          },
          {
            "id": "p4",
            "english": "the freedom / liberty",
            "german": "la libertad"
          },
          {
            "id": "p5",
            "english": "the possibility",
            "german": "la posibilidad"
          },
          {
            "id": "p6",
            "english": "the university",
            "german": "la universidad"
          }
        ],
        "target_answer": "la ciudad, la realidad, la verdad, la libertad, la posibilidad, la universidad",
        "meaning": "the city, the reality, the truth, the freedom / liberty, the possibility, the university",
        "explanation": "All six end in -dad or -tad and take feminine la.",
        "id": "es601_e1"
      },
      {
        "type": "reverse_cognate",
        "prompt": "Spanish la verdad ('the truth', from Latin vēritātem) shares its root with which English courtroom word meaning 'a true saying'?",
        "target_answer": "verdict",
        "meaning": "a verdict (ver-dict) is literally 'speaking the truth'",
        "explanation": "Latin vērus ('true') + dīcere ('to say') gave verdict; vēritātem gave Spanish verdad.",
        "id": "es601_e2"
      },
      {
        "type": "derive",
        "prompt": "Convert with its feminine article: 'the freedom / liberty' →",
        "english_hint": "liberty → -tad",
        "target_answer": "la libertad",
        "meaning": "the freedom / liberty",
        "explanation": "liberty → la libertad.",
        "id": "es601_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'The city is beautiful'",
        "target_answer": "La ciudad es hermosa",
        "meaning": "The city is beautiful",
        "word_bank": [
          "La",
          "ciudad",
          "es",
          "hermosa",
          "El",
          "hermoso",
          "está"
        ],
        "explanation": "La ciudad es hermosa — hermosa agrees in the feminine with la ciudad.",
        "id": "es601_e4"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that freedom is very important",
        "cues": [
          "the freedom → La libertad",
          "is → es",
          "very important → muy importante"
        ],
        "idea_parts": [
          "subject → La libertad",
          "verb → es",
          "description → muy importante"
        ],
        "target_answer": "La libertad es muy importante",
        "meaning": "Freedom is very important",
        "word_bank": [
          "La",
          "libertad",
          "es",
          "muy",
          "importante",
          "El",
          "está",
          "verdad"
        ],
        "explanation": "La libertad es muy importante — Spanish uses the definite article la before abstract nouns like libertad!",
        "diagnosis": {
          "slip": "omitted La before libertad",
          "cue": "When talking about abstract concepts in general ('Freedom is important'), Spanish includes the article: La libertad."
        },
        "id": "es601_e5"
      }
    ],
    "summary": {
      "outcome": "Decode -dad and -tad nouns with 100% feminine agreement and use la before abstract nouns.",
      "use_example": {
        "german": "La ciudad es hermosa y la libertad es muy importante.",
        "english": "The city is beautiful and freedom is very important."
      },
      "takeaway": "-dad and -tad nouns are always feminine — and abstract subjects wear their article (la libertad).",
      "curiosity_teaser": "Up next ([602] The -mente Adverb Factory): build adverbs and see why tilde accents survive on fácilmente and rápidamente."
    },
    "twist": {
      "prompt": "Assemble: 'It is a possibility'",
      "target_answer": "Es una posibilidad",
      "word_bank": [
        "Es",
        "una",
        "posibilidad",
        "un",
        "Está",
        "realidad"
      ],
      "explanation": "Es una posibilidad uses feminine una."
    }
  },
  {
    "id": 602,
    "slug": "mente-adverb-factory",
    "title": "The -mente Adverb Factory",
    "subtitle": "-ly → feminine adjective + -mente: naturalmente, perfectamente, rápidamente",
    "phase": 1,
    "shift_categories": [
      "mente"
    ],
    "word_ids": [
      "exactamente",
      "naturalmente",
      "perfectamente",
      "totalmente",
      "rápidamente",
      "fácilmente",
      "actualmente"
    ],
    "table_word_ids": [
      "exactamente",
      "naturalmente",
      "perfectamente",
      "totalmente",
      "rápidamente",
      "fácilmente"
    ],
    "hook": {
      "title": "Two-in-One Words: Why Tildes Survive on -mente",
      "content": "When you attach -mente to an adjective that already has a written accent mark — like rápida ('rapid') or fácil ('easy') — Spanish keeps that original written accent mark right where it was: rápidamente, fácilmente! Why? Because phonetically, -mente adverbs still have two stressed beats ('with a RAPID MIND')!"
    },
    "pattern": {
      "title": "One Caveat: Actualmente",
      "content": "Remember our false-friend warning: mientras exactamente, perfectamente, totalmente, and naturalmente mean what they look like, actualmente means 'currently / at present' (never 'actually'!)."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "exactly",
            "german": "exactamente"
          },
          {
            "id": "p2",
            "english": "naturally",
            "german": "naturalmente"
          },
          {
            "id": "p3",
            "english": "perfectly",
            "german": "perfectamente"
          },
          {
            "id": "p4",
            "english": "totally",
            "german": "totalmente"
          },
          {
            "id": "p5",
            "english": "rapidly / quickly",
            "german": "rápidamente"
          },
          {
            "id": "p6",
            "english": "easily",
            "german": "fácilmente"
          }
        ],
        "target_answer": "exactamente, naturalmente, perfectamente, totalmente, rápidamente, fácilmente",
        "meaning": "exactly, naturally, perfectly, totally, rapidly / quickly, easily",
        "explanation": "Adjectives with a tilde (rápida, fácil) keep their tilde when -mente is attached.",
        "id": "es602_e1"
      },
      {
        "type": "morpheme_tiles",
        "prompt": "Build 'totally' in Spanish from the invariable adjective 'total':",
        "tile_options": [
          "total",
          "mente",
          "a",
          "dad"
        ],
        "target_answer": "totalmente",
        "meaning": "totalmente (totally)",
        "explanation": "Because total ends in a consonant (-l), it has no -a form — -mente glues directly onto total: totalmente.",
        "id": "es602_e2"
      },
      {
        "type": "shift_select",
        "prompt": "Which spelling of 'quickly / rapidly' properly preserves the original adjective's accent mark?",
        "options": [
          "rápidamente",
          "rapidamente",
          "rápidomente"
        ],
        "target_answer": "rápidamente",
        "meaning": "quickly, rapidly",
        "explanation": "rápida (feminine) + mente keeps the tilde on rá-: rápidamente.",
        "id": "es602_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'Currently I live in Madrid'",
        "target_answer": "Actualmente vivo en Madrid",
        "meaning": "Currently I live in Madrid",
        "word_bank": [
          "Actualmente",
          "vivo",
          "en",
          "Madrid",
          "Exactamente",
          "vivir",
          "el"
        ],
        "explanation": "Actualmente ('Currently') + vivo ('I live') + en Madrid.",
        "id": "es602_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Lo comprendo totalmente",
        "replays": 2,
        "target_answer": "Lo comprendo totalmente",
        "meaning": "I understand it totally",
        "cues": [
          "It (walking left): Lo",
          "I understand: comprendo",
          "totally: totalmente"
        ],
        "explanation": "Lo comprendo totalmente — object pronoun before verb, adverb after verb.",
        "affirmation": "Clean pronoun + verb + -mente adverb!",
        "id": "es602_e5"
      }
    ],
    "summary": {
      "outcome": "Build -mente adverbs from both -o/-a and invariable adjectives while preserving written tildes.",
      "use_example": {
        "german": "Lo comprendo perfectamente y hablo fácilmente.",
        "english": "I understand it perfectly and I speak easily."
      },
      "takeaway": "Adjectives in -o flip to -a before -mente; invariable adjectives glue directly; tildes always survive.",
      "curiosity_teaser": "Up next ([7] Questions: Inverted & Intonation): master Spanish question words and why they always wear an accent mark."
    },
    "twist": {
      "prompt": "Assemble: 'I understand it perfectly'",
      "target_answer": "Lo comprendo perfectamente",
      "word_bank": [
        "Lo",
        "comprendo",
        "perfectamente",
        "La",
        "totalmente",
        "quiero"
      ],
      "explanation": "Lo comprendo perfectamente places lo before comprendo."
    }
  },
  {
    "id": 7,
    "slug": "questions-inverted-intonation",
    "title": "Questions: Inverted & Intonation",
    "subtitle": "Inverted question marks ¿?, question words with accents, and por qué vs porque",
    "phase": 1,
    "shift_categories": [],
    "word_ids": [
      "dónde",
      "qué",
      "quién",
      "cuándo",
      "cuánto",
      "cómo",
      "por_qué",
      "porque",
      "aquí",
      "estar"
    ],
    "table_word_ids": [
      "dónde",
      "qué",
      "quién",
      "cuándo",
      "cuánto",
      "cómo"
    ],
    "hook": {
      "title": "Why Spanish Puts ¿ at the Front Door",
      "content": "In English, you can read ten words into a sentence before discovering a '?' at the end and realizing your voice should have gone up. Because Spanish turns statements into yes/no questions purely by vocal melody (¿Quieres café?), Spanish typography invented the opening ¿ in 1754 so readers know to lift their pitch before speaking the very first syllable!"
    },
    "pattern": {
      "title": "Question Words Always Wear a Written Accent — and Flip the Verb",
      "content": "Every Spanish question word carries an acute accent mark (qué 'what', dónde 'where', quién 'who', cuándo 'when', cuánto 'how much', cómo 'how', por qué 'why') to distinguish it from its unstressed connector twin (que 'that', donde 'where', cuando 'when', como 'as/like', porque 'because'). And after a question word, the verb comes immediately before any subject noun: ¿Dónde está el hotel? ('Where is the hotel?').",
      "linguist_note": "The Real Academia Española introduced inverted ¿ and ¡ in its 1754 Ortografía because Spanish syntax does not require auxiliary 'do' to mark interrogatives.",
      "trap_note": "Never use *qué before es when asking for a definition is not intended — for 'What is your problem/option?', Spanish uses ¿Cuál es...? (covered in Sprig 701)."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "where?",
            "german": "¿dónde?"
          },
          {
            "id": "p2",
            "english": "what?",
            "german": "¿qué?"
          },
          {
            "id": "p3",
            "english": "who?",
            "german": "¿quién?"
          },
          {
            "id": "p4",
            "english": "when?",
            "german": "¿cuándo?"
          },
          {
            "id": "p5",
            "english": "why? (two words, accented)",
            "german": "¿por qué?"
          },
          {
            "id": "p6",
            "english": "because (one word, no accent)",
            "german": "porque"
          }
        ],
        "target_answer": "¿dónde?, ¿qué?, ¿quién?, ¿cuándo?, ¿por qué?, porque",
        "meaning": "where?, what?, who?, when?, why? (two words, accented), because (one word, no accent)",
        "explanation": "All interrogatives carry a written accent mark; their relative/connector twins do not.",
        "id": "es7_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Choose the pair that properly separates 'Why?' from 'Because':",
        "options": [
          "¿Por qué? — Porque...",
          "¿Porque? — Por qué...",
          "¿Por que? — Porqué..."
        ],
        "target_answer": "¿Por qué? — Porque...",
        "meaning": "Why? — Because...",
        "explanation": "¿Por qué? ('for what?', two words with accent) asks why; porque (one word, unstressed) answers because.",
        "id": "es7_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'Where is the hotel?'",
        "target_answer": "Dónde está el hotel",
        "meaning": "Where is the hotel?",
        "word_bank": [
          "Dónde",
          "está",
          "el",
          "hotel",
          "es",
          "la",
          "aquí"
        ],
        "explanation": "¿Dónde está el hotel? — location always takes está.",
        "id": "es7_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "ask a friend what they want",
        "cues": [
          "What? → ¿Qué",
          "you want → quieres?"
        ],
        "idea_parts": [
          "What → Qué",
          "do you want → quieres"
        ],
        "target_answer": "Qué quieres",
        "meaning": "What do you want?",
        "word_bank": [
          "Qué",
          "quieres",
          "Dónde",
          "quiero",
          "porque",
          "el"
        ],
        "explanation": "¿Qué quieres? — two words where English needs four ('What do you want?').",
        "id": "es7_e4"
      },
      {
        "type": "literal_gloss",
        "prompt": "Which English word-for-word blueprint mirrors Spanish '¿Por qué no quieres?'?",
        "german": "¿Por qué no quieres?",
        "natural": "Why don't you want to?",
        "options": [
          "Why don't you want to?",
          "For what not want-you?",
          "Because not you want?",
          "What for do you want?"
        ],
        "target_answer": "For what not want-you?",
        "meaning": "Why don't you want to? (literal Spanish blueprint: For what not want-you?)",
        "explanation": "Por qué is literally 'for what?' followed directly by no quieres ('not want-you').",
        "id": "es7_e5"
      }
    ],
    "summary": {
      "outcome": "Ask questions with dónde, qué, quién, cuándo, cómo, and distinguish ¿por qué? from porque.",
      "use_example": {
        "german": "¿Por qué estás aquí? — Porque quiero hablar.",
        "english": "Why are you here? — Because I want to talk."
      },
      "takeaway": "Every question word wears an accent mark — and ¿por qué? (two words) answers with porque (one word).",
      "curiosity_teaser": "Up next ([701] dónde, qué & quién): drill the accented interrogatives across real situations."
    },
    "twist": {
      "prompt": "Assemble: 'Because it is very important'",
      "target_answer": "Porque es muy importante",
      "word_bank": [
        "Porque",
        "es",
        "muy",
        "importante",
        "Por",
        "qué",
        "está"
      ],
      "explanation": "Porque (one word, no accent) means 'because'."
    },
    "foreshadow": {
      "line": "You just passed the Decode Gate! In Topic 8, we enter Phase 2 with two adjective bridges (-ico and -al) that expand your descriptive power.",
      "resolvedIn": 8
    },
    "payoff": {
      "ofLesson": 6,
      "text": "With the nouns and adverbs from Topic 6 in hand, you can now ask and answer 'why' and 'where' about any city, university, or truth."
    }
  },
  {
    "id": 701,
    "slug": "donde-que-quien-gym",
    "title": "dónde, qué & quién",
    "subtitle": "The accented question words: ¿dónde está?, ¿qué quieres?, ¿quién es?, ¿cuándo?, ¿cuánto?",
    "phase": 1,
    "shift_categories": [],
    "word_ids": [
      "dónde",
      "qué",
      "quién",
      "cuándo",
      "cuánto",
      "cuál",
      "cómo",
      "estar",
      "ser"
    ],
    "table_word_ids": [
      "dónde",
      "qué",
      "quién",
      "cuándo",
      "cuánto",
      "cuál"
    ],
    "hook": {
      "title": "The Full Interrogative Crew",
      "content": "Meet the complete Spanish question toolkit: ¿dónde? (where), ¿qué? (what), ¿quién? (who — plural ¿quiénes?), ¿cuándo? (when), ¿cuánto? (how much), ¿cómo? (how), and ¿cuál? (which / what)."
    },
    "pattern": {
      "title": "¿Qué es? vs ¿Cuál es?",
      "content": "When asking for a definition ('What is a mesa?'), use ¿Qué es...? When asking someone to identify one item among possibilities ('What is your problem / option / reservation?'), Spanish uses ¿Cuál es...?: ¿Cuál es el problema? ('What is the problem?')."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "where?",
            "german": "¿dónde?"
          },
          {
            "id": "p2",
            "english": "what?",
            "german": "¿qué?"
          },
          {
            "id": "p3",
            "english": "who?",
            "german": "¿quién?"
          },
          {
            "id": "p4",
            "english": "when?",
            "german": "¿cuándo?"
          },
          {
            "id": "p5",
            "english": "how much?",
            "german": "¿cuánto?"
          },
          {
            "id": "p6",
            "english": "which / what (before es)?",
            "german": "¿cuál?"
          }
        ],
        "target_answer": "¿dónde?, ¿qué?, ¿quién?, ¿cuándo?, ¿cuánto?, ¿cuál?",
        "meaning": "where?, what?, who?, when?, how much?, which / what (before es)?",
        "explanation": "All six carry a written tilde on the stressed vowel.",
        "id": "es701_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you ask 'What is the problem?' in natural Spanish?",
        "options": [
          "¿Cuál es el problema?",
          "¿Qué está el problema?",
          "¿Quién es el problema?"
        ],
        "target_answer": "¿Cuál es el problema?",
        "meaning": "What is the problem?",
        "explanation": "Before es + noun ('What is the problem/idea/option?'), Spanish prefers ¿Cuál es...?",
        "id": "es701_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'Who is he?'",
        "target_answer": "Quién es",
        "meaning": "Who is he / she?",
        "word_bank": [
          "Quién",
          "es",
          "Dónde",
          "está",
          "Qué"
        ],
        "explanation": "¿Quién es? asks for identity, so it pairs with es (ser).",
        "id": "es701_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "ask where the restaurant is",
        "cues": [
          "Where → ¿Dónde",
          "is (location) → está",
          "the restaurant → el restaurante?"
        ],
        "idea_parts": [
          "Where → Dónde",
          "is (location) → está",
          "the restaurant → el restaurante"
        ],
        "target_answer": "Dónde está el restaurante",
        "meaning": "Where is the restaurant?",
        "word_bank": [
          "Dónde",
          "está",
          "el",
          "restaurante",
          "Qué",
          "es",
          "la",
          "casa"
        ],
        "explanation": "¿Dónde está el restaurante? — dónde + está + subject.",
        "id": "es701_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Dónde está la estación",
        "replays": 2,
        "target_answer": "Dónde está la estación",
        "meaning": "Where is the station?",
        "cues": [
          "Where: Dónde",
          "is (location): está",
          "the station: la estación"
        ],
        "explanation": "¿Dónde está la estación? — the traveler's essential question.",
        "affirmation": "You nailed ¿Dónde está la estación?!",
        "id": "es701_e5"
      }
    ],
    "summary": {
      "outcome": "Ask questions with dónde, qué, quién, cuándo, cuánto, and cuál.",
      "use_example": {
        "german": "¿Dónde está la estación y cuál es el problema?",
        "english": "Where is the station and what is the problem?"
      },
      "takeaway": "Pair ¿dónde? with está (location) and ¿quién? / ¿cuál? with es (identity).",
      "curiosity_teaser": "Up next ([702] por qué vs porque): master the contrast between asking why and answering because."
    },
    "twist": {
      "prompt": "Assemble: 'Where is the house?'",
      "target_answer": "Dónde está la casa",
      "word_bank": [
        "Dónde",
        "está",
        "la",
        "casa",
        "es",
        "Qué",
        "el"
      ],
      "explanation": "¿Dónde está la casa? uses está for location."
    }
  },
  {
    "id": 702,
    "slug": "por-que-vs-porque",
    "title": "por qué vs porque",
    "subtitle": "Asking why (por qué, two words accented) vs answering because (porque, one word)",
    "phase": 1,
    "shift_categories": [],
    "word_ids": [
      "por_qué",
      "porque",
      "querer",
      "comprender",
      "no",
      "importante",
      "posible"
    ],
    "table_word_ids": [
      "por_qué",
      "porque",
      "querer",
      "comprender",
      "no",
      "importante"
    ],
    "hook": {
      "title": "A Space and an Accent Mark",
      "content": "In speech, ¿por qué? ('why?') throws the vocal stress onto the final qué (/poɾ ˈke/), while porque ('because') stresses the first syllable (/ˈpoɾke/). In writing, that difference is captured by the space and the acute accent!"
    },
    "pattern": {
      "title": "Asking and Answering in One Breath",
      "content": "¿Por qué quieres estudiar español? — Porque es muy importante. Notice how cleanly because (porque) introduces any clause."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "why? (question)",
            "german": "por qué"
          },
          {
            "id": "p2",
            "english": "because (answer)",
            "german": "porque"
          },
          {
            "id": "p3",
            "english": "I don't understand",
            "german": "no comprendo"
          },
          {
            "id": "p4",
            "english": "it is possible",
            "german": "es posible"
          },
          {
            "id": "p5",
            "english": "it is important",
            "german": "es importante"
          }
        ],
        "target_answer": "por qué, porque, no comprendo, es posible, es importante",
        "meaning": "why? (question), because (answer), I don't understand, it is possible, it is important",
        "explanation": "por qué (2 words + tilde) = why; porque (1 word, no tilde) = because.",
        "id": "es702_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Fill in the question and answer: '¿___ no vas? — ___ no puedo.'",
        "options": [
          "Por qué / Porque",
          "Porque / Por qué",
          "Por que / Porqué"
        ],
        "target_answer": "Por qué / Porque",
        "meaning": "Why aren't you going? — Because I can't.",
        "explanation": "Question uses two words with an accent (Por qué); answer uses one word (Porque).",
        "id": "es702_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'Why don't you want the coffee?'",
        "target_answer": "Por qué no quieres el café",
        "meaning": "Why don't you want the coffee?",
        "word_bank": [
          "Por",
          "qué",
          "no",
          "quieres",
          "el",
          "café",
          "Porque",
          "quiero",
          "la"
        ],
        "explanation": "¿Por qué + no + quieres + el café?",
        "id": "es702_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "answer: 'Because I want to confirm'",
        "cues": [
          "Because (one word) → Porque",
          "I want → quiero",
          "to confirm → confirmar"
        ],
        "idea_parts": [
          "Because → Porque",
          "I want to confirm → quiero confirmar"
        ],
        "target_answer": "Porque quiero confirmar",
        "meaning": "Because I want to confirm",
        "word_bank": [
          "Porque",
          "quiero",
          "confirmar",
          "Por",
          "qué",
          "confirmación"
        ],
        "explanation": "Porque quiero confirmar — one word for 'because' + stacked verb.",
        "id": "es702_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Porque no es posible",
        "replays": 2,
        "target_answer": "Porque no es posible",
        "meaning": "Because it is not possible",
        "cues": [
          "Because: Porque",
          "it is not: no es",
          "possible: posible"
        ],
        "explanation": "Porque no es posible — clean negative explanation.",
        "affirmation": "Spot on with porque and no es!",
        "id": "es702_e5"
      }
    ],
    "summary": {
      "outcome": "Ask 'why?' with ¿por qué? and answer 'because' with porque across positive and negative clauses.",
      "use_example": {
        "german": "¿Por qué no quieres ir? — Porque no es posible hoy.",
        "english": "Why don't you want to go? — Because it is not possible today."
      },
      "takeaway": "Two words with an accent ask the question (¿por qué?); one welded word gives the reason (porque).",
      "curiosity_teaser": "Up next ([8] The -ico & -al Bridges): cross the Decode Gate into Topic 8 and unlock ratusan of adjectives in -ico and -al!"
    },
    "twist": {
      "prompt": "Assemble: 'Why is it important?'",
      "target_answer": "Por qué es importante",
      "word_bank": [
        "Por",
        "qué",
        "es",
        "importante",
        "Porque",
        "está",
        "no"
      ],
      "explanation": "¿Por qué es importante? asks why with two words."
    }
  },
  {
    "id": 8,
    "slug": "ico-and-al-bridges",
    "title": "The -ico & -al Bridges",
    "subtitle": "Adjectives in -ico with mandatory tildes, and invariable -al cognates",
    "phase": 2,
    "shift_categories": [
      "ico",
      "al"
    ],
    "word_ids": [
      "mágico",
      "público",
      "básico",
      "económico",
      "clásico",
      "fantástico",
      "natural",
      "central",
      "formal",
      "personal"
    ],
    "table_word_ids": [
      "mágico",
      "público",
      "básico",
      "económico",
      "clásico",
      "fantástico"
    ],
    "hook": {
      "title": "Two Instant Adjective Bridges",
      "content": "Welcome to Phase 2! Just as -ción and -dad handed you thousands of nouns, two suffixes hand you hundreds of descriptive adjectives on sight: English -ic / -ical becomes Spanish -ico / -ica (mágico, público, básico, económico, clásico, fantástico), and English -al stays spelled -al (natural, central, formal, personal, internacional, cultural)!"
    },
    "pattern": {
      "title": "The Esdrújula Accent on -ico vs Final Stress on -al",
      "content": "Every single -ico/-ica word in Spanish carries a written accent mark on the vowel RIGHT BEFORE -ico: MÁ-gi-co, PÚ-bli-co, BÁ-si-co, fan-TÁS-ti-co! Meanwhile, every -al word stresses the final syllable (na-tu-RAL, cen-TRAL) and NEVER changes for masculine vs feminine in the singular: el hotel central, la casa central!",
      "linguist_note": "Words stressed on the third-from-last syllable (esdrújulas) always carry a written accent mark in Spanish orthography.",
      "trap_note": "Never add an *-a to -al adjectives for feminine nouns (*una idea naturala is impossible). Say una idea natural!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "magical",
            "german": "mágico"
          },
          {
            "id": "p2",
            "english": "public",
            "german": "público"
          },
          {
            "id": "p3",
            "english": "basic",
            "german": "básico"
          },
          {
            "id": "p4",
            "english": "fantastic",
            "german": "fantástico"
          },
          {
            "id": "p5",
            "english": "natural (invariable)",
            "german": "natural"
          },
          {
            "id": "p6",
            "english": "central (invariable)",
            "german": "central"
          }
        ],
        "target_answer": "mágico, público, básico, fantástico, natural, central",
        "meaning": "magical, public, basic, fantastic, natural (invariable), central (invariable)",
        "explanation": "-ic/-ical → accented -ico/-ica; -al → invariable -al.",
        "id": "es8_e1"
      },
      {
        "type": "morpheme_tiles",
        "prompt": "Convert 'fantastic' into Spanish by snapping the accented stem and -ico together:",
        "tile_options": [
          "fantást",
          "ico",
          "ic",
          "al"
        ],
        "target_answer": "fantástico",
        "meaning": "fantástico (fantastic)",
        "explanation": "fantástico carries an esdrújula accent on the third syllable from the end.",
        "id": "es8_e2"
      },
      {
        "type": "derive",
        "prompt": "Convert English 'classic / classical' into its masculine Spanish adjective (remember the accent!):",
        "english_hint": "classic → -ico with tilde",
        "target_answer": "clásico",
        "meaning": "classic, classical",
        "explanation": "classic → clásico (single s, accent on á).",
        "id": "es8_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'The hotel is central and fantastic'",
        "target_answer": "El hotel es central y fantástico",
        "meaning": "The hotel is central and fantastic",
        "word_bank": [
          "El",
          "hotel",
          "es",
          "central",
          "y",
          "fantástico",
          "La",
          "está",
          "fantástica"
        ],
        "explanation": "El hotel es central (invariable -al) y fantástico (masculine -ico).",
        "id": "es8_e4"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that it is a personal opinion",
        "cues": [
          "It is → Es",
          "a opinion (feminine) → una opinión",
          "personal (after noun, invariable) → personal"
        ],
        "idea_parts": [
          "It is → Es",
          "an opinion → una opinión",
          "personal → personal"
        ],
        "target_answer": "Es una opinión personal",
        "meaning": "It is a personal opinion",
        "word_bank": [
          "Es",
          "una",
          "opinión",
          "personal",
          "un",
          "público",
          "mágico"
        ],
        "explanation": "Es una opinión personal — personal follows opinión and needs no -a ending because it ends in -l!",
        "diagnosis": {
          "slip": "put personal before opinión",
          "cue": "Place descriptive adjectives after the noun in Spanish: una opinión personal."
        },
        "id": "es8_e5"
      }
    ],
    "summary": {
      "outcome": "Convert -ic/-ical adjectives to accented -ico/-ica and use -al adjectives as gender-invariable descriptors.",
      "use_example": {
        "german": "Es un hotel central y fantástico.",
        "english": "It is a central and fantastic hotel."
      },
      "takeaway": "Every -ico/-ica word wears a written tilde; every -al word is gender-invariable in the singular.",
      "curiosity_teaser": "Up next ([801] The Esdrújula Accent Gym): train your voice and eye on the rhythmic antepenultimate stress of -ico words."
    },
    "twist": {
      "prompt": "Assemble: 'The music is fantastic'",
      "target_answer": "La música es fantástica",
      "word_bank": [
        "La",
        "música",
        "es",
        "fantástica",
        "fantástico",
        "El",
        "está"
      ],
      "explanation": "La música (feminine) triggers fantástica (-ica)."
    },
    "foreshadow": {
      "line": "Now that you can describe formal and personal situations, Topic 9 shows how Spanish encodes formal vs personal right into 'you' (tú vs usted).",
      "resolvedIn": 9
    },
    "payoff": {
      "ofLesson": 7,
      "text": "The accent mark rule you saw on question words in Topic 7 now guides your voice on every -ico adjective."
    }
  },
  {
    "id": 801,
    "slug": "esdrujula-accent-gym",
    "title": "The Esdrújula Accent Gym",
    "subtitle": "mágico, público, básico, económico, clásico — the accent mark tells your voice where to jump",
    "phase": 2,
    "shift_categories": [
      "ico"
    ],
    "word_ids": [
      "mágico",
      "público",
      "básico",
      "económico",
      "clásico",
      "fantástico",
      "música",
      "libro"
    ],
    "table_word_ids": [
      "mágico",
      "público",
      "básico",
      "económico",
      "clásico",
      "fantástico"
    ],
    "hook": {
      "title": "Why Spanish Accent Marks Are Your Best Friend",
      "content": "Normally, Spanish words ending in a vowel stress the SECOND-to-last syllable (ca-sa, li-bro, bue-no). Whenever a word breaks that default rhythm by stressing the THIRD-to-last syllable (called esdrújula), Spanish MUST print an accent mark over that vowel so you never have to guess the stress!"
    },
    "pattern": {
      "title": "Gender Agreement on -ico → -ica",
      "content": "Even when -ico switches to feminine -ica (un libro clásico → la música clásica), the stress stays on that exact same third-from-last syllable!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "magical",
            "german": "mágico"
          },
          {
            "id": "p2",
            "english": "public",
            "german": "público"
          },
          {
            "id": "p3",
            "english": "basic",
            "german": "básico"
          },
          {
            "id": "p4",
            "english": "economical / inexpensive",
            "german": "económico"
          },
          {
            "id": "p5",
            "english": "classic",
            "german": "clásico"
          },
          {
            "id": "p6",
            "english": "the music",
            "german": "la música"
          }
        ],
        "target_answer": "mágico, público, básico, económico, clásico, la música",
        "meaning": "magical, public, basic, economical / inexpensive, classic, the music",
        "explanation": "Every one of these words stresses the third syllable from the end.",
        "id": "es801_e1"
      },
      {
        "type": "derive",
        "prompt": "Convert 'economic / economical' into Spanish (masculine singular):",
        "english_hint": "economic → -ico with tilde on ó",
        "target_answer": "económico",
        "meaning": "economic, economical",
        "explanation": "economic → económico.",
        "id": "es801_e2"
      },
      {
        "type": "shift_select",
        "prompt": "Complete with feminine agreement: 'La música es ___.'",
        "options": [
          "fantástica",
          "fantástico",
          "fantastica"
        ],
        "target_answer": "fantástica",
        "meaning": "The music is fantastic",
        "explanation": "la música is feminine, so fantástico becomes fantástica (keeping its tilde!).",
        "id": "es801_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'It is a classic book'",
        "target_answer": "Es un libro clásico",
        "meaning": "It is a classic book",
        "word_bank": [
          "Es",
          "un",
          "libro",
          "clásico",
          "una",
          "clásica",
          "la"
        ],
        "explanation": "Es un libro clásico — noun first, adjective second.",
        "id": "es801_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "El hotel es muy económico",
        "replays": 2,
        "target_answer": "El hotel es muy económico",
        "meaning": "The hotel is very economical / inexpensive",
        "cues": [
          "The hotel: El hotel",
          "is: es",
          "very economical: muy económico"
        ],
        "explanation": "El hotel es muy económico — económico often means 'thrifty / good-value' in everyday Spanish.",
        "affirmation": "Clean esdrújula stress and tilde!",
        "id": "es801_e5"
      }
    ],
    "summary": {
      "outcome": "Pronounce, spell, and inflect -ico/-ica adjectives with their mandatory antepenultimate accent mark.",
      "use_example": {
        "german": "Es un libro clásico y la música es mágica.",
        "english": "It is a classic book and the music is magical."
      },
      "takeaway": "Whenever a Spanish word ends in -ico or -ica, the syllable right before it wears a written accent mark.",
      "curiosity_teaser": "Up next ([802] The -al Invariable Passport): use invariable -al cognates across masculine and feminine nouns."
    },
    "twist": {
      "prompt": "Assemble: 'The tradition is magical'",
      "target_answer": "La tradición es mágica",
      "word_bank": [
        "La",
        "tradición",
        "es",
        "mágica",
        "mágico",
        "El",
        "está"
      ],
      "explanation": "La tradición (feminine) pairs with mágica."
    }
  },
  {
    "id": 802,
    "slug": "al-invariable-passport",
    "title": "The -al Invariable Passport",
    "subtitle": "natural, central, formal, personal, internacional — adjectives that never change for gender in the singular",
    "phase": 2,
    "shift_categories": [
      "al"
    ],
    "word_ids": [
      "natural",
      "central",
      "formal",
      "personal",
      "internacional",
      "cultural",
      "tren",
      "opinión"
    ],
    "table_word_ids": [
      "natural",
      "central",
      "formal",
      "personal",
      "internacional",
      "cultural"
    ],
    "hook": {
      "title": "Identical Spelling, Invariable Gender",
      "content": "Look at natural, central, formal, personal, cultural: their singular spelling in Spanish is 100% identical to English! Even better, when -tion- sits inside an -al word ('international', 'traditional'), it simply becomes -cion-: internacional, tradicional!"
    },
    "pattern": {
      "title": "One Form for Both el and la",
      "content": "Because -al adjectives end in the consonant -l rather than -o, they do not change for gender: el tren internacional and la organización internacional use the exact same adjective form."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "natural",
            "german": "natural"
          },
          {
            "id": "p2",
            "english": "central",
            "german": "central"
          },
          {
            "id": "p3",
            "english": "formal",
            "german": "formal"
          },
          {
            "id": "p4",
            "english": "personal",
            "german": "personal"
          },
          {
            "id": "p5",
            "english": "international",
            "german": "internacional"
          },
          {
            "id": "p6",
            "english": "cultural",
            "german": "cultural"
          }
        ],
        "target_answer": "natural, central, formal, personal, internacional, cultural",
        "meaning": "natural, central, formal, personal, international, cultural",
        "explanation": "All six end in -al and stay unchanged for masculine vs feminine singular.",
        "id": "es802_e1"
      },
      {
        "type": "morpheme_tiles",
        "prompt": "Build 'international' in Spanish (remembering -tion- → -cion-):",
        "tile_options": [
          "inter",
          "nacion",
          "al",
          "tion"
        ],
        "target_answer": "internacional",
        "meaning": "internacional (international)",
        "explanation": "inter + nacion + al = internacional.",
        "id": "es802_e2"
      },
      {
        "type": "shift_select",
        "prompt": "Choose the correct phrase for 'the international organization':",
        "options": [
          "la organización internacional",
          "la organización internacionala",
          "la internacional organización"
        ],
        "target_answer": "la organización internacional",
        "meaning": "the international organization",
        "explanation": "Adjective follows the noun and never adds *-a.",
        "id": "es802_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'It is an international train'",
        "target_answer": "Es un tren internacional",
        "meaning": "It is an international train",
        "word_bank": [
          "Es",
          "un",
          "tren",
          "internacional",
          "una",
          "la",
          "personal"
        ],
        "explanation": "Es un tren internacional.",
        "id": "es802_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Es mi opinión personal",
        "replays": 2,
        "target_answer": "Es mi opinión personal",
        "meaning": "It is my personal opinion",
        "cues": [
          "It is: Es",
          "my opinion: mi opinión",
          "personal: personal"
        ],
        "explanation": "Es mi opinión personal — invariable -al adjective after feminine opinión.",
        "affirmation": "Perfect noun + invariable -al placement!",
        "id": "es802_e5"
      }
    ],
    "summary": {
      "outcome": "Deploy -al cognates after masculine and feminine nouns without changing their singular ending.",
      "use_example": {
        "german": "Es un tren internacional y una tradición cultural.",
        "english": "It is an international train and a cultural tradition."
      },
      "takeaway": "Spanish -al adjectives match English spelling and fit both masculine and feminine nouns.",
      "curiosity_teaser": "Up next ([9] tú & usted: The T-V Line): see how Spanish turns 'Your Mercy' into polite everyday address."
    },
    "twist": {
      "prompt": "Assemble: 'The station is central'",
      "target_answer": "La estación es central",
      "word_bank": [
        "La",
        "estación",
        "es",
        "central",
        "El",
        "está",
        "personal"
      ],
      "explanation": "La estación es central describes a permanent characteristic of the station."
    }
  },
  {
    "id": 9,
    "slug": "tu-and-usted-tv-line",
    "title": "tú & usted: The T-V Line",
    "subtitle": "Informal tú vs polite usted (worn-down Vuestra Merced), greetings and social register",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "tú",
      "usted",
      "hola",
      "gracias",
      "por_favor",
      "adiós",
      "señor",
      "señora",
      "estar",
      "querer"
    ],
    "table_word_ids": [
      "tú",
      "usted",
      "hola",
      "gracias",
      "por_favor",
      "adiós"
    ],
    "hook": {
      "title": "How 'Your Mercy' Became Usted",
      "content": "Why does Spanish use 3rd-person verb forms ('he/she wants' = quiere, 'he/she is' = está) when speaking politely to one person with usted? Because in Golden Age Spain, polite speakers didn't say 'you' directly — they addressed a stranger in the third person as Vuestra Merced ('Your Mercy / Your Grace'): 'What does Your Mercy wish?'. Over centuries of rapid speech, Vuestra Merced wore down to vuesarced → vusted → usted — keeping its 3rd-person verb forever!"
    },
    "pattern": {
      "title": "Dropping the -s to Step from tú to usted",
      "content": "Look at how easy the verb switch is between informal tú (friends, family, peers) and formal usted (elders, strangers, respectful service): simply remove the final -s of the tú form! tú quieres → usted quiere; tú estás → usted está; tú hablas → usted habla; tú tienes → usted tiene!",
      "linguist_note": "Vuestra Merced grammaticalized into usted between the 16th and 17th centuries, paralleling Portuguese você.",
      "trap_note": "When talking ABOUT Mr. or Mrs. García, use el señor / la señora; when speaking DIRECTLY to them, drop the article: Buenos días, señor."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "you (informal)",
            "german": "tú"
          },
          {
            "id": "p2",
            "english": "you (formal: 'Your Mercy')",
            "german": "usted"
          },
          {
            "id": "p3",
            "english": "how are you? (informal)",
            "german": "¿cómo estás?"
          },
          {
            "id": "p4",
            "english": "how are you? (formal)",
            "german": "¿cómo está usted?"
          },
          {
            "id": "p5",
            "english": "sir / Mr.",
            "german": "señor"
          },
          {
            "id": "p6",
            "english": "madam / Mrs.",
            "german": "señora"
          }
        ],
        "target_answer": "tú, usted, ¿cómo estás?, ¿cómo está usted?, señor, señora",
        "meaning": "you (informal), you (formal: 'Your Mercy'), how are you? (informal), how are you? (formal), sir / Mr., madam / Mrs.",
        "explanation": "Drop the -s from the tú verb (estás → está, quieres → quiere) to form the usted verb!",
        "id": "es9_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Why does 'usted' take 3rd-person verb forms (está, quiere, habla)?",
        "options": [
          "It evolved from 'Vuestra Merced' ('Your Mercy'), a 3rd-person title",
          "It is a plural pronoun",
          "It comes from Latin tū"
        ],
        "target_answer": "It evolved from 'Vuestra Merced' ('Your Mercy'), a 3rd-person title",
        "meaning": "you (formal)",
        "explanation": "Addressing someone as 'Your Mercy' naturally used 3rd-person verbs ('How is Your Mercy?').",
        "id": "es9_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble the formal question: 'How are you (formal)?'",
        "target_answer": "Cómo está usted",
        "meaning": "How are you (formal)?",
        "word_bank": [
          "Cómo",
          "está",
          "usted",
          "estás",
          "tú",
          "es"
        ],
        "explanation": "¿Cómo está usted? — drops the -s of estás and adds usted for clarity.",
        "id": "es9_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "ask politely (using usted): 'What do you want, sir?'",
        "cues": [
          "What → ¿Qué",
          "wants (usted form of querer: drop -s from quieres) → quiere",
          "sir → señor?"
        ],
        "idea_parts": [
          "What → Qué",
          "do you (formal) want → quiere",
          "sir → señor"
        ],
        "target_answer": "Qué quiere señor",
        "meaning": "What do you want, sir?",
        "word_bank": [
          "Qué",
          "quiere",
          "señor",
          "quieres",
          "tú",
          "señora",
          "estás"
        ],
        "explanation": "¿Qué quiere, señor? — dropping -s from quieres switches cleanly to polite usted.",
        "diagnosis": {
          "slip": "used quieres with señor",
          "cue": "When addressing señor or señora directly, use the polite usted form without -s: ¿Qué quiere, señor?"
        },
        "id": "es9_e4"
      },
      {
        "type": "literal_gloss",
        "prompt": "Which English word-for-word blueprint mirrors Spanish '¿Cómo está usted?'?",
        "german": "¿Cómo está usted?",
        "natural": "How are you (formal)?",
        "options": [
          "How are you (formal)?",
          "How stands Your-Mercy?",
          "How are thou?",
          "What is your mercy?"
        ],
        "target_answer": "How stands Your-Mercy?",
        "meaning": "How are you (formal)? (literal Spanish blueprint: How stands Your-Mercy?)",
        "explanation": "¿Cómo ('How') + está ('stands') + usted ('Your-Mercy')?",
        "id": "es9_e5"
      }
    ],
    "summary": {
      "outcome": "Switch between informal tú (with -s) and formal usted (without -s) and deploy polite greetings.",
      "use_example": {
        "german": "Buenos días, señora, ¿cómo está usted?",
        "english": "Good morning, madam, how are you?"
      },
      "takeaway": "Drop the final -s from the tú verb (estás → está, quieres → quiere) to speak politely with usted.",
      "curiosity_teaser": "Up next ([901] Addressing with Respect): practice flipping tú verbs into usted verbs in real dialogues."
    },
    "twist": {
      "prompt": "Assemble: 'What do you (formal) wish?'",
      "target_answer": "Qué desea usted",
      "word_bank": [
        "Qué",
        "desea",
        "usted",
        "deseas",
        "tú",
        "Cómo"
      ],
      "explanation": "¿Qué desea usted? uses desear ('to wish/desire') in the polite 3rd-person form."
    },
    "foreshadow": {
      "line": "Next in Topic 10: how Spanish expresses possession with tener ('to hold') and existence with hay ('there is / there are').",
      "resolvedIn": 10
    },
    "payoff": {
      "ofLesson": 8,
      "text": "In Topic 8 you learned the word formal; now Topic 9 shows how Spanish builds formality directly into its pronouns and verb endings."
    }
  },
  {
    "id": 901,
    "slug": "addressing-with-respect",
    "title": "Addressing with Respect",
    "subtitle": "Using 3rd-person verbs with usted: ¿cómo está usted? vs ¿cómo estás?",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "tú",
      "usted",
      "estás",
      "está",
      "eres",
      "es",
      "querer",
      "desear",
      "señor",
      "señora"
    ],
    "table_word_ids": [
      "tú",
      "usted",
      "estás",
      "está",
      "eres",
      "es"
    ],
    "hook": {
      "title": "The '-s' Switch",
      "content": "Because he, she, and usted all share the exact same 3rd-person verb form (está, es, quiere, desea), speakers often include the word usted in questions (¿Cómo está usted?, ¿Qué desea usted?) so the listener knows you are addressing them rather than talking about someone else!"
    },
    "pattern": {
      "title": "Comparing Informal and Formal Side by Side",
      "content": "Informal tú: ¿Cómo estás? / ¿Qué quieres? / ¿Hablas español?\nFormal usted: ¿Cómo está usted? / ¿Qué quiere usted? / ¿Habla usted español?"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "you are (tú, state)",
            "german": "estás"
          },
          {
            "id": "p2",
            "english": "you are (usted, state)",
            "german": "está usted"
          },
          {
            "id": "p3",
            "english": "you are (tú, identity)",
            "german": "eres"
          },
          {
            "id": "p4",
            "english": "you are (usted, identity)",
            "german": "es usted"
          },
          {
            "id": "p5",
            "english": "you want (tú)",
            "german": "quieres"
          },
          {
            "id": "p6",
            "english": "you want (usted)",
            "german": "quiere usted"
          }
        ],
        "target_answer": "estás, está usted, eres, es usted, quieres, quiere usted",
        "meaning": "you are (tú, state), you are (usted, state), you are (tú, identity), you are (usted, identity), you want (tú), you want (usted)",
        "explanation": "Removing the -s from estás/quieres gives the formal usted verb.",
        "id": "es901_e1"
      },
      {
        "type": "shift_select",
        "prompt": "You are speaking to an older stranger on a train. Which question is polite?",
        "options": [
          "¿Habla usted inglés?",
          "¿Hablas tú inglés?",
          "¿Hablar usted inglés?"
        ],
        "target_answer": "¿Habla usted inglés?",
        "meaning": "Do you (formal) speak English?",
        "explanation": "Habla (without -s) pairs with usted.",
        "id": "es901_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'Do you (formal) want the coffee?'",
        "target_answer": "Quiere usted el café",
        "meaning": "Do you (formal) want the coffee?",
        "word_bank": [
          "Quiere",
          "usted",
          "el",
          "café",
          "Quieres",
          "tú",
          "la"
        ],
        "explanation": "¿Quiere usted el café? — polite offer.",
        "id": "es901_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "ask a lady politely how she is: 'How are you, madam?'",
        "cues": [
          "How → ¿Cómo",
          "are (usted form) → está",
          "madam → señora?"
        ],
        "idea_parts": [
          "How → Cómo",
          "are (formal) → está",
          "madam → señora"
        ],
        "target_answer": "Cómo está señora",
        "meaning": "How are you, madam?",
        "word_bank": [
          "Cómo",
          "está",
          "señora",
          "estás",
          "señor",
          "es"
        ],
        "explanation": "¿Cómo está, señora? — polite 3rd-person verb without -s.",
        "id": "es901_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Qué desea usted",
        "replays": 2,
        "target_answer": "Qué desea usted",
        "meaning": "What would you like (formal)?",
        "cues": [
          "What: Qué",
          "wishes/desires: desea",
          "you (formal): usted"
        ],
        "explanation": "¿Qué desea usted? — what you will hear in every Spanish shop and restaurant.",
        "affirmation": "Polite service Spanish unlocked!",
        "id": "es901_e5"
      }
    ],
    "summary": {
      "outcome": "Convert informal tú questions into formal usted questions by dropping the verb's final -s.",
      "use_example": {
        "german": "¿Qué desea usted, señor? — Quiero un café, por favor.",
        "english": "What would you like, sir? — I want a coffee, please."
      },
      "takeaway": "tú keeps the -s (estás, quieres); usted drops the -s (está, quiere).",
      "curiosity_teaser": "Up next ([902] The Politeness Toolkit): master muchas gracias, por favor, buenos días, and buenas tardes."
    },
    "twist": {
      "prompt": "Assemble: 'Are you (formal) from Madrid?'",
      "target_answer": "Es usted de Madrid",
      "word_bank": [
        "Es",
        "usted",
        "de",
        "Madrid",
        "Eres",
        "Está",
        "tú"
      ],
      "explanation": "¿Es usted de Madrid? uses es (ser) for origin."
    }
  },
  {
    "id": 902,
    "slug": "politeness-toolkit",
    "title": "The Politeness Toolkit",
    "subtitle": "por favor, muchas gracias, buenos días, señor/señora — social courtesies in context",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "hola",
      "gracias",
      "mucho",
      "por_favor",
      "adiós",
      "buenos_días",
      "buenas_tardes",
      "buenas_noches",
      "señor",
      "señora"
    ],
    "table_word_ids": [
      "hola",
      "gracias",
      "mucho",
      "por_favor",
      "adiós",
      "buenos_días"
    ],
    "hook": {
      "title": "Why 'Buenos Días' Is Masculine While 'Buenas Tardes' Is Feminine",
      "content": "Have you ever wondered why Spanish says BUENOS días ('good morning') with masculine -os, yet BUENAS tardes ('good afternoon') and BUENAS noches ('good evening/night') with feminine -as? Because el día ('the day', from Latin masculine diēs) is one of Spanish's famous masculine words ending in -a, whereas la tarde and la noche are feminine!"
    },
    "pattern": {
      "title": "Muchas Gracias: Why 'Mucho' Agrees While 'Muy' Never Does",
      "content": "In Topic 5 you learned muy ('very': muy bueno). Before a noun like gracias ('graces/thanks'), Spanish uses mucho/a/os/as ('much/many'): muchas gracias ('many thanks')!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "good morning",
            "german": "buenos días"
          },
          {
            "id": "p2",
            "english": "good afternoon",
            "german": "buenas tardes"
          },
          {
            "id": "p3",
            "english": "good evening / good night",
            "german": "buenas noches"
          },
          {
            "id": "p4",
            "english": "thank you very much",
            "german": "muchas gracias"
          },
          {
            "id": "p5",
            "english": "please",
            "german": "por favor"
          },
          {
            "id": "p6",
            "english": "goodbye",
            "german": "adiós"
          }
        ],
        "target_answer": "buenos días, buenas tardes, buenas noches, muchas gracias, por favor, adiós",
        "meaning": "good morning, good afternoon, good evening / good night, thank you very much, please, goodbye",
        "explanation": "buenos (-os) for masculine días; buenas (-as) for feminine tardes, noches, and gracias.",
        "id": "es902_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Why do we say 'buenos días' with -os instead of *-as?",
        "options": [
          "Because el día is grammatically masculine (from Latin diēs)",
          "Because morning is longer than night",
          "Because días is an adverb"
        ],
        "target_answer": "Because el día is grammatically masculine (from Latin diēs)",
        "meaning": "good morning",
        "explanation": "el día is masculine despite ending in -a, so its adjective takes masculine plural -os: buenos días.",
        "id": "es902_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'Good morning, sir'",
        "target_answer": "Buenos días señor",
        "meaning": "Good morning, sir",
        "word_bank": [
          "Buenos",
          "días",
          "señor",
          "Buenas",
          "tardes",
          "el"
        ],
        "explanation": "Buenos días, señor — no article before señor when speaking directly to him.",
        "id": "es902_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say: 'Thank you very much, madam'",
        "cues": [
          "Many thanks (feminine plural) → Muchas gracias",
          "madam → señora"
        ],
        "idea_parts": [
          "Thank you very much → Muchas gracias",
          "madam → señora"
        ],
        "target_answer": "Muchas gracias señora",
        "meaning": "Thank you very much, madam",
        "word_bank": [
          "Muchas",
          "gracias",
          "señora",
          "Muchos",
          "Muy",
          "señor"
        ],
        "explanation": "Muchas gracias, señora — muchas agrees in gender and number with feminine plural gracias.",
        "id": "es902_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Buenas tardes a todos",
        "replays": 2,
        "target_answer": "Buenas tardes a todos",
        "meaning": "Good afternoon to everyone",
        "cues": [
          "Good (fem. pl.): Buenas",
          "afternoons: tardes",
          "to all: a todos"
        ],
        "explanation": "Buenas tardes a todos — warm plural greeting.",
        "affirmation": "Clean gender agreement across greetings!",
        "id": "es902_e5"
      }
    ],
    "summary": {
      "outcome": "Use buenos días, buenas tardes, buenas noches, and muchas gracias with accurate gender agreement.",
      "use_example": {
        "german": "Buenos días, señora — un café, por favor. ¡Muchas gracias!",
        "english": "Good morning, madam — a coffee, please. Thank you very much!"
      },
      "takeaway": "el día is masculine (buenos días); la tarde, la noche, and las gracias are feminine (buenas tardes, muchas gracias).",
      "curiosity_teaser": "Up next ([10] tener & hay): unlock possession (tengo, tienes) and universal existence (hay)."
    },
    "twist": {
      "prompt": "Assemble: 'Good night, until tomorrow'",
      "target_answer": "Buenas noches hasta mañana",
      "word_bank": [
        "Buenas",
        "noches",
        "hasta",
        "mañana",
        "Buenos",
        "días",
        "por"
      ],
      "explanation": "Buenas noches, hasta mañana."
    }
  },
  {
    "id": 10,
    "slug": "tener-and-hay",
    "title": "tener & hay",
    "subtitle": "Possession with tener ('to hold') and existence with hay ('there is/are')",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "tener",
      "tengo",
      "tienes",
      "tiene",
      "tenemos",
      "tienen",
      "hay",
      "problema",
      "tiempo"
    ],
    "table_word_ids": [
      "tener",
      "tengo",
      "tienes",
      "tiene",
      "tenemos",
      "tienen"
    ],
    "hook": {
      "title": "How 'To Hold' Took Over 'To Have'",
      "content": "Latin had two verbs: habēre ('to have') and tenēre ('to hold/keep', English tenant, retain, tenacious). In Spanish, tenēre (tener) took over all everyday possession ('I have a car, I have time, I have an idea' = tengo...), leaving habēre (haber) to do two specialized jobs: helping past participles (he hablado 'I have spoken') and forming the tiny powerhouse word hay ('there is / there are')!"
    },
    "pattern": {
      "title": "Tengo, Tienes & the Universal 'Hay'",
      "content": "Look at tener in the present: yo tengo (with the famous -go ending), tú tienes, él/ella/usted tiene, nosotros tenemos, ellos tienen. And for general existence ('there is a problem' OR 'there are problems'), Spanish uses one unchanging word: hay (pronounced /aj/, with a silent h)!",
      "linguist_note": "hay fused Old Spanish ha ('it has', from haber) + y ('there', from Latin ibi) — the exact same blueprint as French il y a!",
      "trap_note": "Never say *hay el problema — hay ('there is/are') pairs with indefinite articles (hay un problema), numbers, or bare nouns, never with el/la!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "to have (to hold)",
            "german": "tener"
          },
          {
            "id": "p2",
            "english": "I have",
            "german": "tengo"
          },
          {
            "id": "p3",
            "english": "you have (informal)",
            "german": "tienes"
          },
          {
            "id": "p4",
            "english": "he/she/usted has",
            "german": "tiene"
          },
          {
            "id": "p5",
            "english": "we have",
            "german": "tenemos"
          },
          {
            "id": "p6",
            "english": "there is / there are",
            "german": "hay"
          }
        ],
        "target_answer": "tener, tengo, tienes, tiene, tenemos, hay",
        "meaning": "to have (to hold), I have, you have (informal), he/she/usted has, we have, there is / there are",
        "explanation": "tener handles possession; hay handles existence for both singular and plural.",
        "id": "es10_e1"
      },
      {
        "type": "reverse_cognate",
        "prompt": "Spanish tener ('to have/hold', from Latin tenēre) shares its root with which English word for someone who 'holds' an apartment lease?",
        "target_answer": "tenant",
        "meaning": "a tenant is literally 'one who holds' a property",
        "explanation": "Latin tenēre gave Spanish tener and English tenant, retain, maintain, obtain, tenacious.",
        "id": "es10_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'There is no problem' (remembering Greek -ma nouns like el problema are masculine)?",
        "options": [
          "No hay problema",
          "No es problema",
          "No tiene problema"
        ],
        "target_answer": "No hay problema",
        "meaning": "There is no problem",
        "explanation": "hay means 'there is / there are', and no goes right in front: No hay problema.",
        "id": "es10_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I don't have time today'",
        "target_answer": "No tengo tiempo hoy",
        "meaning": "I don't have time today",
        "word_bank": [
          "No",
          "tengo",
          "tiempo",
          "hoy",
          "tienes",
          "hay",
          "problema"
        ],
        "explanation": "No + tengo + tiempo + hoy.",
        "id": "es10_e4"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "ask a friend if they have the confirmation",
        "cues": [
          "Do you have (tú form) → ¿Tienes",
          "the confirmation (feminine) → la confirmación?"
        ],
        "idea_parts": [
          "Do you have → Tienes",
          "the confirmation → la confirmación"
        ],
        "target_answer": "Tienes la confirmación",
        "meaning": "Do you have the confirmation?",
        "word_bank": [
          "Tienes",
          "la",
          "confirmación",
          "Tengo",
          "Hay",
          "el"
        ],
        "explanation": "¿Tienes la confirmación? — rising intonation turns tienes into a question.",
        "diagnosis": {
          "slip": "used Tengo instead of Tienes",
          "cue": "Tengo is 'I have'; tienes (with -es) is 'you have'."
        },
        "id": "es10_e5"
      }
    ],
    "summary": {
      "outcome": "Express possession with tener (tengo, tienes, tiene, tenemos, tienen) and existence with hay.",
      "use_example": {
        "german": "No tengo tiempo hoy porque hay un problema.",
        "english": "I don't have time today because there is a problem."
      },
      "takeaway": "Personal possession uses tener; general existence ('there is / there are') uses invariable hay.",
      "curiosity_teaser": "Up next ([1001] tengo & tienes Gym): drill all forms of tener across everyday nouns."
    },
    "twist": {
      "prompt": "Assemble: 'We have time today'",
      "target_answer": "Tenemos tiempo hoy",
      "word_bank": [
        "Tenemos",
        "tiempo",
        "hoy",
        "Tengo",
        "Tienes",
        "no"
      ],
      "explanation": "Tenemos ('we have') keeps the unchanged stem vowel -e-!"
    },
    "foreshadow": {
      "line": "You just unlocked the Verb Gate! In Topic 11, we build full noun phrases with plural and feminine adjective agreement.",
      "resolvedIn": 11
    },
    "payoff": {
      "ofLesson": 9,
      "text": "Just as Topic 9 showed you that dropping -s turns tú into usted, dropping -s from tienes ('you have') gives tiene ('usted has')!"
    }
  },
  {
    "id": 1001,
    "slug": "tengo-and-tienes-gym",
    "title": "tengo & tienes Gym",
    "subtitle": "Irregular first person tengo and stem-changing tienes/tiene/tenemos/tienen in possession drills",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "tener",
      "tengo",
      "tienes",
      "tiene",
      "tenemos",
      "tienen",
      "llave",
      "billete",
      "reservación",
      "tiempo"
    ],
    "table_word_ids": [
      "tener",
      "tengo",
      "tienes",
      "tiene",
      "tenemos",
      "tienen"
    ],
    "hook": {
      "title": "Why 'Tenemos' Keeps a Single 'e'",
      "content": "Look closely at the forms of tener: yo tengo, tú tienes, él/usted tiene, nosotros tenemos, ellos tienen. Why do tienes, tiene, and tienen split their e into ie, while tenemos stays a simple e? Because in tenemos (te-NE-mos), the vocal stress moves off the stem onto the ending — and Spanish vowels only split when they carry the stress!"
    },
    "pattern": {
      "title": "Possessing Keys, Tickets, and Reservations",
      "content": "Practice switching smoothly between tengo ('I have'), tienes ('you have'), tiene ('he/she/usted has'), and tenemos ('we have')."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I have",
            "german": "tengo"
          },
          {
            "id": "p2",
            "english": "you have (tú)",
            "german": "tienes"
          },
          {
            "id": "p3",
            "english": "he / she / usted has",
            "german": "tiene"
          },
          {
            "id": "p4",
            "english": "we have",
            "german": "tenemos"
          },
          {
            "id": "p5",
            "english": "they / you all have",
            "german": "tienen"
          },
          {
            "id": "p6",
            "english": "the key",
            "german": "la llave"
          }
        ],
        "target_answer": "tengo, tienes, tiene, tenemos, tienen, la llave",
        "meaning": "I have, you have (tú), he / she / usted has, we have, they / you all have, the key",
        "explanation": "Notice tengo (-go), tienes/tiene/tienen (ie under stress), and tenemos (unstressed e).",
        "id": "es1001_e1"
      },
      {
        "type": "morpheme_tiles",
        "prompt": "Build 'we have' from the unstressed stem of tener and the nosotros ending:",
        "tile_options": [
          "ten",
          "emos",
          "tien",
          "go"
        ],
        "target_answer": "tenemos",
        "meaning": "tenemos (we have)",
        "explanation": "Because stress lands on -emos, the stem stays ten-: tenemos.",
        "id": "es1001_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I have the key and the ticket'",
        "target_answer": "Tengo la llave y el billete",
        "meaning": "I have the key and the ticket",
        "word_bank": [
          "Tengo",
          "la",
          "llave",
          "y",
          "el",
          "billete",
          "Tienes",
          "lo"
        ],
        "explanation": "Tengo la llave (feminine) y el billete (masculine).",
        "id": "es1001_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "ask politely (using usted): 'Do you have a reservation?'",
        "cues": [
          "Has / Do you have (usted) → ¿Tiene usted",
          "a reservation (feminine) → una reservación?"
        ],
        "idea_parts": [
          "Do you (formal) have → Tiene usted",
          "a reservation → una reservación"
        ],
        "target_answer": "Tiene usted una reservación",
        "meaning": "Do you (formal) have a reservation?",
        "word_bank": [
          "Tiene",
          "usted",
          "una",
          "reservación",
          "Tienes",
          "un",
          "tengo"
        ],
        "explanation": "¿Tiene usted una reservación? — drop the -s from tienes for usted.",
        "id": "es1001_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Tenemos una reservación hoy",
        "replays": 2,
        "target_answer": "Tenemos una reservación hoy",
        "meaning": "We have a reservation today",
        "cues": [
          "We have: Tenemos",
          "a reservation: una reservación",
          "today: hoy"
        ],
        "explanation": "Tenemos una reservación hoy.",
        "affirmation": "Clean nosotros form tenemos!",
        "id": "es1001_e5"
      }
    ],
    "summary": {
      "outcome": "Conjugate tener across all persons and explain why tenemos does not diphthongize.",
      "use_example": {
        "german": "Tengo el billete y tenemos una reservación.",
        "english": "I have the ticket and we have a reservation."
      },
      "takeaway": "Stem vowels only split when stressed: tienes, tiene, tienen vs unstressed tenemos.",
      "curiosity_teaser": "Up next ([1002] hay: The Universal Existence): use hay for both 'there is' and 'there are'."
    },
    "twist": {
      "prompt": "Assemble: 'Do you have the key?'",
      "target_answer": "Tienes la llave",
      "word_bank": [
        "Tienes",
        "la",
        "llave",
        "Tengo",
        "el",
        "billete"
      ],
      "explanation": "¿Tienes la llave?"
    }
  },
  {
    "id": 1002,
    "slug": "hay-universal-existence",
    "title": "hay: The Universal Existence",
    "subtitle": "hay un problema, ¿hay café?, no hay nada — existence independent of number",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "hay",
      "problema",
      "café",
      "mesa",
      "restaurante",
      "nada",
      "nadie",
      "aquí"
    ],
    "table_word_ids": [
      "hay",
      "problema",
      "café",
      "mesa",
      "restaurante",
      "nada"
    ],
    "hook": {
      "title": "One Word for Singular and Plural",
      "content": "In English, you must choose between 'there is a table' and 'there are three tables'. In Spanish, hay never changes! Hay una mesa ('There is a table') and Hay tres mesas ('There are three tables') both use hay."
    },
    "pattern": {
      "title": "Greek -ma Nouns: Why It Is 'Un Problema'",
      "content": "Look at el problema ('the problem'). Even though it ends in -a, it came into Latin from Greek neuter nouns in -ma (el problema, el sistema, el programa, el tema, el clima), which are all MASCULINE in Spanish: hay un problema!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "there is / there are",
            "german": "hay"
          },
          {
            "id": "p2",
            "english": "a problem (masculine!)",
            "german": "un problema"
          },
          {
            "id": "p3",
            "english": "there isn't anything",
            "german": "no hay nada"
          },
          {
            "id": "p4",
            "english": "there is nobody",
            "german": "no hay nadie"
          },
          {
            "id": "p5",
            "english": "is there coffee?",
            "german": "¿hay café?"
          },
          {
            "id": "p6",
            "english": "here",
            "german": "aquí"
          }
        ],
        "target_answer": "hay, un problema, no hay nada, no hay nadie, ¿hay café?, aquí",
        "meaning": "there is / there are, a problem (masculine!), there isn't anything, there is nobody, is there coffee?, here",
        "explanation": "hay handles both singular and plural; el/un problema is masculine.",
        "id": "es1002_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Why do we say 'Hay UN problema' instead of *una problema?",
        "options": [
          "Greek nouns ending in -ma (problema, sistema, programa) are masculine in Spanish",
          "Because hay forces masculine gender",
          "Because problema ends in a consonant"
        ],
        "target_answer": "Greek nouns ending in -ma (problema, sistema, programa) are masculine in Spanish",
        "meaning": "There is a problem",
        "explanation": "Words of Greek origin ending in -ma take el / un: el problema, un problema.",
        "id": "es1002_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'There is a good restaurant here'",
        "target_answer": "Hay un restaurante bueno aquí",
        "meaning": "There is a good restaurant here",
        "word_bank": [
          "Hay",
          "un",
          "restaurante",
          "bueno",
          "aquí",
          "Está",
          "una",
          "allí"
        ],
        "explanation": "Hay ('There is') + un restaurante bueno + aquí.",
        "id": "es1002_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that there is nobody here",
        "cues": [
          "negation before hay → No hay",
          "nobody → nadie",
          "here → aquí"
        ],
        "idea_parts": [
          "there is not → No hay",
          "anybody/nobody → nadie",
          "here → aquí"
        ],
        "target_answer": "No hay nadie aquí",
        "meaning": "There is nobody here",
        "word_bank": [
          "No",
          "hay",
          "nadie",
          "aquí",
          "nada",
          "está",
          "problema"
        ],
        "explanation": "No hay nadie aquí — double negation with hay + nadie.",
        "id": "es1002_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Hay un problema aquí",
        "replays": 2,
        "target_answer": "Hay un problema aquí",
        "meaning": "There is a problem here",
        "cues": [
          "There is (silent h): Hay",
          "a problem (masculine): un problema",
          "here: aquí"
        ],
        "explanation": "Hay un problema aquí.",
        "affirmation": "You caught both silent-h hay and masculine un problema!",
        "id": "es1002_e5"
      }
    ],
    "summary": {
      "outcome": "Use hay for singular and plural existence and treat Greek -ma nouns like problema as masculine.",
      "use_example": {
        "german": "¿Hay café? — No, no hay nada aquí.",
        "english": "Is there coffee? — No, there is nothing here."
      },
      "takeaway": "Use estar for the location of a specific thing (El café está aquí) and hay for general existence (Hay café aquí).",
      "curiosity_teaser": "Up next ([1003] Boot Verbs: e→ie, o→ue & e→i Under Stress): see the stress rhythm that powers querer, poder, dormir, empezar, and pedir!"
    },
    "twist": {
      "prompt": "Assemble: 'There is nothing here'",
      "target_answer": "No hay nada aquí",
      "word_bank": [
        "No",
        "hay",
        "nada",
        "aquí",
        "nadie",
        "está",
        "es"
      ],
      "explanation": "No hay nada aquí."
    }
  },
  {
    "id": 1003,
    "slug": "boot-verbs-under-stress",
    "title": "Boot Verbs: e→ie, o→ue & e→i Under Stress",
    "subtitle": "Why querer (quiero/queremos), poder (puedo/podemos), tener (tienes/tenemos), and pedir (pido/pedimos) split their stem vowel only when stressed",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "querer",
      "poder",
      "puedo",
      "puedes",
      "dormir",
      "empezar",
      "pedir",
      "preferir",
      "tener",
      "tenemos"
    ],
    "table_word_ids": [
      "querer",
      "poder",
      "puedo",
      "puedes",
      "dormir",
      "empezar"
    ],
    "hook": {
      "title": "Not 'Irregular' — Just Stress-Driven!",
      "content": "Textbooks terrify learners with long lists of 'stem-changing boot verbs'. Language Transfer reveals the simple acoustic truth: in Vulgar Latin, stressed short E and short O stretched out into two-vowel diphthongs (e → ie, o → ue). Whenever your voice stresses the stem (yo, tú, él/ella/usted, ellos), the vowel splits: quiero, puedes, duermo ('I sleep'), empiezo ('I start'), prefiero ('I prefer'). Whenever the stress steps onto the nosotros ending (-emos / -imos / -amos), the stem vowel stays single: queremos, podemos, dormimos, empezamos, preferimos!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why Teachers Call Them 'Boot Verbs'",
          "content": "If you draw a box around the 1st, 2nd, and 3rd person singular on the left and 3rd person plural at the bottom right — leaving out nosotros in the top right — the outline looks just like a boot!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "The Three Vowel Shifts: e→ie, o→ue, and e→i",
      "content": "1) e → ie: querer (quiero / queremos), empezar (empiezo / empezamos), preferir (prefiero / preferimos).\n2) o → ue: poder ('to be able to / can' → puedo, puedes, puede / podemos), dormir ('to sleep' → duermo / dormimos).\n3) e → i (in -ir verbs like pedir 'to ask for / order'): pido, pides, pide / pedimos!",
      "trap_note": "Never put *por after pedir when asking for an item (*pedir por un café). Pedir already contains 'for': Quiero pedir un café!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I can / am able to (poder: o→ue)",
            "german": "puedo"
          },
          {
            "id": "p2",
            "english": "you can (poder: o→ue)",
            "german": "puedes"
          },
          {
            "id": "p3",
            "english": "we can (unstressed stem!)",
            "german": "podemos"
          },
          {
            "id": "p4",
            "english": "I prefer (preferir: e→ie)",
            "german": "prefiero"
          },
          {
            "id": "p5",
            "english": "I order / ask for (pedir: e→i)",
            "german": "pido"
          },
          {
            "id": "p6",
            "english": "to sleep (duermo / dormimos)",
            "german": "dormir"
          }
        ],
        "target_answer": "puedo, puedes, podemos, prefiero, pido, dormir",
        "meaning": "I can / am able to (poder: o→ue), you can (poder: o→ue), we can (unstressed stem!), I prefer (preferir: e→ie), I order / ask for (pedir: e→i), to sleep (duermo / dormimos)",
        "explanation": "When the stem is stressed, the vowel splits (puedo, prefiero, pido); when -emos/-imos takes the stress, the stem stays unchanged (podemos, preferimos, pedimos).",
        "id": "es1003_e1"
      },
      {
        "type": "reverse_cognate",
        "prompt": "Spanish dormir ('to sleep', duermo 'I sleep') shares its Latin root with which English word for a university sleeping hall?",
        "target_answer": "dormitory",
        "meaning": "a dormitory is literally 'a place for sleeping'",
        "explanation": "Latin dormīre gave Spanish dormir and English dormitory and dormant.",
        "id": "es1003_e2"
      },
      {
        "type": "family_matrix",
        "prompt": "Complete the Boot-Verb Stress Matrix by writing the 'yo' (stressed stem) form of 'poder' ('I can'):",
        "rows": [
          "querer (e → ie)",
          "poder (o → ue)",
          "pedir (e → i)"
        ],
        "columns": [
          "yo (stressed stem splits!)",
          "nosotros (unstressed stem stays single!)"
        ],
        "cells": [
          [
            {
              "german": "quiero",
              "english": "I want"
            },
            {
              "german": "queremos",
              "english": "we want"
            }
          ],
          [
            {
              "german": "puedo",
              "english": "I can"
            },
            {
              "german": "podemos",
              "english": "we can"
            }
          ],
          [
            {
              "german": "pido",
              "english": "I order"
            },
            {
              "german": "pedimos",
              "english": "we order"
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
            1
          ],
          [
            2,
            0
          ],
          [
            2,
            1
          ]
        ],
        "task": {
          "row": 1,
          "column": 0
        },
        "target_answer": "puedo",
        "meaning": "I can (o → ue under stress)",
        "row_law": "Each row shows one of the three Spanish boot-verb vowel shifts (e→ie, o→ue, e→i).",
        "column_law": "Column 1 stresses the stem vowel (splitting it); Column 2 stresses -emos/-imos (keeping the stem vowel single).",
        "explanation": "In yo puedo, the stress lands on the stem, splitting o into ue; in nosotros podemos, the stress moves onto -emos!",
        "id": "es1003_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'Can you confirm the reservation?'",
        "target_answer": "Puedes confirmar la reservación",
        "meaning": "Can you confirm the reservation?",
        "word_bank": [
          "Puedes",
          "confirmar",
          "la",
          "reservación",
          "Puedo",
          "Podemos",
          "el"
        ],
        "explanation": "¿Puedes ('Can you') + confirmar ('confirm', bare infinitive) + la reservación?",
        "id": "es1003_e4"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that you want to order a coffee (using pedir)",
        "cues": [
          "I want → Quiero",
          "to order / ask for (needs no 'for'!) → pedir",
          "a coffee → un café"
        ],
        "idea_parts": [
          "I want → Quiero",
          "to order → pedir",
          "a coffee → un café"
        ],
        "target_answer": "Quiero pedir un café",
        "meaning": "I want to order a coffee",
        "word_bank": [
          "Quiero",
          "pedir",
          "un",
          "café",
          "puedo",
          "dormir",
          "la"
        ],
        "explanation": "Quiero pedir un café — pedir already means 'to ask FOR / to order', so never add *por after pedir!",
        "diagnosis": {
          "slip": "added por after pedir",
          "cue": "pedir means 'to ask for / order' all by itself: pedir un café."
        },
        "id": "es1003_e5"
      }
    ],
    "summary": {
      "outcome": "Conjugate e→ie (querer, empezar, preferir), o→ue (poder, dormir), and e→i (pedir) boot verbs by following vocal stress.",
      "use_example": {
        "german": "Puedo ir hoy, pero prefiero ir mañana.",
        "english": "I can go today, but I prefer to go tomorrow."
      },
      "takeaway": "Stressed stem = split vowel (quiero, puedo, pido); stressed nosotros ending = single vowel (queremos, podemos, pedimos).",
      "curiosity_teaser": "Up next ([11] Adjective Agreement): build full noun phrases with gender and plural concord."
    },
    "twist": {
      "prompt": "Assemble: 'I cannot go today'",
      "target_answer": "No puedo ir hoy",
      "word_bank": [
        "No",
        "puedo",
        "ir",
        "hoy",
        "puedes",
        "quiero",
        "mañana"
      ],
      "explanation": "No puedo ir hoy chains no puedo + bare infinitive ir."
    }
  },
  {
    "id": 11,
    "slug": "adjective-agreement",
    "title": "Adjective Agreement",
    "subtitle": "Descriptive adjectives following the noun: -o/-a/-os/-as patterns",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "libro",
      "casa",
      "hotel",
      "blanco",
      "negro",
      "verde",
      "rojo",
      "azul",
      "nuevo",
      "hermoso"
    ],
    "table_word_ids": [
      "libro",
      "casa",
      "hotel",
      "blanco",
      "negro",
      "verde"
    ],
    "hook": {
      "title": "Painting the Noun First, Coloring It Second",
      "content": "In English, you hold the color in your head before naming the object: 'a white house'. In Spanish, you put the object on the canvas first and then brush the description onto it: una casa blanca ('a house white'), un libro nuevo ('a book new'), un café negro ('a coffee black')!"
    },
    "pattern": {
      "title": "The Four-Corner Agreement Grid: -o, -a, -os, -as",
      "content": "Adjectives ending in -o have four forms: blanco (m.sg.), blanca (f.sg.), blancos (m.pl.), blancas (f.pl.). Adjectives ending in -e (verde, grande) or a consonant (azul, natural) have just TWO forms — singular and plural! Wait: how do you make a plural in Spanish? If a word ends in a vowel, add -s (casas, verdes); if it ends in a consonant, add -es (hoteles, azules)!",
      "linguist_note": "Post-nominal adjective placement is the unmarked Romance order for distinguishing/restrictive attributes.",
      "trap_note": "Notice that plural of el is LOS (not *eles!) and plural of la is LAS: el libro → los libros, la casa → las casas."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "the white house",
            "german": "la casa blanca"
          },
          {
            "id": "p2",
            "english": "the black coffee",
            "german": "el café negro"
          },
          {
            "id": "p3",
            "english": "the new book",
            "german": "el libro nuevo"
          },
          {
            "id": "p4",
            "english": "the beautiful city",
            "german": "la ciudad hermosa"
          },
          {
            "id": "p5",
            "english": "green (invariable gender)",
            "german": "verde"
          },
          {
            "id": "p6",
            "english": "blue (plural: azules)",
            "german": "azul"
          }
        ],
        "target_answer": "la casa blanca, el café negro, el libro nuevo, la ciudad hermosa, verde, azul",
        "meaning": "the white house, the black coffee, the new book, the beautiful city, green (invariable gender), blue (plural: azules)",
        "explanation": "Noun comes first; adjective agrees in gender and number.",
        "id": "es11_e1"
      },
      {
        "type": "reverse_cognate",
        "prompt": "Spanish hermoso ('beautiful') evolved from Latin formōsus ('finely formed', with initial f- turning into silent h-!). Which island was named Ilha Formosa ('Beautiful Island') by 16th-century navigators?",
        "target_answer": "Formosa",
        "meaning": "Formosa (historical name of Taiwan) is the exact same word as Spanish hermosa!",
        "explanation": "Latin formōsus kept its f- in Portuguese Formosa and English 'form', and turned f- into silent h- in Spanish hermoso.",
        "id": "es11_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How do you form the plural of 'el hotel azul' ('the blue hotel' → 'the blue hotels')?",
        "options": [
          "los hoteles azules",
          "el hoteles azuls",
          "las hoteles azules"
        ],
        "target_answer": "los hoteles azules",
        "meaning": "the blue hotels",
        "explanation": "Masculine el becomes plural los; consonant-ending hotel and azul add -es: los hoteles azules.",
        "id": "es11_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I want a black coffee'",
        "target_answer": "Quiero un café negro",
        "meaning": "I want a black coffee",
        "word_bank": [
          "Quiero",
          "un",
          "café",
          "negro",
          "negra",
          "una",
          "blanco"
        ],
        "explanation": "Quiero + un café (masculine) + negro (after the noun).",
        "id": "es11_e4"
      },
      {
        "type": "literal_gloss",
        "prompt": "Which English word-for-word blueprint mirrors Spanish 'Una casa blanca y nueva'?",
        "german": "Una casa blanca y nueva",
        "natural": "A new white house",
        "options": [
          "A new white house",
          "A house white and new",
          "A white and house new",
          "White a new house"
        ],
        "target_answer": "A house white and new",
        "meaning": "A new white house (literal Spanish blueprint: A house white and new)",
        "explanation": "Spanish names the object first (una casa) and then layers its descriptions (blanca y nueva).",
        "id": "es11_e5"
      }
    ],
    "summary": {
      "outcome": "Place descriptive adjectives after the noun and match them across singular/plural and masculine/feminine.",
      "use_example": {
        "german": "Tengo un libro nuevo y vivo en una casa blanca.",
        "english": "I have a new book and I live in a white house."
      },
      "takeaway": "Vowel-ending words add -s in the plural (libros, casas); consonant-ending words add -es (hoteles, azules).",
      "curiosity_teaser": "Up next ([1101] Noun-First Word Order): build noun-first descriptions across colors and qualities."
    },
    "twist": {
      "prompt": "Assemble: 'The house is white and beautiful'",
      "target_answer": "La casa es blanca y hermosa",
      "word_bank": [
        "La",
        "casa",
        "es",
        "blanca",
        "y",
        "hermosa",
        "blanco",
        "hermoso",
        "El"
      ],
      "explanation": "blanca and hermosa agree with feminine la casa."
    },
    "foreshadow": {
      "line": "Next in Topic 12: how to step into the future using ir a ('going to') + any infinitive.",
      "resolvedIn": 12
    },
    "payoff": {
      "ofLesson": 10,
      "text": "Combine tener and hay from Topic 10 with post-nominal adjectives to describe everything you own or see."
    }
  },
  {
    "id": 1101,
    "slug": "noun-first-word-order",
    "title": "Noun-First Word Order",
    "subtitle": "el libro rojo, la casa blanca — painting the object before coloring it",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "libro",
      "casa",
      "hotel",
      "mesa",
      "rojo",
      "blanco",
      "negro",
      "verde",
      "azul",
      "nuevo"
    ],
    "table_word_ids": [
      "libro",
      "casa",
      "hotel",
      "mesa",
      "rojo",
      "blanco"
    ],
    "hook": {
      "title": "Canvas First, Paint Second",
      "content": "When you say el libro rojo, your listener sees the book first and then paints it red. Practice resisting the English habit of putting colors before the noun!"
    },
    "pattern": {
      "title": "Gender Concord on Colors",
      "content": "rojo/roja, blanco/blanca, negro/negra change for gender; verde and azul stay identical in the singular."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "the red book",
            "german": "el libro rojo"
          },
          {
            "id": "p2",
            "english": "the white table",
            "german": "la mesa blanca"
          },
          {
            "id": "p3",
            "english": "the black coffee",
            "german": "el café negro"
          },
          {
            "id": "p4",
            "english": "the green house",
            "german": "la casa verde"
          },
          {
            "id": "p5",
            "english": "the blue hotel",
            "german": "el hotel azul"
          },
          {
            "id": "p6",
            "english": "the new house",
            "german": "la casa nueva"
          }
        ],
        "target_answer": "el libro rojo, la mesa blanca, el café negro, la casa verde, el hotel azul, la casa nueva",
        "meaning": "the red book, the white table, the black coffee, the green house, the blue hotel, the new house",
        "explanation": "Every color sits right after its noun.",
        "id": "es1101_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Translate 'the white table':",
        "options": [
          "la mesa blanca",
          "la blanca mesa",
          "el mesa blanco"
        ],
        "target_answer": "la mesa blanca",
        "meaning": "the white table",
        "explanation": "la mesa (feminine) + blanca (after the noun).",
        "id": "es1101_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I have the red book'",
        "target_answer": "Tengo el libro rojo",
        "meaning": "I have the red book",
        "word_bank": [
          "Tengo",
          "el",
          "libro",
          "rojo",
          "roja",
          "la",
          "blanco"
        ],
        "explanation": "Tengo + el libro + rojo.",
        "id": "es1101_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that you want a new house",
        "cues": [
          "I want → Quiero",
          "a house (feminine) → una casa",
          "new (feminine, after noun) → nueva"
        ],
        "idea_parts": [
          "I want → Quiero",
          "a house → una casa",
          "new → nueva"
        ],
        "target_answer": "Quiero una casa nueva",
        "meaning": "I want a new house",
        "word_bank": [
          "Quiero",
          "una",
          "casa",
          "nueva",
          "un",
          "nuevo",
          "blanca"
        ],
        "explanation": "Quiero una casa nueva.",
        "id": "es1101_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "La casa blanca está aquí",
        "replays": 2,
        "target_answer": "La casa blanca está aquí",
        "meaning": "The white house is here",
        "cues": [
          "The white house: La casa blanca",
          "is (location): está",
          "here: aquí"
        ],
        "explanation": "La casa blanca está aquí.",
        "affirmation": "Noun-first order + estar for location!",
        "id": "es1101_e5"
      }
    ],
    "summary": {
      "outcome": "Build noun + color/descriptor phrases with automatic gender concord.",
      "use_example": {
        "german": "Quiero el libro rojo y la mesa blanca.",
        "english": "I want the red book and the white table."
      },
      "takeaway": "Always name the noun before its color in Spanish.",
      "curiosity_teaser": "Up next ([1102] Plural Concord Drills): scale up to masculine and feminine plurals (los, las, -s, -es)."
    },
    "twist": {
      "prompt": "Assemble: 'The green book is here'",
      "target_answer": "El libro verde está aquí",
      "word_bank": [
        "El",
        "libro",
        "verde",
        "está",
        "aquí",
        "La",
        "es",
        "roja"
      ],
      "explanation": "verde ends in -e and fits both masculine and feminine."
    }
  },
  {
    "id": 1102,
    "slug": "plural-concord-drills",
    "title": "Plural Concord Drills",
    "subtitle": "los hoteles grandes, las ciudades hermosas — concord across number and gender",
    "phase": 2,
    "shift_categories": [
      "dad"
    ],
    "word_ids": [
      "hotel",
      "ciudad",
      "libro",
      "casa",
      "grande",
      "hermoso",
      "nuevo",
      "importante",
      "son",
      "están"
    ],
    "table_word_ids": [
      "hotel",
      "ciudad",
      "libro",
      "casa",
      "grande",
      "hermoso"
    ],
    "hook": {
      "title": "Every Piece Pluralizes Together",
      "content": "In English, only the noun takes a plural -s: 'the big houses'. In Spanish, the article, the noun, the verb, AND the adjective all pluralize in harmony: Las casas son grandes ('The-pl. houses are-pl. big-pl.')!"
    },
    "pattern": {
      "title": "Vowel + -s vs Consonant + -es",
      "content": "Ends in a vowel? Add -s: la casa hermosa → las casas hermosas.\nEnds in a consonant? Add -es: el hotel → los hoteles, la ciudad → las ciudades!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "the big hotels",
            "german": "los hoteles grandes"
          },
          {
            "id": "p2",
            "english": "the beautiful cities",
            "german": "las ciudades hermosas"
          },
          {
            "id": "p3",
            "english": "the new books",
            "german": "los libros nuevos"
          },
          {
            "id": "p4",
            "english": "they are (identity: ser)",
            "german": "son"
          },
          {
            "id": "p5",
            "english": "they are (location/state: estar)",
            "german": "están"
          }
        ],
        "target_answer": "los hoteles grandes, las ciudades hermosas, los libros nuevos, son, están",
        "meaning": "the big hotels, the beautiful cities, the new books, they are (identity: ser), they are (location/state: estar)",
        "explanation": "el → los, la → las; es → son, está → están.",
        "id": "es1102_e1"
      },
      {
        "type": "morpheme_tiles",
        "prompt": "Pluralize 'la ciudad' ('the city' → 'the cities') by adding the consonant-stem plural ending:",
        "tile_options": [
          "las",
          "ciudad",
          "es",
          "s"
        ],
        "target_answer": "lasciudades",
        "meaning": "las ciudades (the cities)",
        "explanation": "Because ciudad ends in a consonant (-d), it adds -es in the plural: las ciudades.",
        "id": "es1102_e2"
      },
      {
        "type": "shift_select",
        "prompt": "Choose the correct plural of 'La tradición es importante':",
        "options": [
          "Las tradiciones son importantes",
          "La tradiciones es importante",
          "Los tradiciones son importantes"
        ],
        "target_answer": "Las tradiciones son importantes",
        "meaning": "The traditions are important",
        "explanation": "tradición adds -es (and drops its tilde because stress stays on -cio-): las tradiciones son importantes.",
        "id": "es1102_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'The cities are beautiful'",
        "target_answer": "Las ciudades son hermosas",
        "meaning": "The cities are beautiful",
        "word_bank": [
          "Las",
          "ciudades",
          "son",
          "hermosas",
          "Los",
          "hermosos",
          "es"
        ],
        "explanation": "Las ciudades + son + hermosas.",
        "id": "es1102_e4"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that the hotels are big",
        "cues": [
          "The hotels (masculine plural) → Los hoteles",
          "are (characteristic) → son",
          "big (plural) → grandes"
        ],
        "idea_parts": [
          "subject → Los hoteles",
          "verb → son",
          "adjective → grandes"
        ],
        "target_answer": "Los hoteles son grandes",
        "meaning": "The hotels are big",
        "word_bank": [
          "Los",
          "hoteles",
          "son",
          "grandes",
          "Las",
          "grande",
          "es"
        ],
        "explanation": "Los hoteles son grandes — hotel (+es), son, grandes (+s).",
        "id": "es1102_e5"
      }
    ],
    "summary": {
      "outcome": "Pluralize articles (los/las), nouns (-s/-es), verbs (son/están), and adjectives in full harmony.",
      "use_example": {
        "german": "Las ciudades son hermosas y los hoteles son grandes.",
        "english": "The cities are beautiful and the hotels are big."
      },
      "takeaway": "In Spanish, plurality is a chord played across article, noun, verb, and adjective together.",
      "curiosity_teaser": "Up next ([1103] Diminutives & Augmentatives: -ito, -illo & -ón): discover how Spanish suffixes express affection and build brand-new nouns like bocadillo, pesadilla, and limón!"
    },
    "twist": {
      "prompt": "Assemble: 'Where are the books?'",
      "target_answer": "Dónde están los libros",
      "word_bank": [
        "Dónde",
        "están",
        "los",
        "libros",
        "está",
        "el",
        "son"
      ],
      "explanation": "¿Dónde están los libros? uses plural están for location."
    }
  },
  {
    "id": 1103,
    "slug": "diminutives-augmentatives-ito-illo-on",
    "title": "Diminutives & Augmentatives: -ito, -illo & -ón",
    "subtitle": "From poquito and cafecito (-ito) to word-builders bocadillo ('sandwich' < bocado), pesadilla ('nightmare' < pesado), and limón (< lima)",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "poquito",
      "bocadillo",
      "pesadilla",
      "limón",
      "un_poco",
      "agua",
      "queso",
      "café"
    ],
    "table_word_ids": [
      "poquito",
      "bocadillo",
      "pesadilla",
      "limón",
      "un_poco",
      "agua"
    ],
    "hook": {
      "title": "Suffixes That Show Affection — and Invent New Words!",
      "content": "As highlighted in *The Thinking Method*, Spanish suffixes like -ito/-ita, -illo/-illa, and -ón/-ona do two remarkable things. First, -ito/-ita adds warmth, affection, or softness to everyday speech: un poco ('a little') becomes un poquito ('just a tiny bit'), un momento becomes un momentito ('just a quick second'), and un café becomes un cafecito! Second, -illo/-illa and -ón actually forged brand-new everyday nouns out of simpler roots!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why 'Limón' Has an Augmentative '-ón'",
          "content": "When citrus fruits arrived in Moorish Spain, the smaller green fruit kept the Arabic name lima ('lime'), and speakers added the 'big' suffix -ón to name the larger yellow citrus: el limón ('the big lime')!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Decoding Bocadillo, Pesadilla, and Limón",
      "content": "Look at the etymological magic:\n• la boca ('mouth') → el bocado ('mouthful / bite') + -illo ('little') = el bocadillo ('little mouthful' → a Spanish baguette sandwich)!\n• pesado ('heavy', cousin of peso) + -illa = la pesadilla ('the heavy little thing sitting on your chest in sleep' → a nightmare)!\n• la lima ('lime') + augmentative -ón ('big') = el limón ('the big lime' → a lemon)!",
      "trap_note": "Why is poquito spelled with 'qu'? Because in Spanish, 'c' before 'i' would sound like /θ/ or /s/, so c changes to qu to protect the hard /k/ sound of poco!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "a tiny bit (poco + -ito)",
            "german": "un poquito"
          },
          {
            "id": "p2",
            "english": "a sandwich ('little mouthful': bocado + -illo)",
            "german": "el bocadillo"
          },
          {
            "id": "p3",
            "english": "a nightmare ('little heavy thing': pesado + -illa)",
            "german": "la pesadilla"
          },
          {
            "id": "p4",
            "english": "a lemon ('big lime': lima + -ón)",
            "german": "el limón"
          },
          {
            "id": "p5",
            "english": "cheese",
            "german": "el queso"
          }
        ],
        "target_answer": "un poquito, el bocadillo, la pesadilla, el limón, el queso",
        "meaning": "a tiny bit (poco + -ito), a sandwich ('little mouthful': bocado + -illo), a nightmare ('little heavy thing': pesado + -illa), a lemon ('big lime': lima + -ón), cheese",
        "explanation": "-ito adds warmth; -illo/-illa and -ón created everyday vocabulary.",
        "id": "es1103_e1"
      },
      {
        "type": "morpheme_tiles",
        "prompt": "Build 'bocadillo' ('sandwich') from 'bocado' ('mouthful', dropping -o) and the diminutive suffix:",
        "tile_options": [
          "bocad",
          "illo",
          "ito",
          "ón"
        ],
        "target_answer": "bocadillo",
        "meaning": "el bocadillo (the sandwich)",
        "explanation": "bocad(o) + illo = bocadillo ('little mouthful').",
        "id": "es1103_e2"
      },
      {
        "type": "shift_select",
        "prompt": "What literal image hides inside 'la pesadilla' ('the nightmare')?",
        "options": [
          "pesado ('heavy') + -illa ('a heavy little weight pressing on the sleeper')",
          "pescado ('fish') + -illa",
          "paso ('step') + -illa"
        ],
        "target_answer": "pesado ('heavy') + -illa ('a heavy little weight pressing on the sleeper')",
        "meaning": "the nightmare",
        "explanation": "Folklore pictured a nightmare as a heavy weight (pesado) sitting on your chest while you sleep!",
        "id": "es1103_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I want a cheese sandwich'",
        "target_answer": "Quiero un bocadillo de queso",
        "meaning": "I want a cheese sandwich",
        "word_bank": [
          "Quiero",
          "un",
          "bocadillo",
          "de",
          "queso",
          "una",
          "pesadilla",
          "limón"
        ],
        "explanation": "Quiero un bocadillo de queso — de links the sandwich to its filling.",
        "id": "es1103_e4"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "ask politely for 'a little bit of water, please' using poquito",
        "cues": [
          "A tiny bit → Un poquito",
          "of water → de agua",
          "please → por favor"
        ],
        "idea_parts": [
          "a little bit → Un poquito",
          "of water → de agua",
          "please → por favor"
        ],
        "target_answer": "Un poquito de agua por favor",
        "meaning": "A little bit of water, please",
        "word_bank": [
          "Un",
          "poquito",
          "de",
          "agua",
          "por",
          "favor",
          "bocadillo",
          "la",
          "mucho"
        ],
        "explanation": "Un poquito de agua, por favor — poquito sounds warm and polite across the whole Spanish-speaking world.",
        "id": "es1103_e5"
      }
    ],
    "summary": {
      "outcome": "Use affectionate -ito (poquito) and decode lexicalized -illo/-ón nouns (bocadillo, pesadilla, limón).",
      "use_example": {
        "german": "Quiero un bocadillo de queso y un poquito de agua con limón.",
        "english": "I want a cheese sandwich and a little bit of water with lemon."
      },
      "takeaway": "Spanish diminutives (-ito, -illo) and augmentatives (-ón) express both social warmth and vivid word creation.",
      "curiosity_teaser": "Up next ([12] The Near Future: ir a): step into future plans with voy a + infinitive."
    },
    "twist": {
      "prompt": "Assemble: 'Water with lemon, please'",
      "target_answer": "Agua con limón por favor",
      "word_bank": [
        "Agua",
        "con",
        "limón",
        "por",
        "favor",
        "sin",
        "queso",
        "pesadilla"
      ],
      "explanation": "Agua con limón, por favor."
    }
  },
  {
    "id": 12,
    "slug": "near-future-ir-a",
    "title": "The Near Future: ir a",
    "subtitle": "voy a + infinitive — express future plans without learning a new tense",
    "phase": 2,
    "shift_categories": [
      "ar_engine"
    ],
    "word_ids": [
      "ir",
      "voy",
      "vas",
      "va",
      "vamos",
      "van",
      "a",
      "mañana",
      "hoy",
      "visitar",
      "celebrar"
    ],
    "table_word_ids": [
      "ir",
      "voy",
      "vas",
      "va",
      "vamos",
      "van"
    ],
    "hook": {
      "title": "Speak About the Future Right Now",
      "content": "How do you talk about tomorrow's plans in English? Nine times out of ten, you say 'I'm going to visit, we're going to celebrate'. Spanish uses the exact same blueprint: take the present tense of ir ('to go': voy, vas, va, vamos, van), add the connector a ('to'), and attach ANY infinitive verb you know! Voy a visitar Madrid ('I am going to visit Madrid')."
    },
    "pattern": {
      "title": "Why Spanish Always Needs 'a' After 'Ir'",
      "content": "In French (je vais visiter), 'go' connects directly to the infinitive. In Spanish, motion toward a future action always uses the forward-pointing preposition a ('to'): Voy a confirmar ('I am going to confirm'), ¿Vas a participar? ('Are you going to participate?'), Vamos a celebrar ('We are going to celebrate')!",
      "linguist_note": "While the infinitive ir comes from Latin īre ('to go', English exit/transit), the present forms voy, vas, va, vamos, van come from Latin vādere ('to advance/wade')!",
      "trap_note": "Never forget the 'a' in ir a + infinitive (*Voy visitar is broken). Think of 'a' as the arrow pointing toward your future action!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I go / I am going",
            "german": "voy"
          },
          {
            "id": "p2",
            "english": "you go / are going (tú)",
            "german": "vas"
          },
          {
            "id": "p3",
            "english": "he/she/usted goes / is going",
            "german": "va"
          },
          {
            "id": "p4",
            "english": "we go / let's go!",
            "german": "vamos"
          },
          {
            "id": "p5",
            "english": "they / you all go",
            "german": "van"
          },
          {
            "id": "p6",
            "english": "tomorrow",
            "german": "mañana"
          }
        ],
        "target_answer": "voy, vas, va, vamos, van, mañana",
        "meaning": "I go / I am going, you go / are going (tú), he/she/usted goes / is going, we go / let's go!, they / you all go, tomorrow",
        "explanation": "voy, vas, va, vamos, van + a + infinitive expresses any future plan.",
        "id": "es12_e1"
      },
      {
        "type": "morpheme_tiles",
        "prompt": "Build the near-future frame 'I am going to visit' from its three parts:",
        "tile_options": [
          "Voy",
          "a",
          "visitar",
          "de"
        ],
        "target_answer": "Voyavisitar",
        "meaning": "Voy a visitar (I am going to visit)",
        "explanation": "Voy ('I am going') + a ('to') + visitar ('visit').",
        "id": "es12_e2"
      },
      {
        "type": "shift_select",
        "prompt": "Which preposition must always link 'voy / vas / vamos' to a following infinitive?",
        "options": [
          "a (Voy a confirmar)",
          "de (*Voy de confirmar)",
          "nothing (*Voy confirmar)"
        ],
        "target_answer": "a (Voy a confirmar)",
        "meaning": "I am going to confirm",
        "explanation": "ir a + infinitive always requires the preposition a.",
        "id": "es12_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'Tomorrow I am going to visit Madrid'",
        "target_answer": "Mañana voy a visitar Madrid",
        "meaning": "Tomorrow I am going to visit Madrid",
        "word_bank": [
          "Mañana",
          "voy",
          "a",
          "visitar",
          "Madrid",
          "vas",
          "de",
          "hoy"
        ],
        "explanation": "Mañana + voy + a + visitar + Madrid.",
        "id": "es12_e4"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say: 'We are going to celebrate today'",
        "cues": [
          "We are going → Vamos",
          "to (connector) → a",
          "celebrate today → celebrar hoy"
        ],
        "idea_parts": [
          "We are going → Vamos",
          "to celebrate → a celebrar",
          "today → hoy"
        ],
        "target_answer": "Vamos a celebrar hoy",
        "meaning": "We are going to celebrate today",
        "word_bank": [
          "Vamos",
          "a",
          "celebrar",
          "hoy",
          "Voy",
          "de",
          "mañana"
        ],
        "explanation": "Vamos a celebrar hoy — vamos a + infinitive also means 'Let's celebrate today!'",
        "diagnosis": {
          "slip": "forgot the preposition a after Vamos",
          "cue": "Always include a between ir (voy/vas/va/vamos/van) and the infinitive: Vamos a celebrar."
        },
        "id": "es12_e5"
      }
    ],
    "summary": {
      "outcome": "Express future plans and intentions using voy/vas/va/vamos/van + a + infinitive.",
      "use_example": {
        "german": "Mañana voy a visitar Madrid y vamos a celebrar.",
        "english": "Tomorrow I am going to visit Madrid and we are going to celebrate."
      },
      "takeaway": "voy a + infinitive turns every verb you decode into a future tense immediately.",
      "curiosity_teaser": "Up next ([1201] voy, vas, va Drills): drill all five forms of ir and contraction al (a + el)."
    },
    "twist": {
      "prompt": "Assemble: 'Are you going to participate?'",
      "target_answer": "Vas a participar",
      "word_bank": [
        "Vas",
        "a",
        "participar",
        "Voy",
        "de",
        "celebrar"
      ],
      "explanation": "¿Vas a participar? asks about future plans."
    },
    "foreshadow": {
      "line": "Next in Topic 13: the famous duel between por and para — and how thinking of para as an arrow and por as a scale solves it forever.",
      "resolvedIn": 13
    },
    "payoff": {
      "ofLesson": 11,
      "text": "Every noun phrase and verb you built in Topics 1–11 can now be projected into the future with voy a."
    }
  },
  {
    "id": 1201,
    "slug": "voy-vas-va-drills",
    "title": "voy, vas, va Drills",
    "subtitle": "Conjugating ir (voy, vas, va, vamos, van) and attaching newly converted -ar verbs: voy a visitar",
    "phase": 2,
    "shift_categories": [
      "ar_engine"
    ],
    "word_ids": [
      "ir",
      "voy",
      "vas",
      "va",
      "vamos",
      "van",
      "a",
      "restaurante",
      "hotel",
      "organizar",
      "preparar"
    ],
    "table_word_ids": [
      "ir",
      "voy",
      "vas",
      "va",
      "vamos",
      "van"
    ],
    "hook": {
      "title": "Going to Places vs Going to Act",
      "content": "Notice that ir a works both before a verb (Voy a preparar el café = 'I'm going to prepare the coffee') AND before a place! And when a ('to') meets the masculine article el ('the'), they fuse into one mandatory contraction: a + el = al (Voy al hotel 'I'm going to the hotel', Vamos al restaurante 'Let's go to the restaurant')!"
    },
    "pattern": {
      "title": "The '-oy' Trio: soy, estoy, voy",
      "content": "Notice how the three big engines of Spanish all end in -oy in the 'I' form: soy ('I am' - essence), estoy ('I am' - state), voy ('I go')!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I am going to organize",
            "german": "voy a organizar"
          },
          {
            "id": "p2",
            "english": "you are going to prepare",
            "german": "vas a preparar"
          },
          {
            "id": "p3",
            "english": "he / she / usted is going",
            "german": "va"
          },
          {
            "id": "p4",
            "english": "we are going / let's go",
            "german": "vamos"
          },
          {
            "id": "p5",
            "english": "to the hotel (a + el)",
            "german": "al hotel"
          },
          {
            "id": "p6",
            "english": "to the house (feminine)",
            "german": "a la casa"
          }
        ],
        "target_answer": "voy a organizar, vas a preparar, va, vamos, al hotel, a la casa",
        "meaning": "I am going to organize, you are going to prepare, he / she / usted is going, we are going / let's go, to the hotel (a + el), to the house (feminine)",
        "explanation": "Before masculine singular el, a + el contracts to al.",
        "id": "es1201_e1"
      },
      {
        "type": "morpheme_tiles",
        "prompt": "Contract 'a + el restaurante' ('to the restaurant') into natural Spanish:",
        "tile_options": [
          "al",
          "restaurante",
          "a el",
          "del"
        ],
        "target_answer": "alrestaurante",
        "meaning": "al restaurante (to the restaurant)",
        "explanation": "a + el MUST contract to al.",
        "id": "es1201_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'We are going to the hotel'?",
        "options": [
          "Vamos al hotel",
          "Vamos a el hotel",
          "Vamos a la hotel"
        ],
        "target_answer": "Vamos al hotel",
        "meaning": "We are going to the hotel",
        "explanation": "a + el contracts to al: Vamos al hotel.",
        "id": "es1201_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I am going to prepare the coffee'",
        "target_answer": "Voy a preparar el café",
        "meaning": "I am going to prepare the coffee",
        "word_bank": [
          "Voy",
          "a",
          "preparar",
          "el",
          "café",
          "Vas",
          "al",
          "la"
        ],
        "explanation": "Voy + a + preparar + el café.",
        "id": "es1201_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Vamos al restaurante hoy",
        "replays": 2,
        "target_answer": "Vamos al restaurante hoy",
        "meaning": "We are going to the restaurant today",
        "cues": [
          "We are going: Vamos",
          "to the (a + el): al",
          "restaurant today: restaurante hoy"
        ],
        "explanation": "Vamos al restaurante hoy.",
        "affirmation": "You caught the mandatory contraction al!",
        "id": "es1201_e5"
      }
    ],
    "summary": {
      "outcome": "Chain voy/vas/va/vamos/van with infinitives and destinations using the mandatory contraction al.",
      "use_example": {
        "german": "Vamos al restaurante porque voy a organizar la cena.",
        "english": "We are going to the restaurant because I am going to organize dinner."
      },
      "takeaway": "a + el always contracts to al; a + la stays a la.",
      "curiosity_teaser": "Up next ([1202] Near Future in Conversation): combine hoy and mañana with near-future questions and plans."
    },
    "twist": {
      "prompt": "Assemble: 'Are you going to the hotel?'",
      "target_answer": "Vas al hotel",
      "word_bank": [
        "Vas",
        "al",
        "hotel",
        "Voy",
        "a",
        "el"
      ],
      "explanation": "¿Vas al hotel? uses al (a + el)."
    }
  },
  {
    "id": 1202,
    "slug": "near-future-in-conversation",
    "title": "Near Future in Conversation",
    "subtitle": "Talking about today and tomorrow: mañana voy a organizar, hoy vamos a celebrar",
    "phase": 2,
    "shift_categories": [
      "ar_engine"
    ],
    "word_ids": [
      "mañana",
      "hoy",
      "voy",
      "vas",
      "va",
      "vamos",
      "van",
      "ver",
      "comprar",
      "comer",
      "terminar"
    ],
    "table_word_ids": [
      "mañana",
      "hoy",
      "voy",
      "vas",
      "va",
      "vamos"
    ],
    "hook": {
      "title": "Why 'Mañana' Means Both 'Tomorrow' and 'Morning'",
      "content": "Look at mañana: used alone as an adverb, mañana means 'tomorrow' (Mañana voy a Madrid). Used with the feminine article, la mañana means 'the morning' (por la mañana = 'in the morning')! So how do you say 'tomorrow morning'? Mañana por la mañana!"
    },
    "pattern": {
      "title": "Planning Today (Hoy) and Tomorrow (Mañana)",
      "content": "Practice building conversational exchanges with ¿Qué vas a hacer hoy? ('What are you going to do today?') and Mañana vamos a..."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "today",
            "german": "hoy"
          },
          {
            "id": "p2",
            "english": "tomorrow",
            "german": "mañana"
          },
          {
            "id": "p3",
            "english": "the morning",
            "german": "la mañana"
          },
          {
            "id": "p4",
            "english": "to see",
            "german": "ver"
          },
          {
            "id": "p5",
            "english": "to buy",
            "german": "comprar"
          },
          {
            "id": "p6",
            "english": "they are going to finish",
            "german": "van a terminar"
          }
        ],
        "target_answer": "hoy, mañana, la mañana, ver, comprar, van a terminar",
        "meaning": "today, tomorrow, the morning, to see, to buy, they are going to finish",
        "explanation": "hoy (silent h) is 'today'; mañana is 'tomorrow' and la mañana is 'the morning'.",
        "id": "es1202_e1"
      },
      {
        "type": "shift_select",
        "prompt": "What does 'mañana por la mañana' mean in English?",
        "options": [
          "tomorrow morning",
          "every morning",
          "yesterday morning"
        ],
        "target_answer": "tomorrow morning",
        "meaning": "tomorrow morning",
        "explanation": "mañana ('tomorrow') + por la mañana ('in the morning') = tomorrow morning.",
        "id": "es1202_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'Today I am going to finish'",
        "target_answer": "Hoy voy a terminar",
        "meaning": "Today I am going to finish",
        "word_bank": [
          "Hoy",
          "voy",
          "a",
          "terminar",
          "Mañana",
          "vas",
          "de"
        ],
        "explanation": "Hoy + voy + a + terminar.",
        "id": "es1202_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that tomorrow we are going to buy the book",
        "cues": [
          "Tomorrow → Mañana",
          "we are going to buy → vamos a comprar",
          "the book → el libro"
        ],
        "idea_parts": [
          "Tomorrow → Mañana",
          "we are going to buy → vamos a comprar",
          "the book → el libro"
        ],
        "target_answer": "Mañana vamos a comprar el libro",
        "meaning": "Tomorrow we are going to buy the book",
        "word_bank": [
          "Mañana",
          "vamos",
          "a",
          "comprar",
          "el",
          "libro",
          "Hoy",
          "voy",
          "la"
        ],
        "explanation": "Mañana vamos a comprar el libro.",
        "id": "es1202_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Hoy vamos a comer aquí",
        "replays": 2,
        "target_answer": "Hoy vamos a comer aquí",
        "meaning": "Today we are going to eat here",
        "cues": [
          "Today (silent h): Hoy",
          "we are going to eat: vamos a comer",
          "here: aquí"
        ],
        "explanation": "Hoy vamos a comer aquí.",
        "affirmation": "Clean time marker + near future!",
        "id": "es1202_e5"
      }
    ],
    "summary": {
      "outcome": "Coordinate hoy and mañana with near-future plans across -ar, -er, and -ir verbs.",
      "use_example": {
        "german": "Hoy voy a terminar y mañana vamos a celebrar.",
        "english": "Today I am going to finish and tomorrow we are going to celebrate."
      },
      "takeaway": "hoy has a silent H (from Latin hodiē); mañana serves as both 'tomorrow' and 'morning'.",
      "curiosity_teaser": "Up next ([1203] Pronoun Hook vs Left-Walk: lo quiero vs quiero verlo): master the two legal parking spots for object pronouns in two-verb chains!"
    },
    "twist": {
      "prompt": "Assemble: 'Tomorrow I am going to see Madrid'",
      "target_answer": "Mañana voy a ver Madrid",
      "word_bank": [
        "Mañana",
        "voy",
        "a",
        "ver",
        "Madrid",
        "Hoy",
        "vas",
        "de"
      ],
      "explanation": "Mañana voy a ver Madrid."
    }
  },
  {
    "id": 1203,
    "slug": "pronoun-hook-vs-left-walk",
    "title": "Pronoun Hook vs Left-Walk: lo quiero vs quiero verlo",
    "subtitle": "Why Spanish lets object pronouns either walk left of the conjugated verb (Lo quiero ver) or hook onto the tail of the infinitive (Quiero verlo, Voy a comprarlo)",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "lo",
      "la",
      "ver",
      "comprar",
      "confirmar",
      "preparar",
      "voy",
      "querer",
      "puedo"
    ],
    "table_word_ids": [
      "lo",
      "la",
      "ver",
      "comprar",
      "confirmar",
      "preparar"
    ],
    "hook": {
      "title": "Two Legal Parking Spots for 'It'",
      "content": "This is one of the most liberating rules in *Complete Spanish*. When you have ONE conjugated verb ('I want it'), the object pronoun has only one spot: right in front of the verb (Lo quiero). But when you have a TWO-VERB chain — like quiero ver ('I want to see'), voy a comprar ('I am going to buy'), or puedo confirmar ('I can confirm') — Spanish gives you a 100% free choice between TWO spots!"
    },
    "pattern": {
      "title": "Option 1: Walk Before the First Verb — Option 2: Hook onto the Infinitive!",
      "content": "Want to say 'I am going to buy it' (referring to el libro)?\n• Spot 1 (Left-Walk): Lo voy a comprar.\n• Spot 2 (Infinitive Hook): Voy a comprarlo.\nBoth are 100% natural, everyday Spanish with zero difference in meaning! The only forbidden spot is in the middle between the two verbs (*Voy a lo comprar is impossible)."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I want to see it (hooked)",
            "german": "quiero verlo"
          },
          {
            "id": "p2",
            "english": "I want to see it (left-walk)",
            "german": "lo quiero ver"
          },
          {
            "id": "p3",
            "english": "I am going to buy it (hooked)",
            "german": "voy a comprarlo"
          },
          {
            "id": "p4",
            "english": "I am going to buy it (left-walk)",
            "german": "lo voy a comprar"
          },
          {
            "id": "p5",
            "english": "I can confirm it (feminine, hooked)",
            "german": "puedo confirmarla"
          }
        ],
        "target_answer": "quiero verlo, lo quiero ver, voy a comprarlo, lo voy a comprar, puedo confirmarla",
        "meaning": "I want to see it (hooked), I want to see it (left-walk), I am going to buy it (hooked), I am going to buy it (left-walk), I can confirm it (feminine, hooked)",
        "explanation": "Before the conjugated verb (two words) or hooked onto the infinitive (one welded word) — never in between!",
        "id": "es1203_e1"
      },
      {
        "type": "morpheme_tiles",
        "prompt": "Hook 'la' ('it', feminine) onto the tail of 'preparar' to form 'to prepare it':",
        "tile_options": [
          "preparar",
          "la",
          "lo",
          "a"
        ],
        "target_answer": "prepararla",
        "meaning": "prepararla (to prepare it)",
        "explanation": "preparar + la welds into one word: prepararla.",
        "id": "es1203_e2"
      },
      {
        "type": "shift_select",
        "prompt": "Which of these three ways to say 'I am going to see it' is FORBIDDEN in Spanish?",
        "options": [
          "*Voy a lo ver",
          "Voy a verlo",
          "Lo voy a ver"
        ],
        "target_answer": "*Voy a lo ver",
        "meaning": "Forbidden middle position",
        "explanation": "Unlike French (Je vais le voir), Spanish NEVER puts an object pronoun between the two verbs! Put it at the very front (Lo voy a ver) or welded to the tail (Voy a verlo).",
        "id": "es1203_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble using the Left-Walk position: 'I am going to buy it'",
        "target_answer": "Lo voy a comprar",
        "meaning": "I am going to buy it",
        "word_bank": [
          "Lo",
          "voy",
          "a",
          "comprar",
          "La",
          "comprarlo",
          "de"
        ],
        "explanation": "Lo + voy + a + comprar — pronoun walks in front of the whole verb chain.",
        "id": "es1203_e4"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say 'I am going to see it today' by hooking 'lo' onto the end of 'ver'",
        "cues": [
          "I am going to → Voy a",
          "to see it (ver + lo welded) → verlo",
          "today → hoy"
        ],
        "idea_parts": [
          "I am going to → Voy a",
          "see it → verlo",
          "today → hoy"
        ],
        "target_answer": "Voy a verlo hoy",
        "meaning": "I am going to see it today",
        "word_bank": [
          "Voy",
          "a",
          "verlo",
          "hoy",
          "ver",
          "lo",
          "mañana",
          "la"
        ],
        "explanation": "Voy a verlo hoy — hooking onto the infinitive keeps the thought flowing in English-like order!",
        "diagnosis": {
          "slip": "wrote ver lo as two words",
          "cue": "When placed after an infinitive, the pronoun must attach as one single word: verlo."
        },
        "id": "es1203_e5"
      }
    ],
    "summary": {
      "outcome": "Place object pronouns either before the conjugated verb (Lo voy a ver) or welded onto the infinitive (Voy a verlo).",
      "use_example": {
        "german": "Voy a comprarlo hoy — sí, lo voy a comprar.",
        "english": "I am going to buy it today — yes, I am going to buy it."
      },
      "takeaway": "Front of the train (Lo voy a ver) or hooked to the caboose (Voy a verlo) — never between the cars!",
      "curiosity_teaser": "Up next ([13] por vs para): master Spanish's two words for 'for' with the Arrow and the Scale."
    },
    "twist": {
      "prompt": "Assemble: 'I cannot see it'",
      "target_answer": "No puedo verlo",
      "word_bank": [
        "No",
        "puedo",
        "verlo",
        "ver",
        "la",
        "voy"
      ],
      "explanation": "No puedo verlo (or No lo puedo ver)."
    }
  },
  {
    "id": 13,
    "slug": "por-vs-para",
    "title": "por vs para",
    "subtitle": "Cause/exchange (por) vs goal/destination (para) — resolving the classic struggle",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "para",
      "por",
      "regalo",
      "invitación",
      "gracias",
      "mañana",
      "aquí",
      "comprender",
      "mi"
    ],
    "table_word_ids": [
      "para",
      "por",
      "regalo",
      "invitación",
      "gracias",
      "mañana"
    ],
    "hook": {
      "title": "Why English 'For' Hides Two Opposite Directions",
      "content": "In English, 'for' points both forward toward a goal ('This gift is FOR you', 'I'm leaving FOR Madrid') and backward toward a cause or exchange ('Thanks FOR the invitation', 'I paid ten euros FOR the book'). Spanish separates those two mental pictures cleanly into para and por!"
    },
    "pattern": {
      "title": "Para Is the Forward Arrow; Por Is the Cause, Scale & Path",
      "content": "• **para** = the Forward Arrow →: recipient (un regalo para ti 'a gift for you'), destination (el tren para Madrid 'the train for Madrid'), deadline (para mañana 'for/by tomorrow'), and goal before an infinitive (para comprender 'in order to understand').\n• **por** = the Cause, Scale & Path ⚖️: motive/cause (gracias por la invitación 'thanks because of the invitation', por favor), exchange/price on a scale (por diez euros), time of day (por la mañana), and path through space (por aquí 'this way / around here')!",
      "linguist_note": "Spanish por continues Latin prō + per; para fused Old Spanish por + a ('for-to' → forward direction).",
      "trap_note": "After prepositions (para, por, de, a, sin), 'yo' becomes mí (with an accent: para mí 'for me') and 'tú' becomes ti (without an accent: para ti 'for you')!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "for (recipient, destination, deadline, 'in order to')",
            "german": "para"
          },
          {
            "id": "p2",
            "english": "for (because of, in exchange for, through)",
            "german": "por"
          },
          {
            "id": "p3",
            "english": "a gift for you",
            "german": "un regalo para ti"
          },
          {
            "id": "p4",
            "english": "thanks for (because of) the invitation",
            "german": "gracias por la invitación"
          },
          {
            "id": "p5",
            "english": "in order to understand",
            "german": "para comprender"
          },
          {
            "id": "p6",
            "english": "around here / this way",
            "german": "por aquí"
          }
        ],
        "target_answer": "para, por, un regalo para ti, gracias por la invitación, para comprender, por aquí",
        "meaning": "for (recipient, destination, deadline, 'in order to'), for (because of, in exchange for, through), a gift for you, thanks for (because of) the invitation, in order to understand, around here / this way",
        "explanation": "para points forward to the target/goal; por looks back at the cause, price, or path.",
        "id": "es13_e1"
      },
      {
        "type": "shift_select",
        "prompt": "You bought a present to give to your mother (she is the recipient). Which preposition do you use?",
        "options": [
          "Es un regalo para mi madre",
          "Es un regalo por mi madre",
          "Es un regalo a mi madre"
        ],
        "target_answer": "Es un regalo para mi madre",
        "meaning": "It is a gift for my mother",
        "explanation": "The recipient at the end of the forward arrow always takes para.",
        "id": "es13_e2"
      },
      {
        "type": "shift_select",
        "prompt": "You are thanking someone BECAUSE OF their invitation. Which preposition follows gracias?",
        "options": [
          "Gracias por la invitación",
          "Gracias para la invitación",
          "Gracias de la invitación"
        ],
        "target_answer": "Gracias por la invitación",
        "meaning": "Thanks for the invitation",
        "explanation": "The invitation is the cause/motive of your gratitude (or what you give thanks in exchange for), so it always takes por: Gracias por...",
        "id": "es13_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'It is a gift for tomorrow'",
        "target_answer": "Es un regalo para mañana",
        "meaning": "It is a gift for tomorrow",
        "word_bank": [
          "Es",
          "un",
          "regalo",
          "para",
          "mañana",
          "por",
          "una",
          "ayer"
        ],
        "explanation": "Deadlines and target dates point forward with para: para mañana.",
        "id": "es13_e4"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say: 'Thank you for the coffee'",
        "cues": [
          "Thank you → Gracias",
          "for (cause/exchange) → por",
          "the coffee → el café"
        ],
        "idea_parts": [
          "Thanks → Gracias",
          "for → por",
          "the coffee → el café"
        ],
        "target_answer": "Gracias por el café",
        "meaning": "Thank you for the coffee",
        "word_bank": [
          "Gracias",
          "por",
          "el",
          "café",
          "para",
          "la",
          "regalo"
        ],
        "explanation": "Gracias por el café — gracias ALWAYS takes por!",
        "diagnosis": {
          "slip": "used para after Gracias",
          "cue": "Gratitude looks back at the cause/reason, so gracias is always followed by por."
        },
        "id": "es13_e5"
      }
    ],
    "summary": {
      "outcome": "Distinguish para (recipient, destination, deadline, 'in order to') from por (cause, exchange, path, time of day).",
      "use_example": {
        "german": "Gracias por el regalo — es para mi madre.",
        "english": "Thanks for the gift — it is for my mother."
      },
      "takeaway": "para = forward arrow toward recipient, destination, deadline, or goal; por = cause, exchange, or path through.",
      "curiosity_teaser": "Up next ([1301] para: The Arrow): practice all four forward-arrow uses of para."
    },
    "twist": {
      "prompt": "Assemble: 'It is for you (informal: para ti)'",
      "target_answer": "Es para ti",
      "word_bank": [
        "Es",
        "para",
        "ti",
        "por",
        "tú",
        "Está"
      ],
      "explanation": "After a preposition like para or por, tú becomes ti: para ti!"
    },
    "foreshadow": {
      "line": "Next in Topic 14: why Spanish possessives (mi/mis, su/sus) agree with the thing owned rather than the owner.",
      "resolvedIn": 14
    },
    "payoff": {
      "ofLesson": 12,
      "text": "Because para came from por + a, it shares the exact same forward-pointing arrow feel as ir a from Topic 12!"
    }
  },
  {
    "id": 1301,
    "slug": "para-the-arrow",
    "title": "para: The Arrow",
    "subtitle": "Destination, deadline, recipient, goal: un regalo para ti, para mañana, para comprender",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "para",
      "regalo",
      "mañana",
      "comprender",
      "hablar",
      "vivir",
      "terminar",
      "madre",
      "amigo"
    ],
    "table_word_ids": [
      "para",
      "regalo",
      "mañana",
      "comprender",
      "hablar",
      "vivir"
    ],
    "hook": {
      "title": "Four Targets of the Para Arrow",
      "content": "1) **Recipient**: Es para mi amigo ('It's for my friend'), Es para mí ('It's for me').\n2) **Destination**: El tren para Madrid ('The train for/to Madrid').\n3) **Deadline**: Es para mañana ('It's due for/by tomorrow').\n4) **Goal ('in order to' + infinitive)**: Estudio para comprender ('I study in order to understand')."
    },
    "pattern": {
      "title": "Why 'Para + Infinitive' Means 'In Order To'",
      "content": "In English, we often say 'to' when we mean 'in order to': 'I'm calling to confirm'. In Spanish, whenever 'to [verb]' means 'in order to [verb]', you MUST use para + infinitive: para confirmar ('in order to confirm')!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "for my friend (recipient)",
            "german": "para mi amigo"
          },
          {
            "id": "p2",
            "english": "for tomorrow (deadline)",
            "german": "para mañana"
          },
          {
            "id": "p3",
            "english": "for Madrid (destination)",
            "german": "para Madrid"
          },
          {
            "id": "p4",
            "english": "in order to understand (goal)",
            "german": "para comprender"
          },
          {
            "id": "p5",
            "english": "in order to finish (goal)",
            "german": "para terminar"
          }
        ],
        "target_answer": "para mi amigo, para mañana, para Madrid, para comprender, para terminar",
        "meaning": "for my friend (recipient), for tomorrow (deadline), for Madrid (destination), in order to understand (goal), in order to finish (goal)",
        "explanation": "All four uses of para point forward to an endpoint or goal.",
        "id": "es1301_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'I want time in order to finish'?",
        "options": [
          "Quiero tiempo para terminar",
          "Quiero tiempo a terminar",
          "Quiero tiempo por terminar"
        ],
        "target_answer": "Quiero tiempo para terminar",
        "meaning": "I want time in order to finish",
        "explanation": "When 'to [verb]' means 'in order to [verb]', Spanish uses para + infinitive.",
        "id": "es1301_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'The gift is for my mother'",
        "target_answer": "El regalo es para mi madre",
        "meaning": "The gift is for my mother",
        "word_bank": [
          "El",
          "regalo",
          "es",
          "para",
          "mi",
          "madre",
          "por",
          "La",
          "está"
        ],
        "explanation": "El regalo es para mi madre — recipient takes para.",
        "id": "es1301_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that the confirmation is for tomorrow",
        "cues": [
          "The confirmation → La confirmación",
          "is → es",
          "for tomorrow (deadline) → para mañana"
        ],
        "idea_parts": [
          "subject → La confirmación",
          "verb → es",
          "deadline → para mañana"
        ],
        "target_answer": "La confirmación es para mañana",
        "meaning": "The confirmation is for tomorrow",
        "word_bank": [
          "La",
          "confirmación",
          "es",
          "para",
          "mañana",
          "por",
          "hoy",
          "el"
        ],
        "explanation": "La confirmación es para mañana — deadline takes para.",
        "id": "es1301_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Es un regalo para mi amigo",
        "replays": 2,
        "target_answer": "Es un regalo para mi amigo",
        "meaning": "It is a gift for my friend",
        "cues": [
          "It is: Es",
          "a gift: un regalo",
          "for my friend: para mi amigo"
        ],
        "explanation": "Es un regalo para mi amigo.",
        "affirmation": "Clean recipient arrow with para!",
        "id": "es1301_e5"
      }
    ],
    "summary": {
      "outcome": "Deploy para for recipients, destinations, deadlines, and 'in order to' purpose clauses.",
      "use_example": {
        "german": "Es un regalo para mi madre y la confirmación es para mañana.",
        "english": "It is a gift for my mother and the confirmation is for tomorrow."
      },
      "takeaway": "Whenever 'to + verb' in English can be expanded to 'in order to + verb', use para + infinitive.",
      "curiosity_teaser": "Up next ([1302] por: The Motive and Path): master the cause, exchange, and path uses of por."
    },
    "twist": {
      "prompt": "Assemble: 'In order to understand Spanish'",
      "target_answer": "Para comprender el español",
      "word_bank": [
        "Para",
        "comprender",
        "el",
        "español",
        "Por",
        "a",
        "la"
      ],
      "explanation": "Para comprender el español."
    }
  },
  {
    "id": 1302,
    "slug": "por-motive-and-path",
    "title": "por: The Motive and Path",
    "subtitle": "Because of, in exchange for, through: gracias por la invitación, por la mañana, por aquí",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "por",
      "gracias",
      "invitación",
      "por_favor",
      "mañana",
      "noche",
      "aquí",
      "allí",
      "diez"
    ],
    "table_word_ids": [
      "por",
      "gracias",
      "invitación",
      "por_favor",
      "mañana",
      "noche"
    ],
    "hook": {
      "title": "The Scale and the Tunnel",
      "content": "Picture two images for por:\n1) **A Balance Scale (Exchange & Cause)**: I give you thanks in exchange for / because of the invitation (gracias por la invitación); I buy the book in exchange for ten euros (por diez euros); I do it as a favor (por favor).\n2) **A Tunnel or Path Through Space/Time**: walking through here (por aquí), traveling by train, or during a part of the day (por la mañana 'in the morning', por la noche 'at night')!"
    },
    "pattern": {
      "title": "Contrast: Para Mañana vs Por la Mañana",
      "content": "Look at how the article changes the meaning: para mañana = 'for/by tomorrow' (deadline arrow); por la mañana = 'in the morning' (time window)!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "thanks for the invitation",
            "german": "gracias por la invitación"
          },
          {
            "id": "p2",
            "english": "in the morning",
            "german": "por la mañana"
          },
          {
            "id": "p3",
            "english": "at night / in the evening",
            "german": "por la noche"
          },
          {
            "id": "p4",
            "english": "around here / this way",
            "german": "por aquí"
          },
          {
            "id": "p5",
            "english": "for ten euros (in exchange for)",
            "german": "por diez euros"
          },
          {
            "id": "p6",
            "english": "please ('by favor')",
            "german": "por favor"
          }
        ],
        "target_answer": "gracias por la invitación, por la mañana, por la noche, por aquí, por diez euros, por favor",
        "meaning": "thanks for the invitation, in the morning, at night / in the evening, around here / this way, for ten euros (in exchange for), please ('by favor')",
        "explanation": "por expresses motive/cause, exchange/price, path through space, and parts of the day.",
        "id": "es1302_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Contrast the two phrases: what is the difference between 'para mañana' and 'por la mañana'?",
        "options": [
          "para mañana = 'for/by tomorrow' (deadline); por la mañana = 'in the morning' (part of day)",
          "They mean the exact same thing",
          "para mañana = 'in the morning'; por la mañana = 'for tomorrow'"
        ],
        "target_answer": "para mañana = 'for/by tomorrow' (deadline); por la mañana = 'in the morning' (part of day)",
        "meaning": "for tomorrow vs in the morning",
        "explanation": "para points to tomorrow's deadline; por la mañana names the morning time window.",
        "id": "es1302_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'Is there a hotel around here?'",
        "target_answer": "Hay un hotel por aquí",
        "meaning": "Is there a hotel around here?",
        "word_bank": [
          "Hay",
          "un",
          "hotel",
          "por",
          "aquí",
          "para",
          "Está",
          "la"
        ],
        "explanation": "¿Hay un hotel por aquí? — por aquí means 'around here / through this area'.",
        "id": "es1302_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say: 'Thank you very much for the invitation'",
        "cues": [
          "Thank you very much → Muchas gracias",
          "for (because of) → por",
          "the invitation → la invitación"
        ],
        "idea_parts": [
          "Thank you very much → Muchas gracias",
          "for the invitation → por la invitación"
        ],
        "target_answer": "Muchas gracias por la invitación",
        "meaning": "Thank you very much for the invitation",
        "word_bank": [
          "Muchas",
          "gracias",
          "por",
          "la",
          "invitación",
          "para",
          "el",
          "regalo"
        ],
        "explanation": "Muchas gracias por la invitación.",
        "id": "es1302_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Estudio por la mañana",
        "replays": 2,
        "target_answer": "Estudio por la mañana",
        "meaning": "I study in the morning",
        "cues": [
          "I study: Estudio",
          "in the (during the): por la",
          "morning: mañana"
        ],
        "explanation": "Estudio por la mañana.",
        "affirmation": "You nailed por la mañana!",
        "id": "es1302_e5"
      }
    ],
    "summary": {
      "outcome": "Use por for gratitude/cause, price/exchange, spatial paths (por aquí), and parts of the day (por la mañana).",
      "use_example": {
        "german": "Muchas gracias por la invitación — voy por la mañana.",
        "english": "Thank you very much for the invitation — I am going in the morning."
      },
      "takeaway": "por = because of, in exchange for, through/around (por aquí), and during parts of the day (por la mañana).",
      "curiosity_teaser": "Up next ([14] Possessives Agree with the Thing): see why mi/mis, tu/tus, and su/sus agree with the possession rather than the owner."
    },
    "twist": {
      "prompt": "Assemble: 'I buy the book for ten euros'",
      "target_answer": "Compro el libro por diez euros",
      "word_bank": [
        "Compro",
        "el",
        "libro",
        "por",
        "diez",
        "euros",
        "para",
        "la",
        "a"
      ],
      "explanation": "Price/exchange on the scale always takes por: por diez euros."
    }
  },
  {
    "id": 14,
    "slug": "possessives-agree-with-thing",
    "title": "Possessives Agree with the Thing",
    "subtitle": "mi, tu, su, mis, tus, sus — possessives agree with the possession, not the owner",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "mi",
      "tu_poss",
      "su",
      "nuestro",
      "padre",
      "madre",
      "hermano",
      "amigo",
      "casa",
      "libro"
    ],
    "table_word_ids": [
      "mi",
      "tu_poss",
      "su",
      "nuestro",
      "padre",
      "madre"
    ],
    "hook": {
      "title": "Look at the Possession, Not the Owner!",
      "content": "In English, you choose 'his' or 'her' by looking at the owner ('Paul's mother' = his mother; 'María's book' = her book). In Spanish, possessives look forward at the THING OWNED! Mi ('my'), tu ('your', informal — no accent!), and su ('his, her, its, your-formal, or their') only change for SINGULAR vs PLURAL: mi libro → mis libros, tu amigo → tus amigos, su casa → sus casas! Meanwhile, nuestro ('our') changes for both gender and number: nuestro padre, nuestra madre, nuestros amigos, nuestras casas."
    },
    "pattern": {
      "title": "Unaccented 'tu' ('your') vs Accented 'tú' ('you')",
      "content": "Here is why written accents matter so much in Spanish: tú (with an accent) is the subject pronoun 'you' (Tú tienes), while tu (without an accent) is the possessive 'your' (tu casa 'your house')!",
      "linguist_note": "Latin meus, tuus, suus reduced in proclitic position to mi, tu, su before nouns.",
      "trap_note": "Never write an accent on possessive tu ('your': tu libro) or mi ('my': mi casa). Accented tú means 'you' and accented mí means 'me' after a preposition (para mí)!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "my (singular / plural: mis)",
            "german": "mi"
          },
          {
            "id": "p2",
            "english": "your (informal, no accent! / plural: tus)",
            "german": "tu"
          },
          {
            "id": "p3",
            "english": "his, her, your-formal, their (plural: sus)",
            "german": "su"
          },
          {
            "id": "p4",
            "english": "our (nuestro / nuestra / nuestros / nuestras)",
            "german": "nuestro"
          },
          {
            "id": "p5",
            "english": "father (plural los padres = parents)",
            "german": "el padre"
          },
          {
            "id": "p6",
            "english": "mother",
            "german": "la madre"
          }
        ],
        "target_answer": "mi, tu, su, nuestro, el padre, la madre",
        "meaning": "my (singular / plural: mis), your (informal, no accent! / plural: tus), his, her, your-formal, their (plural: sus), our (nuestro / nuestra / nuestros / nuestras), father (plural los padres = parents), mother",
        "explanation": "mi/tu/su add -s for plural possessions (mis/tus/sus); nuestro agrees in both gender and number.",
        "id": "es14_e1"
      },
      {
        "type": "reverse_cognate",
        "prompt": "Spanish hermano ('brother', hermana 'sister') comes from Latin frāter germānus ('full/genuine brother'). Which English adjective meaning 'closely relevant or belonging to the same family of ideas' is its exact twin?",
        "target_answer": "germane",
        "meaning": "something 'germane' to a topic belongs to the same nuclear family!",
        "explanation": "Latin germānus ('of the same parents/seed') gave English germane and Spanish hermano.",
        "id": "es14_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'my friends' in Spanish?",
        "options": [
          "mis amigos",
          "mi amigos",
          "mis amigo"
        ],
        "target_answer": "mis amigos",
        "meaning": "my friends",
        "explanation": "Because amigos is plural, mi adds -s: mis amigos.",
        "id": "es14_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'Our family is big'",
        "target_answer": "Nuestra familia es grande",
        "meaning": "Our family is big",
        "word_bank": [
          "Nuestra",
          "familia",
          "es",
          "grande",
          "Nuestro",
          "Nuestras",
          "está"
        ],
        "explanation": "la familia is feminine singular, so nuestro becomes nuestra: Nuestra familia es grande.",
        "id": "es14_e4"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "ask a friend where their house is: 'Where is your house?'",
        "cues": [
          "Where is (location) → ¿Dónde está",
          "your (unaccented tu) house → tu casa?"
        ],
        "idea_parts": [
          "Where is → Dónde está",
          "your house → tu casa"
        ],
        "target_answer": "Dónde está tu casa",
        "meaning": "Where is your house?",
        "word_bank": [
          "Dónde",
          "está",
          "tu",
          "casa",
          "tú",
          "tus",
          "es",
          "mi"
        ],
        "explanation": "¿Dónde está tu casa? — unaccented tu means 'your'.",
        "diagnosis": {
          "slip": "used accented tú before casa",
          "cue": "tú with a tilde means 'you'; unaccented tu means 'your': tu casa."
        },
        "id": "es14_e5"
      }
    ],
    "summary": {
      "outcome": "Match mi/mis, tu/tus, su/sus in number and nuestro/a/os/as in gender and number with the possession.",
      "use_example": {
        "german": "Mi padre, mi madre y mis hermanos viven en nuestra casa.",
        "english": "My father, my mother, and my siblings live in our house."
      },
      "takeaway": "mi, tu, and su care only whether the possession is singular or plural; nuestro cares about gender too.",
      "curiosity_teaser": "Up next ([1401] Singular vs Plural Possessions): drill mi/mis, tu/tus, and nuestro/nuestra across family and objects."
    },
    "twist": {
      "prompt": "Assemble: 'They are my friends'",
      "target_answer": "Son mis amigos",
      "word_bank": [
        "Son",
        "mis",
        "amigos",
        "Es",
        "mi",
        "Están"
      ],
      "explanation": "Son mis amigos — plural verb son + plural mis amigos."
    },
    "foreshadow": {
      "line": "You just unlocked the Sentence Gate! In Topic 15, we count from 1 to 100 and discover why Spanish expresses age and hunger with tener.",
      "resolvedIn": 15
    },
    "payoff": {
      "ofLesson": 13,
      "text": "In Topic 13 you saw para mí ('for me', with an accent); now you see why unstressed mi ('my', no accent) omits the tilde!"
    }
  },
  {
    "id": 1401,
    "slug": "singular-vs-plural-possessions",
    "title": "Singular vs Plural Possessions",
    "subtitle": "mi amigo vs mis amigos, su libro vs sus libros, nuestro/nuestra",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "mi",
      "tu_poss",
      "su",
      "nuestro",
      "amigo",
      "hermano",
      "padre",
      "madre",
      "libro",
      "llave"
    ],
    "table_word_ids": [
      "mi",
      "tu_poss",
      "su",
      "nuestro",
      "amigo",
      "hermano"
    ],
    "hook": {
      "title": "One Owner, Many Possessions",
      "content": "In English, 'my book' and 'my books' use the exact same 'my'. In Spanish, if you own two books or two keys, the possessive MUST put on its plural -s: mis libros, tus llaves, sus amigos!"
    },
    "pattern": {
      "title": "Why 'Los Padres' Means 'The Parents'",
      "content": "In Spanish, the masculine plural of family words covers mixed-gender pairs: el padre ('the father') + la madre ('the mother') = mis padres ('my parents'); el hermano + la hermana = mis hermanos ('my brothers and sisters / siblings')!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "my friend",
            "german": "mi amigo"
          },
          {
            "id": "p2",
            "english": "my friends",
            "german": "mis amigos"
          },
          {
            "id": "p3",
            "english": "your key",
            "german": "tu llave"
          },
          {
            "id": "p4",
            "english": "your keys",
            "german": "tus llaves"
          },
          {
            "id": "p5",
            "english": "our house (feminine)",
            "german": "nuestra casa"
          },
          {
            "id": "p6",
            "english": "my parents",
            "german": "mis padres"
          }
        ],
        "target_answer": "mi amigo, mis amigos, tu llave, tus llaves, nuestra casa, mis padres",
        "meaning": "my friend, my friends, your key, your keys, our house (feminine), my parents",
        "explanation": "Possessives pluralize whenever the noun they modify is plural.",
        "id": "es1401_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How does Spanish say 'our books' (masculine plural)?",
        "options": [
          "nuestros libros",
          "nuestro libros",
          "nuestras libros"
        ],
        "target_answer": "nuestros libros",
        "meaning": "our books",
        "explanation": "el libro is masculine plural (los libros), so nuestro becomes nuestros.",
        "id": "es1401_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I have my keys here'",
        "target_answer": "Tengo mis llaves aquí",
        "meaning": "I have my keys here",
        "word_bank": [
          "Tengo",
          "mis",
          "llaves",
          "aquí",
          "mi",
          "llave",
          "está"
        ],
        "explanation": "Tengo + mis llaves (plural) + aquí.",
        "id": "es1401_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that your parents live in Madrid",
        "cues": [
          "My parents → Mis padres",
          "live (3rd person plural of vivir) → viven",
          "in Madrid → en Madrid"
        ],
        "idea_parts": [
          "My parents → Mis padres",
          "live → viven",
          "in Madrid → en Madrid"
        ],
        "target_answer": "Mis padres viven en Madrid",
        "meaning": "My parents live in Madrid",
        "word_bank": [
          "Mis",
          "padres",
          "viven",
          "en",
          "Madrid",
          "Mi",
          "padre",
          "vivo"
        ],
        "explanation": "Mis padres viven en Madrid.",
        "id": "es1401_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Nuestra madre está aquí",
        "replays": 2,
        "target_answer": "Nuestra madre está aquí",
        "meaning": "Our mother is here",
        "cues": [
          "Our (feminine): Nuestra",
          "mother: madre",
          "is here: está aquí"
        ],
        "explanation": "Nuestra madre está aquí.",
        "affirmation": "Clean feminine agreement on nuestra!",
        "id": "es1401_e5"
      }
    ],
    "summary": {
      "outcome": "Pluralize mi/tu/su to mis/tus/sus and match nuestro/a/os/as to any noun.",
      "use_example": {
        "german": "Mis padres están en nuestra casa con mis amigos.",
        "english": "My parents are in our house with my friends."
      },
      "takeaway": "Plural noun = plural possessive (mis, tus, sus, nuestros, nuestras).",
      "curiosity_teaser": "Up next ([1402] Disambiguating su): see why 'su' covers five English words and how Spanish makes it crystal clear."
    },
    "twist": {
      "prompt": "Assemble: 'Where are your keys?'",
      "target_answer": "Dónde están tus llaves",
      "word_bank": [
        "Dónde",
        "están",
        "tus",
        "llaves",
        "tu",
        "está",
        "mi"
      ],
      "explanation": "¿Dónde están tus llaves? uses plural están + tus llaves."
    }
  },
  {
    "id": 1402,
    "slug": "disambiguating-su",
    "title": "Disambiguating su",
    "subtitle": "Why su hermano means 'his, her, your (usted), or their brother' and how Spanish clarifies it",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "su",
      "hermano",
      "padre",
      "madre",
      "amigo",
      "casa",
      "libro",
      "usted",
      "de"
    ],
    "table_word_ids": [
      "su",
      "hermano",
      "padre",
      "madre",
      "amigo",
      "casa"
    ],
    "hook": {
      "title": "The Five-in-One Word: su / sus",
      "content": "Because él ('he'), ella ('she'), usted ('you' formal), and ellos/ellas/ustedes ('they / you all') all share the 3rd person, they all share the exact same possessive: su (singular possession) and sus (plural possessions)! So su casa can mean 'his house', 'her house', 'your (formal) house', or 'their house'!"
    },
    "pattern": {
      "title": "How to Clarify When Context Isn't Enough: de él, de ella, de usted",
      "content": "Usually the conversation makes it obvious whose house it is. When you need to disambiguate, Spanish simply uses the article + noun + de ('of'): la casa de ella ('her house'), el libro de él ('his book'), la reservación de usted ('your reservation')!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "his / her / your (usted) / their book",
            "german": "su libro"
          },
          {
            "id": "p2",
            "english": "his / her / your (usted) / their books",
            "german": "sus libros"
          },
          {
            "id": "p3",
            "english": "her house (clarified)",
            "german": "la casa de ella"
          },
          {
            "id": "p4",
            "english": "his brother (clarified)",
            "german": "el hermano de él"
          },
          {
            "id": "p5",
            "english": "your (formal) reservation",
            "german": "su reservación"
          }
        ],
        "target_answer": "su libro, sus libros, la casa de ella, el hermano de él, su reservación",
        "meaning": "his / her / your (usted) / their book, his / her / your (usted) / their books, her house (clarified), his brother (clarified), your (formal) reservation",
        "explanation": "su/sus agrees in number with the possession (su libro vs sus libros), regardless of how many owners there are!",
        "id": "es1402_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Two brothers own ONE house together. How do you say 'their house' using su/sus?",
        "options": [
          "su casa (singular because there is only ONE house!)",
          "sus casa",
          "sus casas"
        ],
        "target_answer": "su casa (singular because there is only ONE house!)",
        "meaning": "their house",
        "explanation": "Even when there are multiple owners ('their'), one single house takes singular su: su casa!",
        "id": "es1402_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'María is looking for her brother (tiene su libro -> María tiene su libro)'",
        "target_answer": "María tiene su libro",
        "meaning": "María has her (or his/your) book",
        "word_bank": [
          "María",
          "tiene",
          "su",
          "libro",
          "sus",
          "la",
          "libros"
        ],
        "explanation": "María tiene su libro — one book takes singular su.",
        "id": "es1402_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "ask politely (using usted): 'Do you have your ticket?'",
        "cues": [
          "Do you have (usted) → ¿Tiene usted",
          "your (usted possessive) ticket → su billete?"
        ],
        "idea_parts": [
          "Do you (formal) have → Tiene usted",
          "your ticket → su billete"
        ],
        "target_answer": "Tiene usted su billete",
        "meaning": "Do you (formal) have your ticket?",
        "word_bank": [
          "Tiene",
          "usted",
          "su",
          "billete",
          "tu",
          "sus",
          "Tienes"
        ],
        "explanation": "¿Tiene usted su billete? — usted always pairs with su/sus, never tu/tus!",
        "diagnosis": {
          "slip": "used tu billete with usted",
          "cue": "Because usted is 3rd-person ('Your Mercy'), its possessive is su/sus: ¿Tiene usted su billete?"
        },
        "id": "es1402_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Ellos tienen sus libros",
        "replays": 2,
        "target_answer": "Ellos tienen sus libros",
        "meaning": "They have their books",
        "cues": [
          "They have: Ellos tienen",
          "their (plural books): sus",
          "books: libros"
        ],
        "explanation": "Ellos tienen sus libros — sus is plural because libros is plural.",
        "affirmation": "You nailed sus libros!",
        "id": "es1402_e5"
      }
    ],
    "summary": {
      "outcome": "Use su/sus across his, her, your (usted), and their, matching number strictly to the thing owned.",
      "use_example": {
        "german": "¿Tiene usted su billete y sus llaves?",
        "english": "Do you (formal) have your ticket and your keys?"
      },
      "takeaway": "One house owned by ten people is still singular su casa; ten books owned by one person is plural sus libros!",
      "curiosity_teaser": "Up next ([1403] Three Distances of Space: este, ese & aquel): discover how Spanish divides physical space into 'near me', 'near you', and 'over yonder'."
    },
    "twist": {
      "prompt": "Assemble: 'She has her keys'",
      "target_answer": "Ella tiene sus llaves",
      "word_bank": [
        "Ella",
        "tiene",
        "sus",
        "llaves",
        "su",
        "llave",
        "mis"
      ],
      "explanation": "Plural llaves requires plural sus: sus llaves."
    }
  },
  {
    "id": 1403,
    "slug": "three-distances-este-ese-aquel",
    "title": "Three Distances of Space: este, ese & aquel",
    "subtitle": "Matching Spanish's three spatial zones to the three persons: aquí/este (near me), ahí/ese (near you), allí/aquel (over yonder)",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "este",
      "ese",
      "aquel",
      "aquí",
      "allí",
      "libro",
      "mesa",
      "casa",
      "hotel",
      "café"
    ],
    "table_word_ids": [
      "este",
      "ese",
      "aquel",
      "aquí",
      "allí",
      "libro"
    ],
    "hook": {
      "title": "English Has Two Distances ('This' vs 'That'); Spanish Has Three!",
      "content": "In English, the universe is split in two: 'this' (near me) and 'that' (everything else). Spanish maps space onto the THREE grammatical persons:\n1) **Zone 1 (Near Me — yo / aquí)**: este libro ('this book'), esta mesa ('this table'), esto ('this thing/idea').\n2) **Zone 2 (Near You — tú / ahí)**: ese libro ('that book near you'), esa mesa ('that table'), eso ('that thing/idea you just mentioned').\n3) **Zone 3 (Far from Both of Us — él / allí)**: aquel hotel ('that hotel way over there'), aquella casa ('that house over yonder / long ago')!",
      "footnotes": [
        {
          "marker": "1",
          "title": "How 'Aquello' Paints Nostalgia in Time",
          "content": "Zone 3 (aquel, aquella, aquellos, aquellas) also works in time! En aquellos tiempos ('In those days long ago') places a memory far away on the horizon.",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Why Masculine Is 'Este / Ese' (Not *Esto / *Eso) Before a Noun!",
      "content": "Watch out for the #1 demonstrative trap: masculine singular before a noun ends in -e (este libro, ese café — plural estos libros, esos cafés)! The -o forms (esto, eso, aquello) are NEUTER pronouns used ONLY when pointing at an unnamed idea or mystery object ('What is this?' = ¿Qué es esto?, 'I understand that' = Comprendo eso)!",
      "trap_note": "Remember the rhyme: 'This and these both have T's' (este/esta/estos/estas = this/these; remove the T and you get ese/esa/esos/esas = that/those)!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "this book (near me, m.)",
            "german": "este libro"
          },
          {
            "id": "p2",
            "english": "this table (near me, f.)",
            "german": "esta mesa"
          },
          {
            "id": "p3",
            "english": "that coffee (near you, m.)",
            "german": "ese café"
          },
          {
            "id": "p4",
            "english": "that house (near you, f.)",
            "german": "esa casa"
          },
          {
            "id": "p5",
            "english": "that house way over there (far from both, f.)",
            "german": "aquella casa"
          },
          {
            "id": "p6",
            "english": "that thing / idea (neuter pronoun)",
            "german": "eso"
          }
        ],
        "target_answer": "este libro, esta mesa, ese café, esa casa, aquella casa, eso",
        "meaning": "this book (near me, m.), this table (near me, f.), that coffee (near you, m.), that house (near you, f.), that house way over there (far from both, f.), that thing / idea (neuter pronoun)",
        "explanation": "Zone 1 = este/esta; Zone 2 = ese/esa; Zone 3 = aquel/aquella; neuter ideas = esto/eso.",
        "id": "es1403_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'this coffee' (masculine singular noun)?",
        "options": [
          "este café",
          "*esto café",
          "esta café"
        ],
        "target_answer": "este café",
        "meaning": "this coffee",
        "explanation": "Masculine singular demonstrative before a noun is este (never *esto!).",
        "id": "es1403_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I want this book and that table (near you)'",
        "target_answer": "Quiero este libro y esa mesa",
        "meaning": "I want this book and that table",
        "word_bank": [
          "Quiero",
          "este",
          "libro",
          "y",
          "esa",
          "mesa",
          "esto",
          "ese",
          "esta"
        ],
        "explanation": "Quiero este libro (m., near me) y esa mesa (f., near you).",
        "id": "es1403_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that you understand that (referring to a whole idea just mentioned)",
        "cues": [
          "I understand → Comprendo",
          "that (neuter idea pronoun) → eso"
        ],
        "idea_parts": [
          "I understand → Comprendo",
          "that idea → eso"
        ],
        "target_answer": "Comprendo eso",
        "meaning": "I understand that",
        "word_bank": [
          "Comprendo",
          "eso",
          "ese",
          "esa",
          "este"
        ],
        "explanation": "Comprendo eso — when 'that' refers to a whole statement or idea without a gendered noun, use neuter eso!",
        "diagnosis": {
          "slip": "used ese instead of eso",
          "cue": "When no specific noun is named ('that idea/fact'), use the neuter pronoun eso."
        },
        "id": "es1403_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Aquella casa allí es hermosa",
        "replays": 2,
        "target_answer": "Aquella casa allí es hermosa",
        "meaning": "That house over there is beautiful",
        "cues": [
          "That (Zone 3 feminine): Aquella",
          "house over there: casa allí",
          "is beautiful: es hermosa"
        ],
        "explanation": "Aquella casa allí es hermosa — Zone 3 aquel/aquella pairs naturally with allí.",
        "affirmation": "Three spatial zones mastered!",
        "id": "es1403_e5"
      }
    ],
    "summary": {
      "outcome": "Distinguish este/esta (near me), ese/esa (near you), aquel/aquella (far from both), and neuter esto/eso.",
      "use_example": {
        "german": "Quiero este libro aquí, ese café y aquella mesa allí.",
        "english": "I want this book here, that coffee (near you), and that table way over there."
      },
      "takeaway": "Masculine singular before a noun is este/ese (plural estos/esos); esto and eso are only for unnamed ideas!",
      "curiosity_teaser": "Up next ([15] Numbers & Ages: 1–100): cross the Sentence Gate and learn why Spanish possesses ages and physical feelings with tener."
    },
    "twist": {
      "prompt": "Assemble: 'What is this (unnamed thing)?'",
      "target_answer": "Qué es esto",
      "word_bank": [
        "Qué",
        "es",
        "esto",
        "este",
        "esta",
        "está"
      ],
      "explanation": "¿Qué es esto? uses neuter esto because the object hasn't been named yet."
    }
  },
  {
    "id": 15,
    "slug": "numbers-and-ages-1-100",
    "title": "Numbers & Ages: 1–100",
    "subtitle": "Counting, prices, and expressing age as possession: tengo treinta años",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "uno",
      "dos",
      "tres",
      "cuatro",
      "cinco",
      "seis",
      "siete",
      "ocho",
      "nueve",
      "diez",
      "veinte",
      "treinta",
      "cien",
      "año",
      "tengo"
    ],
    "table_word_ids": [
      "uno",
      "dos",
      "tres",
      "cuatro",
      "cinco",
      "seis"
    ],
    "hook": {
      "title": "Why You 'Have' Your Years in Spanish",
      "content": "In English, your age is something you ARE: 'I am thirty years old'. In Spanish (just like French and Italian), your years are treasures you HAVE accumulated and hold in your hands with tener: Tengo treinta años (word for word: 'I have thirty years'). Asking someone's age is ¿Cuántos años tienes? ('How many years do you have?')!"
    },
    "pattern": {
      "title": "Diphthong Twins Inside the Numbers: Siete (7), Nueve (9), Diez (10), Cien (100)",
      "content": "Remember our stress-splitting vowel rule from Topic 10 (e → ie, o → ue)? Look at how it explains the numbers! Latin septem → siete (7), Latin novem → nueve (9, just like nuevo 'new'!), Latin decem → diez (10, English decimal), and Latin centum → cien (100, English century)!",
      "linguist_note": "Latin double -nn- in annus palatalized to /ɲ/ in Spanish, written ñ (originally a scribal shorthand of a small n written above the first n).",
      "trap_note": "Never omit the tilde on el año ('the year', /ˈaɲo/) — without the tilde on ñ, the word changes meaning completely!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "one (un / una before a noun)",
            "german": "uno"
          },
          {
            "id": "p2",
            "english": "five (quintet)",
            "german": "cinco"
          },
          {
            "id": "p3",
            "english": "seven (septem → e→ie)",
            "german": "siete"
          },
          {
            "id": "p4",
            "english": "nine (novem → o→ue)",
            "german": "nueve"
          },
          {
            "id": "p5",
            "english": "twenty / thirty",
            "german": "veinte / treinta"
          },
          {
            "id": "p6",
            "english": "one hundred (cent)",
            "german": "cien"
          }
        ],
        "target_answer": "uno, cinco, siete, nueve, veinte / treinta, cien",
        "meaning": "one (un / una before a noun), five (quintet), seven (septem → e→ie), nine (novem → o→ue), twenty / thirty, one hundred (cent)",
        "explanation": "siete, nueve, diez, and cien all show the familiar e→ie and o→ue diphthong shifts.",
        "id": "es15_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'I am twenty years old' in Spanish?",
        "options": [
          "Tengo veinte años",
          "*Soy veinte años",
          "*Estoy veinte años"
        ],
        "target_answer": "Tengo veinte años",
        "meaning": "I am twenty years old",
        "explanation": "Age is possessed with tener: Tengo veinte años ('I have twenty years').",
        "id": "es15_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I am thirty years old'",
        "target_answer": "Tengo treinta años",
        "meaning": "I am thirty years old",
        "word_bank": [
          "Tengo",
          "treinta",
          "años",
          "Soy",
          "Estoy",
          "veinte"
        ],
        "explanation": "Tengo + treinta + años.",
        "id": "es15_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "ask a friend how old they are: 'How many years do you have?'",
        "cues": [
          "How many (masculine plural to match años) → ¿Cuántos",
          "years → años",
          "do you have → tienes?"
        ],
        "idea_parts": [
          "How many years → Cuántos años",
          "do you have → tienes"
        ],
        "target_answer": "Cuántos años tienes",
        "meaning": "How old are you?",
        "word_bank": [
          "Cuántos",
          "años",
          "tienes",
          "Cuánto",
          "eres",
          "estás",
          "tengo"
        ],
        "explanation": "¿Cuántos años tienes? — cuántos agrees in masculine plural with años.",
        "diagnosis": {
          "slip": "used eres or estás for age",
          "cue": "Spanish never uses ser or estar for age — always use tener + años!"
        },
        "id": "es15_e4"
      },
      {
        "type": "literal_gloss",
        "prompt": "Which English word-for-word blueprint mirrors Spanish 'Tengo treinta años'?",
        "german": "Tengo treinta años",
        "natural": "I am thirty years old",
        "options": [
          "I am thirty years old",
          "I-have thirty years",
          "I am thirty of years",
          "Thirty years I stand"
        ],
        "target_answer": "I-have thirty years",
        "meaning": "I am thirty years old (literal Spanish blueprint: I-have thirty years)",
        "explanation": "Spanish views age as the count of years you hold: Tengo treinta años.",
        "id": "es15_e5"
      }
    ],
    "summary": {
      "outcome": "Count from 1 to 100 and ask and state ages using tener + años.",
      "use_example": {
        "german": "¿Cuántos años tienes? — Tengo treinta años.",
        "english": "How old are you? — I am thirty years old."
      },
      "takeaway": "In Spanish you are not 'years old' — you HAVE years (Tengo X años).",
      "curiosity_teaser": "Up next ([1501] Numbers 1 to 30): master counting 1–30 and see why uno drops its -o before masculine nouns."
    },
    "twist": {
      "prompt": "Assemble: 'He is ten years old'",
      "target_answer": "Tiene diez años",
      "word_bank": [
        "Tiene",
        "diez",
        "años",
        "Es",
        "Está",
        "Tengo"
      ],
      "explanation": "Tiene diez años ('He/she has ten years')."
    },
    "foreshadow": {
      "line": "Next in Topic 16: the days of the week (named after the planets!) and how Spanish says 'on Monday' without a preposition.",
      "resolvedIn": 16
    },
    "payoff": {
      "ofLesson": 14,
      "text": "Having crossed the Sentence Gate after Topic 14, you now enter Phase 3 (Time, Past & Comparison)."
    }
  },
  {
    "id": 1501,
    "slug": "numbers-1-to-30",
    "title": "Numbers 1 to 30",
    "subtitle": "uno, dos, tres to treinta: foundational counting and diphthong twins siete (7), nueve (9), diez (10)",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "uno",
      "dos",
      "tres",
      "cuatro",
      "cinco",
      "seis",
      "siete",
      "ocho",
      "nueve",
      "diez",
      "veinte",
      "treinta"
    ],
    "table_word_ids": [
      "uno",
      "dos",
      "tres",
      "cuatro",
      "cinco",
      "seis"
    ],
    "hook": {
      "title": "Why 'Uno' Drops Its '-o' Before Masculine Nouns",
      "content": "When counting alone ('one, two, three'), you say uno, dos, tres. The moment uno stands before a masculine noun, it drops its -o and becomes un: un café ('one coffee / a coffee'), veintiún años ('twenty-one years'). Before a feminine noun, it becomes una: una mesa ('one table / a table')!"
    },
    "pattern": {
      "title": "Recognizing Latin Roots Across 1 to 30",
      "content": "dos (duet), tres (trio), cuatro (quartet), cinco (quintet), seis (sextet), siete (September), ocho (octave, -ct- → -ch-), nueve (November), diez (decimal), veinte (vigesimal), treinta (thirty)."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "two / three",
            "german": "dos / tres"
          },
          {
            "id": "p2",
            "english": "four / five",
            "german": "cuatro / cinco"
          },
          {
            "id": "p3",
            "english": "six / seven",
            "german": "seis / siete"
          },
          {
            "id": "p4",
            "english": "eight / nine",
            "german": "ocho / nueve"
          },
          {
            "id": "p5",
            "english": "ten",
            "german": "diez"
          },
          {
            "id": "p6",
            "english": "twenty / thirty",
            "german": "veinte / treinta"
          }
        ],
        "target_answer": "dos / tres, cuatro / cinco, seis / siete, ocho / nueve, diez, veinte / treinta",
        "meaning": "two / three, four / five, six / seven, eight / nine, ten, twenty / thirty",
        "explanation": "Every number from 1 to 30 connects directly to English Latinate or Germanic roots.",
        "id": "es1501_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'one book' vs 'one table'?",
        "options": [
          "un libro / una mesa",
          "uno libro / una mesa",
          "un libro / un mesa"
        ],
        "target_answer": "un libro / una mesa",
        "meaning": "one book / one table",
        "explanation": "uno apocopates (drops -o) to un before a masculine noun and becomes una before a feminine noun.",
        "id": "es1501_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I have two brothers and three sisters'",
        "target_answer": "Tengo dos hermanos y tres hermanas",
        "meaning": "I have two brothers and three sisters",
        "word_bank": [
          "Tengo",
          "dos",
          "hermanos",
          "y",
          "tres",
          "hermanas",
          "uno",
          "cuatro",
          "hermano"
        ],
        "explanation": "Tengo dos hermanos y tres hermanas.",
        "id": "es1501_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "ask for 'five minutes, please'",
        "cues": [
          "Five → Cinco",
          "minutes (plural of minuto) → minutos",
          "please → por favor"
        ],
        "idea_parts": [
          "Five minutes → Cinco minutos",
          "please → por favor"
        ],
        "target_answer": "Cinco minutos por favor",
        "meaning": "Five minutes, please",
        "word_bank": [
          "Cinco",
          "minutos",
          "por",
          "favor",
          "Cuatro",
          "minuto",
          "gracias"
        ],
        "explanation": "Cinco minutos, por favor.",
        "id": "es1501_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Son las ocho de la noche",
        "replays": 2,
        "target_answer": "Son las ocho de la noche",
        "meaning": "It is eight o'clock at night",
        "cues": [
          "It is (plural hours): Son las",
          "eight: ocho",
          "at night: de la noche"
        ],
        "explanation": "Son las ocho de la noche — telling time uses Son las + hour.",
        "affirmation": "Numbers and time in action!",
        "id": "es1501_e5"
      }
    ],
    "summary": {
      "outcome": "Deploy numbers 1–30 in counting, quantities, and clock times.",
      "use_example": {
        "german": "Tengo dos libros y necesito cinco minutos, por favor.",
        "english": "I have two books and I need five minutes, please."
      },
      "takeaway": "uno becomes un before masculine nouns and una before feminine nouns.",
      "curiosity_teaser": "Up next ([1502] Age as Possession): combine numbers up to 100 with tener + años."
    },
    "twist": {
      "prompt": "Assemble: 'Ten minutes, please'",
      "target_answer": "Diez minutos por favor",
      "word_bank": [
        "Diez",
        "minutos",
        "por",
        "favor",
        "Nueve",
        "minuto",
        "gracias"
      ],
      "explanation": "Diez minutos, por favor."
    }
  },
  {
    "id": 1502,
    "slug": "age-as-possession",
    "title": "Age as Possession",
    "subtitle": "Why Spanish says 'I have years': tener with age (tengo treinta años) and numbers 30–100",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "treinta",
      "veinte",
      "cien",
      "año",
      "tener",
      "tengo",
      "tienes",
      "tiene",
      "cuánto",
      "hermano"
    ],
    "table_word_ids": [
      "treinta",
      "veinte",
      "cien",
      "año",
      "tener",
      "tengo"
    ],
    "hook": {
      "title": "Joining Tens and Ones with 'y' (31–99)",
      "content": "From 30 upward, Spanish joins tens and ones cleanly with y ('and'): treinta y uno (31), treinta y dos (32), treinta y cinco (35). And 100 is simply cien before any noun (cien años 'a hundred years', cien por cien '100 percent')!"
    },
    "pattern": {
      "title": "Talking About Family Ages",
      "content": "Practice using tiene for 3rd-person ages: Mi hermano tiene veinte años ('My brother is twenty years old')."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "thirty",
            "german": "treinta"
          },
          {
            "id": "p2",
            "english": "thirty-two",
            "german": "treinta y dos"
          },
          {
            "id": "p3",
            "english": "thirty-five",
            "german": "treinta y cinco"
          },
          {
            "id": "p4",
            "english": "one hundred",
            "german": "cien"
          },
          {
            "id": "p5",
            "english": "I am thirty years old",
            "german": "tengo treinta años"
          },
          {
            "id": "p6",
            "english": "how old are you?",
            "german": "¿cuántos años tienes?"
          }
        ],
        "target_answer": "treinta, treinta y dos, treinta y cinco, cien, tengo treinta años, ¿cuántos años tienes?",
        "meaning": "thirty, thirty-two, thirty-five, one hundred, I am thirty years old, how old are you?",
        "explanation": "Tens from 30 to 90 link to ones with y ('and').",
        "id": "es1502_e1"
      },
      {
        "type": "morpheme_tiles",
        "prompt": "Build 'thirty-five' in Spanish from its three parts:",
        "tile_options": [
          "treinta",
          "y",
          "cinco",
          "de"
        ],
        "target_answer": "treintaycinco",
        "meaning": "treinta y cinco (thirty-five)",
        "explanation": "treinta + y + cinco.",
        "id": "es1502_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'My brother is twenty years old'",
        "target_answer": "Mi hermano tiene veinte años",
        "meaning": "My brother is twenty years old",
        "word_bank": [
          "Mi",
          "hermano",
          "tiene",
          "veinte",
          "años",
          "es",
          "está",
          "tengo"
        ],
        "explanation": "Mi hermano + tiene + veinte + años.",
        "id": "es1502_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say: 'One hundred percent'",
        "cues": [
          "One hundred → Cien",
          "per / by → por",
          "hundred → cien"
        ],
        "idea_parts": [
          "One hundred → Cien",
          "percent → por cien"
        ],
        "target_answer": "Cien por cien",
        "meaning": "One hundred percent",
        "word_bank": [
          "Cien",
          "por",
          "cien",
          "para",
          "treinta",
          "años"
        ],
        "explanation": "Cien por cien (or cien por ciento) — por expresses rates and percentages.",
        "id": "es1502_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Mi madre tiene treinta años",
        "replays": 2,
        "target_answer": "Mi madre tiene treinta años",
        "meaning": "My mother is thirty years old",
        "cues": [
          "My mother: Mi madre",
          "has (is): tiene",
          "thirty years: treinta años"
        ],
        "explanation": "Mi madre tiene treinta años.",
        "affirmation": "Age with tener mastered!",
        "id": "es1502_e5"
      }
    ],
    "summary": {
      "outcome": "Build compound numbers with y and express ages across family members using tener.",
      "use_example": {
        "german": "Tengo treinta y dos años y mi hermano tiene veinte años.",
        "english": "I am thirty-two years old and my brother is twenty."
      },
      "takeaway": "Never drop años when stating someone's age in conversation: Tengo treinta años.",
      "curiosity_teaser": "Up next ([1503] Tener Expressions: hambre, sed & razón): discover how Spanish possesses hunger, thirst, cold, warmth, and 'being right'!"
    },
    "twist": {
      "prompt": "Assemble: 'Are you twenty years old?'",
      "target_answer": "Tienes veinte años",
      "word_bank": [
        "Tienes",
        "veinte",
        "años",
        "Eres",
        "Estás",
        "Tengo"
      ],
      "explanation": "¿Tienes veinte años?"
    }
  },
  {
    "id": 1503,
    "slug": "tener-expressions-hambre-sed-razon",
    "title": "Tener Expressions: hambre, sed & razón",
    "subtitle": "Possessing physical states with tener: tener hambre (f-→h- famine), tener sed, tener frío/calor, and tener razón ('to be right')",
    "phase": 3,
    "shift_categories": [
      "f_to_h"
    ],
    "word_ids": [
      "hambre",
      "sed",
      "razón",
      "frío",
      "tiempo",
      "mucho",
      "tener",
      "tengo",
      "tienes",
      "tiene"
    ],
    "table_word_ids": [
      "hambre",
      "sed",
      "razón",
      "frío",
      "tiempo",
      "mucho"
    ],
    "hook": {
      "title": "Why You Are Not 'Hungry' or 'Right' — You Have Hunger and Reason!",
      "content": "In English, you say 'I am hungry, I am thirsty, I am cold, I am right' using adjectives after 'to be'. In Spanish (just like French avoir faim), these are NOUNS that you possess with tener:\n• tener hambre = 'to be hungry' (lit. 'to have hunger' — notice Latin faminem shifted initial f- to silent h- in hambre, cousin of English famine!)\n• tener sed = 'to be thirsty' (lit. 'to have thirst')\n• tener frío = 'to be/feel cold' (for a person!)\n• tener razón = 'to be right' (lit. 'to have reason')!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why 'El Hambre' Takes 'Mucha' (Just Like 'El Agua Fría')",
          "content": "Just like el agua, hambre starts with a stressed /a/ sound (even though a silent h is written in front!), so singular 'the hunger' is el hambre — yet the word is 100% feminine, which is why we say mucha hambre!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Why We Say 'Tengo Mucha Hambre' (Not *Muy Hambre)!",
      "content": "Because hambre ('hunger'), sed ('thirst'), frío ('cold'), and razón ('reason') are NOUNS rather than adjectives, how do you say 'I am VERY hungry'? You cannot use muy ('very'); you must say 'I have MUCH hunger' using mucho/mucha: Tengo mucha hambre, Tengo mucha sed, Tengo mucho frío, Tienes toda la razón!",
      "trap_note": "Wait: if a PERSON feels cold, say Tengo frío ('I have cold'). If the WATER is cold, say El agua está fría (state of an object)!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I am hungry (I have hunger)",
            "german": "tengo hambre"
          },
          {
            "id": "p2",
            "english": "I am very hungry (much hunger, fem.)",
            "german": "tengo mucha hambre"
          },
          {
            "id": "p3",
            "english": "are you thirsty? (do you have thirst?)",
            "german": "¿tienes sed?"
          },
          {
            "id": "p4",
            "english": "you are right (you have reason)",
            "german": "tienes razón"
          },
          {
            "id": "p5",
            "english": "I feel cold (I have cold)",
            "german": "tengo frío"
          }
        ],
        "target_answer": "tengo hambre, tengo mucha hambre, ¿tienes sed?, tienes razón, tengo frío",
        "meaning": "I am hungry (I have hunger), I am very hungry (much hunger, fem.), are you thirsty? (do you have thirst?), you are right (you have reason), I feel cold (I have cold)",
        "explanation": "Physical sensations and 'being right' are nouns possessed with tener.",
        "id": "es1503_e1"
      },
      {
        "type": "reverse_cognate",
        "prompt": "Spanish el/la hambre ('hunger', from Latin faminem with f- → silent h-) shares its root with which English word for extreme food scarcity?",
        "target_answer": "famine",
        "meaning": "hambre and famine are the exact same Latin root (f- → silent h-)!",
        "explanation": "Latin famēs / faminem kept initial f- in English famine and turned f- into silent h- in Spanish hambre.",
        "id": "es1503_e2"
      },
      {
        "type": "shift_select",
        "prompt": "Because 'hambre' and 'sed' are feminine nouns ('hunger', 'thirst'), how do you say 'I am very hungry'?",
        "options": [
          "Tengo mucha hambre",
          "*Tengo muy hambre",
          "*Estoy muy hambre"
        ],
        "target_answer": "Tengo mucha hambre",
        "meaning": "I am very hungry",
        "explanation": "Before a feminine noun, Spanish uses mucha ('much/a lot of'): Tengo mucha hambre.",
        "id": "es1503_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'You are right'",
        "target_answer": "Tienes razón",
        "meaning": "You are right (lit. You have reason)",
        "word_bank": [
          "Tienes",
          "razón",
          "Eres",
          "Estás",
          "hambre"
        ],
        "explanation": "Tienes razón — 'to be right' is tener razón.",
        "id": "es1503_e4"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "ask a friend if they are hungry and thirsty",
        "cues": [
          "Do you have → ¿Tienes",
          "hunger and thirst → hambre y sed?"
        ],
        "idea_parts": [
          "Do you have → Tienes",
          "hunger and thirst → hambre y sed"
        ],
        "target_answer": "Tienes hambre y sed",
        "meaning": "Are you hungry and thirsty?",
        "word_bank": [
          "Tienes",
          "hambre",
          "y",
          "sed",
          "Estás",
          "Eres",
          "razón"
        ],
        "explanation": "¿Tienes hambre y sed? — one tienes governs both nouns.",
        "diagnosis": {
          "slip": "used Estás for hunger/thirst",
          "cue": "Hunger and thirst are nouns held with tener: ¿Tienes hambre y sed?"
        },
        "id": "es1503_e5"
      }
    ],
    "summary": {
      "outcome": "Express hunger (tener hambre), thirst (tener sed), feeling cold (tener frío), and being right (tener razón) with tener + mucho/mucha.",
      "use_example": {
        "german": "Tienes razón — tengo mucha hambre y mucha sed.",
        "english": "You are right — I am very hungry and very thirsty."
      },
      "takeaway": "Because hambre, sed, frío, and razón are nouns, pair them with tener and intensify them with mucho/mucha (never muy)!",
      "curiosity_teaser": "Up next ([16] Days, Months & Dates): see how the seven Roman planets name the Spanish days of the week."
    },
    "twist": {
      "prompt": "Assemble: 'I am very thirsty'",
      "target_answer": "Tengo mucha sed",
      "word_bank": [
        "Tengo",
        "mucha",
        "sed",
        "muy",
        "mucho",
        "Estoy"
      ],
      "explanation": "la sed is feminine, so 'very thirsty' is Tengo mucha sed ('I have much thirst')."
    }
  },
  {
    "id": 16,
    "slug": "days-months-dates",
    "title": "Days, Months & Dates",
    "subtitle": "lunes, martes, en enero — calendar vocabulary and scheduling meetings",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "lunes",
      "martes",
      "miércoles",
      "jueves",
      "viernes",
      "sábado",
      "domingo",
      "semana",
      "enero",
      "el"
    ],
    "table_word_ids": [
      "lunes",
      "martes",
      "miércoles",
      "jueves",
      "viernes",
      "sábado"
    ],
    "hook": {
      "title": "The Seven Planets Inside Your Week",
      "content": "Look at Monday through Friday in Spanish: every single day is named after a celestial body from Roman astronomy! lunes = Moon-day (lunar), martes = Mars-day (martial), miércoles = Mercury-day, jueves = Jove/Jupiter-day, viernes = Venus-day! Then the weekend arrives from Judeo-Christian history: sábado (Sabbath) and domingo (Latin dies Dominicus, 'Day of the Lord')!"
    },
    "pattern": {
      "title": "Why Spanish Says 'El Lunes' (Never *En Lunes) for 'On Monday'!",
      "content": "In English, you say 'ON Monday' and 'ON Mondays'. In Spanish, you NEVER use a preposition like *en before a day of the week! Instead, the masculine article el / los does all the work: el lunes = 'on Monday'; los lunes = 'on Mondays / every Monday'! Months, on the other hand, DO take en: en enero ('in January'). Notice also that neither days nor months are capitalized in Spanish!",
      "linguist_note": "Latin diēs Lūnae, Mārtis, Mercuriī, Iovis, Veneris dropped the word diēs while keeping its masculine gender.",
      "trap_note": "Because lunes, martes, miércoles, jueves, and viernes already end in unstressed -es, their plural form doesn't change at all: el lunes ('on Monday') → los lunes ('on Mondays')!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "Monday (Moon-day)",
            "german": "el lunes"
          },
          {
            "id": "p2",
            "english": "Tuesday (Mars-day)",
            "german": "el martes"
          },
          {
            "id": "p3",
            "english": "Wednesday (Mercury-day)",
            "german": "el miércoles"
          },
          {
            "id": "p4",
            "english": "Thursday (Jupiter-day)",
            "german": "el jueves"
          },
          {
            "id": "p5",
            "english": "Friday (Venus-day)",
            "german": "el viernes"
          },
          {
            "id": "p6",
            "english": "Saturday / Sunday",
            "german": "el sábado / el domingo"
          }
        ],
        "target_answer": "el lunes, el martes, el miércoles, el jueves, el viernes, el sábado / el domingo",
        "meaning": "Monday (Moon-day), Tuesday (Mars-day), Wednesday (Mercury-day), Thursday (Jupiter-day), Friday (Venus-day), Saturday / Sunday",
        "explanation": "All seven days of the week are masculine and written in lowercase.",
        "id": "es16_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'I am going to Madrid on Monday' in Spanish?",
        "options": [
          "Voy a Madrid el lunes",
          "*Voy a Madrid en lunes",
          "*Voy a Madrid a lunes"
        ],
        "target_answer": "Voy a Madrid el lunes",
        "meaning": "I am going to Madrid on Monday",
        "explanation": "The masculine article el means 'on [weekday]': el lunes.",
        "id": "es16_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'On Fridays we celebrate'",
        "target_answer": "El viernes vamos a celebrar",
        "meaning": "On Friday we are going to celebrate",
        "word_bank": [
          "El",
          "viernes",
          "vamos",
          "a",
          "celebrar",
          "En",
          "La",
          "sábado"
        ],
        "explanation": "El viernes ('On Friday') + vamos a celebrar ('we are going to celebrate').",
        "id": "es16_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that you have time this week",
        "cues": [
          "I have time → Tengo tiempo",
          "this (feminine to match la semana) → esta",
          "week → semana"
        ],
        "idea_parts": [
          "I have time → Tengo tiempo",
          "this week → esta semana"
        ],
        "target_answer": "Tengo tiempo esta semana",
        "meaning": "I have time this week",
        "word_bank": [
          "Tengo",
          "tiempo",
          "esta",
          "semana",
          "este",
          "lunes",
          "en"
        ],
        "explanation": "Tengo tiempo esta semana — la semana is feminine, so 'this week' is esta semana.",
        "id": "es16_e4"
      },
      {
        "type": "literal_gloss",
        "prompt": "Which English word-for-word blueprint mirrors Spanish 'El lunes voy a Madrid'?",
        "german": "El lunes voy a Madrid",
        "natural": "On Monday I am going to Madrid",
        "options": [
          "On Monday I am going to Madrid",
          "The Monday I-go to Madrid",
          "In Monday I go Madrid",
          "At the Monday going to Madrid"
        ],
        "target_answer": "The Monday I-go to Madrid",
        "meaning": "On Monday I am going to Madrid (literal Spanish blueprint: The Monday I-go to Madrid)",
        "explanation": "Spanish uses the definite article ('The Monday') where English uses 'On Monday'.",
        "id": "es16_e5"
      }
    ],
    "summary": {
      "outcome": "Name the days of the week, express 'on Monday / on Mondays' with el / los, and use en with months.",
      "use_example": {
        "german": "El lunes voy a Madrid y el viernes vamos a celebrar.",
        "english": "On Monday I am going to Madrid and on Friday we are going to celebrate."
      },
      "takeaway": "Days of the week take el ('on Monday') and los ('on Mondays') — never *en lunes!",
      "curiosity_teaser": "Up next ([1601] The Days of the Planets): see why lunes through viernes stay identical in the plural."
    },
    "twist": {
      "prompt": "Assemble: 'In January it is cold (hay frío -> tengo frío)'",
      "target_answer": "En enero tengo frío",
      "word_bank": [
        "En",
        "enero",
        "tengo",
        "frío",
        "El",
        "lunes",
        "hambre"
      ],
      "explanation": "Months take en: En enero tengo frío."
    },
    "foreshadow": {
      "line": "Now that you can anchor events on the calendar, Topic 17 unlocks your first past tense: the -ado / -ido past with haber!",
      "resolvedIn": 17
    },
    "payoff": {
      "ofLesson": 15,
      "text": "Notice how miércoles, jueves, and viernes show the exact same e→ie and o→ue vowel shifts you saw in Topic 15's numbers (siete, nueve, diez)!"
    }
  },
  {
    "id": 1601,
    "slug": "days-of-the-planets",
    "title": "The Days of the Planets",
    "subtitle": "lunes (Moon), martes (Mars), miércoles (Mercury), jueves (Jove), viernes (Venus), sábado, domingo",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "lunes",
      "martes",
      "miércoles",
      "jueves",
      "viernes",
      "sábado",
      "domingo",
      "semana"
    ],
    "table_word_ids": [
      "lunes",
      "martes",
      "miércoles",
      "jueves",
      "viernes",
      "sábado"
    ],
    "hook": {
      "title": "Why Lunes–Viernes End in '-es'",
      "content": "Where did the final -es on lunes, martes, miércoles, jueves, and viernes come from? From the Latin genitive ending -is ('of the Moon, of Mars, of Mercury, of Jove, of Venus')! And because they already end in an unstressed syllable with -s, only sábado (los sábados) and domingo (los domingos) add an -s in the plural!"
    },
    "pattern": {
      "title": "Esdrújula Accents on Miércoles and Sábado",
      "content": "Remember our Topic 8 rule that third-from-last syllable stress always wears a written accent mark? Look at MIÉR-co-les and SÁ-ba-do!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "Monday (Moon)",
            "german": "lunes"
          },
          {
            "id": "p2",
            "english": "Tuesday (Mars)",
            "german": "martes"
          },
          {
            "id": "p3",
            "english": "Wednesday (Mercury, accented!)",
            "german": "miércoles"
          },
          {
            "id": "p4",
            "english": "Thursday (Jupiter)",
            "german": "jueves"
          },
          {
            "id": "p5",
            "english": "Friday (Venus)",
            "german": "viernes"
          },
          {
            "id": "p6",
            "english": "Saturday (accented!) / Sunday",
            "german": "sábado / domingo"
          }
        ],
        "target_answer": "lunes, martes, miércoles, jueves, viernes, sábado / domingo",
        "meaning": "Monday (Moon), Tuesday (Mars), Wednesday (Mercury, accented!), Thursday (Jupiter), Friday (Venus), Saturday (accented!) / Sunday",
        "explanation": "miércoles and sábado carry esdrújula accents.",
        "id": "es1601_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'on Mondays' (every Monday) vs 'on Sundays' (every Sunday)?",
        "options": [
          "los lunes / los domingos",
          "los luneses / los domingos",
          "en lunes / en domingos"
        ],
        "target_answer": "los lunes / los domingos",
        "meaning": "on Mondays / on Sundays",
        "explanation": "lunes stays unchanged after los (los lunes); domingo adds -s (los domingos).",
        "id": "es1601_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'Today is Friday'",
        "target_answer": "Hoy es viernes",
        "meaning": "Today is Friday",
        "word_bank": [
          "Hoy",
          "es",
          "viernes",
          "está",
          "el",
          "jueves"
        ],
        "explanation": "Hoy es viernes — naming what day today is uses es without an article.",
        "id": "es1601_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that on Saturday we are going to the movies (al cine)",
        "cues": [
          "On Saturday → El sábado",
          "we are going → vamos",
          "to the cinema (a + el) → al cine"
        ],
        "idea_parts": [
          "On Saturday → El sábado",
          "we are going to the cinema → vamos al cine"
        ],
        "target_answer": "El sábado vamos al cine",
        "meaning": "On Saturday we are going to the movies",
        "word_bank": [
          "El",
          "sábado",
          "vamos",
          "al",
          "cine",
          "En",
          "domingo",
          "la"
        ],
        "explanation": "El sábado vamos al cine.",
        "id": "es1601_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Mañana es miércoles",
        "replays": 2,
        "target_answer": "Mañana es miércoles",
        "meaning": "Tomorrow is Wednesday",
        "cues": [
          "Tomorrow: Mañana",
          "is: es",
          "Wednesday (accent on é): miércoles"
        ],
        "explanation": "Mañana es miércoles.",
        "affirmation": "Clean esdrújula accent on miércoles!",
        "id": "es1601_e5"
      }
    ],
    "summary": {
      "outcome": "Use all seven weekdays in singular and habitual plural (el lunes / los lunes) and state what day it is with es.",
      "use_example": {
        "german": "Hoy es jueves y mañana es viernes.",
        "english": "Today is Thursday and tomorrow is Friday."
      },
      "takeaway": "Hoy es lunes ('Today is Monday', no article) vs El lunes voy ('On Monday I go', with el).",
      "curiosity_teaser": "Up next ([1602] Dates & Appointments): combine numbers, el, and de to express calendar dates."
    },
    "twist": {
      "prompt": "Assemble: 'On Tuesday I am going to visit Madrid'",
      "target_answer": "El martes voy a visitar Madrid",
      "word_bank": [
        "El",
        "martes",
        "voy",
        "a",
        "visitar",
        "Madrid",
        "En",
        "miércoles",
        "vas"
      ],
      "explanation": "El martes = 'On Tuesday'."
    }
  },
  {
    "id": 1602,
    "slug": "dates-and-appointments",
    "title": "Dates & Appointments",
    "subtitle": "el lunes ('on Monday'), los lunes ('on Mondays'), en enero, el cinco de mayo",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "enero",
      "cinco",
      "diez",
      "veinte",
      "lunes",
      "martes",
      "semana",
      "de",
      "en",
      "el"
    ],
    "table_word_ids": [
      "enero",
      "cinco",
      "diez",
      "veinte",
      "lunes",
      "martes"
    ],
    "hook": {
      "title": "How Spanish Builds Any Date: 'El [Number] de [Month]'",
      "content": "You already know the most famous date formula in Spanish: el cinco de mayo ('the fifth of May')! Unlike English, which uses ordinal numbers ('the fifth, the tenth, the twentieth'), Spanish uses regular cardinal numbers for every day of the month from 2 to 31: el dos de enero ('January 2nd'), el diez de enero ('January 10th'), el veinte de enero ('January 20th')!"
    },
    "pattern": {
      "title": "Months Take 'En'; Specific Dates Take 'El'",
      "content": "Compare: En enero ('In January') vs El cinco de enero ('On January 5th')."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "in January",
            "german": "en enero"
          },
          {
            "id": "p2",
            "english": "on January 5th",
            "german": "el cinco de enero"
          },
          {
            "id": "p3",
            "english": "on January 10th",
            "german": "el diez de enero"
          },
          {
            "id": "p4",
            "english": "this week",
            "german": "esta semana"
          },
          {
            "id": "p5",
            "english": "on Mondays",
            "german": "los lunes"
          }
        ],
        "target_answer": "en enero, el cinco de enero, el diez de enero, esta semana, los lunes",
        "meaning": "in January, on January 5th, on January 10th, this week, on Mondays",
        "explanation": "el + cardinal number + de + month builds any calendar date.",
        "id": "es1602_e1"
      },
      {
        "type": "morpheme_tiles",
        "prompt": "Build 'on the fifth of January' in Spanish:",
        "tile_options": [
          "el",
          "cinco",
          "de",
          "enero",
          "en"
        ],
        "target_answer": "elcincodeenero",
        "meaning": "el cinco de enero (on January 5th)",
        "explanation": "el + cinco + de + enero.",
        "id": "es1602_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'on January 10th'?",
        "options": [
          "el diez de enero",
          "*en el diez enero",
          "*el décimo de enero"
        ],
        "target_answer": "el diez de enero",
        "meaning": "on January 10th",
        "explanation": "Spanish uses el + cardinal number + de + month.",
        "id": "es1602_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I am going to Madrid in January'",
        "target_answer": "Voy a Madrid en enero",
        "meaning": "I am going to Madrid in January",
        "word_bank": [
          "Voy",
          "a",
          "Madrid",
          "en",
          "enero",
          "el",
          "de",
          "lunes"
        ],
        "explanation": "Voy a Madrid + en enero.",
        "id": "es1602_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Es el cinco de enero",
        "replays": 2,
        "target_answer": "Es el cinco de enero",
        "meaning": "It is the fifth of January",
        "cues": [
          "It is: Es",
          "the fifth: el cinco",
          "of January: de enero"
        ],
        "explanation": "Es el cinco de enero.",
        "affirmation": "Calendar date formula locked in!",
        "id": "es1602_e5"
      }
    ],
    "summary": {
      "outcome": "Express calendar dates with el + number + de + month and contrast with en + month.",
      "use_example": {
        "german": "Voy a visitar Madrid en enero — el diez de enero.",
        "english": "I am going to visit Madrid in January — on January 10th."
      },
      "takeaway": "el [number] de [month] gives you every calendar date in Spanish.",
      "curiosity_teaser": "Up next ([17] The -ado / -ido Past): unlock your first past tense ('I have confirmed, I have eaten') with haber + -ado/-ido!"
    },
    "twist": {
      "prompt": "Assemble: 'On Monday I am going to confirm'",
      "target_answer": "El lunes voy a confirmar",
      "word_bank": [
        "El",
        "lunes",
        "voy",
        "a",
        "confirmar",
        "En",
        "de",
        "enero"
      ],
      "explanation": "El lunes voy a confirmar."
    }
  },
  {
    "id": 17,
    "slug": "ado-ido-past",
    "title": "The -ado / -ido Past",
    "subtitle": "Pretérito perfecto with haber: he confirmado, he comido — the English -ed cousin",
    "phase": 3,
    "shift_categories": [
      "ar_engine"
    ],
    "word_ids": [
      "he",
      "has",
      "ha",
      "hemos",
      "hablado",
      "comido",
      "hecho",
      "visto",
      "confirmar",
      "comer",
      "vivir"
    ],
    "table_word_ids": [
      "he",
      "has",
      "ha",
      "hemos",
      "hablado",
      "comido"
    ],
    "hook": {
      "title": "Why Spanish Has Two Words for 'Have': Tener vs Haber",
      "content": "In Topic 10 you learned tener ('to hold/possess': tengo un coche). Now you meet its twin, haber (he, has, ha, hemos, han), which exists solely to build the 'have [done]' past tense (the pretérito perfecto)! Take any -ar verb, replace -ar with -ado (confirmar → confirmado, hablar → hablado). Take any -er or -ir verb, replace -er/-ir with -ido (comer → comido, vivir → vivido). Put he ('I have') in front, and you have the past: He confirmado ('I have confirmed'), He comido ('I have eaten')!"
    },
    "pattern": {
      "title": "The Best News: Participles After Haber NEVER Change Ending!",
      "content": "Unlike adjectives (bueno/buena/buenos/buenas), a past participle paired with haber (he, has, ha, hemos, han) is 100% INVARIABLE — it always ends in -o regardless of who is speaking or what you are talking about! And where do object pronouns and 'no' go? Right at the front before haber — never split haber from its participle: No lo he visto ('I haven't seen it')!",
      "linguist_note": "Spanish split Latin habēre (auxiliary haber) from tenēre (possessive tener), whereas French (avoir) and English ('have') use one verb for both.",
      "trap_note": "In English you can split 'have' and the participle ('Have you eaten?', 'I have never seen'). In Spanish, he/has/ha/hemos/han and the participle are welded together — nothing may ever step between them!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I have (auxiliary before participle)",
            "german": "he"
          },
          {
            "id": "p2",
            "english": "you have (auxiliary, tú)",
            "german": "has"
          },
          {
            "id": "p3",
            "english": "he / she / usted has (auxiliary)",
            "german": "ha"
          },
          {
            "id": "p4",
            "english": "we have (auxiliary)",
            "german": "hemos"
          },
          {
            "id": "p5",
            "english": "spoken (-ar → -ado)",
            "german": "hablado"
          },
          {
            "id": "p6",
            "english": "eaten (-er/-ir → -ido)",
            "german": "comido"
          }
        ],
        "target_answer": "he, has, ha, hemos, hablado, comido",
        "meaning": "I have (auxiliary before participle), you have (auxiliary, tú), he / she / usted has (auxiliary), we have (auxiliary), spoken (-ar → -ado), eaten (-er/-ir → -ido)",
        "explanation": "haber (he, has, ha, hemos, han) + invariable -ado/-ido forms the present perfect past.",
        "id": "es17_e1"
      },
      {
        "type": "morpheme_tiles",
        "prompt": "Build 'I have spoken' from the 1st-person auxiliary of haber and the participle of hablar:",
        "tile_options": [
          "He",
          "hablado",
          "Tengo",
          "hablar"
        ],
        "target_answer": "Hehablado",
        "meaning": "He hablado (I have spoken)",
        "explanation": "He (auxiliary 'I have', silent h) + hablado ('spoken') = He hablado.",
        "id": "es17_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'I have not eaten today' (keeping haber and comido glued together)?",
        "options": [
          "No he comido hoy",
          "*He no comido hoy",
          "*No tengo comido hoy"
        ],
        "target_answer": "No he comido hoy",
        "meaning": "I have not eaten today",
        "explanation": "Never use tener as an auxiliary, and never put no between he and comido: No he comido hoy.",
        "id": "es17_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'Have you spoken with María?'",
        "target_answer": "Has hablado con María",
        "meaning": "Have you spoken with María?",
        "word_bank": [
          "Has",
          "hablado",
          "con",
          "María",
          "Tienes",
          "He",
          "hablar"
        ],
        "explanation": "¿Has hablado con María? — has + hablado stays glued together even in questions!",
        "id": "es17_e4"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that we have eaten here today",
        "cues": [
          "We have (auxiliary) → Hemos",
          "eaten (comer → -ido) → comido",
          "here today → aquí hoy"
        ],
        "idea_parts": [
          "We have eaten → Hemos comido",
          "here today → aquí hoy"
        ],
        "target_answer": "Hemos comido aquí hoy",
        "meaning": "We have eaten here today",
        "word_bank": [
          "Hemos",
          "comido",
          "aquí",
          "hoy",
          "Tenemos",
          "comer",
          "hablado"
        ],
        "explanation": "Hemos comido aquí hoy — hemos + comido.",
        "diagnosis": {
          "slip": "used Tenemos instead of Hemos",
          "cue": "tener is only for possessing nouns (Tenemos comida); before a participle (-ado/-ido), always use haber (Hemos comido)!"
        },
        "id": "es17_e5"
      }
    ],
    "summary": {
      "outcome": "Form the pretérito perfecto with haber (he, has, ha, hemos, han) + invariable -ado / -ido participles.",
      "use_example": {
        "german": "Hoy he hablado con María y hemos comido en el restaurante.",
        "english": "Today I have spoken with María and we have eaten at the restaurant."
      },
      "takeaway": "tener possesses things (Tengo café); haber launches past participles (He comido) — and the two words never split!",
      "curiosity_teaser": "Up next ([1701] Forming Participles): master -ado, -ido, and the two famous irregulars hecho ('done/made') and visto ('seen')."
    },
    "twist": {
      "prompt": "Assemble: 'I haven't seen it'",
      "target_answer": "No lo he visto",
      "word_bank": [
        "No",
        "lo",
        "he",
        "visto",
        "tengo",
        "la"
      ],
      "explanation": "No + lo + he visto — pronoun and negation stand in front of he visto."
    },
    "foreshadow": {
      "line": "While he hablado connects the past to today ('this morning, this week, in my life'), Topic 18 unlocks the single-word Preterite for completed dots in past time ('yesterday I spoke' = hablé).",
      "resolvedIn": 18
    },
    "payoff": {
      "ofLesson": 10,
      "text": "Remember hay ('there is/are') from Topic 10? That ha inside hay is the exact same 3rd-person auxiliary ha ('has') you just learned!"
    }
  },
  {
    "id": 1701,
    "slug": "forming-participles",
    "title": "Forming Participles",
    "subtitle": "-ar → -ado (hablado), -er/-ir → -ido (comido, vivido), plus irregulars hecho (fact) and visto (vista)",
    "phase": 3,
    "shift_categories": [
      "f_to_h",
      "ct_to_ch"
    ],
    "word_ids": [
      "hablado",
      "comido",
      "hecho",
      "visto",
      "he",
      "has",
      "hacer",
      "ver",
      "vivir",
      "confirmar"
    ],
    "table_word_ids": [
      "hablado",
      "comido",
      "hecho",
      "visto",
      "he",
      "has"
    ],
    "hook": {
      "title": "Regular -ado / -ido and the Two Cognate Irregulars: Hecho & Visto",
      "content": "Almost every verb in Spanish forms its participle regularly: -ar → -ado, -er/-ir → -ido. And what about the two most common irregulars: hacer ('to do/make') → hecho ('done/made') and ver ('to see') → visto ('seen')? You already know both from English! Visto is the exact word in 'Hasta la vista' and 'vista/vision'. And hecho comes from Latin factum ('fact/feat') with BOTH Spanish sound shifts firing at once: initial f- → silent h-, and medial -ct- → -ch-!"
    },
    "pattern": {
      "title": "Double Duty: El Hecho = 'The Fact'",
      "content": "Just like English 'fact' comes from Latin 'thing done', Spanish el hecho means both 'done/made' (Lo he hecho 'I have done it') and the noun 'the fact' (de hecho = 'in fact / actually')!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "spoken (hablar → -ado)",
            "german": "hablado"
          },
          {
            "id": "p2",
            "english": "eaten (comer → -ido)",
            "german": "comido"
          },
          {
            "id": "p3",
            "english": "done / made (hacer → factum)",
            "german": "hecho"
          },
          {
            "id": "p4",
            "english": "seen (ver → vista)",
            "german": "visto"
          },
          {
            "id": "p5",
            "english": "I have done it",
            "german": "lo he hecho"
          },
          {
            "id": "p6",
            "english": "I have seen it",
            "german": "lo he visto"
          }
        ],
        "target_answer": "hablado, comido, hecho, visto, lo he hecho, lo he visto",
        "meaning": "spoken (hablar → -ado), eaten (comer → -ido), done / made (hacer → factum), seen (ver → vista), I have done it, I have seen it",
        "explanation": "-ar → -ado, -er/-ir → -ido; hacer → hecho and ver → visto.",
        "id": "es1701_e1"
      },
      {
        "type": "reverse_cognate",
        "prompt": "Spanish hecho ('done/made' and 'el hecho = the fact', from Latin factum via f-→h- and -ct-→-ch-) is the exact twin of which four-letter English noun?",
        "target_answer": "fact",
        "meaning": "a fact (Latin factum) is literally 'a thing done' (hecho)!",
        "explanation": "Latin facere ('to do/make') → participle factum → English fact/feat and Spanish hecho.",
        "id": "es1701_e2"
      },
      {
        "type": "morpheme_tiles",
        "prompt": "Convert 'confirmar' into its past participle ('confirmed') by swapping -ar for -ado:",
        "tile_options": [
          "confirm",
          "ado",
          "ido",
          "ar"
        ],
        "target_answer": "confirmado",
        "meaning": "confirmado (confirmed)",
        "explanation": "confirm + ado = confirmado.",
        "id": "es1701_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I have done it today'",
        "target_answer": "Lo he hecho hoy",
        "meaning": "I have done it today",
        "word_bank": [
          "Lo",
          "he",
          "hecho",
          "hoy",
          "La",
          "tengo",
          "hacer"
        ],
        "explanation": "Lo + he + hecho + hoy.",
        "id": "es1701_e4"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "ask a friend if they have seen the movie/house: 'Have you seen the house?'",
        "cues": [
          "Have you (auxiliary) → ¿Has",
          "seen (irregular participle of ver) → visto",
          "the house → la casa?"
        ],
        "idea_parts": [
          "Have you seen → Has visto",
          "the house → la casa"
        ],
        "target_answer": "Has visto la casa",
        "meaning": "Have you seen the house?",
        "word_bank": [
          "Has",
          "visto",
          "la",
          "casa",
          "He",
          "ver",
          "hecho"
        ],
        "explanation": "¿Has visto la casa? — visto stays invariable (-o) even though la casa is feminine!",
        "diagnosis": {
          "slip": "changed visto to vista",
          "cue": "After haber (he/has/ha/hemos), the participle NEVER changes for gender: ¿Has visto la casa?"
        },
        "id": "es1701_e5"
      }
    ],
    "summary": {
      "outcome": "Form regular -ado/-ido participles and deploy hecho (hacer) and visto (ver) after haber.",
      "use_example": {
        "german": "Lo he hecho hoy y ya he visto la casa.",
        "english": "I have done it today and I have already seen the house."
      },
      "takeaway": "hecho = Latin factum (f→h, ct→ch); visto = vista — and participles after haber never change ending.",
      "curiosity_teaser": "Up next ([1702] The haber Auxiliary): drill he, has, ha, hemos across life experiences and today's actions."
    },
    "twist": {
      "prompt": "Assemble: 'We have seen the city'",
      "target_answer": "Hemos visto la ciudad",
      "word_bank": [
        "Hemos",
        "visto",
        "la",
        "ciudad",
        "Tenemos",
        "vista",
        "el"
      ],
      "explanation": "Hemos visto la ciudad."
    }
  },
  {
    "id": 1702,
    "slug": "the-haber-auxiliary",
    "title": "The haber Auxiliary",
    "subtitle": "he, has, ha, hemos, han + invariable participle: describing recent and life experiences",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "he",
      "has",
      "ha",
      "hemos",
      "hablado",
      "comido",
      "hecho",
      "visto",
      "nunca",
      "hoy"
    ],
    "table_word_ids": [
      "he",
      "has",
      "ha",
      "hemos",
      "hablado",
      "comido"
    ],
    "hook": {
      "title": "The Silent-H Rhythm: he, has, ha, hemos, han",
      "content": "Notice how the auxiliary forms of haber mirror the future endings of Spanish and all start with a silent h: yo he (/e/), tú has (/as/), él/ella/usted ha (/a/), nosotros hemos (/ˈemos/), ellos/ustedes han (/an/)."
    },
    "pattern": {
      "title": "When Spain Uses 'He Comido' (Today & This Week)",
      "content": "In Spain (especially Madrid), any completed action inside a time window that is STILL OPEN — like hoy ('today'), esta mañana ('this morning'), or esta semana ('this week') — uses he + participle: Hoy he comido un bocadillo!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I have spoken",
            "german": "he hablado"
          },
          {
            "id": "p2",
            "english": "you have eaten",
            "german": "has comido"
          },
          {
            "id": "p3",
            "english": "she has done / made",
            "german": "ella ha hecho"
          },
          {
            "id": "p4",
            "english": "we have seen",
            "german": "hemos visto"
          },
          {
            "id": "p5",
            "english": "I have never seen",
            "german": "nunca he visto"
          }
        ],
        "target_answer": "he hablado, has comido, ella ha hecho, hemos visto, nunca he visto",
        "meaning": "I have spoken, you have eaten, she has done / made, we have seen, I have never seen",
        "explanation": "Never separate he/has/ha/hemos from the participle — even nunca goes outside the pair!",
        "id": "es1702_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Where does 'nunca' ('never') go in 'I have never seen that'?",
        "options": [
          "Nunca he visto eso (or No he visto eso nunca)",
          "*He nunca visto eso",
          "*Nunca tengo visto eso"
        ],
        "target_answer": "Nunca he visto eso (or No he visto eso nunca)",
        "meaning": "I have never seen that",
        "explanation": "Because he visto is an unbreakable unit, nunca stands before he (or after the participle).",
        "id": "es1702_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'She has spoken with my mother'",
        "target_answer": "Ella ha hablado con mi madre",
        "meaning": "She has spoken with my mother",
        "word_bank": [
          "Ella",
          "ha",
          "hablado",
          "con",
          "mi",
          "madre",
          "he",
          "has",
          "tiene"
        ],
        "explanation": "Ella ha hablado con mi madre.",
        "id": "es1702_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that we have done everything today ('We have done it today')",
        "cues": [
          "It (walks before hemos) → Lo",
          "we have done → hemos hecho",
          "today → hoy"
        ],
        "idea_parts": [
          "It → Lo",
          "we have done → hemos hecho",
          "today → hoy"
        ],
        "target_answer": "Lo hemos hecho hoy",
        "meaning": "We have done it today",
        "word_bank": [
          "Lo",
          "hemos",
          "hecho",
          "hoy",
          "Tenemos",
          "he",
          "visto"
        ],
        "explanation": "Lo hemos hecho hoy.",
        "id": "es1702_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Hoy he comido muy bien",
        "replays": 2,
        "target_answer": "Hoy he comido muy bien",
        "meaning": "Today I have eaten very well",
        "cues": [
          "Today: Hoy",
          "I have eaten: he comido",
          "very well: muy bien"
        ],
        "explanation": "Hoy he comido muy bien.",
        "affirmation": "Auxiliary haber + participle mastered!",
        "id": "es1702_e5"
      }
    ],
    "summary": {
      "outcome": "Use he, has, ha, hemos with participles while keeping adverbs and pronouns outside the auxiliary-participle pair.",
      "use_example": {
        "german": "Nunca he visto eso, pero hoy lo hemos hecho.",
        "english": "I have never seen that, but today we have done it."
      },
      "takeaway": "Keep haber + participle welded together — place no, nunca, and pronouns in front of haber.",
      "curiosity_teaser": "Up next ([18] The Preterite: The Dot in Time): learn how a single accent mark separates 'I speak' (hablo) from 'he spoke' (habló)!"
    },
    "twist": {
      "prompt": "Assemble: 'Have you eaten today?'",
      "target_answer": "Has comido hoy",
      "word_bank": [
        "Has",
        "comido",
        "hoy",
        "Tienes",
        "He",
        "comer"
      ],
      "explanation": "¿Has comido hoy?"
    }
  },
  {
    "id": 18,
    "slug": "preterite-dot-in-time",
    "title": "The Preterite: The Dot in Time",
    "subtitle": "hablé, comí, fue — completed single past events bounded in time",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "hablé",
      "comí",
      "fue",
      "ayer",
      "visitar",
      "celebrar",
      "comer",
      "vivir",
      "ser",
      "ir"
    ],
    "table_word_ids": [
      "hablé",
      "comí",
      "fue",
      "ayer",
      "visitar",
      "celebrar"
    ],
    "hook": {
      "title": "One Word for a Completed Dot on the Timeline",
      "content": "When an action happened at a closed, finished point in the past — like ayer ('yesterday'), anoche ('last night'), or el lunes pasado ('last Monday') — Spanish uses a crisp one-word past tense called the Preterite (el pretérito indefinido). For -ar verbs, 'I [verb]-ed' ends in stressed -é (hablé 'I spoke', visité 'I visited') and 'he/she/usted [verb]-ed' ends in stressed -ó (habló 'he/she spoke', visitó 'he/she visited'). For -er and -ir verbs, 'I [verb]-ed' ends in stressed -í (comí 'I ate', viví 'I lived') and 3rd person ends in -ió (comió, vivió)!"
    },
    "pattern": {
      "title": "How One Accent Mark Separates Present from Past!",
      "content": "Look at the genius of Spanish stress: HAB-lo (stress on first syllable, no accent) means 'I speak' (present). ha-BLÓ (stress on final ó, with an accent) means 'he/she/usted spoke' (past)! Never treat the written accent mark in the preterite as optional — it carries the entire tense!",
      "linguist_note": "Latin perfecthabuī/amāvī contracted into -é/-aste/-ó/-amos/-aron in Castilian.",
      "trap_note": "Notice that fue (one syllable) has NO accent mark because one-syllable words in Spanish don't need an accent to show which syllable is stressed!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I spoke (yesterday)",
            "german": "hablé"
          },
          {
            "id": "p2",
            "english": "I ate (yesterday)",
            "german": "comí"
          },
          {
            "id": "p3",
            "english": "it was / he went (shared preterite of ser & ir!)",
            "german": "fue"
          },
          {
            "id": "p4",
            "english": "yesterday",
            "german": "ayer"
          },
          {
            "id": "p5",
            "english": "I speak (present, no accent) vs he spoke (past, accented)",
            "german": "hablo vs habló"
          }
        ],
        "target_answer": "hablé, comí, fue, ayer, hablo vs habló",
        "meaning": "I spoke (yesterday), I ate (yesterday), it was / he went (shared preterite of ser & ir!), yesterday, I speak (present, no accent) vs he spoke (past, accented)",
        "explanation": "-ar preterite: -é / -ó; -er/-ir preterite: -í / -ió; ser & ir share fue.",
        "id": "es18_e1"
      },
      {
        "type": "shift_select",
        "prompt": "What is the difference between 'hablo' (no accent) and 'habló' (with an acute accent)?",
        "options": [
          "hablo = 'I speak' (present); habló = 'he/she/usted spoke' (preterite past)",
          "Both mean 'I spoke'",
          "hablo = 'he spoke'; habló = 'I speak'"
        ],
        "target_answer": "hablo = 'I speak' (present); habló = 'he/she/usted spoke' (preterite past)",
        "meaning": "I speak vs he/she spoke",
        "explanation": "Without the accent, stress falls on HAB-lo ('I speak'); with the accent, stress jumps to ha-BLÓ ('he/she spoke')!",
        "id": "es18_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'Yesterday I spoke with my mother'",
        "target_answer": "Ayer hablé con mi madre",
        "meaning": "Yesterday I spoke with my mother",
        "word_bank": [
          "Ayer",
          "hablé",
          "con",
          "mi",
          "madre",
          "hablaba",
          "he",
          "mañana"
        ],
        "explanation": "Ayer ('Yesterday' — closed past dot) triggers the preterite hablé.",
        "id": "es18_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that yesterday you ate at this restaurant",
        "cues": [
          "Yesterday → Ayer",
          "I ate (-er preterite in -í) → comí",
          "at/in this restaurant → en este restaurante"
        ],
        "idea_parts": [
          "Yesterday I ate → Ayer comí",
          "at this restaurant → en este restaurante"
        ],
        "target_answer": "Ayer comí en este restaurante",
        "meaning": "Yesterday I ate at this restaurant",
        "word_bank": [
          "Ayer",
          "comí",
          "en",
          "este",
          "restaurante",
          "como",
          "comido",
          "ese"
        ],
        "explanation": "Ayer comí en este restaurante — comí is the 1st-person preterite of comer.",
        "diagnosis": {
          "slip": "used como or he comido with Ayer",
          "cue": "With closed past markers like ayer ('yesterday'), use the one-word preterite: Ayer comí."
        },
        "id": "es18_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Ayer fue un día fantástico",
        "replays": 2,
        "target_answer": "Ayer fue un día fantástico",
        "meaning": "Yesterday was a fantastic day",
        "cues": [
          "Yesterday: Ayer",
          "was (preterite of ser): fue",
          "a fantastic day: un día fantástico"
        ],
        "explanation": "Ayer fue un día fantástico — fue is the 3rd-person preterite of both ser and ir!",
        "affirmation": "Preterite dot in time mastered!",
        "id": "es18_e5"
      }
    ],
    "summary": {
      "outcome": "Express completed past events with -ar (-é/-ó) and -er/-ir (-í/-ió) preterite forms and fue.",
      "use_example": {
        "german": "Ayer hablé con mi amigo y comí en el restaurante.",
        "english": "Yesterday I spoke with my friend and ate at the restaurant."
      },
      "takeaway": "In the preterite, the written accent on -é, -ó, -í, -ió is the engine of the past tense.",
      "curiosity_teaser": "Up next ([1801] -ar Preterite Endings): master the -ar preterite paradigm and why nosotros (hablamos) uses context to show tense."
    },
    "twist": {
      "prompt": "Assemble: 'Yesterday it was fantastic'",
      "target_answer": "Ayer fue fantástico",
      "word_bank": [
        "Ayer",
        "fue",
        "fantástico",
        "es",
        "está",
        "mañana"
      ],
      "explanation": "Ayer fue fantástico."
    },
    "foreshadow": {
      "line": "If the Preterite is a snapshot dot in time ('yesterday I spoke'), how do you paint an ongoing video background in the past ('I was speaking, I used to live')? Topic 19 unveils the Imperfect!",
      "resolvedIn": 19
    },
    "payoff": {
      "ofLesson": 17,
      "text": "Compare Topic 17 (Hoy he hablado 'Today I have spoken' — open time window) with Topic 18 (Ayer hablé 'Yesterday I spoke' — closed dot in time)."
    }
  },
  {
    "id": 1801,
    "slug": "ar-preterite-endings",
    "title": "-ar Preterite Endings",
    "subtitle": "hablé, hablaste, habló, hablamos, hablaron: how the stress mark separates hablo ('I speak') from habló ('he spoke')",
    "phase": 3,
    "shift_categories": [
      "ar_engine"
    ],
    "word_ids": [
      "hablé",
      "ayer",
      "visitar",
      "confirmar",
      "celebrar",
      "comprar",
      "terminar",
      "preparar"
    ],
    "table_word_ids": [
      "hablé",
      "ayer",
      "visitar",
      "confirmar",
      "celebrar",
      "comprar"
    ],
    "hook": {
      "title": "Every Converted -ar Verb Now Has a Past Tense!",
      "content": "Remember the hundreds of -ar verbs you unlocked in Topic 3 (confirmar, visitar, celebrar, organizar, preparar, terminar)? Every single one follows the exact same preterite pattern: yo confirmé ('I confirmed'), tú confirmaste ('you confirmed'), él/ella/usted confirmó ('he/she confirmed'), nosotros confirmamos ('we confirmed'), ellos confirmaron ('they confirmed')!"
    },
    "pattern": {
      "title": "Why 'Hablamos' Means Both 'We Speak' and 'We Spoke'",
      "content": "In -ar verbs, the nosotros form (hablamos, visitamos, celebramos) is identical in the present and the preterite! Context (hoy vs ayer) tells the listener immediately whether you mean 'we speak' or 'we spoke'."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I spoke",
            "german": "hablé"
          },
          {
            "id": "p2",
            "english": "you spoke (tú)",
            "german": "hablaste"
          },
          {
            "id": "p3",
            "english": "he / she / usted spoke",
            "german": "habló"
          },
          {
            "id": "p4",
            "english": "we spoke / we speak",
            "german": "hablamos"
          },
          {
            "id": "p5",
            "english": "they / you all spoke",
            "german": "hablaron"
          },
          {
            "id": "p6",
            "english": "yesterday",
            "german": "ayer"
          }
        ],
        "target_answer": "hablé, hablaste, habló, hablamos, hablaron, ayer",
        "meaning": "I spoke, you spoke (tú), he / she / usted spoke, we spoke / we speak, they / you all spoke, yesterday",
        "explanation": "Only 1st person singular (-é) and 3rd person singular (-ó) carry a written accent mark.",
        "id": "es1801_e1"
      },
      {
        "type": "morpheme_tiles",
        "prompt": "Form 'I visited' (1st person singular preterite of visitar):",
        "tile_options": [
          "visit",
          "é",
          "ó",
          "ar"
        ],
        "target_answer": "visité",
        "meaning": "visité (I visited)",
        "explanation": "Strip -ar from visitar and add stressed -é: visité.",
        "id": "es1801_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'She confirmed the reservation yesterday'?",
        "options": [
          "Ayer ella confirmó la reservación",
          "Ayer ella confirme la reservación",
          "Ayer ella confirmé la reservación"
        ],
        "target_answer": "Ayer ella confirmó la reservación",
        "meaning": "Yesterday she confirmed the reservation",
        "explanation": "3rd person singular preterite of -ar verbs ends in stressed -ó: confirmó.",
        "id": "es1801_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'Yesterday I bought the book'",
        "target_answer": "Ayer hablé con mi padre",
        "meaning": "Yesterday I spoke with my father",
        "word_bank": [
          "Ayer",
          "hablé",
          "con",
          "mi",
          "padre",
          "hablo",
          "mañana",
          "madre"
        ],
        "explanation": "Ayer hablé con mi padre.",
        "id": "es1801_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Ayer hablé con mi amigo",
        "replays": 2,
        "target_answer": "Ayer hablé con mi amigo",
        "meaning": "Yesterday I spoke with my friend",
        "cues": [
          "Yesterday: Ayer",
          "I spoke: hablé",
          "with my friend: con mi amigo"
        ],
        "explanation": "Ayer hablé con mi amigo.",
        "affirmation": "Clean -é preterite ending!",
        "id": "es1801_e5"
      }
    ],
    "summary": {
      "outcome": "Conjugate any regular -ar verb in the preterite (-é, -aste, -ó, -amos, -aron).",
      "use_example": {
        "german": "Ayer hablé con mi amigo y confirmamos la reservación.",
        "english": "Yesterday I spoke with my friend and we confirmed the reservation."
      },
      "takeaway": "1st person -é and 3rd person -ó always wear an acute accent in regular -ar preterites.",
      "curiosity_teaser": "Up next ([1802] The Famous Irregulars): discover why ser ('to be') and ir ('to go') share the exact same preterite (fui, fuiste, fue)!"
    },
    "twist": {
      "prompt": "Assemble: 'Yesterday I spoke'",
      "target_answer": "Ayer hablé",
      "word_bank": [
        "Ayer",
        "hablé",
        "Hoy",
        "hablaba",
        "he"
      ],
      "explanation": "Ayer hablé."
    }
  },
  {
    "id": 1802,
    "slug": "famous-preterite-irregulars",
    "title": "The Famous Irregulars",
    "subtitle": "fui/fue (shared by ser and ir!), hice/hizo (hacer), tuve/tuvo (tener) in past narratives",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "fue",
      "ser",
      "ir",
      "hacer",
      "tener",
      "ayer",
      "comí",
      "madre",
      "restaurante"
    ],
    "table_word_ids": [
      "fue",
      "ser",
      "ir",
      "hacer",
      "tener",
      "ayer"
    ],
    "hook": {
      "title": "One Preterite for Two Verbs: Why Ser and Ir Both Become 'Fui / Fue'!",
      "content": "Here is one of history's wildest linguistic mergers: in Latin, the verb 'to go' (īre) became so worn down in the past tense that speakers borrowed the past tense of 'to be' (Latin fuī 'I was') whenever they meant 'I went' ('I was to the market' = 'I went to the market')! As a result, ser ('to be') and ir ('to go') have 100% IDENTICAL forms in the preterite: yo fui ('I was / I went'), tú fuiste ('you were / you went'), él/ella/usted fue ('he/she/it was OR went')!"
    },
    "pattern": {
      "title": "How Context Separates 'It Was' from 'He Went'",
      "content": "Followed by a destination with a/al (Fue al restaurante, Fui a Madrid), fue/fui means 'went'. Followed by an adjective or noun (Fue fantástico, Fue un éxito), fue means 'was'!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "he/she/it was (ser) OR went (ir)",
            "german": "fue"
          },
          {
            "id": "p2",
            "english": "I ate (comer)",
            "german": "comí"
          },
          {
            "id": "p3",
            "english": "he went to the restaurant",
            "german": "fue al restaurante"
          },
          {
            "id": "p4",
            "english": "it was fantastic",
            "german": "fue fantástico"
          },
          {
            "id": "p5",
            "english": "it was a success",
            "german": "fue un éxito"
          }
        ],
        "target_answer": "fue, comí, fue al restaurante, fue fantástico, fue un éxito",
        "meaning": "he/she/it was (ser) OR went (ir), I ate (comer), he went to the restaurant, it was fantastic, it was a success",
        "explanation": "fue + al/a [place] = 'went'; fue + adjective/noun = 'was'.",
        "id": "es1802_e1"
      },
      {
        "type": "shift_select",
        "prompt": "What does 'Fue a Madrid y fue fantástico' mean?",
        "options": [
          "He/she went to Madrid and it was fantastic",
          "It was Madrid and he went fantastic",
          "He goes to Madrid and it is fantastic"
        ],
        "target_answer": "He/she went to Madrid and it was fantastic",
        "meaning": "He/she went to Madrid and it was fantastic",
        "explanation": "The first fue (before a Madrid) is ir ('went'); the second fue (before fantástico) is ser ('was')!",
        "id": "es1802_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'Yesterday he went to the restaurant'",
        "target_answer": "Ayer fue al restaurante",
        "meaning": "Yesterday he went to the restaurant",
        "word_bank": [
          "Ayer",
          "fue",
          "al",
          "restaurante",
          "es",
          "va",
          "la"
        ],
        "explanation": "Ayer + fue + al (a + el) + restaurante.",
        "id": "es1802_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that the reservation was a success",
        "cues": [
          "The reservation → La reservación",
          "was (preterite of ser) → fue",
          "a success → un éxito"
        ],
        "idea_parts": [
          "The reservation → La reservación",
          "was → fue",
          "a success → un éxito"
        ],
        "target_answer": "La reservación fue un éxito",
        "meaning": "The reservation was a success",
        "word_bank": [
          "La",
          "reservación",
          "fue",
          "un",
          "éxito",
          "es",
          "una",
          "salida"
        ],
        "explanation": "La reservación fue un éxito.",
        "id": "es1802_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Ayer fue al hotel y comí allí",
        "replays": 2,
        "target_answer": "Ayer fue al hotel y comí allí",
        "meaning": "Yesterday he went to the hotel and I ate there",
        "cues": [
          "Yesterday he went: Ayer fue",
          "to the hotel: al hotel",
          "and I ate there: y comí allí"
        ],
        "explanation": "Ayer fue al hotel y comí allí.",
        "affirmation": "Dual-purpose fue mastered!",
        "id": "es1802_e5"
      }
    ],
    "summary": {
      "outcome": "Deploy fue as the shared preterite of both ser ('was') and ir ('went').",
      "use_example": {
        "german": "Ayer fue a Madrid y la visita fue un éxito.",
        "english": "Yesterday he/she went to Madrid and the visit was a success."
      },
      "takeaway": "ser and ir share the exact same preterite (fui, fuiste, fue) — 'a + place' tells you it means 'went'!",
      "curiosity_teaser": "Up next ([19] The Imperfect: The Storytelling Past): paint ongoing past scenes and habits with -aba, -ía, era, and estaba."
    },
    "twist": {
      "prompt": "Assemble: 'It was a success'",
      "target_answer": "Fue un éxito",
      "word_bank": [
        "Fue",
        "un",
        "éxito",
        "Es",
        "una",
        "salida"
      ],
      "explanation": "Fue un éxito ('It was a success')."
    }
  },
  {
    "id": 19,
    "slug": "imperfect-storytelling-past",
    "title": "The Imperfect: The Storytelling Past",
    "subtitle": "hablaba, comía, era, estaba — ongoing background action, descriptions, and past habits",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "hablaba",
      "era",
      "estaba",
      "fue",
      "hablé",
      "ser",
      "estar",
      "vivir",
      "comer",
      "tiempo"
    ],
    "table_word_ids": [
      "hablaba",
      "era",
      "estaba",
      "fue",
      "hablé",
      "ser"
    ],
    "hook": {
      "title": "The Line vs The Dot in the Past",
      "content": "If the Preterite (hablé, comí, fue) is a camera snapshot of a completed event ('Yesterday I spoke'), the Imperfect (el pretérito imperfecto) is a wide-angle video camera filming the ongoing background scene, how things used to be, or what was happening in the middle of an action! In English, it translates to BOTH 'I was speaking' AND 'I used to speak' — and in Spanish, it is one single, rhythmic word: hablaba!"
    },
    "pattern": {
      "title": "The Most Regular Tense in Spanish: -aba and -ía (Plus Era!)",
      "content": "Every single -ar verb in Spanish — including estar! — forms the imperfect by replacing -ar with -aba (yo hablaba, tú hablabas, él/ella/usted hablaba; yo estaba, él estaba). Every -er and -ir verb replaces -er/-ir with stressed -ía (comía 'was eating / used to eat', vivía 'was living / used to live', tenía 'had / used to have'). And ser becomes era ('was / used to be' — cousin of English 'era', an ongoing span of time)!",
      "linguist_note": "Latin imperfect -ābam survived almost unchanged as Spanish -aba; only THREE verbs in the entire Spanish language (ser → era, ir → iba, ver → veía) are irregular in the imperfect!",
      "trap_note": "Because 1st person ('I') and 3rd person ('he/she/usted') are identical in the imperfect (hablaba, estaba, era), speakers include yo or él/ella whenever context doesn't make the subject clear!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I / he / she was speaking, used to speak (-ar → -aba)",
            "german": "hablaba"
          },
          {
            "id": "p2",
            "english": "I / he / she was (ongoing trait/identity: ser)",
            "german": "era"
          },
          {
            "id": "p3",
            "english": "I / he / she was (ongoing state/location: estar)",
            "german": "estaba"
          },
          {
            "id": "p4",
            "english": "it was / he went (completed event dot: preterite)",
            "german": "fue"
          },
          {
            "id": "p5",
            "english": "I spoke (completed event dot: preterite)",
            "german": "hablé"
          }
        ],
        "target_answer": "hablaba, era, estaba, fue, hablé",
        "meaning": "I / he / she was speaking, used to speak (-ar → -aba), I / he / she was (ongoing trait/identity: ser), I / he / she was (ongoing state/location: estar), it was / he went (completed event dot: preterite), I spoke (completed event dot: preterite)",
        "explanation": "Imperfect (-aba, -ía, era, estaba) paints the ongoing line; preterite (hablé, fue) marks the completed dot.",
        "id": "es19_e1"
      },
      {
        "type": "reverse_cognate",
        "prompt": "Spanish era ('was / used to be', the imperfect of ser from Latin erat) is spelled identically to which English noun for a long, ongoing historical period?",
        "target_answer": "era",
        "meaning": "an 'era' is literally an ongoing stretch of past time — the exact job of the Spanish imperfect!",
        "explanation": "Thinking of an 'era' reminds you that era (unlike single-event fue) describes ongoing background traits in the past.",
        "id": "es19_e2"
      },
      {
        "type": "variant_english",
        "prompt": "Select every English sentence that accurately renders the Spanish imperfect 'Yo hablaba con mi amigo':",
        "german": "Yo hablaba con mi amigo",
        "meaning": "I was speaking / I used to speak with my friend",
        "renderings": [
          "I was speaking with my friend",
          "I used to speak with my friend"
        ],
        "traps": [
          "I will speak with my friend tomorrow",
          "Speak with my friend right now!"
        ],
        "target_answer": "I was speaking with my friend",
        "explanation": "One Spanish imperfect form (hablaba) covers both ongoing past action ('was speaking') and habitual past action ('used to speak')!",
        "id": "es19_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'The coffee was very hot (ongoing state in the past)'",
        "target_answer": "El café estaba muy caliente",
        "meaning": "The coffee was very hot",
        "word_bank": [
          "El",
          "café",
          "estaba",
          "muy",
          "caliente",
          "era",
          "fue",
          "es"
        ],
        "explanation": "Thermal state in the past uses the imperfect of estar: estaba.",
        "id": "es19_e4"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that when you were here, you spoke with María ('I was here and I spoke with María')",
        "cues": [
          "I was here (ongoing background location) → Estaba aquí",
          "and I spoke (completed event dot!) → y hablé",
          "with María → con María"
        ],
        "idea_parts": [
          "I was here → Estaba aquí",
          "and I spoke → y hablé",
          "with María → con María"
        ],
        "target_answer": "Estaba aquí y hablé con María",
        "meaning": "I was here and I spoke with María",
        "word_bank": [
          "Estaba",
          "aquí",
          "y",
          "hablé",
          "con",
          "María",
          "Era",
          "hablaba",
          "estoy"
        ],
        "explanation": "Estaba aquí (background stage) + y hablé con María (the action that happened on that stage)!",
        "diagnosis": {
          "slip": "used fue instead of Estaba for location",
          "cue": "Ongoing past location always uses estaba."
        },
        "id": "es19_e5"
      }
    ],
    "summary": {
      "outcome": "Form the imperfect (-aba, -ía, era, estaba) and contrast ongoing background lines with preterite event dots.",
      "use_example": {
        "german": "La casa era grande, el café estaba caliente y hablé con mi amigo.",
        "english": "The house was big, the coffee was hot, and I spoke with my friend."
      },
      "takeaway": "-aba (all -ar verbs, including estaba) and era paint the ongoing past canvas; hablé and fue mark the events.",
      "curiosity_teaser": "Up next ([1901] -aba and -ía Paradigms): see why yo and él/ella/usted share the exact same imperfect form."
    },
    "twist": {
      "prompt": "Assemble: 'It was a beautiful city (background description)'",
      "target_answer": "Era una ciudad hermosa",
      "word_bank": [
        "Era",
        "una",
        "ciudad",
        "hermosa",
        "Estaba",
        "Es",
        "hermoso"
      ],
      "explanation": "Era una ciudad hermosa."
    },
    "foreshadow": {
      "line": "What if an action started in the past ('three years ago') and is STILL happening right now? In Topic 20, you'll see why Spanish keeps it in the PRESENT tense with desde hace!",
      "resolvedIn": 20
    },
    "payoff": {
      "ofLesson": 18,
      "text": "With Topic 18's Preterite (the dot) and Topic 19's Imperfect (the line), you now command the complete two-camera system of Spanish past storytelling."
    }
  },
  {
    "id": 1901,
    "slug": "aba-and-ia-paradigms",
    "title": "-aba and -ía Paradigms",
    "subtitle": "The rhythmic endings of memory: hablaba (-ar) and comía/vivía (-er/-ir), plus era (ser)",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "hablaba",
      "era",
      "estaba",
      "vivir",
      "comer",
      "tener",
      "querer",
      "poder",
      "casa"
    ],
    "table_word_ids": [
      "hablaba",
      "era",
      "estaba",
      "vivir",
      "comer",
      "tener"
    ],
    "hook": {
      "title": "Only Three Irregular Verbs in the Whole Language!",
      "content": "Let that sink in: in the entire Spanish language, only THREE verbs are irregular in the imperfect (ser → era, ir → iba, ver → veía). Every single other verb — even tener, querer, poder, hacer, estar, saber — is 100% regular: estaba (-aba) and tenía, quería, podía, hacía (-ía)!"
    },
    "pattern": {
      "title": "The Musical Rhythm of -aba and -ía",
      "content": "-ar verbs: hablaba, hablabas, hablaba, hablábamos, hablaban.\n-er / -ir verbs: vivía, vivías, vivía, vivíamos, vivían (always with a tilde on the í!)."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I / he was speaking (-ar)",
            "german": "hablaba"
          },
          {
            "id": "p2",
            "english": "I / he was (state/location: estar)",
            "german": "estaba"
          },
          {
            "id": "p3",
            "english": "I / he was (identity/description: ser)",
            "german": "era"
          },
          {
            "id": "p4",
            "english": "you were speaking (tú)",
            "german": "hablabas"
          },
          {
            "id": "p5",
            "english": "we were / used to be (ser)",
            "german": "éramos"
          }
        ],
        "target_answer": "hablaba, estaba, era, hablabas, éramos",
        "meaning": "I / he was speaking (-ar), I / he was (state/location: estar), I / he was (identity/description: ser), you were speaking (tú), we were / used to be (ser)",
        "explanation": "All -ar verbs take -aba; ser takes era/eras/era/éramos/eran.",
        "id": "es1901_e1"
      },
      {
        "type": "morpheme_tiles",
        "prompt": "Build the imperfect of 'estar' ('I/he/she was in a state or place') using the regular -ar imperfect ending:",
        "tile_options": [
          "est",
          "aba",
          "ía",
          "ar"
        ],
        "target_answer": "estaba",
        "meaning": "estaba (was - state/location)",
        "explanation": "estar is 100% regular in the imperfect: est + aba = estaba.",
        "id": "es1901_e2"
      },
      {
        "type": "shift_select",
        "prompt": "Which tense and verb do you use for 'I used to speak every day'?",
        "options": [
          "Hablaba todos los días",
          "Hablé todos los días",
          "He hablado todos los días"
        ],
        "target_answer": "Hablaba todos los días",
        "meaning": "I used to speak every day",
        "explanation": "Habitual past ('used to [verb]') is always expressed by the imperfect: hablaba.",
        "id": "es1901_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'She was very happy (ongoing past state)'",
        "target_answer": "Ella estaba muy contenta",
        "meaning": "She was very happy",
        "word_bank": [
          "Ella",
          "estaba",
          "muy",
          "contenta",
          "era",
          "fue",
          "contento"
        ],
        "explanation": "Ella estaba muy contenta — emotional state in the past uses estaba.",
        "id": "es1901_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Yo hablaba con mi padre",
        "replays": 2,
        "target_answer": "Yo hablaba con mi padre",
        "meaning": "I was speaking / used to speak with my father",
        "cues": [
          "I: Yo",
          "was speaking / used to speak: hablaba",
          "with my father: con mi padre"
        ],
        "explanation": "Yo hablaba con mi padre.",
        "affirmation": "Rhythmic -aba imperfect mastered!",
        "id": "es1901_e5"
      }
    ],
    "summary": {
      "outcome": "Deploy hablaba, estaba, and era for past habits ('used to') and ongoing past states.",
      "use_example": {
        "german": "Yo hablaba español todos los días y estaba muy contento.",
        "english": "I used to speak Spanish every day and I was very happy."
      },
      "takeaway": "Where English needs three words ('used to speak' or 'was speaking'), Spanish uses one: hablaba.",
      "curiosity_teaser": "Up next ([1902] Setting the Scene: Preterite vs Imperfect): combine the imperfect stage setting with the preterite event in one sentence."
    },
    "twist": {
      "prompt": "Assemble: 'The house was small'",
      "target_answer": "La casa era pequeña",
      "word_bank": [
        "La",
        "casa",
        "era",
        "pequeña",
        "estaba",
        "fue",
        "pequeño"
      ],
      "explanation": "La casa era pequeña describes an ongoing past characteristic."
    }
  },
  {
    "id": 1902,
    "slug": "setting-scene-preterite-vs-imperfect",
    "title": "Setting the Scene: Preterite vs Imperfect",
    "subtitle": "The background canvas (estaba, vivía, era) interrupted by the event dot (llegó, vi, fue)",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "estaba",
      "era",
      "hablaba",
      "fue",
      "hablé",
      "comí",
      "ayer",
      "casa",
      "restaurante",
      "hotel"
    ],
    "table_word_ids": [
      "estaba",
      "era",
      "hablaba",
      "fue",
      "hablé",
      "comí"
    ],
    "hook": {
      "title": "Stage Lighting vs The Actor Entering",
      "content": "Every great story uses both past tenses together:\n• **Imperfect (Stage Lighting & Scenery)**: Estaba en el restaurante ('I was in the restaurant'), el café estaba caliente ('the coffee was hot'), la noche era hermosa ('the night was beautiful').\n• **Preterite (The Action on Stage)**: Hablé con mi amigo ('I spoke with my friend'), comí el pastel ('I ate the cake'), fue un éxito ('it was a success' — summing up the whole finished event as one dot)!"
    },
    "pattern": {
      "title": "Why 'Era' Paints the Ongoing Quality and 'Fue' Judges the Completed Event",
      "content": "Notice the difference: La fiesta era grande ('The party was big' — describing what it looked like while you were in the middle of it) vs La fiesta fue un éxito ('The party was a success' — stamping a final verdict on the finished event)!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I was in the hotel (background location)",
            "german": "estaba en el hotel"
          },
          {
            "id": "p2",
            "english": "he went to the hotel (event dot)",
            "german": "fue al hotel"
          },
          {
            "id": "p3",
            "english": "it was a big house (ongoing description)",
            "german": "era una casa grande"
          },
          {
            "id": "p4",
            "english": "it was a success (final verdict on finished event)",
            "german": "fue un éxito"
          },
          {
            "id": "p5",
            "english": "I was speaking (ongoing) vs I spoke (completed)",
            "german": "hablaba vs hablé"
          }
        ],
        "target_answer": "estaba en el hotel, fue al hotel, era una casa grande, fue un éxito, hablaba vs hablé",
        "meaning": "I was in the hotel (background location), he went to the hotel (event dot), it was a big house (ongoing description), it was a success (final verdict on finished event), I was speaking (ongoing) vs I spoke (completed)",
        "explanation": "Imperfect puts you inside the ongoing moment; preterite steps back and views the completed event as a whole.",
        "id": "es1902_e1"
      },
      {
        "type": "shift_select",
        "prompt": "In 'I was at the house when I spoke with my mother', which pair of verbs matches 'was' (background location) and 'spoke' (completed event)?",
        "options": [
          "Estaba / hablé",
          "Fui / hablaba",
          "Era / hablé"
        ],
        "target_answer": "Estaba / hablé",
        "meaning": "I was (there) / I spoke",
        "explanation": "Estaba sets the ongoing location; hablé marks the completed conversation.",
        "id": "es1902_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I was at the restaurant and I ate the cake'",
        "target_answer": "Estaba en el restaurante y comí el pastel",
        "meaning": "I was at the restaurant and I ate the cake",
        "word_bank": [
          "Estaba",
          "en",
          "el",
          "restaurante",
          "y",
          "comí",
          "el",
          "pastel",
          "Era",
          "Fue",
          "como"
        ],
        "explanation": "Estaba (background location) + y comí (completed action).",
        "id": "es1902_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that the hotel was very good (ongoing description) and yesterday you spoke with your friend",
        "cues": [
          "The hotel was very good → El hotel era muy bueno",
          "and yesterday I spoke → y ayer hablé",
          "with my friend → con mi amigo"
        ],
        "idea_parts": [
          "The hotel was very good → El hotel era muy bueno",
          "and yesterday I spoke with my friend → y ayer hablé con mi amigo"
        ],
        "target_answer": "El hotel era muy bueno y ayer hablé con mi amigo",
        "meaning": "The hotel was very good and yesterday I spoke with my friend",
        "word_bank": [
          "El",
          "hotel",
          "era",
          "muy",
          "bueno",
          "y",
          "ayer",
          "hablé",
          "con",
          "mi",
          "amigo",
          "estaba",
          "hablaba",
          "buena"
        ],
        "explanation": "El hotel era muy bueno (description) + y ayer hablé con mi amigo (event).",
        "id": "es1902_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Estaba aquí y fue fantástico",
        "replays": 2,
        "target_answer": "Estaba aquí y fue fantástico",
        "meaning": "I was here and it was fantastic",
        "cues": [
          "I was here (background): Estaba aquí",
          "and it was fantastic (verdict): y fue fantástico"
        ],
        "explanation": "Estaba aquí y fue fantástico.",
        "affirmation": "Masterful contrast of estaba and fue!",
        "id": "es1902_e5"
      }
    ],
    "summary": {
      "outcome": "Combine imperfect background descriptions (era, estaba, hablaba) with preterite events (hablé, comí, fue).",
      "use_example": {
        "german": "Estaba en Madrid, la ciudad era hermosa y fue un viaje fantástico.",
        "english": "I was in Madrid, the city was beautiful, and it was a fantastic trip."
      },
      "takeaway": "Imperfect = inside the ongoing scene (era, estaba, hablaba); Preterite = the completed event or final verdict (hablé, comí, fue).",
      "curiosity_teaser": "Up next ([20] desde hace & Present Duration): see why actions that started in the past and continue right now stay in the PRESENT tense!"
    },
    "twist": {
      "prompt": "Assemble: 'I was speaking when he went'",
      "target_answer": "Yo hablaba cuando fue",
      "word_bank": [
        "Yo",
        "hablaba",
        "cuando",
        "fue",
        "hablé",
        "es",
        "era"
      ],
      "explanation": "Yo hablaba (ongoing) cuando fue (event)."
    }
  },
  {
    "id": 20,
    "slug": "desde-hace-present-duration",
    "title": "desde hace & Present Duration",
    "subtitle": "vivo aquí desde hace tres años — using present tense for actions that continue",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "desde",
      "vivir",
      "estar",
      "estoy",
      "aquí",
      "año",
      "semana",
      "lunes",
      "tres",
      "dos"
    ],
    "table_word_ids": [
      "desde",
      "vivir",
      "estar",
      "estoy",
      "aquí",
      "año"
    ],
    "hook": {
      "title": "Why 'I Have Lived Here for Three Years' Is Present Tense in Spanish!",
      "content": "In English, when an action began three years ago and is STILL true today, you use a past-looking form: 'I have lived here for three years'. In Spanish (just like French depuis and German seit), speakers ask: 'Are you still living here right now? Yes! Then use the PRESENT tense!' Vivo aquí desde hace tres años (word for word: 'I live here since it-makes three years')!"
    },
    "pattern": {
      "title": "Desde (Starting Point) vs Desde Hace (Elapsed Duration)",
      "content": "• **desde + starting point ('since')**: Vivo aquí desde enero ('I have lived here since January'), Estoy aquí desde el lunes ('I have been here since Monday').\n• **desde hace + time span ('for')**: Vivo aquí desde hace tres años ('I have lived here for three years'). Never use *por or *para for ongoing duration with the present tense!",
      "linguist_note": "desde fused Latin dē + ex + dē; hace is the impersonal 3rd-person singular of hacer ('it makes [X time]').",
      "trap_note": "Never translate English 'have been here' word-for-word as *he estado aquí when you mean an unbroken state that continues right now — use simple present Estoy aquí desde...!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "since (starting point: desde enero)",
            "german": "desde"
          },
          {
            "id": "p2",
            "english": "for + duration (since it-makes: desde hace tres años)",
            "german": "desde hace"
          },
          {
            "id": "p3",
            "english": "I have lived here for three years (lit. I live here since it-makes 3 years)",
            "german": "vivo aquí desde hace tres años"
          },
          {
            "id": "p4",
            "english": "I have been here since Monday (lit. I am here since the Monday)",
            "german": "estoy aquí desde el lunes"
          }
        ],
        "target_answer": "desde, desde hace, vivo aquí desde hace tres años, estoy aquí desde el lunes",
        "meaning": "since (starting point: desde enero), for + duration (since it-makes: desde hace tres años), I have lived here for three years (lit. I live here since it-makes 3 years), I have been here since Monday (lit. I am here since the Monday)",
        "explanation": "Ongoing actions that continue into the present always use the PRESENT tense + desde / desde hace.",
        "id": "es20_e1"
      },
      {
        "type": "variant_english",
        "prompt": "Select every natural English rendering of 'Vivo aquí desde hace tres años':",
        "german": "Vivo aquí desde hace tres años",
        "meaning": "I have lived / have been living here for three years",
        "renderings": [
          "I have lived here for three years",
          "I have been living here for three years"
        ],
        "traps": [
          "I lived here three years ago and left",
          "I will live here in three years"
        ],
        "target_answer": "I have lived here for three years",
        "explanation": "Spanish uses the present tense (Vivo) with desde hace for any action that started in the past and is still continuing right now!",
        "id": "es20_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I have lived here for three years'",
        "target_answer": "Vivo aquí desde hace tres años",
        "meaning": "I have lived here for three years",
        "word_bank": [
          "Vivo",
          "aquí",
          "desde",
          "hace",
          "tres",
          "años",
          "Viví",
          "por",
          "para"
        ],
        "explanation": "Vivo (present!) + aquí + desde hace + tres años.",
        "id": "es20_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that you have been here since Monday",
        "cues": [
          "I am here (present location) → Estoy aquí",
          "since → desde",
          "Monday → el lunes"
        ],
        "idea_parts": [
          "I am here → Estoy aquí",
          "since Monday → desde el lunes"
        ],
        "target_answer": "Estoy aquí desde el lunes",
        "meaning": "I have been here since Monday",
        "word_bank": [
          "Estoy",
          "aquí",
          "desde",
          "el",
          "lunes",
          "Estuve",
          "hace",
          "por"
        ],
        "explanation": "Estoy aquí desde el lunes — starting point ('Monday') uses bare desde without hace.",
        "diagnosis": {
          "slip": "added hace before el lunes",
          "cue": "Use bare desde before a calendar starting point (desde el lunes, desde enero) and desde hace before a quantity of time (desde hace tres días)."
        },
        "id": "es20_e4"
      },
      {
        "type": "literal_gloss",
        "prompt": "Which English word-for-word blueprint mirrors Spanish 'Vivo aquí desde hace tres años'?",
        "german": "Vivo aquí desde hace tres años",
        "natural": "I have lived here for three years",
        "options": [
          "I have lived here for three years",
          "I-live here since it-makes three years",
          "I have lived here by three years",
          "I lived here since three years"
        ],
        "target_answer": "I-live here since it-makes three years",
        "meaning": "I have lived here for three years (literal Spanish blueprint: I-live here since it-makes three years)",
        "explanation": "Spanish anchors the verb in the present (Vivo) and looks back at the elapsed time with desde hace ('since it-makes').",
        "id": "es20_e5"
      }
    ],
    "summary": {
      "outcome": "Express ongoing duration ('have been doing for X time / since Y') using the present tense with desde hace and desde.",
      "use_example": {
        "german": "Vivo en Madrid desde hace tres años y estoy aquí desde el lunes.",
        "english": "I have lived in Madrid for three years and I have been here since Monday."
      },
      "takeaway": "If the action is still happening right now, keep the verb in the present tense and add desde (since point) or desde hace (for duration).",
      "curiosity_teaser": "Up next ([2001] desde vs desde hace): contrast calendar starting points with elapsed durations."
    },
    "twist": {
      "prompt": "Assemble: 'I have been here since January'",
      "target_answer": "Estoy aquí desde enero",
      "word_bank": [
        "Estoy",
        "aquí",
        "desde",
        "enero",
        "hace",
        "Soy",
        "por"
      ],
      "explanation": "Estoy aquí desde enero."
    },
    "foreshadow": {
      "line": "Next in Topic 21: how Spanish compares anything with más... que, menos... que, tan... como, and irregular mejor/peor!",
      "resolvedIn": 21
    },
    "payoff": {
      "ofLesson": 19,
      "text": "Having mastered all past tenses in Topics 17–19, Topic 20 shows you when NOT to use a past tense in Spanish!"
    }
  },
  {
    "id": 2001,
    "slug": "desde-vs-desde-hace",
    "title": "desde vs desde hace",
    "subtitle": "Starting point (desde el lunes) vs elapsed duration (desde hace tres años) with the present tense",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "desde",
      "vivir",
      "estoy",
      "está",
      "lunes",
      "enero",
      "año",
      "semana",
      "dos",
      "tres"
    ],
    "table_word_ids": [
      "desde",
      "vivir",
      "estoy",
      "está",
      "lunes",
      "enero"
    ],
    "hook": {
      "title": "Point on the Calendar vs Span on the Stopwatch",
      "content": "Ask one simple question to choose between desde and desde hace:\n• Is it a **named point on the calendar** (Monday, January, 2020)? Use **desde**: desde el lunes, desde enero.\n• Is it a **counted span of time** (two hours, three days, five years)? Use **desde hace**: desde hace dos semanas, desde hace tres años!"
    },
    "pattern": {
      "title": "Alternative Front-Loaded Order: Hace Tres Años Que Vivo Aquí",
      "content": "You will also hear native speakers put the time span first: Hace tres años que vivo aquí ('It makes three years that I live here') — the exact same present-tense logic!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "since Monday (calendar point)",
            "german": "desde el lunes"
          },
          {
            "id": "p2",
            "english": "since January (calendar point)",
            "german": "desde enero"
          },
          {
            "id": "p3",
            "english": "for two weeks (counted span)",
            "german": "desde hace dos semanas"
          },
          {
            "id": "p4",
            "english": "for three years (counted span)",
            "german": "desde hace tres años"
          },
          {
            "id": "p5",
            "english": "he has been here since Tuesday",
            "german": "está aquí desde el martes"
          }
        ],
        "target_answer": "desde el lunes, desde enero, desde hace dos semanas, desde hace tres años, está aquí desde el martes",
        "meaning": "since Monday (calendar point), since January (calendar point), for two weeks (counted span), for three years (counted span), he has been here since Tuesday",
        "explanation": "Named calendar point = desde; counted quantity of time = desde hace.",
        "id": "es2001_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Complete the sentence: 'Vivo en esta casa ___ diez años.'",
        "options": [
          "desde hace",
          "desde",
          "para"
        ],
        "target_answer": "desde hace",
        "meaning": "I have lived in this house for ten years",
        "explanation": "diez años is a counted span of time, so it requires desde hace.",
        "id": "es2001_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'She has been in Madrid since Monday'",
        "target_answer": "Ella está en Madrid desde el lunes",
        "meaning": "She has been in Madrid since Monday",
        "word_bank": [
          "Ella",
          "está",
          "en",
          "Madrid",
          "desde",
          "el",
          "lunes",
          "hace",
          "es",
          "por"
        ],
        "explanation": "Ella está (present!) + en Madrid + desde el lunes.",
        "id": "es2001_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that you have lived in this city for two years",
        "cues": [
          "I live (present) → Vivo",
          "in this city → en esta ciudad",
          "for two years → desde hace dos años"
        ],
        "idea_parts": [
          "I live in this city → Vivo en esta ciudad",
          "for two years → desde hace dos años"
        ],
        "target_answer": "Vivo en esta ciudad desde hace dos años",
        "meaning": "I have lived in this city for two years",
        "word_bank": [
          "Vivo",
          "en",
          "esta",
          "ciudad",
          "desde",
          "hace",
          "dos",
          "años",
          "este",
          "por",
          "para"
        ],
        "explanation": "Vivo en esta ciudad desde hace dos años.",
        "id": "es2001_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Estamos aquí desde hace dos semanas",
        "replays": 2,
        "target_answer": "Estamos aquí desde hace dos semanas",
        "meaning": "We have been here for two weeks",
        "cues": [
          "We are here: Estamos aquí",
          "for (since it-makes): desde hace",
          "two weeks: dos semanas"
        ],
        "explanation": "Estamos aquí desde hace dos semanas.",
        "affirmation": "Present duration with desde hace locked in!",
        "id": "es2001_e5"
      }
    ],
    "summary": {
      "outcome": "Distinguish calendar starting points (desde) from counted time spans (desde hace) with present-tense verbs.",
      "use_example": {
        "german": "Estamos aquí desde el lunes y vivo en Madrid desde hace dos años.",
        "english": "We have been here since Monday and I have lived in Madrid for two years."
      },
      "takeaway": "desde + point in time ('since'); desde hace + quantity of time ('for').",
      "curiosity_teaser": "Up next ([2002] Llevar + Time Expressions): learn how everyday speakers use 'carrying time' (llevo tres años aquí) to sound 100% native."
    },
    "twist": {
      "prompt": "Assemble: 'He has been here for three days'",
      "target_answer": "Está aquí desde hace tres días",
      "word_bank": [
        "Está",
        "aquí",
        "desde",
        "hace",
        "tres",
        "días",
        "Es",
        "por",
        "para"
      ],
      "explanation": "Está aquí desde hace tres días."
    }
  },
  {
    "id": 2002,
    "slug": "llevar-time-expressions",
    "title": "Llevar + Time Expressions",
    "subtitle": "llevar tres años aquí: Spanish's ultra-natural 'carry time' idiom for ongoing duration",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "desde",
      "vivir",
      "estoy",
      "aquí",
      "año",
      "semana",
      "dos",
      "tres",
      "ciudad"
    ],
    "table_word_ids": [
      "desde",
      "vivir",
      "estoy",
      "aquí",
      "año",
      "semana"
    ],
    "hook": {
      "title": "Carrying Time on Your Back: Llevo Tres Años Aquí",
      "content": "Alongside Vivo aquí desde hace tres años, everyday Spanish has an even shorter, ultra-idiomatic way to express ongoing duration: use the verb llevar ('to carry / wear'): Llevo tres años aquí (literally 'I carry three years here' = 'I've been here for three years')!"
    },
    "pattern": {
      "title": "Three Ways to Express Ongoing Duration",
      "content": "1) Vivo aquí desde hace tres años.\n2) Hace tres años que vivo aquí.\n3) Llevo tres años aquí.\nAll three keep the verb in the PRESENT tense because the action is still going on!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I have lived here for three years (with desde hace)",
            "german": "vivo aquí desde hace tres años"
          },
          {
            "id": "p2",
            "english": "I have been here for three years (lit. I carry three years here)",
            "german": "llevo tres años aquí"
          },
          {
            "id": "p3",
            "english": "for two weeks",
            "german": "desde hace dos semanas"
          },
          {
            "id": "p4",
            "english": "since Monday",
            "german": "desde el lunes"
          }
        ],
        "target_answer": "vivo aquí desde hace tres años, llevo tres años aquí, desde hace dos semanas, desde el lunes",
        "meaning": "I have lived here for three years (with desde hace), I have been here for three years (lit. I carry three years here), for two weeks, since Monday",
        "explanation": "Both desde hace and llevar + time use the present tense for ongoing duration.",
        "id": "es2002_e1"
      },
      {
        "type": "shift_select",
        "prompt": "What does a native speaker in Madrid mean by 'Llevo dos años en Madrid'?",
        "options": [
          "I have been (living) in Madrid for two years",
          "I will go to Madrid in two years",
          "I left Madrid two years ago"
        ],
        "target_answer": "I have been (living) in Madrid for two years",
        "meaning": "I have been in Madrid for two years",
        "explanation": "llevar + time span literally pictures 'carrying' the accumulated time you've spent somewhere!",
        "id": "es2002_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I have lived in this house for three years'",
        "target_answer": "Vivo en esta casa desde hace tres años",
        "meaning": "I have lived in this house for three years",
        "word_bank": [
          "Vivo",
          "en",
          "esta",
          "casa",
          "desde",
          "hace",
          "tres",
          "años",
          "este",
          "por",
          "para"
        ],
        "explanation": "Vivo en esta casa desde hace tres años.",
        "id": "es2002_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that we have been in the city since Monday",
        "cues": [
          "We are (location) → Estamos",
          "in the city → en la ciudad",
          "since Monday → desde el lunes"
        ],
        "idea_parts": [
          "We are in the city → Estamos en la ciudad",
          "since Monday → desde el lunes"
        ],
        "target_answer": "Estamos en la ciudad desde el lunes",
        "meaning": "We have been in the city since Monday",
        "word_bank": [
          "Estamos",
          "en",
          "la",
          "ciudad",
          "desde",
          "el",
          "lunes",
          "Somos",
          "hace",
          "por"
        ],
        "explanation": "Estamos en la ciudad desde el lunes.",
        "id": "es2002_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Vivo aquí desde hace diez años",
        "replays": 2,
        "target_answer": "Vivo aquí desde hace diez años",
        "meaning": "I have lived here for ten years",
        "cues": [
          "I live here: Vivo aquí",
          "for (since it-makes): desde hace",
          "ten years: diez años"
        ],
        "explanation": "Vivo aquí desde hace diez años.",
        "affirmation": "Ongoing present duration mastered!",
        "id": "es2002_e5"
      }
    ],
    "summary": {
      "outcome": "Recognize llevar + time and produce present-tense duration sentences with desde and desde hace.",
      "use_example": {
        "german": "Vivo en esta ciudad desde hace diez años.",
        "english": "I have lived in this city for ten years."
      },
      "takeaway": "Spanish views ongoing duration as present reality (vivo / estoy / llevo).",
      "curiosity_teaser": "Up next ([21] Comparatives: más, menos, mejor): compare anything in Spanish with más, menos, mejor, peor, and tan... como!"
    },
    "twist": {
      "prompt": "Assemble: 'I have been here for two weeks'",
      "target_answer": "Estoy aquí desde hace dos semanas",
      "word_bank": [
        "Estoy",
        "aquí",
        "desde",
        "hace",
        "dos",
        "semanas",
        "Soy",
        "por",
        "para"
      ],
      "explanation": "Estoy aquí desde hace dos semanas."
    }
  },
  {
    "id": 21,
    "slug": "comparatives-mas-menos-mejor",
    "title": "Comparatives: más, menos, mejor",
    "subtitle": "más... que, menos... que, tan... como, and irregular mejor/peor",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "más",
      "menos",
      "mejor",
      "peor",
      "tan",
      "como",
      "grande",
      "importante",
      "bueno"
    ],
    "table_word_ids": [
      "más",
      "menos",
      "mejor",
      "peor",
      "tan",
      "como"
    ],
    "hook": {
      "title": "Why Spanish Never Adds '-er' to Adjectives",
      "content": "In English, short adjectives add '-er' ('bigger, smaller, colder') while long adjectives use 'more' ('more important, more interesting'). Spanish uses one clean system for every regular adjective: place más ('more', with an accent!) or menos ('less') before the adjective, and close the comparison with que ('than'): más grande que ('bigger than'), menos importante que ('less important than')!"
    },
    "pattern": {
      "title": "Equality (Tan... Como) and the Two Suppletives: Mejor & Peor",
      "content": "• **Equality ('as [adj] as')**: tan + adjective + como (tan grande como 'as big as', tan importante como 'as important as').\n• **Better & Worse**: Just as English says 'better' (never *gooder) and 'worse' (never *badder), Spanish says mejor ('better / best', cousin of English ameliorate!) and peor ('worse / worst', cousin of pejorative!) — never *más bueno or *más malo!",
      "linguist_note": "Latin magis ('more') won out in Iberian Romance (Spanish más, Portuguese mais), whereas plūs won out in Galloromance and Italic (French plus, Italian più).",
      "trap_note": "Notice the accent on más ('more'): with a tilde, más means 'more/most'; without a tilde, literary mas means 'but'!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "more / -er",
            "german": "más"
          },
          {
            "id": "p2",
            "english": "less",
            "german": "menos"
          },
          {
            "id": "p3",
            "english": "better / best",
            "german": "mejor"
          },
          {
            "id": "p4",
            "english": "worse / worst",
            "german": "peor"
          },
          {
            "id": "p5",
            "english": "as [adj] as",
            "german": "tan... como"
          },
          {
            "id": "p6",
            "english": "bigger than",
            "german": "más grande que"
          }
        ],
        "target_answer": "más, menos, mejor, peor, tan... como, más grande que",
        "meaning": "more / -er, less, better / best, worse / worst, as [adj] as, bigger than",
        "explanation": "más/menos... que handles inequality; tan... como handles equality; mejor/peor replace *más bueno/*más malo.",
        "id": "es21_e1"
      },
      {
        "type": "reverse_cognate",
        "prompt": "Spanish peor ('worse', from Latin peior) shares its root with which English adjective for a word or remark that disparages or makes something sound 'worse'?",
        "target_answer": "pejorative",
        "meaning": "a pejorative term is literally one that makes things look 'worse' (peor)!",
        "explanation": "Latin peior gave Spanish peor and English pejorative, while melior gave Spanish mejor and English ameliorate.",
        "id": "es21_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'This coffee is better than that one'?",
        "options": [
          "Este café es mejor que ese",
          "*Este café es más bueno que ese",
          "*Este café es mejor como ese"
        ],
        "target_answer": "Este café es mejor que ese",
        "meaning": "This coffee is better than that one",
        "explanation": "mejor ('better') replaces *más bueno and links to the second item with que ('than').",
        "id": "es21_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'Madrid is bigger than Toledo'",
        "target_answer": "Madrid es más grande que Toledo",
        "meaning": "Madrid is bigger than Toledo",
        "word_bank": [
          "Madrid",
          "es",
          "más",
          "grande",
          "que",
          "Toledo",
          "menos",
          "como",
          "mejor"
        ],
        "explanation": "Madrid es + más grande + que + Toledo.",
        "id": "es21_e4"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that this book is as important as that one (tan importante como ese)",
        "cues": [
          "This book is → Este libro es",
          "as important → tan importante",
          "as that one → como ese"
        ],
        "idea_parts": [
          "This book is → Este libro es",
          "as important as → tan importante como",
          "that one → ese"
        ],
        "target_answer": "Este libro es tan importante como ese",
        "meaning": "This book is as important as that one",
        "word_bank": [
          "Este",
          "libro",
          "es",
          "tan",
          "importante",
          "como",
          "ese",
          "más",
          "que",
          "esto"
        ],
        "explanation": "Este libro es tan importante como ese — equality uses tan... como (without an accent on como!).",
        "diagnosis": {
          "slip": "used que instead of como after tan",
          "cue": "Inequality (más/menos) closes with que ('than'); equality (tan) closes with como ('as')."
        },
        "id": "es21_e5"
      }
    ],
    "summary": {
      "outcome": "Compare adjectives with más/menos... que, tan... como, and irregular mejor and peor.",
      "use_example": {
        "german": "Madrid es más grande que Toledo y este café es mejor que ese.",
        "english": "Madrid is bigger than Toledo and this coffee is better than that one."
      },
      "takeaway": "más/menos/mejor/peor close with que ('than'); tan closes with como ('as').",
      "curiosity_teaser": "Up next ([2101] Superiority and Inferiority): build comparatives and superlatives ('the biggest' = el más grande)."
    },
    "twist": {
      "prompt": "Assemble: 'Today it is worse'",
      "target_answer": "Hoy es peor",
      "word_bank": [
        "Hoy",
        "es",
        "peor",
        "mejor",
        "más",
        "tan"
      ],
      "explanation": "Hoy es peor."
    },
    "foreshadow": {
      "line": "Welcome to Phase 4 (The Deep Engine)! In Topic 22, we stack two object pronouns before the verb (me lo da, te lo digo) and discover why *le lo turns into se lo.",
      "resolvedIn": 22
    },
    "payoff": {
      "ofLesson": 20,
      "text": "You just completed the Past & Comparison Gate! Every time frame and comparison structure in Phase 3 is now in your toolkit."
    }
  },
  {
    "id": 2101,
    "slug": "superiority-and-inferiority",
    "title": "Superiority and Inferiority",
    "subtitle": "más grande que, menos caro que, and superlatives el/la más grande",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "más",
      "menos",
      "grande",
      "pequeño",
      "importante",
      "económico",
      "hermoso",
      "ciudad",
      "hotel"
    ],
    "table_word_ids": [
      "más",
      "menos",
      "grande",
      "pequeño",
      "importante",
      "económico"
    ],
    "hook": {
      "title": "How 'Bigger' Becomes 'The Biggest' Just by Adding 'El / La'!",
      "content": "Here is a wonderful two-for-one bargain: once you know how to say 'bigger' (más grande) or 'more beautiful' (más hermosa), how do you say 'THE biggest' or 'THE most beautiful'? You don't change the word at all — just put the definite article el/la/los/las in front of the noun (or pronoun): el hotel más grande ('the biggest hotel'), la ciudad más hermosa ('the most beautiful city')!"
    },
    "pattern": {
      "title": "Why Superlatives Use 'De' for 'In'",
      "content": "When English says 'the biggest city IN the world / IN Spain', Spanish uses de ('of'): la ciudad más grande de España ('the biggest city of Spain')!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "bigger than",
            "german": "más grande que"
          },
          {
            "id": "p2",
            "english": "the biggest hotel",
            "german": "el hotel más grande"
          },
          {
            "id": "p3",
            "english": "less economical than",
            "german": "menos económico que"
          },
          {
            "id": "p4",
            "english": "the most beautiful city",
            "german": "la ciudad más hermosa"
          },
          {
            "id": "p5",
            "english": "more important than",
            "german": "más importante que"
          }
        ],
        "target_answer": "más grande que, el hotel más grande, menos económico que, la ciudad más hermosa, más importante que",
        "meaning": "bigger than, the biggest hotel, less economical than, the most beautiful city, more important than",
        "explanation": "Adding el/la before the noun turns más [adj] from 'more/-er' into 'the most/-est'!",
        "id": "es2101_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'It is the most important city'?",
        "options": [
          "Es la ciudad más importante",
          "*Es la más importante ciudad",
          "*Es la ciudad muy importante"
        ],
        "target_answer": "Es la ciudad más importante",
        "meaning": "It is the most important city",
        "explanation": "Keep noun-first order: la ciudad + más importante.",
        "id": "es2101_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'This hotel is more economical than that one'",
        "target_answer": "Este hotel es más económico que ese",
        "meaning": "This hotel is more economical than that one",
        "word_bank": [
          "Este",
          "hotel",
          "es",
          "más",
          "económico",
          "que",
          "ese",
          "menos",
          "como",
          "esto"
        ],
        "explanation": "Este hotel es + más económico + que + ese.",
        "id": "es2101_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that it is the biggest house",
        "cues": [
          "It is → Es",
          "the house (noun first!) → la casa",
          "most big → más grande"
        ],
        "idea_parts": [
          "It is → Es",
          "the biggest house → la casa más grande"
        ],
        "target_answer": "Es la casa más grande",
        "meaning": "It is the biggest house",
        "word_bank": [
          "Es",
          "la",
          "casa",
          "más",
          "grande",
          "el",
          "mejor",
          "que"
        ],
        "explanation": "Es la casa más grande.",
        "id": "es2101_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Es la ciudad más hermosa",
        "replays": 2,
        "target_answer": "Es la ciudad más hermosa",
        "meaning": "It is the most beautiful city",
        "cues": [
          "It is: Es",
          "the city: la ciudad",
          "most beautiful: más hermosa"
        ],
        "explanation": "Es la ciudad más hermosa.",
        "affirmation": "Superlative structure mastered!",
        "id": "es2101_e5"
      }
    ],
    "summary": {
      "outcome": "Form comparatives with más/menos... que and superlatives with el/la + noun + más/menos + adjective.",
      "use_example": {
        "german": "Este hotel es más económico que ese y esta es la ciudad más hermosa.",
        "english": "This hotel is more economical than that one and this is the most beautiful city."
      },
      "takeaway": "el/la + noun + más [adj] = 'the most [adj] / the [adj]-est'.",
      "curiosity_teaser": "Up next ([2102] Equality and Irregulars): master tan... como, mejor ('better/best'), and peor ('worse/worst')."
    },
    "twist": {
      "prompt": "Assemble: 'It is less important'",
      "target_answer": "Es menos importante",
      "word_bank": [
        "Es",
        "menos",
        "importante",
        "más",
        "tan",
        "que"
      ],
      "explanation": "Es menos importante."
    }
  },
  {
    "id": 2102,
    "slug": "equality-and-irregulars",
    "title": "Equality and Irregulars",
    "subtitle": "tan... como ('as... as'), mejor ('better/best'), and peor ('worse/worst')",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "tan",
      "como",
      "mejor",
      "peor",
      "bueno",
      "grande",
      "importante",
      "amigo",
      "vino",
      "café"
    ],
    "table_word_ids": [
      "tan",
      "como",
      "mejor",
      "peor",
      "bueno",
      "grande"
    ],
    "hook": {
      "title": "Why 'Mejor' and 'Peor' Can Stand Before the Noun",
      "content": "When mejor and peor mean ' the best' and 'the worst', they often step right in front of the noun: Es mi mejor amigo ('He is my best friend'), Es el mejor restaurante ('It is the best restaurant')! And notice that in the plural, mejor and peor end in a consonant (-r), so they add -es: los mejores amigos ('the best friends')!"
    },
    "pattern": {
      "title": "Tan + Adjective + Como",
      "content": "Remember: tan ('as/so', clipped from tanto before an adjective or adverb) pairs with unaccented como ('as'): Es tan bueno como el otro ('It is as good as the other')."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "better / the best",
            "german": "mejor / el mejor"
          },
          {
            "id": "p2",
            "english": "worse / the worst",
            "german": "peor / el peor"
          },
          {
            "id": "p3",
            "english": "my best friend",
            "german": "mi mejor amigo"
          },
          {
            "id": "p4",
            "english": "as good as",
            "german": "tan bueno como"
          },
          {
            "id": "p5",
            "english": "as important as",
            "german": "tan importante como"
          }
        ],
        "target_answer": "mejor / el mejor, peor / el peor, mi mejor amigo, tan bueno como, tan importante como",
        "meaning": "better / the best, worse / the worst, my best friend, as good as, as important as",
        "explanation": "mejor and peor serve as both comparative ('better/worse') and superlative ('the best/the worst').",
        "id": "es2102_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'He is my best friend'?",
        "options": [
          "Es mi mejor amigo",
          "*Es mi más bueno amigo",
          "*Es mi mejor que amigo"
        ],
        "target_answer": "Es mi mejor amigo",
        "meaning": "He is my best friend",
        "explanation": "mejor steps before amigo to mean 'best': mi mejor amigo.",
        "id": "es2102_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'This wine is better than that one'",
        "target_answer": "Este vino es mejor que ese",
        "meaning": "This wine is better than that one",
        "word_bank": [
          "Este",
          "vino",
          "es",
          "mejor",
          "que",
          "ese",
          "bueno",
          "como",
          "esto"
        ],
        "explanation": "Este vino es mejor que ese.",
        "id": "es2102_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that the coffee is as good as the wine",
        "cues": [
          "The coffee is → El café es",
          "as good → tan bueno",
          "as the wine → como el vino"
        ],
        "idea_parts": [
          "The coffee is → El café es",
          "as good as → tan bueno como",
          "the wine → el vino"
        ],
        "target_answer": "El café es tan bueno como el vino",
        "meaning": "The coffee is as good as the wine",
        "word_bank": [
          "El",
          "café",
          "es",
          "tan",
          "bueno",
          "como",
          "el",
          "vino",
          "más",
          "que",
          "buena"
        ],
        "explanation": "El café es tan bueno como el vino.",
        "id": "es2102_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Es el mejor restaurante de la ciudad",
        "replays": 2,
        "target_answer": "Es el mejor restaurante de la ciudad",
        "meaning": "It is the best restaurant in the city",
        "cues": [
          "It is the best: Es el mejor",
          "restaurant: restaurante",
          "in (of) the city: de la ciudad"
        ],
        "explanation": "Es el mejor restaurante de la ciudad — de means 'in' after a superlative!",
        "affirmation": "Superlative + de mastered!",
        "id": "es2102_e5"
      }
    ],
    "summary": {
      "outcome": "Deploy tan... como for equality and mejor/peor for both 'better/worse' and 'best/worst'.",
      "use_example": {
        "german": "Es mi mejor amigo y este es el mejor restaurante de la ciudad.",
        "english": "He is my best friend and this is the best restaurant in the city."
      },
      "takeaway": "After a superlative ('the best restaurant IN the city'), Spanish always uses de ('of the city').",
      "curiosity_teaser": "Up next ([22] Double Object Pronouns): enter Phase 4 and stack indirect + direct pronouns (me lo, te lo, se lo)!"
    },
    "twist": {
      "prompt": "Assemble: 'He is my best friend'",
      "target_answer": "Es mi mejor amigo",
      "word_bank": [
        "Es",
        "mi",
        "mejor",
        "amigo",
        "más",
        "bueno",
        "que"
      ],
      "explanation": "Es mi mejor amigo."
    }
  },
  {
    "id": 22,
    "slug": "double-object-pronouns",
    "title": "Double Object Pronouns",
    "subtitle": "me lo da, te lo digo — pronouns stacking before the verb, and le lo becoming se lo",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "me",
      "te",
      "nos",
      "le",
      "se",
      "lo",
      "la",
      "dar",
      "decir",
      "explicar"
    ],
    "table_word_ids": [
      "me",
      "te",
      "nos",
      "le",
      "se",
      "lo"
    ],
    "hook": {
      "title": "People Before Things: The Pronoun Highway",
      "content": "In Topic 1 you learned that 'it' (lo / la) walks in front of the verb: Lo quiero ('I want it'). What happens when you have BOTH a person ('to me / to you / to us': me, te, nos) AND a thing ('it': lo, la) — like 'He gives it to me' or 'I tell it to you'? Both pronouns walk in front of the verb, and the rule is universal: **People come BEFORE Things**! Me lo da ('To-me it he-gives'), Te lo digo ('To-you it I-say'), Nos lo explica ('To-us it he-explains')!"
    },
    "pattern": {
      "title": "The Famous 'Se Lo' Rule: Why *Le Lo Becomes 'Se Lo'!",
      "content": "What if you want to say 'I give it to him / to her / to usted'? The indirect pronoun for 'to him / to her / to usted' is le, and 'it' is lo. Try saying *le lo out loud — two L-syllables in a row feel like a tongue-twister! In Old Spanish, *le lo evolved into ge lo and then softened into **se lo**: Se lo doy ('To-him/her/usted it I-give'), Se lo digo ('I tell it to him/her/usted')!",
      "linguist_note": "Latin illī illum evolved in Old Castilian to gelo (/ʒelo/), which later merged phonetically with reflexive se into modern se lo.",
      "trap_note": "Never write *le lo, *le la, *les lo, or *les la! The moment le or les stands before lo/la/los/las, it puts on the disguise 'se'!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "to me + it (masculine)",
            "german": "me lo"
          },
          {
            "id": "p2",
            "english": "to you + it (masculine)",
            "german": "te lo"
          },
          {
            "id": "p3",
            "english": "to us + it (masculine)",
            "german": "nos lo"
          },
          {
            "id": "p4",
            "english": "to him/her/usted/them + it (never *le lo!)",
            "german": "se lo"
          },
          {
            "id": "p5",
            "english": "I give (1st sg. of dar)",
            "german": "doy"
          },
          {
            "id": "p6",
            "english": "I say / I tell (1st sg. of decir)",
            "german": "digo"
          }
        ],
        "target_answer": "me lo, te lo, nos lo, se lo, doy, digo",
        "meaning": "to me + it (masculine), to you + it (masculine), to us + it (masculine), to him/her/usted/them + it (never *le lo!), I give (1st sg. of dar), I say / I tell (1st sg. of decir)",
        "explanation": "Indirect person (me, te, nos, se) always precedes direct object (lo, la, los, las).",
        "id": "es22_e1"
      },
      {
        "type": "reverse_cognate",
        "prompt": "Spanish decir ('to say / tell', yo digo 'I say') comes from Latin dīcere. Which English word for 'speaking aloud so someone can write it down' comes from the exact same root?",
        "target_answer": "dictate",
        "meaning": "to dictate (or diction / predict) is literally the Latin root of decir ('to say')!",
        "explanation": "Latin dīcere / dictāre gave Spanish decir (digo) and English dictate, diction, dictionary, predict.",
        "id": "es22_e2"
      },
      {
        "type": "shift_select",
        "prompt": "Why does Spanish say 'Se lo doy' instead of *Le lo doy for 'I give it to him/her'?",
        "options": [
          "Whenever le or les is followed by lo/la/los/las, Spanish changes le/les to se to avoid two L-pronouns in a row",
          "Because se means 'I'",
          "Because doy is reflexive"
        ],
        "target_answer": "Whenever le or les is followed by lo/la/los/las, Spanish changes le/les to se to avoid two L-pronouns in a row",
        "meaning": "I give it to him / her / usted",
        "explanation": "Two L-pronouns in a row (*le lo, *les la) are forbidden in Spanish — the first one always transforms into se!",
        "id": "es22_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I tell it to you'",
        "target_answer": "Te lo digo",
        "meaning": "I tell it to you",
        "word_bank": [
          "Te",
          "lo",
          "digo",
          "Lo",
          "te",
          "le"
        ],
        "explanation": "Te ('to you', person first) + lo ('it', thing second) + digo ('I tell').",
        "id": "es22_e4"
      },
      {
        "type": "literal_gloss",
        "prompt": "Which English word-for-word blueprint mirrors Spanish 'Se lo doy hoy'?",
        "german": "Se lo doy hoy",
        "natural": "I give it to him/her today",
        "options": [
          "I give it to him/her today",
          "To-him/her it I-give today",
          "Himself it gives today",
          "It to-him I give today"
        ],
        "target_answer": "To-him/her it I-give today",
        "meaning": "I give it to him/her today (literal Spanish blueprint: To-him/her it I-give today)",
        "explanation": "Se ('To-him/her/usted') + lo ('it') + doy ('I-give') + hoy ('today').",
        "id": "es22_e5"
      }
    ],
    "summary": {
      "outcome": "Stack indirect + direct object pronouns (me lo, te lo, nos lo) and apply the se lo rule.",
      "use_example": {
        "german": "Te lo digo hoy y se lo doy mañana.",
        "english": "I tell it to you today and I give it to him/her tomorrow."
      },
      "takeaway": "People before things (me lo, te lo, nos lo) — and whenever le/les meets lo/la, it becomes se lo / se la!",
      "curiosity_teaser": "Up next ([2201] The Pronoun Highway Order): drill me lo, te la, and nos lo across dar, decir, and explicar."
    },
    "twist": {
      "prompt": "Assemble: 'I give it to him today'",
      "target_answer": "Se lo doy hoy",
      "word_bank": [
        "Se",
        "lo",
        "doy",
        "hoy",
        "Le",
        "me",
        "digo"
      ],
      "explanation": "Se lo doy hoy (never *Le lo doy!)."
    },
    "foreshadow": {
      "line": "Next in Topic 23: how to choose between lo/la and le when only ONE object pronoun is on stage — plus Spanish's famous 'personal a'!",
      "resolvedIn": 23
    },
    "payoff": {
      "ofLesson": 21,
      "text": "Having mastered single pronouns in Phase 1 and comparisons in Phase 3, you now control two-pronoun clusters in Phase 4."
    }
  },
  {
    "id": 2201,
    "slug": "pronoun-highway-order",
    "title": "The Pronoun Highway Order",
    "subtitle": "People before things: Indirect object (me, te, nos) precedes direct object (lo, la): me lo da, te lo digo",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "me",
      "te",
      "nos",
      "lo",
      "la",
      "dar",
      "decir",
      "comprar",
      "explicar",
      "verdad"
    ],
    "table_word_ids": [
      "me",
      "te",
      "nos",
      "lo",
      "la",
      "dar"
    ],
    "hook": {
      "title": "Person First, Thing Second, Verb Third",
      "content": "Whether the thing is masculine (lo — e.g., el libro, el café) or feminine (la — e.g., la verdad, la llave, la confirmación), the recipient person (me, te, nos) always takes the front seat: ¿Me lo das? ('Will you give it to me?'), Te la digo ('I tell it [the truth] to you')."
    },
    "pattern": {
      "title": "Where Does 'No' Go? Still at the Very Front!",
      "content": "When negating a double-pronoun sentence, no still stands at the very front of the train: No te lo digo ('I don't tell it to you')!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "he gives it to me",
            "german": "me lo da"
          },
          {
            "id": "p2",
            "english": "I tell it to you",
            "german": "te lo digo"
          },
          {
            "id": "p3",
            "english": "I give it (feminine, e.g. la llave) to you",
            "german": "te la doy"
          },
          {
            "id": "p4",
            "english": "he explains it to us",
            "german": "nos lo explica"
          },
          {
            "id": "p5",
            "english": "I don't tell it to you",
            "german": "no te lo digo"
          }
        ],
        "target_answer": "me lo da, te lo digo, te la doy, nos lo explica, no te lo digo",
        "meaning": "he gives it to me, I tell it to you, I give it (feminine, e.g. la llave) to you, he explains it to us, I don't tell it to you",
        "explanation": "Order: [no] + [person: me/te/nos/se] + [thing: lo/la] + [verb].",
        "id": "es2201_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Referring to 'la llave' (feminine), how do you say 'I give it to you'?",
        "options": [
          "Te la doy",
          "*La te doy",
          "Te lo doy"
        ],
        "target_answer": "Te la doy",
        "meaning": "I give it (the key) to you",
        "explanation": "te ('to you') comes first, and la ('it', feminine for la llave) comes second: Te la doy.",
        "id": "es2201_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'He explains it to us'",
        "target_answer": "Nos lo explica",
        "meaning": "He explains it to us",
        "word_bank": [
          "Nos",
          "lo",
          "explica",
          "Lo",
          "nos",
          "me"
        ],
        "explanation": "Nos ('to us') + lo ('it') + explica ('he/she explains').",
        "id": "es2201_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say: 'He gives it (masculine) to me'",
        "cues": [
          "To me (person first) → Me",
          "it (masculine thing second) → lo",
          "he gives (3rd sg. of dar) → da"
        ],
        "idea_parts": [
          "To me → Me",
          "it → lo",
          "he gives → da"
        ],
        "target_answer": "Me lo da",
        "meaning": "He gives it to me",
        "word_bank": [
          "Me",
          "lo",
          "da",
          "Lo",
          "te",
          "doy"
        ],
        "explanation": "Me lo da — person before thing before verb.",
        "id": "es2201_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Te digo la verdad",
        "replays": 2,
        "target_answer": "Te digo la verdad",
        "meaning": "I tell you the truth",
        "cues": [
          "To you: Te",
          "I tell: digo",
          "the truth: la verdad"
        ],
        "explanation": "Te digo la verdad — and if you replace la verdad with 'it', it becomes Te la digo!",
        "affirmation": "Double pronoun order locked in!",
        "id": "es2201_e5"
      }
    ],
    "summary": {
      "outcome": "Order indirect (me, te, nos) before direct (lo, la) pronouns ahead of conjugated verbs.",
      "use_example": {
        "german": "Te digo la verdad — sí, te la digo ahora.",
        "english": "I tell you the truth — yes, I tell it to you now."
      },
      "takeaway": "Always keep the sequence: [no] + [indirect person] + [direct thing] + [verb].",
      "curiosity_teaser": "Up next ([2202] The se lo Softening Rule): master se lo and se la with both conjugated verbs and infinitives."
    },
    "twist": {
      "prompt": "Assemble: 'I do not tell it to you'",
      "target_answer": "No te lo digo",
      "word_bank": [
        "No",
        "te",
        "lo",
        "digo",
        "Te",
        "no",
        "la"
      ],
      "explanation": "No te lo digo."
    }
  },
  {
    "id": 2202,
    "slug": "se-lo-softening-rule",
    "title": "The se lo Softening Rule",
    "subtitle": "Why *le lo sounds like a tongue-twister and becomes se lo (Se lo doy 'I give it to him/her')",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "se",
      "le",
      "lo",
      "la",
      "dar",
      "decir",
      "explicar",
      "confirmar",
      "voy",
      "querer"
    ],
    "table_word_ids": [
      "se",
      "le",
      "lo",
      "la",
      "dar",
      "decir"
    ],
    "hook": {
      "title": "Se Lo Works for Him, Her, Usted, AND Them!",
      "content": "Because both singular le ('to him / to her / to usted') and plural les ('to them / to you all') turn into se before lo/la/los/las, Se lo doy can mean 'I give it to him', 'I give it to her', 'I give it to usted', or 'I give it to them'!"
    },
    "pattern": {
      "title": "Hooking Double Pronouns onto an Infinitive: Voy a Dárselo",
      "content": "Remember from Sprig 1203 that pronouns can either walk before the first verb OR hook onto the tail of the infinitive? That works with se lo too: Se lo voy a decir OR Voy a decírselo ('I am going to tell it to him/her')!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I give it (m.) to him / her / usted / them",
            "german": "se lo doy"
          },
          {
            "id": "p2",
            "english": "I give it (f., e.g. la llave) to him / her",
            "german": "se la doy"
          },
          {
            "id": "p3",
            "english": "I tell it to him / her / usted",
            "german": "se lo digo"
          },
          {
            "id": "p4",
            "english": "he explains it to them",
            "german": "se lo explica"
          },
          {
            "id": "p5",
            "english": "I am going to tell it to him/her (left-walk)",
            "german": "se lo voy a decir"
          }
        ],
        "target_answer": "se lo doy, se la doy, se lo digo, se lo explica, se lo voy a decir",
        "meaning": "I give it (m.) to him / her / usted / them, I give it (f., e.g. la llave) to him / her, I tell it to him / her / usted, he explains it to them, I am going to tell it to him/her (left-walk)",
        "explanation": "le/les + lo/la → se lo / se la.",
        "id": "es2202_e1"
      },
      {
        "type": "morpheme_tiles",
        "prompt": "Transform 'le + lo + digo' into real Spanish by applying the 'se lo' softening rule:",
        "tile_options": [
          "Se",
          "lo",
          "digo",
          "Le"
        ],
        "target_answer": "Selodigo",
        "meaning": "Se lo digo (I tell it to him/her)",
        "explanation": "le changes to se before lo: Se lo digo.",
        "id": "es2202_e2"
      },
      {
        "type": "shift_select",
        "prompt": "You have 'la confirmación' (feminine) and want to say 'I am going to give it to him'. Which is correct?",
        "options": [
          "Se la voy a dar",
          "*Le la voy a dar",
          "Se lo voy a dar"
        ],
        "target_answer": "Se la voy a dar",
        "meaning": "I am going to give it (the confirmation) to him",
        "explanation": "le becomes se, and la confirmación becomes feminine la: Se la voy a dar.",
        "id": "es2202_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I explain it to him'",
        "target_answer": "Se lo explico",
        "meaning": "I explain it to him / her",
        "word_bank": [
          "Se",
          "lo",
          "explico",
          "Le",
          "me",
          "la"
        ],
        "explanation": "Se + lo + explico.",
        "id": "es2202_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Se lo voy a decir hoy",
        "replays": 2,
        "target_answer": "Se lo voy a decir hoy",
        "meaning": "I am going to tell it to him/her today",
        "cues": [
          "To him/her + it: Se lo",
          "I am going to tell: voy a decir",
          "today: hoy"
        ],
        "explanation": "Se lo voy a decir hoy.",
        "affirmation": "Se lo in the near future mastered!",
        "id": "es2202_e5"
      }
    ],
    "summary": {
      "outcome": "Transform le/les into se before lo/la/los/las in present and near-future sentences.",
      "use_example": {
        "german": "Tengo la confirmación y se la voy a dar hoy.",
        "english": "I have the confirmation and I am going to give it to him/her today."
      },
      "takeaway": "Whenever le or les meets lo, la, los, or las, it transforms into se.",
      "curiosity_teaser": "Up next ([23] Direct vs Indirect Objects: lo/la vs le): master the Personal 'a', redundant le, and saber vs conocer!"
    },
    "twist": {
      "prompt": "Assemble: 'I am going to explain it to her'",
      "target_answer": "Se lo voy a explicar",
      "word_bank": [
        "Se",
        "lo",
        "voy",
        "a",
        "explicar",
        "Le",
        "me",
        "de"
      ],
      "explanation": "Se lo voy a explicar."
    }
  },
  {
    "id": 23,
    "slug": "direct-vs-indirect-lo-la-vs-le",
    "title": "Direct vs Indirect Objects: lo/la vs le",
    "subtitle": "lo/la (accusative) vs le/les (dative) — clarifying target and recipient",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "lo",
      "la",
      "le",
      "dar",
      "decir",
      "ver",
      "invitar",
      "conocer",
      "a",
      "amigo"
    ],
    "table_word_ids": [
      "lo",
      "la",
      "le",
      "dar",
      "decir",
      "ver"
    ],
    "hook": {
      "title": "Direct Target (lo / la) vs Recipient Person (le / les)",
      "content": "When a verb acts directly on an object ('I see it, I buy it, I invite her'), that direct target is lo (masculine) or la (feminine): Lo veo, La invito. When a verb sends or communicates something TO a person ('I speak to him/her, I give [something] to him/her, I tell [something] to him/her'), that recipient takes the gender-neutral indirect pronoun **le** (plural **les**): Le hablo ('I speak to him/her'), Le doy el libro ('I give the book to him/her')!"
    },
    "pattern": {
      "title": "Spanish's Famous 'Personal a' Before Human Direct Objects!",
      "content": "Here is a signature Spanish feature that neither French nor English has: whenever the direct object of your verb is a SPECIFIC PERSON (or beloved pet!), Spanish places the preposition **a** right before them — called the **Personal 'a'**: Veo el hotel ('I see the hotel' — thing, no a) vs **Veo a María** ('I see María' — person, takes a!), **Conozco a tu hermano** ('I know your brother'), **Quiero invitar a mi amigo**!",
      "linguist_note": "Differential Object Marking (the 'personal a', from Latin ad) prevents ambiguity between subject and human object when Spanish word order varies.",
      "trap_note": "One notable exception: tener ('to have') normally does NOT use the personal 'a' when stating family members you have: Tengo dos hermanos ('I have two brothers')."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "it / him (direct object, m.)",
            "german": "lo"
          },
          {
            "id": "p2",
            "english": "it / her (direct object, f.)",
            "german": "la"
          },
          {
            "id": "p3",
            "english": "to him / to her / to usted (indirect recipient)",
            "german": "le"
          },
          {
            "id": "p4",
            "english": "I see the hotel (thing: no 'a')",
            "german": "veo el hotel"
          },
          {
            "id": "p5",
            "english": "I see María (person: personal 'a'!)",
            "german": "veo a María"
          },
          {
            "id": "p6",
            "english": "I know your brother (person: personal 'a'!)",
            "german": "conozco a tu hermano"
          }
        ],
        "target_answer": "lo, la, le, veo el hotel, veo a María, conozco a tu hermano",
        "meaning": "it / him (direct object, m.), it / her (direct object, f.), to him / to her / to usted (indirect recipient), I see the hotel (thing: no 'a'), I see María (person: personal 'a'!), I know your brother (person: personal 'a'!)",
        "explanation": "lo/la = direct target; le/les = 'to him/her/them'; specific human direct objects take the personal 'a'.",
        "id": "es23_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Compare 'I visit Madrid' and 'I visit my mother'. Why does only the second one require 'a'?",
        "options": [
          "Visito Madrid (place = no 'a') vs Visito a mi madre (specific person = requires the personal 'a'!)",
          "Because madre is feminine",
          "Because Madrid starts with M"
        ],
        "target_answer": "Visito Madrid (place = no 'a') vs Visito a mi madre (specific person = requires the personal 'a'!)",
        "meaning": "I visit Madrid vs I visit my mother",
        "explanation": "Specific human direct objects receive the personal 'a' in Spanish to mark them as sentient people rather than inanimate objects!",
        "id": "es23_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I want to invite my friend (male)'",
        "target_answer": "Quiero invitar a mi amigo",
        "meaning": "I want to invite my friend",
        "word_bank": [
          "Quiero",
          "invitar",
          "a",
          "mi",
          "amigo",
          "para",
          "por",
          "el"
        ],
        "explanation": "Quiero invitar + a (personal 'a'!) + mi amigo.",
        "id": "es23_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that you give the book to María using redundant 'le' ('Le doy el libro a María')",
        "cues": [
          "To her (indirect pronoun before verb) → Le",
          "I give the book → doy el libro",
          "to María → a María"
        ],
        "idea_parts": [
          "To her I give → Le doy",
          "the book → el libro",
          "to María → a María"
        ],
        "target_answer": "Le doy el libro a María",
        "meaning": "I give the book to María",
        "word_bank": [
          "Le",
          "doy",
          "el",
          "libro",
          "a",
          "María",
          "Lo",
          "La",
          "para"
        ],
        "explanation": "Le doy el libro a María — Spanish loves announcing the recipient twice: with le before the verb AND a María after it!",
        "diagnosis": {
          "slip": "omitted Le before doy",
          "cue": "In natural Spanish, even when 'a María' is stated, you still include Le before the verb: Le doy el libro a María."
        },
        "id": "es23_e4"
      },
      {
        "type": "literal_gloss",
        "prompt": "Which English word-for-word blueprint mirrors Spanish 'Le doy el libro a María'?",
        "german": "Le doy el libro a María",
        "natural": "I give the book to María",
        "options": [
          "I give the book to María",
          "To-her I-give the book to María",
          "It I give the book María",
          "She gives the book to María"
        ],
        "target_answer": "To-her I-give the book to María",
        "meaning": "I give the book to María (literal Spanish blueprint: To-her I-give the book to María)",
        "explanation": "Spanish doubles the dative recipient: Le ('To-her') before the verb and a María ('to María') after.",
        "id": "es23_e5"
      }
    ],
    "summary": {
      "outcome": "Distinguish direct lo/la from indirect le/les, use the personal 'a' before human direct objects, and double le with a + person.",
      "use_example": {
        "german": "Veo a María y le doy el libro.",
        "english": "I see María and I give her the book."
      },
      "takeaway": "Specific people as direct objects wear the personal 'a' (Veo a mi amigo) — and indirect recipients take le/les.",
      "curiosity_teaser": "Up next ([2301] The Personal 'a'): master when to include and when to omit the personal 'a'."
    },
    "twist": {
      "prompt": "Assemble: 'I know your father'",
      "target_answer": "Conozco a tu padre",
      "word_bank": [
        "Conozco",
        "a",
        "tu",
        "padre",
        "el",
        "por",
        "tú"
      ],
      "explanation": "Conozco + a (personal 'a') + tu padre."
    },
    "foreshadow": {
      "line": "Next in Topic 24: what happens when the subject and object are the SAME person — reflexive verbs (me levanto, me acuesto)!",
      "resolvedIn": 24
    },
    "payoff": {
      "ofLesson": 22,
      "text": "Now you see why 'Le doy el libro a María' becomes 'Se lo doy' when el libro turns into lo!"
    }
  },
  {
    "id": 2301,
    "slug": "the-personal-a",
    "title": "The Personal 'a'",
    "subtitle": "Placing 'a' before specific human direct objects: veo a María, conozco a tu hermano, invito a mi amigo",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "a",
      "ver",
      "conocer",
      "invitar",
      "visitar",
      "hermano",
      "amigo",
      "padre",
      "madre",
      "hotel"
    ],
    "table_word_ids": [
      "a",
      "ver",
      "conocer",
      "invitar",
      "visitar",
      "hermano"
    ],
    "hook": {
      "title": "Respecting People in Grammar",
      "content": "Think of the personal 'a' as a grammatical bow of respect Whenever a verb's direct action lands on a specific human being (ver 'to see', conocer 'to know', invitar 'to invite', visitar 'to visit', ayudar 'to help'), place **a** before the person! And remember: if the person is masculine singular with el (el profesor, el señor), **a + el** still contracts to **al**: Veo al señor ('I see the gentleman')!"
    },
    "pattern": {
      "title": "Thing vs Person Side by Side",
      "content": "• Thing/Place: Veo la casa, Visito Madrid, Conozco el hotel (zero 'a').\n• Person: Veo a mi madre, Visito a mis padres, Conozco al profesor (personal 'a')!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I see the house (thing)",
            "german": "veo la casa"
          },
          {
            "id": "p2",
            "english": "I see my mother (person)",
            "german": "veo a mi madre"
          },
          {
            "id": "p3",
            "english": "I visit Madrid (city)",
            "german": "visito Madrid"
          },
          {
            "id": "p4",
            "english": "I visit my parents (people)",
            "german": "visito a mis padres"
          },
          {
            "id": "p5",
            "english": "I know the gentleman (a + el)",
            "german": "conozco al señor"
          }
        ],
        "target_answer": "veo la casa, veo a mi madre, visito Madrid, visito a mis padres, conozco al señor",
        "meaning": "I see the house (thing), I see my mother (person), I visit Madrid (city), I visit my parents (people), I know the gentleman (a + el)",
        "explanation": "Things and cities take zero 'a'; specific people take the personal 'a' (or al = a + el).",
        "id": "es2301_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'I am going to visit my brother'?",
        "options": [
          "Voy a visitar a mi hermano",
          "*Voy a visitar mi hermano",
          "*Voy visitar a mi hermano"
        ],
        "target_answer": "Voy a visitar a mi hermano",
        "meaning": "I am going to visit my brother",
        "explanation": "The first 'a' belongs to voy a + infinitive; the second 'a' is the personal 'a' before mi hermano!",
        "id": "es2301_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I see my friends here'",
        "target_answer": "Veo a mis amigos aquí",
        "meaning": "I see my friends here",
        "word_bank": [
          "Veo",
          "a",
          "mis",
          "amigos",
          "aquí",
          "el",
          "los",
          "por"
        ],
        "explanation": "Veo + a (personal 'a') + mis amigos + aquí.",
        "id": "es2301_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that you want to invite your mother",
        "cues": [
          "I want to invite → Quiero invitar",
          "personal 'a' + my mother → a mi madre"
        ],
        "idea_parts": [
          "I want to invite → Quiero invitar",
          "my mother (with personal 'a') → a mi madre"
        ],
        "target_answer": "Quiero invitar a mi madre",
        "meaning": "I want to invite my mother",
        "word_bank": [
          "Quiero",
          "invitar",
          "a",
          "mi",
          "madre",
          "la",
          "para",
          "padre"
        ],
        "explanation": "Quiero invitar a mi madre.",
        "id": "es2301_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Conozco a tu hermano",
        "replays": 2,
        "target_answer": "Conozco a tu hermano",
        "meaning": "I know your brother",
        "cues": [
          "I know (conocer): Conozco",
          "personal 'a': a",
          "your brother: tu hermano"
        ],
        "explanation": "Conozco a tu hermano.",
        "affirmation": "Personal 'a' with conocer locked in!",
        "id": "es2301_e5"
      }
    ],
    "summary": {
      "outcome": "Place the personal 'a' (and contraction al) before specific human direct objects.",
      "use_example": {
        "german": "Visito Madrid y voy a visitar a mis padres.",
        "english": "I visit Madrid and I am going to visit my parents."
      },
      "takeaway": "If the direct object is a specific person, put 'a' in front of them.",
      "curiosity_teaser": "Up next ([2302] Dative Pronoun Redundancy): see why Spanish loves doubling le/les with 'a + person'."
    },
    "twist": {
      "prompt": "Assemble: 'I see the gentleman (al señor)'",
      "target_answer": "Veo al señor",
      "word_bank": [
        "Veo",
        "al",
        "señor",
        "el",
        "la",
        "por"
      ],
      "explanation": "a + el señor contracts to al señor: Veo al señor."
    }
  },
  {
    "id": 2302,
    "slug": "dative-pronoun-redundancy",
    "title": "Dative Pronoun Redundancy",
    "subtitle": "Why Spanish loves saying 'to whom' twice: Le doy el libro a María, A mí me gusta",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "le",
      "me",
      "te",
      "nos",
      "dar",
      "decir",
      "explicar",
      "hablar",
      "a",
      "amigo"
    ],
    "table_word_ids": [
      "le",
      "me",
      "te",
      "nos",
      "dar",
      "decir"
    ],
    "hook": {
      "title": "Why Spanish Announces the Recipient Twice",
      "content": "In English, you say 'I give the book to Carlos' (mentioning Carlos once). In Spanish, speakers almost ALWAYS include the indirect object pronoun le (or plural les) before the verb EVEN WHEN 'a Carlos' is right there in the sentence: **Le** doy el libro **a Carlos**, **Le** digo la verdad **a mi madre**, **Le** hablo **a mi amigo**! Think of le as the verb's built-in radar locking onto the recipient before the name arrives!"
    },
    "pattern": {
      "title": "Clarifying 'Le' with 'a él / a ella / a usted'",
      "content": "Because le can mean 'to him', 'to her', or 'to usted', adding a él, a ella, or a usted makes it 100% clear who receives the action."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I give the book to María",
            "german": "le doy el libro a María"
          },
          {
            "id": "p2",
            "english": "I tell the truth to my friend",
            "german": "le digo la verdad a mi amigo"
          },
          {
            "id": "p3",
            "english": "he explains the problem to us",
            "german": "nos explica el problema"
          },
          {
            "id": "p4",
            "english": "I speak to usted",
            "german": "le hablo a usted"
          },
          {
            "id": "p5",
            "english": "to them / to you all (plural dative)",
            "german": "les"
          }
        ],
        "target_answer": "le doy el libro a María, le digo la verdad a mi amigo, nos explica el problema, le hablo a usted, les",
        "meaning": "I give the book to María, I tell the truth to my friend, he explains the problem to us, I speak to usted, to them / to you all (plural dative)",
        "explanation": "le (singular) and les (plural) preview the recipient before the verb.",
        "id": "es2302_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How does a native speaker say 'I tell the truth to my father'?",
        "options": [
          "Le digo la verdad a mi padre",
          "Digo la verdad para mi padre",
          "Lo digo la verdad a mi padre"
        ],
        "target_answer": "Le digo la verdad a mi padre",
        "meaning": "I tell the truth to my father",
        "explanation": "Le previews 'a mi padre' before the verb digo.",
        "id": "es2302_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I give the key to my mother'",
        "target_answer": "Le doy la llave a mi madre",
        "meaning": "I give the key to my mother",
        "word_bank": [
          "Le",
          "doy",
          "la",
          "llave",
          "a",
          "mi",
          "madre",
          "La",
          "Lo",
          "para"
        ],
        "explanation": "Le (previewing the recipient) + doy + la llave + a mi madre.",
        "id": "es2302_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that you explain the situation to your friend",
        "cues": [
          "To him/her (preview) → Le",
          "I explain the situation → explico la situación",
          "to my friend → a mi amigo"
        ],
        "idea_parts": [
          "I explain to him → Le explico",
          "the situation → la situación",
          "to my friend → a mi amigo"
        ],
        "target_answer": "Le explico la situación a mi amigo",
        "meaning": "I explain the situation to my friend",
        "word_bank": [
          "Le",
          "explico",
          "la",
          "situación",
          "a",
          "mi",
          "amigo",
          "Lo",
          "para",
          "por"
        ],
        "explanation": "Le explico la situación a mi amigo.",
        "id": "es2302_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Le digo la verdad a mi amigo",
        "replays": 2,
        "target_answer": "Le digo la verdad a mi amigo",
        "meaning": "I tell the truth to my friend",
        "cues": [
          "To him + I tell: Le digo",
          "the truth: la verdad",
          "to my friend: a mi amigo"
        ],
        "explanation": "Le digo la verdad a mi amigo.",
        "affirmation": "Redundant dative le mastered!",
        "id": "es2302_e5"
      }
    ],
    "summary": {
      "outcome": "Use redundant le/les before the verb whenever a dative recipient ('a + person') is present.",
      "use_example": {
        "german": "Le doy la llave a mi madre y le explico la situación a mi amigo.",
        "english": "I give the key to my mother and I explain the situation to my friend."
      },
      "takeaway": "In Spanish, 'a [person]' (recipient) and pre-verbal le/les work as a team rather than an either/or choice.",
      "curiosity_teaser": "Up next ([2303] Saber vs Conocer): master Spanish's two verbs for 'to know' — facts/skills (sé) vs people/places (conozco)!"
    },
    "twist": {
      "prompt": "Assemble: 'He gives me the book'",
      "target_answer": "Me da el libro",
      "word_bank": [
        "Me",
        "da",
        "el",
        "libro",
        "Le",
        "doy",
        "la"
      ],
      "explanation": "Me da el libro ('He gives me the book')."
    }
  },
  {
    "id": 2303,
    "slug": "saber-vs-conocer",
    "title": "Saber vs Conocer",
    "subtitle": "Knowing facts and skills (sé nadar, sé dónde está) vs knowing people and places (conozco Madrid, conozco a María)",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "saber",
      "conocer",
      "dónde",
      "qué",
      "hablar",
      "hermano",
      "amigo",
      "ciudad",
      "a"
    ],
    "table_word_ids": [
      "saber",
      "conocer",
      "dónde",
      "qué",
      "hablar",
      "hermano"
    ],
    "hook": {
      "title": "Two Ways of 'Knowing' That English Blurs Together",
      "content": "In English, 'know' covers two completely different mental experiences: knowing a piece of information or a skill ('I know where it is, I know how to speak Spanish') vs being personally acquainted with a person or place ('I know María, I know Madrid'). Spanish gives each its own verb: **saber** (yo **sé** 'I know', tú sabes) for facts, information, and skills; and **conocer** (yo **conozco** 'I know/am familiar with', tú conoces) for people, places, and things you've met!",
      "footnotes": [
        {
          "marker": "1",
          "title": "What Happens When 'Saber' and 'Conocer' Enter the Preterite?",
          "content": "In the preterite (dot in time), conocí a María means 'I met María for the first time', and supe la verdad means 'I found out the truth'!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Two Golden Shortcuts: 'Sé + Infinitive' (No *Cómo!) & 'Conozco a + Person'",
      "content": "1) To say 'I know HOW to speak Spanish', Spanish uses **sé + bare infinitive** (Sé hablar español) — never insert *cómo!\n2) When conocer is followed by a person, always include the personal 'a' (Conozco a María); when followed by a city, no 'a' (Conozco Madrid)!",
      "trap_note": "Notice the tilde on yo sé ('I know'): with an accent, sé means 'I know'; without an accent, se is the reflexive/indirect pronoun!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "to know (facts, information, how to do something)",
            "german": "saber"
          },
          {
            "id": "p2",
            "english": "I know (fact / skill: 1st sg. of saber)",
            "german": "sé"
          },
          {
            "id": "p3",
            "english": "to know / be familiar with (people, places)",
            "german": "conocer"
          },
          {
            "id": "p4",
            "english": "I know / am acquainted with (1st sg. of conocer)",
            "german": "conozco"
          },
          {
            "id": "p5",
            "english": "I know where it is (fact/clause)",
            "german": "sé dónde está"
          },
          {
            "id": "p6",
            "english": "I know Madrid (place)",
            "german": "conozco Madrid"
          }
        ],
        "target_answer": "saber, sé, conocer, conozco, sé dónde está, conozco Madrid",
        "meaning": "to know (facts, information, how to do something), I know (fact / skill: 1st sg. of saber), to know / be familiar with (people, places), I know / am acquainted with (1st sg. of conocer), I know where it is (fact/clause), I know Madrid (place)",
        "explanation": "saber (sé) = facts, clauses, and skills (+ infinitive); conocer (conozco) = people (with 'a') and places.",
        "id": "es2303_e1"
      },
      {
        "type": "reverse_cognate",
        "prompt": "Spanish conocer ('to be familiar/acquainted with', from Latin cognōscere) shares its root with which formal English adjective meaning 'aware or having knowledge of'?",
        "target_answer": "cognizant",
        "meaning": "cognizant and recognize come from the exact same Latin root as conocer!",
        "explanation": "Latin cognōscere gave Spanish conocer and English cognizant, recognize, reconnaissance.",
        "id": "es2303_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'I know how to speak Spanish' in natural Spanish?",
        "options": [
          "Sé hablar español",
          "*Sé cómo hablar español",
          "*Conozco hablar español"
        ],
        "target_answer": "Sé hablar español",
        "meaning": "I know how to speak Spanish",
        "explanation": "saber + bare infinitive already means 'to know how to [verb]' — never add *cómo!",
        "id": "es2303_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I know Madrid and I know your brother'",
        "target_answer": "Conozco Madrid y conozco a tu hermano",
        "meaning": "I know Madrid and I know your brother",
        "word_bank": [
          "Conozco",
          "Madrid",
          "y",
          "conozco",
          "a",
          "tu",
          "hermano",
          "Sé",
          "el",
          "tú"
        ],
        "explanation": "Conozco Madrid (city = no 'a') y conozco a tu hermano (person = personal 'a'!).",
        "id": "es2303_e4"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that you don't know where the station is",
        "cues": [
          "I don't know (fact/question clause → saber) → No sé",
          "where is (location) → dónde está",
          "the station → la estación"
        ],
        "idea_parts": [
          "I don't know → No sé",
          "where the station is → dónde está la estación"
        ],
        "target_answer": "No sé dónde está la estación",
        "meaning": "I don't know where the station is",
        "word_bank": [
          "No",
          "sé",
          "dónde",
          "está",
          "la",
          "estación",
          "conozco",
          "se",
          "es"
        ],
        "explanation": "No sé dónde está la estación — notice sé ('I know') wears an accent mark to distinguish it from se ('himself/herself')!",
        "diagnosis": {
          "slip": "used conozco before dónde",
          "cue": "Before a question word or clause (qué, dónde, por qué, que...), always use saber (No sé dónde está)."
        },
        "id": "es2303_e5"
      }
    ],
    "summary": {
      "outcome": "Distinguish saber (sé: facts, clauses, and skills + infinitive) from conocer (conozco: people and places).",
      "use_example": {
        "german": "Conozco Madrid, conozco a tu amigo y sé dónde está el restaurante.",
        "english": "I know Madrid, I know your friend, and I know where the restaurant is."
      },
      "takeaway": "Facts, clauses, and infinitives take saber (sé); people and places take conocer (conozco).",
      "curiosity_teaser": "Up next ([24] Reflexives & Daily Life): see how me, te, se, nos turn actions back on the speaker in daily life."
    },
    "twist": {
      "prompt": "Assemble: 'Do you know where it is?'",
      "target_answer": "Sabes dónde está",
      "word_bank": [
        "Sabes",
        "dónde",
        "está",
        "Conoces",
        "es",
        "Sé"
      ],
      "explanation": "¿Sabes dónde está? uses saber before a clause."
    }
  },
  {
    "id": 24,
    "slug": "reflexives-and-daily-life",
    "title": "Reflexives & Daily Life",
    "subtitle": "me llamo, levantarse, acostarse — reflexives as self-action and daily routine",
    "phase": 4,
    "shift_categories": [
      "pl_cl_fl_to_ll"
    ],
    "word_ids": [
      "levantarse",
      "acostarse",
      "llamar",
      "me_llamo",
      "me",
      "te",
      "se",
      "nos",
      "ocho",
      "siete"
    ],
    "table_word_ids": [
      "levantarse",
      "acostarse",
      "llamar",
      "me_llamo",
      "me",
      "te"
    ],
    "hook": {
      "title": "You Have Spoken Reflexive Spanish Since Day One!",
      "content": "Remember Me llamo Alex ('I call myself Alex') from your very first greeting branch? That is a reflexive verb! Whenever the dictionary form of a verb has **-se** hooked onto the end — like llamarse ('to call oneself'), levantarse ('to lift oneself / get up'), or acostarse ('to lay oneself down / go to bed') — the action reflects back onto the subject using **me** ('myself'), **te** ('yourself'), **se** ('himself/herself/usted/themselves'), and **nos** ('ourselves / each other')!"
    },
    "pattern": {
      "title": "Peeling Off '-se' and Putting It in Front",
      "content": "To conjugate levantarse ('to get up'): peel off -se, move it in front of the verb to match the person, and conjugate levantar normally: Yo **me levanto** ('I get up'), Tú **te levantas** ('You get up'), Él/Ella/Usted **se levanta**, Nosotros **nos levantamos**! And notice acostarse ('to go to bed'): it's an o→ue boot verb, so yo **me acuesto** ('I go to bed'), but nosotros **nos acostamos**!",
      "linguist_note": "Romance pronominal verbs cover true reflexives, reciprocals (nos vemos), and middle-voice changes of state (levantarse, dormirse).",
      "trap_note": "When a reflexive verb is an infinitive after quiero or voy a ('I want to get up' / 'I am going to get up'), remember to change -se to match the speaker: Quiero levantarme (or Me quiero levantar)!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "to get up (lit. lift oneself)",
            "german": "levantarse"
          },
          {
            "id": "p2",
            "english": "I get up",
            "german": "me levanto"
          },
          {
            "id": "p3",
            "english": "to go to bed (lit. lay oneself down, o→ue)",
            "german": "acostarse"
          },
          {
            "id": "p4",
            "english": "I go to bed",
            "german": "me acuesto"
          },
          {
            "id": "p5",
            "english": "my name is (lit. I call myself)",
            "german": "me llamo"
          },
          {
            "id": "p6",
            "english": "we see each other",
            "german": "nos vemos"
          }
        ],
        "target_answer": "levantarse, me levanto, acostarse, me acuesto, me llamo, nos vemos",
        "meaning": "to get up (lit. lift oneself), I get up, to go to bed (lit. lay oneself down, o→ue), I go to bed, my name is (lit. I call myself), we see each other",
        "explanation": "Reflexive pronouns (me, te, se, nos) walk in front of conjugated verbs or hook onto infinitives.",
        "id": "es24_e1"
      },
      {
        "type": "reverse_cognate",
        "prompt": "Spanish levantar ('to lift/raise', levantarse 'to get up from bed') comes from Latin levāre ('to make light / raise up'). Which English verb meaning 'to float or rise into the air' comes from the exact same root?",
        "target_answer": "levitate",
        "meaning": "when you 'me levanto' in the morning, you are literally 'levitating / elevating' yourself out of bed!",
        "explanation": "Latin levāre gave Spanish levantar (plus el levante 'where the sun rises') and English levitate and elevate.",
        "id": "es24_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'I get up at seven o'clock'?",
        "options": [
          "Me levanto a las siete",
          "*Levanto a las siete",
          "*Se levanto a las siete"
        ],
        "target_answer": "Me levanto a las siete",
        "meaning": "I get up at seven o'clock",
        "explanation": "Without me, levanto means 'I lift [something else]'; to get yourself up, you need Me levanto!",
        "id": "es24_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I get up at eight'",
        "target_answer": "Me levanto a las ocho",
        "meaning": "I get up at eight o'clock",
        "word_bank": [
          "Me",
          "levanto",
          "a",
          "las",
          "ocho",
          "Te",
          "se",
          "el"
        ],
        "explanation": "Me + levanto + a las ocho ('at eight o'clock').",
        "id": "es24_e4"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that we will see each other tomorrow ('We see each other tomorrow')",
        "cues": [
          "Each other / ourselves (1st pl.) → Nos",
          "we see (1st pl. of ver) → vemos",
          "tomorrow → mañana"
        ],
        "idea_parts": [
          "We see each other → Nos vemos",
          "tomorrow → mañana"
        ],
        "target_answer": "Nos vemos mañana",
        "meaning": "See you tomorrow (lit. We see each other tomorrow)",
        "word_bank": [
          "Nos",
          "vemos",
          "mañana",
          "Me",
          "Se",
          "ayer"
        ],
        "explanation": "¡Nos vemos mañana! — in plural, nos and se also express reciprocal 'each other'!",
        "diagnosis": {
          "slip": "used Me vemos",
          "cue": "For 'we see each other', pair 1st-person plural nos with vemos: Nos vemos mañana."
        },
        "id": "es24_e5"
      }
    ],
    "summary": {
      "outcome": "Conjugate reflexive verbs (levantarse, acostarse, llamarse) and use nos/se for reciprocal 'each other'.",
      "use_example": {
        "german": "Me levanto a las siete y nos vemos mañana.",
        "english": "I get up at seven and we'll see each other tomorrow."
      },
      "takeaway": "Without me/te/se/nos, you lift or lay someone else; with me/te/se/nos, you get up and go to bed yourself!",
      "curiosity_teaser": "Up next ([2401] Morning to Night Routine): chain reflexive verbs across a full day and hook pronouns onto infinitives."
    },
    "twist": {
      "prompt": "Assemble: 'What is your name? (How do you call yourself?)'",
      "target_answer": "Cómo te llamas",
      "word_bank": [
        "Cómo",
        "te",
        "llamas",
        "me",
        "se",
        "llamo"
      ],
      "explanation": "¿Cómo te llamas?"
    },
    "foreshadow": {
      "line": "Next in Topic 25: the famous inverted verb gustar ('me gusta el café' = 'the coffee pleases me')!",
      "resolvedIn": 25
    },
    "payoff": {
      "ofLesson": 23,
      "text": "The object pronouns me, te, nos from Topics 22–23 are the exact same pronouns used in reflexive verbs — only 3rd person changes to se!"
    }
  },
  {
    "id": 2401,
    "slug": "morning-to-night-routine",
    "title": "Morning to Night Routine",
    "subtitle": "levantarse (me levanto), lavarse, vestirse, acostarse (me acuesto) across a full day",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "levantarse",
      "acostarse",
      "me",
      "te",
      "se",
      "nos",
      "siete",
      "ocho",
      "diez",
      "mañana",
      "noche"
    ],
    "table_word_ids": [
      "levantarse",
      "acostarse",
      "me",
      "te",
      "se",
      "nos"
    ],
    "hook": {
      "title": "From 'Me Levanto' to 'Me Acuesto'",
      "content": "Follow the rhythm of a Spanish day: Por la mañana me levanto a las siete ('In the morning I get up at seven'), and por la noche me acuesto a las diez ('at night I go to bed at ten')."
    },
    "pattern": {
      "title": "Matching the Pronoun on Infinitives: Voy a Levantarme",
      "content": "Watch what happens when you put voy a or quiero in front of levantarse or acostarse: if the subject is 'I' (yo), the -se on the infinitive MUST change to -me! Voy a levantarme temprano ('I am going to get up early') or Me voy a levantar!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I get up",
            "german": "me levanto"
          },
          {
            "id": "p2",
            "english": "you get up (tú)",
            "german": "te levantas"
          },
          {
            "id": "p3",
            "english": "I go to bed (o→ue)",
            "german": "me acuesto"
          },
          {
            "id": "p4",
            "english": "I want to get up (hooked -me!)",
            "german": "quiero levantarme"
          },
          {
            "id": "p5",
            "english": "at seven in the morning",
            "german": "a las siete de la mañana"
          }
        ],
        "target_answer": "me levanto, te levantas, me acuesto, quiero levantarme, a las siete de la mañana",
        "meaning": "I get up, you get up (tú), I go to bed (o→ue), I want to get up (hooked -me!), at seven in the morning",
        "explanation": "Match the reflexive pronoun to the subject whether it stands before the verb or hooks onto the infinitive!",
        "id": "es2401_e1"
      },
      {
        "type": "morpheme_tiles",
        "prompt": "Hook the 1st-person reflexive pronoun ('myself') onto 'levantar' to say 'to get (myself) up':",
        "tile_options": [
          "levantar",
          "me",
          "se",
          "te"
        ],
        "target_answer": "levantarme",
        "meaning": "levantarme (to get myself up)",
        "explanation": "When the subject is 'I', levantarse changes -se to -me: quiero levantarme.",
        "id": "es2401_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'I want to go to bed now'?",
        "options": [
          "Quiero acostarme ahora (or Me quiero acostar ahora)",
          "*Quiero acostarse ahora",
          "*Quiero acuesto ahora"
        ],
        "target_answer": "Quiero acostarme ahora (or Me quiero acostar ahora)",
        "meaning": "I want to go to bed now",
        "explanation": "Because 'I' am the one going to bed, -se becomes -me: Quiero acostarme.",
        "id": "es2401_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I get up at seven in the morning'",
        "target_answer": "Me levanto a las siete de la mañana",
        "meaning": "I get up at seven in the morning",
        "word_bank": [
          "Me",
          "levanto",
          "a",
          "las",
          "siete",
          "de",
          "la",
          "mañana",
          "Te",
          "por",
          "noche"
        ],
        "explanation": "Me levanto + a las siete + de la mañana (use de la mañana when a specific clock hour is stated!).",
        "id": "es2401_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Me levanto a las siete",
        "replays": 2,
        "target_answer": "Me levanto a las siete",
        "meaning": "I get up at seven o'clock",
        "cues": [
          "Myself: Me",
          "I get up: levanto",
          "at seven: a las siete"
        ],
        "explanation": "Me levanto a las siete.",
        "affirmation": "Daily routine reflexive locked in!",
        "id": "es2401_e5"
      }
    ],
    "summary": {
      "outcome": "Describe morning-to-night routines and adapt reflexive pronouns on infinitives (levantarme, acostarme).",
      "use_example": {
        "german": "Me levanto a las siete de la mañana y quiero acostarme a las diez.",
        "english": "I get up at seven in the morning and I want to go to bed at ten."
      },
      "takeaway": "With a clock hour, 'in the morning / at night' uses de (a las siete de la mañana); without a clock hour, it uses por (por la mañana)!",
      "curiosity_teaser": "Up next ([2402] Non-Literal & Reciprocal Reflexives): see how irse means 'to leave' and nos vemos means 'we see each other'."
    },
    "twist": {
      "prompt": "Assemble: 'I am going to get up'",
      "target_answer": "Voy a levantarme",
      "word_bank": [
        "Voy",
        "a",
        "levantarme",
        "levantarse",
        "te",
        "de"
      ],
      "explanation": "Voy a levantarme (or Me voy a levantar)."
    }
  },
  {
    "id": 2402,
    "slug": "non-literal-and-reciprocal-reflexives",
    "title": "Non-Literal & Reciprocal Reflexives",
    "subtitle": "irse ('to leave'), quedarse ('to stay'), and nos vemos ('we see each other')",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "ir",
      "voy",
      "me",
      "te",
      "se",
      "nos",
      "ver",
      "hablar",
      "mañana",
      "hoy"
    ],
    "table_word_ids": [
      "ir",
      "voy",
      "me",
      "te",
      "se",
      "nos"
    ],
    "hook": {
      "title": "How 'Ir' ('To Go') Becomes 'Irse' ('To Leave / Head Out')!",
      "content": "Look at the difference between ir ('to go [to a destination]': Voy a Madrid) and **irse** ('to leave / to head out from here'): **Me voy** ('I'm leaving / I'm off!'), **¿Ya te vas?** ('Are you leaving already?'), **¡Nos vamos!** ('We're leaving / Let's get out of here!')!"
    },
    "pattern": {
      "title": "Reciprocal Plural: Nos Vemos, Nos Hablamos",
      "content": "With plural subjects (nosotros, ellos), nos and se can mean 'each other': Nos vemos el lunes ('We'll see each other on Monday'), Nos hablamos mañana ('We'll talk to each other tomorrow')!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I go (requires a destination: Voy a casa)",
            "german": "voy"
          },
          {
            "id": "p2",
            "english": "I'm leaving / I'm off! (no destination needed)",
            "german": "me voy"
          },
          {
            "id": "p3",
            "english": "are you leaving? (tú)",
            "german": "¿te vas?"
          },
          {
            "id": "p4",
            "english": "we see each other tomorrow",
            "german": "nos vemos mañana"
          },
          {
            "id": "p5",
            "english": "we talk to each other",
            "german": "nos hablamos"
          }
        ],
        "target_answer": "voy, me voy, ¿te vas?, nos vemos mañana, nos hablamos",
        "meaning": "I go (requires a destination: Voy a casa), I'm leaving / I'm off! (no destination needed), are you leaving? (tú), we see each other tomorrow, we talk to each other",
        "explanation": "Adding me/te/se/nos to ir shifts the focus from the destination ('go to') to the departure ('leave').",
        "id": "es2402_e1"
      },
      {
        "type": "shift_select",
        "prompt": "You are standing up from a café table to head home. What do you say for 'I'm leaving now'?",
        "options": [
          "Me voy ahora",
          "*Voy ahora",
          "*Se voy ahora"
        ],
        "target_answer": "Me voy ahora",
        "meaning": "I'm leaving now",
        "explanation": "Me voy means 'I am leaving'; bare Voy requires a destination (Voy a casa).",
        "id": "es2402_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'We will see each other on Monday'",
        "target_answer": "Nos vemos el lunes",
        "meaning": "We'll see each other on Monday",
        "word_bank": [
          "Nos",
          "vemos",
          "el",
          "lunes",
          "Me",
          "Se",
          "en"
        ],
        "explanation": "Nos vemos + el lunes ('on Monday').",
        "id": "es2402_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that you are leaving today ('Me voy hoy')",
        "cues": [
          "Myself + I go (= I'm leaving) → Me voy",
          "today → hoy"
        ],
        "idea_parts": [
          "I'm leaving → Me voy",
          "today → hoy"
        ],
        "target_answer": "Me voy hoy",
        "meaning": "I am leaving today",
        "word_bank": [
          "Me",
          "voy",
          "hoy",
          "Te",
          "vas",
          "mañana"
        ],
        "explanation": "Me voy hoy.",
        "id": "es2402_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Nos vemos el viernes",
        "replays": 2,
        "target_answer": "Nos vemos el viernes",
        "meaning": "We'll see each other on Friday",
        "cues": [
          "Each other + we see: Nos vemos",
          "on Friday: el viernes"
        ],
        "explanation": "Nos vemos el viernes.",
        "affirmation": "Reciprocal nos vemos mastered!",
        "id": "es2402_e5"
      }
    ],
    "summary": {
      "outcome": "Use me voy / te vas / nos vamos for 'to leave' and nos vemos / nos hablamos for 'each other'.",
      "use_example": {
        "german": "Me voy ahora — ¡nos vemos el viernes!",
        "english": "I'm leaving now — see you on Friday!"
      },
      "takeaway": "voy = 'I go [somewhere]'; me voy = 'I'm leaving!'",
      "curiosity_teaser": "Up next ([25] Gustar: The Inverted Liking): discover why 'I like coffee' in Spanish is literally 'The coffee pleases to me'!"
    },
    "twist": {
      "prompt": "Assemble: 'Are you leaving today?'",
      "target_answer": "Te vas hoy",
      "word_bank": [
        "Te",
        "vas",
        "hoy",
        "Me",
        "voy",
        "ayer"
      ],
      "explanation": "¿Te vas hoy?"
    }
  },
  {
    "id": 25,
    "slug": "gustar-inverted-liking",
    "title": "Gustar: The Inverted Liking",
    "subtitle": "me gusta el café = coffee pleases me — the subject is the thing liked",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "gustar",
      "gusta",
      "encantar",
      "me",
      "te",
      "nos",
      "le",
      "café",
      "música",
      "libro"
    ],
    "table_word_ids": [
      "gustar",
      "gusta",
      "encantar",
      "me",
      "te",
      "nos"
    ],
    "hook": {
      "title": "Why You Don't 'Like' Coffee in Spanish — Coffee Pleases You!",
      "content": "In English, 'I' am the subject and 'coffee' is the object: 'I like coffee'. In Spanish, the relationship is flipped 180 degrees! The verb gustar (cousin of English 'gusto' and 'disgust') literally means **'to be pleasing to'**. So to say 'I like coffee', Spanish says **Me gusta el café** — word for word: **'To-me is-pleasing the coffee'**! Because 'the coffee' is the grammatical SUBJECT doing the pleasing, it wears its definite article (el café, la música), and if the thing you like is PLURAL ('I like books'), gusta adds an -n to agree with the plural subject: **Me gustan los libros** ('To-me are-pleasing the books')!"
    },
    "pattern": {
      "title": "Never Say *Yo Gusto! Use Me, Te, Le, Nos + Gusta / Gustan",
      "content": "Because the person who likes something is the RECIPIENT of the pleasure, you use the exact same indirect object pronouns from Topic 23: **Me** gusta ('I like'), **Te** gusta ('You like'), **Le** gusta ('He/she/usted likes'), **Nos** gusta ('We like')! And to add emphasis or clarity, put **A mí** me gusta, **A ti** te gusta, **A María** le gusta in front!",
      "linguist_note": "Dative experiencer verbs (Spanish me gusta, Italian mi piace) treat the stimulus as grammatical subject and the human experiencer as indirect object.",
      "trap_note": "Never say *Yo gusto el café — 'Yo gusto' means 'I am pleasing/attractive to people'! Always start with the indirect pronoun: Me gusta..."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I like the coffee (singular subject → gusta)",
            "german": "me gusta el café"
          },
          {
            "id": "p2",
            "english": "I like the books (plural subject → gustan!)",
            "german": "me gustan los libros"
          },
          {
            "id": "p3",
            "english": "do you like music? (with definite article la!)",
            "german": "¿te gusta la música?"
          },
          {
            "id": "p4",
            "english": "we like Madrid",
            "german": "nos gusta Madrid"
          },
          {
            "id": "p5",
            "english": "I love / am enchanted by (works just like gustar)",
            "german": "me encanta"
          }
        ],
        "target_answer": "me gusta el café, me gustan los libros, ¿te gusta la música?, nos gusta Madrid, me encanta",
        "meaning": "I like the coffee (singular subject → gusta), I like the books (plural subject → gustan!), do you like music? (with definite article la!), we like Madrid, I love / am enchanted by (works just like gustar)",
        "explanation": "gusta agrees with singular nouns or infinitives; gustan agrees with plural nouns.",
        "id": "es25_e1"
      },
      {
        "type": "reverse_cognate",
        "prompt": "Spanish gustar ('to taste / to be pleasing to', from Latin gustāre) entered English inside which enthusiastic noun meaning 'eager enjoyment or zest'?",
        "target_answer": "gusto",
        "meaning": "doing something 'with gusto' is doing it with Spanish/Italian pleasure (gustar)!",
        "explanation": "Latin gustus ('taste, relish') gave Spanish el gusto / gustar and English gusto and disgust.",
        "id": "es25_e2"
      },
      {
        "type": "shift_select",
        "prompt": "Why do we say 'Me GUSTA el café' (without -n) but 'Me GUSTAN los libros' (with -n)?",
        "options": [
          "Because the thing liked is the grammatical subject: singular el café takes 3rd-person singular gusta, while plural los libros takes 3rd-person plural gustan!",
          "Because me is plural",
          "Because libros is masculine"
        ],
        "target_answer": "Because the thing liked is the grammatical subject: singular el café takes 3rd-person singular gusta, while plural los libros takes 3rd-person plural gustan!",
        "meaning": "I like coffee vs I like books",
        "explanation": "The verb gustar agrees with the thing that pleases you, never with the person!",
        "id": "es25_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I like music'",
        "target_answer": "Me gusta la música",
        "meaning": "I like music",
        "word_bank": [
          "Me",
          "gusta",
          "la",
          "música",
          "Yo",
          "gusto",
          "el"
        ],
        "explanation": "Me gusta + la música (always include the definite article el/la/los/las with general nouns after gustar!).",
        "id": "es25_e4"
      },
      {
        "type": "literal_gloss",
        "prompt": "Which English word-for-word blueprint mirrors Spanish 'Me gustan los libros'?",
        "german": "Me gustan los libros",
        "natural": "I like books",
        "options": [
          "I like books",
          "To-me are-pleasing the books",
          "I like the books",
          "Me pleases the books"
        ],
        "target_answer": "To-me are-pleasing the books",
        "meaning": "I like books (literal Spanish blueprint: To-me are-pleasing the books)",
        "explanation": "Me ('To-me') + gustan ('are-pleasing') + los libros ('the books' — the grammatical subject).",
        "id": "es25_e5"
      }
    ],
    "summary": {
      "outcome": "Express likes and loves with me/te/le/nos + gusta (singular/infinitive) and gustan (plural) + definite article.",
      "use_example": {
        "german": "Me gusta la música y me gustan mucho los libros.",
        "english": "I like music and I like books very much."
      },
      "takeaway": "The thing liked is the subject: singular/infinitive = gusta; plural noun = gustan!",
      "curiosity_teaser": "Up next ([2501] gusta vs gustan): drill singular nouns, plural nouns, and infinitives after gustar."
    },
    "twist": {
      "prompt": "Assemble: 'Do you like the coffee?'",
      "target_answer": "Te gusta el café",
      "word_bank": [
        "Te",
        "gusta",
        "el",
        "café",
        "Tú",
        "gustas",
        "la"
      ],
      "explanation": "¿Te gusta el café?"
    },
    "foreshadow": {
      "line": "If 'me gusta' means 'it pleases me' ('I like'), what does 'me gustaría' mean? In Topic 26, we unlock the Conditional ('it would please me' = 'I would like') and the Subjunctive!",
      "resolvedIn": 26
    },
    "payoff": {
      "ofLesson": 23,
      "text": "Remember Dative Pronoun Redundancy from Sprig 2302? That's why Spanish says 'A María le gusta el café' ('To María to-her pleases the coffee')!"
    }
  },
  {
    "id": 2501,
    "slug": "gusta-vs-gustan",
    "title": "gusta vs gustan",
    "subtitle": "Singular vs plural agreement: me gusta el café / me gusta viajar vs me gustan los libros",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "gustar",
      "gusta",
      "me",
      "te",
      "nos",
      "le",
      "café",
      "libro",
      "ciudad",
      "visitar",
      "comer"
    ],
    "table_word_ids": [
      "gustar",
      "gusta",
      "me",
      "te",
      "nos",
      "le"
    ],
    "hook": {
      "title": "What If You Like Doing Actions (Infinitives)? Always Singular 'Gusta'!",
      "content": "Even if you list three infinitive verbs in a row — **Me gusta comer, beber y viajar** ('I like eating, drinking, and traveling') — infinitives always count as singular concepts, so you ALWAYS use singular **gusta**! Only a plural noun (los libros, las ciudades, los hoteles) triggers plural **gustan**!"
    },
    "pattern": {
      "title": "Where Does 'Mucho' Go? Right After Gusta!",
      "content": "To say 'I really like coffee / I like coffee a lot', place mucho right after gusta/gustan: Me gusta mucho el café ('The coffee pleases me a lot')!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I like the city (singular noun)",
            "german": "me gusta la ciudad"
          },
          {
            "id": "p2",
            "english": "I like the cities (plural noun)",
            "german": "me gustan las ciudades"
          },
          {
            "id": "p3",
            "english": "I like to visit / visiting (infinitive)",
            "german": "me gusta visitar"
          },
          {
            "id": "p4",
            "english": "I like coffee a lot",
            "german": "me gusta mucho el café"
          },
          {
            "id": "p5",
            "english": "do you like books? (plural noun)",
            "german": "¿te gustan los libros?"
          }
        ],
        "target_answer": "me gusta la ciudad, me gustan las ciudades, me gusta visitar, me gusta mucho el café, ¿te gustan los libros?",
        "meaning": "I like the city (singular noun), I like the cities (plural noun), I like to visit / visiting (infinitive), I like coffee a lot, do you like books? (plural noun)",
        "explanation": "Singular noun or any infinitive = gusta; plural noun = gustan.",
        "id": "es2501_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Complete: 'Me ___ visitar las ciudades hermosas.' (Look carefully at what immediately follows: the infinitive visitar!)",
        "options": [
          "gusta",
          "gustan",
          "gusto"
        ],
        "target_answer": "gusta",
        "meaning": "I like visiting beautiful cities",
        "explanation": "Because the thing that pleases you is the action of visiting (visitar, an infinitive), the verb is singular: Me gusta visitar las ciudades!",
        "id": "es2501_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I like the cities'",
        "target_answer": "Me gustan las ciudades",
        "meaning": "I like the cities",
        "word_bank": [
          "Me",
          "gustan",
          "las",
          "ciudades",
          "gusta",
          "los",
          "Yo"
        ],
        "explanation": "las ciudades is plural, so gusta adds -n: Me gustan las ciudades.",
        "id": "es2501_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that we like eating here ('Nos gusta comer aquí')",
        "cues": [
          "To us → Nos",
          "is pleasing (with infinitive) → gusta",
          "to eat here → comer aquí"
        ],
        "idea_parts": [
          "We like → Nos gusta",
          "to eat here → comer aquí"
        ],
        "target_answer": "Nos gusta comer aquí",
        "meaning": "We like eating here",
        "word_bank": [
          "Nos",
          "gusta",
          "comer",
          "aquí",
          "gustan",
          "Nosotros",
          "comemos"
        ],
        "explanation": "Nos gusta comer aquí — infinitive comer takes singular gusta.",
        "id": "es2501_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Me gusta mucho esta ciudad",
        "replays": 2,
        "target_answer": "Me gusta mucho esta ciudad",
        "meaning": "I like this city very much",
        "cues": [
          "To me pleases: Me gusta",
          "a lot: mucho",
          "this city: esta ciudad"
        ],
        "explanation": "Me gusta mucho esta ciudad.",
        "affirmation": "Singular gusta + mucho mastered!",
        "id": "es2501_e5"
      }
    ],
    "summary": {
      "outcome": "Choose between gusta (singular nouns and all infinitives) and gustan (plural nouns).",
      "use_example": {
        "german": "Me gusta visitar Madrid y me gustan mucho los restaurantes.",
        "english": "I like visiting Madrid and I like the restaurants very much."
      },
      "takeaway": "Infinitives always take singular gusta (Me gusta comer); plural nouns take gustan (Me gustan los libros).",
      "curiosity_teaser": "Up next ([2502] The Gustar Family): unlock encantar ('to love'), interesar ('to interest'), importar ('to matter'), and doler ('to hurt/ache')."
    },
    "twist": {
      "prompt": "Assemble: 'Do you like the books?'",
      "target_answer": "Te gustan los libros",
      "word_bank": [
        "Te",
        "gustan",
        "los",
        "libros",
        "gusta",
        "el",
        "libro"
      ],
      "explanation": "¿Te gustan los libros?"
    }
  },
  {
    "id": 2502,
    "slug": "the-gustar-family",
    "title": "The Gustar Family",
    "subtitle": "encantar (me encanta), interesar (me interesa), importar (no me importa), doler (me duele la cabeza)",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "encantar",
      "gustar",
      "gusta",
      "cabeza",
      "me",
      "te",
      "nos",
      "le",
      "música",
      "libro",
      "no"
    ],
    "table_word_ids": [
      "encantar",
      "gustar",
      "gusta",
      "cabeza",
      "me",
      "te"
    ],
    "hook": {
      "title": "One Blueprint Unlocks a Whole Family of Verbs!",
      "content": "Once you understand how gustar works, you automatically own a whole family of high-frequency Spanish verbs that use the exact same inverted blueprint:\n• **encantar** ('to enchant' → 'to love'): **Me encanta la música** ('I love music'), **Me encantan los libros** ('I love books')!\n• **importar** ('to matter / be important to'): **No me importa** ('I don't care / It doesn't matter to me')!\n• **doler** ('to hurt / ache', o→ue boot verb): **Me duele la cabeza** ('My head hurts / I have a headache', lit. 'To-me hurts the head')!"
    },
    "pattern": {
      "title": "Why 'Me Encanta' Never Takes 'Mucho'",
      "content": "Because encantar already means 'to love / be delighted by', you say Me encanta el café (whereas with gustar you can say Me gusta mucho el café)!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I love music (singular → encanta)",
            "german": "me encanta la música"
          },
          {
            "id": "p2",
            "english": "I love books (plural → encantan)",
            "german": "me encantan los libros"
          },
          {
            "id": "p3",
            "english": "it is very important to me / it matters to me",
            "german": "me importa mucho"
          },
          {
            "id": "p4",
            "english": "I don't mind / it doesn't matter to me",
            "german": "no me importa"
          },
          {
            "id": "p5",
            "english": "my head hurts / I have a headache (o→ue)",
            "german": "me duele la cabeza"
          }
        ],
        "target_answer": "me encanta la música, me encantan los libros, me importa mucho, no me importa, me duele la cabeza",
        "meaning": "I love music (singular → encanta), I love books (plural → encantan), it is very important to me / it matters to me, I don't mind / it doesn't matter to me, my head hurts / I have a headache (o→ue)",
        "explanation": "All of these verbs put the experiencer in me/te/le/nos and agree with the thing that enchants, matters, or hurts.",
        "id": "es2502_e1"
      },
      {
        "type": "reverse_cognate",
        "prompt": "Spanish encantar ('to love something', literally 'to enchant / cast a charm over me') is the exact cognate of which English verb?",
        "target_answer": "enchant",
        "meaning": "Me encanta el chocolate literally means 'Chocolate enchants me'!",
        "explanation": "Latin incantāre ('to sing a spell upon') gave English enchant and Spanish encantar.",
        "id": "es2502_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'My head hurts / I have a headache' in Spanish?",
        "options": [
          "Me duele la cabeza",
          "*Duele mi cabeza",
          "*Yo duelo la cabeza"
        ],
        "target_answer": "Me duele la cabeza",
        "meaning": "My head hurts / I have a headache",
        "explanation": "Spanish uses the indirect pronoun me ('to me') + duele ('hurts') + the definite article la cabeza ('the head')!",
        "id": "es2502_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I love Spanish music (la música)'",
        "target_answer": "Me encanta la música",
        "meaning": "I love music",
        "word_bank": [
          "Me",
          "encanta",
          "la",
          "música",
          "encantan",
          "Yo",
          "el"
        ],
        "explanation": "Me + encanta + la música.",
        "id": "es2502_e4"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that you love books ('Me encantan los libros')",
        "cues": [
          "To me → Me",
          "are enchanting (plural to match libros) → encantan",
          "the books → los libros"
        ],
        "idea_parts": [
          "I love → Me encantan",
          "books → los libros"
        ],
        "target_answer": "Me encantan los libros",
        "meaning": "I love books",
        "word_bank": [
          "Me",
          "encantan",
          "los",
          "libros",
          "encanta",
          "el",
          "libro"
        ],
        "explanation": "Me encantan los libros.",
        "id": "es2502_e5"
      }
    ],
    "summary": {
      "outcome": "Deploy encantar, importar, and doler using the inverted gustar structure.",
      "use_example": {
        "german": "Me encanta la música, me encantan los libros y hoy me duele la cabeza.",
        "english": "I love music, I love books, and today my head hurts."
      },
      "takeaway": "With body parts (Me duele la cabeza), Spanish uses me/te/le + the definite article (la cabeza) rather than mi/tu/su!",
      "curiosity_teaser": "Up next ([26] The Would-World & Subjunctive Preview): unlock the polite conditional (me gustaría, podrías) and the opposite-vowel subjunctive!"
    },
    "twist": {
      "prompt": "Assemble: 'My head hurts'",
      "target_answer": "Me duele la cabeza",
      "word_bank": [
        "Me",
        "duele",
        "la",
        "cabeza",
        "mi",
        "mano",
        "gusta"
      ],
      "explanation": "Me duele la cabeza."
    }
  },
  {
    "id": 26,
    "slug": "would-world-and-subjunctive-preview",
    "title": "The Would-World & Subjunctive Preview",
    "subtitle": "me gustaría, podrías, and the opposite-vowel subjunctive after wishes",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "gustaría",
      "podría",
      "ojalá",
      "querer",
      "tener",
      "reservar",
      "hablar",
      "comer",
      "mesa",
      "importante"
    ],
    "table_word_ids": [
      "gustaría",
      "podría",
      "ojalá",
      "querer",
      "tener",
      "reservar"
    ],
    "hook": {
      "title": "Two Moods Beyond Plain Fact: The Conditional (-ía) & The Subjunctive",
      "content": "First, the **Conditional ('would')**: take ANY full infinitive verb (gustar, hablar, comer, vivir) and glue **-ía, -ías, -ía, -íamos, -ían** straight onto the end without removing -ar/-er/-ir! Thus me gusta ('it pleases me / I like') becomes **me gustaría** ('it would please me' = **'I would like'**): Me gustaría reservar una mesa! Second, the **Subjunctive**: when you want, hope, or say it's important that SOMEONE ELSE do something (Quiero que tú..., Es importante que..., Ojalá...), Spanish switches the verb's theme vowel to the **OPPOSITE vowel**: -ar verbs switch from -a to **-e** (hablas → **hables**, hable), and -er/-ir verbs switch from -e/-i to **-a** (comes → **comas**, tengas, viva)!"
    },
    "pattern": {
      "title": "When to Use Infinitive vs Subjunctive: Same Person vs Two People!",
      "content": "• **One person** ('I want to speak'): Quiero hablar (simple infinitive!).\n• **Two people connected by 'que'** ('I want YOU to speak' = 'I want that you speak'): **Quiero que hables** (opposite-vowel subjunctive!)!",
      "linguist_note": "The Romance conditional fused the Latin infinitive with the imperfect of habēre (gustāre + habēbam → gustaría), which is why -ía stays attached to the whole infinitive!",
      "trap_note": "Never say *Quiero tú hablar (copying English 'I want you to speak'). Whenever the subject changes after querer, Spanish requires que + subjunctive: Quiero que hables!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I would like (it would please me: gustar + -ía)",
            "german": "me gustaría"
          },
          {
            "id": "p2",
            "english": "could you / I could (polite conditional of poder)",
            "german": "podrías / podría"
          },
          {
            "id": "p3",
            "english": "that you speak (-ar flips to opposite vowel -e!)",
            "german": "que hables"
          },
          {
            "id": "p4",
            "english": "that you eat (-er flips to opposite vowel -a!)",
            "german": "que comas"
          },
          {
            "id": "p5",
            "english": "hopefully / God willing (always triggers subjunctive!)",
            "german": "ojalá"
          }
        ],
        "target_answer": "me gustaría, podrías / podría, que hables, que comas, ojalá",
        "meaning": "I would like (it would please me: gustar + -ía), could you / I could (polite conditional of poder), that you speak (-ar flips to opposite vowel -e!), that you eat (-er flips to opposite vowel -a!), hopefully / God willing (always triggers subjunctive!)",
        "explanation": "Conditional = full infinitive + -ía; Subjunctive = opposite ending vowel (-ar → -e, -er/-ir → -a).",
        "id": "es26_e1"
      },
      {
        "type": "morpheme_tiles",
        "prompt": "Build 'would like / would please' by gluing the conditional ending '-ía' onto the full infinitive 'gustar':",
        "tile_options": [
          "gustar",
          "ía",
          "aba",
          "ó"
        ],
        "target_answer": "gustaría",
        "meaning": "gustaría (would please / would like)",
        "explanation": "Full infinitive gustar + ía = gustaría.",
        "id": "es26_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How does Spanish express 'I want you to speak Spanish' (literally 'I want that you speak Spanish')?",
        "options": [
          "Quiero que hables español",
          "*Quiero tú hablar español",
          "*Quiero que hablas español"
        ],
        "target_answer": "Quiero que hables español",
        "meaning": "I want you to speak Spanish",
        "explanation": "After Quiero que..., the second verb switches its -ar ending (-as) to the opposite vowel (-es): que hables!",
        "id": "es26_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I would like to reserve a table'",
        "target_answer": "Me gustaría reservar una mesa",
        "meaning": "I would like to reserve a table",
        "word_bank": [
          "Me",
          "gustaría",
          "reservar",
          "una",
          "mesa",
          "gusta",
          "un",
          "el"
        ],
        "explanation": "Me gustaría ('I would like') + reservar una mesa.",
        "id": "es26_e4"
      },
      {
        "type": "literal_gloss",
        "prompt": "Which English word-for-word blueprint mirrors Spanish 'Quiero que hables conmigo'?",
        "german": "Quiero que hables conmigo",
        "natural": "I want you to speak with me",
        "options": [
          "I want you to speak with me",
          "I-want that you-speak(subj.) with-me",
          "I want to speak with you",
          "You want that I speak with me"
        ],
        "target_answer": "I-want that you-speak(subj.) with-me",
        "meaning": "I want you to speak with me (literal Spanish blueprint: I-want that you-speak(subj.) with-me)",
        "explanation": "English uses an object + infinitive ('want you to speak'); Spanish uses 'Quiero que + subjunctive' ('I-want that you-speak').",
        "id": "es26_e5"
      }
    ],
    "summary": {
      "outcome": "Form the polite conditional (me gustaría, podría) and the opposite-vowel subjunctive after quiero que / es importante que.",
      "use_example": {
        "german": "Me gustaría reservar una mesa y quiero que hables con mi amigo.",
        "english": "I would like to reserve a table and I want you to speak with my friend."
      },
      "takeaway": "Conditional = infinitive + -ía; Subjunctive = flip -ar to -e and -er/-ir to -a after que.",
      "curiosity_teaser": "Up next ([2601] The Conditional of Politeness): soften requests with me gustaría and ¿podrías...?"
    },
    "twist": {
      "prompt": "Assemble: 'I would like a coffee, please'",
      "target_answer": "Me gustaría un café por favor",
      "word_bank": [
        "Me",
        "gustaría",
        "un",
        "café",
        "por",
        "favor",
        "gusta",
        "una",
        "gracias"
      ],
      "explanation": "Me gustaría un café, por favor."
    },
    "foreshadow": {
      "line": "You just unlocked the Deep Engine Gate! In Topic 27, we enter Phase 5 (Synthesis) by decoding the three historical sound shifts that unlock hundreds of deep Spanish roots: f-→h-, -ct-→-ch-, and pl-/cl-→ll-!",
      "resolvedIn": 27
    },
    "payoff": {
      "ofLesson": 25,
      "text": "Me gusta ('I like') from Topic 25 turns effortlessly into Me gustaría ('I would like') simply by adding -ía to gustar!"
    }
  },
  {
    "id": 2601,
    "slug": "conditional-of-politeness",
    "title": "The Conditional of Politeness",
    "subtitle": "Infinitive + -ía: me gustaría reservar, ¿podrías ayudarme?, sería fantástico",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "gustaría",
      "podría",
      "reservar",
      "hablar",
      "ver",
      "comer",
      "mesa",
      "café",
      "por_favor",
      "fantástico"
    ],
    "table_word_ids": [
      "gustaría",
      "podría",
      "reservar",
      "hablar",
      "ver",
      "comer"
    ],
    "hook": {
      "title": "How '-ía' Turns Any Verb into 'Would [Verb]'",
      "content": "Because the conditional glues -ía, -ías, -ía, -íamos, -ían onto the WHOLE infinitive, all three verb families (-ar, -er, -ir) use the exact same endings: hablaría ('I/he would speak'), comería ('I/he would eat'), viviría ('I/he would live'), sería ('it would be', from ser)! And poder drops its e before -ría: podría ('I/he/usted could'), ¿podrías...? ('could you...?')!"
    },
    "pattern": {
      "title": "Polite Escalation: Quiero → Me Gustaría",
      "content": "While Quiero un café is fine, Me gustaría un café ('I would like a coffee') and ¿Podrías explicarme? ('Could you explain to me?') sound extra gracious and polished."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I would like (it would please me)",
            "german": "me gustaría"
          },
          {
            "id": "p2",
            "english": "I / he / usted could",
            "german": "podría"
          },
          {
            "id": "p3",
            "english": "could you (informal)?",
            "german": "¿podrías?"
          },
          {
            "id": "p4",
            "english": "it would be fantastic (ser + -ía)",
            "german": "sería fantástico"
          },
          {
            "id": "p5",
            "english": "I would speak (hablar + -ía)",
            "german": "hablaría"
          }
        ],
        "target_answer": "me gustaría, podría, ¿podrías?, sería fantástico, hablaría",
        "meaning": "I would like (it would please me), I / he / usted could, could you (informal)?, it would be fantastic (ser + -ía), I would speak (hablar + -ía)",
        "explanation": "Full infinitive + -ía creates the conditional across the language.",
        "id": "es2601_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'It would be fantastic' (from the infinitive ser)?",
        "options": [
          "Sería fantástico",
          "*Era fantástico",
          "*Fue fantástico"
        ],
        "target_answer": "Sería fantástico",
        "meaning": "It would be fantastic",
        "explanation": "ser + -ía = sería ('it would be').",
        "id": "es2601_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I would like to see the house'",
        "target_answer": "Me gustaría ver la casa",
        "meaning": "I would like to see the house",
        "word_bank": [
          "Me",
          "gustaría",
          "ver",
          "la",
          "casa",
          "gusta",
          "el",
          "visto"
        ],
        "explanation": "Me gustaría + ver + la casa.",
        "id": "es2601_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "ask a friend politely: 'Could you speak with my brother?'",
        "cues": [
          "Could you (podría + -s) → ¿Podrías",
          "speak with my brother → hablar con mi hermano?"
        ],
        "idea_parts": [
          "Could you → Podrías",
          "speak with my brother → hablar con mi hermano"
        ],
        "target_answer": "Podrías hablar con mi hermano",
        "meaning": "Could you speak with my brother?",
        "word_bank": [
          "Podrías",
          "hablar",
          "con",
          "mi",
          "hermano",
          "Puedo",
          "hablé",
          "a"
        ],
        "explanation": "¿Podrías hablar con mi hermano?",
        "id": "es2601_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Me gustaría reservar una mesa para dos",
        "replays": 2,
        "target_answer": "Me gustaría reservar una mesa para dos",
        "meaning": "I would like to reserve a table for two",
        "cues": [
          "I would like: Me gustaría",
          "to reserve a table: reservar una mesa",
          "for two: para dos"
        ],
        "explanation": "Me gustaría reservar una mesa para dos.",
        "affirmation": "Polite restaurant reservation mastered!",
        "id": "es2601_e5"
      }
    ],
    "summary": {
      "outcome": "Use me gustaría, podría/podrías, and regular -ía conditionals for polite requests and hypotheticals.",
      "use_example": {
        "german": "Me gustaría reservar una mesa para dos — ¿podrías confirmar?",
        "english": "I would like to reserve a table for two — could you confirm?"
      },
      "takeaway": "Infinitive + -ía = 'would [verb]'.",
      "curiosity_teaser": "Up next ([2602] Triggering the Subjunctive): master the opposite-vowel switch (-ar → -e, -er/-ir → -a)."
    },
    "twist": {
      "prompt": "Assemble: 'I would like to eat here'",
      "target_answer": "Me gustaría comer aquí",
      "word_bank": [
        "Me",
        "gustaría",
        "comer",
        "aquí",
        "gusta",
        "comí",
        "allí"
      ],
      "explanation": "Me gustaría comer aquí."
    }
  },
  {
    "id": 2602,
    "slug": "triggering-the-subjunctive",
    "title": "Triggering the Subjunctive",
    "subtitle": "The opposite-vowel switch (-ar → -e, -er/-ir → -a) after quiero que and es importante que",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "querer",
      "importante",
      "hablar",
      "comer",
      "vivir",
      "tener",
      "tengo",
      "confirmar",
      "celebrar"
    ],
    "table_word_ids": [
      "querer",
      "importante",
      "hablar",
      "comer",
      "vivir",
      "tener"
    ],
    "hook": {
      "title": "Why the Subjunctive Is Built from the 'Yo' Form + the Opposite Vowel",
      "content": "*The Thinking Method* gives you one master formula that builds the present subjunctive of almost every verb in Spanish — including boot verbs and -go verbs:\n1) Start with the present **yo** form (hablo, como, tengo, digo, pongo, conozco).\n2) Drop the final **-o**.\n3) Attach the **OPPOSITE theme vowel**: **-e / -es / -e / -emos / -en** for -ar verbs (hable, hables, confirmes), and **-a / -as / -a / -amos / -an** for -er and -ir verbs (coma, comas, tenga, tengas, diga, ponga)!"
    },
    "pattern": {
      "title": "Two Classic Triggers: Quiero Que & Es Importante Que",
      "content": "Whenever one person's wish (Quiero que...) or a value judgment (Es importante que..., Es bueno que...) projects an action onto a second clause, flip the vowel: Es importante que tengas el billete ('It's important that you have the ticket')!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "you speak (indicative) → that you speak (subjunctive)",
            "german": "hablas → que hables"
          },
          {
            "id": "p2",
            "english": "you eat (indicative) → that you eat (subjunctive)",
            "german": "comes → que comas"
          },
          {
            "id": "p3",
            "english": "you have (tienes) → that you have (from yo tengo!)",
            "german": "tienes → que tengas"
          },
          {
            "id": "p4",
            "english": "he confirms (confirma) → that he confirm",
            "german": "confirma → que confirme"
          },
          {
            "id": "p5",
            "english": "it is important that...",
            "german": "es importante que..."
          }
        ],
        "target_answer": "hablas → que hables, comes → que comas, tienes → que tengas, confirma → que confirme, es importante que...",
        "meaning": "you speak (indicative) → that you speak (subjunctive), you eat (indicative) → that you eat (subjunctive), you have (tienes) → that you have (from yo tengo!), he confirms (confirma) → that he confirm, it is important that...",
        "explanation": "Take the yo form, drop -o, and add the opposite vowel (-ar → -e; -er/-ir → -a).",
        "id": "es2602_e1"
      },
      {
        "type": "morpheme_tiles",
        "prompt": "Build the tú subjunctive of 'tener' ('that you have') from 'yo tengo' (drop -o, add opposite -as):",
        "tile_options": [
          "teng",
          "as",
          "es",
          "tien"
        ],
        "target_answer": "tengas",
        "meaning": "tengas (that you have - subjunctive)",
        "explanation": "tengo → drop -o → teng + as = tengas!",
        "id": "es2602_e2"
      },
      {
        "type": "shift_select",
        "prompt": "Complete with the opposite-vowel subjunctive: 'Es importante que tú ___ (confirmar) la reservación.'",
        "options": [
          "confirmes",
          "confirmas",
          "confirmar"
        ],
        "target_answer": "confirmes",
        "meaning": "It is important that you confirm the reservation",
        "explanation": "confirmar is an -ar verb, so after Es importante que..., -as flips to -es: que confirmes.",
        "id": "es2602_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'It is important that you speak with María'",
        "target_answer": "Es importante que hables con María",
        "meaning": "It is important that you speak with María",
        "word_bank": [
          "Es",
          "importante",
          "que",
          "hables",
          "con",
          "María",
          "hablas",
          "hablar",
          "está"
        ],
        "explanation": "Es importante que + hables (opposite vowel -es!).",
        "id": "es2602_e4"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say: 'I want you to eat something (Quiero que comas)'",
        "cues": [
          "I want that → Quiero que",
          "you eat (comer is -er, so flip -es to -as) → comas"
        ],
        "idea_parts": [
          "I want that → Quiero que",
          "you eat (subj.) → comas"
        ],
        "target_answer": "Quiero que comas",
        "meaning": "I want you to eat",
        "word_bank": [
          "Quiero",
          "que",
          "comas",
          "comes",
          "comer",
          "comí"
        ],
        "explanation": "Quiero que comas — -er verb comer flips to -as in the subjunctive.",
        "id": "es2602_e5"
      }
    ],
    "summary": {
      "outcome": "Build the present subjunctive from the yo stem + opposite vowel after quiero que and es importante que.",
      "use_example": {
        "german": "Quiero que hables con mi padre y es importante que tengas el billete.",
        "english": "I want you to speak with my father and it is important that you have the ticket."
      },
      "takeaway": "Yo form minus -o + opposite vowel (-ar → -e, -er/-ir → -a) gives you the subjunctive!",
      "curiosity_teaser": "Up next ([2603] Ojalá & W.E.I.R.D.O. Triggers): discover how Arabic inshallah became Spanish ojalá and why it always triggers the subjunctive!"
    },
    "twist": {
      "prompt": "Assemble: 'It is important that you have the key'",
      "target_answer": "Es importante que tengas la llave",
      "word_bank": [
        "Es",
        "importante",
        "que",
        "tengas",
        "la",
        "llave",
        "tienes",
        "tengo",
        "el"
      ],
      "explanation": "Es importante que tengas la llave."
    }
  },
  {
    "id": 2603,
    "slug": "ojala-and-weirdo-triggers",
    "title": "Ojalá & W.E.I.R.D.O. Triggers",
    "subtitle": "Arabic-heritage ojalá ('God willing / hopefully') and wishes, emotions, and doubts in the subjunctive",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "ojalá",
      "tener",
      "tengo",
      "ser",
      "estar",
      "bueno",
      "buenos_días",
      "tiempo",
      "posible",
      "llave"
    ],
    "table_word_ids": [
      "ojalá",
      "tener",
      "tengo",
      "ser",
      "estar",
      "bueno"
    ],
    "hook": {
      "title": "From Arabic 'Inshallah' to Spanish 'Ojalá'!",
      "content": "Nearly 800 years of Arabic presence in Spain left around 4,000 words in the Spanish dictionary — and none is more beloved than **ojalá** (/oxaˈla/, 'hopefully / I hope that / if only'). It comes directly from Hispano-Arabic *law šá lláh* ('if God wills it / may God will it'). Because ojalá is always a wish or hope, it **100% ALWAYS triggers the subjunctive** after it (with or without que): **¡Ojalá tengas un buen día!** ('I hope you have a great day!')!"
    },
    "pattern": {
      "title": "W.E.I.R.D.O.: When the Subjunctive Comes Alive",
      "content": "The subjunctive is not a tense; it is a mood used whenever the main clause expresses **W**ishes (Quiero que...), **E**motions (Me alegra que...), **I**mpersonal judgments (Es importante que..., Es posible que...), **R**equests/Recommendations, **D**oubt/Denial (No creo que...), or **O**jalá!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "hopefully / I hope that (Arabic law šá lláh)",
            "german": "ojalá"
          },
          {
            "id": "p2",
            "english": "I hope you have (ojalá + tengas)",
            "german": "ojalá tengas"
          },
          {
            "id": "p3",
            "english": "it is possible that it be (sea = subjunctive of ser)",
            "german": "es posible que sea"
          },
          {
            "id": "p4",
            "english": "I want you to be here (estés = subjunctive of estar)",
            "german": "quiero que estés aquí"
          },
          {
            "id": "p5",
            "english": "it is good that you have time",
            "german": "es bueno que tengas tiempo"
          }
        ],
        "target_answer": "ojalá, ojalá tengas, es posible que sea, quiero que estés aquí, es bueno que tengas tiempo",
        "meaning": "hopefully / I hope that (Arabic law šá lláh), I hope you have (ojalá + tengas), it is possible that it be (sea = subjunctive of ser), I want you to be here (estés = subjunctive of estar), it is good that you have time",
        "explanation": "Wishes, possibilities, emotions, and ojalá all trigger the subjunctive mood.",
        "id": "es2603_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Why does 'ojalá' ALWAYS require a subjunctive verb after it (e.g., ¡Ojalá tengas tiempo!)?",
        "options": [
          "Because ojalá comes from Arabic 'may God will it' — it is inherently a wish/hope rather than a declared fact!",
          "Because ojalá is past tense",
          "Because ojalá is an adjective"
        ],
        "target_answer": "Because ojalá comes from Arabic 'may God will it' — it is inherently a wish/hope rather than a declared fact!",
        "meaning": "hopefully / God willing",
        "explanation": "A wish projects a desired world rather than stating a plain indicative fact, so ojalá always takes the subjunctive.",
        "id": "es2603_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'Hopefully you have time today!'",
        "target_answer": "Ojalá tengas tiempo hoy",
        "meaning": "I hope you have time today!",
        "word_bank": [
          "Ojalá",
          "tengas",
          "tiempo",
          "hoy",
          "tienes",
          "tengo",
          "ayer"
        ],
        "explanation": "¡Ojalá + tengas (subjunctive of tener) + tiempo hoy!",
        "id": "es2603_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say: 'It is good that you have the key'",
        "cues": [
          "It is good that → Es bueno que",
          "you have (subjunctive from tengo → tengas) → tengas",
          "the key → la llave"
        ],
        "idea_parts": [
          "It is good that → Es bueno que",
          "you have the key → tengas la llave"
        ],
        "target_answer": "Es bueno que tengas la llave",
        "meaning": "It is good that you have the key",
        "word_bank": [
          "Es",
          "bueno",
          "que",
          "tengas",
          "la",
          "llave",
          "tienes",
          "buena",
          "el"
        ],
        "explanation": "Es bueno que tengas la llave.",
        "id": "es2603_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Ojalá tengas tiempo mañana",
        "replays": 2,
        "target_answer": "Ojalá tengas tiempo mañana",
        "meaning": "I hope you have time tomorrow",
        "cues": [
          "Hopefully (accent on final á): Ojalá",
          "you have (subjunctive): tengas",
          "time tomorrow: tiempo mañana"
        ],
        "explanation": "¡Ojalá tengas tiempo mañana!",
        "affirmation": "Ojalá + subjunctive mastered!",
        "id": "es2603_e5"
      }
    ],
    "summary": {
      "outcome": "Use ojalá and impersonal triggers (es bueno que, es posible que) with the present subjunctive.",
      "use_example": {
        "german": "¡Ojalá tengas tiempo mañana — es bueno que tengas la llave!",
        "english": "I hope you have time tomorrow — it is good that you have the key!"
      },
      "takeaway": "Whenever you say ojalá ('hopefully / I hope'), flip the verb into the subjunctive!",
      "curiosity_teaser": "Up next ([27] The Silent H & Palatal Shifts): cross into Phase 5 and decode the three historical sound shifts that connect Latin F, -CT-, and PL-/CL- to Spanish H, -CH-, and LL-!"
    },
    "twist": {
      "prompt": "Assemble: 'Hopefully you have the confirmation'",
      "target_answer": "Ojalá tengas la confirmación",
      "word_bank": [
        "Ojalá",
        "tengas",
        "la",
        "confirmación",
        "tienes",
        "el",
        "tengo"
      ],
      "explanation": "¡Ojalá tengas la confirmación!"
    }
  },
  {
    "id": 27,
    "slug": "silent-h-and-palatal-shifts",
    "title": "The Silent H & Palatal Shifts",
    "subtitle": "Historical sound shifts: f- → h- (hacer, hijo, hierro, hambre, hermoso), -ct- → -ch- (noche, leche, ocho, hecho), pl-/cl- → ll- (llave, lluvia, lleno, llamar)",
    "phase": 5,
    "shift_categories": [
      "f_to_h",
      "ct_to_ch",
      "pl_cl_fl_to_ll"
    ],
    "word_ids": [
      "hacer",
      "hijo",
      "hierro",
      "hambre",
      "hermoso",
      "noche",
      "leche",
      "ocho",
      "hecho",
      "llave",
      "lluvia",
      "lleno"
    ],
    "table_word_ids": [
      "hacer",
      "hijo",
      "hierro",
      "hambre",
      "hermoso",
      "noche"
    ],
    "hook": {
      "title": "Three Sound Shifts That Unlock Deep Spanish Etymology",
      "content": "Why do so many core Spanish words start with a silent H (hacer, hijo, hierro, hambre, hermoso), or contain -ch- (noche, leche, ocho, hecho), or begin with ll- (llamar, llave, lluvia, lleno)? Because as Latin evolved in northern Castile, three regular sound shifts transformed Latin consonants while English kept the original Latin letters! Once you see these three shifts, words that looked completely unrelated suddenly reveal their English twins!"
    },
    "pattern": {
      "title": "The Three Master Equations: F→H, CT→CH, and PL/CL→LL",
      "content": "1) **Latin initial F- → Spanish silent H-**: facere → **hacer** (fact/manufacture), fīlius → **hijo** (filial), ferrum → **hierro** (ferrous/iron), faminem → **hambre** (famine), formōsus → **hermoso** (Formosa)!\n2) **Latin medial -CT- → Spanish -CH-**: noctem → **noche** (nocturnal), lactem → **leche** (lactose), octō → **ocho** (octave), factum → **hecho** (fact — both shifts at once!)!\n3) **Latin initial PL-/CL- → Spanish LL-**: clāmāre → **llamar** (claim/clamor), clāvis → **llave** (clavicle/clef), pluvia → **lluvia** (pluvial), plēnus → **lleno** (plenty/plenary)!",
      "linguist_note": "Castilian arose near the Basque-speaking Cantabrian mountains, where the substrate lacked labiodental /f/ and substituted bilabial/aspirated [h], which later fell silent.",
      "trap_note": "Wait: why did words like formal, familia, and fantástico keep their F in Spanish? Because learned words re-borrowed from Latin by scholars in the Renaissance kept their F, whereas words spoken uninterruptedly on the street changed F- to H-!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "to do/make (Latin facere: f- → h-)",
            "german": "hacer"
          },
          {
            "id": "p2",
            "english": "son (Latin fīlius: filial, f- → h-)",
            "german": "el hijo"
          },
          {
            "id": "p3",
            "english": "iron (Latin ferrum: ferrous, f- → h-)",
            "german": "el hierro"
          },
          {
            "id": "p4",
            "english": "done / fact (Latin factum: f→h AND ct→ch!)",
            "german": "el hecho"
          },
          {
            "id": "p5",
            "english": "key (Latin clāvis: clavicle, cl- → ll-)",
            "german": "la llave"
          },
          {
            "id": "p6",
            "english": "full (Latin plēnus: plenty, pl- → ll-)",
            "german": "lleno"
          }
        ],
        "target_answer": "hacer, el hijo, el hierro, el hecho, la llave, lleno",
        "meaning": "to do/make (Latin facere: f- → h-), son (Latin fīlius: filial, f- → h-), iron (Latin ferrum: ferrous, f- → h-), done / fact (Latin factum: f→h AND ct→ch!), key (Latin clāvis: clavicle, cl- → ll-), full (Latin plēnus: plenty, pl- → ll-)",
        "explanation": "F- → H-, -CT- → -CH-, and PL-/CL- → LL- decode the oldest layer of Spanish vocabulary.",
        "id": "es27_e1"
      },
      {
        "type": "reverse_cognate",
        "prompt": "Spanish el hierro ('iron', from Latin ferrum via f- → h- and e → ie) shares its root with which English chemistry adjective for iron-containing metals (and why Iron on the periodic table is Fe)?",
        "target_answer": "ferrous",
        "meaning": "Fe (ferrum / ferrous) turned f- into silent h- and split stressed e into ie: hierro!",
        "explanation": "Latin ferrum gave chemical symbol Fe, English ferrous, and Spanish hierro.",
        "id": "es27_e2"
      },
      {
        "type": "reverse_cognate",
        "prompt": "Spanish lleno ('full', from Latin plēnus via pl- → ll-) shares its root with which everyday English word meaning 'an abundant, full amount'?",
        "target_answer": "plenty",
        "meaning": "plenty and replenish come from Latin plēnus — which became Spanish lleno!",
        "explanation": "Latin plēnus ('full') gave English plenty, plenary, replenish and Spanish lleno.",
        "id": "es27_e3"
      },
      {
        "type": "shift_select",
        "prompt": "Which single Spanish word demonstrates BOTH the 'f- → silent h-' shift AND the '-ct- → -ch-' shift from Latin 'factum'?",
        "options": [
          "hecho ('done / fact')",
          "leche ('milk')",
          "hijo ('son')"
        ],
        "target_answer": "hecho ('done / fact')",
        "meaning": "done / made; the fact",
        "explanation": "Latin factum: initial f- → silent h-, and medial -ct- → -ch- = hecho!",
        "id": "es27_e4"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'The restaurant is full tonight'",
        "target_answer": "El restaurante está lleno esta noche",
        "meaning": "The restaurant is full tonight",
        "word_bank": [
          "El",
          "restaurante",
          "está",
          "lleno",
          "esta",
          "noche",
          "es",
          "llena",
          "este"
        ],
        "explanation": "El restaurante está lleno ('is full' — current state takes está!) + esta noche ('tonight').",
        "id": "es27_e5"
      }
    ],
    "summary": {
      "outcome": "Decode Spanish h-, -ch-, and ll- vocabulary from their Latin f-, -ct-, and pl-/cl- cognates in English.",
      "use_example": {
        "german": "Tengo la llave de hierro y el restaurante está lleno esta noche.",
        "english": "I have the iron key and the restaurant is full tonight."
      },
      "takeaway": "When you see initial silent h-, think f-; when you see -ch-, think -ct-; when you see ll-, think pl-/cl-!",
      "curiosity_teaser": "Up next ([2701] The Silent H Decoded): trace hacer, hijo, hierro, hambre, and hermoso back to their F- twins."
    },
    "twist": {
      "prompt": "Assemble: 'He is my son'",
      "target_answer": "Es mi hijo",
      "word_bank": [
        "Es",
        "mi",
        "hijo",
        "Está",
        "hambre",
        "hierro"
      ],
      "explanation": "Es mi hijo (Latin fīlius → hijo)."
    },
    "foreshadow": {
      "line": "Next in Topic 28: the connective tissue of fluent Spanish (que, quien, lo que) and the Latin verb-dynasty matrices (poner, tener, traer, mostrar)!",
      "resolvedIn": 28
    },
    "payoff": {
      "ofLesson": 26,
      "text": "Welcome to Phase 5! All nine conversion and sound-shift families in the Spanish Compendium are now unlocked."
    }
  },
  {
    "id": 2701,
    "slug": "silent-h-decoded",
    "title": "The Silent H Decoded",
    "subtitle": "hacer ↔ fact, hijo ↔ filial, hierro ↔ ferrous, hambre ↔ famine, hermoso ↔ formosa: seeing Latin F behind Spanish H",
    "phase": 5,
    "shift_categories": [
      "f_to_h"
    ],
    "word_ids": [
      "hacer",
      "hijo",
      "hierro",
      "hambre",
      "hermoso",
      "hecho",
      "reservación",
      "tengo"
    ],
    "table_word_ids": [
      "hacer",
      "hijo",
      "hierro",
      "hambre",
      "hermoso",
      "hecho"
    ],
    "hook": {
      "title": "Seeing the Invisible 'F' Behind Silent 'H'",
      "content": "Whenever a native Spanish word starts with H (followed by a single vowel or ie), mentally swap that H for an F and look at the English Latinate cousin: hacer → fac- (manufacture, factory, fact), hijo → fil- (filial, affiliate), hierro → ferr- (ferrous), hambre → fam- (famine), hermoso → form- (formosa, form)!"
    },
    "pattern": {
      "title": "Everyday vs Learned Doublets Inside Spanish",
      "content": "In fact, Spanish itself often has BOTH the street word in h- and the scholarly word in f-: el hijo ('the son') alongside filial ('filial'), el hierro ('iron') alongside el ferrocarril ('the iron rail = railway')!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "to do / to make (manufacture)",
            "german": "hacer"
          },
          {
            "id": "p2",
            "english": "son / child (filial)",
            "german": "el hijo"
          },
          {
            "id": "p3",
            "english": "iron (ferrous)",
            "german": "el hierro"
          },
          {
            "id": "p4",
            "english": "hunger (famine)",
            "german": "el / la hambre"
          },
          {
            "id": "p5",
            "english": "beautiful (formosa)",
            "german": "hermoso"
          },
          {
            "id": "p6",
            "english": "done / fact (factum)",
            "german": "hecho"
          }
        ],
        "target_answer": "hacer, el hijo, el hierro, el / la hambre, hermoso, hecho",
        "meaning": "to do / to make (manufacture), son / child (filial), iron (ferrous), hunger (famine), beautiful (formosa), done / fact (factum)",
        "explanation": "Every one of these words began with F- in Rome and shifted to silent H- in Castile.",
        "id": "es2701_e1"
      },
      {
        "type": "reverse_cognate",
        "prompt": "Spanish el hijo ('son', hija 'daughter', from Latin fīlius) shares its root with which English adjective meaning 'relating to a son or daughter' (as in '___ piety' or 'affiliate')?",
        "target_answer": "filial",
        "meaning": "filial and affiliate ('to adopt as a son') preserve the Latin f- of hijo!",
        "explanation": "Latin fīlius ('son') gave English filial and affiliate, and Spanish hijo.",
        "id": "es2701_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'I want to make a reservation' in Spanish?",
        "options": [
          "Quiero hacer una reservación",
          "*Quiero fabricar una reservación",
          "*Quiero hecho una reservación"
        ],
        "target_answer": "Quiero hacer una reservación",
        "meaning": "I want to make a reservation",
        "explanation": "hacer covers both 'to do' and 'to make': hacer una reservación.",
        "id": "es2701_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'They have two children (hijos)'",
        "target_answer": "Ellos tienen dos hijos",
        "meaning": "They have two children / sons",
        "word_bank": [
          "Ellos",
          "tienen",
          "dos",
          "hijos",
          "son",
          "hambre",
          "hierro"
        ],
        "explanation": "Ellos tienen dos hijos.",
        "id": "es2701_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Quiero hacer una reservación hoy",
        "replays": 2,
        "target_answer": "Quiero hacer una reservación hoy",
        "meaning": "I want to make a reservation today",
        "cues": [
          "I want to make: Quiero hacer",
          "a reservation: una reservación",
          "today: hoy"
        ],
        "explanation": "Quiero hacer una reservación hoy.",
        "affirmation": "Silent-H hacer mastered!",
        "id": "es2701_e5"
      }
    ],
    "summary": {
      "outcome": "Connect hacer, hijo, hierro, hambre, hermoso, and hecho to their Latin F- cognates.",
      "use_example": {
        "german": "Mi hijo quiere hacer una reservación en esta ciudad hermosa.",
        "english": "My son wants to make a reservation in this beautiful city."
      },
      "takeaway": "Spanish hacer covers both English 'do' and 'make'.",
      "curiosity_teaser": "Up next ([2702] The Palatal Twins: -ch- & ll-): master the -ct- → -ch- and pl-/cl- → ll- word families."
    },
    "twist": {
      "prompt": "Assemble: 'The iron key (La llave de hierro)'",
      "target_answer": "La llave de hierro",
      "word_bank": [
        "La",
        "llave",
        "de",
        "hierro",
        "El",
        "hambre",
        "hecho"
      ],
      "explanation": "La llave de hierro."
    }
  },
  {
    "id": 2702,
    "slug": "palatal-twins-ch-and-ll",
    "title": "The Palatal Twins: -ch- & ll-",
    "subtitle": "noctem → noche, lactem → leche, factum → hecho (-ct- → -ch-) and clāvis → llave, plēnus → lleno (cl-/pl- → ll-)",
    "phase": 5,
    "shift_categories": [
      "ct_to_ch",
      "pl_cl_fl_to_ll"
    ],
    "word_ids": [
      "noche",
      "leche",
      "ocho",
      "hecho",
      "llave",
      "lluvia",
      "lleno",
      "llamar",
      "me_llamo",
      "café"
    ],
    "table_word_ids": [
      "noche",
      "leche",
      "ocho",
      "hecho",
      "llave",
      "lluvia"
    ],
    "hook": {
      "title": "Why '-ct-' Became '-ch-' and 'pl-/cl-' Became 'll-'",
      "content": "When Roman soldiers and settlers spoke rapid Latin in Iberia, consonant clusters softened toward the roof of the mouth (the palate):\n• Medial **-ct-** fused into **-ch-** (/tʃ/): noctem → noche, lactem → leche, octō → ocho, factum → hecho, directum → derecho ('right/straight').\n• Initial **pl-, cl-, fl-** fused into **ll-**: clāvis → llave ('key'), pluvia → lluvia ('rain'), plēnus → lleno ('full'), clāmāre → llamar ('to call'), flamma → llama ('flame')!"
    },
    "pattern": {
      "title": "Seeing the English Cognate in a Flash",
      "content": "Once you know -ch- = -ct- and ll- = pl-/cl-, leche instantly flashes 'lactose', noche flashes 'nocturnal', llave flashes 'clavicle/clef', and lluvia flashes 'pluvial'!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "night (nocturnal: -ct- → -ch-)",
            "german": "la noche"
          },
          {
            "id": "p2",
            "english": "milk (lactose: -ct- → -ch-)",
            "german": "la leche"
          },
          {
            "id": "p3",
            "english": "eight (octave: -ct- → -ch-)",
            "german": "ocho"
          },
          {
            "id": "p4",
            "english": "key (clavicle/clef: cl- → ll-)",
            "german": "la llave"
          },
          {
            "id": "p5",
            "english": "rain (pluvial: pl- → ll-)",
            "german": "la lluvia"
          },
          {
            "id": "p6",
            "english": "full (plenty/plenary: pl- → ll-)",
            "german": "lleno"
          }
        ],
        "target_answer": "la noche, la leche, ocho, la llave, la lluvia, lleno",
        "meaning": "night (nocturnal: -ct- → -ch-), milk (lactose: -ct- → -ch-), eight (octave: -ct- → -ch-), key (clavicle/clef: cl- → ll-), rain (pluvial: pl- → ll-), full (plenty/plenary: pl- → ll-)",
        "explanation": "-ct- → -ch- and pl-/cl- → ll- are two of Spanish's most reliable etymological bridges.",
        "id": "es2702_e1"
      },
      {
        "type": "reverse_cognate",
        "prompt": "Spanish la leche ('milk', from Latin lactem via -ct- → -ch-) shares its root with which English word for the natural sugar found in milk?",
        "target_answer": "lactose",
        "meaning": "lactose (and lactic) keeps the Latin -ct- that became -ch- in leche!",
        "explanation": "Latin lac, lactis gave English lactose/lactic and Spanish leche.",
        "id": "es2702_e2"
      },
      {
        "type": "shift_select",
        "prompt": "What Latin initial cluster turned into Spanish 'll-' in 'la llave' ('key') and 'llamar' ('to call')?",
        "options": [
          "cl- (clāvis → llave, clāmāre → llamar)",
          "ct- (noctem → noche)",
          "f- (facere → hacer)"
        ],
        "target_answer": "cl- (clāvis → llave, clāmāre → llamar)",
        "meaning": "key / to call",
        "explanation": "Initial cl- and pl- palatalized into Spanish ll-.",
        "id": "es2702_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'The hotel is full tonight'",
        "target_answer": "El hotel está lleno esta noche",
        "meaning": "The hotel is full tonight",
        "word_bank": [
          "El",
          "hotel",
          "está",
          "lleno",
          "esta",
          "noche",
          "es",
          "llena",
          "lluvia"
        ],
        "explanation": "El hotel está lleno esta noche.",
        "id": "es2702_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Quiero un café con leche esta noche",
        "replays": 2,
        "target_answer": "Quiero un café con leche esta noche",
        "meaning": "I want a coffee with milk tonight",
        "cues": [
          "I want: Quiero",
          "a coffee with milk: un café con leche",
          "tonight: esta noche"
        ],
        "explanation": "Quiero un café con leche esta noche — both leche and noche showcase -ct- → -ch-!",
        "affirmation": "Both -ch- words in one sentence!",
        "id": "es2702_e5"
      }
    ],
    "summary": {
      "outcome": "Recognize -ct- → -ch- and pl-/cl- → ll- shifts across core Spanish nouns, verbs, and adjectives.",
      "use_example": {
        "german": "Esta noche el hotel está lleno por la lluvia, pero tengo mi llave.",
        "english": "Tonight the hotel is full because of the rain, but I have my key."
      },
      "takeaway": "-ch- hides Latin -ct- (noche, leche, ocho, hecho); ll- hides Latin cl-/pl- (llave, lluvia, lleno, llamar).",
      "curiosity_teaser": "Up next ([28] que & quien: Connective Tissue): connect complex thoughts with que, quien, and lo que!"
    },
    "twist": {
      "prompt": "Assemble: 'I have the key and the milk'",
      "target_answer": "Tengo la llave y la leche",
      "word_bank": [
        "Tengo",
        "la",
        "llave",
        "y",
        "la",
        "leche",
        "el",
        "lluvia",
        "noche"
      ],
      "explanation": "Tengo la llave y la leche."
    }
  },
  {
    "id": 28,
    "slug": "que-and-quien-connective-tissue",
    "title": "que & quien: Connective Tissue",
    "subtitle": "Relative pronouns connecting ideas: la persona que conozco, lo que quiero",
    "phase": 5,
    "shift_categories": [],
    "word_ids": [
      "qué",
      "quién",
      "lo",
      "conocer",
      "querer",
      "comprender",
      "decir",
      "hablar",
      "amigo",
      "libro"
    ],
    "table_word_ids": [
      "qué",
      "quién",
      "lo",
      "conocer",
      "querer",
      "comprender"
    ],
    "hook": {
      "title": "Why Unaccented 'Que' Is the Glue of the Spanish Language",
      "content": "In English, you constantly switch between 'who', 'whom', 'which', and 'that' — or drop the connector altogether ('the book [that] I want', 'the friend [whom] I know'). In Spanish, **you may NEVER drop the connector**, and unaccented **que** works for BOTH people and things: el libro **que** quiero ('the book that I want'), el amigo **que** conozco ('the friend whom I know'), la persona **que** habla ('the person who is speaking')!"
    },
    "pattern": {
      "title": "When Do You Use 'Quien' and 'Lo Que'?",
      "content": "• Use **quien** (no accent when connecting!) after a preposition like con, para, de, a when referring to a person: el amigo **con quien** hablo ('the friend with whom I speak').\n• Use **lo que** ('the thing that' = English **'what'**) whenever 'what' is a connector rather than a question: **Comprendo lo que dices** ('I understand what [the thing that] you say'), **Lo que quiero es café** ('What I want is coffee')!",
      "linguist_note": "Spanish relative que continues Latin quid/quod/quem merged into an all-purpose subordinator.",
      "trap_note": "Don't overuse quien! For 'The man who is speaking', say El hombre que habla (not *El hombre quien habla). Save quien for after prepositions (con quien, para quien)!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "that / which / who (unaccented universal connector!)",
            "german": "que"
          },
          {
            "id": "p2",
            "english": "whom (after a preposition: con quien 'with whom')",
            "german": "quien"
          },
          {
            "id": "p3",
            "english": "what / the thing that (neuter connector)",
            "german": "lo que"
          },
          {
            "id": "p4",
            "english": "the book (that) I want",
            "german": "el libro que quiero"
          },
          {
            "id": "p5",
            "english": "I understand what you say",
            "german": "comprendo lo que dices"
          }
        ],
        "target_answer": "que, quien, lo que, el libro que quiero, comprendo lo que dices",
        "meaning": "that / which / who (unaccented universal connector!), whom (after a preposition: con quien 'with whom'), what / the thing that (neuter connector), the book (that) I want, I understand what you say",
        "explanation": "Unaccented que connects people and things; quien follows prepositions for people; lo que means 'what / the thing that'.",
        "id": "es28_e1"
      },
      {
        "type": "shift_select",
        "prompt": "In English we can drop 'that' in 'The coffee I want is here'. How MUST you say it in Spanish?",
        "options": [
          "El café que quiero está aquí (never drop que!)",
          "*El café quiero está aquí",
          "*El café qué quiero está aquí"
        ],
        "target_answer": "El café que quiero está aquí (never drop que!)",
        "meaning": "The coffee (that) I want is here",
        "explanation": "Spanish never omits relative que between two clauses!",
        "id": "es28_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'I understand what you want' (where 'what' means 'the thing that', not a question)?",
        "options": [
          "Comprendo lo que quieres",
          "*Comprendo qué quieres",
          "*Comprendo que quieres"
        ],
        "target_answer": "Comprendo lo que quieres",
        "meaning": "I understand what you want",
        "explanation": "Non-question 'what' ('the thing that') is always lo que: Comprendo lo que quieres.",
        "id": "es28_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'It is the book that I want'",
        "target_answer": "Es el libro que quiero",
        "meaning": "It is the book that I want",
        "word_bank": [
          "Es",
          "el",
          "libro",
          "que",
          "quiero",
          "quien",
          "lo",
          "Está"
        ],
        "explanation": "Es el libro + que + quiero.",
        "id": "es28_e4"
      },
      {
        "type": "literal_gloss",
        "prompt": "Which English word-for-word blueprint mirrors Spanish 'Comprendo lo que quieres'?",
        "german": "Comprendo lo que quieres",
        "natural": "I understand what you want",
        "options": [
          "I understand what you want",
          "I-understand that-which you-want",
          "I understand it what you want",
          "What you want I understand it"
        ],
        "target_answer": "I-understand that-which you-want",
        "meaning": "I understand what you want (literal Spanish blueprint: I-understand that-which you-want)",
        "explanation": "lo ('that thing') + que ('which') = 'that which / what'.",
        "id": "es28_e5"
      }
    ],
    "summary": {
      "outcome": "Join clauses with unaccented que, use quien after prepositions for people, and express 'what (the thing that)' with lo que.",
      "use_example": {
        "german": "Es el libro que quiero y comprendo perfectamente lo que dices.",
        "english": "It is the book that I want and I understand perfectly what you are saying."
      },
      "takeaway": "Never drop 'que' in Spanish — and translate non-question 'what' ('the thing that') as lo que!",
      "curiosity_teaser": "Up next ([2801] que as the Master Connector): practice connecting people and objects with que."
    },
    "twist": {
      "prompt": "Assemble: 'I have the book that you want'",
      "target_answer": "Tengo el libro que quieres",
      "word_bank": [
        "Tengo",
        "el",
        "libro",
        "que",
        "quieres",
        "quien",
        "lo",
        "quiero"
      ],
      "explanation": "Tengo el libro que quieres."
    },
    "foreshadow": {
      "line": "Next in Topic 29: vivid Spanish idioms as thought — plus in Sprig 2803 right now, unlock the Latin prefix × root matrices for poner, tener, traer, and mostrar!",
      "resolvedIn": 29
    },
    "payoff": {
      "ofLesson": 7,
      "text": "In Topic 7 you learned accented ¿qué? ('what?') and ¿quién? ('who?'); now you see their unstressed connector twins que and quien!"
    }
  },
  {
    "id": 2801,
    "slug": "que-master-connector",
    "title": "que as the Master Connector",
    "subtitle": "Why Spanish uses que for BOTH people and things (el hombre que habla, el café que quiero), never dropping 'that'",
    "phase": 5,
    "shift_categories": [],
    "word_ids": [
      "qué",
      "amigo",
      "hermano",
      "libro",
      "café",
      "casa",
      "ciudad",
      "vivir",
      "hablar",
      "querer"
    ],
    "table_word_ids": [
      "qué",
      "amigo",
      "hermano",
      "libro",
      "café",
      "casa"
    ],
    "hook": {
      "title": "One Word for 'Who', 'Whom', 'Which', and 'That'",
      "content": "English makes you choose between 'the friend WHO lives in Madrid' and 'the house THAT is in Madrid'. In Spanish, unaccented **que** does BOTH jobs: el amigo que vive en Madrid, la casa que está en Madrid!"
    },
    "pattern": {
      "title": "Never Drop 'Que'!",
      "content": "Whenever English drops 'that' ('the reservation I confirmed', 'the coffee you want'), your Spanish sentence MUST include que: la reservación que confirmé, el café que quieres."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "the friend who speaks Spanish",
            "german": "el amigo que habla español"
          },
          {
            "id": "p2",
            "english": "the coffee (that) I want",
            "german": "el café que quiero"
          },
          {
            "id": "p3",
            "english": "the city that I visit",
            "german": "la ciudad que visito"
          },
          {
            "id": "p4",
            "english": "the house that is here",
            "german": "la casa que está aquí"
          }
        ],
        "target_answer": "el amigo que habla español, el café que quiero, la ciudad que visito, la casa que está aquí",
        "meaning": "the friend who speaks Spanish, the coffee (that) I want, the city that I visit, the house that is here",
        "explanation": "que connects both human and non-human nouns to a following clause.",
        "id": "es2801_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Translate 'The friend who lives in Madrid':",
        "options": [
          "El amigo que vive en Madrid",
          "*El amigo quien vive en Madrid",
          "*El amigo vive en Madrid"
        ],
        "target_answer": "El amigo que vive en Madrid",
        "meaning": "The friend who lives in Madrid",
        "explanation": "Use que (not quien) directly after the noun for 'who'.",
        "id": "es2801_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'The house that I want is big'",
        "target_answer": "La casa que quiero es grande",
        "meaning": "The house that I want is big",
        "word_bank": [
          "La",
          "casa",
          "que",
          "quiero",
          "es",
          "grande",
          "quien",
          "está",
          "El"
        ],
        "explanation": "La casa + que quiero + es grande.",
        "id": "es2801_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say: 'It is the city that I want to visit'",
        "cues": [
          "It is the city → Es la ciudad",
          "that I want to visit → que quiero visitar"
        ],
        "idea_parts": [
          "It is the city → Es la ciudad",
          "that I want to visit → que quiero visitar"
        ],
        "target_answer": "Es la ciudad que quiero visitar",
        "meaning": "It is the city that I want to visit",
        "word_bank": [
          "Es",
          "la",
          "ciudad",
          "que",
          "quiero",
          "visitar",
          "quien",
          "el",
          "Está"
        ],
        "explanation": "Es la ciudad que quiero visitar.",
        "id": "es2801_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "El amigo que vive aquí es muy bueno",
        "replays": 2,
        "target_answer": "El amigo que vive aquí es muy bueno",
        "meaning": "The friend who lives here is very good",
        "cues": [
          "The friend who: El amigo que",
          "lives here: vive aquí",
          "is very good: es muy bueno"
        ],
        "explanation": "El amigo que vive aquí es muy bueno.",
        "affirmation": "Master connector que locked in!",
        "id": "es2801_e5"
      }
    ],
    "summary": {
      "outcome": "Connect relative clauses to both people and things using unaccented que.",
      "use_example": {
        "german": "El amigo que vive aquí tiene el libro que quiero.",
        "english": "The friend who lives here has the book that I want."
      },
      "takeaway": "Whether the noun is a person ('who') or a thing ('that/which'), reach for que.",
      "curiosity_teaser": "Up next ([2802] lo que: The Thing That / What): master neuter lo que at the start and middle of sentences."
    },
    "twist": {
      "prompt": "Assemble: 'The coffee that I want'",
      "target_answer": "El café que quiero",
      "word_bank": [
        "El",
        "café",
        "que",
        "quiero",
        "quien",
        "la",
        "quieres"
      ],
      "explanation": "El café que quiero."
    }
  },
  {
    "id": 2802,
    "slug": "lo-que-the-thing-that",
    "title": "lo que: The Thing That / What",
    "subtitle": "Using neuter lo que for 'what / the thing that': Comprendo lo que dices, Lo que quiero es descansar",
    "phase": 5,
    "shift_categories": [],
    "word_ids": [
      "lo",
      "qué",
      "comprender",
      "querer",
      "decir",
      "hacer",
      "importante",
      "verdad",
      "saber"
    ],
    "table_word_ids": [
      "lo",
      "qué",
      "comprender",
      "querer",
      "decir",
      "hacer"
    ],
    "hook": {
      "title": "Why 'Lo' + 'Que' Means 'What' ('The Thing That')",
      "content": "Remember from Topic 1 that **lo** is the masculine and neuter pronoun for an idea ('it / that thing')? When you put **lo** in front of **que** ('that'), you get **lo que** — literally **'that thing which'** = English **'what'**! Look at how powerful it is:\n• In the middle of a sentence: **Comprendo lo que quieres** ('I understand what you want'), **Sé lo que haces** ('I know what you are doing').\n• At the start of a sentence: **Lo que quiero es un café** ('What I want is a coffee'), **Lo que es importante es la verdad** ('What is important is the truth')!"
    },
    "pattern": {
      "title": "Question '¿Qué?' vs Connector 'Lo Que'",
      "content": "Asking a question? Use accented ¿Qué? (¿Qué quieres? 'What do you want?'). Connecting a statement? Use lo que (Sé lo que quieres 'I know what you want')!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "what I want (the thing that I want)",
            "german": "lo que quiero"
          },
          {
            "id": "p2",
            "english": "what you say (the thing that you say)",
            "german": "lo que dices"
          },
          {
            "id": "p3",
            "english": "I understand what you want",
            "german": "comprendo lo que quieres"
          },
          {
            "id": "p4",
            "english": "what I want is a coffee",
            "german": "lo que quiero es un café"
          },
          {
            "id": "p5",
            "english": "I know what I am doing",
            "german": "sé lo que hago"
          }
        ],
        "target_answer": "lo que quiero, lo que dices, comprendo lo que quieres, lo que quiero es un café, sé lo que hago",
        "meaning": "what I want (the thing that I want), what you say (the thing that you say), I understand what you want, what I want is a coffee, I know what I am doing",
        "explanation": "lo que translates non-interrogative 'what' ('the thing that').",
        "id": "es2802_e1"
      },
      {
        "type": "morpheme_tiles",
        "prompt": "Build 'what I want' ('the thing that I want') from its three Spanish words:",
        "tile_options": [
          "lo",
          "que",
          "quiero",
          "la"
        ],
        "target_answer": "loquequiero",
        "meaning": "lo que quiero (what I want)",
        "explanation": "lo ('the thing') + que ('that') + quiero ('I want').",
        "id": "es2802_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'What I want is the truth'?",
        "options": [
          "Lo que quiero es la verdad",
          "*Qué quiero es la verdad",
          "*El que quiero es la verdad"
        ],
        "target_answer": "Lo que quiero es la verdad",
        "meaning": "What I want is the truth",
        "explanation": "At the start of a sentence, 'What [I want]...' is always Lo que...",
        "id": "es2802_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I know what you want'",
        "target_answer": "Sé lo que quieres",
        "meaning": "I know what you want",
        "word_bank": [
          "Sé",
          "lo",
          "que",
          "quieres",
          "Conozco",
          "la",
          "quiero"
        ],
        "explanation": "Sé + lo que + quieres.",
        "id": "es2802_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Lo que quiero es un café",
        "replays": 2,
        "target_answer": "Lo que quiero es un café",
        "meaning": "What I want is a coffee",
        "cues": [
          "What (The thing that): Lo que",
          "I want: quiero",
          "is a coffee: es un café"
        ],
        "explanation": "Lo que quiero es un café.",
        "affirmation": "Neuter lo que mastered!",
        "id": "es2802_e5"
      }
    ],
    "summary": {
      "outcome": "Use lo que for 'what / the thing that' both after verbs and at the head of a sentence.",
      "use_example": {
        "german": "Comprendo lo que dices y sé lo que quiero.",
        "english": "I understand what you say and I know what I want."
      },
      "takeaway": "Whenever English 'what' can be rephrased as 'the thing that', Spanish says lo que.",
      "curiosity_teaser": "Up next ([2803] Verb Dynasties: poner, tener, traer & mostrar Matrices): unlock 20+ Spanish verbs at once using Language Transfer's Latin prefix × root matrix!"
    },
    "twist": {
      "prompt": "Assemble: 'I don't understand what you want'",
      "target_answer": "No comprendo lo que quieres",
      "word_bank": [
        "No",
        "comprendo",
        "lo",
        "que",
        "quieres",
        "la",
        "quien",
        "quiero"
      ],
      "explanation": "No comprendo lo que quieres."
    }
  },
  {
    "id": 2803,
    "slug": "verb-dynasties-poner-tener-traer-mostrar",
    "title": "Verb Dynasties: poner, tener, traer & mostrar Matrices",
    "subtitle": "Language Transfer's Latin prefix × root matrix: suponer/proponer/componer, obtener/mantener, atraer/distraer, mostrar/demostrar",
    "phase": 5,
    "shift_categories": [],
    "word_ids": [
      "poner",
      "proponer",
      "suponer",
      "tener",
      "mantener",
      "obtener",
      "mostrar",
      "demostrar",
      "traer"
    ],
    "table_word_ids": [
      "poner",
      "proponer",
      "suponer",
      "tener",
      "mantener",
      "obtener"
    ],
    "hook": {
      "title": "One Root × Five Prefixes = Twenty Verbs for Free!",
      "content": "One of the crowning revelations of *Complete Spanish* and *thinking-method.md* is the **Latin Verb Dynasty Matrix**. Instead of memorizing isolated verbs, look at how Latin prefixes (pro-, su-, com-, ex-, ob-, man-, de-, a-, dis-) snap onto four core Spanish roots — and every compound verb conjugates 100% identically to its root verb!\n1) **-poner** ('to put/place', yo pongo; English -pose): **proponer** (propose, yo propongo), **suponer** (suppose, yo supongo), **componer** (compose)!\n2) **-tener** ('to hold/have', yo tengo; English -tain): **mantener** (maintain = mano + tener 'hold in the hand'!, yo mantengo), **obtener** (obtain, yo obtengo), **contener** (contain)!\n3) **-traer** ('to pull/bring', yo traigo; English -tract): **atraer** (attract), **distraer** (distract)!\n4) **-mostrar** ('to show', o→ue boot verb: yo muestro): **demostrar** ('to demonstrate/prove', yo demuestro)!",
      "footnotes": [
        {
          "marker": "1",
          "title": "Why English Says '-pose' While Spanish Says '-poner'",
          "content": "In Latin, the verb was pōnere ('to put' → Spanish poner), and its past participle was positus (→ Spanish puesto). English borrowed the participle stem -pose, while Spanish kept the infinitive -poner!",
          "interest": true
        }
      ]
    },
    "pattern": {
      "title": "Why 'Propose' Is 'Proponer' and 'Maintain' Is 'Mantener'",
      "content": "Whenever an English verb ends in **-pose** (propose, suppose, compose, expose, impose), swap **-pose** for **-poner**! Whenever an English verb ends in **-tain** (maintain, obtain, contain, retain), swap **-tain** for **-tener**! Whenever an English verb ends in **-tract** (attract, distract, extract, contract), swap **-tract** for **-traer**!",
      "trap_note": "Notice how mostrar ('to show') and demostrar ('to demonstrate/prove') are both o→ue boot verbs: muestro ('I show'), demuestro ('I demonstrate')!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "to put / place (pongo)",
            "german": "poner"
          },
          {
            "id": "p2",
            "english": "to propose (propongo)",
            "german": "proponer"
          },
          {
            "id": "p3",
            "english": "to suppose (supongo)",
            "german": "suponer"
          },
          {
            "id": "p4",
            "english": "to maintain ('hold in hand': mantengo)",
            "german": "mantener"
          },
          {
            "id": "p5",
            "english": "to obtain (obtengo)",
            "german": "obtener"
          },
          {
            "id": "p6",
            "english": "to show / to demonstrate (muestro / demuestro)",
            "german": "mostrar / demostrar"
          }
        ],
        "target_answer": "poner, proponer, suponer, mantener, obtener, mostrar / demostrar",
        "meaning": "to put / place (pongo), to propose (propongo), to suppose (supongo), to maintain ('hold in hand': mantengo), to obtain (obtengo), to show / to demonstrate (muestro / demuestro)",
        "explanation": "Every prefixed compound keeps the exact conjugation of its base verb (pongo → propongo/supongo; tengo → mantengo/obtengo; muestro → demuestro)!",
        "id": "es2803_e1"
      },
      {
        "type": "family_matrix",
        "prompt": "Complete the Verb Dynasty Matrix by building 'to propose' (pro- + poner):",
        "rows": [
          "pro- (forward)",
          "su- / man- (under / in hand)",
          "ob- / com- (toward / together)"
        ],
        "columns": [
          "-poner (English -pose)",
          "-tener (English -tain)"
        ],
        "cells": [
          [
            {
              "german": "proponer",
              "english": "to propose"
            },
            {
              "german": "retener",
              "english": "to retain"
            }
          ],
          [
            {
              "german": "suponer",
              "english": "to suppose"
            },
            {
              "german": "mantener",
              "english": "to maintain"
            }
          ],
          [
            {
              "german": "componer",
              "english": "to compose"
            },
            {
              "german": "obtener",
              "english": "to obtain"
            }
          ]
        ],
        "seed": [
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
          ],
          [
            2,
            1
          ]
        ],
        "task": {
          "row": 0,
          "column": 0
        },
        "target_answer": "proponer",
        "meaning": "to propose (yo propongo)",
        "row_law": "Each row attaches a Latin prefix (pro-, su-/man-, ob-/com-).",
        "column_law": "Column 1 uses the root poner (English -pose); Column 2 uses the root tener (English -tain).",
        "explanation": "English -pose always maps to Spanish -poner: pro- + poner = proponer!",
        "id": "es2803_e2"
      },
      {
        "type": "morpheme_tiles",
        "prompt": "Build 'to maintain' ('to hold in the hand') from its hand-prefix and the root 'tener':",
        "tile_options": [
          "man",
          "tener",
          "poner",
          "tain"
        ],
        "target_answer": "mantener",
        "meaning": "mantener (to maintain)",
        "explanation": "man (from mano 'hand') + tener ('to hold') = mantener!",
        "id": "es2803_e3"
      },
      {
        "type": "shift_select",
        "prompt": "Since 'yo pongo' means 'I put', how do you say 'I suppose' (from suponer)?",
        "options": [
          "yo supongo",
          "*yo supono",
          "*yo supuso"
        ],
        "target_answer": "yo supongo",
        "meaning": "I suppose",
        "explanation": "suponer conjugates identically to poner: pongo → supongo!",
        "id": "es2803_e4"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I want to maintain the tradition'",
        "target_answer": "Quiero mantener la tradición",
        "meaning": "I want to maintain the tradition",
        "word_bank": [
          "Quiero",
          "mantener",
          "la",
          "tradición",
          "poner",
          "el",
          "obtener"
        ],
        "explanation": "Quiero + mantener + la tradición.",
        "id": "es2803_e5"
      }
    ],
    "summary": {
      "outcome": "Decode and conjugate the -poner (-pose), -tener (-tain), -traer (-tract), and -mostrar verb dynasties.",
      "use_example": {
        "german": "Supongo que quieres mantener la tradición y obtener la confirmación.",
        "english": "I suppose that you want to maintain the tradition and obtain the confirmation."
      },
      "takeaway": "English -pose = Spanish -poner (pongo); English -tain = Spanish -tener (tengo); English -tract = Spanish -traer (traigo)!",
      "curiosity_teaser": "Up next ([29] Spanish Idioms as Thought): explore how Spanish idioms and Arabic heritage express everyday thought."
    },
    "twist": {
      "prompt": "Assemble: 'I want to obtain the confirmation'",
      "target_answer": "Quiero obtener la confirmación",
      "word_bank": [
        "Quiero",
        "obtener",
        "la",
        "confirmación",
        "mantener",
        "el",
        "poner"
      ],
      "explanation": "Quiero obtener la confirmación."
    }
  },
  {
    "id": 29,
    "slug": "spanish-idioms-as-thought",
    "title": "Spanish Idioms as Thought",
    "subtitle": "tener ganas de, darse cuenta de, echar de menos, ojalá — cultural metaphors in everyday speech",
    "phase": 5,
    "shift_categories": [],
    "word_ids": [
      "tener",
      "tengo",
      "ojalá",
      "azul",
      "hambre",
      "razón",
      "hecho",
      "comer",
      "ir",
      "buenos_días"
    ],
    "table_word_ids": [
      "tener",
      "tengo",
      "ojalá",
      "azul",
      "hambre",
      "razón"
    ],
    "hook": {
      "title": "Idioms Are Metaphors That Became Grammar",
      "content": "Look at how Spanish paints everyday feelings through vivid physical metaphors:\n• **tener ganas de + infinitive** = 'to feel like [doing]' (lit. 'to have desires/urges of': Tengo ganas de comer 'I feel like eating').\n• **darse cuenta de** = 'to realize [notice a fact]' (lit. 'to give oneself account/bill of' — remember that realizar is a false friend meaning 'to carry out a project'!).\n• **de hecho** = 'in fact / actually' (lit. 'of fact', from el hecho — the true Spanish phrase for English 'actually'!)."
    },
    "pattern": {
      "title": "Arabic Gems in Everyday Spanish: Ojalá, Azul, Hasta",
      "content": "Nearly eight centuries of Al-Andalus wove Arabic words into the daily fabric of Spanish: **ojalá** ('God willing / hopefully'), **azul** ('blue', from lapis lazuli), and even the preposition **hasta** ('until', from Arabic *ḥattā*, as in ¡Hasta mañana! 'Until tomorrow!')!",
      "linguist_note": "Apocope (dropping final -o before masculine singular nouns) affects uno → un, bueno → buen, malo → mal, primero → primer, and tercero → tercer.",
      "trap_note": "Notice how bueno drops its final -o when placed BEFORE a masculine singular noun: un buen día ('a good day'), un buen amigo ('a good friend')!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I am very hungry (I have much hunger)",
            "german": "tengo mucha hambre"
          },
          {
            "id": "p2",
            "english": "you are right (you have reason)",
            "german": "tienes razón"
          },
          {
            "id": "p3",
            "english": "hopefully / God willing (Arabic heritage)",
            "german": "ojalá"
          },
          {
            "id": "p4",
            "english": "blue (Arabic lāzaward)",
            "german": "azul"
          },
          {
            "id": "p5",
            "english": "in fact / actually (lit. of fact)",
            "german": "de hecho"
          }
        ],
        "target_answer": "tengo mucha hambre, tienes razón, ojalá, azul, de hecho",
        "meaning": "I am very hungry (I have much hunger), you are right (you have reason), hopefully / God willing (Arabic heritage), blue (Arabic lāzaward), in fact / actually (lit. of fact)",
        "explanation": "Spanish idioms ground abstract thoughts in concrete nouns like hambre, razón, hecho, and cuenta.",
        "id": "es29_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Remembering that 'actualmente' means 'currently', how do you say 'in fact / actually' in Spanish using 'hecho' ('fact')?",
        "options": [
          "de hecho (or en realidad)",
          "actualmente",
          "por hecho"
        ],
        "target_answer": "de hecho (or en realidad)",
        "meaning": "in fact, actually",
        "explanation": "el hecho means 'the fact', so de hecho means 'in fact / actually'!",
        "id": "es29_e2"
      },
      {
        "type": "shift_select",
        "prompt": "Remembering that 'realizar' means 'to carry out/fulfill a project', what literal metaphor does Spanish use for 'to realize (notice) a fact'?",
        "options": [
          "darse cuenta de ('to give oneself an account/count of')",
          "realizar",
          "recordar"
        ],
        "target_answer": "darse cuenta de ('to give oneself an account/count of')",
        "meaning": "to realize (notice)",
        "explanation": "la cuenta is 'the count/bill'; me doy cuenta de que... means 'I realize that...'!",
        "id": "es29_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'You are right, I am very hungry'",
        "target_answer": "Tienes razón, tengo mucha hambre",
        "meaning": "You are right, I am very hungry",
        "word_bank": [
          "Tienes",
          "razón",
          "tengo",
          "mucha",
          "hambre",
          "Eres",
          "muy",
          "Estoy"
        ],
        "explanation": "Tienes razón + tengo mucha hambre.",
        "id": "es29_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Ojalá tengas un buen día hoy",
        "replays": 2,
        "target_answer": "Ojalá tengas un buen día hoy",
        "meaning": "I hope you have a good day today",
        "cues": [
          "Hopefully: Ojalá",
          "you have (subjunctive): tengas",
          "a good day today: un buen día hoy"
        ],
        "explanation": "¡Ojalá tengas un buen día hoy! — notice bueno drops its -o to buen before a masculine singular noun!",
        "affirmation": "Idiomatic Spanish and apocopated buen mastered!",
        "id": "es29_e5"
      }
    ],
    "summary": {
      "outcome": "Deploy core Spanish idiomatic structures (tener razón/hambre, de hecho, darse cuenta, ojalá) with cultural and etymological awareness.",
      "use_example": {
        "german": "Tienes razón — de hecho, tengo mucha hambre hoy.",
        "english": "You are right — in fact, I am very hungry today."
      },
      "takeaway": "de hecho / en realidad = 'actually'; actualmente = 'currently'; darse cuenta = 'to realize'.",
      "curiosity_teaser": "Up next ([2901] Everyday Idioms in Action): practice idiomatic expressions in natural conversation."
    },
    "twist": {
      "prompt": "Assemble: 'In reality it is the truth'",
      "target_answer": "En realidad es la verdad",
      "word_bank": [
        "En",
        "realidad",
        "es",
        "la",
        "verdad",
        "Actualmente",
        "está",
        "el"
      ],
      "explanation": "En realidad ('Actually / In reality') es la verdad."
    },
    "foreshadow": {
      "line": "Next in Topic 30: the Capstone of El Puente — a connected story in Madrid bringing together every bridge and structure you have built!",
      "resolvedIn": 30
    },
    "payoff": {
      "ofLesson": 28,
      "text": "With relative connectors from Topic 28 and idioms from Topic 29, your Spanish now sounds natural and connected."
    }
  },
  {
    "id": 2901,
    "slug": "everyday-idioms-in-action",
    "title": "Everyday Idioms in Action",
    "subtitle": "tener ganas de ('to feel like'), darse cuenta de ('to realize'), de repente ('suddenly')",
    "phase": 5,
    "shift_categories": [],
    "word_ids": [
      "tener",
      "tengo",
      "tienes",
      "cuenta",
      "hecho",
      "razón",
      "hambre",
      "sed",
      "comer",
      "visitar"
    ],
    "table_word_ids": [
      "tener",
      "tengo",
      "tienes",
      "cuenta",
      "hecho",
      "razón"
    ],
    "hook": {
      "title": "Expressing 'I Feel Like...' and 'In Fact'",
      "content": "Whether you are choosing a restaurant or planning a trip, tener hambre, tener sed, tener razón, and de hecho ('in fact') make your Spanish sound immediately warm and idiomatic."
    },
    "pattern": {
      "title": "La Cuenta: Both 'The Restaurant Bill' and 'Account'",
      "content": "Notice how la cuenta (from contar 'to count', o→ue) means 'the bill/check' in a restaurant (La cuenta, por favor) AND 'account/realization' inside darse cuenta de!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "the bill / the account",
            "german": "la cuenta"
          },
          {
            "id": "p2",
            "english": "the bill, please",
            "german": "la cuenta, por favor"
          },
          {
            "id": "p3",
            "english": "in fact / actually",
            "german": "de hecho"
          },
          {
            "id": "p4",
            "english": "you are completely right",
            "german": "tienes toda la razón"
          },
          {
            "id": "p5",
            "english": "I am very thirsty",
            "german": "tengo mucha sed"
          }
        ],
        "target_answer": "la cuenta, la cuenta, por favor, de hecho, tienes toda la razón, tengo mucha sed",
        "meaning": "the bill / the account, the bill, please, in fact / actually, you are completely right, I am very thirsty",
        "explanation": "Concrete nouns power everyday Spanish idioms.",
        "id": "es2901_e1"
      },
      {
        "type": "shift_select",
        "prompt": "What are you asking the waiter for when you say '¿Me trae la cuenta, por favor?'?",
        "options": [
          "The bill / check ('the count')",
          "The menu",
          "The salt"
        ],
        "target_answer": "The bill / check ('the count')",
        "meaning": "Will you bring me the bill, please?",
        "explanation": "la cuenta is literally 'the count' of what you ordered.",
        "id": "es2901_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'Will you bring me the bill, please?'",
        "target_answer": "Me traes la cuenta por favor",
        "meaning": "Will you bring me the bill, please?",
        "word_bank": [
          "Me",
          "traes",
          "la",
          "cuenta",
          "por",
          "favor",
          "traer",
          "el",
          "gracias"
        ],
        "explanation": "¿Me traes la cuenta, por favor? (from traer 'to bring').",
        "id": "es2901_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say: 'You are right, I want to eat'",
        "cues": [
          "You are right (you have reason) → Tienes razón",
          "I want to eat → quiero comer"
        ],
        "idea_parts": [
          "You are right → Tienes razón",
          "I want to eat → quiero comer"
        ],
        "target_answer": "Tienes razón, quiero comer",
        "meaning": "You are right, I want to eat",
        "word_bank": [
          "Tienes",
          "razón",
          "quiero",
          "comer",
          "Eres",
          "hambre",
          "como"
        ],
        "explanation": "Tienes razón, quiero comer.",
        "id": "es2901_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "La cuenta por favor y muchas gracias",
        "replays": 2,
        "target_answer": "La cuenta por favor y muchas gracias",
        "meaning": "The bill, please, and thank you very much",
        "cues": [
          "The bill: La cuenta",
          "please: por favor",
          "and thank you very much: y muchas gracias"
        ],
        "explanation": "La cuenta, por favor, y muchas gracias.",
        "affirmation": "Essential restaurant Spanish mastered!",
        "id": "es2901_e5"
      }
    ],
    "summary": {
      "outcome": "Use la cuenta, de hecho, tener razón, and traer in everyday social settings.",
      "use_example": {
        "german": "Tienes razón — ¿me traes la cuenta, por favor?",
        "english": "You are right — will you bring me the bill, please?"
      },
      "takeaway": "la cuenta = 'the bill/check'; traer = 'to bring'.",
      "curiosity_teaser": "Up next ([2902] Arabic Heritage & Cultural Turns): celebrate the Arabic layer of Spanish (ojalá, azul, hasta) and table culture."
    },
    "twist": {
      "prompt": "Assemble: 'The bill, please'",
      "target_answer": "La cuenta por favor",
      "word_bank": [
        "La",
        "cuenta",
        "por",
        "favor",
        "El",
        "cuento",
        "gracias"
      ],
      "explanation": "La cuenta, por favor."
    }
  },
  {
    "id": 2902,
    "slug": "arabic-heritage-cultural-turns",
    "title": "Arabic Heritage & Cultural Turns",
    "subtitle": "ojalá ('inshallah'), hasta ('hatta'), azul ('lazaward'), and la sobremesa",
    "phase": 5,
    "shift_categories": [],
    "word_ids": [
      "ojalá",
      "azul",
      "limón",
      "café",
      "mesa",
      "tener",
      "tengo",
      "amigo",
      "hablar",
      "mañana"
    ],
    "table_word_ids": [
      "ojalá",
      "azul",
      "limón",
      "café",
      "mesa",
      "tener"
    ],
    "hook": {
      "title": "Eight Centuries of Shared History in Your Mouth",
      "content": "Between 711 and 1492, Arabic and Romance lived side by side on the Iberian Peninsula. Whenever you say **ojalá** ('hopefully / God willing'), **azul** ('blue'), **el limón** ('the lemon'), **el azúcar** ('sugar'), **la almohada** ('the pillow'), or **hasta** ('until', as in ¡Hasta mañana! / ¡Hasta luego!), you are speaking the living heritage of Al-Andalus!"
    },
    "pattern": {
      "title": "La Sobremesa: The Untranslatable Art of Staying at the Table",
      "content": "And look at the Spanish compound **la sobremesa** (sobre 'over/after' + mesa 'table'): the cherished time spent lingering at the table talking with friends and family after the meal and coffee are finished!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "hopefully / God willing (Arabic law šá lláh)",
            "german": "ojalá"
          },
          {
            "id": "p2",
            "english": "blue (Arabic lāzaward)",
            "german": "azul"
          },
          {
            "id": "p3",
            "english": "lemon (Arabic līmūn + -ón)",
            "german": "el limón"
          },
          {
            "id": "p4",
            "english": "until tomorrow (Arabic ḥattā → hasta)",
            "german": "hasta mañana"
          },
          {
            "id": "p5",
            "english": "the table (root of la sobremesa)",
            "german": "la mesa"
          }
        ],
        "target_answer": "ojalá, azul, el limón, hasta mañana, la mesa",
        "meaning": "hopefully / God willing (Arabic law šá lláh), blue (Arabic lāzaward), lemon (Arabic līmūn + -ón), until tomorrow (Arabic ḥattā → hasta), the table (root of la sobremesa)",
        "explanation": "Arabic contributed roughly 4,000 words and expressions to Spanish.",
        "id": "es2902_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Which everyday Spanish preposition meaning 'until' (as in '¡___ mañana!' and '¡___ la vista!') came from Arabic 'ḥattā'?",
        "options": [
          "hasta",
          "para",
          "desde"
        ],
        "target_answer": "hasta",
        "meaning": "until",
        "explanation": "Arabic ḥattā became Old Spanish fasta and modern Spanish hasta (with silent h-)!",
        "id": "es2902_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'Goodbye, until tomorrow!'",
        "target_answer": "Adiós hasta mañana",
        "meaning": "Goodbye, until tomorrow!",
        "word_bank": [
          "Adiós",
          "hasta",
          "mañana",
          "por",
          "ayer",
          "desde"
        ],
        "explanation": "¡Adiós, hasta mañana!",
        "id": "es2902_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say: 'Hopefully you have time to speak with my friend'",
        "cues": [
          "Hopefully you have (subjunctive) → Ojalá tengas",
          "time to (in order to) speak → tiempo para hablar",
          "with my friend → con mi amigo"
        ],
        "idea_parts": [
          "Hopefully you have time → Ojalá tengas tiempo",
          "to speak with my friend → para hablar con mi amigo"
        ],
        "target_answer": "Ojalá tengas tiempo para hablar con mi amigo",
        "meaning": "I hope you have time to speak with my friend",
        "word_bank": [
          "Ojalá",
          "tengas",
          "tiempo",
          "para",
          "hablar",
          "con",
          "mi",
          "amigo",
          "tienes",
          "por",
          "a"
        ],
        "explanation": "¡Ojalá tengas tiempo para hablar con mi amigo!",
        "id": "es2902_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Agua con limón en la mesa azul",
        "replays": 2,
        "target_answer": "Agua con limón en la mesa azul",
        "meaning": "Water with lemon on the blue table",
        "cues": [
          "Water with lemon: Agua con limón",
          "on the table: en la mesa",
          "blue: azul"
        ],
        "explanation": "Agua con limón en la mesa azul — Latin and Arabic roots side by side!",
        "affirmation": "Arabic & Latin synthesis complete!",
        "id": "es2902_e5"
      }
    ],
    "summary": {
      "outcome": "Recognize Arabic-heritage vocabulary (ojalá, azul, limón, hasta) and use it in full sentences.",
      "use_example": {
        "german": "¡Adiós, hasta mañana — ojalá tengas un buen día!",
        "english": "Goodbye, until tomorrow — I hope you have a great day!"
      },
      "takeaway": "Spanish is a tapestry of Latin structure and rich historical layers including Arabic and Greek.",
      "curiosity_teaser": "Up next ([30] Capstone: El Puente Reading): bring all 30 topics together in a connected Madrid narrative!"
    },
    "twist": {
      "prompt": "Assemble: 'Water with lemon, please'",
      "target_answer": "Agua con limón por favor",
      "word_bank": [
        "Agua",
        "con",
        "limón",
        "por",
        "favor",
        "sin",
        "leche",
        "gracias"
      ],
      "explanation": "Agua con limón, por favor."
    }
  },
  {
    "id": 30,
    "slug": "capstone-el-puente-reading",
    "title": "Capstone: El Puente Reading",
    "subtitle": "One connected Madrid story synthesizing all 9 conversion bridges and key structures",
    "phase": 5,
    "shift_categories": [
      "cion",
      "dad",
      "mente",
      "ar_engine",
      "ico",
      "al",
      "f_to_h",
      "ct_to_ch",
      "pl_cl_fl_to_ll"
    ],
    "word_ids": [
      "ciudad",
      "universidad",
      "tradición",
      "confirmación",
      "perfectamente",
      "mágico",
      "central",
      "hecho",
      "lleno",
      "gustar",
      "gustaría",
      "conocer"
    ],
    "table_word_ids": [
      "ciudad",
      "universidad",
      "tradición",
      "confirmación",
      "perfectamente",
      "mágico"
    ],
    "hook": {
      "title": "Look How Far Across the Bridge You Have Walked",
      "content": "Thirty topics ago, you started with el pastel, el café, and lo quiero. Today you command all **9 conversion and sound-shift families** (-ción, -dad, -mente, -ar, -ico, -al, f→h, ct→ch, pl/cl→ll), both verbs for 'to be' (ser vs estar), all three past perspectives (he hablado, hablé/fue, hablaba/era/estaba), the near future (voy a), double object pronouns (me lo, se lo), the personal 'a', saber vs conocer, gustar/encantar, the conditional (-ía), and the opposite-vowel subjunctive!"
    },
    "pattern": {
      "title": "Reading & Producing Connected Spanish Without Translating Word-by-Word",
      "content": "Notice how all these pieces flow together effortlessly in a real Madrid narrative: *Actualmente vivo en Madrid, una ciudad mágica y hermosa. Conozco a muchos amigos en la universidad central. Ayer confirmé la reservación, fuimos al restaurante y comimos muy bien. ¡Me encanta hablar español!*"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "-tion → -ción (100% feminine)",
            "german": "la confirmación / la tradición"
          },
          {
            "id": "p2",
            "english": "-ty → -dad (100% feminine)",
            "german": "la ciudad / la universidad"
          },
          {
            "id": "p3",
            "english": "feminine adj. + -mente (-ly)",
            "german": "perfectamente / exactamente"
          },
          {
            "id": "p4",
            "english": "-ic → accented -ico & -al → invariable -al",
            "german": "mágico / central"
          },
          {
            "id": "p5",
            "english": "f→h, ct→ch, pl/cl→ll shifts",
            "german": "hecho / noche / lleno"
          },
          {
            "id": "p6",
            "english": "inverted liking & polite conditional",
            "german": "me encanta / me gustaría"
          }
        ],
        "target_answer": "la confirmación / la tradición, la ciudad / la universidad, perfectamente / exactamente, mágico / central, hecho / noche / lleno, me encanta / me gustaría",
        "meaning": "-tion → -ción (100% feminine), -ty → -dad (100% feminine), feminine adj. + -mente (-ly), -ic → accented -ico & -al → invariable -al, f→h, ct→ch, pl/cl→ll shifts, inverted liking & polite conditional",
        "explanation": "All 9 conversion bridges and core grammatical engines work as one integrated system.",
        "id": "es30_e1"
      },
      {
        "type": "shift_select",
        "prompt": "In 'Actualmente vivo en Madrid desde hace dos años', why is 'vivo' in the present tense and what does 'actualmente' mean?",
        "options": [
          "actualmente means 'currently', and Spanish uses the present tense (vivo) with desde hace for actions that began in the past and continue right now!",
          "actualmente means 'actually', and vivo is past tense",
          "actualmente means 'formerly'"
        ],
        "target_answer": "actualmente means 'currently', and Spanish uses the present tense (vivo) with desde hace for actions that began in the past and continue right now!",
        "meaning": "Currently I have lived in Madrid for two years",
        "explanation": "Two signature Spanish rules in one sentence: false friend actualmente ('currently') + present-tense duration with desde hace!",
        "id": "es30_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I love this magical city and I understand what you say'",
        "target_answer": "Me encanta esta ciudad mágica y comprendo lo que dices",
        "meaning": "I love this magical city and I understand what you say",
        "word_bank": [
          "Me",
          "encanta",
          "esta",
          "ciudad",
          "mágica",
          "y",
          "comprendo",
          "lo",
          "que",
          "dices",
          "encantan",
          "este",
          "mágico"
        ],
        "explanation": "Me encanta esta ciudad mágica + y comprendo lo que dices.",
        "id": "es30_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say: 'I have the confirmation and I am going to give it to him today'",
        "cues": [
          "I have the confirmation → Tengo la confirmación",
          "and I am going to give it (fem. la!) to him (le → se!) today → y se la voy a dar hoy"
        ],
        "idea_parts": [
          "I have the confirmation → Tengo la confirmación",
          "and I am going to give it to him today → y se la voy a dar hoy"
        ],
        "target_answer": "Tengo la confirmación y se la voy a dar hoy",
        "meaning": "I have the confirmation and I am going to give it to him today",
        "word_bank": [
          "Tengo",
          "la",
          "confirmación",
          "y",
          "se",
          "la",
          "voy",
          "a",
          "dar",
          "hoy",
          "le",
          "lo",
          "de"
        ],
        "explanation": "Tengo la confirmación y se la voy a dar hoy — combining tener, -ción, se la, and ir a + infinitive!",
        "diagnosis": {
          "slip": "used se lo instead of se la for la confirmación",
          "cue": "Because la confirmación is feminine, 'it' is la: se la voy a dar."
        },
        "id": "es30_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Me gustaría visitar la universidad central mañana",
        "replays": 2,
        "target_answer": "Me gustaría visitar la universidad central mañana",
        "meaning": "I would like to visit the central university tomorrow",
        "cues": [
          "I would like: Me gustaría",
          "to visit the university: visitar la universidad",
          "central tomorrow: central mañana"
        ],
        "explanation": "Me gustaría visitar la universidad central mañana.",
        "affirmation": "You just synthesized the conditional, -ar verb, -dad noun, and -al adjective in one breath!",
        "id": "es30_e5"
      }
    ],
    "summary": {
      "outcome": "Synthesize all 9 Spanish conversion bridges and core grammatical structures in connected reading and production.",
      "use_example": {
        "german": "Me encanta esta ciudad mágica, comprendo perfectamente lo que dices y se lo voy a explicar a mi amigo.",
        "english": "I love this magical city, I understand perfectly what you say, and I am going to explain it to my friend."
      },
      "takeaway": "You don't memorize Spanish — you reconstruct it live from the Latin and structural bridges you already own.",
      "curiosity_teaser": "Up next ([3001] A Day in Madrid: Reading): read and build a connected narrative through a full day in Madrid."
    },
    "twist": {
      "prompt": "Assemble: 'Hopefully you have a fantastic day!'",
      "target_answer": "Ojalá tengas un día fantástico",
      "word_bank": [
        "Ojalá",
        "tengas",
        "un",
        "día",
        "fantástico",
        "tienes",
        "una",
        "fantástica"
      ],
      "explanation": "¡Ojalá tengas un día fantástico!"
    },
    "payoff": {
      "ofLesson": 1,
      "text": "From 'Quiero el pastel' and 'Lo quiero' in Topic 1 to 'Tengo la confirmación y se la voy a dar hoy' in Topic 30 — the bridge is yours!"
    }
  },
  {
    "id": 3001,
    "slug": "a-day-in-madrid-reading",
    "title": "A Day in Madrid: Reading",
    "subtitle": "Connected narrative in Madrid combining ser/estar, preterite/imperfect, gustar, and object pronouns",
    "phase": 5,
    "shift_categories": [
      "cion",
      "dad",
      "ico",
      "al"
    ],
    "word_ids": [
      "ciudad",
      "hotel",
      "restaurante",
      "café",
      "estaba",
      "era",
      "fue",
      "hablé",
      "comí",
      "encantar",
      "amigo"
    ],
    "table_word_ids": [
      "ciudad",
      "hotel",
      "restaurante",
      "café",
      "estaba",
      "era"
    ],
    "hook": {
      "title": "Morning to Night in Madrid",
      "content": "Follow the story of a day in Madrid and watch how every tense and verb choice tells part of the story:\n• *Por la mañana me levanté a las ocho.* (Preterite dot: I got up at eight.)\n• *El día era hermoso y el café estaba caliente.* (Imperfect background: The day was beautiful and the coffee was hot.)\n• *Visité a mi mejor amigo y comí en un restaurante central.* (Personal 'a' + preterite events.)\n• *¡La visita fue un éxito y me encanta esta ciudad!* (Preterite verdict fue + inverted encantar!)"
    },
    "pattern": {
      "title": "Reading for Structure and Meaning",
      "content": "Notice how era describes the day's ongoing quality, estaba describes the coffee's temperature state, and fue judges the whole completed visit as a success!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "the day was beautiful (ongoing background trait)",
            "german": "el día era hermoso"
          },
          {
            "id": "p2",
            "english": "the coffee was hot (ongoing past state)",
            "german": "el café estaba caliente"
          },
          {
            "id": "p3",
            "english": "the visit was a success (verdict on completed event)",
            "german": "la visita fue un éxito"
          },
          {
            "id": "p4",
            "english": "I spoke with my best friend",
            "german": "hablé con mi mejor amigo"
          },
          {
            "id": "p5",
            "english": "I love this magical city",
            "german": "me encanta esta ciudad mágica"
          }
        ],
        "target_answer": "el día era hermoso, el café estaba caliente, la visita fue un éxito, hablé con mi mejor amigo, me encanta esta ciudad mágica",
        "meaning": "the day was beautiful (ongoing background trait), the coffee was hot (ongoing past state), the visit was a success (verdict on completed event), I spoke with my best friend, I love this magical city",
        "explanation": "era, estaba, and fue each play their distinct role in a past narrative.",
        "id": "es3001_e1"
      },
      {
        "type": "shift_select",
        "prompt": "In 'El día era hermoso, el café estaba caliente y la cena fue fantástica', why do all three English 'was' clauses use a different Spanish verb?",
        "options": [
          "era = ongoing past characteristic (ser); estaba = ongoing past thermal state (estar); fue = final verdict on a completed past event (preterite of ser)!",
          "They are interchangeable synonyms",
          "Because día, café, and cena have different genders"
        ],
        "target_answer": "era = ongoing past characteristic (ser); estaba = ongoing past thermal state (estar); fue = final verdict on a completed past event (preterite of ser)!",
        "meaning": "Three lenses on 'was'",
        "explanation": "Spanish distinguishes essence vs state (ser vs estar) AND ongoing background vs completed event (imperfect vs preterite)!",
        "id": "es3001_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'Yesterday I spoke with my friend and ate at the restaurant'",
        "target_answer": "Ayer hablé con mi amigo y comí en el restaurante",
        "meaning": "Yesterday I spoke with my friend and ate at the restaurant",
        "word_bank": [
          "Ayer",
          "hablé",
          "con",
          "mi",
          "amigo",
          "y",
          "comí",
          "en",
          "el",
          "restaurante",
          "hablaba",
          "como",
          "al"
        ],
        "explanation": "Ayer hablé con mi amigo y comí en el restaurante.",
        "id": "es3001_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that the hotel was central and the city was beautiful (ongoing past descriptions with era)",
        "cues": [
          "The hotel was central → El hotel era central",
          "and the city was beautiful → y la ciudad era hermosa"
        ],
        "idea_parts": [
          "The hotel was central → El hotel era central",
          "and the city was beautiful → y la ciudad era hermosa"
        ],
        "target_answer": "El hotel era central y la ciudad era hermosa",
        "meaning": "The hotel was central and the city was beautiful",
        "word_bank": [
          "El",
          "hotel",
          "era",
          "central",
          "y",
          "la",
          "ciudad",
          "era",
          "hermosa",
          "estaba",
          "fue",
          "hermoso"
        ],
        "explanation": "El hotel era central y la ciudad era hermosa.",
        "id": "es3001_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Ayer fue un día mágico en Madrid",
        "replays": 2,
        "target_answer": "Ayer fue un día mágico en Madrid",
        "meaning": "Yesterday was a magical day in Madrid",
        "cues": [
          "Yesterday was (completed day): Ayer fue",
          "a magical day: un día mágico",
          "in Madrid: en Madrid"
        ],
        "explanation": "Ayer fue un día mágico en Madrid.",
        "affirmation": "Madrid narrative synthesis complete!",
        "id": "es3001_e5"
      }
    ],
    "summary": {
      "outcome": "Combine era, estaba, fue, hablé, comí, and me encanta in connected narrative passages.",
      "use_example": {
        "german": "El día era hermoso, el café estaba caliente y ayer fue un día mágico en Madrid.",
        "english": "The day was beautiful, the coffee was hot, and yesterday was a magical day in Madrid."
      },
      "takeaway": "era = ongoing trait; estaba = ongoing state/location; fue = completed event verdict.",
      "curiosity_teaser": "Up next ([3002] Trap Watch: False Friends in the Wild): test yourself against the full Spanish False Friends deck!"
    },
    "twist": {
      "prompt": "Assemble: 'The coffee was hot and the cake was delicious'",
      "target_answer": "El café estaba caliente y el pastel estaba rico",
      "word_bank": [
        "El",
        "café",
        "estaba",
        "caliente",
        "y",
        "el",
        "pastel",
        "estaba",
        "rico",
        "era",
        "fue",
        "rica"
      ],
      "explanation": "Both hotness and tasting delicious are states, so both use estaba!"
    }
  },
  {
    "id": 3002,
    "slug": "trap-watch-false-friends-in-the-wild",
    "title": "Trap Watch: False Friends in the Wild",
    "subtitle": "Mastering all 18 false friends (actualmente, embarazada, librería, éxito, asistir, recordar, sensible, sopa, realizar, lectura, delito, compromiso)",
    "phase": 5,
    "shift_categories": [
      "mente"
    ],
    "word_ids": [
      "actualmente",
      "embarazada",
      "librería",
      "éxito",
      "asistir",
      "recordar",
      "sensible",
      "sopa",
      "libro",
      "hermano"
    ],
    "table_word_ids": [
      "actualmente",
      "embarazada",
      "librería",
      "éxito",
      "asistir",
      "recordar"
    ],
    "hook": {
      "title": "Disarming Every False Friend on the Trail",
      "content": "Because your English-to-Spanish conversion engine is so powerful (unlocking 95%+ of Latinate cognates accurately), knowing the small handful of **False Friends** makes you bulletproof:\n• **actualmente** = currently (actually = *en realidad / de hecho*)\n• **embarazada** = pregnant (embarrassed = *avergonzado*)\n• **la librería** = bookstore (library = *la biblioteca*)\n• **el éxito** = success (exit = *la salida*)\n• **asistir a** = to attend (to assist/help = *ayudar*)\n• **recordar** = to remember (to record = *grabar*)\n• **sensible** = sensitive (sensible = *sensato*)\n• **la sopa** = soup (soap = *el jabón*)\n• **realizar** = to carry out/fulfill (to realize = *darse cuenta de*)\n• **la lectura** = reading (lecture = *la conferencia*)\n• **el delito** = crime/offense (delight = *la delicia*)\n• **el compromiso** = commitment/obligation/engagement!"
    },
    "pattern": {
      "title": "Why False Friends Happened",
      "content": "Every false friend started as a true Latin cognate whose meaning narrowed differently in Madrid and London: Latin *exitus* meant 'outcome' (Spanish kept 'good outcome = success' as *éxito*; English kept 'way out = exit')."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "currently (not actually)",
            "german": "actualmente"
          },
          {
            "id": "p2",
            "english": "pregnant (not embarrassed)",
            "german": "embarazada"
          },
          {
            "id": "p3",
            "english": "bookstore (not lending library)",
            "german": "la librería"
          },
          {
            "id": "p4",
            "english": "success (not exit doorway)",
            "german": "el éxito"
          },
          {
            "id": "p5",
            "english": "to attend (not assist/help)",
            "german": "asistir"
          },
          {
            "id": "p6",
            "english": "to remember (not record audio)",
            "german": "recordar"
          }
        ],
        "target_answer": "actualmente, embarazada, la librería, el éxito, asistir, recordar",
        "meaning": "currently (not actually), pregnant (not embarrassed), bookstore (not lending library), success (not exit doorway), to attend (not assist/help), to remember (not record audio)",
        "explanation": "Know both what the Spanish word really means AND how to express the English look-alike!",
        "id": "es3002_e1"
      },
      {
        "type": "shift_select",
        "prompt": "A colleague says 'Hoy tengo un compromiso familiar y no puedo asistir'. What are they telling you?",
        "options": [
          "Today I have a family commitment/obligation and I cannot attend",
          "Today I had a family compromise and I cannot help",
          "Today I am embarrassed and cannot record"
        ],
        "target_answer": "Today I have a family commitment/obligation and I cannot attend",
        "meaning": "Today I have a family commitment and cannot attend",
        "explanation": "un compromiso is a commitment/obligation (or engagement), and asistir is 'to attend'!",
        "id": "es3002_e2"
      },
      {
        "type": "shift_select",
        "prompt": "What is the difference between 'sensible' and 'la sopa' in Spanish?",
        "options": [
          "sensible = 'sensitive (tender-hearted)'; la sopa = 'soup' (never soap!)",
          "sensible = 'level-headed'; la sopa = 'soap'",
          "Both are adjectives"
        ],
        "target_answer": "sensible = 'sensitive (tender-hearted)'; la sopa = 'soup' (never soap!)",
        "meaning": "sensitive and soup",
        "explanation": "Es una persona muy sensible = 'He/she is a very sensitive person'; la sopa está caliente = 'the soup is hot'.",
        "id": "es3002_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I want to buy the book at the bookstore'",
        "target_answer": "Quiero comprar el libro en la librería",
        "meaning": "I want to buy the book at the bookstore",
        "word_bank": [
          "Quiero",
          "comprar",
          "el",
          "libro",
          "en",
          "la",
          "librería",
          "biblioteca",
          "asistir"
        ],
        "explanation": "You buy books at la librería (bookstore) and borrow them at la biblioteca (library)!",
        "id": "es3002_e4"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that you want to remember this magical night",
        "cues": [
          "I want to remember → Quiero recordar",
          "this (feminine) magical night → esta noche mágica"
        ],
        "idea_parts": [
          "I want to remember → Quiero recordar",
          "this magical night → esta noche mágica"
        ],
        "target_answer": "Quiero recordar esta noche mágica",
        "meaning": "I want to remember this magical night",
        "word_bank": [
          "Quiero",
          "recordar",
          "esta",
          "noche",
          "mágica",
          "este",
          "mágico",
          "asistir"
        ],
        "explanation": "Quiero recordar esta noche mágica.",
        "id": "es3002_e5"
      }
    ],
    "summary": {
      "outcome": "Spot and accurately deploy Spanish's key false friends across conversation and reading.",
      "use_example": {
        "german": "Actualmente vivo en Madrid, quiero asistir a la reunión y comprar un libro en la librería.",
        "english": "Currently I live in Madrid, I want to attend the meeting, and buy a book at the bookstore."
      },
      "takeaway": "Always pause on actualmente (currently), librería (bookstore), éxito (success), asistir (attend), recordar (remember), and embarazada (pregnant).",
      "curiosity_teaser": "Up next ([3003] The Whole-Trail Review Game): celebrate completing El Puente with a grand multi-mode synthesis challenge!"
    },
    "twist": {
      "prompt": "Assemble: 'He is a very sensitive person'",
      "target_answer": "Es una persona muy sensible",
      "word_bank": [
        "Es",
        "una",
        "persona",
        "muy",
        "sensible",
        "Está",
        "un",
        "sopa"
      ],
      "explanation": "la persona is always feminine (una persona muy sensible), even when referring to a man!"
    }
  },
  {
    "id": 3003,
    "slug": "whole-trail-review-game",
    "title": "The Whole-Trail Review Game",
    "subtitle": "Mixed-mode synthesis across all 30 topics of El Puente",
    "phase": 5,
    "shift_categories": [
      "cion",
      "dad",
      "mente",
      "ar_engine",
      "ico",
      "al",
      "f_to_h",
      "ct_to_ch",
      "pl_cl_fl_to_ll"
    ],
    "word_ids": [
      "confirmar",
      "perfectamente",
      "saber",
      "conocer",
      "gustar",
      "gustaría",
      "ojalá",
      "poner",
      "mantener",
      "hecho",
      "se",
      "lo"
    ],
    "table_word_ids": [
      "confirmar",
      "perfectamente",
      "saber",
      "conocer",
      "gustar",
      "gustaría"
    ],
    "hook": {
      "title": "The Complete Architecture of Spanish in Your Hands",
      "content": "In this final capstone lesson of the main trail, we put every major mechanism on stage together: conversion bridges, verb dynasties, ser vs estar, preterite vs imperfect vs present perfect, desde hace, por vs para, saber vs conocer, double object pronouns (se lo), gustar, the conditional, and the subjunctive!"
    },
    "pattern": {
      "title": "Thinking in Spanish, Not Memorizing",
      "content": "Notice how every sentence you build is assembled from clear logical blocks rather than memorized phrasebook lines."
    },
    "exercises": [
      {
        "type": "morpheme_tiles",
        "prompt": "Assemble the polite conditional 'would please / would like' from its infinitive and ending:",
        "tile_options": [
          "gustar",
          "ía",
          "aba",
          "ó"
        ],
        "target_answer": "gustaría",
        "meaning": "me gustaría (I would like)",
        "explanation": "Full infinitive gustar + -ía = gustaría.",
        "id": "es3003_e1"
      },
      {
        "type": "family_matrix",
        "prompt": "Complete the Verb Dynasty Matrix by writing the 1st-person present ('yo') of 'suponer' ('I suppose'):",
        "rows": [
          "poner (to put)",
          "proponer (to propose)",
          "suponer (to suppose)"
        ],
        "columns": [
          "Infinitive (-poner)",
          "Present 'yo' (-pongo)"
        ],
        "cells": [
          [
            {
              "german": "poner",
              "english": "to put"
            },
            {
              "german": "pongo",
              "english": "I put"
            }
          ],
          [
            {
              "german": "proponer",
              "english": "to propose"
            },
            {
              "german": "propongo",
              "english": "I propose"
            }
          ],
          [
            {
              "german": "suponer",
              "english": "to suppose"
            },
            {
              "german": "supongo",
              "english": "I suppose"
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
        "target_answer": "supongo",
        "meaning": "I suppose (yo supongo)",
        "row_law": "Every member of the -poner dynasty conjugates identically to poner.",
        "column_law": "Column 1 is the infinitive; Column 2 is the 1st-person singular present (-pongo).",
        "explanation": "poner → pongo, proponer → propongo, suponer → supongo!",
        "id": "es3003_e2"
      },
      {
        "type": "variant_english",
        "prompt": "Select every English sentence that matches the meaning of 'Me gustaría visitar Madrid mañana':",
        "german": "Me gustaría visitar Madrid mañana",
        "meaning": "I would like / I'd love to visit Madrid tomorrow",
        "renderings": [
          "I would like to visit Madrid tomorrow",
          "I'd like to visit Madrid tomorrow"
        ],
        "traps": [
          "I visited Madrid yesterday",
          "You have to visit Madrid today"
        ],
        "target_answer": "I would like to visit Madrid tomorrow",
        "explanation": "Me gustaría + infinitive expresses a polite conditional wish ('I would like to...').",
        "id": "es3003_e3"
      },
      {
        "type": "literal_gloss",
        "prompt": "Which English word-for-word blueprint mirrors Spanish 'Se lo voy a dar a mi madre'?",
        "german": "Se lo voy a dar a mi madre",
        "natural": "I am going to give it to my mother",
        "options": [
          "I am going to give it to my mother",
          "To-her it I-go to to-give to my mother",
          "Herself it goes to give my mother",
          "It to her I give to my mother"
        ],
        "target_answer": "To-her it I-go to to-give to my mother",
        "meaning": "I am going to give it to my mother (literal Spanish blueprint: To-her it I-go to to-give to my mother)",
        "explanation": "Se ('To-her', replacing le before lo) + lo ('it') + voy a dar ('I-go to to-give') + a mi madre ('to my mother').",
        "id": "es3003_e4"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say: 'I know Madrid, I know your brother, and I know where the station is'",
        "cues": [
          "I know Madrid (place → conocer) → Conozco Madrid,",
          "I know your brother (person → conocer + personal a!) → conozco a tu hermano",
          "and I know where it is (fact/clause → saber) → y sé dónde está la estación"
        ],
        "idea_parts": [
          "I know Madrid → Conozco Madrid,",
          "I know your brother → conozco a tu hermano",
          "and I know where the station is → y sé dónde está la estación"
        ],
        "target_answer": "Conozco Madrid, conozco a tu hermano y sé dónde está la estación",
        "meaning": "I know Madrid, I know your brother, and I know where the station is",
        "word_bank": [
          "Conozco",
          "Madrid",
          "conozco",
          "a",
          "tu",
          "hermano",
          "y",
          "sé",
          "dónde",
          "está",
          "la",
          "estación",
          "Sé",
          "el",
          "es"
        ],
        "explanation": "Conozco Madrid (city), conozco a tu hermano (person + a), y sé dónde está la estación (fact clause + estar for location)!",
        "id": "es3003_e5"
      }
    ],
    "summary": {
      "outcome": "Integrate all conversion bridges, verb tenses, pronoun systems, and moods across the entire Spanish course.",
      "use_example": {
        "german": "Conozco Madrid, comprendo perfectamente lo que dices y ojalá tengas tiempo para celebrar.",
        "english": "I know Madrid, I understand perfectly what you say, and I hope you have time to celebrate."
      },
      "takeaway": "You now own the structural engine of Spanish — every new word you hear will snap into this framework.",
      "curiosity_teaser": "Explore the 15 Support Branches along the trail to practice travel, tapas, boot verbs, professions, and daily life in depth!"
    },
    "twist": {
      "prompt": "Assemble: 'I understand perfectly what you want'",
      "target_answer": "Comprendo perfectamente lo que quieres",
      "word_bank": [
        "Comprendo",
        "perfectamente",
        "lo",
        "que",
        "quieres",
        "perfecto",
        "la",
        "quiero"
      ],
      "explanation": "Comprendo perfectamente lo que quieres."
    }
  },
  {
    "id": 5011,
    "slug": "hola-y-gracias",
    "title": "¡Hola! y Gracias",
    "subtitle": "Greetings, thanks and politeness in dialogue drills; social warmth culture",
    "phase": 1,
    "shift_categories": [],
    "word_ids": [
      "hola",
      "gracias",
      "mucho",
      "por_favor",
      "adiós",
      "usted",
      "estás",
      "está"
    ],
    "table_word_ids": [
      "hola",
      "gracias",
      "mucho",
      "por_favor",
      "adiós",
      "usted"
    ],
    "hook": {
      "title": "The Warmth of Iberian and Latin American Greeting",
      "content": "Everyday pleasantries open every door in Spain and Latin America. ¡Hola! greets friends and strangers alike, with an initial H that is 100% silent. And notice why Spanish thanks are always plural: gracias (from Latin grātia 'grace/favor') literally means 'graces to you'!"
    },
    "pattern": {
      "title": "Polite Formulas in Real Context",
      "content": "por favor is literally 'by favor' ('as a favor'). And when thanking someone warmly, muchas gracias uses feminine plural muchas to agree with las gracias!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "hello, hi (silent H)",
            "german": "hola"
          },
          {
            "id": "p2",
            "english": "thank you (lit. graces)",
            "german": "gracias"
          },
          {
            "id": "p3",
            "english": "thank you very much",
            "german": "muchas gracias"
          },
          {
            "id": "p4",
            "english": "please (lit. by favor)",
            "german": "por favor"
          },
          {
            "id": "p5",
            "english": "goodbye (to God)",
            "german": "adiós"
          },
          {
            "id": "p6",
            "english": "you (formal)",
            "german": "usted"
          }
        ],
        "target_answer": "hola, gracias, muchas gracias, por favor, adiós, usted",
        "meaning": "hello, hi (silent H), thank you (lit. graces), thank you very much, please (lit. by favor), goodbye (to God), you (formal)",
        "explanation": "hola has a silent H; adiós comes from a + Dios ('to God', just like French adieu).",
        "id": "es5011_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Why do we say 'Muchas gracias' with feminine plural '-as'?",
        "options": [
          "Because la gracia ('grace/favor') is a feminine noun in the plural (las gracias)",
          "Because muchas is an adverb",
          "Because gracias is a verb"
        ],
        "target_answer": "Because la gracia ('grace/favor') is a feminine noun in the plural (las gracias)",
        "meaning": "thank you very much",
        "explanation": "las gracias is feminine plural, so mucho becomes muchas: muchas gracias.",
        "id": "es5011_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'A coffee, please'",
        "target_answer": "Un café, por favor",
        "meaning": "A coffee, please",
        "word_bank": [
          "Un",
          "café",
          "por",
          "favor",
          "Una",
          "gracias",
          "adiós"
        ],
        "explanation": "Un café, por favor — the classic Spanish café order.",
        "id": "es5011_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "greet a friend warmly: 'Hello, how are you?'",
        "cues": [
          "Hello (silent H) → Hola,",
          "how are you (informal) → cómo estás"
        ],
        "idea_parts": [
          "Hello → Hola,",
          "how are you → cómo estás"
        ],
        "target_answer": "Hola, cómo estás",
        "meaning": "Hello, how are you?",
        "word_bank": [
          "Hola",
          "cómo",
          "estás",
          "gracias",
          "usted",
          "eres"
        ],
        "explanation": "¡Hola, ¿cómo estás?! — everyday informal greeting.",
        "id": "es5011_e4"
      },
      {
        "type": "literal_gloss",
        "prompt": "Which English word-for-word blueprint mirrors Spanish 'Muchas gracias, por favor'?",
        "german": "Muchas gracias, por favor",
        "natural": "Many thanks, please",
        "options": [
          "Many thanks, please",
          "Many graces, by favor",
          "Much thank you, for please",
          "Very thanks, for favor"
        ],
        "target_answer": "Many graces, by favor",
        "meaning": "Many thanks, please (literal Spanish blueprint: Many graces, by favor)",
        "explanation": "Muchas gracias ('Many graces') + por favor ('by favor').",
        "id": "es5011_e5"
      }
    ],
    "summary": {
      "outcome": "Greet, thank, and make polite requests with authentic Spanish formulas.",
      "use_example": {
        "german": "¡Hola! Un café, por favor. — Muchas gracias.",
        "english": "Hello! A coffee, please. — Thank you very much."
      },
      "takeaway": "gracias is feminine plural ('graces'), so 'thank you very much' is muchas gracias.",
      "curiosity_teaser": "Up next ([5012] The Alphabet & Me llamo): introduce yourself with reflexive me llamo."
    },
    "twist": {
      "prompt": "Assemble: 'Goodbye, thank you very much'",
      "target_answer": "Adiós, muchas gracias",
      "word_bank": [
        "Adiós",
        "muchas",
        "gracias",
        "por",
        "favor",
        "muchos"
      ],
      "explanation": "¡Adiós, muchas gracias!"
    }
  },
  {
    "id": 5012,
    "slug": "alphabet-me-llamo",
    "title": "The Alphabet & Me llamo",
    "subtitle": "El alfabeto, spelling your name, me llamo — introducing yourself with taught pieces",
    "phase": 1,
    "shift_categories": [
      "pl_cl_fl_to_ll"
    ],
    "word_ids": [
      "llamar",
      "me_llamo",
      "cómo",
      "letra",
      "buenos_días",
      "buenas_tardes",
      "buenas_noches"
    ],
    "table_word_ids": [
      "llamar",
      "me_llamo",
      "cómo",
      "letra",
      "buenos_días",
      "buenas_tardes"
    ],
    "hook": {
      "title": "Introducing Yourself with an Action: Me Llamo",
      "content": "English introduces with a noun ('My name is Alex'). Spanish introduces with an active verb: **Me llamo Alex** — word for word, **'I call myself Alex'**! The verb is llamar, descended from Latin clāmāre ('to call/shout') — the exact same root behind English 'claim', 'clamor', and 'exclaim'!"
    },
    "pattern": {
      "title": "Latin cl- Shifted to Spanish ll-",
      "content": "Whenever a Latin word began with cl- or pl-, Spanish softened it into ll-: clāmāre → llamar ('to call'), clāvis → llave ('key'), pluvia → lluvia ('rain')."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "to call (claim/clamor)",
            "german": "llamar"
          },
          {
            "id": "p2",
            "english": "my name is (I call myself)",
            "german": "me llamo"
          },
          {
            "id": "p3",
            "english": "what is your name? (how do you call yourself?)",
            "german": "¿cómo te llamas?"
          },
          {
            "id": "p4",
            "english": "good morning (masculine plural!)",
            "german": "buenos días"
          },
          {
            "id": "p5",
            "english": "good afternoon (feminine plural)",
            "german": "buenas tardes"
          },
          {
            "id": "p6",
            "english": "the letter (of the alphabet)",
            "german": "la letra"
          }
        ],
        "target_answer": "llamar, me llamo, ¿cómo te llamas?, buenos días, buenas tardes, la letra",
        "meaning": "to call (claim/clamor), my name is (I call myself), what is your name? (how do you call yourself?), good morning (masculine plural!), good afternoon (feminine plural), the letter (of the alphabet)",
        "explanation": "llamar (cl- → ll-) powers me llamo and ¿cómo te llamas?",
        "id": "es5012_e1"
      },
      {
        "type": "reverse_cognate",
        "prompt": "Spanish llamar ('to call', from Latin clāmāre via cl- → ll-) shares its root with which English verb meaning 'to assert or call something one's own' (and 'ex-___')?",
        "target_answer": "claim",
        "meaning": "to claim or exclaim is literally Latin clāmāre ('to call out')!",
        "explanation": "Latin clāmāre gave English claim, exclaim, clamor, and Spanish llamar.",
        "id": "es5012_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'Good morning, my name is Alex'",
        "target_answer": "Buenos días, me llamo Alex",
        "meaning": "Good morning, my name is Alex",
        "word_bank": [
          "Buenos",
          "días",
          "me",
          "llamo",
          "Alex",
          "Buenas",
          "tardes",
          "te"
        ],
        "explanation": "¡Buenos días, me llamo Alex!",
        "id": "es5012_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "ask someone their name: 'What is your name? (How do you call yourself?)'",
        "cues": [
          "How → ¿Cómo",
          "yourself → te",
          "you call → llamas?"
        ],
        "idea_parts": [
          "How → Cómo",
          "do you call yourself → te llamas"
        ],
        "target_answer": "Cómo te llamas",
        "meaning": "What is your name?",
        "word_bank": [
          "Cómo",
          "te",
          "llamas",
          "me",
          "llamo",
          "Dónde"
        ],
        "explanation": "¿Cómo te llamas? — literally 'How do you call yourself?'.",
        "id": "es5012_e4"
      },
      {
        "type": "literal_gloss",
        "prompt": "Which English word-for-word blueprint mirrors Spanish 'Me llamo Alex'?",
        "german": "Me llamo Alex",
        "natural": "My name is Alex",
        "options": [
          "My name is Alex",
          "Myself I-call Alex",
          "Me calls Alex",
          "My name calls Alex"
        ],
        "target_answer": "Myself I-call Alex",
        "meaning": "My name is Alex (literal Spanish blueprint: Myself I-call Alex)",
        "explanation": "Me ('Myself') + llamo ('I-call') + Alex.",
        "id": "es5012_e5"
      }
    ],
    "summary": {
      "outcome": "Introduce yourself with me llamo, ask ¿cómo te llamas?, and greet throughout the day.",
      "use_example": {
        "german": "¡Buenos días! Me llamo Alex — ¿cómo te llamas?",
        "english": "Good morning! My name is Alex — what is your name?"
      },
      "takeaway": "me llamo is literally 'I call myself' (from llamar, Latin clāmāre).",
      "curiosity_teaser": "Explore the next support branch ([5021] The Five Pure Vowels) for vowel purity and the -ct- → -ch- sound shift!"
    },
    "twist": {
      "prompt": "Assemble: 'Good afternoon, how are you?'",
      "target_answer": "Buenas tardes, cómo estás",
      "word_bank": [
        "Buenas",
        "tardes",
        "cómo",
        "estás",
        "Buenos",
        "días",
        "eres"
      ],
      "explanation": "¡Buenas tardes! ¿Cómo estás?"
    }
  },
  {
    "id": 5021,
    "slug": "pure-vowels-accent-mark",
    "title": "The Five Pure Vowels",
    "subtitle": "Never glide into diphthongs: clean vowel training and acute accent rules",
    "phase": 1,
    "shift_categories": [
      "ct_to_ch"
    ],
    "word_ids": [
      "pan",
      "vino",
      "agua",
      "noche",
      "leche",
      "ocho",
      "café",
      "con"
    ],
    "table_word_ids": [
      "pan",
      "vino",
      "agua",
      "noche",
      "leche",
      "ocho"
    ],
    "hook": {
      "title": "The Crystalline Five: a, e, i, o, u",
      "content": "In English, vowels constantly glide at the end: 'no' sounds like 'noh-oo' and 'day' sounds like 'deh-ee'. In Spanish, the five vowels **a, e, i, o, u** are crisp, pure, and short — your mouth never glides at the end of a vowel! Whether stressed or unstressed, every 'a' has the exact same open sound as in *casa*, and every 'o' is a clean, un-glided /o/ as in *ocho*!"
    },
    "pattern": {
      "title": "Latin -ct- → Spanish -ch- & Why Feminine 'Agua' Takes 'El'",
      "content": "Look at **la noche** ('night'), **la leche** ('milk'), and **ocho** ('eight'): all three come from Latin words with **-ct-** (*noctem, lactem, octō*)! And look at **el agua** ('the water'): *agua* is a feminine noun (*las aguas, el agua fría*), but in the singular it borrows **el** right in front of it so your mouth doesn't have to say two stressed A's in a row (*la agua*)!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "the bread (pantry / companion)",
            "german": "el pan"
          },
          {
            "id": "p2",
            "english": "the wine (vine / vintage)",
            "german": "el vino"
          },
          {
            "id": "p3",
            "english": "the water (feminine noun taking singular el!)",
            "german": "el agua"
          },
          {
            "id": "p4",
            "english": "the night (nocturnal: -ct- → -ch-)",
            "german": "la noche"
          },
          {
            "id": "p5",
            "english": "the milk (lactose: -ct- → -ch-)",
            "german": "la leche"
          },
          {
            "id": "p6",
            "english": "eight (octave: -ct- → -ch-)",
            "german": "ocho"
          }
        ],
        "target_answer": "el pan, el vino, el agua, la noche, la leche, ocho",
        "meaning": "the bread (pantry / companion), the wine (vine / vintage), the water (feminine noun taking singular el!), the night (nocturnal: -ct- → -ch-), the milk (lactose: -ct- → -ch-), eight (octave: -ct- → -ch-)",
        "explanation": "Pure vowels and the regular -ct- → -ch- shift.",
        "id": "es5021_e1"
      },
      {
        "type": "reverse_cognate",
        "prompt": "Spanish el pan ('bread', from Latin pānis) hides inside which everyday English word for a close friend — literally 'a person with whom (com-) you share bread (pan)'?",
        "target_answer": "companion",
        "meaning": "a com-pan-ion is literally 'one you break bread (pan) with' (and a 'pantry' is where bread is kept)!",
        "explanation": "Late Latin compāniō ('bread-fellow', from com- 'with' + pānis 'bread') gave English companion and company.",
        "id": "es5021_e2"
      },
      {
        "type": "shift_select",
        "prompt": "Why does Spanish say 'el agua' in the singular even though 'agua' is feminine?",
        "options": [
          "To avoid the vocal collision of 'la' before a noun starting with a stressed 'a-' (A-gua)",
          "Because water is masculine in Spanish",
          "Because agua ends in -a"
        ],
        "target_answer": "To avoid the vocal collision of 'la' before a noun starting with a stressed 'a-' (A-gua)",
        "meaning": "the water",
        "explanation": "Feminine nouns starting with stressed /a/ (agua, hambre, águila) take el in the singular while keeping feminine adjectives: el agua fría!",
        "id": "es5021_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'Coffee with milk, please'",
        "target_answer": "Café con leche, por favor",
        "meaning": "Coffee with milk, please",
        "word_bank": [
          "Café",
          "con",
          "leche",
          "por",
          "favor",
          "sin",
          "vino",
          "el"
        ],
        "explanation": "Café con leche, por favor — the classic Spanish order.",
        "id": "es5021_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Quiero pan, vino y agua",
        "replays": 2,
        "target_answer": "Quiero pan, vino y agua",
        "meaning": "I want bread, wine, and water",
        "cues": [
          "I want: Quiero",
          "bread, wine: pan, vino",
          "and water: y agua"
        ],
        "explanation": "Quiero pan, vino y agua.",
        "affirmation": "Pure Spanish vowels mastered!",
        "id": "es5021_e5"
      }
    ],
    "summary": {
      "outcome": "Pronounce Spanish's five pure vowels cleanly, recognize -ct- → -ch-, and explain singular el agua.",
      "use_example": {
        "german": "Quiero café con leche y el agua, por favor.",
        "english": "I want coffee with milk and the water, please."
      },
      "takeaway": "Spanish vowels never glide — and feminine nouns starting with stressed /a/ borrow el in the singular (el agua).",
      "curiosity_teaser": "Next branch ([5031] Actualmente, Librería & Co.): preview the most important Spanish false friends!"
    },
    "twist": {
      "prompt": "Assemble: 'Good night'",
      "target_answer": "Buenas noches",
      "word_bank": [
        "Buenas",
        "noches",
        "Buenos",
        "leche",
        "vino"
      ],
      "explanation": "¡Buenas noches!"
    }
  },
  {
    "id": 5031,
    "slug": "actualmente-libreria-false-friends",
    "title": "Actualmente, Librería & Co.",
    "subtitle": "Key false friends in contrastive recall drills: actualmente, librería, éxito, asistir, recordar, sensible, sopa, embarazada",
    "phase": 1,
    "shift_categories": [
      "mente"
    ],
    "word_ids": [
      "actualmente",
      "librería",
      "éxito",
      "asistir",
      "recordar",
      "sensible",
      "sopa",
      "embarazada",
      "momento",
      "reservación"
    ],
    "table_word_ids": [
      "actualmente",
      "librería",
      "éxito",
      "asistir",
      "recordar",
      "sensible"
    ],
    "hook": {
      "title": "Words That Look Like Allies but Tell a Different Story",
      "content": "Because English and Spanish share thousands of true Latinate cognates, a tiny group of words drifted in meaning over the centuries. Knowing these 8 classic **False Friends** early saves you from the most famous traps in Spanish:\n• **actualmente** = currently (not actually)\n• **la librería** = bookstore (not library)\n• **el éxito** = success (not exit)\n• **asistir** = to attend (not assist)\n• **recordar** = to remember (not record)\n• **sensible** = sensitive (not sensible)\n• **la sopa** = soup (not soap)\n• **embarazada** = pregnant (NEVER embarrassed)!"
    },
    "pattern": {
      "title": "Why 'Embarazada' Uses 'Está'!",
      "content": "Notice that pregnancy is a physical state, so Spanish says **Ella está embarazada** ('She is pregnant') with estar! And because recordar ('to remember', literally 'to call back to the heart', from Latin cor 'heart') is an -ar verb, you can stack it right after quiero: Quiero recordar el momento!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "currently, at present (not actually)",
            "german": "actualmente"
          },
          {
            "id": "p2",
            "english": "bookstore (not lending library)",
            "german": "la librería"
          },
          {
            "id": "p3",
            "english": "success (not exit)",
            "german": "el éxito"
          },
          {
            "id": "p4",
            "english": "to attend (not assist)",
            "german": "asistir"
          },
          {
            "id": "p5",
            "english": "to remember (not record)",
            "german": "recordar"
          },
          {
            "id": "p6",
            "english": "pregnant (not embarrassed!)",
            "german": "embarazada"
          }
        ],
        "target_answer": "actualmente, la librería, el éxito, asistir, recordar, embarazada",
        "meaning": "currently, at present (not actually), bookstore (not lending library), success (not exit), to attend (not assist), to remember (not record), pregnant (not embarrassed!)",
        "explanation": "All six look like English words with different meanings.",
        "id": "es5031_e1"
      },
      {
        "type": "shift_select",
        "prompt": "What does 'La sopa está caliente' mean in English?",
        "options": [
          "The soup is hot",
          "The soap is hot",
          "The supper is cold"
        ],
        "target_answer": "The soup is hot",
        "meaning": "The soup is hot",
        "explanation": "la sopa means 'soup' (soap is el jabón!).",
        "id": "es5031_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I want to attend'",
        "target_answer": "Quiero asistir",
        "meaning": "I want to attend (be present)",
        "word_bank": [
          "Quiero",
          "asistir",
          "recordar",
          "el",
          "éxito"
        ],
        "explanation": "Quiero asistir = 'I want to attend'.",
        "id": "es5031_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say: 'She is pregnant' (using taught 'está' + 'embarazada')",
        "cues": [
          "She is (state → estar) → Ella está",
          "pregnant (false friend!) → embarazada"
        ],
        "idea_parts": [
          "She is → Ella está",
          "pregnant → embarazada"
        ],
        "target_answer": "Ella está embarazada",
        "meaning": "She is pregnant",
        "word_bank": [
          "Ella",
          "está",
          "embarazada",
          "es",
          "sensible",
          "sopa"
        ],
        "explanation": "Ella está embarazada — state takes está, and embarazada means pregnant!",
        "id": "es5031_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "La reservación es un éxito",
        "replays": 2,
        "target_answer": "La reservación es un éxito",
        "meaning": "The reservation is a success",
        "cues": [
          "The reservation: La reservación",
          "is: es",
          "a success: un éxito"
        ],
        "explanation": "La reservación es un éxito — el éxito means 'success'!",
        "affirmation": "False friends disarmed with taught grammar!",
        "id": "es5031_e5"
      }
    ],
    "summary": {
      "outcome": "Disarm high-frequency Spanish false friends (actualmente, librería, éxito, asistir, recordar, sensible, sopa, embarazada).",
      "use_example": {
        "german": "Quiero recordar el momento porque la reservación es un éxito.",
        "english": "I want to remember the moment because the reservation is a success."
      },
      "takeaway": "actualmente = currently; librería = bookstore; éxito = success; asistir = attend; recordar = remember; embarazada = pregnant.",
      "curiosity_teaser": "Return to the main spine or continue to the next branch along the trail!"
    },
    "twist": {
      "prompt": "Assemble: 'I want to remember the moment'",
      "target_answer": "Quiero recordar el momento",
      "word_bank": [
        "Quiero",
        "recordar",
        "el",
        "momento",
        "asistir",
        "la",
        "éxito"
      ],
      "explanation": "Quiero recordar el momento."
    }
  },
  {
    "id": 5041,
    "slug": "the-social-line-tu-usted",
    "title": "The Social Line",
    "subtitle": "Register decisions with tú, usted, and ustedes across Spain and Latin America",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "tú",
      "usted",
      "señor",
      "señora",
      "estás",
      "está",
      "son",
      "están",
      "querer",
      "desear"
    ],
    "table_word_ids": [
      "tú",
      "usted",
      "señor",
      "señora",
      "estás",
      "está"
    ],
    "hook": {
      "title": "Tú, Usted, and Plural Ustedes Across the Spanish-Speaking World",
      "content": "In singular address, both Spain and Latin America distinguish informal **tú** (friends, family, peers, children) from respectful **usted** (strangers, elders, formal titles like *señor / señora*). What about addressing a GROUP of people ('you all')? Across all of Latin America (and the Canary Islands and parts of Andalusia), speakers use **ustedes** (+ 3rd-person plural verb: *¿Cómo están ustedes?*, *¿Qué quieren ustedes?*) for BOTH friends and strangers! In central and northern Spain, speakers use informal *vosotros* with friends and *ustedes* in formal settings — meaning **ustedes** is understood and respected 100% everywhere in the Spanish-speaking world!"
    },
    "pattern": {
      "title": "One Rule for Both Usted and Ustedes: Use the 3rd-Person Verb!",
      "content": "• Singular **usted** uses the 'he/she' verb (está, es, quiere, tiene).\n• Plural **ustedes** uses the 'they' verb — simply add **-n** (están, son, quieren, tienen)!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "how are you? (one friend: tú)",
            "german": "¿cómo estás?"
          },
          {
            "id": "p2",
            "english": "how are you? (one respected stranger: usted)",
            "german": "¿cómo está usted?"
          },
          {
            "id": "p3",
            "english": "how are you all? (group: ustedes)",
            "german": "¿cómo están ustedes?"
          },
          {
            "id": "p4",
            "english": "you all are (identity: ser)",
            "german": "ustedes son"
          },
          {
            "id": "p5",
            "english": "sir / madam",
            "german": "señor / señora"
          }
        ],
        "target_answer": "¿cómo estás?, ¿cómo está usted?, ¿cómo están ustedes?, ustedes son, señor / señora",
        "meaning": "how are you? (one friend: tú), how are you? (one respected stranger: usted), how are you all? (group: ustedes), you all are (identity: ser), sir / madam",
        "explanation": "usted takes 3rd-person singular; ustedes takes 3rd-person plural (+ -n).",
        "id": "es5041_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you ask a group of people 'Where are you all from?' using universal 'ustedes'?",
        "options": [
          "¿De dónde son ustedes?",
          "*¿De dónde es ustedes?",
          "*¿De dónde eres ustedes?"
        ],
        "target_answer": "¿De dónde son ustedes?",
        "meaning": "Where are you all from?",
        "explanation": "ustedes takes the 3rd-person plural verb son.",
        "id": "es5041_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'How are you all (ustedes)?'",
        "target_answer": "Cómo están ustedes",
        "meaning": "How are you all?",
        "word_bank": [
          "Cómo",
          "están",
          "ustedes",
          "está",
          "estás",
          "son"
        ],
        "explanation": "¿Cómo están ustedes?",
        "id": "es5041_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "ask a gentleman politely: 'What do you wish, sir?'",
        "cues": [
          "What → ¿Qué",
          "wishes (usted form of desear) → desea",
          "sir → señor?"
        ],
        "idea_parts": [
          "What → Qué",
          "do you wish → desea",
          "sir → señor"
        ],
        "target_answer": "Qué desea señor",
        "meaning": "What would you like, sir?",
        "word_bank": [
          "Qué",
          "desea",
          "señor",
          "deseas",
          "tú",
          "señora"
        ],
        "explanation": "¿Qué desea, señor?",
        "id": "es5041_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Cómo está usted hoy señora",
        "replays": 2,
        "target_answer": "Cómo está usted hoy señora",
        "meaning": "How are you today, madam?",
        "cues": [
          "How are you (formal): Cómo está usted",
          "today: hoy",
          "madam: señora"
        ],
        "explanation": "¿Cómo está usted hoy, señora?",
        "affirmation": "tú, usted, and ustedes mastered!",
        "id": "es5041_e5"
      }
    ],
    "summary": {
      "outcome": "Navigate tú, usted, and plural ustedes across Spain and Latin America.",
      "use_example": {
        "german": "¿Cómo está usted, señor, y cómo están ustedes?",
        "english": "How are you, sir, and how are you all?"
      },
      "takeaway": "usted takes the 3rd-person singular verb; ustedes takes the 3rd-person plural verb (-n) across the entire Hispanic world.",
      "curiosity_teaser": "Next branch ([5051] Directions & Places): navigate city streets and plazas!"
    },
    "twist": {
      "prompt": "Assemble: 'Do you all (ustedes) have a reservation?'",
      "target_answer": "Tienen ustedes una reservación",
      "word_bank": [
        "Tienen",
        "ustedes",
        "una",
        "reservación",
        "Tiene",
        "Tienes",
        "un"
      ],
      "explanation": "¿Tienen ustedes una reservación?"
    }
  },
  {
    "id": 5051,
    "slug": "directions-and-places",
    "title": "Directions & Places",
    "subtitle": "Asking ¿Dónde está…? and navigating with todo recto, a la izquierda, a la derecha, aquí, allí",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "dónde",
      "está",
      "aquí",
      "allí",
      "hotel",
      "restaurante",
      "estación",
      "universidad",
      "ciudad",
      "por"
    ],
    "table_word_ids": [
      "dónde",
      "está",
      "aquí",
      "allí",
      "hotel",
      "restaurante"
    ],
    "hook": {
      "title": "Navigating a Spanish City",
      "content": "When you stop someone on the street in Madrid or Mexico City to ask for directions, two structures do 90% of the work: **Perdón, ¿dónde está la estación?** ('Excuse me, where is the specific station?') and **¿Hay un restaurante por aquí?** ('Is there a restaurant around here?')."
    },
    "pattern": {
      "title": "Why Specific Places Take 'Está' While 'Is There A...' Takes 'Hay'",
      "content": "Remember our golden rule from Topics 5 and 10:\n• Definite article (**el / la** — a specific place you know exists): use **¿Dónde está...?** (¿Dónde está el hotel central?).\n• Indefinite article (**un / una** — asking if one exists nearby): use **¿Hay...?** (¿Hay un hotel por aquí?)!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "where is the station? (specific → está)",
            "german": "¿dónde está la estación?"
          },
          {
            "id": "p2",
            "english": "is there a hotel around here? (indefinite → hay)",
            "german": "¿hay un hotel por aquí?"
          },
          {
            "id": "p3",
            "english": "it is here",
            "german": "está aquí"
          },
          {
            "id": "p4",
            "english": "it is over there",
            "german": "está allí"
          },
          {
            "id": "p5",
            "english": "the central university",
            "german": "la universidad central"
          }
        ],
        "target_answer": "¿dónde está la estación?, ¿hay un hotel por aquí?, está aquí, está allí, la universidad central",
        "meaning": "where is the station? (specific → está), is there a hotel around here? (indefinite → hay), it is here, it is over there, the central university",
        "explanation": "Specific el/la takes ¿Dónde está...?; indefinite un/una takes ¿Hay...?",
        "id": "es5051_e1"
      },
      {
        "type": "shift_select",
        "prompt": "You want to know if there is ANY pharmacy or café nearby ('around here'). Which structure is grammatical?",
        "options": [
          "¿Hay un café por aquí?",
          "*¿Está un café por aquí?",
          "*¿Es un café para aquí?"
        ],
        "target_answer": "¿Hay un café por aquí?",
        "meaning": "Is there a café around here?",
        "explanation": "Asking whether an indefinite 'a/an' place exists uses ¿Hay un/una... por aquí?",
        "id": "es5051_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'Where is the central hotel?'",
        "target_answer": "Dónde está el hotel central",
        "meaning": "Where is the central hotel?",
        "word_bank": [
          "Dónde",
          "está",
          "el",
          "hotel",
          "central",
          "es",
          "hay",
          "la"
        ],
        "explanation": "¿Dónde está el hotel central?",
        "id": "es5051_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that the train station is over there",
        "cues": [
          "The station → La estación",
          "is (location) → está",
          "over there → allí"
        ],
        "idea_parts": [
          "The station → La estación",
          "is over there → está allí"
        ],
        "target_answer": "La estación está allí",
        "meaning": "The station is over there",
        "word_bank": [
          "La",
          "estación",
          "está",
          "allí",
          "es",
          "hay",
          "aquí"
        ],
        "explanation": "La estación está allí.",
        "id": "es5051_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Hay un restaurante muy bueno por aquí",
        "replays": 2,
        "target_answer": "Hay un restaurante muy bueno por aquí",
        "meaning": "There is a very good restaurant around here",
        "cues": [
          "There is: Hay",
          "a very good restaurant: un restaurante muy bueno",
          "around here: por aquí"
        ],
        "explanation": "Hay un restaurante muy bueno por aquí.",
        "affirmation": "City navigation mastered!",
        "id": "es5051_e5"
      }
    ],
    "summary": {
      "outcome": "Ask for and give directions using ¿Dónde está el/la...? and ¿Hay un/una... por aquí?",
      "use_example": {
        "german": "¿Dónde está la estación y hay un restaurante bueno por aquí?",
        "english": "Where is the station and is there a good restaurant around here?"
      },
      "takeaway": "el/la (the specific place) → está; un/una (a place) → hay.",
      "curiosity_teaser": "Next branch ([5061] ¿Cuánto es?): master shopping, prices, and restaurant bills!"
    },
    "twist": {
      "prompt": "Assemble: 'The university is here'",
      "target_answer": "La universidad está aquí",
      "word_bank": [
        "La",
        "universidad",
        "está",
        "aquí",
        "es",
        "hay",
        "allí"
      ],
      "explanation": "La universidad está aquí."
    }
  },
  {
    "id": 5061,
    "slug": "cuanto-es-shopping-euros",
    "title": "¿Cuánto es?",
    "subtitle": "Asking prices with ¿Cuánto cuesta? / ¿Cuánto es?, numbers 1–100, and pedir la cuenta",
    "phase": 3,
    "shift_categories": [],
    "word_ids": [
      "cuánto",
      "es",
      "diez",
      "veinte",
      "treinta",
      "cien",
      "comprar",
      "pedir",
      "cuenta",
      "por"
    ],
    "table_word_ids": [
      "cuánto",
      "es",
      "diez",
      "veinte",
      "treinta",
      "cien"
    ],
    "hook": {
      "title": "Asking the Price: ¿Cuánto Es? & ¿Cuánto Cuesta?",
      "content": "Whether you are at a bookshop in Madrid or a market in Bogotá, asking the price is effortless: **¿Cuánto es?** ('How much is it?') or **¿Cuánto cuesta esto?** ('How much does this cost?'). And when paying or stating what you bought something for, remember the Balance Scale of **por**: Compro el libro **por veinte euros**!"
    },
    "pattern": {
      "title": "Ordering and Asking for the Bill with Pedir",
      "content": "Remember our e→i boot verb **pedir** ('to ask for / order': yo pido, tú pides): Quiero pedir la cuenta ('I want to ask for the bill')!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "how much is it?",
            "german": "¿cuánto es?"
          },
          {
            "id": "p2",
            "english": "ten euros",
            "german": "diez euros"
          },
          {
            "id": "p3",
            "english": "twenty euros",
            "german": "veinte euros"
          },
          {
            "id": "p4",
            "english": "thirty euros",
            "german": "treinta euros"
          },
          {
            "id": "p5",
            "english": "for (in exchange for) ten euros",
            "german": "por diez euros"
          },
          {
            "id": "p6",
            "english": "the bill, please",
            "german": "la cuenta, por favor"
          }
        ],
        "target_answer": "¿cuánto es?, diez euros, veinte euros, treinta euros, por diez euros, la cuenta, por favor",
        "meaning": "how much is it?, ten euros, twenty euros, thirty euros, for (in exchange for) ten euros, the bill, please",
        "explanation": "¿Cuánto es? asks the total; por states the price paid in exchange.",
        "id": "es5061_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'I want to buy this book for twenty euros'?",
        "options": [
          "Quiero comprar este libro por veinte euros",
          "*Quiero comprar este libro para veinte euros",
          "*Quiero comprar esto libro por veinte euros"
        ],
        "target_answer": "Quiero comprar este libro por veinte euros",
        "meaning": "I want to buy this book for twenty euros",
        "explanation": "Financial exchange on the scale always uses por (never para!).",
        "id": "es5061_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'How much is this?'",
        "target_answer": "Cuánto es esto",
        "meaning": "How much is this?",
        "word_bank": [
          "Cuánto",
          "es",
          "esto",
          "este",
          "está",
          "esta"
        ],
        "explanation": "¿Cuánto es esto? uses neuter esto when pointing at an item.",
        "id": "es5061_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that you want to ask for the bill ('Quiero pedir la cuenta')",
        "cues": [
          "I want → Quiero",
          "to ask for (pedir needs no 'for'!) → pedir",
          "the bill → la cuenta"
        ],
        "idea_parts": [
          "I want to ask for → Quiero pedir",
          "the bill → la cuenta"
        ],
        "target_answer": "Quiero pedir la cuenta",
        "meaning": "I want to ask for the bill",
        "word_bank": [
          "Quiero",
          "pedir",
          "la",
          "cuenta",
          "por",
          "para",
          "el"
        ],
        "explanation": "Quiero pedir la cuenta.",
        "id": "es5061_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Son treinta euros por favor",
        "replays": 2,
        "target_answer": "Son treinta euros por favor",
        "meaning": "It is thirty euros, please",
        "cues": [
          "They are (plural euros): Son",
          "thirty euros: treinta euros",
          "please: por favor"
        ],
        "explanation": "Son treinta euros, por favor — plural prices use Son ('They are thirty euros')!",
        "affirmation": "Shopping and prices mastered!",
        "id": "es5061_e5"
      }
    ],
    "summary": {
      "outcome": "Ask prices with ¿Cuánto es?, state totals with Es un euro / Son veinte euros, and pay with por.",
      "use_example": {
        "german": "¿Cuánto es esto? — Son veinte euros, por favor.",
        "english": "How much is this? — It is twenty euros, please."
      },
      "takeaway": "Plural prices use Son ('Son diez euros') — and prices in exchange always take por.",
      "curiosity_teaser": "Next branch ([5071] No he terminado): practice negative and question sentences in the -ado/-ido past!"
    },
    "twist": {
      "prompt": "Assemble: 'It is ten euros (Son diez euros)'",
      "target_answer": "Son diez euros",
      "word_bank": [
        "Son",
        "diez",
        "euros",
        "Es",
        "Están",
        "veinte"
      ],
      "explanation": "Son diez euros."
    }
  },
  {
    "id": 5071,
    "slug": "no-he-terminado-past-in-the-wild",
    "title": "No he terminado",
    "subtitle": "Keeping haber and its participle glued together: No he terminado, ¿Ya has comido?, Nunca he visto",
    "phase": 3,
    "shift_categories": [
      "ar_engine"
    ],
    "word_ids": [
      "he",
      "has",
      "ha",
      "hemos",
      "hablado",
      "comido",
      "hecho",
      "visto",
      "terminar",
      "no",
      "nunca"
    ],
    "table_word_ids": [
      "he",
      "has",
      "ha",
      "hemos",
      "hablado",
      "comido"
    ],
    "hook": {
      "title": "The Golden Rule of the Spanish Perfect Past: Never Split 'He + Participle'!",
      "content": "In English, we constantly wedge words between 'have' and the participle: 'Have **you** eaten?', 'I have **not** finished', 'I have **never** seen', 'I have **already** spoken'. In Spanish, **he / has / ha / hemos / han + participle** is welded with titanium! Nothing — not *no*, not *nunca*, not *ya* ('already'), not even the subject *tú* or *usted* in a question — may ever step between them!"
    },
    "pattern": {
      "title": "Where Do Negatives, Pronouns, and Subjects Go?",
      "content": "• Negatives & object pronouns go in **FRONT** of haber: **No he terminado**, **No lo he visto**, **Nunca he comido aquí**.\n• Subject pronouns in questions go either before haber or after the participle: **¿Has comido?** / **¿Ya has comido?**!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I have not finished",
            "german": "no he terminado"
          },
          {
            "id": "p2",
            "english": "I have not seen it",
            "german": "no lo he visto"
          },
          {
            "id": "p3",
            "english": "I have never spoken with him",
            "german": "nunca he hablado con él"
          },
          {
            "id": "p4",
            "english": "have you eaten today?",
            "german": "¿has comido hoy?"
          },
          {
            "id": "p5",
            "english": "we have done it",
            "german": "lo hemos hecho"
          }
        ],
        "target_answer": "no he terminado, no lo he visto, nunca he hablado con él, ¿has comido hoy?, lo hemos hecho",
        "meaning": "I have not finished, I have not seen it, I have never spoken with him, have you eaten today?, we have done it",
        "explanation": "haber + participle is an unbreakable two-word block.",
        "id": "es5071_e1"
      },
      {
        "type": "morpheme_tiles",
        "prompt": "Build 'I have not finished' by placing 'no' in front of the welded 'he + terminado' block:",
        "tile_options": [
          "No",
          "he",
          "terminado",
          "tengo"
        ],
        "target_answer": "Noheterminado",
        "meaning": "No he terminado (I haven't finished)",
        "explanation": "No + he + terminado.",
        "id": "es5071_e2"
      },
      {
        "type": "shift_select",
        "prompt": "Which of these is the ONLY grammatical way to say 'Have you seen my brother?'?",
        "options": [
          "¿Has visto a mi hermano?",
          "*¿Has tú visto a mi hermano?",
          "*¿Tienes visto a mi hermano?"
        ],
        "target_answer": "¿Has visto a mi hermano?",
        "meaning": "Have you seen my brother?",
        "explanation": "Never wedge tú between has and visto, and remember the personal 'a' before mi hermano!",
        "id": "es5071_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I haven't done it today'",
        "target_answer": "No lo he hecho hoy",
        "meaning": "I haven't done it today",
        "word_bank": [
          "No",
          "lo",
          "he",
          "hecho",
          "hoy",
          "Tengo",
          "la",
          "hacer"
        ],
        "explanation": "No + lo + he hecho + hoy.",
        "id": "es5071_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Nunca he visto esta ciudad",
        "replays": 2,
        "target_answer": "Nunca he visto esta ciudad",
        "meaning": "I have never seen this city",
        "cues": [
          "Never: Nunca",
          "I have seen: he visto",
          "this city: esta ciudad"
        ],
        "explanation": "Nunca he visto esta ciudad.",
        "affirmation": "Unbreakable haber + participle mastered!",
        "id": "es5071_e5"
      }
    ],
    "summary": {
      "outcome": "Produce negative and interrogative present-perfect sentences without splitting haber from its participle.",
      "use_example": {
        "german": "No he terminado hoy y no lo he visto.",
        "english": "I haven't finished today and I haven't seen it."
      },
      "takeaway": "Think of he visto / he hablado / hemos hecho as a single compound word — nothing can step inside it.",
      "curiosity_teaser": "Next branch ([5081] De la mañana a la noche): chain daily reflexives from morning to night!"
    },
    "twist": {
      "prompt": "Assemble: 'We have not eaten today'",
      "target_answer": "No hemos comido hoy",
      "word_bank": [
        "No",
        "hemos",
        "comido",
        "hoy",
        "tenemos",
        "comer",
        "he"
      ],
      "explanation": "No hemos comido hoy."
    }
  },
  {
    "id": 5081,
    "slug": "de-la-manana-a-la-noche",
    "title": "De la mañana a la noche",
    "subtitle": "Chaining reflexives (me levanto, me lavo, me acuesto) and time markers across a realistic day",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "levantarse",
      "acostarse",
      "dormir",
      "empezar",
      "mañana",
      "noche",
      "siete",
      "ocho",
      "diez",
      "me"
    ],
    "table_word_ids": [
      "levantarse",
      "acostarse",
      "dormir",
      "empezar",
      "mañana",
      "noche"
    ],
    "hook": {
      "title": "A Full Day in Spanish",
      "content": "Watch how reflexive verbs and stem-changing boot verbs work together across your daily routine:\n• **Por la mañana me levanto a las siete** ('In the morning I get up at seven').\n• **Empiezo a trabajar / estudiar a las nueve** ('I start working/studying at nine' — notice **empezar a + infinitive**!).\n• **Por la noche me acuesto a las diez y duermo ocho horas** ('At night I go to bed at ten and sleep eight hours')!"
    },
    "pattern": {
      "title": "Why 'Empezar' Always Takes 'a' Before an Infinitive",
      "content": "Just like ir a ('going to'), verbs of beginning like **empezar** ('to start/begin', e→ie boot verb: yo empiezo) always use the forward arrow **a** before a following infinitive: **Empiezo a comprender** ('I'm starting to understand'), **Empieza a hablar** ('He starts speaking')!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I get up at seven",
            "german": "me levanto a las siete"
          },
          {
            "id": "p2",
            "english": "I go to bed (o→ue)",
            "german": "me acuesto"
          },
          {
            "id": "p3",
            "english": "I sleep eight hours (o→ue)",
            "german": "duermo ocho horas"
          },
          {
            "id": "p4",
            "english": "I start to understand (e→ie + a!)",
            "german": "empiezo a comprender"
          },
          {
            "id": "p5",
            "english": "in the morning / at night",
            "german": "por la mañana / por la noche"
          }
        ],
        "target_answer": "me levanto a las siete, me acuesto, duermo ocho horas, empiezo a comprender, por la mañana / por la noche",
        "meaning": "I get up at seven, I go to bed (o→ue), I sleep eight hours (o→ue), I start to understand (e→ie + a!), in the morning / at night",
        "explanation": "Reflexives (me levanto, me acuesto) and boot verbs (empiezo, duermo) carry the daily routine.",
        "id": "es5081_e1"
      },
      {
        "type": "shift_select",
        "prompt": "Which preposition must link 'empezar' ('to start/begin') to a following infinitive verb?",
        "options": [
          "a (Empiezo a hablar)",
          "de (*Empiezo de hablar)",
          "nothing (*Empiezo hablar)"
        ],
        "target_answer": "a (Empiezo a hablar)",
        "meaning": "I start to speak",
        "explanation": "Verbs of motion and beginning (ir a, empezar a) always take the forward arrow a before an infinitive!",
        "id": "es5081_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'In the morning I get up at seven'",
        "target_answer": "Por la mañana me levanto a las siete",
        "meaning": "In the morning I get up at seven",
        "word_bank": [
          "Por",
          "la",
          "mañana",
          "me",
          "levanto",
          "a",
          "las",
          "siete",
          "Para",
          "te",
          "noche"
        ],
        "explanation": "Por la mañana + me levanto + a las siete.",
        "id": "es5081_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that you are starting to understand Spanish ('Empiezo a comprender el español')",
        "cues": [
          "I start (empezar: e→ie) → Empiezo",
          "to (connector after empezar) → a",
          "understand Spanish → comprender el español"
        ],
        "idea_parts": [
          "I start to → Empiezo a",
          "understand Spanish → comprender el español"
        ],
        "target_answer": "Empiezo a comprender el español",
        "meaning": "I am starting to understand Spanish",
        "word_bank": [
          "Empiezo",
          "a",
          "comprender",
          "el",
          "español",
          "Empezar",
          "de",
          "la"
        ],
        "explanation": "Empiezo a comprender el español.",
        "id": "es5081_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Por la noche me acuesto a las diez",
        "replays": 2,
        "target_answer": "Por la noche me acuesto a las diez",
        "meaning": "At night I go to bed at ten",
        "cues": [
          "At night: Por la noche",
          "I go to bed: me acuesto",
          "at ten: a las diez"
        ],
        "explanation": "Por la noche me acuesto a las diez.",
        "affirmation": "Full daily routine mastered!",
        "id": "es5081_e5"
      }
    ],
    "summary": {
      "outcome": "Chain reflexive verbs (me levanto, me acuesto), empezar a + infinitive, and time expressions across a day.",
      "use_example": {
        "german": "Por la mañana me levanto a las siete y por la noche me acuesto a las diez.",
        "english": "In the morning I get up at seven and at night I go to bed at ten."
      },
      "takeaway": "empezar (e→ie) always takes 'a' before a following infinitive: Empiezo a comprender.",
      "curiosity_teaser": "Next branch ([5091] Relative Clauses in Depth): master con quien, para quien, lo que, and donde!"
    },
    "twist": {
      "prompt": "Assemble: 'I start to eat at eight'",
      "target_answer": "Empiezo a comer a las ocho",
      "word_bank": [
        "Empiezo",
        "a",
        "comer",
        "a",
        "las",
        "ocho",
        "de",
        "Empezar",
        "duermo"
      ],
      "explanation": "Empiezo a comer a las ocho."
    }
  },
  {
    "id": 5091,
    "slug": "relative-clauses-in-depth",
    "title": "Relative Clauses in Depth",
    "subtitle": "que, quien (after prepositions: la persona con quien hablo), lo que, and donde",
    "phase": 5,
    "shift_categories": [],
    "word_ids": [
      "qué",
      "quién",
      "lo",
      "dónde",
      "con",
      "para",
      "amigo",
      "hablar",
      "vivir",
      "comprender"
    ],
    "table_word_ids": [
      "qué",
      "quién",
      "lo",
      "dónde",
      "con",
      "para"
    ],
    "hook": {
      "title": "Never End a Spanish Sentence with a Dangling Preposition!",
      "content": "In casual English, we often strand prepositions at the very end of a sentence: 'the friend I am speaking **with**', 'the person the gift is **for**'. In Spanish, **a preposition can NEVER be stranded at the end of a clause**! Instead, the preposition stays right in front of **quien** ('whom'): el amigo **con quien** hablo ('the friend with whom I speak'), la persona **para quien** es el regalo ('the person for whom the gift is')!"
    },
    "pattern": {
      "title": "Summary of All Four Relative Connectors",
      "content": "1) **que** = who / whom / which / that (default for both people and things!).\n2) **[preposition] + quien** = with whom / for whom / to whom (con quien, para quien, a quien).\n3) **lo que** = what ('the thing that').\n4) **donde** (no accent!) = where ('la ciudad donde vivo' = 'the city where I live')!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "the friend with whom I speak (never strand con!)",
            "german": "el amigo con quien hablo"
          },
          {
            "id": "p2",
            "english": "the mother for whom the gift is",
            "german": "la madre para quien es el regalo"
          },
          {
            "id": "p3",
            "english": "the city where I live (unaccented donde)",
            "german": "la ciudad donde vivo"
          },
          {
            "id": "p4",
            "english": "what (the thing that) I understand",
            "german": "lo que comprendo"
          },
          {
            "id": "p5",
            "english": "the book that I have",
            "german": "el libro que tengo"
          }
        ],
        "target_answer": "el amigo con quien hablo, la madre para quien es el regalo, la ciudad donde vivo, lo que comprendo, el libro que tengo",
        "meaning": "the friend with whom I speak (never strand con!), the mother for whom the gift is, the city where I live (unaccented donde), what (the thing that) I understand, the book that I have",
        "explanation": "Prepositions always stand directly in front of quien — never at the end of the sentence.",
        "id": "es5091_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How does Spanish express 'the friend I am speaking with'?",
        "options": [
          "el amigo con quien hablo (or con el que hablo)",
          "*el amigo que hablo con",
          "*el amigo quien hablo con"
        ],
        "target_answer": "el amigo con quien hablo (or con el que hablo)",
        "meaning": "the friend with whom I speak",
        "explanation": "Spanish never strands a preposition at the end of a clause; place con right before quien: con quien hablo!",
        "id": "es5091_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'It is the city where I live'",
        "target_answer": "Es la ciudad donde vivo",
        "meaning": "It is the city where I live",
        "word_bank": [
          "Es",
          "la",
          "ciudad",
          "donde",
          "vivo",
          "quien",
          "lo",
          "Está"
        ],
        "explanation": "Es la ciudad + donde (unstressed connector) + vivo.",
        "id": "es5091_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say: 'He is the friend with whom I speak'",
        "cues": [
          "He is the friend → Es el amigo",
          "with whom → con quien",
          "I speak → hablo"
        ],
        "idea_parts": [
          "He is the friend → Es el amigo",
          "with whom I speak → con quien hablo"
        ],
        "target_answer": "Es el amigo con quien hablo",
        "meaning": "He is the friend with whom I speak",
        "word_bank": [
          "Es",
          "el",
          "amigo",
          "con",
          "quien",
          "hablo",
          "que",
          "para",
          "donde"
        ],
        "explanation": "Es el amigo con quien hablo.",
        "id": "es5091_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Es la persona con quien hablé ayer",
        "replays": 2,
        "target_answer": "Es la persona con quien hablé ayer",
        "meaning": "He/she is the person with whom I spoke yesterday",
        "cues": [
          "It is the person: Es la persona",
          "with whom: con quien",
          "I spoke yesterday: hablé ayer"
        ],
        "explanation": "Es la persona con quien hablé ayer.",
        "affirmation": "Preposition + quien mastered!",
        "id": "es5091_e5"
      }
    ],
    "summary": {
      "outcome": "Build relative clauses with que, preposition + quien, lo que, and donde without stranding prepositions.",
      "use_example": {
        "german": "Es el amigo con quien hablé ayer en la ciudad donde vivo.",
        "english": "He is the friend with whom I spoke yesterday in the city where I live."
      },
      "takeaway": "Keep prepositions right in front of quien (con quien, para quien) — never at the end of the sentence!",
      "curiosity_teaser": "Next branch ([5101] Hypothetical Situations): expand conditional -ía and subjunctive sentences!"
    },
    "twist": {
      "prompt": "Assemble: 'The friend with whom I live'",
      "target_answer": "El amigo con quien vivo",
      "word_bank": [
        "El",
        "amigo",
        "con",
        "quien",
        "vivo",
        "que",
        "para",
        "donde"
      ],
      "explanation": "El amigo con quien vivo."
    }
  },
  {
    "id": 5101,
    "slug": "hypothetical-situations-conditional",
    "title": "Hypothetical Situations",
    "subtitle": "Conditional -ía across verbs and polite/hypothetical expressions",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "gustaría",
      "podría",
      "ojalá",
      "vivir",
      "comprar",
      "ir",
      "visitar",
      "ciudad",
      "casa",
      "tener"
    ],
    "table_word_ids": [
      "gustaría",
      "podría",
      "ojalá",
      "vivir",
      "comprar",
      "ir"
    ],
    "hook": {
      "title": "Dreaming and Planning with '-ía'",
      "content": "Because every regular verb in Spanish forms the conditional by gluing **-ía, -ías, -ía, -íamos, -ían** onto the complete infinitive, you can instantly express hypothetical dreams: **Me gustaría vivir en Madrid** ('I would like to live in Madrid'), **Compraría una casa blanca** ('I would buy a white house'), **Iría contigo** ('I would go with you', from ir + -ía)!"
    },
    "pattern": {
      "title": "Combining Conditional Wishes with Subjunctive 'Que'",
      "content": "What if you say 'I would like YOU to visit Madrid'? Combine **Me gustaría que** with the opposite-vowel subjunctive: **Me gustaría que visites Madrid**!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I would like to live here",
            "german": "me gustaría vivir aquí"
          },
          {
            "id": "p2",
            "english": "I / he would buy (comprar + -ía)",
            "german": "compraría"
          },
          {
            "id": "p3",
            "english": "I / he would go (ir + -ía)",
            "german": "iría"
          },
          {
            "id": "p4",
            "english": "it would be (ser + -ía)",
            "german": "sería"
          },
          {
            "id": "p5",
            "english": "could you (tú) / could usted?",
            "german": "¿podrías? / ¿podría usted?"
          }
        ],
        "target_answer": "me gustaría vivir aquí, compraría, iría, sería, ¿podrías? / ¿podría usted?",
        "meaning": "I would like to live here, I / he would buy (comprar + -ía), I / he would go (ir + -ía), it would be (ser + -ía), could you (tú) / could usted?",
        "explanation": "Infinitive + -ía turns any verb into 'would [verb]'.",
        "id": "es5101_e1"
      },
      {
        "type": "morpheme_tiles",
        "prompt": "Build 'I / he would buy' by attaching '-ía' to the full infinitive 'comprar':",
        "tile_options": [
          "comprar",
          "ía",
          "aba",
          "é"
        ],
        "target_answer": "compraría",
        "meaning": "compraría (would buy)",
        "explanation": "comprar + ía = compraría.",
        "id": "es5101_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'I would go to Madrid tomorrow' (from the infinitive ir)?",
        "options": [
          "Iría a Madrid mañana",
          "*Voyía a Madrid mañana",
          "*Fuería a Madrid mañana"
        ],
        "target_answer": "Iría a Madrid mañana",
        "meaning": "I would go to Madrid tomorrow",
        "explanation": "even two-letter ir simply glues -ía onto the infinitive: ir + ía = iría!",
        "id": "es5101_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I would like to buy this house'",
        "target_answer": "Me gustaría comprar esta casa",
        "meaning": "I would like to buy this house",
        "word_bank": [
          "Me",
          "gustaría",
          "comprar",
          "esta",
          "casa",
          "gusta",
          "este",
          "compré"
        ],
        "explanation": "Me gustaría + comprar + esta casa.",
        "id": "es5101_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Me gustaría vivir en esta ciudad hermosa",
        "replays": 2,
        "target_answer": "Me gustaría vivir en esta ciudad hermosa",
        "meaning": "I would like to live in this beautiful city",
        "cues": [
          "I would like: Me gustaría",
          "to live: vivir",
          "in this beautiful city: en esta ciudad hermosa"
        ],
        "explanation": "Me gustaría vivir en esta ciudad hermosa.",
        "affirmation": "Hypothetical conditional mastered!",
        "id": "es5101_e5"
      }
    ],
    "summary": {
      "outcome": "Form conditionals across -ar, -er, and -ir infinitives (compraría, viviría, iría, sería, me gustaría).",
      "use_example": {
        "german": "Me gustaría vivir en esta ciudad hermosa y compraría una casa aquí.",
        "english": "I would like to live in this beautiful city and I would buy a house here."
      },
      "takeaway": "Even two-letter ir ('to go') forms its conditional regularly: ir + -ía = iría ('would go')!",
      "curiosity_teaser": "Next branch ([5111] The Boot-Verb Gym): master stem-changing boot verbs and -go verbs!"
    },
    "twist": {
      "prompt": "Assemble: 'Could you (formal) confirm?'",
      "target_answer": "Podría usted confirmar",
      "word_bank": [
        "Podría",
        "usted",
        "confirmar",
        "Puedes",
        "tú",
        "confirmas"
      ],
      "explanation": "¿Podría usted confirmar?"
    }
  },
  {
    "id": 5111,
    "slug": "boot-verbs-o-ue-and-e-ie",
    "title": "o→ue & e→ie: puedo, duermo, empiezo",
    "subtitle": "Why the vowel splits inside the singular and 3rd-person plural boot, and stays single in nosotros",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "poder",
      "puedo",
      "puedes",
      "dormir",
      "empezar",
      "preferir",
      "querer",
      "tener",
      "tenemos",
      "mostrar"
    ],
    "table_word_ids": [
      "poder",
      "puedo",
      "puedes",
      "dormir",
      "empezar",
      "preferir"
    ],
    "hook": {
      "title": "Mastering the Two Diphthong Boots: o→ue and e→ie",
      "content": "Let's put our two biggest boot-verb families side by side:\n• **o → ue under stress**: **poder** ('to be able to / can' → puedo, puedes, puede, *podemos*, pueden), **dormir** ('to sleep' → duermo, duermes, duerme, *dormimos*, duermen), **mostrar** ('to show' → muestro, muestras, muestra, *mostramos*, muestran), **recordar** ('to remember' → recuerdo, *recordamos*).\n• **e → ie under stress**: **querer** (quiero, *queremos*), **tener** (tienes, *tenemos*), **empezar** ('to begin' → empiezo, empiezas, empieza, *empezamos*, empiezan), **preferir** ('to prefer' → prefiero, prefieres, prefiere, *preferimos*, prefieren)!"
    },
    "pattern": {
      "title": "The Nosotros Anchor",
      "content": "Whenever you say 'we' (nosotros), the stress lands on **-amos / -emos / -imos**, so the stem vowel NEVER splits: podemos, dormimos, mostramos, queremos, tenemos, empezamos, preferimos!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I can / we can (poder: o→ue)",
            "german": "puedo / podemos"
          },
          {
            "id": "p2",
            "english": "I sleep / we sleep (dormir: o→ue)",
            "german": "duermo / dormimos"
          },
          {
            "id": "p3",
            "english": "I show / we show (mostrar: o→ue)",
            "german": "muestro / mostramos"
          },
          {
            "id": "p4",
            "english": "I start / we start (empezar: e→ie)",
            "german": "empiezo / empezamos"
          },
          {
            "id": "p5",
            "english": "I prefer / we prefer (preferir: e→ie)",
            "german": "prefiero / preferimos"
          }
        ],
        "target_answer": "puedo / podemos, duermo / dormimos, muestro / mostramos, empiezo / empezamos, prefiero / preferimos",
        "meaning": "I can / we can (poder: o→ue), I sleep / we sleep (dormir: o→ue), I show / we show (mostrar: o→ue), I start / we start (empezar: e→ie), I prefer / we prefer (preferir: e→ie)",
        "explanation": "Inside the boot = split vowel (ue / ie); outside the boot (nosotros) = single vowel (o / e).",
        "id": "es5111_e1"
      },
      {
        "type": "morpheme_tiles",
        "prompt": "Build 'I prefer' from 'preferir' by splitting the second 'e' into 'ie' and adding '-o':",
        "tile_options": [
          "pref",
          "ier",
          "o",
          "er"
        ],
        "target_answer": "prefiero",
        "meaning": "prefiero (I prefer)",
        "explanation": "preferir splits the stressed e (the one right before -ir) into ie: prefiero!",
        "id": "es5111_e2"
      },
      {
        "type": "shift_select",
        "prompt": "Compare 'I prefer coffee' and 'We prefer coffee'. Which pair is 100% accurate?",
        "options": [
          "Yo prefiero el café / Nosotros preferimos el café",
          "Yo prefero el café / Nosotros prefieremos el café",
          "Yo prefiero el café / Nosotros prefierimos el café"
        ],
        "target_answer": "Yo prefiero el café / Nosotros preferimos el café",
        "meaning": "I prefer coffee / We prefer coffee",
        "explanation": "Stressed stem in yo prefiero splits e→ie; unstressed stem in nosotros preferimos stays single e!",
        "id": "es5111_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I prefer the coffee, but we can drink water'",
        "target_answer": "Prefiero el café, pero podemos beber agua",
        "meaning": "I prefer the coffee, but we can drink water",
        "word_bank": [
          "Prefiero",
          "el",
          "café",
          "pero",
          "podemos",
          "beber",
          "agua",
          "Prefero",
          "puedemos",
          "la"
        ],
        "explanation": "Prefiero (stressed stem → ie) + pero podemos (unstressed stem → o).",
        "id": "es5111_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Duermo ocho horas por la noche",
        "replays": 2,
        "target_answer": "Duermo ocho horas por la noche",
        "meaning": "I sleep eight hours at night",
        "cues": [
          "I sleep (o→ue): Duermo",
          "eight hours: ocho horas",
          "at night: por la noche"
        ],
        "explanation": "Duermo ocho horas por la noche.",
        "affirmation": "Boot-verb rhythm locked in!",
        "id": "es5111_e5"
      }
    ],
    "summary": {
      "outcome": "Switch effortlessly between stressed boot forms (puedo, duermo, empiezo, prefiero) and unstressed nosotros forms (podemos, dormimos, empezamos, preferimos).",
      "use_example": {
        "german": "Prefiero el café por la mañana y duermo ocho horas por la noche.",
        "english": "I prefer coffee in the morning and I sleep eight hours at night."
      },
      "takeaway": "Follow your voice stress: stressed stem splits (ie/ue); stressed ending (-amos/-emos/-imos) stays single.",
      "curiosity_teaser": "Up next ([5112] e→i & -go Verbs: pido, digo, hago, pongo): master the e→i boot and the famous -go squad!"
    },
    "twist": {
      "prompt": "Assemble: 'Can you show me the house?'",
      "target_answer": "Me puedes mostrar la casa",
      "word_bank": [
        "Me",
        "puedes",
        "mostrar",
        "la",
        "casa",
        "podemos",
        "muestro",
        "el"
      ],
      "explanation": "¿Me puedes mostrar la casa?"
    }
  },
  {
    "id": 5112,
    "slug": "e-to-i-and-go-verbs",
    "title": "e→i & -go Verbs: pido, digo, hago, pongo",
    "subtitle": "Ordering with pido, telling with digo, doing with hago, and putting with pongo",
    "phase": 2,
    "shift_categories": [
      "f_to_h"
    ],
    "word_ids": [
      "pedir",
      "decir",
      "hacer",
      "poner",
      "tener",
      "tengo",
      "traer",
      "verdad",
      "mesa",
      "café"
    ],
    "table_word_ids": [
      "pedir",
      "decir",
      "hacer",
      "poner",
      "tener",
      "tengo"
    ],
    "hook": {
      "title": "The 'Yo -go' Squad: Tengo, Hago, Pongo, Digo, Traigo",
      "content": "Why do five of the most important verbs in Spanish end in **-go** (or **-igo**) in the 'I' (yo) form?\n• **tener** ('to have') → yo **tengo**\n• **hacer** ('to do/make') → yo **hago**\n• **poner** ('to put/place') → yo **pongo**\n• **decir** ('to say/tell', also e→i!) → yo **digo** (tú dices, él dice, nosotros decimos)\n• **traer** ('to bring') → yo **traigo**!\nAnd remember from Topic 26: because the subjunctive is built from the **yo** form, that **g** stays across the entire subjunctive (tenga, haga, ponga, diga, traiga)!"
    },
    "pattern": {
      "title": "The e→i Boot in -ir Verbs: Pedir (Pido, Pides, Pide, Pedimos)",
      "content": "Alongside e→ie and o→ue, a special group of **-ir** verbs (like **pedir** 'to ask for / order' and **decir** 'to say/tell') raises stressed **e** to **i**: yo **pido**, tú **pides**, él/ella/usted **pide**, nosotros **pedimos**, ellos **piden**!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I order / ask for (pedir: e→i)",
            "german": "pido"
          },
          {
            "id": "p2",
            "english": "I say / tell (decir: -go + e→i)",
            "german": "digo"
          },
          {
            "id": "p3",
            "english": "I do / make (hacer: -go)",
            "german": "hago"
          },
          {
            "id": "p4",
            "english": "I put / place (poner: -go)",
            "german": "pongo"
          },
          {
            "id": "p5",
            "english": "I bring (traer: -igo)",
            "german": "traigo"
          },
          {
            "id": "p6",
            "english": "I have (tener: -go)",
            "german": "tengo"
          }
        ],
        "target_answer": "pido, digo, hago, pongo, traigo, tengo",
        "meaning": "I order / ask for (pedir: e→i), I say / tell (decir: -go + e→i), I do / make (hacer: -go), I put / place (poner: -go), I bring (traer: -igo), I have (tener: -go)",
        "explanation": "The -go squad (tengo, hago, pongo, digo, traigo) anchors 1st-person singular and the entire present subjunctive!",
        "id": "es5112_e1"
      },
      {
        "type": "morpheme_tiles",
        "prompt": "Build 'I order / I ask for' (1st person singular of pedir, with e→i):",
        "tile_options": [
          "p",
          "i",
          "do",
          "e"
        ],
        "target_answer": "pido",
        "meaning": "pido (I order / ask for)",
        "explanation": "pedir raises e to i under stress: pido, pides, pide.",
        "id": "es5112_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'I put the book on the table' (using poner)?",
        "options": [
          "Pongo el libro en la mesa",
          "*Pono el libro en la mesa",
          "*Puesto el libro en la mesa"
        ],
        "target_answer": "Pongo el libro en la mesa",
        "meaning": "I put the book on the table",
        "explanation": "1st person singular of poner is pongo; en means both 'in' and 'on'!",
        "id": "es5112_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I always tell the truth (Digo la verdad)'",
        "target_answer": "Digo la verdad",
        "meaning": "I tell the truth",
        "word_bank": [
          "Digo",
          "la",
          "verdad",
          "Deco",
          "Pido",
          "el"
        ],
        "explanation": "Digo ('I say/tell') + la verdad ('the truth').",
        "id": "es5112_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Pido un café y pongo el libro en la mesa",
        "replays": 2,
        "target_answer": "Pido un café y pongo el libro en la mesa",
        "meaning": "I order a coffee and I put the book on the table",
        "cues": [
          "I order a coffee: Pido un café",
          "and I put the book: y pongo el libro",
          "on the table: en la mesa"
        ],
        "explanation": "Pido un café y pongo el libro en la mesa.",
        "affirmation": "e→i and -go verbs mastered!",
        "id": "es5112_e5"
      }
    ],
    "summary": {
      "outcome": "Conjugate pedir (pido, pides, pide) and the -go verbs (tengo, hago, pongo, digo, traigo).",
      "use_example": {
        "german": "Pido un café, digo la verdad y pongo la llave en la mesa.",
        "english": "I order a coffee, I tell the truth, and I put the key on the table."
      },
      "takeaway": "Learn the five -go verbs together: tengo, hago, pongo, digo, traigo.",
      "curiosity_teaser": "Next branch ([5121] Tapas, Mesa & Comida): step into a Spanish restaurant and order like a local!"
    },
    "twist": {
      "prompt": "Assemble: 'What are you doing today? (¿Qué haces hoy?)'",
      "target_answer": "Qué haces hoy",
      "word_bank": [
        "Qué",
        "haces",
        "hoy",
        "hago",
        "hacer",
        "Dónde"
      ],
      "explanation": "¿Qué haces hoy? (only yo has the -g-: yo hago, tú haces, él hace!)."
    }
  },
  {
    "id": 5121,
    "slug": "en-el-restaurante-mesa-cuenta",
    "title": "En el Restaurante: La Mesa & La Cuenta",
    "subtitle": "Reserving una mesa, ordering with quiero / para mí, and asking for la cuenta",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "mesa",
      "restaurante",
      "cuenta",
      "reservar",
      "pedir",
      "traer",
      "para",
      "dos",
      "por_favor",
      "gracias"
    ],
    "table_word_ids": [
      "mesa",
      "restaurante",
      "cuenta",
      "reservar",
      "pedir",
      "traer"
    ],
    "hook": {
      "title": "From Walking In to Paying the Bill",
      "content": "Here is the complete arc of a Spanish restaurant visit using pieces you already command:\n1) **Arriving**: *Buenas noches, tenemos una reservación — una mesa para dos, por favor.*\n2) **Ordering**: *Para mí, un bocadillo, por favor* ('For me, a sandwich, please') or *Quiero pedir...*\n3) **Finishing**: *¿Me trae la cuenta, por favor?* ('Will you bring me the bill, please?')."
    },
    "pattern": {
      "title": "Why 'A Table for Two' Uses 'Para'",
      "content": "Because the two diners are the intended recipients of the table, 'a table for two' is always **una mesa para dos**!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "a table for two",
            "german": "una mesa para dos"
          },
          {
            "id": "p2",
            "english": "for me (after preposition: mí with tilde!)",
            "german": "para mí"
          },
          {
            "id": "p3",
            "english": "I want to order",
            "german": "quiero pedir"
          },
          {
            "id": "p4",
            "english": "will you bring me the bill?",
            "german": "¿me trae la cuenta?"
          },
          {
            "id": "p5",
            "english": "the restaurant is full",
            "german": "el restaurante está lleno"
          }
        ],
        "target_answer": "una mesa para dos, para mí, quiero pedir, ¿me trae la cuenta?, el restaurante está lleno",
        "meaning": "a table for two, for me (after preposition: mí with tilde!), I want to order, will you bring me the bill?, the restaurant is full",
        "explanation": "una mesa para dos, para mí, pedir, and la cuenta cover any dining experience.",
        "id": "es5121_e1"
      },
      {
        "type": "shift_select",
        "prompt": "When the waiter asks what you want, how do you say 'For me, a coffee, please'?",
        "options": [
          "Para mí, un café, por favor",
          "*Por mi, un café, por favor",
          "*Para yo, un café, por favor"
        ],
        "target_answer": "Para mí, un café, por favor",
        "meaning": "For me, a coffee, please",
        "explanation": "Recipient takes para, and after a preposition 'I/me' is accented mí: Para mí!",
        "id": "es5121_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I want to reserve a table for two'",
        "target_answer": "Quiero reservar una mesa para dos",
        "meaning": "I want to reserve a table for two",
        "word_bank": [
          "Quiero",
          "reservar",
          "una",
          "mesa",
          "para",
          "dos",
          "por",
          "un",
          "tres"
        ],
        "explanation": "Quiero reservar + una mesa + para dos.",
        "id": "es5121_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "ask politely (using usted): 'Will you bring me the bill, please?'",
        "cues": [
          "To me → ¿Me",
          "brings (usted form of traer) → trae",
          "the bill, please → la cuenta, por favor?"
        ],
        "idea_parts": [
          "Will you bring me → Me trae",
          "the bill, please → la cuenta, por favor"
        ],
        "target_answer": "Me trae la cuenta por favor",
        "meaning": "Will you bring me the bill, please?",
        "word_bank": [
          "Me",
          "trae",
          "la",
          "cuenta",
          "por",
          "favor",
          "traigo",
          "el",
          "gracias"
        ],
        "explanation": "¿Me trae la cuenta, por favor?",
        "id": "es5121_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Tenemos una mesa para cuatro personas",
        "replays": 2,
        "target_answer": "Tenemos una mesa para cuatro personas",
        "meaning": "We have a table for four people",
        "cues": [
          "We have: Tenemos",
          "a table for: una mesa para",
          "four people: cuatro personas"
        ],
        "explanation": "Tenemos una mesa para cuatro personas.",
        "affirmation": "Restaurant table Spanish mastered!",
        "id": "es5121_e5"
      }
    ],
    "summary": {
      "outcome": "Reserve tables, order with para mí and pedir, and request la cuenta in a restaurant.",
      "use_example": {
        "german": "Buenas tardes, quiero reservar una mesa para dos, por favor.",
        "english": "Good afternoon, I want to reserve a table for two, please."
      },
      "takeaway": "una mesa para dos ('a table for two'), para mí ('for me'), and ¿me trae la cuenta? ('will you bring me the bill?').",
      "curiosity_teaser": "Up next ([5122] Pan, Queso, Vino & El Agua Fría): master table staples and why feminine el agua takes fría!"
    },
    "twist": {
      "prompt": "Assemble: 'The bill, please'",
      "target_answer": "La cuenta por favor",
      "word_bank": [
        "La",
        "cuenta",
        "por",
        "favor",
        "El",
        "mesa",
        "gracias"
      ],
      "explanation": "La cuenta, por favor."
    }
  },
  {
    "id": 5122,
    "slug": "pan-queso-vino-agua-fria",
    "title": "Pan, Queso, Vino & El Agua Fría",
    "subtitle": "Table staples and why feminine agua and hambre take masculine el in the singular (el agua fría)",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "pan",
      "queso",
      "vino",
      "agua",
      "sopa",
      "bocadillo",
      "frío",
      "caliente",
      "rico",
      "con"
    ],
    "table_word_ids": [
      "pan",
      "queso",
      "vino",
      "agua",
      "sopa",
      "bocadillo"
    ],
    "hook": {
      "title": "The Secret of 'El Agua Fría': Masculine Disguise, Feminine Soul!",
      "content": "In Lesson 5021 you learned that **agua** ('water') and **hambre** ('hunger') are feminine nouns that wear masculine **el / un** in the singular to avoid saying two stressed /a/ sounds in a row (*la agua*). Here is the crucial payoff: because *agua* is still 100% FEMININE underneath that disguise, any adjective that follows it MUST be feminine (-a): **el agua fría** ('the cold water', NEVER *el agua frío!), **el agua está muy buena**!"
    },
    "pattern": {
      "title": "Table Staples & 'Está Rico!'",
      "content": "Pair **el pan** ('bread'), **el queso** ('cheese'), **el vino** ('wine'), **la sopa** ('soup'), and **el bocadillo** ('sandwich') with **¡está muy rico / rica!** ('it's delicious!')."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "the cold water (masculine el, feminine fría!)",
            "german": "el agua fría"
          },
          {
            "id": "p2",
            "english": "bread with cheese",
            "german": "pan con queso"
          },
          {
            "id": "p3",
            "english": "a cheese sandwich",
            "german": "un bocadillo de queso"
          },
          {
            "id": "p4",
            "english": "the hot soup",
            "german": "la sopa caliente"
          },
          {
            "id": "p5",
            "english": "the cake is delicious!",
            "german": "¡el pastel está muy rico!"
          }
        ],
        "target_answer": "el agua fría, pan con queso, un bocadillo de queso, la sopa caliente, ¡el pastel está muy rico!",
        "meaning": "the cold water (masculine el, feminine fría!), bread with cheese, a cheese sandwich, the hot soup, the cake is delicious!",
        "explanation": "el agua is feminine, so its adjectives always take -a (el agua fría).",
        "id": "es5122_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'The water is cold' in Spanish?",
        "options": [
          "El agua está fría",
          "*El agua está frío",
          "*La agua está fría"
        ],
        "target_answer": "El agua está fría",
        "meaning": "The water is cold",
        "explanation": "Singular agua takes el in front, is in a thermal state (está), and triggers feminine agreement on the adjective (fría)!",
        "id": "es5122_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I want a cheese sandwich and cold water'",
        "target_answer": "Quiero un bocadillo de queso y agua fría",
        "meaning": "I want a cheese sandwich and cold water",
        "word_bank": [
          "Quiero",
          "un",
          "bocadillo",
          "de",
          "queso",
          "y",
          "agua",
          "fría",
          "frío",
          "una",
          "con"
        ],
        "explanation": "Quiero un bocadillo de queso + y agua fría.",
        "id": "es5122_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that the soup is hot and very delicious (rica)",
        "cues": [
          "The soup is (state) → La sopa está",
          "hot → caliente",
          "and very delicious (feminine) → y muy rica"
        ],
        "idea_parts": [
          "The soup is hot → La sopa está caliente",
          "and very delicious → y muy rica"
        ],
        "target_answer": "La sopa está caliente y muy rica",
        "meaning": "The soup is hot and very delicious",
        "word_bank": [
          "La",
          "sopa",
          "está",
          "caliente",
          "y",
          "muy",
          "rica",
          "es",
          "rico",
          "el"
        ],
        "explanation": "La sopa está caliente y muy rica.",
        "id": "es5122_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "El pan y el queso están muy ricos",
        "replays": 2,
        "target_answer": "El pan y el queso están muy ricos",
        "meaning": "The bread and the cheese are very delicious",
        "cues": [
          "The bread and the cheese: El pan y el queso",
          "are (plural state): están",
          "very delicious (m. pl.): muy ricos"
        ],
        "explanation": "El pan y el queso están muy ricos.",
        "affirmation": "El agua fría and table staples mastered!",
        "id": "es5122_e5"
      }
    ],
    "summary": {
      "outcome": "Order food and drink staples and apply feminine adjective agreement to el agua (el agua fría).",
      "use_example": {
        "german": "El agua está fría y la sopa está caliente y muy rica.",
        "english": "The water is cold and the soup is hot and very delicious."
      },
      "takeaway": "el agua wears masculine el in front, but takes feminine adjectives after it: el agua fría!",
      "curiosity_teaser": "Next branch ([5131] Viajes, Trenes & Estaciones): navigate train stations, tickets, and round-trip travel!"
    },
    "twist": {
      "prompt": "Assemble: 'The water is very cold'",
      "target_answer": "El agua está muy fría",
      "word_bank": [
        "El",
        "agua",
        "está",
        "muy",
        "fría",
        "La",
        "es",
        "frío"
      ],
      "explanation": "El agua está muy fría."
    }
  },
  {
    "id": 5131,
    "slug": "estacion-tren-billete",
    "title": "La Estación, El Tren & El Billete",
    "subtitle": "Navigating la estación, el tren, el billete, and departure times",
    "phase": 2,
    "shift_categories": [
      "cion"
    ],
    "word_ids": [
      "estación",
      "tren",
      "billete",
      "ocho",
      "nueve",
      "diez",
      "para",
      "comprar",
      "tener",
      "dónde"
    ],
    "table_word_ids": [
      "estación",
      "tren",
      "billete",
      "ocho",
      "nueve",
      "diez"
    ],
    "hook": {
      "title": "Why 'La Estación' Means Both 'Train Station' and 'Season'",
      "content": "Look at **la estación** (from Latin *stātiō*, cousin of *estar* 'to stand'): a train **station** is where the train stands still, and a **season of the year** (spring, summer, autumn, winter) is where the sun stands in its annual cycle! Alongside **el tren** ('the train') and **el billete** ('the ticket' in Spain; also called *el boleto* in Latin America), you can navigate any rail journey."
    },
    "pattern": {
      "title": "The Train FOR Madrid: El Tren Para Madrid",
      "content": "Remember our forward arrow **para** from Topic 13: a train or bus heading toward a destination city is **el tren para Madrid** ('the train for/to Madrid')!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "the train station",
            "german": "la estación de tren"
          },
          {
            "id": "p2",
            "english": "the train for Madrid (destination arrow)",
            "german": "el tren para Madrid"
          },
          {
            "id": "p3",
            "english": "the train ticket",
            "german": "el billete de tren"
          },
          {
            "id": "p4",
            "english": "at eight o'clock",
            "german": "a las ocho"
          },
          {
            "id": "p5",
            "english": "at nine in the morning",
            "german": "a las nueve de la mañana"
          }
        ],
        "target_answer": "la estación de tren, el tren para Madrid, el billete de tren, a las ocho, a las nueve de la mañana",
        "meaning": "the train station, the train for Madrid (destination arrow), the train ticket, at eight o'clock, at nine in the morning",
        "explanation": "de links noun compounds (la estación de tren, el billete de tren); para marks the train's destination.",
        "id": "es5131_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'I want to buy a train ticket for Madrid'?",
        "options": [
          "Quiero comprar un billete de tren para Madrid",
          "*Quiero comprar un tren billete por Madrid",
          "*Quiero comprar una billete de tren"
        ],
        "target_answer": "Quiero comprar un billete de tren para Madrid",
        "meaning": "I want to buy a train ticket for Madrid",
        "explanation": "un billete de tren ('a ticket of train') + para Madrid ('for Madrid' — destination).",
        "id": "es5131_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'Where is the train station?'",
        "target_answer": "Dónde está la estación de tren",
        "meaning": "Where is the train station?",
        "word_bank": [
          "Dónde",
          "está",
          "la",
          "estación",
          "de",
          "tren",
          "es",
          "el",
          "por"
        ],
        "explanation": "¿Dónde está la estación de tren?",
        "id": "es5131_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that you have your ticket for the train at eight",
        "cues": [
          "I have my ticket → Tengo mi billete",
          "for the train → para el tren",
          "at eight → a las ocho"
        ],
        "idea_parts": [
          "I have my ticket → Tengo mi billete",
          "for the train at eight → para el tren a las ocho"
        ],
        "target_answer": "Tengo mi billete para el tren a las ocho",
        "meaning": "I have my ticket for the train at eight",
        "word_bank": [
          "Tengo",
          "mi",
          "billete",
          "para",
          "el",
          "tren",
          "a",
          "las",
          "ocho",
          "tu",
          "por",
          "son"
        ],
        "explanation": "Tengo mi billete para el tren a las ocho.",
        "id": "es5131_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Tengo el billete de tren para mañana",
        "replays": 2,
        "target_answer": "Tengo el billete de tren para mañana",
        "meaning": "I have the train ticket for tomorrow",
        "cues": [
          "I have: Tengo",
          "the train ticket: el billete de tren",
          "for tomorrow: para mañana"
        ],
        "explanation": "Tengo el billete de tren para mañana.",
        "affirmation": "Train station and ticket Spanish mastered!",
        "id": "es5131_e5"
      }
    ],
    "summary": {
      "outcome": "Navigate train stations and tickets using la estación de tren, el billete de tren, and para + destination.",
      "use_example": {
        "german": "¿Dónde está la estación de tren? Tengo un billete para Madrid.",
        "english": "Where is the train station? I have a ticket for Madrid."
      },
      "takeaway": "Noun +noun compounds in Spanish link with de: el billete de tren ('the train ticket'), la estación de tren ('the train station').",
      "curiosity_teaser": "Up next ([5132] Ida y Vuelta, Salida & Llegada): buy one-way and round-trip tickets and read station boards!"
    },
    "twist": {
      "prompt": "Assemble: 'I have my train ticket'",
      "target_answer": "Tengo mi billete de tren",
      "word_bank": [
        "Tengo",
        "mi",
        "billete",
        "de",
        "tren",
        "mis",
        "por",
        "la"
      ],
      "explanation": "Tengo mi billete de tren."
    }
  },
  {
    "id": 5132,
    "slug": "ida-y-vuelta-salida-llegada",
    "title": "Ida y Vuelta, Salida & Llegada",
    "subtitle": "Buying one-way (sencillo / de ida) and round-trip (de ida y vuelta) tickets with para + city",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "billete",
      "tren",
      "estación",
      "ir",
      "voy",
      "para",
      "dos",
      "mañana",
      "hoy",
      "por_favor"
    ],
    "table_word_ids": [
      "billete",
      "tren",
      "estación",
      "ir",
      "voy",
      "para"
    ],
    "hook": {
      "title": "Decoding Station Boards: Ida y Vuelta, Salida & Llegada",
      "content": "When you look up at the departure board in Atocha Station in Madrid or buy a ticket at the window, three transparent words greet you:\n• **un billete de ida** = 'a one-way ticket' (lit. 'of going', from *ir* 'to go'!).\n• **un billete de ida y vuelta** = 'a round-trip / return ticket' (lit. 'of going and turning-back', from *volver* 'to return/revolve'!).\n• **la salida** = 'the exit / departure' (remember our false friend: *el éxito* is 'success', while **la salida** is the physical exit or departure!)."
    },
    "pattern": {
      "title": "Ordering Tickets at the Window",
      "content": "*Un billete de ida y vuelta para Toledo, por favor* ('A round-trip ticket to Toledo, please')."
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "a round-trip ticket ('of going and return')",
            "german": "un billete de ida y vuelta"
          },
          {
            "id": "p2",
            "english": "a one-way ticket ('of going')",
            "german": "un billete de ida"
          },
          {
            "id": "p3",
            "english": "for / to Madrid (destination arrow)",
            "german": "para Madrid"
          },
          {
            "id": "p4",
            "english": "for tomorrow (deadline/target date)",
            "german": "para mañana"
          },
          {
            "id": "p5",
            "english": "the exit / the departure (not éxito!)",
            "german": "la salida"
          }
        ],
        "target_answer": "un billete de ida y vuelta, un billete de ida, para Madrid, para mañana, la salida",
        "meaning": "a round-trip ticket ('of going and return'), a one-way ticket ('of going'), for / to Madrid (destination arrow), for tomorrow (deadline/target date), the exit / the departure (not éxito!)",
        "explanation": "ida comes from ir ('to go'); vuelta comes from volver ('to turn/return'); la salida is the exit or departure.",
        "id": "es5132_e1"
      },
      {
        "type": "shift_select",
        "prompt": "At the airport or train station, you see a sign that says 'SALIDA'. What does it mean (and how does it contrast with 'éxito')?",
        "options": [
          "la salida = 'exit / departure' (whereas el éxito = 'success'!)",
          "la salida = 'salad'",
          "la salida = 'success'"
        ],
        "target_answer": "la salida = 'exit / departure' (whereas el éxito = 'success'!)",
        "meaning": "exit / departure",
        "explanation": "From salir ('to go out / depart'), la salida means both 'the physical exit' and 'departure time'!",
        "id": "es5132_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'Two tickets for Madrid, please'",
        "target_answer": "Dos billetes para Madrid, por favor",
        "meaning": "Two tickets for Madrid, please",
        "word_bank": [
          "Dos",
          "billetes",
          "para",
          "Madrid",
          "por",
          "favor",
          "billete",
          "el"
        ],
        "explanation": "Dos billetes + para Madrid, por favor.",
        "id": "es5132_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that tomorrow you are going to Madrid by train ('en tren')",
        "cues": [
          "Tomorrow I am going → Mañana voy",
          "to Madrid → a Madrid",
          "by train (in train) → en tren"
        ],
        "idea_parts": [
          "Tomorrow I am going to Madrid → Mañana voy a Madrid",
          "by train → en tren"
        ],
        "target_answer": "Mañana voy a Madrid en tren",
        "meaning": "Tomorrow I am going to Madrid by train",
        "word_bank": [
          "Mañana",
          "voy",
          "a",
          "Madrid",
          "en",
          "tren",
          "por",
          "el",
          "vas"
        ],
        "explanation": "Mañana voy a Madrid en tren — Spanish uses en + vehicle (en tren, en coche, en autobús) for 'by train / by car'!",
        "id": "es5132_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Quiero dos billetes para mañana por favor",
        "replays": 2,
        "target_answer": "Quiero dos billetes para mañana por favor",
        "meaning": "I want two tickets for tomorrow, please",
        "cues": [
          "I want: Quiero",
          "two tickets: dos billetes",
          "for tomorrow, please: para mañana, por favor"
        ],
        "explanation": "Quiero dos billetes para mañana, por favor.",
        "affirmation": "Travel and ticket Spanish mastered!",
        "id": "es5132_e5"
      }
    ],
    "summary": {
      "outcome": "Buy tickets, travel by train (en tren), and distinguish la salida ('exit/departure') from el éxito ('success').",
      "use_example": {
        "german": "Quiero dos billetes para Madrid mañana en tren, por favor.",
        "english": "I want two tickets for Madrid tomorrow by train, please."
      },
      "takeaway": "Travel by a vehicle takes en without an article: en tren ('by train').",
      "curiosity_teaser": "Next branch ([5141] Familia, Profesiones & Pasiones): learn why Spanish drops 'un/una' before professions!"
    },
    "twist": {
      "prompt": "Assemble: 'I am going to the station today'",
      "target_answer": "Voy a la estación hoy",
      "word_bank": [
        "Voy",
        "a",
        "la",
        "estación",
        "hoy",
        "al",
        "en",
        "mañana"
      ],
      "explanation": "Voy a la estación hoy."
    }
  },
  {
    "id": 5141,
    "slug": "medico-profesor-actor-no-un",
    "title": "Médico, Profesor & Actor (No 'un'!)",
    "subtitle": "Why Spanish drops un/una after ser before unmodified professions: Soy profesor, Ella es doctora",
    "phase": 2,
    "shift_categories": [],
    "word_ids": [
      "ser",
      "soy",
      "eres",
      "es",
      "somos",
      "padre",
      "madre",
      "hermano",
      "universidad",
      "bueno"
    ],
    "table_word_ids": [
      "ser",
      "soy",
      "eres",
      "es",
      "somos",
      "padre"
    ],
    "hook": {
      "title": "Why Spanish Says 'Soy Profesor' (Without 'Un')!",
      "content": "In English, you must put 'a/an' before a profession: 'I am **a** teacher', 'My mother is **a** doctor'. In Spanish (just like French), a bare profession after **ser** is treated like an identity label or adjective rather than a separate object — so **you drop un / una**: **Soy profesor** ('I am a teacher'), **Mi madre es doctora** ('My mother is a doctor')!"
    },
    "pattern": {
      "title": "When Does 'Un / Una' Come Back? When You Add an Adjective!",
      "content": "The moment you add a descriptive adjective to evaluate the person ('She is a **very good** doctor', 'He is an **excellent** teacher'), **un / una** comes right back: **Ella es una doctora muy buena**, **Él es un buen profesor**!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I am a teacher (bare profession: no un!)",
            "german": "soy profesor"
          },
          {
            "id": "p2",
            "english": "my mother is a doctor (bare profession: no una!)",
            "german": "mi madre es doctora"
          },
          {
            "id": "p3",
            "english": "he is a very good teacher (modified: un returns!)",
            "german": "es un profesor muy bueno"
          },
          {
            "id": "p4",
            "english": "are you a student / teacher?",
            "german": "¿eres profesor?"
          },
          {
            "id": "p5",
            "english": "at the university",
            "german": "en la universidad"
          }
        ],
        "target_answer": "soy profesor, mi madre es doctora, es un profesor muy bueno, ¿eres profesor?, en la universidad",
        "meaning": "I am a teacher (bare profession: no un!), my mother is a doctor (bare profession: no una!), he is a very good teacher (modified: un returns!), are you a student / teacher?, at the university",
        "explanation": "Bare profession after ser = no un/una; profession + adjective = include un/una!",
        "id": "es5141_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'My father is a teacher at the university' in natural Spanish?",
        "options": [
          "Mi padre es profesor en la universidad",
          "*Mi padre es un profesor en la universidad",
          "*Mi padre está profesor en la universidad"
        ],
        "target_answer": "Mi padre es profesor en la universidad",
        "meaning": "My father is a teacher at the university",
        "explanation": "Professions are identity (ser → es) and omit un/una when unmodified!",
        "id": "es5141_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'I am a teacher at the university'",
        "target_answer": "Soy profesor en la universidad",
        "meaning": "I am a teacher at the university",
        "word_bank": [
          "Soy",
          "profesor",
          "en",
          "la",
          "universidad",
          "un",
          "Estoy",
          "el"
        ],
        "explanation": "Soy + profesor (no un!) + en la universidad.",
        "id": "es5141_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that she is a very good doctor ('Ella es una doctora muy buena' — with 'una' because of 'muy buena'!)",
        "cues": [
          "She is → Ella es",
          "a doctor (una returns because of the adjective!) → una doctora",
          "very good → muy buena"
        ],
        "idea_parts": [
          "She is a doctor → Ella es una doctora",
          "very good → muy buena"
        ],
        "target_answer": "Ella es una doctora muy buena",
        "meaning": "She is a very good doctor",
        "word_bank": [
          "Ella",
          "es",
          "una",
          "doctora",
          "muy",
          "buena",
          "está",
          "bueno",
          "un"
        ],
        "explanation": "Ella es una doctora muy buena — adding muy buena brings back una!",
        "id": "es5141_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Mi hermano es profesor en Madrid",
        "replays": 2,
        "target_answer": "Mi hermano es profesor en Madrid",
        "meaning": "My brother is a teacher in Madrid",
        "cues": [
          "My brother is: Mi hermano es",
          "a teacher (no un): profesor",
          "in Madrid: en Madrid"
        ],
        "explanation": "Mi hermano es profesor en Madrid.",
        "affirmation": "Profession rule (no un/una!) mastered!",
        "id": "es5141_e5"
      }
    ],
    "summary": {
      "outcome": "State professions with ser without un/una, and restore un/una when a descriptive adjective is added.",
      "use_example": {
        "german": "Soy profesor en la universidad y mi madre es una doctora muy buena.",
        "english": "I am a teacher at the university and my mother is a very good doctor."
      },
      "takeaway": "Soy profesor (bare identity = no un) vs Es un profesor excelente (with adjective = un returns).",
      "curiosity_teaser": "Up next ([5142] La Música, El Cine & Los Libros): talk about cultural passions with gustar and encantar!"
    },
    "twist": {
      "prompt": "Assemble: 'Are you a teacher?'",
      "target_answer": "Eres profesor",
      "word_bank": [
        "Eres",
        "profesor",
        "un",
        "Estás",
        "Soy"
      ],
      "explanation": "¿Eres profesor?"
    }
  },
  {
    "id": 5142,
    "slug": "musica-cine-libros-pasiones",
    "title": "La Música, El Cine & Los Libros",
    "subtitle": "Talking about music, cinema, and books with me gusta / me encanta + definite article",
    "phase": 4,
    "shift_categories": [
      "ico"
    ],
    "word_ids": [
      "música",
      "cine",
      "libro",
      "gustar",
      "gusta",
      "encantar",
      "clásico",
      "mucho",
      "ir",
      "vamos"
    ],
    "table_word_ids": [
      "música",
      "cine",
      "libro",
      "gustar",
      "gusta",
      "encantar"
    ],
    "hook": {
      "title": "Why Spanish Always Says 'Me Gusta LA Música' (With the Article)!",
      "content": "In English, when you talk about something in general, you drop 'the': 'I love music', 'I like classic books', 'Cinema is fantastic'. In Spanish, remember from Topic 25 that the thing liked is the grammatical SUBJECT of *gustar / encantar* — and in Spanish, general subjects ALWAYS wear their definite article (**el, la, los, las**): **Me encanta la música**, **Me gusta el cine**, **Me gustan los libros clásicos**!"
    },
    "pattern": {
      "title": "Going to the Movies: Vamos al Cine",
      "content": "Because el cine ('the cinema / movie theater') is masculine, 'going to the movies' uses our mandatory contraction **a + el = al**: **Vamos al cine esta noche** ('Let's go to the movies tonight')!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "I love music (requires la!)",
            "german": "me encanta la música"
          },
          {
            "id": "p2",
            "english": "I like cinema (requires el!)",
            "german": "me gusta el cine"
          },
          {
            "id": "p3",
            "english": "I like classic books (plural → gustan + los!)",
            "german": "me gustan los libros clásicos"
          },
          {
            "id": "p4",
            "english": "let's go to the movies (a + el = al)",
            "german": "vamos al cine"
          },
          {
            "id": "p5",
            "english": "classical music",
            "german": "la música clásica"
          }
        ],
        "target_answer": "me encanta la música, me gusta el cine, me gustan los libros clásicos, vamos al cine, la música clásica",
        "meaning": "I love music (requires la!), I like cinema (requires el!), I like classic books (plural → gustan + los!), let's go to the movies (a + el = al), classical music",
        "explanation": "After gustar and encantar, noun subjects always keep their definite article (el, la, los, las).",
        "id": "es5142_e1"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'I love classical music' in Spanish?",
        "options": [
          "Me encanta la música clásica",
          "*Me encanta música clásica",
          "*Yo encanto la música clásica"
        ],
        "target_answer": "Me encanta la música clásica",
        "meaning": "I love classical music",
        "explanation": "Always include la before música: Me encanta la música clásica.",
        "id": "es5142_e2"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'Let's go to the movies tonight'",
        "target_answer": "Vamos al cine esta noche",
        "meaning": "Let's go to the movies tonight",
        "word_bank": [
          "Vamos",
          "al",
          "cine",
          "esta",
          "noche",
          "a",
          "el",
          "este"
        ],
        "explanation": "Vamos + al (a + el) + cine + esta noche.",
        "id": "es5142_e3"
      },
      {
        "type": "transcribe",
        "prompt": "Tell me:",
        "idea": "say that you like classic books very much ('Me gustan mucho los libros clásicos')",
        "cues": [
          "To me are pleasing (plural) → Me gustan",
          "very much → mucho",
          "the classic books → los libros clásicos"
        ],
        "idea_parts": [
          "I like very much → Me gustan mucho",
          "classic books → los libros clásicos"
        ],
        "target_answer": "Me gustan mucho los libros clásicos",
        "meaning": "I like classic books very much",
        "word_bank": [
          "Me",
          "gustan",
          "mucho",
          "los",
          "libros",
          "clásicos",
          "gusta",
          "el",
          "clásico"
        ],
        "explanation": "Me gustan mucho los libros clásicos.",
        "id": "es5142_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Me encanta la música y el cine",
        "replays": 2,
        "target_answer": "Me encanta la música y el cine",
        "meaning": "I love music and cinema",
        "cues": [
          "I love: Me encanta",
          "the music: la música",
          "and the cinema: y el cine"
        ],
        "explanation": "Me encanta la música y el cine.",
        "affirmation": "Cultural passions with gustar and encantar mastered!",
        "id": "es5142_e5"
      }
    ],
    "summary": {
      "outcome": "Express cultural passions using me gusta/gustan and me encanta/encantan with mandatory definite articles.",
      "use_example": {
        "german": "Me encanta la música clásica, me gustan los libros y vamos al cine esta noche.",
        "english": "I love classical music, I like books, and we're going to the movies tonight."
      },
      "takeaway": "Never drop el/la/los/las when naming things you like after gustar or encantar!",
      "curiosity_teaser": "Next branch ([5151] El Cuerpo, La Ropa & Los Colores): discover why la mano is feminine despite ending in -o!"
    },
    "twist": {
      "prompt": "Assemble: 'Do you like cinema?'",
      "target_answer": "Te gusta el cine",
      "word_bank": [
        "Te",
        "gusta",
        "el",
        "cine",
        "gustan",
        "la",
        "Tú"
      ],
      "explanation": "¿Te gusta el cine?"
    }
  },
  {
    "id": 5151,
    "slug": "cabeza-mano-corazon-body",
    "title": "La Cabeza, La Mano & El Corazón",
    "subtitle": "Why la mano is feminine despite -o, and expressing aches with me duele la cabeza",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "cabeza",
      "mano",
      "corazón",
      "me",
      "te",
      "le",
      "de",
      "con",
      "el",
      "la"
    ],
    "table_word_ids": [
      "cabeza",
      "mano",
      "corazón",
      "me",
      "te",
      "le"
    ],
    "hook": {
      "title": "Meet Spanish's Famous Feminine Rebel in '-o': La Mano!",
      "content": "In Topic 9 and Topic 10 you met masculine words ending in -a: *el día* (from Latin 5th-declension masculine *diēs*) and *el problema* (from Greek neuter *-ma*). Now meet their mirror image: **la mano** ('the hand', plural **las manos**)! Why is *la mano* feminine even though it ends in **-o**? Because in Latin, *manus* (root of English *manual*, *manuscript*, *manufacture*) belonged to the 4th declension and was 100% feminine! Spanish kept both its -o vowel and its feminine gender: **la mano, una mano, las manos**!"
    },
    "pattern": {
      "title": "Talking About the Body: Definite Articles Instead of 'My / Your'",
      "content": "When talking about parts of your own body (**la cabeza** 'the head', **la mano** 'the hand', **el corazón** 'the heart', cousin of English *core* and *cordial*), Spanish uses the definite article (**el / la**) instead of *mi / tu*: **Me duele la cabeza** ('My head hurts', lit. 'To-me hurts the head')!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "the head (captain / capital)",
            "german": "la cabeza"
          },
          {
            "id": "p2",
            "english": "the hand (feminine rebel in -o!)",
            "german": "la mano"
          },
          {
            "id": "p3",
            "english": "the hands (feminine plural)",
            "german": "las manos"
          },
          {
            "id": "p4",
            "english": "the heart (core / cordial)",
            "german": "el corazón"
          },
          {
            "id": "p5",
            "english": "my head hurts / I have a headache",
            "german": "me duele la cabeza"
          }
        ],
        "target_answer": "la cabeza, la mano, las manos, el corazón, me duele la cabeza",
        "meaning": "the head (captain / capital), the hand (feminine rebel in -o!), the hands (feminine plural), the heart (core / cordial), my head hurts / I have a headache",
        "explanation": "la mano is feminine despite ending in -o; body parts use el/la with me/te/le.",
        "id": "es5151_e1"
      },
      {
        "type": "reverse_cognate",
        "prompt": "Spanish el corazón ('the heart', from Latin cor) shares its root with which warm English adjective meaning 'heartfelt, warm, and friendly' (as in 'a ___ welcome')?",
        "target_answer": "cordial",
        "meaning": "a cordial welcome is literally a Welcome 'from the heart' (cor / corazón)!",
        "explanation": "Latin cor, cordis ('heart') gave English core, courage, cordial, record ('call back to the heart'), and Spanish corazón.",
        "id": "es5151_e2"
      },
      {
        "type": "shift_select",
        "prompt": "Which phrase is 100% grammatically accurate for 'my cold hands' / 'the small hand'?",
        "options": [
          "la mano pequeña / las manos frías",
          "*el mano pequeño / los manos fríos",
          "*la mano pequeño"
        ],
        "target_answer": "la mano pequeña / las manos frías",
        "meaning": "the small hand / the cold hands",
        "explanation": "Because la mano is feminine, its articles and adjectives are always feminine: la mano pequeña, las manos frías!",
        "id": "es5151_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'My head hurts today'",
        "target_answer": "Me duele la cabeza hoy",
        "meaning": "My head hurts today",
        "word_bank": [
          "Me",
          "duele",
          "la",
          "cabeza",
          "hoy",
          "mi",
          "el",
          "gusta"
        ],
        "explanation": "Me duele + la cabeza + hoy.",
        "id": "es5151_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Me duele mucho la cabeza hoy",
        "replays": 2,
        "target_answer": "Me duele mucho la cabeza hoy",
        "meaning": "My head hurts a lot today",
        "cues": [
          "To me hurts: Me duele",
          "a lot: mucho",
          "the head today: la cabeza hoy"
        ],
        "explanation": "Me duele mucho la cabeza hoy.",
        "affirmation": "La mano and body expressions mastered!",
        "id": "es5151_e5"
      }
    ],
    "summary": {
      "outcome": "Use la cabeza, feminine la mano, and el corazón with definite articles and doler.",
      "use_example": {
        "german": "Me duele la cabeza hoy y tengo las manos frías.",
        "english": "My head hurts today and my hands are cold."
      },
      "takeaway": "el día and el problema are masculine in -a; la mano is feminine in -o!",
      "curiosity_teaser": "Up next ([5152] El Abrigo, El Vestido & Los Colores): describe clothing and colors with llevar!"
    },
    "twist": {
      "prompt": "Assemble: 'I have cold hands (Tengo las manos frías)'",
      "target_answer": "Tengo las manos frías",
      "word_bank": [
        "Tengo",
        "las",
        "manos",
        "frías",
        "los",
        "fríos",
        "el"
      ],
      "explanation": "Tengo las manos frías — feminine plural las + frías agrees with manos!"
    }
  },
  {
    "id": 5152,
    "slug": "abrigo-vestido-colores-clothing",
    "title": "El Abrigo, El Vestido & Los Colores",
    "subtitle": "Describing clothing with llevar ('to wear/carry') and post-nominal color agreement",
    "phase": 4,
    "shift_categories": [],
    "word_ids": [
      "abrigo",
      "vestido",
      "negro",
      "rojo",
      "azul",
      "blanco",
      "verde",
      "nuevo",
      "hermoso",
      "comprar"
    ],
    "table_word_ids": [
      "abrigo",
      "vestido",
      "negro",
      "rojo",
      "azul",
      "blanco"
    ],
    "hook": {
      "title": "Why 'To Wear' Is 'To Carry' (Llevar) in Spanish",
      "content": "In Lesson 2002 you met **llevar** ('to carry') in time expressions (*llevo dos años aquí*). In everyday life, **llevar** is also the standard Spanish verb for **'to wear [clothing]'** — because you literally carry your clothes on your body! **Llevo un abrigo negro** ('I am wearing a black coat'), **Ella lleva un vestido rojo** ('She is wearing a red dress')!"
    },
    "pattern": {
      "title": "Color Agreement Review Across Clothing",
      "content": "• Masculine **el abrigo** ('the coat/overcoat'): un abrigo negro, un abrigo azul, un abrigo nuevo.\n• Masculine **el vestido** ('the dress' — cognate with English *vest* and *vestment*!): un vestido rojo, un vestido blanco, un vestido hermoso!"
    },
    "exercises": [
      {
        "type": "matching_pairs",
        "prompt": "Match each English expression with its Spanish partner:",
        "matching_pairs": [
          {
            "id": "p1",
            "english": "the coat / overcoat",
            "german": "el abrigo"
          },
          {
            "id": "p2",
            "english": "the dress (vest / vestment)",
            "german": "el vestido"
          },
          {
            "id": "p3",
            "english": "a black coat",
            "german": "un abrigo negro"
          },
          {
            "id": "p4",
            "english": "a red dress",
            "german": "un vestido rojo"
          },
          {
            "id": "p5",
            "english": "I wear / I am wearing (lit. I carry)",
            "german": "llevo"
          }
        ],
        "target_answer": "el abrigo, el vestido, un abrigo negro, un vestido rojo, llevo",
        "meaning": "the coat / overcoat, the dress (vest / vestment), a black coat, a red dress, I wear / I am wearing (lit. I carry)",
        "explanation": "llevar means both 'to carry' and 'to wear'; colors follow the clothing noun.",
        "id": "es5152_e1"
      },
      {
        "type": "reverse_cognate",
        "prompt": "Spanish el vestido ('dress / garment', from Latin vestītus) shares its root with which English word for a sleeveless garment worn under a suit jacket?",
        "target_answer": "vest",
        "meaning": "vest, vestment, and invest ('to clothe your money in something') all come from the root of vestido!",
        "explanation": "Latin vestīre ('to clothe') gave Spanish vestir / el vestido and English vest and vestment.",
        "id": "es5152_e2"
      },
      {
        "type": "shift_select",
        "prompt": "How do you say 'I want to buy a new black coat'?",
        "options": [
          "Quiero comprar un abrigo negro y nuevo",
          "*Quiero comprar un negro abrigo",
          "*Quiero comprar una abriga negra"
        ],
        "target_answer": "Quiero comprar un abrigo negro y nuevo",
        "meaning": "I want to buy a new black coat",
        "explanation": "el abrigo is masculine, and descriptive adjectives follow the noun.",
        "id": "es5152_e3"
      },
      {
        "type": "syntax_builder",
        "prompt": "Assemble: 'It is a very beautiful red dress'",
        "target_answer": "Es un vestido rojo muy hermoso",
        "meaning": "It is a very beautiful red dress",
        "word_bank": [
          "Es",
          "un",
          "vestido",
          "rojo",
          "muy",
          "hermoso",
          "una",
          "roja",
          "hermosa"
        ],
        "explanation": "el vestido is a masculine noun (-o), so both rojo and hermoso stay masculine!",
        "id": "es5152_e4"
      },
      {
        "type": "dictation",
        "prompt": "Listen and write the whole sentence.",
        "spoken": "Quiero comprar este abrigo azul",
        "replays": 2,
        "target_answer": "Quiero comprar este abrigo azul",
        "meaning": "I want to buy this blue coat",
        "cues": [
          "I want to buy: Quiero comprar",
          "this (masculine): este",
          "blue coat: abrigo azul"
        ],
        "explanation": "Quiero comprar este abrigo azul.",
        "affirmation": "All 123 lessons of El Puente authored and verified!",
        "id": "es5152_e5"
      }
    ],
    "summary": {
      "outcome": "Describe clothing (el abrigo, el vestido) with post-nominal colors and comprar / llevar.",
      "use_example": {
        "german": "Quiero comprar este abrigo negro y ese vestido rojo.",
        "english": "I want to buy this black coat and that red dress."
      },
      "takeaway": "Notice that el vestido ('the dress') ends in -o and is grammatically masculine: un vestido rojo!",
      "curiosity_teaser": "Congratulations — you have completed every spine topic, cluster sprig, and support branch of El Puente!"
    },
    "twist": {
      "prompt": "Assemble: 'I have a black coat'",
      "target_answer": "Tengo un abrigo negro",
      "word_bank": [
        "Tengo",
        "un",
        "abrigo",
        "negro",
        "una",
        "negra",
        "la"
      ],
      "explanation": "Tengo un abrigo negro."
    }
  }
];
