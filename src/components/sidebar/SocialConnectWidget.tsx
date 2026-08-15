'use client';

import { useTranslation } from '@/hooks/use-language';

const socials = [
  { letter: 'F', bg: 'bg-[#1877F2]', label: 'Facebook' },
  { letter: 'Y', bg: 'bg-[#d32f2f]', label: 'YouTube' },
  { letter: 'I', bg: 'bg-gradient-to-br from-purple-500 to-pink-500', label: 'Instagram' },
  { letter: 'T', bg: 'bg-black', label: 'TikTok' },
  { letter: 'T', bg: 'bg-[#0088cc]', label: 'Telegram' },
];

export function SocialConnectWidget() {
  const translate = useTranslation('sidebar');

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h3 className="text-base font-bold text-[#0f2557]">{translate('socialConnect')}</h3>
      <div className="flex gap-3 mt-3">
        {socials.map((s) => (
          <button
            key={s.label}
            aria-label={s.label}
            className={`w-9 h-9 rounded-full ${s.bg} flex items-center justify-center text-white text-sm font-bold hover:opacity-80 transition-opacity`}
          >
            {s.letter}
          </button>
        ))}
      </div>
    </div>
  );
}
