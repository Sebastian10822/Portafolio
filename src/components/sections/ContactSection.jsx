import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Github, Linkedin, ArrowRight } from 'lucide-react';

const ContactSection = ({ handleContactSubmit }) => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Contacto</h2>
          <div className="w-24 h-1 gradient-bg mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Hablemos y hagámoslo realidad!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Mail className="text-purple-400 mr-4" size={24} />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-300">sebasmo2242@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Phone className="text-purple-400 mr-4" size={24} />
                <div>
                  <h3 className="font-semibold">Teléfono</h3>
                  <p className="text-gray-300">3112495143</p>
                </div>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <MapPin className="text-purple-400 mr-4" size={24} />
                <div>
                  <h3 className="font-semibold">Ubicación</h3>
                  <p className="text-gray-300">Cuidad Buga, Guadarajara</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button size="icon" variant="outline" className="border-purple-500 hover:bg-purple-500">
                <Github size={20} />
              </Button>
              <Button size="icon" variant="outline" className="border-purple-500 hover:bg-purple-500">
                <Linkedin size={20} />
              </Button>
              <Button size="icon" variant="outline" className="border-purple-500 hover:bg-purple-500">
                <Mail size={20} />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleContactSubmit} className="glass-effect p-8 rounded-xl space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <Button type="submit" className="w-full gradient-bg hover:scale-105 transition-transform">
                Enviar Mensaje
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;