"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Globe2,
  Users,
  Building2,
  FileCheck2,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Truck,
  Anchor,
  Plane,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function AboutPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const stats = [
    { value: "DGFT", label: "Govt. of India Certified", sub: "IEC: AADFZ3605M" },
    { value: "GSTIN", label: "Registered Partnership", sub: "24AADFZ3605M1Z0" },
    { value: "50+", label: "Global Trade Corridors", sub: "Sea, Air & Land" },
    { value: "100%", label: "Customs Compliance", sub: "Zero-Hassle Clearance" },
  ];

  const partners = [
    {
      name: "Mohamedirfan Safimohamed",
      role: "Managing Partner",
      bio: "Spearheading strategic global alliances, trade route optimization, and international client relations for 10X INTERNATIONAL.",
      badge: "Managing Partner",
    },
    {
      name: "Nawazuddin Saiyed",
      role: "Managing Partner & Authorized Signatory",
      bio: "Overseeing DGFT regulatory compliance, customs documentation, cross-border shipping logistics, and operational excellence.",
      badge: "Authorized Signatory",
    },
  ];

  const coreValues = [
    {
      icon: ShieldCheck,
      title: "Government Verified & Compliant",
      desc: "Operating strictly under DGFT (Directorate General of Foreign Trade) and GST regulations with full legal transparency.",
    },
    {
      icon: Globe2,
      title: "Worldwide Multimodal Connectivity",
      desc: "Direct access to premier container ports including Mundra, JNPT, Hazira, and international air cargo networks.",
    },
    {
      icon: Award,
      title: "Uncompromising Quality Control",
      desc: "Rigorous pre-shipment inspections, packaging standards, and certified temperature-controlled container monitoring.",
    },
    {
      icon: Users,
      title: "Dedicated Partner Support",
      desc: "Personalized single-window customer support ensuring transparent container tracking and fast documentation turnaround.",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-[#07080b] text-white overflow-x-hidden flex flex-col justify-between">
      <div>
        {/* Page Banner */}
        <PageHeader
          badge="ABOUT 10X INTERNATIONAL"
          title="Empowering Global Trade Through"
          highlightedWord="Integrity & Speed"
          description="10X INTERNATIONAL is a government-certified export-import firm based in Ahmedabad, Gujarat, connecting Indian manufacturers and global buyers with world-class logistics and trade solutions."
          breadcrumb="About Us"
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* 1. Official Credentials & Stats Bar */}
        <section className="relative z-20 -mt-8 px-4 sm:px-8 md:px-14 lg:px-20 max-w-[1520px] mx-auto w-full">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 bg-zinc-900/90 border border-white/15 backdrop-blur-2xl rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl">
            {stats.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col p-2 text-center lg:text-left border-r border-white/10 last:border-none"
              >
                <span className="font-bebas text-3xl sm:text-4xl lg:text-5xl text-[#ff5500] leading-none mb-1">
                  <AnimatedCounter value={item.value} />
                </span>
                <span className="font-outfit font-bold text-white text-xs sm:text-sm">
                  {item.label}
                </span>
                <span className="text-zinc-400 text-[11px] font-mono mt-0.5">{item.sub}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 2. Corporate Story & Firm Profile */}
        <section className="py-14 sm:py-20 px-4 sm:px-8 md:px-14 lg:px-20 max-w-[1520px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Visual Stack */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative w-full h-[320px] sm:h-[400px] md:h-[460px] rounded-[32px] overflow-hidden border border-white/20 shadow-2xl bg-zinc-900 group">
                <Image
                  src="/images/port_background.jpg"
                  alt="10X INTERNATIONAL Maritime Port Logistics"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Floating Official Verified Seal */}
                <div className="absolute bottom-6 left-6 right-6 bg-black/70 backdrop-blur-xl border border-white/20 rounded-2xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#ff5500] flex items-center justify-center text-white shrink-0 shadow-lg shadow-orange-500/30">
                    <FileCheck2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-outfit font-bold text-sm text-white">
                      DGFT Registered Exporter
                    </h4>
                    <p className="text-zinc-400 text-xs mt-0.5">
                      Ministry of Commerce & Industry • <span className="text-[#ff5500] font-semibold">Government of India</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Story Description */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:col-span-6 flex flex-col gap-5 text-left"
            >
              <span className="text-xs font-bold tracking-widest text-[#ff5500] uppercase font-mono">
                ABOUT OUR FIRM
              </span>
              <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Pioneering Indian Exports with <span className="text-[#ff5500]">Global Standards</span>
              </h2>
              <p className="text-zinc-300 text-xs sm:text-sm md:text-base leading-relaxed">
                Founded as a registered partnership in Ahmedabad, Gujarat, <strong className="text-white">10X INTERNATIONAL</strong> operates premier multi-continental trade corridors:
              </p>
              <ul className="text-zinc-300 text-xs sm:text-sm space-y-2 border-l-2 border-[#ff5500] pl-3 my-1">
                <li><strong className="text-[#ff5500]">India ➔ UAE & Gulf:</strong> Exporting premium Basmati Rice, Fresh Fruits, Vegetables, Pulses, and Indian Spices (Cumin, Turmeric, Coriander) via Reefer & Dry container vessels.</li>
                <li><strong className="text-[#ff5500]">India ➔ Africa & South Africa:</strong> Exporting heavy trucks, tipper dumpers, JCB excavators, building safety tools, industrial hardware, spices, and grains.</li>
                <li><strong className="text-[#ff5500]">China ➔ India (Specialty Import):</strong> High-volume import of Kids Wear, Mens Wear, Ladies Undergarments / Lingerie, and Beauty Cosmetics / Personal Care.</li>
              </ul>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Headquartered strategically on Sarkhej Road, Ahmedabad, near India’s vital maritime gateways (Mundra, Hazira, and JNPT), we manage cross-border shipping with strict DGFT & customs regulatory compliance.
              </p>

              {/* Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Government-Registered Importer-Exporter",
                  "Verified Customs & GST Compliance",
                  "Mundra, Hazira & JNPT Direct Port Access",
                  "Specialized UAE & Africa Export Corridors",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-[#ff5500] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-3">
                <Link
                  href="/compliance"
                  className="inline-flex items-center gap-2 bg-[#ff5500] hover:bg-[#e04800] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-orange-500/25 hover:scale-105 active:scale-95"
                >
                  <span>View Govt. Certifications</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. Leadership & Managing Partners */}
        <section className="py-14 bg-zinc-950/60 border-y border-white/10 px-4 sm:px-8 md:px-14 lg:px-20">
          <div className="max-w-[1520px] mx-auto w-full">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold tracking-widest text-[#ff5500] uppercase font-mono">
                LEADERSHIP TEAM
              </span>
              <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-1">
                Managing Partners
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm mt-2">
                Guiding 10X INTERNATIONAL with strategic foresight, extensive trade compliance expertise, and dedicated global partner care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {partners.map((partner, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="bg-zinc-900/90 border border-white/15 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl backdrop-blur-xl relative overflow-hidden group hover:border-[#ff5500]/50 transition-all duration-300"
                >
                  {/* Decorative Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle,rgba(255,85,0,0.15)_0%,transparent_70%)] rounded-full pointer-events-none" />

                  <div>
                    <div className="inline-block bg-[#ff5500]/15 border border-[#ff5500]/30 text-[#ff5500] text-xs font-mono font-semibold px-3 py-1 rounded-full mb-4">
                      {partner.badge}
                    </div>
                    <h3 className="font-outfit text-xl sm:text-2xl font-bold text-white mb-1">
                      {partner.name}
                    </h3>
                    <p className="text-sm font-semibold text-zinc-300 mb-3">{partner.role}</p>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {partner.bio}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400 font-mono">
                    <span>10X INTERNATIONAL</span>
                    <span className="text-[#ff5500]">Ahmedabad, Gujarat</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Core Pillars of Excellence */}
        <section className="py-16 sm:py-24 px-4 sm:px-8 md:px-14 lg:px-20 max-w-[1520px] mx-auto w-full">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-[#ff5500] uppercase font-mono">
              OUR PILLARS
            </span>
            <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-1">
              Why Global Buyers Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-zinc-900/80 border border-white/15 rounded-3xl p-6 sm:p-7 flex flex-col gap-3.5 shadow-xl hover:border-[#ff5500]/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#ff5500]/15 border border-[#ff5500]/30 flex items-center justify-center text-[#ff5500] group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-outfit font-bold text-base sm:text-lg text-white">
                    {val.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-[13px] leading-relaxed">
                    {val.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* 5. Registered Office Callout Banner */}
        <section className="pb-16 px-4 sm:px-8 md:px-14 lg:px-20 max-w-[1520px] mx-auto w-full">
          <div className="bg-gradient-to-r from-[#ff5500] to-[#e04800] text-zinc-950 rounded-[32px] p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-black uppercase tracking-wider text-black/70">
                OFFICIAL REGISTERED OFFICE
              </span>
              <h3 className="font-outfit text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-950 mt-1 mb-2">
                Visit or Contact Our Ahmedabad Headquarters
              </h3>
              <p className="text-zinc-950/90 font-medium text-xs sm:text-sm leading-relaxed">
                Nr. Haji Bawa Ni Kui, 14/4, M.J.D. Farm, Sarkhej Road, Juhapura, Ahmedabad, Gujarat 380055, India.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="bg-zinc-950 hover:bg-black text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all duration-300 shadow-xl"
              >
                Get in Touch with Partners
              </Link>
              <button
                onClick={() => setIsBookingOpen(true)}
                className="bg-white hover:bg-zinc-100 text-zinc-950 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all duration-300 shadow-xl"
              >
                Instant Cargo Booking
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </main>
  );
}
