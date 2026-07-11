import { personal } from "../data/portfolio";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-mono text-xs text-ink-soft tracking-wider">
          Designed &amp; built by <span className="text-ink">{personal.name}</span> ·{" "}
          {new Date().getFullYear()}
        </p>
        <Socials size="w-9 h-9" />
      </div>
    </footer>
  );
}
