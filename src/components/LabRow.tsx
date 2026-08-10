import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { LabItem } from "../types";

interface LabRowProps {
  item: LabItem;
  index: number;
}

export function LabRow({ item, index }: LabRowProps) {
  const [open, setOpen] = useState(false);

  return (
    <li className="border-t aid-hair">
      <button
        onClick={() => setOpen((v) => !v)}
        className="aid-focus w-full flex items-center justify-between gap-6 py-6 text-left group"
        aria-expanded={open}
      >
        <div className="flex items-center gap-5 min-w-0">
          <span className="aid-display aid-muted text-xs w-6 shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="aid-display aid-ink text-xl md:text-2xl font-medium tracking-tight truncate">
            {item.title}
          </span>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <span className="hidden sm:inline aid-muted text-xs">{item.type}</span>
          <span className="aid-muted text-xs">{item.year}</span>
          <ChevronDown size={15} className={`aid-muted transition-transform ${open ? "rotate-180" : ""}`} />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="aid-muted text-sm leading-relaxed pb-6 max-w-xl">{item.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
