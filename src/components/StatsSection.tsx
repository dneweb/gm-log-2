"use client";

import React from "react";
import { Globe2, Award, Clock, ShieldCheck, TrendingUp, Users } from "lucide-react";

import AnimatedCounter from "@/components/AnimatedCounter";

export default function StatsSection() {
  const stats = [
    { number: "99.8%", label: "On-Time Port Arrival", desc: "Across 45,000+ commercial voyages annually" },
    { number: "185+", label: "Global Trade Hubs", desc: "Direct bonded routes & port terminal berths" },
    { number: "450K+", label: "TEU Containers Shipped", desc: "Dry, High Cube, Flat Rack & Cold Chain" },
    { number: "24/7", label: "Control Tower Ops", desc: "Live multi-lingual customs clearance team" },
  ];

  return (
    <section id="features" className="relative w-full h-screen min-h-[640px] max-h-[1080px] p-2.5 sm:p-4 md:p-6 lg:p-8 bg-[#07080b] flex flex-col items-center justify-center box-border overflow-hidden">
      <div className="relative w-full h-full max-w-[1520px] rounded-[24px] sm:rounded-[32px] md:rounded-[40px] border border-zinc-800 bg-[#0d0f15]/95 p-4 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-2xl backdrop-blur-xl">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-zinc-850">
          <div>
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#ff5500] block mb-1">
              Performance Metrics & Reliability
            </span>
            <h2 className="font-bebas text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
              THE TRUSTED CORNERSTONE OF GLOBAL COMMERCE
            </h2>
          </div>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-sm hidden sm:block">
            Backed by international maritime accreditations and state-of-the-art port logistics automation.
          </p>
        </div>

        {/* 4 Big Numbers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 my-auto">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-zinc-950/70 border border-zinc-800/80 rounded-2xl p-4 sm:p-6 text-center hover:border-[#ff5500]/50 transition-all duration-300 group shadow-md"
            >
              <div className="font-bebas text-5xl sm:text-6xl text-[#ff5500] group-hover:scale-105 transition-transform duration-300">
                <AnimatedCounter value={stat.number} />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white mt-1 mb-1">{stat.label}</h3>
              <p className="text-[11px] sm:text-xs text-zinc-400 leading-normal">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Global Certifications Bar */}
        <div className="pt-3 border-t border-zinc-850 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#ff5500]" />
            <span>ISO 9001:2015 Certified Supply Chain</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-[#ff5500]" />
            <span>IATA Strategic Air Cargo Partner</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Globe2 className="w-4 h-4 text-[#ff5500]" />
            <span>FIATA Accredited Freight Forwarder</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#ff5500]" />
            <span>C-TPAT Tier 3 Customs Validated</span>
          </div>
        </div>

      </div>
    </section>
  );
}
