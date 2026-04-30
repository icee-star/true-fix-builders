import { useState } from "react";
import { ArrowRight } from "lucide-react";
import beforeImg from "@/assets/project-before-2.webp";

type View = "before" | "after";

const Proof = () => {
  const [view, setView] = useState<View>("before");

  return (
    <section className="bg-brand-warm-tint py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-[2.75rem]">
            30 Years. Oregon Homes. Real Repairs.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/75 md:text-lg">
            The work in our portfolio is every project we&rsquo;ve documented. You can see what was
            wrong before we got there, what we found underneath, and what the house looks like now.
          </p>
        </div>

        <article className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-lg border border-border bg-card shadow-sm">
          {/* Toggle */}
          <div className="flex items-center justify-center border-b border-border bg-muted/40 p-3">
            <div className="flex rounded-full border border-border bg-background p-1 shadow-sm">
              <button
                onClick={() => setView("before")}
                className={`rounded-full px-6 py-1.5 text-sm font-semibold transition-all duration-200 ${
                  view === "before"
                    ? "bg-brand-ink text-brand-cream shadow-sm"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                Before
              </button>
              <button
                onClick={() => setView("after")}
                className={`rounded-full px-6 py-1.5 text-sm font-semibold transition-all duration-200 ${
                  view === "after"
                    ? "bg-brand-burgundy text-primary-foreground shadow-sm"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                After
              </button>
            </div>
          </div>

          {/* Media */}
          <div className="relative w-full overflow-hidden bg-brand-ink">
            {/* Before image */}
            <img
              src={beforeImg}
              alt="Two-story apartment building exterior with weathered, peeling siding before renovation"
              width={1024}
              height={768}
              loading="lazy"
              className={`w-full object-contain transition-opacity duration-500 ${
                view === "before" ? "relative opacity-100" : "absolute inset-0 h-full opacity-0"
              }`}
            />
            {/* After video */}
            <video
              src="/videos/project-after.mov"
              autoPlay
              loop
              muted
              playsInline
              className={`w-full object-contain transition-opacity duration-500 ${
                view === "after" ? "relative opacity-100" : "absolute inset-0 h-full opacity-0"
              }`}
            />
          </div>

          {/* Project details */}
          <div className="p-7 md:p-9">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-burgundy">
              Featured Project
            </p>
            <h3 className="mt-2 font-serif text-2xl font-semibold leading-snug text-foreground md:text-[1.75rem]">
              Two-Story Apartment Building &mdash; 4724 Verda Ln NE, Keizer
            </h3>
            <p className="mt-4 text-[0.975rem] leading-relaxed text-foreground/80 md:text-base">
              When we got to the property, the siding was failing on multiple elevations &mdash; bubbled
              paint, soft spots, and obvious water staining around several windows. Once we pulled
              the siding off, we found extensive dry rot in the sheeting and damage to several wall
              studs that had never been addressed in a previous repair. We replaced the rotted
              sheeting and studs, installed new siding and trim across the affected sections, and
              repainted the building. Today the exterior is sound, sealed, and built to hold.
            </p>

            <div className="mt-7">
              <a
                href="/our-work"
                className="group inline-flex items-center gap-2 rounded-md bg-brand-burgundy px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand-burgundy-dark sm:text-base"
              >
                See All Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Proof;
