"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";
import AccessibilityModal from "@/components/AccessibilityModal";
import { ChevronRight, ArrowRight, ExternalLink, Compass } from "lucide-react";
import { motion } from "framer-motion";

export default function SiteMapPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccModalOpen, setIsAccModalOpen] = useState(false);

  const sections = [
    {
      title: "About Us",
      links: [
        { label: "About Rolls-Royce", href: "/about" },
        { label: "Our Purpose & Vision", href: "/about#purpose" },
        { label: "Our Strategic Framework", href: "/about#framework" },
        { label: "Inside Rolls-Royce", href: "/about#inside" },
        { label: "Our Businesses", href: "/about#businesses" },
      ],
    },
    {
      title: "Products & Services",
      links: [
        { label: "Products & Services Overview", href: "/products-services" },
        { label: "Civil Aerospace Engines (Trent Family)", href: "/products-services#civil-aerospace" },
        { label: "Defence Combat & Submarine Propulsion", href: "/products-services#defence" },
        { label: "Power Systems (mtu Series 8000 & 4000)", href: "/products-services#power-systems" },
        { label: "Electrical & Advanced Propulsion", href: "/products-services#electrical" },
      ],
    },
    {
      title: "Technology & Innovation",
      links: [
        { label: "Innovation Overview", href: "/innovation" },
        { label: "UltraFan® Architecture", href: "/innovation" },
        { label: "Small Modular Reactors (SMR)", href: "/innovation" },
        { label: "Sustainable Aviation Fuels (SAF)", href: "/innovation" },
        { label: "Hydrogen & Advanced Air Mobility", href: "/innovation" },
      ],
    },
    {
      title: "Investors",
      links: [
        { label: "Investor Relations Home", href: "/investors" },
        { label: "Financial Results & Highlights", href: "/investors" },
        { label: "Annual Report 2025", href: "/investors" },
        { label: "Shareholder Information", href: "/investors" },
        { label: "Press Releases & Regulatory News", href: "/investors" },
      ],
    },
    {
      title: "Legal & Compliance",
      links: [
        { label: "Legal Information & Terms", href: "/legal" },
        { label: "Global Data Privacy Notice", href: "/privacy" },
        { label: "Use of Cookies Notice", href: "/cookies" },
        { label: "Cookie Settings", href: "/cookie-settings" },
        { label: "Modern Slavery Statement", href: "/anti-slavery" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "Search rolls-royce.com", href: "#", onClick: () => setIsSearchOpen(true) },
        { label: "Accessibility Preferences", href: "#", onClick: () => setIsAccModalOpen(true) },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white flex flex-col selection:bg-[#001e62] selection:text-white">
      {/* 1. Navbar */}
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
          <span className="text-[#001e62] font-semibold">Site map</span>
        </div>
      </div>

      {/* 3. Hero Statement */}
      <section className="w-full bg-[#061129] text-white pt-16 sm:pt-20 pb-16 px-4 sm:px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Navigation Directory</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-[54px] font-normal tracking-tight mb-4"
          >
            Site map
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-white/80 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            A comprehensive overview of content, commercial businesses, technologies, and corporate disclosures across Rolls-Royce.
          </motion.p>
        </div>
      </section>

      {/* 4. Site Map Links Grid */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 md:px-12 flex-1">
        <div className="max-w-[1540px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {sections.map((section, idx) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="bg-gray-50/70 border border-gray-200/80 rounded-sm p-6 sm:p-8 hover:border-[#001e62]/30 transition-all hover:shadow-sm"
              >
                <h2 className="text-xl font-bold text-[#001438] mb-5 pb-3 border-b border-gray-200 flex items-center justify-between">
                  <span>{section.title}</span>
                  <span className="text-xs font-semibold text-gray-400">
                    {section.links.length} links
                  </span>
                </h2>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      {link.onClick ? (
                        <button
                          onClick={link.onClick}
                          className="text-[15px] text-[#001e62] hover:text-[#0a2f8c] font-medium flex items-center gap-2 group text-left cursor-pointer transition-colors"
                        >
                          <ChevronRight className="w-3.5 h-3.5 stroke-[2.5] text-[#001e62]/60 group-hover:translate-x-0.5 transition-transform" />
                          <span>{link.label}</span>
                        </button>
                      ) : (
                        <a
                          href={link.href}
                          className="text-[15px] text-[#001e62] hover:text-[#0a2f8c] font-medium flex items-center gap-2 group transition-colors"
                        >
                          <ChevronRight className="w-3.5 h-3.5 stroke-[2.5] text-[#001e62]/60 group-hover:translate-x-0.5 transition-transform" />
                          <span>{link.label}</span>
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Footer */}
      <Footer />

      {/* Fixed Accessibility Trigger */}
      <button
        onClick={() => setIsAccModalOpen(true)}
        aria-label="Open accessibility tools"
        className="fixed bottom-5 sm:bottom-6 right-4 sm:right-6 z-50 w-11 h-11 sm:w-12 sm:h-12 bg-[#001e62] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all focus:outline-none border-2 border-white/40"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <circle cx="12" cy="4" r="2" />
          <path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.46-.22-.99-.25-1.47-.09-.23.08-.44.2-.62.36L9.64 8.97C8.65 10.05 7.1 10.82 5.56 10.8L5 13c1.9-.02 3.8-.95 5-2.28V22h2v-6h2v6h2v-11.28c1.2 1.33 3.1 2.26 5 2.28z" />
        </svg>
      </button>

      {/* Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
      <AccessibilityModal
        isOpen={isAccModalOpen}
        onClose={() => setIsAccModalOpen(false)}
      />
    </main>
  );
}
