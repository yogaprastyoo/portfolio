import { Badge } from "@/components/ui/Badge";
import type { Skill } from "@/lib/types";

export function SkillGroup({ title, skills }: { title: string; skills: Skill[] }) {
  if (skills.length === 0) return null;
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase text-neutral-600 dark:text-neutral-400">{title}</h3>
      <ul className="mt-2 flex flex-wrap gap-2">
        {skills.map((s) => (
          <li key={s.id}>
            <Badge>{s.name}</Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}
