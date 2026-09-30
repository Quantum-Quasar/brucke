import { ConstellationDetailClient } from "@/components/atlas/ConstellationDetailClient";
import { compendium as data } from "@/data/compendium";

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
