'use client';

import { Star, MapPin, Phone, ExternalLink, BadgeCheck, Globe } from 'lucide-react';
import { SafeImage } from '@/components/common/SafeImage';
import type { BusinessListing } from '@/types/article';

interface BusinessListingCardProps {
  listing: BusinessListing;
}

/**
 * Gets the image source based on the business image type.
 * Falls back gracefully if no image is provided.
 */
function getBusinessImage(listing: BusinessListing): string | undefined {
  if (listing.imageType === 'headshot' && listing.profileImageUrl) {
    return listing.profileImageUrl;
  }
  if (listing.logoUrl) {
    return listing.logoUrl;
  }
  return undefined;
}

/**
 * Generates a branded fallback initial based on business name.
 * Used when no logo or headshot is available.
 */
function getBusinessInitial(name: string): string {
  return name.charAt(0).toUpperCase();
}

export function BusinessListingCard({ listing }: BusinessListingCardProps) {
  const isFeatured = listing.listingType === 'featured';
  const isSponsored = listing.listingType === 'sponsored';
  const isPromoted = isFeatured || isSponsored;
  const imageSrc = getBusinessImage(listing);
  const isHeadshot = listing.imageType === 'headshot';

  return (
    <div
      className={`rounded-xl border p-3.5 transition-shadow hover:shadow-sm ${
        isFeatured
          ? 'border-[#d32f2f]/20 bg-gradient-to-br from-white to-[#fef7f7]'
          : 'border-gray-200/80 bg-white'
      }`}
    >
      {/* ── Top Row: Visual Identity + Business Info ── */}
      <div className='flex gap-3'>
        {/* Logo / Headshot — 56px rounded area */}
        <div className='flex-shrink-0'>
          {imageSrc ? (
            <div
              className={`relative overflow-hidden bg-gray-50 flex items-center justify-center ${
                isHeadshot
                  ? 'w-14 h-14 rounded-full'
                  : 'w-14 h-14 rounded-[10px]'
              }`}
            >
              <SafeImage
                src={imageSrc}
                alt={listing.name}
                width={56}
                height={56}
                className={`object-cover ${
                  isHeadshot ? 'rounded-full' : 'rounded-[10px]'
                }`}
              />
            </div>
          ) : (
            <div
              className={`w-14 h-14 rounded-[10px] bg-gradient-to-br from-[#0f2557] to-[#0a1929] flex items-center justify-center ${
                isHeadshot ? 'rounded-full' : ''
              }`}
            >
              <span className='text-lg font-bold text-white/80'>
                {getBusinessInitial(listing.name)}
              </span>
            </div>
          )}
        </div>

        {/* Business Name + Tagline + Badges */}
        <div className='min-w-0 flex-1'>
          <div className='flex items-start gap-1.5'>
            <h4 className='text-[13px] font-bold text-[#212121] leading-snug truncate'>
              {listing.name}
            </h4>
            {listing.verified && (
              <BadgeCheck className='h-3.5 w-3.5 flex-shrink-0 text-[#1976d2] mt-0.5' />
            )}
          </div>
          {listing.tagline && (
            <p className='text-[11px] text-[#757575] mt-0.5 leading-snug line-clamp-1'>
              {listing.tagline}
            </p>
          )}
          {/* Languages spoken */}
          {listing.languages && listing.languages.length > 0 && (
            <div className='flex items-center gap-1 mt-1'>
              <Globe className='h-2.5 w-2.5 text-[#9e9e9e]' />
              <span className='text-[10px] text-[#9e9e9e]'>
                {listing.languages.join(' · ')}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* ── Specialty Tags ── */}
      <div className='flex flex-wrap gap-1.5 mt-3'>
        {listing.specialties.slice(0, 4).map((s) => (
          <span
            key={s}
            className='text-[10px] font-medium text-[#0f2557] bg-[#0f2557]/[0.06] px-2 py-[3px] rounded-full leading-tight'
          >
            {s}
          </span>
        ))}
      </div>

      {/* ── Location + Rating + Distance ── */}
      <div className='flex items-center gap-2.5 mt-2.5 text-[11px] text-[#757575]'>
        <span className='flex items-center gap-1 min-w-0 truncate'>
          <MapPin className='h-3 w-3 flex-shrink-0 text-[#9e9e9e]' />
          <span className='truncate'>
            {listing.location.neighborhood
              ? `${listing.location.neighborhood}, ${listing.location.state}`
              : `${listing.location.city}, ${listing.location.state}`}
          </span>
        </span>
        <span className='flex items-center gap-0.5 flex-shrink-0'>
          <Star className='h-3 w-3 text-amber-500 fill-amber-500' />
          <span className='font-semibold text-[#333]'>{listing.rating}</span>
          {listing.reviewCount && (
            <span className='text-[#9e9e9e]'>({listing.reviewCount})</span>
          )}
        </span>
        {listing.distance && (
          <span className='flex-shrink-0 text-[#9e9e9e]'>{listing.distance}</span>
        )}
      </div>

      {/* ── Contextual Recommendation Reason (organic only) ── */}
      {listing.recommendationReason && !isPromoted && (
        <p className='text-[11px] text-[#1976d2] mt-2 font-medium leading-snug'>
          {listing.recommendationReason}
        </p>
      )}

      {/* ── Actions ── */}
      <div className='flex gap-2 mt-3'>
        <a
          href={listing.profileUrl || '#'}
          className='flex-1 flex items-center justify-center gap-1.5 text-[11px] font-semibold text-[#0f2557] bg-[#0f2557]/[0.05] hover:bg-[#0f2557]/[0.1] rounded-lg py-[7px] transition-colors'
        >
          <ExternalLink className='h-3 w-3' />
          প্রোফাইল দেখুন
        </a>
        {listing.phone && (
          <a
            href={`tel:${listing.phone}`}
            className='flex items-center justify-center text-white bg-[#0f2557] hover:bg-[#0a1929] rounded-lg w-9 h-[34px] transition-colors flex-shrink-0'
            aria-label={`Call ${listing.name}`}
          >
            <Phone className='h-3.5 w-3.5' />
          </a>
        )}
      </div>
    </div>
  );
}
