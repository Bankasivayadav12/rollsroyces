"use client";

import React, { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";
import StoryDrawer, { StoryData } from "@/components/StoryDrawer";
import AccessibilityModal from "@/components/AccessibilityModal";
import { ChevronRight, Play, Pause, Volume2, VolumeX, Maximize2, X, ArrowRight } from "lucide-react";
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
    storyKey: "acare",
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
    storyKey: "acare",
  },
];

const innovationStories: Record<string, StoryData> = {
  netZero: {
    title: "Our Pathway to Net Zero Carbon",
    category: "Sustainability & Net Zero",
    image: "/assets/images/netzero-pod.jpg",
    description:
      "Rolls Royces is placing the transition to net zero at the heart of everything we do. We are pioneering clean power solutions across commercial aerospace, defense, and power systems—enabling 100% Sustainable Aviation Fuel (SAF) operation, developing microgrid battery energy storage, and investing in hydrogen combustion research.",
    highlight: "Targeting net zero operational greenhouse gas emissions by 2030 and net zero product lifecycle emissions by 2050.",
    specs: [
      { label: "Operational Net Zero Target", value: "2030" },
      { label: "Lifecycle Net Zero Target", value: "2050" },
      { label: "SAF Compatibility Across Fleet", value: "100%" },
      { label: "Renewable Power Sourced", value: "100% UK Sites" },
    ],
  },
  smr: {
    title: "Rolls Royces Small Modular Reactors (SMR)",
    category: "Nuclear Clean Energy",
    image: "/assets/images/smr-building.svg",
    description:
      "Our Small Modular Reactor (SMR) design provides affordable, low-carbon nuclear power at scale. Using standardized factory manufacturing, Rolls Royces SMR delivers dependable, clean baseload electricity to decarbonize national grids and heavy industry worldwide.",
    highlight: "Standardized factory modular construction reducing delivery risk, timeline, and capital cost.",
    specs: [
      { label: "Clean Baseload Output", value: "470 MW per Unit" },
      { label: "Homes Powered per SMR", value: "1,000,000 Homes" },
      { label: "Operating Lifetime", value: "60+ Years" },
      { label: "Site Footprint", value: "1/10th of Traditional" },
    ],
  },
  testbed: {
    title: "Testbed 80 – World's Smartest Test Facility",
    category: "Aerospace Testing",
    image: "/assets/images/testbed-80.jpg",
    description:
      "Testbed 80 in Derby, UK, is the world's largest and smartest indoor aerospace test facility. Built with a £90 million investment, it tests civil and defense engines up to 155,000 lbs of thrust, running with 100% Sustainable Aviation Fuel (SAF) and capturing 10,000 engine parameters at 200,000 samples per second.",
    highlight: "World's largest indoor testbed, instrumented for 100% SAF and next-gen UltraFan demonstrator testing.",
    specs: [
      { label: "Internal Floor Area", value: "7,500 m²" },
      { label: "Max Engine Thrust Capacity", value: "155,000 lbf" },
      { label: "Sampling Speed", value: "200,000 data/sec" },
      { label: "SAF Readiness", value: "100% Verified" },
    ],
  },
  acare: {
    title: "ACARE Flightpath 2050 Environmental Goals",
    category: "Aviation Decarbonisation",
    image: "/assets/images/ultrafan-blue.jpg",
    description:
      "Under the Advisory Council for Aviation Research and Innovation in Europe (ACARE) Flightpath 2050 framework, Rolls Royces is delivering revolutionary thermal and propulsive efficiency improvements to achieve a 75% CO2 reduction and 90% NOx reduction per passenger kilometre.",
    highlight: "UltraFan® architecture delivering 25% efficiency jump over first-generation Trent engines.",
    specs: [
      { label: "CO2 Reduction Target", value: "75% Reduction" },
      { label: "NOx Emissions Reduction", value: "90% Reduction" },
      { label: "Perceived Noise Reduction", value: "65% Quieter" },
      { label: "Target Horizon", value: "Flightpath 2050" },
    ],
  },
};

