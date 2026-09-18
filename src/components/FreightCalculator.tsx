"use client";

import React, { useState, useMemo } from "react";
import { Calculator, Ship, Plane, Truck, ArrowRightLeft, Shield, FileCheck, Check, Sparkles, ArrowRight, Layers } from "lucide-react";

interface FreightCalculatorProps {
  onOpenBooking: (prefillData?: any) => void;
}

const HUBS = [
  { code: "USNYC", name: "Port of New York / New Jersey (PNCT/Maher)", region: "Northeast" },
  { code: "USCHI", name: "Chicago Rail Ramps & Intermodal Yards, IL", region: "Midwest" },
  { code: "USLAX", name: "Port of Los Angeles / Long Beach, CA", region: "West Coast" },
  { code: "USHOU", name: "Port of Houston & Gulf Hubs, TX", region: "Gulf Coast" },
  { code: "USSAV", name: "Port of Savannah Garden City Terminal, GA", region: "Southeast" },
  { code: "USSEA", name: "Northwest Seaport Alliance (Seattle/Tacoma)", region: "Northwest" },
  { code: "CATOR", name: "Toronto Intermodal Logistics Terminals, Canada", region: "Canada" },
  { code: "CAMTR", name: "Port of Montreal Container Hub, Canada", region: "Canada" },
  { code: "USDAL", name: "Dallas / Fort Worth Logistics Center, TX", region: "Southwest" },
  { code: "USATL", name: "Atlanta Freight Gateway & Distribution, GA", region: "Southeast" },
];

