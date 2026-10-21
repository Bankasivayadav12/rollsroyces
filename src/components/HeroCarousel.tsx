"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Pause, Play } from "lucide-react";
import AccessibilityModal from "./AccessibilityModal";
import { StoryData } from "./StoryDrawer";

export const slidesData: (StoryData & {
  id: number;
  slideTitle: string;
  tabTitle: string;
  align: "left" | "right";
  buttonText: string;
  subtitle?: string;
})[] = [
  {
    id: 0,
    category: "Civil Aerospace",
    title: "Introducing the Trent 1000 XE",
    slideTitle: "Introducing the\nTrent 1000 XE",
    tabTitle: "Introducing the\nTrent 1000 XE",
    buttonText: "FIND OUT MORE",
    align: "right",
    image: "/assets/images/trent-xe.jpg",
    description:
      "The Trent 1000 XE represents our next technological leap for the Boeing 787 Dreamliner family. Combining high-pressure turbine advancements with advanced aerodynamics, it delivers unmatched fuel efficiency, durability, and on-wing time.",
    highlight: "Delivering up to 78,000 lbf of thrust with 100% Sustainable Aviation Fuel (SAF) readiness.",
    specs: [
      { label: "Max Take-off Thrust", value: "78,000 lbf" },
      { label: "Bypass Ratio", value: "10:1" },
      { label: "Fan Diameter", value: "112 in (2.8m)" },
      { label: "SAF Compatibility", value: "100% Certified" },
    ],
  },
  {
    id: 1,
    category: "Power Systems",
    title: "Series 8000 – A Legacy of Excellence",
    slideTitle: "Series 8000 – a legacy of\nexcellence",
    tabTitle: "Series 8000 – a legacy of\nexcellence",
    buttonText: "READ MORE",
    align: "left",
    image: "/assets/images/series-8000.jpg",
    description:
      "Setting the benchmark for marine high-speed propulsion, the mtu Series 8000 offers power outputs up to 10,000 kW. Renowned worldwide for high power density, reliability, and low lifecycle costs for governmental and commercial vessels.",
    highlight: "Powering the world's most advanced naval patrol vessels, high-speed ferries, and mega yachts.",
    specs: [
      { label: "Power Output", value: "Up to 10,000 kW" },
      { label: "Cylinder Config", value: "20V Configuration" },
      { label: "Displacement", value: "347 Litres" },
      { label: "Emissions Standard", value: "IMO Tier III / EPA" },
    ],
  },
  {
    id: 2,
    category: "Defence",
    title: "AE – The Story Behind the Engine",
    slideTitle: "AE – the story behind the\nengine",
    tabTitle: "AE – the story behind the\nengine",
    subtitle:
      "The versatile, high-performance engine core enabling countless missions and delivering robust reliability.",
    buttonText: "READ MORE",
    align: "left",
    image: "/assets/images/ae-engine.jpg",
    description:
      "With more than 92 million flight hours accumulated across military and civil applications, the Rolls-Royce AE engine family delivers steadfast reliability in demanding tactical environments around the globe.",
    highlight: "Proven power for the C-130J Super Hercules, V-22 Osprey, and Global Hawk surveillance.",
    specs: [
      { label: "Total Fleet Hours", value: "92,000,000+" },
      { label: "Core Variants", value: "Turboprop & Turboshaft" },
      { label: "Shaft Horsepower", value: "4,600+ SHP" },
      { label: "Mission Readiness", value: "99.8% Reliability" },
    ],
  },
];

interface HeroCarouselProps {
  onOpenStory: (story: StoryData) => void;
}

