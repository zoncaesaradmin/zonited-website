# Zonited website — improvements backlog

Living backlog for the static gateway (`zonited.com`). Work through items in **bits and pieces**; do not try to finish everything in one pass.

**North star:** visual path to WhatsApp — clear and interesting **without** stacking more verbal explanation.

**Current baseline (shipped):** Option A gateway — brand/nav → definition band → dual WhatsApp CTAs → Zonity diagram → services chips (Available / Coming) → soft “Become a provider” loop. Explore page folded into homepage. Mobile tap tooltips. `make serve` binds LAN.

---

## How to use this doc

- Pick one **Step** (or a single checkbox) per session.
- Mark items `[x]` when done; add a short note under **Done log** if useful.
- Prefer visual/structure changes over new paragraphs.
- Re-read **Out of scope** before expanding the marketing site into an app shell.

---

## Step 1 — Copy diet on “How it works” (Zonity)

**Goal:** Let the diagram carry the meaning; cut repeated explanation.

- [ ] Keep section eyebrow + one short heading (or one short line under it).
- [ ] Remove or collapse the three-part Zonity band (definition + follow + perk) so it does not restate the diagram.
- [ ] Keep figcaption minimal (or drop if redundant).
- [ ] Recheck mobile: diagram readable without scrolling through a wall of text first.

**Why first:** Highest clarity win, lowest risk to CTAs and services.

---

## Step 2 — First-viewport visual pass

**Goal:** First screen feels like one branded composition, not a definition essay + two cards of copy.

- [x] Increase brand presence above the fold (wordmark in benefit hero).
- [x] Atmosphere: hero board `assets/hero/neighborhood-board.jpg` + HTML headline/support (editable) + light CSS float/drift.
- [x] Primary actions as compact WhatsApp CTAs in the hero (Join / Become a provider) — heavy path tiles removed from first viewport.
- [x] Brand test improved: wordmark + benefit line + visual without opening on a definition band.
- [ ] Iterate tagline/support copy until it feels right (working draft in hero).
- [ ] Avoid stacking stats, promos, or secondary marketing in the first viewport (keep watching).

**Constraints:** Soft WhatsApp interest only; no fake app UI.

---

## Step 3 — Services map as a visual system

**Goal:** Services read as a map of three worlds, not a tag cloud.

- [ ] Stronger visual grouping for the three families (Within / Outside / Across) — quiet columns, rules, or accent — without restoring long family leads.
- [ ] Push Available vs Coming contrast (fill, weight, opacity); legend stays short.
- [ ] Optional: tiny pictogram or color cue per family (still scannable as chips).
- [ ] Review “Across Zonities” vs resident-facing chips — signal audience shift visually if the list stays B2B-leaning.
- [ ] Revisit chip labels/tooltips only when a concrete product decision lands (do not expand tip prose for its own sake).

---

## Step 4 — Chip tip affordance (especially mobile)

**Goal:** People discover that chips open detail without a paragraph of instruction.

- [ ] Non-verbal cue that chips are tappable/hoverable (press state, subtle pulse once, or equivalent).
- [ ] Confirm fixed tooltip stays inset from viewport edges with clear gap (already improved; regression-check on small phones).
- [ ] Optional: one-time gentle demo on first Available chip (only if it does not feel gimmicky).
- [ ] Keyboard/screen-reader: expanded state and tooltip remain understandable.

---

## Step 5 — Motion (restrained)

**Goal:** Presence and hierarchy, not noise. Aim for **2–3** intentional motions.

- [ ] Soft entrance for path tiles and/or diagram.
- [ ] Tip appear/disappear already partly handled — keep consistent with any new motion language.
- [ ] Respect `prefers-reduced-motion`.
- [ ] Do not reintroduce opacity/`both` bugs that previously hid content.

---

## Step 6 — Ship hygiene & cleanup

**Goal:** Repo and deploy match what we actually show.

- [ ] Sync `privacy.html` cache-bust / asset query params with homepage (`?v=…`).
- [ ] Stronger OG/Twitter share image (landscape or dedicated social crop; square logo is weak in link previews).
- [ ] Remove or archive dead CSS (e.g. unused `.gateway-hero`, explore-page leftovers if unused).
- [ ] Remove or wire unused `script.js` (currently a no-op stub).
- [ ] Prune or document unused assets (`assets/logo-concepts/`, unused hero images) so the tree stays intentional.
- [ ] Confirm Cloudflare Pages deploy matches local `make serve` preview.
- [ ] Spot-check Privacy content still matches WhatsApp-interest + static site reality.

---

## Step 7 — Optional second visual beat

**Goal:** Only if services still feel abstract after Steps 1–3.

- [ ] Small diagram or schematic for Within / Outside / Across (not another essay).
- [ ] Or a refined services “board” layout that makes the three families obvious at a glance.
- [ ] Re-evaluate unused brand diagrams under `brand/diagrams/` before drawing new art.

---

## Known gaps (track, don’t necessarily fix yet)

| Gap | Notes |
|---|---|
| First viewport explains more than it shows | Step 2 |
| Zonity copy repeats the diagram | Step 1 |
| Services read as tags | Step 3 |
| Tips not obvious on mobile | Step 4 |
| Across Zonities audience jump | Step 3 |
| Few visual beats beyond one diagram | Steps 2, 7 |
| Motion mostly stripped | Step 5 |
| Dead CSS / assets / privacy cache skew | Step 6 |
| Live app is out of scope here | Belongs on `app.zonited.com` later |

---

## Out of scope (for this marketing site)

- Login, membership, per-Zonity enablement UI (future `app.zonited.com`).
- Rebuilding a long-scroll brochure or app shell.
- Adding FAQ walls, stat strips, or more section leads “for completeness.”
- Hard WhatsApp automation / chatbot flows beyond soft `wa.me` interest links.

---

## Suggested session order

1. Step 1 (Zonity copy diet)  
2. Step 2 (first viewport)  
3. Step 3 (services visual system)  
4. Step 4 (tip affordance)  
5. Step 5 (motion)  
6. Step 6 (hygiene) — can also be interleaved anytime  
7. Step 7 only if still needed  

---

## Done log

| Date | What landed |
|---|---|
| 2025–2026 (ongoing) | Gateway Option A; dual WA CTAs; services chips + tips; mobile tap + viewport-clamped tip; family leads removed; `i` icons removed; explore folded in; `make serve` on `0.0.0.0` |
| 2026-11-25 | Benefit-first hero: neighborhood board image (~320KB), wordmark, tagline “Everything you need, around you.”, slim WA CTAs; definition band removed from first viewport; Zonity stays below |
| 2026-11-25 | Moved “What is Zonited?” platform copy to `#about` before footer; About nav link |
| 2026-11-25 | Benefit hero finalized: `assets/hero/neighborhood-board.jpg` (painterly colony + apartments; iteration options folder removed) |
| 2026-11-25 | About section: commercial/industrial board under definition (`assets/hero/commercial-board.jpg`) |
| | |
