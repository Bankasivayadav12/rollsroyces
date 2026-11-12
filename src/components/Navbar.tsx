"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RollsRoyceLogo from "./RollsRoyceLogo";
import { Search, Menu, X, ArrowRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenSearch?: () => void;
  isSearchOpen?: boolean;
  activePath?: string;
}

export default function Navbar({ onOpenSearch, isSearchOpen, activePath }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const [mountedPath, setMountedPath] = useState<string>("");

  useEffect(() => {
    if (pathname) {
      setMountedPath(pathname);
    } else if (typeof window !== "undefined") {
      setMountedPath(window.location.pathname);
    }
  }, [pathname]);

  // Lock body & html scroll when mobile menu is open to prevent background scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      const prevBodyOverflow = document.body.style.overflow;
      const prevDocOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevBodyOverflow;
        document.documentElement.style.overflow = prevDocOverflow;
      };
    }
  }, [mobileMenuOpen]);

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
    { name: "Mission", href: "/mission" },
    { name: "Products & Services", href: "/products-services" },
    { name: "Innovation", href: "/innovation" },
    { name: "Investors", href: "/investors" },
  ];

  const currentPath = mountedPath || pathname || "";

  const isLinkActive = (href: string) => {
    // 0. Explicit activePath prop override
    if (activePath) {
      const cleanActive = activePath.toLowerCase().trim().replace(/\/+$/, "") || "/";
      const cleanTarget = href.toLowerCase().trim().replace(/\/+$/, "") || "/";
      if (cleanTarget === "/" && cleanActive === "/") return true;
      if (cleanTarget !== "/" && (cleanActive === cleanTarget || cleanActive.startsWith(cleanTarget + "/"))) return true;
      if (
        cleanTarget === "/products-services" &&
        (cleanActive.startsWith("/submarines") ||
          cleanActive.startsWith("/defence") ||
          cleanActive.startsWith("/power-systems"))
      ) {
        return true;
      }
    }

    // 1. Check all available candidate paths
    const candidates: string[] = [];
    if (currentPath) candidates.push(currentPath);
    if (pathname) candidates.push(pathname);
    if (mountedPath) candidates.push(mountedPath);
    if (typeof window !== "undefined" && window.location.pathname) {
      candidates.push(window.location.pathname);
    }

    for (const cand of candidates) {
      const raw = cand.toLowerCase().trim();
      const cleanCurrent = raw.replace(/\/+$/, "") || "/";
      const cleanTarget = href.toLowerCase().trim().replace(/\/+$/, "") || "/";

      if (cleanTarget === "/") {
        if (cleanCurrent === "/") return true;
        continue;
      }

      if (cleanCurrent === cleanTarget || cleanCurrent.startsWith(cleanTarget + "/")) {
        return true;
      }

      if (
        cleanTarget === "/products-services" &&
        (cleanCurrent.startsWith("/submarines") ||
          cleanCurrent.startsWith("/defence") ||
          cleanCurrent.startsWith("/power-systems"))
      ) {
        return true;
      }
    }

    return false;
  };

  return (
    <>
      <nav
        className={`w-full bg-white sticky top-0 z-40 transition-shadow duration-300 h-[84px] flex items-center ${
          isScrolled ? "shadow-md" : "border-b border-gray-100"
        }`}
      >
        <div className="max-w-[1540px] mx-auto w-full flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 h-full relative">
          {/* Left Group: Rolls Royces Logo + Navigation Links */}
          <div className="flex items-center gap-3.5 sm:gap-5 lg:gap-8 xl:gap-10 h-full min-w-0">
            <Link href="/" className="flex items-center shrink-0 h-full py-2" aria-label="Rolls Royces Home">
              <RollsRoyceLogo />
            </Link>

            {/* Desktop Navigation Links */}
            <ul className="hidden md:flex items-center gap-2.5 lg:gap-6 xl:gap-8 h-full">
              {navLinks.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <li key={link.name} className="relative flex items-center h-full">
                    <Link
                      href={link.href}
                      className={`text-[13px] lg:text-[15px] xl:text-[16px] tracking-[-0.1px] transition-colors py-2 relative group whitespace-nowrap flex items-center ${
                        active
                          ? "text-[#001e62] font-bold"
                          : "text-[#001e62]/80 font-semibold hover:text-[#001e62]"
                      }`}
                    >
                      <span>{link.name}</span>
                      {/* Single Hover/Active indicator line */}
                      <span
                        className={`absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#001e62] rounded-full transition-all duration-300 ease-out ${
                          active ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
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
          <div className="fixed inset-0 z-[100] md:hidden">
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
              className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] h-full h-[100dvh] max-h-[100dvh] bg-white shadow-2xl p-5 sm:p-6 flex flex-col overflow-y-auto no-scrollbar"
            >
              <div>
                <div className="flex items-center justify-end pb-2">
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors cursor-pointer"
                    aria-label="Close navigation drawer"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Quick Search Button in Mobile Drawer */}
                <div className="mt-1 mb-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (onOpenSearch) {
                        onOpenSearch();
                      } else {
                        setIsSearchActive(true);
                      }
                    }}
                    className="w-full flex items-center gap-3 px-3.5 py-2.5 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm text-gray-600 border border-gray-200 transition-colors cursor-pointer"
                  >
                    <Search className="w-4 h-4 text-gray-500" />
                    <span>Search Rolls Royces...</span>
                  </button>
                </div>

                <ul className="py-2 space-y-1">
                  {navLinks.map((link) => {
                    const active = isLinkActive(link.href);
                    return (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center px-3.5 py-2.5 rounded-lg text-[15px] sm:text-base transition-all ${
                            active
                              ? "bg-blue-50 text-[#0052cc] border-l-4 border-[#0052cc] font-bold shadow-xs pl-3.5"
                              : "text-slate-600 hover:bg-slate-50 hover:text-[#001e62] border-l-4 border-transparent font-medium pl-3.5"
                          }`}
                        >
                          <span className={active ? "underline underline-offset-4 decoration-2 decoration-[#0052cc]" : ""}>
                            {link.name}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
