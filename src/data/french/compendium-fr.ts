import type { CompendiumData, FalseFriend, CompoundCalque, ShiftFamily, WordEntity } from "@/lib/types";

// ---------------------------------------------------------------------------
// The French compendium — authored directly as typed data (not markdown).
//
// word_connections.md is the German pipeline's source of truth and stays
// untouched; French words are hand-authored here and machine-checked by
// src/tests/french-content.test.ts. The "shift families" are the French
// decode engine: conversion bridges from the formal register of English
// (see docs/french-course/french-course-design.md).
// ---------------------------------------------------------------------------

const W = (w: WordEntity): WordEntity => w;

const WORDS: WordEntity[] = [
  // --- topic 1: the French inside your English -------------------------------
  W({ id: "gâteau", target_word: "gâteau", english_cognate: "gateau", english_meaning: "cake", gender: "le", ipa: "/ɡɑto/", sound_shift_ids: [], shift_rule: "Borrowed whole", context_phrase: "Je veux le gâteau.", context_translation: "I want the cake.", etymology_derivation: "Old French gastel, from Frankish *wastil. English 'gateau' narrowed to a rich cake; French kept the everyday word — form travels, meaning drifts.", domain: "food" }),
  W({ id: "café", target_word: "café", english_cognate: "café", english_meaning: "coffee; coffee shop", gender: "le", ipa: "/kafe/", sound_shift_ids: [], shift_rule: "Borrowed whole", context_phrase: "Je veux le café.", context_translation: "I want the coffee.", etymology_derivation: "Turkish kahve → Italian caffè → French café. English took the same journey twice: coffee and café.", domain: "food" }),
  W({ id: "vouloir", target_word: "vouloir", english_cognate: "voluntary", english_meaning: "to want (je veux: I want)", gender: null, ipa: "/vulwaʁ/", sound_shift_ids: [], shift_rule: "Latin velle/volo — the volunteer root", context_phrase: "Je veux le gâteau.", context_translation: "I want the cake.", etymology_derivation: "Latin volō 'I want' → vouloir. A volunteer is the one who wants to do — the want-root English kept in voluntary, benevolent.", domain: "verbs" }),
  W({ id: "tu", target_word: "tu", english_cognate: "thou", english_meaning: "you (singular, informal)", gender: null, ipa: "/ty/", sound_shift_ids: [], shift_rule: "Latin tū", context_phrase: "Tu veux le gâteau ?", context_translation: "Do you want the cake?", etymology_derivation: "Latin tū — the very word the King James Bible still whispers as thou. Point your lips; the vowel is not English's.", domain: "basics" }),
  W({ id: "je", target_word: "je", english_cognate: "I (Latin ego)", english_meaning: "I", gender: null, ipa: "/ʒə/", sound_shift_ids: [], shift_rule: "Latin egō", context_phrase: "Je veux le café.", context_translation: "I want the coffee.", etymology_derivation: "Latin egō → *eo → je. Spanish yo is the sibling; English 'I' descends from the same pronoun by the Germanic road.", domain: "basics" }),
  W({ id: "le", target_word: "le", english_cognate: "the (Latin ille 'that')", english_meaning: "the (masculine); it", gender: null, ipa: "/lə/", sound_shift_ids: [], shift_rule: "Latin ille worn down", context_phrase: "Le gâteau est bon.", context_translation: "The cake is good.", etymology_derivation: "Latin ille 'that one' → il → le. English 'the' walked the same road — both are worn-down pointers.", domain: "basics" }),
  W({ id: "la", target_word: "la", english_cognate: "the (feminine)", english_meaning: "the (feminine); it", gender: null, ipa: "/la/", sound_shift_ids: [], shift_rule: "Latin illa worn down", context_phrase: "La collection est grande.", context_translation: "The collection is big.", etymology_derivation: "ille's feminine illa → la. Before a vowel it loses its a: l'opinion.", domain: "basics" }),
  W({ id: "un_peu", target_word: "un peu", english_cognate: "paucity, few", english_meaning: "a little", gender: null, ipa: "/œ̃ pø/", sound_shift_ids: [], shift_rule: "Latin paucus", context_phrase: "Je veux un peu.", context_translation: "I want a little.", etymology_derivation: "Latin paucus 'a small amount' gave English 'paucity' and French peu — one root, two registers.", domain: "basics" }),

  // --- topic 2: the -ION bridge ----------------------------------------------
  W({ id: "collection", target_word: "collection", english_cognate: "collection", english_meaning: "collection", gender: "la", ipa: "/kɔlɛksjɔ̃/", sound_shift_ids: ["ion"], shift_rule: "-ION nouns convert 1:1", context_phrase: "Je veux la collection.", context_translation: "I want the collection.", etymology_derivation: "Latin collectio. The -ION ending is your passport: thousands of nouns cross unchanged — and every one is feminine.", domain: "abstract" }),
  W({ id: "tradition", target_word: "tradition", english_cognate: "tradition", english_meaning: "tradition", gender: "la", ipa: "/tʁadisjɔ̃/", sound_shift_ids: ["ion"], shift_rule: "-ION nouns convert 1:1", context_phrase: "La tradition est importante.", context_translation: "The tradition is important.", etymology_derivation: "Latin traditio 'a handing over' — a tradition is what gets handed over.", domain: "abstract" }),
  W({ id: "confirmation", target_word: "confirmation", english_cognate: "confirmation", english_meaning: "confirmation", gender: "la", ipa: "/kɔ̃fiʁmasjɔ̃/", sound_shift_ids: ["ion"], shift_rule: "-ION nouns convert 1:1", context_phrase: "Tu veux la confirmation ?", context_translation: "Do you want the confirmation?", etymology_derivation: "The nasal N is thought, not said: confiRmation with the N half-swallowed.", domain: "abstract" }),
  W({ id: "organisation", target_word: "organisation", english_cognate: "organization", english_meaning: "organization", gender: "la", ipa: "/ɔʁɡanizasjɔ̃/", sound_shift_ids: ["ion"], shift_rule: "-ION nouns convert 1:1", context_phrase: "L'organisation est grande.", context_translation: "The organization is big.", etymology_derivation: "English spells -ization, French -isation — one S, never a Z, in French.", domain: "abstract" }),
  W({ id: "opinion", target_word: "opinion", english_cognate: "opinion", english_meaning: "opinion", gender: "la", ipa: "/ɔpinjɔ̃/", sound_shift_ids: ["ion"], shift_rule: "-ION nouns convert 1:1", context_phrase: "J'ai mon opinion.", context_translation: "I have my opinion.", etymology_derivation: "Latin opinio 'what one supposes'. Starts with a vowel, so la loses its a: l'opinion.", domain: "abstract" }),
  W({ id: "réservation", target_word: "réservation", english_cognate: "reservation", english_meaning: "reservation, booking", gender: "la", ipa: "/ʁezɛʁvasjɔ̃/", sound_shift_ids: ["ion"], shift_rule: "-ION nouns convert 1:1", context_phrase: "La réservation est confirmée.", context_translation: "The reservation is confirmed.", etymology_derivation: "English wrote the accent out; French kept the é so you know where the stress lands.", domain: "abstract" }),
  W({ id: "complication", target_word: "complication", english_cognate: "complication", english_meaning: "complication", gender: "la", ipa: "/kɔ̃plikasjɔ̃/", sound_shift_ids: ["ion"], shift_rule: "-ION nouns convert 1:1", context_phrase: "Pas de complication.", context_translation: "No complication.", etymology_derivation: "Two nasals, one rule: con- and -tion both think their N without saying it.", domain: "abstract" }),
  W({ id: "passion", target_word: "passion", english_cognate: "passion", english_meaning: "passion", gender: "la", ipa: "/pasjɔ̃/", sound_shift_ids: ["ion"], shift_rule: "-ION nouns convert 1:1", context_phrase: "C'est ma passion.", context_translation: "It's my passion.", etymology_derivation: "Latin passio 'suffering' — passion is what you suffer for.", domain: "feelings" }),
  W({ id: "invitation", target_word: "invitation", english_cognate: "invitation", english_meaning: "invitation", gender: "la", ipa: "/ɛ̃vitasjɔ̃/", sound_shift_ids: ["ion"], shift_rule: "-ION nouns convert 1:1", context_phrase: "Merci pour l'invitation.", context_translation: "Thanks for the invitation.", etymology_derivation: "in- + vitare; the invitation is the not-refusing.", domain: "abstract" }),

  // --- topic 3: the -ation engine --------------------------------------------
  W({ id: "confirmer", target_word: "confirmer", english_cognate: "confirm", english_meaning: "to confirm", gender: null, ipa: "/kɔ̃fiʁme/", sound_shift_ids: ["ation"], shift_rule: "-ATION noun → -er verb", context_phrase: "Je veux confirmer.", context_translation: "I want to confirm.", etymology_derivation: "confirmation → confirmer. Strip -ation, bolt on -er (pronounced /e/), and the noun becomes the verb.", domain: "verbs" }),
  W({ id: "organiser", target_word: "organiser", english_cognate: "organize", english_meaning: "to organize", gender: null, ipa: "/ɔʁɡanize/", sound_shift_ids: ["ation"], shift_rule: "-ATION noun → -er verb", context_phrase: "Je vais organiser.", context_translation: "I'm going to organize.", etymology_derivation: "organisation → organiser. One S in French, even where English writes Z.", domain: "verbs" }),
  W({ id: "célébrer", target_word: "célébrer", english_cognate: "celebrate", english_meaning: "to celebrate", gender: null, ipa: "/selebʁe/", sound_shift_ids: ["ation"], shift_rule: "-ATION noun → -er verb", context_phrase: "Je veux célébrer.", context_translation: "I want to celebrate.", etymology_derivation: "célébration → célébrer. The trap: not *célébrater — the whole -ation goes before -er arrives.", domain: "verbs" }),
  W({ id: "participer", target_word: "participer", english_cognate: "participate", english_meaning: "to participate; to get involved", gender: null, ipa: "/paʁtisipe/", sound_shift_ids: ["ation"], shift_rule: "-ATION noun → -er verb", context_phrase: "Je veux participer un peu.", context_translation: "I want to get involved a little.", etymology_derivation: "participation → participer. 'To get involved' sounds formal in English but everyday in French — register travels in reverse.", domain: "verbs" }),
  W({ id: "visiter", target_word: "visiter", english_cognate: "visit", english_meaning: "to visit (places)", gender: null, ipa: "/vizite/", sound_shift_ids: ["ation"], shift_rule: "-ATION noun → -er verb", context_phrase: "Je veux visiter Paris.", context_translation: "I want to visit Paris.", etymology_derivation: "visitation → visiter. The rare English noun unlocks the everyday verb: don't decide too quickly that you can't say it.", domain: "verbs" }),
  W({ id: "inviter", target_word: "inviter", english_cognate: "invite", english_meaning: "to invite", gender: null, ipa: "/ɛ̃vite/", sound_shift_ids: ["ation"], shift_rule: "-ATION noun → -er verb", context_phrase: "Tu veux inviter Marie ?", context_translation: "Do you want to invite Marie?", etymology_derivation: "invitation → inviter.", domain: "verbs" }),
  W({ id: "réserver", target_word: "réserver", english_cognate: "reserve", english_meaning: "to reserve, to book", gender: null, ipa: "/ʁezɛʁve/", sound_shift_ids: ["ation"], shift_rule: "-ATION noun → -er verb", context_phrase: "Je veux réserver une table.", context_translation: "I want to reserve a table.", etymology_derivation: "réservation → réserver.", domain: "verbs" }),

  // --- topic 4: ne...pas -------------------------------------------------------
  W({ id: "pas", target_word: "pas", english_cognate: "pace", english_meaning: "step; not (in ne...pas)", gender: "le", ipa: "/pɑ/", sound_shift_ids: [], shift_rule: "Latin passus 'step'", context_phrase: "Je ne veux pas.", context_translation: "I don't want to.", etymology_derivation: "negation grew from ne vais pas un pas — 'I don't go a step'. Pas is literally a footstep, the same word as pace.", domain: "basics" }),
  W({ id: "ne", target_word: "ne", english_cognate: "not (Latin non)", english_meaning: "not (first half of the sandwich)", gender: null, ipa: "/nə/", sound_shift_ids: [], shift_rule: "Latin nōn", context_phrase: "Je ne veux pas.", context_translation: "I don't want to.", etymology_derivation: "Latin nōn wore down to ne. The verb sits in a ne...pas sandwich; spoken French often drops the first slice.", domain: "basics" }),

  // --- topic 5: être ------------------------------------------------------------
  W({ id: "être", target_word: "être", english_cognate: "essence", english_meaning: "to be", gender: null, ipa: "/ɛtʁ/", sound_shift_ids: [], shift_rule: "Latin esse", context_phrase: "Je suis être? — C'est être.", context_translation: "— It's being.", etymology_derivation: "Latin esse 'to be' → essere → être. English kept the root in essence and quintessential — the being-ness inside the word.", domain: "verbs" }),
  W({ id: "cest", target_word: "c'est", english_cognate: "—", english_meaning: "it is; this is; that is", gender: null, ipa: "/sɛ/", sound_shift_ids: [], shift_rule: "ce + est fused", context_phrase: "C'est bon.", context_translation: "It's good.", etymology_derivation: "ce ('that') + est — the elision French performs constantly: a vowel before a vowel loses its tail.", domain: "basics" }),
  W({ id: "suis", target_word: "suis", english_cognate: "sequence (Latin sequor)", english_meaning: "I am", gender: null, ipa: "/sɥi/", sound_shift_ids: [], shift_rule: "Latin sequor 'I follow'", context_phrase: "Je suis ici.", context_translation: "I am here.", etymology_derivation: "je suis is literally 'I follow' — Latin sequor, the root of sequence and sequel. Being is following, historically.", domain: "verbs" }),
  W({ id: "est", target_word: "est", english_cognate: "is", english_meaning: "is (he/she/it is)", gender: null, ipa: "/ɛ/", sound_shift_ids: [], shift_rule: "Latin est — the same word as English is", context_phrase: "Le café est bon.", context_translation: "The coffee is good.", etymology_derivation: "Latin est and English is are the same Proto-Indo-European *h₁ésti — the oldest cognate verb pair on either trail.", domain: "verbs" }),
  W({ id: "es", target_word: "es", english_cognate: "art (archaic)", english_meaning: "are (tu es)", gender: null, ipa: "/ɛ/", sound_shift_ids: [], shift_rule: "Latin es", context_phrase: "Tu es grand.", context_translation: "You are tall.", etymology_derivation: "Latin es — the very form English's KJV 'thou art' preserves; tu es and thou art are one word.", domain: "verbs" }),
  W({ id: "très", target_word: "très", english_cognate: "trans- (Latin trāns)", english_meaning: "very", gender: null, ipa: "/tʁɛ/", sound_shift_ids: [], shift_rule: "Latin trāns", context_phrase: "C'est très bon.", context_translation: "It's very good.", etymology_derivation: "Latin trāns 'across' — très means 'beyond, across the line'. English kept the same root in transmit and transatlantic.", domain: "basics" }),

  // --- topic 6: -ité / -ance bridges -------------------------------------------
  W({ id: "université", target_word: "université", english_cognate: "university", english_meaning: "university", gender: "la", ipa: "/ynivɛʁsite/", sound_shift_ids: ["ite"], shift_rule: "-ITY → -ITÉ", context_phrase: "L'université est grande.", context_translation: "The university is big.", etymology_derivation: "-ity → -ité, and every -ité is feminine. The accent on the é marks the final syllable English swallows.", domain: "places" }),
  W({ id: "possibilité", target_word: "possibilité", english_cognate: "possibility", english_meaning: "possibility", gender: "la", ipa: "/pɔsibilite/", sound_shift_ids: ["ite"], shift_rule: "-ITY → -ITÉ", context_phrase: "C'est une possibilité.", context_translation: "It's a possibility.", etymology_derivation: "Latin possibilitas. The -ty words all convert: ability, activity, university…", domain: "abstract" }),
  W({ id: "différence", target_word: "différence", english_cognate: "difference", english_meaning: "difference", gender: "la", ipa: "/difeʁɑ̃s/", sound_shift_ids: ["ance"], shift_rule: "-ANCE/-ENCE twins", context_phrase: "Quelle différence !", context_translation: "What a difference!", etymology_derivation: "Latin differentia. The -ance/-ence endings convert whole and are always feminine.", domain: "abstract" }),
  W({ id: "importance", target_word: "importance", english_cognate: "importance", english_meaning: "importance", gender: "la", ipa: "/ɛ̃pɔʁtɑ̃s/", sound_shift_ids: ["ance"], shift_rule: "-ANCE/-ENCE twins", context_phrase: "C'est d'importance.", context_translation: "It matters.", etymology_derivation: "in- + portare 'to carry in' — what gets carried in matters.", domain: "abstract" }),
  W({ id: "liberté", target_word: "liberté", english_cognate: "liberty", english_meaning: "freedom", gender: "la", ipa: "/libɛʁte/", sound_shift_ids: ["ite"], shift_rule: "-ITY → -ITÉ (doublet)", context_phrase: "La liberté est précieuse.", context_translation: "Freedom is precious.", etymology_derivation: "liberté/liberty — the Norman doublet in -ité form: same Latin liber, two carriers.", domain: "abstract" }),

  // --- topic 7: questions --------------------------------------------------------
  W({ id: "est_ce_que", target_word: "est-ce que", english_cognate: "—", english_meaning: "is it that (question opener)", gender: null, ipa: "/ɛs kə/", sound_shift_ids: [], shift_rule: "est 'is' + ce 'it' + que 'that'", context_phrase: "Est-ce que tu veux le gâteau ?", context_translation: "Do you want the cake?", etymology_derivation: "Literally 'is it that you want…' — a question scaffolded out of a statement, no word order changed.", domain: "basics" }),
  W({ id: "où", target_word: "où", english_cognate: "ubiquitous", english_meaning: "where", gender: null, ipa: "/u/", sound_shift_ids: [], shift_rule: "Latin ubi", context_phrase: "Où est le café ?", context_translation: "Where is the café?", etymology_derivation: "Latin ubi 'where' — the root English borrowed wholesale in 'ubiquitous' (present everywhere).", domain: "basics" }),
  W({ id: "pourquoi", target_word: "pourquoi", english_cognate: "—", english_meaning: "why (for-what)", gender: null, ipa: "/puʁkwa/", sound_shift_ids: [], shift_rule: "pour 'for' + quoi 'what'", context_phrase: "Pourquoi pas ?", context_translation: "Why not?", etymology_derivation: "pour + quoi = 'for what' — English's 'wherefore' (for-what) built the same way: wherefore art thou.", domain: "basics" }),

  // --- topic 8: the -EUR bridge ---------------------------------------------------
  W({ id: "docteur", target_word: "docteur", english_cognate: "doctor", english_meaning: "doctor", gender: "le", ipa: "/dɔktœʁ/", sound_shift_ids: ["eur"], shift_rule: "-OR/-ER → -EUR", context_phrase: "Le docteur est là.", context_translation: "The doctor is here.", etymology_derivation: "Latin doctor 'teacher'. -or/-er nouns convert to -eur and are usually masculine.", domain: "people" }),
  W({ id: "acteur", target_word: "acteur", english_cognate: "actor", english_meaning: "actor", gender: "le", ipa: "/aktœʁ/", sound_shift_ids: ["eur"], shift_rule: "-OR/-ER → -EUR", context_phrase: "C'est mon acteur préféré.", context_translation: "He's my favourite actor.", etymology_derivation: "agere 'to do' → actor → acteur.", domain: "people" }),
  W({ id: "directeur", target_word: "directeur", english_cognate: "director", english_meaning: "director; head", gender: "le", ipa: "/diʁɛktœʁ/", sound_shift_ids: ["eur"], shift_rule: "-OR/-ER → -EUR", context_phrase: "Le directeur parle.", context_translation: "The head is speaking.", etymology_derivation: "Latin directus 'straight-lined' — the one who keeps things straight.", domain: "people" }),
  W({ id: "honneur", target_word: "honneur", english_cognate: "honour", english_meaning: "honour", gender: "le", ipa: "/ɔnœʁ/", sound_shift_ids: ["eur"], shift_rule: "-OR → -EUR", context_phrase: "C'est un honneur.", context_translation: "It's an honour.", etymology_derivation: "honour/honneur — a Norman doublet hiding in the -eur family.", domain: "abstract" }),
  W({ id: "couleur", target_word: "couleur", english_cognate: "color", english_meaning: "color", gender: "la", ipa: "/kulœʁ/", sound_shift_ids: ["eur"], shift_rule: "-OR → -EUR (the famous rebel: feminine)", context_phrase: "J'aime cette couleur.", context_translation: "I like this color.", etymology_derivation: "Latin color → couleur — feminine, the famous exception the -eur squad warns you about.", domain: "colors" }),
  W({ id: "cœur", target_word: "cœur", english_cognate: "core, courage", english_meaning: "heart", gender: "le", ipa: "/kœʁ/", sound_shift_ids: [], shift_rule: "Latin cor", context_phrase: "C'est de cœur.", context_translation: "It's from the heart.", etymology_derivation: "Latin cor/cordis — English kept the root in core, courage ('heart'), accord.", domain: "body" }),
  W({ id: "bonheur", target_word: "bonheur", english_cognate: "augury (heur)", english_meaning: "happiness (lit. good fortune)", gender: "le", ipa: "/bɔnœʁ/", sound_shift_ids: [], shift_rule: "bon + heur 'fortune'", context_phrase: "Le bonheur est simple.", context_translation: "Happiness is simple.", etymology_derivation: "bon 'good' + heur 'fortune' (Latin augurium 'omen' — English 'augury'). Happiness is luck, well met.", domain: "feelings" }),

  // --- topic 9: politeness ----------------------------------------------------------
  W({ id: "vous", target_word: "vous", english_cognate: "you (plural)", english_meaning: "you (formal or plural)", gender: null, ipa: "/vu/", sound_shift_ids: [], shift_rule: "Latin vōs", context_phrase: "Vous voulez un café ?", context_translation: "Would you like a coffee?", etymology_derivation: "Latin vōs 'you all' promoted to politeness — the same T–V ladder as German Sie and English's lost 'ye'.", domain: "basics" }),
  W({ id: "bonjour", target_word: "bonjour", english_cognate: "—", english_meaning: "hello; good day", gender: null, ipa: "/bɔ̃ʒuʁ/", sound_shift_ids: [], shift_rule: "bon + jour", context_phrase: "Bonjour ! Ça va ?", context_translation: "Hello! How's it going?", etymology_derivation: "bon 'good' + jour 'day' (Latin diurnum) — English's 'good day' is the same thought, German's Guten Tag too.", domain: "basics" }),
  W({ id: "merci", target_word: "merci", english_cognate: "mercy", english_meaning: "thank you", gender: null, ipa: "/mɛʁsi/", sound_shift_ids: [], shift_rule: "Latin mercēs 'reward'", context_phrase: "Merci beaucoup.", context_translation: "Thanks a lot.", etymology_derivation: "Latin mercēs 'wages, reward' — thank-you and mercy are the same coin: what you owe.", domain: "basics" }),
  W({ id: "oui", target_word: "oui", english_cognate: "—", english_meaning: "yes", gender: null, ipa: "/wi/", sound_shift_ids: [], shift_rule: "worn from hoc illud", context_phrase: "Oui, je veux bien.", context_translation: "Yes, I'd like that.", etymology_derivation: "worn down from Vulgar Latin hoc illud 'yes indeed!' — a yes so emphatic it wore itself into one syllable.", domain: "basics" }),
  W({ id: "sil_vous_plait", target_word: "s'il vous plaît", english_cognate: "—", english_meaning: "please (lit. if it pleases you)", gender: null, ipa: "/sil vu plɛ/", sound_shift_ids: [], shift_rule: "si + il + vous + plaît", context_phrase: "Un café, s'il vous plaît.", context_translation: "A coffee, please.", etymology_derivation: "'if it pleases you' — politeness as a small conditional; compare 'if you please', which English still owns.", domain: "basics" }),

  // --- topic 10: avoir & the lost H -------------------------------------------------
  W({ id: "avoir", target_word: "avoir", english_cognate: "have (Latin habere)", english_meaning: "to have", gender: null, ipa: "/avwaʁ/", sound_shift_ids: [], shift_rule: "Latin habēre", context_phrase: "J'ai un gâteau.", context_translation: "I have a cake.", etymology_derivation: "Latin habēre = have. The H dropped and stayed dropped — French never pronounces its Latin H.", domain: "verbs" }),
  W({ id: "jai", target_word: "j'ai", english_cognate: "—", english_meaning: "I have", gender: null, ipa: "/ʒe/", sound_shift_ids: [], shift_rule: "je + ai", context_phrase: "J'ai 30 ans.", context_translation: "I am 30 (I have 30 years).", etymology_derivation: "je + ai with the vowel sacrificed — elision again, the apostrophe marks the cut.", domain: "verbs" }),
  W({ id: "hôtel", target_word: "hôtel", english_cognate: "hospital, hostel", english_meaning: "hotel; grand house", gender: "le", ipa: "/otɛl/", sound_shift_ids: ["doublet"], shift_rule: "Norman doublet: S and H dropped", context_phrase: "L'hôtel est vieux.", context_translation: "The hotel is old.", etymology_derivation: "Latin hospitalis → hostel AND hôtel — the same word entered English twice: once with its S (hostel, hospital), once without (hôtel).", domain: "places" }),
  W({ id: "homme", target_word: "homme", english_cognate: "human, homicide", english_meaning: "man", gender: "le", ipa: "/ɔm/", sound_shift_ids: ["doublet"], shift_rule: "Latin homō, H dropped", context_phrase: "L'homme parle.", context_translation: "The man is speaking.", etymology_derivation: "Latin homō 'man' — the root of human, homicide, humus (of the earth). The H is written and never said.", domain: "people" }),
  W({ id: "maison", target_word: "maison", english_cognate: "mansion", english_meaning: "house", gender: "la", ipa: "/mɛzɔ̃/", sound_shift_ids: ["doublet"], shift_rule: "Norman doublet", context_phrase: "La maison est grande.", context_translation: "The house is big.", etymology_derivation: "Latin mansiō 'a staying' → maison and mansion: the house you stay in, and the big one.", domain: "places" }),
  W({ id: "pain", target_word: "pain", english_cognate: "pantry", english_meaning: "bread", gender: "le", ipa: "/pɛ̃/", sound_shift_ids: [], shift_rule: "Latin pānis", context_phrase: "Le pain est bon.", context_translation: "The bread is good.", etymology_derivation: "Latin pānis 'bread' — a pantry is literally the bread-room. The N is thought, not said: the nasal vowel is the lesson.", domain: "food" }),
  W({ id: "eau", target_word: "eau", english_cognate: "aquarium, aquatic", english_meaning: "water", gender: "la", ipa: "/o/", sound_shift_ids: [], shift_rule: "Latin aqua, all three vowels are ghosts of a", context_phrase: "Je veux de l'eau.", context_translation: "I want some water.", etymology_derivation: "Latin aqua → ea → eau: one syllable wearing two vowels and a consonant as historical scar tissue. Feminine: l'eau.", domain: "food" }),

  // --- topic 11: adjectives ------------------------------------------------------------
  W({ id: "bon", target_word: "bon", english_cognate: "bonus", english_meaning: "good", gender: null, ipa: "/bɔ̃/", sound_shift_ids: [], shift_rule: "Latin bonus", context_phrase: "Le gâteau est bon.", context_translation: "The cake is good.", etymology_derivation: "Latin bonus 'good' — English borrowed the word back as 'bonus', a good thing added.", domain: "basics" }),
  W({ id: "grand", target_word: "grand", english_cognate: "grand", english_meaning: "big; tall", gender: null, ipa: "/ɡʁɑ̃/", sound_shift_ids: [], shift_rule: "borrowed whole", context_phrase: "La maison est grande.", context_translation: "The house is big.", etymology_derivation: "English 'grand' came straight from French; the feminine adds a silent -e, which wakes the silent d into sound: grand /ɡʁɑ̃/ → grande /ɡʁɑ̃d/.", domain: "basics" }),
  W({ id: "petit", target_word: "petit", english_cognate: "petite", english_meaning: "small", gender: null, ipa: "/pəti/", sound_shift_ids: [], shift_rule: "English borrowed the feminine", context_phrase: "Un petit café.", context_translation: "A small coffee.", etymology_derivation: "English 'petite' is the French feminine form, borrowed whole — the masculine is petit.", domain: "basics" }),
  W({ id: "vert", target_word: "vert", english_cognate: "verdant", english_meaning: "green", gender: null, ipa: "/vɛʁ/", sound_shift_ids: [], shift_rule: "Latin viridis", context_phrase: "Le jardin est vert.", context_translation: "The garden is green.", etymology_derivation: "Latin viridis → verdant, verdure — the green English kept in poetry.", domain: "colors" }),
  W({ id: "blanc", target_word: "blanc", english_cognate: "blank, blanket", english_meaning: "white", gender: null, ipa: "/blɑ̃/", sound_shift_ids: [], shift_rule: "Frankish blank", context_phrase: "Le mur est blanc.", context_translation: "The wall is white.", etymology_derivation: "Germanic blank 'shining white' → French blanc, English blank and blanket (the white cloth).", domain: "colors" }),
  W({ id: "bleu", target_word: "bleu", english_cognate: "blue", english_meaning: "blue", gender: null, ipa: "/blø/", sound_shift_ids: [], shift_rule: "Frankish blao — one Germanic word, two languages", context_phrase: "Le ciel est bleu.", context_translation: "The sky is blue.", etymology_derivation: "Frankish *blao gave English blue and French bleu — a Germanic word inside Romance, no shift needed.", domain: "colors" }),
  W({ id: "rouge", target_word: "rouge", english_cognate: "ruby", english_meaning: "red", gender: null, ipa: "/ʁuʒ/", sound_shift_ids: [], shift_rule: "Latin rubeus", context_phrase: "La voiture est rouge.", context_translation: "The car is red.", etymology_derivation: "Latin rubeus 'red' — the same stone English calls ruby. Rouge crossed into English as the makeup word.", domain: "colors" }),

  // --- topic 12: aller ------------------------------------------------------------------
  W({ id: "aller", target_word: "aller", english_cognate: "amble", english_meaning: "to go", gender: null, ipa: "/ale/", sound_shift_ids: [], shift_rule: "Latin ambulāre 'to walk'", context_phrase: "Je vais aller au café.", context_translation: "I'm going to go to the café.", etymology_derivation: "Latin ambulāre 'to walk' → ambler → aller. To go is a stroll away — and the near future rides on it.", domain: "verbs" }),
  W({ id: "je_vais", target_word: "je vais", english_cognate: "—", english_meaning: "I go; I'm going", gender: null, ipa: "/ʒə vɛ/", sound_shift_ids: [], shift_rule: "aller conjugated", context_phrase: "Je vais visiter.", context_translation: "I'm going to visit.", etymology_derivation: "vais is aller's only irregular card in je; with an infinitive after it, it makes the future.", domain: "verbs" }),
  W({ id: "on", target_word: "on", english_cognate: "human (homō)", english_meaning: "we (informal); one, people", gender: null, ipa: "/ɔ̃/", sound_shift_ids: [], shift_rule: "worn from homō 'man'", context_phrase: "On va au café ?", context_translation: "Shall we go to the café?", etymology_derivation: "on is worn-down homme — 'the man says' became 'one says' became spoken French's everyday 'we'. The nasal vowel is the fossil.", domain: "basics" }),

  // --- topic 13: prepositions -------------------------------------------------------------
  W({ id: "à", target_word: "à", english_cognate: "adhere (Latin ad)", english_meaning: "to, at", gender: null, ipa: "/a/", sound_shift_ids: [], shift_rule: "Latin ad", context_phrase: "Je vais à Paris.", context_translation: "I'm going to Paris.", etymology_derivation: "Latin ad 'to' — English kept it in adhere, advance, admire. With le it fuses: à + le = au.", domain: "basics" }),
  W({ id: "de", target_word: "de", english_cognate: "—", english_meaning: "of, from", gender: null, ipa: "/də/", sound_shift_ids: [], shift_rule: "Latin dē", context_phrase: "Un verre de vin.", context_translation: "A glass of wine.", etymology_derivation: "Latin dē 'down from' — of and from in one small word.", domain: "basics" }),
  W({ id: "chez", target_word: "chez", english_cognate: "casino (Latin casa)", english_meaning: "at the home of", gender: null, ipa: "/ʃe/", sound_shift_ids: [], shift_rule: "Latin casa 'house'", context_phrase: "Je suis chez Marie.", context_translation: "I'm at Marie's place.", etymology_derivation: "Latin casa 'hut, house' — the same house English visits in casino (literally 'little house'). No English twin: an honest loss.", domain: "places" }),
  W({ id: "avec", target_word: "avec", english_cognate: "—", english_meaning: "with", gender: null, ipa: "/avɛk/", sound_shift_ids: [], shift_rule: "Vulgar Latin *ab hoc 'by this'", context_phrase: "Je viens avec toi.", context_translation: "I'm coming with you.", etymology_derivation: "ab hoc 'by this' wore into avec. No English twin — but 'with' itself once meant 'against', so prepositions travel too.", domain: "basics" }),

  // --- topic 14: family -----------------------------------------------------------------------
  W({ id: "père", target_word: "père", english_cognate: "paternal", english_meaning: "father", gender: "le", ipa: "/pɛʁ/", sound_shift_ids: [], shift_rule: "Latin pater", context_phrase: "Mon père parle français.", context_translation: "My father speaks French.", etymology_derivation: "Latin pater — the root of paternal, patriarch. English kept the root, French kept the word.", domain: "family" }),
  W({ id: "mère", target_word: "mère", english_cognate: "maternal", english_meaning: "mother", gender: "la", ipa: "/mɛʁ/", sound_shift_ids: [], shift_rule: "Latin māter", context_phrase: "Ma mère est ici.", context_translation: "My mother is here.", etymology_derivation: "Latin māter — maternal, matrix (the womb-word).", domain: "family" }),
  W({ id: "frère", target_word: "frère", english_cognate: "fraternal", english_meaning: "brother", gender: "le", ipa: "/fʁɛʁ/", sound_shift_ids: [], shift_rule: "Latin frāter", context_phrase: "Mon frère a vingt ans.", context_translation: "My brother is twenty.", etymology_derivation: "Latin frāter — fraternal, friar (the brother of the church).", domain: "family" }),
  W({ id: "sœur", target_word: "sœur", english_cognate: "sorority", english_meaning: "sister", gender: "la", ipa: "/sœʁ/", sound_shift_ids: [], shift_rule: "Latin soror", context_phrase: "Ma sœur habite ici.", context_translation: "My sister lives here.", etymology_derivation: "Latin soror — English kept the Latin sisterhood in sorority.", domain: "family" }),
  W({ id: "famille", target_word: "famille", english_cognate: "family", english_meaning: "family", gender: "la", ipa: "/famij/", sound_shift_ids: [], shift_rule: "Latin familia", context_phrase: "Ma famille est grande.", context_translation: "My family is big.", etymology_derivation: "Latin familia was the whole household — servants included. The famulus 'servant' is inside.", domain: "family" }),

  // --- topic 15: numbers ------------------------------------------------------------------------
  W({ id: "deux", target_word: "deux", english_cognate: "duo, deuce", english_meaning: "two", gender: null, ipa: "/dø/", sound_shift_ids: [], shift_rule: "Latin duo", context_phrase: "Deux cafés, s'il vous plaît.", context_translation: "Two coffees, please.", etymology_derivation: "Latin duo — English duo, deuce (the two-card).", domain: "numbers" }),
  W({ id: "trois", target_word: "trois", english_cognate: "three", english_meaning: "three", gender: null, ipa: "/tʁwa/", sound_shift_ids: [], shift_rule: "Latin trēs", context_phrase: "Trois gâteaux.", context_translation: "Three cakes.", etymology_derivation: "Latin trēs and English three share the Proto-Indo-European *treyes — the oldest cognate pair on the trail.", domain: "numbers" }),
  W({ id: "quatre", target_word: "quatre", english_cognate: "quartet", english_meaning: "four", gender: null, ipa: "/katʁ/", sound_shift_ids: [], shift_rule: "Latin quattuor", context_phrase: "Quatre personnes.", context_translation: "Four people.", etymology_derivation: "Latin quattuor — quartet, quarter. And quatre-vingts is four twenties: the count of 'four score'.", domain: "numbers" }),
  W({ id: "cinq", target_word: "cinq", english_cognate: "quintet", english_meaning: "five", gender: null, ipa: "/sɛ̃k/", sound_shift_ids: [], shift_rule: "Latin quinque", context_phrase: "Cinq minutes.", context_translation: "Five minutes.", etymology_derivation: "Latin quinque — quintet, quintessence (the fifth element).", domain: "numbers" }),
  W({ id: "sept", target_word: "sept", english_cognate: "September", english_meaning: "seven", gender: null, ipa: "/sɛt/", sound_shift_ids: [], shift_rule: "Latin septem", context_phrase: "Sept jours.", context_translation: "Seven days.", etymology_derivation: "Latin septem — September was month seven of the old calendar before January butted in.", domain: "numbers" }),
  W({ id: "huit", target_word: "huit", english_cognate: "octopus, October", english_meaning: "eight", gender: null, ipa: "/ɥit/", sound_shift_ids: [], shift_rule: "Latin octō, o breathed into hu-", context_phrase: "Huit euros.", context_translation: "Eight euros.", etymology_derivation: "Latin octō — octopus, October. French breathed an h in front: huit.", domain: "numbers" }),
  W({ id: "neuf", target_word: "neuf", english_cognate: "November (novem)", english_meaning: "nine; new", gender: null, ipa: "/nœf/", sound_shift_ids: [], shift_rule: "Latin novem", context_phrase: "Neuf euros.", context_translation: "Nine euros.", etymology_derivation: "Latin novem 'nine' — November, the ninth month. The same word (from novus) also means new.", domain: "numbers" }),
  W({ id: "dix", target_word: "dix", english_cognate: "decimal", english_meaning: "ten", gender: null, ipa: "/dis/", sound_shift_ids: [], shift_rule: "Latin decem", context_phrase: "Dix minutes.", context_translation: "Ten minutes.", etymology_derivation: "Latin decem — decimal, December (month ten).", domain: "numbers" }),
  W({ id: "vingt", target_word: "vingt", english_cognate: "vigesimal", english_meaning: "twenty", gender: null, ipa: "/vɛ̃/", sound_shift_ids: [], shift_rule: "Latin vīgintī", context_phrase: "Vingt ans.", context_translation: "Twenty years old.", etymology_derivation: "Latin vīgintī — English 'vigesimal' (counting by twenties) is the same root; French just kept counting that way: quatre-vingts.", domain: "numbers" }),
  W({ id: "ans", target_word: "ans", english_cognate: "annual", english_meaning: "years (of age)", gender: null, ipa: "/ɑ̃/", sound_shift_ids: [], shift_rule: "Latin annus", context_phrase: "J'ai trente ans.", context_translation: "I'm thirty years old (I have thirty years).", etymology_derivation: "Latin annus — annual, anniversary. Age is something you have in French: j'ai X ans.", domain: "time" }),

  // --- topic 16: days, months, dates ---------------------------------------------------------------
  W({ id: "lundi", target_word: "lundi", english_cognate: "lunar", english_meaning: "Monday (moon-day)", gender: null, ipa: "/lœ̃di/", sound_shift_ids: [], shift_rule: "dies Lunae 'moon day'", context_phrase: "On y va lundi ?", context_translation: "Shall we go on Monday?", etymology_derivation: "Moon-day, exactly like English Monday — both calendars still worship the moon.", domain: "time" }),
  W({ id: "mardi", target_word: "mardi", english_cognate: "Mars, martial", english_meaning: "Tuesday (Mars-day)", gender: null, ipa: "/maʁdi/", sound_shift_ids: [], shift_rule: "dies Martis", context_phrase: "Mardi gras.", context_translation: "Fat Tuesday.", etymology_derivation: "Mars' day. English named Tuesday after Tiw, but mardi gras kept the Mars in the calendar.", domain: "time" }),
  W({ id: "janvier", target_word: "janvier", english_cognate: "January", english_meaning: "January", gender: null, ipa: "/ʒɑ̃vje/", sound_shift_ids: [], shift_rule: "Janus", context_phrase: "En janvier.", context_translation: "In January.", etymology_derivation: "Janus, the two-faced god of doors and beginnings — in-month uses en, not dans.", domain: "time" }),
  W({ id: "aujourdhui", target_word: "aujourd'hui", english_cognate: "—", english_meaning: "today", gender: null, ipa: "/oʒuʁdɥi/", sound_shift_ids: [], shift_rule: "au + jour + de + hui", context_phrase: "Aujourd'hui, je suis ici.", context_translation: "Today, I am here.", etymology_derivation: "'on the day of today' — hui is Latin hodiē ('on this day') worn down to a suffix. Today's today, recursively.", domain: "time" }),
  W({ id: "semaine", target_word: "semaine", english_cognate: "sennight (seven-nights)", english_meaning: "week", gender: "la", ipa: "/səmɛn/", sound_shift_ids: [], shift_rule: "septimāna 'seven-morning'", context_phrase: "Une semaine de travail.", context_translation: "A week of work.", etymology_derivation: "Latin septimāna, the seven-morning stretch. English had the same coin: sennight, seven nights — now extinct.", domain: "time" }),

  // --- topic 17: the -é past ------------------------------------------------------------------------
  W({ id: "mangé", target_word: "mangé", english_cognate: "mange, manger", english_meaning: "eaten", gender: null, ipa: "/mɑ̃ʒe/", sound_shift_ids: ["e"], shift_rule: "-é = English -ed", context_phrase: "J'ai mangé le gâteau.", context_translation: "I ate the cake.", etymology_derivation: "manger ← Latin manducāre 'to chew'. English 'mange' is the eating disease — the verb came with the Normans' dogs.", domain: "food" }),
  W({ id: "décidé", target_word: "décidé", english_cognate: "decided", english_meaning: "decided", gender: null, ipa: "/deside/", sound_shift_ids: ["e"], shift_rule: "-é = English -ed", context_phrase: "C'est décidé.", context_translation: "It's decided.", etymology_derivation: "dé·cidé — the é IS the -ed. Decided, désigné, marié: the participle twins are everywhere.", domain: "verbs" }),
  W({ id: "parlé", target_word: "parlé", english_cognate: "parley, parliament", english_meaning: "spoken", gender: null, ipa: "/paʁle/", sound_shift_ids: ["e"], shift_rule: "-é = English -ed", context_phrase: "J'ai parlé avec lui.", context_translation: "I spoke with him.", etymology_derivation: "parler ← Late Latin parabolāre 'to tell stories' — parable, parley, parliament (the talking-place).", domain: "verbs" }),
  W({ id: "trouvé", target_word: "trouvé", english_cognate: "trove", english_meaning: "found", gender: null, ipa: "/tʁuve/", sound_shift_ids: ["e"], shift_rule: "-é = English -ed", context_phrase: "J'ai trouvé la maison.", context_translation: "I found the house.", etymology_derivation: "trover 'to find' — what you found is a trove.", domain: "verbs" }),
  W({ id: "donné", target_word: "donné", english_cognate: "donate", english_meaning: "given", gender: null, ipa: "/dɔne/", sound_shift_ids: ["e"], shift_rule: "-é = English -ed", context_phrase: "J'ai donné mon opinion.", context_translation: "I gave my opinion.", etymology_derivation: "Latin dōnāre — donation.", domain: "verbs" }),
  W({ id: "aimé", target_word: "aimé", english_cognate: "aim", english_meaning: "loved; liked", gender: null, ipa: "/eme/", sound_shift_ids: ["e"], shift_rule: "-é = English -ed", context_phrase: "J'ai aimé le film.", context_translation: "I liked the film.", etymology_derivation: "aimer ← ad + estimare 'to estimate'. English 'aim' drifted from the same estimate — aiming is assessing.", domain: "feelings" }),
  W({ id: "fini", target_word: "fini", english_cognate: "finish", english_meaning: "finished", gender: null, ipa: "/fini/", sound_shift_ids: ["e"], shift_rule: "-i participle (fīnis)", context_phrase: "C'est fini.", context_translation: "It's finished.", etymology_derivation: "Latin fīnis 'end, boundary' — finish, final, fine print.", domain: "verbs" }),

  // --- topic 18: motion takes être --------------------------------------------------------------------
  W({ id: "allé", target_word: "allé", english_cognate: "—", english_meaning: "gone; went", gender: null, ipa: "/ale/", sound_shift_ids: [], shift_rule: "être-house participle", context_phrase: "Je suis allé au café.", context_translation: "I went to the café.", etymology_derivation: "aller's participle; motion verbs form their past with être — and the participle agrees: allée, allés, allées.", domain: "verbs" }),
  W({ id: "arrivé", target_word: "arrivé", english_cognate: "arrive", english_meaning: "arrived", gender: null, ipa: "/aʁive/", sound_shift_ids: [], shift_rule: "être-house participle", context_phrase: "Il est arrivé.", context_translation: "He arrived.", etymology_derivation: "Late Latin ad rīpam 'to the shore' — to arrive was to land on a riverbank.", domain: "verbs" }),
  W({ id: "resté", target_word: "resté", english_cognate: "rest (rester)", english_meaning: "stayed", gender: null, ipa: "/ʁɛste/", sound_shift_ids: [], shift_rule: "être-house participle", context_phrase: "Je suis resté ici.", context_translation: "I stayed here.", etymology_derivation: "Latin restāre 'to stand back, remain'. Staying counts as motion's family — être-house logic.", domain: "verbs" }),
  W({ id: "monté", target_word: "monté", english_cognate: "mount", english_meaning: "gone up", gender: null, ipa: "/mɔ̃te/", sound_shift_ids: [], shift_rule: "être-house participle", context_phrase: "Il est monté.", context_translation: "He went up.", etymology_derivation: "Latin montem 'mountain' — to go up is to mountain-ward.", domain: "verbs" }),
  W({ id: "venu", target_word: "venu", english_cognate: "venue, venture", english_meaning: "come", gender: null, ipa: "/vəny/", sound_shift_ids: [], shift_rule: "être-house participle", context_phrase: "Elle est venue hier.", context_translation: "She came yesterday.", etymology_derivation: "Latin venīre — venue (where you come), venture, adventure (what you come to).", domain: "verbs" }),
  W({ id: "né", target_word: "né", english_cognate: "natal, nation", english_meaning: "born", gender: null, ipa: "/ne/", sound_shift_ids: [], shift_rule: "être-house participle", context_phrase: "Il est né à Paris.", context_translation: "He was born in Paris.", etymology_derivation: "Latin nātus — natal, native, nation (the born-together people).", domain: "verbs" }),

  // --- topic 19: the storytelling past ------------------------------------------------------------------
  W({ id: "était", target_word: "était", english_cognate: "—", english_meaning: "was; were (était)", gender: null, ipa: "/etɛ/", sound_shift_ids: [], shift_rule: "imparfait of être", context_phrase: "C'était bon.", context_translation: "It was good.", etymology_derivation: "être's imparfait — the background tense, the was of a story already in motion.", domain: "verbs" }),
  W({ id: "habiter", target_word: "habiter", english_cognate: "habitat, habit", english_meaning: "to live, to dwell", gender: null, ipa: "/abite/", sound_shift_ids: [], shift_rule: "Latin habitāre 'to dwell'", context_phrase: "J'habite ici depuis trois ans.", context_translation: "I've lived here for three years.", etymology_derivation: "habitāre 'to dwell often' — a habitat is where a thing dwells; habits are where you dwell repeatedly. With depuis, it stays present tense.", domain: "verbs" }),
  W({ id: "utiliser", target_word: "utiliser", english_cognate: "utilize", english_meaning: "to use", gender: null, ipa: "/ytilize/", sound_shift_ids: ["ation"], shift_rule: "-ATION noun → -er verb (via utilisation)", context_phrase: "J'utilisais mon vélo.", context_translation: "I used to ride my bike.", etymology_derivation: "Latin ūtilis 'useful' — utilize, utility.", domain: "verbs" }),

  // --- topic 21: comparatives -----------------------------------------------------------------------------
  W({ id: "plus", target_word: "plus", english_cognate: "plus", english_meaning: "more", gender: null, ipa: "/ply/", sound_shift_ids: [], shift_rule: "Latin plus", context_phrase: "C'est plus grand.", context_translation: "It's bigger.", etymology_derivation: "borrowed into English whole — plus is plus. The final s falls silent in most positions.", domain: "basics" }),
  W({ id: "moins", target_word: "moins", english_cognate: "minus", english_meaning: "less", gender: null, ipa: "/mwɛ̃/", sound_shift_ids: [], shift_rule: "Latin minus", context_phrase: "C'est moins cher.", context_translation: "It's less expensive.", etymology_derivation: "Latin minus — minus is minus.", domain: "basics" }),
  W({ id: "meilleur", target_word: "meilleur", english_cognate: "ameliorate", english_meaning: "better", gender: null, ipa: "/mɛjœʁ/", sound_shift_ids: [], shift_rule: "Latin melior", context_phrase: "C'est meilleur.", context_translation: "It's better.", etymology_derivation: "Latin melior — English 'ameliorate'. bon→meilleur is good→better's twin suppletion: both languages froze an old comparative.", domain: "basics" }),

  // --- topic 24: reflexives ----------------------------------------------------------------------------------
  W({ id: "lever", target_word: "lever", english_cognate: "lever, levitate", english_meaning: "to raise; to lift", gender: null, ipa: "/ləve/", sound_shift_ids: [], shift_rule: "Latin levāre", context_phrase: "Je me lève à sept heures.", context_translation: "I get up at seven.", etymology_derivation: "Latin levāre 'to lift' — lever, levitate, elevate. se lever: you raise yourself.", domain: "verbs" }),
  W({ id: "appeler", target_word: "appeler", english_cognate: "appellation", english_meaning: "to call", gender: null, ipa: "/apəle/", sound_shift_ids: [], shift_rule: "Latin appellāre", context_phrase: "Je m'appelle Marie.", context_translation: "My name is Marie (I call myself Marie).", etymology_derivation: "ad + pellere 'to drive toward' — an appeal drives someone toward you. je m'appelle: I call myself.", domain: "basics" }),
  W({ id: "coucher", target_word: "coucher", english_cognate: "couch", english_meaning: "to lay down; to put to bed", gender: null, ipa: "/kuʃe/", sound_shift_ids: [], shift_rule: "Latin collocāre", context_phrase: "Je me couche tôt.", context_translation: "I go to bed early.", etymology_derivation: "collocāre 'to place together' → couch — the furniture is the verb, frozen.", domain: "verbs" }),
];

