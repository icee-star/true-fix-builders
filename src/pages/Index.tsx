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
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <ServiceArea />
        <Problem />
        <Difference />
        <EmergencyCallout />
        <Services />
        <Proof />
        <Testimonials />
        <Process />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
