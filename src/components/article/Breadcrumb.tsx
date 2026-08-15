'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { getLocalizedText } from '@/lib/i18n/bilingual';
import type { BilingualText } from '@/types/content';

interface BreadcrumbItem {
  label: BilingualText;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  current: string;
}

export function Breadcrumb({ items, current }: BreadcrumbProps) {
  const language = useLanguage();

  return (
    <nav aria-label='Breadcrumb' className='py-3 text-sm'>
      <ol className='flex items-center flex-wrap gap-1 text-[#757575]'>
        {items.map((item, i) => (
          <li key={item.href} className='flex items-center gap-1'>
            {i > 0 && <ChevronRight className='h-3 w-3 text-gray-300' />}
            <Link
              href={item.href}
              className='hover:text-[#0f2557] transition-colors'
            >
              {getLocalizedText(item.label, language)}
            </Link>
          </li>
        ))}
        <li className='flex items-center gap-1'>
          <ChevronRight className='h-3 w-3 text-gray-300' />
          <span className='text-[#424242] font-medium truncate max-w-[200px] sm:max-w-none'>
            {current}
          </span>
        </li>
      </ol>
    </nav>
  );
}
