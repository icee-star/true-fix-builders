import problemImage from "@/assets/problem-rot.jpg";

const Problem = () => {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-[2.75rem]">
            The Leak You Think Got Fixed Usually Didn&rsquo;t.
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/80 md:text-lg">
            <p>
              Most of the calls we take are from homeowners whose last contractor patched the visible
              damage and left. A few months later the paint is bubbling again. The drywall inside is
              stained again. The leak never actually stopped, because the rot behind the siding was
              never removed.
            </p>
            <p>
              Dry rot is a fungus. If any of the affected wood stays, it keeps spreading inside the
              wall where nobody can see it. By the time a homeowner calls us the second time, the
              sheeting is gone and the studs behind it are damaged. What started as a siding repair
              is now a structural repair.
            </p>
            <p>
              We show up, pull the siding off, and show you exactly what&rsquo;s underneath. If the
              sheeting is rotted, we replace it. If the studs are damaged, we replace them. The
              house gets closed back up with new material, not patched over old material. That&rsquo;s
              the reason we don&rsquo;t get called back to fix our own work.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-lg shadow-xl shadow-black/10">
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
