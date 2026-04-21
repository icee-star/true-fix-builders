const items = [
  "Oregon CCB #247508",
  "Licensed, Bonded, Insured",
  "24-Hour Response Promise",
];

const EmergencyTrustStrip = () => {
  return (
    <section className="border-y border-border bg-brand-warm-tint" aria-label="Credentials">
      <div className="container py-5">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center text-sm font-medium text-foreground/80 sm:text-[0.95rem]">
          {items.map((item, idx) => (
            <li key={item} className="flex items-center gap-6">
              <span>{item}</span>
              {idx < items.length - 1 && (
                <span aria-hidden="true" className="hidden text-brand-burgundy/60 sm:inline">
                  ·
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EmergencyTrustStrip;
