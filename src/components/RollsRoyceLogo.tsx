"use client";

import React from "react";

interface RollsRoyceLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function RollsRoyceLogo({
  className = "",
  size = "md",
}: RollsRoyceLogoProps) {
  const heightClass =
    size === "sm"
      ? "h-[48px]"
      : size === "lg"
      ? "h-[88px]"
      : "h-[64px] sm:h-[72px]";

  return (
    <div
      className={`inline-flex items-center justify-center select-none transition-transform duration-300 hover:scale-[1.03] py-0.5 ${className}`}
    >
      <img
        src="/rolls-royce-blue-crest.png"
        alt="Rolls-Royce Blue & White Crest Logo"
        className={`${heightClass} w-auto object-contain drop-shadow-[0_2px_10px_rgba(0,38,130,0.25)]`}
      />
    </div>
  );
}
