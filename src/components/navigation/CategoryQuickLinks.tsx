'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { getLocalizedText } from '@/lib/i18n/bilingual';
import { categories } from '@/data/categories';
import {
  Newspaper, ShieldCheck, Home, GraduationCap, Heart, Briefcase,
  DollarSign, Moon, Users, Film,
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Newspaper, ShieldCheck, Home, GraduationCap, Heart, Briefcase,
  DollarSign, Moon, Users, Film,
};

const quickAccessSlugs = [
  'news', 'immigration', 'life-in-america', 'education',
  'health', 'islamic-life', 'community', 'jobs-career',
];

export function CategoryQuickLinks() {
  const language = useLanguage();
  const quickCats = categories.filter((c) => quickAccessSlugs.includes(c.slug));

  return (
    <div className='bg-white py-4 border-b border-gray-100'>
      <div className='mx-auto max-w-[1280px] px-4 sm:px-6'>
        <div className='flex items-center gap-3 overflow-x-auto scrollbar-hide scroll-snap-x pb-1'>
          {quickCats.map((cat) => {
            const IconComp = iconMap[cat.icon];
            return (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className='flex-shrink-0 scroll-snap-start flex flex-col items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors min-w-[72px]'
              >
                <div className='w-11 h-11 rounded-full bg-[#0f2557]/5 flex items-center justify-center'>
                  {IconComp && <IconComp className='h-5 w-5 text-[#0f2557]' />}
                </div>
                <span className='text-xs font-medium text-[#424242] text-center leading-tight'>
                  {getLocalizedText(cat.label, language)}
                </span>
              </Link>
            );
          })}
          <Link
            href='/explore'
            className='flex-shrink-0 scroll-snap-start flex flex-col items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors min-w-[72px]'
          >
            <div className='w-11 h-11 rounded-full bg-[#d32f2f]/5 flex items-center justify-center'>
              <ChevronRight className='h-5 w-5 text-[#d32f2f]' />
            </div>
            <span className='text-xs font-medium text-[#d32f2f] text-center'>
              {language === 'bn' ? 'আরও' : 'More'}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
