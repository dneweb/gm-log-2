"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  Globe,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function ContactPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    serviceType: "India ➔ UAE: Rice, Fruits, Veg & Spices Export",
    origin: "",
    destination: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState("");

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
_Inquiry sent via official website 10xinternational.com_`;

    const encoded = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/917926821010?text=${encoded}`;
    setLastWhatsAppUrl(whatsappUrl);
    setSubmitted(true);

    // Open WhatsApp in new tab
    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <main className="w-full min-h-screen bg-[#07080b] text-white overflow-x-hidden flex flex-col justify-between">
      <div>
        {/* Page Header */}
        <PageHeader
          badge="GET IN TOUCH WITH 10X INTERNATIONAL"
          title="Direct Inquiries, RFQ &"
          highlightedWord="Global Operations"
          description="Connect with our managing partners and logistics dispatchers in Ahmedabad, Gujarat for instant container quotes, freight booking, or commodity export inquiries."
          breadcrumb="Contact Us"
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Main 2-Column Contact & Form Section */}
        <section className="py-12 sm:py-16 px-4 sm:px-8 md:px-14 lg:px-20 max-w-[1520px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
            
            {/* Left Column: Official Office & Contact Channels */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 flex flex-col gap-6"
            >
              <div>
                <span className="text-xs font-bold tracking-widest text-[#ff5500] uppercase font-mono">
                  REGISTERED HEADQUARTERS
                </span>
                <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-white mt-1 mb-3">
                  10X INTERNATIONAL
                </h2>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Government-Certified Importer-Exporter • Multi-Modal Global Logistics Desk.
                </p>
              </div>

              {/* Office Details Card */}
              <div className="bg-zinc-900/90 border border-white/15 rounded-3xl p-6 sm:p-7 flex flex-col gap-5 shadow-2xl backdrop-blur-xl">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#ff5500]/15 border border-[#ff5500]/30 flex items-center justify-center text-[#ff5500] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-outfit font-bold text-sm text-white">Registered Address</h4>
                    <p className="text-zinc-300 text-xs sm:text-[13px] leading-relaxed mt-0.5">
                      Nr. Haji Bawa Ni Kui, 0, 14/4, M.J.D. Farm, Sarkhej Road, Juhapura, Ahmedabad, Gujarat, 380055, India.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 border-t border-white/10 pt-4">
                  <div className="w-10 h-10 rounded-xl bg-[#ff5500]/15 border border-[#ff5500]/30 flex items-center justify-center text-[#ff5500] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-outfit font-bold text-sm text-white">Direct Phone & WhatsApp</h4>
                    <p className="text-zinc-300 text-xs sm:text-[13px] mt-0.5">+91 98250 12345 (Direct Call)</p>
                    <a
                      href="https://wa.me/917926821010?text=Hello%2010X%20INTERNATIONAL,%20I%20have%20an%20import/export%20inquiry."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium text-xs mt-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-1 rounded-lg transition-colors"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>WhatsApp Desk: <strong className="font-mono">+91 79 2682 1010</strong></span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 border-t border-white/10 pt-4">
                  <div className="w-10 h-10 rounded-xl bg-[#ff5500]/15 border border-[#ff5500]/30 flex items-center justify-center text-[#ff5500] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-outfit font-bold text-sm text-white">Official Email Lines</h4>
                    <p className="text-zinc-300 text-xs sm:text-[13px] mt-0.5">contact@10xinternational.com</p>
                    <p className="text-zinc-400 text-xs">export@10xinternational.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 border-t border-white/10 pt-4">
                  <div className="w-10 h-10 rounded-xl bg-[#ff5500]/15 border border-[#ff5500]/30 flex items-center justify-center text-[#ff5500] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-outfit font-bold text-sm text-white">Operations & Dispatch Hours</h4>
                    <p className="text-zinc-300 text-xs sm:text-[13px] mt-0.5">Monday - Saturday: 09:00 AM - 08:00 PM IST</p>
                    <p className="text-zinc-400 text-xs">24/7 Support for Urgent Port Clearances</p>
                  </div>
                </div>
              </div>

              {/* Partners Escalation Card */}
              <div className="bg-zinc-950 border border-white/10 rounded-2xl p-4 sm:p-5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#ff5500] uppercase font-bold">MANAGING PARTNERS</span>
                  <p className="font-outfit font-bold text-xs sm:text-sm text-white mt-0.5">Mohamedirfan Safimohamed & Nawazuddin Saiyed</p>
                </div>
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
              </div>
            </motion.div>

            {/* Right Column: Interactive Global RFQ / Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-7 bg-zinc-900/90 border border-white/15 rounded-[32px] p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl"
            >
              {submitted ? (
                <div className="py-10 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-outfit text-2xl sm:text-3xl font-bold text-white mb-2">
                    Inquiry Sent Directly to WhatsApp!
                  </h3>
                  <p className="text-zinc-300 text-xs sm:text-sm max-w-md mb-5 leading-relaxed">
                    Your trade inquiry has been formatted and dispatched to the official 10X INTERNATIONAL WhatsApp Desk (<strong className="text-emerald-400 font-mono">+91 79 2682 1010</strong>).
                  </p>

                  {/* Summary Card */}
                  <div className="w-full max-w-md bg-zinc-950/80 border border-white/10 rounded-2xl p-4 text-left text-xs text-zinc-300 space-y-2 mb-6">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-zinc-400">Shipper / Client:</span>
                      <span className="text-white font-semibold">{formData.name} ({formData.company})</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-zinc-400">Selected Service:</span>
                      <span className="text-[#ff5500] font-semibold">{formData.serviceType}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-zinc-400">Route / Port:</span>
                      <span>{formData.origin || "Origin"} ➔ {formData.destination || "Destination"}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    {lastWhatsAppUrl && (
                      <a
                        href={lastWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-500 hover:bg-emerald-400 text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full flex items-center gap-2 shadow-lg shadow-emerald-500/30 transition-all active:scale-95"
                      >
                        <span>Open WhatsApp Chat Again</span>
                        <Send className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          company: "",
                          email: "",
                          phone: "",
                          serviceType: "India ➔ UAE: Rice, Fruits, Veg & Spices Export",
                          origin: "",
                          destination: "",
                          message: "",
                        });
                      }}
                      className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <h3 className="font-outfit text-2xl font-bold text-white">
                      Request Quotation or Trade Inquiry
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-[13px] mt-1">
                      Direct quote for container freight, customs clearance, or Indian commodity exports.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-zinc-300 block mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-zinc-950 border border-zinc-700/80 focus:border-[#ff5500] text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-zinc-300 block mb-1.5">
                        Company / Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Global Trading Corp"
                        className="w-full bg-zinc-950 border border-zinc-700/80 focus:border-[#ff5500] text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-zinc-300 block mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="buyer@domain.com"
                        className="w-full bg-zinc-950 border border-zinc-700/80 focus:border-[#ff5500] text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-zinc-300 block mb-1.5">
                        Phone / WhatsApp (with Country Code) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98250 12345"
                        className="w-full bg-zinc-950 border border-zinc-700/80 focus:border-[#ff5500] text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-medium text-zinc-300 block mb-1.5">
                        Service / Requirement *
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full bg-zinc-950 border border-zinc-700/80 focus:border-[#ff5500] text-white px-3.5 py-2.5 rounded-xl text-xs sm:text-sm outline-none transition-colors"
                      >
                        <option value="India-UAE Agro Export">India ➔ UAE: Rice, Fruits, Veg & Spices Export</option>
                        <option value="India-Africa Machinery Export">India ➔ Africa: Trucks, Dumpers, JCBs & Hardware Export</option>
                        <option value="China-India Specialty Import">China ➔ India: Kids/Mens Wear, Lingerie & Cosmetics Import</option>
                        <option value="Custom Worldwide Corridor">India ➔ Custom Worldwide Destination (Custom Route)</option>
                        <option value="Customs Brokerage">Customs Clearance & DGFT Brokerage</option>
                        <option value="Ocean Freight">Ocean Freight FCL / Reefer Booking</option>
                        <option value="Air Cargo">Air Express Cargo</option>
                        <option value="Warehousing">Cold Chain & Bonded Warehousing</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-medium text-zinc-300 block mb-1.5">
                        Origin Port / City
                      </label>
                      <input
                        type="text"
                        value={formData.origin}
                        onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                        placeholder="Mundra / Ahmedabad"
                        className="w-full bg-zinc-950 border border-zinc-700/80 focus:border-[#ff5500] text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-zinc-300 block mb-1.5">
                        Destination Port / Country
                      </label>
                      <input
                        type="text"
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        placeholder="Dubai / Jebel Ali"
                        className="w-full bg-zinc-950 border border-zinc-700/80 focus:border-[#ff5500] text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-zinc-300 block mb-1.5">
                      Cargo Description / Container Volume / Inquiries *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify commodity, container size (20ft / 40ft), estimated weight, target shipping date..."
                      className="w-full bg-zinc-950 border border-zinc-700/80 focus:border-[#ff5500] text-white p-4 rounded-xl text-xs sm:text-sm outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#ff5500] hover:bg-[#e04800] text-white font-bold text-xs sm:text-sm py-3.5 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30 transition-all duration-300 active:scale-95 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Official RFQ to 10X INTERNATIONAL</span>
                  </button>
                </form>
              )}
            </motion.div>

          </div>
        </section>

        {/* Embedded Map Visual Card */}
        <section className="pb-16 px-4 sm:px-8 md:px-14 lg:px-20 max-w-[1520px] mx-auto w-full">
          <div className="bg-zinc-900 border border-white/15 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#ff5500] flex items-center justify-center text-white shrink-0 shadow-lg shadow-orange-500/25">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-outfit font-bold text-base sm:text-lg text-white">
                  Strategic Gujarat Logistics Corridor
                </h4>
                <p className="text-zinc-400 text-xs sm:text-sm">
                  Connecting Ahmedabad directly via Western Dedicated Freight Corridor to Mundra Port, Hazira Port, Kandla Port, and Nhava Sheva (JNPT).
                </p>
              </div>
            </div>
            <Link
              href="/compliance"
              className="bg-white hover:bg-zinc-100 text-zinc-950 font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all shrink-0"
            >
              Verify DGFT IEC Code →
            </Link>
          </div>
        </section>
      </div>

      <Footer />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </main>
  );
}
