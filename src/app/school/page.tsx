"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import type { CourseOption } from "@/data/types";

const courses: CourseOption[] = [
  {
    id: "intro",
    name: "Tea Foundations",
    duration: "Half Day (4 hours)",
    price: "IDR 850,000",
    description:
      "Your starting point. Learn the six categories of tea, basic brewing parameters, tasting vocabulary, and how to set up your home practice.",
    level: "beginner",
    schedule: "Every Saturday, 9:00 AM",
    image: "/images/school-foundations.jpg",
  },
  {
    id: "gongfu-course",
    name: "Gongfu Brewing Mastery",
    duration: "2 Days",
    price: "IDR 2,400,000",
    description:
      "Deep dive into the Chinese Gongfu method. Water temperature, timing, vessel selection, and the art of reading the leaf across multiple infusions.",
    level: "intermediate",
    schedule: "1st & 2nd weekend of each month",
    image: "/images/school-gongfu.jpg",
  },
  {
    id: "cupping",
    name: "Tea Cupping & Evaluation",
    duration: "Full Day (7 hours)",
    price: "IDR 1,600,000",
    description:
      "Professional tea tasting methodology. Learn to evaluate quality, identify origins, detect flaws, and develop your palate with blind tasting exercises.",
    level: "intermediate",
    schedule: "2nd Sunday of each month",
    image: "/images/school-cupping.jpg",
  },
  {
    id: "japanese",
    name: "Japanese Tea Arts",
    duration: "3 Days",
    price: "IDR 3,500,000",
    description:
      "From sencha to matcha. Explore Japanese tea culture including temae (preparation procedures), wagashi pairing, and the philosophy of ichigo ichie.",
    level: "intermediate",
    schedule: "Monthly, check schedule",
    image: "/images/school-japanese.jpg",
  },
  {
    id: "puerh",
    name: "The World of Pu-erh",
    duration: "Full Day",
    price: "IDR 1,800,000",
    description:
      "Sheng vs. shou, aging science, storage methods, and tasting aged cakes from our cellar. Includes a curated tasting of 8 different vintages.",
    level: "advanced",
    schedule: "Quarterly",
    image: "/images/school-puerh.jpg",
  },
  {
    id: "master",
    name: "Tea Master Intensive",
    duration: "5 Days",
    price: "IDR 8,500,000",
    description:
      "Our most comprehensive program. Tea history, advanced brewing across all traditions, sensory training, and certification. For those pursuing tea professionally.",
    level: "advanced",
    schedule: "By application",
    image: "/images/school-master.jpg",
  },
];

const levelColors = {
  beginner: "text-matcha border-matcha/30",
  intermediate: "text-tea-gold border-tea-gold/30",
  advanced: "text-clay border-clay/30",
};

export default function SchoolPage() {
  return (
    <main className="bg-cream">
      <Header variant="dark" />

      {/* Hero */}
      <section className="min-h-[65dvh] flex flex-col justify-end relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/school-hero.jpg)" }}
        />
        <div className="absolute inset-0 overlay-dark" />
        <div className="relative z-10 px-8 sm:px-16 lg:px-24 pb-16 sm:pb-24 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-cream/50 text-[11px] tracking-[0.4em] uppercase mb-4"
          >
            Learn
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-serif text-cream text-4xl sm:text-6xl font-semibold leading-[1.1]"
          >
            Tea School
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-cream/65 text-base font-medium mt-5 max-w-lg leading-relaxed"
          >
            From your first cup to mastery. Our courses are designed for anyone who believes tea deserves more than a teabag and boiling water.
          </motion.p>
        </div>
      </section>

      {/* Why learn */}
      <section className="py-24 px-8 sm:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <SectionReveal>
            <h2 className="font-serif text-charcoal text-3xl sm:text-4xl font-semibold mb-8">
              Why study tea?
            </h2>
            <p className="text-charcoal-light text-sm font-medium leading-relaxed max-w-2xl mx-auto">
              Tea is one of humanity&apos;s oldest crafts — a practice that weaves together botany, chemistry, history, and philosophy. Learning tea is learning patience. It sharpens your senses, connects you to the natural world, and teaches you that the simplest things often hold the greatest depth.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Courses */}
      <section className="py-24 bg-forest text-cream">
        <div className="max-w-6xl mx-auto px-8 sm:px-16 lg:px-24">
          <SectionReveal>
            <p className="text-cream/40 text-[11px] tracking-[0.4em] uppercase mb-4 text-center">
              Courses
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-center mb-16">
              Find your path
            </h2>
          </SectionReveal>

          <div className="space-y-6">
            {courses.map((course, i) => (
              <SectionReveal key={course.id} delay={i * 0.08}>
                <div className="bg-cream/5 rounded-2xl overflow-hidden border border-cream/10 hover:border-cream/20 transition-colors duration-500">
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div
                      className="aspect-[16/10] lg:aspect-auto bg-cover bg-center"
                      style={{ backgroundImage: `url(${course.image})` }}
                    />
                    <div className="p-8 lg:col-span-2">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="font-serif text-xl font-medium">
                            {course.name}
                          </h3>
                          <div className="flex items-center gap-3 mt-2">
                            <span className="text-cream/40 text-[11px] tracking-[0.15em] uppercase">
                              {course.duration}
                            </span>
                            <span
                              className={`text-[10px] tracking-[0.12em] uppercase border rounded-full px-3 py-0.5 ${levelColors[course.level]}`}
                            >
                              {course.level}
                            </span>
                          </div>
                        </div>
                        <span className="text-clay-light text-lg font-light">
                          {course.price}
                        </span>
                      </div>
                      <p className="text-cream/55 text-sm font-medium leading-relaxed my-4">
                        {course.description}
                      </p>
                      <p className="text-cream/35 text-[11px] tracking-[0.1em] uppercase mb-5">
                        Schedule: {course.schedule}
                      </p>
                      <button className="btn-outline">
                        Enroll
                      </button>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Private */}
      <section className="py-24 px-8 sm:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <SectionReveal>
            <p className="text-charcoal/40 text-[11px] tracking-[0.4em] uppercase mb-4">
              Custom Learning
            </p>
            <h2 className="font-serif text-charcoal text-3xl sm:text-4xl font-semibold mb-6">
              Private Tuition
            </h2>
            <p className="text-charcoal-light text-sm font-medium leading-relaxed max-w-xl mx-auto mb-8">
              Want something tailored? Our tea masters offer one-on-one sessions designed around your interests, level, and goals. Perfect for enthusiasts, professionals, or small groups.
            </p>
            <a href="/contact" className="btn-primary">
              Inquire About Private Lessons
            </a>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
