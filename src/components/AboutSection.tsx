
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-brand-light-navy">
      <div className="container mx-auto">
        <h2 className="section-title animate-on-scroll">About Me</h2>
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3 text-brand-slate space-y-6 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <p>
              I'm Harsh Joshi, a B.E. student in Electronics and Telecommunications at DYPCOE, Pune, with hands-on experience building impactful AI/ML solutions across domains like chemical reaction prediction, plant disease detection, and food ingredient analysis. My work bridges science and technology, using tools like TensorFlow, PyTorch, and Hugging Face to transform raw data into intelligent systems.
              </p>
              <p>
               I've led and contributed to projects involving computer vision, NLP, and hyperspectral data analysis, backed by a strong foundation in problem-solving and participation in national-level hackathons. Passionate about applying AI for real-world impact, I’m eager to collaborate on innovative and socially relevant AI applications.
            </p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-sm">
              <li className="before:content-['▹'] before:mr-2 before:text-brand-teal">JavaScript (ES6+)</li>
              <li className="before:content-['▹'] before:mr-2 before:text-brand-teal">React</li>
              <li className="before:content-['▹'] before:mr-2 before:text-brand-teal">TypeScript</li>
              <li className="before:content-['▹'] before:mr-2 before:text-brand-teal">Node.js</li>
              <li className="before:content-['▹'] before:mr-2 before:text-brand-teal">Tailwind CSS</li>
              <li className="before:content-['▹'] before:mr-2 before:text-brand-teal">Next.js</li>
            </ul>
          </div>
          <div className="md:col-span-2 flex justify-center animate-on-scroll" style={{ animationDelay: '0.4s' }}>
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-md bg-brand-teal relative group">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydGZvbGlvJTIwd2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Your Name"
                className="absolute inset-0 w-full h-full object-cover rounded-md z-10 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"
              />
              <div className="absolute inset-0 w-full h-full border-2 border-brand-teal rounded-md transform translate-x-4 translate-y-4 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
