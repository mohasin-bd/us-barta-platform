// ============================================================
// US BARTA — useLocation Hook
// ============================================================

import { usePreferencesStore } from '@/store/preferences';

/** Get current location from preferences */
export function useLocation() {
  return usePreferencesStore((s) => s.location);
}

/** Get formatted location string */
export function useLocationString() {
  const location = useLocation();
  if (location.city && location.state) {
    return `${location.city}, ${location.state}`;
  }
  return location.state;
}
