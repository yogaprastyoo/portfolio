import { getSupabase, SUPABASE_URL } from "./supabase";
import type { Post, Project, Skill, SkillCategory } from "./types";

type ProjectRow = {
  id: string; slug: string; title: string; summary: string; body_md: string;
  tech: string[]; repo_url: string | null; demo_url: string | null; cover_path: string | null;
  featured: boolean; sort_order: number; published: boolean; created_at: string; updated_at: string;
};
type PostRow = {
  id: string; slug: string; title: string; excerpt: string; body_md: string;
  cover_path: string | null; tags: string[]; published: boolean;
  published_at: string | null; updated_at: string;
};
type SkillRow = { id: string; name: string; category: SkillCategory; is_learning: boolean; sort_order: number };

function coverUrl(path: string | null, baseUrl: string): string | null {
  return path ? `${baseUrl}/storage/v1/object/public/covers/${path}` : null;
}

export function mapProject(r: ProjectRow, baseUrl: string): Project {
  return {
    id: r.id, slug: r.slug, title: r.title, summary: r.summary, bodyMd: r.body_md,
    tech: r.tech, repoUrl: r.repo_url, demoUrl: r.demo_url,
    coverUrl: coverUrl(r.cover_path, baseUrl), featured: r.featured, updatedAt: r.updated_at,
  };
}

export function mapPost(r: PostRow, baseUrl: string): Post {
  return {
    id: r.id, slug: r.slug, title: r.title, excerpt: r.excerpt, bodyMd: r.body_md,
    coverUrl: coverUrl(r.cover_path, baseUrl), tags: r.tags,
    publishedAt: r.published_at ?? r.updated_at, updatedAt: r.updated_at,
  };
}

export function mapSkill(r: SkillRow): Skill {
  return { id: r.id, name: r.name, category: r.category, isLearning: r.is_learning, sortOrder: r.sort_order };
}

export async function getSkills(): Promise<Skill[]> {
  const { data, error } = await getSupabase()
    .from("skills").select("*").order("sort_order");
  if (error) throw error;
  return (data as SkillRow[]).map(mapSkill);
}

export async function getProjects(): Promise<Project[]> {
  const { data, error } = await getSupabase()
    .from("projects").select("*").eq("published", true).order("sort_order");
  if (error) throw error;
  return (data as ProjectRow[]).map((r) => mapProject(r, SUPABASE_URL));
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const all = await getProjects();
  return all.filter((p) => p.featured);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const { data, error } = await getSupabase()
    .from("projects").select("*").eq("slug", slug).eq("published", true).maybeSingle();
  if (error) throw error;
  return data ? mapProject(data as ProjectRow, SUPABASE_URL) : null;
}

export async function getPosts(): Promise<Post[]> {
  const { data, error } = await getSupabase()
    .from("posts").select("*").eq("published", true)
    .order("published_at", { ascending: false });
  if (error) throw error;
  return (data as PostRow[]).map((r) => mapPost(r, SUPABASE_URL));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const { data, error } = await getSupabase()
    .from("posts").select("*").eq("slug", slug).eq("published", true).maybeSingle();
  if (error) throw error;
  return data ? mapPost(data as PostRow, SUPABASE_URL) : null;
}
