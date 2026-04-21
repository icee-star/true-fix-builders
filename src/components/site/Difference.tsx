const blocks = [
  {
    title: "We Open the Wall Before We Quote the Full Job.",
    body:
      "Hidden damage is the reason homeowners get surprised with a bigger bill halfway through a project. We pull siding in the damaged area first, inspect the sheeting and studs underneath, and tell you what we find before the full scope is locked in. No mid-job surprises.",
  },
  {
    title: "We Replace Sheeting and Studs, Not Just Siding.",
    body:
      "When the wood underneath the siding is rotted, siding alone won't hold. We replace damaged sheeting. We replace damaged studs. The new siding goes onto new structure, which is the only way the repair actually lasts.",
  },
  {
    title: "You Get a Photo Timeline of Your Own House.",
    body:
      "Every day we're on site, you get photos of what we found, what we removed, and what we put back. You see the wall opened up. You see the rot before it's gone. You see the new sheeting going on. When the job is finished you know exactly what was wrong and exactly what got fixed.",
  },
  {
    title: "Clean, Safe Worksite Every Day.",
    body:
      "Kids and pets still live in the house while we're working. The site gets cleaned up at the end of every day. The house doesn't sit open and exposed overnight. You don't have to manage our crew. That's our job.",
  },
];

const Difference = () => {
  return (
    <section className="bg-brand-warm-tint py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-[2.75rem]">
            Four Things Your Last Contractor Probably Didn&rsquo;t Do.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
          {blocks.map((b) => (
            <article
              key={b.title}
              className="rounded-lg border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-md md:p-8"
            >
              <div className="h-1 w-12 rounded-full bg-brand-burgundy" aria-hidden="true" />
              <h3 className="mt-5 font-serif text-xl font-semibold leading-snug text-foreground md:text-2xl">
                {b.title}
              </h3>
              <p className="mt-4 text-[0.975rem] leading-relaxed text-foreground/75 md:text-base">
                {b.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Difference;
