import Image from "next/image";
import Title from "./components/ui/Title";
import Projects from "./components/ui/Projects";
import Proficiencies from "./components/ui/Proficiencies";
import SectionHeader from "./components/ui/SectionHeader";
import { PROFILE, PROFICIENCIES, PROJECTS } from "./data/content";

export default function Home() {
  return (
    <main className="flex-1 relative overflow-x-hidden min-h-screen">
      <div className="relative pt-8 px-8 max-w-screen mx-6">
        <div className="z-20 mb-4">
        <div className="max-w-4xl">
          <Title variant="primary">
            {PROFILE.name}
            <br />
            DESIGNERS WHO THINK IN CODE ·
          </Title>
        </div>
        <div className="relative top-4 left-6">
          <Title variant="secondary">
            THE MEDIUM IS THE MESSAGE.
            <br />
            EVERYTHING IS A COPY OF A COPY OF A COPY.
            <br />
            <div className="relative">
              <span className="relative px-2 py-1 bg-black text-white">NOISE IS THE ENEMY OF COHERENCE ×</span>
            </div>
          </Title>
        </div>
      </div>

      <div className=" flex pl-8 flex-col origin-top-left md:flex-row gap-12 items-start">
        <div className="
            w-full md:w-1/2 relative grayscale group cursor-pointer 
              hover:grayscale-0 transition-all duration-500
              origin-top-left md:scale-75
              overflow-hidden
              ">
          <img
            src="/images/IMG_0268.JPG"
            alt="Background Image"
            className="w-fill h-fill object-cover"
          />
          <div className="absolute bottom-6 left-6">
            <span className="
            text-m text-white font-mono
            opacity-100
            group-hover:opacity-0
            transition-opacity duration-500 ease-in-out
            ">
              ID: {PROFILE.name}
              <br />
              LOC: {PROFILE.location}
              <br />
              AVALIABILITY: {PROFILE.availability}
              <br />
              STATUS: {PROFILE.status}
            </span>
          </div>
        </div>
        <div className="mt-16 left-8 w-full md:w-1/2 font-mono">
          <SectionHeader>ABOUT_ME // PERSONAL_INFO</SectionHeader>
          <p className="text-xs uppercase leading-relaxed max-w-xs">
            Executing interfaces where logic meets aesthetics. 
            Translating noise into signal. 
            Davao City based // 2026.
            <span className="inline-block w-[8px] h-[14px] bg-black ml-1 align-middle animate-terminal-blink" />
          </p>

          <SectionHeader>DISCIPLINE</SectionHeader>
          <p className="
            text-black text-xs uppercase leading-relaxed max-w-xs
            ">
              <span className="animate-pulse">{`> `}</span>
              VISUAL DESIGN & SYSTEMS ENGINEERING
            </p>
            <Proficiencies list={PROFICIENCIES}>
              <SectionHeader>System_Proficiencies // v.26</SectionHeader>
            </Proficiencies>
            <Projects list={PROJECTS}>
              <SectionHeader>PROJECTS //</SectionHeader>
            </Projects>
        </div>
      </div>
      </div>
    </main>
  )
}
