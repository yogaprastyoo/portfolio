import Link from "next/link";
import { CornerBrackets } from "@/components/ui/CornerBrackets";
import type { Project } from "@/lib/types";

export function ProjectCard({ project, number }: { project: Project; number: string }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col justify-between rounded-2xl border border-transparent bg-neutral-100 p-5 hover:-translate-y-0.5 hover:border-accent motion-safe:transition-all motion-safe:duration-200 dark:bg-neutral-900"
    >
      <CornerBrackets />
      <span className="w-fit rounded-lg bg-neutral-900 px-2 py-1 text-sm font-medium text-white dark:bg-neutral-100 dark:text-neutral-900">
        {number}
      </span>
      <div className="mt-6">
        <h3 className="text-base font-semibold group-hover:text-accent motion-safe:transition-colors">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{project.summary}</p>
        <p className="mt-2 text-sm text-neutral-500">{project.tech.join(" · ")}</p>
      </div>
    </Link>
  );
}
