import { personal } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono-custom text-xs text-neutral-400 tracking-wider">
          Designed and built by{" "}
          <span className="text-[#5b7cf6]">{personal.name}</span>
        </p>
        <p className="font-mono-custom text-xs text-neutral-400 tracking-wider">
          {new Date().getFullYear()} — All rights reserved
        </p>
      </div>
    </footer>
  );
}
