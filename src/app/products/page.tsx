"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Car,
  FlaskConical,
  UtensilsCrossed,
  HeartPulse,
  Layers,
  FileBox,
  Warehouse,
  Cpu,
  Pill,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  Boxes,
  Sparkles,
  Truck,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function IndustriesPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [rfqItem, setRfqItem] = useState<string | null>(null);

  const industriesList = [
    {
      id: "automotive",
      name: "Automotive",
      category: "industrial",
      badge: "JUST-IN-TIME LOGISTICS",
      image: "/images/industry_automotive.jpg",
      icon: Car,
      leadTime: "Expedited & Scheduled",
      desc: "Time-critical delivery of tier-1 automotive components, powertrains, aftermarket parts, and assembly line replenishment with guaranteed on-time delivery across North America.",
      capabilities: [
        "JIT production line scheduled deliveries",
        "Dedicated full truckload & hotshot dispatch",
        "Cross-border USA & Canada transit",
        "Zero-delay expedited drayage",
      ],
    },
    {
      id: "chemical",
      name: "Chemical",
      category: "specialized",
      badge: "HAZMAT & SAFETY CERTIFIED",
      image: "/images/industry_chemical.jpg",
      icon: FlaskConical,
      leadTime: "DOT Hazmat Certified",
      desc: "Licensed transportation for liquid, dry bulk, and packaged specialty chemicals. Handled by Hazmat-certified drivers with specialized safety gear and strict DOT regulatory adherence.",
      capabilities: [
        "DOT Hazmat Classes 2 through 9 certified",
        "Specialized temperature-monitored reefer units",
        "Spill containment & safety emergency protocols",
        "Complete hazardous materials shipping papers",
      ],
    },
    {
      id: "food-beverage",
      name: "Food & Beverage",
      category: "temperature",
      badge: "COLD CHAIN & ALCOHOL PERMITS",
      image: "/images/service_cold_chain.jpg",
      icon: UtensilsCrossed,
      leadTime: "Food Grade & Temperature Monitored",
      desc: "Nationwide reefer and dry van freight for perishable foods, grocery distributor networks, and alcoholic beverages under official state and federal alcohol permits.",
      capabilities: [
        "Reefer temperature control (frozen & chilled)",
        "Fully licensed for alcohol beverage transport",
        "FDA & FSMA sanitation compliant equipment",
        "Grocery distribution center (DC) delivery",
      ],
    },
    {
      id: "healthcare",
      name: "Healthcare",
      category: "specialized",
      badge: "TIME-SENSITIVE SUPPLIES",
      image: "/images/industry_healthcare.jpg",
      icon: HeartPulse,
      leadTime: "Priority Dispatch",
      desc: "Reliable freight solutions for medical equipment, clinical consumables, personal protective equipment (PPE), and hospital system logistics with unbroken chain of custody.",
      capabilities: [
        "White-glove inside delivery options",
        "Time-definite hospital & clinic replenishment",
        "Secure sealed trailer protocols",
        "24/7 dedicated dispatch coordination",
      ],
    },
    {
      id: "plastics",
      name: "Plastics",
      category: "industrial",
      badge: "BULK RESIN & CONVERTING",
      image: "/images/service_palletize_shrinkwrap.jpg",
      icon: Layers,
      leadTime: "High Volume Capacity",
      desc: "Heavy-haul container drayage and full truckloads for virgin plastic resins, masterbatches, polymers, molded goods, and industrial film converters.",
      capabilities: [
        "Tri-axle chassis for heavy resin containers",
        "Port drayage to inland manufacturing plants",
        "Clean, dry 53ft trailers for finished products",
        "Transloading from rail hopper cars to trucks",
      ],
    },
    {
      id: "paper-packing",
      name: "Paper & Packing",
      category: "industrial",
      badge: "HEAVY ROLL & CORRUGATED",
      image: "/images/service_export_stuffing.jpg",
      icon: FileBox,
      leadTime: "High Capacity Fleets",
      desc: "Heavy paper roll transport, corrugated box distribution, shrink films, and export dunnage hauling with specialized blocking, bracing, and moisture protection.",
      capabilities: [
        "Engineered weight distribution for roll stock",
        "Moisture-tight trailer seals and tarping",
        "High-cube dry van staging and delivery",
        "Palletize, banding, and shrink-wrap staging",
      ],
    },
    {
      id: "warehousing",
      name: "Warehousing",
      category: "logistics",
      badge: "CROSS-DOCK & FULFILLMENT",
      image: "/images/service_warehouse.jpg",
      icon: Warehouse,
      leadTime: "Flexible Short/Long Term",
      desc: "Strategic storage, cross-dock transloading, ocean container devanning, pallet rework, and nationwide distribution hub connectivity.",
      capabilities: [
        "24/7 secure container yard storage",
        "Rapid cross-docking & transloading",
        "Palletizing, restacking, and shrink wrapping",
        "Chassis pool staging and equipment management",
      ],
    },
    {
      id: "technology-electronics",
      name: "Technology & Electronics",
      category: "specialized",
      badge: "HIGH-VALUE & AIR FREIGHT",
      image: "/images/service_airport_cargo.jpg",
      icon: Cpu,
      leadTime: "High Security & Expedited",
      desc: "High-security transport for semiconductors, telecommunications equipment, computer hardware, and consumer electronics with airport recovery capabilities.",
      capabilities: [
        "Expedited airport pick ups and deliveries",
        "Air-ride suspension equipped trailers",
        "High-security GPS geofenced transit",
        "Sealed container tamper-evident protocols",
      ],
    },
    {
      id: "pharmaceutical",
      name: "Pharmaceutical",
      category: "temperature",
      badge: "GDP TEMPERATURE MONITORED",
      image: "/images/service_cold_chain.jpg",
      icon: Pill,
      leadTime: "Continuous Cold Chain",
      desc: "Strict temperature-controlled reefer trailers, validated transit routes, and dedicated drivers trained in pharmaceutical cold chain standards.",
      capabilities: [
        "Continuous digital temperature logging",
        "Pre-cooled and calibrated reefer units",
        "Priority emergency routing",
        "Stringent audit trails & temperature reports",
      ],
    },
  ];

  const filterTabs = [
    { id: "all", label: "All 9 Industries" },
    { id: "industrial", label: "Industrial & Manufacturing" },
    { id: "temperature", label: "Cold Chain & Perishables" },
    { id: "specialized", label: "Specialized & Regulated" },
  ];

  const filteredIndustries =
    activeCategory === "all"
      ? industriesList
      : industriesList.filter((item) => item.category === activeCategory);

  const handleOpenRFQ = (industryName: string) => {
    setRfqItem(industryName);
    setIsBookingOpen(true);
  };

  return (
    <main className="w-full min-h-screen bg-[#f8fafc] text-slate-900 overflow-x-clip flex flex-col justify-between">
      <div>
        {/* Page Banner Header */}
        <PageHeader
          badge="INDUSTRIES WE SERVE"
          title="Tailored 3PL Solutions Across"
          highlightedWord="North American Industries"
          description="GM LOGISTICS SERVICES delivers safe, secure, and reliable freight logistics engineered specifically for 9 key industry sectors across 48 states and Canada."
          breadcrumb="Industries We Serve"
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Industry Sector Filter Pills */}
        <section className="py-6 px-4 sm:px-8 max-w-[1520px] mx-auto w-full">
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#dc2626] text-white shadow-lg shadow-red-600/25 scale-105"
                      : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200 shadow-sm"
                  }`}
                >
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* 9 Industries Grid */}
        <section className="py-8 sm:py-12 px-4 sm:px-8 md:px-14 lg:px-20 max-w-[1520px] mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredIndustries.map((ind, idx) => {
              const Icon = ind.icon;

              return (
                <motion.div
                  key={ind.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                  className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden flex flex-col justify-between shadow-md hover:shadow-xl backdrop-blur-xl group hover:border-[#dc2626]/40 transition-all duration-300"
                >
                  <div>
                    {/* Card Visual with Tag */}
                    <div className="relative w-full h-[200px] sm:h-[220px] overflow-hidden bg-slate-100">
                      <Image
                        src={ind.image}
                        alt={ind.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                      
                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 bg-[#dc2626] px-3 py-1 rounded-full text-[10px] font-mono font-bold text-white shadow-sm">
                        {ind.badge}
                      </div>

                      <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md border border-slate-200/90 px-2.5 py-0.5 rounded-full text-[10px] font-mono text-slate-700 font-bold shadow-sm">
                        {ind.leadTime}
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-5 sm:p-6 flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#dc2626]/10 border border-[#dc2626]/20 flex items-center justify-center text-[#dc2626]">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-outfit text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#dc2626] transition-colors">
                          {ind.name}
                        </h3>
                      </div>

                      <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                        {ind.desc}
                      </p>

                      {/* Capabilities List */}
                      <div className="space-y-1.5 pt-3 border-t border-slate-200">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                          Sector Capabilities:
                        </span>
                        <div className="space-y-1 text-xs text-slate-700">
                          {ind.capabilities.map((cap, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#dc2626] shrink-0" />
                              <span className="text-slate-700">{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="p-5 sm:p-6 pt-0">
                    <button
                      onClick={() => handleOpenRFQ(ind.name)}
                      className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs sm:text-sm font-semibold py-3 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-red-600/20 transition-all duration-300 active:scale-95 cursor-pointer"
                    >
                      <span>Inquire {ind.name} Freight</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Commitment Banner */}
        <section className="py-12 px-4 sm:px-8 md:px-14 lg:px-20 max-w-[1520px] mx-auto w-full">
          <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle,rgba(220,38,38,0.06)_0%,transparent_70%)] pointer-events-none" />
            
            <div className="max-w-2xl relative z-10">
              <span className="text-xs font-mono text-[#dc2626] font-bold tracking-widest uppercase">
                GMLS CLIENT COMMITMENT
              </span>
              <h3 className="font-outfit text-2xl sm:text-3xl font-bold text-slate-900 mt-1 mb-2">
                Hassle-Free Shipping &amp; Discounted Prices
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                We find the right carrier for the right load at the right time. Backed by 20 years of combined experience and year-round fleet availability across 48 states in the USA and Canada.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 relative z-10 shrink-0">
              <a
                href="tel:7329177747"
                className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all duration-300 shadow-xl inline-flex items-center gap-2 shadow-red-600/20"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call 732-917-7747</span>
              </a>
              <Link
                href="/contact"
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all duration-300 border border-slate-300 shadow-sm"
              >
                Contact 24/7 Desk
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialCommodity={rfqItem ? `${rfqItem} Logistics` : undefined}
      />
    </main>
  );
}
