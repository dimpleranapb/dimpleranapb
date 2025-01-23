import Card from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book.png";
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
  },
  {
    title: "Gaming",
    emoji: "🎮",
  },
  {
    title: "Painting",
    emoji: "🎨",
  },
  {
    title: "Painting",
    emoji: "🎨",
  },
  {
    title: "Painting",
    emoji: "🎨",
  },
  {
    title: "Painting",
    emoji: "🎨",
  },
];
export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, What I do, and what inspires me."
        />

        <div className="mt-20">
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my perspectives"
            />
            <div className="w-40 mx-auto mt-8">
              <Image src={bookImage} alt="Book cover" />
            </div>
          </Card>
          <Card className="h-[320px] p-0">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools i use to create exceptional
                digital experiences."
                className="px-6 pt-6"
              />
              <Toolboxitems items={toolboxItems} />
              <Toolboxitems items={toolboxItems} />


          </Card>
          <Card>
            <div>
              <StarIcon />
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
              />
            </div>
            <Image src={bookImage} alt="Book cover" />
            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image src={mapImage} alt="map" />
            <Image src={smileMemoji} alt="smiling memoji" />
          </Card>
        </div>
      </div>
    </div>
  );
};
