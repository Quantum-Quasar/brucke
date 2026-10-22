import React from "react";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AppShell } from "@/components/common/AppShell";
import { THEME_VARS_CACHE_KEY } from "@/data/themes";
import { STORAGE_KEY, STORAGE_COOKIE_KEY } from "@/lib/storage-keys";

export const metadata: Metadata = {
  title: "Brücke — Cognate Engine",
  description:
    "Learn vocabulary across languages through historical sound shifts and etymological cognates. Fast, distraction-free, and keyboard-driven.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="darkreader-lock" />
        <meta name="color-scheme" content="dark light" />
        {/* Runs before first paint: restores theme/font/contrast from storage */}
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
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
