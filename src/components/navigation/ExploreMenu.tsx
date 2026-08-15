'use client';

import Link from 'next/link';
import { useLanguage } from '@/hooks/use-language';
import { getLocalizedText } from '@/lib/i18n/bilingual';
import { categories } from '@/data/categories';
import type { ContentCategory } from '@/types/content';
import {
  Newspaper, ShieldCheck, Home, GraduationCap, Heart, Briefcase,
  DollarSign, Moon, Users, Film, MapPin, CalendarDays, Search,
  Bell, Sparkles, UserCircle, ChevronRight,
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Newspaper, ShieldCheck, Home, GraduationCap, Heart, Briefcase,
  DollarSign, Moon, Users, Film, MapPin, CalendarDays, Search,
  Bell, Sparkles, UserCircle,
};

export function ExploreMenu() {
  const language = useLanguage();

  const utilityItems = [
    { icon: 'MapPin', label: { bn: 'Business Directory', en: 'Business Directory' }, href: '/directory' },
    { icon: 'CalendarDays', label: { bn: 'ইভেন্টস', en: 'Events' }, href: '/events' },
    { icon: 'Search', label: { bn: 'সার্চ', en: 'Search' }, href: '/search' },
    { icon: 'Bell', label: { bn: 'সতর্কতা', en: 'Alerts' }, href: '/alerts' },
  ];

  const personalizedItems = [
    { icon: 'Sparkles', label: { bn: 'আপনার জন্য', en: 'For You' }, href: '/for-you' },
    { icon: 'UserCircle', label: { bn: 'My US BARTA', en: 'My US BARTA' }, href: '/my-us-barta' },
  ];

  return (
    <div className='absolute top-full left-0 z-50 w-full'>
      <div className='mx-auto max-w-[1280px] px-6'>
        <div className='bg-white rounded-b-xl shadow-lg border border-gray-100 p-6'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Content Pillars */}
            <div>
              <h3 className='text-xs font-semibold text-[#757575] uppercase tracking-wider mb-3'>
                {language === 'bn' ? 'কন্টেন্ট' : 'Content'}
              </h3>
              <div className='grid grid-cols-2 gap-1'>
                {categories.map((cat) => {
                  const IconComp = iconMap[cat.icon];
                  return (
                    <Link
                      key={cat.slug}
                      href={`/category/${cat.slug}`}
                      className='flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors group'
                    >
                      {IconComp && <IconComp className='h-4 w-4 text-[#0f2557]' />}
                      <span className='text-sm text-[#424242] group-hover:text-[#0f2557]'>
                        {getLocalizedText(cat.label, language)}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Utility */}
            <div>
              <h3 className='text-xs font-semibold text-[#757575] uppercase tracking-wider mb-3'>
                {language === 'bn' ? 'ইউটিলিটি' : 'Utility'}
              </h3>
              <div className='space-y-1'>
                {utilityItems.map((item) => {
                  const IconComp = iconMap[item.icon];
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className='flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors group'
                    >
                      {IconComp && <IconComp className='h-4 w-4 text-[#1976d2]' />}
                      <span className='text-sm text-[#424242] group-hover:text-[#0f2557]'>
                        {getLocalizedText(item.label, language)}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Personalized */}
            <div>
              <h3 className='text-xs font-semibold text-[#757575] uppercase tracking-wider mb-3'>
                {language === 'bn' ? 'পার্সোনালাইজড' : 'Personalized'}
              </h3>
              <div className='space-y-1'>
                {personalizedItems.map((item) => {
                  const IconComp = iconMap[item.icon];
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className='flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors group'
                    >
                      {IconComp && <IconComp className='h-4 w-4 text-[#d32f2f]' />}
                      <span className='text-sm text-[#424242] group-hover:text-[#0f2557]'>
                        {getLocalizedText(item.label, language)}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
