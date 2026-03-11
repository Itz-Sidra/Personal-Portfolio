import { about, personal, certifications } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <SectionLabel text="About Me" />
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 mt-4">
              Engineer who builds{" "}
              <span className="font-serif italic text-[#5b7cf6]">intelligent</span>{" "}
              systems
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed text-base mb-8">
              {about}
            </p>
            <div className="flex flex-wrap gap-3">
              {certifications.map((c) => (
                <div
                  key={c.name}
                  className="px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50"
                >
                  <span className="font-mono-custom text-xs text-neutral-500 dark:text-neutral-400">
                    {c.issuer} — {c.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: card */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-[#5b7cf6]/10 to-[#4ecdc4]/5 blur-xl" />
            <div className="relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "University", value: "VIT Pune" },
                  { label: "Degree", value: "B.Tech CS (AI/ML)" },
                  { label: "CGPA", value: "9.54 / 10.0" },
                  { label: "Location", value: "Pune, India" },
                  { label: "GitHub", value: "Itz-Sidra" },
                  { label: "Status", value: "Open to Work" },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p className="font-mono-custom text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-1">
                      {label}
                    </p>
                    <p className="font-medium text-sm text-neutral-900 dark:text-neutral-100">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="divider mt-8 mb-6" />
              <div>
                <p className="font-mono-custom text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-3">
                  Contact
                </p>
                <a
                  href={`mailto:${personal.email}`}
                  className="font-mono-custom text-sm text-[#5b7cf6] hover:underline"
                >
                  {personal.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-6 h-px bg-[#5b7cf6]" />
      <span className="font-mono-custom text-xs tracking-widest uppercase text-[#5b7cf6]">
        {text}
      </span>
    </div>
  );
}
