import type { CategoryConfig } from '@/types/content';

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
      bn: 'সম্প্রদায়',
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
