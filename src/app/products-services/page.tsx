"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";
import StoryDrawer, { StoryData } from "@/components/StoryDrawer";
import AccessibilityModal from "@/components/AccessibilityModal";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const productsData: (StoryData & {
  id: string;
  cardTitle: string;
  cardSubtitle: string;
  cardDesc: string;
  image: string;
  blueBackground?: boolean;
})[] = [
  {
    id: "civil-aerospace",
    category: "Civil Aerospace",
    title: "Civil Aerospace",
    cardTitle: "Civil Aerospace",
    cardSubtitle: "Pioneering clean, efficient air travel",
    cardDesc:
      "We are a major supplier of commercial aircraft engines, powering more than 35 types of commercial airplanes. From widebody airliners to corporate business jets, our engines deliver world-class fuel efficiency and reliability.",
    image: "/assets/images/annual-report.jpg",
    description:
      "Civil Aerospace is a major manufacturer of aero engines for all sectors of the airline and corporate jet markets. Over 13,000 civil engines are in service with 350+ airlines and 400+ corporate operators worldwide.",
    highlight: "UltraFan® demonstrator delivers a 25% efficiency improvement over the original Trent engine.",
    specs: [
      { label: "Fleet in Service", value: "13,000+ Engines" },
      { label: "Airline Customers", value: "350+ Airlines" },
      { label: "UltraFan Fan Size", value: "140 in (3.55m)" },
      { label: "SAF Compatibility", value: "100% Certified" },
    ],
  },
  {
    id: "defence",
    category: "Defence",
    title: "Defence",
    cardTitle: "Defence",
    cardSubtitle: "Powering security on land, at sea and in the air",
    cardDesc:
      "We provide world-leading power and propulsion systems for military aircraft, naval combatants and nuclear submarines, supporting the armed forces of more than 100 nations across safety-critical mission profiles.",
    image: "/assets/images/carrier-deck.jpg",
    description:
      "Rolls-Royce is one of the world's leading suppliers of defence aircraft engines and naval propulsion systems. Powering fighter jets like Eurofighter Typhoon and the F-35B, as well as the UK Royal Navy's nuclear submarine fleet.",
    highlight: "Exclusive provider of nuclear propulsion for the UK Royal Navy's Vanguard and Astute submarines.",
    specs: [
      { label: "Armed Forces Supported", value: "100+ Nations" },
      { label: "Engines in Service", value: "16,000+ Military" },
      { label: "Combat Propulsion", value: "F-35B & Eurofighter" },
      { label: "Naval Power", value: "MT30 Gas Turbines" },
    ],
  },
  {
    id: "power-systems",
    category: "Power Systems",
    title: "Power Systems",
    cardTitle: "Power Systems",
    cardSubtitle: "Powering sustainability in propulsion and energy",
    cardDesc:
      "Our mtu brand products contribute to the energy transition - as emergency power supplies for safety-critical installations and as integrated propulsion systems for ships and heavy land vehicles.",
    image: "/assets/images/powersystems-landscape.svg",
    blueBackground: true,
    description:
      "Rolls-Royce Power Systems develops and produces high-speed mtu engines and propulsion systems for ships, heavy land vehicles, and distributed energy power generation systems worldwide.",
    highlight: "mtu Hydrogen microgrid and battery storage systems delivering resilient zero-carbon power.",
    specs: [
      { label: "Max Power Output", value: "Up to 10,000 kW" },
      { label: "Microgrid Energy", value: "Zero-Carbon Ready" },
      { label: "Marine Applications", value: "Ferries & Yachts" },
      { label: "Critical Power", value: "Data Centres & Hospitals" },
    ],
  },
];

export default function ProductsServicesPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeStory, setActiveStory] = useState<StoryData | null>(null);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [isAccModalOpen, setIsAccModalOpen] = useState(false);

  const handleOpenDetail = (story: StoryData) => {
    setActiveStory(story);
    setIsStoryOpen(true);
  };

  return (
    <main className="min-h-screen bg-white flex flex-col selection:bg-[#001e62] selection:text-white">
      {/* 1. Main Navigation Bar */}
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* 2. Breadcrumbs Bar (Screenshot 1) */}
      <div className="w-full bg-white border-b border-gray-100 py-3.5 px-6 md:px-12 text-sm">
        <div className="max-w-[1540px] mx-auto flex items-center gap-2 text-gray-600 font-normal">
          <a href="/" className="hover:text-[#001e62] transition-colors">
            Home
          </a>
          <ChevronRight className="w-3.5 h-3.5 stroke-[2.2] text-gray-400" />
          <span className="text-[#001e62] font-semibold">Products &amp; Services</span>
        </div>
      </div>

      {/* 3. Header Statement (Screenshot 1) */}
      <section className="w-full bg-white pt-20 pb-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-[56px] font-normal text-[#102a43] tracking-tight mb-6"
          >
            Products &amp; Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            We develop and deliver complex power and propulsion solutions for safety-critical applications in the air, at sea and on land.
          </motion.p>
        </div>
      </section>

      {/* 4. Products & Services Cards Grid (Screenshots 1 & 2) */}
      <section className="w-full bg-white pb-28 px-6 md:px-12">
        <div className="max-w-[1540px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {productsData.map((prod, idx) => {
            const isBlue = prod.blueBackground;
            return (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                whileHover={{ y: -6 }}
                onClick={() => handleOpenDetail(prod)}
                className="rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer border border-gray-100 group"
              >
                {/* Card Top Image */}
                <div className="aspect-[16/10] overflow-hidden bg-gray-100 relative">
                  <img
                    src={prod.image}
                    alt={prod.cardTitle}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Card Content Block: Default Navy Blue, Electric Blue ONLY after hover */}
                <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between transition-colors duration-300 bg-[#0808a3] group-hover:bg-[#0066ff] text-white">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
                      {prod.cardTitle}
                    </h2>

                    <h3 className="text-base sm:text-lg font-medium leading-snug mb-4 opacity-95">
                      {prod.cardSubtitle}
                    </h3>

                    <p className="text-sm leading-relaxed opacity-90 font-normal">
                      {prod.cardDesc}
                    </p>
                  </div>

                  <div className="pt-8 mt-6 border-t border-white/20 flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                    <span>Explore Division</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 5. Clean White Buffer Section */}
      <section className="w-full bg-white py-14 sm:py-20" />

      {/* 6. Official Rolls-Royce Footer */}
      <Footer />

      {/* Technical Specifications Drawer */}
      <StoryDrawer
        isOpen={isStoryOpen}
        onClose={() => setIsStoryOpen(false)}
        story={activeStory}
      />

      {/* Floating Accessibility Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsAccModalOpen(!isAccModalOpen)}
          className="w-11 h-11 bg-[#0000a0] hover:bg-[#0000c8] text-white rounded-md flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,160,0.5)] transition-all hover:scale-105"
          aria-label="Accessibility settings"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
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
