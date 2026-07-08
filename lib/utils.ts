export function readingTime(markdown: string): number {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function calculateAge(birthIso: string, now: Date = new Date()): number {
  const birth = new Date(birthIso);
  let age = now.getFullYear() - birth.getUTCFullYear();
  const beforeBirthday =
    now.getMonth() < birth.getUTCMonth() ||
    (now.getMonth() === birth.getUTCMonth() && now.getDate() < birth.getUTCDate());
  if (beforeBirthday) age--;
  return age;
}

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Jakarta",
  }).format(new Date(iso));
}
