export function EmptyState({ title, message }: { title: string; message: string }) {
  return (
    <div className="rounded-xl border border-dashed border-neutral-300 p-8 text-center dark:border-neutral-700">
      <p className="font-medium">{title}</p>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{message}</p>
    </div>
  );
}
