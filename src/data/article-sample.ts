import type { Article, ArticlePageData, ArticleRelatedItem } from '@/types/article';

export const sampleArticle: Article = {
  id: 'article-immigration-policy-2026',
  slug: 'us-immigration-policy-changes-2026',
  title: {
    bn: 'যুক্তরাষ্ট্রের নতুন ইমিগ্রেশন নীতিতে কী পরিবর্তন এসেছে—বাংলাদেশি-আমেরিকানদের জন্য যা জানা জরুরি',
    en: 'What Changed in US Immigration Policy — What Bangladeshi-Americans Need to Know',
  },
  summary: {
    bn: 'নতুন নীতির গুরুত্বপূর্ণ পরিবর্তন, সম্ভাব্য প্রভাব এবং বাংলাদেশি-আমেরিকানদের জন্য করণীয়।',
    en: 'Key changes in the new policy, potential impact, and what Bangladeshi-Americans should do.',
  },
  category: 'immigration',
  categoryLabel: { bn: 'ইমিগ্রেশন', en: 'Immigration' },
  heroImage: '/images/article-immigration-hero.png',
  heroImageCaption: {
    bn: 'যুক্তরাষ্ট্রের ইমিগ্রেশন নীতিতে পরিবর্তনের প্রভাব নিয়ে বাংলাদেশি-আমেরিকানদের মধ্যে আগ্রহ বাড়ছে।',
    en: 'Interest is growing among Bangladeshi-Americans regarding the impact of changes in US immigration policy.',
  },
  author: {
    name: 'US BARTA News Desk',
    title: 'Editorial Team',
  },
  publishedAt: '2026-08-16T08:00:00Z',
  updatedAt: '2026-08-16T14:30:00Z',
  readTimeMinutes: 5,
  tags: ['ইমিগ্রেশন', 'ভিসা', 'গ্রিন কার্ড', 'H-1B', 'USCIS', 'নীতি পরিবর্তন'],
  seo: {
    title: 'যুক্তরাষ্ট্রের নতুন ইমিগ্রেশন নীতিতে কী পরিবর্তন এসেছে | US BARTA',
    description: 'বাংলাদেশি-আমেরিকানদের জন্য নতুন ইমিগ্রেশন নীতির পরিবর্তন, সম্ভাব্য প্রভাব এবং করণীয় সম্পর্কে বিস্তারিত তথ্য।',
    ogImage: '/images/article-immigration-hero.png',
  },
  body: [
    // INTRO
    {
      type: 'paragraph',
      content: 'যুক্তরাষ্ট্রের ইমিগ্রেশন নীতিতে সাম্প্রতিক কিছু গুরুত্বপূর্ণ পরিবর্তন এসেছে যা বাংলাদেশি-আমেরিকান কমিউনিটির জীবনে প্রত্যক্ষ প্রভাব ফেলতে পারে। নতুন নির্বাহী আদেশটি গ্রিন কার্ড প্রক্রিয়া, কর্মসংস্থানভিত্তিক ভিসা এবং পরিবার পুনর্মিলনের ক্ষেত্রে ব্যাপক পরিবর্তন আনছে। এই পরিবর্তনগুলো শুধু নতুন আবেদনকারীদের জন্যই নয়, বরং যারা ইতিমধ্যে প্রক্রিয়াধীন আছেন তাদের জন্যও গুরুত্বপূর্ণ।',
    },
    {
      type: 'paragraph',
      content: 'US BARTA এই প্রতিবেদনে সহজ ভাষায় বুঝিয়ে বলছে নতুন নীতিতে ঠিক কী পরিবর্তন এসেছে, কারা বেশি প্রভাবিত হবেন এবং এখন কী করা উচিত। তবে মনে রাখবেন, এটি সাধারণ তথ্য — ব্যক্তিগত পরামর্শের বিকল্প নয়।',
    },
    {
      type: 'paragraph',
      content: 'ইমিগ্রেশন বিষয়ক আইনজীবী এবং কমিউনিটি নেতাদের মতে, এই পরিবর্তনগুলো বিশেষ করে নিউইয়র্ক, নিউজার্সি এবং ক্যালিফোর্নিয়ায় বসবাসকারী বাংলাদেশি-আমেরিকানদের জন্য তাৎপর্যপূর্ণ, কারণ এই অঙ্গরাজ্যগুলোতে সবচেয়ে বেশি সংখ্যক বাংলাদেশি অভিবাসী বাস করেন।',
    },

    // MAIN CHANGES
    {
      type: 'heading',
      title: 'মূল পরিবর্তনগুলো কী?',
      content: '',
    },
    {
      type: 'paragraph',
      content: 'নতুন নির্বাহী আদেশে মোট পাঁচটি প্রধান ক্ষেত্রে পরিবর্তন এসেছে। প্রতিটি পরিবর্তনের বিস্তারিত বিবরণ নিচে দেওয়া হলো:',
    },
    {
      type: 'bullet-list',
      content: '',
      items: [
        'গ্রিন কার্ড আবেদনের জন্য আবশ্যকীয় নথিপত্রের তালিকা আপডেট করা হয়েছে। এখন থেকে অতিরিক্ত দুটি ফর্ম জমা দিতে হবে যা আগে ঐচ্ছিক ছিল।',
        'H-1B ভিসার জন্য বার্ষিক কোটা বৃদ্ধি করা হয়েছে। নতুন নিয়মে প্রথমবারের মতো মাস্টার্স ডিগ্রিধারীদের জন্য আলাদা কোটা রাখা হয়েছে।',
        'পরিবারভিত্তিক ভিসার প্রক্রিয়াকরণ সময় কমানো হয়েছে। আগে যেখানে গড়ে ২৪ মাস সময় লাগতো, সেখানে এখন লক্ষ্য ১৮ মাসে নামিয়ে আনা।',
        'ড্রিমার্স এবং টিপিএস ধারকদের জন্য নতুন সুরক্ষা ব্যবস্থা চালু হয়েছে যা পূর্ববর্তী প্রশাসনের সময় বাতিল করা হয়েছিল।',
        'নাগরিকত্ব পরীক্ষার জন্য নতুন ইংরেজি ভাষা প্রয়োজনীয়তা শিথিল করা হয়েছে। ৫৫ বছরের বেশি বয়সী আবেদনকারীদের জন্য বিশেষ বিবেচনা দেওয়া হবে।',
      ],
    },

    // HIGHLIGHT BOX
    {
      type: 'highlight-box',
      title: 'সহজ ভাষায় বুঝুন',
      content: 'সহজ কথায় বলতে গেলে, সরকার বলছে: গ্রিন কার্ড পেতে এখন থেকে একটু বেশি কাগজপত্র লাগবে, কিন্তু H-1B কাজের ভিসায় সুযোগ বাড়বে। পরিবারের সদস্যদের জন্য ভিসা পেতে আগের চেয়ে কম সময় লাগবে। আর যারা দীর্ঘদিন ধরে যুক্তরাষ্ট্রে আছেন কিন্তু নাগরিকত্ব নিতে পারেননি, তাদের জন্য নতুন সুযোগ এসেছে।',
    },

    // IMPACT ON BANGLADESHI-AMERICANS
    {
      type: 'heading',
      title: 'বাংলাদেশি-আমেরিকানদের ওপর সম্ভাব্য প্রভাব',
      content: '',
    },
    {
      type: 'paragraph',
      content: 'এই পরিবর্তনগুলো বাংলাদেশি-আমেরিকান কমিউনিটির বিভিন্ন স্তরে প্রভাব ফেলবে। বিশেষ করে যারা নিচের পরিস্থিতিতে আছেন তাদের জন্য এই পরিবর্তনগুলো গুরুত্বপূর্ণ:',
    },
    {
      type: 'bullet-list',
      content: '',
      items: [
        'যারা সম্প্রতি গ্রিন কার্ডের জন্য আবেদন করার পরিকল্পনা করছেন, তাদের নতুন কাগজপত্রের প্রস্তুতি নেওয়া উচিত।',
        'H-1B ভিসায় আগ্রহী পেশাদারদের জন্য নতুন কোটা সুবিধাজনক হতে পারে, বিশেষ করে যাদের মাস্টার্স ডিগ্রি আছে।',
        'পরিবারের সদস্যদের জন্য ভিসা আবেদনের অপেক্ষার সময় কমতে পারে, যা দীর্ঘদিন ধরে পৃথক পরিবারে থাকা অনেকের জন্য সুসংবাদ।',
        'নাগরিকত্ব পরীক্ষার ইংরেজি প্রয়োজনীয়তা শিথিল হওয়ায় বয়স্ক বাংলাদেশি অভিবাসীদের জন্য নাগরিকত্ব পাওয়া সহজ হতে পারে।',
      ],
    },

    // WHO IS MOST AFFECTED
    {
      type: 'heading',
      title: 'কারা বেশি প্রভাবিত হতে পারেন?',
      content: '',
    },
    {
      type: 'structured-list',
      content: '',
      structuredItems: [
        {
          label: 'নতুন অভিবাসন আবেদনকারী',
          description: 'যারা এখনই যুক্তরাষ্ট্রে আসার পরিকল্পনা করছেন, তাদের নতুন প্রক্রিয়া অনুসরণ করতে হবে। কিছু ক্ষেত্রে প্রস্তুতির সময় বেশি লাগতে পারে।',
        },
        {
          label: 'পরিবারভিত্তিক আবেদনকারী',
          description: 'স্বামী/স্ত্রী বা অভিভাবকের মাধ্যমে আবেদনকারীদের জন্য ভালো খবর — প্রক্রিয়া দ্রুততর হচ্ছে। তবে নতুন কাগজপত্রের প্রস্তুতি দরকার।',
        },
        {
          label: 'H-1B / employment-based applicants',
          description: 'মাস্টার্স ডিগ্রিধারীদের জন্য আলাদা কোটা একটি বড় সুযোগ। বাংলাদেশি পেশাদারদের মধ্যে যাদের উচ্চ শিক্ষা আছে তারা এই সুবিধা নিতে পারবেন।',
        },
        {
          label: 'International students',
          description: 'যুক্তরাষ্ট্রে অধ্যয়নরত বাংলাদেশি শিক্ষার্থীদের জন্য OPT এবং H-1B পরিবর্তনের নতুন সুযোগ তৈরি হয়েছে। গ্র্যাজুয়েশনের পর কাজের অনুমতি পাওয়া সহজ হতে পারে।',
        },
        {
          label: 'Green Card applicants',
          description: 'যারা ইতিমধ্যে গ্রিন কার্ডের জন্য অপেক্ষমান, তাদের কিছু ক্ষেত্রে অতিরিক্ত তথ্য জমা দিতে হতে পারে। তবে সামগ্রিক সময়রেখা উন্নত হতে পারে।',
        },
      ],
    },

    // WHAT SHOULD YOU DO
    {
      type: 'heading',
      title: 'আপনার কী করা উচিত?',
      content: '',
    },
    {
      type: 'practical-steps',
      content: '',
      items: [
        'নতুন প্রক্রিয়া সম্পর্কে আপডেট থাকুন — USCIS ওয়েবসাইট (uscis.gov) নিয়মিত চেক করুন।',
        'আপনার সব ইমিগ্রেশন সংক্রান্ত নথিপত্র সংগঠিত রাখুন। বিশেষ করে পাসপোর্ট, ভিসা, I-94 এবং পূর্ববর্তী আবেদনের কপি।',
        'একজন যোগ্য ইমিগ্রেশন আইনজীবীর সাথে পরামর্শ করুন, বিশেষ করে যদি আপনার প্রক্রিয়া চলমান থাকে।',
        'আপনার পরিচিত কমিউনিটি সদস্যদের এই তথ্য শেয়ার করুন — অনেকেই হয়তো এই পরিবর্তন সম্পর্কে জানেন না।',
        'US BARTA-এর ইমিগ্রেশন সেকশন ফলো করুন — আমরা নিয়মিত আপডেট প্রকাশ করি।',
      ],
    },

    // DISCLAIMER
    {
      type: 'disclaimer',
      content: 'এই প্রতিবেদনটি সাধারণ তথ্যের জন্য। এটি কোনো আইনি পরামর্শ নয়। আপনার ব্যক্তিগত পরিস্থিতির জন্য একজন যোগ্য immigration attorney বা accredited representative-এর পরামর্শ নিন।',
    },
  ],
  relatedArticles: [],
  disclaimer: {
    bn: 'এই প্রতিবেদনটি সাধারণ তথ্যের জন্য। এটি কোনো আইনি পরামর্শ নয়। আপনার ব্যক্তিগত পরিস্থিতির জন্য একজন যোগ্য immigration attorney বা accredited representative-এর পরামর্শ নিন।',
    en: 'This report is for general informational purposes only. It is not legal advice. Please consult a qualified immigration attorney or accredited representative for your personal situation.',
  },
};

