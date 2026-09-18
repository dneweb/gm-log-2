"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileCheck2,
  Building2,
  Award,
  CheckCircle2,
  Copy,
  Check,
  Landmark,
  Scale,
  Users2,
  MapPin,
  Truck,
  Phone,
  Mail,
  Wine,
  Weight,
  Flame,
  Clock,
  ExternalLink,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function CompliancePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const credentials = [
    {
      id: "us-3pl-license",
      title: "USA-Based Fully Licensed 3PL Authority",
      authority: "United States Transportation & Interstate Commerce",
      coverage: "48 States Across USA & Canada",
      codeLabel: "REGULATORY SCOPE",
      codeValue: "48-STATE & CANADA 3PL",
      signatory: "GMLS Compliance & Dispatch Division",
      badgeColor: "border-[#dc2626]/50 bg-[#dc2626]/10 text-[#ef4444]",
      details: [
        { label: "Operating Entity", value: "GM LOGISTICS SERVICES (GMLS)" },
        { label: "Headquarters", value: "45 Promise Way, Kendall Park NJ 08824" },
        { label: "Operating Territory", value: "48 Contiguous US States & Cross-Border Canada" },
        { label: "Combined Industry Experience", value: "20 Years Specialized Logistics" },
        { label: "24/7 Operations Desk", value: "Phone: 732-917-7747 | dispatch@gmlsvs.com" },
      ],
    },
    {
      id: "specialized-permits",
      title: "Specialized Permits & Cargo Authorizations",
      authority: "TTB, DOT & State Transportation Departments",
      coverage: "Alcohol, Hazmat & Overweight Permitted",
      codeLabel: "PERMITS & CERTIFICATIONS",
      codeValue: "HAZMAT • ALCOHOL • OVERWEIGHT",
      signatory: "Authorized Carrier Network Management",
      badgeColor: "border-blue-500/50 bg-blue-500/10 text-blue-400",
      details: [
        { label: "Alcohol Permits", value: "Authorized Interstate Beverage & Spirits Hauling" },
        { label: "Hazmat Transport", value: "DOT Certified Classes 2-9 Hazardous Materials" },
        { label: "Overweight Authority", value: "Multi-Axle Chassis & Heavy-Haul State Corridors" },
        { label: "Port Drayage Clearance", value: "Intermodal Maritime & Inland Rail Terminal Access" },
        { label: "Cold Chain Standards", value: "FDA & FSMA Temperature-Controlled Reefers" },
      ],
    },
  ];

  const coreStrengths = [
    {
      icon: Truck,
      title: "Year-round Availability Of Fleets",
      desc: "Nationwide access to reliable dry vans, reefer trailers, flatbeds, and container drayage power units ready in every season across 48 states.",
      highlight: "Unbroken Fleet Capacity",
    },
    {
      icon: Award,
      title: "Guaranteed Load Acceptance & On Time Delivery",
      desc: "Our unwavering commitment means loads booked with GMLS are accepted with zero dropped shipments and executed with punctuality.",
      highlight: "100% Reliable Execution",
    },
    {
      icon: Clock,
      title: "Hassle-free, Last Minute Pickups & Deliveries With Reliability",
      desc: "Rapid-response emergency freight coordination capable of dispatching same-day trucks for critical loads and tight appointment schedules.",
      highlight: "Emergency Dispatch Ready",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-[#f8fafc] text-slate-900 overflow-x-clip flex flex-col justify-between">
      <div>
        {/* Header */}
        <PageHeader
          badge="LICENSING & OPERATIONAL STRENGTHS"
          title="USA Fully Licensed 3PL &"
          highlightedWord="Proven Strengths"
          description="GM LOGISTICS SERVICES operates as a fully licensed 3PL across 48 states in the USA and Canada with 20 years combined experience, providing safe, secure, and reliable freight logistics."
          breadcrumb="Licensing & Strengths"
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Verification Summary Banner */}
        <section className="py-6 px-4 sm:px-8 max-w-[1520px] mx-auto w-full">
          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 backdrop-blur-xl flex flex-col lg:flex-row items-center justify-between gap-6 shadow-md">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#dc2626]/10 border border-[#dc2626]/25 flex items-center justify-center text-[#dc2626] shrink-0 shadow-md">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-outfit text-xl sm:text-2xl font-bold text-slate-900">
                  USA-Based Fully Licensed 3PL Operations
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                  Operating in 48 States &amp; Canada • 20 Years Combined Experience • 24/7 Dispatch Desk: 732-917-7747
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="tel:7329177747"
                className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-5 py-2.5 rounded-full text-xs font-semibold transition-all shadow-lg shadow-red-600/20"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call 732-917-7747</span>
              </a>
              <a
                href="mailto:dispatch@gmlsvs.com"
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 px-5 py-2.5 rounded-full text-xs font-semibold transition-all shadow-sm"
              >
                <Mail className="w-3.5 h-3.5 text-[#dc2626]" />
                <span>dispatch@gmlsvs.com</span>
              </a>
            </div>
          </div>
        </section>

        {/* Licensing & Regulatory Authority Cards */}
        <section className="py-8 sm:py-12 px-4 sm:px-8 md:px-14 lg:px-20 max-w-[1520px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {credentials.map((cert) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white border border-slate-200/90 rounded-[32px] p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-md hover:shadow-xl backdrop-blur-xl relative overflow-hidden"
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200">
                    <div>
                      <span className={`text-[11px] font-mono font-bold px-3 py-1 rounded-full border ${cert.badgeColor}`}>
                        OFFICIAL 3PL CREDENTIAL
                      </span>
                      <h3 className="font-outfit text-xl sm:text-2xl font-bold text-slate-900 mt-3">
                        {cert.title}
                      </h3>
                      <p className="text-slate-600 text-xs mt-1 font-medium">
                        {cert.authority} • {cert.coverage}
                      </p>
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 text-slate-700 shadow-sm">
                      <Landmark className="w-6 h-6" />
                    </div>
                  </div>

                  {/* High-Tech Scope Badge */}
                  <div className="my-6 bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                        {cert.codeLabel}
                      </span>
                      <span className="font-mono text-xl sm:text-2xl font-bold text-[#dc2626] tracking-wider">
                        {cert.codeValue}
                      </span>
                    </div>

                    <button
                      onClick={() => handleCopy(cert.codeValue, cert.id)}
                      className="p-3 bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 rounded-xl transition-all duration-200 cursor-pointer active:scale-95 flex items-center gap-1.5 text-xs font-semibold shadow-sm"
                      title="Copy Reference"
                    >
                      {copiedKey === cert.id ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-600" />
                          <span className="text-emerald-600">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Detailed Field Rows */}
                  <div className="space-y-3 text-xs sm:text-[13px]">
                    {cert.details.map((row, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 py-1.5 border-b border-slate-100">
                        <span className="text-slate-500 font-medium sm:w-1/3 shrink-0">
                          {row.label}:
                        </span>
                        <span className="text-slate-900 font-semibold sm:w-2/3 sm:text-right">
                          {row.value}
                        </span>
                      </div>
                    ))}

                    <div className="flex items-center justify-between py-1.5">
                      <span className="text-slate-500 font-medium">Oversight &amp; Verification:</span>
                      <span className="text-[#dc2626] font-semibold">{cert.signatory}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">
                    Kendall Park NJ 08824
                  </span>
                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#dc2626] hover:underline cursor-pointer"
                  >
                    <span>Request Freight Capacity</span>
                    <Truck className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* OUR STRENGTH: 3 Core Pillars From PDF Page 5 */}
        <section className="py-14 bg-white border-y border-slate-200 px-4 sm:px-8 md:px-14 lg:px-20 max-w-[1520px] mx-auto w-full">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-[#dc2626] uppercase font-mono">
              PAGE 5 • OUR STRENGTH
            </span>
            <h3 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-1">
              3 Core Pillars of Operational Excellence
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              The fundamental advantages that make GM LOGISTICS SERVICES the trusted 3PL partner for shippers nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {coreStrengths.map((st, idx) => {
              const Icon = st.icon;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="bg-slate-50/80 border border-slate-200/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md backdrop-blur-xl relative overflow-hidden group hover:border-[#dc2626]/40 transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle,rgba(220,38,38,0.06)_0%,transparent_70%)] pointer-events-none" />

                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#dc2626]/10 border border-[#dc2626]/20 flex items-center justify-center text-[#dc2626] mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-mono font-bold text-[#dc2626] uppercase tracking-wider block mb-1">
                      {st.highlight}
                    </span>

                    <h4 className="font-outfit text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      {st.title}
                    </h4>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {st.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-mono">
                    <span>GMLS STRENGTH</span>
                    <span className="text-[#dc2626] font-semibold">#0{idx + 1}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Head Office / 24-7 Dispatch Desk Banner */}
        <section className="py-14 px-4 sm:px-8 md:px-14 lg:px-20 max-w-[1520px] mx-auto w-full">
          <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#dc2626] flex items-center justify-center text-white shrink-0 shadow-md">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#dc2626] font-bold uppercase tracking-wider">
                  OPERATIONAL HEADQUARTERS &amp; DISPATCH
                </span>
                <h4 className="font-outfit text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  GM LOGISTICS SERVICES
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl leading-relaxed">
                  45 Promise Way, Kendall Park NJ 08824 • Phone: 732-917-7747 • Fax / Secondary: 732-917-7741 • Email: dispatch@gmlsvs.com
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="tel:7329177747"
                className="bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-red-600/20 inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call 732-917-7747</span>
              </a>
              <Link
                href="/contact"
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full transition-all duration-300 border border-slate-300 shadow-sm"
              >
                Contact 24/7 Desk
              </Link>
            </div>
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
