'use client';

interface NotificationBadgeProps {
  count: number;
}

export function NotificationBadge({ count }: NotificationBadgeProps) {
  if (count <= 0) return null;

  return (
    <span className="absolute -top-1.5 -right-1.5 min-w-5 h-5 flex items-center justify-center rounded-full bg-[#d32f2f] text-white text-[11px] font-bold leading-none px-1">
      {count > 99 ? '99+' : count}
    </span>
  );
}
