import { LessonDetailClient } from "@/components/lesson/LessonDetailClient";
import { LESSONS } from "@/data/lessons";
import { FR_LESSONS } from "@/data/french/lessons-fr";
import { ES_LESSONS } from "@/data/spanish/lessons-es";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// 100% SSG: only ids emitted by generateStaticParams may render; anything
// else 404s at the router level instead of hitting a dynamic server render
export const dynamicParams = false;

export function generateStaticParams() {
  // Union of every language's authored lesson ids. Id spaces overlap across
  // languages by design (progress is language-scoped), so dedupe.
  const ids = new Set<string>();
  for (const lesson of [...LESSONS, ...FR_LESSONS, ...ES_LESSONS]) {
    ids.add(lesson.id.toString());
  }
  return [...ids].map((id) => ({ id }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const lessonId = Number.parseInt(id, 10);
  const lesson = [...LESSONS, ...FR_LESSONS, ...ES_LESSONS].find((l) => l.id === lessonId);
  if (!lesson) return { title: `Lesson ${id} — Brücke` };
  return {
    title: `${lesson.title} — Brücke`,
    description: lesson.subtitle,
  };
}

export default async function LessonDetailPage({ params }: PageProps) {
  const { id } = await params;
  const lessonId = Number.parseInt(id, 10);
  // numeric but unauthored ids still fall through to LessonDetailClient's
  // "coming soon" outline; non-numeric junk is a 404, not lesson 1
  if (Number.isNaN(lessonId)) notFound();
  return <LessonDetailClient lessonId={lessonId} />;
}
