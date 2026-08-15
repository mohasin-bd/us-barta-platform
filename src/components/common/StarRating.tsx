'use client';

import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  max?: number;
}

export function StarRating({ rating, max = 5 }: StarRatingProps) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: max }, (_, i) => (
        <Star
          key={i}
          size={14}
          className={i < Math.round(rating) ? 'fill-[#f59e0b] text-[#f59e0b]' : 'fill-gray-300 text-gray-300'}
        />
      ))}
    </div>
  );
}
