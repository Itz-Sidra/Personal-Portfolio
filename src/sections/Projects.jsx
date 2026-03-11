import { projects } from "../data/portfolio";
import { SectionLabel } from "./About";

export default function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel text="Featured Projects" />
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">Things I've built</h2>
          <a
            href="https://github.com/Itz-Sidra"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-custom text-xs tracking-wider text-[#5b7cf6] hover:underline flex items-center gap-1 shrink-0"
          >
            All repositories
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} featured={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, featured }) {
  return (
    <div
      className={`card-hover group relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden ${
        featured ? "lg:col-span-1" : ""
      }`}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5b7cf6] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            {project.badge && (
              <span className="inline-block font-mono-custom text-xs tracking-wider px-2 py-0.5 rounded-full bg-[#5b7cf6]/10 text-[#5b7cf6] border border-[#5b7cf6]/20 mb-3">
                {project.badge}
              </span>
            )}
            <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
              {project.title}
            </h3>
            <p className="font-mono-custom text-xs text-neutral-400 dark:text-neutral-500 mt-0.5">
              {project.subtitle}
            </p>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 ml-4 w-9 h-9 flex items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-700 hover:border-[#5b7cf6] text-neutral-400 hover:text-[#5b7cf6] transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>

        <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-1.5 mb-6">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-neutral-500 dark:text-neutral-400">
              <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#5b7cf6]" />
              {h}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 font-mono-custom text-xs rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
