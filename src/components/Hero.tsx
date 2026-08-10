import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Eyebrow } from "./ui/Eyebrow";
import { PROFILE } from "../data/profile";

interface HeroProps {
  onNavigate: (id: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-28 pb-20 max-w-5xl mx-auto"
    >
      <Eyebrow>{PROFILE.status}</Eyebrow>
      <h1 className="aid-display aid-ink text-5xl md:text-7xl font-medium tracking-tight leading-[1.02] max-w-3xl">
        {PROFILE.name}
      </h1>
      <p className="aid-muted text-lg md:text-xl mt-8 max-w-xl leading-relaxed">
        {PROFILE.tagline}
      </p>
      <div className="flex items-center gap-3 mt-10">
        <button
          onClick={() => onNavigate("work")}
          className="aid-focus aid-accent-bg rounded-full px-6 py-3 text-sm font-medium inline-flex items-center gap-2"
        >
          See the work <ArrowRight size={15} />
        </button>
        <button
          onClick={() => onNavigate("contact")}
          className="aid-focus border aid-hair rounded-full px-6 py-3 text-sm aid-ink"
        >
          Get in touch
        </button>
      </div>

      <motion.button
        onClick={() => onNavigate("work")}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="aid-focus mt-24 self-start flex items-center gap-2 aid-muted text-xs uppercase tracking-widest"
      >
        Scroll <ChevronDown size={14} />
      </motion.button>
    </section>
  );
}
