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
      {/* Global Dynamic Orange Ambient Spotlight that follows cursor */}
      <div
        ref={cursorGlowRef}
        className="fixed top-0 left-0 w-[450px] h-[450px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(255,85,0,0.07)_0%,transparent_70%)] rounded-full pointer-events-none z-50 mix-blend-screen hidden md:block"
      />
      {children}
    </>
  );
}
