# Brücke — Pitch Deck (slide-by-slide)

*Compiled 2026-10-08 · v0.1 · 12 slides. Design note: build the deck IN Brücke's own design system (Monkeytype themes, trail-map visuals) — the deck itself should demo the product's craft.*

---

## Slide 1 — Title
**Brücke** — *the bridge between English and German*
"You already understand more German than you think."
One visual: the trail map, theme-colored, with the pulsing selector on node 1.

## Slide 2 — The problem
- Language apps reward streaks, not speech. Duolingo: ~138M MAU (rounded — 01-market-research.md), and the most persistent learner complaint is *"I still can't speak/understand German"* (learner threads & press, 2024–2026 — sources in 01-market-research.md).
- Learners memorize thousands of disconnected word pairs and re-forget most of them (SRS research & learner reports — 01-market-research.md).
- Trust in AI-generated course content just collapsed (Duolingo's 2025 AI-first walk-back).
**The gap:** a method-driven, trustworthy app for people who actually want to *learn*, not grind.

## Slide 3 — The insight (the magic slide)
English never left the Germanic family. In 500–800 AD, High German consonants shifted by *law*:
`water→Wasser · make→machen · think→denken · two→zwei · hope→hoffen · give→geben`
Nine rules — seven consonant laws + strong-verb Ablaut + the -ieren pattern. Once you hear them, you *deduce* German — you don't memorize it.
- Internal estimate (no external efficacy data yet — the funded study closes this): once the rules click, hundreds of words become derivable per hour of study.
- This is textbook historical linguistics (Wright, Kluge) — no one has productized it as an interactive app with SRS and verified sourcing. (Language Transfer teaches the same laws free as audio; nothing playable, with spaced repetition and verified derivation sources.)

## Slide 4 — The product
Four pillars:
1. **The Trail** — 168 authored lessons, game-map progression, mastery gates
2. **The Atlas** — 9 sound-shift constellations with philological sources
3. **The Review Hub** — SM-2 spaced repetition, 5 decks × 4 styles
4. **Production drills** — produce German from thought: transcription, literal-gloss, and twist exercises live today (full Thinking-Method cue-ladder rollout in progress)
Show 2–3 screenshots: trail map, a shift-pair transformation, a transcribe exercise.

## Slide 5 — The moat: verified content engine
- 1,226-word etymological compendium; **every** derivation source-tagged (Wiktionary/etymonline; 8 entries flagged UNVERIFIED pending review)
- A published no-invention protocol + audit scripts + 234 automated tests enforce it in the test suite
- Why it matters: content credibility is the product. AI content farms cannot copy trust.
- Reuse-density law: every exercise only uses words the learner has already met — the app feels *fair*.

## Slide 6 — Why learners stay
- Aha-moment pedagogy: every lesson teaches a *connection*, not a list
- Production from lesson 2 (transcribe, literal gloss, twists) — learners *produce* German earlier
- Craft culture: 187 WCAG-audited themes, 43 fonts, mechanical-keyboard sound packs — the Monkeytype community's aesthetic, aimed at language learning
- Privacy as a feature: no account, no telemetry, local-first, one-click data export

## Slide 7 — Market
- Language-learning apps: **$1.54B (2025), +19% YoY**; online language learning TAM **$21B+ → $55B by 2030**
- Duolingo: $1.04B revenue FY2025, 58.7M DAU — proof of payment behavior at scale
- German: ~15–20M learners worldwide; top destination language for work migration into Europe
- Wedge segment: method-seekers, polyglots, typing-culture enthusiasts — reachable, underserved, high-intent

## Slide 8 — Business model
- **Free**: full A1 trail (656 words live) — the growth engine ("the whole method, free")
- **Premium (~$8–12/mo or $79/yr — to be validated by pricing experiments starting Month 6)**: cloud sync, A2/B1 depth, reader integration, all languages
- **Zero marginal infra cost pre-sync**: static client-side app; sync, payments, and creator seeding are the real costs
- Later: B2B licensing (schools, Goethe-Institut-adjacent prep), language-pair licensing

## Slide 9 — Competition
| | Duolingo | Babbel | Anki | **Brücke** |
|---|---|---|---|---|
| Core mechanism | Gamified drills | Course curriculum | SRS flashcards | **Deduction + SRS** |
| Content origin | AI-trending | Human | User-generated | **Verified, sourced** |
| Speaking/production | Late, tap-heavy | Dialogues | None | **From lesson 2** |
| Infra cost per user | High | High | ~Zero | **~Zero** |
Positioning line: *"For people who tried Duolingo and want to actually learn."*

## Slide 10 — Traction & roadmap
**Shipped:** full curriculum, engine, tests, audits; Goethe-A1 vocabulary complete (656 words against the 650-word target)
**Next (in roadmap order):** analytics + waitlist (Phase 0) → public beta → community launch (months 1–3) → payments (months 6–9) → efficacy pilot (months 9–12)
**Months 12–18:** A2/B1, +2 languages on the same engine, reader integration, mobile PWA

## Slide 11 — Team
- **Shaurya Kad** — solo technical founder: designed, wrote, tested, and documented the entire platform in ~5 weeks
- Pedagogy sourced from Language Transfer's Thinking Method and formal historical linguistics
- (Advisor: recruiting — target a linguistics PhD or a trusted language-learning content creator; see roadmap Phase 0)

## Slide 12 — The ask
**$350K pre-seed** to reach the seed-proof-point:
- Allocation: 40% product (sync, payments, PWA, reader integration) · 30% content (A2/B1 + languages 2–3) · 20% growth · 10% efficacy study — full use-of-funds table in the roadmap
Target proof points in 12–18 months: D30 retention > 20%, 25K registered learners, $25K+ MRR or validated willingness-to-pay → **$1.5–3M seed**.
*Fluent Forever precedent: $4.9M seed @ $13.5M valuation on method + community.*

**Contact:** Shaurya Kad · shauryakad2@gmail.com
