"use client";

import React from "react";
import { X, ArrowRight, Download, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface StoryData {
  title: string;
  category: string;
  image: string;
  description: string;
  specs: { label: string; value: string }[];
  highlight: string;
}

interface StoryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  story: StoryData | null;
}

export default function StoryDrawer({ isOpen, onClose, story }: StoryDrawerProps) {
  if (!story) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          {/* Drawer Panel */}
          <div className="fixed inset-y-0 right-0 flex max-w-full pl-0 sm:pl-10">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="w-screen max-w-xl bg-white shadow-2xl flex flex-col justify-between overflow-y-auto"
            >
              {/* Header */}
              <div>
                <div className="flex items-center justify-between px-5 sm:px-8 py-4 sm:py-6 border-b border-gray-100">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#001e62]">
                    {story.category}
                  </span>
                  <button
                    onClick={onClose}
                    className="p-1 rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Content */}
                <div className="px-5 sm:px-8 py-5 sm:py-6">
                  <div className="w-full h-52 sm:h-64 rounded-lg overflow-hidden mb-6 shadow-md bg-gray-900">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-[#001438] leading-tight mb-4">
                    {story.title}
                  </h2>

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                    {story.description}
                  </p>

                  <div className="bg-[#001438] text-white p-4 rounded-lg mb-6 sm:mb-8">
                    <span className="text-xs uppercase tracking-widest text-blue-300 font-bold block mb-1">
                      Key Engineering Innovation
                    </span>
                    <p className="text-sm font-medium">{story.highlight}</p>
                  </div>

                  {/* Specs Grid */}
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">
                    Technical Specifications
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    {story.specs.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-50 p-3.5 sm:p-4 rounded-lg border-l-4 border-[#001e62]"
                      >
                        <div className="text-lg sm:text-xl font-bold text-[#001438]">
                          {item.value}
                        </div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mt-0.5 sm:mt-1">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-5 sm:px-8 py-4 sm:py-6 bg-gray-50 border-t border-gray-100 flex flex-col gap-3">
                <button className="w-full py-3.5 px-6 rounded bg-[#001e62] hover:bg-[#001438] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors">
                  <Download className="w-4 h-4" />
                  <span>Download Technical Datasheet</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full py-3 px-6 rounded border border-[#001e62] text-[#001e62] hover:bg-blue-50 font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Close Overview</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
