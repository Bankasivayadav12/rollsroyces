"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";
import AccessibilityModal from "@/components/AccessibilityModal";
import { ChevronRight, Scale, Shield, FileCheck, Building2 } from "lucide-react";
import { motion } from "framer-motion";

export default function LegalPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccModalOpen, setIsAccModalOpen] = useState(false);

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
          <span className="text-[#001e62] font-semibold">Legal information</span>
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
            <Scale className="w-3.5 h-3.5" />
            <span>Corporate Governance</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-[54px] font-normal tracking-tight mb-4"
          >
            Legal information
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-white/80 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            Terms of use, intellectual property policies, company regulatory details, and disclaimer notices for Rolls-Royce digital services.
          </motion.p>
        </div>
      </section>

      {/* 4. Legal Content */}
      <section className="w-full bg-white py-14 sm:py-20 px-4 sm:px-6 md:px-12 flex-1">
        <div className="max-w-4xl mx-auto text-[#1e293b] space-y-10 text-base leading-relaxed">
          {/* Statutory Details Box */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 sm:p-8 flex items-start gap-4">
            <Building2 className="w-6 h-6 text-[#001e62] shrink-0 mt-1" />
            <div className="text-sm text-gray-700 space-y-1">
              <h3 className="font-bold text-base text-[#001438] mb-1">
                Company Registration &amp; Registered Office
              </h3>
              <p><strong>Rolls-Royce plc</strong> (Registered in England and Wales No. 1003142)</p>
              <p><strong>Rolls-Royce Holdings plc</strong> (Registered in England and Wales No. 04706930)</p>
              <p>Registered Office: Kings Place, 90 York Way, London, N1 9AG, United Kingdom</p>
              <p>VAT Registration Number: GB 238 5244 23</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#001438] mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700">
              By accessing and using this website (rolls-royce.com), you acknowledge and agree to be bound by these Terms of Use and our Data Privacy Notice. If you do not agree to these terms, please refrain from using the site. Rolls-Royce reserves the right to modify these terms at any time without prior notice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#001438] mb-3">
              2. Intellectual Property Rights &amp; Trademarks
            </h2>
            <p className="text-gray-700 mb-3">
              All content on this website, including but not limited to text, photographs, graphics, videos, diagrams, sound recordings, and software, is the property of Rolls-Royce plc or its licensors and is protected by international copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-gray-700">
              The Rolls-Royce name, the Rolls-Royce double-R monogram, the Spirit of Ecstasy badge, Trent®, UltraFan®, mtu®, TotalCare®, CorporateCare®, and all associated trade dress are registered trademarks of Rolls-Royce plc and Rolls-Royce Motor Cars Limited (used under licence where applicable). Nothing on this site grants any licence or right to use any trademark without prior written permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#001438] mb-3">
              3. Disclaimer of Warranties
            </h2>
            <p className="text-gray-700">
              This website and its contents are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. Rolls-Royce makes no representations or warranties of any kind, express or implied, including regarding accuracy, completeness, timeliness, non-infringement, or fitness for a particular purpose. Technical specifications, fleet data, and dates are subject to operational change without notice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#001438] mb-3">
              4. Forward-Looking Statements
            </h2>
            <p className="text-gray-700">
              This website contains statements that are &ldquo;forward-looking statements&rdquo; concerning the financial condition, results of operations, and businesses of Rolls-Royce. By their nature, forward-looking statements involve risk and uncertainty because they relate to future events and circumstances that could cause actual outcomes to differ materially from those expressed or implied.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#001438] mb-3">
              5. Limitation of Liability &amp; Governing Law
            </h2>
            <p className="text-gray-700 mb-3">
              To the fullest extent permitted by applicable law, Rolls-Royce plc and its subsidiaries exclude all liability for any direct, indirect, incidental, consequential, or punitive damages arising from the access to, use of, or inability to use this website.
            </p>
            <p className="text-gray-700">
              These terms of use and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of England and Wales. The courts of England shall have exclusive jurisdiction.
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
