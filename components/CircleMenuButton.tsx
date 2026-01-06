"use client";

import { motion } from "framer-motion";

interface CircleMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function CircleMenuButton({
  isOpen,
  onClick,
}: CircleMenuButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className="fixed top-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all hover:bg-white/20 hover:border-white/30 focus:bg-white/20"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={false}
      style={{
        boxShadow: isOpen
          ? "0 0 0 0 rgba(0, 212, 255, 0.4)"
          : "0 0 20px rgba(0, 212, 255, 0.2)",
      }}
    >
      <motion.div
        className="relative h-6 w-6"
        animate={isOpen ? "open" : "closed"}
        initial={false}
      >
        <motion.span
          className="absolute left-0 top-0 h-0.5 w-6 bg-white"
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: 45, y: 11 },
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="absolute left-0 top-2.5 h-0.5 w-6 bg-white"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="absolute left-0 top-5 h-0.5 w-6 bg-white"
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: -45, y: -11 },
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.button>
  );
}
