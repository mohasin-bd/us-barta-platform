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

export type ListingType = 'organic' | 'featured' | 'sponsored';

/**
 * Visual identity type for a business listing.
 * Determines how the thumbnail/logo area is rendered.
 *
 * 'logo'       → Business/company/organization logo (law firm, restaurant, legal aid, etc.)
 * 'headshot'   → Professional headshot (individual attorney, doctor, agent, etc.)
 */
export type BusinessImageType = 'logo' | 'headshot';

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
  /** Type of business entity for visual identity decisions */
  businessType?: string;
  /** Specialties / service areas shown as chips (2-4 recommended) */
  specialties: string[];

  // --- Visual identity ---
  /** Business logo URL (for law firms, companies, organizations) */
  logoUrl?: string;
  /** Professional headshot URL (for individual attorneys, doctors, agents) */
  profileImageUrl?: string;
  /** Which image to show: 'logo' or 'headshot' */
  imageType: BusinessImageType;
  /** Verified by US BARTA (optional badge) */
  verified?: boolean;

  // --- Location ---
  location: {
    city: string;
    state: string;
    neighborhood?: string;
  };
  /** Distance from user, e.g. "0.3 mi" — populated when user location is known */
  distance?: string;

  // --- Trust signals ---
  rating: number;
  reviewCount?: number;

  // --- Contact ---
  /** Phone for click-to-call */
  phone?: string;
  /** Website URL */
  website?: string;
  /** Profile / listing URL on US BARTA */
  profileUrl?: string;

  // --- Languages ---
  /** Languages spoken, e.g. ['বাংলা', 'English', 'Hindi'] */
  languages?: string[];

  // --- Listing classification ---
  /** Organic, Featured, or Sponsored */
  listingType: ListingType;
  /** Which US BARTA content categories this listing is relevant for */
  relevantCategories: ContentCategory[];
  /** Business category for classification */
  businessCategory: BusinessCategory;
  /** Subcategories for fine-grained matching */
  subcategories?: string[];
  /** Target audience segments */
  targetAudience?: string[];
  /** Service area (cities, states, or "nationwide") */
  serviceArea?: string[];

  // --- Recommendation intelligence ---
  /** Why this business is recommended — shown as contextual subtitle */
  recommendationReason?: string;
  /** Algorithmic relevance score (0-1) — not displayed, used for sorting */
  relevanceScore?: number;
}

export interface ArticlePageData {
  article: Article;
  /** Contextual business/service recommendations for sidebar */
  sidebarBusinesses: BusinessListing[];
  /** Broader editorial discovery — bottom of article */
  categoryDiscovery: ArticleRelatedItem[];
}
