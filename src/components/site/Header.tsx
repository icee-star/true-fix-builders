import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
const navLinks = [
  { label: "Home", to: "/" },
  { label: "Emergency Repairs", to: "/emergency" },
  { label: "Our Work", to: "/our-work" },
];

const CallButton = ({ className = "" }: { className?: string }) => (
  <a
    href="tel:5039014583"
    className={`inline-flex items-center gap-2 rounded-md bg-brand-burgundy px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand-burgundy-dark ${className}`}
  >
    <Phone className="h-4 w-4" aria-hidden="true" />
    503-901-4583
  </a>
);

const Header = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo — navigates home, or smooth-scrolls to top if already there */}
        <Link
          to="/"
          aria-label="CCA Construction — return to home"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <img
            src="/images/logo.png"
            alt="CCA Construction LLC"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-brand-burgundy ${
                pathname === link.to
                  ? "text-brand-burgundy"
                  : "text-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop call button */}
        <CallButton className="hidden md:inline-flex" />

        {/* Mobile: call + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="tel:5039014583"
            className="inline-flex items-center gap-1.5 rounded-md bg-brand-burgundy px-3 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand-burgundy-dark"
            aria-label="Call 503-901-4583"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="hidden xs:inline">Call</span>
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open navigation menu"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-muted"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="flex flex-col pt-14">
              <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.to}>
                    <Link
                      to={link.to}
                      className={`rounded-md px-3 py-3 text-base font-medium transition-colors hover:bg-muted hover:text-brand-burgundy ${
                        pathname === link.to
                          ? "bg-muted text-brand-burgundy"
                          : "text-foreground/80"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              <div className="mt-auto border-t border-border pt-6">
                <CallButton className="w-full justify-center py-3 text-base" />
                <div className="mt-4 space-y-1 text-center text-xs text-muted-foreground">
                  <p>Oregon CCB #247508 · Licensed, Bonded, Insured</p>
                  <p>Mon–Fri, 9:00 AM – 5:00 PM</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
