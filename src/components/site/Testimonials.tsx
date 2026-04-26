import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Another company patched our siding twice and the leak kept coming back. CCA pulled everything off, showed us the rot underneath, and replaced the sheeting. Two winters later, completely dry.",
    name: "Megan",
    city: "Salem, OR",
  },
  {
    quote:
      "Carlos walked us through every step with photos. We always knew what was happening on our house and what it was going to cost. No surprises, no pressure, and the work is exactly what they said it would be.",
    name: "David",
    city: "Sherwood, OR",
  },
  {
    quote:
      "We got three quotes. CCA wasn't the cheapest, and they told us up front they wouldn't be. After watching the crew actually open up the wall and replace what was wrong, I understand why. Worth every dollar.",
    name: "Linda",
    city: "Portland, OR",
  },
];

const AUTOPLAY_DELAY = 5000;

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [current, setCurrent] = useState(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  }, []);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      emblaApi?.scrollNext();
    }, AUTOPLAY_DELAY);
  }, [emblaApi, stopAutoplay]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
    startAutoplay();
  }, [emblaApi, startAutoplay]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
    startAutoplay();
  }, [emblaApi, startAutoplay]);

  const scrollTo = useCallback((index: number) => {
    emblaApi?.scrollTo(index);
    startAutoplay();
  }, [emblaApi, startAutoplay]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => setCurrent(emblaApi.selectedScrollSnap()));
    startAutoplay();
    return () => stopAutoplay();
  }, [emblaApi, startAutoplay, stopAutoplay]);

  return (
    <section
      ref={sectionRef}
      className="bg-background py-20 md:py-28"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-[2.75rem]">
            What Homeowners Say After the Work Is Done.
          </h2>
        </div>

        <div className="relative mx-auto mt-14 max-w-3xl">
          {/* Carousel viewport */}
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {testimonials.map((t) => (
                <div key={t.name} className="min-w-0 flex-[0_0_100%]">
                  <figure className="flex flex-col rounded-lg border border-border bg-card px-8 py-10 shadow-sm md:px-12 md:py-12">
                    <span
                      aria-hidden="true"
                      className="font-serif text-6xl leading-none text-brand-burgundy/40"
                    >
                      &ldquo;
                    </span>
                    <blockquote className="mt-2 flex-1 font-serif text-xl leading-relaxed text-foreground/85 md:text-2xl">
                      {t.quote}
                    </blockquote>
                    <figcaption className="mt-8 text-sm font-medium text-foreground">
                      &mdash; {t.name},{" "}
                      <span className="font-normal text-muted-foreground">{t.city}</span>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>

          {/* Prev button */}
          <button
            onClick={scrollPrev}
            aria-label="Previous testimonial"
            className="absolute -left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background shadow-md transition-colors hover:bg-muted md:-left-6"
          >
            <ChevronLeft className="h-5 w-5 text-foreground/70" />
          </button>

          {/* Next button */}
          <button
            onClick={scrollNext}
            aria-label="Next testimonial"
            className="absolute -right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background shadow-md transition-colors hover:bg-muted md:-right-6"
          >
            <ChevronRight className="h-5 w-5 text-foreground/70" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 bg-brand-burgundy"
                  : "w-2 bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
