import {
  Card,
  CardContent,
} from '@/components/ui/card';

interface ExperienceCardProps {
  date: string;
  role: string;
  company: string;
  companyDesc: string;
  workType?: string;
  techStack: string[];
  description: string;
  items?: string[];
  projectName?: string;
  timelineColor: string;
}

export default function ExperienceCard({
  date,
  role,
  company,
  companyDesc,
  workType,
  techStack,
  description,
  items,
  projectName,
  timelineColor,
}: ExperienceCardProps) {
  return (
    <div className="flex gap-0 mb-8">
      <div className="w-1 flex-shrink-0" style={{ backgroundColor: timelineColor }}></div>
      <div className="border-[3px] border-[#020122] bg-white shadow-[6px_6px_0_#000000] flex-1">
        <div className="p-6">
          <div className="flex items-baseline gap-4 mb-3">
            <span className="font-['Space_Grotesk'] font-bold text-md text-[#4F46E5]">{date}</span>
            {workType && (
              <span className="text-lg font-bold bg-[#020122] text-white px-2 py-1">{workType}</span>
            )}
          </div>
          <p className="font-semibold text-xl mb-1">{role}</p>
          <div className="flex items-center gap-4 mb-2">
            <h3 className="font-['Space_Grotesk'] font-bold text-lg">{company}</h3>
            <p className="text-md text-gray-600">{companyDesc}</p>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech, index) => (
              <span key={index} className="px-3 py-1 border-[2px] border-[#020122] text-[#020122] font-['Space_Mono'] text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
          <p className="mt-4">{description}</p>
          {projectName && (
            <p className="mt-4"><strong>{projectName}</strong></p>
          )}
          {items && items.length > 0 && (
            <ul className="space-y-2 mt-4">
              {items.map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}