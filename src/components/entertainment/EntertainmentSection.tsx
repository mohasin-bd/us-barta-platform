'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Film } from 'lucide-react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { t } from '@/lib/i18n/translations';
import { getLocalizedText } from '@/lib/i18n/bilingual';
import { useLanguage } from '@/hooks/use-language';
import type { EntertainmentItem, EntertainmentRegion, EntertainmentType } from '@/types/content';

// --- Region badge colors ---
const REGION_BADGE: Record<EntertainmentRegion, string> = {
  bangladesh: 'bg-[#388e3c] text-white',
  india: 'bg-[#f57c00] text-white',
  hollywood: 'bg-[#0f2557] text-white',
};

// --- Category label map ---
const CATEGORY_LABELS: Record<EntertainmentType, { bn: string; en: string }> = {
  movie: { bn: 'সিনেমা', en: 'Movie' },
  tv: { bn: 'টিভি', en: 'TV' },
  ott: { bn: 'ওটিটি', en: 'OTT' },
  celebrity: { bn: 'সেলিবরিটি', en: 'Celebrity' },
  music: { bn: 'সঙ্গীত', en: 'Music' },
  review: { bn: 'রিভিউ', en: 'Review' },
  trending: { bn: 'ট্রেন্ডিং', en: 'Trending' },
  gossip: { bn: 'গসিপ', en: 'Gossip' },
};

interface EntertainmentSectionProps {
  items: EntertainmentItem[];
}

// --- Sub-components (must be outside parent to avoid re-creation on render) ---

function FeaturedImage({ image, alt }: { image?: string; alt: string }) {
  if (image) {
    return (
      <div className="relative aspect-video w-full">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 100vw"
        />
      </div>
    );
  }
  return (
    <div className="relative aspect-video w-full bg-gray-100 flex items-center justify-center">
      <Film className="h-12 w-12 text-gray-300" />
    </div>
  );
}

function EcosystemImage({ image, alt }: { image?: string; alt: string }) {
  if (image) {
    return (
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 33vw"
        />
      </div>
    );
  }
  return (
    <div className="relative aspect-[4/3] w-full bg-gray-100 flex items-center justify-center">
      <Film className="h-8 w-8 text-gray-300" />
    </div>
  );
}

export function EntertainmentSection({ items }: EntertainmentSectionProps) {
  const language = useLanguage();

  if (items.length === 0) return null;

  // Featured item (first)
  const featured = items[0];

  // Group remaining items by region
  const remaining = items.slice(1);
  const groupedByRegion = remaining.reduce(
    (acc, item) => {
      const region = item.entertainmentRegion;
      if (!acc[region]) acc[region] = [];
      acc[region].push(item);
      return acc;
    },
    {} as Record<EntertainmentRegion, EntertainmentItem[]>,
  );

  // Pick one item per ecosystem in order: bangladesh, india, hollywood
  const regions: EntertainmentRegion[] = ['bangladesh', 'india', 'hollywood'];
  const ecosystemItems: (EntertainmentItem | undefined)[] = regions.map(
    (region) => groupedByRegion[region]?.[0],
  );

  const getRegionLabel = (region: EntertainmentRegion): string => {
    return getLocalizedText(t.entertainment[region] as { bn: string; en: string }, language);
  };

  const getTypeLabel = (type?: EntertainmentType): string | null => {
    if (!type || !CATEGORY_LABELS[type]) return null;
    return getLocalizedText(CATEGORY_LABELS[type], language);
  };

  const featuredTitle = getLocalizedText(featured.title, language);
  const featuredRegionLabel = getRegionLabel(featured.entertainmentRegion);
  const featuredTypeLabel = getTypeLabel(featured.entertainmentType);

  return (
    <section>
      <SectionHeader
        title={t.sections.entertainment}
        seeAllHref="/entertainment"
        seeAllLabel={t.nav.seeAll}
      />

      {/* --- Large Featured Card --- */}
      <Link
        href={`/entertainment/${featured.slug}`}
        className="block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow mb-4"
      >
        <div className="relative">
          <FeaturedImage image={featured.image} alt={featuredTitle} />
          {/* Badges over image — bottom-left */}
          <div className="absolute bottom-2 left-2 flex items-center gap-1.5 z-10">
            <span
              className={`inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-semibold ${REGION_BADGE[featured.entertainmentRegion]}`}
            >
              {featuredRegionLabel}
            </span>
            {featuredTypeLabel && (
              <span className="inline-flex items-center rounded-md bg-black/60 px-2 py-0.5 text-[11px] font-semibold text-white">
                {featuredTypeLabel}
              </span>
            )}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg leading-snug text-gray-900 line-clamp-2">
            {featuredTitle}
          </h3>
        </div>
      </Link>

      {/* --- Three Ecosystems Row --- */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {regions.map((region, idx) => {
          const item = ecosystemItems[idx];
          if (!item) return null;

          const title = getLocalizedText(item.title, language);
          const regionLabel = getRegionLabel(item.entertainmentRegion);

          return (
            <Link
              key={item.id}
              href={`/entertainment/${item.slug}`}
              className="block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <EcosystemImage image={item.image} alt={title} />
              <div className="p-3">
                <span
                  className={`inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-semibold mb-1.5 ${REGION_BADGE[region]}`}
                >
                  {regionLabel}
                </span>
                <h4 className="font-semibold text-sm leading-snug text-gray-900 line-clamp-2">
                  {title}
                </h4>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
