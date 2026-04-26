import { Phone } from "lucide-react";

const WorkClosingCTA = () => {
  return (
    <section className="bg-brand-warm-tint py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-[2.75rem]">
            See Something Close to What You Have in Mind?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/75 md:text-lg">
            Whether you&rsquo;re dealing with damage that needs to be fixed right, or you&rsquo;re
            ready to add the deck or covered patio you&rsquo;ve been planning — call and describe
            what you&rsquo;re looking at. We&rsquo;ll walk you through what the project would
            involve and what to expect from start to finish.
          </p>

          <div className="mt-10">
            <a
              href="tel:5039014583"
              className="inline-flex items-center gap-3 rounded-md bg-brand-burgundy px-8 py-4 text-base font-semibold text-primary-foreground shadow-md transition-colors hover:bg-brand-burgundy-dark sm:text-lg"
            >
              <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
              Call 503-901-4583
            </a>
          </div>

          <p className="mt-5 text-sm text-muted-foreground">
            Oregon CCB #247508 &middot; Licensed, Bonded, Insured &middot; Response within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkClosingCTA;
