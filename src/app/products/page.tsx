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
      image: "/images/service_warehouse.jpg",
      origin: "Punjab, Haryana & Gujarat, India",
      packaging: "5kg, 10kg, 25kg, 50kg Non-Woven / BOPP / Jute Bags",
      hsCode: "10063020 / 10063090",
      desc: "Super-fine aromatic long-grain Basmati and Parboiled Non-Basmati rice sorted with advanced Sortex optical cleaners for Dubai, Sharjah and GCC hypermarkets.",
      specifications: ["Average Grain Length: 8.35mm+", "Moisture: Max 12.5%", "Broken: Max 1%", "100% Purity Certified"],
    },
    {
      id: "uae-spices",
      name: "Indian Spices (Cumin / Jeera, Coriander, Turmeric, Red Chilli)",
      category: "uae_agro",
      corridor: "India ➔ UAE, Africa & Global",
      image: "/images/b2.png",
      origin: "Unjha & Saurashtra APMC, Gujarat",
      packaging: "25kg / 50kg PP Woven Bags & Vacuum Pouches",
      hsCode: "090931 / 090921 / 091030",
      desc: "Machine-cleaned, sortexed Indian spices with high volatile oil content and authentic pungent aroma, meeting strict Dubai Municipality & ESMA import norms.",
      specifications: ["Purity: 99% / 99.5% Singapore Quality", "Moisture: Max 8.5%", "Admixture: Max 0.5%", "Phytosanitary & Fumigation Cleared"],
    },
    {
      id: "uae-fruits-veg",
      name: "Fresh Fruits & Vegetables (Red Onions, Pomegranates, Bananas, Mangoes)",
      category: "uae_agro",
      corridor: "India ➔ UAE & Middle East",
      image: "/images/shio.png",
      origin: "Maharashtra & Gujarat Farm Belts",
      packaging: "Mesh Bags (10-25kg) & Corrugated Export Boxes",
      hsCode: "070310 / 081090 / 080390",
      desc: "Fresh export-quality Nashik Red Onions, Bhagwa Pomegranates, and Cavendish Bananas shipped in temperature-controlled reefer containers to Dubai and Gulf ports.",
      specifications: ["Cold Chain Monitored: +4°C to +13°C", "GlobalGAP Compliant Farms", "FSSAI & APEDA Certified", "Zero Post-Harvest Decay"],
    },
    {
      id: "uae-pulses",
      name: "Export Pulses, Grains & Oil Seeds (Chickpeas, Sesame, Peanuts)",
      category: "uae_agro",
      corridor: "India ➔ UAE & Africa",
      image: "/images/port_background.jpg",
      origin: "Gujarat & Western India",
      packaging: "25kg / 50kg Bags, 1 MT Jumbo Bulk Bags",
      hsCode: "071320 / 120740 / 120242",
      desc: "Premium grade Kabuli Chickpeas (75-80 / 42-44 count), Natural & Hulled White Sesame Seeds (99.95% purity), and Bold Peanuts for food processing in Gulf & Africa.",
      specifications: ["Sesame Purity: 99.95% Sortex", "Chickpea Size: 8mm to 12mm", "Aflatoxin: Negative", "FSSAI & SGS Inspected"],
    },

    // 2. INDIA -> AFRICA MACHINERY & HARDWARE
    {
      id: "africa-trucks-dumpers",
      name: "Heavy Commercial Trucks, Dumpers & Transport Vehicles",
      category: "africa_heavy",
      corridor: "India ➔ Africa & South Africa",
      image: "/images/freight_courier_van.jpg",
      origin: "Automotive & Industrial Hubs, India",
      packaging: "Ro-Ro (Roll-on/Roll-off) & Flat Rack Containers",
      hsCode: "870423 / 870422",
      desc: "Heavy-duty Tipper Dumpers, 6x4 & 8x4 Mining Trucks, and cargo chassis engineered for tough African terrains, mining sites, and infrastructure projects in South Africa, Kenya, and Nigeria.",
      specifications: ["Heavy-Duty Chassis & Axles", "Tropical Climate Cooling Systems", "Pre-Shipment Mechanical Inspection", "Spare Parts Kit Included"],
    },
    {
      id: "africa-jcb-machinery",
      name: "JCB, Earthmovers, Excavators & Industrial Machinery",
      category: "africa_heavy",
      corridor: "India ➔ Africa & South Africa",
      image: "/images/fo.png",
      origin: "Certified Industrial Machinery Manufacturers, India",
      packaging: "Breakbulk, Flat Rack & Custom Wooden Crating",
      hsCode: "842952 / 842959 / 847420",
      desc: "Backhoe Loaders (JCBs), Hydraulic Excavators, Stone Crushers, Concrete Batching Plants, and Agri-Machinery dispatched with complete export customs documentation to major African ports.",
      specifications: ["CE / ISO Standard Certification", "Full Hydraulic Pressure Testing", "Dismantled or Fully Assembled", "On-site Commissioning Manuals"],
    },
    {
      id: "africa-safety-tools",
      name: "Building Safety Tools, PPE & Industrial Hardware Materials",
      category: "africa_heavy",
      corridor: "India ➔ Africa & South Africa",
      image: "/images/service_customs.jpg",
      origin: "Gujarat & Pan-India Tool Hubs",
      packaging: "Palletized Export Cartons & Poly-Wrapped Bundles",
      hsCode: "820559 / 650610 / 732690",
      desc: "Industrial safety helmets, high-altitude harnesses, safety shoes, welding gear, construction fasteners, scaffolding couplers, hand tools, and structural hardware.",
      specifications: ["EN / ANSI / IS Safety Certified", "Heavy-Duty Galvanized Steel", "Anti-Corrosion Packaged", "Bulk Project Supply"],
    },
    {
      id: "africa-rice-spices",
      name: "African Corridor Food Grains & Basmati Rice Supplies",
      category: "africa_heavy",
      corridor: "India ➔ Africa & South Africa",
      image: "/images/b1.png",
      origin: "Western & Northern India",
      packaging: "25kg / 50kg PP Woven Export Bags",
      hsCode: "100630 / 090420",
      desc: "Long grain Parboiled Rice, Broken Rice, and whole spices tailored for food wholesalers and government supply contracts across African maritime destinations.",
      specifications: ["High Calorie & Nutrition Yield", "Fumigation & Port Inspection Certified", "Bulk 20ft & 40ft Container Stuffing"],
    },

    // 3. CHINA -> INDIA SPECIALTY IMPORTS
    {
      id: "china-apparel-kids-mens",
      name: "Kids Wear & Mens Fashion Garments",
      category: "china_import",
      corridor: "China ➔ India (Specialty Import)",
      image: "/images/service_air_cargo.jpg",
      origin: "Guangzhou & Zhejiang Apparel Hubs, China",
      packaging: "Export Hanger Packs & Compressed Carton Bales",
      hsCode: "611120 / 620342",
      desc: "Complete collection of trendy children's apparel, boys & girls casuals, men's streetwear, shirts, trousers, jackets, and winter clothing imported with fast port customs clearance.",
      specifications: ["Cotton & Blended Breathable Fabrics", "Color-Fast & Anti-Shrink Tested", "BIS / Textile Quality Compliant", "Fast Sea & Air Express Import"],
    },
    {
      id: "china-undergarments",
      name: "Ladies Undergarments, Lingerie & Shapewear",
      category: "china_import",
      corridor: "China ➔ India (Specialty Import)",
      image: "/images/freight_tablet_tracking.jpg",
      origin: "Shantou & Guangdong Textile Centers, China",
      packaging: "Private Label Boxes & Moisture-Barrier Master Cartons",
      hsCode: "621210 / 610822",
      desc: "Seamless lingerie, brassieres, panties, thermal innerwear, and shapewear with premium elastic trims, supplied directly to Indian retail chains and e-commerce brands.",
      specifications: ["Seamless Stretch Microfiber & Cotton", "Hypoallergenic Dyes", "Custom Brand Packaging Available", "Complete EDI Port Filing"],
    },
    {
      id: "china-cosmetics-beauty",
      name: "Beauty Cosmetics, Makeup & Personal Care Products",
      category: "china_import",
      corridor: "China ➔ India (Specialty Import)",
      image: "/images/freight_delivery_driver.jpg",
      origin: "Yiwu & Shanghai Cosmetics Zones, China",
      packaging: "Cushioned Inner Boxes with Anti-Leak Seal",
      hsCode: "330499 / 330790 / 961610",
      desc: "Cosmetics tools, makeup kits, eyeshadow palettes, lip cosmetics, skincare accessories, nail art, and beauty salon equipment imported with strict CDSCO regulatory compliance.",
      specifications: ["CDSCO / Drug Controller Guidelines Compliant", "Batch Coded & Ingredients Labelled", "DGR / Non-Hazardous Cargo Clearing", "Express Air & Ocean LCL/FCL"],
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
