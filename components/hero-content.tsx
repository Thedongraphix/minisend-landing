"use client"

export default function HeroContent() {
  return (
    <main className="absolute top-32 left-4 right-4 sm:top-28 sm:left-8 sm:right-auto z-20 max-w-full sm:max-w-3xl px-2">
      <div className="text-left">
        <div
          className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-5 sm:mb-6 relative"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
          <span className="text-white/90 text-sm font-light relative z-10">Powered by Farcaster & Base</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight font-light text-white mb-6 sm:mb-7 leading-[1.1]">
          <span className="font-medium italic instrument">Offramp</span> USDC in
          <br />
          <span className="font-light tracking-tight text-white">Less than 60 Seconds</span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-base md:text-lg font-light text-white/70 mb-8 sm:mb-8 leading-relaxed max-w-lg sm:max-w-2xl">
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
            Get Started
          </a>
        </div>
      </div>
    </main>
  )
}
