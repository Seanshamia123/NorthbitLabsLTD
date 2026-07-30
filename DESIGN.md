# NorthBit Labs — Design System

## Color Tokens
| Name | Hex | Role |
|------|-----|------|
| Ink | `#0B0F14` | Primary dark background, primary text on light |
| Polar | `#F5F2EC` | Primary light background, text on dark |
| Signal Green | `#3A5C1A` | Brand accent — CTAs, active states, highlights |
| Signal Green Hi | `#4D7724` | Hover state on Signal Green |
| Steel | `#5C6470` | Secondary body text on light backgrounds |
| Frost | `#D9E1E8` | Borders, dividers |
| Frost BG | `#EFEBE3` | Alternate section background (section--frost) |
| Muted | `#9098A4` | Tertiary text, metadata |
| Dim | `#4a5260` | Very muted labels on dark backgrounds |
| Ink Surface | `#14181F` | Elevated surface on dark (cards, panels) |
| Ink Border | `#232931` | Borders on dark backgrounds |

CSS custom properties available as `--c-ink`, `--c-polar`, `--c-signal`, etc. (defined in `globals.css :root`).

## Typography
Per the Northbit Labs Brand Guide (V.1 2026): primary typeface Clash Grotesk, secondary Satoshi. Self-hosted via `next/font/local` from `src/fonts/` (woff2, fetched from Fontshare, free for commercial use) — no Google Fonts dependency.

| Role | Font | Size | Weight | Tracking |
|------|------|------|--------|----------|
| Display H1 (page heroes) | Clash Grotesk | `clamp(40px,6.5vw,96px)` | 600 | `-0.03em` |
| Display H1 (home hero) | Clash Grotesk | `clamp(40px,4vw,66px)` | 600 | `-0.03em` |
| Section H2 | Clash Grotesk | `clamp(26px,3.5vw,52px)` | 600 | `-0.02em` |
| Card H3 | Clash Grotesk | varies `clamp(17–22px)` | 600 | `-0.01em` |
| Body | Satoshi | 15–17px | 400 | 0 |
| Eyebrow / Labels | Satoshi | 11px | 500 | `0.18–0.22em` |
| Numbers / Counters | Satoshi | varies | 600 | `-0.02em` |

CSS variables: `--font-clash-grotesk` (display/headings), `--font-satoshi` (body/eyebrows/labels/numbers). JetBrains Mono has been retired — the guide only specifies the two typefaces above; eyebrows/labels keep their uppercase+tracked treatment, just in Satoshi instead of mono. Note: Satoshi ships in 400/500/700 only (no 600) — weight:600 requests fall back to the nearest available face (700) via standard CSS font matching.

Line heights: body `1.65–1.75`, headlines `0.95–1.1`, dark-background body add `+0.05`.

## Spacing Scale
- Section vertical padding: `clamp(72px,10vw,144px)` via `.section`
- Page hero padding: `clamp(80px,11vw,160px)` top
- `.wrap` max-width: `1400px`, horizontal padding: `clamp(20px,4vw,56px)`
- `.s-head` bottom padding: `56px` (desktop), `40px` (mobile)

## Section Alternation
Pages alternate dark/light sections:
- **Ink**: `background: #0B0F14, color: #F5F2EC` — use `.section--ink`
- **Polar**: default (no class) — `background: #F5F2EC`
- **Frost**: `background: #EFEBE3` — use `.section--frost`

## Borders & Elevation
- Light context borders: `1px solid #D9E1E8`
- Dark context borders: `1px solid #232931`
- Card border-radius: `8px` (standard), `4px` (inputs/buttons)
- No box-shadows on cards. Green glow only on interactive hover: `0 0 0 3px rgba(58,92,26,0.12)`

## Motion
- Easing: `cubic-bezier(0.2,0.7,0.2,1)` throughout (ease-out-quart feel)
- Scroll reveal: `.scroll-reveal` → `.scroll-reveal--in` via IntersectionObserver (`Reveal` component)
- Entrance: `fadeUp` — 0.55s, translateY 20px → 0
- Hover transitions: 0.18–0.22s
- All motion respects `prefers-reduced-motion`

## Key Patterns
- **Eyebrow**: JetBrains Mono 11px, `0.22em` tracking, uppercase, muted color, often preceded by `.bit-dot` or section number
- **Section header (`.s-head`)**: 3-column grid — eyebrow / h2 / link-arrow
- **Link arrow (`.link-arrow`)**: underlined inline link with trailing `→`, slides `translateX(5px)` on hover
- **Bit dot (`.bit-dot`)**: 8×8 Signal Green square, used as bullet or eyebrow prefix
- **`BitMotif`**: pixel grid SVG brand motif, used in hero and as texture on dark image panels
- **`NorthBitLogo`**: real brand-guide logo lockup (`src/components/ui/NorthBitLogo.tsx`), vector paths sourced directly from `Northbit Labs Logo/SVG/Northbit Labs Main Logo.svg`, recolored to exact brand hex. Green mark (`#3A5C1A`) never changes between variants; wordmark ink swaps `#0B0F14`/`#F5F2EC` via the `variant` prop. Favicon/apple-icon/manifest icons/OG image are all regenerated from the same mark geometry.
- **`Reveal`**: scroll-triggered fade-up wrapper for sections

## Interaction States
- **Default / Hover / Focus / Active** all covered for `.btn`
- Active: `transform: translateY(1px)` press feedback
- Focus: `2px solid #3A5C1A` outline via `:focus-visible`
- Form inputs: `.field-input` class applies border + box-shadow transition on focus

## What Not To Do
- No gradient text (`background-clip: text`)
- No `transition: all` (use specific properties)
- No `transform: translateY(-4px)` lift on cards
- No identical icon-grid card rows (use numbered list layouts)
- No inline `onFocus`/`onBlur` for styling (use `.field-input` CSS class)
- No animating `gap` or `padding` (layout properties) — use `transform`
- No pure `#000` or `#fff` — always use tinted brand neutrals
