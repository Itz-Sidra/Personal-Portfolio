import { TbDownload, TbExternalLink } from "react-icons/tb";
import { personal } from "../data/portfolio";
import SectionLabel from "../components/SectionLabel";
import Reveal from "../components/Reveal";

export default function Resume() {
  return (
    <section id="resume" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionLabel index="07" text="Resume" />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
          <Reveal>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-tight mb-6">
              The full picture, in one PDF.
            </h2>
            <p className="text-ink-soft leading-relaxed mb-8">
              Every project, patent and internship on this site, laid out resume-style —
              current as of this build.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-paper rounded-full font-medium text-sm hover:bg-rust transition-colors"
              >
                <TbExternalLink className="w-4 h-4" /> View Resume
              </a>
              <a
                href={personal.resume}
                download
                className="inline-flex items-center gap-2 px-6 py-3 border border-ink/20 rounded-full font-medium text-sm text-ink hover:border-rust hover:text-rust transition-colors"
              >
                <TbDownload className="w-4 h-4" /> Download
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="tick-corners card-surface rounded-2xl p-3 shadow-lift">
              <object
                data={`${personal.resume}#toolbar=0`}
                type="application/pdf"
                className="w-full h-[520px] rounded-xl"
                aria-label="Sidra Jahangir resume preview"
              >
                <div className="w-full h-[520px] rounded-xl bg-paper-alt flex items-center justify-center text-sm text-ink-soft px-6 text-center">
                  Preview isn't supported in this browser —{" "}
                  <a href={personal.resume} className="text-rust underline ml-1">
                    open the PDF directly
                  </a>
                  .
                </div>
              </object>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
