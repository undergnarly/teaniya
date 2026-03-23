"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import type { SlideData } from "@/data/types";
import Slide from "./Slide";
import DotNav from "./DotNav";

const TRANSITION_MS = 1000;
const SWIPE_THRESHOLD = 50;

interface SlideShowProps {
  slides: SlideData[];
}

export default function SlideShow({ slides }: SlideShowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [heroReady, setHeroReady] = useState(false);
  const touchStartY = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning || index === activeIndex) return;
      if (index < 0 || index >= slides.length) return;
      setIsTransitioning(true);
      setActiveIndex(index);
      setTimeout(() => setIsTransitioning(false), TRANSITION_MS);
    },
    [isTransitioning, activeIndex, slides.length]
  );

  const next = useCallback(() => goTo(activeIndex + 1), [goTo, activeIndex]);
  const prev = useCallback(() => goTo(activeIndex - 1), [goTo, activeIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  // Mouse wheel
  useEffect(() => {
    const handler = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0) next();
      else if (e.deltaY < 0) prev();
    };
    const el = containerRef.current;
    el?.addEventListener("wheel", handler, { passive: false });
    return () => el?.removeEventListener("wheel", handler);
  }, [next, prev]);

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartY.current - e.changedTouches[0].clientY;
    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff > 0) next();
      else prev();
    }
  };

  return (
    <>
      {/* Loading screen */}
      <div className={`loading-screen ${heroReady ? "hidden" : ""}`}>
        <span className="font-serif text-3xl text-forest tracking-[0.15em] font-light">
          TEANIYA
        </span>
        <div className="loading-bar">
          <div className="loading-bar-inner" />
        </div>
      </div>

      <div
        ref={containerRef}
        className="slide-container"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="slide-wrapper"
          style={{
            height: `${slides.length * 100}dvh`,
            transform: `translateY(-${activeIndex * 100}dvh)`,
          }}
        >
          {slides.map((slide, i) => (
            <Slide
              key={slide.id}
              data={slide}
              active={i === activeIndex}
              index={i}
              onReady={i === 0 ? () => setHeroReady(true) : undefined}
              onNext={next}
            />
          ))}
        </div>

        <DotNav
          total={slides.length}
          active={activeIndex}
          onDotClick={goTo}
        />
      </div>
    </>
  );
}
