import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '@/data/portfolioData';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Habilidades</h2>
          <div className="w-24 h-1 gradient-bg mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Domino una amplia gama de tecnologías modernas para crear soluciones completas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform"
            >
              <div className="flex items-center mb-4">
                <skill.icon className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              
              <div className="mb-2">
                <div className="flex justify-between text-sm text-gray-400 mb-1">
                  <span>Nivel</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 skill-bar">
                  <motion.div
                    className="gradient-bg h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;