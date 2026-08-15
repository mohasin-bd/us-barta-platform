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

// ============================================================
// Business / Service Recommendation Types
// Reusable for contextual sidebar monetization layer
// ============================================================

export type ListingType = 'organic' | 'featured';

export type BusinessCategory =
  | 'immigration-attorney'
  | 'tax-consultant'
  | 'realtor'
  | 'doctor'
  | 'education-consultant'
  | 'legal-services'
  | 'career-services'
  | 'insurance'
  | 'financial-advisor'
  | 'community-organization'
  | 'other';

/**
 * Maps US BARTA content categories to relevant business categories.
 * Used by the recommendation engine to surface contextual services.
 */
export const categoryToBusinessMap: Partial<Record<ContentCategory, BusinessCategory[]>> = {
  immigration: ['immigration-attorney', 'legal-services'],
  'life-in-america': ['realtor', 'insurance', 'financial-advisor'],
  education: ['education-consultant', 'career-services'],
  health: ['doctor', 'insurance'],
  'jobs-career': ['career-services', 'education-consultant'],
  'money-business': ['tax-consultant', 'financial-advisor', 'legal-services'],
  community: ['community-organization', 'legal-services'],
};

export interface BusinessListing {
  id: string;
  name: string;
  /** Professional tagline or short description */
  tagline?: string;
  /** Specialties / service areas shown as chips */
  specialties: string[];
  location: {
    city: string;
    state: string;
    neighborhood?: string;
  };
  rating: number;
  reviewCount?: number;
  /** Distance from user, e.g. "0.3 mi" — populated when user location is known */
  distance?: string;
  /** Phone for click-to-call */
  phone?: string;
  /** Profile / listing URL */
  profileUrl?: string;
  /** Organic (contextual match) or Featured (sponsored) */
  listingType: ListingType;
  /** Which US BARTA content categories this listing is relevant for */
  relevantCategories: ContentCategory[];
  /** Business category for classification */
  businessCategory: BusinessCategory;
  /** Why this business is recommended — shown as contextual subtitle */
  recommendationReason?: string;
}

export interface ArticlePageData {
  article: Article;
  /** Contextual business/service recommendations for sidebar */
  sidebarBusinesses: BusinessListing[];
  /** Broader editorial discovery — bottom of article */
  categoryDiscovery: ArticleRelatedItem[];
}
