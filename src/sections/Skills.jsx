import { skills } from "../data/portfolio";
import { SectionLabel } from "./About";

const categoryColors = {
  Languages: "#5b7cf6",
  Backend: "#4ecdc4",
  Frontend: "#e8845a",
  Databases: "#a78bfa",
  "AI / ML": "#34d399",
  Tools: "#f59e0b",
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-neutral-100/50 dark:bg-neutral-950/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel text="Technical Skills" />
        <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-16">
          What I work with
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => {
            const color = categoryColors[category] || "#5b7cf6";
            return (
              <div
                key={category}
                className="card-hover bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                  <h3 className="font-mono-custom text-xs tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
                    {category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="skill-tag px-2.5 py-1 rounded-md text-sm font-medium border"
                      style={{
                        backgroundColor: color + "12",
                        borderColor: color + "30",
                        color: color,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
