// ============================================================
// US BARTA — Zustand Stores (Anonymous-First)
// No fake auth. Future: Anonymous → Registered → Personalized
// ============================================================

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Language, GeoLocation, ContentCategory } from '@/types/content';

// --- Language Store ---

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'bn' as Language,
      setLanguage: (language) => set({ language }),
      toggleLanguage: () =>
        set((s) => ({ language: s.language === 'bn' ? 'en' : 'bn' })),
    }),
    { name: 'usbarta-language' }
  )
);

// --- Preferences Store ---

interface PreferencesState {
  location: GeoLocation;
  setLocation: (location: GeoLocation) => void;
  followedCategories: ContentCategory[];
  toggleCategory: (category: ContentCategory) => void;
  savedItems: string[];
  toggleSavedItem: (id: string) => void;
}

export const usePreferencesStore = create<PreferencesState>()(
  persist(
    (set) => ({
      location: { state: 'NY', city: 'Jackson Heights', county: 'Queens', zipCode: '11372' },
      setLocation: (location) => set({ location }),
      followedCategories: [],
      toggleCategory: (category) =>
        set((s) => ({
          followedCategories: s.followedCategories.includes(category)
            ? s.followedCategories.filter((c) => c !== category)
            : [...s.followedCategories, category],
        })),
      savedItems: [],
      toggleSavedItem: (id) =>
        set((s) => ({
          savedItems: s.savedItems.includes(id)
            ? s.savedItems.filter((i) => i !== id)
            : [...s.savedItems, id],
        })),
    }),
    { name: 'usbarta-preferences' }
  )
);
