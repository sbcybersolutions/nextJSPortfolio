// app/page.tsx
// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center">
      <div className="rounded-xl border p-6">
        <h1 className="text-2xl font-semibold">Dark mode test</h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300">
          If this text lightens and the page background goes near-black, it’s
          working.
        </p>
      </div>
    </main>
  );
}
