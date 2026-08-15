'use client';

import Link from 'next/link';
import { ImageIcon } from 'lucide-react';
import { getLocalizedText } from '@/lib/i18n/bilingual';
import { useLanguage } from '@/hooks/use-language';
import { CategoryBadge } from '@/components/common/CategoryBadge';
import { ArticleMeta } from '@/components/common/ArticleMeta';
import type { NewsItem } from '@/types/content';

interface NewsCardProps {
  item: NewsItem;
}

export function NewsCard({ item }: NewsCardProps) {
  const language = useLanguage();

  return (
    <Link
      href={`/news/${item.slug}`}
      className="block bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
    >
      {item.image ? (
        <div className="aspect-video relative">
          <img
            src={item.image}
            alt={getLocalizedText(item.title, language)}
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>
      ) : (
        <div className="aspect-video bg-gray-100 flex items-center justify-center">
          <ImageIcon className="h-8 w-8 text-gray-300" />
        </div>
      )}
      <div className="p-4 space-y-2">
        <CategoryBadge category={item.taxonomy.primaryCategory} size="sm" />
        <h3 className="font-semibold text-[16px] leading-snug text-gray-900 line-clamp-2">
          {getLocalizedText(item.title, language)}
        </h3>
        <ArticleMeta date={item.taxonomy.publishedAt} readTime={item.readTimeMinutes} />
      </div>
    </Link>
  );
}
