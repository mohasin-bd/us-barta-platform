'use client';

import type { ContentCategory } from '@/types/content';
import { getLocalizedText } from '@/lib/i18n/bilingual';
import { useLanguage } from '@/hooks/use-language';
import { t } from '@/lib/i18n/translations';

type CategoryColorMap = Record<ContentCategory, string>;

const CATEGORY_COLORS: CategoryColorMap = {
  news: 'bg-[#1976d2]',
  immigration: 'bg-[#1976d2]',
  'life-in-america': 'bg-[#1976d2]',
  education: 'bg-[#388e3c]',
  health: 'bg-[#00897b]',
  'jobs-career': 'bg-[#1976d2]',
  'money-business': 'bg-[#388e3c]',
  'islamic-life': 'bg-[#388e3c]',
  community: 'bg-[#f57c00]',
  entertainment: 'bg-[#7b1fa2]',
};

interface CategoryBadgeProps {
  category: ContentCategory;
  size?: 'sm' | 'md';
}

export function CategoryBadge({ category, size = 'md' }: CategoryBadgeProps) {
  const language = useLanguage();
  const catLabel = t.categories[category] as unknown as { bn: string; en: string };
  const label = catLabel ? getLocalizedText(catLabel, language) : category;
  const color = CATEGORY_COLORS[category] || 'bg-gray-500';

  return (
    <span
      className={
        size === 'sm'
          ? `inline-flex items-center rounded-full ${color} px-2 py-0.5 text-[10px] font-medium text-white`
          : `inline-flex items-center rounded-full ${color} px-3 py-1 text-xs font-medium text-white`
      }
    >
      {label}
    </span>
  );
}
