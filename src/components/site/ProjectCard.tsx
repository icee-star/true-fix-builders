import { useEffect, useRef } from "react";
import { Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export type ProjectMedia =
  | { type: "image"; src: string }
  | { type: "video"; src: string; poster?: string };

export interface Project {
  title: string;
  media: ProjectMedia;
  orientation: "landscape" | "portrait";
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick?: () => void;
}

const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
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
      className="mb-4 break-inside-avoid animate-fade-in-up"
      style={{ animationDelay: `${(index % 8) * 50}ms` }}
    >
      <button
        type="button"
        onClick={onClick}
        aria-label={`View ${project.title} ${isVideo ? "video" : "full size"}`}
        className="group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl text-left shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-burgundy focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink"
      >
        <AspectRatio ratio={ratio}>
          {isVideo ? (
            <video
              ref={videoRef}
              src={project.media.src}
              poster={project.media.type === "video" ? project.media.poster : undefined}
              muted
              loop
              playsInline
              preload="none"
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
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />

        {/* Title */}
        <div className="absolute bottom-3 left-4 right-4">
          <h3 className="font-serif text-base font-medium leading-tight text-white [text-shadow:0_1px_3px_rgb(0_0_0_/_0.7)] md:text-lg">
            {project.title}
          </h3>
        </div>

        {/* Video badge */}
        {isVideo && (
          <div className="pointer-events-none absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            <Play className="h-3 w-3 fill-current" />
            <span>Video</span>
          </div>
        )}
      </button>
    </div>
  );
};

export default ProjectCard;
