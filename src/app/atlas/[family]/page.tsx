import { ConstellationDetailClient } from "@/components/atlas/ConstellationDetailClient";
import { compendium as data } from "@/data/compendium";
import { getAtlasFamilies } from "@/lib/atlas-families";
import { notFound } from "next/navigation";

// 100% SSG: only the authored shift families plus the unshifted layer may
// render; anything else 404s at the router level instead of hitting a
// dynamic server render
export const dynamicParams = false;

export function generateStaticParams() {
  return getAtlasFamilies(data).map((family) => ({ family: family.id }));
}

interface PageProps {
  params: Promise<{ family: string }>;
}

export default async function ConstellationDetailPage({ params }: PageProps) {
  const { family } = await params;
  if (!getAtlasFamilies(data).some((f) => f.id === family)) notFound();
  return <ConstellationDetailClient familyId={family} />;
}
