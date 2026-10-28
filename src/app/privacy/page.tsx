"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";
import AccessibilityModal from "@/components/AccessibilityModal";
import { ChevronRight, Shield, Lock, Eye, Mail, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function PrivacyPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccModalOpen, setIsAccModalOpen] = useState(false);

  const rights = [
    { title: "Right of Access", desc: "You have the right to request copies of your personal data." },
    { title: "Right to Rectification", desc: "You have the right to request correction of inaccurate information." },
    { title: "Right to Erasure", desc: "You have the right to request erasure of your data in certain circumstances." },
    { title: "Right to Restrict Processing", desc: "You have the right to request restriction of processing of your data." },
    { title: "Right to Object", desc: "You have the right to object to our processing of your personal data." },
    { title: "Right to Data Portability", desc: "You have the right to request the transfer of your data to another organisation." },
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
          <span className="text-[#001e62] font-semibold">Data privacy</span>
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
            <Shield className="w-3.5 h-3.5" />
            <span>Global Privacy Notice</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-[54px] font-normal tracking-tight mb-4"
          >
            Data privacy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-white/80 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            Our commitment to protecting your personal data, respecting your privacy rights, and complying with global data protection standards.
          </motion.p>
        </div>
      </section>

      {/* 4. Privacy Notice Body */}
      <section className="w-full bg-white py-14 sm:py-20 px-4 sm:px-6 md:px-12 flex-1">
        <div className="max-w-4xl mx-auto text-[#1e293b] space-y-10 text-base leading-relaxed">
          {/* Summary Box */}
          <div className="bg-[#f0f4fd] border border-[#d0e0fb] rounded-lg p-6 sm:p-8">
            <h3 className="font-bold text-lg text-[#001e62] mb-2 flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#001e62]" />
              <span>Rolls-Royce Privacy Commitment</span>
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Rolls-Royce takes the protection of your personal information very seriously. We process data transparently, securely, and strictly in compliance with the UK Data Protection Act 2018, the General Data Protection Regulation (GDPR), and applicable privacy laws worldwide.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#001438] mb-3">
              1. Who is the data controller?
            </h2>
            <p className="text-gray-700">
              The data controller responsible for your personal data collected via this website is Rolls-Royce plc, registered at Kings Place, 90 York Way, London, N1 9AG, United Kingdom. If you have any inquiries regarding how your data is handled, you may reach our Data Protection Officer at{" "}
              <a href="mailto:privacy@rolls-royce.com" className="text-[#001e62] underline font-semibold">
                privacy@rolls-royce.com
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#001438] mb-3">
              2. Personal information we collect
            </h2>
            <p className="text-gray-700 mb-3">
              We may collect and process the following categories of personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Contact information:</strong> Name, professional title, corporate email address, telephone number, and employer organization.</li>
              <li><strong>Technical identifiers:</strong> IP address, browser type and version, device identifier, time zone, and operating system.</li>
              <li><strong>Usage metrics:</strong> Pages visited, interaction duration, search queries submitted within rolls-royce.com, and referring URLs.</li>
              <li><strong>Communications:</strong> Inquiries, feedback, event registrations, and newsletter subscription preferences.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#001438] mb-3">
              3. Legal bases for processing
            </h2>
            <p className="text-gray-700 mb-3">
              We process your personal information on the following legal bases:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Consent:</strong> Where you have opted in to receive marketing communications or approved optional cookies.</li>
              <li><strong>Legitimate interests:</strong> To operate, secure, evaluate, and enhance our commercial operations and digital services.</li>
              <li><strong>Contract performance:</strong> To fulfill contractual commitments to customers, suppliers, and partners.</li>
              <li><strong>Legal compliance:</strong> To satisfy statutory, accounting, export control, and regulatory obligations.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#001438] mb-4">
              4. Your data protection rights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {rights.map((r) => (
                <div key={r.title} className="p-4 border border-gray-200 rounded-md bg-gray-50/60">
                  <h4 className="font-bold text-[#001e62] text-sm mb-1">{r.title}</h4>
                  <p className="text-xs text-gray-600">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#001438] mb-3">
              5. International data transfers &amp; security
            </h2>
            <p className="text-gray-700">
              Rolls-Royce is a global organisation with operations across Europe, the Americas, Asia-Pacific, and the Middle East. Your data may be transferred to and stored in countries outside the UK and European Economic Area. Where international transfers occur, we implement Standard Contractual Clauses (SCCs), International Data Transfer Agreements (IDTAs), and robust technical encryption to safeguard your data.
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
