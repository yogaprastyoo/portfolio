export type SkillCategory = "backend" | "frontend" | "iot-robotics" | "devops" | "database";

export type Skill = {
  id: string;
  name: string;
  category: SkillCategory;
  isLearning: boolean;
  sortOrder: number;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  bodyMd: string;
  tech: string[];
  repoUrl: string | null;
  demoUrl: string | null;
  coverUrl: string | null;
  featured: boolean;
  updatedAt: string;
};

export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  bodyMd: string;
  coverUrl: string | null;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
};
