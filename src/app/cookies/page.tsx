"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";
import AccessibilityModal from "@/components/AccessibilityModal";
import { ChevronRight, ShieldCheck, Cookie, Settings, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function CookiesPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccModalOpen, setIsAccModalOpen] = useState(false);

  const cookieTypes = [
    {
      name: "Strictly Necessary Cookies",
      badge: "Always Active",
      description:
        "These cookies are essential for you to browse the Rolls-Royce website and use its features, such as accessing secure areas, language selection, and maintaining session security. Without these cookies, the services you have requested cannot be provided.",
      examples: ["Session identifier", "CSRF security tokens", "Cookie consent preferences"],
    },
    {
      name: "Performance & Analytics Cookies",
      badge: "Optional",
      description:
        "These cookies collect information about how visitors use our website, for instance which pages visitors go to most often, and if they get error messages from web pages. These cookies don't collect information that directly identifies a visitor. All information these cookies collect is aggregated and anonymous.",
      examples: ["Page visit statistics", "Time spent on sections", "Traffic source referrers"],
    },
    {
      name: "Functionality Cookies",
      badge: "Optional",
      description:
        "These cookies allow the website to remember choices you make (such as your user name, language or the region you are in) and provide enhanced, more personal features. They may also be used to provide services you have asked for such as watching a video or commenting on a blog.",
      examples: ["Video playback preferences", "Font size adjustments", "Region selection"],
    },
    {
      name: "Targeting & Advertising Cookies",
      badge: "Optional",
      description:
        "These cookies are used to deliver adverts more relevant to you and your interests. They are also used to limit the number of times you see an advertisement as well as help measure the effectiveness of advertising campaigns.",
      examples: ["Ad measurement", "Social media sharing", "Campaign attribution"],
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
          <span className="text-[#001e62] font-semibold">Use of cookies</span>
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
            <Cookie className="w-3.5 h-3.5" />
            <span>Transparency &amp; Privacy</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-[54px] font-normal tracking-tight mb-4"
          >
            Use of cookies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-white/80 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            How Rolls-Royce uses cookies and related technologies to provide you with the best possible digital experience and safeguard your privacy.
          </motion.p>
        </div>
      </section>

      {/* 4. Policy Content */}
      <section className="w-full bg-white py-14 sm:py-20 px-4 sm:px-6 md:px-12 flex-1">
        <div className="max-w-4xl mx-auto text-[#1e293b]">
          {/* Quick Action Banner */}
          <div className="bg-[#f0f4fd] border border-[#d0e0fb] rounded-lg p-6 sm:p-8 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-[#001e62] mb-1">
                Customize your cookie preferences
              </h3>
              <p className="text-sm text-gray-600">
                You can review or change your cookie choices at any time through our interactive preference manager.
              </p>
            </div>
            <a
              href="/cookie-settings"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#001e62] text-white text-sm font-semibold hover:bg-[#0a2f8c] transition-colors shrink-0 shadow-sm"
            >
              <Settings className="w-4 h-4" />
              <span>Cookie Settings</span>
            </a>
          </div>

          <div className="space-y-8 text-base leading-relaxed text-gray-700">
            <div>
              <h2 className="text-2xl font-bold text-[#001438] mb-3">
                1. What is a cookie?
              </h2>
              <p>
                A cookie is a small piece of text sent to your browser by a website you visit. It helps the site remember information about your visit, which can make it easier to visit the site again and make the site more useful to you. Other technologies, including data stored on your web browser or device, identifiers associated with your device, and other software, are used for similar purposes. In this policy, we refer to all of these technologies as &ldquo;cookies&rdquo;.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#001438] mb-4">
                2. Categories of cookies we use
              </h2>
              <div className="space-y-6">
                {cookieTypes.map((type) => (
                  <div
                    key={type.name}
                    className="border border-gray-200 rounded-md p-6 bg-gray-50/50"
                  >
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <h3 className="text-lg font-bold text-[#001e62]">
                        {type.name}
                      </h3>
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                          type.badge === "Always Active"
                            ? "bg-[#001e62] text-white"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {type.badge}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{type.description}</p>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
                      <span className="font-semibold text-gray-700">Examples:</span>
                      {type.examples.map((ex) => (
                        <span
                          key={ex}
                          className="bg-white border border-gray-200 px-2.5 py-1 rounded-sm"
                        >
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#001438] mb-3">
                3. Managing cookies in your browser
              </h2>
              <p className="mb-3">
                Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit{" "}
                <a
                  href="https://www.aboutcookies.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#001e62] underline font-medium hover:text-[#0a2f8c]"
                >
                  www.aboutcookies.org
                </a>{" "}
                or{" "}
                <a
                  href="https://www.allaboutcookies.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#001e62] underline font-medium hover:text-[#0a2f8c]"
                >
                  www.allaboutcookies.org
                </a>.
              </p>
              <p>
                Please note that if you choose to disable cookies, some parts of our website may not function properly or provide the optimal interactive user experience.
              </p>
            </div>
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
