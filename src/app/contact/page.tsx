"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";

export default function ContactPage() {
  return (
    <main className="bg-cream">
      <Header variant="dark" />

      {/* Hero */}
      <section className="min-h-[50dvh] flex flex-col justify-end relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/contact-hero.jpg)" }}
        />
        <div className="absolute inset-0 overlay-forest" />
        <div className="relative z-10 px-8 sm:px-16 lg:px-24 pb-16 sm:pb-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-serif text-cream text-4xl sm:text-6xl font-semibold leading-[1.1]"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-cream/60 text-sm font-medium mt-5 max-w-md"
          >
            We&apos;d love to hear from you. Whether it&apos;s a question, a booking, or just to say hello over tea.
          </motion.p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-24 px-8 sm:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <SectionReveal>
              <div>
                <h2 className="font-serif text-charcoal text-2xl font-medium mb-8">
                  Send us a message
                </h2>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] tracking-[0.15em] uppercase text-charcoal/50 mb-2 block">
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full bg-transparent border-b border-charcoal/15 py-3 text-charcoal text-sm outline-none focus:border-forest transition-colors placeholder:text-charcoal/25"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] tracking-[0.15em] uppercase text-charcoal/50 mb-2 block">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full bg-transparent border-b border-charcoal/15 py-3 text-charcoal text-sm outline-none focus:border-forest transition-colors placeholder:text-charcoal/25"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[11px] tracking-[0.15em] uppercase text-charcoal/50 mb-2 block">
                      Subject
                    </label>
                    <select className="w-full bg-transparent border-b border-charcoal/15 py-3 text-charcoal text-sm outline-none focus:border-forest transition-colors cursor-pointer appearance-none">
                      <option>General Inquiry</option>
                      <option>Ceremony Booking</option>
                      <option>School Enrollment</option>
                      <option>Tea Orders</option>
                      <option>Wholesale</option>
                      <option>Collaboration</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] tracking-[0.15em] uppercase text-charcoal/50 mb-2 block">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="w-full bg-transparent border-b border-charcoal/15 py-3 text-charcoal text-sm outline-none focus:border-forest transition-colors resize-none placeholder:text-charcoal/25"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>
                  <button type="submit" className="btn-primary">
                    Send Message
                  </button>
                </form>
              </div>
            </SectionReveal>

            {/* Info */}
            <SectionReveal delay={0.2}>
              <div className="space-y-10 lg:pl-8">
                <div>
                  <h3 className="text-[11px] tracking-[0.3em] uppercase text-charcoal/40 mb-4">
                    Location
                  </h3>
                  <p className="text-charcoal font-light text-sm leading-relaxed">
                    Jl. Raya Ubud No. 88<br />
                    Ubud, Bali 80571<br />
                    Indonesia
                  </p>
                  <div className="mt-4 aspect-[4/3] rounded-2xl overflow-hidden bg-sand/50">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: "url(/images/contact-map.jpg)" }}
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-[11px] tracking-[0.3em] uppercase text-charcoal/40 mb-4">
                    Hours
                  </h3>
                  <div className="text-charcoal font-light text-sm space-y-2">
                    <div className="flex justify-between">
                      <span>Monday — Saturday</span>
                      <span>9:00 — 21:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>10:00 — 18:00</span>
                    </div>
                    <div className="flex justify-between text-charcoal/40">
                      <span>Balinese holidays</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-[11px] tracking-[0.3em] uppercase text-charcoal/40 mb-4">
                    Direct Contact
                  </h3>
                  <div className="space-y-3 text-sm">
                    <a
                      href="tel:+6281234567890"
                      className="block text-charcoal hover:text-forest transition-colors no-underline"
                    >
                      +62 812 3456 7890
                    </a>
                    <a
                      href="mailto:hello@teaniya.com"
                      className="block text-charcoal hover:text-forest transition-colors no-underline"
                    >
                      hello@teaniya.com
                    </a>
                    <a
                      href="https://wa.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-charcoal hover:text-forest transition-colors no-underline"
                    >
                      WhatsApp
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-charcoal hover:text-forest transition-colors no-underline"
                    >
                      @teaniya
                    </a>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
