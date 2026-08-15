'use client';

import Link from 'next/link';
import { Calendar, MapPin } from 'lucide-react';
import { getLocalizedText } from '@/lib/i18n/bilingual';
import { useLanguage } from '@/hooks/use-language';
import { t } from '@/lib/i18n/translations';
import type { EventItem } from '@/types/content';

interface EventCardProps {
  item: EventItem;
}

export function EventCard({ item }: EventCardProps) {
  const language = useLanguage();
  const startDate = new Date(item.startDate);
  const day = startDate.toLocaleDateString(language === 'bn' ? 'bn-BD' : 'en-US', { day: 'numeric' });
  const month = startDate.toLocaleDateString(language === 'bn' ? 'bn-BD' : 'en-US', { month: 'short' });

  return (
    <Link
      href={`/events/${item.slug}`}
      className="flex bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="w-16 flex-shrink-0 bg-[#0f2557] text-white flex flex-col items-center justify-center py-2.5">
        <span className="text-[10px] font-medium uppercase leading-none">{month}</span>
        <span className="text-xl font-bold leading-tight mt-0.5">{day}</span>
      </div>
      <div className="flex-1 p-3 space-y-1.5">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-sm leading-snug text-gray-900 line-clamp-1">
            {getLocalizedText(item.title, language)}
          </h3>
          {item.isFree && (
            <span className="inline-flex items-center rounded-full bg-[#388e3c]/10 px-2 py-0.5 text-[10px] font-semibold text-[#388e3c] flex-shrink-0">
              {getLocalizedText(t.events.free, language)}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3 text-xs text-[#757575]">
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {getLocalizedText(item.venue, language)}
          </span>
          <span>{item.eventLocation.city || item.eventLocation.state}</span>
        </div>
      </div>
    </Link>
  );
}
