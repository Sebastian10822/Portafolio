import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { projectsData } from '@/data/portfolioData';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Proyectos Destacados</h2>
          <div className="w-24 h-1 gradient-bg mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes y desafiantes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl overflow-hidden project-card"
            >
              <div className="relative">
                <img
                  className="w-full h-48 object-cover"
                  alt={`${project.title} project screenshot`}
                  src="https://images.unsplash.com/photo-1595872018818-97555653a011" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
  <a 
    href={project.demo}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1"
  >
    <Button size="sm" className="gradient-bg w-full">
      <ExternalLink size={16} className="mr-2" />
      Ver Demo
    </Button>
  </a>

  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button size="sm" variant="outline" className="border-purple-500">
      <Github size={16} />
    </Button>
  </a>
</div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;