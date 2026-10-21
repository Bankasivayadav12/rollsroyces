"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface AccessibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AccessibilityModal({ isOpen, onClose }: AccessibilityModalProps) {
  const [highContrast, setHighContrast] = useState(false);
  const [largeFont, setLargeFont] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (highContrast) {
      document.body.classList.add("high-contrast");
    } else {
      document.body.classList.remove("high-contrast");
    }
  }, [highContrast]);

  useEffect(() => {
    if (largeFont) {
      document.documentElement.style.fontSize = "18px";
    } else {
      document.documentElement.style.fontSize = "16px";
    }
  }, [largeFont]);

  useEffect(() => {
    if (reduceMotion) {
      document.body.classList.add("reduce-motion");
    } else {
      document.body.classList.remove("reduce-motion");
    }
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-2xl border border-gray-100 p-5 z-50 text-gray-800"
        >
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <h3 className="font-bold text-sm text-[#001438]">Accessibility Options</h3>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-gray-400 hover:text-gray-700"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-4 space-y-4 text-sm">
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-700">High Contrast</span>
              <button
                onClick={() => setHighContrast(!highContrast)}
                className={`px-3 py-1 text-xs font-semibold rounded border transition-colors ${
                  highContrast
                    ? "bg-[#001e62] text-white border-[#001e62]"
                    : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
                }`}
              >
                {highContrast ? "Enabled" : "Enable"}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-700">Text Size</span>
              <div className="flex gap-1.5">
                <button
                  onClick={() => setLargeFont(false)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded border transition-colors ${
                    !largeFont
                      ? "bg-[#001e62] text-white border-[#001e62]"
                      : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
                  }`}
                >
                  100%
                </button>
                <button
                  onClick={() => setLargeFont(true)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded border transition-colors ${
                    largeFont
                      ? "bg-[#001e62] text-white border-[#001e62]"
                      : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
                  }`}
                >
                  125%
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-700">Reduce Motion</span>
              <button
                onClick={() => setReduceMotion(!reduceMotion)}
                className={`px-3 py-1 text-xs font-semibold rounded border transition-colors ${
                  reduceMotion
                    ? "bg-[#001e62] text-white border-[#001e62]"
                    : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
                }`}
              >
                {reduceMotion ? "Enabled" : "Enable"}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