export default function HeroCarousel({ onOpenStory }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isAccModalOpen, setIsAccModalOpen] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const SLIDE_DURATION = 6000;

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slidesData.length);
      }, SLIDE_DURATION);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, currentSlide]);

  const activeData = slidesData[currentSlide];

  return (
    <section className="relative w-full h-[calc(100vh-88px)] min-h-[620px] max-h-[880px] bg-[#070e20] overflow-hidden select-none">
      {/* Background Slides with AnimatePresence */}
      <AnimatePresence mode="sync">
        <motion.div
          key={activeData.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.85, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Zooming background image (Ken Burns) */}
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 7, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${activeData.image})` }}
          />

          {/* Cinematic Vignette Overlays matching screenshots */}
          <div
            className={`absolute inset-0 z-10 ${
              activeData.align === "right"
                ? "bg-gradient-to-t from-[#060b1a]/90 via-[#060b1a]/25 to-[#060b1a]/30"
                : "bg-gradient-to-r from-[#060c1c]/80 via-[#060c1c]/40 to-transparent bg-gradient-to-t from-[#060b1a]/90 via-transparent to-[#060b1a]/30"
            }`}
          />
        </motion.div>
      </AnimatePresence>

      {/* Slide Text Content */}
      <div className="relative z-20 w-full h-full max-w-[1540px] mx-auto px-6 md:px-12 flex items-center">
        <div
          className={`w-full flex ${
            activeData.align === "right" ? "justify-end" : "justify-start"
          }`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeData.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-xl pb-28 md:pb-24"
            >
              <h1
                style={{ color: "#ffffff" }}
                className="text-4xl sm:text-5xl md:text-[54px] font-bold leading-[1.12] tracking-tight mb-5 whitespace-pre-line drop-shadow-[0_4px_16px_rgba(0,0,0,0.65)]"
              >
                {activeData.slideTitle}
              </h1>

              {activeData.subtitle && (
                <p
                  style={{ color: "rgba(255, 255, 255, 0.95)" }}
                  className="text-base sm:text-lg md:text-[19px] font-normal leading-relaxed mb-7 max-w-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
                >
                  {activeData.subtitle}
                </p>
              )}

              <button
                onClick={() => onOpenStory(activeData)}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full glass-pill-btn text-white font-bold text-[13.5px] uppercase tracking-[1.4px] transition-all duration-300 hover:scale-105 group"
                style={{ color: "#ffffff" }}
              >
                <span>{activeData.buttonText}</span>
                <ChevronRight className="w-4 h-4 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Carousel Navigation Tabs Dock */}
      <div className="absolute bottom-0 left-0 right-0 z-30 max-w-[1540px] mx-auto px-6 md:px-12 flex items-end justify-between pointer-events-none">
        <div className="flex items-end gap-3.5 pointer-events-auto overflow-x-auto max-w-[calc(100vw-120px)] pb-0">
          {slidesData.map((slide, idx) => {
            const isActive = currentSlide === idx;
            return (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(idx)}
                className={`relative w-48 sm:w-56 md:w-64 text-left p-4 sm:p-5 rounded-t-md transition-all duration-300 shrink-0 ${
                  isActive
                    ? "glass-tab-active"
                    : "bg-transparent hover:bg-white/10"
                }`}
              >
                {/* Active animated progress bar */}
                {isActive && isPlaying && (
                  <motion.div
                    key={`bar-${slide.id}`}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: SLIDE_DURATION / 1000,
                      ease: "linear",
                    }}
                    className="absolute top-0 left-0 h-[3px] bg-white shadow-[0_0_8px_#ffffff]"
                  />
                )}
                {isActive && !isPlaying && (
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-white" />
                )}

                <span
                  style={{ color: isActive ? "#ffffff" : "rgba(255, 255, 255, 0.78)" }}
                  className={`text-xs sm:text-[14px] leading-snug block whitespace-pre-line ${
                    isActive ? "font-semibold" : "font-medium hover:text-white"
                  }`}
                >
                  {slide.tabTitle}
                </span>
              </button>
            );
          })}

          {/* Carousel Pause / Play Toggle */}
          <div className="mb-4 ml-1 hidden sm:block">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause auto-rotation" : "Play auto-rotation"}
              title={isPlaying ? "Pause auto-rotation" : "Play auto-rotation"}
              className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 border border-white/25 text-white flex items-center justify-center transition-all hover:scale-105"
            >
              {isPlaying ? (
                <Pause className="w-3.5 h-3.5 fill-current" />
              ) : (
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              )}
            </button>
          </div>
        </div>

        {/* Floating Accessibility Widget (Bottom Right corner as in screenshots) */}
        <div className="relative mb-6 pointer-events-auto">
          <button
            onClick={() => setIsAccModalOpen(!isAccModalOpen)}
            className="w-11 h-11 bg-[#0000a0] hover:bg-[#0000c8] text-white rounded-md flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,160,0.5)] transition-all hover:scale-105"
            aria-label="Accessibility settings"
            title="Accessibility Preferences"
          >
            {/* Universal Accessibility Icon */}
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="4" r="2" />
              <path d="M15.89 8.11C15.5 7.72 14.83 7 13.53 7h-3.06c-1.3 0-1.97.72-2.36 1.11L4 12.25l1.41 1.41 3.59-3.59V22h2v-6h2v6h2V10.07l3.59 3.59 1.41-1.41-4.11-4.14z" />
            </svg>
          </button>

          {/* Accessibility Modal */}
          <AccessibilityModal
            isOpen={isAccModalOpen}
            onClose={() => setIsAccModalOpen(false)}
          />
        </div>
      </div>
    </section>
  );
}
