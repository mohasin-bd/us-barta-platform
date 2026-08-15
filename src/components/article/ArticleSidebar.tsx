'use client';

import { MapPin } from 'lucide-react';
import { MyUSBartaWidget } from '@/components/personalization/MyUSBartaWidget';
import { BusinessListingCard } from './BusinessListingCard';
import type { BusinessListing } from '@/types/article';

interface ArticleSidebarProps {
  businesses: BusinessListing[];
}

export function ArticleSidebar({ businesses = [] }: ArticleSidebarProps) {
  const organicListings = businesses.filter((b) => b.listingType === 'organic');
  const featuredListings = businesses.filter((b) => b.listingType === 'featured');

  return (
    <aside className='space-y-8'>
      {/* Contextual Service Recommendations */}
      <div>
        <div className='flex items-center gap-2 mb-1'>
          <h3 className='text-sm font-bold text-[#0f2557]'>
            প্রাসঙ্গিক সেবা
          </h3>
        </div>
        <p className='text-[11px] text-[#9e9e9e] mb-3 flex items-center gap-1'>
          <MapPin className='h-3 w-3' />
          আপনার এলাকার জন্য
        </p>
        <div className='space-y-3'>
          {organicListings.map((listing) => (
            <BusinessListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>

      {/* Featured / Sponsored Business */}
      {featuredListings.length > 0 && (
        <div>
          <div className='flex items-center justify-between mb-3 pb-2 border-b-2 border-[#d32f2f]/30'>
            <h3 className='text-sm font-bold text-[#0f2557]'>
              Featured Business
            </h3>
            <span className='text-[9px] font-bold uppercase tracking-wider text-[#d32f2f] bg-[#d32f2f]/8 px-2 py-0.5 rounded-full'>
              Featured
            </span>
          </div>
          <div className='space-y-3'>
            {featuredListings.map((listing) => (
              <BusinessListingCard key={listing.id} listing={listing} />
            ))}
          </div>
          <p className='mt-2.5 text-[10px] text-[#bdbdbd] text-center'>
            Sponsored — US BARTA-এ বিজ্ঞাপন দিন
          </p>
        </div>
      )}

      {/* My US BARTA — personalized updates */}
      <MyUSBartaWidget />
    </aside>
  );
}
