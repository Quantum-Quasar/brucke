btw check out this repo and understand how a new person coming on this website would see, and what things might not be good, just start and navigate this repo as a person coming here for the first time would and give me feedback a real person would if he visit my website




I ran the app and walked it as a first-time visitor — desktop (1440×900) and phone (390×844) — through onboarding, the trail, lesson 1, the atlas, panorama, review, settings, about, the 404, the theme picker and the share button. No code changes made.

Where it genuinely lands

The lesson experience is the strongest part. The hook → pattern → table → practice flow is coherent, the feedback sheet (“Spot On”, the derivation line, “I guessed — bring this one back sooner”) feels authored rather than generated, and the gender colours, keyboard hints, margin notes and share toast all work. The atlas and panorama are real ideas, not filler. The 404 is charming and every one of the 27 internal links I crawled returned 200. The mobile shell has no horizontal overflow and the dock fits at 390px.

The first 30 seconds are the weak part

1. Onboarding hijacks whatever page you arrive on, then throws you to lesson 1. On a first visit, the language picker opens over  /atlas ,  /review ,  /settings  — and over a shared  /trail/5  link. Completing it always routes to  /trail/1 . I verified  /trail/5  → finish onboarding →  /trail/1 . A friend shares a lesson, the new user completes the intro and loses the lesson. It should only auto-open on  / , or preserve the original path and return there. Also, the “skip” path and the “start lesson 1” path should differ.

2. The homepage visibly jumps. At load it paints the top with the “der Kindergarten” insight card; a moment later it scrolls about 8,800px down to the current node, then the onboarding modal appears over it. This happens on every load of  / . It is disorienting, and it means the visitor never gets to read the one piece of explanatory content above the map. Scroll before paint, or don’t auto-scroll on the first visit — keep a visible “Continue” bar instead.

3. The map doesn’t say what to do. Once the modal is dismissed, the screen is a sparse node graph with tiny 10–11px labels, a pulsing ring around “The Germanic Core”, faint locked nodes and numbered side nodes (“1”, “2”, “3”) that mean nothing until clicked. There is no legend, no “you are here” text and no Start button. The page title (“30 topics, one bridge”) is scrolled off-screen. For a first-time visitor this reads as “pretty, but what is it?” Add a persistent course header + “Continue: Topic 1 — The Germanic Core” CTA, a small legend (main path / extra practice / branch / locked), and raise the contrast of locked nodes. The vertical dead space is enormous — 8.8k pixels of map for 30 topics.

The onboarding is too long and its copy is stale

Six steps before the first German word, with two identical CTAs on step 1 (“continue with German” and “next”). Specific inaccuracies a careful visitor will catch:
- “trail — 30 lessons” — the repo describes 169 authored lessons (30 cores + 79 sprigs + 60 branch). Say “30 topics · 169 lessons”.
- “palette — switch between 187 monkeytype themes” — there is no palette destination. Themes live behind the unlabeled “alduin” control top-right. The copy sends people looking for a nav item that doesn’t exist.
- “esc / space / 1–4: full keyboard navigation” — true inside lessons and review, not globally. Qualify it.
- The guide button reopens at the language picker, not at help for the language/page you’re on.

Step 3 (gender) and step 6 (posture) are good content but belong in context — at the first gendered exercise and the first lesson — not in a six-step gate. Two or three steps would be enough.

Reading experience

The terminal/monospace identity is distinctive, but the body copy is often 12px Roboto Mono on near-black, with labels at 10px, and muted #858585 text (about 4.6:1, borderline for that size). On the review page, paragraphs and card copy are all 12px; in lessons the margin notes are 11px. It is squint territory at 100% zoom on a laptop. Push body copy to 14px, keep 10–11px for metadata only, and lift the muted tone one step. Also, the home  <h1>  (“30 topics, one bridge”) is 18px while the insight card title is 25px — the hierarchy is inverted.

Review page on day zero

