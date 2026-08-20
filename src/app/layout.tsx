import type { Metadata } from "next";
import { Bebas_Neue, Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IMPO-EXPO | Global Import & Export Logistics Solutions",
  description:
    "Trusted Import And Export Solutions For Businesses Worldwide. We Handle Air Freight, Ocean Logistics, Customs Support, And Fast Delivery Services With Complete Reliability And Efficiency.",
  keywords: [
    "Import",
    "Export",
    "Global Logistics",
    "Ocean Freight",
    "Air Cargo",
    "Customs Clearance",
    "Shipping Container",
  ],
  icons: {
    icon: "/images/logo2.png",
    shortcut: "/images/logo2.png",
    apple: "/images/logo2.png",
  },
};

import GSAPProvider from "@/components/GSAPProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${plusJakarta.variable} ${outfit.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#0d0e12] text-white font-sans antialiased selection:bg-[#ff5500] selection:text-white">
        <GSAPProvider>{children}</GSAPProvider>
      </body>
    </html>
  );
}
