"use client";

import React from "react";
import { LessonReader } from "@/components/lesson/LessonReader";
import { LESSONS } from "@/data/lessons";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function LessonDetailClient({ lessonId }: { lessonId: number }) {
  const lesson = LESSONS.find((l) => l.id === lessonId);

  if (!lesson) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-4 font-mono">
        <h2 className="text-2xl font-bold text-[var(--text-color)]">Lesson {lessonId} Coming Soon</h2>
        <p className="text-[var(--sub-color)] text-sm">
          This lesson outline is in Phase 2/3 of the curriculum. The first 10 foundational lessons are currently fully interactive!
        </p>
        <Link
          href="/trail"
          className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[var(--main-color)] hover:opacity-90 text-[var(--bg-color)] font-medium text-sm transition"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Trail Index
        </Link>
      </div>
    );
  }

  return <LessonReader lesson={lesson} />;
}
