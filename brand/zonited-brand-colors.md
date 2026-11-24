# Zonited — Brand Color System

**Status:** Proposed final palette, pending visual review and production testing  
**Version:** 1.0 · 23 November 2026  
**Scope:** Zonited.com website, member experience, Zonity Admin Portal, Vendor Portal, pitch decks, print, merchandise and signage.  
**Logo:** Not finalized. This document specifies colors, not logo geometry.

## Brand direction

Warm, approachable and trustworthy for residents, local shops, service professionals and community administrators. Burgundy provides a memorable anchor; Fresh Sage softens it; Warm Cream keeps interfaces inviting. Do not treat supporting UI colors as additional primary brand colors.

## Core palette

| Token | Name | Hex | Intended use |
|---|---|---|---|
| `brand.primary` | Burgundy | `#7F1D3D` | Wordmark, headings, primary CTAs, key brand areas |
| `brand.secondary` | Fresh Sage | `#83AD8B` | Illustrations, icons, decorative accents, selected graphic elements |
| `brand.background` | Warm Cream | `#FFF9F1` | Marketing page backgrounds, large light surfaces |

## Supporting palette

| Token | Name | Hex | Intended use |
|---|---|---|---|
| `text.primary` | Espresso | `#3B2C2C` | Body copy and primary UI text |
| `surface.default` | White | `#FFFFFF` | Cards, tables, form surfaces, dashboards |
| `surface.warm` | Warm Sand | `#EAD9C6` | Subtle borders, dividers and warm section surfaces |
| `surface.sage` | Pale Sage | `#E7F0E5` | Selected cards, subtle section backgrounds |
| `action.sage` | Deep Sage | `#496D50` | Accessible sage text, links, dark green buttons |
| `accent.amber` | Soft Amber | `#E6AC49` | Sparing decorative highlights; not the default warning or CTA color |

## Semantic UI colors (distinct from brand colors)

| Token | Hex | Purpose |
|---|---|---|
| `state.success` | `#496D50` | Success text/icon; pair with Pale Sage surface |
| `state.warning` | `#805300` | Warning text/icon; use on light amber tint `#FFF2D6` |
| `state.error` | `#B42318` | Error text/icon; use on light error tint `#FEECEB` |
| `state.info` | `#285EA8` | Informational text/icon; use on light blue tint `#EAF2FF` |

Semantic colors are functional, not new logo colors. Do not use Burgundy as an error state simply because it is red-toned.

## Usage rules

1. On marketing pages, favor Warm Cream or White backgrounds, Burgundy headlines/primary CTAs, Espresso body text, and Sage illustrations/secondary highlights.
2. On admin/vendor dashboards, favor White cards and restrained Cream/Sand surfaces. Reserve Burgundy for navigation identity and key actions; avoid burgundy-filled tables or large dense panels.
3. Use **white text on Burgundy** for primary buttons. Use **white text on Deep Sage** for green buttons. Never use white text on Fresh Sage for small labels.
4. Use Fresh Sage for large icons, artwork, backgrounds and shapes, **not normal-size text on Cream or White**. Use Deep Sage for readable text and functional controls.
5. Do not use amber as a primary brand color. Use it sparingly, mostly in illustration; warnings should use dedicated semantic colors.
6. Produce monochrome, dark-background and light-background versions of the future logo; do not require all three brand colors in every rendering.
7. For T-shirts, test cream fabric with Burgundy print and burgundy fabric with white print. For outdoor signage, test real-world material, light and print proofs before approval.
8. Keep the word **Zonited** for the platform and **Zonity** for an individual geo-mapped community. Colors do not encode user role or Zonity membership.

## Contrast checks (WCAG normal-text target >= 4.5:1)

| Foreground / Background | Ratio | Result |
|---|---:|---|
| Burgundy `#7F1D3D` / Cream `#FFF9F1` | 9.36:1 | Pass |
| Espresso `#3B2C2C` / Cream `#FFF9F1` | 12.68:1 | Pass |
| Deep Sage `#496D50` / Cream `#FFF9F1` | 5.60:1 | Pass |
| White / Burgundy | 9.79:1 | Pass |
| White / Deep Sage | 5.86:1 | Pass |
| Fresh Sage `#83AD8B` / Cream | 2.41:1 | **Fail** for normal text |

These are calculated contrast ratios for solid colors; real-world accessibility also depends on font size, opacity, overlays, focus styles and interactive states. Validate each actual UI component.

## CSS variables

```css
:root {
  --brand-burgundy: #7F1D3D;
  --brand-fresh-sage: #83AD8B;
  --brand-cream: #FFF9F1;
  --text-primary: #3B2C2C;
  --surface-default: #FFFFFF;
  --surface-warm: #EAD9C6;
  --surface-sage: #E7F0E5;
  --action-deep-sage: #496D50;
  --accent-amber: #E6AC49;
  --state-success: #496D50;
  --state-warning: #805300;
  --state-error: #B42318;
  --state-info: #285EA8;
}
```

## Suggested initial distribution (not a strict rule)

- 65–75% Cream / White surfaces
- 15–20% Burgundy identity and emphasis
- 5–10% Fresh Sage and Pale Sage
- Remaining small accents / functional states

## Pending validation

- Final logo, typography and iconography are **not yet approved**.
- Test real website and app screens, responsive states, dark mode if needed, print CMYK conversions, embroidery, and outdoor signage.
- Check visual similarity to competitors and trademark availability separately; a color combination alone is not a uniqueness guarantee.
