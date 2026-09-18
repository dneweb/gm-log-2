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

  const allServicesData = [
    // Page 0
    [
      {
        id: "drayage-transloading",
        type: "image-top",
        title: "Container Drayage & Transloading",
        image: "/images/service_transloading_dock.jpg",
        alt: "Container Drayage and Port Transloading Logistics",
        text: "Specialized seaport container drayage, rail ramp logistics, and seamless transloading operations connecting coastal ports to inland hubs.",
        tag: "Container Drayage",
      },
      {
        id: "full-truckload",
        type: "text-top",
        title: "Full Truckload (FTL) Shipping",
        image: "/images/service_ftl_truckload.jpg",
        alt: "Full Truckload Long Haul Fleet across 48 States and Canada",
        text: "Dedicated FTL fleet capacity across 48 states in the USA and Canada. Guaranteed load acceptance with safe, secure, and on-time delivery.",
        tag: "Full Truckload",
      },
      {
        id: "ltl-shipping",
        type: "image-top",
        title: "Less Than Truckload (LTL)",
        image: "/images/service_ltl_freight.jpg",
        alt: "Cost-Effective Discounted LTL Shipping",
        text: "Highly competitive discounted prices and efficient LTL shipping services. Finding the right carrier for the right load at the right time.",
        tag: "LTL Shipping",
      },
      {
        id: "reefer-containers",
        type: "text-top",
        title: "Reefer Containers & Trailers",
        image: "/images/service_cold_chain.jpg",
        alt: "Temperature-Controlled Reefer Trailers and Containers",
        text: "Precision cold chain reefer containers and trailers for food & beverage, pharmaceuticals, and temperature-sensitive commercial loads.",
        tag: "Reefer Containers",
      },
    ],
    // Page 1
    [
      {
        id: "flatbed-overweight",
        type: "image-top",
        title: "Flatbed & Overweight Hauling",
        image: "/images/service_flatbed_hauling.jpg",
        alt: "Flatbed and Overweight Heavy Cargo Transportation",
        text: "Heavy-haul flatbed freight, overweight permits, and specialized heavy machinery transport executed with experienced rigging.",
        tag: "Flatbed & Overweight",
      },
      {
        id: "hazmat-alcohol",
        type: "text-top",
        title: "Hazmat & Alcohol Permits",
        image: "/images/service_hazmat_transport.jpg",
        alt: "Certified Hazmat and Alcohol Permit Logistics",
        text: "USA licensed hazardous materials (Hazmat) transport and alcohol beverage permit logistics handled strictly by verified specialists.",
        tag: "Hazmat & Permits",
      },
      {
        id: "airport-storage",
        type: "image-top",
        title: "Airport Pick ups & Storage",
        image: "/images/service_airport_cargo.jpg",
        alt: "Time-Sensitive Airport Pick Ups and Container Storage",
        text: "Hassle-free, last-minute time-critical airport cargo pick ups, container storage facilities, and expedited ground transfer.",
        tag: "Airport Pickups",
      },
      {
        id: "warehousing-stuffing",
        type: "text-top",
        title: "Warehousing & Export Stuffing",
        image: "/images/service_export_stuffing.jpg",
        alt: "Warehousing, Palletizing and Container Export Stuffing",
        text: "Comprehensive warehousing, palletize and shrink wrap services, and secure container export stuffing for high-value freight.",
        tag: "Warehousing",
      },
    ],
  ];

  const currentServices = allServicesData[currentPage] || allServicesData[0];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full min-h-screen lg:h-screen bg-[#f8fafc] flex flex-col justify-between box-border overflow-hidden px-4 sm:px-8 md:px-14 lg:px-20 py-8 lg:py-6 select-none"
    >
      {/* Ambient background subtle light gradient corners */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.05)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.04)_0%,transparent_60%)] pointer-events-none" />

      {/* 1. Header Area: Title, Description & Carousel Arrow Controls */}
      <div className="relative z-10 w-full max-w-[1520px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4 pt-1 sm:pt-2">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-widest text-[#dc2626] uppercase mb-1"
          >
            WHAT WE DO • 14 CORE FREIGHT SOLUTIONS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-2"
          >
            Logistics Services <span className="text-[#dc2626]">Beyond Expectation</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-xs sm:text-sm md:text-[14px] leading-relaxed max-w-xl font-normal"
          >
            GMLS provides safe, secure, and reliable logistics services. We help customers choose the right mode of transportation that fits the needs of their business.
          </motion.p>
        </div>

        {/* Carousel Navigation Arrow Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-200 hover:border-slate-400 bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 shadow-sm"
            aria-label="Previous services"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
          </button>
          <button
            onClick={() => setCurrentPage((p) => (p + 1) % allServicesData.length)}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 shadow-md shadow-red-600/20"
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
        {currentServices.map((item) => {
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
                  <div className="relative w-full h-[270px] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[450px] rounded-[26px] sm:rounded-[34px] md:rounded-[40px] overflow-hidden border border-slate-200/90 bg-white shadow-[0_15px_35px_rgba(15,23,42,0.08)] group cursor-pointer">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    
                    {/* Bottom overlay title */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-white font-bold text-sm sm:text-base drop-shadow-md">
                        {item.title}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Text + Learn More */}
                  <div className="flex flex-col gap-2 pt-0.5">
                    <p className="text-slate-600 text-xs sm:text-[13px] md:text-sm leading-relaxed line-clamp-3">
                      {item.text}
                    </p>
                    <button
                      onClick={() => onOpenBooking && onOpenBooking(item.tag)}
                      className="group/btn inline-flex items-center gap-2 text-slate-800 hover:text-[#dc2626] text-xs sm:text-sm font-semibold transition-colors cursor-pointer w-fit"
                    >
                      <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#dc2626] group-hover/btn:bg-slate-900 text-white flex items-center justify-center transition-colors duration-200 shadow-sm flex-shrink-0">
                        <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                      </span>
                      <span className="tracking-wide font-medium">Inquire Service</span>
                    </button>
                  </div>
                </>
              ) : (
                /* Layout 2: Text + Button on Top, Tall Image directly below */
                <>
                  {/* Top Text + Learn More */}
                  <div className="flex flex-col gap-2 pb-0.5">
                    <h3 className="text-slate-900 font-bold text-sm sm:text-base leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-[13px] md:text-sm leading-relaxed line-clamp-3">
                      {item.text}
                    </p>
                    <button
                      onClick={() => onOpenBooking && onOpenBooking(item.tag)}
                      className="group/btn inline-flex items-center gap-2 text-slate-800 hover:text-[#dc2626] text-xs sm:text-sm font-semibold transition-colors cursor-pointer w-fit"
                    >
                      <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#dc2626] group-hover/btn:bg-slate-900 text-white flex items-center justify-center transition-colors duration-200 shadow-sm flex-shrink-0">
                        <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                      </span>
                      <span className="tracking-wide font-medium">Inquire Service</span>
                    </button>
                  </div>

                  {/* Bottom Tall Image Card */}
                  <div className="relative w-full h-[270px] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[450px] rounded-[26px] sm:rounded-[34px] md:rounded-[40px] overflow-hidden border border-slate-200/90 bg-white shadow-[0_15px_35px_rgba(15,23,42,0.08)] group cursor-pointer">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
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
