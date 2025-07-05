
import React from 'react';
import { Zap, Code, Database, Cloud, Settings, Users ,Bot,Library} from 'lucide-react'; // Example icons

const skillsData = [
  { name: 'Python & Django', Icon: Code, description: "Full-stack development with Python, creating robust web applications." },
  { name: 'TensorFlow & Pytorch', Icon: Bot, description: "building and training deep learning models for computer vision and classification tasks." },
  { name: 'HugginFace & MLflow', Icon: Library, description: "managing machine learning workflows and transformers for state-of-the-art NLP model development." },
  { name: 'React & Next.js', Icon: Code, description: "Building dynamic and responsive user interfaces with component-based architecture." },
  { name: 'LangChain', Icon: Code, description: "A modular function that connects language models to external data or services, enabling dynamic, multi-step reasoning workflows." },
  { name: 'Node.js & Express', Icon: Database, description: "Developing server-side applications and RESTful APIs." },
  { name: 'Databases (SQL & NoSQL)', Icon: Database, description: "Working with MongoDB, and Firebase for data storage and management." },
  { name: 'Cloud Platforms (GCP, Vercel)', Icon: Cloud, description: "Deploying and managing applications on cloud infrastructure." },
  
];

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-brand-deep-blue">
      <div className="container mx-auto">
        <h2 className="section-title animate-on-scroll">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-brand-light-navy p-6 rounded-lg shadow-lg hover:shadow-brand-teal/20 transition-all duration-300 transform hover:-translate-y-1 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <skill.Icon className="text-brand-teal mr-3" size={28} />
                <h3 className="text-xl font-semibold text-brand-light-slate">{skill.name}</h3>
              </div>
              <p className="text-brand-slate text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
