"use client";

import React, { useState } from "react";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FreightManagement from "@/components/FreightManagement";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import MarqueeTicker from "@/components/MarqueeTicker";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState<any>(null);

  const handleOpenBooking = (data?: any) => {
    setBookingPrefill(data || null);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setBookingPrefill(null);
  };

  return (
    <main className="w-full min-h-screen bg-[#f8fafc] text-slate-900 overflow-x-clip">
      {/* Starting Screen Cinematic Preloader */}
      <Preloader />

      {/* Sticky Full-Width Edge-to-Edge Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* 1. Hero Section */}
      <section className="w-full">
        <Hero onOpenBooking={() => handleOpenBooking()} />
      </section>

      {/* Running Marquee Ticker Ribbon (Directly after Hero) */}
      <MarqueeTicker />

      {/* 2. About Project Section */}
      <section className="w-full">
        <AboutSection onExploreServices={() => {
          const el = document.getElementById("services");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }} />
      </section>

      {/* 3. Our Logistics Services (Staggered 4-Column Design) */}
      <section className="w-full">
        <ServicesSection onOpenBooking={(srv) => handleOpenBooking({ commodity: `${srv} Shipment` })} />
      </section>

      {/* 4. Worldwide Freight Management & Insights */}
      <section className="w-full">
        <FreightManagement />
      </section>

      {/* Global Consistent Footer */}
      <Footer />

      {/* Interactive Multi-Step Freight Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialData={bookingPrefill}
      />
    </main>
  );
}
