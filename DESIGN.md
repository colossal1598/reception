---
name: Reception
description: Missed-call WhatsApp automation for solo professionals
colors:
  primary: "oklch(0.38 0.11 155)"
  primary-foreground: "oklch(0.99 0 0)"
  background: "oklch(0.98 0.004 155)"
  foreground: "oklch(0.22 0.03 155)"
  card: "oklch(1 0 0)"
  card-foreground: "oklch(0.22 0.03 155)"
  muted: "oklch(0.94 0.014 155)"
  muted-foreground: "oklch(0.42 0.035 155)"
  border: "oklch(0.88 0.018 155)"
  accent: "oklch(0.91 0.02 155)"
  ring: "oklch(0.45 0.1 155)"
  hero-wash: "oklch(0.965 0.022 155)"
  destructive: "oklch(0.55 0.2 25)"
typography:
  display:
    fontFamily: "'Zilla Slab', Georgia, serif"
    fontSize: "clamp(1.875rem, 4vw + 0.5rem, 3rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Zilla Slab', Georgia, serif"
    fontSize: "clamp(1.5rem, 2.5vw + 0.5rem, 1.875rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Libre Franklin', system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "normal"
  body:
    fontFamily: "'Libre Franklin', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "'Libre Franklin', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.05em"
rounded:
  sm: "calc(0.5rem * 0.6)"
  md: "calc(0.5rem * 0.8)"
  lg: "0.5rem"
spacing:
  section-y: "clamp(4rem, 8vw, 6rem)"
  section-x: "clamp(1rem, 4vw, 1.5rem)"
  card-padding: "1.5rem"
  button-padding-x: "2rem"
  button-padding-y: "1.5rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.lg}"
    padding: "24px 32px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.lg}"
    padding: "24px 32px"
  button-secondary:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.lg}"
    padding: "8px 12px"
    height: "40px"
  card-default:
    backgroundColor: "{colors.card}"
    textColor: "{colors.card-foreground}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card-padding}"
  card-featured:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card-padding}"
---

# Design System: Reception

## 1. Overview

**Creative North Star: "The Clear Signal"**

Reception's visual system communicates instant clarity: nothing hidden, nothing flashy, nothing that wastes a solo professional's time. The page should read like a trusted local service business that picked up the phone and explained exactly what they do. Surfaces are clean and grounded. Hierarchy is obvious at a glance. The live demo call is the proof; the design gets out of its way.

This system explicitly rejects generic SaaS landing pages (cream backgrounds, gradient heroes, hero-metric blocks, icon-card grids), aggressive sales aesthetics, enterprise corporate polish, and playful startup novelty. PRODUCT.md's line holds: *"Not a SaaS vendor, not a sales pitch. Someone who shows up, does the job, and does not waste your time."*

The primary accent is **spruce green** (hue 155°): dependable and local-trust, not SaaS navy or startup neon. Typography pairs **Zilla Slab** (display) with **Libre Franklin** (body) for editorial warmth without corporate coldness.

**Hebrew (`/he/`):** **Frank Ruhl Libre** (display) + **Heebo** (body) — same slab-serif warmth + clean sans pairing, loaded only on `he/index.html`.

**Key Characteristics:**

- Serif display + humanist sans body; weight and scale carry hierarchy
- Cool spruce-tinted neutrals; no cream or warm near-white page ground
- Tonal layering over decoration: background tints, ruled lists, and borders instead of card grids or shadows
- Flat surfaces at rest; accent reserved for CTAs and the recommended pricing tier
- WCAG 2.1 AA contrast as a hard floor (`muted-foreground` darkened to oklch L 0.42)

## 2. Colors

A restrained spruce-tinted neutral field with one accent role. The page ground and borders share the brand hue at low chroma; the hero uses a slightly richer `--hero-wash`.

### Primary

- **Spruce Green** (oklch(0.38 0.11 155)): Primary CTAs, Annual plan button, checkmarks on featured tier, focus rings. Dependable local-service green, not corporate navy.

### Neutral

- **Cool Page Ground** (oklch(0.98 0.004 155)): Default page background. Chroma toward spruce, not warmth; avoids SaaS cream.
- **Hero Wash** (oklch(0.965 0.022 155)): Hero section background only (`bg-hero-wash`).
- **Ink** (oklch(0.22 0.03 155)): Headlines and primary body text.
- **White Surface** (oklch(1 0 0)): Card backgrounds and elevated sections (`bg-card`).
- **Quiet Fill** (oklch(0.94 0.014 155)): Muted fills, secondary button hover.
- **Supporting Text** (oklch(0.42 0.035 155)): Subheads, list items, footer copy. Darkened for ≥4.5:1 contrast.
- **Hairline Border** (oklch(0.88 0.018 155)): Card edges, section dividers, ruled list separators.
- **Focus Ring** (oklch(0.45 0.1 155)): Keyboard focus rings at 50% opacity.

### Named Rules

**The One Accent Rule.** The primary color appears on ≤15% of any screen: hero CTA, demo button, Annual plan frame and CTA, and primary-tinted checkmarks. Its scarcity is the point.

**The No-Cream Default Rule.** Do not drift toward warm near-white body backgrounds that read as SaaS cream. Page ground chroma points toward spruce (hue 155), not warmth-by-default.

## 3. Typography

**Display Font:** Zilla Slab (with Georgia, serif fallback)
**Body Font:** Libre Franklin (with system-ui, sans-serif fallback)

