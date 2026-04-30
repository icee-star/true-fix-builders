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
              Dry rot is a fungus. It starts where wood stays damp, around window frames, at the
              base of siding panels, anywhere water finds a gap. Once it starts, it spreads through
              the wall structure whether the surface looks fine or not. What looks like a paint
              problem or a soft spot on the outside is often rotted sheeting and damaged studs by
              the time the siding comes off.
            </p>
            <p>
              Water damage from a leak works the same way. It travels down inside the wall cavity
              past what&rsquo;s visible, soaking insulation and reaching wood that only shows up when
              someone opens the wall. The reason most repairs don&rsquo;t hold is that new siding goes
              over whatever is behind it. If the sheeting is rotted and doesn&rsquo;t get replaced, the
              new material has nothing solid to attach to. The problem comes back. Paint bubbling,
              drywall staining. By then the damage has spread further into the studs.
            </p>
            <p>
              We pull the siding off and show you what&rsquo;s underneath before anything goes back on.
              If the sheeting is rotted, we replace it. If the studs are damaged, we replace them.
              The house gets closed back up with new material, not patched over old material.
              That&rsquo;s the reason we don&rsquo;t get called back to fix our own work.
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
