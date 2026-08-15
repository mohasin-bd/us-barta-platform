'use client';

import Link from 'next/link';
import { useLanguage } from '@/hooks/use-language';
import { getLocalizedText } from '@/lib/i18n/bilingual';
import { categories } from '@/data/categories';
import {
  Newspaper, ShieldCheck, GraduationCap, Heart, Briefcase,
  DollarSign, Moon, Users, Film, ChevronRight, CalendarDays, MapPin,
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Newspaper, ShieldCheck, GraduationCap, Heart, Briefcase,
  DollarSign, Moon, Users, Film, CalendarDays, MapPin,
};

const quickAccessItems = [
  { slug: 'immigration', color: '#1976d2', bg: 'bg-[#1976d2]/8', border: 'border-[#1976d2]/15', iconColor: 'text-[#1976d2]', hoverBg: 'hover:bg-[#1976d2]/12' },
  { slug: 'jobs-career', color: '#388e3c', bg: 'bg-[#388e3c]/8', border: 'border-[#388e3c]/15', iconColor: 'text-[#388e3c]', hoverBg: 'hover:bg-[#388e3c]/12' },
  { slug: 'education', color: '#7b1fa2', bg: 'bg-[#7b1fa2]/8', border: 'border-[#7b1fa2]/15', iconColor: 'text-[#7b1fa2]', hoverBg: 'hover:bg-[#7b1fa2]/12' },
  { slug: 'health', color: '#d32f2f', bg: 'bg-[#d32f2f]/8', border: 'border-[#d32f2f]/15', iconColor: 'text-[#d32f2f]', hoverBg: 'hover:bg-[#d32f2f]/12' },
  { slug: 'islamic-life', color: '#00897b', bg: 'bg-[#00897b]/8', border: 'border-[#00897b]/15', iconColor: 'text-[#00897b]', hoverBg: 'hover:bg-[#00897b]/12' },
  { slug: 'community', color: '#f57c00', bg: 'bg-[#f57c00]/8', border: 'border-[#f57c00]/15', iconColor: 'text-[#f57c00]', hoverBg: 'hover:bg-[#f57c00]/12' },
  { slug: 'entertainment', color: '#e91e63', bg: 'bg-[#e91e63]/8', border: 'border-[#e91e63]/15', iconColor: 'text-[#e91e63]', hoverBg: 'hover:bg-[#e91e63]/12' },
  { slug: 'money-business', color: '#0f2557', bg: 'bg-[#0f2557]/8', border: 'border-[#0f2557]/15', iconColor: 'text-[#0f2557]', hoverBg: 'hover:bg-[#0f2557]/12' },
];

export function CategoryQuickLinks() {
  const language = useLanguage();

  const catMap = Object.fromEntries(categories.map(c => [c.slug, c]));

  return (
    <div className='bg-white border-b border-gray-100'>
      <div className='mx-auto max-w-[1280px] px-4 sm:px-6 py-5'>
        <div className='flex items-center gap-3 overflow-x-auto scrollbar-hide scroll-snap-x pb-1'>
          {quickAccessItems.map((item) => {
            const cat = catMap[item.slug];
            if (!cat) return null;
            const IconComp = iconMap[cat.icon];
            return (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className={`flex-shrink-0 scroll-snap-start flex flex-col items-center gap-2 px-4 py-3 rounded-2xl border ${item.border} ${item.bg} ${item.hoverBg} transition-all duration-200 min-w-[80px] group hover:shadow-sm`}
              >
                <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center group-hover:scale-105 transition-transform duration-200`}>
                  {IconComp && <IconComp className={`h-5 w-5 ${item.iconColor}`} />}
                </div>
                <span className='text-[11px] font-medium text-[#424242] text-center leading-tight group-hover:text-[#212121] transition-colors'>
                  {getLocalizedText(cat.label, language)}
                </span>
              </Link>
            );
          })}
          <Link
            href='/explore'
            className='flex-shrink-0 scroll-snap-start flex flex-col items-center gap-2 px-4 py-3 rounded-2xl hover:bg-gray-50 transition-all min-w-[80px]'
          >
            <div className='w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center'>
              <ChevronRight className='h-5 w-5 text-[#757575]' />
            </div>
            <span className='text-[11px] font-medium text-[#757575] text-center'>
              {language === 'bn' ? 'আরও' : 'More'}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
