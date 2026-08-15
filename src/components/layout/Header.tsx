'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  MapPin, Sun, Bell, User, Search, Menu, X,
} from 'lucide-react';
import { useLanguageStore } from '@/store/preferences';
import { useLanguage } from '@/hooks/use-language';
import { getLocalizedText } from '@/lib/i18n/bilingual';
import { t } from '@/lib/i18n/translations';
import { SearchBar } from '@/components/common/SearchBar';
import { PrimaryNav } from '@/components/navigation/PrimaryNav';
import { MobileNav } from '@/components/navigation/MobileNav';
import { LanguageSwitcher } from '@/components/navigation/LanguageSwitcher';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const language = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Utility Bar */}
      <div className="border-b border-gray-100">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <div className="flex items-center justify-between py-2 text-sm">
            {/* Left: Location */}
            <div className="hidden sm:flex items-center gap-1.5 text-[#757575]">
              <MapPin className="h-3.5 w-3.5 text-[#d32f2f]" />
              <span className="text-xs">Jackson Heights, NY, USA</span>
            </div>

            {/* Center: Search (hidden on mobile — shown in mobile nav) */}
            <div className="hidden md:block flex-1 max-w-xl mx-6">
              <SearchBar />
            </div>

            {/* Right: Weather, Language, Actions */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="hidden sm:flex items-center gap-1.5 text-[#f57c00]">
                <Sun className="h-4 w-4" />
                <span className="text-xs font-medium">72°F</span>
              </div>

              <LanguageSwitcher />

              <button className="hidden sm:flex items-center gap-1 text-[#0f2557] hover:text-[#1976d2] transition-colors">
                <User className="h-4 w-4" />
                <span className="text-xs font-medium">
                  {getLocalizedText(t.nav.forYou, language)}
                </span>
              </button>

              <button className="relative p-1.5 rounded-full hover:bg-gray-100 transition-colors">
                <Bell className="h-4.5 w-4.5 text-[#424242]" />
                <span className="absolute -top-0.5 -right-0.5 bg-[#d32f2f] text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center">
                  3
                </span>
              </button>

              {/* Mobile hamburger */}
              <button
                className="md:hidden p-1.5 rounded-lg hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="h-5 w-5 text-[#212121]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Branding Row */}
      <div className="hidden md:block">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="flex items-center gap-4 py-3">
            <Image
              src="/logo.png"
              alt="US BARTA"
              width={180}
              height={56}
              priority
              className="h-12 w-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Primary Navigation (Desktop) */}
      <div className="hidden md:block">
        <PrimaryNav />
      </div>

      {/* Mobile Navigation Drawer */}
      <MobileNav
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}
