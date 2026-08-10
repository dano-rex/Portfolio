import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ProjectNode } from "./ProjectNode";
import type { Project } from "../../types";

interface ProjectRowProps {
  project: Project;
  onOpen: (id: string) => void;
}

export function ProjectRow({ project, onOpen }: ProjectRowProps) {
  const isLeft = project.side === "left";

  const contentVariants = {
    hidden: { opacity: 0, x: isLeft ? -28 : 28, y: 16 },
    show: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <div className="relative py-16 md:py-24 pl-14 md:pl-0">
      {/* spine node */}
      <div className="hidden md:block">
        <ProjectNode />
      </div>
      <div className="md:hidden absolute left-4 top-10 -translate-x-1/2 w-3 h-3 rounded-full aid-accent-bg" />

      {/* connector from node to project card */}
      <div
        className={`hidden md:block absolute top-1/2 h-px w-12 aid-accent-bg ${
          isLeft ? "right-1/2 mr-1.5" : "left-1/2 ml-1.5"
        }`}
      />
      <div className="md:hidden absolute left-4 top-10 h-px w-6 aid-accent-bg" />

      <motion.div
        variants={contentVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className={`md:w-[44%] ${isLeft ? "md:mr-auto md:pr-10 md:text-right" : "md:ml-auto md:pl-10"}`}
      >
        <button
          onClick={() => onOpen(project.id)}
          className={`aid-focus group block w-full text-left rounded-2xl border aid-hair aid-surface p-6 md:p-7 hover:aid-accent-border transition-colors ${
            isLeft ? "md:text-right" : ""
          }`}
        >
          <div className={`flex items-center gap-3 mb-4 ${isLeft ? "md:justify-end" : ""}`}>
            <span className="aid-display text-xs aid-accent font-medium">{project.number}</span>
            <span className="h-px w-6 aid-hair border-t" aria-hidden="true" />
            <span className="aid-muted text-xs uppercase tracking-wider">{project.tagline}</span>
          </div>

          <h3 className="aid-display aid-ink text-2xl md:text-3xl font-medium tracking-tight mb-3">
            {project.name}
          </h3>
          <p className="aid-muted text-sm leading-relaxed mb-5">{project.description}</p>

          <div className={`flex flex-wrap gap-2 mb-6 ${isLeft ? "md:justify-end" : ""}`}>
            {project.tags.map((t) => (
              <span key={t} className="text-[11px] aid-surface2 aid-muted rounded-full px-2.5 py-1">
                {t}
              </span>
            ))}
          </div>

          {/* Abstract preview generated from the accent — no stock imagery */}
          <div className="rounded-xl h-32 md:h-36 aid-accent-soft mb-6 relative overflow-hidden" aria-hidden="true">
            <div
              className="absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(115deg, transparent, transparent 22px, var(--hair) 22px, var(--hair) 23px)",
              }}
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-end gap-1.5">
              {[40, 70, 55, 90, 65].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm aid-accent-bg"
                  style={{ height: `${h * 0.55}px`, opacity: 0.85 - i * 0.08 }}
                />
              ))}
            </div>
          </div>

          <span
            className={`inline-flex items-center gap-1.5 text-sm font-medium aid-accent aid-underline ${
              isLeft ? "md:flex-row-reverse" : ""
            }`}
          >
            View project
            <ArrowUpRight
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </span>
        </button>
      </motion.div>
    </div>
  );
}
