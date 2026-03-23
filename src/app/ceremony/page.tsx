"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import type { CeremonyOption } from "@/data/types";

const ceremonies: CeremonyOption[] = [
  {
    id: "gongfu",
    name: "Gongfu Tea Ceremony",
    duration: "90 min",
    price: "IDR 650,000",
    description:
      "The art of skilled brewing. Experience multiple infusions of premium oolong or pu-erh, each revealing new layers of flavor. Guided by our tea master in our private tea room.",
    includes: [
      "Welcome tea & introduction",
      "Selection of 2 premium teas",
      "Full Gongfu preparation",
      "Tea tasting notes",
      "Small tea pastries",
    ],
    image: "/images/ceremony-gongfu.jpg",
  },
  {
    id: "matcha",
    name: "Japanese Matcha Ritual",
    duration: "60 min",
    price: "IDR 450,000",
    description:
      "A meditative experience rooted in the Urasenke tradition. Learn the whisking technique, appreciate the silence between sips, and find calm in every movement.",
    includes: [
      "Ceremonial grade matcha",
      "Wagashi (tea sweets)",
      "Guided meditation",
      "Whisking practice",
      "Take-home matcha sample",
    ],
    image: "/images/ceremony-matcha.jpg",
  },
  {
    id: "private",
    name: "Private Tea Journey",
    duration: "2 hours",
    price: "IDR 1,200,000",
    description:
      "An intimate, customized experience for up to 4 guests. Our tea master curates a journey through rare teas paired with Balinese-inspired light bites.",
    includes: [
      "Private tea room",
      "3-4 rare tea selections",
      "Food pairing course",
      "Personal tea consultation",
      "Gift: packaged tea of your choice",
    ],
    image: "/images/ceremony-private.jpg",
  },
  {
    id: "sunset",
    name: "Sunset Tea Meditation",
    duration: "75 min",
    price: "IDR 550,000",
    description:
      "As the Bali sun descends, join us in our garden pavilion for a mindful tea session. Combining breathwork, silence, and slow tea to close the day with presence.",
    includes: [
      "Garden pavilion setting",
      "Guided breathwork",
      "2 calming tea selections",
      "Sound healing elements",
      "Herbal tea to take home",
    ],
    image: "/images/ceremony-sunset.jpg",
  },
];

const steps = [
  { num: "01", title: "Arrive", desc: "Step into our tea space. Leave your shoes, your phone, your hurry at the door." },
  { num: "02", title: "Settle", desc: "We begin with a cleansing cup — a simple tea to quiet the mind and prepare the senses." },
  { num: "03", title: "Experience", desc: "Your tea master guides you through each infusion. Watch, smell, taste, feel." },
  { num: "04", title: "Reflect", desc: "The ceremony closes in silence. A moment to sit with the warmth, the calm, the connection." },
];

export default function CeremonyPage() {
  return (
    <main className="bg-cream">
      <Header variant="dark" />

      {/* Hero */}
      <section className="min-h-[70dvh] flex flex-col justify-end relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/ceremony-hero.jpg)" }}
        />
        <div className="absolute inset-0 overlay-warm" />
        <div className="relative z-10 px-8 sm:px-16 lg:px-24 pb-16 sm:pb-24 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-cream/50 text-[11px] tracking-[0.4em] uppercase mb-4"
          >
            Immersive Experience
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-serif text-cream text-4xl sm:text-6xl font-normal leading-[1.1]"
          >
            Tea Ceremony
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-cream/65 text-base font-normal mt-5 max-w-lg leading-relaxed"
          >
            More than drinking tea — a doorway into stillness. Each ceremony is a practice in attention, patience, and the beauty of simplicity.
          </motion.p>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-8 sm:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <p className="text-charcoal/40 text-[11px] tracking-[0.4em] uppercase mb-4 text-center">
              The Journey
            </p>
            <h2 className="font-serif text-charcoal text-3xl sm:text-4xl font-normal text-center mb-20">
              How a ceremony unfolds
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, i) => (
              <SectionReveal key={step.num} delay={i * 0.1}>
                <div>
                  <span className="font-serif text-sage text-3xl font-light">
                    {step.num}
                  </span>
                  <h3 className="font-serif text-charcoal text-xl font-light mt-3 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-charcoal-light text-sm font-normal leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ceremony options */}
      <section className="py-24 bg-forest text-cream">
        <div className="max-w-6xl mx-auto px-8 sm:px-16 lg:px-24">
          <SectionReveal>
            <p className="text-cream/40 text-[11px] tracking-[0.4em] uppercase mb-4 text-center">
              Choose Your Path
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-center mb-16">
              Ceremony Experiences
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ceremonies.map((c, i) => (
              <SectionReveal key={c.id} delay={i * 0.1}>
                <div className="bg-cream/5 rounded-2xl overflow-hidden border border-cream/10 hover:border-cream/20 transition-colors duration-500">
                  <div
                    className="aspect-[16/9] bg-cover bg-center"
                    style={{ backgroundImage: `url(${c.image})` }}
                  />
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-serif text-xl font-normal">
                        {c.name}
                      </h3>
                      <span className="text-clay-light text-sm whitespace-nowrap ml-4">
                        {c.price}
                      </span>
                    </div>
                    <p className="text-cream/40 text-[11px] tracking-[0.2em] uppercase mb-4">
                      {c.duration}
                    </p>
                    <p className="text-cream/60 text-sm font-normal leading-relaxed mb-5">
                      {c.description}
                    </p>
                    <div className="border-t border-cream/10 pt-5">
                      <p className="text-cream/40 text-[10px] tracking-[0.2em] uppercase mb-3">
                        Includes
                      </p>
                      <ul className="space-y-1.5">
                        {c.includes.map((item) => (
                          <li
                            key={item}
                            className="text-cream/50 text-sm font-normal flex items-start gap-2"
                          >
                            <span className="text-sage-light mt-1 text-xs">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button className="btn-outline mt-6 w-full text-center">
                      Reserve
                    </button>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-8 sm:px-16 lg:px-24 text-center">
        <SectionReveal>
          <h2 className="font-serif text-charcoal text-3xl font-light mb-4">
            Questions about ceremonies?
          </h2>
          <p className="text-charcoal-light text-sm font-normal mb-8 max-w-md mx-auto">
            We&apos;re happy to help you choose the right experience. Reach out anytime.
          </p>
          <a href="/contact" className="btn-primary">
            Get in Touch
          </a>
        </SectionReveal>
      </section>

      <Footer />
    </main>
  );
}
