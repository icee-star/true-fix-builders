const steps = [
  {
    n: "1",
    title: "You Call or Submit the Form.",
    body:
      "Tell us what's going on. A leak, rotted siding, a deck you want built before summer. We respond within 24 hours, every time.",
  },
  {
    n: "2",
    title: "We Ask Questions and Look at Photos.",
    body:
      "Before we come out, we want to understand the scope. Carlos will ask for photos by text so we can give you a real sense of the project before the first site visit.",
  },
  {
    n: "3",
    title: "We Come Out and Quote the Job.",
    body:
      "We inspect the damage in person. For repair work, we open up the problem area so the quote reflects what's actually there, not what we hope is there.",
  },
  {
    n: "4",
    title: "We Do the Work and Show You Every Step.",
    body:
      "Photo updates. Clean site. Sheeting and studs replaced where they need to be. Siding, paint, or new structure closed back up with new material.",
  },
  {
    n: "5",
    title: "We Walk You Through What We Fixed.",
    body:
      "Before we leave, you get a full walkthrough. What was wrong. What we replaced. Why the repair will hold. You know what your house looks like under the siding now.",
  },
];

const Process = () => {
  return (
    <section className="bg-brand-warm-tint py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-[2.75rem]">
            How a Project Actually Goes.
          </h2>
        </div>

        <ol className="mx-auto mt-14 max-w-4xl space-y-8 md:space-y-10">
          {steps.map((s, i) => (
            <li key={s.n} className="flex gap-5 md:gap-7">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-burgundy font-serif text-lg font-semibold text-primary-foreground md:h-14 md:w-14 md:text-xl">
                  {s.n}
                </div>
                {i < steps.length - 1 && (
                  <div className="mt-2 h-full w-px flex-1 bg-border" aria-hidden="true" />
                )}
              </div>
              <div className="pb-2 pt-2 md:pt-3">
                <h3 className="font-serif text-xl font-semibold leading-snug text-foreground md:text-2xl">
                  Step {s.n} &mdash; {s.title}
                </h3>
                <p className="mt-3 text-[0.975rem] leading-relaxed text-foreground/75 md:text-base">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
