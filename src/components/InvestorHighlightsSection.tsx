"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Leaf, Globe2, ArrowRight } from "lucide-react";

const metrics = [
  {
    icon: <Globe2 className="w-6 h-6 stroke-[#001e62] stroke-[1.8]" />,
    value: "42,000+",
    label: "Global Workforce",
    desc: "Talented engineers, scientists, and specialists across more than 50 countries.",
  },
  {
    icon: <Leaf className="w-6 h-6 stroke-[#001e62] stroke-[1.8]" />,
    value: "100% SAF",
    label: "Sustainable Aviation Fuel",
    desc: "All current commercial production engine types certified SAF-compatible.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 stroke-[#001e62] stroke-[1.8]" />,
    value: "£2.5B+",
    label: "Underlying Operating Profit",
    desc: "Robust commercial momentum driving capital delivery and strategic value.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 stroke-[#001e62] stroke-[1.8]" />,
    value: "92M+ Hours",
    label: "Mission-Critical Power",
    desc: "Steadfast defense and commercial engine hours supporting vital operations.",
  },
];

export default function InvestorHighlightsSection() {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-12 border-b border-gray-100">
      <div className="max-w-[1540px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#001e62] block mb-3">
              Performance &amp; Purpose
            </span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#001438] tracking-[-0.5px] leading-tight">
              Engineering sustainable solutions for safety-critical missions
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#investors"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#001e62] hover:text-[#0a2f8c] border-b-2 border-[#001e62] pb-1 transition-colors uppercase tracking-wider"
            >
              <span>Explore Investor Relations</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="p-8 rounded-sm bg-gray-50/70 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-light text-[#001438] mb-2 tracking-tight">
                  {item.value}
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">
                  {item.label}
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed font-normal">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