// ============================================================
// SIDEBAR — Contextual Recommendations (directly connected to article)
// These 3 stories are directly related to topics MENTIONED in the article.
// They must NOT appear in the bottom discovery section.
// ============================================================
export const sidebarRelated: ArticleRelatedItem[] = [
  {
    id: 'side-1', slug: 'h1b-masters-cap-explained',
    title: { bn: 'H-1B মাস্টার্স ক্যাপ: বাংলাদেশি স্নাতকোত্তরদের জন্য নতুন সুযোগ', en: 'H-1B Masters Cap: New Opportunity for Bangladeshi Graduates' },
    summary: { bn: 'নতুন H-1B কোটায় মাস্টার্স ডিগ্রিধারীদের জন্য আলাদা সুযোগ এবং আবেদন প্রক্রিয়া।', en: 'Separate H-1B quota for Masters holders and application process.' },
    image: '/images/immigration-2.png', category: 'immigration',
    categoryLabel: { bn: 'ইমিগ্রেশন', en: 'Immigration' },
    publishedAt: '2026-08-12T08:00:00Z', readTimeMinutes: 6,
  },
  {
    id: 'side-2', slug: 'green-card-interview-tips',
    title: { bn: 'গ্রিন কার্ড ইন্টারভিউ: প্রস্তুতির ১০টি টিপস', en: 'Green Card Interview: 10 Preparation Tips' },
    summary: { bn: 'গ্রিন কার্ড ইন্টারভিউতে সাফল্যের জন্য প্রয়োজনীয় প্রস্তুতি ও সাধারণ প্রশ্ন।', en: 'Essential preparation and common questions for green card interview success.' },
    image: '/images/immigration-4.png', category: 'immigration',
    categoryLabel: { bn: 'ইমিগ্রেশন', en: 'Immigration' },
    publishedAt: '2026-08-13T08:00:00Z', readTimeMinutes: 5,
  },
  {
    id: 'side-3', slug: 'family-visa-processing-faster',
    title: { bn: 'পরিবারভিত্তিক ভিসা প্রক্রিয়া এখন দ্রুততর', en: 'Family-Based Visa Processing Now Faster' },
    summary: { bn: 'নতুন নিয়মে পরিবার পুনর্মিলন ভিসার সময় ২৪ মাস থেকে ১৮ মাসে নেমে আসছে।', en: 'New rules reduce family reunification visa wait from 24 to 18 months.' },
    image: '/images/immigration-3.png', category: 'immigration',
    categoryLabel: { bn: 'ইমিগ্রেশন', en: 'Immigration' },
    publishedAt: '2026-08-10T08:00:00Z', readTimeMinutes: 3,
  },
];

