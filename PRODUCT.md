# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React + TypeScript + Vite; installable PWA; initially local data and local progress. This stack was recommended and approved by the user.

## Users

Spanish-speaking student learning Brazilian Portuguese in a language school, currently studying level 3 (units 1–3 completed, unit 4 underway). They want to look up verb conjugations and practice using them in practical contexts.

## Product Purpose

Help the learner understand and practice Brazilian Portuguese verbs through a conjugation reference and exercises grounded in real situations such as work, travel, and restaurants. Success means quickly finding a verb form and practicing when to use it.

## Positioning

No distinctive market position has been established. Do not invent comparative claims or claim the app is unique.

## Operating Context

- The learner studies from a Portuguese level 3 book and is beginning unit 4.
- The learner wants the web app first, usable on desktop and mobile screens, followed by a mobile-app phase.

## Capabilities and Constraints

- Search/select a verb and display conjugations.
- Initial forms: present indicative, pretérito perfeito, pretérito imperfeito, and near future (ir + infinitive).
- Include practice exercises in real-life contexts: work, travel, restaurants, and relevant topics from the current course unit.
- Include an optional regional `tu` form alongside `eu`, `você`, `ele/ela`, `nós`, `vocês`, and `eles/elas`.
- Start from the provided PDF listing 100 common Brazilian Portuguese verbs and the learner’s course PDF. Their contents still require extraction and validation before being treated as authoritative data.
- First release is web; a later mobile app may reuse verb data and conjugation logic.
- Keep initial app usable without an account or server.
- Code should be extensively commented to explain intent, domain rules, data structures, and non-obvious implementation decisions.
- Deliver a design/style manual and an architecture/data-flow diagram with the app.
- Open decision: exact exercise formats and whether explanations, progress tracking, and backup are in the initial release.

## Evidence on Hand

- `100_verbos_portugues_conjugados.pdf` in the project root, provided as the initial verb-list source. Contents not yet extracted or checked.
- `C:/Users/Gerardo/Downloads/Portugues_Nivel3.pdf`, provided by the user as course context. Units 1–3 completed; unit 4 started. Contents not yet extracted or checked.

## Product Principles

- Put verb forms into practical Brazilian Portuguese use.
- Favor examples and exercises grounded in the learner’s real course and everyday scenarios.
- Treat conjugation correctness as essential: source data must be reviewed rather than accepted blindly from extraction.
- Keep the web interface comfortable on desktop and phone.
- Make implementation understandable and maintainable through extensive, useful comments.
