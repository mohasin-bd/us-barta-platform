'use client';

import { ShieldCheck, Briefcase, GraduationCap, Heart, Moon, MapPin, type LucideIcon } from 'lucide-react';
import { getLocalizedText } from '@/lib/i18n/bilingual';
import { useLanguage } from '@/hooks/use-language';
import { NotificationBadge } from '@/components/common/NotificationBadge';
import type { MyUSBartaNotification } from '@/types/content';

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Briefcase,
  GraduationCap,
  Heart,
  Moon,
  MapPin,
};

interface MyUSBartaItemProps {
  item: MyUSBartaNotification;
}

export function MyUSBartaItem({ item }: MyUSBartaItemProps) {
  const language = useLanguage();
  const Icon = iconMap[item.icon] || MapPin;

  return (
    <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors relative">
      <Icon className="h-5 w-5 text-[#0f2557] shrink-0" />
      <span className="flex-1 text-sm text-gray-800 truncate">
        {getLocalizedText(item.label, language)}
      </span>
      <NotificationBadge count={item.count} />
    </div>
  );
}
