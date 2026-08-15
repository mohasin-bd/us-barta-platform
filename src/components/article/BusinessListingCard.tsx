'use client';

import { Star, MapPin, Phone, ExternalLink, BadgeCheck } from 'lucide-react';
import type { BusinessListing } from '@/types/article';

interface BusinessListingCardProps {
  listing: BusinessListing;
}

export function BusinessListingCard({ listing }: BusinessListingCardProps) {
  const isFeatured = listing.listingType === 'featured';

  return (
    <div
      className={`rounded-xl border p-4 transition-shadow hover:shadow-sm ${
        isFeatured
          ? 'border-[#d32f2f]/30 bg-gradient-to-br from-white to-[#fef7f7]'
          : 'border-gray-200 bg-white'
      }`}
    >
      {/* Header: name + featured badge */}
      <div className='flex items-start justify-between gap-2'>
        <div className='min-w-0'>
          <h4 className='text-sm font-bold text-[#212121] leading-snug truncate'>
            {listing.name}
          </h4>
          {listing.tagline && (
            <p className='text-[11px] text-[#757575] mt-0.5 leading-snug'>
              {listing.tagline}
            </p>
          )}
        </div>
        {isFeatured && (
          <span className='flex-shrink-0 inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-[#d32f2f] bg-[#d32f2f]/8 px-2 py-0.5 rounded-full'>
            <BadgeCheck className='h-3 w-3' />
            Featured
          </span>
        )}
      </div>

      {/* Specialties chips */}
      <div className='flex flex-wrap gap-1.5 mt-3'>
        {listing.specialties.map((s) => (
          <span
            key={s}
            className='text-[10px] font-medium text-[#0f2557] bg-[#0f2557]/6 px-2 py-0.5 rounded-full'
          >
            {s}
          </span>
        ))}
      </div>

      {/* Meta: location + rating + distance */}
      <div className='flex items-center gap-3 mt-3 text-[11px] text-[#757575]'>
        <span className='flex items-center gap-1'>
          <MapPin className='h-3 w-3' />
          {listing.location.neighborhood
            ? `${listing.location.neighborhood}, ${listing.location.state}`
            : `${listing.location.city}, ${listing.location.state}`}
        </span>
        <span className='flex items-center gap-0.5'>
          <Star className='h-3 w-3 text-amber-500 fill-amber-500' />
          <span className='font-semibold text-[#333]'>{listing.rating}</span>
          {listing.reviewCount && (
            <span>({listing.reviewCount})</span>
          )}
        </span>
        {listing.distance && (
          <span className='text-[#9e9e9e]'>{listing.distance}</span>
        )}
      </div>

      {/* Recommendation reason (organic only) */}
      {listing.recommendationReason && (
        <p className='text-[11px] text-[#1976d2] mt-2 font-medium'>
          {listing.recommendationReason}
        </p>
      )}

      {/* Actions */}
      <div className='flex gap-2 mt-3'>
        <a
          href={listing.profileUrl}
          className='flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold text-[#0f2557] bg-[#0f2557]/5 hover:bg-[#0f2557]/10 rounded-lg py-2 transition-colors'
        >
          <ExternalLink className='h-3 w-3' />
          প্রোফাইল দেখুন
        </a>
        {listing.phone && (
          <a
            href={`tel:${listing.phone}`}
            className='flex items-center justify-center gap-1.5 text-xs font-semibold text-white bg-[#0f2557] hover:bg-[#0a1929] rounded-lg px-3 py-2 transition-colors'
          >
            <Phone className='h-3 w-3' />
          </a>
        )}
      </div>
    </div>
  );
}
