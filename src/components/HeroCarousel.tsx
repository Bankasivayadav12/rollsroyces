"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
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
    align: "left",
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
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

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

  // When progress completes & slide rotates, automatically smooth-scroll active card to center in mobile view
  useEffect(() => {
    if (tabsContainerRef.current && tabRefs.current[currentSlide]) {
      const container = tabsContainerRef.current;
      const activeTab = tabRefs.current[currentSlide];
      if (activeTab) {
        const tabLeft = activeTab.offsetLeft;
        const tabWidth = activeTab.offsetWidth;
        const containerWidth = container.offsetWidth;
        const targetScroll = tabLeft - (containerWidth - tabWidth) / 2;
        container.scrollTo({
          left: Math.max(0, targetScroll),
          behavior: "smooth",
        });
      }
    }
  }, [currentSlide]);

  const activeData = slidesData[currentSlide];

  return (
    <section className="relative w-full h-[calc(100vh-84px)] min-h-[580px] sm:min-h-[620px] max-h-[880px] bg-[#070e20] overflow-hidden select-none">
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
      <div className="relative z-20 w-full h-full max-w-[1540px] mx-auto px-4 sm:px-6 md:px-12 flex items-center">
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
              className="max-w-xl pb-24 sm:pb-20 md:pb-16"
            >
              <h1
                style={{ color: "#ffffff" }}
                className="text-3xl sm:text-4xl md:text-[50px] lg:text-[54px] font-bold leading-[1.14] tracking-tight mb-4 sm:mb-5 drop-shadow-[0_4px_16px_rgba(0,0,0,0.65)]"
              >
                {activeData.slideTitle}
              </h1>

              {activeData.subtitle && (
                <p
                  style={{ color: "rgba(255, 255, 255, 0.95)" }}
                  className="text-sm sm:text-base md:text-[18px] font-normal leading-relaxed mb-6 sm:mb-7 max-w-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
                >
                  {activeData.subtitle}
                </p>
              )}

              <button
                onClick={() => onOpenStory(activeData)}
                className="inline-flex items-center gap-2.5 sm:gap-3 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full glass-pill-btn text-white hover:text-[#001438] font-bold text-xs sm:text-[13.5px] uppercase tracking-[1.4px] transition-all duration-300 hover:scale-105 group cursor-pointer"
              >
                <span className="text-white group-hover:text-[#001438] transition-colors duration-200">
                  {activeData.buttonText}
                </span>
                <ChevronRight className="w-4 h-4 stroke-[2.5] text-white group-hover:text-[#001438] transition-all duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Carousel Navigation Tabs Dock */}
      <div className="absolute bottom-4 sm:bottom-5 md:bottom-6 left-0 right-0 z-30 max-w-[1540px] mx-auto px-4 sm:px-6 md:px-12 flex items-end justify-between pointer-events-none">
        <div
          ref={tabsContainerRef}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          className="no-scrollbar scrollbar-none flex items-center gap-2.5 sm:gap-3.5 pointer-events-auto overflow-x-auto max-w-[calc(100vw-32px)] sm:max-w-[calc(100vw-80px)] lg:max-w-none pb-1"
        >
          {slidesData.map((slide, idx) => {
            const isActive = currentSlide === idx;
            return (
              <button
                key={slide.id}
                ref={(el) => {
                  tabRefs.current[idx] = el;
                }}
                onClick={() => setCurrentSlide(idx)}
                className={`group relative w-44 sm:w-56 md:w-64 h-[66px] sm:h-[72px] md:h-[74px] text-left px-3.5 sm:px-4 md:px-5 flex flex-col justify-center rounded-md transition-all duration-300 shrink-0 overflow-hidden cursor-pointer ${
                  isActive
                    ? "glass-tab-active"
                    : "glass-tab-inactive"
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
                    className="tab-progress-bar absolute top-0 left-0 h-[3px] bg-white shadow-[0_0_8px_#ffffff] transition-colors"
                  />
                )}
                {isActive && !isPlaying && (
                  <div className="tab-progress-bar absolute top-0 left-0 w-full h-[3px] bg-white transition-colors" />
                )}

                <span
                  className={`text-xs sm:text-[13.5px] md:text-[14px] leading-snug block whitespace-pre-line transition-colors duration-200 ${
                    isActive
                      ? "font-semibold text-white group-hover:text-[#001438]"
                      : "font-medium text-white/80 group-hover:text-[#001438]"
                  }`}
                >
                  {slide.tabTitle}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
