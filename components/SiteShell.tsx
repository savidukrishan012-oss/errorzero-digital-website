"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import CircleMenuButton from "./CircleMenuButton";
import OverlayMenu from "./OverlayMenu";
import Footer from "./Footer";
import TransitionLayer from "./TransitionLayer";

interface SiteShellProps {
  children: React.ReactNode;
}

export default function SiteShell({ children }: SiteShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pathname = usePathname();
  const prevPathnameRef = useRef(pathname);

  // Handle page transitions
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        prevPathnameRef.current = pathname;
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen">
      <CircleMenuButton
        isOpen={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      />
      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <TransitionLayer isVisible={isTransitioning} />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
