import { motion } from 'framer-motion';

export function BlueLightPillar() {
  return (
    <div className="absolute inset-0 z-[5] overflow-hidden pointer-events-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute inset-0"
      >
        {/* === Primary horizontal beam — center === */}
        <div className="pillar-h-core" />

        {/* === Wide horizontal outer glow — center === */}
        <div className="pillar-h-outer" />

        {/* === Upper accent beam === */}
        <div className="pillar-h-accent pillar-h-accent--top" />

        {/* === Lower accent beam === */}
        <div className="pillar-h-accent pillar-h-accent--bottom" />

        {/* === Extra wispy beams for fullness === */}
        <div className="pillar-h-wisp pillar-h-wisp--1" />
        <div className="pillar-h-wisp pillar-h-wisp--2" />
        <div className="pillar-h-wisp pillar-h-wisp--3" />

        {/* === Central radial glow burst === */}
        <div className="pillar-h-burst" />
      </motion.div>
    </div>
  );
}
