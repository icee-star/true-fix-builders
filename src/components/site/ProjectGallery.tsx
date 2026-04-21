import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import ProjectCard, { type Project } from "./ProjectCard";

const AVATAR_MIKE =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80";
const AVATAR_LYTH =
  "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&w=120&q=80";
const AVATAR_DAVE =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80";
const AVATAR_CARLOS =
  "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=120&q=80";

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

// Sample construction-themed video clips (royalty-free placeholders).
// Replace these URLs with Carlos's real footage — drop MP4s in `public/videos/`
// and reference with `/videos/your-clip.mp4`, or paste any direct .mp4 URL here.
const VIDEO_CONSTRUCTION_1 =
  "https://cdn.coverr.co/videos/coverr-construction-worker-on-a-building-site-3034/1080p.mp4";
const VIDEO_CONSTRUCTION_2 =
  "https://cdn.coverr.co/videos/coverr-a-carpenter-at-work-2633/1080p.mp4";
const VIDEO_CONSTRUCTION_3 =
  "https://cdn.coverr.co/videos/coverr-a-construction-worker-using-a-saw-1573/1080p.mp4";

const projects: Project[] = [
  { crewLead: "Mike R.", title: "West Salem Kitchen Remodel", media: { type: "video", src: "/videos/west-salem-kitchen.mp4" }, avatar: AVATAR_MIKE, orientation: "portrait" },
  { crewLead: "Lyth Construction", title: "Full Bathroom Renovation — Keizer", media: { type: "video", src: "/videos/bathroom-renovation.mp4" }, avatar: AVATAR_LYTH, orientation: "portrait" },
  { crewLead: "Dave T.", title: "Commercial Tenant Buildout — Downtown Salem", media: { type: "image", src: "/images/commercial-tenant-buildout.jpg" }, avatar: AVATAR_DAVE, orientation: "landscape" },
  { crewLead: "Mike R.", title: "New Build Framing — Turner", media: { type: "image", src: "/images/new-build-framing-turner.jpg" }, avatar: AVATAR_MIKE, orientation: "landscape" },
  { crewLead: "Lyth Construction", title: "Deck & Outdoor Living Space", media: { type: "image", src: img("photo-1591474200742-8e512e6f98f8") }, avatar: AVATAR_LYTH, orientation: "landscape" },
  { crewLead: "Carlos M.", title: "Basement Finish — South Salem", media: { type: "image", src: img("photo-1600585154340-be6161a56a0c") }, avatar: AVATAR_CARLOS, orientation: "landscape" },
  { crewLead: "Dave T.", title: "Roof Replacement — 3,200 sqft", media: { type: "video", src: "/videos/roof-replacement.mp4" }, avatar: AVATAR_DAVE, orientation: "portrait" },
  { crewLead: "Lyth Construction", title: "Custom Garage Build — Canby", media: { type: "image", src: img("photo-1558036117-15d82a90b9b1") }, avatar: AVATAR_LYTH, orientation: "landscape" },
  { crewLead: "Carlos M.", title: "Exterior Siding Replacement — Salem", media: { type: "video", src: VIDEO_CONSTRUCTION_2, poster: img("photo-1572120360610-d971b9d7767c") }, avatar: AVATAR_CARLOS, orientation: "portrait" },
  { crewLead: "Mike R.", title: "Open-Concept Living Room — Sherwood", media: { type: "image", src: img("photo-1600210492486-724fe5c67fb0") }, avatar: AVATAR_MIKE, orientation: "landscape" },
  { crewLead: "Dave T.", title: "Front Porch Rebuild — Eugene", media: { type: "image", src: img("photo-1570129477492-45c003edd2be") }, avatar: AVATAR_DAVE, orientation: "portrait" },
  { crewLead: "Lyth Construction", title: "Master Suite Addition — Bend", media: { type: "image", src: img("photo-1505691938895-1758d7feb511") }, avatar: AVATAR_LYTH, orientation: "landscape" },
  { crewLead: "Carlos M.", title: "Dry Rot Repair — Lincoln City", media: { type: "image", src: img("photo-1581094288338-2314dddb7ece") }, avatar: AVATAR_CARLOS, orientation: "portrait" },
  { crewLead: "Mike R.", title: "Modern Farmhouse Remodel — Dallas", media: { type: "image", src: img("photo-1600566753190-17f0baa2a6c3") }, avatar: AVATAR_MIKE, orientation: "landscape" },
  { crewLead: "Dave T.", title: "Window & Trim Replacement — Salem", media: { type: "image", src: img("photo-1600573472550-8090b5e0745e") }, avatar: AVATAR_DAVE, orientation: "portrait" },
  { crewLead: "Lyth Construction", title: "Custom Pergola & Patio Cover", media: { type: "video", src: VIDEO_CONSTRUCTION_3, poster: img("photo-1600607687939-ce8a6c25118c") }, avatar: AVATAR_LYTH, orientation: "landscape" },
  { crewLead: "Carlos M.", title: "Garage Conversion to ADU — Salem", media: { type: "image", src: img("photo-1600585154526-990dced4db0d") }, avatar: AVATAR_CARLOS, orientation: "portrait" },
  { crewLead: "Mike R.", title: "Cabinet & Trim Carpentry — Keizer", media: { type: "image", src: img("photo-1556228453-efd6c1ff04f6") }, avatar: AVATAR_MIKE, orientation: "portrait" },
  { crewLead: "Dave T.", title: "Roof Tear-Off & Replacement — Portland", media: { type: "image", src: img("photo-1632759145355-8b8f3ab1c4c5") }, avatar: AVATAR_DAVE, orientation: "landscape" },
  { crewLead: "Lyth Construction", title: "Two-Story Addition — Tualatin", media: { type: "image", src: img("photo-1564013799919-ab600027ffc6") }, avatar: AVATAR_LYTH, orientation: "portrait" },
  { crewLead: "Carlos M.", title: "Retaining Wall & Drainage — South Salem", media: { type: "image", src: img("photo-1597047084897-51e81819a499") }, avatar: AVATAR_CARLOS, orientation: "landscape" },
  { crewLead: "Mike R.", title: "Hardwood Floor Install — Wilsonville", media: { type: "image", src: img("photo-1493663284031-b7e3aefcae8e") }, avatar: AVATAR_MIKE, orientation: "landscape" },
  { crewLead: "Dave T.", title: "Stucco & Exterior Repair — McMinnville", media: { type: "image", src: img("photo-1568605114967-8130f3a36994") }, avatar: AVATAR_DAVE, orientation: "portrait" },
  { crewLead: "Lyth Construction", title: "Whole-Home Repaint — Salem Heights", media: { type: "image", src: img("photo-1562182384-08115de5ee97") }, avatar: AVATAR_LYTH, orientation: "portrait" },
];

