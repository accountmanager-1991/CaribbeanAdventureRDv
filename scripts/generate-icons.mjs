/**
 * Regenerates the site icons from src/app/icon.svg.
 *
 *   node scripts/generate-icons.mjs
 *
 * Outputs:
 *   src/app/favicon.ico      16 / 32 / 48 px  (Google wants >= 48)
 *   src/app/apple-icon.png   180 px
 *   public/icons/icon-*.png  192 / 512 px
 *
 * Only needed if the brand mark changes — the generated files are committed.
 */
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const APP = path.join(ROOT, "src/app");

const MARK = fs.readFileSync(path.join(APP, "icon.svg"));

/**
 * At 16px the two waves of the full mark blur into a grey smear. This variant
 * drops to a single thicker wave and a larger sun so the silhouette survives.
 * Kept here rather than in app/ because Next.js treats any app/icon* file as
 * an icon route.
 */
const MARK_16 = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0077b6"/><stop offset="1" stop-color="#005f8a"/>
    </linearGradient>
    <linearGradient id="sun" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffb703"/><stop offset="1" stop-color="#f77f00"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="96" fill="url(#sea)"/>
  <circle cx="256" cy="205" r="108" fill="url(#sun)"/>
  <path d="M60 390c40-34 80-34 120 0s80 34 120 0 80-34 120 0" fill="none"
        stroke="#ffffff" stroke-width="62" stroke-linecap="round"/>
</svg>`);

const render = (svg, size) =>
  sharp(svg, { density: 512 }).resize(size, size).png({ compressionLevel: 9 }).toBuffer();

/** ICO container: 6-byte header, 16 bytes per directory entry, then PNG payloads. */
function buildIco(entries) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2); // type 1 = icon
  header.writeUInt16LE(entries.length, 4);

  let offset = 6 + entries.length * 16;
  const dir = entries.map(({ size, data }) => {
    const e = Buffer.alloc(16);
    e.writeUInt8(size >= 256 ? 0 : size, 0); // 0 means 256
    e.writeUInt8(size >= 256 ? 0 : size, 1);
    e.writeUInt16LE(1, 4); // colour planes
    e.writeUInt16LE(32, 6); // bits per pixel
    e.writeUInt32LE(data.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += data.length;
    return e;
  });

  return Buffer.concat([header, ...dir, ...entries.map((e) => e.data)]);
}

const ico = buildIco([
  { size: 16, data: await render(MARK_16, 16) },
  { size: 32, data: await render(MARK, 32) },
  { size: 48, data: await render(MARK, 48) },
]);
fs.writeFileSync(path.join(APP, "favicon.ico"), ico);
console.log(`favicon.ico       16/32/48  ${ico.length} bytes`);

fs.writeFileSync(path.join(APP, "apple-icon.png"), await render(MARK, 180));
console.log("apple-icon.png    180x180");

fs.mkdirSync(path.join(ROOT, "public/icons"), { recursive: true });
for (const size of [192, 512]) {
  fs.writeFileSync(path.join(ROOT, `public/icons/icon-${size}.png`), await render(MARK, size));
  console.log(`icon-${size}.png`);
}
