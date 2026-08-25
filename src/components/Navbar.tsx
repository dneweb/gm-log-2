import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Menu, X, PhoneCall } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Compliance & IEC", href: "/compliance" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full pt-1.5 sm:pt-2 md:pt-3 px-3 sm:px-6 md:px-10 lg:px-14 z-50 relative">
      <nav className="w-full max-w-[1520px] mx-auto bg-white/[0.15] text-white border border-white/30 backdrop-blur-3xl rounded-full px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 shadow-[0_15px_35px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.4)] flex items-center justify-between transition-all duration-300">
        
        {/* Left Brand Logo - Clean 10X INTERNATIONAL Logo */}
        <Link href="/" className="flex items-center group py-0.5">
          <div className="relative h-8 sm:h-9 md:h-10 w-[130px] sm:w-[155px] md:w-[175px] transition-transform duration-200 group-hover:scale-105">
            <Image
              src="/images/lo.png"
              alt="10X INTERNATIONAL - Global Logistics Logo"
              fill
              priority
              className="object-contain object-left drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
            />
          </div>
        </Link>

        {/* Center Navigation Links */}
        <ul className="hidden md:flex items-center gap-5 lg:gap-8 text-[13px] lg:text-[14px] font-medium text-zinc-300">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <li key={link.name} className="relative py-0.5">
                <Link
                  href={link.href}
                  className={`transition-colors duration-200 hover:text-white ${
                    isActive ? "text-[#ff5500] font-bold" : "text-zinc-300"
                  }`}
                >
                  {link.name}
                </Link>
                {isActive && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[#ff5500] rounded-full shadow-[0_0_8px_rgba(255,85,0,0.8)] animate-in fade-in duration-300" />
                )}
              </li>
            );
          })}
        </ul>

        {/* Right Action Button: Book Now */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenBooking}
            className="group flex items-center gap-2 text-white hover:text-[#ff5500] text-xs sm:text-[13px] font-semibold pl-1 pr-2.5 py-0.5 rounded-full transition-all duration-200 cursor-pointer active:scale-95"
          >
            <span className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full bg-[#ff5500] text-white flex items-center justify-center transition-transform group-hover:scale-105 shadow-md shadow-orange-500/25">
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </span>
            <span className="tracking-normal font-semibold text-zinc-100 group-hover:text-[#ff5500] text-[13px] lg:text-[14px]">
              Book Now
            </span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full text-zinc-200 hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu - Fixed Above Everything so it never gets clipped */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="md:hidden fixed inset-0 bg-black/70 backdrop-blur-md z-[9998]"
          />

          <div className="md:hidden fixed top-20 left-3 right-3 max-h-[calc(100vh-100px)] overflow-y-auto bg-zinc-950/95 border border-white/20 backdrop-blur-2xl rounded-3xl p-5 shadow-2xl z-[9999] animate-in fade-in slide-in-from-top-4 duration-200">
            {/* Top Drawer Header with Cancel / Close Button */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <span className="text-xs font-mono font-bold text-zinc-400 tracking-wider">
                MENU
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-1.5 bg-white/10 hover:bg-[#ff5500] text-zinc-200 hover:text-white px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 active:scale-95 cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-3.5 h-3.5" />
                <span>Close</span>
              </button>
            </div>

            <ul className="flex flex-col gap-2 text-sm font-medium">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between py-2.5 px-3.5 rounded-xl transition-colors ${
                        isActive
                          ? "bg-[#ff5500] text-white font-bold shadow-md shadow-orange-500/30"
                          : "text-zinc-200 hover:bg-zinc-850 hover:text-white"
                      }`}
                    >
                      <span className="text-[14px]">{link.name}</span>
                      <ChevronRight className="w-4 h-4 opacity-80" />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 bg-[#ff5500] hover:bg-[#e04800] text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30 active:scale-95 transition-transform"
              >
                <span>Instant Cargo Booking</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-400 font-mono">
                <PhoneCall className="w-3.5 h-3.5 text-[#ff5500]" />
                <span>Ahmedabad HQ: Sarkhej, Gujarat</span>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
