import type { MyUSBartaNotification } from '@/types/content';

export const mockNotifications: MyUSBartaNotification[] = [
  {
    id: 'notif-1',
    label: {
      bn: 'ইমিগ্রেশন আপডেট',
      en: 'Immigration Updates',
    },
    count: 3,
    icon: 'ShieldCheck',
    category: 'immigration',
    href: '/immigration',
  },
  {
    id: 'notif-2',
    label: {
      bn: 'নতুন চাকরি',
      en: 'New Jobs',
    },
    count: 8,
    icon: 'Briefcase',
    category: 'jobs-career',
    href: '/jobs',
  },
  {
    id: 'notif-3',
    label: {
      bn: 'শিক্ষা',
      en: 'Education',
    },
    count: 5,
    icon: 'GraduationCap',
    category: 'education',
    href: '/education',
  },
  {
    id: 'notif-4',
    label: {
      bn: 'স্বাস্থ্য টিপস',
      en: 'Health Tips',
    },
    count: 4,
    icon: 'Heart',
    category: 'health',
    href: '/health',
  },
  {
    id: 'notif-5',
    label: {
      bn: 'ইসলামী স্মরণ',
      en: 'Islamic Reminders',
    },
    count: 6,
    icon: 'Moon',
    category: 'islamic-life',
    href: '/islamic-life',
  },
  {
    id: 'notif-6',
    label: {
      bn: 'স্থানীয় আপডেট',
      en: 'Local Updates',
    },
    count: 3,
    icon: 'MapPin',
    category: 'community',
    href: '/community',
  },
];
