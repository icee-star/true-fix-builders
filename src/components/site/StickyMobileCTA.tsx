import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href="tel:5039014583"
        className="flex items-center justify-center gap-3 bg-brand-burgundy px-6 py-4 text-base font-semibold text-primary-foreground shadow-[0_-2px_12px_rgba(0,0,0,0.15)]"
      >
        <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
        Call 503-901-4583
      </a>
    </div>
  );
};

export default StickyMobileCTA;
