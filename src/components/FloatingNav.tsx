import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Command, Sun, Moon } from "lucide-react";
import { useApp } from "../context/AppContext";
import { PROFILE } from "../data/profile";
import { NAV_SECTIONS } from "../data/content";

interface FloatingNavProps {
  activeSection: string;
  onNavigate: (id: string) => void;
  onOpenCommand: () => void;
}

export function FloatingNav({ activeSection, onNavigate, onOpenCommand }: FloatingNavProps) {
  const { theme, toggleTheme } = useApp();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-40 aid-surface border aid-hair rounded-full shadow-sm flex items-center gap-1 px-2 py-2"
      aria-label="Primary"
    >
      <button
        onClick={() => onNavigate("hero")}
        className="aid-focus aid-display text-sm font-medium px-3 aid-ink"
        aria-label="Back to top"
      >
        {PROFILE.initials}
      </button>

      <div className="hidden sm:flex items-center gap-1 ml-1">
        {NAV_SECTIONS.map((s) => (
          <button
            key={s.id}
            onClick={() => onNavigate(s.id)}
            className="aid-focus relative text-sm px-3 py-1.5 rounded-full aid-muted"
          >
            {activeSection === s.id && (
              <motion.span
                layoutId="nav-indicator"
                className="absolute inset-0 aid-accent-soft rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span
              className="relative"
              style={{ color: activeSection === s.id ? "var(--accent)" : undefined }}
            >
              {s.label}
            </span>
          </button>
        ))}
      </div>

      <div className="w-px h-5 aid-hair border-l mx-1" />

      <button
        onClick={onOpenCommand}
        className="aid-focus flex items-center gap-1 text-xs aid-muted px-2.5 py-1.5 rounded-full hover:aid-surface2"
        aria-label="Open command menu"
      >
        <Command size={13} />
        <span className="hidden md:inline">K</span>
      </button>

      <button
        onClick={toggleTheme}
        className="aid-focus w-8 h-8 flex items-center justify-center rounded-full aid-ink"
        aria-label="Toggle theme"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={theme}
            initial={{ rotate: -60, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 60, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </motion.span>
        </AnimatePresence>
      </button>
    </motion.nav>
  );
}
