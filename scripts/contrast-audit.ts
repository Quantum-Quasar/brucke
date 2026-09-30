// One-off contrast audit + fixer for src/data/themes.ts
// - measures WCAG contrast for the pairs the app actually renders
// - fixes ONLY failing colors, preserving hue/saturation (lightness nudges)
// - rewrites POPULAR_THEMES to the best-contrast themes
import fs from "fs";
import path from "path";
import { THEMES } from "../src/data/themes";

const FILE = path.resolve(process.cwd(), "src/data/themes.ts");

// ---------- color math ----------
const clamp = (v: number, a: number, b: number) => Math.min(Math.max(v, a), b);

function hexToRgb(hex: string): [number, number, number] {
  let h = hex.replace("#", "").trim();
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  else if (h.length === 4) h = h.substring(0, 3).split("").map((c) => c + c).join("");
  else if (h.length >= 8) h = h.substring(0, 6);
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
}
const toHex = (r: number, g: number, b: number) =>
  "#" + [r, g, b].map((v) => clamp(Math.round(v), 0, 255).toString(16).padStart(2, "0")).join("");

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0));
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h /= 6;
  }
  return [h * 360, s, l];
}
function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  h = ((h % 360) + 360) % 360 / 360;
  if (s === 0) { const v = l * 255; return [v, v, v]; }
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const hue = (t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  return [hue(h + 1 / 3) * 255, hue(h) * 255, hue(h - 1 / 3) * 255];
}
const lum = ([r, g, b]: [number, number, number]) => {
  const f = (v: number) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
};
export const contrast = (a: string, b: string) => {
  const la = lum(hexToRgb(a)), lb = lum(hexToRgb(b));
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
};

/** keep hue+sat, drift lightness as little as possible from the original until
 *  every constraint reaches the target (walk both directions, pick the closer hit) */
function optimizeLightness(hex: string, others: string[], target: number): string {
  const [r, g, b] = hexToRgb(hex);
  const [h, s, l0] = rgbToHsl(r, g, b);
  const scoreAt = (l: number) => {
    const [nr, ng, nb] = hslToRgb(h, s, l);
    return Math.min(...others.map((o) => contrast(toHex(nr, ng, nb), o)));
  };
  if (scoreAt(l0) >= target) return hex;
  let up: number | null = null, down: number | null = null;
  for (let i = 1; i <= 240; i++) {
    if (up === null) {
      const lu = Math.min(1, l0 + i * 0.005);
      if (scoreAt(lu) >= target || lu === 1) up = lu;
    }
    if (down === null) {
      const ld = Math.max(0, l0 - i * 0.005);
      if (scoreAt(ld) >= target || ld === 0) down = ld;
    }
    if (up !== null && down !== null) break;
  }
  const reached = [up, down].filter((v): v is number => v !== null && scoreAt(v) >= target);
  const pool = reached.length ? reached : [up, down].filter((v): v is number => v !== null);
  if (!pool.length) return hex;
  const bestL = reached.length
    ? pool.reduce((a, b) => (Math.abs(b - l0) < Math.abs(a - l0) ? b : a))
    : pool.reduce((a, b) => (scoreAt(b) > scoreAt(a) ? b : a));
  const [nr, ng, nb] = hslToRgb(h, s, bestL);
  return toHex(nr, ng, nb);
}

const reaches = (hex: string, others: string[], target: number) =>
  Math.min(...others.map((o) => contrast(hex, o))) >= target - 1e-9;

const mixHex = (a: string, b: string, t: number): string => {
  const A = hexToRgb(a), B = hexToRgb(b);
  return toHex(A[0] + (B[0] - A[0]) * t, A[1] + (B[1] - A[1]) * t, A[2] + (B[2] - A[2]) * t);
};

// ---------- audit + fix ----------
// pairs the app renders, with WCAG-grounded floors:
//   text on bg / subAlt (reading)               — 4.5
//   sub on bg / subAlt (small muted labels)     — 4.2
//   main accents on bg / subAlt (icons, borders,
//   buttons carrying bg-color text)             — fix only when below 2.5, solve to 3.0
type Check = { key: "text" | "sub" | "main"; others: ("bg" | "subAlt")[]; trigger: number; target: number };
const CHECKS: Check[] = [
  { key: "text", others: ["bg", "subAlt"], trigger: 4.5, target: 4.5 },
  { key: "sub", others: ["bg", "subAlt"], trigger: 4.2, target: 4.2 },
  { key: "main", others: ["bg", "subAlt"], trigger: 2.5, target: 3.0 },
];

const changedThemes: Record<string, Record<string, string>> = {};
const report: Array<{ id: string; score: number; accent: number; textMin: number; subMin: number; changed: boolean }> = [];

// tron_orange ships a light subAlt (#9c9191) on a near-black bg — no single sub/text
// color can be 4.2:1 from both surfaces. Normalize its panel to the dark side so the
// theme's orange identity survives the contrast pass.
const SUBALT_FIXES: Record<string, string> = { tron_orange: "#15211f" };

