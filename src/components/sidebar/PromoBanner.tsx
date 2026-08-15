'use client';

import { Megaphone } from 'lucide-react';
import { useTranslation } from '@/hooks/use-language';

export function PromoBanner() {
  const translate = useTranslation('sidebar');

  return (
    <div className="bg-[#0f2557] rounded-lg p-5">
      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
        <Megaphone className="h-5 w-5 text-white" />
      </div>
      <h3 className="text-white font-bold text-base mt-3">
        {translate('promoTitle')}
      </h3>
      <p className="text-white/70 text-sm mt-1 leading-relaxed">
        {translate('promoDesc')}
      </p>
      <button className="mt-3 bg-white text-[#0f2557] rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-100 transition-colors">
        {translate('promoCta')}
      </button>
    </div>
  );
}
