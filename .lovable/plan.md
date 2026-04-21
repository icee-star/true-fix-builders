

# Expand Gallery to 24 Projects + Click-to-Expand Lightbox + Mixed Aspect Ratios

## What changes

1. **Grow the gallery from 8 → 24 projects.** Mix of crew leads (Mike R., Lyth Construction, Dave T., Carlos M.) across kitchens, bathrooms, decks, roofs, framing, additions, ADUs, siding, dry rot repair, etc. Same Unsplash placeholder pattern so real photos drop in cleanly later.
2. **Mixed aspect ratios.** Every card is forced to either 16:9 landscape or 9:16 portrait, distributed across the 24 cards so the masonry columns stagger naturally (roughly half landscape, half portrait, scattered — not alternating). Uses Radix `AspectRatio` to lock the frame so Unsplash photos crop cleanly to fit regardless of their native proportions.
3. **Click-to-expand lightbox.** Tapping a card opens a full-screen modal showing the photo at its natural size (no cropping in the lightbox), with crew name and project title overlaid at the bottom.
4. **Helper text under "Recent Projects"**: "Tap any photo to view it full size."

## How it works

- `Project` type gains an `orientation: "landscape" | "portrait"` field. Each of the 24 entries has a fixed orientation (predefined, scattered) — no runtime randomness, so layout is stable across reloads and SSR-safe.
- `ProjectCard`:
  - Wrapper becomes a `<button>` with `cursor-zoom-in`, keyboard focus ring, and `onClick` prop.
  - Image is wrapped in `<AspectRatio ratio={16/9}>` or `<AspectRatio ratio={9/16}>` based on orientation, with `object-cover` so the photo fills the locked frame.
  - Existing fade-in-up animation, gradient overlay, and hover scale stay the same.
- `ProjectGallery`:
  - Holds `active: Project | null` state.
  - Renders the existing CSS `column-count` masonry (1 / 2 / 3 / 4 cols). Mixed aspect ratios make columns stagger naturally.
  - Lightbox uses shadcn `Dialog`: dark transparent background, image rendered with `object-contain` and `max-h-[85vh]` (no crop in lightbox — full photo always visible), bottom gradient strip shows crew avatar + name + title. Escape-to-close and X button come free from Radix.
- Accessibility: `DialogTitle` / `DialogDescription` visually hidden but present; cards have `aria-label="View [title] full size"`.

## Files

- **Edit** `src/components/site/ProjectCard.tsx` — convert wrapper to `<button>`, accept `onClick`, wrap image in `AspectRatio` keyed off `project.orientation`.
- **Edit** `src/components/site/ProjectGallery.tsx` — expand to 24 projects with assigned orientations, add `Dialog` lightbox, wire `onClick`. Bump image width to `w=1200` for sharper lightbox.

## Out of scope

- No swipe / arrow-key navigation between photos in the lightbox (can add later).
- No before/after pairs or per-project detail pages.

