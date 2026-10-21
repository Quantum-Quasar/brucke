import { ConstellationDetailClient } from "@/components/atlas/ConstellationDetailClient";
import { compendium as data } from "@/data/compendium";
import { frenchCompendium } from "@/data/french/compendium-fr";
import { spanishCompendium } from "@/data/spanish/compendium-es";
import { getAtlasFamilies } from "@/lib/atlas-families";
import { notFound } from "next/navigation";

// 100% SSG: only the authored shift families plus the unshifted layer may
// render; anything else 404s at the router level instead of hitting a
// dynamic server render
export const dynamicParams = false;

// Union across languages: each compendium owns its family ids and the client
// resolves the id against the active language's data, so one static page per
// family id serves every course.
export function generateStaticParams() {
  const ids = new Set<string>();
  for (const family of [
    ...getAtlasFamilies(data),
    ...getAtlasFamilies(frenchCompendium),
    ...getAtlasFamilies(spanishCompendium),
  ]) {
    ids.add(family.id);
  }
  return [...ids].map((family) => ({ family }));
}

interface PageProps {
  params: Promise<{ family: string }>;
}

export default async function ConstellationDetailPage({ params }: PageProps) {
  const { family } = await params;
  const known =
    getAtlasFamilies(data).some((f) => f.id === family) ||
    getAtlasFamilies(frenchCompendium).some((f) => f.id === family) ||
    getAtlasFamilies(spanishCompendium).some((f) => f.id === family);
  if (!known) notFound();
  return <ConstellationDetailClient familyId={family} />;
}
