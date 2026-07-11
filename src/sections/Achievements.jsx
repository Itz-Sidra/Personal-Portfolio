import { motion } from "framer-motion";
import {
  TbTrophy, TbRocket, TbTargetArrow, TbCertificate, TbGitPullRequest, TbSchool,
} from "react-icons/tb";
import { achievements, stats } from "../data/portfolio";
import SectionLabel from "../components/SectionLabel";
import Reveal from "../components/Reveal";

const iconByKind = {
  hackathon: TbTrophy,
  startup: TbRocket,
  competition: TbTargetArrow,
  patent: TbCertificate,
  opensource: TbGitPullRequest,
  certification: TbSchool,
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 bg-paper-alt">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionLabel index="06" text="Achievements" />
        </Reveal>
        <Reveal>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl mb-14">
            Recognition & impact
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {achievements.map((item, i) => {
            const Icon = iconByKind[item.kind] || TbTrophy;
            return (
              <Reveal key={item.title} delay={(i % 3) * 0.05}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="card-surface rounded-2xl p-8 h-full"
                >
                  <div className="w-10 h-10 rounded-xl bg-rust/10 flex items-center justify-center text-rust mb-6">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-lg text-ink mb-1">{item.title}</h3>
                  <p className="text-sm text-rust mb-1">{item.event}</p>
                  <p className="font-mono text-[11px] text-ink-soft/70 mb-4">{item.org}</p>
                  <p className="text-sm text-ink-soft leading-relaxed">{item.detail}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: stats.github.contributions, label: "GitHub Contributions" },
              { value: stats.github.repos, label: "Public Repositories" },
              { value: stats.leetcode.solved, label: "LeetCode Problems" },
              { value: stats.opensource.prs, label: `${stats.opensource.merged} PRs Merged` },
            ].map((s) => (
              <div key={s.label} className="card-surface rounded-2xl p-6 text-center">
                <p className="font-display font-semibold text-3xl sm:text-4xl text-rust mb-1">{s.value}</p>
                <p className="font-mono text-[11px] uppercase tracking-wider text-ink-soft">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
