import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import cryptoBarImage from "@/assets/images/cryptoBarImage.webp";
import melodifyImage from "@/assets/images/Melodify.webp";
import feedbackAppImage from "@/assets/images/suggestion.webp";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import Card from "@/components/Card";
const portfolioProjects = [
  {
    company: "Personal Project",
    year: "2024",
    title: "CryptoBar - Cryptocurrency Tracking Platform",
    results: [
      {
        title:
          "Built a real-time cryptocurrency tracking app with live price updates",
      },
      {
        title: "Implemented Firebase authentication for secure user watchlists",
      },
      { title: "Optimized for fast performance and deployed on Vercel" },
    ],
    link: "https://crypto-bar-alpha.vercel.app/",
    code: "https://github.com/dimpleranapb/CryptoBar",
    image: cryptoBarImage,
    alt: "CryptoBar - Real-time Cryptocurrency Tracking App",
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "Melodify - Music Teaching Academy Platform",
    results: [
      {
        title:
          "Designed a responsive platform with modern UI/UX and engaging animations",
      },
      {
        title: "Utilized Next.js, TypeScript, and Tailwind CSS for scalability",
      },
      { title: "Ensured mobile-first optimization for better accessibility" },
    ],
    link: "https://melodifyschool.vercel.app/",
    code: "https://github.com/dimpleranapb/Melodify",
    image: melodifyImage,
    alt: "Melodify - Music Teaching Academy Platform",
  },

  {
    company: "Chaupal OTT",
    year: "2024",
    title: "Anonymous Feedback App for HR",
    results: [
      { title: "Developed a secure feedback collection app for employees" },
      { title: "Used Next.js, MongoDB, and NextAuth for authentication" },
      { title: "Integrated AI-powered suggestions for better HR insights" },
    ],
    link: "#",
    code: "#",
    image: feedbackAppImage,
    alt: "Anonymous Feedback App for HR",
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = ( ) => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container ">
        <SectionHeader
          eyebrow=" Real-world Results"
          title=" Featured Projects"
          description="See how I transformed concepts into engaging digital experiences"
        />

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              className="px-8 pt-8 mt-2 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky "
              key={project.title}
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r gap-2 from-emerald-300 to-sky-400 bg-clip-text text-transparent text-center uppercase font-bold text-sm tracking-widest ">
                    <span>{project.company}</span>
                    <span> {project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result,index) => (
                      <span key={index}>
                        <li className="flex gap-2 text-sm md:text-base text-white/50">
                          <CheckCircleIcon className="size-5 md:size-6" />
                          {result.title}
                        </li>
                      </span>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 px-6 w-full md:w-auto  h-12 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
