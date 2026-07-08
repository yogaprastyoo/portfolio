import { getPosts } from "@/lib/queries";
import { SITE } from "@/lib/seo";

export const revalidate = 300;

function escapeXml(s: string): string {
  return s.replace(/[<>&'"]/g, (c) =>
    ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[c]!,
  );
}

export async function GET() {
  const posts = await getPosts();
  const items = posts
    .map(
      (p) => `<item>
  <title>${escapeXml(p.title)}</title>
  <link>${SITE.url}/blog/${p.slug}</link>
  <guid>${SITE.url}/blog/${p.slug}</guid>
  <description>${escapeXml(p.excerpt)}</description>
  <pubDate>${new Date(p.publishedAt).toUTCString()}</pubDate>
</item>`,
    )
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
<title>${escapeXml(SITE.title)}</title>
<link>${SITE.url}</link>
<description>${escapeXml(SITE.description)}</description>
${items}
</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
