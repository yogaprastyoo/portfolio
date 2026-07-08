import type { Post } from "./types";

export const SITE = {
  name: "Yoga Prastyo",
  url: "https://yogaprastyo.com",
  title: "Yoga Prastyo | Full Stack Developer — IoT, DevOps & Robotics",
  description:
    "Full Stack Developer and Robotics Engineer experienced in Laravel REST APIs, React, Next.js, ThingsBoard, ROS, and DevOps.",
  author: "Yoga Prastyo Bayu Laksono",
  email: "mail@yogaprastyo.com",
  github: "https://github.com/yogaprastyoo",
  linkedin: "https://www.linkedin.com/in/yogaprastyoo",
  birthDate: "2005-10-12",
};

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE.url}/#person`,
    name: SITE.author,
    alternateName: ["Yoga Prastyo", "Pras"],
    url: SITE.url,
    jobTitle: "Full Stack Developer and Robotics Engineer",
    sameAs: [SITE.github, SITE.linkedin],
    email: `mailto:${SITE.email}`,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: `${SITE.name} Portfolio`,
    publisher: { "@id": `${SITE.url}/#person` },
  };
}

export function blogPostingJsonLd(post: Post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { "@id": `${SITE.url}/#person` },
    url: `${SITE.url}/blog/${post.slug}`,
  };
}

export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
