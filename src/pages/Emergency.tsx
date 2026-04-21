import { useEffect } from "react";
import Header from "@/components/site/Header";
import EmergencyHero from "@/components/site/EmergencyHero";
import EmergencyTrustStrip from "@/components/site/EmergencyTrustStrip";
import UrgentDamage from "@/components/site/UrgentDamage";
import EmergencySteps from "@/components/site/EmergencySteps";
import WhyItMatters from "@/components/site/WhyItMatters";
import EmergencyContactForm from "@/components/site/EmergencyContactForm";
import Footer from "@/components/site/Footer";

const Emergency = () => {
  useEffect(() => {
    document.title = "Emergency Repairs | CCA Construction — 24-Hour Response in Oregon";

    const desc =
      "Urgent siding, roof, and exterior water damage repairs across Oregon. Every inquiry answered within 24 hours. Oregon CCB #247508. Call 503-901-4583.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    const href = window.location.origin + "/emergency";
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", href);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <EmergencyHero />
        <EmergencyTrustStrip />
        <UrgentDamage />
        <EmergencySteps />
        <WhyItMatters />
        <EmergencyContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Emergency;
