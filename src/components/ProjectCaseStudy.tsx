import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { PROJECTS } from "../data/projects";
import type { Project } from "../types";

interface CaseStudyRowProps {
  label: string;
  children: React.ReactNode;
}

function CaseStudyRow({ label, children }: CaseStudyRowProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-8 py-6 border-t aid-hair">
      <div className="aid-muted text-xs uppercase tracking-wider pt-1">{label}</div>
      <div className="aid-ink text-sm md:text-base leading-relaxed">{children}</div>
    </div>
  );
}

interface ProjectCaseStudyProps {
  project: Project;
  onClose: () => void;
  onNext: () => void;
}

export function ProjectCaseStudy({ project, onClose, onNext }: ProjectCaseStudyProps) {
  const nextProject =
    PROJECTS[(PROJECTS.findIndex((p) => p.id === project.id) + 1) % PROJECTS.length];

  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 aid-bg overflow-y-auto aid-scrollbar"
    >
      <div className="sticky top-0 z-10 aid-bg/95 backdrop-blur border-b aid-hair">
        <div className="max-w-3xl mx-auto px-6 md:px-0 py-5 flex items-center justify-between">
          <button
            onClick={onClose}
            className="aid-focus flex items-center gap-2 text-sm aid-muted hover:aid-ink"
          >
            <ArrowLeft size={15} /> Back to work
          </button>
          <button
            onClick={onClose}
            className="aid-focus w-9 h-9 rounded-full border aid-hair flex items-center justify-center aid-ink"
            aria-label="Close case study"
          >
            <X size={15} />
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-0 py-16">
        <span className="aid-display aid-accent text-sm">{project.number}</span>
        <h1 className="aid-display aid-ink text-4xl md:text-6xl font-medium tracking-tight mt-3 mb-6">
          {project.name}
        </h1>
        <p className="aid-muted text-lg leading-relaxed max-w-xl mb-8">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map((t) => (
            <span key={t} className="text-xs aid-surface2 aid-muted rounded-full px-3 py-1.5">
              {t}
            </span>
          ))}
        </div>

        <div className="rounded-2xl h-56 md:h-72 aid-accent-soft mb-4 relative overflow-hidden" aria-hidden="true">
          <div
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                "repeating-linear-gradient(115deg, transparent, transparent 26px, var(--hair) 26px, var(--hair) 27px)",
            }}
          />
        </div>

        <div>
          <CaseStudyRow label="Problem">{project.problem}</CaseStudyRow>
          <CaseStudyRow label="Solution">{project.solution}</CaseStudyRow>
          <CaseStudyRow label="Role">{project.role}</CaseStudyRow>
          <CaseStudyRow label="Technology">{project.technology}</CaseStudyRow>
          <CaseStudyRow label="Design decisions">
            <ul className="space-y-2">
              {project.decisions.map((d, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full aid-accent-bg shrink-0" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </CaseStudyRow>
          <CaseStudyRow label="Challenges">{project.challenges}</CaseStudyRow>
          <CaseStudyRow label="Outcome">{project.outcome}</CaseStudyRow>
          <CaseStudyRow label="Links">
            <div className="flex gap-4">
              <a href={project.links.live} className="aid-accent aid-underline inline-flex items-center gap-1">
                Live <ArrowUpRight size={13} />
              </a>
              <a href={project.links.code} className="aid-accent aid-underline inline-flex items-center gap-1">
                Code <ArrowUpRight size={13} />
              </a>
            </div>
          </CaseStudyRow>
        </div>

        <button
          onClick={onNext}
          className="aid-focus w-full mt-16 border-t aid-hair pt-8 flex items-center justify-between group"
        >
          <div className="text-left">
            <div className="aid-muted text-xs uppercase tracking-wider mb-2">Next project</div>
            <div className="aid-display aid-ink text-2xl font-medium">{nextProject.name}</div>
          </div>
          <ArrowRight size={20} className="aid-accent group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}
