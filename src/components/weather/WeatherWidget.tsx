'use client';

import { Sun, MapPin } from 'lucide-react';
import { getLocalizedText } from '@/lib/i18n/bilingual';
import { useLanguage } from '@/hooks/use-language';
import { useTranslation } from '@/hooks/use-language';
import { mockWeather } from '@/data/weather';

const forecastColors: Record<string, string> = {
  Sun: 'bg-amber-400',
  CloudSun: 'bg-sky-300',
  CloudRain: 'bg-blue-400',
  CloudLightning: 'bg-gray-500',
  Cloud: 'bg-gray-400',
};

const dayAbbrMap: Record<string, { bn: string; en: string }> = {
  Monday: { bn: 'সোম', en: 'Mon' },
  Tuesday: { bn: 'মঙ্গল', en: 'Tue' },
  Wednesday: { bn: 'বুধ', en: 'Wed' },
  Thursday: { bn: 'বৃহঃ', en: 'Thu' },
  Friday: { bn: 'শুক্র', en: 'Fri' },
  Saturday: { bn: 'শনি', en: 'Sat' },
  Sunday: { bn: 'রবি', en: 'Sun' },
};

export function WeatherWidget() {
  const language = useLanguage();
  const translate = useTranslation('weather');

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h3 className="text-base font-bold text-[#0f2557]">{translate('label')}</h3>

      <div className="flex items-center gap-1.5 text-sm text-gray-500 mt-2">
        <MapPin className="h-3.5 w-3.5" />
        <span>Jackson Heights, NY</span>
      </div>

      <div className="flex items-center gap-3 mt-3">
        <Sun className="h-10 w-10 text-amber-500" />
        <div>
          <span className="text-3xl font-bold text-gray-900">{mockWeather.temperature}°F</span>
          <span className="ml-2 text-sm text-gray-600">{getLocalizedText(mockWeather.condition, language)}</span>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
        <span>{translate('high')}: {mockWeather.high}°F</span>
        <span>{translate('low')}: {mockWeather.low}°F</span>
      </div>

      <div className="border-t border-gray-100 mt-4 pt-3">
        <div className="flex justify-between">
          {mockWeather.forecast.map((day, i) => {
            const enDay = day.day.en;
            const abbr = dayAbbrMap[enDay] || { bn: enDay.slice(0, 2), en: enDay.slice(0, 3) };
            const circleColor = forecastColors[day.icon || ''] || 'bg-gray-300';

            return (
              <div key={i} className="flex flex-col items-center gap-1.5 text-xs">
                <span className="text-gray-500 font-medium">
                  {language === 'bn' ? abbr.bn : abbr.en}
                </span>
                <div className={`w-7 h-7 rounded-full ${circleColor}`} />
                <span className="text-gray-700 font-semibold">{day.high}°</span>
                <span className="text-gray-400">{day.low}°</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
