"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";
import AccessibilityModal from "@/components/AccessibilityModal";
import {
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Check,
  Building,
  Shield,
  Anchor,
  Zap,
  Globe,
  Copy,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ContactUsPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccModalOpen, setIsAccModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("general");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("RollsRoyces@rollsroyces.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setIsSubmitted(true);
  };

  const globalOffices = [
    {
      title: "Global Headquarters",
      city: "London, United Kingdom",
      address: "Kings Place, 90 York Way, London N1 9FX",
      phone: "+44 (0) 20 7222 9020",
      email: "RollsRoyces@rollsroyces.com",
      role: "Corporate Executive & Board Office",
    },
    {
      title: "Submarines & Naval Nuclear Site",
      city: "Derby, United Kingdom",
      address: "PO Box 2000, Raynesway, Derby DE21 7XX",
      phone: "+44 (0) 1332 661461",
      email: "RollsRoyces@rollsroyces.com",
      role: "UK Sovereign Nuclear Propulsion Facility",
    },
    {
      title: "Power Systems Headquarters (mtu)",
      city: "Friedrichshafen, Germany",
      address: "Maybachplatz 1, 88045 Friedrichshafen",
      phone: "+49 7541 90-7003",
      email: "RollsRoyces@rollsroyces.com",
      role: "Global Marine & Distributed Clean Energy HQ",
    },
    {
      title: "Defence & Aerospace Engineering",
      city: "Bristol, United Kingdom",
      address: "Whitchurch Road, Filton, Bristol BS34 7QE",
      phone: "+44 (0) 117 979 1234",
      email: "RollsRoyces@rollsroyces.com",
      role: "Military Combat Turbofan & LiftSystem Hub",
    },
    {
      title: "North America Regional HQ",
      city: "Reston, Virginia, USA",
      address: "1875 Explorer Street, Suite 200, Reston VA 20190",
      phone: "+1 703 834 1700",
      email: "RollsRoyces@rollsroyces.com",
      role: "North American Defence & Aerospace Operations",
    },
    {
      title: "Asia, Gulf & Africa Executive Directorate",
      city: "Regional Executive Offices",
      address: "Serving Partner Navies, Airlines & Industrial Clients",
      phone: "+44 (0) 20 7222 9020",
      email: "RollsRoyces@rollsroyces.com",
      role: "Led by C.C.O Pritham Mital & Regional Leadership",
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
        <div className="max-w-[1540px] mx-auto flex items-center gap-2 text-gray-600 font-normal">
          <Link href="/" className="hover:text-[#001e62] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 stroke-[2.2] text-gray-400" />
          <span className="text-[#001e62] font-semibold">Contact us</span>
        </div>
      </div>

      {/* 3. Hero Header Section */}
      <section className="relative w-full bg-[#001438] text-white py-14 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(#0066ff_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001438] via-[#001438]/95 to-[#001438]/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 backdrop-blur-md border border-blue-400/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-5">
            <Mail className="w-4 h-4 text-cyan-300" />
            <span>Official Global Inquiries</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-5">
            Contact Rolls Royces
          </h1>

          <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal max-w-2xl mx-auto mb-8">
            Connect with our corporate headquarters, defense procurement officers, nuclear submarine engineers, and commercial power teams worldwide.
          </p>

          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm">
            <span className="text-white/80 font-normal">Primary Corporate Email:</span>
            <button
              onClick={handleCopyEmail}
              className="text-cyan-300 font-bold hover:underline flex items-center gap-1.5 cursor-pointer"
            >
              <span>RollsRoyces@rollsroyces.com</span>
              {copiedEmail ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5 opacity-80" />
              )}
            </button>
          </div>
        </div>
      </section>

      {/* 4. Contact Form & Fast Assistance Grid */}
      <section className="w-full bg-[#f8fafc] py-14 sm:py-20 px-4 sm:px-6 md:px-12">
        <div className="max-w-[1540px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Direct Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-lg shadow-xl border border-gray-200/80 p-6 sm:p-10">
            <h2 className="text-2xl font-bold text-[#001438] mb-2">
              Send an Official Inquiry
            </h2>
            <p className="text-sm text-gray-500 mb-8 font-normal">
              Our executive correspondence team reviews and routes all messages to the appropriate division leaders.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5 shadow-inner">
                  <Check className="w-8 h-8 stroke-[2.5]" />
                </div>
                <h3 className="text-2xl font-bold text-[#001438] mb-2">
                  Message Dispatched Successfully
                </h3>
                <p className="text-gray-600 text-sm max-w-md mx-auto mb-6 font-normal">
                  Thank you, <span className="font-semibold text-gray-900">{name}</span>. Your correspondence regarding{" "}
                  <span className="font-semibold text-[#001e62]">{department}</span> has been logged and routed to our team at{" "}
                  <span className="font-semibold text-[#001e62]">RollsRoyces@rollsroyces.com</span>. We will follow up with you at <span className="font-semibold">{email}</span>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setName("");
                    setEmail("");
                    setPhone("");
                    setMessage("");
                  }}
                  className="px-6 py-2.5 bg-[#001e62] hover:bg-[#0a2f8c] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Captain James Vance"
                      className="w-full px-4 py-3 rounded-sm border border-gray-300 text-sm focus:outline-none focus:border-[#0066ff] focus:ring-1 focus:ring-[#0066ff] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                      Work Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@organization.com"
                      className="w-full px-4 py-3 rounded-sm border border-gray-300 text-sm focus:outline-none focus:border-[#0066ff] focus:ring-1 focus:ring-[#0066ff] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+44 20 7222 9020"
                      className="w-full px-4 py-3 rounded-sm border border-gray-300 text-sm focus:outline-none focus:border-[#0066ff] focus:ring-1 focus:ring-[#0066ff] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                      Division / Department <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className="w-full px-4 py-3 rounded-sm border border-gray-300 text-sm focus:outline-none focus:border-[#0066ff] focus:ring-1 focus:ring-[#0066ff] bg-white transition-all"
                    >
                      <option value="general">General Executive Inquiries</option>
                      <option value="submarines">Submarines &amp; Naval Nuclear</option>
                      <option value="defence">Defence &amp; Combat Aerospace</option>
                      <option value="power-systems">Power Systems &amp; mtu Solutions</option>
                      <option value="investors">Investor Relations &amp; Financial Governance</option>
                      <option value="press">Media &amp; Communications Desk</option>
                      <option value="careers">Careers &amp; Engineering Recruitment</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                    Message / Technical Specifications <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Please specify program scope, procurement requirements, or inquiry details..."
                    className="w-full px-4 py-3 rounded-sm border border-gray-300 text-sm focus:outline-none focus:border-[#0066ff] focus:ring-1 focus:ring-[#0066ff] transition-all resize-y"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#0066ff] hover:bg-[#0052cc] text-white font-bold text-xs uppercase tracking-[1.5px] rounded-sm shadow-xl transition-all cursor-pointer inline-flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Key Contacts & Fast Directory */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200/80 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-[#001438] mb-4">
                Executive Leadership Contacts
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-6 font-normal">
                Direct contacts for executive departments and regional directors:
              </p>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-3.5 rounded bg-gray-50 border border-gray-100 flex items-start justify-between">
                  <div>
                    <span className="font-bold text-[#001438] block">Pritham Mital</span>
                    <span className="text-gray-500 text-xs">C.C.O of Rolls Royces (Asia, Gulf &amp; Africa)</span>
                  </div>
                  <span className="font-mono text-[11px] text-[#0066ff]">RollsRoyces@rollsroyces.com</span>
                </div>

                <div className="p-3.5 rounded bg-gray-50 border border-gray-100 flex items-start justify-between">
                  <div>
                    <span className="font-bold text-[#001438]">Agrwal . CH</span>
                    <span className="text-gray-500 text-xs block">Indian Head</span>
                  </div>
                  <span className="font-mono text-[11px] text-[#0066ff]">RollsRoyces@rollsroyces.com</span>
                </div>

                <div className="p-3.5 rounded bg-gray-50 border border-gray-100 flex items-start justify-between">
                  <div>
                    <span className="font-bold text-[#001438]">Danion Mishra</span>
                    <span className="text-gray-500 text-xs block">South India Head</span>
                  </div>
                  <span className="font-mono text-[11px] text-[#0066ff]">RollsRoyces@rollsroyces.com</span>
                </div>

                <div className="p-3.5 rounded bg-gray-50 border border-gray-100 flex items-start justify-between">
                  <div>
                    <span className="font-bold text-[#001438]">Gopal Subramanium Raju</span>
                    <span className="text-gray-500 text-xs block">Legal Advisor</span>
                  </div>
                  <span className="font-mono text-[11px] text-[#0066ff]">RollsRoyces@rollsroyces.com</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <Link
                  href="/about#our-leadership"
                  className="text-xs font-bold uppercase tracking-wider text-[#001e62] hover:text-[#0066ff] inline-flex items-center gap-1.5"
                >
                  <span>View All 7 Executive Team Members</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="bg-[#001438] text-white rounded-lg p-6 sm:p-8">
              <h4 className="text-base font-bold mb-2">Emergency &amp; Aircraft On Ground (AOG)</h4>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4 font-normal">
                Operational 24/7/365 worldwide for mission-critical aircraft, defense propulsion, and marine emergency standby systems.
              </p>
              <div className="text-sm font-bold text-cyan-300">
                +44 (0) 1332 242424 / RollsRoyces@rollsroyces.com
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Global Facilities & Headquarters Directory */}
      <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 md:px-12 border-t border-gray-200">
        <div className="max-w-[1540px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-xs sm:text-sm font-bold tracking-[2px] uppercase text-[#0066ff] mb-2">
              Worldwide Operations
            </h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#001438] tracking-tight">
              Global Operating Locations &amp; Campuses
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {globalOffices.map((office) => (
              <div
                key={office.title}
                className="bg-gray-50 rounded-sm border border-gray-200/80 p-6 sm:p-7 flex flex-col justify-between hover:bg-white hover:border-[#0066ff] hover:shadow-lg transition-all"
              >
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0066ff] block mb-1">
                    {office.role}
                  </span>
                  <h4 className="text-xl font-bold text-[#001438] mb-2">
                    {office.title}
                  </h4>
                  <div className="text-xs font-semibold text-gray-500 mb-4 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" />
                    <span>{office.city}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-4 font-normal">
                    {office.address}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200/60 text-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Phone className="w-3.5 h-3.5 text-[#0066ff]" />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#001e62] font-semibold">
                    <Mail className="w-3.5 h-3.5 text-[#0066ff]" />
                    <span>{office.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Official Rolls Royces Footer */}
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
