'use client';

import { FeaturedNewsCard } from './FeaturedNewsCard';
import { CompactNewsCard } from './CompactNewsCard';
import type { NewsItem } from '@/types/content';

interface NewsSectionProps {
  items: NewsItem[];
}

export function NewsSection({ items }: NewsSectionProps) {
  const featured = items[0];
  const compactItems = items.slice(1, 4);

  if (!featured) return null;

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="md:w-[60%]">
        <FeaturedNewsCard item={featured} featured />
      </div>
      <div className="md:w-[40%] bg-white rounded-lg shadow-sm p-4">
        <div className="divide-y divide-gray-100">
          {compactItems.map((item) => (
            <CompactNewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}