"use client";

import React, { useEffect } from "react";
import "./globals.css";
import dynamic from "next/dynamic";
import { TopNav } from "@/components/navigation/TopNav";
import { BottomNav } from "@/components/navigation/BottomNav";
import { useAppStore, STORAGE_KEY, STORAGE_COOKIE_KEY } from "@/lib/store";
import { THEME_VARS_CACHE_KEY } from "@/data/themes";

// ponytail: code-split idle modals & drawer so root chunk doesn't bundle 253KB compendium or 187 themes
const WordCardDrawer = dynamic(
  () => import("@/components/common/WordCardDrawer").then((m) => m.WordCardDrawer),
  { ssr: false }
);
const OnboardingModal = dynamic(
  () => import("@/components/common/OnboardingModal").then((m) => m.OnboardingModal),
  { ssr: false }
);
const ThemeSelectorModal = dynamic(
  () => import("@/components/common/ThemeSelectorModal").then((m) => m.ThemeSelectorModal),
  { ssr: false }
);
const FontSelectorModal = dynamic(
  () => import("@/components/common/FontSelectorModal").then((m) => m.FontSelectorModal),
  { ssr: false }
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Hydrate local progress from localStorage and cookies on client mount
  useEffect(() => {
    useAppStore.getState().hydrateFromStorage();

    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        useAppStore.getState().hydrateFromStorage();
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Brücke — Cognate Engine</title>
        <meta name="darkreader-lock" />
        <meta name="color-scheme" content="dark light" />
        <meta
          name="description"
          content="Learn vocabulary across languages through historical sound shifts and etymological cognates. Fast, distraction-free, and keyboard-driven."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var raw = localStorage.getItem('${STORAGE_KEY}');
                  var themeId = null;
                  var fontId = null;
                  var increasedContrast = false;
                  if (raw) {
                    var p = JSON.parse(raw);
                    if (p && p.theme) themeId = p.theme;
                    if (p && p.font) fontId = p.font;
                    increasedContrast = Boolean(p && p.settings && p.settings.increasedContrast);
                  }
                  if (!themeId || !fontId) {
                    var m = document.cookie.match(/(?:^|;\\s*)${STORAGE_COOKIE_KEY}=([^;]*)/);
                    if (m) {
                      var cp = JSON.parse(decodeURIComponent(m[1]));
                      if (cp && cp.theme && !themeId) themeId = cp.theme;
                      if (cp && cp.font && !fontId) fontId = cp.font;
                    }
                  }
                  var safePattern = /^[a-zA-Z0-9_-]+$/;
                  if (themeId && safePattern.test(themeId)) {
                    document.documentElement.setAttribute('data-theme', themeId);
                  }
                  if (themeId) {
                    var cached = null;
                    try { cached = JSON.parse(localStorage.getItem('${THEME_VARS_CACHE_KEY}') || 'null'); } catch (e) {}
                    if (cached && cached.vars) {
                      // only re-apply plausibly-safe CSS values (hex/rgb/hsl/named sizes)
                      // — localStorage is writable by any script, so treat it as untrusted
                      var safeValue = /^(#[0-9a-fA-F]{3,8}|rgba?\\([0-9.,%\\s]+\\)|hsla?\\([0-9.,%\\s/deg]+\\)|[a-zA-Z0-9()_\\- ,%.\\/'"]+)$/;
                      for (var k in cached.vars) {
                        if (/^--[a-zA-Z0-9_-]+$/.test(k) && typeof cached.vars[k] === 'string' && safeValue.test(cached.vars[k])) {
                          document.documentElement.style.setProperty(k, cached.vars[k]);
                        }
                      }
                      if (cached.scheme === 'dark' || cached.scheme === 'light') {
                        document.documentElement.classList.add(cached.scheme);
                        document.documentElement.classList.remove(cached.scheme === 'dark' ? 'light' : 'dark');
                        document.documentElement.style.colorScheme = cached.scheme;
                      }
                    }
                  }
                  if (fontId && safePattern.test(fontId)) {
                    document.documentElement.setAttribute('data-font', fontId);
                    document.documentElement.style.setProperty('--font-app', '"' + fontId + '", sans-serif');
                  }
                  if (increasedContrast) {
                    document.documentElement.setAttribute('data-contrast', 'increased');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)] flex flex-col antialiased selection:bg-[var(--main-color)]/30 selection:text-[var(--text-color)] font-sans">
        <TopNav />

        {/* Main Content Viewport (bottom padding clears the fixed game-style dock) */}
        <main className="flex-1 pb-28 md:pb-28">{children}</main>

        <BottomNav />

        {/* Global Drawers & Modals */}
        <WordCardDrawer />
        <OnboardingModal />
        <ThemeSelectorModal />
        <FontSelectorModal />
      </body>
    </html>
  );
}