const ProjectGallery = () => {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section className="bg-brand-ink py-16 md:py-24">
      <div className="container">
        <h2 className="text-center font-serif text-3xl font-bold tracking-tight text-brand-cream md:text-4xl lg:text-5xl">
          Recent Projects
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-brand-cream/70">
          Tap any photo or video to view it full size.
        </p>

        <div className="mx-auto mt-12 max-w-7xl">
          <div className="gap-4 [column-gap:1rem] columns-1 sm:columns-2 lg:columns-3 xl:columns-4">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                onClick={() => setActive(project)}
              />
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-5xl border-none bg-brand-ink/95 p-0 sm:rounded-2xl">
          {active && (
            <>
              <DialogTitle className="sr-only">{active.title}</DialogTitle>
              <DialogDescription className="sr-only">
                Project by {active.crewLead}
              </DialogDescription>
              <div className="relative">
                {active.media.type === "video" ? (
                  <video
                    src={active.media.src}
                    poster={active.media.poster}
                    controls
                    autoPlay
                    playsInline
                    className="block max-h-[85vh] w-full rounded-2xl bg-black object-contain"
                  />
                ) : (
                  <img
                    src={active.media.src}
                    alt={active.title}
                    className="block max-h-[85vh] w-full rounded-2xl object-contain"
                  />
                )}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 rounded-b-2xl bg-gradient-to-t from-black/80 to-transparent p-6 pt-16">
                  <div className="flex items-center gap-2">
                    <img
                      src={active.avatar}
                      alt=""
                      aria-hidden="true"
                      className="h-8 w-8 rounded-full border border-white/90 object-cover"
                    />
                    <span className="text-sm font-semibold text-white">{active.crewLead}</span>
                  </div>
                  <h3 className="mt-2 font-serif text-xl font-medium leading-tight text-white md:text-2xl">
                    {active.title}
                  </h3>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectGallery;
