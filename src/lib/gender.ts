// ponytail: centralized, high-contrast gender styling and linguistic metadata

import type { Gender } from "./types";

export interface GenderInfo {
  gender: Gender;
  label: string;
  article: string;
  colorName: string;
  badgeClass: string;
  borderClass: string;
  textClass: string;
  bgClass: string;
  dotColor: string;
}

export function getGenderInfo(gender: Gender | string | null | undefined): GenderInfo | null {
  if (!gender) return null;
  const g = gender.toLowerCase().trim();

  if (g === "der") {
    return {
      gender: "der",
      label: "Masculine",
      article: "der",
      colorName: "Azure Blue",
      badgeClass: "text-blue-200 bg-blue-500/25 border-blue-400/60 shadow-sm shadow-blue-500/20",
      borderClass: "border-blue-400/60",
      textClass: "text-blue-300",
      bgClass: "bg-blue-500/20",
      dotColor: "#60A5FA",
    };
  }

  if (g === "die") {
    return {
      gender: "die",
      label: "Feminine",
      article: "die",
      colorName: "Vivid Rose",
      badgeClass: "text-rose-200 bg-rose-500/25 border-rose-400/60 shadow-sm shadow-rose-500/20",
      borderClass: "border-rose-400/60",
      textClass: "text-rose-300",
      bgClass: "bg-rose-500/20",
      dotColor: "#FB7185",
    };
  }

  if (g === "das") {
    return {
      gender: "das",
      label: "Neuter",
      article: "das",
      colorName: "Emerald Green",
      badgeClass: "text-emerald-200 bg-emerald-500/25 border-emerald-400/60 shadow-sm shadow-emerald-500/20",
      borderClass: "border-emerald-400/60",
      textClass: "text-emerald-300",
      bgClass: "bg-emerald-500/20",
      dotColor: "#34D399",
    };
  }

  return null;
}
