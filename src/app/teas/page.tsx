"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import type { TeaProduct } from "@/data/types";

const categories = [
  { id: "all", label: "All" },
  { id: "green", label: "Green" },
  { id: "oolong", label: "Oolong" },
  { id: "pu-erh", label: "Pu-erh" },
  { id: "white", label: "White" },
  { id: "black", label: "Black" },
  { id: "herbal", label: "Herbal" },
];

const teas: TeaProduct[] = [
  { id: "gyokuro", name: "Gyokuro Imperial", origin: "Uji, Japan", description: "Shade-grown for 21 days. Deep umami, sweet marine notes, lingering finish.", price: "IDR 280,000", weight: "50g", category: "green", image: "/images/tea-gyokuro.jpg", tags: ["Shade-grown", "Umami"] },
  { id: "longjing", name: "Dragon Well", origin: "Hangzhou, China", description: "Pre-Qingming harvest. Chestnut sweetness with a clean, vegetal character.", price: "IDR 320,000", weight: "50g", category: "green", image: "/images/tea-longjing.jpg", tags: ["Spring Harvest", "Classic"] },
  { id: "tieguanyin", name: "Tie Guan Yin", origin: "Anxi, Fujian", description: "Traditional charcoal-roasted. Orchid fragrance with toasted grain depth.", price: "IDR 260,000", weight: "50g", category: "oolong", image: "/images/tea-tieguanyin.jpg", tags: ["Roasted", "Floral"] },
  { id: "dahongpao", name: "Da Hong Pao", origin: "Wuyi Mountains, China", description: "The legendary rock tea. Mineral, cinnamon bark, dark chocolate complexity.", price: "IDR 450,000", weight: "30g", category: "oolong", image: "/images/tea-dahongpao.jpg", tags: ["Rock Tea", "Rare"] },
  { id: "alishan", name: "Alishan High Mountain", origin: "Chiayi, Taiwan", description: "Grown at 1,400m. Buttery, floral, with notes of lily and cream.", price: "IDR 340,000", weight: "50g", category: "oolong", image: "/images/tea-alishan.jpg", tags: ["High Mountain", "Creamy"] },
  { id: "sheng-puerh", name: "Ancient Tree Sheng", origin: "Yiwu, Yunnan", description: "2018 vintage from 300-year-old trees. Honey, stone fruit, evolving complexity.", price: "IDR 580,000", weight: "100g cake", category: "pu-erh", image: "/images/tea-sheng.jpg", tags: ["Aged", "Ancient Tree"] },
  { id: "shou-puerh", name: "Palace Grade Shou", origin: "Menghai, Yunnan", description: "12 years aged. Smooth, earthy, with dark cocoa and dried date sweetness.", price: "IDR 420,000", weight: "100g cake", category: "pu-erh", image: "/images/tea-shou.jpg", tags: ["Aged 12 Years", "Smooth"] },
  { id: "silver-needle", name: "Silver Needle", origin: "Fuding, Fujian", description: "Pure buds, sun-dried. Delicate honeydew melon and white flower whisper.", price: "IDR 380,000", weight: "30g", category: "white", image: "/images/tea-silver-needle.jpg", tags: ["Bud Only", "Delicate"] },
  { id: "lapsang", name: "Lapsang Souchong", origin: "Wuyi, Fujian", description: "Pine-smoked over longan wood. Campfire, dried longan, subtle sweetness.", price: "IDR 220,000", weight: "50g", category: "black", image: "/images/tea-lapsang.jpg", tags: ["Smoked", "Bold"] },
  { id: "butterfly-pea", name: "Butterfly Pea Blend", origin: "Bali, Indonesia", description: "Local butterfly pea flowers with lemongrass and ginger. Color-changing magic.", price: "IDR 160,000", weight: "40g", category: "herbal", image: "/images/tea-butterfly.jpg", tags: ["Local", "Caffeine-free"] },
];

const TG = "https://t.me/lesxeniya?text=";

export default function TeasPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? teas
      : teas.filter((t) => t.category === activeCategory);

  return (
    <main className="bg-cream">
      <Header variant="dark" />

      {/* Hero */}
      <section className="min-h-[60dvh] flex flex-col justify-end relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/images/teas-hero.jpg)" }} />
        <div className="absolute inset-0 overlay-dark" />
        <div className="relative z-10" style={{ padding: "60px 30px 50px" }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-cream/70 text-[11px] tracking-[0.4em] uppercase mb-4"
          >
            The Collection
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-serif text-cream text-4xl sm:text-6xl font-semibold leading-[1.1]"
          >
            Curated Teas
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-cream/80 text-sm font-medium mt-5 max-w-md leading-relaxed"
          >
            Hand-selected from the world&apos;s finest gardens. Each tea is chosen for its character, origin story, and the craft behind its making.
          </motion.p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section style={{ padding: "60px 30px 80px" }}>
        <div className="max-w-6xl mx-auto">
          <SectionReveal>
            <div className="flex flex-wrap gap-2 mb-14 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-[12px] tracking-[0.12em] uppercase px-5 py-2 rounded-full border border-solid transition-all duration-300 cursor-pointer ${
                    activeCategory === cat.id
                      ? "bg-forest text-cream border-forest"
                      : "bg-transparent text-charcoal/60 border-charcoal/15 hover:border-charcoal/30"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </SectionReveal>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((tea) => (
                <motion.a
                  key={tea.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  href={`${TG}Hello!%20I%20am%20interested%20in%20${encodeURIComponent(tea.name)}%20(${encodeURIComponent(tea.price)})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group no-underline"
                  style={{ color: "inherit" }}
                >
                  <div className="bg-sand/40 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-500">
                    <div className="aspect-[4/3] overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                        style={{ backgroundImage: `url(${tea.image})` }}
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-serif text-charcoal text-xl font-medium">{tea.name}</h3>
                        <span className="text-bark text-sm font-medium whitespace-nowrap ml-4">{tea.price}</span>
                      </div>
                      <p className="text-sage text-[11px] tracking-[0.15em] uppercase mb-3">{tea.origin} · {tea.weight}</p>
                      <p className="text-charcoal-light text-sm font-medium leading-relaxed mb-4">{tea.description}</p>
                      {tea.tags && (
                        <div className="flex flex-wrap gap-1.5">
                          {tea.tags.map((tag) => (
                            <span key={tag} className="text-[10px] tracking-[0.1em] uppercase text-bark/70 border border-solid border-bark/15 rounded-full px-3 py-1">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-forest text-cream text-center" style={{ padding: "80px 30px" }}>
        <SectionReveal>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-4">Can&apos;t decide?</h2>
          <p className="text-cream/60 text-sm font-medium mb-8 max-w-md mx-auto">Visit us for a guided tasting. Our tea masters will help you find your perfect cup.</p>
          <a href="https://t.me/lesxeniya?text=Hello!%20I%20would%20like%20to%20book%20a%20tea%20tasting" target="_blank" rel="noopener noreferrer" className="btn-outline">Book a Tasting</a>
        </SectionReveal>
      </section>

      <Footer />
    </main>
  );
}
