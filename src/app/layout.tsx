"use client";

import React, { useState, useEffect } from "react";
import "./globals.css";
import { TopNav } from "@/components/navigation/TopNav";
import { BottomNav } from "@/components/navigation/BottomNav";
import { WordCardDrawer } from "@/components/common/WordCardDrawer";
import { DecoderModal } from "@/components/navigation/DecoderModal";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isDecoderOpen, setIsDecoderOpen] = useState(false);

  // Global hotkey listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsDecoderOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <html lang="en" className="dark">
      <head>
        <title>Brücke — Etymological German Learning Platform</title>
        <meta
          name="description"
          content="Hundreds of German words you already know without realizing it. Learn German smarter with historical consonant shifts."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className="min-h-screen bg-[#12131C] text-[#F0EDEA] flex flex-col antialiased selection:bg-amber-500/30 selection:text-amber-200">
        <TopNav onOpenDecoderModal={() => setIsDecoderOpen(true)} />

        {/* Main Content Viewport */}
        <main className="flex-1 pb-20 md:pb-8">{children}</main>

        <BottomNav />

        {/* Global Cross-Layer Drawers & Modals */}
        <WordCardDrawer />
        <DecoderModal isOpen={isDecoderOpen} onClose={() => setIsDecoderOpen(false)} />
      </body>
    </html>
  );
}
