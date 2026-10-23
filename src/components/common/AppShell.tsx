"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { TopNav } from "@/components/navigation/TopNav";
import { BottomNav } from "@/components/navigation/BottomNav";
import { useAppStore, STORAGE_KEY } from "@/lib/store";

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

/**
 * Client half of the root layout: hydrates persisted progress, keeps other tabs
 * in sync, and renders the navigation chrome plus the lazy global overlays.
 * The Server Component layout owns <html>/<body>, metadata and the pre-paint
 * boot script; this shell is the part that needs browser state.
 */
export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // Lesson routes hide the dock, so they must not reserve dock clearance.
  const isLessonRoute = pathname.startsWith("/trail/");

  // Hydrate local progress from localStorage and cookies on client mount
  useEffect(() => {
    useAppStore.getState().hydrateFromStorage();

    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        useAppStore.getState().hydrateFromStorage({ reread: true });
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <>
      <TopNav />

      {/* Main Content Viewport (bottom padding clears the fixed game-style dock) */}
      <main className={`flex-1 ${isLessonRoute ? "pb-8" : "pb-28"}`}>{children}</main>

      <BottomNav />

      {/* Global Drawers & Modals */}
      <WordCardDrawer />
      <OnboardingModal />
      <ThemeSelectorModal />
      <FontSelectorModal />
    </>
  );
}
