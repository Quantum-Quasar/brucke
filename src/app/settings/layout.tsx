import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings — Brücke",
  description:
    "Change language, themes, fonts, sound, input tolerances, accessibility options, and back up your local Brücke progress.",
};

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
