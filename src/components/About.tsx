import React from "react";
import { SectionHeading } from "./ui/SectionHeading";
import { ABOUT } from "../data/content";

export function About() {
  return (
    <section id="about" className="px-6 md:px-12 lg:px-20 py-24 md:py-32">
      <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr_1.3fr] gap-12 md:gap-20">
        <div>
          <SectionHeading eyebrow="About" title="A short version of the story." />
          <p className="aid-voice aid-ink text-2xl md:text-3xl leading-snug">"{ABOUT.detail}"</p>
        </div>
        <div className="space-y-10">
          <p className="aid-ink leading-relaxed">{ABOUT.story}</p>

          <div>
            <div className="aid-muted text-xs uppercase tracking-wider mb-2">Current focus</div>
            <p className="aid-ink leading-relaxed">{ABOUT.focus}</p>
          </div>

          <div>
            <div className="aid-muted text-xs uppercase tracking-wider mb-2">Learning right now</div>
            <p className="aid-ink leading-relaxed">{ABOUT.learning}</p>
          </div>

          <div>
            <div className="aid-muted text-xs uppercase tracking-wider mb-2">Outside of code</div>
            <p className="aid-ink leading-relaxed">{ABOUT.interests}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
