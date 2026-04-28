import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Phone } from "lucide-react";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Please enter your name." })
    .max(100, { message: "Name must be less than 100 characters." }),
  phone: z
    .string()
    .trim()
    .min(7, { message: "Please enter a valid phone number." })
    .max(20, { message: "Phone must be less than 20 characters." })
    .regex(/^[0-9+()\-.\s]+$/, { message: "Phone can only contain digits and + ( ) - ." }),
  address: z
    .string()
    .trim()
    .min(1, { message: "Please enter your property address." })
    .max(200, { message: "Address must be less than 200 characters." }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Please tell us a bit more (10 characters minimum)." })
    .max(1000, { message: "Message must be less than 1000 characters." }),
  // Honeypot — must stay empty
  website: z.string().max(0).optional(),
});

type ContactValues = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", phone: "", address: "", message: "", website: "" },
  });

  const onSubmit = async (values: ContactValues) => {
    await fetch(
      "https://script.google.com/macros/s/AKfycbxSE1VLzubF6gWLk0rOXsJNlQBAQDf6xl182p0bcbGg9G3U6OS-pL8orf4Dk4mMeH91Ew/exec",
      {
        method: "POST",
        body: JSON.stringify({
          name: values.name,
          phone: values.phone,
          address: values.address,
          message: values.message,
        }),
      }
    );
    setSubmitted(true);
    toast.success("Thanks — we'll call you back, usually same day.");
  };

  return (
    <section id="contact" className="bg-brand-warm-tint py-20 md:py-28">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: reinforcement */}
          <div className="lg:pt-4">
            <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-[2.75rem]">
              Tell Us What&rsquo;s Going On With Your House.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/80 md:text-lg">
              Call <span className="font-semibold text-foreground">503-901-4583</span> or fill out
              the form. We respond within 24 hours, every time.
            </p>

            <a
              href="tel:5039014583"
              className="mt-7 inline-flex items-center gap-3 rounded-md bg-brand-burgundy px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-brand-burgundy-dark"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              503-901-4583
            </a>

            <div className="mt-8 space-y-2 text-sm text-foreground/70">
              <p>Oregon CCB #247508 · Licensed, Bonded, Insured</p>
              <p>Mon&ndash;Fri, 9:00 AM &ndash; 5:00 PM</p>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center text-center">
                <CheckCircle2 className="h-12 w-12 text-brand-burgundy" aria-hidden="true" />
                <h3 className="mt-4 font-serif text-2xl font-semibold text-foreground">
                  Thanks &mdash; we got it.
                </h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/75">
                  We&rsquo;ll call you back, usually same day. If your situation is urgent (active
                  leak, water coming in), please call <span className="font-semibold">503-901-4583</span>{" "}
                  directly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                {/* Honeypot field, hidden from users */}
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label>
                    Website
                    <input type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
                  </label>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" autoComplete="name" {...register("name")} aria-invalid={!!errors.name} />
                  {errors.name && (
                    <p className="text-sm font-medium text-destructive">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    {...register("phone")}
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && (
                    <p className="text-sm font-medium text-destructive">{errors.phone.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Property Address</Label>
                  <Input
                    id="address"
                    autoComplete="street-address"
                    {...register("address")}
                    aria-invalid={!!errors.address}
                  />
                  {errors.address && (
                    <p className="text-sm font-medium text-destructive">{errors.address.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">What&rsquo;s going on?</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Describe what you're seeing — bubbled paint, water stains, a deck you want built, etc."
                    {...register("message")}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p className="text-sm font-medium text-destructive">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-md bg-brand-burgundy px-6 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-brand-burgundy-dark disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Get a Response Within 24 Hours"}
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  We&rsquo;ll call you back, usually same day. Oregon CCB #247508.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
