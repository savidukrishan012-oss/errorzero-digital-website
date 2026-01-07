import Image from "next/image";
import Container from "./Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/brand/logo.jpg"
                alt="ErrorZero Digital"
                width={120}
                height={40}
                className="h-auto w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-white/60">
              AI-powered edits. Cinematic videos. Zero errors on your website.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">
              Navigation
            </h3>
            <nav className="flex flex-col gap-3 text-sm">
              <Link
                href="/"
                className="link-underline text-white/60 transition-colors hover:text-white"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="link-underline text-white/60 transition-colors hover:text-white"
              >
                Services
              </Link>
              <Link
                href="/work"
                className="link-underline text-white/60 transition-colors hover:text-white"
              >
                Work
              </Link>
              <Link
                href="/about"
                className="link-underline text-white/60 transition-colors hover:text-white"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="link-underline text-white/60 transition-colors hover:text-white"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">
              Contact
            </h3>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="mailto:errorzorodigital@gmail.com"
                className="link-underline text-white/60 transition-colors hover:text-cyan-400"
              >
                errorzorodigital@gmail.com
              </a>
              <a
                href="https://wa.me/0705278929"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-white/60 transition-colors hover:text-cyan-400"
              >
                WhatsApp: 0705278929
              </a>
              <a
                href="https://www.facebook.com/share/1GWetyDHx6/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ErrorZero Digital on Facebook"
                className="link-underline text-white/60 transition-colors hover:text-cyan-400"
              >
                Facebook
              </a>
              <a
                href="https://www.tiktok.com/@errorzero_digital?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ErrorZero Digital on TikTok"
                className="link-underline text-white/60 transition-colors hover:text-cyan-400"
              >
                TikTok
              </a>
              <a
                href="https://www.instagram.com/errorzero_digital/?utm_source=qr#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ErrorZero Digital on Instagram"
                className="link-underline text-white/60 transition-colors hover:text-cyan-400"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} ErrorZero Digital. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
