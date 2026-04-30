import { Phone } from "lucide-react";
import heroImage from "@/assets/emergency-hero.webp";

const EmergencyHero = () => {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt="Close-up of an Oregon home exterior with visible water damage and bubbled paint on the siding"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(0 0% 8% / 0.65) 0%, hsl(0 0% 8% / 0.55) 50%, hsl(0 0% 8% / 0.8) 100%)",
          }}
          aria-hidden="true"
        />
      </div>

      <div className="container flex min-h-[78vh] flex-col justify-center py-24 md:py-28">
        <div className="max-w-3xl animate-fade-in-up">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-burgundy">
            Emergency Repairs
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold leading-[1.1] text-brand-cream sm:text-5xl md:text-6xl">
            Found Water Damage or Rot That Can&rsquo;t Wait a Month? We Get On It.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-cream/90 sm:text-lg md:text-xl">
            Urgent siding, roof, and exterior repairs across Oregon. Every inquiry answered within
            24 hours. Damage that&rsquo;s actively getting worse gets scheduled first.
          </p>

          <div className="mt-10">
            <a
              href="tel:5039014583"
              className="inline-flex items-center gap-3 rounded-md bg-brand-burgundy px-7 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-black/20 transition-colors hover:bg-brand-burgundy-dark sm:text-lg"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call 503-901-4583
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyHero;
