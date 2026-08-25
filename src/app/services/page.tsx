"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Ship,
  Plane,
  Warehouse,
  FileCheck,
  ShieldAlert,
  SearchCheck,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Clock,
  Globe2,
  Truck,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function ServicesPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState<any>(null);

  const handleOpenBooking = (serviceName: string) => {
    setBookingPrefill({ commodity: `${serviceName} Consignment` });
    setIsBookingOpen(true);
  };

  const detailedServices = [
    {
      id: "uae-agro-export",
      title: "India ➔ UAE Agro & Produce Export Logistics",
      badge: "UAE & GULF CORRIDOR",
      image: "/images/service_uae_agro.jpg",
      icon: Ship,
      desc: "Full Container Load (FCL) dry and temperature-controlled Reefer shipping for Basmati Rice, Fresh Fruits, Vegetables, Pulses, and Indian Spices from Mundra and Hazira ports to Dubai (Jebel Ali), Sharjah, and Gulf ports.",
      highlights: [
        "Reefer Container Cold Chain for Fresh Fruits & Vegetables",
        "APEDA, FSSAI & Phytosanitary Documentation",
        "Direct Sailing Schedules with 3-5 Day Transit to Gulf",
        "Sortex Rice & Spices Container Stuffing Supervision",
      ],
    },
    {
      id: "africa-machinery-export",
      title: "India ➔ Africa Machinery, Trucks & Hardware Export",
      badge: "AFRICA & SOUTH AFRICA CORRIDOR",
      image: "/images/service_africa_machinery.jpg",
      icon: Truck,
      desc: "Specialized logistics for heavy commercial trucks, dumpers, JCB excavators, mining equipment, building safety tools, and structural hardware to South Africa (Durban), Kenya (Mombasa), Tanzania, and West African ports.",
      highlights: [
        "Ro-Ro (Roll-on/Roll-off) & Flat Rack Container Handling",
        "Heavy Earthmoving Machinery & JCB Lashing / Securing",
        "Export Packing for Building Safety Tools & Hardware",
        "Port-to-Project Site Delivery Across African Corridors",
      ],
    },
    {
      id: "china-specialty-import",
      title: "China ➔ India Specialty Apparel & Cosmetics Import",
      badge: "CHINA IMPORT SPECIALTY",
      image: "/images/service_china_import.jpg",
      icon: Plane,
      desc: "Comprehensive ocean and air express import clearance for Kids Wear, Mens Wear, Ladies Undergarments, Fashion Textiles, and Beauty Cosmetics / Personal Care from Guangzhou, Yiwu, Ningbo, and Shanghai to Indian ICDs.",
      highlights: [
        "Textile & Garment Customs Classification & EDI Filing",
        "CDSCO / Cosmetics Regulatory Compliance & Clearance",
        "LCL Cargo Consolidation & Direct FCL Container Import",
        "Fast-Track Port Deconsolidation & Door Delivery in India",
      ],
    },
    {
      id: "customs-compliance",
      title: "DGFT Customs Clearance & Port Brokerage",
      badge: "GOVT. COMPLIANCE",
      image: "/images/service_customs_clearance.jpg",
      icon: FileCheck,
      desc: "Official customs brokerage and regulatory compliance. Complete EDI filing, Bill of Lading, Shipping Bills, Certificate of Origin, and Duty Drawback at Mundra, Hazira, and JNPT.",
      highlights: [
        "Single-Window Customs EDI Port Processing",
        "Phytosanitary & Quality Inspection Clearances",
        "Zero-Delay Assessment & Duty Optimization",
        "Authorized Managing Partner Signatory Supervision",
      ],
    },
    {
      id: "warehousing-packaging",
      title: "Smart Warehousing, Palletizing & Cold Chain",
      badge: "LOGISTICS HUBS",
      image: "/images/service_cold_chain.jpg",
      icon: Warehouse,
      desc: "Strategic warehousing near Gujarat ports offering export-grade palletizing, vacuum packaging for spices, moisture-barrier wrapping, and precision temperature storage for agricultural perishables.",
      highlights: [
        "24/7 Monitored CCTV Security & Temperature Logs",
        "Export Palletizing, Shrink Wrapping & Crating",
        "Barcode Scanning & Inventory Management",
        "Automated Container Stuffing & De-stuffing",
      ],
    },
    {
      id: "quality-inspection",
      title: "Pre-Shipment Quality Inspection & Sourcing Advisory",
      badge: "QUALITY ASSURANCE",
      image: "/images/freight_tablet_tracking.jpg",
      icon: SearchCheck,
      desc: "Independent quality verification, weight certification, and container seal auditing to guarantee that exported rice, spices, fruits, machinery, and imported garments strictly comply with buyer specifications.",
      highlights: [
        "Comprehensive Pre-Shipment Audit Reports",
        "Grain Moisture, Purity & Grade Verification",
        "Machinery Load Testing & Anti-Rust Checks",
        "Apparel Stitching & Fabric GSM Verification",
      ],
    },
  ];

  return (
    <main className="w-full min-h-screen bg-[#07080b] text-white overflow-x-hidden flex flex-col justify-between">
      <div>
        {/* Page Header */}
        <PageHeader
          badge="10X INTERNATIONAL SERVICES"
          title="End-to-End Export, Import &"
          highlightedWord="Freight Logistics"
          description="Comprehensive cross-border logistics capabilities powered by government-registered compliance, prime port access, and precision supply chain execution."
          breadcrumb="Services"
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Detailed Services Grid */}
        <section className="py-12 sm:py-16 px-4 sm:px-8 md:px-14 lg:px-20 max-w-[1520px] mx-auto w-full">
          <div className="flex flex-col gap-12 sm:gap-16">
            {detailedServices.map((service, idx) => {
              const Icon = service.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="bg-zinc-900/90 border border-white/15 rounded-[32px] overflow-hidden shadow-2xl p-6 sm:p-8 md:p-10 backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group hover:border-[#ff5500]/40 transition-all duration-300"
                >
                  {/* Visual Side */}
                  <div
                    className={`lg:col-span-6 relative w-full h-[260px] sm:h-[320px] md:h-[360px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/20 px-3.5 py-1 rounded-full text-xs font-mono text-[#ff5500] font-semibold">
                      {service.badge}
                    </div>
                  </div>

                  {/* Text Description Side */}
                  <div
                    className={`lg:col-span-6 flex flex-col gap-4 text-left ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#ff5500]/15 border border-[#ff5500]/30 flex items-center justify-center text-[#ff5500]">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h2 className="font-outfit text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                      {service.title}
                    </h2>

                    <p className="text-zinc-300 text-xs sm:text-sm md:text-[15px] leading-relaxed">
                      {service.desc}
                    </p>

                    {/* Highlights List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 py-2">
                      {service.highlights.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-[#ff5500] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-2 flex items-center gap-4">
                      <button
                        onClick={() => handleOpenBooking(service.title)}
                        className="inline-flex items-center gap-2.5 bg-[#ff5500] hover:bg-[#e04800] text-white text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 shadow-lg shadow-orange-500/25 active:scale-95 cursor-pointer"
                      >
                        <span>Book / Inquire This Service</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <Link
                        href="/contact"
                        className="text-xs sm:text-sm font-semibold text-zinc-400 hover:text-white transition-colors"
                      >
                        Talk to an Expert →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Global Hubs Banner */}
        <section className="py-12 px-4 sm:px-8 md:px-14 lg:px-20 max-w-[1520px] mx-auto w-full">
          <div className="bg-zinc-950 border border-white/15 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="max-w-xl">
              <h3 className="font-outfit text-2xl sm:text-3xl font-bold text-white mb-2">
                Need a Custom Freight Corridor or Bulk Quotation?
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Connect directly with 10X INTERNATIONAL managing partners to discuss container allocations, recurring sailing schedules, or specialized customs clearances.
              </p>
            </div>
            <Link
              href="/contact"
              className="bg-white hover:bg-zinc-100 text-zinc-950 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all duration-300 shadow-xl shrink-0"
            >
              Contact Ahmedabad HQ
            </Link>
          </div>
        </section>
      </div>

      <Footer />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialCommodity={bookingPrefill?.commodity}
      />
    </main>
  );
}
