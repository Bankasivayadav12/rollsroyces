"use client";

import React, { useState, useEffect, useRef } from "react";
import RollsRoyceLogo from "./RollsRoyceLogo";
import { Search, Menu, X, ArrowRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenSearch?: () => void;
}

export default function Navbar({ onOpenSearch }: NavbarProps) {
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
        <div className="max-w-[1540px] mx-auto w-full flex items-center justify-between px-6 md:px-12 h-full relative">
          {/* Left Group: Rolls-Royce Logo + Navigation Links */}
          <div className="flex items-center gap-8 xl:gap-11 h-full">
            <a href="/" className="flex items-center shrink-0 h-full py-2" aria-label="Rolls-Royce Home">
              <RollsRoyceLogo />
            </a>

            {/* Desktop Navigation Links */}
            <ul className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-9">
              {navLinks.map((link) => (
                <li key={link.name} className="relative flex items-center">
                  <a
                    href={link.href}
                    className="text-[15.5px] lg:text-[16px] font-semibold text-[#001e62] hover:text-[#0a2f8c] tracking-[-0.1px] transition-colors py-2 relative group whitespace-nowrap"
                  >
                    {link.name}
                    {/* Hover indicator line */}
                    <span className="absolute bottom-0 left-0 w-0 h-[2.5px] bg-[#001e62] transition-all duration-300 ease-out group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Group: Search Icon & Expandable Search Bar on Far Right */}
          <div className="flex items-center gap-3">
            {/* Desktop Expandable Search Bar */}
            <div className="relative flex items-center">
              <AnimatePresence>
                {isSearchActive ? (
                  <motion.div
                    initial={{ opacity: 0, width: 40 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 40 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="flex items-center bg-gray-50 border border-gray-300 rounded-full px-4 py-1.5 shadow-inner"
                  >
                    <Search className="w-4 h-4 text-[#001e62] shrink-0 mr-2.5" />
                    <input
                      ref={inputRef}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search Rolls-Royce..."
                      className="w-48 sm:w-64 lg:w-80 bg-transparent text-sm text-[#001e62] placeholder-gray-400 focus:outline-none"
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
                    onClick={() => setIsSearchActive(true)}
                    className="p-2.5 rounded-full text-[#001e62] hover:bg-blue-50 transition-all hover:scale-110 active:scale-95 flex items-center justify-center"
                    aria-label="Open search bar"
                  >
                    <Search className="w-5 h-5 stroke-[2.4]" />
                  </button>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Search Trigger */}
            <div className="flex md:hidden items-center gap-1">
              {!isSearchActive && (
                <button
                  onClick={() => setIsSearchActive(true)}
                  className="p-2 rounded-full text-[#001e62] hover:bg-gray-100"
                  aria-label="Open search"
                >
                  <Search className="w-5 h-5 stroke-[2.4]" />
                </button>
              )}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-lg text-[#001e62] hover:bg-gray-100"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
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
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <ul className="py-6 space-y-4">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-lg font-semibold text-[#001e62] hover:text-[#0a2f8c] block py-1"
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
