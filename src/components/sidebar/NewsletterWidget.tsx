'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/use-language';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function NewsletterWidget() {
  const translate = useTranslation('sidebar');
  const [email, setEmail] = useState('');

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h3 className="text-base font-bold text-[#0f2557]">{translate('newsletter')}</h3>
      <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">
        {translate('newsletterDesc')}
      </p>
      <div className="mt-3 flex flex-col gap-2">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={translate('emailPlaceholder')}
          className="w-full rounded-lg border border-gray-300"
        />
        <Button className="w-full rounded-lg bg-[#d32f2f] hover:bg-[#b71c1c] text-white py-2.5">
          {translate('subscribe')}
        </Button>
      </div>
    </div>
  );
}
