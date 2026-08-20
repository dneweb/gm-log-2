"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Menu, X, PhoneCall } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [activeTab, setActiveTab] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Service", href: "#services" },
    { name: "Features", href: "#features" },
    { name: "Blog", href: "#tracking" },
    { name: "Contact", href: "#calculator" },
  ];

  return (
    <header className="w-full pt-1.5 sm:pt-2 md:pt-3 px-3 sm:px-6 md:px-10 lg:px-14 z-50 relative">
      <nav className="w-full max-w-[1520px] mx-auto bg-white/[0.15] text-white border border-white/30 backdrop-blur-3xl rounded-full px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 shadow-[0_15px_35px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.4)] flex items-center justify-between transition-all duration-300">
        
        {/* Left Brand Logo - Clean Image Logo */}
        <Link href="#home" className="flex items-center group py-0.5">
          <div className="relative h-7 sm:h-8 md:h-9 w-[120px] sm:w-[140px] md:w-[155px] transition-transform duration-200 group-hover:scale-105">
            <Image
              src="/images/logo2.png"
              alt="Global Logistics Logo"
              fill
              priority
              className="object-contain object-left drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
            />
          </div>
        </Link>

        {/* Center Navigation Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-9 text-[13px] lg:text-[14px] font-medium text-zinc-300">
          {navLinks.map((link) => {
            const isActive = activeTab === link.name;
            return (
              <li key={link.name} className="relative py-0.5">
                <Link
                  href={link.href}
                  onClick={() => setActiveTab(link.name)}
                  className={`transition-colors duration-200 hover:text-white ${
                    isActive ? "text-[#ff5500] font-semibold" : "text-zinc-300"
                  }`}
                >
                  {link.name}
                </Link>
                {isActive && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[#ff5500] rounded-full animate-in fade-in duration-300" />
                )}
              </li>
            );
          })}
        </ul>

        {/* Right Action Button: Book Now */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenBooking}
            className="group flex items-center gap-2 text-white hover:text-[#ff5500] text-xs sm:text-[13px] font-semibold pl-1 pr-2.5 py-0.5 rounded-full transition-all duration-200 cursor-pointer active:scale-95"
          >
            <span className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full bg-[#ff5500] text-white flex items-center justify-center transition-transform group-hover:scale-105 shadow-md shadow-orange-500/25">
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </span>
            <span className="tracking-normal font-semibold text-zinc-100 group-hover:text-[#ff5500] text-[13px] lg:text-[14px]">
              Book Now
            </span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full text-zinc-200 hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 bg-zinc-900/95 border border-zinc-700/60 backdrop-blur-xl rounded-3xl p-6 shadow-2xl z-50 animate-in fade-in slide-in-from-top-4 duration-200">
          <ul className="flex flex-col gap-4 text-base font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => {
                    setActiveTab(link.name);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between py-2 px-3 rounded-xl transition-colors ${
                    activeTab === link.name
                      ? "bg-[#ff5500]/15 text-[#ff5500] font-semibold"
                      : "text-zinc-200 hover:bg-zinc-800"
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-4 border-t border-zinc-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 bg-[#ff5500] hover:bg-[#e04800] text-white font-semibold rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30"
            >
              <span>Instant Cargo Booking</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="flex items-center justify-center gap-2 text-xs text-zinc-400">
              <PhoneCall className="w-3.5 h-3.5 text-[#ff5500]" />
              <span>24/7 Support: +1 (800) 555-IMPO</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
