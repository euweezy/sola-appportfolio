"use client";

import React from "react";
import NavLink from "./Navbar";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-black/5 bg-white/80 px-8 py-6 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        <div className="bg-[#39FF14] px-2 py-0.5 font-mono text-2xl font-bold tracking-tighter sm:text-4xl">
          {title}
        </div>

        <nav className="hidden gap-6 font-mono sm:flex">
          <NavLink 
            list={[
              { label: "[HOME]", href: "/" },
              { label: "[MOODBOARD]", href: "/gallery" },
              { label: "[CONTACT]", href: "/contact" }
            ]} 
          />
        </nav>
      </div>
    </header>
  );
}