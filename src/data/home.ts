import type { SlideData } from "./types";

export const homeSlides: SlideData[] = [
  {
    id: "hero",
    variant: "hero",
    headline: "The Art of Slow Tea",
    subtitle: "Teaniya · Bali",
    description:
      "A sanctuary where ancient tea traditions meet the serenity of Bali. Every cup tells a story.",
    media: {
      poster: "/images/hero-poster.jpg",
      video: "/videos/hero.mp4",
    },
    cta: { label: "Explore Teas", href: "/teas" },
    ctaSecondary: { label: "Discover", href: "#", scrollDown: true },
    overlayStyle: "dark",
  },
  {
    id: "hook",
    variant: "hook",
    headline: "",
    media: {
      poster: "/images/hook-poster.jpg",
    },
    quote: {
      text: "Tea is the elixir of life. In every leaf, a universe unfolds.",
      author: "Lu Yu, The Classic of Tea",
    },
    stats: [
      { value: "120+", label: "Rare Teas" },
      { value: "8", label: "Origins" },
      { value: "5000", label: "Years of Tradition" },
    ],
    overlayStyle: "forest",
  },
  {
    id: "ceremony",
    variant: "experience",
    headline: "Tea Ceremony",
    subtitle: "Immersive Experience",
    description:
      "Step into stillness. Our guided ceremonies honor the Gongfu tradition — a meditative journey through aroma, taste, and presence.",
    media: {
      poster: "/images/ceremony-poster.jpg",
    },
    features: ["Gongfu Cha", "Matcha", "Private", "Group"],
    cta: { label: "Book a Ceremony", href: "/ceremony" },
    overlayStyle: "dark",
  },
  {
    id: "teas",
    variant: "experience",
    headline: "Curated Collection",
    subtitle: "Premium Teas",
    description:
      "Hand-selected from the finest gardens of China, Japan, Taiwan, and India. From delicate whites to aged pu-erh, each tea is a journey.",
    media: {
      poster: "/images/teas-poster.jpg",
    },
    features: ["Oolong", "Pu-erh", "Green", "White", "Black"],
    cta: { label: "View Collection", href: "/teas" },
    overlayStyle: "dark",
  },
  {
    id: "teaware",
    variant: "experience",
    headline: "Artisan Teaware",
    subtitle: "Handcrafted",
    description:
      "Yixing clay teapots, Japanese ceramics, and Balinese pottery. Every piece carries the hands of its maker.",
    media: {
      poster: "/images/teaware-poster.jpg",
    },
    features: ["Yixing Clay", "Porcelain", "Raku", "Bamboo"],
    cta: { label: "Browse Teaware", href: "/teaware" },
    overlayStyle: "dark",
  },
  {
    id: "school",
    variant: "experience",
    headline: "Tea School",
    subtitle: "Learn the Way of Tea",
    description:
      "From beginner workshops to advanced tea master courses. Learn brewing techniques, tea tasting, and the philosophy of tea.",
    media: {
      poster: "/images/school-poster.jpg",
    },
    features: ["Workshops", "Courses", "Certification"],
    cta: { label: "View Courses", href: "/school" },
    overlayStyle: "dark",
  },
  {
    id: "journal-cta",
    variant: "experience",
    headline: "Stories Behind the Leaf",
    subtitle: "The Journal",
    description:
      "Explore our journal — tales of tea origins, brewing rituals, and the quiet wisdom found in every cup.",
    media: {
      poster: "/images/journal-poster.jpg",
    },
    features: ["Culture", "Brewing", "History", "Travel"],
    cta: { label: "Read Journal", href: "/journal" },
    overlayStyle: "dark",
  },
  {
    id: "footer",
    variant: "footer",
    headline: "TEANIYA",
    subtitle: "Tea House · Ubud, Bali",
    description:
      "Jl. Raya Ubud No. 88, Ubud, Bali 80571. Open daily 9:00 — 21:00. We welcome you to slow down and savor.",
    media: {
      poster: "/images/footer-poster.jpg",
    },
    overlayStyle: "dark",
  },
];
