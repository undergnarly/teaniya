"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Footer() {
  return (
    <footer className="bg-forest text-cream py-20 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <motion.div
            custom={0}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="font-serif text-2xl font-normal tracking-[0.15em] font-light">
              TEANIYA
            </span>
            <p className="text-cream/40 text-[10px] tracking-[0.3em] uppercase mt-1">
              Tea House · Bali
            </p>
            <p className="text-cream/50 text-sm font-normal mt-4 leading-relaxed max-w-xs">
              A sanctuary for tea lovers in the heart of Bali. Discover rare teas, artisan teaware, and the ancient art of tea ceremony.
            </p>
          </motion.div>

          {/* Explore */}
          <motion.div
            custom={1}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="text-[11px] tracking-[0.3em] uppercase text-cream/40 mb-5">
              Explore
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Tea Collection", href: "/teas" },
                { label: "Teaware", href: "/teaware" },
                { label: "Tea Ceremony", href: "/ceremony" },
                { label: "Tea School", href: "/school" },
                { label: "Journal", href: "/journal" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-cream/60 text-sm hover:text-cream transition-colors no-underline"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Visit */}
          <motion.div
            custom={2}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="text-[11px] tracking-[0.3em] uppercase text-cream/40 mb-5">
              Visit Us
            </h4>
            <div className="text-cream/60 text-sm font-normal space-y-3">
              <p>Jl. Raya Ubud No. 88<br />Ubud, Bali 80571</p>
              <p>Open Daily<br />9:00 — 21:00</p>
              <p>
                <a href="tel:+6281234567890" className="text-cream/60 hover:text-cream transition-colors no-underline">
                  +62 812 3456 7890
                </a>
              </p>
            </div>
          </motion.div>

          {/* Connect */}
          <motion.div
            custom={3}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="text-[11px] tracking-[0.3em] uppercase text-cream/40 mb-5">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-cream/60 text-sm hover:text-cream transition-colors no-underline">
                Instagram
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-cream/60 text-sm hover:text-cream transition-colors no-underline">
                WhatsApp
              </a>
              <a href="mailto:hello@teaniya.com" className="text-cream/60 text-sm hover:text-cream transition-colors no-underline">
                hello@teaniya.com
              </a>
            </div>

            <div className="mt-8">
              <h4 className="text-[11px] tracking-[0.3em] uppercase text-cream/40 mb-3">
                Newsletter
              </h4>
              <div className="flex gap-0">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-cream/10 text-cream text-sm px-4 py-2.5 rounded-l-full border border-cream/15 border-r-0 outline-none placeholder:text-cream/30 w-full focus:border-cream/30 transition-colors"
                />
                <button className="bg-cream/15 text-cream text-[11px] tracking-[0.1em] uppercase px-5 py-2.5 rounded-r-full border border-cream/15 border-l-0 hover:bg-cream/25 transition-colors cursor-pointer">
                  Join
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/25 text-[11px] tracking-[0.15em]">
            © 2026 Teaniya. All rights reserved.
          </p>
          <div className="flex gap-6 text-cream/25 text-[11px] tracking-[0.1em]">
            <Link href="/about" className="text-cream/25 hover:text-cream/50 transition-colors no-underline">
              Privacy
            </Link>
            <Link href="/about" className="text-cream/25 hover:text-cream/50 transition-colors no-underline">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
