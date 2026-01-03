import { Mountains_of_Christmas } from "next/font/google";

const mountainsOfChristmas = Mountains_of_Christmas({
  weight: "700",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-950 via-rose-900 to-black text-white overflow-hidden">

      {/* HERO */}
      <section className="relative h-screen w-screen flex flex-col items-center mt-6 justify-center px-2 overflow-hidden">
        {/* Ambient Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[500px] max-h-[500px] bg-rose-500/10 blur-[120px] rounded-full -z-10" />

        <div className="mx-auto w-full max-w-7xl h-full flex flex-col justify-between py-8 md:py-12">

          {/* 1. HEADING - Reduced bottom margin for mobile */}
          <div className="text-center shrink-0 mb-4 md:mb-8">
            <h1 className={`text-5xl md:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-pink-200 via-rose-200 to-white bg-clip-text text-transparent mb-2 ${mountainsOfChristmas.className}`}>
              Hii sneha 👋
            </h1>
            <p className="text-sm md:text-xl text-rose-200/90 font-medium">
              I built my very first Progressive Web App
            </p>
          </div>

          {/* 2. MAIN CONTENT GRID - Optimized for vertical fit */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 items-center gap-2 lg:gap-2 min-h-0">

            {/* IMAGE - Restored to 300px on small screens */}
            <div className="flex justify-center lg:justify-center items-center">
              <div className="relative group w-[300px] h-[300px] md:w-[380px] md:h-[380px] xl:w-[440px] xl:h-[440px]">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-pink-500 to-rose-500 blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>

                {/* Image Card */}
                <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/20 bg-black/40 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:scale-[1.02]">
                  <img
                    src="https://media.tenor.com/aPFYmCN1OqsAAAAi/wrapped-gifts-birthday-presents.gif"
                    alt="Celebration gift animation"
                    className="h-full w-full object-cover"
                  />
                </div>

              </div>
            </div>

            {/* TEXT CONTENT */}
            <div className="flex flex-col gap-4 md:gap-2 text-center lg:text-left justify-center pb-4 lg:pb-8 ">

              <div className="rounded-2xl bg-white/10 p-5 md:p-10 backdrop-blur-xl border border-white/20 shadow-2xl max-w-xl mx-auto lg:mx-0">
                <p className="text-sm md:text-lg xl:text-xl text-gray-100 leading-relaxed">
                  This app works <span className="text-pink-300 font-semibold">offline</span>,
                  installs like a real app, and lives on your home screen —
                  powered by modern web technology ✨
                </p>
              </div>

              {/* Tags - Compact on mobile */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {[
                  '🌹 First PWA',
                  '📱 Installable',
                  '🌐 Works Offline'
                ].map(tag => (
                  <span
                    key={tag}
                    className="rounded-full bg-gradient-to-r from-pink-500/20 to-rose-500/20 backdrop-blur px-3 py-1 md:px-4 md:py-2 text-[10px] md:text-sm border border-pink-300/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative bg-black/40 backdrop-blur-sm px-6 py-28">
        <div className="mx-auto max-w-6xl">

          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-pink-200 to-rose-200 bg-clip-text text-transparent">
            Why this app is special
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              ['🌐', 'Modern Web Tech', 'Built with cutting-edge web standards'],
              ['📴', 'Offline First', 'Reliable even without internet access'],
              ['⚡', 'Fast & Smooth', 'Optimized for instant performance']
            ].map(([icon, title, desc]) => (
              <div
                key={title}
                className="group rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-8 border border-white/10 backdrop-blur hover:border-pink-300/40 hover:scale-105 transition-all"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-pink-100">
                  {title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10 text-center">
        <p className="text-sm text-gray-400">
          Built with <span className="text-pink-400">❤️</span> using Next.js
        </p>
        <p className="text-xs text-gray-500 mt-2">
          My First Progressive Web App
        </p>
      </footer>

    </main>
  );
}
