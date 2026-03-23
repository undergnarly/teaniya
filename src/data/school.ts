import type { SlideData } from "./types";

export const schoolSlides: SlideData[] = [
  {
    id: "school-hero",
    variant: "hero",
    headline: "Tea School",
    subtitle: "Learn the Way of Tea",
    description:
      "From your first cup to mastery. Our courses are designed for anyone who believes tea deserves more than a teabag and boiling water.",
    media: { poster: "/images/school-hero.jpg" },
    cta: { label: "Enroll Now", href: "https://t.me/lesxeniya?text=Hello!%20I%20am%20interested%20in%20Tea%20School%20courses" },
    ctaSecondary: { label: "View Courses", href: "#", scrollDown: true },
    overlayStyle: "dark",
  },
  {
    id: "school-why",
    variant: "hook",
    headline: "",
    media: { poster: "/images/teas-poster.jpg" },
    quote: {
      text: "Tea is one of humanity's oldest crafts — a practice weaving botany, chemistry, history, and philosophy.",
      author: "Teaniya School",
    },
    overlayStyle: "forest",
  },
  {
    id: "school-foundations",
    variant: "experience",
    headline: "Tea Foundations",
    subtitle: "Beginner · Half Day · IDR 850,000",
    description:
      "Your starting point. Learn the six categories of tea, basic brewing parameters, tasting vocabulary, and how to set up your home practice.",
    media: { poster: "/images/school-foundations.jpg" },
    features: ["6 Tea Categories", "Brewing Basics", "Tasting Notes", "Home Practice"],
    cta: { label: "Enroll", href: "https://t.me/lesxeniya?text=Hello!%20I%20want%20to%20enroll%20in%20Tea%20Foundations%20course%20(Half%20Day%2C%20IDR%20850%2C000)" },
    overlayStyle: "dark",
  },
  {
    id: "school-gongfu",
    variant: "experience",
    headline: "Gongfu Brewing Mastery",
    subtitle: "Intermediate · 2 Days · IDR 2,400,000",
    description:
      "Deep dive into the Chinese Gongfu method. Water temperature, timing, vessel selection, and the art of reading the leaf across multiple infusions.",
    media: { poster: "/images/school-gongfu.jpg" },
    features: ["Water Science", "Vessel Selection", "Multiple Infusions", "Leaf Reading"],
    cta: { label: "Enroll", href: "https://t.me/lesxeniya?text=Hello!%20I%20want%20to%20enroll%20in%20Gongfu%20Brewing%20Mastery%20(2%20Days%2C%20IDR%202%2C400%2C000)" },
    overlayStyle: "dark",
  },
  {
    id: "school-cupping",
    variant: "experience",
    headline: "Tea Cupping & Evaluation",
    subtitle: "Intermediate · Full Day · IDR 1,600,000",
    description:
      "Professional tea tasting methodology. Learn to evaluate quality, identify origins, detect flaws, and develop your palate with blind tasting exercises.",
    media: { poster: "/images/school-cupping.jpg" },
    features: ["Blind Tasting", "Quality Assessment", "Origin ID", "Palate Training"],
    cta: { label: "Enroll", href: "https://t.me/lesxeniya?text=Hello!%20I%20want%20to%20enroll%20in%20Tea%20Cupping%20%26%20Evaluation%20(Full%20Day%2C%20IDR%201%2C600%2C000)" },
    overlayStyle: "dark",
  },
  {
    id: "school-japanese",
    variant: "experience",
    headline: "Japanese Tea Arts",
    subtitle: "Intermediate · 3 Days · IDR 3,500,000",
    description:
      "From sencha to matcha. Explore Japanese tea culture including temae preparation procedures, wagashi pairing, and the philosophy of ichigo ichie.",
    media: { poster: "/images/school-japanese.jpg" },
    features: ["Sencha", "Matcha Temae", "Wagashi Pairing", "Ichigo Ichie"],
    cta: { label: "Enroll", href: "https://t.me/lesxeniya?text=Hello!%20I%20want%20to%20enroll%20in%20Japanese%20Tea%20Arts%20(3%20Days%2C%20IDR%203%2C500%2C000)" },
    overlayStyle: "dark",
  },
  {
    id: "school-master",
    variant: "experience",
    headline: "Tea Master Intensive",
    subtitle: "Advanced · 5 Days · IDR 8,500,000",
    description:
      "Our most comprehensive program. Tea history, advanced brewing across all traditions, sensory training, and certification. For those pursuing tea professionally.",
    media: { poster: "/images/school-master.jpg" },
    features: ["All Traditions", "Sensory Training", "Certification", "5 Days"],
    cta: { label: "Apply Now", href: "https://t.me/lesxeniya?text=Hello!%20I%20want%20to%20apply%20for%20Tea%20Master%20Intensive%20(5%20Days%2C%20IDR%208%2C500%2C000)" },
    overlayStyle: "dark",
  },
  {
    id: "school-footer",
    variant: "footer",
    headline: "TEANIYA",
    subtitle: "Tea House · Ubud, Bali",
    description:
      "Jl. Raya Ubud No. 88, Ubud, Bali 80571. Open daily 9:00 — 21:00. We welcome you to slow down and savor.",
    media: { poster: "/images/footer-poster.jpg" },
    overlayStyle: "dark",
  },
];
