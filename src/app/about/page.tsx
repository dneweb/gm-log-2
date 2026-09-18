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
  Clock,
  Sparkles,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function AboutPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const stats = [
    { value: "48 States", label: "USA & Canada Coverage", sub: "Nationwide 3PL Network" },
    { value: "20+", label: "Years Combined Experience", sub: "Logistics Specialists" },
    { value: "24/7", label: "Availability Of Fleets", sub: "Call: 732-917-7747" },
    { value: "100%", label: "Guaranteed Load Acceptance", sub: "On-Time Delivery" },
  ];

  const missionCommitments = [
    {
      title: "Our Mission Statement",
      badge: "DRIVING BUSINESS FORWARD",
      desc: "GMLS thrives to provide logistics beyond expectations. We drive your business forward by providing safe, secure and reliable logistics services. We think about your logistics, So you don't have to.",
      highlights: [
        "Safe, secure and reliable execution",
        "Logistics beyond expectations",
        "End-to-end cargo peace of mind",
      ],
    },
    {
      title: "Our Client Commitment",
      badge: "HASSLE-FREE 3PL FREIGHT",
      desc: "Hassle-free shipping, discounted prices, finding the right carrier for the right load at the right time. Our team ensures seamless freight movement across 48 states and cross-border Canada.",
      highlights: [
        "Hassle-free shipping workflows",
        "Competitive discounted freight rates",
        "Right carrier for the right load at the right time",
      ],
    },
  ];

  const coreStrengths = [
    {
      icon: Truck,
      title: "Year-round Availability Of Fleets",
      desc: "Extensive nationwide capacity of dry vans, reefer units, flatbeds, and port drayage chassis operating every season.",
    },
    {
      icon: Award,
      title: "Guaranteed Load Acceptance & On Time Delivery",
      desc: "Rigorous carrier vetting and dedicated dispatch oversight ensure zero dropped loads and punctuality on every lane.",
    },
    {
      icon: Clock,
      title: "Hassle-Free, Last Minute Pickups & Deliveries",
      desc: "Rapid-response emergency freight coordination ready for urgent, same-day, and time-critical consignments.",
    },
    {
      icon: ShieldCheck,
      title: "Fully Licensed USA 3PL With Reliability",
      desc: "Operating with alcohol permits, hazmat certification, and overweight authorization backed by 20 years combined expertise.",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-[#f8fafc] text-slate-900 overflow-x-clip flex flex-col justify-between">
      <div>
        {/* Page Banner */}
        <PageHeader
          badge="ABOUT GM LOGISTICS SERVICES"
          title="Logistics Beyond Expectation with"
          highlightedWord="Safe & Secure 3PL"
          description="GM LOGISTICS SERVICES is a USA-based fully licensed 3PL operating in 48 states across the USA and Canada with 20 years of combined experience. We think about your logistics, so you don't have to."
          breadcrumb="About Us"
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* 1. Official Credentials & Stats Bar */}
        <section className="relative z-20 -mt-8 px-4 sm:px-8 md:px-14 lg:px-20 max-w-[1520px] mx-auto w-full">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 bg-white border border-slate-200/90 backdrop-blur-2xl rounded-3xl p-4 sm:p-6 md:p-8 shadow-[0_20px_50px_rgba(15,23,42,0.06),0_1px_3px_rgba(15,23,42,0.05)]">
            {stats.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col p-2 text-center lg:text-left border-r border-slate-200 last:border-none"
              >
                <span className="font-bebas text-3xl sm:text-4xl lg:text-5xl text-[#dc2626] leading-none mb-1">
                  <AnimatedCounter value={item.value} />
                </span>
                <span className="font-outfit font-bold text-slate-900 text-xs sm:text-sm">
                  {item.label}
                </span>
                <span className="text-slate-500 text-[11px] font-mono mt-0.5">{item.sub}</span>
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
              <div className="relative w-full h-[320px] sm:h-[400px] md:h-[460px] rounded-[32px] overflow-hidden border border-slate-200/90 shadow-xl bg-slate-100 group">
                <Image
                  src="/images/port_background.jpg"
                  alt="GM LOGISTICS SERVICES Intermodal Drayage and Freight"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                
                {/* Floating Official Verified Seal */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-2xl p-4 flex items-center gap-4 shadow-xl">
                  <div className="w-12 h-12 rounded-xl bg-[#dc2626] flex items-center justify-center text-white shrink-0 shadow-md">
                    <FileCheck2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-outfit font-bold text-sm text-slate-900">
                      USA-Based Fully Licensed 3PL
                    </h4>
                    <p className="text-slate-500 text-xs mt-0.5">
                      Operating in 48 States &amp; Canada • <span className="text-[#dc2626] font-semibold">Kendall Park, NJ</span>
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
              <span className="text-xs font-bold tracking-widest text-[#dc2626] uppercase font-mono">
                ABOUT OUR COMPANY
              </span>
              <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                Logistics Beyond Expectation Across <span className="text-[#dc2626]">USA &amp; Canada</span>
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
                <strong className="text-slate-900">GM LOGISTICS SERVICES (GMLS)</strong> is a premier USA-based fully licensed 3PL operating across 48 states in the USA and Canada with 20 years of combined industry experience.
              </p>
              
              <div className="bg-slate-50 border-l-4 border-[#dc2626] border-y border-r border-slate-200/80 p-4 rounded-r-2xl">
                <p className="text-xs font-mono uppercase text-[#dc2626] font-bold tracking-wider mb-1">
                  Our Mission
                </p>
                <p className="text-slate-800 text-xs sm:text-sm italic font-medium leading-relaxed">
                  &ldquo;GMLS thrives to provide logistics beyond expectations. We drive your business forward by providing safe, secure and reliable logistics services. We think about your logistics, So you don&apos;t have to.&rdquo;
                </p>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Headquartered at <strong className="text-slate-900">45 Promise Way, Kendall Park NJ</strong>, we provide dedicated freight solutions, matching the right carrier for the right load at discounted prices with guaranteed load acceptance.
              </p>

              {/* Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "USA-Based Fully Licensed 3PL",
                  "48 States Across USA & Canada",
                  "20 Years Combined Experience",
                  "24/7 Dispatch Desk: 732-917-7747",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#dc2626] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-3 flex flex-wrap gap-3">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-red-600/25 hover:scale-105 active:scale-95"
                >
                  <span>Explore 14 Core Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/compliance"
                  className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300 border border-slate-300 hover:scale-105 active:scale-95 shadow-sm"
                >
                  <span>Licensing &amp; Strengths</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. Mission & Client Commitment Cards */}
        <section className="py-14 bg-white border-y border-slate-200 px-4 sm:px-8 md:px-14 lg:px-20">
          <div className="max-w-[1520px] mx-auto w-full">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold tracking-widest text-[#dc2626] uppercase font-mono">
                CORE PROMISES
              </span>
              <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mt-1">
                Mission &amp; Client Commitment
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-2">
                Delivering excellence, carrier reliability, and transparent freight management on every shipment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {missionCommitments.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="bg-slate-50/80 border border-slate-200/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md backdrop-blur-xl relative overflow-hidden group hover:border-[#dc2626]/40 transition-all duration-300"
                >
                  {/* Decorative Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle,rgba(220,38,38,0.06)_0%,transparent_70%)] rounded-full pointer-events-none" />

                  <div>
                    <div className="inline-block bg-[#dc2626]/10 border border-[#dc2626]/25 text-[#dc2626] text-xs font-mono font-semibold px-3 py-1 rounded-full mb-4">
                      {card.badge}
                    </div>
                    <h3 className="font-outfit text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {card.desc}
                    </p>

                    <div className="space-y-2.5">
                      {card.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#dc2626] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-mono">
                    <span>GM LOGISTICS SERVICES</span>
                    <span className="text-[#dc2626] font-semibold">Kendall Park, NJ</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Core Pillars of Strength */}
        <section className="py-16 sm:py-24 px-4 sm:px-8 md:px-14 lg:px-20 max-w-[1520px] mx-auto w-full">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-[#dc2626] uppercase font-mono">
              OUR STRENGTH
            </span>
            <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mt-1">
              Why Shippers Choose GMLS
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Built on 20 years combined experience, round-the-clock availability, and guaranteed load fulfillment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreStrengths.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 flex flex-col gap-3.5 shadow-md hover:shadow-xl hover:border-[#dc2626]/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#dc2626]/10 border border-[#dc2626]/25 flex items-center justify-center text-[#dc2626] group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-outfit font-bold text-base sm:text-lg text-slate-900">
                    {val.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                    {val.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* 5. Registered Office Callout Banner */}
        <section className="pb-16 px-4 sm:px-8 md:px-14 lg:px-20 max-w-[1520px] mx-auto w-full">
          <div className="bg-gradient-to-r from-[#dc2626] via-[#b91c1c] to-[#991b1b] text-white rounded-[32px] p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-black uppercase tracking-wider text-white/80 font-mono">
                HEADQUARTERS & 24/7 DISPATCH DESK
              </span>
              <h3 className="font-outfit text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mt-1 mb-2">
                Connect with GM LOGISTICS SERVICES
              </h3>
              <p className="text-white/90 font-medium text-xs sm:text-sm leading-relaxed">
                45 Promise Way, Kendall Park NJ 08824 • Phone: 732-917-7747 • Fax / Secondary: 732-917-7741 • Email: dispatch@gmlsvs.com
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap items-center gap-3">
              <a
                href="tel:7329177747"
                className="bg-slate-950 hover:bg-black text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all duration-300 shadow-xl inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#ef4444]" />
                <span>Call 732-917-7747</span>
              </a>
              <button
                onClick={() => setIsBookingOpen(true)}
                className="bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all duration-300 shadow-xl"
              >
                Request 3PL Quote
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
