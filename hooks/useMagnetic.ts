"use client";

import { useRef } from "react";

export function useMagnetic(strength = 0.3) {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const onLeave = () => {
    if (ref.current) {
      ref.current.style.transform = "translate(0, 0)";
      ref.current.style.transition = "transform 0.3s ease-out";
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.transition = "";
        }
      }, 300);
    }
  };

  return { ref, onMove, onLeave };
}

