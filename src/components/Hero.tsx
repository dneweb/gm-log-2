"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import gsap from "gsap";

interface HeroProps {
  onOpenBooking?: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const importContainerRef = useRef<HTMLSpanElement>(null);
  const exportContainerRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // High-Impact GSAP Cinematic Entrance & Realistic Physics
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Cinematic Title & Content Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        title1Ref.current,
        { opacity: 0, y: 60, scale: 0.95, filter: "blur(10px)" },
        { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 1.2 }
      )
        .fromTo(
          title2Ref.current,
          { opacity: 0, x: 80, filter: "blur(10px)" },
          { opacity: 1, x: 0, filter: "blur(0px)", duration: 1.1 },
          "-=0.8"
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.6"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, scale: 0.8, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" },
          "-=0.5"
        );

      // 2. Continuous Organic Floating Physics for Hanging Container
      if (importContainerRef.current) {
        gsap.to(importContainerRef.current, {
          y: "+=8",
          rotation: "+=1.2",
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // 3. Continuous Subtle Breathing on 3D Export Container
      if (exportContainerRef.current) {
        gsap.to(exportContainerRef.current, {
          y: "-=6",
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, heroRef);

    // 4. Interactive Desktop Mouse Physics
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xNorm = (clientX / window.innerWidth - 0.5) * 2; // -1 to 1
      const yNorm = (clientY / window.innerHeight - 0.5) * 2; // -1 to 1

      if (bgRef.current) {
        gsap.to(bgRef.current, {
          x: xNorm * 18,
          y: yNorm * 12,
          duration: 1.4,
          ease: "power2.out",
        });
      }

      if (importContainerRef.current) {
        gsap.to(importContainerRef.current, {
          rotation: xNorm * 4,
          x: xNorm * 8,
          duration: 1.6,
          ease: "power1.out",
        });
      }

      if (exportContainerRef.current) {
        gsap.to(exportContainerRef.current, {
          x: -xNorm * 22,
          y: -yNorm * 14,
          rotationY: xNorm * 5,
          duration: 1.5,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative w-full h-screen min-h-[640px] max-h-[1080px] bg-[#090a0d] flex flex-col justify-between box-border overflow-hidden select-none"
    >
      {/* Background dark maritime seaport port overlay with GSAP parallax */}
      <div ref={bgRef} className="absolute -inset-10 z-0 scale-110">
        <Image
          src="/images/port_background.jpg"
          alt="Nighttime Industrial Seaport Container Port"
          fill
          priority
          className="object-cover object-center brightness-[0.42] contrast-125"
        />
        {/* Dark radial and vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a0d] via-transparent to-[#090a0d]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,#090a0d_90%)]" />
      </div>

      {/* 1. Floating Pill Navbar */}
      <div className="relative z-40 w-full pt-1.5 sm:pt-2 px-2 sm:px-6 md:px-8">
        <Navbar onOpenBooking={onOpenBooking || (() => {})} />
      </div>

      {/* ========================================================================= */}
      {/* MOBILE SCREEN LAYOUT (< md)                                               */}
      {/* ========================================================================= */}
      <div className="flex md:hidden relative z-20 flex-1 px-4 py-2 flex-col justify-between items-center overflow-hidden">
        
        {/* Top Left Corner: Hanging IMPORT Container */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-2 left-2 w-[220px] xs:w-[260px] sm:w-[290px] h-[130px] xs:h-[155px] sm:h-[175px] pointer-events-none z-10 animate-float-sway"
        >
          <Image
            src="/images/i.png"
            alt="Hanging Import Container in Top Left"
            fill
            priority
            className="object-contain object-left-top drop-shadow-[0_15px_30px_rgba(0,0,0,0.98)]"
          />
        </motion.div>

        {/* Center: Headline + Text + CTA */}
        <div className="my-auto w-full flex flex-col items-center text-center z-30 pt-20 pb-28">
          <div className="flex flex-col items-center">
            <h1 className="font-bebas text-[54px] xs:text-[66px] leading-[0.88] tracking-wide text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.95)]">
              IMPORT SMARTER
            </h1>
            <h2 className="font-bebas text-[54px] xs:text-[66px] leading-[0.88] tracking-wide text-[#ff5500] drop-shadow-[0_10px_35px_rgba(255,85,0,0.6)] mt-0.5">
              EXPORT FASTER
            </h2>
          </div>

          <p className="text-zinc-300 text-xs xs:text-[13px] leading-relaxed font-normal max-w-[340px] drop-shadow-md mt-2.5 mb-4">
            Exporting Agro, Rice & Spices to UAE; Machinery & Hardware to Africa; and Importing Kids/Mens Wear & Cosmetics from China to India.
          </p>

          <div>
            <button
              onClick={onOpenBooking}
              className="group inline-flex items-center gap-2.5 bg-white hover:bg-zinc-100 text-[#ff5500] text-xs font-bold pl-1.5 pr-4 py-1.5 rounded-full transition-all duration-300 shadow-xl active:scale-95 cursor-pointer"
            >
              <span className="w-7 h-7 rounded-full bg-[#ff5500] text-white flex items-center justify-center shadow-md">
                <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
              </span>
              <span className="tracking-wide font-bold">Get Started</span>
            </button>
          </div>
        </div>

        {/* Bottom Right Corner: Grounded EXPORT Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute bottom-0 right-0 w-[280px] xs:w-[330px] sm:w-[370px] h-[170px] xs:h-[200px] sm:h-[225px] pointer-events-none select-none z-10"
        >
          <Image
            src="/images/e.png"
            alt="3D Heavy Cargo Shipping Container in Lower Right"
            fill
            priority
            className="object-contain object-bottom-right drop-shadow-[0_25px_50px_rgba(0,0,0,0.98)]"
          />
        </motion.div>

      </div>

      {/* ========================================================================= */}
      {/* DESKTOP SCREEN LAYOUT (>= md)                                              */}
      {/* ========================================================================= */}
      <div className="hidden md:flex relative z-20 flex-1 px-8 md:px-16 lg:px-24 pt-4 pb-12 flex-col justify-between">
        
        {/* Main Headline Block: IMPORT SMARTER / EXPORT FASTER */}
        <div className="w-full flex flex-col items-start select-none pt-4 md:pt-6">
          <div className="w-full">
            {/* IMPORT SMARTER with Crane Hook Attached Directly to 'M' */}
            <h1
              ref={title1Ref}
              className="font-bebas text-[96px] lg:text-[124px] xl:text-[144px] leading-[0.85] tracking-wide text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.95)]"
            >
              I<span className="relative inline-block">
                M
                {/* Desktop Crane Hook Connected Directly To The Center of 'M' */}
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.2 }}
                  className="absolute top-[98%] left-1/2 -translate-x-[30%] w-[420px] lg:w-[500px] xl:w-[560px] h-[245px] lg:h-[290px] xl:h-[325px] z-20 pointer-events-none origin-top block"
                >
                  <span
                    ref={importContainerRef}
                    className="relative block w-full h-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.98)] origin-top will-change-transform"
                  >
                    <Image
                      src="/images/i.png"
                      alt="Import Shipping Container Hanging Directly From M"
                      fill
                      priority
                      className="object-contain object-top"
                    />
                  </span>
                </motion.span>
              </span>PORT SMARTER
            </h1>

            {/* EXPORT FASTER Shifted All The Way To The Right Edge (Last Tak) */}
            <div className="w-full flex justify-end pr-0 -mr-2 sm:-mr-4 md:-mr-8 lg:-mr-12 xl:-mr-16 mt-2 lg:mt-3">
              <h2
                ref={title2Ref}
                className="font-bebas text-[96px] lg:text-[124px] xl:text-[144px] leading-[0.85] tracking-wide text-[#ff5500] drop-shadow-[0_10px_35px_rgba(255,85,0,0.6)]"
              >
                EXPORT FASTER
              </h2>
            </div>
          </div>
        </div>

        {/* Desktop Left Bottom Block: Subtitle + CTA */}
        <div className="relative z-30 max-w-xl flex flex-col gap-4 mb-6">
          <p
            ref={subtitleRef}
            className="text-zinc-300 text-sm md:text-[15px] leading-relaxed font-normal max-w-md drop-shadow-md"
          >
            10X INTERNATIONAL: Government-certified export-import operations. Exporting Agro & Spices to UAE; Heavy Machinery & Hardware to Africa; and Importing Apparel & Beauty Cosmetics from China to India.
          </p>

          <div ref={ctaRef} className="flex items-center pt-1">
            <button
              onClick={onOpenBooking}
              className="group inline-flex items-center gap-3 bg-white hover:bg-zinc-100 text-[#ff5500] text-sm font-bold pl-1.5 pr-5 py-1.5 rounded-full transition-all duration-300 cursor-pointer active:scale-95 shadow-[0_10px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(255,85,0,0.4)]"
            >
              <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#ff5500] group-hover:scale-105 text-white flex items-center justify-center transition-transform duration-300 shadow-md flex-shrink-0">
                <ChevronRight className="w-4 h-4 stroke-[3]" />
              </span>
              <span className="tracking-wide text-[#ff5500] font-bold text-[15px]">
                Get Started
              </span>
            </button>
          </div>
        </div>

        {/* Desktop Giant 3D EXPORT Container Grounded at Bottom Right with GSAP Depth */}
        <div
          ref={exportContainerRef}
          className="absolute bottom-0 right-0 sm:right-2 md:right-4 w-[560px] lg:w-[760px] xl:w-[880px] aspect-[16/10] pointer-events-none z-20 select-none will-change-transform"
        >
          <div className="relative w-full h-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.98)]">
            <Image
              src="/images/e.png"
              alt="3D Heavy Cargo Shipping Container with EXPORT text"
              fill
              className="object-contain object-bottom-right"
              priority
            />
          </div>
        </div>

      </div>

    </section>
  );
}
