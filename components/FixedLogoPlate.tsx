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
        top: '20px',
        left: '20px',
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
          w-[500px] h-[170px] sm:w-[650px] sm:h-[220px]
          rounded-2xl overflow-hidden
          bg-transparent
          transition-transform duration-300
          hover:-translate-y-[2px] hover:scale-[1.02]
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70
        "
      >
        <div className="relative z-10 h-full w-full p-0 flex items-center justify-center">
          <Image
            src="/brand/logo.jpg"
            alt="ErrorZero Digital"
            width={2400}
            height={800}
            priority
            className="w-full h-full object-contain"
          />
        </div>
      </Link>
    </div>
  );
}
