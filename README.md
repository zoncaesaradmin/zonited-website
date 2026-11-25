# Zonited Website

Static visual gateway for Zonited Solutions (`zonited.com`), deployed on Cloudflare Pages.

The marketing site is **not** the product app. It explains the idea briefly, shows a services map, and sends people to WhatsApp for interest.

## Surface split

| Surface | Role |
|---|---|
| `zonited.com` (this repo) | Brand gateway, diagrams, services map, outbound WhatsApp links |
| WhatsApp `wa.me/918310880446` | Soft interest / D2C contact (Join / Become a provider prefilled messages) |
| `app.zonited.com` (future) | Login, Zonity membership, per-zone enabled vs grayed services |

## Brand references

Source-of-truth brand files live under [`brand/`](brand/):

- [`brand/zonited-brand-colors.md`](brand/zonited-brand-colors.md) — colour palette and usage rules
- [`brand/logos/`](brand/logos/) — circular and square logo masters
- [`brand/diagrams/`](brand/diagrams/) — Zonity concept diagrams

Web-served copies:

| Use | Path |
|---|---|
| Header mark | `assets/brand/zon-mark.png` |
| Wordmark | `assets/brand/zonited-wordmark.png` (from square logo) |
| Favicons | `assets/brand/favicon-16.png`, `favicon-32.png` |
| Square / OG | `assets/logo/zon-logo.png` |
| Zonity diagram | `assets/zonity-diagram.png` |
| WhatsApp mark | `assets/brand/whatsapp.svg` |

Core colours: burgundy `#7F1D3D`, fresh sage `#83AD8B`, warm cream `#FFF9F1`, espresso text `#3B2C2C`, deep sage `#496D50`.

## Deploy with Cloudflare Pages

1. Push this repository to GitHub.
2. In Cloudflare, create a Pages project from that repository.
3. Leave the build command empty and use `/` as the output directory.
4. Attach `zonited.com` in the Pages custom-domain settings.

## Local preview

```bash
make serve
```

Binds to all interfaces (`0.0.0.0:8000`), so you can open `http://localhost:8000` on this machine, or `http://<your-LAN-IP>:8000` from a phone on the same Wi‑Fi. The serve target prints the LAN URL when it starts.

## Improvements backlog

Incremental next work (visual clarity, less prose, hygiene) is tracked in [`IMPROVEMENTS.md`](IMPROVEMENTS.md). Work through steps over multiple sessions; do not treat it as a single ship.

## Site direction

- Single homepage: Zonited intro → WhatsApp tiles → How it works (Zonity) → Services map.
- Primary exits: two WhatsApp tiles — **Join a Zonity** and **Become a provider**.
- Services section: **Services you may use or offer** — Within your Zonity; From providers outside your Zonity; Across Zonities on the platform.
- **Zonited** = platform; **Zonity** = community experience.

WhatsApp prefilled messages:

- Residents: `Hi, I would like to learn more about joining a Zonity.`
- Partners: `Hi, I would like to register interest as a partner / operator / vendor for Zonity.`

## Search and sharing metadata

Canonical URL: `https://zonited.com/`. Keep OG/Twitter descriptions aligned with the gateway positioning when editing them.
