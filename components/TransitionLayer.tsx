"use client";

import { motion } from "framer-motion";

interface TransitionLayerProps {
  isVisible: boolean;
}

export default function TransitionLayer({ isVisible }: TransitionLayerProps) {
  return (
    <motion.div
      initial={false}
      animate={{
        x: isVisible ? "0%" : "-100%",
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed inset-0 z-[9998] bg-black backdrop-blur-sm"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      }}
    />
  );
}



