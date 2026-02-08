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
  title: 'CYBERNEX STORE',
  description: 'Tienda online futurista con diseño moderno y enfoque tecnológico.',
  tech: ['React', 'Vite', 'TailwindCSS'],
  demo: 'https://sebastian10822.github.io/CYBERNEX-STORE/',
  github: 'https://github.com/Sebastian10822/CYBERNEX-STORE',
  image: 'Imagenes/cybernex.png'
},

{
  title: 'Laureles-brasas',
  description: 'Aplicación web para gestión de tareas con colaboración en tiempo real, sincronización en la nube y sistema drag & drop.',
  tech: ['Vue.js', 'Firebase', 'Socket.io'],
  demo: 'https://bit.ly/laureles-brasas',
  github: 'Imagenes/Laureles-brasas.png',
  image: 'Imagenes/Laureles-Brasas.png'
},

  {
  title: 'Motos-store',
  description: 'Aplicación web para gestión de tareas con colaboración en tiempo real, sincronización en la nube y sistema drag & drop.',
  tech: ['Vue.js', 'Firebase', 'Socket.io'],
  demo: 'https://motos-store.vercel.app/',
  github: 'https://bit.ly/3OdEXvA',
  image: 'Imagenes/Motos-store.png'
},

];

export const navLinks = [
  { id: 'home', label: 'Inicio' },
  { id: 'about', label: 'Acerca' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'contact', label: 'Contacto' },
];