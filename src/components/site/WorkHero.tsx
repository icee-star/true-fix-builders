import { Phone } from "lucide-react";
import heroImage from "@/assets/work-hero.jpg";

const services = ["Siding", "Roofing", "Exterior Paint", "Decks", "Covered Patios"];

const WorkHero = () => {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt="CCA Construction crew working on an Oregon home exterior"
          width={1920}
          height={1080}
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(0 0% 8% / 0.60) 0%, hsl(0 0% 8% / 0.50) 50%, hsl(0 0% 8% / 0.80) 100%)",
          }}
          aria-hidden="true"
        />
      </div>

      <div className="container flex min-h-[calc(100vh-4rem)] flex-col justify-center py-24 md:py-32">
        <div className="max-w-3xl animate-fade-in-up">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-burgundy">
            Our Work
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold leading-[1.1] text-brand-cream sm:text-5xl md:text-6xl">
            30 Years of Oregon Homes, Documented.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-cream/90 sm:text-lg md:text-xl">
            Before, during, and after. What was wrong, what we found underneath, and what the house
            looks like now. Every project below is real work on a real home.
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

          {/* Service type strip */}
          <div className="mt-10 flex flex-wrap gap-x-4 gap-y-2">
            {services.map((s, i) => (
              <span key={s} className="flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-brand-cream/70">
                {s}
                {i < services.length - 1 && (
                  <span aria-hidden="true" className="text-brand-burgundy/60">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkHero;
