import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export function PillNav() {
  return (
    <nav aria-label="Primary" className="sticky top-4 z-40 flex justify-center px-4">
      <ul className="flex items-center gap-4 rounded-full border border-neutral-400/60 bg-white/80 py-2 pr-3 pl-5 backdrop-blur-md sm:gap-7 sm:pl-8 dark:border-neutral-600/60 dark:bg-neutral-950/80">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm underline-offset-8 hover:underline sm:text-base">
              {l.label}
            </Link>
          </li>
        ))}
        <li className="border-l border-neutral-300 pl-3 dark:border-neutral-700">
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}
