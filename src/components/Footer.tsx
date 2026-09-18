"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const watermarkRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (watermarkRef.current && footerRef.current) {
        gsap.fromTo(
          watermarkRef.current,
          { scale: 0.95, opacity: 0.6 },
          {
            scale: 1,
            opacity: 1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "bottom 95%",
              end: "bottom bottom",
              scrub: 0.8,
            },
          }
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const navColumn1 = [
    { name: "Home", href: "/" },
    { name: "What We Do", href: "/services" },
    { name: "Licensing & Strengths", href: "/compliance" },
  ];

  const navColumn2 = [
    { name: "About Us", href: "/about" },
    { name: "Industries", href: "/products" },
    { name: "Contact & Dispatch", href: "/contact" },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative z-20 w-full bg-white rounded-t-[36px] sm:rounded-t-[48px] md:rounded-t-[64px] mt-16 sm:mt-20 md:mt-24 pt-0 pb-3 px-3 sm:px-6 md:px-12 flex flex-col justify-between overflow-visible shadow-2xl"
    >
      {/* Curved Vibrant Red Footer Card with Pop-out Upward Overlap */}
      <div className="w-full max-w-[1520px] mx-auto bg-[#dc2626] text-white rounded-[28px] sm:rounded-[36px] md:rounded-[44px] -mt-8 sm:-mt-12 md:-mt-16 p-6 sm:p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.25)] relative z-30 flex flex-col justify-between">
        
        {/* Main Footer 3-Column Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-6 sm:pb-8 border-b border-white/20">
          
          {/* Col 1 (Span 5): Brand & About Description */}
          <div className="md:col-span-5 flex flex-col gap-4">
            {/* Brand Logo with clean white backing pill */}
            <Link
              href="/"
              className="relative h-12 sm:h-14 w-[170px] sm:w-[195px] bg-white rounded-xl px-2 py-1 shadow-md flex items-center transition-transform hover:scale-105"
            >
              <Image
                src="/logo.jpg"
                alt="GM LOGISTICS SERVICES"
                fill
                className="object-contain p-1"
              />
            </Link>
            <p className="text-white text-xs sm:text-sm md:text-[14px] leading-relaxed font-medium max-w-sm">
              GM LOGISTICS SERVICES • USA based fully licensed third party logistics provider that operates in 48 states across USA and Canada. Logistics Beyond Expectation.
            </p>
          </div>

          {/* Col 2 (Span 3): Pages Navigation */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="font-outfit font-bold text-lg text-white tracking-tight">Navigation</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs sm:text-sm font-semibold text-white">
              <div className="flex flex-col gap-2.5">
                {navColumn1.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    className="hover:underline transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-2.5">
                {navColumn2.map((link, idx) => (
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
          </div>

          {/* Col 3 (Span 4): Contact Info */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="font-outfit font-bold text-lg text-white tracking-tight">Head Office</h4>
            <div className="flex flex-col gap-2 text-xs sm:text-[13px] font-medium text-white">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 text-white mt-0.5" />
                <span>45 Promise Way, Kendall Park NJ 08824, United States</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <div className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-white" />
                  <a href="tel:7329177747" className="font-bold underline">Call 24/7: 732-917-7747</a>
                </div>
                <span>•</span>
                <span>Fax: 732-917-7741</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-white" />
                <a href="mailto:dispatch@gmlsvs.com" className="font-bold underline">dispatch@gmlsvs.com</a>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-white/90">
                <Globe className="w-4 h-4 text-white" />
                <span>www.gmlsvs.com • 48 States &amp; Canada Operating Scope</span>
              </div>
            </div>
          </div>

        </div>

        {/* Sub-Footer Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 text-xs sm:text-sm font-medium text-white">
          <p>All Rights Reserved © {new Date().getFullYear()} GM LOGISTICS SERVICES (GMLS). Logistics Beyond Expectation.</p>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="/compliance" className="hover:underline">Licensing &amp; Strengths</Link>
            <Link href="/contact" className="hover:underline">Contact HQ</Link>
            <Link href="/about" className="hover:underline">About GMLS</Link>
          </div>
        </div>

      </div>

      {/* Bottom Giant Bold Gradient-Fill Watermark Text with GSAP Scrub Horizon */}
      <div className="relative w-full select-none pointer-events-none pt-3 sm:pt-5 pb-2 px-2 flex items-center justify-center overflow-hidden">
        <h1
          ref={watermarkRef}
          className="w-full font-bebas text-[28px] xs:text-[40px] sm:text-[58px] md:text-[76px] lg:text-[98px] xl:text-[120px] 2xl:text-[138px] leading-[0.88] tracking-wide bg-gradient-to-b from-[#b91c1c] via-[#dc2626] to-red-300/30 bg-clip-text text-transparent whitespace-nowrap text-center drop-shadow-sm will-change-transform"
        >
          LOGISTICS BEYOND EXPECTATION
        </h1>
      </div>

    </footer>
  );
}