**Character:** Editorial warmth without fuss. Zilla Slab's slab serifs signal local-trust and plain speaking; Libre Franklin's humanist rhythm carries body copy and UI labels. Contrast axis (serif + sans), not two competing sans families.

### Hierarchy

- **Display** (600, clamp(1.875rem, 4vw + 0.5rem, 3rem), 1.15): Hero headline only. `text-balance`. Tracking -0.02em.
- **Headline** (600, clamp(1.5rem, 2.5vw + 0.5rem, 1.875rem), 1.15): Section titles. Centered on landing sections. Zilla Slab.
- **Title** (600, 1.125rem, 1.4): Feature names, plan names, step headings. Libre Franklin semibold.
- **Body** (400, 1rem–1.125rem, 1.625): Prose blocks, descriptions, pricing details. Cap line length at 65–75ch. `text-pretty` on long paragraphs.
- **Label** (500, 0.75rem, 0.05em tracking): Badges only (e.g. "Recommended"). Never on every section.

### Named Rules

**The Plain Sentence Rule.** Headlines are statements, not slogans. No gradient text, no all-caps display type, no tracked eyebrows above every section.

**The Tabular Numbers Rule.** Pricing figures use `tabular-nums` for aligned currency display.

## 4. Elevation

Flat by default. Depth is conveyed through tonal layering (page ground → card white → hero wash → primary-tinted Annual frame) and ruled borders, not shadows.

### Shadow Vocabulary

None at rest. The quieter pass removed feature-card hover lifts and Annual plan `shadow-lg`. If shadows return, they must respond to interaction state only.

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. No ambient shadow under cards or sections. Borders and background tints separate content first.

## 5. Components

Solid and tactile. Buttons feel pressable; lists and cards feel grounded. Structure favors ruled lists over identical card grids.

### Buttons

- **Shape:** Gently rounded corners (0.5rem / `rounded-lg`)
- **Primary:** Filled primary background, primary-foreground text, h-11 (44px) on hero and demo CTAs. Full width on mobile, auto from `sm`.
- **Hover / Focus:** 80% primary mix on hover; `focus-visible:ring-3 ring-ring/50` for keyboard users.
- **Secondary (pricing):** Border hairline, background fill, h-10 (40px), text-sm. Hover shifts to muted background. Annual tier uses filled primary variant.

### Cards / Containers

- **Corner Style:** 0.5rem radius
- **Background:** White surface on page ground; alternate sections use `bg-card` for tonal shift
- **Shadow Strategy:** None at rest
- **Border:** 1px hairline border on default cards and demo callout (`border-border bg-card`)
- **Internal Padding:** 1.5rem (p-6); 2.5rem (p-10) on demo callout at `sm+`

### Demo Callout (signature component)

- **Purpose:** The live-demo section. Frame the "call this number" experience as the proof point.
- **Style:** Flat 1px border on card surface; no heavy primary tint frame (softened in quieter pass).
- **CTA:** Primary button with phone icon inline (SVG, not icon font).

### Feature List (replaces icon-card grid)

- **Style:** Ruled two-column list (`.feature-list`). Top border, row dividers, label column + description column from `sm`.
- **No icon tiles.** Three rows max; each row is heading + one sentence.

### Step List (how it works)

- **Style:** Numbered prose list (`.step-list`). "Step 1 / Step 2 / Step 3" labels, no icon circles or badge overlays.
- **Purpose:** Ordered process where sequence carries meaning.

### Pricing Card (featured variant)

- **Style:** Primary-tinted border (`border-primary/30`), 5% primary background (`bg-primary/5`). Flat, no shadow.
- **Badge:** Text-only "Recommended" on card surface border (`border-primary/30 bg-card text-primary`), not a filled pill.

### Navigation

- **Footer nav:** text-sm muted-foreground links, hover to foreground.
- **Header nav:** Not yet built. Next pass: wordmark + anchor links + primary CTA (`/impeccable layout`).

## 6. Do's and Don'ts

### Do:

- **Do** use Zilla Slab for h1/h2 and Libre Franklin for body, labels, and UI text.
- **Do** keep primary accent on CTAs, demo button, and Annual plan frame only.
- **Do** use `text-balance` on h1–h3 and `text-pretty` on long prose.
- **Do** provide visible `focus-visible` rings on all interactive elements.
- **Do** use ruled lists and borders to separate sections before reaching for shadows or card grids.
- **Do** inline SVG icons at 16–24px; no icon font dependencies.
- **Do** use `tabular-nums` on pricing figures.

### Don't:

- **Don't** use cream or sand-tinted near-white body backgrounds that read as generic SaaS defaults.
- **Don't** use gradient heroes, gradient text, or glassmorphism as decoration.
- **Don't** build hero-metric blocks (big number, small label, supporting stats) for ROI; prove value in plain prose.
- **Don't** repeat identical icon-plus-heading card grids across sections.
- **Don't** add small uppercase tracked eyebrows above every section heading.
- **Don't** use countdown timers, fake urgency badges, or hype copy styling.
- **Don't** reach for navy-and-gold enterprise palettes, stock photography, or buzzword-heavy visual language.
- **Don't** use illustrations, mascots, neon gradients, or novelty decoration.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe on cards or callouts.
- **Don't** revert to Geist or other overused AI-default typefaces.
