'use client';

import { Search } from 'lucide-react';
import { useTranslation } from '@/hooks/use-language';

interface SearchBarProps {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function SearchBar({ value = '', onChange, className = '' }: SearchBarProps) {
  const translate = useTranslation('search');

  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={translate('placeholder')}
        className="w-full bg-white border border-gray-300 rounded-full py-2.5 pl-4 pr-10 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1976d2] focus:border-transparent transition-shadow"
      />
      <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
    </div>
  );
}
