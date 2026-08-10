import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useApp } from "../context/AppContext";
import { PROFILE } from "../data/profile";

interface EntryScreenProps {
  onEnter: () => void;
}

export function EntryScreen({ onEnter }: EntryScreenProps) {
  const { reducedMotion, playSound, soundOn } = useApp();
  const [pos, setPos] = useState({ x: 0.5, y: 0.5 });

  const onMove = useCallback((e: React.MouseEvent) => {
    setPos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
  }, []);

  const letters = PROFILE.name.split("");

  return (
    <motion.div
      key="entry"
      onMouseMove={reducedMotion ? undefined : onMove}
      exit={{
        opacity: 0,
        scale: reducedMotion ? 1 : 1.06,
        filter: "blur(6px)",
        transition: { duration: 0.9, ease: [0.65, 0, 0.35, 1] },
      }}
      className="fixed inset-0 z-50 aid-bg flex flex-col items-center justify-center px-6"
    >
      {!reducedMotion && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(600px circle at ${pos.x * 100}% ${
              pos.y * 100
            }%, var(--accent-soft), transparent 70%)`,
          }}
        />
      )}

      <div className="relative text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="aid-muted text-xs tracking-[0.25em] uppercase mb-6"
        >
          Software developer &middot; Digital builder
        </motion.p>

        <h1 className="aid-display aid-ink text-[12vw] md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.95] flex flex-wrap justify-center max-w-4xl">
          {letters.map((ch, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: reducedMotion ? 0 : 0.25 + i * 0.02,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ display: "inline-block" }}
            >
              {ch === " " ? "\u00A0" : ch}
            </motion.span>
          ))}
        </h1>

        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          onClick={() => {
            playSound(soundOn, 520, 0.06);
            onEnter();
          }}
          className="aid-focus group mt-14 inline-flex items-center gap-3 border aid-hair rounded-full pl-7 pr-3 py-3 aid-ink"
        >
          <span className="text-sm tracking-wide">Enter</span>
          <span className="aid-accent-bg rounded-full w-9 h-9 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
            <ArrowRight size={16} />
          </span>
        </motion.button>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 aid-muted text-xs tracking-widest uppercase"
      >
        {PROFILE.location}
      </motion.p>
    </motion.div>
  );
}
