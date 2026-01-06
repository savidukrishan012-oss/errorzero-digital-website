import Container from "@/components/Container";
import SectionReveal from "@/components/SectionReveal";
import Link from "next/link";

const services = [
  {
    title: "Logo Design",
    description:
      "Create a distinctive visual identity that captures your brand's essence and makes a lasting impression.",
    image: "/brand/logo-design.jpg",
    deliverables: [
      "Primary logo design",
      "Logo variations (horizontal, vertical, icon)",
      "Brand color palette",
      "Typography recommendations",
      "Logo usage guidelines",
    ],
    turnaround: "Typically 5-7 business days",
  },
  {
    title: "AI Photo Editing",
    description:
      "Professional image enhancement powered by cutting-edge AI technology for stunning, polished visuals.",
    image: "/brand/ai-photo-editing.jpg",
    deliverables: [
      "AI-enhanced photo retouching",
      "Color correction and grading",
      "Background removal/replacement",
      "Object removal and cleanup",
      "Batch processing available",
    ],
    turnaround: "Typically 2-3 business days per batch",
  },
  {
    title: "Video Creation",
    description:
      "Cinematic video content that captivates your audience and drives engagement across all platforms.",
    image: "/brand/video-creation.jpg",
    deliverables: [
      "Concept development and storyboarding",
      "Professional video production",
      "Motion graphics and animations",
      "Color grading and audio mixing",
      "Multiple format exports (social, web, broadcast)",
    ],
    turnaround: "Typically 7-14 business days depending on scope",
  },
  {
    title: "Website Development & Error Fixing",
    description:
      "Fast, responsive websites built with clean code and zero errors. We also fix existing site issues quickly.",
    image: "/brand/website-development.jpg",
    deliverables: [
      "Custom website development",
      "Responsive design (mobile, tablet, desktop)",
      "Performance optimization",
      "Bug fixing and error resolution",
      "SEO-friendly structure",
      "Ongoing maintenance support",
    ],
    turnaround: "Development: 2-4 weeks | Error fixes: 24-48 hours",
  },
  {
    title: "Error Fixing",
    description:
      "Quick resolution of website issues, bugs, and performance problems with expert debugging.",
    image: "/brand/error-fixing.jpg",
    deliverables: [
      "Bug identification and resolution",
      "Performance optimization",
      "Code debugging",
      "Error log analysis",
      "Quick turnaround fixes",
    ],
    turnaround: "Typically 24-48 hours",
  },
];

export default function Services() {
  return (
    <>
              {/* Hero */}
              <section className="flex min-h-screen items-center justify-center pt-32 pb-20" data-cursor-color="#ffffff">
        <Container>
          <SectionReveal>
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                Our Services
              </h1>
              <p className="mb-12 text-lg text-white/70 sm:text-xl md:text-2xl">
                Comprehensive digital solutions to elevate your brand
              </p>
            </div>
          </SectionReveal>
        </Container>
      </section>

      {/* Services Grid with Background Images */}
      <section className="py-32">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <SectionReveal key={service.title} delay={index * 0.1}>
                <div
                  className="group relative h-[220px] sm:h-[260px] rounded-2xl overflow-hidden
                             bg-cover bg-center
                             transition-transform duration-500
                             hover:-translate-y-2 hover:scale-[1.02]"
                  style={{ backgroundImage: `url('${service.image}')` }}
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
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Detailed Services List */}
      <section className="py-32">
        <Container>
          <div className="space-y-32">
            {services.map((service, index) => (
              <SectionReveal key={service.title} delay={index * 0.1}>
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                  <div>
                    <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                      {service.title}
                    </h2>
                    <p className="mb-8 text-lg text-white/70 sm:text-xl">
                      {service.description}
                    </p>
                    <div className="mb-6">
                      <h3 className="mb-4 text-xl font-semibold">Deliverables:</h3>
                      <ul className="space-y-2 text-white/70">
                        {service.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                      <p className="text-sm text-white/60">Typical turnaround:</p>
                      <p className="mt-1 font-semibold">{service.turnaround}</p>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm lg:p-12">
                    <h3 className="mb-4 text-2xl font-bold">How to get started</h3>
                    <p className="mb-6 text-white/70">
                      Ready to begin? Contact us to discuss your project requirements
                      and we&apos;ll provide a custom quote tailored to your needs.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-block rounded-full bg-white px-8 py-4 font-semibold text-black transition-transform hover:scale-105 focus:scale-105"
                    >
                      Get Started
                    </Link>
                  </div>
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
                Need something custom?
              </h2>
              <p className="mb-12 text-lg text-white/70 sm:text-xl">
                We&apos;re always open to discussing unique projects and custom solutions.
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
