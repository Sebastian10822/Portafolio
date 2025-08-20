import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Acerca de Mí</h2>
          <div className="w-24 h-1 gradient-bg mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              className="rounded-2xl shadow-2xl glow-effect"
              alt="Developer working on multiple projects"
              src="public/Imagenes/1.jpg" 
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <section id="about" className="py-20 bg-slate-900 text-center px-6 md:px-20">
  <h2 className="text-4xl font-bold mb-6 text-purple-400">Sobre mí</h2>
  <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-gray-300">
    Hola 👋, soy <span className="text-white font-semibold">Sebastián Briñez</span>, 
    un apasionado del <span className="text-purple-300">desarrollo web</span> y la 
    creación de proyectos que mezclan <span className="text-purple-300">tecnología y diseño</span>.  
    Me encanta transformar ideas en experiencias digitales que sean 
    <span className="text-purple-300"> útiles, atractivas y memorables</span>.  

    <br /><br />
    Cuando no estoy programando, probablemente me encuentres explorando nuevas 
    tecnologías, soñando con inteligencia artificial o disfrutando de buena música.  
    🚀✨
  </p>
</section>

            
            <p className="text-lg text-gray-300 leading-relaxed">
              Me especializo en el desarrollo full-stack, desde interfaces de usuario 
              intuitivas hasta arquitecturas backend robustas. Siempre estoy aprendiendo 
              nuevas tecnologías y metodologías para mantenerme al día con las tendencias 
              de la industria.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="glass-effect p-4 rounded-lg text-center">
                <div className="text-3xl font-bold gradient-text">10+</div>
                <div className="text-sm text-gray-400">Proyectos Completados</div>
              </div>
              <div className="glass-effect p-4 rounded-lg text-center">
                <div className="text-3xl font-bold gradient-text">1+</div>
                <div className="text-sm text-gray-400">Años de Experiencia</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;