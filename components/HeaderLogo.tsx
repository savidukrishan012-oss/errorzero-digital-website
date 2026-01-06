"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useReducedMotion } from "./useReducedMotion";

export default function HeaderLogo() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="fixed top-8 left-8 z-50"
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -20, scale: 0.96 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        href="/"
        className="group relative block"
      >
        {/* Glow pulse effect */}
        {!shouldReduceMotion && (
          <motion.div
            className="absolute inset-0 -z-10 rounded-lg bg-cyan-400/20 blur-xl"
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
        
        <motion.div
          whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            src="/brand/logo.jpg"
            alt="ErrorZero Digital"
            width={140}
            height={47}
            className="h-auto w-auto"
            priority
          />
        </motion.div>
      </Link>
    </motion.div>
  );
}