const SHIFTS: Record<string, ShiftFamily> = {
  ion: {
    id: "ion",
    name: "The -ION Bridge",
    symbol: "-ION → -ION",
    phonetic_rule: "Spelling converts 1:1; the final N is nasalised — thought, not said (collection /kɔlɛksjɔ̃/).",
    historical_linguistics:
      "English absorbed thousands of Latin-dress nouns through Norman French and later Renaissance borrowing. The -tion/-sion endings are the single largest cognate landing zone between the two languages.",
    philological_note:
      "Every -ION noun is feminine, so the article is la — elided to l' before a vowel. The ending is a gender decoder, not a memory item.",
    literature_source:
      "Walter, Le français dans tous les sens (1988); Pope, From Latin to Modern French (1952).",
    word_ids: [
      "collection", "tradition", "confirmation", "organisation", "opinion",
      "réservation", "complication", "passion", "invitation",
    ],
  },
  ation: {
    id: "ation",
    name: "The -ation Engine",
    symbol: "-ATION → -er",
    phonetic_rule: "Strip -ation, add -er, pronounced /e/: confirmation → confirmer.",
    historical_linguistics:
      "French -er verbs descend from Latin -āre; the English -ation nouns and French verbs are two leaves of the same Latin branch, so the noun unlocks the verb with almost no loss.",
    philological_note:
      "The whole -ation goes — célébration → célébrer, never *célébrater. Test for the -ation noun in English first; it is the proof the verb converts.",
    literature_source:
      "Guillaume, Temps et verbe (1929); standard French morphophonology.",
    word_ids: ["confirmer", "organiser", "célébrer", "participer", "visiter", "inviter", "réserver", "utiliser"],
  },
  ite: {
    id: "ite",
    name: "The -ité Bridge",
    symbol: "-ITY → -ITÉ",
    phonetic_rule: "English final -ity becomes stressed final -ité /ite/ — the é marks the syllable English swallows.",
    historical_linguistics:
      "Latin -itās survives in English -ity and French -ité; both are bookish layers grafted onto the everyday vocabulary, which is why they convert with no sound loss.",
    philological_note: "All -ité nouns are feminine (la possibilité, la liberté).",
    literature_source: "Pope (1952); Brunot, Histoire de la langue française.",
    word_ids: ["université", "possibilité", "liberté"],
  },
  ance: {
    id: "ance",
    name: "The -ance/-ence Twins",
    symbol: "-ANCE → -ANCE",
    phonetic_rule: "Same spelling family; the AN is nasal: différence /difeʁɑ̃s/.",
    historical_linguistics:
      "Latin -antia/-entia produced English -ance/-ence and French -ance/-ence directly; the pair is one of the highest-conversion zones in the vocabulary.",
    philological_note: "All -ance/-ence nouns are feminine.",
    literature_source: "Pope (1952).",
    word_ids: ["différence", "importance"],
  },
  e: {
    id: "e",
    name: "The é/ed Twins",
    symbol: "-É ↔ -ED",
    phonetic_rule: "The past participle in -é /e/ is the English -ed: mangé/manged, décidé/decided, marié/married.",
    historical_linguistics:
      "The Norman conquest put French participles straight into English verb morphology — countless English past tenses ARE French participles wearing English spelling.",
    philological_note:
      "With avoir, the participle never agrees; with être (motion verbs), it does — the one agreement the past asks for.",
    literature_source: "Baugh & Cable, A History of the English Language (2002).",
    word_ids: ["mangé", "décidé", "parlé", "trouvé", "donné", "aimé", "fini"],
  },
  ment: {
    id: "ment",
    name: "The -ment Adverb Bridge",
    symbol: "-LY → -MENT",
    phonetic_rule: "English -ly adverbs convert to -ment: exactement, rapidement — the ME is nasal, like pain.",
    historical_linguistics:
      "Latin -mente ('in a ... mind') became French -ment and English kept the same suffix for nouns (moment, comment) — but French built adverbs with it where English built them with -ly.",
    philological_note: "Feminine adjectives get an -e before -ment: exacte → exactement.",
    literature_source: "Grevisse & Goosse, Le Bon Usage (2016).",
    word_ids: [],
  },
  eur: {
    id: "eur",
    name: "The -eur Bridge",
    symbol: "-OR/-ER → -EUR",
    phonetic_rule: "Latin -or/-er nouns convert to -eur /œʁ/: doctor → docteur, color → couleur.",
    historical_linguistics:
      "The agent and quality suffixes of Latin split three ways in English (-or, -er, -our) but re-merge in French as -eur.",
    philological_note:
      "-eur is usually masculine — couleur and erreur are the famous rebels. The lesson names the exceptions before you trust the rule blindly.",
    literature_source: "Bloch & Wartburg, Dictionnaire étymologique (1968).",
    word_ids: ["docteur", "acteur", "directeur", "honneur", "couleur"],
  },
  able: {
    id: "able",
    name: "The -able Bridge",
    symbol: "-ABLE → -ABLE",
    phonetic_rule: "Adjectives in -able/-ible convert as-is: adorable, possible, invisible — only the stress moves.",
    historical_linguistics:
      "Latin -ābilis/-ibilis landed in both languages with the spelling intact; it is the highest-fidelity conversion family in the whole bridge.",
    philological_note: "Same form, different stress: invisible with the beat on the final syllable in French.",
    literature_source: "Baugh & Cable (2002).",
    word_ids: [],
  },
  doublet: {
    id: "doublet",
    name: "Norman Doublets",
    symbol: "one word, two carriers",
    phonetic_rule: "Same Latin word entered English twice — once Germanic-dressed, once Norman: warden/gardien, estate/état, hôtel/hospital.",
    historical_linguistics:
      "After 1066 English borrowed Norman French wholesale; centuries of independent drift mean many English words have a French twin that looks different and sounds different but is the same word.",
    philological_note:
      "French dropped Latin H everywhere (hôtel, homme) and dropped S before consonants (état, école) — the dropped letters are the fingerprints.",
    literature_source: "Baugh & Cable (2002); Walter (1988).",
    word_ids: ["hôtel", "homme", "maison"],
  },
};

