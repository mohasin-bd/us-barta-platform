import type { WeatherData } from '@/types/content';

export const mockWeather: WeatherData = {
  location: {
    state: 'NY',
    city: 'Jackson Heights',
    county: 'Queens',
  },
  temperature: 72,
  condition: {
    bn: 'রৌদ্রোজ্জ্বল',
    en: 'Sunny',
  },
  high: 78,
  low: 64,
  icon: 'Sun',
  forecast: [
    {
      day: {
        bn: 'সোমবার',
        en: 'Monday',
      },
      high: 76,
      low: 63,
      condition: {
        bn: 'আংশিক মেঘলা',
        en: 'Partly Cloudy',
      },
      icon: 'CloudSun',
    },
    {
      day: {
        bn: 'মঙ্গলবার',
        en: 'Tuesday',
      },
      high: 74,
      low: 61,
      condition: {
        bn: 'বৃষ্টির সম্ভাবনা',
        en: 'Chance of Rain',
      },
      icon: 'CloudRain',
    },
    {
      day: {
        bn: 'বুধবার',
        en: 'Wednesday',
      },
      high: 71,
      low: 59,
      condition: {
        bn: 'বজ্রপাতসহ বৃষ্টি',
        en: 'Thunderstorms',
      },
      icon: 'CloudLightning',
    },
    {
      day: {
        bn: 'বৃহস্পতিবার',
        en: 'Thursday',
      },
      high: 73,
      low: 62,
      condition: {
        bn: 'রৌদ্রোজ্জ্বল',
        en: 'Sunny',
      },
      icon: 'Sun',
    },
    {
      day: {
        bn: 'শুক্রবার',
        en: 'Friday',
      },
      high: 77,
      low: 65,
      condition: {
        bn: 'মেঘলা আকাশ',
        en: 'Cloudy',
      },
      icon: 'Cloud',
    },
  ],
};
