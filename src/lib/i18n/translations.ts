// ============================================================
// US BARTA — Bilingual Translations
// Comprehensive Bengali/English translation dictionary
// ============================================================

import type { BilingualText } from '@/types/content';

export const t = {
  // --- Brand ---
  brand: {
    name: 'US BARTA' as const,
    tagline: { bn: 'খবর, জীবন ও প্রয়োজন', en: 'News, Life & Necessities' } satisfies BilingualText,
  },

  // --- Navigation ---
  nav: {
    home: { bn: 'হোম', en: 'Home' },
    latest: { bn: 'সর্বশেষ', en: 'Latest' },
    forYou: { bn: 'আপনার জন্য', en: 'For You' },
    explore: { bn: 'এক্সপ্লোর', en: 'Explore' },
    more: { bn: 'আরও', en: 'More' },
    seeAll: { bn: 'সব দেখুন', en: 'See All' },
  },

  // --- Hero ---
  hero: {
    headline: {
      bn: 'বাংলাদেশি-আমেরিকানদের জন্য America-কে বোঝা ও জীবনকে সহজ করার AI-চালিত প্ল্যাটফর্ম।',
      en: 'An AI-powered platform for Bangladeshi-Americans to understand America and make life easier.',
    },
    subtitle: {
      bn: 'বাংলাদেশি-আমেরিকানদের জন্য বিশ্বস্ত বাংলা প্ল্যাটফর্ম',
      en: 'A Trusted Bangla Platform for Bangladeshi-Americans',
    },
    microcopy: {
      bn: 'খবর • তথ্য • নির্দেশনা • স্থানীয় সংযোগ',
      en: 'News • Information • Guidance • Local Connection',
    },
    ctaPrimary: {
      bn: 'আজকের গুরুত্বপূর্ণ খবর',
      en: "Today's Important News",
    },
    ctaSecondary: {
      bn: 'My US BARTA দেখুন',
      en: 'View My US BARTA',
    },
  },

  // --- Categories ---
  categories: {
    news: { bn: 'খবর', en: 'News' },
    immigration: { bn: 'ইমিগ্রেশন', en: 'Immigration' },
    'life-in-america': { bn: 'আমেরিকায় জীবন', en: 'Life in America' },
    education: { bn: 'শিক্ষা', en: 'Education' },
    health: { bn: 'স্বাস্থ্য', en: 'Health' },
    'jobs-career': { bn: 'কাজ ও ক্যারিয়ার', en: 'Jobs & Career' },
    'money-business': { bn: 'টাকা ও ব্যবসা', en: 'Money & Business' },
    'islamic-life': { bn: 'ইসলামিক লাইফ', en: 'Islamic Life' },
    community: { bn: 'কমিউনিটি', en: 'Community' },
    entertainment: { bn: 'বিনোদন', en: 'Entertainment' },
  },

  // --- Quick Access ---
  quickAccess: {
    title: { bn: 'দ্রুত অ্যাক্সেস', en: 'Quick Access' },
  },

  // --- Sections ---
  sections: {
    todaysNews: { bn: 'আজকের গুরুত্বপূর্ণ খবর', en: "Today's Important News" },
    immigration: { bn: 'ইমিগ্রেশন আপডেট', en: 'Immigration Updates' },
    educationHealth: { bn: 'শিক্ষা ও স্বাস্থ্য', en: 'Education & Health' },
    islamicCommunity: { bn: 'ইসলামিক লাইফ ও কমিউনিটি', en: 'Islamic Life & Community' },
    jobsEvents: { bn: 'চাকরি ও ইভেন্টস', en: 'Jobs & Events' },
    entertainment: { bn: 'বিনোদন', en: 'Entertainment' },
    businessDirectory: { bn: 'ব্যবসায়ী ডিরেক্টরি', en: 'Business Directory' },
  },

  // --- Sidebar ---
  sidebar: {
    myUSBarta: { bn: 'My US BARTA', en: 'My US BARTA' },
    greeting: {
      bn: 'স্বাগতম, আসসালামু আলাইকুম',
      en: 'Welcome, Assalamu Alaikum',
    },
    dashboard: { bn: 'My Dashboard দেখুন', en: 'View My Dashboard' },
    weather: { bn: 'আবহাওয়া', en: 'Weather' },
    socialConnect: { bn: 'সাথে থাকুন', en: 'Stay Connected' },
    newsletter: { bn: 'US BARTA Newsletter', en: 'US BARTA Newsletter' },
    newsletterDesc: {
      bn: 'প্রতিদিন গুরুত্বপূর্ণ খবর ও তথ্য সরাসরি আপনার ইনবক্সে পান',
      en: 'Get important news and information delivered to your inbox daily',
    },
    subscribe: { bn: 'সাবস্ক্রাইব করুন', en: 'Subscribe' },
    emailPlaceholder: { bn: 'আপনার ইমেইল', en: 'Your email' },
    promoTitle: {
      bn: 'আপনার ব্যবসা তালিকাভুক্ত করুন',
      en: 'List Your Business',
    },
    promoDesc: {
      bn: 'হাজারো বাংলাদেশি-আমেরিকানের কাছে আপনার ব্যবসার বিজ্ঞাপন দিন',
      en: 'Advertise your business to thousands of Bangladeshi-Americans',
    },
    promoCta: { bn: 'বিজ্ঞাপন দিন', en: 'Advertise Now' },
  },

  // --- My US BARTA Notifications ---
  notifications: {
    immigration: { bn: 'ইমিগ্রেশন আপডেট', en: 'Immigration Updates' },
    jobs: { bn: 'নতুন চাকরি', en: 'New Jobs' },
    education: { bn: 'শিক্ষা আপডেট', en: 'Education Updates' },
    health: { bn: 'স্বাস্থ্য টিপস', en: 'Health Tips' },
    islamic: { bn: 'ইসলামিক রিমাইন্ডার', en: 'Islamic Reminders' },
    local: { bn: 'লোকাল আপডেট', en: 'Local Updates' },
  },

  // --- Weather ---
  weather: {
    label: { bn: 'আবহাওয়া', en: 'Weather' },
    sunny: { bn: 'রৌদ্রোজ্জ্বল', en: 'Sunny' },
    cloudy: { bn: 'মেঘলা', en: 'Cloudy' },
    rainy: { bn: 'বৃষ্টি', en: 'Rainy' },
    partlyCloudy: { bn: 'আংশিক মেঘলা', en: 'Partly Cloudy' },
    high: { bn: 'সর্বোচ্চ', en: 'High' },
    low: { bn: 'সর্বনিম্ন', en: 'Low' },
    days: {
      sat: { bn: 'শনি', en: 'Sat' },
      sun: { bn: 'রবি', en: 'Sun' },
      mon: { bn: 'সোম', en: 'Mon' },
      tue: { bn: 'মঙ্গল', en: 'Tue' },
      wed: { bn: 'বুধ', en: 'Wed' },
      thu: { bn: 'বৃহঃ', en: 'Thu' },
      fri: { bn: 'শুক্র', en: 'Fri' },
    },
  },

  // --- Entertainment ---
  entertainment: {
    bangladesh: { bn: 'বাংলাদেশ', en: 'Bangladesh' },
    india: { bn: 'ভারত', en: 'India' },
    hollywood: { bn: 'হলিউড', en: 'Hollywood' },
  },

  // --- Search ---
  search: {
    placeholder: {
      bn: 'খবর, চাকরি, ব্যবসা, ইমিগ্রেশন, ইভেন্ট খুঁজুন…',
      en: 'Search news, jobs, businesses, immigration, events…',
    },
  },

  // --- Footer ---
  footer: {
    about: { bn: 'সম্পর্কিত', en: 'About' },
    categories: { bn: 'ক্যাটাগরি', en: 'Categories' },
    support: { bn: 'সমর্থন', en: 'Support' },
    contact: { bn: 'যোগাযোগ', en: 'Contact' },
    aboutUs: { bn: 'আমাদের সম্পর্কে', en: 'About Us' },
    privacyPolicy: { bn: 'গোপনীয়তা নীতি', en: 'Privacy Policy' },
    termsOfService: { bn: 'সেবার শর্তাবলী', en: 'Terms of Service' },
    faq: { bn: 'সাধারণ প্রশ্ন', en: 'FAQ' },
    advertise: { bn: 'বিজ্ঞাপন', en: 'Advertise' },
    copyright: { bn: '© ২০১৬ US BARTA. সর্বস্বত্ব সংরক্ষিত।', en: '© 2016 US BARTA. All rights reserved.' },
    description: {
      bn: 'বাংলাদেশি-আমেরিকানদের জন্য বিশ্বস্ত বাংলা প্ল্যাটফর্ম। খবর, তথ্য, নির্দেশনা ও কমিউনিটি সংযোগ।',
      en: 'A trusted Bangla platform for Bangladeshi-Americans. News, information, guidance, and community connection.',
    },
  },

  // --- Jobs ---
  jobs: {
    fullTime: { bn: 'ফুল-টাইম', en: 'Full-time' },
    partTime: { bn: 'পার্ট-টাইম', en: 'Part-time' },
    remote: { bn: 'রিমোট', en: 'Remote' },
    internship: { bn: 'ইন্টার্নশিপ', en: 'Internship' },
    apply: { bn: 'আবেদন করুন', en: 'Apply' },
  },

  // --- Events ---
  events: {
    free: { bn: 'বিনামূল্যে', en: 'Free' },
    register: { bn: 'নিবন্ধন করুন', en: 'Register' },
    upcoming: { bn: 'আসন্ন ইভেন্টসমূহ', en: 'Upcoming Events' },
  },

  // --- Common ---
  common: {
    views: { bn: 'বার', en: 'views' },
    readMore: { bn: 'আরও পড়ুন', en: 'Read More' },
    loading: { bn: 'লোড হচ্ছে...', en: 'Loading...' },
    noResults: { bn: 'কোনো ফলাফল নেই', en: 'No results found' },
    save: { bn: 'সংরক্ষণ', en: 'Save' },
    share: { bn: 'শেয়ার', en: 'Share' },
  },
} as const;

// Type for accessing translation sections
export type TranslationNamespace = keyof typeof t;
export type TranslationKey<N extends TranslationNamespace> = keyof typeof t[N];
