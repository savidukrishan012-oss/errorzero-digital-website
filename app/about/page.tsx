import Image from "next/image";
import Container from "@/components/Container";
import SectionReveal from "@/components/SectionReveal";
import Link from "next/link";

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="flex min-h-screen items-center justify-center pt-32 pb-20">
        <Container>
          <SectionReveal>
            <div className="mx-auto max-w-4xl text-center">
              <Image
                src="/brand/logo.jpg"
                alt="ErrorZero Digital"
                width={200}
                height={67}
                className="mx-auto mb-8 h-auto w-auto"
              />
              <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                About Us
              </h1>
              <p className="mb-12 text-lg text-white/70 sm:text-xl md:text-2xl">
                Delivering exceptional digital solutions with precision and creativity
              </p>
            </div>
          </SectionReveal>
        </Container>
      </section>

      {/* Mission */}
      <section className="py-32">
        <Container>
          <SectionReveal>
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Our Mission
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-white/80 sm:text-xl">
                At ErrorZero Digital, we're committed to delivering digital excellence
                with zero compromises. We combine cutting-edge technology, creative
                vision, and meticulous attention to detail to help brands stand out in
                an increasingly competitive digital landscape.
              </p>
              <p className="text-lg leading-relaxed text-white/80 sm:text-xl">
                Our mission is simple: provide premium digital services that not only
                meet but exceed expectations, ensuring every project is delivered with
                precision, speed, and professionalism.
              </p>
            </div>
          </SectionReveal>
        </Container>
      </section>

      {/* Approach */}
      <section className="py-32">
        <Container>
          <SectionReveal>
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Our Approach
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-white/80 sm:text-xl">
                We believe in a collaborative, client-focused approach. Every project
                begins with understanding your unique needs, goals, and vision. We then
                craft tailored solutions that align perfectly with your brand identity
                and business objectives.
              </p>
              <p className="text-lg leading-relaxed text-white/80 sm:text-xl">
                Quality is at the heart of everything we do. We maintain the highest
                standards in design, development, and service delivery, ensuring every
                deliverable is polished, professional, and ready to make an impact.
              </p>
            </div>
          </SectionReveal>
        </Container>
      </section>

      {/* Values */}
      <section className="py-32">
        <Container>
          <SectionReveal>
            <h2 className="mb-16 text-center text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Our Values
            </h2>
          </SectionReveal>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Quality",
                description:
                  "We never compromise on quality. Every project is executed with precision and attention to detail, ensuring zero errors and exceptional results.",
              },
              {
                title: "Speed",
                description:
                  "We understand the importance of timely communication and quick turnaround times. Your deadlines are our priorities.",
              },
              {
                title: "Professional Service",
                description:
                  "We maintain the highest standards of professionalism in every interaction, from initial consultation to final delivery and beyond.",
              },
            ].map((value, index) => (
              <SectionReveal key={value.title} delay={index * 0.1}>
                <div className="card-tilt rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                  <h3 className="mb-4 text-2xl font-bold">{value.title}</h3>
                  <p className="text-white/70">{value.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Why ErrorZero */}
      <section className="py-32">
        <Container>
          <SectionReveal>
            <h2 className="mb-16 text-center text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Why ErrorZero Digital?
            </h2>
          </SectionReveal>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "Zero Errors Guarantee",
                description:
                  "We test everything thoroughly to ensure your project is flawless before delivery.",
              },
              {
                title: "Fast Response Times",
                description:
                  "Get quick replies and fast turnaround times without compromising on quality.",
              },
              {
                title: "Modern Solutions",
                description:
                  "We use the latest tools and technologies to deliver cutting-edge results.",
              },
            ].map((item, index) => (
              <SectionReveal key={item.title} delay={index * 0.1}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
                  <h3 className="mb-4 text-2xl font-bold">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-32">
        <Container>
          <SectionReveal>
            <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-sm">
              <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Let's Work Together
              </h2>
              <p className="mb-12 text-lg text-white/70 sm:text-xl">
                Ready to elevate your digital presence? Get in touch today.
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
                <Link
                  href="/contact"
                  className="rounded-full border-2 border-white/30 bg-white/5 px-8 py-4 font-semibold backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/10"
                >
                  Contact Form
                </Link>
              </div>
            </div>
          </SectionReveal>
        </Container>
      </section>
    </>
  );
}
