import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="py-6">
      <Container>
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-xl">
            Yoga<span className="font-semibold">Pras.</span>
          </Link>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
