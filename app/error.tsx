"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main id="main-content" className="py-24">
      <Container>
        <h1 className="text-2xl font-medium">Something went wrong</h1>
        <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400">
          Content couldn&apos;t be loaded. It&apos;s probably temporary.
        </p>
        <button onClick={reset} className="mt-6 border border-current px-4 py-2 text-sm">
          Try again
        </button>
      </Container>
    </main>
  );
}
