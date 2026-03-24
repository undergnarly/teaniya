"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { SlideData, SlideCTA } from "@/data/types";

function CTALink({ cta, className }: { cta: SlideCTA; className: string }) {
  if (cta.href.startsWith("http")) {
    return (
      <a href={cta.href} target="_blank" rel="noopener noreferrer" className={className}>
        {cta.label}
      </a>
    );
  }
  return <Link href={cta.href} className={className}>{cta.label}</Link>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.15,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

interface SlideContentProps {
  data: SlideData;
  active: boolean;
  index: number;
  onNext?: () => void;
}

export default function SlideContent({ data, active, onNext }: SlideContentProps) {
  const animState = active ? "visible" : "hidden";

  if (data.variant === "hero") {
    return (
      <div className="relative z-10 h-full flex flex-col justify-end" style={{ gap: 20 }}>
        <div>
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={animState}
            className="text-cream/70 text-[11px] tracking-[0.4em] uppercase mb-4 font-sans"
          >
            {data.subtitle}
          </motion.p>
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={animState}
            className="font-serif text-cream text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.1] max-w-xl"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
          >
            {data.headline}
          </motion.h1>
        </div>
        {data.description && (
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={animState}
            className="text-cream/90 text-sm sm:text-base font-medium max-w-md leading-relaxed"
          >
            {data.description}
          </motion.p>
        )}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate={animState}
          className="flex gap-4 flex-wrap"
        >
          {data.cta && (
            <CTALink cta={data.cta} className="btn-primary" />
          )}
          {data.ctaSecondary && (
            data.ctaSecondary.scrollDown ? (
              <button onClick={onNext} className="btn-outline">
                {data.ctaSecondary.label}
              </button>
            ) : (
              <Link href={data.ctaSecondary.href} className="btn-outline">
                {data.ctaSecondary.label}
              </Link>
            )
          )}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate={animState}
          className="absolute bottom-0 right-0 flex flex-col items-center gap-2 cursor-pointer"
          onClick={onNext}
        >
          <span className="text-cream/60 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
              <path d="M8 4L8 20M8 20L2 14M8 20L14 14" stroke="rgba(245,240,232,0.4)" strokeWidth="1" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  if (data.variant === "experience") {
    return (
      <div className="relative z-10 h-full flex flex-col justify-end" style={{ gap: 20 }}>
        <div>
          {data.price && (
            <motion.span
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={animState}
              className="text-clay-light text-[11px] tracking-[0.4em] uppercase block mb-4 font-sans"
            >
              {data.price}
            </motion.span>
          )}
          {!data.price && data.subtitle && (
            <motion.span
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={animState}
              className="text-cream/70 text-[11px] tracking-[0.4em] uppercase block mb-4 font-sans"
            >
              {data.subtitle}
            </motion.span>
          )}
          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={animState}
            className="font-serif text-cream text-3xl sm:text-5xl font-semibold leading-[1.15] max-w-lg"
            style={{ textShadow: "0 2px 16px rgba(0,0,0,0.3)" }}
          >
            {data.headline}
          </motion.h2>
        </div>
        {data.description && (
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={animState}
            className="text-cream/85 text-sm font-medium max-w-md leading-relaxed"
          >
            {data.description}
          </motion.p>
        )}
        {data.features && (
          <motion.ul
            custom={2.5}
            variants={fadeUp}
            initial="hidden"
            animate={animState}
            className="flex flex-wrap gap-3"
          >
            {data.features.map((f) => (
              <li
                key={f}
                className="text-cream/80 text-[11px] tracking-[0.1em] uppercase rounded-full border border-cream/20 px-5 py-2.5"
              >
                {f}
              </li>
            ))}
          </motion.ul>
        )}
        {data.cta && (
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate={animState}
          >
            <CTALink cta={data.cta} className="btn-primary" />
          </motion.div>
        )}
      </div>
    );
  }

  if (data.variant === "hook") {
    return (
      <div className="relative z-10 h-full flex flex-col items-center justify-end text-center">
        {data.quote && (
          <motion.blockquote
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={animState}
            className="max-w-2xl"
          >
            <p className="font-serif text-cream text-2xl sm:text-4xl lg:text-5xl font-semibold leading-[1.3] italic">
              &ldquo;{data.quote.text}&rdquo;
            </p>
            <footer className="mt-6 text-cream/70 text-[12px] tracking-[0.2em] uppercase">
              — {data.quote.author}
            </footer>
          </motion.blockquote>
        )}
        {data.stats && (
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={animState}
            className="flex gap-12 sm:gap-20 mt-12"
          >
            {data.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-cream text-3xl sm:text-5xl font-semibold">
                  {stat.value}
                </div>
                <div className="text-cream/60 text-[10px] tracking-[0.25em] uppercase mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    );
  }

  // Gallery variant
  if (data.variant === "gallery") {
    return (
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
        <motion.h2
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={animState}
          className="font-serif text-cream text-3xl sm:text-5xl font-semibold leading-[1.15]"
        >
          {data.headline}
        </motion.h2>
        {data.description && (
          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={animState}
            className="text-cream/80 text-sm font-medium mt-5 max-w-md leading-relaxed"
          >
            {data.description}
          </motion.p>
        )}
        {data.cta && (
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={animState}
            className="mt-8"
          >
            <CTALink cta={data.cta} className="btn-outline" />
          </motion.div>
        )}
      </div>
    );
  }

  // Footer variant
  if (data.variant === "footer") {
    return (
      <div className="relative z-10 h-full flex flex-col items-center justify-end text-center" style={{ gap: 16 }}>
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={animState}
        >
          <span className="font-serif text-cream text-4xl sm:text-6xl font-semibold tracking-[0.1em]">
            TEANIYA
          </span>
          <p className="text-cream/70 text-[11px] tracking-[0.35em] uppercase mt-3">
            {data.subtitle}
          </p>
        </motion.div>
        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={animState}
          className="text-cream/80 text-sm font-medium max-w-sm leading-relaxed"
        >
          {data.description}
        </motion.p>
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate={animState}
          className="flex gap-8 text-cream/60 text-[11px] tracking-[0.15em] uppercase"
        >
          <a href="https://t.me/lesxeniya" target="_blank" rel="noopener noreferrer" className="text-cream/60 hover:text-cream/100 transition-colors no-underline">Telegram</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-cream/60 hover:text-cream/100 transition-colors no-underline">Instagram</a>
          <a href="mailto:hello@teaniya.com" className="text-cream/60 hover:text-cream/100 transition-colors no-underline">Email</a>
        </motion.div>
        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate={animState}
          className="text-cream/40 text-[10px] tracking-[0.2em]"
        >
          © 2026 Teaniya. All rights reserved.
        </motion.p>
      </div>
    );
  }

  // Feature variant
  return (
    <div className="relative z-10 h-full flex flex-col justify-center">
      <motion.span
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate={animState}
        className="text-cream/70 text-[11px] tracking-[0.4em] uppercase mb-4"
      >
        {data.subtitle}
      </motion.span>
      <motion.h2
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate={animState}
        className="font-serif text-cream text-3xl sm:text-5xl font-semibold leading-[1.15] max-w-lg"
      >
        {data.headline}
      </motion.h2>
      {data.description && (
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate={animState}
          className="text-cream/85 text-sm font-medium mt-5 max-w-md leading-relaxed"
        >
          {data.description}
        </motion.p>
      )}
      {data.cta && (
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate={animState}
          className="mt-14"
        >
          <Link href={data.cta.href} className="btn-primary">
            {data.cta.label}
          </Link>
        </motion.div>
      )}
    </div>
  );
}
