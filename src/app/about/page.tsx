"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";

const team = [
  {
    name: "Wayan Surya",
    role: "Founder & Tea Master",
    bio: "Born in Ubud, trained in Yunnan province. 15 years mastering the Gongfu tradition.",
    image: "/images/team-1.jpg",
  },
  {
    name: "Aiko Tanaka",
    role: "Japanese Tea Specialist",
    bio: "Kyoto-trained in the Urasenke school. Brings the refinement of chanoyu to Bali.",
    image: "/images/team-2.jpg",
  },
  {
    name: "Lila Dewi",
    role: "Ceramicist & Teaware Curator",
    bio: "Balinese potter creating vessels that bridge tradition and contemporary art.",
    image: "/images/team-3.jpg",
  },
];

const values = [
  {
    title: "Origin",
    desc: "Every tea we serve is traced to its source — the garden, the season, the hands that shaped it.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="0.5" />
        <path d="M16 4C16 4 8 12 8 18C8 22.4 11.6 26 16 26C20.4 26 24 22.4 24 18C24 12 16 4 16 4Z" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    ),
  },
  {
    title: "Craft",
    desc: "We honor the artisan — from tea farmers to ceramicists — preserving techniques perfected over centuries.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 28L16 4L24 28" stroke="currentColor" strokeWidth="0.5" />
        <path d="M11 20H21" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    ),
  },
  {
    title: "Presence",
    desc: "Tea is meditation in motion. We create spaces where time slows and attention deepens.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      </svg>
    ),
  },
  {
    title: "Sustainability",
    desc: "We source only from gardens that nurture the land. Our teaware is made to last generations.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 28V16" stroke="currentColor" strokeWidth="0.5" />
        <path d="M16 16C16 16 10 14 10 8C14 8 16 12 16 16Z" stroke="currentColor" strokeWidth="0.5" />
        <path d="M16 16C16 16 22 14 22 8C18 8 16 12 16 16Z" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <main className="bg-cream">
      <Header variant="dark" />

      {/* Hero */}
      <section className="min-h-[80dvh] flex flex-col justify-end relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/about-hero.jpg)",
          }}
        />
        <div className="absolute inset-0 overlay-dark" />
        <div className="relative z-10 px-8 sm:px-16 lg:px-24 pb-16 sm:pb-24 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-cream/50 text-[11px] tracking-[0.4em] uppercase mb-4"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-serif text-cream text-4xl sm:text-6xl font-normal leading-[1.1]"
          >
            Born from a love of tea,
            <br />
            rooted in Bali
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 sm:py-32 px-8 sm:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="font-serif text-charcoal text-3xl sm:text-4xl font-normal leading-[1.2] mb-8">
                  Where ancient wisdom meets island serenity
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-charcoal-light text-sm leading-relaxed">
                  Teaniya was born in 2019 when founder Wayan Surya returned to Bali after years studying tea in the mountains of Yunnan, the gardens of Uji, and the oolong terraces of Alishan.
                </p>
                <p className="text-charcoal-light text-sm leading-relaxed">
                  He envisioned a space where the discipline and beauty of East Asian tea culture could merge with the warmth and openness of Balinese hospitality — a place where locals, travelers, and tea seekers could sit together, slow down, and share in something meaningful.
                </p>
                <p className="text-charcoal-light text-sm leading-relaxed">
                  Today, Teaniya is more than a tea house. It is a community, a school, and a bridge between cultures — all connected by the simple act of preparing and drinking tea with intention.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-forest text-cream">
        <div className="max-w-6xl mx-auto px-8 sm:px-16 lg:px-24">
          <SectionReveal>
            <p className="text-cream/40 text-[11px] tracking-[0.4em] uppercase mb-4 text-center">
              Our Philosophy
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-center mb-20">
              What guides us
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((value, i) => (
              <SectionReveal key={value.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="flex justify-center mb-6 text-cream/60">
                    {value.icon}
                  </div>
                  <h3 className="font-serif text-xl font-normal tracking-[0.05em] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-cream/50 text-sm font-normal leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 sm:py-32 px-8 sm:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <SectionReveal>
            <p className="text-charcoal/40 text-[11px] tracking-[0.4em] uppercase mb-4 text-center">
              The People
            </p>
            <h2 className="font-serif text-charcoal text-3xl sm:text-5xl font-normal text-center mb-20">
              Meet our tea family
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <SectionReveal key={member.name} delay={i * 0.12}>
                <div className="group">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-sand mb-5">
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                      style={{ backgroundImage: `url(${member.image})` }}
                    />
                  </div>
                  <h3 className="font-serif text-xl font-normal text-charcoal">
                    {member.name}
                  </h3>
                  <p className="text-sage text-[11px] tracking-[0.2em] uppercase mt-1">
                    {member.role}
                  </p>
                  <p className="text-charcoal-light text-sm font-normal mt-3 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-sand/50">
        <div className="max-w-2xl mx-auto text-center px-6">
          <SectionReveal>
            <h2 className="font-serif text-charcoal text-3xl sm:text-4xl font-normal mb-6">
              Come sit with us
            </h2>
            <p className="text-charcoal-light text-sm font-normal mb-8 max-w-md mx-auto leading-relaxed">
              Whether you are a seasoned tea drinker or simply curious, our doors are always open. Let us pour you a cup.
            </p>
            <a href="/contact" className="btn-primary">
              Visit Teaniya
            </a>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
