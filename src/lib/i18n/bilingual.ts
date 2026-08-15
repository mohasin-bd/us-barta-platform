// ============================================================
// US BARTA — Bilingual Text Helper
// ============================================================

import type { BilingualText, Language } from '@/types/content';

/** Get localized text from a BilingualText object */
export function getLocalizedText(text: BilingualText, language: Language): string {
  return text[language] || text.bn || '';
}

/** Create a BilingualText with the same string for both languages */
export function bilingual(text: string): BilingualText {
  return { bn: text, en: text };
}

/** Create a BilingualText with different Bengali and English strings */
export function bt(bn: string, en: string): BilingualText {
  return { bn, en };
}
