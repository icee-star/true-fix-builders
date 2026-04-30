import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import ProjectCard, { type Project } from "./ProjectCard";

const projects: Project[] = [
  { title: "Windows · Paint · Doors", media: { type: "video", src: "/videos/west-salem-kitchen.mp4" }, orientation: "portrait" },
  { title: "Windows · Paint · Doors", media: { type: "video", src: "/videos/bathroom-renovation.mp4" }, orientation: "portrait" },
  { title: "Exterior Remodel · Siding · Fascia · Metal Roofing", media: { type: "image", src: "/images/commercial-tenant-buildout.webp" }, orientation: "landscape" },
  { title: "New Siding · Paper · Fresh Caulking", media: { type: "image", src: "/images/new-build-framing-turner.webp" }, orientation: "landscape" },
  { title: "New Paint", media: { type: "image", src: "/images/deck-outdoor-living.webp" }, orientation: "landscape" },
  { title: "New Deck · Flooring · Steps", media: { type: "image", src: "/images/basement-finish-south-salem.webp" }, orientation: "landscape" },
  { title: "Windows · Paint · Doors", media: { type: "video", src: "/videos/roof-replacement.mp4" }, orientation: "portrait" },
  { title: "Exterior Remodel · Siding", media: { type: "video", src: "/videos/custom-garage-build-canby.mov" }, orientation: "portrait" },
  { title: "New Patio · Roof · Deck · Additional Room", media: { type: "video", src: "/videos/exterior-siding-salem.mov" }, orientation: "portrait" },
  { title: "Exterior Remodel", media: { type: "image", src: "/images/open-concept-living-sherwood.webp" }, orientation: "portrait" },
  { title: "Project 11", media: { type: "image", src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80" }, orientation: "portrait" },
  { title: "New Patio", media: { type: "image", src: "/images/master-suite-addition-bend.webp" }, orientation: "landscape" },
  { title: "Exterior Remodel", media: { type: "video", src: "/videos/dry-rot-repair-lincoln-city.mov" }, orientation: "portrait" },
  { title: "Exterior Remodel · Siding", media: { type: "image", src: "/images/project-kitchen.webp" }, orientation: "landscape" },
  { title: "Siding · Roofing", media: { type: "image", src: "/images/project-modern-living.webp" }, orientation: "portrait" },
  { title: "Project 16", media: { type: "video", src: "/videos/custom-pergola-patio-cover.mp4" }, orientation: "landscape" },
  { title: "Project 17", media: { type: "video", src: "/videos/garage-conversion-adu-salem.mov" }, orientation: "portrait" },
  { title: "New Deck · New Patio", media: { type: "video", src: "/videos/cabinet-trim-carpentry-keizer.mov" }, orientation: "portrait" },
  { title: "Vinyl Siding · Board & Batten · Tando Stone", media: { type: "image", src: "/images/roof-tear-off-replacement-portland.webp" }, orientation: "landscape" },
  { title: "New Chimney · Fresh Paint", media: { type: "image", src: "/images/project-modern-exterior.webp" }, orientation: "portrait" },
  { title: "New Paint", media: { type: "image", src: "/images/retaining-wall-south-salem.webp" }, orientation: "landscape" },
  { title: "Vinyl Siding · Board & Batten · Tando Stone", media: { type: "image", src: "/images/hardwood-floor-install.webp" }, orientation: "landscape" },
  { title: "New Patio", media: { type: "image", src: "/images/stucco-exterior-repair-mcminnville.webp" }, orientation: "portrait" },
  { title: "New Siding", media: { type: "video", src: "/videos/whole-home-repaint-salem-heights.mov" }, orientation: "portrait" },
];

const ProjectGallery = () => {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section className="bg-brand-ink py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mt-4 max-w-7xl">
          <div className="gap-4 [column-gap:1rem] columns-1 sm:columns-2 lg:columns-3 xl:columns-4">
            {projects.map((project, i) => (
              <ProjectCard
                key={i}
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
              <DialogDescription className="sr-only">{active.title}</DialogDescription>
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
                  <h3 className="font-serif text-xl font-medium leading-tight text-white md:text-2xl">
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
