export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      
      {/* HERO */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        
        {/* App Icon */}
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md shadow-lg">
          <span className="text-3xl">⚡</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Pure Next.js PWA
        </h1>

        {/* Subtitle */}
        <p className="mt-4 max-w-sm text-sm text-gray-300 sm:text-base">
          A fast, offline-ready, installable web app built with modern web standards.
        </p>

        {/* CTA */}
        <div className="mt-8 w-full max-w-xs">
          <button className="w-full rounded-xl bg-white py-3 font-semibold text-slate-900 transition active:scale-95 hover:bg-gray-200">
            Get Started
          </button>
        </div>

        {/* Trust indicators */}
        <div className="mt-6 flex gap-4 text-xs text-gray-400">
          <span>⚡ Fast</span>
          <span>📴 Offline</span>
          <span>📱 Installable</span>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-black/40 px-6 py-16">
        <div className="mx-auto max-w-md space-y-8 text-center">

          <h2 className="text-2xl font-semibold">
            Why this app feels native
          </h2>

          <div className="grid gap-6">
            
            <div className="rounded-xl bg-white/5 p-5 backdrop-blur-md border border-white/10">
              <h3 className="font-medium">Offline-First</h3>
              <p className="mt-2 text-sm text-gray-400">
                Works even when your internet doesn’t.
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-5 backdrop-blur-md border border-white/10">
              <h3 className="font-medium">Installable</h3>
              <p className="mt-2 text-sm text-gray-400">
                Add it to your home screen like a real app.
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-5 backdrop-blur-md border border-white/10">
              <h3 className="font-medium">Lightning Fast</h3>
              <p className="mt-2 text-sm text-gray-400">
                Built with performance and simplicity in mind.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-6 text-center text-xs text-gray-400">
        Built with Next.js • PWA Ready
      </footer>
    </main>
  );
}
