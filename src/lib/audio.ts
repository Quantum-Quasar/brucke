// ponytail: native browser speech synthesis with zero external dependencies

let cachedVoices: SpeechSynthesisVoice[] = [];
if (typeof window !== "undefined" && "speechSynthesis" in window) {
  try {
    cachedVoices = window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => {
      try {
        cachedVoices = window.speechSynthesis.getVoices();
      } catch {}
    };
  } catch {}
}

const activeUtterances = new Set<SpeechSynthesisUtterance>();

/**
 * Plays target-language pronunciation using the native Web Speech API.
 * Comfortable 0.92x rate for clear phoneme perception.
 */
export function playTargetAudio(text: string, locale = "de-DE"): boolean {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    return false;
  }

  try {
    window.speechSynthesis.cancel();
    activeUtterances.clear();
    const cleanText = text.replace(/^[\[\(].*?[\]\)]\s*/, "").trim();
    if (!cleanText) return false;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = locale;
    utterance.rate = 0.92;
    utterance.pitch = 1.0;

    const voices = cachedVoices.length > 0 ? cachedVoices : window.speechSynthesis.getVoices();
    const voice = voices.find((v) => v.lang.startsWith(locale.slice(0, 2)));
    if (voice) {
      utterance.voice = voice;
    }

    activeUtterances.add(utterance);
    utterance.onend = () => {
      activeUtterances.delete(utterance);
    };
    utterance.onerror = () => {
      activeUtterances.delete(utterance);
    };

    window.speechSynthesis.speak(utterance);
    return true;
  } catch {
    return false;
  }
}