export default function InnovationPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeStory, setActiveStory] = useState<StoryData | null>(null);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isAccModalOpen, setIsAccModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy prevented playback, ready on first interaction
      });
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleOpenStory = (story: StoryData) => {
    setActiveStory(story);
    setIsStoryOpen(true);
  };

  return (
    <main className="min-h-screen bg-white flex flex-col selection:bg-[#001e62] selection:text-white">
      {/* 1. Main Navigation Bar */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen((prev) => !prev)}
        isSearchOpen={isSearchOpen}
      />

      {/* 2. Breadcrumbs Bar */}
      <div className="w-full bg-white border-b border-gray-100 py-3.5 px-4 sm:px-6 md:px-12 text-sm">
        <div className="max-w-[1540px] mx-auto flex items-center gap-2 text-gray-600 font-normal">
          <a href="/" className="hover:text-[#001e62] transition-colors">
            Home
          </a>
          <ChevronRight className="w-3.5 h-3.5 stroke-[2.2] text-gray-400" />
          <span className="text-[#001e62] font-semibold">Innovation</span>
        </div>
      </div>

      {/* 3. Section 1: Designing a better future for our planet */}
      <section className="w-full bg-white pt-14 sm:pt-20 md:pt-24 pb-10 sm:pb-16 px-4 sm:px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-[54px] font-light text-[#0f2942] tracking-tight mb-4 sm:mb-8"
          >
            Designing a better future for our planet
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base md:text-[18px] text-gray-600 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            As the world’s population grows, and urban populations increase, a new approaches to building and powering cities and developing more sustainable transportation is urgently needed.
          </motion.p>
        </div>
      </section>

      {/* 4. Section 2: Key Sustainability Metrics */}
      <section className="w-full bg-[#f8fafc] py-14 sm:py-20 lg:py-28 px-4 sm:px-6 md:px-12 border-b border-gray-200/60">
        <div className="max-w-[1540px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 text-center">
          {metricsData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-start"
            >
              <div className="text-4xl sm:text-5xl lg:text-[68px] font-bold text-[#0066ff] leading-none tracking-tight mb-2 sm:mb-3">
                {item.number}
              </div>

              <div className="text-sm sm:text-[17px] font-semibold text-gray-800 mb-2 sm:mb-4">
                {item.unit}
              </div>

              {item.label && (
                <p className="text-xs sm:text-sm md:text-[15px] text-gray-500 max-w-[220px] leading-relaxed font-normal">
                  {item.label}
                </p>
              )}

              {item.linkText && (
                <button
                  type="button"
                  onClick={() => handleOpenStory(innovationStories[item.storyKey || "acare"])}
                  className="text-xs sm:text-sm md:text-[15px] text-[#001e62] hover:text-[#0066ff] underline underline-offset-4 font-medium transition-colors cursor-pointer"
                >
                  {item.linkText}
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Section 3: Our innovations */}
      <section className="w-full bg-white py-14 sm:py-20 lg:py-28 px-4 sm:px-6 md:px-12 border-b border-gray-100">
        <div className="max-w-[1540px] mx-auto">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16 md:mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#0f2942] tracking-tight mb-4 sm:mb-6"
            >
              Our innovations
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm sm:text-base md:text-[17px] text-gray-600 leading-relaxed font-normal"
            >
              Billions more flights and one billion more people by 2030, costly fuel, and environmental regulations are all important challenges we face. Our love of innovation and engineering is how we intend to overcome them.
            </motion.p>
          </div>

          {/* Pathway to Net Zero Feature */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left: Autoplaying Video Player Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 relative aspect-[16/10] rounded-sm overflow-hidden shadow-xl bg-gray-950 group"
            >
              <video
                ref={videoRef}
                autoPlay
                muted={isMuted}
                loop
                playsInline
                poster="/assets/images/netzero-pod.jpg"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              >
                <source src="/assets/videos/netzero-pod.mp4" type="video/mp4" />
                <source src="/assets/videos/netzero-stream.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

              {/* Autoplay Live Indicator Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#001438]/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-white text-xs font-medium tracking-wide pointer-events-none shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>AUTOPLAYING</span>
              </div>

              {/* Video Controls Bar */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white z-10">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay();
                    }}
                    className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md border border-white/30 flex items-center justify-center transition-colors shadow-lg cursor-pointer"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 fill-white text-white" />
                    ) : (
                      <Play className="w-4 h-4 fill-white text-white ml-0.5" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMuted(!isMuted);
                    }}
                    className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md border border-white/30 flex items-center justify-center transition-colors shadow-lg cursor-pointer"
                    aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-white" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-white" />
                    )}
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(true)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md border border-white/30 text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Full View</span>
                </button>
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
              <h3 className="text-2xl sm:text-3xl lg:text-[44px] font-light text-[#0f2942] tracking-tight leading-tight mb-3 sm:mb-4">
                Our pathway to Net Zero
              </h3>

              <h4 className="text-base sm:text-lg lg:text-[20px] font-normal text-gray-700 mb-4 sm:mb-6">
                Leading the transition to net zero carbon
              </h4>

              <p className="text-gray-600 text-sm sm:text-base md:text-[16.5px] leading-relaxed font-normal mb-6 sm:mb-10">
                At Rolls Royces we believe in the positive, transforming potential of technology. So we are placing the transition to net zero at the heart of everything we do.
              </p>

              <div>
                <button
                  type="button"
                  onClick={() => handleOpenStory(innovationStories.netZero)}
                  className="inline-block text-[#001e62] font-bold text-xs sm:text-[14px] uppercase tracking-[1.5px] hover:text-[#0066ff] border-b-2 border-[#001e62] pb-1 transition-colors cursor-pointer"
                >
                  FIND OUT MORE
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Section: Small Modular Reactors */}
      <section className="w-full bg-white py-12 sm:py-16 md:py-24 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 flex flex-col justify-center max-w-xl"
            >
              <h3 className="text-2xl sm:text-3xl lg:text-[44px] font-light text-[#0f2942] tracking-tight leading-tight mb-3 sm:mb-4">
                Small Modular Reactors
              </h3>

              <h4 className="text-base sm:text-lg lg:text-[20px] font-normal text-gray-700 mb-4 sm:mb-6">
                Pioneering intelligent power
              </h4>

              <p className="text-gray-600 text-sm sm:text-base md:text-[16.5px] leading-relaxed font-normal mb-6 sm:mb-10">
                Our Small Modular Reactor (SMR) design provides affordable, low-carbon nuclear power at scale. Using standardized factory manufacturing, Rolls Royces SMR delivers dependable, clean baseload electricity to decarbonize grids and industry worldwide.
              </p>

              <div>
                <a
                  href="#smr"
                  className="inline-block text-[#001e62] font-bold text-xs sm:text-[14px] uppercase tracking-[1.5px] hover:text-[#0066ff] border-b-2 border-[#001e62] pb-1 transition-colors"
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
                alt="Rolls Royces Small Modular Reactor facility"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Section: World-class testing facilities */}
      <section className="w-full bg-[#f8fafc] py-12 sm:py-16 md:py-24 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
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
                alt="Rolls Royces Testbed 80 indoor aero-engine test facility"
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
              <h3 className="text-2xl sm:text-3xl lg:text-[44px] font-light text-[#0f2942] tracking-tight leading-tight mb-3 sm:mb-4">
                World-class testing facilities
              </h3>

              <h4 className="text-base sm:text-lg lg:text-[20px] font-normal text-gray-700 mb-4 sm:mb-6">
                Our new testbeds are a critical element of our sustainability strategy.
              </h4>

              <p className="text-gray-600 text-sm sm:text-base md:text-[16.5px] leading-relaxed font-normal mb-6 sm:mb-10">
                Testbed 80 in Derby is the world&apos;s largest and smartest indoor aerospace testbed. Designed to test the ultra-efficient UltraFan® demonstrator and run with 100% Sustainable Aviation Fuel (SAF), it establishes new global benchmarks in data collection and environmental testing.
              </p>

              <div>
                <a
                  href="#testing-facilities"
                  className="inline-block text-[#001e62] font-bold text-xs sm:text-[14px] uppercase tracking-[1.5px] hover:text-[#0066ff] border-b-2 border-[#001e62] pb-1 transition-colors"
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

      {/* 7. Official Rolls Royces Footer */}
      <Footer />

      {/* Video Modal Player */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden shadow-2xl border border-white/20"
            >
              <div className="flex items-center justify-between p-4 bg-[#001438] text-white">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-semibold text-sm">
                    Rolls Royces – Pathway to Net Zero Carbon
                  </span>
                </div>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="p-1 rounded-full text-white/70 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="aspect-video w-full bg-black flex items-center justify-center relative">
                <video
                  src="/assets/videos/netzero-pod.mp4"
                  autoPlay
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                />
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
      <div className="fixed bottom-5 sm:bottom-6 right-4 sm:right-6 z-50">
        <button
          onClick={() => setIsAccModalOpen(!isAccModalOpen)}
          className="w-10 h-10 sm:w-11 sm:h-11 bg-[#0000a0] hover:bg-[#0000c8] text-white rounded-md flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,160,0.5)] transition-all hover:scale-105 active:scale-95"
          aria-label="Accessibility settings"
          title="Accessibility Preferences"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
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
