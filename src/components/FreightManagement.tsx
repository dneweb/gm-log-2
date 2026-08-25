"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Truck,
  Ship,
  Plane,
  ShieldCheck,
  Zap,
  Warehouse,
  Radio,
  FileCheck2,
} from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function FreightManagement() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (leftColRef.current && rightColRef.current) {
        gsap.fromTo(
          leftColRef.current,
          { opacity: 0, x: -50, scale: 0.96 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.fromTo(
          rightColRef.current,
          { opacity: 0, x: 50, scale: 0.96 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            delay: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const filterTags = [
    { name: "India ➔ UAE Agro Export", href: "/products" },
    { name: "India ➔ Africa Machinery", href: "/products" },
    { name: "China ➔ India Imports", href: "/products" },
    { name: "DGFT Port Brokerage", href: "/compliance" },
  ];

  const articles = [
    {
      id: 1,
      image: "/images/service_cold_chain.jpg",
      alt: "Smart Cold Chain & Warehouse Logistics Management",
      title: "Real-Time Digital Cargo Tracking & Optimized Port Dispatch Operations",
    },
    {
      id: 2,
      image: "/images/service_customs_clearance.jpg",
      alt: "Customs Inspection and Port Freight Forwarding",
      title: "Direct Port Brokerage, Container Sealing & Temperature-Controlled Handling",
    },
  ];

  const tickerItems = [
    { text: "OCEAN CARGO CARRIER", icon: Ship },
    { text: "SECURE AIR FREIGHT", icon: Plane },
    { text: "DGFT CUSTOMS COMPLIANCE", icon: ShieldCheck },
    { text: "FAST EXPRESS DISPATCH", icon: Zap },
    { text: "SMART BONDED WAREHOUSING", icon: Warehouse },
    { text: "24/7 LIVE SATELLITE TRACKING", icon: Radio },
    { text: "CONTAINER MULTIMODAL TRUCKING", icon: Truck },
    { text: "VERIFIED PORT DOCUMENTATION", icon: FileCheck2 },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#07080b] text-white pt-10 sm:pt-14 md:pt-20 pb-0 overflow-hidden"
    >
      {/* 1. Main Header & Interactive Navigation Tabs */}
      <div className="relative z-10 w-full max-w-[1520px] mx-auto px-4 sm:px-8 md:px-14 lg:px-20 mb-8 sm:mb-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          
          {/* Main Title Section */}
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-outfit text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
            >
              Freight Forwarding &amp; <br />
              <span className="text-[#ff5500] drop-shadow-[0_4px_25px_rgba(255,85,0,0.4)]">
                Trade Route Logistics
              </span>
            </motion.h2>
          </div>

          {/* Filter Pills Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap items-center gap-2 sm:gap-3"
          >
            {filterTags.map((tag, idx) => (
              <Link
                key={idx}
                href={tag.href}
                className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 bg-zinc-900/90 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-white/10 hover:border-[#ff5500]/50 shadow-md backdrop-blur-md cursor-pointer"
              >
                {tag.name}
              </Link>
            ))}
          </motion.div>

        </div>
      </div>

      {/* 2. Asymmetrical Interactive Bento Grid */}
      <div className="relative z-10 w-full max-w-[1520px] mx-auto px-4 sm:px-8 md:px-14 lg:px-20 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left Column (Span 6): Grand Hero Card + Descriptive Summary */}
          <div
            ref={leftColRef}
            className="lg:col-span-6 flex flex-col justify-between gap-5 sm:gap-6"
          >
            {/* Grand Hero Image Card */}
            <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] rounded-[24px] sm:rounded-[32px] overflow-hidden border border-white/15 bg-zinc-900 shadow-2xl group cursor-pointer">
              <Image
                src="/images/f1.png"
                alt="Freight logistics worker in reflective safety vest with cargo trucks"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
              
              {/* Bottom Caption Inside Card */}
              <div className="absolute bottom-4 sm:bottom-5 left-5 right-5 flex items-end justify-between">
                <p className="text-white font-medium text-sm sm:text-base md:text-lg max-w-sm leading-snug drop-shadow-md">
                  Fast, Secure, And Reliable Freight Operations Worldwide
                </p>
                <Link
                  href="/services"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-[#ff5500] backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:scale-110 flex-shrink-0 shadow-md border border-white/30"
                >
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </Link>
              </div>
            </div>

            {/* Bottom Paragraph */}
            <div className="pt-1">
              <p className="text-zinc-300 text-xs sm:text-[13px] md:text-sm leading-relaxed max-w-xl font-normal">
                Efficient Transportation Management For Air, Sea, And Ground Logistics. We Help
                Businesses Streamline Shipping Operations With Secure Handling And Tracking.
              </p>
            </div>
          </div>

          {/* Right Column (Span 6): Two Horizontal Article Cards */}
          <div
            ref={rightColRef}
            className="lg:col-span-6 flex flex-col gap-5 sm:gap-6 justify-between"
          >
            {articles.map((item) => (
              <Link
                key={item.id}
                href="/services"
                className="flex flex-col gap-2.5 sm:gap-3 group cursor-pointer transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Horizontal Image Banner */}
                <div className="relative w-full h-[120px] sm:h-[145px] md:h-[160px] rounded-[20px] sm:rounded-[26px] md:rounded-[30px] overflow-hidden border border-white/15 bg-zinc-900 shadow-xl">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Title + Action Arrow Block (Clean without date clutter) */}
                <div className="flex items-center justify-between gap-4 px-2">
                  <h3 className="font-outfit text-white group-hover:text-[#ff5500] font-semibold text-xs sm:text-sm md:text-[15px] leading-snug transition-colors flex-1">
                    {item.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#ff5500] flex items-center justify-center text-white transition-colors shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>

      </div>

      {/* 3. Bottom Bright Orange Ticker Ribbon (Infinite Running Marquee) */}
      <div className="relative z-20 w-full bg-[#ff5500] text-zinc-950 py-2.5 sm:py-3 overflow-hidden shadow-[0_-5px_25px_rgba(255,85,0,0.3)]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
          className="flex w-max items-center gap-10 sm:gap-16 whitespace-nowrap"
        >
          {[...tickerItems, ...tickerItems].map((ticker, index) => {
            const Icon = ticker.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 sm:gap-4 font-outfit font-bold text-xs sm:text-sm md:text-base lg:text-lg text-zinc-950 whitespace-nowrap tracking-wide"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center shadow-md flex-shrink-0">
                  <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#ff5500] stroke-[2.5]" />
                </div>
                <span>{ticker.text}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
