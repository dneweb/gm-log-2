"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";
import gsap from "gsap";

interface AboutSectionProps {
  onExploreServices?: () => void;
}

export default function AboutSection({ onExploreServices }: AboutSectionProps) {
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
    { id: 1, text: "Operates in 48 states across USA & Canada" },
    { id: 2, text: "20 years combined experience handling crucial tasks" },
    { id: 3, text: "Safe, secure and reliable logistics services" },
    { id: 4, text: "We think about your logistics, so you don't have to" },
  ];

  return (
    <section
      id="about"
      className="relative w-full bg-white flex items-center justify-center box-border overflow-hidden px-3 sm:px-6 md:px-10 lg:px-14 py-4 sm:py-6 md:py-8 select-none"
    >
      {/* ========================================================================= */}
      {/* ENCLOSED BOX CONTAINER WITH SLEEK BORDER AND SOFT SHADOW                  */}
      {/* ========================================================================= */}
      <div className="relative w-full max-w-[1520px] mx-auto rounded-[28px] sm:rounded-[36px] md:rounded-[44px] border border-slate-200/90 bg-slate-50/75 overflow-hidden p-5 sm:p-7 md:p-8 lg:p-10 shadow-[0_20px_50px_rgba(15,23,42,0.06),0_1px_3px_rgba(15,23,42,0.05)]">
        
        {/* 1. Background Ship Image (shio.png) Inside The Box - Shown on Desktop to prevent mobile text overlap */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-[46%] pointer-events-none z-0 overflow-hidden">
          <Image
            src="/images/shio.png"
            alt="Logistics Fleet and Seaport Operations"
            fill
            priority
            className="object-cover object-[40%_center] opacity-80 contrast-105"
          />
          {/* Edge fade into light box background on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-50/50 to-slate-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50/80 via-transparent to-slate-50/80" />
        </div>

        {/* Ambient Subtle Red Glow inside the box */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.06)_0%,transparent_65%)] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.04)_0%,transparent_60%)] pointer-events-none" />

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
                className="absolute top-0 sm:top-2 left-0 sm:left-4 w-[60%] sm:w-[58%] h-[84%] sm:h-[88%] rounded-[24px] sm:rounded-[32px] overflow-hidden border border-slate-200/80 shadow-[0_15px_35px_rgba(15,23,42,0.12)] bg-white z-10 group cursor-pointer"
              >
                <Image
                  src="/images/b1.png"
                  alt="3PL Transport and Fleet Operations"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                
                {/* Top Glass Badge: 48 States • Canada */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/85 backdrop-blur-md border border-slate-200/80 px-3 py-1 rounded-full flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-slate-800 shadow-sm">
                  <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-600" />
                  <span>48 States • Canada</span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              {/* Front Card (b2.png): Overlapping rounded card */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="absolute bottom-0 sm:bottom-2 right-0 sm:right-2 w-[62%] sm:w-[60%] h-[68%] sm:h-[72%] rounded-[24px] sm:rounded-[30px] overflow-hidden border-2 border-white shadow-[0_20px_45px_rgba(15,23,42,0.16)] bg-white z-20 group cursor-pointer"
              >
                <Image
                  src="/images/b2.png"
                  alt="Freight Warehousing & Carrier Dispatch"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                {/* Bottom Glass Badge: Safe & Secure / On Time Delivery */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 text-left shadow-lg">
                  <h4 className="text-slate-900 font-bold text-xs sm:text-[13px] leading-tight">
                    Safe &amp; Secure 3PL
                  </h4>
                  <p className="text-slate-500 text-[10px] sm:text-[11px] font-medium mt-0.5">
                    Reliability • Speed • On-Time
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
            {/* Main Title: About GM LOGISTICS SERVICES */}
            <div>
              <h2 className="font-outfit text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                <span className="text-slate-900">About </span>
                <span className="text-[#dc2626] block xs:inline">GM LOGISTICS SERVICES</span>
              </h2>
            </div>

            {/* Subtitle / Description Paragraph from PDF */}
            <p className="text-slate-600 text-xs sm:text-sm md:text-[14px] leading-relaxed font-normal max-w-xl">
              GMLS is a USA based fully licensed third party logistics provider that operates in 48 states across USA and Canada with a wide network of sales, operations and capacity specialists. Our team has 20 years of combined experience in handling all crucial tasks safely and on time.
            </p>

            {/* 2x2 Bullet Points Grid with Red Circular Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 py-0.5">
              {bulletPoints.map((point) => (
                <div key={point.id} className="flex items-center gap-2.5">
                  <span className="w-4 h-4 rounded-full border border-[#dc2626] flex items-center justify-center flex-shrink-0 shadow-[0_0_8px_rgba(220,38,38,0.25)] bg-[#dc2626]/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626]" />
                  </span>
                  <span className="text-slate-700 text-xs sm:text-[13px] md:text-sm font-medium">
                    {point.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Worldwide Cargo Network Pill Banner with Route Curve & Red Border Glow */}
            <div className="relative w-full max-w-lg bg-white hover:bg-slate-50/90 border border-slate-200/90 rounded-full px-3.5 sm:px-4 py-2 flex items-center justify-between shadow-[0_4px_20px_rgba(15,23,42,0.06)] backdrop-blur-md transition-all duration-300 group overflow-hidden mt-0.5">
              {/* Left: 3 Overlapping Avatar Thumbnails + Text */}
              <div className="flex items-center gap-3 z-10">
                {/* 3 Circular Avatar Stack */}
                <div className="flex items-center -space-x-2 flex-shrink-0">
                  <div className="relative w-7 h-7 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <Image src="/images/b1.png" alt="Fleet Operations" fill className="object-cover" />
                  </div>
                  <div className="relative w-7 h-7 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <Image src="/images/shio.png" alt="Freight Terminal" fill className="object-cover" />
                  </div>
                  <div className="relative w-7 h-7 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <Image src="/images/b2.png" alt="Carrier Dispatch" fill className="object-cover" />
                  </div>
                </div>

                {/* Text Info */}
                <div className="flex flex-col">
                  <h4 className="text-slate-900 font-semibold text-xs sm:text-[13px] tracking-tight group-hover:text-[#dc2626] transition-colors">
                    GMLS Logistics Network
                  </h4>
                  <p className="text-slate-500 text-[10px] sm:text-[11px] font-normal">
                    48 States &amp; Canada • 45 Promise Way, Kendall Park NJ
                  </p>
                </div>
              </div>

              {/* Right: Flight Route Curve with Red Dot & Cross Marker */}
              <div className="relative w-24 sm:w-32 h-7 hidden xs:flex items-center justify-end z-10 pr-2">
                <svg className="w-full h-full" viewBox="0 0 120 30" fill="none">
                  <path
                    d="M 10 24 Q 50 2 80 18 T 110 8"
                    stroke="#dc2626"
                    strokeWidth="1.8"
                    strokeDasharray="3 3"
                    className="opacity-70"
                  />
                  <circle cx="80" cy="18" r="2.5" fill="#dc2626" />
                  <path d="M 106 5 L 114 11 M 114 5 L 106 11" stroke="#dc2626" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs sm:text-sm md:text-[15px] font-bold pl-1.5 pr-5 py-1.5 rounded-full transition-all duration-300 cursor-pointer active:scale-95 shadow-[0_8px_20px_rgba(220,38,38,0.25)]"
              >
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white group-hover:scale-105 text-[#dc2626] flex items-center justify-center transition-transform duration-300 shadow-sm">
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
                </span>
                <span className="tracking-wide font-bold">Discover GM Logistics</span>
              </Link>
              <Link
                href="/services"
                className="text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#dc2626] transition-colors px-3 py-1.5"
              >
                What We Do →
              </Link>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
