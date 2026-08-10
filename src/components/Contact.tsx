import React from "react";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Eyebrow } from "./ui/Eyebrow";
import { CONTACT, PROFILE } from "../data/profile";

export function Contact() {
  return (
    <section id="contact" className="px-6 md:px-12 lg:px-20 py-24 md:py-40">
      <div className="max-w-3xl mx-auto text-center">
        <Eyebrow>Contact</Eyebrow>
        <h2 className="aid-display aid-ink text-4xl md:text-6xl font-medium tracking-tight mb-10">
          Have something interesting in mind?
        </h2>
        <a
          href={`mailto:${CONTACT.email}`}
          className="aid-focus aid-display inline-flex items-center gap-3 text-xl md:text-2xl aid-accent aid-underline mb-14"
        >
          {CONTACT.email} <ArrowUpRight size={20} />
        </a>

        <div className="flex items-center justify-center gap-8">
          <a href={CONTACT.github} className="aid-focus flex items-center gap-2 text-sm aid-muted hover:aid-ink">
            <Github size={16} /> GitHub
          </a>
          <a href={CONTACT.linkedin} className="aid-focus flex items-center gap-2 text-sm aid-muted hover:aid-ink">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href={CONTACT.twitter} className="aid-focus flex items-center gap-2 text-sm aid-muted hover:aid-ink">
            <ArrowUpRight size={16} /> X
          </a>
        </div>
      </div>

      <footer className="max-w-5xl mx-auto mt-32 pt-8 border-t aid-hair flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="aid-muted text-xs">
          &copy; {new Date().getFullYear()} {PROFILE.name}
        </span>
        <span className="aid-muted text-xs">Built with React, TypeScript &amp; Framer Motion</span>
      </footer>
    </section>
  );
}
