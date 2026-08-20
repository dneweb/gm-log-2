"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, ArrowUp, ShieldCheck, Check } from "lucide-react";

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

  return (
    <footer id="about" className="relative w-full h-screen min-h-[640px] max-h-[1080px] p-2.5 sm:p-4 md:p-6 lg:p-8 bg-[#07080b] flex flex-col items-center justify-center box-border overflow-hidden">
      <div className="relative w-full h-full max-w-[1520px] rounded-[24px] sm:rounded-[32px] md:rounded-[40px] border border-zinc-800 bg-[#0d0f15]/95 p-4 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-2xl backdrop-blur-xl">
        
        {/* Main Top Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 pb-4 my-auto border-b border-zinc-850">
          
          {/* Brand & About Column */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <div className="relative h-8 sm:h-9 w-[130px] sm:w-[150px]">
                <Image
                  src="/images/logo2.png"
                  alt="Global Logistics Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <span className="font-bebas text-2xl tracking-wide text-white">
                IMPO<span className="text-[#ff5500]">-</span>EXPO
              </span>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Global import & export logistics authority. Managing ocean container freight, air express charters, customs clearance, and intermodal transport worldwide.
            </p>

            <div className="space-y-1.5 text-xs text-zinc-300 pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#ff5500] shrink-0" />
                <span>World Trade Center, Suite 4800, New York, NY 10007</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#ff5500] shrink-0" />
                <span>+1 (800) 555-IMPO • +1 (212) 890-4400</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#ff5500] shrink-0" />
                <span>dispatch@impo-expo-logistics.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2.5">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="#services" className="hover:text-[#ff5500] transition-colors">Ocean Freight (FCL/LCL)</Link></li>
              <li><Link href="#services" className="hover:text-[#ff5500] transition-colors">Air Express Charters</Link></li>
              <li><Link href="#services" className="hover:text-[#ff5500] transition-colors">Customs Brokerage</Link></li>
              <li><Link href="#services" className="hover:text-[#ff5500] transition-colors">Reefer Cold Chain</Link></li>
              <li><Link href="#services" className="hover:text-[#ff5500] transition-colors">Bonded Warehousing</Link></li>
            </ul>
          </div>

          {/* Logistics Ports */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2.5">
              Key Trade Hubs
            </h4>
            <ul className="space-y-2 text-xs">
              <li><span className="text-zinc-300">Shenzhen / Yantian (China)</span></li>
              <li><span className="text-zinc-300">Los Angeles / Long Beach (USA)</span></li>
              <li><span className="text-zinc-300">Rotterdam (Netherlands)</span></li>
              <li><span className="text-zinc-300">Singapore PSA Terminal</span></li>
              <li><span className="text-zinc-300">Jebel Ali (Dubai, UAE)</span></li>
            </ul>
          </div>

          {/* Trade Bulletin Newsletter */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2.5">
              Market Intelligence
            </h4>
            <p className="text-xs text-zinc-400 mb-2 leading-relaxed">
              Get weekly ocean bunker rates and port congestion alerts.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Business email"
                  className="w-full bg-zinc-950 border border-zinc-700 focus:border-[#ff5500] text-white pl-3 pr-9 py-2 rounded-xl text-xs outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 bg-[#ff5500] hover:bg-[#e04800] text-white rounded-lg transition-colors cursor-pointer"
                >
                  <Send className="w-3 h-3" />
                </button>
              </div>

              {subscribed && (
                <div className="text-[10px] text-emerald-400 flex items-center gap-1 animate-in fade-in">
                  <Check className="w-3 h-3" />
                  <span>Subscribed!</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} IMPO-EXPO Logistics Worldwide Inc. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-zinc-300 transition-colors">Bill of Lading Terms</Link>
            <Link href="#" className="hover:text-zinc-300 transition-colors">Incoterms® 2020</Link>
            
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-full bg-zinc-900 hover:bg-[#ff5500] hover:text-white text-zinc-400 transition-colors cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
