"use client";

import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  value,
  duration = 2,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Parse numeric part, prefix, suffix, and decimals
  // E.g. "50+" -> { num: 50, prefix: "", suffix: "+", decimals: 0 }
  // "99.8%" -> { num: 99.8, prefix: "", suffix: "%", decimals: 1 }
  // "450K+" -> { num: 450, prefix: "", suffix: "K+", decimals: 0 }
  // "DGFT" or non-numeric -> returns raw string
  const match = value.match(/^([^0-9.]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);

  const prefix = match ? match[1] : "";
  const targetNum = match ? parseFloat(match[2]) : null;
  const suffix = match ? match[3] : "";
  const decimals = match && match[2].includes(".") ? match[2].split(".")[1].length : 0;

  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, {
    damping: 35,
    stiffness: 90,
  });

  useEffect(() => {
    if (isInView && targetNum !== null) {
      motionVal.set(targetNum);
    }
  }, [isInView, targetNum, motionVal]);

  useEffect(() => {
    if (targetNum === null) return;
    const unsubscribe = springVal.on("change", (latest) => {
      if (ref.current) {
        const formatted = decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toString();
        ref.current.textContent = `${prefix}${formatted}${suffix}`;
      }
    });
    return () => unsubscribe();
  }, [springVal, targetNum, prefix, suffix, decimals]);

  // Fallback for non-numeric values like "DGFT", "GSTIN", "24/7"
  if (targetNum === null) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
