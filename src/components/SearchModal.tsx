"use client";

import React, { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectStory?: (index: number) => void;
}

const mockSearchData = [
  {
    category: "Civil Aerospace",
    title: "Trent 1000 XE – Next-Generation Widebody Efficiency",
    slideIndex: 0,
    desc: "Discover the enhanced durability, fuel burn improvements, and architecture of the Trent 1000 XE.",
  },
  {
    category: "Power Systems",
    title: "Series 8000 Marine Engine – A Legacy of Excellence",
    slideIndex: 1,
    desc: "Ultra high-power marine propulsion delivering up to 10,000 kW for government and commercial vessels.",
  },
  {
    category: "Defence",
    title: "AE Family – The Story Behind the Mission-Critical Engine",
    slideIndex: 2,
    desc: "Powering tactical transport aircraft worldwide with proven operational reliability.",
  },
  {
    category: "Innovation",
    title: "UltraFan® – Pioneering Sustainable Aviation Architecture",
    slideIndex: 0,
    desc: "The world's largest aerospace demonstrator tested with 100% Sustainable Aviation Fuel (SAF).",
  },
  {
    category: "Investors",
    title: "Full Year 2025 Financial Results & Strategic Milestones",
    slideIndex: 0,
    desc: "Record operating profit, strong cash generation, and commercial momentum across all divisions.",
  },
];

export default function SearchModal({ isOpen, onClose, onSelectStory }: SearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const filteredResults = query.trim()
    ? mockSearchData.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex justify-center pt-28 px-4 bg-[#060c1c]/75 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, y: -25, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-full max-w-3xl"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3">
              <div className="flex-1 relative flex items-center bg-white rounded-full px-5 py-3.5 shadow-2xl">
                <Search className="w-5 h-5 text-[#001e62] stroke-[2.5] mr-3 shrink-0" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products, technologies, news, and reports..."
                  autoFocus
                  className="w-full bg-transparent text-[#001438] placeholder-gray-400 text-lg outline-none font-medium"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="p-1 text-gray-400 hover:text-gray-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
              <button
                onClick={onClose}
                className="px-5 py-3.5 bg-white/15 hover:bg-white text-white hover:text-[#001438] rounded-full text-sm font-semibold transition-all border border-white/20"
              >
                Close
              </button>
            </div>

            {/* Quick Suggestions */}
            <div className="mt-5 flex items-center flex-wrap gap-2 text-sm">
              <span className="text-white/70 font-medium text-xs uppercase tracking-wider mr-2">
                Popular:
              </span>
              {["Trent 1000 XE", "Series 8000", "AE 2100", "Sustainable Aviation", "Financials"].map(
                (tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/25 text-white text-xs font-medium border border-white/15 transition-all"
                  >
                    {tag}
                  </button>
                )
              )}
            </div>

            {/* Results dropdown */}
            {query.trim() && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 max-h-96 overflow-y-auto"
              >
                {filteredResults.length > 0 ? (
                  filteredResults.map((result, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        if (onSelectStory) onSelectStory(result.slideIndex);
                        onClose();
                      }}
                      className="p-4 border-b border-gray-100 last:border-b-0 hover:bg-blue-50/60 cursor-pointer transition-colors"
                    >
                      <span className="text-[11px] font-bold text-[#001e62] uppercase tracking-wider">
                        {result.category}
                      </span>
                      <h4 className="text-base font-semibold text-gray-900 mt-0.5">
                        {result.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-1">
                        {result.desc}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="p-8 text-center text-gray-500">
                    No results found for &ldquo;{query}&rdquo;.
                  </div>
                )}
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
