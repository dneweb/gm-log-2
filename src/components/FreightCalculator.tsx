"use client";

import React, { useState, useMemo } from "react";
import { Calculator, Ship, Plane, Truck, ArrowRightLeft, Shield, FileCheck, Check, Sparkles, ArrowRight } from "lucide-react";

interface FreightCalculatorProps {
  onOpenBooking: (prefillData?: any) => void;
}

const PORTS = [
  { code: "CNSZX", name: "Shenzhen / Yantian, China", continent: "Asia" },
  { code: "CNSHA", name: "Shanghai Port, China", continent: "Asia" },
  { code: "SGSIN", name: "Port of Singapore, Singapore", continent: "Asia" },
  { code: "USLAX", name: "Port of Los Angeles / Long Beach, USA", continent: "North America" },
  { code: "USNYC", name: "Port of New York / New Jersey, USA", continent: "North America" },
  { code: "NLRTM", name: "Port of Rotterdam, Netherlands", continent: "Europe" },
  { code: "DEHAM", name: "Port of Hamburg, Germany", continent: "Europe" },
  { code: "AEDXB", name: "Jebel Ali Port, Dubai, UAE", continent: "Middle East" },
  { code: "INNSA", name: "Nhava Sheva (JNPT), Mumbai, India", continent: "Asia" },
  { code: "JPYOK", name: "Port of Yokohama, Japan", continent: "Asia" },
];

