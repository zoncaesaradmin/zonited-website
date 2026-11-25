#!/usr/bin/env node
/**
 * Build tip-free symbol-only marks from full lockups.
 *
 * Full lockups keep the location pin (dot of the “i” / mark under the Z).
 * Symbol-only files must NOT include that pin — especially the tip that sits
 * in the gap between the two bottom heads (between handshake end and heads end).
 *
 * Recurring failure mode (do not repeat):
 *   HARD_CUT_Y at/below headsEnd still keeps the tip (it lives ABOVE headsEnd,
 *   in the center column from gapStart ≈ handshakeEnd+1 through tipStart).
 * Fix: wipe the center column from gapStart, then wipe everything below headsEnd.
 *
 * Usage (from repo root):
 *   node brand/scripts/build-symbol-only.mjs
 *
 * Reads:  ~/zonited/logos/Zonited_Logo_{Circle,Square}.png
 * Writes: ~/zonited/logos/Zonited_Symbol_{Circle,Square}.png
 *         brand/logos/Zonited_Symbol_{Circle,Square}.png
 */
import sharp from 'sharp';
import { writeFileSync, mkdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_BRAND_LOGOS = join(__dirname, '..', 'logos');
const HOME_LOGOS = join(homedir(), 'zonited', 'logos');
const FILL = 0.72;

const lum = (r, g, b) => 0.299 * r + 0.587 * g + 0.114 * b;
const paintBg = (buf, i, bg) => {
  buf[i] = bg[0];
  buf[i + 1] = bg[1];
  buf[i + 2] = bg[2];
  buf[i + 3] = 255;
};

const TARGETS = [
  {
    src: join(HOME_LOGOS, 'Zonited_Logo_Circle.png'),
    outs: [
      join(HOME_LOGOS, 'Zonited_Symbol_Circle.png'),
      join(REPO_BRAND_LOGOS, 'Zonited_Symbol_Circle.png'),
    ],
    label: 'circle',
    circular: true,
  },
  {
    src: join(HOME_LOGOS, 'Zonited_Logo_Square.png'),
    outs: [
      join(HOME_LOGOS, 'Zonited_Symbol_Square.png'),
      join(REPO_BRAND_LOGOS, 'Zonited_Symbol_Square.png'),
    ],
    label: 'square',
    circular: false,
  },
];

async function rebuild(t) {
  const { data, info } = await sharp(t.src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const buf = Buffer.from(data);

  let sr = 0, sg = 0, sb = 0, n = 0;
  for (let y = Math.floor(height * 0.2); y < Math.floor(height * 0.35); y++) {
    for (let x = Math.floor(width * 0.08); x < Math.floor(width * 0.16); x++) {
      const i = (y * width + x) * channels;
      if (buf[i + 3] < 200) continue;
      sr += buf[i]; sg += buf[i + 1]; sb += buf[i + 2]; n++;
    }
  }
  const bg = [Math.round(sr / n), Math.round(sg / n), Math.round(sb / n)];

  let minX = width, maxX = 0, minY = height, maxY = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * channels;
      if (buf[i + 3] < 128) continue;
      if (lum(buf[i], buf[i + 1], buf[i + 2]) > 150) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  const cx = Math.round((minX + maxX) / 2);
  const midHalf = Math.max(40, Math.floor((maxX - minX) * 0.06));
  // Only scan the lower half so the Z’s middle negative space is not mistaken for the pin gap.
  const scanFrom = minY + Math.floor((maxY - minY) * 0.55);

  let hsEnd = -1, gapStart = -1, tipStart = -1, inMid = false;
  for (let y = scanFrom; y <= maxY; y++) {
    let mid = 0;
    for (let x = cx - midHalf; x <= cx + midHalf; x++) {
      const i = (y * width + x) * channels;
      if (buf[i + 3] > 128 && lum(buf[i], buf[i + 1], buf[i + 2]) > 140) mid++;
    }
    if (mid > 12) {
      if (gapStart >= 0 && tipStart < 0 && y - gapStart >= 8) {
        tipStart = y;
        break;
      }
      inMid = true;
      hsEnd = y;
      gapStart = -1;
    } else if (inMid && gapStart < 0) {
      gapStart = y;
    }
  }
  if (gapStart < 0 || tipStart < 0 || hsEnd < 0) {
    throw new Error(`${t.label}: pin tip geometry not found (hs=${hsEnd} gap=${gapStart} tip=${tipStart})`);
  }

  // Cap headsEnd near the tip — never let wordmark letters extend it.
  let headsEnd = hsEnd;
  for (let y = Math.max(hsEnd, tipStart - 10); y <= tipStart + 45 && y < height; y++) {
    let side = 0;
    for (let x = minX; x <= maxX; x++) {
      if (x >= cx - midHalf - 30 && x <= cx + midHalf + 30) continue;
      const i = (y * width + x) * channels;
      if (buf[i + 3] > 128 && lum(buf[i], buf[i + 1], buf[i + 2]) > 140) side++;
    }
    if (side > 15) headsEnd = y;
  }

  const wipeL = cx - Math.floor((maxX - minX) * 0.13);
  const wipeR = cx + Math.floor((maxX - minX) * 0.13);

  // Center column from gap: removes tip between heads + pin body.
  for (let y = gapStart; y < height; y++) {
    for (let x = wipeL; x <= wipeR; x++) {
      paintBg(buf, (y * width + x) * channels, bg);
    }
  }
  // Full width below heads: removes pin stem + wordmark.
  for (let y = headsEnd + 1; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * channels;
      if (buf[i + 3] < 10) continue;
      const d = Math.abs(buf[i] - bg[0]) + Math.abs(buf[i + 1] - bg[1]) + Math.abs(buf[i + 2] - bg[2]);
      if (d > 3) paintBg(buf, i, bg);
    }
  }

  let tipLeft = 0;
  for (let y = gapStart; y <= headsEnd; y++) {
    for (let x = wipeL; x <= wipeR; x++) {
      const i = (y * width + x) * channels;
      const d = Math.abs(buf[i] - bg[0]) + Math.abs(buf[i + 1] - bg[1]) + Math.abs(buf[i + 2] - bg[2]);
      if (d > 3) tipLeft++;
    }
  }
  if (tipLeft) throw new Error(`${t.label}: tip still in gap (${tipLeft}px)`);

  minX = width; maxX = 0; minY = height; maxY = 0; n = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * channels;
      if (buf[i + 3] < 128) continue;
      if (lum(buf[i], buf[i + 1], buf[i + 2]) > 150) {
        n++;
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  const zH = maxY - minY + 1;
  if (zH > height * 0.58 || zH < height * 0.35) {
    throw new Error(`${t.label}: unexpected Z height ${zH}`);
  }

  const gapInExtract = {
    y0: gapStart - minY,
    y1: headsEnd - minY,
    x0: wipeL - minX,
    x1: wipeR - minX,
  };

  minX = Math.max(0, minX - 2);
  minY = Math.max(0, minY - 2);
  maxX = Math.min(width - 1, maxX + 2);
  maxY = Math.min(height - 1, maxY + 2);
  gapInExtract.y0 += 2; gapInExtract.y1 += 2; gapInExtract.x0 += 2; gapInExtract.x1 += 2;

  const sw = maxX - minX + 1;
  const sh = maxY - minY + 1;
  const extracted = Buffer.alloc(sw * sh * channels);
  for (let y = 0; y < sh; y++) {
    for (let x = 0; x < sw; x++) {
      const si = ((minY + y) * width + (minX + x)) * channels;
      const di = (y * sw + x) * channels;
      extracted[di] = buf[si];
      extracted[di + 1] = buf[si + 1];
      extracted[di + 2] = buf[si + 2];
      extracted[di + 3] = buf[si + 3];
    }
  }
  for (let y = Math.max(0, gapInExtract.y0); y <= Math.min(sh - 1, gapInExtract.y1); y++) {
    for (let x = Math.max(0, gapInExtract.x0); x <= Math.min(sw - 1, gapInExtract.x1); x++) {
      paintBg(extracted, (y * sw + x) * channels, bg);
    }
  }

  const targetH = Math.round(height * FILL);
  const targetW = Math.round(sw * (targetH / sh));
  const scaleY = targetH / sh;
  const scaleX = targetW / sw;
  const scaled = await sharp(extracted, { raw: { width: sw, height: sh, channels } })
    .resize(targetW, targetH, { kernel: sharp.kernel.lanczos3 })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const sd = Buffer.from(scaled.data);
  const sc = scaled.info.channels;
  const gY0 = Math.floor(gapInExtract.y0 * scaleY);
  const gY1 = Math.ceil(gapInExtract.y1 * scaleY);
  const gX0 = Math.floor(gapInExtract.x0 * scaleX);
  const gX1 = Math.ceil(gapInExtract.x1 * scaleX);
  // Re-paint after Lanczos so tip AA cannot bleed back.
  for (let y = Math.max(0, gY0); y <= Math.min(targetH - 1, gY1); y++) {
    for (let x = Math.max(0, gX0); x <= Math.min(targetW - 1, gX1); x++) {
      paintBg(sd, (y * targetW + x) * sc, bg);
    }
  }

  const out = Buffer.alloc(width * height * channels);
  for (let i = 0; i < out.length; i += channels) {
    out[i] = bg[0]; out[i + 1] = bg[1]; out[i + 2] = bg[2]; out[i + 3] = 255;
  }
  const ox = Math.round((width - targetW) / 2);
  const oy = Math.round((height - targetH) / 2);
  for (let y = 0; y < targetH; y++) {
    for (let x = 0; x < targetW; x++) {
      const si = (y * targetW + x) * sc;
      const dx = ox + x, dy = oy + y;
      if (dx < 0 || dy < 0 || dx >= width || dy >= height) continue;
      const di = (dy * width + dx) * channels;
      const d = Math.abs(sd[si] - bg[0]) + Math.abs(sd[si + 1] - bg[1]) + Math.abs(sd[si + 2] - bg[2]);
      if (d > 12) {
        out[di] = sd[si]; out[di + 1] = sd[si + 1]; out[di + 2] = sd[si + 2]; out[di + 3] = 255;
      }
    }
  }

  const cY0 = oy + gY0, cY1 = oy + gY1, cX0 = ox + gX0, cX1 = ox + gX1;
  for (let y = Math.max(0, cY0); y <= Math.min(height - 1, cY1); y++) {
    for (let x = Math.max(0, cX0); x <= Math.min(width - 1, cX1); x++) {
      paintBg(out, (y * width + x) * channels, bg);
    }
  }

  if (t.circular) {
    const r = width / 2, cx0 = width / 2, cy0 = height / 2;
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if ((x + 0.5 - cx0) ** 2 + (y + 0.5 - cy0) ** 2 > r * r) {
          const i = (y * width + x) * channels;
          out[i] = 0; out[i + 1] = 0; out[i + 2] = 0; out[i + 3] = 0;
        }
      }
    }
  }

  const png = await sharp(out, { raw: { width, height, channels } }).png().toBuffer();

  const v = await sharp(png).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  let tipPx = 0;
  for (let y = Math.max(0, cY0); y <= Math.min(height - 1, cY1); y++) {
    for (let x = Math.max(0, cX0); x <= Math.min(width - 1, cX1); x++) {
      const i = (y * width + x) * v.info.channels;
      if (v.data[i + 3] < 128) continue;
      const d = Math.abs(v.data[i] - bg[0]) + Math.abs(v.data[i + 1] - bg[1]) + Math.abs(v.data[i + 2] - bg[2]);
      if (d > 8) tipPx++;
    }
  }
  if (tipPx > 0) throw new Error(`${t.label}: verify failed tipPx=${tipPx}`);

  for (const o of t.outs) {
    mkdirSync(dirname(o), { recursive: true });
    writeFileSync(o, png);
    console.log('wrote', o);
  }
  console.log(t.label, { hsEnd, gapStart, tipStart, headsEnd, zH, fill: FILL, tipPx: 0 });
}

for (const t of TARGETS) await rebuild(t);
console.log('symbol-only rebuild OK');
