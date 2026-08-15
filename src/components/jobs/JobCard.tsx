'use client';

import Link from 'next/link';
import { MapPin, Building2 } from 'lucide-react';
import { getLocalizedText } from '@/lib/i18n/bilingual';
import { useLanguage } from '@/hooks/use-language';
import { t } from '@/lib/i18n/translations';
import type { JobItem } from '@/types/content';

const EMPLOYMENT_LABELS: Record<string, { bn: string; en: string }> = {
  'full-time': { bn: 'ফুল-টাইম', en: 'Full-time' },
  'part-time': { bn: 'পার্ট-টাইম', en: 'Part-time' },
  remote: { bn: 'রিমোট', en: 'Remote' },
  internship: { bn: 'ইন্টার্নশিপ', en: 'Internship' },
};

interface JobCardProps {
  item: JobItem;
}

export function JobCard({ item }: JobCardProps) {
  const language = useLanguage();
  const empType = item.employmentType;
  const empLabel = EMPLOYMENT_LABELS[empType]
    ? getLocalizedText(EMPLOYMENT_LABELS[empType], language)
    : empType;

  return (
    <Link
      href={`/jobs/${item.slug}`}
      className="block bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
    >
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-medium text-[#757575] flex items-center gap-1">
            <Building2 className="h-3.5 w-3.5" />
            {getLocalizedText(item.company, language)}
          </span>
          <span className="inline-flex items-center rounded-full bg-[#1976d2]/10 px-2.5 py-0.5 text-[10px] font-medium text-[#1976d2]">
            {empLabel}
          </span>
        </div>
        <h3 className="font-semibold text-[16px] leading-snug text-gray-900 line-clamp-2">
          {getLocalizedText(item.title, language)}
        </h3>
        <div className="flex items-center gap-3 text-xs text-[#757575]">
          {item.salaryRange && (
            <span className="font-medium text-gray-700">{item.salaryRange}</span>
          )}
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {item.location.city || item.location.state}
          </span>
        </div>
      </div>
    </Link>
  );
}