export default function FreightCalculator({ onOpenBooking }: FreightCalculatorProps) {
  const [freightType, setFreightType] = useState<"ocean_fcl" | "ocean_lcl" | "air_express" | "road">("ocean_fcl");
  const [origin, setOrigin] = useState("CNSZX");
  const [destination, setDestination] = useState("USLAX");
  const [containerSize, setContainerSize] = useState<"20ft" | "40ft" | "40hc" | "40reefer">("40hc");
  const [weightKg, setWeightKg] = useState<number>(1500);
  const [includeCustoms, setIncludeCustoms] = useState<boolean>(true);
  const [includeInsurance, setIncludeInsurance] = useState<boolean>(true);

  // Calculation Logic
  const quote = useMemo(() => {
    let basePrice = 0;
    let transitTime = "";

    if (freightType === "ocean_fcl") {
      const containerRates: Record<string, number> = {
        "20ft": 2450,
        "40ft": 3850,
        "40hc": 4150,
        "40reefer": 5600,
      };
      basePrice = containerRates[containerSize] || 3850;
      transitTime = "14 - 18 Days";
    } else if (freightType === "ocean_lcl") {
      basePrice = Math.max(350, Math.round(weightKg * 0.45 + 250));
      transitTime = "18 - 24 Days";
    } else if (freightType === "air_express") {
      basePrice = Math.max(480, Math.round(weightKg * 4.2));
      transitTime = "3 - 5 Days";
    } else {
      basePrice = Math.max(220, Math.round(weightKg * 0.85));
      transitTime = "2 - 4 Days";
    }

    // Distance modifier if same port
    if (origin === destination) {
      basePrice = Math.round(basePrice * 0.3);
      transitTime = "1 - 2 Days";
    }

    const bafSurcharge = Math.round(basePrice * 0.12);
    const terminalHandling = freightType === "ocean_fcl" ? 380 : 120;
    const customsFee = includeCustoms ? 195 : 0;
    const insuranceFee = includeInsurance ? Math.round(basePrice * 0.035 + 45) : 0;
    const total = basePrice + bafSurcharge + terminalHandling + customsFee + insuranceFee;

    return {
      basePrice,
      bafSurcharge,
      terminalHandling,
      customsFee,
      insuranceFee,
      total,
      transitTime,
    };
  }, [freightType, origin, destination, containerSize, weightKg, includeCustoms, includeInsurance]);

  const handleSwap = () => {
    const temp = origin;
    setOrigin(destination);
    setDestination(temp);
  };

  const handleBookWithQuote = () => {
    onOpenBooking({
      freightType,
      origin,
      destination,
      containerSize,
      weightKg,
      estimatedCost: quote.total,
    });
  };

  return (
    <section id="calculator" className="relative w-full h-screen min-h-[640px] max-h-[1080px] p-2.5 sm:p-4 md:p-6 lg:p-8 bg-[#07080b] flex flex-col items-center justify-center box-border overflow-hidden">
      <div className="relative w-full h-full max-w-[1520px] rounded-[24px] sm:rounded-[32px] md:rounded-[40px] border border-zinc-800 bg-[#0d0f15]/95 p-4 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-2xl backdrop-blur-xl">
        
        {/* Section Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-zinc-850">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ff5500]/15 border border-[#ff5500]/30 text-[#ff5500] text-[11px] font-semibold uppercase tracking-wider mb-1">
              <Calculator className="w-3 h-3" />
              <span>Instant Cost Estimator</span>
            </div>
            <h2 className="font-bebas text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
              CALCULATE FREIGHT RATES
            </h2>
          </div>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-sm hidden sm:block">
            Transparent all-inclusive container and air cargo rates with guaranteed space allocation.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 my-auto items-stretch">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-zinc-950/70 border border-zinc-800/80 rounded-2xl p-4 sm:p-5 flex flex-col justify-between">
            
            {/* Mode Selector Tabs */}
            <div>
              <label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 block mb-2">
                1. Transport Mode
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                <button
                  type="button"
                  onClick={() => setFreightType("ocean_fcl")}
                  className={`flex flex-col items-center justify-center p-2 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                    freightType === "ocean_fcl"
                      ? "bg-[#ff5500] border-[#ff5500] text-white shadow-md"
                      : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white"
                  }`}
                >
                  <Ship className="w-4 h-4 mb-1" />
                  <span>Ocean FCL</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFreightType("ocean_lcl")}
                  className={`flex flex-col items-center justify-center p-2 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                    freightType === "ocean_lcl"
                      ? "bg-[#ff5500] border-[#ff5500] text-white shadow-md"
                      : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white"
                  }`}
                >
                  <Ship className="w-4 h-4 mb-1" />
                  <span>Ocean LCL</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFreightType("air_express")}
                  className={`flex flex-col items-center justify-center p-2 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                    freightType === "air_express"
                      ? "bg-[#ff5500] border-[#ff5500] text-white shadow-md"
                      : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white"
                  }`}
                >
                  <Plane className="w-4 h-4 mb-1" />
                  <span>Air Express</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFreightType("road")}
                  className={`flex flex-col items-center justify-center p-2 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                    freightType === "road"
                      ? "bg-[#ff5500] border-[#ff5500] text-white shadow-md"
                      : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white"
                  }`}
                >
                  <Truck className="w-4 h-4 mb-1" />
                  <span>Road Freight</span>
                </button>
              </div>
            </div>

            {/* Origin & Destination */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <div>
                <label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 block mb-1">
                  Origin Port
                </label>
                <select
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 text-white p-2.5 rounded-xl text-xs outline-none cursor-pointer"
                >
                  {PORTS.map((p) => (
                    <option key={p.code} value={p.code}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 block mb-1">
                  Destination Port
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 text-white p-2.5 rounded-xl text-xs outline-none cursor-pointer"
                >
                  {PORTS.map((p) => (
                    <option key={p.code} value={p.code}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Cargo Specifics */}
            {freightType === "ocean_fcl" ? (
              <div className="mb-3">
                <label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 block mb-1.5">
                  Container Specification
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: "20ft", label: "20' Dry", cap: "33 CBM" },
                    { id: "40ft", label: "40' Dry", cap: "67 CBM" },
                    { id: "40hc", label: "40' High Cube", cap: "76 CBM" },
                    { id: "40reefer", label: "40' Reefer", cap: "Cold Chain" },
                  ].map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setContainerSize(c.id as any)}
                      className={`p-2 rounded-xl border text-left text-xs transition-colors cursor-pointer ${
                        containerSize === c.id
                          ? "bg-[#ff5500]/20 border-[#ff5500] text-white font-bold"
                          : "bg-zinc-900 border-zinc-800 text-zinc-400"
                      }`}
                    >
                      <span className="block text-white text-[11px]">{c.label}</span>
                      <span className="text-[9px] text-zinc-500">{c.cap}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mb-3">
                <div className="flex justify-between items-center mb-1">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                    Gross Weight (KG)
                  </label>
                  <span className="text-xs font-bold text-[#ff5500]">{weightKg.toLocaleString()} KG</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="10000"
                  step="50"
                  value={weightKg}
                  onChange={(e) => setWeightKg(Number(e.target.value))}
                  className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#ff5500]"
                />
              </div>
            )}

            {/* Add-on Services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              <label
                onClick={() => setIncludeCustoms(!includeCustoms)}
                className={`flex items-center gap-2.5 p-2 rounded-xl border text-xs cursor-pointer select-none ${
                  includeCustoms ? "bg-[#ff5500]/15 border-[#ff5500]/60 text-white" : "bg-zinc-900 border-zinc-800 text-zinc-400"
                }`}
              >
                <div className={`w-4 h-4 rounded flex items-center justify-center border ${includeCustoms ? "bg-[#ff5500] border-[#ff5500] text-white" : "border-zinc-700"}`}>
                  {includeCustoms && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
                <span>Customs Clearance & HS Entry</span>
              </label>

              <label
                onClick={() => setIncludeInsurance(!includeInsurance)}
                className={`flex items-center gap-2.5 p-2 rounded-xl border text-xs cursor-pointer select-none ${
                  includeInsurance ? "bg-[#ff5500]/15 border-[#ff5500]/60 text-white" : "bg-zinc-900 border-zinc-800 text-zinc-400"
                }`}
              >
                <div className={`w-4 h-4 rounded flex items-center justify-center border ${includeInsurance ? "bg-[#ff5500] border-[#ff5500] text-white" : "border-zinc-700"}`}>
                  {includeInsurance && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
                <span>All-Risk Marine Cargo Insurance</span>
              </label>
            </div>

          </div>

          {/* Quotation Summary Card */}
          <div className="lg:col-span-5 bg-zinc-950 border-2 border-[#ff5500]/50 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-zinc-850">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#ff5500]">Instant Live Quote</span>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                  Locked 7 Days
                </span>
              </div>

              {/* Estimated Total Price */}
              <div className="my-3">
                <span className="text-[11px] text-zinc-400 uppercase tracking-wider">Estimated Total Freight</span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="font-bebas text-4xl sm:text-5xl text-white tracking-tight">
                    ${quote.total.toLocaleString()}
                  </span>
                  <span className="text-xs text-zinc-400">USD All-In</span>
                </div>
                <p className="text-xs text-zinc-400 mt-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#ff5500]" />
                  Transit: <strong className="text-white">{quote.transitTime}</strong>
                </p>
              </div>

              {/* Cost Breakdown */}
              <div className="space-y-1.5 py-2.5 border-t border-b border-zinc-850 text-xs">
                <div className="flex justify-between text-zinc-400">
                  <span>Base Freight:</span>
                  <span className="font-semibold text-white">${quote.basePrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Bunker Adjustment (BAF):</span>
                  <span className="font-semibold text-white">${quote.bafSurcharge.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Terminal Handling (THC):</span>
                  <span className="font-semibold text-white">${quote.terminalHandling.toLocaleString()}</span>
                </div>
                {includeCustoms && (
                  <div className="flex justify-between text-zinc-400">
                    <span>Customs Brokerage:</span>
                    <span className="font-semibold text-white">${quote.customsFee}</span>
                  </div>
                )}
                {includeInsurance && (
                  <div className="flex justify-between text-zinc-400">
                    <span>Marine Insurance:</span>
                    <span className="font-semibold text-white">${quote.insuranceFee}</span>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Book Button */}
            <button
              type="button"
              onClick={handleBookWithQuote}
              className="w-full mt-3 py-3 bg-[#ff5500] hover:bg-[#e04800] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <span>Lock In Rate & Book Shipment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-2 border-t border-zinc-850 flex items-center justify-between text-[11px] text-zinc-500">
          <span>Official Tariff Rate • Free Detention for 14 Days</span>
          <span>Zero Documentation Fees on Initial Booking</span>
        </div>

      </div>
    </section>
  );
}
