import type { ContentItem } from '@/types/content';

export const mockCommunity: ContentItem[] = [
  {
    id: 'community-1',
    slug: 'jackson-heights-bengali-community-fair-2025',
    title: {
      bn: 'জ্যাকসন হাইটস বাংলা কমিউনিটি মেলা ২০২৫',
      en: 'Jackson Heights Bangla Community Fair 2025',
    },
    summary: {
      bn: 'আগামী ২২ জুন জ্যাকসন হাইটসে বার্ষিক বাংলা কমিউনিটি মেলা অনুষ্ঠিত হবে। বাংলাদেশি খাবার, সাংস্কৃতিক অনুষ্ঠান, শিশুদের খেলাধুলা এবং স্বাস্থ্য সেবা শিবির থাকবে। প্রবেশ বিনামূল্যে। সবাইকে আমন্ত্রণ জানানো হচ্ছে।',
      en: 'The annual Bangla Community Fair will be held in Jackson Heights on June 22. Features include Bangladeshi food, cultural programs, children\'s sports, and a health camp. Free admission. Everyone is invited.',
    },
    image: undefined,
    taxonomy: {
      primaryCategory: 'community',
      secondaryTopic: 'Community Fair',
      geography: { state: 'NY', city: 'Jackson Heights', county: 'Queens' },
      audience: ['community-member', 'family', 'parent', 'new-immigrant'],
      contentType: 'event',
      urgency: 'normal',
      language: 'bn',
      sourceType: 'editorial',
      publishedAt: '2025-06-13T13:00:00Z',
    },
    aiTags: ['community fair', 'Jackson Heights', 'Bangladeshi', 'cultural event', 'free event'],
  },
  {
    id: 'community-2',
    slug: 'bangladeshi-diaspora-scientist-nasa-achievement',
    title: {
      bn: 'নাসায় বাংলাদেশি বংশোদ্ভূত বিজ্ঞানীর অভূতপূর্ব সাফল্য',
      en: 'Bangladeshi-Origin Scientist Achieves Breakthrough at NASA',
    },
    summary: {
      bn: 'ড. রাশেদুল হক, যিনি ঢাকা বিশ্ববিদ্যালয় থেকে পদার্থবিদ্যায় স্নাতক করেছেন, এখন নাসায় একটি গুরুত্বপূর্ণ মহাকাশ মিশনের নেতৃত্ব দিচ্ছেন। তাঁর গল্প প্রবাসী বাংলাদেশি তরুণদের জন্য অনুপ্রেরণা। সাক্ষাৎকারে তিনি তাঁর যাত্রা সম্পর্কে কথা বলেছেন।',
      en: 'Dr. Rashidul Haq, who graduated in physics from the University of Dhaka, is now leading a major space mission at NASA. His story is an inspiration for young expatriate Bangladeshis. In an interview, he spoke about his journey.',
    },
    image: undefined,
    taxonomy: {
      primaryCategory: 'community',
      secondaryTopic: 'Diaspora Achievement',
      geography: { state: 'NY', city: 'Jackson Heights' },
      audience: ['community-member', 'student', 'professional', 'family'],
      contentType: 'community-story',
      urgency: 'low',
      language: 'bn',
      sourceType: 'editorial',
      publishedAt: '2025-06-12T15:00:00Z',
    },
    aiTags: ['NASA', 'Bangladeshi scientist', 'diaspora', 'inspiration', 'science'],
  },
  {
    id: 'community-3',
    slug: 'volunteer-jackson-heights-food-pantry',
    title: {
      bn: 'স্বেচ্ছাসেবী সুযোগ: জ্যাকসন হাইটস ফুড প্যান্ট্রিতে সাহায্য করুন',
      en: 'Volunteer Opportunity: Help at Jackson Heights Food Pantry',
    },
    summary: {
      bn: 'জ্যাকসন হাইটস কমিউনিটি ফুড প্যান্ট্রি স্বেচ্ছাসেবীদের খুঁজছে। প্রতি সপ্তাহের শনিবার সকালে খাদ্য বিতরণে সাহায্য করতে পারবেন। বাংলা ভাষায় কথা বলতে পারলে অতিরিক্ত সুবিধা। সম্প্রদায়ের প্রয়োজনে এগিয়ে আসুন।',
      en: 'The Jackson Heights Community Food Pantry is looking for volunteers. You can help with food distribution every Saturday morning. Bengali language skills are a plus. Step forward for the needs of the community.',
    },
    image: undefined,
    taxonomy: {
      primaryCategory: 'community',
      secondaryTopic: 'Volunteering',
      geography: { state: 'NY', city: 'Jackson Heights', county: 'Queens' },
      audience: ['community-member', 'student', 'professional', 'new-immigrant'],
      contentType: 'local-information',
      urgency: 'normal',
      language: 'bn',
      sourceType: 'editorial',
      publishedAt: '2025-06-11T12:00:00Z',
    },
    aiTags: ['volunteer', 'food pantry', 'community service', 'Jackson Heights', 'Saturday'],
  },
];
