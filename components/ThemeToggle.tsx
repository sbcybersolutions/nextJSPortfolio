"use client";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const current = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
      className="rounded-lg border px-3 py-1 text-sm hover:shadow transition"
      aria-label="Toggle dark mode"
    >
      {current === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
