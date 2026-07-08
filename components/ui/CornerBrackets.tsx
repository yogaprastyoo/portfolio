export function CornerBrackets() {
  return (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute top-2 left-2 h-4 w-4 border-t-2 border-l-2 border-accent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 motion-safe:transition-opacity motion-safe:duration-200"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-2 bottom-2 h-4 w-4 border-r-2 border-b-2 border-accent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 motion-safe:transition-opacity motion-safe:duration-200"
      />
    </>
  );
}
