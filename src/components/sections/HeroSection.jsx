import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';

const HeroSection = ({ scrollToSection, handleDownloadCV }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <img
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-purple-500 glow-effect floating-animation"
              alt="Professional developer portrait"
              src="/Imagenes/favicon.png"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hola, soy <span className="gradient-text">Sebastian</span>
          </h1>
          
          <div className="text-xl md:text-2xl mb-8 h-16">
            <span className="typing-animation">
              Desarrollador Full Stack 
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Creo experiencias digitales excepcionales combinando código limpio con diseño innovador. 
            Especializado en React, Node.js y tecnologías modernas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="gradient-bg hover:scale-105 transition-transform"
              onClick={() => scrollToSection('projects')}
            >
              Ver Proyectos <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
              onClick={handleDownloadCV}
            >
              Descargar CV <Download className="ml-2" size={20} />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;