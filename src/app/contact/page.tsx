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
  Printer,
  ShieldCheck,
  Truck,
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
    serviceType: "Container Drayage",
    origin: "",
    destination: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="w-full min-h-screen bg-[#f8fafc] text-slate-900 overflow-x-clip flex flex-col justify-between">
      <div>
        {/* Page Header */}
        <PageHeader
          badge="24/7 CALL US TODAY: 732-917-7747"
          title="Direct 3PL Inquiries &"
          highlightedWord="Freight Dispatch"
          description="Connect directly with GM LOGISTICS SERVICES dispatchers in Kendall Park, NJ for instant rate quotes, container drayage capacity, and nationwide freight booking across 48 states and Canada."
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
                <span className="text-xs font-bold tracking-widest text-[#dc2626] uppercase font-mono">
                  OPERATIONAL HEADQUARTERS
                </span>
                <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-slate-950 mt-1 mb-3">
                  GM LOGISTICS SERVICES
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  USA-Based Fully Licensed 3PL • 48 States & Canada • 20 Years Combined Experience.
                </p>
              </div>

              {/* Office Details Card */}
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 flex flex-col gap-5 shadow-sm backdrop-blur-xl">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#dc2626]/10 border border-[#dc2626]/20 flex items-center justify-center text-[#dc2626] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-outfit font-bold text-sm text-slate-950">Office Address</h4>
                    <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mt-0.5">
                      45 Promise Way, Kendall Park NJ 08824, USA
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 border-t border-slate-100 pt-4">
                  <div className="w-10 h-10 rounded-xl bg-[#dc2626]/10 border border-[#dc2626]/20 flex items-center justify-center text-[#dc2626] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-outfit font-bold text-sm text-slate-950">24/7 Primary Dispatch Line</h4>
                    <a
                      href="tel:7329177747"
                      className="text-slate-900 hover:text-[#dc2626] text-xs sm:text-[13px] font-mono font-bold mt-0.5 block transition-colors"
                    >
                      732-917-7747 (Call Us Today)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 border-t border-slate-100 pt-4">
                  <div className="w-10 h-10 rounded-xl bg-[#dc2626]/10 border border-[#dc2626]/20 flex items-center justify-center text-[#dc2626] shrink-0 mt-0.5">
                    <Printer className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-outfit font-bold text-sm text-slate-950">Secondary / Fax Line</h4>
                    <p className="text-slate-600 text-xs sm:text-[13px] font-mono mt-0.5">732-917-7741</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 border-t border-slate-100 pt-4">
                  <div className="w-10 h-10 rounded-xl bg-[#dc2626]/10 border border-[#dc2626]/20 flex items-center justify-center text-[#dc2626] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-outfit font-bold text-sm text-slate-950">Direct Dispatch Email</h4>
                    <a
                      href="mailto:dispatch@gmlsvs.com"
                      className="text-[#dc2626] hover:underline text-xs sm:text-[13px] mt-0.5 block font-medium"
                    >
                      dispatch@gmlsvs.com
                    </a>
                    <p className="text-slate-500 text-xs">www.gmlsvs.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 border-t border-slate-100 pt-4">
                  <div className="w-10 h-10 rounded-xl bg-[#dc2626]/10 border border-[#dc2626]/20 flex items-center justify-center text-[#dc2626] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-outfit font-bold text-sm text-slate-950">Dispatch Desk Hours</h4>
                    <p className="text-slate-600 text-xs sm:text-[13px] mt-0.5">24/7 Call Us Today • Year-Round Availability</p>
                    <p className="text-slate-500 text-xs">Guaranteed Load Acceptance & On-Time Delivery</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Interactive 3PL Freight RFQ Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-7 bg-white border border-slate-200/90 rounded-[32px] p-6 sm:p-8 md:p-10 shadow-sm backdrop-blur-xl"
            >
              {submitted ? (
                <div className="py-10 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-outfit text-2xl sm:text-3xl font-bold text-slate-950 mb-2">
                    Inquiry Transmitted to Dispatch!
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm max-w-md mb-5 leading-relaxed">
                    Your freight inquiry has been routed directly to the GM LOGISTICS SERVICES dispatch desk (<strong className="text-emerald-700 font-mono">732-917-7747</strong>).
                  </p>

                  {/* Summary Card */}
                  <div className="w-full max-w-md bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left text-xs text-slate-700 space-y-2 mb-6">
                    <div className="flex justify-between border-b border-slate-200/80 pb-2">
                      <span className="text-slate-500">Shipper / Contact:</span>
                      <span className="text-slate-950 font-semibold">{formData.name} ({formData.company})</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200/80 pb-2">
                      <span className="text-slate-500">Selected Service:</span>
                      <span className="text-[#dc2626] font-semibold">{formData.serviceType}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200/80 pb-2">
                      <span className="text-slate-500">Lane:</span>
                      <span className="text-slate-900">{formData.origin || "Origin"} ➔ {formData.destination || "Destination"}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href="tel:7329177747"
                      className="bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full flex items-center gap-2 shadow-md shadow-red-600/20 transition-all active:scale-95"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Dispatch Desk: 732-917-7747</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          company: "",
                          email: "",
                          phone: "",
                          serviceType: "Container Drayage",
                          origin: "",
                          destination: "",
                          message: "",
                        });
                      }}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-colors cursor-pointer"
                    >
                      Submit Another Load
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <h3 className="font-outfit text-2xl font-bold text-slate-950">
                      Request a 3PL Freight Quote
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-[13px] mt-1">
                      Fast, discounted pricing and guaranteed load acceptance across 48 states and Canada.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-slate-700 block mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-slate-50 border border-slate-300 focus:border-[#dc2626] focus:bg-white text-slate-900 placeholder:text-slate-400 px-4 py-2.5 rounded-xl text-xs sm:text-sm outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-slate-700 block mb-1.5">
                        Company / Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Logistics Corp"
                        className="w-full bg-slate-50 border border-slate-300 focus:border-[#dc2626] focus:bg-white text-slate-900 placeholder:text-slate-400 px-4 py-2.5 rounded-xl text-xs sm:text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-slate-700 block mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="shipper@domain.com"
                        className="w-full bg-slate-50 border border-slate-300 focus:border-[#dc2626] focus:bg-white text-slate-900 placeholder:text-slate-400 px-4 py-2.5 rounded-xl text-xs sm:text-sm outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-slate-700 block mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="732-555-0199"
                        className="w-full bg-slate-50 border border-slate-300 focus:border-[#dc2626] focus:bg-white text-slate-900 placeholder:text-slate-400 px-4 py-2.5 rounded-xl text-xs sm:text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-medium text-slate-700 block mb-1.5">
                        Required Service *
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 focus:border-[#dc2626] focus:bg-white text-slate-900 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm outline-none transition-all"
                      >
                        <option value="Container Drayage">Container Drayage</option>
                        <option value="Full Truckload (FTL)">Full Truckload (FTL)</option>
                        <option value="LTL (Less Than Truckload)">LTL (Less Than Truckload)</option>
                        <option value="Reefer Containers / Trailers">Reefer Containers / Trailers</option>
                        <option value="Overweight Loads">Overweight Loads</option>
                        <option value="Alcohol Permits">Alcohol Permits</option>
                        <option value="Transloading">Transloading</option>
                        <option value="Palletize And Shrink Wrap">Palletize And Shrink Wrap</option>
                        <option value="Airport Pick ups">Airport Pick ups</option>
                        <option value="Container Storage">Container Storage</option>
                        <option value="Export Stuffing">Export Stuffing</option>
                        <option value="Hazmat Cargo">Hazmat Cargo</option>
                        <option value="Flatbed Hauling">Flatbed Hauling</option>
                        <option value="Warehousing">Warehousing</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-medium text-slate-700 block mb-1.5">
                        Origin (City, State / Zip)
                      </label>
                      <input
                        type="text"
                        value={formData.origin}
                        onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                        placeholder="e.g. Newark, NJ"
                        className="w-full bg-slate-50 border border-slate-300 focus:border-[#dc2626] focus:bg-white text-slate-900 placeholder:text-slate-400 px-4 py-2.5 rounded-xl text-xs sm:text-sm outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-slate-700 block mb-1.5">
                        Destination (City, State / Zip)
                      </label>
                      <input
                        type="text"
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        placeholder="e.g. Chicago, IL"
                        className="w-full bg-slate-50 border border-slate-300 focus:border-[#dc2626] focus:bg-white text-slate-900 placeholder:text-slate-400 px-4 py-2.5 rounded-xl text-xs sm:text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-700 block mb-1.5">
                      Load Details / Weight / Equipment Needs *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please include commodity, weight, container type (20ft, 40ft, 53ft dry van/reefer), pickup timeline..."
                      className="w-full bg-slate-50 border border-slate-300 focus:border-[#dc2626] focus:bg-white text-slate-900 placeholder:text-slate-400 p-4 rounded-xl text-xs sm:text-sm outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-xs sm:text-sm py-3.5 rounded-2xl flex items-center justify-center gap-2 shadow-md shadow-red-600/20 transition-all duration-300 active:scale-95 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit 3PL Freight Inquiry</span>
                  </button>
                </form>
              )}
            </motion.div>

          </div>
        </section>

        {/* 48 States & Canada Coverage Banner */}
        <section className="pb-16 px-4 sm:px-8 md:px-14 lg:px-20 max-w-[1520px] mx-auto w-full">
          <div className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-sm p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#dc2626] flex items-center justify-center text-white shrink-0 shadow-md shadow-red-600/20">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-outfit font-bold text-base sm:text-lg text-slate-950">
                  Nationwide 48 States & Cross-Border Canada Logistics
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Connecting ports, railheads, and industrial corridors from our Kendall Park, NJ headquarters. 20 years combined experience finding the right carrier for the right load at the right time.
                </p>
              </div>
            </div>
            <a
              href="tel:7329177747"
              className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all shrink-0 inline-flex items-center gap-2 shadow-md shadow-red-600/20"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Call 732-917-7747</span>
            </a>
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
