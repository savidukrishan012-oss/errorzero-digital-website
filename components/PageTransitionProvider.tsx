"use client";

import { ReactNode } from "react";
import TransitionLayer from "./TransitionLayer";

interface PageTransitionProviderProps {
  children: ReactNode;
}

export default function PageTransitionProvider({
  children,
}: PageTransitionProviderProps) {
  return (
    <>
      <TransitionLayer isVisible={false} />
      {children}
    </>
  );
}
