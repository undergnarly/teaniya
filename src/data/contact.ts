import type { SlideData } from "./types";

export const contactSlides: SlideData[] = [
  {
    id: "contact-hero",
    variant: "hero",
    headline: "Get in Touch",
    subtitle: "We'd love to hear from you",
    description:
      "Whether it's a question, a booking, or just to say hello over tea. Reach out anytime — we're always happy to connect.",
    media: { poster: "/images/contact-hero.jpg" },
    cta: { label: "Message on Telegram", href: "https://t.me/lesxeniya?text=Hello!%20I%20have%20a%20question%20about%20Teaniya" },
    ctaSecondary: { label: "More Info", href: "#", scrollDown: true },
    overlayStyle: "dark",
  },
  {
    id: "contact-visit",
    variant: "experience",
    headline: "Visit Us",
    subtitle: "Location & Hours",
    description:
      "Jl. Raya Ubud No. 88, Ubud, Bali 80571. Monday–Saturday 9:00–21:00, Sunday 10:00–18:00. Closed on Balinese holidays.",
    media: { poster: "/images/contact-map.jpg" },
    features: ["Ubud, Bali", "Open Daily", "+62 812 3456 7890"],
    cta: { label: "Get Directions", href: "https://t.me/lesxeniya?text=Hello!%20How%20do%20I%20get%20to%20Teaniya%3F" },
    overlayStyle: "dark",
  },
  {
    id: "contact-connect",
    variant: "experience",
    headline: "Connect With Us",
    subtitle: "Social & Direct",
    description:
      "Follow our journey on Instagram, message us on WhatsApp or Telegram, or write to hello@teaniya.com. We respond within 24 hours.",
    media: { poster: "/images/journal-poster.jpg" },
    features: ["Telegram", "WhatsApp", "Instagram", "Email"],
    cta: { label: "Open Telegram Chat", href: "https://t.me/lesxeniya" },
    overlayStyle: "dark",
  },
  {
    id: "contact-footer",
    variant: "footer",
    headline: "TEANIYA",
    subtitle: "Tea House · Ubud, Bali",
    description:
      "Jl. Raya Ubud No. 88, Ubud, Bali 80571. Open daily 9:00 — 21:00. We welcome you to slow down and savor.",
    media: { poster: "/images/footer-poster.jpg" },
    overlayStyle: "dark",
  },
];
