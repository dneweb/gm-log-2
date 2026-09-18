"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/Footer";

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

  // GSAP ScrollTrigger Heavy Crane Physics
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { target: 48, suffix: "", label: "States Covered Across USA & Canada" },
    { target: 20, suffix: "+", label: "Years Combined Experience" },
    { target: 24, suffix: "/7", label: "Dedicated Availability & Support" },
  ];

  const bulletPoints = [
    "Year-round Fleet Availability",
    "Guaranteed Load Acceptance",
    "On Time Reliable Delivery",
    "Discounted Competitive Rates",
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full min-h-screen bg-[#f8fafc] flex flex-col justify-between box-border overflow-hidden select-none pt-6"
    >
      {/* Background ambient radial light */}
      <div className="absolute top-0 left-0 w-[550px] h-[550px] bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.06)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.04)_0%,transparent_60%)] pointer-events-none" />

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
              className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-bold text-[#dc2626] tracking-tight mb-2.5"
            >
              Why Choose Us?
            </motion.h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-[15px] leading-relaxed font-normal">
              GMLS thrives to provide logistics beyond expectations. We drive your business forward by providing safe, secure, and reliable logistics services with our network of capacity specialists.
            </p>
          </div>

          {/* Right Header: Trusted Freight Experts Pill + 2x2 Bullets */}
          <div className="flex flex-col gap-3.5 max-w-md">
            {/* Pill Badge */}
            <div className="bg-white border border-slate-200/90 rounded-[24px] p-2.5 flex items-center gap-3 shadow-[0_4px_20px_rgba(15,23,42,0.06)] backdrop-blur-md">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-100 flex-shrink-0 border-2 border-[#dc2626]/40 shadow-sm">
                <Image
                  src="/images/freight_expert.jpg"
                  alt="Trusted Freight Capacity Specialist"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="flex flex-col">
                <h4 className="text-slate-900 font-semibold text-xs sm:text-sm">Trusted Capacity Specialists</h4>
                <p className="text-slate-500 text-[11px] sm:text-xs leading-tight">
                  GM LOGISTICS SERVICES • Fully Licensed 3PL Across 48 States &amp; Canada.
                </p>
              </div>
            </div>

            {/* 2x2 Bullet Points Grid */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-1 text-slate-700 text-xs sm:text-[13px] font-medium">
              {bulletPoints.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626] flex-shrink-0 shadow-[0_0_6px_rgba(220,38,38,0.4)]" />
                  <span className="truncate">{bullet}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Center Visual Area: Left 3-Stats + Giant 3D Container Crane */}
        <div className="relative w-full flex items-center justify-between min-h-[280px] xs:min-h-[300px] sm:min-h-[360px] md:min-h-[420px] mt-2 sm:mt-4 overflow-hidden md:overflow-visible">
          
          {/* Left Stats Stack */}
          <div className="relative z-20 flex flex-col gap-4 xs:gap-5 sm:gap-8 max-w-[135px] xs:max-w-[160px] sm:max-w-[200px]">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex flex-col"
              >
                <span className="font-outfit font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-none">
                  <AnimatedCounter value={stat.target} suffix={stat.suffix} />
                </span>
                <span className="text-slate-600 text-[11px] xs:text-xs sm:text-sm font-medium mt-1 leading-snug">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Center-Right Giant Container & Aircraft Visual - Grand & Grounded */}
          <div
            ref={craneRef}
            className="absolute -right-8 xs:-right-4 sm:right-2 md:right-4 lg:right-6 top-[42%] sm:top-[37%] -translate-y-1/2 w-[210px] xs:w-[250px] sm:w-[420px] md:w-[600px] lg:w-[780px] xl:w-[860px] aspect-[16/10] pointer-events-none z-10 will-change-transform"
          >
            <div className="relative w-full h-full drop-shadow-[0_15px_35px_rgba(15,23,42,0.16)]">
              <Image
                src="/images/fo.png"
                alt="3PL Freight Logistics and Multimodal Fleets"
                fill
                className="object-contain object-bottom-right"
                priority
              />
            </div>
          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* 2. BOTTOM HALF: ROUNDED WHITE BASE WITH RED FOOTER & WATERMARK         */}
      {/* ========================================================================= */}
      <Footer />

    </section>
  );
}
