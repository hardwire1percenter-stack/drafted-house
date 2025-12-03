export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* Waving American flag background */}
      <div className="absolute inset-0 waving-flag" />

      {/* Dark overlay so text is readable */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* Title with patriotic glow */}
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-white drop-shadow-2xl">
          {"Drafted House".split("").map((letter, i) => (
            <span
              key={i}
              className="inline-block hover:text-red-500 transition-colors duration-300"
              style={{ animation: `fadeInUp 0.8s ease-out ${i * 0.08}s both` }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h1>

        <p className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg mb-12 max-w-4xl">
          Where America builds its future — one draft at a time.
        </p>

        <div className="flex flex-col sm:flex-row gap-8">
          <button className="px-12 py-6 bg-red-600 text-white font-bold text-xl rounded-full hover:bg-red-700 hover:scale-110 transition-all duration-300 shadow-2xl">
            Start Building
          </button>
          <button className="px-12 py-6 bg-blue-700 text-white font-bold text-xl rounded-full hover:bg-blue-800 hover:scale-110 transition-all duration-300 shadow-2xl">
            Explore the Dream
          </button>
        </div>

        {/* Patriotic down arrow */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L12 22M12 22L6 16M12 22L18 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Waving Flag CSS + Animations */}
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
          animation: wave 20s linear infinite;
          opacity: 0.9;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
