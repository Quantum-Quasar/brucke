import { LessonDetailClient } from "@/components/lesson/LessonDetailClient";
import { LESSONS } from "@/data/lessons";

export function generateStaticParams() {
  return LESSONS.map((l) => ({ id: l.id.toString() }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function LessonDetailPage({ params }: PageProps) {
  const { id } = await params;
  const lessonId = parseInt(id || "1", 10);
  return <LessonDetailClient lessonId={lessonId} />;
}
