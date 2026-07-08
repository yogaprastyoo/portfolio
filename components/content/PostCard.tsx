import Link from "next/link";
import { formatDate } from "@/lib/utils";
import type { Post } from "@/lib/types";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block border-b border-neutral-200 py-6 dark:border-neutral-800">
      <p className="text-sm text-neutral-500">{formatDate(post.publishedAt)}</p>
      <h2 className="mt-1 text-xl font-semibold hover:text-accent">{post.title}</h2>
      <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400">{post.excerpt}</p>
      {post.tags.length > 0 && (
        <p className="mt-2 text-sm text-neutral-500">{post.tags.map((t) => `#${t}`).join(" ")}</p>
      )}
    </Link>
  );
}
