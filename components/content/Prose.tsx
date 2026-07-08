export function Prose({ html }: { html: string }) {
  return (
    <div
      className="prose-headings:font-semibold mt-8 space-y-4 text-base leading-7 [&_a]:underline [&_code]:text-sm [&_h2]:mt-8 [&_h2]:text-xl [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:p-4 [&_table]:w-full [&_th]:text-left"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
