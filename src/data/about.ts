import type { SlideData } from "./types";

export const aboutSlides: SlideData[] = [
  {
    id: "about-hero",
    variant: "hero",
    headline: "Born from a Love of Tea, Rooted in Bali",
    subtitle: "Our Story",
    description:
      "Teaniya was born in 2019 when founder Wayan Surya returned to Bali after years studying tea in the mountains of Yunnan, the gardens of Uji, and the oolong terraces of Alishan.",
    media: { poster: "/images/about-hero.jpg" },
    cta: { label: "Contact Us", href: "https://t.me/lesxeniya?text=Hello!%20I%20want%20to%20learn%20more%20about%20Teaniya" },
    ctaSecondary: { label: "Discover", href: "#", scrollDown: true },
    overlayStyle: "dark",
  },
  {
    id: "about-hook",
    variant: "hook",
    headline: "",
    media: { poster: "/images/hook-poster.jpg" },
    quote: {
      text: "Where the discipline of East Asian tea culture meets the warmth of Balinese hospitality.",
      author: "Wayan Surya, Founder",
    },
    overlayStyle: "forest",
  },
  {
    id: "about-origin",
    variant: "experience",
    headline: "Origin",
    subtitle: "Our Philosophy",
    description:
      "Every tea we serve is traced to its source — the garden, the season, the hands that shaped it. We believe knowing where your tea comes from deepens every sip.",
    media: { poster: "/images/ceremony-poster.jpg" },
    features: ["Traceable", "Single Origin", "Direct Trade"],
    overlayStyle: "dark",
  },
  {
    id: "about-craft",
    variant: "experience",
    headline: "Craft",
    subtitle: "Our Philosophy",
    description:
      "We honor the artisan — from tea farmers to ceramicists — preserving techniques perfected over centuries. Every piece in our space carries a maker's story.",
    media: { poster: "/images/teaware-poster.jpg" },
    features: ["Handmade", "Traditional", "Sustainable"],
    overlayStyle: "dark",
  },
  {
    id: "about-presence",
    variant: "experience",
    headline: "Presence",
    subtitle: "Our Philosophy",
    description:
      "Tea is meditation in motion. We create spaces where time slows and attention deepens. A place for locals, travelers, and seekers to sit together.",
    media: { poster: "/images/ceremony-gongfu.jpg" },
    features: ["Mindfulness", "Community", "Stillness"],
    overlayStyle: "dark",
  },
  {
    id: "about-team",
    variant: "experience",
    headline: "Meet Our Tea Family",
    subtitle: "The People",
    description:
      "Wayan Surya — Founder & Tea Master. Aiko Tanaka — Japanese Tea Specialist. Lila Dewi — Ceramicist & Teaware Curator. Together we bridge cultures through the simple act of tea.",
    media: { poster: "/images/team-1.jpg" },
    features: ["Yunnan Trained", "Kyoto School", "Balinese Roots"],
    cta: { label: "Get in Touch", href: "https://t.me/lesxeniya?text=Hello!%20I%20want%20to%20learn%20more%20about%20the%20Teaniya%20team" },
    overlayStyle: "dark",
  },
  {
    id: "about-footer",
    variant: "footer",
    headline: "TEANIYA",
    subtitle: "Tea House · Ubud, Bali",
    description:
      "Jl. Raya Ubud No. 88, Ubud, Bali 80571. Open daily 9:00 — 21:00. We welcome you to slow down and savor.",
    media: { poster: "/images/footer-poster.jpg" },
    overlayStyle: "dark",
  },
];
