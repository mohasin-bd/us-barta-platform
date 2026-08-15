import type { BusinessListing } from '@/types/article';

// ============================================================
// MOCK BUSINESS DATA — Contextual Service Recommendations
// These are SAMPLE listings for the prototype.
// In production, these would come from a business database
// and be matched using the recommendation engine.
//
// Architecture note: The recommendation engine would consider
// ARTICLE CONTEXT + USER LOCATION + USER PROFILE +
// BUSINESS CATEGORY + SERVICE MATCH + DISTANCE +
// RATING + SPONSORSHIP → CONTEXTUAL RECOMMENDATIONS
// ============================================================

export const sampleBusinessListings: BusinessListing[] = [
  // ─── ORGANIC LISTING 1: Law Firm (logo) ─────────────────────
  {
    id: 'biz-1',
    name: 'Rahman & Associates Immigration Law',
    businessType: 'law-firm',
    tagline: 'বাংলাদেশি কমিউনিটির জন্য বিশেষায়িত ইমিগ্রেশন আইন সেবা',
    specialties: ['H-1B', 'Green Card', 'Family Immigration', 'Citizenship'],
    imageType: 'logo',
    logoUrl: '/images/biz-logo-rahman.png',
    verified: true,
    languages: ['বাংলা', 'English', 'Hindi'],
    location: { city: 'Jackson Heights', state: 'NY', neighborhood: 'Queens' },
    distance: '0.3 mi',
    rating: 4.8,
    reviewCount: 127,
    phone: '(718) 555-0142',
    website: 'https://rahmanlaw.example.com',
    profileUrl: '/business/rahman-associates',
    listingType: 'organic',
    relevantCategories: ['immigration'],
    businessCategory: 'immigration-attorney',
    subcategories: ['family-immigration', 'employment-visa', 'naturalization'],
    targetAudience: ['new-immigrant', 'family', 'professional'],
    serviceArea: ['Queens', 'NYC', 'Long Island'],
    recommendationReason: 'বাংলাদেশি কমিউনিটির জন্য বিশেষায়িত',
    relevanceScore: 0.95,
  },

  // ─── ORGANIC LISTING 2: Individual Attorney (headshot) ──────
  {
    id: 'biz-2',
    name: 'Immigration Solutions NY',
    businessType: 'individual-attorney',
    tagline: 'পেশাদার ইমিগ্রেশন আইন সহায়তা',
    specialties: ['Employment Visa', 'Citizenship', 'TPS', 'DACA'],
    imageType: 'headshot',
    profileImageUrl: '/images/biz-headshot-attorney.png',
    verified: true,
    languages: ['English', 'বাংলা', 'Spanish'],
    location: { city: 'Jamaica', state: 'NY', neighborhood: 'Queens' },
    distance: '1.2 mi',
    rating: 4.7,
    reviewCount: 89,
    phone: '(718) 555-0198',
    website: 'https://immigrationsolutionsny.example.com',
    profileUrl: '/business/immigration-solutions-ny',
    listingType: 'organic',
    relevantCategories: ['immigration'],
    businessCategory: 'immigration-attorney',
    subcategories: ['employment-visa', 'tps-daca', 'citizenship'],
    targetAudience: ['professional', 'student', 'new-immigrant'],
    serviceArea: ['Queens', 'Brooklyn', 'NYC'],
    recommendationReason: 'কর্মসংস্থানভিত্তিক ভিসায় বিশেষজ্ঞ',
    relevanceScore: 0.88,
  },

  // ─── ORGANIC LISTING 3: Legal Aid Organization (logo) ───────
  {
    id: 'biz-3',
    name: 'Bengali Legal Aid Center',
    businessType: 'nonprofit-organization',
    tagline: 'বাংলা ভাষায় আইনি সহায়তা',
    specialties: ['Family Immigration', 'Asylum', 'Green Card'],
    imageType: 'logo',
    logoUrl: '/images/biz-logo-bengali-aid.png',
    verified: false,
    languages: ['বাংলা', 'English'],
    location: { city: 'Astoria', state: 'NY', neighborhood: 'Queens' },
    distance: '2.8 mi',
    rating: 4.5,
    reviewCount: 64,
    phone: '(718) 555-0267',
    website: 'https://bengalilegalaid.example.com',
    profileUrl: '/business/bengali-legal-aid',
    listingType: 'organic',
    relevantCategories: ['immigration', 'community'],
    businessCategory: 'legal-services',
    subcategories: ['family-immigration', 'asylum', 'pro-bono'],
    targetAudience: ['new-immigrant', 'family', 'senior'],
    serviceArea: ['Queens', 'Brooklyn', 'Bronx'],
    recommendationReason: 'বাংলা ভাষায় পরামর্শ পাওয়া যায়',
    relevanceScore: 0.82,
  },

  // ─── FEATURED / SPONSORED LISTING: Premium Law Firm (logo) ─
  {
    id: 'biz-featured-1',
    name: 'Patel & Singh Law Group',
    businessType: 'law-firm',
    tagline: 'Award-Winning Immigration Practice',
    specialties: ['H-1B', 'O-1', 'EB-5', 'L-1', 'Green Card'],
    imageType: 'logo',
    logoUrl: '/images/biz-logo-patel-singh.png',
    verified: true,
    languages: ['English', 'Hindi', 'Gujarati', 'বাংলা'],
    location: { city: 'Midtown', state: 'NY' },
    distance: '5.1 mi',
    rating: 4.9,
    reviewCount: 312,
    phone: '(212) 555-0891',
    website: 'https://patelsinghlaw.example.com',
    profileUrl: '/business/patel-singh-law-group',
    listingType: 'featured',
    relevantCategories: ['immigration'],
    businessCategory: 'immigration-attorney',
    subcategories: ['employment-visa', 'investor-visa', 'green-card'],
    targetAudience: ['professional', 'business-owner', 'student'],
    serviceArea: ['NYC', 'New Jersey', 'Connecticut'],
    relevanceScore: 0.91,
  },
];
