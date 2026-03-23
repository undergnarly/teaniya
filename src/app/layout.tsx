import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Teaniya — Tea House Bali",
  description:
    "Premium tea house in Bali. Tea ceremonies, tea school, curated teas and teaware. Discover the art of tea.",
  keywords: [
    "tea house",
    "Bali",
    "tea ceremony",
    "tea school",
    "premium tea",
    "teaware",
    "matcha",
    "oolong",
    "pu-erh",
  ],
  openGraph: {
    title: "Teaniya — Tea House Bali",
    description:
      "Premium tea house in Bali. Tea ceremonies, tea school, curated teas and teaware.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
