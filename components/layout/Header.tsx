import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="py-6">
      <Container>
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-xl">
            Yoga<span className="font-semibold">Pras.</span>
          </Link>
          <nav aria-label="Primary">
            <ul className="flex items-center gap-4 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:underline underline-offset-4">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
