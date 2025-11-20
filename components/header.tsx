"use client"

export default function Header() {
  return (
    <header className="relative z-20 flex items-center justify-between p-6">
      {/* Logo */}
      <div className="flex items-center">
        <div className="font-bold text-white text-xl tracking-tight">Minisend</div>
      </div>

      {/* CTA Button */}
      <a
        href="https://farcaster.xyz/miniapps/pXYzGNnbBFu6/minisend"
        target="_blank"
        rel="noopener noreferrer"
        id="gooey-btn"
        className="relative flex items-center group"
        style={{ filter: "url(#gooey-filter)" }}
      >
        <span className="absolute right-0 px-2.5 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center justify-center -translate-x-10 group-hover:-translate-x-19 z-0">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </span>
        <span className="px-6 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center z-10">
          Launch Miniapp
        </span>
      </a>
    </header>
  )
}
