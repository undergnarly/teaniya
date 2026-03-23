"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import type { TeawareProduct } from "@/data/types";

const categories = [
  { id: "all", label: "All" },
  { id: "teapot", label: "Teapots" },
  { id: "cup", label: "Cups" },
  { id: "gaiwan", label: "Gaiwan" },
  { id: "set", label: "Sets" },
  { id: "accessories", label: "Accessories" },
];

const teaware: TeawareProduct[] = [
  {
    id: "yixing-dragon",
    name: "Dragon's Breath Teapot",
    artisan: "Master Chen, Yixing",
    description: "Hand-thrown Zisha clay. 180ml capacity, perfect for oolong and pu-erh. Each pour reveals deeper flavors.",
    price: "IDR 2,800,000",
    category: "teapot",
    image: "/images/teaware-yixing.jpg",
  },
  {
    id: "raku-moon",
    name: "Moon Bowl",
    artisan: "Lila Dewi, Ubud",
    description: "Raku-fired tea bowl inspired by Balinese full moon ceremonies. Each piece unique in its glaze patterns.",
    price: "IDR 680,000",
    category: "cup",
    image: "/images/teaware-raku.jpg",
  },
  {
    id: "celadon-gaiwan",
    name: "Celadon Gaiwan",
    artisan: "Jingdezhen Collective",
    description: "Classic celadon glaze on fine porcelain. 150ml, ideal for green and white teas.",
    price: "IDR 520,000",
    category: "gaiwan",
    image: "/images/teaware-gaiwan.jpg",
  },
  {
    id: "travel-set",
    name: "Traveler's Tea Set",
    artisan: "Teaniya Workshop",
    description: "Compact ceramic set: gaiwan, 2 cups, bamboo tray, and carrying case. Tea anywhere.",
    price: "IDR 1,200,000",
    category: "set",
    image: "/images/teaware-travel.jpg",
  },
  {
    id: "bamboo-scoop",
    name: "Bamboo Chashaku Set",
    artisan: "Takeshi Mori, Kyoto",
    description: "Hand-carved bamboo tea scoop and whisk holder. For matcha preparation.",
    price: "IDR 380,000",
    category: "accessories",
    image: "/images/teaware-bamboo.jpg",
  },
  {
    id: "cast-iron",
    name: "Tetsubin Kettle",
    artisan: "Nambu Ironware, Iwate",
    description: "Cast iron kettle with pine needle motif. Enriches water with iron for sweeter tea.",
    price: "IDR 3,200,000",
    category: "teapot",
    image: "/images/teaware-tetsubin.jpg",
  },
  {
    id: "porcelain-cups",
    name: "Tenmoku Cup Pair",
    artisan: "Jian Kiln Revival",
    description: "Oil-spot glaze fired at 1300°C. Each cup reflects light like a starry sky.",
    price: "IDR 920,000",
    category: "cup",
    image: "/images/teaware-tenmoku.jpg",
  },
  {
    id: "gongfu-set",
    name: "Complete Gongfu Set",
    artisan: "Teaniya Curation",
    description: "Yixing teapot, fairness pitcher, 6 cups, tea tray, and tools. Everything to begin your practice.",
    price: "IDR 4,500,000",
    category: "set",
    image: "/images/teaware-gongfu-set.jpg",
  },
];

export default function TeawarePage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? teaware
      : teaware.filter((t) => t.category === activeCategory);

  return (
    <main className="bg-cream">
      <Header variant="dark" />

      {/* Hero */}
      <section className="min-h-[60dvh] flex flex-col justify-end relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/teaware-hero.jpg)" }}
        />
        <div className="absolute inset-0 overlay-forest" />
        <div className="relative z-10 px-8 sm:px-16 lg:px-24 pb-16 sm:pb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-cream/50 text-[11px] tracking-[0.4em] uppercase mb-4"
          >
            Handcrafted
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-serif text-cream text-4xl sm:text-6xl font-normal leading-[1.1]"
          >
            Artisan Teaware
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-cream/60 text-sm font-normal mt-5 max-w-md leading-relaxed"
          >
            Vessels shaped by master hands. Each piece is a conversation between earth, fire, and the tea it will hold.
          </motion.p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 sm:py-24 px-8 sm:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <SectionReveal>
            <div className="flex flex-wrap gap-2 mb-14 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-[12px] tracking-[0.12em] uppercase px-5 py-2 rounded-full border transition-all duration-300 cursor-pointer ${
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

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group cursor-pointer"
                >
                  <div className="rounded-2xl overflow-hidden">
                    <div className="aspect-square overflow-hidden bg-sand/40 rounded-2xl">
                      <div
                        className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                    </div>
                    <div className="pt-5">
                      <h3 className="font-serif text-charcoal text-xl font-light">
                        {item.name}
                      </h3>
                      <p className="text-sage text-[11px] tracking-[0.15em] uppercase mt-1">
                        {item.artisan}
                      </p>
                      <p className="text-charcoal-light text-sm font-normal leading-relaxed mt-3">
                        {item.description}
                      </p>
                      <p className="text-bark font-light mt-3">
                        {item.price}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Artisan story */}
      <section className="py-24 bg-sand/40">
        <div className="max-w-4xl mx-auto px-8 sm:px-16 lg:px-24 text-center">
          <SectionReveal>
            <p className="text-charcoal/40 text-[11px] tracking-[0.4em] uppercase mb-4">
              The Makers
            </p>
            <h2 className="font-serif text-charcoal text-3xl sm:text-4xl font-normal mb-6">
              Every piece has a story
            </h2>
            <p className="text-charcoal-light text-sm font-normal leading-relaxed max-w-2xl mx-auto mb-8">
              We work directly with artisans across Asia — from Yixing clay masters to Balinese ceramicists. Each vessel is chosen not just for beauty, but for how it transforms the tea experience.
            </p>
            <a href="/about" className="btn-primary">
              Meet Our Artisans
            </a>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
