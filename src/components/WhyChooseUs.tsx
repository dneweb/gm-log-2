"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ChevronRight, MapPin, Phone, Mail, Globe } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface WhyChooseUsProps {
  onDiscoverWork?: () => void;
}

function AnimatedCounter({
  value,
  suffix = "",
  duration = 2,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const startTime = performance.now();
    const durationMs = duration * 1000;

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // Smooth easeOutCubic curve
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * end);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function WhyChooseUs({ onDiscoverWork }: WhyChooseUsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const craneRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLHeadingElement>(null);

  // GSAP ScrollTrigger Heavy Crane Physics & Watermark Sweep
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Crane industrial vertical lift on scroll
      if (craneRef.current) {
        gsap.fromTo(
          craneRef.current,
          { y: 50, scale: 0.94, opacity: 0.7 },
          {
            y: -20,
            scale: 1,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "center center",
              scrub: 1.2,
            },
          }
        );
      }

      // 2. Watermark subtle expand on scroll
      if (watermarkRef.current) {
        gsap.fromTo(
          watermarkRef.current,
          { scale: 0.95, opacity: 0.6 },
          {
            scale: 1,
            opacity: 1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "bottom 95%",
              end: "bottom bottom",
              scrub: 0.8,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { target: 15, suffix: "k+", label: "Successful Deliveries" },
    { target: 10, suffix: "k+", label: "Happy Clients Worldwide" },
    { target: 20, suffix: "+", label: "Global Shipping Partners" },
  ];

  const bulletPoints = [
    "Fast Delivery Support",
    "Secure Management",
    "24/7 Shipment Tracking",
    "Global Trade Experience",
  ];

  const pageLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Compliance & IEC", href: "/compliance" },
    { name: "Contact & RFQ", href: "/contact" },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full min-h-screen bg-[#07080b] flex flex-col justify-between box-border overflow-hidden select-none pt-6"
    >
      {/* Background ambient low-poly / radial light */}
      <div className="absolute top-0 left-0 w-[550px] h-[550px] bg-[radial-gradient(circle_at_top_left,rgba(255,85,0,0.1)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(255,85,0,0.06)_0%,transparent_60%)] pointer-events-none" />

      {/* ========================================================================= */}
      {/* 1. TOP HALF: WHY CHOOSE US & GIANT PORT CRANE */}
      {/* ========================================================================= */}
      <div className="relative z-10 w-full max-w-[1520px] mx-auto px-4 sm:px-8 md:px-14 lg:px-20 pt-4 sm:pt-8 pb-4">
        
        {/* Header Row: Left Title & Right Expert Badge */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-4">
          
          {/* Left Title + Description + CTA Button */}
          <div className="max-w-xl">
            <motion.h2
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-bold text-[#ff5500] tracking-tight drop-shadow-[0_4px_20px_rgba(255,85,0,0.35)] mb-2.5"
            >
              Why Choose Us?
            </motion.h2>
            <p className="text-zinc-300 text-xs sm:text-sm md:text-[15px] leading-relaxed font-normal mb-4">
              10X INTERNATIONAL provides government-certified export-import solutions with rapid container shipping, transparent communication, and complete cargo coordination for businesses worldwide.
            </p>

            <button
              onClick={onDiscoverWork}
              className="group inline-flex items-center gap-3 bg-white hover:bg-zinc-100 text-[#ff5500] text-sm font-bold pl-1.5 pr-5 py-1.5 rounded-full transition-all duration-300 cursor-pointer active:scale-95 shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
            >
              <span className="w-8 h-8 rounded-full bg-[#ff5500] group-hover:scale-105 text-white flex items-center justify-center transition-transform duration-300 shadow-md">
                <ChevronRight className="w-4 h-4 stroke-[3]" />
              </span>
              <span className="tracking-wide font-bold">Discover Our Work</span>
            </button>
          </div>

          {/* Right Header: Trusted Freight Experts Pill + 2x2 Bullets */}
          <div className="flex flex-col gap-3.5 max-w-md">
            {/* Pill Badge */}
            <div className="bg-zinc-900/90 border border-zinc-700/60 rounded-[24px] p-2.5 flex items-center gap-3 shadow-lg backdrop-blur-md">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-zinc-800 flex-shrink-0 border-2 border-[#ff5500]/50 shadow-md">
                <Image
                  src="/images/freight_expert.jpg"
                  alt="Trusted Freight Expert Specialist"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="flex flex-col">
                <h4 className="text-white font-semibold text-xs sm:text-sm">Trusted Freight Experts</h4>
                <p className="text-zinc-400 text-[11px] sm:text-xs leading-tight">
                  10X INTERNATIONAL • DGFT & GST Registered International Shipping Operations.
                </p>
              </div>
            </div>

            {/* 2x2 Bullet Points Grid */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-1 text-zinc-200 text-xs sm:text-[13px] font-medium">
              {bulletPoints.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500] flex-shrink-0 shadow-[0_0_6px_rgba(255,85,0,0.6)]" />
                  <span className="truncate">{bullet}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Center Visual Area: Left 3-Stats + Giant 3D Container Crane */}
        <div className="relative w-full flex items-center justify-between min-h-[320px] sm:min-h-[380px] md:min-h-[420px] mt-2 sm:mt-4">
          
          {/* Left Stats Stack */}
          <div className="relative z-20 flex flex-col gap-6 sm:gap-8 max-w-[200px]">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex flex-col"
              >
                <span className="font-outfit font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-none drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)]">
                  <AnimatedCounter value={stat.target} suffix={stat.suffix} />
                </span>
                <span className="text-zinc-400 text-xs sm:text-sm font-medium mt-1">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Center-Right Giant Container & Aircraft Visual - Grand & Grounded */}
          <div
            ref={craneRef}
            className="absolute right-0 sm:right-2 md:right-4 lg:right-6 top-[37%] -translate-y-1/2 w-[350px] sm:w-[500px] md:w-[640px] lg:w-[780px] xl:w-[860px] aspect-[16/10] pointer-events-none z-10 will-change-transform"
          >
            <div className="relative w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)]">
              <Image
                src="/images/fo.png"
                alt="Global Air Cargo Aircraft and Seaport Logistics Visual"
                fill
                className="object-contain object-bottom-right"
                priority
              />
            </div>
          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* 2. BOTTOM HALF: ROUNDED WHITE BASE WITH ORANGE FOOTER & WATERMARK         */}
      {/* ========================================================================= */}
      <div className="relative z-20 w-full bg-white rounded-t-[36px] sm:rounded-t-[48px] md:rounded-t-[64px] mt-16 sm:mt-20 md:mt-24 pt-0 pb-3 px-3 sm:px-6 md:px-12 flex flex-col justify-between overflow-visible shadow-2xl">
        
        {/* Curved Vibrant Orange Footer Card with Pop-out Upward Overlap */}
        <div className="w-full max-w-[1520px] mx-auto bg-[#ff5500] text-zinc-950 rounded-[28px] sm:rounded-[36px] md:rounded-[44px] -mt-8 sm:-mt-12 md:-mt-16 p-6 sm:p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.45)] relative z-30 flex flex-col justify-between">
          
          {/* Main Footer 3-Column Info */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-6 sm:pb-8 border-b border-black/15">
            
            {/* Col 1 (Span 5): Brand & About Description */}
            <div className="md:col-span-5 flex flex-col gap-4">
              {/* Only Image Logo */}
              <div className="relative h-10 sm:h-12 w-[150px] sm:w-[180px]">
                <Image
                  src="/images/lo.png"
                  alt="10X INTERNATIONAL Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="text-zinc-950 text-xs sm:text-sm md:text-[14px] leading-relaxed font-semibold max-w-sm">
                10X INTERNATIONAL • Premier Government-Certified Import-Export Firm. Managing global air, ocean container freight, and multi-continental commodity supply chains.
              </p>
            </div>

            {/* Col 2 (Span 3): Pages Navigation */}
            <div className="md:col-span-3 flex flex-col gap-3">
              <h4 className="font-outfit font-bold text-lg text-zinc-950 tracking-tight">Navigation</h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs sm:text-sm font-bold text-zinc-950">
                {pageLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    className="hover:underline transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Col 3 (Span 4): Contact Info */}
            <div className="md:col-span-4 flex flex-col gap-3">
              <h4 className="font-outfit font-bold text-lg text-zinc-950 tracking-tight">Head Office</h4>
              <div className="flex flex-col gap-2 text-xs sm:text-[13px] font-bold text-zinc-950">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0 text-zinc-950 mt-0.5" />
                  <span>Nr. Haji Bawa Ni Kui, 14/4, M.J.D. Farm, Sarkhej Road, Juhapura, Ahmedabad, Gujarat 380055, India</span>
                </div>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-4 h-4 flex-shrink-0 text-zinc-950" />
                    <a href="tel:+919825012345" className="hover:underline">+91 98250 12345</a>
                  </div>
                  <span>/</span>
                  <a
                    href="https://wa.me/919265588226?text=Hello%2010X%20INTERNATIONAL,%20I%20have%20an%20import-export%20inquiry."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-zinc-950 text-white px-2 py-0.5 rounded-md hover:bg-[#ff5500] transition-colors"
                  >
                    <span>WhatsApp: +91 92655 88226</span>
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 flex-shrink-0 text-zinc-950" />
                  <span>contact@10xinternational.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 flex-shrink-0 text-zinc-950" />
                  <span>DGFT IEC: AADFZ3605M • GSTIN: 24AADFZ3605M1Z0</span>
                </div>
              </div>
            </div>

          </div>

          {/* Sub-Footer Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 text-xs sm:text-sm font-bold text-zinc-950">
            <p>All Rights Reserved © 2026 10X INTERNATIONAL. Partnership Firm Registered in Gujarat, India.</p>
            <div className="flex items-center gap-4 sm:gap-6">
              <Link href="/compliance" className="hover:underline">Govt. Verification</Link>
              <Link href="/contact" className="hover:underline">Contact HQ</Link>
              <Link href="/about" className="hover:underline">About Firm</Link>
            </div>
          </div>

        </div>

        {/* 3. Bottom Giant Bold Gradient-Fill Watermark Text with GSAP Scrub Horizon */}
        <div className="relative w-full select-none pointer-events-none pt-3 sm:pt-5 pb-2 px-2 flex items-center justify-center overflow-hidden">
          <h1
            ref={watermarkRef}
            className="w-full font-bebas text-[30px] xs:text-[42px] sm:text-[62px] md:text-[82px] lg:text-[105px] xl:text-[128px] 2xl:text-[145px] leading-[0.88] tracking-wide bg-gradient-to-b from-[#e8590c] via-[#ff6519] to-white/30 bg-clip-text text-transparent whitespace-nowrap text-center drop-shadow-sm will-change-transform"
          >
            IMPORT SMARTER EXPORT FASTER
          </h1>
        </div>

      </div>

    </section>
  );
}
