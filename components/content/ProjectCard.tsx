import Link from "next/link";
import type { Project } from "@/lib/types";

export function ProjectCard({ project, number }: { project: Project; number: string }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="flex flex-col justify-between rounded-2xl bg-neutral-100 p-5 transition hover:-translate-y-0.5 dark:bg-neutral-900"
    >
      <span className="w-fit rounded-lg bg-neutral-900 px-2 py-1 text-sm font-medium text-white dark:bg-neutral-100 dark:text-neutral-900">
        {number}
      </span>
      <div className="mt-6">
        <h3 className="text-base font-semibold">{project.title}</h3>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{project.summary}</p>
        <p className="mt-2 text-sm text-neutral-500">{project.tech.join(" · ")}</p>
      </div>
    </Link>
  );
}
