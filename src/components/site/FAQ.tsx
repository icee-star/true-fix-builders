import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "I had someone \u201cfix\u201d this last year and the leak is back. Can you actually stop it this time?",
    a: "Usually, yes. When a leak comes back, the wood underneath the siding was rotted and didn't get replaced. We pull the siding, inspect the sheeting and studs, and replace whatever is damaged. The repair holds because there's no rotted wood left behind it.",
  },
  {
    q: "Are you a real licensed Oregon contractor?",
    a: "Yes. Oregon CCB #247508. Licensed, bonded, and insured. You can look up our license on the Oregon Construction Contractors Board website at any time.",
  },
  {
    q: "Are you the cheapest option?",
    a: "No, and intentionally. We price on the higher-middle side because the work is built to prevent the second call. Most of the repair jobs we get are from homeowners who hired the cheapest option first and are paying twice.",
  },
  {
    q: "Will I get surprised with a bigger bill halfway through the project?",
    a: "Not on our work. For repairs, we open up the damaged area before the full scope is locked in so we know what's underneath. If we find more damage, we talk to you about it before we do the work. No silent change orders.",
  },
  {
    q: "How long does a siding repair usually take?",
    a: "Depends on how much rot is behind the siding. A small repair with healthy sheeting underneath can be a few days. A full section with sheeting and stud replacement is longer. After photos and a site visit we can give you a real timeline.",
  },
  {
    q: "Do you work on my house if I'm not in Salem?",
    a: "Probably yes. We serve Salem, Portland, Eugene, Bend, Sherwood, and Lincoln City. If you're near any of those areas, call and we'll confirm.",
  },
  {
    q: "How soon can you come out?",
    a: "Every inquiry gets a response within 24 hours. Active leaks and visible water damage get prioritized. Upgrade projects like decks and covered patios get scheduled based on season and current workload.",
  },
];

const FAQ = () => {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-[2.75rem]">
            Questions Oregon Homeowners Ask Us First.
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-serif text-lg font-semibold text-foreground hover:no-underline md:text-xl">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-foreground/75">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
