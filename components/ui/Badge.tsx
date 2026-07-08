export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-300 px-3 py-1 text-sm font-medium dark:border-neutral-700">
      {children}
    </span>
  );
}
