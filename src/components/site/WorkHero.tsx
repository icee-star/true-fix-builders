import { Phone } from "lucide-react";

const WorkHero = () => {
  return (
    <section className="relative overflow-hidden bg-brand-ink text-brand-cream">
      <div className="container py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-brand-cream md:text-5xl lg:text-6xl">
            30 Years of Oregon Homes, Documented.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-brand-cream/80 md:text-xl">
            Before, during, and after. What was wrong, what we found underneath, and what
            the house looks like now. Every project below is real work on a real home.
          </p>
          <div className="mt-10">
            <a
              href="tel:5039014583"
              className="inline-flex items-center gap-2 rounded-md bg-brand-burgundy px-6 py-3 text-base font-semibold text-primary-foreground shadow-lg transition-colors hover:bg-brand-burgundy-dark"
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

export default WorkHero;
