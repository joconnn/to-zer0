---
name: Target to Zero
description: A restrained study tracker where modern utility meets a retro fighter HUD.
colors:
  action-blue: "#2563eb"
  action-blue-hover: "#1d4ed8"
  ink: "#18181b"
  ink-soft: "#71717a"
  canvas: "#f4f4f5"
  surface: "#ffffff"
  border: "#e4e4e7"
  field-border: "#d4d4d8"
  complete: "#16a34a"
  complete-surface: "#f0fdf4"
  danger: "#991b1b"
  danger-border: "#fca5a5"
  danger-surface: "#fef2f2"
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
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.56
  body:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.5
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
    backgroundColor: "{colors.action-blue}"
    textColor: "{colors.surface}"
    rounded: "{rounded.field}"
    padding: "8px 16px"
  button-primary-hover:
    backgroundColor: "{colors.action-blue-hover}"
    textColor: "{colors.surface}"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    rounded: "{rounded.field}"
    padding: "8px 16px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "8px 12px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "16px"
---

# Design System: Target to Zero

## Overview

**Creative North Star: "The Fighter's Study HUD"**

Target to Zero is where a restrained modern productivity interface collides with the visual language of a retro fighting-game HUD. The modern layer keeps study goals readable, calm, and quick to operate; fighter details turn each title into a player identity and each remaining duration into health that can be depleted toward a decisive zero.

The interface stays disciplined rather than becoming a themed arcade cabinet. Game character should come from information structure, crisp status feedback, compact HUD geometry, and purposeful moments of emphasis—not ornamental noise or imitation artwork.

**Key Characteristics:**
- Restrained modern foundations with concentrated retro-fighter details
- Flat, crisp on-screen HUD surfaces rather than physical arcade controls
- Strong player identity and instantly readable remaining health
- Keyboard-first interaction with unmistakable focus states
- Completion presented as a meaningful match-ending state

## Colors

The incumbent palette uses cool zinc neutrals for the modern foundation, a concentrated blue action color, and semantic green and red reserved for completion and destructive actions.

### Primary
- **Electric Action Blue:** The single active accent for adding goals and focused fields.

### Secondary
- **Victory Green:** Reserved for a goal whose remaining duration reaches zero and for its completed surface.
- **Critical Red:** Reserved for destructive controls, never routine progress decoration.

### Neutral
- **HUD Ink:** Primary copy and dark action surfaces.
- **Muted Readout:** Empty-state and secondary copy.
- **Cool Canvas:** The page field behind the application panel.
- **Clean Surface:** Cards, fields, and the main application panel.
- **Fine Divider:** Quiet card and field boundaries.

### Named Rules

**The Signal Discipline Rule.** Blue means action, green means completion, and red means destruction; do not blur these roles.

**The Restrained Collision Rule.** Neutral surfaces dominate. Fighter-game color appears in compact, high-information HUD moments rather than washing over the entire screen.

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

The system is nearly flat. The main application surface uses one subtle ambient shadow to separate it from the cool canvas; cards rely on fine borders and semantic surface color rather than elevation. Fighter HUD depth should come from crisp layered bands and contrast, not soft stacks of floating panels.

**The Flat HUD Rule.** Keep goal cards visually attached to the interface; reserve shadow for the application shell, not every component.

## Shapes

The incumbent geometry uses gently curved fields and cards (6px) inside a slightly broader application panel (8px). Borders are thin and quiet. Retro HUD treatment may introduce clipped or stepped internal health-bar geometry, but interactive hit areas retain approachable modern sizing and clearly visible focus outlines.

## Components

### Buttons
- **Shape:** Gently curved rectangle (6px) with compact 8px by 16px padding.
- **Primary:** Electric Action Blue with white text for creating a goal.
- **Dark:** HUD Ink with white text for deducting completed minutes.
- **Hover / Focus:** Darken the surface on hover; show a 2px blue outline with a 2px offset for keyboard focus.
- **Destructive:** Pale red surface, red border, and dark red text; spans the card width in the current layout.

### Cards / Containers
- **Corner Style:** Gently curved (6px).
- **Background:** Clean Surface by default and pale victory green at zero.
- **Shadow Strategy:** No card shadow.
- **Border:** Fine Divider by default; Victory Green on completion.
- **Internal Padding:** 16px.

### Inputs / Fields
- **Style:** White field, Fine Field Border, gently curved corners, and 8px by 12px padding.
- **Focus:** Blue border shift with a pale blue 2px focus ring.
- **Error / Disabled:** No established visual treatment yet.

### Goal Health HUD
- **Player:** The goal title acts as the player's name.
- **Health:** Remaining duration is the player's health and must be shown as both an exact minute value and a graphical bar.
- **Depletion:** Deducting study time reduces health toward zero; visual progress must never replace the exact numeric readout.
- **Completion:** Zero is a distinct resolved state, not merely an empty bar.

## Do's and Don'ts

### Do:
- **Do** keep the modern zinc-and-white foundation dominant.
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
