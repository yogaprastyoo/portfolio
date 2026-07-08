import Link from "next/link";

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
      <ul className="flex items-center gap-5 rounded-full border border-neutral-400/60 bg-white/80 px-6 py-3 backdrop-blur-md sm:gap-8 sm:px-10 dark:border-neutral-600/60 dark:bg-neutral-950/80">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm underline-offset-8 hover:underline sm:text-base">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
