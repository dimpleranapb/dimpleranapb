import { AboutSection } from "@/sections/About";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <TestimonialsSection />
      <AboutSection />
    </div>
  );
}
