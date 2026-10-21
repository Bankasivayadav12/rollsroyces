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

export default function HomePage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeStory, setActiveStory] = useState<StoryData | null>(null);
  const [isStoryOpen, setIsStoryOpen] = useState(false);

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
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

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
    </main>
  );
}
