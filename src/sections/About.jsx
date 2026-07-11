import { about, personal } from "../data/portfolio";
import SectionLabel from "../components/SectionLabel";
import Reveal from "../components/Reveal";

export default function About() {
  return (
    <section id="about" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionLabel index="01" text="About" />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start mt-4">
          <div>
            <Reveal>
              <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-tight mb-6">
                From machine learning models to polished user experiences.
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-ink-soft leading-relaxed mb-8">{about.summary}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-wrap gap-2.5">
                {about.interests.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full border border-line bg-card text-sm text-ink-soft"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="tick-corners card-surface rounded-2xl p-8 shadow-soft">
              <div className="flex items-center gap-4 mb-8">
                <img
                  src={personal.portrait}
                  alt={personal.name}
                  className="w-16 h-16 rounded-full object-cover border border-line"
                />
                <div>
                  <p className="font-display font-semibold text-ink">{personal.name}</p>
                  <p className="font-mono text-xs text-ink-soft tracking-wide">{personal.roleLine}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {about.facts.map(({ label, value }) => (
                  <div key={label}>
                    <p className="font-mono text-[11px] text-ink-soft/70 uppercase tracking-wider mb-1">
                      {label}
                    </p>
                    <p className="font-medium text-sm text-ink">{value}</p>
                  </div>
                ))}
              </div>

              <div className="h-px bg-line my-6" />

              <a
                href={`mailto:${personal.email}`}
                className="font-mono text-sm text-rust hover:underline"
              >
                {personal.email}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
