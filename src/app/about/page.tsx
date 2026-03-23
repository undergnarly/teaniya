"use client";

import Header from "@/components/Header";
import SlideShow from "@/components/SlideShow";
import { aboutSlides } from "@/data/about";

export default function AboutPage() {
  return (
    <main>
      <Header variant="light" />
      <SlideShow slides={aboutSlides} />
    </main>
  );
}
