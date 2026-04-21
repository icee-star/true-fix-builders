import ProjectCard, { type Project } from "./ProjectCard";

const projects: Project[] = [
  {
    crewLead: "Mike R.",
    title: "West Salem Kitchen Remodel",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
  },
  {
    crewLead: "Lyth Construction",
    title: "Full Bathroom Renovation — Keizer",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=900&q=80",
    avatar:
      "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&w=120&q=80",
  },
  {
    crewLead: "Dave T.",
    title: "Commercial Tenant Buildout — Downtown Salem",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
  },
  {
    crewLead: "Mike R.",
    title: "New Build Framing — Turner",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
  },
  {
    crewLead: "Lyth Construction",
    title: "Deck & Outdoor Living Space",
    image:
      "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?auto=format&fit=crop&w=900&q=80",
    avatar:
      "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&w=120&q=80",
  },
  {
    crewLead: "Carlos M.",
    title: "Basement Finish — South Salem",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    avatar:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=120&q=80",
  },
  {
    crewLead: "Dave T.",
    title: "Roof Replacement — 3,200 sqft",
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=900&q=80",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
  },
  {
    crewLead: "Lyth Construction",
    title: "Custom Garage Build — Canby",
    image:
      "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=900&q=80",
    avatar:
      "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&w=120&q=80",
  },
];

const ProjectGallery = () => {
  return (
    <section className="bg-brand-ink py-16 md:py-24">
      <div className="container">
        <h2 className="text-center font-serif text-3xl font-bold tracking-tight text-brand-cream md:text-4xl lg:text-5xl">
          Recent Projects
        </h2>

        <div className="mx-auto mt-12 max-w-7xl">
          <div className="gap-4 [column-gap:1rem] columns-1 sm:columns-2 lg:columns-3 xl:columns-4">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
