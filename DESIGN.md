# Design system

<!-- impeccable:design-schema 1 -->

## Surface

`operate` — a verb lookup and practice tool for a Spanish-speaking learner of Brazilian Portuguese.

## Visual world

Working direction: a field notebook crossed with a route atlas. The grammar table is the map legend; tense tabs are routes through time; practical prompts read like notes recorded on a trip. This direction is a grounded working assumption for the first build, not a user-approved brand identity. The concept-seed service was unavailable, so no challenger roll was produced.

## Color tokens

- Paper: `#F4F0E6`
- Warm surface: `#FBF9F3`
- Ink: `#23382F`
- Ink secondary: `#56645A`
- Route green: `#285441`
- Pale green: `#E4EBE1`
- Terracotta waypoint: `#BD563A`
- Pale terracotta: `#F1E1D8`
- Brass marker: `#D7A25C`
- Rule line: `#D9D6CA`

## Typography

- Display and study headings: Fraunces, medium weight, compact editorial scale.
- Interface/body: DM Sans, 400–700.
- Conjugations and metadata: IBM Plex Mono, 400–600.
- Hosted font fallback stack remains in CSS; bundle fonts locally before making offline font availability a release requirement.

## Components and behavior

- Navigation uses a thin active route underline; the mobile view places primary tool switching at the lower edge of the workspace.
- Search is a warm paper field with a compact solid-green action.
- Tense tabs use text labels and a single terracotta underline; no color alone carries selection.
- Conjugations use a ruled, open table with monospaced forms and optional regional `tu` rows.
- Exercise prompts use notebook ruling, scene labels, a single written response field, and explicit correction feedback.
- Correct and incorrect states have both text and distinct symbol/border treatment.
- Keyboard focus is visible; reduced-motion preferences are respected.

## Responsive rules

- Wide screens: left utility rail plus main work area; intro aligns to the work area.
- Tablet: compress the rail and spacing while preserving full conjugation rows.
- Phone: stack the content and move tool switching below it; actions become full-width, tables may scroll horizontally if needed.

## Content and assets

- Use Spanish for instructions, Brazilian Portuguese for target-language forms and prompts.
- Do not use national-flag colors as a shortcut for Brazilian identity.
- The current verb list is explicitly a sample; do not imply the full 100-verb PDF has been imported.
