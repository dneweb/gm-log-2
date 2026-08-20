"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scroll while loading
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 1800);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.85, ease: [0.77, 0, 0.175, 1] },
          }}
          className="fixed inset-0 z-[9999] bg-[#07080b] flex flex-col items-center justify-center select-none overflow-hidden"
        >
          {/* Deep Ambient Radial Glows */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-[radial-gradient(circle,rgba(255,85,0,0.18)_0%,transparent_65%)] rounded-full pointer-events-none"
          />

          {/* Animated Energy Rings */}
          <div className="relative flex flex-col items-center justify-center">
            {/* Outer Pulsing Glow Aura */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{
                scale: [0.8, 1.2, 1],
                opacity: [0.3, 0.7, 0.4],
              }}
              transition={{
                duration: 1.6,
                ease: "easeOut",
              }}
              className="absolute w-52 sm:w-64 h-52 sm:h-64 rounded-full border border-[#ff5500]/35 bg-[radial-gradient(circle,rgba(255,85,0,0.22)_0%,transparent_70%)]"
            />

            {/* Rotating Thin Dashed Orbit Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 8,
                ease: "linear",
              }}
              className="absolute w-60 sm:w-72 h-60 sm:h-72 rounded-full border border-dashed border-[#ff5500]/30"
            />

            {/* Central Main Logo with Smooth Entrance & Float */}
            <motion.div
              initial={{ opacity: 0, scale: 0.75, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative z-10 flex flex-col items-center gap-4"
            >
              {/* Logo Image */}
              <div className="relative h-14 sm:h-16 md:h-20 w-[180px] sm:w-[220px] md:w-[260px] drop-shadow-[0_0_35px_rgba(255,85,0,0.6)]">
                <Image
                  src="/images/logo2.png"
                  alt="Global Logistics Logo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              {/* Tagline Reveal */}
              <motion.div
                initial={{ opacity: 0, y: 8, letterSpacing: "0.1em" }}
                animate={{ opacity: 1, y: 0, letterSpacing: "0.25em" }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="flex items-center gap-2 text-zinc-400 text-[11px] sm:text-xs font-medium uppercase font-outfit"
              >
                <span>Import Smarter</span>
                <span className="w-1 h-1 rounded-full bg-[#ff5500]" />
                <span className="text-[#ff5500]">Export Faster</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