const COMPOUNDS: CompoundCalque[] = [
  { id: "gratte-ciel", compound: "gratte-ciel", gender: "le", literal_morphemes: "scrape-sky", real_meaning: "skyscraper", english_counterpart: "skyscraper", lore: "gratter 'to scrape' + ciel 'sky' (Latin caelum). English reached for the same image: the thing that scrapes the sky.", example_sentence: "Le gratte-ciel est immense.", example_translation: "The skyscraper is immense." },
  { id: "tire-bouchon", compound: "tire-bouchon", gender: "le", literal_morphemes: "pull-cork", real_meaning: "corkscrew", english_counterpart: "corkscrew", lore: "tirer 'to pull' + bouchon 'cork' (bouche 'mouth'). The tool named by its two movements.", example_sentence: "Où est le tire-bouchon ?", example_translation: "Where is the corkscrew?" },
  { id: "portefeuille", compound: "portefeuille", gender: "le", literal_morphemes: "carry-leaf", real_meaning: "wallet", english_counterpart: "portfolio", lore: "porter 'to carry' + feuille 'leaf/sheet' — the folder of sheets. English borrowed the same compound as portfolio and promoted it to finance.", example_sentence: "Mon portefeuille est vide.", example_translation: "My wallet is empty." },
  { id: "ouvre-boîte", compound: "ouvre-boîte", gender: "le", literal_morphemes: "open-box", real_meaning: "can opener", english_counterpart: "can opener", lore: "ouvrir 'to open' + boîte 'box'. French builds tools as verb-object; English as noun-noun.", example_sentence: "Passe-moi l'ouvre-boîte.", example_translation: "Pass me the can opener." },
  { id: "lave-vaisselle", compound: "lave-vaisselle", gender: "le", literal_morphemes: "wash-dishes", real_meaning: "dishwasher", english_counterpart: "dishwasher", lore: "laver + vaisselle (from vaissel 'vessels', Latin vascellum). The machine named as a sentence.", example_sentence: "Le lave-vaisselle tourne.", example_translation: "The dishwasher is running." },
  { id: "pare-brise", compound: "pare-brise", gender: "le", literal_morphemes: "shield-wind", real_meaning: "windshield", english_counterpart: "windshield", lore: "parer 'to shield' + brise 'breeze'. English's windshield shields the wind; French's shields the breeze — same thought, opposite word order.", example_sentence: "Le pare-brise est propre.", example_translation: "The windshield is clean." },
  { id: "porte-monnaie", compound: "porte-monnaie", gender: "le", literal_morphemes: "carry-coins", real_meaning: "purse, coin wallet", english_counterpart: "money-bag", lore: "porter + monnaie 'coins' (Latin moneta, the mint goddess Juno Moneta — 'money' is a temple's name).", example_sentence: "Il y a cinq euros dans le porte-monnaie.", example_translation: "There are five euros in the purse." },
  { id: "casse-croûte", compound: "casse-croûte", gender: "le", literal_morphemes: "break-crust", real_meaning: "snack", english_counterpart: "snack", lore: "casser 'to break' + croûte 'crust'. A snack is a broken crust — the verb inside names the eater.", example_sentence: "Un casse-croûte à midi.", example_translation: "A snack at noon." },
  { id: "sèche-cheveux", compound: "sèche-cheveux", gender: "le", literal_morphemes: "dry-hairs", real_meaning: "hair dryer", english_counterpart: "hair dryer", lore: "sécher + cheveux 'hair' (Latin capillus — 'capillary' is the same hair).", example_sentence: "Le sèche-cheveux est cassé.", example_translation: "The hair dryer is broken." },
  { id: "porte-parole", compound: "porte-parole", gender: "le", literal_morphemes: "carry-word", real_meaning: "spokesperson", english_counterpart: "spokesperson", lore: "porter + parole 'word' (Latin parabola — the story-word of parlé). The one who carries the words.", example_sentence: "Le porte-parole parle.", example_translation: "The spokesperson is speaking." },
];

