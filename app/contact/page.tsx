"use client";

import React, { useState, useEffect, useRef } from "react";

export default function Contact() {
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState<string[]>([
    "EMM_SOLA_III // SYSTEM_BOOT_SEQUENCE_COMPLETE",
    "ESTABLISHING_SECURE_CONNECTION... DONE",
    "LOCATION: DAVAO_CITY, PH",
    "TYPE '--HELP' TO BEGIN",
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleCommand = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    let response = "";

    switch (cmd) {
      case "--help":
        response = "COMMANDS: --mail, --socials, --status, --clear";
        break;
      case "--mail":
        response = "OPENING_MAIL_CLIENT... // eusola3@addu.edu.ph";
        window.location.href = "mailto:eusola3@addu.edu.ph";
        break;
      case "--socials":
        response = "IG: @EUWEEZY // GH: @EUWEEZY";
        break;
      case "--status":
        response = "STATUS: [FOR_HIRE // OPEN_FOR_INQUIRY]";
        break;
      case "--clear":
        setLogs(["TERMINAL_RESET"]);
        setInput("");
        return;
      default:
        response = `ERR: COMMAND '${cmd}' NOT FOUND`;
    }

    setLogs((prev) => [...prev, `> ${cmd}`, response]);
    setInput("");
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  return (
    <main className="fixed inset-0 bg-white flex flex-col font-mono uppercase overflow-hidden">
      <div className="flex-1 overflow-y-auto pt-32 pb-8 px-8 md:px-12 space-y-1">
        {logs.map((log, i) => (
          <div 
            key={i} 
            className={`text-[11px] md:text-[12px] leading-relaxed tracking-wider ${
              log.startsWith(">") ? "text-black font-bold" : "text-black/40"
            }`}
          >
            {log}
          </div> 
        ))}
        <div ref={scrollRef} />
      </div>

      <form 
        onSubmit={handleCommand} 
        className="px-8 md:px-12 pb-12 pt-6 border-t border-black/5 bg-white/80 backdrop-blur-sm"
      >
        <div className="flex items-center gap-3">
          <span className="text-[#39FF14] text-lg animate-pulse font-bold">{`>_`}</span>
          <input
            autoFocus
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full bg-transparent outline-none text-black text-sm md:text-base tracking-[0.2em] uppercase placeholder:text-black/5"
            placeholder="ENTER_COMMAND..."
          />
        </div>
      </form>
    </main>
  );
}