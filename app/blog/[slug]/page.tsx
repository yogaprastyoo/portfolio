import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Prose } from "@/components/content/Prose";
import { renderMarkdown } from "@/lib/markdown";
import { getPostBySlug, getPosts } from "@/lib/queries";
import { blogPostingJsonLd, breadcrumbJsonLd, SITE } from "@/lib/seo";
import { formatDate, readingTime } from "@/lib/utils";

export const revalidate = 300;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { type: "article", publishedTime: post.publishedAt },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const html = await renderMarkdown(post.bodyMd);
  const jsonLd = [
    blogPostingJsonLd(post),
    breadcrumbJsonLd([
      { name: "Home", url: SITE.url },
      { name: "Blog", url: `${SITE.url}/blog` },
      { name: post.title, url: `${SITE.url}/blog/${post.slug}` },
    ]),
  ];

  return (
    <main id="main-content" className="py-12">
      <Container>
        <p className="text-sm text-neutral-500">
          {formatDate(post.publishedAt)} · {readingTime(post.bodyMd)} min read
        </p>
        <h1 className="mt-2 text-3xl font-medium">{post.title}</h1>
        <Prose html={html} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Container>
    </main>
  );
}
