"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";
import AccessibilityModal from "@/components/AccessibilityModal";
import { divisionsData, DivisionData } from "@/data/divisionsData";
import {
  ChevronRight,
  ChevronLeft,
  Shield,
  Zap,
  Anchor,
  ArrowRight,
  ExternalLink,
  Mail,
  CheckCircle2,
  Share2,
  Copy,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

interface DivisionPageProps {
  params: Promise<{ slug: string }> | { slug: string };
}

export default function DivisionDetailPage({ params }: DivisionPageProps) {
  const resolvedParams = "then" in params ? use(params) : params;
  const slug = resolvedParams.slug;

  const division: DivisionData =
    divisionsData[slug] || divisionsData["submarines"];

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccModalOpen, setIsAccModalOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const getDivisionIcon = (id: string) => {
    switch (id) {
      case "submarines":
        return <Anchor className="w-5 h-5 text-white" />;
      case "defence":
        return <Shield className="w-5 h-5 text-white" />;
      case "power-systems":
        return <Zap className="w-5 h-5 text-white" />;
      default:
        return <Shield className="w-5 h-5 text-white" />;
    }
  };

  // Other divisions for quick switcher
  const otherDivisions = Object.values(divisionsData).filter(
    (d) => d.id !== division.id
  );

  return (
    <main className="min-h-screen bg-white flex flex-col selection:bg-[#001e62] selection:text-white">
      {/* 1. Main Navigation Bar */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen((prev) => !prev)}
        isSearchOpen={isSearchOpen}
        activePath="/products-services"
      />

      {/* 2. Breadcrumbs Bar */}
      <div className="w-full bg-[#f8fafc] border-b border-gray-200/80 py-3.5 px-4 sm:px-6 md:px-12 text-sm">
        <div className="max-w-[1540px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-600 font-normal flex-wrap">
            <Link href="/" className="hover:text-[#001e62] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 stroke-[2.2] text-gray-400" />
            <Link
              href="/products-services"
              className="hover:text-[#001e62] transition-colors"
            >
              Products &amp; Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 stroke-[2.2] text-gray-400" />
            <span className="text-[#001e62] font-semibold">
              {division.title}
            </span>
          </div>

          <button
            onClick={handleCopyLink}
            className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-[#001e62] transition-colors px-3 py-1 rounded bg-white border border-gray-200 shadow-sm"
          >
            {copiedLink ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Link Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Share</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 3. Hero Header Section */}
      <section className="relative w-full bg-[#001438] text-white overflow-hidden py-16 sm:py-20 lg:py-28 px-4 sm:px-6 md:px-12">
        {/* Background Image with Cinematic Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={division.image}
            alt={division.title}
            className="w-full h-full object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001438] via-[#001438]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001438] via-transparent to-[#001438]/60" />
        </div>

        <div className="relative z-10 max-w-[1540px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            {/* Division Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider mb-5">
              {getDivisionIcon(division.id)}
              <span>Rolls Royces {division.category}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-light tracking-tight leading-[1.1] mb-5">
              {division.title}
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl font-light text-cyan-200/90 leading-snug mb-6 max-w-3xl">
              {division.subtitle}
            </p>

            <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed font-normal max-w-2xl mb-8">
              {division.heroTagline}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#specifications"
                className="px-6 py-3 bg-[#0066ff] hover:bg-[#0052cc] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-sm shadow-lg transition-all"
              >
                Key Specifications
              </a>
              <a
                href="#capabilities"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-sm border border-white/20 transition-all backdrop-blur-md"
              >
                Core Capabilities
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="rounded-lg overflow-hidden shadow-2xl border border-white/15 bg-black/40 backdrop-blur-md p-6">
              <div className="text-xs font-bold uppercase tracking-widest text-cyan-300 mb-2">
                Mission Highlight
              </div>
              <p className="text-white text-base sm:text-lg font-light leading-relaxed mb-6 italic">
                &ldquo;{division.highlight}&rdquo;
              </p>
              <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs text-white/70">
                <span>Rolls Royces Global Operations</span>
                <span className="font-semibold text-white">UK &amp; Global</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Key Specifications Grid */}
      <section id="specifications" className="w-full bg-[#f8fafc] py-14 sm:py-20 px-4 sm:px-6 md:px-12 border-b border-gray-200">
        <div className="max-w-[1540px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-xs sm:text-sm font-bold tracking-[2px] uppercase text-[#0066ff] mb-2">
              Performance &amp; Scale
            </h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#001438] tracking-tight">
              Technical Specifications &amp; Heritage
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {division.specs.map((spec, idx) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white p-6 sm:p-7 rounded-sm shadow-sm border border-gray-100 hover:border-[#0066ff]/40 hover:shadow-md transition-all group"
              >
                <div className="text-xs sm:text-[13px] font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  {spec.label}
                </div>
                <div className="text-xl sm:text-2xl font-semibold text-[#001438] group-hover:text-[#0066ff] transition-colors">
                  {spec.value}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Deep-Dive Description & Capabilities */}
      <section id="capabilities" className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 md:px-12 border-b border-gray-100">
        <div className="max-w-[1540px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Comprehensive Overview */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <h2 className="text-xs sm:text-sm font-bold tracking-[2px] uppercase text-[#0066ff] mb-3">
                Division Architecture
              </h2>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#001438] tracking-tight mb-6">
                Engineering that powers sovereign and global security
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                {division.description}
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 font-normal">
                {division.cardDesc}
              </p>

              <div className="p-6 rounded-sm bg-[#001438] text-white">
                <div className="text-xs font-bold tracking-widest uppercase text-cyan-300 mb-2">
                  Certified Standards
                </div>
                <div className="text-sm font-light text-white/90">
                  Every Rolls Royces solution undergoes rigorous defense and civil nuclear safety verification, meeting safety-critical operational thresholds across air, land, and sea.
                </div>
              </div>
            </div>

            {/* Right: Core Capabilities Cards */}
            <div className="lg:col-span-6 space-y-5">
              <h4 className="text-lg font-semibold text-[#001438] mb-4">
                Core Capabilities &amp; Technologies
              </h4>
              {division.capabilities.map((cap, idx) => (
                <div
                  key={cap.title}
                  className="p-6 rounded-sm bg-gray-50 border border-gray-200/80 hover:bg-white hover:border-[#0066ff] hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="text-lg font-semibold text-[#001438]">
                      {cap.title}
                    </h5>
                    {cap.badge && (
                      <span className="px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider bg-[#0066ff]/10 text-[#0066ff] rounded-full">
                        {cap.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed font-normal">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Featured Strategic Programs */}
      <section className="w-full bg-[#f8fafc] py-16 sm:py-24 px-4 sm:px-6 md:px-12 border-b border-gray-200">
        <div className="max-w-[1540px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-xs sm:text-sm font-bold tracking-[2px] uppercase text-[#0066ff] mb-2">
              Signature Milestones
            </h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#001438] tracking-tight">
              Featured Strategic Programs
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {division.featuredPrograms.map((prog, idx) => (
              <div
                key={prog.name}
                className="bg-white rounded-sm overflow-hidden shadow-sm border border-gray-200 p-8 flex flex-col justify-between hover:shadow-xl hover:border-[#0066ff]/40 transition-all group"
              >
                <div>
                  <div className="text-xs font-bold text-[#0066ff] uppercase tracking-wider mb-2">
                    {prog.stat}
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-[#001438] mb-3 group-hover:text-[#0066ff] transition-colors">
                    {prog.name}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed font-normal">
                    {prog.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#001438] group-hover:text-[#0066ff]">
                  <span>Operational Program</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Explore Other Divisions Quick Switcher */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 md:px-12 border-b border-gray-100">
        <div className="max-w-[1540px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12">
            <div>
              <h2 className="text-xs sm:text-sm font-bold tracking-[2px] uppercase text-[#0066ff] mb-2">
                Explore More Divisions
              </h2>
              <h3 className="text-2xl sm:text-3xl font-light text-[#001438] tracking-tight">
                Rolls Royces Products &amp; Services
              </h3>
            </div>
            <Link
              href="/products-services"
              className="mt-4 sm:mt-0 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#001438] hover:text-[#0066ff] flex items-center gap-1 transition-colors"
            >
              <span>View All Divisions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {otherDivisions.map((other) => (
              <Link
                key={other.id}
                href={`/products-services/${other.slug}`}
                className="group relative aspect-[16/9] sm:aspect-[16/10] rounded-sm overflow-hidden shadow-md block bg-gray-950"
              >
                <img
                  src={other.image}
                  alt={other.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/60 group-hover:from-black/90 transition-colors" />

                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="p-1.5 rounded-full bg-white/20 backdrop-blur-md">
                    {getDivisionIcon(other.id)}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/90">
                    Explore Division
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2 group-hover:text-cyan-300 transition-colors">
                    {other.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/80 line-clamp-2 font-normal">
                    {other.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Contact & Sovereign Support Banner */}
      <section className="w-full bg-[#001438] text-white py-16 px-4 sm:px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-4">
            Partner with Rolls Royces {division.title}
          </h2>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto mb-8 font-normal">
            For technical enquiries, government defence partnerships, and commercial supply chain integration, contact our executive team.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:RollsRoyces@rollsroyces.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066ff] hover:bg-[#0052cc] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-sm shadow-lg transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>RollsRoyces@rollsroyces.com</span>
            </a>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-sm border border-white/20 transition-all"
            >
              <span>Our Leadership Team</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Official Rolls Royces Footer */}
      <Footer />

      {/* Global Interactive Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Floating Accessibility Widget */}
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

