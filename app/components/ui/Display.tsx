"use client";

import React from "react";
import SectionHeader from "./SectionHeader";


interface DisplayItem {
  file: string;
  label: string;
  description: string;
}

interface DisplayProps {
  list: DisplayItem[];
}

export default function Display({ list }: DisplayProps) {
  return (
    <div className="flex flex-col items-start">
      {list.map((display) => (
      <div key={display.file} className="flex items-center justify-between w-full min-h-25 px-8 py-4 border-black/50">
        <div className="w-full md:w-1/2 relative origin-top-left md:scale-75 overflow-hidden">
          <img
            src={display.file}
            alt={display.label}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="w-full md:w-1/3 flex flex-col items-start md:items-end text-left md:text-right font-mono">
          <div className="w-full">
            <SectionHeader>{display.label}</SectionHeader>
          </div>
            <p className="mt-2 text-[10px] uppercase leading-relaxed text-black/60 max-w-xs">
              {display.description}
              <span className="inline-block w-[6px] h-[10px] bg-[#39FF14] ml-2 align-middle animate-pulse" />
            </p>
        </div>
      </div>
    ))}
    </div>
  )
}