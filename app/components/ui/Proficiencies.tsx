"use client";

import React from "react";

interface ProficienciesProps {
  list: string[];
  variant?: "fat";
  children?: React.ReactNode;
}

export default function Proficiencies({ children, list, variant }: ProficienciesProps) {
  return (
    <div className={`mt-6 flex ${variant === "fat" ? "flex-row flex-wrap" : "flex-col"} gap-1 select-none z-10 mb-6`}>
      {children}
      {list.map((item) => (
        <div 
          key={item} 
          className="group flex items-center justify-start gap-2 font-mono text-[11px] font-bold uppercase text-black"
        >
          {/* Status Indicator */}
          <span className="text-[8px] text-[#39FF14] animate-pulse">●</span>
          
          {/* Slide-fill Hover Effect */}
          <span
            className="
              cursor-pointer px-2 py-0.5
              bg-[linear-gradient(to_right,black_50%,transparent_50%)]
              bg-[length:200%_100%]
              bg-[position:100%_0%]
              transition-all duration-300 ease-out
              hover:bg-[position:0%_0%] 
              hover:text-white
            "
          >
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}