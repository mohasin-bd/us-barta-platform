'use client';

import Link from 'next/link';
import { FileText, ShieldCheck, HeartPulse, GraduationCap, BookOpen, Briefcase, DollarSign, Moon, Users, Plane, Home } from 'lucide-react';
import { getLocalizedText } from '@/lib/i18n/bilingual';
import { useLanguage } from '@/hooks/use-language';
import { CategoryBadge } from '@/components/common/CategoryBadge';
import type { ContentItem, ContentCategory } from '@/types/content';

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  immigration: ShieldCheck,
  'life-in-america': Home,
  education: GraduationCap,
  health: HeartPulse,
  'jobs-career': Briefcase,
  'money-business': DollarSign,
  'islamic-life': Moon,
  community: Users,
  news: FileText,
  entertainment: BookOpen,
};

const CATEGORY_ICON_BG: Record<string, string> = {
  immigration: 'bg-blue-100 text-[#1976d2]',
  'life-in-america': 'bg-blue-100 text-[#1976d2]',
  education: 'bg-green-100 text-[#388e3c]',
  health: 'bg-teal-100 text-[#00897b]',
  'jobs-career': 'bg-blue-100 text-[#1976d2]',
  'money-business': 'bg-green-100 text-[#388e3c]',
  'islamic-life': 'bg-green-100 text-[#388e3c]',
  community: 'bg-orange-100 text-[#f57c00]',
  news: 'bg-blue-100 text-[#1976d2]',
  entertainment: 'bg-purple-100 text-[#7b1fa2]',
};

interface GuideCardProps {
  item: ContentItem;
}

export function GuideCard({ item }: GuideCardProps) {
  const language = useLanguage();
  const category = item.taxonomy.primaryCategory;
  const Icon = CATEGORY_ICONS[category] || FileText;
  const iconBg = CATEGORY_ICON_BG[category] || 'bg-gray-100 text-gray-600';

  return (
    <Link
      href={`/${category}/${item.slug}`}
      className="block bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
    >
      <div className="flex items-start gap-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${iconBg}`}>
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex-1 min-w-0 space-y-1.5">
          <CategoryBadge category={category} size="sm" />
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
