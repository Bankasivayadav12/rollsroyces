"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function CareersSection() {
  return (
    <section className="w-full bg-[#00009c] text-white py-14 sm:py-20 lg:py-28 px-4 sm:px-6 md:px-12 overflow-hidden relative">
      <div className="max-w-[1540px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
        {/* Left Column: Heading, Subtitle & Action Button */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-6 flex flex-col justify-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[54px] font-light text-white tracking-tight leading-[1.15] mb-4 sm:mb-6">
            Careers with Infinite Potential
          </h2>

          <p className="text-white/90 text-sm sm:text-base lg:text-[19px] leading-relaxed font-normal mb-6 sm:mb-10 max-w-lg">
            If you&apos;re driven to grow, learn, and to make a lasting difference, this is where you belong.
          </p>

          <div>
            <a
              href="#careers"
              className="inline-flex items-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border-[1.8px] border-white text-white font-bold text-xs sm:text-[13.5px] uppercase tracking-[1.4px] hover:bg-white hover:text-[#00009c] transition-all duration-300 hover:scale-105 group"
            >
              <span>VISIT ROLLS-ROYCE CAREERS</span>
              <ChevronRight className="w-4 h-4 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Infinity Symbol Collage Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-6 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[640px] drop-shadow-[0_15px_35px_rgba(0,0,0,0.35)]">
            <img
              src="/assets/images/careers-infinity.jpg"
              alt="Rolls-Royce Careers with Infinite Potential"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
