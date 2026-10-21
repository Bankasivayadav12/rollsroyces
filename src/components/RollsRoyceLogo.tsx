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
    size === "sm" ? "h-11" : size === "lg" ? "h-20" : "h-[64px]";

  return (
    <div
      className={`inline-flex items-center select-none transition-transform duration-300 hover:scale-[1.03] ${className}`}
    >
      <img
        src="/lavender-logo.png"
        alt="Rolls-Royce Lavender Crest Logo"
        className={`${heightClass} w-auto object-contain drop-shadow-[0_2px_10px_rgba(142,124,195,0.22)]`}
      />
    </div>
  );
}
