"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Container from "@/components/Container";
import SectionReveal from "@/components/SectionReveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission (no backend)
    setTimeout(() => {
      setShowToast(true);
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
      setTimeout(() => setShowToast(false), 3000);
    }, 500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Hero */}
      <section className="flex min-h-screen items-center justify-center pt-32 pb-20" data-cursor-color="#dc2626">
        <Container>
          <SectionReveal>
            <div className="mx-auto max-w-4xl text-center">
              <Image
                src="/brand/logo.jpg"
                alt="ErrorZero Digital"
                width={180}
                height={60}
                className="mx-auto mb-8 h-auto w-auto"
              />
              <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                Get In Touch
              </h1>
              <p className="mb-12 text-lg text-white/70 sm:text-xl md:text-2xl">
                Ready to start your project? Let&apos;s discuss how we can help.
              </p>
            </div>
          </SectionReveal>
        </Container>
      </section>

      {/* Contact Form & Info */}
      <section className="py-32">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-16 lg:grid-cols-2">
              {/* Contact Form */}
              <SectionReveal>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                  <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
                    Send us a message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-semibold"
                      >
                        Name <span className="text-white/50">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold"
                      >
                        Email <span className="text-white/50">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-semibold"
                      >
                        Message <span className="text-white/50">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-full bg-white px-8 py-4 font-semibold text-black transition-transform hover:scale-105 focus:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </div>
              </SectionReveal>

              {/* Contact Info */}
              <SectionReveal delay={0.2}>
                <div className="space-y-8">
                  <div>
                    <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
                      Direct Contact
                    </h2>
                    <p className="mb-8 text-white/70">
                      Prefer to reach out directly? Use any of these methods:
                    </p>
                  </div>

                  {/* Contact Cards */}
                  <div className="space-y-4">
                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/0705278929"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-tilt group block rounded-2xl border border-green-500/30 bg-green-500/10 p-6 backdrop-blur-sm transition-all hover:border-green-500/50 hover:bg-green-500/20"
                    >
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-green-500/20 p-3">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="text-green-400"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold">WhatsApp</h3>
                          <p className="text-sm text-white/70">0705278929</p>
                        </div>
                      </div>
                    </a>

                    {/* Email */}
                    <a
                      href="mailto:errorzorodigital@gmail.com"
                      className="card-tilt group block rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-cyan-400/30 hover:bg-white/10"
                    >
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-cyan-400/20 p-3">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-cyan-400"
                          >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold">Email</h3>
                          <p className="text-sm text-white/70">
                            errorzorodigital@gmail.com
                          </p>
                        </div>
                      </div>
                    </a>

                    {/* Facebook */}
                    <a
                      href="https://web.facebook.com/share/p/1C3zHvYNUy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-tilt group block rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-blue-500/30 hover:bg-blue-500/10"
                    >
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-blue-500/20 p-3">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="text-blue-400"
                          >
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold">Facebook</h3>
                          <p className="text-sm text-white/70">Visit our page</p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                    <p className="text-sm text-white/60">
                      <strong>Response Time:</strong> We typically respond within 24
                      hours during business days.
                    </p>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-8 right-8 z-50 rounded-lg border border-white/20 bg-black/90 px-6 py-4 shadow-lg backdrop-blur-sm">
          <p className="font-semibold text-white">Message received!</p>
          <p className="mt-1 text-sm text-white/70">
            We will reply soon.
          </p>
        </div>
      )}
    </>
  );
}
