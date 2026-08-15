'use client';

import Link from 'next/link';
import { Heart, MapPin, ImageIcon } from 'lucide-react';
import { getLocalizedText } from '@/lib/i18n/bilingual';
import { useLanguage } from '@/hooks/use-language';
import { StarRating } from '@/components/common/StarRating';
import type { BusinessItem } from '@/types/content';

interface BusinessCardProps {
  item: BusinessItem;
}

export function BusinessCard({ item }: BusinessCardProps) {
  const language = useLanguage();

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-4 space-y-3">
        <div className="flex items-start gap-3">
          <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
            {item.image ? (
              <img src={item.image} alt={getLocalizedText(item.businessName, language)} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <ImageIcon className="h-6 w-6 text-gray-300" />
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <h3 className="font-semibold text-sm text-gray-900 truncate">
                  {getLocalizedText(item.businessName, language)}
                </h3>
                <p className="text-xs text-[#757575] mt-0.5">{item.businessType}</p>
              </div>
              <button className="text-gray-400 hover:text-[#d32f2f] transition-colors flex-shrink-0" aria-label="Save">
                <Heart className="h-5 w-5" />
              </button>
            </div>
            {item.rating !== undefined && item.rating > 0 && (
              <div className="mt-1.5">
                <StarRating rating={item.rating} />
              </div>
            )}
          </div>
        </div>
        {item.address && (
          <p className="text-xs text-[#757575] flex items-center gap-1 line-clamp-1">
            <MapPin className="h-3 w-3 flex-shrink-0" />
            {item.address}
          </p>
        )}
        {item.isHalal && (
          <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-medium text-[#388e3c]">
            {language === 'bn' ? 'হালাল' : 'Halal'}
          </span>
        )}
      </div>
    </div>
  );
}
