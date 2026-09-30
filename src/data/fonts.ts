// All 43 fonts extracted from Monkeytype
// Supports dynamic font switching and instant preview across the entire application.

export type FontCategory = "all" | "sans" | "mono" | "display";

export interface FontMeta {
  id: string;
  name: string;
  category: "sans" | "mono" | "display";
  family: string;
  systemFont?: boolean;
}

export const DEFAULT_FONT = "Lexend_Deca";

const RAW_FONTS: [string, string, "sans" | "mono" | "display", string?, boolean?][] = [
  // Monospace
  ["Roboto_Mono", "Roboto Mono", "mono"],
  ["JetBrains_Mono", "JetBrains Mono", "mono"],
  ["Fira_Code", "Fira Code", "mono"],
  ["Source_Code_Pro", "Source Code Pro", "mono"],
  ["Inconsolata", "Inconsolata", "mono"],
  ["Cascadia_Mono", "Cascadia Mono", "mono"],
  ["IBM_Plex_Mono", "IBM Plex Mono", "mono"],
  ["Ubuntu_Mono", "Ubuntu Mono", "mono"],
  ["Overpass_Mono", "Overpass Mono", "mono"],
  ["Hack", "Hack", "mono"],
  ["CommitMono", "CommitMono", "mono"],
  ["Mononoki", "Mononoki", "mono"],
  ["Geist_Mono", "Geist Mono", "mono"],
  ["Iosevka", "Iosevka", "mono"],
  ["Proto", "0xProto", "mono"],
  ["Adwaita_Mono", "Adwaita Mono", "mono"],
  ["Courier", "Courier", "mono", "Courier, monospace", true],

  // Sans-Serif
  ["Lexend_Deca", "Lexend Deca", "sans"],
  ["IBM_Plex_Sans", "IBM Plex Sans", "sans"],
  ["Roboto", "Roboto", "sans"],
  ["Montserrat", "Montserrat", "sans"],
  ["Titillium_Web", "Titillium Web", "sans"],
  ["Oxygen", "Oxygen", "sans"],
  ["Nunito", "Nunito", "sans"],
  ["Lato", "Lato", "sans"],
  ["Ubuntu", "Ubuntu", "sans"],
  ["Parkinsans", "Parkinsans", "sans"],
  ["Geist", "Geist", "sans"],
  ["Inter_Tight", "Inter Tight", "sans"],
  ["Space_Grotesk", "Space Grotesk", "sans"],
  ["Atkinson_Hyperlegible", "Atkinson Hyperlegible", "sans"],

  // Display
  ["Comfortaa", "Comfortaa", "display", "'Comfortaa', cursive, sans-serif"],
  ["Coming_Soon", "Coming Soon", "display", "'Coming_Soon', cursive, sans-serif"],
  ["Itim", "Itim", "display", "'Itim', cursive, sans-serif"],
  ["Open_Dyslexic", "OpenDyslexic", "display", "'Open_Dyslexic', sans-serif"],
  ["Lalezar", "Lalezar", "display", "'Lalezar', cursive, sans-serif"],
  ["Boon", "Boon (ไทย)", "display", "'Boon', sans-serif"],
  ["Sarabun", "Sarabun", "display", "'Sarabun', sans-serif"],
  ["Kanit", "Kanit", "display", "'Kanit', sans-serif"],
  ["Noto_Naskh_Arabic", "Noto Naskh Arabic", "display", "'Noto_Naskh_Arabic', serif"],
  ["Noto_Sans_Lao", "Noto Sans Lao (ລາວ)", "display", "'Noto_Sans_Lao', sans-serif"],
  ["Georgia", "Georgia", "display", "Georgia, serif", true],
  ["Comic_Sans_MS", "Comic Sans MS", "display", "'Comic Sans MS', cursive, sans-serif", true],
];

export const FONT_LIST: FontMeta[] = RAW_FONTS.map(([id, name, category, customFamily, systemFont]) => ({
  id,
  name,
  category,
  family: customFamily ?? (category === "mono" ? `'${id}', monospace` : `'${id}', sans-serif`),
  ...(systemFont ? { systemFont: true } : {}),
}));

export const FONTS_BY_ID: Record<string, FontMeta> = Object.fromEntries(
  FONT_LIST.map((f) => [f.id, f])
);
export const FONTS = FONTS_BY_ID;

export type FontFilterTab = "all" | "mono" | "sans" | "display";

/** Single source of truth for font filtering, shared by the selector modal and tests. */
export function filterFonts(query: string, tab: FontFilterTab): FontMeta[] {
  if (query.trim()) {
    const q = query.toLowerCase().trim();
    return FONT_LIST.filter((f) => f.name.toLowerCase().includes(q) || f.id.toLowerCase().includes(q));
  }
  if (tab === "all") return FONT_LIST;
  return FONT_LIST.filter((f) => f.category === tab);
}

export function applyFont(fontId: string): void {
  if (typeof document === "undefined" || !document.documentElement?.style) return;
  const font = FONTS_BY_ID[fontId] || FONTS_BY_ID[DEFAULT_FONT];
  if (!font) return;

  document.documentElement.style.setProperty("--font-app", font.family);
  document.documentElement.setAttribute("data-font", font.id);
}
