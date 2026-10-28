"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";
import AccessibilityModal from "@/components/AccessibilityModal";
import { ChevronRight, Settings, Check, Lock, Info, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieSettingsPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccModalOpen, setIsAccModalOpen] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Preference state
  const [analytics, setAnalytics] = useState(true);
  const [functional, setFunctional] = useState(true);
  const [marketing, setMarketing] = useState(false);

  const handleSave = () => {
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
    }, 4000);
  };

  const handleAcceptAll = () => {
    setAnalytics(true);
    setFunctional(true);
    setMarketing(true);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
    }, 4000);
  };

  const handleRejectNonEssential = () => {
    setAnalytics(false);
    setFunctional(false);
    setMarketing(false);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
    }, 4000);
  };

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
          <a href="/cookies" className="hover:text-[#001e62] transition-colors">
            Use of cookies
          </a>
          <ChevronRight className="w-3.5 h-3.5 stroke-[2.2] text-gray-400" />
          <span className="text-[#001e62] font-semibold">Cookie Settings</span>
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
            <Settings className="w-3.5 h-3.5" />
            <span>Privacy Preference Centre</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-[54px] font-normal tracking-tight mb-4"
          >
            Cookie Settings
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-white/80 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            Manage and customize your consent preferences for cookies and tracking technologies used on rolls-royce.com.
          </motion.p>
        </div>
      </section>

      {/* 4. Preference Manager Form */}
      <section className="w-full bg-white py-14 sm:py-20 px-4 sm:px-6 md:px-12 flex-1">
        <div className="max-w-3xl mx-auto">
          {/* Success Banner */}
          <AnimatePresence>
            {savedSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-8 p-4 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-md flex items-center gap-3 text-sm font-medium"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Your cookie preferences have been successfully updated.</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 pb-8 border-b border-gray-200">
            <button
              onClick={handleAcceptAll}
              className="px-5 py-2.5 rounded-full bg-[#001e62] hover:bg-[#0a2f8c] text-white text-sm font-semibold transition-colors shadow-sm cursor-pointer"
            >
              Accept All Cookies
            </button>
            <button
              onClick={handleRejectNonEssential}
              className="px-5 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-semibold transition-colors border border-gray-300 cursor-pointer"
            >
              Reject Non-Essential
            </button>
            <button
              onClick={handleSave}
              className="px-5 py-2.5 rounded-full bg-white hover:bg-gray-50 text-[#001e62] border border-[#001e62] text-sm font-semibold transition-colors cursor-pointer ml-auto"
            >
              Save Preferences
            </button>
          </div>

          {/* Categories Accordions */}
          <div className="space-y-6">
            {/* 1. Necessary */}
            <div className="border border-gray-200 rounded-lg p-6 bg-gray-50/40">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-[#001438]">
                      Strictly Necessary Cookies
                    </h3>
                    <Lock className="w-4 h-4 text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    These cookies are necessary for the website to function securely and cannot be switched off in our systems. They are usually set in response to actions made by you which amount to a request for services, such as setting your privacy preferences or logging in.
                  </p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 bg-gray-200 text-gray-700 rounded-full shrink-0">
                  Always Active
                </span>
              </div>
            </div>

            {/* 2. Analytics */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white hover:border-gray-300 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="pr-4">
                  <h3 className="text-lg font-bold text-[#001438] mb-1">
                    Performance &amp; Analytics Cookies
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site.
                  </p>
                  <span className="text-xs text-gray-400">
                    Third-party partners: Google Analytics, Adobe Metrics
                  </span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#001e62]"></div>
                </label>
              </div>
            </div>

            {/* 3. Functional */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white hover:border-gray-300 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="pr-4">
                  <h3 className="text-lg font-bold text-[#001438] mb-1">
                    Functionality Cookies
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    These cookies enable the website to provide enhanced functionality and personalisation, such as video players, location preferences, and customized content streams.
                  </p>
                  <span className="text-xs text-gray-400">
                    Third-party partners: Vimeo, Brightcove, YouTube
                  </span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                  <input
                    type="checkbox"
                    checked={functional}
                    onChange={(e) => setFunctional(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#001e62]"></div>
                </label>
              </div>
            </div>

            {/* 4. Marketing */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white hover:border-gray-300 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="pr-4">
                  <h3 className="text-lg font-bold text-[#001438] mb-1">
                    Targeting &amp; Advertising Cookies
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    These cookies may be set through our site by our advertising and social media partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.
                  </p>
                  <span className="text-xs text-gray-400">
                    Third-party partners: LinkedIn Insight, DoubleClick
                  </span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                  <input
                    type="checkbox"
                    checked={marketing}
                    onChange={(e) => setMarketing(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#001e62]"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Bottom Save Action */}
          <div className="mt-10 pt-6 border-t border-gray-200 flex justify-end">
            <button
              onClick={handleSave}
              className="px-8 py-3 rounded-full bg-[#001e62] hover:bg-[#0a2f8c] text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              Save My Preferences
            </button>
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
