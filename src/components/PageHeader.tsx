"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

interface PageHeaderProps {
  badge: string;
  title: string;
  highlightedWord?: string;
  description: string;
  breadcrumb: string;
  onOpenBooking?: () => void;
}

export default function PageHeader({
  badge,
  title,
  highlightedWord,
  description,
  breadcrumb,
  onOpenBooking,
}: PageHeaderProps) {
  return (
    <div className="w-full">
      {/* Top Full-Width Edge-to-Edge Sticky Navbar */}
      <Navbar onOpenBooking={onOpenBooking || (() => {})} />

      <div className="relative w-full bg-gradient-to-b from-slate-100 via-slate-50 to-white border-b border-slate-200/80 pb-12 sm:pb-16 overflow-hidden select-none">

      {/* Ambient Radial Background Flare */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[380px] bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -top-24 right-10 w-80 h-80 bg-[radial-gradient(circle,rgba(37,99,235,0.03)_0%,transparent_65%)] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1520px] mx-auto pt-10 sm:pt-14 md:pt-16 flex flex-col items-center text-center px-4">
        {/* Breadcrumb Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/85 backdrop-blur-md border border-slate-200/90 px-4 py-1.5 rounded-full text-xs font-medium text-slate-700 mb-5 shadow-sm"
        >
          <Link
            href="/"
            className="flex items-center gap-1.5 text-slate-500 hover:text-slate-900 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-[#dc2626] font-semibold">{breadcrumb}</span>
        </motion.div>

        {/* Small Badge */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs sm:text-sm font-semibold tracking-widest text-[#dc2626] uppercase font-mono mb-2"
        >
          {badge}
        </motion.span>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-outfit text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-950 max-w-4xl leading-[1.1] mb-4"
        >
          {title}{" "}
          {highlightedWord && (
            <span className="text-[#dc2626]">
              {highlightedWord}
            </span>
          )}
        </motion.h1>

        {/* Description Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-slate-600 text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed font-normal"
        >
          {description}
        </motion.p>
      </div>
    </div>
    </div>
  );
}
