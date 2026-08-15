'use client';

import Link from 'next/link';
import { useLanguage } from '@/hooks/use-language';
import { getLocalizedText } from '@/lib/i18n/bilingual';
import { categories } from '@/data/categories';
import {
  ShieldCheck,
  Home,
  GraduationCap,
  Heart,
  Moon,
  Users,
  Briefcase,
  Film,
  ChevronRight,
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  Home,
  GraduationCap,
  Heart,
  Moon,
  Users,
  Briefcase,
  Film,
};

const quickAccessSlugs = [
  'immigration',
  'life-in-america',
  'education',
  'health',
  'islamic-life',
  'community',
  'jobs-career',
  'entertainment',
];

export function CategoryQuickLinks() {
  const language = useLanguage();

  const quickCategories = categories.filter((c) =>
    quickAccessSlugs.includes(c.slug),
  );

  return (
    <div className='bg-white border-b border-gray-100'>
      <div className='mx-auto max-w-[1280px] py-4 px-4 sm:px-6'>
        <div className='flex items-center gap-3 overflow-x-auto scrollbar-hide scroll-snap-x pb-0.5'>
          {quickCategories.map((cat) => {
            const IconComp = iconMap[cat.icon];
            return (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className='flex-shrink-0 scroll-snap-start flex flex-col items-center gap-2.5 px-3 py-3 rounded-xl border border-gray-100 bg-white shadow-sm min-w-[76px] transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 group'
              >
                <div className='w-11 h-11 rounded-xl bg-gray-50 flex items-center justify-center transition-transform duration-200 group-hover:scale-105'>
                  {IconComp && (
                    <IconComp className='h-5 w-5 text-[#0f2557]' />
                  )}
                </div>
                <span className='text-xs font-medium text-[#424242] text-center leading-tight'>
                  {getLocalizedText(cat.label, language)}
                </span>
              </Link>
            );
          })}
          <Link
            href='/explore'
            className='flex-shrink-0 scroll-snap-start flex flex-col items-center gap-2.5 px-3 py-3 rounded-xl border border-gray-100 bg-white shadow-sm min-w-[76px] transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 group'
          >
            <div className='w-11 h-11 rounded-xl bg-gray-50 flex items-center justify-center transition-transform duration-200 group-hover:scale-105'>
              <ChevronRight className='h-5 w-5 text-[#d32f2f]' />
            </div>
            <span className='text-xs font-medium text-[#424242] text-center leading-tight'>
              {language === 'bn' ? 'আরও' : 'More'}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
