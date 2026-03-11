import { experience } from "../data/portfolio";
import { SectionLabel } from "./About";

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-neutral-100/50 dark:bg-neutral-950/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel text="Experience" />
        <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-16">
          Where I've worked
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#5b7cf6] via-[#5b7cf6]/30 to-transparent ml-4 hidden sm:block" />

          <div className="space-y-10">
            {experience.map((job) => (
              <div key={job.role} className="sm:pl-16 relative">
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-0 top-1 w-9 h-9 rounded-full border-2 border-[#5b7cf6] bg-white dark:bg-[#0a0a0f] items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#5b7cf6]" />
                </div>

                <div className="card-hover bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                        {job.role}
                      </h3>
                      <p className="text-[#5b7cf6] font-medium mt-0.5">{job.company}</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="font-mono-custom text-xs text-neutral-400 tracking-wider">
                        {job.period}
                      </p>
                      <p className="font-mono-custom text-xs text-neutral-400 mt-0.5">
                        {job.location}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {job.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-neutral-500 dark:text-neutral-400">
                        <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#5b7cf6]" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
