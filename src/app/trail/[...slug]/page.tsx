import { LessonDetailClient } from "@/components/lesson/LessonDetailClient";
import { getLanguageContent } from "@/data/language-content";
import { LANGUAGES, isValidLanguageId } from "@/data/languages";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const dynamicParams = false;

const AVAILABLE_LANGUAGES = LANGUAGES.filter((language) => language.status === "available");

export function generateStaticParams() {
  const params: Array<{ slug: string[] }> = [];
  const legacyIds = new Set<number>();
  for (const language of AVAILABLE_LANGUAGES) {
    for (const lesson of getLanguageContent(language.id).lessons) {
      legacyIds.add(lesson.id);
      params.push({ slug: [language.id, String(lesson.id)] });
    }
  }
  for (const id of legacyIds) params.push({ slug: [String(id)] });
  return params;
}

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

function resolveLesson(slug: string[]) {
  if (slug.length === 1) {
    const id = Number.parseInt(slug[0], 10);
    if (Number.isNaN(id)) return null;
    return { lessonId: id, languageId: undefined as string | undefined };
  }
  if (slug.length === 2) {
    const [lang, rawId] = slug;
    const id = Number.parseInt(rawId, 10);
    if (!isValidLanguageId(lang) || Number.isNaN(id)) return null;
    return { lessonId: id, languageId: lang };
  }
  return null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resolved = resolveLesson(slug);
  if (!resolved) return { title: `Lesson — Brücke` };
  const languageId = resolved.languageId ?? "de";
  const lesson = getLanguageContent(languageId).lessons.find(
    (entry) => entry.id === resolved.lessonId
  );
  if (!lesson) return { title: `Lesson ${resolved.lessonId} — Brücke` };
  return {
    title: `${lesson.title} — Brücke`,
    description: lesson.subtitle,
  };
}

export default async function LessonPage({ params }: PageProps) {
  const { slug } = await params;
  const resolved = resolveLesson(slug);
  if (!resolved) notFound();
  return (
    <LessonDetailClient
      lessonId={resolved.lessonId}
      languageId={resolved.languageId}
    />
  );
}
