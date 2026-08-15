'use client';

import Image from 'next/image';
import { useLanguage } from '@/hooks/use-language';
import { getLocalizedText } from '@/lib/i18n/bilingual';
import type { Article } from '@/types/article';

interface ArticleHeroProps {
  article: Article;
}

export function ArticleHero({ article }: ArticleHeroProps) {
  const language = useLanguage();

  return (
    <figure className='my-6 lg:my-8'>
      <div className='relative aspect-[16/9] rounded-xl overflow-hidden bg-gray-100'>
        <Image
          src={article.heroImage}
          alt={getLocalizedText(article.title, language)}
          fill
          className='object-cover'
          sizes='(max-width: 1024px) 100vw, 760px'
          priority
        />
      </div>
      <figcaption className='mt-2.5 text-xs text-[#757575] italic leading-relaxed'>
        {getLocalizedText(article.heroImageCaption, language)}
      </figcaption>
    </figure>
  );
}
