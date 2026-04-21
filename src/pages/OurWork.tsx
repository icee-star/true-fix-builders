import { useEffect } from "react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import WorkHero from "@/components/site/WorkHero";
import ProjectGallery from "@/components/site/ProjectGallery";

const OurWork = () => {
  useEffect(() => {
    document.title = "Our Work | CCA Construction — 30 Years of Oregon Projects";

    const desc =
      "Real projects from CCA Construction across Oregon: kitchen remodels, bathrooms, decks, roofs, framing, and more. 30 years of documented work. Call 503-901-4583.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    const href = window.location.origin + "/our-work";
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
        <WorkHero />
        <ProjectGallery />
      </main>
      <Footer />
    </div>
  );
};

export default OurWork;
