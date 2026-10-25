"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";
import StoryDrawer, { StoryData } from "@/components/StoryDrawer";
import AccessibilityModal from "@/components/AccessibilityModal";
import { ChevronRight, Play, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeStory, setActiveStory] = useState<StoryData | null>(null);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isAccModalOpen, setIsAccModalOpen] = useState(false);
  const [activeSubTab, setActiveSubTab] = useState("about-us");

  const subNavLinks = [
    { id: "about-us", label: "About us" },
    { id: "our-businesses", label: "Our businesses" },
    { id: "our-strategic-framework", label: "Our strategic framework" },
    { id: "inside-rolls-royce", label: "Inside Rolls-Royce" },
  ];

  const scrollToSection = (id: string) => {
    setActiveSubTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const businessCards = [
    {
      title: "Civil Aerospace",
      image: "/assets/images/annual-report.jpg",
      icon: (
        <svg className="w-6 h-6 stroke-white fill-none stroke-[2]" viewBox="0 0 24 24">
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.8-.2-1.6.2-2 1-.3.8 0 1.7.7 2.1l5.5 3.2L6 16.5l-2.5-.5L2 17.5l3.5 2 2 3.5 1.5-1.5-.5-2.5 3.5-3.5 3.2 5.5c.4.7 1.3 1 2.1.7.8-.4 1.2-1.2 1-2z" />
        </svg>
      ),
    },
    {
      title: "Defence",
      image: "/assets/images/business-typhoon.jpg",
      icon: (
        <svg className="w-6 h-6 stroke-white fill-none stroke-[2]" viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Power Systems",
      image: "/assets/images/business-yacht.jpg",
      icon: (
        <svg className="w-6 h-6 stroke-white fill-none stroke-[2]" viewBox="0 0 24 24">
          <rect x="4" y="6" width="16" height="12" rx="2" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="10" y1="18" x2="10" y2="22" />
          <line x1="14" y1="18" x2="14" y2="22" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      ),
    },
  ];

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
          <span className="text-[#001e62] font-semibold">About</span>
        </div>
      </div>

      {/* 3. About Hero Section with Spheres Visual */}
      <section className="relative w-full min-h-[440px] sm:min-h-[520px] lg:h-[620px] bg-[#03091e] overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/assets/images/about-hero.jpg')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/60" />
        </div>

        <div className="relative z-10 w-full h-full max-w-[1540px] mx-auto px-4 sm:px-6 md:px-12 py-12 flex items-center justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-[560px] bg-[#061129]/75 backdrop-blur-xl border border-white/15 p-6 sm:p-10 lg:p-12 rounded-sm shadow-2xl text-white"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3 sm:mb-4 leading-tight">
              Rolls-Royce
            </h1>
            <p className="text-white/90 text-base sm:text-lg lg:text-[20px] leading-relaxed font-normal mb-6 sm:mb-8">
              Powering, protecting and connecting the modern world
            </p>
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="inline-flex items-center gap-2.5 sm:gap-3 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full border-[1.8px] border-white text-white font-bold text-xs sm:text-[13px] uppercase tracking-[1.4px] hover:bg-white hover:text-[#001438] transition-all duration-300 hover:scale-105 group"
            >
              <Play className="w-3.5 h-3.5 fill-current transition-transform group-hover:scale-110" />
              <span>PLAY VIDEO</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* 4. Subnavigation Bar (Sticks seamlessly directly below the 84px Navbar) */}
      <div className="w-full bg-[#0808a3] text-white sticky top-[84px] z-30 shadow-md">
        <div className="max-w-[1540px] mx-auto px-4 sm:px-6 md:px-12 flex items-center gap-4 sm:gap-8 lg:gap-10 overflow-x-auto no-scrollbar">
          {subNavLinks.map((tab) => {
            const isActive = activeSubTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`relative py-3.5 sm:py-4 text-[13px] sm:text-[14.5px] font-semibold whitespace-nowrap transition-colors ${
                  isActive ? "text-white" : "text-white/75 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="subnavActiveIndicator"
                    className="absolute top-0 left-0 right-0 h-[3px] bg-[#e11d48]"
                  />
                )}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 5. Section: About us (#about-us) */}
      <div id="about-us">
        {/* About Rolls-Royce Editorial Statement */}
        <section className="w-full bg-white py-14 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 border-b border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-[54px] font-light text-[#001438] tracking-[-0.5px] mb-4 sm:mb-8"
            >
              About Rolls-Royce
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg sm:text-xl lg:text-2xl text-[#334155] leading-relaxed font-normal mb-6 sm:mb-8"
            >
              We&apos;ve been at the forefront of innovation for more than a hundred years, helping to power, protect and connect the modern world
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-[17px] text-gray-600 leading-[1.8] font-normal"
            >
              Today, we&apos;re working on a multi-year transformation to unlock our full potential. We&apos;re building on our enduring, distinctive strengths to create a high-performing, competitive, resilient and growing Rolls-Royce. We will continue to design, build and maintain systems that provide mission-critical power to customers.
            </motion.p>
          </div>
        </section>

        {/* The Rolls-Royce Proposition */}
        <section className="w-full bg-white py-14 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 border-b border-gray-100">
          <div className="max-w-[1540px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5"
            >
              <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-lg bg-gray-100">
                <img
                  src="/assets/images/apprentice.jpg"
                  alt="Rolls-Royce engineering apprentice inspecting engine assembly"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#001438] tracking-[-0.5px] leading-tight mb-4 sm:mb-8">
                The Rolls-Royce proposition
              </h2>

              <ol className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-sm sm:text-base md:text-[17px] text-[#001438] font-medium leading-relaxed">
                <li className="flex gap-2">
                  <span>1.</span>
                  <span>Build a high-performing, competitive and resilient business with profitable growth.</span>
                </li>
                <li className="flex gap-2">
                  <span>2.</span>
                  <span>Grow sustainable free cash flow.</span>
                </li>
                <li className="flex gap-2">
                  <span>3.</span>
                  <span>Build a strong balance sheet and grow shareholder returns.</span>
                </li>
              </ol>

              <div className="space-y-4 sm:space-y-6 text-gray-700 text-sm sm:text-base md:text-[16.5px] leading-[1.75] font-normal">
                <p>
                  Delivering the proposition will make us a stronger partner to our customers as they face future challenges and opportunities. We will unlock our full potential by turning engineering excellence into strong financial performance.
                </p>
                <p>
                  To implement our strategy, we will be disciplined, agile and systematic. We will continue to have a tight focus on priorities, improve commercial discipline and seek efficiency in every step, whilst never compromising on integrity or safety. We will put the business on a stronger financial footing by delivering a sustainable reduction in working capital, higher operating margins and improved operational performance.
                </p>
                <p>
                  Improving profitability will give us options to grow the business and enhance shareholder returns. This performance shift is also crucial to creating more opportunities for our people to be part of an energising, rewarding and world-leading team.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Where We're Going */}
        <section className="w-full bg-white py-14 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 border-b border-gray-100">
          <div className="max-w-[1540px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-[16/10] bg-gray-50 rounded-sm overflow-hidden flex items-center justify-center p-4">
                <div className="absolute left-0 bottom-4 w-1/3 flex items-end gap-1 h-12 opacity-80 pointer-events-none">
                  {[20, 35, 48, 60, 42, 50, 75, 40, 60, 30, 20, 15].map((h, i) => (
                    <span
                      key={i}
                      style={{ height: `${h}%` }}
                      className="w-1 bg-[#8b5cf6] rounded-full inline-block"
                    />
                  ))}
                </div>
                <div className="absolute right-0 bottom-4 w-1/3 flex items-end gap-1 h-12 opacity-80 pointer-events-none">
                  {[15, 30, 55, 40, 65, 80, 50, 45, 60, 35, 25, 20].map((h, i) => (
                    <span
                      key={i}
                      style={{ height: `${h}%` }}
                      className="w-1 bg-[#06b6d4] rounded-full inline-block"
                    />
                  ))}
                </div>
                <img
                  src="/assets/images/news-ribbon.jpg"
                  alt="Rolls-Royce Leadership"
                  className="relative z-10 w-full h-full object-cover rounded-sm shadow-md"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#001438] tracking-[-0.5px] leading-tight mb-4 sm:mb-6">
                Where we&apos;re going
              </h2>

              <p className="text-gray-700 text-sm sm:text-base md:text-[17px] leading-[1.75] font-normal mb-6 sm:mb-8 max-w-xl">
                Our leadership team made a public announcement about where we&apos;re going and our plans for getting there, at our Capital Markets Day on 28 November 2023. Watch the recording, browse our Virtual Exhibition, and download presentations from the day.
              </p>

              <div>
                <a
                  href="#where-we-are-going"
                  className="inline-block text-[#001e62] font-bold text-xs sm:text-[14px] uppercase tracking-[1.5px] hover:text-[#0a2f8c] border-b-2 border-[#001e62] pb-1 transition-colors"
                >
                  LEARN MORE
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* 6. Section: Our businesses (#our-businesses) */}
      <section id="our-businesses" className="w-full bg-white py-14 sm:py-20 lg:py-28 px-4 sm:px-6 md:px-12 border-b border-gray-100">
        <div className="max-w-[1540px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#001438] tracking-[-0.5px] mb-3 sm:mb-6">
              Our businesses
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-[17px] leading-relaxed font-normal">
              We have a differentiated position with a strong portfolio of products and technologies in attractive markets. Our core operating businesses cover:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {businessCards.map((bCard, idx) => (
              <motion.div
                key={bCard.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="relative aspect-[16/10] sm:aspect-[16/11] rounded-sm overflow-hidden group shadow-md block bg-gray-950 cursor-pointer"
              >
                <img
                  src={bCard.image}
                  alt={bCard.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70 group-hover:from-black/70 group-hover:to-black/80 transition-colors duration-500" />
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 flex items-center gap-2.5 sm:gap-3">
                  <span className="opacity-95">{bCard.icon}</span>
                  <span className="text-white text-xl sm:text-2xl lg:text-[26px] font-normal tracking-wide">
                    {bCard.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Section: Our strategic framework (#our-strategic-framework) */}
      <section id="our-strategic-framework" className="w-full bg-white py-14 sm:py-20 lg:py-28 px-4 sm:px-6 md:px-12 border-b border-gray-100">
        <div className="max-w-[1540px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Framework Narrative & Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#001438] tracking-[-0.5px] leading-tight mb-4 sm:mb-8">
              Our strategic framework
            </h2>

            <p className="text-gray-700 text-sm sm:text-base md:text-[17px] leading-[1.8] font-normal mb-6 sm:mb-10 max-w-xl">
              Our near-term focus areas and strategic priorities are informed by our business environment. Our strategy is delivered by our people, enabled by our business model, enacted by our business units and measured through our KPIs. It’s underpinned by strong governance and leadership, which manages risk and uncertainty, and creates value for all our stakeholders.
            </p>

            <div>
              <a
                href="#strategic-framework-details"
                className="inline-block text-[#001e62] font-bold text-xs sm:text-[14px] uppercase tracking-[1.5px] hover:text-[#0a2f8c] border-b-2 border-[#001e62] pb-1 transition-colors"
              >
                LEARN MORE
              </a>
            </div>
          </motion.div>

          {/* Right Column: Female Technician Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-6"
          >
            <div className="aspect-[16/10] rounded-sm overflow-hidden shadow-lg bg-gray-100">
              <img
                src="/assets/images/framework-tech.jpg"
                alt="Rolls-Royce engineer working on aerospace propulsion systems"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. Section: Inside Rolls-Royce (#inside-rolls-royce) */}
      <section id="inside-rolls-royce" className="w-full bg-white py-14 sm:py-20 lg:py-28 px-4 sm:px-6 md:px-12 border-b border-gray-100">
        <div className="max-w-[1540px] mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#001438] tracking-[-0.5px]">
              Inside Rolls-Royce
            </h2>
          </div>

          {/* 4 Feature Cards (2x2 Grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Card 1: Leadership */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="bg-white border border-gray-200/90 rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col sm:flex-row group"
            >
              <div className="sm:w-2/5 aspect-[16/10] sm:aspect-auto overflow-hidden bg-gray-100">
                <img
                  src="/assets/images/inside-leader.jpg"
                  alt="Rolls-Royce Leadership"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="sm:w-3/5 p-5 sm:p-7 md:p-8 flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#001e62] mb-1.5 sm:mb-2 group-hover:text-[#0a2f8c] transition-colors">
                  Leadership
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
                  Our Board and Executive Team
                </p>
              </div>
            </motion.div>

            {/* Card 2: Where we operate */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="bg-white border border-gray-200/90 rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col sm:flex-row group"
            >
              <div className="sm:w-2/5 aspect-[16/10] sm:aspect-auto p-4 flex items-center justify-center bg-gray-50/50">
                <img
                  src="/assets/images/world-map.svg"
                  alt="Where we operate map"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="sm:w-3/5 p-5 sm:p-7 md:p-8 flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#001e62] mb-1.5 sm:mb-2 group-hover:text-[#0a2f8c] transition-colors">
                  Where we operate
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
                  Find out details of our global presence
                </p>
              </div>
            </motion.div>

            {/* Card 3: Our Research */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col sm:flex-row group"
            >
              <div className="sm:w-2/5 aspect-[16/10] sm:aspect-auto overflow-hidden bg-gray-900">
                <img
                  src="/assets/images/inside-research.jpg"
                  alt="Our Research"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="sm:w-3/5 p-5 sm:p-7 md:p-8 flex flex-col justify-center bg-[#0284c7] text-white">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-1.5 sm:mb-2">
                  Our Research
                </h3>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed font-normal">
                  Find out more about how we structure our research
                </p>
              </div>
            </motion.div>

            {/* Card 4: Our History */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="bg-white border border-gray-200/90 rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col sm:flex-row group"
            >
              <div className="sm:w-2/5 aspect-[16/10] sm:aspect-auto overflow-hidden bg-gray-100">
                <img
                  src="/assets/images/inside-history.jpg"
                  alt="Rolls-Royce 1906 History"
                  className="w-full h-full object-cover sepia-[0.35] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="sm:w-3/5 p-5 sm:p-7 md:p-8 flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#001e62] mb-1.5 sm:mb-2 group-hover:text-[#0a2f8c] transition-colors">
                  Our History
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
                  Our company was founded in 1906: use our timeline to discover our key milestones
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. The Rolls-Royce Heritage Trust Banner */}
      <section className="w-full bg-white py-10 sm:py-12 px-4 sm:px-6 md:px-12">
        <div className="max-w-[1540px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full bg-[#0808a3] text-white rounded-sm py-10 sm:py-14 px-6 sm:px-12 lg:px-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 shadow-xl"
          >
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-tight mb-2 sm:mb-3">
                The Rolls-Royce Heritage Trust
              </h2>
              <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
                The Rolls-Royce Heritage Trust promotes the history and engineering excellence of Rolls-Royce and its ancestral companies.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="#heritage-trust"
                className="inline-flex items-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border-[1.8px] border-white text-white font-bold text-xs sm:text-[13px] uppercase tracking-[1.4px] hover:bg-white hover:text-[#0808a3] transition-all duration-300 hover:scale-105 group"
              >
                <span>LEARN MORE</span>
                <ChevronRight className="w-4 h-4 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 10. Clean White Buffer before Footer */}
      <section className="w-full bg-white py-10 sm:py-16 md:py-20" />

      {/* 11. Official Rolls-Royce Footer */}
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
                  Rolls-Royce – Powering, Protecting &amp; Connecting
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
                  src="/assets/images/trent-xe.jpg"
                  alt="Video placeholder"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center mb-3">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                  <span className="text-sm font-semibold tracking-wider uppercase">
                    Pioneering Aerospace Showcase
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
