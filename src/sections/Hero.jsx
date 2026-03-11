import { useEffect, useState } from "react";
import { personal } from "../data/portfolio";

const roles = ["Backend Engineer", "AI/ML Developer", "Open Source Contributor", "Full-Stack Builder"];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIdx]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden mesh-bg"
    >
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(rgba(91,124,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(91,124,246,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Accent blob */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#5b7cf6]/5 dark:bg-[#5b7cf6]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/6 w-64 h-64 rounded-full bg-[#4ecdc4]/5 dark:bg-[#4ecdc4]/8 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
        {/* Status badge */}
        <div className="opacity-0 animate-fade-up delay-100 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-mono-custom text-xs text-neutral-500 dark:text-neutral-400 tracking-wider">
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <h1 className="opacity-0 animate-fade-up delay-200 text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-4">
          <span className="block text-neutral-900 dark:text-neutral-100">{personal.name.split(" ")[0]}</span>
          <span className="block text-neutral-400 dark:text-neutral-600">{personal.name.split(" ")[1]}</span>
        </h1>

        {/* Typewriter */}
        <div className="opacity-0 animate-fade-up delay-300 flex items-center gap-2 mb-6">
          <span className="font-mono-custom text-lg sm:text-xl text-[#5b7cf6]">{displayed}</span>
          <span className="cursor-blink font-mono-custom text-xl text-[#5b7cf6]">|</span>
        </div>

        {/* Tagline */}
        <p className="opacity-0 animate-fade-up delay-400 max-w-xl text-neutral-500 dark:text-neutral-400 text-base sm:text-lg leading-relaxed mb-10">
          {personal.tagline}
        </p>

        {/* CTA row */}
        <div className="opacity-0 animate-fade-up delay-500 flex flex-wrap items-center gap-4 mb-14">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#5b7cf6] hover:bg-[#4a6be5] text-white rounded-lg font-medium text-sm transition-all duration-200 hover:shadow-lg hover:shadow-[#5b7cf6]/25"
          >
            View Projects
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-200 dark:border-neutral-700 hover:border-[#5b7cf6] dark:hover:border-[#5b7cf6] rounded-lg font-medium text-sm transition-all duration-200 text-neutral-700 dark:text-neutral-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Social links */}
        <div className="opacity-0 animate-fade-up delay-600 flex items-center gap-6">
          {[
            { label: "GitHub", href: personal.github, icon: "github" },
            { label: "LinkedIn", href: personal.linkedin, icon: "linkedin" },
            // { label: "LeetCode", href: personal.leetcode, icon: "code" },
          ].map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono-custom text-xs tracking-wider text-neutral-400 hover:text-[#5b7cf6] transition-colors group"
            >
              <SocialIcon name={icon} />
              <span className="hidden sm:inline group-hover:underline">{label}</span>
            </a>
          ))}
        </div>
      </div>

      
    </section>
  );
}

function SocialIcon({ name }) {
  if (name === "github") return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
  if (name === "linkedin") return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  );
}
