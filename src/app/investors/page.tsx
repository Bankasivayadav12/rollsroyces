"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";
import AccessibilityModal from "@/components/AccessibilityModal";
import {
  ChevronRight,
  ChevronDown,
  ChevronLeft,
  UserCheck,
  X,
  Share2,
  Download,
  Calendar,
  Tag,
  Check,
  ExternalLink,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PressRelease {
  id: number;
  image: string;
  title: string;
  shortTitle?: string;
  type: string;
  date: string;
  summary: string;
  content: string[];
  initialActive?: boolean;
}

export default function InvestorsPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(2); // Default to card 2 matching screenshot
  const [selectedArticle, setSelectedArticle] = useState<PressRelease | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // 12 Press Releases organized in 3 sets of 4 cards
  const allReleases: PressRelease[] = [
    // Page 1 (Matching screenshot exactly)
    {
      id: 1,
      image: "/assets/images/press-bizjet.jpg",
      title: "Rolls-Royce introduces additional benefits for corporate jet customers",
      type: "PRESS RELEASE",
      date: "19 OCTOBER 2026",
      summary: "Rolls-Royce today announced an expansion of its market-leading CorporateCare® Enhanced service for business aviation customers worldwide.",
      content: [
        "Rolls-Royce has unveiled significant enhancements to its CorporateCare® Enhanced service programme, delivering greater operating cost predictability, comprehensive asset protection, and digital health monitoring for corporate jet owners.",
        "The new coverage introduces predictive engine maintenance algorithms that detect anomalies before they impact flight schedules, ensuring unmatched fleet availability across Pearl and BR700 engine families.",
        "With more than 70% of Rolls-Royce powered business aircraft enrolled in CorporateCare, this upgrade highlights our steadfast commitment to customer excellence and lifecycle support.",
      ],
    },
    {
      id: 2,
      image: "/assets/images/press-airliner.jpg",
      title: "Trent 1000 and Trent 7000 durability enhancements exceed performance milestones",
      shortTitle: "Trent...",
      type: "PRESS RELEASE",
      date: "13 OCTOBER 2026",
      initialActive: true,
      summary: "Rolls-Royce announces remarkable durability and fuel-burn improvements across its flagship widebody Trent engine family.",
      content: [
        "The Trent engine family continues to set industry standards for long-haul reliability and fuel efficiency. Accelerated endurance testing on the Trent 1000 and Trent 7000 has proven new blade aerodynamic coatings and high-pressure turbine upgrades that double time-on-wing in severe operating environments.",
        "Airlines across Asia-Pacific, Europe, and the Americas have logged more than 150 million flight hours on the Trent family, praising its continuous innovation and transition pathway to 100% Sustainable Aviation Fuel (SAF).",
        "'These milestones confirm that our continuous engineering investments are directly translating into improved operational reliability and lower lifetime emissions for our airline partners,' said the President of Civil Aerospace.",
      ],
    },
    {
      id: 3,
      image: "/assets/images/press-signing.jpg",
      title: "Rolls-Royce becomes first high-speed engine manufacturer to approve 100% SAF",
      type: "PRESS RELEASE",
      date: "1 OCTOBER 2026",
      summary: "Rolls-Royce Power Systems has formally approved its mtu Series 2000 and Series 4000 engines for 100% Sustainable Aviation Fuel and renewable HVO diesel.",
      content: [
        "In a landmark sustainability milestone, Rolls-Royce has validated and approved the use of 100% Sustainable Aviation Fuel (SAF) and Hydrotreated Vegetable Oil (HVO) across its extensive mtu high-speed internal combustion product portfolio.",
        "The breakthrough allows commercial marine, yacht, rail, and distributed power generation customers to cut net greenhouse gas emissions by up to 90% without requiring engine modifications.",
        "A formal signing ceremony in Friedrichshafen solidified new long-term agreements with global maritime fleet operators aiming for net-zero carbon operations.",
      ],
    },
    {
      id: 4,
      image: "/assets/images/news-a350f.jpg",
      title: "Rolls-Royce strengthens freighter market position with Trent 7000 agreements",
      type: "PRESS RELEASE",
      date: "29 SEPTEMBER 2026",
      summary: "Rolls-Royce secures landmark long-term propulsion agreements for global cargo operators investing in new-generation widebody freighters.",
      content: [
        "Rolls-Royce has strengthened its commercial leadership in the global air cargo sector with key new commitments for Trent 7000 engines powering modern widebody freighters.",
        "The Trent 7000 brings exceptional fuel efficiency, quiet operation, and proven reliability, providing freighter operators with superior payload range economics and lower carbon intensity.",
        "Combined with Rolls-Royce TotalCare® service coverage, cargo operators benefit from round-the-clock digital fleet monitoring and guaranteed spare engine availability worldwide.",
      ],
    },

    // Page 2
    {
      id: 5,
      image: "/assets/images/smr-building.svg",
      title: "Rolls-Royce SMR selected for European clean baseload nuclear energy deployment",
      type: "PRESS RELEASE",
      date: "18 SEPTEMBER 2026",
      summary: "Rolls-Royce Small Modular Reactor (SMR) programme chosen for pioneering nuclear deployment to decarbonize European industrial grids.",
      content: [
        "Rolls-Royce SMR has been chosen by premier European utility partners to construct modular nuclear power stations, delivering dependable low-carbon electricity by the early 2030s.",
        "Each 470MWe power station utilizes standardized, factory-built modules that minimize construction risk and dramatically accelerate deployment compared to conventional nuclear plants.",
        "This project marks a cornerstone in Europe's energy sovereignty and industrial decarbonization agenda.",
      ],
    },
    {
      id: 6,
      image: "/assets/images/testbed-80.jpg",
      title: "World's largest aerospace test facility Testbed 80 concludes next-gen UltraFan testing",
      type: "PRESS RELEASE",
      date: "04 SEPTEMBER 2026",
      summary: "UltraFan® demonstrator technology achieves record fuel efficiency targets and data validation at the state-of-the-art Testbed 80 facility in Derby.",
      content: [
        "Rolls-Royce has successfully concluded high-power endurance testing of the UltraFan® demonstrator engine at Testbed 80 in Derby, the world's largest indoor test facility.",
        "The test proved a 10% efficiency gain over the world's most efficient in-service engines, confirming the strength of the composite carbon-titanium fan system and high-power gearbox.",
        "Data gathered across thousands of sensor channels provides a proven baseline for future commercial and defence propulsion architectures.",
      ],
    },
    {
      id: 7,
      image: "/assets/images/annual-report.jpg",
      title: "Rolls-Royce reports robust free cash flow and raises full-year guidance",
      type: "PRESS RELEASE",
      date: "22 AUGUST 2026",
      summary: "Disciplined operational execution and commercial optimisation deliver record operating profit across Civil, Defence, and Power Systems.",
      content: [
        "Rolls-Royce today announced upgraded guidance for the full financial year, reflecting superior commercial discipline, contractual margin improvements, and structural cost efficiency.",
        "Underlying operating profit increased substantially, underpinned by strong large engine flying hours recovery and robust defence order intake across nuclear submarine and combat air programmes.",
        "The Group's resilient balance sheet continues to support disciplined investment in strategic decarbonisation technologies.",
      ],
    },
    {
      id: 8,
      image: "/assets/images/prod-defence.jpg",
      title: "Rolls-Royce signs strategic propulsion pact for Global Combat Air Programme",
      type: "PRESS RELEASE",
      date: "11 AUGUST 2026",
      summary: "Trilateral engineering partnership between the UK, Japan, and Italy achieves crucial milestones in sixth-generation fighter engine development.",
      content: [
        "Rolls-Royce Defence has signed a multi-year collaborative propulsion agreement with industry partners to co-develop the sixth-generation fighter jet engine under GCAP.",
        "The cutting-edge power and propulsion system will deliver unprecedented electrical power generation to support directed energy weapons and advanced digital avionics.",
        "Initial combustor and turbine sub-assembly trials have demonstrated exceptional thermal tolerance and radar signature reduction.",
      ],
    },

    // Page 3
    {
      id: 9,
      image: "/assets/images/powersystems-landscape.svg",
      title: "Rolls-Royce Power Systems supplies battery microgrid systems to critical hospitals",
      type: "PRESS RELEASE",
      date: "28 JULY 2026",
      summary: "mtu EnergyPack battery storage systems provide zero-emission uninterrupted emergency power for medical centers.",
      content: [
        "Rolls-Royce Power Systems has delivered containerized mtu EnergyPack battery energy storage solutions to major metropolitan hospital campuses.",
        "The intelligent microgrids combine solar photovoltaic arrays, lithium-iron-phosphate battery packs, and standby gas generators to provide seamless backup power while cutting campus emissions.",
      ],
    },
    {
      id: 10,
      image: "/assets/images/netzero-pod.jpg",
      title: "Rolls-Royce publishes 2026 Sustainability and Net Zero Transition Progress Report",
      type: "PRESS RELEASE",
      date: "15 JULY 2026",
      summary: "Detailed carbon accounting confirms ongoing reduction in Scope 1 and Scope 2 emissions across all global production sites.",
      content: [
        "Rolls-Royce has published its comprehensive mid-year Net Zero progress audit, validating that 100% of manufacturing facilities in the UK and Germany now source renewable electricity.",
        "The report outlines our verified roadmap to reach net zero operational emissions by 2030 and net zero lifecycle emissions by 2050.",
      ],
    },
    {
      id: 11,
      image: "/assets/images/business-typhoon.jpg",
      title: "EJ200 fleet achieves 2 million engine flying hours with Eurofighter Typhoon air forces",
      type: "PRESS RELEASE",
      date: "02 JULY 2026",
      summary: "Rolls-Royce celebrates two million operational flight hours on the EJ200 engine powering frontline Eurofighter Typhoon squadrons.",
      content: [
        "The EUROJET consortium, led in the UK by Rolls-Royce, celebrated the landmark achievement of two million flying hours for the EJ200 turbofan engine.",
        "The EJ200 has proven extraordinary operational readiness, high thrust-to-weight performance, and exceptional hot-and-high agility during NATO air policing missions.",
      ],
    },
    {
      id: 12,
      image: "/assets/images/vertiport-terminal.jpg",
      title: "Rolls-Royce electrical propulsion unit achieves successful first flight on eVTOL testbed",
      type: "PRESS RELEASE",
      date: "19 JUNE 2026",
      summary: "High-density electric motor and inverter architecture demonstrate smooth vertical takeoff and horizontal transition flight.",
      content: [
        "Rolls-Royce Electrical has concluded the maiden flight test of its 400kW lightweight aviation electric propulsion system on an experimental urban air mobility aircraft.",
        "The unit delivered class-leading power density and acoustic stealth, validating our commitment to quiet and clean urban air mobility solutions.",
      ],
    },
  ];

  // Current page items (4 per page)
  const currentReleases = allReleases.slice(currentPage * 4, currentPage * 4 + 4);
  const totalPages = Math.ceil(allReleases.length / 4);

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleCopyLink = (title: string) => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#001e62] selection:text-white">
      {/* 1. Official Global Navbar */}
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* 2. Breadcrumbs Bar */}
      <nav aria-label="Breadcrumb" className="w-full bg-white border-b border-gray-100 py-3.5">
        <div className="max-w-[1540px] mx-auto px-6 md:px-12 flex items-center gap-2 text-sm">
          <a
            href="/"
            className="text-gray-500 hover:text-[#001e62] transition-colors font-normal"
          >
            Home
          </a>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-[#005072] font-semibold">Investors</span>
        </div>
      </nav>

      {/* 3. Hero Banner: Trading Update */}
      <section className="relative w-full min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] flex items-center overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/investor-technicians.jpg"
            alt="Rolls-Royce aerospace engineers at engine facility"
            className="w-full h-full object-cover object-center"
          />
          {/* Blue gradient overlay matching screenshot */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0066ff]/95 via-[#0052cc]/85 to-[#001b52]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#005ae6]/60 via-transparent to-[#001035]/70" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-[1540px] mx-auto w-full px-6 md:px-12 py-12 flex items-center">
          {/* Dark Blue Box matching exact screenshot design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[560px] bg-[#000887] text-white p-8 sm:p-12 shadow-2xl rounded-sm"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-medium tracking-tight mb-4 leading-tight">
              Trading Update
            </h1>
            <p className="text-white/95 text-base sm:text-lg lg:text-[20px] font-normal">
              7am GMT, 12 November 2026
            </p>
          </motion.div>
        </div>

        {/* Down Chevron Indicator */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10">
          <a
            href="#useful-resources"
            aria-label="Scroll to useful resources"
            className="text-white/80 hover:text-white transition-colors duration-300 block"
          >
            <ChevronDown className="w-8 h-8 stroke-[2.5] animate-bounce" />
          </a>
        </div>
      </section>

      {/* 4. Section: Useful resources */}
      <section id="useful-resources" className="w-full bg-white py-20 sm:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Centered Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-light text-[#0f2942] tracking-tight text-center mb-16 sm:mb-20">
            Useful resources
          </h2>

          {/* 7 Resource Cards Grid (2-column layout matching screenshots) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Card 1: Results, reports and presentations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group flex flex-col sm:flex-row bg-white border border-gray-200/80 hover:shadow-xl transition-all duration-300 rounded-sm overflow-hidden cursor-pointer"
            >
              {/* Graphic Left: Half Year Results 2026 */}
              <div className="sm:w-[42%] aspect-[4/3] sm:aspect-auto bg-[#0055b8] shrink-0 overflow-hidden">
                <img
                  src="/assets/images/investor-halfyear.svg"
                  alt="Half Year Results 2026"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Content Right */}
              <div className="sm:w-[58%] p-6 sm:p-8 flex flex-col justify-center">
                <h3 className="text-xl sm:text-[22px] font-bold text-[#0808a3] leading-snug group-hover:text-[#0052cc] transition-colors mb-2.5">
                  Results, reports and presentations
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  View all of our presentations and webcasts here
                </p>
              </div>
            </motion.div>

            {/* Card 2: Consensus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group flex flex-col sm:flex-row bg-white border border-gray-200/80 hover:shadow-xl transition-all duration-300 rounded-sm overflow-hidden cursor-pointer"
            >
              {/* Image Left */}
              <div className="sm:w-[42%] aspect-[4/3] sm:aspect-auto bg-gray-100 shrink-0 overflow-hidden">
                <img
                  src="/assets/images/investor-consensus.jpg"
                  alt="Rolls-Royce analysts reviewing consensus estimates"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Content Right */}
              <div className="sm:w-[58%] p-6 sm:p-8 flex flex-col justify-center">
                <h3 className="text-xl sm:text-[22px] font-bold text-[#0808a3] leading-snug group-hover:text-[#0052cc] transition-colors mb-2.5">
                  Consensus
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  View our latest analyst consensus
                </p>
              </div>
            </motion.div>

            {/* Card 3: Regulatory News Service (RNS) - Solid Blue Content Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group flex flex-col sm:flex-row bg-[#0062ff] border border-[#0062ff] hover:shadow-xl transition-all duration-300 rounded-sm overflow-hidden cursor-pointer"
            >
              {/* Image Left */}
              <div className="sm:w-[42%] aspect-[4/3] sm:aspect-auto bg-gray-900 shrink-0 overflow-hidden">
                <img
                  src="/assets/images/apprentice.jpg"
                  alt="Engine technicians in Rolls-Royce manufacturing facility"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Solid Blue Content Right */}
              <div className="sm:w-[58%] p-6 sm:p-8 flex flex-col justify-center bg-[#0062ff] text-white">
                <h3 className="text-xl sm:text-[22px] font-bold text-white leading-snug mb-2.5">
                  Regulatory News Service (RNS)
                </h3>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                  Access our regulatory news announcements
                </p>
              </div>
            </motion.div>

            {/* Card 4: Share price */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group flex flex-col sm:flex-row bg-white border border-gray-200/80 hover:shadow-xl transition-all duration-300 rounded-sm overflow-hidden cursor-pointer"
            >
              {/* SVG Stock Chart Left */}
              <div className="sm:w-[42%] aspect-[4/3] sm:aspect-auto bg-slate-50 shrink-0 overflow-hidden">
                <img
                  src="/assets/images/investor-shareprice.svg"
                  alt="Rolls-Royce share price chart and trends"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Content Right */}
              <div className="sm:w-[58%] p-6 sm:p-8 flex flex-col justify-center">
                <h3 className="text-xl sm:text-[22px] font-bold text-[#0808a3] leading-snug group-hover:text-[#0052cc] transition-colors mb-2.5">
                  Share price
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Our latest share price. View stock data, trends and history
                </p>
              </div>
            </motion.div>

            {/* Card 5: Financial calendar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group flex flex-col sm:flex-row bg-white border border-gray-200/80 hover:shadow-xl transition-all duration-300 rounded-sm overflow-hidden cursor-pointer"
            >
              {/* Image Left */}
              <div className="sm:w-[42%] aspect-[4/3] sm:aspect-auto bg-gray-100 shrink-0 overflow-hidden">
                <img
                  src="/assets/images/investor-calendar.jpg"
                  alt="Financial and investor event calendar"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Content Right */}
              <div className="sm:w-[58%] p-6 sm:p-8 flex flex-col justify-center">
                <h3 className="text-xl sm:text-[22px] font-bold text-[#0808a3] leading-snug group-hover:text-[#0052cc] transition-colors mb-2.5">
                  Financial calendar
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  See our upcoming investor events
                </p>
              </div>
            </motion.div>

            {/* Card 6: Annual Report 2025 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group flex flex-col sm:flex-row bg-white border border-gray-200/80 hover:shadow-xl transition-all duration-300 rounded-sm overflow-hidden cursor-pointer"
            >
              {/* Jet Turbine Cover Left */}
              <div className="relative sm:w-[42%] aspect-[4/3] sm:aspect-auto bg-[#0a1428] shrink-0 overflow-hidden">
                <img
                  src="/assets/images/annual-report.jpg"
                  alt="Rolls-Royce Annual Report 2025 cover"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Monogram Badge & Title Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000887]/90 via-transparent to-transparent flex flex-col justify-between p-3.5">
                  <div className="flex justify-end">
                    <div className="w-5 h-6 border border-white/80 rounded-[2px] flex items-center justify-center text-[10px] font-serif font-bold text-white bg-black/40">
                      RR
                    </div>
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold tracking-wider text-white uppercase">
                      ANNUAL REPORT
                    </span>
                    <span className="block text-lg font-light text-white leading-tight">
                      2025
                    </span>
                    <div className="flex gap-[2px] mt-1 opacity-70">
                      {[...Array(16)].map((_, i) => (
                        <span
                          key={i}
                          className="w-[2px] bg-white"
                          style={{ height: `${6 + (i % 3) * 3}px` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Content Right */}
              <div className="sm:w-[58%] p-6 sm:p-8 flex flex-col justify-center">
                <h3 className="text-xl sm:text-[22px] font-bold text-[#0808a3] leading-snug group-hover:text-[#0052cc] transition-colors mb-2.5">
                  Annual Report 2025
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  View our recent and historic Annual Reports and supplementary materials
                </p>
              </div>
            </motion.div>
          </div>

          {/* Centered 7th Card: Shareholder information */}
          <div className="mt-8 lg:mt-10 max-w-[680px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group flex flex-col sm:flex-row bg-[#0062ff] border border-[#0062ff] hover:shadow-xl transition-all duration-300 rounded-sm overflow-hidden cursor-pointer"
            >
              {/* Image Left */}
              <div className="sm:w-[48%] aspect-[4/3] sm:aspect-auto bg-gray-900 shrink-0 overflow-hidden">
                <img
                  src="/assets/images/investor-shareholder.jpg"
                  alt="Business colleagues in discussion"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Solid Blue Content Right */}
              <div className="sm:w-[52%] p-6 sm:p-8 flex flex-col justify-center bg-[#0062ff] text-white">
                <h3 className="text-xl sm:text-[22px] font-bold text-white leading-snug mb-2.5">
                  Shareholder information
                </h3>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                  Access important shareholder information
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Section: Latest press releases (Full functional carousel & interactive hover actions) */}
      <section className="w-full bg-white py-16 sm:py-24 border-t border-gray-100">
        <div className="max-w-[1540px] mx-auto px-6 md:px-12">
          {/* Centered Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-light text-[#0f2942] tracking-tight text-center mb-16 sm:mb-20">
            Latest press releases
          </h2>

          {/* Animated 4 Cards Carousel Viewport */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8"
              >
                {currentReleases.map((item) => {
                  const isHovered = hoveredCardId === item.id;
                  return (
                    <motion.div
                      key={item.id}
                      onMouseEnter={() => setHoveredCardId(item.id)}
                      onMouseLeave={() => setHoveredCardId(null)}
                      onClick={() => setSelectedArticle(item)}
                      className={`relative flex flex-col border transition-all duration-300 rounded-sm overflow-hidden cursor-pointer select-none ${
                        isHovered
                          ? "border-[#0062ff] shadow-2xl -translate-y-2"
                          : "border-gray-200/80 hover:shadow-xl bg-white"
                      }`}
                    >
                      {/* Top Image Banner */}
                      <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                            isHovered ? "scale-105" : "scale-100"
                          }`}
                        />
                        <div
                          className={`absolute inset-0 bg-black/10 transition-opacity duration-300 ${
                            isHovered ? "opacity-0" : "opacity-10"
                          }`}
                        />
                      </div>

                      {/* Body Content with Smooth Hover Transition (Matching Screenshot 2 Card 2) */}
                      <div
                        className={`flex flex-col flex-1 justify-between transition-colors duration-300 ${
                          isHovered ? "bg-[#0062ff] text-white" : "bg-white text-gray-900"
                        }`}
                      >
                        <div className="p-6 pb-4">
                          <h3
                            className={`text-lg sm:text-[21px] font-bold leading-snug line-clamp-3 transition-colors duration-300 min-h-[58px] ${
                              isHovered ? "text-white" : "text-[#0808a3]"
                            }`}
                          >
                            {isHovered && item.shortTitle ? item.shortTitle : item.title}
                          </h3>
                        </div>

                        {/* Footer Row (PRESS RELEASE & Date) */}
                        <div className="p-6 pt-0">
                          <div
                            className={`border-t pt-3 flex items-center justify-between text-xs tracking-wider transition-colors duration-300 ${
                              isHovered
                                ? "border-white/30 text-white/90"
                                : "border-gray-200 text-gray-500"
                            }`}
                          >
                            <span className="font-bold uppercase">{item.type}</span>
                            <span className="uppercase">{item.date}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Controls: Arrows & Pagination Dots */}
          <div className="flex items-center justify-center gap-6 mt-12 sm:mt-16">
            <button
              onClick={handlePrevPage}
              aria-label="Previous press release slide"
              className="text-gray-400 hover:text-[#001e62] hover:scale-110 active:scale-95 transition-all p-2 rounded-full hover:bg-gray-100"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2]" />
            </button>

            {/* Pagination Dots (First dot active pink/magenta matching screenshot) */}
            <div className="flex items-center gap-2.5">
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    currentPage === idx
                      ? "w-3 h-3 bg-[#e6007e] scale-110 shadow-sm"
                      : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNextPage}
              aria-label="Next press release slide"
              className="text-gray-400 hover:text-[#001e62] hover:scale-110 active:scale-95 transition-all p-2 rounded-full hover:bg-gray-100"
            >
              <ChevronRight className="w-6 h-6 stroke-[2]" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. Clean White Buffer Section */}
      <section className="w-full bg-white py-14 sm:py-20" />

      {/* 7. Official Rolls-Royce Footer */}
      <Footer />

      {/* 8. Floating Accessibility Widget */}
      <button
        onClick={() => setIsAccessibilityOpen(true)}
        aria-label="Open accessibility options"
        className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-[#00009c] hover:bg-[#0808a3] text-white rounded-md flex items-center justify-center shadow-2xl transition-transform hover:scale-105 active:scale-95"
      >
        <UserCheck className="w-6 h-6 stroke-[2.2]" />
      </button>

      {/* 9. Press Release Article Modal (Full functionality for readers) */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col border border-gray-200"
            >
              {/* Modal Header Bar */}
              <div className="flex items-center justify-between px-6 py-4 bg-[#001438] text-white border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00a3e0] bg-white/10 px-2.5 py-1 rounded">
                    {selectedArticle.type}
                  </span>
                  <span className="text-xs text-white/80">{selectedArticle.date}</span>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close article modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Scrollable Body */}
              <div className="overflow-y-auto p-6 sm:p-10">
                {/* Hero image */}
                <div className="relative aspect-[16/9] w-full bg-gray-900 rounded-md overflow-hidden mb-6 shadow-md">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h2 className="text-2xl sm:text-3xl font-light text-[#0f2942] tracking-tight leading-snug mb-4">
                  {selectedArticle.title}
                </h2>

                <p className="text-lg font-medium text-gray-700 leading-relaxed mb-6 border-l-4 border-[#0062ff] pl-4 italic">
                  {selectedArticle.summary}
                </p>

                <div className="space-y-4 text-gray-600 leading-relaxed text-[16.5px]">
                  {selectedArticle.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {/* Media Contact Box */}
                <div className="mt-8 p-6 bg-slate-50 border border-slate-200 rounded-md">
                  <h4 className="text-sm font-bold text-[#001e62] uppercase tracking-wider mb-2">
                    Media Relations Contact
                  </h4>
                  <p className="text-sm text-gray-600">
                    Rolls-Royce plc Media Centre • <span className="font-medium text-blue-600">media@rolls-royce.com</span> • London, UK
                  </p>
                </div>

                {/* Actions Row */}
                <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleCopyLink(selectedArticle.title)}
                      className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      {copiedLink ? (
                        <>
                          <Check className="w-4 h-4 text-green-600" />
                          <span className="text-green-600">Link Copied!</span>
                        </>
                      ) : (
                        <>
                          <Share2 className="w-4 h-4" />
                          Share Release
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => alert("Downloading official Rolls-Royce press release PDF...")}
                      className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download PDF
                    </button>
                  </div>

                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="px-6 py-2 bg-[#001e62] hover:bg-[#0052cc] text-white font-medium text-sm rounded transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Global Search & Accessibility Modals */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <AccessibilityModal
        isOpen={isAccessibilityOpen}
        onClose={() => setIsAccessibilityOpen(false)}
      />
    </div>
  );
}
