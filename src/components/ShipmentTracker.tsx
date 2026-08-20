"use client";

import React, { useState } from "react";
import { Search, Package, MapPin, CheckCircle2, Clock, Truck, Ship, Plane, AlertCircle, ArrowRight } from "lucide-react";

interface TrackingData {
  id: string;
  sender: string;
  receiver: string;
  origin: string;
  destination: string;
  carrier: string;
  mode: "ocean" | "air" | "road";
  vesselName: string;
  containerId: string;
  status: string;
  eta: string;
  progressPercent: number;
  currentLocation: string;
  checkpoints: {
    title: string;
    location: string;
    date: string;
    completed: boolean;
    current?: boolean;
  }[];
}

const SAMPLE_SHIPMENTS: Record<string, TrackingData> = {
  "IMPO-7729-US": {
    id: "IMPO-7729-US",
    sender: "Shenzhen Precision Electronics Co.",
    receiver: "Nexus Retail Group, Los Angeles, USA",
    origin: "Port of Shenzhen (Yantian), China",
    destination: "Port of Long Beach, USA",
    carrier: "Pacific Horizon Lines",
    mode: "ocean",
    vesselName: "MV Pacific Pioneer (IMO: 9845124)",
    containerId: "TGHU-992014-8 (40ft High Cube)",
    status: "In Transit - Mid Pacific Corridor",
    eta: "Aug 24, 2026 • 14:00 PST",
    progressPercent: 68,
    currentLocation: "Coordinates: 31°12'N 155°45'W (Speed: 19.4 knots)",
    checkpoints: [
      { title: "Cargo Picked Up & Container Sealed", location: "Shenzhen Warehouse", date: "Aug 12, 10:30 CST", completed: true },
      { title: "Export Customs Cleared & Inspected", location: "Yantian Port Terminal", date: "Aug 14, 18:45 CST", completed: true },
      { title: "Vessel Departed Origin Port", location: "South China Sea", date: "Aug 15, 06:15 CST", completed: true },
      { title: "Mid-Ocean International Waters", location: "Trans-Pacific Route", date: "Aug 19, Current", completed: true, current: true },
      { title: "Arrival & Berthing at Long Beach", location: "Pier 400, Los Angeles", date: "Aug 24, Expected", completed: false },
      { title: "US Customs & Final Delivery", location: "Inland Distribution Hub", date: "Aug 26, Expected", completed: false },
    ],
  },
  "EXPO-9912-DE": {
    id: "EXPO-9912-DE",
    sender: "Bavaria Auto Systems GmbH, Munich",
    receiver: "Tokyo Precision Motors, Japan",
    origin: "Frankfurt Cargo City (FRA)",
    destination: "Tokyo Narita Airport (NRT)",
    carrier: "Lufthansa Cargo Express",
    mode: "air",
    vesselName: "Boeing 777F (Flight: LH8420)",
    containerId: "AKE-84912-LH (Temperature Monitored)",
    status: "Customs Clearance In Progress",
    eta: "Aug 20, 2026 • 09:30 JST",
    progressPercent: 88,
    currentLocation: "Tokyo Narita Air Cargo Terminal 2",
    checkpoints: [
      { title: "Shipment Received & Weighed", location: "Frankfurt Logistics Hub", date: "Aug 18, 08:00 CEST", completed: true },
      { title: "Air Waybill Issued & Loaded", location: "Frankfurt Airport (FRA)", date: "Aug 18, 14:20 CEST", completed: true },
      { title: "Flight Landed at Narita", location: "Tokyo Narita (NRT)", date: "Aug 19, 05:40 JST", completed: true },
      { title: "Import Inspection & Clearance", location: "Narita Customs Zone", date: "Aug 19, Current", completed: true, current: true },
      { title: "Final Express Delivery", location: "Tokyo Assembly Plant", date: "Aug 20, Expected", completed: false },
    ],
  },
  "CARGO-4431-SG": {
    id: "CARGO-4431-SG",
    sender: "Singapore PharmaTech Global",
    receiver: "MediLife Healthcare, Rotterdam",
    origin: "Port of Singapore (PSA)",
    destination: "Port of Rotterdam, Netherlands",
    carrier: "EuroAsia Maritime Express",
    mode: "ocean",
    vesselName: "CMA CGM Palais (IMO: 9789311)",
    containerId: "REEF-338102-1 (-20°C Cold Chain)",
    status: "Approaching Suez Canal",
    eta: "Aug 29, 2026 • 18:00 CET",
    progressPercent: 52,
    currentLocation: "Red Sea Maritime Zone",
    checkpoints: [
      { title: "Reefer Pre-Cooling & Loading", location: "PSA Singapore Terminal", date: "Aug 10, 11:00 SGT", completed: true },
      { title: "Departed Strait of Malacca", location: "Indian Ocean Gateway", date: "Aug 12, 16:30 SGT", completed: true },
      { title: "Red Sea Transit", location: "Approaching Suez", date: "Aug 19, Current", completed: true, current: true },
      { title: "Mediterranean Gateway", location: "Port Said Outskirts", date: "Aug 22, Expected", completed: false },
      { title: "Discharge at Rotterdam Port", location: "Maasvlakte 2", date: "Aug 29, Expected", completed: false },
    ],
  },
};

