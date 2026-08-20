"use client";

import React, { useState } from "react";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FreightManagement from "@/components/FreightManagement";
import WhyChooseUs from "@/components/WhyChooseUs";
import BookingModal from "@/components/BookingModal";

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
    <main className="w-full min-h-screen bg-[#07080b] text-white overflow-x-hidden">
      {/* 1. Exact Replica Hero Section */}
      <section className="w-full">
        <Hero onOpenBooking={() => handleOpenBooking()} />
      </section>

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

      {/* 5. Why Choose Us, Giant Port Crane & Curved Orange Footer */}
      <section className="w-full">
        <WhyChooseUs onDiscoverWork={() => {
          const el = document.getElementById("features");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }} />
      </section>

      {/* Interactive Multi-Step Freight Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialData={bookingPrefill}
      />
    </main>
  );
}
