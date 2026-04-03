import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import TrustedClients from "@/components/sections/TrustedClients";
import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import CTASection from "@/components/sections/CTASection";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <HeroSection />
        
        <SectionDivider type={1} />
        <StatsSection />
        
        <TrustedClients />
        
        <SectionDivider type={2} />
        <CapabilitiesSection />
        
        <SectionDivider type={1} />
        <ServicesSection />
        
        <SectionDivider type={3} />
        <CaseStudiesSection />
        
        <SectionDivider type={2} />
        <AboutSection />
        
        <SectionDivider type={1} />
        <TestimonialsSection />
        
        <ContactSection />
        
        <SectionDivider type={3} />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
