import type { ImmigrationItem } from '@/types/content';

export const mockImmigration: ImmigrationItem[] = [
  {
    id: 'immigration-1',
    slug: 'uscis-fee-schedule-change-2025',
    title: {
      bn: 'ইউএসসিআইএস ফি পরিবর্তন: গ্রিন কার্ড ও নাগরিকত্বের খরচ বাড়ছে',
      en: 'USCIS Fee Change: Green Card and Citizenship Costs Increasing',
    },
    summary: {
      bn: '২০২৫ সালের অক্টোবর থেকে ইউএসসিআইএস ফি পরিবর্তন হচ্ছে। আই-৪৮৫ গ্রিন কার্ড আবেদনের ফি বেড়ে হবে $২,২৫০ থেকে $২,৮২০। এন-৪০০ নাগরিকত্ব আবেদনের ফি হবে $৭১০ থেকে $৭৮০। ফি-ওয়াইভারের সুযোগ থাকবে যোগ্য আবেদনকারীদের জন্য।',
      en: 'USCIS fees are changing from October 2025. The I-485 Green Card application fee will increase from $2,250 to $2,820. The N-400 citizenship application fee will go from $710 to $780. Fee waivers will remain available for eligible applicants.',
    },
    image: undefined,
    taxonomy: {
      primaryCategory: 'immigration',
      secondaryTopic: 'USCIS Fees',
      geography: { state: 'NY', city: 'Jackson Heights' },
      audience: ['new-immigrant', 'family', 'professional'],
      contentType: 'alert',
      urgency: 'high',
      language: 'bn',
      sourceType: 'editorial',
      publishedAt: '2025-06-14T08:00:00Z',
    },
    visaType: 'Green Card',
    relatedForms: ['I-485', 'N-400', 'I-130'],
    disclaimer: {
      bn: 'সতর্কতা: এই তথ্য সাধারণ তথ্যমূলক উদ্দেশ্যে প্রদান করা হয়েছে। ইমিগ্রেশন আইনি পরামর্শের বিকল্প নয়। দয়া করে একজন যোগ্য ইমিগ্রেশন আইনজীবীর সাথে পরামর্শ করুন।',
      en: 'Disclaimer: This information is provided for general informational purposes only. It is not a substitute for immigration legal advice. Please consult with a qualified immigration attorney.',
    },
    aiTags: ['USCIS', 'fees', 'Green Card', 'citizenship', 'I-485', 'N-400'],
  },
  {
    id: 'immigration-2',
    slug: 'visa-bulletin-july-2025-priority-dates',
    title: {
      bn: 'ভিসা বুলেটিন জুলাই ২০২৫: বাংলাদেশি আবেদনকারীদের জন্য প্রায়োরিটি ডেট',
      en: 'Visa Bulletin July 2025: Priority Dates for Bangladeshi Applicants',
    },
    summary: {
      bn: 'জুলাই ২০২৫ ভিসা বুলেটিন অনুযায়ী, এফ২এ (বিবাহিত সন্তানদের জন্য গ্রিন কার্ড) ক্যাটাগরিতে বাংলাদেশের প্রায়োরিটি ডেট ০১ জানুয়ারি ২০১৮ পর্যন্ত এগিয়েছে। ইবি-১ এবং ইবি-২ ক্যাটাগরিতে কোনো অগ্রগতি হয়নি। পরবর্তী মাসের পূর্বাভাস সহ বিস্তারিত বিশ্লেষণ।',
      en: 'According to the July 2025 Visa Bulletin, the F2A category (Green Card for married children of permanent residents) priority date for Bangladesh has advanced to January 1, 2018. EB-1 and EB-2 categories show no progress. Detailed analysis with next month\'s forecast.',
    },
    image: undefined,
    taxonomy: {
      primaryCategory: 'immigration',
      secondaryTopic: 'Visa Bulletin',
      geography: { state: 'NY', city: 'Jackson Heights' },
      audience: ['new-immigrant', 'family', 'professional'],
      contentType: 'explainer',
      urgency: 'normal',
      language: 'bn',
      sourceType: 'editorial',
      publishedAt: '2025-06-13T10:00:00Z',
    },
    visaType: 'Family-Based',
    relatedForms: ['I-130', 'I-485'],
    disclaimer: {
      bn: 'সতর্কতা: ভিসা বুলেটিনের তথ্য পরিবর্তন সাপেক্ষে। আপনার নির্দিষ্ট কেসের জন্য ইমিগ্রেশন আইনজীবীর সাথে পরামর্শ করুন।',
      en: 'Disclaimer: Visa Bulletin information is subject to change. Consult an immigration attorney for your specific case.',
    },
    aiTags: ['visa bulletin', 'priority date', 'family-based', 'Green Card', 'Bangladesh'],
  },
  {
    id: 'immigration-3',
    slug: 'f1-opt-stem-extension-guide-2025',
    title: {
      bn: 'এফ-১ ওপিটি এবং স্টেম এক্সটেনশন: বাংলাদেশি শিক্ষার্থীদের সম্পূর্ণ গাইড',
      en: 'F-1 OPT and STEM Extension: Complete Guide for Bangladeshi Students',
    },
    summary: {
      bn: 'এফ-১ ভিসাধারী শিক্ষার্থীদের জন্য ঐচ্ছিক প্র্যাকটিক্যাল ট্রেনিং (ওপিটি) আবেদন প্রক্রিয়া এবং স্টেম ডিগ্রিধারীদের ২৪ মাসের এক্সটেনশনের বিস্তারিত গাইড। কখন আবেদন করবেন, কোন কাগজপত্র লাগবে এবং সাধারণ ভুলগুলো এড়ানোর উপায়।',
      en: 'A detailed guide on the Optional Practical Training (OPT) application process for F-1 visa students and the 24-month extension for STEM degree holders. When to apply, required documents, and how to avoid common mistakes.',
    },
    image: undefined,
    taxonomy: {
      primaryCategory: 'immigration',
      secondaryTopic: 'F-1 OPT',
      geography: { state: 'NY', city: 'Jackson Heights' },
      audience: ['student', 'new-immigrant'],
      contentType: 'guide',
      urgency: 'normal',
      language: 'bn',
      sourceType: 'editorial',
      publishedAt: '2025-06-12T12:00:00Z',
    },
    visaType: 'F-1',
    relatedForms: ['I-765'],
    disclaimer: {
      bn: 'সতর্কতা: এই গাইড সাধারণ তথ্যমূলক। আপনার বিশেষ পরিস্থিতির জন্য আপনার বিশ্ববিদ্যালয়ের আন্তর্জাতিক শিক্ষার্থী উপদেষ্টা বা ইমিগ্রেশন আইনজীবীর সাথে কথা বলুন।',
      en: 'Disclaimer: This guide is for general informational purposes. For your specific situation, please speak with your university\'s international student advisor or an immigration attorney.',
    },
    aiTags: ['F-1', 'OPT', 'STEM extension', 'student visa', 'I-765', 'international students'],
  },
];
