'use client';

import { SectionHeader } from '@/components/common/SectionHeader';
import { EntertainmentFeaturedCard } from './EntertainmentFeaturedCard';
import { EntertainmentCompactCard } from './EntertainmentCompactCard';
import { t } from '@/lib/i18n/translations';
import type { EntertainmentItem } from '@/types/content';

interface EntertainmentSectionProps {
  items: EntertainmentItem[];
}

export function EntertainmentSection({ items }: EntertainmentSectionProps) {
  const featured = items[0];
  const compactItems = items.slice(1, 4);

  if (!featured) return null;

  return (
    <section>
      <SectionHeader title={t.sections.entertainment} seeAllHref="/entertainment" />
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-[60%]">
          <EntertainmentFeaturedCard item={featured} />
        </div>
        <div className="md:w-[40%] bg-white rounded-lg shadow-sm p-4">
          <div className="divide-y divide-gray-100">
            {compactItems.map((item) => (
              <EntertainmentCompactCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