// ============================================================
// SIDEBAR — Today's Important News (broader platform-wide stories)
// These are NOT immigration-specific — they show broader US BARTA content.
// ============================================================
export const sidebarNews: ArticleRelatedItem[] = [
  {
    id: 'sn-1', slug: 'ny-housing-cost-rise',
    title: { bn: 'নিউইয়র্কে বাসভাড়া বাড়ছে', en: 'NY Rents Rising' },
    summary: { bn: 'ব্রুকলিন ও কুইন্সে গড় ভাড়া গত বছরের তুলনায় ৮% বেড়েছে।', en: 'Average rent in Brooklyn and Queens is up 8% from last year.' },
    image: '/images/news-housing.png', category: 'life-in-america',
    categoryLabel: { bn: 'আমেরিকার জীবন', en: 'Life in America' },
    publishedAt: '2026-08-15T10:00:00Z', readTimeMinutes: 3,
  },
  {
    id: 'sn-2', slug: 'scholarship-bangladeshi-students',
    title: { bn: 'বাংলাদেশি শিক্ষার্থীদের জন্য নতুন স্কলারশিপ', en: 'New Scholarships for Bangladeshi Students' },
    summary: { bn: 'বিভিন্ন বিশ্ববিদ্যালয়ে বাংলাদেশি শিক্ষার্থীদের জন্য আলাদা তহবিল ঘোষণা।', en: 'Several universities announce dedicated funds for Bangladeshi students.' },
    image: '/images/news-scholarship.png', category: 'education',
    categoryLabel: { bn: 'শিক্ষা', en: 'Education' },
    publishedAt: '2026-08-15T08:00:00Z', readTimeMinutes: 4,
  },
  {
    id: 'sn-3', slug: 'jackson-heights-job-fair',
    title: { bn: 'জ্যাকসন হাইটসে চাকরি মেলা', en: 'Jackson Heights Job Fair' },
    summary: { bn: 'আগামী শনিবার জ্যাকসন হাইটসে বাংলাদেশি কমিউনিটি কেন্দ্রে বড় চাকরি মেলা।', en: 'Major job fair this Saturday at Jackson Heights Bangladeshi Community Center.' },
    image: '/images/news-jobfair.png', category: 'jobs-career',
    categoryLabel: { bn: 'চাকরি ও ক্যারিয়ার', en: 'Jobs & Career' },
    publishedAt: '2026-08-14T12:00:00Z', readTimeMinutes: 2,
  },
  {
    id: 'sn-4', slug: 'community-health-camp',
    title: { bn: 'কমিউনিটি স্বাস্থ্য শিবির শুরু', en: 'Community Health Camp Begins' },
    summary: { bn: 'বিনামূল্যে স্বাস্থ্য পরীক্ষা, ভ্যাকসিন এবং পরামর্শ সেবা — সবার জন্য উন্মুক্ত।', en: 'Free health checkups, vaccines, and counseling — open to everyone.' },
    image: '/images/news-health.png', category: 'health',
    categoryLabel: { bn: 'স্বাস্থ্য', en: 'Health' },
    publishedAt: '2026-08-14T06:00:00Z', readTimeMinutes: 2,
  },
  {
    id: 'sn-5', slug: 'eid-prayer-arrangements-nyc',
    title: { bn: 'নিউইয়র্কে ঈদের নামাজের ব্যবস্থা', en: 'Eid Prayer Arrangements in NYC' },
    summary: { bn: 'বিভিন্ন মসজিদ ও পার্কে ঈদুল আযহার নামাজের সময়সূচি ও স্থান।', en: 'Eid al-Adha prayer schedules and locations at various mosques and parks.' },
    image: '/images/news-eid.png', category: 'islamic-life',
    categoryLabel: { bn: 'ইসলামী জীবন', en: 'Islamic Life' },
    publishedAt: '2026-08-13T16:00:00Z', readTimeMinutes: 2,
  },
];