A brand-new user opens Review and immediately sees: the full gender explainer, then a red “No German (de-DE) speech voice detected on this device” banner, then “0 due today”. That is an error message before the user has done anything, and on Linux/Chromium it is accurate. Move the voice warning to Settings or show it on first playback; replace the empty state with “No cards yet — finish lesson 1 and they’ll show up here” plus a link. The deck grid below is genuinely good once you scroll.

Atlas family page

The constellation is a nice idea, but at 1440px the labels collide: “to think → denken” overlaps “to thank → danken” and “three → drei”; “that / the” and “the / she / they” get clipped. Add collision avoidance or fall back to a list at narrower widths. The index page itself is clear.

Smaller things that are real

- Every page except About shares the title “Brücke — Cognate Engine” and the same meta description. Multiple tabs and shared links are indistinguishable.
-  /panorama  and  /about  render two  <main>  landmarks (a  <main>  nested inside the app’s  <main> ) — invalid landmark structure.
- “alduin” in the top bar is the theme name, not a username. It reads like a profile; add a “theme” label or a palette icon with an accessible name. Mobile already reduces it to an icon.
- The trail header shows “0 stars 0” — the second purple-star count has no label.
- Running dev logs a React hydration mismatch (float SVG coordinates and CSS numeric strings). Production won’t show the overlay, but the mismatched attributes aren’t patched, so it’s worth fixing.

If you fix only five things

1. Stop redirecting deep links after onboarding; preserve the arrival URL.
2. Make the first homepage viewport a readable “Continue where you are” screen, not an auto-scrolled node map.
3. Cut onboarding to 2–3 steps and correct the 30-vs-169 lesson / palette / keyboard claims.
4. Fix the 12px body text and the day-zero Review error state.
5. De-collide the atlas constellation labels.

The underlying product is much stronger than its first impression suggests — the lessons are worth reaching, and right now the entry path is the thing getting in their way.



-----

Second pass done — this time I completed a full lesson end to end, started a live review session, switched to French and Spanish, tried three light themes, opened the Master Web, tested a locked lesson URL, the settings search, the word drawer, the gate drawer, and mobile panorama. The earlier issues still stand; below are the additional things I found.

New, worth fixing

1. French and Spanish still wear German chrome. The lesson content and atlas are localized, but a lot of the surrounding UI is not:
- Review page in French/Spanish still has the subtitle “powered by historical sound shifts”, the  der die das  badge, and the big “Grammatical gender in German” banner with der Arm / die Hand / das Wasser. The voice warning correctly says  fr-FR / es-ES , which makes the German gender block more jarring. French and Spanish have gender too — it just isn’t named that way.
- Settings in French/Spanish still says “lazy mode (umlaut tolerance)” and “capitalization tolerance … lowercase German nouns”. The special-character-bar description lists German and French accents and omits Spanish  ñ á é í ó ú .
- Lesson header hardcodes  Phase 1 · Core Shift  for every lesson with id ≤ 30, so the French and Spanish core lessons also say “Core Shift”.
- Guide step 4 says “trail — 30 lessons” and “atlas — 9 consonant shift families and 32 compound calques” in all three languages. German actually has 169 authored lessons; French and Spanish have 123. The “consonant shift” wording is German-only.
- Atlas filter placeholder still says “Filter sound shifts…”, Master Web subtitle says “all shift families”, the review deck says “by shift family”, and the compounds card’s examples are German ( handschuh, flugzeug … gift, bald ) even in French/Spanish.
- This is a systematic localization gap, not one string. The language switch works and progress is isolated; it is the chrome that hasn’t caught up.

2. The Master Web is a static poster, not the “linked” graph it promises.  /atlas/master  renders 767 SVG nodes; labels collide and clip at the edges at 1440px, there is no zoom/pan control, no legend or intro, and clicking a label does nothing (I clicked “das Gift”). On a 390px phone it is unreadable. It took ~5.9s to become usable on the dev server. Either make it genuinely explorable with collision-aware labels and node details, or present it as a poster with a caption and a back link.

