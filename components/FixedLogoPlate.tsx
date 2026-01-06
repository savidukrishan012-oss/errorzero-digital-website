"use client";

import Image from "next/image";
import Link from "next/link";

export default function FixedLogoPlate() {
  return (
    <div 
      data-fixed-logo
      className="pointer-events-auto"
      style={{
        position: 'fixed',
        top: '24px',
        left: '24px',
        zIndex: 10000,
        transform: 'none',
        willChange: 'auto',
        isolation: 'isolate',
      }}
    >
      <Link
        href="/"
        aria-label="Go to Home"
        className="
          group block
          w-[110px] h-auto
          sm:w-[140px]
          transition-transform duration-300
          hover:-translate-y-[2px] hover:scale-[1.02]
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70
        "
        style={{
          filter: 'drop-shadow(0 8px 24px rgba(0, 0, 0, 0.4)) drop-shadow(0 2px 8px rgba(0, 0, 0, 0.2))',
        }}
      >
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <Image
            src="/brand/logo.jpg"
            alt="ErrorZero Digital"
            width={420}
            height={140}
            priority
            unoptimized
            className="w-full h-auto object-contain"
            style={{
              filter: 'drop-shadow(0 -1px 2px rgba(255, 255, 255, 0.1))',
            }}
          />
        </div>
      </Link>
    </div>
  );
}
