import type { ContentItem } from '@/types/content';

export const mockIslamic: ContentItem[] = [
  {
    id: 'islamic-1',
    slug: 'eid-ul-adha-prayer-times-nyc-2025',
    title: {
      bn: 'ঈদুল আযহা ২০২৫: নিউইয়র্ক সিটিতে ঈদের নামাজের সময়সূচী',
      en: 'Eid ul Adha 2025: Prayer Timings in New York City',
    },
    summary: {
      bn: 'ঈদুল আযহার নামাজের সময়সূচী ঘোষণা করা হয়েছে। জ্যাকসন হাইটসের প্রধান ঈদগাহ ও মসজিদগুলোতে নামাজের সময় এবং দিকনির্দেশনা। পার্কিং ও পরিবহন ব্যবস্থা সম্পর্কেও জানুন।',
      en: 'Eid ul Adha prayer schedule has been announced. Prayer times and directions for the main Eidgah and mosques in Jackson Heights. Also learn about parking and transportation arrangements.',
    },
    image: undefined,
    taxonomy: {
      primaryCategory: 'islamic-life',
      secondaryTopic: 'Eid Prayer',
      geography: { state: 'NY', city: 'Jackson Heights', county: 'Queens' },
      audience: ['community-member', 'family', 'senior'],
      contentType: 'local-information',
      urgency: 'high',
      language: 'bn',
      sourceType: 'editorial',
      publishedAt: '2025-06-14T07:00:00Z',
    },
    aiTags: ['Eid ul Adha', 'prayer times', 'Jackson Heights', 'mosque', 'Eidgah'],
  },
  {
    id: 'islamic-2',
    slug: 'ramadan-guide-iftar-sehri-timings-nyc',
    title: {
      bn: 'রমজান গাইড: নিউইয়র্কে ইফতার ও সেহরির সময়সূচী',
      en: 'Ramadan Guide: Iftar and Sehri Timings in New York',
    },
    summary: {
      bn: 'রমজান মাসে নিউইয়র্কে ইফতার ও সেহরির সময়সূচী এবং রোজার গুরুত্বপূর্ণ বিষয়গুলো। জ্যাকসন হাইটসের কয়েকটি মসজিদে ইফতার মাহফিলের ব্যবস্থা রয়েছে। তাকবীরে তাহরীমা ও তারাবীহর নামাজের সময়ও দেওয়া হলো।',
      en: 'Iftar and Sehri timings for Ramadan in New York, along with important fasting guidelines. Several mosques in Jackson Heights host Iftar gatherings. Taraweeh and Takbir-e-Tehrima prayer times are also included.',
    },
    image: undefined,
    taxonomy: {
      primaryCategory: 'islamic-life',
      secondaryTopic: 'Ramadan',
      geography: { state: 'NY', city: 'Jackson Heights' },
      audience: ['community-member', 'family', 'student', 'professional'],
      contentType: 'guide',
      urgency: 'normal',
      language: 'bn',
      sourceType: 'editorial',
      publishedAt: '2025-06-10T06:00:00Z',
    },
    aiTags: ['Ramadan', 'Iftar', 'Sehri', 'prayer times', 'mosque', 'fasting'],
  },
  {
    id: 'islamic-3',
    slug: 'jackson-heights-mosque-events-june-2025',
    title: {
      bn: 'জ্যাকসন হাইটসের মসজিদগুলোতে আসন্ন ইসলামী অনুষ্ঠান',
      en: 'Upcoming Islamic Events at Jackson Heights Mosques',
    },
    summary: {
      bn: 'জ্যাকসন হাইটস ও আশেপাশের এলাকার মসজিদগুলোতে আগামী সপ্তাহের ইসলামী অনুষ্ঠানের সময়সূচী। জুমার খুতবা, কুরআন তিলাওয়াত ক্লাস, ইসলামী সেমিনার এবং শিশুদের মাদরাসা ক্লাসের তথ্য।',
      en: 'Schedule of Islamic events at mosques in and around Jackson Heights for the upcoming week. Friday sermons, Quran recitation classes, Islamic seminars, and children’s madrasa class information.',
    },
    image: undefined,
    taxonomy: {
      primaryCategory: 'islamic-life',
      secondaryTopic: 'Mosque Events',
      geography: { state: 'NY', city: 'Jackson Heights', county: 'Queens' },
      audience: ['community-member', 'family', 'parent', 'senior'],
      contentType: 'event',
      urgency: 'low',
      language: 'bn',
      sourceType: 'editorial',
      publishedAt: '2025-06-09T05:00:00Z',
    },
    aiTags: ['mosque', 'Jackson Heights', 'Friday prayer', 'Quran class', 'Islamic events'],
  },
];
