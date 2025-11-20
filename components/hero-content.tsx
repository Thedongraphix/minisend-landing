"use client"

export default function HeroContent() {
  return (
    <main className="absolute bottom-8 left-8 z-20 max-w-2xl">
      <div className="text-left">
        <div
          className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4 relative"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
          <span className="text-white/90 text-xs font-light relative z-10">Powered by Farcaster & Base</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl md:leading-20 tracking-tight font-light text-white mb-6">
          <span className="font-medium italic instrument">Offramp</span> USDC in
          <br />
          <span className="font-light tracking-tight text-white">Less than 60 Seconds</span>
        </h1>

        {/* Description */}
        <p className="text-sm font-light text-white/70 mb-6 leading-relaxed max-w-lg">
          Convert your USDC earnings to Nigerian Naira or Kenyan Shillings instantly. Built for creators on Farcaster and
          BaseApp.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4 flex-wrap">
          <button className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer">
            Learn More
          </button>
          <button className="px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90 cursor-pointer">
            Start Offramping
          </button>
        </div>
      </div>
    </main>
  )
}
