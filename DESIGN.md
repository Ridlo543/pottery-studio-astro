---
version: "3.0.0"
name: "Silt & Kiln — Stoneware & Ceramic Design System"
description: "Warm Limestone Linen (#F7F4EE) and Reduction Kiln Black (#141311) editorial product system with Iron Oxide (#7A442A) / Bisque (#D48C6A) accents, zero-radius architectural photography frames, 2px interactive controls, and Host Grotesk / Newsreader / IBM Plex Mono typography."
colors:
  canvas: "#F7F4EE"
  surface: "#ECE7DD"
  inverse: "#1A1816"
  ink-primary: "#1A1816"
  ink-muted: "#4A453E"
  ink-inverse: "#F7F4EE"
  hairline: "#D8D1C5"
  accent-primary: "#7A442A"
  accent-hover: "#5E331E"
  accent-on: "#F7F4EE"
  error: "#B91C1C"
  dark-canvas: "#141311"
  dark-surface: "#1F1D1A"
  dark-ink-primary: "#F5F2EC"
  dark-ink-muted: "#B5AFA5"
  dark-hairline: "#2E2B26"
  dark-accent-primary: "#D48C6A"
  dark-error: "#FCA5A5"
typography:
  display-xl:
    fontFamily: "Host Grotesk"
    fontSize: 52
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.032em"
  heading-md:
    fontFamily: "Host Grotesk"
    fontSize: 24
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  editorial-serif:
    fontFamily: "Newsreader"
    fontSize: 22
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Host Grotesk"
    fontSize: 16
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  mono-spec:
    fontFamily: "IBM Plex Mono"
    fontSize: 12
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.03em"
rounded:
  frame: "0px"
  control: "2px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
- **Light Mode (`modes/light`):** `#F7F4EE` canvas, `#ECE7DD` surface, `#1A1816` ink (`16.13:1` AAA), `#4A453E` muted (`8.65:1` AAA on canvas, `7.70:1` AAA on surface), `#7A442A` Iron Oxide accent (`7.12:1` AAA), `#B91C1C` error (`5.25:1` AA).
- **Dark Mode (`modes/dark`):** `#141311` canvas, `#1F1D1A` surface, `#F5F2EC` ink (`16.62:1` AAA), `#B5AFA5` muted (`8.52:1` AAA on canvas, `7.72:1` AAA on surface), `#D48C6A` Bisque Clay accent (`6.86:1` AA), `#FCA5A5` error (`8.86:1` AAA).

## Overview

Extracted from the refactored Penpot file (`01 · Foundations & Components`, `02 · Desktop Screens (1440)`, `03 · Mobile Screens (390)`). Built specifically for **Silt & Kiln**, an architectural stoneware and ceramic studio.

## Colors

- **Light Mode (`modes/light`):** `#FAF8F5` canvas, `#EFECE6` surface, `#1A1816` ink (`17.2:1`), `#5C5750` muted (`6.7:1`), `#7A442A` Iron Oxide accent (`7.1:1`).
- **Dark Mode (`modes/dark`):** `#141311` canvas, `#1F1D1A` surface, `#F5F2EC` ink (`16.8:1`), `#A8A298` muted (`7.2:1`), `#D48C6A` Bisque Clay accent (`6.8:1`).

## Typography & Navigation Rules

- **Display & UI:** `Host Grotesk` (400, 500, 600)
- **Editorial Serif:** `Newsreader` (400, 400 italic)
- **Technical Specs:** `IBM Plex Mono` (400, 500) for dimensions, firing temperatures (`1,260°C`), batch numbers, and EUR pricing.
- **Directional Arrows (`R-08`):** `←` and `→` are reserved strictly for sequential object navigation (`← All objects`, `Open object →`) to indicate spatial back/forward movement.
