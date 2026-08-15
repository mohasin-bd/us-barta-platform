import type { BusinessListing } from '@/types/article';

// ============================================================
// MOCK BUSINESS DATA — Contextual Service Recommendations
// These are SAMPLE listings for the prototype.
// In production, these would come from a business database
// and be matched using the recommendation engine.
// ============================================================

export const sampleBusinessListings: BusinessListing[] = [
  {
    id: 'biz-1',
    name: 'Rahman & Associates Immigration Law',
    tagline: 'বাংলাদেশি কমিউনিটির জন্য বিশেষায়িত ইমিগ্রেশন আইন সেবা',
    specialties: ['H-1B', 'Green Card', 'Family Immigration', 'Citizenship'],
    location: { city: 'Jackson Heights', state: 'NY', neighborhood: 'Queens' },
    rating: 4.8,
    reviewCount: 127,
    distance: '0.3 mi',
    phone: '(718) 555-0142',
    profileUrl: '#',
    listingType: 'organic',
    relevantCategories: ['immigration'],
    businessCategory: 'immigration-attorney',
    recommendationReason: 'আপনার এলাকায় সর্বোচ্চ রেটেড ইমিগ্রেশন আইন সেবা',
  },
  {
    id: 'biz-2',
    name: 'Immigration Solutions NY',
    tagline: 'পেশাদার ইমিগ্রেশন আইন সহায়তা',
    specialties: ['Employment Visa', 'Citizenship', 'TPS', 'DACA'],
    location: { city: 'Jamaica', state: 'NY', neighborhood: 'Queens' },
    rating: 4.7,
    reviewCount: 89,
    distance: '1.2 mi',
    phone: '(718) 555-0198',
    profileUrl: '#',
    listingType: 'organic',
    relevantCategories: ['immigration'],
    businessCategory: 'immigration-attorney',
    recommendationReason: 'কর্মসংস্থানভিত্তিক ভিসায় বিশেষজ্ঞ',
  },
  {
    id: 'biz-3',
    name: 'Bengali Legal Aid Center',
    tagline: 'বাংলা ভাষায় আইনি সহায়তা',
    specialties: ['Family Immigration', 'Asylum', 'Green Card', 'Naturalization'],
    location: { city: 'Astoria', state: 'NY', neighborhood: 'Queens' },
    rating: 4.5,
    reviewCount: 64,
    distance: '2.8 mi',
    phone: '(718) 555-0267',
    profileUrl: '#',
    listingType: 'organic',
    relevantCategories: ['immigration'],
    businessCategory: 'immigration-attorney',
    recommendationReason: 'বাংলা ভাষায় সরাসরি পরামর্শ পাওয়া যায়',
  },
  {
    id: 'biz-featured-1',
    name: 'Patel & Singh Law Group',
    tagline: 'Award-Winning Immigration Practice',
    specialties: ['H-1B', 'O-1', 'EB-5', 'L-1', 'Green Card'],
    location: { city: 'Midtown', state: 'NY' },
    rating: 4.9,
    reviewCount: 312,
    phone: '(212) 555-0891',
    profileUrl: '#',
    listingType: 'featured',
    relevantCategories: ['immigration'],
    businessCategory: 'immigration-attorney',
  },
];
