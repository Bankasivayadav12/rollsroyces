"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";
import StoryDrawer, { StoryData } from "@/components/StoryDrawer";
import AccessibilityModal from "@/components/AccessibilityModal";
import {
  ChevronRight,
  Play,
  X,
  ArrowRight,
  Mail,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  Award,
  Briefcase,
  User,
  Sparkles,
  MapPin,
  Send,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeStory, setActiveStory] = useState<StoryData | null>(null);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isAccModalOpen, setIsAccModalOpen] = useState(false);
  const [activeSubTab, setActiveSubTab] = useState("about-us");
  const [selectedTeamCategory, setSelectedTeamCategory] = useState<string>("all");
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2500);
  };

  const handleOpenStory = (story: StoryData) => {
    setActiveStory(story);
    setIsStoryOpen(true);
  };

  const aboutStories = {
    framework: {
      title: "Our Strategic Framework",
      category: "Transformation Framework",
      image: "/assets/images/framework-tech.jpg",
      description:
        "Our near-term focus areas and strategic priorities are informed by our business environment. Our strategy is delivered by our people, enabled by our business model, enacted by our business units and measured through our KPIs. It is underpinned by strong governance and leadership, which manages risk and uncertainty, and creates value for all our stakeholders.",
      highlight: "Underpinned by four strategic pillars: Portfolio Reshaping, Commercial Optimisation, Cost Efficiencies, and Strategic Investments.",
      specs: [
        { label: "Strategic Pillars", value: "4 Core Pillars" },
        { label: "Governance Standard", value: "UK Corporate Code" },
        { label: "Efficiency Savings", value: "£400m - £500m" },
        { label: "Capital Allocation", value: "Balanced & Disciplined" },
      ],
    },
    research: {
      title: "Rolls Royces Global Research & Innovation",
      category: "Research & Development",
      image: "/assets/images/inside-research.jpg",
      description:
        "Rolls Royces operates an international network of University Technology Centres (UTCs) and Advanced Manufacturing Research Centres. Over 1,000 PhD researchers and senior scientists collaborate with our engineering hubs to pioneer breakthroughs in high-temperature materials, electrification, artificial intelligence, and aerodynamic modeling.",
      highlight: "Investing over £1.2 billion annually in research and breakthrough technology development.",
      specs: [
        { label: "University Technology Centres", value: "28 Global UTCs" },
        { label: "Annual R&D Investment", value: "£1.2+ Billion" },
        { label: "Active Patents Portfolio", value: "Over 5,000 Patents" },
        { label: "Global Academic Partners", value: "Top 30 Universities" },
      ],
    },
    history: {
      title: "Our History: 1906 to 2026",
      category: "Heritage & Milestones",
      image: "/assets/images/inside-history.jpg",
      description:
        "Founded in 1906 by Charles Rolls and Henry Royce, Rolls Royces has continuously redefined aviation and engineering excellence. From the legendary Merlin engine powering the Spitfire in World War II, to the world's first commercial turboprop, the pioneering RB211 three-shaft turbofan, and the modern Trent family and naval nuclear reactors.",
      highlight: "120 years of relentless engineering innovation and setting global speed, endurance, and power records.",
      specs: [
        { label: "Founded", value: "1906 by Rolls & Royce" },
        { label: "Merlin V12 Engine", value: "150,000+ Produced" },
        { label: "First Jet Flight", value: "1942 Welland Engine" },
        { label: "Global Milestones", value: "120 Years of Excellence" },
      ],
    },
    heritageTrust: {
      title: "The Rolls Royces Heritage Trust",
      category: "Engineering Heritage",
      image: "/assets/images/inside-leader.jpg",
      description:
        "The Rolls Royces Heritage Trust preserves and celebrates the extraordinary history and engineering heritage of Rolls Royces and its ancestral companies. Operating technical branches and museums across Derby, Bristol, Coventry, and Indianapolis, the Trust maintains vast archives of engineering drawings, historic engines, and oral histories.",
      highlight: "Preserving over 100 years of irreplaceable aviation, marine, and automotive engineering heritage.",
      specs: [
        { label: "Global Branches", value: "6 Heritage Branches" },
        { label: "Historic Engine Exhibits", value: "300+ Preserved Engines" },
        { label: "Archive Documents", value: "Over 2 Million Records" },
        { label: "Volunteer Experts", value: "1,500+ Engineers" },
      ],
    },
  };

  const subNavLinks = [
    { id: "about-us", label: "About us" },
    { id: "our-leadership", label: "Our team & leadership" },
    { id: "our-businesses", label: "Our businesses" },
    { id: "our-strategic-framework", label: "Our strategic framework" },
    { id: "inside-rolls-royce", label: "Inside Rolls Royces" },
  ];

  const teamMembers = [
    {
      id: "pritham-mital",
      name: "Pritham Mital",
      role: "CEO of Rolls Royces / Asia, Gulf Countries & Africa",
      category: "leadership",
      categoryLabel: "Executive Leadership",
      department: "Asia, Gulf & Africa Executive Leadership",
      region: "Asia, Gulf & Africa",
      email: "RollsRoyces@rollsroyces.com",
      gradient: "from-[#001438] via-[#001e62] to-[#0a2f8c]",
      bio: "Directs Rolls Royces commercial strategy, regional operations, and enterprise programmes across Asia, Gulf countries, and Africa.",
      initials: "PM",
    },
    {
      id: "agrwal-ch",
      name: "Agrwal.CH",
      role: "Indian Head",
      category: "leadership",
      categoryLabel: "National Leadership",
      department: "India Corporate Leadership",
      region: "India",
      email: "RollsRoyces@rollsroyces.com",
      gradient: "from-[#064e3b] via-[#001e62] to-[#047857]",
      bio: "Oversees Rolls Royces nationwide operations across India, manufacturing centres of excellence, and aerospace supply partnerships.",
      initials: "AC",
    },
    {
      id: "denion-mishra",
      name: "Denion Mishra",
      role: "South India Head",
      category: "leadership",
      categoryLabel: "Regional Leadership",
      department: "Southern Regional Operations",
      region: "South India",
      email: "RollsRoyces@rollsroyces.com",
      gradient: "from-[#082f49] via-[#001438] to-[#0369a1]",
      bio: "Heads regional manufacturing corridors, customer service infrastructure, and technological operations across South India.",
      initials: "DM",
    },
    {
      id: "gopal-subramanium-raju",
      name: "Gopal Subramanium Raju",
      role: "Legal Advisor & Coordinator",
      category: "legal",
      categoryLabel: "Legal & Coordination",
      department: "Legal Advisory & Coordination",
      region: "Corporate Governance",
      email: "RollsRoyces@rollsroyces.com",
      gradient: "from-[#581c87] via-[#001e62] to-[#3b0764]",
      bio: "Coordinates strategic legal advisory, regulatory compliance covenants, corporate governance, and inter-divisional programme coordination.",
      initials: "GR",
    },
    {
      id: "meghana-roy",
      name: "Meghana Roy",
      role: "Metallurgist",
      category: "metallurgy",
      categoryLabel: "Metallurgy Team",
      department: "Advanced Materials & Superalloys",
      region: "Advanced Metallurgy Hub",
      email: "RollsRoyces@rollsroyces.com",
      gradient: "from-[#831843] via-[#001e62] to-[#500724]",
      bio: "Pioneers single-crystal nickel superalloy research, crystal lattice integrity, and thermal barrier coatings for high-pressure turbine systems.",
      initials: "MR",
    },
    {
      id: "namratha-rathod",
      name: "Namratha Rathod",
      role: "Metallurgist",
      category: "metallurgy",
      categoryLabel: "Metallurgy Team",
      department: "Aerospace Structural Metallurgy",
      region: "Materials Testing Division",
      email: "RollsRoyces@rollsroyces.com",
      gradient: "from-[#134e4a] via-[#001438] to-[#0f766e]",
      bio: "Specializes in titanium-aluminide composite matrices, microstructural stress diagnostics, and non-destructive alloy characterization.",
      initials: "NR",
    },
    {
      id: "nigam",
      name: "Nigam",
      role: "Metallurgist",
      category: "metallurgy",
      categoryLabel: "Metallurgy Team",
      department: "High-Temperature Alloy Engineering",
      region: "Materials Research Division",
      email: "RollsRoyces@rollsroyces.com",
      gradient: "from-[#1e1b4b] via-[#001e62] to-[#1e3a8a]",
      bio: "Specializes in metallurgical phase transformation, refractory metal engineering, and high-stress component integrity.",
      initials: "NI",
    },
  ];

  const ukTeamMembers = [
    {
      id: "oliver-wright",
      name: "Sir Oliver Wright",
      initials: "OW",
      role: "VP OF UK & GLOBAL ORBITAL ENGINEERING",
      location: "DERBY / LONDON, UNITED KINGDOM",
      gradient: "from-[#2e1065] via-[#1e1b4b] to-[#1e3a8a]",
    },
    {
      id: "james-macleod",
      name: "James MacLeod",
      initials: "JM",
      role: "SENIOR DIRECTOR OF MICROGRAVITY REFINERIES",
      location: "EDINBURGH, SCOTLAND (UK)",
      gradient: "from-[#064e3b] via-[#047857] to-[#022c22]",
    },
    {
      id: "alistair-crawford",
      name: "Alistair Crawford",
      initials: "AC",
      role: "HEAD OF ADVANCED THERMAL & PROPULSION SYSTEMS",
      location: "BRISTOL / FILTON, UNITED KINGDOM",
      gradient: "from-[#082f49] via-[#0369a1] to-[#0c4a6e]",
    },
    {
      id: "george-campbell",
      name: "Dr. George Campbell",
      initials: "GC",
      role: "LEAD QUANTUM MATERIALS & SUPERALLOYS SCIENTIST",
      location: "OXFORD / CAMBRIDGE, UNITED KINGDOM",
      gradient: "from-[#581c87] via-[#7e22ce] to-[#3b0764]",
    },
    {
      id: "edward-harrison",
      name: "Edward Harrison",
      initials: "EH",
      role: "DIRECTOR OF SOVEREIGN MISSION ACCORDS",
      location: "LONDON / DERBY, UNITED KINGDOM",
      gradient: "from-[#7c2d12] via-[#9a3412] to-[#431407]",
    },
    {
      id: "arthur-davies",
      name: "Arthur Davies",
      initials: "AD",
      role: "ADVANCED AUTOMATION & ROBOTICS ENGINEER",
      location: "BIRMINGHAM / MIDLANDS, UNITED KINGDOM",
      gradient: "from-[#831843] via-[#9d174d] to-[#500724]",
    },
    {
      id: "william-sterling",
      name: "William Sterling",
      initials: "WS",
      role: "LEAD AEROSPACE & SPACECRAFT SYSTEMS ARCHITECT",
      location: "FARNBOROUGH / LONDON, UNITED KINGDOM",
      gradient: "from-[#172554] via-[#1e40af] to-[#1e1b4b]",
    },
    {
      id: "charles-montgomery",
      name: "Charles Montgomery",
      initials: "CM",
      role: "DIRECTOR OF CRYOGENIC & HYDROGEN FUEL SYSTEMS",
      location: "DERBY, UNITED KINGDOM",
      gradient: "from-[#064e3b] via-[#059669] to-[#022c22]",
    },
    {
      id: "henry-bradley",
      name: "Henry Bradley",
      initials: "HB",
      role: "SENIOR FLIGHT PAYLOAD & PROPULSION SPECIALIST",
      location: "BRISTOL / BATH, UNITED KINGDOM",
      gradient: "from-[#134e4a] via-[#0f766e] to-[#042f2e]",
    },
    {
      id: "thomas-evans",
      name: "Thomas Evans",
      initials: "TE",
      role: "UK & GLOBAL LOGISTICS & INFRASTRUCTURE LEAD",
      location: "GLASGOW / LONDON, UNITED KINGDOM",
      gradient: "from-[#4c1d95] via-[#6d28d9] to-[#2e1065]",
    },
  ];

  const filteredTeamMembers =
    selectedTeamCategory === "all"
      ? teamMembers
      : teamMembers.filter((m) => m.category === selectedTeamCategory);

  const scrollToSection = (id: string) => {
    setActiveSubTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const businessCards = [
    {
      title: "Submarines",
      image: "/assets/images/submarine-hero.jpg",
      href: "/products-services/submarines",
      icon: (
        <svg className="w-6 h-6 stroke-white fill-none stroke-[2]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 13c0-3 3.5-5.5 8.5-5.5 4.5 0 7.5 1.5 9 3.5l2.5-1.5v4l-2.5-1.5c-1.5 2-4.5 3.5-9 3.5C5.5 15.5 2 13 2 13z" />
          <path d="M11 7.5V4h2v3.5" />
          <path d="M13 4h1.5" />
          <circle cx="7.5" cy="12.5" r="0.75" fill="white" />
          <circle cx="11" cy="12.5" r="0.75" fill="white" />
        </svg>
      ),
    },
    {
      title: "Defence",
      image: "/assets/images/prod-defence.jpg",
      href: "/products-services/defence",
      icon: (
        <svg className="w-6 h-6 stroke-white fill-none stroke-[2]" viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Power Systems",
      image: "/assets/images/series-8000.jpg",
      href: "/products-services/power-systems",
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
    <main className="w-full max-w-full overflow-x-hidden min-h-screen bg-white flex flex-col selection:bg-[#001e62] selection:text-white">
      {/* 1. Main Navigation Bar */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen((prev) => !prev)}
        isSearchOpen={isSearchOpen}
        activePath="/about"
      />

      {/* 2. Breadcrumbs Bar */}
      <div className="w-full max-w-full bg-white border-b border-gray-100 py-3.5 px-4 sm:px-6 md:px-12 text-sm overflow-hidden">
        <div className="max-w-[1540px] mx-auto flex items-center gap-2 text-gray-600 font-normal">
          <a href="/" className="hover:text-[#001e62] transition-colors">
            Home
          </a>
          <ChevronRight className="w-3.5 h-3.5 stroke-[2.2] text-gray-400" />
          <span className="text-[#001e62] font-semibold">About</span>
        </div>
      </div>

      {/* 3. About Hero Section with Spheres Visual */}
      <section className="relative w-full max-w-full min-h-[440px] sm:min-h-[520px] lg:h-[620px] bg-[#03091e] overflow-hidden">
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
              Rolls Royces
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
      <div className="w-full max-w-full bg-[#0808a3] text-white sticky top-[84px] z-30 shadow-md overflow-hidden">
        <div className="max-w-[1540px] mx-auto px-4 sm:px-6 md:px-12 flex items-center gap-4 sm:gap-8 lg:gap-10 overflow-x-auto no-scrollbar w-full max-w-full">
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
      <div id="about-us" className="w-full max-w-full overflow-hidden">
        {/* About Rolls Royces Editorial Statement */}
        <section className="w-full max-w-full bg-white py-14 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 border-b border-gray-100 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-[54px] font-light text-[#001438] tracking-[-0.5px] mb-4 sm:mb-8"
            >
              About Rolls Royces
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
              Today, we&apos;re working on a multi-year transformation to unlock our full potential. We&apos;re building on our enduring, distinctive strengths to create a high-performing, competitive, resilient and growing Rolls Royces. We will continue to design, build and maintain systems that provide mission-critical power to customers.
            </motion.p>
          </div>
        </section>

        {/* The Rolls Royces Proposition */}
        <section className="w-full max-w-full bg-white py-14 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 border-b border-gray-100 overflow-hidden">
          <div className="max-w-[1540px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-lg bg-gray-100">
                <img
                  src="/assets/images/apprentice.jpg"
                  alt="Rolls Royces engineering apprentice inspecting engine assembly"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#001438] tracking-[-0.5px] leading-tight mb-4 sm:mb-8">
                The Rolls Royces proposition
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
        <section className="w-full max-w-full bg-white py-14 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 border-b border-gray-100 overflow-hidden">
          <div className="max-w-[1540px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
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
                  alt="Rolls Royces Leadership"
                  className="relative z-10 w-full h-full object-cover rounded-sm shadow-md"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#001438] tracking-[-0.5px] leading-tight mb-4 sm:mb-6">
                Where we&apos;re going
              </h2>

              <p className="text-gray-700 text-sm sm:text-base md:text-[17px] leading-[1.75] font-normal mb-6 sm:mb-8 max-w-xl">
                Our leadership team made a public announcement about where we&apos;re going and our plans for getting there, at our Capital Markets Day on 28 November 2023. Watch the recording, browse our Virtual Exhibition, and download presentations from the day.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#our-leadership"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("our-leadership");
                  }}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#001e62] text-white hover:bg-[#0a2f8c] font-bold text-xs uppercase tracking-[1.4px] transition-all hover:scale-105 shadow-sm"
                >
                  <span>MEET OUR TEAM &amp; LEADERSHIP</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={() => scrollToSection("our-strategic-framework")}
                  className="inline-block text-[#001e62] font-bold text-xs sm:text-[14px] uppercase tracking-[1.5px] hover:text-[#0a2f8c] border-b-2 border-[#001e62] pb-1 transition-colors cursor-pointer text-left"
                >
                  LEARN MORE
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* 5b. Section: Our Leadership & Team Mates (#our-leadership) */}
      <section
        id="our-leadership"
        className="w-full max-w-full overflow-hidden bg-[#f8fafc] py-16 sm:py-20 lg:py-28 px-4 sm:px-6 md:px-12 border-b border-gray-200/80 scroll-mt-20"
      >
        <div className="max-w-[1540px] mx-auto w-full">
          {/* Top Part: UK Engineering & Global Operations Team */}
          <div className="mb-14 sm:mb-20 w-full">
            <div className="mb-8 sm:mb-10">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#001438] tracking-tight mb-3">
                UK Engineering &amp; Global Operations Team
              </h2>
              <div className="w-16 h-1 bg-[#001e62] rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 w-full">
              {ukTeamMembers.map((member, idx) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl border border-gray-200/90 shadow-xs hover:shadow-xl p-5 flex flex-col items-center text-center transition-all duration-300 group w-full min-w-0"
                >
                  {/* Circular Avatar */}
                  <div className="relative mb-4">
                    <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full p-1 bg-gradient-to-tr from-[#001e62] via-[#0052cc] to-cyan-400 shadow-md group-hover:scale-105 group-hover:shadow-lg transition-transform duration-300">
                      <div
                        className={`w-full h-full rounded-full flex items-center justify-center bg-gradient-to-br ${member.gradient} text-white border-2 border-white shadow-inner`}
                      >
                        <span className="font-bold text-lg sm:text-xl font-sans tracking-wider drop-shadow-xs">
                          {member.initials}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Member Name, Role & Location */}
                  <h5 className="text-[15px] sm:text-base font-bold text-gray-900 leading-snug group-hover:text-[#001e62] transition-colors mb-1 truncate max-w-full">
                    {member.name}
                  </h5>
                  <p className="text-[10.5px] sm:text-[11px] font-semibold text-[#0066ff] uppercase tracking-wider leading-snug mb-3 line-clamp-2">
                    {member.role}
                  </p>
                  <div className="flex items-center justify-center gap-1 text-[11px] font-medium text-gray-500 mt-auto pt-2 border-t border-gray-100 w-full">
                    <MapPin className="w-3 h-3 text-[#001e62] shrink-0" />
                    <span className="truncate">{member.location}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Divider between Foreign and Indian Teams */}
          <div className="w-full border-t border-gray-200/90 pt-12 sm:pt-16 mb-8 sm:mb-12">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[1.4px] bg-[#001e62]/10 text-[#001e62] mb-3">
                Key Team Mates &amp; Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#001438] tracking-[-0.5px] mb-4">
                Indian Leadership &amp; Specialists
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-[17px] leading-relaxed font-normal">
                Meet our executive directors, regional leaders, legal coordinators, and metallurgy engineers powering continuous technological leadership across India, Asia, the Gulf, and Africa.
              </p>
            </div>
          </div>

          {/* Central Rolls Royces Mail ID Card Banner */}
          <div className="w-full max-w-4xl mx-auto mb-12 sm:mb-16 overflow-hidden">
            <div className="bg-gradient-to-r from-[#001438] via-[#001e62] to-[#0a2f8c] rounded-xl p-4 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5 sm:gap-6 border border-white/10 w-full max-w-full overflow-hidden">
              <div className="flex items-center gap-3.5 sm:gap-5 w-full min-w-0">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/20">
                  <Mail className="w-5 h-5 sm:w-7 sm:h-7 text-cyan-300" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] sm:text-xs uppercase font-bold tracking-wider text-cyan-200 truncate">
                      Central Corporate Mail ID
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  </div>
                  <h3 className="text-sm sm:text-xl md:text-2xl font-bold tracking-tight text-white font-mono select-all truncate">
                    RollsRoyces@rollsroyces.com
                  </h3>
                  <p className="text-white/80 text-[11px] sm:text-sm mt-0.5 line-clamp-2">
                    Direct communications for leadership coordination, metallurgy testing &amp; regional affairs
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 shrink-0 w-full sm:w-auto">
                <button
                  onClick={() => handleCopyEmail("RollsRoyces@rollsroyces.com")}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 rounded-lg bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-medium text-xs sm:text-sm transition-all border border-white/20 cursor-pointer min-w-0 truncate"
                >
                  {copiedEmail === "RollsRoyces@rollsroyces.com" ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300 shrink-0" />
                      <span className="text-emerald-200 font-semibold truncate">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 shrink-0" />
                      <span className="truncate">Copy Mail ID</span>
                    </>
                  )}
                </button>
                <a
                  href="mailto:RollsRoyces@rollsroyces.com"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 rounded-lg bg-white text-[#001438] hover:bg-cyan-50 font-bold text-xs sm:text-sm transition-all shadow-md hover:scale-105 min-w-0 truncate"
                >
                  <Send className="w-4 h-4 shrink-0" />
                  <span className="truncate">Send Mail</span>
                </a>
              </div>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7 w-full">
            {filteredTeamMembers.map((member, idx) => {
              const isCopied = copiedEmail === member.email;
              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-xl border border-gray-200/90 shadow-sm hover:shadow-2xl hover:border-[#001e62]/20 transition-all duration-300 flex flex-col p-6 items-center text-center group w-full min-w-0"
                >
                  {/* Category Pill Tag & Region */}
                  <div className="w-full flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-[#001e62] border border-slate-200/70">
                      {member.categoryLabel}
                    </span>
                    {member.region && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-gray-500">
                        <MapPin className="w-3 h-3 text-[#0066ff] shrink-0" />
                        <span className="truncate max-w-[110px]">{member.region}</span>
                      </span>
                    )}
                  </div>

                  {/* Circular Avatar */}
                  <div className="relative mb-4">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-[#001438] via-[#001e62] to-cyan-400 shadow-md group-hover:scale-105 group-hover:shadow-xl transition-all duration-300">
                      <div
                        className={`w-full h-full rounded-full flex items-center justify-center bg-gradient-to-br ${member.gradient} text-white border-2 border-white shadow-inner`}
                      >
                        <span className="font-bold text-2xl sm:text-3xl font-sans tracking-wider drop-shadow-sm">
                          {member.initials}
                        </span>
                      </div>
                    </div>
                    {/* Active verified personnel badge */}
                    <span
                      className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow-sm"
                      title="Active Rolls Royces Personnel"
                    />
                  </div>

                  {/* Name & Title */}
                  <h3 className="text-xl sm:text-[22px] font-bold text-[#001438] tracking-tight group-hover:text-[#001e62] transition-colors mb-1 truncate max-w-full">
                    {member.name}
                  </h3>

                  <p className="text-xs sm:text-[13.5px] font-semibold text-[#0066ff] uppercase tracking-wider mb-2">
                    {member.role}
                  </p>

                  <div className="flex items-center justify-center gap-1.5 text-gray-500 text-xs mb-3 font-medium">
                    <Briefcase className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span>{member.department}</span>
                  </div>

                  <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed line-clamp-3 mb-5 font-normal">
                    {member.bio}
                  </p>

                  {/* Dedicated Rolls Royces Mail ID Row */}
                  <div className="w-full pt-4 border-t border-gray-100 mt-auto">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-1.5 font-medium">
                      <span>Corporate Mail ID</span>
                      {isCopied && (
                        <span className="text-emerald-600 font-semibold flex items-center gap-1 text-[11px]">
                          <Check className="w-3 h-3" /> Copied
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between bg-gray-50 hover:bg-gray-100/80 rounded-md p-2 transition-colors border border-gray-100 min-w-0">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 text-xs font-mono text-[#001e62] hover:text-[#0066ff] truncate transition-colors min-w-0 flex-1 text-left"
                        title={`Email ${member.name}`}
                      >
                        <Mail className="w-3.5 h-3.5 text-[#001e62] shrink-0" />
                        <span className="truncate">{member.email}</span>
                      </a>

                      <button
                        onClick={() => handleCopyEmail(member.email)}
                        aria-label={`Copy ${member.name} email`}
                        className="p-1 rounded text-gray-400 hover:text-[#001e62] hover:bg-white transition-colors shrink-0 ml-1.5 cursor-pointer"
                        title="Copy email address"
                      >
                        {isCopied ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Section: Our businesses (#our-businesses) */}
      <section id="our-businesses" className="w-full max-w-full overflow-hidden bg-white py-14 sm:py-20 lg:py-28 px-4 sm:px-6 md:px-12 border-b border-gray-100">
        <div className="max-w-[1540px] mx-auto w-full">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#001438] tracking-[-0.5px] mb-3 sm:mb-6">
              Our businesses
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-[17px] leading-relaxed font-normal">
              We have a differentiated position with a strong portfolio of products and technologies in attractive markets. Our core operating businesses cover:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 w-full">
            {businessCards.map((bCard, idx) => (
              <motion.div
                key={bCard.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="relative aspect-[16/10] sm:aspect-[16/11] rounded-sm overflow-hidden group shadow-md block bg-gray-950 cursor-pointer w-full"
              >
                <Link href={bCard.href} className="block w-full h-full relative">
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
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Section: Our strategic framework (#our-strategic-framework) */}
      <section id="our-strategic-framework" className="w-full max-w-full overflow-hidden bg-white py-14 sm:py-20 lg:py-28 px-4 sm:px-6 md:px-12 border-b border-gray-100">
        <div className="max-w-[1540px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center w-full">
          {/* Left Column: Framework Narrative & Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#001438] tracking-[-0.5px] leading-tight mb-4 sm:mb-8">
              Our strategic framework
            </h2>

            <p className="text-gray-700 text-sm sm:text-base md:text-[17px] leading-[1.8] font-normal mb-6 sm:mb-10 max-w-xl">
              Our near-term focus areas and strategic priorities are informed by our business environment. Our strategy is delivered by our people, enabled by our business model, enacted by our business units and measured through our KPIs. It’s underpinned by strong governance and leadership, which manages risk and uncertainty, and creates value for all our stakeholders.
            </p>

            <div>
              <button
                type="button"
                onClick={() => handleOpenStory(aboutStories.framework)}
                className="inline-block text-[#001e62] font-bold text-xs sm:text-[14px] uppercase tracking-[1.5px] hover:text-[#0a2f8c] border-b-2 border-[#001e62] pb-1 transition-colors cursor-pointer text-left"
              >
                LEARN MORE
              </button>
            </div>
          </motion.div>

          {/* Right Column: Female Technician Photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 w-full"
          >
            <div className="aspect-[16/10] rounded-sm overflow-hidden shadow-lg bg-gray-100 w-full">
              <img
                src="/assets/images/framework-tech.jpg"
                alt="Rolls Royces engineer working on aerospace propulsion systems"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. Section: Inside Rolls Royces (#inside-rolls-royce) */}
      <section id="inside-rolls-royce" className="w-full max-w-full overflow-hidden bg-white py-14 sm:py-20 lg:py-28 px-4 sm:px-6 md:px-12 border-b border-gray-100">
        <div className="max-w-[1540px] mx-auto w-full">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#001438] tracking-[-0.5px]">
              Inside Rolls Royces
            </h2>
          </div>

          {/* 4 Feature Cards (2x2 Grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full">
            {/* Card 1: Leadership */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              onClick={() => scrollToSection("our-leadership")}
              className="bg-white border border-gray-200/90 hover:border-[#0284c7] rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col sm:flex-row group cursor-pointer w-full"
            >
              <div className="sm:w-2/5 aspect-[16/10] sm:aspect-auto overflow-hidden bg-gray-100">
                <img
                  src="/assets/images/inside-leader.jpg"
                  alt="Rolls Royces Leadership & Team"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="sm:w-3/5 p-6 sm:p-8 flex flex-col justify-center bg-white group-hover:bg-[#0284c7] transition-colors duration-300">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#001e62] group-hover:text-white mb-2 sm:mb-3 transition-colors duration-300">
                  Leadership &amp; Team
                </h3>
                <p className="text-gray-600 group-hover:text-white text-base sm:text-[17px] leading-relaxed font-normal transition-colors duration-300">
                  Our Executive Leaders, Regional Heads &amp; Metallurgists
                </p>
              </div>
            </motion.div>

            {/* Card 2: Where we operate */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="bg-white border border-gray-200/90 hover:border-[#0284c7] rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col sm:flex-row group cursor-pointer w-full"
            >
              <div className="sm:w-2/5 aspect-[16/10] sm:aspect-auto p-4 flex items-center justify-center bg-gray-50/50 group-hover:bg-white transition-colors duration-300">
                <img
                  src="/assets/images/world-map.svg"
                  alt="Where we operate map"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="sm:w-3/5 p-6 sm:p-8 flex flex-col justify-center bg-white group-hover:bg-[#0284c7] transition-colors duration-300">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#001e62] group-hover:text-white mb-2 sm:mb-3 transition-colors duration-300">
                  Where we operate
                </h3>
                <p className="text-gray-600 group-hover:text-white text-base sm:text-[17px] leading-relaxed font-normal transition-colors duration-300">
                  Find out details of our global presence
                </p>
              </div>
            </motion.div>

            {/* Card 3: Our Research */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              onClick={() => handleOpenStory(aboutStories.research)}
              className="bg-white border border-gray-200/90 hover:border-[#0284c7] rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col sm:flex-row group cursor-pointer w-full"
            >
              <div className="sm:w-2/5 aspect-[16/10] sm:aspect-auto overflow-hidden bg-gray-900">
                <img
                  src="/assets/images/inside-research.jpg"
                  alt="Our Research"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="sm:w-3/5 p-6 sm:p-8 flex flex-col justify-center bg-white group-hover:bg-[#0284c7] transition-colors duration-300">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#001e62] group-hover:text-white mb-2 sm:mb-3 transition-colors duration-300">
                  Our Research
                </h3>
                <p className="text-gray-600 group-hover:text-white text-base sm:text-[17px] leading-relaxed font-normal transition-colors duration-300">
                  Find out more about how we structure our research
                </p>
              </div>
            </motion.div>

            {/* Card 4: Our History */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              onClick={() => handleOpenStory(aboutStories.history)}
              className="bg-white border border-gray-200/90 hover:border-[#0284c7] rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col sm:flex-row group cursor-pointer w-full"
            >
              <div className="sm:w-2/5 aspect-[16/10] sm:aspect-auto overflow-hidden bg-gray-100">
                <img
                  src="/assets/images/inside-history.jpg"
                  alt="Rolls Royces 1906 History"
                  className="w-full h-full object-cover sepia-[0.35] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="sm:w-3/5 p-6 sm:p-8 flex flex-col justify-center bg-white group-hover:bg-[#0284c7] transition-colors duration-300">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#001e62] group-hover:text-white mb-2 sm:mb-3 transition-colors duration-300">
                  Our History
                </h3>
                <p className="text-gray-600 group-hover:text-white text-base sm:text-[17px] leading-relaxed font-normal transition-colors duration-300">
                  Our company was founded in 1906: use our timeline to discover our key milestones
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. The Rolls Royces Heritage Trust Banner */}
      <section className="w-full max-w-full overflow-hidden bg-white py-10 sm:py-12 px-4 sm:px-6 md:px-12">
        <div className="max-w-[1540px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full bg-[#0808a3] text-white rounded-sm py-10 sm:py-14 px-6 sm:px-12 lg:px-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 shadow-xl overflow-hidden"
          >
            <div className="max-w-2xl min-w-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-tight mb-2 sm:mb-3">
                The Rolls Royces Heritage Trust
              </h2>
              <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
                The Rolls Royces Heritage Trust promotes the history and engineering excellence of Rolls Royces and its ancestral companies.
              </p>
            </div>

            <div className="shrink-0">
              <button
                type="button"
                onClick={() => handleOpenStory(aboutStories.heritageTrust)}
                className="inline-flex items-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border-[1.8px] border-white text-white font-bold text-xs sm:text-[13px] uppercase tracking-[1.4px] hover:bg-white hover:text-[#0808a3] transition-all duration-300 hover:scale-105 group cursor-pointer"
              >
                <span>LEARN MORE</span>
                <ChevronRight className="w-4 h-4 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 10. Clean White Buffer before Footer */}
      <section className="w-full max-w-full overflow-hidden bg-white py-10 sm:py-16 md:py-20" />

      {/* 11. Official Rolls Royces Footer */}
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
                  Rolls Royces – Powering, Protecting &amp; Connecting
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
