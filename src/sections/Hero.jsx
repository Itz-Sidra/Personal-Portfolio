import { motion } from "framer-motion";
import { personal } from "../data/portfolio";
import NodeField from "../components/NodeField";
import Socials from "../components/Socials";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <NodeField className="absolute inset-0 opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-paper/10 to-paper pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-6xl mx-auto px-6 w-full pt-24"
      >
        <motion.div variants={item} className="flex items-center gap-2 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-forest" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display font-semibold text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tightest text-ink max-w-3xl"
        >
          Sidra Jahangir
          <br />
          <span className="text-rust">Software Developer</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-ink-soft text-base sm:text-lg leading-relaxed"
        >
          {personal.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-paper rounded-full font-medium text-sm hover:bg-rust transition-colors"
          >
            View Projects
          </a>
          <a
            href={personal.resume}
            download
            className="inline-flex items-center gap-2 px-6 py-3 border border-ink/20 rounded-full font-medium text-sm text-ink hover:border-rust hover:text-rust transition-colors"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-14">
          <Socials />
        </motion.div>
      </motion.div>
    </section>
  );
}
