"use client";

import Header from "@/components/Header";
import SlideShow from "@/components/SlideShow";
import { ceremonySlides } from "@/data/ceremony";

export default function CeremonyPage() {
  return (
    <main>
      <Header variant="light" />
      <SlideShow slides={ceremonySlides} />
    </main>
  );
}
