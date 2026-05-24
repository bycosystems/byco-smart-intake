export default function App() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-white">
      
      {/* HERO SECTION */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        
        <div className="inline-block px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm mb-6">
          BYCO SYSTEMS
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
          Intelligent client intake systems for modern businesses
        </h1>

        <p className="mt-8 text-gray-400 text-xl max-w-2xl leading-relaxed">
          Capture leads, qualify requests and guide visitors automatically
          with a premium AI-powered experience available 24/7.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-4 rounded-2xl transition">
            Request a Demo
          </button>

          <button className="border border-white/20 hover:border-cyan-400 px-8 py-4 rounded-2xl transition">
            Watch Demo
          </button>
        </div>

      </section>

    </main>
  )
}
