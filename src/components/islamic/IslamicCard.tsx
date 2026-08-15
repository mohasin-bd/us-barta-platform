'use client';

import Link from 'next/link';
import { Moon } from 'lucide-react';
import { getLocalizedText } from '@/lib/i18n/bilingual';
import { useLanguage } from '@/hooks/use-language';
import type { ContentItem } from '@/types/content';

interface IslamicCardProps {
  item: ContentItem;
}

export function IslamicCard({ item }: IslamicCardProps) {
  const language = useLanguage();

  return (
    <Link
      href={`/islamic-life/${item.slug}`}
      className="block bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-green-100 text-[#388e3c] flex items-center justify-center flex-shrink-0">
          <Moon className="h-5 w-5" />
        </div>
        <div className="flex-1 min-w-0 space-y-1.5">
          <span className="inline-flex items-center rounded-full bg-[#388e3c]/15 px-2.5 py-0.5 text-[10px] font-medium text-[#388e3c]">
            {language === 'bn' ? 'ইসলামিক লাইফ' : 'Islamic Life'}
          </span>
          <h3 className="font-semibold text-[16px] leading-snug text-gray-900 line-clamp-2">
            {getLocalizedText(item.title, language)}
          </h3>
          {item.summary && (
            <p className="text-sm text-[#424242] line-clamp-2">
              {getLocalizedText(item.summary, language)}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
