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
    { name: "Container Drayage", href: "/services" },
    { name: "Full Truckload (FTL)", href: "/services" },
    { name: "LTL & Reefer Trailers", href: "/services" },
    { name: "Hazmat & Permits", href: "/compliance" },
  ];

  const articles = [
    {
      id: 1,
      image: "/images/service_cold_chain.jpg",
      alt: "Safe, Secure and Reliable Logistics Across 48 States",
      title: "Safe, Secure and Reliable Logistics Services Across 48 States & Canada",
    },
    {
      id: 2,
      image: "/images/service_customs_clearance.jpg",
      alt: "Discounted Rates and Optimal Carrier Selection",
      title: "Discounted Rates & Finding The Right Carrier For The Right Load At The Right Time",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white text-slate-900 pt-10 sm:pt-14 md:pt-20 pb-12 sm:pb-16 overflow-hidden"
    >
      {/* 1. Main Header & Interactive Navigation Tabs */}
      <div className="relative z-10 w-full max-w-[1520px] mx-auto px-4 sm:px-8 md:px-14 lg:px-20 mb-8 sm:mb-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          
          {/* Main Title Section */}
          <div className="max-w-2xl">
            <div className="text-xs font-mono font-bold tracking-widest text-[#dc2626] uppercase mb-1">
              FLEET RELIABILITY &amp; COVERAGE
            </div>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-outfit text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight"
            >
              3PL Freight Operations &amp; <br />
              <span className="text-[#dc2626]">
                Fleet Logistics
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
                className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 bg-slate-50 text-slate-700 hover:text-[#dc2626] hover:bg-slate-100 border border-slate-200/90 hover:border-[#dc2626]/50 shadow-sm backdrop-blur-md cursor-pointer"
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
            <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] rounded-[24px] sm:rounded-[32px] overflow-hidden border border-slate-200/80 bg-slate-50 shadow-[0_15px_35px_rgba(15,23,42,0.08)] group cursor-pointer">
              <Image
                src="/images/f1.png"
                alt="Freight logistics worker with cargo trucks"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-transparent" />
              
              {/* Bottom Caption Inside Card */}
              <div className="absolute bottom-4 sm:bottom-5 left-5 right-5 flex items-end justify-between">
                <p className="text-white font-medium text-sm sm:text-base md:text-lg max-w-sm leading-snug drop-shadow-md">
                  Guaranteed Load Acceptance &amp; On Time Delivery
                </p>
                <Link
                  href="/services"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-[#dc2626] backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:scale-110 flex-shrink-0 shadow-md border border-white/30"
                >
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </Link>
              </div>
            </div>

            {/* Bottom Paragraph */}
            <div className="pt-1">
              <p className="text-slate-600 text-xs sm:text-[13px] md:text-sm leading-relaxed max-w-xl font-normal">
                GMLS thrives to provide logistics beyond expectations. Our wide network of sales, operations and capacity specialists provides year-round fleet availability with 20 years of combined experience.
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
                <div className="relative w-full h-[120px] sm:h-[145px] md:h-[160px] rounded-[20px] sm:rounded-[26px] md:rounded-[30px] overflow-hidden border border-slate-200/80 bg-slate-50 shadow-[0_10px_25px_rgba(15,23,42,0.06)]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                </div>

                {/* Title + Action Arrow Block */}
                <div className="flex items-center justify-between gap-4 px-2">
                  <h3 className="font-outfit text-slate-900 group-hover:text-[#dc2626] font-semibold text-xs sm:text-sm md:text-[15px] leading-snug transition-colors flex-1">
                    {item.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#dc2626] flex items-center justify-center text-slate-700 group-hover:text-white transition-colors shrink-0 shadow-sm">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
