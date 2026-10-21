"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AnnualReportSection() {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-12 border-b border-gray-100">
      <div className="max-w-[1540px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Factory Engine Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-6 overflow-hidden rounded-sm shadow-xl bg-gray-900 group"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src="/assets/images/annual-report.jpg"
              alt="Rolls-Royce Trent engine assembly facility"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Right Column: Editorial Copy */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="lg:col-span-6 flex flex-col justify-center max-w-xl"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-light text-[#001438] tracking-[-0.5px] leading-tight mb-8">
            Annual Report 2025
          </h2>

          <p className="text-gray-700 text-base sm:text-[17px] leading-[1.7] mb-10 font-normal">
            This year, we have further embedded the cultural change that is driving our transformation, with strong results produced across the Group. Our people are aligned, energised and mobilised. They are driven by a clear purpose which is moving us to a place where we can do things today that we could not previously do.
          </p>

          <div>
            <a
              href="#annual-report"
              className="inline-block text-[#001e62] font-bold text-[14px] uppercase tracking-[1.5px] hover:text-[#0a2f8c] border-b-2 border-[#001e62] pb-1 transition-colors"
            >
              LEARN MORE
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
