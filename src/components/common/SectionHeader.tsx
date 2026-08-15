'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { getLocalizedText } from '@/lib/i18n/bilingual';
import { useLanguage } from '@/hooks/use-language';
import type { BilingualText } from '@/types/content';

interface SectionHeaderProps {
  title: BilingualText;
  seeAllHref?: string;
  seeAllLabel?: BilingualText;
}

export function SectionHeader({ title, seeAllHref, seeAllLabel }: SectionHeaderProps) {
  const language = useLanguage();

  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-[20px] font-bold text-[#0f2557]">
        {getLocalizedText(title, language)}
      </h2>
      {seeAllHref && (
        <Link
          href={seeAllHref}
          className="flex items-center gap-1 text-[#1976d2] text-sm font-medium hover:underline"
        >
          {seeAllLabel ? getLocalizedText(seeAllLabel, language) : (language === 'bn' ? 'সব দেখুন' : 'See All')}
          <ChevronRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}
