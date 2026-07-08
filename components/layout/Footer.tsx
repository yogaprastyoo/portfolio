import { SITE } from "@/lib/seo";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-neutral-600 dark:text-neutral-400">
      <Container>
        <p>
          <a href={SITE.github} rel="noopener noreferrer" target="_blank" className="hover:underline">
            {SITE.name}
          </a>{" "}
          {new Date().getFullYear()} — All rights reserved ©
        </p>
      </Container>
    </footer>
  );
}
