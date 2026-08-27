"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, ArrowUp, Check, ShieldCheck, Globe, ExternalLink } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About 10X International", href: "/about" },
    { name: "Export & Freight Services", href: "/services" },
    { name: "Products & Commodities", href: "/products" },
    { name: "Govt. Verification & IEC", href: "/compliance" },
    { name: "Contact & Global RFQ", href: "/contact" },
  ];

  const tradeCorridors = [
    { name: "India ➔ UAE (Agro, Spices & Rice)", sub: "Mundra / Hazira to Jebel Ali" },
    { name: "India ➔ Africa (Machinery & Trucks)", sub: "Durban, Mombasa & West Africa" },
    { name: "China ➔ India (Apparel & Cosmetics)", sub: "Guangzhou & Yiwu to Indian ICDs" },
    { name: "Mundra, Hazira & JNPT Ports", sub: "Direct Container Terminals" },
  ];

  return (
    <footer className="relative w-full bg-[#07080b] text-white pt-8 sm:pt-12 pb-6 sm:pb-8 px-3 sm:px-6 md:px-10 lg:px-14 border-t border-zinc-800/80">
      <div className="relative w-full max-w-[1520px] mx-auto bg-zinc-950/90 border border-white/15 rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl backdrop-blur-xl flex flex-col justify-between">
        
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-8 sm:pb-10 border-b border-white/10">
          
          {/* Column 1: Brand Info & Contacts (Span 4) */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col gap-4">
            {/* Logo Image */}
            <div className="flex items-center gap-3">
              <div className="relative h-10 sm:h-12 w-[140px] sm:w-[160px]">
                <Image
                  src="/images/lo.png"
                  alt="10X INTERNATIONAL Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>

            <p className="text-zinc-300 text-xs sm:text-[13px] leading-relaxed max-w-md font-normal">
              Premier Government-Certified Export-Import Firm. Managing global container shipping across India ➔ UAE (Agro & Spices), India ➔ Africa (Machinery & Hardware), and China ➔ India (Apparel & Cosmetics).
            </p>

            {/* Official Credentials Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 text-[11px] font-mono text-zinc-400 bg-white/[0.05] border border-white/10 rounded-xl p-2.5 max-w-md">
              <ShieldCheck className="w-4 h-4 text-[#ff5500] shrink-0" />
              <span>DGFT IEC: <strong className="text-white">AADFZ3605M</strong></span>
              <span className="text-zinc-600">•</span>
              <span>GSTIN: <strong className="text-[#ff5500]">24AADFZ3605M1Z0</strong></span>
            </div>

            {/* Contact Details List */}
            <div className="flex flex-col gap-2.5 text-xs text-zinc-300 pt-1">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Nr. Haji Bawa Ni Kui, 14/4, M.J.D. Farm, Sarkhej Road, Juhapura, Ahmedabad, Gujarat 380055, India
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 pt-0.5">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#ff5500] shrink-0" />
                  <a href="tel:+917984488660" className="hover:text-white transition-colors">+91 79844 88660</a>
                </div>
                <span className="text-zinc-600">•</span>
                <a
                  href="https://wa.me/917984488660?text=Hello%2010X%20INTERNATIONAL,%20I%20have%20an%20inquiry%20regarding%20import/export%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 px-2 py-0.5 rounded-lg transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>WhatsApp: +91 79844 88660</span>
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#ff5500] shrink-0" />
                <span>contact@10xinternational.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Navigation (Span 2) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-outfit text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2 text-xs sm:text-[13px] text-zinc-300">
              {navLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="hover:text-[#ff5500] hover:translate-x-1 transition-all inline-block py-0.5"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Trade Corridors & Port Gateways (Span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-outfit text-sm font-bold uppercase tracking-wider text-white">
              Active Trade Corridors
            </h4>
            <div className="flex flex-col gap-3 text-xs">
              {tradeCorridors.map((item, idx) => (
                <div key={idx} className="flex flex-col border-b border-white/5 pb-2 last:border-none">
                  <span className="font-medium text-zinc-200">{item.name}</span>
                  <span className="text-[11px] text-zinc-400 font-mono mt-0.5">{item.sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: RFQ Action & Market Intelligence (Span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-outfit text-sm font-bold uppercase tracking-wider text-white">
              Market Intelligence
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-normal">
              Subscribe for weekly ocean freight container rates, reefer schedule alerts, and port advisory.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter business email"
                  className="w-full bg-zinc-900 border border-zinc-700 focus:border-[#ff5500] text-white pl-3.5 pr-10 py-2.5 rounded-xl text-xs outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 p-2 bg-[#ff5500] hover:bg-[#e04800] text-white rounded-lg transition-colors cursor-pointer"
                  title="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              {subscribed && (
                <div className="text-xs text-emerald-400 flex items-center gap-1.5 animate-in fade-in">
                  <Check className="w-3.5 h-3.5" />
                  <span>Subscribed to trade bulletins!</span>
                </div>
              )}
            </form>

            <div className="pt-2">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-[#ff5500] text-white text-xs font-semibold py-2.5 px-4 rounded-xl transition-all duration-200"
              >
                <span>Request Instant Cargo Quote</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-5 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} <strong>10X INTERNATIONAL</strong>. Registered Partnership Firm, Gujarat, India.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs">
            <Link href="/compliance" className="hover:text-white transition-colors">Govt. Verification</Link>
            <Link href="/about" className="hover:text-white transition-colors">About Firm</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact HQ</Link>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-zinc-900 hover:bg-[#ff5500] hover:text-white text-zinc-300 transition-colors cursor-pointer ml-1"
              title="Scroll to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
