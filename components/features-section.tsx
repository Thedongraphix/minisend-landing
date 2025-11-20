"use client"

export default function FeaturesSection() {
  const features = [
    {
      stat: "Under 60s",
      description: "Complete offramp from USDC to fiat",
      metric: "Speed",
    },
    {
      stat: "Zero KYC",
      description: "Seamless experience, no paperwork",
      metric: "Simplicity",
    },
    {
      stat: "Direct Bank",
      description: "Funds sent to your local bank account",
      metric: "Reliability",
    },
    {
      stat: "24/7",
      description: "Offramp anytime, anywhere",
      metric: "Availability",
    },
  ]

  return (
    <section className="relative z-10 bg-black/40 backdrop-blur-md border-t border-white/10 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{feature.stat}</div>
              <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
