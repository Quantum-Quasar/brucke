"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Compass, RotateCcw, Sparkles, HelpCircle } from "lucide-react";
import { useAppStore } from "@/lib/store";
import compendium from "@/data/compendium.json";

const totalWords = (compendium as unknown as { wordList: unknown[] }).wordList.length;

export const TopNav: React.FC = () => {
  const pathname = usePathname();
  const wordMastery = useAppStore((s) => s.wordMastery);
  const openOnboarding = useAppStore((s) => s.openOnboarding);

  const masteredCount = Object.values(wordMastery).filter((m) => m === "mastered").length;
  const encounteredCount = Object.values(wordMastery).filter((m) => m === "encountered").length;

  const navLinks = [
    { href: "/trail", label: "Trail", icon: BookOpen },
    { href: "/atlas", label: "Atlas", icon: Compass },
    { href: "/review", label: "Review", icon: RotateCcw },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#12131C]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo & Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold font-mono text-lg group-hover:scale-105 transition">
            Bü
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-bold text-slate-100 tracking-tight text-base">
              <span>Brücke</span>
              <span className="text-xs text-amber-400/90 font-mono font-normal">MVP</span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono hidden sm:block">German Cognate Engine</p>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition ${
                  isActive
                    ? "bg-white/10 text-amber-300 font-semibold border border-white/10"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-amber-400" : "text-slate-500"}`} />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right side: Stats & Guide */}
        <div className="flex items-center gap-3">
          {/* Stats pill */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-emerald-400 font-bold">{masteredCount}✓</span>
            <span className="text-amber-400 font-bold">{encounteredCount}●</span>
            <span className="text-slate-500">/ {totalWords}</span>
          </div>

          {/* Tour / Guide button */}
          <button
            type="button"
            onClick={openOnboarding}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-400 hover:text-amber-300 transition cursor-pointer"
            title="App Tour & Linguistic Philosophy"
          >
            <HelpCircle className="w-3.5 h-3.5 text-amber-400/80" />
            <span className="hidden sm:inline">Tour</span>
          </button>
        </div>
      </div>
    </header>
  );
};
