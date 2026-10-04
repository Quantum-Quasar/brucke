import { ConstellationDetailClient } from "@/components/atlas/ConstellationDetailClient";
import { compendium as data } from "@/data/compendium";
import { notFound } from "next/navigation";

// 100% SSG: only the 9 authored shift families may render; anything else
// 404s at the router level instead of hitting a dynamic server render
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(data.shifts).map((family) => ({ family }));
}

interface PageProps {
  params: Promise<{ family: string }>;
}

export default async function ConstellationDetailPage({ params }: PageProps) {
  const { family } = await params;
  if (!data.shifts[family]) notFound();
  return <ConstellationDetailClient familyId={family} />;
}
