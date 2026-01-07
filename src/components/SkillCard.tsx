import {
  Card,
  CardContent,
} from '@/components/ui/card';

interface SkillCardProps {
  skill: string;
}

export default function SkillCard({
  skill,
}: SkillCardProps) {
  const initials = skill.split(/\.js|\.ts|\.css|\.jsx|\.tsx/i)
    .map(s => s.charAt(0).toUpperCase())
    .filter(Boolean)
    .join('') || skill.substring(0, 2).toUpperCase();

  return (
    <Card className="">
      <CardContent className="flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-md bg-gradient-to-br from-primary/20 to-primary/5 text-primary font-bold text-xl">
          {initials}
        </div>
        <span className="text-sm font-medium">{skill}</span>
      </CardContent>
    </Card>
  );
}
