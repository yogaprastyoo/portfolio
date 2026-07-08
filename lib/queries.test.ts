import { describe, expect, it } from "vitest";
import { mapPost, mapProject, mapSkill } from "./queries";

const projectRow = {
  id: "1",
  slug: "cashier",
  title: "Cashier",
  summary: "s",
  body_md: "b",
  tech: ["Laravel"],
  repo_url: null,
  demo_url: "https://d",
  cover_path: "cashier.webp",
  featured: true,
  sort_order: 1,
  published: true,
  created_at: "2026-01-01T00:00:00Z",
  updated_at: "2026-01-02T00:00:00Z",
};

describe("mappers", () => {
  it("maps project rows to camelCase domain objects", () => {
    const p = mapProject(projectRow, "https://x.supabase.co");
    expect(p.bodyMd).toBe("b");
    expect(p.coverUrl).toBe("https://x.supabase.co/storage/v1/object/public/covers/cashier.webp");
    expect(p.repoUrl).toBeNull();
  });
  it("returns null coverUrl when cover_path is null", () => {
    expect(
      mapProject({ ...projectRow, cover_path: null }, "https://x.supabase.co").coverUrl,
    ).toBeNull();
  });
  it("maps posts and skills", () => {
    const post = mapPost(
      {
        id: "1",
        slug: "a",
        title: "t",
        excerpt: "e",
        body_md: "b",
        cover_path: null,
        tags: ["iot"],
        published: true,
        published_at: "2026-01-01T00:00:00Z",
        updated_at: "2026-01-01T00:00:00Z",
      },
      "https://x.supabase.co",
    );
    expect(post.publishedAt).toBe("2026-01-01T00:00:00Z");
    const skill = mapSkill({
      id: "1",
      name: "Go",
      category: "backend",
      is_learning: true,
      sort_order: 10,
    });
    expect(skill.isLearning).toBe(true);
  });
});
