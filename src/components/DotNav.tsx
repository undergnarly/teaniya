"use client";

import { motion } from "framer-motion";

interface DotNavProps {
  total: number;
  active: number;
  onDotClick: (index: number) => void;
}

export default function DotNav({ total, active, onDotClick }: DotNavProps) {
  return (
    <div className="fixed right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3">
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          className="w-6 h-6 flex items-center justify-center bg-transparent border-none cursor-pointer group"
          aria-label={`Go to slide ${i + 1}`}
          aria-current={i === active ? "step" : undefined}
        >
          <motion.div
            animate={{
              width: i === active ? 8 : 4,
              height: i === active ? 8 : 4,
              opacity: i === active ? 1 : 0.35,
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-full bg-cream group-hover:opacity-70 transition-opacity"
          />
        </button>
      ))}
    </div>
  );
}
