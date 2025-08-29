// app/page.tsx
export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <section className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Hi, I’m{" "}
          <span className="underline decoration-4 decoration-indigo-500">
            Your Name
          </span>
          .
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300">
          I build modern web apps with Next.js & TypeScript and help teams with
          cybersecurity governance & compliance.
        </p>
      </section>
    </main>
  );
}
