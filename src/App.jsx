import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import InteractiveDemo from './components/InteractiveDemo';
import FeaturesSection from './components/FeaturesSection';
import ArchitectureSection from './components/ArchitectureSection';
import IndustriesSection from './components/IndustriesSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import MobileDashboardSection from './components/MobileDashboardSection';
import SecuritySection from './components/SecuritySection';
import FinalCTASection from './components/FinalCTASection';
import GlobalCloudBackground from './components/GlobalCloudBackground';
import GlobalFogOverlay from './components/GlobalFogOverlay';

import DepthSection from './components/DepthSection';

function App() {
  useEffect(() => {
    // Initialize Lenis for global buttery smooth scrolling
    const lenis = new Lenis({
      duration: 1.2, // Controls the "weight" of the scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Silky smooth easing
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1.0,
      smoothTouch: false, // Keep native touch scrolling on mobile
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <main className="text-text-primary selection:bg-primary/30 min-h-screen relative overflow-x-hidden">
        {/* Layer 1: The Deep Sky (Background) */}
        <GlobalCloudBackground />

        {/* Layer 2: The HUD (Content) */}
        <div className="relative z-10 flex flex-col gap-32 pb-32">
          <Navbar />
          
          <DepthSection index={0}>
            <Hero />
          </DepthSection>
          
          <DepthSection index={1}>
            <TrustSection />
          </DepthSection>
          
          <DepthSection index={2}>
            <InteractiveDemo />
          </DepthSection>
          
          <DepthSection index={3}>
            <FeaturesSection />
          </DepthSection>
          
          <DepthSection index={4}>
            <ArchitectureSection />
          </DepthSection>
          
          <DepthSection index={5}>
            <IndustriesSection />
          </DepthSection>
          
          <DepthSection index={6}>
            <TestimonialsSection />
          </DepthSection>
          
          <DepthSection index={7}>
            <PricingSection />
          </DepthSection>
          
          <DepthSection index={8}>
            <MobileDashboardSection />
          </DepthSection>
          
          <DepthSection index={9}>
            <SecuritySection />
          </DepthSection>
          
          <DepthSection index={10}>
            <FinalCTASection />
          </DepthSection>
        </div>
      </main>

      {/* Layer 3: The Lens (Foreground Fog) - Placed completely outside main to avoid ALL stacking contexts */}
      <GlobalFogOverlay />
    </>
  );
}

export default App;
