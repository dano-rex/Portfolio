import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectRow } from "./ProjectRow";
import { PROJECTS } from "../../data/projects";

interface WorkSectionProps {
  onOpenProject: (id: string) => void;
}

export function WorkSection({ onOpenProject }: WorkSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 40%"],
  });
  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="work" className="px-6 md:px-12 lg:px-20 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Selected work"
          title="A few things I've built end to end."
          subtitle="Four products, each carried from problem to shipped outcome. Open one for the full story."
        />
      </div>

      <div ref={containerRef} className="relative max-w-5xl mx-auto">
        {/* static spine track */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px aid-hair bg-current opacity-40" />
        <div className="md:hidden absolute left-4 top-0 bottom-0 w-px aid-hair bg-current opacity-40" />

        {/* spine fill — draws progressively as the section scrolls into view */}
        <motion.div
          className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-px aid-accent-bg origin-top"
          style={{ height: fillHeight }}
        />
        <motion.div
          className="md:hidden absolute left-4 top-0 w-px aid-accent-bg origin-top"
          style={{ height: fillHeight }}
        />

        {PROJECTS.map((p) => (
          <ProjectRow key={p.id} project={p} onOpen={onOpenProject} />
        ))}
      </div>
    </section>
  );
}
