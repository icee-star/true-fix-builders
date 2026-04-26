import { useSEO } from "@/hooks/use-seo";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import TrustStrip from "@/components/site/TrustStrip";
import ServiceArea from "@/components/site/ServiceArea";
import Problem from "@/components/site/Problem";
import Difference from "@/components/site/Difference";
import EmergencyCallout from "@/components/site/EmergencyCallout";
import Services from "@/components/site/Services";
import Proof from "@/components/site/Proof";
import Testimonials from "@/components/site/Testimonials";
import Process from "@/components/site/Process";
import FAQ from "@/components/site/FAQ";
import ContactForm from "@/components/site/ContactForm";
import StatsSection from "@/components/site/StatsSection";
import Footer from "@/components/site/Footer";
import StickyMobileCTA from "@/components/site/StickyMobileCTA";
import RevealSection from "@/components/site/RevealSection";

const Index = () => {
  useSEO({
    title: "CCA Construction — Siding, Roofing & Exterior Repair in Salem, OR",
    description:
      "Oregon licensed siding, roofing & exterior repair contractor. We replace rotted sheeting and studs the right way. 30 years experience. CCB #247508. Call 503-901-4583.",
    canonical: "https://ccaconstruction.com/",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <RevealSection><ServiceArea /></RevealSection>
        <RevealSection><Problem /></RevealSection>
        <RevealSection><Difference /></RevealSection>
        <RevealSection><EmergencyCallout /></RevealSection>
        <RevealSection><Services /></RevealSection>
        <RevealSection><Proof /></RevealSection>
        <StatsSection />
        <RevealSection><Testimonials /></RevealSection>
        <RevealSection><Process /></RevealSection>
        <RevealSection><FAQ /></RevealSection>
        <RevealSection><ContactForm /></RevealSection>
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default Index;
