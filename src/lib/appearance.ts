"use client";

import type { CustomizationSettings } from "@/data/settings";

export function applyAppearanceSettings(settings: CustomizationSettings) {
  if (typeof document === "undefined" || !document?.documentElement) return;

  const root = document.documentElement;
  if (settings.increasedContrast) {
    root.setAttribute("data-contrast", "increased");
  } else {
    root.removeAttribute("data-contrast");
  }
}
