'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, MapPin, Sun } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '@/hooks/use-language';
import { getLocalizedText } from '@/lib/i18n/bilingual';
import { t } from '@/lib/i18n/translations';
import { categories } from '@/data/categories';
import { SearchBar } from '@/components/common/SearchBar';
import {
  Newspaper, ShieldCheck, Home, GraduationCap, Heart, Briefcase,
  DollarSign, Moon, Users, Film, MapPin as MapPinIcon,
  CalendarDays, Search as SearchIcon, Bell, Sparkles, UserCircle,
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Newspaper, ShieldCheck, Home, GraduationCap, Heart, Briefcase,
  DollarSign, Moon, Users, Film, MapPin: MapPinIcon,
  CalendarDays, Search: SearchIcon, Bell, Sparkles, UserCircle,
};

const mainNavKeys = ['home', 'latest', 'forYou', 'explore'] as const;

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const language = useLanguage();

  // Prevent body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side='left' className='w-[300px] p-0 overflow-y-auto'>
        {/* Logo + Close */}
        <SheetHeader className='px-4 pt-4 pb-2'>
          <SheetTitle className='flex items-center justify-between'>
            <Image src='/logo.png' alt='US BARTA' width={140} height={44} className='h-10 w-auto object-contain' />
          </SheetTitle>
        </SheetHeader>

        {/* Search */}
        <div className='px-4 py-2'>
          <SearchBar />
        </div>

        {/* Location + Weather */}
        <div className='px-4 py-2 flex items-center gap-4 text-xs text-[#757575]'>
          <span className='flex items-center gap-1'><MapPin className='h-3 w-3 text-[#d32f2f]' /> Jackson Heights, NY</span>
          <span className='flex items-center gap-1'><Sun className='h-3 w-3 text-[#f57c00]' /> 72°F</span>
        </div>

        <Separator className='my-2' />

        {/* Main Nav */}
        <div className='px-2 py-2'>
          {mainNavKeys.map((key) => (
            <Link
              key={key}
              href='/'
              onClick={onClose}
              className='flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[#212121] hover:bg-gray-50'
            >
              {getLocalizedText(t.nav[key], language)}
            </Link>
          ))}
        </div>

        <Separator className='my-1' />

        {/* Categories */}
        <div className='px-2 py-2'>
          <p className='px-3 py-1.5 text-[10px] font-semibold text-[#757575] uppercase tracking-wider'>
            {language === 'bn' ? 'ক্যাটাগরি' : 'Categories'}
          </p>
          {categories.map((cat) => {
            const IconComp = iconMap[cat.icon];
            return (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                onClick={onClose}
                className='flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-[#424242] hover:bg-gray-50'
              >
                {IconComp && <IconComp className='h-4 w-4 text-[#0f2557]' />}
                {getLocalizedText(cat.label, language)}
              </Link>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
}
