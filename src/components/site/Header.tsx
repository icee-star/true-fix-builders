import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2" aria-label="CCA Construction home">
          <span className="font-serif text-xl font-bold tracking-tight text-brand-burgundy">
            CCA
          </span>
          <span className="hidden text-sm font-medium tracking-wide text-foreground/70 sm:inline">
            Construction
          </span>
        </a>

        <a
          href="tel:5039014583"
          className="inline-flex items-center gap-2 rounded-md bg-brand-burgundy px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand-burgundy-dark"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">Call</span> 503-901-4583
        </a>
      </div>
    </header>
  );
};

export default Header;
