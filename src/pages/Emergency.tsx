import { useSEO } from "@/hooks/use-seo";
import Header from "@/components/site/Header";
import EmergencyHero from "@/components/site/EmergencyHero";
import EmergencyTrustStrip from "@/components/site/EmergencyTrustStrip";
import UrgentDamage from "@/components/site/UrgentDamage";
import EmergencySteps from "@/components/site/EmergencySteps";
import WhyItMatters from "@/components/site/WhyItMatters";
import EmergencyContactForm from "@/components/site/EmergencyContactForm";
import Footer from "@/components/site/Footer";
import StickyMobileCTA from "@/components/site/StickyMobileCTA";
import RevealSection from "@/components/site/RevealSection";

const Emergency = () => {
  useSEO({
    title: "Emergency Repairs | CCA Construction — 24-Hour Response in Oregon",
    description:
      "Urgent siding, roof, and exterior water damage repairs across Oregon. Every inquiry answered within 24 hours. Oregon CCB #247508. Call 503-901-4583.",
    canonical: "https://ccaconstruction.com/emergency",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <EmergencyHero />
        <EmergencyTrustStrip />
        <RevealSection><UrgentDamage /></RevealSection>
        <RevealSection><EmergencySteps /></RevealSection>
        <RevealSection><WhyItMatters /></RevealSection>
        <RevealSection><EmergencyContactForm /></RevealSection>
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default Emergency;
