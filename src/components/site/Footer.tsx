const Footer = () => {
  return (
    <footer className="bg-brand-ink text-brand-cream">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <img
              src="/images/logo.png"
              alt="CCA Construction LLC"
              className="h-12 w-auto"
            />
            <p className="mt-3 text-sm leading-relaxed text-brand-cream/75">
              Salem, OR · Serving Salem, Portland, Eugene, Bend, Sherwood, and Lincoln City.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-cream/60">
              Contact
            </p>
            <ul className="mt-3 space-y-2 text-sm text-brand-cream/85">
              <li>
                <a href="tel:5039014583" className="hover:text-brand-cream hover:underline">
                  503-901-4583
                </a>
              </li>
              <li>Mon&ndash;Fri, 9:00 AM &ndash; 5:00 PM</li>
              <li>Oregon CCB #247508</li>
              <li className="text-brand-cream/70">Licensed, Bonded, Insured</li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-cream/60">
              Links
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="#top" className="text-brand-cream/85 hover:text-brand-cream hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/emergency" className="text-brand-cream/85 hover:text-brand-cream hover:underline">
                  Emergency Repairs
                </a>
              </li>
              <li>
                <a href="/our-work" className="text-brand-cream/85 hover:text-brand-cream hover:underline">
                  Our Work
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-brand-cream/15 pt-6 text-center text-xs text-brand-cream/60">
          &copy; {new Date().getFullYear()} CCA Construction LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
