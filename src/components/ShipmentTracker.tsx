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
  "GMLS-8824-NJ": {
    id: "GMLS-8824-NJ",
    sender: "Port of New York / New Jersey Marine Terminal",
    receiver: "Midwest Distribution Logistics, Chicago, IL",
    origin: "Port Newark Container Terminal (PNCT), NJ",
    destination: "Inland Rail Ramp & DC, Chicago, IL",
    carrier: "GM LOGISTICS SERVICES Dedicated Fleet",
    mode: "road",
    vesselName: "GMLS Intermodal Freight Unit #418",
    containerId: "GMLU-774701-4 (40ft High Cube Drayage)",
    status: "In Transit • On-Time Schedule",
    eta: "Today • 17:30 EST",
    progressPercent: 78,
    currentLocation: "I-80 W Corridor, Clearfield PA (GPS Verified)",
    checkpoints: [
      { title: "Container Pulled from PNCT Berth", location: "Newark Port NJ", date: "Yesterday, 08:30 EST", completed: true },
      { title: "Kendall Park NJ Dispatch Verification", location: "GMLS Operations HQ", date: "Yesterday, 11:15 EST", completed: true },
      { title: "Interstate Transit via I-80 W Corridor", location: "Pennsylvania Highway", date: "Today, In Progress", completed: true, current: true },
      { title: "Arrival at Chicago Cross-Dock Ramp", location: "Chicago Hub, IL", date: "Today, Expected", completed: false },
      { title: "Final Consignee Dock Delivery", location: "Distribution Facility", date: "Tomorrow, 08:00 CST", completed: false },
    ],
  },
  "GMLS-5519-CA": {
    id: "GMLS-5519-CA",
    sender: "Pacific Rim Importers, Los Angeles",
    receiver: "Great Lakes Cold Storage, Toronto, Canada",
    origin: "Port of Long Beach, CA",
    destination: "Toronto Logistics Center, ON, Canada",
    carrier: "GMLS Cross-Border Carrier Alliance",
    mode: "road",
    vesselName: "GMLS Reefer Unit #512 (-20°C Certified)",
    containerId: "REEF-917741-2 (53ft Temperature Controlled)",
    status: "Customs Border Pre-Clearance Approved",
    eta: "Aug 22 • 11:00 EST",
    progressPercent: 62,
    currentLocation: "Midwest Transit Corridor, Detroit Gateway",
    checkpoints: [
      { title: "Reefer Pre-Cooled & Loaded at Long Beach", location: "Long Beach Pier J", date: "Aug 18, 09:00 PST", completed: true },
      { title: "Continuous Temperature Telemetry Verified", location: "GMLS Dispatch Center", date: "Aug 19, 14:00 PST", completed: true },
      { title: "US-Canada Cross-Border Filing (ACI/eManifest)", location: "Ambassador Bridge Zone", date: "Today, Verified", completed: true, current: true },
      { title: "Canada Border Services Clearance", location: "Windsor Port of Entry", date: "Tonight, Expected", completed: false },
      { title: "Final Cold-Chain Delivery", location: "Toronto DC", date: "Aug 22, Expected", completed: false },
    ],
  },
  "GMLS-3304-TX": {
    id: "GMLS-3304-TX",
    sender: "Gulf Coast Petrochemical Refiners, Houston",
    receiver: "Northeast Polymer Converters, Newark, NJ",
    origin: "Baytown Terminal, Houston, TX",
    destination: "Industrial Staging Yard, Newark, NJ",
    carrier: "GMLS Hazmat & Heavy-Haul Division",
    mode: "road",
    vesselName: "GMLS Permitted Heavy Chassis #208",
    containerId: "HAZM-449102-8 (DOT Hazmat Certified Class 3)",
    status: "En Route • On Schedule",
    eta: "Aug 24 • 14:00 EST",
    progressPercent: 45,
    currentLocation: "I-59 N Corridor, Meridian, MS",
    checkpoints: [
      { title: "Hazmat Placarded & Weight Certified", location: "Houston Staging Yard", date: "Aug 20, 07:30 CST", completed: true },
      { title: "State Overweight Corridor Clearance", location: "DOT Inspection Station", date: "Aug 20, 16:00 CST", completed: true },
      { title: "Interstate Transit & GPS Monitoring", location: "Meridian Highway Hub", date: "Today, Current", completed: true, current: true },
      { title: "Arrival at Northeast Relay Yard", location: "Kendall Park / Newark NJ", date: "Aug 23, Expected", completed: false },
      { title: "Final Delivery to Manufacturing Facility", location: "Newark Chemical Works", date: "Aug 24, Expected", completed: false },
    ],
  },
};

