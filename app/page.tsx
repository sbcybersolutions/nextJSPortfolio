import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 py-20">
        <section className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Hi, I’m{" "}
            <span className="underline decoration-4 decoration-accent">
              Christian
            </span>
            .
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            I build modern web apps with Next.js & TypeScript and help teams
            with cybersecurity governance & compliance.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              className="rounded-lg bg-primary px-4 py-2 text-neutral hover:opacity-90"
              href="/projects"
            >
              View Projects
            </a>
            <a
              className="rounded-lg border border-primary/30 px-4 py-2 hover:bg-accent/20"
              href="/contact"
            >
              Contact
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
