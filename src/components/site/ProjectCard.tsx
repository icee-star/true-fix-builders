import { useEffect, useRef, useState } from "react";

export interface Project {
  crewLead: string;
  title: string;
  image: string;
  avatar: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="mb-4 break-inside-avoid"
      style={{ transitionDelay: `${(index % 4) * 60}ms` }}
    >
      <div
        className={`group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="block h-auto w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>

        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/60 to-transparent" />

        {/* Top-left content */}
        <div className="absolute left-4 right-4 top-4">
          <div className="flex items-center gap-2">
            <img
              src={project.avatar}
              alt=""
              aria-hidden="true"
              className="h-8 w-8 rounded-full border border-white/90 object-cover"
            />
            <span className="text-sm font-semibold text-white [text-shadow:0_1px_2px_rgb(0_0_0_/_0.6)]">
              {project.crewLead}
            </span>
          </div>
          <h3 className="mt-2 font-serif text-lg font-medium leading-tight text-white [text-shadow:0_1px_3px_rgb(0_0_0_/_0.7)] md:text-xl">
            {project.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
