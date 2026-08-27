import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#07080b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://10xinternational.com"),
  title: {
    default: "10X INTERNATIONAL | Global Import & Export Freight Solutions",
    template: "%s | 10X INTERNATIONAL",
  },
  description:
    "10X INTERNATIONAL is an Indian export-import firm (DGFT IEC: AADFZ3605M, GSTIN: 24AADFZ3605M1Z0) based in Ahmedabad, Gujarat. Exporters of Rice, Spices, Produce & Pulses to UAE; Heavy Trucks, Dumpers, JCBs & Safety Tools to Africa; Importers of Apparel, Lingerie & Cosmetics from China.",
  keywords: [
    // Brand & Identity
    "10X INTERNATIONAL",
    "10X International Ahmedabad",
    "10X International Import Export",
    "DGFT IEC AADFZ3605M",
    "GSTIN 24AADFZ3605M1Z0",
    "Gujarat Import Export Company",
    "Ahmedabad Freight Forwarder",
    
    // Trade Corridor 1: India to UAE & Middle East
    "India to UAE Rice Export",
    "Basmati Rice Exporter India",
    "Non-Basmati Rice Exporter Gujarat",
    "1121 Sella Rice Dubai",
    "Indian Spices Export to UAE",
    "Cumin Jeera Exporter Unjha",
    "Turmeric Coriander Chilli Exporter",
    "Fresh Fruits Vegetables Export UAE",
    "Nashik Red Onion Exporter Dubai",
    "Indian Pulses Chickpeas Exporter",

    // Trade Corridor 2: India to Africa & South Africa
    "India to Africa Export",
    "India to South Africa Machinery Export",
    "Commercial Trucks Exporter Africa",
    "Heavy Tipper Dumpers Exporter",
    "JCB Excavator Export South Africa",
    "Building Safety Tools Exporter",
    "Industrial PPE Hardware Material Export",
    "Construction Scaffolding Tools Africa",

    // Trade Corridor 3: China to India Specialty Imports
    "China to India Import Agency",
    "Kids Wear Importer from China",
    "Mens Fashion Garments Importer India",
    "Ladies Undergarments Lingerie Importer",
    "Beauty Cosmetics Makeup Importer India",
    "Yiwu Guangzhou China Import Agent",

    // Logistics & Customs
    "Ocean Freight FCL Reefer Booking Mundra",
    "Customs Clearance Agent Hazira Port",
    "Nhava Sheva JNPT Customs Brokerage",
    "DGFT Online IEC Compliance India",
    "Cold Chain Reefer Logistics Gujarat",
    "Air Cargo Express Worldwide",
  ],
  authors: [{ name: "10X INTERNATIONAL", url: "https://10xinternational.com" }],
  creator: "10X INTERNATIONAL",
  publisher: "10X INTERNATIONAL",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "10X INTERNATIONAL | Global Import & Export Logistics Solutions",
    description:
      "DGFT Registered Exporter & Importer based in Ahmedabad, Gujarat. Direct export corridors to UAE & Africa, specialty apparel & cosmetics imports from China.",
    url: "https://10xinternational.com",
    siteName: "10X INTERNATIONAL",
    images: [
      {
        url: "/images/lo.png",
        width: 1200,
        height: 630,
        alt: "10X INTERNATIONAL - Global Trade & Logistics",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "10X INTERNATIONAL | Global Import & Export Solutions",
    description:
      "Government-certified export-import company in Ahmedabad, Gujarat. Exporters of Rice, Spices, Machinery & Importers of Apparel & Cosmetics.",
    images: ["/images/lo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LogisticsService",
    name: "10X INTERNATIONAL",
    legalName: "10X INTERNATIONAL",
    url: "https://10xinternational.com",
    logo: "https://10xinternational.com/images/lo.png",
    image: "https://10xinternational.com/images/lo.png",
    description:
      "Government-certified international trade and logistics company in Ahmedabad, Gujarat. Exporting Agro, Spices & Produce to UAE; Heavy Machinery, Trucks & Safety Tools to Africa; Importing Apparel & Cosmetics from China.",
    telephone: "+91-7926821010",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sarkhej Logistics Corridor",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      postalCode: "382210",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "22.9868",
      longitude: "72.5005",
    },
    taxID: "24AADFZ3605M1Z0",
    identifier: "AADFZ3605M",
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "South Africa" },
      { "@type": "Country", name: "Kenya" },
      { "@type": "Country", name: "China" },
    ],
    knowsAbout: [
      "Basmati Rice Export",
      "Indian Spices Export",
      "Fresh Produce Reefer Freight",
      "Commercial Trucks and Dumpers Export",
      "JCB Earthmoving Machinery Export",
      "Building Safety Tools and PPE",
      "Kids and Mens Wear Import",
      "Ladies Undergarments and Lingerie Import",
      "Beauty Cosmetics Import",
      "DGFT Customs Clearance",
    ],
    priceRange: "$$",
  };

  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${plusJakarta.variable} ${outfit.variable} dark scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen bg-[#0d0e12] text-white font-sans antialiased selection:bg-[#ff5500] selection:text-white">
        <GSAPProvider>{children}</GSAPProvider>
        <WhatsAppButton />
      </body>
    </html>
  );
}
