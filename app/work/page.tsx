"use client";

import { useState } from "react";
import Container from "@/components/Container";
import SectionReveal from "@/components/SectionReveal";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Brand Identity Suite",
    category: "Branding",
    result: "Complete visual identity for tech startup",
    tags: ["Branding"],
    featured: true,
  },
  {
    id: 2,
    title: "E-commerce Platform",
    category: "Web",
    result: "High-performance online store with zero errors",
    tags: ["Web"],
  },
  {
    id: 3,
    title: "Product Video Series",
    category: "Video",
    result: "Cinematic product showcases driving engagement",
    tags: ["Video"],
  },
  {
    id: 4,
    title: "AI-Enhanced Portfolio",
    category: "AI Edits",
    result: "Stunning photo edits elevating brand presence",
    tags: ["AI Edits"],
  },
  {
    id: 5,
    title: "Corporate Website",
    category: "Web",
    result: "Modern, responsive site with seamless UX",
    tags: ["Web"],
  },
  {
    id: 6,
    title: "Social Media Campaign",
    category: "Branding",
    result: "Cohesive visual content across all platforms",
    tags: ["Branding"],
  },
  {
    id: 7,
    title: "Fashion Brand Launch",
    category: "Video",
    result: "Launch video campaign with 2M+ views",
    tags: ["Video"],
  },
  {
    id: 8,
    title: "Restaurant Menu Redesign",
    category: "AI Edits",
    result: "Professional food photography enhancement",
    tags: ["AI Edits"],
  },
  {
    id: 9,
    title: "SaaS Dashboard",
    category: "Web",
    result: "Complex web application with zero bugs",
    tags: ["Web"],
  },
];

const categories = ["All", "Branding", "AI Edits", "Video", "Web"];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(activeCategory));

  const featuredProject = projects.find((p) => p.featured);

  return (
    <>
      {/* Hero */}
      <section className="flex min-h-screen items-center justify-center pt-32 pb-20">
        <Container>
          <SectionReveal>
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                Our Work
              </h1>
              <p className="mb-12 text-lg text-white/70 sm:text-xl md:text-2xl">
                Showcasing exceptional results across all our services
              </p>
            </div>
          </SectionReveal>
        </Container>
      </section>

      {/* Featured Case */}
      {featuredProject && (
        <section className="py-16">
          <Container>
            <SectionReveal>
              <div className="card-tilt rounded-2xl border border-cyan-400/30 bg-white/5 p-12 backdrop-blur-sm">
                <span className="mb-2 block text-sm uppercase tracking-wider text-cyan-400">
                  Featured Case
                </span>
                <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
                  {featuredProject.title}
                </h2>
                <p className="mb-6 text-xl text-white/70">
                  {featuredProject.result}
                </p>
                <span className="inline-block rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm">
                  {featuredProject.category}
                </span>
              </div>
            </SectionReveal>
          </Container>
        </section>
      )}

      {/* Filter Tabs */}
      <section className="py-16">
        <Container>
          <SectionReveal>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-6 py-3 font-semibold transition-all ${
                    activeCategory === category
                      ? "bg-cyan-400 text-black"
                      : "border-2 border-white/30 bg-transparent text-white hover:border-white/50 hover:bg-white/5"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </SectionReveal>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="py-16 pb-32">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <SectionReveal key={project.id} delay={index * 0.05}>
                  <div className="card-tilt group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-cyan-400/30 hover:bg-white/10">
                    <span className="mb-2 block text-sm text-white/60">
                      {project.category}
                    </span>
                    <h3 className="mb-2 text-2xl font-bold">{project.title}</h3>
                    <p className="text-white/70">{project.result}</p>
                  </div>
                </SectionReveal>
              ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <Container>
          <SectionReveal>
            <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-sm">
              <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Ready to start your project?
              </h2>
              <p className="mb-12 text-lg text-white/70 sm:text-xl">
                Let's create something exceptional together.
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
