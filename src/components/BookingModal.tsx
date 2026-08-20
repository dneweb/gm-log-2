"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, Ship, Plane, Truck, ArrowRight, ArrowLeft, Sparkles, Building, Mail, Phone, Calendar, User, ShieldAlert } from "lucide-react";
import confetti from "canvas-confetti";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: any;
}

export default function BookingModal({ isOpen, onClose, initialData }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    freightType: initialData?.freightType || "ocean_fcl",
    origin: initialData?.origin || "CNSZX (Shenzhen, China)",
    destination: initialData?.destination || "USLAX (Los Angeles, USA)",
    commodity: "Consumer Electronics & Industrial Parts",
    weight: initialData?.weightKg || "1200",
    containerSize: initialData?.containerSize || "40hc",
    isHazardous: false,
    pickupDate: "2026-08-25",
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    specialNotes: "",
  });

  const [bookingRef, setBookingRef] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        ...initialData,
      }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = `BK-${Math.floor(1000 + Math.random() * 9000)}-${formData.freightType.toUpperCase().slice(0, 3)}`;
    setBookingRef(refCode);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#ff5500", "#ffffff", "#3b82f6"],
      });
    } catch (e) {
      // safe fallback
    }
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-zinc-900 border-2 border-[#ff5500]/60 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(255,85,0,0.3)] overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header & Step Indicator */}
            <div className="mb-6 pr-8">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#ff5500]">
                Express Freight Reservation
              </span>
              <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-tight mt-0.5">
                BOOK YOUR SHIPMENT CONTAINER
              </h3>

              {/* Progress Steps */}
              <div className="flex items-center gap-2 mt-4">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex-1 flex items-center gap-2">
                    <div
                      className={`h-1.5 w-full rounded-full transition-colors ${
                        step >= s ? "bg-[#ff5500]" : "bg-zinc-800"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* STEP 1: ROUTE & MODE */}
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block mb-2">
                      Transportation Mode
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: "ocean_fcl", label: "Ocean FCL", icon: Ship },
                        { id: "air_express", label: "Air Cargo", icon: Plane },
                        { id: "road", label: "Inland Drayage", icon: Truck },
                      ].map((item) => {
                        const Icon = item.icon;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, freightType: item.id })}
                            className={`p-3 rounded-2xl border flex flex-col items-center gap-1.5 transition-colors cursor-pointer ${
                              formData.freightType === item.id
                                ? "bg-[#ff5500]/20 border-[#ff5500] text-white font-semibold"
                                : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                            }`}
                          >
                            <Icon className="w-5 h-5 text-[#ff5500]" />
                            <span className="text-xs">{item.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block mb-1.5">
                        Origin Port / City
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.origin}
                        onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                        placeholder="e.g. Shenzhen, China"
                        className="w-full bg-zinc-950 border border-zinc-700 focus:border-[#ff5500] text-white p-3 rounded-xl text-sm outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block mb-1.5">
                        Destination Port / City
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        placeholder="e.g. Los Angeles, USA"
                        className="w-full bg-zinc-950 border border-zinc-700 focus:border-[#ff5500] text-white p-3 rounded-xl text-sm outline-none"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-3 bg-[#ff5500] hover:bg-[#e04800] text-white font-semibold text-sm rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>Cargo Specifications</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: CARGO DETAILS */}
              {step === 2 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block mb-1.5">
                      Commodity Description
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.commodity}
                      onChange={(e) => setFormData({ ...formData, commodity: e.target.value })}
                      placeholder="e.g. Auto spare parts, Textiles, Solar equipment"
                      className="w-full bg-zinc-950 border border-zinc-700 focus:border-[#ff5500] text-white p-3 rounded-xl text-sm outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block mb-1.5">
                        Container Size / Spec
                      </label>
                      <select
                        value={formData.containerSize}
                        onChange={(e) => setFormData({ ...formData, containerSize: e.target.value })}
                        className="w-full bg-zinc-950 border border-zinc-700 focus:border-[#ff5500] text-white p-3 rounded-xl text-sm outline-none cursor-pointer"
                      >
                        <option value="20ft">20' Dry Standard Container</option>
                        <option value="40ft">40' Dry Standard Container</option>
                        <option value="40hc">40' High Cube Container</option>
                        <option value="40reefer">40' Reefer Temperature (-20°C)</option>
                        <option value="lcl">LCL Consolidated Pallets</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block mb-1.5">
                        Estimated Weight (KG)
                      </label>
                      <input
                        type="number"
                        value={formData.weight}
                        onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                        placeholder="e.g. 5000"
                        className="w-full bg-zinc-950 border border-zinc-700 focus:border-[#ff5500] text-white p-3 rounded-xl text-sm outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="hazmat"
                      checked={formData.isHazardous}
                      onChange={(e) => setFormData({ ...formData, isHazardous: e.target.checked })}
                      className="w-4 h-4 accent-[#ff5500] rounded cursor-pointer"
                    />
                    <label htmlFor="hazmat" className="text-xs text-zinc-300 cursor-pointer">
                      Cargo contains lithium batteries, chemicals, or DG Class goods (MSDS required)
                    </label>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold text-sm rounded-xl flex items-center gap-2 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-6 py-3 bg-[#ff5500] hover:bg-[#e04800] text-white font-semibold text-sm rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>Shipper Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: CONTACT & CONFIRMATION */}
              {step === 3 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block mb-1.5">
                        Full Name / Authorized Contact
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Miller"
                        className="w-full bg-zinc-950 border border-zinc-700 focus:border-[#ff5500] text-white p-3 rounded-xl text-sm outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Apex Trading Corp."
                        className="w-full bg-zinc-950 border border-zinc-700 focus:border-[#ff5500] text-white p-3 rounded-xl text-sm outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block mb-1.5">
                        Business Email (For Booking Slip)
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="logistics@company.com"
                        className="w-full bg-zinc-950 border border-zinc-700 focus:border-[#ff5500] text-white p-3 rounded-xl text-sm outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block mb-1.5">
                        Direct Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 019-2834"
                        className="w-full bg-zinc-950 border border-zinc-700 focus:border-[#ff5500] text-white p-3 rounded-xl text-sm outline-none"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold text-sm rounded-xl flex items-center gap-2 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3.5 bg-[#ff5500] hover:bg-[#e04800] text-white font-bold text-sm uppercase tracking-wider rounded-xl flex items-center gap-2 transition-all shadow-xl shadow-orange-500/30 cursor-pointer active:scale-95"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Confirm & Generate Booking</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        ) : (
          /* SUCCESS CONFIRMATION */
          <div className="text-center py-6 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mx-auto flex items-center justify-center mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff5500]">
              Space Confirmed & Allocated
            </span>
            <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-tight mt-1">
              BOOKING ORDER CONFIRMED!
            </h3>

            <div className="my-5 p-4 bg-zinc-950/80 border border-zinc-800 rounded-2xl max-w-md mx-auto text-left space-y-2">
              <div className="flex justify-between items-center text-xs pb-2 border-b border-zinc-800">
                <span className="text-zinc-400 font-medium">Booking Reference:</span>
                <span className="font-mono font-bold text-[#ff5500] text-sm">{bookingRef}</span>
              </div>
              <div className="flex justify-between text-xs text-zinc-300">
                <span className="text-zinc-400">Shipper:</span>
                <span>{formData.fullName || "Valued Shipper"} ({formData.companyName || "Commercial"})</span>
              </div>
              <div className="flex justify-between text-xs text-zinc-300">
                <span className="text-zinc-400">Route:</span>
                <span>{formData.origin} → {formData.destination}</span>
              </div>
              <div className="flex justify-between text-xs text-zinc-300">
                <span className="text-zinc-400">Container / Spec:</span>
                <span>{formData.containerSize.toUpperCase()}</span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 max-w-md mx-auto mb-6">
              A copy of your electronic booking note and container dispatch permit has been sent to{" "}
              <strong className="text-white">{formData.email || "your email"}</strong>.
            </p>

            <button
              onClick={resetAndClose}
              className="px-8 py-3 bg-[#ff5500] hover:bg-[#e04800] text-white font-semibold text-sm rounded-xl transition-all shadow-lg shadow-orange-500/25 cursor-pointer"
            >
              Done & Return to Overview
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
