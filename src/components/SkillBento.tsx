import { cn } from '@/lib/utils';

interface SkillBentoProps {
  title: string;
  content: string;
  isLarge?: boolean;
  isDashed?: boolean;
  span?: number;
}

export default function SkillBento({
  title,
  content,
  isLarge = false,
  isDashed = false,
  span = 1
}: SkillBentoProps) {
  return (
    <div
      className={cn(
        "border-[3px] border-[#020122] p-6 shadow-[6px_6px_0_#000000]",
        isLarge ? "bg-[#020122] text-white" : "bg-white",
        isDashed && "border-dashed",
        span > 1 ? `md:col-span-2` : `md:col-span-1`,
      )}
    >
      <p className="text-xs font-bold mb-4 opacity-70">{title}</p>
      <div
        className="text-xl md:text-2xl font-bold leading-tight [&>div]:grid [&>div]:grid-cols-2 [&>div]:gap-2"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}