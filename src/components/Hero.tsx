"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import gsap from "gsap";

interface HeroProps {
  onOpenBooking?: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const importContainerRef = useRef<HTMLSpanElement>(null);
  const exportContainerRef = useRef<HTMLDivElement>(null);
  const mobileImportRef = useRef<HTMLDivElement>(null);
  const mobileExportRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // High-Impact GSAP Cinematic Entrance & Realistic Physics (Desktop & Mobile)
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

      // 2. Desktop Continuous Organic Floating Physics for Hanging Container
      if (importContainerRef.current) {
        gsap.to(importContainerRef.current, {
          y: "+=10",
          rotation: "+=2.2",
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // 3. Desktop Continuous Subtle Breathing on 3D Export Container
      if (exportContainerRef.current) {
        gsap.to(exportContainerRef.current, {
          y: "-=8",
          rotationY: "+=3",
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // 4. Mobile Continuous Dynamic Hanging Container Sway Physics
      if (mobileImportRef.current) {
        gsap.to(mobileImportRef.current, {
          y: "+=12",
          x: "+=6",
          rotation: "+=3.5",
          duration: 2.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          transformOrigin: "top left",
        });
      }

      // 5. Mobile Continuous 3D Floating Grounded Export Container Physics
      if (mobileExportRef.current) {
        gsap.to(mobileExportRef.current, {
          y: "-=10",
          x: "-=5",
          scale: 1.04,
          duration: 3.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          transformOrigin: "bottom right",
        });
      }
    }, heroRef);

    // 6. Interactive Desktop Mouse & Mobile Touch Physics
    const handleMove = (clientX: number, clientY: number) => {
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

      // Desktop Containers
      if (importContainerRef.current) {
        gsap.to(importContainerRef.current, {
          rotation: xNorm * 5,
          x: xNorm * 10,
          duration: 1.6,
          ease: "power1.out",
        });
      }

      if (exportContainerRef.current) {
        gsap.to(exportContainerRef.current, {
          x: -xNorm * 22,
          y: -yNorm * 14,
          rotationY: xNorm * 6,
          duration: 1.5,
          ease: "power2.out",
        });
      }

      // Mobile Containers
      if (mobileImportRef.current) {
        gsap.to(mobileImportRef.current, {
          rotation: xNorm * 6,
          x: xNorm * 12,
          y: yNorm * 8,
          duration: 1.2,
          ease: "power2.out",
        });
      }

      if (mobileExportRef.current) {
        gsap.to(mobileExportRef.current, {
          x: -xNorm * 16,
          y: -yNorm * 12,
          duration: 1.2,
          ease: "power2.out",
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative w-full h-screen min-h-[640px] max-h-[1080px] bg-[#f8fafc] flex flex-col justify-between box-border overflow-hidden select-none"
    >
      {/* Background maritime seaport port overlay with GSAP parallax */}
      <div ref={bgRef} className="absolute -inset-10 z-0 scale-110">
        <Image
          src="/images/port_background.jpg"
          alt="Industrial Seaport Container Port"
          fill
          priority
          className="object-cover object-center brightness-[0.92] contrast-[1.05]"
        />
        {/* Light atmospheric vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-100/95 via-white/60 to-slate-50/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7)_0%,rgba(241,245,249,0.95)_85%)]" />
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
          className="absolute top-2 left-2 w-[220px] xs:w-[260px] sm:w-[290px] h-[130px] xs:h-[155px] sm:h-[175px] pointer-events-none z-10"
        >
          <div ref={mobileImportRef} className="relative w-full h-full will-change-transform">
            <Image
              src="/images/i.png"
              alt="Hanging Import Container in Top Left"
              fill
              priority
              className="object-contain object-left-top drop-shadow-[0_15px_30px_rgba(0,0,0,0.98)]"
            />
          </div>
        </motion.div>

        {/* Center: Headline + Text + CTA */}
        <div className="my-auto w-full flex flex-col items-center text-center z-30 pt-20 pb-28">
          <div className="flex flex-col items-center">
            <h1 className="font-bebas text-[54px] xs:text-[66px] leading-[0.88] tracking-wide text-slate-950 drop-shadow-[0_4px_16px_rgba(15,23,42,0.12)]">
              IMPORT SMARTER
            </h1>
            <h2 className="font-bebas text-[54px] xs:text-[66px] leading-[0.88] tracking-wide text-[#dc2626] drop-shadow-[0_4px_20px_rgba(220,38,38,0.25)] mt-0.5">
              EXPORT FASTER
            </h2>
          </div>

          <p className="text-slate-600 text-xs xs:text-[13px] leading-relaxed font-normal max-w-[340px] drop-shadow-sm mt-2.5 mb-4">
            GM LOGISTICS SERVICES: USA based fully licensed 3PL provider operating in 48 states across USA and Canada. Safe, secure and reliable logistics.
          </p>

          <div>
            <button
              onClick={onOpenBooking}
              className="group inline-flex items-center gap-2.5 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold pl-1.5 pr-4 py-1.5 rounded-full transition-all duration-300 shadow-lg shadow-red-600/25 active:scale-95 cursor-pointer"
            >
              <span className="w-7 h-7 rounded-full bg-white text-[#dc2626] flex items-center justify-center shadow-md">
                <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
              </span>
              <span className="tracking-wide font-bold">Get Instant Quote</span>
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
          <div ref={mobileExportRef} className="relative w-full h-full will-change-transform">
            <Image
              src="/images/e.png"
              alt="3D Heavy Cargo Shipping Container in Lower Right"
              fill
              priority
              className="object-contain object-bottom-right drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            />
          </div>
        </motion.div>

      </div>

      {/* ========================================================================= */}
      {/* DESKTOP & LAPTOP SCREEN LAYOUT (>= md)                                     */}
      {/* ========================================================================= */}
      <div className="hidden md:flex relative z-20 flex-1 px-6 md:px-12 lg:px-20 xl:px-24 pt-2 md:pt-4 pb-8 md:pb-12 flex-col justify-between overflow-hidden">
        
        {/* Main Headline Block: IMPORT SMARTER / EXPORT FASTER */}
        <div className="w-full flex flex-col items-start select-none pt-2 md:pt-4">
          <div className="w-full">
            {/* IMPORT SMARTER with Crane Hook Attached Directly to 'M' */}
            <h1
              ref={title1Ref}
              className="font-bebas text-[72px] md:text-[86px] lg:text-[112px] xl:text-[136px] 2xl:text-[148px] leading-[0.88] tracking-wide text-slate-950 drop-shadow-[0_4px_16px_rgba(15,23,42,0.12)]"
            >
              I<span className="relative inline-block">
                M
                {/* Desktop Crane Hook Connected Directly To The Center of 'M' */}
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.2 }}
                  className="absolute top-[98%] left-1/2 -translate-x-[30%] w-[260px] md:w-[310px] lg:w-[390px] xl:w-[480px] 2xl:w-[540px] aspect-[16/9.5] z-20 pointer-events-none origin-top block"
                >
                  <span
                    ref={importContainerRef}
                    className="relative block w-full h-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] origin-top will-change-transform"
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

            {/* EXPORT FASTER Shifted To The Right Edge with Floating Container Directly Beneath */}
            <div className="w-full flex justify-end relative z-30 pr-0 -mr-2 sm:-mr-4 md:-mr-6 lg:-mr-10 xl:-mr-12 mt-1 sm:mt-2 lg:mt-3 pointer-events-none">
              <div className="relative inline-flex flex-col items-end">
                <h2
                  ref={title2Ref}
                  className="font-bebas text-[72px] md:text-[86px] lg:text-[112px] xl:text-[136px] 2xl:text-[148px] leading-[0.88] tracking-wide text-[#dc2626] drop-shadow-[0_4px_20px_rgba(220,38,38,0.3)] pointer-events-auto relative z-20"
                >
                  EXPORT FASTER
                </h2>

                {/* Floating 3D EXPORT Container with reduced space directly under EXPORT FASTER */}
                <div
                  ref={exportContainerRef}
                  className="absolute top-[82%] sm:top-[85%] md:top-[88%] right-0 w-[420px] md:w-[500px] lg:w-[640px] xl:w-[760px] 2xl:w-[860px] aspect-[16/10.5] pointer-events-none z-10 select-none will-change-transform"
                >
                  <div className="relative w-full h-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]">
                    <Image
                      src="/images/e.png"
                      alt="3D Heavy Cargo Shipping Container with EXPORT text"
                      fill
                      className="object-contain object-top-right"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Left Bottom Block: Subtitle + CTA */}
        <div className="relative z-30 max-w-lg lg:max-w-xl flex flex-col gap-3 sm:gap-4 mb-2 sm:mb-4 lg:mb-6">
          <p
            ref={subtitleRef}
            className="text-slate-600 text-xs sm:text-[13px] md:text-sm lg:text-[15px] leading-relaxed font-normal max-w-sm sm:max-w-md drop-shadow-sm"
          >
            GM LOGISTICS SERVICES: USA based fully licensed third party logistics provider operating in 48 states across USA and Canada. 20 years of combined experience in handling all crucial tasks safely and on time.
          </p>

          <div ref={ctaRef} className="flex items-center pt-0.5 sm:pt-1">
            <button
              onClick={onOpenBooking}
              className="group inline-flex items-center gap-2.5 sm:gap-3 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs sm:text-sm font-bold pl-1.5 pr-4 sm:pr-5 py-1.5 rounded-full transition-all duration-300 cursor-pointer active:scale-95 shadow-lg shadow-red-600/25 hover:shadow-red-600/40"
            >
              <span className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-full bg-white text-[#dc2626] group-hover:scale-105 flex items-center justify-center transition-transform duration-300 shadow-md flex-shrink-0">
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
              </span>
              <span className="tracking-wide text-white font-bold text-xs sm:text-sm lg:text-[15px]">
                Instant Quote • 732-917-7747
              </span>
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}
