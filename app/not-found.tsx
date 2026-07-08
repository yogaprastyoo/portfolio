import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main id="main-content" className="py-24">
      <Container>
        <h1 className="text-4xl font-medium">404</h1>
        <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400">
          This page doesn&apos;t exist (or isn&apos;t published yet).
        </p>
        <p className="mt-6 flex gap-4 text-sm">
          <Link href="/" className="underline underline-offset-4">
            ← Home
          </Link>
          <Link href="/blog" className="underline underline-offset-4">
            Blog
          </Link>
          <Link href="/projects" className="underline underline-offset-4">
            Projects
          </Link>
        </p>
      </Container>
    </main>
  );
}
