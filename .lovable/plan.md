

# CCA Construction — Single-Page Marketing Site

A photo-forward, calm, premium-feeling landing page for CCA Construction LLC (Salem, OR). Burgundy + warm-white palette, serif headlines, sans-serif body. All copy you provided rendered exactly as written, with realistic placeholder content marked clearly so Carlos's real material drops in cleanly later.

## Page Structure (top to bottom)

1. **Sticky header** — small CCA wordmark left, phone number `503-901-4583` right (click-to-call on mobile).
2. **Hero** — full-width AI-generated photo of an Oregon two-story home (warm light, residential, calm). Serif headline, sans-serif subhead, burgundy primary CTA button "Call 503-901-4583", text link "Or tell us what's going on ↓" that smooth-scrolls to the form.
3. **Trust strip** — single horizontal row, dot-separated, on warm off-white: `Oregon CCB #247508 · Licensed, Bonded, Insured · 30 Years of Experience · 24-Hour Response`.
4. **Service area strip** — thin band: "Serving homeowners in Salem, Portland, Eugene, Bend, Sherwood, and Lincoln City."
5. **The Problem** — two-column on desktop: serif headline + body left, AI photo of opened-up wall showing rotted sheeting right.
6. **How We're Different** — four equal-weight cards in a 2×2 grid (stack on mobile). No numbering hierarchy, just clean titles + body. Subtle burgundy top border on each.
7. **Emergency Callout** — visually distinct: deep burgundy background, off-white text, centered. Outline CTA button "See Our Emergency Response Process →" linking to `/emergency`.
8. **Services** — six cards in a 3×2 grid, each with a small AI-generated thumbnail (siding, roofing, paint, decks, covered patios, exterior remodel), title, body.
9. **Proof / Featured Project** — section headline + intro, then a featured project card for "Two-Story Apartment Building, 4724 Verda Ln NE, Keizer" with a before/after AI image pair and realistic placeholder description (clearly tagged `Placeholder — pending Carlos's project notes`). CTA "See All Projects →" linking to `/our-work`.
10. **Testimonials** — three cards side-by-side (stack on mobile), serif pull-quote style. Realistic placeholder quotes attributed to "Homeowner, City" with a small italic note above the section: `Placeholder testimonials — to be replaced with real homeowner quotes.`
11. **Process** — 5 steps as a vertical timeline on mobile, horizontal stepper on desktop. Numbered 1–5 with burgundy step markers.
12. **FAQ** — shadcn Accordion, all 7 Q&As, single-column, comfortable line-height.
13. **Final CTA + Form** — split layout: left side reinforces phone + 24-hr promise, right side the form (Name, Phone, Property Address, "What's going on?" textarea). Burgundy submit button "Get a Response Within 24 Hours". Microcopy underneath. Form validates with zod and on submit shows a sonner success toast + inline confirmation message ("Thanks — we'll call you back, usually same day."). No backend wiring; submission just confirms.
14. **Footer** — burgundy or near-black background, off-white text. Company block, phone, hours, CCB number, service area, and the three text links (Home, Emergency Repairs, Our Work).

## Visual / Brand System

Tokens added to `index.css` and `tailwind.config.ts` as HSL semantic tokens:
- `--brand-burgundy` ~ `#6B1F2A`, plus a darker hover and a soft tint for backgrounds
- `--brand-ink` near-black for body type
- `--background` warm off-white `#FAF8F5`
- Map `--primary` to burgundy so default `Button` renders on-brand
- Fonts via Google Fonts in `index.html`: **Playfair Display** (headlines) + **Inter** (body); exposed as `font-serif` and `font-sans` in Tailwind
- Generous section padding (py-20/24 desktop), max-w-6xl content width, calm whitespace
- No rust/orange/teal/lime accents anywhere
- Buttons: solid burgundy primary, burgundy outline secondary, no gradients

## Imagery (AI-generated, realistic)

Generated once and saved to `src/assets/`, imported as ES modules so Vite hashes them:
- Hero: Oregon two-story residential exterior, soft overcast light, mature landscaping
- Problem section: close-up of opened wall cavity showing dark rotted sheeting and a stud
- Six service thumbnails (siding, roofing, exterior paint, deck, covered patio, exterior remodel)
- Featured project before/after pair (weathered apartment exterior → repaired and repainted)

All images generated via Lovable AI Gateway (Nano banana). Each marked in a comment as a placeholder for real photography.

## Form Behavior

- React Hook Form + zod schema (name 1–100, phone 7–20 digits/symbols, address 1–200, message 10–1000, all trimmed)
- On submit: simulate a short delay, show sonner success toast, replace form with a confirmation panel
- No data sent anywhere, no console logging of inputs
- Honeypot field for basic bot resistance

## Files Created / Modified

- `src/index.css` — add brand color tokens, font-family wiring
- `tailwind.config.ts` — register `brand` color palette + `serif`/`sans` font families
- `index.html` — add Google Fonts links, update `<title>` and meta description for SEO ("CCA Construction — Siding, Roofing & Exterior Repair in Salem, OR")
- `src/pages/Index.tsx` — compose the page from sections
- `src/components/site/Header.tsx`, `Hero.tsx`, `TrustStrip.tsx`, `ServiceArea.tsx`, `Problem.tsx`, `Difference.tsx`, `EmergencyCallout.tsx`, `Services.tsx`, `Proof.tsx`, `Testimonials.tsx`, `Process.tsx`, `FAQ.tsx`, `ContactForm.tsx`, `Footer.tsx`
- `src/assets/` — generated images (hero, problem, 6 services, before/after pair)
- Reuse existing shadcn `Button`, `Card`, `Accordion`, `Form`, `Input`, `Textarea`, `Label`, `sonner`

## Out of Scope (this pass)

- `/emergency` and `/our-work` routes — buttons link to those paths but pages aren't built yet (will render the existing NotFound). Easy to add next.
- Real form submission backend
- Real testimonials and Verda Ln project copy

