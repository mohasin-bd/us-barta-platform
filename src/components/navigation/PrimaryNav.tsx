'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { getLocalizedText } from '@/lib/i18n/bilingual';
import { t } from '@/lib/i18n/translations';
import { categories } from '@/data/categories';
import { ExploreMenu } from './ExploreMenu';

const navItems = [
  { key: 'home' as const, href: '/' },
  { key: 'latest' as const, href: '/latest' },
  { key: 'forYou' as const, href: '/for-you' },
  { key: 'explore' as const, href: '/explore' },
];

export function PrimaryNav() {
  const [exploreOpen, setExploreOpen] = useState(false);
  const language = useLanguage();

  return (
    <nav className="bg-[#0f2557]">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex items-center gap-0">
          {navItems.map((item) => (
            <div
              key={item.key}
              className="relative"
              onMouseEnter={() => item.key === 'explore' && setExploreOpen(true)}
              onMouseLeave={() => item.key === 'explore' && setExploreOpen(false)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                {getLocalizedText(t.nav[item.key], language)}
                {item.key === 'explore' && (
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${exploreOpen ? 'rotate-180' : ''}`} />
                )}
              </Link>
              {item.key === 'explore' && exploreOpen && <ExploreMenu />}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
