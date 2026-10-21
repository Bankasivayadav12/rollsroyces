"use client";

import React, { useState, useEffect } from "react";
import RollsRoyceLogo from "./RollsRoyceLogo";
import { Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenSearch: () => void;
}

export default function Navbar({ onOpenSearch }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    {
      name: "Products & Services",
      href: "/products-services",
      hasDropdown: true,
      subSections: [
        {
          title: "Civil Aerospace",
          items: [
            "Trent 1000 XE Engine",
            "Trent 7000 Architecture",
            "Pearl Business Aviation",
            "TotalCare® Lifecycle Services",
          ],
        },
        {
          title: "Defence",
          items: [
            "AE 2100 & AE Family",
            "EJ200 Eurofighter Typhoon",
            "Nuclear Submarine Propulsion",
            "Future Combat Air Systems",
          ],
        },
        {
          title: "Power Systems",
          items: [
            "Series 8000 Marine Diesel",
            "mtu Energy & Microgrids",
            "Gas Power Generation",
            "Battery Storage Solutions",
          ],
        },
      ],
    },
    { name: "Innovation", href: "/innovation" },
    { name: "Investors", href: "/investors" },
  ];

  return (
    <>
      <nav
        className={`w-full bg-white sticky top-0 z-40 transition-all duration-300 ${
          isScrolled ? "shadow-md py-1" : "border-b border-gray-100 py-2.5"
        }`}
      >
        <div className="max-w-[1540px] mx-auto flex items-center justify-between px-6 md:px-12">
          {/* Left Group: Rolls-Royce Logo + Navigation Links + Search Icon */}
          <div className="flex items-center gap-8 xl:gap-11">
            <a href="/" className="flex items-center shrink-0" aria-label="Rolls-Royce Home">
              <RollsRoyceLogo />
            </a>

            {/* Desktop Navigation Links */}
            <ul className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-9">
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className="relative flex items-center"
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={link.href}
                    className="text-[15.5px] lg:text-[16px] font-semibold text-[#001e62] hover:text-[#0a2f8c] tracking-[-0.1px] transition-colors py-2 relative group whitespace-nowrap"
                  >
                    {link.name}
                    {/* Hover indicator line */}
                    <span className="absolute bottom-0 left-0 w-0 h-[2.5px] bg-[#001e62] transition-all duration-300 ease-out group-hover:w-full" />
                  </a>

                  {/* Mega Menu Dropdown */}
                  {link.hasDropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="absolute left-[-20px] top-full mt-3 w-[660px] bg-white rounded-lg shadow-2xl border border-gray-100 p-7 grid grid-cols-3 gap-6 z-50"
                        >
                          {link.subSections?.map((col) => (
                            <div key={col.title}>
                              <h4 className="text-[12.5px] font-bold uppercase tracking-wider text-[#001438] pb-2 mb-3 border-b border-gray-100">
                                {col.title}
                              </h4>
                              <ul className="space-y-2">
                                {col.items.map((item) => (
                                  <li key={item}>
                                    <a
                                      href="#"
                                      className="text-[13px] text-gray-600 hover:text-[#001e62] hover:translate-x-1 block transition-all font-medium"
                                    >
                                      {item}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              ))}

              {/* Search Icon placed right after Careers as in reference image! */}
              <li className="flex items-center">
                <button
                  onClick={onOpenSearch}
                  className="p-1.5 rounded-full text-[#001e62] hover:bg-blue-50 transition-all hover:scale-110"
                  aria-label="Open Search"
                >
                  <Search className="w-[19px] h-[19px] stroke-[2.7]" />
                </button>
              </li>
            </ul>
          </div>

          {/* Right Hamburger for Mobile Screens */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-full text-[#001e62]"
              aria-label="Search"
            >
              <Search className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-[#001e62] rounded-md"
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-6 h-6 stroke-[2.2]" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
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
