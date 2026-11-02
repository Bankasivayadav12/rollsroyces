"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { newsArticlesData } from "@/data/newsArticles";

export default function LatestUpdatesSection() {
  return (
    <section id="latest-updates" className="w-full bg-white py-14 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 border-b border-gray-100 scroll-mt-20">
      <div className="max-w-[1540px] mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#001438] tracking-[-0.5px]">
            Latest updates
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
          {newsArticlesData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="h-full"
            >
              <Link
                href={`/news/${item.id}`}
                className="group flex flex-col justify-between text-left decoration-transparent h-full cursor-pointer"
              >
                <div>
                  {/* Image with subtle hover zoom */}
                  <div className="aspect-[16/10] overflow-hidden rounded-sm bg-gray-100 mb-4 sm:mb-5 shadow-sm relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  </div>

                  {/* News Headline - Full Text Displayed */}
                  <h3 className="text-lg sm:text-[20px] font-medium text-[#001e62] group-hover:text-[#0a2f8c] leading-[1.35] tracking-tight mb-4 sm:mb-6 transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Card Footer Divider & Info */}
                <div className="pt-3 sm:pt-4 border-t border-gray-200 flex items-center justify-between text-[11px] sm:text-[11.5px] font-semibold text-gray-500 uppercase tracking-wider mt-auto">
                  <span>{item.type}</span>
                  <span className="font-medium text-gray-400">{item.date}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