export default function ShipmentTracker() {
  const [trackingNumber, setTrackingNumber] = useState("IMPO-7729-US");
  const [activeData, setActiveData] = useState<TrackingData>(SAMPLE_SHIPMENTS["IMPO-7729-US"]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setTimeout(() => {
      const code = trackingNumber.trim().toUpperCase();
      if (SAMPLE_SHIPMENTS[code]) {
        setActiveData(SAMPLE_SHIPMENTS[code]);
      } else {
        setActiveData({
          id: code || "SHIP-CUSTOM-88",
          sender: "Global Logistics Hub",
          receiver: "Verified Commercial Consignee",
          origin: "Origin International Port",
          destination: "Destination Freight Terminal",
          carrier: "Alliance Express Global",
          mode: "ocean",
          vesselName: "Ocean Carrier Vessel (IMO: 9238411)",
          containerId: "CONT-889012-A",
          status: "In Transit • On Schedule",
          eta: "In 3 Business Days",
          progressPercent: 60,
          currentLocation: "Active Global Shipping Corridor",
          checkpoints: [
            { title: "Consignment Dispatched", location: "Origin Facility", date: "Recent", completed: true },
            { title: "Customs Export Validated", location: "Border Checkpoint", date: "Recent", completed: true },
            { title: "In Transit Across Sea/Air Corridor", location: "International Route", date: "Current", completed: true, current: true },
            { title: "Destination Terminal Clearance", location: "Target Port", date: "Upcoming", completed: false },
            { title: "Final Last-Mile Delivery", location: "Consignee Address", date: "Upcoming", completed: false },
          ],
        });
      }
      setIsSearching(false);
    }, 300);
  };

  const loadSample = (code: string) => {
    setTrackingNumber(code);
    setActiveData(SAMPLE_SHIPMENTS[code]);
  };

  return (
    <section id="tracking" className="relative w-full h-screen min-h-[640px] max-h-[1080px] p-2.5 sm:p-4 md:p-6 lg:p-8 bg-[#07080b] flex flex-col items-center justify-center box-border overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-zinc-900/40 via-[#07080b]/95 to-[#07080b] pointer-events-none" />

      {/* Main Inner Container Frame matching hero aesthetics */}
      <div className="relative w-full h-full max-w-[1520px] rounded-[24px] sm:rounded-[32px] md:rounded-[40px] border border-zinc-800 bg-[#0d0f15]/95 p-4 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-2xl backdrop-blur-xl">
        
        {/* Top Header & Search Bar Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-3 border-b border-zinc-850">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ff5500]/15 border border-[#ff5500]/30 text-[#ff5500] text-[11px] font-semibold uppercase tracking-wider mb-1">
              <Search className="w-3 h-3" />
              <span>Real-Time Radar</span>
            </div>
            <h2 className="font-bebas text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
              LIVE CONTAINER TRACKING RADAR
            </h2>
          </div>

          {/* Compact Search Form */}
          <div className="w-full lg:w-auto min-w-[320px] sm:min-w-[420px]">
            <form onSubmit={handleSearch} className="relative flex items-center">
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Tracking ID (e.g. IMPO-7729-US)"
                className="w-full bg-zinc-950/90 border border-zinc-700 focus:border-[#ff5500] text-white pl-10 pr-24 py-2 rounded-full outline-none text-xs sm:text-sm transition-all"
              />
              <Package className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <button
                type="submit"
                disabled={isSearching}
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#ff5500] hover:bg-[#e04800] text-white font-semibold px-4 py-1.5 rounded-full text-xs flex items-center gap-1.5 cursor-pointer"
              >
                {isSearching ? <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <span>Track</span>}
              </button>
            </form>
            <div className="flex items-center gap-1.5 mt-1.5 text-[11px] text-zinc-400">
              <span className="text-zinc-500">Quick test:</span>
              {Object.keys(SAMPLE_SHIPMENTS).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => loadSample(key)}
                  className={`px-2 py-0.5 rounded transition-colors cursor-pointer text-[10px] ${
                    activeData.id === key ? "bg-[#ff5500] text-white font-bold" : "bg-zinc-800 hover:bg-zinc-700 text-zinc-300"
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Live Overview & Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 my-auto">
          
          {/* Left Column: Vessel & Status summary */}
          <div className="lg:col-span-4 bg-zinc-950/70 border border-zinc-800/80 rounded-2xl p-3 sm:p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase bg-[#ff5500]/15 text-[#ff5500] px-2 py-0.5 rounded font-bold">
                  {activeData.id}
                </span>
                <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live AIS Stream
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-2 leading-tight">
                {activeData.status}
              </h3>
              <p className="text-[11px] text-zinc-400 mt-1">{activeData.currentLocation}</p>
            </div>

            <div className="space-y-2 pt-3 border-t border-zinc-850 text-xs">
              <div className="flex justify-between">
                <span className="text-zinc-500">Carrier:</span>
                <span className="text-zinc-200 font-semibold">{activeData.carrier}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Vessel:</span>
                <span className="text-zinc-200 font-semibold">{activeData.vesselName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Container:</span>
                <span className="text-[#ff5500] font-mono font-bold">{activeData.containerId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">ETA Delivery:</span>
                <span className="text-white font-bold">{activeData.eta}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Route Progress & Timeline */}
          <div className="lg:col-span-8 bg-zinc-950/50 border border-zinc-800/60 rounded-2xl p-3 sm:p-5 flex flex-col justify-between">
            
            {/* Route origin to destination */}
            <div className="grid grid-cols-2 gap-3 pb-3 border-b border-zinc-850">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold block">Origin Port</span>
                <p className="text-xs sm:text-sm font-bold text-white mt-0.5">{activeData.origin}</p>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold block">Destination Port</span>
                <p className="text-xs sm:text-sm font-bold text-white mt-0.5">{activeData.destination}</p>
              </div>
            </div>

            {/* Visual Progress Bar */}
            <div className="my-3">
              <div className="flex justify-between text-[11px] text-zinc-400 mb-1.5 font-medium">
                <span>Origin Terminal</span>
                <span className="text-[#ff5500] font-bold">{activeData.progressPercent}% Transit Completed</span>
                <span>Destination Berth</span>
              </div>
              <div className="w-full h-2.5 bg-zinc-800 rounded-full overflow-hidden p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-orange-600 to-[#ff5500] rounded-full transition-all duration-700 relative"
                  style={{ width: `${activeData.progressPercent}%` }}
                />
              </div>
            </div>

            {/* Checkpoints Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {activeData.checkpoints.slice(0, 3).map((cp, idx) => (
                <div key={idx} className="p-2 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-zinc-200">
                    <CheckCircle2 className={`w-3.5 h-3.5 ${cp.completed ? "text-emerald-400" : "text-zinc-600"}`} />
                    <span className="truncate">{cp.title}</span>
                  </div>
                  <span className="text-[10px] text-zinc-400 block mt-1">{cp.location}</span>
                  <span className="text-[10px] text-[#ff5500] font-mono block mt-0.5">{cp.date}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Bottom Quick Indicator Status */}
        <div className="pt-2 border-t border-zinc-850 flex flex-wrap items-center justify-between text-[11px] text-zinc-500">
          <span>Encrypted Automated Customs Telemetry</span>
          <span className="text-zinc-400">Updates every 15 minutes via Inmarsat-C Maritime Network</span>
        </div>

      </div>
    </section>
  );
}
