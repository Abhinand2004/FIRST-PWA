export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-950 via-rose-900 to-black text-white">

      {/* HERO */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

        {/* Greeting */}
        <h1 className="text-3xl font-semibold sm:text-4xl">
          Hii 
        </h1>

        <p className="mt-3 text-sm text-rose-200 sm:text-base">
          I built my very first Progressive Web 
        </p>

        {/* GIF */}
        <div className="mt-8 w-full max-w-xs overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-xl">
          <img
            src="https://media.tenor.com/aPFYmCN1OqsAAAAi/wrapped-gifts-birthday-presents.gif"
            alt=""
            className="w-full"
          />
        </div>

        {/* Message card */}
        <div className="mt-6 max-w-sm rounded-2xl bg-white/10 p-6 backdrop-blur-xl border border-white/20 shadow-2xl">
          <p className="text-sm text-gray-200 leading-relaxed">
            This app works offline, installs like a real app,
            and lives on your home screen —
            ✨
          </p>
        </div>

        {/* Cute tags */}
        <div className="mt-6 flex gap-3 text-xs text-rose-200">
          <span className="rounded-full bg-white/10 px-3 py-1">🌹 First PWA</span>
          <span className="rounded-full bg-white/10 px-3 py-1">📱 Installable</span>
          <span className="rounded-full bg-white/10 px-3 py-1">Works offline</span>
        </div>

      </section>

      {/* EXTRA CONTENT */}
      <section className="bg-black/40 px-6 py-14">
        <div className="mx-auto max-w-md space-y-6 text-center">

          <h2 className="text-xl font-semibold">
            Why this app is special
          </h2>

          <div className="space-y-4">
            <div className="rounded-xl bg-white/5 p-4 border border-white/10">
              <p className="text-sm text-gray-300">
                🌐 Built with modern web tech
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-4 border border-white/10">
              <p className="text-sm text-gray-300">
                📴 Works even without internet
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-4 border border-white/10">
              <p className="text-sm text-gray-300">
                works offline
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-6 text-center text-xs text-gray-400">
        Built with ❤️ using Next.js • My First PWA
      </footer>
    </main>
  );
}
