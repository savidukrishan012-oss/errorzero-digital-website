"use client";
import Image from "next/image";
import Link from "next/link";

export default function FixedLogoBadge() {
  return (
    <div className="fixed top-5 left-5 z-[60]">
      <Link
        href="/"
        aria-label="Go to Home"
        className="block w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden
                   bg-black/40 backdrop-blur border border-white/10 shadow-xl
                   transition-transform hover:scale-[1.05]"
      >
        <Image
          src="/brand/logo.jpg"
          alt="ErrorZero Digital"
          width={200}
          height={200}
          priority
          className="w-full h-full object-cover rounded-full"
        />
      </Link>
    </div>
  );
}
