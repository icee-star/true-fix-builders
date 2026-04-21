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

const Testimonials = () => {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-[2.75rem]">
            What Homeowners Say After the Work Is Done.
          </h2>
          <p className="mt-3 text-xs italic text-muted-foreground">
            Placeholder testimonials &mdash; to be replaced with real homeowner quotes.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-lg border border-border bg-card p-7 shadow-sm md:p-8"
            >
              <span
                aria-hidden="true"
                className="font-serif text-5xl leading-none text-brand-burgundy/40"
              >
                &ldquo;
              </span>
              <blockquote className="mt-2 flex-1 font-serif text-lg leading-relaxed text-foreground/85 md:text-[1.2rem]">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 text-sm font-medium text-foreground">
                &mdash; {t.name},{" "}
                <span className="font-normal text-muted-foreground">{t.city}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
