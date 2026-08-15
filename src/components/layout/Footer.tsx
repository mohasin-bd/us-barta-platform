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
              <a href='#' className='w-9 h-9 rounded-full bg-[#1877F2] flex items-center justify-center hover:opacity-80 transition-opacity' aria-label='Facebook'>
                <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 24 24'><path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'/></svg>
              </a>
              <a href='#' className='w-9 h-9 rounded-full bg-[#FF0000] flex items-center justify-center hover:opacity-80 transition-opacity' aria-label='YouTube'>
                <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 24 24'><path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'/></svg>
              </a>
              <a href='#' className='w-9 h-9 rounded-full bg-[#E4405F] flex items-center justify-center hover:opacity-80 transition-opacity' aria-label='Instagram'>
                <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 24 24'><path d='M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.441 1.441 0 0 1 2.88 0z'/></svg>
              </a>
              <a href='#' className='w-9 h-9 rounded-full bg-[#000000] border border-white/20 flex items-center justify-center hover:opacity-80 transition-opacity' aria-label='TikTok'>
                <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 24 24'><path d='M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z'/></svg>
              </a>
              <a href='#' className='w-9 h-9 rounded-full bg-[#0088CC] flex items-center justify-center hover:opacity-80 transition-opacity' aria-label='Telegram'>
                <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 24 24'><path d='M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z'/></svg>
              </a>
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
