

# Add Videos to the Project Gallery

Right now `ProjectGallery` only renders `<img>` tags. To support video clips alongside photos, we'll extend the data shape and render the right element per item — the masonry layout, click-to-expand lightbox, and mixed aspect ratios all keep working.

## What changes

1. **Data shape gains a `media` type.** Each entry in the `projects` array becomes either `{ type: "image", src }` or `{ type: "video", src, poster? }`. Existing image entries get auto-migrated.
2. **Card thumbnails autoplay muted, looping, inline.** Videos in the grid behave like animated photos — silent, looping, no controls — so the gallery still feels like a photo wall, not a video player.
3. **Lightbox plays the full video with controls.** When a video card is clicked, the Dialog renders a `<video controls autoPlay>` instead of an `<img>`. Audio plays here. Closing the lightbox stops playback.
4. **A small play-icon badge** sits in the bottom-right of any video card so users know it's a clip before they tap.

## Where videos come from

Two supported sources, both via plain URLs in the data array:

- **Hosted MP4/WebM** (recommended): drop files into `public/videos/` and reference with `staticFile("videos/clip-1.mp4")`. Works offline-friendly, no third party.
- **External URL** (e.g. Cloudinary, Mux, S3, Vimeo direct file): paste the `.mp4` URL directly. YouTube/Vimeo embed pages don't work — must be a direct video file URL.

For the first pass we'll wire **2–3 placeholder MP4 clips** from a free CDN (Google's sample videos / Pexels) into the existing 24-item array so you can see the behavior immediately, then swap in Carlos's real footage later by editing one line per item.

## Files

- **Edit** `src/components/site/ProjectCard.tsx`
  - Render `<video muted loop autoPlay playsInline preload="metadata">` when `project.media.type === "video"`, otherwise the existing `<img>`.
  - Add a small play-icon pill (lucide `Play` icon) in the bottom-right corner for video items.
- **Edit** `src/components/site/ProjectGallery.tsx`
  - Update the `Project` type / data array so each item has a `media` discriminated union. Migrate all 24 existing entries to `media: { type: "image", src: ... }`.
  - Replace ~3 entries with `media: { type: "video", src: "...", poster: "..." }` using sample construction clips.
  - In the lightbox, branch on `active.media.type`: render `<img>` for photos (unchanged) or `<video controls autoPlay className="max-h-[85vh]">` for videos.

## Performance notes

- Grid videos use `preload="metadata"` so we don't download full files until hover/play — keeps the gallery light even with many clips.
- `playsInline` prevents iOS Safari from forcing fullscreen on autoplay.
- `muted` is required for autoplay to work in all browsers.

## Out of scope

- Uploading videos through a UI (you'd add files to `public/videos/` or paste URLs in code for now).
- Video transcoding / thumbnail generation — provide a `poster` image URL per video, or we'll fall back to the first frame.
- Lazy-mounting (only loading the `<video>` element when scrolled into view) — can add later if performance becomes an issue with 10+ video clips.

