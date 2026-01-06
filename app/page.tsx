"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useReducedMotion } from "@/components/useReducedMotion";
import Container from "@/components/Container";
import SectionReveal from "@/components/SectionReveal";
import MagneticButton from "@/components/MagneticButton";

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* Hero Section - Background Image Only */}
      <section className="relative min-h-[100svh] overflow-hidden" data-cursor-color="#f5c16c">
        {/* Stable background image - no flicker */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/brand/hero-bg.jpg"
            alt=""
            fill
            priority
            unoptimized
            className="object-cover object-center"
            style={{ opacity: 1 }}
          />
        </div>

        {/* Minimal overlay - only if needed, very light to keep background text visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 z-[1]" />

        {/* Noise overlay */}
        <div className="hero-noise absolute inset-0 z-[1] pointer-events-none" />

        {/* Minimal CTA buttons - positioned at bottom-left to not overlap background text */}
        <div className="absolute bottom-8 left-6 sm:left-12 z-10">
          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }
            }
            animate={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
            }
            transition={{
              duration: 0.6,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <MagneticButton href="/work" as="a" data-cursor="view">
              View Work
            </MagneticButton>
            <Link
              href="/contact"
              className="rounded-full border-2 border-white/30 bg-white/5 px-6 py-3 text-center text-sm font-semibold backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/10 focus:border-white/50"
              data-cursor="open"
            >
              Get a Quote
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator - bottom right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 right-6 sm:right-12 z-10"
        >
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: [0, 10, 0],
                  }
            }
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-2 text-white/70"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="sticky top-0 z-10 py-32 backdrop-blur-sm" data-cursor-color="#ffffff">
        <Container>
          <SectionReveal>
            <div className="mb-16 text-center">
              <motion.div
                className="relative inline-block"
                initial={
                  shouldReduceMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30, scale: 0.95 }
                }
                whileInView={
                  shouldReduceMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 1, y: 0, scale: 1 }
                }
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.h2
                  className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-4 text-white relative z-10"
                  style={{ fontFamily: 'var(--font-playfair), serif' }}
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          textShadow: [
                            "0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.2)",
                            "0 0 30px rgba(255,255,255,0.4), 0 0 60px rgba(255,255,255,0.3)",
                            "0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.2)",
                          ],
                        }
                  }
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Our Services
                </motion.h2>
                {/* Decorative underline with animation */}
                <motion.div
                  className="mx-auto h-1 rounded-full"
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1, scaleX: 0, width: 0 }
                      : { opacity: 0, scaleX: 0, width: 0 }
                  }
                  whileInView={
                    shouldReduceMotion
                      ? { opacity: 1, scaleX: 1, width: "100%" }
                      : { opacity: 1, scaleX: 1, width: "100%" }
                  }
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 1,
                    delay: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)",
                    boxShadow: "0 0 20px rgba(255,255,255,0.5)",
                  }}
                />
              </motion.div>
              <motion.p
                className="text-lg sm:text-xl md:text-2xl font-medium tracking-wide mb-8"
                initial={
                  shouldReduceMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20, filter: "blur(10px)" }
                }
                whileInView={
                  shouldReduceMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 1, y: 0, filter: "blur(0px)" }
                }
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }
                }
                style={{
                  fontFamily: 'var(--font-playfair), serif',
                  backgroundImage:
                    "linear-gradient(90deg, #3b82f6 0%, #2563eb 30%, #06b6d4 60%, #0891b2 100%)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Comprehensive digital solutions to elevate your brand
              </motion.p>
            </div>
          </SectionReveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Logo Design",
                description: "Distinctive brand identities that make your business stand out.",
                image: "/brand/logo-design.jpg",
              },
              {
                title: "AI Photo Editing",
                description: "Professional image enhancement powered by cutting-edge AI technology.",
                image: "/brand/ai-photo-editing.jpg",
              },
              {
                title: "Video Creation",
                description: "Cinematic video content that captivates and converts your audience.",
                image: "/brand/video-creation.jpg",
              },
              {
                title: "Website Development",
                description: "Fast, responsive websites with zero errors and seamless functionality.",
                image: "/brand/website-development.jpg",
              },
              {
                title: "Error Fixing",
                description: "Quick resolution of website issues, bugs, and performance problems.",
                image: "/brand/error-fixing.jpg",
              },
            ].map((service, index) => (
              <SectionReveal key={service.title} delay={index * 0.1}>
                <Link
                  href="/services"
                  className="group relative h-[220px] sm:h-[260px] rounded-2xl overflow-hidden block
                             bg-cover bg-center
                             transition-transform duration-500
                             hover:-translate-y-2 hover:scale-[1.02]"
                  style={{ backgroundImage: `url('${service.image}')` }}
                  data-cursor="image"
                >
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/65 group-hover:bg-black/50 transition-colors duration-500" />
                  
                  {/* Gradient edge on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                       style={{
                         background: "linear-gradient(135deg, rgba(34,211,238,0.15), transparent 50%)",
                       }}
                  />

                  {/* Content */}
                  <div className="relative z-10 h-full p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-sm text-white/80">
                      {service.description}
                    </p>
                    <span className="mt-4 inline-block text-sm font-semibold text-cyan-400">
                      Explore →
                    </span>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Marquee Strip */}
      <section className="relative border-y border-white/10 py-12 overflow-hidden bg-gradient-to-r from-black via-black/95 to-black">
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            background: "linear-gradient(90deg, rgba(155,28,28,0.3), rgba(201,124,45,0.3), rgba(245,193,108,0.3), rgba(155,28,28,0.3))",
            backgroundSize: "200% 100%",
          }}
        />
        
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-16"
            animate={{
              x: [0, -50 * 6 * 20],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {Array.from({ length: 14 }).map((_, i) => (
              <div key={i} className="flex gap-16 whitespace-nowrap">
                {[
                  "Logo Design",
                  "AI Photo Editing",
                  "Video Creation",
                  "Web Dev",
                  "Error Fixing",
                  "Content",
                ].map((item, idx) => (
                  <motion.span
                    key={idx}
                    className="text-2xl font-bold sm:text-3xl md:text-4xl"
                    style={{
                      backgroundImage: "linear-gradient(90deg, #9b1c1c 0%, #c97c2d 50%, #f5c16c 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {item} •
                  </motion.span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Work Preview */}
      <section className="py-32" data-cursor-color="#06b6d4">
        <Container>
          <SectionReveal>
            <div className="mb-16 text-center">
              <motion.div
                className="relative inline-block"
                initial={
                  shouldReduceMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30, scale: 0.95 }
                }
                whileInView={
                  shouldReduceMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 1, y: 0, scale: 1 }
                }
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.h2
                  className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-4 text-white relative z-10"
                  style={{ fontFamily: 'var(--font-playfair), serif' }}
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          textShadow: [
                            "0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.2)",
                            "0 0 30px rgba(255,255,255,0.4), 0 0 60px rgba(255,255,255,0.3)",
                            "0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.2)",
                          ],
                        }
                  }
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Featured Work
                </motion.h2>
                {/* Decorative underline with animation */}
                <motion.div
                  className="mx-auto h-1 rounded-full"
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1, scaleX: 0, width: 0 }
                      : { opacity: 0, scaleX: 0, width: 0 }
                  }
                  whileInView={
                    shouldReduceMotion
                      ? { opacity: 1, scaleX: 1, width: "100%" }
                      : { opacity: 1, scaleX: 1, width: "100%" }
                  }
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 1,
                    delay: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)",
                    boxShadow: "0 0 20px rgba(255,255,255,0.5)",
                  }}
                />
              </motion.div>
            </div>
          </SectionReveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Brand Identity Suite",
                category: "Branding",
                result: "Complete visual identity for tech startup",
              },
              {
                title: "E-commerce Platform",
                category: "Web Development",
                result: "High-performance online store with zero errors",
              },
              {
                title: "Product Video Series",
                category: "Video",
                result: "Cinematic product showcases driving engagement",
              },
              {
                title: "AI-Enhanced Portfolio",
                category: "AI Editing",
                result: "Stunning photo edits elevating brand presence",
              },
              {
                title: "Corporate Website",
                category: "Web Development",
                result: "Modern, responsive site with seamless UX",
              },
              {
                title: "Social Media Campaign",
                category: "Content",
                result: "Cohesive visual content across all platforms",
              },
            ].map((project, index) => (
              <SectionReveal key={project.title} delay={index * 0.1}>
                <Link
                  href="/work"
                  className="card-tilt group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-cyan-400/30 hover:bg-white/10"
                  data-cursor="view"
                >
                  <span className="mb-2 block text-sm text-white/60">
                    {project.category}
                  </span>
                  <h3 className="mb-2 text-2xl font-bold">{project.title}</h3>
                  <p className="text-white/70">{project.result}</p>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal delay={0.6}>
            <div className="mt-16 text-center">
              <Link
                href="/work"
                className="link-underline inline-block text-lg font-semibold text-cyan-400"
                data-cursor="link"
              >
                View All Work →
              </Link>
            </div>
          </SectionReveal>
        </Container>
      </section>

      {/* Process */}
      <section className="py-32" data-cursor-color="#ffffff">
        <Container>
          <SectionReveal>
            <div className="mb-16 text-center">
              <motion.div
                className="relative inline-block"
                initial={
                  shouldReduceMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30, scale: 0.95 }
                }
                whileInView={
                  shouldReduceMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 1, y: 0, scale: 1 }
                }
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.h2
                  className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-4 text-white relative z-10"
                  style={{ fontFamily: 'var(--font-playfair), serif' }}
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          textShadow: [
                            "0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.2)",
                            "0 0 30px rgba(255,255,255,0.4), 0 0 60px rgba(255,255,255,0.3)",
                            "0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.2)",
                          ],
                        }
                  }
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Our Process
                </motion.h2>
                {/* Decorative underline with animation */}
                <motion.div
                  className="mx-auto h-1 rounded-full"
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1, scaleX: 0, width: 0 }
                      : { opacity: 0, scaleX: 0, width: 0 }
                  }
                  whileInView={
                    shouldReduceMotion
                      ? { opacity: 1, scaleX: 1, width: "100%" }
                      : { opacity: 1, scaleX: 1, width: "100%" }
                  }
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 1,
                    delay: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)",
                    boxShadow: "0 0 20px rgba(255,255,255,0.5)",
                  }}
                />
              </motion.div>
            </div>
          </SectionReveal>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discover",
                description:
                  "We dive deep into your brand, goals, and vision to understand what makes you unique.",
              },
              {
                step: "02",
                title: "Design",
                description:
                  "Creative concepts and solutions crafted with precision and attention to detail.",
              },
              {
                step: "03",
                title: "Build",
                description:
                  "Development and implementation with clean code and zero-error standards.",
              },
              {
                step: "04",
                title: "Launch & Support",
                description:
                  "Smooth deployment followed by ongoing support to ensure continued success.",
              },
            ].map((item, index) => (
              <SectionReveal key={item.step} delay={index * 0.15}>
                <div>
                  <span className="mb-4 block text-4xl font-bold text-white/30">
                    {item.step}
                  </span>
                  <h3 className="mb-4 text-2xl font-bold">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-32" data-cursor-color="#dc2626">
        <Container>
          <SectionReveal>
            <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-sm">
              <motion.div
                className="relative inline-block mb-6"
                initial={
                  shouldReduceMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30, scale: 0.95 }
                }
                whileInView={
                  shouldReduceMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 1, y: 0, scale: 1 }
                }
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.h2
                  className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-4 text-white relative z-10"
                  style={{ fontFamily: 'var(--font-playfair), serif' }}
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          textShadow: [
                            "0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.2)",
                            "0 0 30px rgba(255,255,255,0.4), 0 0 60px rgba(255,255,255,0.3)",
                            "0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.2)",
                          ],
                        }
                  }
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Ready to get started?
                </motion.h2>
                {/* Decorative underline with animation */}
                <motion.div
                  className="mx-auto h-1 rounded-full"
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1, scaleX: 0, width: 0 }
                      : { opacity: 0, scaleX: 0, width: 0 }
                  }
                  whileInView={
                    shouldReduceMotion
                      ? { opacity: 1, scaleX: 1, width: "100%" }
                      : { opacity: 1, scaleX: 1, width: "100%" }
                  }
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 1,
                    delay: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)",
                    boxShadow: "0 0 20px rgba(255,255,255,0.5)",
                  }}
                />
              </motion.div>
              <p className="mb-12 text-lg text-white/70 sm:text-xl">
                Let&apos;s create something exceptional together.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href="https://wa.me/0705278929"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-2 border-green-500/50 bg-green-500/10 px-8 py-4 font-semibold backdrop-blur-sm transition-all hover:border-green-500 hover:bg-green-500/20"
                >
                  WhatsApp Us
                </a>
                <a
                  href="mailto:errorzorodigital@gmail.com"
                  className="rounded-full border-2 border-white/30 bg-white/5 px-8 py-4 font-semibold backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/10"
                >
                  Send Email
                </a>
              </div>
            </div>
          </SectionReveal>
        </Container>
      </section>
    </>
  );
}
