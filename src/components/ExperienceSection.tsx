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
    title: 'Data Science Intern',
    company: 'Agri Spectra AI Inc.',
    companyLink: '#',
    date: 'Oct 2024 - May 2025',
    responsibilities: [
      'Dveloped and maintained data pipelines for agricultural data analysis.',
      'Implemented machine learning models to detect crop diseases in hyperspectral images.',
      'Implemented MLFlow for model management and deployment.',
      'Developed MVP for the company\'s flagship product.',
      'Integrated firestore for real-time data storage and retrieval.',
    ],
  },
  {
    id: 2,
    title: 'Freelance Technical Writer',
    company: 'In plain English pvt. ltd.',
    companyLink: '#',
    date: 'Sep 2023 - Present',
    responsibilities: [
      'Researched and wrote technical articles on various topics.',
      'Articles included tutorials, product reviews, and industry insights.',
      'Focused on machine learning techniques and their applications.',
      'Published 5 articles on medium.com for the company.',
    ],
  },
  {
    id: 3,
    title: 'Member of Programming Team',
    company: 'D.Y. Patil Robotics & AI Club (DRAIC)',
    companyLink: '#',
    date: 'Jan 2023 - May 2024',
    responsibilities: [
      'Worked on various projects involving robotics and AI.',
      'Bots like line following, obstacle avoidance, and object detection.',
      'Integrated AI algorithms for enhanced functionality.',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-brand-light-navy py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title animate-on-scroll mb-12 text-center text-3xl font-bold text-white">
          Work Experience
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-0.5 bg-brand-slate/50 transform md:-translate-x-1/2"></div>

          {experienceData.map((item, index) => (
            <div
              key={item.id}
              className={`mb-12 flex flex-col md:items-start md:flex-row ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              } animate-on-scroll`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Timeline circle */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-brand-teal rounded-full border-4 border-brand-light-navy transform md:-translate-x-1/2 -translate-y-1"></div>

              {/* Spacer for alignment in md view */}
              <div className="hidden md:flex flex-col items-center w-1/2 px-4" />

              {/* Content Card */}
              <div className="w-full md:w-1/2 bg-brand-deep-blue p-6 rounded-lg shadow-lg md:mx-4 relative ml-10 md:ml-0">
                {/* Pointer (desktop only) */}
                <div
                  className={`hidden md:block absolute top-4 h-0 w-0 border-t-8 border-b-8 ${
                    index % 2 === 0
                      ? '-right-3 border-l-8 border-l-brand-deep-blue border-r-0 border-transparent'
                      : '-left-3 border-r-8 border-r-brand-deep-blue border-l-0 border-transparent'
                  }`}
                ></div>

                <h3 className="text-2xl font-semibold text-brand-light-slate mb-1">{item.title}</h3>
                <p className="text-brand-teal mb-1">
                  {item.companyLink ? (
                    <a
                      href={item.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
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
