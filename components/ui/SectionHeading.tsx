export function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <h2 className="text-base font-normal uppercase tracking-wide">
      {number}/ <br /> {title}
    </h2>
  );
}
