import { useState } from "react";
import { TbMapPin, TbMail } from "react-icons/tb";
import { personal } from "../data/portfolio";
import SectionLabel from "../components/SectionLabel";
import Reveal from "../components/Reveal";
import Socials from "../components/Socials";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const mailtoHref = `mailto:${personal.email}?subject=${encodeURIComponent(
    `Portfolio contact from ${form.name || "your site"}`
  )}&body=${encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)}`;

  return (
    <section id="contact" className="py-28 bg-paper-alt">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionLabel index="08" text="Contact" />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <Reveal>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-tight mb-6">
              Let's build something
              <br />
              <span className="text-rust">worth shipping.</span>
            </h2>
            <p className="text-ink-soft leading-relaxed mb-10 max-w-md">
              Open to AI/ML engineering, backend, and full-stack roles. Reach out directly
              or use the form.
            </p>

            <div className="space-y-4 mb-10">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3 text-sm text-ink hover:text-rust transition-colors"
              >
                <TbMail className="w-4 h-4 text-rust" /> {personal.email}
              </a>
              <p className="flex items-center gap-3 text-sm text-ink-soft">
                <TbMapPin className="w-4 h-4 text-rust" /> {personal.location}
              </p>
            </div>

            <Socials />
          </Reveal>

          <Reveal delay={0.1}>
            <form
              action={mailtoHref}
              method="get"
              className="tick-corners card-surface rounded-2xl p-8 shadow-soft space-y-5"
            >
              <div>
                <label className="font-mono text-[11px] uppercase tracking-wider text-ink-soft block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-paper border border-line text-sm text-ink focus:outline-none focus:border-rust transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-mono text-[11px] uppercase tracking-wider text-ink-soft block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-paper border border-line text-sm text-ink focus:outline-none focus:border-rust transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="font-mono text-[11px] uppercase tracking-wider text-ink-soft block mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-paper border border-line text-sm text-ink focus:outline-none focus:border-rust transition-colors resize-none"
                  placeholder="What are you working on?"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-ink text-paper font-medium text-sm hover:bg-rust transition-colors"
              >
                Send message
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
