import type { SlideData } from "./types";

export const journalSlides: SlideData[] = [
  {
    id: "journal-hero",
    variant: "hero",
    headline: "The Journal",
    subtitle: "Stories & Knowledge",
    description:
      "Explorations in tea culture, brewing wisdom, origin stories, and the quiet philosophy of the leaf.",
    media: { poster: "/images/journal-hero.jpg" },
    ctaSecondary: { label: "Read Stories", href: "#", scrollDown: true },
    overlayStyle: "dark",
  },
  {
    id: "journal-history",
    variant: "experience",
    headline: "The 5,000-Year Journey of Tea",
    subtitle: "History · 8 min read",
    description:
      "From Shen Nung's accidental discovery to the global phenomenon — how a single leaf shaped empires, trade routes, and quiet mornings alike.",
    media: { poster: "/images/journal-history.jpg" },
    features: ["History", "Origins", "Culture"],
    overlayStyle: "dark",
  },
  {
    id: "journal-gongfu",
    variant: "experience",
    headline: "Gongfu Cha: A Beginner's Guide",
    subtitle: "Brewing · 6 min read",
    description:
      "The Chinese art of skilled brewing isn't just technique — it's a way of being present. Here's everything you need to start your practice.",
    media: { poster: "/images/journal-gongfu.jpg" },
    features: ["Brewing", "Tutorial", "Gongfu"],
    overlayStyle: "dark",
  },
  {
    id: "journal-alishan",
    variant: "experience",
    headline: "The Tea Gardens of Alishan",
    subtitle: "Travel · 10 min read",
    description:
      "At 1,400 meters above sea level, where clouds kiss the soil, Taiwan's most prized oolongs grow in misty silence. A travel diary from the mountains.",
    media: { poster: "/images/journal-alishan.jpg" },
    features: ["Travel", "Taiwan", "Oolong"],
    overlayStyle: "dark",
  },
  {
    id: "journal-wabisabi",
    variant: "experience",
    headline: "Wabi-Sabi and the Tea Bowl",
    subtitle: "Culture · 7 min read",
    description:
      "In Japanese tea culture, imperfection is beauty. How the aesthetic philosophy of wabi-sabi shapes the ceramics, spaces, and spirit of chanoyu.",
    media: { poster: "/images/journal-wabisabi.jpg" },
    features: ["Culture", "Japan", "Ceramics"],
    overlayStyle: "dark",
  },
  {
    id: "journal-puerh",
    variant: "experience",
    headline: "The Aging Mystery of Pu-erh",
    subtitle: "Culture · 9 min read",
    description:
      "Like fine wine, pu-erh transforms with time. But what actually happens inside a tea cake over decades? The science and soul of aging tea.",
    media: { poster: "/images/journal-puerh.jpg" },
    features: ["Pu-erh", "Aging", "Science"],
    overlayStyle: "dark",
  },
  {
    id: "journal-matcha",
    variant: "experience",
    headline: "Matcha at Home: The Complete Ritual",
    subtitle: "Recipes · 5 min read",
    description:
      "You don't need a tearoom to make perfect matcha. With the right tools and mindset, your kitchen becomes a place of meditation.",
    media: { poster: "/images/journal-matcha.jpg" },
    features: ["Recipes", "Matcha", "Home Practice"],
    overlayStyle: "dark",
  },
  {
    id: "journal-footer",
    variant: "footer",
    headline: "TEANIYA",
    subtitle: "Tea House · Ubud, Bali",
    description:
      "Jl. Raya Ubud No. 88, Ubud, Bali 80571. Open daily 9:00 — 21:00. We welcome you to slow down and savor.",
    media: { poster: "/images/footer-poster.jpg" },
    overlayStyle: "dark",
  },
];
