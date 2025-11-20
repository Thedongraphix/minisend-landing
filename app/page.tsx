"use client"

import Header from "@/components/header"
import HeroContent from "@/components/hero-content"
import PulsingCircle from "@/components/pulsing-circle"
import FeaturesSection from "@/components/features-section"
import ShaderBackground from "@/components/shader-background"

export default function MinisendApp() {
  return (
    <div>
      <ShaderBackground>
        <Header />
        <HeroContent />
        <PulsingCircle />
      </ShaderBackground>
      <FeaturesSection />
    </div>
  )
}