export default function ShipmentTracker() {
  const [trackingNumber, setTrackingNumber] = useState("GMLS-8824-NJ");
  const [activeData, setActiveData] = useState<TrackingData>(SAMPLE_SHIPMENTS["GMLS-8824-NJ"]);
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
          id: code || "GMLS-CUSTOM-88",
          sender: "Shipper Facility / Marine Terminal",
          receiver: "Verified Consignee Delivery Dock",
          origin: "Origin Port / Rail Ramp",
          destination: "Destination Freight Center",
          carrier: "GM LOGISTICS SERVICES 3PL Fleet",
          mode: "road",
          vesselName: "GMLS Certified Carrier Unit",
          containerId: "CONT-889012-A",
          status: "In Transit • On Schedule",
          eta: "In 2 Business Days",
          progressPercent: 65,
          currentLocation: "Active Interstate 48-State Shipping Lane",
          checkpoints: [
            { title: "Consignment Dispatched", location: "Origin Terminal", date: "Recent", completed: true },
            { title: "GMLS Dispatch Verification", location: "Kendall Park NJ Desk", date: "Recent", completed: true },
            { title: "In Transit Across Highway Corridor", location: "Interstate Network", date: "Current", completed: true, current: true },
            { title: "Destination Terminal Cross-Dock", location: "Regional Yard", date: "Upcoming", completed: false },
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
    <section id="tracking" className="relative w-full h-screen min-h-[640px] max-h-[1080px] p-2.5 sm:p-4 md:p-6 lg:p-8 bg-[#f8fafc] flex flex-col items-center justify-center box-border overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(220,38,38,0.04)_0%,transparent_70%)] pointer-events-none" />

      {/* Main Inner Container Frame */}
      <div className="relative w-full h-full max-w-[1520px] rounded-[24px] sm:rounded-[32px] md:rounded-[40px] border border-slate-200/90 bg-white p-4 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.06),0_1px_3px_rgba(15,23,42,0.05)] backdrop-blur-xl">
        
        {/* Top Header & Search Bar Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-3 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#dc2626]/10 border border-[#dc2626]/30 text-[#dc2626] text-[11px] font-semibold uppercase tracking-wider mb-1">
              <Search className="w-3 h-3" />
              <span>Real-Time 3PL Telemetry</span>
            </div>
            <h2 className="font-bebas text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 leading-tight">
              LIVE FREIGHT &amp; CONTAINER TRACKING
            </h2>
          </div>

          {/* Compact Search Form */}
          <div className="w-full lg:w-auto min-w-[320px] sm:min-w-[420px]">
            <form onSubmit={handleSearch} className="relative flex items-center">
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Tracking ID (e.g. GMLS-8824-NJ)"
                className="w-full bg-slate-50 border border-slate-300 focus:border-[#dc2626] text-slate-900 placeholder:text-slate-400 pl-10 pr-24 py-2 rounded-full outline-none text-xs sm:text-sm transition-all"
              />
              <Package className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <button
                type="submit"
                disabled={isSearching}
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold px-4 py-1.5 rounded-full text-xs flex items-center gap-1.5 cursor-pointer shadow-md shadow-red-600/20"
              >
                {isSearching ? <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <span>Track</span>}
              </button>
            </form>
            <div className="flex items-center gap-1.5 mt-1.5 text-[11px] text-slate-500">
              <span className="text-slate-400">Live test lanes:</span>
              {Object.keys(SAMPLE_SHIPMENTS).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => loadSample(key)}
                  className={`px-2 py-0.5 rounded transition-colors cursor-pointer text-[10px] font-mono ${
                    activeData.id === key ? "bg-[#dc2626] text-white font-bold" : "bg-slate-100 hover:bg-slate-200 text-slate-700"
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
          <div className="lg:col-span-4 bg-slate-50/80 border border-slate-200/80 rounded-2xl p-3 sm:p-4 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase bg-[#dc2626]/10 text-[#dc2626] px-2 py-0.5 rounded font-bold border border-[#dc2626]/20">
                  {activeData.id}
                </span>
                <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live GPS Stream
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-2 leading-tight">
                {activeData.status}
              </h3>
              <p className="text-[11px] text-slate-500 mt-1">{activeData.currentLocation}</p>
            </div>

            <div className="space-y-2 pt-3 border-t border-slate-200 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">Carrier:</span>
                <span className="text-slate-800 font-semibold">{activeData.carrier}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Equipment / Fleet:</span>
                <span className="text-slate-800 font-semibold">{activeData.vesselName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Container / Trailer:</span>
                <span className="text-[#dc2626] font-mono font-bold">{activeData.containerId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">ETA Delivery:</span>
                <span className="text-slate-900 font-bold">{activeData.eta}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Route Progress & Timeline */}
          <div className="lg:col-span-8 bg-slate-50/80 border border-slate-200/80 rounded-2xl p-3 sm:p-5 flex flex-col justify-between shadow-sm">
            
            {/* Route origin to destination */}
            <div className="grid grid-cols-2 gap-3 pb-3 border-b border-slate-200">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold block">Origin Terminal</span>
                <p className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">{activeData.origin}</p>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold block">Destination Facility</span>
                <p className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">{activeData.destination}</p>
              </div>
            </div>

            {/* Visual Progress Bar */}
            <div className="my-3">
              <div className="flex justify-between text-[11px] text-slate-600 mb-1.5 font-medium">
                <span>Origin Gate Out</span>
                <span className="text-[#dc2626] font-bold">{activeData.progressPercent}% Transit Completed</span>
                <span>Destination Gate In</span>
              </div>
              <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-red-600 to-[#dc2626] rounded-full transition-all duration-700 relative"
                  style={{ width: `${activeData.progressPercent}%` }}
                />
              </div>
            </div>

            {/* Checkpoints Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {activeData.checkpoints.slice(0, 3).map((cp, idx) => (
                <div key={idx} className="p-2 rounded-xl bg-white border border-slate-200/90 text-xs shadow-sm">
                  <div className="flex items-center gap-1.5 font-bold text-slate-800">
                    <CheckCircle2 className={`w-3.5 h-3.5 ${cp.completed ? "text-emerald-500" : "text-slate-300"}`} />
                    <span className="truncate">{cp.title}</span>
                  </div>
                  <span className="text-[10px] text-slate-500 block mt-1">{cp.location}</span>
                  <span className="text-[10px] text-[#dc2626] font-mono block mt-0.5 font-semibold">{cp.date}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Bottom Quick Indicator Status */}
        <div className="pt-2 border-t border-slate-200 flex flex-wrap items-center justify-between text-[11px] text-slate-500">
          <span>GM LOGISTICS SERVICES • 24/7 Dispatch Desk: 732-917-7747</span>
          <span className="text-slate-500">Continuous GPS Highway &amp; Terminal Fleet Telemetry</span>
        </div>

      </div>
    </section>
  );
}
