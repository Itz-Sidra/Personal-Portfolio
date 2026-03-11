import { stats, personal } from "../data/portfolio";
import { SectionLabel } from "./About";

const statItems = [
  {
    value: stats.github.contributions,
    label: "GitHub Contributions",
    sub: "across all repositories",
    color: "#5b7cf6",
  },
  {
    value: stats.github.repos,
    label: "Public Repositories",
    sub: "projects and experiments",
    color: "#4ecdc4",
  },
  {
    value: stats.leetcode.solved,
    label: "LeetCode Problems",
    sub: stats.leetcode.focus,
    color: "#e8845a",
  },
  {
    value: stats.opensource.prs,
    label: "Pull Requests",
    sub: `${stats.opensource.merged} merged contributions`,
    color: "#a78bfa",
  },
];

export default function Stats() {
  return (
    <section className="py-28 bg-neutral-100/50 dark:bg-neutral-950/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel text="By the Numbers" />
        <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-16">
          Coding activity
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statItems.map((item) => (
            <div
              key={item.label}
              className="card-hover bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 text-center"
            >
              <p
                className="text-4xl sm:text-5xl font-bold mb-2"
                style={{ color: item.color }}
              >
                {item.value}
              </p>
              <p className="font-medium text-sm text-neutral-900 dark:text-neutral-100 mb-1">
                {item.label}
              </p>
              <p className="font-mono-custom text-xs text-neutral-400">{item.sub}</p>
            </div>
          ))}
        </div>

        {/* Links row */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {[
            { label: "GitHub Profile", href: personal.github },
            { label: "LeetCode Profile", href: personal.leetcode },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono-custom text-xs tracking-wider text-neutral-400 hover:text-[#5b7cf6] transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
              </svg>
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
