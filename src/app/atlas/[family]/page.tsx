import { ConstellationDetailClient } from "@/components/atlas/ConstellationDetailClient";
import compendium from "@/data/compendium.json";
import type { CompendiumData } from "@/lib/types";

const data = compendium as unknown as CompendiumData;

export function generateStaticParams() {
  return Object.keys(data.shifts).map((family) => ({ family }));
}

interface PageProps {
  params: Promise<{ family: string }>;
}

export default async function ConstellationDetailPage({ params }: PageProps) {
  const { family } = await params;
  return <ConstellationDetailClient familyId={family} />;
}
