'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Clock, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { getLocalizedText } from '@/lib/i18n/bilingual';
import { MyUSBartaWidget } from '@/components/personalization/MyUSBartaWidget';
import type { ArticleRelatedItem } from '@/types/article';

interface ArticleSidebarProps {
  related: ArticleRelatedItem[];
  news: ArticleRelatedItem[];
}

export function ArticleSidebar({ related, news }: ArticleSidebarProps) {
  const language = useLanguage();

  return (
    <aside className='space-y-8'>
      {/* Contextual Recommendations — directly connected to current article */}
      <div>
        <h3 className='text-sm font-bold text-[#0f2557] mb-3 pb-2 border-b-2 border-[#d32f2f]/30'>
          এই খবরের সঙ্গে আরও পড়ুন
        </h3>
        <div className='space-y-4'>
          {related.map((item) => (
            <SidebarCard key={item.id} item={item} language={language} />
          ))}
        </div>
      </div>

      {/* Today's Important News — broader platform-wide stories */}
      <div>
        <h3 className='text-sm font-bold text-[#0f2557] mb-3 pb-2 border-b-2 border-[#d32f2f]/30'>
          আজকের গুরুত্বপূর্ণ খবর
        </h3>
        <div className='divide-y divide-gray-100'>
          {news.map((item) => (
            <Link
              key={item.id}
              href='#'
              className='flex items-start gap-2.5 py-3 first:pt-0 group'
            >
              <span className='w-1.5 h-1.5 rounded-full bg-[#d32f2f] flex-shrink-0 mt-2' />
              <div className='flex-1 min-w-0'>
                <span className='text-[10px] font-semibold text-[#757575] uppercase tracking-wide'>
                  {getLocalizedText(item.categoryLabel, language)}
                </span>
                <p className='text-sm text-[#212121] leading-snug mt-0.5 group-hover:text-[#0f2557] transition-colors'>
                  {getLocalizedText(item.title, language)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* My US BARTA — personalized updates */}
      <MyUSBartaWidget />
    </aside>
  );
}

function SidebarCard({ item, language }: { item: ArticleRelatedItem; language: 'bn' | 'en' }) {
  return (
    <Link href='#' className='flex gap-3 group'>
      {item.image && (
        <div className='w-20 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0'>
          <Image
            src={item.image}
            alt=''
            width={80}
            height={64}
            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
          />
        </div>
      )}
      <div className='flex-1 min-w-0'>
        <p className='text-sm font-medium text-[#212121] leading-snug line-clamp-2 group-hover:text-[#0f2557] transition-colors'>
          {getLocalizedText(item.title, language)}
        </p>
        <div className='flex items-center gap-2 mt-1.5 text-[11px] text-[#9e9e9e]'>
          {item.readTimeMinutes && (
            <span className='flex items-center gap-0.5'>
              <Clock className='h-3 w-3' /> {item.readTimeMinutes} মিনিট
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}