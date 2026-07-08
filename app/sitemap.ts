import type { MetadataRoute } from "next";
import { getPosts, getProjects } from "@/lib/queries";
import { SITE } from "@/lib/seo";

export const revalidate = 300;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, projects] = await Promise.all([getPosts(), getProjects()]);
  return [
    { url: SITE.url, priority: 1 },
    { url: `${SITE.url}/projects` },
    { url: `${SITE.url}/blog` },
    ...projects.map((p) => ({ url: `${SITE.url}/projects/${p.slug}`, lastModified: p.updatedAt })),
    ...posts.map((p) => ({ url: `${SITE.url}/blog/${p.slug}`, lastModified: p.updatedAt })),
  ];
}
