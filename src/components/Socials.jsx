import { motion } from "framer-motion";
import { SiGithub, SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { TbMail } from "react-icons/tb";
import { personal } from "../data/portfolio";

const items = [
  { label: "GitHub", href: personal.github, Icon: SiGithub },
  { label: "LinkedIn", href: personal.linkedin, Icon: FaLinkedin },
  { label: "LeetCode", href: personal.leetcode, Icon: SiLeetcode },
  { label: "GeeksforGeeks", href: personal.geeksforgeeks, Icon: SiGeeksforgeeks },
  { label: "Email", href: `mailto:${personal.email}`, Icon: TbMail },
];

export default function Socials({ size = "w-10 h-10" }) {
  return (
    <div className="flex items-center gap-3">
      {items.map(({ label, href, Icon }) => (
        <motion.a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          aria-label={label}
          whileHover={{ y: -3, rotate: -4 }}
          transition={{ duration: 0.15 }}
          className={`${size} flex items-center justify-center rounded-full border border-line bg-card text-ink-soft hover:text-rust hover:border-rust/50 transition-colors`}
        >
          <Icon className="w-4 h-4" />
        </motion.a>
      ))}
    </div>
  );
}
