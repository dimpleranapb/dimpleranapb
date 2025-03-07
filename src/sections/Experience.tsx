'use client';

import Image from 'next/image';
import Card from '@/components/Card';
import {CardHeader} from '@/components/CardHeader';

const experiences = [
  {
    id: 1,
    title: 'Associate Web Developer',
    company: 'Chaupal OTT',
    duration: 'Nov 2024 - Present',
    desc: 'Managing blogging sites, landing pages, SEO, and developing internal tools like an anonymous feedback app using Next.js, MongoDB, and NextAuth.',
    thumbnail: '/images/chaupal.png',
  },
  {
    id: 2,
    title: 'MERN Stack Intern',
    company: 'Gsquare Web Technologies',
    duration: 'Aug 2024 - Nov 2024',
    desc: 'Worked on full-stack development with React, Node.js, MongoDB, and implemented RESTful APIs while collaborating on responsive web applications.',
    thumbnail: '/images/gsquare.png',
  },
  {
    id: 3,
    title: 'Freelance Blogger & Developer',
    company: 'Self-Employed',
    duration: '2021 - 2023',
    desc: 'Developed and managed WordPress blogs, implemented SEO strategies, and monetized through Google AdSense.',
    thumbnail: '/images/freelance.png',
  },
];

const Experience = () => {
  return (
    <div className="py-16 w-full flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mb-8">
        My <span className="text-purple-500">Work Experience</span>
      </h1>
      <div className="relative flex flex-col items-center gap-6">
        {experiences.map((exp, index) => (
          <Card
            key={exp.id}
            className="px-6 pt-6 mt-2 pb-0 md:pt-8 md:px-8 lg:pt-12 lg:px-14 w-full max-w-2xl"
            style={{ top: `calc(48px + ${index * 30}px)` }}
          >
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="lg:pb-8">
                <CardHeader title={exp.company} description={exp.duration} />
                <h3 className="font-serif text-xl mt-2 md:text-3xl">
                  {exp.title}
                </h3>
                <hr className="border-t border-white/10 mt-3 md:mt-4" />
                <p className="text-gray-300 mt-3 md:mt-4 text-sm md:text-base">{exp.desc}</p>
              </div>
              <div className="relative flex justify-center lg:justify-end">
                <Image
                  src={exp.thumbnail}
                  alt={exp.company}
                  className="mt-6 -mb-3 md:-mb-0 lg:mt-0 lg:absolute lg:h-32 lg:w-32 rounded-[18px]"
                  width={128}
                  height={128}
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
