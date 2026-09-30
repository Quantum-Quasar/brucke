"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4">
      <div className="max-w-md w-full p-6 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--error-color)]/30 text-center space-y-5 shadow-2xl">
        <div className="w-12 h-12 rounded bg-[var(--error-color)]/10 text-[var(--error-color)] flex items-center justify-center mx-auto border border-[var(--error-color)]/20">
          <AlertTriangle className="w-6 h-6" />
        </div>

        <div className="space-y-1 font-mono">
          <h2 className="text-lg font-bold text-[var(--text-color)]">something went wrong</h2>
          <p className="text-xs text-[var(--sub-color)]">
            an unexpected error occurred while rendering this page.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 pt-2 font-mono">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[var(--main-color)] hover:opacity-90 text-[var(--bg-color)] font-bold text-xs transition cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>try again</span>
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[var(--bg-color)] hover:border-[var(--sub-color)] border border-[var(--sub-color)]/20 text-[var(--text-color)] text-xs font-semibold transition"
          >
            <Home className="w-3.5 h-3.5" />
            <span>dashboard</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
