import { useEffect, useRef, useState } from "react";
import { ShieldCheck } from "lucide-react";
import { useCountUp } from "@/hooks/use-count-up";

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  trigger: boolean;
}

const AnimatedStat = ({ value, suffix, label, trigger }: StatProps) => {
  const count = useCountUp(value, 1800, trigger);
  return (
    <div className="flex flex-col items-center text-center">
      <span className="font-serif text-5xl font-semibold text-brand-cream sm:text-6xl">
        {count}
        <span className="text-brand-burgundy">{suffix}</span>
      </span>
      <span className="mt-2 text-sm font-medium uppercase tracking-widest text-brand-cream/60">
        {label}
      </span>
    </div>
  );
};

const stats = [
  { value: 30, suffix: "+", label: "Years of Experience" },
  { value: 24, suffix: "hr", label: "Response Promise" },
  { value: 6, suffix: "+", label: "Oregon Cities Served" },
  { value: 250, suffix: "+", label: "Projects Completed" },
];

const StatsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-brand-ink py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5 md:gap-8">
          {stats.map((s) => (
            <AnimatedStat key={s.label} {...s} trigger={triggered} />
          ))}

          {/* CCB credential — static, not a number */}
          <div className="col-span-2 flex flex-col items-center text-center md:col-span-1">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-brand-burgundy" aria-hidden="true" />
              <span className="font-serif text-2xl font-semibold text-brand-cream sm:text-3xl">
                CCB #247508
              </span>
            </div>
            <span className="mt-2 text-sm font-medium uppercase tracking-widest text-brand-cream/60">
              Oregon Licensed
            </span>
            <a
              href="https://search.ccb.state.or.us/search/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-xs text-brand-burgundy underline-offset-2 hover:underline"
            >
              Verify license →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
