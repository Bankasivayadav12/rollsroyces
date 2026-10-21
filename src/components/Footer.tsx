"use client";

import React from "react";
import { Mail, Radio, FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#11179c] text-white pt-20 pb-12 px-6 md:px-12 relative z-20">
      <div className="max-w-[1540px] mx-auto">
        {/* Upper Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          
          {/* Column 1: Brand Motto & Copyright */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <p className="text-[17px] sm:text-[18px] font-normal leading-relaxed text-white/95 max-w-sm mb-4">
                A force for progress;<br />
                powering, protecting and connecting people everywhere.
              </p>
            </div>

            <div className="mt-12 lg:mt-auto pt-6 text-[13.5px] text-white/80 font-normal">
              &copy; Rolls-Royce plc 2026. All rights reserved.
            </div>
          </div>

          {/* Column 2: Home Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[12px] font-bold tracking-[1.5px] uppercase text-white mb-6">
              HOME
            </h4>
            <ul className="space-y-3.5 text-[14px] text-white/90 font-normal">
              <li><a href="#about" className="hover:text-white hover:underline transition-colors">About</a></li>
              <li><a href="#products-services" className="hover:text-white hover:underline transition-colors">Products &amp; Services</a></li>
              <li><a href="#innovation" className="hover:text-white hover:underline transition-colors">Innovation</a></li>
              <li><a href="#sustainability" className="hover:text-white hover:underline transition-colors">Sustainability</a></li>
              <li><a href="#investors" className="hover:text-white hover:underline transition-colors">Investors</a></li>
              <li><a href="#media" className="hover:text-white hover:underline transition-colors">Media</a></li>
              <li><a href="#careers" className="hover:text-white hover:underline transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Column 3: Products & Services + Suppliers & Partners */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h4 className="text-[12px] font-bold tracking-[1.5px] uppercase text-white mb-5">
                PRODUCTS &amp; SERVICES
              </h4>
              <ul className="space-y-3 text-[14px] text-white/90 font-normal">
                <li><a href="#civil-aerospace" className="hover:text-white hover:underline transition-colors">Civil Aerospace</a></li>
                <li><a href="#defence" className="hover:text-white hover:underline transition-colors">Defence</a></li>
                <li><a href="#power-systems" className="hover:text-white hover:underline transition-colors">Power Systems</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[12px] font-bold tracking-[1.5px] uppercase text-white mb-5">
                SUPPLIERS &amp; PARTNERS
              </h4>
              <ul className="space-y-3 text-[14px] text-white/90 font-normal">
                <li><a href="#" className="hover:text-white hover:underline transition-colors">Supplier Home</a></li>
                <li><a href="#" className="hover:text-white hover:underline transition-colors">Supplier Code of Conduct</a></li>
                <li><a href="#" className="hover:text-white hover:underline transition-colors">Global Supplier Portal</a></li>
                <li><a href="#" className="hover:text-white hover:underline transition-colors">Prospective Suppliers</a></li>
              </ul>
            </div>
          </div>

          {/* Column 4: Follow Us & Stay in Touch */}
          <div className="lg:col-span-3">
            {/* Follow Us Social Icons */}
            <div className="mb-8">
              <h4 className="text-[12px] font-bold tracking-[1.5px] uppercase text-white mb-5">
                FOLLOW US
              </h4>
              <div className="flex items-center gap-5 text-white">
                {/* Facebook */}
                <a href="#" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M9.1 22v-9h-3V9h3V6.2C9.1 3.2 11 1.5 13.7 1.5c1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V9h3.4l-.5 4h-2.9v9h-3.8z" />
                  </svg>
                </a>
                {/* X (Twitter) */}
                <a href="#" aria-label="X" className="hover:opacity-80 transition-opacity font-bold text-lg leading-none">
                  &#120143;
                </a>
                {/* YouTube */}
                <a href="#" aria-label="YouTube" className="hover:opacity-80 transition-opacity">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.5 6.2c-.3-1-1.1-1.8-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6C1.6 4.4.8 5.2.5 6.2 0 8.1 0 12 0 12s0 3.9.5 5.8c.3 1 1.1 1.8 2.1 2.1 1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6c1-.3 1.8-1.1 2.1-2.1.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.5V8.5l6.5 3.5-6.5 3.5z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="#" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.38-1.11 2.5-2.48 2.5s-2.48-1.12-2.48-2.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.02 8h4.94v16H.02V8zm7.74 0h4.74v2.19h.07c.66-1.25 2.27-2.57 4.68-2.57 5.01 0 5.94 3.3 5.94 7.59V24h-4.94v-7.81c0-1.86-.03-4.26-2.6-4.26-2.6 0-3 2.03-3 4.12V24H7.76V8z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
                  <svg className="w-5 h-5 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2.5" />
                  </svg>
                </a>
                {/* Flickr / dots */}
                <a href="#" aria-label="Flickr" className="hover:opacity-80 transition-opacity flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-white inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-white inline-block"></span>
                </a>
              </div>
            </div>

            {/* Stay In Touch Links */}
            <div>
              <h4 className="text-[12px] font-bold tracking-[1.5px] uppercase text-white mb-5">
                STAY IN TOUCH
              </h4>
              <ul className="space-y-4 text-[13.5px] text-white/90 font-normal">
                <li>
                  <a href="#" className="flex items-center gap-3 hover:text-white group">
                    <Radio className="w-4 h-4 stroke-[2.2] shrink-0 opacity-90 group-hover:opacity-100" />
                    <span>Sign up to get the latest news</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 hover:text-white group">
                    <Mail className="w-4 h-4 stroke-[2.2] shrink-0 opacity-90 group-hover:opacity-100" />
                    <span>Contact us</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 hover:text-white group">
                    <FileText className="w-4 h-4 stroke-[2.2] shrink-0 opacity-90 group-hover:opacity-100" />
                    <span>Vulnerability Reporting</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full border-t border-white/20 pt-8 mt-2">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-[13px] text-white/80">
            {/* Left: Rolls-Royce Monogram & Wordmark */}
            <div className="flex items-center gap-4">
              <img
                src="/rolls-royce-blue-crest.png"
                alt="Rolls-Royce Crest"
                className="h-14 sm:h-16 w-auto object-contain brightness-110 drop-shadow-md"
              />
              <span className="text-[20px] font-serif tracking-wider font-semibold text-white">
                Rolls-Royce<span className="text-[10px] font-sans font-normal align-top">&reg;</span>
              </span>
            </div>

            {/* Right: Legal & Policy Links */}
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-3 gap-y-2 text-[12.5px] text-white/90 font-normal">
              <a href="#" className="hover:underline hover:text-white transition-colors">Site map</a>
              <span className="text-white/40">|</span>
              <a href="#" className="hover:underline hover:text-white transition-colors">Use of cookies</a>
              <span className="text-white/40">|</span>
              <a href="#" className="hover:underline hover:text-white transition-colors">Cookie Settings</a>
              <span className="text-white/40">|</span>
              <a href="#" className="hover:underline hover:text-white transition-colors">Legal information</a>
              <span className="text-white/40">|</span>
              <a href="#" className="hover:underline hover:text-white transition-colors">Data privacy</a>
              <span className="text-white/40">|</span>
              <a href="#" className="hover:underline hover:text-white transition-colors">Anti-slavery statement</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
