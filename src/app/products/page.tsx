"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Package,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Wheat,
  Truck,
  Shirt,
  Sparkles,
  HardHat,
  Boxes,
  Globe2,
  TrendingUp,
  Apple,
  Wrench,
  Flame,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [rfqItem, setRfqItem] = useState<string | null>(null);

  const tradeCorridors = [
    {
      corridor: "INDIA ➔ UAE & GULF",
      title: "Agro Commodities, Spices & Fresh Produce Export",
      description: "Direct Reefer & Dry container dispatches from Mundra & Hazira to Jebel Ali, Sharjah, Abu Dhabi & Middle East markets.",
      tag: "Export Hub",
      color: "from-amber-500/20 to-orange-500/20 border-orange-500/30",
    },
    {
      corridor: "INDIA ➔ AFRICA & SOUTH AFRICA",
      title: "Machinery, Trucks, Dumpers, JCBs, Hardware & Agro Export",
      description: "Heavy engineering, building safety tools, earthmoving equipment, dumpers, trucks, rice and spices shipped to Durban, Mombasa, Dar es Salaam & West Africa.",
      tag: "Heavy Export",
      color: "from-blue-500/20 to-cyan-500/20 border-cyan-500/30",
    },
    {
      corridor: "CHINA ➔ INDIA (SPECIALTY)",
      title: "Apparel, Kids & Mens Wear, Cosmetics & Fashion Import",
      description: "Dedicated sea & air import customs clearance for garment manufacturers, retail chains and cosmetics distributors across India.",
      tag: "Import Specialty",
      color: "from-purple-500/20 to-pink-500/20 border-pink-500/30",
    },
  ];

  const categories = [
    { id: "all", label: "All Trade Portfolios", icon: Boxes },
    { id: "uae_agro", label: "India ➔ UAE Agro & Spices", icon: Wheat },
    { id: "africa_heavy", label: "India ➔ Africa Machinery & Hardware", icon: Truck },
    { id: "china_import", label: "China ➔ India Apparel & Cosmetics", icon: Shirt },
  ];

  const productList = [
    // 1. INDIA -> UAE AGRO & SPICES
    {
      id: "uae-rice",
      name: "Basmati & Non-Basmati Rice (1121, 1509, Sella, IR64)",
      category: "uae_agro",
      corridor: "India ➔ UAE & Gulf",
      image: "/images/service_uae_agro.jpg",
      origin: "Punjab, Haryana & Gujarat, India",
      packaging: "5kg, 10kg, 25kg, 50kg Non-Woven / BOPP / Jute Bags",
      hsCode: "10063020 / 10063090",
      desc: "Super-fine aromatic long-grain Basmati and Parboiled Non-Basmati rice sorted with advanced Sortex optical cleaners for Dubai, Sharjah and GCC hypermarkets.",
      specifications: ["Average Grain Length: 8.35mm+", "Moisture: Max 12.5%", "Broken: Max 1%", "100% Purity Certified"],
    },
    {
      id: "uae-spices-produce",
      name: "Indian Spices, Fresh Fruits & Vegetables",
      category: "uae_agro",
      corridor: "India ➔ UAE & Gulf",
      image: "/images/b2.png",
      origin: "Unjha APMC, Maharashtra & Gujarat Belts",
      packaging: "PP Woven Bags, Vacuum Pouches & Corrugated Boxes",
      hsCode: "090931 / 091030 / 070310",
      desc: "Machine-cleaned Cumin (Jeera), Turmeric, Coriander, Red Chilli, and fresh export Red Onions, Pomegranates & Bananas shipped in Reefer containers.",
      specifications: ["Spices Purity: 99% / 99.5% Sortex", "Reefer Temperature Monitored", "Phytosanitary & Fumigation Cleared", "Dubai Municipality Compliant"],
    },
    {
      id: "uae-pulses",
      name: "Export Pulses, Food Grains & Seeds",
      category: "uae_agro",
      corridor: "India ➔ UAE & Gulf",
      image: "/images/service_warehouse.jpg",
      origin: "Gujarat & Western India APMC",
      packaging: "25kg / 50kg Bags & 1 MT Jumbo Bulk Bags",
      hsCode: "071320 / 120740 / 120242",
      desc: "Premium grade Chickpeas (Kabuli Chana), Toor Dal, Moong, and Sesame Seeds for food processing and hypermarket distribution in UAE.",
      specifications: ["Purity: 99.5% Sortex Cleaned", "Moisture: Max 10%", "FSSAI & SGS Inspected", "Export Container Stuffing"],
    },

    // 2. INDIA -> AFRICA MACHINERY & HARDWARE
    {
      id: "africa-trucks-machinery",
      name: "Commercial Trucks, Dumpers & JCB Excavators",
      category: "africa_heavy",
      corridor: "India ➔ Africa & South Africa",
      image: "/images/service_africa_machinery.jpg",
      origin: "Industrial Machinery Manufacturers, India",
      packaging: "Ro-Ro (Roll-on/Roll-off) & Flat Rack Containers",
      hsCode: "870423 / 842952 / 847420",
      desc: "Heavy-duty Tipper Dumpers, Commercial Haulage Trucks, JCB Backhoe Loaders, and Mining Machinery exported to South Africa, Kenya, and Nigeria.",
      specifications: ["Heavy-Duty Chassis & Tropical Cooling", "CE / ISO Certified Quality", "Pre-Shipment Inspection Cleared", "Spare Parts & Toolkits Included"],
    },
    {
      id: "africa-safety-hardware",
      name: "Building Safety Tools & Industrial Hardware Materials",
      category: "africa_heavy",
      corridor: "India ➔ Africa & South Africa",
      image: "/images/service_customs_clearance.jpg",
      origin: "Gujarat & Pan-India Tool Hubs",
      packaging: "Palletized Export Cartons & Poly-Wrapped Bundles",
      hsCode: "820559 / 650610 / 732690",
      desc: "Industrial safety PPE (helmets, harnesses, safety shoes), construction fasteners, scaffolding couplers, structural hardware, rice & spices supplies.",
      specifications: ["ANSI / EN / IS Safety Certified", "Galvanized High-Tensile Steel", "Anti-Corrosion Moisture Packaged", "Bulk Project Construction Supplies"],
    },

    // 3. CHINA -> INDIA SPECIALTY IMPORTS
    {
      id: "china-apparel-fashion",
      name: "Kids Wear, Mens Wear & Ladies Undergarments",
      category: "china_import",
      corridor: "China ➔ India (Specialty Import)",
      image: "/images/service_china_import.jpg",
      origin: "Guangdong & Zhejiang Apparel Hubs, China",
      packaging: "Export Hanger Packs & Compressed Carton Bales",
      hsCode: "611120 / 620342 / 621210",
      desc: "Complete collections of children's apparel, men's fashion wear, and premium ladies undergarments / seamless lingerie imported with fast EDI port clearance.",
      specifications: ["Breathable Cotton & Microfiber", "Hypoallergenic Dyes & Anti-Shrink", "Fast Sea FCL/LCL & Air Express", "Customs EDI Automated Filing"],
    },
    {
      id: "china-cosmetics-beauty",
      name: "Beauty Cosmetics, Makeup & Personal Care Products",
      category: "china_import",
      corridor: "China ➔ India (Specialty Import)",
      image: "/images/b1.png",
      origin: "Yiwu & Shanghai Cosmetics Zones, China",
      packaging: "Cushioned Inner Boxes with Anti-Leak Seal",
      hsCode: "330499 / 330790 / 961610",
      desc: "Cosmetics tools, makeup kits, eyeshadow palettes, lip cosmetics, skincare accessories, and beauty equipment imported with complete regulatory compliance.",
      specifications: ["CDSCO / Drug Controller Guidelines Compliant", "Batch Coded & Ingredients Labelled", "DGR / Non-Hazardous Cargo Clearing", "Express Air & Ocean Cargo"],
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? productList
      : productList.filter((item) => item.category === activeCategory);

  const handleOpenRFQ = (productName: string) => {
    setRfqItem(productName);
    setIsBookingOpen(true);
  };

  return (
    <main className="w-full min-h-screen bg-[#07080b] text-white overflow-x-hidden flex flex-col justify-between">
      <div>
        {/* Page Banner Header */}
        <PageHeader
          badge="10X INTERNATIONAL TRADE PORTFOLIO"
          title="Global Commodity Exports &"
          highlightedWord="Specialty Import Cargo"
          description="Verified cross-border trade solutions: Exporting Indian Agro, Rice, Spices, Fruits & Vegetables to UAE; Machinery, Trucks, Dumpers, JCBs & Safety Tools to Africa; and Importing Kids/Mens Wear, Undergarments & Beauty Cosmetics from China to India."
          breadcrumb="Products & Corridors"
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* 3 Core Trade Corridors Spotlight */}
        <section className="py-8 px-4 sm:px-8 md:px-14 lg:px-20 max-w-[1520px] mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tradeCorridors.map((corridor, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-zinc-900/90 border ${corridor.color} rounded-3xl p-6 flex flex-col justify-between shadow-2xl backdrop-blur-xl group hover:scale-[1.02] transition-transform`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-bold text-[#ff5500] tracking-wider uppercase">
                      {corridor.corridor}
                    </span>
                    <span className="text-[10px] font-mono bg-white/10 px-2.5 py-0.5 rounded-full text-zinc-300">
                      {corridor.tag}
                    </span>
                  </div>
                  <h3 className="font-outfit text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                    {corridor.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-[13px] leading-relaxed">
                    {corridor.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#ff5500] font-semibold">
                  <span>DGFT IEC: AADFZ3605M</span>
                  <span className="text-white group-hover:translate-x-1 transition-transform">Explore →</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Interactive Category Filter Pills */}
        <section className="py-4 px-4 sm:px-8 max-w-[1520px] mx-auto w-full">
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#ff5500] text-white shadow-lg shadow-orange-500/25 scale-105"
                      : "bg-zinc-900/90 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/10"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Products & Commodity Grid */}
        <section className="py-8 sm:py-12 px-4 sm:px-8 md:px-14 lg:px-20 max-w-[1520px] mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
                className="bg-zinc-900/90 border border-white/15 rounded-3xl overflow-hidden flex flex-col justify-between shadow-2xl backdrop-blur-xl group hover:border-[#ff5500]/50 transition-all duration-300"
              >
                <div>
                  {/* Card Visual with Corridor Tag */}
                  <div className="relative w-full h-[200px] sm:h-[220px] overflow-hidden bg-zinc-950">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 bg-[#ff5500]/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono font-bold text-white">
                      {product.corridor}
                    </div>

                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md border border-white/20 px-2.5 py-0.5 rounded-full text-[10px] font-mono text-zinc-300 font-bold">
                      HS: {product.hsCode.split("/")[0]}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 flex flex-col gap-3">
                    <span className="text-[11px] font-mono text-zinc-400">
                      Origin: <strong className="text-zinc-200">{product.origin}</strong>
                    </span>

                    <h3 className="font-outfit text-lg sm:text-xl font-bold text-white group-hover:text-[#ff5500] transition-colors leading-snug">
                      {product.name}
                    </h3>

                    <p className="text-zinc-400 text-xs sm:text-[13px] leading-relaxed">
                      {product.desc}
                    </p>

                    {/* Specifications List */}
                    <div className="space-y-1.5 pt-2 border-t border-white/10">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-300">
                        Export / Import Specs:
                      </span>
                      <div className="grid grid-cols-2 gap-1 text-[11px] text-zinc-400">
                        {product.specifications.map((spec, i) => (
                          <div key={i} className="flex items-center gap-1.5 truncate">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500] shrink-0" />
                            <span className="truncate">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 text-xs text-zinc-400">
                      <span>Packaging: </span>
                      <strong className="text-zinc-200">{product.packaging}</strong>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-5 sm:p-6 pt-0">
                  <button
                    onClick={() => handleOpenRFQ(product.name)}
                    className="w-full bg-[#ff5500] hover:bg-[#e04800] text-white text-xs sm:text-sm font-semibold py-3 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 transition-all duration-300 active:scale-95 cursor-pointer"
                  >
                    <span>Request Quotation (RFQ)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Custom Trade Route Advisory Banner */}
        <section className="py-12 px-4 sm:px-8 md:px-14 lg:px-20 max-w-[1520px] mx-auto w-full">
          <div className="bg-gradient-to-r from-zinc-900 via-zinc-950 to-black border border-white/15 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="max-w-2xl">
              <span className="text-xs font-bold tracking-widest text-[#ff5500] uppercase font-mono">
                10X INTERNATIONAL TRADE ADVISORY
              </span>
              <h3 className="font-outfit text-2xl sm:text-3xl font-bold text-white mt-1 mb-2">
                Need bulk container booking or specialized cargo clearance?
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Whether exporting fresh produce & spices to UAE, heavy earthmovers & trucks to African ports, or importing apparel & beauty cosmetics from China, 10X INTERNATIONAL manages full end-to-end container logistics, DGFT documentation, and customs clearance.
              </p>
            </div>
            <Link
              href="/contact"
              className="bg-[#ff5500] hover:bg-[#e04800] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-orange-500/30 shrink-0"
            >
              Contact Ahmedabad Trade Desk
            </Link>
          </div>
        </section>
      </div>

      <Footer />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialCommodity={rfqItem ? `RFQ for ${rfqItem}` : undefined}
      />
    </main>
  );
}
