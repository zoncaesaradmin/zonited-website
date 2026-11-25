# Zonited brand assets

Source-of-truth brand references used by this website.

## Contents

- `zonited-brand-colors.md` — colour palette, tokens, usage rules
- `logos/Zonited_Logo_Circle.png` — circular mark (header / favicon source)
- `logos/Zonited_Logo_Square.png` — square lockup (wordmark / OG source)
- `diagrams/Zonity_with_name.png` — Zonity concept diagram (served on site)
- `diagrams/Zonity_without_name.png` — unused alternate (kept for design reference; not wired)

## Website wiring

| Brand file | Served as |
|---|---|
| Circle logo | `assets/brand/zon-mark.png` (master), `assets/brand/zon-mark-sm.png` (512px web), favicons |
| Square logo | `assets/brand/zonited-wordmark.png` (hero crop), `assets/brand/og-share.jpg` (1200×630 share) |
| Diagram with name | `assets/zonity-diagram.webp` + `.jpg` (from `diagrams/Zonity_with_name.png`) |

When logos or colours change, update files here first, then re-sync the `assets/` copies used by the static site.
