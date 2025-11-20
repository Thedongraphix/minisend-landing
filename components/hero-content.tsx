"use client"

export default function HeroContent() {
  return (
    <main className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-auto z-20 max-w-2xl">
      <div className="text-left">
        <div
          className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-3 sm:mb-4 relative"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
          <span className="text-white/90 text-xs font-light relative z-10">Powered by Farcaster & Base</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight font-light text-white mb-4 sm:mb-6 leading-tight">
          <span className="font-medium italic instrument">Offramp</span> USDC in
          <br />
          <span className="font-light tracking-tight text-white">Less than 60 Seconds</span>
        </h1>

        {/* Description */}
        <p className="text-xs sm:text-sm font-light text-white/70 mb-4 sm:mb-6 leading-relaxed max-w-lg">
          Convert your USDC earnings to Nigerian Naira or Kenyan Shillings instantly. Built for creators on Farcaster and
          BaseApp.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
          <a
            href="https://app.minisend.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer inline-block"
          >
            Learn More
          </a>
          <a
            href="https://app.minisend.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90 cursor-pointer inline-block"
          >
            Start Offramping
          </a>
        </div>
      </div>
    </main>
  )
}
