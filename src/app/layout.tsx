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
  title: "10X INTERNATIONAL | Global Import & Export Logistics Solutions",
  description:
    "10X INTERNATIONAL is a government-certified export-import firm (DGFT IEC: AADFZ3605M, GSTIN: 24AADFZ3605M1Z0) based in Ahmedabad, Gujarat, India. Premier ocean container freight, air express, and commodity trade solutions worldwide.",
  keywords: [
    "10X INTERNATIONAL",
    "10X INTERNATIONAL Ahmedabad",
    "DGFT IEC AADFZ3605M",
    "GSTIN 24AADFZ3605M1Z0",
    "Indian Exporter",
    "Gujarat Import Export",
    "Ocean Freight FCL LCL",
    "Air Cargo Express",
    "Indian Spices Export",
    "Customs Clearance Mundra Hazira",
  ],
  icons: {
    icon: "/images/lo.png",
    shortcut: "/images/lo.png",
    apple: "/images/lo.png",
  },
};

import GSAPProvider from "@/components/GSAPProvider";
import WhatsAppButton from "@/components/WhatsAppButton";

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
        <WhatsAppButton />
      </body>
    </html>
  );
}
