import type { HealthItem } from '@/types/content';

const healthDisclaimer: { bn: string; en: string } = {
  bn: 'সতর্কতা: এই স্বাস্থ্য তথ্য সাধারণ সচেতনতার জন্য। এটি পেশাদার চিকিৎসা পরামর্শের বিকল্প নয়। কোনো স্বাস্থ্য সমস্যায় দয়া করে লাইসেন্সপ্রাপ্ত চিকিৎসকের পরামর্শ নিন।',
  en: 'Disclaimer: This health information is for general awareness only. It is not a substitute for professional medical advice. For any health concerns, please consult a licensed physician.',
};

export const mockHealth: HealthItem[] = [
  {
    id: 'health-1',
    slug: 'ny-health-insurance-open-enrollment-2025',
    title: {
      bn: 'নিউইয়র্ক স্বাস্থ্য বীমা: ওপেন এনরোলমেন্ট গাইড ২০২৫',
      en: 'New York Health Insurance: Open Enrollment Guide 2025',
    },
    summary: {
      bn: 'নিউইয়র্ক স্টেট অব হেলথের মাধ্যমে স্বল্প আয়ের বাসিন্দাদের জন্য বিনামূল্যে বা কম খরচে স্বাস্থ্য বীমা পাওয়া সম্ভব। এসেনশিয়াল প্ল্যান, মেডিকেয়ার সেভিংস প্রোগ্রাম এবং চাইল্ড হেলথ প্লাস সম্পর্কে বিস্তারিত তথ্য এবং আবেদন প্রক্রিয়া।',
      en: 'Low-income New York residents may qualify for free or low-cost health insurance through NY State of Health. Detailed information and application process for Essential Plan, Medicare Savings Program, and Child Health Plus.',
    },
    image: '/images/health-1.png',
    taxonomy: {
      primaryCategory: 'health',
      secondaryTopic: 'Health Insurance',
      geography: { state: 'NY', city: 'Jackson Heights' },
      audience: ['new-immigrant', 'parent', 'family', 'senior'],
      contentType: 'guide',
      urgency: 'high',
      language: 'bn',
      sourceType: 'editorial',
      publishedAt: '2025-06-13T08:00:00Z',
    },
    disclaimer: healthDisclaimer,
    healthCategory: 'insurance',
    aiTags: ['health insurance', 'NY State of Health', 'Essential Plan', 'Medicaid', 'open enrollment'],
  },
  {
    id: 'health-2',
    slug: 'medicaid-eligibility-new-immigrants-ny',
    title: {
      bn: 'নতুন অভিবাসীদের জন্য মেডিকেইড যোগ্যতা: নিউইয়র্ক স্টেট',
      en: 'Medicaid Eligibility for New Immigrants in New York State',
    },
    summary: {
      bn: 'নিউইয়র্ক স্টেটে অনেক নতুন অভিবাসী মেডিকেইডের জন্য যোগ্য হতে পারেন, এমনকি যাদের ইমিগ্রেশন স্ট্যাটাস এখনও চলমান থাকলেও। আয়ের সীমা, প্রয়োজনীয় কাগজপত্র এবং আবেদন পদ্ধতি সম্পর্কে বিস্তারিত জানুন। জ্যাকসন হাইটসে সহায়তা পাওয়ার ঠিকানাও দেওয়া হয়েছে।',
      en: 'Many new immigrants in New York State may qualify for Medicaid, even those with pending immigration status. Learn about income limits, required documents, and the application process. Locations for assistance in Jackson Heights are also provided.',
    },
    image: '/images/health-2.png',
    taxonomy: {
      primaryCategory: 'health',
      secondaryTopic: 'Medicaid',
      geography: { state: 'NY', city: 'Jackson Heights', county: 'Queens' },
      audience: ['new-immigrant', 'family', 'senior', 'parent'],
      contentType: 'guide',
      urgency: 'normal',
      language: 'bn',
      sourceType: 'editorial',
      publishedAt: '2025-06-11T10:00:00Z',
    },
    disclaimer: healthDisclaimer,
    healthCategory: 'insurance',
    aiTags: ['Medicaid', 'new immigrants', 'NY State', 'health coverage', 'Jackson Heights'],
  },
  {
    id: 'health-3',
    slug: 'mental-health-resources-bengali-community-nyc',
    title: {
      bn: 'মানসিক স্বাস্থ্য সেবা: নিউইয়র্কে বাংলাভাষীদের জন্য সহায়তা',
      en: 'Mental Health Services: Support for Bengali Speakers in New York',
    },
    summary: {
      bn: 'মানসিক স্বাস্থ্য সমস্যা নিয়ে কথা বলতে অনেকেই দ্বিধাবোধ করেন। নিউইয়র্কে বাংলায় মানসিক স্বাস্থ্য সেবা পাওয়ার বিভিন্ন উপায় রয়েছে। ক্রাইসিস কাউন্সিলিং, কমিউনিটি সাপোর্ট গ্রুপ এবং বিনামূল্যে থেরাপি সেবার তালিকা এখানে দেওয়া হলো। আপনি একা নন।',
      en: 'Many people hesitate to talk about mental health issues. There are various ways to access mental health services in Bangla in New York. A list of crisis counseling, community support groups, and free therapy services is provided here. You are not alone.',
    },
    image: '/images/health-1.png',
    taxonomy: {
      primaryCategory: 'health',
      secondaryTopic: 'Mental Health',
      geography: { state: 'NY', city: 'Jackson Heights' },
      audience: ['community-member', 'student', 'new-immigrant', 'family'],
      contentType: 'resource',
      urgency: 'normal',
      language: 'bn',
      sourceType: 'editorial',
      publishedAt: '2025-06-10T09:00:00Z',
    },
    disclaimer: healthDisclaimer,
    healthCategory: 'mental-health',
    aiTags: ['mental health', 'Bengali services', 'therapy', 'counseling', 'crisis support', 'NYC'],
  },
];
