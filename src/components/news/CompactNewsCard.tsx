'use client';

import Link from 'next/link';
import { ImageIcon } from 'lucide-react';
import { getLocalizedText } from '@/lib/i18n/bilingual';
import { useLanguage } from '@/hooks/use-language';
import type { NewsItem } from '@/types/content';

interface CompactNewsCardProps {
  item: NewsItem;
}

export function CompactNewsCard({ item }: CompactNewsCardProps) {
  const language = useLanguage();

  return (
    <Link
      href={`/news/${item.slug}`}
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
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500 font-bold text-sm">
              {getLocalizedText(item.title, language).charAt(0)}
            </span>
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-sm leading-snug text-gray-900 line-clamp-2 group-hover:text-[#1976d2] transition-colors">
          {getLocalizedText(item.title, language)}
        </h4>
        <p className="text-[#757575] text-xs mt-1">
          {new Date(item.taxonomy.publishedAt).toLocaleDateString(language === 'bn' ? 'bn-BD' : 'en-US', { month: 'short', day: 'numeric' })}
        </p>
      </div>
    </Link>
  );
}
