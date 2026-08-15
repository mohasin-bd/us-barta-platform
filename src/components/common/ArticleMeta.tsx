'use client';

import { getLocalizedText } from '@/lib/i18n/bilingual';
import { useLanguage } from '@/hooks/use-language';
import { t } from '@/lib/i18n/translations';

interface ArticleMetaProps {
  date: string;
  views?: number;
  readTime?: number;
}

function formatViews(views: number, language: 'bn' | 'en'): string {
  if (views >= 1000) {
    const val = (views / 1000).toFixed(1);
    return language === 'bn' ? `${val}K` : `${val}K`;
  }
  return language === 'bn' ? String(views) : String(views);
}

function toBengaliNum(num: number | string): string {
  const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return String(num).replace(/[0-9]/g, (d) => bengaliDigits[parseInt(d)]);
}

export function ArticleMeta({ date, views, readTime }: ArticleMetaProps) {
  const language = useLanguage();
  const viewsLabel = getLocalizedText(t.common.views, language);
  const dateStr = new Date(date).toLocaleDateString(language === 'bn' ? 'bn-BD' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const parts = [dateStr];

  if (views !== undefined) {
    const formattedViews = language === 'bn' ? toBengaliNum(formatViews(views, language)) : formatViews(views, language);
    parts.push(`${formattedViews} ${viewsLabel}`);
  }

  if (readTime !== undefined) {
    const mins = language === 'bn' ? toBengaliNum(readTime) : String(readTime);
    parts.push(language === 'bn' ? `${mins} মিনিট পড়া` : `${mins} min read`);
  }

  return (
    <div className="flex items-center gap-1.5 text-[#757575] text-xs">
      {parts.map((part, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <span className="text-[#bdbdbd]">•</span>}
          {part}
        </span>
      ))}
    </div>
  );
}
