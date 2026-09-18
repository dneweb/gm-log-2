"use client";

import React from "react";
import {
  Ship,
  Truck,
  Warehouse,
  ShieldCheck,
  Zap,
  Radio,
  FileCheck2,
  Globe2,
} from "lucide-react";

export default function MarqueeTicker() {
  const tickerItems = [
    { text: "OPERATING IN 48 STATES & CANADA", icon: Globe2 },
    { text: "CONTAINER DRAYAGE", icon: Ship },
    { text: "FULL TRUCKLOAD & LTL", icon: Truck },
    { text: "REEFER CONTAINERS / TRAILERS", icon: Warehouse },
    { text: "HAZMAT & ALCOHOL PERMITS", icon: ShieldCheck },
    { text: "OVERWEIGHT & FLATBED", icon: Zap },
    { text: "TRANSLOADING & STORAGE", icon: Radio },
    { text: "EXPORT STUFFING & WAREHOUSING", icon: FileCheck2 },
    { text: "YEAR-ROUND FLEET AVAILABILITY", icon: Truck },
  ];

  // Duplicate items inside each track to fill wide displays effortlessly
  const trackItems = [...tickerItems, ...tickerItems];

  return (
    <section
      aria-label="Core Capabilities Ticker"
      className="marquee-container relative z-30 w-full bg-[#dc2626] text-white py-2.5 sm:py-3 md:py-3.5 overflow-hidden shadow-[0_4px_20px_rgba(220,38,38,0.25)] border-y border-red-700/40 select-none group cursor-pointer"
    >
      {/* Moving wrapper with CSS pause-on-hover */}
      <div className="animate-marquee-scroll flex items-center w-max">
        {/* Set 1 */}
        <div className="flex items-center gap-7 sm:gap-10 md:gap-14 pr-7 sm:pr-10 md:pr-14 shrink-0">
          {trackItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={`track1-${index}`}
                className="flex items-center gap-2.5 sm:gap-3 font-outfit font-bold text-xs sm:text-sm md:text-[14px] lg:text-[15px] text-white tracking-wider uppercase whitespace-nowrap"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#dc2626] stroke-[2.5]" />
                </div>
                <span className="drop-shadow-xs">{item.text}</span>
              </div>
            );
          })}
        </div>

        {/* Set 2 (Identical duplicate for seamless infinite translation) */}
        <div className="flex items-center gap-7 sm:gap-10 md:gap-14 pr-7 sm:pr-10 md:pr-14 shrink-0" aria-hidden="true">
          {trackItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={`track2-${index}`}
                className="flex items-center gap-2.5 sm:gap-3 font-outfit font-bold text-xs sm:text-sm md:text-[14px] lg:text-[15px] text-white tracking-wider uppercase whitespace-nowrap"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#dc2626] stroke-[2.5]" />
                </div>
                <span className="drop-shadow-xs">{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
