"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ServicesSectionProps {
  onOpenBooking?: (serviceType?: string) => void;
}

export default function ServicesSection({ onOpenBooking }: ServicesSectionProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  // GSAP ScrollTrigger Wave Entrance
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (!cardsRef.current) return;
      const columns = cardsRef.current.children;

      gsap.fromTo(
        columns,
        {
          opacity: 0,
          y: (i) => (i % 2 === 0 ? 60 : -40),
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const servicesData = [
    // Column 1: UAE Agro & Spices Export
    {
      id: "uae-agro-export",
      type: "image-top",
      title: "India ➔ UAE Agro & Spices",
      image: "/images/service_uae_agro.jpg",
      alt: "India to UAE Container Freight for Basmati Rice, Spices, Fruits and Vegetables",
      text: "Fast Reefer & Dry container export of Basmati Rice, Fresh Fruits, Vegetables, Pulses, and Gujarat Spices to Dubai (Jebel Ali) & Gulf ports.",
      tag: "UAE Export",
    },
    // Column 2: Africa Machinery & Hardware Export
    {
      id: "africa-machinery-export",
      type: "text-top",
      title: "India ➔ Africa Machinery",
      image: "/images/service_africa_machinery.jpg",
      alt: "Exporting Trucks, Dumpers, JCB Earthmovers and Hardware to Africa",
      text: "Specialized breakbulk & Ro-Ro shipping of Heavy Trucks, Dumpers, JCB Excavators, Building Safety Tools, and Hardware to South Africa & East/West African ports.",
      tag: "Africa Export",
    },
    // Column 3: China Specialty Imports
    {
      id: "china-specialty-import",
      type: "image-top",
      title: "China ➔ India Specialty Import",
      image: "/images/service_china_import.jpg",
      alt: "Importing Kids Wear, Mens Wear, Undergarments and Cosmetics from China to India",
      text: "High-volume air & ocean import customs clearance for Kids Wear, Mens Wear, Ladies Undergarments, Fashion Textiles, and Beauty Cosmetics.",
      tag: "China Import",
    },
    // Column 4: DGFT Customs & Port Brokerage
    {
      id: "customs-brokerage",
      type: "text-top",
      title: "DGFT Customs Clearance",
      image: "/images/service_customs_clearance.jpg",
      alt: "Government Registered Customs Brokerage at Mundra, Hazira and JNPT",
      text: "Single-window customs EDI port filing, bill of entry, APEDA/phytosanitary inspections, and zero-delay cargo clearance.",
      tag: "Customs Brokerage",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full min-h-screen lg:h-screen bg-[#07080b] flex flex-col justify-between box-border overflow-hidden px-4 sm:px-8 md:px-14 lg:px-20 py-8 lg:py-6 select-none"
    >
      {/* Ambient background low-poly / dark gradient corners */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[radial-gradient(circle_at_top_left,rgba(255,85,0,0.08)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_bottom_right,rgba(255,85,0,0.08)_0%,transparent_60%)] pointer-events-none" />

      {/* 1. Header Area: Title, Description & Carousel Arrow Controls */}
      <div className="relative z-10 w-full max-w-[1520px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4 pt-1 sm:pt-2">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ff5500] tracking-tight drop-shadow-[0_4px_20px_rgba(255,85,0,0.3)] mb-2"
          >
            Our Logistics Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-300 text-xs sm:text-sm md:text-[14px] leading-relaxed max-w-xl font-normal"
          >
            Professional Freight And Cargo Solutions Designed For Global Businesses. We Deliver
            Fast Transportation, Secure Shipping, And Dependable Logistics Support Across Every Route.
          </motion.p>
        </div>

        {/* Carousel Navigation Arrow Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-zinc-750 hover:border-zinc-500 bg-black/40 hover:bg-zinc-800 text-zinc-300 flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 shadow-md"
            aria-label="Previous services"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
          </button>
          <button
            onClick={() => setCurrentPage((p) => (p + 1) % 2)}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#ff5500] hover:bg-[#ff661a] text-white flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 shadow-md shadow-orange-500/20"
            aria-label="Next services"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* 2. Main 4-Column Staggered Grid Layout with GSAP ScrollTrigger Wave */}
      <div
        ref={cardsRef}
        className="relative z-10 w-full max-w-[1520px] mx-auto flex-1 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-start py-2 sm:py-4"
      >
        {servicesData.map((item) => {
          return (
            <div
              key={item.id}
              className={`flex flex-col gap-2.5 sm:gap-3.5 transition-transform duration-300 hover:-translate-y-1.5 ${
                item.type === "text-top"
                  ? "pt-6 sm:pt-10 md:pt-14 lg:pt-16"
                  : "pt-0 sm:pt-1"
              }`}
            >
              {item.type === "image-top" ? (
                /* Layout 1: Tall Image on Top, Text + Button directly below */
                <>
                  {/* Top Tall Image Card */}
                  <div className="relative w-full h-[270px] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[450px] rounded-[26px] sm:rounded-[34px] md:rounded-[40px] overflow-hidden border border-white/20 bg-zinc-900 shadow-2xl group cursor-pointer">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  {/* Bottom Text + Learn More */}
                  <div className="flex flex-col gap-2 pt-0.5">
                    <p className="text-zinc-300 text-xs sm:text-[13px] md:text-sm leading-relaxed line-clamp-3">
                      {item.text}
                    </p>
                    <button
                      onClick={() => onOpenBooking && onOpenBooking(item.tag)}
                      className="group/btn inline-flex items-center gap-2 text-white hover:text-[#ff5500] text-xs sm:text-sm font-semibold transition-colors cursor-pointer w-fit"
                    >
                      <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#ff5500] group-hover/btn:bg-white text-white group-hover/btn:text-[#ff5500] flex items-center justify-center transition-colors duration-200 shadow-sm flex-shrink-0">
                        <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                      </span>
                      <span className="tracking-wide font-medium">Learn More</span>
                    </button>
                  </div>
                </>
              ) : (
                /* Layout 2: Text + Button on Top, Tall Image directly below */
                <>
                  {/* Top Text + Learn More */}
                  <div className="flex flex-col gap-2 pb-0.5">
                    <p className="text-zinc-300 text-xs sm:text-[13px] md:text-sm leading-relaxed line-clamp-3">
                      {item.text}
                    </p>
                    <button
                      onClick={() => onOpenBooking && onOpenBooking(item.tag)}
                      className="group/btn inline-flex items-center gap-2 text-white hover:text-[#ff5500] text-xs sm:text-sm font-semibold transition-colors cursor-pointer w-fit"
                    >
                      <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#ff5500] group-hover/btn:bg-white text-white group-hover/btn:text-[#ff5500] flex items-center justify-center transition-colors duration-200 shadow-sm flex-shrink-0">
                        <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                      </span>
                      <span className="tracking-wide font-medium">Learn More</span>
                    </button>
                  </div>

                  {/* Bottom Tall Image Card */}
                  <div className="relative w-full h-[270px] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[450px] rounded-[26px] sm:rounded-[34px] md:rounded-[40px] overflow-hidden border border-white/20 bg-zinc-900 shadow-2xl group cursor-pointer">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
