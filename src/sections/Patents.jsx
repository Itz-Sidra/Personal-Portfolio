import { motion } from "framer-motion";
import { TbCertificate, TbFileText } from "react-icons/tb";
import { patents, publications } from "../data/portfolio";
import SectionLabel from "../components/SectionLabel";
import Reveal from "../components/Reveal";

export default function Patents() {
  return (
    <section id="patents" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionLabel index="05" text="Patents & Research" />
        </Reveal>
        <Reveal>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl mb-14">
            Filed & published work
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {patents.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="tick-corners card-surface rounded-2xl p-8 shadow-soft h-full"
              >
                <div className="flex items-center gap-2 mb-4">
                  <TbCertificate className="w-4 h-4 text-gold" />
                  <span className="font-mono text-[11px] uppercase tracking-wider text-gold">
                    Patent Filed
                  </span>
                </div>
                <h3 className="text-base font-semibold text-ink leading-snug mb-3">{p.title}</h3>
                <p className="text-sm text-ink-soft mb-4">
                  {p.jurisdiction} — {p.appNumber}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 font-mono text-[11px] rounded bg-paper-alt text-ink-soft">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {publications.map((pub) => (
          <Reveal key={pub.title}>
            <div className="card-surface rounded-2xl p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <TbFileText className="w-4 h-4 text-forest shrink-0" />
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-forest block mb-1">
                    Publication
                  </span>
                  <h3 className="text-base font-semibold text-ink">{pub.title}</h3>
                </div>
              </div>
              <span className="font-mono text-xs text-ink-soft tracking-wider shrink-0">{pub.status}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
