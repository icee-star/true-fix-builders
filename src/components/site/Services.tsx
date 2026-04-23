import { useState } from "react";
import siding from "@/assets/service-siding.jpg";
import roofing from "@/assets/service-roofing.jpg";
import paint from "@/assets/service-paint.jpg";
import deck from "@/assets/service-deck.jpg";
import patio from "@/assets/service-patio.jpg";
import remodelBefore from "@/assets/service-remodel.jpg";
import remodelAfter from "@/assets/service-remodel-new.jpg";

const services = [
  {
    img: siding,
    alt: "New horizontal lap siding installed on a residential home",
    title: "Siding Repair and Replacement",
    body:
      "From small rot patches to full tear-offs with new sheeting and studs. If a previous contractor's fix didn't hold, we find out why and actually stop it.",
  },
  {
    img: roofing,
    alt: "Asphalt shingle roof on a craftsman home",
    title: "Roofing",
    body:
      "Leak repairs, missing shingles after a storm, and full replacements. We start by figuring out whether you need a repair or a replacement. Sometimes you don't need as much work as you've been told.",
  },
  {
    img: paint,
    alt: "Freshly painted residential exterior with crisp white trim",
    title: "Exterior Paint",
    body:
      "Usually paired with siding work to seal everything back up once the repair is done. Also stand-alone for homeowners prepping a house for sale or refreshing a faded exterior.",
  },
  {
    img: deck,
    alt: "Custom-built cedar deck attached to a Pacific Northwest home",
    title: "Decks",
    body:
      "Custom deck design and build. If you have a plan, we'll build it. If you don't, we'll design one with you. Safe construction, clean materials, finished to last in Oregon weather.",
  },
  {
    img: patio,
    alt: "Covered outdoor patio with wooden roof structure",
    title: "Covered Patios",
    body:
      "Outdoor space you can actually use in the Oregon rain. Design and build, matched to the look of your house.",
  },
  {
    img: remodelAfter,
    beforeImg: remodelBefore,
    afterImg: remodelAfter,
    alt: "Fully remodeled craftsman home exterior",
    title: "Exterior Remodeling",
    body:
      "Siding, paint, trim, and sometimes deck work combined into one project. Modernize the look of the house, fix what needs fixing, and prep for sale in one pass.",
  },
];

const BeforeAfterSlider = ({
  beforeImg,
  afterImg,
  alt,
}: {
  beforeImg: string;
  afterImg: string;
  alt: string;
}) => {
  const [position, setPosition] = useState(50);

  return (
    <div className="relative h-full w-full overflow-hidden bg-muted">
      <img
        src={beforeImg}
        alt={`Before ${alt.toLowerCase()}`}
        width={1024}
        height={768}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
        <img
          src={afterImg}
          alt={`After ${alt.toLowerCase()}`}
          width={1024}
          height={768}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ width: `${10000 / position}%`, maxWidth: "none" }}
        />
      </div>
      <div className="pointer-events-none absolute left-3 top-3 rounded-md bg-background/90 px-2.5 py-1 text-xs font-medium text-foreground shadow-sm">
        After
      </div>
      <div className="pointer-events-none absolute right-3 top-3 rounded-md bg-background/90 px-2.5 py-1 text-xs font-medium text-foreground shadow-sm">
        Before
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-background shadow-sm"
        style={{ left: `${position}%` }}
      />
      <div
        className="pointer-events-none absolute top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-border bg-background text-foreground shadow-md"
        style={{ left: `${position}%` }}
      >
        <span className="text-sm leading-none">↔</span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={position}
        aria-label="Compare before and after exterior remodeling images"
        onChange={(event) => setPosition(Number(event.target.value))}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
};

const Services = () => {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-[2.75rem]">
            What We Fix. What We Build.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/75 md:text-lg">
            30 years of exterior work across Oregon. Repair the damage. Refresh the look. Add the
            space you wanted.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                {s.beforeImg && s.afterImg ? (
                  <BeforeAfterSlider beforeImg={s.beforeImg} afterImg={s.afterImg} alt={s.alt} />
                ) : (
                  <img
                    src={s.img}
                    alt={s.alt}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold leading-snug text-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-foreground/75">{s.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
