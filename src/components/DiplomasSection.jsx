import React from 'react';
import { motion } from 'framer-motion';

const DiplomasSection = () => {
  const diplomas = [
    {
      title: 'Diploma de Desarrollo Web',
      description: 'Certificado por la Universidad XYZ - 2024',
      image: 'public/Imagenes/Diploma 1.jpg',
    },
    {
      title: 'Certificado en React',
      description: 'Emitido por Udemy - 2025',
      image: 'public/Imagenes/diploma 2.jpg',
    },
    {
      title: 'Curso Avanzado de JavaScript',
      description: 'Certificado por Platzi - 2025',
      image: 'public/Imagenes/diploma 3.jpg',
    },
    {
      title: 'Curso de Node.js',
      description: 'Certificado por Coursera - 2025',
      image: 'public/Imagenes/diploma 4.jpg',
    },
    {
      title: 'Curso de TypeScript',
      description: 'Certificado por Alura - 2025',
      image: 'public/Imagenes/diploma 5.jpg',
    },
    {
      title: 'Diploma en Bases de Datos',
      description: 'Certificado por Oracle Academy - 2025',
      image: 'public/Imagenes/diploma 6.jpg',
    },
  ];

  return (
    <section id="diplomas" className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 gradient-text">Mis Diplomas</h2>
          <div className="w-28 h-1 gradient-bg mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Una muestra de mis logros y certificaciones más destacados.
          </p>
        </motion.div>

        {/* Diplomas */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {diplomas.map((diploma, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-transform"
            >
              <img 
                src={diploma.image} 
                alt={diploma.title} 
                className="w-full h-64 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{diploma.title}</h3>
                <p className="text-gray-400 text-lg">{diploma.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiplomasSection;

