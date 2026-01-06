"use client";

import { motion, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [label, setLabel] = useState<string | null>(null);
  const [color, setColor] = useState("#ffffff");
  const [isVisible, setIsVisible] = useState(false);

  const x = useSpring(0, { stiffness: 300, damping: 35 });
  const y = useSpring(0, { stiffness: 300, damping: 35 });
  const scale = useSpring(1, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      x.set(e.clientX);
      y.set(e.clientY);

      const target = e.target as HTMLElement;
      
      // Find closest element with data-cursor attribute
      const cursorElement = target.closest("[data-cursor]");
      const cursorType = cursorElement?.getAttribute("data-cursor");
      
      // Find closest element with data-cursor-color attribute
      const colorElement = target.closest("[data-cursor-color]");
      const cursorColor = colorElement?.getAttribute("data-cursor-color");

      // Set label based on cursor type
      setLabel(
        cursorType === "view" ? "VIEW" :
        cursorType === "open" ? "OPEN" :
        cursorType === "link" ? null :
        cursorType === "image" ? "VIEW" :
        null
      );

      // Set scale based on cursor type
      scale.set(
        cursorType === "image" ? 2 :
        cursorType === "link" ? 1.4 :
        cursorType === "view" || cursorType === "open" ? 1.2 :
        1
      );

      // Set color from section (prioritize section color over default)
      if (cursorColor) {
        setColor(cursorColor);
      } else {
        setColor("#ffffff");
      }

      setIsVisible(true);
    };

    const leave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, [x, y, scale]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{
        translateX: x,
        translateY: y,
        transform: "translate(-50%, -50%)",
      }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full border-2"
        style={{
          width: 44,
          height: 44,
          scale,
          borderColor: color,
          color: color,
          backgroundColor: "transparent",
        }}
      >
        <AnimatePresence mode="wait">
          {label && (
            <motion.span
              key={label}
              className="text-[10px] font-bold uppercase tracking-widest"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