const FALSE_FRIENDS: FalseFriend[] = [
  { id: "actuellement", german_word: "actuellement", looks_like: "actually", actual_meaning: "currently, at present", trap_note: "actuellement is time, not truth: 'je travaille actuellement à Paris' = 'I'm currently working in Paris'. The actually you want is en fait (in fact).", example_sentence: "J'habite actuellement à Lyon.", example_translation: "I currently live in Lyon." },
  { id: "assister", german_word: "assister à", looks_like: "to assist", actual_meaning: "to attend", trap_note: "assister à un concert means you watched it, not helped it. Assisting is aider.", example_sentence: "J'ai assisté au concert.", example_translation: "I attended the concert." },
  { id: "attendre", german_word: "attendre", looks_like: "to attend", actual_meaning: "to wait for", trap_note: "j'attends le train = I'm waiting for the train. Attending a class is suivre (to follow) un cours.", example_sentence: "J'attends le bus.", example_translation: "I'm waiting for the bus." },
  { id: "blesser", german_word: "blesser", looks_like: "to bless", actual_meaning: "to wound, to injure", trap_note: "blesser hurts: il s'est blessé = he got injured. Blessing is bénir.", example_sentence: "Il s'est blessé au foot.", example_translation: "He got injured playing football." },
  { id: "demander", german_word: "demander", looks_like: "to demand", actual_meaning: "to ask", trap_note: "demander is the everyday 'to ask' — no aggression inside. Demanding is exiger.", example_sentence: "Je vais demander mon chemin.", example_translation: "I'm going to ask for directions." },
  { id: "librairie", german_word: "librairie", looks_like: "library", actual_meaning: "bookshop", trap_note: "the librairie sells books. The lending library is la bibliothèque.", example_sentence: "J'achète des livres à la librairie.", example_translation: "I buy books at the bookshop." },
  { id: "monnaie", german_word: "monnaie", looks_like: "money", actual_meaning: "coins; small change", trap_note: "monnaie is the change in your pocket. Money as a concept is l'argent.", example_sentence: "Gardez la monnaie.", example_translation: "Keep the change." },
  { id: "notice", german_word: "une notice", looks_like: "a notice", actual_meaning: "instruction manual", trap_note: "la notice is the leaflet of instructions. A posted notice is un avis.", example_sentence: "Lis la notice avant.", example_translation: "Read the instructions first." },
  { id: "sensible", german_word: "sensible", looks_like: "sensible", actual_meaning: "sensitive", trap_note: "sensible means feeling things deeply. The sensible one is raisonnable.", example_sentence: "Elle est très sensible.", example_translation: "She is very sensitive." },
  { id: "éventuellement", german_word: "éventuellement", looks_like: "eventually", actual_meaning: "possibly, potentially", trap_note: "éventuellement opens a possibility. Eventually is finalement — at the end of time, not in the realm of maybe.", example_sentence: "Il viendra éventuellement.", example_translation: "He might possibly come." },
  { id: "éducation", german_word: "éducation", looks_like: "education", actual_meaning: "upbringing, manners", trap_note: "une bonne éducation is good manners, not good grades. Schooling is l'instruction or les études.", example_sentence: "Elle a une bonne éducation.", example_translation: "She has good manners." },
  { id: "coin", german_word: "coin", looks_like: "coin", actual_meaning: "corner; area", trap_note: "un coin is a corner — the metal coins are pièces. 'Mon coin' is my neck of the woods.", example_sentence: "Le chat dort dans son coin.", example_translation: "The cat sleeps in its corner." },
];

export const frenchCompendium: CompendiumData = {
  words: Object.fromEntries(WORDS.map((w) => [w.id, w])),
  wordList: WORDS,
  shifts: SHIFTS,
  compounds: COMPOUNDS,
  falseFriends: FALSE_FRIENDS,
  dailyInsights: [],
};

export const FRENCH_WORD_COUNT = WORDS.length;
