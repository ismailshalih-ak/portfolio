import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';

interface ExperienceItemProps {
  date: string;
  position: string;
  company: string;
  techStack: string;
  description?: string;
  projectName?: string;
  items?: string[];
}

export default function ExperienceItem({
  date,
  position,
  company,
  techStack,
  description,
  projectName,
  items,
}: ExperienceItemProps) {
  return (
    <div className="mb-8">
      <p className="font-bold text-primary text-sm mb-3">{date}</p>
      <Card>
        <CardContent className="">
          <CardTitle className="text-xl mb-1">{position}</CardTitle>
          <CardDescription className="text-base italic mb-4">{company}</CardDescription>
          {projectName && <p className="mb-3"><strong>{projectName}</strong></p>}
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.split(',').map((tech, index) => (
              <span key={index} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                {tech.trim()}
              </span>
            ))}
          </div>

          {(description || items) && (
            <div className="mt-4">
              {description && <p className="mb-4">{description}</p>}
              {items && items.length > 0 && (
                <ul className="list-disc list-inside space-y-2">
                  {items.map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
