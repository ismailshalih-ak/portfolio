import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface SkillBentoProps {
  title: string;
  children?: ReactNode;
  content?: string;
  isLarge?: boolean;
  isDashed?: boolean;
  span?: number;
}

export default function SkillBento({
  title,
  children,
  content,
  isLarge = false,
  isDashed = false,
  span = 1
}: SkillBentoProps) {
  return (
    <div
      className={cn(
        "border-[3px] border-text-primary p-6 shadow-[6px_6px_0_var(--color-black)]",
        isLarge ? "bg-text-primary text-white" : "bg-bg-secondary",
        isDashed && "border-dashed",
        span > 1 ? `md:col-span-2` : `md:col-span-1`,
      )}
    >
      <p className="text-xs font-bold mb-4 opacity-70">{title}</p>
      <div className="text-xl md:text-2xl font-bold leading-tight space-y-1 [&>div]:grid [&>div]:grid-cols-2 [&>div]:gap-2">
        { children }
      </div>
    </div>
  );
}