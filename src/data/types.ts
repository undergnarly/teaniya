export interface SlideMedia {
  video?: string;
  poster: string;
}

export interface SlideCTA {
  label: string;
  href: string;
  booking?: boolean;
  scrollDown?: boolean;
}

export interface SlideStat {
  label: string;
  value: string;
}

export interface SlideQuote {
  text: string;
  author: string;
}

export interface SlideData {
  id: string;
  variant: "hero" | "experience" | "hook" | "footer" | "feature" | "gallery";
  headline: string;
  subtitle?: string;
  description?: string;
  price?: string;
  cta?: SlideCTA;
  ctaSecondary?: SlideCTA;
  media: SlideMedia;
  stats?: SlideStat[];
  quote?: SlideQuote;
  features?: string[];
  overlayStyle?: "dark" | "forest" | "warm";
}

export interface TeaProduct {
  id: string;
  name: string;
  origin: string;
  description: string;
  price: string;
  weight: string;
  category: "green" | "oolong" | "pu-erh" | "white" | "black" | "herbal";
  image: string;
  tags?: string[];
}

export interface TeawareProduct {
  id: string;
  name: string;
  artisan: string;
  description: string;
  price: string;
  category: "teapot" | "cup" | "gaiwan" | "set" | "accessories";
  image: string;
}

export interface JournalEntry {
  id: string;
  title: string;
  excerpt: string;
  category: "culture" | "brewing" | "history" | "recipes" | "travel";
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

export interface CeremonyOption {
  id: string;
  name: string;
  duration: string;
  price: string;
  description: string;
  includes: string[];
  image: string;
}

export interface CourseOption {
  id: string;
  name: string;
  duration: string;
  price: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced";
  schedule: string;
  image: string;
}
