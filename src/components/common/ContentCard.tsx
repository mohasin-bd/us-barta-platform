'use client';

import Link from 'next/link';
import { ImageIcon } from 'lucide-react';
import { getLocalizedText } from '@/lib/i18n/bilingual';
import { useLanguage } from '@/hooks/use-language';
import { CategoryBadge } from './CategoryBadge';
import { ArticleMeta } from './ArticleMeta';
import type { BilingualText, ContentCategory } from '@/types/content';

interface ContentCardProps {
  title: BilingualText;
  summary?: BilingualText;
  image?: string;
  category?: ContentCategory;
  date?: string;
  href?: string;
  className?: string;
}

export function ContentCard({ title, summary, image, category, date, href, className = '' }: ContentCardProps) {
  const language = useLanguage();
  const Wrapper = href ? Link : 'div';
  const wrapperProps = href ? { href } : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`block bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer ${className}`}
    >
      {image ? (
        <div className="aspect-video relative">
          <img src={image} alt={getLocalizedText(title, language)} className="w-full h-full object-cover rounded-t-lg" />
        </div>
      ) : (
        <div className="aspect-video bg-gray-100 flex items-center justify-center">
          <ImageIcon className="h-8 w-8 text-gray-300" />
        </div>
      )}
      <div className="p-4 space-y-2">
        {category && <CategoryBadge category={category} size="sm" />}
        <h3 className="font-semibold text-[16px] leading-snug text-gray-900 line-clamp-2">
          {getLocalizedText(title, language)}
        </h3>
        {summary && (
          <p className="text-sm text-[#424242] line-clamp-2">
            {getLocalizedText(summary, language)}
          </p>
        )}
        {date && <ArticleMeta date={date} />}
      </div>
    </Wrapper>
  );
}
