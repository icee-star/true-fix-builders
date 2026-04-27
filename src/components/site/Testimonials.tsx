import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const GOOGLE_REVIEWS_URL = "https://g.page/r/YOUR_GOOGLE_LISTING_ID/review";

const testimonials = [
  {
    quote:
      "Another company patched our siding twice and the leak kept coming back. CCA pulled everything off, showed us the rot underneath, and replaced the sheeting. Two winters later, completely dry.",
    name: "Megan T.",
    city: "Salem, OR",
    project: "Siding & dry rot repair",
    date: "Fall 2023",
  },
  {
    quote:
      "Carlos walked us through every step with photos. We always knew what was happening on our house and what it was going to cost. No surprises, no pressure, and the work is exactly what they said it would be.",
    name: "David R.",
    city: "Sherwood, OR",
    project: "Exterior remodel",
    date: "Spring 2024",
  },
  {
    quote:
      "We got three quotes. CCA wasn't the cheapest, and they told us up front they wouldn't be. After watching the crew actually open up the wall and replace what was wrong, I understand why. Worth every dollar.",
    name: "Linda M.",
    city: "Portland, OR",
    project: "Full siding replacement",
    date: "Summer 2024",
  },
];

const TestimonialCard = ({ t }: { t: typeof testimonials[number] }) => (
  <figure className="flex h-full flex-col rounded-lg border border-border bg-card p-7 shadow-sm md:p-8">
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-brand-burgundy text-brand-burgundy" aria-hidden="true" />
      ))}
    </div>
    <blockquote className="mt-5 flex-1 font-serif text-lg leading-relaxed text-foreground/85 md:text-[1.2rem]">
      {t.quote}
    </blockquote>
    <figcaption className="mt-6 space-y-0.5">
      <p className="text-sm font-semibold text-foreground">
        &mdash; {t.name},{" "}
        <span className="font-normal text-muted-foreground">{t.city}</span>
      </p>
      <p className="text-xs text-muted-foreground">
        {t.project} &middot; {t.date}
      </p>
    </figcaption>
  </figure>
);

const MobileCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [current, setCurrent] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => setCurrent(emblaApi.selectedScrollSnap()));
  }, [emblaApi]);

  return (
    <div className="md:hidden">
      <div className="relative">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {testimonials.map((t) => (
              <div key={t.name} className="min-w-0 flex-[0_0_100%] px-1">
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollPrev}
          aria-label="Previous testimonial"
          className="absolute -left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background shadow-md transition-colors hover:bg-muted"
        >
          <ChevronLeft className="h-4 w-4 text-foreground/70" />
        </button>

        <button
          onClick={scrollNext}
          aria-label="Next testimonial"
          className="absolute -right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background shadow-md transition-colors hover:bg-muted"
        >
          <ChevronRight className="h-4 w-4 text-foreground/70" />
        </button>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-6 bg-brand-burgundy" : "w-2 bg-border hover:bg-muted-foreground"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => (
  <section className="bg-background py-20 md:py-28">
    <div className="container">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-[2.75rem]">
          What Homeowners Say After the Work Is Done.
        </h2>
      </div>

      <div className="mt-14">
        {/* Mobile: swipeable carousel, no autoplay */}
        <MobileCarousel />

        {/* Desktop: full 3-column grid */}
        <div className="hidden gap-6 md:grid md:grid-cols-3 md:gap-8">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </div>

      <div className="mt-10 text-center">
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-brand-burgundy underline-offset-4 hover:underline"
        >
          <Star className="h-4 w-4 fill-brand-burgundy text-brand-burgundy" aria-hidden="true" />
          Read our Google reviews
        </a>
      </div>
    </div>
  </section>
);

export default Testimonials;
