import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function AstronautScrollbar() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0); // 0 to 1
  const isDragging = useRef(false);

  // Keep progress in sync with real scroll
  useEffect(() => {
    const onScroll = () => {
      if (isDragging.current) return; // don't override while dragging
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(maxScroll > 0 ? window.scrollY / maxScroll : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Pointer drag handlers — drag scrolls the page
  const handlePointerDown = (e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    isDragging.current = true;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    const track = trackRef.current.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientY - track.top) / track.height));
    setProgress(ratio);
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({ top: ratio * maxScroll, behavior: 'instant' });
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };


  return (
    <div
      ref={trackRef}
      className="fixed right-2 top-24 bottom-[10%] w-12 z-[100] hidden md:flex justify-center"
      style={{ pointerEvents: 'none' }}
    >
      {/* Astronaut — draggable thumb */}
      <div
        className="absolute flex items-center justify-center cursor-ns-resize"
        style={{
          top: `${progress * 100}%`,
          transform: 'translateY(-50%)',
          pointerEvents: 'auto',
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        title="Drag to scroll"
      >
        {/* Glowing Aura */}
        <div className="absolute inset-0 bg-primary/40 blur-[20px] rounded-full scale-[2] animate-pulse-slow pointer-events-none" />
        <div className="absolute inset-0 bg-secondary/30 blur-[15px] rounded-full scale-[1.5] pointer-events-none" />

        {/* Floating animation */}
        <motion.div
          animate={{ y: isDragging.current ? 0 : [-4, 4, -4], rotate: [-8, 8, -8] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          className="relative z-10 text-4xl filter drop-shadow-[0_0_12px_rgba(255,255,255,0.6)] select-none"
          style={{ fontSize: isDragging.current ? '2.8rem' : undefined }}
        >
          👨‍🚀
        </motion.div>
      </div>
    </div>
  );
}
