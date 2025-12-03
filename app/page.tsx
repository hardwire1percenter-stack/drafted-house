'use client';
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Waving American flag background */}
      <div className="absolute inset-0 waving-flag" />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center">
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white drop-shadow-2xl mb-6">
          {"Drafted House".split("").map((char, i) => (
            <span
              key={i}
              className="inline-block hover:text-red-400 transition-colors"
              style={{ animation: `fadeInUp 0.8s ease-out ${i * 0.08}s both` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <p className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg max-w-4xl mb-12">
          Building America’s future — one draft at a time.
        </p>

        <div className="flex flex-col sm:flex-row gap-8">
          <button className="px-12 py-6 bg-red-600 text-white font-bold text-xl rounded-full hover:bg-red-700 hover:scale-110 transition-all duration-300 shadow-2xl">
            Start Building
          </button>
          <button className="px-12 py-6 bg-blue-700 text-white font-bold text-xl rounded-full hover:bg-blue-800 hover:scale-110 transition-all duration-300 shadow-2xl">
            Explore the Dream
          </button>
        </div>

        <div className="absolute bottom-10 animate-bounce">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Waving Flag + Animations */}
      <style jsx global>{`
        @keyframes wave {
          0% { background-position-x: 0; }
          100% { background-position-x: 1000px; }
        }
        .waving-flag {
          background:
            linear-gradient(45deg, transparent 49%, white 49%, white 51%, transparent 51%),
            linear-gradient(-45deg, transparent 49%, white 49%, white 51%, transparent 51%),
            linear-gradient(transparent 49%, #B22234 49%, #B22234 51%, transparent 51%),
            repeating-linear-gradient(0deg, #B22234 0%, #B22234 7.69%, white 7.69%, white 15.38%),
            #002147;
          background-size: 2000px 100%;
          animation: wave 18s linear infinite;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
