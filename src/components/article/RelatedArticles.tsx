'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Clock } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { getLocalizedText } from '@/lib/i18n/bilingual';
import type { ArticleRelatedItem } from '@/types/article';

interface RelatedArticlesProps {
  title: string;
  items: ArticleRelatedItem[];
}

export function RelatedArticles({ title, items }: RelatedArticlesProps) {
  const language = useLanguage();

  return (
    <section className='pt-8 border-t border-gray-200'>
      <h2 className='text-xl font-bold text-[#0f2557] mb-6'>{title}</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        {items.map((item) => (
          <Link key={item.id} href='#' className='group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow'>
            {item.image && (
              <div className='aspect-[16/10] bg-gray-100 overflow-hidden'>
                <Image
                  src={item.image}
                  alt=''
                  width={400}
                  height={250}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                />
              </div>
            )}
            <div className='p-4'>
              <span className='text-[10px] font-bold text-[#d32f2f] uppercase tracking-wide'>
                {getLocalizedText(item.categoryLabel, language)}
              </span>
              <h3 className='text-sm font-semibold text-[#212121] leading-snug mt-1 line-clamp-2 group-hover:text-[#0f2557] transition-colors'>
                {getLocalizedText(item.title, language)}
              </h3>
              {item.summary && (
                <p className='text-xs text-[#757575] mt-1.5 line-clamp-2 leading-relaxed'>
                  {getLocalizedText(item.summary, language)}
                </p>
              )}
              {item.readTimeMinutes && (
                <span className='flex items-center gap-1 mt-2.5 text-[11px] text-[#9e9e9e]'>
                  <Clock className='h-3 w-3' /> {item.readTimeMinutes} মিনিট
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}