"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Compass, RotateCcw, Search } from "lucide-react";

export const BottomNav: React.FC = () => {
  const pathname = usePathname();

  const tabs = [
    { href: "/trail", label: "Trail", icon: BookOpen },
    { href: "/atlas", label: "Atlas", icon: Compass },
    { href: "/review", label: "Review", icon: RotateCcw },
    { href: "/decoder", label: "Decoder", icon: Search },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#141522]/95 backdrop-blur-lg border-t border-white/10 px-2 py-1.5 flex items-center justify-around">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = pathname.startsWith(tab.href);
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`flex flex-col items-center justify-center min-w-[64px] py-1 px-2 rounded-lg text-xs transition ${
              isActive ? "text-amber-400 font-bold" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Icon className={`w-5 h-5 mb-0.5 ${isActive ? "text-amber-400" : "text-slate-500"}`} />
            <span className="text-[11px] font-medium tracking-wide">{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};
