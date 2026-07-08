import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "./ThemeToggle";

const messages: [string, string][] = [
  ["Welcome to", "my web portfolio"],
  ["Building things where", "software meets hardware"],
];

const pillButtonClasses =
  "rounded-full border border-current py-2 text-sm hover:bg-neutral-900 hover:text-white motion-safe:transition-colors dark:hover:bg-neutral-100 dark:hover:text-neutral-900";

export function Header() {
  const year = new Date().getFullYear();

  return (
    <header className="py-6">
      <Container>
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="text-2xl">
            Yoga<span className="font-semibold">Pras.</span>
          </Link>

          <div className="hidden flex-1 items-center justify-evenly gap-8 text-sm lg:flex">
            {messages.map(([first, second]) => (
              <p key={first}>
                {first}
                <br />
                {second}
              </p>
            ))}
            <p className="tabular-nums">{year}</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex">
              <Link href="/#contact" className={`${pillButtonClasses} pr-7 pl-5`}>
                Contact
              </Link>
              <Link
                href="/#about"
                className={`${pillButtonClasses} -ml-4 bg-white pr-5 pl-6 dark:bg-neutral-950`}
              >
                Me
              </Link>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}
