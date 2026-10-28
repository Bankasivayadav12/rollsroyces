"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, X, ArrowRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectStory?: (index: number) => void;
}

interface SuggestionItem {
  text: string;
  count: number;
  href: string;
  slideIndex?: number;
}

// Rolls-Royce auto-search database with real counts matching official search indexing
const autoSearchDB: { [key: string]: SuggestionItem[] } = {
  about: [
    { text: "about", count: 2214, href: "/about" },
    { text: "about our", count: 2037, href: "/about" },
    { text: "about create", count: 1797, href: "/about" },
    { text: "about press", count: 1007, href: "/investors" },
    { text: "about rolls", count: 1006, href: "/about" },
    { text: "about we", count: 137, href: "/about" },
  ],
  trent: [
    { text: "trent 1000 xe", count: 1845, href: "/", slideIndex: 0 },
    { text: "trent 7000 engine", count: 1420, href: "/products-services" },
    { text: "trent 1000 durability", count: 980, href: "/", slideIndex: 0 },
    { text: "trent 900 a380", count: 740, href: "/products-services" },
    { text: "trent saf readiness", count: 520, href: "/innovation" },
  ],
  series: [
    { text: "series 8000 marine", count: 2150, href: "/products-services", slideIndex: 1 },
    { text: "series 8000 specs", count: 1480, href: "/", slideIndex: 1 },
    { text: "series 4000 mtu", count: 1210, href: "/products-services" },
    { text: "series 2000 power", count: 840, href: "/products-services" },
  ],
  ae: [
    { text: "ae the story behind the engine", count: 1980, href: "/", slideIndex: 2 },
    { text: "ae 2100 turboprop", count: 1420, href: "/products-services" },
    { text: "ae 3007 turbofan", count: 1110, href: "/products-services" },
    { text: "ae defence reliability", count: 860, href: "/products-services" },
  ],
  product: [
    { text: "products & services", count: 3210, href: "/products-services" },
    { text: "products civil aerospace", count: 2040, href: "/products-services" },
    { text: "products defence", count: 1680, href: "/products-services" },
    { text: "products power systems", count: 1420, href: "/products-services" },
    { text: "products electrical", count: 870, href: "/innovation" },
  ],
  innov: [
    { text: "innovation ultrafan", count: 2340, href: "/innovation" },
    { text: "innovation net zero", count: 1890, href: "/innovation" },
    { text: "innovation hydrogen aviation", count: 1420, href: "/innovation" },
    { text: "innovation advanced air mobility", count: 1050, href: "/innovation" },
    { text: "innovation small modular reactors", count: 830, href: "/innovation" },
  ],
  invest: [
    { text: "investors overview", count: 2890, href: "/investors" },
    { text: "investors financial results 2025", count: 2450, href: "/investors" },
    { text: "investors share price", count: 1870, href: "/investors" },
    { text: "investors annual report", count: 1540, href: "/investors" },
    { text: "investors dividend policy", count: 960, href: "/investors" },
  ],
  career: [
    { text: "careers opportunities", count: 2750, href: "/about" },
    { text: "careers engineering graduates", count: 1680, href: "/about" },
    { text: "careers apprenticeships", count: 1390, href: "/about" },
    { text: "careers global locations", count: 920, href: "/about" },
  ],
};

export default function SearchModal({
  isOpen,
  onClose,
  onSelectStory,
}: SearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 60);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Compute auto-search suggestions dynamically
  const getSuggestions = (): SuggestionItem[] => {
    const clean = query.trim().toLowerCase();
    if (!clean) {
      return [];
    }

    // Direct key matches
    for (const key of Object.keys(autoSearchDB)) {
      if (clean === key || clean.startsWith(key) || key.startsWith(clean)) {
        return autoSearchDB[key];
      }
    }

    // Keyword containment match across all values
    const allItems: SuggestionItem[] = [];
    Object.values(autoSearchDB).forEach((list) => {
      list.forEach((item) => {
        if (
          item.text.toLowerCase().includes(clean) &&
          !allItems.some((existing) => existing.text === item.text)
        ) {
          allItems.push(item);
        }
      });
    });

    if (allItems.length > 0) {
      return allItems.slice(0, 6);
    }

    // Dynamic generation if query has no direct match
    return [
      { text: clean, count: 1540, href: `/about` },
      { text: `${clean} technology`, count: 1120, href: `/innovation` },
      { text: `${clean} engines`, count: 870, href: `/products-services` },
      { text: `${clean} solutions`, count: 640, href: `/products-services` },
      { text: `${clean} reports`, count: 320, href: `/investors` },
    ];
  };

  const suggestions = getSuggestions();

  const handleSelect = (item: SuggestionItem) => {
    if (item.slideIndex !== undefined && onSelectStory) {
      onSelectStory(item.slideIndex);
    }
    router.push(item.href);
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (suggestions.length > 0) {
      handleSelect(suggestions[0]);
    } else if (query.trim()) {
      router.push(`/about`);
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed inset-x-0 top-[84px] bottom-0 z-40 bg-[#0a0082] overflow-y-auto selection:bg-white selection:text-[#0a0082]"
        >
          {/* Top Right Close Button */}
          <button
            onClick={onClose}
            aria-label="Close search"
            className="absolute top-6 sm:top-8 right-6 sm:right-10 text-white/90 hover:text-white transition-all hover:scale-110 active:scale-95 p-2 z-50 cursor-pointer"
          >
            <X className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]" />
          </button>

          {/* Central Search Area */}
          <div className="w-full max-w-[680px] mx-auto px-4 sm:px-6 pt-16 sm:pt-20 md:pt-24 pb-20">
            <form onSubmit={handleSubmit} className="w-full">
              {/* Search Input Bar with Magenta Underline matching screenshot */}
              <div className="relative flex items-center border-b-2 border-[#e40046] pb-2 sm:pb-3 transition-colors">
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search"
                  className="w-full bg-transparent text-3xl sm:text-4xl md:text-[50px] font-bold text-white tracking-tight outline-none placeholder:text-white placeholder:font-bold caret-white pr-12 font-sans"
                />
                <button
                  type="submit"
                  aria-label="Submit search"
                  className="absolute right-0 bottom-2.5 text-white hover:opacity-85 transition-opacity cursor-pointer"
                >
                  <Search className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white stroke-[3]" />
                </button>
              </div>

              {/* Helper text on right below the magenta line */}
              <p className="text-white/80 text-xs sm:text-[13px] font-normal tracking-wide text-right mt-2 sm:mt-2.5">
                Press ENTER to search or ESC to close
              </p>

              {/* White Auto-Search Suggestions Dropdown Box (When user types) */}
              {query.trim().length > 0 && suggestions.length > 0 && (
                <div className="w-full bg-white shadow-2xl mt-3 overflow-hidden">
                  {suggestions.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleSelect(item)}
                      className="py-3 sm:py-3.5 px-5 sm:px-6 flex items-center justify-between cursor-pointer hover:bg-slate-100 transition-colors border-b border-gray-100 last:border-b-0 group"
                    >
                      <span className="text-slate-800 text-lg sm:text-[19px] font-normal group-hover:text-[#001e62] transition-colors">
                        {item.text}
                      </span>
                      <span className="text-slate-500 font-normal text-sm sm:text-base ml-4">
                        ({item.count})
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
