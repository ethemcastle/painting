import PaintCanvas from "@/components/PaintCanvas";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-black">
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 px-4 py-8 sm:px-6 sm:py-12">
        <header className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            Painting Studio
          </h1>
          <p className="max-w-2xl text-zinc-600 dark:text-zinc-400">
            A tiny canvas to sketch your ideas. Pick a color and brush size, draw with your mouse, trackpad, or finger, then save your artwork as a PNG. Press Cmd/Ctrl+Z to undo.
          </p>
        </header>

        <PaintCanvas />
      </main>

      <footer className="border-t border-black/5 py-4 text-center text-sm text-zinc-500 dark:border-white/5">
        Built with Next.js and the HTML Canvas API
      </footer>
    </div>
  );
}
