import React from "react";
import { motion } from "framer-motion";

export function ProjectNode() {
  return (
    <motion.div
      initial={{ scale: 0.4, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
      transition={{ duration: 0.4, delay: 0.15 }}
      className="absolute left-1/2 -translate-x-1/2 top-10 md:top-1/2 md:-translate-y-1/2 w-3 h-3 rounded-full aid-accent-bg z-10"
      aria-hidden="true"
    />
  );
}
