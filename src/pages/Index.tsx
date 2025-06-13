
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import CertificatesSection from '@/components/CertificatesSection';
import ArticlesSection from '@/components/ArticlesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const Index = () => {
  const { observeElementsByClass } = useIntersectionObserver({ threshold: 0.15, rootMargin: '0px 0px -10% 0px'});

  useEffect(() => {
    // Call this after components have mounted and elements are in the DOM
    observeElementsByClass('animate-on-scroll');
  }, [observeElementsByClass]);


  return (
    <div className="bg-brand-deep-blue text-brand-light-slate font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />

        <CertificatesSection />
        <ArticlesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
