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
    serviceType: "India ➔ UAE: Rice, Fruits, Veg & Spices Export",
    origin: initialData?.origin || "Mundra Port (Gujarat, India)",
    destination: initialData?.destination || "Jebel Ali / Dubai, UAE",
    message: initialCommodity || "Export container booking for Basmati Rice & Indian Spices.",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState("");

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

    const formattedMessage = `*NEW TRADE INQUIRY & RFQ - 10X INTERNATIONAL*
━━━━━━━━━━━━━━━━━━━━
👤 *Full Name:* ${formData.name}
🏢 *Company:* ${formData.company}
📧 *Email:* ${formData.email}
📱 *Phone/WhatsApp:* ${formData.phone}
🚢 *Service / Corridor:* ${formData.serviceType}
📍 *Origin Port / City:* ${formData.origin || "Not Specified"}
🏁 *Destination Port / Country:* ${formData.destination || "Not Specified"}
━━━━━━━━━━━━━━━━━━━━
📦 *Cargo / Trade Details:*
${formData.message}
━━━━━━━━━━━━━━━━━━━━
_Inquiry sent via 10X INTERNATIONAL Instant Quote Portal_`;

    const encoded = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/917984488660?text=${encoded}`;
    setLastWhatsAppUrl(whatsappUrl);
    setIsSubmitted(true);

    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank");
    }

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#ff5500", "#ffffff", "#10b981"],
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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-zinc-900 border border-white/20 rounded-3xl p-5 sm:p-8 shadow-[0_0_50px_rgba(255,85,0,0.25)] overflow-hidden my-auto max-h-[95vh] flex flex-col justify-between">
        
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div className="overflow-y-auto pr-1">
            {/* Header */}
            <div className="mb-4 sm:mb-5 pr-8">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff5500]">
                10X INTERNATIONAL • INSTANT QUOTE
              </span>
              <h3 className="font-outfit text-2xl sm:text-3xl font-bold text-white tracking-tight mt-0.5">
                Request Quotation or Trade Inquiry
              </h3>
              <p className="text-zinc-400 text-xs sm:text-[13px] mt-1 leading-relaxed">
                Direct quotation for container freight, customs clearance, and global commodity exports.
              </p>
            </div>

            {/* Quick Preset Selector Chips */}
            <div className="mb-4">
              <label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 block mb-1.5 font-mono">
                Select Quick Trade Corridor:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  {
                    name: "India ➔ UAE",
                    service: "India ➔ UAE: Rice, Fruits, Veg & Spices Export",
                    origin: "Mundra Port (Gujarat, India)",
                    dest: "Jebel Ali / Dubai, UAE",
                    note: "Export of Basmati Rice, Fresh Fruits, Vegetables, Pulses & Spices.",
                  },
                  {
                    name: "India ➔ Africa",
                    service: "India ➔ Africa: Trucks, Dumpers, JCBs & Hardware Export",
                    origin: "Mundra / JNPT Port, India",
                    dest: "Durban / Mombasa / West Africa",
                    note: "Export of Commercial Trucks, Dumpers, JCB Machinery, Safety Tools & Rice.",
                  },
                  {
                    name: "China ➔ India",
                    service: "China ➔ India: Kids/Mens Wear, Lingerie & Cosmetics Import",
                    origin: "Guangzhou / Ningbo / Yiwu, China",
                    dest: "Nhava Sheva / Ahmedabad ICD, India",
                    note: "Import of Kids Wear, Mens Wear, Ladies Undergarments & Beauty Cosmetics.",
                  },
                  {
                    name: "India ➔ Worldwide 🌐",
                    service: "Custom Global Export / Import Corridor",
                    origin: "Mundra / JNPT / Any Indian Port",
                    dest: "Any Custom Country / Port",
                    note: "Custom shipment from India to international destination.",
                  },
                ].map((preset, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => selectCorridor(preset)}
                    className={`px-2.5 py-2 rounded-xl text-left border text-xs transition-all cursor-pointer ${
                      formData.serviceType === preset.service
                        ? "bg-[#ff5500]/20 border-[#ff5500] text-white font-semibold shadow-md"
                        : "bg-zinc-950/70 border-zinc-800 text-zinc-300 hover:border-zinc-700"
                    }`}
                  >
                    <span className="text-[#ff5500] font-bold block text-xs truncate">{preset.name}</span>
                    <span className="text-[10px] text-zinc-400 truncate block mt-0.5">{preset.dest}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Inquiry Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-zinc-300 block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-zinc-950 border border-zinc-700/80 focus:border-[#ff5500] text-white px-3.5 py-2.5 rounded-xl text-xs sm:text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-zinc-300 block mb-1">
                    Company / Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Global Trading Corp"
                    className="w-full bg-zinc-950 border border-zinc-700/80 focus:border-[#ff5500] text-white px-3.5 py-2.5 rounded-xl text-xs sm:text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-zinc-300 block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="buyer@domain.com"
                    className="w-full bg-zinc-950 border border-zinc-700/80 focus:border-[#ff5500] text-white px-3.5 py-2.5 rounded-xl text-xs sm:text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-zinc-300 block mb-1">
                    Phone / WhatsApp (with Country Code) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98250 12345"
                    className="w-full bg-zinc-950 border border-zinc-700/80 focus:border-[#ff5500] text-white px-3.5 py-2.5 rounded-xl text-xs sm:text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-medium text-zinc-300 block mb-1">
                    Trade Requirement *
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-700/80 focus:border-[#ff5500] text-white px-2.5 py-2.5 rounded-xl text-xs sm:text-sm outline-none transition-colors"
                  >
                    <option value="India ➔ UAE: Rice, Fruits, Veg & Spices Export">India ➔ UAE Agro & Spices</option>
                    <option value="India ➔ Africa: Trucks, Dumpers, JCBs & Hardware Export">India ➔ Africa Machinery & Hardware</option>
                    <option value="China ➔ India: Kids/Mens Wear, Lingerie & Cosmetics Import">China ➔ India Apparel & Cosmetics</option>
                    <option value="Custom Global Export / Import Corridor">India ➔ Custom Worldwide Destination</option>
                    <option value="DGFT Customs Clearance & Port Brokerage">Customs Clearance & Brokerage</option>
                    <option value="Ocean Freight Container Booking">Ocean Freight Container Booking</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium text-zinc-300 block mb-1">
                    Origin Port / City
                  </label>
                  <input
                    type="text"
                    value={formData.origin}
                    onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                    placeholder="Mundra / Ahmedabad"
                    className="w-full bg-zinc-950 border border-zinc-700/80 focus:border-[#ff5500] text-white px-3.5 py-2.5 rounded-xl text-xs sm:text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-zinc-300 block mb-1">
                    Destination Port / Country
                  </label>
                  <input
                    type="text"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    placeholder="Dubai / Jebel Ali"
                    className="w-full bg-zinc-950 border border-zinc-700/80 focus:border-[#ff5500] text-white px-3.5 py-2.5 rounded-xl text-xs sm:text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-zinc-300 block mb-1">
                  Cargo Description & Volume Inquiries *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Specify commodity details, quantity / container size (20ft / 40ft), target shipping date..."
                  className="w-full bg-zinc-950 border border-zinc-700/80 focus:border-[#ff5500] text-white p-3 rounded-xl text-xs sm:text-sm outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#ff5500] hover:bg-[#e04800] text-white font-bold text-xs sm:text-sm py-3.5 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30 transition-all duration-200 active:scale-95 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry to WhatsApp (+91 79844 88660)</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* SUCCESS CONFIRMATION */
          <div className="text-center py-8 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mx-auto flex items-center justify-center mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff5500]">
              Inquiry Dispatched Directly
            </span>
            <h3 className="font-outfit text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
              INQUIRY SENT TO WHATSAPP!
            </h3>

            <div className="my-5 p-4 bg-zinc-950/80 border border-white/10 rounded-2xl max-w-md mx-auto text-left text-xs text-zinc-300 space-y-2">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-zinc-400">Client / Shipper:</span>
                <span className="text-white font-semibold">{formData.name} ({formData.company})</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-zinc-400">Trade Requirement:</span>
                <span className="text-[#ff5500] font-semibold">{formData.serviceType}</span>
              </div>
              <div className="flex justify-between text-xs text-zinc-300">
                <span className="text-zinc-400">Route:</span>
                <span>{formData.origin} ➔ {formData.destination}</span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 max-w-md mx-auto mb-6">
              Your inquiry has been formatted and delivered to our WhatsApp desk. Our trade coordinator will respond with an official quotation shortly.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              {lastWhatsAppUrl && (
                <a
                  href={lastWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center gap-2 shadow-lg shadow-emerald-500/25 transition-all active:scale-95 cursor-pointer"
                >
                  <span>Open WhatsApp Chat Again</span>
                  <Send className="w-3.5 h-3.5" />
                </a>
              )}
              <button
                onClick={resetAndClose}
                className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold text-xs sm:text-sm rounded-xl transition-all cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
