import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atlas — Brücke",
  description:
    "Explore cognate families, sound shifts, compounds, and false friends across the German, French, and Spanish courses.",
};

export default function AtlasLayout({ children }: { children: React.ReactNode }) {
  return children;
}
