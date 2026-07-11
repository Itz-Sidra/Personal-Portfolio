import { skillGroups } from "../data/portfolio";
import SectionLabel from "../components/SectionLabel";
import SkillBadge from "../components/SkillBadge";
import Reveal from "../components/Reveal";

const dotAccent = {
  forest: "bg-forest",
  rust: "bg-rust",
  clay: "bg-clay",
  gold: "bg-gold",
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-paper-alt">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionLabel index="02" text="Technical Skills" />
        </Reveal>
        <Reveal>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl mb-14">
            What I build with
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={(i % 2) * 0.05}>
              <div className="card-surface rounded-2xl p-6 h-full">
                <div className="flex items-center gap-2 mb-5">
                  <span className={`w-2 h-2 rounded-full ${dotAccent[group.accent]}`} />
                  <h3 className="font-mono text-xs uppercase tracking-widest text-ink-soft">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <SkillBadge key={skill.name} {...skill} accent={group.accent} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
