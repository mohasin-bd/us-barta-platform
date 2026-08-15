'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/hooks/use-language';
import { getLocalizedText } from '@/lib/i18n/bilingual';
import { t } from '@/lib/i18n/translations';

export function HeroSection() {
  const language = useLanguage();

  return (
    <section className='relative overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <Image
          src='/hero-bg.png'
          alt=''
          fill
          className='object-cover'
          priority
          sizes='100vw'
        />
        <div className='absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent' />
      </div>

      {/* Content */}
      <div className='relative mx-auto max-w-[1280px] px-4 sm:px-6 py-16 sm:py-24 md:py-28'>
        <div className='max-w-xl'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-3'>
            {getLocalizedText(t.hero.headline, language)}
          </h1>

          <p className='text-base sm:text-lg text-white/80 mb-2'>
            {getLocalizedText(t.hero.subtitle, language)}
          </p>

          <p className='text-sm text-white/60 mb-6'>
            {getLocalizedText(t.hero.microcopy, language)}
          </p>

          <div className='flex flex-wrap gap-3'>
            <Link
              href='#todays-news'
              className='inline-flex items-center gap-2 bg-white text-[#0f2557] px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors'
            >
              {getLocalizedText(t.hero.ctaPrimary, language)}
            </Link>
            <Link
              href='#my-us-barta'
              className='inline-flex items-center gap-2 border-2 border-white text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/10 transition-colors'
            >
              {getLocalizedText(t.hero.ctaSecondary, language)}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
