"use client";

import React from "react";
import { motion } from "framer-motion";

const newsItems = [
  {
    id: 1,
    title: "Rolls-Royce strengthens freighter market position...",
    image: "/assets/images/news-a350f.jpg",
    type: "PRESS RELEASES",
    date: "29 SEPTEMBER 2026",
    href: "#",
  },
  {
    id: 2,
    title: "Rolls-Royce invests £300 million in UK...",
    image: "/assets/images/news-turbine.jpg",
    type: "PRESS RELEASES",
    date: "28 SEPTEMBER 2026",
    href: "#",
  },
  {
    id: 3,
    title: "Rolls-Royce Completes $1 Billion Investment in...",
    image: "/assets/images/news-ribbon.jpg",
    type: "PRESS RELEASES",
    date: "27 AUGUST 2026",
    href: "#",
  },
  {
    id: 4,
    title: "Reliance Industries and Rolls-Royce announce...",
    image: "/assets/images/news-hq.jpg",
    type: "PRESS RELEASES",
    date: "14 AUGUST 2026",
    href: "#",
  },
];

export default function LatestUpdatesSection() {
  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 border-b border-gray-100">
      <div className="max-w-[1540px] mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#001438] tracking-[-0.5px]">
            Latest updates
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {newsItems.map((item, idx) => (
            <motion.a
              key={item.id}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="group flex flex-col justify-between text-left decoration-transparent"
            >
              <div>
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden rounded-sm bg-gray-100 mb-4 sm:mb-5 shadow-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                {/* News Headline */}
                <h3 className="text-lg sm:text-[20px] font-medium text-[#001e62] group-hover:text-[#0a2f8c] leading-[1.35] tracking-tight mb-4 sm:mb-6 line-clamp-3 transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Card Footer Divider & Info */}
              <div className="pt-3 sm:pt-4 border-t border-gray-200 flex items-center justify-between text-[11px] sm:text-[11.5px] font-semibold text-gray-500 uppercase tracking-wider">
                <span>{item.type}</span>
                <span className="font-medium text-gray-400">{item.date}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
