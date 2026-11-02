"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";
import AccessibilityModal from "@/components/AccessibilityModal";
import {
  ChevronRight,
  Shield,
  Zap,
  Globe,
  Compass,
  Leaf,
  Target,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Lock,
  Anchor,
  Plane,
  Cpu,
  Mail,
  Award,
  Check,
  Activity,
  Layers,
  Sliders,
  Flame,
  Radio,
  ExternalLink,
  ChevronDown,
  Info,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MissionPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccModalOpen, setIsAccModalOpen] = useState(false);
  const [selectedPillarFilter, setSelectedPillarFilter] = useState<"all" | "powering" | "protecting" | "connecting">("all");
  const [activeTelemetryTab, setActiveTelemetryTab] = useState<number>(0);
  const [activeHorizonTab, setActiveHorizonTab] = useState<"both" | "2030" | "2050">("both");
  const [activeMetricHover, setActiveMetricHover] = useState<string | null>(null);

  const missionPillars = [
    {
      id: "powering",
      title: "POWERING",
      tagline: "Propulsion & Distributed Energy",
      subtitle: "Powering Vital Global Mobility & Resilient Energy",
      icon: <Zap className="w-6 h-6 text-cyan-300" />,
      color: "from-cyan-900/60 via-[#001e62] to-[#001438]",
      badgeColor: "bg-cyan-500/15 text-cyan-300 border-cyan-400/30",
      accentGlow: "group-hover:border-cyan-400/60 group-hover:shadow-[0_20px_50px_rgba(6,182,212,0.2)]",
      image: "/assets/images/trent-xe.jpg",
      link: "/products-services/power-systems",
      linkText: "Explore Power Systems",
      description:
        "We engineer high-efficiency, safety-critical propulsion and clean power systems that drive modern civilization. From world-benchmark Trent civil turbofans carrying millions across oceans to mtu microgrids delivering resilient power to hospitals and cloud data centres, Rolls Royces power systems keep the world moving.",
      capabilities: [
        "Trent Civil Turbofans",
        "mtu High-Speed Engines",
        "Microgrid Power Generation",
        "Hydrogen & Hybrid Systems",
      ],
      metrics: [
        { label: "Civil Aero Fleet Hours", value: "100 Million+", detail: "Safely logged across 50,000 global commercial routes" },
        { label: "Max Engine Output", value: "Up to 10,000 kW", detail: "Continuous power for marine vessels and mission-critical grids" },
        { label: "SAF Compatibility", value: "100% Certified", detail: "Proven drop-in compatibility across all active production families" },
      ],
    },
    {
      id: "protecting",
      title: "PROTECTING",
      tagline: "Sovereign Defense & Deterrence",
      subtitle: "Protecting Sovereign Freedom on Land, at Sea and in the Air",
      icon: <Shield className="w-6 h-6 text-blue-300" />,
      color: "from-blue-950/70 via-[#001438] to-slate-950",
      badgeColor: "bg-blue-500/15 text-blue-300 border-blue-400/30",
      accentGlow: "group-hover:border-blue-400/60 group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.2)]",
      image: "/assets/images/submarine-hero.jpg",
      link: "/products-services/submarines",
      linkText: "Explore Submarine & Naval Reactors",
      description:
        "Rolls Royces provides the sovereign defense and nuclear propulsion foundations safeguarding democratic allies. For more than 60 years, our naval nuclear reactors have delivered continuous at-sea deterrence for the Royal Navy, while our combat turbofans power front-line air superiority for more than 100 nations.",
      capabilities: [
        "PWR Naval Nuclear Reactors",
        "EJ200 Eurofighter Typhoon",
        "Naval Gas Turbines (MT30)",
        "Combat Stealth Propulsion",
      ],
      metrics: [
        { label: "Continuous Deterrence", value: "60+ Years Sovereign", detail: "Uninterrupted continuous at-sea deterrent for allied defense" },
        { label: "Military Engines Active", value: "16,000+ Units", detail: "Powering combat aircraft, naval vessels, and tactical armor" },
        { label: "Allied Nations Powered", value: "100+ Armed Forces", detail: "Certified partner to sovereign armed services worldwide" },
      ],
    },
    {
      id: "connecting",
      title: "CONNECTING",
      tagline: "Global Corridors & Sustainable Flight",
      subtitle: "Connecting People, Economies and Continents Safely",
      icon: <Globe className="w-6 h-6 text-emerald-300" />,
      color: "from-emerald-950/60 via-[#001e62] to-[#001438]",
      badgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-400/30",
      accentGlow: "group-hover:border-emerald-400/60 group-hover:shadow-[0_20px_50px_rgba(16,185,129,0.2)]",
      image: "/assets/images/news-a350f.jpg",
      link: "/products-services/defence",
      linkText: "Explore Global Aviation Solutions",
      description:
        "Long-distance flight and maritime transit bridge cultures, families, and global trade corridors. Rolls Royces delivers the reliability, fuel economy, and acoustic tranquility that enable airlines and shipping fleets to connect cities safely, predictably, and sustainably every hour of every day.",
      capabilities: [
        "Ultra-Long-Haul Civil Flights",
        "Global Airline Fleet Care",
        "Transoceanic Maritime Corridors",
        "Acoustic & Noise Footprint Reduction",
      ],
      metrics: [
        { label: "Daily Global Flights Powered", value: "Thousands Daily", detail: "Connecting 150+ countries with uncompromised uptime" },
        { label: "Engine Reliability Record", value: "99.9% On-Wing", detail: "Engine Health Monitoring predicts issues before take-off" },
        { label: "Worldwide Service Network", value: "150+ Hubs", detail: "24/7 Airline Operations Centres in Derby and Singapore" },
      ],
    },
  ];

  const telemetryShowcases = [
    {
      name: "UltraFan® Next-Gen Architecture",
      category: "Aviation Decarbonization",
      image: "/assets/images/ultrafan-blue.jpg",
      status: "FULL-SCALE TESTED",
      stats: [
        { label: "Fuel Efficiency Improvement", val: "+25% vs Trent 1st Gen" },
        { label: "Power Gearbox Capacity", val: "64 Megawatts Max" },
        { label: "Fan Diameter", val: "140 Inches Carbon Composite" },
      ],
      description:
        "UltraFan is the cornerstone of sustainable commercial aviation. Combining scalable geared turbofan architecture, carbon titanium blades, and ceramic matrix composites, it is certified to run on 100% Sustainable Aviation Fuel from its very first flight.",
    },
    {
      name: "Small Modular Reactors (SMRs)",
      category: "Clean Baseload Energy",
      image: "/assets/images/smr-reactor.jpg",
      status: "REGULATORY STEP 2 ACTIVE",
      stats: [
        { label: "Clean Baseload Power", val: "470 Megawatts" },
        { label: "Homes Powered Per Unit", val: "1 Million Households" },
        { label: "Factory Modular Construction", val: "90% Factory Built" },
      ],
      description:
        "Rolls Royces SMRs redefine nuclear energy by manufacturing standardized factory-built components shipped via road, slashing capital risk and delivering predictable, carbon-free baseload electricity for 60+ operational years.",
    },
    {
      name: "Naval Nuclear PWR3 Propulsion",
      category: "Sovereign Strategic Deterrence",
      image: "/assets/images/submarine-hero.jpg",
      status: "ACTIVE VANGUARD & DREADNOUGHT",
      stats: [
        { label: "Refueling Required", val: "Zero Lifetime Refueling" },
        { label: "Patrol Endurance", val: "Unlimited Submerged" },
        { label: "Acoustic Signature", val: "Ultra-Quiet Stealth" },
      ],
      description:
        "For over six decades, Rolls Royces has provided the sole sovereign nuclear reactor systems for the UK's ballistic submarine fleet, guaranteeing uncompromised peace, sovereign deterrence, and deep undersea mastery.",
    },
    {
      name: "Space Microreactors & Exploration",
      category: "Extraterrestrial Power Systems",
      image: "/assets/images/framework-tech.jpg",
      status: "UK SPACE AGENCY PROGRAM",
      stats: [
        { label: "Power Output Density", val: "1 to 10 Megawatts" },
        { label: "Target Application", val: "Lunar & Deep Space Outposts" },
        { label: "Operational Life", val: "10+ Years Continuous" },
      ],
      description:
        "Leveraging miniature nuclear physics and advanced heat-pipe technology, Rolls Royces is developing portable microreactors to provide resilient continuous power for scientific lunar bases, deep planetary science missions, and orbital platforms.",
    },
  ];

  const coreValues = [
    {
      title: "Safety First & Zero Compromise",
      code: "VAL-01",
      icon: <Lock className="w-5 h-5 text-cyan-400" />,
      desc: "In safety-critical aviation, naval nuclear, and power generation environments, safety is our inviolable bedrock. We test, verify, and validate beyond standard limits to safeguard human life.",
      badge: "Standard ISO 9001 / AS9100",
      accent: "hover:border-cyan-400 group-hover:text-cyan-400",
    },
    {
      title: "Precision Engineering & Innovation",
      code: "VAL-02",
      icon: <Cpu className="w-5 h-5 text-blue-400" />,
      desc: "Over a century of British engineering excellence combined with advanced additive manufacturing, single-crystal superalloys, and AI-powered predictive diagnostics.",
      badge: "Aerospace Pioneer Class",
      accent: "hover:border-blue-400 group-hover:text-blue-400",
    },
    {
      title: "Net Zero Environmental Stewardship",
      code: "VAL-03",
      icon: <Leaf className="w-5 h-5 text-emerald-400" />,
      desc: "Placing decarbonization at the core of all R&D investments: developing UltraFan, Small Modular Reactors (SMRs), microgrid batteries, and hydrogen combustion to protect our planet.",
      badge: "UN Race to Zero Committed",
      accent: "hover:border-emerald-400 group-hover:text-emerald-400",
    },
    {
      title: "Integrity, Transparency & Trust",
      code: "VAL-04",
      icon: <Award className="w-5 h-5 text-amber-400" />,
      desc: "Fostering long-term relationships with sovereign governments, commercial customers, suppliers, and communities through strict governance, ethical conduct, and mutual respect.",
      badge: "Sovereign Trust Rating",
      accent: "hover:border-amber-400 group-hover:text-amber-400",
    },
  ];

  const strategicHorizons = [
    {
      year: "2030",
      badge: "Near-Term Horizon",
      status: "IN PROGRESS — 74% ACHIEVED",
      title: "Operational Net Zero & Clean Fleet Readiness",
      summary: "Transforming internal manufacturing emissions and certifying full fleet SAF operational compatibility.",
      metrics: [
        { label: "Manufacturing Carbon Cut", progress: "88%" },
        { label: "SAF In-Production Engine Fit", progress: "100%" },
        { label: "SMR Licensing Milestones", progress: "65%" },
      ],
      points: [
        "100% net zero greenhouse gas emissions across all Rolls Royces global manufacturing and testing facilities.",
        "100% of all in-production civil aero-engines and mtu engines fully compatible with pure Sustainable Aviation Fuel (SAF).",
        "Commercial deployment of standardized Rolls Royces Small Modular Reactors (SMRs) delivering clean baseload electricity.",
        "Scaling multi-megawatt battery energy storage and hybrid microgrids across critical infrastructure.",
      ],
    },
    {
      year: "2050",
      badge: "Long-Term Vision",
      status: "CORE STRATEGIC MANDATE",
      title: "Net Zero Product Lifecycle & Advanced Flight",
      summary: "Pioneering hydrogen-combustion civil flight, space microreactors, and closed-loop aerospace metallurgy.",
      metrics: [
        { label: "Net Zero Fleet Lifecycle", progress: "Target 100%" },
        { label: "Direct H2 Flight Feasibility", progress: "Phase 3 Testing" },
        { label: "Alloy Circular Metallurgy", progress: "85% Recycled" },
      ],
      points: [
        "Net zero carbon lifecycle across all products, flights, and operations throughout the worldwide fleet.",
        "Commercial deployment of hydrogen-combustion architectures for short-to-medium haul civil aviation.",
        "Space nuclear microreactors providing auxiliary power for scientific planetary exploration.",
        "Closed-loop circular materials economy recycling advanced titanium and nickel aerospace alloys.",
      ],
    },
  ];

  const filteredPillars =
    selectedPillarFilter === "all"
      ? missionPillars
      : missionPillars.filter((p) => p.id === selectedPillarFilter);

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col selection:bg-[#001e62] selection:text-white antialiased">
      {/* 1. Main Navigation Bar */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen((prev) => !prev)}
        isSearchOpen={isSearchOpen}
        activePath="/mission"
      />

      {/* 2. Breadcrumbs Bar */}
      <div className="w-full bg-[#f8fafc] border-b border-gray-200/80 py-3.5 px-4 sm:px-6 md:px-12 text-sm">
        <div className="max-w-[1540px] mx-auto flex items-center gap-2 text-gray-600 font-normal">
          <Link href="/" className="hover:text-[#001e62] transition-colors flex items-center gap-1.5">
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 stroke-[2.2] text-gray-400" />
          <span className="text-[#001e62] font-semibold">Our Mission</span>
        </div>
      </div>

      {/* 3. Hero Header Section: Deep Cosmic Blue with Animated Visual Shimmer & Interactive Stats */}
      <section className="relative w-full bg-[#00102e] text-white py-20 sm:py-28 lg:py-36 px-4 sm:px-6 md:px-12 overflow-hidden border-b border-blue-900/40">
        {/* Cinematic Backdrop Glow & Precision Grid */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#0066ff_1.2px,transparent_1.2px)] [background-size:28px_28px] opacity-25" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#0055ff]/20 rounded-full blur-[150px]" />
          <div className="absolute -bottom-24 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[130px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#00102e]/60 via-[#00102e]/95 to-[#00102e]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Status Badge with Live Radar Pulse */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-950/70 backdrop-blur-md border border-cyan-400/40 text-cyan-300 text-xs font-semibold uppercase tracking-[2px] mb-8 shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:border-cyan-300 transition-all cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <Compass className="w-4 h-4 text-cyan-300" />
            <span>Rolls Royces Purpose &amp; Mission</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-light tracking-tight leading-[1.08] mb-8 text-white"
          >
            A force for progress;{" "}
            <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-white hover:from-white hover:to-cyan-200 transition-all duration-500">
              powering, protecting and connecting
            </span>{" "}
            people everywhere.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl lg:text-2xl font-light text-cyan-100/90 leading-relaxed max-w-3xl mx-auto mb-10"
          >
            We pioneer the power that matters. Creating cleaner, safer, and more competitive power and propulsion solutions to meet society&apos;s most vital technological needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#pillars"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0066ff] to-[#0047b3] hover:from-[#0052cc] hover:to-[#003d99] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-md shadow-[0_10px_25px_rgba(0,102,255,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10">Explore Our 3 Pillars</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </a>

            <a
              href="#telemetry"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-md border border-white/20 hover:border-cyan-300/60 transition-all duration-300 backdrop-blur-md hover:scale-105 active:scale-95"
            >
              <Activity className="w-4 h-4 text-cyan-400" />
              <span>Technology Matrix</span>
            </a>

            <a
              href="#horizons"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/15 text-white/90 hover:text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-md border border-white/15 hover:border-white/40 transition-all duration-300 backdrop-blur-md hover:scale-105 active:scale-95"
            >
              <Target className="w-4 h-4 text-cyan-400" />
              <span>2030 &amp; 2050 Horizons</span>
            </a>
          </motion.div>
        </div>

        {/* Global Impact Interactive Metrics Strip with Hover Glow & Lift */}
        <div className="relative z-10 max-w-[1440px] mx-auto mt-16 sm:mt-24 pt-10 border-t border-white/15 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              id: "hours",
              number: "100M+",
              label: "Commercial Flight Hours",
              hint: "Proven across Boeing & Airbus platforms worldwide",
              icon: <Plane className="w-4 h-4 text-cyan-400" />,
            },
            {
              id: "deterrence",
              number: "60+ Years",
              label: "Nuclear Deterrence Patrols",
              hint: "Sovereign propulsion guarding free world allies",
              icon: <Shield className="w-4 h-4 text-blue-400" />,
            },
            {
              id: "forces",
              number: "100+",
              label: "Allied Armed Forces",
              hint: "Land, sea, and combat airspace supremacy",
              icon: <Anchor className="w-4 h-4 text-sky-400" />,
            },
            {
              id: "netzero",
              number: "Net Zero",
              label: "Targeted by 2050",
              hint: "UltraFan, SMRs & pure SAF compatibility",
              icon: <Leaf className="w-4 h-4 text-emerald-400" />,
            },
          ].map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 * idx }}
              onMouseEnter={() => setActiveMetricHover(stat.id)}
              onMouseLeave={() => setActiveMetricHover(null)}
              className="group relative p-6 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-cyan-400/60 transition-all duration-300 text-left cursor-default hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,102,255,0.25)]"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-[#0066ff]/20 group-hover:border-cyan-400/50 transition-colors">
                  {stat.icon}
                </span>
                <span className="text-[10px] tracking-widest font-mono text-cyan-300/70 uppercase">
                  METRIC 0{idx + 1}
                </span>
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-cyan-200 group-hover:text-white transition-colors mb-1 tracking-tight">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm uppercase tracking-wider text-white/85 font-semibold group-hover:text-cyan-300 transition-colors">
                {stat.label}
              </div>
              <div className="text-[11px] text-white/60 font-normal mt-2 leading-relaxed group-hover:text-white/80 transition-colors">
                {stat.hint}
              </div>

              {/* Hover Indicator Line */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. The 3 Core Pillars Section with Interactive Filters, 3D Hover & Image Zoom */}
      <section id="pillars" className="w-full bg-[#f8fafc] py-20 sm:py-28 px-4 sm:px-6 md:px-12 border-b border-gray-200">
        <div className="max-w-[1540px] mx-auto">
          {/* Header & Pillar Interactive Switcher */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-[2.5px] uppercase text-[#0066ff] block mb-3">
              The Foundations of Our Purpose
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#001438] tracking-tight mb-4">
              Three Pillars of the Rolls Royces Mission
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal mb-8">
              Every engine we build, patent we file, and sovereign contract we fulfill is anchored in our commitment to power, protect, and connect humanity.
            </p>

            {/* Interactive Pillar Filter Pills */}
            <div className="inline-flex p-1.5 rounded-xl bg-gray-200/80 border border-gray-300/70 shadow-inner">
              {[
                { key: "all", label: "All 3 Pillars" },
                { key: "powering", label: "1. Powering" },
                { key: "protecting", label: "2. Protecting" },
                { key: "connecting", label: "3. Connecting" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setSelectedPillarFilter(tab.key as any)}
                  className={`px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 ${
                    selectedPillarFilter === tab.key
                      ? "bg-[#001e62] text-white shadow-md scale-100"
                      : "text-gray-700 hover:text-[#001e62] hover:bg-white/60"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Pillars Card Grid */}
          <div className="space-y-12 lg:space-y-16">
            <AnimatePresence>
              {filteredPillars.map((pillar, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={pillar.id}
                    layout
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className={`group bg-white rounded-2xl shadow-xl hover:shadow-2xl border border-gray-200/90 hover:border-blue-400/50 transition-all duration-500 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch ${pillar.accentGlow}`}
                  >
                    {/* Left/Right Image Container with dynamic hover zoom & tech badge */}
                    <div
                      className={`lg:col-span-5 relative min-h-[340px] lg:min-h-full overflow-hidden bg-gray-950 ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10 group-hover:via-black/20 transition-all duration-500" />

                      {/* Technical coordinate watermark */}
                      <div className="absolute top-5 left-6 text-[10px] font-mono tracking-widest text-white/50 uppercase">
                        DOMAIN: {pillar.id.toUpperCase()} // RR-MISSION-SYS
                      </div>

                      {/* Floating Pillar Identifier */}
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-2.5 backdrop-blur-md border ${pillar.badgeColor}`}>
                          {pillar.icon}
                          <span>Pillar 0{idx + 1}</span>
                        </div>
                        <h4 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1">
                          {pillar.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-cyan-200/90 font-medium tracking-wide">
                          {pillar.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Content Container */}
                    <div
                      className={`lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs font-bold uppercase tracking-widest text-[#0066ff] flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Core Mission Charter</span>
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#001438] tracking-tight mb-4 group-hover:text-[#002888] transition-colors">
                          {pillar.subtitle}
                        </h3>

                        <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed font-normal mb-6">
                          {pillar.description}
                        </p>

                        {/* Interactive Capabilities Chips */}
                        <div className="mb-8">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block mb-2.5">
                            Key Mission Capabilities
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {pillar.capabilities.map((cap) => (
                              <span
                                key={cap}
                                className="px-3 py-1 rounded-md text-xs font-medium bg-gray-100 hover:bg-[#001e62] hover:text-white text-gray-800 border border-gray-200 transition-all duration-300 cursor-default hover:scale-105"
                              >
                                {cap}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Interactive Telemetry Metrics */}
                      <div className="pt-6 border-t border-gray-100">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                          {pillar.metrics.map((m) => (
                            <div
                              key={m.label}
                              className="group/metric p-4 rounded-xl bg-slate-50 hover:bg-[#001e62] border border-gray-200/80 hover:border-transparent transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg hover:-translate-y-1"
                            >
                              <div className="text-xl sm:text-2xl font-bold text-[#001e62] group-hover/metric:text-white transition-colors mb-0.5">
                                {m.value}
                              </div>
                              <div className="text-xs font-semibold text-gray-600 group-hover/metric:text-cyan-300 transition-colors uppercase tracking-wider mb-1">
                                {m.label}
                              </div>
                              <div className="text-[11px] text-gray-500 group-hover/metric:text-white/80 transition-colors line-clamp-2">
                                {m.detail}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Direct Division Link Button */}
                        <div className="flex items-center justify-between">
                          <Link
                            href={pillar.link}
                            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0066ff] hover:text-[#001e62] transition-colors group/link"
                          >
                            <span>{pillar.linkText}</span>
                            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
                          </Link>
                          <span className="text-[11px] font-mono text-gray-400">
                            DOC-ID: RR-{pillar.id.toUpperCase()}-2026
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 5. NEW: Interactive Technology Matrix & Live Systems Telemetry Console */}
      <section id="telemetry" className="w-full bg-[#000c24] text-white py-20 sm:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden">
        {/* Ambient Dark Tech Background */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(#0088ff_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-[1540px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/60 border border-blue-400/30 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-4">
              <Sliders className="w-3.5 h-3.5" />
              <span>Technology Demonstrator Telemetry</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight mb-4">
              Advanced Engineering in Active Execution
            </h2>
            <p className="text-cyan-100/80 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
              Click through our active propulsion and energy architectures turning our strategic mission into real-world technological sovereignty.
            </p>
          </div>

          {/* Interactive Domain Switcher Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 max-w-5xl mx-auto">
            {telemetryShowcases.map((item, idx) => (
              <button
                key={item.name}
                onClick={() => setActiveTelemetryTab(idx)}
                className={`p-4 rounded-xl text-left border transition-all duration-300 group ${
                  activeTelemetryTab === idx
                    ? "bg-[#001e62] border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] scale-[1.02]"
                    : "bg-white/[0.04] border-white/10 hover:bg-white/[0.08] hover:border-white/30"
                }`}
              >
                <div className="text-[10px] font-mono tracking-widest uppercase text-cyan-300 mb-1">
                  DOMAIN 0{idx + 1}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-200 transition-colors line-clamp-1">
                  {item.name}
                </div>
                <div className="text-[11px] text-white/60 line-clamp-1 mt-0.5">
                  {item.category}
                </div>
              </button>
            ))}
          </div>

          {/* Active Telemetry Showcase Card */}
          <motion.div
            key={activeTelemetryTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="bg-white/[0.06] backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl"
          >
            {/* Image Preview */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden bg-slate-950">
              <img
                src={telemetryShowcases[activeTelemetryTab].image}
                alt={telemetryShowcases[activeTelemetryTab].name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/20" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold tracking-wider mb-2">
                  <Radio className="w-3.5 h-3.5 animate-pulse" />
                  <span>{telemetryShowcases[activeTelemetryTab].status}</span>
                </span>
                <div className="text-xl sm:text-2xl font-bold text-white">
                  {telemetryShowcases[activeTelemetryTab].name}
                </div>
              </div>
            </div>

            {/* Telemetry Stats & Narrative */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 rounded-md bg-blue-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-400/30">
                  {telemetryShowcases[activeTelemetryTab].category}
                </div>
                <h3 className="text-2xl sm:text-3xl font-light text-white mb-4">
                  {telemetryShowcases[activeTelemetryTab].name}
                </h3>
                <p className="text-cyan-100/85 text-sm sm:text-base leading-relaxed font-normal mb-8">
                  {telemetryShowcases[activeTelemetryTab].description}
                </p>

                {/* 3 Metric Dials */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  {telemetryShowcases[activeTelemetryTab].stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-cyan-400/40 transition-colors"
                    >
                      <div className="text-lg sm:text-xl font-bold text-cyan-300 mb-1 font-mono">
                        {stat.val}
                      </div>
                      <div className="text-xs text-white/70 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-cyan-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Active Rolls Royces R&amp;D Investment Pipeline</span>
                </div>
                <Link
                  href="/innovation"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-300 hover:text-white transition-colors"
                >
                  <span>Explore Full Innovation Hub</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. Core Values Section with Glassmorphism & Neon Spotlight Glow */}
      <section className="w-full bg-white py-20 sm:py-28 px-4 sm:px-6 md:px-12 border-b border-gray-100">
        <div className="max-w-[1540px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-xs sm:text-sm font-bold tracking-[2.5px] uppercase text-[#0066ff] block mb-3">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#001438] tracking-tight mb-4">
              Our Inviolable Guiding Values
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
              In everything we undertake, our culture is defined by safety, innovation, environmental responsibility, and unyielding integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {coreValues.map((val, idx) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative p-8 rounded-2xl bg-slate-50/70 hover:bg-white border border-gray-200 hover:border-[#0066ff] hover:shadow-[0_20px_50px_rgba(0,102,255,0.15)] transition-all duration-400 flex flex-col justify-between hover:-translate-y-2 cursor-default overflow-hidden"
              >
                {/* Neon Accent Top Strip */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-[#0066ff] transition-all duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-100/70 group-hover:bg-[#001e62] group-hover:text-cyan-300 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-sm">
                      {val.icon}
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-gray-400 group-hover:text-[#0066ff] transition-colors font-semibold">
                      {val.code}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#001438] mb-3 group-hover:text-[#0066ff] transition-colors">
                    {val.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed font-normal mb-6">
                    {val.desc}
                  </p>
                </div>

                <div className="pt-5 border-t border-gray-200/60 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#001e62]">
                  <span className="text-[11px] text-gray-500 font-semibold">{val.badge}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 group-hover:scale-125 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Strategic 2030 & 2050 Horizons with Interactive Switcher & Progress Dials */}
      <section id="horizons" className="w-full bg-[#001233] text-white py-20 sm:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden border-b border-blue-900/40">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-15">
          <div className="absolute inset-0 bg-[radial-gradient(#0066ff_1.5px,transparent_1.5px)] [background-size:32px_32px]" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-600/10 rounded-full blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-[1540px] mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs sm:text-sm font-bold tracking-[2.5px] uppercase text-cyan-300 block mb-3">
              Strategic Roadmaps
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight mb-4">
              Our 2030 and 2050 Mission Horizons
            </h2>
            <p className="text-cyan-100/85 text-sm sm:text-base md:text-lg leading-relaxed font-normal mb-8">
              Clear milestone targets setting the benchmark for the aerospace, defense, and power industries worldwide.
            </p>

            {/* Interactive Horizon Filter Switcher */}
            <div className="inline-flex p-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
              {[
                { key: "both", label: "Comparative View" },
                { key: "2030", label: "2030 Near-Term" },
                { key: "2050", label: "2050 Vision" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveHorizonTab(tab.key as any)}
                  className={`px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 ${
                    activeHorizonTab === tab.key
                      ? "bg-[#0066ff] text-white shadow-lg scale-100"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className={`grid gap-8 lg:gap-12 ${activeHorizonTab === "both" ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1 max-w-4xl mx-auto"}`}>
            {strategicHorizons
              .filter((h) => activeHorizonTab === "both" || activeHorizonTab === h.year)
              .map((h, idx) => (
                <motion.div
                  key={h.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: idx * 0.1 }}
                  className="group bg-white/[0.05] hover:bg-white/[0.09] backdrop-blur-md border border-white/15 hover:border-cyan-400/60 rounded-2xl p-8 sm:p-12 flex flex-col justify-between transition-all duration-400 hover:shadow-[0_20px_50px_rgba(0,102,255,0.2)] hover:-translate-y-1.5"
                >
                  <div>
                    {/* Header Strip */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-5xl sm:text-6xl font-light text-cyan-300 font-mono tracking-tight group-hover:text-white transition-colors">
                        {h.year}
                      </span>
                      <div className="text-right">
                        <span className="px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-200 text-xs font-bold uppercase tracking-wider block mb-1">
                          {h.badge}
                        </span>
                        <span className="text-[10px] font-mono text-cyan-300/80 tracking-widest uppercase">
                          {h.status}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                      {h.title}
                    </h3>

                    <p className="text-sm text-cyan-100/80 mb-6 leading-relaxed">
                      {h.summary}
                    </p>

                    {/* Progress Metrics Strip */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 p-4 rounded-xl bg-black/20 border border-white/10">
                      {h.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="text-base sm:text-lg font-bold text-cyan-300 font-mono">
                            {m.progress}
                          </div>
                          <div className="text-[11px] text-white/70 uppercase tracking-wide">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Milestone Points */}
                    <ul className="space-y-4 text-sm sm:text-base text-white/85 font-normal mb-8">
                      {h.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-3 group/item">
                          <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform" />
                          <span className="leading-relaxed group-hover/item:text-white transition-colors">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-white/15 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-cyan-200">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Certified Rolls Royces Corporate Target</span>
                    </span>
                    <Sparkles className="w-4 h-4 text-cyan-400 group-hover:rotate-45 transition-transform" />
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* 8. Luxury Engineering Manifesto Banner with Shimmer Effect */}
      <section className="w-full bg-[#f8fafc] py-20 sm:py-24 px-4 sm:px-6 md:px-12 border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto relative group">
          {/* Subtle Glow behind the card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-700" />

          <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200/90 p-8 sm:p-14 lg:p-16 text-center overflow-hidden">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#001e62] to-[#0066ff] text-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/25 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              <Compass className="w-8 h-8 stroke-[2]" />
            </div>

            <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#0066ff] block mb-2">
              The Rolls Royces Manifesto
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#001438] tracking-tight mb-4">
              Join Us in Pioneering the Future of Power
            </h2>

            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto mb-10 font-normal leading-relaxed">
              Whether partner navies, commercial airlines, clean energy innovators, or talented engineers seeking to make a lasting global difference, Rolls Royces invites you to shape the next era of high-integrity technology.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="group/btn inline-flex items-center gap-2 px-8 py-4 bg-[#0066ff] hover:bg-[#0052cc] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-md shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Executive Team</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about#our-leadership"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-100 hover:bg-gray-200 text-[#001438] text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-md border border-gray-300 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Meet Our Leadership Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-[#0066ff] text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-md border border-[#0066ff]/30 hover:border-[#0066ff] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Careers &amp; Engineering Roles</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
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