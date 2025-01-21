import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
    </div>
  );
}
