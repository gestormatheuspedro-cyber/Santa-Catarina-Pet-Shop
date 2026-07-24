import { useState } from "react";
import Hero from "./components/Hero";
import ServiceStrip from "./components/ServiceStrip";
import BathGrooming from "./components/BathGrooming";
import Differentials from "./components/Differentials";
import Gallery from "./components/Gallery";
import Veterinary from "./components/Veterinary";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import InstagramFeed from "./components/Instagram";
import Scheduling from "./components/Scheduling";
import CTA from "./components/CTA";
import Location from "./components/Location";
import Footer from "./components/Footer";
import WhatsappFloat from "./components/WhatsappFloat";
import MobileNav from "./components/MobileNav";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-white text-text-base antialiased selection:bg-primary-50 selection:text-primary">
      {/* 1. Hero header & integrated navigation */}
      <Hero onOpenMenu={() => setIsMenuOpen(true)} />

      <main>
        {/* 2. Horizontal Service Strip under the Hero */}
        <ServiceStrip />

        {/* 3. Bath & Grooming translucent overview */}
        <BathGrooming />

        {/* 4. Six brand Differentials with native 3D tilt */}
        <Differentials />

        {/* 5. Dual Row Infinite Marquee Gallery & Lightbox */}
        <Gallery />

        {/* 6. Medical Clinic section (Dra. Karina Krüger) */}
        <Veterinary />

        {/* 7. Client Reviews with custom slide-swiping carousel */}
        <Testimonials />

        {/* 8. Six-item single-open FAQ Accordion */}
        <FAQ />

        {/* 9. Six-post mock Instagram feed with likes hover overlays */}
        <InstagramFeed />

        {/* 10. Scheduling form with auto-formatted phone numbers & WA dispatcher */}
        <Scheduling />

        {/* 11. Large orange Call-to-Action panel with background ornaments */}
        <CTA />

        {/* 12. Full-width location parameters and Google Maps embedded iframe */}
        <Location />
      </main>

      {/* 13. Deep dark brand footer with CNPJ details */}
      <Footer />

      {/* 14. Floating WhatsApp icon with automatic scroll appearance & wiggle */}
      <WhatsappFloat />

      {/* 15. Slide-out Mobile Navigation drawer and backdrop mask */}
      <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
}
