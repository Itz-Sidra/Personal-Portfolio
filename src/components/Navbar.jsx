import { useEffect, useState } from "react";
import { personal } from "../data/portfolio";

const links = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Patents", "patents"],
  ["Achievements", "achievements"],
  ["Resume", "resume"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-paper/85 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#hero" className="font-display font-semibold text-sm tracking-tight text-ink">
          Sidra<span className="text-rust">.</span>
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {links.map(([label, id]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="underline-hover font-mono text-[11px] uppercase tracking-widest text-ink-soft hover:text-ink transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href={`${personal.resume}`}
            download
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ink/15 text-xs font-mono uppercase tracking-widest text-ink hover:border-rust hover:text-rust transition-colors"
          >
            Resume
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px bg-ink transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block w-5 h-px bg-ink transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-ink transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </nav>

      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96" : "max-h-0"}`}>
        <ul className="px-6 py-4 flex flex-col gap-4 border-t border-line bg-paper/95 backdrop-blur-md">
          {links.map(([label, id]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-xs uppercase tracking-widest text-ink-soft hover:text-ink"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
