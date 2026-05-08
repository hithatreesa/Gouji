import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import TrustSection from './components/sections/TrustSection'
import InteractiveDemo from './components/sections/InteractiveDemo'
import FeaturesSection from './components/sections/FeaturesSection'
import ArchitectureSection from './components/sections/ArchitectureSection'
import IndustriesSection from './components/sections/IndustriesSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import PricingSection from './components/sections/PricingSection'
import MobileDashboardSection from './components/sections/MobileDashboardSection'
import SecuritySection from './components/sections/SecuritySection'
import FinalCTASection from './components/sections/FinalCTASection'
import { GlowBackground } from './components/ui/GlowBackground'

const App: React.FC = () => {
  return (
    <main className="relative min-h-screen">
      <GlowBackground />
      <Navbar />
      <Hero />
      <TrustSection />
      <InteractiveDemo />
      <FeaturesSection />
      <ArchitectureSection />
      <IndustriesSection />
      <TestimonialsSection />
      <PricingSection />
      <MobileDashboardSection />
      <SecuritySection />
      <FinalCTASection />
    </main>
  )
}

export default App