for (const [id, theme] of Object.entries(THEMES)) {
  const fixed: Record<string, string> = { ...theme, ...SUBALT_FIXES[id] ? { subAlt: SUBALT_FIXES[id] } : {} };
  let touched = Boolean(SUBALT_FIXES[id]);
  for (const check of CHECKS) {
    const value = fixed[check.key];
    let others = check.others.map((o) => fixed[o]);
    if (reaches(value, others, check.trigger)) continue;
    let optimized = optimizeLightness(value, others, check.target);
    // unsolvable pair (bg ≈ subAlt): open the window by blending subAlt toward bg
    if (!reaches(optimized, others, check.target)) {
      for (const t of [0.3, 0.6, 0.85]) {
        const newSubAlt = mixHex(fixed.subAlt, fixed.bg, t);
        others = check.others.map((o) => (o === "subAlt" ? newSubAlt : fixed.bg));
        const retry = optimizeLightness(value, others, check.target);
        if (reaches(retry, others, check.target)) {
          optimized = retry;
          fixed.subAlt = newSubAlt;
          touched = true;
          break;
        }
      }
    }
    if (optimized.toLowerCase() !== value.toLowerCase()) {
      fixed[check.key] = optimized;
      if (check.key === "main" && theme.caret === theme.main) fixed.caret = optimized;
      touched = true;
    }
  }
  // post-fix score: per-pair minimums the app relies on
  const score = Math.min(
    contrast(fixed.text, fixed.bg), contrast(fixed.text, fixed.subAlt),
    contrast(fixed.sub, fixed.bg), contrast(fixed.sub, fixed.subAlt),
  );
  const accent = Math.min(contrast(fixed.main, fixed.bg), contrast(fixed.main, fixed.subAlt));
  const textMin = Math.min(contrast(fixed.text, fixed.bg), contrast(fixed.text, fixed.subAlt));
  const subMin = Math.min(contrast(fixed.sub, fixed.bg), contrast(fixed.sub, fixed.subAlt));
  report.push({ id, score, accent, textMin, subMin, changed: touched });
  if (touched) changedThemes[id] = fixed;
}

// ---------- write back into themes.ts ----------
let src = fs.readFileSync(FILE, "utf8");
const start = src.indexOf("export const THEMES");
const end = src.indexOf("export function isColorDark");
if (start < 0 || end < 0) throw new Error("markers not found");
const head = src.slice(0, start);
const tail = src.slice(end);
let body = src.slice(start, end);

for (const [id, fixed] of Object.entries(changedThemes)) {
  const blockStart = body.indexOf(`  "${id}": {`);
  if (blockStart < 0) throw new Error(`theme block not found: ${id}`);
  const blockEnd = body.indexOf("},", blockStart);
  let block = body.slice(blockStart, blockEnd);
  for (const key of ["bg", "main", "caret", "sub", "subAlt", "text"] as const) {
    const original = THEMES[id][key];
    if (fixed[key] !== original) {
      const re = new RegExp(`("${key}": ")${original.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(")`);
      if (!re.test(block)) throw new Error(`${id}: value for ${key} not found in block`);
      block = block.replace(re, `$1${fixed[key]}$2`);
    }
  }
  body = body.slice(0, blockStart) + block + body.slice(blockEnd);
}
fs.writeFileSync(FILE, head + body + tail, "utf8");

// ---------- suggested list: recognizable themes that pass, topped up by best contrast ----------
const ranked = report.slice().sort((a, b) => b.score - a.score);
// a theme may be suggested when its reading pairs clear the fix floor and accents stay visible
const passing = new Set(report.filter((t) => t.score >= 4.2 && t.accent >= 2.5).map((t) => t.id));
const currentPopular = ["serika_dark", "carbon", "nord", "dracula", "gruvbox_dark", "catppuccin", "tokyo_night", "monokai", "matrix", "botanical", "milkshake", "8008", "solarized_dark", "cyberpunk", "retro", "taro", "modern_ink", "bingsu", "cafe", "soaring_stars", "arch", "moonlight", "shadow", "laser", "alduin"];
const suggested = currentPopular.filter((id) => passing.has(id));
for (const t of ranked) {
  if (suggested.length >= 20) break;
  if (!suggested.includes(t.id) && passing.has(t.id)) suggested.push(t.id);
}

console.log(`=== summary ===`);
console.log(`themes changed: ${Object.keys(changedThemes).length} / ${report.length}`);
const stillWeak = report.filter((t) => t.textMin < 4.5 || t.subMin < 4.2 || t.accent < 2.5);
console.log(`themes still below fix floors: ${stillWeak.length}${stillWeak.length ? " -> " + stillWeak.map((t) => `${t.id}(text ${t.textMin.toFixed(2)}, sub ${t.subMin.toFixed(2)})`).join(", ") : ""}`);
console.log(`=== recognizable themes ===`);
for (const id of ["alduin", "serika_dark", "nord", "dracula", "gruvbox_dark", "catppuccin", "tokyo_night", "9009", "tron_orange"]) {
  const t = report.find((r) => r.id === id);
  if (t) console.log(t.score.toFixed(2), t.accent.toFixed(2), t.changed ? "fixed" : "ok   ", id, passing.has(id) ? "" : "(excluded)");
}
console.log(`=== suggested (${suggested.length}) ===`);
for (const id of suggested) {
  const t = report.find((r) => r.id === id)!;
  console.log(t.score.toFixed(2), t.accent.toFixed(2), t.changed ? "fixed" : "ok   ", id);
}

// ---------- write back: themes object + POPULAR block ----------
const listText = `export const POPULAR_THEMES: string[] = [\n${suggested.map((id) => `  "${id}",`).join("\n")}\n];`;
const popStart = tail.indexOf("export const POPULAR_THEMES: string[] = [");
const popEnd = tail.indexOf("];", popStart) + 2;
if (popStart < 0) throw new Error("POPULAR block not found");
const newTail = tail.slice(0, popStart) + listText + tail.slice(popEnd);
fs.writeFileSync(FILE, head + body + newTail, "utf8");
console.log("file written");
