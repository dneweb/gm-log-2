"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileCheck2,
  Building2,
  ExternalLink,
  Award,
  CheckCircle2,
  Copy,
  Check,
  QrCode,
  Landmark,
  Scale,
  Users2,
  MapPin,
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

  const certificates = [
    {
      id: "iec",
      title: "Importer-Exporter Code (IEC) Certificate",
      authority: "Directorate General of Foreign Trade (DGFT)",
      ministry: "Ministry of Commerce and Industry, Government of India",
      office: "Office of the Additional DGFT, Ahmedabad",
      codeLabel: "IEC NUMBER",
      codeValue: "AADFZ3605M",
      issueDate: "25/05/2023",
      fileNumber: "AHDIECPAPPLY00005415AM24",
      signatory: "Saiyed Nawazuddin",
      verifyUrl: "https://dgft.gov.in",
      badgeColor: "border-[#ff5500]/50 bg-[#ff5500]/10 text-[#ff5500]",
      details: [
        { label: "Legal Entity", value: "10X INTERNATIONAL" },
        { label: "Nature of Concern", value: "Partnership Firm" },
        { label: "Permanent Account Number (PAN)", value: "AADFZ3605M" },
        { label: "Jurisdictional DGFT Office", value: "3rd Floor, HUDCO Bhavan, Ishvar Bhuvan Road, Navrangpura, Ahmedabad 380009" },
        { label: "Authorized Signatory", value: "Nawazuddin Saiyed" },
      ],
    },
    {
      id: "gst",
      title: "Goods & Services Tax Registration Certificate",
      authority: "Government of India / Government of Gujarat",
      ministry: "Department of Revenue, Ministry of Finance (Form GST REG-06)",
      office: "Ghatak 2 (Ahmedabad), Gujarat",
      codeLabel: "GSTIN NUMBER",
      codeValue: "24AADFZ3605M1Z0",
      issueDate: "24/04/2023",
      fileNumber: "System Generated Form GST REG-06",
      signatory: "Bharat Kumar (Superintendent)",
      verifyUrl: "https://services.gst.gov.in/services/searchtp",
      badgeColor: "border-emerald-500/50 bg-emerald-500/10 text-emerald-400",
      details: [
        { label: "Legal Name & Trade Name", value: "10X INTERNATIONAL" },
        { label: "Constitution of Business", value: "Partnership" },
        { label: "Principal Place of Business", value: "Nr. Haji Bawa Ni Kui, 14/4, M.J.D. Farm, Sarkhej Road, Juhapura, Ahmedabad 380055" },
        { label: "Managing / Authorized Partner 1", value: "Mohamedirfan Safimohamed (Partner)" },
        { label: "Managing / Authorized Partner 2", value: "Nawazuddin Saiyed (Partner)" },
      ],
    },
  ];

  return (
    <main className="w-full min-h-screen bg-[#07080b] text-white overflow-x-hidden flex flex-col justify-between">
      <div>
        {/* Header */}
        <PageHeader
          badge="REGULATORY COMPLIANCE & TRUST"
          title="Government Registrations &"
          highlightedWord="Official Certifications"
          description="10X INTERNATIONAL operates with full statutory compliance under the Directorate General of Foreign Trade (DGFT) and the Goods & Services Tax (GST) framework of the Government of India."
          breadcrumb="Compliance & IEC"
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Verification Summary Banner */}
        <section className="py-6 px-4 sm:px-8 max-w-[1520px] mx-auto w-full">
          <div className="bg-zinc-900/90 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#ff5500]/20 border border-[#ff5500]/40 flex items-center justify-center text-[#ff5500] shrink-0 shadow-lg shadow-orange-500/20">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-outfit text-xl sm:text-2xl font-bold text-white">
                  100% Verifiable Exporter Credentials
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm mt-0.5">
                  International buyers and logistics partners can verify our registrations directly on official Indian government portals.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://dgft.gov.in"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white/[0.08] hover:bg-white/[0.15] text-white border border-white/20 px-5 py-2.5 rounded-full text-xs font-semibold transition-all"
              >
                <span>Verify on DGFT Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://services.gst.gov.in/services/searchtp"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#ff5500] hover:bg-[#e04800] text-white px-5 py-2.5 rounded-full text-xs font-semibold transition-all shadow-lg shadow-orange-500/25"
              >
                <span>Verify GSTIN</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* Certificate Cards */}
        <section className="py-8 sm:py-12 px-4 sm:px-8 md:px-14 lg:px-20 max-w-[1520px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {certificates.map((cert) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-zinc-900/90 border border-white/15 rounded-[32px] p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-2xl backdrop-blur-xl relative overflow-hidden"
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
                    <div>
                      <span className={`text-[11px] font-mono font-bold px-3 py-1 rounded-full border ${cert.badgeColor}`}>
                        OFFICIAL CERTIFICATE
                      </span>
                      <h3 className="font-outfit text-xl sm:text-2xl font-bold text-white mt-3">
                        {cert.title}
                      </h3>
                      <p className="text-zinc-400 text-xs mt-1 font-medium">
                        {cert.authority} • {cert.ministry}
                      </p>
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-zinc-800 border border-white/10 flex items-center justify-center shrink-0 text-zinc-300">
                      <Landmark className="w-6 h-6" />
                    </div>
                  </div>

                  {/* High-Tech Code Badge with Copy Button */}
                  <div className="my-6 bg-zinc-950 border border-white/15 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                        {cert.codeLabel}
                      </span>
                      <span className="font-mono text-xl sm:text-2xl lg:text-3xl font-bold text-[#ff5500] tracking-wider">
                        {cert.codeValue}
                      </span>
                    </div>

                    <button
                      onClick={() => handleCopy(cert.codeValue, cert.id)}
                      className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all duration-200 cursor-pointer active:scale-95 flex items-center gap-1.5 text-xs font-semibold"
                      title="Copy Code"
                    >
                      {copiedKey === cert.id ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
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
                      <div key={i} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 py-1.5 border-b border-white/5">
                        <span className="text-zinc-400 font-medium sm:w-1/3 shrink-0">
                          {row.label}:
                        </span>
                        <span className="text-zinc-100 font-semibold sm:w-2/3 sm:text-right">
                          {row.value}
                        </span>
                      </div>
                    ))}

                    <div className="flex items-center justify-between py-1.5">
                      <span className="text-zinc-400 font-medium">Issue Date:</span>
                      <span className="text-zinc-200 font-mono font-bold">{cert.issueDate}</span>
                    </div>

                    <div className="flex items-center justify-between py-1.5">
                      <span className="text-zinc-400 font-medium">Signatory / Authority:</span>
                      <span className="text-[#ff5500] font-semibold">{cert.signatory}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-500">
                    File: {cert.fileNumber}
                  </span>
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ff5500] hover:underline"
                  >
                    <span>Verify Online</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Managing Partners & Authorization Notice */}
        <section className="py-12 bg-zinc-950/60 border-y border-white/10 px-4 sm:px-8 md:px-14 lg:px-20 max-w-[1520px] mx-auto w-full">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <span className="text-xs font-bold tracking-widest text-[#ff5500] uppercase font-mono">
              AUTHORIZED SIGNATORIES
            </span>
            <h3 className="font-outfit text-2xl sm:text-3xl font-bold text-white mt-1">
              Registered Managing Partners in Gujarat
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2">
              As certified on Annexure B of the Government of India Form GST REG-06 and Directorate General of Foreign Trade documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-zinc-900 border border-white/15 rounded-2xl p-6 flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#ff5500]/15 flex items-center justify-center text-[#ff5500] font-bold font-mono">
                  01
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-base text-white">
                    MOHAMEDIRFAN SAFIMOHAMED
                  </h4>
                  <p className="text-xs text-zinc-400">Designation / Status: <strong className="text-zinc-200">Partner</strong></p>
                </div>
              </div>
              <p className="text-xs text-zinc-500 mt-2">Resident of State: Gujarat, India</p>
            </div>

            <div className="bg-zinc-900 border border-white/15 rounded-2xl p-6 flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#ff5500]/15 flex items-center justify-center text-[#ff5500] font-bold font-mono">
                  02
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-base text-white">
                    NAWAZUDDIN SAIYED
                  </h4>
                  <p className="text-xs text-zinc-400">Designation / Status: <strong className="text-zinc-200">Partner & Authorized Signatory</strong></p>
                </div>
              </div>
              <p className="text-xs text-zinc-500 mt-2">Resident of State: Gujarat, India</p>
            </div>
          </div>
        </section>

        {/* Registered Head Office */}
        <section className="py-14 px-4 sm:px-8 md:px-14 lg:px-20 max-w-[1520px] mx-auto w-full">
          <div className="bg-zinc-900 border border-white/15 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#ff5500] flex items-center justify-center text-white shrink-0 shadow-lg shadow-orange-500/25">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#ff5500] font-bold uppercase tracking-wider">
                  PRINCIPAL PLACE OF BUSINESS
                </span>
                <h4 className="font-outfit text-xl sm:text-2xl font-bold text-white mt-1">
                  10X INTERNATIONAL Headquarters
                </h4>
                <p className="text-zinc-300 text-xs sm:text-sm mt-1 max-w-xl leading-relaxed">
                  Nr. Haji Bawa Ni Kui, 0, 14/4, M.J.D. Farm, Sarkhej Road, Juhapura, Ahmedabad, Gujarat 380055, India.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="bg-[#ff5500] hover:bg-[#e04800] text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-orange-500/25 shrink-0"
            >
              Contact Compliance Office
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
