"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import type { JournalEntry } from "@/data/types";

const entries: JournalEntry[] = [
  {
    id: "1",
    title: "The 5,000-Year Journey of Tea",
    excerpt:
      "From Shen Nung's accidental discovery to the global phenomenon — how a single leaf shaped empires, trade routes, and quiet mornings alike.",
    category: "history",
    date: "March 15, 2026",
    readTime: "8 min read",
    image: "/images/journal-history.jpg",
    slug: "5000-year-journey",
  },
  {
    id: "2",
    title: "Gongfu Cha: A Beginner's Guide",
    excerpt:
      "The Chinese art of skilled brewing isn't just technique — it's a way of being present. Here's everything you need to start your practice.",
    category: "brewing",
    date: "March 8, 2026",
    readTime: "6 min read",
    image: "/images/journal-gongfu.jpg",
    slug: "gongfu-beginners-guide",
  },
  {
    id: "3",
    title: "Understanding Water Temperature",
    excerpt:
      "The difference between a good cup and a transcendent one often comes down to degrees. A deep dive into water and its relationship with tea.",
    category: "brewing",
    date: "February 28, 2026",
    readTime: "5 min read",
    image: "/images/journal-water.jpg",
    slug: "water-temperature",
  },
  {
    id: "4",
    title: "The Tea Gardens of Alishan",
    excerpt:
      "At 1,400 meters above sea level, where clouds kiss the soil, Taiwan's most prized oolongs grow in misty silence. A travel diary from the mountains.",
    category: "travel",
    date: "February 20, 2026",
    readTime: "10 min read",
    image: "/images/journal-alishan.jpg",
    slug: "alishan-gardens",
  },
  {
    id: "5",
    title: "Wabi-Sabi and the Tea Bowl",
    excerpt:
      "In Japanese tea culture, imperfection is beauty. How the aesthetic philosophy of wabi-sabi shapes the ceramics, spaces, and spirit of chanoyu.",
    category: "culture",
    date: "February 12, 2026",
    readTime: "7 min read",
    image: "/images/journal-wabisabi.jpg",
    slug: "wabi-sabi-tea-bowl",
  },
  {
    id: "6",
    title: "Cold Brew Tea: Summer's Secret",
    excerpt:
      "Forget everything you know about iced tea. Cold brewing unlocks flavors that heat never touches — sweet, smooth, and impossibly refreshing.",
    category: "recipes",
    date: "February 5, 2026",
    readTime: "4 min read",
    image: "/images/journal-coldbrew.jpg",
    slug: "cold-brew-tea",
  },
  {
    id: "7",
    title: "The Aging Mystery of Pu-erh",
    excerpt:
      "Like fine wine, pu-erh transforms with time. But what actually happens inside a tea cake over decades? The science and soul of aging tea.",
    category: "culture",
    date: "January 28, 2026",
    readTime: "9 min read",
    image: "/images/journal-puerh.jpg",
    slug: "aging-puerh",
  },
  {
    id: "8",
    title: "Matcha at Home: The Complete Ritual",
    excerpt:
      "You don't need a tearoom to make perfect matcha. With the right tools and mindset, your kitchen becomes a place of meditation.",
    category: "recipes",
    date: "January 20, 2026",
    readTime: "5 min read",
    image: "/images/journal-matcha.jpg",
    slug: "matcha-at-home",
  },
];

const categoryLabels: Record<string, string> = {
  history: "History",
  brewing: "Brewing",
  culture: "Culture",
  recipes: "Recipes",
  travel: "Travel",
};

const categoryColors: Record<string, string> = {
  history: "text-bark border-bark/20",
  brewing: "text-sage border-sage/20",
  culture: "text-clay border-clay/20",
  recipes: "text-matcha border-matcha/20",
  travel: "text-tea-gold border-tea-gold/20",
};

export default function JournalPage() {
  return (
    <main className="bg-cream">
      <Header variant="dark" />

      {/* Hero */}
      <section className="min-h-[55dvh] flex flex-col justify-end relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/journal-hero.jpg)" }}
        />
        <div className="absolute inset-0 overlay-dark" />
        <div className="relative z-10 px-8 sm:px-16 lg:px-24 pb-16 sm:pb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-cream/50 text-[11px] tracking-[0.4em] uppercase mb-4"
          >
            Stories & Knowledge
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-serif text-cream text-4xl sm:text-6xl font-normal leading-[1.1]"
          >
            The Journal
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-cream/60 text-sm font-normal mt-5 max-w-md leading-relaxed"
          >
            Explorations in tea culture, brewing wisdom, origin stories, and the quiet philosophy of the leaf.
          </motion.p>
        </div>
      </section>

      {/* Featured article */}
      <section className="py-16 sm:py-24 px-8 sm:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <SectionReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-sand/50">
                <div
                  className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url(${entries[0].image})` }}
                />
              </div>
              <div className="lg:pl-4">
                <span
                  className={`text-[10px] tracking-[0.15em] uppercase border rounded-full px-3 py-1 ${categoryColors[entries[0].category]}`}
                >
                  {categoryLabels[entries[0].category]}
                </span>
                <h2 className="font-serif text-charcoal text-3xl sm:text-4xl font-normal mt-4 mb-4 leading-[1.2]">
                  {entries[0].title}
                </h2>
                <p className="text-charcoal-light text-sm font-normal leading-relaxed mb-4">
                  {entries[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-charcoal/40 text-[11px] tracking-[0.1em] uppercase">
                  <span>{entries[0].date}</span>
                  <span>·</span>
                  <span>{entries[0].readTime}</span>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Article grid */}
      <section className="pb-24 px-8 sm:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {entries.slice(1).map((entry, i) => (
              <SectionReveal key={entry.id} delay={i * 0.08}>
                <article className="group cursor-pointer">
                  <div className="aspect-[3/2] rounded-2xl overflow-hidden bg-sand/40 mb-5">
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                      style={{ backgroundImage: `url(${entry.image})` }}
                    />
                  </div>
                  <span
                    className={`text-[10px] tracking-[0.15em] uppercase border rounded-full px-3 py-1 ${categoryColors[entry.category]}`}
                  >
                    {categoryLabels[entry.category]}
                  </span>
                  <h3 className="font-serif text-charcoal text-xl font-light mt-3 mb-2 group-hover:text-forest transition-colors">
                    {entry.title}
                  </h3>
                  <p className="text-charcoal-light text-sm font-normal leading-relaxed mb-3">
                    {entry.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-charcoal/35 text-[10px] tracking-[0.1em] uppercase">
                    <span>{entry.date}</span>
                    <span>·</span>
                    <span>{entry.readTime}</span>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-forest text-cream text-center">
        <SectionReveal>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal mb-4">
            Stay with us
          </h2>
          <p className="text-cream/50 text-sm font-normal mb-8 max-w-md mx-auto">
            New stories, brewing tips, and tea discoveries delivered to your inbox. No spam — just leaves and words.
          </p>
          <div className="flex gap-0 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-cream/10 text-cream text-sm px-5 py-3 rounded-l-full border border-cream/15 border-r-0 outline-none placeholder:text-cream/30 w-full focus:border-cream/30 transition-colors"
            />
            <button className="bg-cream/15 text-cream text-[11px] tracking-[0.1em] uppercase px-6 py-3 rounded-r-full border border-cream/15 border-l-0 hover:bg-cream/25 transition-colors cursor-pointer whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </SectionReveal>
      </section>

      <Footer />
    </main>
  );
}
