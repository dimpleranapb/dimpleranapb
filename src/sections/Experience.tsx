import React from 'react';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Tech Company',
    duration: 'Jan 2020 - Present',
    description: 'Developed and maintained web applications using React and Node.js.'
  },
  {
    title: 'Frontend Developer',
    company: 'Web Solutions',
    duration: 'Jun 2018 - Dec 2019',
    description: 'Created responsive and interactive user interfaces with HTML, CSS, and JavaScript.'
  },
  {
    title: 'Intern',
    company: 'Startup Inc.',
    duration: 'Jan 2018 - May 2018',
    description: 'Assisted in the development of a mobile application using React Native.'
  }
];

export default function Experience() {
  return (
    <div className="experience-section p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item mb-6">
          <h3 className="text-xl font-semibold">{exp.title}</h3>
          <h4 className="text-lg text-gray-600">{exp.company}</h4>
          <p className="text-gray-500">{exp.duration}</p>
          <p className="text-gray-700">{exp.description}</p>
        </div>
      ))}
    </div>
  );
}