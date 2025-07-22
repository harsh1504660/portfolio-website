
import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react'; // Added ArrowRight icon
import { Button } from '@/components/ui/button';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  technologies: string[];
  liveLink?: string;
  repoLink?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'EduPath AI',
    description: 'EduPath AI is an AI-powered educational platform that provides personalized learning paths for students. It uses LLAMA 3 to to create customized roadmap and learning resources based on user input. It created quiz and solves doubts using AI.',
    imageUrl: '/ep.png',
    technologies: ['Langchain','FastAPI', 'Pinecone','React', 'Tailwind CSS'],
    liveLink: 'https://edu-path-ai-theta.vercel.app/', // Link to itself
    repoLink:'https://github.com/harsh1504660/EduPath-AI'
  },
  {
    id: 2,
    title: 'Personal Chatbot',
    description: 'A personal chatbot that can answer questions about me, my projects, and my interests. It uses a transformer model to understand and respond to user queries. It can also provide insights into my skills and experiences.',
    imageUrl: '/ss.png',
    technologies: ['Langchain','FastAPI', 'Pinecone','React', 'Tailwind CSS'],
    liveLink: 'https://harsh-joshi-portfolio-zeta.vercel.app/bot', // Link to itself
    repoLink:'https://github.com/harsh1504660/Personal_ChatBot'
  },
    {
    id: 3,
    title: 'VoiceCast AI',
    description: 'An AI-powered system that generates both audio and video podcasts from user-provided topics, featuring automated thumbnail creation based on the topic and a centralized global podcast feed for easy access and distribution',
    imageUrl: '/SS11.png',
    technologies: ['Langchain', 'PostgreSQL', 'React','FastAPI'],
    liveLink: 'https://voicecast-ai.netlify.app/',
    repoLink: 'https://github.com/harsh1504660/VoiceCast-AI',
  },
  {
    id: 4,
    title: 'Smart Answer Evaluater',
    description: 'AI enabled answer evaluator that uses a transformer model to evaluate answers based on the given question. It provides a score and feedback on the answer.',
    imageUrl: '/sae1.png',
    technologies: ['Tensorflow', 'Transformer', 'Flask', 'HTML/CSS','FastAPI'],
    liveLink: 'https://smart-answer-evaluator.onrender.com',
    repoLink: 'https://github.com/harsh1504660/Smart-Answer-Evaluator',
  },
  {
    id: 5,
    title: 'Hand Gesture VLC Media Controller',
    description: 'A hand gesture-based media controller that uses computer vision to control VLC media player. It recognizes hand gestures and maps them to media controls like play, pause, next, and previous.',
    imageUrl: '/hgvc.png',
    technologies: ['Tensorflow', 'Tkinter', 'Material UI'],
    repoLink: 'https://github.com/harsh1504660/Gesture-Media-Controller',
  },
  {
    id: 6,
    title: "Agri Spectra AI [MVP]",
    description: "Agri Spectra AI is an AI-powered platform that provides insights into agricultural data. It uses machine learning to analyze crop health, predict yields, and optimize farming practices.",
    imageUrl: '/agri.png', // Teal bg, Deep Blue text
    technologies: ['Node.js', 'React', 'Python', 'Firebase','GCP'],
    liveLink: 'https://agri-spectra.com/',

  },
  {
    id: 7,
    title: "Diabetes Prediction App",
    description: "A web application that predicts the likelihood of diabetes based on user input. It uses machine learning models to analyze health data and provide predictions.",
    imageUrl: '/dd.png', // Hot Pink bg, Deep Blue text
    technologies: ['Scikit-learn', 'Streamlit', 'MLFlow', 'Pandas'],
    liveLink: 'https://diabetes-predictor-ankmxawcztpjgcsmlkyybw.streamlit.app/',
    repoLink: 'https://github.com/harsh1504660/Diabetes-Predictor',
  },
];

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  return (
    <section id="projects" className="bg-brand-deep-blue py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title animate-on-scroll relative">
          
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="bg-brand-light-navy rounded-lg shadow-lg overflow-hidden flex flex-col transition-all duration-500 hover:shadow-brand-teal/30 transform hover:-translate-y-2 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {project.imageUrl && (
                <div className="relative overflow-hidden group">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-brand-deep-blue/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {project.liveLink && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="mr-3 bg-transparent border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-brand-deep-blue"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.liveLink, '_blank');
                        }}
                      >
                        View Demo
                      </Button>
                    )}
                    {project.repoLink && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="bg-transparent border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-brand-deep-blue"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.repoLink, '_blank');
                        }}
                      >
                        Source Code
                      </Button>
                    )}
                  </div>
                </div>
              )}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-brand-light-slate mb-3 flex items-center">
                  {project.title}
                  <span className={`ml-2 transform transition-transform duration-300 ${hoveredProject === project.id ? 'translate-x-1' : ''}`}>
                    <ArrowRight size={18} className="text-brand-teal" />
                  </span>
                </h3>
                <p className="text-brand-slate text-sm mb-4 flex-grow">{project.description}</p>
                <div className="mb-4 flex flex-wrap">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block bg-brand-deep-blue text-brand-teal text-xs font-mono px-2 py-1 rounded-full mr-2 mb-2 transition-all duration-300 hover:bg-brand-teal hover:text-brand-deep-blue"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex space-x-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-teal hover:text-brand-light-slate transition-colors"
                      aria-label={`Live demo of ${project.title}`}
                    >
                      <ExternalLink size={22} className="transform transition-transform duration-300 hover:scale-110" />
                    </a>
                  )}
                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-teal hover:text-brand-light-slate transition-colors"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <Github size={22} className="transform transition-transform duration-300 hover:scale-110" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 animate-on-scroll" style={{ animationDelay: `${projectsData.length * 0.1}s` }}>
          <Button 
            variant="outline"
            className="border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-brand-deep-blue py-3 px-8 text-lg transition-all duration-300 group relative overflow-hidden"
            onClick={() => window.open('https://github.com/harsh1504660', '_blank')} // Remember to update 'yourusername'
          >
            <span className="relative z-10 group-hover:translate-x-2 transition-transform duration-300 flex items-center">
              View More on GitHub 
              <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300" size={18} />
            </span>
            <span className="absolute inset-0 bg-brand-teal transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
