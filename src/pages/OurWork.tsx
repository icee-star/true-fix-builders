import { useSEO } from "@/hooks/use-seo";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import WorkHero from "@/components/site/WorkHero";
import ProjectGallery from "@/components/site/ProjectGallery";
import WorkClosingCTA from "@/components/site/WorkClosingCTA";
import StickyMobileCTA from "@/components/site/StickyMobileCTA";
import RevealSection from "@/components/site/RevealSection";

const OurWork = () => {
  useSEO({
    title: "Our Work | CCA Construction — 30 Years of Oregon Exterior Projects",
    description:
      "Before, during, and after photos from real CCA Construction projects across Oregon. Siding repair, roofing, exterior paint, decks, and covered patios. CCB #247508. Call 503-901-4583.",
    canonical: "https://ccaconstruction.com/our-work",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <WorkHero />
        <ProjectGallery />
        <RevealSection><WorkClosingCTA /></RevealSection>
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default OurWork;
