'use client';

import Link from 'next/link';
import { ImageIcon } from 'lucide-react';
import { getLocalizedText } from '@/lib/i18n/bilingual';
import { useLanguage } from '@/hooks/use-language';
import { t } from '@/lib/i18n/translations';
import type { EntertainmentItem, EntertainmentRegion } from '@/types/content';

const REGION_DOT_COLORS: Record<EntertainmentRegion, string> = {
  bangladesh: 'bg-[#388e3c]',
  india: 'bg-[#f57c00]',
  hollywood: 'bg-[#0f2557]',
};

const REGION_TEXT_COLORS: Record<EntertainmentRegion, string> = {
  bangladesh: 'text-[#388e3c]',
  india: 'text-[#f57c00]',
  hollywood: 'text-[#0f2557]',
};

interface EntertainmentCompactCardProps {
  item: EntertainmentItem;
}

export function EntertainmentCompactCard({ item }: EntertainmentCompactCardProps) {
  const language = useLanguage();
  const regionLabel = getLocalizedText(t.entertainment[item.entertainmentRegion] as { bn: string; en: string }, language);

  return (
    <Link
      href={`/entertainment/${item.slug}`}
      className="flex gap-3 py-3 group"
    >
      <div className="w-20 h-14 flex-shrink-0 rounded overflow-hidden">
        {item.image ? (
          <img
            src={item.image}
            alt={getLocalizedText(item.title, language)}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <ImageIcon className="h-5 w-5 text-gray-300" />
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-sm leading-snug text-gray-900 line-clamp-2 group-hover:text-[#1976d2] transition-colors">
          {getLocalizedText(item.title, language)}
        </h4>
        <span className={`inline-flex items-center gap-1 text-[10px] font-medium mt-1 ${REGION_TEXT_COLORS[item.entertainmentRegion]}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${REGION_DOT_COLORS[item.entertainmentRegion]}`} />
          {regionLabel}
        </span>
      </div>
    </Link>
  );
}
