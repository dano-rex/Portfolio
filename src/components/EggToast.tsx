import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export function EggToast({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 20, x: "-50%" }}
          className="fixed bottom-8 left-1/2 z-50 aid-surface border aid-hair rounded-full px-5 py-3 text-sm aid-ink shadow-lg"
          role="status"
        >
          You found the secret sequence. Thanks for exploring.
        </motion.div>
      )}
    </AnimatePresence>
  );
}
