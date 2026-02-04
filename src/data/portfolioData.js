import { Code, Palette, Database, Smartphone } from 'lucide-react';

import CyberImg from '../../public/Imagenes/cybernex.png' 
import laureles_brasa from '../../public/Imagenes/Laureles-Brasas.png' 



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
  title: 'CYBERNEX-STORE',
  description: 'Aplicación web para gestión de tareas con colaboración en tiempo real, sincronización en la nube y sistema drag & drop.',
  tech: ['Vue.js', 'Firebase', 'Socket.io'],
  demo: 'https://bit.ly/cyber nex',
  github: 'public/Imagenes/Laureles-Brasas.png',
  image: CyberImg 
},

 {
  title: 'Laureles-brasas',
  description: 'Aplicación web para gestión de tareas con colaboración en tiempo real, sincronización en la nube y sistema drag & drop.',
  tech: ['Vue.js', 'Firebase', 'Socket.io'],
  demo: 'https://bit.ly/laureles-brasas',
  github: 'public/Imagenes/Laureles-brasas.png',
  image: 'public/Imagenes/Laureles-Brasas.png'
},

  {
  title: 'Task Management App',
  description: 'Aplicación web para gestión de tareas con colaboración en tiempo real, sincronización en la nube y sistema drag & drop.',
  tech: ['Vue.js', 'Firebase', 'Socket.io'],
  demo: 'https://TU-LINK-DEMO-AQUI.com',
  github: 'https://github.com/TU-USUARIO/TU-REPO',
  image: ''
},

];

export const navLinks = [
  { id: 'home', label: 'Inicio' },
  { id: 'about', label: 'Acerca' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'contact', label: 'Contacto' },
];