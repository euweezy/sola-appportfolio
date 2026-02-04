"use client";

import React from "react";

interface ProjectItem {
  label: string;
  href: string;
  description?: string;
}

interface ProjectsProps {
  list: ProjectItem[];
  children?: React.ReactNode;
}

export default function Projects({ children, list }: ProjectsProps) {
  return (
    <div className="z-10 mb-6 flex select-none flex-col gap-1">
      {children}
      {list.map((project) => (
        <div key={project.label} className="group flex flex-col font-mono text-black">
          <div className="flex items-center gap-2 text-xl">
            <span className="animate-terminal-blink text-black">{`>`}</span>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                cursor-pointer bg-[linear-gradient(to_right,black_50%,transparent_50%)]
                bg-size-[200%_100%] bg-right px-2 py-0.5
                font-bold uppercase transition-all duration-300
                hover:bg-left hover:italic hover:text-white
              "
            >
              {project.label}
            </a>
          </div>

          <p className="ml-7 mb-4 max-w-[75%] text-justify text-[10px] uppercase text-black/40">
            {project.description}
          </p>
        </div>
      ))}
    </div>
  );
}