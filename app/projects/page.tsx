import { PillNav } from "@/components/layout/PillNav";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/content/ProjectCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { getProjects } from "@/lib/queries";

export const revalidate = 300;
export const metadata: Metadata = { title: "Projects", alternates: { canonical: "/projects" } };

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <main id="main-content" className="py-12">
      <PillNav />
      <Container>
        <h1 className="text-3xl font-medium">Projects</h1>
        {projects.length === 0 ? (
          <div className="mt-8">
            <EmptyState title="No projects yet" message="Check back soon." />
          </div>
        ) : (
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} number={String(i + 1).padStart(2, "0")} />
            ))}
          </div>
        )}
      </Container>
    </main>
  );
}
