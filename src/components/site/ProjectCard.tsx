import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export type ProjectMedia =
  | { type: "image"; src: string }
  | { type: "video"; src: string; poster?: string };

export interface Project {
  crewLead: string;
  title: string;
  media: ProjectMedia;
  avatar: string;
  orientation: "landscape" | "portrait";
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick?: () => void;
}

const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
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

  const ratio = project.orientation === "landscape" ? 16 / 9 : 9 / 16;
  const isVideo = project.media.type === "video";

  return (
    <div
      ref={ref}
      className="mb-4 break-inside-avoid"
      style={{ transitionDelay: `${(index % 4) * 60}ms` }}
    >
      <button
        type="button"
        onClick={onClick}
        aria-label={`View ${project.title} ${isVideo ? "video" : "full size"}`}
        className={`group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl text-left shadow-lg transition-all duration-500 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-burgundy focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink ${
          visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
      >
        <AspectRatio ratio={ratio}>
          {project.media.type === "video" ? (
            <video
              src={project.media.src}
              poster={project.media.poster}
              muted
              loop
              autoPlay
              playsInline
              preload="metadata"
              className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          ) : (
            <img
              src={project.media.src}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          )}
        </AspectRatio>

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

        {/* Video badge */}
        {isVideo && (
          <div className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            <Play className="h-3 w-3 fill-current" />
            <span>Video</span>
          </div>
        )}
      </button>
    </div>
  );
};

export default ProjectCard;
