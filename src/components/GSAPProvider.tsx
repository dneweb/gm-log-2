"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GSAPProvider({ children }: { children: React.ReactNode }) {
  const cursorGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Global ambient cursor follower
    const glowEl = cursorGlowRef.current;
    if (glowEl) {
      const handleMouseMove = (e: MouseEvent) => {
        gsap.to(glowEl, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.8,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }

    // Refresh ScrollTrigger after DOM has fully mounted
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      {/* Global Dynamic Crimson Red & Cobalt Ambient Spotlight that follows cursor */}
      <div
        ref={cursorGlowRef}
        className="fixed top-0 left-0 w-[450px] h-[450px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(220,38,38,0.05)_0%,rgba(37,99,235,0.03)_40%,transparent_70%)] rounded-full pointer-events-none z-50 hidden md:block"
      />
      {children}
    </>
  );
}
