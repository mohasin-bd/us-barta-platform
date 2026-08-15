'use client';

import { useLanguage } from '@/hooks/use-language';
import { getLocalizedText } from '@/lib/i18n/bilingual';
import { CategoryBadge } from '@/components/common/CategoryBadge';
import { AuthorInfo } from './AuthorInfo';
import { ArticleShare } from './ArticleShare';
import type { Article } from '@/types/article';

interface ArticleHeaderProps {
  article: Article;
}

export function ArticleHeader({ article }: ArticleHeaderProps) {
  const language = useLanguage();

  const formattedDate = new Date(article.publishedAt).toLocaleDateString('bn-BD', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className='mb-6'>
      <CategoryBadge category={article.category} />

      <h1 className='mt-3 text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#212121] leading-[1.35] tracking-tight'>
        {getLocalizedText(article.title, language)}
      </h1>

      <p className='mt-3 text-base sm:text-lg text-[#616161] leading-relaxed'>
        {getLocalizedText(article.summary, language)}
      </p>

      <div className='mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
        <div className='flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#757575]'>
          <span>প্রকাশিত: {formattedDate}</span>
          <span>•</span>
          <span>আপডেট: {formattedDate}</span>
          <span>•</span>
          <span>{article.readTimeMinutes} মিনিট পড়তে</span>
        </div>
        <ArticleShare />
      </div>

      <div className='mt-4'>
        <AuthorInfo article={article} />
      </div>
    </header>
  );
}
