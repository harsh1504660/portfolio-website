
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
    title: 'Understanding Asynchronous JavaScript',
    platform: 'Medium',
    date: 'Published Oct 15, 2023',
    link: '#',
    excerpt: 'A deep dive into Promises, async/await, and the event loop in JavaScript, making complex concepts easy to understand.',
  },
  {
    id: 2,
    title: 'Getting Started with Tailwind CSS in React Projects',
    platform: 'Dev.to',
    date: 'Published Nov 02, 2023',
    link: '#',
    excerpt: 'A beginner-friendly guide to integrating Tailwind CSS into your React applications for rapid UI development.',
  },
  {
    id: 3,
    title: 'The Importance of Accessibility in Web Design',
    platform: 'Personal Blog',
    date: 'Published Dec 10, 2023',
    link: '#',
    excerpt: 'Exploring why web accessibility matters and practical tips for building more inclusive websites.',
  },
];

const ArticlesSection = () => {
  return (
    <section id="articles" className="bg-brand-light-navy">
      <div className="container mx-auto">
        <h2 className="section-title animate-on-scroll">My Writings</h2>
        {articlesData.length > 0 ? (
          <div className="space-y-8">
            {articlesData.map((article, index) => (
              <div
                key={article.id}
                className="bg-brand-deep-blue p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-brand-teal/20 transform hover:-translate-y-1 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-2">
                   <Pen className="text-brand-teal mr-3 shrink-0" size={20} />
                  <h3 className="text-xl md:text-2xl font-semibold text-brand-light-slate">
                    <a href={article.link} target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal transition-colors">
                      {article.title}
                    </a>
                  </h3>
                </div>
                <p className="text-xs text-brand-slate font-mono mb-3">{article.platform} &bull; {article.date}</p>
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
          <p className="text-center text-brand-slate animate-on-scroll">I haven't published any articles yet, but stay tuned!</p>
        )}
      </div>
    </section>
  );
};

export default ArticlesSection;
