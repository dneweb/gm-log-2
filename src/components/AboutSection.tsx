"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Play } from "lucide-react";
import gsap from "gsap";

interface AboutSectionProps {
  onExploreServices?: () => void;
}

export default function AboutSection({ onExploreServices }: AboutSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  // GSAP 3D Interactive Card Tilt
  useEffect(() => {
    const cardEl = cardContainerRef.current;
    if (!cardEl) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = cardEl.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(cardEl, {
        rotationY: (x / rect.width) * 12,
        rotationX: (-y / rect.height) * 12,
        transformPerspective: 900,
        duration: 0.6,
        ease: "power1.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cardEl, {
        rotationY: 0,
        rotationX: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    };

    cardEl.addEventListener("mousemove", handleMouseMove);
    cardEl.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cardEl.removeEventListener("mousemove", handleMouseMove);
      cardEl.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const bulletPoints = [
    { id: 1, text: "Reliable International Freight Services" },
    { id: 2, text: "Fast Customs Clearance Support" },
    { id: 3, text: "Secure Packaging And Cargo Handling" },
    { id: 4, text: "24/7 Shipment Tracking" },
  ];

  return (
    <section
      id="about"
      className="relative w-full bg-[#07080b] flex items-center justify-center box-border overflow-hidden px-3 sm:px-6 md:px-10 lg:px-14 py-4 sm:py-6 md:py-8 select-none"
    >
      {/* ========================================================================= */}
      {/* ENCLOSED BOX CONTAINER WITH SLEEK ORANGE GLOW BORDER                      */}
      {/* ========================================================================= */}
      <div className="relative w-full max-w-[1520px] mx-auto rounded-[28px] sm:rounded-[36px] md:rounded-[44px] border border-[#ff5500]/25 bg-[#090a0e] overflow-hidden p-5 sm:p-7 md:p-8 lg:p-10 shadow-[0_0_80px_rgba(255,85,0,0.12),0_25px_50px_rgba(0,0,0,0.9)]">
        
        {/* 1. Background Ship Image (shio.png) Inside The Box */}
        <div className="absolute inset-y-0 left-0 w-[55%] md:w-[50%] lg:w-[46%] pointer-events-none z-0 overflow-hidden">
          <Image
            src="/images/shio.png"
            alt="Container Port Ship at Sunset"
            fill
            priority
            className="object-cover object-[40%_center] opacity-90 contrast-110"
          />
          {/* Edge fade into dark box background on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#090a0e]/40 to-[#090a0e]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090a0e]/60 via-transparent to-[#090a0e]/60" />
        </div>

        {/* Ambient Rich Orange Glow inside the box */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[radial-gradient(circle_at_top_right,rgba(255,85,0,0.22)_0%,transparent_65%)] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(255,85,0,0.1)_0%,transparent_60%)] pointer-events-none" />

        {/* 2. Main 2-Column Content Grid */}
        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* ========================================================================= */}
          <div className="lg:col-span-6 relative w-full h-[320px] sm:h-[380px] md:h-[430px] lg:h-[460px] flex items-center justify-end sm:justify-center lg:justify-end pr-0 lg:pr-4">
            <div
              ref={cardContainerRef}
              className="relative w-full max-w-[440px] h-full flex items-center justify-center transition-transform duration-100 ease-out"
            >
              
              {/* Back Card (b1.png): Tall rounded portrait card */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute top-0 sm:top-2 left-0 sm:left-4 w-[60%] sm:w-[58%] h-[84%] sm:h-[88%] rounded-[24px] sm:rounded-[32px] overflow-hidden border border-white/20 shadow-2xl bg-zinc-950 z-10 group cursor-pointer"
              >
                <Image
                  src="/images/b1.png"
                  alt="Export Import Cargo Logistics"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                
                {/* Top Glass Badge: Export • Import */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-black/50 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-white shadow-md">
                  <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-zinc-300" />
                  <span>Export • Import</span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              {/* Front Card (b2.png): Overlapping rounded card with central play button */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="absolute bottom-0 sm:bottom-2 right-0 sm:right-2 w-[62%] sm:w-[60%] h-[68%] sm:h-[72%] rounded-[24px] sm:rounded-[30px] overflow-hidden border-2 border-white/25 shadow-[0_25px_60px_rgba(0,0,0,0.95)] bg-zinc-900 z-20 group cursor-pointer"
              >
                <Image
                  src="/images/b2.png"
                  alt="Automated Fulfillment Forklift"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* Central Glowing Play Button (▶) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#ff5500] hover:bg-[#ff661a] text-white flex items-center justify-center shadow-[0_0_25px_rgba(255,85,0,0.6)] border-2 border-white/40 transition-transform duration-300 group-hover:scale-110 active:scale-95 cursor-pointer"
                    aria-label="Play fulfillment video"
                  >
                    <Play className="w-5 h-5 fill-white text-white translate-x-0.5" />
                  </button>
                </div>

                {/* Bottom Glass Badge: Automated Fulfillment / Speed • Safety • Scale */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 bg-black/65 backdrop-blur-md border border-white/15 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 text-left">
                  <h4 className="text-white font-bold text-xs sm:text-[13px] leading-tight">
                    Automated Fulfillment
                  </h4>
                  <p className="text-zinc-400 text-[10px] sm:text-[11px] font-medium mt-0.5">
                    Speed • Safety • Scale
                  </p>
                </div>
              </motion.div>

            </div>

          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: ABOUT PROJECT TYPOGRAPHY, 2x2 BULLETS & PILL CARD           */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-6 flex flex-col gap-3.5 sm:gap-4 text-left pl-0 lg:pl-3"
          >
            {/* Main Title: About Project (About in white, Project in glowing orange) */}
            <div>
              <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                <span className="text-white">About </span>
                <span className="text-[#ff5500] drop-shadow-[0_0_30px_rgba(255,85,0,0.8)]">Project</span>
              </h2>
            </div>

            {/* Subtitle / Description Paragraph */}
            <p className="text-zinc-300 text-xs sm:text-sm md:text-[14px] leading-relaxed font-normal max-w-xl">
              We Provide Smart Logistics And Transportation Services For Importers, Exporters, And
              Growing Businesses. Our Team Ensures Secure Cargo Handling, Fast Documentation, And
              Smooth Global Delivery Operations.
            </p>

            {/* 2x2 Bullet Points Grid with Orange Circular Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 py-0.5">
              {bulletPoints.map((point) => (
                <div key={point.id} className="flex items-center gap-2.5">
                  <span className="w-4 h-4 rounded-full border border-[#ff5500] flex items-center justify-center flex-shrink-0 shadow-[0_0_8px_rgba(255,85,0,0.5)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500]" />
                  </span>
                  <span className="text-zinc-200 text-xs sm:text-[13px] md:text-sm font-medium">
                    {point.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Worldwide Cargo Network Pill Banner with Route Flight Curve & Orange Border Glow */}
            <div className="relative w-full max-w-lg bg-zinc-900/90 hover:bg-zinc-850/90 border border-[#ff5500]/30 rounded-full px-3.5 sm:px-4 py-2 flex items-center justify-between shadow-[0_0_25px_rgba(255,85,0,0.12)] backdrop-blur-md transition-all duration-300 group overflow-hidden mt-0.5">
              {/* Left: 3 Overlapping Avatar Thumbnails + Text */}
              <div className="flex items-center gap-3 z-10">
                {/* 3 Circular Avatar Stack */}
                <div className="flex items-center -space-x-2 flex-shrink-0">
                  <div className="relative w-7 h-7 rounded-full overflow-hidden border-2 border-zinc-900 shadow-md">
                    <Image src="/images/b1.png" alt="Cargo Ship" fill className="object-cover" />
                  </div>
                  <div className="relative w-7 h-7 rounded-full overflow-hidden border-2 border-zinc-900 shadow-md">
                    <Image src="/images/shio.png" alt="Air Express" fill className="object-cover" />
                  </div>
                  <div className="relative w-7 h-7 rounded-full overflow-hidden border-2 border-zinc-900 shadow-md">
                    <Image src="/images/b2.png" alt="Warehouse Truck" fill className="object-cover" />
                  </div>
                </div>

                {/* Text Info */}
                <div className="flex flex-col">
                  <h4 className="text-white font-semibold text-xs sm:text-[13px] tracking-tight group-hover:text-[#ff5500] transition-colors">
                    Worldwide Cargo Network
                  </h4>
                  <p className="text-zinc-400 text-[10px] sm:text-[11px] font-normal">
                    Fast And Secure Freight Solutions
                  </p>
                </div>
              </div>

              {/* Right: Flight Route Curve with Orange Dot & Cross Marker */}
              <div className="relative w-24 sm:w-32 h-7 hidden xs:flex items-center justify-end z-10 pr-2">
                <svg className="w-full h-full" viewBox="0 0 120 30" fill="none">
                  <path
                    d="M 10 24 Q 50 2 80 18 T 110 8"
                    stroke="#ff5500"
                    strokeWidth="1.8"
                    strokeDasharray="3 3"
                    className="opacity-70"
                  />
                  <circle cx="80" cy="18" r="2.5" fill="#ff5500" />
                  <path d="M 106 5 L 114 11 M 114 5 L 106 11" stroke="#ff5500" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Explore Services CTA Button */}
            <div className="pt-2">
              <button
                onClick={onExploreServices}
                className="group inline-flex items-center gap-3 bg-white hover:bg-zinc-100 text-[#ff5500] text-xs sm:text-sm md:text-[15px] font-bold pl-1.5 pr-5 py-1.5 rounded-full transition-all duration-300 cursor-pointer active:scale-95 shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
              >
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#ff5500] group-hover:scale-105 text-white flex items-center justify-center transition-transform duration-300 shadow-md">
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
                </span>
                <span className="tracking-wide font-bold">Explore Services</span>
              </button>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
