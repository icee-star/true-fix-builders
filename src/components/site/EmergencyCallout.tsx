import { ArrowRight } from "lucide-react";

const EmergencyCallout = () => {
  return (
    <section className="bg-brand-burgundy py-16 text-primary-foreground md:py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl md:text-[2.5rem]">
            Water Coming In Right Now?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-primary-foreground/90 md:text-lg">
            Active leaks and visible water damage can&rsquo;t wait for next week. Every day of delay
            is more drywall damage, more rot, more cost. We prioritize urgent repairs and respond to
            every inquiry within 24 hours.
          </p>

          <div className="mt-8">
            <a
              href="/emergency"
              className="group inline-flex items-center gap-2 rounded-md border border-primary-foreground/80 bg-transparent px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-brand-burgundy sm:text-base"
            >
              See Our Emergency Response Process
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyCallout;
