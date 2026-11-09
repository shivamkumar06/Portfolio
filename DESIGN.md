---
name: Shivam Portfolio
description: Modern type-led developer portfolio for hiring and social share
colors:
  bg: "#F5F4EF"
  surface: "#FFFFFF"
  ink: "#121212"
  muted: "#5C5C5C"
  line: "#E2E0D8"
  accent: "#0F766E"
  accent-ink: "#FFFFFF"
  accent-soft: "#D7F3EF"
  glow: "#14B8A6"
typography:
  display:
    fontFamily: "Sora, Segoe UI, sans-serif"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Source Sans 3, Segoe UI, sans-serif"
    fontSize: "1.075rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "8px"
  md: "12px"
  pill: "999px"
spacing:
  4: "1rem"
  5: "1.5rem"
  6: "2rem"
  7: "3rem"
  8: "5rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    rounded: "{rounded.pill}"
    padding: "0.7rem 1.2rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.7rem 1.2rem"
---

# Design system

## Overview

Type-led software portfolio. First viewport is name + fact + dual CTAs over a soft teal glow (CSS only). Decorative illustrations are not used outside **Projects** (screenshots) and **Resume** (PDF). Tech/tool SVGs remain as skill content.

## Colors

Warm paper ground, near-black ink, teal accent (`#0F766E`). No purple particle theme, no railway-board costume.

## Typography

- **Display:** Sora
- **Body:** Source Sans 3

## Layout

Equal `.wrap` edges. Hero fills first viewport alone. Sections use generous vertical rhythm. Projects are a 2-up media grid.

## Elevation & Depth

Light surface cards, soft shadows on hover. Soft radial glow in hero (CSS).

## Shapes

12px surfaces, pill buttons/nav chips.

## Components

Wordmark nav (`Shivam.`), pill CTAs, project media tiles with image zoom, skill icon tiles, GitHub calendar panel.

## Motion

- Hero staggered enter on load
- Route fade/slide via `PageTransition`
- Scroll reveal (`data-reveal` + IntersectionObserver)
- Hover lift 2px; project image scale 1.04
- `prefers-reduced-motion` collapses motion

## Do's and Don'ts

**Do** keep project screenshots and resume PDF; keep factual copy.  
**Don't** reintroduce home/about illustrations, Bootstrap, particles, or purple gradients.
