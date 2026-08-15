'use client';

import Link from 'next/link';
import { ImageIcon } from 'lucide-react';
import { getLocalizedText } from '@/lib/i18n/bilingual';
import { useLanguage } from '@/hooks/use-language';
import { t } from '@/lib/i18n/translations';
import type { EntertainmentItem, EntertainmentRegion, EntertainmentType } from '@/types/content';

const REGION_COLORS: Record<EntertainmentRegion, { bg: string; text: string }> = {
  bangladesh: { bg: 'bg-[#388e3c]/15', text: 'text-[#388e3c]' },
  india: { bg: 'bg-[#f57c00]/15', text: 'text-[#f57c00]' },
  hollywood: { bg: 'bg-[#0f2557]/10', text: 'text-[#0f2557]' },
};

const TYPE_LABELS: Record<string, { bn: string; en: string }> = {
  movie: { bn: 'সিনেমা', en: 'Movie' },
  tv: { bn: 'টিভি', en: 'TV' },
  ott: { bn: 'ওটিটি', en: 'OTT' },
  celebrity: { bn: 'সেলিব্রিটি', en: 'Celebrity' },
  music: { bn: 'সঙ্গীত', en: 'Music' },
  review: { bn: 'রিভিউ', en: 'Review' },
  trending: { bn: 'ট্রেন্ডিং', en: 'Trending' },
  gossip: { bn: 'গসিপ', en: 'Gossip' },
};

interface EntertainmentFeaturedCardProps {
  item: EntertainmentItem;
}

export function EntertainmentFeaturedCard({ item }: EntertainmentFeaturedCardProps) {
  const language = useLanguage();
  const regionStyle = REGION_COLORS[item.entertainmentRegion] || REGION_COLORS.hollywood;
  const regionLabel = getLocalizedText(t.entertainment[item.entertainmentRegion] as { bn: string; en: string }, language);
  const typeLabel = item.entertainmentType && TYPE_LABELS[item.entertainmentType]
    ? getLocalizedText(TYPE_LABELS[item.entertainmentType], language)
    : null;

  return (
    <Link
      href={`/entertainment/${item.slug}`}
      className="block bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
    >
      {item.image ? (
        <div className="aspect-video relative">
          <img src={item.image} alt={getLocalizedText(item.title, language)} className="w-full h-full object-cover rounded-t-lg" />
        </div>
      ) : (
        <div className="aspect-video bg-gray-100 flex items-center justify-center">
          <ImageIcon className="h-12 w-12 text-gray-300" />
        </div>
      )}
      <div className="p-4 space-y-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-medium ${regionStyle.bg} ${regionStyle.text}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${item.entertainmentRegion === 'bangladesh' ? 'bg-[#388e3c]' : item.entertainmentRegion === 'india' ? 'bg-[#f57c00]' : 'bg-[#0f2557]'}`} />
            {regionLabel}
          </span>
          {typeLabel && (
            <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-[10px] font-medium text-gray-600">
              {typeLabel}
            </span>
          )}
        </div>
        <h3 className="font-bold text-[18px] leading-snug text-gray-900 line-clamp-2">
          {getLocalizedText(item.title, language)}
        </h3>
      </div>
    </Link>
  );
}
