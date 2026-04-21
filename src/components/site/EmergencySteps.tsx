const steps = [
  {
    n: "1",
    title: "Callback Within 24 Hours",
    body: "Every inquiry gets a response within 24 hours. If it's a workday and you call in the morning, usually much faster.",
  },
  {
    n: "2",
    title: "Questions and Photos",
    body: "Carlos will ask what you're seeing and request photos by text. This lets us understand the scope before a site visit and gives you a better sense of what you're dealing with.",
  },
  {
    n: "3",
    title: "Priority Scheduling",
    body: "Active damage gets scheduled ahead of upgrade projects. We tell you honestly how soon we can be on site. If we can't get there fast enough, we tell you that too.",
  },
  {
    n: "4",
    title: "Inspection and Real Quote",
    body: "We come out, open up the problem area, and show you what's actually behind the siding or ceiling. The quote reflects what's there, not what we hope is there.",
  },
  {
    n: "5",
    title: "The Repair",
    body: "Damaged sheeting and studs replaced where needed. Photo timeline of the work. Clean site every day. Walkthrough before we leave.",
  },
];

const EmergencySteps = () => {
  return (
    <section className="bg-brand-warm-tint py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-[2.5rem]">
            What to Expect After You Reach Out.
          </h2>

          <ol className="mt-10 space-y-8">
            {steps.map((step) => (
              <li key={step.n} className="flex gap-5">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-burgundy font-serif text-lg font-semibold text-primary-foreground"
                  aria-hidden="true"
                >
                  {step.n}
                </div>
                <div className="pt-1">
                  <h3 className="font-serif text-xl font-semibold text-foreground sm:text-2xl">
                    Step {step.n} &mdash; {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-foreground/80">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default EmergencySteps;
