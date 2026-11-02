"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";
import AccessibilityModal from "@/components/AccessibilityModal";
import {
  ChevronRight,
  Radio,
  Mail,
  CheckCircle2,
  Bell,
  Shield,
  Layers,
  Sparkles,
  ArrowRight,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

export default function SignUpLatestNewsPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccModalOpen, setIsAccModalOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [frequency, setFrequency] = useState("immediate");
  const [selectedTopics, setSelectedTopics] = useState<string[]>([
    "all",
    "submarines",
    "defence",
    "power-systems",
    "innovation",
  ]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const topicsList = [
    { id: "all", label: "All Press Releases & Announcements" },
    { id: "submarines", label: "Submarines & Naval Nuclear" },
    { id: "defence", label: "Defence & Combat Aerospace" },
    { id: "power-systems", label: "Power Systems & mtu Clean Energy" },
    { id: "innovation", label: "Innovation, SMR & Net Zero" },
    { id: "investors", label: "Financial Results & Investor RNS" },
  ];

  const toggleTopic = (id: string) => {
    if (id === "all") {
      if (selectedTopics.includes("all")) {
        setSelectedTopics([]);
      } else {
        setSelectedTopics(topicsList.map((t) => t.id));
      }
      return;
    }

    if (selectedTopics.includes(id)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== id && t !== "all"));
    } else {
      setSelectedTopics([...selectedTopics, id]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
  };

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
          <span className="text-[#001e62] font-semibold">
            Sign up to get the latest news
          </span>
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
            <Radio className="w-4 h-4 text-cyan-300" />
            <span>Rolls Royces Alert Centre</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-5">
            Sign Up to Get the Latest News
          </h1>

          <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal max-w-2xl mx-auto">
            Stay informed with official regulatory announcements, technological milestones, quarterly financial earnings, and strategic partnerships from across Rolls Royces.
          </p>
        </div>
      </section>

      {/* 4. Interactive Subscription Form */}
      <section className="w-full bg-[#f8fafc] py-14 sm:py-20 px-4 sm:px-6 md:px-12 flex-1">
        <div className="max-w-3xl mx-auto">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-lg shadow-xl border border-emerald-100 p-8 sm:p-12 text-center"
            >
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                <Check className="w-8 h-8 stroke-[2.5]" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#001438] mb-3">
                Subscription Confirmed
              </h2>

              <p className="text-gray-600 text-base leading-relaxed max-w-md mx-auto mb-8 font-normal">
                Thank you for subscribing, <span className="font-semibold text-gray-900">{fullName || "valued subscriber"}</span>. A confirmation dispatch has been routed to <span className="font-semibold text-[#001e62]">{email}</span>.
              </p>

              <div className="bg-blue-50/70 border border-blue-200/60 rounded-md p-4 text-xs text-gray-600 max-w-md mx-auto mb-8 text-left">
                <span className="font-bold text-[#001e62] block mb-1">
                  Active Subscription Topics:
                </span>
                {selectedTopics.length === 0 ? (
                  <span>All general updates</span>
                ) : (
                  <span>
                    {selectedTopics
                      .map((id) => topicsList.find((t) => t.id === id)?.label)
                      .filter(Boolean)
                      .join(", ")}
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-sm border border-gray-300 text-xs font-semibold uppercase tracking-wider text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Edit Preferences
                </button>
                <Link
                  href="/"
                  className="px-6 py-2.5 rounded-sm bg-[#001e62] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#0a2f8c] transition-colors"
                >
                  Return to Homepage
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-xl border border-gray-200/80 p-6 sm:p-10 lg:p-12"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <div>
                  <h3 className="text-xl font-bold text-[#001438] mb-1">
                    Subscriber Details
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mb-6 font-normal">
                    Please provide your contact information to tailor communications.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full px-4 py-3 rounded-sm border border-gray-300 text-sm focus:outline-none focus:border-[#0066ff] focus:ring-1 focus:ring-[#0066ff] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
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

                  <div className="mt-5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                      Company / Organization (Optional)
                    </label>
                    <input
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="e.g. Ministry of Defence, Aerospace Group, Bloomberg"
                      className="w-full px-4 py-3 rounded-sm border border-gray-300 text-sm focus:outline-none focus:border-[#0066ff] focus:ring-1 focus:ring-[#0066ff] transition-all"
                    />
                  </div>
                </div>

                {/* Topics Selection */}
                <div className="pt-6 border-t border-gray-100">
                  <h3 className="text-xl font-bold text-[#001438] mb-1">
                    Areas of Interest
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mb-5 font-normal">
                    Select the divisions and topics you wish to receive updates regarding.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {topicsList.map((topic) => {
                      const isSelected = selectedTopics.includes(topic.id);
                      return (
                        <button
                          key={topic.id}
                          type="button"
                          onClick={() => toggleTopic(topic.id)}
                          className={`flex items-center gap-3 p-3.5 rounded-sm border text-left transition-all cursor-pointer ${
                            isSelected
                              ? "bg-blue-50/80 border-[#0066ff] text-[#001e62] shadow-sm font-semibold"
                              : "bg-white border-gray-200 text-gray-700 hover:border-gray-300 font-normal"
                          }`}
                        >
                          <div
                            className={`w-4 h-4 rounded-sm border flex items-center justify-center shrink-0 transition-colors ${
                              isSelected
                                ? "bg-[#0066ff] border-[#0066ff] text-white"
                                : "border-gray-400 bg-white"
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span className="text-xs sm:text-sm">{topic.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Frequency Preferences */}
                <div className="pt-6 border-t border-gray-100">
                  <h3 className="text-xl font-bold text-[#001438] mb-1">
                    Dispatch Frequency
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mb-4 font-normal">
                    Choose how often you want alerts delivered to your inbox.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: "immediate", label: "Real-Time / Immediate" },
                      { id: "weekly", label: "Weekly Digest" },
                      { id: "monthly", label: "Monthly Executive Review" },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setFrequency(opt.id)}
                        className={`p-3.5 rounded-sm border text-center transition-all cursor-pointer text-xs font-semibold uppercase tracking-wider ${
                          frequency === opt.id
                            ? "bg-[#001e62] text-white border-[#001e62] shadow-md"
                            : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Consent & Submit */}
                <div className="pt-6 border-t border-gray-100 space-y-5">
                  <p className="text-xs text-gray-500 leading-relaxed font-normal">
                    By submitting, you agree to receive official news alerts from Rolls Royces plc in accordance with our{" "}
                    <Link href="/privacy" className="text-[#001e62] underline hover:text-[#0066ff]">
                      Privacy Policy
                    </Link>. You can unsubscribe at any time using the link in the footer of any alert email.
                  </p>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#0066ff] hover:bg-[#0052cc] text-white font-bold text-xs uppercase tracking-[1.5px] rounded-sm shadow-xl transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                  >
                    Subscribe to Alerts
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </div>
      </section>

      {/* 5. Official Rolls Royces Footer */}
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
