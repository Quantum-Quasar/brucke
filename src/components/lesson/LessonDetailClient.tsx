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
      <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-100">Lesson {lessonId} Coming Soon</h2>
        <p className="text-slate-400 text-sm">
          This lesson outline is in Phase 2/3 of the curriculum. The first 5 foundational lessons are currently fully interactive!
        </p>
        <Link
          href="/trail"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Trail Index
        </Link>
      </div>
    );
  }

  return <LessonReader lesson={lesson} />;
}
