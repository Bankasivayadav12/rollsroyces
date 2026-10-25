"use client";

import React, { useState, useEffect, useRef } from "react";
import RollsRoyceLogo from "./RollsRoyceLogo";
import { Search, Menu, X, ArrowRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenSearch?: () => void;
  isSearchOpen?: boolean;
}

export default function Navbar({ onOpenSearch, isSearchOpen }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isSearchActive && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchActive]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isSearchActive) {
        setIsSearchActive(false);
        setSearchQuery("");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSearchActive]);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Products & Services", href: "/products-services" },
    { name: "Innovation", href: "/innovation" },
    { name: "Investors", href: "/investors" },
  ];

  return (
    <>
      <nav
        className={`w-full bg-white sticky top-0 z-40 transition-shadow duration-300 h-[84px] flex items-center ${
          isScrolled ? "shadow-md" : "border-b border-gray-100"
        }`}
      >
        <div className="max-w-[1540px] mx-auto w-full flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 h-full relative">
          {/* Left Group: Rolls-Royce Logo + Navigation Links */}
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-11 h-full">
            <a href="/" className="flex items-center shrink-0 h-full py-2" aria-label="Rolls-Royce Home">
              <RollsRoyceLogo />
            </a>

            {/* Desktop Navigation Links */}
            <ul className="hidden md:flex items-center gap-4 lg:gap-7 xl:gap-9">
              {navLinks.map((link) => (
                <li key={link.name} className="relative flex items-center">
                  <a
                    href={link.href}
                    className="text-[14px] lg:text-[15.5px] xl:text-[16px] font-semibold text-[#001e62] hover:text-[#0a2f8c] tracking-[-0.1px] transition-colors py-2 relative group whitespace-nowrap"
                  >
                    {link.name}
                    {/* Hover indicator line */}
                    <span className="absolute bottom-0 left-0 w-0 h-[2.5px] bg-[#001e62] transition-all duration-300 ease-out group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Group: Single Search Icon (Mobile & Desktop) + Mobile Hamburger */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {/* Search Trigger / Expandable Bar */}
            <div className="relative flex items-center">
              <AnimatePresence mode="wait">
                {isSearchActive && !onOpenSearch ? (
                  <motion.div
                    key="active-search-bar"
                    initial={{ opacity: 0, width: 40 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 40 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="flex items-center bg-gray-50 border border-gray-300 rounded-full px-3.5 sm:px-4 py-1.5 shadow-inner"
                  >
                    <Search className="w-4 h-4 text-[#001e62] shrink-0 mr-2" />
                    <input
                      ref={inputRef}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search..."
                      className="w-36 sm:w-60 lg:w-72 bg-transparent text-sm text-[#001e62] placeholder-gray-400 focus:outline-none"
                    />
                    <button
                      onClick={() => {
                        setIsSearchActive(false);
                        setSearchQuery("");
                      }}
                      className="p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-200 transition-colors ml-1"
                      aria-label="Close search bar"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </motion.div>
                ) : (
                  <button
                    key="search-trigger-btn"
                    onClick={() => {
                      if (onOpenSearch) {
                        onOpenSearch();
                      } else {
                        setIsSearchActive(true);
                      }
                    }}
                    className={`p-2 sm:p-2.5 rounded-full transition-all hover:scale-105 active:scale-95 flex items-center justify-center ${
                      isSearchOpen
                        ? "text-[#e40046] hover:bg-pink-50"
                        : "text-[#001e62] hover:bg-blue-50"
                    }`}
                    aria-label="Open search"
                  >
                    <Search className="w-5 h-5 stroke-[2.4]" />
                  </button>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Hamburger Menu Toggle (Only on Mobile & Tablet < md) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-lg text-[#001e62] hover:bg-gray-100 transition-colors flex items-center justify-center"
              aria-label="Toggle navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-gray-100">
                  <span className="font-bold text-lg text-[#001e62]">Navigation</span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1 rounded-full text-gray-500 hover:text-gray-900"
                    aria-label="Close navigation drawer"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Quick Search Button in Mobile Drawer */}
                <div className="mt-4 mb-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (onOpenSearch) {
                        onOpenSearch();
                      } else {
                        setIsSearchActive(true);
                      }
                    }}
                    className="w-full flex items-center gap-3 px-3.5 py-2.5 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm text-gray-600 border border-gray-200 transition-colors"
                  >
                    <Search className="w-4 h-4 text-gray-500" />
                    <span>Search Rolls-Royce...</span>
                  </button>
                </div>

                <ul className="py-4 space-y-3">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-base sm:text-lg font-semibold text-[#001e62] hover:text-[#0a2f8c] block py-1.5 transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg text-xs text-gray-600">
                <span className="font-semibold block text-gray-900 mb-1">
                  Rolls-Royce Holdings plc
                </span>
                <span>1,327.40 GBX <span className="text-emerald-600 font-bold">▲ +4.80</span></span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
