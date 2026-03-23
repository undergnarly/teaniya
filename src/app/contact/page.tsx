"use client";

import Header from "@/components/Header";
import SlideShow from "@/components/SlideShow";
import { contactSlides } from "@/data/contact";

export default function ContactPage() {
  return (
    <main>
      <Header variant="light" />
      <SlideShow slides={contactSlides} />
    </main>
  );
}
