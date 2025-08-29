type Project = { title: string; summary: string; href: string };
const projects: Project[] = [
  {
    title: "Risk Assessment Tool",
    summary: "React + Node, PDF export, role-based access.",
    href: "#",
  },
  {
    title: "Quote Builder",
    summary: "Asset-based costing, Excel/PDF exports.",
    href: "#",
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-3xl font-semibold mb-8">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.href}
            className="rounded-xl border p-5 hover:shadow-md transition"
          >
            <h3 className="text-xl font-medium">{p.title}</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
              {p.summary}
            </p>
          </a>
        ))}
      </div>
    </main>
  );
}
