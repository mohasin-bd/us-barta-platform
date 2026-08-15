'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/hooks/use-language';
import { getLocalizedText } from '@/lib/i18n/bilingual';
import { t } from '@/lib/i18n/translations';
import { categories } from '@/data/categories';

export function Footer() {
  const language = useLanguage();

  const aboutLinks = [
    { bn: 'আমাদের সম্পর্কে', en: 'About Us', href: '/about' },
    { bn: 'বিজ্ঞাপন', en: 'Advertise', href: '/advertise' },
    { bn: 'গোপনীয়তা নীতি', en: 'Privacy Policy', href: '/privacy' },
    { bn: 'সেবার শর্তাবলী', en: 'Terms of Service', href: '/terms' },
  ];

  const supportLinks = [
    { bn: 'সাধারণ প্রশ্ন', en: 'FAQ', href: '/faq' },
    { bn: 'যোগাযোগ', en: 'Contact', href: '/contact' },
    { bn: 'সাহায্য', en: 'Help', href: '/help' },
  ];

  return (
    <footer className='bg-[#0a1929] text-white'>
      <div className='mx-auto max-w-[1280px] px-4 sm:px-6 py-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8'>
          {/* Brand Column */}
          <div className='lg:col-span-2'>
            <Image
              src='/logo.png'
              alt='US BARTA'
              width={160}
              height={50}
              className='h-11 w-auto object-contain brightness-0 invert mb-4'
            />
            <p className='text-sm text-white/60 leading-relaxed max-w-sm'>
              {getLocalizedText(t.footer.description, language)}
            </p>

            {/* Social Icons */}
            <div className='flex items-center gap-2.5 mt-5'>
              {['F', 'Y', 'I', 'T', 'T'].map((letter, i) => (
                <span
                  key={i}
                  className='w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold'
                  style={{
                    backgroundColor: i === 0 ? '#1877F2' : i === 1 ? '#FF0000' : i === 2 ? '#E4405F' : i === 3 ? '#000000' : '#0088CC',
                  }}
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className='text-sm font-semibold mb-3 text-white/90'>
              {getLocalizedText(t.footer.categories, language)}
            </h3>
            <ul className='space-y-2'>
              {categories.slice(0, 7).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className='text-sm text-white/50 hover:text-white transition-colors'
                  >
                    {getLocalizedText(cat.label, language)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className='text-sm font-semibold mb-3 text-white/90'>
              {getLocalizedText(t.footer.about, language)}
            </h3>
            <ul className='space-y-2'>
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='text-sm text-white/50 hover:text-white transition-colors'
                  >
                    {language === 'bn' ? link.bn : link.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support + Contact */}
          <div>
            <h3 className='text-sm font-semibold mb-3 text-white/90'>
              {getLocalizedText(t.footer.support, language)}
            </h3>
            <ul className='space-y-2'>
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='text-sm text-white/50 hover:text-white transition-colors'
                  >
                    {language === 'bn' ? link.bn : link.en}
                  </Link>
                </li>
              ))}
            </ul>

            <div className='mt-5'>
              <h4 className='text-xs font-semibold text-white/70 mb-1.5'>
                {getLocalizedText(t.footer.contact, language)}
              </h4>
              <p className='text-xs text-white/40'>info@usbarta.com</p>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className='border-t border-white/10 mt-8 pt-5 text-center'>
          <p className='text-xs text-white/40'>
            {getLocalizedText(t.footer.copyright, language)}
          </p>
        </div>
      </div>
    </footer>
  );
}