3. Starting a review session leaves the card below the fold. After “start due review” → choose style → the card starts inline, but the page stays at the top: the gender banner, the red voice warning and the “due today” card fill the viewport, and the actual prompt/show-answer controls are underneath/below. On mobile this is worse. The session should either replace the setup page or scroll/focus the card and collapse the chrome.

4. Light themes make the trail map nearly invisible. With Bingsu, Botanical or Cafe selected, locked nodes and the dashed spine sit at very low opacity against a light background — roughly 1.5:1 contrast in places. The theme picker offers 187 themes, several light, so this is a real user-selectable path. The rest of the light pages are readable; it is specifically the map’s muted/opacity-based styling.

5. Deep links bypass the map’s locks.  /trail/5 ,  /trail/30  and  /trail/1403  all render and play for a fresh visitor even though the map marks them “locked”.  /trail/30  opens with “Ninety lessons ago you learned…” — coherent only if you actually walked the trail. Combined with the first-pass bug (a new visitor who completes onboarding on  /trail/5  is redirected to  /trail/1 ), deep linking is inconsistent in both directions: locked content is playable, but the intended target is lost. Either guard locked routes with a friendly “ahead of your trail” screen or rename the map state from “locked” to “preview”.

6. Opening a lesson seeds 16 due review cards. The lesson registers every table word as “encountered” and creates SRS cards as soon as the page mounts. I opened  /trail/1 , took the table screenshot, left, and Review said “16 in queue · 16 due today” without doing an exercise. The top bar meanwhile stays at “0 / 1226 mastered” even after a completed, starred lesson. If this is deliberate, distinguish “introduced” from “due for review”; otherwise seed on completing the table or practice.

7. Settings search leaves empty headings and unrelated warnings. Type “lazy” and only one setting matches, but the page still shows LANGUAGE, INPUT, SOUND, THEME & TYPOGRAPHY, VISIBILITY & ACCESSIBILITY and DANGER ZONE as empty gaps, plus the red “No German voice” banner. Hide empty sections while filtering. The  /  shortcut and the JSON export both work (it downloads  brucke_backup_2026-10-23.json ), so this is just the filtered state.

8. The word drawer exposes an internal ID. Tapping “lernen” opens a good drawer, but its “connections” row says lesson 1403 with an external-link icon. That is a sprig ID, not a lesson number a visitor can interpret. Show the lesson title (“Topic 14 · Sprig 3 — zu + Infinitive Ladders”) instead.

9. Mobile panorama table has no scroll affordance. The case table is 466px wide inside a 356px scroll container; the right-hand columns are clipped with no hint that the table swipes. A small scroll cue or a stacked layout would fix it. (No horizontal page overflow anywhere else; the dock fits at 390.)

10. Small but visible: the second purple-star count still has no label (“0 stars 0”); the theme trigger displays the lowercase theme ID (“botanical”, “bingsu”, “8008”); the atlas family and Master Web graphs overlap labels; and the “mastered” counter staying at 0 after a lesson makes the one global progress number feel inert.

What held up in this pass

The full lesson works: hook → pattern → table → practice → twist → summary, the “not yet / got it” twist choice, the purple-star award, the  mark lesson finished  and  next lesson  paths, and the map unlocking (Topic 1 completed with a purple star, Topic 2 available — I checked the node states) all behaved correctly. The review cards themselves are well made (English prompt, German sentence gap, “show answer · space”, style picker and keyboard hints). The gate drawer and word drawer are clear, focus rings are visible, the theme search works, and Spanish/French lesson and atlas content is real, not stubbed.

The first-pass headline issues remain the highest-impact: the onboarding taking over deep links and redirecting to lesson 1, the ~8.8k-pixel auto-scroll on the homepage, the missing “start here” CTA on the map, the six-step onboarding with stale counts, the 12px body copy, the day-zero review error state, and the identical page titles.

No code changes were made; the dev server is stopped. I tested in Chromium on Linux, which has no German/French/Spanish TTS voices — that’s why the voice warning appeared, and it is environment-specific rather than universal.

