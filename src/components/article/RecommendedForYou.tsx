'use client';

import { useLanguage } from '@/hooks/use-language';
import { getLocalizedText } from '@/lib/i18n/bilingual';
import { RelatedArticles } from './RelatedArticles';
import type { ArticleRelatedItem } from '@/types/article';

interface RecommendedForYouProps {
  items: ArticleRelatedItem[];
}

export function RecommendedForYou({ items }: RecommendedForYouProps) {
  return <RelatedArticles title='আপনার জন্য' items={items} />;
}
