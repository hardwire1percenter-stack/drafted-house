'use client';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden flex items-center justify-center text-center px-8 text-white">
      {/* Waving American flag background (pure CSS, no styled-jsx) */}
      <div 
        className="absolute inset-0 opacity-90"
        style={{
          background: `
            linear-gradient(45deg, transparent 49%, white 49%, white 51%, transparent 51%),
            linear-gradient(-45deg, transparent 49%, white 49%, white 51%, transparent 51%),
            linear-gradient(transparent 49%, #B22234 49%, #B22234 51%, transparent 51%),
            repeating-linear-gradient(0deg, #B22234 0%, #B22234 7.69%, white 7.69%, white 15.38%),
            #002147
          `,
          backgroundSize: '2000px 100%',
          animation: 'wave 20s linear infinite',
        }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-7xl md:text-9xl font-black mb-8 drop-shadow-2xl">
          Drafted House
        </h1>
        <p className="text-3xl md:text-5xl font-bold mb-12 drop-shadow-lg">
          Building America's future — one draft at a time.
        </p>
        <div className="flex gap-8 justify-center">
          <button className="px-12 py-6 bg-red-600 hover:bg-red-700 text-white font-bold text-2xl rounded-full hover:scale-110 transition-all duration-300">
            Start Building
          </button>
          <button className="px-12 py-6 bg-blue-700 hover:bg-blue-800 text-white font-bold text-2xl rounded-full hover:scale-110 transition-all duration-300">
            Explore the Dream
          </button>
        </div>
      </div>

      {/* Global CSS animation (safe <style> tag, no jsx) */}
      <style>{`
        @keyframes wave {
          0% { background-position-x: 0; }
          100% { background-position-x: 1000px; }
        }
      `}</style>
    </main>
  );
}
