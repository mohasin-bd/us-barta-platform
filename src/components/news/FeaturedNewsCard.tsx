'use client';

import Link from 'next/link';
import { ImageIcon, AlertTriangle } from 'lucide-react';
import { getLocalizedText } from '@/lib/i18n/bilingual';
import { useLanguage } from '@/hooks/use-language';
import { CategoryBadge } from '@/components/common/CategoryBadge';
import { ArticleMeta } from '@/components/common/ArticleMeta';
import type { NewsItem } from '@/types/content';
import { t } from '@/lib/i18n/translations';

interface FeaturedNewsCardProps {
  item: NewsItem;
  featured?: boolean;
}

export function FeaturedNewsCard({ item, featured = false }: FeaturedNewsCardProps) {
  const language = useLanguage();

  if (!featured) {
    return (
      <Link href={`/news/${item.slug}`} className="block bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
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
          {item.isBreaking && (
            <span className="inline-flex items-center gap-1 rounded-full bg-[#d32f2f] px-2.5 py-0.5 text-[10px] font-bold text-white uppercase">
              <AlertTriangle className="h-3 w-3" />
              {language === 'bn' ? 'ব্রেকিং' : 'Breaking'}
            </span>
          )}
          <CategoryBadge category={item.taxonomy.primaryCategory} size="sm" />
          <h3 className="font-semibold text-[18px] leading-snug text-gray-900 line-clamp-2">
            {getLocalizedText(item.title, language)}
          </h3>
          {item.summary && (
            <p className="text-sm text-[#757575] line-clamp-2">
              {getLocalizedText(item.summary, language)}
            </p>
          )}
          <ArticleMeta
            date={item.taxonomy.publishedAt}
            readTime={item.readTimeMinutes}
          />
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/news/${item.slug}`}
      className="block bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[60%] aspect-video md:aspect-auto md:min-h-[240px] flex-shrink-0">
          {item.image ? (
            <img
              src={item.image}
              alt={getLocalizedText(item.title, language)}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <ImageIcon className="h-12 w-12 text-gray-300" />
            </div>
          )}
        </div>
        <div className="md:w-[40%] p-4 md:p-5 flex flex-col justify-center space-y-2.5">
          {item.isBreaking && (
            <span className="inline-flex items-center gap-1 rounded-full bg-[#d32f2f] px-2.5 py-0.5 text-[10px] font-bold text-white uppercase w-fit">
              <AlertTriangle className="h-3 w-3" />
              {language === 'bn' ? 'ব্রেকিং' : 'Breaking'}
            </span>
          )}
          <CategoryBadge category={item.taxonomy.primaryCategory} size="sm" />
          <h3 className="font-bold text-[18px] md:text-[20px] leading-snug text-gray-900 line-clamp-3">
            {getLocalizedText(item.title, language)}
          </h3>
          {item.summary && (
            <p className="text-sm text-[#757575] line-clamp-2">
              {getLocalizedText(item.summary, language)}
            </p>
          )}
          <ArticleMeta
            date={item.taxonomy.publishedAt}
            readTime={item.readTimeMinutes}
          />
        </div>
      </div>
    </Link>
  );
}
