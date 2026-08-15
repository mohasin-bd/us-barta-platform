import type { RecommendationItem } from '@/types/content';

export const mockRecommendations: RecommendationItem[] = [
  {
    content: {
      id: 'rec-1',
      slug: 'uscis-fee-change-recommendation',
      title: {
        bn: 'ইউএসসিআইএস ফি বৃদ্ধি: আপনার করণীয়',
        en: 'USCIS Fee Increase: What You Should Do',
      },
      summary: {
        bn: 'অক্টোবরের আগে গ্রিন কার্ড আবেদন জমা দিলে বর্তমান ফিতে সুবিধা পাবেন। বিস্তারিত গাইড পড়ুন।',
        en: 'Submit your Green Card application before October to take advantage of current fees. Read the detailed guide.',
      },
      taxonomy: {
        primaryCategory: 'immigration',
        geography: { state: 'NY', city: 'Jackson Heights' },
        audience: ['new-immigrant', 'family'],
        contentType: 'alert',
        urgency: 'high',
        language: 'bn',
        sourceType: 'editorial',
        publishedAt: '2025-06-15T08:00:00Z',
      },
      aiTags: ['USCIS', 'fee', 'action needed'],
    },
    reason: {
      bn: 'আপনি ইমিগ্রেশন আপডেট অনুসরণ করেন বলে এই গুরুত্বপূর্ণ তথ্যটি আপনার জন্য সুপারিশ করা হচ্ছে।',
      en: 'This important information is recommended for you because you follow immigration updates.',
    },
    source: 'ai',
  },
  {
    content: {
      id: 'rec-2',
      slug: 'accounting-job-recommendation',
      title: {
        bn: 'স্টাফ অ্যাকাউন্ট্যান্ট: আপনার প্রোফাইলের সাথে মিলেছে',
        en: 'Staff Accountant: Matched With Your Profile',
      },
      summary: {
        bn: 'জ্যাকসন হাইটসে বাংলাদেশি মালিকানাধীন ফার্মে স্টাফ অ্যাকাউন্ট্যান্ট পদে নিয়োগ। বাংলা ও ইংরেজি জানলে অগ্রাধিকার।',
        en: 'Staff Accountant position at a Bangladeshi-owned firm in Jackson Heights. Bilingual preferred.',
      },
      taxonomy: {
        primaryCategory: 'jobs-career',
        geography: { state: 'NY', city: 'Jackson Heights' },
        audience: ['professional'],
        contentType: 'directory-listing',
        urgency: 'normal',
        language: 'bn',
        sourceType: 'editorial',
        publishedAt: '2025-06-14T10:00:00Z',
      },
      aiTags: ['job match', 'accounting', 'Jackson Heights'],
    },
    reason: {
      bn: 'আপনার দক্ষতা ও অবস্থানের উপর ভিত্তি করে এই চাকরিটি আপনার জন্য মিলেছে।',
      en: 'This job was matched for you based on your skills and location.',
    },
    source: 'ai',
  },
  {
    content: {
      id: 'rec-3',
      slug: 'fafsa-deadline-recommendation',
      title: {
        bn: 'এফএএফএসএ ডেডলাইন বাড়ানো হয়েছে — এখনই আবেদন করুন',
        en: 'FAFSA Deadline Extended — Apply Now',
      },
      summary: {
        bn: 'ফেডারেল আর্থিক সহায়তার জন্য এফএএফএসএ আবেদনের নতুন সময়সীমা সেপ্টেম্বর ১৫।',
        en: 'The new deadline for FAFSA financial aid applications is September 15.',
      },
      taxonomy: {
        primaryCategory: 'education',
        geography: { state: 'NY', city: 'Jackson Heights' },
        audience: ['parent', 'student'],
        contentType: 'guide',
        urgency: 'high',
        language: 'bn',
        sourceType: 'editorial',
        publishedAt: '2025-06-14T09:00:00Z',
      },
      aiTags: ['FAFSA', 'deadline', 'financial aid', 'college'],
    },
    reason: {
      bn: 'আপনার অভিভাবক প্রোফাইলের কারণে এই শিক্ষা তথ্যটি আপনার জন্য প্রাসঙ্গিক।',
      en: 'This education information is relevant for you because of your parent profile.',
    },
    source: 'ai',
  },
  {
    content: {
      id: 'rec-4',
      slug: 'health-insurance-recommendation',
      title: {
        bn: 'স্বাস্থ্য বীমা গাইড: আপনি যোগ্য হতে পারেন',
        en: 'Health Insurance Guide: You May Be Eligible',
      },
      summary: {
        bn: 'নিউইয়র্কে স্বল্প আয়ের বাসিন্দাদের জন্য বিনামূল্যে বা কম খরচে স্বাস্থ্য বীমা পাওয়া সম্ভব।',
        en: 'Free or low-cost health insurance may be available for low-income New York residents.',
      },
      taxonomy: {
        primaryCategory: 'health',
        geography: { state: 'NY', city: 'Jackson Heights' },
        audience: ['new-immigrant', 'family'],
        contentType: 'guide',
        urgency: 'high',
        language: 'bn',
        sourceType: 'editorial',
        publishedAt: '2025-06-13T08:00:00Z',
      },
      aiTags: ['health insurance', 'NY State of Health', 'eligibility'],
    },
    reason: {
      bn: 'আপনার এলাকায় অনেক বাসিন্দা এই সুবিধা নিচ্ছেন। আপনিও যোগ্য কিনা দেখুন।',
      en: 'Many residents in your area are using this benefit. Check if you are eligible too.',
    },
    source: 'location',
  },
  {
    content: {
      id: 'rec-5',
      slug: 'eid-prayer-times-recommendation',
      title: {
        bn: 'ঈদুল আযহার নামাজের সময়সূচী ঘোষণা',
        en: 'Eid ul Adha Prayer Schedule Announced',
      },
      summary: {
        bn: 'জ্যাকসন হাইটসের মসজিদ ও ঈদগাহে ঈদের নামাজের সময় ও দিকনির্দেশনা।',
        en: 'Eid prayer times and directions for mosques and Eidgah in Jackson Heights.',
      },
      taxonomy: {
        primaryCategory: 'islamic-life',
        geography: { state: 'NY', city: 'Jackson Heights' },
        audience: ['community-member', 'family'],
        contentType: 'local-information',
        urgency: 'high',
        language: 'bn',
        sourceType: 'editorial',
        publishedAt: '2025-06-14T07:00:00Z',
      },
      aiTags: ['Eid', 'prayer times', 'mosque', 'Jackson Heights'],
    },
    reason: {
      bn: 'ঈদুল আযহা আসছে। আপনার এলাকার নামাজের সময়সূচী জেনে নিন।',
      en: 'Eid ul Adha is approaching. Know the prayer schedule for your area.',
    },
    source: 'trending',
  },
  {
    content: {
      id: 'rec-6',
      slug: 'community-fair-recommendation',
      title: {
        bn: 'জ্যাকসন হাইটস কমিউনিটি মেলা: এই শনিবার',
        en: 'Jackson Heights Community Fair: This Saturday',
      },
      summary: {
        bn: '২২ জুন ট্রাম্পলেয়ার পার্কে বার্ষিক বাংলা কমিউনিটি মেলা। বিনামূল্যে প্রবেশ।',
        en: 'Annual Bangla Community Fair at Travers Park on June 22. Free admission.',
      },
      taxonomy: {
        primaryCategory: 'community',
        geography: { state: 'NY', city: 'Jackson Heights' },
        audience: ['community-member', 'family'],
        contentType: 'event',
        urgency: 'normal',
        language: 'bn',
        sourceType: 'editorial',
        publishedAt: '2025-06-13T12:00:00Z',
      },
      aiTags: ['community fair', 'Jackson Heights', 'free', 'this weekend'],
    },
    reason: {
      bn: 'আপনার কাছাকাছি এলাকায় এই সপ্তাহান্তে একটি জনপ্রিয় অনুষ্ঠান হচ্ছে।',
      en: 'A popular event is happening near you this weekend.',
    },
    source: 'location',
  },
];
