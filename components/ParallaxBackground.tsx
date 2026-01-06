"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "./useReducedMotion";

interface ParallaxBackgroundProps {
  src: string;
  alt: string;
}

export default function ParallaxBackground({
  src,
  alt,
}: ParallaxBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const shouldReduceMotion = useReducedMotion();
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["0%", "40px"]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [1, 1] : [1.06, 1]
  );

  return (
    <div ref={containerRef} className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{
          y: shouldReduceMotion ? undefined : y,
          scale: shouldReduceMotion ? undefined : scale,
        }}
        initial={shouldReduceMotion ? {} : { scale: 1.06 }}
        animate={shouldReduceMotion ? {} : { scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.65) 0%,
            rgba(0, 0, 0, 0.35) 50%,
            rgba(0, 0, 0, 0.75) 100%
          )`,
        }}
      />

      {/* Noise/Grain Overlay */}
      <div
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          mixBlendMode: "overlay",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          boxShadow: "inset 0 0 200px 100px rgba(0, 0, 0, 0.3)",
        }}
      />

      {/* Light Sweep Animation */}
      {!shouldReduceMotion && (
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            background: `linear-gradient(
              90deg,
              transparent 0%,
              rgba(0, 212, 255, 0.08) 25%,
              rgba(0, 212, 255, 0.12) 50%,
              rgba(0, 212, 255, 0.08) 75%,
              transparent 100%
            )`,
            backgroundSize: "200% 100%",
          }}
        />
      )}
    </div>
  );
}

