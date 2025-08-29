export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 space-y-4">
      <h2 className="text-3xl font-semibold">Contact</h2>
      <p>
        Email:{" "}
        <a className="underline" href="mailto:you@domain.com">
          you@domain.com
        </a>
      </p>
      <p>LinkedIn / GitHub links here.</p>
    </main>
  );
}
