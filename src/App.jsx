import React, { useState, useEffect } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';
import DiplomasSection from './components/DiplomasSection';




import ScrollProgress from '@/components/layout/ScrollProgress';
import Particles from '@/components/layout/Particles';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
;


import { navLinks } from '@/data/portfolioData';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2; 
      let currentSection = 'home';

      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = link.id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleDownloadCV = () => {
    toast({
      title: "CV Descargado",
      description: "Tu CV se ha descargado exitosamente.",
    });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    toast({
      title: `Mensaje Enviado, ${name}!`,
      description: "Gracias por contactarme. Te responderé pronto.",
    });
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      <ScrollProgress scaleX={scaleX} />
      <Particles />
      <Navbar 
        activeSection={activeSection} 
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main>
        <HeroSection scrollToSection={scrollToSection} handleDownloadCV={handleDownloadCV} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <DiplomasSection />
         <ContactSection handleContactSubmit={handleContactSubmit} />
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
};

export default App;
