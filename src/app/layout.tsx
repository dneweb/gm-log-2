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
  themeColor: "#070d18",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gmlsvs.com"),
  title: {
    default: "GM LOGISTICS SERVICES | Logistics Beyond Expectation",
    template: "%s | GM LOGISTICS SERVICES",
  },
  description:
    "GM LOGISTICS SERVICES (GMLS) is a USA based fully licensed third party logistics provider operating in 48 states across USA and Canada with 20 years of combined experience. Safe, secure and reliable logistics services.",
  keywords: [
    "GM LOGISTICS SERVICES",
    "GMLS",
    "Logistics Beyond Expectation",
    "Third Party Logistics USA",
    "3PL Provider 48 States and Canada",
    "Container Drayage",
    "Full Truckload FTL",
    "LTL Freight Services",
    "Reefer Containers Trailers",
    "Overweight Cargo Transport",
    "Alcohol Permits Logistics",
    "Transloading Services",
    "Palletize And Shrink Wrap",
    "Airport Pick ups",
    "Container Storage",
    "Export Stuffing",
    "Hazmat Transportation",
    "Flatbed Hauling",
    "Warehousing",
    "Kendall Park NJ Logistics",
    "New Jersey 3PL",
    "732-917-7747",
    "Automotive Logistics",
    "Chemical Logistics",
    "Food and Beverage Freight",
    "Healthcare Logistics",
    "Plastics Freight",
    "Paper and Packing",
    "Technology and Electronics",
    "Pharmaceutical Logistics",
  ],
  authors: [{ name: "GM LOGISTICS SERVICES", url: "https://www.gmlsvs.com" }],
  creator: "GM LOGISTICS SERVICES",
  publisher: "GM LOGISTICS SERVICES",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GM LOGISTICS SERVICES | Logistics Beyond Expectation",
    description:
      "USA based fully licensed third party logistics provider operating in 48 states across USA and Canada. Safe, secure and reliable logistics services.",
    url: "https://www.gmlsvs.com",
    siteName: "GM LOGISTICS SERVICES",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GM LOGISTICS SERVICES | Logistics Beyond Expectation",
    description:
      "USA based fully licensed third party logistics provider operating in 48 states across USA and Canada. 20 years combined experience.",
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
};

import GSAPProvider from "@/components/GSAPProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LogisticsService",
    name: "GM LOGISTICS SERVICES",
    legalName: "GM LOGISTICS SERVICES",
    url: "https://www.gmlsvs.com",
    description:
      "USA based fully licensed third party logistics provider operating in 48 states across USA and Canada with 20 years of combined experience in handling all crucial tasks safely and on time.",
    telephone: "+1-732-917-7747",
    faxNumber: "+1-732-917-7741",
    email: "dispatch@gmlsvs.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "45 Promise Way",
      addressLocality: "Kendall Park",
      addressRegion: "NJ",
      postalCode: "08824",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "40.4287",
      longitude: "-74.5582",
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Canada" },
    ],
    knowsAbout: [
      "Container Drayage",
      "Full Truckload",
      "LTL",
      "Reefer Containers/Trailers",
      "Overweight",
      "Alcohol Permits",
      "Transloading",
      "Palletize And Shrink Wrap",
      "Airport Pick ups",
      "Container Storage",
      "Export Stuffing",
      "Hazmat",
      "Flatbed",
      "Warehousing",
    ],
    priceRange: "$$",
  };

  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${plusJakarta.variable} ${outfit.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans antialiased selection:bg-[#dc2626] selection:text-white">
        <GSAPProvider>{children}</GSAPProvider>
      </body>
    </html>
  );
}
