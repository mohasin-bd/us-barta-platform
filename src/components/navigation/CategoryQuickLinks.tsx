'use client';

import Link from 'next/link';
import { useLanguage } from '@/hooks/use-language';
import { getLocalizedText } from '@/lib/i18n/bilingual';
import { categories } from '@/data/categories';
import {
  Newspaper,
  ShieldCheck,
  Home,
  GraduationCap,
  Heart,
  Moon,
  Users,
  Briefcase,
  Film,
  DollarSign,
  ChevronRight,
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Newspaper,
  ShieldCheck,
  Home,
  GraduationCap,
  Heart,
  Moon,
  Users,
  Briefcase,
  Film,
  DollarSign,
};

const colorMap: Record<string, { bg: string; icon: string }> = {
  news:            { bg: 'bg-[#1976d2]/10',  icon: 'text-[#1976d2]' },
  immigration:     { bg: 'bg-[#d32f2f]/10',  icon: 'text-[#d32f2f]' },
  'life-in-america': { bg: 'bg-[#0f2557]/10',  icon: 'text-[#0f2557]' },
  education:       { bg: 'bg-[#f57c00]/10',  icon: 'text-[#f57c00]' },
  health:          { bg: 'bg-[#388e3c]/10',  icon: 'text-[#388e3c]' },
  'islamic-life':  { bg: 'bg-[#7b1fa2]/10',  icon: 'text-[#7b1fa2]' },
  community:       { bg: 'bg-[#00838f]/10',  icon: 'text-[#00838f]' },
  'jobs-career':   { bg: 'bg-[#e65100]/10',  icon: 'text-[#e65100]' },
  entertainment:   { bg: 'bg-[#c2185b]/10',  icon: 'text-[#c2185b]' },
  'money-business':{ bg: 'bg-[#2e7d32]/10',  icon: 'text-[#2e7d32]' },
};

export function CategoryQuickLinks() {
  const language = useLanguage();

  return (
    <div className='bg-white border-b border-gray-100'>
      <div className='mx-auto max-w-[1280px] py-4 px-4 sm:px-6'>

        {/* ===== DESKTOP: all icons visible, no scroll, no আরও (≥1200px) ===== */}
        <div className='hidden xl:flex items-start justify-center gap-1'>
          {categories.map((cat) => {
            const IconComp = iconMap[cat.icon];
            const colors = colorMap[cat.slug] || { bg: 'bg-gray-100', icon: 'text-[#0f2557]' };
            return (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className='flex flex-col items-center gap-2 px-3 py-2.5 rounded-xl transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 group'
              >
                <div className={`w-11 h-11 rounded-xl ${colors.bg} flex items-center justify-center transition-transform duration-200 group-hover:scale-105`}>
                  {IconComp && (
                    <IconComp className={`h-5 w-5 ${colors.icon}`} />
                  )}
                </div>
                <span className='text-[11px] font-medium text-[#424242] text-center leading-tight'>
                  {getLocalizedText(cat.label, language)}
                </span>
              </Link>
            );
          })}
        </div>

        {/* ===== TABLET + MOBILE: horizontal scroll with আরও ===== */}
        <div className='flex xl:hidden items-center gap-3 overflow-x-auto scrollbar-hide scroll-snap-x pb-0.5'>
          {categories.map((cat) => {
            const IconComp = iconMap[cat.icon];
            const colors = colorMap[cat.slug] || { bg: 'bg-gray-100', icon: 'text-[#0f2557]' };
            return (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}`
                className='flex-shrink-0 scroll-snap-start flex flex-col items-center gap-2.5 px-3 py-3 rounded-xl bg-white min-w-[76px] transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 group'
              >
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center transition-transform duration-200 group-hover:scale-105`}>
                  {IconComp && (
                    <IconComp className={`h-5.5 w-5.5 ${colors.icon}`} />
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
            className='flex-shrink-0 scroll-snap-start flex flex-col items-center gap-2.5 px-3 py-3 rounded-xl bg-white min-w-[76px] transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 group'
          >
            <div className='w-12 h-12 rounded-xl bg-[#0f2557]/10 flex items-center justify-center transition-transform duration-200 group-hover:scale-105'>
              <ChevronRight className='h-5.5 w-5.5 text-[#0f2557]' />
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
