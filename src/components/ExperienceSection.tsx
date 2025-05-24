
import React from 'react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  companyLink?: string;
  date: string;
  responsibilities: string[];
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Tech Solutions Inc.',
    companyLink: '#',
    date: 'Jan 2022 - Present',
    responsibilities: [
      'Developed and maintained web applications using React, Node.js, and TypeScript.',
      'Collaborated with cross-functional teams to define, design, and ship new features.',
      'Integrated third-party APIs and services.',
      'Wrote clean, maintainable, and testable code.',
    ],
  },
  {
    id: 2,
    title: 'Junior Web Developer',
    company: 'Innovatech Ltd.',
    companyLink: '#',
    date: 'Jun 2020 - Dec 2021',
    responsibilities: [
      'Assisted in the development of client websites using HTML, CSS, and JavaScript.',
      'Participated in code reviews and agile development processes.',
      'Helped troubleshoot and debug issues.',
    ],
  },
  {
    id: 3,
    title: 'Web Development Intern',
    company: 'Creative Web Agency',
    companyLink: '#',
    date: 'Jan 2020 - May 2020',
    responsibilities: [
      'Learned and applied fundamental web development concepts.',
      'Supported senior developers with various tasks.',
      'Contributed to small features and bug fixes on internal projects.',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-brand-light-navy">
      <div className="container mx-auto">
        <h2 className="section-title animate-on-scroll">Work Experience</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-brand-slate/50 transform -translate-x-1/2"></div>

          {experienceData.map((item, index) => (
            <div
              key={item.id}
              className={`mb-12 flex md:items-start animate-on-scroll ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="hidden md:flex flex-col items-center w-1/2 px-4">
                {/* Spacer for non-active side */}
              </div>
              
              {/* Circle on timeline */}
              <div className="hidden md:flex absolute top-1 left-1/2 w-6 h-6 bg-brand-teal rounded-full border-4 border-brand-light-navy transform -translate-x-1/2 -translate-y-0.5 items-center justify-center">
              </div>

              {/* Content Card */}
              <div className="w-full md:w-1/2 bg-brand-deep-blue p-6 rounded-lg shadow-lg md:mx-4 relative">
                 {/* Pointer for md screens */}
                <div className={`hidden md:block absolute top-4 h-0 w-0 border-t-8 border-b-8 ${index % 2 === 0 ? '-right-3 border-l-8 border-l-brand-deep-blue border-r-0 border-transparent' : '-left-3 border-r-8 border-r-brand-deep-blue border-l-0 border-transparent'}`}></div>
                
                <h3 className="text-2xl font-semibold text-brand-light-slate mb-1">{item.title}</h3>
                <p className="text-brand-teal mb-1">
                  {item.companyLink ? (
                    <a href={item.companyLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {item.company}
                    </a>
                  ) : (
                    item.company
                  )}
                </p>
                <p className="text-sm text-brand-slate mb-3 font-mono">{item.date}</p>
                <ul className="list-none space-y-2">
                  {item.responsibilities.map((resp, i) => (
                    <li key={i} className="text-brand-slate text-sm flex">
                      <span className="text-brand-teal mr-2">▹</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
