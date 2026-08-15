'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/hooks/use-language';
import { getLocalizedText } from '@/lib/i18n/bilingual';
import { t } from '@/lib/i18n/translations';
import { Newspaper, Sparkles } from 'lucide-react';

export function HeroSection() {
  const language = useLanguage();

  return (
    <section className='relative overflow-hidden'>
      {/* Background Image - Statue of Liberty */}
      <div className='absolute inset-0'>
        <Image
          src='/hero-bg.png'
          alt=''
          fill
          className='object-cover'
          priority
          sizes='100vw'
        />
        <div className='absolute inset-0 bg-gradient-to-r from-[#0a1929]/60 via-[#0f2557]/25 to-transparent' />
      </div>

      {/* Content */}
      <div className='relative mx-auto max-w-[1280px] px-4 sm:px-6 py-20 sm:py-28 md:py-36'>
        <div className='max-w-2xl'>
          {/* Positioning Statement - Platform Identity */}
          <h1 className='text-xl sm:text-2xl md:text-[28px] font-bold text-white leading-relaxed sm:leading-relaxed md:leading-relaxed mb-5'>
            {language === 'bn'
              ? 'বাংলাদেশি-আমেরিকানদের জন্য America-কে বোঝা ও জীবনকে সহজ করার AI-চালিত প্ল্যাটফর্ম।'
              : 'An AI-powered platform for Bangladeshi-Americans to understand America and make life easier.'}
          </h1>

          <p className='text-sm sm:text-base text-white/60 mb-8 max-w-lg'>
            {getLocalizedText(t.hero.microcopy, language)}
          </p>

          {/* Entry Point Cards */}
          <div className='flex flex-col sm:flex-row gap-3'>
            <Link
              href='#todays-news'
              className='group inline-flex items-center gap-3 bg-white/95 backdrop-blur-sm text-[#0f2557] pl-4 pr-5 py-3.5 rounded-xl text-sm font-semibold hover:bg-white transition-all shadow-lg shadow-black/10'
            >
              <div className='w-9 h-9 rounded-lg bg-[#d32f2f]/10 flex items-center justify-center flex-shrink-0'>
                <Newspaper className='h-4.5 w-4.5 text-[#d32f2f]' />
              </div>
              <span>{getLocalizedText(t.hero.ctaPrimary, language)}</span>
            </Link>

            <Link
              href='#my-us-barta'
              className='group inline-flex items-center gap-3 border-2 border-white/80 text-white pl-4 pr-5 py-3.5 rounded-xl text-sm font-semibold hover:bg-white/15 backdrop-blur-sm transition-all'
            >
              <div className='w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0'>
                <Sparkles className='h-4.5 w-4.5 text-white' />
              </div>
              <span>{getLocalizedText(t.hero.ctaSecondary, language)}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
