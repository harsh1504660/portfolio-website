
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-brand-deep-blue text-center">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-brand-teal font-mono text-lg mb-2 animate-on-scroll">07. What's Next?</h2>
        <h3 className="section-title !text-4xl md:!text-5xl !mb-6 animate-on-scroll" style={{ animationDelay: '0.1s' }}>Get In Touch</h3>
        <p className="text-brand-slate mb-10 max-w-lg mx-auto animate-on-scroll" style={{ animationDelay: '0.2s' }}>
          My inbox is always open. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you! Feel free to reach out.
        </p>
        <div className="animate-on-scroll" style={{ animationDelay: '0.3s' }}>
          <Button
            asChild
            variant="outline"
            className="border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-brand-deep-blue py-4 px-10 text-lg transition-all duration-300"
          >
            <a href="mailto:your.email@example.com">Say Hello</a>
          </Button>
        </div>

        <div className="mt-16 flex justify-center space-x-6 animate-on-scroll" style={{ animationDelay: '0.4s' }}>
            <a href="mailto:harshsmj1504@gmail.com" aria-label="Email me" className="text-brand-slate hover:text-brand-teal transition-colors">
                <Mail size={28} />
            </a>
            <a href="https://github.com/harsh1504660" target="_blank" rel="noopener noreferrer" aria-label="My GitHub profile" className="text-brand-slate hover:text-brand-teal transition-colors">
                <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/harsh-joshi-20a30b20b/" target="_blank" rel="noopener noreferrer" aria-label="My LinkedIn profile" className="text-brand-slate hover:text-brand-teal transition-colors">
                <Linkedin size={28} />
            </a>
            <a href="https://x.com/Harsh_J1504" target="_blank" rel="noopener noreferrer" aria-label="My Twitter profile" className="text-brand-slate hover:text-brand-teal transition-colors">
                <Twitter size={28} />
            </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
