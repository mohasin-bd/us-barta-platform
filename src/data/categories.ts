import type { CategoryConfig, ContentCategory } from '@/types/content';

/**
 * Dynamic "আরও {category} পড়ুন" heading for the bottom discovery section.
 * Maps each category slug to its discovery section heading in Bangla.
 */
export const discoveryHeadings: Record<ContentCategory, string> = {
  news: 'আরও সংবাদ পড়ুন',
  immigration: 'আরও ইমিগ্রেশন পড়ুন',
  'life-in-america': 'আরও আমেরিকার জীবন পড়ুন',
  education: 'আরও শিক্ষা পড়ুন',
  health: 'আরও স্বাস্থ্য বিষয়ক খবর',
  'islamic-life': 'আরও ইসলামিক জীবন পড়ুন',
  community: 'আরও কমিউনিটি খবর পড়ুন',
  'jobs-career': 'আরও চাকরি ও ক্যারিয়ার পড়ুন',
  entertainment: 'আরও বিনোদন পড়ুন',
  'money-business': 'আরও অর্থ ও ব্যবসার খবর পড়ুন',
};

export const categories: CategoryConfig[] = [
  {
    slug: 'news',
    label: {
      bn: 'সংবাদ',
      en: 'News',
    },
    icon: 'Newspaper',
    priority: 'core',
  },
  {
    slug: 'immigration',
    label: {
      bn: 'ইমিগ্রেশন',
      en: 'Immigration',
    },
    icon: 'ShieldCheck',
    priority: 'core',
  },
  {
    slug: 'life-in-america',
    label: {
      bn: 'আমেরিকার জীবন',
      en: 'Life in America',
    },
    icon: 'Home',
    priority: 'core',
  },
  {
    slug: 'education',
    label: {
      bn: 'শিক্ষা',
      en: 'Education',
    },
    icon: 'GraduationCap',
    priority: 'core',
  },
  {
    slug: 'health',
    label: {
      bn: 'স্বাস্থ্য',
      en: 'Health',
    },
    icon: 'Heart',
    priority: 'core',
  },
  {
    slug: 'islamic-life',
    label: {
      bn: 'ইসলামী জীবন',
      en: 'Islamic Life',
    },
    icon: 'Moon',
    priority: 'core',
  },
  {
    slug: 'community',
    label: {
      bn: 'কমিউনিটি',
      en: 'Community',
    },
    icon: 'Users',
    priority: 'core',
  },
  {
    slug: 'jobs-career',
    label: {
      bn: 'চাকরি ও ক্যারিয়ার',
      en: 'Jobs & Career',
    },
    icon: 'Briefcase',
    priority: 'early',
  },
  {
    slug: 'entertainment',
    label: {
      bn: 'বিনোদন',
      en: 'Entertainment',
    },
    icon: 'Film',
    priority: 'early',
  },
  {
    slug: 'money-business',
    label: {
      bn: 'অর্থ ও ব্যবসা',
      en: 'Money & Business',
    },
    icon: 'DollarSign',
    priority: 'later',
  },
];

/**
 * Helper to get the discovery heading for a given category.
 */
export function getDiscoveryHeading(category: ContentCategory): string {
  return discoveryHeadings[category] || 'আরও পড়ুন';
}
