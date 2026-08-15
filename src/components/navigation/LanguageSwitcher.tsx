'use client';

import { useLanguageStore } from '@/store/preferences';

export function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguageStore();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-0.5 rounded-full border border-gray-200 px-2.5 py-1 text-xs font-medium text-[#424242] hover:border-[#0f2557] hover:text-[#0f2557] transition-colors"
      aria-label="Toggle language"
    >
      <span className={language === 'bn' ? 'text-[#0f2557] font-bold' : ''}>বাংলা</span>
      <span className="text-gray-300">|</span>
      <span className={language === 'en' ? 'text-[#0f2557] font-bold' : ''}>English</span>
    </button>
  );
}
