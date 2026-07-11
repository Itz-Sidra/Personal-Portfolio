import { motion } from "framer-motion";
import { iconMap } from "./iconMap";

const accentText = {
  forest: "text-forest",
  rust: "text-rust",
  clay: "text-clay",
  gold: "text-gold",
};

const accentBorder = {
  forest: "hover:border-forest/50",
  rust: "hover:border-rust/50",
  clay: "hover:border-clay/50",
  gold: "hover:border-gold/50",
};

export default function SkillBadge({ name, icon, accent = "forest" }) {
  const Icon = iconMap[icon];
  return (
    <motion.span
      whileHover={{ y: -2 }}
      transition={{ duration: 0.15 }}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-line bg-card text-sm text-ink-soft ${accentBorder[accent]} transition-colors`}
    >
      {Icon && <Icon className={`w-3.5 h-3.5 ${accentText[accent]}`} />}
      {name}
    </motion.span>
  );
}
