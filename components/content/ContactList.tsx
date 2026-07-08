type ContactItem = {
  label: string;
  description: string;
  href: string;
};

export function ContactList({ items }: { items: ContactItem[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((item) => {
        const isExternal = item.href.startsWith("http");
        return (
          <li key={item.label}>
            <a
              href={item.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="group relative flex min-h-24 items-center justify-between gap-4 border border-neutral-300 px-6 py-4 outline-none hover:border-accent focus-visible:border-accent motion-safe:transition-colors motion-safe:duration-200 md:px-8 dark:border-neutral-700"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute top-2 left-2 h-4 w-4 border-t-2 border-l-2 border-accent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 motion-safe:transition-opacity motion-safe:duration-200"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute right-2 bottom-2 h-4 w-4 border-r-2 border-b-2 border-accent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 motion-safe:transition-opacity motion-safe:duration-200"
              />
              <span>
                <span className="block text-xl font-semibold group-hover:text-accent group-focus-visible:text-accent motion-safe:transition-colors md:text-2xl">
                  {item.label}
                </span>
                <span className="mt-1 block text-sm text-neutral-600 dark:text-neutral-400">
                  {item.description}
                </span>
              </span>
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-6 shrink-0 -translate-x-2 text-accent opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 motion-safe:transition-all motion-safe:duration-200"
              >
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
