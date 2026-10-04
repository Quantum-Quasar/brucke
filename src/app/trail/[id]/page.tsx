import { LessonDetailClient } from "@/components/lesson/LessonDetailClient";
import { LESSONS } from "@/data/lessons";
import { notFound } from "next/navigation";

// 100% SSG: only ids emitted by generateStaticParams may render; anything
// else 404s at the router level instead of hitting a dynamic server render
export const dynamicParams = false;

export function generateStaticParams() {
  return LESSONS.map((l) => ({ id: l.id.toString() }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function LessonDetailPage({ params }: PageProps) {
  const { id } = await params;
  const lessonId = Number.parseInt(id, 10);
  // numeric but unauthored ids still fall through to LessonDetailClient's
  // "coming soon" outline; non-numeric junk is a 404, not lesson 1
  if (Number.isNaN(lessonId)) notFound();
  return <LessonDetailClient lessonId={lessonId} />;
}
