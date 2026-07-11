import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { TbArrowUpRight } from "react-icons/tb";
import { projects } from "../data/portfolio";
import SectionLabel from "../components/SectionLabel";
import Reveal from "../components/Reveal";

const accentBar = {
  forest: "bg-forest",
  rust: "bg-rust",
  clay: "bg-clay",
  gold: "bg-gold",
};
const accentText = {
  forest: "text-forest",
  rust: "text-rust",
  clay: "text-clay",
  gold: "text-gold",
};

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="card-surface rounded-2xl overflow-hidden shadow-soft h-full flex flex-col"
    >
      <div className={`h-1.5 ${accentBar[project.accent]}`} />
      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            {project.badge && (
              <span
                className={`inline-block font-mono text-[11px] tracking-wider px-2 py-0.5 rounded-full border border-line mb-3 ${accentText[project.accent]}`}
              >
                {project.badge}
              </span>
            )}
            <h3 className="text-xl font-semibold text-ink">{project.title}</h3>
            <p className="font-mono text-xs text-ink-soft mt-1">{project.subtitle}</p>
          </div>
          <span className="font-mono text-[11px] text-ink-soft/70 shrink-0">{project.period}</span>
        </div>

        <p className="text-sm text-ink-soft leading-relaxed mb-5">{project.description}</p>

        <ul className="space-y-1.5 mb-6">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-ink-soft">
              <span className={`shrink-0 mt-1.5 w-1 h-1 rounded-full ${accentBar[project.accent]}`} />
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-0.5 font-mono text-[11px] rounded bg-paper-alt text-ink-soft">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-line">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-ink-soft hover:text-ink transition-colors"
          >
            <SiGithub className="w-3.5 h-3.5" /> GitHub
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider ${accentText[project.accent]} hover:underline`}
            >
              Live Demo <TbArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-paper-alt">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionLabel index="04" text="Selected Projects" />
        </Reveal>
        <Reveal>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl mb-14">
            Things I've built
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
