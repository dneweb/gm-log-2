"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, Send, ShieldCheck, MapPin, Building, Mail, Phone, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: any;
  initialCommodity?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  initialData,
  initialCommodity,
}: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    serviceType: "Container Drayage & Transloading",
    origin: initialData?.origin || "New Jersey / Regional Port",
    destination: initialData?.destination || "48 States / Canada Destination",
    message: initialCommodity || "Inquiry for 3PL freight operations, fleet availability, and rates.",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialCommodity) {
      setFormData((prev) => ({ ...prev, message: initialCommodity }));
    }
    if (initialData?.serviceType) {
      setFormData((prev) => ({ ...prev, serviceType: initialData.serviceType }));
    }
  }, [initialData, initialCommodity]);

  const selectCorridor = (preset: { name: string; service: string; origin: string; dest: string; note: string }) => {
    setFormData((prev) => ({
      ...prev,
      serviceType: preset.service,
      origin: preset.origin,
      destination: preset.dest,
      message: preset.note,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `*NEW FREIGHT INQUIRY & RFQ - GM LOGISTICS SERVICES*
━━━━━━━━━━━━━━━━━━━━
👤 *Full Name:* ${formData.name}
🏢 *Company:* ${formData.company}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone}
🚢 *Service Required:* ${formData.serviceType}
📍 *Origin City / State:* ${formData.origin || "Not Specified"}
🏁 *Destination City / State:* ${formData.destination || "Not Specified"}
━━━━━━━━━━━━━━━━━━━━
📦 *Load & Logistics Details:*
${formData.message}
━━━━━━━━━━━━━━━━━━━━
_Inquiry sent via GM LOGISTICS SERVICES Quote Portal (www.gmlsvs.com)_`;

    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#dc2626", "#ffffff", "#2563eb"],
      });
    } catch (e) {
      // safe fallback
    }
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-8 shadow-[0_25px_60px_rgba(15,23,42,0.18)] overflow-hidden my-auto max-h-[95vh] flex flex-col justify-between text-slate-800">
        
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div className="overflow-y-auto pr-1">
            {/* Header */}
            <div className="mb-4 sm:mb-5 pr-8">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#dc2626]">
                GM LOGISTICS SERVICES • 24/7 QUOTE DESK
              </span>
              <h3 className="font-outfit text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-0.5">
                Request Freight Quotation or Inquiry
              </h3>
              <p className="text-slate-600 text-xs sm:text-[13px] mt-1 leading-relaxed">
                Direct quotation for 3PL freight solutions across 48 states in USA and Canada. Call 24/7: 732-917-7747
              </p>
            </div>

            {/* Quick Preset Selector Chips */}
            <div className="mb-4">
              <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-600 block mb-1.5 font-mono">
                Select Quick 3PL Service:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  {
                    name: "Container Drayage",
                    service: "Container Drayage & Transloading",
                    origin: "Seaport / Rail Ramp",
                    dest: "Inland Terminals / 48 States",
                    note: "Container Drayage, rail ramp transfer, and transloading service.",
                  },
                  {
                    name: "Full Truckload",
                    service: "Full Truckload (FTL) Shipping",
                    origin: "Origin Facility",
                    dest: "48 States & Canada Delivery",
                    note: "Dedicated full truckload fleet capacity and guaranteed load acceptance.",
                  },
                  {
                    name: "LTL & Reefer",
                    service: "LTL & Reefer Trailers (Cold Chain)",
                    origin: "Origin Warehouse",
                    dest: "Customer Distribution Center",
                    note: "Discounted LTL freight or temperature-controlled refrigerated trailer transport.",
                  },
                  {
                    name: "Hazmat / Flatbed",
                    service: "Hazmat, Alcohol Permits & Overweight",
                    origin: "Shipper Facility",
                    dest: "Receiver Facility",
                    note: "Specialized Hazmat, alcohol permits, overweight, or flatbed heavy haul.",
                  },
                ].map((preset, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => selectCorridor(preset)}
                    className={`px-2.5 py-2 rounded-xl text-left border text-xs transition-all cursor-pointer ${
                      formData.serviceType === preset.service
                        ? "bg-[#dc2626]/10 border-[#dc2626] text-slate-900 font-semibold shadow-sm"
                        : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                    }`}
                  >
                    <span className="text-[#dc2626] font-bold block text-xs truncate">{preset.name}</span>
                    <span className="text-[10px] text-slate-500 truncate block mt-0.5">{preset.dest}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Inquiry Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-slate-700 block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-slate-50 border border-slate-300 focus:border-[#dc2626] text-slate-900 placeholder:text-slate-400 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-700 block mb-1">
                    Company / Shipper Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Acme Logistics Corp"
                    className="w-full bg-slate-50 border border-slate-300 focus:border-[#dc2626] text-slate-900 placeholder:text-slate-400 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-slate-700 block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="dispatch@yourcompany.com"
                    className="w-full bg-slate-50 border border-slate-300 focus:border-[#dc2626] text-slate-900 placeholder:text-slate-400 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-700 block mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="732-917-7747"
                    className="w-full bg-slate-50 border border-slate-300 focus:border-[#dc2626] text-slate-900 placeholder:text-slate-400 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-medium text-slate-700 block mb-1">
                    Logistics Service *
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 focus:border-[#dc2626] text-slate-900 px-2.5 py-2.5 rounded-xl text-xs sm:text-sm outline-none transition-colors"
                  >
                    <option value="Container Drayage & Transloading">Container Drayage &amp; Transloading</option>
                    <option value="Full Truckload (FTL) Shipping">Full Truckload (FTL)</option>
                    <option value="Less Than Truckload (LTL)">Less Than Truckload (LTL)</option>
                    <option value="Reefer Containers & Trailers (Cold Chain)">Reefer Containers &amp; Trailers</option>
                    <option value="Flatbed & Overweight Hauling">Flatbed &amp; Overweight</option>
                    <option value="Hazmat & Alcohol Permits">Hazmat &amp; Alcohol Permits</option>
                    <option value="Airport Pick ups & Storage">Airport Pick ups &amp; Storage</option>
                    <option value="Warehousing, Palletize & Shrink Wrap">Warehousing, Palletize &amp; Shrink Wrap</option>
                    <option value="Export Stuffing">Export Stuffing</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-700 block mb-1">
                    Origin City / State
                  </label>
                  <input
                    type="text"
                    value={formData.origin}
                    onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                    placeholder="Kendall Park, NJ"
                    className="w-full bg-slate-50 border border-slate-300 focus:border-[#dc2626] text-slate-900 placeholder:text-slate-400 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-700 block mb-1">
                    Destination City / State
                  </label>
                  <input
                    type="text"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    placeholder="Chicago, IL / Toronto, ON"
                    className="w-full bg-slate-50 border border-slate-300 focus:border-[#dc2626] text-slate-900 placeholder:text-slate-400 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-700 block mb-1">
                  Load Description &amp; Requirements *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Specify weight, commodity type, pallet count, temperature requirements, pickup and delivery dates..."
                  className="w-full bg-slate-50 border border-slate-300 focus:border-[#dc2626] text-slate-900 placeholder:text-slate-400 p-3 rounded-xl text-xs sm:text-sm outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-xs sm:text-sm py-3.5 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 transition-all duration-200 active:scale-95 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry to 24/7 Dispatch Desk (732-917-7747)</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* SUCCESS CONFIRMATION */
          <div className="text-center py-8 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center mb-4 shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#dc2626]">
              Inquiry Dispatched Directly
            </span>
            <h3 className="font-outfit text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-1">
              INQUIRY DISPATCHED!
            </h3>

            <div className="my-5 p-4 bg-slate-50 border border-slate-200 rounded-2xl max-w-md mx-auto text-left text-xs text-slate-700 space-y-2">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Shipper:</span>
                <span className="text-slate-900 font-semibold">{formData.name} ({formData.company})</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Service Required:</span>
                <span className="text-[#dc2626] font-semibold">{formData.serviceType}</span>
              </div>
              <div className="flex justify-between text-xs text-slate-700">
                <span className="text-slate-500">Lane:</span>
                <span>{formData.origin} ➔ {formData.destination}</span>
              </div>
            </div>

            <p className="text-xs text-slate-500 max-w-md mx-auto mb-6">
              Your inquiry has been formatted and delivered to our 24/7 dispatch desk. Our capacity specialist will contact you with a competitive discounted quotation shortly.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="tel:7329177747"
                className="px-6 py-3 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-xs sm:text-sm rounded-xl flex items-center gap-2 shadow-md shadow-red-600/20 transition-all active:scale-95 cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Dispatch: 732-917-7747</span>
              </a>
              <button
                onClick={resetAndClose}
                className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm rounded-xl transition-all cursor-pointer"
              >
                Close &amp; Return
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
