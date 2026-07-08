import { PillNav } from "@/components/layout/PillNav";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PostCard } from "@/components/content/PostCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { getPosts } from "@/lib/queries";

export const revalidate = 300;
export const metadata: Metadata = { title: "Blog", alternates: { canonical: "/blog" } };

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <main id="main-content" className="py-12">
      <PillNav />
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-medium">Blog</h1>
          {posts.length === 0 ? (
            <div className="mt-8">
              <EmptyState
                title="First post coming soon"
                message="Writing is in progress — check back later."
              />
            </div>
          ) : (
            <div className="mt-4">
              {posts.map((p) => (
                <PostCard key={p.id} post={p} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </main>
  );
}
