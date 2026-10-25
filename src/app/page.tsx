"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroCarousel, { slidesData } from "@/components/HeroCarousel";
import AnnualReportSection from "@/components/AnnualReportSection";
import LatestUpdatesSection from "@/components/LatestUpdatesSection";
import ProductsServicesSection from "@/components/ProductsServicesSection";
import CareersSection from "@/components/CareersSection";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";
import StoryDrawer, { StoryData } from "@/components/StoryDrawer";
import AccessibilityModal from "@/components/AccessibilityModal";

export default function HomePage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeStory, setActiveStory] = useState<StoryData | null>(null);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [isAccModalOpen, setIsAccModalOpen] = useState(false);

  const handleOpenStory = (story: StoryData) => {
    setActiveStory(story);
    setIsStoryOpen(true);
  };

  const handleSelectStoryByIndex = (index: number) => {
    if (slidesData[index]) {
      setActiveStory(slidesData[index]);
      setIsStoryOpen(true);
    }
  };

  return (
    <main className="min-h-screen bg-white flex flex-col selection:bg-[#001e62] selection:text-white">
      {/* 1. Main Navigation Bar with RR Monogram Logo */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen((prev) => !prev)}
        isSearchOpen={isSearchOpen}
      />

      {/* 2. Hero Carousel Section */}
      <HeroCarousel onOpenStory={handleOpenStory} />

      {/* 3. Annual Report 2025 Section */}
      <AnnualReportSection />

      {/* 4. Latest Updates Section */}
      <LatestUpdatesSection />

      {/* 5. Products & Services Showcase */}
      <ProductsServicesSection />

      {/* 6. Careers with Infinite Potential Banner */}
      <CareersSection />

      {/* White Section Below Careers */}
      <section className="w-full bg-white py-16 sm:py-24" />

      {/* 7. Rolls-Royce Corporate Official Footer */}
      <Footer />

      {/* Interactive Story / Technical Specs Drawer */}
      <StoryDrawer
        isOpen={isStoryOpen}
        onClose={() => setIsStoryOpen(false)}
        story={activeStory}
      />

      {/* Global Interactive Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectStory={handleSelectStoryByIndex}
      />

      {/* Floating Accessibility Widget - Fixed to bottom right on scroll */}
      <div className="fixed bottom-5 sm:bottom-6 right-4 sm:right-6 z-50">
        <button
          onClick={() => setIsAccModalOpen(!isAccModalOpen)}
          className="w-10 h-10 sm:w-11 sm:h-11 bg-[#0000a0] hover:bg-[#0000c8] text-white rounded-md flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,160,0.5)] transition-all hover:scale-105 active:scale-95"
          aria-label="Accessibility settings"
          title="Accessibility Preferences"
        >
          {/* Universal Accessibility Icon */}
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 fill-current"
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
    </main>
  );
}
