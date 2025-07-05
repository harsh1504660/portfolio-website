import React from 'react';
import { Button } from '@/components/ui/button'; // Replace or customize if needed

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center bg-brand-deep-blue px-4">
      <div className="max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <h1 className="text-brand-teal text-lg sm:text-xl font-mono mb-4">Hi, my name is</h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brand-light-slate mb-4">
          Harsh Joshi.
        </h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-slate mb-8">
          I build AI for the web.
        </h3>
        <p className="text-brand-slate text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-12">
          I'm an AI/ML enthusiast with experience in deep learning, computer vision, and data science. I build real-world projects in areas like chemical reaction prediction, plant disease detection, and food analysis.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
          <Button
            onClick={scrollToContact}
            variant="outline"
            className="border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-brand-deep-blue py-3 px-8 text-lg transition-all duration-300"
          >
            Get In Touch
          </Button>

          <a
            href="/harsh_joshi_resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-brand-deep-blue py-3 px-8 text-lg transition-all duration-300"
            >
              My Resume
            </Button>
          </a>

          <a href="/bot">
            <Button
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-500 hover:to-pink-500 text-white py-3 px-8 text-lg font-semibold shadow-lg transition-all duration-300"
            >
              💬 Chat with AI
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
