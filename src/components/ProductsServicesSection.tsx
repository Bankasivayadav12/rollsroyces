"use client";

import React from "react";
import { motion } from "framer-motion";

const divisions = [
  {
    title: "Civil Aerospace",
    image: "/assets/images/prod-fan.jpg",
    icon: (
      <svg className="w-6 h-6 stroke-white fill-none stroke-[2]" viewBox="0 0 24 24">
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.8-.2-1.6.2-2 1-.3.8 0 1.7.7 2.1l5.5 3.2L6 16.5l-2.5-.5L2 17.5l3.5 2 2 3.5 1.5-1.5-.5-2.5 3.5-3.5 3.2 5.5c.4.7 1.3 1 2.1.7.8-.4 1.2-1.2 1-2z" />
      </svg>
    ),
    href: "#civil-aerospace",
  },
  {
    title: "Defence",
    image: "/assets/images/prod-defence.jpg",
    icon: (
      <svg className="w-6 h-6 stroke-white fill-none stroke-[2]" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    href: "#defence",
  },
  {
    title: "Power Systems",
    image: "/assets/images/series-8000.jpg",
    icon: (
      <svg className="w-6 h-6 stroke-white fill-none stroke-[2]" viewBox="0 0 24 24">
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="10" y1="18" x2="10" y2="22" />
        <line x1="14" y1="18" x2="14" y2="22" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    ),
    href: "#power-systems",
  },
];

export default function ProductsServicesSection() {
  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 border-b border-gray-100">
      <div className="max-w-[1540px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#001438] tracking-[-0.5px] mb-3 sm:mb-5">
            Products &amp; Services
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-[17px] leading-relaxed font-normal">
            We develop and deliver complex power and propulsion solutions for safety-critical applications in the air, at sea and on land.
          </p>
        </div>

        {/* 3 Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {divisions.map((div, idx) => (
            <motion.a
              key={div.title}
              href={div.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeOut" }}
              className="relative aspect-[16/10] sm:aspect-[16/11] rounded-sm overflow-hidden group shadow-md block bg-gray-950"
            >
              {/* Background Image */}
              <img
                src={div.image}
                alt={div.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />

              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70 group-hover:from-black/70 group-hover:to-black/80 transition-colors duration-500" />

              {/* Label & Icon at Top Left */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 flex items-center gap-2.5 sm:gap-3">
                <span className="opacity-95">{div.icon}</span>
                <span className="text-white text-xl sm:text-2xl lg:text-[26px] font-normal tracking-wide">
                  {div.title}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
