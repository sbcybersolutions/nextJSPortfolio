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
    <header className="sticky top-0 z-40 border-b bg-white/70 backdrop-blur dark:bg-neutral-950/70">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        {/* Logo / Name */}
        <span className="font-semibold">Christian Salafia</span>

        {/* Links + Theme toggle */}
        <div className="flex items-center gap-6">
          <ul className="flex gap-6 text-sm">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`hover:underline ${
                      active ? "text-indigo-600 dark:text-indigo-400" : ""
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
