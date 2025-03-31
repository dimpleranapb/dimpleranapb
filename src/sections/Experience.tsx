'use client';

import Image from 'next/image';
import Card from '@/components/Card';
import chaupal from '@/assets/images/chaupal.png';
import gsquare from '@/assets/images/gsquare.jpg';
import freelance from '@/assets/images/freelance.webp';
import { CardHeader } from '@/components/CardHeader';

const experiences = [
  {
    id: 1,
    title: 'Associate Web Developer',
    company: 'Chaupal OTT',
    duration: 'Nov 2024 - Present',
    desc: 'Managing blogging sites, landing pages, SEO, and developing internal tools like an anonymous feedback app using Next.js, MongoDB, and NextAuth.',
    thumbnail: chaupal,
  },
  {
    id: 2,
    title: 'MERN Stack Intern',
    company: 'Gsquare Web Technologies',
    duration: 'Aug 2024 - Nov 2024',
    desc: 'Worked on full-stack development with React, Node.js, MongoDB, and implemented RESTful APIs while collaborating on responsive web applications.',
    thumbnail: gsquare,
  },
  {
    id: 3,
    title: 'Freelance Blogger & Developer',
    company: 'Self-Employed',
    duration: '2021 - 2023',
    desc: 'Developed and managed WordPress blogs, implemented SEO strategies, and monetized through Google AdSense.',
    thumbnail: freelance,
  },
];

const Experience = () => {
  return (
    <div className="py-16 px-4 w-full flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mb-8">
        My <span className="text-purple-500">Work Experience</span>
      </h1>

      <div className="flex flex-col items-center gap-10 w-full max-w-3xl">
        {experiences.map((exp) => (
          <Card
            key={exp.id}
            className="px-6 pt-6 pb-4 md:pt-8 md:px-8 lg:pt-10 lg:px-12 w-full rounded-xl shadow-lg bg-gray-800"
          >
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-6">
              {/* Left Section */}
              <div className="flex-1 text-center lg:text-left">
                <CardHeader title={exp.company} description={exp.duration} />
                <h3 className="font-serif text-lg md:text-2xl font-semibold mt-2 text-white">
                  {exp.title}
                </h3>
                <hr className="border-t border-gray-700 mt-3 md:mt-4" />
                <p className="text-gray-300 mt-3 md:mt-4 text-sm md:text-base">
                  {exp.desc}
                </p>
              </div>

              {/* Right Section (Image) */}
              <div className="mt-6 lg:mt-0">
                <Image
                  src={exp.thumbnail}
                  alt={exp.company}
                  className="rounded-xl shadow-md"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Experience;
