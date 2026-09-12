"use client";

import React, { useEffect } from "react";
import "./globals.css";
import { TopNav } from "@/components/navigation/TopNav";
import { BottomNav } from "@/components/navigation/BottomNav";
import { WordCardDrawer } from "@/components/common/WordCardDrawer";
import { OnboardingModal } from "@/components/common/OnboardingModal";
import { useAppStore, STORAGE_KEY } from "@/lib/store";

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
    <html lang="en" className="dark">
      <head>
        <title>Brücke — Etymological German Learning Platform</title>
        <meta
          name="description"
          content="Hundreds of German words you already know without realizing it. Learn German smarter with historical consonant shifts."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen bg-[#12131C] text-[#F0EDEA] flex flex-col antialiased selection:bg-amber-500/30 selection:text-amber-200">
        <TopNav />

        {/* Main Content Viewport */}
        <main className="flex-1 pb-20 md:pb-8">{children}</main>

        <BottomNav />

        {/* Global Cross-Layer Drawers & Modals */}
        <WordCardDrawer />
        <OnboardingModal />
      </body>
    </html>
  );
}
