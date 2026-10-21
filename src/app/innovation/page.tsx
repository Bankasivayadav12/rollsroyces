"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";
import StoryDrawer, { StoryData } from "@/components/StoryDrawer";
import AccessibilityModal from "@/components/AccessibilityModal";
import { ChevronRight, Play, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const metricsData = [
  {
    number: "6",
    unit: "billion",
    label: "People expected to fly annually by 2030",
  },
  {
    number: "75%",
    unit: "CO₂ reduction",
    linkText: "ACARE Flightpath 2050 goals",
    linkHref: "#flightpath-goals",
  },
  {
    number: "1",
    unit: "billion",
    label: "Increase in the global population by 2030",
  },
  {
    number: "90%",
    unit: "NOx reduction",
    linkText: "ACARE Flightpath 2050 goals",
    linkHref: "#flightpath-goals",
  },
];

export default function InnovationPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeStory, setActiveStory] = useState<StoryData | null>(null);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isAccModalOpen, setIsAccModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white flex flex-col selection:bg-[#001e62] selection:text-white">
      {/* 1. Main Navigation Bar */}
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* 2. Breadcrumbs Bar */}
      <div className="w-full bg-white border-b border-gray-100 py-3.5 px-6 md:px-12 text-sm">
        <div className="max-w-[1540px] mx-auto flex items-center gap-2 text-gray-600 font-normal">
          <a href="/" className="hover:text-[#001e62] transition-colors">
            Home
          </a>
          <ChevronRight className="w-3.5 h-3.5 stroke-[2.2] text-gray-400" />
          <span className="text-[#001e62] font-semibold">Innovation</span>
        </div>
      </div>

      {/* 3. Section 1: Designing a better future for our planet (Screenshot 1) */}
      <section className="w-full bg-white pt-24 pb-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-[54px] font-light text-[#0f2942] tracking-tight mb-8"
          >
            Designing a better future for our planet
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-[18px] text-gray-600 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            As the world’s population grows, and urban populations increase, a new approaches to building and powering cities and developing more sustainable transportation is urgently needed.
          </motion.p>
        </div>
      </section>

      {/* Panoramic Vertiport Terminal Banner (Screenshot 1) */}
      <section className="w-full bg-gray-900 overflow-hidden relative">
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[360px] sm:h-[460px] lg:h-[540px]"
        >
          <img
            src="/assets/images/vertiport-terminal.jpg"
            alt="Futuristic sustainable airport terminal and vertiport infrastructure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        </motion.div>
      </section>

      {/* 4. Section 2: Key Sustainability Metrics (Screenshot 2) */}
      <section className="w-full bg-[#f8fafc] py-24 sm:py-32 px-6 md:px-12 border-b border-gray-200/60">
        <div className="max-w-[1540px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 text-center">
          {metricsData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-start"
            >
              <div className="text-5xl sm:text-6xl lg:text-[68px] font-bold text-[#0066ff] leading-none tracking-tight mb-3">
                {item.number}
              </div>

              <div className="text-base sm:text-[17px] font-semibold text-gray-800 mb-4">
                {item.unit}
              </div>

              {item.label && (
                <p className="text-sm sm:text-[15px] text-gray-500 max-w-[220px] leading-relaxed font-normal">
                  {item.label}
                </p>
              )}

              {item.linkText && (
                <a
                  href={item.linkHref}
                  className="text-sm sm:text-[15px] text-[#001e62] hover:text-[#0066ff] underline underline-offset-4 font-medium transition-colors"
                >
                  {item.linkText}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Section 3: Our innovations (Screenshot 3) */}
      <section className="w-full bg-white py-28 px-6 md:px-12 border-b border-gray-100">
        <div className="max-w-[1540px] mx-auto">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-light text-[#0f2942] tracking-tight mb-6"
            >
              Our innovations
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-[17px] text-gray-600 leading-relaxed font-normal"
            >
              Billions more flights and one billion more people by 2030, costly fuel, and environmental regulations are all important challenges we face. Our love of innovation and engineering is how we intend to overcome them.
            </motion.p>
          </div>

          {/* Pathway to Net Zero Feature (Screenshot 3) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Video Player Card with Transit Pod */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              onClick={() => setIsVideoModalOpen(true)}
              className="lg:col-span-6 relative aspect-[16/10] rounded-sm overflow-hidden shadow-lg bg-gray-900 group cursor-pointer"
            >
              <img
                src="/assets/images/netzero-pod.jpg"
                alt="Electric transit pod and zero-carbon innovation"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors" />

              {/* Play Button Overlay (Exact Match to Screenshot 3) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-6 h-6 fill-[#0066ff] text-[#0066ff] ml-1" />
                </div>
                <span className="text-sm font-semibold tracking-wider text-white mt-3 drop-shadow-md">
                  Play
                </span>
              </div>
            </motion.div>

            {/* Right: Net Zero Statement */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-6 flex flex-col justify-center max-w-xl"
            >
              <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-light text-[#0f2942] tracking-tight leading-tight mb-4">
                Our pathway to Net Zero
              </h3>

              <h4 className="text-lg sm:text-[20px] font-normal text-gray-700 mb-6">
                Leading the transition to net zero carbon
              </h4>

              <p className="text-gray-600 text-base sm:text-[16.5px] leading-relaxed font-normal mb-10">
                At Rolls-Royce we believe in the positive, transforming potential of technology. So we are placing the transition to net zero at the heart of everything we do.
              </p>

              <div>
                <a
                  href="#pathway-net-zero"
                  className="inline-block text-[#001e62] font-bold text-[14px] uppercase tracking-[1.5px] hover:text-[#0066ff] border-b-2 border-[#001e62] pb-1 transition-colors"
                >
                  FIND OUT MORE
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Section: Small Modular Reactors (Left: Text, Right: SMR Dome Image) */}
      <section className="w-full bg-white py-16 sm:py-24 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 flex flex-col justify-center max-w-xl"
            >
              <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-light text-[#0f2942] tracking-tight leading-tight mb-4">
                Small Modular Reactors
              </h3>

              <h4 className="text-lg sm:text-[20px] font-normal text-gray-700 mb-6">
                Pioneering intelligent power
              </h4>

              <p className="text-gray-600 text-base sm:text-[16.5px] leading-relaxed font-normal mb-10">
                Our Small Modular Reactor (SMR) design provides affordable, low-carbon nuclear power at scale. Using standardized factory manufacturing, Rolls-Royce SMR delivers dependable, clean baseload electricity to decarbonize grids and industry worldwide.
              </p>

              <div>
                <a
                  href="#smr"
                  className="inline-block text-[#001e62] font-bold text-[14px] uppercase tracking-[1.5px] hover:text-[#0066ff] border-b-2 border-[#001e62] pb-1 transition-colors"
                >
                  FIND OUT MORE
                </a>
              </div>
            </motion.div>

            {/* Right: SMR Dome Architecture Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-6 relative aspect-[16/10] rounded-sm overflow-hidden shadow-lg bg-[#0a1a36] group"
            >
              <img
                src="/assets/images/smr-building.svg"
                alt="Rolls-Royce Small Modular Reactor facility"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Section: World-class testing facilities (Left: Testbed 80 Photo, Right: Text Content) */}
      <section className="w-full bg-[#f8fafc] py-16 sm:py-24 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Testbed 80 Facility Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 relative aspect-[16/10] rounded-sm overflow-hidden shadow-lg bg-gray-900 group"
            >
              <img
                src="/assets/images/testbed-80.jpg"
                alt="Rolls-Royce Testbed 80 indoor aero-engine test facility"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>

            {/* Right: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-6 flex flex-col justify-center max-w-xl"
            >
              <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-light text-[#0f2942] tracking-tight leading-tight mb-4">
                World-class testing facilities
              </h3>

              <h4 className="text-lg sm:text-[20px] font-normal text-gray-700 mb-6">
                Our new testbeds are a critical element of our sustainability strategy.
              </h4>

              <p className="text-gray-600 text-base sm:text-[16.5px] leading-relaxed font-normal mb-10">
                Testbed 80 in Derby is the world&apos;s largest and smartest indoor aerospace testbed. Designed to test the ultra-efficient UltraFan® demonstrator and run with 100% Sustainable Aviation Fuel (SAF), it establishes new global benchmarks in data collection and environmental testing.
              </p>

              <div>
                <a
                  href="#testing-facilities"
                  className="inline-block text-[#001e62] font-bold text-[14px] uppercase tracking-[1.5px] hover:text-[#0066ff] border-b-2 border-[#001e62] pb-1 transition-colors"
                >
                  FIND OUT MORE
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. Clean White Buffer Section */}
      <section className="w-full bg-white py-14 sm:py-20" />

      {/* 7. Official Rolls-Royce Footer */}
      <Footer />

      {/* Video Modal Player */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden shadow-2xl border border-white/20"
            >
              <div className="flex items-center justify-between p-4 bg-[#001438] text-white">
                <span className="font-semibold text-sm">
                  Rolls-Royce – Pathway to Net Zero Carbon
                </span>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="p-1 rounded-full text-white/70 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="aspect-video w-full bg-black flex items-center justify-center relative">
                <img
                  src="/assets/images/netzero-pod.jpg"
                  alt="Video display"
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <div className="w-16 h-16 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center mb-3">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                  <span className="text-sm font-semibold tracking-wider uppercase">
                    Sustainable Propulsion &amp; Energy Transition
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Story Drawer */}
      <StoryDrawer
        isOpen={isStoryOpen}
        onClose={() => setIsStoryOpen(false)}
        story={activeStory}
      />

      {/* Floating Accessibility Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsAccModalOpen(!isAccModalOpen)}
          className="w-11 h-11 bg-[#0000a0] hover:bg-[#0000c8] text-white rounded-md flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,160,0.5)] transition-all hover:scale-105"
          aria-label="Accessibility settings"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <circle cx="12" cy="4" r="2" />
            <path d="M15.89 8.11C15.5 7.72 14.83 7 13.53 7h-3.06c-1.3 0-1.97.72-2.36 1.11L4 12.25l1.41 1.41 3.59-3.59V22h2v-6h2v6h2V10.07l3.59 3.59 1.41-1.41-4.11-4.14z" />
          </svg>
        </button>
        <AccessibilityModal
          isOpen={isAccModalOpen}
          onClose={() => setIsAccModalOpen(false)}
        />
      </div>
    </main>
  );
}