// ============================================================
// BOTTOM DISCOVERY — Broader category exploration (6 articles)
// These cover a WIDER range of immigration topics for discovery.
// They must NOT duplicate any sidebar articles.
// ============================================================
export const categoryDiscovery: ArticleRelatedItem[] = [
  {
    id: 'disc-1', slug: 'uscis-fee-schedule-change-2026',
    title: { bn: 'ইউএসসিআইএস ফি পরিবর্তন ২০২৬: কী বাড়ছে কী কমছে', en: 'USCIS Fee Changes 2026: What\'s Increasing and Decreasing' },
    summary: { bn: '২০২৬ সালের নতুন ফি কাঠামো এবং ফি-ওয়াইভারের যোগ্যতা সম্পর্কে বিস্তারিত।', en: 'Details on the new 2026 fee structure and fee waiver eligibility.' },
    image: '/images/immigration-1.png', category: 'immigration',
    categoryLabel: { bn: 'ইমিগ্রেশন', en: 'Immigration' },
    publishedAt: '2026-08-14T08:00:00Z', readTimeMinutes: 4,
  },
  {
    id: 'disc-2', slug: 'opt-to-h1b-transition',
    title: { bn: 'OPT থেকে H-1B: সম্পূর্ণ গাইড', en: 'OPT to H-1B: Complete Guide' },
    summary: { bn: 'অধ্যয়ন শেষে কাজের অনুমতি থেকে H-1B ভিসায় স্থানান্তরের ধাপে ধাপে নির্দেশনা।', en: 'Step-by-step guide to transitioning from OPT work authorization to H-1B visa.' },
    image: '/images/immigration-5.png', category: 'immigration',
    categoryLabel: { bn: 'ইমিগ্রেশন', en: 'Immigration' },
    publishedAt: '2026-08-08T08:00:00Z', readTimeMinutes: 8,
  },
  {
    id: 'disc-3', slug: 'citizenship-naturalization-guide',
    title: { bn: 'নাগরিকত্ব প্রাপ্তি: সম্পূর্ণ গাইড ২০২৬', en: 'Naturalization: Complete Guide 2026' },
    summary: { bn: 'নাগরিকত্বের জন্য আবেদনের যোগ্যতা, প্রক্রিয়া এবং প্রস্তুতির সব তথ্য।', en: 'Eligibility, process, and preparation details for citizenship application.' },
    image: '/images/immigration-6.png', category: 'immigration',
    categoryLabel: { bn: 'ইমিগ্রেশন', en: 'Immigration' },
    publishedAt: '2026-08-07T08:00:00Z', readTimeMinutes: 10,
  },
  {
    id: 'disc-4', slug: 'daca-tps-update-bangladeshi',
    title: { bn: 'ড্যাকা ও টিপিএস: বাংলাদেশিদের জন্য নতুন আপডেট', en: 'DACA and TPS: New Updates for Bangladeshis' },
    summary: { bn: 'টিএমপোরারি প্রটেক্টেড স্ট্যাটাস এবং ড্যাকার নতুন সুযোগ নিয়ে আলোচনা।', en: 'Discussion on new opportunities under TPS and DACA programs.' },
    image: '/images/immigration-7.png', category: 'immigration',
    categoryLabel: { bn: 'ইমিগ্রেশন', en: 'Immigration' },
    publishedAt: '2026-08-11T08:00:00Z', readTimeMinutes: 4,
  },
  {
    id: 'disc-5', slug: 'immigration-lawyer-guide',
    title: { bn: 'কীভাবে সঠিক ইমিগ্রেশন আইনজীবী বাছবেন', en: 'How to Choose the Right Immigration Lawyer' },
    summary: { bn: 'যোগ্য ইমিগ্রেশন আইনজীবী খোঁজার টিপস এবং সতর্কতা।', en: 'Tips and cautions for finding a qualified immigration attorney.' },
    image: '/images/immigration-8.png', category: 'immigration',
    categoryLabel: { bn: 'ইমিগ্রেশন', en: 'Immigration' },
    publishedAt: '2026-08-06T08:00:00Z', readTimeMinutes: 5,
  },
  {
    id: 'disc-6', slug: 'work-permit-options',
    title: { bn: 'যুক্তরাষ্ট্রে কাজের অনুমতির সব বিকল্প', en: 'All Work Permit Options in the US' },
    summary: { bn: 'H-1B, O-1, L-1, E-2 সহ বিভিন্ন কাজের ভিসার তুলনামূলক আলোচনা।', en: 'Comparative discussion of H-1B, O-1, L-1, E-2 and other work visa options.' },
    image: '/images/immigration-9.png', category: 'immigration',
    categoryLabel: { bn: 'ইমিগ্রেশন', en: 'Immigration' },
    publishedAt: '2026-08-05T08:00:00Z', readTimeMinutes: 7,
  },
];

export function getArticlePageData(): ArticlePageData {
  return {
    article: sampleArticle,
    sidebarRelated,
    sidebarNews,
    categoryDiscovery,
  };
}
