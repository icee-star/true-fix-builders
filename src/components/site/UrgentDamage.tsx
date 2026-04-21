import { AlertTriangle } from "lucide-react";

const items = [
  "Water coming through drywall, ceilings, or window frames",
  "Paint bubbling on siding after a recent storm",
  "Soft or crumbling siding that presses in when you touch it",
  "Missing shingles or visible roof damage",
  "A previous contractor's repair that's already failing",
  "Exterior damage flagged by a home inspector on a house you're selling",
];

const UrgentDamage = () => {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-[2.5rem]">
            Some Repairs Can Wait. These Ones Can&rsquo;t.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/80 md:text-lg">
            If you&rsquo;re reading this page, something is wrong with your house and waiting two
            months for an opening isn&rsquo;t an option. Here&rsquo;s the kind of damage we
            prioritize:
          </p>

          <ul className="mt-8 space-y-3">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-md border border-border bg-card p-4 shadow-sm"
              >
                <AlertTriangle
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-burgundy"
                  aria-hidden="true"
                />
                <span className="text-base leading-relaxed text-foreground/90">{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-base leading-relaxed text-foreground/80 md:text-lg">
            Every day you wait on damage like this, the repair gets bigger. Rot spreads. Drywall
            damage widens. What could have been a localized repair becomes a full wall.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UrgentDamage;
