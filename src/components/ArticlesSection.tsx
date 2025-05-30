
import React from 'react';
import { ExternalLink, Pen } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  platform: string; // e.g., Medium, Dev.to, Personal Blog
  date: string;
  link: string;
  excerpt: string;
}

const articlesData: Article[] = [
  {
    id: 1,
    title: 'Mastering Machine Learning: Types, Tools, and Triumphs',
    platform: 'Medium',
    date: 'Published Sep 10, 2023',
    link: 'https://medium.com/python-in-plain-english/mastering-machine-learning-types-tools-and-triumphs-119ee7c12ad2',
    excerpt: 'A deep dive into basic of machine learning, covering types, tools, and real-world applications.',
  },
  {
    id: 2,
    title: 'Understanding Feature Scaling in Machine Learning: Techniques, Implementation, and Advantages',
    platform: 'Medium',
    date: 'Published Sep 24, 2023',
    link: 'https://medium.com/python-in-plain-english/understanding-feature-scaling-in-machine-learning-techniques-implementation-and-advantages-fd9065a349aa',
    excerpt: 'A beginner-friendly guide to feature scaling in machine learning, including techniques, implementation, and advantages.',
  },
  {
    id: 3,
    title: 'IPL Win Predictor: Analyzing Winning Probabilities',
    platform: 'Medium',
    date: 'Published Oct 14, 2023',
    link: 'https://medium.com/python-in-plain-english/ipl-win-predictor-analyzing-winning-probabilities-d9f4f38e0226',
    excerpt: 'Exploring the IPL Win Predictor project, analyzing winning probabilities using machine learning techniques.',
  },
    {
    id: 4,
    title: 'IPL Win Predictor: Easy Streamlit Development and Deployment Guide',
    platform: 'Medium',
    date: 'Published Oct 23, 2023',
    link: 'https://medium.com/python-in-plain-english/ipl-win-predictor-easy-streamlit-development-and-deployment-guide-bce15bce99b1',
    excerpt: 'A comprehensive guide to developing and deploying the IPL Win Predictor using Streamlit, covering setup, development, and deployment.',
  },
    {
    id: 5,
    title: 'From Missing to Meaning: Strategies for Effectively Handling Missing Data',
    platform: 'Medium',
    date: 'Published Feb 04, 2024',
    link: 'https://medium.com/python-in-plain-english/from-missing-to-meaning-strategies-for-effectively-handling-missing-data-220b33c8f511',
    excerpt: 'A comprehensive guide on handling missing data in machine learning, covering strategies, techniques, and best practices.',
  },
];

const ArticlesSection = () => {
  return (
    <section id="articles" className="bg-brand-light-navy py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title animate-on-scroll text-center text-3xl font-bold text-white mb-12">
          My Writings
        </h2>

        {articlesData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articlesData.map((article, index) => (
              <div
                key={article.id}
                className="relative animate-on-scroll bg-brand-deep-blue p-6 rounded-xl shadow-xl hover:shadow-brand-teal/20 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Decorative left border */}
                <div className="absolute top-0 bottom-0 left-0 w-1 bg-brand-teal rounded-l-xl"></div>

                <div className="flex items-center mb-2">
                  <Pen className="text-brand-teal mr-3 shrink-0" size={20} />
                  <h3 className="text-xl font-semibold text-brand-light-slate hover:text-brand-teal transition-colors">
                    <a href={article.link} target="_blank" rel="noopener noreferrer">
                      {article.title}
                    </a>
                  </h3>
                </div>

                <p className="text-xs text-brand-slate font-mono mb-3">
                  {article.platform} &bull; {article.date}
                </p>
                <p className="text-brand-slate text-sm mb-4">{article.excerpt}</p>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-teal hover:text-brand-light-slate inline-flex items-center transition-colors"
                >
                  Read Article <ExternalLink size={16} className="ml-1.5" />
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-brand-slate animate-on-scroll">
            I haven't published any articles yet, but stay tuned!
          </p>
        )}
      </div>
    </section>
  );
};

export default ArticlesSection;
