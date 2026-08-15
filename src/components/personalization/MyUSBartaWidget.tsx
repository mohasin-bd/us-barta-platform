'use client';

import { getLocalizedText } from '@/lib/i18n/bilingual';
import { useLanguage } from '@/hooks/use-language';
import { useTranslation } from '@/hooks/use-language';
import { mockNotifications } from '@/data/sidebar';
import { MyUSBartaItem } from './MyUSBartaItem';

export function MyUSBartaWidget() {
  const language = useLanguage();
  const translate = useTranslation('sidebar');

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h3 className="text-[18px] font-bold text-[#0f2557]">
        {translate('myUSBarta')}
      </h3>
      <p className="text-sm text-gray-500 mt-0.5">
        {getLocalizedText({
          bn: 'স্বাগতম, আসসালামু আলাইকুম',
          en: 'Welcome, Assalamu Alaikum',
        }, language)}
      </p>

      <div className="mt-3 space-y-0.5">
        {mockNotifications.map((item) => (
          <MyUSBartaItem key={item.id} item={item} />
        ))}
      </div>

      <button className="w-full mt-4 bg-[#0f2557] text-white rounded-lg py-2.5 text-sm font-medium hover:bg-[#0a1a3d] transition-colors">
        {translate('dashboard')}
      </button>
    </div>
  );
}