export default function FreightCalculator({ onOpenBooking }: FreightCalculatorProps) {
  const [freightType, setFreightType] = useState<"drayage" | "ftl" | "ltl" | "reefer">("drayage");
  const [origin, setOrigin] = useState("USNYC");
  const [destination, setDestination] = useState("USCHI");
  const [equipmentType, setEquipmentType] = useState<"20ft" | "40ft" | "53ft" | "flatbed">("40ft");
  const [weightLbs, setWeightLbs] = useState<number>(38000);
  const [includeHazmat, setIncludeHazmat] = useState<boolean>(false);
  const [includeStorage, setIncludeStorage] = useState<boolean>(false);

  // Calculation Logic
  const quote = useMemo(() => {
    let basePrice = 0;
    let transitTime = "";

    if (freightType === "drayage") {
      const equipRates: Record<string, number> = {
        "20ft": 1450,
        "40ft": 1850,
        "53ft": 2150,
        "flatbed": 2350,
      };
      basePrice = equipRates[equipmentType] || 1850;
      transitTime = "Same-Day / Next-Day";
    } else if (freightType === "ftl") {
      basePrice = 2450;
      transitTime = "1 - 3 Days";
    } else if (freightType === "reefer") {
      basePrice = 3200;
      transitTime = "1 - 3 Days Direct";
    } else {
      basePrice = Math.max(350, Math.round(weightLbs * 0.08 + 220));
      transitTime = "2 - 5 Days LTL";
    }

    // Distance modifier if same hub
    if (origin === destination) {
      basePrice = Math.round(basePrice * 0.45);
      transitTime = "Local 24-Hour Delivery";
    }

    const fuelSurcharge = Math.round(basePrice * 0.14);
    const chassisFee = freightType === "drayage" ? 180 : 0;
    const hazmatFee = includeHazmat ? 350 : 0;
    const storageFee = includeStorage ? 250 : 0;
    const total = basePrice + fuelSurcharge + chassisFee + hazmatFee + storageFee;

    return {
      basePrice,
      fuelSurcharge,
      chassisFee,
      hazmatFee,
      storageFee,
      total,
      transitTime,
    };
  }, [freightType, origin, destination, equipmentType, weightLbs, includeHazmat, includeStorage]);

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
      equipmentType,
      weightLbs,
      estimatedCost: quote.total,
    });
  };

  return (
    <section id="calculator" className="relative w-full h-screen min-h-[640px] max-h-[1080px] p-2.5 sm:p-4 md:p-6 lg:p-8 bg-[#f8fafc] flex flex-col items-center justify-center box-border overflow-hidden">
      <div className="relative w-full h-full max-w-[1520px] rounded-[24px] sm:rounded-[32px] md:rounded-[40px] border border-slate-200/90 bg-white p-4 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.06),0_1px_3px_rgba(15,23,42,0.05)] backdrop-blur-xl">
        
        {/* Section Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#dc2626]/10 border border-[#dc2626]/30 text-[#dc2626] text-[11px] font-semibold uppercase tracking-wider mb-1">
              <Calculator className="w-3 h-3" />
              <span>GMLS Rate Estimator</span>
            </div>
            <h2 className="font-bebas text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 leading-tight">
              3PL FREIGHT RATE CALCULATOR
            </h2>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm max-w-sm hidden sm:block">
            Discounted pricing, guaranteed load acceptance, and reliable capacity across 48 states and Canada.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 my-auto items-stretch">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-sm">
            
            {/* Mode Selector Tabs */}
            <div>
              <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-600 block mb-2">
                1. Freight Service Mode
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                <button
                  type="button"
                  onClick={() => setFreightType("drayage")}
                  className={`flex flex-col items-center justify-center p-2 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                    freightType === "drayage"
                      ? "bg-[#dc2626] border-[#dc2626] text-white shadow-md shadow-red-600/20"
                      : "bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300"
                  }`}
                >
                  <Ship className="w-4 h-4 mb-1" />
                  <span>Drayage</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFreightType("ftl")}
                  className={`flex flex-col items-center justify-center p-2 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                    freightType === "ftl"
                      ? "bg-[#dc2626] border-[#dc2626] text-white shadow-md shadow-red-600/20"
                      : "bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300"
                  }`}
                >
                  <Truck className="w-4 h-4 mb-1" />
                  <span>Full Truckload</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFreightType("reefer")}
                  className={`flex flex-col items-center justify-center p-2 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                    freightType === "reefer"
                      ? "bg-[#dc2626] border-[#dc2626] text-white shadow-md shadow-red-600/20"
                      : "bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300"
                  }`}
                >
                  <Layers className="w-4 h-4 mb-1" />
                  <span>Reefer Cold</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFreightType("ltl")}
                  className={`flex flex-col items-center justify-center p-2 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                    freightType === "ltl"
                      ? "bg-[#dc2626] border-[#dc2626] text-white shadow-md shadow-red-600/20"
                      : "bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300"
                  }`}
                >
                  <Truck className="w-4 h-4 mb-1" />
                  <span>LTL Shared</span>
                </button>
              </div>
            </div>

            {/* Origin & Destination */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <div>
                <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-600 block mb-1">
                  Origin Hub / Port Ramp
                </label>
                <select
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full bg-white border border-slate-300 text-slate-900 p-2.5 rounded-xl text-xs outline-none cursor-pointer focus:border-[#dc2626]"
                >
                  {HUBS.map((h) => (
                    <option key={h.code} value={h.code}>
                      {h.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-600 block mb-1">
                  Destination Ramp / DC
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-white border border-slate-300 text-slate-900 p-2.5 rounded-xl text-xs outline-none cursor-pointer focus:border-[#dc2626]"
                >
                  {HUBS.map((h) => (
                    <option key={h.code} value={h.code}>
                      {h.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Cargo Specifics */}
            <div className="mb-3">
              <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-600 block mb-1.5">
                Equipment Specification
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: "20ft", label: "20' Container", cap: "Port Drayage" },
                  { id: "40ft", label: "40' High Cube", cap: "Standard Intermodal" },
                  { id: "53ft", label: "53' Dry Van", cap: "OTR Truckload" },
                  { id: "flatbed", label: "Flatbed / Tri-Axle", cap: "Heavy / Overweight" },
                ].map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setEquipmentType(c.id as any)}
                    className={`p-2 rounded-xl border text-left text-xs transition-colors cursor-pointer ${
                      equipmentType === c.id
                        ? "bg-[#dc2626]/10 border-[#dc2626] text-slate-900 font-bold"
                        : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <span className="block text-slate-900 text-[11px] font-semibold">{c.label}</span>
                    <span className="text-[9px] text-slate-500">{c.cap}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Add-on Services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              <label
                onClick={() => setIncludeHazmat(!includeHazmat)}
                className={`flex items-center gap-2.5 p-2 rounded-xl border text-xs cursor-pointer select-none ${
                  includeHazmat ? "bg-[#dc2626]/10 border-[#dc2626] text-slate-900 font-medium" : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                }`}
              >
                <div className={`w-4 h-4 rounded flex items-center justify-center border ${includeHazmat ? "bg-[#dc2626] border-[#dc2626] text-white" : "border-slate-300"}`}>
                  {includeHazmat && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
                <span>Hazmat / Placarded Transport</span>
              </label>

              <label
                onClick={() => setIncludeStorage(!includeStorage)}
                className={`flex items-center gap-2.5 p-2 rounded-xl border text-xs cursor-pointer select-none ${
                  includeStorage ? "bg-[#dc2626]/10 border-[#dc2626] text-slate-900 font-medium" : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                }`}
              >
                <div className={`w-4 h-4 rounded flex items-center justify-center border ${includeStorage ? "bg-[#dc2626] border-[#dc2626] text-white" : "border-slate-300"}`}>
                  {includeStorage && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
                <span>Yard Storage / Palletizing</span>
              </label>
            </div>

          </div>

          {/* Quotation Summary Card */}
          <div className="lg:col-span-5 bg-white border-2 border-[#dc2626]/40 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#dc2626]">Guaranteed 3PL Rate</span>
                <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full font-semibold">
                  Locked Rate
                </span>
              </div>

              {/* Estimated Total Price */}
              <div className="my-3">
                <span className="text-[11px] text-slate-500 uppercase tracking-wider">Estimated Total Rate</span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="font-bebas text-4xl sm:text-5xl text-slate-900 tracking-tight">
                    ${quote.total.toLocaleString()}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">USD All-In</span>
                </div>
                <p className="text-xs text-slate-600 mt-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#dc2626]" />
                  Estimated Transit: <strong className="text-slate-900">{quote.transitTime}</strong>
                </p>
              </div>

              {/* Cost Breakdown */}
              <div className="space-y-1.5 py-2.5 border-t border-b border-slate-200 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Base Haul Rate:</span>
                  <span className="font-semibold text-slate-900">${quote.basePrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Fuel Surcharge (FSC):</span>
                  <span className="font-semibold text-slate-900">${quote.fuelSurcharge.toLocaleString()}</span>
                </div>
                {freightType === "drayage" && (
                  <div className="flex justify-between text-slate-600">
                    <span>Chassis Split / Port Access:</span>
                    <span className="font-semibold text-slate-900">${quote.chassisFee}</span>
                  </div>
                )}
                {includeHazmat && (
                  <div className="flex justify-between text-slate-600">
                    <span>Hazmat Handling &amp; Placards:</span>
                    <span className="font-semibold text-slate-900">${quote.hazmatFee}</span>
                  </div>
                )}
                {includeStorage && (
                  <div className="flex justify-between text-slate-600">
                    <span>Container Yard Staging:</span>
                    <span className="font-semibold text-slate-900">${quote.storageFee}</span>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Book Button */}
            <button
              type="button"
              onClick={handleBookWithQuote}
              className="w-full mt-3 py-3 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-red-600/20 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <span>Dispatch Carrier &amp; Lock In Rate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
          <span>GM LOGISTICS SERVICES • 45 Promise Way, Kendall Park NJ 08824</span>
          <span>24/7 Call: 732-917-7747 • dispatch@gmlsvs.com</span>
        </div>

      </div>
    </section>
  );
}
