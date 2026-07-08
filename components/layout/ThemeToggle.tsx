"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect -- mounted-guard avoids SSR/CSR theme hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted)
    return <button type="button" tabIndex={-1} disabled aria-hidden className="size-9" />;

  const isDark = resolvedTheme === "dark";
  return (
    <button
      type="button"
      aria-pressed={isDark}
      aria-label="Toggle dark mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex size-9 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700"
    >
      {isDark ? "☾" : "☀"}
    </button>
  );
}
