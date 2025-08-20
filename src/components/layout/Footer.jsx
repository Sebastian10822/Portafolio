import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-black/40 border-t border-white/10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Alex Desarrollador. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;