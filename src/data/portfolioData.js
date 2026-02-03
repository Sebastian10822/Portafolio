import { Code, Palette, Database, Smartphone } from 'lucide-react';

export const skillsData = [
  { name: 'JavaScript', level: 95, icon: Code },
  { name: 'React', level: 90, icon: Code },
  { name: 'Node.js', level: 85, icon: Database },
  { name: 'Python', level: 80, icon: Code },
  { name: 'Html', level: 75, icon: Palette },
  { name: 'css', level: 70, icon: Smartphone }
];

export const projectsData = [
 {
    title: "CYBERNEX STORE",
    description: "Tienda online moderna con diseño responsive, desarrollada con HTML, CSS y JavaScript, desplegada en GitHub Pages.",
    image: "public/Imagenes/CYBERNEX.png",
    demo: "https://sebastian10822.github.io/CYBERNEX-STORE/",
    github: "https://github.com/Sebastian10822/CYBERNEX-STORE"
  },
  {
    title: 'Task Management App',
    description: 'Aplicación de gestión de tareas con colaboración en tiempo real',
    tech: ['Vue.js', 'Firebase', 'Socket.io'],
    image: 'Clean task management interface with drag and drop functionality'
  },
  {
    title: 'Portfolio Website',
    description: 'Sitio web de portafolio responsivo con animaciones avanzadas',
    tech: ['React', 'Framer Motion', 'TailwindCSS'],
    image: 'Beautiful portfolio website with modern design and animations'
  }
];

export const navLinks = [
  { id: 'home', label: 'Inicio' },
  { id: 'about', label: 'Acerca' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'contact', label: 'Contacto' },
];