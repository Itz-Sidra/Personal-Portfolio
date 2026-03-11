import { achievements } from "../data/portfolio";
import { SectionLabel } from "./About";

const icons = {
  "Hackathon Winner": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
      <path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
    </svg>
  ),
  "Startup Runner-Up": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
    </svg>
  ),
  "Open Source Contributor": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/>
      <path d="M13 6h3a2 2 0 0 1 2 2v7"/><path d="M11 18H8a2 2 0 0 1-2-2V9"/>
    </svg>
  ),
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel text="Achievements" />
        <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-16">
          Recognition & impact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="card-hover group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 relative overflow-hidden"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#5b7cf6]/0 to-[#4ecdc4]/0 group-hover:from-[#5b7cf6]/5 group-hover:to-[#4ecdc4]/5 transition-all duration-500 rounded-2xl" />

              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-[#5b7cf6]/10 flex items-center justify-center text-[#5b7cf6] mb-6">
                  {icons[item.title]}
                </div>
                <h3 className="font-bold text-lg text-neutral-900 dark:text-neutral-100 mb-1">
                  {item.title}
                </h3>
                <p className="font-medium text-[#5b7cf6] text-sm mb-1">{item.event}</p>
                <p className="font-mono-custom text-xs text-neutral-400 mb-4">{item.org}</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
