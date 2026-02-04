import Title from "../components/ui/Title"
import Display from "../components/ui/Display"
import { WORKS } from "@/app/data/content";

export default function Gallery() {
  return (
    <main className="flex-1 relative overflow-x-hidden min-h-screen">
      <div className="relative pt-8 px-8 max-w-screen ml-6">
        <div className="z-20 mb-4 items-center">
          <div className="text-center">
            <Title variant="primary">
              WORKS MADE BY ME.
            </Title>
            <p className="font-mono text-black/40 italic text-[11px]">
              &quot;Everything I do is for the 17-year-old version of myself&quot;
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <Display list={WORKS} />
        </div>
      </div>
    </main>
  )
}