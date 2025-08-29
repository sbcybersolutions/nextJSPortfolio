"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("./ThemeToggle"), { ssr: false });

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-40 border-b border-primary/15 bg-neutral/80 backdrop-blur
                 text-primary dark:border-accent/25 dark:bg-primary/80 dark:text-neutral"
    >
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        {/* Logo / Name */}
        <Link
          href="/"
          className="text-base font-semibold tracking-tight hover:opacity-90
                     focus:outline-none focus:ring-2 focus:ring-accent/50 rounded"
        >
          Christian Salafia
        </Link>

        {/* Links + Theme toggle */}
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-6 text-sm">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={[
                      "transition-colors hover:text-accent focus:outline-none",
                      "focus:ring-2 focus:ring-accent/50 rounded",
                      active
                        ? "text-accent underline underline-offset-4 decoration-2"
                        : "opacity-90",
                    ].join(" ")}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Theme toggle styled with your palette */}
          <div
            className="rounded-lg border border-primary/20 bg-neutral/60 px-3 py-1 text-sm shadow-sm
                       hover:shadow transition focus-within:ring-2 focus-within:ring-accent/50
                       dark:border-accent/30 dark:bg-primary/40"
          >
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
