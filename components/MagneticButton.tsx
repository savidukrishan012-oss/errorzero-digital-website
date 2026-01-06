"use client";

import { ReactNode, useRef, useState, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  as?: "button" | "a";
  "data-cursor"?: string;
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  as = "button",
  "data-cursor": dataCursor,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    const maxDistance = 30;
    const strength = 0.3;

    x.set(distanceX * strength);
    y.set(distanceY * strength);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const baseClasses =
    "inline-block rounded-full bg-white px-8 py-4 font-semibold text-black transition-transform hover:scale-105 focus:scale-105";

  const content = (
    <motion.div
      style={{
        x: xSpring,
        y: ySpring,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {as === "a" && href ? (
        <a
          ref={ref as React.RefObject<HTMLAnchorElement>}
          href={href}
          className={`${baseClasses} ${className}`}
          data-cursor={dataCursor}
        >
          {children}
        </a>
      ) : (
        <button
          ref={ref as React.RefObject<HTMLButtonElement>}
          onClick={onClick}
          className={`${baseClasses} ${className}`}
          data-cursor={dataCursor}
        >
          {children}
        </button>
      )}
    </motion.div>
  );

  return content;
}



