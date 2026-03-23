"use client";

import Header from "@/components/Header";
import SlideShow from "@/components/SlideShow";
import { homeSlides } from "@/data/home";

export default function HomePage() {
  return (
    <main>
      <Header variant="light" />
      <SlideShow slides={homeSlides} />
    </main>
  );
}
