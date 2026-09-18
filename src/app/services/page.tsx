"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Truck,
  Ship,
  ThermometerSnowflake,
  Weight,
  Wine,
  ArrowRightLeft,
  PackageCheck,
  Plane,
  Warehouse,
  Boxes,
  ShieldAlert,
  Layers,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Clock,
  Building2,
  Sparkles,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function ServicesPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState<any>(null);

  const handleOpenBooking = (serviceName: string) => {
    setBookingPrefill({ commodity: `${serviceName} Freight` });
    setIsBookingOpen(true);
  };

  const servicesList = [
    {
      id: "container-drayage",
      title: "Container Drayage",
      badge: "PORT & RAIL INTERMODAL",
      image: "/images/f1.png",
      icon: Ship,
      desc: "Fast, reliable container drayage connecting ocean marine terminals, inland rail ramps, and distribution centers across the USA and Canada with dedicated chassis fleets.",
      highlights: [
        "Major ocean port & inland rail ramp coverage",
        "Tri-axle & standard chassis availability",
        "Demurrage & per-diem mitigation",
        "24/7 dispatch & real-time container tracking",
      ],
    },
    {
      id: "full-truckload",
      title: "Full Truckload (FTL)",
      badge: "48 STATES DEDICATED",
      image: "/images/service_ftl_truckload.jpg",
      icon: Truck,
      desc: "Comprehensive nationwide Full Truckload capacity for dry vans and specialized equipment. Guaranteed load acceptance and reliable point-to-point transit across all 48 states.",
      highlights: [
        "Guaranteed load acceptance & dedicated fleets",
        "53ft Dry Van nationwide capacity",
        "Discounted competitive freight pricing",
        "Strict on-time delivery performance",
      ],
    },
    {
      id: "ltl-shipping",
      title: "LTL (Less Than Truckload)",
      badge: "CONSOLIDATED FREIGHT",
      image: "/images/service_ltl_freight.jpg",
      icon: Boxes,
      desc: "Cost-efficient Less Than Truckload consolidation for smaller palletized shipments. Maximize your freight budget with optimized routing and reliable transit schedules.",
      highlights: [
        "Economical regional & long-haul consolidations",
        "Flexible pickup and delivery windows",
        "Automated digital tracking updates",
        "High-density commercial freight discounts",
      ],
    },
    {
      id: "reefer-containers",
      title: "Reefer Containers / Trailers",
      badge: "COLD CHAIN LOGISTICS",
      image: "/images/service_cold_chain.jpg",
      icon: ThermometerSnowflake,
      desc: "Precision temperature-controlled reefer trailers and intermodal reefer containers for perishable food & beverage, pharmaceuticals, and temperature-sensitive chemicals.",
      highlights: [
        "Continuous digital temperature monitoring",
        "Frozen, chilled & climate-controlled capabilities",
        "FDA, FSMA & food-grade sanitization standards",
        "Pre-tripped and audited cooling machinery",
      ],
    },
    {
      id: "overweight-loads",
      title: "Overweight Loads",
      badge: "PERMITTED HEAVY HAUL",
      image: "/images/service_overweight_heavyhaul.jpg",
      icon: Weight,
      desc: "Certified heavy-haul transportation with multi-axle trailers and state-issued overweight permits for dense ocean containers, industrial machinery, and bulk cargo.",
      highlights: [
        "State-specific overweight corridor permits",
        "Heavy-duty tri-axle chassis deployment",
        "Engineered bridge formula compliance",
        "Safety escorts & route survey coordination",
      ],
    },
    {
      id: "alcohol-permits",
      title: "Alcohol Permits",
      badge: "LICENSED & BONDED",
      image: "/images/service_alcohol_permits.jpg",
      icon: Wine,
      desc: "Authorized and bonded carrier transport for alcoholic beverages, spirits, wine, and craft beer, meeting all federal TTB and individual state alcohol regulatory requirements.",
      highlights: [
        "TTB & interstate alcohol transportation permits",
        "High-security sealed trailer protocols",
        "Temperature-protected wine & beverage hauling",
        "Full chain-of-custody documentation",
      ],
    },
    {
      id: "transloading",
      title: "Transloading",
      badge: "MODAL CONVERSION",
      image: "/images/service_transloading_dock.jpg",
      icon: ArrowRightLeft,
      desc: "Seamless transloading between ocean shipping containers, rail cars, and over-the-road domestic 53ft trailers to reduce demurrage and streamline distribution.",
      highlights: [
        "Rapid port-side cross-dock & transload facilities",
        "Palletized, slip-sheet & floor-loaded cargo transfer",
        "Cargo weight re-balancing and inspection",
        "Significant reduction in per-diem storage costs",
      ],
    },
    {
      id: "palletize-shrinkwrap",
      title: "Palletize And Shrink Wrap",
      badge: "CARGO PREPARATION",
      image: "/images/service_palletize_shrinkwrap.jpg",
      icon: PackageCheck,
      desc: "Complete cargo stabilization, commercial pallet building, restacking, banding, and heavy-duty shrink-wrapping to prepare goods for secure long-haul trucking or rail transit.",
      highlights: [
        "Heavy-gauge industrial shrink-wrap protection",
        "Standard GMA wooden & plastic pallets",
        "Corner board protection & banding",
        "Damaged pallet rework and restacking",
      ],
    },
    {
      id: "airport-pickups",
      title: "Airport Pick ups",
      badge: "EXPEDITED AIR CARGO",
      image: "/images/service_airport_cargo.jpg",
      icon: Plane,
      desc: "Time-critical recovery and delivery of air freight from major airport cargo hubs with expedited roller-bed, van, and straight truck transfers.",
      highlights: [
        "Fast airline terminal cargo recovery",
        "TSA-compliant and bonded transport",
        "Same-day & next-flight-out dispatch",
        "Hotshot delivery to regional distribution centers",
      ],
    },
    {
      id: "container-storage",
      title: "Container Storage",
      badge: "SECURE YARDS",
      image: "/images/b1.png",
      icon: Warehouse,
      desc: "Secure, fenced, and 24/7 monitored container storage yards for loaded and empty intermodal shipping containers, chassis pools, and staged imports.",
      highlights: [
        "24/7 gated security with electronic surveillance",
        "Short-term and long-term staging options",
        "Reefer plug-in electrical connections available",
        "Chassis pool management and inspection",
      ],
    },
    {
      id: "export-stuffing",
      title: "Export Stuffing",
      badge: "MARITIME PACKING",
      image: "/images/service_export_stuffing.jpg",
      icon: Layers,
      desc: "Expert ocean container stuffing, blocking, bracing, and certified weight distribution to ensure cargo arrives intact and complies with SOLAS VGM maritime guidelines.",
      highlights: [
        "Custom heavy blocking, bracing & dunnage",
        "SOLAS VGM certified container weighing",
        "Moisture control and desiccant placement",
        "Export documentation and photographic verification",
      ],
    },
    {
      id: "hazmat",
      title: "Hazmat Cargo",
      badge: "DOT CERTIFIED HAZARDOUS",
      image: "/images/service_hazmat_transport.jpg",
      icon: ShieldAlert,
      desc: "Certified Hazardous Materials transportation executed by trained drivers with full DOT compliance, safety placards, and specialized safety response equipment.",
      highlights: [
        "DOT Hazmat certified drivers & equipment",
        "Classes 2, 3, 4, 5, 6, 8, and 9 capability",
        "Emergency response protocols & safety gear",
        "Comprehensive hazardous manifest auditing",
      ],
    },
    {
      id: "flatbed",
      title: "Flatbed Hauling",
      badge: "OPEN DECK CARGO",
      image: "/images/service_flatbed_hauling.jpg",
      icon: Truck,
      desc: "Versatile flatbed, step-deck, and drop-deck trailers for construction supplies, machinery, raw steel, lumber, and oversized commercial freight.",
      highlights: [
        "Standard flatbed, step-deck & lowboy equipment",
        "Heavy strapping, chains, and tarping services",
        "Job site and unimproved ground deliveries",
        "Over-dimensional routing and pilot vehicles",
      ],
    },
    {
      id: "warehousing",
      title: "Warehousing",
      badge: "SECURE DISTRIBUTION",
      image: "/images/service_warehouse.jpg",
      icon: Warehouse,
      desc: "Strategic warehousing and distribution solutions offering high-density pallet storage, cross-docking, pick-and-pack fulfillment, and modern inventory visibility.",
      highlights: [
        "Clean, climate-monitored facility space",
        "Barcode inventory tracking & EDI integration",
        "Short-term overflow & dedicated contract space",
        "Same-day order fulfillment and outbound staging",
      ],
    },
  ];

  return (
    <main className="w-full min-h-screen bg-[#f8fafc] text-slate-900 overflow-x-clip flex flex-col justify-between">
      <div>
        {/* Page Header */}
        <PageHeader
          badge="WHAT WE DO • 14 CORE CAPABILITIES"
          title="Comprehensive Freight &"
          highlightedWord="Logistics Services"
          description="USA-based fully licensed 3PL operating in 48 states across the USA and Canada with 20 years combined experience. We find the right carrier for the right load at the right time."
          breadcrumb="Services"
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* 14 Services Grid */}
        <section className="py-12 sm:py-16 px-4 sm:px-8 md:px-14 lg:px-20 max-w-[1520px] mx-auto w-full">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#dc2626] uppercase font-mono">
              NATIONWIDE 3PL CAPABILITIES
            </span>
            <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mt-1">
              Engineered for Speed &amp; Reliability
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              From intermodal port drayage and full truckloads to specialized reefer and hazmat shipping across USA &amp; Canada.
            </p>
          </div>

          <div className="flex flex-col gap-10 sm:gap-14">
            {servicesList.map((service, idx) => {
              const Icon = service.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white border border-slate-200/90 rounded-[32px] overflow-hidden shadow-md hover:shadow-2xl p-6 sm:p-8 md:p-10 backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group hover:border-[#dc2626]/40 transition-all duration-300"
                >
                  {/* Visual Side */}
                  <div
                    className={`lg:col-span-5 relative w-full h-[240px] sm:h-[290px] md:h-[330px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-slate-200/90 px-3.5 py-1 rounded-full text-xs font-mono text-[#dc2626] font-semibold shadow-sm">
                      {service.badge}
                    </div>
                  </div>

                  {/* Text Description Side */}
                  <div
                    className={`lg:col-span-7 flex flex-col gap-4 text-left ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#dc2626]/10 border border-[#dc2626]/20 flex items-center justify-center text-[#dc2626]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono text-slate-500 font-semibold uppercase tracking-wider">
                        Service #{String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="font-outfit text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm md:text-[15px] leading-relaxed">
                      {service.desc}
                    </p>

                    {/* Highlights List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 py-2">
                      {service.highlights.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#dc2626] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => handleOpenBooking(service.title)}
                        className="inline-flex items-center gap-2.5 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 shadow-lg shadow-red-600/25 active:scale-95 cursor-pointer"
                      >
                        <span>Book / Inquire This Service</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <a
                        href="tel:7329177747"
                        className="text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-950 transition-colors inline-flex items-center gap-1.5"
                      >
                        <PhoneCall className="w-3.5 h-3.5 text-[#dc2626]" />
                        <span>Call 732-917-7747</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Quick Quote Banner */}
        <section className="py-12 px-4 sm:px-8 md:px-14 lg:px-20 max-w-[1520px] mx-auto w-full">
          <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle,rgba(220,38,38,0.06)_0%,transparent_70%)] pointer-events-none" />
            
            <div className="max-w-2xl relative z-10">
              <span className="text-xs font-mono text-[#dc2626] font-bold tracking-widest uppercase">
                FAST FREIGHT DISPATCH
              </span>
              <h3 className="font-outfit text-2xl sm:text-3xl font-bold text-slate-900 mt-1 mb-2">
                Need a Custom 3PL Freight Quote or Dedicated Fleet?
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Connect directly with GM LOGISTICS SERVICES 24/7 dispatch desk. We match the right carrier for your load at discounted rates across 48 states and Canada.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 relative z-10 shrink-0">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all duration-300 shadow-xl shadow-red-600/20"
              >
                Instant Freight Quote
              </button>
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
        initialCommodity={bookingPrefill?.commodity}
      />
    </main>
  );
}
