'use client';

import Link from 'next/link';
import { ImageIcon } from 'lucide-react';
import { getLocalizedText } from '@/lib/i18n/bilingual';
import { useLanguage } from '@/hooks/use-language';
import { CategoryBadge } from '@/components/common/CategoryBadge';
import type { EducationItem } from '@/types/content';
import { t } from '@/lib/i18n/translations';

const EDUCATION_LEVELS: Record<string, { bn: string; en: string }> = {
  k12: { bn: 'K-12', en: 'K-12' },
  'community-college': { bn: 'কমিউনিটি কলেজ', en: 'Community College' },
  university: { bn: 'ইউনিভার্সিটি', en: 'University' },
  vocational: { bn: 'ভোকেশনাল', en: 'Vocational' },
};

interface EducationCardProps {
  item: EducationItem;
}

export function EducationCard({ item }: EducationCardProps) {
  const language = useLanguage();

  return (
    <Link
      href={`/education/${item.slug}`}
      className="block bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
    >
      {item.image ? (
        <div className="aspect-video relative">
          <img src={item.image} alt={getLocalizedText(item.title, language)} className="w-full h-full object-cover rounded-t-lg" />
        </div>
      ) : (
        <div className="aspect-video bg-gray-100 flex items-center justify-center">
          <ImageIcon className="h-8 w-8 text-gray-300" />
        </div>
      )}
      <div className="p-4 space-y-2">
        <div className="flex items-center gap-2 flex-wrap">
          <CategoryBadge category="education" size="sm" />
          {item.educationLevel && (
            <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-600">
              {getLocalizedText(EDUCATION_LEVELS[item.educationLevel] as { bn: string; en: string }, language)}
            </span>
          )}
          {item.isFAFSARelevant && (
            <span className="inline-flex items-center rounded-full bg-[#d32f2f]/10 px-2 py-0.5 text-[10px] font-semibold text-[#d32f2f]">
              FAFSA
            </span>
          )}
        </div>
        <h3 className="font-semibold text-[16px] leading-snug text-gray-900 line-clamp-2">
          {getLocalizedText(item.title, language)}
        </h3>
        {item.summary && (
          <p className="text-sm text-[#424242] line-clamp-2">
            {getLocalizedText(item.summary, language)}
          </p>
        )}
      </div>
    </Link>
  );
}
