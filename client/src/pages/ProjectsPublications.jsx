import { useRef } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "../components/BrandIcons";
import { getIcon, accentMap } from "../utils/icons";
import DecoDots from "../components/DecoDots";

function ProjectSlide({ project }) {
  const Icon = getIcon(project.iconKey);
  const accent = accentMap[project.accentColor] || accentMap.purple;

  return (
    <div className="w-[280px] shrink-0 snap-start sm:w-[320px]">
      <div
        className={`flex h-56 items-center justify-center overflow-hidden rounded-md border border-line ${accent.chipBg}`}
      >
        {project.image ? (
          <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
        ) : (
          <span className={`flex h-16 w-16 items-center justify-center rounded-xl ${accent.solid} text-white`}>
            <Icon size={28} />
          </span>
        )}
      </div>

      <h3 className="mt-4 text-[15px] font-bold text-ink underline decoration-2 underline-offset-4">
        {project.title}
      </h3>
      <p className="mt-2 text-[13.5px] leading-relaxed text-gray-600">{project.description}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags?.map((tag) => (
          <span key={tag} className="rounded-full border border-line px-2.5 py-1 text-[11.5px] text-gray-600">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-3">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-ink">
            <GithubIcon size={16} />
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-ink">
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProjectsPublications({ projects, loading }) {
  const trackRef = useRef(null);

  const scrollBy = (dir) => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section id="projects" className="relative scroll-mt-24 border-t border-line">
      <DecoDots dots={[{ size: 12, top: "6%", left: "8%" }]} />
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <h1 className="font-display text-center text-3xl font-bold text-ink sm:text-4xl">Portfolio</h1>
        <p className="mt-3 text-center text-[15px] text-gray-500">
          A collection of my development, testing, and data analysis projects.
        </p>

        <div className="relative mt-14">
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Previous"
            className="absolute -left-4 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-paper text-ink shadow-sm sm:flex"
          >
            <ChevronLeft size={18} />
          </button>

          {loading ? (
            <div className="flex gap-6 overflow-hidden">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-80 w-[280px] shrink-0 animate-pulse rounded-md bg-gray-100 sm:w-[320px]" />
              ))}
            </div>
          ) : projects.length === 0 ? (
            <p className="text-center text-[14px] text-gray-400">No projects to show yet.</p>
          ) : (
            <div
              ref={trackRef}
              className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {projects.map((project) => (
                <ProjectSlide key={project._id || project.title} project={project} />
              ))}
            </div>
          )}

          <button
            onClick={() => scrollBy(1)}
            aria-label="Next"
            className="absolute -right-4 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-paper text-ink shadow-sm sm:flex"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
