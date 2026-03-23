"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "Teas", href: "/teas" },
  { label: "Teaware", href: "/teaware" },
  { label: "Ceremony", href: "/ceremony" },
  { label: "School", href: "/school" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
];

interface HeaderProps {
  variant?: "light" | "dark";
}

export default function Header({ variant = "light" }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const isLight = variant === "light";
  const textColor = isLight ? "text-cream" : "text-charcoal";
  const logoColor = isLight ? "text-cream" : "text-forest";

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="fixed z-50 flex items-center justify-between"
        style={{ left: 30, right: 30, padding: "16px 0" }}
      >
        <Link href="/" className={`${logoColor} no-underline`}>
          <div className="flex flex-col items-start">
            <span
              className="font-serif text-2xl sm:text-3xl font-normal tracking-[0.15em]"
              style={{ lineHeight: 1 }}
            >
              TEANIYA
            </span>
            <span
              className={`text-[9px] tracking-[0.35em] uppercase mt-1 ${isLight ? "text-cream/50" : "text-charcoal/40"}`}
            >
              Tea House · Bali
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${textColor} text-[13px] tracking-[0.1em] uppercase no-underline opacity-70 hover:opacity-100 transition-opacity duration-300`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`${isLight ? "border-cream/30 text-cream hover:bg-cream/10" : "border-charcoal/20 text-charcoal hover:bg-charcoal/5"} border rounded-full px-6 py-2 text-[12px] tracking-[0.12em] uppercase no-underline transition-all duration-300`}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className={`block w-6 h-[1.5px] ${isLight ? "bg-cream" : "bg-charcoal"} transition-colors`}
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className={`block w-6 h-[1.5px] ${isLight ? "bg-cream" : "bg-charcoal"} transition-colors`}
          />
          <motion.span
            animate={
              menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }
            }
            className={`block w-6 h-[1.5px] ${isLight ? "bg-cream" : "bg-charcoal"} transition-colors`}
          />
        </button>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <MobileMenu
            links={navLinks}
            onClose={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
