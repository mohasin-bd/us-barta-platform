// ============================================================
// US BARTA — useTranslation Hook
// Provides typed translation access for any namespace
// ============================================================

'use client';

import { t, type TranslationNamespace } from '@/lib/i18n/translations';
import { useLanguageStore } from '@/store/preferences';

/**
 * Get a translator function for a specific namespace.
 * Usage: const translate = useTranslation('nav');
 *         translate('home') // bn: 'হোম' | en: 'Home'
 */
export function useTranslation<N extends TranslationNamespace>(namespace: N) {
  const { language } = useLanguageStore();

  return (key: string): string => {
    const section = t[namespace] as Record<string, unknown>;
    const entry = section[key];

    if (!entry) return key;

    // If it's a BilingualText { bn, en }
    if (typeof entry === 'object' && entry !== null && 'bn' in entry && 'en' in entry) {
      return (entry as { bn: string; en: string })[language] || (entry as { bn: string; en: string }).bn || key;
    }

    // If it's a plain string
    if (typeof entry === 'string') {
      return entry;
    }

    return key;
  };
}

/** Shorthand hook to get current language */
export function useLanguage() {
  return useLanguageStore((s) => s.language);
}
