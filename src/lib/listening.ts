// ponytail: listening availability — the guidebook's pause button, made environmental

/** One skip silences every dictation exercise for this long. */
export const LISTENING_SKIP_MS = 15 * 60 * 1000;

/** True while a learner has asked to be left alone (library, train, open office). */
export function isListeningSkipped(until: number | undefined, now = Date.now()): boolean {
  return typeof until === "number" && until > now;
}

/** Milliseconds left in the current listening skip window (0 when not skipped). */
export function listeningSkipRemaining(until: number | undefined, now = Date.now()): number {
  if (!isListeningSkipped(until, now)) return 0;
  return (until as number) - now;
}

/** Human label for the skip banner, e.g. "listening off for 12 min". */
export function listeningSkipLabel(remainingMs: number): string {
  const minutes = Math.max(1, Math.ceil(remainingMs / 60000));
  return `listening off for ${minutes} min`;
}
