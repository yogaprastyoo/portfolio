import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Prose } from "@/components/content/Prose";
import { renderMarkdown } from "@/lib/markdown";
import { getProjectBySlug, getProjects } from "@/lib/queries";
import { breadcrumbJsonLd, jsonLdScript, SITE } from "@/lib/seo";

export const revalidate = 300;

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${slug}` },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const html = await renderMarkdown(project.bodyMd);
  const crumbs = breadcrumbJsonLd([
    { name: "Home", url: SITE.url },
    { name: "Projects", url: `${SITE.url}/projects` },
    { name: project.title, url: `${SITE.url}/projects/${project.slug}` },
  ]);

  return (
    <main id="main-content" className="py-12">
      <Container>
        <h1 className="text-3xl font-medium">{project.title}</h1>
        <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400">{project.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (<li key={t}><Badge>{t}</Badge></li>))}
        </ul>
        <p className="mt-4 flex gap-4 text-sm">
          {project.repoUrl && (
            <a href={project.repoUrl} rel="noopener noreferrer" target="_blank" className="underline underline-offset-4">
              Source code ↗
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} rel="noopener noreferrer" target="_blank" className="underline underline-offset-4">
              Live demo ↗
            </a>
          )}
        </p>
        {project.coverUrl && (
          <Image
            src={project.coverUrl}
            alt={`${project.title} screenshot`}
            width={1200}
            height={630}
            className="mt-8 rounded-xl"
          />
        )}
        <Prose html={html} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(crumbs) }} />
      </Container>
    </main>
  );
}
