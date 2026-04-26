const items = [
  "Oregon CCB #247508",
  "Licensed, Bonded & Insured",
  "30 Years of Experience",
  "24-Hour Response",
  "Salem · Portland · Eugene · Bend · Sherwood · Lincoln City",
];

const Separator = () => (
  <span aria-hidden="true" className="text-brand-burgundy/50">·</span>
);

const TrustStrip = () => {
  return (
    <section
      className="border-y border-border bg-brand-warm-tint overflow-hidden"
      aria-label="Credentials"
    >
      <div
        className="flex w-max animate-marquee items-center gap-8 py-4 hover:[animation-play-state:paused]"
      >
        {/* Render twice for seamless loop */}
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="flex items-center gap-8"
          >
            {items.map((item, idx) => (
              <li key={item} className="flex items-center gap-8 whitespace-nowrap">
                <span className="text-sm font-medium text-foreground/80 sm:text-[0.95rem]">
                  {item}
                </span>
                {idx < items.length - 1 && <Separator />}
              </li>
            ))}
            {/* Separator between the two copies */}
            <li aria-hidden="true"><Separator /></li>
          </ul>
        ))}
      </div>
    </section>
  );
};

export default TrustStrip;
