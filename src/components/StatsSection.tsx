"use client";

import React from "react";
import { Globe2, Award, Clock, ShieldCheck, TrendingUp, Users } from "lucide-react";

import AnimatedCounter from "@/components/AnimatedCounter";

export default function StatsSection() {
  const stats = [
    { number: "48", label: "States & Canada", desc: "USA-wide freight operations and capacity network" },
    { number: "20+", label: "Years Combined", desc: "Handling all crucial tasks safely and on time" },
    { number: "24/7", label: "Availability Desk", desc: "Call Us Today: 732-917-7747 anytime" },
    { number: "100%", label: "Load Acceptance", desc: "Guaranteed load acceptance & on-time delivery" },
  ];

  return (
    <section id="features" className="relative w-full py-6 sm:py-10 md:py-14 px-2.5 sm:px-4 md:px-6 lg:px-8 bg-[#f8fafc] flex flex-col items-center justify-center box-border overflow-hidden">
      <div className="relative w-full max-w-[1520px] rounded-[24px] sm:rounded-[32px] md:rounded-[40px] border border-slate-200/90 bg-white p-5 sm:p-7 md:p-9 flex flex-col gap-6 sm:gap-8 overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.06),0_1px_3px_rgba(15,23,42,0.05)] backdrop-blur-xl">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
          <div>
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#dc2626] block mb-1">
              PERFORMANCE METRICS &amp; RELIABILITY
            </span>
            <h2 className="font-bebas text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 leading-tight">
              LOGISTICS BEYOND EXPECTATION ACROSS 48 STATES &amp; CANADA
            </h2>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm max-w-sm hidden sm:block">
            Backed by 20 years of combined experience handling all crucial logistics tasks safely and on time.
          </p>
        </div>

        {/* 4 Big Numbers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 my-auto">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-slate-50/90 border border-slate-200/80 rounded-2xl p-4 sm:p-6 text-center hover:border-[#dc2626]/50 hover:bg-slate-50 transition-all duration-300 group shadow-sm"
            >
              <div className="font-bebas text-5xl sm:text-6xl text-[#dc2626] group-hover:scale-105 transition-transform duration-300">
                <AnimatedCounter value={stat.number} />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-1 mb-1">{stat.label}</h3>
              <p className="text-[11px] sm:text-xs text-slate-500 leading-normal">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Global Certifications & Strengths Bar */}
        <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#dc2626]" />
            <span>USA Based Fully Licensed 3PL Provider</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-[#dc2626]" />
            <span>Alcohol &amp; Hazmat Transport Permits</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Globe2 className="w-4 h-4 text-[#dc2626]" />
            <span>48 States &amp; Canada Capacity Network</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#dc2626]" />
            <span>Year-Round Fleet Availability (24/7 Support)</span>
          </div>
        </div>

      </div>
    </section>
  );
}
