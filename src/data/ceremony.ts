import type { SlideData } from "./types";

export const ceremonySlides: SlideData[] = [
  {
    id: "ceremony-hero",
    variant: "hero",
    headline: "Tea Ceremony",
    subtitle: "Immersive Experience",
    description:
      "More than drinking tea — a doorway into stillness. Each ceremony is a practice in attention, patience, and the beauty of simplicity.",
    media: { poster: "/images/ceremony-hero.jpg" },
    cta: { label: "Book Now", href: "https://t.me/lesxeniya?text=Hello!%20I%20would%20like%20to%20book%20a%20Tea%20Ceremony" },
    ctaSecondary: { label: "Explore", href: "#", scrollDown: true },
    overlayStyle: "dark",
  },
  {
    id: "ceremony-process",
    variant: "hook",
    headline: "",
    media: { poster: "/images/ceremony-poster.jpg" },
    quote: {
      text: "Arrive. Settle. Experience. Reflect. Every ceremony is a journey inward.",
      author: "The Way of Tea",
    },
    stats: [
      { value: "01", label: "Arrive" },
      { value: "02", label: "Settle" },
      { value: "03", label: "Experience" },
      { value: "04", label: "Reflect" },
    ],
    overlayStyle: "forest",
  },
  {
    id: "ceremony-gongfu",
    variant: "experience",
    headline: "Gongfu Tea Ceremony",
    subtitle: "90 min · IDR 650,000",
    description:
      "The art of skilled brewing. Experience multiple infusions of premium oolong or pu-erh, each revealing new layers of flavor. Guided by our tea master in our private tea room.",
    media: { poster: "/images/ceremony-gongfu.jpg" },
    features: ["2 Premium Teas", "Full Gongfu Prep", "Tea Pastries", "Tasting Notes"],
    cta: { label: "Book Gongfu Ceremony", href: "https://t.me/lesxeniya?text=Hello!%20I%20would%20like%20to%20book%20a%20Gongfu%20Tea%20Ceremony%20(90min%2C%20IDR%20650%2C000)" },
    overlayStyle: "dark",
  },
  {
    id: "ceremony-matcha",
    variant: "experience",
    headline: "Japanese Matcha Ritual",
    subtitle: "60 min · IDR 450,000",
    description:
      "A meditative experience rooted in the Urasenke tradition. Learn the whisking technique, appreciate the silence between sips, and find calm in every movement.",
    media: { poster: "/images/ceremony-matcha.jpg" },
    features: ["Ceremonial Matcha", "Wagashi Sweets", "Guided Meditation", "Take-home Sample"],
    cta: { label: "Book Matcha Ritual", href: "https://t.me/lesxeniya?text=Hello!%20I%20would%20like%20to%20book%20a%20Matcha%20Ritual%20(60min%2C%20IDR%20450%2C000)" },
    overlayStyle: "dark",
  },
  {
    id: "ceremony-private",
    variant: "experience",
    headline: "Private Tea Journey",
    subtitle: "2 hours · IDR 1,200,000",
    description:
      "An intimate, customized experience for up to 4 guests. Our tea master curates a journey through rare teas paired with Balinese-inspired light bites.",
    media: { poster: "/images/ceremony-private.jpg" },
    features: ["Private Room", "3–4 Rare Teas", "Food Pairing", "Gift Tea"],
    cta: { label: "Book Private Journey", href: "https://t.me/lesxeniya?text=Hello!%20I%20would%20like%20to%20book%20a%20Private%20Tea%20Journey%20(2h%2C%20IDR%201%2C200%2C000)" },
    overlayStyle: "dark",
  },
  {
    id: "ceremony-sunset",
    variant: "experience",
    headline: "Sunset Tea Meditation",
    subtitle: "75 min · IDR 550,000",
    description:
      "As the Bali sun descends, join us in our garden pavilion for a mindful tea session. Combining breathwork, silence, and slow tea to close the day with presence.",
    media: { poster: "/images/ceremony-sunset.jpg" },
    features: ["Garden Pavilion", "Breathwork", "Sound Healing", "Herbal Tea Gift"],
    cta: { label: "Book Sunset Meditation", href: "https://t.me/lesxeniya?text=Hello!%20I%20would%20like%20to%20book%20a%20Sunset%20Tea%20Meditation%20(75min%2C%20IDR%20550%2C000)" },
    overlayStyle: "dark",
  },
  {
    id: "ceremony-footer",
    variant: "footer",
    headline: "TEANIYA",
    subtitle: "Tea House · Ubud, Bali",
    description:
      "Jl. Raya Ubud No. 88, Ubud, Bali 80571. Open daily 9:00 — 21:00. We welcome you to slow down and savor.",
    media: { poster: "/images/footer-poster.jpg" },
    overlayStyle: "dark",
  },
];
