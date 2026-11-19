# Zonited Website

A self-contained static homepage for Zonited (zonited.com), ready to deploy through Cloudflare Pages.

Members request access or place pre-orders for fruits and flowers by zonity and time slot through WhatsApp. The site itself has no backend and no order catalog — it routes people to WhatsApp with clear join vs order intents.

## Deploy with Cloudflare Pages

1. Push this repository to GitHub.
2. In Cloudflare, create a Pages project from that repository.
3. Leave the build command empty and use `/` as the output directory.
4. Attach `zonited.com` in the Pages custom-domain settings.

## Local preview

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Site direction

- Buyer-first marketing page for zonity-local fruit and flower pre-orders.
- Membership is allowlisted; join and zonity tying happen in WhatsApp chat.
- Same WhatsApp number for both CTAs; pre-filled message text differs.
- Temporary ZoneON logo and colour system until a Zonited brand mark is ready.

Contact WhatsApp: `+91 83108 80446` (`wa.me/918310880446`).

## Search and sharing metadata

The HTML head includes a search description, Open Graph sharing metadata, and a summary card using the circular logo. The canonical website URL is `https://zonited.com/`. Keep the search and sharing descriptions consistent when editing them. Publish `index.html` and the referenced logo asset together for public link previews to use the updates.
