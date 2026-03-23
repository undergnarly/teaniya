"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface MobileMenuProps {
  links: { label: string; href: string }[];
  onClose: () => void;
}

export default function MobileMenu({ links, onClose }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-40 bg-forest flex flex-col items-center justify-center"
    >
      <nav className="flex flex-col items-center gap-6">
        {links.map((link, i) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
          >
            <Link
              href={link.href}
              onClick={onClose}
              className="text-cream font-serif text-3xl font-light tracking-[0.1em] no-underline hover:text-clay-light transition-colors duration-300"
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ delay: 0.1 + links.length * 0.06, duration: 0.5 }}
          className="mt-4"
        >
          <Link
            href="/contact"
            onClick={onClose}
            className="btn-outline"
          >
            Contact Us
          </Link>
        </motion.div>
      </nav>

      {/* Decorative tea leaf */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <svg width="60" height="120" viewBox="0 0 60 120" className="botanical-line" style={{ opacity: 1 }}>
          <path d="M30 120 C30 120 30 80 30 60 C30 40 10 20 30 0 C50 20 30 40 30 60" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-cream" />
          <path d="M30 90 C20 80 8 70 15 55" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-cream" />
          <path d="M30 75 C40 65 52 55 45 40" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-cream" />
        </svg>
      </motion.div>
    </motion.div>
  );
}
