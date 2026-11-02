"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";
import AccessibilityModal from "@/components/AccessibilityModal";
import {
  ChevronRight,
  Zap,
  Anchor,
  Shield,
  ArrowRight,
  Mail,
  CheckCircle2,
  Copy,
  Check,
  BatteryCharging,
  Cpu,
  Server,
  Leaf,
} from "lucide-react";
import { motion } from "framer-motion";

export default function PowerSystemsPage() {
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

  const keySpecs = [
    { label: "Max Engine Output", value: "Up to 10,000 kW" },
    { label: "Sustainable Fuel Capability", value: "100% HVO & Hydrogen Ready" },
    { label: "Global Service Network", value: "1,200+ Service Partners" },
    { label: "Critical Power Reliability", value: "99.999% Uptime Record" },
    { label: "Marine Footprint", value: "Naval, Ferries & Mega-Yachts" },
    { label: "Transition Roadmap", value: "Net Zero Ready by 2030" },
  ];

  const powerPrograms = [
    {
      title: "mtu Series 8000 Marine Propulsion",
      status: "High-Speed Marine Benchmark",
      description:
        "The mtu Series 8000 is the undisputed benchmark in high-speed marine power. With power outputs reaching 10,000 kW per engine, it powers commercial catamarans, naval patrol corvettes, and luxury yachts with maximum power density, ultra-low emissions, and minimal fuel consumption.",
      stat: "10,000 kW Power Class",
      highlight: "Compact 20V cylinder architecture delivering the highest power-to-weight ratio in marine propulsion.",
    },
    {
      title: "mtu EnergyPack & Battery Microgrids",
      status: "Zero-Carbon Distributed Energy",
      description:
        "Containerized lithium-ion battery energy storage systems (BESS) designed to stabilize electrical grids, store surplus solar and wind power, and provide instantaneous frequency regulation and zero-emission peak shaving for municipal and industrial operators.",
      stat: "Multi-Megawatt Storage",
      highlight: "Intelligent microgrid controller dynamically balancing renewables, battery packs, and backup generation.",
    },
    {
      title: "Mission-Critical Standby Power",
      status: "Hyperscale Cloud & Healthcare",
      description:
        "Rolls Royces Power Systems provides the fail-safe emergency standby power protecting the world's most vital digital infrastructure. When municipal grids fail, mtu standby generator sets synchronize in seconds to ensure uninterrupted operations.",
      stat: "99.999% Mission Reliability",
      highlight: "Certified for Hydrotreated Vegetable Oil (HVO), slashing net CO2 lifecycle emissions by up to 90%.",
    },
  ];

  const coreCapabilities = [
    {
      title: "High-Speed Diesel & Gas Engines",
      desc: "Robust mtu Series 2000, 4000, and 8000 engines engineered for relentless 24/7 reliability across harsh marine, mining, and rail environments.",
    },
    {
      title: "Hydrogen & Sustainable Fuel Transition",
      desc: "Comprehensive testing and commercial rollout of 100% hydrogen internal combustion engines and synthetic fuel compatibility across our product portfolio.",
    },
    {
      title: "Intelligent Microgrid Automation",
      desc: "Smart digital energy management systems integrating solar PV, battery storage, and CHP generation into autonomous resilient power grids.",
    },
    {
      title: "Life-Cycle Asset Health Monitoring",
      desc: "Predictive digital analytics and Rolls Royces mtu Go! telemetry monitoring thousands of active engine parameters in real time across the globe.",
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
            <span className="text-[#001e62] font-semibold">Power Systems</span>
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
      <section className="relative w-full bg-[#001438] text-white overflow-hidden py-16 sm:py-24 lg:py-32 px-4 sm:px-6 md:px-12">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/series-8000.jpg"
            alt="Rolls Royces mtu Series 8000 marine propulsion engine"
            className="w-full h-full object-cover opacity-35 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001438] via-[#001438]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001438] via-transparent to-[#001438]/70" />
        </div>

        <div className="relative z-10 max-w-[1540px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 backdrop-blur-md border border-blue-400/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-6">
              <Zap className="w-4 h-4 text-cyan-300" />
              <span>Rolls Royces Power Systems &amp; mtu Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-light tracking-tight leading-[1.08] mb-6">
              Power Systems
            </h1>

            <p className="text-xl sm:text-2xl font-light text-cyan-200/95 leading-relaxed mb-6 max-w-3xl">
              Powering sustainability in propulsion and clean energy through advanced mtu technology.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed font-normal max-w-2xl mb-8">
              Our mtu brand products contribute decisively to the energy transition—as emergency power supplies for mission-critical installations and as integrated clean propulsion systems for marine vessels and industrial land applications worldwide.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#power-programs"
                className="px-6 py-3.5 bg-[#0066ff] hover:bg-[#0052cc] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-sm shadow-xl transition-all"
              >
                mtu Propulsion &amp; Microgrids
              </a>
              <a
                href="#clean-energy"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-sm border border-white/20 transition-all backdrop-blur-md"
              >
                Sustainable Technology
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="rounded-lg overflow-hidden shadow-2xl border border-cyan-500/20 bg-black/60 backdrop-blur-md p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-300 mb-3">
                <Leaf className="w-4 h-4 text-emerald-400" />
                <span>Sustainable Energy Transition</span>
              </div>
              <p className="text-white text-base sm:text-lg font-light leading-relaxed mb-6 italic">
                &ldquo;mtu Hydrogen microgrid and battery storage systems delivering resilient zero-carbon power for healthcare, data centres, and clean shipping.&rdquo;
              </p>
              <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs text-white/70">
                <span>Headquarters: Friedrichshafen</span>
                <span className="font-semibold text-white">Global mtu Network</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Key Specifications Grid */}
      <section className="w-full bg-[#f8fafc] py-14 sm:py-20 px-4 sm:px-6 md:px-12 border-b border-gray-200">
        <div className="max-w-[1540px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-xs sm:text-sm font-bold tracking-[2px] uppercase text-[#0066ff] mb-2">
              Power Benchmarks
            </h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#001438] tracking-tight">
              mtu Technical Specifications &amp; Scale
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {keySpecs.map((spec, idx) => (
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

      {/* 5. Signature Power Programs */}
      <section id="power-programs" className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 md:px-12 border-b border-gray-100">
        <div className="max-w-[1540px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-xs sm:text-sm font-bold tracking-[2px] uppercase text-[#0066ff] mb-2">
              Solutions in Action
            </h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#001438] tracking-tight">
              Signature mtu Power Programs
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {powerPrograms.map((prog) => (
              <div
                key={prog.title}
                className="bg-gray-50 rounded-sm border border-gray-200/80 p-8 flex flex-col justify-between hover:bg-white hover:border-[#0066ff] hover:shadow-xl transition-all group"
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-[#001e62] mb-4">
                    {prog.status}
                  </span>
                  <h4 className="text-2xl font-bold text-[#001438] mb-3 group-hover:text-[#0066ff] transition-colors">
                    {prog.title}
                  </h4>
                  <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed mb-6 font-normal">
                    {prog.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-200/60 bg-blue-50/50 -mx-8 -mb-8 p-6 rounded-b-sm">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0066ff] mb-1">
                    {prog.stat}
                  </div>
                  <p className="text-xs text-gray-700 font-medium leading-relaxed">
                    {prog.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Clean Energy & High-Tech Facilities */}
      <section id="clean-energy" className="w-full bg-[#f8fafc] py-16 sm:py-24 px-4 sm:px-6 md:px-12 border-b border-gray-200">
        <div className="max-w-[1540px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-xs sm:text-sm font-bold tracking-[2px] uppercase text-[#0066ff] mb-2">
              The Energy Transition
            </h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#001438] tracking-tight mb-6">
              Sustainable power from Friedrichshafen to global ports
            </h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              Rolls Royces Power Systems is pioneering clean energy technologies to achieve net zero carbon power. Through Hydrotreated Vegetable Oil (HVO), hydrogen fuel cells, and scalable containerized battery storage, we empower customers to decarbonize operations immediately.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 font-normal">
              Our mtu EnergyPack systems and intelligent automation optimize power distribution, preventing blackout disruptions and ensuring hospitals, financial networks, and marine vessels operate continuously with minimum environmental impact.
            </p>

            <div className="space-y-4">
              {coreCapabilities.map((cap) => (
                <div key={cap.title} className="flex items-start gap-3 bg-white p-4 rounded-sm border border-gray-200 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold text-[#001438]">{cap.title}</h5>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[16/11] rounded-sm overflow-hidden shadow-2xl bg-gray-900 group">
              <img
                src="/assets/images/series-8000.jpg"
                alt="mtu high-speed clean engine assembly in Friedrichshafen"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-3 py-1 rounded bg-[#0066ff] text-xs font-bold uppercase tracking-wider inline-block mb-2">
                  Maritime Innovation
                </span>
                <h4 className="text-xl sm:text-2xl font-bold mb-1">
                  10,000 kW High-Speed Clean Power
                </h4>
                <p className="text-xs sm:text-sm text-white/80 font-normal">
                  The flagship mtu Series 8000 powering modern naval patrol vessels, fast passenger ferries, and offshore security ships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Other Divisions Quick Switcher */}
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
            <Link
              href="/products-services/submarines"
              className="group relative aspect-[16/9] sm:aspect-[16/10] rounded-sm overflow-hidden shadow-md block bg-gray-950"
            >
              <img
                src="/assets/images/submarine-hero.jpg"
                alt="Rolls Royces Submarines"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/60 group-hover:from-black/90 transition-colors" />
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="p-1.5 rounded-full bg-white/20 backdrop-blur-md">
                  <Anchor className="w-4 h-4 text-white" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-white/90">
                  Explore Division
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2 group-hover:text-cyan-300 transition-colors">
                  Submarines
                </h4>
                <p className="text-xs sm:text-sm text-white/80 line-clamp-2 font-normal">
                  Naval nuclear propulsion plants delivering mission-critical silent endurance for the UK and allied subsurface fleets.
                </p>
              </div>
            </Link>

            <Link
              href="/products-services/defence"
              className="group relative aspect-[16/9] sm:aspect-[16/10] rounded-sm overflow-hidden shadow-md block bg-gray-950"
            >
              <img
                src="/assets/images/prod-defence.jpg"
                alt="Rolls Royces Defence combat aircraft"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/60 group-hover:from-black/90 transition-colors" />
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="p-1.5 rounded-full bg-white/20 backdrop-blur-md">
                  <Shield className="w-4 h-4 text-white" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-white/90">
                  Explore Division
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2 group-hover:text-cyan-300 transition-colors">
                  Defence
                </h4>
                <p className="text-xs sm:text-sm text-white/80 line-clamp-2 font-normal">
                  Powering combat aircraft, naval vessels, and tactical fleets for over 100 armed forces worldwide.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Contact Banner */}
      <section className="w-full bg-[#001438] text-white py-16 px-4 sm:px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-4">
            Connect with Rolls Royces Power Systems
          </h2>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto mb-8 font-normal">
            For marine propulsion, microgrid battery energy storage, and critical data centre emergency power solutions, contact our team.
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

      {/* Search Modal */}
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

