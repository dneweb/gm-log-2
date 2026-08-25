"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Play,
  ArrowUpRight,
  Truck,
  X,
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
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
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
      image: "/images/freight_tablet_tracking.jpg",
      alt: "Freight Specialist Managing Smart Warehouse Logistics on Tablet",
      title: "Real-Time Digital Cargo Tracking & Optimized Route Dispatch System",
      date: "24",
      month: "AUG",
      year: "2026",
    },
    {
      id: 2,
      image: "/images/freight_delivery_driver.jpg",
      alt: "Professional Freight Delivery Driver Handing Over Package Shipment",
      title: "Safe Express Doorstep Fulfillment & Temperature-Controlled Cargo Handling",
      date: "18",
      month: "AUG",
      year: "2026",
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
      id="features"
      className="relative w-full min-h-screen lg:h-screen bg-[#07080b] flex flex-col justify-between box-border overflow-hidden select-none py-8 lg:py-0"
    >
      {/* Subtle low-poly / dark gradient background */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[radial-gradient(circle_at_top_right,rgba(255,85,0,0.1)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-16 left-0 w-[450px] h-[450px] bg-[radial-gradient(circle_at_bottom_left,rgba(255,85,0,0.06)_0%,transparent_60%)] pointer-events-none" />

      {/* Main Container Content */}
      <div className="relative z-10 w-full max-w-[1520px] mx-auto px-4 sm:px-8 md:px-14 lg:px-20 pt-4 sm:pt-6 flex-1 flex flex-col justify-between">
        
        {/* 1. Header Area: Main Title + Subtitle + Right Quick Filter Tags */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-2">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ff5500] tracking-tight drop-shadow-[0_4px_20px_rgba(255,85,0,0.3)] mb-1.5"
            >
              Worldwide Freight Management
            </motion.h2>
            <p className="text-zinc-300 text-xs sm:text-sm md:text-[14px] leading-relaxed max-w-xl font-normal">
              Reliable Cargo Transportation And Supply Chain Services Designed To Help
              Businesses Move Products Safely And Efficiently Across International Markets.
            </p>
          </div>

          {/* Quick Filter Tag Links */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-zinc-300">
            {filterTags.map((tag) => (
              <a
                key={tag.name}
                href={tag.href}
                className="group flex items-center gap-1.5 text-zinc-300 hover:text-[#ff5500] transition-colors"
              >
                <span>{tag.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#ff5500]" />
              </a>
            ))}
          </div>
        </div>

        {/* 2. Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start py-2 sm:py-4 flex-1">
          
          {/* Left Column (Span 6): Big Featured Card + Video CTA + Paragraph */}
          <div
            ref={leftColRef}
            className="lg:col-span-6 flex flex-col gap-4 sm:gap-5"
          >
            {/* Big Featured Image Card */}
            <div className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[320px] rounded-[24px] sm:rounded-[32px] md:rounded-[38px] overflow-hidden border border-white/15 bg-zinc-900 shadow-2xl group cursor-pointer">
              <Image
                src="/images/freight_courier_van.jpg"
                alt="Fast, Secure, And Reliable Freight Operations"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
              
              {/* Bottom Caption Inside Card */}
              <div className="absolute bottom-4 sm:bottom-5 left-5 right-5 flex items-end justify-between">
                <p className="text-white font-medium text-sm sm:text-base md:text-lg max-w-sm leading-snug drop-shadow-md">
                  Fast, Secure, And Reliable Freight Operations Worldwide
                </p>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-[#ff5500] backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:scale-110 flex-shrink-0 shadow-md border border-white/30">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            {/* Bottom Row: Discover Our Work CTA + Paragraph */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-1">
              <button
                onClick={() => setIsPlayingVideo(true)}
                className="group inline-flex items-center gap-3 bg-white hover:bg-zinc-100 text-[#ff5500] font-bold text-xs sm:text-sm pl-1.5 pr-5 py-1.5 rounded-full transition-all duration-300 cursor-pointer active:scale-95 shadow-[0_10px_25px_rgba(0,0,0,0.5)] w-fit flex-shrink-0"
              >
                <span className="w-8 h-8 rounded-full bg-[#ff5500] group-hover:scale-105 text-white flex items-center justify-center transition-transform duration-300 shadow-md">
                  <Play className="w-3.5 h-3.5 fill-white text-white translate-x-0.5" />
                </span>
                <span className="tracking-wide font-bold">Discover Our Work</span>
              </button>

              <p className="text-zinc-300 text-xs sm:text-[13px] md:text-sm leading-relaxed max-w-lg font-normal">
                Efficient Transportation Management For Air, Sea, And Ground Logistics. We Help
                Businesses Streamline Shipping Operations With Secure Handling And Tracking.
              </p>
            </div>
          </div>

          {/* Right Column (Span 6): Two Horizontal Article Cards */}
          <div
            ref={rightColRef}
            className="lg:col-span-6 flex flex-col gap-5 sm:gap-6"
          >
            {articles.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-2 sm:gap-2.5 group cursor-pointer transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Horizontal Image Banner */}
                <div className="relative w-full h-[115px] sm:h-[135px] md:h-[150px] rounded-[20px] sm:rounded-[26px] md:rounded-[30px] overflow-hidden border border-white/15 bg-zinc-900 shadow-xl">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>

                {/* Title + Date Block */}
                <div className="flex items-start justify-between gap-4 px-1">
                  <h3 className="font-outfit text-white group-hover:text-[#ff5500] font-semibold text-xs sm:text-sm md:text-[15px] leading-snug transition-colors flex-1">
                    {item.title}
                  </h3>
                  
                  {/* Date Badge */}
                  <div className="flex flex-col items-end flex-shrink-0 text-right">
                    <span className="font-outfit font-bold text-base sm:text-lg text-white leading-none">
                      {item.date}
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-zinc-400 font-medium uppercase">
                      {item.month}
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-zinc-500 font-mono">
                      {item.year}
                    </span>
                  </div>
                </div>
              </div>
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

      {/* Video Modal Overlay */}
      {isPlayingVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
            <button
              onClick={() => setIsPlayingVideo(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-[#ff5500] text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Logistics Operations"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
