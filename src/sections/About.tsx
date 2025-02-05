 'use client'
 import Card from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HtMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ReactIcon from "@/assets/icons/react.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { Toolboxitems } from "@/components/ToolboxItems";
import {motion} from  'framer-motion';
import { useRef } from "react";
const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HtMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%",
    top: "5%",
    description: "Exploring colors on canvas, bringing imagination to life.",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "5%",
    top: "50%",
    description: "Engaging in virtual adventures and competitive gameplay.",
  },
  {
    title: "Cycling",
    emoji: "🚴‍♂️",
    left: "10%",
    top: "35%",
    description: "Enjoying nature while staying active on two wheels.",
  },
  {
    title: "Cooking",
    emoji: "🍳",
    left: "35%",
    top: "40%",
    description: "Experimenting with flavors and creating delicious meals.",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "70%",
    top: "45%",
    description: "Capturing memories and perspectives through a lens.",
  },
  {
    title: "Traveling",
    emoji: "✈️",
    left: "5%",
    top: "65%",
    description: "Exploring new places and cultures around the world.",
  },
];
export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, What I do, and what inspires me."
        />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grids-cols-1 gap-8 md:grid md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1  p-0">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives"
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book cover" />
              </div>
            </Card>
            <Card className="h-[320px]  md:col-span-3 lg:col-span-2 p-0">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools i use to create exceptional
                digital experiences."
                className=""
              />

              <Toolboxitems items={toolboxItems} className="" itemsWrapperClassname="animate-move-left [animation-duration:30s]" />
              <Toolboxitems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassname=" animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
          <Card className="h-[320px]  flex flex-col md:col-span-3 lg:col-span-2 p-0">
            <div>
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
            </div>
            <div className="relative flex-1 " ref={constraintRef}>
              {hobbies.map((hobby) => (
                <motion.div
                  key={hobby.title}
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute "
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                  drag
                  dragConstraints={constraintRef}
                >
                  <span className="font-medium text-gray-950">
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
            <Image
              src={mapImage}
              alt="map"
              className="h-full w-full object-cover object-left-top"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s] "></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
              <Image
                src={smileMemoji}
                alt="smiling memoji"
                className="size-20"
              />
            </div>
          </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
