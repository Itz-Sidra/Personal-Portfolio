import { motion } from "framer-motion";
import { experience } from "../data/portfolio";
import SectionLabel from "../components/SectionLabel";
import Reveal from "../components/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionLabel index="03" text="Experience" />
        </Reveal>
        <Reveal>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl mb-14">
            Where I've worked
          </h2>
        </Reveal>

        <div className="relative">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-line hidden sm:block" />

          <div className="space-y-8">
            {experience.map((job, i) => (
              <Reveal key={job.role} delay={i * 0.06} className="sm:pl-12 relative">
                <div className="hidden sm:flex absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-rust" />

                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="card-surface rounded-2xl p-8 shadow-soft"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-paper-alt border border-line flex items-center justify-center font-mono text-xs text-ink-soft shrink-0">
                        {job.company
                          .split(" ")
                          .slice(0, 2)
                          .map((w) => w[0])
                          .join("")}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-ink">{job.role}</h3>
                        <p className="text-rust text-sm mt-0.5">{job.company}</p>
                      </div>
                    </div>
                    <div className="shrink-0 sm:text-right">
                      <p className="font-mono text-xs text-ink-soft tracking-wider">{job.period}</p>
                      <p className="font-mono text-xs text-ink-soft/70 mt-0.5">{job.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {job.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-ink-soft leading-relaxed">
                        <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full bg-rust" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 font-mono text-[11px] rounded bg-paper-alt text-ink-soft"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
