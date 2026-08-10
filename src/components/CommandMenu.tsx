import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Command, ArrowUpRight } from "lucide-react";
import { useApp } from "../context/AppContext";
import { CONTACT } from "../data/profile";

interface CommandItem {
  id: string;
  label: string;
  run: () => void;
}

interface CommandMenuProps {
  open: boolean;
  onClose: () => void;
  onNavigate: (id: string) => void;
}

export function CommandMenu({ open, onClose, onNavigate }: CommandMenuProps) {
  const { theme, toggleTheme, soundOn, setSoundOn, playSound } = useApp();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery("");
      const t = setTimeout(() => inputRef.current?.focus(), 40);
      return () => clearTimeout(t);
    }
  }, [open]);

  const baseCommands: CommandItem[] = useMemo(
    () => [
      { id: "work", label: "Go to selected work", run: () => onNavigate("work") },
      { id: "about", label: "Go to about", run: () => onNavigate("about") },
      { id: "lab", label: "Go to lab", run: () => onNavigate("lab") },
      { id: "contact", label: "Go to contact", run: () => onNavigate("contact") },
      {
        id: "theme",
        label: theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
        run: toggleTheme,
      },
      {
        id: "sound",
        label: soundOn ? "Turn interface sound off" : "Turn interface sound on",
        run: () => setSoundOn((v) => !v),
      },
      {
        id: "email",
        label: "Copy email address",
        run: () => {
          void navigator.clipboard?.writeText(CONTACT.email);
        },
      },
      { id: "github", label: "Open GitHub", run: () => window.open(CONTACT.github, "_blank") },
      { id: "linkedin", label: "Open LinkedIn", run: () => window.open(CONTACT.linkedin, "_blank") },
    ],
    [theme, soundOn, onNavigate, toggleTheme, setSoundOn]
  );

  const hidden: CommandItem[] =
    query.trim().toLowerCase() === "sudo"
      ? [{ id: "sudo", label: "Permission granted. Here's a cookie.", run: () => {} }]
      : [];

  const list = [...hidden, ...baseCommands].filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center pt-[14vh] px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 bg-black/30"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command menu"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-md aid-surface border aid-hair rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="flex items-center gap-3 px-4 border-b aid-hair">
              <Command size={15} className="aid-muted" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") onClose();
                  if (e.key === "Enter" && list[0]) {
                    playSound(soundOn, 660, 0.05);
                    list[0].run();
                    onClose();
                  }
                }}
                placeholder="Type a command..."
                className="aid-focus w-full bg-transparent py-3.5 text-sm aid-ink outline-none placeholder:aid-muted"
              />
              <kbd className="text-[10px] aid-muted border aid-hair rounded px-1.5 py-0.5">esc</kbd>
            </div>
            <ul className="max-h-72 overflow-y-auto aid-scrollbar py-2">
              {list.length === 0 && (
                <li className="px-4 py-6 text-sm aid-muted text-center">No matches.</li>
              )}
              {list.map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => {
                      playSound(soundOn, 660, 0.05);
                      c.run();
                      onClose();
                    }}
                    className="aid-focus w-full text-left px-4 py-2.5 text-sm aid-ink hover:aid-surface2 flex items-center justify-between"
                  >
                    {c.label}
                    <ArrowUpRight size={13} className="aid-muted" />
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
