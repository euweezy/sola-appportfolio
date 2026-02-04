"use client";

import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-black/5 px-8 py-4 mt-20">
      <div className="flex justify-between items-center font-mono text-[10px] text-black/40 uppercase tracking-widest">
        <div>
          © {year} ALL_RIGHTS_RESERVED // EMM_SOLA_III
        </div>
        <div className="flex gap-4">
          <a 
            href="https://github.com/euweezy" 
            className="hover:text-[#39FF14] transition-colors"
          >
            GITHUB
          </a>
          <a 
            href="https://www.instagram.com/______eu._____/" 
            className="hover:text-[#39FF14] transition-colors"
          >
            INSTAGRAM
          </a>
          <span className="text-[#39FF14] animate-pulse">● SYSTEM_ONLINE</span>
        </div>
      </div>
    </footer>
  );
}