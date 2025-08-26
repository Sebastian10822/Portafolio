import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-6 text-center border-t border-gray-700">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://www.linkedin.com/in/sebasti%C3%A1n-bri%C3%B1ez-602ba5326/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 text-2xl transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white text-2xl transition-colors duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:sebasmo2242@gmail.com"
          className="text-gray-400 hover:text-red-400 text-2xl transition-colors duration-300"
        >
          <FaEnvelope />
        </a>
      </div>

      <p className="text-sm text-gray-500">
        © 2025 Sebastian Briñez. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
