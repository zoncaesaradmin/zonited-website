# Zonited brand assets

Source-of-truth brand references used by this website.

## Contents

- `zonited-brand-colors.md` — colour palette, tokens, usage rules
- `logos/Zonited_Logo_Circle.png` — full circular lockup (symbol + “zonited”)
- `logos/Zonited_Logo_Square.png` — full square lockup (symbol + “zonited”)
- `logos/Zonited_Symbol_Circle.png` — symbol only, circular (no word)
- `logos/Zonited_Symbol_Square.png` — symbol only, square (no word)
- `logos/zonited-wordmark.png` — wordmark crop used on the hero
- `diagrams/Zonity_with_name.png` — Zonity concept diagram (served on site)
- `diagrams/Zonity_without_name.png` — unused alternate (kept for design reference; not wired)

Masters also live under `~/zonited/logos/` (same filenames). Full lockups stay as-is (they keep the location pin); symbol-only files are for favicon, app icon, topbar-next-to-name, and similar.

### Symbol-only rebuild (tip must stay gone)

The pin tip sits in the **center gap between the two bottom heads**, above `headsEnd` — a simple “wipe below Y” cut that only clears under the feet **will leave the tip**. Always rebuild with:

```bash
node brand/scripts/build-symbol-only.mjs
```

That script wipes the center column from the bottom-handshake gap, then clears everything below the heads, and re-paints the gap after resize so Lanczos cannot bleed the tip back.

## Website wiring

| Brand file | Served as |
|---|---|
| Circle logo (full) | `assets/brand/zon-mark.png` (master), `assets/brand/zon-mark-sm.png` (512px web), favicons |
| Square logo (full) | wordmark / OG source |
| Symbol-only circle / square | not wired yet — ready when we swap header/seal/app icon to mark-only |
| Wordmark | `assets/brand/zonited-wordmark.png` (hero), `assets/brand/og-share.jpg` (1200×630 share) |
| Diagram with name | `assets/zonity-diagram.webp` + `.jpg` (from `diagrams/Zonity_with_name.png`) |

When logos or colours change, update files here first, then re-sync the `assets/` copies used by the static site.
