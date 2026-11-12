"use client";

import React from "react";

interface RollsRoyceLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showName?: boolean;
}

export default function RollsRoyceLogo({
  className = "",
  size = "md",
  showName = true,
}: RollsRoyceLogoProps) {
  const heightClass =
    size === "sm"
      ? "h-[42px] sm:h-[46px]"
      : size === "lg"
      ? "h-[74px] sm:h-[82px]"
      : "h-[54px] sm:h-[62px]";

  const line1Class =
    size === "sm"
      ? "text-[12px] sm:text-[13px] tracking-[0.24em]"
      : size === "lg"
      ? "text-[18px] sm:text-[21px] tracking-[0.26em]"
      : "text-[14.5px] sm:text-[16px] lg:text-[17.5px] tracking-[0.25em]";

  const line2Class =
    size === "sm"
      ? "text-[12px] sm:text-[13px] tracking-[0.16em]"
      : size === "lg"
      ? "text-[18px] sm:text-[21px] tracking-[0.18em]"
      : "text-[14.5px] sm:text-[16px] lg:text-[17.5px] tracking-[0.17em]";

  return (
    <div
      className={`inline-flex items-center select-none transition-transform duration-300 hover:scale-[1.02] py-0.5 gap-2.5 sm:gap-3.5 group ${className}`}
    >
      <img
        src="/rolls-royce-blue-crest.png"
        alt="Rolls Royces Blue & White Crest Logo"
        className={`${heightClass} w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,38,130,0.22)]`}
      />
      {showName && (
        <div className="flex flex-col justify-center select-none text-left leading-none gap-0.5 sm:gap-1">
          <span
            className={`font-serif font-bold text-[#002682] uppercase leading-[1.08] whitespace-nowrap transition-colors group-hover:opacity-90 ${line1Class}`}
          >
            Rolls
          </span>
          <span
            className={`font-serif font-bold text-[#002682] uppercase leading-[1.08] whitespace-nowrap transition-colors group-hover:opacity-90 ${line2Class}`}
          >
            Royces
          </span>
        </div>
      )}
    </div>
  );
}
