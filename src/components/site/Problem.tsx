import problemImage from "@/assets/problem-rot.webp";

const Problem = () => {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-[2.75rem]">
            The Damage Behind Your Siding Is Almost Always Worse Than What You Can See.
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/80 md:text-lg">
            <p>
              Dry rot starts where wood stays damp — window frames, the base of siding panels,
              anywhere water finds a gap. Once it starts, it spreads through the wall whether the
              surface looks fine or not. What looks like a soft spot outside is often rotted
              sheeting and damaged studs by the time the siding comes off.
            </p>
            <p>
              Water damage works the same way. It travels down inside the wall cavity past
              what&rsquo;s visible, soaking insulation and reaching wood you can&rsquo;t see. Most
              repairs don&rsquo;t hold because new siding goes over rotted material with nothing
              solid to attach to. The problem comes back.
            </p>
            <p>
              We pull the siding off and show you what&rsquo;s underneath before anything goes back
              on. Rotted sheeting gets replaced. Damaged studs get replaced. The house closes back
              up with new material, not patched over old. That&rsquo;s why we don&rsquo;t get called
              back to fix our own work.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-lg shadow-xl shadow-black/10 lg:h-[540px]">
            <img
              src={problemImage}
              alt="Exterior wall with siding removed exposing rotted sheeting and damaged studs"
              width={1280}
              height={960}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 hidden h-24 w-24 rounded-md border-4 border-brand-burgundy lg:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default Problem;
