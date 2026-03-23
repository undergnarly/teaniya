"use client";

import Header from "@/components/Header";
import SlideShow from "@/components/SlideShow";
import { schoolSlides } from "@/data/school";

export default function SchoolPage() {
  return (
    <main>
      <Header variant="light" />
      <SlideShow slides={schoolSlides} />
    </main>
  );
}
