---
name: Target to Zero
description: A personal study tracker staged as a vivid 1990s fighting-game HUD.
colors:
  action-magenta: "#e83e8c"
  action-magenta-hover: "#f472b6"
  arcade-black: "#08050e"
  hud-black: "#0b0714"
  arena-purple: "#160d27"
  panel-purple: "#24153f"
  border-violet: "#a78bfa"
  readout-violet: "#c4b5fd"
  signal-yellow: "#fde047"
  hud-text: "#ffffff"
  complete: "#4ade80"
  complete-surface: "#102b22"
typography:
  display:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.33
  title:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 900
    lineHeight: 1.2
  body:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Press Start 2P, ui-monospace, monospace"
    fontSize: "0.5rem"
    fontWeight: 400
    lineHeight: 1.6
  status:
    fontFamily: "Press Start 2P, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  field: "6px"
  panel: "8px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  2xl: "32px"
  page: "40px"
components:
  button-primary:
    backgroundColor: "{colors.action-magenta}"
    textColor: "{colors.hud-text}"
    padding: "12px 16px"
  button-primary-hover:
    backgroundColor: "{colors.action-magenta-hover}"
    textColor: "{colors.hud-text}"
  button-dark:
    backgroundColor: "{colors.hud-black}"
    textColor: "{colors.hud-text}"
    padding: "12px 16px"
  input:
    backgroundColor: "{colors.hud-black}"
    textColor: "{colors.hud-text}"
    padding: "8px 12px"
  card:
    backgroundColor: "{colors.panel-purple}"
    textColor: "{colors.hud-text}"
    padding: "16px"
---

# Design System: Target to Zero

## Overview

**Creative North Star: "The Fighter's Study HUD"**

Target to Zero places a legible productivity workflow directly inside the visual language of a 1990s fighting-game HUD. Deep arcade-black and purple stage surfaces, hard magenta edges, yellow status signals, pixel labels, and dramatic fighter lettering turn each title into a player identity and each remaining duration into health that can be depleted toward a decisive zero.

The interface is unmistakably arcade-inspired while remaining fast to read and operate. Pixel typography is reserved for short labels, controls, and status signals; longer copy stays in a modern system face. Game character comes from information structure, crisp status feedback, compact HUD geometry, hard-edged depth, and purposeful emphasis—not imitation artwork.

**Key Characteristics:**
- Dark arcade-stage foundations with vivid retro-fighter HUD surfaces
- Flat, crisp on-screen panels with hard offset depth rather than soft modern cards
- Strong player identity and instantly readable remaining health
- Keyboard-first interaction with unmistakable focus states
- Completion presented as a meaningful match-ending state

## Colors

The palette uses arcade black and deep purple as its stage, vivid magenta for action and hard edges, signal yellow for compact readouts, violet for secondary information, and green only for completion.

### Primary
- **Impact Magenta:** The active accent for adding goals, fighter-HUD edges, and dramatic lettering offsets.

### Secondary
- **Victory Green:** Reserved for a goal whose remaining duration reaches zero and for its completed surface.
- **Critical Red:** Reserved for destructive controls, never routine progress decoration.

### Neutral
- **Arcade Black:** The deepest page and input surface.
- **Arena Purple:** The atmospheric stage behind the application.
- **Panel Purple:** Goal cards and form interiors.
- **Readout Violet:** Secondary copy and inactive information.
- **Signal Yellow:** Pixel labels, exact values, and high-priority status readouts.

### Named Rules

**The Signal Discipline Rule.** Magenta means action, yellow means status, and green means completion; do not blur these roles.

**The Arcade Stage Rule.** No white or neutral page panels. Every major surface belongs to the deep black-and-purple arena, with vivid colors concentrated in high-information HUD moments.

## Typography

**Display Font:** System sans-serif
**Body Font:** System sans-serif
**Label/Mono Font:** No distinct label or monospace face is established yet.

**Character:** The current type system is direct and highly legible, using weight and scale rather than decorative typefaces. Retro-fighter character should enter through concise labels, numeric emphasis, and HUD composition while the core reading face remains modern.

### Hierarchy
- **Display** (700, 1.875rem, 1.2): Product title and highest-level identity.
- **Headline** (700, 1.5rem, 1.33): Major page sections.
- **Title** (700, 1.125rem, 1.56): Goal or player names.
- **Body** (400, 1rem, 1.5): Remaining-time readouts and supporting text.
- **Label** (700, 1rem, 1.5): Field labels and compact interface instructions.

### Named Rules

**The Player Name Rule.** A goal title is the player identity and must command its card before metadata or controls.

## Layout

The interface is a single centered column with a maximum width of 48rem, 40px vertical page margins, and 24px panel padding. Forms and goal cards use a compact 12px internal rhythm; the goal list uses a single-column 12px gap. The layout remains stacked at narrow widths, with controls allowed to share a row only when labels and values remain readable.

HUD details should reinforce the existing hierarchy rather than create a second dashboard grid. A goal card reads in order: player name, health state, then actions.

## Elevation & Depth

The system is flat and hard-edged. The main application shell uses a two-step black-and-magenta offset shadow against the arena; cards rely on vivid borders and semantic surface color rather than elevation. Fighter HUD depth comes from crisp layered bands and hard offsets, not soft floating panels.

**The Flat HUD Rule.** Keep goal cards visually attached to the interface; reserve shadow for the application shell, not every component.

## Shapes

The arcade geometry is square and hard-edged. Panels, fields, and buttons use crisp corners and 2px borders; clipped VS panels and offset shadows provide the signature silhouette. Interactive hit areas retain approachable sizing and clearly visible focus outlines.

## Components

### Buttons
- **Shape:** Hard-edged rectangle with 12px by 16px padding.
- **Primary:** Impact Magenta with Arcade Black text for creating a goal and deducting health.
- **Dark:** HUD Black with white text for secondary actions.
- **Hover / Focus:** Brighten the surface on hover; show a 2px Signal Yellow outline with a 2px offset for keyboard focus.
- **Destructive:** Pale red surface, red border, and dark red text; spans the card width in the current layout.

### Cards / Containers
- **Corner Style:** Square and hard-edged.
- **Background:** Panel Purple by default and deep victory green at zero.
- **Shadow Strategy:** No card shadow.
- **Border:** Fine Divider by default; Victory Green on completion.
- **Internal Padding:** 16px.

### Inputs / Fields
- **Style:** Arcade Black field, violet border, crisp corners, and 8px by 12px padding.
- **Focus:** Signal Yellow border shift without a soft focus glow.
- **Error / Disabled:** No established visual treatment yet.

### Goal Health HUD
- **Player:** The goal title acts as the player's name.
- **Health:** Remaining duration is the player's health and must be shown as both an exact minute value and a graphical bar.
- **Depletion:** Deducting study time reduces health toward zero; visual progress must never replace the exact numeric readout.
- **Completion:** Zero is a distinct resolved state, not merely an empty bar.

## Do's and Don'ts

### Do:
- **Do** keep the deep black-and-purple arcade stage dominant.
- **Do** make player name, remaining minutes, and health state legible at a glance.
- **Do** use fighter-HUD details where they communicate progress or completion.
- **Do** preserve clear, visible keyboard focus on every control.
- **Do** show exact remaining minutes alongside any graphical health bar.

### Don't:
- **Don't** turn the whole interface into noisy pixel-art decoration.
- **Don't** imitate a specific commercial fighting game's protected characters or assets.
- **Don't** use red for ordinary low health when it could be confused with the destructive action role without additional distinction.
- **Don't** hide essential controls behind hover-only interactions.
- **Don't** add shadows to every goal card.
