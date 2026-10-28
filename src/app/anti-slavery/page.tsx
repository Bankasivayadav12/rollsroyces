"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";
import AccessibilityModal from "@/components/AccessibilityModal";
import { ChevronRight, FileCheck, ShieldAlert, Award, Download, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function AntiSlaveryPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccModalOpen, setIsAccModalOpen] = useState(false);

  const pillars = [
    {
      title: "Supplier Code of Conduct",
      desc: "Mandatory compliance for all global suppliers prohibiting forced, bonded, involuntary prison, and child labour.",
    },
    {
      title: "Risk-Based Due Diligence",
      desc: "Comprehensive onboarding audits, traceability verification, and third-party country risk scoring across aerospace supply chains.",
    },
    {
      title: "Independent Ethics Line",
      desc: "Confidential 24/7 whistleblowing channel allowing employees, contractors, and suppliers to report human rights concerns without fear of retaliation.",
    },
    {
      title: "Workforce Training",
      desc: "Compulsory ethics and human rights awareness training modules for procurement specialists, operational leaders, and compliance officers.",
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
          <span className="text-[#001e62] font-semibold">Anti-slavery statement</span>
        </div>
      </div>

      {/* 3. Hero Header */}
      <section className="w-full bg-[#061129] text-white pt-16 sm:pt-20 pb-16 px-4 sm:px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Modern Slavery Act Statement</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-[54px] font-normal tracking-tight mb-4"
          >
            Anti-slavery statement
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-white/80 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            Rolls-Royce plc and its subsidiaries’ statement on modern slavery, forced labour, human trafficking, and supply chain transparency.
          </motion.p>
        </div>
      </section>

      {/* 4. Policy Content */}
      <section className="w-full bg-white py-14 sm:py-20 px-4 sm:px-6 md:px-12 flex-1">
        <div className="max-w-4xl mx-auto text-[#1e293b] space-y-10 text-base leading-relaxed">
          {/* Statutory Commitment Box */}
          <div className="bg-[#f0f4fd] border border-[#d0e0fb] rounded-lg p-6 sm:p-8">
            <h3 className="font-bold text-lg text-[#001e62] mb-2 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#001e62]" />
              <span>Statement under Section 54 of the Modern Slavery Act 2015</span>
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              This statement sets out the actions taken by Rolls-Royce Holdings plc and its relevant group subsidiaries during the financial year to identify, prevent, and mitigate the risk of modern slavery and human trafficking across our direct business operations and supply chain.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#001438] mb-3">
              1. Our Zero-Tolerance Commitment
            </h2>
            <p className="text-gray-700">
              Modern slavery is a crime and a gross violation of fundamental human rights. It takes various forms, including slavery, servitude, forced or compulsory labour, and human trafficking. Rolls-Royce has a zero-tolerance approach to modern slavery in all its forms. We are committed to acting ethically, transparently, and with integrity in all our commercial dealings and to implementing robust systems and controls to ensure slavery does not occur anywhere within our business or global supplier network.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#001438] mb-4">
              2. Core Compliance Pillars
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((p) => (
                <div key={p.title} className="p-5 border border-gray-200 rounded-md bg-gray-50/50">
                  <h4 className="font-bold text-[#001e62] text-base mb-1.5">{p.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#001438] mb-3">
              3. Supply Chain Due Diligence &amp; Auditing
            </h2>
            <p className="text-gray-700 mb-3">
              Our global supply chain encompasses more than 10,000 direct and indirect suppliers across approximately 70 countries. Given the safety-critical nature of aerospace and defence propulsion, we apply rigorous oversight:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Pre-qualification screening:</strong> Every new supplier is screened against global sanctions, adverse media records, and labor compliance databases prior to contract award.</li>
              <li><strong>Contractual terms:</strong> Standard procurement contracts mandate strict adherence to our Supplier Code of Conduct, including audit rights and immediate termination for non-compliance.</li>
              <li><strong>On-site evaluations:</strong> Independent third-party audits and internal quality inspections assess working conditions, fair pay, and identity document retention policies.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#001438] mb-3">
              4. Whistleblowing &amp; Ethics Line
            </h2>
            <p className="text-gray-700">
              We encourage all employees, contractors, suppliers, and members of the public to speak up about any suspected unethical conduct or human rights violation. Reports can be filed anonymously through the Rolls-Royce Ethics Line, accessible online and via toll-free telephone around the clock in multiple languages. All reports are investigated thoroughly by independent compliance investigators.
            </p>
          </div>

          {/* Sign-off Box */}
          <div className="border-t border-gray-200 pt-8 mt-12 text-sm text-gray-600">
            <p className="font-bold text-[#001438] text-base mb-1">
              Board Approval &amp; Signature
            </p>
            <p>
              This statement has been formally approved by the Board of Directors of Rolls-Royce Holdings plc and is reviewed annually to reflect continuous improvement in our anti-slavery framework.
            </p>
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
