import React from "react";

interface SectionHeaderProps {
  children: React.ReactNode;
}

export default function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-6 mt-6 mb-2">
      <span className="text-black/20 text-[10px]">{`//`}</span>
      
      <h2 className="text-[10px] uppercase tracking-[0.2em] text-black/40 font-mono font-bold">
        {children}
      </h2>
      
      <div className="flex-1 h-px bg-black/5" />
    </div>
  );
}