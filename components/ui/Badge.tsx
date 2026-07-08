export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-300 px-3 py-1 text-sm font-medium hover:rounded-none hover:border-neutral-900 hover:bg-neutral-900 hover:text-white motion-safe:transition-all motion-safe:duration-200 dark:border-neutral-700 dark:hover:border-neutral-100 dark:hover:bg-neutral-100 dark:hover:text-neutral-900">
      {children}
    </span>
  );
}
