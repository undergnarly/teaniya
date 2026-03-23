"use client";

import Header from "@/components/Header";
import SlideShow from "@/components/SlideShow";
import { journalSlides } from "@/data/journal-slides";

export default function JournalPage() {
  return (
    <main>
      <Header variant="light" />
      <SlideShow slides={journalSlides} />
    </main>
  );
}
