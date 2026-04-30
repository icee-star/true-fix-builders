import { Phone, ArrowDown } from "lucide-react";
import heroImage from "@/assets/home-hero.webp";

const Hero = () => {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt="A two-story craftsman home in Oregon at dusk after exterior siding repair"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
          fetchpriority="high"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(0 0% 8% / 0.55) 0%, hsl(0 0% 8% / 0.45) 50%, hsl(0 0% 8% / 0.75) 100%)",
          }}
          aria-hidden="true"
        />
      </div>

      <div className="container flex min-h-[88vh] flex-col justify-center py-24 md:py-32">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="font-serif text-4xl font-semibold leading-[1.1] text-brand-cream sm:text-5xl md:text-6xl">
            Dry Rot and Water Damage Don&rsquo;t Stop at the Surface. Most Repairs Do. Ours Don&rsquo;t.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-cream/90 sm:text-lg md:text-xl">
            We pull the siding, show you what&rsquo;s underneath, and replace damaged sheeting and studs, not just what you can see.
            30 years of exterior work on Oregon homes. Oregon CCB #247508.
          </p>

          <div className="mt-10 flex flex-col items-start gap-4">
            <a
              href="tel:5039014583"
              className="inline-flex items-center gap-3 rounded-md bg-brand-burgundy px-7 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-black/20 transition-colors hover:bg-brand-burgundy-dark sm:text-lg"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call 503-901-4583
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-medium text-brand-cream/90 underline-offset-4 hover:underline sm:text-base"
            >
              Or tell us what&rsquo;s going on
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
