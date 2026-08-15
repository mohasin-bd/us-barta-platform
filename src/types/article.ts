// ============================================================
// US BARTA — Article Page Types
// Reusable types for the article reading experience
// ============================================================

import type { BilingualText, ContentCategory, GeoLocation, Persona } from './content';

export interface ArticleAuthor {
  name: string;
  avatar?: string;
  title?: string;
}

export interface ArticleSEO {
  title?: string;
  description?: string;
  ogImage?: string;
  tags?: string[];
}

export interface ArticleRelatedItem {
  id: string;
  slug: string;
  title: BilingualText;
  summary?: BilingualText;
  image?: string;
  category: ContentCategory;
  categoryLabel: BilingualText;
  publishedAt: string;
  readTimeMinutes?: number;
}

export interface ArticleBodySection {
  type: 'paragraph' | 'heading' | 'bullet-list' | 'highlight-box' | 'structured-list' | 'disclaimer' | 'practical-steps';
  content: string;
  title?: string;
  items?: string[];
  structuredItems?: { label: string; description: string }[];
}

export interface Article {
  id: string;
  slug: string;
  title: BilingualText;
  summary: BilingualText;
  category: ContentCategory;
  categoryLabel: BilingualText;
  heroImage: string;
  heroImageCaption: BilingualText;
  author: ArticleAuthor;
  publishedAt: string;
  updatedAt: string;
  readTimeMinutes: number;
  body: ArticleBodySection[];
  tags: string[];
  seo: ArticleSEO;
  relatedArticles: ArticleRelatedItem[];
  disclaimer?: BilingualText;
  geography?: GeoLocation;
  audience?: Persona[];
}

export interface ArticlePageData {
  article: Article;
  sidebarRelated: ArticleRelatedItem[];
  sidebarNews: ArticleRelatedItem[];
  categoryDiscovery: ArticleRelatedItem[];
}