-----


 Here's my honest feedback as a first-time visitor to Brücke. Splitting it into what's genuinely impressive and what would make me bounce.                                                  
                                                                                                                                                                                            
 🟢 What made me want to stay                                                                                                                                                               
                                                                                                                                                                                            
 The core idea is killer. The moment the onboarding demo showed me hand → Hand, water → Wasser, ship → Schiff with the sound shift explanation — that's a genuine "holy shit" moment.       
 You're not just another Duolingo clone. You have an actual insight that makes German feel decodable rather than foreign. That's rare.                                                      
                                                                                                                                                                                            
 The transformation table is the best thing on the site. Color-coded genders, audio buttons, cognate type labels, paired English-German words — this is the "aha" screen. Every word feels  
 like a puzzle you already solved.                                                                                                                                                          
                                                                                                                                                                                            
 The atlas visualization is beautiful. The radial spoke layout for TH→D with all the cognate pairs drawn as a web — that's the kind of thing that makes people screenshot and share.        
                                                                                                                                                                                            
 Theme customization is absurd (in a good way). 187 themes with live search, categories, color previews, plus 43 fonts. This is Monkeytype-level polish. The light/dark switching is        
 instant and the WCAG contrast auditing means nothing looks bad.                                                                                                                            
                                                                                                                                                                                            
 The exercise variety is solid. Morpheme assembly, matching pairs, typing — they test different modalities and the "You already make these sounds" box that demystifies German              
 pronunciation is brilliant.                                                                                                                                                                
                                                                                                                                                                                            
 ────────────────────────────────────────────────────────────────────────────────                                                                                                           
                                                                                                                                                                                            
 🔴 What would make me leave (or never fully engage)                                                                                                                                        
                                                                                                                                                                                            
 ### 1. There's no landing page                                                                                                                                                             
                                                                                                                                                                                            
 I arrive at the URL and immediately get a modal. I have zero context about what this site is, who made it, or why I should care. No hero section, no screenshots, no "Learn German 10x     
 faster by decoding the words you already know" headline.                                                                                                                                   
                                                                                                                                                                                            
 Compare: Every successful learning tool has a landing page that sells the idea before asking you to commit. Right now you're asking me to sit through 6 onboarding steps before I even     
 know what I signed up for.                                                                                                                                                                 
                                                                                                                                                                                            
 ### 2. Onboarding is 6 steps — that's 4 too many                                                                                                                                           
                                                                                                                                                                                            
 Steps 1-2 are great (language pick + sound shift demo). Steps 3-6 are a university syllabus. The "Posture" step reads like a philosophy paper. I came here to learn German, not to read    
 about learning theory before I'm allowed to start.                                                                                                                                         
                                                                                                                                                                                            
 Real people: will click away by step 4. Keep 2-3 steps, teach the rest inside the first lesson.                                                                                            
                                                                                                                                                                                            
 ### 3. "0 / 1226 mastered" in the header on first visit is hostile                                                                                                                         
                                                                                                                                                                                            
 The very first number I see tells me I've done nothing and there are 1,226 things to do. That's not motivating — it's a mountain I haven't agreed to climb yet. Hide this until the user   
 has some progress, or show it as a percentage ("0%") which at least won't seem insurmountable.                                                                                             
                                                                                                                                                                                            
 ### 4. "german cognates" as a tagline is jargon                                                                                                                                            
                                                                                                                                                                                            
 A normal person wanting to learn German doesn't know what cognates are. That's literally what your course teaches. Your tagline is in your audience's unknown vocabulary. Something like   
 "German through the words you already know" lands immediately.                                                                                                                             
                                                                                                                                                                                            
 ### 5. The trail map doesn't show me where to start                                                                                                                                        
                                                                                                                                                                                            
 First load after onboarding: I'm staring at the middle of a giant node graph. Everything has lock icons. Dashed borders everywhere. The visual weight is overwhelmingly "things you can't  
 do." There's no pulsing "START HERE" beacon. I know the recommended node is supposed to pulse, but it wasn't in my viewport.                                                               
                                                                                                                                                                                            
 ### 6. The review page is useless on first visit — and doesn't say so                                                                                                                      
                                                                                                                                                                                            
 A new user who clicks "review" (natural curiosity) sees:                                                                                                                                   
 - A gender education banner                                                                                                                                                                
 - A TTS warning                                                                                                                                                                            
 - "Due Today: 0 cards"                                                                                                                                                                     
                                                                                                                                                                                            
 Three blockers stacked on top of each other, zero actionable content. It should show one message: "Complete your first lesson to unlock review cards." with a button back to the trail.    
                                                                                                                                                                                            
 ### 7. Monospace everything = "developer tool" vibes                                                                                                                                       
                                                                                                                                                                                            
 PHASE 1 · CORE SHIFT, PHONOLOGICAL ATLAS, nav labels, buttons, badges — all monospace. It's aesthetically consistent but it reads like a terminal application, not a language learning     
 ### 8. No social proof or creator presence                                                                                                                                                 
                                                                                                                                                                                            
 No photo, no "Built by [name]", no testimonials, no user count, no "Featured in..." — nothing. For an educational tool that asks me to invest hours of learning time, I need a reason to   
 trust that this was built by someone who knows what they're doing. The About page explains the philosophy well but says nothing about who.                                                 
                                                                                                                                                                                            
 ### 9. About page says "Trail: 10 Lessons" — wrong                                                                                                                                         
                                                                                                                                                                                            
 The bottom navigation cards on /about hardcode "10 Lessons" (line 145 of about/page.tsx) but you have 169 authored lessons. Small thing, but it instantly undermines credibility.          
                                                                                                                                                                                            
 ### 10. The guide button does nothing visible                                                                                                                                              
                                                                                                                                                                                            
 I clicked it, nothing happened. If it replays the onboarding, give feedback. If it opens something off-screen, anchor it. Dead buttons erode trust.                                        
                                                                                                                                                                                            
 ────────────────────────────────────────────────────────────────────────────────                                                                                                           
                                                                                                                                                                                            
 🟡 Smaller things worth noting                                                                                                                                                             
                                                                                                                                                                                            
 ┌──────────────────────────────────────────────────────────────────────────────────────────────────────────────┬────────────┐                                                              
 │ Issue                                                                                                        │ Impact     │                                                              
 ├──────────────────────────────────────────────────────────────────────────────────────────────────────────────┼────────────┤                                                              
 │ Star gates are unexplained until you click them — a user hitting a locked gate might think the app is broken │ Medium     │                                                              
 ├──────────────────────────────────────────────────────────────────────────────────────────────────────────────┼────────────┤                                                              
 │ "Core" vs "Sprig" vs "Branch" node types are never explained to the user                                     │ Low-medium │                                                              
 ├──────────────────────────────────────────────────────────────────────────────────────────────────────────────┼────────────┤                                                              
 │ Daily insight card at the top of trail is great but invisible unless you scroll to the very top              │ Low        │                                                              
 ├──────────────────────────────────────────────────────────────────────────────────────────────────────────────┼────────────┤                                                              
 │ "Back to Trail" link in lessons is small and easy to miss (especially on mobile)                             │ Low        │                                                              
 ├──────────────────────────────────────────────────────────────────────────────────────────────────────────────┼────────────┤                                                              
 │ Font/theme selector is amazing but buried in settings — most users won't discover it                         │ Low        │                                                              
 └──────────────────────────────────────────────────────────────────────────────────────────────────────────────┴────────────┘                                                              
                                                                                                                                                                                            
 ────────────────────────────────────────────────────────────────────────────────                                                                                                           
                                                                                                                                                                                            
 The one-line summary                                                                                                                                                                       
                                                                                                                                                                                            
 The teaching engine is genuinely best-in-class. The front door is where you're losing people. You need a landing page that sells the "you already know German" insight, a 2-step           
 onboarding that lets people experience a sound shift before reading about it, and a trail map that grabs your hand and pulls you to lesson 1. Everything after that first lesson — the     
 exercises, the atlas, the review system, the customization — is extraordinary.
