// ============================================================
// US BARTA — Core Content Types
// AI-ready data model for all content pillars
// ============================================================

// --- Enums ---

export type Language = 'bn' | 'en';

export type ContentCategory =
  | 'news'
  | 'immigration'
  | 'life-in-america'
  | 'education'
  | 'health'
  | 'jobs-career'
  | 'money-business'
  | 'islamic-life'
  | 'community'
  | 'entertainment';

export type ContentType =
  | 'breaking-news'
  | 'news'
  | 'explainer'
  | 'guide'
  | 'alert'
  | 'local-information'
  | 'resource'
  | 'directory-listing'
  | 'event'
  | 'community-story';

export type Urgency = 'critical' | 'high' | 'normal' | 'low';

export type Persona =
  | 'new-immigrant'
  | 'student'
  | 'parent'
  | 'professional'
  | 'business-owner'
  | 'senior'
  | 'family'
  | 'community-member';

export type LifeStage =
  | 'newly-arrived'
  | 'settling-in'
  | 'established'
  | 'growing-family'
  | 'retirement';

export type SourceType =
  | 'editorial'
  | 'community'
  | 'official'
  | 'ai-generated'
  | 'aggregated';

export type EntertainmentRegion = 'bangladesh' | 'india' | 'hollywood';

export type EntertainmentType =
  | 'movie'
  | 'tv'
  | 'ott'
  | 'celebrity'
  | 'music'
  | 'review'
  | 'trending'
  | 'gossip';

// --- Core Interfaces ---

export interface BilingualText {
  bn: string;
  en: string;
}

export interface GeoLocation {
  state: string;
  city?: string;
  county?: string;
  zipCode?: string;
}

export interface ContentTaxonomy {
  primaryCategory: ContentCategory;
  secondaryTopic?: string;
  geography: GeoLocation;
  audience: Persona[];
  lifeStage?: LifeStage[];
  contentType: ContentType;
  urgency: Urgency;
  language: Language;
  sourceType: SourceType;
  publishedAt: string;
  updatedAt?: string;
}

export interface ContentItem {
  id: string;
  slug: string;
  title: BilingualText;
  summary?: BilingualText;
  image?: string;
  taxonomy: ContentTaxonomy;
  // AI-readiness fields
  aiTags?: string[];
  aiSummary?: BilingualText;
  aiClassification?: string;
}

// --- Domain-Specific Items ---

export interface NewsItem extends ContentItem {
  source?: string;
  isBreaking?: boolean;
  readTimeMinutes?: number;
}

export interface ImmigrationItem extends ContentItem {
  visaType?: string;
  relatedForms?: string[];
  disclaimer?: BilingualText;
}

export interface EducationItem extends ContentItem {
  institution?: string;
  educationLevel?: 'k12' | 'community-college' | 'university' | 'vocational';
  isFAFSARelevant?: boolean;
}

export interface HealthItem extends ContentItem {
  disclaimer?: BilingualText;
  healthCategory?: 'insurance' | 'mental-health' | 'senior' | 'family' | 'nutrition' | 'fitness';
}

export interface JobItem extends ContentItem {
  company: BilingualText;
  location: GeoLocation;
  employmentType: 'full-time' | 'part-time' | 'remote' | 'internship';
  salaryRange?: string;
  applicationDeadline?: string;
  applicationUrl?: string;
}

export interface EventItem extends ContentItem {
  startDate: string;
  endDate?: string;
  venue: BilingualText;
  eventLocation: GeoLocation;
  isFree?: boolean;
  registrationUrl?: string;
}

export interface BusinessItem extends ContentItem {
  businessName: BilingualText;
  businessType: string;
  address?: string;
  phone?: string;
  website?: string;
  rating?: number;
  isHalal?: boolean;
  isCommunityOwned?: boolean;
}

export interface EntertainmentItem extends ContentItem {
  entertainmentRegion: EntertainmentRegion;
  entertainmentType?: EntertainmentType;
  rating?: number;
  releaseDate?: string;
}

// --- Utility Types ---

export interface WeatherData {
  location: GeoLocation;
  temperature: number;
  condition: BilingualText;
  high: number;
  low: number;
  forecast: DailyForecast[];
  icon?: string;
}

export interface DailyForecast {
  day: BilingualText;
  high: number;
  low: number;
  condition: BilingualText;
  icon?: string;
}

export interface MyUSBartaNotification {
  id: string;
  label: BilingualText;
  count: number;
  icon: string;
  category: ContentCategory;
  href?: string;
}

export interface RecommendationItem {
  content: ContentItem;
  reason: BilingualText;
  source: 'ai' | 'trending' | 'location' | 'followed';
}

export interface UserPreferences {
  language: Language;
  location: GeoLocation;
  followedCategories: ContentCategory[];
  savedItems: string[];
}

// --- Category Configuration ---

export interface CategoryConfig {
  slug: ContentCategory;
  label: BilingualText;
  icon: string; // Lucide icon name
  color?: string;
  priority: 'core' | 'early' | 'later';
}

export interface QueryOptions {
  category?: ContentCategory;
  location?: GeoLocation;
  persona?: Persona;
  language?: Language;
  limit?: number;
  offset?: number;
  sortBy?: 'publishedAt' | 'urgency' | 'relevance';
}

// --- Repository Interface (AI/API ready) ---

export interface ContentRepository<T extends ContentItem> {
  getAll(options?: QueryOptions): Promise<T[]>;
  getById(id: string): Promise<T | null>;
  getByCategory(category: ContentCategory, options?: QueryOptions): Promise<T[]>;
  getByLocation(location: GeoLocation): Promise<T[]>;
  search(query: string, options?: QueryOptions): Promise<T[]>;
}
