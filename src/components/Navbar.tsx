"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Menu, X, PhoneCall } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu whenever the route/pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/products" },
    { name: "Licensing & Strengths", href: "/compliance" },
    { name: "Contact", href: "/contact" },
  ];

  const mobileDrawer = (
    <>
      {/* Backdrop Blur Overlay mounted on document.body */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className="fixed inset-0 bg-black/70 backdrop-blur-md z-[99998] transition-opacity duration-300 animate-in fade-in"
      />

      {/* Slide-Down Mobile Drawer Menu */}
      <div className="fixed top-0 inset-x-0 w-full max-h-[90vh] overflow-y-auto bg-white border-b border-slate-200 p-5 sm:p-6 shadow-2xl z-[99999] animate-in fade-in slide-in-from-top duration-200 flex flex-col justify-between">
        
        {/* Top Drawer Header with Brand Logo & Close Button */}
        <div className="flex items-center justify-between pb-4 mb-3 border-b border-slate-100 shrink-0">
          <div className="relative h-12 w-[180px] flex items-center">
            <Image
              src="/logo.jpg"
              alt="GM LOGISTICS SERVICES"
              fill
              className="object-contain"
              priority
            />
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Links List */}
        <ul className="flex flex-col gap-1 py-2">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-3 px-4 rounded-xl transition-all ${
                    isActive
                      ? "bg-[#dc2626] text-white font-bold shadow-md shadow-red-600/20"
                      : "text-slate-800 hover:bg-slate-100 hover:text-slate-950 font-medium"
                  }`}
                >
                  <span className="text-[15px]">{link.name}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}`} />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Bottom CTA & Support Block */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-3 shrink-0">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full py-3.5 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-red-600/20 active:scale-95 transition-all cursor-pointer"
          >
            <span>Book Now / Request Quote</span>
            <ChevronRight className="w-4 h-4" />
          </button>
          
          <div className="flex items-center justify-center gap-2 text-xs text-slate-600 font-mono">
            <PhoneCall className="w-3.5 h-3.5 text-[#dc2626]" />
            <span>24/7 Dispatch Desk: 732-917-7747</span>
          </div>
        </div>

      </div>
    </>
  );

  return (
    <header className="sticky top-0 left-0 right-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs transition-all duration-300">
      <nav className="w-full max-w-[1520px] mx-auto px-4 sm:px-8 md:px-12 py-3 sm:py-3.5 flex items-center justify-between">
        
        {/* Left Brand Logo Container - Big & Clearly Visible */}
        <Link href="/" className="flex items-center group py-0.5" aria-label="GM LOGISTICS SERVICES Home">
          <div className="relative h-12 sm:h-14 md:h-16 w-[180px] sm:w-[220px] md:w-[260px] flex items-center transition-transform duration-200 group-hover:scale-[1.02]">
            <Image
              src="/logo.jpg"
              alt="GM LOGISTICS SERVICES"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Center Navigation Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-9 text-sm lg:text-[15px] font-medium text-slate-700">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <li key={link.name} className="relative py-1">
                <Link
                  href={link.href}
                  className={`transition-colors duration-200 hover:text-[#dc2626] ${
                    isActive ? "text-[#dc2626] font-bold" : "text-slate-700"
                  }`}
                >
                  {link.name}
                </Link>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#dc2626] rounded-full shadow-[0_0_8px_rgba(220,38,38,0.5)] animate-in fade-in duration-300" />
                )}
              </li>
            );
          })}
        </ul>

        {/* Right Action Button: Book Now */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="group flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-md shadow-red-600/20 transition-all duration-200 cursor-pointer active:scale-95"
          >
            <span>Book Now</span>
            <span className="w-5 h-5 rounded-full bg-white/20 text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5">
              <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Portal Mobile Drawer directly to document.body so overflow-hidden never clips it on any device */}
      {mounted && mobileMenuOpen && createPortal(mobileDrawer, document.body)}
    </header>
  );
}
