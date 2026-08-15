'use client';

import Link from 'next/link';
import { HeartPulse, ShieldCheck, Brain, Activity, Apple, Dumbbell, Stethoscope } from 'lucide-react';
import { getLocalizedText } from '@/lib/i18n/bilingual';
import { useLanguage } from '@/hooks/use-language';
import { CategoryBadge } from '@/components/common/CategoryBadge';
import type { HealthItem } from '@/types/content';

const HEALTH_ICONS: Record<string, React.ElementType> = {
  insurance: ShieldCheck,
  'mental-health': Brain,
  senior: HeartPulse,
  family: Activity,
  nutrition: Apple,
  fitness: Dumbbell,
};

const HEALTH_LABELS: Record<string, { bn: string; en: string }> = {
  insurance: { bn: 'বীমা', en: 'Insurance' },
  'mental-health': { bn: 'মানসিক স্বাস্থ্য', en: 'Mental Health' },
  senior: { bn: 'সিনিয়র', en: 'Senior' },
  family: { bn: 'পরিবার', en: 'Family' },
  nutrition: { bn: 'পুষ্টি', en: 'Nutrition' },
  fitness: { bn: 'ফিটনেস', en: 'Fitness' },
};

interface HealthCardProps {
  item: HealthItem;
}

export function HealthCard({ item }: HealthCardProps) {
  const language = useLanguage();
  const healthCat = item.healthCategory || 'family';
  const Icon = HEALTH_ICONS[healthCat] || Stethoscope;

  return (
    <Link
      href={`/health/${item.slug}`}
      className="block bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-teal-100 text-[#00897b] flex items-center justify-center flex-shrink-0">
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex-1 min-w-0 space-y-1.5">
          <div className="flex items-center gap-2 flex-wrap">
            <CategoryBadge category="health" size="sm" />
            {healthCat && HEALTH_LABELS[healthCat] && (
              <span className="text-[10px] text-[#00897b] font-medium">
                {getLocalizedText(HEALTH_LABELS[healthCat], language)}
              </span>
            )}
          </div>
          <h3 className="font-semibold text-[16px] leading-snug text-gray-900 line-clamp-2">
            {getLocalizedText(item.title, language)}
          </h3>
          {item.summary && (
            <p className="text-sm text-[#424242] line-clamp-2">
              {getLocalizedText(item.summary, language)}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
