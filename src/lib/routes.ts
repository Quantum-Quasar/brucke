/** Canonical language-scoped lesson URL. */
export function lessonHref(languageId: string, lessonId: number): string {
  return `/trail/${languageId}/${lessonId}`;
}
