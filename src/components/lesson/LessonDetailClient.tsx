"use client";

import React, { useEffect, useState } from "react";
import { LessonReader } from "@/components/lesson/LessonReader";
import { getLanguageContent } from "@/data/language-content";
import { useAppStore } from "@/lib/store";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function LessonDetailClient({ lessonId }: { lessonId: number }) {
  const activeLanguageId = useAppStore((s) => s.activeLanguageId);
  // Lesson id spaces overlap across languages by design — the active language
  // decides which course's lesson an id resolves to. German until mount so the
  // first client render matches the server HTML.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const lessons = getLanguageContent(mounted ? activeLanguageId : "de").lessons;
  const lesson = lessons.find((l) => l.id === lessonId);

  if (!lesson) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-4 font-mono">
        <h2 className="text-2xl font-bold text-[var(--text-color)]">Lesson {lessonId} Coming Soon</h2>
        <p className="text-[var(--sub-color)] text-sm">
          This lesson isn't part of the authored curriculum yet — the trail map currently has {lessons.length}{" "}
          interactive lessons.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[var(--main-color)] hover:opacity-90 text-[var(--bg-color)] font-medium text-sm transition"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Trail Index
        </Link>
      </div>
    );
  }

  // Remount per lesson (and per language): the lesson route keeps this client
  // component mounted across /trail/N → /trail/N+1 navigations, so without a
  // key LessonReader would carry the previous lesson's segment/practice state
  // into the next one and persist it.
  return <LessonReader key={`${activeLanguageId}-${lesson.id}`} lesson={lesson} />;
}
